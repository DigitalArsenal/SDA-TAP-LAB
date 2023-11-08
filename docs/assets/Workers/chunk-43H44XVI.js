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

import{q as O,r as G}from"./chunk-SN4TUFKS.js";import{a,b as R,d as h,e as L}from"./chunk-LNQJOB2G.js";import{a as A,b as N,d as y}from"./chunk-PTNIWY5H.js";import{a as c}from"./chunk-CG3JQAX7.js";import{a as u}from"./chunk-K36PKEJW.js";import{a as l,b as w}from"./chunk-YOLMPEQR.js";import{f as I}from"./chunk-DQETLSQS.js";var r={POINTS:c.POINTS,LINES:c.LINES,LINE_LOOP:c.LINE_LOOP,LINE_STRIP:c.LINE_STRIP,TRIANGLES:c.TRIANGLES,TRIANGLE_STRIP:c.TRIANGLE_STRIP,TRIANGLE_FAN:c.TRIANGLE_FAN};r.isLines=function(t){return t===r.LINES||t===r.LINE_LOOP||t===r.LINE_STRIP};r.isTriangles=function(t){return t===r.TRIANGLES||t===r.TRIANGLE_STRIP||t===r.TRIANGLE_FAN};r.validate=function(t){return t===r.POINTS||t===r.LINES||t===r.LINE_LOOP||t===r.LINE_STRIP||t===r.TRIANGLES||t===r.TRIANGLE_STRIP||t===r.TRIANGLE_FAN};var M=Object.freeze(r);var U={NONE:0,TRIANGLES:1,LINES:2,POLYLINES:3},F=Object.freeze(U);function _(t){t=u(t,u.EMPTY_OBJECT),w.typeOf.object("options.attributes",t.attributes),this.attributes=t.attributes,this.indices=t.indices,this.primitiveType=u(t.primitiveType,M.TRIANGLES),this.boundingSphere=t.boundingSphere,this.geometryType=u(t.geometryType,F.NONE),this.boundingSphereCV=t.boundingSphereCV,this.offsetAttribute=t.offsetAttribute}_.computeNumberOfVertices=function(t){w.typeOf.object("geometry",t);let m=-1;for(let s in t.attributes)if(t.attributes.hasOwnProperty(s)&&I(t.attributes[s])&&I(t.attributes[s].values)){let o=t.attributes[s],e=o.values.length/o.componentsPerAttribute;m=m!==e&&m!==-1?0:e}return m};var W=new N,H=new A,V=new h,Z=[new N,new N,new N],K=[new a,new a,new a],$=[new a,new a,new a],tt=new A,et=new O,rt=new h,nt=new L;_._textureCoordinateRotationPoints=function(t,m,s,o){let e,g=R.center(o,W),Y=N.toCartesian(g,s,H),D=G.eastNorthUpToFixedFrame(Y,s,V),C=h.inverse(D,V),T=K,f=Z;f[0].longitude=o.west,f[0].latitude=o.south,f[1].longitude=o.west,f[1].latitude=o.north,f[2].longitude=o.east,f[2].latitude=o.south;let n=tt;for(e=0;e<3;e++)N.toCartesian(f[e],s,n),n=h.multiplyByPointAsVector(C,n,n),T[e].x=n.x,T[e].y=n.y;let B=O.fromAxisAngle(A.UNIT_Z,-m,et),j=y.fromQuaternion(B,rt),k=t.length,P=Number.POSITIVE_INFINITY,b=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY,x=Number.NEGATIVE_INFINITY;for(e=0;e<k;e++)n=h.multiplyByPointAsVector(C,t[e],n),n=y.multiplyByVector(j,n,n),P=Math.min(P,n.x),b=Math.min(b,n.y),d=Math.max(d,n.x),x=Math.max(x,n.y);let z=L.fromRotation(m,nt),i=$;i[0].x=P,i[0].y=b,i[1].x=P,i[1].y=x,i[2].x=d,i[2].y=b;let p=T[0],X=T[2].x-p.x,q=T[1].y-p.y;for(e=0;e<3;e++){let E=i[e];L.multiplyByVector(z,E,E),E.x=(E.x-p.x)/X,E.y=(E.y-p.y)/q}let v=i[0],J=i[1],Q=i[2],S=new Array(6);return a.pack(v,S),a.pack(J,S,2),a.pack(Q,S,4),S};var At=_;function ot(t){if(t=u(t,u.EMPTY_OBJECT),!I(t.componentDatatype))throw new l("options.componentDatatype is required.");if(!I(t.componentsPerAttribute))throw new l("options.componentsPerAttribute is required.");if(t.componentsPerAttribute<1||t.componentsPerAttribute>4)throw new l("options.componentsPerAttribute must be between 1 and 4.");if(!I(t.values))throw new l("options.values is required.");this.componentDatatype=t.componentDatatype,this.componentsPerAttribute=t.componentsPerAttribute,this.normalize=u(t.normalize,!1),this.values=t.values}var yt=ot;export{M as a,F as b,At as c,yt as d};
