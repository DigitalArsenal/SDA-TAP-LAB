<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { JulianDate, Viewer } from "orbpro";
  import { scenario } from "@/stores/settings.store";
  import Logos from "../Logos.svelte";
  import {
    timeSettings,
    getMultiplierForIndex,
    _times,
    timeSpan,
  } from "@/stores/timeline.store";
  import { get } from "svelte/store";
  /**
   * The `viewer` to add the timeline.
   *
   * @type {Viewer}
   */
  export let viewer: Viewer;

  let minMax = (n: number, min: number, max: number) =>
    Math.max(min, Math.min(max, n));
  let dragging: boolean, offset;
  let getDate = (d: any) => (d ? JulianDate.toDate(d) : new Date());
  let fromDate = (d: any) => (d ? JulianDate.fromDate(d) : new JulianDate());
  let dWidth = 0;
  let baseNumTicks = 60;
  let numTicks = 60;
  $: quarterTick = (n: any) => numTicks / 4;

  $: pixelsPerTimeSpan = dWidth / $timeSpan;

  let modTime: any;
  let shuttle: any = null;
  let shuttleBay: any = null;

  let containerOffsetX = 0;

  let _timesIndex = 4;
  $timeSpan = _times[_timesIndex];

  // Subscribe to multiplier changes
  scenario.settings.ClockSettings.multiplier.subscribe(
    (imultiplier: number) => {
      const multiplier = Math.abs(imultiplier);
      const setting = get(timeSettings).find(
        (s: any) =>
          multiplier >= s.minMultiplier && multiplier < s.maxMultiplier
      );
      if (setting) {
        _timesIndex = setting.index;
        $timeSpan = _times[_timesIndex];
        numTicks = Math.round((baseNumTicks * (_timesIndex + 1)) / 3);
      }
    }
  );

  // @ts-ignore
  Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (
      // @ts-ignore
      ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };

  /**
   * Events API
   */

  interface Event {
    id: string;
    title: string;
    description?: string;
    startTime: JulianDate;
    endTime: JulianDate;
    // Include any additional properties relevant to your events
  }

  let setContainerOffsetX = (d: any) =>
    -((d.getTime() / 1000) % $timeSpan) * pixelsPerTimeSpan;
  let startX = 0;
  let startContainerX;
  let shuttleModes = { SCROLL: 0, FIXED: 1 };
  let shuttleMode = shuttleModes.FIXED;
  let getClientX = (evt: any) => {
    let _x = 0;
    if (evt) {
      if (evt.clientX) {
        _x = evt.clientX;
      } else if (
        evt.changedTouches &&
        evt.changedTouches[0] &&
        evt.changedTouches[0].clientX
      ) {
        _x = evt.changedTouches[0].clientX;
      }
    }
    return _x;
  };

  let cEVT: any;
  let currentTime;
  let debounceT: any;

  onMount(() => {
    document.addEventListener("mouseup", endDrag, false);
    document.addEventListener("mousemove", drag, false);
    window.addEventListener("optimizedResize", update, false);
    window.addEventListener("resize", update, false);
    (shuttle = document.getElementById("currentTime")),
      (shuttleBay = document.getElementById("shuttleBay"));

    cEVT = viewer.clock.onTick.addEventListener((clock) => {
      let tt = new Date().getTime();
      if (debounceT && tt < debounceT + 11) return;
      debounceT = tt;
      dWidth = shuttleBay.clientWidth;
      currentTime = getDate(viewer.clock.currentTime);
      if (
        shuttleMode === shuttleModes.SCROLL &&
        !dragging &&
        viewer.clock.shouldAnimate
      ) {
        syncShuttlePosition(null, currentTime);
      } else {
        containerOffsetX = setContainerOffsetX(currentTime);
      }
    });
    setTimeout(function () {
      // @ts-ignore
      document.getElementById("timelineviewer").style = "";
    }, 500);
    update();
  });

  onDestroy(() => {
    viewer.clock.onTick.removeEventListener(cEVT);
    document.removeEventListener("mouseup", endDrag, false);
    document.removeEventListener("mousemove", drag, false);
    window.removeEventListener("optimizedResize", update, false);
    window.removeEventListener("resize", update, false);
  });

  let tickWidth = (t: any) => parseFloat(((dWidth / numTicks) * t).toFixed(2));
  let tickTime = (i: any, xpos: any) => {
    let _displayTime: any = new JulianDate();
    _displayTime = getDate(
      JulianDate.clone(viewer.clock.currentTime, _displayTime)
    );
    let _percentX = xpos / dWidth;
    let _spanSeconds = _percentX * $timeSpan;
    let _linePosition = 0.5;
    let _lineSeconds = _linePosition * $timeSpan;
    let _seconds = _spanSeconds - _lineSeconds;
    _displayTime = new Date(
      Math.round(_displayTime.getTime() + _seconds * 1000)
    );
    if (isNaN(_displayTime.getTime())) {
      //console.error("Invalid _displayTime", _displayTime);
    } else {
      let tt = _displayTime?.toISOString().replace("Z", "").replace("T", " ");
      if (_timesIndex > 3) {
        tt = tt.replace(".000", "");
      }
      return tt;
    }
  };
  // [svelte-upgrade suggestion]
  // review these functions and remove unnecessary 'export' keywords
  export function getOffsetX(evt: any) {
    if (evt.clientX || evt.changedTouches) {
      let pageX = getClientX(evt);
      return pageX - shuttleBay.getBoundingClientRect().left;
    }
  }
  export function update() {
    syncShuttlePosition(null, getDate(viewer.clock.currentTime));
  }
  export function startDrag(evt: any) {
    evt.preventDefault();
    viewer.clock.shouldAnimate = false;
    let clientX = getClientX(evt);
    dragging = true;
    startX = clientX;
    startContainerX = +containerOffsetX;
    modTime = new JulianDate();
    JulianDate.clone(viewer.clock.currentTime, modTime);
    drag(evt);
  }
  export function drag(evt: any) {
    if (dragging && shuttleMode === shuttleModes.FIXED) {
      let _seconds = -(getClientX(evt) - startX) / pixelsPerTimeSpan;
      JulianDate.addSeconds(modTime, _seconds, viewer.clock.currentTime);
    }
    return false;
  }
  export function syncShuttlePosition(xposition: any, xtime: any) {
    let _start = getDate(viewer.clock.startTime).getTime();
    let _stop = getDate(viewer.clock.stopTime).getTime();
    if (xposition) {
      let _time = minMax(
        xposition.map(0, dWidth, _start, _stop),
        _start,
        _stop
      );
      xtime = xtime || new Date(_time);
    }
    if (!xtime) return false;
    if (xposition && xtime) {
      viewer.clock.currentTime = fromDate(xtime); //only set if manual input
    }
    let _timeDelta =
      xtime.getTime() - getDate(viewer.clock.startTime).getTime();
    let _range = _stop - _start || 0;
  }

  $: infinityScroll = (i: any) => {
    containerOffsetX = (containerOffsetX || 0) % dWidth;
    let retVal =
      ((containerOffsetX >= 0 ? 0 : dWidth) +
        (tickWidth(i) + containerOffsetX)) %
      dWidth;
    return retVal || 0;
  };

  export function endDrag(evt: any) {
    evt.preventDefault();
    dragging = false;
    return false;
  }

  let mouseWheel = (evt: any) => {
    let deltaY = !isNaN(evt.deltaY) ? evt.deltaY : -evt.detail;
    let currentMultiplier = get(scenario.settings.ClockSettings.multiplier);

    // Switch the sign of the multiplier if _timesIndex is zero and deltaY is opposite sign
    if (
      _timesIndex === 0 &&
      ((deltaY < 0 && currentMultiplier > 0) ||
        (deltaY > 0 && currentMultiplier < 0))
    ) {
      currentMultiplier *= -1;
      scenario.settings.ClockSettings.multiplier.update(
        () => currentMultiplier
      );
    } else {
      // Adjust _timesIndex based on deltaY and current multiplier sign
      if (currentMultiplier > 0) {
        _timesIndex += deltaY > 0 ? 1 : -1;
      } else {
        _timesIndex += deltaY > 0 ? -1 : 1;
      }

      _timesIndex = minMax(_timesIndex, 0, get(timeSettings).length - 1);
      $timeSpan = _times[_timesIndex];
      numTicks = Math.round(baseNumTicks * ((_timesIndex + 1) / 3));

      // Update the multiplier store with the new multiplier based on _timesIndex
      const newMultiplier = getMultiplierForIndex(_timesIndex);
      if (newMultiplier !== null) {
        scenario.settings.ClockSettings.multiplier.update((store) =>
          currentMultiplier > 0 ? newMultiplier : -newMultiplier
        );
      }
    }
  };

  $: nTicksArray = new Array(numTicks).fill(undefined);
  $: displayTicks = nTicksArray.map((e, i) => infinityScroll(i));
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  id="timelineviewer"
  on:dblclick={(e) => {
    let currentShouldAnimate = get(
      scenario.settings.ClockSettings.shouldAnimate
    );
    if (!currentShouldAnimate) {
      scenario.settings.ClockSettings.shouldAnimate.set(true);
    }
  }}>
  <div class="absolute bottom-[30px] right-2 -z-100"><Logos /></div>
  <div id="centerLine" />
  <div id="timelineContainer" on:wheel={mouseWheel}>
    <!--todo pointer events, once iOS works-->
    <div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        id="shuttleBay"
        class="timelineRow thinOutline"
        on:contextmenu={endDrag}
        on:mousedown={startDrag}
        on:mousemove={drag}
        on:mouseup={endDrag}
        on:touchstart={startDrag}
        on:touchmove={drag}
        on:touchend={endDrag}
        on:touchcancel={endDrag}>
        <svg
          id="ticks"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
          style="position:relative; top:2px">
          {#each displayTicks as iPos, i}
            {#if !(i % quarterTick(numTicks))}
              <text
                textLength="100px"
                lengthAdjust="spacingAndGlyphs"
                x={iPos}
                dx="-57px"
                y="20"
                class:tickSkip={!(i % (quarterTick(numTicks) * 2))}>
                {tickTime(i, iPos)}
              </text>
            {/if}
            <line
              x1={iPos}
              y1="0%"
              x2={iPos}
              y2={i % 5
                ? "7%"
                : !(i % quarterTick(numTicks))
                  ? "30%"
                  : "14%"} />
          {/each}
        </svg>
      </div>
    </div>
  </div>
</div>

<style>
  #centerLine {
    position: absolute;
    top: -10;
    height: 110%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    background-color: #fffa;
  }
  #ticks line {
    stroke: rgb(207, 207, 207);
    stroke-width: 1;
  }
  #timelineviewer {
    pointer-events: initial;
    background: linear-gradient(
      to bottom,
      rgba(116, 117, 119, 0.8) 0%,
      rgba(58, 68, 82, 0.8) 11%,
      rgba(46, 50, 56, 0.8) 46%,
      rgba(53, 53, 53, 0.8) 81%,
      rgba(53, 53, 53, 0.8) 100%
    );
    width: 100%;
    border-top: 1px solid gray;
  }
  .timelineRow {
    height: 30px;
  }

  /*flex row 2*/
  #timelineContainer {
    z-index: 40;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    margin: auto;
  }

  #shuttleBay {
    position: relative;
    cursor: pointer;
    margin-top: auto;
    flex: 1 1 300px;
    overflow: hidden;
  }
  #ticks {
    position: relative;
    top: 10px;
  }
  #ticks text {
    font-size: 10px;
    font-family: Sans-Serif;
    font-weight: 200;
    color: #fff;
    fill: #fff;
  }
  @media screen and (max-width: 768px) {
    #ticks text.tickSkip {
      display: none;
    }
  }
</style>
