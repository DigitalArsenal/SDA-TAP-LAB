/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.110.1
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
} from "./chunk-WEF253O6.js";
import "./chunk-5UZ6K5Y4.js";
import "./chunk-EZPA2AXQ.js";
import "./chunk-S43HIIFE.js";
import "./chunk-LEXEGHHW.js";
import "./chunk-I6R5G76Q.js";
import "./chunk-DUBLZPAA.js";
import "./chunk-7IAFXPBR.js";
import "./chunk-MZCSN2WH.js";
import "./chunk-KPK3YTJ2.js";
import "./chunk-YMN46D5Q.js";
import "./chunk-W5M72RHG.js";
import "./chunk-PNM36UFO.js";
import "./chunk-GQ66IPL6.js";
import "./chunk-TPEIV53F.js";
import "./chunk-CGHLEZ43.js";
import "./chunk-5C77OAR2.js";
import {
  defined_default
} from "./chunk-XT7SRL3S.js";

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
