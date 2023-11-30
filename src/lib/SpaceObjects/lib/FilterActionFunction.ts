import { viewer } from "@/stores/viewer.store";
import { get } from "svelte/store";
import getID from "./getID";
const filterActionFunction = (filteredRows: any[]) => {
  const _viewer = get(viewer);
  if (!_viewer) {
    return;
  }
  const dataSource = _viewer.dataSources.getByName("spaceaware")[0];
  dataSource.entities.suspendEvents();
  const filteredIds = new Set(
    filteredRows.map((row) => {
      return getID(row);
    })
  ); // Assuming each row has an 'id' property
  const entities = dataSource.entities.values;
  for (let i = 0; i < entities.length; i++) {
    const entity = entities[i];
    // Assuming each entity has a corresponding 'id' property
    entity.show = filteredIds.has(entity.id);
  }
  dataSource.entities.resumeEvents();
  _viewer.scene.render();
};

export default filterActionFunction;
