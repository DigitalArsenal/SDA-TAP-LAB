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
  EllipseOutlineGeometry_default
} from "./chunk-EZEP2TKT.js";
import "./chunk-3PRIOGSZ.js";
import "./chunk-ZERWARDV.js";
import "./chunk-JOBMFMSV.js";
import "./chunk-EH2PEDWL.js";
import "./chunk-74N32EZR.js";
import "./chunk-NLOQZLEU.js";
import "./chunk-TQTG2Q4U.js";
import "./chunk-MQNA3P5X.js";
import "./chunk-3X5MHN3M.js";
import {
  Cartesian3_default,
  Ellipsoid_default
} from "./chunk-M35EWU24.js";
import "./chunk-DM2LKTVS.js";
import "./chunk-XNRYWRVT.js";
import "./chunk-PL6YTO4D.js";
import "./chunk-N73NY3KY.js";
import "./chunk-TU2FA5CD.js";
import {
  defined_default
} from "./chunk-37JEF5H2.js";

// packages/engine/Source/Workers/createEllipseOutlineGeometry.js
function createEllipseOutlineGeometry(ellipseGeometry, offset) {
  if (defined_default(offset)) {
    ellipseGeometry = EllipseOutlineGeometry_default.unpack(ellipseGeometry, offset);
  }
  ellipseGeometry._center = Cartesian3_default.clone(ellipseGeometry._center);
  ellipseGeometry._ellipsoid = Ellipsoid_default.clone(ellipseGeometry._ellipsoid);
  return EllipseOutlineGeometry_default.createGeometry(ellipseGeometry);
}
var createEllipseOutlineGeometry_default = createEllipseOutlineGeometry;
export {
  createEllipseOutlineGeometry_default as default
};
