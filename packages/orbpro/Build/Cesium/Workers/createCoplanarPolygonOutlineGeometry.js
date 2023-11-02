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

import{a as T}from"./chunk-TJCHFVJM.js";import{a as f}from"./chunk-IHHJ33B7.js";import"./chunk-LU3YSQJM.js";import"./chunk-YXVS7GSF.js";import"./chunk-MGJLY3JZ.js";import"./chunk-LEGXNNON.js";import"./chunk-5YSJOUNS.js";import"./chunk-7MNL6HNZ.js";import"./chunk-FWA5FYKY.js";import{a as w}from"./chunk-H36URT22.js";import"./chunk-QIFLGHYF.js";import{a as O}from"./chunk-AI6V5ALR.js";import{a as L}from"./chunk-VKQBMZK2.js";import"./chunk-P4N3C3X4.js";import"./chunk-CVZTMP7O.js";import"./chunk-AB7AUVXY.js";import"./chunk-C4KWLS76.js";import{a as b}from"./chunk-NVXOA5FM.js";import{a as G}from"./chunk-XYZU5ZKW.js";import{a as k,c as d,d as C}from"./chunk-LRRMYFM5.js";import{g as P}from"./chunk-QN4KH7NX.js";import"./chunk-M74QEFMU.js";import"./chunk-6GB2WA4N.js";import{a as H}from"./chunk-QF7RZIXE.js";import{a as l,c as g}from"./chunk-GTKX54AN.js";import"./chunk-Y6GPSIGT.js";import"./chunk-6Y3U6IMI.js";import"./chunk-SXM64WZW.js";import{a as c}from"./chunk-FOJGNIAW.js";import{b as a}from"./chunk-5GTG3HGQ.js";import{f as u}from"./chunk-ET2C4TQN.js";function E(o){let e=o.length,t=new Float64Array(e*3),r=b.createTypedArray(e,e*2),i=0,s=0;for(let n=0;n<e;n++){let p=o[n];t[i++]=p.x,t[i++]=p.y,t[i++]=p.z,r[s++]=n,r[s++]=(n+1)%e}let y=new G({position:new C({componentDatatype:H.DOUBLE,componentsPerAttribute:3,values:t})});return new d({attributes:y,indices:r,primitiveType:k.LINES})}function m(o){o=c(o,c.EMPTY_OBJECT);let e=o.polygonHierarchy;a.defined("options.polygonHierarchy",e),this._polygonHierarchy=e,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=f.computeHierarchyPackedLength(e,l)+1}m.fromPositions=function(o){o=c(o,c.EMPTY_OBJECT),a.defined("options.positions",o.positions);let e={polygonHierarchy:{positions:o.positions}};return new m(e)};m.pack=function(o,e,t){return a.typeOf.object("value",o),a.defined("array",e),t=c(t,0),t=f.packPolygonHierarchy(o._polygonHierarchy,e,t,l),e[t]=o.packedLength,e};var v={polygonHierarchy:{}};m.unpack=function(o,e,t){a.defined("array",o),e=c(e,0);let r=f.unpackPolygonHierarchy(o,e,l);e=r.startingIndex,delete r.startingIndex;let i=o[e];return u(t)||(t=new m(v)),t._polygonHierarchy=r,t.packedLength=i,t};m.createGeometry=function(o){let e=o._polygonHierarchy,t=e.positions;if(t=w(t,l.equalsEpsilon,!0),t.length<3||!T.validOutline(t))return;let i=f.polygonOutlinesFromHierarchy(e,!1);if(i.length===0)return;let s=[];for(let p=0;p<i.length;p++){let _=new O({geometry:E(i[p])});s.push(_)}let y=L.combineInstances(s)[0],n=P.fromPoints(e.positions);return new d({attributes:y.attributes,indices:y.indices,primitiveType:y.primitiveType,boundingSphere:n})};var h=m;function A(o,e){return u(e)&&(o=h.unpack(o,e)),o._ellipsoid=g.clone(o._ellipsoid),h.createGeometry(o)}var Z=A;export{Z as default};