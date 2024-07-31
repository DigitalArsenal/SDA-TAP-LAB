<script lang="ts">
  import dacredit from "@assets/da-credit.png";
  import sda from "@assets/sda-credit.png";
  import ion from "@assets/ion-credit.png";

  function openLink(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    if (target.tagName === "IMG" && target.alt) {
      window.open(target.alt, "_blank");
    }
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      openLink(event as unknown as MouseEvent);
    }
  }
</script>

<div
  class="flex gap-2 items-end h-7"
  on:click={openLink}
  on:keypress={handleKeyPress}
  role="button"
  tabindex="0">
  <div class="rounded border bg-white p-1 mb-[2px]">
    <img class="w-24 sm:w-28 md:w-36" src={sda} alt="https://sdataplab.org/" />
  </div>
  <div class="flex flex-col pt-2">
    <img class="w-20 sm:w-24 md:w-32" src={dacredit} alt="https://digitalarsenal.io" />
    <img class="w-20 sm:w-24 md:w-32" src={ion} alt="https://cesium.com" />
  </div>
</div>
