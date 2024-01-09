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
  CylinderGeometry_default
} from "./chunk-MBXUIXCB.js";
import "./chunk-4H2G2CPR.js";
import "./chunk-W7F5VTH6.js";
import "./chunk-4RWJ3QEI.js";
import "./chunk-V4VEXECF.js";
import "./chunk-SJDXMQSP.js";
import "./chunk-HSX6RZQ4.js";
import "./chunk-T2HUWLU5.js";
import "./chunk-GZ7BL7LQ.js";
import "./chunk-KTN4SGGY.js";
import "./chunk-PDG6JOP7.js";
import "./chunk-HLVA4ANJ.js";
import "./chunk-NMDY6ZLZ.js";
import "./chunk-VNRUVNIK.js";
import "./chunk-R5BRZG2P.js";
import "./chunk-C53JYYKX.js";
import "./chunk-AHDNLR3T.js";
import {
  defined_default
} from "./chunk-2KF5NPJR.js";

// packages/engine/Source/Workers/createCylinderGeometry.js
function createCylinderGeometry(cylinderGeometry, offset) {
  if (defined_default(offset)) {
    cylinderGeometry = CylinderGeometry_default.unpack(cylinderGeometry, offset);
  }
  return CylinderGeometry_default.createGeometry(cylinderGeometry);
}
var createCylinderGeometry_default = createCylinderGeometry;
export {
  createCylinderGeometry_default as default
};
