<script lang="ts">
  import { get } from "svelte/store";
  import {
    groups,
    activeGroup,
    saveGroup,
    getFilteredData,
  } from "@/stores/group.store"; // Update the path
  import { content, lastcontent } from "@/stores/modal.store";
  import CloseButton from "@/lib/elements/CloseButton.svelte";
  import { data, columnDefs } from "@/stores/datatable.store";
  import { viewer } from "@/stores/viewer.store";
  import getID from "@/lib/SpaceObjects/lib/getID";
  import { Color } from "orbpro";
  let defaultGroup = get(groups).defaultGroup;

  getFilteredData($columnDefs, $data, defaultGroup.filterObject).forEach(
    (e) => {
      let entity = $viewer!.dataSources
        .getByName("spaceaware")[0]
        ?.entities.getById(getID(e));
      if (entity && entity?.point) {
        //@ts-ignore
        entity.point.color = Color.RED;
      }
    }
  );
</script>
