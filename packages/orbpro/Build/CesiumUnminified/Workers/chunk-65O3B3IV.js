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
  EllipsoidalOccluder_default,
  TerrainEncoding_default
} from "./chunk-SR4B6FVO.js";
import {
  WebMercatorProjection_default
} from "./chunk-I5KYC5QY.js";
import {
  OrientedBoundingBox_default
} from "./chunk-WVYMMZW6.js";
import {
  AxisAlignedBoundingBox_default
} from "./chunk-YRBH2ON4.js";
import {
  BoundingSphere_default,
  Transforms_default
} from "./chunk-NLOQZLEU.js";
import {
  Cartesian2_default,
  Matrix4_default,
  Rectangle_default
} from "./chunk-MQNA3P5X.js";
import {
  Cartesian3_default,
  Ellipsoid_default
} from "./chunk-M35EWU24.js";
import {
  Math_default
} from "./chunk-DM2LKTVS.js";
import {
  defaultValue_default
} from "./chunk-N73NY3KY.js";
import {
  DeveloperError_default
} from "./chunk-TU2FA5CD.js";
import {
  defined_default
} from "./chunk-37JEF5H2.js";

// packages/engine/Source/Core/HeightmapEncoding.js
var HeightmapEncoding = {
  /**
   * No encoding
   *
   * @type {number}
   * @constant
   */
  NONE: 0,
  /**
   * LERC encoding
   *
   * @type {number}
   * @constant
   *
   * @see {@link https://github.com/Esri/lerc|The LERC specification}
   */
  LERC: 1
};
var HeightmapEncoding_default = Object.freeze(HeightmapEncoding);

