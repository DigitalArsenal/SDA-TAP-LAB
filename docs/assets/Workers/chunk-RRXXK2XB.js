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

import{a as A}from"./chunk-YYATFCJI.js";import{a as E}from"./chunk-GP3QZQKE.js";import{a as c}from"./chunk-5QBDH7S2.js";import{f as l}from"./chunk-JZX4OQ6W.js";function d(){c.throwInstantiationError()}Object.defineProperties(d.prototype,{errorEvent:{get:c.throwInstantiationError},credit:{get:c.throwInstantiationError},tilingScheme:{get:c.throwInstantiationError},hasWaterMask:{get:c.throwInstantiationError},hasVertexNormals:{get:c.throwInstantiationError},availability:{get:c.throwInstantiationError}});var W=[];d.getRegularGridIndices=function(t,e){if(t*e>=E.FOUR_GIGABYTES)throw new c("The total number of vertices (width * height) must be less than 4,294,967,296.");let r=W[t];l(r)||(W[t]=r=[]);let n=r[e];return l(n)||(t*e<E.SIXTY_FOUR_KILOBYTES?n=r[e]=new Uint16Array((t-1)*(e-1)*6):n=r[e]=new Uint32Array((t-1)*(e-1)*6),w(t,e,n,0)),n};var G=[];d.getRegularGridIndicesAndEdgeIndices=function(t,e){if(t*e>=E.FOUR_GIGABYTES)throw new c("The total number of vertices (width * height) must be less than 4,294,967,296.");let r=G[t];l(r)||(G[t]=r=[]);let n=r[e];if(!l(n)){let i=d.getRegularGridIndices(t,e),s=b(t,e),o=s.westIndicesSouthToNorth,a=s.southIndicesEastToWest,u=s.eastIndicesNorthToSouth,T=s.northIndicesWestToEast;n=r[e]={indices:i,westIndicesSouthToNorth:o,southIndicesEastToWest:a,eastIndicesNorthToSouth:u,northIndicesWestToEast:T}}return n};var N=[];d.getRegularGridAndSkirtIndicesAndEdgeIndices=function(t,e){if(t*e>=E.FOUR_GIGABYTES)throw new c("The total number of vertices (width * height) must be less than 4,294,967,296.");let r=N[t];l(r)||(N[t]=r=[]);let n=r[e];if(!l(n)){let i=t*e,s=(t-1)*(e-1)*6,o=t*2+e*2,a=Math.max(0,o-4)*6,u=i+o,T=s+a,I=b(t,e),p=I.westIndicesSouthToNorth,S=I.southIndicesEastToWest,g=I.eastIndicesNorthToSouth,y=I.northIndicesWestToEast,m=A.createTypedArray(u,T);w(t,e,m,0),d.addSkirtIndices(p,S,g,y,i,m,s),n=r[e]={indices:m,westIndicesSouthToNorth:p,southIndicesEastToWest:S,eastIndicesNorthToSouth:g,northIndicesWestToEast:y,indexCountWithoutSkirts:s}}return n};d.addSkirtIndices=function(t,e,r,n,i,s,o){let a=i;o=h(t,a,s,o),a+=t.length,o=h(e,a,s,o),a+=e.length,o=h(r,a,s,o),a+=r.length,h(n,a,s,o)};function b(t,e){let r=new Array(e),n=new Array(t),i=new Array(e),s=new Array(t),o;for(o=0;o<t;++o)s[o]=o,n[o]=t*e-1-o;for(o=0;o<e;++o)i[o]=(o+1)*t-1,r[o]=(e-o-1)*t;return{westIndicesSouthToNorth:r,southIndicesEastToWest:n,eastIndicesNorthToSouth:i,northIndicesWestToEast:s}}function w(t,e,r,n){let i=0;for(let s=0;s<e-1;++s){for(let o=0;o<t-1;++o){let a=i,u=a+t,T=u+1,I=a+1;r[n++]=a,r[n++]=u,r[n++]=I,r[n++]=I,r[n++]=u,r[n++]=T,++i}++i}}function h(t,e,r,n){let i=t[0],s=t.length;for(let o=1;o<s;++o){let a=t[o];r[n++]=i,r[n++]=a,r[n++]=e,r[n++]=e,r[n++]=a,r[n++]=e+1,i=a,++e}return n}d.heightmapTerrainQuality=.25;d.getEstimatedLevelZeroGeometricErrorForAHeightmap=function(t,e,r){return t.maximumRadius*2*Math.PI*d.heightmapTerrainQuality/(e*r)};d.prototype.requestTileGeometry=c.throwInstantiationError;d.prototype.getLevelMaximumGeometricError=c.throwInstantiationError;d.prototype.getTileDataAvailable=c.throwInstantiationError;d.prototype.loadTileDataAvailability=c.throwInstantiationError;var k=d;export{k as a};
