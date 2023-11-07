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
  WebGLConstants_default
} from "./chunk-XNRYWRVT.js";

// packages/engine/Source/Core/WindingOrder.js
var WindingOrder = {
  /**
   * Vertices are in clockwise order.
   *
   * @type {number}
   * @constant
   */
  CLOCKWISE: WebGLConstants_default.CW,
  /**
   * Vertices are in counter-clockwise order.
   *
   * @type {number}
   * @constant
   */
  COUNTER_CLOCKWISE: WebGLConstants_default.CCW
};
WindingOrder.validate = function(windingOrder) {
  return windingOrder === WindingOrder.CLOCKWISE || windingOrder === WindingOrder.COUNTER_CLOCKWISE;
};
var WindingOrder_default = Object.freeze(WindingOrder);

export {
  WindingOrder_default
};
