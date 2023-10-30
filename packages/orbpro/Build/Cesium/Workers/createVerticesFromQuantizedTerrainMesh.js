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

import{a as At}from"./chunk-RRXXK2XB.js";import{a as Mt,c as pt}from"./chunk-MPXILBSR.js";import{a as z}from"./chunk-T5762ACH.js";import{a as xt}from"./chunk-7ZYWTRIM.js";import{a as Ot}from"./chunk-KFYUK2H6.js";import"./chunk-NLDPBWRG.js";import{a as bt}from"./chunk-YYATFCJI.js";import{r as Et}from"./chunk-LSJMWGCF.js";import"./chunk-VUSOKIQI.js";import{a as rt,b as yt,d as Y}from"./chunk-UYU5J5LB.js";import"./chunk-U6UBX32K.js";import{a as O,b as St,c as wt}from"./chunk-MOUG3NVV.js";import{a as T}from"./chunk-GP3QZQKE.js";import"./chunk-XE4KLUZ2.js";import"./chunk-A7WTS53E.js";import"./chunk-DYKDQ7Q5.js";import"./chunk-5QBDH7S2.js";import{f as D}from"./chunk-JZX4OQ6W.js";var ut=32767,G=new O,Gt=new O,Ut=new O,n=new St,F=new rt;function qt(t,M){let c=t.quantizedVertices,o=c.length/3,u=t.octEncodedNormals,p=t.westIndices.length+t.eastIndices.length+t.southIndices.length+t.northIndices.length,l=t.includeWebMercatorT,E=t.exaggeration,N=t.exaggerationRelativeHeight,A=E!==1,r=yt.clone(t.rectangle),H=r.west,P=r.south,_=r.east,b=r.north,s=wt.clone(t.ellipsoid),a=t.minimumHeight,x=t.maximumHeight,h=t.relativeToCenter,B=Et.eastNorthUpToFixedFrame(h,s),S=Y.inverseTransformation(B,new Y),w,f;l&&(w=z.geodeticLatitudeToMercatorAngle(P),f=1/(z.geodeticLatitudeToMercatorAngle(b)-w));let U=c.subarray(0,o),q=c.subarray(o,2*o),R=c.subarray(o*2,3*o),W=D(u),i=new Array(o),g=new Array(o),X=new Array(o),ht=l?new Array(o):[],dt=A?new Array(o):[],I=Gt;I.x=Number.POSITIVE_INFINITY,I.y=Number.POSITIVE_INFINITY,I.z=Number.POSITIVE_INFINITY;let m=Ut;m.x=Number.NEGATIVE_INFINITY,m.y=Number.NEGATIVE_INFINITY,m.z=Number.NEGATIVE_INFINITY;let Z=Number.POSITIVE_INFINITY,$=Number.NEGATIVE_INFINITY,tt=Number.POSITIVE_INFINITY,et=Number.NEGATIVE_INFINITY;for(let e=0;e<o;++e){let d=U[e],zt=q[e],mt=d/ut,Tt=zt/ut,Nt=T.lerp(a,x,R[e]/ut);n.longitude=T.lerp(H,_,mt),n.latitude=T.lerp(P,b,Tt),n.height=Nt,Z=Math.min(n.longitude,Z),$=Math.max(n.longitude,$),tt=Math.min(n.latitude,tt),et=Math.max(n.latitude,et);let st=s.cartographicToCartesian(n);i[e]=new rt(mt,Tt),g[e]=Nt,X[e]=st,l&&(ht[e]=(z.geodeticLatitudeToMercatorAngle(n.latitude)-w)*f),A&&(dt[e]=s.geodeticSurfaceNormal(st)),Y.multiplyByPoint(S,st,G),O.minimumByComponent(G,I,I),O.maximumByComponent(G,m,m)}let ot=K(t.westIndices,function(e,d){return i[e].y-i[d].y}),nt=K(t.eastIndices,function(e,d){return i[d].y-i[e].y}),it=K(t.southIndices,function(e,d){return i[d].x-i[e].x}),ct=K(t.northIndices,function(e,d){return i[e].x-i[d].x}),at;a<0&&(at=new Mt(s).computeHorizonCullingPointPossiblyUnderEllipsoid(h,X,a));let y=a;y=Math.min(y,Q(t.westIndices,t.westSkirtHeight,g,i,r,s,S,I,m)),y=Math.min(y,Q(t.southIndices,t.southSkirtHeight,g,i,r,s,S,I,m)),y=Math.min(y,Q(t.eastIndices,t.eastSkirtHeight,g,i,r,s,S,I,m)),y=Math.min(y,Q(t.northIndices,t.northSkirtHeight,g,i,r,s,S,I,m));let Ht=new Ot(I,m,h),V=new pt(h,Ht,y,x,B,W,l,A,E,N),C=V.stride,Pt=o*C+p*C,L=new Float32Array(Pt),lt=0;for(let e=0;e<o;++e){if(W){let d=e*2;F.x=u[d],F.y=u[d+1]}lt=V.encode(L,lt,X[e],i[e],g[e],F,ht[e],dt[e])}let Vt=Math.max(0,(p-4)*2),Ct=t.indices.length+Vt*3,j=bt.createTypedArray(o+p,Ct);j.set(t.indices,0);let ft=1e-4,gt=($-Z)*ft,It=(et-tt)*ft,Lt=-gt,kt=0,vt=gt,Bt=0,Ft=0,_t=It,Wt=0,Yt=-It,k=o*C;return J(L,k,ot,V,g,i,u,s,r,t.westSkirtHeight,w,f,Lt,kt),k+=t.westIndices.length*C,J(L,k,it,V,g,i,u,s,r,t.southSkirtHeight,w,f,Wt,Yt),k+=t.southIndices.length*C,J(L,k,nt,V,g,i,u,s,r,t.eastSkirtHeight,w,f,vt,Bt),k+=t.eastIndices.length*C,J(L,k,ct,V,g,i,u,s,r,t.northSkirtHeight,w,f,Ft,_t),At.addSkirtIndices(ot,it,nt,ct,o,j,t.indices.length),M.push(L.buffer,j.buffer),{vertices:L.buffer,indices:j.buffer,westIndicesSouthToNorth:ot,southIndicesEastToWest:it,eastIndicesNorthToSouth:nt,northIndicesWestToEast:ct,vertexStride:C,center:h,minimumHeight:a,maximumHeight:x,occludeePointInScaledSpace:at,encoding:V,indexCountWithoutSkirts:t.indices.length}}function Q(t,M,c,o,u,p,l,E,N){let v=Number.POSITIVE_INFINITY,A=u.north,r=u.south,H=u.east,P=u.west;H<P&&(H+=T.TWO_PI);let _=t.length;for(let b=0;b<_;++b){let s=t[b],a=c[s],x=o[s];n.longitude=T.lerp(P,H,x.x),n.latitude=T.lerp(r,A,x.y),n.height=a-M;let h=p.cartographicToCartesian(n,G);Y.multiplyByPoint(l,h,h),O.minimumByComponent(h,E,E),O.maximumByComponent(h,N,N),v=Math.min(v,n.height)}return v}function J(t,M,c,o,u,p,l,E,N,v,A,r,H,P){let _=D(l),b=N.north,s=N.south,a=N.east,x=N.west;a<x&&(a+=T.TWO_PI);let h=c.length;for(let B=0;B<h;++B){let S=c[B],w=u[S],f=p[S];n.longitude=T.lerp(x,a,f.x)+H,n.latitude=T.lerp(s,b,f.y)+P,n.height=w-v;let U=E.cartographicToCartesian(n,G);if(_){let W=S*2;F.x=l[W],F.y=l[W+1]}let q;o.hasWebMercatorT&&(q=(z.geodeticLatitudeToMercatorAngle(n.latitude)-A)*r);let R;o.hasGeodeticSurfaceNormals&&(R=E.geodeticSurfaceNormal(U)),M=o.encode(t,M,U,f,n.height,F,q,R)}}function K(t,M){let c;return typeof t.slice=="function"&&(c=t.slice(),typeof c.sort!="function"&&(c=void 0)),D(c)||(c=Array.prototype.slice.call(t)),c.sort(M),c}var re=xt(qt);export{re as default};
