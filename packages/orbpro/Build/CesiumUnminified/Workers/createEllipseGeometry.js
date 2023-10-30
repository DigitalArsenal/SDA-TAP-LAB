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
  EllipseGeometry_default
} from "./chunk-TYXSPBEY.js";
import "./chunk-3GOUBYLH.js";
import "./chunk-UMLTOPAE.js";
import "./chunk-MLOJJYLJ.js";
import "./chunk-CX2WVMPH.js";
import "./chunk-N3EE7J5U.js";
import "./chunk-SWSQOMLZ.js";
import "./chunk-WUAKLL2I.js";
import "./chunk-Q6J5PEG6.js";
import "./chunk-2MRN6RZT.js";
import "./chunk-AZF3MVS4.js";
import "./chunk-YLMDWSXO.js";
import "./chunk-SBLZY7ST.js";
import "./chunk-B46TDPZ6.js";
import "./chunk-X5D47LEV.js";
import "./chunk-6CVSTIRF.js";
import "./chunk-FHZV6AJI.js";
import {
  Cartesian3_default,
  Ellipsoid_default
} from "./chunk-MMRNIZYY.js";
import "./chunk-POWCXJ2N.js";
import "./chunk-TXYJOVQK.js";
import "./chunk-WDCYQAUY.js";
import "./chunk-GPO47TW4.js";
import "./chunk-UJUUG6CW.js";
import {
  defined_default
} from "./chunk-BHOSD56C.js";

// packages/engine/Source/Workers/createEllipseGeometry.js
function createEllipseGeometry(ellipseGeometry, offset) {
  if (defined_default(offset)) {
    ellipseGeometry = EllipseGeometry_default.unpack(ellipseGeometry, offset);
  }
  ellipseGeometry._center = Cartesian3_default.clone(ellipseGeometry._center);
  ellipseGeometry._ellipsoid = Ellipsoid_default.clone(ellipseGeometry._ellipsoid);
  return EllipseGeometry_default.createGeometry(ellipseGeometry);
}
var createEllipseGeometry_default = createEllipseGeometry;
export {
  createEllipseGeometry_default as default
};
