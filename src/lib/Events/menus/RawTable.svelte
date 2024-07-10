<script lang="ts">
  import { activeEvent } from "@/stores/events.store";
</script>

<div class="p-2 w-64 select-none">
  <div class="overflow-y-scroll p-2 flex flex-col gap-3 max-h-[350px] text-xs">
    <pre>{JSON.stringify($activeEvent, null, 4)}</pre>
  </div>
</div>
