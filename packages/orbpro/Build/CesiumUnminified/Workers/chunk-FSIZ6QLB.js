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
  BoundingSphere_default
} from "./chunk-JTOLNNYW.js";
import {
  Rectangle_default
} from "./chunk-KTN4SGGY.js";
import {
  Cartesian3_default,
  Ellipsoid_default
} from "./chunk-HLVA4ANJ.js";
import {
  defaultValue_default
} from "./chunk-C53JYYKX.js";
import {
  Check_default
} from "./chunk-AHDNLR3T.js";
import {
  defined_default
} from "./chunk-2KF5NPJR.js";

// packages/engine/Source/Core/EllipsoidalOccluder.js
function EllipsoidalOccluder(ellipsoid, cameraPosition) {
  Check_default.typeOf.object("ellipsoid", ellipsoid);
  this._ellipsoid = ellipsoid;
  this._cameraPosition = new Cartesian3_default();
  this._cameraPositionInScaledSpace = new Cartesian3_default();
  this._distanceToLimbInScaledSpaceSquared = 0;
  if (defined_default(cameraPosition)) {
    this.cameraPosition = cameraPosition;
  }
}
Object.defineProperties(EllipsoidalOccluder.prototype, {
  /**
   * Gets the occluding ellipsoid.
   * @memberof EllipsoidalOccluder.prototype
   * @type {Ellipsoid}
   */
  ellipsoid: {
    get: function() {
      return this._ellipsoid;
    }
  },
  /**
   * Gets or sets the position of the camera.
   * @memberof EllipsoidalOccluder.prototype
   * @type {Cartesian3}
   */
  cameraPosition: {
    get: function() {
      return this._cameraPosition;
    },
    set: function(cameraPosition) {
      const ellipsoid = this._ellipsoid;
      const cv = ellipsoid.transformPositionToScaledSpace(
        cameraPosition,
        this._cameraPositionInScaledSpace
      );
      const vhMagnitudeSquared = Cartesian3_default.magnitudeSquared(cv) - 1;
      Cartesian3_default.clone(cameraPosition, this._cameraPosition);
      this._cameraPositionInScaledSpace = cv;
      this._distanceToLimbInScaledSpaceSquared = vhMagnitudeSquared;
    }
  }
});
var scratchCartesian = new Cartesian3_default();
EllipsoidalOccluder.prototype.isPointVisible = function(occludee) {
  const ellipsoid = this._ellipsoid;
  const occludeeScaledSpacePosition = ellipsoid.transformPositionToScaledSpace(
    occludee,
    scratchCartesian
  );
  return isScaledSpacePointVisible(
    occludeeScaledSpacePosition,
    this._cameraPositionInScaledSpace,
    this._distanceToLimbInScaledSpaceSquared
  );
};
EllipsoidalOccluder.prototype.isScaledSpacePointVisible = function(occludeeScaledSpacePosition) {
  return isScaledSpacePointVisible(
    occludeeScaledSpacePosition,
    this._cameraPositionInScaledSpace,
    this._distanceToLimbInScaledSpaceSquared
  );
};
var scratchCameraPositionInScaledSpaceShrunk = new Cartesian3_default();
EllipsoidalOccluder.prototype.isScaledSpacePointVisiblePossiblyUnderEllipsoid = function(occludeeScaledSpacePosition, minimumHeight) {
  const ellipsoid = this._ellipsoid;
  let vhMagnitudeSquared;
  let cv;
  if (defined_default(minimumHeight) && minimumHeight < 0 && ellipsoid.minimumRadius > -minimumHeight) {
    cv = scratchCameraPositionInScaledSpaceShrunk;
    cv.x = this._cameraPosition.x / (ellipsoid.radii.x + minimumHeight);
    cv.y = this._cameraPosition.y / (ellipsoid.radii.y + minimumHeight);
    cv.z = this._cameraPosition.z / (ellipsoid.radii.z + minimumHeight);
    vhMagnitudeSquared = cv.x * cv.x + cv.y * cv.y + cv.z * cv.z - 1;
  } else {
    cv = this._cameraPositionInScaledSpace;
    vhMagnitudeSquared = this._distanceToLimbInScaledSpaceSquared;
  }
  return isScaledSpacePointVisible(
    occludeeScaledSpacePosition,
    cv,
    vhMagnitudeSquared
  );
};
EllipsoidalOccluder.prototype.computeHorizonCullingPoint = function(directionToPoint, positions, result) {
  return computeHorizonCullingPointFromPositions(
    this._ellipsoid,
    directionToPoint,
    positions,
    result
  );
};
var scratchEllipsoidShrunk = Ellipsoid_default.clone(Ellipsoid_default.UNIT_SPHERE);
EllipsoidalOccluder.prototype.computeHorizonCullingPointPossiblyUnderEllipsoid = function(directionToPoint, positions, minimumHeight, result) {
  const possiblyShrunkEllipsoid = getPossiblyShrunkEllipsoid(
    this._ellipsoid,
    minimumHeight,
    scratchEllipsoidShrunk
  );
  return computeHorizonCullingPointFromPositions(
    possiblyShrunkEllipsoid,
    directionToPoint,
    positions,
    result
  );
};
EllipsoidalOccluder.prototype.computeHorizonCullingPointFromVertices = function(directionToPoint, vertices, stride, center, result) {
  return computeHorizonCullingPointFromVertices(
    this._ellipsoid,
    directionToPoint,
    vertices,
    stride,
    center,
    result
  );
};
EllipsoidalOccluder.prototype.computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid = function(directionToPoint, vertices, stride, center, minimumHeight, result) {
  const possiblyShrunkEllipsoid = getPossiblyShrunkEllipsoid(
    this._ellipsoid,
    minimumHeight,
    scratchEllipsoidShrunk
  );
  return computeHorizonCullingPointFromVertices(
    possiblyShrunkEllipsoid,
    directionToPoint,
    vertices,
    stride,
    center,
    result
  );
};
var subsampleScratch = [];
EllipsoidalOccluder.prototype.computeHorizonCullingPointFromRectangle = function(rectangle, ellipsoid, result) {
  Check_default.typeOf.object("rectangle", rectangle);
  const positions = Rectangle_default.subsample(
    rectangle,
    ellipsoid,
    0,
    subsampleScratch
  );
  const bs = BoundingSphere_default.fromPoints(positions);
  if (Cartesian3_default.magnitude(bs.center) < 0.1 * ellipsoid.minimumRadius) {
    return void 0;
  }
  return this.computeHorizonCullingPoint(bs.center, positions, result);
};
var scratchEllipsoidShrunkRadii = new Cartesian3_default();
function getPossiblyShrunkEllipsoid(ellipsoid, minimumHeight, result) {
  if (defined_default(minimumHeight) && minimumHeight < 0 && ellipsoid.minimumRadius > -minimumHeight) {
    const ellipsoidShrunkRadii = Cartesian3_default.fromElements(
      ellipsoid.radii.x + minimumHeight,
      ellipsoid.radii.y + minimumHeight,
      ellipsoid.radii.z + minimumHeight,
      scratchEllipsoidShrunkRadii
    );
    ellipsoid = Ellipsoid_default.fromCartesian3(ellipsoidShrunkRadii, result);
  }
  return ellipsoid;
}
function computeHorizonCullingPointFromPositions(ellipsoid, directionToPoint, positions, result) {
  Check_default.typeOf.object("directionToPoint", directionToPoint);
  Check_default.defined("positions", positions);
  if (!defined_default(result)) {
    result = new Cartesian3_default();
  }
  const scaledSpaceDirectionToPoint = computeScaledSpaceDirectionToPoint(
    ellipsoid,
    directionToPoint
  );
  let resultMagnitude = 0;
  for (let i = 0, len = positions.length; i < len; ++i) {
    const position = positions[i];
    const candidateMagnitude = computeMagnitude(
      ellipsoid,
      position,
      scaledSpaceDirectionToPoint
    );
    if (candidateMagnitude < 0) {
      return void 0;
    }
    resultMagnitude = Math.max(resultMagnitude, candidateMagnitude);
  }
  return magnitudeToPoint(scaledSpaceDirectionToPoint, resultMagnitude, result);
}
var positionScratch = new Cartesian3_default();
function computeHorizonCullingPointFromVertices(ellipsoid, directionToPoint, vertices, stride, center, result) {
  Check_default.typeOf.object("directionToPoint", directionToPoint);
  Check_default.defined("vertices", vertices);
  Check_default.typeOf.number("stride", stride);
  if (!defined_default(result)) {
    result = new Cartesian3_default();
  }
  stride = defaultValue_default(stride, 3);
  center = defaultValue_default(center, Cartesian3_default.ZERO);
  const scaledSpaceDirectionToPoint = computeScaledSpaceDirectionToPoint(
    ellipsoid,
    directionToPoint
  );
  let resultMagnitude = 0;
  for (let i = 0, len = vertices.length; i < len; i += stride) {
    positionScratch.x = vertices[i] + center.x;
    positionScratch.y = vertices[i + 1] + center.y;
    positionScratch.z = vertices[i + 2] + center.z;
    const candidateMagnitude = computeMagnitude(
      ellipsoid,
      positionScratch,
      scaledSpaceDirectionToPoint
    );
    if (candidateMagnitude < 0) {
      return void 0;
    }
    resultMagnitude = Math.max(resultMagnitude, candidateMagnitude);
  }
  return magnitudeToPoint(scaledSpaceDirectionToPoint, resultMagnitude, result);
}
function isScaledSpacePointVisible(occludeeScaledSpacePosition, cameraPositionInScaledSpace, distanceToLimbInScaledSpaceSquared) {
  const cv = cameraPositionInScaledSpace;
  const vhMagnitudeSquared = distanceToLimbInScaledSpaceSquared;
  const vt = Cartesian3_default.subtract(
    occludeeScaledSpacePosition,
    cv,
    scratchCartesian
  );
  const vtDotVc = -Cartesian3_default.dot(vt, cv);
  const isOccluded = vhMagnitudeSquared < 0 ? vtDotVc > 0 : vtDotVc > vhMagnitudeSquared && vtDotVc * vtDotVc / Cartesian3_default.magnitudeSquared(vt) > vhMagnitudeSquared;
  return !isOccluded;
}
var scaledSpaceScratch = new Cartesian3_default();
var directionScratch = new Cartesian3_default();
function computeMagnitude(ellipsoid, position, scaledSpaceDirectionToPoint) {
  const scaledSpacePosition = ellipsoid.transformPositionToScaledSpace(
    position,
    scaledSpaceScratch
  );
  let magnitudeSquared = Cartesian3_default.magnitudeSquared(scaledSpacePosition);
  let magnitude = Math.sqrt(magnitudeSquared);
  const direction = Cartesian3_default.divideByScalar(
    scaledSpacePosition,
    magnitude,
    directionScratch
  );
  magnitudeSquared = Math.max(1, magnitudeSquared);
  magnitude = Math.max(1, magnitude);
  const cosAlpha = Cartesian3_default.dot(direction, scaledSpaceDirectionToPoint);
  const sinAlpha = Cartesian3_default.magnitude(
    Cartesian3_default.cross(direction, scaledSpaceDirectionToPoint, direction)
  );
  const cosBeta = 1 / magnitude;
  const sinBeta = Math.sqrt(magnitudeSquared - 1) * cosBeta;
  return 1 / (cosAlpha * cosBeta - sinAlpha * sinBeta);
}
function magnitudeToPoint(scaledSpaceDirectionToPoint, resultMagnitude, result) {
  if (resultMagnitude <= 0 || resultMagnitude === 1 / 0 || resultMagnitude !== resultMagnitude) {
    return void 0;
  }
  return Cartesian3_default.multiplyByScalar(
    scaledSpaceDirectionToPoint,
    resultMagnitude,
    result
  );
}
var directionToPointScratch = new Cartesian3_default();
function computeScaledSpaceDirectionToPoint(ellipsoid, directionToPoint) {
  if (Cartesian3_default.equals(directionToPoint, Cartesian3_default.ZERO)) {
    return directionToPoint;
  }
  ellipsoid.transformPositionToScaledSpace(
    directionToPoint,
    directionToPointScratch
  );
  return Cartesian3_default.normalize(directionToPointScratch, directionToPointScratch);
}
var EllipsoidalOccluder_default = EllipsoidalOccluder;

// packages/engine/Source/Core/TerrainExaggeration.js
var TerrainExaggeration = {};
TerrainExaggeration.getHeight = function(height, scale, relativeHeight) {
  return (height - relativeHeight) * scale + relativeHeight;
};
var scratchCartographic = new Cartesian3_default();
TerrainExaggeration.getPosition = function(position, ellipsoid, terrainExaggeration, terrainExaggerationRelativeHeight, result) {
  const cartographic = ellipsoid.cartesianToCartographic(
    position,
    scratchCartographic
  );
  const newHeight = TerrainExaggeration.getHeight(
    cartographic.height,
    terrainExaggeration,
    terrainExaggerationRelativeHeight
  );
  return Cartesian3_default.fromRadians(
    cartographic.longitude,
    cartographic.latitude,
    newHeight,
    ellipsoid,
    result
  );
};
var TerrainExaggeration_default = TerrainExaggeration;

export {
  EllipsoidalOccluder_default,
  TerrainExaggeration_default
};
