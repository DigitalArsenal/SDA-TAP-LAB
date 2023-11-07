/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.111
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
} from "./chunk-XBSPQZ2G.js";
import "./chunk-ZERWARDV.js";
import "./chunk-JOBMFMSV.js";
import "./chunk-EH2PEDWL.js";
import "./chunk-AIOAZ6WW.js";
import "./chunk-YB5QHG24.js";
import "./chunk-TQTG2Q4U.js";
import "./chunk-MQNA3P5X.js";
import "./chunk-3X5MHN3M.js";
import "./chunk-M35EWU24.js";
import "./chunk-DM2LKTVS.js";
import "./chunk-XNRYWRVT.js";
import "./chunk-PL6YTO4D.js";
import "./chunk-N73NY3KY.js";
import "./chunk-TU2FA5CD.js";
import {
  defined_default
} from "./chunk-37JEF5H2.js";

// packages/engine/Source/Workers/createEllipsoidOutlineGeometry.js
function createEllipsoidOutlineGeometry(ellipsoidGeometry, offset) {
  if (defined_default(ellipsoidGeometry.buffer, offset)) {
    ellipsoidGeometry = EllipsoidOutlineGeometry_default.unpack(
      ellipsoidGeometry,
      offset
    );
  }
  return EllipsoidOutlineGeometry_default.createGeometry(ellipsoidGeometry);
}
var createEllipsoidOutlineGeometry_default = createEllipsoidOutlineGeometry;
export {
  createEllipsoidOutlineGeometry_default as default
};
