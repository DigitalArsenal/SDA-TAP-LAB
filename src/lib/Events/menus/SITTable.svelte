<script lang="ts">
  import { viewer } from "@/stores/viewer.store";
  import { activeEvent } from "@/stores/events.store";
  import {
    Cartesian3,
    Math as CesiumMath,
    Rectangle,
    sampleTerrainMostDetailed,
  } from "orbpro";

  const DEFAULT_HEIGHT = 5000; // Default height above the terrain

  const flyToLocation = () => {
    let destination = Cartesian3.fromDegrees(
      $activeEvent.LONGITUDE,
      $activeEvent.LATITUDE,
      $activeEvent.ALTITUDE || 0
    );

    flyToDestination(destination).then(() => {
      // Additional actions after completing the flight, if needed
    });
  };

  async function flyToDestination(destination: any) {
    if (!$viewer) return;
    const scene = $viewer.scene;
    const ellipsoid = scene.globe.ellipsoid;

    let finalDestination = destination;
    let cartographic = ellipsoid.cartesianToCartographic(destination);

    try {
      const positionOnTerrain = await sampleTerrainMostDetailed(
        scene.terrainProvider,
        [cartographic]
      );
      cartographic = positionOnTerrain[0];
      cartographic.height += DEFAULT_HEIGHT;
      finalDestination = ellipsoid.cartographicToCartesian(cartographic);
    } catch (error) {
      //console.error("Error sampling terrain:", error);
      cartographic.height += DEFAULT_HEIGHT;
      finalDestination = ellipsoid.cartographicToCartesian(cartographic);
    }

    $viewer.camera.flyTo({
      destination: finalDestination,
      orientation: {
        heading: CesiumMath.toRadians(175.0),
        pitch: CesiumMath.toRadians(-35.0),
        roll: 0.0,
      },
      duration: 5,
      complete: function () {
        // Actions to perform after the flight completes
      },
    });
  }
</script>

<div class="p-2 w-64 select-none">
  <div class="overflow-y-scroll p-2 flex flex-col gap-3">
    <div class="text-sm">{$activeEvent.NAME}</div>
    <div class="text-xs cursor-pointer" on:click={flyToLocation}>
      <div>{$activeEvent.LATITUDE},{$activeEvent.LONGITUDE}</div>
    </div>
  </div>
</div>
