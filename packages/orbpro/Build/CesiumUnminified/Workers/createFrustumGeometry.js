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
  FrustumGeometry_default
} from "./chunk-DUEH5XGS.js";
import "./chunk-EUM4A4XP.js";
import "./chunk-Q6J5PEG6.js";
import "./chunk-2MRN6RZT.js";
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

// packages/engine/Source/Workers/createFrustumGeometry.js
function createFrustumGeometry(frustumGeometry, offset) {
  if (defined_default(offset)) {
    frustumGeometry = FrustumGeometry_default.unpack(frustumGeometry, offset);
  }
  return FrustumGeometry_default.createGeometry(frustumGeometry);
}
var createFrustumGeometry_default = createFrustumGeometry;
export {
  createFrustumGeometry_default as default
};
