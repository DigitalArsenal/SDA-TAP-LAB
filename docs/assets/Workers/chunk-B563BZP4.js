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

import{a as qe,c as We}from"./chunk-MPXILBSR.js";import{a as j}from"./chunk-T5762ACH.js";import{a as Ge}from"./chunk-7ONJ545N.js";import{a as ke}from"./chunk-KFYUK2H6.js";import{g as Ve,r as De}from"./chunk-LSJMWGCF.js";import{a as Le,b as _,d as z}from"./chunk-UYU5J5LB.js";import{a as T,c as Ye}from"./chunk-MOUG3NVV.js";import{a as P}from"./chunk-GP3QZQKE.js";import{a as o}from"./chunk-DYKDQ7Q5.js";import{a as B}from"./chunk-5QBDH7S2.js";import{f as l}from"./chunk-JZX4OQ6W.js";var gt={NONE:0,LERC:1},pt=Object.freeze(gt);var m={};m.DEFAULT_STRUCTURE=Object.freeze({heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1});var Te=new T,ht=new z,dt=new T,ut=new T;m.computeVertices=function(e){if(!l(e)||!l(e.heightmap))throw new B("options.heightmap is required.");if(!l(e.width)||!l(e.height))throw new B("options.width and options.height are required.");if(!l(e.nativeRectangle))throw new B("options.nativeRectangle is required.");if(!l(e.skirtHeight))throw new B("options.skirtHeight is required.");let Ee=Math.cos,pe=Math.sin,ze=Math.sqrt,X=Math.atan,Z=Math.exp,J=P.PI_OVER_TWO,w=P.toRadians,K=e.heightmap,s=e.width,a=e.height,M=e.skirtHeight,je=M>0,L=o(e.isGeographic,!0),x=o(e.ellipsoid,Ye.WGS84),f=1/x.maximumRadius,r=_.clone(e.nativeRectangle),E=_.clone(e.rectangle),A,I,Y,O;l(E)?(A=E.west,I=E.south,Y=E.east,O=E.north):L?(A=w(r.west),I=w(r.south),Y=w(r.east),O=w(r.north)):(A=r.west*f,I=J-2*X(Z(-r.south*f)),Y=r.east*f,O=J-2*X(Z(-r.north*f)));let p=e.relativeToCenter,Se=l(p);p=Se?p:T.ZERO;let v=o(e.includeWebMercatorT,!1),we=o(e.exaggeration,1),Xe=o(e.exaggerationRelativeHeight,0),Q=we!==1,N=o(e.structure,m.DEFAULT_STRUCTURE),Ze=o(N.heightScale,m.DEFAULT_STRUCTURE.heightScale),Je=o(N.heightOffset,m.DEFAULT_STRUCTURE.heightOffset),$=o(N.elementsPerHeight,m.DEFAULT_STRUCTURE.elementsPerHeight),xe=o(N.stride,m.DEFAULT_STRUCTURE.stride),Ie=o(N.elementMultiplier,m.DEFAULT_STRUCTURE.elementMultiplier),Ke=o(N.isBigEndian,m.DEFAULT_STRUCTURE.isBigEndian),V=_.computeWidth(r),q=_.computeHeight(r),Qe=V/(s-1),$e=q/(a-1);L||(V*=f,q*=f);let ee=x.radiiSquared,et=ee.x,tt=ee.y,it=ee.z,H=65536,b=-65536,Ne=De.eastNorthUpToFixedFrame(p,x),ot=z.inverseTransformation(Ne,ht),te,Re;v&&(te=j.geodeticLatitudeToMercatorAngle(I),Re=1/(j.geodeticLatitudeToMercatorAngle(O)-te));let R=dt;R.x=Number.POSITIVE_INFINITY,R.y=Number.POSITIVE_INFINITY,R.z=Number.POSITIVE_INFINITY;let U=ut;U.x=Number.NEGATIVE_INFINITY,U.y=Number.NEGATIVE_INFINITY,U.z=Number.NEGATIVE_INFINITY;let ie=Number.POSITIVE_INFINITY,F=s*a,rt=M>0?s*2+a*2:0,S=F+rt,D=new Array(S),Ue=new Array(S),Ce=new Array(S),Me=v?new Array(S):[],Ae=Q?new Array(S):[],oe=0,re=a,ne=0,se=s;je&&(--oe,++re,--ne,++se);let k=1e-5;for(let i=oe;i<re;++i){let g=i;g<0&&(g=0),g>=a&&(g=a-1);let c=r.north-$e*g;L?c=w(c):c=J-2*X(Z(-c*f));let ce=(c-I)/(O-I);ce=P.clamp(ce,0,1);let G=i===oe,W=i===re-1;M>0&&(G?c+=k*q:W&&(c-=k*q));let Fe=Ee(c),le=pe(c),ye=it*le,Be;v&&(Be=(j.geodeticLatitudeToMercatorAngle(c)-te)*Re);for(let y=ne;y<se;++y){let h=y;h<0&&(h=0),h>=s&&(h=s-1);let me=g*(s*xe)+h*xe,t;if($===1)t=K[me];else{t=0;let n;if(Ke)for(n=0;n<$;++n)t=t*Ie+K[me+n];else for(n=$-1;n>=0;--n)t=t*Ie+K[me+n]}t=t*Ze+Je,b=Math.max(b,t),H=Math.min(H,t);let d=r.west+Qe*h;L?d=w(d):d=d*f;let ge=(d-A)/(Y-A);ge=P.clamp(ge,0,1);let u=g*s+h;if(M>0){let n=y===ne,fe=y===se-1,mt=G||W||n||fe;if((G||W)&&(n||fe))continue;mt&&(t-=M,n?(u=F+(a-g-1),d-=k*V):W?u=F+a+(s-h-1):fe?(u=F+a+s+g,d+=k*V):G&&(u=F+a+s+a+h))}let he=Fe*Ee(d),de=Fe*pe(d),Pe=et*he,_e=tt*de,ue=1/ze(Pe*he+_e*de+ye*le),at=Pe*ue,ct=_e*ue,lt=ye*ue,C=new T;C.x=at+he*t,C.y=ct+de*t,C.z=lt+le*t,z.multiplyByPoint(ot,C,Te),T.minimumByComponent(Te,R,R),T.maximumByComponent(Te,U,U),ie=Math.min(ie,t),D[u]=C,Ce[u]=new Le(ge,ce),Ue[u]=t,v&&(Me[u]=Be),Q&&(Ae[u]=x.geodeticSurfaceNormal(C))}}let nt=Ve.fromPoints(D),Oe;l(E)&&(Oe=Ge.fromRectangle(E,H,b,x));let ve;Se&&(ve=new qe(x).computeHorizonCullingPointPossiblyUnderEllipsoid(p,D,H));let st=new ke(R,U,p),ae=new We(p,st,ie,b,Ne,!1,v,Q,we,Xe),He=new Float32Array(S*ae.stride),be=0;for(let i=0;i<S;++i)be=ae.encode(He,be,D[i],Ce[i],Ue[i],void 0,Me[i],Ae[i]);return{vertices:He,maximumHeight:b,minimumHeight:H,encoding:ae,boundingSphere3D:nt,orientedBoundingBox:Oe,occludeePointInScaledSpace:ve}};var Pt=m;export{pt as a,Pt as b};
