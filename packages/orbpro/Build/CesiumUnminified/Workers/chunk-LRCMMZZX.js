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
  TerrainExaggeration_default
} from "./chunk-FSIZ6QLB.js";
import {
  AttributeCompression_default
} from "./chunk-PX2BOBEB.js";
import {
  Cartesian2_default,
  Matrix4_default
} from "./chunk-KTN4SGGY.js";
import {
  ComponentDatatype_default
} from "./chunk-PDG6JOP7.js";
import {
  Cartesian3_default
} from "./chunk-HLVA4ANJ.js";
import {
  Math_default
} from "./chunk-NMDY6ZLZ.js";
import {
  defaultValue_default
} from "./chunk-C53JYYKX.js";
import {
  defined_default
} from "./chunk-2KF5NPJR.js";

// packages/engine/Source/Core/TerrainQuantization.js
var TerrainQuantization = {
  /**
   * The vertices are not compressed.
   *
   * @type {number}
   * @constant
   */
  NONE: 0,
  /**
   * The vertices are compressed to 12 bits.
   *
   * @type {number}
   * @constant
   */
  BITS12: 1
};
var TerrainQuantization_default = Object.freeze(TerrainQuantization);

// packages/engine/Source/Core/TerrainEncoding.js
var cartesian3Scratch = new Cartesian3_default();
var cartesian3DimScratch = new Cartesian3_default();
var cartesian2Scratch = new Cartesian2_default();
var matrix4Scratch = new Matrix4_default();
var matrix4Scratch2 = new Matrix4_default();
var SHIFT_LEFT_12 = Math.pow(2, 12);
function TerrainEncoding(center, axisAlignedBoundingBox, minimumHeight, maximumHeight, fromENU, hasVertexNormals, hasWebMercatorT, hasGeodeticSurfaceNormals, exaggeration, exaggerationRelativeHeight) {
  let quantization = TerrainQuantization_default.NONE;
  let toENU;
  let matrix;
  if (defined_default(axisAlignedBoundingBox) && defined_default(minimumHeight) && defined_default(maximumHeight) && defined_default(fromENU)) {
    const minimum = axisAlignedBoundingBox.minimum;
    const maximum = axisAlignedBoundingBox.maximum;
    const dimensions = Cartesian3_default.subtract(
      maximum,
      minimum,
      cartesian3DimScratch
    );
    const hDim = maximumHeight - minimumHeight;
    const maxDim = Math.max(Cartesian3_default.maximumComponent(dimensions), hDim);
    if (maxDim < SHIFT_LEFT_12 - 1) {
      quantization = TerrainQuantization_default.BITS12;
    } else {
      quantization = TerrainQuantization_default.NONE;
    }
    toENU = Matrix4_default.inverseTransformation(fromENU, new Matrix4_default());
    const translation = Cartesian3_default.negate(minimum, cartesian3Scratch);
    Matrix4_default.multiply(
      Matrix4_default.fromTranslation(translation, matrix4Scratch),
      toENU,
      toENU
    );
    const scale = cartesian3Scratch;
    scale.x = 1 / dimensions.x;
    scale.y = 1 / dimensions.y;
    scale.z = 1 / dimensions.z;
    Matrix4_default.multiply(Matrix4_default.fromScale(scale, matrix4Scratch), toENU, toENU);
    matrix = Matrix4_default.clone(fromENU);
    Matrix4_default.setTranslation(matrix, Cartesian3_default.ZERO, matrix);
    fromENU = Matrix4_default.clone(fromENU, new Matrix4_default());
    const translationMatrix = Matrix4_default.fromTranslation(minimum, matrix4Scratch);
    const scaleMatrix = Matrix4_default.fromScale(dimensions, matrix4Scratch2);
    const st = Matrix4_default.multiply(translationMatrix, scaleMatrix, matrix4Scratch);
    Matrix4_default.multiply(fromENU, st, fromENU);
    Matrix4_default.multiply(matrix, st, matrix);
  }
  this.quantization = quantization;
  this.minimumHeight = minimumHeight;
  this.maximumHeight = maximumHeight;
  this.center = Cartesian3_default.clone(center);
  this.toScaledENU = toENU;
  this.fromScaledENU = fromENU;
  this.matrix = matrix;
  this.hasVertexNormals = hasVertexNormals;
  this.hasWebMercatorT = defaultValue_default(hasWebMercatorT, false);
  this.hasGeodeticSurfaceNormals = defaultValue_default(
    hasGeodeticSurfaceNormals,
    false
  );
  this.exaggeration = defaultValue_default(exaggeration, 1);
  this.exaggerationRelativeHeight = defaultValue_default(
    exaggerationRelativeHeight,
    0
  );
  this.stride = 0;
  this._offsetGeodeticSurfaceNormal = 0;
  this._offsetVertexNormal = 0;
  this._calculateStrideAndOffsets();
}
TerrainEncoding.prototype.encode = function(vertexBuffer, bufferIndex, position, uv, height, normalToPack, webMercatorT, geodeticSurfaceNormal) {
  const u = uv.x;
  const v = uv.y;
  if (this.quantization === TerrainQuantization_default.BITS12) {
    position = Matrix4_default.multiplyByPoint(
      this.toScaledENU,
      position,
      cartesian3Scratch
    );
    position.x = Math_default.clamp(position.x, 0, 1);
    position.y = Math_default.clamp(position.y, 0, 1);
    position.z = Math_default.clamp(position.z, 0, 1);
    const hDim = this.maximumHeight - this.minimumHeight;
    const h = Math_default.clamp((height - this.minimumHeight) / hDim, 0, 1);
    Cartesian2_default.fromElements(position.x, position.y, cartesian2Scratch);
    const compressed0 = AttributeCompression_default.compressTextureCoordinates(
      cartesian2Scratch
    );
    Cartesian2_default.fromElements(position.z, h, cartesian2Scratch);
    const compressed1 = AttributeCompression_default.compressTextureCoordinates(
      cartesian2Scratch
    );
    Cartesian2_default.fromElements(u, v, cartesian2Scratch);
    const compressed2 = AttributeCompression_default.compressTextureCoordinates(
      cartesian2Scratch
    );
    vertexBuffer[bufferIndex++] = compressed0;
    vertexBuffer[bufferIndex++] = compressed1;
    vertexBuffer[bufferIndex++] = compressed2;
    if (this.hasWebMercatorT) {
      Cartesian2_default.fromElements(webMercatorT, 0, cartesian2Scratch);
      const compressed3 = AttributeCompression_default.compressTextureCoordinates(
        cartesian2Scratch
      );
      vertexBuffer[bufferIndex++] = compressed3;
    }
  } else {
    Cartesian3_default.subtract(position, this.center, cartesian3Scratch);
    vertexBuffer[bufferIndex++] = cartesian3Scratch.x;
    vertexBuffer[bufferIndex++] = cartesian3Scratch.y;
    vertexBuffer[bufferIndex++] = cartesian3Scratch.z;
    vertexBuffer[bufferIndex++] = height;
    vertexBuffer[bufferIndex++] = u;
    vertexBuffer[bufferIndex++] = v;
    if (this.hasWebMercatorT) {
      vertexBuffer[bufferIndex++] = webMercatorT;
    }
  }
  if (this.hasVertexNormals) {
    vertexBuffer[bufferIndex++] = AttributeCompression_default.octPackFloat(
      normalToPack
    );
  }
  if (this.hasGeodeticSurfaceNormals) {
    vertexBuffer[bufferIndex++] = geodeticSurfaceNormal.x;
    vertexBuffer[bufferIndex++] = geodeticSurfaceNormal.y;
    vertexBuffer[bufferIndex++] = geodeticSurfaceNormal.z;
  }
  return bufferIndex;
};
var scratchPosition = new Cartesian3_default();
var scratchGeodeticSurfaceNormal = new Cartesian3_default();
TerrainEncoding.prototype.addGeodeticSurfaceNormals = function(oldBuffer, newBuffer, ellipsoid) {
  if (this.hasGeodeticSurfaceNormals) {
    return;
  }
  const oldStride = this.stride;
  const vertexCount = oldBuffer.length / oldStride;
  this.hasGeodeticSurfaceNormals = true;
  this._calculateStrideAndOffsets();
  const newStride = this.stride;
  for (let index = 0; index < vertexCount; index++) {
    for (let offset = 0; offset < oldStride; offset++) {
      const oldIndex = index * oldStride + offset;
      const newIndex = index * newStride + offset;
      newBuffer[newIndex] = oldBuffer[oldIndex];
    }
    const position = this.decodePosition(newBuffer, index, scratchPosition);
    const geodeticSurfaceNormal = ellipsoid.geodeticSurfaceNormal(
      position,
      scratchGeodeticSurfaceNormal
    );
    const bufferIndex = index * newStride + this._offsetGeodeticSurfaceNormal;
    newBuffer[bufferIndex] = geodeticSurfaceNormal.x;
    newBuffer[bufferIndex + 1] = geodeticSurfaceNormal.y;
    newBuffer[bufferIndex + 2] = geodeticSurfaceNormal.z;
  }
};
TerrainEncoding.prototype.removeGeodeticSurfaceNormals = function(oldBuffer, newBuffer) {
  if (!this.hasGeodeticSurfaceNormals) {
    return;
  }
  const oldStride = this.stride;
  const vertexCount = oldBuffer.length / oldStride;
  this.hasGeodeticSurfaceNormals = false;
  this._calculateStrideAndOffsets();
  const newStride = this.stride;
  for (let index = 0; index < vertexCount; index++) {
    for (let offset = 0; offset < newStride; offset++) {
      const oldIndex = index * oldStride + offset;
      const newIndex = index * newStride + offset;
      newBuffer[newIndex] = oldBuffer[oldIndex];
    }
  }
};
TerrainEncoding.prototype.decodePosition = function(buffer, index, result) {
  if (!defined_default(result)) {
    result = new Cartesian3_default();
  }
  index *= this.stride;
  if (this.quantization === TerrainQuantization_default.BITS12) {
    const xy = AttributeCompression_default.decompressTextureCoordinates(
      buffer[index],
      cartesian2Scratch
    );
    result.x = xy.x;
    result.y = xy.y;
    const zh = AttributeCompression_default.decompressTextureCoordinates(
      buffer[index + 1],
      cartesian2Scratch
    );
    result.z = zh.x;
    return Matrix4_default.multiplyByPoint(this.fromScaledENU, result, result);
  }
  result.x = buffer[index];
  result.y = buffer[index + 1];
  result.z = buffer[index + 2];
  return Cartesian3_default.add(result, this.center, result);
};
TerrainEncoding.prototype.getExaggeratedPosition = function(buffer, index, result) {
  result = this.decodePosition(buffer, index, result);
  const exaggeration = this.exaggeration;
  const exaggerationRelativeHeight = this.exaggerationRelativeHeight;
  const hasExaggeration = exaggeration !== 1;
  if (hasExaggeration && this.hasGeodeticSurfaceNormals) {
    const geodeticSurfaceNormal = this.decodeGeodeticSurfaceNormal(
      buffer,
      index,
      scratchGeodeticSurfaceNormal
    );
    const rawHeight = this.decodeHeight(buffer, index);
    const heightDifference = TerrainExaggeration_default.getHeight(
      rawHeight,
      exaggeration,
      exaggerationRelativeHeight
    ) - rawHeight;
    result.x += geodeticSurfaceNormal.x * heightDifference;
    result.y += geodeticSurfaceNormal.y * heightDifference;
    result.z += geodeticSurfaceNormal.z * heightDifference;
  }
  return result;
};
TerrainEncoding.prototype.decodeTextureCoordinates = function(buffer, index, result) {
  if (!defined_default(result)) {
    result = new Cartesian2_default();
  }
  index *= this.stride;
  if (this.quantization === TerrainQuantization_default.BITS12) {
    return AttributeCompression_default.decompressTextureCoordinates(
      buffer[index + 2],
      result
    );
  }
  return Cartesian2_default.fromElements(buffer[index + 4], buffer[index + 5], result);
};
TerrainEncoding.prototype.decodeHeight = function(buffer, index) {
  index *= this.stride;
  if (this.quantization === TerrainQuantization_default.BITS12) {
    const zh = AttributeCompression_default.decompressTextureCoordinates(
      buffer[index + 1],
      cartesian2Scratch
    );
    return zh.y * (this.maximumHeight - this.minimumHeight) + this.minimumHeight;
  }
  return buffer[index + 3];
};
TerrainEncoding.prototype.decodeWebMercatorT = function(buffer, index) {
  index *= this.stride;
  if (this.quantization === TerrainQuantization_default.BITS12) {
    return AttributeCompression_default.decompressTextureCoordinates(
      buffer[index + 3],
      cartesian2Scratch
    ).x;
  }
  return buffer[index + 6];
};
TerrainEncoding.prototype.getOctEncodedNormal = function(buffer, index, result) {
  index = index * this.stride + this._offsetVertexNormal;
  const temp = buffer[index] / 256;
  const x = Math.floor(temp);
  const y = (temp - x) * 256;
  return Cartesian2_default.fromElements(x, y, result);
};
TerrainEncoding.prototype.decodeGeodeticSurfaceNormal = function(buffer, index, result) {
  index = index * this.stride + this._offsetGeodeticSurfaceNormal;
  result.x = buffer[index];
  result.y = buffer[index + 1];
  result.z = buffer[index + 2];
  return result;
};
TerrainEncoding.prototype._calculateStrideAndOffsets = function() {
  let vertexStride = 0;
  switch (this.quantization) {
    case TerrainQuantization_default.BITS12:
      vertexStride += 3;
      break;
    default:
      vertexStride += 6;
  }
  if (this.hasWebMercatorT) {
    vertexStride += 1;
  }
  if (this.hasVertexNormals) {
    this._offsetVertexNormal = vertexStride;
    vertexStride += 1;
  }
  if (this.hasGeodeticSurfaceNormals) {
    this._offsetGeodeticSurfaceNormal = vertexStride;
    vertexStride += 3;
  }
  this.stride = vertexStride;
};
var attributesIndicesNone = {
  position3DAndHeight: 0,
  textureCoordAndEncodedNormals: 1,
  geodeticSurfaceNormal: 2
};
var attributesIndicesBits12 = {
  compressed0: 0,
  compressed1: 1,
  geodeticSurfaceNormal: 2
};
TerrainEncoding.prototype.getAttributes = function(buffer) {
  const datatype = ComponentDatatype_default.FLOAT;
  const sizeInBytes = ComponentDatatype_default.getSizeInBytes(datatype);
  const strideInBytes = this.stride * sizeInBytes;
  let offsetInBytes = 0;
  const attributes = [];
  function addAttribute(index, componentsPerAttribute) {
    attributes.push({
      index,
      vertexBuffer: buffer,
      componentDatatype: datatype,
      componentsPerAttribute,
      offsetInBytes,
      strideInBytes
    });
    offsetInBytes += componentsPerAttribute * sizeInBytes;
  }
  if (this.quantization === TerrainQuantization_default.NONE) {
    addAttribute(attributesIndicesNone.position3DAndHeight, 4);
    let componentsTexCoordAndNormals = 2;
    componentsTexCoordAndNormals += this.hasWebMercatorT ? 1 : 0;
    componentsTexCoordAndNormals += this.hasVertexNormals ? 1 : 0;
    addAttribute(
      attributesIndicesNone.textureCoordAndEncodedNormals,
      componentsTexCoordAndNormals
    );
    if (this.hasGeodeticSurfaceNormals) {
      addAttribute(attributesIndicesNone.geodeticSurfaceNormal, 3);
    }
  } else {
    const usingAttribute0Component4 = this.hasWebMercatorT || this.hasVertexNormals;
    const usingAttribute1Component1 = this.hasWebMercatorT && this.hasVertexNormals;
    addAttribute(
      attributesIndicesBits12.compressed0,
      usingAttribute0Component4 ? 4 : 3
    );
    if (usingAttribute1Component1) {
      addAttribute(attributesIndicesBits12.compressed1, 1);
    }
    if (this.hasGeodeticSurfaceNormals) {
      addAttribute(attributesIndicesBits12.geodeticSurfaceNormal, 3);
    }
  }
  return attributes;
};
TerrainEncoding.prototype.getAttributeLocations = function() {
  if (this.quantization === TerrainQuantization_default.NONE) {
    return attributesIndicesNone;
  }
  return attributesIndicesBits12;
};
TerrainEncoding.clone = function(encoding, result) {
  if (!defined_default(encoding)) {
    return void 0;
  }
  if (!defined_default(result)) {
    result = new TerrainEncoding();
  }
  result.quantization = encoding.quantization;
  result.minimumHeight = encoding.minimumHeight;
  result.maximumHeight = encoding.maximumHeight;
  result.center = Cartesian3_default.clone(encoding.center);
  result.toScaledENU = Matrix4_default.clone(encoding.toScaledENU);
  result.fromScaledENU = Matrix4_default.clone(encoding.fromScaledENU);
  result.matrix = Matrix4_default.clone(encoding.matrix);
  result.hasVertexNormals = encoding.hasVertexNormals;
  result.hasWebMercatorT = encoding.hasWebMercatorT;
  result.hasGeodeticSurfaceNormals = encoding.hasGeodeticSurfaceNormals;
  result.exaggeration = encoding.exaggeration;
  result.exaggerationRelativeHeight = encoding.exaggerationRelativeHeight;
  result._calculateStrideAndOffsets();
  return result;
};
var TerrainEncoding_default = TerrainEncoding;

export {
  TerrainEncoding_default
};
