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

import{a as T}from"./chunk-D2IWBD4D.js";import{a as f}from"./chunk-E7W65CJJ.js";import"./chunk-A4KPICL2.js";import"./chunk-7ONJ545N.js";import"./chunk-OTJ7YDEG.js";import"./chunk-GDU4HM25.js";import"./chunk-W2TSDB2J.js";import"./chunk-KFYUK2H6.js";import"./chunk-PAQOHTWF.js";import{a as w}from"./chunk-YHQRH5PT.js";import"./chunk-HIJCHM4B.js";import{a as O}from"./chunk-OPUDDU5X.js";import{a as L}from"./chunk-V2HNFFAW.js";import"./chunk-NLDPBWRG.js";import"./chunk-SQ3JJTUG.js";import"./chunk-XJ7ZM6R5.js";import"./chunk-FGFSKYZG.js";import{a as b}from"./chunk-YYATFCJI.js";import{a as G}from"./chunk-GIF3NIGD.js";import{a as k,c as d,d as C}from"./chunk-63KGUMEY.js";import{g as P}from"./chunk-LSJMWGCF.js";import"./chunk-VUSOKIQI.js";import"./chunk-UYU5J5LB.js";import{a as H}from"./chunk-U6UBX32K.js";import{a as l,c as g}from"./chunk-MOUG3NVV.js";import"./chunk-GP3QZQKE.js";import"./chunk-XE4KLUZ2.js";import"./chunk-A7WTS53E.js";import{a as c}from"./chunk-DYKDQ7Q5.js";import{b as a}from"./chunk-5QBDH7S2.js";import{f as u}from"./chunk-JZX4OQ6W.js";function E(o){let e=o.length,t=new Float64Array(e*3),r=b.createTypedArray(e,e*2),i=0,s=0;for(let n=0;n<e;n++){let p=o[n];t[i++]=p.x,t[i++]=p.y,t[i++]=p.z,r[s++]=n,r[s++]=(n+1)%e}let y=new G({position:new C({componentDatatype:H.DOUBLE,componentsPerAttribute:3,values:t})});return new d({attributes:y,indices:r,primitiveType:k.LINES})}function m(o){o=c(o,c.EMPTY_OBJECT);let e=o.polygonHierarchy;a.defined("options.polygonHierarchy",e),this._polygonHierarchy=e,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=f.computeHierarchyPackedLength(e,l)+1}m.fromPositions=function(o){o=c(o,c.EMPTY_OBJECT),a.defined("options.positions",o.positions);let e={polygonHierarchy:{positions:o.positions}};return new m(e)};m.pack=function(o,e,t){return a.typeOf.object("value",o),a.defined("array",e),t=c(t,0),t=f.packPolygonHierarchy(o._polygonHierarchy,e,t,l),e[t]=o.packedLength,e};var v={polygonHierarchy:{}};m.unpack=function(o,e,t){a.defined("array",o),e=c(e,0);let r=f.unpackPolygonHierarchy(o,e,l);e=r.startingIndex,delete r.startingIndex;let i=o[e];return u(t)||(t=new m(v)),t._polygonHierarchy=r,t.packedLength=i,t};m.createGeometry=function(o){let e=o._polygonHierarchy,t=e.positions;if(t=w(t,l.equalsEpsilon,!0),t.length<3||!T.validOutline(t))return;let i=f.polygonOutlinesFromHierarchy(e,!1);if(i.length===0)return;let s=[];for(let p=0;p<i.length;p++){let _=new O({geometry:E(i[p])});s.push(_)}let y=L.combineInstances(s)[0],n=P.fromPoints(e.positions);return new d({attributes:y.attributes,indices:y.indices,primitiveType:y.primitiveType,boundingSphere:n})};var h=m;function A(o,e){return u(e)&&(o=h.unpack(o,e)),o._ellipsoid=g.clone(o._ellipsoid),h.createGeometry(o)}var Z=A;export{Z as default};
