<script lang="ts">
  import { scenario } from "@/stores/settings.store";
  import { onMount } from "svelte";
  import { arc } from "d3-shape";
  import {
    SceneTransforms,
    Clock,
    Cartesian3,
    BoundingSphere,
    BoundingSphereState,
  } from "orbpro";
  import opsStatusCode from "@/lib/theme/ops_status_code.mjs";

  export let viewer: any;

  const { selectedEntity } = scenario;
  const boundingSphereScratch = new BoundingSphere();

  let statusColors = Object.entries(opsStatusCode);
  let widgetSize = {
    width: 200,
    height: 200,
  };

  let segments = [
    {
      size: 0,
      color: "rgb(31,255,139)",
    },
    {
      size: 360,
      color: "rgb(40,40,60)",
    },
  ];

  let arcs: Array<any>;

  const updateSegments = (percentComplete: any) => {
    let total = segments.reduce((total, s) => total + s.size, 0);
    let progress = 360 * (percentComplete / 100);
    segments[0].size = progress;
    segments[1].size = 360 - progress;
    let acc = 0;
    arcs = segments.map((segment) => {
      const options = {
        innerRadius: 30,
        outerRadius: 40,
        startAngle: acc,
        endAngle: (acc += (angle * segment.size) / total),
      };
      return {
        color: segment.color,
        d: fn(options),
        centroid: fn.centroid(options),
      };
    });
  };

  const fn = arc();
  let angle = Math.PI * 2;

  updateSegments(90);

  let selectedTrackerEvent: any;
  let ePosition: any = new Cartesian3();
  let c2 = { x: 0, y: 0 };
  const revoke = () => {
    if (selectedTrackerEvent) {
      selectedTrackerEvent();
      viewer.clock.onTick.removeEventListener(selectedTrackerEvent);
      selectedTrackerEvent = null;
    }
  };

  let sESubscription: any;

  onMount(() => {
    if (!sESubscription) {
      sESubscription = selectedEntity.subscribe((s: any) => {
        revoke();
        if (!selectedTrackerEvent && s && viewer?.clock) {
          selectedTrackerEvent = viewer.clock.onTick.addEventListener(
            (clock: Clock) => {
              let { selectedEntity, scene } = viewer;
              if (selectedEntity && selectedEntity?.position?.getValue) {
                ePosition = selectedEntity.position.getValue(clock.currentTime);

                if (ePosition && !ePosition.equals(Cartesian3.ZERO)) {
                  c2 = SceneTransforms.wgs84ToWindowCoordinates(
                    viewer.scene,
                    ePosition
                  );
                }
              } else if (
                selectedEntity &&
                selectedEntity?.isShowing &&
                selectedEntity?.isAvailable(clock.currentTime)
              ) {
                const state = viewer._dataSourceDisplay.getBoundingSphere(
                  selectedEntity,
                  true,
                  boundingSphereScratch
                );

                if (state !== BoundingSphereState.FAILED) {
                  ePosition = viewer.selectedEntity.position =
                    boundingSphereScratch.center;
                  viewer.camera.flyToBoundingSphere(boundingSphereScratch, {
                    duration: 1,
                  });
                  console.log(ePosition);
                  if (ePosition && !ePosition.equals(Cartesian3.ZERO)) {
                    c2 = SceneTransforms.wgs84ToWindowCoordinates(
                      viewer.scene,
                      ePosition
                    );
                    console.log(c2);
                  }
                }
              }
            }
          );
          segments[1].color = (statusColors[
            ($selectedEntity as any)?.properties?.CAT?.getValue()
              .OPS_STATUS_CODE
          ] || [null, "#aaaaaa"])[1];
          updateSegments(0);
        }
        if (viewer) viewer.scene.render();
      });
    }
  });
</script>

{#if c2?.x && c2?.y}
  <div
    id="selected"
    class="fixed flex text-white pointer-events-none"
    style="width:{widgetSize.width}px; height:{widgetSize.width}px; top:{c2.y -
      widgetSize.height / 2}px;left:{c2.x - widgetSize.height / 2}px;">
    <svg viewBox="0 0 100 100">
      <g transform="translate(50,50) scale(.25)">
        {#each arcs as arc}
          <path d={arc.d} fill={arc.color} />
        {/each}
      </g>
    </svg>
  </div>
{/if}

<style>
  /* svg {
        shape-rendering: optimizeSpeed;
    }*/
</style>
