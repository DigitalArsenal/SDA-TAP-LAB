onDestroy(() => {
    searchTerm = ""; // Reset the search term when the component is destroyed
  });

  const closeModal = () => {
    $content = $lastcontent !== $content ? $lastcontent : undefined;
    $lastcontent = undefined;
  };

  // Toggles the visibility of a group
  function toggleShow(groupName: string) {
    groups.update((currentGroups) => {
      if (currentGroups[groupName]) {
        currentGroups[groupName].show = !currentGroups[groupName].show;
      }
      return currentGroups;
    });
  }

  // Removes a group from the list
  function removeGroup(groupName: string) {
    if ($activeGroup === groupName) {
      activeGroup.set("defaultGroup");
    }
    groups.update((currentGroups) => {
      delete currentGroups[groupName];
      return currentGroups;
    });
  }

  let setLast: any;
  $: {
    // Update local versions with the active group's values
    const group = $groups[$activeGroup];
    if (group && $activeGroup !== setLast) {
      setLast = $activeGroup;
      if (group.point) {
        localPixelSize = group.point.pixelSize;
        localPointColor = group.point.color;
        localOutlineWidth = group.point.outlineWidth;
        localOutlineColor = group.point.outlineColor;
      }
      if (group.path) {
        localPathWidth = group.path.width;
        localPathColor = group.path.material.color;
      }
    }
  }
  // Sets a group as the active group
  function setActiveGroup(groupName: string) {
    $selectedEntity = null;
    $trackedEntity = null;
    $viewer?.camera.flyHome();
    activeGroup.set(groupName);
  }

  // Function to update properties
  function updateProperties() {
    const _viewer = get(viewer);
    if (!_viewer) {
      return;
    }

    const filteredRows = $groups[$activeGroup]?.objectList ?? [];
    const filteredIds = new Set(filteredRows.map((row) => getID(row)));

    const dataSource = _viewer.dataSources.getByName("spaceaware")[0];
    dataSource.entities.suspendEvents();

    filteredIds.forEach((id) => {
      const entity = dataSource.entities.getById(id);
      if (entity) {
        if (entity.point) {
          entity.point.show = true as any;
          entity.point.pixelSize = localPixelSize;
          entity.point.color = Color.fromCssColorString(localPointColor) as any;
          entity.point.outlineWidth = localOutlineWidth;
          entity.point.outlineColor = Color.fromCssColorString(
            localOutlineColor
          ) as any;
          if (!localOutlineWidth) {
            entity.point.outlineColor = null as any;
            entity.point.outlineWidth = null as any;
          }
        }
        if (entity.path) {
          entity.path.width = localPathWidth;
          entity.path.material = Color.fromCssColorString(
            localPathColor
          ) as any;
        }
        entity.show = true;
      }
    });

    dataSource.entities.resumeEvents();
    _viewer.scene.render();
  }


  // Define the initial state with a default group
