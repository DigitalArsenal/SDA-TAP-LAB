<script lang="ts">
  import { groups } from "@/stores/spacecatalog.group.store";

  let localGroups = {};
  $: {
    if ($groups) {
      let { defaultGroup, ...otherGroups } = $groups;
      localGroups = otherGroups;
    }
  }
</script>

<p class="text-[.5rem] absolute -bottom-2 right-[1px]">
  {Object.keys(localGroups).length}
</p>
