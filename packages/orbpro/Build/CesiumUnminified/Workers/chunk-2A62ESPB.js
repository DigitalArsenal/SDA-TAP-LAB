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
  Plane_default
} from "./chunk-VP6LQETT.js";
import {
  Intersect_default
} from "./chunk-7IAFXPBR.js";
import {
  Cartesian4_default,
  Matrix4_default
} from "./chunk-KPK3YTJ2.js";
import {
  Cartesian3_default
} from "./chunk-W5M72RHG.js";
import {
  Math_default
} from "./chunk-PNM36UFO.js";
import {
  defaultValue_default
} from "./chunk-CGHLEZ43.js";
import {
  Check_default,
  DeveloperError_default
} from "./chunk-5C77OAR2.js";
import {
  defined_default
} from "./chunk-XT7SRL3S.js";

// packages/engine/Source/Core/CullingVolume.js
function CullingVolume(planes) {
  this.planes = defaultValue_default(planes, []);
}
var faces = [new Cartesian3_default(), new Cartesian3_default(), new Cartesian3_default()];
Cartesian3_default.clone(Cartesian3_default.UNIT_X, faces[0]);
Cartesian3_default.clone(Cartesian3_default.UNIT_Y, faces[1]);
Cartesian3_default.clone(Cartesian3_default.UNIT_Z, faces[2]);
var scratchPlaneCenter = new Cartesian3_default();
var scratchPlaneNormal = new Cartesian3_default();
var scratchPlane = new Plane_default(new Cartesian3_default(1, 0, 0), 0);
CullingVolume.fromBoundingSphere = function(boundingSphere, result) {
  if (!defined_default(boundingSphere)) {
    throw new DeveloperError_default("boundingSphere is required.");
  }
  if (!defined_default(result)) {
    result = new CullingVolume();
  }
  const length = faces.length;
  const planes = result.planes;
  planes.length = 2 * length;
  const center = boundingSphere.center;
  const radius = boundingSphere.radius;
  let planeIndex = 0;
  for (let i = 0; i < length; ++i) {
    const faceNormal = faces[i];
    let plane0 = planes[planeIndex];
    let plane1 = planes[planeIndex + 1];
    if (!defined_default(plane0)) {
      plane0 = planes[planeIndex] = new Cartesian4_default();
    }
    if (!defined_default(plane1)) {
      plane1 = planes[planeIndex + 1] = new Cartesian4_default();
    }
    Cartesian3_default.multiplyByScalar(faceNormal, -radius, scratchPlaneCenter);
    Cartesian3_default.add(center, scratchPlaneCenter, scratchPlaneCenter);
    plane0.x = faceNormal.x;
    plane0.y = faceNormal.y;
    plane0.z = faceNormal.z;
    plane0.w = -Cartesian3_default.dot(faceNormal, scratchPlaneCenter);
    Cartesian3_default.multiplyByScalar(faceNormal, radius, scratchPlaneCenter);
    Cartesian3_default.add(center, scratchPlaneCenter, scratchPlaneCenter);
    plane1.x = -faceNormal.x;
    plane1.y = -faceNormal.y;
    plane1.z = -faceNormal.z;
    plane1.w = -Cartesian3_default.dot(
      Cartesian3_default.negate(faceNormal, scratchPlaneNormal),
      scratchPlaneCenter
    );
    planeIndex += 2;
  }
  return result;
};
CullingVolume.prototype.computeVisibility = function(boundingVolume) {
  if (!defined_default(boundingVolume)) {
    throw new DeveloperError_default("boundingVolume is required.");
  }
  const planes = this.planes;
  let intersecting = false;
  for (let k = 0, len = planes.length; k < len; ++k) {
    const result = boundingVolume.intersectPlane(
      Plane_default.fromCartesian4(planes[k], scratchPlane)
    );
    if (result === Intersect_default.OUTSIDE) {
      return Intersect_default.OUTSIDE;
    } else if (result === Intersect_default.INTERSECTING) {
      intersecting = true;
    }
  }
  return intersecting ? Intersect_default.INTERSECTING : Intersect_default.INSIDE;
};
CullingVolume.prototype.computeVisibilityWithPlaneMask = function(boundingVolume, parentPlaneMask) {
  if (!defined_default(boundingVolume)) {
    throw new DeveloperError_default("boundingVolume is required.");
  }
  if (!defined_default(parentPlaneMask)) {
    throw new DeveloperError_default("parentPlaneMask is required.");
  }
  if (parentPlaneMask === CullingVolume.MASK_OUTSIDE || parentPlaneMask === CullingVolume.MASK_INSIDE) {
    return parentPlaneMask;
  }
  let mask = CullingVolume.MASK_INSIDE;
  const planes = this.planes;
  for (let k = 0, len = planes.length; k < len; ++k) {
    const flag = k < 31 ? 1 << k : 0;
    if (k < 31 && (parentPlaneMask & flag) === 0) {
      continue;
    }
    const result = boundingVolume.intersectPlane(
      Plane_default.fromCartesian4(planes[k], scratchPlane)
    );
    if (result === Intersect_default.OUTSIDE) {
      return CullingVolume.MASK_OUTSIDE;
    } else if (result === Intersect_default.INTERSECTING) {
      mask |= flag;
    }
  }
  return mask;
};
CullingVolume.MASK_OUTSIDE = 4294967295;
CullingVolume.MASK_INSIDE = 0;
CullingVolume.MASK_INDETERMINATE = 2147483647;
var CullingVolume_default = CullingVolume;

