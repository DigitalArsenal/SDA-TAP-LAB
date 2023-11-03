import type Cartesian3 from "cesium/Source/Core/Cartesian3";
import type Matrix4 from "cesium/Source/Core/Matrix4";

export class CameraState {
    position: Cartesian3;
    transform: Matrix4;
    heading: number;
    pitch: number;
    roll: number;
}