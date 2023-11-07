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

import{a as T}from"./chunk-JF7GP5HD.js";import{a as f}from"./chunk-ISVDTWDS.js";import"./chunk-NHBE4TKV.js";import"./chunk-TLVCXA7M.js";import"./chunk-3RMM272C.js";import"./chunk-6FTJPHAD.js";import"./chunk-WWZGDXR5.js";import"./chunk-4P77FRM5.js";import"./chunk-TB7E5LLZ.js";import{a as w}from"./chunk-FE5EIIIR.js";import"./chunk-JQVYWZSJ.js";import{a as O}from"./chunk-FN4WG2CM.js";import{a as L}from"./chunk-ATDUTBLS.js";import"./chunk-G7FEP2WW.js";import"./chunk-P2NLU4C5.js";import"./chunk-SVTRHYGS.js";import"./chunk-IWSOF7XY.js";import{a as b}from"./chunk-BWY4CO7K.js";import{a as G}from"./chunk-3UAKIC5Y.js";import{a as k,c as d,d as C}from"./chunk-4VG7WKEU.js";import{f as P}from"./chunk-XEQPSA2F.js";import"./chunk-GBTWXPEH.js";import"./chunk-LNQJOB2G.js";import{a as H}from"./chunk-AUOFUFUP.js";import{a as l,c as g}from"./chunk-PTNIWY5H.js";import"./chunk-LAL3IUCV.js";import"./chunk-CG3JQAX7.js";import"./chunk-VSVNBI3J.js";import{a as c}from"./chunk-K36PKEJW.js";import{b as a}from"./chunk-YOLMPEQR.js";import{f as u}from"./chunk-DQETLSQS.js";function E(o){let e=o.length,t=new Float64Array(e*3),r=b.createTypedArray(e,e*2),i=0,s=0;for(let n=0;n<e;n++){let p=o[n];t[i++]=p.x,t[i++]=p.y,t[i++]=p.z,r[s++]=n,r[s++]=(n+1)%e}let y=new G({position:new C({componentDatatype:H.DOUBLE,componentsPerAttribute:3,values:t})});return new d({attributes:y,indices:r,primitiveType:k.LINES})}function m(o){o=c(o,c.EMPTY_OBJECT);let e=o.polygonHierarchy;a.defined("options.polygonHierarchy",e),this._polygonHierarchy=e,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=f.computeHierarchyPackedLength(e,l)+1}m.fromPositions=function(o){o=c(o,c.EMPTY_OBJECT),a.defined("options.positions",o.positions);let e={polygonHierarchy:{positions:o.positions}};return new m(e)};m.pack=function(o,e,t){return a.typeOf.object("value",o),a.defined("array",e),t=c(t,0),t=f.packPolygonHierarchy(o._polygonHierarchy,e,t,l),e[t]=o.packedLength,e};var v={polygonHierarchy:{}};m.unpack=function(o,e,t){a.defined("array",o),e=c(e,0);let r=f.unpackPolygonHierarchy(o,e,l);e=r.startingIndex,delete r.startingIndex;let i=o[e];return u(t)||(t=new m(v)),t._polygonHierarchy=r,t.packedLength=i,t};m.createGeometry=function(o){let e=o._polygonHierarchy,t=e.positions;if(t=w(t,l.equalsEpsilon,!0),t.length<3||!T.validOutline(t))return;let i=f.polygonOutlinesFromHierarchy(e,!1);if(i.length===0)return;let s=[];for(let p=0;p<i.length;p++){let _=new O({geometry:E(i[p])});s.push(_)}let y=L.combineInstances(s)[0],n=P.fromPoints(e.positions);return new d({attributes:y.attributes,indices:y.indices,primitiveType:y.primitiveType,boundingSphere:n})};var h=m;function A(o,e){return u(e)&&(o=h.unpack(o,e)),o._ellipsoid=g.clone(o._ellipsoid),h.createGeometry(o)}var Z=A;export{Z as default};