// packages/engine/Source/Core/OrthographicOffCenterFrustum.js
function OrthographicOffCenterFrustum(options) {
  options = defaultValue_default(options, defaultValue_default.EMPTY_OBJECT);
  this.left = options.left;
  this._left = void 0;
  this.right = options.right;
  this._right = void 0;
  this.top = options.top;
  this._top = void 0;
  this.bottom = options.bottom;
  this._bottom = void 0;
  this.near = defaultValue_default(options.near, 1);
  this._near = this.near;
  this.far = defaultValue_default(options.far, 5e8);
  this._far = this.far;
  this._cullingVolume = new CullingVolume_default();
  this._orthographicMatrix = new Matrix4_default();
}
function update(frustum) {
  if (!defined_default(frustum.right) || !defined_default(frustum.left) || !defined_default(frustum.top) || !defined_default(frustum.bottom) || !defined_default(frustum.near) || !defined_default(frustum.far)) {
    throw new DeveloperError_default(
      "right, left, top, bottom, near, or far parameters are not set."
    );
  }
  if (frustum.top !== frustum._top || frustum.bottom !== frustum._bottom || frustum.left !== frustum._left || frustum.right !== frustum._right || frustum.near !== frustum._near || frustum.far !== frustum._far) {
    if (frustum.left > frustum.right) {
      throw new DeveloperError_default("right must be greater than left.");
    }
    if (frustum.bottom > frustum.top) {
      throw new DeveloperError_default("top must be greater than bottom.");
    }
    if (frustum.near <= 0 || frustum.near > frustum.far) {
      throw new DeveloperError_default(
        "near must be greater than zero and less than far."
      );
    }
    frustum._left = frustum.left;
    frustum._right = frustum.right;
    frustum._top = frustum.top;
    frustum._bottom = frustum.bottom;
    frustum._near = frustum.near;
    frustum._far = frustum.far;
    frustum._orthographicMatrix = Matrix4_default.computeOrthographicOffCenter(
      frustum.left,
      frustum.right,
      frustum.bottom,
      frustum.top,
      frustum.near,
      frustum.far,
      frustum._orthographicMatrix
    );
  }
}
Object.defineProperties(OrthographicOffCenterFrustum.prototype, {
  /**
   * Gets the orthographic projection matrix computed from the view frustum.
   * @memberof OrthographicOffCenterFrustum.prototype
   * @type {Matrix4}
   * @readonly
   */
  projectionMatrix: {
    get: function() {
      update(this);
      return this._orthographicMatrix;
    }
  }
});
var getPlanesRight = new Cartesian3_default();
var getPlanesNearCenter = new Cartesian3_default();
var getPlanesPoint = new Cartesian3_default();
var negateScratch = new Cartesian3_default();
OrthographicOffCenterFrustum.prototype.computeCullingVolume = function(position, direction, up) {
  if (!defined_default(position)) {
    throw new DeveloperError_default("position is required.");
  }
  if (!defined_default(direction)) {
    throw new DeveloperError_default("direction is required.");
  }
  if (!defined_default(up)) {
    throw new DeveloperError_default("up is required.");
  }
  const planes = this._cullingVolume.planes;
  const t = this.top;
  const b = this.bottom;
  const r = this.right;
  const l = this.left;
  const n = this.near;
  const f = this.far;
  const right = Cartesian3_default.cross(direction, up, getPlanesRight);
  Cartesian3_default.normalize(right, right);
  const nearCenter = getPlanesNearCenter;
  Cartesian3_default.multiplyByScalar(direction, n, nearCenter);
  Cartesian3_default.add(position, nearCenter, nearCenter);
  const point = getPlanesPoint;
  Cartesian3_default.multiplyByScalar(right, l, point);
  Cartesian3_default.add(nearCenter, point, point);
  let plane = planes[0];
  if (!defined_default(plane)) {
    plane = planes[0] = new Cartesian4_default();
  }
  plane.x = right.x;
  plane.y = right.y;
  plane.z = right.z;
  plane.w = -Cartesian3_default.dot(right, point);
  Cartesian3_default.multiplyByScalar(right, r, point);
  Cartesian3_default.add(nearCenter, point, point);
  plane = planes[1];
  if (!defined_default(plane)) {
    plane = planes[1] = new Cartesian4_default();
  }
  plane.x = -right.x;
  plane.y = -right.y;
  plane.z = -right.z;
  plane.w = -Cartesian3_default.dot(Cartesian3_default.negate(right, negateScratch), point);
  Cartesian3_default.multiplyByScalar(up, b, point);
  Cartesian3_default.add(nearCenter, point, point);
  plane = planes[2];
  if (!defined_default(plane)) {
    plane = planes[2] = new Cartesian4_default();
  }
  plane.x = up.x;
  plane.y = up.y;
  plane.z = up.z;
  plane.w = -Cartesian3_default.dot(up, point);
  Cartesian3_default.multiplyByScalar(up, t, point);
  Cartesian3_default.add(nearCenter, point, point);
  plane = planes[3];
  if (!defined_default(plane)) {
    plane = planes[3] = new Cartesian4_default();
  }
  plane.x = -up.x;
  plane.y = -up.y;
  plane.z = -up.z;
  plane.w = -Cartesian3_default.dot(Cartesian3_default.negate(up, negateScratch), point);
  plane = planes[4];
  if (!defined_default(plane)) {
    plane = planes[4] = new Cartesian4_default();
  }
  plane.x = direction.x;
  plane.y = direction.y;
  plane.z = direction.z;
  plane.w = -Cartesian3_default.dot(direction, nearCenter);
  Cartesian3_default.multiplyByScalar(direction, f, point);
  Cartesian3_default.add(position, point, point);
  plane = planes[5];
  if (!defined_default(plane)) {
    plane = planes[5] = new Cartesian4_default();
  }
  plane.x = -direction.x;
  plane.y = -direction.y;
  plane.z = -direction.z;
  plane.w = -Cartesian3_default.dot(Cartesian3_default.negate(direction, negateScratch), point);
  return this._cullingVolume;
};
OrthographicOffCenterFrustum.prototype.getPixelDimensions = function(drawingBufferWidth, drawingBufferHeight, distance, pixelRatio, result) {
  update(this);
  if (!defined_default(drawingBufferWidth) || !defined_default(drawingBufferHeight)) {
    throw new DeveloperError_default(
      "Both drawingBufferWidth and drawingBufferHeight are required."
    );
  }
  if (drawingBufferWidth <= 0) {
    throw new DeveloperError_default("drawingBufferWidth must be greater than zero.");
  }
  if (drawingBufferHeight <= 0) {
    throw new DeveloperError_default("drawingBufferHeight must be greater than zero.");
  }
  if (!defined_default(distance)) {
    throw new DeveloperError_default("distance is required.");
  }
  if (!defined_default(pixelRatio)) {
    throw new DeveloperError_default("pixelRatio is required.");
  }
  if (pixelRatio <= 0) {
    throw new DeveloperError_default("pixelRatio must be greater than zero.");
  }
  if (!defined_default(result)) {
    throw new DeveloperError_default("A result object is required.");
  }
  const frustumWidth = this.right - this.left;
  const frustumHeight = this.top - this.bottom;
  const pixelWidth = pixelRatio * frustumWidth / drawingBufferWidth;
  const pixelHeight = pixelRatio * frustumHeight / drawingBufferHeight;
  result.x = pixelWidth;
  result.y = pixelHeight;
  return result;
};
OrthographicOffCenterFrustum.prototype.clone = function(result) {
  if (!defined_default(result)) {
    result = new OrthographicOffCenterFrustum();
  }
  result.left = this.left;
  result.right = this.right;
  result.top = this.top;
  result.bottom = this.bottom;
  result.near = this.near;
  result.far = this.far;
  result._left = void 0;
  result._right = void 0;
  result._top = void 0;
  result._bottom = void 0;
  result._near = void 0;
  result._far = void 0;
  return result;
};
OrthographicOffCenterFrustum.prototype.equals = function(other) {
  return defined_default(other) && other instanceof OrthographicOffCenterFrustum && this.right === other.right && this.left === other.left && this.top === other.top && this.bottom === other.bottom && this.near === other.near && this.far === other.far;
};
OrthographicOffCenterFrustum.prototype.equalsEpsilon = function(other, relativeEpsilon, absoluteEpsilon) {
  return other === this || defined_default(other) && other instanceof OrthographicOffCenterFrustum && Math_default.equalsEpsilon(
    this.right,
    other.right,
    relativeEpsilon,
    absoluteEpsilon
  ) && Math_default.equalsEpsilon(
    this.left,
    other.left,
    relativeEpsilon,
    absoluteEpsilon
  ) && Math_default.equalsEpsilon(
    this.top,
    other.top,
    relativeEpsilon,
    absoluteEpsilon
  ) && Math_default.equalsEpsilon(
    this.bottom,
    other.bottom,
    relativeEpsilon,
    absoluteEpsilon
  ) && Math_default.equalsEpsilon(
    this.near,
    other.near,
    relativeEpsilon,
    absoluteEpsilon
  ) && Math_default.equalsEpsilon(
    this.far,
    other.far,
    relativeEpsilon,
    absoluteEpsilon
  );
};
var OrthographicOffCenterFrustum_default = OrthographicOffCenterFrustum;

