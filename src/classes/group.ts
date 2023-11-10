// Define the structure of a space object
interface GroupSpaceObject {
    orbit: boolean;
    coverage: boolean;
}

// Define the structure of a group containing space objects
interface Group {
    objects: {
        [objectId: string]: GroupSpaceObject;
    }
}

// Define the structure for the groups object
interface Groups {
    [groupId: string]: Group;
}

export type { GroupSpaceObject, Group, Groups };