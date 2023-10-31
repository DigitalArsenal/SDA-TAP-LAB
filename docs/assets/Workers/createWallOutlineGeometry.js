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

import{a as B}from"./chunk-5265QMB7.js";import"./chunk-K4JCNEY4.js";import"./chunk-XY6LOZ6C.js";import"./chunk-H36URT22.js";import"./chunk-QIFLGHYF.js";import"./chunk-AB7AUVXY.js";import"./chunk-C4KWLS76.js";import{a as q}from"./chunk-NVXOA5FM.js";import{a as N}from"./chunk-XYZU5ZKW.js";import{a as R,c as W,d as M}from"./chunk-LRRMYFM5.js";import{g as D}from"./chunk-QN4KH7NX.js";import"./chunk-M74QEFMU.js";import"./chunk-6GB2WA4N.js";import{a as S}from"./chunk-QF7RZIXE.js";import{a as p,c as l}from"./chunk-GTKX54AN.js";import{a as O}from"./chunk-Y6GPSIGT.js";import"./chunk-6Y3U6IMI.js";import"./chunk-SXM64WZW.js";import{a as d}from"./chunk-FOJGNIAW.js";import{a as _}from"./chunk-5GTG3HGQ.js";import{f as m}from"./chunk-ET2C4TQN.js";var G=new p,U=new p;function w(i){i=d(i,d.EMPTY_OBJECT);let t=i.positions,e=i.maximumHeights,o=i.minimumHeights;if(!m(t))throw new _("options.positions is required.");if(m(e)&&e.length!==t.length)throw new _("options.positions and options.maximumHeights must have the same length.");if(m(o)&&o.length!==t.length)throw new _("options.positions and options.minimumHeights must have the same length.");let s=d(i.granularity,O.RADIANS_PER_DEGREE),r=d(i.ellipsoid,l.WGS84);this._positions=t,this._minimumHeights=o,this._maximumHeights=e,this._granularity=s,this._ellipsoid=l.clone(r),this._workerName="createWallOutlineGeometry";let n=1+t.length*p.packedLength+2;m(o)&&(n+=o.length),m(e)&&(n+=e.length),this.packedLength=n+l.packedLength+1}w.pack=function(i,t,e){if(!m(i))throw new _("value is required");if(!m(t))throw new _("array is required");e=d(e,0);let o,s=i._positions,r=s.length;for(t[e++]=r,o=0;o<r;++o,e+=p.packedLength)p.pack(s[o],t,e);let n=i._minimumHeights;if(r=m(n)?n.length:0,t[e++]=r,m(n))for(o=0;o<r;++o)t[e++]=n[o];let c=i._maximumHeights;if(r=m(c)?c.length:0,t[e++]=r,m(c))for(o=0;o<r;++o)t[e++]=c[o];return l.pack(i._ellipsoid,t,e),e+=l.packedLength,t[e]=i._granularity,t};var z=l.clone(l.UNIT_SPHERE),b={positions:void 0,minimumHeights:void 0,maximumHeights:void 0,ellipsoid:z,granularity:void 0};w.unpack=function(i,t,e){if(!m(i))throw new _("array is required");t=d(t,0);let o,s=i[t++],r=new Array(s);for(o=0;o<s;++o,t+=p.packedLength)r[o]=p.unpack(i,t);s=i[t++];let n;if(s>0)for(n=new Array(s),o=0;o<s;++o)n[o]=i[t++];s=i[t++];let c;if(s>0)for(c=new Array(s),o=0;o<s;++o)c[o]=i[t++];let E=l.unpack(i,t,z);t+=l.packedLength;let u=i[t];return m(e)?(e._positions=r,e._minimumHeights=n,e._maximumHeights=c,e._ellipsoid=l.clone(E,e._ellipsoid),e._granularity=u,e):(b.positions=r,b.minimumHeights=n,b.maximumHeights=c,b.granularity=u,new w(b))};w.fromConstantHeights=function(i){i=d(i,d.EMPTY_OBJECT);let t=i.positions;if(!m(t))throw new _("options.positions is required.");let e,o,s=i.minimumHeight,r=i.maximumHeight,n=m(s),c=m(r);if(n||c){let u=t.length;e=n?new Array(u):void 0,o=c?new Array(u):void 0;for(let g=0;g<u;++g)n&&(e[g]=s),c&&(o[g]=r)}let E={positions:t,maximumHeights:o,minimumHeights:e,ellipsoid:i.ellipsoid};return new w(E)};w.createGeometry=function(i){let t=i._positions,e=i._minimumHeights,o=i._maximumHeights,s=i._granularity,r=i._ellipsoid,n=B.computePositions(r,t,o,e,s,!1);if(!m(n))return;let c=n.bottomPositions,E=n.topPositions,u=E.length,g=u*2,f=new Float64Array(g),P=0;u/=3;let h;for(h=0;h<u;++h){let A=h*3,k=p.fromArray(E,A,G),L=p.fromArray(c,A,U);f[P++]=L.x,f[P++]=L.y,f[P++]=L.z,f[P++]=k.x,f[P++]=k.y,f[P++]=k.z}let V=new N({position:new M({componentDatatype:S.DOUBLE,componentsPerAttribute:3,values:f})}),y=g/3;g=2*y-4+y;let a=q.createTypedArray(y,g),H=0;for(h=0;h<y-2;h+=2){let A=h,k=h+2,L=p.fromArray(f,A*3,G),v=p.fromArray(f,k*3,U);if(p.equalsEpsilon(L,v,O.EPSILON10))continue;let T=h+1,x=h+3;a[H++]=T,a[H++]=A,a[H++]=T,a[H++]=x,a[H++]=A,a[H++]=k}return a[H++]=y-2,a[H++]=y-1,new W({attributes:V,indices:a,primitiveType:R.LINES,boundingSphere:new D.fromVertices(f)})};var C=w;function J(i,t){return m(t)&&(i=C.unpack(i,t)),i._ellipsoid=l.clone(i._ellipsoid),C.createGeometry(i)}var pi=J;export{pi as default};
