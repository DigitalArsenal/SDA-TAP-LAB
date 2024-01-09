<script lang="ts">
  import { scenario } from "@/stores/settings.store";
  import { onMount, onDestroy } from "svelte";
  import { arc } from "d3-shape";
  import { Cartesian3, BoundingSphere } from "orbpro";
  import opsStatusCode from "@/lib/theme/ops_status_code.mjs";
  import { forceHideWidget } from "@/stores/selectionwidget.store";
  export let viewer: any;

  const { selectedEntity, trackedEntity } = scenario;
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
  let svgOpacity = 1; // Default opacity

  const revoke = () => {
    if (selectedTrackerEvent) {
      selectedTrackerEvent();
      viewer.clock.onTick.removeEventListener(selectedTrackerEvent);
      selectedTrackerEvent = null;
    }
  };

  let sESubscription: any;
  let cameraDistanceChecker: any;
  onMount(() => {
    viewer.selectionIndicator.container.style.opacity = 0;

    if (viewer && viewer.scene) {
      cameraDistanceChecker = viewer.clock.onTick.addEventListener(() => {
        if ($selectedEntity && $selectedEntity?.position) {
          const cameraPosition = viewer.camera.positionWC;
          const entityPosition = $selectedEntity.position.getValue(
            viewer.clock.currentTime,
            ePosition
          );
          const distance = Cartesian3.distance(cameraPosition, entityPosition!);
          if (distance < 10000) {
            svgOpacity = Math.max(0, distance / 10000);
          } else {
            svgOpacity = 1;
          }
        }
      });
    }

    if (!sESubscription) {
      sESubscription = selectedEntity.subscribe((s: any) => {
        revoke();
        if (!selectedTrackerEvent && s && viewer?.clock) {
          selectedTrackerEvent = viewer.scene.postRender.addEventListener(
            () => {
              c2 = {
                x: parseFloat(
                  viewer.selectionIndicator._viewModel._screenPositionX
                ),
                y: parseFloat(
                  viewer.selectionIndicator._viewModel._screenPositionY
                ),
              };
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
  onDestroy(() => {
    if (cameraDistanceChecker) {
      viewer.clock.onTick.removeEventListener(cameraDistanceChecker);
    }
  });
</script>

{#if c2?.x && c2?.y && !$forceHideWidget}
  <div
    id="selected"
    class="fixed flex text-white pointer-events-none"
    style="width:{widgetSize.width}px; height:{widgetSize.width}px; top:{c2.y -
      widgetSize.height / 10}px;left:{c2.x -
      widgetSize.height / 10}px; opacity:{svgOpacity};">
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
