import { GraphicsDefault } from "@/stores/defaults";
import { Filter } from "./filter";

class Point {
    pixelSize: number = GraphicsDefault.point.pixelSize
    color: string = GraphicsDefault.point.color
    outlineWidth: number = GraphicsDefault.point.outlineWidth
    outlineColor: string = GraphicsDefault.point.outlineColor
}

class PathPartial {
    color: string;
}

class Path {
    width: number = GraphicsDefault.path.width
    material: PathPartial = {
        color: GraphicsDefault.path.material.color.toString()
    }
}

export class Group extends Filter {
    id: string
    name: string
    description: string
    point: Point = new Point()
    path: Path = new Path()
    enabled: boolean = true
}