const initialState: Groups = {
    defaultGroup: {
      name: "defaultGroup",
      description: "",
      filterObject: {},
      show: true,
      point: {
        pixelSize: 1,
        color: "#ffffff",
        outlineWidth: 0,
        outlineColor: "#ffffff"
      },
      path: {
        width: 1,
        material: {
          color: "#ffffff"
        }
      }
    },
  };
  
  // Create the writable store with the initial state
  export const groups: Writable<Groups> = writable(initialState);
  
  export const activeGroup: Writable<string> = writable("defaultGroup");
  
  export const resetDefaultGroup = () => {
    groups.update((groups: any) => {
      groups["defaultGroup"].filterObject = {};
      return groups;
    })
  }
  
  
  /**
   * Populates the objectList for a given group using the current columnDefs and data.
   * @param group - The group to populate objectList for.
   */
  export function populateObjectList(group: any) {
    const filterModel = group.filterObject || {};
    group.objectList = getFilteredData(get(currentColumnDefs), get(data), filterModel);
  }
  
  
  /**
   * Saves a group with the specified name and data.
   * @param name - The name of the group.
   * @param group - The group data to save.
   */
  export function saveGroup(name: string, group: any): void {
    groups.update((currentGroups) => {
      currentGroups[name] = group;
      currentGroups["defaultGroup"].filterObject = {};
      return currentGroups;
    });
  }
  
  /**
   * Loads a group by name.
   * @param name - The name of the group to load.
   * @returns The group data, or undefined if not found.
   */
  export function loadGroup(name: string): any {
    const currentGroups = get(groups);
    return currentGroups[name];
  }
  
  //IMPORT / EXPORT
  // Function to save a single group or all groups
  export const exportGroup = async (groupName?: string): Promise<string> => {
    const currentGroups = get(groups);
    let groupsToSave;
  
    if (groupName) {
      if (currentGroups[groupName]?.objectList !== undefined) {
        groupsToSave = { [groupName]: { ...currentGroups[groupName] } };
        groupsToSave[groupName].objectList = [];
      } else {
        groupsToSave = { [groupName]: currentGroups[groupName] };
      }
    } else {
      groupsToSave = Object.keys(currentGroups).reduce((acc: any, key: any) => {
        acc[key] = { ...currentGroups[key] };
        if (acc[key].objectList !== undefined) {
          acc[key].objectList = [];
        }
        return acc;
      }, {});
    }
  
    if (Object.keys(groupsToSave).length === 0) return Promise.resolve('');
  
    const serializedGroups = JSON.stringify(groupsToSave);
  
    return new Promise((resolve, reject) => {
      const lzWorker = new lzworker();
      lzWorker.postMessage({
        payload: serializedGroups,
        method: "compressToEncodedURIComponent",
      });
  
      lzWorker.onmessage = (event: any) => {
        const compressedData = event.data;
        resolve(compressedData);
      };
  
      lzWorker.onerror = (error: any) => {
        reject(error);
      };
    });
  };
  /**
   * Imports a group or all groups and creates their objectList using the current columnDefs and data.
   * @param compressedData - The compressed data string for the groups.
   * @param groupName - Optional name of the group to import.
   * @returns The imported groups.
   */
  export const importGroup = async (compressedData: string, groupName?: string): Promise<any> => {
    if (!compressedData) return Promise.reject('No data provided');
  
    return new Promise((resolve, reject) => {
      const lzWorker = new lzworker();
      lzWorker.postMessage({
        payload: compressedData,
        method: "decompressFromEncodedURIComponent",
      });
  
      lzWorker.onmessage = (event) => {
        const serializedGroups = event.data;
        const loadedGroups = JSON.parse(serializedGroups);
  
        // Populate objectList for each group
        Object.keys(loadedGroups).forEach(key => {
          if (key !== "defaultGroup") {
            populateObjectList(loadedGroups[key]);
          }
        });
  
        resolve(loadedGroups);
      };
  
      lzWorker.onerror = (error) => {
        reject(error);
      };
    });
  };
  
  
  
  import { Grid, type GridOptions } from 'ag-grid-community';
  
  type FilterModel = {
    [key: string]: any; // Define the structure according to your filter model
  };
  
  export function getFilteredData(columnDefs: any[], rowData: any[], filterModel: FilterModel): any[] {
    columnDefs = columnDefs || get(currentColumnDefs);
    rowData = rowData || get(data);
  
    // Create a div element to host the grid (this won't be added to the document)
    const gridDiv = document.createElement('div');
  
    const gridOptions: GridOptions = {
      columnDefs: columnDefs,
      rowData: rowData,
    };
  
    // Create the grid passing in the div and grid options
    const grid = new Grid(gridDiv, gridOptions);
    let gridApi: any = gridOptions.api;
    // Set the model with your filters
    gridApi.setFilterModel(filterModel);
  
    // Perform the filtering
    gridApi.onFilterChanged();
  
    // Retrieve the filtered data
    const filteredData: any[] = [];
    gridApi.forEachNodeAfterFilter((node: any) => {
      filteredData.push(node.data);
    });
  
    return filteredData;
  }
  
  
  // TODO fix this hack to be data source dependent, for now it means load columnDefs first
  
  data.subscribe(newData => {
    groups.update(allGroups => {
      Object.keys(allGroups).forEach(groupKey => {
        if (groupKey !== "defaultGroup") {
          populateObjectList(allGroups[groupKey]);
        }
      });
      return allGroups;
    });
  });
  
  (async () => {
    let gg = localStorage.getItem("all_groups");
  
    if (gg) {
      let deserializedGroups = await importGroup(gg);
      groups.set(deserializedGroups);
    }
  
    //Order is important
    let init: boolean = false;
    let currentlyCompressing = false;
    groups.subscribe(async (groups) => {
      if (init && !currentlyCompressing && Object.keys(groups).length > 1) {
        currentlyCompressing = true;
        let compressedData = await exportGroup();
        const storageKey = 'all_groups';
        localStorage.setItem(storageKey, compressedData);
        currentlyCompressing = false;
      } else {
        init = true;
      }
    });
  })()