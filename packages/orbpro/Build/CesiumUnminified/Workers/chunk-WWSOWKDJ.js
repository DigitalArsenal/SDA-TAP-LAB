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
  WebGLConstants_default
} from "./chunk-VNRUVNIK.js";

// packages/engine/Source/Renderer/PixelDatatype.js
var PixelDatatype = {
  UNSIGNED_BYTE: WebGLConstants_default.UNSIGNED_BYTE,
  UNSIGNED_SHORT: WebGLConstants_default.UNSIGNED_SHORT,
  UNSIGNED_INT: WebGLConstants_default.UNSIGNED_INT,
  FLOAT: WebGLConstants_default.FLOAT,
  HALF_FLOAT: WebGLConstants_default.HALF_FLOAT_OES,
  UNSIGNED_INT_24_8: WebGLConstants_default.UNSIGNED_INT_24_8,
  UNSIGNED_SHORT_4_4_4_4: WebGLConstants_default.UNSIGNED_SHORT_4_4_4_4,
  UNSIGNED_SHORT_5_5_5_1: WebGLConstants_default.UNSIGNED_SHORT_5_5_5_1,
  UNSIGNED_SHORT_5_6_5: WebGLConstants_default.UNSIGNED_SHORT_5_6_5
};
PixelDatatype.toWebGLConstant = function(pixelDatatype, context) {
  switch (pixelDatatype) {
    case PixelDatatype.UNSIGNED_BYTE:
      return WebGLConstants_default.UNSIGNED_BYTE;
    case PixelDatatype.UNSIGNED_SHORT:
      return WebGLConstants_default.UNSIGNED_SHORT;
    case PixelDatatype.UNSIGNED_INT:
      return WebGLConstants_default.UNSIGNED_INT;
    case PixelDatatype.FLOAT:
      return WebGLConstants_default.FLOAT;
    case PixelDatatype.HALF_FLOAT:
      return context.webgl2 ? WebGLConstants_default.HALF_FLOAT : WebGLConstants_default.HALF_FLOAT_OES;
    case PixelDatatype.UNSIGNED_INT_24_8:
      return WebGLConstants_default.UNSIGNED_INT_24_8;
    case PixelDatatype.UNSIGNED_SHORT_4_4_4_4:
      return WebGLConstants_default.UNSIGNED_SHORT_4_4_4_4;
    case PixelDatatype.UNSIGNED_SHORT_5_5_5_1:
      return WebGLConstants_default.UNSIGNED_SHORT_5_5_5_1;
    case PixelDatatype.UNSIGNED_SHORT_5_6_5:
      return PixelDatatype.UNSIGNED_SHORT_5_6_5;
  }
};
PixelDatatype.isPacked = function(pixelDatatype) {
  return pixelDatatype === PixelDatatype.UNSIGNED_INT_24_8 || pixelDatatype === PixelDatatype.UNSIGNED_SHORT_4_4_4_4 || pixelDatatype === PixelDatatype.UNSIGNED_SHORT_5_5_5_1 || pixelDatatype === PixelDatatype.UNSIGNED_SHORT_5_6_5;
};
PixelDatatype.sizeInBytes = function(pixelDatatype) {
  switch (pixelDatatype) {
    case PixelDatatype.UNSIGNED_BYTE:
      return 1;
    case PixelDatatype.UNSIGNED_SHORT:
    case PixelDatatype.UNSIGNED_SHORT_4_4_4_4:
    case PixelDatatype.UNSIGNED_SHORT_5_5_5_1:
    case PixelDatatype.UNSIGNED_SHORT_5_6_5:
    case PixelDatatype.HALF_FLOAT:
      return 2;
    case PixelDatatype.UNSIGNED_INT:
    case PixelDatatype.FLOAT:
    case PixelDatatype.UNSIGNED_INT_24_8:
      return 4;
  }
};
PixelDatatype.validate = function(pixelDatatype) {
  return pixelDatatype === PixelDatatype.UNSIGNED_BYTE || pixelDatatype === PixelDatatype.UNSIGNED_SHORT || pixelDatatype === PixelDatatype.UNSIGNED_INT || pixelDatatype === PixelDatatype.FLOAT || pixelDatatype === PixelDatatype.HALF_FLOAT || pixelDatatype === PixelDatatype.UNSIGNED_INT_24_8 || pixelDatatype === PixelDatatype.UNSIGNED_SHORT_4_4_4_4 || pixelDatatype === PixelDatatype.UNSIGNED_SHORT_5_5_5_1 || pixelDatatype === PixelDatatype.UNSIGNED_SHORT_5_6_5;
};
var PixelDatatype_default = Object.freeze(PixelDatatype);