// packages/engine/Source/Core/HeightmapTessellator.js
var HeightmapTessellator = {};
HeightmapTessellator.DEFAULT_STRUCTURE = Object.freeze({
  heightScale: 1,
  heightOffset: 0,
  elementsPerHeight: 1,
  stride: 1,
  elementMultiplier: 256,
  isBigEndian: false
});
var cartesian3Scratch = new Cartesian3_default();
var matrix4Scratch = new Matrix4_default();
var minimumScratch = new Cartesian3_default();
var maximumScratch = new Cartesian3_default();
HeightmapTessellator.computeVertices = function(options) {
  if (!defined_default(options) || !defined_default(options.heightmap)) {
    throw new DeveloperError_default("options.heightmap is required.");
  }
  if (!defined_default(options.width) || !defined_default(options.height)) {
    throw new DeveloperError_default("options.width and options.height are required.");
  }
  if (!defined_default(options.nativeRectangle)) {
    throw new DeveloperError_default("options.nativeRectangle is required.");
  }
  if (!defined_default(options.skirtHeight)) {
    throw new DeveloperError_default("options.skirtHeight is required.");
  }
  const cos = Math.cos;
  const sin = Math.sin;
  const sqrt = Math.sqrt;
  const atan = Math.atan;
  const exp = Math.exp;
  const piOverTwo = Math_default.PI_OVER_TWO;
  const toRadians = Math_default.toRadians;
  const heightmap = options.heightmap;
  const width = options.width;
  const height = options.height;
  const skirtHeight = options.skirtHeight;
  const hasSkirts = skirtHeight > 0;
  const isGeographic = defaultValue_default(options.isGeographic, true);
  const ellipsoid = defaultValue_default(options.ellipsoid, Ellipsoid_default.WGS84);
  const oneOverGlobeSemimajorAxis = 1 / ellipsoid.maximumRadius;
  const nativeRectangle = Rectangle_default.clone(options.nativeRectangle);
  const rectangle = Rectangle_default.clone(options.rectangle);
  let geographicWest;
  let geographicSouth;
  let geographicEast;
  let geographicNorth;
  if (!defined_default(rectangle)) {
    if (isGeographic) {
      geographicWest = toRadians(nativeRectangle.west);
      geographicSouth = toRadians(nativeRectangle.south);
      geographicEast = toRadians(nativeRectangle.east);
      geographicNorth = toRadians(nativeRectangle.north);
    } else {
      geographicWest = nativeRectangle.west * oneOverGlobeSemimajorAxis;
      geographicSouth = piOverTwo - 2 * atan(exp(-nativeRectangle.south * oneOverGlobeSemimajorAxis));
      geographicEast = nativeRectangle.east * oneOverGlobeSemimajorAxis;
      geographicNorth = piOverTwo - 2 * atan(exp(-nativeRectangle.north * oneOverGlobeSemimajorAxis));
    }
  } else {
    geographicWest = rectangle.west;
    geographicSouth = rectangle.south;
    geographicEast = rectangle.east;
    geographicNorth = rectangle.north;
  }
  let relativeToCenter = options.relativeToCenter;
  const hasRelativeToCenter = defined_default(relativeToCenter);
  relativeToCenter = hasRelativeToCenter ? relativeToCenter : Cartesian3_default.ZERO;
  const includeWebMercatorT = defaultValue_default(options.includeWebMercatorT, false);
  const exaggeration = defaultValue_default(options.exaggeration, 1);
  const exaggerationRelativeHeight = defaultValue_default(
    options.exaggerationRelativeHeight,
    0
  );
  const hasExaggeration = exaggeration !== 1;
  const includeGeodeticSurfaceNormals = hasExaggeration;
  const structure = defaultValue_default(
    options.structure,
    HeightmapTessellator.DEFAULT_STRUCTURE
  );
  const heightScale = defaultValue_default(
    structure.heightScale,
    HeightmapTessellator.DEFAULT_STRUCTURE.heightScale
  );
  const heightOffset = defaultValue_default(
    structure.heightOffset,
    HeightmapTessellator.DEFAULT_STRUCTURE.heightOffset
  );
  const elementsPerHeight = defaultValue_default(
    structure.elementsPerHeight,
    HeightmapTessellator.DEFAULT_STRUCTURE.elementsPerHeight
  );
  const stride = defaultValue_default(
    structure.stride,
    HeightmapTessellator.DEFAULT_STRUCTURE.stride
  );
  const elementMultiplier = defaultValue_default(
    structure.elementMultiplier,
    HeightmapTessellator.DEFAULT_STRUCTURE.elementMultiplier
  );
  const isBigEndian = defaultValue_default(
    structure.isBigEndian,
    HeightmapTessellator.DEFAULT_STRUCTURE.isBigEndian
  );
  let rectangleWidth = Rectangle_default.computeWidth(nativeRectangle);
  let rectangleHeight = Rectangle_default.computeHeight(nativeRectangle);
  const granularityX = rectangleWidth / (width - 1);
  const granularityY = rectangleHeight / (height - 1);
  if (!isGeographic) {
    rectangleWidth *= oneOverGlobeSemimajorAxis;
    rectangleHeight *= oneOverGlobeSemimajorAxis;
  }
  const radiiSquared = ellipsoid.radiiSquared;
  const radiiSquaredX = radiiSquared.x;
  const radiiSquaredY = radiiSquared.y;
  const radiiSquaredZ = radiiSquared.z;
  let minimumHeight = 65536;
  let maximumHeight = -65536;
  const fromENU = Transforms_default.eastNorthUpToFixedFrame(
    relativeToCenter,
    ellipsoid
  );
  const toENU = Matrix4_default.inverseTransformation(fromENU, matrix4Scratch);
  let southMercatorY;
  let oneOverMercatorHeight;
  if (includeWebMercatorT) {
    southMercatorY = WebMercatorProjection_default.geodeticLatitudeToMercatorAngle(
      geographicSouth
    );
    oneOverMercatorHeight = 1 / (WebMercatorProjection_default.geodeticLatitudeToMercatorAngle(geographicNorth) - southMercatorY);
  }
  const minimum = minimumScratch;
  minimum.x = Number.POSITIVE_INFINITY;
  minimum.y = Number.POSITIVE_INFINITY;
  minimum.z = Number.POSITIVE_INFINITY;
  const maximum = maximumScratch;
  maximum.x = Number.NEGATIVE_INFINITY;
  maximum.y = Number.NEGATIVE_INFINITY;
  maximum.z = Number.NEGATIVE_INFINITY;
  let hMin = Number.POSITIVE_INFINITY;
  const gridVertexCount = width * height;
  const edgeVertexCount = skirtHeight > 0 ? width * 2 + height * 2 : 0;
  const vertexCount = gridVertexCount + edgeVertexCount;
  const positions = new Array(vertexCount);
  const heights = new Array(vertexCount);
  const uvs = new Array(vertexCount);
  const webMercatorTs = includeWebMercatorT ? new Array(vertexCount) : [];
  const geodeticSurfaceNormals = includeGeodeticSurfaceNormals ? new Array(vertexCount) : [];
  let startRow = 0;
  let endRow = height;
  let startCol = 0;
  let endCol = width;
  if (hasSkirts) {
    --startRow;
    ++endRow;
    --startCol;
    ++endCol;
  }
  const skirtOffsetPercentage = 1e-5;
  for (let rowIndex = startRow; rowIndex < endRow; ++rowIndex) {
    let row = rowIndex;
    if (row < 0) {
      row = 0;
    }
    if (row >= height) {
      row = height - 1;
    }
    let latitude = nativeRectangle.north - granularityY * row;
    if (!isGeographic) {
      latitude = piOverTwo - 2 * atan(exp(-latitude * oneOverGlobeSemimajorAxis));
    } else {
      latitude = toRadians(latitude);
    }
    let v = (latitude - geographicSouth) / (geographicNorth - geographicSouth);
    v = Math_default.clamp(v, 0, 1);
    const isNorthEdge = rowIndex === startRow;
    const isSouthEdge = rowIndex === endRow - 1;
    if (skirtHeight > 0) {
      if (isNorthEdge) {
        latitude += skirtOffsetPercentage * rectangleHeight;
      } else if (isSouthEdge) {
        latitude -= skirtOffsetPercentage * rectangleHeight;
      }
    }
    const cosLatitude = cos(latitude);
    const nZ = sin(latitude);
    const kZ = radiiSquaredZ * nZ;
    let webMercatorT;
    if (includeWebMercatorT) {
      webMercatorT = (WebMercatorProjection_default.geodeticLatitudeToMercatorAngle(latitude) - southMercatorY) * oneOverMercatorHeight;
    }
    for (let colIndex = startCol; colIndex < endCol; ++colIndex) {
      let col = colIndex;
      if (col < 0) {
        col = 0;
      }
      if (col >= width) {
        col = width - 1;
      }
      const terrainOffset = row * (width * stride) + col * stride;
      let heightSample;
      if (elementsPerHeight === 1) {
        heightSample = heightmap[terrainOffset];
      } else {
        heightSample = 0;
        let elementOffset;
        if (isBigEndian) {
          for (elementOffset = 0; elementOffset < elementsPerHeight; ++elementOffset) {
            heightSample = heightSample * elementMultiplier + heightmap[terrainOffset + elementOffset];
          }
        } else {
          for (elementOffset = elementsPerHeight - 1; elementOffset >= 0; --elementOffset) {
            heightSample = heightSample * elementMultiplier + heightmap[terrainOffset + elementOffset];
          }
        }
      }
      heightSample = heightSample * heightScale + heightOffset;
      maximumHeight = Math.max(maximumHeight, heightSample);
      minimumHeight = Math.min(minimumHeight, heightSample);
      let longitude = nativeRectangle.west + granularityX * col;
      if (!isGeographic) {
        longitude = longitude * oneOverGlobeSemimajorAxis;
      } else {
        longitude = toRadians(longitude);
      }
      let u = (longitude - geographicWest) / (geographicEast - geographicWest);
      u = Math_default.clamp(u, 0, 1);
      let index = row * width + col;
      if (skirtHeight > 0) {
        const isWestEdge = colIndex === startCol;
        const isEastEdge = colIndex === endCol - 1;
        const isEdge = isNorthEdge || isSouthEdge || isWestEdge || isEastEdge;
        const isCorner = (isNorthEdge || isSouthEdge) && (isWestEdge || isEastEdge);
        if (isCorner) {
          continue;
        } else if (isEdge) {
          heightSample -= skirtHeight;
          if (isWestEdge) {
            index = gridVertexCount + (height - row - 1);
            longitude -= skirtOffsetPercentage * rectangleWidth;
          } else if (isSouthEdge) {
            index = gridVertexCount + height + (width - col - 1);
          } else if (isEastEdge) {
            index = gridVertexCount + height + width + row;
            longitude += skirtOffsetPercentage * rectangleWidth;
          } else if (isNorthEdge) {
            index = gridVertexCount + height + width + height + col;
          }
        }
      }
      const nX = cosLatitude * cos(longitude);
      const nY = cosLatitude * sin(longitude);
      const kX = radiiSquaredX * nX;
      const kY = radiiSquaredY * nY;
      const gamma = sqrt(kX * nX + kY * nY + kZ * nZ);
      const oneOverGamma = 1 / gamma;
      const rSurfaceX = kX * oneOverGamma;
      const rSurfaceY = kY * oneOverGamma;
      const rSurfaceZ = kZ * oneOverGamma;
      const position = new Cartesian3_default();
      position.x = rSurfaceX + nX * heightSample;
      position.y = rSurfaceY + nY * heightSample;
      position.z = rSurfaceZ + nZ * heightSample;
      Matrix4_default.multiplyByPoint(toENU, position, cartesian3Scratch);
      Cartesian3_default.minimumByComponent(cartesian3Scratch, minimum, minimum);
      Cartesian3_default.maximumByComponent(cartesian3Scratch, maximum, maximum);
      hMin = Math.min(hMin, heightSample);
      positions[index] = position;
      uvs[index] = new Cartesian2_default(u, v);
      heights[index] = heightSample;
      if (includeWebMercatorT) {
        webMercatorTs[index] = webMercatorT;
      }
      if (includeGeodeticSurfaceNormals) {
        geodeticSurfaceNormals[index] = ellipsoid.geodeticSurfaceNormal(
          position
        );
      }
    }
  }
  const boundingSphere3D = BoundingSphere_default.fromPoints(positions);
  let orientedBoundingBox;
  if (defined_default(rectangle)) {
    orientedBoundingBox = OrientedBoundingBox_default.fromRectangle(
      rectangle,
      minimumHeight,
      maximumHeight,
      ellipsoid
    );
  }
  let occludeePointInScaledSpace;
  if (hasRelativeToCenter) {
    const occluder = new EllipsoidalOccluder_default(ellipsoid);
    occludeePointInScaledSpace = occluder.computeHorizonCullingPointPossiblyUnderEllipsoid(
      relativeToCenter,
      positions,
      minimumHeight
    );
  }
  const aaBox = new AxisAlignedBoundingBox_default(minimum, maximum, relativeToCenter);
  const encoding = new TerrainEncoding_default(
    relativeToCenter,
    aaBox,
    hMin,
    maximumHeight,
    fromENU,
    false,
    includeWebMercatorT,
    includeGeodeticSurfaceNormals,
    exaggeration,
    exaggerationRelativeHeight
  );
  const vertices = new Float32Array(vertexCount * encoding.stride);
  let bufferIndex = 0;
  for (let j = 0; j < vertexCount; ++j) {
    bufferIndex = encoding.encode(
      vertices,
      bufferIndex,
      positions[j],
      uvs[j],
      heights[j],
      void 0,
      webMercatorTs[j],
      geodeticSurfaceNormals[j]
    );
  }
  return {
    vertices,
    maximumHeight,
    minimumHeight,
    encoding,
    boundingSphere3D,
    orientedBoundingBox,
    occludeePointInScaledSpace
  };
};
var HeightmapTessellator_default = HeightmapTessellator;

export {
  HeightmapEncoding_default,
  HeightmapTessellator_default
};
