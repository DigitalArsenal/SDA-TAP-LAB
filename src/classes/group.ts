import type { IFilterComp, IFilterDef } from "ag-grid-community";

// Define the structure of a space object
interface GroupSpaceObject {
  referenceFrameDebug: boolean;
  orbit: boolean;
  coverage: boolean;
  label: boolean;
  model: string | undefined;
}

// Define the structure of a group containing space objects
interface Group {
  objectList: any[];
  description: string;
  objects: {
    [objectId: string]: GroupSpaceObject;
  };
  filterObject: IFilterDef;
  show: Boolean;
  // Include the new style properties here
  point?: {
    pixelSize: number,
    color: string,
    outlineWidth: number,
    outlineColor: string
  };
  path?: {
    width: number,
    material: {
      color: string
    }
  };
}

// Define the structure for the groups object
interface Groups {
  [groupId: string]: Group;
}

export type { GroupSpaceObject, Group, Groups };