// packages/engine/Source/Core/PixelFormat.js
var PixelFormat = {
  /**
   * A pixel format containing a depth value.
   *
   * @type {number}
   * @constant
   */
  DEPTH_COMPONENT: WebGLConstants_default.DEPTH_COMPONENT,
  /**
   * A pixel format containing a depth and stencil value, most often used with {@link PixelDatatype.UNSIGNED_INT_24_8}.
   *
   * @type {number}
   * @constant
   */
  DEPTH_STENCIL: WebGLConstants_default.DEPTH_STENCIL,
  /**
   * A pixel format containing an alpha channel.
   *
   * @type {number}
   * @constant
   */
  ALPHA: WebGLConstants_default.ALPHA,
  /**
   * A pixel format containing a red channel
   *
   * @type {number}
   * @constant
   */
  RED: WebGLConstants_default.RED,
  /**
   * A pixel format containing red and green channels.
   *
   * @type {number}
   * @constant
   */
  RG: WebGLConstants_default.RG,
  /**
   * A pixel format containing red, green, and blue channels.
   *
   * @type {number}
   * @constant
   */
  RGB: WebGLConstants_default.RGB,
  /**
   * A pixel format containing red, green, blue, and alpha channels.
   *
   * @type {number}
   * @constant
   */
  RGBA: WebGLConstants_default.RGBA,
  /**
   * A pixel format containing a luminance (intensity) channel.
   *
   * @type {number}
   * @constant
   */
  LUMINANCE: WebGLConstants_default.LUMINANCE,
  /**
   * A pixel format containing luminance (intensity) and alpha channels.
   *
   * @type {number}
   * @constant
   */
  LUMINANCE_ALPHA: WebGLConstants_default.LUMINANCE_ALPHA,
  /**
   * A pixel format containing red, green, and blue channels that is DXT1 compressed.
   *
   * @type {number}
   * @constant
   */
  RGB_DXT1: WebGLConstants_default.COMPRESSED_RGB_S3TC_DXT1_EXT,
  /**
   * A pixel format containing red, green, blue, and alpha channels that is DXT1 compressed.
   *
   * @type {number}
   * @constant
   */
  RGBA_DXT1: WebGLConstants_default.COMPRESSED_RGBA_S3TC_DXT1_EXT,
  /**
   * A pixel format containing red, green, blue, and alpha channels that is DXT3 compressed.
   *
   * @type {number}
   * @constant
   */
  RGBA_DXT3: WebGLConstants_default.COMPRESSED_RGBA_S3TC_DXT3_EXT,
  /**
   * A pixel format containing red, green, blue, and alpha channels that is DXT5 compressed.
   *
   * @type {number}
   * @constant
   */
  RGBA_DXT5: WebGLConstants_default.COMPRESSED_RGBA_S3TC_DXT5_EXT,
  /**
   * A pixel format containing red, green, and blue channels that is PVR 4bpp compressed.
   *
   * @type {number}
   * @constant
   */
  RGB_PVRTC_4BPPV1: WebGLConstants_default.COMPRESSED_RGB_PVRTC_4BPPV1_IMG,
  /**
   * A pixel format containing red, green, and blue channels that is PVR 2bpp compressed.
   *
   * @type {number}
   * @constant
   */
  RGB_PVRTC_2BPPV1: WebGLConstants_default.COMPRESSED_RGB_PVRTC_2BPPV1_IMG,
  /**
   * A pixel format containing red, green, blue, and alpha channels that is PVR 4bpp compressed.
   *
   * @type {number}
   * @constant
   */
  RGBA_PVRTC_4BPPV1: WebGLConstants_default.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG,
  /**
   * A pixel format containing red, green, blue, and alpha channels that is PVR 2bpp compressed.
   *
   * @type {number}
   * @constant
   */
  RGBA_PVRTC_2BPPV1: WebGLConstants_default.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG,
  /**
   * A pixel format containing red, green, blue, and alpha channels that is ASTC compressed.
   *
   * @type {number}
   * @constant
   */
  RGBA_ASTC: WebGLConstants_default.COMPRESSED_RGBA_ASTC_4x4_WEBGL,
  /**
   * A pixel format containing red, green, and blue channels that is ETC1 compressed.
   *
   * @type {number}
   * @constant
   */
  RGB_ETC1: WebGLConstants_default.COMPRESSED_RGB_ETC1_WEBGL,
  /**
   * A pixel format containing red, green, and blue channels that is ETC2 compressed.
   *
   * @type {number}
   * @constant
   */
  RGB8_ETC2: WebGLConstants_default.COMPRESSED_RGB8_ETC2,
  /**
   * A pixel format containing red, green, blue, and alpha channels that is ETC2 compressed.
   *
   * @type {number}
   * @constant
   */
  RGBA8_ETC2_EAC: WebGLConstants_default.COMPRESSED_RGBA8_ETC2_EAC,
  /**
   * A pixel format containing red, green, blue, and alpha channels that is BC7 compressed.
   *
   * @type {number}
   * @constant
   */
  RGBA_BC7: WebGLConstants_default.COMPRESSED_RGBA_BPTC_UNORM
};
PixelFormat.componentsLength = function(pixelFormat) {
  switch (pixelFormat) {
    case PixelFormat.RGB:
      return 3;
    case PixelFormat.RGBA:
      return 4;
    case PixelFormat.LUMINANCE_ALPHA:
    case PixelFormat.RG:
      return 2;
    case PixelFormat.ALPHA:
    case PixelFormat.RED:
    case PixelFormat.LUMINANCE:
      return 1;
    default:
      return 1;
  }
};
PixelFormat.validate = function(pixelFormat) {
  return pixelFormat === PixelFormat.DEPTH_COMPONENT || pixelFormat === PixelFormat.DEPTH_STENCIL || pixelFormat === PixelFormat.ALPHA || pixelFormat === PixelFormat.RED || pixelFormat === PixelFormat.RG || pixelFormat === PixelFormat.RGB || pixelFormat === PixelFormat.RGBA || pixelFormat === PixelFormat.LUMINANCE || pixelFormat === PixelFormat.LUMINANCE_ALPHA || pixelFormat === PixelFormat.RGB_DXT1 || pixelFormat === PixelFormat.RGBA_DXT1 || pixelFormat === PixelFormat.RGBA_DXT3 || pixelFormat === PixelFormat.RGBA_DXT5 || pixelFormat === PixelFormat.RGB_PVRTC_4BPPV1 || pixelFormat === PixelFormat.RGB_PVRTC_2BPPV1 || pixelFormat === PixelFormat.RGBA_PVRTC_4BPPV1 || pixelFormat === PixelFormat.RGBA_PVRTC_2BPPV1 || pixelFormat === PixelFormat.RGBA_ASTC || pixelFormat === PixelFormat.RGB_ETC1 || pixelFormat === PixelFormat.RGB8_ETC2 || pixelFormat === PixelFormat.RGBA8_ETC2_EAC || pixelFormat === PixelFormat.RGBA_BC7;
};
PixelFormat.isColorFormat = function(pixelFormat) {
  return pixelFormat === PixelFormat.ALPHA || pixelFormat === PixelFormat.RGB || pixelFormat === PixelFormat.RGBA || pixelFormat === PixelFormat.LUMINANCE || pixelFormat === PixelFormat.LUMINANCE_ALPHA;
};
PixelFormat.isDepthFormat = function(pixelFormat) {
  return pixelFormat === PixelFormat.DEPTH_COMPONENT || pixelFormat === PixelFormat.DEPTH_STENCIL;
};
PixelFormat.isCompressedFormat = function(pixelFormat) {
  return pixelFormat === PixelFormat.RGB_DXT1 || pixelFormat === PixelFormat.RGBA_DXT1 || pixelFormat === PixelFormat.RGBA_DXT3 || pixelFormat === PixelFormat.RGBA_DXT5 || pixelFormat === PixelFormat.RGB_PVRTC_4BPPV1 || pixelFormat === PixelFormat.RGB_PVRTC_2BPPV1 || pixelFormat === PixelFormat.RGBA_PVRTC_4BPPV1 || pixelFormat === PixelFormat.RGBA_PVRTC_2BPPV1 || pixelFormat === PixelFormat.RGBA_ASTC || pixelFormat === PixelFormat.RGB_ETC1 || pixelFormat === PixelFormat.RGB8_ETC2 || pixelFormat === PixelFormat.RGBA8_ETC2_EAC || pixelFormat === PixelFormat.RGBA_BC7;
};
PixelFormat.isDXTFormat = function(pixelFormat) {
  return pixelFormat === PixelFormat.RGB_DXT1 || pixelFormat === PixelFormat.RGBA_DXT1 || pixelFormat === PixelFormat.RGBA_DXT3 || pixelFormat === PixelFormat.RGBA_DXT5;
};
PixelFormat.isPVRTCFormat = function(pixelFormat) {
  return pixelFormat === PixelFormat.RGB_PVRTC_4BPPV1 || pixelFormat === PixelFormat.RGB_PVRTC_2BPPV1 || pixelFormat === PixelFormat.RGBA_PVRTC_4BPPV1 || pixelFormat === PixelFormat.RGBA_PVRTC_2BPPV1;
};
PixelFormat.isASTCFormat = function(pixelFormat) {
  return pixelFormat === PixelFormat.RGBA_ASTC;
};
PixelFormat.isETC1Format = function(pixelFormat) {
  return pixelFormat === PixelFormat.RGB_ETC1;
};
PixelFormat.isETC2Format = function(pixelFormat) {
  return pixelFormat === PixelFormat.RGB8_ETC2 || pixelFormat === PixelFormat.RGBA8_ETC2_EAC;
};
PixelFormat.isBC7Format = function(pixelFormat) {
  return pixelFormat === PixelFormat.RGBA_BC7;
};
PixelFormat.compressedTextureSizeInBytes = function(pixelFormat, width, height) {
  switch (pixelFormat) {
    case PixelFormat.RGB_DXT1:
    case PixelFormat.RGBA_DXT1:
    case PixelFormat.RGB_ETC1:
    case PixelFormat.RGB8_ETC2:
      return Math.floor((width + 3) / 4) * Math.floor((height + 3) / 4) * 8;
    case PixelFormat.RGBA_DXT3:
    case PixelFormat.RGBA_DXT5:
    case PixelFormat.RGBA_ASTC:
    case PixelFormat.RGBA8_ETC2_EAC:
      return Math.floor((width + 3) / 4) * Math.floor((height + 3) / 4) * 16;
    case PixelFormat.RGB_PVRTC_4BPPV1:
    case PixelFormat.RGBA_PVRTC_4BPPV1:
      return Math.floor((Math.max(width, 8) * Math.max(height, 8) * 4 + 7) / 8);
    case PixelFormat.RGB_PVRTC_2BPPV1:
    case PixelFormat.RGBA_PVRTC_2BPPV1:
      return Math.floor(
        (Math.max(width, 16) * Math.max(height, 8) * 2 + 7) / 8
      );
    case PixelFormat.RGBA_BC7:
      return Math.ceil(width / 4) * Math.ceil(height / 4) * 16;
    default:
      return 0;
  }
};
PixelFormat.textureSizeInBytes = function(pixelFormat, pixelDatatype, width, height) {
  let componentsLength = PixelFormat.componentsLength(pixelFormat);
  if (PixelDatatype_default.isPacked(pixelDatatype)) {
    componentsLength = 1;
  }
  return componentsLength * PixelDatatype_default.sizeInBytes(pixelDatatype) * width * height;
};
PixelFormat.alignmentInBytes = function(pixelFormat, pixelDatatype, width) {
  const mod = PixelFormat.textureSizeInBytes(pixelFormat, pixelDatatype, width, 1) % 4;
  return mod === 0 ? 4 : mod === 2 ? 2 : 1;
};
PixelFormat.createTypedArray = function(pixelFormat, pixelDatatype, width, height) {
  let constructor;
  const sizeInBytes = PixelDatatype_default.sizeInBytes(pixelDatatype);
  if (sizeInBytes === Uint8Array.BYTES_PER_ELEMENT) {
    constructor = Uint8Array;
  } else if (sizeInBytes === Uint16Array.BYTES_PER_ELEMENT) {
    constructor = Uint16Array;
  } else if (sizeInBytes === Float32Array.BYTES_PER_ELEMENT && pixelDatatype === PixelDatatype_default.FLOAT) {
    constructor = Float32Array;
  } else {
    constructor = Uint32Array;
  }
  const size = PixelFormat.componentsLength(pixelFormat) * width * height;
  return new constructor(size);
};
PixelFormat.flipY = function(bufferView, pixelFormat, pixelDatatype, width, height) {
  if (height === 1) {
    return bufferView;
  }
  const flipped = PixelFormat.createTypedArray(
    pixelFormat,
    pixelDatatype,
    width,
    height
  );
  const numberOfComponents = PixelFormat.componentsLength(pixelFormat);
  const textureWidth = width * numberOfComponents;
  for (let i = 0; i < height; ++i) {
    const row = i * width * numberOfComponents;
    const flippedRow = (height - i - 1) * width * numberOfComponents;
    for (let j = 0; j < textureWidth; ++j) {
      flipped[flippedRow + j] = bufferView[row + j];
    }
  }
  return flipped;
};
PixelFormat.toInternalFormat = function(pixelFormat, pixelDatatype, context) {
  if (!context.webgl2) {
    return pixelFormat;
  }
  if (pixelFormat === PixelFormat.DEPTH_STENCIL) {
    return WebGLConstants_default.DEPTH24_STENCIL8;
  }
  if (pixelFormat === PixelFormat.DEPTH_COMPONENT) {
    if (pixelDatatype === PixelDatatype_default.UNSIGNED_SHORT) {
      return WebGLConstants_default.DEPTH_COMPONENT16;
    } else if (pixelDatatype === PixelDatatype_default.UNSIGNED_INT) {
      return WebGLConstants_default.DEPTH_COMPONENT24;
    }
  }
  if (pixelDatatype === PixelDatatype_default.FLOAT) {
    switch (pixelFormat) {
      case PixelFormat.RGBA:
        return WebGLConstants_default.RGBA32F;
      case PixelFormat.RGB:
        return WebGLConstants_default.RGB32F;
      case PixelFormat.RG:
        return WebGLConstants_default.RG32F;
      case PixelFormat.RED:
        return WebGLConstants_default.R32F;
    }
  }
  if (pixelDatatype === PixelDatatype_default.HALF_FLOAT) {
    switch (pixelFormat) {
      case PixelFormat.RGBA:
        return WebGLConstants_default.RGBA16F;
      case PixelFormat.RGB:
        return WebGLConstants_default.RGB16F;
      case PixelFormat.RG:
        return WebGLConstants_default.RG16F;
      case PixelFormat.RED:
        return WebGLConstants_default.R16F;
    }
  }
  return pixelFormat;
};
var PixelFormat_default = Object.freeze(PixelFormat);

export {
  PixelDatatype_default,
  PixelFormat_default
};
