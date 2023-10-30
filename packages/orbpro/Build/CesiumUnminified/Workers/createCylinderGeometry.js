/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.110
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
} from "./chunk-RXHCYBWH.js";
import "./chunk-PJSXARP5.js";
import "./chunk-UMLTOPAE.js";
import "./chunk-2MRN6RZT.js";
import "./chunk-AZF3MVS4.js";
import "./chunk-YLMDWSXO.js";
import "./chunk-SBLZY7ST.js";
import "./chunk-B46TDPZ6.js";
import "./chunk-X5D47LEV.js";
import "./chunk-6CVSTIRF.js";
import "./chunk-FHZV6AJI.js";
import "./chunk-MMRNIZYY.js";
import "./chunk-POWCXJ2N.js";
import "./chunk-TXYJOVQK.js";
import "./chunk-WDCYQAUY.js";
import "./chunk-GPO47TW4.js";
import "./chunk-UJUUG6CW.js";
import {
  defined_default
} from "./chunk-BHOSD56C.js";

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
