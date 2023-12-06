import type { IFilterDef } from "ag-grid-community";
import Bitfield from "@/utilities/bitfield";


// Define the structure of a group containing space objects
interface Group {
  objectsBitfield: Bitfield;
  orbitBitfield: Bitfield;
  coverageBitfield: Bitfield;
  labelBitfield: Bitfield;
  modelBitfield: Bitfield;
  name: string;
  description: string;
  filterObject: IFilterDef;
  show: Boolean;
  // Style properties remain unchanged
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

export type { Group, Groups };
