import type Viewer from "cesium/Source/Widgets/Viewer/Viewer"

export interface ExtendedViewer extends Viewer {
    [x: string]: any;
    referenceFrame: Number;
}