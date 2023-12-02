/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.112
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import {
  EllipsoidOutlineGeometry_default
} from "./chunk-64MU5NGH.js";
import "./chunk-W7F5VTH6.js";
import "./chunk-V4VEXECF.js";
import "./chunk-SJDXMQSP.js";
import "./chunk-D2PE6HOO.js";
import "./chunk-JTOLNNYW.js";
import "./chunk-GZ7BL7LQ.js";
import "./chunk-KTN4SGGY.js";
import "./chunk-PDG6JOP7.js";
import {
  Cartesian3_default
} from "./chunk-HLVA4ANJ.js";
import "./chunk-NMDY6ZLZ.js";
import "./chunk-VNRUVNIK.js";
import "./chunk-R5BRZG2P.js";
import {
  defaultValue_default
} from "./chunk-C53JYYKX.js";
import {
  Check_default
} from "./chunk-AHDNLR3T.js";
import {
  defined_default
} from "./chunk-2KF5NPJR.js";

// packages/engine/Source/Core/SphereOutlineGeometry.js
function SphereOutlineGeometry(options) {
  const radius = defaultValue_default(options.radius, 1);
  const radii = new Cartesian3_default(radius, radius, radius);
  const ellipsoidOptions = {
    radii,
    stackPartitions: options.stackPartitions,
    slicePartitions: options.slicePartitions,
    subdivisions: options.subdivisions
  };
  this._ellipsoidGeometry = new EllipsoidOutlineGeometry_default(ellipsoidOptions);
  this._workerName = "createSphereOutlineGeometry";
}
SphereOutlineGeometry.packedLength = EllipsoidOutlineGeometry_default.packedLength;
SphereOutlineGeometry.pack = function(value, array, startingIndex) {
  Check_default.typeOf.object("value", value);
  return EllipsoidOutlineGeometry_default.pack(
    value._ellipsoidGeometry,
    array,
    startingIndex
  );
};
var scratchEllipsoidGeometry = new EllipsoidOutlineGeometry_default();
var scratchOptions = {
  radius: void 0,
  radii: new Cartesian3_default(),
  stackPartitions: void 0,
  slicePartitions: void 0,
  subdivisions: void 0
};
SphereOutlineGeometry.unpack = function(array, startingIndex, result) {
  const ellipsoidGeometry = EllipsoidOutlineGeometry_default.unpack(
    array,
    startingIndex,
    scratchEllipsoidGeometry
  );
  scratchOptions.stackPartitions = ellipsoidGeometry._stackPartitions;
  scratchOptions.slicePartitions = ellipsoidGeometry._slicePartitions;
  scratchOptions.subdivisions = ellipsoidGeometry._subdivisions;
  if (!defined_default(result)) {
    scratchOptions.radius = ellipsoidGeometry._radii.x;
    return new SphereOutlineGeometry(scratchOptions);
  }
  Cartesian3_default.clone(ellipsoidGeometry._radii, scratchOptions.radii);
  result._ellipsoidGeometry = new EllipsoidOutlineGeometry_default(scratchOptions);
  return result;
};
SphereOutlineGeometry.createGeometry = function(sphereGeometry) {
  return EllipsoidOutlineGeometry_default.createGeometry(
    sphereGeometry._ellipsoidGeometry
  );
};
var SphereOutlineGeometry_default = SphereOutlineGeometry;

// packages/engine/Source/Workers/createSphereOutlineGeometry.js
function createSphereOutlineGeometry(sphereGeometry, offset) {
  if (defined_default(offset)) {
    sphereGeometry = SphereOutlineGeometry_default.unpack(sphereGeometry, offset);
  }
  return SphereOutlineGeometry_default.createGeometry(sphereGeometry);
}
var createSphereOutlineGeometry_default = createSphereOutlineGeometry;
export {
  createSphereOutlineGeometry_default as default
};