// packages/engine/Source/Core/OrthographicFrustum.js
function OrthographicFrustum(options) {
  options = defaultValue_default(options, defaultValue_default.EMPTY_OBJECT);
  this._offCenterFrustum = new OrthographicOffCenterFrustum_default();
  this.width = options.width;
  this._width = void 0;
  this.aspectRatio = options.aspectRatio;
  this._aspectRatio = void 0;
  this.near = defaultValue_default(options.near, 1);
  this._near = this.near;
  this.far = defaultValue_default(options.far, 5e8);
  this._far = this.far;
}
OrthographicFrustum.packedLength = 4;
OrthographicFrustum.pack = function(value, array, startingIndex) {
  Check_default.typeOf.object("value", value);
  Check_default.defined("array", array);
  startingIndex = defaultValue_default(startingIndex, 0);
  array[startingIndex++] = value.width;
  array[startingIndex++] = value.aspectRatio;
  array[startingIndex++] = value.near;
  array[startingIndex] = value.far;
  return array;
};
OrthographicFrustum.unpack = function(array, startingIndex, result) {
  Check_default.defined("array", array);
  startingIndex = defaultValue_default(startingIndex, 0);
  if (!defined_default(result)) {
    result = new OrthographicFrustum();
  }
  result.width = array[startingIndex++];
  result.aspectRatio = array[startingIndex++];
  result.near = array[startingIndex++];
  result.far = array[startingIndex];
  return result;
};
function update2(frustum) {
  if (!defined_default(frustum.width) || !defined_default(frustum.aspectRatio) || !defined_default(frustum.near) || !defined_default(frustum.far)) {
    throw new DeveloperError_default(
      "width, aspectRatio, near, or far parameters are not set."
    );
  }
  const f = frustum._offCenterFrustum;
  if (frustum.width !== frustum._width || frustum.aspectRatio !== frustum._aspectRatio || frustum.near !== frustum._near || frustum.far !== frustum._far) {
    if (frustum.aspectRatio < 0) {
      throw new DeveloperError_default("aspectRatio must be positive.");
    }
    if (frustum.near < 0 || frustum.near > frustum.far) {
      throw new DeveloperError_default(
        "near must be greater than zero and less than far."
      );
    }
    frustum._aspectRatio = frustum.aspectRatio;
    frustum._width = frustum.width;
    frustum._near = frustum.near;
    frustum._far = frustum.far;
    const ratio = 1 / frustum.aspectRatio;
    f.right = frustum.width * 0.5;
    f.left = -f.right;
    f.top = ratio * f.right;
    f.bottom = -f.top;
    f.near = frustum.near;
    f.far = frustum.far;
  }
}
Object.defineProperties(OrthographicFrustum.prototype, {
  /**
   * Gets the orthographic projection matrix computed from the view frustum.
   * @memberof OrthographicFrustum.prototype
   * @type {Matrix4}
   * @readonly
   */
  projectionMatrix: {
    get: function() {
      update2(this);
      return this._offCenterFrustum.projectionMatrix;
    }
  },
  /**
   * Gets the orthographic projection matrix computed from the view frustum.
   * @memberof OrthographicFrustum.prototype
   * @type {OrthographicOffCenterFrustum}
   * @readonly
   * @private
   */
  offCenterFrustum: {
    get: function() {
      update2(this);
      return this._offCenterFrustum;
    }
  }
});
OrthographicFrustum.prototype.computeCullingVolume = function(position, direction, up) {
  update2(this);
  return this._offCenterFrustum.computeCullingVolume(position, direction, up);
};
OrthographicFrustum.prototype.getPixelDimensions = function(drawingBufferWidth, drawingBufferHeight, distance, pixelRatio, result) {
  update2(this);
  return this._offCenterFrustum.getPixelDimensions(
    drawingBufferWidth,
    drawingBufferHeight,
    distance,
    pixelRatio,
    result
  );
};
OrthographicFrustum.prototype.clone = function(result) {
  if (!defined_default(result)) {
    result = new OrthographicFrustum();
  }
  result.aspectRatio = this.aspectRatio;
  result.width = this.width;
  result.near = this.near;
  result.far = this.far;
  result._aspectRatio = void 0;
  result._width = void 0;
  result._near = void 0;
  result._far = void 0;
  this._offCenterFrustum.clone(result._offCenterFrustum);
  return result;
};
OrthographicFrustum.prototype.equals = function(other) {
  if (!defined_default(other) || !(other instanceof OrthographicFrustum)) {
    return false;
  }
  update2(this);
  update2(other);
  return this.width === other.width && this.aspectRatio === other.aspectRatio && this._offCenterFrustum.equals(other._offCenterFrustum);
};
OrthographicFrustum.prototype.equalsEpsilon = function(other, relativeEpsilon, absoluteEpsilon) {
  if (!defined_default(other) || !(other instanceof OrthographicFrustum)) {
    return false;
  }
  update2(this);
  update2(other);
  return Math_default.equalsEpsilon(
    this.width,
    other.width,
    relativeEpsilon,
    absoluteEpsilon
  ) && Math_default.equalsEpsilon(
    this.aspectRatio,
    other.aspectRatio,
    relativeEpsilon,
    absoluteEpsilon
  ) && this._offCenterFrustum.equalsEpsilon(
    other._offCenterFrustum,
    relativeEpsilon,
    absoluteEpsilon
  );
};
var OrthographicFrustum_default = OrthographicFrustum;

export {
  CullingVolume_default,
  OrthographicOffCenterFrustum_default,
  OrthographicFrustum_default
};
