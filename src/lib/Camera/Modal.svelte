<script lang="ts">
  import { Cartesian3, Math as CesiumMath } from "orbpro";
  import { messages } from "@/stores/events.store";
  import { content, lastcontent } from "@/stores/modal.store";
  import { scenario } from "@/stores/settings.store";
  import { onDestroy, onMount } from "svelte";
  import { viewer } from "@/stores/viewer.store";
  import CloseButton from "@/lib/elements/CloseButton.svelte";

  let _shouldAnimate = true;
  let positionListener: any = undefined;
  let _cameraPosition: Cartesian3 | undefined;
  let _cameraPositionECEF: string[] = [];
  let _cameraPositionLLA: string[] = [];

  onMount(() => {
    _shouldAnimate = (globalThis as any).viewer!.clock.shouldAnimate;
    scenario.settings.ClockSettings.shouldAnimate.set(false);
    positionListener = (globalThis as any).viewer?.clock.onTick.addEventListener(() => {
      _cameraPosition = (globalThis as any).viewer?.camera.positionWC;
      if (_cameraPosition) {
        const ellipsoid = (globalThis as any).viewer!.scene.globe.ellipsoid;
        const cartographic = ellipsoid.cartesianToCartographic(_cameraPosition);
        _cameraPositionECEF = [
          `${_cameraPosition.x.toFixed(2)} X`,
          `${_cameraPosition.y.toFixed(2)} Y`,
          `${_cameraPosition.z.toFixed(2)} Z`,
        ];
        _cameraPositionLLA = [
          `${CesiumMath.toDegrees(cartographic.latitude).toFixed(2)}°`,
          `${CesiumMath.toDegrees(cartographic.longitude).toFixed(2)}°`,
          `${(cartographic.height / 1000).toFixed(1)}`,
        ];
      }
    });
  });

  onDestroy(() => {
    if (positionListener && (globalThis as any).viewer) {
      (globalThis as any).viewer.clock.onTick.removeEventListener(positionListener);
    }
    scenario.settings.ClockSettings.shouldAnimate.set(_shouldAnimate);
  });

  const closeModal = () => {
    $content = $lastcontent || undefined;
    $lastcontent = undefined;
    scenario.settings.ClockSettings.shouldAnimate.set(_shouldAnimate);
  };
</script>

<div
  class="fixed mt-12 pr-2 pl-2 flex justify-end items-start w-full md:w-[38%] h-[50%] md:h-[50%] max-h-[350px] max-w-[400px] right-0">
  <div class="flex justify-center items-center z-50 w-full h-full">
    <div
      style="background:rgba(48, 51, 54, .9)"
      class="bg-opacity-75 text-white rounded shadow-xl w-full h-full overflow-auto flex flex-col border border-gray-600">
      <div
        class="flex-none text-xs md:text-sm flex justify-between items-center pl-2 pr-3 pt-2 pb-2 md:pt-2 md:pb-2 border-b border-gray-600">
        <div class="flex items-center gap-2 w-full justify-between p-1">
          <div class="font-[300] flex gap-1">Camera Control</div>
        </div>
        <CloseButton onclick={closeModal} />
      </div>
      <div class="flex-grow p-2 pt-0 overflow-auto">
        <div class="flex flex-col gap-2 p-2"></div>
      </div>
      <div
        class="p-2 pl-4 border-t border-gray-600 flex justify-between text-[.65rem]">
        Camera Position (ECEF):
        <div class="flex-col font-mono">
          <div class="flex justify-end">{_cameraPositionECEF[0]}</div>
          <div class="flex justify-end">{_cameraPositionECEF[1]}</div>
          <div class="flex justify-end">{_cameraPositionECEF[2]}</div>
        </div>
      </div>
      <div
        class="p-2 pl-4 border-t border-gray-600 flex justify-between text-[.65rem]">
        Camera Position:
        <div class="flex-col w-[5rem] font-mono">
          <div class="flex justify-between">
            <div>{_cameraPositionLLA[0]}</div>
             LAT
          </div>
          <div class="flex justify-between">
            <div>{_cameraPositionLLA[1]}</div>
             LON
          </div>
          <div class="flex justify-between">
            <div>{_cameraPositionLLA[2]}</div>
             ALT
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes glowFadeOut {
    0% {
      background-color: rgba(255, 181, 44, 0.74);
    }
    100% {
      background-color: transparent;
    }
  }
</style>
