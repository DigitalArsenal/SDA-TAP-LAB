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

import{a as M}from"./chunk-FGFSKYZG.js";import{e as q}from"./chunk-LSJMWGCF.js";import{c as C,d as N}from"./chunk-UYU5J5LB.js";import{a as n}from"./chunk-MOUG3NVV.js";import{a as y}from"./chunk-GP3QZQKE.js";import{a as l}from"./chunk-DYKDQ7Q5.js";import{a as f,b as T}from"./chunk-5QBDH7S2.js";import{f as a}from"./chunk-JZX4OQ6W.js";function _(t){this.planes=l(t,[])}var z=[new n,new n,new n];n.clone(n.UNIT_X,z[0]);n.clone(n.UNIT_Y,z[1]);n.clone(n.UNIT_Z,z[2]);var R=new n,V=new n,D=new M(new n(1,0,0),0);_.fromBoundingSphere=function(t,e){if(!a(t))throw new f("boundingSphere is required.");a(e)||(e=new _);let i=z.length,r=e.planes;r.length=2*i;let h=t.center,g=t.radius,w=0;for(let m=0;m<i;++m){let s=z[m],S=r[w],p=r[w+1];a(S)||(S=r[w]=new C),a(p)||(p=r[w+1]=new C),n.multiplyByScalar(s,-g,R),n.add(h,R,R),S.x=s.x,S.y=s.y,S.z=s.z,S.w=-n.dot(s,R),n.multiplyByScalar(s,g,R),n.add(h,R,R),p.x=-s.x,p.y=-s.y,p.z=-s.z,p.w=-n.dot(n.negate(s,V),R),w+=2}return e};_.prototype.computeVisibility=function(t){if(!a(t))throw new f("boundingVolume is required.");let e=this.planes,i=!1;for(let r=0,h=e.length;r<h;++r){let g=t.intersectPlane(M.fromCartesian4(e[r],D));if(g===q.OUTSIDE)return q.OUTSIDE;g===q.INTERSECTING&&(i=!0)}return i?q.INTERSECTING:q.INSIDE};_.prototype.computeVisibilityWithPlaneMask=function(t,e){if(!a(t))throw new f("boundingVolume is required.");if(!a(e))throw new f("parentPlaneMask is required.");if(e===_.MASK_OUTSIDE||e===_.MASK_INSIDE)return e;let i=_.MASK_INSIDE,r=this.planes;for(let h=0,g=r.length;h<g;++h){let w=h<31?1<<h:0;if(h<31&&!(e&w))continue;let m=t.intersectPlane(M.fromCartesian4(r[h],D));if(m===q.OUTSIDE)return _.MASK_OUTSIDE;m===q.INTERSECTING&&(i|=w)}return i};_.MASK_OUTSIDE=4294967295;_.MASK_INSIDE=0;_.MASK_INDETERMINATE=2147483647;var I=_;function b(t){t=l(t,l.EMPTY_OBJECT),this.left=t.left,this._left=void 0,this.right=t.right,this._right=void 0,this.top=t.top,this._top=void 0,this.bottom=t.bottom,this._bottom=void 0,this.near=l(t.near,1),this._near=this.near,this.far=l(t.far,5e8),this._far=this.far,this._cullingVolume=new I,this._orthographicMatrix=new N}function F(t){if(!a(t.right)||!a(t.left)||!a(t.top)||!a(t.bottom)||!a(t.near)||!a(t.far))throw new f("right, left, top, bottom, near, or far parameters are not set.");if(t.top!==t._top||t.bottom!==t._bottom||t.left!==t._left||t.right!==t._right||t.near!==t._near||t.far!==t._far){if(t.left>t.right)throw new f("right must be greater than left.");if(t.bottom>t.top)throw new f("top must be greater than bottom.");if(t.near<=0||t.near>t.far)throw new f("near must be greater than zero and less than far.");t._left=t.left,t._right=t.right,t._top=t.top,t._bottom=t.bottom,t._near=t.near,t._far=t.far,t._orthographicMatrix=N.computeOrthographicOffCenter(t.left,t.right,t.bottom,t.top,t.near,t.far,t._orthographicMatrix)}}Object.defineProperties(b.prototype,{projectionMatrix:{get:function(){return F(this),this._orthographicMatrix}}});var B=new n,A=new n,U=new n,O=new n;b.prototype.computeCullingVolume=function(t,e,i){if(!a(t))throw new f("position is required.");if(!a(e))throw new f("direction is required.");if(!a(i))throw new f("up is required.");let r=this._cullingVolume.planes,h=this.top,g=this.bottom,w=this.right,m=this.left,s=this.near,S=this.far,p=n.cross(e,i,B);n.normalize(p,p);let x=A;n.multiplyByScalar(e,s,x),n.add(t,x,x);let c=U;n.multiplyByScalar(p,m,c),n.add(x,c,c);let o=r[0];return a(o)||(o=r[0]=new C),o.x=p.x,o.y=p.y,o.z=p.z,o.w=-n.dot(p,c),n.multiplyByScalar(p,w,c),n.add(x,c,c),o=r[1],a(o)||(o=r[1]=new C),o.x=-p.x,o.y=-p.y,o.z=-p.z,o.w=-n.dot(n.negate(p,O),c),n.multiplyByScalar(i,g,c),n.add(x,c,c),o=r[2],a(o)||(o=r[2]=new C),o.x=i.x,o.y=i.y,o.z=i.z,o.w=-n.dot(i,c),n.multiplyByScalar(i,h,c),n.add(x,c,c),o=r[3],a(o)||(o=r[3]=new C),o.x=-i.x,o.y=-i.y,o.z=-i.z,o.w=-n.dot(n.negate(i,O),c),o=r[4],a(o)||(o=r[4]=new C),o.x=e.x,o.y=e.y,o.z=e.z,o.w=-n.dot(e,x),n.multiplyByScalar(e,S,c),n.add(t,c,c),o=r[5],a(o)||(o=r[5]=new C),o.x=-e.x,o.y=-e.y,o.z=-e.z,o.w=-n.dot(n.negate(e,O),c),this._cullingVolume};b.prototype.getPixelDimensions=function(t,e,i,r,h){if(F(this),!a(t)||!a(e))throw new f("Both drawingBufferWidth and drawingBufferHeight are required.");if(t<=0)throw new f("drawingBufferWidth must be greater than zero.");if(e<=0)throw new f("drawingBufferHeight must be greater than zero.");if(!a(i))throw new f("distance is required.");if(!a(r))throw new f("pixelRatio is required.");if(r<=0)throw new f("pixelRatio must be greater than zero.");if(!a(h))throw new f("A result object is required.");let g=this.right-this.left,w=this.top-this.bottom,m=r*g/t,s=r*w/e;return h.x=m,h.y=s,h};b.prototype.clone=function(t){return a(t)||(t=new b),t.left=this.left,t.right=this.right,t.top=this.top,t.bottom=this.bottom,t.near=this.near,t.far=this.far,t._left=void 0,t._right=void 0,t._top=void 0,t._bottom=void 0,t._near=void 0,t._far=void 0,t};b.prototype.equals=function(t){return a(t)&&t instanceof b&&this.right===t.right&&this.left===t.left&&this.top===t.top&&this.bottom===t.bottom&&this.near===t.near&&this.far===t.far};b.prototype.equalsEpsilon=function(t,e,i){return t===this||a(t)&&t instanceof b&&y.equalsEpsilon(this.right,t.right,e,i)&&y.equalsEpsilon(this.left,t.left,e,i)&&y.equalsEpsilon(this.top,t.top,e,i)&&y.equalsEpsilon(this.bottom,t.bottom,e,i)&&y.equalsEpsilon(this.near,t.near,e,i)&&y.equalsEpsilon(this.far,t.far,e,i)};var P=b;function d(t){t=l(t,l.EMPTY_OBJECT),this._offCenterFrustum=new P,this.width=t.width,this._width=void 0,this.aspectRatio=t.aspectRatio,this._aspectRatio=void 0,this.near=l(t.near,1),this._near=this.near,this.far=l(t.far,5e8),this._far=this.far}d.packedLength=4;d.pack=function(t,e,i){return T.typeOf.object("value",t),T.defined("array",e),i=l(i,0),e[i++]=t.width,e[i++]=t.aspectRatio,e[i++]=t.near,e[i]=t.far,e};d.unpack=function(t,e,i){return T.defined("array",t),e=l(e,0),a(i)||(i=new d),i.width=t[e++],i.aspectRatio=t[e++],i.near=t[e++],i.far=t[e],i};function E(t){if(!a(t.width)||!a(t.aspectRatio)||!a(t.near)||!a(t.far))throw new f("width, aspectRatio, near, or far parameters are not set.");let e=t._offCenterFrustum;if(t.width!==t._width||t.aspectRatio!==t._aspectRatio||t.near!==t._near||t.far!==t._far){if(t.aspectRatio<0)throw new f("aspectRatio must be positive.");if(t.near<0||t.near>t.far)throw new f("near must be greater than zero and less than far.");t._aspectRatio=t.aspectRatio,t._width=t.width,t._near=t.near,t._far=t.far;let i=1/t.aspectRatio;e.right=t.width*.5,e.left=-e.right,e.top=i*e.right,e.bottom=-e.top,e.near=t.near,e.far=t.far}}Object.defineProperties(d.prototype,{projectionMatrix:{get:function(){return E(this),this._offCenterFrustum.projectionMatrix}},offCenterFrustum:{get:function(){return E(this),this._offCenterFrustum}}});d.prototype.computeCullingVolume=function(t,e,i){return E(this),this._offCenterFrustum.computeCullingVolume(t,e,i)};d.prototype.getPixelDimensions=function(t,e,i,r,h){return E(this),this._offCenterFrustum.getPixelDimensions(t,e,i,r,h)};d.prototype.clone=function(t){return a(t)||(t=new d),t.aspectRatio=this.aspectRatio,t.width=this.width,t.near=this.near,t.far=this.far,t._aspectRatio=void 0,t._width=void 0,t._near=void 0,t._far=void 0,this._offCenterFrustum.clone(t._offCenterFrustum),t};d.prototype.equals=function(t){return!a(t)||!(t instanceof d)?!1:(E(this),E(t),this.width===t.width&&this.aspectRatio===t.aspectRatio&&this._offCenterFrustum.equals(t._offCenterFrustum))};d.prototype.equalsEpsilon=function(t,e,i){return!a(t)||!(t instanceof d)?!1:(E(this),E(t),y.equalsEpsilon(this.width,t.width,e,i)&&y.equalsEpsilon(this.aspectRatio,t.aspectRatio,e,i)&&this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum,e,i))};var ht=d;export{I as a,P as b,ht as c};
