import type { IFilterComp, IFilterDef } from "ag-grid-community";

// Define the structure of a space object
interface GroupSpaceObject {
  referenceFrameDebug: boolean;
  orbit: boolean;
  coverage: boolean;
  label: boolean;
}

// Define the structure of a group containing space objects
interface Group {
  description: string;
  objects: {
    [objectId: string]: GroupSpaceObject;
  };
  filterObject: IFilterDef;
}

// Define the structure for the groups object
interface Groups {
  [groupId: string]: Group;
}

export type { GroupSpaceObject, Group, Groups };
