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

import{a as w}from"./chunk-7ZYWTRIM.js";import{a as x}from"./chunk-NLDPBWRG.js";import{b as c}from"./chunk-UYU5J5LB.js";import"./chunk-U6UBX32K.js";import{a as h,b as l,c as p}from"./chunk-MOUG3NVV.js";import{a as i}from"./chunk-GP3QZQKE.js";import"./chunk-XE4KLUZ2.js";import"./chunk-A7WTS53E.js";import"./chunk-DYKDQ7Q5.js";import"./chunk-5QBDH7S2.js";import"./chunk-JZX4OQ6W.js";var u=32767,F=new l,L=new h,b=new c,y=new p,a={min:void 0,max:void 0};function V(t){t=new Float64Array(t);let o=0;a.min=t[o++],a.max=t[o++],c.unpack(t,o,b),o+=c.packedLength,p.unpack(t,o,y)}function z(t,o){let s=new Uint16Array(t.positions);V(t.packedBuffer);let e=b,C=y,A=a.min,P=a.max,n=s.length/3,f=s.subarray(0,n),g=s.subarray(n,2*n),d=s.subarray(2*n,3*n);x.zigZagDeltaDecode(f,g,d);let m=new Float64Array(s.length);for(let r=0;r<n;++r){let k=f[r],E=g[r],H=d[r],M=i.lerp(e.west,e.east,k/u),R=i.lerp(e.south,e.north,E/u),T=i.lerp(A,P,H/u),v=l.fromRadians(M,R,T,F),D=C.cartographicToCartesian(v,L);h.pack(D,m,r*3)}return o.push(m.buffer),{positions:m.buffer}}var G=w(z);export{G as default};
