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

import{a as Jt,b as ye}from"./chunk-33Z6RQH5.js";import{a as gW}from"./chunk-CBM64Q65.js";import{a as SV,b as cV}from"./chunk-JKJSNVYO.js";import{a as _i,b as Ye,c as Ki}from"./chunk-5IQ5MRSI.js";import{a as z}from"./chunk-W6K6IXXU.js";import{b as Yi,c as yi}from"./chunk-BWBSMQCA.js";import{a as vi,b as qZ,c as Hi}from"./chunk-JNI5KGNE.js";import"./chunk-XY6LOZ6C.js";import{a as ft}from"./chunk-VKM6T6WC.js";import"./chunk-EBOQWXX2.js";import{a as xi}from"./chunk-MQ6JA2YC.js";import{a as we}from"./chunk-HL2OONDA.js";import{a as qV}from"./chunk-W6KZJA22.js";import{a as bt}from"./chunk-YXVS7GSF.js";import{a as ut}from"./chunk-MGJLY3JZ.js";import"./chunk-LEGXNNON.js";import"./chunk-5YSJOUNS.js";import"./chunk-7MNL6HNZ.js";import{a as Oe}from"./chunk-FWA5FYKY.js";import"./chunk-H36URT22.js";import"./chunk-QIFLGHYF.js";import{a as RU}from"./chunk-AI6V5ALR.js";import"./chunk-VKQBMZK2.js";import{a as hU}from"./chunk-P4N3C3X4.js";import{a as Pl}from"./chunk-CVZTMP7O.js";import{a as ki}from"./chunk-AB7AUVXY.js";import{a as wi}from"./chunk-C4KWLS76.js";import{a as dU}from"./chunk-2VVBIPY7.js";import{a as rW}from"./chunk-NVXOA5FM.js";import{a as Li}from"./chunk-XYZU5ZKW.js";import{a as pt,c as Xt,d as zi}from"./chunk-LRRMYFM5.js";import{a as Di,b as ul,c as dV,d as _e,e as Mi,g as gV,h as CW,i as JT,j as PZ,k as Oi,l as xl,m as KW,n as QV,p as FA,q as kl,r as QZ}from"./chunk-QN4KH7NX.js";import{a as jZ}from"./chunk-M74QEFMU.js";import{a as q,b as SW,c as CV,d as nV,e as aW}from"./chunk-6GB2WA4N.js";import{a as iV}from"./chunk-QF7RZIXE.js";import{a as w,b as Ul,c as Et,d as gl}from"./chunk-GTKX54AN.js";import{a as NV}from"./chunk-Y6GPSIGT.js";import{a as J}from"./chunk-6Y3U6IMI.js";import{a as Jl}from"./chunk-SXM64WZW.js";import{a}from"./chunk-FOJGNIAW.js";import{a as I,b as v}from"./chunk-5GTG3HGQ.js";import{a as ui,c as Ji,d as Me,e as OU,f as s}from"./chunk-ET2C4TQN.js";var rr=Ji((dJ,ar)=>{"use strict";ar.exports=pF;var bA=1e20;function pF(V,l){l||(l={});var Z=l.cutoff==null?.25:l.cutoff,U=l.radius==null?8:l.radius,A=l.channel||0,t,m,i,n,o,h,R,c,Q,T,S;if(ArrayBuffer.isView(V)||Array.isArray(V)){if(!l.width||!l.height)throw Error("For raw data width and height should be provided by options");t=l.width,m=l.height,n=V,l.stride?h=l.stride:h=Math.floor(V.length/t/m)}else window.HTMLCanvasElement&&V instanceof window.HTMLCanvasElement?(c=V,R=c.getContext("2d"),t=c.width,m=c.height,Q=R.getImageData(0,0,t,m),n=Q.data,h=4):window.CanvasRenderingContext2D&&V instanceof window.CanvasRenderingContext2D?(c=V.canvas,R=V,t=c.width,m=c.height,Q=R.getImageData(0,0,t,m),n=Q.data,h=4):window.ImageData&&V instanceof window.ImageData&&(Q=V,t=V.width,m=V.height,n=Q.data,h=4);if(i=Math.max(t,m),window.Uint8ClampedArray&&n instanceof window.Uint8ClampedArray||window.Uint8Array&&n instanceof window.Uint8Array)for(o=n,n=Array(t*m),T=0,S=Math.floor(o.length/h);T<S;T++)n[T]=o[T*h+A]/255;else if(h!==1)throw Error("Raw data can have only 1 value per pixel");var p=Array(t*m),b=Array(t*m),E=Array(i),D=Array(i),_=Array(i+1),Y=Array(i);for(T=0,S=t*m;T<S;T++){var K=n[T];p[T]=K===1?0:K===0?bA:Math.pow(Math.max(0,.5-K),2),b[T]=K===1?bA:K===0?0:Math.pow(Math.max(0,K-.5),2)}Gr(p,t,m,E,D,Y,_),Gr(b,t,m,E,D,Y,_);var ZV=window.Float32Array?new Float32Array(t*m):new Array(t*m);for(T=0,S=t*m;T<S;T++)ZV[T]=Math.min(Math.max(1-((p[T]-b[T])/U+Z),0),1);return ZV}function Gr(V,l,Z,U,A,t,m){for(var i=0;i<l;i++){for(var n=0;n<Z;n++)U[n]=V[n*l+i];for(sr(U,A,t,m,Z),n=0;n<Z;n++)V[n*l+i]=A[n]}for(n=0;n<Z;n++){for(i=0;i<l;i++)U[i]=V[n*l+i];for(sr(U,A,t,m,l),i=0;i<l;i++)V[n*l+i]=Math.sqrt(A[i])}}function sr(V,l,Z,U,A){Z[0]=0,U[0]=-bA,U[1]=+bA;for(var t=1,m=0;t<A;t++){for(var i=(V[t]+t*t-(V[Z[m]]+Z[m]*Z[m]))/(2*t-2*Z[m]);i<=U[m];)m--,i=(V[t]+t*t-(V[Z[m]]+Z[m]*Z[m]))/(2*t-2*Z[m]);m++,Z[m]=t,U[m]=i,U[m+1]=+bA}for(t=0,m=0;t<A;t++){for(;U[m+1]<t;)m++;l[t]=(t-Z[m])*(t-Z[m])+V[Z[m]]}}});var or=Ji((TJ,qt)=>{function XF(){var V=0,l=1,Z=2,U=3,A=4,t=5,m=6,i=7,n=8,o=9,h=10,R=11,c=12,Q=13,T=14,S=15,p=16,b=17,E=0,D=1,_=2,Y=3,K=4;function ZV(W,VV){return 55296<=W.charCodeAt(VV)&&W.charCodeAt(VV)<=56319&&56320<=W.charCodeAt(VV+1)&&W.charCodeAt(VV+1)<=57343}function j(W,VV){VV===void 0&&(VV=0);var GV=W.charCodeAt(VV);if(55296<=GV&&GV<=56319&&VV<W.length-1){var rV=GV,FV=W.charCodeAt(VV+1);return 56320<=FV&&FV<=57343?(rV-55296)*1024+(FV-56320)+65536:rV}if(56320<=GV&&GV<=57343&&VV>=1){var rV=W.charCodeAt(VV-1),FV=GV;return 55296<=rV&&rV<=56319?(rV-55296)*1024+(FV-56320)+65536:FV}return GV}function mV(W,VV,GV){var rV=[W].concat(VV).concat([GV]),FV=rV[rV.length-2],k=GV,UV=rV.lastIndexOf(T);if(UV>1&&rV.slice(1,UV).every(function(xV){return xV==U})&&[U,Q,b].indexOf(W)==-1)return _;var HV=rV.lastIndexOf(A);if(HV>0&&rV.slice(1,HV).every(function(xV){return xV==A})&&[c,A].indexOf(FV)==-1)return rV.filter(function(xV){return xV==A}).length%2==1?Y:K;if(FV==V&&k==l)return E;if(FV==Z||FV==V||FV==l)return k==T&&VV.every(function(xV){return xV==U})?_:D;if(k==Z||k==V||k==l)return D;if(FV==m&&(k==m||k==i||k==o||k==h))return E;if((FV==o||FV==i)&&(k==i||k==n))return E;if((FV==h||FV==n)&&k==n)return E;if(k==U||k==S)return E;if(k==t)return E;if(FV==c)return E;var yV=rV.indexOf(U)!=-1?rV.lastIndexOf(U)-1:rV.length-2;return[Q,b].indexOf(rV[yV])!=-1&&rV.slice(yV+1,-1).every(function(xV){return xV==U})&&k==T||FV==S&&[p,b].indexOf(k)!=-1?E:VV.indexOf(A)!=-1?_:FV==A&&k==A?E:D}this.nextBreak=function(W,VV){if(VV===void 0&&(VV=0),VV<0)return 0;if(VV>=W.length-1)return W.length;for(var GV=BV(j(W,VV)),rV=[],FV=VV+1;FV<W.length;FV++)if(!ZV(W,FV-1)){var k=BV(j(W,FV));if(mV(GV,rV,k))return FV;rV.push(k)}return W.length},this.splitGraphemes=function(W){for(var VV=[],GV=0,rV;(rV=this.nextBreak(W,GV))<W.length;)VV.push(W.slice(GV,rV)),GV=rV;return GV<W.length&&VV.push(W.slice(GV)),VV},this.iterateGraphemes=function(W){var VV=0,GV={next:function(){var rV,FV;return(FV=this.nextBreak(W,VV))<W.length?(rV=W.slice(VV,FV),VV=FV,{value:rV,done:!1}):VV<W.length?(rV=W.slice(VV),VV=W.length,{value:rV,done:!1}):{value:void 0,done:!0}}.bind(this)};return typeof Symbol<"u"&&Symbol.iterator&&(GV[Symbol.iterator]=function(){return GV}),GV},this.countGraphemes=function(W){for(var VV=0,GV=0,rV;(rV=this.nextBreak(W,GV))<W.length;)GV=rV,VV++;return GV<W.length&&VV++,VV};function BV(W){return 1536<=W&&W<=1541||W==1757||W==1807||W==2274||W==3406||W==69821||70082<=W&&W<=70083||W==72250||72326<=W&&W<=72329||W==73030?c:W==13?V:W==10?l:0<=W&&W<=9||11<=W&&W<=12||14<=W&&W<=31||127<=W&&W<=159||W==173||W==1564||W==6158||W==8203||8206<=W&&W<=8207||W==8232||W==8233||8234<=W&&W<=8238||8288<=W&&W<=8292||W==8293||8294<=W&&W<=8303||55296<=W&&W<=57343||W==65279||65520<=W&&W<=65528||65529<=W&&W<=65531||113824<=W&&W<=113827||119155<=W&&W<=119162||W==917504||W==917505||917506<=W&&W<=917535||917632<=W&&W<=917759||918e3<=W&&W<=921599?Z:768<=W&&W<=879||1155<=W&&W<=1159||1160<=W&&W<=1161||1425<=W&&W<=1469||W==1471||1473<=W&&W<=1474||1476<=W&&W<=1477||W==1479||1552<=W&&W<=1562||1611<=W&&W<=1631||W==1648||1750<=W&&W<=1756||1759<=W&&W<=1764||1767<=W&&W<=1768||1770<=W&&W<=1773||W==1809||1840<=W&&W<=1866||1958<=W&&W<=1968||2027<=W&&W<=2035||2070<=W&&W<=2073||2075<=W&&W<=2083||2085<=W&&W<=2087||2089<=W&&W<=2093||2137<=W&&W<=2139||2260<=W&&W<=2273||2275<=W&&W<=2306||W==2362||W==2364||2369<=W&&W<=2376||W==2381||2385<=W&&W<=2391||2402<=W&&W<=2403||W==2433||W==2492||W==2494||2497<=W&&W<=2500||W==2509||W==2519||2530<=W&&W<=2531||2561<=W&&W<=2562||W==2620||2625<=W&&W<=2626||2631<=W&&W<=2632||2635<=W&&W<=2637||W==2641||2672<=W&&W<=2673||W==2677||2689<=W&&W<=2690||W==2748||2753<=W&&W<=2757||2759<=W&&W<=2760||W==2765||2786<=W&&W<=2787||2810<=W&&W<=2815||W==2817||W==2876||W==2878||W==2879||2881<=W&&W<=2884||W==2893||W==2902||W==2903||2914<=W&&W<=2915||W==2946||W==3006||W==3008||W==3021||W==3031||W==3072||3134<=W&&W<=3136||3142<=W&&W<=3144||3146<=W&&W<=3149||3157<=W&&W<=3158||3170<=W&&W<=3171||W==3201||W==3260||W==3263||W==3266||W==3270||3276<=W&&W<=3277||3285<=W&&W<=3286||3298<=W&&W<=3299||3328<=W&&W<=3329||3387<=W&&W<=3388||W==3390||3393<=W&&W<=3396||W==3405||W==3415||3426<=W&&W<=3427||W==3530||W==3535||3538<=W&&W<=3540||W==3542||W==3551||W==3633||3636<=W&&W<=3642||3655<=W&&W<=3662||W==3761||3764<=W&&W<=3769||3771<=W&&W<=3772||3784<=W&&W<=3789||3864<=W&&W<=3865||W==3893||W==3895||W==3897||3953<=W&&W<=3966||3968<=W&&W<=3972||3974<=W&&W<=3975||3981<=W&&W<=3991||3993<=W&&W<=4028||W==4038||4141<=W&&W<=4144||4146<=W&&W<=4151||4153<=W&&W<=4154||4157<=W&&W<=4158||4184<=W&&W<=4185||4190<=W&&W<=4192||4209<=W&&W<=4212||W==4226||4229<=W&&W<=4230||W==4237||W==4253||4957<=W&&W<=4959||5906<=W&&W<=5908||5938<=W&&W<=5940||5970<=W&&W<=5971||6002<=W&&W<=6003||6068<=W&&W<=6069||6071<=W&&W<=6077||W==6086||6089<=W&&W<=6099||W==6109||6155<=W&&W<=6157||6277<=W&&W<=6278||W==6313||6432<=W&&W<=6434||6439<=W&&W<=6440||W==6450||6457<=W&&W<=6459||6679<=W&&W<=6680||W==6683||W==6742||6744<=W&&W<=6750||W==6752||W==6754||6757<=W&&W<=6764||6771<=W&&W<=6780||W==6783||6832<=W&&W<=6845||W==6846||6912<=W&&W<=6915||W==6964||6966<=W&&W<=6970||W==6972||W==6978||7019<=W&&W<=7027||7040<=W&&W<=7041||7074<=W&&W<=7077||7080<=W&&W<=7081||7083<=W&&W<=7085||W==7142||7144<=W&&W<=7145||W==7149||7151<=W&&W<=7153||7212<=W&&W<=7219||7222<=W&&W<=7223||7376<=W&&W<=7378||7380<=W&&W<=7392||7394<=W&&W<=7400||W==7405||W==7412||7416<=W&&W<=7417||7616<=W&&W<=7673||7675<=W&&W<=7679||W==8204||8400<=W&&W<=8412||8413<=W&&W<=8416||W==8417||8418<=W&&W<=8420||8421<=W&&W<=8432||11503<=W&&W<=11505||W==11647||11744<=W&&W<=11775||12330<=W&&W<=12333||12334<=W&&W<=12335||12441<=W&&W<=12442||W==42607||42608<=W&&W<=42610||42612<=W&&W<=42621||42654<=W&&W<=42655||42736<=W&&W<=42737||W==43010||W==43014||W==43019||43045<=W&&W<=43046||43204<=W&&W<=43205||43232<=W&&W<=43249||43302<=W&&W<=43309||43335<=W&&W<=43345||43392<=W&&W<=43394||W==43443||43446<=W&&W<=43449||W==43452||W==43493||43561<=W&&W<=43566||43569<=W&&W<=43570||43573<=W&&W<=43574||W==43587||W==43596||W==43644||W==43696||43698<=W&&W<=43700||43703<=W&&W<=43704||43710<=W&&W<=43711||W==43713||43756<=W&&W<=43757||W==43766||W==44005||W==44008||W==44013||W==64286||65024<=W&&W<=65039||65056<=W&&W<=65071||65438<=W&&W<=65439||W==66045||W==66272||66422<=W&&W<=66426||68097<=W&&W<=68099||68101<=W&&W<=68102||68108<=W&&W<=68111||68152<=W&&W<=68154||W==68159||68325<=W&&W<=68326||W==69633||69688<=W&&W<=69702||69759<=W&&W<=69761||69811<=W&&W<=69814||69817<=W&&W<=69818||69888<=W&&W<=69890||69927<=W&&W<=69931||69933<=W&&W<=69940||W==70003||70016<=W&&W<=70017||70070<=W&&W<=70078||70090<=W&&W<=70092||70191<=W&&W<=70193||W==70196||70198<=W&&W<=70199||W==70206||W==70367||70371<=W&&W<=70378||70400<=W&&W<=70401||W==70460||W==70462||W==70464||W==70487||70502<=W&&W<=70508||70512<=W&&W<=70516||70712<=W&&W<=70719||70722<=W&&W<=70724||W==70726||W==70832||70835<=W&&W<=70840||W==70842||W==70845||70847<=W&&W<=70848||70850<=W&&W<=70851||W==71087||71090<=W&&W<=71093||71100<=W&&W<=71101||71103<=W&&W<=71104||71132<=W&&W<=71133||71219<=W&&W<=71226||W==71229||71231<=W&&W<=71232||W==71339||W==71341||71344<=W&&W<=71349||W==71351||71453<=W&&W<=71455||71458<=W&&W<=71461||71463<=W&&W<=71467||72193<=W&&W<=72198||72201<=W&&W<=72202||72243<=W&&W<=72248||72251<=W&&W<=72254||W==72263||72273<=W&&W<=72278||72281<=W&&W<=72283||72330<=W&&W<=72342||72344<=W&&W<=72345||72752<=W&&W<=72758||72760<=W&&W<=72765||W==72767||72850<=W&&W<=72871||72874<=W&&W<=72880||72882<=W&&W<=72883||72885<=W&&W<=72886||73009<=W&&W<=73014||W==73018||73020<=W&&W<=73021||73023<=W&&W<=73029||W==73031||92912<=W&&W<=92916||92976<=W&&W<=92982||94095<=W&&W<=94098||113821<=W&&W<=113822||W==119141||119143<=W&&W<=119145||119150<=W&&W<=119154||119163<=W&&W<=119170||119173<=W&&W<=119179||119210<=W&&W<=119213||119362<=W&&W<=119364||121344<=W&&W<=121398||121403<=W&&W<=121452||W==121461||W==121476||121499<=W&&W<=121503||121505<=W&&W<=121519||122880<=W&&W<=122886||122888<=W&&W<=122904||122907<=W&&W<=122913||122915<=W&&W<=122916||122918<=W&&W<=122922||125136<=W&&W<=125142||125252<=W&&W<=125258||917536<=W&&W<=917631||917760<=W&&W<=917999?U:127462<=W&&W<=127487?A:W==2307||W==2363||2366<=W&&W<=2368||2377<=W&&W<=2380||2382<=W&&W<=2383||2434<=W&&W<=2435||2495<=W&&W<=2496||2503<=W&&W<=2504||2507<=W&&W<=2508||W==2563||2622<=W&&W<=2624||W==2691||2750<=W&&W<=2752||W==2761||2763<=W&&W<=2764||2818<=W&&W<=2819||W==2880||2887<=W&&W<=2888||2891<=W&&W<=2892||W==3007||3009<=W&&W<=3010||3014<=W&&W<=3016||3018<=W&&W<=3020||3073<=W&&W<=3075||3137<=W&&W<=3140||3202<=W&&W<=3203||W==3262||3264<=W&&W<=3265||3267<=W&&W<=3268||3271<=W&&W<=3272||3274<=W&&W<=3275||3330<=W&&W<=3331||3391<=W&&W<=3392||3398<=W&&W<=3400||3402<=W&&W<=3404||3458<=W&&W<=3459||3536<=W&&W<=3537||3544<=W&&W<=3550||3570<=W&&W<=3571||W==3635||W==3763||3902<=W&&W<=3903||W==3967||W==4145||4155<=W&&W<=4156||4182<=W&&W<=4183||W==4228||W==6070||6078<=W&&W<=6085||6087<=W&&W<=6088||6435<=W&&W<=6438||6441<=W&&W<=6443||6448<=W&&W<=6449||6451<=W&&W<=6456||6681<=W&&W<=6682||W==6741||W==6743||6765<=W&&W<=6770||W==6916||W==6965||W==6971||6973<=W&&W<=6977||6979<=W&&W<=6980||W==7042||W==7073||7078<=W&&W<=7079||W==7082||W==7143||7146<=W&&W<=7148||W==7150||7154<=W&&W<=7155||7204<=W&&W<=7211||7220<=W&&W<=7221||W==7393||7410<=W&&W<=7411||W==7415||43043<=W&&W<=43044||W==43047||43136<=W&&W<=43137||43188<=W&&W<=43203||43346<=W&&W<=43347||W==43395||43444<=W&&W<=43445||43450<=W&&W<=43451||43453<=W&&W<=43456||43567<=W&&W<=43568||43571<=W&&W<=43572||W==43597||W==43755||43758<=W&&W<=43759||W==43765||44003<=W&&W<=44004||44006<=W&&W<=44007||44009<=W&&W<=44010||W==44012||W==69632||W==69634||W==69762||69808<=W&&W<=69810||69815<=W&&W<=69816||W==69932||W==70018||70067<=W&&W<=70069||70079<=W&&W<=70080||70188<=W&&W<=70190||70194<=W&&W<=70195||W==70197||70368<=W&&W<=70370||70402<=W&&W<=70403||W==70463||70465<=W&&W<=70468||70471<=W&&W<=70472||70475<=W&&W<=70477||70498<=W&&W<=70499||70709<=W&&W<=70711||70720<=W&&W<=70721||W==70725||70833<=W&&W<=70834||W==70841||70843<=W&&W<=70844||W==70846||W==70849||71088<=W&&W<=71089||71096<=W&&W<=71099||W==71102||71216<=W&&W<=71218||71227<=W&&W<=71228||W==71230||W==71340||71342<=W&&W<=71343||W==71350||71456<=W&&W<=71457||W==71462||72199<=W&&W<=72200||W==72249||72279<=W&&W<=72280||W==72343||W==72751||W==72766||W==72873||W==72881||W==72884||94033<=W&&W<=94078||W==119142||W==119149?t:4352<=W&&W<=4447||43360<=W&&W<=43388?m:4448<=W&&W<=4519||55216<=W&&W<=55238?i:4520<=W&&W<=4607||55243<=W&&W<=55291?n:W==44032||W==44060||W==44088||W==44116||W==44144||W==44172||W==44200||W==44228||W==44256||W==44284||W==44312||W==44340||W==44368||W==44396||W==44424||W==44452||W==44480||W==44508||W==44536||W==44564||W==44592||W==44620||W==44648||W==44676||W==44704||W==44732||W==44760||W==44788||W==44816||W==44844||W==44872||W==44900||W==44928||W==44956||W==44984||W==45012||W==45040||W==45068||W==45096||W==45124||W==45152||W==45180||W==45208||W==45236||W==45264||W==45292||W==45320||W==45348||W==45376||W==45404||W==45432||W==45460||W==45488||W==45516||W==45544||W==45572||W==45600||W==45628||W==45656||W==45684||W==45712||W==45740||W==45768||W==45796||W==45824||W==45852||W==45880||W==45908||W==45936||W==45964||W==45992||W==46020||W==46048||W==46076||W==46104||W==46132||W==46160||W==46188||W==46216||W==46244||W==46272||W==46300||W==46328||W==46356||W==46384||W==46412||W==46440||W==46468||W==46496||W==46524||W==46552||W==46580||W==46608||W==46636||W==46664||W==46692||W==46720||W==46748||W==46776||W==46804||W==46832||W==46860||W==46888||W==46916||W==46944||W==46972||W==47e3||W==47028||W==47056||W==47084||W==47112||W==47140||W==47168||W==47196||W==47224||W==47252||W==47280||W==47308||W==47336||W==47364||W==47392||W==47420||W==47448||W==47476||W==47504||W==47532||W==47560||W==47588||W==47616||W==47644||W==47672||W==47700||W==47728||W==47756||W==47784||W==47812||W==47840||W==47868||W==47896||W==47924||W==47952||W==47980||W==48008||W==48036||W==48064||W==48092||W==48120||W==48148||W==48176||W==48204||W==48232||W==48260||W==48288||W==48316||W==48344||W==48372||W==48400||W==48428||W==48456||W==48484||W==48512||W==48540||W==48568||W==48596||W==48624||W==48652||W==48680||W==48708||W==48736||W==48764||W==48792||W==48820||W==48848||W==48876||W==48904||W==48932||W==48960||W==48988||W==49016||W==49044||W==49072||W==49100||W==49128||W==49156||W==49184||W==49212||W==49240||W==49268||W==49296||W==49324||W==49352||W==49380||W==49408||W==49436||W==49464||W==49492||W==49520||W==49548||W==49576||W==49604||W==49632||W==49660||W==49688||W==49716||W==49744||W==49772||W==49800||W==49828||W==49856||W==49884||W==49912||W==49940||W==49968||W==49996||W==50024||W==50052||W==50080||W==50108||W==50136||W==50164||W==50192||W==50220||W==50248||W==50276||W==50304||W==50332||W==50360||W==50388||W==50416||W==50444||W==50472||W==50500||W==50528||W==50556||W==50584||W==50612||W==50640||W==50668||W==50696||W==50724||W==50752||W==50780||W==50808||W==50836||W==50864||W==50892||W==50920||W==50948||W==50976||W==51004||W==51032||W==51060||W==51088||W==51116||W==51144||W==51172||W==51200||W==51228||W==51256||W==51284||W==51312||W==51340||W==51368||W==51396||W==51424||W==51452||W==51480||W==51508||W==51536||W==51564||W==51592||W==51620||W==51648||W==51676||W==51704||W==51732||W==51760||W==51788||W==51816||W==51844||W==51872||W==51900||W==51928||W==51956||W==51984||W==52012||W==52040||W==52068||W==52096||W==52124||W==52152||W==52180||W==52208||W==52236||W==52264||W==52292||W==52320||W==52348||W==52376||W==52404||W==52432||W==52460||W==52488||W==52516||W==52544||W==52572||W==52600||W==52628||W==52656||W==52684||W==52712||W==52740||W==52768||W==52796||W==52824||W==52852||W==52880||W==52908||W==52936||W==52964||W==52992||W==53020||W==53048||W==53076||W==53104||W==53132||W==53160||W==53188||W==53216||W==53244||W==53272||W==53300||W==53328||W==53356||W==53384||W==53412||W==53440||W==53468||W==53496||W==53524||W==53552||W==53580||W==53608||W==53636||W==53664||W==53692||W==53720||W==53748||W==53776||W==53804||W==53832||W==53860||W==53888||W==53916||W==53944||W==53972||W==54e3||W==54028||W==54056||W==54084||W==54112||W==54140||W==54168||W==54196||W==54224||W==54252||W==54280||W==54308||W==54336||W==54364||W==54392||W==54420||W==54448||W==54476||W==54504||W==54532||W==54560||W==54588||W==54616||W==54644||W==54672||W==54700||W==54728||W==54756||W==54784||W==54812||W==54840||W==54868||W==54896||W==54924||W==54952||W==54980||W==55008||W==55036||W==55064||W==55092||W==55120||W==55148||W==55176?o:44033<=W&&W<=44059||44061<=W&&W<=44087||44089<=W&&W<=44115||44117<=W&&W<=44143||44145<=W&&W<=44171||44173<=W&&W<=44199||44201<=W&&W<=44227||44229<=W&&W<=44255||44257<=W&&W<=44283||44285<=W&&W<=44311||44313<=W&&W<=44339||44341<=W&&W<=44367||44369<=W&&W<=44395||44397<=W&&W<=44423||44425<=W&&W<=44451||44453<=W&&W<=44479||44481<=W&&W<=44507||44509<=W&&W<=44535||44537<=W&&W<=44563||44565<=W&&W<=44591||44593<=W&&W<=44619||44621<=W&&W<=44647||44649<=W&&W<=44675||44677<=W&&W<=44703||44705<=W&&W<=44731||44733<=W&&W<=44759||44761<=W&&W<=44787||44789<=W&&W<=44815||44817<=W&&W<=44843||44845<=W&&W<=44871||44873<=W&&W<=44899||44901<=W&&W<=44927||44929<=W&&W<=44955||44957<=W&&W<=44983||44985<=W&&W<=45011||45013<=W&&W<=45039||45041<=W&&W<=45067||45069<=W&&W<=45095||45097<=W&&W<=45123||45125<=W&&W<=45151||45153<=W&&W<=45179||45181<=W&&W<=45207||45209<=W&&W<=45235||45237<=W&&W<=45263||45265<=W&&W<=45291||45293<=W&&W<=45319||45321<=W&&W<=45347||45349<=W&&W<=45375||45377<=W&&W<=45403||45405<=W&&W<=45431||45433<=W&&W<=45459||45461<=W&&W<=45487||45489<=W&&W<=45515||45517<=W&&W<=45543||45545<=W&&W<=45571||45573<=W&&W<=45599||45601<=W&&W<=45627||45629<=W&&W<=45655||45657<=W&&W<=45683||45685<=W&&W<=45711||45713<=W&&W<=45739||45741<=W&&W<=45767||45769<=W&&W<=45795||45797<=W&&W<=45823||45825<=W&&W<=45851||45853<=W&&W<=45879||45881<=W&&W<=45907||45909<=W&&W<=45935||45937<=W&&W<=45963||45965<=W&&W<=45991||45993<=W&&W<=46019||46021<=W&&W<=46047||46049<=W&&W<=46075||46077<=W&&W<=46103||46105<=W&&W<=46131||46133<=W&&W<=46159||46161<=W&&W<=46187||46189<=W&&W<=46215||46217<=W&&W<=46243||46245<=W&&W<=46271||46273<=W&&W<=46299||46301<=W&&W<=46327||46329<=W&&W<=46355||46357<=W&&W<=46383||46385<=W&&W<=46411||46413<=W&&W<=46439||46441<=W&&W<=46467||46469<=W&&W<=46495||46497<=W&&W<=46523||46525<=W&&W<=46551||46553<=W&&W<=46579||46581<=W&&W<=46607||46609<=W&&W<=46635||46637<=W&&W<=46663||46665<=W&&W<=46691||46693<=W&&W<=46719||46721<=W&&W<=46747||46749<=W&&W<=46775||46777<=W&&W<=46803||46805<=W&&W<=46831||46833<=W&&W<=46859||46861<=W&&W<=46887||46889<=W&&W<=46915||46917<=W&&W<=46943||46945<=W&&W<=46971||46973<=W&&W<=46999||47001<=W&&W<=47027||47029<=W&&W<=47055||47057<=W&&W<=47083||47085<=W&&W<=47111||47113<=W&&W<=47139||47141<=W&&W<=47167||47169<=W&&W<=47195||47197<=W&&W<=47223||47225<=W&&W<=47251||47253<=W&&W<=47279||47281<=W&&W<=47307||47309<=W&&W<=47335||47337<=W&&W<=47363||47365<=W&&W<=47391||47393<=W&&W<=47419||47421<=W&&W<=47447||47449<=W&&W<=47475||47477<=W&&W<=47503||47505<=W&&W<=47531||47533<=W&&W<=47559||47561<=W&&W<=47587||47589<=W&&W<=47615||47617<=W&&W<=47643||47645<=W&&W<=47671||47673<=W&&W<=47699||47701<=W&&W<=47727||47729<=W&&W<=47755||47757<=W&&W<=47783||47785<=W&&W<=47811||47813<=W&&W<=47839||47841<=W&&W<=47867||47869<=W&&W<=47895||47897<=W&&W<=47923||47925<=W&&W<=47951||47953<=W&&W<=47979||47981<=W&&W<=48007||48009<=W&&W<=48035||48037<=W&&W<=48063||48065<=W&&W<=48091||48093<=W&&W<=48119||48121<=W&&W<=48147||48149<=W&&W<=48175||48177<=W&&W<=48203||48205<=W&&W<=48231||48233<=W&&W<=48259||48261<=W&&W<=48287||48289<=W&&W<=48315||48317<=W&&W<=48343||48345<=W&&W<=48371||48373<=W&&W<=48399||48401<=W&&W<=48427||48429<=W&&W<=48455||48457<=W&&W<=48483||48485<=W&&W<=48511||48513<=W&&W<=48539||48541<=W&&W<=48567||48569<=W&&W<=48595||48597<=W&&W<=48623||48625<=W&&W<=48651||48653<=W&&W<=48679||48681<=W&&W<=48707||48709<=W&&W<=48735||48737<=W&&W<=48763||48765<=W&&W<=48791||48793<=W&&W<=48819||48821<=W&&W<=48847||48849<=W&&W<=48875||48877<=W&&W<=48903||48905<=W&&W<=48931||48933<=W&&W<=48959||48961<=W&&W<=48987||48989<=W&&W<=49015||49017<=W&&W<=49043||49045<=W&&W<=49071||49073<=W&&W<=49099||49101<=W&&W<=49127||49129<=W&&W<=49155||49157<=W&&W<=49183||49185<=W&&W<=49211||49213<=W&&W<=49239||49241<=W&&W<=49267||49269<=W&&W<=49295||49297<=W&&W<=49323||49325<=W&&W<=49351||49353<=W&&W<=49379||49381<=W&&W<=49407||49409<=W&&W<=49435||49437<=W&&W<=49463||49465<=W&&W<=49491||49493<=W&&W<=49519||49521<=W&&W<=49547||49549<=W&&W<=49575||49577<=W&&W<=49603||49605<=W&&W<=49631||49633<=W&&W<=49659||49661<=W&&W<=49687||49689<=W&&W<=49715||49717<=W&&W<=49743||49745<=W&&W<=49771||49773<=W&&W<=49799||49801<=W&&W<=49827||49829<=W&&W<=49855||49857<=W&&W<=49883||49885<=W&&W<=49911||49913<=W&&W<=49939||49941<=W&&W<=49967||49969<=W&&W<=49995||49997<=W&&W<=50023||50025<=W&&W<=50051||50053<=W&&W<=50079||50081<=W&&W<=50107||50109<=W&&W<=50135||50137<=W&&W<=50163||50165<=W&&W<=50191||50193<=W&&W<=50219||50221<=W&&W<=50247||50249<=W&&W<=50275||50277<=W&&W<=50303||50305<=W&&W<=50331||50333<=W&&W<=50359||50361<=W&&W<=50387||50389<=W&&W<=50415||50417<=W&&W<=50443||50445<=W&&W<=50471||50473<=W&&W<=50499||50501<=W&&W<=50527||50529<=W&&W<=50555||50557<=W&&W<=50583||50585<=W&&W<=50611||50613<=W&&W<=50639||50641<=W&&W<=50667||50669<=W&&W<=50695||50697<=W&&W<=50723||50725<=W&&W<=50751||50753<=W&&W<=50779||50781<=W&&W<=50807||50809<=W&&W<=50835||50837<=W&&W<=50863||50865<=W&&W<=50891||50893<=W&&W<=50919||50921<=W&&W<=50947||50949<=W&&W<=50975||50977<=W&&W<=51003||51005<=W&&W<=51031||51033<=W&&W<=51059||51061<=W&&W<=51087||51089<=W&&W<=51115||51117<=W&&W<=51143||51145<=W&&W<=51171||51173<=W&&W<=51199||51201<=W&&W<=51227||51229<=W&&W<=51255||51257<=W&&W<=51283||51285<=W&&W<=51311||51313<=W&&W<=51339||51341<=W&&W<=51367||51369<=W&&W<=51395||51397<=W&&W<=51423||51425<=W&&W<=51451||51453<=W&&W<=51479||51481<=W&&W<=51507||51509<=W&&W<=51535||51537<=W&&W<=51563||51565<=W&&W<=51591||51593<=W&&W<=51619||51621<=W&&W<=51647||51649<=W&&W<=51675||51677<=W&&W<=51703||51705<=W&&W<=51731||51733<=W&&W<=51759||51761<=W&&W<=51787||51789<=W&&W<=51815||51817<=W&&W<=51843||51845<=W&&W<=51871||51873<=W&&W<=51899||51901<=W&&W<=51927||51929<=W&&W<=51955||51957<=W&&W<=51983||51985<=W&&W<=52011||52013<=W&&W<=52039||52041<=W&&W<=52067||52069<=W&&W<=52095||52097<=W&&W<=52123||52125<=W&&W<=52151||52153<=W&&W<=52179||52181<=W&&W<=52207||52209<=W&&W<=52235||52237<=W&&W<=52263||52265<=W&&W<=52291||52293<=W&&W<=52319||52321<=W&&W<=52347||52349<=W&&W<=52375||52377<=W&&W<=52403||52405<=W&&W<=52431||52433<=W&&W<=52459||52461<=W&&W<=52487||52489<=W&&W<=52515||52517<=W&&W<=52543||52545<=W&&W<=52571||52573<=W&&W<=52599||52601<=W&&W<=52627||52629<=W&&W<=52655||52657<=W&&W<=52683||52685<=W&&W<=52711||52713<=W&&W<=52739||52741<=W&&W<=52767||52769<=W&&W<=52795||52797<=W&&W<=52823||52825<=W&&W<=52851||52853<=W&&W<=52879||52881<=W&&W<=52907||52909<=W&&W<=52935||52937<=W&&W<=52963||52965<=W&&W<=52991||52993<=W&&W<=53019||53021<=W&&W<=53047||53049<=W&&W<=53075||53077<=W&&W<=53103||53105<=W&&W<=53131||53133<=W&&W<=53159||53161<=W&&W<=53187||53189<=W&&W<=53215||53217<=W&&W<=53243||53245<=W&&W<=53271||53273<=W&&W<=53299||53301<=W&&W<=53327||53329<=W&&W<=53355||53357<=W&&W<=53383||53385<=W&&W<=53411||53413<=W&&W<=53439||53441<=W&&W<=53467||53469<=W&&W<=53495||53497<=W&&W<=53523||53525<=W&&W<=53551||53553<=W&&W<=53579||53581<=W&&W<=53607||53609<=W&&W<=53635||53637<=W&&W<=53663||53665<=W&&W<=53691||53693<=W&&W<=53719||53721<=W&&W<=53747||53749<=W&&W<=53775||53777<=W&&W<=53803||53805<=W&&W<=53831||53833<=W&&W<=53859||53861<=W&&W<=53887||53889<=W&&W<=53915||53917<=W&&W<=53943||53945<=W&&W<=53971||53973<=W&&W<=53999||54001<=W&&W<=54027||54029<=W&&W<=54055||54057<=W&&W<=54083||54085<=W&&W<=54111||54113<=W&&W<=54139||54141<=W&&W<=54167||54169<=W&&W<=54195||54197<=W&&W<=54223||54225<=W&&W<=54251||54253<=W&&W<=54279||54281<=W&&W<=54307||54309<=W&&W<=54335||54337<=W&&W<=54363||54365<=W&&W<=54391||54393<=W&&W<=54419||54421<=W&&W<=54447||54449<=W&&W<=54475||54477<=W&&W<=54503||54505<=W&&W<=54531||54533<=W&&W<=54559||54561<=W&&W<=54587||54589<=W&&W<=54615||54617<=W&&W<=54643||54645<=W&&W<=54671||54673<=W&&W<=54699||54701<=W&&W<=54727||54729<=W&&W<=54755||54757<=W&&W<=54783||54785<=W&&W<=54811||54813<=W&&W<=54839||54841<=W&&W<=54867||54869<=W&&W<=54895||54897<=W&&W<=54923||54925<=W&&W<=54951||54953<=W&&W<=54979||54981<=W&&W<=55007||55009<=W&&W<=55035||55037<=W&&W<=55063||55065<=W&&W<=55091||55093<=W&&W<=55119||55121<=W&&W<=55147||55149<=W&&W<=55175||55177<=W&&W<=55203?h:W==9757||W==9977||9994<=W&&W<=9997||W==127877||127938<=W&&W<=127940||W==127943||127946<=W&&W<=127948||128066<=W&&W<=128067||128070<=W&&W<=128080||W==128110||128112<=W&&W<=128120||W==128124||128129<=W&&W<=128131||128133<=W&&W<=128135||W==128170||128372<=W&&W<=128373||W==128378||W==128400||128405<=W&&W<=128406||128581<=W&&W<=128583||128587<=W&&W<=128591||W==128675||128692<=W&&W<=128694||W==128704||W==128716||129304<=W&&W<=129308||129310<=W&&W<=129311||W==129318||129328<=W&&W<=129337||129341<=W&&W<=129342||129489<=W&&W<=129501?Q:127995<=W&&W<=127999?T:W==8205?S:W==9792||W==9794||9877<=W&&W<=9878||W==9992||W==10084||W==127752||W==127806||W==127859||W==127891||W==127908||W==127912||W==127979||W==127981||W==128139||128187<=W&&W<=128188||W==128295||W==128300||W==128488||W==128640||W==128658?p:128102<=W&&W<=128105?b:R}return this}typeof qt<"u"&&qt.exports&&(qt.exports=XF)});function xt(){I.throwInstantiationError()}Object.defineProperties(xt.prototype,{name:{get:I.throwInstantiationError},clock:{get:I.throwInstantiationError},entities:{get:I.throwInstantiationError},isLoading:{get:I.throwInstantiationError},changedEvent:{get:I.throwInstantiationError},errorEvent:{get:I.throwInstantiationError},loadingEvent:{get:I.throwInstantiationError},show:{get:I.throwInstantiationError},clustering:{get:I.throwInstantiationError}});xt.prototype.update=function(V){I.throwInstantiationError()};xt.setLoading=function(V,l){V._isLoading!==l&&(l?V._entityCollection.suspendEvents():V._entityCollection.resumeEvents(),V._isLoading=l,V._loading.raiseEvent(V,l))};var Pi=xt;function xT(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(V){let l=Math.random()*16|0;return(V==="x"?l:l&3|8).toString(16)})}var jl=xT;function gZ(V,l){V=a(V,0),this._near=V,l=a(l,Number.MAX_VALUE),this._far=l}Object.defineProperties(gZ.prototype,{near:{get:function(){return this._near},set:function(V){this._near=V}},far:{get:function(){return this._far},set:function(V){this._far=V}}});gZ.packedLength=2;gZ.pack=function(V,l,Z){if(!s(V))throw new I("value is required");if(!s(l))throw new I("array is required");return Z=a(Z,0),l[Z++]=V.near,l[Z]=V.far,l};gZ.unpack=function(V,l,Z){if(!s(V))throw new I("array is required");return l=a(l,0),s(Z)||(Z=new gZ),Z.near=V[l++],Z.far=V[l],Z};gZ.equals=function(V,l){return V===l||s(V)&&s(l)&&V.near===l.near&&V.far===l.far};gZ.clone=function(V,l){if(s(V))return s(l)||(l=new gZ),l.near=V.near,l.far=V.far,l};gZ.prototype.clone=function(V){return gZ.clone(this,V)};gZ.prototype.equals=function(V){return gZ.equals(this,V)};var RZ=gZ;function JZ(V,l,Z,U){this.near=a(V,0),this.nearValue=a(l,0),this.far=a(Z,1),this.farValue=a(U,0)}JZ.clone=function(V,l){if(s(V))return s(l)?(l.near=V.near,l.nearValue=V.nearValue,l.far=V.far,l.farValue=V.farValue,l):new JZ(V.near,V.nearValue,V.far,V.farValue)};JZ.packedLength=4;JZ.pack=function(V,l,Z){if(!s(V))throw new I("value is required");if(!s(l))throw new I("array is required");return Z=a(Z,0),l[Z++]=V.near,l[Z++]=V.nearValue,l[Z++]=V.far,l[Z]=V.farValue,l};JZ.unpack=function(V,l,Z){if(!s(V))throw new I("array is required");return l=a(l,0),s(Z)||(Z=new JZ),Z.near=V[l++],Z.nearValue=V[l++],Z.far=V[l++],Z.farValue=V[l],Z};JZ.equals=function(V,l){return V===l||s(V)&&s(l)&&V.near===l.near&&V.nearValue===l.nearValue&&V.far===l.far&&V.farValue===l.farValue};JZ.prototype.clone=function(V){return JZ.clone(this,V)};JZ.prototype.equals=function(V){return JZ.equals(this,V)};var _V=JZ;var DT={NONE:0,CLAMP_TO_GROUND:1,RELATIVE_TO_GROUND:2},ZZ=Object.freeze(DT);var MT={CENTER:0,LEFT:1,RIGHT:-1},eZ=Object.freeze(MT);var Dt={MORPHING:0,COLUMBUS_VIEW:1,SCENE2D:2,SCENE3D:3};Dt.getMorphTime=function(V){return V===Dt.SCENE3D?1:V===Dt.MORPHING?void 0:0};var IV=Object.freeze(Dt);var mZ={},_T=new CV(0,0,0,1),GZ=new CV,OT=new qV,ve=new q,ze=new q;mZ.wgs84ToWindowCoordinates=function(V,l,Z){return mZ.wgs84WithEyeOffsetToWindowCoordinates(V,l,w.ZERO,Z)};var ji=new CV,qi=new w;function QA(V,l,Z,U){let A=Z.viewMatrix,t=nV.multiplyByVector(A,CV.fromElements(V.x,V.y,V.z,1,ji),ji),m=w.multiplyComponents(l,w.normalize(t,qi),qi);return t.x+=l.x+m.x,t.y+=l.y+m.y,t.z+=m.z,nV.multiplyByVector(Z.frustum.projectionMatrix,t,U)}var wT=new Ul(Math.PI,NV.PI_OVER_TWO),YT=new w,yT=new w;mZ.wgs84WithEyeOffsetToWindowCoordinates=function(V,l,Z,U){if(!s(V))throw new I("scene is required.");if(!s(l))throw new I("position is required.");let A=V.frameState,t=mZ.computeActualWgs84Position(A,l,_T);if(!s(t))return;let m=V.canvas,i=OT;i.x=0,i.y=0,i.width=m.clientWidth,i.height=m.clientHeight;let n=V.camera,o=!1;if(A.mode===IV.SCENE2D){let h=V.mapProjection,R=wT,c=h.project(R,YT),Q=w.clone(n.position,yT),T=n.frustum.clone(),S=nV.computeViewportTransformation(i,0,1,new nV),p=n.frustum.projectionMatrix,b=n.positionWC.y,E=w.fromElements(NV.sign(b)*c.x-b,0,-n.positionWC.x),D=QZ.pointToGLWindowCoordinates(p,S,E);if(b===0||D.x<=0||D.x>=m.clientWidth)o=!0;else{if(D.x>m.clientWidth*.5){i.width=D.x,n.frustum.right=c.x-b,GZ=QA(t,Z,n,GZ),mZ.clipToGLWindowCoordinates(i,GZ,ve),i.x+=D.x,n.position.x=-n.position.x;let _=n.frustum.right;n.frustum.right=-n.frustum.left,n.frustum.left=-_,GZ=QA(t,Z,n,GZ),mZ.clipToGLWindowCoordinates(i,GZ,ze)}else{i.x+=D.x,i.width-=D.x,n.frustum.left=-c.x-b,GZ=QA(t,Z,n,GZ),mZ.clipToGLWindowCoordinates(i,GZ,ve),i.x=i.x-i.width,n.position.x=-n.position.x;let _=n.frustum.left;n.frustum.left=-n.frustum.right,n.frustum.right=-_,GZ=QA(t,Z,n,GZ),mZ.clipToGLWindowCoordinates(i,GZ,ze)}w.clone(Q,n.position),n.frustum=T.clone(),U=q.clone(ve,U),(U.x<0||U.x>m.clientWidth)&&(U.x=ze.x)}}if(A.mode!==IV.SCENE2D||o){if(GZ=QA(t,Z,n,GZ),GZ.z<0&&!(n.frustum instanceof yi)&&!(n.frustum instanceof Yi))return;U=mZ.clipToGLWindowCoordinates(i,GZ,U)}return U.y=m.clientHeight-U.y,U};mZ.wgs84ToDrawingBufferCoordinates=function(V,l,Z){if(Z=mZ.wgs84ToWindowCoordinates(V,l,Z),!!s(Z))return mZ.transformWindowToDrawingBuffer(V,Z,Z)};var NW=new w,vT=new Ul;mZ.computeActualWgs84Position=function(V,l,Z){let U=V.mode;if(U===IV.SCENE3D)return w.clone(l,Z);let A=V.mapProjection,t=A.ellipsoid.cartesianToCartographic(l,vT);if(!s(t))return;if(A.project(t,NW),U===IV.COLUMBUS_VIEW)return w.fromElements(NW.z,NW.x,NW.y,Z);if(U===IV.SCENE2D)return w.fromElements(0,NW.x,NW.y,Z);let m=V.morphTime;return w.fromElements(NV.lerp(NW.z,l.x,m),NV.lerp(NW.x,l.y,m),NV.lerp(NW.y,l.z,m),Z)};var $i=new w,Vn=new w,ln=new nV;mZ.clipToGLWindowCoordinates=function(V,l,Z){return w.divideByScalar(l,l.w,$i),nV.computeViewportTransformation(V,0,1,ln),nV.multiplyByPoint(ln,$i,Vn),q.fromCartesian3(Vn,Z)};mZ.transformWindowToDrawingBuffer=function(V,l,Z){let U=V.canvas,A=V.drawingBufferWidth/U.clientWidth,t=V.drawingBufferHeight/U.clientHeight;return q.fromElements(l.x*A,l.y*t,Z)};var zT=new CV,Zn=new CV;mZ.drawingBufferToWgs84Coordinates=function(V,l,Z,U){let t=V.context.uniformState,m=t.currentFrustum,i=m.x,n=m.y;if(V.frameState.useLogDepth){let Q=Z*t.log2FarDepthFromNearPlusOne,T=Math.pow(2,Q)-1;Z=n*(1-i/(T+i))/(n-i)}let o=V.view.passState.viewport,h=CV.clone(CV.UNIT_W,zT);h.x=(l.x-o.x)/o.width*2-1,h.y=(l.y-o.y)/o.height*2-1,h.z=Z*2-1,h.w=1;let R,c=V.camera.frustum;if(s(c.fovy)){R=nV.multiplyByVector(t.inverseViewProjection,h,Zn);let Q=1/R.w;w.multiplyByScalar(R,Q,R)}else{let Q=c.offCenterFrustum;s(Q)&&(c=Q),R=Zn,R.x=(h.x*(c.right-c.left)+c.left+c.right)*.5,R.y=(h.y*(c.top-c.bottom)+c.bottom+c.top)*.5,R.z=(h.z*(i-n)-i-n)*.5,R.w=1,R=nV.multiplyByVector(t.inverseView,R,R)}return w.fromCartesian4(R,U)};var wU=mZ;var kT={CENTER:0,BOTTOM:1,BASELINE:2,TOP:-1},Al=Object.freeze(kT);function OV(V,l){if(V=a(V,a.EMPTY_OBJECT),s(V.disableDepthTestDistance)&&V.disableDepthTestDistance<0)throw new I("disableDepthTestDistance must be greater than or equal to 0.0.");let Z=V.translucencyByDistance,U=V.pixelOffsetScaleByDistance,A=V.scaleByDistance,t=V.distanceDisplayCondition;if(s(Z)){if(Z.far<=Z.near)throw new I("translucencyByDistance.far must be greater than translucencyByDistance.near.");Z=_V.clone(Z)}if(s(U)){if(U.far<=U.near)throw new I("pixelOffsetScaleByDistance.far must be greater than pixelOffsetScaleByDistance.near.");U=_V.clone(U)}if(s(A)){if(A.far<=A.near)throw new I("scaleByDistance.far must be greater than scaleByDistance.near.");A=_V.clone(A)}if(s(t)){if(t.far<=t.near)throw new I("distanceDisplayCondition.far must be greater than distanceDisplayCondition.near.");t=RZ.clone(t)}this._show=a(V.show,!0),this._position=w.clone(a(V.position,w.ZERO)),this._actualPosition=w.clone(this._position),this._pixelOffset=q.clone(a(V.pixelOffset,q.ZERO)),this._translate=new q(0,0),this._eyeOffset=w.clone(a(V.eyeOffset,w.ZERO)),this._heightReference=a(V.heightReference,ZZ.NONE),this._verticalOrigin=a(V.verticalOrigin,Al.CENTER),this._horizontalOrigin=a(V.horizontalOrigin,eZ.CENTER),this._scale=a(V.scale,1),this._color=z.clone(a(V.color,z.WHITE)),this._rotation=a(V.rotation,0),this._alignedAxis=w.clone(a(V.alignedAxis,w.ZERO)),this._width=V.width,this._height=V.height,this._scaleByDistance=A,this._translucencyByDistance=Z,this._pixelOffsetScaleByDistance=U,this._sizeInMeters=a(V.sizeInMeters,!1),this._distanceDisplayCondition=t,this._disableDepthTestDistance=V.disableDepthTestDistance,this._id=V.id,this._collection=a(V.collection,l),this._pickId=void 0,this._pickPrimitive=a(V._pickPrimitive,this),this._billboardCollection=l,this._dirty=!1,this._index=-1,this._batchIndex=void 0,this._imageIndex=-1,this._imageIndexPromise=void 0,this._imageId=void 0,this._image=void 0,this._imageSubRegion=void 0,this._imageWidth=void 0,this._imageHeight=void 0,this._labelDimensions=void 0,this._labelHorizontalOrigin=void 0,this._labelTranslate=void 0;let m=V.image,i=V.imageId;s(m)&&(s(i)||(typeof m=="string"?i=m:s(m.src)?i=m.src:i=jl()),this._imageId=i,this._image=m),s(V.imageSubRegion)&&(this._imageId=i,this._imageSubRegion=V.imageSubRegion),s(this._billboardCollection._textureAtlas)&&this._loadImage(),this._actualClampedPosition=void 0,this._removeCallbackFunc=void 0,this._mode=IV.SCENE3D,this._clusterShow=!0,this._outlineColor=z.clone(a(V.outlineColor,z.BLACK)),this._outlineWidth=a(V.outlineWidth,0),this._updateClamping()}var Wn=OV.SHOW_INDEX=0,_t=OV.POSITION_INDEX=1,mn=OV.PIXEL_OFFSET_INDEX=2,HT=OV.EYE_OFFSET_INDEX=3,LT=OV.HORIZONTAL_ORIGIN_INDEX=4,KT=OV.VERTICAL_ORIGIN_INDEX=5,PT=OV.SCALE_INDEX=6,Ot=OV.IMAGE_INDEX_INDEX=7,Un=OV.COLOR_INDEX=8,jT=OV.ROTATION_INDEX=9,qT=OV.ALIGNED_AXIS_INDEX=10,$T=OV.SCALE_BY_DISTANCE_INDEX=11,VB=OV.TRANSLUCENCY_BY_DISTANCE_INDEX=12,lB=OV.PIXEL_OFFSET_SCALE_BY_DISTANCE_INDEX=13,ZB=OV.DISTANCE_DISPLAY_CONDITION=14,WB=OV.DISABLE_DEPTH_DISTANCE=15;OV.TEXTURE_COORDINATE_BOUNDS=16;var An=OV.SDF_INDEX=17;OV.NUMBER_OF_PROPERTIES=18;function Gl(V,l){let Z=V._billboardCollection;s(Z)&&(Z._updateBillboard(V,l),V._dirty=!0)}Object.defineProperties(OV.prototype,{show:{get:function(){return this._show},set:function(V){v.typeOf.bool("value",V),this._show!==V&&(this._show=V,Gl(this,Wn))}},position:{get:function(){return this._position},set:function(V){v.typeOf.object("value",V);let l=this._position;w.equals(l,V)||(w.clone(V,l),w.clone(V,this._actualPosition),this._updateClamping(),Gl(this,_t))}},heightReference:{get:function(){return this._heightReference},set:function(V){v.typeOf.number("value",V);let l=this._heightReference;V!==l&&(this._heightReference=V,this._updateClamping(),Gl(this,_t))}},pixelOffset:{get:function(){return this._pixelOffset},set:function(V){v.typeOf.object("value",V);let l=this._pixelOffset;q.equals(l,V)||(q.clone(V,l),Gl(this,mn))}},scaleByDistance:{get:function(){return this._scaleByDistance},set:function(V){if(s(V)&&(v.typeOf.object("value",V),V.far<=V.near))throw new I("far distance must be greater than near distance.");let l=this._scaleByDistance;_V.equals(l,V)||(this._scaleByDistance=_V.clone(V,l),Gl(this,$T))}},translucencyByDistance:{get:function(){return this._translucencyByDistance},set:function(V){if(s(V)&&(v.typeOf.object("value",V),V.far<=V.near))throw new I("far distance must be greater than near distance.");let l=this._translucencyByDistance;_V.equals(l,V)||(this._translucencyByDistance=_V.clone(V,l),Gl(this,VB))}},pixelOffsetScaleByDistance:{get:function(){return this._pixelOffsetScaleByDistance},set:function(V){if(s(V)&&(v.typeOf.object("value",V),V.far<=V.near))throw new I("far distance must be greater than near distance.");let l=this._pixelOffsetScaleByDistance;_V.equals(l,V)||(this._pixelOffsetScaleByDistance=_V.clone(V,l),Gl(this,lB))}},eyeOffset:{get:function(){return this._eyeOffset},set:function(V){v.typeOf.object("value",V);let l=this._eyeOffset;w.equals(l,V)||(w.clone(V,l),Gl(this,HT))}},horizontalOrigin:{get:function(){return this._horizontalOrigin},set:function(V){v.typeOf.number("value",V),this._horizontalOrigin!==V&&(this._horizontalOrigin=V,Gl(this,LT))}},verticalOrigin:{get:function(){return this._verticalOrigin},set:function(V){v.typeOf.number("value",V),this._verticalOrigin!==V&&(this._verticalOrigin=V,Gl(this,KT))}},scale:{get:function(){return this._scale},set:function(V){v.typeOf.number("value",V),this._scale!==V&&(this._scale=V,Gl(this,PT))}},color:{get:function(){return this._color},set:function(V){v.typeOf.object("value",V);let l=this._color;z.equals(l,V)||(z.clone(V,l),Gl(this,Un))}},rotation:{get:function(){return this._rotation},set:function(V){v.typeOf.number("value",V),this._rotation!==V&&(this._rotation=V,Gl(this,jT))}},alignedAxis:{get:function(){return this._alignedAxis},set:function(V){v.typeOf.object("value",V);let l=this._alignedAxis;w.equals(l,V)||(w.clone(V,l),Gl(this,qT))}},width:{get:function(){return a(this._width,this._imageWidth)},set:function(V){s(V)&&v.typeOf.number("value",V),this._width!==V&&(this._width=V,Gl(this,Ot))}},height:{get:function(){return a(this._height,this._imageHeight)},set:function(V){s(V)&&v.typeOf.number("value",V),this._height!==V&&(this._height=V,Gl(this,Ot))}},sizeInMeters:{get:function(){return this._sizeInMeters},set:function(V){v.typeOf.bool("value",V),this._sizeInMeters!==V&&(this._sizeInMeters=V,Gl(this,Un))}},distanceDisplayCondition:{get:function(){return this._distanceDisplayCondition},set:function(V){if(!RZ.equals(V,this._distanceDisplayCondition)){if(s(V)&&(v.typeOf.object("value",V),V.far<=V.near))throw new I("far distance must be greater than near distance.");this._distanceDisplayCondition=RZ.clone(V,this._distanceDisplayCondition),Gl(this,ZB)}}},disableDepthTestDistance:{get:function(){return this._disableDepthTestDistance},set:function(V){if(s(V)&&(v.typeOf.number("value",V),V<0))throw new I("disableDepthTestDistance must be greater than or equal to 0.0.");this._disableDepthTestDistance!==V&&(this._disableDepthTestDistance=V,Gl(this,WB))}},id:{get:function(){return this._id},set:function(V){this._id=V,s(this._pickId)&&(this._pickId.object.id=V)}},pickPrimitive:{get:function(){return this._pickPrimitive},set:function(V){this._pickPrimitive=V,s(this._pickId)&&(this._pickId.object.primitive=V)}},pickId:{get:function(){return this._pickId}},image:{get:function(){return this._imageId},set:function(V){s(V)?typeof V=="string"?this.setImage(V,V):V instanceof xl?this.setImage(V.url,V):s(V.src)?this.setImage(V.src,V):this.setImage(jl(),V):(this._imageIndex=-1,this._imageSubRegion=void 0,this._imageId=void 0,this._image=void 0,this._imageIndexPromise=void 0,Gl(this,Ot))}},ready:{get:function(){return this._imageIndex!==-1}},_clampedPosition:{get:function(){return this._actualClampedPosition},set:function(V){this._actualClampedPosition=w.clone(V,this._actualClampedPosition),Gl(this,_t)}},clusterShow:{get:function(){return this._clusterShow},set:function(V){this._clusterShow!==V&&(this._clusterShow=V,Gl(this,Wn))}},outlineColor:{get:function(){return this._outlineColor},set:function(V){if(!s(V))throw new I("value is required.");let l=this._outlineColor;z.equals(l,V)||(z.clone(V,l),Gl(this,An))}},outlineWidth:{get:function(){return this._outlineWidth},set:function(V){this._outlineWidth!==V&&(this._outlineWidth=V,Gl(this,An))}}});OV.prototype.getPickId=function(V){return s(this._pickId)||(this._pickId=V.createPickId({primitive:this._pickPrimitive,collection:this._collection,id:this._id})),this._pickId};OV.prototype._updateClamping=function(){OV._updateClamping(this._billboardCollection,this)};var IA=new Ul,tn=new w;OV._updateClamping=function(V,l){let Z=V._scene;if(!s(Z)||!s(Z.globe)){if(l._heightReference!==ZZ.NONE)throw new I("Height reference is not supported without a scene and globe.");return}let U=Z.globe,A=U.ellipsoid,t=U._surface,m=Z.frameState.mode,i=m!==l._mode;if(l._mode=m,(l._heightReference===ZZ.NONE||i)&&s(l._removeCallbackFunc)&&(l._removeCallbackFunc(),l._removeCallbackFunc=void 0,l._clampedPosition=void 0),l._heightReference===ZZ.NONE||!s(l._position))return;let n=A.cartesianToCartographic(l._position);if(!s(n)){l._actualClampedPosition=void 0;return}s(l._removeCallbackFunc)&&l._removeCallbackFunc();function o(R){if(l._heightReference===ZZ.RELATIVE_TO_GROUND)if(l._mode===IV.SCENE3D){let c=A.cartesianToCartographic(R,IA);c.height+=n.height,A.cartographicToCartesian(c,R)}else R.x+=n.height;l._clampedPosition=w.clone(R,l._clampedPosition)}l._removeCallbackFunc=t.updateHeight(n,o),Ul.clone(n,IA);let h=U.getHeight(n);s(h)&&(IA.height=h),A.cartographicToCartesian(IA,tn),o(tn)};OV.prototype._loadImage=function(){let V=this._billboardCollection._textureAtlas,l=this._imageId,Z=this._image,U=this._imageSubRegion,A,t=this;function m(n){if(t._imageId!==l||t._image!==Z||!qV.equals(t._imageSubRegion,U))return;let o=V.textureCoordinates[n];t._imageWidth=V.texture.width*o.width,t._imageHeight=V.texture.height*o.height,t._imageIndex=n,t._ready=!0,t._image=void 0,t._imageIndexPromise=void 0,Gl(t,Ot);let h=t._billboardCollection._scene;s(h)&&h.frameState.afterRender.push(()=>!0)}if(s(Z)&&(A=V.addImage(l,Z)),s(U)&&(A=V.addSubRegion(l,U)),this._imageIndexPromise=A,!s(A))return;let i=V.getImageIndex(l);if(s(i)&&!s(U)){m(i);return}A.then(m).catch(function(n){console.error(`Error loading image for billboard: ${n}`),t._imageIndexPromise=void 0})};OV.prototype.setImage=function(V,l){if(!s(V))throw new I("id is required.");if(!s(l))throw new I("image is required.");this._imageId!==V&&(this._imageIndex=-1,this._imageSubRegion=void 0,this._imageId=V,this._image=l,s(this._billboardCollection._textureAtlas)&&this._loadImage())};OV.prototype.setImageSubRegion=function(V,l){if(!s(V))throw new I("id is required.");if(!s(l))throw new I("subRegion is required.");this._imageId===V&&qV.equals(this._imageSubRegion,l)||(this._imageIndex=-1,this._imageId=V,this._imageSubRegion=qV.clone(l),s(this._billboardCollection._textureAtlas)&&this._loadImage())};OV.prototype._setTranslate=function(V){if(!s(V))throw new I("value is required.");let l=this._translate;q.equals(l,V)||(q.clone(V,l),Gl(this,mn))};OV.prototype._getActualPosition=function(){return s(this._clampedPosition)?this._clampedPosition:this._actualPosition};OV.prototype._setActualPosition=function(V){s(this._clampedPosition)||w.clone(V,this._actualPosition),Gl(this,_t)};var en=new CV;OV._computeActualPosition=function(V,l,Z,U){return s(V._clampedPosition)?(Z.mode!==V._mode&&V._updateClamping(),V._clampedPosition):Z.mode===IV.SCENE3D?l:(nV.multiplyByPoint(U,l,en),wU.computeActualWgs84Position(Z,en))};var nn=new w;OV._computeScreenSpacePosition=function(V,l,Z,U,A,t){let m=nV.multiplyByPoint(V,l,nn),i=wU.wgs84WithEyeOffsetToWindowCoordinates(A,m,Z,t);if(s(i))return q.add(i,U,i),i};var Mt=new q(0,0);OV.prototype.computeScreenSpacePosition=function(V,l){let Z=this._billboardCollection;if(s(l)||(l=new q),!s(Z))throw new I("Billboard must be in a collection.  Was it removed?");if(!s(V))throw new I("scene is required.");q.clone(this._pixelOffset,Mt),q.add(Mt,this._translate,Mt);let U=Z.modelMatrix,A=this._position;if(s(this._clampedPosition)&&(A=this._clampedPosition,V.mode!==IV.SCENE3D)){let m=V.mapProjection,i=m.ellipsoid,n=m.unproject(A,IA);A=i.cartographicToCartesian(n,nn),U=nV.IDENTITY}return OV._computeScreenSpacePosition(U,A,this._eyeOffset,Mt,V,l)};OV.getScreenSpaceBoundingBox=function(V,l,Z){let U=V.width,A=V.height,t=V.scale;U*=t,A*=t;let m=l.x;V.horizontalOrigin===eZ.RIGHT?m-=U:V.horizontalOrigin===eZ.CENTER&&(m-=U*.5);let i=l.y;return V.verticalOrigin===Al.BOTTOM||V.verticalOrigin===Al.BASELINE?i-=A:V.verticalOrigin===Al.CENTER&&(i-=A*.5),s(Z)||(Z=new qV),Z.x=m,Z.y=i,Z.width=U,Z.height=A,Z};OV.prototype.equals=function(V){return this===V||s(V)&&this._id===V._id&&w.equals(this._position,V._position)&&this._imageId===V._imageId&&this._show===V._show&&this._scale===V._scale&&this._verticalOrigin===V._verticalOrigin&&this._horizontalOrigin===V._horizontalOrigin&&this._heightReference===V._heightReference&&qV.equals(this._imageSubRegion,V._imageSubRegion)&&z.equals(this._color,V._color)&&q.equals(this._pixelOffset,V._pixelOffset)&&q.equals(this._translate,V._translate)&&w.equals(this._eyeOffset,V._eyeOffset)&&_V.equals(this._scaleByDistance,V._scaleByDistance)&&_V.equals(this._translucencyByDistance,V._translucencyByDistance)&&_V.equals(this._pixelOffsetScaleByDistance,V._pixelOffsetScaleByDistance)&&RZ.equals(this._distanceDisplayCondition,V._distanceDisplayCondition)&&this._disableDepthTestDistance===V._disableDepthTestDistance};OV.prototype._destroy=function(){s(this._customData)&&(this._billboardCollection._scene.globe._surface.removeTileCustomData(this._customData),this._customData=void 0),s(this._removeCallbackFunc)&&(this._removeCallbackFunc(),this._removeCallbackFunc=void 0),this.image=void 0,this._pickId=this._pickId&&this._pickId.destroy(),this._billboardCollection=void 0};var nl=OV;function UB(){return!0}function AB(V,l){l=a(l,"This object was destroyed, i.e., destroy() was called.");function Z(){throw new I(l)}for(let U in V)typeof V[U]=="function"&&(V[U]=Z);V.isDestroyed=UB}var fV=AB;var wt={STREAM_DRAW:J.STREAM_DRAW,STATIC_DRAW:J.STATIC_DRAW,DYNAMIC_DRAW:J.DYNAMIC_DRAW,validate:function(V){return V===wt.STREAM_DRAW||V===wt.STATIC_DRAW||V===wt.DYNAMIC_DRAW}},XV=Object.freeze(wt);function xZ(V){if(V=a(V,a.EMPTY_OBJECT),v.defined("options.context",V.context),!s(V.typedArray)&&!s(V.sizeInBytes))throw new I("Either options.sizeInBytes or options.typedArray is required.");if(s(V.typedArray)&&s(V.sizeInBytes))throw new I("Cannot pass in both options.sizeInBytes and options.typedArray.");if(s(V.typedArray)&&(v.typeOf.object("options.typedArray",V.typedArray),v.typeOf.number("options.typedArray.byteLength",V.typedArray.byteLength)),!XV.validate(V.usage))throw new I("usage is invalid.");let l=V.context._gl,Z=V.bufferTarget,U=V.typedArray,A=V.sizeInBytes,t=V.usage,m=s(U);m&&(A=U.byteLength),v.typeOf.number.greaterThan("sizeInBytes",A,0);let i=l.createBuffer();l.bindBuffer(Z,i),l.bufferData(Z,m?U:A,t),l.bindBuffer(Z,null),this._id=jl(),this._gl=l,this._webgl2=V.context._webgl2,this._bufferTarget=Z,this._sizeInBytes=A,this._usage=t,this._buffer=i,this.vertexArrayDestroyable=!0}xZ.createVertexBuffer=function(V){return v.defined("options.context",V.context),new xZ({context:V.context,bufferTarget:J.ARRAY_BUFFER,typedArray:V.typedArray,sizeInBytes:V.sizeInBytes,usage:V.usage})};xZ.createIndexBuffer=function(V){if(v.defined("options.context",V.context),!rW.validate(V.indexDatatype))throw new I("Invalid indexDatatype.");if(V.indexDatatype===rW.UNSIGNED_INT&&!V.context.elementIndexUint)throw new I("IndexDatatype.UNSIGNED_INT requires OES_element_index_uint, which is not supported on this system.  Check context.elementIndexUint.");let l=V.context,Z=V.indexDatatype,U=rW.getSizeInBytes(Z),A=new xZ({context:l,bufferTarget:J.ELEMENT_ARRAY_BUFFER,typedArray:V.typedArray,sizeInBytes:V.sizeInBytes,usage:V.usage}),t=A.sizeInBytes/U;return Object.defineProperties(A,{indexDatatype:{get:function(){return Z}},bytesPerIndex:{get:function(){return U}},numberOfIndices:{get:function(){return t}}}),A};Object.defineProperties(xZ.prototype,{sizeInBytes:{get:function(){return this._sizeInBytes}},usage:{get:function(){return this._usage}}});xZ.prototype._getBuffer=function(){return this._buffer};xZ.prototype.copyFromArrayView=function(V,l){l=a(l,0),v.defined("arrayView",V),v.typeOf.number.lessThanOrEquals("offsetInBytes + arrayView.byteLength",l+V.byteLength,this._sizeInBytes);let Z=this._gl,U=this._bufferTarget;Z.bindBuffer(U,this._buffer),Z.bufferSubData(U,l,V),Z.bindBuffer(U,null)};xZ.prototype.copyFromBuffer=function(V,l,Z,U){if(!this._webgl2)throw new I("A WebGL 2 context is required.");if(!s(V))throw new I("readBuffer must be defined.");if(!s(U)||U<=0)throw new I("sizeInBytes must be defined and be greater than zero.");if(!s(l)||l<0||l+U>V._sizeInBytes)throw new I("readOffset must be greater than or equal to zero and readOffset + sizeInBytes must be less than of equal to readBuffer.sizeInBytes.");if(!s(Z)||Z<0||Z+U>this._sizeInBytes)throw new I("writeOffset must be greater than or equal to zero and writeOffset + sizeInBytes must be less than of equal to this.sizeInBytes.");if(this._buffer===V._buffer&&(Z>=l&&Z<l+U||l>Z&&l<Z+U))throw new I("When readBuffer is equal to this, the ranges [readOffset + sizeInBytes) and [writeOffset, writeOffset + sizeInBytes) must not overlap.");if(this._bufferTarget===J.ELEMENT_ARRAY_BUFFER&&V._bufferTarget!==J.ELEMENT_ARRAY_BUFFER||this._bufferTarget!==J.ELEMENT_ARRAY_BUFFER&&V._bufferTarget===J.ELEMENT_ARRAY_BUFFER)throw new I("Can not copy an index buffer into another buffer type.");let A=J.COPY_READ_BUFFER,t=J.COPY_WRITE_BUFFER,m=this._gl;m.bindBuffer(t,this._buffer),m.bindBuffer(A,V._buffer),m.copyBufferSubData(A,t,l,Z,U),m.bindBuffer(t,null),m.bindBuffer(A,null)};xZ.prototype.getBufferData=function(V,l,Z,U){if(l=a(l,0),Z=a(Z,0),!this._webgl2)throw new I("A WebGL 2 context is required.");if(!s(V))throw new I("arrayView is required.");let A,t,m=V.byteLength;if(s(U)?(A=U,s(m)?t=1:(m=V.length,t=V.BYTES_PER_ELEMENT)):s(m)?(A=m-Z,t=1):(m=V.length,A=m-Z,t=V.BYTES_PER_ELEMENT),Z<0||Z>m)throw new I("destinationOffset must be greater than zero and less than the arrayView length.");if(Z+A>m)throw new I("destinationOffset + length must be less than or equal to the arrayViewLength.");if(l<0||l>this._sizeInBytes)throw new I("sourceOffset must be greater than zero and less than the buffers size.");if(l+A*t>this._sizeInBytes)throw new I("sourceOffset + length must be less than the buffers size.");let i=this._gl,n=J.COPY_READ_BUFFER;i.bindBuffer(n,this._buffer),i.getBufferSubData(n,l,V,Z,U),i.bindBuffer(n,null)};xZ.prototype.isDestroyed=function(){return!1};xZ.prototype.destroy=function(){return this._gl.deleteBuffer(this._buffer),fV(this)};var $Z=xZ;var Ql={_maximumCombinedTextureImageUnits:0,_maximumCubeMapSize:0,_maximumFragmentUniformVectors:0,_maximumTextureImageUnits:0,_maximumRenderbufferSize:0,_maximumTextureSize:0,_maximumVaryingVectors:0,_maximumVertexAttributes:0,_maximumVertexTextureImageUnits:0,_maximumVertexUniformVectors:0,_minimumAliasedLineWidth:0,_maximumAliasedLineWidth:0,_minimumAliasedPointSize:0,_maximumAliasedPointSize:0,_maximumViewportWidth:0,_maximumViewportHeight:0,_maximumTextureFilterAnisotropy:0,_maximumDrawBuffers:0,_maximumColorAttachments:0,_maximumSamples:0,_highpFloatSupported:!1,_highpIntSupported:!1};Object.defineProperties(Ql,{maximumCombinedTextureImageUnits:{get:function(){return Ql._maximumCombinedTextureImageUnits}},maximumCubeMapSize:{get:function(){return Ql._maximumCubeMapSize}},maximumFragmentUniformVectors:{get:function(){return Ql._maximumFragmentUniformVectors}},maximumTextureImageUnits:{get:function(){return Ql._maximumTextureImageUnits}},maximumRenderbufferSize:{get:function(){return Ql._maximumRenderbufferSize}},maximumTextureSize:{get:function(){return Ql._maximumTextureSize}},maximumVaryingVectors:{get:function(){return Ql._maximumVaryingVectors}},maximumVertexAttributes:{get:function(){return Ql._maximumVertexAttributes}},maximumVertexTextureImageUnits:{get:function(){return Ql._maximumVertexTextureImageUnits}},maximumVertexUniformVectors:{get:function(){return Ql._maximumVertexUniformVectors}},minimumAliasedLineWidth:{get:function(){return Ql._minimumAliasedLineWidth}},maximumAliasedLineWidth:{get:function(){return Ql._maximumAliasedLineWidth}},minimumAliasedPointSize:{get:function(){return Ql._minimumAliasedPointSize}},maximumAliasedPointSize:{get:function(){return Ql._maximumAliasedPointSize}},maximumViewportWidth:{get:function(){return Ql._maximumViewportWidth}},maximumViewportHeight:{get:function(){return Ql._maximumViewportHeight}},maximumTextureFilterAnisotropy:{get:function(){return Ql._maximumTextureFilterAnisotropy}},maximumDrawBuffers:{get:function(){return Ql._maximumDrawBuffers}},maximumColorAttachments:{get:function(){return Ql._maximumColorAttachments}},maximumSamples:{get:function(){return Ql._maximumSamples}},highpFloatSupported:{get:function(){return Ql._highpFloatSupported}},highpIntSupported:{get:function(){return Ql._highpIntSupported}}});var $V=Ql;var Il={CULL:1,OCCLUDE:2,EXECUTE_IN_CLOSEST_FRUSTUM:4,DEBUG_SHOW_BOUNDING_VOLUME:8,CAST_SHADOWS:16,RECEIVE_SHADOWS:32,PICK_ONLY:64,DEPTH_FOR_TRANSLUCENT_CLASSIFICATION:128};function cA(V){V=a(V,a.EMPTY_OBJECT),this._boundingVolume=V.boundingVolume,this._orientedBoundingBox=V.orientedBoundingBox,this._modelMatrix=V.modelMatrix,this._primitiveType=a(V.primitiveType,pt.TRIANGLES),this._vertexArray=V.vertexArray,this._count=V.count,this._offset=a(V.offset,0),this._instanceCount=a(V.instanceCount,0),this._shaderProgram=V.shaderProgram,this._uniformMap=V.uniformMap,this._renderState=V.renderState,this._framebuffer=V.framebuffer,this._pass=V.pass,this._owner=V.owner,this._debugOverlappingFrustums=0,this._pickId=V.pickId,this._flags=0,this.cull=a(V.cull,!0),this.occlude=a(V.occlude,!0),this.executeInClosestFrustum=a(V.executeInClosestFrustum,!1),this.debugShowBoundingVolume=a(V.debugShowBoundingVolume,!1),this.castShadows=a(V.castShadows,!1),this.receiveShadows=a(V.receiveShadows,!1),this.pickOnly=a(V.pickOnly,!1),this.depthForTranslucentClassification=a(V.depthForTranslucentClassification,!1),this.dirty=!0,this.lastDirtyTime=0,this.derivedCommands={}}function sZ(V,l){return(V._flags&l)===l}function PW(V,l,Z){Z?V._flags|=l:V._flags&=~l}Object.defineProperties(cA.prototype,{boundingVolume:{get:function(){return this._boundingVolume},set:function(V){this._boundingVolume!==V&&(this._boundingVolume=V,this.dirty=!0)}},orientedBoundingBox:{get:function(){return this._orientedBoundingBox},set:function(V){this._orientedBoundingBox!==V&&(this._orientedBoundingBox=V,this.dirty=!0)}},cull:{get:function(){return sZ(this,Il.CULL)},set:function(V){sZ(this,Il.CULL)!==V&&(PW(this,Il.CULL,V),this.dirty=!0)}},occlude:{get:function(){return sZ(this,Il.OCCLUDE)},set:function(V){sZ(this,Il.OCCLUDE)!==V&&(PW(this,Il.OCCLUDE,V),this.dirty=!0)}},modelMatrix:{get:function(){return this._modelMatrix},set:function(V){this._modelMatrix!==V&&(this._modelMatrix=V,this.dirty=!0)}},primitiveType:{get:function(){return this._primitiveType},set:function(V){this._primitiveType!==V&&(this._primitiveType=V,this.dirty=!0)}},vertexArray:{get:function(){return this._vertexArray},set:function(V){this._vertexArray!==V&&(this._vertexArray=V,this.dirty=!0)}},count:{get:function(){return this._count},set:function(V){this._count!==V&&(this._count=V,this.dirty=!0)}},offset:{get:function(){return this._offset},set:function(V){this._offset!==V&&(this._offset=V,this.dirty=!0)}},instanceCount:{get:function(){return this._instanceCount},set:function(V){this._instanceCount!==V&&(this._instanceCount=V,this.dirty=!0)}},shaderProgram:{get:function(){return this._shaderProgram},set:function(V){this._shaderProgram!==V&&(this._shaderProgram=V,this.dirty=!0)}},castShadows:{get:function(){return sZ(this,Il.CAST_SHADOWS)},set:function(V){sZ(this,Il.CAST_SHADOWS)!==V&&(PW(this,Il.CAST_SHADOWS,V),this.dirty=!0)}},receiveShadows:{get:function(){return sZ(this,Il.RECEIVE_SHADOWS)},set:function(V){sZ(this,Il.RECEIVE_SHADOWS)!==V&&(PW(this,Il.RECEIVE_SHADOWS,V),this.dirty=!0)}},uniformMap:{get:function(){return this._uniformMap},set:function(V){this._uniformMap!==V&&(this._uniformMap=V,this.dirty=!0)}},renderState:{get:function(){return this._renderState},set:function(V){this._renderState!==V&&(this._renderState=V,this.dirty=!0)}},framebuffer:{get:function(){return this._framebuffer},set:function(V){this._framebuffer!==V&&(this._framebuffer=V,this.dirty=!0)}},pass:{get:function(){return this._pass},set:function(V){this._pass!==V&&(this._pass=V,this.dirty=!0)}},executeInClosestFrustum:{get:function(){return sZ(this,Il.EXECUTE_IN_CLOSEST_FRUSTUM)},set:function(V){sZ(this,Il.EXECUTE_IN_CLOSEST_FRUSTUM)!==V&&(PW(this,Il.EXECUTE_IN_CLOSEST_FRUSTUM,V),this.dirty=!0)}},owner:{get:function(){return this._owner},set:function(V){this._owner!==V&&(this._owner=V,this.dirty=!0)}},debugShowBoundingVolume:{get:function(){return sZ(this,Il.DEBUG_SHOW_BOUNDING_VOLUME)},set:function(V){sZ(this,Il.DEBUG_SHOW_BOUNDING_VOLUME)!==V&&(PW(this,Il.DEBUG_SHOW_BOUNDING_VOLUME,V),this.dirty=!0)}},debugOverlappingFrustums:{get:function(){return this._debugOverlappingFrustums},set:function(V){this._debugOverlappingFrustums!==V&&(this._debugOverlappingFrustums=V,this.dirty=!0)}},pickId:{get:function(){return this._pickId},set:function(V){this._pickId!==V&&(this._pickId=V,this.dirty=!0)}},pickOnly:{get:function(){return sZ(this,Il.PICK_ONLY)},set:function(V){sZ(this,Il.PICK_ONLY)!==V&&(PW(this,Il.PICK_ONLY,V),this.dirty=!0)}},depthForTranslucentClassification:{get:function(){return sZ(this,Il.DEPTH_FOR_TRANSLUCENT_CLASSIFICATION)},set:function(V){sZ(this,Il.DEPTH_FOR_TRANSLUCENT_CLASSIFICATION)!==V&&(PW(this,Il.DEPTH_FOR_TRANSLUCENT_CLASSIFICATION,V),this.dirty=!0)}}});cA.shallowClone=function(V,l){if(s(V))return s(l)||(l=new cA),l._boundingVolume=V._boundingVolume,l._orientedBoundingBox=V._orientedBoundingBox,l._modelMatrix=V._modelMatrix,l._primitiveType=V._primitiveType,l._vertexArray=V._vertexArray,l._count=V._count,l._offset=V._offset,l._instanceCount=V._instanceCount,l._shaderProgram=V._shaderProgram,l._uniformMap=V._uniformMap,l._renderState=V._renderState,l._framebuffer=V._framebuffer,l._pass=V._pass,l._owner=V._owner,l._debugOverlappingFrustums=V._debugOverlappingFrustums,l._pickId=V._pickId,l._flags=V._flags,l.dirty=!0,l.lastDirtyTime=0,l};cA.prototype.execute=function(V,l){V.draw(this,l)};var tl=cA;var tB={ENVIRONMENT:0,COMPUTE:1,GLOBE:2,TERRAIN_CLASSIFICATION:3,CESIUM_3D_TILE:4,CESIUM_3D_TILE_CLASSIFICATION:5,CESIUM_3D_TILE_CLASSIFICATION_IGNORE_SHOW:6,OPAQUE:7,TRANSLUCENT:8,VOXELS:9,OVERLAY:10,NUMBER_OF_PASSES:11},Nl=Object.freeze(tB);function Gn(V){if(typeof V!="object"||V===null)return V;let l,Z=Object.keys(V);for(let U=0;U<Z.length;U++)l=Z[U],V.hasOwnProperty(l)&&l!=="_applyFunctions"&&(V[l]=Gn(V[l]));return Object.freeze(V)}var sn=Gn;function an(V){return V===J.FUNC_ADD||V===J.FUNC_SUBTRACT||V===J.FUNC_REVERSE_SUBTRACT||V===J.MIN||V===J.MAX}function Yt(V){return V===J.ZERO||V===J.ONE||V===J.SRC_COLOR||V===J.ONE_MINUS_SRC_COLOR||V===J.DST_COLOR||V===J.ONE_MINUS_DST_COLOR||V===J.SRC_ALPHA||V===J.ONE_MINUS_SRC_ALPHA||V===J.DST_ALPHA||V===J.ONE_MINUS_DST_ALPHA||V===J.CONSTANT_COLOR||V===J.ONE_MINUS_CONSTANT_COLOR||V===J.CONSTANT_ALPHA||V===J.ONE_MINUS_CONSTANT_ALPHA||V===J.SRC_ALPHA_SATURATE}function eB(V){return V===J.FRONT||V===J.BACK||V===J.FRONT_AND_BACK}function mB(V){return V===J.NEVER||V===J.LESS||V===J.EQUAL||V===J.LEQUAL||V===J.GREATER||V===J.NOTEQUAL||V===J.GEQUAL||V===J.ALWAYS}function rn(V){return V===J.NEVER||V===J.LESS||V===J.EQUAL||V===J.LEQUAL||V===J.GREATER||V===J.NOTEQUAL||V===J.GEQUAL||V===J.ALWAYS}function YU(V){return V===J.ZERO||V===J.KEEP||V===J.REPLACE||V===J.INCR||V===J.DECR||V===J.INVERT||V===J.INCR_WRAP||V===J.DECR_WRAP}function hW(V){let l=a(V,a.EMPTY_OBJECT),Z=a(l.cull,a.EMPTY_OBJECT),U=a(l.polygonOffset,a.EMPTY_OBJECT),A=a(l.scissorTest,a.EMPTY_OBJECT),t=a(A.rectangle,a.EMPTY_OBJECT),m=a(l.depthRange,a.EMPTY_OBJECT),i=a(l.depthTest,a.EMPTY_OBJECT),n=a(l.colorMask,a.EMPTY_OBJECT),o=a(l.blending,a.EMPTY_OBJECT),h=a(o.color,a.EMPTY_OBJECT),R=a(l.stencilTest,a.EMPTY_OBJECT),c=a(R.frontOperation,a.EMPTY_OBJECT),Q=a(R.backOperation,a.EMPTY_OBJECT),T=a(l.sampleCoverage,a.EMPTY_OBJECT),S=l.viewport;if(this.frontFace=a(l.frontFace,Oe.COUNTER_CLOCKWISE),this.cull={enabled:a(Z.enabled,!1),face:a(Z.face,J.BACK)},this.lineWidth=a(l.lineWidth,1),this.polygonOffset={enabled:a(U.enabled,!1),factor:a(U.factor,0),units:a(U.units,0)},this.scissorTest={enabled:a(A.enabled,!1),rectangle:qV.clone(t)},this.depthRange={near:a(m.near,0),far:a(m.far,1)},this.depthTest={enabled:a(i.enabled,!1),func:a(i.func,J.LESS)},this.colorMask={red:a(n.red,!0),green:a(n.green,!0),blue:a(n.blue,!0),alpha:a(n.alpha,!0)},this.depthMask=a(l.depthMask,!0),this.stencilMask=a(l.stencilMask,-1),this.blending={enabled:a(o.enabled,!1),color:new z(a(h.red,0),a(h.green,0),a(h.blue,0),a(h.alpha,0)),equationRgb:a(o.equationRgb,J.FUNC_ADD),equationAlpha:a(o.equationAlpha,J.FUNC_ADD),functionSourceRgb:a(o.functionSourceRgb,J.ONE),functionSourceAlpha:a(o.functionSourceAlpha,J.ONE),functionDestinationRgb:a(o.functionDestinationRgb,J.ZERO),functionDestinationAlpha:a(o.functionDestinationAlpha,J.ZERO)},this.stencilTest={enabled:a(R.enabled,!1),frontFunction:a(R.frontFunction,J.ALWAYS),backFunction:a(R.backFunction,J.ALWAYS),reference:a(R.reference,0),mask:a(R.mask,-1),frontOperation:{fail:a(c.fail,J.KEEP),zFail:a(c.zFail,J.KEEP),zPass:a(c.zPass,J.KEEP)},backOperation:{fail:a(Q.fail,J.KEEP),zFail:a(Q.zFail,J.KEEP),zPass:a(Q.zPass,J.KEEP)}},this.sampleCoverage={enabled:a(T.enabled,!1),value:a(T.value,1),invert:a(T.invert,!1)},this.viewport=s(S)?new qV(S.x,S.y,S.width,S.height):void 0,this.lineWidth<$V.minimumAliasedLineWidth||this.lineWidth>$V.maximumAliasedLineWidth)throw new I("renderState.lineWidth is out of range.  Check minimumAliasedLineWidth and maximumAliasedLineWidth.");if(!Oe.validate(this.frontFace))throw new I("Invalid renderState.frontFace.");if(!eB(this.cull.face))throw new I("Invalid renderState.cull.face.");if(this.scissorTest.rectangle.width<0||this.scissorTest.rectangle.height<0)throw new I("renderState.scissorTest.rectangle.width and renderState.scissorTest.rectangle.height must be greater than or equal to zero.");if(this.depthRange.near>this.depthRange.far)throw new I("renderState.depthRange.near can not be greater than renderState.depthRange.far.");if(this.depthRange.near<0)throw new I("renderState.depthRange.near must be greater than or equal to zero.");if(this.depthRange.far>1)throw new I("renderState.depthRange.far must be less than or equal to one.");if(!mB(this.depthTest.func))throw new I("Invalid renderState.depthTest.func.");if(this.blending.color.red<0||this.blending.color.red>1||this.blending.color.green<0||this.blending.color.green>1||this.blending.color.blue<0||this.blending.color.blue>1||this.blending.color.alpha<0||this.blending.color.alpha>1)throw new I("renderState.blending.color components must be greater than or equal to zero and less than or equal to one.");if(!an(this.blending.equationRgb))throw new I("Invalid renderState.blending.equationRgb.");if(!an(this.blending.equationAlpha))throw new I("Invalid renderState.blending.equationAlpha.");if(!Yt(this.blending.functionSourceRgb))throw new I("Invalid renderState.blending.functionSourceRgb.");if(!Yt(this.blending.functionSourceAlpha))throw new I("Invalid renderState.blending.functionSourceAlpha.");if(!Yt(this.blending.functionDestinationRgb))throw new I("Invalid renderState.blending.functionDestinationRgb.");if(!Yt(this.blending.functionDestinationAlpha))throw new I("Invalid renderState.blending.functionDestinationAlpha.");if(!rn(this.stencilTest.frontFunction))throw new I("Invalid renderState.stencilTest.frontFunction.");if(!rn(this.stencilTest.backFunction))throw new I("Invalid renderState.stencilTest.backFunction.");if(!YU(this.stencilTest.frontOperation.fail))throw new I("Invalid renderState.stencilTest.frontOperation.fail.");if(!YU(this.stencilTest.frontOperation.zFail))throw new I("Invalid renderState.stencilTest.frontOperation.zFail.");if(!YU(this.stencilTest.frontOperation.zPass))throw new I("Invalid renderState.stencilTest.frontOperation.zPass.");if(!YU(this.stencilTest.backOperation.fail))throw new I("Invalid renderState.stencilTest.backOperation.fail.");if(!YU(this.stencilTest.backOperation.zFail))throw new I("Invalid renderState.stencilTest.backOperation.zFail.");if(!YU(this.stencilTest.backOperation.zPass))throw new I("Invalid renderState.stencilTest.backOperation.zPass.");if(s(this.viewport)){if(this.viewport.width<0)throw new I("renderState.viewport.width must be greater than or equal to zero.");if(this.viewport.height<0)throw new I("renderState.viewport.height must be greater than or equal to zero.");if(this.viewport.width>$V.maximumViewportWidth)throw new I(`renderState.viewport.width must be less than or equal to the maximum viewport width (${$V.maximumViewportWidth.toString()}).  Check maximumViewportWidth.`);if(this.viewport.height>$V.maximumViewportHeight)throw new I(`renderState.viewport.height must be less than or equal to the maximum viewport height (${$V.maximumViewportHeight.toString()}).  Check maximumViewportHeight.`)}this.id=0,this._applyFunctions=[]}var iB=0,oW={};hW.fromCache=function(V){let l=JSON.stringify(V),Z=oW[l];if(s(Z))return++Z.referenceCount,Z.state;let U=new hW(V),A=JSON.stringify(U);return Z=oW[A],s(Z)||(U.id=iB++,U=sn(U),Z={referenceCount:0,state:U},oW[A]=Z),++Z.referenceCount,oW[l]={referenceCount:1,state:Z.state},Z.state};hW.removeFromCache=function(V){let l=new hW(V),Z=JSON.stringify(l),U=oW[Z],A=JSON.stringify(V),t=oW[A];s(t)&&(--t.referenceCount,t.referenceCount===0&&(delete oW[A],s(U)&&--U.referenceCount)),s(U)&&U.referenceCount===0&&delete oW[Z]};hW.getCache=function(){return oW};hW.clearCache=function(){oW={}};function TU(V,l,Z){Z?V.enable(l):V.disable(l)}function on(V,l){V.frontFace(l.frontFace)}function hn(V,l){let Z=l.cull,U=Z.enabled;TU(V,V.CULL_FACE,U),U&&V.cullFace(Z.face)}function Rn(V,l){V.lineWidth(l.lineWidth)}function dn(V,l){let Z=l.polygonOffset,U=Z.enabled;TU(V,V.POLYGON_OFFSET_FILL,U),U&&V.polygonOffset(Z.factor,Z.units)}function Tn(V,l,Z){let U=l.scissorTest,A=s(Z.scissorTest)?Z.scissorTest.enabled:U.enabled;if(TU(V,V.SCISSOR_TEST,A),A){let t=s(Z.scissorTest)?Z.scissorTest.rectangle:U.rectangle;V.scissor(t.x,t.y,t.width,t.height)}}function Bn(V,l){let Z=l.depthRange;V.depthRange(Z.near,Z.far)}function Fn(V,l){let Z=l.depthTest,U=Z.enabled;TU(V,V.DEPTH_TEST,U),U&&V.depthFunc(Z.func)}function Qn(V,l){let Z=l.colorMask;V.colorMask(Z.red,Z.green,Z.blue,Z.alpha)}function In(V,l){V.depthMask(l.depthMask)}function cn(V,l){V.stencilMask(l.stencilMask)}function nB(V,l){V.blendColor(l.red,l.green,l.blue,l.alpha)}function Sn(V,l,Z){let U=l.blending,A=s(Z.blendingEnabled)?Z.blendingEnabled:U.enabled;TU(V,V.BLEND,A),A&&(nB(V,U.color),V.blendEquationSeparate(U.equationRgb,U.equationAlpha),V.blendFuncSeparate(U.functionSourceRgb,U.functionDestinationRgb,U.functionSourceAlpha,U.functionDestinationAlpha))}function Cn(V,l){let Z=l.stencilTest,U=Z.enabled;if(TU(V,V.STENCIL_TEST,U),U){let A=Z.frontFunction,t=Z.backFunction,m=Z.reference,i=Z.mask;V.stencilFunc(A,m,i),V.stencilFuncSeparate(V.BACK,t,m,i),V.stencilFuncSeparate(V.FRONT,A,m,i);let n=Z.frontOperation,o=n.fail,h=n.zFail,R=n.zPass;V.stencilOpSeparate(V.FRONT,o,h,R);let c=Z.backOperation,Q=c.fail,T=c.zFail,S=c.zPass;V.stencilOpSeparate(V.BACK,Q,T,S)}}function gn(V,l){let Z=l.sampleCoverage,U=Z.enabled;TU(V,V.SAMPLE_COVERAGE,U),U&&V.sampleCoverage(Z.value,Z.invert)}var GB=new qV;function Nn(V,l,Z){let U=a(l.viewport,Z.viewport);s(U)||(U=GB,U.width=Z.context.drawingBufferWidth,U.height=Z.context.drawingBufferHeight),Z.context.uniformState.viewport=U,V.viewport(U.x,U.y,U.width,U.height)}hW.apply=function(V,l,Z){on(V,l),hn(V,l),Rn(V,l),dn(V,l),Bn(V,l),Fn(V,l),Qn(V,l),In(V,l),cn(V,l),Cn(V,l),gn(V,l),Tn(V,l,Z),Sn(V,l,Z),Nn(V,l,Z)};function sB(V,l){let Z=[];return V.frontFace!==l.frontFace&&Z.push(on),(V.cull.enabled!==l.cull.enabled||V.cull.face!==l.cull.face)&&Z.push(hn),V.lineWidth!==l.lineWidth&&Z.push(Rn),(V.polygonOffset.enabled!==l.polygonOffset.enabled||V.polygonOffset.factor!==l.polygonOffset.factor||V.polygonOffset.units!==l.polygonOffset.units)&&Z.push(dn),(V.depthRange.near!==l.depthRange.near||V.depthRange.far!==l.depthRange.far)&&Z.push(Bn),(V.depthTest.enabled!==l.depthTest.enabled||V.depthTest.func!==l.depthTest.func)&&Z.push(Fn),(V.colorMask.red!==l.colorMask.red||V.colorMask.green!==l.colorMask.green||V.colorMask.blue!==l.colorMask.blue||V.colorMask.alpha!==l.colorMask.alpha)&&Z.push(Qn),V.depthMask!==l.depthMask&&Z.push(In),V.stencilMask!==l.stencilMask&&Z.push(cn),(V.stencilTest.enabled!==l.stencilTest.enabled||V.stencilTest.frontFunction!==l.stencilTest.frontFunction||V.stencilTest.backFunction!==l.stencilTest.backFunction||V.stencilTest.reference!==l.stencilTest.reference||V.stencilTest.mask!==l.stencilTest.mask||V.stencilTest.frontOperation.fail!==l.stencilTest.frontOperation.fail||V.stencilTest.frontOperation.zFail!==l.stencilTest.frontOperation.zFail||V.stencilTest.backOperation.fail!==l.stencilTest.backOperation.fail||V.stencilTest.backOperation.zFail!==l.stencilTest.backOperation.zFail||V.stencilTest.backOperation.zPass!==l.stencilTest.backOperation.zPass)&&Z.push(Cn),(V.sampleCoverage.enabled!==l.sampleCoverage.enabled||V.sampleCoverage.value!==l.sampleCoverage.value||V.sampleCoverage.invert!==l.sampleCoverage.invert)&&Z.push(gn),Z}hW.partialApply=function(V,l,Z,U,A,t){if(l!==Z){let h=Z._applyFunctions[l.id];s(h)||(h=sB(l,Z),Z._applyFunctions[l.id]=h);let R=h.length;for(let c=0;c<R;++c)h[c](V,Z)}let m=s(U.scissorTest)?U.scissorTest:l.scissorTest,i=s(A.scissorTest)?A.scissorTest:Z.scissorTest;(m!==i||t)&&Tn(V,Z,A);let n=s(U.blendingEnabled)?U.blendingEnabled:l.blending.enabled,o=s(A.blendingEnabled)?A.blendingEnabled:Z.blending.enabled;(n!==o||o&&l.blending!==Z.blending)&&Sn(V,Z,A),(l!==Z||U!==A||U.context!==A.context)&&Nn(V,Z,A)};hW.getState=function(V){if(!s(V))throw new I("renderState is required.");return{frontFace:V.frontFace,cull:{enabled:V.cull.enabled,face:V.cull.face},lineWidth:V.lineWidth,polygonOffset:{enabled:V.polygonOffset.enabled,factor:V.polygonOffset.factor,units:V.polygonOffset.units},scissorTest:{enabled:V.scissorTest.enabled,rectangle:qV.clone(V.scissorTest.rectangle)},depthRange:{near:V.depthRange.near,far:V.depthRange.far},depthTest:{enabled:V.depthTest.enabled,func:V.depthTest.func},colorMask:{red:V.colorMask.red,green:V.colorMask.green,blue:V.colorMask.blue,alpha:V.colorMask.alpha},depthMask:V.depthMask,stencilMask:V.stencilMask,blending:{enabled:V.blending.enabled,color:z.clone(V.blending.color),equationRgb:V.blending.equationRgb,equationAlpha:V.blending.equationAlpha,functionSourceRgb:V.blending.functionSourceRgb,functionSourceAlpha:V.blending.functionSourceAlpha,functionDestinationRgb:V.blending.functionDestinationRgb,functionDestinationAlpha:V.blending.functionDestinationAlpha},stencilTest:{enabled:V.stencilTest.enabled,frontFunction:V.stencilTest.frontFunction,backFunction:V.stencilTest.backFunction,reference:V.stencilTest.reference,mask:V.stencilTest.mask,frontOperation:{fail:V.stencilTest.frontOperation.fail,zFail:V.stencilTest.frontOperation.zFail,zPass:V.stencilTest.frontOperation.zPass},backOperation:{fail:V.stencilTest.backOperation.fail,zFail:V.stencilTest.backOperation.zFail,zPass:V.stencilTest.backOperation.zPass}},sampleCoverage:{enabled:V.sampleCoverage.enabled,value:V.sampleCoverage.value,invert:V.sampleCoverage.invert},viewport:s(V.viewport)?qV.clone(V.viewport):void 0}};var sl=hW;var aB=new w;function aV(V){this._size=V.size,this._datatype=V.datatype,this.getValue=V.getValue}var WZ={};WZ[J.FLOAT]="float";WZ[J.FLOAT_VEC2]="vec2";WZ[J.FLOAT_VEC3]="vec3";WZ[J.FLOAT_VEC4]="vec4";WZ[J.INT]="int";WZ[J.INT_VEC2]="ivec2";WZ[J.INT_VEC3]="ivec3";WZ[J.INT_VEC4]="ivec4";WZ[J.BOOL]="bool";WZ[J.BOOL_VEC2]="bvec2";WZ[J.BOOL_VEC3]="bvec3";WZ[J.BOOL_VEC4]="bvec4";WZ[J.FLOAT_MAT2]="mat2";WZ[J.FLOAT_MAT3]="mat3";WZ[J.FLOAT_MAT4]="mat4";WZ[J.SAMPLER_2D]="sampler2D";WZ[J.SAMPLER_CUBE]="samplerCube";aV.prototype.getDeclaration=function(V){let l=`uniform ${WZ[this._datatype]} ${V}`,Z=this._size;return Z===1?l+=";":l+=`[${Z.toString()}];`,l};var rB={czm_viewport:new aV({size:1,datatype:J.FLOAT_VEC4,getValue:function(V){return V.viewportCartesian4}}),czm_viewportOrthographic:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.viewportOrthographic}}),czm_viewportTransformation:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.viewportTransformation}}),czm_globeDepthTexture:new aV({size:1,datatype:J.SAMPLER_2D,getValue:function(V){return V.globeDepthTexture}}),czm_model:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.model}}),czm_inverseModel:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.inverseModel}}),czm_view:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.view}}),czm_view3D:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.view3D}}),czm_viewRotation:new aV({size:1,datatype:J.FLOAT_MAT3,getValue:function(V){return V.viewRotation}}),czm_viewRotation3D:new aV({size:1,datatype:J.FLOAT_MAT3,getValue:function(V){return V.viewRotation3D}}),czm_inverseView:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.inverseView}}),czm_inverseView3D:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.inverseView3D}}),czm_inverseViewRotation:new aV({size:1,datatype:J.FLOAT_MAT3,getValue:function(V){return V.inverseViewRotation}}),czm_inverseViewRotation3D:new aV({size:1,datatype:J.FLOAT_MAT3,getValue:function(V){return V.inverseViewRotation3D}}),czm_projection:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.projection}}),czm_inverseProjection:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.inverseProjection}}),czm_infiniteProjection:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.infiniteProjection}}),czm_modelView:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.modelView}}),czm_modelView3D:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.modelView3D}}),czm_modelViewRelativeToEye:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.modelViewRelativeToEye}}),czm_inverseModelView:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.inverseModelView}}),czm_inverseModelView3D:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.inverseModelView3D}}),czm_viewProjection:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.viewProjection}}),czm_inverseViewProjection:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.inverseViewProjection}}),czm_modelViewProjection:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.modelViewProjection}}),czm_inverseModelViewProjection:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.inverseModelViewProjection}}),czm_modelViewProjectionRelativeToEye:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.modelViewProjectionRelativeToEye}}),czm_modelViewInfiniteProjection:new aV({size:1,datatype:J.FLOAT_MAT4,getValue:function(V){return V.modelViewInfiniteProjection}}),czm_orthographicIn3D:new aV({size:1,datatype:J.FLOAT,getValue:function(V){return V.orthographicIn3D?1:0}}),czm_normal:new aV({size:1,datatype:J.FLOAT_MAT3,getValue:function(V){return V.normal}}),czm_normal3D:new aV({size:1,datatype:J.FLOAT_MAT3,getValue:function(V){return V.normal3D}}),czm_inverseNormal:new aV({size:1,datatype:J.FLOAT_MAT3,getValue:function(V){return V.inverseNormal}}),czm_inverseNormal3D:new aV({size:1,datatype:J.FLOAT_MAT3,getValue:function(V){return V.inverseNormal3D}}),czm_eyeHeight:new aV({size:1,datatype:J.FLOAT,getValue:function(V){return V.eyeHeight}}),czm_eyeHeight2D:new aV({size:1,datatype:J.FLOAT_VEC2,getValue:function(V){return V.eyeHeight2D}}),czm_entireFrustum:new aV({size:1,datatype:J.FLOAT_VEC2,getValue:function(V){return V.entireFrustum}}),czm_currentFrustum:new aV({size:1,datatype:J.FLOAT_VEC2,getValue:function(V){return V.currentFrustum}}),czm_frustumPlanes:new aV({size:1,datatype:J.FLOAT_VEC4,getValue:function(V){return V.frustumPlanes}}),czm_farDepthFromNearPlusOne:new aV({size:1,datatype:J.FLOAT,getValue:function(V){return V.farDepthFromNearPlusOne}}),czm_log2FarDepthFromNearPlusOne:new aV({size:1,datatype:J.FLOAT,getValue:function(V){return V.log2FarDepthFromNearPlusOne}}),czm_oneOverLog2FarDepthFromNearPlusOne:new aV({size:1,datatype:J.FLOAT,getValue:function(V){return V.oneOverLog2FarDepthFromNearPlusOne}}),czm_sunPositionWC:new aV({size:1,datatype:J.FLOAT_VEC3,getValue:function(V){return V.sunPositionWC}}),czm_sunPositionColumbusView:new aV({size:1,datatype:J.FLOAT_VEC3,getValue:function(V){return V.sunPositionColumbusView}}),czm_sunDirectionEC:new aV({size:1,datatype:J.FLOAT_VEC3,getValue:function(V){return V.sunDirectionEC}}),czm_sunDirectionWC:new aV({size:1,datatype:J.FLOAT_VEC3,getValue:function(V){return V.sunDirectionWC}}),czm_moonDirectionEC:new aV({size:1,datatype:J.FLOAT_VEC3,getValue:function(V){return V.moonDirectionEC}}),czm_lightDirectionEC:new aV({size:1,datatype:J.FLOAT_VEC3,getValue:function(V){return V.lightDirectionEC}}),czm_lightDirectionWC:new aV({size:1,datatype:J.FLOAT_VEC3,getValue:function(V){return V.lightDirectionWC}}),czm_lightColor:new aV({size:1,datatype:J.FLOAT_VEC3,getValue:function(V){return V.lightColor}}),czm_lightColorHdr:new aV({size:1,datatype:J.FLOAT_VEC3,getValue:function(V){return V.lightColorHdr}}),czm_encodedCameraPositionMCHigh:new aV({size:1,datatype:J.FLOAT_VEC3,getValue:function(V){return V.encodedCameraPositionMCHigh}}),czm_encodedCameraPositionMCLow:new aV({size:1,datatype:J.FLOAT_VEC3,getValue:function(V){return V.encodedCameraPositionMCLow}}),czm_viewerPositionWC:new aV({size:1,datatype:J.FLOAT_VEC3,getValue:function(V){return nV.getTranslation(V.inverseView,aB)}}),czm_frameNumber:new aV({size:1,datatype:J.FLOAT,getValue:function(V){return V.frameState.frameNumber}}),czm_morphTime:new aV({size:1,datatype:J.FLOAT,getValue:function(V){return V.frameState.morphTime}}),czm_sceneMode:new aV({size:1,datatype:J.FLOAT,getValue:function(V){return V.frameState.mode}}),czm_pass:new aV({size:1,datatype:J.FLOAT,getValue:function(V){return V.pass}}),czm_backgroundColor:new aV({size:1,datatype:J.FLOAT_VEC4,getValue:function(V){return V.backgroundColor}}),czm_brdfLut:new aV({size:1,datatype:J.SAMPLER_2D,getValue:function(V){return V.brdfLut}}),czm_environmentMap:new aV({size:1,datatype:J.SAMPLER_CUBE,getValue:function(V){return V.environmentMap}}),czm_specularEnvironmentMaps:new aV({size:1,datatype:J.SAMPLER_2D,getValue:function(V){return V.specularEnvironmentMaps}}),czm_specularEnvironmentMapSize:new aV({size:1,datatype:J.FLOAT_VEC2,getValue:function(V){return V.specularEnvironmentMapsDimensions}}),czm_specularEnvironmentMapsMaximumLOD:new aV({size:1,datatype:J.FLOAT,getValue:function(V){return V.specularEnvironmentMapsMaximumLOD}}),czm_sphericalHarmonicCoefficients:new aV({size:9,datatype:J.FLOAT_VEC3,getValue:function(V){return V.sphericalHarmonicCoefficients}}),czm_temeToPseudoFixed:new aV({size:1,datatype:J.FLOAT_MAT3,getValue:function(V){return V.temeToPseudoFixedMatrix}}),czm_pixelRatio:new aV({size:1,datatype:J.FLOAT,getValue:function(V){return V.pixelRatio}}),czm_fogDensity:new aV({size:1,datatype:J.FLOAT,getValue:function(V){return V.fogDensity}}),czm_splitPosition:new aV({size:1,datatype:J.FLOAT,getValue:function(V){return V.splitPosition}}),czm_geometricToleranceOverMeter:new aV({size:1,datatype:J.FLOAT,getValue:function(V){return V.geometricToleranceOverMeter}}),czm_minimumDisableDepthTestDistance:new aV({size:1,datatype:J.FLOAT,getValue:function(V){return V.minimumDisableDepthTestDistance}}),czm_invertClassificationColor:new aV({size:1,datatype:J.FLOAT_VEC4,getValue:function(V){return V.invertClassificationColor}}),czm_gamma:new aV({size:1,datatype:J.FLOAT,getValue:function(V){return V.gamma}}),czm_ellipsoidRadii:new aV({size:1,datatype:J.FLOAT_VEC3,getValue:function(V){return V.ellipsoid.radii}}),czm_ellipsoidInverseRadii:new aV({size:1,datatype:J.FLOAT_VEC3,getValue:function(V){return V.ellipsoid.oneOverRadii}})},yU=rB;function oB(V,l,Z,U){switch(l.type){case V.FLOAT:return new En(V,l,Z,U);case V.FLOAT_VEC2:return new pn(V,l,Z,U);case V.FLOAT_VEC3:return new Xn(V,l,Z,U);case V.FLOAT_VEC4:return new fn(V,l,Z,U);case V.SAMPLER_2D:case V.SAMPLER_CUBE:return new ke(V,l,Z,U);case V.INT:case V.BOOL:return new bn(V,l,Z,U);case V.INT_VEC2:case V.BOOL_VEC2:return new un(V,l,Z,U);case V.INT_VEC3:case V.BOOL_VEC3:return new Jn(V,l,Z,U);case V.INT_VEC4:case V.BOOL_VEC4:return new xn(V,l,Z,U);case V.FLOAT_MAT2:return new Dn(V,l,Z,U);case V.FLOAT_MAT3:return new Mn(V,l,Z,U);case V.FLOAT_MAT4:return new _n(V,l,Z,U);default:throw new Jl(`Unrecognized uniform type: ${l.type} for uniform "${Z}".`)}}function En(V,l,Z,U){this.name=Z,this.value=void 0,this._value=0,this._gl=V,this._location=U}En.prototype.set=function(){this.value!==this._value&&(this._value=this.value,this._gl.uniform1f(this._location,this.value))};function pn(V,l,Z,U){this.name=Z,this.value=void 0,this._value=new q,this._gl=V,this._location=U}pn.prototype.set=function(){let V=this.value;q.equals(V,this._value)||(q.clone(V,this._value),this._gl.uniform2f(this._location,V.x,V.y))};function Xn(V,l,Z,U){this.name=Z,this.value=void 0,this._value=void 0,this._gl=V,this._location=U}Xn.prototype.set=function(){let V=this.value;if(s(V.red))z.equals(V,this._value)||(this._value=z.clone(V,this._value),this._gl.uniform3f(this._location,V.red,V.green,V.blue));else if(s(V.x))w.equals(V,this._value)||(this._value=w.clone(V,this._value),this._gl.uniform3f(this._location,V.x,V.y,V.z));else throw new I(`Invalid vec3 value for uniform "${this.name}".`)};function fn(V,l,Z,U){this.name=Z,this.value=void 0,this._value=void 0,this._gl=V,this._location=U}fn.prototype.set=function(){let V=this.value;if(s(V.red))z.equals(V,this._value)||(this._value=z.clone(V,this._value),this._gl.uniform4f(this._location,V.red,V.green,V.blue,V.alpha));else if(s(V.x))CV.equals(V,this._value)||(this._value=CV.clone(V,this._value),this._gl.uniform4f(this._location,V.x,V.y,V.z,V.w));else throw new I(`Invalid vec4 value for uniform "${this.name}".`)};function ke(V,l,Z,U){this.name=Z,this.value=void 0,this._gl=V,this._location=U,this.textureUnitIndex=void 0}ke.prototype.set=function(){let V=this._gl;V.activeTexture(V.TEXTURE0+this.textureUnitIndex);let l=this.value;V.bindTexture(l._target,l._texture)};ke.prototype._setSampler=function(V){return this.textureUnitIndex=V,this._gl.uniform1i(this._location,V),V+1};function bn(V,l,Z,U){this.name=Z,this.value=void 0,this._value=0,this._gl=V,this._location=U}bn.prototype.set=function(){this.value!==this._value&&(this._value=this.value,this._gl.uniform1i(this._location,this.value))};function un(V,l,Z,U){this.name=Z,this.value=void 0,this._value=new q,this._gl=V,this._location=U}un.prototype.set=function(){let V=this.value;q.equals(V,this._value)||(q.clone(V,this._value),this._gl.uniform2i(this._location,V.x,V.y))};function Jn(V,l,Z,U){this.name=Z,this.value=void 0,this._value=new w,this._gl=V,this._location=U}Jn.prototype.set=function(){let V=this.value;w.equals(V,this._value)||(w.clone(V,this._value),this._gl.uniform3i(this._location,V.x,V.y,V.z))};function xn(V,l,Z,U){this.name=Z,this.value=void 0,this._value=new CV,this._gl=V,this._location=U}xn.prototype.set=function(){let V=this.value;CV.equals(V,this._value)||(CV.clone(V,this._value),this._gl.uniform4i(this._location,V.x,V.y,V.z,V.w))};var hB=new Float32Array(4);function Dn(V,l,Z,U){this.name=Z,this.value=void 0,this._value=new aW,this._gl=V,this._location=U}Dn.prototype.set=function(){if(!aW.equalsArray(this.value,this._value,0)){aW.clone(this.value,this._value);let V=aW.toArray(this.value,hB);this._gl.uniformMatrix2fv(this._location,!1,V)}};var RB=new Float32Array(9);function Mn(V,l,Z,U){this.name=Z,this.value=void 0,this._value=new gl,this._gl=V,this._location=U}Mn.prototype.set=function(){if(!gl.equalsArray(this.value,this._value,0)){gl.clone(this.value,this._value);let V=gl.toArray(this.value,RB);this._gl.uniformMatrix3fv(this._location,!1,V)}};var dB=new Float32Array(16);function _n(V,l,Z,U){this.name=Z,this.value=void 0,this._value=new nV,this._gl=V,this._location=U}_n.prototype.set=function(){if(!nV.equalsArray(this.value,this._value,0)){nV.clone(this.value,this._value);let V=nV.toArray(this.value,dB);this._gl.uniformMatrix4fv(this._location,!1,V)}};var On=oB;function TB(V,l,Z,U){switch(l.type){case V.FLOAT:return new wn(V,l,Z,U);case V.FLOAT_VEC2:return new Yn(V,l,Z,U);case V.FLOAT_VEC3:return new yn(V,l,Z,U);case V.FLOAT_VEC4:return new vn(V,l,Z,U);case V.SAMPLER_2D:case V.SAMPLER_CUBE:return new He(V,l,Z,U);case V.INT:case V.BOOL:return new zn(V,l,Z,U);case V.INT_VEC2:case V.BOOL_VEC2:return new kn(V,l,Z,U);case V.INT_VEC3:case V.BOOL_VEC3:return new Hn(V,l,Z,U);case V.INT_VEC4:case V.BOOL_VEC4:return new Ln(V,l,Z,U);case V.FLOAT_MAT2:return new Kn(V,l,Z,U);case V.FLOAT_MAT3:return new Pn(V,l,Z,U);case V.FLOAT_MAT4:return new jn(V,l,Z,U);default:throw new Jl(`Unrecognized uniform type: ${l.type} for uniform "${Z}".`)}}function wn(V,l,Z,U){let A=U.length;this.name=Z,this.value=new Array(A),this._value=new Float32Array(A),this._gl=V,this._location=U[0]}wn.prototype.set=function(){let V=this.value,l=V.length,Z=this._value,U=!1;for(let A=0;A<l;++A){let t=V[A];t!==Z[A]&&(Z[A]=t,U=!0)}U&&this._gl.uniform1fv(this._location,Z)};function Yn(V,l,Z,U){let A=U.length;this.name=Z,this.value=new Array(A),this._value=new Float32Array(A*2),this._gl=V,this._location=U[0]}Yn.prototype.set=function(){let V=this.value,l=V.length,Z=this._value,U=!1,A=0;for(let t=0;t<l;++t){let m=V[t];q.equalsArray(m,Z,A)||(q.pack(m,Z,A),U=!0),A+=2}U&&this._gl.uniform2fv(this._location,Z)};function yn(V,l,Z,U){let A=U.length;this.name=Z,this.value=new Array(A),this._value=new Float32Array(A*3),this._gl=V,this._location=U[0]}yn.prototype.set=function(){let V=this.value,l=V.length,Z=this._value,U=!1,A=0;for(let t=0;t<l;++t){let m=V[t];if(s(m.red))(m.red!==Z[A]||m.green!==Z[A+1]||m.blue!==Z[A+2])&&(Z[A]=m.red,Z[A+1]=m.green,Z[A+2]=m.blue,U=!0);else if(s(m.x))w.equalsArray(m,Z,A)||(w.pack(m,Z,A),U=!0);else throw new I("Invalid vec3 value.");A+=3}U&&this._gl.uniform3fv(this._location,Z)};function vn(V,l,Z,U){let A=U.length;this.name=Z,this.value=new Array(A),this._value=new Float32Array(A*4),this._gl=V,this._location=U[0]}vn.prototype.set=function(){let V=this.value,l=V.length,Z=this._value,U=!1,A=0;for(let t=0;t<l;++t){let m=V[t];if(s(m.red))z.equalsArray(m,Z,A)||(z.pack(m,Z,A),U=!0);else if(s(m.x))CV.equalsArray(m,Z,A)||(CV.pack(m,Z,A),U=!0);else throw new I("Invalid vec4 value.");A+=4}U&&this._gl.uniform4fv(this._location,Z)};function He(V,l,Z,U){let A=U.length;this.name=Z,this.value=new Array(A),this._value=new Float32Array(A),this._gl=V,this._locations=U,this.textureUnitIndex=void 0}He.prototype.set=function(){let V=this._gl,l=V.TEXTURE0+this.textureUnitIndex,Z=this.value,U=Z.length;for(let A=0;A<U;++A){let t=Z[A];V.activeTexture(l+A),V.bindTexture(t._target,t._texture)}};He.prototype._setSampler=function(V){this.textureUnitIndex=V;let l=this._locations,Z=l.length;for(let U=0;U<Z;++U){let A=V+U;this._gl.uniform1i(l[U],A)}return V+Z};function zn(V,l,Z,U){let A=U.length;this.name=Z,this.value=new Array(A),this._value=new Int32Array(A),this._gl=V,this._location=U[0]}zn.prototype.set=function(){let V=this.value,l=V.length,Z=this._value,U=!1;for(let A=0;A<l;++A){let t=V[A];t!==Z[A]&&(Z[A]=t,U=!0)}U&&this._gl.uniform1iv(this._location,Z)};function kn(V,l,Z,U){let A=U.length;this.name=Z,this.value=new Array(A),this._value=new Int32Array(A*2),this._gl=V,this._location=U[0]}kn.prototype.set=function(){let V=this.value,l=V.length,Z=this._value,U=!1,A=0;for(let t=0;t<l;++t){let m=V[t];q.equalsArray(m,Z,A)||(q.pack(m,Z,A),U=!0),A+=2}U&&this._gl.uniform2iv(this._location,Z)};function Hn(V,l,Z,U){let A=U.length;this.name=Z,this.value=new Array(A),this._value=new Int32Array(A*3),this._gl=V,this._location=U[0]}Hn.prototype.set=function(){let V=this.value,l=V.length,Z=this._value,U=!1,A=0;for(let t=0;t<l;++t){let m=V[t];w.equalsArray(m,Z,A)||(w.pack(m,Z,A),U=!0),A+=3}U&&this._gl.uniform3iv(this._location,Z)};function Ln(V,l,Z,U){let A=U.length;this.name=Z,this.value=new Array(A),this._value=new Int32Array(A*4),this._gl=V,this._location=U[0]}Ln.prototype.set=function(){let V=this.value,l=V.length,Z=this._value,U=!1,A=0;for(let t=0;t<l;++t){let m=V[t];CV.equalsArray(m,Z,A)||(CV.pack(m,Z,A),U=!0),A+=4}U&&this._gl.uniform4iv(this._location,Z)};function Kn(V,l,Z,U){let A=U.length;this.name=Z,this.value=new Array(A),this._value=new Float32Array(A*4),this._gl=V,this._location=U[0]}Kn.prototype.set=function(){let V=this.value,l=V.length,Z=this._value,U=!1,A=0;for(let t=0;t<l;++t){let m=V[t];aW.equalsArray(m,Z,A)||(aW.pack(m,Z,A),U=!0),A+=4}U&&this._gl.uniformMatrix2fv(this._location,!1,Z)};function Pn(V,l,Z,U){let A=U.length;this.name=Z,this.value=new Array(A),this._value=new Float32Array(A*9),this._gl=V,this._location=U[0]}Pn.prototype.set=function(){let V=this.value,l=V.length,Z=this._value,U=!1,A=0;for(let t=0;t<l;++t){let m=V[t];gl.equalsArray(m,Z,A)||(gl.pack(m,Z,A),U=!0),A+=9}U&&this._gl.uniformMatrix3fv(this._location,!1,Z)};function jn(V,l,Z,U){let A=U.length;this.name=Z,this.value=new Array(A),this._value=new Float32Array(A*16),this._gl=V,this._location=U[0]}jn.prototype.set=function(){let V=this.value,l=V.length,Z=this._value,U=!1,A=0;for(let t=0;t<l;++t){let m=V[t];nV.equalsArray(m,Z,A)||(nV.pack(m,Z,A),U=!0),A+=16}U&&this._gl.uniformMatrix4fv(this._location,!1,Z)};var qn=TB;var BB=0;function EW(V){let l=V.vertexShaderText,Z=V.fragmentShaderText;typeof spector<"u"&&(l=l.replace(/^#line/gm,"//#line"),Z=Z.replace(/^#line/gm,"//#line"));let U=FB(l,Z);this._gl=V.gl,this._logShaderCompilation=V.logShaderCompilation,this._debugShaders=V.debugShaders,this._attributeLocations=V.attributeLocations,this._program=void 0,this._numberOfVertexAttributes=void 0,this._vertexAttributes=void 0,this._uniformsByName=void 0,this._uniforms=void 0,this._automaticUniforms=void 0,this._manualUniforms=void 0,this._duplicateUniformNames=U.duplicateUniformNames,this._cachedShader=void 0,this.maximumTextureUnitIndex=void 0,this._vertexShaderSource=V.vertexShaderSource,this._vertexShaderText=V.vertexShaderText,this._fragmentShaderSource=V.fragmentShaderSource,this._fragmentShaderText=U.fragmentShaderText,this.id=BB++}EW.fromCache=function(V){return V=a(V,a.EMPTY_OBJECT),v.defined("options.context",V.context),V.context.shaderCache.getShaderProgram(V)};EW.replaceCache=function(V){return V=a(V,a.EMPTY_OBJECT),v.defined("options.context",V.context),V.context.shaderCache.replaceShaderProgram(V)};Object.defineProperties(EW.prototype,{vertexShaderSource:{get:function(){return this._vertexShaderSource}},fragmentShaderSource:{get:function(){return this._fragmentShaderSource}},vertexAttributes:{get:function(){return yt(this),this._vertexAttributes}},numberOfVertexAttributes:{get:function(){return yt(this),this._numberOfVertexAttributes}},allUniforms:{get:function(){return yt(this),this._uniformsByName}}});function $n(V){let l=[],Z=V.match(/uniform.*?(?![^{]*})(?=[=\[;])/g);if(s(Z)){let U=Z.length;for(let A=0;A<U;A++){let t=Z[A].trim(),m=t.slice(t.lastIndexOf(" ")+1);l.push(m)}}return l}function FB(V,l){let Z={};if(!$V.highpFloatSupported||!$V.highpIntSupported){let U,A,t,m,i=$n(V),n=$n(l),o=i.length,h=n.length;for(U=0;U<o;U++)for(A=0;A<h;A++)if(i[U]===n[A]){t=i[U],m=`czm_mediump_${t}`;let R=new RegExp(`${t}\\b`,"g");l=l.replace(R,m),Z[m]=t}}return{fragmentShaderText:l,duplicateUniformNames:Z}}var RW="[Cesium WebGL] ";function QB(V,l){let Z=l._vertexShaderText,U=l._fragmentShaderText,A=V.createShader(V.VERTEX_SHADER);V.shaderSource(A,Z),V.compileShader(A);let t=V.createShader(V.FRAGMENT_SHADER);V.shaderSource(t,U),V.compileShader(t);let m=V.createProgram();V.attachShader(m,A),V.attachShader(m,t);let i=l._attributeLocations;if(s(i))for(let c in i)i.hasOwnProperty(c)&&V.bindAttribLocation(m,i[c],c);V.linkProgram(m);let n;if(V.getProgramParameter(m,V.LINK_STATUS))return l._logShaderCompilation&&(n=V.getShaderInfoLog(A),s(n)&&n.length>0&&console.log(`${RW}Vertex shader compile log: ${n}`),n=V.getShaderInfoLog(t),s(n)&&n.length>0&&console.log(`${RW}Fragment shader compile log: ${n}`),n=V.getProgramInfoLog(m),s(n)&&n.length>0&&console.log(`${RW}Shader program link log: ${n}`)),V.deleteShader(A),V.deleteShader(t),m;let o,h=l._debugShaders;throw V.getShaderParameter(t,V.COMPILE_STATUS)?V.getShaderParameter(A,V.COMPILE_STATUS)?(n=V.getProgramInfoLog(m),console.error(`${RW}Shader program link log: ${n}`),R(A,"vertex"),R(t,"fragment"),o=`Program failed to link.  Link log: ${n}`):(n=V.getShaderInfoLog(A),console.error(`${RW}Vertex shader compile log: ${n}`),console.error(`${RW} Vertex shader source:
${Z}`),o=`Vertex shader failed to compile.  Compile log: ${n}`):(n=V.getShaderInfoLog(t),console.error(`${RW}Fragment shader compile log: ${n}`),console.error(`${RW} Fragment shader source:
${U}`),o=`Fragment shader failed to compile.  Compile log: ${n}`),V.deleteShader(A),V.deleteShader(t),V.deleteProgram(m),new Jl(o);function R(c,Q){if(!s(h))return;let T=h.getTranslatedShaderSource(c);if(T===""){console.error(`${RW}${Q} shader translation failed.`);return}console.error(`${RW}Translated ${Q} shaderSource:
${T}`)}}function IB(V,l,Z){let U={};for(let A=0;A<Z;++A){let t=V.getActiveAttrib(l,A),m=V.getAttribLocation(l,t.name);U[t.name]={name:t.name,type:t.type,index:m}}return U}function cB(V,l){let Z={},U=[],A=[],t=V.getProgramParameter(l,V.ACTIVE_UNIFORMS);for(let m=0;m<t;++m){let i=V.getActiveUniform(l,m),n="[0]",o=i.name.indexOf(n,i.name.length-n.length)!==-1?i.name.slice(0,i.name.length-3):i.name;if(o.indexOf("gl_")!==0)if(i.name.indexOf("[")<0){let h=V.getUniformLocation(l,o);if(h!==null){let R=On(V,i,o,h);Z[o]=R,U.push(R),R._setSampler&&A.push(R)}}else{let h,R,c,Q,T=o.indexOf("[");if(T>=0){if(h=Z[o.slice(0,T)],!s(h))continue;R=h._locations,R.length<=1&&(c=h.value,Q=V.getUniformLocation(l,o),Q!==null&&(R.push(Q),c.push(V.getUniform(l,Q))))}else{R=[];for(let S=0;S<i.size;++S)Q=V.getUniformLocation(l,`${o}[${S}]`),Q!==null&&R.push(Q);h=qn(V,i,o,R),Z[o]=h,U.push(h),h._setSampler&&A.push(h)}}}return{uniformsByName:Z,uniforms:U,samplerUniforms:A}}function SB(V,l){let Z=[],U=[];for(let A in l)if(l.hasOwnProperty(A)){let t=l[A],m=A,i=V._duplicateUniformNames[m];s(i)&&(t.name=i,m=i);let n=yU[m];s(n)?Z.push({uniform:t,automaticUniform:n}):U.push(t)}return{automaticUniforms:Z,manualUniforms:U}}function CB(V,l,Z){V.useProgram(l);let U=0,A=Z.length;for(let t=0;t<A;++t)U=Z[t]._setSampler(U);return V.useProgram(null),U}function yt(V){s(V._program)||VG(V)}function VG(V){let l=V._program,Z=V._gl,U=QB(Z,V,V._debugShaders),A=Z.getProgramParameter(U,Z.ACTIVE_ATTRIBUTES),t=cB(Z,U),m=SB(V,t.uniformsByName);V._program=U,V._numberOfVertexAttributes=A,V._vertexAttributes=IB(Z,U,A),V._uniformsByName=t.uniformsByName,V._uniforms=t.uniforms,V._automaticUniforms=m.automaticUniforms,V._manualUniforms=m.manualUniforms,V.maximumTextureUnitIndex=CB(Z,U,t.samplerUniforms),l&&V._gl.deleteProgram(l),typeof spector<"u"&&(V._program.__SPECTOR_rebuildProgram=function(i,n,o,h){let R=V._vertexShaderText,c=V._fragmentShaderText,Q=/ ! = /g;V._vertexShaderText=i.replace(Q," != "),V._fragmentShaderText=n.replace(Q," != ");try{VG(V),o(V._program)}catch(T){V._vertexShaderText=R,V._fragmentShaderText=c;let p=/(?:Compile|Link) error: ([^]*)/.exec(T.message);h(p?p[1]:T.message)}})}EW.prototype._bind=function(){yt(this),this._gl.useProgram(this._program)};EW.prototype._setUniforms=function(V,l,Z){let U,A;if(s(V)){let i=this._manualUniforms;for(U=i.length,A=0;A<U;++A){let n=i[A];n.value=V[n.name]()}}let t=this._automaticUniforms;for(U=t.length,A=0;A<U;++A){let i=t[A];i.uniform.value=i.automaticUniform.getValue(l)}let m=this._uniforms;for(U=m.length,A=0;A<U;++A)m[A].set();if(Z){let i=this._gl,n=this._program;if(i.validateProgram(n),!i.getProgramParameter(n,i.VALIDATE_STATUS))throw new I(`Program validation failed.  Program info log: ${i.getProgramInfoLog(n)}`)}};EW.prototype.isDestroyed=function(){return!1};EW.prototype.destroy=function(){this._cachedShader.cache.releaseShaderProgram(this)};EW.prototype.finalDestroy=function(){return this._gl.deleteProgram(this._program),fV(this)};var Dl=EW;var lG=`/**
 * A built-in GLSL floating-point constant for converting radians to degrees.
 *
 * @alias czm_degreesPerRadian
 * @glslConstant
 *
 * @see CesiumMath.DEGREES_PER_RADIAN
 *
 * @example
 * // GLSL declaration
 * const float czm_degreesPerRadian = ...;
 *
 * // Example
 * float deg = czm_degreesPerRadian * rad;
 */
const float czm_degreesPerRadian = 57.29577951308232;
`;var ZG=`/**
 * A built-in GLSL vec2 constant for defining the depth range.
 * This is a workaround to a bug where IE11 does not implement gl_DepthRange.
 *
 * @alias czm_depthRange
 * @glslConstant
 *
 * @example
 * // GLSL declaration
 * float depthRangeNear = czm_depthRange.near;
 * float depthRangeFar = czm_depthRange.far;
 *
 */
const czm_depthRangeStruct czm_depthRange = czm_depthRangeStruct(0.0, 1.0);
`;var WG=`/**
 * 0.1
 *
 * @name czm_epsilon1
 * @glslConstant
 */
const float czm_epsilon1 = 0.1;
`;var UG=`/**
 * 0.01
 *
 * @name czm_epsilon2
 * @glslConstant
 */
const float czm_epsilon2 = 0.01;
`;var AG=`/**
 * 0.001
 *
 * @name czm_epsilon3
 * @glslConstant
 */
const float czm_epsilon3 = 0.001;
`;var tG=`/**
 * 0.0001
 *
 * @name czm_epsilon4
 * @glslConstant
 */
const float czm_epsilon4 = 0.0001;
`;var eG=`/**
 * 0.00001
 *
 * @name czm_epsilon5
 * @glslConstant
 */
const float czm_epsilon5 = 0.00001;
`;var mG=`/**
 * 0.000001
 *
 * @name czm_epsilon6
 * @glslConstant
 */
const float czm_epsilon6 = 0.000001;
`;var iG=`/**
 * 0.0000001
 *
 * @name czm_epsilon7
 * @glslConstant
 */
const float czm_epsilon7 = 0.0000001;
`;var nG=`/**
 * DOC_TBA
 *
 * @name czm_infinity
 * @glslConstant
 */
const float czm_infinity = 5906376272000.0;  // Distance from the Sun to Pluto in meters.  TODO: What is best given lowp, mediump, and highp?
`;var GG=`/**
 * A built-in GLSL floating-point constant for <code>1/pi</code>.
 *
 * @alias czm_oneOverPi
 * @glslConstant
 *
 * @see CesiumMath.ONE_OVER_PI
 *
 * @example
 * // GLSL declaration
 * const float czm_oneOverPi = ...;
 *
 * // Example
 * float pi = 1.0 / czm_oneOverPi;
 */
const float czm_oneOverPi = 0.3183098861837907;
`;var sG=`/**
 * A built-in GLSL floating-point constant for <code>1/2pi</code>.
 *
 * @alias czm_oneOverTwoPi
 * @glslConstant
 *
 * @see CesiumMath.ONE_OVER_TWO_PI
 *
 * @example
 * // GLSL declaration
 * const float czm_oneOverTwoPi = ...;
 *
 * // Example
 * float pi = 2.0 * czm_oneOverTwoPi;
 */
const float czm_oneOverTwoPi = 0.15915494309189535;
`;var aG=`/**
 * The automatic GLSL constant for {@link Pass#CESIUM_3D_TILE}
 *
 * @name czm_passCesium3DTile
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passCesium3DTile = 4.0;
`;var rG=`/**
 * The automatic GLSL constant for {@link Pass#CESIUM_3D_TILE_CLASSIFICATION}
 *
 * @name czm_passCesium3DTileClassification
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passCesium3DTileClassification = 5.0;
`;var oG=`/**
 * The automatic GLSL constant for {@link Pass#CESIUM_3D_TILE_CLASSIFICATION_IGNORE_SHOW}
 *
 * @name czm_passCesium3DTileClassificationIgnoreShow
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passCesium3DTileClassificationIgnoreShow = 6.0;
`;var hG=`/**
 * The automatic GLSL constant for {@link Pass#CLASSIFICATION}
 *
 * @name czm_passClassification
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passClassification = 7.0;
`;var RG=`/**
 * The automatic GLSL constant for {@link Pass#COMPUTE}
 *
 * @name czm_passCompute
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passCompute = 1.0;
`;var dG=`/**
 * The automatic GLSL constant for {@link Pass#ENVIRONMENT}
 *
 * @name czm_passEnvironment
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passEnvironment = 0.0;
`;var TG=`/**
 * The automatic GLSL constant for {@link Pass#GLOBE}
 *
 * @name czm_passGlobe
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passGlobe = 2.0;
`;var BG=`/**
 * The automatic GLSL constant for {@link Pass#OPAQUE}
 *
 * @name czm_passOpaque
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passOpaque = 7.0;
`;var FG=`/**
 * The automatic GLSL constant for {@link Pass#OVERLAY}
 *
 * @name czm_passOverlay
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passOverlay = 10.0;
`;var QG=`/**
 * The automatic GLSL constant for {@link Pass#TERRAIN_CLASSIFICATION}
 *
 * @name czm_passTerrainClassification
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passTerrainClassification = 3.0;
`;var IG=`/**
 * The automatic GLSL constant for {@link Pass#TRANSLUCENT}
 *
 * @name czm_passTranslucent
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passTranslucent = 8.0;
`;var cG=`/**
 * The automatic GLSL constant for {@link Pass#VOXELS}
 *
 * @name czm_passVoxels
 * @glslConstant
 *
 * @see czm_pass
 */
const float czm_passVoxels = 9.0;
`;var SG=`/**
 * A built-in GLSL floating-point constant for <code>Math.PI</code>.
 *
 * @alias czm_pi
 * @glslConstant
 *
 * @see CesiumMath.PI
 *
 * @example
 * // GLSL declaration
 * const float czm_pi = ...;
 *
 * // Example
 * float twoPi = 2.0 * czm_pi;
 */
const float czm_pi = 3.141592653589793;
`;var CG=`/**
 * A built-in GLSL floating-point constant for <code>pi/4</code>.
 *
 * @alias czm_piOverFour
 * @glslConstant
 *
 * @see CesiumMath.PI_OVER_FOUR
 *
 * @example
 * // GLSL declaration
 * const float czm_piOverFour = ...;
 *
 * // Example
 * float pi = 4.0 * czm_piOverFour;
 */
const float czm_piOverFour = 0.7853981633974483;
`;var gG=`/**
 * A built-in GLSL floating-point constant for <code>pi/6</code>.
 *
 * @alias czm_piOverSix
 * @glslConstant
 *
 * @see CesiumMath.PI_OVER_SIX
 *
 * @example
 * // GLSL declaration
 * const float czm_piOverSix = ...;
 *
 * // Example
 * float pi = 6.0 * czm_piOverSix;
 */
const float czm_piOverSix = 0.5235987755982988;
`;var NG=`/**
 * A built-in GLSL floating-point constant for <code>pi/3</code>.
 *
 * @alias czm_piOverThree
 * @glslConstant
 *
 * @see CesiumMath.PI_OVER_THREE
 *
 * @example
 * // GLSL declaration
 * const float czm_piOverThree = ...;
 *
 * // Example
 * float pi = 3.0 * czm_piOverThree;
 */
const float czm_piOverThree = 1.0471975511965976;
`;var EG=`/**
 * A built-in GLSL floating-point constant for <code>pi/2</code>.
 *
 * @alias czm_piOverTwo
 * @glslConstant
 *
 * @see CesiumMath.PI_OVER_TWO
 *
 * @example
 * // GLSL declaration
 * const float czm_piOverTwo = ...;
 *
 * // Example
 * float pi = 2.0 * czm_piOverTwo;
 */
const float czm_piOverTwo = 1.5707963267948966;
`;var pG=`/**
 * A built-in GLSL floating-point constant for converting degrees to radians.
 *
 * @alias czm_radiansPerDegree
 * @glslConstant
 *
 * @see CesiumMath.RADIANS_PER_DEGREE
 *
 * @example
 * // GLSL declaration
 * const float czm_radiansPerDegree = ...;
 *
 * // Example
 * float rad = czm_radiansPerDegree * deg;
 */
const float czm_radiansPerDegree = 0.017453292519943295;
`;var XG=`/**
 * The constant identifier for the 2D {@link SceneMode}
 *
 * @name czm_sceneMode2D
 * @glslConstant
 * @see czm_sceneMode
 * @see czm_sceneModeColumbusView
 * @see czm_sceneMode3D
 * @see czm_sceneModeMorphing
 */
const float czm_sceneMode2D = 2.0;
`;var fG=`/**
 * The constant identifier for the 3D {@link SceneMode}
 *
 * @name czm_sceneMode3D
 * @glslConstant
 * @see czm_sceneMode
 * @see czm_sceneMode2D
 * @see czm_sceneModeColumbusView
 * @see czm_sceneModeMorphing
 */
const float czm_sceneMode3D = 3.0;
`;var bG=`/**
 * The constant identifier for the Columbus View {@link SceneMode}
 *
 * @name czm_sceneModeColumbusView
 * @glslConstant
 * @see czm_sceneMode
 * @see czm_sceneMode2D
 * @see czm_sceneMode3D
 * @see czm_sceneModeMorphing
 */
const float czm_sceneModeColumbusView = 1.0;
`;var uG=`/**
 * The constant identifier for the Morphing {@link SceneMode}
 *
 * @name czm_sceneModeMorphing
 * @glslConstant
 * @see czm_sceneMode
 * @see czm_sceneMode2D
 * @see czm_sceneModeColumbusView
 * @see czm_sceneMode3D
 */
const float czm_sceneModeMorphing = 0.0;
`;var JG=`/**
 * A built-in GLSL floating-point constant for one solar radius.
 *
 * @alias czm_solarRadius
 * @glslConstant
 *
 * @see CesiumMath.SOLAR_RADIUS
 *
 * @example
 * // GLSL declaration
 * const float czm_solarRadius = ...;
 */
const float czm_solarRadius = 695500000.0;
`;var xG=`/**
 * A built-in GLSL floating-point constant for <code>3pi/2</code>.
 *
 * @alias czm_threePiOver2
 * @glslConstant
 *
 * @see CesiumMath.THREE_PI_OVER_TWO
 *
 * @example
 * // GLSL declaration
 * const float czm_threePiOver2 = ...;
 *
 * // Example
 * float pi = (2.0 / 3.0) * czm_threePiOver2;
 */
const float czm_threePiOver2 = 4.71238898038469;
`;var DG=`/**
 * A built-in GLSL floating-point constant for <code>2pi</code>.
 *
 * @alias czm_twoPi
 * @glslConstant
 *
 * @see CesiumMath.TWO_PI
 *
 * @example
 * // GLSL declaration
 * const float czm_twoPi = ...;
 *
 * // Example
 * float pi = czm_twoPi / 2.0;
 */
const float czm_twoPi = 6.283185307179586;
`;var MG=`/**
 * The maximum latitude, in radians, both North and South, supported by a Web Mercator
 * (EPSG:3857) projection.  Technically, the Mercator projection is defined
 * for any latitude up to (but not including) 90 degrees, but it makes sense
 * to cut it off sooner because it grows exponentially with increasing latitude.
 * The logic behind this particular cutoff value, which is the one used by
 * Google Maps, Bing Maps, and Esri, is that it makes the projection
 * square.  That is, the rectangle is equal in the X and Y directions.
 *
 * The constant value is computed as follows:
 *   czm_pi * 0.5 - (2.0 * atan(exp(-czm_pi)))
 *
 * @name czm_webMercatorMaxLatitude
 * @glslConstant
 */
const float czm_webMercatorMaxLatitude = 1.4844222297453324;
`;var _G=`/**
 * @name czm_depthRangeStruct
 * @glslStruct
 */
struct czm_depthRangeStruct
{
    float near;
    float far;
};
`;var OG=`/**
 * Holds material information that can be used for lighting. Returned by all czm_getMaterial functions.
 *
 * @name czm_material
 * @glslStruct
 *
 * @property {vec3} diffuse Incoming light that scatters evenly in all directions.
 * @property {float} specular Intensity of incoming light reflecting in a single direction.
 * @property {float} shininess The sharpness of the specular reflection.  Higher values create a smaller, more focused specular highlight.
 * @property {vec3} normal Surface's normal in eye coordinates. It is used for effects such as normal mapping. The default is the surface's unmodified normal.
 * @property {vec3} emission Light emitted by the material equally in all directions. The default is vec3(0.0), which emits no light.
 * @property {float} alpha Alpha of this material. 0.0 is completely transparent; 1.0 is completely opaque.
 */
struct czm_material
{
    vec3 diffuse;
    float specular;
    float shininess;
    vec3 normal;
    vec3 emission;
    float alpha;
};
`;var wG=`/**
 * Used as input to every material's czm_getMaterial function.
 *
 * @name czm_materialInput
 * @glslStruct
 *
 * @property {float} s 1D texture coordinates.
 * @property {vec2} st 2D texture coordinates.
 * @property {vec3} str 3D texture coordinates.
 * @property {vec3} normalEC Unperturbed surface normal in eye coordinates.
 * @property {mat3} tangentToEyeMatrix Matrix for converting a tangent space normal to eye space.
 * @property {vec3} positionToEyeEC Vector from the fragment to the eye in eye coordinates.  The magnitude is the distance in meters from the fragment to the eye.
 * @property {float} height The height of the terrain in meters above or below the WGS84 ellipsoid.  Only available for globe materials.
 * @property {float} slope The slope of the terrain in radians.  0 is flat; pi/2 is vertical.  Only available for globe materials.
 * @property {float} aspect The aspect of the terrain in radians.  0 is East, pi/2 is North, pi is West, 3pi/2 is South.  Only available for globe materials.
 */
struct czm_materialInput
{
    float s;
    vec2 st;
    vec3 str;
    vec3 normalEC;
    mat3 tangentToEyeMatrix;
    vec3 positionToEyeEC;
    float height;
    float slope;
    float aspect;
};
`;var YG=`/**
 * Struct for representing a material for a {@link Model}. The model
 * rendering pipeline will pass this struct between material, custom shaders,
 * and lighting stages. This is not to be confused with {@link czm_material}
 * which is used by the older Fabric materials system, although they are similar.
 * <p>
 * All color values (diffuse, specular, emissive) are in linear color space.
 * </p>
 *
 * @name czm_modelMaterial
 * @glslStruct
 *
 * @property {vec3} diffuse Incoming light that scatters evenly in all directions.
 * @property {float} alpha Alpha of this material. 0.0 is completely transparent; 1.0 is completely opaque.
 * @property {vec3} specular Color of reflected light at normal incidence in PBR materials. This is sometimes referred to as f0 in the literature.
 * @property {float} roughness A number from 0.0 to 1.0 representing how rough the surface is. Values near 0.0 produce glossy surfaces, while values near 1.0 produce rough surfaces.
 * @property {vec3} normalEC Surface's normal in eye coordinates. It is used for effects such as normal mapping. The default is the surface's unmodified normal.
 * @property {float} occlusion Ambient occlusion recieved at this point on the material. 1.0 means fully lit, 0.0 means fully occluded.
 * @property {vec3} emissive Light emitted by the material equally in all directions. The default is vec3(0.0), which emits no light.
 */
struct czm_modelMaterial {
    vec3 diffuse;
    float alpha;
    vec3 specular;
    float roughness;
    vec3 normalEC;
    float occlusion;
    vec3 emissive;
};
`;var yG=`/**
 * Struct for representing the output of a custom vertex shader.
 * 
 * @name czm_modelVertexOutput
 * @glslStruct
 *
 * @see {@link CustomShader}
 * @see {@link Model}
 *
 * @property {vec3} positionMC The position of the vertex in model coordinates
 * @property {float} pointSize A custom value for gl_PointSize. This is only used for point primitives. 
 */
struct czm_modelVertexOutput {
  vec3 positionMC;
  float pointSize;
};
`;var vG=`/**
 * Parameters for {@link czm_pbrLighting}
 *
 * @name czm_material
 * @glslStruct
 *
 * @property {vec3} diffuseColor the diffuse color of the material for the lambert term of the rendering equation
 * @property {float} roughness a value from 0.0 to 1.0 that indicates how rough the surface of the material is.
 * @property {vec3} f0 The reflectance of the material at normal incidence
 */
struct czm_pbrParameters
{
    vec3 diffuseColor;
    float roughness;
    vec3 f0;
};
`;var zG=`/**
 * DOC_TBA
 *
 * @name czm_ray
 * @glslStruct
 */
struct czm_ray
{
    vec3 origin;
    vec3 direction;
};
`;var kG=`/**
 * DOC_TBA
 *
 * @name czm_raySegment
 * @glslStruct
 */
struct czm_raySegment
{
    float start;
    float stop;
};

/**
 * DOC_TBA
 *
 * @name czm_emptyRaySegment
 * @glslConstant 
 */
const czm_raySegment czm_emptyRaySegment = czm_raySegment(-czm_infinity, -czm_infinity);

/**
 * DOC_TBA
 *
 * @name czm_fullRaySegment
 * @glslConstant 
 */
const czm_raySegment czm_fullRaySegment = czm_raySegment(0.0, czm_infinity);
`;var HG=`struct czm_shadowParameters
{
#ifdef USE_CUBE_MAP_SHADOW
    vec3 texCoords;
#else
    vec2 texCoords;
#endif

    float depthBias;
    float depth;
    float nDotL;
    vec2 texelStepSize;
    float normalShadingSmooth;
    float darkness;
};
`;var LG=`/**
 * Converts an HSB color (hue, saturation, brightness) to RGB
 * HSB <-> RGB conversion with minimal branching: {@link http://lolengine.net/blog/2013/07/27/rgb-to-hsv-in-glsl}
 *
 * @name czm_HSBToRGB
 * @glslFunction
 * 
 * @param {vec3} hsb The color in HSB.
 *
 * @returns {vec3} The color in RGB.
 *
 * @example
 * vec3 hsb = czm_RGBToHSB(rgb);
 * hsb.z *= 0.1;
 * rgb = czm_HSBToRGB(hsb);
 */

const vec4 K_HSB2RGB = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);

vec3 czm_HSBToRGB(vec3 hsb)
{
    vec3 p = abs(fract(hsb.xxx + K_HSB2RGB.xyz) * 6.0 - K_HSB2RGB.www);
    return hsb.z * mix(K_HSB2RGB.xxx, clamp(p - K_HSB2RGB.xxx, 0.0, 1.0), hsb.y);
}
`;var KG=`/**
 * Converts an HSL color (hue, saturation, lightness) to RGB
 * HSL <-> RGB conversion: {@link http://www.chilliant.com/rgb2hsv.html}
 *
 * @name czm_HSLToRGB
 * @glslFunction
 * 
 * @param {vec3} rgb The color in HSL.
 *
 * @returns {vec3} The color in RGB.
 *
 * @example
 * vec3 hsl = czm_RGBToHSL(rgb);
 * hsl.z *= 0.1;
 * rgb = czm_HSLToRGB(hsl);
 */

vec3 hueToRGB(float hue)
{
    float r = abs(hue * 6.0 - 3.0) - 1.0;
    float g = 2.0 - abs(hue * 6.0 - 2.0);
    float b = 2.0 - abs(hue * 6.0 - 4.0);
    return clamp(vec3(r, g, b), 0.0, 1.0);
}

vec3 czm_HSLToRGB(vec3 hsl)
{
    vec3 rgb = hueToRGB(hsl.x);
    float c = (1.0 - abs(2.0 * hsl.z - 1.0)) * hsl.y;
    return (rgb - 0.5) * c + hsl.z;
}
`;var PG=`/**
 * Converts an RGB color to HSB (hue, saturation, brightness)
 * HSB <-> RGB conversion with minimal branching: {@link http://lolengine.net/blog/2013/07/27/rgb-to-hsv-in-glsl}
 *
 * @name czm_RGBToHSB
 * @glslFunction
 * 
 * @param {vec3} rgb The color in RGB.
 *
 * @returns {vec3} The color in HSB.
 *
 * @example
 * vec3 hsb = czm_RGBToHSB(rgb);
 * hsb.z *= 0.1;
 * rgb = czm_HSBToRGB(hsb);
 */

const vec4 K_RGB2HSB = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);

vec3 czm_RGBToHSB(vec3 rgb)
{
    vec4 p = mix(vec4(rgb.bg, K_RGB2HSB.wz), vec4(rgb.gb, K_RGB2HSB.xy), step(rgb.b, rgb.g));
    vec4 q = mix(vec4(p.xyw, rgb.r), vec4(rgb.r, p.yzx), step(p.x, rgb.r));

    float d = q.x - min(q.w, q.y);
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + czm_epsilon7)), d / (q.x + czm_epsilon7), q.x);
}
`;var jG=`/**
 * Converts an RGB color to HSL (hue, saturation, lightness)
 * HSL <-> RGB conversion: {@link http://www.chilliant.com/rgb2hsv.html}
 *
 * @name czm_RGBToHSL
 * @glslFunction
 * 
 * @param {vec3} rgb The color in RGB.
 *
 * @returns {vec3} The color in HSL.
 *
 * @example
 * vec3 hsl = czm_RGBToHSL(rgb);
 * hsl.z *= 0.1;
 * rgb = czm_HSLToRGB(hsl);
 */
 
vec3 RGBtoHCV(vec3 rgb)
{
    // Based on work by Sam Hocevar and Emil Persson
    vec4 p = (rgb.g < rgb.b) ? vec4(rgb.bg, -1.0, 2.0 / 3.0) : vec4(rgb.gb, 0.0, -1.0 / 3.0);
    vec4 q = (rgb.r < p.x) ? vec4(p.xyw, rgb.r) : vec4(rgb.r, p.yzx);
    float c = q.x - min(q.w, q.y);
    float h = abs((q.w - q.y) / (6.0 * c + czm_epsilon7) + q.z);
    return vec3(h, c, q.x);
}

vec3 czm_RGBToHSL(vec3 rgb)
{
    vec3 hcv = RGBtoHCV(rgb);
    float l = hcv.z - hcv.y * 0.5;
    float s = hcv.y / (1.0 - abs(l * 2.0 - 1.0) + czm_epsilon7);
    return vec3(hcv.x, s, l);
}
`;var qG=`/**
 * Converts an RGB color to CIE Yxy.
 * <p>The conversion is described in
 * {@link http://content.gpwiki.org/index.php/D3DBook:High-Dynamic_Range_Rendering#Luminance_Transform|Luminance Transform}
 * </p>
 * 
 * @name czm_RGBToXYZ
 * @glslFunction
 * 
 * @param {vec3} rgb The color in RGB.
 *
 * @returns {vec3} The color in CIE Yxy.
 *
 * @example
 * vec3 xyz = czm_RGBToXYZ(rgb);
 * xyz.x = max(xyz.x - luminanceThreshold, 0.0);
 * rgb = czm_XYZToRGB(xyz);
 */
vec3 czm_RGBToXYZ(vec3 rgb)
{
    const mat3 RGB2XYZ = mat3(0.4124, 0.2126, 0.0193,
                              0.3576, 0.7152, 0.1192,
                              0.1805, 0.0722, 0.9505);
    vec3 xyz = RGB2XYZ * rgb;
    vec3 Yxy;
    Yxy.r = xyz.g;
    float temp = dot(vec3(1.0), xyz);
    Yxy.gb = xyz.rg / temp;
    return Yxy;
}
`;var $G=`/**
 * Converts a CIE Yxy color to RGB.
 * <p>The conversion is described in
 * {@link http://content.gpwiki.org/index.php/D3DBook:High-Dynamic_Range_Rendering#Luminance_Transform|Luminance Transform}
 * </p>
 * 
 * @name czm_XYZToRGB
 * @glslFunction
 * 
 * @param {vec3} Yxy The color in CIE Yxy.
 *
 * @returns {vec3} The color in RGB.
 *
 * @example
 * vec3 xyz = czm_RGBToXYZ(rgb);
 * xyz.x = max(xyz.x - luminanceThreshold, 0.0);
 * rgb = czm_XYZToRGB(xyz);
 */
vec3 czm_XYZToRGB(vec3 Yxy)
{
    const mat3 XYZ2RGB = mat3( 3.2405, -0.9693,  0.0556,
                              -1.5371,  1.8760, -0.2040,
                              -0.4985,  0.0416,  1.0572);
    vec3 xyz;
    xyz.r = Yxy.r * Yxy.g / Yxy.b;
    xyz.g = Yxy.r;
    xyz.b = Yxy.r * (1.0 - Yxy.g - Yxy.b) / Yxy.b;
    
    return XYZ2RGB * xyz;
}
`;var Vs=`// See:
//    https://knarkowicz.wordpress.com/2016/01/06/aces-filmic-tone-mapping-curve/

vec3 czm_acesTonemapping(vec3 color) {
    float g = 0.985;
    float a = 0.065;
    float b = 0.0001;
    float c = 0.433;
    float d = 0.238;

    color = (color * (color + a) - b) / (color * (g * color + c) + d);

    color = clamp(color, 0.0, 1.0);

    return color;
}
`;var ls=`/**
 * @private
 */
float czm_alphaWeight(float a)
{
    float z = (gl_FragCoord.z - czm_viewportTransformation[3][2]) / czm_viewportTransformation[2][2];

    // See Weighted Blended Order-Independent Transparency for examples of different weighting functions:
    // http://jcgt.org/published/0002/02/09/
    return pow(a + 0.01, 4.0) + max(1e-2, min(3.0 * 1e3, 0.003 / (1e-5 + pow(abs(z) / 200.0, 4.0))));
}
`;var Zs=`/**
 * Procedural anti-aliasing by blurring two colors that meet at a sharp edge.
 *
 * @name czm_antialias
 * @glslFunction
 *
 * @param {vec4} color1 The color on one side of the edge.
 * @param {vec4} color2 The color on the other side of the edge.
 * @param {vec4} currentcolor The current color, either <code>color1</code> or <code>color2</code>.
 * @param {float} dist The distance to the edge in texture coordinates.
 * @param {float} [fuzzFactor=0.1] Controls the blurriness between the two colors.
 * @returns {vec4} The anti-aliased color.
 *
 * @example
 * // GLSL declarations
 * vec4 czm_antialias(vec4 color1, vec4 color2, vec4 currentColor, float dist, float fuzzFactor);
 * vec4 czm_antialias(vec4 color1, vec4 color2, vec4 currentColor, float dist);
 *
 * // get the color for a material that has a sharp edge at the line y = 0.5 in texture space
 * float dist = abs(textureCoordinates.t - 0.5);
 * vec4 currentColor = mix(bottomColor, topColor, step(0.5, textureCoordinates.t));
 * vec4 color = czm_antialias(bottomColor, topColor, currentColor, dist, 0.1);
 */
vec4 czm_antialias(vec4 color1, vec4 color2, vec4 currentColor, float dist, float fuzzFactor)
{
    float val1 = clamp(dist / fuzzFactor, 0.0, 1.0);
    float val2 = clamp((dist - 0.5) / fuzzFactor, 0.0, 1.0);
    val1 = val1 * (1.0 - val2);
    val1 = val1 * val1 * (3.0 - (2.0 * val1));
    val1 = pow(val1, 0.5); //makes the transition nicer
    
    vec4 midColor = (color1 + color2) * 0.5;
    return mix(midColor, currentColor, val1);
}

vec4 czm_antialias(vec4 color1, vec4 color2, vec4 currentColor, float dist)
{
    return czm_antialias(color1, color2, currentColor, dist, 0.1);
}
`;var Ws=`/**
 * Approximately computes spherical coordinates given a normal.
 * Uses approximate inverse trigonometry for speed and consistency,
 * since inverse trigonometry can differ from vendor-to-vendor and when compared with the CPU.
 *
 * @name czm_approximateSphericalCoordinates
 * @glslFunction
 *
 * @param {vec3} normal arbitrary-length normal.
 *
 * @returns {vec2} Approximate latitude and longitude spherical coordinates.
 */
vec2 czm_approximateSphericalCoordinates(vec3 normal) {
    // Project into plane with vertical for latitude
    float latitudeApproximation = czm_fastApproximateAtan(sqrt(normal.x * normal.x + normal.y * normal.y), normal.z);
    float longitudeApproximation = czm_fastApproximateAtan(normal.x, normal.y);
    return vec2(latitudeApproximation, longitudeApproximation);
}
`;var Us=`/**
 * Determines if the fragment is back facing
 *
 * @name czm_backFacing
 * @glslFunction 
 * 
 * @returns {bool} <code>true</code> if the fragment is back facing; otherwise, <code>false</code>.
 */
bool czm_backFacing()
{
    // !gl_FrontFacing doesn't work as expected on Mac/Intel so use the more verbose form instead. See https://github.com/CesiumGS/cesium/pull/8494.
    return gl_FrontFacing == false;
}
`;var As=`/**
 * Branchless ternary operator to be used when it's inexpensive to explicitly
 * evaluate both possibilities for a float expression.
 *
 * @name czm_branchFreeTernary
 * @glslFunction
 *
 * @param {bool} comparison A comparison statement
 * @param {float} a Value to return if the comparison is true.
 * @param {float} b Value to return if the comparison is false.
 *
 * @returns {float} equivalent of comparison ? a : b
 */
float czm_branchFreeTernary(bool comparison, float a, float b) {
    float useA = float(comparison);
    return a * useA + b * (1.0 - useA);
}

/**
 * Branchless ternary operator to be used when it's inexpensive to explicitly
 * evaluate both possibilities for a vec2 expression.
 *
 * @name czm_branchFreeTernary
 * @glslFunction
 *
 * @param {bool} comparison A comparison statement
 * @param {vec2} a Value to return if the comparison is true.
 * @param {vec2} b Value to return if the comparison is false.
 *
 * @returns {vec2} equivalent of comparison ? a : b
 */
vec2 czm_branchFreeTernary(bool comparison, vec2 a, vec2 b) {
    float useA = float(comparison);
    return a * useA + b * (1.0 - useA);
}

/**
 * Branchless ternary operator to be used when it's inexpensive to explicitly
 * evaluate both possibilities for a vec3 expression.
 *
 * @name czm_branchFreeTernary
 * @glslFunction
 *
 * @param {bool} comparison A comparison statement
 * @param {vec3} a Value to return if the comparison is true.
 * @param {vec3} b Value to return if the comparison is false.
 *
 * @returns {vec3} equivalent of comparison ? a : b
 */
vec3 czm_branchFreeTernary(bool comparison, vec3 a, vec3 b) {
    float useA = float(comparison);
    return a * useA + b * (1.0 - useA);
}

/**
 * Branchless ternary operator to be used when it's inexpensive to explicitly
 * evaluate both possibilities for a vec4 expression.
 *
 * @name czm_branchFreeTernary
 * @glslFunction
 *
 * @param {bool} comparison A comparison statement
 * @param {vec3} a Value to return if the comparison is true.
 * @param {vec3} b Value to return if the comparison is false.
 *
 * @returns {vec3} equivalent of comparison ? a : b
 */
vec4 czm_branchFreeTernary(bool comparison, vec4 a, vec4 b) {
    float useA = float(comparison);
    return a * useA + b * (1.0 - useA);
}
`;var ts=`
vec4 czm_cascadeColor(vec4 weights)
{
    return vec4(1.0, 0.0, 0.0, 1.0) * weights.x +
           vec4(0.0, 1.0, 0.0, 1.0) * weights.y +
           vec4(0.0, 0.0, 1.0, 1.0) * weights.z +
           vec4(1.0, 0.0, 1.0, 1.0) * weights.w;
}
`;var es=`
uniform vec4 shadowMap_cascadeDistances;

float czm_cascadeDistance(vec4 weights)
{
    return dot(shadowMap_cascadeDistances, weights);
}
`;var ms=`
uniform mat4 shadowMap_cascadeMatrices[4];

mat4 czm_cascadeMatrix(vec4 weights)
{
    return shadowMap_cascadeMatrices[0] * weights.x +
           shadowMap_cascadeMatrices[1] * weights.y +
           shadowMap_cascadeMatrices[2] * weights.z +
           shadowMap_cascadeMatrices[3] * weights.w;
}
`;var is=`
uniform vec4 shadowMap_cascadeSplits[2];

vec4 czm_cascadeWeights(float depthEye)
{
    // One component is set to 1.0 and all others set to 0.0.
    vec4 near = step(shadowMap_cascadeSplits[0], vec4(depthEye));
    vec4 far = step(depthEye, shadowMap_cascadeSplits[1]);
    return near * far;
}
`;var ns=`/**
 * DOC_TBA
 *
 * @name czm_columbusViewMorph
 * @glslFunction
 */
vec4 czm_columbusViewMorph(vec4 position2D, vec4 position3D, float time)
{
    // Just linear for now.
    vec3 p = mix(position2D.xyz, position3D.xyz, time);
    return vec4(p, 1.0);
}
`;var Gs=`/**
 * Returns a position in model coordinates relative to eye taking into
 * account the current scene mode: 3D, 2D, or Columbus view.
 * <p>
 * This uses standard position attributes, <code>position3DHigh</code>, 
 * <code>position3DLow</code>, <code>position2DHigh</code>, and <code>position2DLow</code>, 
 * and should be used when writing a vertex shader for an {@link Appearance}.
 * </p>
 *
 * @name czm_computePosition
 * @glslFunction
 *
 * @returns {vec4} The position relative to eye.
 *
 * @example
 * vec4 p = czm_computePosition();
 * v_positionEC = (czm_modelViewRelativeToEye * p).xyz;
 * gl_Position = czm_modelViewProjectionRelativeToEye * p;
 *
 * @see czm_translateRelativeToEye
 */
vec4 czm_computePosition();
`;var ss=`/**
 * @private
 */
vec2 cordic(float angle)
{
// Scale the vector by the appropriate factor for the 24 iterations to follow.
    vec2 vector = vec2(6.0725293500888267e-1, 0.0);
// Iteration 1
    float sense = (angle < 0.0) ? -1.0 : 1.0;
 //   float factor = sense * 1.0;  // 2^-0
    mat2 rotation = mat2(1.0, sense, -sense, 1.0);
    vector = rotation * vector;
    angle -= sense * 7.8539816339744828e-1;  // atan(2^-0)
// Iteration 2
    sense = (angle < 0.0) ? -1.0 : 1.0;
    float factor = sense * 5.0e-1;  // 2^-1
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 4.6364760900080609e-1;  // atan(2^-1)
// Iteration 3
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 2.5e-1;  // 2^-2
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 2.4497866312686414e-1;  // atan(2^-2)
// Iteration 4
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 1.25e-1;  // 2^-3
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 1.2435499454676144e-1;  // atan(2^-3)
// Iteration 5
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 6.25e-2;  // 2^-4
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 6.2418809995957350e-2;  // atan(2^-4)
// Iteration 6
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 3.125e-2;  // 2^-5
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 3.1239833430268277e-2;  // atan(2^-5)
// Iteration 7
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 1.5625e-2;  // 2^-6
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 1.5623728620476831e-2;  // atan(2^-6)
// Iteration 8
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 7.8125e-3;  // 2^-7
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 7.8123410601011111e-3;  // atan(2^-7)
// Iteration 9
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 3.90625e-3;  // 2^-8
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 3.9062301319669718e-3;  // atan(2^-8)
// Iteration 10
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 1.953125e-3;  // 2^-9
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 1.9531225164788188e-3;  // atan(2^-9)
// Iteration 11
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 9.765625e-4;  // 2^-10
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 9.7656218955931946e-4;  // atan(2^-10)
// Iteration 12
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 4.8828125e-4;  // 2^-11
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 4.8828121119489829e-4;  // atan(2^-11)
// Iteration 13
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 2.44140625e-4;  // 2^-12
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 2.4414062014936177e-4;  // atan(2^-12)
// Iteration 14
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 1.220703125e-4;  // 2^-13
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 1.2207031189367021e-4;  // atan(2^-13)
// Iteration 15
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 6.103515625e-5;  // 2^-14
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 6.1035156174208773e-5;  // atan(2^-14)
// Iteration 16
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 3.0517578125e-5;  // 2^-15
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 3.0517578115526096e-5;  // atan(2^-15)
// Iteration 17
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 1.52587890625e-5;  // 2^-16
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 1.5258789061315762e-5;  // atan(2^-16)
// Iteration 18
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 7.62939453125e-6;  // 2^-17
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 7.6293945311019700e-6;  // atan(2^-17)
// Iteration 19
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 3.814697265625e-6;  // 2^-18
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 3.8146972656064961e-6;  // atan(2^-18)
// Iteration 20
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 1.9073486328125e-6;  // 2^-19
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 1.9073486328101870e-6;  // atan(2^-19)
// Iteration 21
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 9.5367431640625e-7;  // 2^-20
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 9.5367431640596084e-7;  // atan(2^-20)
// Iteration 22
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 4.76837158203125e-7;  // 2^-21
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 4.7683715820308884e-7;  // atan(2^-21)
// Iteration 23
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 2.384185791015625e-7;  // 2^-22
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
    angle -= sense * 2.3841857910155797e-7;  // atan(2^-22)
// Iteration 24
    sense = (angle < 0.0) ? -1.0 : 1.0;
    factor = sense * 1.1920928955078125e-7;  // 2^-23
    rotation[0][1] = factor;
    rotation[1][0] = -factor;
    vector = rotation * vector;
//    angle -= sense * 1.1920928955078068e-7;  // atan(2^-23)

    return vector;
}

/**
 * Computes the cosine and sine of the provided angle using the CORDIC algorithm.
 *
 * @name czm_cosineAndSine
 * @glslFunction
 *
 * @param {float} angle The angle in radians.
 *
 * @returns {vec2} The resulting cosine of the angle (as the x coordinate) and sine of the angle (as the y coordinate).
 *
 * @example
 * vec2 v = czm_cosineAndSine(czm_piOverSix);
 * float cosine = v.x;
 * float sine = v.y;
 */
vec2 czm_cosineAndSine(float angle)
{
    if (angle < -czm_piOverTwo || angle > czm_piOverTwo)
    {
        if (angle < 0.0)
        {
            return -cordic(angle + czm_pi);
        }
        else
        {
            return -cordic(angle - czm_pi);
        }
    }
    else
    {
        return cordic(angle);
    }
}
`;var as=`/**
 * Decompresses texture coordinates that were packed into a single float.
 *
 * @name czm_decompressTextureCoordinates
 * @glslFunction
 *
 * @param {float} encoded The compressed texture coordinates.
 * @returns {vec2} The decompressed texture coordinates.
 */
 vec2 czm_decompressTextureCoordinates(float encoded)
 {
    float temp = encoded / 4096.0;
    float xZeroTo4095 = floor(temp);
    float stx = xZeroTo4095 / 4095.0;
    float sty = (encoded - xZeroTo4095 * 4096.0) / 4095.0;
    return vec2(stx, sty);
 }
`;var rs=`/**
 * Get default parameters for physically based rendering. These defaults
 * describe a rough dielectric (non-metal) surface (e.g. rough plastic).
 *
 * @return {czm_pbrParameters} Default parameters for {@link czm_pbrLighting}
 */
czm_pbrParameters czm_defaultPbrMaterial()
{
    czm_pbrParameters results;
    results.diffuseColor = vec3(1.0);
    results.roughness = 1.0;

    const vec3 REFLECTANCE_DIELECTRIC = vec3(0.04);
    results.f0 = REFLECTANCE_DIELECTRIC;
    return results;
}
`;var os=`// emulated noperspective
#if (__VERSION__ == 300 || defined(GL_EXT_frag_depth)) && !defined(LOG_DEPTH)
out float v_WindowZ;
#endif

/**
 * Emulates GL_DEPTH_CLAMP, which is not available in WebGL 1 or 2.
 * GL_DEPTH_CLAMP clamps geometry that is outside the near and far planes, 
 * capping the shadow volume. More information here: 
 * https://www.khronos.org/registry/OpenGL/extensions/ARB/ARB_depth_clamp.txt.
 *
 * When GL_EXT_frag_depth is available we emulate GL_DEPTH_CLAMP by ensuring 
 * no geometry gets clipped by setting the clip space z value to 0.0 and then
 * sending the unaltered screen space z value (using emulated noperspective
 * interpolation) to the frag shader where it is clamped to [0,1] and then
 * written with gl_FragDepth (see czm_writeDepthClamp). This technique is based on:
 * https://stackoverflow.com/questions/5960757/how-to-emulate-gl-depth-clamp-nv.
 *
 * When GL_EXT_frag_depth is not available, which is the case on some mobile 
 * devices, we must attempt to fix this only in the vertex shader. 
 * The approach is to clamp the z value to the far plane, which closes the 
 * shadow volume but also distorts the geometry, so there can still be artifacts
 * on frustum seams.
 *
 * @name czm_depthClamp
 * @glslFunction
 *
 * @param {vec4} coords The vertex in clip coordinates.
 * @returns {vec4} The modified vertex.
 *
 * @example
 * gl_Position = czm_depthClamp(czm_modelViewProjection * vec4(position, 1.0));
 *
 * @see czm_writeDepthClamp
 */
vec4 czm_depthClamp(vec4 coords)
{
#ifndef LOG_DEPTH
#if __VERSION__ == 300 || defined(GL_EXT_frag_depth)
    v_WindowZ = (0.5 * (coords.z / coords.w) + 0.5) * coords.w;
    coords.z = 0.0;
#else
    coords.z = min(coords.z, coords.w);
#endif
#endif
    return coords;
}
`;var hs=`/**
 * Computes a 3x3 rotation matrix that transforms vectors from an ellipsoid's east-north-up coordinate system 
 * to eye coordinates.  In east-north-up coordinates, x points east, y points north, and z points along the 
 * surface normal.  East-north-up can be used as an ellipsoid's tangent space for operations such as bump mapping.
 * <br /><br />
 * The ellipsoid is assumed to be centered at the model coordinate's origin.
 *
 * @name czm_eastNorthUpToEyeCoordinates
 * @glslFunction
 *
 * @param {vec3} positionMC The position on the ellipsoid in model coordinates.
 * @param {vec3} normalEC The normalized ellipsoid surface normal, at <code>positionMC</code>, in eye coordinates.
 *
 * @returns {mat3} A 3x3 rotation matrix that transforms vectors from the east-north-up coordinate system to eye coordinates.
 *
 * @example
 * // Transform a vector defined in the east-north-up coordinate 
 * // system, (0, 0, 1) which is the surface normal, to eye 
 * // coordinates.
 * mat3 m = czm_eastNorthUpToEyeCoordinates(positionMC, normalEC);
 * vec3 normalEC = m * vec3(0.0, 0.0, 1.0);
 */
mat3 czm_eastNorthUpToEyeCoordinates(vec3 positionMC, vec3 normalEC)
{
    vec3 tangentMC = normalize(vec3(-positionMC.y, positionMC.x, 0.0));  // normalized surface tangent in model coordinates
    vec3 tangentEC = normalize(czm_normal3D * tangentMC);                // normalized surface tangent in eye coordinates
    vec3 bitangentEC = normalize(cross(normalEC, tangentEC));            // normalized surface bitangent in eye coordinates

    return mat3(
        tangentEC.x,   tangentEC.y,   tangentEC.z,
        bitangentEC.x, bitangentEC.y, bitangentEC.z,
        normalEC.x,    normalEC.y,    normalEC.z);
}
`;var Rs=`/**
 * DOC_TBA
 *
 * @name czm_ellipsoidContainsPoint
 * @glslFunction
 *
 */
bool czm_ellipsoidContainsPoint(vec3 ellipsoid_inverseRadii, vec3 point)
{
    vec3 scaled = ellipsoid_inverseRadii * (czm_inverseModelView * vec4(point, 1.0)).xyz;
    return (dot(scaled, scaled) <= 1.0);
}
`;var ds=`/**
 * DOC_TBA
 *
 * @name czm_ellipsoidWgs84TextureCoordinates
 * @glslFunction
 */
vec2 czm_ellipsoidWgs84TextureCoordinates(vec3 normal)
{
    return vec2(atan(normal.y, normal.x) * czm_oneOverTwoPi + 0.5, asin(normal.z) * czm_oneOverPi + 0.5);
}
`;var Ts=`/**
 * Compares <code>left</code> and <code>right</code> componentwise. Returns <code>true</code>
 * if they are within <code>epsilon</code> and <code>false</code> otherwise. The inputs
 * <code>left</code> and <code>right</code> can be <code>float</code>s, <code>vec2</code>s,
 * <code>vec3</code>s, or <code>vec4</code>s.
 *
 * @name czm_equalsEpsilon
 * @glslFunction
 *
 * @param {} left The first vector.
 * @param {} right The second vector.
 * @param {float} epsilon The epsilon to use for equality testing.
 * @returns {bool} <code>true</code> if the components are within <code>epsilon</code> and <code>false</code> otherwise.
 *
 * @example
 * // GLSL declarations
 * bool czm_equalsEpsilon(float left, float right, float epsilon);
 * bool czm_equalsEpsilon(vec2 left, vec2 right, float epsilon);
 * bool czm_equalsEpsilon(vec3 left, vec3 right, float epsilon);
 * bool czm_equalsEpsilon(vec4 left, vec4 right, float epsilon);
 */
bool czm_equalsEpsilon(vec4 left, vec4 right, float epsilon) {
    return all(lessThanEqual(abs(left - right), vec4(epsilon)));
}

bool czm_equalsEpsilon(vec3 left, vec3 right, float epsilon) {
    return all(lessThanEqual(abs(left - right), vec3(epsilon)));
}

bool czm_equalsEpsilon(vec2 left, vec2 right, float epsilon) {
    return all(lessThanEqual(abs(left - right), vec2(epsilon)));
}

bool czm_equalsEpsilon(float left, float right, float epsilon) {
    return (abs(left - right) <= epsilon);
}
`;var Bs=`/**
 * DOC_TBA
 *
 * @name czm_eyeOffset
 * @glslFunction
 *
 * @param {vec4} positionEC DOC_TBA.
 * @param {vec3} eyeOffset DOC_TBA.
 *
 * @returns {vec4} DOC_TBA.
 */
vec4 czm_eyeOffset(vec4 positionEC, vec3 eyeOffset)
{
    // This equation is approximate in x and y.
    vec4 p = positionEC;
    vec4 zEyeOffset = normalize(p) * eyeOffset.z;
    p.xy += eyeOffset.xy + zEyeOffset.xy;
    p.z += zEyeOffset.z;
    return p;
}
`;var Fs=`/**
 * Transforms a position from eye to window coordinates.  The transformation
 * from eye to clip coordinates is done using {@link czm_projection}.
 * The transform from normalized device coordinates to window coordinates is
 * done using {@link czm_viewportTransformation}, which assumes a depth range
 * of <code>near = 0</code> and <code>far = 1</code>.
 * <br /><br />
 * This transform is useful when there is a need to manipulate window coordinates
 * in a vertex shader as done by {@link BillboardCollection}.
 *
 * @name czm_eyeToWindowCoordinates
 * @glslFunction
 *
 * @param {vec4} position The position in eye coordinates to transform.
 *
 * @returns {vec4} The transformed position in window coordinates.
 *
 * @see czm_modelToWindowCoordinates
 * @see czm_projection
 * @see czm_viewportTransformation
 * @see BillboardCollection
 *
 * @example
 * vec4 positionWC = czm_eyeToWindowCoordinates(positionEC);
 */
vec4 czm_eyeToWindowCoordinates(vec4 positionEC)
{
    vec4 q = czm_projection * positionEC;                        // clip coordinates
    q.xyz /= q.w;                                                // normalized device coordinates
    q.xyz = (czm_viewportTransformation * vec4(q.xyz, 1.0)).xyz; // window coordinates
    return q;
}
`;var Qs=`/**
 * Approxiamtes atan over the range [0, 1]. Safe to flip output for negative input.
 *
 * Based on Michal Drobot's approximation from ShaderFastLibs, which in turn is based on
 * "Efficient approximations for the arctangent function," Rajan, S. Sichun Wang Inkol, R. Joyal, A., May 2006.
 * Adapted from ShaderFastLibs under MIT License.
 *
 * Chosen for the following characteristics over range [0, 1]:
 * - basically no error at 0 and 1, important for getting around range limit (naive atan2 via atan requires infinite range atan)
 * - no visible artifacts from first-derivative discontinuities, unlike latitude via range-reduced sqrt asin approximations (at equator)
 *
 * The original code is x * (-0.1784 * abs(x) - 0.0663 * x * x + 1.0301);
 * Removed the abs() in here because it isn't needed, the input range is guaranteed as [0, 1] by how we're approximating atan2.
 *
 * @name czm_fastApproximateAtan
 * @glslFunction
 *
 * @param {float} x Value between 0 and 1 inclusive.
 *
 * @returns {float} Approximation of atan(x)
 */
float czm_fastApproximateAtan(float x) {
    return x * (-0.1784 * x - 0.0663 * x * x + 1.0301);
}

/**
 * Approximation of atan2.
 *
 * Range reduction math based on nvidia's cg reference implementation for atan2: http://developer.download.nvidia.com/cg/atan2.html
 * However, we replaced their atan curve with Michael Drobot's (see above).
 *
 * @name czm_fastApproximateAtan
 * @glslFunction
 *
 * @param {float} x Value between -1 and 1 inclusive.
 * @param {float} y Value between -1 and 1 inclusive.
 *
 * @returns {float} Approximation of atan2(x, y)
 */
float czm_fastApproximateAtan(float x, float y) {
    // atan approximations are usually only reliable over [-1, 1], or, in our case, [0, 1] due to modifications.
    // So range-reduce using abs and by flipping whether x or y is on top.
    float t = abs(x); // t used as swap and atan result.
    float opposite = abs(y);
    float adjacent = max(t, opposite);
    opposite = min(t, opposite);

    t = czm_fastApproximateAtan(opposite / adjacent);

    // Undo range reduction
    t = czm_branchFreeTernary(abs(y) > abs(x), czm_piOverTwo - t, t);
    t = czm_branchFreeTernary(x < 0.0, czm_pi - t, t);
    t = czm_branchFreeTernary(y < 0.0, -t, t);
    return t;
}
`;var Is=`/**
 * Gets the color with fog at a distance from the camera.
 *
 * @name czm_fog
 * @glslFunction
 *
 * @param {float} distanceToCamera The distance to the camera in meters.
 * @param {vec3} color The original color.
 * @param {vec3} fogColor The color of the fog.
 *
 * @returns {vec3} The color adjusted for fog at the distance from the camera.
 */
vec3 czm_fog(float distanceToCamera, vec3 color, vec3 fogColor)
{
    float scalar = distanceToCamera * czm_fogDensity;
    float fog = 1.0 - exp(-(scalar * scalar));
    return mix(color, fogColor, fog);
}

/**
 * Gets the color with fog at a distance from the camera.
 *
 * @name czm_fog
 * @glslFunction
 *
 * @param {float} distanceToCamera The distance to the camera in meters.
 * @param {vec3} color The original color.
 * @param {vec3} fogColor The color of the fog.
 * @param {float} fogModifierConstant A constant to modify the appearance of fog.
 *
 * @returns {vec3} The color adjusted for fog at the distance from the camera.
 */
vec3 czm_fog(float distanceToCamera, vec3 color, vec3 fogColor, float fogModifierConstant)
{
    float scalar = distanceToCamera * czm_fogDensity;
    float fog = 1.0 - exp(-((fogModifierConstant * scalar + fogModifierConstant) * (scalar * (1.0 + fogModifierConstant))));
    return mix(color, fogColor, fog);
}
`;var cs=`/**
 * Converts a color from RGB space to linear space.
 *
 * @name czm_gammaCorrect
 * @glslFunction
 *
 * @param {vec3} color The color in RGB space.
 * @returns {vec3} The color in linear space.
 */
vec3 czm_gammaCorrect(vec3 color) {
#ifdef HDR
    color = pow(color, vec3(czm_gamma));
#endif
    return color;
}

vec4 czm_gammaCorrect(vec4 color) {
#ifdef HDR
    color.rgb = pow(color.rgb, vec3(czm_gamma));
#endif
    return color;
}
`;var Ss=`/**
 * DOC_TBA
 *
 * @name czm_geodeticSurfaceNormal
 * @glslFunction
 *
 * @param {vec3} positionOnEllipsoid DOC_TBA
 * @param {vec3} ellipsoidCenter DOC_TBA
 * @param {vec3} oneOverEllipsoidRadiiSquared DOC_TBA
 * 
 * @returns {vec3} DOC_TBA.
 */
vec3 czm_geodeticSurfaceNormal(vec3 positionOnEllipsoid, vec3 ellipsoidCenter, vec3 oneOverEllipsoidRadiiSquared)
{
    return normalize((positionOnEllipsoid - ellipsoidCenter) * oneOverEllipsoidRadiiSquared);
}
`;var Cs=`/**
 * An czm_material with default values. Every material's czm_getMaterial
 * should use this default material as a base for the material it returns.
 * The default normal value is given by materialInput.normalEC.
 *
 * @name czm_getDefaultMaterial
 * @glslFunction
 *
 * @param {czm_materialInput} input The input used to construct the default material.
 *
 * @returns {czm_material} The default material.
 *
 * @see czm_materialInput
 * @see czm_material
 * @see czm_getMaterial
 */
czm_material czm_getDefaultMaterial(czm_materialInput materialInput)
{
    czm_material material;
    material.diffuse = vec3(0.0);
    material.specular = 0.0;
    material.shininess = 1.0;
    material.normal = materialInput.normalEC;
    material.emission = vec3(0.0);
    material.alpha = 1.0;
    return material;
}
`;var gs=`/**
 * Calculates the intensity of diffusely reflected light.
 *
 * @name czm_getLambertDiffuse
 * @glslFunction
 *
 * @param {vec3} lightDirectionEC Unit vector pointing to the light source in eye coordinates.
 * @param {vec3} normalEC The surface normal in eye coordinates.
 *
 * @returns {float} The intensity of the diffuse reflection.
 *
 * @see czm_phong
 *
 * @example
 * float diffuseIntensity = czm_getLambertDiffuse(lightDirectionEC, normalEC);
 * float specularIntensity = czm_getSpecular(lightDirectionEC, toEyeEC, normalEC, 200);
 * vec3 color = (diffuseColor * diffuseIntensity) + (specularColor * specularIntensity);
 */
float czm_getLambertDiffuse(vec3 lightDirectionEC, vec3 normalEC)
{
    return max(dot(lightDirectionEC, normalEC), 0.0);
}
`;var Ns=`/**
 * Calculates the specular intensity of reflected light.
 *
 * @name czm_getSpecular
 * @glslFunction
 *
 * @param {vec3} lightDirectionEC Unit vector pointing to the light source in eye coordinates.
 * @param {vec3} toEyeEC Unit vector pointing to the eye position in eye coordinates.
 * @param {vec3} normalEC The surface normal in eye coordinates.
 * @param {float} shininess The sharpness of the specular reflection.  Higher values create a smaller, more focused specular highlight.
 *
 * @returns {float} The intensity of the specular highlight.
 *
 * @see czm_phong
 *
 * @example
 * float diffuseIntensity = czm_getLambertDiffuse(lightDirectionEC, normalEC);
 * float specularIntensity = czm_getSpecular(lightDirectionEC, toEyeEC, normalEC, 200);
 * vec3 color = (diffuseColor * diffuseIntensity) + (specularColor * specularIntensity);
 */
float czm_getSpecular(vec3 lightDirectionEC, vec3 toEyeEC, vec3 normalEC, float shininess)
{
    vec3 toReflectedLight = reflect(-lightDirectionEC, normalEC);
    float specular = max(dot(toReflectedLight, toEyeEC), 0.0);

    // pow has undefined behavior if both parameters <= 0.
    // Prevent this by making sure shininess is at least czm_epsilon2.
    return pow(specular, max(shininess, czm_epsilon2));
}
`;var Es=`/**
 * @private
 */
vec4 czm_getWaterNoise(sampler2D normalMap, vec2 uv, float time, float angleInRadians)
{
    float cosAngle = cos(angleInRadians);
    float sinAngle = sin(angleInRadians);

    // time dependent sampling directions
    vec2 s0 = vec2(1.0/17.0, 0.0);
    vec2 s1 = vec2(-1.0/29.0, 0.0);
    vec2 s2 = vec2(1.0/101.0, 1.0/59.0);
    vec2 s3 = vec2(-1.0/109.0, -1.0/57.0);

    // rotate sampling direction by specified angle
    s0 = vec2((cosAngle * s0.x) - (sinAngle * s0.y), (sinAngle * s0.x) + (cosAngle * s0.y));
    s1 = vec2((cosAngle * s1.x) - (sinAngle * s1.y), (sinAngle * s1.x) + (cosAngle * s1.y));
    s2 = vec2((cosAngle * s2.x) - (sinAngle * s2.y), (sinAngle * s2.x) + (cosAngle * s2.y));
    s3 = vec2((cosAngle * s3.x) - (sinAngle * s3.y), (sinAngle * s3.x) + (cosAngle * s3.y));

    vec2 uv0 = (uv/103.0) + (time * s0);
    vec2 uv1 = uv/107.0 + (time * s1) + vec2(0.23);
    vec2 uv2 = uv/vec2(897.0, 983.0) + (time * s2) + vec2(0.51);
    vec2 uv3 = uv/vec2(991.0, 877.0) + (time * s3) + vec2(0.71);

    uv0 = fract(uv0);
    uv1 = fract(uv1);
    uv2 = fract(uv2);
    uv3 = fract(uv3);
    vec4 noise = (texture(normalMap, uv0)) +
                 (texture(normalMap, uv1)) +
                 (texture(normalMap, uv2)) +
                 (texture(normalMap, uv3));

    // average and scale to between -1 and 1
    return ((noise / 4.0) - 0.5) * 2.0;
}
`;var ps=`/**
 * Adjusts the hue of a color.
 * 
 * @name czm_hue
 * @glslFunction
 * 
 * @param {vec3} rgb The color.
 * @param {float} adjustment The amount to adjust the hue of the color in radians.
 *
 * @returns {float} The color with the hue adjusted.
 *
 * @example
 * vec3 adjustHue = czm_hue(color, czm_pi); // The same as czm_hue(color, -czm_pi)
 */
vec3 czm_hue(vec3 rgb, float adjustment)
{
    const mat3 toYIQ = mat3(0.299,     0.587,     0.114,
                            0.595716, -0.274453, -0.321263,
                            0.211456, -0.522591,  0.311135);
    const mat3 toRGB = mat3(1.0,  0.9563,  0.6210,
                            1.0, -0.2721, -0.6474,
                            1.0, -1.107,   1.7046);
    
    vec3 yiq = toYIQ * rgb;
    float hue = atan(yiq.z, yiq.y) + adjustment;
    float chroma = sqrt(yiq.z * yiq.z + yiq.y * yiq.y);
    
    vec3 color = vec3(yiq.x, chroma * cos(hue), chroma * sin(hue));
    return toRGB * color;
}
`;var Xs=`/**
 * Converts a color in linear space to RGB space.
 *
 * @name czm_inverseGamma
 * @glslFunction
 *
 * @param {vec3} color The color in linear space.
 * @returns {vec3} The color in RGB space.
 */
vec3 czm_inverseGamma(vec3 color) {
    return pow(color, vec3(1.0 / czm_gamma));
}
`;var fs=`/**
 * Determines if a time interval is empty.
 *
 * @name czm_isEmpty
 * @glslFunction 
 * 
 * @param {czm_raySegment} interval The interval to test.
 * 
 * @returns {bool} <code>true</code> if the time interval is empty; otherwise, <code>false</code>.
 *
 * @example
 * bool b0 = czm_isEmpty(czm_emptyRaySegment);      // true
 * bool b1 = czm_isEmpty(czm_raySegment(0.0, 1.0)); // false
 * bool b2 = czm_isEmpty(czm_raySegment(1.0, 1.0)); // false, contains 1.0.
 */
bool czm_isEmpty(czm_raySegment interval)
{
    return (interval.stop < 0.0);
}
`;var bs=`/**
 * Determines if a time interval is empty.
 *
 * @name czm_isFull
 * @glslFunction 
 * 
 * @param {czm_raySegment} interval The interval to test.
 * 
 * @returns {bool} <code>true</code> if the time interval is empty; otherwise, <code>false</code>.
 *
 * @example
 * bool b0 = czm_isEmpty(czm_emptyRaySegment);      // true
 * bool b1 = czm_isEmpty(czm_raySegment(0.0, 1.0)); // false
 * bool b2 = czm_isEmpty(czm_raySegment(1.0, 1.0)); // false, contains 1.0.
 */
bool czm_isFull(czm_raySegment interval)
{
    return (interval.start == 0.0 && interval.stop == czm_infinity);
}
`;var us=`/**
 * Computes the fraction of a Web Wercator rectangle at which a given geodetic latitude is located.
 *
 * @name czm_latitudeToWebMercatorFraction
 * @glslFunction
 *
 * @param {float} latitude The geodetic latitude, in radians.
 * @param {float} southMercatorY The Web Mercator coordinate of the southern boundary of the rectangle.
 * @param {float} oneOverMercatorHeight The total height of the rectangle in Web Mercator coordinates.
 *
 * @returns {float} The fraction of the rectangle at which the latitude occurs.  If the latitude is the southern
 *          boundary of the rectangle, the return value will be zero.  If it is the northern boundary, the return
 *          value will be 1.0.  Latitudes in between are mapped according to the Web Mercator projection.
 */ 
float czm_latitudeToWebMercatorFraction(float latitude, float southMercatorY, float oneOverMercatorHeight)
{
    float sinLatitude = sin(latitude);
    float mercatorY = 0.5 * log((1.0 + sinLatitude) / (1.0 - sinLatitude));
    
    return (mercatorY - southMercatorY) * oneOverMercatorHeight;
}
`;var Js=`/**
 * Computes distance from an point in 2D to a line in 2D.
 *
 * @name czm_lineDistance
 * @glslFunction
 *
 * param {vec2} point1 A point along the line.
 * param {vec2} point2 A point along the line.
 * param {vec2} point A point that may or may not be on the line.
 * returns {float} The distance from the point to the line.
 */
float czm_lineDistance(vec2 point1, vec2 point2, vec2 point) {
    return abs((point2.y - point1.y) * point.x - (point2.x - point1.x) * point.y + point2.x * point1.y - point2.y * point1.x) / distance(point2, point1);
}
`;var xs=`/**
 * Converts a linear RGB color to an sRGB color.
 *
 * @param {vec3|vec4} linearIn The color in linear color space.
 * @returns {vec3|vec4} The color in sRGB color space. The vector type matches the input.
 */
vec3 czm_linearToSrgb(vec3 linearIn) 
{
    return pow(linearIn, vec3(1.0/2.2));
}

vec4 czm_linearToSrgb(vec4 linearIn) 
{
    vec3 srgbOut = pow(linearIn.rgb, vec3(1.0/2.2));
    return vec4(srgbOut, linearIn.a);
}
`;var Ds=`/**
 * Computes the luminance of a color. 
 *
 * @name czm_luminance
 * @glslFunction
 *
 * @param {vec3} rgb The color.
 * 
 * @returns {float} The luminance.
 *
 * @example
 * float light = czm_luminance(vec3(0.0)); // 0.0
 * float dark = czm_luminance(vec3(1.0));  // ~1.0 
 */
float czm_luminance(vec3 rgb)
{
    // Algorithm from Chapter 10 of Graphics Shaders.
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    return dot(rgb, W);
}
`;var Ms=`/**
 * Computes the size of a pixel in meters at a distance from the eye.
 * <p>
 * Use this version when passing in a custom pixel ratio. For example, passing in 1.0 will return meters per native device pixel.
 * </p>
 * @name czm_metersPerPixel
 * @glslFunction
 *
 * @param {vec3} positionEC The position to get the meters per pixel in eye coordinates.
 * @param {float} pixelRatio The scaling factor from pixel space to coordinate space
 *
 * @returns {float} The meters per pixel at positionEC.
 */
float czm_metersPerPixel(vec4 positionEC, float pixelRatio)
{
    float width = czm_viewport.z;
    float height = czm_viewport.w;
    float pixelWidth;
    float pixelHeight;

    float top = czm_frustumPlanes.x;
    float bottom = czm_frustumPlanes.y;
    float left = czm_frustumPlanes.z;
    float right = czm_frustumPlanes.w;

    if (czm_sceneMode == czm_sceneMode2D || czm_orthographicIn3D == 1.0)
    {
        float frustumWidth = right - left;
        float frustumHeight = top - bottom;
        pixelWidth = frustumWidth / width;
        pixelHeight = frustumHeight / height;
    }
    else
    {
        float distanceToPixel = -positionEC.z;
        float inverseNear = 1.0 / czm_currentFrustum.x;
        float tanTheta = top * inverseNear;
        pixelHeight = 2.0 * distanceToPixel * tanTheta / height;
        tanTheta = right * inverseNear;
        pixelWidth = 2.0 * distanceToPixel * tanTheta / width;
    }

    return max(pixelWidth, pixelHeight) * pixelRatio;
}

/**
 * Computes the size of a pixel in meters at a distance from the eye.
 * <p>
 * Use this version when scaling by pixel ratio.
 * </p>
 * @name czm_metersPerPixel
 * @glslFunction
 *
 * @param {vec3} positionEC The position to get the meters per pixel in eye coordinates.
 *
 * @returns {float} The meters per pixel at positionEC.
 */
float czm_metersPerPixel(vec4 positionEC)
{
    return czm_metersPerPixel(positionEC, czm_pixelRatio);
}
`;var _s=`/**
 * Transforms a position from model to window coordinates.  The transformation
 * from model to clip coordinates is done using {@link czm_modelViewProjection}.
 * The transform from normalized device coordinates to window coordinates is
 * done using {@link czm_viewportTransformation}, which assumes a depth range
 * of <code>near = 0</code> and <code>far = 1</code>.
 * <br /><br />
 * This transform is useful when there is a need to manipulate window coordinates
 * in a vertex shader as done by {@link BillboardCollection}.
 * <br /><br />
 * This function should not be confused with {@link czm_viewportOrthographic},
 * which is an orthographic projection matrix that transforms from window 
 * coordinates to clip coordinates.
 *
 * @name czm_modelToWindowCoordinates
 * @glslFunction
 *
 * @param {vec4} position The position in model coordinates to transform.
 *
 * @returns {vec4} The transformed position in window coordinates.
 *
 * @see czm_eyeToWindowCoordinates
 * @see czm_modelViewProjection
 * @see czm_viewportTransformation
 * @see czm_viewportOrthographic
 * @see BillboardCollection
 *
 * @example
 * vec4 positionWC = czm_modelToWindowCoordinates(positionMC);
 */
vec4 czm_modelToWindowCoordinates(vec4 position)
{
    vec4 q = czm_modelViewProjection * position;                // clip coordinates
    q.xyz /= q.w;                                                // normalized device coordinates
    q.xyz = (czm_viewportTransformation * vec4(q.xyz, 1.0)).xyz; // window coordinates
    return q;
}
`;var Os=`/**
 * DOC_TBA
 *
 * @name czm_multiplyWithColorBalance
 * @glslFunction
 */
vec3 czm_multiplyWithColorBalance(vec3 left, vec3 right)
{
    // Algorithm from Chapter 10 of Graphics Shaders.
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    
    vec3 target = left * right;
    float leftLuminance = dot(left, W);
    float rightLuminance = dot(right, W);
    float targetLuminance = dot(target, W);
    
    return ((leftLuminance + rightLuminance) / (2.0 * targetLuminance)) * target;
}
`;var ws=`/**
 * Computes a value that scales with distance.  The scaling is clamped at the near and
 * far distances, and does not extrapolate.  This function works with the
 * {@link NearFarScalar} JavaScript class.
 *
 * @name czm_nearFarScalar
 * @glslFunction
 *
 * @param {vec4} nearFarScalar A vector with 4 components: Near distance (x), Near value (y), Far distance (z), Far value (w).
 * @param {float} cameraDistSq The square of the current distance from the camera.
 *
 * @returns {float} The value at this distance.
 */
float czm_nearFarScalar(vec4 nearFarScalar, float cameraDistSq)
{
    float valueAtMin = nearFarScalar.y;
    float valueAtMax = nearFarScalar.w;
    float nearDistanceSq = nearFarScalar.x * nearFarScalar.x;
    float farDistanceSq = nearFarScalar.z * nearFarScalar.z;

    float t = (cameraDistSq - nearDistanceSq) / (farDistanceSq - nearDistanceSq);

    t = pow(clamp(t, 0.0, 1.0), 0.2);

    return mix(valueAtMin, valueAtMax, t);
}
`;var Ys=` /**
  * Decodes a unit-length vector in 'oct' encoding to a normalized 3-component Cartesian vector.
  * The 'oct' encoding is described in "A Survey of Efficient Representations of Independent Unit Vectors",
  * Cigolle et al 2014: http://jcgt.org/published/0003/02/01/
  *
  * @name czm_octDecode
  * @param {vec2} encoded The oct-encoded, unit-length vector
  * @param {float} range The maximum value of the SNORM range. The encoded vector is stored in log2(rangeMax+1) bits.
  * @returns {vec3} The decoded and normalized vector
  */
  vec3 czm_octDecode(vec2 encoded, float range)
  {
      if (encoded.x == 0.0 && encoded.y == 0.0) {
          return vec3(0.0, 0.0, 0.0);
      }

     encoded = encoded / range * 2.0 - 1.0;
     vec3 v = vec3(encoded.x, encoded.y, 1.0 - abs(encoded.x) - abs(encoded.y));
     if (v.z < 0.0)
     {
         v.xy = (1.0 - abs(v.yx)) * czm_signNotZero(v.xy);
     }

     return normalize(v);
  }

/**
 * Decodes a unit-length vector in 'oct' encoding to a normalized 3-component Cartesian vector.
 * The 'oct' encoding is described in "A Survey of Efficient Representations of Independent Unit Vectors",
 * Cigolle et al 2014: http://jcgt.org/published/0003/02/01/
 *
 * @name czm_octDecode
 * @param {vec2} encoded The oct-encoded, unit-length vector
 * @returns {vec3} The decoded and normalized vector
 */
 vec3 czm_octDecode(vec2 encoded)
 {
    return czm_octDecode(encoded, 255.0);
 }

 /**
 * Decodes a unit-length vector in 'oct' encoding packed into a floating-point number to a normalized 3-component Cartesian vector.
 * The 'oct' encoding is described in "A Survey of Efficient Representations of Independent Unit Vectors",
 * Cigolle et al 2014: http://jcgt.org/published/0003/02/01/
 *
 * @name czm_octDecode
 * @param {float} encoded The oct-encoded, unit-length vector
 * @returns {vec3} The decoded and normalized vector
 */
 vec3 czm_octDecode(float encoded)
 {
    float temp = encoded / 256.0;
    float x = floor(temp);
    float y = (temp - x) * 256.0;
    return czm_octDecode(vec2(x, y));
 }

/**
 * Decodes three unit-length vectors in 'oct' encoding packed into two floating-point numbers to normalized 3-component Cartesian vectors.
 * The 'oct' encoding is described in "A Survey of Efficient Representations of Independent Unit Vectors",
 * Cigolle et al 2014: http://jcgt.org/published/0003/02/01/
 *
 * @name czm_octDecode
 * @param {vec2} encoded The packed oct-encoded, unit-length vectors.
 * @param {vec3} vector1 One decoded and normalized vector.
 * @param {vec3} vector2 One decoded and normalized vector.
 * @param {vec3} vector3 One decoded and normalized vector.
 */
  void czm_octDecode(vec2 encoded, out vec3 vector1, out vec3 vector2, out vec3 vector3)
 {
    float temp = encoded.x / 65536.0;
    float x = floor(temp);
    float encodedFloat1 = (temp - x) * 65536.0;

    temp = encoded.y / 65536.0;
    float y = floor(temp);
    float encodedFloat2 = (temp - y) * 65536.0;

    vector1 = czm_octDecode(encodedFloat1);
    vector2 = czm_octDecode(encodedFloat2);
    vector3 = czm_octDecode(vec2(x, y));
 }

`;var ys=`/**
 * Packs a depth value into a vec3 that can be represented by unsigned bytes.
 *
 * @name czm_packDepth
 * @glslFunction
 *
 * @param {float} depth The floating-point depth.
 * @returns {vec3} The packed depth.
 */
vec4 czm_packDepth(float depth)
{
    // See Aras Pranckevi\u010Dius' post Encoding Floats to RGBA
    // http://aras-p.info/blog/2009/07/30/encoding-floats-to-rgba-the-final/
    vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * depth;
    enc = fract(enc);
    enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);
    return enc;
}
`;var vs=`vec3 lambertianDiffuse(vec3 diffuseColor)
{
    return diffuseColor / czm_pi;
}

vec3 fresnelSchlick2(vec3 f0, vec3 f90, float VdotH)
{
    return f0 + (f90 - f0) * pow(clamp(1.0 - VdotH, 0.0, 1.0), 5.0);
}

float smithVisibilityG1(float NdotV, float roughness)
{
    // this is the k value for direct lighting.
    // for image based lighting it will be roughness^2 / 2
    float k = (roughness + 1.0) * (roughness + 1.0) / 8.0;
    return NdotV / (NdotV * (1.0 - k) + k);
}

float smithVisibilityGGX(float roughness, float NdotL, float NdotV)
{
    return (
        smithVisibilityG1(NdotL, roughness) *
        smithVisibilityG1(NdotV, roughness)
    );
}

float GGX(float roughness, float NdotH)
{
    float roughnessSquared = roughness * roughness;
    float f = (NdotH * roughnessSquared - NdotH) * NdotH + 1.0;
    return roughnessSquared / (czm_pi * f * f);
}

/**
 * Compute the diffuse and specular contributions using physically based
 * rendering. This function only handles direct lighting.
 * <p>
 * This function only handles the lighting calculations. Metallic/roughness
 * and specular/glossy must be handled separately. See {@czm_pbrMetallicRoughnessMaterial}, {@czm_pbrSpecularGlossinessMaterial} and {@czm_defaultPbrMaterial}
 * </p>
 *
 * @name czm_pbrlighting
 * @glslFunction
 *
 * @param {vec3} positionEC The position of the fragment in eye coordinates
 * @param {vec3} normalEC The surface normal in eye coordinates
 * @param {vec3} lightDirectionEC Unit vector pointing to the light source in eye coordinates.
 * @param {vec3} lightColorHdr radiance of the light source. This is a HDR value.
 * @param {czm_pbrParameters} The computed PBR parameters.
 * @return {vec3} The computed HDR color
 *
 * @example
 * czm_pbrParameters pbrParameters = czm_pbrMetallicRoughnessMaterial(
 *  baseColor,
 *  metallic,
 *  roughness
 * );
 * vec3 color = czm_pbrlighting(
 *  positionEC,
 *  normalEC,
 *  lightDirectionEC,
 *  lightColorHdr,
 *  pbrParameters);
 */
vec3 czm_pbrLighting(
    vec3 positionEC,
    vec3 normalEC,
    vec3 lightDirectionEC,
    vec3 lightColorHdr,
    czm_pbrParameters pbrParameters
)
{
    vec3 v = -normalize(positionEC);
    vec3 l = normalize(lightDirectionEC);
    vec3 h = normalize(v + l);
    vec3 n = normalEC;
    float NdotL = clamp(dot(n, l), 0.001, 1.0);
    float NdotV = abs(dot(n, v)) + 0.001;
    float NdotH = clamp(dot(n, h), 0.0, 1.0);
    float LdotH = clamp(dot(l, h), 0.0, 1.0);
    float VdotH = clamp(dot(v, h), 0.0, 1.0);

    vec3 f0 = pbrParameters.f0;
    float reflectance = max(max(f0.r, f0.g), f0.b);
    vec3 f90 = vec3(clamp(reflectance * 25.0, 0.0, 1.0));
    vec3 F = fresnelSchlick2(f0, f90, VdotH);

    float alpha = pbrParameters.roughness;
    float G = smithVisibilityGGX(alpha, NdotL, NdotV);
    float D = GGX(alpha, NdotH);
    vec3 specularContribution = F * G * D / (4.0 * NdotL * NdotV);

    vec3 diffuseColor = pbrParameters.diffuseColor;
    // F here represents the specular contribution
    vec3 diffuseContribution = (1.0 - F) * lambertianDiffuse(diffuseColor);

    // Lo = (diffuse + specular) * Li * NdotL
    return (diffuseContribution + specularContribution) * NdotL * lightColorHdr;
}
`;var zs=`/**
 * Compute parameters for physically based rendering using the
 * metallic/roughness workflow. All inputs are linear; sRGB texture values must
 * be decoded beforehand
 *
 * @name czm_pbrMetallicRoughnessMaterial
 * @glslFunction
 *
 * @param {vec3} baseColor For dielectrics, this is the base color. For metals, this is the f0 value (reflectance at normal incidence)
 * @param {float} metallic 0.0 indicates dielectric. 1.0 indicates metal. Values in between are allowed (e.g. to model rust or dirt);
 * @param {float} roughness A value between 0.0 and 1.0
 * @return {czm_pbrParameters} parameters to pass into {@link czm_pbrLighting}
 */
czm_pbrParameters czm_pbrMetallicRoughnessMaterial(
    vec3 baseColor,
    float metallic,
    float roughness
) 
{
    czm_pbrParameters results;

    // roughness is authored as perceptual roughness
    // square it to get material roughness
    roughness = clamp(roughness, 0.0, 1.0);
    results.roughness = roughness * roughness;

    // dielectrics use f0 = 0.04, metals use albedo as f0
    metallic = clamp(metallic, 0.0, 1.0);
    const vec3 REFLECTANCE_DIELECTRIC = vec3(0.04);
    vec3 f0 = mix(REFLECTANCE_DIELECTRIC, baseColor, metallic);
    results.f0 = f0;

    // diffuse only applies to dielectrics.
    results.diffuseColor = baseColor * (1.0 - f0) * (1.0 - metallic);

    return results;
}
`;var ks=`/**
 * Compute parameters for physically based rendering using the
 * specular/glossy workflow. All inputs are linear; sRGB texture values must
 * be decoded beforehand
 *
 * @name czm_pbrSpecularGlossinessMaterial
 * @glslFunction
 *
 * @param {vec3} diffuse The diffuse color for dielectrics (non-metals)
 * @param {vec3} specular The reflectance at normal incidence (f0)
 * @param {float} glossiness A number from 0.0 to 1.0 indicating how smooth the surface is.
 * @return {czm_pbrParameters} parameters to pass into {@link czm_pbrLighting}
 */
czm_pbrParameters czm_pbrSpecularGlossinessMaterial(
    vec3 diffuse,
    vec3 specular,
    float glossiness
) 
{
    czm_pbrParameters results;

    // glossiness is the opposite of roughness, but easier for artists to use.
    float roughness = 1.0 - glossiness;
    results.roughness = roughness * roughness;

    results.diffuseColor = diffuse * (1.0 - max(max(specular.r, specular.g), specular.b));
    results.f0 = specular;

    return results;
}
`;var Hs=`float czm_private_getLambertDiffuseOfMaterial(vec3 lightDirectionEC, czm_material material)
{
    return czm_getLambertDiffuse(lightDirectionEC, material.normal);
}

float czm_private_getSpecularOfMaterial(vec3 lightDirectionEC, vec3 toEyeEC, czm_material material)
{
    return czm_getSpecular(lightDirectionEC, toEyeEC, material.normal, material.shininess);
}

/**
 * Computes a color using the Phong lighting model.
 *
 * @name czm_phong
 * @glslFunction
 *
 * @param {vec3} toEye A normalized vector from the fragment to the eye in eye coordinates.
 * @param {czm_material} material The fragment's material.
 *
 * @returns {vec4} The computed color.
 *
 * @example
 * vec3 positionToEyeEC = // ...
 * czm_material material = // ...
 * vec3 lightDirectionEC = // ...
 * out_FragColor = czm_phong(normalize(positionToEyeEC), material, lightDirectionEC);
 *
 * @see czm_getMaterial
 */
vec4 czm_phong(vec3 toEye, czm_material material, vec3 lightDirectionEC)
{
    // Diffuse from directional light sources at eye (for top-down)
    float diffuse = czm_private_getLambertDiffuseOfMaterial(vec3(0.0, 0.0, 1.0), material);
    if (czm_sceneMode == czm_sceneMode3D) {
        // (and horizon views in 3D)
        diffuse += czm_private_getLambertDiffuseOfMaterial(vec3(0.0, 1.0, 0.0), material);
    }

    float specular = czm_private_getSpecularOfMaterial(lightDirectionEC, toEye, material);

    // Temporary workaround for adding ambient.
    vec3 materialDiffuse = material.diffuse * 0.5;

    vec3 ambient = materialDiffuse;
    vec3 color = ambient + material.emission;
    color += materialDiffuse * diffuse * czm_lightColor;
    color += material.specular * specular * czm_lightColor;

    return vec4(color, material.alpha);
}

vec4 czm_private_phong(vec3 toEye, czm_material material, vec3 lightDirectionEC)
{
    float diffuse = czm_private_getLambertDiffuseOfMaterial(lightDirectionEC, material);
    float specular = czm_private_getSpecularOfMaterial(lightDirectionEC, toEye, material);

    vec3 ambient = vec3(0.0);
    vec3 color = ambient + material.emission;
    color += material.diffuse * diffuse * czm_lightColor;
    color += material.specular * specular * czm_lightColor;

    return vec4(color, material.alpha);
}
`;var Ls=`/**
 * Computes distance from a point to a plane.
 *
 * @name czm_planeDistance
 * @glslFunction
 *
 * param {vec4} plane A Plane in Hessian Normal Form. See Plane.js
 * param {vec3} point A point in the same space as the plane.
 * returns {float} The distance from the point to the plane.
 */
float czm_planeDistance(vec4 plane, vec3 point) {
    return (dot(plane.xyz, point) + plane.w);
}

/**
 * Computes distance from a point to a plane.
 *
 * @name czm_planeDistance
 * @glslFunction
 *
 * param {vec3} planeNormal Normal for a plane in Hessian Normal Form. See Plane.js
 * param {float} planeDistance Distance for a plane in Hessian Normal form. See Plane.js
 * param {vec3} point A point in the same space as the plane.
 * returns {float} The distance from the point to the plane.
 */
float czm_planeDistance(vec3 planeNormal, float planeDistance, vec3 point) {
    return (dot(planeNormal, point) + planeDistance);
}
`;var Ks=`/**
 * Computes the point along a ray at the given time.  <code>time</code> can be positive, negative, or zero.
 *
 * @name czm_pointAlongRay
 * @glslFunction
 *
 * @param {czm_ray} ray The ray to compute the point along.
 * @param {float} time The time along the ray.
 * 
 * @returns {vec3} The point along the ray at the given time.
 * 
 * @example
 * czm_ray ray = czm_ray(vec3(0.0), vec3(1.0, 0.0, 0.0)); // origin, direction
 * vec3 v = czm_pointAlongRay(ray, 2.0); // (2.0, 0.0, 0.0)
 */
vec3 czm_pointAlongRay(czm_ray ray, float time)
{
    return ray.origin + (time * ray.direction);
}
`;var Ps=`/**
 * DOC_TBA
 *
 * @name czm_rayEllipsoidIntersectionInterval
 * @glslFunction
 */
czm_raySegment czm_rayEllipsoidIntersectionInterval(czm_ray ray, vec3 ellipsoid_center, vec3 ellipsoid_inverseRadii)
{
   // ray and ellipsoid center in eye coordinates.  radii in model coordinates.
    vec3 q = ellipsoid_inverseRadii * (czm_inverseModelView * vec4(ray.origin, 1.0)).xyz;
    vec3 w = ellipsoid_inverseRadii * (czm_inverseModelView * vec4(ray.direction, 0.0)).xyz;

    q = q - ellipsoid_inverseRadii * (czm_inverseModelView * vec4(ellipsoid_center, 1.0)).xyz;

    float q2 = dot(q, q);
    float qw = dot(q, w);

    if (q2 > 1.0) // Outside ellipsoid.
    {
        if (qw >= 0.0) // Looking outward or tangent (0 intersections).
        {
            return czm_emptyRaySegment;
        }
        else // qw < 0.0.
        {
            float qw2 = qw * qw;
            float difference = q2 - 1.0; // Positively valued.
            float w2 = dot(w, w);
            float product = w2 * difference;

            if (qw2 < product) // Imaginary roots (0 intersections).
            {
                return czm_emptyRaySegment;
            }
            else if (qw2 > product) // Distinct roots (2 intersections).
            {
                float discriminant = qw * qw - product;
                float temp = -qw + sqrt(discriminant); // Avoid cancellation.
                float root0 = temp / w2;
                float root1 = difference / temp;
                if (root0 < root1)
                {
                    czm_raySegment i = czm_raySegment(root0, root1);
                    return i;
                }
                else
                {
                    czm_raySegment i = czm_raySegment(root1, root0);
                    return i;
                }
            }
            else // qw2 == product.  Repeated roots (2 intersections).
            {
                float root = sqrt(difference / w2);
                czm_raySegment i = czm_raySegment(root, root);
                return i;
            }
        }
    }
    else if (q2 < 1.0) // Inside ellipsoid (2 intersections).
    {
        float difference = q2 - 1.0; // Negatively valued.
        float w2 = dot(w, w);
        float product = w2 * difference; // Negatively valued.
        float discriminant = qw * qw - product;
        float temp = -qw + sqrt(discriminant); // Positively valued.
        czm_raySegment i = czm_raySegment(0.0, temp / w2);
        return i;
    }
    else // q2 == 1.0. On ellipsoid.
    {
        if (qw < 0.0) // Looking inward.
        {
            float w2 = dot(w, w);
            czm_raySegment i = czm_raySegment(0.0, -qw / w2);
            return i;
        }
        else // qw >= 0.0.  Looking outward or tangent.
        {
            return czm_emptyRaySegment;
        }
    }
}
`;var js=`/**
 * Compute the intersection interval of a ray with a sphere.
 *
 * @name czm_raySphereIntersectionInterval
 * @glslFunction
 *
 * @param {czm_ray} ray The ray.
 * @param {vec3} center The center of the sphere.
 * @param {float} radius The radius of the sphere.
 * @return {czm_raySegment} The intersection interval of the ray with the sphere.
 */
czm_raySegment czm_raySphereIntersectionInterval(czm_ray ray, vec3 center, float radius)
{
    vec3 o = ray.origin;
    vec3 d = ray.direction;

    vec3 oc = o - center;

    float a = dot(d, d);
    float b = 2.0 * dot(d, oc);
    float c = dot(oc, oc) - (radius * radius);

    float det = (b * b) - (4.0 * a * c);

    if (det < 0.0) {
        return czm_emptyRaySegment;
    }

    float sqrtDet = sqrt(det);

    float t0 = (-b - sqrtDet) / (2.0 * a);
    float t1 = (-b + sqrtDet) / (2.0 * a);

    czm_raySegment result = czm_raySegment(t0, t1);
    return result;
}
`;var qs=`float czm_readDepth(sampler2D depthTexture, vec2 texCoords)
{
    return czm_reverseLogDepth(texture(depthTexture, texCoords).r);
}
`;var $s=`/**
 * Reads a value previously transformed with {@link czm_writeNonPerspective}
 * by dividing it by \`w\`, the value used in the perspective divide.
 * This function is intended to be called in a fragment shader to access a
 * \`varying\` that should not be subject to perspective interpolation.
 * For example, screen-space texture coordinates. The value should have been
 * previously written in the vertex shader with a call to
 * {@link czm_writeNonPerspective}.
 *
 * @name czm_readNonPerspective
 * @glslFunction
 *
 * @param {float|vec2|vec3|vec4} value The non-perspective value to be read.
 * @param {float} oneOverW One over the perspective divide value, \`w\`. Usually this is simply \`gl_FragCoord.w\`.
 * @returns {float|vec2|vec3|vec4} The usable value.
 */
float czm_readNonPerspective(float value, float oneOverW) {
    return value * oneOverW;
}

vec2 czm_readNonPerspective(vec2 value, float oneOverW) {
    return value * oneOverW;
}

vec3 czm_readNonPerspective(vec3 value, float oneOverW) {
    return value * oneOverW;
}

vec4 czm_readNonPerspective(vec4 value, float oneOverW) {
    return value * oneOverW;
}
`;var Va=`float czm_reverseLogDepth(float logZ)
{
#ifdef LOG_DEPTH
    float near = czm_currentFrustum.x;
    float far = czm_currentFrustum.y;
    float log2Depth = logZ * czm_log2FarDepthFromNearPlusOne;
    float depthFromNear = pow(2.0, log2Depth) - 1.0;
    return far * (1.0 - near / (depthFromNear + near)) / (far - near);
#endif
    return logZ;
}
`;var la=`/**
 * Round a floating point value. This function exists because round() doesn't
 * exist in GLSL 1.00. 
 *
 * @param {float|vec2|vec3|vec4} value The value to round
 * @param {float|vec2|vec3|vec3} The rounded value. The type matches the input.
 */
float czm_round(float value) {
  return floor(value + 0.5);
}

vec2 czm_round(vec2 value) {
  return floor(value + 0.5);
}

vec3 czm_round(vec3 value) {
  return floor(value + 0.5);
}

vec4 czm_round(vec4 value) {
  return floor(value + 0.5);
}
`;var Za=`/**
 * Samples the 4 neighboring pixels and return the weighted average.
 *
 * @private
 */
vec3 czm_sampleOctahedralProjectionWithFiltering(sampler2D projectedMap, vec2 textureSize, vec3 direction, float lod)
{
    direction /= dot(vec3(1.0), abs(direction));
    vec2 rev = abs(direction.zx) - vec2(1.0);
    vec2 neg = vec2(direction.x < 0.0 ? rev.x : -rev.x,
                    direction.z < 0.0 ? rev.y : -rev.y);
    vec2 uv = direction.y < 0.0 ? neg : direction.xz;
    vec2 coord = 0.5 * uv + vec2(0.5);
    vec2 pixel = 1.0 / textureSize;

    if (lod > 0.0)
    {
        // Each subseqeuent mip level is half the size
        float scale = 1.0 / pow(2.0, lod);
        float offset = ((textureSize.y + 1.0) / textureSize.x);

        coord.x *= offset;
        coord *= scale;

        coord.x += offset + pixel.x;
        coord.y += (1.0 - (1.0 / pow(2.0, lod - 1.0))) + pixel.y * (lod - 1.0) * 2.0;
    }
    else
    {
        coord.x *= (textureSize.y / textureSize.x);
    }

    // Do bilinear filtering
    #ifndef OES_texture_float_linear
        vec3 color1 = texture(projectedMap, coord + vec2(0.0, pixel.y)).rgb;
        vec3 color2 = texture(projectedMap, coord + vec2(pixel.x, 0.0)).rgb;
        vec3 color3 = texture(projectedMap, coord + pixel).rgb;
        vec3 color4 = texture(projectedMap, coord).rgb;

        vec2 texturePosition = coord * textureSize;

        float fu = fract(texturePosition.x);
        float fv = fract(texturePosition.y);

        vec3 average1 = mix(color4, color2, fu);
        vec3 average2 = mix(color1, color3, fu);

        vec3 color = mix(average1, average2, fv);
    #else
        vec3 color = texture(projectedMap, coord).rgb;
    #endif

    return color;
}


/**
 * Samples from a cube map that has been projected using an octahedral projection from the given direction.
 *
 * @name czm_sampleOctahedralProjection
 * @glslFunction
 *
 * @param {sampler2D} projectedMap The texture with the octahedral projected cube map.
 * @param {vec2} textureSize The width and height dimensions in pixels of the projected map.
 * @param {vec3} direction The normalized direction used to sample the cube map.
 * @param {float} lod The level of detail to sample.
 * @param {float} maxLod The maximum level of detail.
 * @returns {vec3} The color of the cube map at the direction.
 */
vec3 czm_sampleOctahedralProjection(sampler2D projectedMap, vec2 textureSize, vec3 direction, float lod, float maxLod) {
    float currentLod = floor(lod + 0.5);
    float nextLod = min(currentLod + 1.0, maxLod);

    vec3 colorCurrentLod = czm_sampleOctahedralProjectionWithFiltering(projectedMap, textureSize, direction, currentLod);
    vec3 colorNextLod = czm_sampleOctahedralProjectionWithFiltering(projectedMap, textureSize, direction, nextLod);

    return mix(colorNextLod, colorCurrentLod, nextLod - lod);
}
`;var Wa=`/**
 * Adjusts the saturation of a color.
 * 
 * @name czm_saturation
 * @glslFunction
 * 
 * @param {vec3} rgb The color.
 * @param {float} adjustment The amount to adjust the saturation of the color.
 *
 * @returns {float} The color with the saturation adjusted.
 *
 * @example
 * vec3 greyScale = czm_saturation(color, 0.0);
 * vec3 doubleSaturation = czm_saturation(color, 2.0);
 */
vec3 czm_saturation(vec3 rgb, float adjustment)
{
    // Algorithm from Chapter 16 of OpenGL Shading Language
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}
`;var Ua=`
float czm_sampleShadowMap(highp samplerCube shadowMap, vec3 d)
{
    return czm_unpackDepth(czm_textureCube(shadowMap, d));
}

float czm_sampleShadowMap(highp sampler2D shadowMap, vec2 uv)
{
#ifdef USE_SHADOW_DEPTH_TEXTURE
    return texture(shadowMap, uv).r;
#else
    return czm_unpackDepth(texture(shadowMap, uv));
#endif
}

float czm_shadowDepthCompare(samplerCube shadowMap, vec3 uv, float depth)
{
    return step(depth, czm_sampleShadowMap(shadowMap, uv));
}

float czm_shadowDepthCompare(sampler2D shadowMap, vec2 uv, float depth)
{
    return step(depth, czm_sampleShadowMap(shadowMap, uv));
}
`;var Aa=`
float czm_private_shadowVisibility(float visibility, float nDotL, float normalShadingSmooth, float darkness)
{
#ifdef USE_NORMAL_SHADING
#ifdef USE_NORMAL_SHADING_SMOOTH
    float strength = clamp(nDotL / normalShadingSmooth, 0.0, 1.0);
#else
    float strength = step(0.0, nDotL);
#endif
    visibility *= strength;
#endif

    visibility = max(visibility, darkness);
    return visibility;
}

#ifdef USE_CUBE_MAP_SHADOW
float czm_shadowVisibility(samplerCube shadowMap, czm_shadowParameters shadowParameters)
{
    float depthBias = shadowParameters.depthBias;
    float depth = shadowParameters.depth;
    float nDotL = shadowParameters.nDotL;
    float normalShadingSmooth = shadowParameters.normalShadingSmooth;
    float darkness = shadowParameters.darkness;
    vec3 uvw = shadowParameters.texCoords;

    depth -= depthBias;
    float visibility = czm_shadowDepthCompare(shadowMap, uvw, depth);
    return czm_private_shadowVisibility(visibility, nDotL, normalShadingSmooth, darkness);
}
#else
float czm_shadowVisibility(sampler2D shadowMap, czm_shadowParameters shadowParameters)
{
    float depthBias = shadowParameters.depthBias;
    float depth = shadowParameters.depth;
    float nDotL = shadowParameters.nDotL;
    float normalShadingSmooth = shadowParameters.normalShadingSmooth;
    float darkness = shadowParameters.darkness;
    vec2 uv = shadowParameters.texCoords;

    depth -= depthBias;
#ifdef USE_SOFT_SHADOWS
    vec2 texelStepSize = shadowParameters.texelStepSize;
    float radius = 1.0;
    float dx0 = -texelStepSize.x * radius;
    float dy0 = -texelStepSize.y * radius;
    float dx1 = texelStepSize.x * radius;
    float dy1 = texelStepSize.y * radius;
    float visibility = (
        czm_shadowDepthCompare(shadowMap, uv, depth) +
        czm_shadowDepthCompare(shadowMap, uv + vec2(dx0, dy0), depth) +
        czm_shadowDepthCompare(shadowMap, uv + vec2(0.0, dy0), depth) +
        czm_shadowDepthCompare(shadowMap, uv + vec2(dx1, dy0), depth) +
        czm_shadowDepthCompare(shadowMap, uv + vec2(dx0, 0.0), depth) +
        czm_shadowDepthCompare(shadowMap, uv + vec2(dx1, 0.0), depth) +
        czm_shadowDepthCompare(shadowMap, uv + vec2(dx0, dy1), depth) +
        czm_shadowDepthCompare(shadowMap, uv + vec2(0.0, dy1), depth) +
        czm_shadowDepthCompare(shadowMap, uv + vec2(dx1, dy1), depth)
    ) * (1.0 / 9.0);
#else
    float visibility = czm_shadowDepthCompare(shadowMap, uv, depth);
#endif

    return czm_private_shadowVisibility(visibility, nDotL, normalShadingSmooth, darkness);
}
#endif
`;var ta=`/**
 * Returns 1.0 if the given value is positive or zero, and -1.0 if it is negative.  This is similar to the GLSL
 * built-in function <code>sign</code> except that returns 1.0 instead of 0.0 when the input value is 0.0.
 * 
 * @name czm_signNotZero
 * @glslFunction
 *
 * @param {} value The value for which to determine the sign.
 * @returns {} 1.0 if the value is positive or zero, -1.0 if the value is negative.
 */
float czm_signNotZero(float value)
{
    return value >= 0.0 ? 1.0 : -1.0;
}

vec2 czm_signNotZero(vec2 value)
{
    return vec2(czm_signNotZero(value.x), czm_signNotZero(value.y));
}

vec3 czm_signNotZero(vec3 value)
{
    return vec3(czm_signNotZero(value.x), czm_signNotZero(value.y), czm_signNotZero(value.z));
}

vec4 czm_signNotZero(vec4 value)
{
    return vec4(czm_signNotZero(value.x), czm_signNotZero(value.y), czm_signNotZero(value.z), czm_signNotZero(value.w));
}
`;var ea=`/**
 * Computes a color from the third order spherical harmonic coefficients and a normalized direction vector.
 * <p>
 * The order of the coefficients is [L00, L1_1, L10, L11, L2_2, L2_1, L20, L21, L22].
 * </p>
 *
 * @name czm_sphericalHarmonics
 * @glslFunction
 *
 * @param {vec3} normal The normalized direction.
 * @param {vec3[9]} coefficients The third order spherical harmonic coefficients.
 * @returns {vec3} The color at the direction.
 *
 * @see https://graphics.stanford.edu/papers/envmap/envmap.pdf
 */
vec3 czm_sphericalHarmonics(vec3 normal, vec3 coefficients[9])
{
    vec3 L00 = coefficients[0];
    vec3 L1_1 = coefficients[1];
    vec3 L10 = coefficients[2];
    vec3 L11 = coefficients[3];
    vec3 L2_2 = coefficients[4];
    vec3 L2_1 = coefficients[5];
    vec3 L20 = coefficients[6];
    vec3 L21 = coefficients[7];
    vec3 L22 = coefficients[8];

    float x = normal.x;
    float y = normal.y;
    float z = normal.z;

    return
          L00
        + L1_1 * y
        + L10 * z
        + L11 * x
        + L2_2 * (y * x)
        + L2_1 * (y * z)
        + L20 * (3.0 * z * z - 1.0)
        + L21 * (z * x)
        + L22 * (x * x - y * y);
}
`;var ma=`/**
 * Converts an sRGB color to a linear RGB color.
 *
 * @param {vec3|vec4} srgbIn The color in sRGB space
 * @returns {vec3|vec4} The color in linear color space. The vector type matches the input.
 */
vec3 czm_srgbToLinear(vec3 srgbIn)
{
    return pow(srgbIn, vec3(2.2));
}

vec4 czm_srgbToLinear(vec4 srgbIn) 
{
    vec3 linearOut = pow(srgbIn.rgb, vec3(2.2));
    return vec4(linearOut, srgbIn.a);
}
`;var ia=`/**
 * Creates a matrix that transforms vectors from tangent space to eye space.
 *
 * @name czm_tangentToEyeSpaceMatrix
 * @glslFunction
 *
 * @param {vec3} normalEC The normal vector in eye coordinates.
 * @param {vec3} tangentEC The tangent vector in eye coordinates.
 * @param {vec3} bitangentEC The bitangent vector in eye coordinates.
 *
 * @returns {mat3} The matrix that transforms from tangent space to eye space.
 *
 * @example
 * mat3 tangentToEye = czm_tangentToEyeSpaceMatrix(normalEC, tangentEC, bitangentEC);
 * vec3 normal = tangentToEye * texture(normalMap, st).xyz;
 */
mat3 czm_tangentToEyeSpaceMatrix(vec3 normalEC, vec3 tangentEC, vec3 bitangentEC)
{
    vec3 normal = normalize(normalEC);
    vec3 tangent = normalize(tangentEC);
    vec3 bitangent = normalize(bitangentEC);
    return mat3(tangent.x  , tangent.y  , tangent.z,
                bitangent.x, bitangent.y, bitangent.z,
                normal.x   , normal.y   , normal.z);
}
`;var na=`/**
 * A wrapper around the texture (WebGL2) / textureCube (WebGL1)
 * function to allow for WebGL 1 support.
 * 
 * @name czm_textureCube
 * @glslFunction
 *
 * @param {samplerCube} sampler The sampler.
 * @param {vec3} p The coordinates to sample the texture at.
 */
vec4 czm_textureCube(samplerCube sampler, vec3 p) {
#if __VERSION__ == 300
    return texture(sampler, p);
#else  
    return textureCube(sampler, p);
#endif
}`;var Ga=`/**
 * Transforms a plane.
 * 
 * @name czm_transformPlane
 * @glslFunction
 *
 * @param {vec4} plane The plane in Hessian Normal Form.
 * @param {mat4} transform The inverse-transpose of a transformation matrix.
 */
vec4 czm_transformPlane(vec4 plane, mat4 transform) {
    vec4 transformedPlane = transform * plane;
    // Convert the transformed plane to Hessian Normal Form
    float normalMagnitude = length(transformedPlane.xyz);
    return transformedPlane / normalMagnitude;
}
`;var sa=`/**
 * Translates a position (or any <code>vec3</code>) that was encoded with {@link EncodedCartesian3},
 * and then provided to the shader as separate <code>high</code> and <code>low</code> bits to
 * be relative to the eye.  As shown in the example, the position can then be transformed in eye
 * or clip coordinates using {@link czm_modelViewRelativeToEye} or {@link czm_modelViewProjectionRelativeToEye},
 * respectively.
 * <p>
 * This technique, called GPU RTE, eliminates jittering artifacts when using large coordinates as
 * described in {@link http://help.agi.com/AGIComponents/html/BlogPrecisionsPrecisions.htm|Precisions, Precisions}.
 * </p>
 *
 * @name czm_translateRelativeToEye
 * @glslFunction
 *
 * @param {vec3} high The position's high bits.
 * @param {vec3} low The position's low bits.
 * @returns {vec3} The position translated to be relative to the camera's position.
 *
 * @example
 * in vec3 positionHigh;
 * in vec3 positionLow;
 *
 * void main()
 * {
 *   vec4 p = czm_translateRelativeToEye(positionHigh, positionLow);
 *   gl_Position = czm_modelViewProjectionRelativeToEye * p;
 * }
 *
 * @see czm_modelViewRelativeToEye
 * @see czm_modelViewProjectionRelativeToEye
 * @see czm_computePosition
 * @see EncodedCartesian3
 */
vec4 czm_translateRelativeToEye(vec3 high, vec3 low)
{
    vec3 highDifference = high - czm_encodedCameraPositionMCHigh;
    vec3 lowDifference = low - czm_encodedCameraPositionMCLow;

    return vec4(highDifference + lowDifference, 1.0);
}
`;var aa=`/**
 * @private
 */
vec4 czm_translucentPhong(vec3 toEye, czm_material material, vec3 lightDirectionEC)
{
    // Diffuse from directional light sources at eye (for top-down and horizon views)
    float diffuse = czm_getLambertDiffuse(vec3(0.0, 0.0, 1.0), material.normal);

    if (czm_sceneMode == czm_sceneMode3D) {
        // (and horizon views in 3D)
        diffuse += czm_getLambertDiffuse(vec3(0.0, 1.0, 0.0), material.normal);
    }

    diffuse = clamp(diffuse, 0.0, 1.0);

    float specular = czm_getSpecular(lightDirectionEC, toEye, material.normal, material.shininess);

    // Temporary workaround for adding ambient.
    vec3 materialDiffuse = material.diffuse * 0.5;

    vec3 ambient = materialDiffuse;
    vec3 color = ambient + material.emission;
    color += materialDiffuse * diffuse * czm_lightColor;
    color += material.specular * specular * czm_lightColor;

    return vec4(color, material.alpha);
}
`;var ra=`/**
 * Returns the transpose of the matrix.  The input <code>matrix</code> can be
 * a <code>mat2</code>, <code>mat3</code>, or <code>mat4</code>.
 *
 * @name czm_transpose
 * @glslFunction
 *
 * @param {} matrix The matrix to transpose.
 *
 * @returns {} The transposed matrix.
 *
 * @example
 * // GLSL declarations
 * mat2 czm_transpose(mat2 matrix);
 * mat3 czm_transpose(mat3 matrix);
 * mat4 czm_transpose(mat4 matrix);
 *
 * // Transpose a 3x3 rotation matrix to find its inverse.
 * mat3 eastNorthUpToEye = czm_eastNorthUpToEyeCoordinates(
 *     positionMC, normalEC);
 * mat3 eyeToEastNorthUp = czm_transpose(eastNorthUpToEye);
 */
mat2 czm_transpose(mat2 matrix)
{
    return mat2(
        matrix[0][0], matrix[1][0],
        matrix[0][1], matrix[1][1]);
}

mat3 czm_transpose(mat3 matrix)
{
    return mat3(
        matrix[0][0], matrix[1][0], matrix[2][0],
        matrix[0][1], matrix[1][1], matrix[2][1],
        matrix[0][2], matrix[1][2], matrix[2][2]);
}

mat4 czm_transpose(mat4 matrix)
{
    return mat4(
        matrix[0][0], matrix[1][0], matrix[2][0], matrix[3][0],
        matrix[0][1], matrix[1][1], matrix[2][1], matrix[3][1],
        matrix[0][2], matrix[1][2], matrix[2][2], matrix[3][2],
        matrix[0][3], matrix[1][3], matrix[2][3], matrix[3][3]);
}
`;var oa=`/**
 * Unpacks a vec4 depth value to a float in [0, 1) range.
 *
 * @name czm_unpackDepth
 * @glslFunction
 *
 * @param {vec4} packedDepth The packed depth.
 *
 * @returns {float} The floating-point depth in [0, 1) range.
 */
 float czm_unpackDepth(vec4 packedDepth)
 {
    // See Aras Pranckevi\u010Dius' post Encoding Floats to RGBA
    // http://aras-p.info/blog/2009/07/30/encoding-floats-to-rgba-the-final/
    return dot(packedDepth, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));
 }
`;var ha=`/**
 * Unpack an IEEE 754 single-precision float that is packed as a little-endian unsigned normalized vec4.
 *
 * @name czm_unpackFloat
 * @glslFunction
 *
 * @param {vec4} packedFloat The packed float.
 *
 * @returns {float} The floating-point depth in arbitrary range.
 */
float czm_unpackFloat(vec4 packedFloat)
{
    // Convert to [0.0, 255.0] and round to integer
    packedFloat = floor(packedFloat * 255.0 + 0.5);
    float sign = 1.0 - step(128.0, packedFloat[3]) * 2.0;
    float exponent = 2.0 * mod(packedFloat[3], 128.0) + step(128.0, packedFloat[2]) - 127.0;    
    if (exponent == -127.0)
    {
        return 0.0;
    }
    float mantissa = mod(packedFloat[2], 128.0) * 65536.0 + packedFloat[1] * 256.0 + packedFloat[0] + float(0x800000);
    float result = sign * exp2(exponent - 23.0) * mantissa;
    return result;
}
`;var Ra=`/**
 * Unpack unsigned integers of 1-4 bytes. in WebGL 1, there is no uint type,
 * so the return value is an int.
 * <p>
 * There are also precision limitations in WebGL 1. highp int is still limited
 * to 24 bits. Above the value of 2^24 = 16777216, precision loss may occur.
 * </p>
 *
 * @param {float|vec2|vec3|vec4} packed The packed value. For vectors, the components are listed in little-endian order.
 *
 * @return {int} The unpacked value.
 */
 int czm_unpackUint(float packedValue) {
   float rounded = czm_round(packedValue * 255.0);
   return int(rounded);
 }

 int czm_unpackUint(vec2 packedValue) {
   vec2 rounded = czm_round(packedValue * 255.0);
   return int(dot(rounded, vec2(1.0, 256.0)));
 }

 int czm_unpackUint(vec3 packedValue) {
   vec3 rounded = czm_round(packedValue * 255.0);
   return int(dot(rounded, vec3(1.0, 256.0, 65536.0)));
 }

 int czm_unpackUint(vec4 packedValue) {
   vec4 rounded = czm_round(packedValue * 255.0);
   return int(dot(rounded, vec4(1.0, 256.0, 65536.0, 16777216.0)));
 }
`;var da=`/**
 * Transform metadata values following the EXT_structural_metadata spec
 * by multiplying by scale and adding the offset. Operations are always
 * performed component-wise, even for matrices.
 * 
 * @param {float|vec2|vec3|vec4|mat2|mat3|mat4} offset The offset to add
 * @param {float|vec2|vec3|vec4|mat2|mat3|mat4} scale The scale factor to multiply
 * @param {float|vec2|vec3|vec4|mat2|mat3|mat4} value The original value.
 *
 * @return {float|vec2|vec3|vec4|mat2|mat3|mat4} The transformed value of the same scalar/vector/matrix type as the input.
 */
float czm_valueTransform(float offset, float scale, float value) {
  return scale * value + offset;
}

vec2 czm_valueTransform(vec2 offset, vec2 scale, vec2 value) {
  return scale * value + offset;
}

vec3 czm_valueTransform(vec3 offset, vec3 scale, vec3 value) {
  return scale * value + offset;
}

vec4 czm_valueTransform(vec4 offset, vec4 scale, vec4 value) {
  return scale * value + offset;
}

mat2 czm_valueTransform(mat2 offset, mat2 scale, mat2 value) {
  return matrixCompMult(scale, value) + offset;
}

mat3 czm_valueTransform(mat3 offset, mat3 scale, mat3 value) {
  return matrixCompMult(scale, value) + offset;
}

mat4 czm_valueTransform(mat4 offset, mat4 scale, mat4 value) {
  return matrixCompMult(scale, value) + offset;
}
`;var Ta=`#ifdef LOG_DEPTH
// 1.0 at the near plane, increasing linearly from there.
out float v_depthFromNearPlusOne;
#ifdef SHADOW_MAP
out vec3 v_logPositionEC;
#endif
#endif

vec4 czm_updatePositionDepth(vec4 coords) {
#if defined(LOG_DEPTH)

#ifdef SHADOW_MAP
    vec3 logPositionEC = (czm_inverseProjection * coords).xyz;
    v_logPositionEC = logPositionEC;
#endif

    // With the very high far/near ratios used with the logarithmic depth
    // buffer, floating point rounding errors can cause linear depth values
    // to end up on the wrong side of the far plane, even for vertices that
    // are really nowhere near it. Since we always write a correct logarithmic
    // depth value in the fragment shader anyway, we just need to make sure
    // such errors don't cause the primitive to be clipped entirely before
    // we even get to the fragment shader.
    coords.z = clamp(coords.z / coords.w, -1.0, 1.0) * coords.w;
#endif

    return coords;
}

/**
 * Writes the logarithmic depth to gl_Position using the already computed gl_Position.
 *
 * @name czm_vertexLogDepth
 * @glslFunction
 */
void czm_vertexLogDepth()
{
#ifdef LOG_DEPTH
    v_depthFromNearPlusOne = (gl_Position.w - czm_currentFrustum.x) + 1.0;
    gl_Position = czm_updatePositionDepth(gl_Position);
#endif
}

/**
 * Writes the logarithmic depth to gl_Position using the provided clip coordinates.
 * <p>
 * An example use case for this function would be moving the vertex in window coordinates
 * before converting back to clip coordinates. Use the original vertex clip coordinates.
 * </p>
 * @name czm_vertexLogDepth
 * @glslFunction
 *
 * @param {vec4} clipCoords The vertex in clip coordinates.
 *
 * @example
 * czm_vertexLogDepth(czm_projection * vec4(positionEyeCoordinates, 1.0));
 */
void czm_vertexLogDepth(vec4 clipCoords)
{
#ifdef LOG_DEPTH
    v_depthFromNearPlusOne = (clipCoords.w - czm_currentFrustum.x) + 1.0;
    czm_updatePositionDepth(clipCoords);
#endif
}
`;var Ba=`vec4 czm_screenToEyeCoordinates(vec4 screenCoordinate)
{
    // Reconstruct NDC coordinates
    float x = 2.0 * screenCoordinate.x - 1.0;
    float y = 2.0 * screenCoordinate.y - 1.0;
    float z = (screenCoordinate.z - czm_viewportTransformation[3][2]) / czm_viewportTransformation[2][2];
    vec4 q = vec4(x, y, z, 1.0);

    // Reverse the perspective division to obtain clip coordinates.
    q /= screenCoordinate.w;

    // Reverse the projection transformation to obtain eye coordinates.
    if (!(czm_inverseProjection == mat4(0.0))) // IE and Edge sometimes do something weird with != between mat4s
    {
        q = czm_inverseProjection * q;
    }
    else
    {
        float top = czm_frustumPlanes.x;
        float bottom = czm_frustumPlanes.y;
        float left = czm_frustumPlanes.z;
        float right = czm_frustumPlanes.w;

        float near = czm_currentFrustum.x;
        float far = czm_currentFrustum.y;

        q.x = (q.x * (right - left) + left + right) * 0.5;
        q.y = (q.y * (top - bottom) + bottom + top) * 0.5;
        q.z = (q.z * (near - far) - near - far) * 0.5;
        q.w = 1.0;
    }

    return q;
}

/**
 * Transforms a position from window to eye coordinates.
 * The transform from window to normalized device coordinates is done using components
 * of (@link czm_viewport} and {@link czm_viewportTransformation} instead of calculating
 * the inverse of <code>czm_viewportTransformation</code>. The transformation from
 * normalized device coordinates to clip coordinates is done using <code>fragmentCoordinate.w</code>,
 * which is expected to be the scalar used in the perspective divide. The transformation
 * from clip to eye coordinates is done using {@link czm_inverseProjection}.
 *
 * @name czm_windowToEyeCoordinates
 * @glslFunction
 *
 * @param {vec4} fragmentCoordinate The position in window coordinates to transform.
 *
 * @returns {vec4} The transformed position in eye coordinates.
 *
 * @see czm_modelToWindowCoordinates
 * @see czm_eyeToWindowCoordinates
 * @see czm_inverseProjection
 * @see czm_viewport
 * @see czm_viewportTransformation
 *
 * @example
 * vec4 positionEC = czm_windowToEyeCoordinates(gl_FragCoord);
 */
vec4 czm_windowToEyeCoordinates(vec4 fragmentCoordinate)
{
    vec2 screenCoordXY = (fragmentCoordinate.xy - czm_viewport.xy) / czm_viewport.zw;
    return czm_screenToEyeCoordinates(vec4(screenCoordXY, fragmentCoordinate.zw));
}

vec4 czm_screenToEyeCoordinates(vec2 screenCoordinateXY, float depthOrLogDepth)
{
    // See reverseLogDepth.glsl. This is separate to re-use the pow.
#if defined(LOG_DEPTH) || defined(LOG_DEPTH_READ_ONLY)
    float near = czm_currentFrustum.x;
    float far = czm_currentFrustum.y;
    float log2Depth = depthOrLogDepth * czm_log2FarDepthFromNearPlusOne;
    float depthFromNear = pow(2.0, log2Depth) - 1.0;
    float depthFromCamera = depthFromNear + near;
    vec4 screenCoord = vec4(screenCoordinateXY, far * (1.0 - near / depthFromCamera) / (far - near), 1.0);
    vec4 eyeCoordinate = czm_screenToEyeCoordinates(screenCoord);
    eyeCoordinate.w = 1.0 / depthFromCamera; // Better precision
    return eyeCoordinate;
#else
    vec4 screenCoord = vec4(screenCoordinateXY, depthOrLogDepth, 1.0);
    vec4 eyeCoordinate = czm_screenToEyeCoordinates(screenCoord);
#endif
    return eyeCoordinate;
}

/**
 * Transforms a position given as window x/y and a depth or a log depth from window to eye coordinates.
 * This function produces more accurate results for window positions with log depth than
 * conventionally unpacking the log depth using czm_reverseLogDepth and using the standard version
 * of czm_windowToEyeCoordinates.
 *
 * @name czm_windowToEyeCoordinates
 * @glslFunction
 *
 * @param {vec2} fragmentCoordinateXY The XY position in window coordinates to transform.
 * @param {float} depthOrLogDepth A depth or log depth for the fragment.
 *
 * @see czm_modelToWindowCoordinates
 * @see czm_eyeToWindowCoordinates
 * @see czm_inverseProjection
 * @see czm_viewport
 * @see czm_viewportTransformation
 *
 * @returns {vec4} The transformed position in eye coordinates.
 */
vec4 czm_windowToEyeCoordinates(vec2 fragmentCoordinateXY, float depthOrLogDepth)
{
    vec2 screenCoordXY = (fragmentCoordinateXY.xy - czm_viewport.xy) / czm_viewport.zw;
    return czm_screenToEyeCoordinates(screenCoordXY, depthOrLogDepth);
}
`;var Fa=`// emulated noperspective
#if !defined(LOG_DEPTH)
in float v_WindowZ;
#endif

/**
 * Emulates GL_DEPTH_CLAMP. Clamps a fragment to the near and far plane
 * by writing the fragment's depth. See czm_depthClamp for more details.
 *
 * @name czm_writeDepthClamp
 * @glslFunction
 *
 * @example
 * out_FragColor = color;
 * czm_writeDepthClamp();
 *
 * @see czm_depthClamp
 */
void czm_writeDepthClamp()
{
#if (!defined(LOG_DEPTH) && (__VERSION__ == 300 || defined(GL_EXT_frag_depth)))
    gl_FragDepth = clamp(v_WindowZ * gl_FragCoord.w, 0.0, 1.0);
#endif
}
`;var Qa=`#ifdef LOG_DEPTH
in float v_depthFromNearPlusOne;

#ifdef POLYGON_OFFSET
uniform vec2 u_polygonOffset;
#endif

#endif

/**
 * Writes the fragment depth to the logarithmic depth buffer.
 * <p>
 * Use this when the vertex shader does not call {@link czm_vertexlogDepth}, for example, when
 * ray-casting geometry using a full screen quad.
 * </p>
 * @name czm_writeLogDepth
 * @glslFunction
 *
 * @param {float} depth The depth coordinate, where 1.0 is on the near plane and
 *                      depth increases in eye-space units from there
 *
 * @example
 * czm_writeLogDepth((czm_projection * v_positionEyeCoordinates).w + 1.0);
 */
void czm_writeLogDepth(float depth)
{
#if (defined(LOG_DEPTH) && (__VERSION__ == 300 || defined(GL_EXT_frag_depth)))
    // Discard the vertex if it's not between the near and far planes.
    // We allow a bit of epsilon on the near plane comparison because a 1.0
    // from the vertex shader (indicating the vertex should be _on_ the near
    // plane) will not necessarily come here as exactly 1.0.
    if (depth <= 0.9999999 || depth > czm_farDepthFromNearPlusOne) {
        discard;
    }

#ifdef POLYGON_OFFSET
    // Polygon offset: m * factor + r * units
    float factor = u_polygonOffset[0];
    float units = u_polygonOffset[1];

#if (__VERSION__ == 300 || defined(GL_OES_standard_derivatives))
    // This factor doesn't work in IE 10
    if (factor != 0.0) {
        // m = sqrt(dZdX^2 + dZdY^2);
        float x = dFdx(depth);
        float y = dFdy(depth);
        float m = sqrt(x * x + y * y);

        // Apply the factor before computing the log depth.
        depth += m * factor;
    }
#endif

#endif

    gl_FragDepth = log2(depth) * czm_oneOverLog2FarDepthFromNearPlusOne;

#ifdef POLYGON_OFFSET
    // Apply the units after the log depth.
    gl_FragDepth += czm_epsilon7 * units;
#endif

#endif
}

/**
 * Writes the fragment depth to the logarithmic depth buffer.
 * <p>
 * Use this when the vertex shader calls {@link czm_vertexlogDepth}.
 * </p>
 *
 * @name czm_writeLogDepth
 * @glslFunction
 */
void czm_writeLogDepth() {
#ifdef LOG_DEPTH
    czm_writeLogDepth(v_depthFromNearPlusOne);
#endif
}
`;var Ia=`/**
 * Transforms a value for non-perspective interpolation by multiplying
 * it by w, the value used in the perspective divide. This function is
 * intended to be called in a vertex shader to compute the value of a
 * \`varying\` that should not be subject to perspective interpolation.
 * For example, screen-space texture coordinates. The fragment shader
 * must call {@link czm_readNonPerspective} to retrieve the final
 * non-perspective value.
 *
 * @name czm_writeNonPerspective
 * @glslFunction
 *
 * @param {float|vec2|vec3|vec4} value The value to be interpolated without accounting for perspective.
 * @param {float} w The perspective divide value. Usually this is the computed \`gl_Position.w\`.
 * @returns {float|vec2|vec3|vec4} The transformed value, intended to be stored in a \`varying\` and read in the
 *          fragment shader with {@link czm_readNonPerspective}.
 */
float czm_writeNonPerspective(float value, float w) {
    return value * w;
}

vec2 czm_writeNonPerspective(vec2 value, float w) {
    return value * w;
}

vec3 czm_writeNonPerspective(vec3 value, float w) {
    return value * w;
}

vec4 czm_writeNonPerspective(vec4 value, float w) {
    return value * w;
}
`;var vt={czm_degreesPerRadian:lG,czm_depthRange:ZG,czm_epsilon1:WG,czm_epsilon2:UG,czm_epsilon3:AG,czm_epsilon4:tG,czm_epsilon5:eG,czm_epsilon6:mG,czm_epsilon7:iG,czm_infinity:nG,czm_oneOverPi:GG,czm_oneOverTwoPi:sG,czm_passCesium3DTile:aG,czm_passCesium3DTileClassification:rG,czm_passCesium3DTileClassificationIgnoreShow:oG,czm_passClassification:hG,czm_passCompute:RG,czm_passEnvironment:dG,czm_passGlobe:TG,czm_passOpaque:BG,czm_passOverlay:FG,czm_passTerrainClassification:QG,czm_passTranslucent:IG,czm_passVoxels:cG,czm_pi:SG,czm_piOverFour:CG,czm_piOverSix:gG,czm_piOverThree:NG,czm_piOverTwo:EG,czm_radiansPerDegree:pG,czm_sceneMode2D:XG,czm_sceneMode3D:fG,czm_sceneModeColumbusView:bG,czm_sceneModeMorphing:uG,czm_solarRadius:JG,czm_threePiOver2:xG,czm_twoPi:DG,czm_webMercatorMaxLatitude:MG,czm_depthRangeStruct:_G,czm_material:OG,czm_materialInput:wG,czm_modelMaterial:YG,czm_modelVertexOutput:yG,czm_pbrParameters:vG,czm_ray:zG,czm_raySegment:kG,czm_shadowParameters:HG,czm_HSBToRGB:LG,czm_HSLToRGB:KG,czm_RGBToHSB:PG,czm_RGBToHSL:jG,czm_RGBToXYZ:qG,czm_XYZToRGB:$G,czm_acesTonemapping:Vs,czm_alphaWeight:ls,czm_antialias:Zs,czm_approximateSphericalCoordinates:Ws,czm_backFacing:Us,czm_branchFreeTernary:As,czm_cascadeColor:ts,czm_cascadeDistance:es,czm_cascadeMatrix:ms,czm_cascadeWeights:is,czm_columbusViewMorph:ns,czm_computePosition:Gs,czm_cosineAndSine:ss,czm_decompressTextureCoordinates:as,czm_defaultPbrMaterial:rs,czm_depthClamp:os,czm_eastNorthUpToEyeCoordinates:hs,czm_ellipsoidContainsPoint:Rs,czm_ellipsoidWgs84TextureCoordinates:ds,czm_equalsEpsilon:Ts,czm_eyeOffset:Bs,czm_eyeToWindowCoordinates:Fs,czm_fastApproximateAtan:Qs,czm_fog:Is,czm_gammaCorrect:cs,czm_geodeticSurfaceNormal:Ss,czm_getDefaultMaterial:Cs,czm_getLambertDiffuse:gs,czm_getSpecular:Ns,czm_getWaterNoise:Es,czm_hue:ps,czm_inverseGamma:Xs,czm_isEmpty:fs,czm_isFull:bs,czm_latitudeToWebMercatorFraction:us,czm_lineDistance:Js,czm_linearToSrgb:xs,czm_luminance:Ds,czm_metersPerPixel:Ms,czm_modelToWindowCoordinates:_s,czm_multiplyWithColorBalance:Os,czm_nearFarScalar:ws,czm_octDecode:Ys,czm_packDepth:ys,czm_pbrLighting:vs,czm_pbrMetallicRoughnessMaterial:zs,czm_pbrSpecularGlossinessMaterial:ks,czm_phong:Hs,czm_planeDistance:Ls,czm_pointAlongRay:Ks,czm_rayEllipsoidIntersectionInterval:Ps,czm_raySphereIntersectionInterval:js,czm_readDepth:qs,czm_readNonPerspective:$s,czm_reverseLogDepth:Va,czm_round:la,czm_sampleOctahedralProjection:Za,czm_saturation:Wa,czm_shadowDepthCompare:Ua,czm_shadowVisibility:Aa,czm_signNotZero:ta,czm_sphericalHarmonics:ea,czm_srgbToLinear:ma,czm_tangentToEyeSpaceMatrix:ia,czm_textureCube:na,czm_transformPlane:Ga,czm_translateRelativeToEye:sa,czm_translucentPhong:aa,czm_transpose:ra,czm_unpackDepth:oa,czm_unpackFloat:ha,czm_unpackUint:Ra,czm_valueTransform:da,czm_vertexLogDepth:Ta,czm_windowToEyeCoordinates:Ba,czm_writeDepthClamp:Fa,czm_writeLogDepth:Qa,czm_writeNonPerspective:Ia};function gB(V,l){let Z=V;return Z=Z.replaceAll("version 300 es",""),Z=Z.replaceAll(/(texture\()/g,"texture2D("),l?(Z=Z.replaceAll(/(in)\s+(vec\d|mat\d|float)/g,"varying $2"),/out_FragData_(\d+)/.test(Z)&&(Z=`#extension GL_EXT_draw_buffers : enable
${Z}`,Z=Z.replaceAll(/layout\s+\(location\s*=\s*\d+\)\s*out\s+vec4\s+out_FragData_\d+;/g,""),Z=Z.replaceAll(/out_FragData_(\d+)/g,"gl_FragData[$1]")),Z=Z.replaceAll(/layout\s+\(location\s*=\s*0\)\s*out\s+vec4\s+out_FragColor;/g,""),Z=Z.replaceAll(/out_FragColor/g,"gl_FragColor"),Z=Z.replaceAll(/out_FragColor\[(\d+)\]/g,"gl_FragColor[$1]"),/gl_FragDepth/.test(Z)&&(Z=`#extension GL_EXT_frag_depth : enable
${Z}`,Z=Z.replaceAll(/gl_FragDepth/g,"gl_FragDepthEXT")),Z=`#ifdef GL_OES_standard_derivatives
#extension GL_OES_standard_derivatives : enable
#endif
${Z}`):(Z=Z.replaceAll(/(in)\s+(vec\d|mat\d|float)/g,"attribute $2"),Z=Z.replaceAll(/(out)\s+(vec\d|mat\d|float)\s+([\w]+);/g,"varying $2 $3;")),Z=`#version 100
${Z}`,Z}var ca=gB;function Sa(V){return V=V.replace(/\/\/.*/g,""),V.replace(/\/\*\*[\s\S]*?\*\//gm,function(l){let Z=l.match(/\n/gm).length,U="";for(let A=0;A<Z;++A)U+=`
`;return U})}function Ca(V,l,Z){let U;for(let A=0;A<Z.length;++A)Z[A].name===V&&(U=Z[A]);return s(U)||(l=Sa(l),U={name:V,glslSource:l,dependsOn:[],requiredBy:[],evaluated:!1},Z.push(U)),U}function ga(V,l){if(V.evaluated)return;V.evaluated=!0;let Z=V.glslSource.match(/\bczm_[a-zA-Z0-9_]*/g);s(Z)&&Z!==null&&(Z=Z.filter(function(U,A){return Z.indexOf(U)===A}),Z.forEach(function(U){if(U!==V.name&&ql._czmBuiltinsAndUniforms.hasOwnProperty(U)){let A=Ca(U,ql._czmBuiltinsAndUniforms[U],l);V.dependsOn.push(A),A.requiredBy.push(V),ga(A,l)}}))}function NB(V){let l=[],Z=[];for(;V.length>0;){let A=V.pop();Z.push(A),A.requiredBy.length===0&&l.push(A)}for(;l.length>0;){let A=l.shift();V.push(A);for(let t=0;t<A.dependsOn.length;++t){let m=A.dependsOn[t],i=m.requiredBy.indexOf(A);m.requiredBy.splice(i,1),m.requiredBy.length===0&&l.push(m)}}let U=[];for(let A=0;A<Z.length;++A)Z[A].requiredBy.length!==0&&U.push(Z[A]);if(U.length!==0){let A=`A circular dependency was found in the following built-in functions/structs/constants: 
`;for(let t=0;t<U.length;++t)A=`${A+U[t].name}
`;throw new I(A)}}function EB(V){let l=[],Z=Ca("main",V,l);ga(Z,l),NB(l);let U="";for(let A=l.length-1;A>=0;--A)U=`${U+l[A].glslSource}
`;return U.replace(Z.glslSource,"")}function Na(V,l,Z){let U,A,t="",m=V.sources;if(s(m))for(U=0,A=m.length;U<A;++U)t+=`
#line 0
${m[U]}`;t=Sa(t);let i;t=t.replace(/#version\s+(.*?)\n/gm,function(S,p){if(s(i)&&i!==p)throw new I(`inconsistent versions found: ${i} and ${p}`);return i=p,`
`});let n=[];t=t.replace(/#extension.*\n/gm,function(S){return n.push(S),`
`}),t=t.replace(/precision\s(lowp|mediump|highp)\s(float|int);/,"");let o=V.pickColorQualifier;s(o)&&(t=ql.createPickFragmentShaderSource(t,o));let h="",R=n.length;for(U=0;U<R;U++)h+=n[U];l&&(h+=`#ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    precision highp int;
#else
    precision mediump float;
    precision mediump int;
    #define highp mediump
#endif

`);let c=V.defines;if(s(c))for(U=0,A=c.length;U<A;++U){let S=c[U];S.length!==0&&(h+=`#define ${S}
`)}Z.textureFloatLinear&&(h+=`#define OES_texture_float_linear

`),Z.floatingPointTexture&&(h+=`#define OES_texture_float

`);let Q="";V.includeBuiltIns&&(Q=EB(t)),h+=`
#line 0
`;let T=Q+t;return Z.webgl2&&l&&!/layout\s*\(location\s*=\s*0\)\s*out\s+vec4\s+out_FragColor;/g.test(T)&&!/czm_out_FragColor/g.test(T)&&/out_FragColor/g.test(T)&&(h+=`layout(location = 0) out vec4 out_FragColor;

`),h+=Q,h+=t,Z.webgl2?h=`#version 300 es
${h}`:h=ca(h,l),h}function ql(V){V=a(V,a.EMPTY_OBJECT);let l=V.pickColorQualifier;if(s(l)&&l!=="uniform"&&l!=="in")throw new I("options.pickColorQualifier must be 'uniform' or 'in'.");this.defines=s(V.defines)?V.defines.slice(0):[],this.sources=s(V.sources)?V.sources.slice(0):[],this.pickColorQualifier=l,this.includeBuiltIns=a(V.includeBuiltIns,!0)}ql.prototype.clone=function(){return new ql({sources:this.sources,defines:this.defines,pickColorQualifier:this.pickColorQualifier,includeBuiltIns:this.includeBuiltIns})};ql.replaceMain=function(V,l){return l=`void ${l}()`,V.replace(/void\s+main\s*\(\s*(?:void)?\s*\)/g,l)};ql.prototype.getCacheKey=function(){let l=this.defines.slice().sort().join(","),Z=this.pickColorQualifier,U=this.includeBuiltIns,A=this.sources.join(`
`);return`${l}:${Z}:${U}:${A}`};ql.prototype.createCombinedVertexShader=function(V){return Na(this,!1,V)};ql.prototype.createCombinedFragmentShader=function(V){return Na(this,!0,V)};ql._czmBuiltinsAndUniforms={};for(let V in vt)vt.hasOwnProperty(V)&&(ql._czmBuiltinsAndUniforms[V]=vt[V]);for(let V in yU)if(yU.hasOwnProperty(V)){let l=yU[V];typeof l.getDeclaration=="function"&&(ql._czmBuiltinsAndUniforms[V]=l.getDeclaration(V))}ql.createPickVertexShaderSource=function(V){return`${ql.replaceMain(V,"czm_old_main")}
in vec4 pickColor; 
out vec4 czm_pickColor; 
void main() 
{ 
    czm_old_main(); 
    czm_pickColor = pickColor; 
}`};ql.createPickFragmentShaderSource=function(V,l){let Z=ql.replaceMain(V,"czm_old_main"),U=`${l} vec4 czm_pickColor; 
void main() 
{ 
    czm_old_main(); 
    if (out_FragColor.a == 0.0) { 
       discard; 
    } 
    out_FragColor = czm_pickColor; 
}`;return`${Z}
${U}`};function pB(V,l){let Z=V.defines,U=Z.length;for(let A=0;A<U;++A)if(Z[A]===l)return!0;return!1}function Ea(V,l){let Z=V.sources,U=Z.length;for(let A=0;A<U;++A)if(Z[A].indexOf(l)!==-1)return!0;return!1}function pa(V,l){let Z=l.length;for(let U=0;U<Z;++U){let A=l[U];if(Ea(V,A))return A}}var XB=["v_normalEC","v_normal"];ql.findNormalVarying=function(V){return Ea(V,"#ifdef HAS_NORMALS")?pB(V,"HAS_NORMALS")?"v_normalEC":void 0:pa(V,XB)};var fB=["v_positionEC"];ql.findPositionVarying=function(V){return pa(V,fB)};var kV=ql;function bB(V,l,Z,U){let A=s(l.vertexBuffer),t=s(l.value),m=l.value?l.value.length:l.componentsPerAttribute;if(!A&&!t)throw new I("attribute must have a vertexBuffer or a value.");if(A&&t)throw new I("attribute cannot have both a vertexBuffer and a value.  It must have either a vertexBuffer property defining per-vertex data or a value property defining data for all vertices.");if(m!==1&&m!==2&&m!==3&&m!==4)throw t?new I("attribute.value.length must be in the range [1, 4]."):new I("attribute.componentsPerAttribute must be in the range [1, 4].");if(s(l.componentDatatype)&&!iV.validate(l.componentDatatype))throw new I("attribute must have a valid componentDatatype or not specify it.");if(s(l.strideInBytes)&&l.strideInBytes>255)throw new I("attribute must have a strideInBytes less than or equal to 255 or not specify it.");if(s(l.instanceDivisor)&&l.instanceDivisor>0&&!U.instancedArrays)throw new I("instanced arrays is not supported");if(s(l.instanceDivisor)&&l.instanceDivisor<0)throw new I("attribute must have an instanceDivisor greater than or equal to zero");if(s(l.instanceDivisor)&&t)throw new I("attribute cannot have have an instanceDivisor if it is not backed by a buffer");if(s(l.instanceDivisor)&&l.instanceDivisor>0&&l.index===0)throw new I("attribute zero cannot have an instanceDivisor greater than 0");let i={index:a(l.index,Z),enabled:a(l.enabled,!0),vertexBuffer:l.vertexBuffer,value:t?l.value.slice(0):void 0,componentsPerAttribute:m,componentDatatype:a(l.componentDatatype,iV.FLOAT),normalize:a(l.normalize,!1),offsetInBytes:a(l.offsetInBytes,0),strideInBytes:a(l.strideInBytes,0),instanceDivisor:a(l.instanceDivisor,0)};if(A)i.vertexAttrib=function(n){let o=this.index;n.bindBuffer(n.ARRAY_BUFFER,this.vertexBuffer._getBuffer()),n.vertexAttribPointer(o,this.componentsPerAttribute,this.componentDatatype,this.normalize,this.strideInBytes,this.offsetInBytes),n.enableVertexAttribArray(o),this.instanceDivisor>0&&(U.glVertexAttribDivisor(o,this.instanceDivisor),U._vertexAttribDivisors[o]=this.instanceDivisor,U._previousDrawInstanced=!0)},i.disableVertexAttribArray=function(n){n.disableVertexAttribArray(this.index),this.instanceDivisor>0&&U.glVertexAttribDivisor(Z,0)};else{switch(i.componentsPerAttribute){case 1:i.vertexAttrib=function(n){n.vertexAttrib1fv(this.index,this.value)};break;case 2:i.vertexAttrib=function(n){n.vertexAttrib2fv(this.index,this.value)};break;case 3:i.vertexAttrib=function(n){n.vertexAttrib3fv(this.index,this.value)};break;case 4:i.vertexAttrib=function(n){n.vertexAttrib4fv(this.index,this.value)};break}i.disableVertexAttribArray=function(n){}}V.push(i)}function fa(V,l,Z){for(let U=0;U<l.length;++U){let A=l[U];A.enabled&&A.vertexAttrib(V)}s(Z)&&V.bindBuffer(V.ELEMENT_ARRAY_BUFFER,Z._getBuffer())}function pW(V){V=a(V,a.EMPTY_OBJECT),v.defined("options.context",V.context),v.defined("options.attributes",V.attributes);let l=V.context,Z=l._gl,U=V.attributes,A=V.indexBuffer,t,m=[],i=1,n=!1,o=!1,h=U.length;for(t=0;t<h;++t)bB(m,U[t],t,l);for(h=m.length,t=0;t<h;++t){let Q=m[t];if(s(Q.vertexBuffer)&&Q.instanceDivisor===0){let T=Q.strideInBytes||Q.componentsPerAttribute*iV.getSizeInBytes(Q.componentDatatype);i=Q.vertexBuffer.sizeInBytes/T;break}}for(t=0;t<h;++t)m[t].instanceDivisor>0&&(n=!0),s(m[t].value)&&(o=!0);let R={};for(t=0;t<h;++t){let Q=m[t].index;if(R[Q])throw new I(`Index ${Q} is used by more than one attribute.`);R[Q]=!0}let c;l.vertexArrayObject&&(c=l.glCreateVertexArray(),l.glBindVertexArray(c),fa(Z,m,A),l.glBindVertexArray(null)),this._numberOfVertices=i,this._hasInstancedAttributes=n,this._hasConstantAttributes=o,this._context=l,this._gl=Z,this._vao=c,this._attributes=m,this._indexBuffer=A}function Xa(V){return V.values.length/V.componentsPerAttribute}function uB(V){return iV.getSizeInBytes(V.componentDatatype)*V.componentsPerAttribute}function JB(V){let l,Z,U,A=[];for(Z in V)V.hasOwnProperty(Z)&&s(V[Z])&&s(V[Z].values)&&(A.push(Z),V[Z].componentDatatype===iV.DOUBLE&&(V[Z].componentDatatype=iV.FLOAT,V[Z].values=iV.createTypedArray(iV.FLOAT,V[Z].values)));let t,m=A.length;if(m>0)for(t=Xa(V[A[0]]),l=1;l<m;++l){let o=Xa(V[A[l]]);if(o!==t)throw new Jl(`Each attribute list must have the same number of vertices.  Attribute ${A[l]} has a different number of vertices (${o.toString()}) than attribute ${A[0]} (${t.toString()}).`)}A.sort(function(o,h){return iV.getSizeInBytes(V[h].componentDatatype)-iV.getSizeInBytes(V[o].componentDatatype)});let i=0,n={};for(l=0;l<m;++l)Z=A[l],U=V[Z],n[Z]=i,i+=uB(U);if(i>0){let o=iV.getSizeInBytes(V[A[0]].componentDatatype),h=i%o;h!==0&&(i+=o-h);let R=t*i,c=new ArrayBuffer(R),Q={};for(l=0;l<m;++l){Z=A[l];let T=iV.getSizeInBytes(V[Z].componentDatatype);Q[Z]={pointer:iV.createTypedArray(V[Z].componentDatatype,c),index:n[Z]/T,strideInComponentType:i/T}}for(l=0;l<t;++l)for(let T=0;T<m;++T){Z=A[T],U=V[Z];let S=U.values,p=Q[Z],b=p.pointer,E=U.componentsPerAttribute;for(let D=0;D<E;++D)b[p.index+D]=S[l*E+D];p.index+=p.strideInComponentType}return{buffer:c,offsetsInBytes:n,vertexSizeInBytes:i}}}pW.fromGeometry=function(V){V=a(V,a.EMPTY_OBJECT),v.defined("options.context",V.context);let l=V.context,Z=a(V.geometry,a.EMPTY_OBJECT),U=a(V.bufferUsage,XV.DYNAMIC_DRAW),A=a(V.attributeLocations,a.EMPTY_OBJECT),t=a(V.interleave,!1),m=V.vertexArrayAttributes,i,n,o,h=s(m)?m:[],R=Z.attributes;if(t){let T=JB(R);if(s(T)){o=$Z.createVertexBuffer({context:l,typedArray:T.buffer,usage:U});let S=T.offsetsInBytes,p=T.vertexSizeInBytes;for(i in R)R.hasOwnProperty(i)&&s(R[i])&&(n=R[i],s(n.values)?h.push({index:A[i],vertexBuffer:o,componentDatatype:n.componentDatatype,componentsPerAttribute:n.componentsPerAttribute,normalize:n.normalize,offsetInBytes:S[i],strideInBytes:p}):h.push({index:A[i],value:n.value,componentDatatype:n.componentDatatype,normalize:n.normalize}))}}else for(i in R)if(R.hasOwnProperty(i)&&s(R[i])){n=R[i];let T=n.componentDatatype;T===iV.DOUBLE&&(T=iV.FLOAT),o=void 0,s(n.values)&&(o=$Z.createVertexBuffer({context:l,typedArray:iV.createTypedArray(T,n.values),usage:U})),h.push({index:A[i],vertexBuffer:o,value:n.value,componentDatatype:T,componentsPerAttribute:n.componentsPerAttribute,normalize:n.normalize})}let c,Q=Z.indices;return s(Q)&&(Xt.computeNumberOfVertices(Z)>=NV.SIXTY_FOUR_KILOBYTES&&l.elementIndexUint?c=$Z.createIndexBuffer({context:l,typedArray:new Uint32Array(Q),usage:U,indexDatatype:rW.UNSIGNED_INT}):c=$Z.createIndexBuffer({context:l,typedArray:new Uint16Array(Q),usage:U,indexDatatype:rW.UNSIGNED_SHORT})),new pW({context:l,attributes:h,indexBuffer:c})};Object.defineProperties(pW.prototype,{numberOfAttributes:{get:function(){return this._attributes.length}},numberOfVertices:{get:function(){return this._numberOfVertices}},indexBuffer:{get:function(){return this._indexBuffer}}});pW.prototype.getAttribute=function(V){return v.defined("index",V),this._attributes[V]};function xB(V){let l=V._context,Z=V._hasInstancedAttributes;if(!Z&&!l._previousDrawInstanced)return;l._previousDrawInstanced=Z;let U=l._vertexAttribDivisors,A=V._attributes,t=$V.maximumVertexAttributes,m;if(Z){let i=A.length;for(m=0;m<i;++m){let n=A[m];if(n.enabled){let o=n.instanceDivisor,h=n.index;o!==U[h]&&(l.glVertexAttribDivisor(h,o),U[h]=o)}}}else for(m=0;m<t;++m)U[m]>0&&(l.glVertexAttribDivisor(m,0),U[m]=0)}function DB(V,l){let Z=V._attributes,U=Z.length;for(let A=0;A<U;++A){let t=Z[A];t.enabled&&s(t.value)&&t.vertexAttrib(l)}}pW.prototype._bind=function(){s(this._vao)?(this._context.glBindVertexArray(this._vao),this._context.instancedArrays&&xB(this),this._hasConstantAttributes&&DB(this,this._gl)):fa(this._gl,this._attributes,this._indexBuffer)};pW.prototype._unBind=function(){if(s(this._vao))this._context.glBindVertexArray(null);else{let V=this._attributes,l=this._gl;for(let Z=0;Z<V.length;++Z){let U=V[Z];U.enabled&&U.disableVertexAttribArray(l)}this._indexBuffer&&l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,null)}};pW.prototype.isDestroyed=function(){return!1};pW.prototype.destroy=function(){let V=this._attributes;for(let Z=0;Z<V.length;++Z){let U=V[Z].vertexBuffer;s(U)&&!U.isDestroyed()&&U.vertexArrayDestroyable&&U.destroy()}let l=this._indexBuffer;return s(l)&&!l.isDestroyed()&&l.vertexArrayDestroyable&&l.destroy(),s(this._vao)&&this._context.glDeleteVertexArray(this._vao),fV(this)};var zt=pW;function $l(V,l,Z,U){if(v.defined("context",V),!l||l.length===0)throw new I("At least one attribute is required.");let A=$l._verifyAttributes(l);Z=a(Z,0);let t=[],m={},i,n,o=A.length;for(let R=0;R<o;++R){let c=A[R];if(c.vertexBuffer){t.push(c);continue}n=c.usage,i=m[n],s(i)||(i=m[n]=[]),i.push(c)}function h(R,c){return iV.getSizeInBytes(c.componentDatatype)-iV.getSizeInBytes(R.componentDatatype)}this._allBuffers=[];for(n in m)if(m.hasOwnProperty(n)){i=m[n],i.sort(h);let R=$l._vertexSizeInBytes(i),c=i[0].usage,Q={vertexSizeInBytes:R,vertexBuffer:void 0,usage:c,needsCommit:!1,arrayBuffer:void 0,arrayViews:$l._createArrayViews(i,R)};this._allBuffers.push(Q)}this._size=0,this._instanced=a(U,!1),this._precreated=t,this._context=V,this.writers=void 0,this.va=void 0,this.resize(Z)}$l._verifyAttributes=function(V){let l=[];for(let U=0;U<V.length;++U){let A=V[U],t={index:a(A.index,U),enabled:a(A.enabled,!0),componentsPerAttribute:A.componentsPerAttribute,componentDatatype:a(A.componentDatatype,iV.FLOAT),normalize:a(A.normalize,!1),vertexBuffer:A.vertexBuffer,usage:a(A.usage,XV.STATIC_DRAW)};if(l.push(t),t.componentsPerAttribute!==1&&t.componentsPerAttribute!==2&&t.componentsPerAttribute!==3&&t.componentsPerAttribute!==4)throw new I("attribute.componentsPerAttribute must be in the range [1, 4].");let m=t.componentDatatype;if(!iV.validate(m))throw new I("Attribute must have a valid componentDatatype or not specify it.");if(!XV.validate(t.usage))throw new I("Attribute must have a valid usage or not specify it.")}let Z=new Array(l.length);for(let U=0;U<l.length;++U){let t=l[U].index;if(Z[t])throw new I(`Index ${t} is used by more than one attribute.`);Z[t]=!0}return l};$l._vertexSizeInBytes=function(V){let l=0,Z=V.length;for(let m=0;m<Z;++m){let i=V[m];l+=i.componentsPerAttribute*iV.getSizeInBytes(i.componentDatatype)}let U=Z>0?iV.getSizeInBytes(V[0].componentDatatype):0,A=U>0?l%U:0,t=A===0?0:U-A;return l+=t,l};$l._createArrayViews=function(V,l){let Z=[],U=0,A=V.length;for(let t=0;t<A;++t){let m=V[t],i=m.componentDatatype;Z.push({index:m.index,enabled:m.enabled,componentsPerAttribute:m.componentsPerAttribute,componentDatatype:i,normalize:m.normalize,offsetInBytes:U,vertexSizeInComponentType:l/iV.getSizeInBytes(i),view:void 0}),U+=m.componentsPerAttribute*iV.getSizeInBytes(i)}return Z};$l.prototype.resize=function(V){this._size=V;let l=this._allBuffers;this.writers=[];for(let Z=0,U=l.length;Z<U;++Z){let A=l[Z];$l._resize(A,this._size),$l._appendWriters(this.writers,A)}Le(this)};$l._resize=function(V,l){if(V.vertexSizeInBytes>0){let Z=new ArrayBuffer(l*V.vertexSizeInBytes);if(s(V.arrayBuffer)){let t=new Uint8Array(Z),m=new Uint8Array(V.arrayBuffer),i=m.length;for(let n=0;n<i;++n)t[n]=m[n]}let U=V.arrayViews,A=U.length;for(let t=0;t<A;++t){let m=U[t];m.view=iV.createArrayBufferView(m.componentDatatype,Z,m.offsetInBytes)}V.arrayBuffer=Z}};var MB=[function(V,l,Z){return function(U,A){l[U*Z]=A,V.needsCommit=!0}},function(V,l,Z){return function(U,A,t){let m=U*Z;l[m]=A,l[m+1]=t,V.needsCommit=!0}},function(V,l,Z){return function(U,A,t,m){let i=U*Z;l[i]=A,l[i+1]=t,l[i+2]=m,V.needsCommit=!0}},function(V,l,Z){return function(U,A,t,m,i){let n=U*Z;l[n]=A,l[n+1]=t,l[n+2]=m,l[n+3]=i,V.needsCommit=!0}}];$l._appendWriters=function(V,l){let Z=l.arrayViews,U=Z.length;for(let A=0;A<U;++A){let t=Z[A];V[t.index]=MB[t.componentsPerAttribute-1](l,t.view,t.vertexSizeInComponentType)}};$l.prototype.commit=function(V){let l=!1,Z=this._allBuffers,U,A,t;for(A=0,t=Z.length;A<t;++A)U=Z[A],l=_B(this,U)||l;if(l||!s(this.va)){Le(this);let m=this.va=[],i=NV.SIXTY_FOUR_KILOBYTES-4,n=s(V)&&!this._instanced?Math.ceil(this._size/i):1;for(let o=0;o<n;++o){let h=[];for(A=0,t=Z.length;A<t;++A){U=Z[A];let R=o*(U.vertexSizeInBytes*i);$l._appendAttributes(h,U,R,this._instanced)}h=h.concat(this._precreated),m.push({va:new zt({context:this._context,attributes:h,indexBuffer:V}),indicesCount:1.5*(o!==n-1?i:this._size%i)})}}};function _B(V,l){if(l.needsCommit&&l.vertexSizeInBytes>0){l.needsCommit=!1;let Z=l.vertexBuffer,U=V._size*l.vertexSizeInBytes,A=s(Z);if(!A||Z.sizeInBytes<U)return A&&Z.destroy(),l.vertexBuffer=$Z.createVertexBuffer({context:V._context,typedArray:l.arrayBuffer,usage:l.usage}),l.vertexBuffer.vertexArrayDestroyable=!1,!0;l.vertexBuffer.copyFromArrayView(l.arrayBuffer)}return!1}$l._appendAttributes=function(V,l,Z,U){let A=l.arrayViews,t=A.length;for(let m=0;m<t;++m){let i=A[m];V.push({index:i.index,enabled:i.enabled,componentsPerAttribute:i.componentsPerAttribute,componentDatatype:i.componentDatatype,normalize:i.normalize,vertexBuffer:l.vertexBuffer,offsetInBytes:Z+i.offsetInBytes,strideInBytes:l.vertexSizeInBytes,instanceDivisor:U?1:0})}};$l.prototype.subCommit=function(V,l){if(V<0||V>=this._size)throw new I("offsetInVertices must be greater than or equal to zero and less than the vertex array size.");if(V+l>this._size)throw new I("offsetInVertices + lengthInVertices cannot exceed the vertex array size.");let Z=this._allBuffers;for(let U=0,A=Z.length;U<A;++U)OB(Z[U],V,l)};function OB(V,l,Z){if(V.needsCommit&&V.vertexSizeInBytes>0){let U=V.vertexSizeInBytes*l,A=V.vertexSizeInBytes*Z;V.vertexBuffer.copyFromArrayView(new Uint8Array(V.arrayBuffer,U,A),U)}}$l.prototype.endSubCommits=function(){let V=this._allBuffers;for(let l=0,Z=V.length;l<Z;++l)V[l].needsCommit=!1};function Le(V){let l=V.va;if(!s(l))return;let Z=l.length;for(let U=0;U<Z;++U)l[U].va.destroy();V.va=void 0}$l.prototype.isDestroyed=function(){return!1};$l.prototype.destroy=function(){let V=this._allBuffers;for(let l=0,Z=V.length;l<Z;++l){let U=V[l];U.vertexBuffer=U.vertexBuffer&&U.vertexBuffer.destroy()}return Le(this),fV(this)};var kt=$l;var ba=`uniform sampler2D u_atlas;

#ifdef VECTOR_TILE
uniform vec4 u_highlightColor;
#endif

in vec2 v_textureCoordinates;
in vec4 v_pickColor;
in vec4 v_color;

#ifdef SDF
in vec4 v_outlineColor;
in float v_outlineWidth;
#endif

#ifdef FRAGMENT_DEPTH_CHECK
in vec4 v_textureCoordinateBounds;                  // the min and max x and y values for the texture coordinates
in vec4 v_originTextureCoordinateAndTranslate;      // texture coordinate at the origin, billboard translate (used for label glyphs)
in vec4 v_compressed;                               // x: eyeDepth, y: applyTranslate & enableDepthCheck, z: dimensions, w: imageSize
in mat2 v_rotationMatrix;

const float SHIFT_LEFT12 = 4096.0;
const float SHIFT_LEFT1 = 2.0;

const float SHIFT_RIGHT12 = 1.0 / 4096.0;
const float SHIFT_RIGHT1 = 1.0 / 2.0;

float getGlobeDepth(vec2 adjustedST, vec2 depthLookupST, bool applyTranslate, vec2 dimensions, vec2 imageSize)
{
    vec2 lookupVector = imageSize * (depthLookupST - adjustedST);
    lookupVector = v_rotationMatrix * lookupVector;
    vec2 labelOffset = (dimensions - imageSize) * (depthLookupST - vec2(0.0, v_originTextureCoordinateAndTranslate.y)); // aligns label glyph with bounding rectangle.  Will be zero for billboards because dimensions and imageSize will be equal

    vec2 translation = v_originTextureCoordinateAndTranslate.zw;

    if (applyTranslate)
    {
        // this is only needed for labels where the horizontal origin is not LEFT
        // it moves the label back to where the "origin" should be since all label glyphs are set to HorizontalOrigin.LEFT
        translation += (dimensions * v_originTextureCoordinateAndTranslate.xy * vec2(1.0, 0.0));
    }

    vec2 st = ((lookupVector - translation + labelOffset) + gl_FragCoord.xy) / czm_viewport.zw;
    float logDepthOrDepth = czm_unpackDepth(texture(czm_globeDepthTexture, st));

    if (logDepthOrDepth == 0.0)
    {
        return 0.0; // not on the globe
    }

    vec4 eyeCoordinate = czm_windowToEyeCoordinates(gl_FragCoord.xy, logDepthOrDepth);
    return eyeCoordinate.z / eyeCoordinate.w;
}
#endif


#ifdef SDF

// Get the distance from the edge of a glyph at a given position sampling an SDF texture.
float getDistance(vec2 position)
{
    return texture(u_atlas, position).r;
}

// Samples the sdf texture at the given position and produces a color based on the fill color and the outline.
vec4 getSDFColor(vec2 position, float outlineWidth, vec4 outlineColor, float smoothing)
{
    float distance = getDistance(position);

    if (outlineWidth > 0.0)
    {
        // Don't get the outline edge exceed the SDF_EDGE
        float outlineEdge = clamp(SDF_EDGE - outlineWidth, 0.0, SDF_EDGE);
        float outlineFactor = smoothstep(SDF_EDGE - smoothing, SDF_EDGE + smoothing, distance);
        vec4 sdfColor = mix(outlineColor, v_color, outlineFactor);
        float alpha = smoothstep(outlineEdge - smoothing, outlineEdge + smoothing, distance);
        return vec4(sdfColor.rgb, sdfColor.a * alpha);
    }
    else
    {
        float alpha = smoothstep(SDF_EDGE - smoothing, SDF_EDGE + smoothing, distance);
        return vec4(v_color.rgb, v_color.a * alpha);
    }
}
#endif

void main()
{
    vec4 color = texture(u_atlas, v_textureCoordinates);

#ifdef SDF
    float outlineWidth = v_outlineWidth;
    vec4 outlineColor = v_outlineColor;

    // Get the current distance
    float distance = getDistance(v_textureCoordinates);

#if (__VERSION__ == 300 || defined(GL_OES_standard_derivatives))
    float smoothing = fwidth(distance);
    // Get an offset that is approximately half the distance to the neighbor pixels
    // 0.354 is approximately half of 1/sqrt(2)
    vec2 sampleOffset = 0.354 * vec2(dFdx(v_textureCoordinates) + dFdy(v_textureCoordinates));

    // Sample the center point
    vec4 center = getSDFColor(v_textureCoordinates, outlineWidth, outlineColor, smoothing);

    // Sample the 4 neighbors
    vec4 color1 = getSDFColor(v_textureCoordinates + vec2(sampleOffset.x, sampleOffset.y), outlineWidth, outlineColor, smoothing);
    vec4 color2 = getSDFColor(v_textureCoordinates + vec2(-sampleOffset.x, sampleOffset.y), outlineWidth, outlineColor, smoothing);
    vec4 color3 = getSDFColor(v_textureCoordinates + vec2(-sampleOffset.x, -sampleOffset.y), outlineWidth, outlineColor, smoothing);
    vec4 color4 = getSDFColor(v_textureCoordinates + vec2(sampleOffset.x, -sampleOffset.y), outlineWidth, outlineColor, smoothing);

    // Equally weight the center sample and the 4 neighboring samples
    color = (center + color1 + color2 + color3 + color4)/5.0;
#else
    // If no derivatives available (IE 10?), just do a single sample
    float smoothing = 1.0/32.0;
    color = getSDFColor(v_textureCoordinates, outlineWidth, outlineColor, smoothing);
#endif

    color = czm_gammaCorrect(color);
#else
    color = czm_gammaCorrect(color);
    color *= czm_gammaCorrect(v_color);
#endif

// Fully transparent parts of the billboard are not pickable.
#if !defined(OPAQUE) && !defined(TRANSLUCENT)
    if (color.a < 0.005)   // matches 0/255 and 1/255
    {
        discard;
    }
#else
// The billboard is rendered twice. The opaque pass discards translucent fragments
// and the translucent pass discards opaque fragments.
#ifdef OPAQUE
    if (color.a < 0.995)   // matches < 254/255
    {
        discard;
    }
#else
    if (color.a >= 0.995)  // matches 254/255 and 255/255
    {
        discard;
    }
#endif
#endif

#ifdef VECTOR_TILE
    color *= u_highlightColor;
#endif
    out_FragColor = color;

#ifdef LOG_DEPTH
    czm_writeLogDepth();
#endif

#ifdef FRAGMENT_DEPTH_CHECK
    float temp = v_compressed.y;

    temp = temp * SHIFT_RIGHT1;

    float temp2 = (temp - floor(temp)) * SHIFT_LEFT1;
    bool enableDepthTest = temp2 != 0.0;
    bool applyTranslate = floor(temp) != 0.0;

    if (enableDepthTest) {
        temp = v_compressed.z;
        temp = temp * SHIFT_RIGHT12;

        vec2 dimensions;
        dimensions.y = (temp - floor(temp)) * SHIFT_LEFT12;
        dimensions.x = floor(temp);

        temp = v_compressed.w;
        temp = temp * SHIFT_RIGHT12;

        vec2 imageSize;
        imageSize.y = (temp - floor(temp)) * SHIFT_LEFT12;
        imageSize.x = floor(temp);

        vec2 adjustedST = v_textureCoordinates - v_textureCoordinateBounds.xy;
        adjustedST = adjustedST / vec2(v_textureCoordinateBounds.z - v_textureCoordinateBounds.x, v_textureCoordinateBounds.w - v_textureCoordinateBounds.y);

        float epsilonEyeDepth = v_compressed.x + czm_epsilon1;
        float globeDepth1 = getGlobeDepth(adjustedST, v_originTextureCoordinateAndTranslate.xy, applyTranslate, dimensions, imageSize);

        // negative values go into the screen
        if (globeDepth1 != 0.0 && globeDepth1 > epsilonEyeDepth)
        {
            float globeDepth2 = getGlobeDepth(adjustedST, vec2(0.0, 1.0), applyTranslate, dimensions, imageSize); // top left corner
            if (globeDepth2 != 0.0 && globeDepth2 > epsilonEyeDepth)
            {
                float globeDepth3 = getGlobeDepth(adjustedST, vec2(1.0, 1.0), applyTranslate, dimensions, imageSize); // top right corner
                if (globeDepth3 != 0.0 && globeDepth3 > epsilonEyeDepth)
                {
                    discard;
                }
            }
        }
    }
#endif

}
`;var ua=`#ifdef INSTANCED
in vec2 direction;
#endif
in vec4 positionHighAndScale;
in vec4 positionLowAndRotation;
in vec4 compressedAttribute0;                       // pixel offset, translate, horizontal origin, vertical origin, show, direction, texture coordinates (texture offset)
in vec4 compressedAttribute1;                       // aligned axis, translucency by distance, image width
in vec4 compressedAttribute2;                       // label horizontal origin, image height, color, pick color, size in meters, valid aligned axis, 13 bits free
in vec4 eyeOffset;                                  // eye offset in meters, 4 bytes free (texture range)
in vec4 scaleByDistance;                            // near, nearScale, far, farScale
in vec4 pixelOffsetScaleByDistance;                 // near, nearScale, far, farScale
in vec4 compressedAttribute3;                       // distance display condition near, far, disableDepthTestDistance, dimensions
in vec2 sdf;                                        // sdf outline color (rgb) and width (w)
#if defined(VERTEX_DEPTH_CHECK) || defined(FRAGMENT_DEPTH_CHECK)
in vec4 textureCoordinateBoundsOrLabelTranslate;    // the min and max x and y values for the texture coordinates
#endif
#ifdef VECTOR_TILE
in float a_batchId;
#endif

out vec2 v_textureCoordinates;
#ifdef FRAGMENT_DEPTH_CHECK
out vec4 v_textureCoordinateBounds;
out vec4 v_originTextureCoordinateAndTranslate;
out vec4 v_compressed;                                 // x: eyeDepth, y: applyTranslate & enableDepthCheck, z: dimensions, w: imageSize
out mat2 v_rotationMatrix;
#endif

out vec4 v_pickColor;
out vec4 v_color;
#ifdef SDF
out vec4 v_outlineColor;
out float v_outlineWidth;
#endif

const float UPPER_BOUND = 32768.0;

const float SHIFT_LEFT16 = 65536.0;
const float SHIFT_LEFT12 = 4096.0;
const float SHIFT_LEFT8 = 256.0;
const float SHIFT_LEFT7 = 128.0;
const float SHIFT_LEFT5 = 32.0;
const float SHIFT_LEFT3 = 8.0;
const float SHIFT_LEFT2 = 4.0;
const float SHIFT_LEFT1 = 2.0;

const float SHIFT_RIGHT12 = 1.0 / 4096.0;
const float SHIFT_RIGHT8 = 1.0 / 256.0;
const float SHIFT_RIGHT7 = 1.0 / 128.0;
const float SHIFT_RIGHT5 = 1.0 / 32.0;
const float SHIFT_RIGHT3 = 1.0 / 8.0;
const float SHIFT_RIGHT2 = 1.0 / 4.0;
const float SHIFT_RIGHT1 = 1.0 / 2.0;

vec4 addScreenSpaceOffset(vec4 positionEC, vec2 imageSize, float scale, vec2 direction, vec2 origin, vec2 translate, vec2 pixelOffset, vec3 alignedAxis, bool validAlignedAxis, float rotation, bool sizeInMeters, out mat2 rotationMatrix, out float mpp)
{
    // Note the halfSize cannot be computed in JavaScript because it is sent via
    // compressed vertex attributes that coerce it to an integer.
    vec2 halfSize = imageSize * scale * 0.5;
    halfSize *= ((direction * 2.0) - 1.0);

    vec2 originTranslate = origin * abs(halfSize);

#if defined(ROTATION) || defined(ALIGNED_AXIS)
    if (validAlignedAxis || rotation != 0.0)
    {
        float angle = rotation;
        if (validAlignedAxis)
        {
            vec4 projectedAlignedAxis = czm_modelView3D * vec4(alignedAxis, 0.0);
            angle += sign(-projectedAlignedAxis.x) * acos(sign(projectedAlignedAxis.y) * (projectedAlignedAxis.y * projectedAlignedAxis.y) /
                    (projectedAlignedAxis.x * projectedAlignedAxis.x + projectedAlignedAxis.y * projectedAlignedAxis.y));
        }

        float cosTheta = cos(angle);
        float sinTheta = sin(angle);
        rotationMatrix = mat2(cosTheta, sinTheta, -sinTheta, cosTheta);
        halfSize = rotationMatrix * halfSize;
    }
    else
    {
        rotationMatrix = mat2(1.0, 0.0, 0.0, 1.0);
    }
#endif

    mpp = czm_metersPerPixel(positionEC);
    positionEC.xy += (originTranslate + halfSize) * czm_branchFreeTernary(sizeInMeters, 1.0, mpp);
    positionEC.xy += (translate + pixelOffset) * mpp;

    return positionEC;
}

#ifdef VERTEX_DEPTH_CHECK
float getGlobeDepth(vec4 positionEC)
{
    vec4 posWC = czm_eyeToWindowCoordinates(positionEC);

    float globeDepth = czm_unpackDepth(texture(czm_globeDepthTexture, posWC.xy / czm_viewport.zw));

    if (globeDepth == 0.0)
    {
        return 0.0; // not on the globe
    }

    vec4 eyeCoordinate = czm_windowToEyeCoordinates(posWC.xy, globeDepth);
    return eyeCoordinate.z / eyeCoordinate.w;
}
#endif
void main()
{
    // Modifying this shader may also require modifications to Billboard._computeScreenSpacePosition

    // unpack attributes
    vec3 positionHigh = positionHighAndScale.xyz;
    vec3 positionLow = positionLowAndRotation.xyz;
    float scale = positionHighAndScale.w;

#if defined(ROTATION) || defined(ALIGNED_AXIS)
    float rotation = positionLowAndRotation.w;
#else
    float rotation = 0.0;
#endif

    float compressed = compressedAttribute0.x;

    vec2 pixelOffset;
    pixelOffset.x = floor(compressed * SHIFT_RIGHT7);
    compressed -= pixelOffset.x * SHIFT_LEFT7;
    pixelOffset.x -= UPPER_BOUND;

    vec2 origin;
    origin.x = floor(compressed * SHIFT_RIGHT5);
    compressed -= origin.x * SHIFT_LEFT5;

    origin.y = floor(compressed * SHIFT_RIGHT3);
    compressed -= origin.y * SHIFT_LEFT3;

#ifdef FRAGMENT_DEPTH_CHECK
    vec2 depthOrigin = origin.xy;
#endif
    origin -= vec2(1.0);

    float show = floor(compressed * SHIFT_RIGHT2);
    compressed -= show * SHIFT_LEFT2;

#ifdef INSTANCED
    vec2 textureCoordinatesBottomLeft = czm_decompressTextureCoordinates(compressedAttribute0.w);
    vec2 textureCoordinatesRange = czm_decompressTextureCoordinates(eyeOffset.w);
    vec2 textureCoordinates = textureCoordinatesBottomLeft + direction * textureCoordinatesRange;
#else
    vec2 direction;
    direction.x = floor(compressed * SHIFT_RIGHT1);
    direction.y = compressed - direction.x * SHIFT_LEFT1;

    vec2 textureCoordinates = czm_decompressTextureCoordinates(compressedAttribute0.w);
#endif

    float temp = compressedAttribute0.y  * SHIFT_RIGHT8;
    pixelOffset.y = -(floor(temp) - UPPER_BOUND);

    vec2 translate;
    translate.y = (temp - floor(temp)) * SHIFT_LEFT16;

    temp = compressedAttribute0.z * SHIFT_RIGHT8;
    translate.x = floor(temp) - UPPER_BOUND;

    translate.y += (temp - floor(temp)) * SHIFT_LEFT8;
    translate.y -= UPPER_BOUND;

    temp = compressedAttribute1.x * SHIFT_RIGHT8;
    float temp2 = floor(compressedAttribute2.w * SHIFT_RIGHT2);

    vec2 imageSize = vec2(floor(temp), temp2);

#ifdef FRAGMENT_DEPTH_CHECK
    float labelHorizontalOrigin = floor(compressedAttribute2.w - (temp2 * SHIFT_LEFT2));
    float applyTranslate = 0.0;
    if (labelHorizontalOrigin != 0.0) // is a billboard, so set apply translate to false
    {
        applyTranslate = 1.0;
        labelHorizontalOrigin -= 2.0;
        depthOrigin.x = labelHorizontalOrigin + 1.0;
    }

    depthOrigin = vec2(1.0) - (depthOrigin * 0.5);
#endif

#ifdef EYE_DISTANCE_TRANSLUCENCY
    vec4 translucencyByDistance;
    translucencyByDistance.x = compressedAttribute1.z;
    translucencyByDistance.z = compressedAttribute1.w;

    translucencyByDistance.y = ((temp - floor(temp)) * SHIFT_LEFT8) / 255.0;

    temp = compressedAttribute1.y * SHIFT_RIGHT8;
    translucencyByDistance.w = ((temp - floor(temp)) * SHIFT_LEFT8) / 255.0;
#endif

#if defined(VERTEX_DEPTH_CHECK) || defined(FRAGMENT_DEPTH_CHECK)
    temp = compressedAttribute3.w;
    temp = temp * SHIFT_RIGHT12;

    vec2 dimensions;
    dimensions.y = (temp - floor(temp)) * SHIFT_LEFT12;
    dimensions.x = floor(temp);
#endif

#ifdef ALIGNED_AXIS
    vec3 alignedAxis = czm_octDecode(floor(compressedAttribute1.y * SHIFT_RIGHT8));
    temp = compressedAttribute2.z * SHIFT_RIGHT5;
    bool validAlignedAxis = (temp - floor(temp)) * SHIFT_LEFT1 > 0.0;
#else
    vec3 alignedAxis = vec3(0.0);
    bool validAlignedAxis = false;
#endif

    vec4 pickColor;
    vec4 color;

    temp = compressedAttribute2.y;
    temp = temp * SHIFT_RIGHT8;
    pickColor.b = (temp - floor(temp)) * SHIFT_LEFT8;
    temp = floor(temp) * SHIFT_RIGHT8;
    pickColor.g = (temp - floor(temp)) * SHIFT_LEFT8;
    pickColor.r = floor(temp);

    temp = compressedAttribute2.x;
    temp = temp * SHIFT_RIGHT8;
    color.b = (temp - floor(temp)) * SHIFT_LEFT8;
    temp = floor(temp) * SHIFT_RIGHT8;
    color.g = (temp - floor(temp)) * SHIFT_LEFT8;
    color.r = floor(temp);

    temp = compressedAttribute2.z * SHIFT_RIGHT8;
    bool sizeInMeters = floor((temp - floor(temp)) * SHIFT_LEFT7) > 0.0;
    temp = floor(temp) * SHIFT_RIGHT8;

    pickColor.a = (temp - floor(temp)) * SHIFT_LEFT8;
    pickColor /= 255.0;

    color.a = floor(temp);
    color /= 255.0;

    ///////////////////////////////////////////////////////////////////////////

    vec4 p = czm_translateRelativeToEye(positionHigh, positionLow);
    vec4 positionEC = czm_modelViewRelativeToEye * p;

#if defined(FRAGMENT_DEPTH_CHECK) || defined(VERTEX_DEPTH_CHECK)
    float eyeDepth = positionEC.z;
#endif

    positionEC = czm_eyeOffset(positionEC, eyeOffset.xyz);
    positionEC.xyz *= show;

    ///////////////////////////////////////////////////////////////////////////

#if defined(EYE_DISTANCE_SCALING) || defined(EYE_DISTANCE_TRANSLUCENCY) || defined(EYE_DISTANCE_PIXEL_OFFSET) || defined(DISTANCE_DISPLAY_CONDITION) || defined(DISABLE_DEPTH_DISTANCE)
    float lengthSq;
    if (czm_sceneMode == czm_sceneMode2D)
    {
        // 2D camera distance is a special case
        // treat all billboards as flattened to the z=0.0 plane
        lengthSq = czm_eyeHeight2D.y;
    }
    else
    {
        lengthSq = dot(positionEC.xyz, positionEC.xyz);
    }
#endif

#ifdef EYE_DISTANCE_SCALING
    float distanceScale = czm_nearFarScalar(scaleByDistance, lengthSq);
    scale *= distanceScale;
    translate *= distanceScale;
    // push vertex behind near plane for clipping
    if (scale == 0.0)
    {
        positionEC.xyz = vec3(0.0);
    }
#endif

    float translucency = 1.0;
#ifdef EYE_DISTANCE_TRANSLUCENCY
    translucency = czm_nearFarScalar(translucencyByDistance, lengthSq);
    // push vertex behind near plane for clipping
    if (translucency == 0.0)
    {
        positionEC.xyz = vec3(0.0);
    }
#endif

#ifdef EYE_DISTANCE_PIXEL_OFFSET
    float pixelOffsetScale = czm_nearFarScalar(pixelOffsetScaleByDistance, lengthSq);
    pixelOffset *= pixelOffsetScale;
#endif

#ifdef DISTANCE_DISPLAY_CONDITION
    float nearSq = compressedAttribute3.x;
    float farSq = compressedAttribute3.y;
    if (lengthSq < nearSq || lengthSq > farSq)
    {
        positionEC.xyz = vec3(0.0);
    }
#endif

    mat2 rotationMatrix;
    float mpp;

#ifdef DISABLE_DEPTH_DISTANCE
    float disableDepthTestDistance = compressedAttribute3.z;
#endif

#ifdef VERTEX_DEPTH_CHECK
if (lengthSq < disableDepthTestDistance) {
    float depthsilon = 10.0;

    vec2 labelTranslate = textureCoordinateBoundsOrLabelTranslate.xy;
    vec4 pEC1 = addScreenSpaceOffset(positionEC, dimensions, scale, vec2(0.0), origin, labelTranslate, pixelOffset, alignedAxis, validAlignedAxis, rotation, sizeInMeters, rotationMatrix, mpp);
    float globeDepth1 = getGlobeDepth(pEC1);

    if (globeDepth1 != 0.0 && pEC1.z + depthsilon < globeDepth1)
    {
        vec4 pEC2 = addScreenSpaceOffset(positionEC, dimensions, scale, vec2(0.0, 1.0), origin, labelTranslate, pixelOffset, alignedAxis, validAlignedAxis, rotation, sizeInMeters, rotationMatrix, mpp);
        float globeDepth2 = getGlobeDepth(pEC2);

        if (globeDepth2 != 0.0 && pEC2.z + depthsilon < globeDepth2)
        {
            vec4 pEC3 = addScreenSpaceOffset(positionEC, dimensions, scale, vec2(1.0), origin, labelTranslate, pixelOffset, alignedAxis, validAlignedAxis, rotation, sizeInMeters, rotationMatrix, mpp);
            float globeDepth3 = getGlobeDepth(pEC3);
            if (globeDepth3 != 0.0 && pEC3.z + depthsilon < globeDepth3)
            {
                positionEC.xyz = vec3(0.0);
            }
        }
    }
}
#endif

    positionEC = addScreenSpaceOffset(positionEC, imageSize, scale, direction, origin, translate, pixelOffset, alignedAxis, validAlignedAxis, rotation, sizeInMeters, rotationMatrix, mpp);
    gl_Position = czm_projection * positionEC;
    v_textureCoordinates = textureCoordinates;

#ifdef LOG_DEPTH
    czm_vertexLogDepth();
#endif

#ifdef DISABLE_DEPTH_DISTANCE
    if (disableDepthTestDistance == 0.0 && czm_minimumDisableDepthTestDistance != 0.0)
    {
        disableDepthTestDistance = czm_minimumDisableDepthTestDistance;
    }

    if (disableDepthTestDistance != 0.0)
    {
        // Don't try to "multiply both sides" by w.  Greater/less-than comparisons won't work for negative values of w.
        float zclip = gl_Position.z / gl_Position.w;
        bool clipped = (zclip < -1.0 || zclip > 1.0);
        if (!clipped && (disableDepthTestDistance < 0.0 || (lengthSq > 0.0 && lengthSq < disableDepthTestDistance)))
        {
            // Position z on the near plane.
            gl_Position.z = -gl_Position.w;
#ifdef LOG_DEPTH
            v_depthFromNearPlusOne = 1.0;
#endif
        }
    }
#endif

#ifdef FRAGMENT_DEPTH_CHECK
    if (sizeInMeters) {
        translate /= mpp;
        dimensions /= mpp;
        imageSize /= mpp;
    }

#if defined(ROTATION) || defined(ALIGNED_AXIS)
    v_rotationMatrix = rotationMatrix;
#else
    v_rotationMatrix = mat2(1.0, 0.0, 0.0, 1.0);
#endif

    float enableDepthCheck = 0.0;
    if (lengthSq < disableDepthTestDistance)
    {
        enableDepthCheck = 1.0;
    }

    float dw = floor(clamp(dimensions.x, 0.0, SHIFT_LEFT12));
    float dh = floor(clamp(dimensions.y, 0.0, SHIFT_LEFT12));

    float iw = floor(clamp(imageSize.x, 0.0, SHIFT_LEFT12));
    float ih = floor(clamp(imageSize.y, 0.0, SHIFT_LEFT12));

    v_compressed.x = eyeDepth;
    v_compressed.y = applyTranslate * SHIFT_LEFT1 + enableDepthCheck;
    v_compressed.z = dw * SHIFT_LEFT12 + dh;
    v_compressed.w = iw * SHIFT_LEFT12 + ih;
    v_originTextureCoordinateAndTranslate.xy = depthOrigin;
    v_originTextureCoordinateAndTranslate.zw = translate;
    v_textureCoordinateBounds = textureCoordinateBoundsOrLabelTranslate;

#endif

#ifdef SDF
    vec4 outlineColor;
    float outlineWidth;

    temp = sdf.x;
    temp = temp * SHIFT_RIGHT8;
    outlineColor.b = (temp - floor(temp)) * SHIFT_LEFT8;
    temp = floor(temp) * SHIFT_RIGHT8;
    outlineColor.g = (temp - floor(temp)) * SHIFT_LEFT8;
    outlineColor.r = floor(temp);

    temp = sdf.y;
    temp = temp * SHIFT_RIGHT8;
    float temp3 = (temp - floor(temp)) * SHIFT_LEFT8;
    temp = floor(temp) * SHIFT_RIGHT8;
    outlineWidth = (temp - floor(temp)) * SHIFT_LEFT8;
    outlineColor.a = floor(temp);
    outlineColor /= 255.0;

    v_outlineWidth = outlineWidth / 255.0;
    v_outlineColor = outlineColor;
    v_outlineColor.a *= translucency;
#endif

    v_pickColor = pickColor;

    v_color = color;
    v_color.a *= translucency;

}
`;var wB={ADD:J.FUNC_ADD,SUBTRACT:J.FUNC_SUBTRACT,REVERSE_SUBTRACT:J.FUNC_REVERSE_SUBTRACT,MIN:J.MIN,MAX:J.MAX},BU=Object.freeze(wB);var YB={ZERO:J.ZERO,ONE:J.ONE,SOURCE_COLOR:J.SRC_COLOR,ONE_MINUS_SOURCE_COLOR:J.ONE_MINUS_SRC_COLOR,DESTINATION_COLOR:J.DST_COLOR,ONE_MINUS_DESTINATION_COLOR:J.ONE_MINUS_DST_COLOR,SOURCE_ALPHA:J.SRC_ALPHA,ONE_MINUS_SOURCE_ALPHA:J.ONE_MINUS_SRC_ALPHA,DESTINATION_ALPHA:J.DST_ALPHA,ONE_MINUS_DESTINATION_ALPHA:J.ONE_MINUS_DST_ALPHA,CONSTANT_COLOR:J.CONSTANT_COLOR,ONE_MINUS_CONSTANT_COLOR:J.ONE_MINUS_CONSTANT_COLOR,CONSTANT_ALPHA:J.CONSTANT_ALPHA,ONE_MINUS_CONSTANT_ALPHA:J.ONE_MINUS_CONSTANT_ALPHA,SOURCE_ALPHA_SATURATE:J.SRC_ALPHA_SATURATE},NZ=Object.freeze(YB);var yB={DISABLED:Object.freeze({enabled:!1}),ALPHA_BLEND:Object.freeze({enabled:!0,equationRgb:BU.ADD,equationAlpha:BU.ADD,functionSourceRgb:NZ.SOURCE_ALPHA,functionSourceAlpha:NZ.ONE,functionDestinationRgb:NZ.ONE_MINUS_SOURCE_ALPHA,functionDestinationAlpha:NZ.ONE_MINUS_SOURCE_ALPHA}),PRE_MULTIPLIED_ALPHA_BLEND:Object.freeze({enabled:!0,equationRgb:BU.ADD,equationAlpha:BU.ADD,functionSourceRgb:NZ.ONE,functionSourceAlpha:NZ.ONE,functionDestinationRgb:NZ.ONE_MINUS_SOURCE_ALPHA,functionDestinationAlpha:NZ.ONE_MINUS_SOURCE_ALPHA}),ADDITIVE_BLEND:Object.freeze({enabled:!0,equationRgb:BU.ADD,equationAlpha:BU.ADD,functionSourceRgb:NZ.SOURCE_ALPHA,functionSourceAlpha:NZ.ONE,functionDestinationRgb:NZ.ONE,functionDestinationAlpha:NZ.ONE})},DZ=Object.freeze(yB);var vB={OPAQUE:0,TRANSLUCENT:1,OPAQUE_AND_TRANSLUCENT:2},hl=Object.freeze(vB);var zB={FONT_SIZE:48,PADDING:10,RADIUS:8,CUTOFF:.25},aZ=Object.freeze(zB);function Ke(V,l,Z){let U=V._gl;U.framebufferTexture2D(U.FRAMEBUFFER,l,Z._target,Z._texture,0)}function Ht(V,l,Z){let U=V._gl;U.framebufferRenderbuffer(U.FRAMEBUFFER,l,U.RENDERBUFFER,Z._getRenderbuffer())}function VW(V){V=a(V,a.EMPTY_OBJECT);let l=V.context;v.defined("options.context",l);let Z=l._gl,U=$V.maximumColorAttachments;if(this._gl=Z,this._framebuffer=Z.createFramebuffer(),this._colorTextures=[],this._colorRenderbuffers=[],this._activeColorAttachments=[],this._depthTexture=void 0,this._depthRenderbuffer=void 0,this._stencilRenderbuffer=void 0,this._depthStencilTexture=void 0,this._depthStencilRenderbuffer=void 0,this.destroyAttachments=a(V.destroyAttachments,!0),s(V.colorTextures)&&s(V.colorRenderbuffers))throw new I("Cannot have both color texture and color renderbuffer attachments.");if(s(V.depthTexture)&&s(V.depthRenderbuffer))throw new I("Cannot have both a depth texture and depth renderbuffer attachment.");if(s(V.depthStencilTexture)&&s(V.depthStencilRenderbuffer))throw new I("Cannot have both a depth-stencil texture and depth-stencil renderbuffer attachment.");let A=s(V.depthTexture)||s(V.depthRenderbuffer),t=s(V.depthStencilTexture)||s(V.depthStencilRenderbuffer);if(A&&t)throw new I("Cannot have both a depth and depth-stencil attachment.");if(s(V.stencilRenderbuffer)&&t)throw new I("Cannot have both a stencil and depth-stencil attachment.");if(A&&s(V.stencilRenderbuffer))throw new I("Cannot have both a depth and stencil attachment.");this._bind();let m,i,n,o,h;if(s(V.colorTextures)){let R=V.colorTextures;if(o=this._colorTextures.length=this._activeColorAttachments.length=R.length,o>U)throw new I("The number of color attachments exceeds the number supported.");for(n=0;n<o;++n){if(m=R[n],!cV.isColorFormat(m.pixelFormat))throw new I("The color-texture pixel-format must be a color format.");if(m.pixelDatatype===SV.FLOAT&&!l.colorBufferFloat)throw new I("The color texture pixel datatype is FLOAT and the WebGL implementation does not support the EXT_color_buffer_float or WEBGL_color_buffer_float extensions. See Context.colorBufferFloat.");if(m.pixelDatatype===SV.HALF_FLOAT&&!l.colorBufferHalfFloat)throw new I("The color texture pixel datatype is HALF_FLOAT and the WebGL implementation does not support the EXT_color_buffer_half_float extension. See Context.colorBufferHalfFloat.");h=this._gl.COLOR_ATTACHMENT0+n,Ke(this,h,m),this._activeColorAttachments[n]=h,this._colorTextures[n]=m}}if(s(V.colorRenderbuffers)){let R=V.colorRenderbuffers;if(o=this._colorRenderbuffers.length=this._activeColorAttachments.length=R.length,o>U)throw new I("The number of color attachments exceeds the number supported.");for(n=0;n<o;++n)i=R[n],h=this._gl.COLOR_ATTACHMENT0+n,Ht(this,h,i),this._activeColorAttachments[n]=h,this._colorRenderbuffers[n]=i}if(s(V.depthTexture)){if(m=V.depthTexture,m.pixelFormat!==cV.DEPTH_COMPONENT)throw new I("The depth-texture pixel-format must be DEPTH_COMPONENT.");Ke(this,this._gl.DEPTH_ATTACHMENT,m),this._depthTexture=m}if(s(V.depthRenderbuffer)&&(i=V.depthRenderbuffer,Ht(this,this._gl.DEPTH_ATTACHMENT,i),this._depthRenderbuffer=i),s(V.stencilRenderbuffer)&&(i=V.stencilRenderbuffer,Ht(this,this._gl.STENCIL_ATTACHMENT,i),this._stencilRenderbuffer=i),s(V.depthStencilTexture)){if(m=V.depthStencilTexture,m.pixelFormat!==cV.DEPTH_STENCIL)throw new I("The depth-stencil pixel-format must be DEPTH_STENCIL.");Ke(this,this._gl.DEPTH_STENCIL_ATTACHMENT,m),this._depthStencilTexture=m}s(V.depthStencilRenderbuffer)&&(i=V.depthStencilRenderbuffer,Ht(this,this._gl.DEPTH_STENCIL_ATTACHMENT,i),this._depthStencilRenderbuffer=i),this._unBind()}Object.defineProperties(VW.prototype,{status:{get:function(){this._bind();let V=this._gl.checkFramebufferStatus(this._gl.FRAMEBUFFER);return this._unBind(),V}},numberOfColorAttachments:{get:function(){return this._activeColorAttachments.length}},depthTexture:{get:function(){return this._depthTexture}},depthRenderbuffer:{get:function(){return this._depthRenderbuffer}},stencilRenderbuffer:{get:function(){return this._stencilRenderbuffer}},depthStencilTexture:{get:function(){return this._depthStencilTexture}},depthStencilRenderbuffer:{get:function(){return this._depthStencilRenderbuffer}},hasDepthAttachment:{get:function(){return!!(this.depthTexture||this.depthRenderbuffer||this.depthStencilTexture||this.depthStencilRenderbuffer)}}});VW.prototype._bind=function(){let V=this._gl;V.bindFramebuffer(V.FRAMEBUFFER,this._framebuffer)};VW.prototype._unBind=function(){let V=this._gl;V.bindFramebuffer(V.FRAMEBUFFER,null)};VW.prototype.bindDraw=function(){let V=this._gl;V.bindFramebuffer(V.DRAW_FRAMEBUFFER,this._framebuffer)};VW.prototype.bindRead=function(){let V=this._gl;V.bindFramebuffer(V.READ_FRAMEBUFFER,this._framebuffer)};VW.prototype._getActiveColorAttachments=function(){return this._activeColorAttachments};VW.prototype.getColorTexture=function(V){if(!s(V)||V<0||V>=this._colorTextures.length)throw new I("index is required, must be greater than or equal to zero and must be less than the number of color attachments.");return this._colorTextures[V]};VW.prototype.getColorRenderbuffer=function(V){if(!s(V)||V<0||V>=this._colorRenderbuffers.length)throw new I("index is required, must be greater than or equal to zero and must be less than the number of color attachments.");return this._colorRenderbuffers[V]};VW.prototype.isDestroyed=function(){return!1};VW.prototype.destroy=function(){if(this.destroyAttachments){let V=0,l=this._colorTextures,Z=l.length;for(;V<Z;++V){let A=l[V];s(A)&&A.destroy()}let U=this._colorRenderbuffers;for(Z=U.length,V=0;V<Z;++V){let A=U[V];s(A)&&A.destroy()}this._depthTexture=this._depthTexture&&this._depthTexture.destroy(),this._depthRenderbuffer=this._depthRenderbuffer&&this._depthRenderbuffer.destroy(),this._stencilRenderbuffer=this._stencilRenderbuffer&&this._stencilRenderbuffer.destroy(),this._depthStencilTexture=this._depthStencilTexture&&this._depthStencilTexture.destroy(),this._depthStencilRenderbuffer=this._depthStencilRenderbuffer&&this._depthStencilRenderbuffer.destroy()}return this._gl.deleteFramebuffer(this._framebuffer),fV(this)};var Ja=VW;var Lt={DONT_CARE:J.DONT_CARE,FASTEST:J.FASTEST,NICEST:J.NICEST,validate:function(V){return V===Lt.DONT_CARE||V===Lt.FASTEST||V===Lt.NICEST}},vU=Object.freeze(Lt);var Kt={NEAREST:J.NEAREST,LINEAR:J.LINEAR};Kt.validate=function(V){return V===Kt.NEAREST||V===Kt.LINEAR};var lW=Object.freeze(Kt);var jW={NEAREST:J.NEAREST,LINEAR:J.LINEAR,NEAREST_MIPMAP_NEAREST:J.NEAREST_MIPMAP_NEAREST,LINEAR_MIPMAP_NEAREST:J.LINEAR_MIPMAP_NEAREST,NEAREST_MIPMAP_LINEAR:J.NEAREST_MIPMAP_LINEAR,LINEAR_MIPMAP_LINEAR:J.LINEAR_MIPMAP_LINEAR};jW.validate=function(V){return V===jW.NEAREST||V===jW.LINEAR||V===jW.NEAREST_MIPMAP_NEAREST||V===jW.LINEAR_MIPMAP_NEAREST||V===jW.NEAREST_MIPMAP_LINEAR||V===jW.LINEAR_MIPMAP_LINEAR};var Ml=Object.freeze(jW);var Pt={CLAMP_TO_EDGE:J.CLAMP_TO_EDGE,REPEAT:J.REPEAT,MIRRORED_REPEAT:J.MIRRORED_REPEAT,validate:function(V){return V===Pt.CLAMP_TO_EDGE||V===Pt.REPEAT||V===Pt.MIRRORED_REPEAT}},FU=Object.freeze(Pt);function SA(V){V=a(V,a.EMPTY_OBJECT);let l=a(V.wrapS,FU.CLAMP_TO_EDGE),Z=a(V.wrapT,FU.CLAMP_TO_EDGE),U=a(V.minificationFilter,Ml.LINEAR),A=a(V.magnificationFilter,lW.LINEAR),t=s(V.maximumAnisotropy)?V.maximumAnisotropy:1;if(!FU.validate(l))throw new I("Invalid sampler.wrapS.");if(!FU.validate(Z))throw new I("Invalid sampler.wrapT.");if(!Ml.validate(U))throw new I("Invalid sampler.minificationFilter.");if(!lW.validate(A))throw new I("Invalid sampler.magnificationFilter.");v.typeOf.number.greaterThanOrEquals("maximumAnisotropy",t,1),this._wrapS=l,this._wrapT=Z,this._minificationFilter=U,this._magnificationFilter=A,this._maximumAnisotropy=t}Object.defineProperties(SA.prototype,{wrapS:{get:function(){return this._wrapS}},wrapT:{get:function(){return this._wrapT}},minificationFilter:{get:function(){return this._minificationFilter}},magnificationFilter:{get:function(){return this._magnificationFilter}},maximumAnisotropy:{get:function(){return this._maximumAnisotropy}}});SA.equals=function(V,l){return V===l||s(V)&&s(l)&&V._wrapS===l._wrapS&&V._wrapT===l._wrapT&&V._minificationFilter===l._minificationFilter&&V._magnificationFilter===l._magnificationFilter&&V._maximumAnisotropy===l._maximumAnisotropy};SA.NEAREST=Object.freeze(new SA({wrapS:FU.CLAMP_TO_EDGE,wrapT:FU.CLAMP_TO_EDGE,minificationFilter:Ml.NEAREST,magnificationFilter:lW.NEAREST}));var dW=SA;function ZW(V){V=a(V,a.EMPTY_OBJECT),v.defined("options.context",V.context);let l=V.context,Z=V.width,U=V.height,A=V.source;s(A)&&(s(Z)||(Z=a(A.videoWidth,A.width)),s(U)||(U=a(A.videoHeight,A.height)));let t=a(V.pixelFormat,cV.RGBA),m=a(V.pixelDatatype,SV.UNSIGNED_BYTE),i=cV.toInternalFormat(t,m,l),n=cV.isCompressedFormat(i);if(!s(Z)||!s(U))throw new I("options requires a source field to create an initialized texture or width and height fields to create a blank texture.");if(v.typeOf.number.greaterThan("width",Z,0),Z>$V.maximumTextureSize)throw new I(`Width must be less than or equal to the maximum texture size (${$V.maximumTextureSize}).  Check maximumTextureSize.`);if(v.typeOf.number.greaterThan("height",U,0),U>$V.maximumTextureSize)throw new I(`Height must be less than or equal to the maximum texture size (${$V.maximumTextureSize}).  Check maximumTextureSize.`);if(!cV.validate(t))throw new I("Invalid options.pixelFormat.");if(!n&&!SV.validate(m))throw new I("Invalid options.pixelDatatype.");if(t===cV.DEPTH_COMPONENT&&m!==SV.UNSIGNED_SHORT&&m!==SV.UNSIGNED_INT)throw new I("When options.pixelFormat is DEPTH_COMPONENT, options.pixelDatatype must be UNSIGNED_SHORT or UNSIGNED_INT.");if(t===cV.DEPTH_STENCIL&&m!==SV.UNSIGNED_INT_24_8)throw new I("When options.pixelFormat is DEPTH_STENCIL, options.pixelDatatype must be UNSIGNED_INT_24_8.");if(m===SV.FLOAT&&!l.floatingPointTexture)throw new I("When options.pixelDatatype is FLOAT, this WebGL implementation must support the OES_texture_float extension.  Check context.floatingPointTexture.");if(m===SV.HALF_FLOAT&&!l.halfFloatingPointTexture)throw new I("When options.pixelDatatype is HALF_FLOAT, this WebGL implementation must support the OES_texture_half_float extension. Check context.halfFloatingPointTexture.");if(cV.isDepthFormat(t)){if(s(A))throw new I("When options.pixelFormat is DEPTH_COMPONENT or DEPTH_STENCIL, source cannot be provided.");if(!l.depthTexture)throw new I("When options.pixelFormat is DEPTH_COMPONENT or DEPTH_STENCIL, this WebGL implementation must support WEBGL_depth_texture.  Check context.depthTexture.")}if(n){if(!s(A)||!s(A.arrayBufferView))throw new I("When options.pixelFormat is compressed, options.source.arrayBufferView must be defined.");if(cV.isDXTFormat(i)&&!l.s3tc)throw new I("When options.pixelFormat is S3TC compressed, this WebGL implementation must support the WEBGL_compressed_texture_s3tc extension. Check context.s3tc.");if(cV.isPVRTCFormat(i)&&!l.pvrtc)throw new I("When options.pixelFormat is PVRTC compressed, this WebGL implementation must support the WEBGL_compressed_texture_pvrtc extension. Check context.pvrtc.");if(cV.isASTCFormat(i)&&!l.astc)throw new I("When options.pixelFormat is ASTC compressed, this WebGL implementation must support the WEBGL_compressed_texture_astc extension. Check context.astc.");if(cV.isETC2Format(i)&&!l.etc)throw new I("When options.pixelFormat is ETC2 compressed, this WebGL implementation must support the WEBGL_compressed_texture_etc extension. Check context.etc.");if(cV.isETC1Format(i)&&!l.etc1)throw new I("When options.pixelFormat is ETC1 compressed, this WebGL implementation must support the WEBGL_compressed_texture_etc1 extension. Check context.etc1.");if(cV.isBC7Format(i)&&!l.bc7)throw new I("When options.pixelFormat is BC7 compressed, this WebGL implementation must support the EXT_texture_compression_bptc extension. Check context.bc7.");if(cV.compressedTextureSizeInBytes(i,Z,U)!==A.arrayBufferView.byteLength)throw new I("The byte length of the array buffer is invalid for the compressed texture with the given width and height.")}let o=V.preMultiplyAlpha||t===cV.RGB||t===cV.LUMINANCE,h=a(V.flipY,!0),R=a(V.skipColorSpaceConversion,!1),c=!0,Q=l._gl,T=Q.TEXTURE_2D,S=Q.createTexture();Q.activeTexture(Q.TEXTURE0),Q.bindTexture(T,S);let p=4;if(s(A)&&s(A.arrayBufferView)&&!n&&(p=cV.alignmentInBytes(t,m,Z)),Q.pixelStorei(Q.UNPACK_ALIGNMENT,p),R?Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q.NONE):Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q.BROWSER_DEFAULT_WEBGL),s(A))if(s(A.arrayBufferView)){Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,!1);let E=A.arrayBufferView,D,_,Y;if(n){if(Q.compressedTexImage2D(T,0,i,Z,U,0,E),s(A.mipLevels))for(_=Z,Y=U,D=0;D<A.mipLevels.length;++D)_=Math.floor(_/2)|0,_<1&&(_=1),Y=Math.floor(Y/2)|0,Y<1&&(Y=1),Q.compressedTexImage2D(T,D+1,i,_,Y,0,A.mipLevels[D])}else if(h&&(E=cV.flipY(E,t,m,Z,U)),Q.texImage2D(T,0,i,Z,U,0,t,SV.toWebGLConstant(m,l),E),s(A.mipLevels))for(_=Z,Y=U,D=0;D<A.mipLevels.length;++D)_=Math.floor(_/2)|0,_<1&&(_=1),Y=Math.floor(Y/2)|0,Y<1&&(Y=1),Q.texImage2D(T,D+1,i,_,Y,0,t,SV.toWebGLConstant(m,l),A.mipLevels[D])}else s(A.framebuffer)?(Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,!1),A.framebuffer!==l.defaultFramebuffer&&A.framebuffer._bind(),Q.copyTexImage2D(T,0,i,A.xOffset,A.yOffset,Z,U,0),A.framebuffer!==l.defaultFramebuffer&&A.framebuffer._unBind()):(Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,h),Q.texImage2D(T,0,i,t,SV.toWebGLConstant(m,l),A));else Q.texImage2D(T,0,i,Z,U,0,t,SV.toWebGLConstant(m,l),null),c=!1;Q.bindTexture(T,null);let b;n?b=cV.compressedTextureSizeInBytes(t,Z,U):b=cV.textureSizeInBytes(t,m,Z,U),this._id=jl(),this._context=l,this._textureFilterAnisotropic=l._textureFilterAnisotropic,this._textureTarget=T,this._texture=S,this._internalFormat=i,this._pixelFormat=t,this._pixelDatatype=m,this._width=Z,this._height=U,this._dimensions=new q(Z,U),this._hasMipmap=!1,this._sizeInBytes=b,this._preMultiplyAlpha=o,this._flipY=h,this._initialized=c,this._sampler=void 0,this.sampler=s(V.sampler)?V.sampler:new dW}ZW.create=function(V){return new ZW(V)};ZW.fromFramebuffer=function(V){V=a(V,a.EMPTY_OBJECT),v.defined("options.context",V.context);let l=V.context,Z=l._gl,U=a(V.pixelFormat,cV.RGB),A=a(V.framebufferXOffset,0),t=a(V.framebufferYOffset,0),m=a(V.width,Z.drawingBufferWidth),i=a(V.height,Z.drawingBufferHeight),n=V.framebuffer;if(!cV.validate(U))throw new I("Invalid pixelFormat.");if(cV.isDepthFormat(U)||cV.isCompressedFormat(U))throw new I("pixelFormat cannot be DEPTH_COMPONENT, DEPTH_STENCIL or a compressed format.");if(v.defined("options.context",V.context),v.typeOf.number.greaterThanOrEquals("framebufferXOffset",A,0),v.typeOf.number.greaterThanOrEquals("framebufferYOffset",t,0),A+m>Z.drawingBufferWidth)throw new I("framebufferXOffset + width must be less than or equal to drawingBufferWidth");if(t+i>Z.drawingBufferHeight)throw new I("framebufferYOffset + height must be less than or equal to drawingBufferHeight.");return new ZW({context:l,width:m,height:i,pixelFormat:U,source:{framebuffer:s(n)?n:l.defaultFramebuffer,xOffset:A,yOffset:t,width:m,height:i}})};Object.defineProperties(ZW.prototype,{id:{get:function(){return this._id}},sampler:{get:function(){return this._sampler},set:function(V){let l=V.minificationFilter,Z=V.magnificationFilter,U=this._context,A=this._pixelFormat,t=this._pixelDatatype,m=l===Ml.NEAREST_MIPMAP_NEAREST||l===Ml.NEAREST_MIPMAP_LINEAR||l===Ml.LINEAR_MIPMAP_NEAREST||l===Ml.LINEAR_MIPMAP_LINEAR;(t===SV.FLOAT&&!U.textureFloatLinear||t===SV.HALF_FLOAT&&!U.textureHalfFloatLinear)&&(l=m?Ml.NEAREST_MIPMAP_NEAREST:Ml.NEAREST,Z=lW.NEAREST),U.webgl2&&cV.isDepthFormat(A)&&(l=Ml.NEAREST,Z=lW.NEAREST);let i=U._gl,n=this._textureTarget;i.activeTexture(i.TEXTURE0),i.bindTexture(n,this._texture),i.texParameteri(n,i.TEXTURE_MIN_FILTER,l),i.texParameteri(n,i.TEXTURE_MAG_FILTER,Z),i.texParameteri(n,i.TEXTURE_WRAP_S,V.wrapS),i.texParameteri(n,i.TEXTURE_WRAP_T,V.wrapT),s(this._textureFilterAnisotropic)&&i.texParameteri(n,this._textureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,V.maximumAnisotropy),i.bindTexture(n,null),this._sampler=V}},pixelFormat:{get:function(){return this._pixelFormat}},pixelDatatype:{get:function(){return this._pixelDatatype}},dimensions:{get:function(){return this._dimensions}},preMultiplyAlpha:{get:function(){return this._preMultiplyAlpha}},flipY:{get:function(){return this._flipY}},width:{get:function(){return this._width}},height:{get:function(){return this._height}},sizeInBytes:{get:function(){return this._hasMipmap?Math.floor(this._sizeInBytes*4/3):this._sizeInBytes}},_target:{get:function(){return this._textureTarget}}});ZW.prototype.copyFrom=function(V){v.defined("options",V);let l=a(V.xOffset,0),Z=a(V.yOffset,0);if(v.defined("options.source",V.source),cV.isDepthFormat(this._pixelFormat))throw new I("Cannot call copyFrom when the texture pixel format is DEPTH_COMPONENT or DEPTH_STENCIL.");if(cV.isCompressedFormat(this._pixelFormat))throw new I("Cannot call copyFrom with a compressed texture pixel format.");v.typeOf.number.greaterThanOrEquals("xOffset",l,0),v.typeOf.number.greaterThanOrEquals("yOffset",Z,0),v.typeOf.number.lessThanOrEquals("xOffset + options.source.width",l+V.source.width,this._width),v.typeOf.number.lessThanOrEquals("yOffset + options.source.height",Z+V.source.height,this._height);let U=V.source,A=this._context,t=A._gl,m=this._textureTarget;t.activeTexture(t.TEXTURE0),t.bindTexture(m,this._texture);let i=U.width,n=U.height,o=U.arrayBufferView,h=this._width,R=this._height,c=this._internalFormat,Q=this._pixelFormat,T=this._pixelDatatype,S=this._preMultiplyAlpha,p=this._flipY,b=a(V.skipColorSpaceConversion,!1),E=4;s(o)&&(E=cV.alignmentInBytes(Q,T,i)),t.pixelStorei(t.UNPACK_ALIGNMENT,E),b?t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE):t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL);let D=!1;if(!this._initialized){if(l===0&&Z===0&&i===h&&n===R)s(o)?(t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),p&&(o=cV.flipY(o,Q,T,h,R)),t.texImage2D(m,0,c,h,R,0,Q,SV.toWebGLConstant(T,A),o)):(t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,p),t.texImage2D(m,0,c,Q,SV.toWebGLConstant(T,A),U)),D=!0;else{t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1);let _=cV.createTypedArray(Q,T,h,R);t.texImage2D(m,0,c,h,R,0,Q,SV.toWebGLConstant(T,A),_)}this._initialized=!0}D||(s(o)?(t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),p&&(o=cV.flipY(o,Q,T,i,n)),t.texSubImage2D(m,0,l,Z,i,n,Q,SV.toWebGLConstant(T,A),o)):(t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,p),t.texSubImage2D(m,0,l,Z,Q,SV.toWebGLConstant(T,A),U))),t.bindTexture(m,null)};ZW.prototype.copyFromFramebuffer=function(V,l,Z,U,A,t){if(V=a(V,0),l=a(l,0),Z=a(Z,0),U=a(U,0),A=a(A,this._width),t=a(t,this._height),cV.isDepthFormat(this._pixelFormat))throw new I("Cannot call copyFromFramebuffer when the texture pixel format is DEPTH_COMPONENT or DEPTH_STENCIL.");if(this._pixelDatatype===SV.FLOAT)throw new I("Cannot call copyFromFramebuffer when the texture pixel data type is FLOAT.");if(this._pixelDatatype===SV.HALF_FLOAT)throw new I("Cannot call copyFromFramebuffer when the texture pixel data type is HALF_FLOAT.");if(cV.isCompressedFormat(this._pixelFormat))throw new I("Cannot call copyFrom with a compressed texture pixel format.");v.typeOf.number.greaterThanOrEquals("xOffset",V,0),v.typeOf.number.greaterThanOrEquals("yOffset",l,0),v.typeOf.number.greaterThanOrEquals("framebufferXOffset",Z,0),v.typeOf.number.greaterThanOrEquals("framebufferYOffset",U,0),v.typeOf.number.lessThanOrEquals("xOffset + width",V+A,this._width),v.typeOf.number.lessThanOrEquals("yOffset + height",l+t,this._height);let m=this._context._gl,i=this._textureTarget;m.activeTexture(m.TEXTURE0),m.bindTexture(i,this._texture),m.copyTexSubImage2D(i,0,V,l,Z,U,A,t),m.bindTexture(i,null),this._initialized=!0};ZW.prototype.generateMipmap=function(V){if(V=a(V,vU.DONT_CARE),cV.isDepthFormat(this._pixelFormat))throw new I("Cannot call generateMipmap when the texture pixel format is DEPTH_COMPONENT or DEPTH_STENCIL.");if(cV.isCompressedFormat(this._pixelFormat))throw new I("Cannot call generateMipmap with a compressed pixel format.");if(!this._context.webgl2){if(this._width>1&&!NV.isPowerOfTwo(this._width))throw new I("width must be a power of two to call generateMipmap() in a WebGL1 context.");if(this._height>1&&!NV.isPowerOfTwo(this._height))throw new I("height must be a power of two to call generateMipmap() in a WebGL1 context.")}if(!vU.validate(V))throw new I("hint is invalid.");this._hasMipmap=!0;let l=this._context._gl,Z=this._textureTarget;l.hint(l.GENERATE_MIPMAP_HINT,V),l.activeTexture(l.TEXTURE0),l.bindTexture(Z,this._texture),l.generateMipmap(Z),l.bindTexture(Z,null)};ZW.prototype.isDestroyed=function(){return!1};ZW.prototype.destroy=function(){return this._context._gl.deleteTexture(this._texture),fV(this)};var WW=ZW;function XW(V,l,Z,U,A){this.bottomLeft=a(V,q.ZERO),this.topRight=a(l,q.ZERO),this.childNode1=Z,this.childNode2=U,this.imageIndex=A}var kB=new q(16,16);function qW(V){V=a(V,a.EMPTY_OBJECT);let l=a(V.borderWidthInPixels,1),Z=a(V.initialSize,kB);if(!s(V.context))throw new I("context is required.");if(l<0)throw new I("borderWidthInPixels must be greater than or equal to zero.");if(Z.x<1||Z.y<1)throw new I("initialSize must be greater than zero.");this._context=V.context,this._pixelFormat=a(V.pixelFormat,cV.RGBA),this._borderWidthInPixels=l,this._textureCoordinates=[],this._guid=jl(),this._idHash={},this._indexHash={},this._initialSize=Z,this._root=void 0}Object.defineProperties(qW.prototype,{borderWidthInPixels:{get:function(){return this._borderWidthInPixels}},textureCoordinates:{get:function(){return this._textureCoordinates}},texture:{get:function(){return s(this._texture)||(this._texture=new WW({context:this._context,width:this._initialSize.x,height:this._initialSize.y,pixelFormat:this._pixelFormat})),this._texture}},numberOfImages:{get:function(){return this._textureCoordinates.length}},guid:{get:function(){return this._guid}}});function HB(V,l){let Z=V._context,U=V.numberOfImages,A=2,t=V._borderWidthInPixels;if(U>0){let m=V._texture.width,i=V._texture.height,n=A*(m+l.width+t),o=A*(i+l.height+t),h=m/n,R=i/o,c=new XW(new q(m+t,t),new q(n,i)),Q=new XW(new q,new q(n,i),V._root,c),T=new XW(new q(t,i+t),new q(n,o)),S=new XW(new q,new q(n,o),Q,T);for(let E=0;E<V._textureCoordinates.length;E++){let D=V._textureCoordinates[E];s(D)&&(D.x*=h,D.y*=R,D.width*=h,D.height*=R)}let p=new WW({context:V._context,width:n,height:o,pixelFormat:V._pixelFormat}),b=new Ja({context:Z,colorTextures:[V._texture],destroyAttachments:!1});b._bind(),p.copyFromFramebuffer(0,0,0,0,n,o),b._unBind(),b.destroy(),V._texture=V._texture&&V._texture.destroy(),V._texture=p,V._root=S}else{let m=A*(l.width+2*t),i=A*(l.height+2*t);m<V._initialSize.x&&(m=V._initialSize.x),i<V._initialSize.y&&(i=V._initialSize.y),V._texture=V._texture&&V._texture.destroy(),V._texture=new WW({context:V._context,width:m,height:i,pixelFormat:V._pixelFormat}),V._root=new XW(new q(t,t),new q(m,i))}}function jt(V,l,Z){if(s(l)){if(!s(l.childNode1)&&!s(l.childNode2)){if(s(l.imageIndex))return;let U=l.topRight.x-l.bottomLeft.x,A=l.topRight.y-l.bottomLeft.y,t=U-Z.width,m=A-Z.height;if(t<0||m<0)return;if(t===0&&m===0)return l;if(t>m){l.childNode1=new XW(new q(l.bottomLeft.x,l.bottomLeft.y),new q(l.bottomLeft.x+Z.width,l.topRight.y));let i=l.bottomLeft.x+Z.width+V._borderWidthInPixels;i<l.topRight.x&&(l.childNode2=new XW(new q(i,l.bottomLeft.y),new q(l.topRight.x,l.topRight.y)))}else{l.childNode1=new XW(new q(l.bottomLeft.x,l.bottomLeft.y),new q(l.topRight.x,l.bottomLeft.y+Z.height));let i=l.bottomLeft.y+Z.height+V._borderWidthInPixels;i<l.topRight.y&&(l.childNode2=new XW(new q(l.bottomLeft.x,i),new q(l.topRight.x,l.topRight.y)))}return jt(V,l.childNode1,Z)}return jt(V,l.childNode1,Z)||jt(V,l.childNode2,Z)}}function xa(V,l,Z){let U=jt(V,V._root,l);if(s(U)){U.imageIndex=Z;let A=V._texture.width,t=V._texture.height,m=U.topRight.x-U.bottomLeft.x,i=U.topRight.y-U.bottomLeft.y,n=U.bottomLeft.x/A,o=U.bottomLeft.y/t,h=m/A,R=i/t;V._textureCoordinates[Z]=new qV(n,o,h,R),V._texture.copyFrom({source:l,xOffset:U.bottomLeft.x,yOffset:U.bottomLeft.y})}else HB(V,l),xa(V,l,Z);V._guid=jl()}function Da(V,l){if(!s(V)||V.isDestroyed())return-1;let Z=V.numberOfImages;return xa(V,l,Z),Z}qW.prototype.getImageIndex=function(V){if(!s(V))throw new I("id is required.");return this._indexHash[V]};qW.prototype.addImageSync=function(V,l){if(!s(V))throw new I("id is required.");if(!s(l))throw new I("image is required.");let Z=this._indexHash[V];return s(Z)||(Z=Da(this,l),this._idHash[V]=Promise.resolve(Z),this._indexHash[V]=Z),Z};qW.prototype.addImage=function(V,l){if(!s(V))throw new I("id is required.");if(!s(l))throw new I("image is required.");let Z=this._idHash[V];if(s(Z))return Z;if(typeof l=="function"){if(l=l(V),!s(l))throw new I("image is required.")}else(typeof l=="string"||l instanceof xl)&&(l=xl.createIfNeeded(l).fetchImage());let U=this;return Z=Promise.resolve(l).then(function(A){let t=Da(U,A);return U._indexHash[V]=t,t}),this._idHash[V]=Z,Z};qW.prototype.addSubRegion=function(V,l){if(!s(V))throw new I("id is required.");if(!s(l))throw new I("subRegion is required.");let Z=this._idHash[V];if(!s(Z))throw new Jl(`image with id "${V}" not found in the atlas.`);let U=this;return Promise.resolve(Z).then(function(A){if(A===-1)return-1;let t=U._texture.width,m=U._texture.height,i=U._textureCoordinates[A],n=i.x+l.x/t,o=i.y+l.y/m,h=l.width/t,R=l.height/m,c=U._textureCoordinates.push(new qV(n,o,h,R))-1;return U._indexHash[V]=c,U._guid=jl(),c})};qW.prototype.isDestroyed=function(){return!1};qW.prototype.destroy=function(){return this._texture=this._texture&&this._texture.destroy(),fV(this)};var CA=qW;var LB=nl.SHOW_INDEX,NA=nl.POSITION_INDEX,Ma=nl.PIXEL_OFFSET_INDEX,_a=nl.EYE_OFFSET_INDEX,KB=nl.HORIZONTAL_ORIGIN_INDEX,PB=nl.VERTICAL_ORIGIN_INDEX,jB=nl.SCALE_INDEX,gA=nl.IMAGE_INDEX_INDEX,Oa=nl.COLOR_INDEX,qB=nl.ROTATION_INDEX,$B=nl.ALIGNED_AXIS_INDEX,wa=nl.SCALE_BY_DISTANCE_INDEX,Ya=nl.TRANSLUCENCY_BY_DISTANCE_INDEX,ya=nl.PIXEL_OFFSET_SCALE_BY_DISTANCE_INDEX,va=nl.DISTANCE_DISPLAY_CONDITION,VF=nl.DISABLE_DEPTH_DISTANCE,lF=nl.TEXTURE_COORDINATE_BOUNDS,za=nl.SDF_INDEX,Zm=nl.NUMBER_OF_PROPERTIES,Vl,ZF={positionHighAndScale:0,positionLowAndRotation:1,compressedAttribute0:2,compressedAttribute1:3,compressedAttribute2:4,eyeOffset:5,scaleByDistance:6,pixelOffsetScaleByDistance:7,compressedAttribute3:8,textureCoordinateBoundsOrLabelTranslate:9,a_batchId:10,sdf:11},WF={direction:0,positionHighAndScale:1,positionLowAndRotation:2,compressedAttribute0:3,compressedAttribute1:4,compressedAttribute2:5,eyeOffset:6,scaleByDistance:7,pixelOffsetScaleByDistance:8,compressedAttribute3:9,textureCoordinateBoundsOrLabelTranslate:10,a_batchId:11,sdf:12};function OZ(V){V=a(V,a.EMPTY_OBJECT),this._scene=V.scene,this._batchTable=V.batchTable,this._textureAtlas=void 0,this._textureAtlasGUID=void 0,this._destroyTextureAtlas=!0,this._sp=void 0,this._spTranslucent=void 0,this._rsOpaque=void 0,this._rsTranslucent=void 0,this._vaf=void 0,this._billboards=[],this._billboardsToUpdate=[],this._billboardsToUpdateIndex=0,this._billboardsRemoved=!1,this._createVertexArray=!1,this._shaderRotation=!1,this._compiledShaderRotation=!1,this._shaderAlignedAxis=!1,this._compiledShaderAlignedAxis=!1,this._shaderScaleByDistance=!1,this._compiledShaderScaleByDistance=!1,this._shaderTranslucencyByDistance=!1,this._compiledShaderTranslucencyByDistance=!1,this._shaderPixelOffsetScaleByDistance=!1,this._compiledShaderPixelOffsetScaleByDistance=!1,this._shaderDistanceDisplayCondition=!1,this._compiledShaderDistanceDisplayCondition=!1,this._shaderDisableDepthDistance=!1,this._compiledShaderDisableDepthDistance=!1,this._shaderClampToGround=!1,this._compiledShaderClampToGround=!1,this._propertiesChanged=new Uint32Array(Zm),this._maxSize=0,this._maxEyeOffset=0,this._maxScale=1,this._maxPixelOffset=0,this._allHorizontalCenter=!0,this._allVerticalCenter=!0,this._allSizedInMeters=!0,this._baseVolume=new gV,this._baseVolumeWC=new gV,this._baseVolume2D=new gV,this._boundingVolume=new gV,this._boundingVolumeDirty=!1,this._colorCommands=[],this.show=a(V.show,!0),this.modelMatrix=nV.clone(a(V.modelMatrix,nV.IDENTITY)),this._modelMatrix=nV.clone(nV.IDENTITY),this.debugShowBoundingVolume=a(V.debugShowBoundingVolume,!1),this.debugShowTextureAtlas=a(V.debugShowTextureAtlas,!1),this.blendOption=a(V.blendOption,hl.OPAQUE_AND_TRANSLUCENT),this._blendOption=void 0,this._mode=IV.SCENE3D,this._buffersUsage=[XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW],this._highlightColor=z.clone(z.WHITE);let l=this;this._uniforms={u_atlas:function(){return l._textureAtlas.texture},u_highlightColor:function(){return l._highlightColor}};let Z=this._scene;s(Z)&&s(Z.terrainProviderChanged)&&(this._removeCallbackFunc=Z.terrainProviderChanged.addEventListener(function(){let U=this._billboards,A=U.length;for(let t=0;t<A;++t)s(U[t])&&U[t]._updateClamping()},this))}Object.defineProperties(OZ.prototype,{length:{get:function(){return Wm(this),this._billboards.length}},textureAtlas:{get:function(){return this._textureAtlas},set:function(V){this._textureAtlas!==V&&(this._textureAtlas=this._destroyTextureAtlas&&this._textureAtlas&&this._textureAtlas.destroy(),this._textureAtlas=V,this._createVertexArray=!0)}},destroyTextureAtlas:{get:function(){return this._destroyTextureAtlas},set:function(V){this._destroyTextureAtlas=V}}});function ka(V){let l=V.length;for(let Z=0;Z<l;++Z)V[Z]&&V[Z]._destroy()}OZ.prototype.add=function(V){let l=new nl(V,this);return l._index=this._billboards.length,this._billboards.push(l),this._createVertexArray=!0,l};OZ.prototype.remove=function(V){return this.contains(V)?(this._billboards[V._index]=void 0,this._billboardsRemoved=!0,this._createVertexArray=!0,V._destroy(),!0):!1};OZ.prototype.removeAll=function(){ka(this._billboards),this._billboards=[],this._billboardsToUpdate=[],this._billboardsToUpdateIndex=0,this._billboardsRemoved=!1,this._createVertexArray=!0};function Wm(V){if(V._billboardsRemoved){V._billboardsRemoved=!1;let l=[],Z=V._billboards,U=Z.length;for(let A=0,t=0;A<U;++A){let m=Z[A];s(m)&&(m._index=t++,l.push(m))}V._billboards=l}}OZ.prototype._updateBillboard=function(V,l){V._dirty||(this._billboardsToUpdate[this._billboardsToUpdateIndex++]=V),++this._propertiesChanged[l]};OZ.prototype.contains=function(V){return s(V)&&V._billboardCollection===this};OZ.prototype.get=function(V){return v.typeOf.number("index",V),Wm(this),this._billboards[V]};var Pe;function UF(V){let Z=V.cache.billboardCollection_indexBufferBatched;if(s(Z))return Z;let U=16384*6-6,A=new Uint16Array(U);for(let t=0,m=0;t<U;t+=6,m+=4)A[t]=m,A[t+1]=m+1,A[t+2]=m+2,A[t+3]=m+0,A[t+4]=m+2,A[t+5]=m+3;return Z=$Z.createIndexBuffer({context:V,typedArray:A,usage:XV.STATIC_DRAW,indexDatatype:rW.UNSIGNED_SHORT}),Z.vertexArrayDestroyable=!1,V.cache.billboardCollection_indexBufferBatched=Z,Z}function AF(V){let l=V.cache.billboardCollection_indexBufferInstanced;return s(l)||(l=$Z.createIndexBuffer({context:V,typedArray:new Uint16Array([0,1,2,0,2,3]),usage:XV.STATIC_DRAW,indexDatatype:rW.UNSIGNED_SHORT}),l.vertexArrayDestroyable=!1,V.cache.billboardCollection_indexBufferInstanced=l),l}function tF(V){let l=V.cache.billboardCollection_vertexBufferInstanced;return s(l)||(l=$Z.createVertexBuffer({context:V,typedArray:new Float32Array([0,0,1,0,1,1,0,1]),usage:XV.STATIC_DRAW}),l.vertexArrayDestroyable=!1,V.cache.billboardCollection_vertexBufferInstanced=l),l}OZ.prototype.computeNewBuffersUsage=function(){let V=this._buffersUsage,l=!1,Z=this._propertiesChanged;for(let U=0;U<Zm;++U){let A=Z[U]===0?XV.STATIC_DRAW:XV.STREAM_DRAW;l=l||V[U]!==A,V[U]=A}return l};function eF(V,l,Z,U,A,t){let m=[{index:Vl.positionHighAndScale,componentsPerAttribute:4,componentDatatype:iV.FLOAT,usage:Z[NA]},{index:Vl.positionLowAndRotation,componentsPerAttribute:4,componentDatatype:iV.FLOAT,usage:Z[NA]},{index:Vl.compressedAttribute0,componentsPerAttribute:4,componentDatatype:iV.FLOAT,usage:Z[Ma]},{index:Vl.compressedAttribute1,componentsPerAttribute:4,componentDatatype:iV.FLOAT,usage:Z[Ya]},{index:Vl.compressedAttribute2,componentsPerAttribute:4,componentDatatype:iV.FLOAT,usage:Z[Oa]},{index:Vl.eyeOffset,componentsPerAttribute:4,componentDatatype:iV.FLOAT,usage:Z[_a]},{index:Vl.scaleByDistance,componentsPerAttribute:4,componentDatatype:iV.FLOAT,usage:Z[wa]},{index:Vl.pixelOffsetScaleByDistance,componentsPerAttribute:4,componentDatatype:iV.FLOAT,usage:Z[ya]},{index:Vl.compressedAttribute3,componentsPerAttribute:4,componentDatatype:iV.FLOAT,usage:Z[va]},{index:Vl.textureCoordinateBoundsOrLabelTranslate,componentsPerAttribute:4,componentDatatype:iV.FLOAT,usage:Z[lF]}];U&&m.push({index:Vl.direction,componentsPerAttribute:2,componentDatatype:iV.FLOAT,vertexBuffer:tF(V)}),s(A)&&m.push({index:Vl.a_batchId,componentsPerAttribute:1,componentDatatype:iV.FLOAT,bufferUsage:XV.STATIC_DRAW}),t&&m.push({index:Vl.sdf,componentsPerAttribute:2,componentDatatype:iV.FLOAT,usage:Z[za]});let i=U?l:4*l;return new kt(V,m,i,U)}var je=new Pl;function Ha(V,l,Z,U,A){let t,m=U[Vl.positionHighAndScale],i=U[Vl.positionLowAndRotation],n=A._getActualPosition();V._mode===IV.SCENE3D&&(gV.expand(V._baseVolume,n,V._baseVolume),V._boundingVolumeDirty=!0),Pl.fromCartesian(n,je);let o=A.scale,h=A.rotation;h!==0&&(V._shaderRotation=!0),V._maxScale=Math.max(V._maxScale,o);let R=je.high,c=je.low;V._instanced?(t=A._index,m(t,R.x,R.y,R.z,o),i(t,c.x,c.y,c.z,h)):(t=A._index*4,m(t+0,R.x,R.y,R.z,o),m(t+1,R.x,R.y,R.z,o),m(t+2,R.x,R.y,R.z,o),m(t+3,R.x,R.y,R.z,o),i(t+0,c.x,c.y,c.z,h),i(t+1,c.x,c.y,c.z,h),i(t+2,c.x,c.y,c.z,h),i(t+3,c.x,c.y,c.z,h))}var _Z=new q,MZ=32768,zU=65536,qe=4096,TW=256,mF=128,iF=32,nF=8,La=4,GF=1/256,Ka=0,Pa=2,ja=3,qa=1;function $a(V,l,Z,U,A){let t,m=U[Vl.compressedAttribute0],i=A.pixelOffset,n=i.x,o=i.y,h=A._translate,R=h.x,c=h.y;V._maxPixelOffset=Math.max(V._maxPixelOffset,Math.abs(n+R),Math.abs(-o+c));let Q=A.horizontalOrigin,T=A._verticalOrigin,S=A.show&&A.clusterShow;A.color.alpha===0&&(S=!1),T===Al.BASELINE&&(T=Al.BOTTOM),V._allHorizontalCenter=V._allHorizontalCenter&&Q===eZ.CENTER,V._allVerticalCenter=V._allVerticalCenter&&T===Al.CENTER;let p=0,b=0,E=0,D=0,_=A._imageIndex;if(_!==-1){let UV=Z[_];if(!s(UV))throw new I(`Invalid billboard image index: ${_}`);p=UV.x,b=UV.y,E=UV.width,D=UV.height}let Y=p+E,K=b+D,ZV=Math.floor(NV.clamp(n,-MZ,MZ)+MZ)*mF;ZV+=(Q+1)*iF,ZV+=(T+1)*nF,ZV+=(S?1:0)*La;let j=Math.floor(NV.clamp(o,-MZ,MZ)+MZ)*TW,mV=Math.floor(NV.clamp(R,-MZ,MZ)+MZ)*TW,BV=(NV.clamp(c,-MZ,MZ)+MZ)*GF,W=Math.floor(BV),VV=Math.floor((BV-W)*TW);j+=W,mV+=VV,_Z.x=p,_Z.y=b;let GV=hU.compressTextureCoordinates(_Z);_Z.x=Y;let rV=hU.compressTextureCoordinates(_Z);_Z.y=K;let FV=hU.compressTextureCoordinates(_Z);_Z.x=p;let k=hU.compressTextureCoordinates(_Z);V._instanced?(t=A._index,m(t,ZV,j,mV,GV)):(t=A._index*4,m(t+0,ZV+Ka,j,mV,GV),m(t+1,ZV+Pa,j,mV,rV),m(t+2,ZV+ja,j,mV,FV),m(t+3,ZV+qa,j,mV,k))}function Vr(V,l,Z,U,A){let t,m=U[Vl.compressedAttribute1],i=A.alignedAxis;w.equals(i,w.ZERO)||(V._shaderAlignedAxis=!0);let n=0,o=1,h=1,R=1,c=A.translucencyByDistance;s(c)&&(n=c.near,o=c.nearValue,h=c.far,R=c.farValue,(o!==1||R!==1)&&(V._shaderTranslucencyByDistance=!0));let Q=0,T=A._imageIndex;if(T!==-1){let D=Z[T];if(!s(D))throw new I(`Invalid billboard image index: ${T}`);Q=D.width}let S=V._textureAtlas.texture.width,p=Math.round(a(A.width,S*Q));V._maxSize=Math.max(V._maxSize,p);let b=NV.clamp(p,0,zU),E=0;Math.abs(w.magnitudeSquared(i)-1)<NV.EPSILON6&&(E=hU.octEncodeFloat(i)),o=NV.clamp(o,0,1),o=o===1?255:o*255|0,b=b*TW+o,R=NV.clamp(R,0,1),R=R===1?255:R*255|0,E=E*TW+R,V._instanced?(t=A._index,m(t,b,E,n,h)):(t=A._index*4,m(t+0,b,E,n,h),m(t+1,b,E,n,h),m(t+2,b,E,n,h),m(t+3,b,E,n,h))}function Vm(V,l,Z,U,A){let t,m=U[Vl.compressedAttribute2],i=A.color,n=s(V._batchTable)?z.WHITE:A.getPickId(l.context).color,o=A.sizeInMeters?1:0,h=Math.abs(w.magnitudeSquared(A.alignedAxis)-1)<NV.EPSILON6?1:0;V._allSizedInMeters=V._allSizedInMeters&&o===1;let R=0,c=A._imageIndex;if(c!==-1){let ZV=Z[c];if(!s(ZV))throw new I(`Invalid billboard image index: ${c}`);R=ZV.height}let Q=V._textureAtlas.texture.dimensions,T=Math.round(a(A.height,Q.y*R));V._maxSize=Math.max(V._maxSize,T);let S=a(A._labelHorizontalOrigin,-2);S+=2;let p=T*La+S,b=z.floatToByte(i.red),E=z.floatToByte(i.green),D=z.floatToByte(i.blue),_=b*zU+E*TW+D;b=z.floatToByte(n.red),E=z.floatToByte(n.green),D=z.floatToByte(n.blue);let Y=b*zU+E*TW+D,K=z.floatToByte(i.alpha)*zU+z.floatToByte(n.alpha)*TW;K+=o*2+h,V._instanced?(t=A._index,m(t,_,Y,K,p)):(t=A._index*4,m(t+0,_,Y,K,p),m(t+1,_,Y,K,p),m(t+2,_,Y,K,p),m(t+3,_,Y,K,p))}function lm(V,l,Z,U,A){let t,m=U[Vl.eyeOffset],i=A.eyeOffset,n=i.z;if(A._heightReference!==ZZ.NONE&&(n*=1.005),V._maxEyeOffset=Math.max(V._maxEyeOffset,Math.abs(i.x),Math.abs(i.y),Math.abs(n)),V._instanced){let o=0,h=0,R=A._imageIndex;if(R!==-1){let Q=Z[R];if(!s(Q))throw new I(`Invalid billboard image index: ${R}`);o=Q.width,h=Q.height}_Z.x=o,_Z.y=h;let c=hU.compressTextureCoordinates(_Z);t=A._index,m(t,i.x,i.y,n,c)}else t=A._index*4,m(t+0,i.x,i.y,n,0),m(t+1,i.x,i.y,n,0),m(t+2,i.x,i.y,n,0),m(t+3,i.x,i.y,n,0)}function lr(V,l,Z,U,A){let t,m=U[Vl.scaleByDistance],i=0,n=1,o=1,h=1,R=A.scaleByDistance;s(R)&&(i=R.near,n=R.nearValue,o=R.far,h=R.farValue,(n!==1||h!==1)&&(V._shaderScaleByDistance=!0)),V._instanced?(t=A._index,m(t,i,n,o,h)):(t=A._index*4,m(t+0,i,n,o,h),m(t+1,i,n,o,h),m(t+2,i,n,o,h),m(t+3,i,n,o,h))}function Zr(V,l,Z,U,A){let t,m=U[Vl.pixelOffsetScaleByDistance],i=0,n=1,o=1,h=1,R=A.pixelOffsetScaleByDistance;s(R)&&(i=R.near,n=R.nearValue,o=R.far,h=R.farValue,(n!==1||h!==1)&&(V._shaderPixelOffsetScaleByDistance=!0)),V._instanced?(t=A._index,m(t,i,n,o,h)):(t=A._index*4,m(t+0,i,n,o,h),m(t+1,i,n,o,h),m(t+2,i,n,o,h),m(t+3,i,n,o,h))}function Wr(V,l,Z,U,A){let t,m=U[Vl.compressedAttribute3],i=0,n=Number.MAX_VALUE,o=A.distanceDisplayCondition;s(o)&&(i=o.near,n=o.far,i*=i,n*=n,V._shaderDistanceDisplayCondition=!0);let h=A.disableDepthTestDistance,R=A.heightReference===ZZ.CLAMP_TO_GROUND&&l.context.depthTexture;s(h)||(h=R?5e3:0),h*=h,(R||h>0)&&(V._shaderDisableDepthDistance=!0,h===Number.POSITIVE_INFINITY&&(h=-1));let c,Q;if(s(A._labelDimensions))Q=A._labelDimensions.x,c=A._labelDimensions.y;else{let b=0,E=0,D=A._imageIndex;if(D!==-1){let Y=Z[D];if(!s(Y))throw new I(`Invalid billboard image index: ${D}`);b=Y.height,E=Y.width}c=Math.round(a(A.height,V._textureAtlas.texture.dimensions.y*b));let _=V._textureAtlas.texture.width;Q=Math.round(a(A.width,_*E))}let T=Math.floor(NV.clamp(Q,0,qe)),S=Math.floor(NV.clamp(c,0,qe)),p=T*qe+S;V._instanced?(t=A._index,m(t,i,n,h,p)):(t=A._index*4,m(t+0,i,n,h,p),m(t+1,i,n,h,p),m(t+2,i,n,h,p),m(t+3,i,n,h,p))}function Ur(V,l,Z,U,A){if(A.heightReference===ZZ.CLAMP_TO_GROUND){let T=V._scene,S=l.context,p=l.globeTranslucencyState.translucent,b=s(T.globe)&&T.globe.depthTestAgainstTerrain;V._shaderClampToGround=S.depthTexture&&!p&&b}let t,m=U[Vl.textureCoordinateBoundsOrLabelTranslate];if($V.maximumVertexTextureImageUnits>0){let T=0,S=0;s(A._labelTranslate)&&(T=A._labelTranslate.x,S=A._labelTranslate.y),V._instanced?(t=A._index,m(t,T,S,0,0)):(t=A._index*4,m(t+0,T,S,0,0),m(t+1,T,S,0,0),m(t+2,T,S,0,0),m(t+3,T,S,0,0));return}let i=0,n=0,o=0,h=0,R=A._imageIndex;if(R!==-1){let T=Z[R];if(!s(T))throw new I(`Invalid billboard image index: ${R}`);i=T.x,n=T.y,o=T.width,h=T.height}let c=i+o,Q=n+h;V._instanced?(t=A._index,m(t,i,n,c,Q)):(t=A._index*4,m(t+0,i,n,c,Q),m(t+1,i,n,c,Q),m(t+2,i,n,c,Q),m(t+3,i,n,c,Q))}function sF(V,l,Z,U,A){if(!s(V._batchTable))return;let t=U[Vl.a_batchId],m=A._batchIndex,i;V._instanced?(i=A._index,t(i,m)):(i=A._index*4,t(i+0,m),t(i+1,m),t(i+2,m),t(i+3,m))}function Ar(V,l,Z,U,A){if(!V._sdf)return;let t,m=U[Vl.sdf],i=A.outlineColor,n=A.outlineWidth,o=z.floatToByte(i.red),h=z.floatToByte(i.green),R=z.floatToByte(i.blue),c=o*zU+h*TW+R,Q=n/aZ.RADIUS,T=z.floatToByte(i.alpha)*zU+z.floatToByte(Q)*TW;V._instanced?(t=A._index,m(t,c,T)):(t=A._index*4,m(t+0,c+Ka,T),m(t+1,c+Pa,T),m(t+2,c+ja,T),m(t+3,c+qa,T))}function aF(V,l,Z,U,A){Ha(V,l,Z,U,A),$a(V,l,Z,U,A),Vr(V,l,Z,U,A),Vm(V,l,Z,U,A),lm(V,l,Z,U,A),lr(V,l,Z,U,A),Zr(V,l,Z,U,A),Wr(V,l,Z,U,A),Ur(V,l,Z,U,A),sF(V,l,Z,U,A),Ar(V,l,Z,U,A)}function $e(V,l,Z,U,A,t){let m;U.mode===IV.SCENE3D?(m=V._baseVolume,V._boundingVolumeDirty=!0):m=V._baseVolume2D;let i=[];for(let n=0;n<Z;++n){let o=l[n],h=o.position,R=nl._computeActualPosition(o,h,U,A);s(R)&&(o._setActualPosition(R),t?i.push(R):gV.expand(m,R,m))}t&&gV.fromPoints(i,m)}function rF(V,l){let Z=l.mode,U=V._billboards,A=V._billboardsToUpdate,t=V._modelMatrix;V._createVertexArray||V._mode!==Z||Z!==IV.SCENE3D&&!nV.equals(t,V.modelMatrix)?(V._mode=Z,nV.clone(V.modelMatrix,t),V._createVertexArray=!0,(Z===IV.SCENE3D||Z===IV.SCENE2D||Z===IV.COLUMBUS_VIEW)&&$e(V,U,U.length,l,t,!0)):Z===IV.MORPHING?$e(V,U,U.length,l,t,!0):(Z===IV.SCENE2D||Z===IV.COLUMBUS_VIEW)&&$e(V,A,V._billboardsToUpdateIndex,l,t,!1)}function oF(V,l,Z){let U=1;(!V._allSizedInMeters||V._maxPixelOffset!==0)&&(U=l.camera.getPixelSize(Z,l.context.drawingBufferWidth,l.context.drawingBufferHeight));let A=U*V._maxScale*V._maxSize*2;V._allHorizontalCenter&&V._allVerticalCenter&&(A*=.5);let t=U*V._maxPixelOffset+V._maxEyeOffset;Z.radius+=A+t}function hF(V,l){let Z=`uniform sampler2D billboard_texture; 
in vec2 v_textureCoordinates; 
void main() 
{ 
    out_FragColor = texture(billboard_texture, v_textureCoordinates); 
} 
`,U=l.createViewportQuadCommand(Z,{uniformMap:{billboard_texture:function(){return V._textureAtlas.texture}}});return U.pass=Nl.OVERLAY,U}var RF=[];OZ.prototype.update=function(V){if(Wm(this),!this.show)return;let l=this._billboards,Z=l.length,U=V.context;this._instanced=U.instancedArrays,Vl=this._instanced?WF:ZF,Pe=this._instanced?AF:UF;let A=this._textureAtlas;if(!s(A)){A=this._textureAtlas=new CA({context:U});for(let j=0;j<Z;++j)l[j]._loadImage()}let t=A.textureCoordinates;if(t.length===0)return;rF(this,V),l=this._billboards,Z=l.length;let m=this._billboardsToUpdate,i=this._billboardsToUpdateIndex,n=this._propertiesChanged,o=A.guid,h=this._createVertexArray||this._textureAtlasGUID!==o;this._textureAtlasGUID=o;let R,c=V.passes,Q=c.pick;if(h||!Q&&this.computeNewBuffersUsage()){this._createVertexArray=!1;for(let j=0;j<Zm;++j)n[j]=0;if(this._vaf=this._vaf&&this._vaf.destroy(),Z>0){this._vaf=eF(U,Z,this._buffersUsage,this._instanced,this._batchTable,this._sdf),R=this._vaf.writers;for(let j=0;j<Z;++j){let mV=this._billboards[j];mV._dirty=!1,aF(this,V,t,R,mV)}this._vaf.commit(Pe(U))}this._billboardsToUpdateIndex=0}else if(i>0){let j=RF;j.length=0,(n[NA]||n[qB]||n[jB])&&j.push(Ha),(n[gA]||n[Ma]||n[KB]||n[PB]||n[LB])&&(j.push($a),this._instanced&&j.push(lm)),(n[gA]||n[$B]||n[Ya])&&(j.push(Vr),j.push(Vm)),(n[gA]||n[Oa])&&j.push(Vm),n[_a]&&j.push(lm),n[wa]&&j.push(lr),n[ya]&&j.push(Zr),(n[va]||n[VF]||n[gA]||n[NA])&&j.push(Wr),(n[gA]||n[NA])&&j.push(Ur),n[za]&&j.push(Ar);let mV=j.length;if(R=this._vaf.writers,i/Z>.1){for(let BV=0;BV<i;++BV){let W=m[BV];W._dirty=!1;for(let VV=0;VV<mV;++VV)j[VV](this,V,t,R,W)}this._vaf.commit(Pe(U))}else{for(let BV=0;BV<i;++BV){let W=m[BV];W._dirty=!1;for(let VV=0;VV<mV;++VV)j[VV](this,V,t,R,W);this._instanced?this._vaf.subCommit(W._index,1):this._vaf.subCommit(W._index*4,4)}this._vaf.endSubCommits()}this._billboardsToUpdateIndex=0}if(i>Z*1.5&&(m.length=Z),!s(this._vaf)||!s(this._vaf.va))return;this._boundingVolumeDirty&&(this._boundingVolumeDirty=!1,gV.transform(this._baseVolume,this.modelMatrix,this._baseVolumeWC));let T,S=nV.IDENTITY;V.mode===IV.SCENE3D?(S=this.modelMatrix,T=gV.clone(this._baseVolumeWC,this._boundingVolume)):T=gV.clone(this._baseVolume2D,this._boundingVolume),oF(this,V,T);let p=this._blendOption!==this.blendOption;if(this._blendOption=this.blendOption,p){this._blendOption===hl.OPAQUE||this._blendOption===hl.OPAQUE_AND_TRANSLUCENT?this._rsOpaque=sl.fromCache({depthTest:{enabled:!0,func:J.LESS},depthMask:!0}):this._rsOpaque=void 0;let j=this._blendOption===hl.TRANSLUCENT;this._blendOption===hl.TRANSLUCENT||this._blendOption===hl.OPAQUE_AND_TRANSLUCENT?this._rsTranslucent=sl.fromCache({depthTest:{enabled:!0,func:j?J.LEQUAL:J.LESS},depthMask:j,blending:DZ.ALPHA_BLEND}):this._rsTranslucent=void 0}this._shaderDisableDepthDistance=this._shaderDisableDepthDistance||V.minimumDisableDepthTestDistance!==0;let b,E,D,_,Y,K=$V.maximumVertexTextureImageUnits>0;if(p||this._shaderRotation!==this._compiledShaderRotation||this._shaderAlignedAxis!==this._compiledShaderAlignedAxis||this._shaderScaleByDistance!==this._compiledShaderScaleByDistance||this._shaderTranslucencyByDistance!==this._compiledShaderTranslucencyByDistance||this._shaderPixelOffsetScaleByDistance!==this._compiledShaderPixelOffsetScaleByDistance||this._shaderDistanceDisplayCondition!==this._compiledShaderDistanceDisplayCondition||this._shaderDisableDepthDistance!==this._compiledShaderDisableDepthDistance||this._shaderClampToGround!==this._compiledShaderClampToGround||this._sdf!==this._compiledSDF){b=ua,E=ba,Y=[],s(this._batchTable)&&(Y.push("VECTOR_TILE"),b=this._batchTable.getVertexShaderCallback(!1,"a_batchId",void 0)(b),E=this._batchTable.getFragmentShaderCallback(!1,void 0)(E)),D=new kV({defines:Y,sources:[b]}),this._instanced&&D.defines.push("INSTANCED"),this._shaderRotation&&D.defines.push("ROTATION"),this._shaderAlignedAxis&&D.defines.push("ALIGNED_AXIS"),this._shaderScaleByDistance&&D.defines.push("EYE_DISTANCE_SCALING"),this._shaderTranslucencyByDistance&&D.defines.push("EYE_DISTANCE_TRANSLUCENCY"),this._shaderPixelOffsetScaleByDistance&&D.defines.push("EYE_DISTANCE_PIXEL_OFFSET"),this._shaderDistanceDisplayCondition&&D.defines.push("DISTANCE_DISPLAY_CONDITION"),this._shaderDisableDepthDistance&&D.defines.push("DISABLE_DEPTH_DISTANCE"),this._shaderClampToGround&&(K?D.defines.push("VERTEX_DEPTH_CHECK"):D.defines.push("FRAGMENT_DEPTH_CHECK"));let j=1-aZ.CUTOFF;this._sdf&&D.defines.push("SDF");let mV=s(this._batchTable)?"VECTOR_TILE":"";this._blendOption===hl.OPAQUE_AND_TRANSLUCENT&&(_=new kV({defines:["OPAQUE",mV],sources:[E]}),this._shaderClampToGround&&(K?_.defines.push("VERTEX_DEPTH_CHECK"):_.defines.push("FRAGMENT_DEPTH_CHECK")),this._sdf&&(_.defines.push("SDF"),_.defines.push(`SDF_EDGE ${j}`)),this._sp=Dl.replaceCache({context:U,shaderProgram:this._sp,vertexShaderSource:D,fragmentShaderSource:_,attributeLocations:Vl}),_=new kV({defines:["TRANSLUCENT",mV],sources:[E]}),this._shaderClampToGround&&(K?_.defines.push("VERTEX_DEPTH_CHECK"):_.defines.push("FRAGMENT_DEPTH_CHECK")),this._sdf&&(_.defines.push("SDF"),_.defines.push(`SDF_EDGE ${j}`)),this._spTranslucent=Dl.replaceCache({context:U,shaderProgram:this._spTranslucent,vertexShaderSource:D,fragmentShaderSource:_,attributeLocations:Vl})),this._blendOption===hl.OPAQUE&&(_=new kV({defines:[mV],sources:[E]}),this._shaderClampToGround&&(K?_.defines.push("VERTEX_DEPTH_CHECK"):_.defines.push("FRAGMENT_DEPTH_CHECK")),this._sdf&&(_.defines.push("SDF"),_.defines.push(`SDF_EDGE ${j}`)),this._sp=Dl.replaceCache({context:U,shaderProgram:this._sp,vertexShaderSource:D,fragmentShaderSource:_,attributeLocations:Vl})),this._blendOption===hl.TRANSLUCENT&&(_=new kV({defines:[mV],sources:[E]}),this._shaderClampToGround&&(K?_.defines.push("VERTEX_DEPTH_CHECK"):_.defines.push("FRAGMENT_DEPTH_CHECK")),this._sdf&&(_.defines.push("SDF"),_.defines.push(`SDF_EDGE ${j}`)),this._spTranslucent=Dl.replaceCache({context:U,shaderProgram:this._spTranslucent,vertexShaderSource:D,fragmentShaderSource:_,attributeLocations:Vl})),this._compiledShaderRotation=this._shaderRotation,this._compiledShaderAlignedAxis=this._shaderAlignedAxis,this._compiledShaderScaleByDistance=this._shaderScaleByDistance,this._compiledShaderTranslucencyByDistance=this._shaderTranslucencyByDistance,this._compiledShaderPixelOffsetScaleByDistance=this._shaderPixelOffsetScaleByDistance,this._compiledShaderDistanceDisplayCondition=this._shaderDistanceDisplayCondition,this._compiledShaderDisableDepthDistance=this._shaderDisableDepthDistance,this._compiledShaderClampToGround=this._shaderClampToGround,this._compiledSDF=this._sdf}let ZV=V.commandList;if(c.render||c.pick){let j=this._colorCommands,mV=this._blendOption===hl.OPAQUE,BV=this._blendOption===hl.OPAQUE_AND_TRANSLUCENT,W=this._vaf.va,VV=W.length,GV=this._uniforms,rV;s(this._batchTable)?(GV=this._batchTable.getUniformMapCallback()(GV),rV=this._batchTable.getPickId()):rV="v_pickColor",j.length=VV;let FV=BV?VV*2:VV;for(let k=0;k<FV;++k){let UV=j[k];s(UV)||(UV=j[k]=new tl);let HV=mV||BV&&k%2===0;UV.pass=HV||!BV?Nl.OPAQUE:Nl.TRANSLUCENT,UV.owner=this;let yV=BV?Math.floor(k/2):k;UV.boundingVolume=T,UV.modelMatrix=S,UV.count=W[yV].indicesCount,UV.shaderProgram=HV?this._sp:this._spTranslucent,UV.uniformMap=GV,UV.vertexArray=W[yV].va,UV.renderState=HV?this._rsOpaque:this._rsTranslucent,UV.debugShowBoundingVolume=this.debugShowBoundingVolume,UV.pickId=rV,this._instanced&&(UV.count=6,UV.instanceCount=Z),ZV.push(UV)}this.debugShowTextureAtlas&&(s(this.debugCommand)||(this.debugCommand=hF(this,V.context)),ZV.push(this.debugCommand))}};OZ.prototype.isDestroyed=function(){return!1};OZ.prototype.destroy=function(){return s(this._removeCallbackFunc)&&(this._removeCallbackFunc(),this._removeCallbackFunc=void 0),this._textureAtlas=this._destroyTextureAtlas&&this._textureAtlas&&this._textureAtlas.destroy(),this._sp=this._sp&&this._sp.destroy(),this._spTranslucent=this._spTranslucent&&this._spTranslucent.destroy(),this._vaf=this._vaf&&this._vaf.destroy(),ka(this._billboards),fV(this)};var kU=OZ;var dF={FILL:0,OUTLINE:1,FILL_AND_OUTLINE:2},UW=Object.freeze(dF);var tr={},er=0,TF=256,BF=new z(.165,.165,.165,.8),FF=new q(7,5),_l=Object.freeze({LTR:0,RTL:1,WEAK:2,BRACKETS:3});function QU(V){!V._rebindAllGlyphs&&!V._repositionAllGlyphs&&V._labelCollection._labelsToUpdate.push(V),V._rebindAllGlyphs=!0}function EA(V){!V._rebindAllGlyphs&&!V._repositionAllGlyphs&&V._labelCollection._labelsToUpdate.push(V),V._repositionAllGlyphs=!0}function pA(V,l){return document.defaultView.getComputedStyle(V,null).getPropertyValue(l)}function ir(V){let l=tr[V._font];if(!s(l)){let Z=document.createElement("div");Z.style.position="absolute",Z.style.opacity=0,Z.style.font=V._font,document.body.appendChild(Z);let U=parseFloat(pA(Z,"line-height"));isNaN(U)&&(U=void 0),l={family:pA(Z,"font-family"),size:pA(Z,"font-size").replace("px",""),style:pA(Z,"font-style"),weight:pA(Z,"font-weight"),lineHeight:U},document.body.removeChild(Z),er<TF&&(tr[V._font]=l,er++)}V._fontFamily=l.family,V._fontSize=l.size,V._fontStyle=l.style,V._fontWeight=l.weight,V._lineHeight=l.lineHeight}function fW(V,l){if(V=a(V,a.EMPTY_OBJECT),s(V.disableDepthTestDistance)&&V.disableDepthTestDistance<0)throw new I("disableDepthTestDistance must be greater than 0.0.");let Z=V.translucencyByDistance,U=V.pixelOffsetScaleByDistance,A=V.scaleByDistance,t=V.distanceDisplayCondition;if(s(Z)){if(Z.far<=Z.near)throw new I("translucencyByDistance.far must be greater than translucencyByDistance.near.");Z=_V.clone(Z)}if(s(U)){if(U.far<=U.near)throw new I("pixelOffsetScaleByDistance.far must be greater than pixelOffsetScaleByDistance.near.");U=_V.clone(U)}if(s(A)){if(A.far<=A.near)throw new I("scaleByDistance.far must be greater than scaleByDistance.near.");A=_V.clone(A)}if(s(t)){if(t.far<=t.near)throw new I("distanceDisplayCondition.far must be greater than distanceDisplayCondition.near.");t=RZ.clone(t)}this._renderedText=void 0,this._text=void 0,this._show=a(V.show,!0),this._font=a(V.font,"30px sans-serif"),this._fillColor=z.clone(a(V.fillColor,z.WHITE)),this._outlineColor=z.clone(a(V.outlineColor,z.BLACK)),this._outlineWidth=a(V.outlineWidth,1),this._showBackground=a(V.showBackground,!1),this._backgroundColor=z.clone(a(V.backgroundColor,BF)),this._backgroundPadding=q.clone(a(V.backgroundPadding,FF)),this._style=a(V.style,UW.FILL),this._verticalOrigin=a(V.verticalOrigin,Al.BASELINE),this._horizontalOrigin=a(V.horizontalOrigin,eZ.LEFT),this._pixelOffset=q.clone(a(V.pixelOffset,q.ZERO)),this._eyeOffset=w.clone(a(V.eyeOffset,w.ZERO)),this._position=w.clone(a(V.position,w.ZERO)),this._scale=a(V.scale,1),this._id=V.id,this._translucencyByDistance=Z,this._pixelOffsetScaleByDistance=U,this._scaleByDistance=A,this._heightReference=a(V.heightReference,ZZ.NONE),this._distanceDisplayCondition=t,this._disableDepthTestDistance=V.disableDepthTestDistance,this._labelCollection=l,this._glyphs=[],this._backgroundBillboard=void 0,this._batchIndex=void 0,this._rebindAllGlyphs=!0,this._repositionAllGlyphs=!0,this._actualClampedPosition=void 0,this._removeCallbackFunc=void 0,this._mode=void 0,this._clusterShow=!0,this.text=a(V.text,""),this._relativeSize=1,ir(this),this._updateClamping()}Object.defineProperties(fW.prototype,{show:{get:function(){return this._show},set:function(V){if(!s(V))throw new I("value is required.");if(this._show!==V){this._show=V;let l=this._glyphs;for(let U=0,A=l.length;U<A;U++){let t=l[U].billboard;s(t)&&(t.show=V)}let Z=this._backgroundBillboard;s(Z)&&(Z.show=V)}}},position:{get:function(){return this._position},set:function(V){if(!s(V))throw new I("value is required.");let l=this._position;if(!w.equals(l,V)){w.clone(V,l);let Z=this._glyphs;for(let A=0,t=Z.length;A<t;A++){let m=Z[A].billboard;s(m)&&(m.position=V)}let U=this._backgroundBillboard;s(U)&&(U.position=V),this._updateClamping()}}},heightReference:{get:function(){return this._heightReference},set:function(V){if(!s(V))throw new I("value is required.");if(V!==this._heightReference){this._heightReference=V;let l=this._glyphs;for(let U=0,A=l.length;U<A;U++){let t=l[U].billboard;s(t)&&(t.heightReference=V)}let Z=this._backgroundBillboard;s(Z)&&(Z.heightReference=V),EA(this),this._updateClamping()}}},text:{get:function(){return this._text},set:function(V){if(!s(V))throw new I("value is required.");if(this._text!==V){this._text=V;let l=V.replace(/\u00ad/g,"");this._renderedText=fW.enableRightToLeftDetection?gF(l):l,QU(this)}}},font:{get:function(){return this._font},set:function(V){if(!s(V))throw new I("value is required.");this._font!==V&&(this._font=V,QU(this),ir(this))}},fillColor:{get:function(){return this._fillColor},set:function(V){if(!s(V))throw new I("value is required.");let l=this._fillColor;z.equals(l,V)||(z.clone(V,l),QU(this))}},outlineColor:{get:function(){return this._outlineColor},set:function(V){if(!s(V))throw new I("value is required.");let l=this._outlineColor;z.equals(l,V)||(z.clone(V,l),QU(this))}},outlineWidth:{get:function(){return this._outlineWidth},set:function(V){if(!s(V))throw new I("value is required.");this._outlineWidth!==V&&(this._outlineWidth=V,QU(this))}},showBackground:{get:function(){return this._showBackground},set:function(V){if(!s(V))throw new I("value is required.");this._showBackground!==V&&(this._showBackground=V,QU(this))}},backgroundColor:{get:function(){return this._backgroundColor},set:function(V){if(!s(V))throw new I("value is required.");let l=this._backgroundColor;if(!z.equals(l,V)){z.clone(V,l);let Z=this._backgroundBillboard;s(Z)&&(Z.color=l)}}},backgroundPadding:{get:function(){return this._backgroundPadding},set:function(V){if(!s(V))throw new I("value is required.");let l=this._backgroundPadding;q.equals(l,V)||(q.clone(V,l),EA(this))}},style:{get:function(){return this._style},set:function(V){if(!s(V))throw new I("value is required.");this._style!==V&&(this._style=V,QU(this))}},pixelOffset:{get:function(){return this._pixelOffset},set:function(V){if(!s(V))throw new I("value is required.");let l=this._pixelOffset;if(!q.equals(l,V)){q.clone(V,l);let Z=this._glyphs;for(let A=0,t=Z.length;A<t;A++){let m=Z[A];s(m.billboard)&&(m.billboard.pixelOffset=V)}let U=this._backgroundBillboard;s(U)&&(U.pixelOffset=V)}}},translucencyByDistance:{get:function(){return this._translucencyByDistance},set:function(V){if(s(V)&&V.far<=V.near)throw new I("far distance must be greater than near distance.");let l=this._translucencyByDistance;if(!_V.equals(l,V)){this._translucencyByDistance=_V.clone(V,l);let Z=this._glyphs;for(let A=0,t=Z.length;A<t;A++){let m=Z[A];s(m.billboard)&&(m.billboard.translucencyByDistance=V)}let U=this._backgroundBillboard;s(U)&&(U.translucencyByDistance=V)}}},pixelOffsetScaleByDistance:{get:function(){return this._pixelOffsetScaleByDistance},set:function(V){if(s(V)&&V.far<=V.near)throw new I("far distance must be greater than near distance.");let l=this._pixelOffsetScaleByDistance;if(!_V.equals(l,V)){this._pixelOffsetScaleByDistance=_V.clone(V,l);let Z=this._glyphs;for(let A=0,t=Z.length;A<t;A++){let m=Z[A];s(m.billboard)&&(m.billboard.pixelOffsetScaleByDistance=V)}let U=this._backgroundBillboard;s(U)&&(U.pixelOffsetScaleByDistance=V)}}},scaleByDistance:{get:function(){return this._scaleByDistance},set:function(V){if(s(V)&&V.far<=V.near)throw new I("far distance must be greater than near distance.");let l=this._scaleByDistance;if(!_V.equals(l,V)){this._scaleByDistance=_V.clone(V,l);let Z=this._glyphs;for(let A=0,t=Z.length;A<t;A++){let m=Z[A];s(m.billboard)&&(m.billboard.scaleByDistance=V)}let U=this._backgroundBillboard;s(U)&&(U.scaleByDistance=V)}}},eyeOffset:{get:function(){return this._eyeOffset},set:function(V){if(!s(V))throw new I("value is required.");let l=this._eyeOffset;if(!w.equals(l,V)){w.clone(V,l);let Z=this._glyphs;for(let A=0,t=Z.length;A<t;A++){let m=Z[A];s(m.billboard)&&(m.billboard.eyeOffset=V)}let U=this._backgroundBillboard;s(U)&&(U.eyeOffset=V)}}},horizontalOrigin:{get:function(){return this._horizontalOrigin},set:function(V){if(!s(V))throw new I("value is required.");this._horizontalOrigin!==V&&(this._horizontalOrigin=V,EA(this))}},verticalOrigin:{get:function(){return this._verticalOrigin},set:function(V){if(!s(V))throw new I("value is required.");if(this._verticalOrigin!==V){this._verticalOrigin=V;let l=this._glyphs;for(let U=0,A=l.length;U<A;U++){let t=l[U];s(t.billboard)&&(t.billboard.verticalOrigin=V)}let Z=this._backgroundBillboard;s(Z)&&(Z.verticalOrigin=V),EA(this)}}},scale:{get:function(){return this._scale},set:function(V){if(!s(V))throw new I("value is required.");if(this._scale!==V){this._scale=V;let l=this._glyphs;for(let U=0,A=l.length;U<A;U++){let t=l[U];s(t.billboard)&&(t.billboard.scale=V*this._relativeSize)}let Z=this._backgroundBillboard;s(Z)&&(Z.scale=V*this._relativeSize),EA(this)}}},totalScale:{get:function(){return this._scale*this._relativeSize}},distanceDisplayCondition:{get:function(){return this._distanceDisplayCondition},set:function(V){if(s(V)&&V.far<=V.near)throw new I("far must be greater than near");if(!RZ.equals(V,this._distanceDisplayCondition)){this._distanceDisplayCondition=RZ.clone(V,this._distanceDisplayCondition);let l=this._glyphs;for(let U=0,A=l.length;U<A;U++){let t=l[U];s(t.billboard)&&(t.billboard.distanceDisplayCondition=V)}let Z=this._backgroundBillboard;s(Z)&&(Z.distanceDisplayCondition=V)}}},disableDepthTestDistance:{get:function(){return this._disableDepthTestDistance},set:function(V){if(this._disableDepthTestDistance!==V){if(s(V)&&V<0)throw new I("disableDepthTestDistance must be greater than 0.0.");this._disableDepthTestDistance=V;let l=this._glyphs;for(let U=0,A=l.length;U<A;U++){let t=l[U];s(t.billboard)&&(t.billboard.disableDepthTestDistance=V)}let Z=this._backgroundBillboard;s(Z)&&(Z.disableDepthTestDistance=V)}}},id:{get:function(){return this._id},set:function(V){if(this._id!==V){this._id=V;let l=this._glyphs;for(let U=0,A=l.length;U<A;U++){let t=l[U];s(t.billboard)&&(t.billboard.id=V)}let Z=this._backgroundBillboard;s(Z)&&(Z.id=V)}}},pickId:{get:function(){if(!(this._glyphs.length===0||!s(this._glyphs[0].billboard)))return this._glyphs[0].billboard.pickId}},_clampedPosition:{get:function(){return this._actualClampedPosition},set:function(V){this._actualClampedPosition=w.clone(V,this._actualClampedPosition);let l=this._glyphs;for(let U=0,A=l.length;U<A;U++){let t=l[U];s(t.billboard)&&(t.billboard._clampedPosition=V)}let Z=this._backgroundBillboard;s(Z)&&(Z._clampedPosition=V)}},clusterShow:{get:function(){return this._clusterShow},set:function(V){if(this._clusterShow!==V){this._clusterShow=V;let l=this._glyphs;for(let U=0,A=l.length;U<A;U++){let t=l[U];s(t.billboard)&&(t.billboard.clusterShow=V)}let Z=this._backgroundBillboard;s(Z)&&(Z.clusterShow=V)}}}});fW.prototype._updateClamping=function(){nl._updateClamping(this._labelCollection,this)};fW.prototype.computeScreenSpacePosition=function(V,l){if(!s(V))throw new I("scene is required.");s(l)||(l=new q);let U=this._labelCollection.modelMatrix,A=s(this._actualClampedPosition)?this._actualClampedPosition:this._position;return nl._computeScreenSpacePosition(U,A,this._eyeOffset,this._pixelOffset,V,l)};fW.getScreenSpaceBoundingBox=function(V,l,Z){let U=0,A=0,t=0,m=0,i=V.totalScale,n=V._backgroundBillboard;if(s(n))U=l.x+n._translate.x,A=l.y-n._translate.y,t=n.width*i,m=n.height*i,V.verticalOrigin===Al.BOTTOM||V.verticalOrigin===Al.BASELINE?A-=m:V.verticalOrigin===Al.CENTER&&(A-=m*.5);else{U=Number.POSITIVE_INFINITY,A=Number.POSITIVE_INFINITY;let o=0,h=0,R=V._glyphs,c=R.length;for(let Q=0;Q<c;++Q){let T=R[Q],S=T.billboard;if(!s(S))continue;let p=l.x+S._translate.x,b=l.y-S._translate.y,E=T.dimensions.width*i,D=T.dimensions.height*i;V.verticalOrigin===Al.BOTTOM||V.verticalOrigin===Al.BASELINE?b-=D:V.verticalOrigin===Al.CENTER&&(b-=D*.5),V._verticalOrigin===Al.TOP?b+=aZ.PADDING*i:(V._verticalOrigin===Al.BOTTOM||V._verticalOrigin===Al.BASELINE)&&(b-=aZ.PADDING*i),U=Math.min(U,p),A=Math.min(A,b),o=Math.max(o,p+E),h=Math.max(h,b+D)}t=o-U,m=h-A}return s(Z)||(Z=new qV),Z.x=U,Z.y=A,Z.width=t,Z.height=m,Z};fW.prototype.equals=function(V){return this===V||s(V)&&this._show===V._show&&this._scale===V._scale&&this._outlineWidth===V._outlineWidth&&this._showBackground===V._showBackground&&this._style===V._style&&this._verticalOrigin===V._verticalOrigin&&this._horizontalOrigin===V._horizontalOrigin&&this._heightReference===V._heightReference&&this._renderedText===V._renderedText&&this._font===V._font&&w.equals(this._position,V._position)&&z.equals(this._fillColor,V._fillColor)&&z.equals(this._outlineColor,V._outlineColor)&&z.equals(this._backgroundColor,V._backgroundColor)&&q.equals(this._backgroundPadding,V._backgroundPadding)&&q.equals(this._pixelOffset,V._pixelOffset)&&w.equals(this._eyeOffset,V._eyeOffset)&&_V.equals(this._translucencyByDistance,V._translucencyByDistance)&&_V.equals(this._pixelOffsetScaleByDistance,V._pixelOffsetScaleByDistance)&&_V.equals(this._scaleByDistance,V._scaleByDistance)&&RZ.equals(this._distanceDisplayCondition,V._distanceDisplayCondition)&&this._disableDepthTestDistance===V._disableDepthTestDistance&&this._id===V._id};fW.prototype.isDestroyed=function(){return!1};fW.enableRightToLeftDetection=!1;function QF(V,l){let Z=/[a-zA-Z0-9]/,U=/[()[\]{}<>]/,A=[],t="",m=_l.LTR,i="",n=V.length;for(let o=0;o<n;++o){let h=V.charAt(o);l.test(h)?i=_l.RTL:Z.test(h)?i=_l.LTR:U.test(h)?i=_l.BRACKETS:i=_l.WEAK,o===0&&(m=i),m===i&&i!==_l.BRACKETS?t+=h:(t!==""&&A.push({Type:m,Word:t}),m=i,t=h)}return A.push({Type:i,Word:t}),A}function IF(V){return V.split("").reverse().join("")}function XA(V,l,Z){return V.slice(0,l)+Z+V.slice(l)}function cF(V){switch(V){case"(":return")";case")":return"(";case"[":return"]";case"]":return"[";case"{":return"}";case"}":return"{";case"<":return">";case">":return"<"}}var SF="\u05D0-\u05EA",CF="\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF",mr=new RegExp(`[${SF}${CF}]`);function gF(V){let l=V.split(`
`),Z="";for(let U=0;U<l.length;U++){let A=l[U],t=mr.test(A.charAt(0)),m=QF(A,mr),i=0,n="";for(let o=0;o<m.length;++o){let h=m[o],R=h.Type===_l.BRACKETS?cF(h.Word):IF(h.Word);t?h.Type===_l.RTL?(n=R+n,i=0):h.Type===_l.LTR?(n=XA(n,i,h.Word),i+=h.Word.length):(h.Type===_l.WEAK||h.Type===_l.BRACKETS)&&(h.Type===_l.WEAK&&m[o-1].Type===_l.BRACKETS?n=R+n:m[o-1].Type===_l.RTL?(n=R+n,i=0):m.length>o+1?m[o+1].Type===_l.RTL?(n=R+n,i=0):(n=XA(n,i,h.Word),i+=h.Word.length):n=XA(n,0,R)):h.Type===_l.RTL?n=XA(n,i,R):h.Type===_l.LTR?(n+=h.Word,i=n.length):(h.Type===_l.WEAK||h.Type===_l.BRACKETS)&&(o>0&&m[o-1].Type===_l.RTL?m.length>o+1?m[o+1].Type===_l.RTL?n=XA(n,i,R):(n+=h.Word,i=n.length):n+=h.Word:(n+=h.Word,i=n.length))}Z+=n,U<l.length-1&&(Z+=`
`)}return Z}var fA=fW;function NF(V,l,Z,U,A){let t=V.measureText(l);if(!!/\S/.test(l)){let i=document.defaultView.getComputedStyle(V.canvas).getPropertyValue("font-size").replace("px",""),n=document.createElement("canvas"),o=100,h=t.width+o|0,R=3*i,c=R/2;n.width=h,n.height=R;let Q=n.getContext("2d");Q.font=Z,Q.fillStyle="white",Q.fillRect(0,0,n.width+1,n.height+1),U&&(Q.strokeStyle="black",Q.lineWidth=V.lineWidth,Q.strokeText(l,o/2,c)),A&&(Q.fillStyle="black",Q.fillText(l,o/2,c));let T=Q.getImageData(0,0,h,R).data,S=T.length,p=h*4,b,E,D,_;for(b=0;b<S;++b)if(T[b]!==255){D=b/p|0;break}for(b=S-1;b>=0;--b)if(T[b]!==255){_=b/p|0;break}let Y=-1;for(b=0;b<h&&Y===-1;++b)for(E=0;E<R;++E){let K=b*4+E*p;if(T[K]!==255||T[K+1]!==255||T[K+2]!==255||T[K+3]!==255){Y=b;break}}return{width:t.width,height:_-D,ascent:c-D,descent:_-c,minx:Y-o/2}}return{width:t.width,height:0,ascent:0,descent:0,minx:0}}var IU;function EF(V,l){if(!s(V))throw new I("text is required.");if(V==="")return;l=a(l,a.EMPTY_OBJECT);let Z=a(l.font,"10px sans-serif"),U=a(l.stroke,!1),A=a(l.fill,!0),t=a(l.strokeWidth,1),m=a(l.backgroundColor,z.TRANSPARENT),i=a(l.padding,0),n=i*2,o=document.createElement("canvas");o.width=1,o.height=1,o.style.font=Z;let h=o.getContext("2d",{willReadFrequently:!0});s(IU)||(s(h.imageSmoothingEnabled)?IU="imageSmoothingEnabled":s(h.mozImageSmoothingEnabled)?IU="mozImageSmoothingEnabled":s(h.webkitImageSmoothingEnabled)?IU="webkitImageSmoothingEnabled":s(h.msImageSmoothingEnabled)&&(IU="msImageSmoothingEnabled")),h.font=Z,h.lineJoin="round",h.lineWidth=t,h[IU]=!1,o.style.visibility="hidden",document.body.appendChild(o);let R=NF(h,V,Z,U,A);o.dimensions=R,document.body.removeChild(o),o.style.visibility="";let c=-R.minx,Q=Math.ceil(R.width)+c+n,T=R.height+n,S=T-R.ascent+i,p=T-S+n;if(o.width=Q,o.height=T,h.font=Z,h.lineJoin="round",h.lineWidth=t,h[IU]=!1,m!==z.TRANSPARENT&&(h.fillStyle=m.toCssColorString(),h.fillRect(0,0,o.width,o.height)),U){let b=a(l.strokeColor,z.BLACK);h.strokeStyle=b.toCssColorString(),h.strokeText(V,c+i,p)}if(A){let b=a(l.fillColor,z.WHITE);h.fillStyle=b.toCssColorString(),h.fillText(V,c+i,p)}return o}var nr=EF;var Rr=Me(rr(),1);var dr=Me(or(),1);function fF(){this.textureInfo=void 0,this.dimensions=void 0,this.billboard=void 0}function bF(V,l,Z){this.labelCollection=V,this.index=l,this.dimensions=Z}var uF=1.2,Tr="ID_WHITE_PIXEL",Um=new q(4,4),JF=new qV(1,1,1,1);function xF(V){let l=document.createElement("canvas");l.width=Um.x,l.height=Um.y;let Z=l.getContext("2d");return Z.fillStyle="#fff",Z.fillRect(0,0,l.width,l.height),V.addImage(Tr,l)}var wZ={};function DF(V,l,Z,U,A,t,m){return wZ.font=l,wZ.fillColor=Z,wZ.strokeColor=U,wZ.strokeWidth=A,wZ.padding=aZ.PADDING,m===Al.CENTER?wZ.textBaseline="middle":m===Al.TOP?wZ.textBaseline="top":wZ.textBaseline="bottom",wZ.fill=t===UW.FILL||t===UW.FILL_AND_OUTLINE,wZ.stroke=t===UW.OUTLINE||t===UW.FILL_AND_OUTLINE,wZ.backgroundColor=z.BLACK,nr(V,wZ)}function Am(V,l){l.textureInfo=void 0,l.dimensions=void 0;let Z=l.billboard;s(Z)&&(Z.show=!1,Z.image=void 0,s(Z._removeCallbackFunc)&&(Z._removeCallbackFunc(),Z._removeCallbackFunc=void 0),V._spareBillboards.push(Z),l.billboard=void 0)}function MF(V,l,Z,U){U.index=V.addImageSync(l,Z)}var _F=new dr.default;function OF(V,l){let Z=l._renderedText,U=_F.splitGraphemes(Z),A=U.length,t=l._glyphs,m=t.length,i,n,o;if(l._relativeSize=l._fontSize/aZ.FONT_SIZE,A<m)for(n=A;n<m;++n)Am(V,t[n]);t.length=A;let h=l.show&&l._showBackground&&Z.split(`
`).join("").length>0,R=l._backgroundBillboard,c=V._backgroundBillboardCollection;h?(s(R)||(R=c.add({collection:V,image:Tr,imageSubRegion:JF}),l._backgroundBillboard=R),R.color=l._backgroundColor,R.show=l._show,R.position=l._position,R.eyeOffset=l._eyeOffset,R.pixelOffset=l._pixelOffset,R.horizontalOrigin=eZ.LEFT,R.verticalOrigin=l._verticalOrigin,R.heightReference=l._heightReference,R.scale=l.totalScale,R.pickPrimitive=l,R.id=l._id,R.translucencyByDistance=l._translucencyByDistance,R.pixelOffsetScaleByDistance=l._pixelOffsetScaleByDistance,R.scaleByDistance=l._scaleByDistance,R.distanceDisplayCondition=l._distanceDisplayCondition,R.disableDepthTestDistance=l._disableDepthTestDistance,R.clusterShow=l.clusterShow):s(R)&&(c.remove(R),l._backgroundBillboard=R=void 0);let Q=V._glyphTextureCache;for(o=0;o<A;++o){let T=U[o],S=l._verticalOrigin,p=JSON.stringify([T,l._fontFamily,l._fontStyle,l._fontWeight,+S]),b=Q[p];if(!s(b)){let E=`${l._fontStyle} ${l._fontWeight} ${aZ.FONT_SIZE}px ${l._fontFamily}`,D=DF(T,E,z.WHITE,z.WHITE,0,UW.FILL,S);if(b=new bF(V,-1,D.dimensions),Q[p]=b,D.width>0&&D.height>0){let _=(0,Rr.default)(D,{cutoff:aZ.CUTOFF,radius:aZ.RADIUS}),Y=D.getContext("2d"),K=D.width,ZV=D.height,j=Y.getImageData(0,0,K,ZV);for(let mV=0;mV<K;mV++)for(let BV=0;BV<ZV;BV++){let W=BV*K+mV,VV=_[W]*255,GV=W*4;j.data[GV+0]=VV,j.data[GV+1]=VV,j.data[GV+2]=VV,j.data[GV+3]=VV}Y.putImageData(j,0,0),T!==" "&&MF(V._textureAtlas,p,D,b)}}if(i=t[o],s(i)?b.index===-1?Am(V,i):s(i.textureInfo)&&(i.textureInfo=void 0):(i=new fF,t[o]=i),i.textureInfo=b,i.dimensions=b.dimensions,b.index!==-1){let E=i.billboard,D=V._spareBillboards;s(E)||(D.length>0?E=D.pop():(E=V._billboardCollection.add({collection:V}),E._labelDimensions=new q,E._labelTranslate=new q),i.billboard=E),E.show=l._show,E.position=l._position,E.eyeOffset=l._eyeOffset,E.pixelOffset=l._pixelOffset,E.horizontalOrigin=eZ.LEFT,E.verticalOrigin=l._verticalOrigin,E.heightReference=l._heightReference,E.scale=l.totalScale,E.pickPrimitive=l,E.id=l._id,E.image=p,E.translucencyByDistance=l._translucencyByDistance,E.pixelOffsetScaleByDistance=l._pixelOffsetScaleByDistance,E.scaleByDistance=l._scaleByDistance,E.distanceDisplayCondition=l._distanceDisplayCondition,E.disableDepthTestDistance=l._disableDepthTestDistance,E._batchIndex=l._batchIndex,E.outlineColor=l.outlineColor,l.style===UW.FILL_AND_OUTLINE?(E.color=l._fillColor,E.outlineWidth=l.outlineWidth):l.style===UW.FILL?(E.color=l._fillColor,E.outlineWidth=0):l.style===UW.OUTLINE&&(E.color=z.TRANSPARENT,E.outlineWidth=l.outlineWidth)}}l._repositionAllGlyphs=!0}function hr(V,l,Z){return l===eZ.CENTER?-V/2:l===eZ.RIGHT?-(V+Z.x):Z.x}var dl=new q,wF=new q;function YF(V){let l=V._glyphs,Z=V._renderedText,U,A,t=0,m=0,i=[],n=Number.NEGATIVE_INFINITY,o=0,h=1,R,c=l.length,Q=V._backgroundBillboard,T=q.clone(s(Q)?V._backgroundPadding:q.ZERO,wF);for(T.x/=V._relativeSize,T.y/=V._relativeSize,R=0;R<c;++R)Z.charAt(R)===`
`?(i.push(t),++h,t=0):(U=l[R],A=U.dimensions,o=Math.max(o,A.height-A.descent),n=Math.max(n,A.descent),t+=A.width-A.minx,R<c-1&&(t+=l[R+1].dimensions.minx),m=Math.max(m,t));i.push(t);let S=o+n,p=V.totalScale,b=V._horizontalOrigin,E=V._verticalOrigin,D=0,_=i[D],Y=hr(_,b,T),K=(s(V._lineHeight)?V._lineHeight:uF*V._fontSize)/V._relativeSize,ZV=K*(h-1),j=m,mV=S+ZV;s(Q)&&(j+=T.x*2,mV+=T.y*2,Q._labelHorizontalOrigin=b),dl.x=Y*p,dl.y=0;let BV=!0,W=0;for(R=0;R<c;++R)if(Z.charAt(R)===`
`)++D,W+=K,_=i[D],Y=hr(_,b,T),dl.x=Y*p,BV=!0;else if(U=l[R],A=U.dimensions,E===Al.TOP?(dl.y=A.height-o-T.y,dl.y+=aZ.PADDING):E===Al.CENTER?dl.y=(ZV+A.height-o)/2:E===Al.BASELINE?(dl.y=ZV,dl.y-=aZ.PADDING):(dl.y=ZV+n+T.y,dl.y-=aZ.PADDING),dl.y=(dl.y-A.descent-W)*p,BV&&(dl.x-=aZ.PADDING*p,BV=!1),s(U.billboard)&&(U.billboard._setTranslate(dl),U.billboard._labelDimensions.x=j,U.billboard._labelDimensions.y=mV,U.billboard._labelHorizontalOrigin=b),R<c-1){let VV=l[R+1];dl.x+=(A.width-A.minx+VV.dimensions.minx)*p}if(s(Q)&&Z.split(`
`).join("").length>0&&(b===eZ.CENTER?Y=-m/2-T.x:b===eZ.RIGHT?Y=-(m+T.x*2):Y=0,dl.x=Y*p,E===Al.TOP?dl.y=S-o-n:E===Al.CENTER?dl.y=(S-o)/2-n:E===Al.BASELINE?dl.y=-T.y-n:dl.y=0,dl.y=dl.y*p,Q.width=j,Q.height=mV,Q._setTranslate(dl),Q._labelTranslate=q.clone(dl,Q._labelTranslate)),V.heightReference===ZZ.CLAMP_TO_GROUND)for(R=0;R<c;++R){U=l[R];let VV=U.billboard;s(VV)&&(VV._labelTranslate=q.clone(dl,VV._labelTranslate))}}function Br(V,l){let Z=l._glyphs;for(let U=0,A=Z.length;U<A;++U)Am(V,Z[U]);s(l._backgroundBillboard)&&(V._backgroundBillboardCollection.remove(l._backgroundBillboard),l._backgroundBillboard=void 0),l._labelCollection=void 0,s(l._removeCallbackFunc)&&l._removeCallbackFunc(),fV(l)}function BW(V){V=a(V,a.EMPTY_OBJECT),this._scene=V.scene,this._batchTable=V.batchTable,this._textureAtlas=void 0,this._backgroundTextureAtlas=void 0,this._backgroundBillboardCollection=new kU({scene:this._scene}),this._backgroundBillboardCollection.destroyTextureAtlas=!1,this._billboardCollection=new kU({scene:this._scene,batchTable:this._batchTable}),this._billboardCollection.destroyTextureAtlas=!1,this._billboardCollection._sdf=!0,this._spareBillboards=[],this._glyphTextureCache={},this._labels=[],this._labelsToUpdate=[],this._totalGlyphCount=0,this._highlightColor=z.clone(z.WHITE),this.show=a(V.show,!0),this.modelMatrix=nV.clone(a(V.modelMatrix,nV.IDENTITY)),this.debugShowBoundingVolume=a(V.debugShowBoundingVolume,!1),this.blendOption=a(V.blendOption,hl.OPAQUE_AND_TRANSLUCENT)}Object.defineProperties(BW.prototype,{length:{get:function(){return this._labels.length}}});BW.prototype.add=function(V){let l=new fA(V,this);return this._labels.push(l),this._labelsToUpdate.push(l),l};BW.prototype.remove=function(V){if(s(V)&&V._labelCollection===this){let l=this._labels.indexOf(V);if(l!==-1)return this._labels.splice(l,1),Br(this,V),!0}return!1};BW.prototype.removeAll=function(){let V=this._labels;for(let l=0,Z=V.length;l<Z;++l)Br(this,V[l]);V.length=0};BW.prototype.contains=function(V){return s(V)&&V._labelCollection===this};BW.prototype.get=function(V){if(!s(V))throw new I("index is required.");return this._labels[V]};BW.prototype.update=function(V){if(!this.show)return;let l=this._billboardCollection,Z=this._backgroundBillboardCollection;l.modelMatrix=this.modelMatrix,l.debugShowBoundingVolume=this.debugShowBoundingVolume,Z.modelMatrix=this.modelMatrix,Z.debugShowBoundingVolume=this.debugShowBoundingVolume;let U=V.context;s(this._textureAtlas)||(this._textureAtlas=new CA({context:U}),l.textureAtlas=this._textureAtlas),s(this._backgroundTextureAtlas)||(this._backgroundTextureAtlas=new CA({context:U,initialSize:Um}),Z.textureAtlas=this._backgroundTextureAtlas,xF(this._backgroundTextureAtlas));let A=this._labelsToUpdate.length;for(let m=0;m<A;++m){let i=this._labelsToUpdate[m];if(i.isDestroyed())continue;let n=i._glyphs.length;i._rebindAllGlyphs&&(OF(this,i),i._rebindAllGlyphs=!1),i._repositionAllGlyphs&&(YF(i),i._repositionAllGlyphs=!1);let o=i._glyphs.length-n;this._totalGlyphCount+=o}let t=Z.length>0?hl.TRANSLUCENT:this.blendOption;l.blendOption=t,Z.blendOption=t,l._highlightColor=this._highlightColor,Z._highlightColor=this._highlightColor,this._labelsToUpdate.length=0,Z.update(V),l.update(V)};BW.prototype.isDestroyed=function(){return!1};BW.prototype.destroy=function(){return this.removeAll(),this._billboardCollection=this._billboardCollection.destroy(),this._textureAtlas=this._textureAtlas&&this._textureAtlas.destroy(),this._backgroundBillboardCollection=this._backgroundBillboardCollection.destroy(),this._backgroundTextureAtlas=this._backgroundTextureAtlas&&this._backgroundTextureAtlas.destroy(),fV(this)};var tm=BW;function El(V,l){if(V=a(V,a.EMPTY_OBJECT),s(V.disableDepthTestDistance)&&V.disableDepthTestDistance<0)throw new I("disableDepthTestDistance must be greater than or equal to 0.0.");let Z=V.translucencyByDistance,U=V.scaleByDistance,A=V.distanceDisplayCondition;if(s(Z)){if(Z.far<=Z.near)throw new I("translucencyByDistance.far must be greater than translucencyByDistance.near.");Z=_V.clone(Z)}if(s(U)){if(U.far<=U.near)throw new I("scaleByDistance.far must be greater than scaleByDistance.near.");U=_V.clone(U)}if(s(A)){if(A.far<=A.near)throw new I("distanceDisplayCondition.far must be greater than distanceDisplayCondition.near.");A=RZ.clone(A)}this._show=a(V.show,!0),this._position=w.clone(a(V.position,w.ZERO)),this._actualPosition=w.clone(this._position),this._color=z.clone(a(V.color,z.WHITE)),this._outlineColor=z.clone(a(V.outlineColor,z.TRANSPARENT)),this._outlineWidth=a(V.outlineWidth,0),this._pixelSize=a(V.pixelSize,10),this._scaleByDistance=U,this._translucencyByDistance=Z,this._distanceDisplayCondition=A,this._disableDepthTestDistance=a(V.disableDepthTestDistance,0),this._id=V.id,this._collection=a(V.collection,l),this._clusterShow=!0,this._pickId=void 0,this._pointPrimitiveCollection=l,this._dirty=!1,this._index=-1}var Fr=El.SHOW_INDEX=0,cr=El.POSITION_INDEX=1,yF=El.COLOR_INDEX=2,vF=El.OUTLINE_COLOR_INDEX=3,zF=El.OUTLINE_WIDTH_INDEX=4,kF=El.PIXEL_SIZE_INDEX=5,HF=El.SCALE_BY_DISTANCE_INDEX=6,LF=El.TRANSLUCENCY_BY_DISTANCE_INDEX=7,KF=El.DISTANCE_DISPLAY_CONDITION_INDEX=8,PF=El.DISABLE_DEPTH_DISTANCE_INDEX=9;El.NUMBER_OF_PROPERTIES=10;function YZ(V,l){let Z=V._pointPrimitiveCollection;s(Z)&&(Z._updatePointPrimitive(V,l),V._dirty=!0)}Object.defineProperties(El.prototype,{show:{get:function(){return this._show},set:function(V){if(!s(V))throw new I("value is required.");this._show!==V&&(this._show=V,YZ(this,Fr))}},position:{get:function(){return this._position},set:function(V){if(!s(V))throw new I("value is required.");let l=this._position;w.equals(l,V)||(w.clone(V,l),w.clone(V,this._actualPosition),YZ(this,cr))}},scaleByDistance:{get:function(){return this._scaleByDistance},set:function(V){if(s(V)&&V.far<=V.near)throw new I("far distance must be greater than near distance.");let l=this._scaleByDistance;_V.equals(l,V)||(this._scaleByDistance=_V.clone(V,l),YZ(this,HF))}},translucencyByDistance:{get:function(){return this._translucencyByDistance},set:function(V){if(s(V)&&V.far<=V.near)throw new I("far distance must be greater than near distance.");let l=this._translucencyByDistance;_V.equals(l,V)||(this._translucencyByDistance=_V.clone(V,l),YZ(this,LF))}},pixelSize:{get:function(){return this._pixelSize},set:function(V){if(!s(V))throw new I("value is required.");this._pixelSize!==V&&(this._pixelSize=V,YZ(this,kF))}},color:{get:function(){return this._color},set:function(V){if(!s(V))throw new I("value is required.");let l=this._color;z.equals(l,V)||(z.clone(V,l),YZ(this,yF))}},outlineColor:{get:function(){return this._outlineColor},set:function(V){if(!s(V))throw new I("value is required.");let l=this._outlineColor;z.equals(l,V)||(z.clone(V,l),YZ(this,vF))}},outlineWidth:{get:function(){return this._outlineWidth},set:function(V){if(!s(V))throw new I("value is required.");this._outlineWidth!==V&&(this._outlineWidth=V,YZ(this,zF))}},distanceDisplayCondition:{get:function(){return this._distanceDisplayCondition},set:function(V){if(s(V)&&V.far<=V.near)throw new I("far must be greater than near");RZ.equals(this._distanceDisplayCondition,V)||(this._distanceDisplayCondition=RZ.clone(V,this._distanceDisplayCondition),YZ(this,KF))}},disableDepthTestDistance:{get:function(){return this._disableDepthTestDistance},set:function(V){if(this._disableDepthTestDistance!==V){if(!s(V)||V<0)throw new I("disableDepthTestDistance must be greater than or equal to 0.0.");this._disableDepthTestDistance=V,YZ(this,PF)}}},id:{get:function(){return this._id},set:function(V){this._id=V,s(this._pickId)&&(this._pickId.object.id=V)}},pickId:{get:function(){return this._pickId}},clusterShow:{get:function(){return this._clusterShow},set:function(V){this._clusterShow!==V&&(this._clusterShow=V,YZ(this,Fr))}}});El.prototype.getPickId=function(V){return s(this._pickId)||(this._pickId=V.createPickId({primitive:this,collection:this._collection,id:this._id})),this._pickId};El.prototype._getActualPosition=function(){return this._actualPosition};El.prototype._setActualPosition=function(V){w.clone(V,this._actualPosition),YZ(this,cr)};var Qr=new CV;El._computeActualPosition=function(V,l,Z){return l.mode===IV.SCENE3D?V:(nV.multiplyByPoint(Z,V,Qr),wU.computeActualWgs84Position(l,Qr))};var Ir=new CV;El._computeScreenSpacePosition=function(V,l,Z,U){let A=nV.multiplyByVector(V,CV.fromElements(l.x,l.y,l.z,1,Ir),Ir);return wU.wgs84ToWindowCoordinates(Z,A,U)};El.prototype.computeScreenSpacePosition=function(V,l){let Z=this._pointPrimitiveCollection;if(s(l)||(l=new q),!s(Z))throw new I("PointPrimitive must be in a collection.");if(!s(V))throw new I("scene is required.");let U=Z.modelMatrix,A=El._computeScreenSpacePosition(U,this._actualPosition,V,l);if(s(A))return A.y=V.canvas.clientHeight-A.y,A};El.getScreenSpaceBoundingBox=function(V,l,Z){let U=V.pixelSize,A=U*.5,t=l.x-A,m=l.y-A,i=U,n=U;return s(Z)||(Z=new qV),Z.x=t,Z.y=m,Z.width=i,Z.height=n,Z};El.prototype.equals=function(V){return this===V||s(V)&&this._id===V._id&&w.equals(this._position,V._position)&&z.equals(this._color,V._color)&&this._pixelSize===V._pixelSize&&this._outlineWidth===V._outlineWidth&&this._show===V._show&&z.equals(this._outlineColor,V._outlineColor)&&_V.equals(this._scaleByDistance,V._scaleByDistance)&&_V.equals(this._translucencyByDistance,V._translucencyByDistance)&&RZ.equals(this._distanceDisplayCondition,V._distanceDisplayCondition)&&this._disableDepthTestDistance===V._disableDepthTestDistance};El.prototype._destroy=function(){this._pickId=this._pickId&&this._pickId.destroy(),this._pointPrimitiveCollection=void 0};var rZ=El;var uA=`in vec4 v_color;
in vec4 v_outlineColor;
in float v_innerPercent;
in float v_pixelDistance;
in vec4 v_pickColor;

void main()
{
    // The distance in UV space from this fragment to the center of the point, at most 0.5.
    float distanceToCenter = length(gl_PointCoord - vec2(0.5));
    // The max distance stops one pixel shy of the edge to leave space for anti-aliasing.
    float maxDistance = max(0.0, 0.5 - v_pixelDistance);
    float wholeAlpha = 1.0 - smoothstep(maxDistance, 0.5, distanceToCenter);
    float innerAlpha = 1.0 - smoothstep(maxDistance * v_innerPercent, 0.5 * v_innerPercent, distanceToCenter);

    vec4 color = mix(v_outlineColor, v_color, innerAlpha);
    color.a *= wholeAlpha;

// Fully transparent parts of the billboard are not pickable.
#if !defined(OPAQUE) && !defined(TRANSLUCENT)
    if (color.a < 0.005)   // matches 0/255 and 1/255
    {
        discard;
    }
#else
// The billboard is rendered twice. The opaque pass discards translucent fragments
// and the translucent pass discards opaque fragments.
#ifdef OPAQUE
    if (color.a < 0.995)   // matches < 254/255
    {
        discard;
    }
#else
    if (color.a >= 0.995)  // matches 254/255 and 255/255
    {
        discard;
    }
#endif
#endif

    out_FragColor = czm_gammaCorrect(color);
    czm_writeLogDepth();
}
`;var Sr=`uniform float u_maxTotalPointSize;

in vec4 positionHighAndSize;
in vec4 positionLowAndOutline;
in vec4 compressedAttribute0;                       // color, outlineColor, pick color
in vec4 compressedAttribute1;                       // show, translucency by distance, some free space
in vec4 scaleByDistance;                            // near, nearScale, far, farScale
in vec3 distanceDisplayConditionAndDisableDepth;    // near, far, disableDepthTestDistance

out vec4 v_color;
out vec4 v_outlineColor;
out float v_innerPercent;
out float v_pixelDistance;
out vec4 v_pickColor;

const float SHIFT_LEFT8 = 256.0;
const float SHIFT_RIGHT8 = 1.0 / 256.0;

void main()
{
    // Modifying this shader may also require modifications to PointPrimitive._computeScreenSpacePosition

    // unpack attributes
    vec3 positionHigh = positionHighAndSize.xyz;
    vec3 positionLow = positionLowAndOutline.xyz;
    float outlineWidthBothSides = 2.0 * positionLowAndOutline.w;
    float totalSize = positionHighAndSize.w + outlineWidthBothSides;
    float outlinePercent = outlineWidthBothSides / totalSize;
    // Scale in response to browser-zoom.
    totalSize *= czm_pixelRatio;

    float temp = compressedAttribute1.x * SHIFT_RIGHT8;
    float show = floor(temp);

#ifdef EYE_DISTANCE_TRANSLUCENCY
    vec4 translucencyByDistance;
    translucencyByDistance.x = compressedAttribute1.z;
    translucencyByDistance.z = compressedAttribute1.w;

    translucencyByDistance.y = ((temp - floor(temp)) * SHIFT_LEFT8) / 255.0;

    temp = compressedAttribute1.y * SHIFT_RIGHT8;
    translucencyByDistance.w = ((temp - floor(temp)) * SHIFT_LEFT8) / 255.0;
#endif

    ///////////////////////////////////////////////////////////////////////////

    vec4 color;
    vec4 outlineColor;
    vec4 pickColor;

    // compressedAttribute0.z => pickColor.rgb

    temp = compressedAttribute0.z * SHIFT_RIGHT8;
    pickColor.b = (temp - floor(temp)) * SHIFT_LEFT8;
    temp = floor(temp) * SHIFT_RIGHT8;
    pickColor.g = (temp - floor(temp)) * SHIFT_LEFT8;
    pickColor.r = floor(temp);

    // compressedAttribute0.x => color.rgb

    temp = compressedAttribute0.x * SHIFT_RIGHT8;
    color.b = (temp - floor(temp)) * SHIFT_LEFT8;
    temp = floor(temp) * SHIFT_RIGHT8;
    color.g = (temp - floor(temp)) * SHIFT_LEFT8;
    color.r = floor(temp);

    // compressedAttribute0.y => outlineColor.rgb

    temp = compressedAttribute0.y * SHIFT_RIGHT8;
    outlineColor.b = (temp - floor(temp)) * SHIFT_LEFT8;
    temp = floor(temp) * SHIFT_RIGHT8;
    outlineColor.g = (temp - floor(temp)) * SHIFT_LEFT8;
    outlineColor.r = floor(temp);

    // compressedAttribute0.w => color.a, outlineColor.a, pickColor.a

    temp = compressedAttribute0.w * SHIFT_RIGHT8;
    pickColor.a = (temp - floor(temp)) * SHIFT_LEFT8;
    pickColor = pickColor / 255.0;

    temp = floor(temp) * SHIFT_RIGHT8;
    outlineColor.a = (temp - floor(temp)) * SHIFT_LEFT8;
    outlineColor /= 255.0;
    color.a = floor(temp);
    color /= 255.0;

    ///////////////////////////////////////////////////////////////////////////

    vec4 p = czm_translateRelativeToEye(positionHigh, positionLow);
    vec4 positionEC = czm_modelViewRelativeToEye * p;

    ///////////////////////////////////////////////////////////////////////////

#if defined(EYE_DISTANCE_SCALING) || defined(EYE_DISTANCE_TRANSLUCENCY) || defined(DISTANCE_DISPLAY_CONDITION) || defined(DISABLE_DEPTH_DISTANCE)
    float lengthSq;
    if (czm_sceneMode == czm_sceneMode2D)
    {
        // 2D camera distance is a special case
        // treat all billboards as flattened to the z=0.0 plane
        lengthSq = czm_eyeHeight2D.y;
    }
    else
    {
        lengthSq = dot(positionEC.xyz, positionEC.xyz);
    }
#endif

#ifdef EYE_DISTANCE_SCALING
    totalSize *= czm_nearFarScalar(scaleByDistance, lengthSq);
#endif
    if (totalSize > 0.0) {
        // Add padding for anti-aliasing on both sides.
        totalSize += 3.0;
    }

    // Clamp to max point size.
    totalSize = min(totalSize, u_maxTotalPointSize);
    // If size is too small, push vertex behind near plane for clipping.
    // Note that context.minimumAliasedPointSize "will be at most 1.0".
    if (totalSize < 1.0)
    {
        positionEC.xyz = vec3(0.0);
        totalSize = 1.0;
    }

    float translucency = 1.0;
#ifdef EYE_DISTANCE_TRANSLUCENCY
    translucency = czm_nearFarScalar(translucencyByDistance, lengthSq);
    // push vertex behind near plane for clipping
    if (translucency < 0.004)
    {
        positionEC.xyz = vec3(0.0);
    }
#endif

#ifdef DISTANCE_DISPLAY_CONDITION
    float nearSq = distanceDisplayConditionAndDisableDepth.x;
    float farSq = distanceDisplayConditionAndDisableDepth.y;
    if (lengthSq < nearSq || lengthSq > farSq) {
        // push vertex behind camera to force it to be clipped
        positionEC.xyz = vec3(0.0, 0.0, 1.0);
    }
#endif

    gl_Position = czm_projection * positionEC;
    czm_vertexLogDepth();

#ifdef DISABLE_DEPTH_DISTANCE
    float disableDepthTestDistance = distanceDisplayConditionAndDisableDepth.z;
    if (disableDepthTestDistance == 0.0 && czm_minimumDisableDepthTestDistance != 0.0)
    {
        disableDepthTestDistance = czm_minimumDisableDepthTestDistance;
    }

    if (disableDepthTestDistance != 0.0)
    {
        // Don't try to "multiply both sides" by w.  Greater/less-than comparisons won't work for negative values of w.
        float zclip = gl_Position.z / gl_Position.w;
        bool clipped = (zclip < -1.0 || zclip > 1.0);
        if (!clipped && (disableDepthTestDistance < 0.0 || (lengthSq > 0.0 && lengthSq < disableDepthTestDistance)))
        {
            // Position z on the near plane.
            gl_Position.z = -gl_Position.w;
#ifdef LOG_DEPTH
            czm_vertexLogDepth(vec4(czm_currentFrustum.x));
#endif
        }
    }
#endif

    v_color = color;
    v_color.a *= translucency * show;
    v_outlineColor = outlineColor;
    v_outlineColor.a *= translucency * show;

    v_innerPercent = 1.0 - outlinePercent;
    v_pixelDistance = 2.0 / totalSize;
    gl_PointSize = totalSize * show;
    gl_Position *= show;

    v_pickColor = pickColor;
}
`;var jF=rZ.SHOW_INDEX,im=rZ.POSITION_INDEX,Cr=rZ.COLOR_INDEX,qF=rZ.OUTLINE_COLOR_INDEX,$F=rZ.OUTLINE_WIDTH_INDEX,VQ=rZ.PIXEL_SIZE_INDEX,gr=rZ.SCALE_BY_DISTANCE_INDEX,Nr=rZ.TRANSLUCENCY_BY_DISTANCE_INDEX,Er=rZ.DISTANCE_DISPLAY_CONDITION_INDEX,lQ=rZ.DISABLE_DEPTH_DISTANCE_INDEX,nm=rZ.NUMBER_OF_PROPERTIES,oZ={positionHighAndSize:0,positionLowAndOutline:1,compressedAttribute0:2,compressedAttribute1:3,scaleByDistance:4,distanceDisplayConditionAndDisableDepth:5};function yZ(V){V=a(V,a.EMPTY_OBJECT),this._sp=void 0,this._spTranslucent=void 0,this._rsOpaque=void 0,this._rsTranslucent=void 0,this._vaf=void 0,this._pointPrimitives=[],this._pointPrimitivesToUpdate=[],this._pointPrimitivesToUpdateIndex=0,this._pointPrimitivesRemoved=!1,this._createVertexArray=!1,this._shaderScaleByDistance=!1,this._compiledShaderScaleByDistance=!1,this._shaderTranslucencyByDistance=!1,this._compiledShaderTranslucencyByDistance=!1,this._shaderDistanceDisplayCondition=!1,this._compiledShaderDistanceDisplayCondition=!1,this._shaderDisableDepthDistance=!1,this._compiledShaderDisableDepthDistance=!1,this._propertiesChanged=new Uint32Array(nm),this._maxPixelSize=1,this._baseVolume=new gV,this._baseVolumeWC=new gV,this._baseVolume2D=new gV,this._boundingVolume=new gV,this._boundingVolumeDirty=!1,this._colorCommands=[],this.show=a(V.show,!0),this.modelMatrix=nV.clone(a(V.modelMatrix,nV.IDENTITY)),this._modelMatrix=nV.clone(nV.IDENTITY),this.debugShowBoundingVolume=a(V.debugShowBoundingVolume,!1),this.blendOption=a(V.blendOption,hl.OPAQUE_AND_TRANSLUCENT),this._blendOption=void 0,this._mode=IV.SCENE3D,this._maxTotalPointSize=1,this._buffersUsage=[XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW,XV.STATIC_DRAW];let l=this;this._uniforms={u_maxTotalPointSize:function(){return l._maxTotalPointSize}}}Object.defineProperties(yZ.prototype,{length:{get:function(){return Gm(this),this._pointPrimitives.length}}});function pr(V){let l=V.length;for(let Z=0;Z<l;++Z)V[Z]&&V[Z]._destroy()}yZ.prototype.add=function(V){let l=new rZ(V,this);return l._index=this._pointPrimitives.length,this._pointPrimitives.push(l),this._createVertexArray=!0,l};yZ.prototype.remove=function(V){return this.contains(V)?(this._pointPrimitives[V._index]=null,this._pointPrimitivesRemoved=!0,this._createVertexArray=!0,V._destroy(),!0):!1};yZ.prototype.removeAll=function(){pr(this._pointPrimitives),this._pointPrimitives=[],this._pointPrimitivesToUpdate=[],this._pointPrimitivesToUpdateIndex=0,this._pointPrimitivesRemoved=!1,this._createVertexArray=!0};function Gm(V){if(V._pointPrimitivesRemoved){V._pointPrimitivesRemoved=!1;let l=[],Z=V._pointPrimitives,U=Z.length;for(let A=0,t=0;A<U;++A){let m=Z[A];m&&(m._index=t++,l.push(m))}V._pointPrimitives=l}}yZ.prototype._updatePointPrimitive=function(V,l){V._dirty||(this._pointPrimitivesToUpdate[this._pointPrimitivesToUpdateIndex++]=V),++this._propertiesChanged[l]};yZ.prototype.contains=function(V){return s(V)&&V._pointPrimitiveCollection===this};yZ.prototype.get=function(V){if(!s(V))throw new I("index is required.");return Gm(this),this._pointPrimitives[V]};yZ.prototype.computeNewBuffersUsage=function(){let V=this._buffersUsage,l=!1,Z=this._propertiesChanged;for(let U=0;U<nm;++U){let A=Z[U]===0?XV.STATIC_DRAW:XV.STREAM_DRAW;l=l||V[U]!==A,V[U]=A}return l};function ZQ(V,l,Z){return new kt(V,[{index:oZ.positionHighAndSize,componentsPerAttribute:4,componentDatatype:iV.FLOAT,usage:Z[im]},{index:oZ.positionLowAndShow,componentsPerAttribute:4,componentDatatype:iV.FLOAT,usage:Z[im]},{index:oZ.compressedAttribute0,componentsPerAttribute:4,componentDatatype:iV.FLOAT,usage:Z[Cr]},{index:oZ.compressedAttribute1,componentsPerAttribute:4,componentDatatype:iV.FLOAT,usage:Z[Nr]},{index:oZ.scaleByDistance,componentsPerAttribute:4,componentDatatype:iV.FLOAT,usage:Z[gr]},{index:oZ.distanceDisplayConditionAndDisableDepth,componentsPerAttribute:3,componentDatatype:iV.FLOAT,usage:Z[Er]}],l)}var em=new Pl;function Xr(V,l,Z,U){let A=U._index,t=U._getActualPosition();V._mode===IV.SCENE3D&&(gV.expand(V._baseVolume,t,V._baseVolume),V._boundingVolumeDirty=!0),Pl.fromCartesian(t,em);let m=U.pixelSize,i=U.outlineWidth;V._maxPixelSize=Math.max(V._maxPixelSize,m+i);let n=Z[oZ.positionHighAndSize],o=em.high;n(A,o.x,o.y,o.z,m);let h=Z[oZ.positionLowAndOutline],R=em.low;h(A,R.x,R.y,R.z,i)}var $t=65536,JA=256;function fr(V,l,Z,U){let A=U._index,t=U.color,m=U.getPickId(l).color,i=U.outlineColor,n=z.floatToByte(t.red),o=z.floatToByte(t.green),h=z.floatToByte(t.blue),R=n*$t+o*JA+h;n=z.floatToByte(i.red),o=z.floatToByte(i.green),h=z.floatToByte(i.blue);let c=n*$t+o*JA+h;n=z.floatToByte(m.red),o=z.floatToByte(m.green),h=z.floatToByte(m.blue);let Q=n*$t+o*JA+h,T=z.floatToByte(t.alpha)*$t+z.floatToByte(i.alpha)*JA+z.floatToByte(m.alpha),S=Z[oZ.compressedAttribute0];S(A,R,c,Q,T)}function br(V,l,Z,U){let A=U._index,t=0,m=1,i=1,n=1,o=U.translucencyByDistance;s(o)&&(t=o.near,m=o.nearValue,i=o.far,n=o.farValue,(m!==1||n!==1)&&(V._shaderTranslucencyByDistance=!0));let h=U.show&&U.clusterShow;U.color.alpha===0&&U.outlineColor.alpha===0&&(h=!1),m=NV.clamp(m,0,1),m=m===1?255:m*255|0;let R=(h?1:0)*JA+m;n=NV.clamp(n,0,1),n=n===1?255:n*255|0;let c=n,Q=Z[oZ.compressedAttribute1];Q(A,R,c,t,i)}function ur(V,l,Z,U){let A=U._index,t=Z[oZ.scaleByDistance],m=0,i=1,n=1,o=1,h=U.scaleByDistance;s(h)&&(m=h.near,i=h.nearValue,n=h.far,o=h.farValue,(i!==1||o!==1)&&(V._shaderScaleByDistance=!0)),t(A,m,i,n,o)}function Jr(V,l,Z,U){let A=U._index,t=Z[oZ.distanceDisplayConditionAndDisableDepth],m=0,i=Number.MAX_VALUE,n=U.distanceDisplayCondition;s(n)&&(m=n.near,i=n.far,m*=m,i*=i,V._shaderDistanceDisplayCondition=!0);let o=U.disableDepthTestDistance;o*=o,o>0&&(V._shaderDisableDepthDistance=!0,o===Number.POSITIVE_INFINITY&&(o=-1)),t(A,m,i,o)}function WQ(V,l,Z,U){Xr(V,l,Z,U),fr(V,l,Z,U),br(V,l,Z,U),ur(V,l,Z,U),Jr(V,l,Z,U)}function mm(V,l,Z,U,A,t){let m;U.mode===IV.SCENE3D?(m=V._baseVolume,V._boundingVolumeDirty=!0):m=V._baseVolume2D;let i=[];for(let n=0;n<Z;++n){let o=l[n],h=o.position,R=rZ._computeActualPosition(h,U,A);s(R)&&(o._setActualPosition(R),t?i.push(R):gV.expand(m,R,m))}t&&gV.fromPoints(i,m)}function UQ(V,l){let Z=l.mode,U=V._pointPrimitives,A=V._pointPrimitivesToUpdate,t=V._modelMatrix;V._createVertexArray||V._mode!==Z||Z!==IV.SCENE3D&&!nV.equals(t,V.modelMatrix)?(V._mode=Z,nV.clone(V.modelMatrix,t),V._createVertexArray=!0,(Z===IV.SCENE3D||Z===IV.SCENE2D||Z===IV.COLUMBUS_VIEW)&&mm(V,U,U.length,l,t,!0)):Z===IV.MORPHING?mm(V,U,U.length,l,t,!0):(Z===IV.SCENE2D||Z===IV.COLUMBUS_VIEW)&&mm(V,A,V._pointPrimitivesToUpdateIndex,l,t,!1)}function AQ(V,l,Z){let A=l.camera.getPixelSize(Z,l.context.drawingBufferWidth,l.context.drawingBufferHeight)*V._maxPixelSize;Z.radius+=A}var tQ=[];yZ.prototype.update=function(V){if(Gm(this),!this.show)return;this._maxTotalPointSize=$V.maximumAliasedPointSize,UQ(this,V);let Z=this._pointPrimitives.length,U=this._pointPrimitivesToUpdate,A=this._pointPrimitivesToUpdateIndex,t=this._propertiesChanged,m=this._createVertexArray,i,n=V.context,o=V.passes,h=o.pick;if(m||!h&&this.computeNewBuffersUsage()){this._createVertexArray=!1;for(let Y=0;Y<nm;++Y)t[Y]=0;if(this._vaf=this._vaf&&this._vaf.destroy(),Z>0){this._vaf=ZQ(n,Z,this._buffersUsage),i=this._vaf.writers;for(let Y=0;Y<Z;++Y){let K=this._pointPrimitives[Y];K._dirty=!1,WQ(this,n,i,K)}this._vaf.commit()}this._pointPrimitivesToUpdateIndex=0}else if(A>0){let Y=tQ;Y.length=0,(t[im]||t[$F]||t[VQ])&&Y.push(Xr),(t[Cr]||t[qF])&&Y.push(fr),(t[jF]||t[Nr])&&Y.push(br),t[gr]&&Y.push(ur),(t[Er]||t[lQ])&&Y.push(Jr);let K=Y.length;if(i=this._vaf.writers,A/Z>.1){for(let ZV=0;ZV<A;++ZV){let j=U[ZV];j._dirty=!1;for(let mV=0;mV<K;++mV)Y[mV](this,n,i,j)}this._vaf.commit()}else{for(let ZV=0;ZV<A;++ZV){let j=U[ZV];j._dirty=!1;for(let mV=0;mV<K;++mV)Y[mV](this,n,i,j);this._vaf.subCommit(j._index,1)}this._vaf.endSubCommits()}this._pointPrimitivesToUpdateIndex=0}if(A>Z*1.5&&(U.length=Z),!s(this._vaf)||!s(this._vaf.va))return;this._boundingVolumeDirty&&(this._boundingVolumeDirty=!1,gV.transform(this._baseVolume,this.modelMatrix,this._baseVolumeWC));let R,c=nV.IDENTITY;V.mode===IV.SCENE3D?(c=this.modelMatrix,R=gV.clone(this._baseVolumeWC,this._boundingVolume)):R=gV.clone(this._baseVolume2D,this._boundingVolume),AQ(this,V,R);let Q=this._blendOption!==this.blendOption;this._blendOption=this.blendOption,Q&&(this._blendOption===hl.OPAQUE||this._blendOption===hl.OPAQUE_AND_TRANSLUCENT?this._rsOpaque=sl.fromCache({depthTest:{enabled:!0,func:J.LEQUAL},depthMask:!0}):this._rsOpaque=void 0,this._blendOption===hl.TRANSLUCENT||this._blendOption===hl.OPAQUE_AND_TRANSLUCENT?this._rsTranslucent=sl.fromCache({depthTest:{enabled:!0,func:J.LEQUAL},depthMask:!1,blending:DZ.ALPHA_BLEND}):this._rsTranslucent=void 0),this._shaderDisableDepthDistance=this._shaderDisableDepthDistance||V.minimumDisableDepthTestDistance!==0;let T,S;(Q||this._shaderScaleByDistance&&!this._compiledShaderScaleByDistance||this._shaderTranslucencyByDistance&&!this._compiledShaderTranslucencyByDistance||this._shaderDistanceDisplayCondition&&!this._compiledShaderDistanceDisplayCondition||this._shaderDisableDepthDistance!==this._compiledShaderDisableDepthDistance)&&(T=new kV({sources:[Sr]}),this._shaderScaleByDistance&&T.defines.push("EYE_DISTANCE_SCALING"),this._shaderTranslucencyByDistance&&T.defines.push("EYE_DISTANCE_TRANSLUCENCY"),this._shaderDistanceDisplayCondition&&T.defines.push("DISTANCE_DISPLAY_CONDITION"),this._shaderDisableDepthDistance&&T.defines.push("DISABLE_DEPTH_DISTANCE"),this._blendOption===hl.OPAQUE_AND_TRANSLUCENT&&(S=new kV({defines:["OPAQUE"],sources:[uA]}),this._sp=Dl.replaceCache({context:n,shaderProgram:this._sp,vertexShaderSource:T,fragmentShaderSource:S,attributeLocations:oZ}),S=new kV({defines:["TRANSLUCENT"],sources:[uA]}),this._spTranslucent=Dl.replaceCache({context:n,shaderProgram:this._spTranslucent,vertexShaderSource:T,fragmentShaderSource:S,attributeLocations:oZ})),this._blendOption===hl.OPAQUE&&(S=new kV({sources:[uA]}),this._sp=Dl.replaceCache({context:n,shaderProgram:this._sp,vertexShaderSource:T,fragmentShaderSource:S,attributeLocations:oZ})),this._blendOption===hl.TRANSLUCENT&&(S=new kV({sources:[uA]}),this._spTranslucent=Dl.replaceCache({context:n,shaderProgram:this._spTranslucent,vertexShaderSource:T,fragmentShaderSource:S,attributeLocations:oZ})),this._compiledShaderScaleByDistance=this._shaderScaleByDistance,this._compiledShaderTranslucencyByDistance=this._shaderTranslucencyByDistance,this._compiledShaderDistanceDisplayCondition=this._shaderDistanceDisplayCondition,this._compiledShaderDisableDepthDistance=this._shaderDisableDepthDistance);let p,b,E,D,_=V.commandList;if(o.render||h){let Y=this._colorCommands,K=this._blendOption===hl.OPAQUE,ZV=this._blendOption===hl.OPAQUE_AND_TRANSLUCENT;p=this._vaf.va,b=p.length,Y.length=b;let j=ZV?b*2:b;for(D=0;D<j;++D){let mV=K||ZV&&D%2===0;E=Y[D],s(E)||(E=Y[D]=new tl),E.primitiveType=pt.POINTS,E.pass=mV||!ZV?Nl.OPAQUE:Nl.TRANSLUCENT,E.owner=this;let BV=ZV?Math.floor(D/2):D;E.boundingVolume=R,E.modelMatrix=c,E.shaderProgram=mV?this._sp:this._spTranslucent,E.uniformMap=this._uniforms,E.vertexArray=p[BV].va,E.renderState=mV?this._rsOpaque:this._rsTranslucent,E.debugShowBoundingVolume=this.debugShowBoundingVolume,E.pickId="v_pickColor",_.push(E)}}};yZ.prototype.isDestroyed=function(){return!1};yZ.prototype.destroy=function(){return this._sp=this._sp&&this._sp.destroy(),this._spTranslucent=this._spTranslucent&&this._spTranslucent.destroy(),this._spPick=this._spPick&&this._spPick.destroy(),this._vaf=this._vaf&&this._vaf.destroy(),pr(this._pointPrimitives),fV(this)};var sm=yZ;var xr=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],am=1,xA=8,MA=class V{static from(l){if(!(l instanceof ArrayBuffer))throw new Error("Data must be an instance of ArrayBuffer.");let[Z,U]=new Uint8Array(l,0,2);if(Z!==219)throw new Error("Data does not appear to be in a KDBush format.");let A=U>>4;if(A!==am)throw new Error(`Got v${A} data when expected v${am}.`);let t=xr[U&15];if(!t)throw new Error("Unrecognized array type.");let[m]=new Uint16Array(l,2,1),[i]=new Uint32Array(l,4,1);return new V(i,m,t,l)}constructor(l,Z=64,U=Float64Array,A){if(isNaN(l)||l<0)throw new Error(`Unpexpected numItems value: ${l}.`);this.numItems=+l,this.nodeSize=Math.min(Math.max(+Z,2),65535),this.ArrayType=U,this.IndexArrayType=l<65536?Uint16Array:Uint32Array;let t=xr.indexOf(this.ArrayType),m=l*2*this.ArrayType.BYTES_PER_ELEMENT,i=l*this.IndexArrayType.BYTES_PER_ELEMENT,n=(8-i%8)%8;if(t<0)throw new Error(`Unexpected typed array class: ${U}.`);A&&A instanceof ArrayBuffer?(this.data=A,this.ids=new this.IndexArrayType(this.data,xA,l),this.coords=new this.ArrayType(this.data,xA+i+n,l*2),this._pos=l*2,this._finished=!0):(this.data=new ArrayBuffer(xA+m+i+n),this.ids=new this.IndexArrayType(this.data,xA,l),this.coords=new this.ArrayType(this.data,xA+i+n,l*2),this._pos=0,this._finished=!1,new Uint8Array(this.data,0,2).set([219,(am<<4)+t]),new Uint16Array(this.data,2,1)[0]=Z,new Uint32Array(this.data,4,1)[0]=l)}add(l,Z){let U=this._pos>>1;return this.ids[U]=U,this.coords[this._pos++]=l,this.coords[this._pos++]=Z,U}finish(){let l=this._pos>>1;if(l!==this.numItems)throw new Error(`Added ${l} items when expected ${this.numItems}.`);return om(this.ids,this.coords,this.nodeSize,0,this.numItems-1,0),this._finished=!0,this}range(l,Z,U,A){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");let{ids:t,coords:m,nodeSize:i}=this,n=[0,t.length-1,0],o=[];for(;n.length;){let h=n.pop()||0,R=n.pop()||0,c=n.pop()||0;if(R-c<=i){for(let p=c;p<=R;p++){let b=m[2*p],E=m[2*p+1];b>=l&&b<=U&&E>=Z&&E<=A&&o.push(t[p])}continue}let Q=c+R>>1,T=m[2*Q],S=m[2*Q+1];T>=l&&T<=U&&S>=Z&&S<=A&&o.push(t[Q]),(h===0?l<=T:Z<=S)&&(n.push(c),n.push(Q-1),n.push(1-h)),(h===0?U>=T:A>=S)&&(n.push(Q+1),n.push(R),n.push(1-h))}return o}within(l,Z,U){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");let{ids:A,coords:t,nodeSize:m}=this,i=[0,A.length-1,0],n=[],o=U*U;for(;i.length;){let h=i.pop()||0,R=i.pop()||0,c=i.pop()||0;if(R-c<=m){for(let p=c;p<=R;p++)Dr(t[2*p],t[2*p+1],l,Z)<=o&&n.push(A[p]);continue}let Q=c+R>>1,T=t[2*Q],S=t[2*Q+1];Dr(T,S,l,Z)<=o&&n.push(A[Q]),(h===0?l-U<=T:Z-U<=S)&&(i.push(c),i.push(Q-1),i.push(1-h)),(h===0?l+U>=T:Z+U>=S)&&(i.push(Q+1),i.push(R),i.push(1-h))}return n}};function om(V,l,Z,U,A,t){if(A-U<=Z)return;let m=U+A>>1;Mr(V,l,m,U,A,t),om(V,l,Z,U,m-1,1-t),om(V,l,Z,m+1,A,1-t)}function Mr(V,l,Z,U,A,t){for(;A>U;){if(A-U>600){let o=A-U+1,h=Z-U+1,R=Math.log(o),c=.5*Math.exp(2*R/3),Q=.5*Math.sqrt(R*c*(o-c)/o)*(h-o/2<0?-1:1),T=Math.max(U,Math.floor(Z-h*c/o+Q)),S=Math.min(A,Math.floor(Z+(o-h)*c/o+Q));Mr(V,l,Z,T,S,t)}let m=l[2*Z+t],i=U,n=A;for(DA(V,l,U,Z),l[2*A+t]>m&&DA(V,l,U,A);i<n;){for(DA(V,l,i,n),i++,n--;l[2*i+t]<m;)i++;for(;l[2*n+t]>m;)n--}l[2*U+t]===m?DA(V,l,U,n):(n++,DA(V,l,n,A)),n<=Z&&(U=n+1),Z<=n&&(A=n-1)}}function DA(V,l,Z,U){rm(V,Z,U),rm(l,2*Z,2*U),rm(l,2*Z+1,2*U+1)}function rm(V,l,Z){let U=V[l];V[l]=V[Z],V[Z]=U}function Dr(V,l,Z,U){let A=V-Z,t=l-U;return A*A+t*t}function AW(V){V=a(V,a.EMPTY_OBJECT),this._enabled=a(V.enabled,!1),this._pixelRange=a(V.pixelRange,80),this._minimumClusterSize=a(V.minimumClusterSize,2),this._clusterBillboards=a(V.clusterBillboards,!0),this._clusterLabels=a(V.clusterLabels,!0),this._clusterPoints=a(V.clusterPoints,!0),this._labelCollection=void 0,this._billboardCollection=void 0,this._pointCollection=void 0,this._clusterBillboardCollection=void 0,this._clusterLabelCollection=void 0,this._clusterPointCollection=void 0,this._collectionIndicesByEntity={},this._unusedLabelIndices=[],this._unusedBillboardIndices=[],this._unusedPointIndices=[],this._previousClusters=[],this._previousHeight=void 0,this._enabledDirty=!1,this._clusterDirty=!1,this._cluster=void 0,this._removeEventListener=void 0,this._clusterEvent=new dV,this.show=a(V.show,!0)}function _r(V,l){V.x-=l,V.y-=l,V.width+=l*2,V.height+=l*2}var eQ=new qV;function Or(V,l,Z,U,A){if(s(V._labelCollection)&&U._clusterLabels?A=fA.getScreenSpaceBoundingBox(V,l,A):s(V._billboardCollection)&&U._clusterBillboards?A=nl.getScreenSpaceBoundingBox(V,l,A):s(V._pointPrimitiveCollection)&&U._clusterPoints&&(A=rZ.getScreenSpaceBoundingBox(V,l,A)),_r(A,Z),U._clusterLabels&&!s(V._labelCollection)&&s(V.id)&&Yr(U,V.id.id)&&s(V.id._label)){let t=U._collectionIndicesByEntity[V.id.id].labelIndex,m=U._labelCollection.get(t),i=fA.getScreenSpaceBoundingBox(m,l,eQ);_r(i,Z),A=qV.union(A,i,A)}return A}function mQ(V,l){if(V.clusterShow=!0,!s(V._labelCollection)&&s(V.id)&&Yr(l,V.id.id)&&s(V.id._label)){let Z=l._collectionIndicesByEntity[V.id.id].labelIndex,U=l._labelCollection.get(Z);U.clusterShow=!0}}function wr(V,l,Z,U){let A={billboard:U._clusterBillboardCollection.add(),label:U._clusterLabelCollection.add(),point:U._clusterPointCollection.add()};A.billboard.show=!1,A.point.show=!1,A.label.show=!0,A.label.text=l.toLocaleString(),A.label.id=Z,A.billboard.position=A.label.position=A.point.position=V,U._clusterEvent.raiseEvent(Z,A)}function Yr(V,l){return s(V)&&s(V._collectionIndicesByEntity[l])&&s(V._collectionIndicesByEntity[l].labelIndex)}function hm(V,l,Z,U,A){if(!s(V))return;let t=V.length;for(let m=0;m<t;++m){let i=V.get(m);if(i.clusterShow=!1,!i.show||A._scene.mode===IV.SCENE3D&&!U.isPointVisible(i.position))continue;let n=A._clusterLabels&&s(i._labelCollection),o=A._clusterBillboards&&s(i.id._billboard),h=A._clusterPoints&&s(i.id._point);if(n&&(h||o))continue;let R=i.computeScreenSpacePosition(Z);s(R)&&l.push({index:m,collection:V,clustered:!1,coord:R})}}var iQ=new qV,nQ=new qV,GQ=new qV;function sQ(V){return function(l){if(s(l)&&l<.05||!V.enabled)return;let Z=V._scene,U=V._labelCollection,A=V._billboardCollection,t=V._pointCollection;if(!s(U)&&!s(A)&&!s(t)||!V._clusterBillboards&&!V._clusterLabels&&!V._clusterPoints)return;let m=V._clusterLabelCollection,i=V._clusterBillboardCollection,n=V._clusterPointCollection;s(m)?m.removeAll():m=V._clusterLabelCollection=new tm({scene:Z}),s(i)?i.removeAll():i=V._clusterBillboardCollection=new kU({scene:Z}),s(n)?n.removeAll():n=V._clusterPointCollection=new sm;let o=V._pixelRange,h=V._minimumClusterSize,R=V._previousClusters,c=[],Q=V._previousHeight,T=Z.camera.positionCartographic.height,S=Z.mapProjection.ellipsoid,p=Z.camera.positionWC,b=new _i(S,p),E=[];V._clusterLabels&&hm(U,E,Z,b,V),V._clusterBillboards&&hm(A,E,Z,b,V),V._clusterPoints&&hm(t,E,Z,b,V);let D,_,Y,K,ZV,j,mV,BV,W,VV,GV,rV;if(E.length>0){let FV=new MA(E.length,64,Uint32Array);for(let k=0;k<E.length;++k)FV.add(E[k].coord.x,E[k].coord.y);if(FV.finish(),T<Q)for(Y=R.length,D=0;D<Y;++D){let k=R[D];if(!b.isPointVisible(k.position))continue;let UV=nl._computeScreenSpacePosition(nV.IDENTITY,k.position,w.ZERO,q.ZERO,Z);if(!s(UV))continue;let HV=1-T/Q,yV=k.width=k.width*HV,xV=k.height=k.height*HV;yV=Math.max(yV,k.minimumWidth),xV=Math.max(xV,k.minimumHeight);let bV=UV.x-yV*.5,LV=UV.y-xV*.5,Cl=UV.x+yV,pl=UV.y+xV;for(ZV=FV.range(bV,LV,Cl,pl),j=ZV.length,VV=0,W=[],_=0;_<j;++_)mV=ZV[_],BV=E[mV],BV.clustered||(++VV,GV=BV.collection,rV=BV.index,W.push(GV.get(rV).id));if(VV>=h)for(wr(k.position,VV,W,V),c.push(k),_=0;_<j;++_)E[ZV[_]].clustered=!0}for(Y=E.length,D=0;D<Y;++D){let k=E[D];if(k.clustered)continue;k.clustered=!0,GV=k.collection,rV=k.index;let UV=GV.get(rV);K=Or(UV,k.coord,o,V,iQ);let HV=qV.clone(K,nQ);ZV=FV.range(K.x,K.y,K.x+K.width,K.y+K.height),j=ZV.length;let yV=w.clone(UV.position);for(VV=1,W=[UV.id],_=0;_<j;++_)if(mV=ZV[_],BV=E[mV],!BV.clustered){let xV=BV.collection.get(BV.index),bV=Or(xV,BV.coord,o,V,GQ);w.add(xV.position,yV,yV),qV.union(HV,bV,HV),++VV,W.push(xV.id)}if(VV>=h){let xV=w.multiplyByScalar(yV,1/VV,yV);for(wr(xV,VV,W,V),c.push({position:xV,width:HV.width,height:HV.height,minimumWidth:K.width,minimumHeight:K.height}),_=0;_<j;++_)E[ZV[_]].clustered=!0}else mQ(UV,V)}}m.length===0&&(m.destroy(),V._clusterLabelCollection=void 0),i.length===0&&(i.destroy(),V._clusterBillboardCollection=void 0),n.length===0&&(n.destroy(),V._clusterPointCollection=void 0),V._previousClusters=c,V._previousHeight=T}}AW.prototype._initialize=function(V){this._scene=V;let l=sQ(this);this._cluster=l,this._removeEventListener=V.camera.changed.addEventListener(l)};Object.defineProperties(AW.prototype,{enabled:{get:function(){return this._enabled},set:function(V){this._enabledDirty=V!==this._enabled,this._enabled=V}},pixelRange:{get:function(){return this._pixelRange},set:function(V){this._clusterDirty=this._clusterDirty||V!==this._pixelRange,this._pixelRange=V}},minimumClusterSize:{get:function(){return this._minimumClusterSize},set:function(V){this._clusterDirty=this._clusterDirty||V!==this._minimumClusterSize,this._minimumClusterSize=V}},clusterEvent:{get:function(){return this._clusterEvent}},clusterBillboards:{get:function(){return this._clusterBillboards},set:function(V){this._clusterDirty=this._clusterDirty||V!==this._clusterBillboards,this._clusterBillboards=V}},clusterLabels:{get:function(){return this._clusterLabels},set:function(V){this._clusterDirty=this._clusterDirty||V!==this._clusterLabels,this._clusterLabels=V}},clusterPoints:{get:function(){return this._clusterPoints},set:function(V){this._clusterDirty=this._clusterDirty||V!==this._clusterPoints,this._clusterPoints=V}}});function dm(V,l,Z,U){return function(A){let t=this[V];s(this._collectionIndicesByEntity)||(this._collectionIndicesByEntity={});let m=this._collectionIndicesByEntity[A.id];if(s(m)||(m=this._collectionIndicesByEntity[A.id]={billboardIndex:void 0,labelIndex:void 0,pointIndex:void 0}),s(t)&&s(m[U]))return t.get(m[U]);s(t)||(t=this[V]=new l({scene:this._scene}));let i,n,o=this[Z];o.length>0?(i=o.shift(),n=t.get(i)):(n=t.add(),i=t.length-1),m[U]=i;let h=this;return Promise.resolve().then(function(){h._clusterDirty=!0}),n}}function Tm(V,l){let Z=V._collectionIndicesByEntity[l];!s(Z.billboardIndex)&&!s(Z.labelIndex)&&!s(Z.pointIndex)&&delete V._collectionIndicesByEntity[l]}AW.prototype.getLabel=dm("_labelCollection",tm,"_unusedLabelIndices","labelIndex");AW.prototype.removeLabel=function(V){let l=this._collectionIndicesByEntity&&this._collectionIndicesByEntity[V.id];if(!s(this._labelCollection)||!s(l)||!s(l.labelIndex))return;let Z=l.labelIndex;l.labelIndex=void 0,Tm(this,V.id);let U=this._labelCollection.get(Z);U.show=!1,U.text="",U.id=void 0,this._unusedLabelIndices.push(Z),this._clusterDirty=!0};AW.prototype.getBillboard=dm("_billboardCollection",kU,"_unusedBillboardIndices","billboardIndex");AW.prototype.removeBillboard=function(V){let l=this._collectionIndicesByEntity&&this._collectionIndicesByEntity[V.id];if(!s(this._billboardCollection)||!s(l)||!s(l.billboardIndex))return;let Z=l.billboardIndex;l.billboardIndex=void 0,Tm(this,V.id);let U=this._billboardCollection.get(Z);U.id=void 0,U.show=!1,U.image=void 0,this._unusedBillboardIndices.push(Z),this._clusterDirty=!0};AW.prototype.getPoint=dm("_pointCollection",sm,"_unusedPointIndices","pointIndex");AW.prototype.removePoint=function(V){let l=this._collectionIndicesByEntity&&this._collectionIndicesByEntity[V.id];if(!s(this._pointCollection)||!s(l)||!s(l.pointIndex))return;let Z=l.pointIndex;l.pointIndex=void 0,Tm(this,V.id);let U=this._pointCollection.get(Z);U.show=!1,U.id=void 0,this._unusedPointIndices.push(Z),this._clusterDirty=!0};function Rm(V){if(!s(V))return;let l=V.length;for(let Z=0;Z<l;++Z)V.get(Z).clusterShow=!0}function aQ(V){V.enabled||(s(V._clusterLabelCollection)&&V._clusterLabelCollection.destroy(),s(V._clusterBillboardCollection)&&V._clusterBillboardCollection.destroy(),s(V._clusterPointCollection)&&V._clusterPointCollection.destroy(),V._clusterLabelCollection=void 0,V._clusterBillboardCollection=void 0,V._clusterPointCollection=void 0,Rm(V._labelCollection),Rm(V._billboardCollection),Rm(V._pointCollection))}AW.prototype.update=function(V){if(!this.show)return;let l;s(this._labelCollection)&&this._labelCollection.length>0&&this._labelCollection.get(0)._glyphs.length===0&&(l=V.commandList,V.commandList=[],this._labelCollection.update(V),V.commandList=l),s(this._billboardCollection)&&this._billboardCollection.length>0&&!s(this._billboardCollection.get(0).width)&&(l=V.commandList,V.commandList=[],this._billboardCollection.update(V),V.commandList=l),this._enabledDirty&&(this._enabledDirty=!1,aQ(this),this._clusterDirty=!0),this._clusterDirty&&(this._clusterDirty=!1,this._cluster()),s(this._clusterLabelCollection)&&this._clusterLabelCollection.update(V),s(this._clusterBillboardCollection)&&this._clusterBillboardCollection.update(V),s(this._clusterPointCollection)&&this._clusterPointCollection.update(V),s(this._labelCollection)&&this._labelCollection.update(V),s(this._billboardCollection)&&this._billboardCollection.update(V),s(this._pointCollection)&&this._pointCollection.update(V)};AW.prototype.destroy=function(){this._labelCollection=this._labelCollection&&this._labelCollection.destroy(),this._billboardCollection=this._billboardCollection&&this._billboardCollection.destroy(),this._pointCollection=this._pointCollection&&this._pointCollection.destroy(),this._clusterLabelCollection=this._clusterLabelCollection&&this._clusterLabelCollection.destroy(),this._clusterBillboardCollection=this._clusterBillboardCollection&&this._clusterBillboardCollection.destroy(),this._clusterPointCollection=this._clusterPointCollection&&this._clusterPointCollection.destroy(),s(this._removeEventListener)&&(this._removeEventListener(),this._removeEventListener=void 0),this._labelCollection=void 0,this._billboardCollection=void 0,this._pointCollection=void 0,this._clusterBillboardCollection=void 0,this._clusterLabelCollection=void 0,this._clusterPointCollection=void 0,this._collectionIndicesByEntity=void 0,this._unusedLabelIndices=[],this._unusedBillboardIndices=[],this._unusedPointIndices=[],this._previousClusters=[],this._previousHeight=void 0,this._enabledDirty=!1,this._pixelRangeDirty=!1,this._minimumClusterSizeDirty=!1};var yr=AW;function cU(){this._array=[],this._hash={}}Object.defineProperties(cU.prototype,{length:{get:function(){return this._array.length}},values:{get:function(){return this._array}}});cU.prototype.contains=function(V){if(typeof V!="string"&&typeof V!="number")throw new I("key is required to be a string or number.");return s(this._hash[V])};cU.prototype.set=function(V,l){if(typeof V!="string"&&typeof V!="number")throw new I("key is required to be a string or number.");let Z=this._hash[V];l!==Z&&(this.remove(V),this._hash[V]=l,this._array.push(l))};cU.prototype.get=function(V){if(typeof V!="string"&&typeof V!="number")throw new I("key is required to be a string or number.");return this._hash[V]};cU.prototype.remove=function(V){if(s(V)&&typeof V!="string"&&typeof V!="number")throw new I("key is required to be a string or number.");let l=this._hash[V],Z=s(l);if(Z){let U=this._array;U.splice(U.indexOf(l),1),delete this._hash[V]}return Z};cU.prototype.removeAll=function(){let V=this._array;V.length>0&&(this._hash={},V.length=0)};var _A=cU;function Rl(V){V=a(V,a.EMPTY_OBJECT),this.start=s(V.start)?QV.clone(V.start):new QV,this.stop=s(V.stop)?QV.clone(V.stop):new QV,this.data=V.data,this.isStartIncluded=a(V.isStartIncluded,!0),this.isStopIncluded=a(V.isStopIncluded,!0)}Object.defineProperties(Rl.prototype,{isEmpty:{get:function(){let V=QV.compare(this.stop,this.start);return V<0||V===0&&(!this.isStartIncluded||!this.isStopIncluded)}}});var HU={start:void 0,stop:void 0,isStartIncluded:void 0,isStopIncluded:void 0,data:void 0};Rl.fromIso8601=function(V,l){v.typeOf.object("options",V),v.typeOf.string("options.iso8601",V.iso8601);let Z=V.iso8601.split("/");if(Z.length!==2)throw new I("options.iso8601 is an invalid ISO 8601 interval.");let U=QV.fromIso8601(Z[0]),A=QV.fromIso8601(Z[1]),t=a(V.isStartIncluded,!0),m=a(V.isStopIncluded,!0),i=V.data;return s(l)?(l.start=U,l.stop=A,l.isStartIncluded=t,l.isStopIncluded=m,l.data=i,l):(HU.start=U,HU.stop=A,HU.isStartIncluded=t,HU.isStopIncluded=m,HU.data=i,new Rl(HU))};Rl.toIso8601=function(V,l){return v.typeOf.object("timeInterval",V),`${QV.toIso8601(V.start,l)}/${QV.toIso8601(V.stop,l)}`};Rl.clone=function(V,l){if(s(V))return s(l)?(l.start=V.start,l.stop=V.stop,l.isStartIncluded=V.isStartIncluded,l.isStopIncluded=V.isStopIncluded,l.data=V.data,l):new Rl(V)};Rl.equals=function(V,l,Z){return V===l||s(V)&&s(l)&&(V.isEmpty&&l.isEmpty||V.isStartIncluded===l.isStartIncluded&&V.isStopIncluded===l.isStopIncluded&&QV.equals(V.start,l.start)&&QV.equals(V.stop,l.stop)&&(V.data===l.data||s(Z)&&Z(V.data,l.data)))};Rl.equalsEpsilon=function(V,l,Z,U){return Z=a(Z,0),V===l||s(V)&&s(l)&&(V.isEmpty&&l.isEmpty||V.isStartIncluded===l.isStartIncluded&&V.isStopIncluded===l.isStopIncluded&&QV.equalsEpsilon(V.start,l.start,Z)&&QV.equalsEpsilon(V.stop,l.stop,Z)&&(V.data===l.data||s(U)&&U(V.data,l.data)))};Rl.intersect=function(V,l,Z,U){if(v.typeOf.object("left",V),!s(l))return Rl.clone(Rl.EMPTY,Z);let A=V.start,t=V.stop,m=l.start,i=l.stop,n=QV.greaterThanOrEquals(m,A)&&QV.greaterThanOrEquals(t,m),o=!n&&QV.lessThanOrEquals(m,A)&&QV.lessThanOrEquals(A,i);if(!n&&!o)return Rl.clone(Rl.EMPTY,Z);let h=V.isStartIncluded,R=V.isStopIncluded,c=l.isStartIncluded,Q=l.isStopIncluded,T=QV.lessThan(t,i);return s(Z)||(Z=new Rl),Z.start=n?m:A,Z.isStartIncluded=h&&c||!QV.equals(m,A)&&(n&&c||o&&h),Z.stop=T?t:i,Z.isStopIncluded=T?R:R&&Q||!QV.equals(i,t)&&Q,Z.data=s(U)?U(V.data,l.data):V.data,Z};Rl.contains=function(V,l){if(v.typeOf.object("timeInterval",V),v.typeOf.object("julianDate",l),V.isEmpty)return!1;let Z=QV.compare(V.start,l);if(Z===0)return V.isStartIncluded;let U=QV.compare(l,V.stop);return U===0?V.isStopIncluded:Z<0&&U<0};Rl.prototype.clone=function(V){return Rl.clone(this,V)};Rl.prototype.equals=function(V,l){return Rl.equals(this,V,l)};Rl.prototype.equalsEpsilon=function(V,l,Z){return Rl.equalsEpsilon(this,V,l,Z)};Rl.prototype.toString=function(){return Rl.toIso8601(this)};Rl.EMPTY=Object.freeze(new Rl({start:new QV,stop:new QV,isStartIncluded:!1,isStopIncluded:!1}));var Ve=Rl;var vr=Object.freeze(QV.fromIso8601("0000-01-01T00:00:00Z")),zr=Object.freeze(QV.fromIso8601("9999-12-31T24:00:00Z")),rQ=Object.freeze(new Ve({start:vr,stop:zr})),oQ={MINIMUM_VALUE:vr,MAXIMUM_VALUE:zr,MAXIMUM_INTERVAL:rQ},bW=oQ;function hQ(V){if(V=a(V,a.EMPTY_OBJECT),!s(V.componentDatatype))throw new I("options.componentDatatype is required.");if(!s(V.componentsPerAttribute))throw new I("options.componentsPerAttribute is required.");if(V.componentsPerAttribute<1||V.componentsPerAttribute>4)throw new I("options.componentsPerAttribute must be between 1 and 4.");if(!s(V.value))throw new I("options.value is required.");this.componentDatatype=V.componentDatatype,this.componentsPerAttribute=V.componentsPerAttribute,this.normalize=a(V.normalize,!1),this.value=V.value}var EZ=hQ;var kr=`in vec4 v_startPlaneNormalEcAndHalfWidth;
in vec4 v_endPlaneNormalEcAndBatchId;
in vec4 v_rightPlaneEC; // Technically can compute distance for this here
in vec4 v_endEcAndStartEcX;
in vec4 v_texcoordNormalizationAndStartEcYZ;

#ifdef PER_INSTANCE_COLOR
in vec4 v_color;
#endif

void main(void)
{
    float logDepthOrDepth = czm_branchFreeTernary(czm_sceneMode == czm_sceneMode2D, gl_FragCoord.z, czm_unpackDepth(texture(czm_globeDepthTexture, gl_FragCoord.xy / czm_viewport.zw)));
    vec3 ecStart = vec3(v_endEcAndStartEcX.w, v_texcoordNormalizationAndStartEcYZ.zw);

    // Discard for sky
    if (logDepthOrDepth == 0.0) {
#ifdef DEBUG_SHOW_VOLUME
        out_FragColor = vec4(1.0, 0.0, 0.0, 0.5);
        return;
#else // DEBUG_SHOW_VOLUME
        discard;
#endif // DEBUG_SHOW_VOLUME
    }

    vec4 eyeCoordinate = czm_windowToEyeCoordinates(gl_FragCoord.xy, logDepthOrDepth);
    eyeCoordinate /= eyeCoordinate.w;

    float halfMaxWidth = v_startPlaneNormalEcAndHalfWidth.w * czm_metersPerPixel(eyeCoordinate);
    // Check distance of the eye coordinate against the right-facing plane
    float widthwiseDistance = czm_planeDistance(v_rightPlaneEC, eyeCoordinate.xyz);

    // Check eye coordinate against the mitering planes
    float distanceFromStart = czm_planeDistance(v_startPlaneNormalEcAndHalfWidth.xyz, -dot(ecStart, v_startPlaneNormalEcAndHalfWidth.xyz), eyeCoordinate.xyz);
    float distanceFromEnd = czm_planeDistance(v_endPlaneNormalEcAndBatchId.xyz, -dot(v_endEcAndStartEcX.xyz, v_endPlaneNormalEcAndBatchId.xyz), eyeCoordinate.xyz);

    if (abs(widthwiseDistance) > halfMaxWidth || distanceFromStart < 0.0 || distanceFromEnd < 0.0) {
#ifdef DEBUG_SHOW_VOLUME
        out_FragColor = vec4(1.0, 0.0, 0.0, 0.5);
        return;
#else // DEBUG_SHOW_VOLUME
        discard;
#endif // DEBUG_SHOW_VOLUME
    }

    // Check distance of the eye coordinate against start and end planes with normals in the right plane.
    // For computing unskewed lengthwise texture coordinate.
    // Can also be used for clipping extremely pointy miters, but in practice unnecessary because of miter breaking.

    // aligned plane: cross the right plane normal with miter plane normal, then cross the result with right again to point it more "forward"
    vec3 alignedPlaneNormal;

    // start aligned plane
    alignedPlaneNormal = cross(v_rightPlaneEC.xyz, v_startPlaneNormalEcAndHalfWidth.xyz);
    alignedPlaneNormal = normalize(cross(alignedPlaneNormal, v_rightPlaneEC.xyz));
    distanceFromStart = czm_planeDistance(alignedPlaneNormal, -dot(alignedPlaneNormal, ecStart), eyeCoordinate.xyz);

    // end aligned plane
    alignedPlaneNormal = cross(v_rightPlaneEC.xyz, v_endPlaneNormalEcAndBatchId.xyz);
    alignedPlaneNormal = normalize(cross(alignedPlaneNormal, v_rightPlaneEC.xyz));
    distanceFromEnd = czm_planeDistance(alignedPlaneNormal, -dot(alignedPlaneNormal, v_endEcAndStartEcX.xyz), eyeCoordinate.xyz);

#ifdef PER_INSTANCE_COLOR
    out_FragColor = czm_gammaCorrect(v_color);
#else // PER_INSTANCE_COLOR
    // Clamp - distance to aligned planes may be negative due to mitering,
    // so fragment texture coordinate might be out-of-bounds.
    float s = clamp(distanceFromStart / (distanceFromStart + distanceFromEnd), 0.0, 1.0);
    s = (s * v_texcoordNormalizationAndStartEcYZ.x) + v_texcoordNormalizationAndStartEcYZ.y;
    float t = (widthwiseDistance + halfMaxWidth) / (2.0 * halfMaxWidth);

    czm_materialInput materialInput;

    materialInput.s = s;
    materialInput.st = vec2(s, t);
    materialInput.str = vec3(s, t, 0.0);

    czm_material material = czm_getMaterial(materialInput);
    out_FragColor = vec4(material.diffuse + material.emission, material.alpha);
#endif // PER_INSTANCE_COLOR

    // Premultiply alpha. Required for classification primitives on translucent globe.
    out_FragColor.rgb *= out_FragColor.a;

    czm_writeDepthClamp();
}
`;var Hr=`in vec3 v_forwardDirectionEC;
in vec3 v_texcoordNormalizationAndHalfWidth;
in float v_batchId;

#ifdef PER_INSTANCE_COLOR
in vec4 v_color;
#else
in vec2 v_alignedPlaneDistances;
in float v_texcoordT;
#endif

float rayPlaneDistanceUnsafe(vec3 origin, vec3 direction, vec3 planeNormal, float planeDistance) {
    // We don't expect the ray to ever be parallel to the plane
    return (-planeDistance - dot(planeNormal, origin)) / dot(planeNormal, direction);
}

void main(void)
{
    vec4 eyeCoordinate = gl_FragCoord;
    eyeCoordinate /= eyeCoordinate.w;

#ifdef PER_INSTANCE_COLOR
    out_FragColor = czm_gammaCorrect(v_color);
#else // PER_INSTANCE_COLOR
    // Use distances for planes aligned with segment to prevent skew in dashing
    float distanceFromStart = rayPlaneDistanceUnsafe(eyeCoordinate.xyz, -v_forwardDirectionEC, v_forwardDirectionEC.xyz, v_alignedPlaneDistances.x);
    float distanceFromEnd = rayPlaneDistanceUnsafe(eyeCoordinate.xyz, v_forwardDirectionEC, -v_forwardDirectionEC.xyz, v_alignedPlaneDistances.y);

    // Clamp - distance to aligned planes may be negative due to mitering
    distanceFromStart = max(0.0, distanceFromStart);
    distanceFromEnd = max(0.0, distanceFromEnd);

    float s = distanceFromStart / (distanceFromStart + distanceFromEnd);
    s = (s * v_texcoordNormalizationAndHalfWidth.x) + v_texcoordNormalizationAndHalfWidth.y;

    czm_materialInput materialInput;

    materialInput.s = s;
    materialInput.st = vec2(s, v_texcoordT);
    materialInput.str = vec3(s, v_texcoordT, 0.0);

    czm_material material = czm_getMaterial(materialInput);
    out_FragColor = vec4(material.diffuse + material.emission, material.alpha);
#endif // PER_INSTANCE_COLOR
}
`;var Lr=`in vec3 position3DHigh;
in vec3 position3DLow;

in vec4 startHiAndForwardOffsetX;
in vec4 startLoAndForwardOffsetY;
in vec4 startNormalAndForwardOffsetZ;
in vec4 endNormalAndTextureCoordinateNormalizationX;
in vec4 rightNormalAndTextureCoordinateNormalizationY;
in vec4 startHiLo2D;
in vec4 offsetAndRight2D;
in vec4 startEndNormals2D;
in vec2 texcoordNormalization2D;

in float batchId;

out vec3 v_forwardDirectionEC;
out vec3 v_texcoordNormalizationAndHalfWidth;
out float v_batchId;

// For materials
#ifdef WIDTH_VARYING
out float v_width;
#endif
#ifdef ANGLE_VARYING
out float v_polylineAngle;
#endif

#ifdef PER_INSTANCE_COLOR
out vec4 v_color;
#else
out vec2 v_alignedPlaneDistances;
out float v_texcoordT;
#endif

// Morphing planes using SLERP or NLERP doesn't seem to work, so instead draw the material directly on the shadow volume.
// Morph views are from very far away and aren't meant to be used precisely, so this should be sufficient.
void main()
{
    v_batchId = batchId;

    // Start position
    vec4 posRelativeToEye2D = czm_translateRelativeToEye(vec3(0.0, startHiLo2D.xy), vec3(0.0, startHiLo2D.zw));
    vec4 posRelativeToEye3D = czm_translateRelativeToEye(startHiAndForwardOffsetX.xyz, startLoAndForwardOffsetY.xyz);
    vec4 posRelativeToEye = czm_columbusViewMorph(posRelativeToEye2D, posRelativeToEye3D, czm_morphTime);
    vec3 posEc2D = (czm_modelViewRelativeToEye * posRelativeToEye2D).xyz;
    vec3 posEc3D = (czm_modelViewRelativeToEye * posRelativeToEye3D).xyz;
    vec3 startEC = (czm_modelViewRelativeToEye * posRelativeToEye).xyz;

    // Start plane
    vec4 startPlane2D;
    vec4 startPlane3D;
    startPlane2D.xyz = czm_normal * vec3(0.0, startEndNormals2D.xy);
    startPlane3D.xyz = czm_normal * startNormalAndForwardOffsetZ.xyz;
    startPlane2D.w = -dot(startPlane2D.xyz, posEc2D);
    startPlane3D.w = -dot(startPlane3D.xyz, posEc3D);

    // Right plane
    vec4 rightPlane2D;
    vec4 rightPlane3D;
    rightPlane2D.xyz = czm_normal * vec3(0.0, offsetAndRight2D.zw);
    rightPlane3D.xyz = czm_normal * rightNormalAndTextureCoordinateNormalizationY.xyz;
    rightPlane2D.w = -dot(rightPlane2D.xyz, posEc2D);
    rightPlane3D.w = -dot(rightPlane3D.xyz, posEc3D);

    // End position
    posRelativeToEye2D = posRelativeToEye2D + vec4(0.0, offsetAndRight2D.xy, 0.0);
    posRelativeToEye3D = posRelativeToEye3D + vec4(startHiAndForwardOffsetX.w, startLoAndForwardOffsetY.w, startNormalAndForwardOffsetZ.w, 0.0);
    posRelativeToEye = czm_columbusViewMorph(posRelativeToEye2D, posRelativeToEye3D, czm_morphTime);
    posEc2D = (czm_modelViewRelativeToEye * posRelativeToEye2D).xyz;
    posEc3D = (czm_modelViewRelativeToEye * posRelativeToEye3D).xyz;
    vec3 endEC = (czm_modelViewRelativeToEye * posRelativeToEye).xyz;
    vec3 forwardEc3D = czm_normal * normalize(vec3(startHiAndForwardOffsetX.w, startLoAndForwardOffsetY.w, startNormalAndForwardOffsetZ.w));
    vec3 forwardEc2D = czm_normal * normalize(vec3(0.0, offsetAndRight2D.xy));

    // End plane
    vec4 endPlane2D;
    vec4 endPlane3D;
    endPlane2D.xyz = czm_normal * vec3(0.0, startEndNormals2D.zw);
    endPlane3D.xyz = czm_normal * endNormalAndTextureCoordinateNormalizationX.xyz;
    endPlane2D.w = -dot(endPlane2D.xyz, posEc2D);
    endPlane3D.w = -dot(endPlane3D.xyz, posEc3D);

    // Forward direction
    v_forwardDirectionEC = normalize(endEC - startEC);

    vec2 cleanTexcoordNormalization2D;
    cleanTexcoordNormalization2D.x = abs(texcoordNormalization2D.x);
    cleanTexcoordNormalization2D.y = czm_branchFreeTernary(texcoordNormalization2D.y > 1.0, 0.0, abs(texcoordNormalization2D.y));
    vec2 cleanTexcoordNormalization3D;
    cleanTexcoordNormalization3D.x = abs(endNormalAndTextureCoordinateNormalizationX.w);
    cleanTexcoordNormalization3D.y = rightNormalAndTextureCoordinateNormalizationY.w;
    cleanTexcoordNormalization3D.y = czm_branchFreeTernary(cleanTexcoordNormalization3D.y > 1.0, 0.0, abs(cleanTexcoordNormalization3D.y));

    v_texcoordNormalizationAndHalfWidth.xy = mix(cleanTexcoordNormalization2D, cleanTexcoordNormalization3D, czm_morphTime);

#ifdef PER_INSTANCE_COLOR
    v_color = czm_batchTable_color(batchId);
#else // PER_INSTANCE_COLOR
    // For computing texture coordinates

    v_alignedPlaneDistances.x = -dot(v_forwardDirectionEC, startEC);
    v_alignedPlaneDistances.y = -dot(-v_forwardDirectionEC, endEC);
#endif // PER_INSTANCE_COLOR

#ifdef WIDTH_VARYING
    float width = czm_batchTable_width(batchId);
    float halfWidth = width * 0.5;
    v_width = width;
    v_texcoordNormalizationAndHalfWidth.z = halfWidth;
#else
    float halfWidth = 0.5 * czm_batchTable_width(batchId);
    v_texcoordNormalizationAndHalfWidth.z = halfWidth;
#endif

    // Compute a normal along which to "push" the position out, extending the miter depending on view distance.
    // Position has already been "pushed" by unit length along miter normal, and miter normals are encoded in the planes.
    // Decode the normal to use at this specific vertex, push the position back, and then push to where it needs to be.
    // Since this is morphing, compute both 3D and 2D positions and then blend.

    // ****** 3D ******
    // Check distance to the end plane and start plane, pick the plane that is closer
    vec4 positionEc3D = czm_modelViewRelativeToEye * czm_translateRelativeToEye(position3DHigh, position3DLow); // w = 1.0, see czm_computePosition
    float absStartPlaneDistance = abs(czm_planeDistance(startPlane3D, positionEc3D.xyz));
    float absEndPlaneDistance = abs(czm_planeDistance(endPlane3D, positionEc3D.xyz));
    vec3 planeDirection = czm_branchFreeTernary(absStartPlaneDistance < absEndPlaneDistance, startPlane3D.xyz, endPlane3D.xyz);
    vec3 upOrDown = normalize(cross(rightPlane3D.xyz, planeDirection)); // Points "up" for start plane, "down" at end plane.
    vec3 normalEC = normalize(cross(planeDirection, upOrDown));         // In practice, the opposite seems to work too.

    // Nudge the top vertex upwards to prevent flickering
    vec3 geodeticSurfaceNormal = normalize(cross(normalEC, forwardEc3D));
    geodeticSurfaceNormal *= float(0.0 <= rightNormalAndTextureCoordinateNormalizationY.w && rightNormalAndTextureCoordinateNormalizationY.w <= 1.0);
    geodeticSurfaceNormal *= MAX_TERRAIN_HEIGHT;
    positionEc3D.xyz += geodeticSurfaceNormal;

    // Determine if this vertex is on the "left" or "right"
    normalEC *= sign(endNormalAndTextureCoordinateNormalizationX.w);

    // A "perfect" implementation would push along normals according to the angle against forward.
    // In practice, just pushing the normal out by halfWidth is sufficient for morph views.
    positionEc3D.xyz += halfWidth * max(0.0, czm_metersPerPixel(positionEc3D)) * normalEC; // prevent artifacts when czm_metersPerPixel is negative (behind camera)

    // ****** 2D ******
    // Check distance to the end plane and start plane, pick the plane that is closer
    vec4 positionEc2D = czm_modelViewRelativeToEye * czm_translateRelativeToEye(position2DHigh.zxy, position2DLow.zxy); // w = 1.0, see czm_computePosition
    absStartPlaneDistance = abs(czm_planeDistance(startPlane2D, positionEc2D.xyz));
    absEndPlaneDistance = abs(czm_planeDistance(endPlane2D, positionEc2D.xyz));
    planeDirection = czm_branchFreeTernary(absStartPlaneDistance < absEndPlaneDistance, startPlane2D.xyz, endPlane2D.xyz);
    upOrDown = normalize(cross(rightPlane2D.xyz, planeDirection)); // Points "up" for start plane, "down" at end plane.
    normalEC = normalize(cross(planeDirection, upOrDown));         // In practice, the opposite seems to work too.

    // Nudge the top vertex upwards to prevent flickering
    geodeticSurfaceNormal = normalize(cross(normalEC, forwardEc2D));
    geodeticSurfaceNormal *= float(0.0 <= texcoordNormalization2D.y && texcoordNormalization2D.y <= 1.0);
    geodeticSurfaceNormal *= MAX_TERRAIN_HEIGHT;
    positionEc2D.xyz += geodeticSurfaceNormal;

    // Determine if this vertex is on the "left" or "right"
    normalEC *= sign(texcoordNormalization2D.x);
#ifndef PER_INSTANCE_COLOR
    // Use vertex's sidedness to compute its texture coordinate.
    v_texcoordT = clamp(sign(texcoordNormalization2D.x), 0.0, 1.0);
#endif

    // A "perfect" implementation would push along normals according to the angle against forward.
    // In practice, just pushing the normal out by halfWidth is sufficient for morph views.
    positionEc2D.xyz += halfWidth * max(0.0, czm_metersPerPixel(positionEc2D)) * normalEC; // prevent artifacts when czm_metersPerPixel is negative (behind camera)

    // Blend for actual position
    gl_Position = czm_projection * mix(positionEc2D, positionEc3D, czm_morphTime);

#ifdef ANGLE_VARYING
    // Approximate relative screen space direction of the line.
    vec2 approxLineDirection = normalize(vec2(v_forwardDirectionEC.x, -v_forwardDirectionEC.y));
    approxLineDirection.y = czm_branchFreeTernary(approxLineDirection.x == 0.0 && approxLineDirection.y == 0.0, -1.0, approxLineDirection.y);
    v_polylineAngle = czm_fastApproximateAtan(approxLineDirection.x, approxLineDirection.y);
#endif
}
`;var Kr=`in vec3 position3DHigh;
in vec3 position3DLow;

// In 2D and in 3D, texture coordinate normalization component signs encodes:
// * X sign - sidedness relative to right plane
// * Y sign - is negative OR magnitude is greater than 1.0 if vertex is on bottom of volume
#ifndef COLUMBUS_VIEW_2D
in vec4 startHiAndForwardOffsetX;
in vec4 startLoAndForwardOffsetY;
in vec4 startNormalAndForwardOffsetZ;
in vec4 endNormalAndTextureCoordinateNormalizationX;
in vec4 rightNormalAndTextureCoordinateNormalizationY;
#else
in vec4 startHiLo2D;
in vec4 offsetAndRight2D;
in vec4 startEndNormals2D;
in vec2 texcoordNormalization2D;
#endif

in float batchId;

out vec4 v_startPlaneNormalEcAndHalfWidth;
out vec4 v_endPlaneNormalEcAndBatchId;
out vec4 v_rightPlaneEC;
out vec4 v_endEcAndStartEcX;
out vec4 v_texcoordNormalizationAndStartEcYZ;

// For materials
#ifdef WIDTH_VARYING
out float v_width;
#endif
#ifdef ANGLE_VARYING
out float v_polylineAngle;
#endif

#ifdef PER_INSTANCE_COLOR
out vec4 v_color;
#endif

void main()
{
#ifdef COLUMBUS_VIEW_2D
    vec3 ecStart = (czm_modelViewRelativeToEye * czm_translateRelativeToEye(vec3(0.0, startHiLo2D.xy), vec3(0.0, startHiLo2D.zw))).xyz;

    vec3 forwardDirectionEC = czm_normal * vec3(0.0, offsetAndRight2D.xy);
    vec3 ecEnd = forwardDirectionEC + ecStart;
    forwardDirectionEC = normalize(forwardDirectionEC);

    // Right plane
    v_rightPlaneEC.xyz = czm_normal * vec3(0.0, offsetAndRight2D.zw);
    v_rightPlaneEC.w = -dot(v_rightPlaneEC.xyz, ecStart);

    // start plane
    vec4 startPlaneEC;
    startPlaneEC.xyz =  czm_normal * vec3(0.0, startEndNormals2D.xy);
    startPlaneEC.w = -dot(startPlaneEC.xyz, ecStart);

    // end plane
    vec4 endPlaneEC;
    endPlaneEC.xyz =  czm_normal * vec3(0.0, startEndNormals2D.zw);
    endPlaneEC.w = -dot(endPlaneEC.xyz, ecEnd);

    v_texcoordNormalizationAndStartEcYZ.x = abs(texcoordNormalization2D.x);
    v_texcoordNormalizationAndStartEcYZ.y = texcoordNormalization2D.y;

#else // COLUMBUS_VIEW_2D
    vec3 ecStart = (czm_modelViewRelativeToEye * czm_translateRelativeToEye(startHiAndForwardOffsetX.xyz, startLoAndForwardOffsetY.xyz)).xyz;
    vec3 offset = czm_normal * vec3(startHiAndForwardOffsetX.w, startLoAndForwardOffsetY.w, startNormalAndForwardOffsetZ.w);
    vec3 ecEnd = ecStart + offset;

    vec3 forwardDirectionEC = normalize(offset);

    // start plane
    vec4 startPlaneEC;
    startPlaneEC.xyz = czm_normal * startNormalAndForwardOffsetZ.xyz;
    startPlaneEC.w = -dot(startPlaneEC.xyz, ecStart);

    // end plane
    vec4 endPlaneEC;
    endPlaneEC.xyz = czm_normal * endNormalAndTextureCoordinateNormalizationX.xyz;
    endPlaneEC.w = -dot(endPlaneEC.xyz, ecEnd);

    // Right plane
    v_rightPlaneEC.xyz = czm_normal * rightNormalAndTextureCoordinateNormalizationY.xyz;
    v_rightPlaneEC.w = -dot(v_rightPlaneEC.xyz, ecStart);

    v_texcoordNormalizationAndStartEcYZ.x = abs(endNormalAndTextureCoordinateNormalizationX.w);
    v_texcoordNormalizationAndStartEcYZ.y = rightNormalAndTextureCoordinateNormalizationY.w;

#endif // COLUMBUS_VIEW_2D

    v_endEcAndStartEcX.xyz = ecEnd;
    v_endEcAndStartEcX.w = ecStart.x;
    v_texcoordNormalizationAndStartEcYZ.zw = ecStart.yz;

#ifdef PER_INSTANCE_COLOR
    v_color = czm_batchTable_color(batchId);
#endif // PER_INSTANCE_COLOR

    // Compute a normal along which to "push" the position out, extending the miter depending on view distance.
    // Position has already been "pushed" by unit length along miter normal, and miter normals are encoded in the planes.
    // Decode the normal to use at this specific vertex, push the position back, and then push to where it needs to be.
    vec4 positionRelativeToEye = czm_computePosition();

    // Check distance to the end plane and start plane, pick the plane that is closer
    vec4 positionEC = czm_modelViewRelativeToEye * positionRelativeToEye; // w = 1.0, see czm_computePosition
    float absStartPlaneDistance = abs(czm_planeDistance(startPlaneEC, positionEC.xyz));
    float absEndPlaneDistance = abs(czm_planeDistance(endPlaneEC, positionEC.xyz));
    vec3 planeDirection = czm_branchFreeTernary(absStartPlaneDistance < absEndPlaneDistance, startPlaneEC.xyz, endPlaneEC.xyz);
    vec3 upOrDown = normalize(cross(v_rightPlaneEC.xyz, planeDirection)); // Points "up" for start plane, "down" at end plane.
    vec3 normalEC = normalize(cross(planeDirection, upOrDown));           // In practice, the opposite seems to work too.

    // Extrude bottom vertices downward for far view distances, like for GroundPrimitives
    upOrDown = cross(forwardDirectionEC, normalEC);
    upOrDown = float(czm_sceneMode == czm_sceneMode3D) * upOrDown;
    upOrDown = float(v_texcoordNormalizationAndStartEcYZ.y > 1.0 || v_texcoordNormalizationAndStartEcYZ.y < 0.0) * upOrDown;
    upOrDown = min(GLOBE_MINIMUM_ALTITUDE, czm_geometricToleranceOverMeter * length(positionRelativeToEye.xyz)) * upOrDown;
    positionEC.xyz += upOrDown;

    v_texcoordNormalizationAndStartEcYZ.y = czm_branchFreeTernary(v_texcoordNormalizationAndStartEcYZ.y > 1.0, 0.0, abs(v_texcoordNormalizationAndStartEcYZ.y));

    // Determine distance along normalEC to push for a volume of appropriate width.
    // Make volumes about double pixel width for a conservative fit - in practice the
    // extra cost here is minimal compared to the loose volume heights.
    //
    // N = normalEC (guaranteed "right-facing")
    // R = rightEC
    // p = angle between N and R
    // w = distance to push along R if R == N
    // d = distance to push along N
    //
    //   N   R
    //  {  p| }      * cos(p) = dot(N, R) = w / d
    //  d  |  |w    * d = w / dot(N, R)
    //    { | }
    //       o---------- polyline segment ---->
    //
    float width = czm_batchTable_width(batchId);
#ifdef WIDTH_VARYING
    v_width = width;
#endif

    v_startPlaneNormalEcAndHalfWidth.xyz = startPlaneEC.xyz;
    v_startPlaneNormalEcAndHalfWidth.w = width * 0.5;

    v_endPlaneNormalEcAndBatchId.xyz = endPlaneEC.xyz;
    v_endPlaneNormalEcAndBatchId.w = batchId;

    width = width * max(0.0, czm_metersPerPixel(positionEC)); // width = distance to push along R
    width = width / dot(normalEC, v_rightPlaneEC.xyz); // width = distance to push along N

    // Determine if this vertex is on the "left" or "right"
#ifdef COLUMBUS_VIEW_2D
        normalEC *= sign(texcoordNormalization2D.x);
#else
        normalEC *= sign(endNormalAndTextureCoordinateNormalizationX.w);
#endif

    positionEC.xyz += width * normalEC;
    gl_Position = czm_depthClamp(czm_projection * positionEC);

#ifdef ANGLE_VARYING
    // Approximate relative screen space direction of the line.
    vec2 approxLineDirection = normalize(vec2(forwardDirectionEC.x, -forwardDirectionEC.y));
    approxLineDirection.y = czm_branchFreeTernary(approxLineDirection.x == 0.0 && approxLineDirection.y == 0.0, -1.0, approxLineDirection.y);
    v_polylineAngle = czm_fastApproximateAtan(approxLineDirection.x, approxLineDirection.y);
#endif
}
`;var Pr={TERRAIN:0,CESIUM_3D_TILE:1,BOTH:2};Pr.NUMBER_OF_CLASSIFICATION_TYPES=3;var vZ=Object.freeze(Pr);var RQ={FRONT:J.FRONT,BACK:J.BACK,FRONT_AND_BACK:J.FRONT_AND_BACK},uW=Object.freeze(RQ);var le=`in vec4 v_color;

void main()
{
    out_FragColor = czm_gammaCorrect(v_color);
}
`;var jr=`in vec3 position3DHigh;
in vec3 position3DLow;
in vec3 prevPosition3DHigh;
in vec3 prevPosition3DLow;
in vec3 nextPosition3DHigh;
in vec3 nextPosition3DLow;
in vec2 expandAndWidth;
in vec4 color;
in float batchId;

out vec4 v_color;

void main()
{
    float expandDir = expandAndWidth.x;
    float width = abs(expandAndWidth.y) + 0.5;
    bool usePrev = expandAndWidth.y < 0.0;

    vec4 p = czm_computePosition();
    vec4 prev = czm_computePrevPosition();
    vec4 next = czm_computeNextPosition();

    float angle;
    vec4 positionWC = getPolylineWindowCoordinates(p, prev, next, expandDir, width, usePrev, angle);
    gl_Position = czm_viewportOrthographic * positionWC;

    v_color = color;
}
`;var Ze=`void clipLineSegmentToNearPlane(
    vec3 p0,
    vec3 p1,
    out vec4 positionWC,
    out bool clipped,
    out bool culledByNearPlane,
    out vec4 clippedPositionEC)
{
    culledByNearPlane = false;
    clipped = false;

    vec3 p0ToP1 = p1 - p0;
    float magnitude = length(p0ToP1);
    vec3 direction = normalize(p0ToP1);

    // Distance that p0 is behind the near plane. Negative means p0 is
    // in front of the near plane.
    float endPoint0Distance =  czm_currentFrustum.x + p0.z;

    // Camera looks down -Z.
    // When moving a point along +Z: LESS VISIBLE
    //   * Points in front of the camera move closer to the camera.
    //   * Points behind the camrea move farther away from the camera.
    // When moving a point along -Z: MORE VISIBLE
    //   * Points in front of the camera move farther away from the camera.
    //   * Points behind the camera move closer to the camera.

    // Positive denominator: -Z, becoming more visible
    // Negative denominator: +Z, becoming less visible
    // Nearly zero: parallel to near plane
    float denominator = -direction.z;

    if (endPoint0Distance > 0.0 && abs(denominator) < czm_epsilon7)
    {
        // p0 is behind the near plane and the line to p1 is nearly parallel to
        // the near plane, so cull the segment completely.
        culledByNearPlane = true;
    }
    else if (endPoint0Distance > 0.0)
    {
        // p0 is behind the near plane, and the line to p1 is moving distinctly
        // toward or away from it.

        // t = (-plane distance - dot(plane normal, ray origin)) / dot(plane normal, ray direction)
        float t = endPoint0Distance / denominator;
        if (t < 0.0 || t > magnitude)
        {
            // Near plane intersection is not between the two points.
            // We already confirmed p0 is behind the naer plane, so now
            // we know the entire segment is behind it.
            culledByNearPlane = true;
        }
        else
        {
            // Segment crosses the near plane, update p0 to lie exactly on it.
            p0 = p0 + t * direction;

            // Numerical noise might put us a bit on the wrong side of the near plane.
            // Don't let that happen.
            p0.z = min(p0.z, -czm_currentFrustum.x);

            clipped = true;
        }
    }

    clippedPositionEC = vec4(p0, 1.0);
    positionWC = czm_eyeToWindowCoordinates(clippedPositionEC);
}

vec4 getPolylineWindowCoordinatesEC(vec4 positionEC, vec4 prevEC, vec4 nextEC, float expandDirection, float width, bool usePrevious, out float angle)
{
    // expandDirection +1 is to the _left_ when looking from positionEC toward nextEC.

#ifdef POLYLINE_DASH
    // Compute the window coordinates of the points.
    vec4 positionWindow = czm_eyeToWindowCoordinates(positionEC);
    vec4 previousWindow = czm_eyeToWindowCoordinates(prevEC);
    vec4 nextWindow = czm_eyeToWindowCoordinates(nextEC);

    // Determine the relative screen space direction of the line.
    vec2 lineDir;
    if (usePrevious) {
        lineDir = normalize(positionWindow.xy - previousWindow.xy);
    }
    else {
        lineDir = normalize(nextWindow.xy - positionWindow.xy);
    }
    angle = atan(lineDir.x, lineDir.y) - 1.570796327; // precomputed atan(1,0)

    // Quantize the angle so it doesn't change rapidly between segments.
    angle = floor(angle / czm_piOverFour + 0.5) * czm_piOverFour;
#endif

    vec4 clippedPrevWC, clippedPrevEC;
    bool prevSegmentClipped, prevSegmentCulled;
    clipLineSegmentToNearPlane(prevEC.xyz, positionEC.xyz, clippedPrevWC, prevSegmentClipped, prevSegmentCulled, clippedPrevEC);

    vec4 clippedNextWC, clippedNextEC;
    bool nextSegmentClipped, nextSegmentCulled;
    clipLineSegmentToNearPlane(nextEC.xyz, positionEC.xyz, clippedNextWC, nextSegmentClipped, nextSegmentCulled, clippedNextEC);

    bool segmentClipped, segmentCulled;
    vec4 clippedPositionWC, clippedPositionEC;
    clipLineSegmentToNearPlane(positionEC.xyz, usePrevious ? prevEC.xyz : nextEC.xyz, clippedPositionWC, segmentClipped, segmentCulled, clippedPositionEC);

    if (segmentCulled)
    {
        return vec4(0.0, 0.0, 0.0, 1.0);
    }

    vec2 directionToPrevWC = normalize(clippedPrevWC.xy - clippedPositionWC.xy);
    vec2 directionToNextWC = normalize(clippedNextWC.xy - clippedPositionWC.xy);

    // If a segment was culled, we can't use the corresponding direction
    // computed above. We should never see both of these be true without
    // \`segmentCulled\` above also being true.
    if (prevSegmentCulled)
    {
        directionToPrevWC = -directionToNextWC;
    }
    else if (nextSegmentCulled)
    {
        directionToNextWC = -directionToPrevWC;
    }

    vec2 thisSegmentForwardWC, otherSegmentForwardWC;
    if (usePrevious)
    {
        thisSegmentForwardWC = -directionToPrevWC;
        otherSegmentForwardWC = directionToNextWC;
    }
    else
    {
        thisSegmentForwardWC = directionToNextWC;
        otherSegmentForwardWC =  -directionToPrevWC;
    }

    vec2 thisSegmentLeftWC = vec2(-thisSegmentForwardWC.y, thisSegmentForwardWC.x);

    vec2 leftWC = thisSegmentLeftWC;
    float expandWidth = width * 0.5;

    // When lines are split at the anti-meridian, the position may be at the
    // same location as the next or previous position, and we need to handle
    // that to avoid producing NaNs.
    if (!czm_equalsEpsilon(prevEC.xyz - positionEC.xyz, vec3(0.0), czm_epsilon1) && !czm_equalsEpsilon(nextEC.xyz - positionEC.xyz, vec3(0.0), czm_epsilon1))
    {
        vec2 otherSegmentLeftWC = vec2(-otherSegmentForwardWC.y, otherSegmentForwardWC.x);

        vec2 leftSumWC = thisSegmentLeftWC + otherSegmentLeftWC;
        float leftSumLength = length(leftSumWC);
        leftWC = leftSumLength < czm_epsilon6 ? thisSegmentLeftWC : (leftSumWC / leftSumLength);

        // The sine of the angle between the two vectors is given by the formula
        //         |a x b| = |a||b|sin(theta)
        // which is
        //     float sinAngle = length(cross(vec3(leftWC, 0.0), vec3(-thisSegmentForwardWC, 0.0)));
        // Because the z components of both vectors are zero, the x and y coordinate will be zero.
        // Therefore, the sine of the angle is just the z component of the cross product.
        vec2 u = -thisSegmentForwardWC;
        vec2 v = leftWC;
        float sinAngle = abs(u.x * v.y - u.y * v.x);
        expandWidth = clamp(expandWidth / sinAngle, 0.0, width * 2.0);
    }

    vec2 offset = leftWC * expandDirection * expandWidth * czm_pixelRatio;
    return vec4(clippedPositionWC.xy + offset, -clippedPositionWC.z, 1.0) * (czm_projection * clippedPositionEC).w;
}

vec4 getPolylineWindowCoordinates(vec4 position, vec4 previous, vec4 next, float expandDirection, float width, bool usePrevious, out float angle)
{
    vec4 positionEC = czm_modelViewRelativeToEye * position;
    vec4 prevEC = czm_modelViewRelativeToEye * previous;
    vec4 nextEC = czm_modelViewRelativeToEye * next;
    return getPolylineWindowCoordinatesEC(positionEC, prevEC, nextEC, expandDirection, width, usePrevious, angle);
}
`;function LU(V){V=a(V,a.EMPTY_OBJECT),this.material=V.material,this.translucent=a(V.translucent,!0),this._vertexShaderSource=V.vertexShaderSource,this._fragmentShaderSource=V.fragmentShaderSource,this._renderState=V.renderState,this._closed=a(V.closed,!1)}Object.defineProperties(LU.prototype,{vertexShaderSource:{get:function(){return this._vertexShaderSource}},fragmentShaderSource:{get:function(){return this._fragmentShaderSource}},renderState:{get:function(){return this._renderState}},closed:{get:function(){return this._closed}}});LU.prototype.getFragmentShaderSource=function(){let V=[];return this.flat&&V.push("#define FLAT"),this.faceForward&&V.push("#define FACE_FORWARD"),s(this.material)&&V.push(this.material.shaderSource),V.push(this.fragmentShaderSource),V.join(`
`)};LU.prototype.isTranslucent=function(){return s(this.material)&&this.material.isTranslucent()||!s(this.material)&&this.translucent};LU.prototype.getRenderState=function(){let V=this.isTranslucent(),l=PZ(this.renderState,!1);return V?(l.depthMask=!1,l.blending=DZ.ALPHA_BLEND):l.depthMask=!0,l};LU.getDefaultRenderState=function(V,l,Z){let U={depthTest:{enabled:!0}};return V&&(U.depthMask=!1,U.blending=DZ.ALPHA_BLEND),l&&(U.cull={enabled:!0,face:uW.BACK}),s(Z)&&(U=jZ(Z,U,!0)),U};var dZ=LU;var Bm=`${Ze}
${jr}`,dQ=le;CW.isInternetExplorer()||(Bm=`#define CLIP_POLYLINE 
${Bm}`);function SU(V){V=a(V,a.EMPTY_OBJECT);let l=a(V.translucent,!0),Z=!1,U=SU.VERTEX_FORMAT;this.material=void 0,this.translucent=l,this._vertexShaderSource=a(V.vertexShaderSource,Bm),this._fragmentShaderSource=a(V.fragmentShaderSource,dQ),this._renderState=dZ.getDefaultRenderState(l,Z,V.renderState),this._closed=Z,this._vertexFormat=U}Object.defineProperties(SU.prototype,{vertexShaderSource:{get:function(){return this._vertexShaderSource}},fragmentShaderSource:{get:function(){return this._fragmentShaderSource}},renderState:{get:function(){return this._renderState}},closed:{get:function(){return this._closed}},vertexFormat:{get:function(){return this._vertexFormat}}});SU.VERTEX_FORMAT=dU.POSITION_ONLY;SU.prototype.getFragmentShaderSource=dZ.prototype.getFragmentShaderSource;SU.prototype.isTranslucent=dZ.prototype.isTranslucent;SU.prototype.getRenderState=dZ.prototype.getRenderState;var Fm=SU;var qr=`in vec3 position3DHigh;
in vec3 position3DLow;
in vec3 prevPosition3DHigh;
in vec3 prevPosition3DLow;
in vec3 nextPosition3DHigh;
in vec3 nextPosition3DLow;
in vec2 expandAndWidth;
in vec2 st;
in float batchId;

out float v_width;
out vec2 v_st;
out float v_polylineAngle;

void main()
{
    float expandDir = expandAndWidth.x;
    float width = abs(expandAndWidth.y) + 0.5;
    bool usePrev = expandAndWidth.y < 0.0;

    vec4 p = czm_computePosition();
    vec4 prev = czm_computePrevPosition();
    vec4 next = czm_computeNextPosition();

    float angle;
    vec4 positionWC = getPolylineWindowCoordinates(p, prev, next, expandDir, width, usePrev, angle);
    gl_Position = czm_viewportOrthographic * positionWC;

    v_width = width;
    v_st.s = st.s;
    v_st.t = czm_writeNonPerspective(st.t, gl_Position.w);
    v_polylineAngle = angle;
}
`;var $r=`#ifdef VECTOR_TILE
uniform vec4 u_highlightColor;
#endif

in vec2 v_st;

void main()
{
    czm_materialInput materialInput;

    vec2 st = v_st;
    st.t = czm_readNonPerspective(st.t, gl_FragCoord.w);

    materialInput.s = st.s;
    materialInput.st = st;
    materialInput.str = vec3(st, 0.0);

    czm_material material = czm_getMaterial(materialInput);
    out_FragColor = vec4(material.diffuse + material.emission, material.alpha);
#ifdef VECTOR_TILE
    out_FragColor *= u_highlightColor;
#endif

    czm_writeLogDepth();
}
`;function KU(V,l,Z,U,A){this._format=V,this._datatype=l,this._width=Z,this._height=U,this._buffer=A}Object.defineProperties(KU.prototype,{internalFormat:{get:function(){return this._format}},pixelDatatype:{get:function(){return this._datatype}},width:{get:function(){return this._width}},height:{get:function(){return this._height}},bufferView:{get:function(){return this._buffer}}});KU.clone=function(V){if(s(V))return new KU(V._format,V._datatype,V._width,V._height,V._buffer)};KU.prototype.clone=function(){return KU.clone(this)};var Vo=KU;var lo=Me(JT(),1);function Zo(){if(!s(iZ._canTransferArrayBuffer)){let V=cm("transferTypedArrayTest");V.postMessage=a(V.webkitPostMessage,V.postMessage);let l=99,Z=new Int8Array([l]);try{V.postMessage({array:Z},[Z.buffer])}catch{return iZ._canTransferArrayBuffer=!1,iZ._canTransferArrayBuffer}iZ._canTransferArrayBuffer=new Promise(U=>{V.onmessage=function(A){let t=A.data.array,m=s(t)&&t[0]===l;U(m),V.terminate(),iZ._canTransferArrayBuffer=m}})}return iZ._canTransferArrayBuffer}var Im=new dV;function Qm(V){let l;try{l=new Blob([V],{type:"application/javascript"})}catch{let A=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,t=new A;t.append(V),l=t.getBlob("application/javascript")}return(window.URL||window.webkitURL).createObjectURL(l)}function cm(V){let l=new lo.default(V),Z=l.scheme().length!==0&&l.fragment().length===0,U={},A;if(Oi(V)){let m=`importScripts("${V}");`;return A=Qm(m),new Worker(A,U)}let t=V.replace(/\.js$/,"");if(!Z&&typeof CESIUM_WORKERS<"u"){let m=`
      importScripts("${Qm(CESIUM_WORKERS)}");
      CesiumWorkers["${t}"]();
    `;return A=Qm(m),new Worker(A,U)}if(A=V,Z||(A=FA(`${iZ._workerModulePrefix+t}.js`)),!CW.supportsEsmWebWorkers())throw new Jl("This browser is not supported. Please update your browser to continue.");return U.type="module",new Worker(A,U)}async function TQ(V,l){let Z={modulePath:void 0,wasmBinaryFile:void 0,wasmBinary:void 0};if(!CW.supportsWebAssembly()){if(!s(l.fallbackModulePath))throw new Jl(`This browser does not support Web Assembly, and no backup module was provided for ${V._workerPath}`);return Z.modulePath=FA(l.fallbackModulePath),Z}Z.wasmBinaryFile=FA(l.wasmBinaryFile);let U=await xl.fetchArrayBuffer({url:Z.wasmBinaryFile});return Z.wasmBinary=U,Z}function iZ(V,l){this._workerPath=V,this._maximumActiveTasks=a(l,Number.POSITIVE_INFINITY),this._activeTasks=0,this._nextID=0,this._webAssemblyPromise=void 0}var BQ=(V,l,Z,U)=>{let A=({data:t})=>{if(t.id===l){if(s(t.error)){let m=t.error;m.name==="RuntimeError"?(m=new Jl(t.error.message),m.stack=t.error.stack):m.name==="DeveloperError"?(m=new I(t.error.message),m.stack=t.error.stack):m.name==="Error"&&(m=new Error(t.error.message),m.stack=t.error.stack),Im.raiseEvent(m),U(m)}else Im.raiseEvent(),Z(t.result);V.removeEventListener("message",A)}};return A},FQ=[];async function QQ(V,l,Z){let U=await Promise.resolve(Zo());s(Z)?U||(Z.length=0):Z=FQ;let A=V._nextID++,t=new Promise((m,i)=>{V._worker.addEventListener("message",BQ(V._worker,A,m,i))});return V._worker.postMessage({id:A,baseUrl:FA.getCesiumBaseUrl().url,parameters:l,canTransferArrayBuffer:U},Z),t}async function IQ(V,l,Z){++V._activeTasks;try{let U=await QQ(V,l,Z);return--V._activeTasks,U}catch(U){throw--V._activeTasks,U}}iZ.prototype.scheduleTask=function(V,l){if(s(this._worker)||(this._worker=cm(this._workerPath)),!(this._activeTasks>=this._maximumActiveTasks))return IQ(this,V,l)};iZ.prototype.initWebAssemblyModule=async function(V){if(s(this._webAssemblyPromise))return this._webAssemblyPromise;let l=async()=>{let Z=this._worker=cm(this._workerPath),U=await TQ(this,V),A=await Promise.resolve(Zo()),t,m=U.wasmBinary;s(m)&&A&&(t=[m]);let i=new Promise((n,o)=>{Z.onmessage=function({data:h}){s(h)?n(h.result):o(new Jl("Could not configure wasm module"))}});return Z.postMessage({canTransferArrayBuffer:A,parameters:{webAssemblyConfig:U}},t),i};return this._webAssemblyPromise=l(),this._webAssemblyPromise};iZ.prototype.isDestroyed=function(){return!1};iZ.prototype.destroy=function(){return s(this._worker)&&this._worker.terminate(),fV(this)};iZ.taskCompletedEvent=Im;iZ._defaultWorkerModulePrefix="Workers/";iZ._workerModulePrefix=iZ._defaultWorkerModulePrefix;iZ._canTransferArrayBuffer=void 0;var $W=iZ;function JW(){}JW._transcodeTaskProcessor=new $W("transcodeKTX2",Number.POSITIVE_INFINITY);JW._readyPromise=void 0;function cQ(){let V=JW._transcodeTaskProcessor.initWebAssemblyModule({wasmBinaryFile:"ThirdParty/basis_transcoder.wasm"}).then(function(l){if(l)return JW._transcodeTaskProcessor;throw new Jl("KTX2 transcoder could not be initialized.")});JW._readyPromise=V}JW.transcode=function(V,l){return v.defined("supportedTargetFormats",l),s(JW._readyPromise)||cQ(),JW._readyPromise.then(function(Z){let U;if(V instanceof ArrayBuffer){let A=new Uint8Array(V);return U={supportedTargetFormats:l,ktx2Buffer:A},Z.scheduleTask(U,[V])}return U={supportedTargetFormats:l,ktx2Buffer:V},Z.scheduleTask(U,[V.buffer])}).then(function(Z){let U=Z.length,A=Object.keys(Z[0]),t=A.length,m;for(m=0;m<U;m++){let i=Z[m];for(let n=0;n<t;n++){let o=i[A[n]];i[A[n]]=new Vo(o.internalFormat,o.datatype,o.width,o.height,o.levelBuffer)}}if(t===1){for(m=0;m<U;++m)Z[m]=Z[m][A[0]];U===1&&(Z=Z[0])}return Z}).catch(function(Z){throw Z})};var Wo=JW;var Uo;Ao.setKTX2SupportedFormats=function(V,l,Z,U,A,t){Uo={s3tc:V,pvrtc:l,astc:Z,etc:U,etc1:A,bc7:t}};function Ao(V){v.defined("resourceOrUrlOrBuffer",V);let l;return V instanceof ArrayBuffer||ArrayBuffer.isView(V)?l=Promise.resolve(V):l=xl.createIfNeeded(V).fetchArrayBuffer(),l.then(function(Z){return Wo.transcode(Z,Uo)})}var to=Ao;function We(V,l,Z,U,A,t,m,i,n,o,h){this._context=V,this._texture=l,this._textureTarget=Z,this._targetFace=U,this._pixelDatatype=m,this._internalFormat=A,this._pixelFormat=t,this._size=i,this._preMultiplyAlpha=n,this._flipY=o,this._initialized=h}Object.defineProperties(We.prototype,{pixelFormat:{get:function(){return this._pixelFormat}},pixelDatatype:{get:function(){return this._pixelDatatype}},_target:{get:function(){return this._targetFace}}});We.prototype.copyFrom=function(V){v.defined("options",V);let l=a(V.xOffset,0),Z=a(V.yOffset,0);if(v.defined("options.source",V.source),v.typeOf.number.greaterThanOrEquals("xOffset",l,0),v.typeOf.number.greaterThanOrEquals("yOffset",Z,0),l+V.source.width>this._size)throw new I("xOffset + options.source.width must be less than or equal to width.");if(Z+V.source.height>this._size)throw new I("yOffset + options.source.height must be less than or equal to height.");let U=V.source,A=this._context._gl,t=this._textureTarget,m=this._targetFace;A.activeTexture(A.TEXTURE0),A.bindTexture(t,this._texture);let i=U.width,n=U.height,o=U.arrayBufferView,h=this._size,R=this._pixelFormat,c=this._internalFormat,Q=this._pixelDatatype,T=this._preMultiplyAlpha,S=this._flipY,p=a(V.skipColorSpaceConversion,!1),b=4;s(o)&&(b=cV.alignmentInBytes(R,Q,i)),A.pixelStorei(A.UNPACK_ALIGNMENT,b),p?A.pixelStorei(A.UNPACK_COLORSPACE_CONVERSION_WEBGL,A.NONE):A.pixelStorei(A.UNPACK_COLORSPACE_CONVERSION_WEBGL,A.BROWSER_DEFAULT_WEBGL);let E=!1;if(!this._initialized){if(l===0&&Z===0&&i===h&&n===h)s(o)?(A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,!1),S&&(o=cV.flipY(o,R,Q,h,h)),A.texImage2D(m,0,c,h,h,0,R,SV.toWebGLConstant(Q,this._context),o)):(A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,S),A.texImage2D(m,0,c,R,SV.toWebGLConstant(Q,this._context),U)),E=!0;else{A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,!1);let D=cV.createTypedArray(R,Q,h,h);A.texImage2D(m,0,c,h,h,0,R,SV.toWebGLConstant(Q,this._context),D)}this._initialized=!0}E||(s(o)?(A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,!1),S&&(o=cV.flipY(o,R,Q,i,n)),A.texSubImage2D(m,0,l,Z,i,n,R,SV.toWebGLConstant(Q,this._context),o)):(A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,S),A.texSubImage2D(m,0,l,Z,R,SV.toWebGLConstant(Q,this._context),U))),A.bindTexture(t,null)};We.prototype.copyFromFramebuffer=function(V,l,Z,U,A,t){if(V=a(V,0),l=a(l,0),Z=a(Z,0),U=a(U,0),A=a(A,this._size),t=a(t,this._size),v.typeOf.number.greaterThanOrEquals("xOffset",V,0),v.typeOf.number.greaterThanOrEquals("yOffset",l,0),v.typeOf.number.greaterThanOrEquals("framebufferXOffset",Z,0),v.typeOf.number.greaterThanOrEquals("framebufferYOffset",U,0),V+A>this._size)throw new I("xOffset + source.width must be less than or equal to width.");if(l+t>this._size)throw new I("yOffset + source.height must be less than or equal to height.");if(this._pixelDatatype===SV.FLOAT)throw new I("Cannot call copyFromFramebuffer when the texture pixel data type is FLOAT.");if(this._pixelDatatype===SV.HALF_FLOAT)throw new I("Cannot call copyFromFramebuffer when the texture pixel data type is HALF_FLOAT.");let m=this._context._gl,i=this._textureTarget;m.activeTexture(m.TEXTURE0),m.bindTexture(i,this._texture),m.copyTexSubImage2D(this._targetFace,0,V,l,Z,U,A,t),m.bindTexture(i,null),this._initialized=!0};var CU=We;function OA(V){V=a(V,a.EMPTY_OBJECT),v.defined("options.context",V.context);let l=V.context,Z=V.source,U,A;if(s(Z)){let E=[Z.positiveX,Z.negativeX,Z.positiveY,Z.negativeY,Z.positiveZ,Z.negativeZ];if(!E[0]||!E[1]||!E[2]||!E[3]||!E[4]||!E[5])throw new I("options.source requires positiveX, negativeX, positiveY, negativeY, positiveZ, and negativeZ faces.");U=E[0].width,A=E[0].height;for(let D=1;D<6;++D)if(Number(E[D].width)!==U||Number(E[D].height)!==A)throw new I("Each face in options.source must have the same width and height.")}else U=V.width,A=V.height;let t=U,m=a(V.pixelDatatype,SV.UNSIGNED_BYTE),i=a(V.pixelFormat,cV.RGBA),n=cV.toInternalFormat(i,m,l);if(!s(U)||!s(A))throw new I("options requires a source field to create an initialized cube map or width and height fields to create a blank cube map.");if(U!==A)throw new I("Width must equal height.");if(t<=0)throw new I("Width and height must be greater than zero.");if(t>$V.maximumCubeMapSize)throw new I(`Width and height must be less than or equal to the maximum cube map size (${$V.maximumCubeMapSize}).  Check maximumCubeMapSize.`);if(!cV.validate(i))throw new I("Invalid options.pixelFormat.");if(cV.isDepthFormat(i))throw new I("options.pixelFormat cannot be DEPTH_COMPONENT or DEPTH_STENCIL.");if(!SV.validate(m))throw new I("Invalid options.pixelDatatype.");if(m===SV.FLOAT&&!l.floatingPointTexture)throw new I("When options.pixelDatatype is FLOAT, this WebGL implementation must support the OES_texture_float extension.");if(m===SV.HALF_FLOAT&&!l.halfFloatingPointTexture)throw new I("When options.pixelDatatype is HALF_FLOAT, this WebGL implementation must support the OES_texture_half_float extension.");let o=cV.textureSizeInBytes(i,m,t,t)*6,h=V.preMultiplyAlpha||i===cV.RGB||i===cV.LUMINANCE,R=a(V.flipY,!0),c=a(V.skipColorSpaceConversion,!1),Q=l._gl,T=Q.TEXTURE_CUBE_MAP,S=Q.createTexture();Q.activeTexture(Q.TEXTURE0),Q.bindTexture(T,S);function p(E,D,_,Y,K){let ZV=D.arrayBufferView;s(ZV)||(ZV=D.bufferView);let j=4;s(ZV)&&(j=cV.alignmentInBytes(i,m,U)),Q.pixelStorei(Q.UNPACK_ALIGNMENT,j),K?Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q.NONE):Q.pixelStorei(Q.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q.BROWSER_DEFAULT_WEBGL),s(ZV)?(Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,!1),Y&&(ZV=cV.flipY(ZV,i,m,t,t)),Q.texImage2D(E,0,n,t,t,0,i,SV.toWebGLConstant(m,l),ZV)):(Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,Y),Q.texImage2D(E,0,n,i,SV.toWebGLConstant(m,l),D))}s(Z)?(p(Q.TEXTURE_CUBE_MAP_POSITIVE_X,Z.positiveX,h,R,c),p(Q.TEXTURE_CUBE_MAP_NEGATIVE_X,Z.negativeX,h,R,c),p(Q.TEXTURE_CUBE_MAP_POSITIVE_Y,Z.positiveY,h,R,c),p(Q.TEXTURE_CUBE_MAP_NEGATIVE_Y,Z.negativeY,h,R,c),p(Q.TEXTURE_CUBE_MAP_POSITIVE_Z,Z.positiveZ,h,R,c),p(Q.TEXTURE_CUBE_MAP_NEGATIVE_Z,Z.negativeZ,h,R,c)):(Q.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_X,0,n,t,t,0,i,SV.toWebGLConstant(m,l),null),Q.texImage2D(Q.TEXTURE_CUBE_MAP_NEGATIVE_X,0,n,t,t,0,i,SV.toWebGLConstant(m,l),null),Q.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_Y,0,n,t,t,0,i,SV.toWebGLConstant(m,l),null),Q.texImage2D(Q.TEXTURE_CUBE_MAP_NEGATIVE_Y,0,n,t,t,0,i,SV.toWebGLConstant(m,l),null),Q.texImage2D(Q.TEXTURE_CUBE_MAP_POSITIVE_Z,0,n,t,t,0,i,SV.toWebGLConstant(m,l),null),Q.texImage2D(Q.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,n,t,t,0,i,SV.toWebGLConstant(m,l),null)),Q.bindTexture(T,null),this._context=l,this._textureFilterAnisotropic=l._textureFilterAnisotropic,this._textureTarget=T,this._texture=S,this._pixelFormat=i,this._pixelDatatype=m,this._size=t,this._hasMipmap=!1,this._sizeInBytes=o,this._preMultiplyAlpha=h,this._flipY=R,this._sampler=void 0;let b=s(Z);this._positiveX=new CU(l,S,T,Q.TEXTURE_CUBE_MAP_POSITIVE_X,n,i,m,t,h,R,b),this._negativeX=new CU(l,S,T,Q.TEXTURE_CUBE_MAP_NEGATIVE_X,n,i,m,t,h,R,b),this._positiveY=new CU(l,S,T,Q.TEXTURE_CUBE_MAP_POSITIVE_Y,n,i,m,t,h,R,b),this._negativeY=new CU(l,S,T,Q.TEXTURE_CUBE_MAP_NEGATIVE_Y,n,i,m,t,h,R,b),this._positiveZ=new CU(l,S,T,Q.TEXTURE_CUBE_MAP_POSITIVE_Z,n,i,m,t,h,R,b),this._negativeZ=new CU(l,S,T,Q.TEXTURE_CUBE_MAP_NEGATIVE_Z,n,i,m,t,h,R,b),this.sampler=s(V.sampler)?V.sampler:new dW}Object.defineProperties(OA.prototype,{positiveX:{get:function(){return this._positiveX}},negativeX:{get:function(){return this._negativeX}},positiveY:{get:function(){return this._positiveY}},negativeY:{get:function(){return this._negativeY}},positiveZ:{get:function(){return this._positiveZ}},negativeZ:{get:function(){return this._negativeZ}},sampler:{get:function(){return this._sampler},set:function(V){let l=V.minificationFilter,Z=V.magnificationFilter,U=l===Ml.NEAREST_MIPMAP_NEAREST||l===Ml.NEAREST_MIPMAP_LINEAR||l===Ml.LINEAR_MIPMAP_NEAREST||l===Ml.LINEAR_MIPMAP_LINEAR,A=this._context,t=this._pixelDatatype;(t===SV.FLOAT&&!A.textureFloatLinear||t===SV.HALF_FLOAT&&!A.textureHalfFloatLinear)&&(l=U?Ml.NEAREST_MIPMAP_NEAREST:Ml.NEAREST,Z=lW.NEAREST);let m=A._gl,i=this._textureTarget;m.activeTexture(m.TEXTURE0),m.bindTexture(i,this._texture),m.texParameteri(i,m.TEXTURE_MIN_FILTER,l),m.texParameteri(i,m.TEXTURE_MAG_FILTER,Z),m.texParameteri(i,m.TEXTURE_WRAP_S,V.wrapS),m.texParameteri(i,m.TEXTURE_WRAP_T,V.wrapT),s(this._textureFilterAnisotropic)&&m.texParameteri(i,this._textureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,V.maximumAnisotropy),m.bindTexture(i,null),this._sampler=V}},pixelFormat:{get:function(){return this._pixelFormat}},pixelDatatype:{get:function(){return this._pixelDatatype}},width:{get:function(){return this._size}},height:{get:function(){return this._size}},sizeInBytes:{get:function(){return this._hasMipmap?Math.floor(this._sizeInBytes*4/3):this._sizeInBytes}},preMultiplyAlpha:{get:function(){return this._preMultiplyAlpha}},flipY:{get:function(){return this._flipY}},_target:{get:function(){return this._textureTarget}}});OA.prototype.generateMipmap=function(V){if(V=a(V,vU.DONT_CARE),this._size>1&&!NV.isPowerOfTwo(this._size))throw new I("width and height must be a power of two to call generateMipmap().");if(!vU.validate(V))throw new I("hint is invalid.");this._hasMipmap=!0;let l=this._context._gl,Z=this._textureTarget;l.hint(l.GENERATE_MIPMAP_HINT,V),l.activeTexture(l.TEXTURE0),l.bindTexture(Z,this._texture),l.generateMipmap(Z),l.bindTexture(Z,null)};OA.prototype.isDestroyed=function(){return!1};OA.prototype.destroy=function(){return this._context._gl.deleteTexture(this._texture),this._positiveX=fV(this._positiveX),this._negativeX=fV(this._negativeX),this._positiveY=fV(this._positiveY),this._negativeY=fV(this._negativeY),this._positiveZ=fV(this._positiveZ),this._negativeZ=fV(this._negativeZ),fV(this)};var Sm=OA;var eo=`uniform sampler2D image;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);
    vec4 rampColor = texture(image, vec2(materialInput.aspect / (2.0 * czm_pi), 0.5));
    rampColor = czm_gammaCorrect(rampColor);
    material.diffuse = rampColor.rgb;
    material.alpha = rampColor.a;
    return material;
}
`;var mo=`uniform sampler2D image;
uniform float strength;
uniform vec2 repeat;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    vec2 st = materialInput.st;

    vec2 centerPixel = fract(repeat * st);
    float centerBump = texture(image, centerPixel).channel;

    float imageWidth = float(imageDimensions.x);
    vec2 rightPixel = fract(repeat * (st + vec2(1.0 / imageWidth, 0.0)));
    float rightBump = texture(image, rightPixel).channel;

    float imageHeight = float(imageDimensions.y);
    vec2 leftPixel = fract(repeat * (st + vec2(0.0, 1.0 / imageHeight)));
    float topBump = texture(image, leftPixel).channel;

    vec3 normalTangentSpace = normalize(vec3(centerBump - rightBump, centerBump - topBump, clamp(1.0 - strength, 0.1, 1.0)));
    vec3 normalEC = materialInput.tangentToEyeMatrix * normalTangentSpace;

    material.normal = normalEC;
    material.diffuse = vec3(0.01);

    return material;
}
`;var io=`uniform vec4 lightColor;
uniform vec4 darkColor;
uniform vec2 repeat;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    vec2 st = materialInput.st;

    // From Stefan Gustavson's Procedural Textures in GLSL in OpenGL Insights
    float b = mod(floor(repeat.s * st.s) + floor(repeat.t * st.t), 2.0);  // 0.0 or 1.0

    // Find the distance from the closest separator (region between two colors)
    float scaledWidth = fract(repeat.s * st.s);
    scaledWidth = abs(scaledWidth - floor(scaledWidth + 0.5));
    float scaledHeight = fract(repeat.t * st.t);
    scaledHeight = abs(scaledHeight - floor(scaledHeight + 0.5));
    float value = min(scaledWidth, scaledHeight);

    vec4 currentColor = mix(lightColor, darkColor, b);
    vec4 color = czm_antialias(lightColor, darkColor, currentColor, value, 0.03);

    color = czm_gammaCorrect(color);
    material.diffuse = color.rgb;
    material.alpha = color.a;

    return material;
}
`;var no=`uniform vec4 lightColor;
uniform vec4 darkColor;
uniform vec2 repeat;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    // From Stefan Gustavson's Procedural Textures in GLSL in OpenGL Insights
    float b = smoothstep(0.3, 0.32, length(fract(repeat * materialInput.st) - 0.5));  // 0.0 or 1.0

    vec4 color = mix(lightColor, darkColor, b);
    color = czm_gammaCorrect(color);
    material.diffuse = color.rgb;
    material.alpha = color.a;

    return material;
}
`;var Go=`uniform sampler2D heights;
uniform sampler2D colors;

// This material expects heights to be sorted from lowest to highest.

float getHeight(int idx, float invTexSize)
{
    vec2 uv = vec2((float(idx) + 0.5) * invTexSize, 0.5);
#ifdef OES_texture_float
    return texture(heights, uv).x;
#else
    return czm_unpackFloat(texture(heights, uv));
#endif
}

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    float height = materialInput.height;
    float invTexSize = 1.0 / float(heightsDimensions.x);

    float minHeight = getHeight(0, invTexSize);
    float maxHeight = getHeight(heightsDimensions.x - 1, invTexSize);

    // early-out when outside the height range
    if (height < minHeight || height > maxHeight) {
        material.diffuse = vec3(0.0);
        material.alpha = 0.0;
        return material;
    }

    // Binary search to find heights above and below.
    int idxBelow = 0;
    int idxAbove = heightsDimensions.x;
    float heightBelow = minHeight;
    float heightAbove = maxHeight;

    // while loop not allowed, so use for loop with max iterations.
    // maxIterations of 16 supports a texture size up to 65536 (2^16).
    const int maxIterations = 16;
    for (int i = 0; i < maxIterations; i++) {
        if (idxBelow >= idxAbove - 1) {
            break;
        }

        int idxMid = (idxBelow + idxAbove) / 2;
        float heightTex = getHeight(idxMid, invTexSize);

        if (height > heightTex) {
            idxBelow = idxMid;
            heightBelow = heightTex;
        } else {
            idxAbove = idxMid;
            heightAbove = heightTex;
        }
    }

    float lerper = heightBelow == heightAbove ? 1.0 : (height - heightBelow) / (heightAbove - heightBelow);
    vec2 colorUv = vec2(invTexSize * (float(idxBelow) + 0.5 + lerper), 0.5);
    vec4 color = texture(colors, colorUv);

    // undo preumultiplied alpha
    if (color.a > 0.0) 
    {
        color.rgb /= color.a;
    }
    
    color.rgb = czm_gammaCorrect(color.rgb);

    material.diffuse = color.rgb;
    material.alpha = color.a;
    return material;
}
`;var so=`uniform vec4 color;
uniform float spacing;
uniform float width;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    float distanceToContour = mod(materialInput.height, spacing);

#if (__VERSION__ == 300 || defined(GL_OES_standard_derivatives))
    float dxc = abs(dFdx(materialInput.height));
    float dyc = abs(dFdy(materialInput.height));
    float dF = max(dxc, dyc) * czm_pixelRatio * width;
    float alpha = (distanceToContour < dF) ? 1.0 : 0.0;
#else
    // If no derivatives available (IE 10?), use pixel ratio
    float alpha = (distanceToContour < (czm_pixelRatio * width)) ? 1.0 : 0.0;
#endif

    vec4 outColor = czm_gammaCorrect(vec4(color.rgb, alpha * color.a));
    material.diffuse = outColor.rgb;
    material.alpha = outColor.a;

    return material;
}
`;var ao=`uniform sampler2D image;
uniform float minimumHeight;
uniform float maximumHeight;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);
    float scaledHeight = clamp((materialInput.height - minimumHeight) / (maximumHeight - minimumHeight), 0.0, 1.0);
    vec4 rampColor = texture(image, vec2(scaledHeight, 0.5));
    rampColor = czm_gammaCorrect(rampColor);
    material.diffuse = rampColor.rgb;
    material.alpha = rampColor.a;
    return material;
}
`;var ro=`uniform vec4 fadeInColor;
uniform vec4 fadeOutColor;
uniform float maximumDistance;
uniform bool repeat;
uniform vec2 fadeDirection;
uniform vec2 time;

float getTime(float t, float coord)
{
    float scalar = 1.0 / maximumDistance;
    float q  = distance(t, coord) * scalar;
    if (repeat)
    {
        float r = distance(t, coord + 1.0) * scalar;
        float s = distance(t, coord - 1.0) * scalar;
        q = min(min(r, s), q);
    }
    return clamp(q, 0.0, 1.0);
}

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    vec2 st = materialInput.st;
    float s = getTime(time.x, st.s) * fadeDirection.s;
    float t = getTime(time.y, st.t) * fadeDirection.t;

    float u = length(vec2(s, t));
    vec4 color = mix(fadeInColor, fadeOutColor, u);

    color = czm_gammaCorrect(color);
    material.emission = color.rgb;
    material.alpha = color.a;

    return material;
}
`;var oo=`uniform vec4 color;
uniform float cellAlpha;
uniform vec2 lineCount;
uniform vec2 lineThickness;
uniform vec2 lineOffset;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    vec2 st = materialInput.st;

    float scaledWidth = fract(lineCount.s * st.s - lineOffset.s);
    scaledWidth = abs(scaledWidth - floor(scaledWidth + 0.5));
    float scaledHeight = fract(lineCount.t * st.t - lineOffset.t);
    scaledHeight = abs(scaledHeight - floor(scaledHeight + 0.5));

    float value;

    // Fuzz Factor - Controls blurriness of lines
#if (__VERSION__ == 300 || defined(GL_OES_standard_derivatives))
    const float fuzz = 1.2;
    vec2 thickness = (lineThickness * czm_pixelRatio) - 1.0;

    // From "3D Engine Design for Virtual Globes" by Cozzi and Ring, Listing 4.13.
    vec2 dx = abs(dFdx(st));
    vec2 dy = abs(dFdy(st));
    vec2 dF = vec2(max(dx.s, dy.s), max(dx.t, dy.t)) * lineCount;
    value = min(
        smoothstep(dF.s * thickness.s, dF.s * (fuzz + thickness.s), scaledWidth),
        smoothstep(dF.t * thickness.t, dF.t * (fuzz + thickness.t), scaledHeight));
#else
    // If no derivatives available (IE 10?), revert to view-dependent fuzz
    const float fuzz = 0.05;

    vec2 range = 0.5 - (lineThickness * 0.05);
    value = min(
        1.0 - smoothstep(range.s, range.s + fuzz, scaledWidth),
        1.0 - smoothstep(range.t, range.t + fuzz, scaledHeight));
#endif

    // Edges taken from RimLightingMaterial.glsl
    // See http://www.fundza.com/rman_shaders/surface/fake_rim/fake_rim1.html
    float dRim = 1.0 - abs(dot(materialInput.normalEC, normalize(materialInput.positionToEyeEC)));
    float sRim = smoothstep(0.8, 1.0, dRim);
    value *= (1.0 - sRim);

    vec4 halfColor;
    halfColor.rgb = color.rgb * 0.5;
    halfColor.a = color.a * (1.0 - ((1.0 - cellAlpha) * value));
    halfColor = czm_gammaCorrect(halfColor);
    material.diffuse = halfColor.rgb;
    material.emission = halfColor.rgb;
    material.alpha = halfColor.a;

    return material;
}
`;var ho=`uniform sampler2D image;
uniform float strength;
uniform vec2 repeat;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);
    
    vec4 textureValue = texture(image, fract(repeat * materialInput.st));
    vec3 normalTangentSpace = textureValue.channels;
    normalTangentSpace.xy = normalTangentSpace.xy * 2.0 - 1.0;
    normalTangentSpace.z = clamp(1.0 - strength, 0.1, 1.0);
    normalTangentSpace = normalize(normalTangentSpace);
    vec3 normalEC = materialInput.tangentToEyeMatrix * normalTangentSpace;
    
    material.normal = normalEC;
    
    return material;
}
`;var Ro=`uniform vec4 color;

float getPointOnLine(vec2 p0, vec2 p1, float x)
{
    float slope = (p0.y - p1.y) / (p0.x - p1.x);
    return slope * (x - p0.x) + p0.y;
}

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    vec2 st = materialInput.st;

#if (__VERSION__ == 300 || defined(GL_OES_standard_derivatives))
    float base = 1.0 - abs(fwidth(st.s)) * 10.0 * czm_pixelRatio;
#else
     // If no derivatives available (IE 10?), 2.5% of the line will be the arrow head
    float base = 0.975;
#endif

    vec2 center = vec2(1.0, 0.5);
    float ptOnUpperLine = getPointOnLine(vec2(base, 1.0), center, st.s);
    float ptOnLowerLine = getPointOnLine(vec2(base, 0.0), center, st.s);

    float halfWidth = 0.15;
    float s = step(0.5 - halfWidth, st.t);
    s *= 1.0 - step(0.5 + halfWidth, st.t);
    s *= 1.0 - step(base, st.s);

    float t = step(base, materialInput.st.s);
    t *= 1.0 - step(ptOnUpperLine, st.t);
    t *= step(ptOnLowerLine, st.t);

    // Find the distance from the closest separator (region between two colors)
    float dist;
    if (st.s < base)
    {
        float d1 = abs(st.t - (0.5 - halfWidth));
        float d2 = abs(st.t - (0.5 + halfWidth));
        dist = min(d1, d2);
    }
    else
    {
        float d1 = czm_infinity;
        if (st.t < 0.5 - halfWidth && st.t > 0.5 + halfWidth)
        {
            d1 = abs(st.s - base);
        }
        float d2 = abs(st.t - ptOnUpperLine);
        float d3 = abs(st.t - ptOnLowerLine);
        dist = min(min(d1, d2), d3);
    }

    vec4 outsideColor = vec4(0.0);
    vec4 currentColor = mix(outsideColor, color, clamp(s + t, 0.0, 1.0));
    vec4 outColor = czm_antialias(outsideColor, color, currentColor, dist);

    outColor = czm_gammaCorrect(outColor);
    material.diffuse = outColor.rgb;
    material.alpha = outColor.a;
    return material;
}
`;var To=`uniform vec4 color;
uniform vec4 gapColor;
uniform float dashLength;
uniform float dashPattern;
in float v_polylineAngle;

const float maskLength = 16.0;

mat2 rotate(float rad) {
    float c = cos(rad);
    float s = sin(rad);
    return mat2(
        c, s,
        -s, c
    );
}

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    vec2 pos = rotate(v_polylineAngle) * gl_FragCoord.xy;

    // Get the relative position within the dash from 0 to 1
    float dashPosition = fract(pos.x / (dashLength * czm_pixelRatio));
    // Figure out the mask index.
    float maskIndex = floor(dashPosition * maskLength);
    // Test the bit mask.
    float maskTest = floor(dashPattern / pow(2.0, maskIndex));
    vec4 fragColor = (mod(maskTest, 2.0) < 1.0) ? gapColor : color;
    if (fragColor.a < 0.005) {   // matches 0/255 and 1/255
        discard;
    }

    fragColor = czm_gammaCorrect(fragColor);
    material.emission = fragColor.rgb;
    material.alpha = fragColor.a;
    return material;
}
`;var Bo=`uniform vec4 color;
uniform float glowPower;
uniform float taperPower;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    vec2 st = materialInput.st;
    float glow = glowPower / abs(st.t - 0.5) - (glowPower / 0.5);

    if (taperPower <= 0.99999) {
        glow *= min(1.0, taperPower / (0.5 - st.s * 0.5) - (taperPower / 0.5));
    }

    vec4 fragColor;
    fragColor.rgb = max(vec3(glow - 1.0 + color.rgb), color.rgb);
    fragColor.a = clamp(0.0, 1.0, glow) * color.a;
    fragColor = czm_gammaCorrect(fragColor);

    material.emission = fragColor.rgb;
    material.alpha = fragColor.a;

    return material;
}
`;var Fo=`uniform vec4 color;
uniform vec4 outlineColor;
uniform float outlineWidth;

in float v_width;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    vec2 st = materialInput.st;
    float halfInteriorWidth =  0.5 * (v_width - outlineWidth) / v_width;
    float b = step(0.5 - halfInteriorWidth, st.t);
    b *= 1.0 - step(0.5 + halfInteriorWidth, st.t);

    // Find the distance from the closest separator (region between two colors)
    float d1 = abs(st.t - (0.5 - halfInteriorWidth));
    float d2 = abs(st.t - (0.5 + halfInteriorWidth));
    float dist = min(d1, d2);

    vec4 currentColor = mix(outlineColor, color, b);
    vec4 outColor = czm_antialias(outlineColor, color, currentColor, dist);
    outColor = czm_gammaCorrect(outColor);

    material.diffuse = outColor.rgb;
    material.alpha = outColor.a;

    return material;
}
`;var Qo=`uniform vec4 color;
uniform vec4 rimColor;
uniform float width;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    // See http://www.fundza.com/rman_shaders/surface/fake_rim/fake_rim1.html
    float d = 1.0 - dot(materialInput.normalEC, normalize(materialInput.positionToEyeEC));
    float s = smoothstep(1.0 - width, 1.0, d);

    vec4 outColor = czm_gammaCorrect(color);
    vec4 outRimColor = czm_gammaCorrect(rimColor);

    material.diffuse = outColor.rgb;
    material.emission = outRimColor.rgb * s;
    material.alpha = mix(outColor.a, outRimColor.a, s);

    return material;
}
`;var Io=`uniform sampler2D image;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);
    vec4 rampColor = texture(image, vec2(materialInput.slope / (czm_pi / 2.0), 0.5));
    rampColor = czm_gammaCorrect(rampColor);
    material.diffuse = rampColor.rgb;
    material.alpha = rampColor.a;
    return material;
}
`;var co=`uniform vec4 evenColor;
uniform vec4 oddColor;
uniform float offset;
uniform float repeat;
uniform bool horizontal;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    // Based on the Stripes Fragment Shader in the Orange Book (11.1.2)
    float coord = mix(materialInput.st.s, materialInput.st.t, float(horizontal));
    float value = fract((coord - offset) * (repeat * 0.5));
    float dist = min(value, min(abs(value - 0.5), 1.0 - value));

    vec4 currentColor = mix(evenColor, oddColor, step(0.5, value));
    vec4 color = czm_antialias(evenColor, oddColor, currentColor, dist);
    color = czm_gammaCorrect(color);

    material.diffuse = color.rgb;
    material.alpha = color.a;

    return material;
}
`;var So=`// Thanks for the contribution Jonas
// http://29a.ch/2012/7/19/webgl-terrain-rendering-water-fog

uniform sampler2D specularMap;
uniform sampler2D normalMap;
uniform vec4 baseWaterColor;
uniform vec4 blendColor;
uniform float frequency;
uniform float animationSpeed;
uniform float amplitude;
uniform float specularIntensity;
uniform float fadeFactor;

czm_material czm_getMaterial(czm_materialInput materialInput)
{
    czm_material material = czm_getDefaultMaterial(materialInput);

    float time = czm_frameNumber * animationSpeed;

    // fade is a function of the distance from the fragment and the frequency of the waves
    float fade = max(1.0, (length(materialInput.positionToEyeEC) / 10000000000.0) * frequency * fadeFactor);

    float specularMapValue = texture(specularMap, materialInput.st).r;

    // note: not using directional motion at this time, just set the angle to 0.0;
    vec4 noise = czm_getWaterNoise(normalMap, materialInput.st * frequency, time, 0.0);
    vec3 normalTangentSpace = noise.xyz * vec3(1.0, 1.0, (1.0 / amplitude));

    // fade out the normal perturbation as we move further from the water surface
    normalTangentSpace.xy /= fade;

    // attempt to fade out the normal perturbation as we approach non water areas (low specular map value)
    normalTangentSpace = mix(vec3(0.0, 0.0, 50.0), normalTangentSpace, specularMapValue);

    normalTangentSpace = normalize(normalTangentSpace);

    // get ratios for alignment of the new normal vector with a vector perpendicular to the tangent plane
    float tsPerturbationRatio = clamp(dot(normalTangentSpace, vec3(0.0, 0.0, 1.0)), 0.0, 1.0);

    // fade out water effect as specular map value decreases
    material.alpha = mix(blendColor.a, baseWaterColor.a, specularMapValue) * specularMapValue;

    // base color is a blend of the water and non-water color based on the value from the specular map
    // may need a uniform blend factor to better control this
    material.diffuse = mix(blendColor.rgb, baseWaterColor.rgb, specularMapValue);

    // diffuse highlights are based on how perturbed the normal is
    material.diffuse += (0.1 * tsPerturbationRatio);

    material.diffuse = material.diffuse;

    material.normal = normalize(materialInput.tangentToEyeMatrix * normalTangentSpace);

    material.specular = specularIntensity;
    material.shininess = 10.0;

    return material;
}
`;function H(V){this.type=void 0,this.shaderSource=void 0,this.materials=void 0,this.uniforms=void 0,this._uniforms=void 0,this.translucent=void 0,this._minificationFilter=a(V.minificationFilter,Ml.LINEAR),this._magnificationFilter=a(V.magnificationFilter,lW.LINEAR),this._strict=void 0,this._template=void 0,this._count=void 0,this._texturePaths={},this._loadedImages=[],this._loadedCubeMaps=[],this._textures={},this._updateFunctions=[],this._defaultTexture=void 0,SQ(V,this),Object.defineProperties(this,{type:{value:this.type,writable:!1}}),s(H._uniformList[this.type])||(H._uniformList[this.type]=Object.keys(this._uniforms))}H._uniformList={};H.fromType=function(V,l){if(!s(H._materialCache.getMaterial(V)))throw new I(`material with type '${V}' does not exist.`);let Z=new H({fabric:{type:V}});if(s(l))for(let U in l)l.hasOwnProperty(U)&&(Z.uniforms[U]=l[U]);return Z};H.prototype.isTranslucent=function(){if(s(this.translucent))return typeof this.translucent=="function"?this.translucent():this.translucent;let V=!0,l=this._translucentFunctions,Z=l.length;for(let U=0;U<Z;++U){let A=l[U];if(typeof A=="function"?V=V&&A():V=V&&A,!V)break}return V};H.prototype.update=function(V){this._defaultTexture=V.defaultTexture;let l,Z,U=this._loadedImages,A=U.length;for(l=0;l<A;++l){let n=U[l];Z=n.id;let o=n.image,h;Array.isArray(o)&&(h=o.slice(1,o.length).map(function(S){return S.bufferView}),o=o[0]);let R=new dW({minificationFilter:this._minificationFilter,magnificationFilter:this._magnificationFilter}),c;s(o.internalFormat)?c=new WW({context:V,pixelFormat:o.internalFormat,width:o.width,height:o.height,source:{arrayBufferView:o.bufferView,mipLevels:h},sampler:R}):c=new WW({context:V,source:o,sampler:R});let Q=this._textures[Z];s(Q)&&Q!==this._defaultTexture&&Q.destroy(),this._textures[Z]=c;let T=`${Z}Dimensions`;if(this.uniforms.hasOwnProperty(T)){let S=this.uniforms[T];S.x=c._width,S.y=c._height}}U.length=0;let t=this._loadedCubeMaps;for(A=t.length,l=0;l<A;++l){let n=t[l];Z=n.id;let o=n.images,h=new Sm({context:V,source:{positiveX:o[0],negativeX:o[1],positiveY:o[2],negativeY:o[3],positiveZ:o[4],negativeZ:o[5]},sampler:new dW({minificationFilter:this._minificationFilter,magnificationFilter:this._magnificationFilter})});this._textures[Z]=h}t.length=0;let m=this._updateFunctions;for(A=m.length,l=0;l<A;++l)m[l](this,V);let i=this.materials;for(let n in i)i.hasOwnProperty(n)&&i[n].update(V)};H.prototype.isDestroyed=function(){return!1};H.prototype.destroy=function(){let V=this._textures;for(let Z in V)if(V.hasOwnProperty(Z)){let U=V[Z];U!==this._defaultTexture&&U.destroy()}let l=this.materials;for(let Z in l)l.hasOwnProperty(Z)&&l[Z].destroy();return fV(this)};function SQ(V,l){V=a(V,a.EMPTY_OBJECT),l._strict=a(V.strict,!1),l._count=a(V.count,0),l._template=PZ(a(V.fabric,a.EMPTY_OBJECT)),l._template.uniforms=PZ(a(l._template.uniforms,a.EMPTY_OBJECT)),l._template.materials=PZ(a(l._template.materials,a.EMPTY_OBJECT)),l.type=s(l._template.type)?l._template.type:jl(),l.shaderSource="",l.materials={},l.uniforms={},l._uniforms={},l._translucentFunctions=[];let Z,U=H._materialCache.getMaterial(l.type);if(s(U)){let t=PZ(U.fabric,!0);l._template=jZ(l._template,t,!0),Z=U.translucent}EQ(l),s(U)||H._materialCache.addMaterial(l.type,l),XQ(l),JQ(l),DQ(l);let A=l._translucentFunctions.length===0?!0:void 0;if(Z=a(Z,A),Z=a(V.translucent,Z),s(Z))if(typeof Z=="function"){let t=function(){return Z(l)};l._translucentFunctions.push(t)}else l._translucentFunctions.push(Z)}function Cm(V,l,Z,U){if(s(V)){for(let A in V)if(V.hasOwnProperty(A)){let t=l.indexOf(A)!==-1;(U&&!t||!U&&t)&&Z(A,l)}}}function Co(V,l){let Z=`fabric: property name '${V}' is not valid. It should be `;for(let U=0;U<l.length;U++){let A=`'${l[U]}'`;Z+=U===l.length-1?`or ${A}.`:`${A}, `}throw new I(Z)}function CQ(V,l){let Z=`fabric: uniforms and materials cannot share the same property '${V}'`;throw new I(Z)}var gQ=["type","materials","uniforms","components","source"],NQ=["diffuse","specular","shininess","normal","emission","alpha"];function EQ(V){let l=V._template,Z=l.uniforms,U=l.materials,A=l.components;if(s(A)&&s(l.source))throw new I("fabric: cannot have source and components in the same template.");Cm(l,gQ,Co,!0),Cm(A,NQ,Co,!0);let t=[];for(let m in U)U.hasOwnProperty(m)&&t.push(m);Cm(Z,t,CQ,!1)}function pQ(V,l){let Z=l._template.materials;for(let U in Z)if(Z.hasOwnProperty(U)&&V.indexOf(U)>-1)return!0;return!1}function XQ(V){let l=V._template.components,Z=V._template.source;if(s(Z))V.shaderSource+=`${Z}
`;else{if(V.shaderSource+=`czm_material czm_getMaterial(czm_materialInput materialInput)
{
`,V.shaderSource+=`czm_material material = czm_getDefaultMaterial(materialInput);
`,s(l)){let U=Object.keys(V._template.materials).length>0;for(let A in l)if(l.hasOwnProperty(A))if(A==="diffuse"||A==="emission"){let m=U&&pQ(l[A],V)?l[A]:`czm_gammaCorrect(${l[A]})`;V.shaderSource+=`material.${A} = ${m}; 
`}else A==="alpha"?V.shaderSource+=`material.alpha = ${l.alpha}; 
`:V.shaderSource+=`material.${A} = ${l[A]};
`}V.shaderSource+=`return material;
}
`}}var go={mat2:aW,mat3:gl,mat4:nV},fQ=/\.ktx2$/i;function bQ(V){let l;return function(Z,U){let A=Z.uniforms,t=A[V],m=l!==t,i=!s(t)||t===H.DefaultImageId;l=t;let n=Z._textures[V],o,h;if(t instanceof HTMLVideoElement){if(t.readyState>=2){if(m&&s(n)&&(n!==U.defaultTexture&&n.destroy(),n=void 0),!s(n)||n===U.defaultTexture){let c=new dW({minificationFilter:Z._minificationFilter,magnificationFilter:Z._magnificationFilter});n=new WW({context:U,source:t,sampler:c}),Z._textures[V]=n;return}n.copyFrom({source:t})}else s(n)||(Z._textures[V]=U.defaultTexture);return}if(t instanceof WW&&t!==n){Z._texturePaths[V]=void 0;let c=Z._textures[V];s(c)&&c!==Z._defaultTexture&&c.destroy(),Z._textures[V]=t,o=`${V}Dimensions`,A.hasOwnProperty(o)&&(h=A[o],h.x=t._width,h.y=t._height);return}if(m&&s(n)&&i&&(n!==Z._defaultTexture&&n.destroy(),n=void 0),s(n)||(Z._texturePaths[V]=void 0,n=Z._textures[V]=Z._defaultTexture,o=`${V}Dimensions`,A.hasOwnProperty(o)&&(h=A[o],h.x=n._width,h.y=n._height)),i)return;let R=t instanceof xl;if(!s(Z._texturePaths[V])||R&&t.url!==Z._texturePaths[V].url||!R&&t!==Z._texturePaths[V]){if(typeof t=="string"||R){let c=R?t:xl.createIfNeeded(t),Q;fQ.test(c.url)?Q=to(c.url):Q=c.fetchImage(),Promise.resolve(Q).then(function(T){Z._loadedImages.push({id:V,image:T})}).catch(function(){s(n)&&n!==Z._defaultTexture&&n.destroy(),Z._textures[V]=Z._defaultTexture})}else(t instanceof HTMLCanvasElement||t instanceof HTMLImageElement)&&Z._loadedImages.push({id:V,image:t});Z._texturePaths[V]=t}}}function uQ(V){return function(l,Z){let U=l.uniforms[V];if(U instanceof Sm){let t=l._textures[V];t!==l._defaultTexture&&t.destroy(),l._texturePaths[V]=void 0,l._textures[V]=U;return}if(s(l._textures[V])||(l._texturePaths[V]=void 0,l._textures[V]=Z.defaultCubeMap),U===H.DefaultCubeMapId)return;let A=U.positiveX+U.negativeX+U.positiveY+U.negativeY+U.positiveZ+U.negativeZ;if(A!==l._texturePaths[V]){let t=[xl.createIfNeeded(U.positiveX).fetchImage(),xl.createIfNeeded(U.negativeX).fetchImage(),xl.createIfNeeded(U.positiveY).fetchImage(),xl.createIfNeeded(U.negativeY).fetchImage(),xl.createIfNeeded(U.positiveZ).fetchImage(),xl.createIfNeeded(U.negativeZ).fetchImage()];Promise.all(t).then(function(m){l._loadedCubeMaps.push({id:V,images:m})}),l._texturePaths[V]=A}}}function JQ(V){let l=V._template.uniforms;for(let Z in l)l.hasOwnProperty(Z)&&No(V,Z)}function No(V,l){let Z=V._strict,U=V._template.uniforms,A=U[l],t=xQ(A);if(!s(t))throw new I(`fabric: uniform '${l}' has invalid type.`);let m;if(t==="channels"){if(m=wA(V,l,A,!1),m===0&&Z)throw new I(`strict: shader source does not use channels '${l}'.`)}else{if(t==="sampler2D"){let o=`${l}Dimensions`;MQ(V,o)>0&&(U[o]={type:"ivec3",x:1,y:1},No(V,o))}if(!new RegExp(`uniform\\s+${t}\\s+${l}\\s*;`).test(V.shaderSource)){let o=`uniform ${t} ${l};`;V.shaderSource=o+V.shaderSource}let n=`${l}_${V._count++}`;if(m=wA(V,l,n),m===1&&Z)throw new I(`strict: shader source does not use uniform '${l}'.`);if(V.uniforms[l]=A,t==="sampler2D")V._uniforms[n]=function(){return V._textures[l]},V._updateFunctions.push(bQ(l));else if(t==="samplerCube")V._uniforms[n]=function(){return V._textures[l]},V._updateFunctions.push(uQ(l));else if(t.indexOf("mat")!==-1){let o=new go[t];V._uniforms[n]=function(){return go[t].fromColumnMajorArray(V.uniforms[l],o)}}else V._uniforms[n]=function(){return V.uniforms[l]}}}function xQ(V){let l=V.type;if(!s(l)){let Z=typeof V;if(Z==="number")l="float";else if(Z==="boolean")l="bool";else if(Z==="string"||V instanceof xl||V instanceof HTMLCanvasElement||V instanceof HTMLImageElement)/^([rgba]){1,4}$/i.test(V)?l="channels":V===H.DefaultCubeMapId?l="samplerCube":l="sampler2D";else if(Z==="object")if(Array.isArray(V))(V.length===4||V.length===9||V.length===16)&&(l=`mat${Math.sqrt(V.length)}`);else{let U=0;for(let A in V)V.hasOwnProperty(A)&&(U+=1);U>=2&&U<=4?l=`vec${U}`:U===6&&(l="samplerCube")}}return l}function DQ(V){let l=V._strict,Z=V._template.materials;for(let U in Z)if(Z.hasOwnProperty(U)){let A=new H({strict:l,fabric:Z[U],count:V._count});V._count=A._count,V._uniforms=jZ(V._uniforms,A._uniforms,!0),V.materials[U]=A,V._translucentFunctions=V._translucentFunctions.concat(A._translucentFunctions);let t="czm_getMaterial",m=`${t}_${V._count++}`;wA(A,t,m),V.shaderSource=A.shaderSource+V.shaderSource;let i=`${m}(materialInput)`;if(wA(V,U,i)===0&&l)throw new I(`strict: shader source does not use material '${U}'.`)}}function wA(V,l,Z,U){U=a(U,!0);let A=0,t="([\\w])?",m=`([\\w${U?".":""}])?`,i=new RegExp(m+l+t,"g");return V.shaderSource=V.shaderSource.replace(i,function(n,o,h){return o||h?n:(A+=1,Z)}),A}function MQ(V,l,Z){return wA(V,l,l,Z)}H._materialCache={_materials:{},addMaterial:function(V,l){this._materials[V]=l},getMaterial:function(V){return this._materials[V]}};H.DefaultImageId="czm_defaultImage";H.DefaultCubeMapId="czm_defaultCubeMap";H.ColorType="Color";H._materialCache.addMaterial(H.ColorType,{fabric:{type:H.ColorType,uniforms:{color:new z(1,0,0,.5)},components:{diffuse:"color.rgb",alpha:"color.a"}},translucent:function(V){return V.uniforms.color.alpha<1}});H.ImageType="Image";H._materialCache.addMaterial(H.ImageType,{fabric:{type:H.ImageType,uniforms:{image:H.DefaultImageId,repeat:new q(1,1),color:new z(1,1,1,1)},components:{diffuse:"texture(image, fract(repeat * materialInput.st)).rgb * color.rgb",alpha:"texture(image, fract(repeat * materialInput.st)).a * color.a"}},translucent:function(V){return V.uniforms.color.alpha<1}});H.DiffuseMapType="DiffuseMap";H._materialCache.addMaterial(H.DiffuseMapType,{fabric:{type:H.DiffuseMapType,uniforms:{image:H.DefaultImageId,channels:"rgb",repeat:new q(1,1)},components:{diffuse:"texture(image, fract(repeat * materialInput.st)).channels"}},translucent:!1});H.AlphaMapType="AlphaMap";H._materialCache.addMaterial(H.AlphaMapType,{fabric:{type:H.AlphaMapType,uniforms:{image:H.DefaultImageId,channel:"a",repeat:new q(1,1)},components:{alpha:"texture(image, fract(repeat * materialInput.st)).channel"}},translucent:!0});H.SpecularMapType="SpecularMap";H._materialCache.addMaterial(H.SpecularMapType,{fabric:{type:H.SpecularMapType,uniforms:{image:H.DefaultImageId,channel:"r",repeat:new q(1,1)},components:{specular:"texture(image, fract(repeat * materialInput.st)).channel"}},translucent:!1});H.EmissionMapType="EmissionMap";H._materialCache.addMaterial(H.EmissionMapType,{fabric:{type:H.EmissionMapType,uniforms:{image:H.DefaultImageId,channels:"rgb",repeat:new q(1,1)},components:{emission:"texture(image, fract(repeat * materialInput.st)).channels"}},translucent:!1});H.BumpMapType="BumpMap";H._materialCache.addMaterial(H.BumpMapType,{fabric:{type:H.BumpMapType,uniforms:{image:H.DefaultImageId,channel:"r",strength:.8,repeat:new q(1,1)},source:mo},translucent:!1});H.NormalMapType="NormalMap";H._materialCache.addMaterial(H.NormalMapType,{fabric:{type:H.NormalMapType,uniforms:{image:H.DefaultImageId,channels:"rgb",strength:.8,repeat:new q(1,1)},source:ho},translucent:!1});H.GridType="Grid";H._materialCache.addMaterial(H.GridType,{fabric:{type:H.GridType,uniforms:{color:new z(0,1,0,1),cellAlpha:.1,lineCount:new q(8,8),lineThickness:new q(1,1),lineOffset:new q(0,0)},source:oo},translucent:function(V){let l=V.uniforms;return l.color.alpha<1||l.cellAlpha<1}});H.StripeType="Stripe";H._materialCache.addMaterial(H.StripeType,{fabric:{type:H.StripeType,uniforms:{horizontal:!0,evenColor:new z(1,1,1,.5),oddColor:new z(0,0,1,.5),offset:0,repeat:5},source:co},translucent:function(V){let l=V.uniforms;return l.evenColor.alpha<1||l.oddColor.alpha<1}});H.CheckerboardType="Checkerboard";H._materialCache.addMaterial(H.CheckerboardType,{fabric:{type:H.CheckerboardType,uniforms:{lightColor:new z(1,1,1,.5),darkColor:new z(0,0,0,.5),repeat:new q(5,5)},source:io},translucent:function(V){let l=V.uniforms;return l.lightColor.alpha<1||l.darkColor.alpha<1}});H.DotType="Dot";H._materialCache.addMaterial(H.DotType,{fabric:{type:H.DotType,uniforms:{lightColor:new z(1,1,0,.75),darkColor:new z(0,1,1,.75),repeat:new q(5,5)},source:no},translucent:function(V){let l=V.uniforms;return l.lightColor.alpha<1||l.darkColor.alpha<1}});H.WaterType="Water";H._materialCache.addMaterial(H.WaterType,{fabric:{type:H.WaterType,uniforms:{baseWaterColor:new z(.2,.3,.6,1),blendColor:new z(0,1,.699,1),specularMap:H.DefaultImageId,normalMap:H.DefaultImageId,frequency:10,animationSpeed:.01,amplitude:1,specularIntensity:.5,fadeFactor:1},source:So},translucent:function(V){let l=V.uniforms;return l.baseWaterColor.alpha<1||l.blendColor.alpha<1}});H.RimLightingType="RimLighting";H._materialCache.addMaterial(H.RimLightingType,{fabric:{type:H.RimLightingType,uniforms:{color:new z(1,0,0,.7),rimColor:new z(1,1,1,.4),width:.3},source:Qo},translucent:function(V){let l=V.uniforms;return l.color.alpha<1||l.rimColor.alpha<1}});H.FadeType="Fade";H._materialCache.addMaterial(H.FadeType,{fabric:{type:H.FadeType,uniforms:{fadeInColor:new z(1,0,0,1),fadeOutColor:new z(0,0,0,0),maximumDistance:.5,repeat:!0,fadeDirection:{x:!0,y:!0},time:new q(.5,.5)},source:ro},translucent:function(V){let l=V.uniforms;return l.fadeInColor.alpha<1||l.fadeOutColor.alpha<1}});H.PolylineArrowType="PolylineArrow";H._materialCache.addMaterial(H.PolylineArrowType,{fabric:{type:H.PolylineArrowType,uniforms:{color:new z(1,1,1,1)},source:Ro},translucent:!0});H.PolylineDashType="PolylineDash";H._materialCache.addMaterial(H.PolylineDashType,{fabric:{type:H.PolylineDashType,uniforms:{color:new z(1,0,1,1),gapColor:new z(0,0,0,0),dashLength:16,dashPattern:255},source:To},translucent:!0});H.PolylineGlowType="PolylineGlow";H._materialCache.addMaterial(H.PolylineGlowType,{fabric:{type:H.PolylineGlowType,uniforms:{color:new z(0,.5,1,1),glowPower:.25,taperPower:1},source:Bo},translucent:!0});H.PolylineOutlineType="PolylineOutline";H._materialCache.addMaterial(H.PolylineOutlineType,{fabric:{type:H.PolylineOutlineType,uniforms:{color:new z(1,1,1,1),outlineColor:new z(1,0,0,1),outlineWidth:1},source:Fo},translucent:function(V){let l=V.uniforms;return l.color.alpha<1||l.outlineColor.alpha<1}});H.ElevationContourType="ElevationContour";H._materialCache.addMaterial(H.ElevationContourType,{fabric:{type:H.ElevationContourType,uniforms:{spacing:100,color:new z(1,0,0,1),width:1},source:so},translucent:!1});H.ElevationRampType="ElevationRamp";H._materialCache.addMaterial(H.ElevationRampType,{fabric:{type:H.ElevationRampType,uniforms:{image:H.DefaultImageId,minimumHeight:0,maximumHeight:1e4},source:ao},translucent:!1});H.SlopeRampMaterialType="SlopeRamp";H._materialCache.addMaterial(H.SlopeRampMaterialType,{fabric:{type:H.SlopeRampMaterialType,uniforms:{image:H.DefaultImageId},source:Io},translucent:!1});H.AspectRampMaterialType="AspectRamp";H._materialCache.addMaterial(H.AspectRampMaterialType,{fabric:{type:H.AspectRampMaterialType,uniforms:{image:H.DefaultImageId},source:eo},translucent:!1});H.ElevationBandType="ElevationBand";H._materialCache.addMaterial(H.ElevationBandType,{fabric:{type:H.ElevationBandType,uniforms:{heights:H.DefaultImageId,colors:H.DefaultImageId},source:Go},translucent:!0});var gm=H;var Nm=`${Ze}
${qr}`,_Q=$r;CW.isInternetExplorer()||(Nm=`#define CLIP_POLYLINE 
${Nm}`);function gU(V){V=a(V,a.EMPTY_OBJECT);let l=a(V.translucent,!0),Z=!1,U=gU.VERTEX_FORMAT;this.material=s(V.material)?V.material:gm.fromType(gm.ColorType),this.translucent=l,this._vertexShaderSource=a(V.vertexShaderSource,Nm),this._fragmentShaderSource=a(V.fragmentShaderSource,_Q),this._renderState=dZ.getDefaultRenderState(l,Z,V.renderState),this._closed=Z,this._vertexFormat=U}Object.defineProperties(gU.prototype,{vertexShaderSource:{get:function(){let V=this._vertexShaderSource;return this.material.shaderSource.search(/in\s+float\s+v_polylineAngle;/g)!==-1&&(V=`#define POLYLINE_DASH
${V}`),V}},fragmentShaderSource:{get:function(){return this._fragmentShaderSource}},renderState:{get:function(){return this._renderState}},closed:{get:function(){return this._closed}},vertexFormat:{get:function(){return this._vertexFormat}}});gU.VERTEX_FORMAT=dU.POSITION_AND_ST;gU.prototype.getFragmentShaderSource=dZ.prototype.getFragmentShaderSource;gU.prototype.isTranslucent=dZ.prototype.isTranslucent;gU.prototype.getRenderState=dZ.prototype.getRenderState;var Eo=gU;function OQ(V,l){if(!s(V))throw new I("array is required.");if(!s(l)||l<1)throw new I("numberOfArrays must be greater than 0.");let Z=[],U=V.length,A=0;for(;A<U;){let t=Math.ceil((U-A)/l--);Z.push(V.slice(A,A+t)),A+=t}return Z}var po=OQ;function xW(V,l,Z){if(!s(V))throw new I("context is required");if(!s(l))throw new I("attributes is required");if(!s(Z))throw new I("numberOfInstances is required");if(this._attributes=l,this._numberOfInstances=Z,l.length===0)return;let U=wQ(l),A=V.floatingPointTexture,t=U===SV.FLOAT&&!A,m=YQ(l,t),i=yQ(m,l,t),n=Math.floor($V.maximumTextureSize/i),o=Math.min(Z,n),h=i*o,R=Math.ceil(Z/o),c=1/h,Q=c*.5,T=1/R,S=T*.5;this._textureDimensions=new q(h,R),this._textureStep=new CV(c,Q,T,S),this._pixelDatatype=t?SV.UNSIGNED_BYTE:U,this._packFloats=t,this._offsets=m,this._stride=i,this._texture=void 0;let p=4*h*R;this._batchValues=U===SV.FLOAT&&!t?new Float32Array(p):new Uint8Array(p),this._batchValuesDirty=!1}Object.defineProperties(xW.prototype,{attributes:{get:function(){return this._attributes}},numberOfInstances:{get:function(){return this._numberOfInstances}}});function wQ(V){let l=!1,Z=V.length;for(let U=0;U<Z;++U)if(V[U].componentDatatype!==iV.UNSIGNED_BYTE){l=!0;break}return l?SV.FLOAT:SV.UNSIGNED_BYTE}function fo(V,l){let Z=V[l].componentsPerAttribute;return Z===2?q:Z===3?w:Z===4?CV:Number}function YQ(V,l){let Z=new Array(V.length),U=0,A=V.length;for(let t=0;t<A;++t){let i=V[t].componentDatatype;Z[t]=U,i!==iV.UNSIGNED_BYTE&&l?U+=4:++U}return Z}function yQ(V,l,Z){let U=V.length,A=V[U-1];return l[U-1].componentDatatype!==iV.UNSIGNED_BYTE&&Z?A+4:A+1}var YA=new CV;function vQ(V,l,Z){let U=CV.unpack(V,l,YA),A=CV.unpackFloat(U);U=CV.unpack(V,l+4,YA);let t=CV.unpackFloat(U);U=CV.unpack(V,l+8,YA);let m=CV.unpackFloat(U);U=CV.unpack(V,l+12,YA);let i=CV.unpackFloat(U);return CV.fromElements(A,t,m,i,Z)}function zQ(V,l,Z){let U=CV.packFloat(V.x,YA);CV.pack(U,l,Z),U=CV.packFloat(V.y,U),CV.pack(U,l,Z+4),U=CV.packFloat(V.z,U),CV.pack(U,l,Z+8),U=CV.packFloat(V.w,U),CV.pack(U,l,Z+12)}var Xo=new CV;xW.prototype.getBatchedAttribute=function(V,l,Z){if(V<0||V>=this._numberOfInstances)throw new I("instanceIndex is out of range.");if(l<0||l>=this._attributes.length)throw new I("attributeIndex is out of range");let U=this._attributes,A=this._offsets[l],m=4*this._stride*V+4*A,i;this._packFloats&&U[l].componentDatatype!==SV.UNSIGNED_BYTE?i=vQ(this._batchValues,m,Xo):i=CV.unpack(this._batchValues,m,Xo);let n=fo(U,l);return s(n.fromCartesian4)?n.fromCartesian4(i,Z):s(n.clone)?n.clone(i,Z):i.x};var kQ=[void 0,void 0,new q,new w,new CV],HQ=new CV;xW.prototype.setBatchedAttribute=function(V,l,Z){if(V<0||V>=this._numberOfInstances)throw new I("instanceIndex is out of range.");if(l<0||l>=this._attributes.length)throw new I("attributeIndex is out of range");if(!s(Z))throw new I("value is required.");let U=this._attributes,A=kQ[U[l].componentsPerAttribute],t=this.getBatchedAttribute(V,l,A),m=fo(this._attributes,l);if(s(m.equals)?m.equals(t,Z):t===Z)return;let n=HQ;n.x=s(Z.x)?Z.x:Z,n.y=s(Z.y)?Z.y:0,n.z=s(Z.z)?Z.z:0,n.w=s(Z.w)?Z.w:0;let o=this._offsets[l],R=4*this._stride*V+4*o;this._packFloats&&U[l].componentDatatype!==SV.UNSIGNED_BYTE?zQ(n,this._batchValues,R):CV.pack(n,this._batchValues,R),this._batchValuesDirty=!0};function LQ(V,l){let Z=V._textureDimensions;V._texture=new WW({context:l,pixelFormat:cV.RGBA,pixelDatatype:V._pixelDatatype,width:Z.x,height:Z.y,sampler:dW.NEAREST,flipY:!1})}function KQ(V){let l=V._textureDimensions;V._texture.copyFrom({source:{width:l.x,height:l.y,arrayBufferView:V._batchValues}})}xW.prototype.update=function(V){s(this._texture)&&!this._batchValuesDirty||this._attributes.length===0||(this._batchValuesDirty=!1,s(this._texture)||LQ(this,V.context),KQ(this))};xW.prototype.getUniformMapCallback=function(){let V=this;return function(l){return V._attributes.length===0?l:jZ(l,{batchTexture:function(){return V._texture},batchTextureDimensions:function(){return V._textureDimensions},batchTextureStep:function(){return V._textureStep}})}};function PQ(V){let l=V._stride;return V._textureDimensions.y===1?`uniform vec4 batchTextureStep; 
vec2 computeSt(float batchId) 
{ 
    float stepX = batchTextureStep.x; 
    float centerX = batchTextureStep.y; 
    float numberOfAttributes = float(${l}); 
    return vec2(centerX + (batchId * numberOfAttributes * stepX), 0.5); 
} 
`:`uniform vec4 batchTextureStep; 
uniform vec2 batchTextureDimensions; 
vec2 computeSt(float batchId) 
{ 
    float stepX = batchTextureStep.x; 
    float centerX = batchTextureStep.y; 
    float stepY = batchTextureStep.z; 
    float centerY = batchTextureStep.w; 
    float numberOfAttributes = float(${l}); 
    float xId = mod(batchId * numberOfAttributes, batchTextureDimensions.x); 
    float yId = floor(batchId * numberOfAttributes / batchTextureDimensions.x); 
    return vec2(centerX + (xId * stepX), centerY + (yId * stepY)); 
} 
`}function jQ(V){return V===1?"float":`vec${V}`}function qQ(V){return V===1?".x":V===2?".xy":V===3?".xyz":""}function $Q(V,l){let U=V._attributes[l],A=U.componentsPerAttribute,t=U.functionName,m=jQ(A),i=qQ(A),n=V._offsets[l],o=`${m} ${t}(float batchId) 
{ 
    vec2 st = computeSt(batchId); 
    st.x += batchTextureStep.x * float(${n}); 
`;return V._packFloats&&U.componentDatatype!==SV.UNSIGNED_BYTE?o+=`vec4 textureValue; 
textureValue.x = czm_unpackFloat(texture(batchTexture, st)); 
textureValue.y = czm_unpackFloat(texture(batchTexture, st + vec2(batchTextureStep.x, 0.0))); 
textureValue.z = czm_unpackFloat(texture(batchTexture, st + vec2(batchTextureStep.x * 2.0, 0.0))); 
textureValue.w = czm_unpackFloat(texture(batchTexture, st + vec2(batchTextureStep.x * 3.0, 0.0))); 
`:o+=`    vec4 textureValue = texture(batchTexture, st); 
`,o+=`    ${m} value = textureValue${i}; 
`,V._pixelDatatype===SV.UNSIGNED_BYTE&&U.componentDatatype===iV.UNSIGNED_BYTE&&!U.normalize?o+=`value *= 255.0; 
`:V._pixelDatatype===SV.FLOAT&&U.componentDatatype===iV.UNSIGNED_BYTE&&U.normalize&&(o+=`value /= 255.0; 
`),o+=`    return value; 
} 
`,o}xW.prototype.getVertexShaderCallback=function(){let V=this._attributes;if(V.length===0)return function(U){return U};let l=`uniform highp sampler2D batchTexture; 
`;l+=`${PQ(this)}
`;let Z=V.length;for(let U=0;U<Z;++U)l+=$Q(this,U);return function(U){let A=U.indexOf("void main"),t=U.substring(0,A),m=U.substring(A);return`${t}
${l}
${m}`}};xW.prototype.isDestroyed=function(){return!1};xW.prototype.destroy=function(){return this._texture=this._texture&&this._texture.destroy(),fV(this)};var bo=xW;var VI={NEVER:J.NEVER,LESS:J.LESS,EQUAL:J.EQUAL,LESS_OR_EQUAL:J.LEQUAL,GREATER:J.GREATER,NOT_EQUAL:J.NOTEQUAL,GREATER_OR_EQUAL:J.GEQUAL,ALWAYS:J.ALWAYS},Ue=Object.freeze(VI);var lI={READY:0,CREATING:1,CREATED:2,COMBINING:3,COMBINED:4,COMPLETE:5,FAILED:6},Ol=Object.freeze(lI);var pZ={DISABLED:0,ENABLED:1,CAST_ONLY:2,RECEIVE_ONLY:3};pZ.NUMBER_OF_SHADOW_MODES=4;pZ.castShadows=function(V){return V===pZ.ENABLED||V===pZ.CAST_ONLY};pZ.receiveShadows=function(V){return V===pZ.ENABLED||V===pZ.RECEIVE_ONLY};pZ.fromCastReceive=function(V,l){return V&&l?pZ.ENABLED:V?pZ.CAST_ONLY:l?pZ.RECEIVE_ONLY:pZ.DISABLED};var Ae=Object.freeze(pZ);function cl(V){if(V=a(V,a.EMPTY_OBJECT),this.geometryInstances=V.geometryInstances,this.appearance=V.appearance,this._appearance=void 0,this._material=void 0,this.depthFailAppearance=V.depthFailAppearance,this._depthFailAppearance=void 0,this._depthFailMaterial=void 0,this.modelMatrix=nV.clone(a(V.modelMatrix,nV.IDENTITY)),this._modelMatrix=new nV,this.show=a(V.show,!0),this._vertexCacheOptimize=a(V.vertexCacheOptimize,!1),this._interleave=a(V.interleave,!1),this._releaseGeometryInstances=a(V.releaseGeometryInstances,!0),this._allowPicking=a(V.allowPicking,!0),this._asynchronous=a(V.asynchronous,!0),this._compressVertices=a(V.compressVertices,!0),this.cull=a(V.cull,!0),this.debugShowBoundingVolume=a(V.debugShowBoundingVolume,!1),this.rtcCenter=V.rtcCenter,s(this.rtcCenter)&&(!s(this.geometryInstances)||Array.isArray(this.geometryInstances)&&this.geometryInstances.length!==1))throw new I("Relative-to-center rendering only supports one geometry instance.");this.shadows=a(V.shadows,Ae.DISABLED),this._translucent=void 0,this._state=Ol.READY,this._geometries=[],this._error=void 0,this._numberOfInstances=0,this._boundingSpheres=[],this._boundingSphereWC=[],this._boundingSphereCV=[],this._boundingSphere2D=[],this._boundingSphereMorph=[],this._perInstanceAttributeCache=new Map,this._instanceIds=[],this._lastPerInstanceAttributeIndex=0,this._va=[],this._attributeLocations=void 0,this._primitiveType=void 0,this._frontFaceRS=void 0,this._backFaceRS=void 0,this._sp=void 0,this._depthFailAppearance=void 0,this._spDepthFail=void 0,this._frontFaceDepthFailRS=void 0,this._backFaceDepthFailRS=void 0,this._pickIds=[],this._colorCommands=[],this._pickCommands=[],this._createBoundingVolumeFunction=V._createBoundingVolumeFunction,this._createRenderStatesFunction=V._createRenderStatesFunction,this._createShaderProgramFunction=V._createShaderProgramFunction,this._createCommandsFunction=V._createCommandsFunction,this._updateAndQueueCommandsFunction=V._updateAndQueueCommandsFunction,this._createPickOffsets=V._createPickOffsets,this._pickOffsets=void 0,this._createGeometryResults=void 0,this._ready=!1,this._batchTable=void 0,this._batchTableAttributeIndices=void 0,this._offsetInstanceExtend=void 0,this._batchTableOffsetAttribute2DIndex=void 0,this._batchTableOffsetsUpdated=!1,this._instanceBoundingSpheres=void 0,this._instanceBoundingSpheresCV=void 0,this._tempBoundingSpheres=void 0,this._recomputeBoundingSpheres=!1,this._batchTableBoundingSpheresUpdated=!1,this._batchTableBoundingSphereAttributeIndices=void 0}Object.defineProperties(cl.prototype,{vertexCacheOptimize:{get:function(){return this._vertexCacheOptimize}},interleave:{get:function(){return this._interleave}},releaseGeometryInstances:{get:function(){return this._releaseGeometryInstances}},allowPicking:{get:function(){return this._allowPicking}},asynchronous:{get:function(){return this._asynchronous}},compressVertices:{get:function(){return this._compressVertices}},ready:{get:function(){return this._ready}}});function ZI(V){let l=V.length,Z=[],U=V[0].attributes,A;for(A in U)if(U.hasOwnProperty(A)&&s(U[A])){let t=U[A],m=!0;for(let i=1;i<l;++i){let n=V[i].attributes[A];if(!s(n)||t.componentDatatype!==n.componentDatatype||t.componentsPerAttribute!==n.componentsPerAttribute||t.normalize!==n.normalize){m=!1;break}}m&&Z.push(A)}return Z}var WI=new q,UI=new w,Yo=new CV;function yo(V){let l=V.length;if(l===1)return V[0];if(l===2)return q.unpack(V,0,WI);if(l===3)return w.unpack(V,0,UI);if(l===4)return CV.unpack(V,0,Yo)}function AI(V,l){let Z=V.geometryInstances,U=Array.isArray(Z)?Z:[Z],A=U.length;if(A===0)return;let t=ZI(U),m=t.length,i=[],n={},o={},h,c=U[0].attributes,Q,T,S;for(Q=0;Q<m;++Q)T=t[Q],S=c[T],n[T]=Q,i.push({functionName:`czm_batchTable_${T}`,componentDatatype:S.componentDatatype,componentsPerAttribute:S.componentsPerAttribute,normalize:S.normalize});t.indexOf("distanceDisplayCondition")!==-1&&(i.push({functionName:"czm_batchTable_boundingSphereCenter3DHigh",componentDatatype:iV.FLOAT,componentsPerAttribute:3},{functionName:"czm_batchTable_boundingSphereCenter3DLow",componentDatatype:iV.FLOAT,componentsPerAttribute:3},{functionName:"czm_batchTable_boundingSphereCenter2DHigh",componentDatatype:iV.FLOAT,componentsPerAttribute:3},{functionName:"czm_batchTable_boundingSphereCenter2DLow",componentDatatype:iV.FLOAT,componentsPerAttribute:3},{functionName:"czm_batchTable_boundingSphereRadius",componentDatatype:iV.FLOAT,componentsPerAttribute:1}),o.center3DHigh=i.length-5,o.center3DLow=i.length-4,o.center2DHigh=i.length-3,o.center2DLow=i.length-2,o.radius=i.length-1),t.indexOf("offset")!==-1&&(i.push({functionName:"czm_batchTable_offset2D",componentDatatype:iV.FLOAT,componentsPerAttribute:3}),h=i.length-1),i.push({functionName:"czm_batchTable_pickColor",componentDatatype:iV.UNSIGNED_BYTE,componentsPerAttribute:4,normalize:!0});let p=i.length,b=new bo(l,i,A);for(Q=0;Q<A;++Q){let E=U[Q];c=E.attributes;for(let ZV=0;ZV<m;++ZV){T=t[ZV],S=c[T];let j=yo(S.value),mV=n[T];b.setBatchedAttribute(Q,mV,j)}let D={primitive:a(E.pickPrimitive,V)};s(E.id)&&(D.id=E.id);let _=l.createPickId(D);V._pickIds.push(_);let Y=_.color,K=Yo;K.x=z.floatToByte(Y.red),K.y=z.floatToByte(Y.green),K.z=z.floatToByte(Y.blue),K.w=z.floatToByte(Y.alpha),b.setBatchedAttribute(Q,p-1,K)}V._batchTable=b,V._batchTableAttributeIndices=n,V._batchTableBoundingSphereAttributeIndices=o,V._batchTableOffsetAttribute2DIndex=h}function tI(V){let l;return Array.isArray(V.values)?l=V.values.slice(0):l=new V.values.constructor(V.values),new zi({componentDatatype:V.componentDatatype,componentsPerAttribute:V.componentsPerAttribute,normalize:V.normalize,values:l})}function eI(V){let l=V.attributes,Z=new Li;for(let A in l)l.hasOwnProperty(A)&&s(l[A])&&(Z[A]=tI(l[A]));let U;if(s(V.indices)){let A=V.indices;Array.isArray(A)?U=A.slice(0):U=new A.constructor(A)}return new Xt({attributes:Z,indices:U,primitiveType:V.primitiveType,boundingSphere:gV.clone(V.boundingSphere)})}function mI(V,l){return{geometry:l,attributes:V.attributes,modelMatrix:nV.clone(V.modelMatrix),pickPrimitive:V.pickPrimitive,id:V.id}}var iI=/in\s+vec(?:3|4)\s+(.*)3DHigh;/g;cl._modifyShaderPosition=function(V,l,Z){let U,A="",t="",m="";for(;(U=iI.exec(l))!==null;){let i=U[1],n=`vec4 czm_compute${i[0].toUpperCase()}${i.substr(1)}()`;n!=="vec4 czm_computePosition()"&&(A+=`${n};
`),s(V.rtcCenter)?(l=l.replace(/in\s+vec(?:3|4)\s+position3DHigh;/g,""),l=l.replace(/in\s+vec(?:3|4)\s+position3DLow;/g,""),A+=`uniform mat4 u_modifiedModelView;
`,t+=`in vec4 position;
`,m+=`${n}
{
    return u_modifiedModelView * position;
}

`,l=l.replace(/czm_modelViewRelativeToEye\s+\*\s+/g,""),l=l.replace(/czm_modelViewProjectionRelativeToEye/g,"czm_projection")):Z?m+=`${n}
{
    return czm_translateRelativeToEye(${i}3DHigh, ${i}3DLow);
}

`:(t+=`in vec3 ${i}2DHigh;
in vec3 ${i}2DLow;
`,m+=`${n}
{
    vec4 p;
    if (czm_morphTime == 1.0)
    {
        p = czm_translateRelativeToEye(${i}3DHigh, ${i}3DLow);
    }
    else if (czm_morphTime == 0.0)
    {
        p = czm_translateRelativeToEye(${i}2DHigh.zxy, ${i}2DLow.zxy);
    }
    else
    {
        p = czm_columbusViewMorph(
                czm_translateRelativeToEye(${i}2DHigh.zxy, ${i}2DLow.zxy),
                czm_translateRelativeToEye(${i}3DHigh, ${i}3DLow),
                czm_morphTime);
    }
    return p;
}

`)}return[A,t,l,m].join(`
`)};cl._appendShowToShader=function(V,l){return s(V._batchTableAttributeIndices.show)?`${kV.replaceMain(l,"czm_non_show_main")}
void main() 
{ 
    czm_non_show_main(); 
    gl_Position *= czm_batchTable_show(batchId); 
}`:l};cl._updateColorAttribute=function(V,l,Z){if(!s(V._batchTableAttributeIndices.color)&&!s(V._batchTableAttributeIndices.depthFailColor)||l.search(/in\s+vec4\s+color;/g)===-1)return l;if(Z&&!s(V._batchTableAttributeIndices.depthFailColor))throw new I("A depthFailColor per-instance attribute is required when using a depth fail appearance that uses a color attribute.");let U=l;return U=U.replace(/in\s+vec4\s+color;/g,""),Z?U=U.replace(/(\b)color(\b)/g,"$1czm_batchTable_depthFailColor(batchId)$2"):U=U.replace(/(\b)color(\b)/g,"$1czm_batchTable_color(batchId)$2"),U};function uo(V){return`${kV.replaceMain(V,"czm_non_pick_main")}
out vec4 v_pickColor; 
void main() 
{ 
    czm_non_pick_main(); 
    v_pickColor = czm_batchTable_pickColor(batchId); 
}`}function Jo(V){return`in vec4 v_pickColor;
${V}`}cl._updatePickColorAttribute=function(V){let l=V.replace(/in\s+vec4\s+pickColor;/g,"");return l=l.replace(/(\b)pickColor(\b)/g,"$1czm_batchTable_pickColor(batchId)$2"),l};cl._appendOffsetToShader=function(V,l){if(!s(V._batchTableAttributeIndices.offset))return l;let Z=`in float batchId;
`;Z+="in float applyOffset;";let U=l.replace(/in\s+float\s+batchId;/g,Z),A=`vec4 $1 = czm_computePosition();
`;return A+=`    if (czm_sceneMode == czm_sceneMode3D)
`,A+=`    {
`,A+="        $1 = $1 + vec4(czm_batchTable_offset(batchId) * applyOffset, 0.0);",A+=`    }
`,A+=`    else
`,A+=`    {
`,A+="        $1 = $1 + vec4(czm_batchTable_offset2D(batchId) * applyOffset, 0.0);",A+=`    }
`,U=U.replace(/vec4\s+([A-Za-z0-9_]+)\s+=\s+czm_computePosition\(\);/g,A),U};cl._appendDistanceDisplayConditionToShader=function(V,l,Z){if(!s(V._batchTableAttributeIndices.distanceDisplayCondition))return l;let U=kV.replaceMain(l,"czm_non_distanceDisplayCondition_main"),A=`void main() 
{ 
    czm_non_distanceDisplayCondition_main(); 
    vec2 distanceDisplayCondition = czm_batchTable_distanceDisplayCondition(batchId);
    vec3 boundingSphereCenter3DHigh = czm_batchTable_boundingSphereCenter3DHigh(batchId);
    vec3 boundingSphereCenter3DLow = czm_batchTable_boundingSphereCenter3DLow(batchId);
    float boundingSphereRadius = czm_batchTable_boundingSphereRadius(batchId);
`;return Z?A+=`    vec4 centerRTE = czm_translateRelativeToEye(boundingSphereCenter3DHigh, boundingSphereCenter3DLow);
`:A+=`    vec3 boundingSphereCenter2DHigh = czm_batchTable_boundingSphereCenter2DHigh(batchId);
    vec3 boundingSphereCenter2DLow = czm_batchTable_boundingSphereCenter2DLow(batchId);
    vec4 centerRTE;
    if (czm_morphTime == 1.0)
    {
        centerRTE = czm_translateRelativeToEye(boundingSphereCenter3DHigh, boundingSphereCenter3DLow);
    }
    else if (czm_morphTime == 0.0)
    {
        centerRTE = czm_translateRelativeToEye(boundingSphereCenter2DHigh.zxy, boundingSphereCenter2DLow.zxy);
    }
    else
    {
        centerRTE = czm_columbusViewMorph(
                czm_translateRelativeToEye(boundingSphereCenter2DHigh.zxy, boundingSphereCenter2DLow.zxy),
                czm_translateRelativeToEye(boundingSphereCenter3DHigh, boundingSphereCenter3DLow),
                czm_morphTime);
    }
`,A+=`    float radiusSq = boundingSphereRadius * boundingSphereRadius; 
    float distanceSq; 
    if (czm_sceneMode == czm_sceneMode2D) 
    { 
        distanceSq = czm_eyeHeight2D.y - radiusSq; 
    } 
    else 
    { 
        distanceSq = dot(centerRTE.xyz, centerRTE.xyz) - radiusSq; 
    } 
    distanceSq = max(distanceSq, 0.0); 
    float nearSq = distanceDisplayCondition.x * distanceDisplayCondition.x; 
    float farSq = distanceDisplayCondition.y * distanceDisplayCondition.y; 
    float show = (distanceSq >= nearSq && distanceSq <= farSq) ? 1.0 : 0.0; 
    gl_Position *= show; 
}`,`${U}
${A}`};function xo(V,l){if(!V.compressVertices)return l;let Z=l.search(/in\s+vec3\s+normal;/g)!==-1,U=l.search(/in\s+vec2\s+st;/g)!==-1;if(!Z&&!U)return l;let A=l.search(/in\s+vec3\s+tangent;/g)!==-1,t=l.search(/in\s+vec3\s+bitangent;/g)!==-1,m=U&&Z?2:1;m+=A||t?1:0;let i=m>1?`vec${m}`:"float",n="compressedAttributes",o=`in ${i} ${n};`,h="",R="";if(U){h+=`vec2 st;
`;let T=m>1?`${n}.x`:n;R+=`    st = czm_decompressTextureCoordinates(${T});
`}Z&&A&&t?(h+=`vec3 normal;
vec3 tangent;
vec3 bitangent;
`,R+=`    czm_octDecode(${n}.${U?"yz":"xy"}, normal, tangent, bitangent);
`):(Z&&(h+=`vec3 normal;
`,R+=`    normal = czm_octDecode(${n}${m>1?`.${U?"y":"x"}`:""});
`),A&&(h+=`vec3 tangent;
`,R+=`    tangent = czm_octDecode(${n}.${U&&Z?"z":"y"});
`),t&&(h+=`vec3 bitangent;
`,R+=`    bitangent = czm_octDecode(${n}.${U&&Z?"z":"y"});
`));let c=l;c=c.replace(/in\s+vec3\s+normal;/g,""),c=c.replace(/in\s+vec2\s+st;/g,""),c=c.replace(/in\s+vec3\s+tangent;/g,""),c=c.replace(/in\s+vec3\s+bitangent;/g,""),c=kV.replaceMain(c,"czm_non_compressed_main");let Q=`void main() 
{ 
${R}    czm_non_compressed_main(); 
}`;return[o,h,c,Q].join(`
`)}function nI(V){let l=kV.replaceMain(V,"czm_non_depth_clamp_main");return l+=`void main() {
    czm_non_depth_clamp_main();
    gl_Position = czm_depthClamp(gl_Position);}
`,l}function GI(V){let l=kV.replaceMain(V,"czm_non_depth_clamp_main");return l+=`void main() {
    czm_non_depth_clamp_main();
    #if defined(LOG_DEPTH)
        czm_writeLogDepth();
    #else
        czm_writeDepthClamp();
    #endif
}
`,l}function Do(V,l){let Z=V.vertexAttributes;for(let U in Z)if(Z.hasOwnProperty(U)&&!s(l[U]))throw new I(`Appearance/Geometry mismatch.  The appearance requires vertex shader attribute input '${U}', which was not computed as part of the Geometry.  Use the appearance's vertexFormat property when constructing the geometry.`)}function sI(V,l){return function(){return V[l]}}var Em=Math.max(CW.hardwareConcurrency-1,1),te,aI=new $W("combineGeometry");function rI(V,l){let Z,U,A,t,m=V._instanceIds;if(V._state===Ol.READY){Z=Array.isArray(V.geometryInstances)?V.geometryInstances:[V.geometryInstances];let i=V._numberOfInstances=Z.length,n=[],o=[];for(A=0;A<i;++A){if(U=Z[A].geometry,m.push(Z[A].id),!s(U._workerName))throw new I("_workerName must be defined for asynchronous geometry.");o.push({moduleName:U._workerName,geometry:U})}if(!s(te))for(te=new Array(Em),A=0;A<Em;A++)te[A]=new $W("createGeometry");let h;for(o=po(o,Em),A=0;A<o.length;A++){let R=0,c=o[A],Q=c.length;for(t=0;t<Q;++t)h=c[t],U=h.geometry,s(U.constructor.pack)&&(h.offset=R,R+=a(U.constructor.packedLength,U.packedLength));let T;if(R>0){let S=new Float64Array(R);for(T=[S.buffer],t=0;t<Q;++t)h=c[t],U=h.geometry,s(U.constructor.pack)&&(U.constructor.pack(U,S,h.offset),h.geometry=S)}n.push(te[A].scheduleTask({subTasks:o[A]},T))}V._state=Ol.CREATING,Promise.all(n).then(function(R){V._createGeometryResults=R,V._state=Ol.CREATED}).catch(function(R){vA(V,l,Ol.FAILED,R)})}else if(V._state===Ol.CREATED){let i=[];Z=Array.isArray(V.geometryInstances)?V.geometryInstances:[V.geometryInstances];let n=l.scene3DOnly,o=l.mapProjection,h=aI.scheduleTask(ft.packCombineGeometryParameters({createGeometryResults:V._createGeometryResults,instances:Z,ellipsoid:o.ellipsoid,projection:o,elementIndexUintSupported:l.context.elementIndexUint,scene3DOnly:n,vertexCacheOptimize:V.vertexCacheOptimize,compressVertices:V.compressVertices,modelMatrix:V.modelMatrix,createPickOffsets:V._createPickOffsets},i),i);V._createGeometryResults=void 0,V._state=Ol.COMBINING,Promise.resolve(h).then(function(R){let c=ft.unpackCombineGeometryResults(R);V._geometries=c.geometries,V._attributeLocations=c.attributeLocations,V.modelMatrix=nV.clone(c.modelMatrix,V.modelMatrix),V._pickOffsets=c.pickOffsets,V._offsetInstanceExtend=c.offsetInstanceExtend,V._instanceBoundingSpheres=c.boundingSpheres,V._instanceBoundingSpheresCV=c.boundingSpheresCV,s(V._geometries)&&V._geometries.length>0?(V._recomputeBoundingSpheres=!0,V._state=Ol.COMBINED):vA(V,l,Ol.FAILED,void 0)}).catch(function(R){vA(V,l,Ol.FAILED,R)})}}function oI(V,l){let Z=Array.isArray(V.geometryInstances)?V.geometryInstances:[V.geometryInstances],U=V._numberOfInstances=Z.length,A=new Array(U),t=V._instanceIds,m,i,n=0;for(i=0;i<U;i++){m=Z[i];let c=m.geometry,Q;s(c.attributes)&&s(c.primitiveType)?Q=eI(c):Q=c.constructor.createGeometry(c),A[n++]=mI(m,Q),t.push(m.id)}A.length=n;let o=l.scene3DOnly,h=l.mapProjection,R=ft.combineGeometry({instances:A,ellipsoid:h.ellipsoid,projection:h,elementIndexUintSupported:l.context.elementIndexUint,scene3DOnly:o,vertexCacheOptimize:V.vertexCacheOptimize,compressVertices:V.compressVertices,modelMatrix:V.modelMatrix,createPickOffsets:V._createPickOffsets});V._geometries=R.geometries,V._attributeLocations=R.attributeLocations,V.modelMatrix=nV.clone(R.modelMatrix,V.modelMatrix),V._pickOffsets=R.pickOffsets,V._offsetInstanceExtend=R.offsetInstanceExtend,V._instanceBoundingSpheres=R.boundingSpheres,V._instanceBoundingSpheresCV=R.boundingSpheresCV,s(V._geometries)&&V._geometries.length>0?(V._recomputeBoundingSpheres=!0,V._state=Ol.COMBINED):vA(V,l,Ol.FAILED,void 0)}function hI(V,l){let Z=V._batchTableAttributeIndices.offset;if(!V._recomputeBoundingSpheres||!s(Z)){V._recomputeBoundingSpheres=!1;return}let U,A=V._offsetInstanceExtend,t=V._instanceBoundingSpheres,m=t.length,i=V._tempBoundingSpheres;if(!s(i)){for(i=new Array(m),U=0;U<m;U++)i[U]=new gV;V._tempBoundingSpheres=i}for(U=0;U<m;++U){let S=i[U],p=V._batchTable.getBatchedAttribute(U,Z,new w);S=t[U].clone(S),Ho(S,p,A[U])}let n=[],o=[],h=[];for(U=0;U<m;++U){let S=i[U];S.center.x-S.radius>0||gV.intersectPlane(S,wi.ORIGIN_ZX_PLANE)!==Mi.INTERSECTING?n.push(S):(o.push(S),h.push(S))}let R=n[0],c=h[0],Q=o[0];for(U=1;U<n.length;U++)R=gV.union(R,n[U]);for(U=1;U<h.length;U++)c=gV.union(c,h[U]);for(U=1;U<o.length;U++)Q=gV.union(Q,o[U]);let T=[];for(s(R)&&T.push(R),s(c)&&T.push(c),s(Q)&&T.push(Q),U=0;U<T.length;U++){let S=T[U].clone(V._boundingSpheres[U]);V._boundingSpheres[U]=S,V._boundingSphereCV[U]=gV.projectTo2D(S,l.mapProjection,V._boundingSphereCV[U])}cl._updateBoundingVolumes(V,l,V.modelMatrix,!0),V._recomputeBoundingSpheres=!1}var Mo=new Pl,vo=new Ul,zo=new w,ko=new gV;function RI(V,l){if(!s(V._batchTableAttributeIndices.distanceDisplayCondition)||V._batchTableBoundingSpheresUpdated)return;let U=V._batchTableBoundingSphereAttributeIndices,A=U.center3DHigh,t=U.center3DLow,m=U.center2DHigh,i=U.center2DLow,n=U.radius,o=l.mapProjection,h=o.ellipsoid,R=V._batchTable,c=V._instanceBoundingSpheres,Q=c.length;for(let T=0;T<Q;++T){let S=c[T];if(!s(S))continue;let p=V.modelMatrix;s(p)&&(S=gV.transform(S,p,ko));let b=S.center,E=S.radius,D=Pl.fromCartesian(b,Mo);if(R.setBatchedAttribute(T,A,D.high),R.setBatchedAttribute(T,t,D.low),!l.scene3DOnly){let _=h.cartesianToCartographic(b,vo),Y=o.project(_,zo);D=Pl.fromCartesian(Y,Mo),R.setBatchedAttribute(T,m,D.high),R.setBatchedAttribute(T,i,D.low)}R.setBatchedAttribute(T,n,E)}V._batchTableBoundingSpheresUpdated=!0}var pm=new w,dI=new w;function _o(V,l){if(!s(V._batchTableAttributeIndices.offset)||V._batchTableOffsetsUpdated||l.scene3DOnly)return;let U=V._batchTableOffsetAttribute2DIndex,A=l.mapProjection,t=A.ellipsoid,m=V._batchTable,i=V._instanceBoundingSpheres,n=i.length;for(let o=0;o<n;++o){let h=i[o];if(!s(h))continue;let R=m.getBatchedAttribute(o,V._batchTableAttributeIndices.offset);if(w.equals(R,w.ZERO)){m.setBatchedAttribute(o,U,w.ZERO);continue}let c=V.modelMatrix;s(c)&&(h=gV.transform(h,c,ko));let Q=h.center;Q=t.scaleToGeodeticSurface(Q,dI);let T=t.cartesianToCartographic(Q,vo),S=A.project(T,zo),p=w.add(R,Q,pm);T=t.cartesianToCartographic(p,T);let b=A.project(T,pm),E=w.subtract(b,S,pm),D=E.x;E.x=E.z,E.z=E.y,E.y=D,m.setBatchedAttribute(o,U,E)}V._batchTableOffsetsUpdated=!0}function TI(V,l){let Z=V._attributeLocations,U=V._geometries,A=l.scene3DOnly,t=l.context,m=[],i=U.length;for(let n=0;n<i;++n){let o=U[n];if(m.push(zt.fromGeometry({context:t,geometry:o,attributeLocations:Z,bufferUsage:XV.STATIC_DRAW,interleave:V._interleave})),s(V._createBoundingVolumeFunction))V._createBoundingVolumeFunction(l,o);else if(V._boundingSpheres.push(gV.clone(o.boundingSphere)),V._boundingSphereWC.push(new gV),!A){let h=o.boundingSphereCV.center,R=h.x,c=h.y,Q=h.z;h.x=Q,h.y=R,h.z=c,V._boundingSphereCV.push(gV.clone(o.boundingSphereCV)),V._boundingSphere2D.push(new gV),V._boundingSphereMorph.push(new gV)}}V._va=m,V._primitiveType=U[0].primitiveType,V.releaseGeometryInstances&&(V.geometryInstances=void 0),V._geometries=void 0,vA(V,l,Ol.COMPLETE,void 0)}function BI(V,l,Z,U){let A=Z.getRenderState(),t;U?(t=PZ(A,!1),t.cull={enabled:!0,face:uW.BACK},V._frontFaceRS=sl.fromCache(t),t.cull.face=uW.FRONT,V._backFaceRS=sl.fromCache(t)):(V._frontFaceRS=sl.fromCache(A),V._backFaceRS=V._frontFaceRS),t=PZ(A,!1),s(V._depthFailAppearance)&&(t.depthTest.enabled=!1),s(V._depthFailAppearance)&&(A=V._depthFailAppearance.getRenderState(),t=PZ(A,!1),t.depthTest.func=Ue.GREATER,U?(t.cull={enabled:!0,face:uW.BACK},V._frontFaceDepthFailRS=sl.fromCache(t),t.cull.face=uW.FRONT,V._backFaceDepthFailRS=sl.fromCache(t)):(V._frontFaceDepthFailRS=sl.fromCache(t),V._backFaceDepthFailRS=V._frontFaceRS))}function FI(V,l,Z){let U=l.context,A=V._attributeLocations,t=V._batchTable.getVertexShaderCallback()(Z.vertexShaderSource);t=cl._appendOffsetToShader(V,t),t=cl._appendShowToShader(V,t),t=cl._appendDistanceDisplayConditionToShader(V,t,l.scene3DOnly),t=uo(t),t=cl._updateColorAttribute(V,t,!1),t=xo(V,t),t=cl._modifyShaderPosition(V,t,l.scene3DOnly);let m=Z.getFragmentShaderSource();m=Jo(m),V._sp=Dl.replaceCache({context:U,shaderProgram:V._sp,vertexShaderSource:t,fragmentShaderSource:m,attributeLocations:A}),Do(V._sp,A),s(V._depthFailAppearance)&&(t=V._batchTable.getVertexShaderCallback()(V._depthFailAppearance.vertexShaderSource),t=cl._appendShowToShader(V,t),t=cl._appendDistanceDisplayConditionToShader(V,t,l.scene3DOnly),t=uo(t),t=cl._updateColorAttribute(V,t,!0),t=xo(V,t),t=cl._modifyShaderPosition(V,t,l.scene3DOnly),t=nI(t),m=V._depthFailAppearance.getFragmentShaderSource(),m=Jo(m),m=GI(m),V._spDepthFail=Dl.replaceCache({context:U,shaderProgram:V._spDepthFail,vertexShaderSource:t,fragmentShaderSource:m,attributeLocations:A}),Do(V._spDepthFail,A))}var yA=new nV,Oo=new w;function wo(V,l,Z,U){let A=s(Z)?Z._uniforms:void 0,t={},m=l.uniforms;if(s(m)){for(let n in m)if(m.hasOwnProperty(n)){if(s(A)&&s(A[n]))throw new I(`Appearance and material have a uniform with the same name: ${n}`);t[n]=sI(m,n)}}let i=jZ(t,A);return i=V._batchTable.getUniformMapCallback()(i),s(V.rtcCenter)&&(i.u_modifiedModelView=function(){let n=U.context.uniformState.view;return nV.multiply(n,V._modelMatrix,yA),nV.multiplyByPoint(yA,V.rtcCenter,Oo),nV.setTranslation(yA,Oo,yA),yA}),i}function QI(V,l,Z,U,A,t,m,i){let n=wo(V,l,Z,i),o;s(V._depthFailAppearance)&&(o=wo(V,V._depthFailAppearance,V._depthFailAppearance.material,i));let h=U?Nl.TRANSLUCENT:Nl.OPAQUE,R=A?2:1;R*=s(V._depthFailAppearance)?2:1,t.length=V._va.length*R;let c=t.length,Q=0;for(let T=0;T<c;++T){let S;A&&(S=t[T],s(S)||(S=t[T]=new tl({owner:V,primitiveType:V._primitiveType})),S.vertexArray=V._va[Q],S.renderState=V._backFaceRS,S.shaderProgram=V._sp,S.uniformMap=n,S.pass=h,++T),S=t[T],s(S)||(S=t[T]=new tl({owner:V,primitiveType:V._primitiveType})),S.vertexArray=V._va[Q],S.renderState=V._frontFaceRS,S.shaderProgram=V._sp,S.uniformMap=n,S.pass=h,s(V._depthFailAppearance)&&(A&&(++T,S=t[T],s(S)||(S=t[T]=new tl({owner:V,primitiveType:V._primitiveType})),S.vertexArray=V._va[Q],S.renderState=V._backFaceDepthFailRS,S.shaderProgram=V._spDepthFail,S.uniformMap=o,S.pass=h),++T,S=t[T],s(S)||(S=t[T]=new tl({owner:V,primitiveType:V._primitiveType})),S.vertexArray=V._va[Q],S.renderState=V._frontFaceDepthFailRS,S.shaderProgram=V._spDepthFail,S.uniformMap=o,S.pass=h),++Q}}cl._updateBoundingVolumes=function(V,l,Z,U){let A,t,m;if(U||!nV.equals(Z,V._modelMatrix))for(nV.clone(Z,V._modelMatrix),t=V._boundingSpheres.length,A=0;A<t;++A)m=V._boundingSpheres[A],s(m)&&(V._boundingSphereWC[A]=gV.transform(m,Z,V._boundingSphereWC[A]),l.scene3DOnly||(V._boundingSphere2D[A]=gV.clone(V._boundingSphereCV[A],V._boundingSphere2D[A]),V._boundingSphere2D[A].center.x=0,V._boundingSphereMorph[A]=gV.union(V._boundingSphereWC[A],V._boundingSphereCV[A])));let i=V.appearance.pixelSize;if(s(i))for(t=V._boundingSpheres.length,A=0;A<t;++A){m=V._boundingSpheres[A];let n=V._boundingSphereWC[A],h=l.camera.getPixelSize(m,l.context.drawingBufferWidth,l.context.drawingBufferHeight)*i;n.radius=m.radius+h}};function II(V,l,Z,U,A,t,m,i){if(l.mode!==IV.SCENE3D&&!nV.equals(A,nV.IDENTITY))throw new I("Primitive.modelMatrix is only supported in 3D mode.");cl._updateBoundingVolumes(V,l,A);let n;l.mode===IV.SCENE3D?n=V._boundingSphereWC:l.mode===IV.COLUMBUS_VIEW?n=V._boundingSphereCV:l.mode===IV.SCENE2D&&s(V._boundingSphere2D)?n=V._boundingSphere2D:s(V._boundingSphereMorph)&&(n=V._boundingSphereMorph);let o=l.commandList,h=l.passes;if(h.render||h.pick){let R=V.allowPicking,c=Ae.castShadows(V.shadows),Q=Ae.receiveShadows(V.shadows),T=Z.length,S=i?2:1;S*=s(V._depthFailAppearance)?2:1;for(let p=0;p<T;++p){let b=Math.floor(p/S),E=Z[p];E.modelMatrix=A,E.boundingVolume=n[b],E.cull=t,E.debugShowBoundingVolume=m,E.castShadows=c,E.receiveShadows=Q,R?E.pickId="v_pickColor":E.pickId=void 0,o.push(E)}}}cl.prototype.update=function(V){if(!s(this.geometryInstances)&&this._va.length===0||s(this.geometryInstances)&&Array.isArray(this.geometryInstances)&&this.geometryInstances.length===0||!s(this.appearance)||V.mode!==IV.SCENE3D&&V.scene3DOnly||!V.passes.render&&!V.passes.pick)return;if(s(this._error))throw this._error;if(s(this.rtcCenter)&&!V.scene3DOnly)throw new I("RTC rendering is only available for 3D only scenes.");if(this._state===Ol.FAILED)return;let l=V.context;if(s(this._batchTable)||AI(this,l),this._batchTable.attributes.length>0){if($V.maximumVertexTextureImageUnits===0)throw new Jl("Vertex texture fetch support is required to render primitives with per-instance attributes. The maximum number of vertex texture image units must be greater than zero.");this._batchTable.update(V)}if(this._state!==Ol.COMPLETE&&this._state!==Ol.COMBINED&&(this.asynchronous?rI(this,V):oI(this,V)),this._state===Ol.COMBINED&&(RI(this,V),_o(this,V),TI(this,V)),!this.show||this._state!==Ol.COMPLETE)return;this._batchTableOffsetsUpdated||_o(this,V),this._recomputeBoundingSpheres&&hI(this,V);let Z=this.appearance,U=Z.material,A=!1,t=!1;this._appearance!==Z?(this._appearance=Z,this._material=U,A=!0,t=!0):this._material!==U&&(this._material=U,t=!0);let m=this.depthFailAppearance,i=s(m)?m.material:void 0;this._depthFailAppearance!==m?(this._depthFailAppearance=m,this._depthFailMaterial=i,A=!0,t=!0):this._depthFailMaterial!==i&&(this._depthFailMaterial=i,t=!0);let n=this._appearance.isTranslucent();this._translucent!==n&&(this._translucent=n,A=!0),s(this._material)&&this._material.update(l);let o=Z.closed&&n;A&&a(this._createRenderStatesFunction,BI)(this,l,Z,o),t&&a(this._createShaderProgramFunction,FI)(this,V,Z),(A||t)&&a(this._createCommandsFunction,QI)(this,Z,U,n,o,this._colorCommands,this._pickCommands,V),a(this._updateAndQueueCommandsFunction,II)(this,V,this._colorCommands,this._pickCommands,this.modelMatrix,this.cull,this.debugShowBoundingVolume,o)};var cI=new gV,SI=new gV;function Ho(V,l,Z){if(Z===we.TOP){let U=gV.clone(V,cI),A=gV.clone(V,SI);A.center=w.add(A.center,l,A.center),V=gV.union(U,A,V)}else Z===we.ALL&&(V.center=w.add(V.center,l,V.center));return V}function CI(V,l,Z){return function(){let U=V.getBatchedAttribute(l,Z),A=V.attributes[Z],t=A.componentsPerAttribute,m=iV.createTypedArray(A.componentDatatype,t);return s(U.constructor.pack)?U.constructor.pack(U,m,0):m[0]=U,m}}function gI(V,l,Z,U,A){return function(t){if(!s(t)||!s(t.length)||t.length<1||t.length>4)throw new I("value must be and array with length between 1 and 4.");let m=yo(t);V.setBatchedAttribute(l,Z,m),A==="offset"&&(U._recomputeBoundingSpheres=!0,U._batchTableOffsetsUpdated=!1)}}var NI=new w;function EI(V,l,Z){l.boundingSphere={get:function(){let U=V._instanceBoundingSpheres[Z];if(s(U)){U=U.clone();let A=V.modelMatrix,t=l.offset;s(t)&&Ho(U,w.fromArray(t.get(),0,NI),V._offsetInstanceExtend[Z]),s(A)&&(U=gV.transform(U,A))}return U}},l.boundingSphereCV={get:function(){return V._instanceBoundingSpheresCV[Z]}}}function pI(V,l,Z){l.pickId={get:function(){return V._pickIds[Z]}}}cl.prototype.getGeometryInstanceAttributes=function(V){if(!s(V))throw new I("id is required");if(!s(this._batchTable))throw new I("must call update before calling getGeometryInstanceAttributes");let l=this._perInstanceAttributeCache.get(V);if(s(l))return l;let Z=-1,U=this._lastPerInstanceAttributeIndex,A=this._instanceIds,t=A.length;for(let o=0;o<t;++o){let h=(U+o)%t;if(V===A[h]){Z=h;break}}if(Z===-1)return;let m=this._batchTable,i=this._batchTableAttributeIndices;l={};let n={};for(let o in i)if(i.hasOwnProperty(o)){let h=i[o];n[o]={get:CI(m,Z,h),set:gI(m,Z,h,this,o)}}return EI(this,n,Z),pI(this,n,Z),Object.defineProperties(l,n),this._lastPerInstanceAttributeIndex=Z,this._perInstanceAttributeCache.set(V,l),l};cl.prototype.isDestroyed=function(){return!1};cl.prototype.destroy=function(){let V,l;this._sp=this._sp&&this._sp.destroy(),this._spDepthFail=this._spDepthFail&&this._spDepthFail.destroy();let Z=this._va;for(V=Z.length,l=0;l<V;++l)Z[l].destroy();this._va=void 0;let U=this._pickIds;for(V=U.length,l=0;l<V;++l)U[l].destroy();return this._pickIds=void 0,this._batchTable=this._batchTable&&this._batchTable.destroy(),this._instanceIds=void 0,this._perInstanceAttributeCache=void 0,this._attributeLocations=void 0,fV(this)};function vA(V,l,Z,U){V._error=U,V._state=Z,l.afterRender.push(function(){if(V._ready=V._state===Ol.COMPLETE||V._state===Ol.FAILED,!s(U))return!0})}var UZ=cl;var XI={NEVER:J.NEVER,LESS:J.LESS,EQUAL:J.EQUAL,LESS_OR_EQUAL:J.LEQUAL,GREATER:J.GREATER,NOT_EQUAL:J.NOTEQUAL,GREATER_OR_EQUAL:J.GEQUAL,ALWAYS:J.ALWAYS},XZ=Object.freeze(XI);var fI={ZERO:J.ZERO,KEEP:J.KEEP,REPLACE:J.REPLACE,INCREMENT:J.INCR,DECREMENT:J.DECR,INVERT:J.INVERT,INCREMENT_WRAP:J.INCR_WRAP,DECREMENT_WRAP:J.DECR_WRAP},KV=Object.freeze(fI);var ee={CESIUM_3D_TILE_MASK:128,SKIP_LOD_MASK:112,SKIP_LOD_BIT_SHIFT:4,CLASSIFICATION_MASK:15};ee.setCesium3DTileBit=function(){return{enabled:!0,frontFunction:XZ.ALWAYS,frontOperation:{fail:KV.KEEP,zFail:KV.KEEP,zPass:KV.REPLACE},backFunction:XZ.ALWAYS,backOperation:{fail:KV.KEEP,zFail:KV.KEEP,zPass:KV.REPLACE},reference:ee.CESIUM_3D_TILE_MASK,mask:ee.CESIUM_3D_TILE_MASK}};var tW=Object.freeze(ee);function DW(V){V=a(V,a.EMPTY_OBJECT),this.geometryInstances=V.geometryInstances,this._hasPerInstanceColors=!0;let l=V.appearance;s(l)||(l=new Eo),this.appearance=l,this.show=a(V.show,!0),this.classificationType=a(V.classificationType,vZ.BOTH),this.debugShowBoundingVolume=a(V.debugShowBoundingVolume,!1),this._debugShowShadowVolume=a(V.debugShowShadowVolume,!1),this._primitiveOptions={geometryInstances:void 0,appearance:void 0,vertexCacheOptimize:!1,interleave:a(V.interleave,!1),releaseGeometryInstances:a(V.releaseGeometryInstances,!0),allowPicking:a(V.allowPicking,!0),asynchronous:a(V.asynchronous,!0),compressVertices:!1,_createShaderProgramFunction:void 0,_createCommandsFunction:void 0,_updateAndQueueCommandsFunction:void 0},this._zIndex=void 0,this._ready=!1,this._primitive=void 0,this._sp=void 0,this._sp2D=void 0,this._spMorph=void 0,this._renderState=Lo(!1),this._renderState3DTiles=Lo(!0),this._renderStateMorph=sl.fromCache({cull:{enabled:!0,face:uW.FRONT},depthTest:{enabled:!0},blending:DZ.PRE_MULTIPLIED_ALPHA_BLEND,depthMask:!1})}Object.defineProperties(DW.prototype,{interleave:{get:function(){return this._primitiveOptions.interleave}},releaseGeometryInstances:{get:function(){return this._primitiveOptions.releaseGeometryInstances}},allowPicking:{get:function(){return this._primitiveOptions.allowPicking}},asynchronous:{get:function(){return this._primitiveOptions.asynchronous}},ready:{get:function(){return this._ready}},debugShowShadowVolume:{get:function(){return this._debugShowShadowVolume}}});DW.initializeTerrainHeights=function(){return qZ.initialize()};function bI(V,l,Z){let U=l.context,A=V._primitive,t=A._attributeLocations,m=A._batchTable.getVertexShaderCallback()(Kr);m=UZ._appendShowToShader(A,m),m=UZ._appendDistanceDisplayConditionToShader(A,m),m=UZ._modifyShaderPosition(V,m,l.scene3DOnly);let i=A._batchTable.getVertexShaderCallback()(Lr);i=UZ._appendShowToShader(A,i),i=UZ._appendDistanceDisplayConditionToShader(A,i),i=UZ._modifyShaderPosition(V,i,l.scene3DOnly);let n=A._batchTable.getVertexShaderCallback()(kr),o=[`GLOBE_MINIMUM_ALTITUDE ${l.mapProjection.ellipsoid.minimumRadius.toFixed(1)}`],h="",R="";s(Z.material)?(R=s(Z.material)?Z.material.shaderSource:"",R.search(/in\s+float\s+v_polylineAngle;/g)!==-1&&o.push("ANGLE_VARYING"),R.search(/in\s+float\s+v_width;/g)!==-1&&o.push("WIDTH_VARYING")):h="PER_INSTANCE_COLOR",o.push(h);let c=V.debugShowShadowVolume?["DEBUG_SHOW_VOLUME",h]:[h],Q=new kV({defines:o,sources:[m]}),T=new kV({defines:c,sources:[R,n]});V._sp=Dl.replaceCache({context:U,shaderProgram:A._sp,vertexShaderSource:Q,fragmentShaderSource:T,attributeLocations:t});let S=U.shaderCache.getDerivedShaderProgram(V._sp,"2dColor");if(!s(S)){let b=new kV({defines:o.concat(["COLUMBUS_VIEW_2D"]),sources:[m]});S=U.shaderCache.createDerivedShaderProgram(V._sp,"2dColor",{context:U,shaderProgram:V._sp2D,vertexShaderSource:b,fragmentShaderSource:T,attributeLocations:t})}V._sp2D=S;let p=U.shaderCache.getDerivedShaderProgram(V._sp,"MorphColor");if(!s(p)){let b=new kV({defines:o.concat([`MAX_TERRAIN_HEIGHT ${qZ._defaultMaxTerrainHeight.toFixed(1)}`]),sources:[i]});n=A._batchTable.getVertexShaderCallback()(Hr);let E=new kV({defines:c,sources:[R,n]});p=U.shaderCache.createDerivedShaderProgram(V._sp,"MorphColor",{context:U,shaderProgram:V._spMorph,vertexShaderSource:b,fragmentShaderSource:E,attributeLocations:t})}V._spMorph=p}function Lo(V){return sl.fromCache({cull:{enabled:!0},blending:DZ.PRE_MULTIPLIED_ALPHA_BLEND,depthMask:!1,stencilTest:{enabled:V,frontFunction:XZ.EQUAL,frontOperation:{fail:KV.KEEP,zFail:KV.KEEP,zPass:KV.KEEP},backFunction:XZ.EQUAL,backOperation:{fail:KV.KEEP,zFail:KV.KEEP,zPass:KV.KEEP},reference:tW.CESIUM_3D_TILE_MASK,mask:tW.CESIUM_3D_TILE_MASK}})}function uI(V,l,Z,U,A,t){let m=V._primitive,i=m._va.length;A.length=i,t.length=i;let o=l instanceof Fm?{}:Z._uniforms,h=m._batchTable.getUniformMapCallback()(o);for(let R=0;R<i;R++){let c=m._va[R],Q=A[R];s(Q)||(Q=A[R]=new tl({owner:V,primitiveType:m._primitiveType})),Q.vertexArray=c,Q.renderState=V._renderState,Q.shaderProgram=V._sp,Q.uniformMap=h,Q.pass=Nl.TERRAIN_CLASSIFICATION,Q.pickId="czm_batchTable_pickColor(v_endPlaneNormalEcAndBatchId.w)";let T=tl.shallowClone(Q,Q.derivedCommands.tileset);T.renderState=V._renderState3DTiles,T.pass=Nl.CESIUM_3D_TILE_CLASSIFICATION,Q.derivedCommands.tileset=T;let S=tl.shallowClone(Q,Q.derivedCommands.color2D);S.shaderProgram=V._sp2D,Q.derivedCommands.color2D=S;let p=tl.shallowClone(T,T.derivedCommands.color2D);p.shaderProgram=V._sp2D,T.derivedCommands.color2D=p;let b=tl.shallowClone(Q,Q.derivedCommands.colorMorph);b.renderState=V._renderStateMorph,b.shaderProgram=V._spMorph,b.pickId="czm_batchTable_pickColor(v_batchId)",Q.derivedCommands.colorMorph=b}}function Ko(V,l,Z,U,A,t,m){Z.mode===IV.MORPHING?l=l.derivedCommands.colorMorph:Z.mode!==IV.SCENE3D&&(l=l.derivedCommands.color2D),l.modelMatrix=U,l.boundingVolume=t,l.cull=A,l.debugShowBoundingVolume=m,Z.commandList.push(l)}function JI(V,l,Z,U,A,t,m){let i=V._primitive;UZ._updateBoundingVolumes(i,l,A);let n;l.mode===IV.SCENE3D?n=i._boundingSphereWC:l.mode===IV.COLUMBUS_VIEW?n=i._boundingSphereCV:l.mode===IV.SCENE2D&&s(i._boundingSphere2D)?n=i._boundingSphere2D:s(i._boundingSphereMorph)&&(n=i._boundingSphereMorph);let o=l.mode===IV.MORPHING,h=V.classificationType,R=h!==vZ.CESIUM_3D_TILE,c=h!==vZ.TERRAIN&&!o,Q,T=l.passes;if(T.render||T.pick&&i.allowPicking){let S=Z.length;for(let p=0;p<S;++p){let b=n[p];R&&(Q=Z[p],Ko(V,Q,l,A,t,b,m)),c&&(Q=Z[p].derivedCommands.tileset,Ko(V,Q,l,A,t,b,m))}}}DW.prototype.update=function(V){if(!s(this._primitive)&&!s(this.geometryInstances))return;if(!qZ.initialized){if(!this.asynchronous)throw new I("For synchronous GroundPolylinePrimitives, you must call GroundPolylinePrimitives.initializeTerrainHeights() and wait for the returned promise to resolve.");DW.initializeTerrainHeights();return}let l,Z=this,U=this._primitiveOptions;if(!s(this._primitive)){let A=Array.isArray(this.geometryInstances)?this.geometryInstances:[this.geometryInstances],t=A.length,m=new Array(t),i;for(l=0;l<t;++l)if(i=A[l].attributes,!s(i)||!s(i.color)){this._hasPerInstanceColors=!1;break}for(l=0;l<t;++l){let n=A[l];i={};let o=n.attributes;for(let h in o)o.hasOwnProperty(h)&&(i[h]=o[h]);s(i.width)||(i.width=new EZ({componentDatatype:iV.UNSIGNED_BYTE,componentsPerAttribute:1,value:[n.geometry.width]})),n.geometry._scene3DOnly=V.scene3DOnly,Hi.setProjectionAndEllipsoid(n.geometry,V.mapProjection),m[l]=new RU({geometry:n.geometry,attributes:i,id:n.id,pickPrimitive:Z})}U.geometryInstances=m,U.appearance=this.appearance,U._createShaderProgramFunction=function(n,o,h){bI(Z,o,h)},U._createCommandsFunction=function(n,o,h,R,c,Q,T){uI(Z,o,h,R,Q,T)},U._updateAndQueueCommandsFunction=function(n,o,h,R,c,Q,T,S){JI(Z,o,h,R,c,Q,T)},this._primitive=new UZ(U)}if(this.appearance instanceof Fm&&!this._hasPerInstanceColors)throw new I("All GeometryInstances must have color attributes to use PolylineColorAppearance with GroundPolylinePrimitive.");this._primitive.appearance=this.appearance,this._primitive.show=this.show,this._primitive.debugShowBoundingVolume=this.debugShowBoundingVolume,this._primitive.update(V),V.afterRender.push(()=>{!this._ready&&s(this._primitive)&&this._primitive.ready&&(this._ready=!0,this.releaseGeometryInstances&&(this.geometryInstances=void 0))})};DW.prototype.getGeometryInstanceAttributes=function(V){if(!s(this._primitive))throw new I("must call update before calling getGeometryInstanceAttributes");return this._primitive.getGeometryInstanceAttributes(V)};DW.isSupported=function(V){return V.frameState.context.depthTexture};DW.prototype.isDestroyed=function(){return!1};DW.prototype.destroy=function(){return this._primitive=this._primitive&&this._primitive.destroy(),this._sp=this._sp&&this._sp.destroy(),this._sp2D=void 0,this._spMorph=void 0,fV(this)};var Po=DW;function PU(V,l,Z,U){V=a(V,1),l=a(l,1),Z=a(Z,1),U=a(U,1),this.value=new Uint8Array([z.floatToByte(V),z.floatToByte(l),z.floatToByte(Z),z.floatToByte(U)])}Object.defineProperties(PU.prototype,{componentDatatype:{get:function(){return iV.UNSIGNED_BYTE}},componentsPerAttribute:{get:function(){return 4}},normalize:{get:function(){return!0}}});PU.fromColor=function(V){if(!s(V))throw new I("color is required.");return new PU(V.red,V.green,V.blue,V.alpha)};PU.toValue=function(V,l){if(!s(V))throw new I("color is required.");return s(l)?V.toBytes(l):new Uint8Array(V.toBytes())};PU.equals=function(V,l){return V===l||s(V)&&s(l)&&V.value[0]===l.value[0]&&V.value[1]===l.value[1]&&V.value[2]===l.value[2]&&V.value[3]===l.value[3]};var jo=PU;var qo=`in vec3 position3DHigh;
in vec3 position3DLow;
in float batchId;

#ifdef EXTRUDED_GEOMETRY
in vec3 extrudeDirection;

uniform float u_globeMinimumAltitude;
#endif // EXTRUDED_GEOMETRY

#ifdef PER_INSTANCE_COLOR
out vec4 v_color;
#endif // PER_INSTANCE_COLOR

#ifdef TEXTURE_COORDINATES
#ifdef SPHERICAL
out vec4 v_sphericalExtents;
#else // SPHERICAL
out vec2 v_inversePlaneExtents;
out vec4 v_westPlane;
out vec4 v_southPlane;
#endif // SPHERICAL
out vec3 v_uvMinAndSphericalLongitudeRotation;
out vec3 v_uMaxAndInverseDistance;
out vec3 v_vMaxAndInverseDistance;
#endif // TEXTURE_COORDINATES

void main()
{
    vec4 position = czm_computePosition();

#ifdef EXTRUDED_GEOMETRY
    float delta = min(u_globeMinimumAltitude, czm_geometricToleranceOverMeter * length(position.xyz));
    delta *= czm_sceneMode == czm_sceneMode3D ? 1.0 : 0.0;

    //extrudeDirection is zero for the top layer
    position = position + vec4(extrudeDirection * delta, 0.0);
#endif

#ifdef TEXTURE_COORDINATES
#ifdef SPHERICAL
    v_sphericalExtents = czm_batchTable_sphericalExtents(batchId);
    v_uvMinAndSphericalLongitudeRotation.z = czm_batchTable_longitudeRotation(batchId);
#else // SPHERICAL
#ifdef COLUMBUS_VIEW_2D
    vec4 planes2D_high = czm_batchTable_planes2D_HIGH(batchId);
    vec4 planes2D_low = czm_batchTable_planes2D_LOW(batchId);

    // If the primitive is split across the IDL (planes2D_high.x > planes2D_high.w):
    // - If this vertex is on the east side of the IDL (position3DLow.y > 0.0, comparison with position3DHigh may produce artifacts)
    // - existing "east" is on the wrong side of the world, far away (planes2D_high/low.w)
    // - so set "east" as beyond the eastmost extent of the projection (idlSplitNewPlaneHiLow)
    vec2 idlSplitNewPlaneHiLow = vec2(EAST_MOST_X_HIGH - (WEST_MOST_X_HIGH - planes2D_high.w), EAST_MOST_X_LOW - (WEST_MOST_X_LOW - planes2D_low.w));
    bool idlSplit = planes2D_high.x > planes2D_high.w && position3DLow.y > 0.0;
    planes2D_high.w = czm_branchFreeTernary(idlSplit, idlSplitNewPlaneHiLow.x, planes2D_high.w);
    planes2D_low.w = czm_branchFreeTernary(idlSplit, idlSplitNewPlaneHiLow.y, planes2D_low.w);

    // - else, if this vertex is on the west side of the IDL (position3DLow.y < 0.0)
    // - existing "west" is on the wrong side of the world, far away (planes2D_high/low.x)
    // - so set "west" as beyond the westmost extent of the projection (idlSplitNewPlaneHiLow)
    idlSplit = planes2D_high.x > planes2D_high.w && position3DLow.y < 0.0;
    idlSplitNewPlaneHiLow = vec2(WEST_MOST_X_HIGH - (EAST_MOST_X_HIGH - planes2D_high.x), WEST_MOST_X_LOW - (EAST_MOST_X_LOW - planes2D_low.x));
    planes2D_high.x = czm_branchFreeTernary(idlSplit, idlSplitNewPlaneHiLow.x, planes2D_high.x);
    planes2D_low.x = czm_branchFreeTernary(idlSplit, idlSplitNewPlaneHiLow.y, planes2D_low.x);

    vec3 southWestCorner = (czm_modelViewRelativeToEye * czm_translateRelativeToEye(vec3(0.0, planes2D_high.xy), vec3(0.0, planes2D_low.xy))).xyz;
    vec3 northWestCorner = (czm_modelViewRelativeToEye * czm_translateRelativeToEye(vec3(0.0, planes2D_high.x, planes2D_high.z), vec3(0.0, planes2D_low.x, planes2D_low.z))).xyz;
    vec3 southEastCorner = (czm_modelViewRelativeToEye * czm_translateRelativeToEye(vec3(0.0, planes2D_high.w, planes2D_high.y), vec3(0.0, planes2D_low.w, planes2D_low.y))).xyz;
#else // COLUMBUS_VIEW_2D
    // 3D case has smaller "plane extents," so planes encoded as a 64 bit position and 2 vec3s for distances/direction
    vec3 southWestCorner = (czm_modelViewRelativeToEye * czm_translateRelativeToEye(czm_batchTable_southWest_HIGH(batchId), czm_batchTable_southWest_LOW(batchId))).xyz;
    vec3 northWestCorner = czm_normal * czm_batchTable_northward(batchId) + southWestCorner;
    vec3 southEastCorner = czm_normal * czm_batchTable_eastward(batchId) + southWestCorner;
#endif // COLUMBUS_VIEW_2D

    vec3 eastWard = southEastCorner - southWestCorner;
    float eastExtent = length(eastWard);
    eastWard /= eastExtent;

    vec3 northWard = northWestCorner - southWestCorner;
    float northExtent = length(northWard);
    northWard /= northExtent;

    v_westPlane = vec4(eastWard, -dot(eastWard, southWestCorner));
    v_southPlane = vec4(northWard, -dot(northWard, southWestCorner));
    v_inversePlaneExtents = vec2(1.0 / eastExtent, 1.0 / northExtent);
#endif // SPHERICAL
    vec4 uvMinAndExtents = czm_batchTable_uvMinAndExtents(batchId);
    vec4 uMaxVmax = czm_batchTable_uMaxVmax(batchId);

    v_uMaxAndInverseDistance = vec3(uMaxVmax.xy, uvMinAndExtents.z);
    v_vMaxAndInverseDistance = vec3(uMaxVmax.zw, uvMinAndExtents.w);
    v_uvMinAndSphericalLongitudeRotation.xy = uvMinAndExtents.xy;
#endif // TEXTURE_COORDINATES

#ifdef PER_INSTANCE_COLOR
    v_color = czm_batchTable_color(batchId);
#endif

    gl_Position = czm_depthClamp(czm_modelViewProjectionRelativeToEye * position);
}
`;var $o=`#ifdef VECTOR_TILE
uniform vec4 u_highlightColor;
#endif

void main(void)
{
#ifdef VECTOR_TILE
    out_FragColor = czm_gammaCorrect(u_highlightColor);
#else
    out_FragColor = vec4(1.0);
#endif
    czm_writeDepthClamp();
}
`;var Vh=`in vec3 v_positionEC;
in vec3 v_normalEC;
in vec4 v_color;

void main()
{
    vec3 positionToEyeEC = -v_positionEC;

    vec3 normalEC = normalize(v_normalEC);
#ifdef FACE_FORWARD
    normalEC = faceforward(normalEC, vec3(0.0, 0.0, 1.0), -normalEC);
#endif

    vec4 color = czm_gammaCorrect(v_color);

    czm_materialInput materialInput;
    materialInput.normalEC = normalEC;
    materialInput.positionToEyeEC = positionToEyeEC;
    czm_material material = czm_getDefaultMaterial(materialInput);
    material.diffuse = color.rgb;
    material.alpha = color.a;

    out_FragColor = czm_phong(normalize(positionToEyeEC), material, czm_lightDirectionEC);
}
`;var lh=`in vec3 position3DHigh;
in vec3 position3DLow;
in vec3 normal;
in vec4 color;
in float batchId;

out vec3 v_positionEC;
out vec3 v_normalEC;
out vec4 v_color;

void main()
{
    vec4 p = czm_computePosition();

    v_positionEC = (czm_modelViewRelativeToEye * p).xyz;      // position in eye coordinates
    v_normalEC = czm_normal * normal;                         // normal in eye coordinates
    v_color = color;

    gl_Position = czm_modelViewProjectionRelativeToEye * p;
}
`;var Zh=`in vec3 position3DHigh;
in vec3 position3DLow;
in vec4 color;
in float batchId;

out vec4 v_color;

void main()
{
    vec4 p = czm_computePosition();

    v_color = color;

    gl_Position = czm_modelViewProjectionRelativeToEye * p;
}
`;function MW(V){V=a(V,a.EMPTY_OBJECT);let l=a(V.translucent,!0),Z=a(V.closed,!1),U=a(V.flat,!1),A=U?Zh:lh,t=U?le:Vh,m=U?MW.FLAT_VERTEX_FORMAT:MW.VERTEX_FORMAT;this.material=void 0,this.translucent=l,this._vertexShaderSource=a(V.vertexShaderSource,A),this._fragmentShaderSource=a(V.fragmentShaderSource,t),this._renderState=dZ.getDefaultRenderState(l,Z,V.renderState),this._closed=Z,this._vertexFormat=m,this._flat=U,this._faceForward=a(V.faceForward,!Z)}Object.defineProperties(MW.prototype,{vertexShaderSource:{get:function(){return this._vertexShaderSource}},fragmentShaderSource:{get:function(){return this._fragmentShaderSource}},renderState:{get:function(){return this._renderState}},closed:{get:function(){return this._closed}},vertexFormat:{get:function(){return this._vertexFormat}},flat:{get:function(){return this._flat}},faceForward:{get:function(){return this._faceForward}}});MW.VERTEX_FORMAT=dU.POSITION_AND_NORMAL;MW.FLAT_VERTEX_FORMAT=dU.POSITION_ONLY;MW.prototype.getFragmentShaderSource=dZ.prototype.getFragmentShaderSource;MW.prototype.isTranslucent=dZ.prototype.isTranslucent;MW.prototype.getRenderState=dZ.prototype.getRenderState;var eW=MW;var Xm=`#ifdef TEXTURE_COORDINATES
#ifdef SPHERICAL
in vec4 v_sphericalExtents;
#else // SPHERICAL
in vec2 v_inversePlaneExtents;
in vec4 v_westPlane;
in vec4 v_southPlane;
#endif // SPHERICAL
in vec3 v_uvMinAndSphericalLongitudeRotation;
in vec3 v_uMaxAndInverseDistance;
in vec3 v_vMaxAndInverseDistance;
#endif // TEXTURE_COORDINATES

#ifdef PER_INSTANCE_COLOR
in vec4 v_color;
#endif

#ifdef NORMAL_EC
vec3 getEyeCoordinate3FromWindowCoordinate(vec2 fragCoord, float logDepthOrDepth) {
    vec4 eyeCoordinate = czm_windowToEyeCoordinates(fragCoord, logDepthOrDepth);
    return eyeCoordinate.xyz / eyeCoordinate.w;
}

vec3 vectorFromOffset(vec4 eyeCoordinate, vec2 positiveOffset) {
    vec2 glFragCoordXY = gl_FragCoord.xy;
    // Sample depths at both offset and negative offset
    float upOrRightLogDepth = czm_unpackDepth(texture(czm_globeDepthTexture, (glFragCoordXY + positiveOffset) / czm_viewport.zw));
    float downOrLeftLogDepth = czm_unpackDepth(texture(czm_globeDepthTexture, (glFragCoordXY - positiveOffset) / czm_viewport.zw));
    // Explicitly evaluate both paths
    // Necessary for multifrustum and for edges of the screen
    bvec2 upOrRightInBounds = lessThan(glFragCoordXY + positiveOffset, czm_viewport.zw);
    float useUpOrRight = float(upOrRightLogDepth > 0.0 && upOrRightInBounds.x && upOrRightInBounds.y);
    float useDownOrLeft = float(useUpOrRight == 0.0);
    vec3 upOrRightEC = getEyeCoordinate3FromWindowCoordinate(glFragCoordXY + positiveOffset, upOrRightLogDepth);
    vec3 downOrLeftEC = getEyeCoordinate3FromWindowCoordinate(glFragCoordXY - positiveOffset, downOrLeftLogDepth);
    return (upOrRightEC - (eyeCoordinate.xyz / eyeCoordinate.w)) * useUpOrRight + ((eyeCoordinate.xyz / eyeCoordinate.w) - downOrLeftEC) * useDownOrLeft;
}
#endif // NORMAL_EC

void main(void)
{
#ifdef REQUIRES_EC
    float logDepthOrDepth = czm_unpackDepth(texture(czm_globeDepthTexture, gl_FragCoord.xy / czm_viewport.zw));
    vec4 eyeCoordinate = czm_windowToEyeCoordinates(gl_FragCoord.xy, logDepthOrDepth);
#endif

#ifdef REQUIRES_WC
    vec4 worldCoordinate4 = czm_inverseView * eyeCoordinate;
    vec3 worldCoordinate = worldCoordinate4.xyz / worldCoordinate4.w;
#endif

#ifdef TEXTURE_COORDINATES
    vec2 uv;
#ifdef SPHERICAL
    // Treat world coords as a sphere normal for spherical coordinates
    vec2 sphericalLatLong = czm_approximateSphericalCoordinates(worldCoordinate);
    sphericalLatLong.y += v_uvMinAndSphericalLongitudeRotation.z;
    sphericalLatLong.y = czm_branchFreeTernary(sphericalLatLong.y < czm_pi, sphericalLatLong.y, sphericalLatLong.y - czm_twoPi);
    uv.x = (sphericalLatLong.y - v_sphericalExtents.y) * v_sphericalExtents.w;
    uv.y = (sphericalLatLong.x - v_sphericalExtents.x) * v_sphericalExtents.z;
#else // SPHERICAL
    // Unpack planes and transform to eye space
    uv.x = czm_planeDistance(v_westPlane, eyeCoordinate.xyz / eyeCoordinate.w) * v_inversePlaneExtents.x;
    uv.y = czm_planeDistance(v_southPlane, eyeCoordinate.xyz / eyeCoordinate.w) * v_inversePlaneExtents.y;
#endif // SPHERICAL
#endif // TEXTURE_COORDINATES

#ifdef PICK
#ifdef CULL_FRAGMENTS
    // When classifying translucent geometry, logDepthOrDepth == 0.0
    // indicates a region that should not be classified, possibly due to there
    // being opaque pixels there in another buffer.
    // Check for logDepthOrDepth != 0.0 to make sure this should be classified.
    if (0.0 <= uv.x && uv.x <= 1.0 && 0.0 <= uv.y && uv.y <= 1.0 || logDepthOrDepth != 0.0) {
        out_FragColor.a = 1.0; // 0.0 alpha leads to discard from ShaderSource.createPickFragmentShaderSource
        czm_writeDepthClamp();
    }
#else // CULL_FRAGMENTS
        out_FragColor.a = 1.0;
#endif // CULL_FRAGMENTS
#else // PICK

#ifdef CULL_FRAGMENTS
    // When classifying translucent geometry, logDepthOrDepth == 0.0
    // indicates a region that should not be classified, possibly due to there
    // being opaque pixels there in another buffer.
    if (uv.x <= 0.0 || 1.0 <= uv.x || uv.y <= 0.0 || 1.0 <= uv.y || logDepthOrDepth == 0.0) {
        discard;
    }
#endif

#ifdef NORMAL_EC
    // Compute normal by sampling adjacent pixels in 2x2 block in screen space
    vec3 downUp = vectorFromOffset(eyeCoordinate, vec2(0.0, 1.0));
    vec3 leftRight = vectorFromOffset(eyeCoordinate, vec2(1.0, 0.0));
    vec3 normalEC = normalize(cross(leftRight, downUp));
#endif


#ifdef PER_INSTANCE_COLOR

    vec4 color = czm_gammaCorrect(v_color);
#ifdef FLAT
    out_FragColor = color;
#else // FLAT
    czm_materialInput materialInput;
    materialInput.normalEC = normalEC;
    materialInput.positionToEyeEC = -eyeCoordinate.xyz;
    czm_material material = czm_getDefaultMaterial(materialInput);
    material.diffuse = color.rgb;
    material.alpha = color.a;

    out_FragColor = czm_phong(normalize(-eyeCoordinate.xyz), material, czm_lightDirectionEC);
#endif // FLAT

    // Premultiply alpha. Required for classification primitives on translucent globe.
    out_FragColor.rgb *= out_FragColor.a;

#else // PER_INSTANCE_COLOR

    // Material support.
    // USES_ is distinct from REQUIRES_, because some things are dependencies of each other or
    // dependencies for culling but might not actually be used by the material.

    czm_materialInput materialInput;

#ifdef USES_NORMAL_EC
    materialInput.normalEC = normalEC;
#endif

#ifdef USES_POSITION_TO_EYE_EC
    materialInput.positionToEyeEC = -eyeCoordinate.xyz;
#endif

#ifdef USES_TANGENT_TO_EYE
    materialInput.tangentToEyeMatrix = czm_eastNorthUpToEyeCoordinates(worldCoordinate, normalEC);
#endif

#ifdef USES_ST
    // Remap texture coordinates from computed (approximately aligned with cartographic space) to the desired
    // texture coordinate system, which typically forms a tight oriented bounding box around the geometry.
    // Shader is provided a set of reference points for remapping.
    materialInput.st.x = czm_lineDistance(v_uvMinAndSphericalLongitudeRotation.xy, v_uMaxAndInverseDistance.xy, uv) * v_uMaxAndInverseDistance.z;
    materialInput.st.y = czm_lineDistance(v_uvMinAndSphericalLongitudeRotation.xy, v_vMaxAndInverseDistance.xy, uv) * v_vMaxAndInverseDistance.z;
#endif

    czm_material material = czm_getMaterial(materialInput);

#ifdef FLAT
    out_FragColor = vec4(material.diffuse + material.emission, material.alpha);
#else // FLAT
    out_FragColor = czm_phong(normalize(-eyeCoordinate.xyz), material, czm_lightDirectionEC);
#endif // FLAT

    // Premultiply alpha. Required for classification primitives on translucent globe.
    out_FragColor.rgb *= out_FragColor.a;

#endif // PER_INSTANCE_COLOR
    czm_writeDepthClamp();
#endif // PICK
}
`;function zZ(V,l,Z){v.typeOf.bool("extentsCulling",V),v.typeOf.bool("planarExtents",l),v.typeOf.object("appearance",Z),this._projectionExtentDefines={eastMostYhighDefine:"",eastMostYlowDefine:"",westMostYhighDefine:"",westMostYlowDefine:""};let U=new fm;U.requiresTextureCoordinates=V,U.requiresEC=!Z.flat;let A=new fm;if(A.requiresTextureCoordinates=V,Z instanceof eW)U.requiresNormalEC=!Z.flat;else{let t=`${Z.material.shaderSource}
${Z.fragmentShaderSource}`;U.normalEC=t.indexOf("materialInput.normalEC")!==-1||t.indexOf("czm_getDefaultMaterial")!==-1,U.positionToEyeEC=t.indexOf("materialInput.positionToEyeEC")!==-1,U.tangentToEyeMatrix=t.indexOf("materialInput.tangentToEyeMatrix")!==-1,U.st=t.indexOf("materialInput.st")!==-1}this._colorShaderDependencies=U,this._pickShaderDependencies=A,this._appearance=Z,this._extentsCulling=V,this._planarExtents=l}zZ.prototype.createFragmentShader=function(V){v.typeOf.bool("columbusView2D",V);let l=this._appearance,Z=this._colorShaderDependencies,U=[];!V&&!this._planarExtents&&U.push("SPHERICAL"),Z.requiresEC&&U.push("REQUIRES_EC"),Z.requiresWC&&U.push("REQUIRES_WC"),Z.requiresTextureCoordinates&&U.push("TEXTURE_COORDINATES"),this._extentsCulling&&U.push("CULL_FRAGMENTS"),Z.requiresNormalEC&&U.push("NORMAL_EC"),l instanceof eW&&U.push("PER_INSTANCE_COLOR"),Z.normalEC&&U.push("USES_NORMAL_EC"),Z.positionToEyeEC&&U.push("USES_POSITION_TO_EYE_EC"),Z.tangentToEyeMatrix&&U.push("USES_TANGENT_TO_EYE"),Z.st&&U.push("USES_ST"),l.flat&&U.push("FLAT");let A="";return l instanceof eW||(A=l.material.shaderSource),new kV({defines:U,sources:[A,Xm]})};zZ.prototype.createPickFragmentShader=function(V){v.typeOf.bool("columbusView2D",V);let l=this._pickShaderDependencies,Z=["PICK"];return!V&&!this._planarExtents&&Z.push("SPHERICAL"),l.requiresEC&&Z.push("REQUIRES_EC"),l.requiresWC&&Z.push("REQUIRES_WC"),l.requiresTextureCoordinates&&Z.push("TEXTURE_COORDINATES"),this._extentsCulling&&Z.push("CULL_FRAGMENTS"),new kV({defines:Z,sources:[Xm],pickColorQualifier:"in"})};zZ.prototype.createVertexShader=function(V,l,Z,U){return v.defined("defines",V),v.typeOf.string("vertexShaderSource",l),v.typeOf.bool("columbusView2D",Z),v.defined("mapProjection",U),nh(this._colorShaderDependencies,this._planarExtents,Z,V,l,this._appearance,U,this._projectionExtentDefines)};zZ.prototype.createPickVertexShader=function(V,l,Z,U){return v.defined("defines",V),v.typeOf.string("vertexShaderSource",l),v.typeOf.bool("columbusView2D",Z),v.defined("mapProjection",U),nh(this._pickShaderDependencies,this._planarExtents,Z,V,l,void 0,U,this._projectionExtentDefines)};var Wh=new w,Uh=new Ul,Ah={high:0,low:0};function nh(V,l,Z,U,A,t,m,i){let n=U.slice();if(i.eastMostYhighDefine===""){let o=Uh;o.longitude=NV.PI,o.latitude=0,o.height=0;let h=m.project(o,Wh),R=Pl.encode(h.x,Ah);i.eastMostYhighDefine=`EAST_MOST_X_HIGH ${R.high.toFixed(`${R.high}`.length+1)}`,i.eastMostYlowDefine=`EAST_MOST_X_LOW ${R.low.toFixed(`${R.low}`.length+1)}`;let c=Uh;c.longitude=-NV.PI,c.latitude=0,c.height=0;let Q=m.project(c,Wh);R=Pl.encode(Q.x,Ah),i.westMostYhighDefine=`WEST_MOST_X_HIGH ${R.high.toFixed(`${R.high}`.length+1)}`,i.westMostYlowDefine=`WEST_MOST_X_LOW ${R.low.toFixed(`${R.low}`.length+1)}`}return Z&&(n.push(i.eastMostYhighDefine),n.push(i.eastMostYlowDefine),n.push(i.westMostYhighDefine),n.push(i.westMostYlowDefine)),s(t)&&t instanceof eW&&n.push("PER_INSTANCE_COLOR"),V.requiresTextureCoordinates&&(n.push("TEXTURE_COORDINATES"),l||Z||n.push("SPHERICAL"),Z&&n.push("COLUMBUS_VIEW_2D")),new kV({defines:n,sources:[A]})}function fm(){this._requiresEC=!1,this._requiresWC=!1,this._requiresNormalEC=!1,this._requiresTextureCoordinates=!1,this._usesNormalEC=!1,this._usesPositionToEyeEC=!1,this._usesTangentToEyeMat=!1,this._usesSt=!1}Object.defineProperties(fm.prototype,{requiresEC:{get:function(){return this._requiresEC},set:function(V){this._requiresEC=V||this._requiresEC}},requiresWC:{get:function(){return this._requiresWC},set:function(V){this._requiresWC=V||this._requiresWC,this.requiresEC=this._requiresWC}},requiresNormalEC:{get:function(){return this._requiresNormalEC},set:function(V){this._requiresNormalEC=V||this._requiresNormalEC,this.requiresEC=this._requiresNormalEC}},requiresTextureCoordinates:{get:function(){return this._requiresTextureCoordinates},set:function(V){this._requiresTextureCoordinates=V||this._requiresTextureCoordinates,this.requiresWC=this._requiresTextureCoordinates}},normalEC:{set:function(V){this.requiresNormalEC=V,this._usesNormalEC=V},get:function(){return this._usesNormalEC}},tangentToEyeMatrix:{set:function(V){this.requiresWC=V,this.requiresNormalEC=V,this._usesTangentToEyeMat=V},get:function(){return this._usesTangentToEyeMat}},positionToEyeEC:{set:function(V){this.requiresEC=V,this._usesPositionToEyeEC=V},get:function(){return this._usesPositionToEyeEC}},st:{set:function(V){this.requiresTextureCoordinates=V,this._usesSt=V},get:function(){return this._usesSt}}});function th(V,l,Z){return Math.abs((l.y-V.y)*Z.x-(l.x-V.x)*Z.y+l.x*V.y-l.y*V.x)/q.distance(l,V)}var xI=[new q,new q,new q,new q];function Gh(V,l){let Z=xI,U=q.unpack(l,0,Z[0]),A=q.unpack(l,2,Z[1]),t=q.unpack(l,4,Z[2]);V.uMaxVmax=new EZ({componentDatatype:iV.FLOAT,componentsPerAttribute:4,normalize:!1,value:[A.x,A.y,t.x,t.y]});let m=1/th(U,A,t),i=1/th(U,t,A);V.uvMinAndExtents=new EZ({componentDatatype:iV.FLOAT,componentsPerAttribute:4,normalize:!1,value:[U.x,U.y,m,i]})}var sh=new Ul,ah=new w,DI=new w,MI=new w,me={high:0,low:0};function rh(V,l,Z){let U=sh;U.height=0,U.longitude=V.west,U.latitude=V.south;let A=l.project(U,ah);U.latitude=V.north;let t=l.project(U,DI);U.longitude=V.east,U.latitude=V.south;let m=l.project(U,MI),i=[0,0,0,0],n=[0,0,0,0],o=Pl.encode(A.x,me);i[0]=o.high,n[0]=o.low,o=Pl.encode(A.y,me),i[1]=o.high,n[1]=o.low,o=Pl.encode(t.y,me),i[2]=o.high,n[2]=o.low,o=Pl.encode(m.x,me),i[3]=o.high,n[3]=o.low,Z.planes2D_HIGH=new EZ({componentDatatype:iV.FLOAT,componentsPerAttribute:4,normalize:!1,value:i}),Z.planes2D_LOW=new EZ({componentDatatype:iV.FLOAT,componentsPerAttribute:4,normalize:!1,value:n})}var _I=new nV,OI=new nV,eh=new w,wI=new Ul,YI=[new Ul,new Ul,new Ul,new Ul,new Ul,new Ul,new Ul,new Ul];function yI(V,l,Z,U,A,t){let m=SW.center(V,wI);m.height=Z;let i=Ul.toCartesian(m,l,eh),n=QZ.eastNorthUpToFixedFrame(i,l,_I),o=nV.inverse(n,OI),h=V.west,R=V.east,c=V.north,Q=V.south,T=YI;T[0].latitude=Q,T[0].longitude=h,T[1].latitude=c,T[1].longitude=h,T[2].latitude=c,T[2].longitude=R,T[3].latitude=Q,T[3].longitude=R;let S=(h+R)*.5,p=(c+Q)*.5;T[4].latitude=Q,T[4].longitude=S,T[5].latitude=c,T[5].longitude=S,T[6].latitude=p,T[6].longitude=h,T[7].latitude=p,T[7].longitude=R;let b=Number.POSITIVE_INFINITY,E=Number.NEGATIVE_INFINITY,D=Number.POSITIVE_INFINITY,_=Number.NEGATIVE_INFINITY;for(let j=0;j<8;j++){T[j].height=Z;let mV=Ul.toCartesian(T[j],l,eh);nV.multiplyByPoint(o,mV,mV),mV.z=0,b=Math.min(b,mV.x),E=Math.max(E,mV.x),D=Math.min(D,mV.y),_=Math.max(_,mV.y)}let Y=U;Y.x=b,Y.y=D,Y.z=0,nV.multiplyByPoint(n,Y,Y);let K=A;K.x=E,K.y=D,K.z=0,nV.multiplyByPoint(n,K,K),w.subtract(K,Y,A);let ZV=t;ZV.x=b,ZV.y=_,ZV.z=0,nV.multiplyByPoint(n,ZV,ZV),w.subtract(ZV,Y,t)}var vI=new w,zI=new w,kI=new Pl;zZ.getPlanarTextureCoordinateAttributes=function(V,l,Z,U,A){v.typeOf.object("boundingRectangle",V),v.defined("textureCoordinateRotationPoints",l),v.typeOf.object("ellipsoid",Z),v.typeOf.object("projection",U);let t=ah,m=vI,i=zI;yI(V,Z,a(A,0),t,m,i);let n={};Gh(n,l);let o=Pl.fromCartesian(t,kI);return n.southWest_HIGH=new EZ({componentDatatype:iV.FLOAT,componentsPerAttribute:3,normalize:!1,value:w.pack(o.high,[0,0,0])}),n.southWest_LOW=new EZ({componentDatatype:iV.FLOAT,componentsPerAttribute:3,normalize:!1,value:w.pack(o.low,[0,0,0])}),n.eastward=new EZ({componentDatatype:iV.FLOAT,componentsPerAttribute:3,normalize:!1,value:w.pack(m,[0,0,0])}),n.northward=new EZ({componentDatatype:iV.FLOAT,componentsPerAttribute:3,normalize:!1,value:w.pack(i,[0,0,0])}),rh(V,U,n),n};var HI=new w;function mh(V,l,Z,U){let A=sh;A.latitude=V,A.longitude=l,A.height=0;let t=Ul.toCartesian(A,Z,HI),m=Math.sqrt(t.x*t.x+t.y*t.y),i=NV.fastApproximateAtan2(m,t.z),n=NV.fastApproximateAtan2(t.x,t.y);return U.x=i,U.y=n,U}var ih=new q;zZ.getSphericalExtentGeometryInstanceAttributes=function(V,l,Z,U){v.typeOf.object("boundingRectangle",V),v.defined("textureCoordinateRotationPoints",l),v.typeOf.object("ellipsoid",Z),v.typeOf.object("projection",U);let A=mh(V.south,V.west,Z,ih),t=A.x,m=A.y,i=mh(V.north,V.east,Z,ih),n=i.x,o=i.y,h=0;m>o&&(h=NV.PI-m,m=-NV.PI,o+=h),t-=NV.EPSILON5,m-=NV.EPSILON5,n+=NV.EPSILON5,o+=NV.EPSILON5;let R=1/(o-m),c=1/(n-t),Q={sphericalExtents:new EZ({componentDatatype:iV.FLOAT,componentsPerAttribute:4,normalize:!1,value:[t,m,c,R]}),longitudeRotation:new EZ({componentDatatype:iV.FLOAT,componentsPerAttribute:1,normalize:!1,value:[h]})};return Gh(Q,l),rh(V,U,Q),Q};zZ.hasAttributesForTextureCoordinatePlanes=function(V){return s(V.southWest_HIGH)&&s(V.southWest_LOW)&&s(V.northward)&&s(V.eastward)&&s(V.planes2D_HIGH)&&s(V.planes2D_LOW)&&s(V.uMaxVmax)&&s(V.uvMinAndExtents)};zZ.hasAttributesForSphericalExtents=function(V){return s(V.sphericalExtents)&&s(V.longitudeRotation)&&s(V.planes2D_HIGH)&&s(V.planes2D_LOW)&&s(V.uMaxVmax)&&s(V.uvMinAndExtents)};function LI(V){return Math.max(V.width,V.height)>zZ.MAX_WIDTH_FOR_PLANAR_EXTENTS}zZ.shouldUseSphericalCoordinates=function(V){return v.typeOf.object("rectangle",V),LI(V)};zZ.MAX_WIDTH_FOR_PLANAR_EXTENTS=NV.toRadians(1);var VU=zZ;function NU(V){V=a(V,a.EMPTY_OBJECT);let l=V.geometryInstances;this.geometryInstances=l,this.show=a(V.show,!0),this.classificationType=a(V.classificationType,vZ.BOTH),this.debugShowBoundingVolume=a(V.debugShowBoundingVolume,!1),this.debugShowShadowVolume=a(V.debugShowShadowVolume,!1),this._debugShowShadowVolume=!1,this._extruded=a(V._extruded,!1),this._uniformMap=V._uniformMap,this._sp=void 0,this._spStencil=void 0,this._spPick=void 0,this._spColor=void 0,this._spPick2D=void 0,this._spColor2D=void 0,this._rsStencilDepthPass=void 0,this._rsStencilDepthPass3DTiles=void 0,this._rsColorPass=void 0,this._rsPickPass=void 0,this._commandsIgnoreShow=[],this._ready=!1,this._primitive=void 0,this._pickPrimitive=V._pickPrimitive,this._hasSphericalExtentsAttribute=!1,this._hasPlanarExtentsAttributes=!1,this._hasPerColorAttribute=!1,this.appearance=V.appearance,this._createBoundingVolumeFunction=V._createBoundingVolumeFunction,this._updateAndQueueCommandsFunction=V._updateAndQueueCommandsFunction,this._usePickOffsets=!1,this._primitiveOptions={geometryInstances:void 0,appearance:void 0,vertexCacheOptimize:a(V.vertexCacheOptimize,!1),interleave:a(V.interleave,!1),releaseGeometryInstances:a(V.releaseGeometryInstances,!0),allowPicking:a(V.allowPicking,!0),asynchronous:a(V.asynchronous,!0),compressVertices:a(V.compressVertices,!0),_createBoundingVolumeFunction:void 0,_createRenderStatesFunction:void 0,_createShaderProgramFunction:void 0,_createCommandsFunction:void 0,_updateAndQueueCommandsFunction:void 0,_createPickOffsets:!0}}Object.defineProperties(NU.prototype,{vertexCacheOptimize:{get:function(){return this._primitiveOptions.vertexCacheOptimize}},interleave:{get:function(){return this._primitiveOptions.interleave}},releaseGeometryInstances:{get:function(){return this._primitiveOptions.releaseGeometryInstances}},allowPicking:{get:function(){return this._primitiveOptions.allowPicking}},asynchronous:{get:function(){return this._primitiveOptions.asynchronous}},compressVertices:{get:function(){return this._primitiveOptions.compressVertices}},ready:{get:function(){return this._ready}},_needs2DShader:{get:function(){return this._hasPlanarExtentsAttributes||this._hasSphericalExtentsAttribute}}});NU.isSupported=function(V){return V.context.stencilBuffer};function jU(V,l){let Z=l?XZ.EQUAL:XZ.ALWAYS;return{colorMask:{red:!1,green:!1,blue:!1,alpha:!1},stencilTest:{enabled:V,frontFunction:Z,frontOperation:{fail:KV.KEEP,zFail:KV.DECREMENT_WRAP,zPass:KV.KEEP},backFunction:Z,backOperation:{fail:KV.KEEP,zFail:KV.INCREMENT_WRAP,zPass:KV.KEEP},reference:tW.CESIUM_3D_TILE_MASK,mask:tW.CESIUM_3D_TILE_MASK},stencilMask:tW.CLASSIFICATION_MASK,depthTest:{enabled:!0,func:Ue.LESS_OR_EQUAL},depthMask:!1}}function um(V){return{stencilTest:{enabled:V,frontFunction:XZ.NOT_EQUAL,frontOperation:{fail:KV.ZERO,zFail:KV.ZERO,zPass:KV.ZERO},backFunction:XZ.NOT_EQUAL,backOperation:{fail:KV.ZERO,zFail:KV.ZERO,zPass:KV.ZERO},reference:0,mask:tW.CLASSIFICATION_MASK},stencilMask:tW.CLASSIFICATION_MASK,depthTest:{enabled:!1},depthMask:!1,blending:DZ.PRE_MULTIPLIED_ALPHA_BLEND}}var KI={stencilTest:{enabled:!0,frontFunction:XZ.NOT_EQUAL,frontOperation:{fail:KV.ZERO,zFail:KV.ZERO,zPass:KV.ZERO},backFunction:XZ.NOT_EQUAL,backOperation:{fail:KV.ZERO,zFail:KV.ZERO,zPass:KV.ZERO},reference:0,mask:tW.CLASSIFICATION_MASK},stencilMask:tW.CLASSIFICATION_MASK,depthTest:{enabled:!1},depthMask:!1};function PI(V,l,Z,U){if(s(V._rsStencilDepthPass))return;let A=!V.debugShowShadowVolume;V._rsStencilDepthPass=sl.fromCache(jU(A,!1)),V._rsStencilDepthPass3DTiles=sl.fromCache(jU(A,!0)),V._rsColorPass=sl.fromCache(um(A,!1)),V._rsPickPass=sl.fromCache(KI)}function jI(V,l){if(!V.compressVertices)return l;if(l.search(/in\s+vec3\s+extrudeDirection;/g)!==-1){let Z="compressedAttributes",U=`in vec2 ${Z};`,A=`vec3 extrudeDirection;
`,t=`    extrudeDirection = czm_octDecode(${Z}, 65535.0);
`,m=l;m=m.replace(/in\s+vec3\s+extrudeDirection;/g,""),m=kV.replaceMain(m,"czm_non_compressed_main");let i=`void main() 
{ 
${t}    czm_non_compressed_main(); 
}`;return[U,A,m,i].join(`
`)}}function qI(V,l){let Z=l.context,U=V._primitive,A=qo;A=V._primitive._batchTable.getVertexShaderCallback()(A),A=UZ._appendDistanceDisplayConditionToShader(U,A),A=UZ._modifyShaderPosition(V,A,l.scene3DOnly),A=UZ._updateColorAttribute(U,A);let t=V._hasPlanarExtentsAttributes,m=t||V._hasSphericalExtentsAttribute;V._extruded&&(A=jI(U,A));let i=V._extruded?"EXTRUDED_GEOMETRY":"",n=new kV({defines:[i],sources:[A]}),o=new kV({sources:[$o]}),h=V._primitive._attributeLocations,R=new VU(m,t,V.appearance);if(V._spStencil=Dl.replaceCache({context:Z,shaderProgram:V._spStencil,vertexShaderSource:n,fragmentShaderSource:o,attributeLocations:h}),V._primitive.allowPicking){let T=kV.createPickVertexShaderSource(A);T=UZ._appendShowToShader(U,T),T=UZ._updatePickColorAttribute(T);let S=R.createPickFragmentShader(!1),p=R.createPickVertexShader([i],T,!1,l.mapProjection);if(V._spPick=Dl.replaceCache({context:Z,shaderProgram:V._spPick,vertexShaderSource:p,fragmentShaderSource:S,attributeLocations:h}),m){let b=Z.shaderCache.getDerivedShaderProgram(V._spPick,"2dPick");if(!s(b)){let E=R.createPickFragmentShader(!0),D=R.createPickVertexShader([i],T,!0,l.mapProjection);b=Z.shaderCache.createDerivedShaderProgram(V._spPick,"2dPick",{vertexShaderSource:D,fragmentShaderSource:E,attributeLocations:h})}V._spPick2D=b}}else V._spPick=Dl.fromCache({context:Z,vertexShaderSource:n,fragmentShaderSource:o,attributeLocations:h});A=UZ._appendShowToShader(U,A),n=new kV({defines:[i],sources:[A]}),V._sp=Dl.replaceCache({context:Z,shaderProgram:V._sp,vertexShaderSource:n,fragmentShaderSource:o,attributeLocations:h});let c=R.createFragmentShader(!1),Q=R.createVertexShader([i],A,!1,l.mapProjection);if(V._spColor=Dl.replaceCache({context:Z,shaderProgram:V._spColor,vertexShaderSource:Q,fragmentShaderSource:c,attributeLocations:h}),m){let T=Z.shaderCache.getDerivedShaderProgram(V._spColor,"2dColor");if(!s(T)){let S=R.createFragmentShader(!0),p=R.createVertexShader([i],A,!0,l.mapProjection);T=Z.shaderCache.createDerivedShaderProgram(V._spColor,"2dColor",{vertexShaderSource:p,fragmentShaderSource:S,attributeLocations:h})}V._spColor2D=T}}function $I(V,l){let Z=V._primitive,U=Z._va.length*2;l.length=U;let A,t,m,i=0,n=Z._batchTable.getUniformMapCallback()(V._uniformMap),o=V._needs2DShader;for(A=0;A<U;A+=2){let Q=Z._va[i++];t=l[A],s(t)||(t=l[A]=new tl({owner:V,primitiveType:Z._primitiveType})),t.vertexArray=Q,t.renderState=V._rsStencilDepthPass,t.shaderProgram=V._sp,t.uniformMap=n,t.pass=Nl.TERRAIN_CLASSIFICATION,m=tl.shallowClone(t,t.derivedCommands.tileset),m.renderState=V._rsStencilDepthPass3DTiles,m.pass=Nl.CESIUM_3D_TILE_CLASSIFICATION,t.derivedCommands.tileset=m,t=l[A+1],s(t)||(t=l[A+1]=new tl({owner:V,primitiveType:Z._primitiveType})),t.vertexArray=Q,t.renderState=V._rsColorPass,t.shaderProgram=V._spColor,t.pass=Nl.TERRAIN_CLASSIFICATION;let S=V.appearance.material;if(s(S)&&(n=jZ(n,S._uniforms)),t.uniformMap=n,m=tl.shallowClone(t,t.derivedCommands.tileset),m.pass=Nl.CESIUM_3D_TILE_CLASSIFICATION,t.derivedCommands.tileset=m,o){let p=tl.shallowClone(t,t.derivedCommands.appearance2D);p.shaderProgram=V._spColor2D,t.derivedCommands.appearance2D=p,p=tl.shallowClone(m,m.derivedCommands.appearance2D),p.shaderProgram=V._spColor2D,m.derivedCommands.appearance2D=p}}let h=V._commandsIgnoreShow,R=V._spStencil,c=0;U=h.length=U/2;for(let Q=0;Q<U;++Q){let T=h[Q]=tl.shallowClone(l[c],h[Q]);T.shaderProgram=R,T.pass=Nl.CESIUM_3D_TILE_CLASSIFICATION_IGNORE_SHOW,c+=2}}function Vc(V,l){let Z=V._usePickOffsets,U=V._primitive,A=U._va.length*2,t,m=0,i;Z&&(t=U._pickOffsets,A=t.length*2),l.length=A;let n,o,h,R=0,c=U._batchTable.getUniformMapCallback()(V._uniformMap),Q=V._needs2DShader;for(n=0;n<A;n+=2){let T=U._va[R++];if(Z&&(i=t[m++],T=U._va[i.index]),o=l[n],s(o)||(o=l[n]=new tl({owner:V,primitiveType:U._primitiveType,pickOnly:!0})),o.vertexArray=T,o.renderState=V._rsStencilDepthPass,o.shaderProgram=V._sp,o.uniformMap=c,o.pass=Nl.TERRAIN_CLASSIFICATION,Z&&(o.offset=i.offset,o.count=i.count),h=tl.shallowClone(o,o.derivedCommands.tileset),h.renderState=V._rsStencilDepthPass3DTiles,h.pass=Nl.CESIUM_3D_TILE_CLASSIFICATION,o.derivedCommands.tileset=h,o=l[n+1],s(o)||(o=l[n+1]=new tl({owner:V,primitiveType:U._primitiveType,pickOnly:!0})),o.vertexArray=T,o.renderState=V._rsPickPass,o.shaderProgram=V._spPick,o.uniformMap=c,o.pass=Nl.TERRAIN_CLASSIFICATION,Z&&(o.offset=i.offset,o.count=i.count),h=tl.shallowClone(o,o.derivedCommands.tileset),h.pass=Nl.CESIUM_3D_TILE_CLASSIFICATION,o.derivedCommands.tileset=h,Q){let S=tl.shallowClone(o,o.derivedCommands.pick2D);S.shaderProgram=V._spPick2D,o.derivedCommands.pick2D=S,S=tl.shallowClone(h,h.derivedCommands.pick2D),S.shaderProgram=V._spPick2D,h.derivedCommands.pick2D=S}}}function lc(V,l,Z,U,A,t,m){$I(V,t),Vc(V,m)}function oh(V,l){return Math.floor(V%l/2)}function bm(V,l,Z,U,A,t){V.modelMatrix=Z,V.boundingVolume=A,V.cull=U,V.debugShowBoundingVolume=t,l.commandList.push(V)}function hh(V,l,Z,U,A){V.modelMatrix=Z,V.boundingVolume=A,V.cull=U,l.commandList.push(V)}function Zc(V,l,Z,U,A,t,m,i){let n=V._primitive;UZ._updateBoundingVolumes(n,l,A);let o;l.mode===IV.SCENE3D?o=n._boundingSphereWC:l.mode===IV.COLUMBUS_VIEW?o=n._boundingSphereCV:l.mode===IV.SCENE2D&&s(n._boundingSphere2D)?o=n._boundingSphere2D:s(n._boundingSphereMorph)&&(o=n._boundingSphereMorph);let h=V.classificationType,R=h!==vZ.CESIUM_3D_TILE,c=h!==vZ.TERRAIN,Q=l.passes,T,S,p;if(Q.render){let b=Z.length;for(T=0;T<b;++T)S=o[oh(T,b)],R&&(p=Z[T],bm(p,l,A,t,S,m)),c&&(p=Z[T].derivedCommands.tileset,bm(p,l,A,t,S,m));if(l.invertClassification){let E=V._commandsIgnoreShow,D=E.length;for(T=0;T<D;++T)S=o[T],p=E[T],bm(p,l,A,t,S,m)}}if(Q.pick){let b=U.length,E=n._pickOffsets;for(T=0;T<b;++T){let D=E[oh(T,b)];S=o[D.index],R&&(p=U[T],hh(p,l,A,t,S)),c&&(p=U[T].derivedCommands.tileset,hh(p,l,A,t,S))}}}NU.prototype.update=function(V){if(!s(this._primitive)&&!s(this.geometryInstances))return;let l=this.appearance;s(l)&&s(l.material)&&l.material.update(V.context);let Z=this,U=this._primitiveOptions;if(!s(this._primitive)){let A=Array.isArray(this.geometryInstances)?this.geometryInstances:[this.geometryInstances],t=A.length,m,i,n,o=!1,h=!0,R,c=!1,Q=!1;for(t>0&&(n=A[0].attributes,c=VU.hasAttributesForSphericalExtents(n),Q=VU.hasAttributesForTextureCoordinatePlanes(n),R=n.color),m=0;m<t;m++){i=A[m];let S=i.attributes.color;if(s(S))o=!0;else if(o)throw new I("All GeometryInstances must have color attributes to use per-instance color.");h=h&&s(S)&&jo.equals(R,S)}if(!h&&!c&&!Q)throw new I("All GeometryInstances must have the same color attribute except via GroundPrimitives");if(o&&!s(l)&&(l=new eW({flat:!0}),this.appearance=l),!o&&l instanceof eW)throw new I("PerInstanceColorAppearance requires color GeometryInstanceAttributes on all GeometryInstances");if(s(l.material)&&!c&&!Q)throw new I("Materials on ClassificationPrimitives are not supported except via GroundPrimitives");this._usePickOffsets=!c&&!Q,this._hasSphericalExtentsAttribute=c,this._hasPlanarExtentsAttributes=Q,this._hasPerColorAttribute=o;let T=new Array(t);for(m=0;m<t;++m)i=A[m],T[m]=new RU({geometry:i.geometry,attributes:i.attributes,modelMatrix:i.modelMatrix,id:i.id,pickPrimitive:a(this._pickPrimitive,Z)});U.appearance=l,U.geometryInstances=T,s(this._createBoundingVolumeFunction)&&(U._createBoundingVolumeFunction=function(S,p){Z._createBoundingVolumeFunction(S,p)}),U._createRenderStatesFunction=function(S,p,b,E){PI(Z,p)},U._createShaderProgramFunction=function(S,p,b){qI(Z,p)},U._createCommandsFunction=function(S,p,b,E,D,_,Y){lc(Z,void 0,void 0,!0,!1,_,Y)},s(this._updateAndQueueCommandsFunction)?U._updateAndQueueCommandsFunction=function(S,p,b,E,D,_,Y,K){Z._updateAndQueueCommandsFunction(S,p,b,E,D,_,Y,K)}:U._updateAndQueueCommandsFunction=function(S,p,b,E,D,_,Y,K){Zc(Z,p,b,E,D,_,Y,K)},this._primitive=new UZ(U)}if(this.debugShowShadowVolume&&!this._debugShowShadowVolume&&this._ready?(this._debugShowShadowVolume=!0,this._rsStencilDepthPass=sl.fromCache(jU(!1,!1)),this._rsStencilDepthPass3DTiles=sl.fromCache(jU(!1,!0)),this._rsColorPass=sl.fromCache(um(!1))):!this.debugShowShadowVolume&&this._debugShowShadowVolume&&(this._debugShowShadowVolume=!1,this._rsStencilDepthPass=sl.fromCache(jU(!0,!1)),this._rsStencilDepthPass3DTiles=sl.fromCache(jU(!0,!0)),this._rsColorPass=sl.fromCache(um(!0))),this._primitive.appearance!==l){if(!this._hasSphericalExtentsAttribute&&!this._hasPlanarExtentsAttributes&&s(l.material))throw new I("Materials on ClassificationPrimitives are not supported except via GroundPrimitive");if(!this._hasPerColorAttribute&&l instanceof eW)throw new I("PerInstanceColorAppearance requires color GeometryInstanceAttribute");this._primitive.appearance=l}this._primitive.show=this.show,this._primitive.debugShowBoundingVolume=this.debugShowBoundingVolume,this._primitive.update(V),V.afterRender.push(()=>{s(this._primitive)&&this._primitive.ready&&(this._ready=!0,this.releaseGeometryInstances&&(this.geometryInstances=void 0))})};NU.prototype.getGeometryInstanceAttributes=function(V){if(!s(this._primitive))throw new I("must call update before calling getGeometryInstanceAttributes");return this._primitive.getGeometryInstanceAttributes(V)};NU.prototype.isDestroyed=function(){return!1};NU.prototype.destroy=function(){return this._primitive=this._primitive&&this._primitive.destroy(),this._sp=this._sp&&this._sp.destroy(),this._spPick=this._spPick&&this._spPick.destroy(),this._spColor=this._spColor&&this._spColor.destroy(),this._spPick2D=void 0,this._spColor2D=void 0,fV(this)};var Jm=NU;var Wc={u_globeMinimumAltitude:function(){return 55e3}};function IZ(V){V=a(V,a.EMPTY_OBJECT);let l=V.appearance,Z=V.geometryInstances;if(!s(l)&&s(Z)){let A=Array.isArray(Z)?Z:[Z],t=A.length;for(let m=0;m<t;m++){let i=A[m].attributes;if(s(i)&&s(i.color)){l=new eW({flat:!0});break}}}this.appearance=l,this.geometryInstances=V.geometryInstances,this.show=a(V.show,!0),this.classificationType=a(V.classificationType,vZ.BOTH),this.debugShowBoundingVolume=a(V.debugShowBoundingVolume,!1),this.debugShowShadowVolume=a(V.debugShowShadowVolume,!1),this._boundingVolumes=[],this._boundingVolumes2D=[],this._ready=!1,this._primitive=void 0,this._maxHeight=void 0,this._minHeight=void 0,this._maxTerrainHeight=qZ._defaultMaxTerrainHeight,this._minTerrainHeight=qZ._defaultMinTerrainHeight,this._boundingSpheresKeys=[],this._boundingSpheres=[],this._useFragmentCulling=!1,this._zIndex=void 0;let U=this;this._classificationPrimitiveOptions={geometryInstances:void 0,appearance:void 0,vertexCacheOptimize:a(V.vertexCacheOptimize,!1),interleave:a(V.interleave,!1),releaseGeometryInstances:a(V.releaseGeometryInstances,!0),allowPicking:a(V.allowPicking,!0),asynchronous:a(V.asynchronous,!0),compressVertices:a(V.compressVertices,!0),_createBoundingVolumeFunction:void 0,_updateAndQueueCommandsFunction:void 0,_pickPrimitive:U,_extruded:!0,_uniformMap:Wc}}Object.defineProperties(IZ.prototype,{vertexCacheOptimize:{get:function(){return this._classificationPrimitiveOptions.vertexCacheOptimize}},interleave:{get:function(){return this._classificationPrimitiveOptions.interleave}},releaseGeometryInstances:{get:function(){return this._classificationPrimitiveOptions.releaseGeometryInstances}},allowPicking:{get:function(){return this._classificationPrimitiveOptions.allowPicking}},asynchronous:{get:function(){return this._classificationPrimitiveOptions.asynchronous}},compressVertices:{get:function(){return this._classificationPrimitiveOptions.compressVertices}},ready:{get:function(){return this._ready}}});IZ.isSupported=Jm.isSupported;function Rh(V){return function(l,Z){let U=Z.maximumRadius,A=U/Math.cos(l*.5)-U;return V._maxHeight+A}}function dh(V){return function(l,Z){return V._minHeight}}var Uc=new w,Ac=new w,tc=new w,ec=new Ul,mc=new SW;function ie(V,l){let Z=V.mapProjection.ellipsoid;if(!s(l.attributes)||!s(l.attributes.position3DHigh))return s(l.rectangle)?l.rectangle:void 0;let U=l.attributes.position3DHigh.values,A=l.attributes.position3DLow.values,t=U.length,m=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY,o=Number.NEGATIVE_INFINITY;for(let R=0;R<t;R+=3){let c=w.unpack(U,R,Uc),Q=w.unpack(A,R,Ac),T=w.add(c,Q,tc),S=Z.cartesianToCartographic(T,ec),p=S.latitude,b=S.longitude;m=Math.min(m,p),i=Math.min(i,b),n=Math.max(n,p),o=Math.max(o,b)}let h=mc;return h.north=n,h.south=m,h.east=o,h.west=i,h}function ic(V,l,Z){let U=qZ.getMinimumMaximumHeights(l,Z);V._minTerrainHeight=U.minimumTerrainHeight,V._maxTerrainHeight=U.maximumTerrainHeight}function nc(V,l,Z){let U=l.mapProjection.ellipsoid,A=ie(l,Z),t=bt.fromRectangle(A,V._minHeight,V._maxHeight,U);if(V._boundingVolumes.push(t),!l.scene3DOnly){let m=l.mapProjection,i=gV.fromRectangleWithHeights2D(A,m,V._maxHeight,V._minHeight);w.fromElements(i.center.z,i.center.x,i.center.y,i.center),V._boundingVolumes2D.push(i)}}function xm(V,l){return Math.floor(V%l/2)}function Dm(V,l,Z,U,A,t,m){let i=V._primitive;Z.mode!==IV.SCENE3D&&l.shaderProgram===i._spColor&&i._needs2DShader&&(l=l.derivedCommands.appearance2D),l.owner=V,l.modelMatrix=U,l.boundingVolume=t,l.cull=A,l.debugShowBoundingVolume=m,Z.commandList.push(l)}function Th(V,l,Z,U,A,t){let m=V._primitive;Z.mode!==IV.SCENE3D&&l.shaderProgram===m._spPick&&m._needs2DShader&&(l=l.derivedCommands.pick2D),l.owner=V,l.modelMatrix=U,l.boundingVolume=t,l.cull=A,Z.commandList.push(l)}function Gc(V,l,Z,U,A,t,m,i){let n;l.mode===IV.SCENE3D?n=V._boundingVolumes:n=V._boundingVolumes2D;let o=V.classificationType,h=o!==vZ.CESIUM_3D_TILE,R=o!==vZ.TERRAIN,c=l.passes,Q=V._primitive,T,S,p;if(c.render){let b=Z.length;for(T=0;T<b;++T)S=n[xm(T,b)],h&&(p=Z[T],Dm(V,p,l,A,t,S,m)),R&&(p=Z[T].derivedCommands.tileset,Dm(V,p,l,A,t,S,m));if(l.invertClassification){let E=Q._commandsIgnoreShow,D=E.length;for(T=0;T<D;++T)S=n[T],p=E[T],Dm(V,p,l,A,t,S,m)}}if(c.pick){let b=U.length,E;for(V._useFragmentCulling||(E=Q._primitive._pickOffsets),T=0;T<b;++T){if(S=n[xm(T,b)],!V._useFragmentCulling){let D=E[xm(T,b)];S=n[D.index]}h&&(p=U[T],Th(V,p,l,A,t,S)),R&&(p=U[T].derivedCommands.tileset,Th(V,p,l,A,t,S))}}}IZ.initializeTerrainHeights=function(){return qZ.initialize()};IZ.prototype.update=function(V){if(!s(this._primitive)&&!s(this.geometryInstances))return;if(!qZ.initialized){if(!this.asynchronous)throw new I("For synchronous GroundPrimitives, you must call GroundPrimitive.initializeTerrainHeights() and wait for the returned promise to resolve.");IZ.initializeTerrainHeights();return}let l=this,Z=this._classificationPrimitiveOptions;if(!s(this._primitive)){let U=V.mapProjection.ellipsoid,A,t,m,i=Array.isArray(this.geometryInstances)?this.geometryInstances:[this.geometryInstances],n=i.length,o=new Array(n),h,R;for(h=0;h<n;++h){A=i[h],t=A.geometry;let S=ie(V,t);s(R)?s(S)&&SW.union(R,S,R):R=SW.clone(S);let p=A.id;if(s(p)&&s(S)){let b=qZ.getBoundingSphere(S,U);this._boundingSpheresKeys.push(p),this._boundingSpheres.push(b)}if(m=t.constructor,!s(m)||!s(m.createShadowVolume))throw new I("Not all of the geometry instances have GroundPrimitive support.")}ic(this,R,U);let c=V.terrainExaggeration,Q=V.terrainExaggerationRelativeHeight;this._minHeight=Ye.getHeight(this._minTerrainHeight,c,Q),this._maxHeight=Ye.getHeight(this._maxTerrainHeight,c,Q);let T=IZ._supportsMaterials(V.context);if(this._useFragmentCulling=T,T){let S,p=!0;for(h=0;h<n;++h)if(A=i[h],t=A.geometry,R=ie(V,t),VU.shouldUseSphericalCoordinates(R)){p=!1;break}for(h=0;h<n;++h){A=i[h],t=A.geometry,m=t.constructor;let b=ie(V,t),E=t.textureCoordinateRotationPoints;p?S=VU.getPlanarTextureCoordinateAttributes(b,E,U,V.mapProjection,this._maxHeight):S=VU.getSphericalExtentGeometryInstanceAttributes(b,E,U,V.mapProjection);let D=A.attributes;for(let _ in D)D.hasOwnProperty(_)&&(S[_]=D[_]);o[h]=new RU({geometry:m.createShadowVolume(t,dh(this),Rh(this)),attributes:S,id:A.id})}}else for(h=0;h<n;++h)A=i[h],t=A.geometry,m=t.constructor,o[h]=new RU({geometry:m.createShadowVolume(t,dh(this),Rh(this)),attributes:A.attributes,id:A.id});Z.geometryInstances=o,Z.appearance=this.appearance,Z._createBoundingVolumeFunction=function(S,p){nc(l,S,p)},Z._updateAndQueueCommandsFunction=function(S,p,b,E,D,_,Y,K){Gc(l,p,b,E,D,_,Y,K)},this._primitive=new Jm(Z)}this._primitive.appearance=this.appearance,this._primitive.show=this.show,this._primitive.debugShowShadowVolume=this.debugShowShadowVolume,this._primitive.debugShowBoundingVolume=this.debugShowBoundingVolume,this._primitive.update(V),V.afterRender.push(()=>{!this._ready&&s(this._primitive)&&this._primitive.ready&&(this._ready=!0,this.releaseGeometryInstances&&(this.geometryInstances=void 0))})};IZ.prototype.getBoundingSphere=function(V){let l=this._boundingSpheresKeys.indexOf(V);if(l!==-1)return this._boundingSpheres[l]};IZ.prototype.getGeometryInstanceAttributes=function(V){if(!s(this._primitive))throw new I("must call update before calling getGeometryInstanceAttributes");return this._primitive.getGeometryInstanceAttributes(V)};IZ.prototype.isDestroyed=function(){return!1};IZ.prototype.destroy=function(){return this._primitive=this._primitive&&this._primitive.destroy(),fV(this)};IZ._supportsMaterials=function(V){return V.depthTexture};IZ.supportsMaterials=function(V){return v.typeOf.object("scene",V),IZ._supportsMaterials(V.frameState.context)};var Bh=IZ;function lU(V){this._value=void 0,this._hasClone=!1,this._hasEquals=!1,this._definitionChanged=new dV,this.setValue(V)}Object.defineProperties(lU.prototype,{isConstant:{value:!0},definitionChanged:{get:function(){return this._definitionChanged}}});lU.prototype.getValue=function(V,l){return this._hasClone?this._value.clone(l):this._value};lU.prototype.setValue=function(V){let l=this._value;if(l!==V){let Z=s(V),U=Z&&typeof V.clone=="function",A=Z&&typeof V.equals=="function";(!A||!V.equals(l))&&(this._hasClone=U,this._hasEquals=A,this._value=U?V.clone(this._value):V,this._definitionChanged.raiseEvent(this))}};lU.prototype.equals=function(V){return this===V||V instanceof lU&&(!this._hasEquals&&this._value===V._value||this._hasEquals&&this._value.equals(V._value))};lU.prototype.valueOf=function(){return this._value};lU.prototype.toString=function(){return String(this._value)};var _W=lU;function sc(V,l,Z,U,A){return{configurable:U,get:function(){return this[l]},set:function(t){let m=this[l],i=this[Z];s(i)&&(i(),this[Z]=void 0),t!==void 0&&(!s(t)||!s(t.getValue))&&s(A)&&(t=A(t)),m!==t&&(this[l]=t,this._definitionChanged.raiseEvent(this,V,t,m)),s(t)&&s(t.definitionChanged)&&(this[Z]=t.definitionChanged.addEventListener(function(){this._definitionChanged.raiseEvent(this,V,t,t)},this))}}}function ac(V){return new _W(V)}function rc(V,l,Z){return sc(V,`_${V.toString()}`,`_${V.toString()}Subscription`,a(l,!1),a(Z,ac))}var X=rc;function zA(V){this._definitionChanged=new dV,this._show=void 0,this._showSubscription=void 0,this._image=void 0,this._imageSubscription=void 0,this._scale=void 0,this._scaleSubscription=void 0,this._pixelOffset=void 0,this._pixelOffsetSubscription=void 0,this._eyeOffset=void 0,this._eyeOffsetSubscription=void 0,this._horizontalOrigin=void 0,this._horizontalOriginSubscription=void 0,this._verticalOrigin=void 0,this._verticalOriginSubscription=void 0,this._heightReference=void 0,this._heightReferenceSubscription=void 0,this._color=void 0,this._colorSubscription=void 0,this._rotation=void 0,this._rotationSubscription=void 0,this._alignedAxis=void 0,this._alignedAxisSubscription=void 0,this._sizeInMeters=void 0,this._sizeInMetersSubscription=void 0,this._width=void 0,this._widthSubscription=void 0,this._height=void 0,this._heightSubscription=void 0,this._scaleByDistance=void 0,this._scaleByDistanceSubscription=void 0,this._translucencyByDistance=void 0,this._translucencyByDistanceSubscription=void 0,this._pixelOffsetScaleByDistance=void 0,this._pixelOffsetScaleByDistanceSubscription=void 0,this._imageSubRegion=void 0,this._imageSubRegionSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this._disableDepthTestDistance=void 0,this._disableDepthTestDistanceSubscription=void 0,this.merge(a(V,a.EMPTY_OBJECT))}Object.defineProperties(zA.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:X("show"),image:X("image"),scale:X("scale"),pixelOffset:X("pixelOffset"),eyeOffset:X("eyeOffset"),horizontalOrigin:X("horizontalOrigin"),verticalOrigin:X("verticalOrigin"),heightReference:X("heightReference"),color:X("color"),rotation:X("rotation"),alignedAxis:X("alignedAxis"),sizeInMeters:X("sizeInMeters"),width:X("width"),height:X("height"),scaleByDistance:X("scaleByDistance"),translucencyByDistance:X("translucencyByDistance"),pixelOffsetScaleByDistance:X("pixelOffsetScaleByDistance"),imageSubRegion:X("imageSubRegion"),distanceDisplayCondition:X("distanceDisplayCondition"),disableDepthTestDistance:X("disableDepthTestDistance")});zA.prototype.clone=function(V){return s(V)?(V.show=this._show,V.image=this._image,V.scale=this._scale,V.pixelOffset=this._pixelOffset,V.eyeOffset=this._eyeOffset,V.horizontalOrigin=this._horizontalOrigin,V.verticalOrigin=this._verticalOrigin,V.heightReference=this._heightReference,V.color=this._color,V.rotation=this._rotation,V.alignedAxis=this._alignedAxis,V.sizeInMeters=this._sizeInMeters,V.width=this._width,V.height=this._height,V.scaleByDistance=this._scaleByDistance,V.translucencyByDistance=this._translucencyByDistance,V.pixelOffsetScaleByDistance=this._pixelOffsetScaleByDistance,V.imageSubRegion=this._imageSubRegion,V.distanceDisplayCondition=this._distanceDisplayCondition,V.disableDepthTestDistance=this._disableDepthTestDistance,V):new zA(this)};zA.prototype.merge=function(V){if(!s(V))throw new I("source is required.");this.show=a(this._show,V.show),this.image=a(this._image,V.image),this.scale=a(this._scale,V.scale),this.pixelOffset=a(this._pixelOffset,V.pixelOffset),this.eyeOffset=a(this._eyeOffset,V.eyeOffset),this.horizontalOrigin=a(this._horizontalOrigin,V.horizontalOrigin),this.verticalOrigin=a(this._verticalOrigin,V.verticalOrigin),this.heightReference=a(this._heightReference,V.heightReference),this.color=a(this._color,V.color),this.rotation=a(this._rotation,V.rotation),this.alignedAxis=a(this._alignedAxis,V.alignedAxis),this.sizeInMeters=a(this._sizeInMeters,V.sizeInMeters),this.width=a(this._width,V.width),this.height=a(this._height,V.height),this.scaleByDistance=a(this._scaleByDistance,V.scaleByDistance),this.translucencyByDistance=a(this._translucencyByDistance,V.translucencyByDistance),this.pixelOffsetScaleByDistance=a(this._pixelOffsetScaleByDistance,V.pixelOffsetScaleByDistance),this.imageSubRegion=a(this._imageSubRegion,V.imageSubRegion),this.distanceDisplayCondition=a(this._distanceDisplayCondition,V.distanceDisplayCondition),this.disableDepthTestDistance=a(this._disableDepthTestDistance,V.disableDepthTestDistance)};var Fh=zA;function mW(){I.throwInstantiationError()}Object.defineProperties(mW.prototype,{isConstant:{get:I.throwInstantiationError},definitionChanged:{get:I.throwInstantiationError}});mW.prototype.getValue=I.throwInstantiationError;mW.prototype.equals=I.throwInstantiationError;mW.equals=function(V,l){return V===l||s(V)&&V.equals(l)};mW.arrayEquals=function(V,l){if(V===l)return!0;if(!s(V)||!s(l)||V.length!==l.length)return!1;let Z=V.length;for(let U=0;U<Z;U++)if(!mW.equals(V[U],l[U]))return!1;return!0};mW.isConstant=function(V){return!s(V)||V.isConstant};mW.getValueOrUndefined=function(V,l,Z){return s(V)?V.getValue(l,Z):void 0};mW.getValueOrDefault=function(V,l,Z,U){return s(V)?a(V.getValue(l,U),Z):Z};mW.getValueOrClonedDefault=function(V,l,Z,U){let A;return s(V)&&(A=V.getValue(l,U)),s(A)||(A=Z.clone(A)),A};var YV=mW;function qU(V){this._definitionChanged=new dV,this._color=void 0,this._colorSubscription=void 0,this.color=V}Object.defineProperties(qU.prototype,{isConstant:{get:function(){return YV.isConstant(this._color)}},definitionChanged:{get:function(){return this._definitionChanged}},color:X("color")});qU.prototype.getType=function(V){return"Color"};qU.prototype.getValue=function(V,l){return s(l)||(l={}),l.color=YV.getValueOrClonedDefault(this._color,V,z.WHITE,l.color),l};qU.prototype.equals=function(V){return this===V||V instanceof qU&&YV.equals(this._color,V._color)};var Qh=qU;var oc=new q(1,1),hc=!1,Rc=z.WHITE;function $U(V){V=a(V,a.EMPTY_OBJECT),this._definitionChanged=new dV,this._image=void 0,this._imageSubscription=void 0,this._repeat=void 0,this._repeatSubscription=void 0,this._color=void 0,this._colorSubscription=void 0,this._transparent=void 0,this._transparentSubscription=void 0,this.image=V.image,this.repeat=V.repeat,this.color=V.color,this.transparent=V.transparent}Object.defineProperties($U.prototype,{isConstant:{get:function(){return YV.isConstant(this._image)&&YV.isConstant(this._repeat)}},definitionChanged:{get:function(){return this._definitionChanged}},image:X("image"),repeat:X("repeat"),color:X("color"),transparent:X("transparent")});$U.prototype.getType=function(V){return"Image"};$U.prototype.getValue=function(V,l){return s(l)||(l={}),l.image=YV.getValueOrUndefined(this._image,V),l.repeat=YV.getValueOrClonedDefault(this._repeat,V,oc,l.repeat),l.color=YV.getValueOrClonedDefault(this._color,V,Rc,l.color),YV.getValueOrDefault(this._transparent,V,hc)&&(l.color.alpha=Math.min(.99,l.color.alpha)),l};$U.prototype.equals=function(V){return this===V||V instanceof $U&&YV.equals(this._image,V._image)&&YV.equals(this._repeat,V._repeat)&&YV.equals(this._color,V._color)&&YV.equals(this._transparent,V._transparent)};var Ih=$U;function dc(V){if(V instanceof z)return new Qh(V);if(typeof V=="string"||V instanceof xl||V instanceof HTMLCanvasElement||V instanceof HTMLVideoElement){let l=new Ih;return l.image=V,l}throw new I(`Unable to infer material type: ${V}`)}function Tc(V,l){return X(V,l,dc)}var Tl=Tc;function kA(V){this._definitionChanged=new dV,this._show=void 0,this._showSubscription=void 0,this._dimensions=void 0,this._dimensionsSubscription=void 0,this._heightReference=void 0,this._heightReferenceSubscription=void 0,this._fill=void 0,this._fillSubscription=void 0,this._material=void 0,this._materialSubscription=void 0,this._outline=void 0,this._outlineSubscription=void 0,this._outlineColor=void 0,this._outlineColorSubscription=void 0,this._outlineWidth=void 0,this._outlineWidthSubscription=void 0,this._shadows=void 0,this._shadowsSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this.merge(a(V,a.EMPTY_OBJECT))}Object.defineProperties(kA.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:X("show"),dimensions:X("dimensions"),heightReference:X("heightReference"),fill:X("fill"),material:Tl("material"),outline:X("outline"),outlineColor:X("outlineColor"),outlineWidth:X("outlineWidth"),shadows:X("shadows"),distanceDisplayCondition:X("distanceDisplayCondition")});kA.prototype.clone=function(V){return s(V)?(V.show=this.show,V.dimensions=this.dimensions,V.heightReference=this.heightReference,V.fill=this.fill,V.material=this.material,V.outline=this.outline,V.outlineColor=this.outlineColor,V.outlineWidth=this.outlineWidth,V.shadows=this.shadows,V.distanceDisplayCondition=this.distanceDisplayCondition,V):new kA(this)};kA.prototype.merge=function(V){if(!s(V))throw new I("source is required.");this.show=a(this.show,V.show),this.dimensions=a(this.dimensions,V.dimensions),this.heightReference=a(this.heightReference,V.heightReference),this.fill=a(this.fill,V.fill),this.material=a(this.material,V.material),this.outline=a(this.outline,V.outline),this.outlineColor=a(this.outlineColor,V.outlineColor),this.outlineWidth=a(this.outlineWidth,V.outlineWidth),this.shadows=a(this.shadows,V.shadows),this.distanceDisplayCondition=a(this.distanceDisplayCondition,V.distanceDisplayCondition)};var ch=kA;function VA(){I.throwInstantiationError()}Object.defineProperties(VA.prototype,{isConstant:{get:I.throwInstantiationError},definitionChanged:{get:I.throwInstantiationError},referenceFrame:{get:I.throwInstantiationError}});VA.prototype.getValue=I.throwInstantiationError;VA.prototype.getValueInReferenceFrame=I.throwInstantiationError;VA.prototype.equals=I.throwInstantiationError;var Mm=new gl;VA.convertToReferenceFrame=function(V,l,Z,U,A){if(!s(l))return l;if(s(A)||(A=new w),Z===U)return w.clone(l,A);let t=QZ.computeIcrfToFixedMatrix(V,Mm);if(s(t)||(t=QZ.computeTemeToPseudoFixedMatrix(V,Mm)),Z===ul.INERTIAL)return gl.multiplyByVector(t,l,A);if(Z===ul.FIXED)return gl.multiplyByVector(gl.transpose(t,Mm),l,A)};var ne=VA;function EU(V,l){this._definitionChanged=new dV,this._value=w.clone(V),this._referenceFrame=a(l,ul.FIXED)}Object.defineProperties(EU.prototype,{isConstant:{get:function(){return!s(this._value)||this._referenceFrame===ul.FIXED}},definitionChanged:{get:function(){return this._definitionChanged}},referenceFrame:{get:function(){return this._referenceFrame}}});EU.prototype.getValue=function(V,l){return this.getValueInReferenceFrame(V,ul.FIXED,l)};EU.prototype.setValue=function(V,l){let Z=!1;w.equals(this._value,V)||(Z=!0,this._value=w.clone(V)),s(l)&&this._referenceFrame!==l&&(Z=!0,this._referenceFrame=l),Z&&this._definitionChanged.raiseEvent(this)};EU.prototype.getValueInReferenceFrame=function(V,l,Z){if(!s(V))throw new I("time is required.");if(!s(l))throw new I("referenceFrame is required.");return ne.convertToReferenceFrame(V,this._value,this._referenceFrame,l,Z)};EU.prototype.equals=function(V){return this===V||V instanceof EU&&w.equals(this._value,V._value)&&this._referenceFrame===V._referenceFrame};var Sh=EU;function HA(V){this._definitionChanged=new dV,this._show=void 0,this._showSubscription=void 0,this._positions=void 0,this._positionsSubscription=void 0,this._width=void 0,this._widthSubscription=void 0,this._height=void 0,this._heightSubscription=void 0,this._heightReference=void 0,this._heightReferenceSubscription=void 0,this._extrudedHeight=void 0,this._extrudedHeightSubscription=void 0,this._extrudedHeightReference=void 0,this._extrudedHeightReferenceSubscription=void 0,this._cornerType=void 0,this._cornerTypeSubscription=void 0,this._granularity=void 0,this._granularitySubscription=void 0,this._fill=void 0,this._fillSubscription=void 0,this._material=void 0,this._materialSubscription=void 0,this._outline=void 0,this._outlineSubscription=void 0,this._outlineColor=void 0,this._outlineColorSubscription=void 0,this._outlineWidth=void 0,this._outlineWidthSubscription=void 0,this._shadows=void 0,this._shadowsSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this._classificationType=void 0,this._classificationTypeSubscription=void 0,this._zIndex=void 0,this._zIndexSubscription=void 0,this.merge(a(V,a.EMPTY_OBJECT))}Object.defineProperties(HA.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:X("show"),positions:X("positions"),width:X("width"),height:X("height"),heightReference:X("heightReference"),extrudedHeight:X("extrudedHeight"),extrudedHeightReference:X("extrudedHeightReference"),cornerType:X("cornerType"),granularity:X("granularity"),fill:X("fill"),material:Tl("material"),outline:X("outline"),outlineColor:X("outlineColor"),outlineWidth:X("outlineWidth"),shadows:X("shadows"),distanceDisplayCondition:X("distanceDisplayCondition"),classificationType:X("classificationType"),zIndex:X("zIndex")});HA.prototype.clone=function(V){return s(V)?(V.show=this.show,V.positions=this.positions,V.width=this.width,V.height=this.height,V.heightReference=this.heightReference,V.extrudedHeight=this.extrudedHeight,V.extrudedHeightReference=this.extrudedHeightReference,V.cornerType=this.cornerType,V.granularity=this.granularity,V.fill=this.fill,V.material=this.material,V.outline=this.outline,V.outlineColor=this.outlineColor,V.outlineWidth=this.outlineWidth,V.shadows=this.shadows,V.distanceDisplayCondition=this.distanceDisplayCondition,V.classificationType=this.classificationType,V.zIndex=this.zIndex,V):new HA(this)};HA.prototype.merge=function(V){if(!s(V))throw new I("source is required.");this.show=a(this.show,V.show),this.positions=a(this.positions,V.positions),this.width=a(this.width,V.width),this.height=a(this.height,V.height),this.heightReference=a(this.heightReference,V.heightReference),this.extrudedHeight=a(this.extrudedHeight,V.extrudedHeight),this.extrudedHeightReference=a(this.extrudedHeightReference,V.extrudedHeightReference),this.cornerType=a(this.cornerType,V.cornerType),this.granularity=a(this.granularity,V.granularity),this.fill=a(this.fill,V.fill),this.material=a(this.material,V.material),this.outline=a(this.outline,V.outline),this.outlineColor=a(this.outlineColor,V.outlineColor),this.outlineWidth=a(this.outlineWidth,V.outlineWidth),this.shadows=a(this.shadows,V.shadows),this.distanceDisplayCondition=a(this.distanceDisplayCondition,V.distanceDisplayCondition),this.classificationType=a(this.classificationType,V.classificationType),this.zIndex=a(this.zIndex,V.zIndex)};var Ch=HA;function Bc(V){return V}function Fc(V,l){return X(V,l,Bc)}var Ge=Fc;function LA(V){this._definitionChanged=new dV,this._show=void 0,this._showSubscription=void 0,this._length=void 0,this._lengthSubscription=void 0,this._topRadius=void 0,this._topRadiusSubscription=void 0,this._bottomRadius=void 0,this._bottomRadiusSubscription=void 0,this._heightReference=void 0,this._heightReferenceSubscription=void 0,this._fill=void 0,this._fillSubscription=void 0,this._material=void 0,this._materialSubscription=void 0,this._outline=void 0,this._outlineSubscription=void 0,this._outlineColor=void 0,this._outlineColorSubscription=void 0,this._outlineWidth=void 0,this._outlineWidthSubscription=void 0,this._numberOfVerticalLines=void 0,this._numberOfVerticalLinesSubscription=void 0,this._slices=void 0,this._slicesSubscription=void 0,this._shadows=void 0,this._shadowsSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this.merge(a(V,a.EMPTY_OBJECT))}Object.defineProperties(LA.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:X("show"),length:X("length"),topRadius:X("topRadius"),bottomRadius:X("bottomRadius"),heightReference:X("heightReference"),fill:X("fill"),material:Tl("material"),outline:X("outline"),outlineColor:X("outlineColor"),outlineWidth:X("outlineWidth"),numberOfVerticalLines:X("numberOfVerticalLines"),slices:X("slices"),shadows:X("shadows"),distanceDisplayCondition:X("distanceDisplayCondition")});LA.prototype.clone=function(V){return s(V)?(V.show=this.show,V.length=this.length,V.topRadius=this.topRadius,V.bottomRadius=this.bottomRadius,V.heightReference=this.heightReference,V.fill=this.fill,V.material=this.material,V.outline=this.outline,V.outlineColor=this.outlineColor,V.outlineWidth=this.outlineWidth,V.numberOfVerticalLines=this.numberOfVerticalLines,V.slices=this.slices,V.shadows=this.shadows,V.distanceDisplayCondition=this.distanceDisplayCondition,V):new LA(this)};LA.prototype.merge=function(V){if(!s(V))throw new I("source is required.");this.show=a(this.show,V.show),this.length=a(this.length,V.length),this.topRadius=a(this.topRadius,V.topRadius),this.bottomRadius=a(this.bottomRadius,V.bottomRadius),this.heightReference=a(this.heightReference,V.heightReference),this.fill=a(this.fill,V.fill),this.material=a(this.material,V.material),this.outline=a(this.outline,V.outline),this.outlineColor=a(this.outlineColor,V.outlineColor),this.outlineWidth=a(this.outlineWidth,V.outlineWidth),this.numberOfVerticalLines=a(this.numberOfVerticalLines,V.numberOfVerticalLines),this.slices=a(this.slices,V.slices),this.shadows=a(this.shadows,V.shadows),this.distanceDisplayCondition=a(this.distanceDisplayCondition,V.distanceDisplayCondition)};var gh=LA;function KA(V){this._definitionChanged=new dV,this._show=void 0,this._showSubscription=void 0,this._semiMajorAxis=void 0,this._semiMajorAxisSubscription=void 0,this._semiMinorAxis=void 0,this._semiMinorAxisSubscription=void 0,this._height=void 0,this._heightSubscription=void 0,this._heightReference=void 0,this._heightReferenceSubscription=void 0,this._extrudedHeight=void 0,this._extrudedHeightSubscription=void 0,this._extrudedHeightReference=void 0,this._extrudedHeightReferenceSubscription=void 0,this._rotation=void 0,this._rotationSubscription=void 0,this._stRotation=void 0,this._stRotationSubscription=void 0,this._granularity=void 0,this._granularitySubscription=void 0,this._fill=void 0,this._fillSubscription=void 0,this._material=void 0,this._materialSubscription=void 0,this._outline=void 0,this._outlineSubscription=void 0,this._outlineColor=void 0,this._outlineColorSubscription=void 0,this._outlineWidth=void 0,this._outlineWidthSubscription=void 0,this._numberOfVerticalLines=void 0,this._numberOfVerticalLinesSubscription=void 0,this._shadows=void 0,this._shadowsSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this._classificationType=void 0,this._classificationTypeSubscription=void 0,this._zIndex=void 0,this._zIndexSubscription=void 0,this.merge(a(V,a.EMPTY_OBJECT))}Object.defineProperties(KA.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:X("show"),semiMajorAxis:X("semiMajorAxis"),semiMinorAxis:X("semiMinorAxis"),height:X("height"),heightReference:X("heightReference"),extrudedHeight:X("extrudedHeight"),extrudedHeightReference:X("extrudedHeightReference"),rotation:X("rotation"),stRotation:X("stRotation"),granularity:X("granularity"),fill:X("fill"),material:Tl("material"),outline:X("outline"),outlineColor:X("outlineColor"),outlineWidth:X("outlineWidth"),numberOfVerticalLines:X("numberOfVerticalLines"),shadows:X("shadows"),distanceDisplayCondition:X("distanceDisplayCondition"),classificationType:X("classificationType"),zIndex:X("zIndex")});KA.prototype.clone=function(V){return s(V)?(V.show=this.show,V.semiMajorAxis=this.semiMajorAxis,V.semiMinorAxis=this.semiMinorAxis,V.height=this.height,V.heightReference=this.heightReference,V.extrudedHeight=this.extrudedHeight,V.extrudedHeightReference=this.extrudedHeightReference,V.rotation=this.rotation,V.stRotation=this.stRotation,V.granularity=this.granularity,V.fill=this.fill,V.material=this.material,V.outline=this.outline,V.outlineColor=this.outlineColor,V.outlineWidth=this.outlineWidth,V.numberOfVerticalLines=this.numberOfVerticalLines,V.shadows=this.shadows,V.distanceDisplayCondition=this.distanceDisplayCondition,V.classificationType=this.classificationType,V.zIndex=this.zIndex,V):new KA(this)};KA.prototype.merge=function(V){if(!s(V))throw new I("source is required.");this.show=a(this.show,V.show),this.semiMajorAxis=a(this.semiMajorAxis,V.semiMajorAxis),this.semiMinorAxis=a(this.semiMinorAxis,V.semiMinorAxis),this.height=a(this.height,V.height),this.heightReference=a(this.heightReference,V.heightReference),this.extrudedHeight=a(this.extrudedHeight,V.extrudedHeight),this.extrudedHeightReference=a(this.extrudedHeightReference,V.extrudedHeightReference),this.rotation=a(this.rotation,V.rotation),this.stRotation=a(this.stRotation,V.stRotation),this.granularity=a(this.granularity,V.granularity),this.fill=a(this.fill,V.fill),this.material=a(this.material,V.material),this.outline=a(this.outline,V.outline),this.outlineColor=a(this.outlineColor,V.outlineColor),this.outlineWidth=a(this.outlineWidth,V.outlineWidth),this.numberOfVerticalLines=a(this.numberOfVerticalLines,V.numberOfVerticalLines),this.shadows=a(this.shadows,V.shadows),this.distanceDisplayCondition=a(this.distanceDisplayCondition,V.distanceDisplayCondition),this.classificationType=a(this.classificationType,V.classificationType),this.zIndex=a(this.zIndex,V.zIndex)};var Nh=KA;function PA(V){this._definitionChanged=new dV,this._show=void 0,this._showSubscription=void 0,this._radii=void 0,this._radiiSubscription=void 0,this._innerRadii=void 0,this._innerRadiiSubscription=void 0,this._minimumClock=void 0,this._minimumClockSubscription=void 0,this._maximumClock=void 0,this._maximumClockSubscription=void 0,this._minimumCone=void 0,this._minimumConeSubscription=void 0,this._maximumCone=void 0,this._maximumConeSubscription=void 0,this._heightReference=void 0,this._heightReferenceSubscription=void 0,this._fill=void 0,this._fillSubscription=void 0,this._material=void 0,this._materialSubscription=void 0,this._outline=void 0,this._outlineSubscription=void 0,this._outlineColor=void 0,this._outlineColorSubscription=void 0,this._outlineWidth=void 0,this._outlineWidthSubscription=void 0,this._stackPartitions=void 0,this._stackPartitionsSubscription=void 0,this._slicePartitions=void 0,this._slicePartitionsSubscription=void 0,this._subdivisions=void 0,this._subdivisionsSubscription=void 0,this._shadows=void 0,this._shadowsSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this.merge(a(V,a.EMPTY_OBJECT))}Object.defineProperties(PA.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:X("show"),radii:X("radii"),innerRadii:X("innerRadii"),minimumClock:X("minimumClock"),maximumClock:X("maximumClock"),minimumCone:X("minimumCone"),maximumCone:X("maximumCone"),heightReference:X("heightReference"),fill:X("fill"),material:Tl("material"),outline:X("outline"),outlineColor:X("outlineColor"),outlineWidth:X("outlineWidth"),stackPartitions:X("stackPartitions"),slicePartitions:X("slicePartitions"),subdivisions:X("subdivisions"),shadows:X("shadows"),distanceDisplayCondition:X("distanceDisplayCondition")});PA.prototype.clone=function(V){return s(V)?(V.show=this.show,V.radii=this.radii,V.innerRadii=this.innerRadii,V.minimumClock=this.minimumClock,V.maximumClock=this.maximumClock,V.minimumCone=this.minimumCone,V.maximumCone=this.maximumCone,V.heightReference=this.heightReference,V.fill=this.fill,V.material=this.material,V.outline=this.outline,V.outlineColor=this.outlineColor,V.outlineWidth=this.outlineWidth,V.stackPartitions=this.stackPartitions,V.slicePartitions=this.slicePartitions,V.subdivisions=this.subdivisions,V.shadows=this.shadows,V.distanceDisplayCondition=this.distanceDisplayCondition,V):new PA(this)};PA.prototype.merge=function(V){if(!s(V))throw new I("source is required.");this.show=a(this.show,V.show),this.radii=a(this.radii,V.radii),this.innerRadii=a(this.innerRadii,V.innerRadii),this.minimumClock=a(this.minimumClock,V.minimumClock),this.maximumClock=a(this.maximumClock,V.maximumClock),this.minimumCone=a(this.minimumCone,V.minimumCone),this.maximumCone=a(this.maximumCone,V.maximumCone),this.heightReference=a(this.heightReference,V.heightReference),this.fill=a(this.fill,V.fill),this.material=a(this.material,V.material),this.outline=a(this.outline,V.outline),this.outlineColor=a(this.outlineColor,V.outlineColor),this.outlineWidth=a(this.outlineWidth,V.outlineWidth),this.stackPartitions=a(this.stackPartitions,V.stackPartitions),this.slicePartitions=a(this.slicePartitions,V.slicePartitions),this.subdivisions=a(this.subdivisions,V.subdivisions),this.shadows=a(this.shadows,V.shadows),this.distanceDisplayCondition=a(this.distanceDisplayCondition,V.distanceDisplayCondition)};var Eh=PA;function jA(V){this._definitionChanged=new dV,this._show=void 0,this._showSubscription=void 0,this._text=void 0,this._textSubscription=void 0,this._font=void 0,this._fontSubscription=void 0,this._style=void 0,this._styleSubscription=void 0,this._scale=void 0,this._scaleSubscription=void 0,this._showBackground=void 0,this._showBackgroundSubscription=void 0,this._backgroundColor=void 0,this._backgroundColorSubscription=void 0,this._backgroundPadding=void 0,this._backgroundPaddingSubscription=void 0,this._pixelOffset=void 0,this._pixelOffsetSubscription=void 0,this._eyeOffset=void 0,this._eyeOffsetSubscription=void 0,this._horizontalOrigin=void 0,this._horizontalOriginSubscription=void 0,this._verticalOrigin=void 0,this._verticalOriginSubscription=void 0,this._heightReference=void 0,this._heightReferenceSubscription=void 0,this._fillColor=void 0,this._fillColorSubscription=void 0,this._outlineColor=void 0,this._outlineColorSubscription=void 0,this._outlineWidth=void 0,this._outlineWidthSubscription=void 0,this._translucencyByDistance=void 0,this._translucencyByDistanceSubscription=void 0,this._pixelOffsetScaleByDistance=void 0,this._pixelOffsetScaleByDistanceSubscription=void 0,this._scaleByDistance=void 0,this._scaleByDistanceSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this._disableDepthTestDistance=void 0,this._disableDepthTestDistanceSubscription=void 0,this.merge(a(V,a.EMPTY_OBJECT))}Object.defineProperties(jA.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:X("show"),text:X("text"),font:X("font"),style:X("style"),scale:X("scale"),showBackground:X("showBackground"),backgroundColor:X("backgroundColor"),backgroundPadding:X("backgroundPadding"),pixelOffset:X("pixelOffset"),eyeOffset:X("eyeOffset"),horizontalOrigin:X("horizontalOrigin"),verticalOrigin:X("verticalOrigin"),heightReference:X("heightReference"),fillColor:X("fillColor"),outlineColor:X("outlineColor"),outlineWidth:X("outlineWidth"),translucencyByDistance:X("translucencyByDistance"),pixelOffsetScaleByDistance:X("pixelOffsetScaleByDistance"),scaleByDistance:X("scaleByDistance"),distanceDisplayCondition:X("distanceDisplayCondition"),disableDepthTestDistance:X("disableDepthTestDistance")});jA.prototype.clone=function(V){return s(V)?(V.show=this.show,V.text=this.text,V.font=this.font,V.style=this.style,V.scale=this.scale,V.showBackground=this.showBackground,V.backgroundColor=this.backgroundColor,V.backgroundPadding=this.backgroundPadding,V.pixelOffset=this.pixelOffset,V.eyeOffset=this.eyeOffset,V.horizontalOrigin=this.horizontalOrigin,V.verticalOrigin=this.verticalOrigin,V.heightReference=this.heightReference,V.fillColor=this.fillColor,V.outlineColor=this.outlineColor,V.outlineWidth=this.outlineWidth,V.translucencyByDistance=this.translucencyByDistance,V.pixelOffsetScaleByDistance=this.pixelOffsetScaleByDistance,V.scaleByDistance=this.scaleByDistance,V.distanceDisplayCondition=this.distanceDisplayCondition,V.disableDepthTestDistance=this.disableDepthTestDistance,V):new jA(this)};jA.prototype.merge=function(V){if(!s(V))throw new I("source is required.");this.show=a(this.show,V.show),this.text=a(this.text,V.text),this.font=a(this.font,V.font),this.style=a(this.style,V.style),this.scale=a(this.scale,V.scale),this.showBackground=a(this.showBackground,V.showBackground),this.backgroundColor=a(this.backgroundColor,V.backgroundColor),this.backgroundPadding=a(this.backgroundPadding,V.backgroundPadding),this.pixelOffset=a(this.pixelOffset,V.pixelOffset),this.eyeOffset=a(this.eyeOffset,V.eyeOffset),this.horizontalOrigin=a(this.horizontalOrigin,V.horizontalOrigin),this.verticalOrigin=a(this.verticalOrigin,V.verticalOrigin),this.heightReference=a(this.heightReference,V.heightReference),this.fillColor=a(this.fillColor,V.fillColor),this.outlineColor=a(this.outlineColor,V.outlineColor),this.outlineWidth=a(this.outlineWidth,V.outlineWidth),this.translucencyByDistance=a(this.translucencyByDistance,V.translucencyByDistance),this.pixelOffsetScaleByDistance=a(this.pixelOffsetScaleByDistance,V.pixelOffsetScaleByDistance),this.scaleByDistance=a(this.scaleByDistance,V.scaleByDistance),this.distanceDisplayCondition=a(this.distanceDisplayCondition,V.distanceDisplayCondition),this.disableDepthTestDistance=a(this.disableDepthTestDistance,V.disableDepthTestDistance)};var ph=jA;var Qc=new w(1,1,1),Ic=w.ZERO,cc=kl.IDENTITY;function Xh(V,l,Z){this.translation=w.clone(a(V,Ic)),this.rotation=kl.clone(a(l,cc)),this.scale=w.clone(a(Z,Qc))}Xh.prototype.equals=function(V){return this===V||s(V)&&w.equals(this.translation,V.translation)&&kl.equals(this.rotation,V.rotation)&&w.equals(this.scale,V.scale)};var _m=Xh;var Om=new _m;function qA(V){V=a(V,a.EMPTY_OBJECT),this._definitionChanged=new dV,this._translation=void 0,this._translationSubscription=void 0,this._rotation=void 0,this._rotationSubscription=void 0,this._scale=void 0,this._scaleSubscription=void 0,this.translation=V.translation,this.rotation=V.rotation,this.scale=V.scale}Object.defineProperties(qA.prototype,{isConstant:{get:function(){return YV.isConstant(this._translation)&&YV.isConstant(this._rotation)&&YV.isConstant(this._scale)}},definitionChanged:{get:function(){return this._definitionChanged}},translation:X("translation"),rotation:X("rotation"),scale:X("scale")});qA.prototype.getValue=function(V,l){return s(l)||(l=new _m),l.translation=YV.getValueOrClonedDefault(this._translation,V,Om.translation,l.translation),l.rotation=YV.getValueOrClonedDefault(this._rotation,V,Om.rotation,l.rotation),l.scale=YV.getValueOrClonedDefault(this._scale,V,Om.scale,l.scale),l};qA.prototype.equals=function(V){return this===V||V instanceof qA&&YV.equals(this._translation,V._translation)&&YV.equals(this._rotation,V._rotation)&&YV.equals(this._scale,V._scale)};var fh=qA;function OW(V,l){this._propertyNames=[],this._definitionChanged=new dV,s(V)&&this.merge(V,l)}Object.defineProperties(OW.prototype,{propertyNames:{get:function(){return this._propertyNames}},isConstant:{get:function(){let V=this._propertyNames;for(let l=0,Z=V.length;l<Z;l++)if(!YV.isConstant(this[V[l]]))return!1;return!0}},definitionChanged:{get:function(){return this._definitionChanged}}});OW.prototype.hasProperty=function(V){return this._propertyNames.indexOf(V)!==-1};function Sc(V){return new _W(V)}OW.prototype.addProperty=function(V,l,Z){let U=this._propertyNames;if(!s(V))throw new I("propertyName is required.");if(U.indexOf(V)!==-1)throw new I(`${V} is already a registered property.`);U.push(V),Object.defineProperty(this,V,X(V,!0,a(Z,Sc))),s(l)&&(this[V]=l),this._definitionChanged.raiseEvent(this)};OW.prototype.removeProperty=function(V){let Z=this._propertyNames.indexOf(V);if(!s(V))throw new I("propertyName is required.");if(Z===-1)throw new I(`${V} is not a registered property.`);this._propertyNames.splice(Z,1),delete this[V],this._definitionChanged.raiseEvent(this)};OW.prototype.getValue=function(V,l){if(!s(V))throw new I("time is required.");s(l)||(l={});let Z=this._propertyNames;for(let U=0,A=Z.length;U<A;U++){let t=Z[U];l[t]=YV.getValueOrUndefined(this[t],V,l[t])}return l};OW.prototype.merge=function(V,l){if(!s(V))throw new I("source is required.");let Z=this._propertyNames,U=s(V._propertyNames)?V._propertyNames:Object.keys(V);for(let A=0,t=U.length;A<t;A++){let m=U[A],i=this[m],n=V[m];i===void 0&&Z.indexOf(m)===-1&&this.addProperty(m,void 0,l),n!==void 0&&(i!==void 0?s(i)&&s(i.merge)&&i.merge(n):s(n)&&s(n.merge)&&s(n.clone)?this[m]=n.clone():this[m]=n)}};function Cc(V,l){let Z=V._propertyNames,U=l._propertyNames,A=Z.length;if(A!==U.length)return!1;for(let t=0;t<A;++t){let m=Z[t];if(U.indexOf(m)===-1||!YV.equals(V[m],l[m]))return!1}return!0}OW.prototype.equals=function(V){return this===V||V instanceof OW&&Cc(this,V)};var pU=OW;function bh(V){return new fh(V)}function gc(V){return new pU(V,bh)}function Nc(V){return new pU(V)}function $A(V){this._definitionChanged=new dV,this._show=void 0,this._showSubscription=void 0,this._uri=void 0,this._uriSubscription=void 0,this._scale=void 0,this._scaleSubscription=void 0,this._minimumPixelSize=void 0,this._minimumPixelSizeSubscription=void 0,this._maximumScale=void 0,this._maximumScaleSubscription=void 0,this._incrementallyLoadTextures=void 0,this._incrementallyLoadTexturesSubscription=void 0,this._runAnimations=void 0,this._runAnimationsSubscription=void 0,this._clampAnimations=void 0,this._clampAnimationsSubscription=void 0,this._shadows=void 0,this._shadowsSubscription=void 0,this._heightReference=void 0,this._heightReferenceSubscription=void 0,this._silhouetteColor=void 0,this._silhouetteColorSubscription=void 0,this._silhouetteSize=void 0,this._silhouetteSizeSubscription=void 0,this._color=void 0,this._colorSubscription=void 0,this._colorBlendMode=void 0,this._colorBlendModeSubscription=void 0,this._colorBlendAmount=void 0,this._colorBlendAmountSubscription=void 0,this._imageBasedLightingFactor=void 0,this._imageBasedLightingFactorSubscription=void 0,this._lightColor=void 0,this._lightColorSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this._nodeTransformations=void 0,this._nodeTransformationsSubscription=void 0,this._articulations=void 0,this._articulationsSubscription=void 0,this._clippingPlanes=void 0,this._clippingPlanesSubscription=void 0,this._customShader=void 0,this._customShaderSubscription=void 0,this.merge(a(V,a.EMPTY_OBJECT))}Object.defineProperties($A.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:X("show"),uri:X("uri"),scale:X("scale"),minimumPixelSize:X("minimumPixelSize"),maximumScale:X("maximumScale"),incrementallyLoadTextures:X("incrementallyLoadTextures"),runAnimations:X("runAnimations"),clampAnimations:X("clampAnimations"),shadows:X("shadows"),heightReference:X("heightReference"),silhouetteColor:X("silhouetteColor"),silhouetteSize:X("silhouetteSize"),color:X("color"),colorBlendMode:X("colorBlendMode"),colorBlendAmount:X("colorBlendAmount"),imageBasedLightingFactor:X("imageBasedLightingFactor"),lightColor:X("lightColor"),distanceDisplayCondition:X("distanceDisplayCondition"),nodeTransformations:X("nodeTransformations",void 0,gc),articulations:X("articulations",void 0,Nc),clippingPlanes:X("clippingPlanes"),customShader:X("customShader")});$A.prototype.clone=function(V){return s(V)?(V.show=this.show,V.uri=this.uri,V.scale=this.scale,V.minimumPixelSize=this.minimumPixelSize,V.maximumScale=this.maximumScale,V.incrementallyLoadTextures=this.incrementallyLoadTextures,V.runAnimations=this.runAnimations,V.clampAnimations=this.clampAnimations,V.heightReference=this._heightReference,V.silhouetteColor=this.silhouetteColor,V.silhouetteSize=this.silhouetteSize,V.color=this.color,V.colorBlendMode=this.colorBlendMode,V.colorBlendAmount=this.colorBlendAmount,V.imageBasedLightingFactor=this.imageBasedLightingFactor,V.lightColor=this.lightColor,V.distanceDisplayCondition=this.distanceDisplayCondition,V.nodeTransformations=this.nodeTransformations,V.articulations=this.articulations,V.clippingPlanes=this.clippingPlanes,V.customShader=this.customShader,V):new $A(this)};$A.prototype.merge=function(V){if(!s(V))throw new I("source is required.");this.show=a(this.show,V.show),this.uri=a(this.uri,V.uri),this.scale=a(this.scale,V.scale),this.minimumPixelSize=a(this.minimumPixelSize,V.minimumPixelSize),this.maximumScale=a(this.maximumScale,V.maximumScale),this.incrementallyLoadTextures=a(this.incrementallyLoadTextures,V.incrementallyLoadTextures),this.runAnimations=a(this.runAnimations,V.runAnimations),this.clampAnimations=a(this.clampAnimations,V.clampAnimations),this.shadows=a(this.shadows,V.shadows),this.heightReference=a(this.heightReference,V.heightReference),this.silhouetteColor=a(this.silhouetteColor,V.silhouetteColor),this.silhouetteSize=a(this.silhouetteSize,V.silhouetteSize),this.color=a(this.color,V.color),this.colorBlendMode=a(this.colorBlendMode,V.colorBlendMode),this.colorBlendAmount=a(this.colorBlendAmount,V.colorBlendAmount),this.imageBasedLightingFactor=a(this.imageBasedLightingFactor,V.imageBasedLightingFactor),this.lightColor=a(this.lightColor,V.lightColor),this.distanceDisplayCondition=a(this.distanceDisplayCondition,V.distanceDisplayCondition),this.clippingPlanes=a(this.clippingPlanes,V.clippingPlanes),this.customShader=a(this.customShader,V.customShader);let l=V.nodeTransformations;if(s(l)){let U=this.nodeTransformations;s(U)?U.merge(l):this.nodeTransformations=new pU(l,bh)}let Z=V.articulations;if(s(Z)){let U=this.articulations;s(U)?U.merge(Z):this.articulations=new pU(Z)}};var uh=$A;function Vt(V){this._definitionChanged=new dV,this._show=void 0,this._showSubscription=void 0,this._uri=void 0,this._uriSubscription=void 0,this._maximumScreenSpaceError=void 0,this._maximumScreenSpaceErrorSubscription=void 0,this.merge(a(V,a.EMPTY_OBJECT))}Object.defineProperties(Vt.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:X("show"),uri:X("uri"),maximumScreenSpaceError:X("maximumScreenSpaceError")});Vt.prototype.clone=function(V){return s(V)?(V.show=this.show,V.uri=this.uri,V.maximumScreenSpaceError=this.maximumScreenSpaceError,V):new Vt(this)};Vt.prototype.merge=function(V){if(!s(V))throw new I("source is required.");this.show=a(this.show,V.show),this.uri=a(this.uri,V.uri),this.maximumScreenSpaceError=a(this.maximumScreenSpaceError,V.maximumScreenSpaceError)};var Jh=Vt;function lt(V){this._definitionChanged=new dV,this._show=void 0,this._showSubscription=void 0,this._leadTime=void 0,this._leadTimeSubscription=void 0,this._trailTime=void 0,this._trailTimeSubscription=void 0,this._width=void 0,this._widthSubscription=void 0,this._resolution=void 0,this._resolutionSubscription=void 0,this._material=void 0,this._materialSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this.merge(a(V,a.EMPTY_OBJECT))}Object.defineProperties(lt.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:X("show"),leadTime:X("leadTime"),trailTime:X("trailTime"),width:X("width"),resolution:X("resolution"),material:Tl("material"),distanceDisplayCondition:X("distanceDisplayCondition")});lt.prototype.clone=function(V){return s(V)?(V.show=this.show,V.leadTime=this.leadTime,V.trailTime=this.trailTime,V.width=this.width,V.resolution=this.resolution,V.material=this.material,V.distanceDisplayCondition=this.distanceDisplayCondition,V):new lt(this)};lt.prototype.merge=function(V){if(!s(V))throw new I("source is required.");this.show=a(this.show,V.show),this.leadTime=a(this.leadTime,V.leadTime),this.trailTime=a(this.trailTime,V.trailTime),this.width=a(this.width,V.width),this.resolution=a(this.resolution,V.resolution),this.material=a(this.material,V.material),this.distanceDisplayCondition=a(this.distanceDisplayCondition,V.distanceDisplayCondition)};var xh=lt;function Zt(V){this._definitionChanged=new dV,this._show=void 0,this._showSubscription=void 0,this._plane=void 0,this._planeSubscription=void 0,this._dimensions=void 0,this._dimensionsSubscription=void 0,this._fill=void 0,this._fillSubscription=void 0,this._material=void 0,this._materialSubscription=void 0,this._outline=void 0,this._outlineSubscription=void 0,this._outlineColor=void 0,this._outlineColorSubscription=void 0,this._outlineWidth=void 0,this._outlineWidthSubscription=void 0,this._shadows=void 0,this._shadowsSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this.merge(a(V,a.EMPTY_OBJECT))}Object.defineProperties(Zt.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:X("show"),plane:X("plane"),dimensions:X("dimensions"),fill:X("fill"),material:Tl("material"),outline:X("outline"),outlineColor:X("outlineColor"),outlineWidth:X("outlineWidth"),shadows:X("shadows"),distanceDisplayCondition:X("distanceDisplayCondition")});Zt.prototype.clone=function(V){return s(V)?(V.show=this.show,V.plane=this.plane,V.dimensions=this.dimensions,V.fill=this.fill,V.material=this.material,V.outline=this.outline,V.outlineColor=this.outlineColor,V.outlineWidth=this.outlineWidth,V.shadows=this.shadows,V.distanceDisplayCondition=this.distanceDisplayCondition,V):new Zt(this)};Zt.prototype.merge=function(V){if(!s(V))throw new I("source is required.");this.show=a(this.show,V.show),this.plane=a(this.plane,V.plane),this.dimensions=a(this.dimensions,V.dimensions),this.fill=a(this.fill,V.fill),this.material=a(this.material,V.material),this.outline=a(this.outline,V.outline),this.outlineColor=a(this.outlineColor,V.outlineColor),this.outlineWidth=a(this.outlineWidth,V.outlineWidth),this.shadows=a(this.shadows,V.shadows),this.distanceDisplayCondition=a(this.distanceDisplayCondition,V.distanceDisplayCondition)};var Dh=Zt;function Wt(V){this._definitionChanged=new dV,this._show=void 0,this._showSubscription=void 0,this._pixelSize=void 0,this._pixelSizeSubscription=void 0,this._heightReference=void 0,this._heightReferenceSubscription=void 0,this._color=void 0,this._colorSubscription=void 0,this._outlineColor=void 0,this._outlineColorSubscription=void 0,this._outlineWidth=void 0,this._outlineWidthSubscription=void 0,this._scaleByDistance=void 0,this._scaleByDistanceSubscription=void 0,this._translucencyByDistance=void 0,this._translucencyByDistanceSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this._disableDepthTestDistance=void 0,this._disableDepthTestDistanceSubscription=void 0,this.merge(a(V,a.EMPTY_OBJECT))}Object.defineProperties(Wt.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:X("show"),pixelSize:X("pixelSize"),heightReference:X("heightReference"),color:X("color"),outlineColor:X("outlineColor"),outlineWidth:X("outlineWidth"),scaleByDistance:X("scaleByDistance"),translucencyByDistance:X("translucencyByDistance"),distanceDisplayCondition:X("distanceDisplayCondition"),disableDepthTestDistance:X("disableDepthTestDistance")});Wt.prototype.clone=function(V){return s(V)?(V.show=this.show,V.pixelSize=this.pixelSize,V.heightReference=this.heightReference,V.color=this.color,V.outlineColor=this.outlineColor,V.outlineWidth=this.outlineWidth,V.scaleByDistance=this.scaleByDistance,V.translucencyByDistance=this._translucencyByDistance,V.distanceDisplayCondition=this.distanceDisplayCondition,V.disableDepthTestDistance=this.disableDepthTestDistance,V):new Wt(this)};Wt.prototype.merge=function(V){if(!s(V))throw new I("source is required.");this.show=a(this.show,V.show),this.pixelSize=a(this.pixelSize,V.pixelSize),this.heightReference=a(this.heightReference,V.heightReference),this.color=a(this.color,V.color),this.outlineColor=a(this.outlineColor,V.outlineColor),this.outlineWidth=a(this.outlineWidth,V.outlineWidth),this.scaleByDistance=a(this.scaleByDistance,V.scaleByDistance),this.translucencyByDistance=a(this._translucencyByDistance,V.translucencyByDistance),this.distanceDisplayCondition=a(this.distanceDisplayCondition,V.distanceDisplayCondition),this.disableDepthTestDistance=a(this.disableDepthTestDistance,V.disableDepthTestDistance)};var Mh=Wt;function Ec(V){return Array.isArray(V)&&(V=new ut(V)),new _W(V)}function Ut(V){this._definitionChanged=new dV,this._show=void 0,this._showSubscription=void 0,this._hierarchy=void 0,this._hierarchySubscription=void 0,this._height=void 0,this._heightSubscription=void 0,this._heightReference=void 0,this._heightReferenceSubscription=void 0,this._extrudedHeight=void 0,this._extrudedHeightSubscription=void 0,this._extrudedHeightReference=void 0,this._extrudedHeightReferenceSubscription=void 0,this._stRotation=void 0,this._stRotationSubscription=void 0,this._granularity=void 0,this._granularitySubscription=void 0,this._fill=void 0,this._fillSubscription=void 0,this._material=void 0,this._materialSubscription=void 0,this._outline=void 0,this._outlineSubscription=void 0,this._outlineColor=void 0,this._outlineColorSubscription=void 0,this._outlineWidth=void 0,this._outlineWidthSubscription=void 0,this._perPositionHeight=void 0,this._perPositionHeightSubscription=void 0,this._closeTop=void 0,this._closeTopSubscription=void 0,this._closeBottom=void 0,this._closeBottomSubscription=void 0,this._arcType=void 0,this._arcTypeSubscription=void 0,this._shadows=void 0,this._shadowsSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this._classificationType=void 0,this._classificationTypeSubscription=void 0,this._zIndex=void 0,this._zIndexSubscription=void 0,this._textureCoordinates=void 0,this._textureCoordinatesSubscription=void 0,this.merge(a(V,a.EMPTY_OBJECT))}Object.defineProperties(Ut.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:X("show"),hierarchy:X("hierarchy",void 0,Ec),height:X("height"),heightReference:X("heightReference"),extrudedHeight:X("extrudedHeight"),extrudedHeightReference:X("extrudedHeightReference"),stRotation:X("stRotation"),granularity:X("granularity"),fill:X("fill"),material:Tl("material"),outline:X("outline"),outlineColor:X("outlineColor"),outlineWidth:X("outlineWidth"),perPositionHeight:X("perPositionHeight"),closeTop:X("closeTop"),closeBottom:X("closeBottom"),arcType:X("arcType"),shadows:X("shadows"),distanceDisplayCondition:X("distanceDisplayCondition"),classificationType:X("classificationType"),zIndex:X("zIndex"),textureCoordinates:X("textureCoordinates")});Ut.prototype.clone=function(V){return s(V)?(V.show=this.show,V.hierarchy=this.hierarchy,V.height=this.height,V.heightReference=this.heightReference,V.extrudedHeight=this.extrudedHeight,V.extrudedHeightReference=this.extrudedHeightReference,V.stRotation=this.stRotation,V.granularity=this.granularity,V.fill=this.fill,V.material=this.material,V.outline=this.outline,V.outlineColor=this.outlineColor,V.outlineWidth=this.outlineWidth,V.perPositionHeight=this.perPositionHeight,V.closeTop=this.closeTop,V.closeBottom=this.closeBottom,V.arcType=this.arcType,V.shadows=this.shadows,V.distanceDisplayCondition=this.distanceDisplayCondition,V.classificationType=this.classificationType,V.zIndex=this.zIndex,V.textureCoordinates=this.textureCoordinates,V):new Ut(this)};Ut.prototype.merge=function(V){if(!s(V))throw new I("source is required.");this.show=a(this.show,V.show),this.hierarchy=a(this.hierarchy,V.hierarchy),this.height=a(this.height,V.height),this.heightReference=a(this.heightReference,V.heightReference),this.extrudedHeight=a(this.extrudedHeight,V.extrudedHeight),this.extrudedHeightReference=a(this.extrudedHeightReference,V.extrudedHeightReference),this.stRotation=a(this.stRotation,V.stRotation),this.granularity=a(this.granularity,V.granularity),this.fill=a(this.fill,V.fill),this.material=a(this.material,V.material),this.outline=a(this.outline,V.outline),this.outlineColor=a(this.outlineColor,V.outlineColor),this.outlineWidth=a(this.outlineWidth,V.outlineWidth),this.perPositionHeight=a(this.perPositionHeight,V.perPositionHeight),this.closeTop=a(this.closeTop,V.closeTop),this.closeBottom=a(this.closeBottom,V.closeBottom),this.arcType=a(this.arcType,V.arcType),this.shadows=a(this.shadows,V.shadows),this.distanceDisplayCondition=a(this.distanceDisplayCondition,V.distanceDisplayCondition),this.classificationType=a(this.classificationType,V.classificationType),this.zIndex=a(this.zIndex,V.zIndex),this.textureCoordinates=a(this.textureCoordinates,V.textureCoordinates)};var _h=Ut;function At(V){this._definitionChanged=new dV,this._show=void 0,this._showSubscription=void 0,this._positions=void 0,this._positionsSubscription=void 0,this._width=void 0,this._widthSubscription=void 0,this._granularity=void 0,this._granularitySubscription=void 0,this._material=void 0,this._materialSubscription=void 0,this._depthFailMaterial=void 0,this._depthFailMaterialSubscription=void 0,this._arcType=void 0,this._arcTypeSubscription=void 0,this._clampToGround=void 0,this._clampToGroundSubscription=void 0,this._shadows=void 0,this._shadowsSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this._classificationType=void 0,this._classificationTypeSubscription=void 0,this._zIndex=void 0,this._zIndexSubscription=void 0,this.merge(a(V,a.EMPTY_OBJECT))}Object.defineProperties(At.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:X("show"),positions:X("positions"),width:X("width"),granularity:X("granularity"),material:Tl("material"),depthFailMaterial:Tl("depthFailMaterial"),arcType:X("arcType"),clampToGround:X("clampToGround"),shadows:X("shadows"),distanceDisplayCondition:X("distanceDisplayCondition"),classificationType:X("classificationType"),zIndex:X("zIndex")});At.prototype.clone=function(V){return s(V)?(V.show=this.show,V.positions=this.positions,V.width=this.width,V.granularity=this.granularity,V.material=this.material,V.depthFailMaterial=this.depthFailMaterial,V.arcType=this.arcType,V.clampToGround=this.clampToGround,V.shadows=this.shadows,V.distanceDisplayCondition=this.distanceDisplayCondition,V.classificationType=this.classificationType,V.zIndex=this.zIndex,V):new At(this)};At.prototype.merge=function(V){if(!s(V))throw new I("source is required.");this.show=a(this.show,V.show),this.positions=a(this.positions,V.positions),this.width=a(this.width,V.width),this.granularity=a(this.granularity,V.granularity),this.material=a(this.material,V.material),this.depthFailMaterial=a(this.depthFailMaterial,V.depthFailMaterial),this.arcType=a(this.arcType,V.arcType),this.clampToGround=a(this.clampToGround,V.clampToGround),this.shadows=a(this.shadows,V.shadows),this.distanceDisplayCondition=a(this.distanceDisplayCondition,V.distanceDisplayCondition),this.classificationType=a(this.classificationType,V.classificationType),this.zIndex=a(this.zIndex,V.zIndex)};var Oh=At;function tt(V){this._definitionChanged=new dV,this._show=void 0,this._showSubscription=void 0,this._positions=void 0,this._positionsSubscription=void 0,this._shape=void 0,this._shapeSubscription=void 0,this._cornerType=void 0,this._cornerTypeSubscription=void 0,this._granularity=void 0,this._granularitySubscription=void 0,this._fill=void 0,this._fillSubscription=void 0,this._material=void 0,this._materialSubscription=void 0,this._outline=void 0,this._outlineSubscription=void 0,this._outlineColor=void 0,this._outlineColorSubscription=void 0,this._outlineWidth=void 0,this._outlineWidthSubscription=void 0,this._shadows=void 0,this._shadowsSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubsription=void 0,this.merge(a(V,a.EMPTY_OBJECT))}Object.defineProperties(tt.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:X("show"),positions:X("positions"),shape:X("shape"),cornerType:X("cornerType"),granularity:X("granularity"),fill:X("fill"),material:Tl("material"),outline:X("outline"),outlineColor:X("outlineColor"),outlineWidth:X("outlineWidth"),shadows:X("shadows"),distanceDisplayCondition:X("distanceDisplayCondition")});tt.prototype.clone=function(V){return s(V)?(V.show=this.show,V.positions=this.positions,V.shape=this.shape,V.cornerType=this.cornerType,V.granularity=this.granularity,V.fill=this.fill,V.material=this.material,V.outline=this.outline,V.outlineColor=this.outlineColor,V.outlineWidth=this.outlineWidth,V.shadows=this.shadows,V.distanceDisplayCondition=this.distanceDisplayCondition,V):new tt(this)};tt.prototype.merge=function(V){if(!s(V))throw new I("source is required.");this.show=a(this.show,V.show),this.positions=a(this.positions,V.positions),this.shape=a(this.shape,V.shape),this.cornerType=a(this.cornerType,V.cornerType),this.granularity=a(this.granularity,V.granularity),this.fill=a(this.fill,V.fill),this.material=a(this.material,V.material),this.outline=a(this.outline,V.outline),this.outlineColor=a(this.outlineColor,V.outlineColor),this.outlineWidth=a(this.outlineWidth,V.outlineWidth),this.shadows=a(this.shadows,V.shadows),this.distanceDisplayCondition=a(this.distanceDisplayCondition,V.distanceDisplayCondition)};var wh=tt;function et(V){this._definitionChanged=new dV,this._show=void 0,this._showSubscription=void 0,this._coordinates=void 0,this._coordinatesSubscription=void 0,this._height=void 0,this._heightSubscription=void 0,this._heightReference=void 0,this._heightReferenceSubscription=void 0,this._extrudedHeight=void 0,this._extrudedHeightSubscription=void 0,this._extrudedHeightReference=void 0,this._extrudedHeightReferenceSubscription=void 0,this._rotation=void 0,this._rotationSubscription=void 0,this._stRotation=void 0,this._stRotationSubscription=void 0,this._granularity=void 0,this._granularitySubscription=void 0,this._fill=void 0,this._fillSubscription=void 0,this._material=void 0,this._materialSubscription=void 0,this._outline=void 0,this._outlineSubscription=void 0,this._outlineColor=void 0,this._outlineColorSubscription=void 0,this._outlineWidth=void 0,this._outlineWidthSubscription=void 0,this._shadows=void 0,this._shadowsSubscription=void 0,this._distanceDisplayCondition=void 0,this._distancedisplayConditionSubscription=void 0,this._classificationType=void 0,this._classificationTypeSubscription=void 0,this._zIndex=void 0,this._zIndexSubscription=void 0,this.merge(a(V,a.EMPTY_OBJECT))}Object.defineProperties(et.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:X("show"),coordinates:X("coordinates"),height:X("height"),heightReference:X("heightReference"),extrudedHeight:X("extrudedHeight"),extrudedHeightReference:X("extrudedHeightReference"),rotation:X("rotation"),stRotation:X("stRotation"),granularity:X("granularity"),fill:X("fill"),material:Tl("material"),outline:X("outline"),outlineColor:X("outlineColor"),outlineWidth:X("outlineWidth"),shadows:X("shadows"),distanceDisplayCondition:X("distanceDisplayCondition"),classificationType:X("classificationType"),zIndex:X("zIndex")});et.prototype.clone=function(V){return s(V)?(V.show=this.show,V.coordinates=this.coordinates,V.height=this.height,V.heightReference=this.heightReference,V.extrudedHeight=this.extrudedHeight,V.extrudedHeightReference=this.extrudedHeightReference,V.rotation=this.rotation,V.stRotation=this.stRotation,V.granularity=this.granularity,V.fill=this.fill,V.material=this.material,V.outline=this.outline,V.outlineColor=this.outlineColor,V.outlineWidth=this.outlineWidth,V.shadows=this.shadows,V.distanceDisplayCondition=this.distanceDisplayCondition,V.classificationType=this.classificationType,V.zIndex=this.zIndex,V):new et(this)};et.prototype.merge=function(V){if(!s(V))throw new I("source is required.");this.show=a(this.show,V.show),this.coordinates=a(this.coordinates,V.coordinates),this.height=a(this.height,V.height),this.heightReference=a(this.heightReference,V.heightReference),this.extrudedHeight=a(this.extrudedHeight,V.extrudedHeight),this.extrudedHeightReference=a(this.extrudedHeightReference,V.extrudedHeightReference),this.rotation=a(this.rotation,V.rotation),this.stRotation=a(this.stRotation,V.stRotation),this.granularity=a(this.granularity,V.granularity),this.fill=a(this.fill,V.fill),this.material=a(this.material,V.material),this.outline=a(this.outline,V.outline),this.outlineColor=a(this.outlineColor,V.outlineColor),this.outlineWidth=a(this.outlineWidth,V.outlineWidth),this.shadows=a(this.shadows,V.shadows),this.distanceDisplayCondition=a(this.distanceDisplayCondition,V.distanceDisplayCondition),this.classificationType=a(this.classificationType,V.classificationType),this.zIndex=a(this.zIndex,V.zIndex)};var Yh=et;function mt(V){this._definitionChanged=new dV,this._show=void 0,this._showSubscription=void 0,this._positions=void 0,this._positionsSubscription=void 0,this._minimumHeights=void 0,this._minimumHeightsSubscription=void 0,this._maximumHeights=void 0,this._maximumHeightsSubscription=void 0,this._granularity=void 0,this._granularitySubscription=void 0,this._fill=void 0,this._fillSubscription=void 0,this._material=void 0,this._materialSubscription=void 0,this._outline=void 0,this._outlineSubscription=void 0,this._outlineColor=void 0,this._outlineColorSubscription=void 0,this._outlineWidth=void 0,this._outlineWidthSubscription=void 0,this._shadows=void 0,this._shadowsSubscription=void 0,this._distanceDisplayCondition=void 0,this._distanceDisplayConditionSubscription=void 0,this.merge(a(V,a.EMPTY_OBJECT))}Object.defineProperties(mt.prototype,{definitionChanged:{get:function(){return this._definitionChanged}},show:X("show"),positions:X("positions"),minimumHeights:X("minimumHeights"),maximumHeights:X("maximumHeights"),granularity:X("granularity"),fill:X("fill"),material:Tl("material"),outline:X("outline"),outlineColor:X("outlineColor"),outlineWidth:X("outlineWidth"),shadows:X("shadows"),distanceDisplayCondition:X("distanceDisplayCondition")});mt.prototype.clone=function(V){return s(V)?(V.show=this.show,V.positions=this.positions,V.minimumHeights=this.minimumHeights,V.maximumHeights=this.maximumHeights,V.granularity=this.granularity,V.fill=this.fill,V.material=this.material,V.outline=this.outline,V.outlineColor=this.outlineColor,V.outlineWidth=this.outlineWidth,V.shadows=this.shadows,V.distanceDisplayCondition=this.distanceDisplayCondition,V):new mt(this)};mt.prototype.merge=function(V){if(!s(V))throw new I("source is required.");this.show=a(this.show,V.show),this.positions=a(this.positions,V.positions),this.minimumHeights=a(this.minimumHeights,V.minimumHeights),this.maximumHeights=a(this.maximumHeights,V.maximumHeights),this.granularity=a(this.granularity,V.granularity),this.fill=a(this.fill,V.fill),this.material=a(this.material,V.material),this.outline=a(this.outline,V.outline),this.outlineColor=a(this.outlineColor,V.outlineColor),this.outlineWidth=a(this.outlineWidth,V.outlineWidth),this.shadows=a(this.shadows,V.shadows),this.distanceDisplayCondition=a(this.distanceDisplayCondition,V.distanceDisplayCondition)};var yh=mt;var pc={NONE:0,HOLD:1,EXTRAPOLATE:2},XU=Object.freeze(pc);var wm={type:"Linear"};wm.getRequiredDataPoints=function(V){return 2};wm.interpolateOrderZero=function(V,l,Z,U,A){if(l.length!==2)throw new I("The xTable provided to the linear interpolator must have exactly two elements.");if(U<=0)throw new I("There must be at least 1 dependent variable for each independent variable.");s(A)||(A=new Array(U));let t,m,i,n=l[0],o=l[1];if(n===o)throw new I("Divide by zero error: xTable[0] and xTable[1] are equal");for(t=0;t<U;t++)m=Z[t],i=Z[t+U],A[t]=((i-m)*V+o*m-n*i)/(o-n);return A};var vh=wm;var zh={packedLength:1,pack:function(V,l,Z){Z=a(Z,0),l[Z]=V},unpack:function(V,l,Z){return l=a(l,0),V[l]}};function kh(V,l,Z){let U,A=V.length,t=Z.length,m=A+t;if(V.length=m,A!==l){let i=A-1;for(U=m-1;U>=l;U--)V[U]=V[i--]}for(U=0;U<t;U++)V[l++]=Z[U]}function Hh(V,l){return V instanceof QV?V:typeof V=="string"?QV.fromIso8601(V):QV.addSeconds(l,V,new QV)}var Ym=[],ym=[];function se(V,l,Z,U,A){let t=0,m,i,n,o,h,R;for(;t<U.length;){h=Hh(U[t],V),n=KW(l,h,QV.compare);let c=0,Q=0;if(n<0){for(n=~n,o=n*A,i=void 0,R=l[n];t<U.length&&(h=Hh(U[t],V),!(s(i)&&QV.compare(i,h)>=0||s(R)&&QV.compare(h,R)>=0));){for(Ym[c++]=h,t=t+1,m=0;m<A;m++)ym[Q++]=U[t],t=t+1;i=h}c>0&&(ym.length=Q,kh(Z,o,ym),Ym.length=c,kh(l,n,Ym))}else{for(m=0;m<A;m++)t++,Z[n*A+m]=U[t];t++}}}function iW(V,l){v.defined("type",V);let Z=V;Z===Number&&(Z=zh);let U=Z.packedLength,A=a(Z.packedInterpolationLength,U),t=0,m;if(s(l)){let i=l.length;m=new Array(i);for(let n=0;n<i;n++){let o=l[n];o===Number&&(o=zh);let h=o.packedLength;U+=h,A+=a(o.packedInterpolationLength,h),m[n]=o}t=i}this._type=V,this._innerType=Z,this._interpolationDegree=1,this._interpolationAlgorithm=vh,this._numberOfPoints=0,this._times=[],this._values=[],this._xTable=[],this._yTable=[],this._packedLength=U,this._packedInterpolationLength=A,this._updateTableLength=!0,this._interpolationResult=new Array(A),this._definitionChanged=new dV,this._derivativeTypes=l,this._innerDerivativeTypes=m,this._inputOrder=t,this._forwardExtrapolationType=XU.NONE,this._forwardExtrapolationDuration=0,this._backwardExtrapolationType=XU.NONE,this._backwardExtrapolationDuration=0}Object.defineProperties(iW.prototype,{isConstant:{get:function(){return this._values.length===0}},definitionChanged:{get:function(){return this._definitionChanged}},type:{get:function(){return this._type}},derivativeTypes:{get:function(){return this._derivativeTypes}},interpolationDegree:{get:function(){return this._interpolationDegree}},interpolationAlgorithm:{get:function(){return this._interpolationAlgorithm}},forwardExtrapolationType:{get:function(){return this._forwardExtrapolationType},set:function(V){this._forwardExtrapolationType!==V&&(this._forwardExtrapolationType=V,this._definitionChanged.raiseEvent(this))}},forwardExtrapolationDuration:{get:function(){return this._forwardExtrapolationDuration},set:function(V){this._forwardExtrapolationDuration!==V&&(this._forwardExtrapolationDuration=V,this._definitionChanged.raiseEvent(this))}},backwardExtrapolationType:{get:function(){return this._backwardExtrapolationType},set:function(V){this._backwardExtrapolationType!==V&&(this._backwardExtrapolationType=V,this._definitionChanged.raiseEvent(this))}},backwardExtrapolationDuration:{get:function(){return this._backwardExtrapolationDuration},set:function(V){this._backwardExtrapolationDuration!==V&&(this._backwardExtrapolationDuration=V,this._definitionChanged.raiseEvent(this))}}});iW.prototype.getValue=function(V,l){v.defined("time",V);let Z=this._times,U=Z.length;if(U===0)return;let A,t=this._innerType,m=this._values,i=KW(Z,V,QV.compare);if(i<0){if(i=~i,i===0){let _=Z[i];if(A=this._backwardExtrapolationDuration,this._backwardExtrapolationType===XU.NONE||A!==0&&QV.secondsDifference(_,V)>A)return;if(this._backwardExtrapolationType===XU.HOLD)return t.unpack(m,0,l)}if(i>=U){i=U-1;let _=Z[i];if(A=this._forwardExtrapolationDuration,this._forwardExtrapolationType===XU.NONE||A!==0&&QV.secondsDifference(V,_)>A)return;if(this._forwardExtrapolationType===XU.HOLD)return i=U-1,t.unpack(m,i*t.packedLength,l)}let n=this._xTable,o=this._yTable,h=this._interpolationAlgorithm,R=this._packedInterpolationLength,c=this._inputOrder;if(this._updateTableLength){this._updateTableLength=!1;let _=Math.min(h.getRequiredDataPoints(this._interpolationDegree,c),U);_!==this._numberOfPoints&&(this._numberOfPoints=_,n.length=_,o.length=_*R)}let Q=this._numberOfPoints-1;if(Q<1)return;let T=0,S=U-1;if(S-T+1>=Q+1){let _=i-(Q/2|0)-1;_<T&&(_=T);let Y=_+Q;Y>S&&(Y=S,_=Y-Q,_<T&&(_=T)),T=_,S=Y}let b=S-T+1;for(let _=0;_<b;++_)n[_]=QV.secondsDifference(Z[T+_],Z[S]);if(s(t.convertPackedArrayForInterpolation))t.convertPackedArrayForInterpolation(m,T,S,o);else{let _=0,Y=this._packedLength,K=T*Y,ZV=(S+1)*Y;for(;K<ZV;)o[_]=m[K],K++,_++}let E=QV.secondsDifference(V,Z[S]),D;if(c===0||!s(h.interpolate))D=h.interpolateOrderZero(E,n,o,R,this._interpolationResult);else{let _=Math.floor(R/(c+1));D=h.interpolate(E,n,o,_,c,c,this._interpolationResult)}return s(t.unpackInterpolationResult)?t.unpackInterpolationResult(D,m,T,S,l):t.unpack(D,0,l)}return t.unpack(m,i*this._packedLength,l)};iW.prototype.setInterpolationOptions=function(V){if(!s(V))return;let l=!1,Z=V.interpolationAlgorithm,U=V.interpolationDegree;s(Z)&&this._interpolationAlgorithm!==Z&&(this._interpolationAlgorithm=Z,l=!0),s(U)&&this._interpolationDegree!==U&&(this._interpolationDegree=U,l=!0),l&&(this._updateTableLength=!0,this._definitionChanged.raiseEvent(this))};iW.prototype.addSample=function(V,l,Z){let U=this._innerDerivativeTypes,A=s(U);v.defined("time",V),v.defined("value",l),A&&v.defined("derivatives",Z);let t=this._innerType,m=[];if(m.push(V),t.pack(l,m,m.length),A){let i=U.length;for(let n=0;n<i;n++)U[n].pack(Z[n],m,m.length)}se(void 0,this._times,this._values,m,this._packedLength),this._updateTableLength=!0,this._definitionChanged.raiseEvent(this)};iW.prototype.addSamples=function(V,l,Z){let U=this._innerDerivativeTypes,A=s(U);if(v.defined("times",V),v.defined("values",l),V.length!==l.length)throw new I("times and values must be the same length.");if(A&&(!s(Z)||Z.length!==V.length))throw new I("times and derivativeValues must be the same length.");let t=this._innerType,m=V.length,i=[];for(let n=0;n<m;n++)if(i.push(V[n]),t.pack(l[n],i,i.length),A){let o=Z[n],h=U.length;for(let R=0;R<h;R++)U[R].pack(o[R],i,i.length)}se(void 0,this._times,this._values,i,this._packedLength),this._updateTableLength=!0,this._definitionChanged.raiseEvent(this)};iW.prototype.addSamplesPackedArray=function(V,l){v.defined("packedSamples",V),se(l,this._times,this._values,V,this._packedLength),this._updateTableLength=!0,this._definitionChanged.raiseEvent(this)};iW.prototype.removeSample=function(V){v.defined("time",V);let l=KW(this._times,V,QV.compare);return l<0?!1:(Lh(this,l,1),!0)};function Lh(V,l,Z){let U=V._packedLength;V._times.splice(l,Z),V._values.splice(l*U,Z*U),V._updateTableLength=!0,V._definitionChanged.raiseEvent(V)}iW.prototype.removeSamples=function(V){v.defined("timeInterval",V);let l=this._times,Z=KW(l,V.start,QV.compare);Z<0?Z=~Z:V.isStartIncluded||++Z;let U=KW(l,V.stop,QV.compare);U<0?U=~U:V.isStopIncluded&&++U,Lh(this,Z,U-Z)};iW.prototype.equals=function(V){if(this===V)return!0;if(!s(V)||this._type!==V._type||this._interpolationDegree!==V._interpolationDegree||this._interpolationAlgorithm!==V._interpolationAlgorithm)return!1;let l=this._derivativeTypes,Z=s(l),U=V._derivativeTypes,A=s(U);if(Z!==A)return!1;let t,m;if(Z){if(m=l.length,m!==U.length)return!1;for(t=0;t<m;t++)if(l[t]!==U[t])return!1}let i=this._times,n=V._times;if(m=i.length,m!==n.length)return!1;for(t=0;t<m;t++)if(!QV.equals(i[t],n[t]))return!1;let o=this._values,h=V._values;for(m=o.length,t=0;t<m;t++)if(o[t]!==h[t])return!1;return!0};iW._mergeNewSamples=se;var ae=iW;var{eastNorthUpToFixedFrame:Xc,getTransformToFixedFrame:fc}=QZ,bc=new Ul;function uc(V){return new Sh(V)}function Jc(V){return X(V,void 0,uc)}function AZ(V,l){return X(V,void 0,function(Z){return Z instanceof l?Z:new l(Z)})}function kZ(V){V=a(V,a.EMPTY_OBJECT);let l=V.id;s(l)||(l=jl()),this._availability=void 0,this._id=l,this._definitionChanged=new dV,this._name=V.name,this._show=a(V.show,!0),this._parent=void 0,this._propertyNames=["billboard","box","corridor","cylinder","description","ellipse","ellipsoid","label","model","tileset","orientation","path","plane","point","polygon","polyline","polylineVolume","position","properties","rectangle","viewFrom","wall","referenceFrame","gltfZForwardYUp"],this._billboard=void 0,this._billboardSubscription=void 0,this._box=void 0,this._boxSubscription=void 0,this._corridor=void 0,this._corridorSubscription=void 0,this._cylinder=void 0,this._cylinderSubscription=void 0,this._description=void 0,this._descriptionSubscription=void 0,this._ellipse=void 0,this._ellipseSubscription=void 0,this._ellipsoid=void 0,this._ellipsoidSubscription=void 0,this._label=void 0,this._labelSubscription=void 0,this._model=void 0,this._modelSubscription=void 0,this._tileset=void 0,this._tilesetSubscription=void 0,this._orientation=void 0,this._orientationSubscription=void 0,this._path=void 0,this._pathSubscription=void 0,this._plane=void 0,this._planeSubscription=void 0,this._point=void 0,this._pointSubscription=void 0,this._polygon=void 0,this._polygonSubscription=void 0,this._polyline=void 0,this._polylineSubscription=void 0,this._polylineVolume=void 0,this._polylineVolumeSubscription=void 0,this._position=void 0,this._positionSubscription=void 0,this._properties=void 0,this._propertiesSubscription=void 0,this._rectangle=void 0,this._rectangleSubscription=void 0,this._viewFrom=void 0,this._viewFromSubscription=void 0,this._wall=void 0,this._wallSubscription=void 0,this._children=[],this.entityCollection=void 0,this._referenceFrame=a(V.referenceFrame,void 0),this._gltfZForwardYUp=a(V.gltfZForwardYUp,!1),this.parent=V.parent,this.merge(V)}function vm(V,l,Z){let U=l.length;for(let A=0;A<U;A++){let t=l[A],m=t._show;(!Z&&m)!==(Z&&m)&&vm(t,t._children,Z)}V._definitionChanged.raiseEvent(V,"isShowing",Z,!Z)}Object.defineProperties(kZ.prototype,{availability:Ge("availability"),id:{get:function(){return this._id}},definitionChanged:{get:function(){return this._definitionChanged}},name:Ge("name"),show:{get:function(){return this._show},set:function(V){if(!s(V))throw new I("value is required.");if(V===this._show)return;let l=this.isShowing;this._show=V;let Z=this.isShowing;l!==Z&&vm(this,this._children,Z),this._definitionChanged.raiseEvent(this,"show",V,!V)}},isShowing:{get:function(){return this._show&&(!s(this.entityCollection)||this.entityCollection.show)&&(!s(this._parent)||this._parent.isShowing)}},parent:{get:function(){return this._parent},set:function(V){let l=this._parent;if(l===V)return;let Z=this.isShowing;if(s(l)){let A=l._children.indexOf(this);l._children.splice(A,1)}this._parent=V,s(V)&&V._children.push(this);let U=this.isShowing;Z!==U&&vm(this,this._children,U),this._definitionChanged.raiseEvent(this,"parent",V,l)}},propertyNames:{get:function(){return this._propertyNames}},billboard:AZ("billboard",Fh),box:AZ("box",ch),corridor:AZ("corridor",Ch),cylinder:AZ("cylinder",gh),description:X("description"),ellipse:AZ("ellipse",Nh),ellipsoid:AZ("ellipsoid",Eh),label:AZ("label",ph),model:AZ("model",uh),tileset:AZ("tileset",Jh),orientation:X("orientation"),path:AZ("path",xh),plane:AZ("plane",Dh),point:AZ("point",Mh),polygon:AZ("polygon",_h),polyline:AZ("polyline",Oh),polylineVolume:AZ("polylineVolume",wh),properties:AZ("properties",pU),position:Jc("position"),rectangle:AZ("rectangle",Yh),viewFrom:X("viewFrom"),wall:AZ("wall",yh)});kZ.prototype.isAvailable=function(V){if(!s(V))throw new I("time is required.");let l=this._availability;return!s(l)||l.contains(V)};kZ.prototype.addProperty=function(V){let l=this._propertyNames;if(!s(V))throw new I("propertyName is required.");if(l.indexOf(V)!==-1)throw new I(`${V} is already a registered property.`);if(V in this)throw new I(`${V} is a reserved property name.`);l.push(V),Object.defineProperty(this,V,Ge(V,!0))};kZ.prototype.removeProperty=function(V){let Z=this._propertyNames.indexOf(V);if(!s(V))throw new I("propertyName is required.");if(Z===-1)throw new I(`${V} is not a registered property.`);this._propertyNames.splice(Z,1),delete this[V]};kZ.prototype.merge=function(V){if(!s(V))throw new I("source is required.");this.name=a(this.name,V.name),this.availability=a(this.availability,V.availability);let l=this._propertyNames,Z=s(V._propertyNames)?V._propertyNames:Object.keys(V),U=Z.length;for(let A=0;A<U;A++){let t=Z[A];if(t==="parent"||t==="name"||t==="availability"||t==="children")continue;let m=this[t],i=V[t];!s(m)&&l.indexOf(t)===-1&&this.addProperty(t),s(i)&&(s(m)?s(m.merge)&&m.merge(i):s(i.merge)&&s(i.clone)?this[t]=i.clone():this[t]=i)}};var zm=new gl,Kh=new w,Ph=new kl;Object.defineProperties(kZ.prototype,{referenceFrame:{get:function(){return this._referenceFrame},set:function(V){Object.values(ul).includes(V)&&(this._referenceFrame=V)}},gltfZForwardYUp:{get:function(){return this._gltfZForwardYUp},set:function(V){this._gltfZForwardYUp=V}}});kZ.prototype.computeModelMatrix=function(V,l,Z=!0){v.typeOf.object("time",V);let U=YV.getValueOrUndefined(this._position,V,Kh);if(!s(U))return;let A=YV.getValueOrUndefined(this._orientation,V,Ph);A&&~Di.indexOf(this.referenceFrame)&&(A=QZ.reverseHeadingQuaternion(A));let t=fc(this.referenceFrame,V,this._position);return!s(A)||!Z?l=t(U,void 0,l):s(this.referenceFrame)?(QZ.localToFixedFrameQuaternion(U,A,null,t,A),l=nV.fromRotationTranslation(gl.fromQuaternion(A,zm),U,l)):l=nV.fromRotationTranslation(gl.fromQuaternion(A,zm),U,l),l};kZ.prototype.computeModelMatrixForHeightReference=function(V,l,Z,U,A){v.typeOf.object("time",V);let t=YV.getValueOrDefault(l,V,ZZ.NONE),m=YV.getValueOrUndefined(this._position,V,Kh);if(t===ZZ.NONE||!s(m)||w.equalsEpsilon(m,w.ZERO,NV.EPSILON8))return this.computeModelMatrix(V,A);let i=U.cartesianToCartographic(m,bc);t===ZZ.CLAMP_TO_GROUND?i.height=Z:i.height+=Z,m=U.cartographicToCartesian(i,m);let n=YV.getValueOrUndefined(this._orientation,V,Ph);return s(n)?A=nV.fromRotationTranslation(gl.fromQuaternion(n,zm),m,A):A=Xc(m,void 0,A),A};kZ.supportsMaterialsforEntitiesOnTerrain=function(V){return Bh.supportsMaterials(V)};kZ.supportsPolylinesOnTerrain=function(V){return Po.isSupported(V)};var lA=new kl;kZ.prototype.updateAdditiveOrientation=function(V,l){this.orientation||(this.orientation=new _W(kl.clone(kl.IDENTITY)));let Z=this.orientation,U=kl.fromAxisAngle(w.UNIT_X,V.roll),A=kl.fromAxisAngle(w.UNIT_Y,-V.pitch),t=kl.fromAxisAngle(w.UNIT_Z,-V.heading),m=new kl;if(kl.multiply(A,t,m),kl.multiply(U,m,m),Z instanceof ae){let i=Z._times,n=l?KW(i,l,QV.compare):0;n<0&&(n=~n);let o=Z._values[n];kl.multiply(m,o,lA),Z._values[n]=kl.clone(lA)}else if(Z instanceof _W){let i=Z.getValue();kl.multiply(i,m,lA),kl.normalize(lA,lA),Z.setValue(kl.clone(lA))}else throw new I("Unsupported orientation property type.")};var ZA=kZ;var jh={id:void 0};function it(V){if(V._firing){V._refire=!0;return}if(V._suspendCount===0){let l=V._addedEntities,Z=V._removedEntities,U=V._changedEntities;if(U.length!==0||l.length!==0||Z.length!==0){V._firing=!0;do{V._refire=!1;let A=l.values.slice(0),t=Z.values.slice(0),m=U.values.slice(0);l.removeAll(),Z.removeAll(),U.removeAll(),V._collectionChanged.raiseEvent(V,A,t,m)}while(V._refire);V._firing=!1}}}function al(V){this._owner=V,this._entities=new _A,this._addedEntities=new _A,this._removedEntities=new _A,this._changedEntities=new _A,this._suspendCount=0,this._collectionChanged=new dV,this._id=jl(),this._show=!0,this._firing=!1,this._refire=!1}al.prototype.suspendEvents=function(){this._suspendCount++};al.prototype.resumeEvents=function(){if(this._suspendCount===0)throw new I("resumeEvents can not be called before suspendEvents.");this._suspendCount--,it(this)};Object.defineProperties(al.prototype,{collectionChanged:{get:function(){return this._collectionChanged}},id:{get:function(){return this._id}},values:{get:function(){return this._entities.values}},show:{get:function(){return this._show},set:function(V){if(!s(V))throw new I("value is required.");if(V===this._show)return;this.suspendEvents();let l,Z=[],U=this._entities.values,A=U.length;for(l=0;l<A;l++)Z.push(U[l].isShowing);for(this._show=V,l=0;l<A;l++){let t=Z[l],m=U[l];t!==m.isShowing&&m.definitionChanged.raiseEvent(m,"isShowing",m.isShowing,t)}this.resumeEvents()}},owner:{get:function(){return this._owner}}});al.prototype.computeAvailability=function(){let V=bW.MAXIMUM_VALUE,l=bW.MINIMUM_VALUE,Z=this._entities.values;for(let U=0,A=Z.length;U<A;U++){let m=Z[U].availability;if(s(m)){let i=m.start,n=m.stop;QV.lessThan(i,V)&&!i.equals(bW.MINIMUM_VALUE)&&(V=i),QV.greaterThan(n,l)&&!n.equals(bW.MAXIMUM_VALUE)&&(l=n)}}return bW.MAXIMUM_VALUE.equals(V)&&(V=bW.MINIMUM_VALUE),bW.MINIMUM_VALUE.equals(l)&&(l=bW.MAXIMUM_VALUE),new Ve({start:V,stop:l})};al.prototype.add=function(V){if(!s(V))throw new I("entity is required.");V instanceof ZA||(V=new ZA(V));let l=V.id,Z=this._entities;if(Z.contains(l))throw new Jl(`An entity with id ${l} already exists in this collection.`);return V.entityCollection=this,Z.set(l,V),this._removedEntities.remove(l)||this._addedEntities.set(l,V),V.definitionChanged.addEventListener(al.prototype._onEntityDefinitionChanged,this),it(this),this.manageVisualizers(V),V};al.prototype.remove=function(V){return s(V)?this.removeById(V.id):!1};al.prototype.contains=function(V){if(!s(V))throw new I("entity is required");return this._entities.get(V.id)===V};al.prototype.removeById=function(V){if(!s(V))return!1;let Z=this._entities.get(V);return this._entities.remove(V)?(this._addedEntities.remove(V)||(this._removedEntities.set(V,Z),this._changedEntities.remove(V)),this._entities.remove(V),Z.definitionChanged.removeEventListener(al.prototype._onEntityDefinitionChanged,this),it(this),!0):!1};al.prototype.removeAll=function(){let V=this._entities,l=V.length,Z=V.values,U=this._addedEntities,A=this._removedEntities;for(let t=0;t<l;t++){let m=Z[t],i=m.id,n=U.get(i);s(n)||(m.definitionChanged.removeEventListener(al.prototype._onEntityDefinitionChanged,this),A.set(i,m))}V.removeAll(),U.removeAll(),this._changedEntities.removeAll(),it(this)};al.prototype.getById=function(V){if(!s(V))throw new I("id is required.");return this._entities.get(V)};al.prototype.getOrCreateEntity=function(V){if(!s(V))throw new I("id is required.");let l=this._entities.get(V);return s(l)||(jh.id=V,l=new ZA(jh),this.add(l)),l};al.prototype._onEntityDefinitionChanged=function(V){let l=V.id;this._addedEntities.contains(l)||this._changedEntities.set(l,V),this.manageVisualizers(V),it(this)};al.prototype.manageVisualizers=function(V){if(this.owner){if(!this.owner._visualizerCache){if(this.owner._visualizerCache={},this.owner._visualizers)for(let l=0;l<this.owner._visualizers.length;l++){let Z=this.owner._visualizers[l].constructor.name;this.owner._visualizerCache[Z]=this.owner._visualizers[l],this.syncVisualizerCache(Z)}this.owner._visualizers=[]}for(let l in al.prototype._visualizerMap)if(al.prototype._visualizerMap.hasOwnProperty(l)){let Z=this.owner._visualizerCache[al.prototype._visualizerMap[l]];V[l]&&Z&&this.owner._visualizers.indexOf(Z)===-1&&this.owner._visualizers.push(Z),this.syncVisualizerCache(l)}}};var qh={MAX:0,DYNAMIC:1};al.ThrottleType=qh;al.prototype.ThrottleType=qh;al.prototype.syncVisualizerCache=function(V){this.owner._visualizerCache&&this.owner._throttleCache&&this.owner._visualizerCache[V]&&this.owner._throttleCache[V]&&(this.owner._visualizerCache[V]._fps=this.owner._throttleCache[V]._fps)};al.prototype.throttleVisualizer=function(V,l,Z){let U=al.prototype._visualizerMap[V];this.owner._throttleCache=this.owner._throttleCache||{},this.owner._throttleCache[U]=this.owner._throttleCache[U]||{_fps:[]},this.owner._throttleCache[U]._fps[l]=Z,this.syncVisualizerCache(U)};al.prototype._visualizerMap={billboard:"BillboardVisualizer",box:"GeometryVisualizer",cylinder:"GeometryVisualizer",corridor:"GeometryVisualizer",ellipse:"GeometryVisualizer",ellipsoid:"GeometryVisualizer",plane:"GeometryVisualizer",polygon:"GeometryVisualizer",polylineVolume:"GeometryVisualizer",rectangle:"GeometryVisualizer",wall:"GeometryVisualizer",label:"LabelVisualizer",model:"ModelVisualizer",point:"PointVisualizer",path:"PathVisualizer",polyline:"PolylineVisualizer",customPatternSensor:"CustomPatternSensorVisualizer",conicSensor:"ConicSensorVisualizer",rectangularSensor:"RectangularSensorVisualizer"};al.prototype._precisionMode=0;var $h=al;function km(V){this._name=V,this._clock=void 0,this._changed=new dV,this._error=new dV,this._isLoading=!1,this._loading=new dV,this._entityCollection=new $h(this),this._entityCluster=new yr}Object.defineProperties(km.prototype,{name:{get:function(){return this._name},set:function(V){this._name!==V&&(this._name=V,this._changed.raiseEvent(this))}},clock:{get:function(){return this._clock},set:function(V){this._clock!==V&&(this._clock=V,this._changed.raiseEvent(this))}},entities:{get:function(){return this._entityCollection}},isLoading:{get:function(){return this._isLoading},set:function(V){Pi.setLoading(this,V)}},changedEvent:{get:function(){return this._changed}},errorEvent:{get:function(){return this._error}},loadingEvent:{get:function(){return this._loading}},show:{get:function(){return this._entityCollection.show},set:function(V){this._entityCollection.show=V}},clustering:{get:function(){return this._entityCluster},set:function(V){if(!s(V))throw new I("value must be defined.");this._entityCluster=V}}});km.prototype.update=function(V){return!0};var nt=km;function HZ(V,l){l=a(l,0);let Z;if(l>0){Z=new Array(l);for(let U=0;U<l;U++)Z[U]=w}this._numberOfDerivatives=l,this._property=new ae(w,Z),this._definitionChanged=new dV,this._referenceFrame=a(V,ul.FIXED),this._property._definitionChanged.addEventListener(function(){this._definitionChanged.raiseEvent(this)},this)}Object.defineProperties(HZ.prototype,{isConstant:{get:function(){return this._property.isConstant}},definitionChanged:{get:function(){return this._definitionChanged}},referenceFrame:{get:function(){return this._referenceFrame}},interpolationDegree:{get:function(){return this._property.interpolationDegree}},interpolationAlgorithm:{get:function(){return this._property.interpolationAlgorithm}},numberOfDerivatives:{get:function(){return this._numberOfDerivatives}},forwardExtrapolationType:{get:function(){return this._property.forwardExtrapolationType},set:function(V){this._property.forwardExtrapolationType=V}},forwardExtrapolationDuration:{get:function(){return this._property.forwardExtrapolationDuration},set:function(V){this._property.forwardExtrapolationDuration=V}},backwardExtrapolationType:{get:function(){return this._property.backwardExtrapolationType},set:function(V){this._property.backwardExtrapolationType=V}},backwardExtrapolationDuration:{get:function(){return this._property.backwardExtrapolationDuration},set:function(V){this._property.backwardExtrapolationDuration=V}}});HZ.prototype.getValue=function(V,l){return this.getValueInReferenceFrame(V,ul.FIXED,l)};HZ.prototype.getValueInReferenceFrame=function(V,l,Z){if(v.defined("time",V),v.defined("referenceFrame",l),Z=this._property.getValue(V,Z),s(Z))return ne.convertToReferenceFrame(V,Z,this._referenceFrame,l,Z)};HZ.prototype.setInterpolationOptions=function(V){this._property.setInterpolationOptions(V)};HZ.prototype.addSample=function(V,l,Z){let U=this._numberOfDerivatives;if(U>0&&(!s(Z)||Z.length!==U))throw new I("derivatives length must be equal to the number of derivatives.");this._property.addSample(V,l,Z)};HZ.prototype.addSamples=function(V,l,Z){this._property.addSamples(V,l,Z)};HZ.prototype.addSamplesPackedArray=function(V,l){this._property.addSamplesPackedArray(V,l)};HZ.prototype.removeSample=function(V){return this._property.removeSample(V)};HZ.prototype.removeSamples=function(V){this._property.removeSamples(V)};HZ.prototype.equals=function(V){return this===V||V instanceof HZ&&YV.equals(this._property,V._property)&&this._referenceFrame===V._referenceFrame};var VR=HZ;var re=new Int32Array(2),lR=new Float32Array(re.buffer),ZR=new Float64Array(re.buffer),WR=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1;var oe;(function(V){V[V.UTF8_BYTES=1]="UTF8_BYTES",V[V.UTF16_STRING=2]="UTF16_STRING"})(oe||(oe={}));var Hm=class V{constructor(){OU(this,"bb",null);OU(this,"bb_pos",0)}__init(l,Z){return this.bb_pos=l,this.bb=Z,this}static getRootAsOMM(l,Z){return(Z||new V).__init(l.readInt32(l.position())+l.position(),l)}static getSizePrefixedRootAsOMM(l,Z){return l.setPosition(l.position()+4),(Z||new V).__init(l.readInt32(l.position())+l.position(),l)}static bufferHasIdentifier(l){return l.__has_identifier("$OMM")}CCSDS_OMM_VERS(){let l=this.bb.__offset(this.bb_pos,4);return l?this.bb.readFloat64(this.bb_pos+l):0}CREATION_DATE(l){let Z=this.bb.__offset(this.bb_pos,6);return Z?this.bb.__string(this.bb_pos+Z,l):null}ORIGINATOR(l){let Z=this.bb.__offset(this.bb_pos,8);return Z?this.bb.__string(this.bb_pos+Z,l):null}OBJECT_NAME(l){let Z=this.bb.__offset(this.bb_pos,10);return Z?this.bb.__string(this.bb_pos+Z,l):null}OBJECT_ID(l){let Z=this.bb.__offset(this.bb_pos,12);return Z?this.bb.__string(this.bb_pos+Z,l):null}CENTER_NAME(l){let Z=this.bb.__offset(this.bb_pos,14);return Z?this.bb.__string(this.bb_pos+Z,l):null}REF_FRAME(){let l=this.bb.__offset(this.bb_pos,16);return l?this.bb.readInt8(this.bb_pos+l):9}REF_FRAME_EPOCH(l){let Z=this.bb.__offset(this.bb_pos,18);return Z?this.bb.__string(this.bb_pos+Z,l):null}TIME_SYSTEM(){let l=this.bb.__offset(this.bb_pos,20);return l?this.bb.readInt8(this.bb_pos+l):11}MEAN_ELEMENT_THEORY(){let l=this.bb.__offset(this.bb_pos,22);return l?this.bb.readInt8(this.bb_pos+l):0}COMMENT(l){let Z=this.bb.__offset(this.bb_pos,24);return Z?this.bb.__string(this.bb_pos+Z,l):null}EPOCH(l){let Z=this.bb.__offset(this.bb_pos,26);return Z?this.bb.__string(this.bb_pos+Z,l):null}SEMI_MAJOR_AXIS(){let l=this.bb.__offset(this.bb_pos,28);return l?this.bb.readFloat64(this.bb_pos+l):0}MEAN_MOTION(){let l=this.bb.__offset(this.bb_pos,30);return l?this.bb.readFloat64(this.bb_pos+l):0}ECCENTRICITY(){let l=this.bb.__offset(this.bb_pos,32);return l?this.bb.readFloat64(this.bb_pos+l):0}INCLINATION(){let l=this.bb.__offset(this.bb_pos,34);return l?this.bb.readFloat64(this.bb_pos+l):0}RA_OF_ASC_NODE(){let l=this.bb.__offset(this.bb_pos,36);return l?this.bb.readFloat64(this.bb_pos+l):0}ARG_OF_PERICENTER(){let l=this.bb.__offset(this.bb_pos,38);return l?this.bb.readFloat64(this.bb_pos+l):0}MEAN_ANOMALY(){let l=this.bb.__offset(this.bb_pos,40);return l?this.bb.readFloat64(this.bb_pos+l):0}GM(){let l=this.bb.__offset(this.bb_pos,42);return l?this.bb.readFloat64(this.bb_pos+l):0}MASS(){let l=this.bb.__offset(this.bb_pos,44);return l?this.bb.readFloat64(this.bb_pos+l):0}SOLAR_RAD_AREA(){let l=this.bb.__offset(this.bb_pos,46);return l?this.bb.readFloat64(this.bb_pos+l):0}SOLAR_RAD_COEFF(){let l=this.bb.__offset(this.bb_pos,48);return l?this.bb.readFloat64(this.bb_pos+l):0}DRAG_AREA(){let l=this.bb.__offset(this.bb_pos,50);return l?this.bb.readFloat64(this.bb_pos+l):0}DRAG_COEFF(){let l=this.bb.__offset(this.bb_pos,52);return l?this.bb.readFloat64(this.bb_pos+l):0}EPHEMERIS_TYPE(){let l=this.bb.__offset(this.bb_pos,54);return l?this.bb.readInt8(this.bb_pos+l):1}CLASSIFICATION_TYPE(l){let Z=this.bb.__offset(this.bb_pos,56);return Z?this.bb.__string(this.bb_pos+Z,l):null}NORAD_CAT_ID(){let l=this.bb.__offset(this.bb_pos,58);return l?this.bb.readUint32(this.bb_pos+l):0}ELEMENT_SET_NO(){let l=this.bb.__offset(this.bb_pos,60);return l?this.bb.readUint32(this.bb_pos+l):0}REV_AT_EPOCH(){let l=this.bb.__offset(this.bb_pos,62);return l?this.bb.readFloat64(this.bb_pos+l):0}BSTAR(){let l=this.bb.__offset(this.bb_pos,64);return l?this.bb.readFloat64(this.bb_pos+l):0}MEAN_MOTION_DOT(){let l=this.bb.__offset(this.bb_pos,66);return l?this.bb.readFloat64(this.bb_pos+l):0}MEAN_MOTION_DDOT(){let l=this.bb.__offset(this.bb_pos,68);return l?this.bb.readFloat64(this.bb_pos+l):0}COV_REF_FRAME(){let l=this.bb.__offset(this.bb_pos,70);return l?this.bb.readInt8(this.bb_pos+l):0}CX_X(){let l=this.bb.__offset(this.bb_pos,72);return l?this.bb.readFloat64(this.bb_pos+l):0}CY_X(){let l=this.bb.__offset(this.bb_pos,74);return l?this.bb.readFloat64(this.bb_pos+l):0}CY_Y(){let l=this.bb.__offset(this.bb_pos,76);return l?this.bb.readFloat64(this.bb_pos+l):0}CZ_X(){let l=this.bb.__offset(this.bb_pos,78);return l?this.bb.readFloat64(this.bb_pos+l):0}CZ_Y(){let l=this.bb.__offset(this.bb_pos,80);return l?this.bb.readFloat64(this.bb_pos+l):0}CZ_Z(){let l=this.bb.__offset(this.bb_pos,82);return l?this.bb.readFloat64(this.bb_pos+l):0}CX_DOT_X(){let l=this.bb.__offset(this.bb_pos,84);return l?this.bb.readFloat64(this.bb_pos+l):0}CX_DOT_Y(){let l=this.bb.__offset(this.bb_pos,86);return l?this.bb.readFloat64(this.bb_pos+l):0}CX_DOT_Z(){let l=this.bb.__offset(this.bb_pos,88);return l?this.bb.readFloat64(this.bb_pos+l):0}CX_DOT_X_DOT(){let l=this.bb.__offset(this.bb_pos,90);return l?this.bb.readFloat64(this.bb_pos+l):0}CY_DOT_X(){let l=this.bb.__offset(this.bb_pos,92);return l?this.bb.readFloat64(this.bb_pos+l):0}CY_DOT_Y(){let l=this.bb.__offset(this.bb_pos,94);return l?this.bb.readFloat64(this.bb_pos+l):0}CY_DOT_Z(){let l=this.bb.__offset(this.bb_pos,96);return l?this.bb.readFloat64(this.bb_pos+l):0}CY_DOT_X_DOT(){let l=this.bb.__offset(this.bb_pos,98);return l?this.bb.readFloat64(this.bb_pos+l):0}CY_DOT_Y_DOT(){let l=this.bb.__offset(this.bb_pos,100);return l?this.bb.readFloat64(this.bb_pos+l):0}CZ_DOT_X(){let l=this.bb.__offset(this.bb_pos,102);return l?this.bb.readFloat64(this.bb_pos+l):0}CZ_DOT_Y(){let l=this.bb.__offset(this.bb_pos,104);return l?this.bb.readFloat64(this.bb_pos+l):0}CZ_DOT_Z(){let l=this.bb.__offset(this.bb_pos,106);return l?this.bb.readFloat64(this.bb_pos+l):0}CZ_DOT_X_DOT(){let l=this.bb.__offset(this.bb_pos,108);return l?this.bb.readFloat64(this.bb_pos+l):0}CZ_DOT_Y_DOT(){let l=this.bb.__offset(this.bb_pos,110);return l?this.bb.readFloat64(this.bb_pos+l):0}CZ_DOT_Z_DOT(){let l=this.bb.__offset(this.bb_pos,112);return l?this.bb.readFloat64(this.bb_pos+l):0}USER_DEFINED_BIP_0044_TYPE(){let l=this.bb.__offset(this.bb_pos,114);return l?this.bb.readUint32(this.bb_pos+l):0}USER_DEFINED_OBJECT_DESIGNATOR(l){let Z=this.bb.__offset(this.bb_pos,116);return Z?this.bb.__string(this.bb_pos+Z,l):null}USER_DEFINED_EARTH_MODEL(l){let Z=this.bb.__offset(this.bb_pos,118);return Z?this.bb.__string(this.bb_pos+Z,l):null}USER_DEFINED_EPOCH_TIMESTAMP(){let l=this.bb.__offset(this.bb_pos,120);return l?this.bb.readFloat64(this.bb_pos+l):0}USER_DEFINED_MICROSECONDS(){let l=this.bb.__offset(this.bb_pos,122);return l?this.bb.readFloat64(this.bb_pos+l):0}static startOMM(l){l.startObject(60)}static addCcsdsOmmVers(l,Z){l.addFieldFloat64(0,Z,0)}static addCreationDate(l,Z){l.addFieldOffset(1,Z,0)}static addOriginator(l,Z){l.addFieldOffset(2,Z,0)}static addObjectName(l,Z){l.addFieldOffset(3,Z,0)}static addObjectId(l,Z){l.addFieldOffset(4,Z,0)}static addCenterName(l,Z){l.addFieldOffset(5,Z,0)}static addRefFrame(l,Z){l.addFieldInt8(6,Z,9)}static addRefFrameEpoch(l,Z){l.addFieldOffset(7,Z,0)}static addTimeSystem(l,Z){l.addFieldInt8(8,Z,11)}static addMeanElementTheory(l,Z){l.addFieldInt8(9,Z,0)}static addComment(l,Z){l.addFieldOffset(10,Z,0)}static addEpoch(l,Z){l.addFieldOffset(11,Z,0)}static addSemiMajorAxis(l,Z){l.addFieldFloat64(12,Z,0)}static addMeanMotion(l,Z){l.addFieldFloat64(13,Z,0)}static addEccentricity(l,Z){l.addFieldFloat64(14,Z,0)}static addInclination(l,Z){l.addFieldFloat64(15,Z,0)}static addRaOfAscNode(l,Z){l.addFieldFloat64(16,Z,0)}static addArgOfPericenter(l,Z){l.addFieldFloat64(17,Z,0)}static addMeanAnomaly(l,Z){l.addFieldFloat64(18,Z,0)}static addGm(l,Z){l.addFieldFloat64(19,Z,0)}static addMass(l,Z){l.addFieldFloat64(20,Z,0)}static addSolarRadArea(l,Z){l.addFieldFloat64(21,Z,0)}static addSolarRadCoeff(l,Z){l.addFieldFloat64(22,Z,0)}static addDragArea(l,Z){l.addFieldFloat64(23,Z,0)}static addDragCoeff(l,Z){l.addFieldFloat64(24,Z,0)}static addEphemerisType(l,Z){l.addFieldInt8(25,Z,1)}static addClassificationType(l,Z){l.addFieldOffset(26,Z,0)}static addNoradCatId(l,Z){l.addFieldInt32(27,Z,0)}static addElementSetNo(l,Z){l.addFieldInt32(28,Z,0)}static addRevAtEpoch(l,Z){l.addFieldFloat64(29,Z,0)}static addBstar(l,Z){l.addFieldFloat64(30,Z,0)}static addMeanMotionDot(l,Z){l.addFieldFloat64(31,Z,0)}static addMeanMotionDdot(l,Z){l.addFieldFloat64(32,Z,0)}static addCovRefFrame(l,Z){l.addFieldInt8(33,Z,0)}static addCxX(l,Z){l.addFieldFloat64(34,Z,0)}static addCyX(l,Z){l.addFieldFloat64(35,Z,0)}static addCyY(l,Z){l.addFieldFloat64(36,Z,0)}static addCzX(l,Z){l.addFieldFloat64(37,Z,0)}static addCzY(l,Z){l.addFieldFloat64(38,Z,0)}static addCzZ(l,Z){l.addFieldFloat64(39,Z,0)}static addCxDotX(l,Z){l.addFieldFloat64(40,Z,0)}static addCxDotY(l,Z){l.addFieldFloat64(41,Z,0)}static addCxDotZ(l,Z){l.addFieldFloat64(42,Z,0)}static addCxDotXDot(l,Z){l.addFieldFloat64(43,Z,0)}static addCyDotX(l,Z){l.addFieldFloat64(44,Z,0)}static addCyDotY(l,Z){l.addFieldFloat64(45,Z,0)}static addCyDotZ(l,Z){l.addFieldFloat64(46,Z,0)}static addCyDotXDot(l,Z){l.addFieldFloat64(47,Z,0)}static addCyDotYDot(l,Z){l.addFieldFloat64(48,Z,0)}static addCzDotX(l,Z){l.addFieldFloat64(49,Z,0)}static addCzDotY(l,Z){l.addFieldFloat64(50,Z,0)}static addCzDotZ(l,Z){l.addFieldFloat64(51,Z,0)}static addCzDotXDot(l,Z){l.addFieldFloat64(52,Z,0)}static addCzDotYDot(l,Z){l.addFieldFloat64(53,Z,0)}static addCzDotZDot(l,Z){l.addFieldFloat64(54,Z,0)}static addUserDefinedBip0044Type(l,Z){l.addFieldInt32(55,Z,0)}static addUserDefinedObjectDesignator(l,Z){l.addFieldOffset(56,Z,0)}static addUserDefinedEarthModel(l,Z){l.addFieldOffset(57,Z,0)}static addUserDefinedEpochTimestamp(l,Z){l.addFieldFloat64(58,Z,0)}static addUserDefinedMicroseconds(l,Z){l.addFieldFloat64(59,Z,0)}static endOMM(l){return l.endObject()}static finishOMMBuffer(l,Z){l.finish(Z,"$OMM")}static finishSizePrefixedOMMBuffer(l,Z){l.finish(Z,"$OMM",!0)}static createOMM(l,Z,U,A,t,m,i,n,o,h,R,c,Q,T,S,p,b,E,D,_,Y,K,ZV,j,mV,BV,W,VV,GV,rV,FV,k,UV,HV,yV,xV,bV,LV,Cl,pl,Yl,Hl,yl,Ll,VZ,lZ,Kl,bl,ol,vl,Fl,N,d,B,f,O,$,L,EV,MV,jV){return V.startOMM(l),V.addCcsdsOmmVers(l,Z),V.addCreationDate(l,U),V.addOriginator(l,A),V.addObjectName(l,t),V.addObjectId(l,m),V.addCenterName(l,i),V.addRefFrame(l,n),V.addRefFrameEpoch(l,o),V.addTimeSystem(l,h),V.addMeanElementTheory(l,R),V.addComment(l,c),V.addEpoch(l,Q),V.addSemiMajorAxis(l,T),V.addMeanMotion(l,S),V.addEccentricity(l,p),V.addInclination(l,b),V.addRaOfAscNode(l,E),V.addArgOfPericenter(l,D),V.addMeanAnomaly(l,_),V.addGm(l,Y),V.addMass(l,K),V.addSolarRadArea(l,ZV),V.addSolarRadCoeff(l,j),V.addDragArea(l,mV),V.addDragCoeff(l,BV),V.addEphemerisType(l,W),V.addClassificationType(l,VV),V.addNoradCatId(l,GV),V.addElementSetNo(l,rV),V.addRevAtEpoch(l,FV),V.addBstar(l,k),V.addMeanMotionDot(l,UV),V.addMeanMotionDdot(l,HV),V.addCovRefFrame(l,yV),V.addCxX(l,xV),V.addCyX(l,bV),V.addCyY(l,LV),V.addCzX(l,Cl),V.addCzY(l,pl),V.addCzZ(l,Yl),V.addCxDotX(l,Hl),V.addCxDotY(l,yl),V.addCxDotZ(l,Ll),V.addCxDotXDot(l,VZ),V.addCyDotX(l,lZ),V.addCyDotY(l,Kl),V.addCyDotZ(l,bl),V.addCyDotXDot(l,ol),V.addCyDotYDot(l,vl),V.addCzDotX(l,Fl),V.addCzDotY(l,N),V.addCzDotZ(l,d),V.addCzDotXDot(l,B),V.addCzDotYDot(l,f),V.addCzDotZDot(l,O),V.addUserDefinedBip0044Type(l,$),V.addUserDefinedObjectDesignator(l,L),V.addUserDefinedEarthModel(l,EV),V.addUserDefinedEpochTimestamp(l,MV),V.addUserDefinedMicroseconds(l,jV),V.endOMM(l)}unpack(){return new st(this.CCSDS_OMM_VERS(),this.CREATION_DATE(),this.ORIGINATOR(),this.OBJECT_NAME(),this.OBJECT_ID(),this.CENTER_NAME(),this.REF_FRAME(),this.REF_FRAME_EPOCH(),this.TIME_SYSTEM(),this.MEAN_ELEMENT_THEORY(),this.COMMENT(),this.EPOCH(),this.SEMI_MAJOR_AXIS(),this.MEAN_MOTION(),this.ECCENTRICITY(),this.INCLINATION(),this.RA_OF_ASC_NODE(),this.ARG_OF_PERICENTER(),this.MEAN_ANOMALY(),this.GM(),this.MASS(),this.SOLAR_RAD_AREA(),this.SOLAR_RAD_COEFF(),this.DRAG_AREA(),this.DRAG_COEFF(),this.EPHEMERIS_TYPE(),this.CLASSIFICATION_TYPE(),this.NORAD_CAT_ID(),this.ELEMENT_SET_NO(),this.REV_AT_EPOCH(),this.BSTAR(),this.MEAN_MOTION_DOT(),this.MEAN_MOTION_DDOT(),this.COV_REF_FRAME(),this.CX_X(),this.CY_X(),this.CY_Y(),this.CZ_X(),this.CZ_Y(),this.CZ_Z(),this.CX_DOT_X(),this.CX_DOT_Y(),this.CX_DOT_Z(),this.CX_DOT_X_DOT(),this.CY_DOT_X(),this.CY_DOT_Y(),this.CY_DOT_Z(),this.CY_DOT_X_DOT(),this.CY_DOT_Y_DOT(),this.CZ_DOT_X(),this.CZ_DOT_Y(),this.CZ_DOT_Z(),this.CZ_DOT_X_DOT(),this.CZ_DOT_Y_DOT(),this.CZ_DOT_Z_DOT(),this.USER_DEFINED_BIP_0044_TYPE(),this.USER_DEFINED_OBJECT_DESIGNATOR(),this.USER_DEFINED_EARTH_MODEL(),this.USER_DEFINED_EPOCH_TIMESTAMP(),this.USER_DEFINED_MICROSECONDS())}unpackTo(l){l.CCSDS_OMM_VERS=this.CCSDS_OMM_VERS(),l.CREATION_DATE=this.CREATION_DATE(),l.ORIGINATOR=this.ORIGINATOR(),l.OBJECT_NAME=this.OBJECT_NAME(),l.OBJECT_ID=this.OBJECT_ID(),l.CENTER_NAME=this.CENTER_NAME(),l.REF_FRAME=this.REF_FRAME(),l.REF_FRAME_EPOCH=this.REF_FRAME_EPOCH(),l.TIME_SYSTEM=this.TIME_SYSTEM(),l.MEAN_ELEMENT_THEORY=this.MEAN_ELEMENT_THEORY(),l.COMMENT=this.COMMENT(),l.EPOCH=this.EPOCH(),l.SEMI_MAJOR_AXIS=this.SEMI_MAJOR_AXIS(),l.MEAN_MOTION=this.MEAN_MOTION(),l.ECCENTRICITY=this.ECCENTRICITY(),l.INCLINATION=this.INCLINATION(),l.RA_OF_ASC_NODE=this.RA_OF_ASC_NODE(),l.ARG_OF_PERICENTER=this.ARG_OF_PERICENTER(),l.MEAN_ANOMALY=this.MEAN_ANOMALY(),l.GM=this.GM(),l.MASS=this.MASS(),l.SOLAR_RAD_AREA=this.SOLAR_RAD_AREA(),l.SOLAR_RAD_COEFF=this.SOLAR_RAD_COEFF(),l.DRAG_AREA=this.DRAG_AREA(),l.DRAG_COEFF=this.DRAG_COEFF(),l.EPHEMERIS_TYPE=this.EPHEMERIS_TYPE(),l.CLASSIFICATION_TYPE=this.CLASSIFICATION_TYPE(),l.NORAD_CAT_ID=this.NORAD_CAT_ID(),l.ELEMENT_SET_NO=this.ELEMENT_SET_NO(),l.REV_AT_EPOCH=this.REV_AT_EPOCH(),l.BSTAR=this.BSTAR(),l.MEAN_MOTION_DOT=this.MEAN_MOTION_DOT(),l.MEAN_MOTION_DDOT=this.MEAN_MOTION_DDOT(),l.COV_REF_FRAME=this.COV_REF_FRAME(),l.CX_X=this.CX_X(),l.CY_X=this.CY_X(),l.CY_Y=this.CY_Y(),l.CZ_X=this.CZ_X(),l.CZ_Y=this.CZ_Y(),l.CZ_Z=this.CZ_Z(),l.CX_DOT_X=this.CX_DOT_X(),l.CX_DOT_Y=this.CX_DOT_Y(),l.CX_DOT_Z=this.CX_DOT_Z(),l.CX_DOT_X_DOT=this.CX_DOT_X_DOT(),l.CY_DOT_X=this.CY_DOT_X(),l.CY_DOT_Y=this.CY_DOT_Y(),l.CY_DOT_Z=this.CY_DOT_Z(),l.CY_DOT_X_DOT=this.CY_DOT_X_DOT(),l.CY_DOT_Y_DOT=this.CY_DOT_Y_DOT(),l.CZ_DOT_X=this.CZ_DOT_X(),l.CZ_DOT_Y=this.CZ_DOT_Y(),l.CZ_DOT_Z=this.CZ_DOT_Z(),l.CZ_DOT_X_DOT=this.CZ_DOT_X_DOT(),l.CZ_DOT_Y_DOT=this.CZ_DOT_Y_DOT(),l.CZ_DOT_Z_DOT=this.CZ_DOT_Z_DOT(),l.USER_DEFINED_BIP_0044_TYPE=this.USER_DEFINED_BIP_0044_TYPE(),l.USER_DEFINED_OBJECT_DESIGNATOR=this.USER_DEFINED_OBJECT_DESIGNATOR(),l.USER_DEFINED_EARTH_MODEL=this.USER_DEFINED_EARTH_MODEL(),l.USER_DEFINED_EPOCH_TIMESTAMP=this.USER_DEFINED_EPOCH_TIMESTAMP(),l.USER_DEFINED_MICROSECONDS=this.USER_DEFINED_MICROSECONDS()}},st=class{constructor(l=0,Z=null,U=null,A=null,t=null,m=null,i=9,n=null,o=11,h=0,R=null,c=null,Q=0,T=0,S=0,p=0,b=0,E=0,D=0,_=0,Y=0,K=0,ZV=0,j=0,mV=0,BV=1,W=null,VV=0,GV=0,rV=0,FV=0,k=0,UV=0,HV=0,yV=0,xV=0,bV=0,LV=0,Cl=0,pl=0,Yl=0,Hl=0,yl=0,Ll=0,VZ=0,lZ=0,Kl=0,bl=0,ol=0,vl=0,Fl=0,N=0,d=0,B=0,f=0,O=0,$=null,L=null,EV=0,MV=0){this.CCSDS_OMM_VERS=l;this.CREATION_DATE=Z;this.ORIGINATOR=U;this.OBJECT_NAME=A;this.OBJECT_ID=t;this.CENTER_NAME=m;this.REF_FRAME=i;this.REF_FRAME_EPOCH=n;this.TIME_SYSTEM=o;this.MEAN_ELEMENT_THEORY=h;this.COMMENT=R;this.EPOCH=c;this.SEMI_MAJOR_AXIS=Q;this.MEAN_MOTION=T;this.ECCENTRICITY=S;this.INCLINATION=p;this.RA_OF_ASC_NODE=b;this.ARG_OF_PERICENTER=E;this.MEAN_ANOMALY=D;this.GM=_;this.MASS=Y;this.SOLAR_RAD_AREA=K;this.SOLAR_RAD_COEFF=ZV;this.DRAG_AREA=j;this.DRAG_COEFF=mV;this.EPHEMERIS_TYPE=BV;this.CLASSIFICATION_TYPE=W;this.NORAD_CAT_ID=VV;this.ELEMENT_SET_NO=GV;this.REV_AT_EPOCH=rV;this.BSTAR=FV;this.MEAN_MOTION_DOT=k;this.MEAN_MOTION_DDOT=UV;this.COV_REF_FRAME=HV;this.CX_X=yV;this.CY_X=xV;this.CY_Y=bV;this.CZ_X=LV;this.CZ_Y=Cl;this.CZ_Z=pl;this.CX_DOT_X=Yl;this.CX_DOT_Y=Hl;this.CX_DOT_Z=yl;this.CX_DOT_X_DOT=Ll;this.CY_DOT_X=VZ;this.CY_DOT_Y=lZ;this.CY_DOT_Z=Kl;this.CY_DOT_X_DOT=bl;this.CY_DOT_Y_DOT=ol;this.CZ_DOT_X=vl;this.CZ_DOT_Y=Fl;this.CZ_DOT_Z=N;this.CZ_DOT_X_DOT=d;this.CZ_DOT_Y_DOT=B;this.CZ_DOT_Z_DOT=f;this.USER_DEFINED_BIP_0044_TYPE=O;this.USER_DEFINED_OBJECT_DESIGNATOR=$;this.USER_DEFINED_EARTH_MODEL=L;this.USER_DEFINED_EPOCH_TIMESTAMP=EV;this.USER_DEFINED_MICROSECONDS=MV}pack(l){let Z=this.CREATION_DATE!==null?l.createString(this.CREATION_DATE):0,U=this.ORIGINATOR!==null?l.createString(this.ORIGINATOR):0,A=this.OBJECT_NAME!==null?l.createString(this.OBJECT_NAME):0,t=this.OBJECT_ID!==null?l.createString(this.OBJECT_ID):0,m=this.CENTER_NAME!==null?l.createString(this.CENTER_NAME):0,i=this.REF_FRAME_EPOCH!==null?l.createString(this.REF_FRAME_EPOCH):0,n=this.COMMENT!==null?l.createString(this.COMMENT):0,o=this.EPOCH!==null?l.createString(this.EPOCH):0,h=this.CLASSIFICATION_TYPE!==null?l.createString(this.CLASSIFICATION_TYPE):0,R=this.USER_DEFINED_OBJECT_DESIGNATOR!==null?l.createString(this.USER_DEFINED_OBJECT_DESIGNATOR):0,c=this.USER_DEFINED_EARTH_MODEL!==null?l.createString(this.USER_DEFINED_EARTH_MODEL):0;return Hm.createOMM(l,this.CCSDS_OMM_VERS,Z,U,A,t,m,this.REF_FRAME,i,this.TIME_SYSTEM,this.MEAN_ELEMENT_THEORY,n,o,this.SEMI_MAJOR_AXIS,this.MEAN_MOTION,this.ECCENTRICITY,this.INCLINATION,this.RA_OF_ASC_NODE,this.ARG_OF_PERICENTER,this.MEAN_ANOMALY,this.GM,this.MASS,this.SOLAR_RAD_AREA,this.SOLAR_RAD_COEFF,this.DRAG_AREA,this.DRAG_COEFF,this.EPHEMERIS_TYPE,h,this.NORAD_CAT_ID,this.ELEMENT_SET_NO,this.REV_AT_EPOCH,this.BSTAR,this.MEAN_MOTION_DOT,this.MEAN_MOTION_DDOT,this.COV_REF_FRAME,this.CX_X,this.CY_X,this.CY_Y,this.CZ_X,this.CZ_Y,this.CZ_Z,this.CX_DOT_X,this.CX_DOT_Y,this.CX_DOT_Z,this.CX_DOT_X_DOT,this.CY_DOT_X,this.CY_DOT_Y,this.CY_DOT_Z,this.CY_DOT_X_DOT,this.CY_DOT_Y_DOT,this.CZ_DOT_X,this.CZ_DOT_Y,this.CZ_DOT_Z,this.CZ_DOT_X_DOT,this.CZ_DOT_Y_DOT,this.CZ_DOT_Z_DOT,this.USER_DEFINED_BIP_0044_TYPE,R,c,this.USER_DEFINED_EPOCH_TIMESTAMP,this.USER_DEFINED_MICROSECONDS)}};var Lm=class V{constructor(){OU(this,"bb",null);OU(this,"bb_pos",0)}__init(l,Z){return this.bb_pos=l,this.bb=Z,this}static getRootAsCAT(l,Z){return(Z||new V).__init(l.readInt32(l.position())+l.position(),l)}static getSizePrefixedRootAsCAT(l,Z){return l.setPosition(l.position()+4),(Z||new V).__init(l.readInt32(l.position())+l.position(),l)}static bufferHasIdentifier(l){return l.__has_identifier("$CAT")}OBJECT_NAME(l){let Z=this.bb.__offset(this.bb_pos,4);return Z?this.bb.__string(this.bb_pos+Z,l):null}OBJECT_ID(l){let Z=this.bb.__offset(this.bb_pos,6);return Z?this.bb.__string(this.bb_pos+Z,l):null}NORAD_CAT_ID(){let l=this.bb.__offset(this.bb_pos,8);return l?this.bb.readUint32(this.bb_pos+l):0}OBJECT_TYPE(){let l=this.bb.__offset(this.bb_pos,10);return l?this.bb.readInt8(this.bb_pos+l):3}OPS_STATUS_CODE(){let l=this.bb.__offset(this.bb_pos,12);return l?this.bb.readInt8(this.bb_pos+l):7}OWNER(l){let Z=this.bb.__offset(this.bb_pos,14);return Z?this.bb.__string(this.bb_pos+Z,l):null}LAUNCH_DATE(l){let Z=this.bb.__offset(this.bb_pos,16);return Z?this.bb.__string(this.bb_pos+Z,l):null}LAUNCH_SITE(l){let Z=this.bb.__offset(this.bb_pos,18);return Z?this.bb.__string(this.bb_pos+Z,l):null}DECAY_DATE(l){let Z=this.bb.__offset(this.bb_pos,20);return Z?this.bb.__string(this.bb_pos+Z,l):null}PERIOD(){let l=this.bb.__offset(this.bb_pos,22);return l?this.bb.readFloat64(this.bb_pos+l):0}INCLINATION(){let l=this.bb.__offset(this.bb_pos,24);return l?this.bb.readFloat64(this.bb_pos+l):0}APOGEE(){let l=this.bb.__offset(this.bb_pos,26);return l?this.bb.readFloat64(this.bb_pos+l):0}PERIGEE(){let l=this.bb.__offset(this.bb_pos,28);return l?this.bb.readFloat64(this.bb_pos+l):0}RCS(){let l=this.bb.__offset(this.bb_pos,30);return l?this.bb.readFloat64(this.bb_pos+l):0}DATA_STATUS_CODE(){let l=this.bb.__offset(this.bb_pos,32);return l?this.bb.readInt8(this.bb_pos+l):0}ORBIT_CENTER(l){let Z=this.bb.__offset(this.bb_pos,34);return Z?this.bb.__string(this.bb_pos+Z,l):null}ORBIT_TYPE(){let l=this.bb.__offset(this.bb_pos,36);return l?this.bb.readInt8(this.bb_pos+l):0}DEPLOYMENT_DATE(l){let Z=this.bb.__offset(this.bb_pos,38);return Z?this.bb.__string(this.bb_pos+Z,l):null}MANEUVERABLE(){let l=this.bb.__offset(this.bb_pos,40);return l?!!this.bb.readInt8(this.bb_pos+l):!1}SIZE(){let l=this.bb.__offset(this.bb_pos,42);return l?this.bb.readFloat64(this.bb_pos+l):0}MASS(){let l=this.bb.__offset(this.bb_pos,44);return l?this.bb.readFloat64(this.bb_pos+l):0}MASS_TYPE(){let l=this.bb.__offset(this.bb_pos,46);return l?this.bb.readInt8(this.bb_pos+l):0}static startCAT(l){l.startObject(22)}static addObjectName(l,Z){l.addFieldOffset(0,Z,0)}static addObjectId(l,Z){l.addFieldOffset(1,Z,0)}static addNoradCatId(l,Z){l.addFieldInt32(2,Z,0)}static addObjectType(l,Z){l.addFieldInt8(3,Z,3)}static addOpsStatusCode(l,Z){l.addFieldInt8(4,Z,7)}static addOwner(l,Z){l.addFieldOffset(5,Z,0)}static addLaunchDate(l,Z){l.addFieldOffset(6,Z,0)}static addLaunchSite(l,Z){l.addFieldOffset(7,Z,0)}static addDecayDate(l,Z){l.addFieldOffset(8,Z,0)}static addPeriod(l,Z){l.addFieldFloat64(9,Z,0)}static addInclination(l,Z){l.addFieldFloat64(10,Z,0)}static addApogee(l,Z){l.addFieldFloat64(11,Z,0)}static addPerigee(l,Z){l.addFieldFloat64(12,Z,0)}static addRcs(l,Z){l.addFieldFloat64(13,Z,0)}static addDataStatusCode(l,Z){l.addFieldInt8(14,Z,0)}static addOrbitCenter(l,Z){l.addFieldOffset(15,Z,0)}static addOrbitType(l,Z){l.addFieldInt8(16,Z,0)}static addDeploymentDate(l,Z){l.addFieldOffset(17,Z,0)}static addManeuverable(l,Z){l.addFieldInt8(18,+Z,0)}static addSize(l,Z){l.addFieldFloat64(19,Z,0)}static addMass(l,Z){l.addFieldFloat64(20,Z,0)}static addMassType(l,Z){l.addFieldInt8(21,Z,0)}static endCAT(l){return l.endObject()}static finishCATBuffer(l,Z){l.finish(Z,"$CAT")}static finishSizePrefixedCATBuffer(l,Z){l.finish(Z,"$CAT",!0)}static createCAT(l,Z,U,A,t,m,i,n,o,h,R,c,Q,T,S,p,b,E,D,_,Y,K,ZV){return V.startCAT(l),V.addObjectName(l,Z),V.addObjectId(l,U),V.addNoradCatId(l,A),V.addObjectType(l,t),V.addOpsStatusCode(l,m),V.addOwner(l,i),V.addLaunchDate(l,n),V.addLaunchSite(l,o),V.addDecayDate(l,h),V.addPeriod(l,R),V.addInclination(l,c),V.addApogee(l,Q),V.addPerigee(l,T),V.addRcs(l,S),V.addDataStatusCode(l,p),V.addOrbitCenter(l,b),V.addOrbitType(l,E),V.addDeploymentDate(l,D),V.addManeuverable(l,_),V.addSize(l,Y),V.addMass(l,K),V.addMassType(l,ZV),V.endCAT(l)}unpack(){return new at(this.OBJECT_NAME(),this.OBJECT_ID(),this.NORAD_CAT_ID(),this.OBJECT_TYPE(),this.OPS_STATUS_CODE(),this.OWNER(),this.LAUNCH_DATE(),this.LAUNCH_SITE(),this.DECAY_DATE(),this.PERIOD(),this.INCLINATION(),this.APOGEE(),this.PERIGEE(),this.RCS(),this.DATA_STATUS_CODE(),this.ORBIT_CENTER(),this.ORBIT_TYPE(),this.DEPLOYMENT_DATE(),this.MANEUVERABLE(),this.SIZE(),this.MASS(),this.MASS_TYPE())}unpackTo(l){l.OBJECT_NAME=this.OBJECT_NAME(),l.OBJECT_ID=this.OBJECT_ID(),l.NORAD_CAT_ID=this.NORAD_CAT_ID(),l.OBJECT_TYPE=this.OBJECT_TYPE(),l.OPS_STATUS_CODE=this.OPS_STATUS_CODE(),l.OWNER=this.OWNER(),l.LAUNCH_DATE=this.LAUNCH_DATE(),l.LAUNCH_SITE=this.LAUNCH_SITE(),l.DECAY_DATE=this.DECAY_DATE(),l.PERIOD=this.PERIOD(),l.INCLINATION=this.INCLINATION(),l.APOGEE=this.APOGEE(),l.PERIGEE=this.PERIGEE(),l.RCS=this.RCS(),l.DATA_STATUS_CODE=this.DATA_STATUS_CODE(),l.ORBIT_CENTER=this.ORBIT_CENTER(),l.ORBIT_TYPE=this.ORBIT_TYPE(),l.DEPLOYMENT_DATE=this.DEPLOYMENT_DATE(),l.MANEUVERABLE=this.MANEUVERABLE(),l.SIZE=this.SIZE(),l.MASS=this.MASS(),l.MASS_TYPE=this.MASS_TYPE()}},at=class{constructor(l=null,Z=null,U=0,A=3,t=7,m=null,i=null,n=null,o=null,h=0,R=0,c=0,Q=0,T=0,S=0,p=null,b=0,E=null,D=!1,_=0,Y=0,K=0){this.OBJECT_NAME=l;this.OBJECT_ID=Z;this.NORAD_CAT_ID=U;this.OBJECT_TYPE=A;this.OPS_STATUS_CODE=t;this.OWNER=m;this.LAUNCH_DATE=i;this.LAUNCH_SITE=n;this.DECAY_DATE=o;this.PERIOD=h;this.INCLINATION=R;this.APOGEE=c;this.PERIGEE=Q;this.RCS=T;this.DATA_STATUS_CODE=S;this.ORBIT_CENTER=p;this.ORBIT_TYPE=b;this.DEPLOYMENT_DATE=E;this.MANEUVERABLE=D;this.SIZE=_;this.MASS=Y;this.MASS_TYPE=K}pack(l){let Z=this.OBJECT_NAME!==null?l.createString(this.OBJECT_NAME):0,U=this.OBJECT_ID!==null?l.createString(this.OBJECT_ID):0,A=this.OWNER!==null?l.createString(this.OWNER):0,t=this.LAUNCH_DATE!==null?l.createString(this.LAUNCH_DATE):0,m=this.LAUNCH_SITE!==null?l.createString(this.LAUNCH_SITE):0,i=this.DECAY_DATE!==null?l.createString(this.DECAY_DATE):0,n=this.ORBIT_CENTER!==null?l.createString(this.ORBIT_CENTER):0,o=this.DEPLOYMENT_DATE!==null?l.createString(this.DEPLOYMENT_DATE):0;return Lm.createCAT(l,Z,U,this.NORAD_CAT_ID,this.OBJECT_TYPE,this.OPS_STATUS_CODE,A,t,m,i,this.PERIOD,this.INCLINATION,this.APOGEE,this.PERIGEE,this.RCS,this.DATA_STATUS_CODE,n,this.ORBIT_TYPE,o,this.MANEUVERABLE,this.SIZE,this.MASS,this.MASS_TYPE)}};Number.prototype.map=function(V,l,Z,U){return(this-V)*(U-Z)/(l-V)+Z};var he=class extends ZA{constructor(l,Z,U,A){super(l),this.constructor.prototype.wasmSchema={},this._position=new VR,this._spaceCatalog=U,this._velocity={getValue:(t,m)=>this._velocity.getValueInReferenceFrame(t,0,m),getValueInReferenceFrame:(t,m,i)=>{let n=new Float64Array(Z.wasm.HEAP8.buffer,U.getVelocity(this.properties.wasmSpaceEntity,QV.toDate(t).getTime(),m!==ul.TEME),3);if(s(i)||(i=new w),i=w.fromArray(n),m===ul.INERTIAL){let o=QZ.computeFixedToIcrfMatrix(t);if(s(o)){let h=new w;gl.multiplyByVector(o,i,h),i=h}}return i}},Object.defineProperty(this,"velocity",{get:()=>this._velocity,set:()=>{}}),Object.defineProperties(this._position,{isConstant:{get:()=>!1},_referenceFrame:{get:()=>this.entityCollection.referenceFrame},referenceFrame:{get:()=>this._referenceFrame}}),this._position.getValue=(t,m)=>this._position.getValueInReferenceFrame(t,0,m),this._position.getValueInReferenceFrame=(t,m,i)=>{let n=new Float64Array(Z.wasm.HEAP8.buffer,U.getPositionInReferenceFrame(this.properties.wasmSpaceEntity,QV.toDate(t).getTime(),m!==ul.TEME),3);if(s(i)||(i=new w),i=w.fromArray(n),m===ul.INERTIAL){let o=QZ.computeFixedToIcrfMatrix(t);if(s(o)){let h=new w;gl.multiplyByVector(o,i,h),i=h}}return i},this.children={add:t=>(t=this.entityCollection.add(t),this.entityCollection.allValues||(Object.defineProperty(this.entityCollection,"allValues",{get:function(){return this._entities.values}}),Object.defineProperty(this.entityCollection,"values",{get:function(){return this._entities.values.filter(m=>!m._isChild)}})),t._isChild=!0,t.parent=this,t.position=this.position,t),remove:t=>{this.entityCollection.remove(t);let m=this._children.indexOf(this);this._children.splice(m,1)},values:this._children},this.loadOMM(A)}loadOMM(l){let Z=this._spaceCatalog.registerEntityOMM("",l.EPOCH,l.MEAN_MOTION,l.ECCENTRICITY,l.INCLINATION,l.RA_OF_ASC_NODE,l.ARG_OF_PERICENTER,l.MEAN_ANOMALY,0,0,"",l.NORAD_CAT_ID,0,0,l.BSTAR,0,0,!0,0,0,0,this.properties.wasmSpaceEntity||null);this.properties.wasmSpaceEntity=Z,this.properties.CAT=this.properties._CAT||new at,this.properties._CAT._value.APOGEE=Z.apogee,this.properties._CAT._value.PERIGEE=Z.perigee,this.properties._CAT._value.PERIOD=Z.period_sec,this.properties.OMM=this.properties._OMM||new st,this.properties._OMM._value.ECCENTRICITY=Z.ecco,this.properties._OMM._value.SEMI_MAJOR_AXIS=Z.semi_major_axis/1e3,this.properties._OMM._value.SEMI_MINOR_AXIS=Z.semi_minor_axis/1e3,this.array_index=this.properties.wasmSpaceEntity.array_index,this.samplesPerPeriod=180,this.extraEpochSamples=60,this.resolutionAtEpoch=5,this.autoEpochResolution=!0,this.epochBlockSize=.5,this.extraSamples=5,this.eccentricityThreshold=.2,this.targetIntervalCount=20,this._orbitShowing=!1,this._coverageShowing=!1,this.referenceFrame=ul.VVLH,this._position._clearCache=!0}showCoverage(l={show:!1}){this._coverageShowing=l.show,l.show?this.entityCollection.owner._coverageGroup.push(this):this.entityCollection.owner._coverageGroup.remove({id:this.id})}showOrbit(l={show:!1}){if(this._orbitShowing=l.show,!l.show){this.path=null;return}l&&(l.color=l.material),l?.referenceEntity?this._localReferenceEntity=l.referenceEntity:this._localReferenceEntity=void 0,this.path=this.path||{};let{material:Z,width:U,leadTime:A,trailTime:t,resolution:m}=this.path;this.path=Object.assign({},{material:Z||z.WHITE,width:U||1.25,leadTime:A||5e3,trailTime:t||5e3,resolution:m||120,show:!0},l);let{ecco:i,period_sec:n}=this.properties.wasmSpaceEntity,o=i<this.eccentricityThreshold;o||(this.extraSamples=i.map(this.eccentricityThreshold,.9,10,50),this.samplesPerPeriod=i.map(this.eccentricityThreshold,.9,180,1440));let{samplesPerPeriod:h}=this,c=n/(o?1.8:2);this.path.leadTime=c,this.path.trailTime=c;let Q={...this,period:n,resolution:n/h};this.path.resolution=o?{...Q,method:"timeStep"}:{...Q,method:"trueAnomaly",period:n,samplesPerPeriod:h}}};var Mc=Object.create,Pm=Object.defineProperty,_c=Object.getOwnPropertyDescriptor,iR=Object.getOwnPropertyNames,Oc=Object.getPrototypeOf,wc=Object.prototype.hasOwnProperty,jm=(V,l)=>function(){return l||(0,V[iR(V)[0]])((l={exports:{}}).exports,l),l.exports},GU=(V,l)=>{for(var Z in l)Pm(V,Z,{get:l[Z],enumerable:!0})},Yc=(V,l,Z,U)=>{if(l&&typeof l=="object"||typeof l=="function")for(let A of iR(l))!wc.call(V,A)&&A!==Z&&Pm(V,A,{get:()=>l[A],enumerable:!(U=_c(l,A))||U.enumerable});return V},yc=(V,l,Z)=>(Z=V!=null?Mc(Oc(V)):{},Yc(l||!V||!V.__esModule?Pm(Z,"default",{value:V,enumerable:!0}):Z,V)),vc=jm({"../../node_modules/base64-js/index.js"(V){"use strict";V.byteLength=n,V.toByteArray=h,V.fromByteArray=Q;var l=[],Z=[],U=typeof Uint8Array<"u"?Uint8Array:Array,A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(t=0,m=A.length;t<m;++t)l[t]=A[t],Z[A.charCodeAt(t)]=t;var t,m;Z["-".charCodeAt(0)]=62,Z["_".charCodeAt(0)]=63;function i(T){var S=T.length;if(S%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var p=T.indexOf("=");p===-1&&(p=S);var b=p===S?0:4-p%4;return[p,b]}function n(T){var S=i(T),p=S[0],b=S[1];return(p+b)*3/4-b}function o(T,S,p){return(S+p)*3/4-p}function h(T){var S,p=i(T),b=p[0],E=p[1],D=new U(o(T,b,E)),_=0,Y=E>0?b-4:b,K;for(K=0;K<Y;K+=4)S=Z[T.charCodeAt(K)]<<18|Z[T.charCodeAt(K+1)]<<12|Z[T.charCodeAt(K+2)]<<6|Z[T.charCodeAt(K+3)],D[_++]=S>>16&255,D[_++]=S>>8&255,D[_++]=S&255;return E===2&&(S=Z[T.charCodeAt(K)]<<2|Z[T.charCodeAt(K+1)]>>4,D[_++]=S&255),E===1&&(S=Z[T.charCodeAt(K)]<<10|Z[T.charCodeAt(K+1)]<<4|Z[T.charCodeAt(K+2)]>>2,D[_++]=S>>8&255,D[_++]=S&255),D}function R(T){return l[T>>18&63]+l[T>>12&63]+l[T>>6&63]+l[T&63]}function c(T,S,p){for(var b,E=[],D=S;D<p;D+=3)b=(T[D]<<16&16711680)+(T[D+1]<<8&65280)+(T[D+2]&255),E.push(R(b));return E.join("")}function Q(T){for(var S,p=T.length,b=p%3,E=[],D=16383,_=0,Y=p-b;_<Y;_+=D)E.push(c(T,_,_+D>Y?Y:_+D));return b===1?(S=T[p-1],E.push(l[S>>2]+l[S<<4&63]+"==")):b===2&&(S=(T[p-2]<<8)+T[p-1],E.push(l[S>>10]+l[S>>4&63]+l[S<<2&63]+"=")),E.join("")}}}),zc=jm({"../../node_modules/ieee754/index.js"(V){V.read=function(l,Z,U,A,t){var m,i,n=t*8-A-1,o=(1<<n)-1,h=o>>1,R=-7,c=U?t-1:0,Q=U?-1:1,T=l[Z+c];for(c+=Q,m=T&(1<<-R)-1,T>>=-R,R+=n;R>0;m=m*256+l[Z+c],c+=Q,R-=8);for(i=m&(1<<-R)-1,m>>=-R,R+=A;R>0;i=i*256+l[Z+c],c+=Q,R-=8);if(m===0)m=1-h;else{if(m===o)return i?NaN:(T?-1:1)*(1/0);i=i+Math.pow(2,A),m=m-h}return(T?-1:1)*i*Math.pow(2,m-A)},V.write=function(l,Z,U,A,t,m){var i,n,o,h=m*8-t-1,R=(1<<h)-1,c=R>>1,Q=t===23?Math.pow(2,-24)-Math.pow(2,-77):0,T=A?0:m-1,S=A?1:-1,p=Z<0||Z===0&&1/Z<0?1:0;for(Z=Math.abs(Z),isNaN(Z)||Z===1/0?(n=isNaN(Z)?1:0,i=R):(i=Math.floor(Math.log(Z)/Math.LN2),Z*(o=Math.pow(2,-i))<1&&(i--,o*=2),i+c>=1?Z+=Q/o:Z+=Q*Math.pow(2,1-c),Z*o>=2&&(i++,o/=2),i+c>=R?(n=0,i=R):i+c>=1?(n=(Z*o-1)*Math.pow(2,t),i=i+c):(n=Z*Math.pow(2,c-1)*Math.pow(2,t),i=0));t>=8;l[U+T]=n&255,T+=S,n/=256,t-=8);for(i=i<<t|n,h+=t;h>0;l[U+T]=i&255,T+=S,i/=256,h-=8);l[U+T-S]|=p*128}}}),kc=jm({"../../node_modules/buffer/index.js"(V){"use strict";var l=vc(),Z=zc(),U=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;V.Buffer=i,V.SlowBuffer=b,V.INSPECT_MAX_BYTES=50;var A=2147483647;V.kMaxLength=A,i.TYPED_ARRAY_SUPPORT=t(),!i.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function t(){try{var N=new Uint8Array(1),d={foo:function(){return 42}};return Object.setPrototypeOf(d,Uint8Array.prototype),Object.setPrototypeOf(N,d),N.foo()===42}catch{return!1}}Object.defineProperty(i.prototype,"parent",{enumerable:!0,get:function(){if(i.isBuffer(this))return this.buffer}}),Object.defineProperty(i.prototype,"offset",{enumerable:!0,get:function(){if(i.isBuffer(this))return this.byteOffset}});function m(N){if(N>A)throw new RangeError('The value "'+N+'" is invalid for option "size"');var d=new Uint8Array(N);return Object.setPrototypeOf(d,i.prototype),d}function i(N,d,B){if(typeof N=="number"){if(typeof d=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return R(N)}return n(N,d,B)}i.poolSize=8192;function n(N,d,B){if(typeof N=="string")return c(N,d);if(ArrayBuffer.isView(N))return Q(N);if(N==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof N);if(ol(N,ArrayBuffer)||N&&ol(N.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ol(N,SharedArrayBuffer)||N&&ol(N.buffer,SharedArrayBuffer)))return T(N,d,B);if(typeof N=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var f=N.valueOf&&N.valueOf();if(f!=null&&f!==N)return i.from(f,d,B);var O=S(N);if(O)return O;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof N[Symbol.toPrimitive]=="function")return i.from(N[Symbol.toPrimitive]("string"),d,B);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof N)}i.from=function(N,d,B){return n(N,d,B)},Object.setPrototypeOf(i.prototype,Uint8Array.prototype),Object.setPrototypeOf(i,Uint8Array);function o(N){if(typeof N!="number")throw new TypeError('"size" argument must be of type number');if(N<0)throw new RangeError('The value "'+N+'" is invalid for option "size"')}function h(N,d,B){return o(N),N<=0?m(N):d!==void 0?typeof B=="string"?m(N).fill(d,B):m(N).fill(d):m(N)}i.alloc=function(N,d,B){return h(N,d,B)};function R(N){return o(N),m(N<0?0:p(N)|0)}i.allocUnsafe=function(N){return R(N)},i.allocUnsafeSlow=function(N){return R(N)};function c(N,d){if((typeof d!="string"||d==="")&&(d="utf8"),!i.isEncoding(d))throw new TypeError("Unknown encoding: "+d);var B=E(N,d)|0,f=m(B),O=f.write(N,d);return O!==B&&(f=f.slice(0,O)),f}function Q(N){for(var d=N.length<0?0:p(N.length)|0,B=m(d),f=0;f<d;f+=1)B[f]=N[f]&255;return B}function T(N,d,B){if(d<0||N.byteLength<d)throw new RangeError('"offset" is outside of buffer bounds');if(N.byteLength<d+(B||0))throw new RangeError('"length" is outside of buffer bounds');var f;return d===void 0&&B===void 0?f=new Uint8Array(N):B===void 0?f=new Uint8Array(N,d):f=new Uint8Array(N,d,B),Object.setPrototypeOf(f,i.prototype),f}function S(N){if(i.isBuffer(N)){var d=p(N.length)|0,B=m(d);return B.length===0||N.copy(B,0,0,d),B}if(N.length!==void 0)return typeof N.length!="number"||vl(N.length)?m(0):Q(N);if(N.type==="Buffer"&&Array.isArray(N.data))return Q(N.data)}function p(N){if(N>=A)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+A.toString(16)+" bytes");return N|0}function b(N){return+N!=N&&(N=0),i.alloc(+N)}i.isBuffer=function(d){return d!=null&&d._isBuffer===!0&&d!==i.prototype},i.compare=function(d,B){if(ol(d,Uint8Array)&&(d=i.from(d,d.offset,d.byteLength)),ol(B,Uint8Array)&&(B=i.from(B,B.offset,B.byteLength)),!i.isBuffer(d)||!i.isBuffer(B))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(d===B)return 0;for(var f=d.length,O=B.length,$=0,L=Math.min(f,O);$<L;++$)if(d[$]!==B[$]){f=d[$],O=B[$];break}return f<O?-1:O<f?1:0},i.isEncoding=function(d){switch(String(d).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.concat=function(d,B){if(!Array.isArray(d))throw new TypeError('"list" argument must be an Array of Buffers');if(d.length===0)return i.alloc(0);var f;if(B===void 0)for(B=0,f=0;f<d.length;++f)B+=d[f].length;var O=i.allocUnsafe(B),$=0;for(f=0;f<d.length;++f){var L=d[f];if(ol(L,Uint8Array)&&(L=i.from(L)),!i.isBuffer(L))throw new TypeError('"list" argument must be an Array of Buffers');L.copy(O,$),$+=L.length}return O};function E(N,d){if(i.isBuffer(N))return N.length;if(ArrayBuffer.isView(N)||ol(N,ArrayBuffer))return N.byteLength;if(typeof N!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof N);var B=N.length,f=arguments.length>2&&arguments[2]===!0;if(!f&&B===0)return 0;for(var O=!1;;)switch(d){case"ascii":case"latin1":case"binary":return B;case"utf8":case"utf-8":return Ll(N).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B*2;case"hex":return B>>>1;case"base64":return Kl(N).length;default:if(O)return f?-1:Ll(N).length;d=(""+d).toLowerCase(),O=!0}}i.byteLength=E;function D(N,d,B){var f=!1;if((d===void 0||d<0)&&(d=0),d>this.length||((B===void 0||B>this.length)&&(B=this.length),B<=0)||(B>>>=0,d>>>=0,B<=d))return"";for(N||(N="utf8");;)switch(N){case"hex":return yV(this,d,B);case"utf8":case"utf-8":return rV(this,d,B);case"ascii":return UV(this,d,B);case"latin1":case"binary":return HV(this,d,B);case"base64":return GV(this,d,B);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return xV(this,d,B);default:if(f)throw new TypeError("Unknown encoding: "+N);N=(N+"").toLowerCase(),f=!0}}i.prototype._isBuffer=!0;function _(N,d,B){var f=N[d];N[d]=N[B],N[B]=f}i.prototype.swap16=function(){var d=this.length;if(d%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var B=0;B<d;B+=2)_(this,B,B+1);return this},i.prototype.swap32=function(){var d=this.length;if(d%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var B=0;B<d;B+=4)_(this,B,B+3),_(this,B+1,B+2);return this},i.prototype.swap64=function(){var d=this.length;if(d%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var B=0;B<d;B+=8)_(this,B,B+7),_(this,B+1,B+6),_(this,B+2,B+5),_(this,B+3,B+4);return this},i.prototype.toString=function(){var d=this.length;return d===0?"":arguments.length===0?rV(this,0,d):D.apply(this,arguments)},i.prototype.toLocaleString=i.prototype.toString,i.prototype.equals=function(d){if(!i.isBuffer(d))throw new TypeError("Argument must be a Buffer");return this===d?!0:i.compare(this,d)===0},i.prototype.inspect=function(){var d="",B=V.INSPECT_MAX_BYTES;return d=this.toString("hex",0,B).replace(/(.{2})/g,"$1 ").trim(),this.length>B&&(d+=" ... "),"<Buffer "+d+">"},U&&(i.prototype[U]=i.prototype.inspect),i.prototype.compare=function(d,B,f,O,$){if(ol(d,Uint8Array)&&(d=i.from(d,d.offset,d.byteLength)),!i.isBuffer(d))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof d);if(B===void 0&&(B=0),f===void 0&&(f=d?d.length:0),O===void 0&&(O=0),$===void 0&&($=this.length),B<0||f>d.length||O<0||$>this.length)throw new RangeError("out of range index");if(O>=$&&B>=f)return 0;if(O>=$)return-1;if(B>=f)return 1;if(B>>>=0,f>>>=0,O>>>=0,$>>>=0,this===d)return 0;for(var L=$-O,EV=f-B,MV=Math.min(L,EV),jV=this.slice(O,$),DV=d.slice(B,f),zV=0;zV<MV;++zV)if(jV[zV]!==DV[zV]){L=jV[zV],EV=DV[zV];break}return L<EV?-1:EV<L?1:0};function Y(N,d,B,f,O){if(N.length===0)return-1;if(typeof B=="string"?(f=B,B=0):B>2147483647?B=2147483647:B<-2147483648&&(B=-2147483648),B=+B,vl(B)&&(B=O?0:N.length-1),B<0&&(B=N.length+B),B>=N.length){if(O)return-1;B=N.length-1}else if(B<0)if(O)B=0;else return-1;if(typeof d=="string"&&(d=i.from(d,f)),i.isBuffer(d))return d.length===0?-1:K(N,d,B,f,O);if(typeof d=="number")return d=d&255,typeof Uint8Array.prototype.indexOf=="function"?O?Uint8Array.prototype.indexOf.call(N,d,B):Uint8Array.prototype.lastIndexOf.call(N,d,B):K(N,[d],B,f,O);throw new TypeError("val must be string, number or Buffer")}function K(N,d,B,f,O){var $=1,L=N.length,EV=d.length;if(f!==void 0&&(f=String(f).toLowerCase(),f==="ucs2"||f==="ucs-2"||f==="utf16le"||f==="utf-16le")){if(N.length<2||d.length<2)return-1;$=2,L/=2,EV/=2,B/=2}function MV(yW,vW){return $===1?yW[vW]:yW.readUInt16BE(vW*$)}var jV;if(O){var DV=-1;for(jV=B;jV<L;jV++)if(MV(N,jV)===MV(d,DV===-1?0:jV-DV)){if(DV===-1&&(DV=jV),jV-DV+1===EV)return DV*$}else DV!==-1&&(jV-=jV-DV),DV=-1}else for(B+EV>L&&(B=L-EV),jV=B;jV>=0;jV--){for(var zV=!0,nW=0;nW<EV;nW++)if(MV(N,jV+nW)!==MV(d,nW)){zV=!1;break}if(zV)return jV}return-1}i.prototype.includes=function(d,B,f){return this.indexOf(d,B,f)!==-1},i.prototype.indexOf=function(d,B,f){return Y(this,d,B,f,!0)},i.prototype.lastIndexOf=function(d,B,f){return Y(this,d,B,f,!1)};function ZV(N,d,B,f){B=Number(B)||0;var O=N.length-B;f?(f=Number(f),f>O&&(f=O)):f=O;var $=d.length;f>$/2&&(f=$/2);for(var L=0;L<f;++L){var EV=parseInt(d.substr(L*2,2),16);if(vl(EV))return L;N[B+L]=EV}return L}function j(N,d,B,f){return bl(Ll(d,N.length-B),N,B,f)}function mV(N,d,B,f){return bl(VZ(d),N,B,f)}function BV(N,d,B,f){return mV(N,d,B,f)}function W(N,d,B,f){return bl(Kl(d),N,B,f)}function VV(N,d,B,f){return bl(lZ(d,N.length-B),N,B,f)}i.prototype.write=function(d,B,f,O){if(B===void 0)O="utf8",f=this.length,B=0;else if(f===void 0&&typeof B=="string")O=B,f=this.length,B=0;else if(isFinite(B))B=B>>>0,isFinite(f)?(f=f>>>0,O===void 0&&(O="utf8")):(O=f,f=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var $=this.length-B;if((f===void 0||f>$)&&(f=$),d.length>0&&(f<0||B<0)||B>this.length)throw new RangeError("Attempt to write outside buffer bounds");O||(O="utf8");for(var L=!1;;)switch(O){case"hex":return ZV(this,d,B,f);case"utf8":case"utf-8":return j(this,d,B,f);case"ascii":return mV(this,d,B,f);case"latin1":case"binary":return BV(this,d,B,f);case"base64":return W(this,d,B,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return VV(this,d,B,f);default:if(L)throw new TypeError("Unknown encoding: "+O);O=(""+O).toLowerCase(),L=!0}},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function GV(N,d,B){return d===0&&B===N.length?l.fromByteArray(N):l.fromByteArray(N.slice(d,B))}function rV(N,d,B){B=Math.min(N.length,B);for(var f=[],O=d;O<B;){var $=N[O],L=null,EV=$>239?4:$>223?3:$>191?2:1;if(O+EV<=B){var MV,jV,DV,zV;switch(EV){case 1:$<128&&(L=$);break;case 2:MV=N[O+1],(MV&192)===128&&(zV=($&31)<<6|MV&63,zV>127&&(L=zV));break;case 3:MV=N[O+1],jV=N[O+2],(MV&192)===128&&(jV&192)===128&&(zV=($&15)<<12|(MV&63)<<6|jV&63,zV>2047&&(zV<55296||zV>57343)&&(L=zV));break;case 4:MV=N[O+1],jV=N[O+2],DV=N[O+3],(MV&192)===128&&(jV&192)===128&&(DV&192)===128&&(zV=($&15)<<18|(MV&63)<<12|(jV&63)<<6|DV&63,zV>65535&&zV<1114112&&(L=zV))}}L===null?(L=65533,EV=1):L>65535&&(L-=65536,f.push(L>>>10&1023|55296),L=56320|L&1023),f.push(L),O+=EV}return k(f)}var FV=4096;function k(N){var d=N.length;if(d<=FV)return String.fromCharCode.apply(String,N);for(var B="",f=0;f<d;)B+=String.fromCharCode.apply(String,N.slice(f,f+=FV));return B}function UV(N,d,B){var f="";B=Math.min(N.length,B);for(var O=d;O<B;++O)f+=String.fromCharCode(N[O]&127);return f}function HV(N,d,B){var f="";B=Math.min(N.length,B);for(var O=d;O<B;++O)f+=String.fromCharCode(N[O]);return f}function yV(N,d,B){var f=N.length;(!d||d<0)&&(d=0),(!B||B<0||B>f)&&(B=f);for(var O="",$=d;$<B;++$)O+=Fl[N[$]];return O}function xV(N,d,B){for(var f=N.slice(d,B),O="",$=0;$<f.length;$+=2)O+=String.fromCharCode(f[$]+f[$+1]*256);return O}i.prototype.slice=function(d,B){var f=this.length;d=~~d,B=B===void 0?f:~~B,d<0?(d+=f,d<0&&(d=0)):d>f&&(d=f),B<0?(B+=f,B<0&&(B=0)):B>f&&(B=f),B<d&&(B=d);var O=this.subarray(d,B);return Object.setPrototypeOf(O,i.prototype),O};function bV(N,d,B){if(N%1!==0||N<0)throw new RangeError("offset is not uint");if(N+d>B)throw new RangeError("Trying to access beyond buffer length")}i.prototype.readUIntLE=function(d,B,f){d=d>>>0,B=B>>>0,f||bV(d,B,this.length);for(var O=this[d],$=1,L=0;++L<B&&($*=256);)O+=this[d+L]*$;return O},i.prototype.readUIntBE=function(d,B,f){d=d>>>0,B=B>>>0,f||bV(d,B,this.length);for(var O=this[d+--B],$=1;B>0&&($*=256);)O+=this[d+--B]*$;return O},i.prototype.readUInt8=function(d,B){return d=d>>>0,B||bV(d,1,this.length),this[d]},i.prototype.readUInt16LE=function(d,B){return d=d>>>0,B||bV(d,2,this.length),this[d]|this[d+1]<<8},i.prototype.readUInt16BE=function(d,B){return d=d>>>0,B||bV(d,2,this.length),this[d]<<8|this[d+1]},i.prototype.readUInt32LE=function(d,B){return d=d>>>0,B||bV(d,4,this.length),(this[d]|this[d+1]<<8|this[d+2]<<16)+this[d+3]*16777216},i.prototype.readUInt32BE=function(d,B){return d=d>>>0,B||bV(d,4,this.length),this[d]*16777216+(this[d+1]<<16|this[d+2]<<8|this[d+3])},i.prototype.readIntLE=function(d,B,f){d=d>>>0,B=B>>>0,f||bV(d,B,this.length);for(var O=this[d],$=1,L=0;++L<B&&($*=256);)O+=this[d+L]*$;return $*=128,O>=$&&(O-=Math.pow(2,8*B)),O},i.prototype.readIntBE=function(d,B,f){d=d>>>0,B=B>>>0,f||bV(d,B,this.length);for(var O=B,$=1,L=this[d+--O];O>0&&($*=256);)L+=this[d+--O]*$;return $*=128,L>=$&&(L-=Math.pow(2,8*B)),L},i.prototype.readInt8=function(d,B){return d=d>>>0,B||bV(d,1,this.length),this[d]&128?(255-this[d]+1)*-1:this[d]},i.prototype.readInt16LE=function(d,B){d=d>>>0,B||bV(d,2,this.length);var f=this[d]|this[d+1]<<8;return f&32768?f|4294901760:f},i.prototype.readInt16BE=function(d,B){d=d>>>0,B||bV(d,2,this.length);var f=this[d+1]|this[d]<<8;return f&32768?f|4294901760:f},i.prototype.readInt32LE=function(d,B){return d=d>>>0,B||bV(d,4,this.length),this[d]|this[d+1]<<8|this[d+2]<<16|this[d+3]<<24},i.prototype.readInt32BE=function(d,B){return d=d>>>0,B||bV(d,4,this.length),this[d]<<24|this[d+1]<<16|this[d+2]<<8|this[d+3]},i.prototype.readFloatLE=function(d,B){return d=d>>>0,B||bV(d,4,this.length),Z.read(this,d,!0,23,4)},i.prototype.readFloatBE=function(d,B){return d=d>>>0,B||bV(d,4,this.length),Z.read(this,d,!1,23,4)},i.prototype.readDoubleLE=function(d,B){return d=d>>>0,B||bV(d,8,this.length),Z.read(this,d,!0,52,8)},i.prototype.readDoubleBE=function(d,B){return d=d>>>0,B||bV(d,8,this.length),Z.read(this,d,!1,52,8)};function LV(N,d,B,f,O,$){if(!i.isBuffer(N))throw new TypeError('"buffer" argument must be a Buffer instance');if(d>O||d<$)throw new RangeError('"value" argument is out of bounds');if(B+f>N.length)throw new RangeError("Index out of range")}i.prototype.writeUIntLE=function(d,B,f,O){if(d=+d,B=B>>>0,f=f>>>0,!O){var $=Math.pow(2,8*f)-1;LV(this,d,B,f,$,0)}var L=1,EV=0;for(this[B]=d&255;++EV<f&&(L*=256);)this[B+EV]=d/L&255;return B+f},i.prototype.writeUIntBE=function(d,B,f,O){if(d=+d,B=B>>>0,f=f>>>0,!O){var $=Math.pow(2,8*f)-1;LV(this,d,B,f,$,0)}var L=f-1,EV=1;for(this[B+L]=d&255;--L>=0&&(EV*=256);)this[B+L]=d/EV&255;return B+f},i.prototype.writeUInt8=function(d,B,f){return d=+d,B=B>>>0,f||LV(this,d,B,1,255,0),this[B]=d&255,B+1},i.prototype.writeUInt16LE=function(d,B,f){return d=+d,B=B>>>0,f||LV(this,d,B,2,65535,0),this[B]=d&255,this[B+1]=d>>>8,B+2},i.prototype.writeUInt16BE=function(d,B,f){return d=+d,B=B>>>0,f||LV(this,d,B,2,65535,0),this[B]=d>>>8,this[B+1]=d&255,B+2},i.prototype.writeUInt32LE=function(d,B,f){return d=+d,B=B>>>0,f||LV(this,d,B,4,4294967295,0),this[B+3]=d>>>24,this[B+2]=d>>>16,this[B+1]=d>>>8,this[B]=d&255,B+4},i.prototype.writeUInt32BE=function(d,B,f){return d=+d,B=B>>>0,f||LV(this,d,B,4,4294967295,0),this[B]=d>>>24,this[B+1]=d>>>16,this[B+2]=d>>>8,this[B+3]=d&255,B+4},i.prototype.writeIntLE=function(d,B,f,O){if(d=+d,B=B>>>0,!O){var $=Math.pow(2,8*f-1);LV(this,d,B,f,$-1,-$)}var L=0,EV=1,MV=0;for(this[B]=d&255;++L<f&&(EV*=256);)d<0&&MV===0&&this[B+L-1]!==0&&(MV=1),this[B+L]=(d/EV>>0)-MV&255;return B+f},i.prototype.writeIntBE=function(d,B,f,O){if(d=+d,B=B>>>0,!O){var $=Math.pow(2,8*f-1);LV(this,d,B,f,$-1,-$)}var L=f-1,EV=1,MV=0;for(this[B+L]=d&255;--L>=0&&(EV*=256);)d<0&&MV===0&&this[B+L+1]!==0&&(MV=1),this[B+L]=(d/EV>>0)-MV&255;return B+f},i.prototype.writeInt8=function(d,B,f){return d=+d,B=B>>>0,f||LV(this,d,B,1,127,-128),d<0&&(d=255+d+1),this[B]=d&255,B+1},i.prototype.writeInt16LE=function(d,B,f){return d=+d,B=B>>>0,f||LV(this,d,B,2,32767,-32768),this[B]=d&255,this[B+1]=d>>>8,B+2},i.prototype.writeInt16BE=function(d,B,f){return d=+d,B=B>>>0,f||LV(this,d,B,2,32767,-32768),this[B]=d>>>8,this[B+1]=d&255,B+2},i.prototype.writeInt32LE=function(d,B,f){return d=+d,B=B>>>0,f||LV(this,d,B,4,2147483647,-2147483648),this[B]=d&255,this[B+1]=d>>>8,this[B+2]=d>>>16,this[B+3]=d>>>24,B+4},i.prototype.writeInt32BE=function(d,B,f){return d=+d,B=B>>>0,f||LV(this,d,B,4,2147483647,-2147483648),d<0&&(d=4294967295+d+1),this[B]=d>>>24,this[B+1]=d>>>16,this[B+2]=d>>>8,this[B+3]=d&255,B+4};function Cl(N,d,B,f,O,$){if(B+f>N.length)throw new RangeError("Index out of range");if(B<0)throw new RangeError("Index out of range")}function pl(N,d,B,f,O){return d=+d,B=B>>>0,O||Cl(N,d,B,4,34028234663852886e22,-34028234663852886e22),Z.write(N,d,B,f,23,4),B+4}i.prototype.writeFloatLE=function(d,B,f){return pl(this,d,B,!0,f)},i.prototype.writeFloatBE=function(d,B,f){return pl(this,d,B,!1,f)};function Yl(N,d,B,f,O){return d=+d,B=B>>>0,O||Cl(N,d,B,8,17976931348623157e292,-17976931348623157e292),Z.write(N,d,B,f,52,8),B+8}i.prototype.writeDoubleLE=function(d,B,f){return Yl(this,d,B,!0,f)},i.prototype.writeDoubleBE=function(d,B,f){return Yl(this,d,B,!1,f)},i.prototype.copy=function(d,B,f,O){if(!i.isBuffer(d))throw new TypeError("argument should be a Buffer");if(f||(f=0),!O&&O!==0&&(O=this.length),B>=d.length&&(B=d.length),B||(B=0),O>0&&O<f&&(O=f),O===f||d.length===0||this.length===0)return 0;if(B<0)throw new RangeError("targetStart out of bounds");if(f<0||f>=this.length)throw new RangeError("Index out of range");if(O<0)throw new RangeError("sourceEnd out of bounds");O>this.length&&(O=this.length),d.length-B<O-f&&(O=d.length-B+f);var $=O-f;if(this===d&&typeof Uint8Array.prototype.copyWithin=="function")this.copyWithin(B,f,O);else if(this===d&&f<B&&B<O)for(var L=$-1;L>=0;--L)d[L+B]=this[L+f];else Uint8Array.prototype.set.call(d,this.subarray(f,O),B);return $},i.prototype.fill=function(d,B,f,O){if(typeof d=="string"){if(typeof B=="string"?(O=B,B=0,f=this.length):typeof f=="string"&&(O=f,f=this.length),O!==void 0&&typeof O!="string")throw new TypeError("encoding must be a string");if(typeof O=="string"&&!i.isEncoding(O))throw new TypeError("Unknown encoding: "+O);if(d.length===1){var $=d.charCodeAt(0);(O==="utf8"&&$<128||O==="latin1")&&(d=$)}}else typeof d=="number"?d=d&255:typeof d=="boolean"&&(d=Number(d));if(B<0||this.length<B||this.length<f)throw new RangeError("Out of range index");if(f<=B)return this;B=B>>>0,f=f===void 0?this.length:f>>>0,d||(d=0);var L;if(typeof d=="number")for(L=B;L<f;++L)this[L]=d;else{var EV=i.isBuffer(d)?d:i.from(d,O),MV=EV.length;if(MV===0)throw new TypeError('The value "'+d+'" is invalid for argument "value"');for(L=0;L<f-B;++L)this[L+B]=EV[L%MV]}return this};var Hl=/[^+/0-9A-Za-z-_]/g;function yl(N){if(N=N.split("=")[0],N=N.trim().replace(Hl,""),N.length<2)return"";for(;N.length%4!==0;)N=N+"=";return N}function Ll(N,d){d=d||1/0;for(var B,f=N.length,O=null,$=[],L=0;L<f;++L){if(B=N.charCodeAt(L),B>55295&&B<57344){if(!O){if(B>56319){(d-=3)>-1&&$.push(239,191,189);continue}else if(L+1===f){(d-=3)>-1&&$.push(239,191,189);continue}O=B;continue}if(B<56320){(d-=3)>-1&&$.push(239,191,189),O=B;continue}B=(O-55296<<10|B-56320)+65536}else O&&(d-=3)>-1&&$.push(239,191,189);if(O=null,B<128){if((d-=1)<0)break;$.push(B)}else if(B<2048){if((d-=2)<0)break;$.push(B>>6|192,B&63|128)}else if(B<65536){if((d-=3)<0)break;$.push(B>>12|224,B>>6&63|128,B&63|128)}else if(B<1114112){if((d-=4)<0)break;$.push(B>>18|240,B>>12&63|128,B>>6&63|128,B&63|128)}else throw new Error("Invalid code point")}return $}function VZ(N){for(var d=[],B=0;B<N.length;++B)d.push(N.charCodeAt(B)&255);return d}function lZ(N,d){for(var B,f,O,$=[],L=0;L<N.length&&!((d-=2)<0);++L)B=N.charCodeAt(L),f=B>>8,O=B%256,$.push(O),$.push(f);return $}function Kl(N){return l.toByteArray(yl(N))}function bl(N,d,B,f){for(var O=0;O<f&&!(O+B>=d.length||O>=N.length);++O)d[O+B]=N[O];return O}function ol(N,d){return N instanceof d||N!=null&&N.constructor!=null&&N.constructor.name!=null&&N.constructor.name===d.name}function vl(N){return N!==N}var Fl=function(){for(var N="0123456789abcdef",d=new Array(256),B=0;B<16;++B)for(var f=B*16,O=0;O<16;++O)d[f+O]=N[B]+N[O];return d}()}});var rt=4,ot=4,Bl=4,ZU=new Int32Array(2),eR=new Float32Array(ZU.buffer),mR=new Float64Array(ZU.buffer),Re=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1,Km;(function(V){V[V.UTF8_BYTES=1]="UTF8_BYTES",V[V.UTF16_STRING=2]="UTF16_STRING"})(Km||(Km={}));var nR=class{constructor(V){this.bytes_=V,this.position_=0,this.text_decoder_=new TextDecoder}static allocate(V){return new nR(new Uint8Array(V))}clear(){this.position_=0}bytes(){return this.bytes_}position(){return this.position_}setPosition(V){this.position_=V}capacity(){return this.bytes_.length}readInt8(V){return this.readUint8(V)<<24>>24}readUint8(V){return this.bytes_[V]}readInt16(V){return this.readUint16(V)<<16>>16}readUint16(V){return this.bytes_[V]|this.bytes_[V+1]<<8}readInt32(V){return this.bytes_[V]|this.bytes_[V+1]<<8|this.bytes_[V+2]<<16|this.bytes_[V+3]<<24}readUint32(V){return this.readInt32(V)>>>0}readInt64(V){return BigInt.asIntN(64,BigInt(this.readUint32(V))+(BigInt(this.readUint32(V+4))<<BigInt(32)))}readUint64(V){return BigInt.asUintN(64,BigInt(this.readUint32(V))+(BigInt(this.readUint32(V+4))<<BigInt(32)))}readFloat32(V){return ZU[0]=this.readInt32(V),eR[0]}readFloat64(V){return ZU[Re?0:1]=this.readInt32(V),ZU[Re?1:0]=this.readInt32(V+4),mR[0]}writeInt8(V,l){this.bytes_[V]=l}writeUint8(V,l){this.bytes_[V]=l}writeInt16(V,l){this.bytes_[V]=l,this.bytes_[V+1]=l>>8}writeUint16(V,l){this.bytes_[V]=l,this.bytes_[V+1]=l>>8}writeInt32(V,l){this.bytes_[V]=l,this.bytes_[V+1]=l>>8,this.bytes_[V+2]=l>>16,this.bytes_[V+3]=l>>24}writeUint32(V,l){this.bytes_[V]=l,this.bytes_[V+1]=l>>8,this.bytes_[V+2]=l>>16,this.bytes_[V+3]=l>>24}writeInt64(V,l){this.writeInt32(V,Number(BigInt.asIntN(32,l))),this.writeInt32(V+4,Number(BigInt.asIntN(32,l>>BigInt(32))))}writeUint64(V,l){this.writeUint32(V,Number(BigInt.asUintN(32,l))),this.writeUint32(V+4,Number(BigInt.asUintN(32,l>>BigInt(32))))}writeFloat32(V,l){eR[0]=l,this.writeInt32(V,ZU[0])}writeFloat64(V,l){mR[0]=l,this.writeInt32(V,ZU[Re?0:1]),this.writeInt32(V+4,ZU[Re?1:0])}getBufferIdentifier(){if(this.bytes_.length<this.position_+rt+ot)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");let V="";for(let l=0;l<ot;l++)V+=String.fromCharCode(this.readInt8(this.position_+rt+l));return V}__offset(V,l){let Z=V-this.readInt32(V);return l<this.readInt16(Z)?this.readInt16(Z+l):0}__union(V,l){return V.bb_pos=l+this.readInt32(l),V.bb=this,V}__string(V,l){V+=this.readInt32(V);let Z=this.readInt32(V);V+=rt;let U=this.bytes_.subarray(V,V+Z);return l===Km.UTF8_BYTES?U:this.text_decoder_.decode(U)}__union_with_string(V,l){return typeof V=="string"?this.__string(l):this.__union(V,l)}__indirect(V){return V+this.readInt32(V)}__vector(V){return V+this.readInt32(V)+rt}__vector_len(V){return this.readInt32(V+this.readInt32(V))}__has_identifier(V){if(V.length!=ot)throw new Error("FlatBuffers: file identifier must be length "+ot);for(let l=0;l<ot;l++)if(V.charCodeAt(l)!=this.readInt8(this.position()+rt+l))return!1;return!0}createScalarList(V,l){let Z=[];for(let U=0;U<l;++U){let A=V(U);A!==null&&Z.push(A)}return Z}createObjList(V,l){let Z=[];for(let U=0;U<l;++U){let A=V(U);A!==null&&Z.push(A.unpack())}return Z}};var Oz=yc(kc(),1),qm={};GU(qm,{CAT:()=>el,CATCOLLECTION:()=>WU,CATCOLLECTIONT:()=>RR,CATT:()=>hR,dataStatusCode:()=>GR,massType:()=>sR,objectType:()=>aR,opsStatusCode:()=>rR,orbitType:()=>oR});var GR=(V=>(V[V.NO_CURRENT_ELEMENTS=0]="NO_CURRENT_ELEMENTS",V[V.NO_INITIAL_ELEMENTS=1]="NO_INITIAL_ELEMENTS",V[V.NO_ELEMENTS_AVAILABLE=2]="NO_ELEMENTS_AVAILABLE",V[V.OK=3]="OK",V))(GR||{}),sR=(V=>(V[V.DRY=0]="DRY",V[V.WET=1]="WET",V))(sR||{}),aR=(V=>(V[V.PAYLOAD=0]="PAYLOAD",V[V.ROCKET_BODY=1]="ROCKET_BODY",V[V.DEBRIS=2]="DEBRIS",V[V.UNKNOWN=3]="UNKNOWN",V))(aR||{}),rR=(V=>(V[V.OPERATIONAL=0]="OPERATIONAL",V[V.NONOPERATIONAL=1]="NONOPERATIONAL",V[V.PARTIALLY_OPERATIONAL=2]="PARTIALLY_OPERATIONAL",V[V.BACKUP_STANDBY=3]="BACKUP_STANDBY",V[V.SPARE=4]="SPARE",V[V.EXTENDED_MISSION=5]="EXTENDED_MISSION",V[V.DECAYED=6]="DECAYED",V[V.UNKNOWN=7]="UNKNOWN",V))(rR||{}),oR=(V=>(V[V.ORBIT=0]="ORBIT",V[V.LANDING=1]="LANDING",V[V.IMPACT=2]="IMPACT",V[V.DOCKED=3]="DOCKED",V[V.ROUNDTRIP=4]="ROUNDTRIP",V))(oR||{}),el=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsCAT(V,l){return(l||new el).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsCAT(V,l){return V.setPosition(V.position()+Bl),(l||new el).__init(V.readInt32(V.position())+V.position(),V)}static bufferHasIdentifier(V){return V.__has_identifier("$CAT")}OBJECT_NAME(V){let l=this.bb.__offset(this.bb_pos,4);return l?this.bb.__string(this.bb_pos+l,V):null}OBJECT_ID(V){let l=this.bb.__offset(this.bb_pos,6);return l?this.bb.__string(this.bb_pos+l,V):null}NORAD_CAT_ID(){let V=this.bb.__offset(this.bb_pos,8);return V?this.bb.readUint32(this.bb_pos+V):0}OBJECT_TYPE(){let V=this.bb.__offset(this.bb_pos,10);return V?this.bb.readInt8(this.bb_pos+V):3}OPS_STATUS_CODE(){let V=this.bb.__offset(this.bb_pos,12);return V?this.bb.readInt8(this.bb_pos+V):7}OWNER(V){let l=this.bb.__offset(this.bb_pos,14);return l?this.bb.__string(this.bb_pos+l,V):null}LAUNCH_DATE(V){let l=this.bb.__offset(this.bb_pos,16);return l?this.bb.__string(this.bb_pos+l,V):null}LAUNCH_SITE(V){let l=this.bb.__offset(this.bb_pos,18);return l?this.bb.__string(this.bb_pos+l,V):null}DECAY_DATE(V){let l=this.bb.__offset(this.bb_pos,20);return l?this.bb.__string(this.bb_pos+l,V):null}PERIOD(){let V=this.bb.__offset(this.bb_pos,22);return V?this.bb.readFloat64(this.bb_pos+V):0}INCLINATION(){let V=this.bb.__offset(this.bb_pos,24);return V?this.bb.readFloat64(this.bb_pos+V):0}APOGEE(){let V=this.bb.__offset(this.bb_pos,26);return V?this.bb.readFloat64(this.bb_pos+V):0}PERIGEE(){let V=this.bb.__offset(this.bb_pos,28);return V?this.bb.readFloat64(this.bb_pos+V):0}RCS(){let V=this.bb.__offset(this.bb_pos,30);return V?this.bb.readFloat64(this.bb_pos+V):0}DATA_STATUS_CODE(){let V=this.bb.__offset(this.bb_pos,32);return V?this.bb.readInt8(this.bb_pos+V):0}ORBIT_CENTER(V){let l=this.bb.__offset(this.bb_pos,34);return l?this.bb.__string(this.bb_pos+l,V):null}ORBIT_TYPE(){let V=this.bb.__offset(this.bb_pos,36);return V?this.bb.readInt8(this.bb_pos+V):0}DEPLOYMENT_DATE(V){let l=this.bb.__offset(this.bb_pos,38);return l?this.bb.__string(this.bb_pos+l,V):null}MANEUVERABLE(){let V=this.bb.__offset(this.bb_pos,40);return V?!!this.bb.readInt8(this.bb_pos+V):!1}SIZE(){let V=this.bb.__offset(this.bb_pos,42);return V?this.bb.readFloat64(this.bb_pos+V):0}MASS(){let V=this.bb.__offset(this.bb_pos,44);return V?this.bb.readFloat64(this.bb_pos+V):0}MASS_TYPE(){let V=this.bb.__offset(this.bb_pos,46);return V?this.bb.readInt8(this.bb_pos+V):0}static startCAT(V){V.startObject(22)}static addObjectName(V,l){V.addFieldOffset(0,l,0)}static addObjectId(V,l){V.addFieldOffset(1,l,0)}static addNoradCatId(V,l){V.addFieldInt32(2,l,0)}static addObjectType(V,l){V.addFieldInt8(3,l,3)}static addOpsStatusCode(V,l){V.addFieldInt8(4,l,7)}static addOwner(V,l){V.addFieldOffset(5,l,0)}static addLaunchDate(V,l){V.addFieldOffset(6,l,0)}static addLaunchSite(V,l){V.addFieldOffset(7,l,0)}static addDecayDate(V,l){V.addFieldOffset(8,l,0)}static addPeriod(V,l){V.addFieldFloat64(9,l,0)}static addInclination(V,l){V.addFieldFloat64(10,l,0)}static addApogee(V,l){V.addFieldFloat64(11,l,0)}static addPerigee(V,l){V.addFieldFloat64(12,l,0)}static addRcs(V,l){V.addFieldFloat64(13,l,0)}static addDataStatusCode(V,l){V.addFieldInt8(14,l,0)}static addOrbitCenter(V,l){V.addFieldOffset(15,l,0)}static addOrbitType(V,l){V.addFieldInt8(16,l,0)}static addDeploymentDate(V,l){V.addFieldOffset(17,l,0)}static addManeuverable(V,l){V.addFieldInt8(18,+l,0)}static addSize(V,l){V.addFieldFloat64(19,l,0)}static addMass(V,l){V.addFieldFloat64(20,l,0)}static addMassType(V,l){V.addFieldInt8(21,l,0)}static endCAT(V){return V.endObject()}static finishCATBuffer(V,l){V.finish(l,"$CAT")}static finishSizePrefixedCATBuffer(V,l){V.finish(l,"$CAT",!0)}static createCAT(V,l,Z,U,A,t,m,i,n,o,h,R,c,Q,T,S,p,b,E,D,_,Y,K){return el.startCAT(V),el.addObjectName(V,l),el.addObjectId(V,Z),el.addNoradCatId(V,U),el.addObjectType(V,A),el.addOpsStatusCode(V,t),el.addOwner(V,m),el.addLaunchDate(V,i),el.addLaunchSite(V,n),el.addDecayDate(V,o),el.addPeriod(V,h),el.addInclination(V,R),el.addApogee(V,c),el.addPerigee(V,Q),el.addRcs(V,T),el.addDataStatusCode(V,S),el.addOrbitCenter(V,p),el.addOrbitType(V,b),el.addDeploymentDate(V,E),el.addManeuverable(V,D),el.addSize(V,_),el.addMass(V,Y),el.addMassType(V,K),el.endCAT(V)}unpack(){return new hR(this.OBJECT_NAME(),this.OBJECT_ID(),this.NORAD_CAT_ID(),this.OBJECT_TYPE(),this.OPS_STATUS_CODE(),this.OWNER(),this.LAUNCH_DATE(),this.LAUNCH_SITE(),this.DECAY_DATE(),this.PERIOD(),this.INCLINATION(),this.APOGEE(),this.PERIGEE(),this.RCS(),this.DATA_STATUS_CODE(),this.ORBIT_CENTER(),this.ORBIT_TYPE(),this.DEPLOYMENT_DATE(),this.MANEUVERABLE(),this.SIZE(),this.MASS(),this.MASS_TYPE())}unpackTo(V){V.OBJECT_NAME=this.OBJECT_NAME(),V.OBJECT_ID=this.OBJECT_ID(),V.NORAD_CAT_ID=this.NORAD_CAT_ID(),V.OBJECT_TYPE=this.OBJECT_TYPE(),V.OPS_STATUS_CODE=this.OPS_STATUS_CODE(),V.OWNER=this.OWNER(),V.LAUNCH_DATE=this.LAUNCH_DATE(),V.LAUNCH_SITE=this.LAUNCH_SITE(),V.DECAY_DATE=this.DECAY_DATE(),V.PERIOD=this.PERIOD(),V.INCLINATION=this.INCLINATION(),V.APOGEE=this.APOGEE(),V.PERIGEE=this.PERIGEE(),V.RCS=this.RCS(),V.DATA_STATUS_CODE=this.DATA_STATUS_CODE(),V.ORBIT_CENTER=this.ORBIT_CENTER(),V.ORBIT_TYPE=this.ORBIT_TYPE(),V.DEPLOYMENT_DATE=this.DEPLOYMENT_DATE(),V.MANEUVERABLE=this.MANEUVERABLE(),V.SIZE=this.SIZE(),V.MASS=this.MASS(),V.MASS_TYPE=this.MASS_TYPE()}},hR=class{constructor(V=null,l=null,Z=0,U=3,A=7,t=null,m=null,i=null,n=null,o=0,h=0,R=0,c=0,Q=0,T=0,S=null,p=0,b=null,E=!1,D=0,_=0,Y=0){this.OBJECT_NAME=V,this.OBJECT_ID=l,this.NORAD_CAT_ID=Z,this.OBJECT_TYPE=U,this.OPS_STATUS_CODE=A,this.OWNER=t,this.LAUNCH_DATE=m,this.LAUNCH_SITE=i,this.DECAY_DATE=n,this.PERIOD=o,this.INCLINATION=h,this.APOGEE=R,this.PERIGEE=c,this.RCS=Q,this.DATA_STATUS_CODE=T,this.ORBIT_CENTER=S,this.ORBIT_TYPE=p,this.DEPLOYMENT_DATE=b,this.MANEUVERABLE=E,this.SIZE=D,this.MASS=_,this.MASS_TYPE=Y}pack(V){let l=this.OBJECT_NAME!==null?V.createString(this.OBJECT_NAME):0,Z=this.OBJECT_ID!==null?V.createString(this.OBJECT_ID):0,U=this.OWNER!==null?V.createString(this.OWNER):0,A=this.LAUNCH_DATE!==null?V.createString(this.LAUNCH_DATE):0,t=this.LAUNCH_SITE!==null?V.createString(this.LAUNCH_SITE):0,m=this.DECAY_DATE!==null?V.createString(this.DECAY_DATE):0,i=this.ORBIT_CENTER!==null?V.createString(this.ORBIT_CENTER):0,n=this.DEPLOYMENT_DATE!==null?V.createString(this.DEPLOYMENT_DATE):0;return el.createCAT(V,l,Z,this.NORAD_CAT_ID,this.OBJECT_TYPE,this.OPS_STATUS_CODE,U,A,t,m,this.PERIOD,this.INCLINATION,this.APOGEE,this.PERIGEE,this.RCS,this.DATA_STATUS_CODE,i,this.ORBIT_TYPE,n,this.MANEUVERABLE,this.SIZE,this.MASS,this.MASS_TYPE)}},WU=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsCATCOLLECTION(V,l){return(l||new WU).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsCATCOLLECTION(V,l){return V.setPosition(V.position()+Bl),(l||new WU).__init(V.readInt32(V.position())+V.position(),V)}RECORDS(V,l){let Z=this.bb.__offset(this.bb_pos,4);return Z?(l||new el).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+Z)+V*4),this.bb):null}recordsLength(){let V=this.bb.__offset(this.bb_pos,4);return V?this.bb.__vector_len(this.bb_pos+V):0}static startCATCOLLECTION(V){V.startObject(1)}static addRecords(V,l){V.addFieldOffset(0,l,0)}static createRecordsVector(V,l){V.startVector(4,l.length,4);for(let Z=l.length-1;Z>=0;Z--)V.addOffset(l[Z]);return V.endVector()}static startRecordsVector(V,l){V.startVector(4,l,4)}static endCATCOLLECTION(V){return V.endObject()}static createCATCOLLECTION(V,l){return WU.startCATCOLLECTION(V),WU.addRecords(V,l),WU.endCATCOLLECTION(V)}unpack(){return new RR(this.bb.createObjList(this.RECORDS.bind(this),this.recordsLength()))}unpackTo(V){V.RECORDS=this.bb.createObjList(this.RECORDS.bind(this),this.recordsLength())}},RR=class{constructor(V=[]){this.RECORDS=V}pack(V){let l=WU.createRecordsVector(V,V.createObjectOffsetList(this.RECORDS));return WU.createCATCOLLECTION(V,l)}},de={};GU(de,{OMM:()=>RV,OMMCOLLECTION:()=>UU,OMMCOLLECTIONT:()=>cR,OMMT:()=>IR,ephemerisType:()=>dR,manCovRefFrame:()=>TR,meanElementTheory:()=>BR,referenceFrame:()=>FR,timeSystem:()=>QR});var dR=(V=>(V[V.SGP=0]="SGP",V[V.SGP4=1]="SGP4",V[V.SDP4=2]="SDP4",V[V.SGP8=3]="SGP8",V[V.SDP8=4]="SDP8",V))(dR||{}),TR=(V=>(V[V.RSW=0]="RSW",V[V.RTN=1]="RTN",V[V.TNW=2]="TNW",V))(TR||{}),BR=(V=>(V[V.SGP4=0]="SGP4",V[V.DSST=1]="DSST",V[V.USM=2]="USM",V))(BR||{}),FR=(V=>(V[V.EME2000=0]="EME2000",V[V.GCRF=1]="GCRF",V[V.GRC=2]="GRC",V[V.ICRF=3]="ICRF",V[V.ITRF2000=4]="ITRF2000",V[V.ITRF93=5]="ITRF93",V[V.ITRF97=6]="ITRF97",V[V.MCI=7]="MCI",V[V.TDR=8]="TDR",V[V.TEME=9]="TEME",V[V.TOD=10]="TOD",V))(FR||{}),QR=(V=>(V[V.GMST=0]="GMST",V[V.GPS=1]="GPS",V[V.MET=2]="MET",V[V.MRT=3]="MRT",V[V.SCLK=4]="SCLK",V[V.TAI=5]="TAI",V[V.TCB=6]="TCB",V[V.TDB=7]="TDB",V[V.TCG=8]="TCG",V[V.TT=9]="TT",V[V.UT1=10]="UT1",V[V.UTC=11]="UTC",V))(QR||{}),RV=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsOMM(V,l){return(l||new RV).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsOMM(V,l){return V.setPosition(V.position()+Bl),(l||new RV).__init(V.readInt32(V.position())+V.position(),V)}static bufferHasIdentifier(V){return V.__has_identifier("$OMM")}CCSDS_OMM_VERS(){let V=this.bb.__offset(this.bb_pos,4);return V?this.bb.readFloat64(this.bb_pos+V):0}CREATION_DATE(V){let l=this.bb.__offset(this.bb_pos,6);return l?this.bb.__string(this.bb_pos+l,V):null}ORIGINATOR(V){let l=this.bb.__offset(this.bb_pos,8);return l?this.bb.__string(this.bb_pos+l,V):null}OBJECT_NAME(V){let l=this.bb.__offset(this.bb_pos,10);return l?this.bb.__string(this.bb_pos+l,V):null}OBJECT_ID(V){let l=this.bb.__offset(this.bb_pos,12);return l?this.bb.__string(this.bb_pos+l,V):null}CENTER_NAME(V){let l=this.bb.__offset(this.bb_pos,14);return l?this.bb.__string(this.bb_pos+l,V):null}REF_FRAME(){let V=this.bb.__offset(this.bb_pos,16);return V?this.bb.readInt8(this.bb_pos+V):9}REF_FRAME_EPOCH(V){let l=this.bb.__offset(this.bb_pos,18);return l?this.bb.__string(this.bb_pos+l,V):null}TIME_SYSTEM(){let V=this.bb.__offset(this.bb_pos,20);return V?this.bb.readInt8(this.bb_pos+V):11}MEAN_ELEMENT_THEORY(){let V=this.bb.__offset(this.bb_pos,22);return V?this.bb.readInt8(this.bb_pos+V):0}COMMENT(V){let l=this.bb.__offset(this.bb_pos,24);return l?this.bb.__string(this.bb_pos+l,V):null}EPOCH(V){let l=this.bb.__offset(this.bb_pos,26);return l?this.bb.__string(this.bb_pos+l,V):null}SEMI_MAJOR_AXIS(){let V=this.bb.__offset(this.bb_pos,28);return V?this.bb.readFloat64(this.bb_pos+V):0}MEAN_MOTION(){let V=this.bb.__offset(this.bb_pos,30);return V?this.bb.readFloat64(this.bb_pos+V):0}ECCENTRICITY(){let V=this.bb.__offset(this.bb_pos,32);return V?this.bb.readFloat64(this.bb_pos+V):0}INCLINATION(){let V=this.bb.__offset(this.bb_pos,34);return V?this.bb.readFloat64(this.bb_pos+V):0}RA_OF_ASC_NODE(){let V=this.bb.__offset(this.bb_pos,36);return V?this.bb.readFloat64(this.bb_pos+V):0}ARG_OF_PERICENTER(){let V=this.bb.__offset(this.bb_pos,38);return V?this.bb.readFloat64(this.bb_pos+V):0}MEAN_ANOMALY(){let V=this.bb.__offset(this.bb_pos,40);return V?this.bb.readFloat64(this.bb_pos+V):0}GM(){let V=this.bb.__offset(this.bb_pos,42);return V?this.bb.readFloat64(this.bb_pos+V):0}MASS(){let V=this.bb.__offset(this.bb_pos,44);return V?this.bb.readFloat64(this.bb_pos+V):0}SOLAR_RAD_AREA(){let V=this.bb.__offset(this.bb_pos,46);return V?this.bb.readFloat64(this.bb_pos+V):0}SOLAR_RAD_COEFF(){let V=this.bb.__offset(this.bb_pos,48);return V?this.bb.readFloat64(this.bb_pos+V):0}DRAG_AREA(){let V=this.bb.__offset(this.bb_pos,50);return V?this.bb.readFloat64(this.bb_pos+V):0}DRAG_COEFF(){let V=this.bb.__offset(this.bb_pos,52);return V?this.bb.readFloat64(this.bb_pos+V):0}EPHEMERIS_TYPE(){let V=this.bb.__offset(this.bb_pos,54);return V?this.bb.readInt8(this.bb_pos+V):1}CLASSIFICATION_TYPE(V){let l=this.bb.__offset(this.bb_pos,56);return l?this.bb.__string(this.bb_pos+l,V):null}NORAD_CAT_ID(){let V=this.bb.__offset(this.bb_pos,58);return V?this.bb.readUint32(this.bb_pos+V):0}ELEMENT_SET_NO(){let V=this.bb.__offset(this.bb_pos,60);return V?this.bb.readUint32(this.bb_pos+V):0}REV_AT_EPOCH(){let V=this.bb.__offset(this.bb_pos,62);return V?this.bb.readFloat64(this.bb_pos+V):0}BSTAR(){let V=this.bb.__offset(this.bb_pos,64);return V?this.bb.readFloat64(this.bb_pos+V):0}MEAN_MOTION_DOT(){let V=this.bb.__offset(this.bb_pos,66);return V?this.bb.readFloat64(this.bb_pos+V):0}MEAN_MOTION_DDOT(){let V=this.bb.__offset(this.bb_pos,68);return V?this.bb.readFloat64(this.bb_pos+V):0}COV_REF_FRAME(){let V=this.bb.__offset(this.bb_pos,70);return V?this.bb.readInt8(this.bb_pos+V):0}CX_X(){let V=this.bb.__offset(this.bb_pos,72);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_X(){let V=this.bb.__offset(this.bb_pos,74);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_Y(){let V=this.bb.__offset(this.bb_pos,76);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_X(){let V=this.bb.__offset(this.bb_pos,78);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_Y(){let V=this.bb.__offset(this.bb_pos,80);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_Z(){let V=this.bb.__offset(this.bb_pos,82);return V?this.bb.readFloat64(this.bb_pos+V):0}CX_DOT_X(){let V=this.bb.__offset(this.bb_pos,84);return V?this.bb.readFloat64(this.bb_pos+V):0}CX_DOT_Y(){let V=this.bb.__offset(this.bb_pos,86);return V?this.bb.readFloat64(this.bb_pos+V):0}CX_DOT_Z(){let V=this.bb.__offset(this.bb_pos,88);return V?this.bb.readFloat64(this.bb_pos+V):0}CX_DOT_X_DOT(){let V=this.bb.__offset(this.bb_pos,90);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_DOT_X(){let V=this.bb.__offset(this.bb_pos,92);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_DOT_Y(){let V=this.bb.__offset(this.bb_pos,94);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_DOT_Z(){let V=this.bb.__offset(this.bb_pos,96);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_DOT_X_DOT(){let V=this.bb.__offset(this.bb_pos,98);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_DOT_Y_DOT(){let V=this.bb.__offset(this.bb_pos,100);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_DOT_X(){let V=this.bb.__offset(this.bb_pos,102);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_DOT_Y(){let V=this.bb.__offset(this.bb_pos,104);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_DOT_Z(){let V=this.bb.__offset(this.bb_pos,106);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_DOT_X_DOT(){let V=this.bb.__offset(this.bb_pos,108);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_DOT_Y_DOT(){let V=this.bb.__offset(this.bb_pos,110);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_DOT_Z_DOT(){let V=this.bb.__offset(this.bb_pos,112);return V?this.bb.readFloat64(this.bb_pos+V):0}USER_DEFINED_BIP_0044_TYPE(){let V=this.bb.__offset(this.bb_pos,114);return V?this.bb.readUint32(this.bb_pos+V):0}USER_DEFINED_OBJECT_DESIGNATOR(V){let l=this.bb.__offset(this.bb_pos,116);return l?this.bb.__string(this.bb_pos+l,V):null}USER_DEFINED_EARTH_MODEL(V){let l=this.bb.__offset(this.bb_pos,118);return l?this.bb.__string(this.bb_pos+l,V):null}USER_DEFINED_EPOCH_TIMESTAMP(){let V=this.bb.__offset(this.bb_pos,120);return V?this.bb.readFloat64(this.bb_pos+V):0}USER_DEFINED_MICROSECONDS(){let V=this.bb.__offset(this.bb_pos,122);return V?this.bb.readFloat64(this.bb_pos+V):0}static startOMM(V){V.startObject(60)}static addCcsdsOmmVers(V,l){V.addFieldFloat64(0,l,0)}static addCreationDate(V,l){V.addFieldOffset(1,l,0)}static addOriginator(V,l){V.addFieldOffset(2,l,0)}static addObjectName(V,l){V.addFieldOffset(3,l,0)}static addObjectId(V,l){V.addFieldOffset(4,l,0)}static addCenterName(V,l){V.addFieldOffset(5,l,0)}static addRefFrame(V,l){V.addFieldInt8(6,l,9)}static addRefFrameEpoch(V,l){V.addFieldOffset(7,l,0)}static addTimeSystem(V,l){V.addFieldInt8(8,l,11)}static addMeanElementTheory(V,l){V.addFieldInt8(9,l,0)}static addComment(V,l){V.addFieldOffset(10,l,0)}static addEpoch(V,l){V.addFieldOffset(11,l,0)}static addSemiMajorAxis(V,l){V.addFieldFloat64(12,l,0)}static addMeanMotion(V,l){V.addFieldFloat64(13,l,0)}static addEccentricity(V,l){V.addFieldFloat64(14,l,0)}static addInclination(V,l){V.addFieldFloat64(15,l,0)}static addRaOfAscNode(V,l){V.addFieldFloat64(16,l,0)}static addArgOfPericenter(V,l){V.addFieldFloat64(17,l,0)}static addMeanAnomaly(V,l){V.addFieldFloat64(18,l,0)}static addGm(V,l){V.addFieldFloat64(19,l,0)}static addMass(V,l){V.addFieldFloat64(20,l,0)}static addSolarRadArea(V,l){V.addFieldFloat64(21,l,0)}static addSolarRadCoeff(V,l){V.addFieldFloat64(22,l,0)}static addDragArea(V,l){V.addFieldFloat64(23,l,0)}static addDragCoeff(V,l){V.addFieldFloat64(24,l,0)}static addEphemerisType(V,l){V.addFieldInt8(25,l,1)}static addClassificationType(V,l){V.addFieldOffset(26,l,0)}static addNoradCatId(V,l){V.addFieldInt32(27,l,0)}static addElementSetNo(V,l){V.addFieldInt32(28,l,0)}static addRevAtEpoch(V,l){V.addFieldFloat64(29,l,0)}static addBstar(V,l){V.addFieldFloat64(30,l,0)}static addMeanMotionDot(V,l){V.addFieldFloat64(31,l,0)}static addMeanMotionDdot(V,l){V.addFieldFloat64(32,l,0)}static addCovRefFrame(V,l){V.addFieldInt8(33,l,0)}static addCxX(V,l){V.addFieldFloat64(34,l,0)}static addCyX(V,l){V.addFieldFloat64(35,l,0)}static addCyY(V,l){V.addFieldFloat64(36,l,0)}static addCzX(V,l){V.addFieldFloat64(37,l,0)}static addCzY(V,l){V.addFieldFloat64(38,l,0)}static addCzZ(V,l){V.addFieldFloat64(39,l,0)}static addCxDotX(V,l){V.addFieldFloat64(40,l,0)}static addCxDotY(V,l){V.addFieldFloat64(41,l,0)}static addCxDotZ(V,l){V.addFieldFloat64(42,l,0)}static addCxDotXDot(V,l){V.addFieldFloat64(43,l,0)}static addCyDotX(V,l){V.addFieldFloat64(44,l,0)}static addCyDotY(V,l){V.addFieldFloat64(45,l,0)}static addCyDotZ(V,l){V.addFieldFloat64(46,l,0)}static addCyDotXDot(V,l){V.addFieldFloat64(47,l,0)}static addCyDotYDot(V,l){V.addFieldFloat64(48,l,0)}static addCzDotX(V,l){V.addFieldFloat64(49,l,0)}static addCzDotY(V,l){V.addFieldFloat64(50,l,0)}static addCzDotZ(V,l){V.addFieldFloat64(51,l,0)}static addCzDotXDot(V,l){V.addFieldFloat64(52,l,0)}static addCzDotYDot(V,l){V.addFieldFloat64(53,l,0)}static addCzDotZDot(V,l){V.addFieldFloat64(54,l,0)}static addUserDefinedBip0044Type(V,l){V.addFieldInt32(55,l,0)}static addUserDefinedObjectDesignator(V,l){V.addFieldOffset(56,l,0)}static addUserDefinedEarthModel(V,l){V.addFieldOffset(57,l,0)}static addUserDefinedEpochTimestamp(V,l){V.addFieldFloat64(58,l,0)}static addUserDefinedMicroseconds(V,l){V.addFieldFloat64(59,l,0)}static endOMM(V){return V.endObject()}static finishOMMBuffer(V,l){V.finish(l,"$OMM")}static finishSizePrefixedOMMBuffer(V,l){V.finish(l,"$OMM",!0)}static createOMM(V,l,Z,U,A,t,m,i,n,o,h,R,c,Q,T,S,p,b,E,D,_,Y,K,ZV,j,mV,BV,W,VV,GV,rV,FV,k,UV,HV,yV,xV,bV,LV,Cl,pl,Yl,Hl,yl,Ll,VZ,lZ,Kl,bl,ol,vl,Fl,N,d,B,f,O,$,L,EV,MV){return RV.startOMM(V),RV.addCcsdsOmmVers(V,l),RV.addCreationDate(V,Z),RV.addOriginator(V,U),RV.addObjectName(V,A),RV.addObjectId(V,t),RV.addCenterName(V,m),RV.addRefFrame(V,i),RV.addRefFrameEpoch(V,n),RV.addTimeSystem(V,o),RV.addMeanElementTheory(V,h),RV.addComment(V,R),RV.addEpoch(V,c),RV.addSemiMajorAxis(V,Q),RV.addMeanMotion(V,T),RV.addEccentricity(V,S),RV.addInclination(V,p),RV.addRaOfAscNode(V,b),RV.addArgOfPericenter(V,E),RV.addMeanAnomaly(V,D),RV.addGm(V,_),RV.addMass(V,Y),RV.addSolarRadArea(V,K),RV.addSolarRadCoeff(V,ZV),RV.addDragArea(V,j),RV.addDragCoeff(V,mV),RV.addEphemerisType(V,BV),RV.addClassificationType(V,W),RV.addNoradCatId(V,VV),RV.addElementSetNo(V,GV),RV.addRevAtEpoch(V,rV),RV.addBstar(V,FV),RV.addMeanMotionDot(V,k),RV.addMeanMotionDdot(V,UV),RV.addCovRefFrame(V,HV),RV.addCxX(V,yV),RV.addCyX(V,xV),RV.addCyY(V,bV),RV.addCzX(V,LV),RV.addCzY(V,Cl),RV.addCzZ(V,pl),RV.addCxDotX(V,Yl),RV.addCxDotY(V,Hl),RV.addCxDotZ(V,yl),RV.addCxDotXDot(V,Ll),RV.addCyDotX(V,VZ),RV.addCyDotY(V,lZ),RV.addCyDotZ(V,Kl),RV.addCyDotXDot(V,bl),RV.addCyDotYDot(V,ol),RV.addCzDotX(V,vl),RV.addCzDotY(V,Fl),RV.addCzDotZ(V,N),RV.addCzDotXDot(V,d),RV.addCzDotYDot(V,B),RV.addCzDotZDot(V,f),RV.addUserDefinedBip0044Type(V,O),RV.addUserDefinedObjectDesignator(V,$),RV.addUserDefinedEarthModel(V,L),RV.addUserDefinedEpochTimestamp(V,EV),RV.addUserDefinedMicroseconds(V,MV),RV.endOMM(V)}unpack(){return new IR(this.CCSDS_OMM_VERS(),this.CREATION_DATE(),this.ORIGINATOR(),this.OBJECT_NAME(),this.OBJECT_ID(),this.CENTER_NAME(),this.REF_FRAME(),this.REF_FRAME_EPOCH(),this.TIME_SYSTEM(),this.MEAN_ELEMENT_THEORY(),this.COMMENT(),this.EPOCH(),this.SEMI_MAJOR_AXIS(),this.MEAN_MOTION(),this.ECCENTRICITY(),this.INCLINATION(),this.RA_OF_ASC_NODE(),this.ARG_OF_PERICENTER(),this.MEAN_ANOMALY(),this.GM(),this.MASS(),this.SOLAR_RAD_AREA(),this.SOLAR_RAD_COEFF(),this.DRAG_AREA(),this.DRAG_COEFF(),this.EPHEMERIS_TYPE(),this.CLASSIFICATION_TYPE(),this.NORAD_CAT_ID(),this.ELEMENT_SET_NO(),this.REV_AT_EPOCH(),this.BSTAR(),this.MEAN_MOTION_DOT(),this.MEAN_MOTION_DDOT(),this.COV_REF_FRAME(),this.CX_X(),this.CY_X(),this.CY_Y(),this.CZ_X(),this.CZ_Y(),this.CZ_Z(),this.CX_DOT_X(),this.CX_DOT_Y(),this.CX_DOT_Z(),this.CX_DOT_X_DOT(),this.CY_DOT_X(),this.CY_DOT_Y(),this.CY_DOT_Z(),this.CY_DOT_X_DOT(),this.CY_DOT_Y_DOT(),this.CZ_DOT_X(),this.CZ_DOT_Y(),this.CZ_DOT_Z(),this.CZ_DOT_X_DOT(),this.CZ_DOT_Y_DOT(),this.CZ_DOT_Z_DOT(),this.USER_DEFINED_BIP_0044_TYPE(),this.USER_DEFINED_OBJECT_DESIGNATOR(),this.USER_DEFINED_EARTH_MODEL(),this.USER_DEFINED_EPOCH_TIMESTAMP(),this.USER_DEFINED_MICROSECONDS())}unpackTo(V){V.CCSDS_OMM_VERS=this.CCSDS_OMM_VERS(),V.CREATION_DATE=this.CREATION_DATE(),V.ORIGINATOR=this.ORIGINATOR(),V.OBJECT_NAME=this.OBJECT_NAME(),V.OBJECT_ID=this.OBJECT_ID(),V.CENTER_NAME=this.CENTER_NAME(),V.REF_FRAME=this.REF_FRAME(),V.REF_FRAME_EPOCH=this.REF_FRAME_EPOCH(),V.TIME_SYSTEM=this.TIME_SYSTEM(),V.MEAN_ELEMENT_THEORY=this.MEAN_ELEMENT_THEORY(),V.COMMENT=this.COMMENT(),V.EPOCH=this.EPOCH(),V.SEMI_MAJOR_AXIS=this.SEMI_MAJOR_AXIS(),V.MEAN_MOTION=this.MEAN_MOTION(),V.ECCENTRICITY=this.ECCENTRICITY(),V.INCLINATION=this.INCLINATION(),V.RA_OF_ASC_NODE=this.RA_OF_ASC_NODE(),V.ARG_OF_PERICENTER=this.ARG_OF_PERICENTER(),V.MEAN_ANOMALY=this.MEAN_ANOMALY(),V.GM=this.GM(),V.MASS=this.MASS(),V.SOLAR_RAD_AREA=this.SOLAR_RAD_AREA(),V.SOLAR_RAD_COEFF=this.SOLAR_RAD_COEFF(),V.DRAG_AREA=this.DRAG_AREA(),V.DRAG_COEFF=this.DRAG_COEFF(),V.EPHEMERIS_TYPE=this.EPHEMERIS_TYPE(),V.CLASSIFICATION_TYPE=this.CLASSIFICATION_TYPE(),V.NORAD_CAT_ID=this.NORAD_CAT_ID(),V.ELEMENT_SET_NO=this.ELEMENT_SET_NO(),V.REV_AT_EPOCH=this.REV_AT_EPOCH(),V.BSTAR=this.BSTAR(),V.MEAN_MOTION_DOT=this.MEAN_MOTION_DOT(),V.MEAN_MOTION_DDOT=this.MEAN_MOTION_DDOT(),V.COV_REF_FRAME=this.COV_REF_FRAME(),V.CX_X=this.CX_X(),V.CY_X=this.CY_X(),V.CY_Y=this.CY_Y(),V.CZ_X=this.CZ_X(),V.CZ_Y=this.CZ_Y(),V.CZ_Z=this.CZ_Z(),V.CX_DOT_X=this.CX_DOT_X(),V.CX_DOT_Y=this.CX_DOT_Y(),V.CX_DOT_Z=this.CX_DOT_Z(),V.CX_DOT_X_DOT=this.CX_DOT_X_DOT(),V.CY_DOT_X=this.CY_DOT_X(),V.CY_DOT_Y=this.CY_DOT_Y(),V.CY_DOT_Z=this.CY_DOT_Z(),V.CY_DOT_X_DOT=this.CY_DOT_X_DOT(),V.CY_DOT_Y_DOT=this.CY_DOT_Y_DOT(),V.CZ_DOT_X=this.CZ_DOT_X(),V.CZ_DOT_Y=this.CZ_DOT_Y(),V.CZ_DOT_Z=this.CZ_DOT_Z(),V.CZ_DOT_X_DOT=this.CZ_DOT_X_DOT(),V.CZ_DOT_Y_DOT=this.CZ_DOT_Y_DOT(),V.CZ_DOT_Z_DOT=this.CZ_DOT_Z_DOT(),V.USER_DEFINED_BIP_0044_TYPE=this.USER_DEFINED_BIP_0044_TYPE(),V.USER_DEFINED_OBJECT_DESIGNATOR=this.USER_DEFINED_OBJECT_DESIGNATOR(),V.USER_DEFINED_EARTH_MODEL=this.USER_DEFINED_EARTH_MODEL(),V.USER_DEFINED_EPOCH_TIMESTAMP=this.USER_DEFINED_EPOCH_TIMESTAMP(),V.USER_DEFINED_MICROSECONDS=this.USER_DEFINED_MICROSECONDS()}},IR=class{constructor(V=0,l=null,Z=null,U=null,A=null,t=null,m=9,i=null,n=11,o=0,h=null,R=null,c=0,Q=0,T=0,S=0,p=0,b=0,E=0,D=0,_=0,Y=0,K=0,ZV=0,j=0,mV=1,BV=null,W=0,VV=0,GV=0,rV=0,FV=0,k=0,UV=0,HV=0,yV=0,xV=0,bV=0,LV=0,Cl=0,pl=0,Yl=0,Hl=0,yl=0,Ll=0,VZ=0,lZ=0,Kl=0,bl=0,ol=0,vl=0,Fl=0,N=0,d=0,B=0,f=0,O=null,$=null,L=0,EV=0){this.CCSDS_OMM_VERS=V,this.CREATION_DATE=l,this.ORIGINATOR=Z,this.OBJECT_NAME=U,this.OBJECT_ID=A,this.CENTER_NAME=t,this.REF_FRAME=m,this.REF_FRAME_EPOCH=i,this.TIME_SYSTEM=n,this.MEAN_ELEMENT_THEORY=o,this.COMMENT=h,this.EPOCH=R,this.SEMI_MAJOR_AXIS=c,this.MEAN_MOTION=Q,this.ECCENTRICITY=T,this.INCLINATION=S,this.RA_OF_ASC_NODE=p,this.ARG_OF_PERICENTER=b,this.MEAN_ANOMALY=E,this.GM=D,this.MASS=_,this.SOLAR_RAD_AREA=Y,this.SOLAR_RAD_COEFF=K,this.DRAG_AREA=ZV,this.DRAG_COEFF=j,this.EPHEMERIS_TYPE=mV,this.CLASSIFICATION_TYPE=BV,this.NORAD_CAT_ID=W,this.ELEMENT_SET_NO=VV,this.REV_AT_EPOCH=GV,this.BSTAR=rV,this.MEAN_MOTION_DOT=FV,this.MEAN_MOTION_DDOT=k,this.COV_REF_FRAME=UV,this.CX_X=HV,this.CY_X=yV,this.CY_Y=xV,this.CZ_X=bV,this.CZ_Y=LV,this.CZ_Z=Cl,this.CX_DOT_X=pl,this.CX_DOT_Y=Yl,this.CX_DOT_Z=Hl,this.CX_DOT_X_DOT=yl,this.CY_DOT_X=Ll,this.CY_DOT_Y=VZ,this.CY_DOT_Z=lZ,this.CY_DOT_X_DOT=Kl,this.CY_DOT_Y_DOT=bl,this.CZ_DOT_X=ol,this.CZ_DOT_Y=vl,this.CZ_DOT_Z=Fl,this.CZ_DOT_X_DOT=N,this.CZ_DOT_Y_DOT=d,this.CZ_DOT_Z_DOT=B,this.USER_DEFINED_BIP_0044_TYPE=f,this.USER_DEFINED_OBJECT_DESIGNATOR=O,this.USER_DEFINED_EARTH_MODEL=$,this.USER_DEFINED_EPOCH_TIMESTAMP=L,this.USER_DEFINED_MICROSECONDS=EV}pack(V){let l=this.CREATION_DATE!==null?V.createString(this.CREATION_DATE):0,Z=this.ORIGINATOR!==null?V.createString(this.ORIGINATOR):0,U=this.OBJECT_NAME!==null?V.createString(this.OBJECT_NAME):0,A=this.OBJECT_ID!==null?V.createString(this.OBJECT_ID):0,t=this.CENTER_NAME!==null?V.createString(this.CENTER_NAME):0,m=this.REF_FRAME_EPOCH!==null?V.createString(this.REF_FRAME_EPOCH):0,i=this.COMMENT!==null?V.createString(this.COMMENT):0,n=this.EPOCH!==null?V.createString(this.EPOCH):0,o=this.CLASSIFICATION_TYPE!==null?V.createString(this.CLASSIFICATION_TYPE):0,h=this.USER_DEFINED_OBJECT_DESIGNATOR!==null?V.createString(this.USER_DEFINED_OBJECT_DESIGNATOR):0,R=this.USER_DEFINED_EARTH_MODEL!==null?V.createString(this.USER_DEFINED_EARTH_MODEL):0;return RV.createOMM(V,this.CCSDS_OMM_VERS,l,Z,U,A,t,this.REF_FRAME,m,this.TIME_SYSTEM,this.MEAN_ELEMENT_THEORY,i,n,this.SEMI_MAJOR_AXIS,this.MEAN_MOTION,this.ECCENTRICITY,this.INCLINATION,this.RA_OF_ASC_NODE,this.ARG_OF_PERICENTER,this.MEAN_ANOMALY,this.GM,this.MASS,this.SOLAR_RAD_AREA,this.SOLAR_RAD_COEFF,this.DRAG_AREA,this.DRAG_COEFF,this.EPHEMERIS_TYPE,o,this.NORAD_CAT_ID,this.ELEMENT_SET_NO,this.REV_AT_EPOCH,this.BSTAR,this.MEAN_MOTION_DOT,this.MEAN_MOTION_DDOT,this.COV_REF_FRAME,this.CX_X,this.CY_X,this.CY_Y,this.CZ_X,this.CZ_Y,this.CZ_Z,this.CX_DOT_X,this.CX_DOT_Y,this.CX_DOT_Z,this.CX_DOT_X_DOT,this.CY_DOT_X,this.CY_DOT_Y,this.CY_DOT_Z,this.CY_DOT_X_DOT,this.CY_DOT_Y_DOT,this.CZ_DOT_X,this.CZ_DOT_Y,this.CZ_DOT_Z,this.CZ_DOT_X_DOT,this.CZ_DOT_Y_DOT,this.CZ_DOT_Z_DOT,this.USER_DEFINED_BIP_0044_TYPE,h,R,this.USER_DEFINED_EPOCH_TIMESTAMP,this.USER_DEFINED_MICROSECONDS)}},UU=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsOMMCOLLECTION(V,l){return(l||new UU).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsOMMCOLLECTION(V,l){return V.setPosition(V.position()+Bl),(l||new UU).__init(V.readInt32(V.position())+V.position(),V)}RECORDS(V,l){let Z=this.bb.__offset(this.bb_pos,4);return Z?(l||new RV).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+Z)+V*4),this.bb):null}recordsLength(){let V=this.bb.__offset(this.bb_pos,4);return V?this.bb.__vector_len(this.bb_pos+V):0}static startOMMCOLLECTION(V){V.startObject(1)}static addRecords(V,l){V.addFieldOffset(0,l,0)}static createRecordsVector(V,l){V.startVector(4,l.length,4);for(let Z=l.length-1;Z>=0;Z--)V.addOffset(l[Z]);return V.endVector()}static startRecordsVector(V,l){V.startVector(4,l,4)}static endOMMCOLLECTION(V){return V.endObject()}static createOMMCOLLECTION(V,l){return UU.startOMMCOLLECTION(V),UU.addRecords(V,l),UU.endOMMCOLLECTION(V)}unpack(){return new cR(this.bb.createObjList(this.RECORDS.bind(this),this.recordsLength()))}unpackTo(V){V.RECORDS=this.bb.createObjList(this.RECORDS.bind(this),this.recordsLength())}},cR=class{constructor(V=[]){this.RECORDS=V}pack(V){let l=UU.createRecordsVector(V,V.createObjectOffsetList(this.RECORDS));return UU.createOMMCOLLECTION(V,l)}},Hc={};GU(Hc,{CDM:()=>PV,CDMCOLLECTION:()=>AU,CDMCOLLECTIONT:()=>uR,CDMObject:()=>WV,CDMObjectT:()=>pR,CDMT:()=>bR,covarianceMethod:()=>SR,maneuverableType:()=>CR,objectCenteredReferenceFrame:()=>XR,objectNumber:()=>gR,objectType:()=>NR,referenceFrame:()=>ER,screeningVolumeShape:()=>fR});var SR=(V=>(V[V.CALCULATED=0]="CALCULATED",V[V.DEFAULT=1]="DEFAULT",V))(SR||{}),CR=(V=>(V[V.YES=0]="YES",V[V.NO=1]="NO",V[V.NA=2]="NA",V))(CR||{}),gR=(V=>(V[V.OBJECT1=0]="OBJECT1",V[V.OBJECT2=1]="OBJECT2",V))(gR||{}),NR=(V=>(V[V.PAYLOAD=0]="PAYLOAD",V[V.ROCKET_BODY=1]="ROCKET_BODY",V[V.DEBRIS=2]="DEBRIS",V[V.UNKNOWN=3]="UNKNOWN",V[V.OTHER=4]="OTHER",V))(NR||{}),ER=(V=>(V[V.EME2000=0]="EME2000",V[V.GCRF=1]="GCRF",V[V.ITRF=2]="ITRF",V))(ER||{}),WV=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsCDMObject(V,l){return(l||new WV).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsCDMObject(V,l){return V.setPosition(V.position()+Bl),(l||new WV).__init(V.readInt32(V.position())+V.position(),V)}COMMENT(V){let l=this.bb.__offset(this.bb_pos,4);return l?this.bb.__string(this.bb_pos+l,V):null}OBJECT(){let V=this.bb.__offset(this.bb_pos,6);return V?this.bb.readInt8(this.bb_pos+V):0}OBJECT_DESIGNATOR(V){let l=this.bb.__offset(this.bb_pos,8);return l?this.bb.__string(this.bb_pos+l,V):null}CATALOG_NAME(V){let l=this.bb.__offset(this.bb_pos,10);return l?this.bb.__string(this.bb_pos+l,V):null}OBJECT_NAME(V){let l=this.bb.__offset(this.bb_pos,12);return l?this.bb.__string(this.bb_pos+l,V):null}INTERNATIONAL_DESIGNATOR(V){let l=this.bb.__offset(this.bb_pos,14);return l?this.bb.__string(this.bb_pos+l,V):null}OBJECT_TYPE(){let V=this.bb.__offset(this.bb_pos,16);return V?this.bb.readInt8(this.bb_pos+V):0}OPERATOR_CONTACT_POSITION(V){let l=this.bb.__offset(this.bb_pos,18);return l?this.bb.__string(this.bb_pos+l,V):null}OPERATOR_ORGANIZATION(V){let l=this.bb.__offset(this.bb_pos,20);return l?this.bb.__string(this.bb_pos+l,V):null}EPHEMERIS_NAME(V){let l=this.bb.__offset(this.bb_pos,22);return l?this.bb.__string(this.bb_pos+l,V):null}COVARIANCE_METHOD(){let V=this.bb.__offset(this.bb_pos,24);return V?this.bb.readInt8(this.bb_pos+V):0}MANEUVERABLE(){let V=this.bb.__offset(this.bb_pos,26);return V?this.bb.readInt8(this.bb_pos+V):0}ORBIT_CENTER(V){let l=this.bb.__offset(this.bb_pos,28);return l?this.bb.__string(this.bb_pos+l,V):null}REF_FRAME(){let V=this.bb.__offset(this.bb_pos,30);return V?this.bb.readInt8(this.bb_pos+V):0}GRAVITY_MODEL(V){let l=this.bb.__offset(this.bb_pos,32);return l?this.bb.__string(this.bb_pos+l,V):null}ATMOSPHERIC_MODEL(V){let l=this.bb.__offset(this.bb_pos,34);return l?this.bb.__string(this.bb_pos+l,V):null}N_BODY_PERTURBATIONS(V){let l=this.bb.__offset(this.bb_pos,36);return l?this.bb.__string(this.bb_pos+l,V):null}SOLAR_RAD_PRESSURE(){let V=this.bb.__offset(this.bb_pos,38);return V?!!this.bb.readInt8(this.bb_pos+V):!1}EARTH_TIDES(){let V=this.bb.__offset(this.bb_pos,40);return V?!!this.bb.readInt8(this.bb_pos+V):!1}INTRACK_THRUST(){let V=this.bb.__offset(this.bb_pos,42);return V?!!this.bb.readInt8(this.bb_pos+V):!1}TIME_LASTOB_START(V){let l=this.bb.__offset(this.bb_pos,44);return l?this.bb.__string(this.bb_pos+l,V):null}TIME_LASTOB_END(V){let l=this.bb.__offset(this.bb_pos,46);return l?this.bb.__string(this.bb_pos+l,V):null}RECOMMENDED_OD_SPAN(){let V=this.bb.__offset(this.bb_pos,48);return V?this.bb.readFloat64(this.bb_pos+V):0}ACTUAL_OD_SPAN(){let V=this.bb.__offset(this.bb_pos,50);return V?this.bb.readFloat64(this.bb_pos+V):0}OBS_AVAILABLE(){let V=this.bb.__offset(this.bb_pos,52);return V?this.bb.readUint32(this.bb_pos+V):0}OBS_USED(){let V=this.bb.__offset(this.bb_pos,54);return V?this.bb.readUint32(this.bb_pos+V):0}TRACKS_AVAILABLE(){let V=this.bb.__offset(this.bb_pos,56);return V?this.bb.readUint32(this.bb_pos+V):0}TRACKS_USED(){let V=this.bb.__offset(this.bb_pos,58);return V?this.bb.readUint32(this.bb_pos+V):0}RESIDUALS_ACCEPTED(){let V=this.bb.__offset(this.bb_pos,60);return V?this.bb.readFloat64(this.bb_pos+V):0}WEIGHTED_RMS(){let V=this.bb.__offset(this.bb_pos,62);return V?this.bb.readFloat64(this.bb_pos+V):0}AREA_PC(){let V=this.bb.__offset(this.bb_pos,64);return V?this.bb.readFloat64(this.bb_pos+V):0}AREA_DRG(){let V=this.bb.__offset(this.bb_pos,66);return V?this.bb.readFloat64(this.bb_pos+V):0}AREA_SRP(){let V=this.bb.__offset(this.bb_pos,68);return V?this.bb.readFloat64(this.bb_pos+V):0}MASS(){let V=this.bb.__offset(this.bb_pos,70);return V?this.bb.readFloat64(this.bb_pos+V):0}CR_AREA_OVER_MASS(){let V=this.bb.__offset(this.bb_pos,72);return V?this.bb.readFloat64(this.bb_pos+V):0}THRUST_ACCELERATION(){let V=this.bb.__offset(this.bb_pos,74);return V?this.bb.readFloat64(this.bb_pos+V):0}SEDR(){let V=this.bb.__offset(this.bb_pos,76);return V?this.bb.readFloat64(this.bb_pos+V):0}X(){let V=this.bb.__offset(this.bb_pos,78);return V?this.bb.readFloat64(this.bb_pos+V):0}Y(){let V=this.bb.__offset(this.bb_pos,80);return V?this.bb.readFloat64(this.bb_pos+V):0}Z(){let V=this.bb.__offset(this.bb_pos,82);return V?this.bb.readFloat64(this.bb_pos+V):0}X_DOT(){let V=this.bb.__offset(this.bb_pos,84);return V?this.bb.readFloat64(this.bb_pos+V):0}Y_DOT(){let V=this.bb.__offset(this.bb_pos,86);return V?this.bb.readFloat64(this.bb_pos+V):0}Z_DOT(){let V=this.bb.__offset(this.bb_pos,88);return V?this.bb.readFloat64(this.bb_pos+V):0}CR_R(){let V=this.bb.__offset(this.bb_pos,90);return V?this.bb.readFloat64(this.bb_pos+V):0}CT_R(){let V=this.bb.__offset(this.bb_pos,92);return V?this.bb.readFloat64(this.bb_pos+V):0}CT_T(){let V=this.bb.__offset(this.bb_pos,94);return V?this.bb.readFloat64(this.bb_pos+V):0}CN_R(){let V=this.bb.__offset(this.bb_pos,96);return V?this.bb.readFloat64(this.bb_pos+V):0}CN_T(){let V=this.bb.__offset(this.bb_pos,98);return V?this.bb.readFloat64(this.bb_pos+V):0}CN_N(){let V=this.bb.__offset(this.bb_pos,100);return V?this.bb.readFloat64(this.bb_pos+V):0}CRDOT_R(){let V=this.bb.__offset(this.bb_pos,102);return V?this.bb.readFloat64(this.bb_pos+V):0}CRDOT_T(){let V=this.bb.__offset(this.bb_pos,104);return V?this.bb.readFloat64(this.bb_pos+V):0}CRDOT_N(){let V=this.bb.__offset(this.bb_pos,106);return V?this.bb.readFloat64(this.bb_pos+V):0}CRDOT_RDOT(){let V=this.bb.__offset(this.bb_pos,108);return V?this.bb.readFloat64(this.bb_pos+V):0}CTDOT_R(){let V=this.bb.__offset(this.bb_pos,110);return V?this.bb.readFloat64(this.bb_pos+V):0}CTDOT_T(){let V=this.bb.__offset(this.bb_pos,112);return V?this.bb.readFloat64(this.bb_pos+V):0}CTDOT_N(){let V=this.bb.__offset(this.bb_pos,114);return V?this.bb.readFloat64(this.bb_pos+V):0}CTDOT_RDOT(){let V=this.bb.__offset(this.bb_pos,116);return V?this.bb.readFloat64(this.bb_pos+V):0}CTDOT_TDOT(){let V=this.bb.__offset(this.bb_pos,118);return V?this.bb.readFloat64(this.bb_pos+V):0}CNDOT_R(){let V=this.bb.__offset(this.bb_pos,120);return V?this.bb.readFloat64(this.bb_pos+V):0}CNDOT_T(){let V=this.bb.__offset(this.bb_pos,122);return V?this.bb.readFloat64(this.bb_pos+V):0}CNDOT_N(){let V=this.bb.__offset(this.bb_pos,124);return V?this.bb.readFloat64(this.bb_pos+V):0}CNDOT_RDOT(){let V=this.bb.__offset(this.bb_pos,126);return V?this.bb.readFloat64(this.bb_pos+V):0}CNDOT_TDOT(){let V=this.bb.__offset(this.bb_pos,128);return V?this.bb.readFloat64(this.bb_pos+V):0}CNDOT_NDOT(){let V=this.bb.__offset(this.bb_pos,130);return V?this.bb.readFloat64(this.bb_pos+V):0}CDRG_R(){let V=this.bb.__offset(this.bb_pos,132);return V?this.bb.readFloat64(this.bb_pos+V):0}CDRG_T(){let V=this.bb.__offset(this.bb_pos,134);return V?this.bb.readFloat64(this.bb_pos+V):0}CDRG_N(){let V=this.bb.__offset(this.bb_pos,136);return V?this.bb.readFloat64(this.bb_pos+V):0}CDRG_RDOT(){let V=this.bb.__offset(this.bb_pos,138);return V?this.bb.readFloat64(this.bb_pos+V):0}CDRG_TDOT(){let V=this.bb.__offset(this.bb_pos,140);return V?this.bb.readFloat64(this.bb_pos+V):0}CDRG_NDOT(){let V=this.bb.__offset(this.bb_pos,142);return V?this.bb.readFloat64(this.bb_pos+V):0}CDRG_DRG(){let V=this.bb.__offset(this.bb_pos,144);return V?this.bb.readFloat64(this.bb_pos+V):0}CSRP_R(){let V=this.bb.__offset(this.bb_pos,146);return V?this.bb.readFloat64(this.bb_pos+V):0}CSRP_T(){let V=this.bb.__offset(this.bb_pos,148);return V?this.bb.readFloat64(this.bb_pos+V):0}CSRP_N(){let V=this.bb.__offset(this.bb_pos,150);return V?this.bb.readFloat64(this.bb_pos+V):0}CSRP_RDOT(){let V=this.bb.__offset(this.bb_pos,152);return V?this.bb.readFloat64(this.bb_pos+V):0}CSRP_TDOT(){let V=this.bb.__offset(this.bb_pos,154);return V?this.bb.readFloat64(this.bb_pos+V):0}CSRP_NDOT(){let V=this.bb.__offset(this.bb_pos,156);return V?this.bb.readFloat64(this.bb_pos+V):0}CSRP_DRG(){let V=this.bb.__offset(this.bb_pos,158);return V?this.bb.readFloat64(this.bb_pos+V):0}CSRP_SRP(){let V=this.bb.__offset(this.bb_pos,160);return V?this.bb.readFloat64(this.bb_pos+V):0}CTHR_R(){let V=this.bb.__offset(this.bb_pos,162);return V?this.bb.readFloat64(this.bb_pos+V):0}CTHR_T(){let V=this.bb.__offset(this.bb_pos,164);return V?this.bb.readFloat64(this.bb_pos+V):0}CTHR_N(){let V=this.bb.__offset(this.bb_pos,166);return V?this.bb.readFloat64(this.bb_pos+V):0}CTHR_RDOT(){let V=this.bb.__offset(this.bb_pos,168);return V?this.bb.readFloat64(this.bb_pos+V):0}CTHR_TDOT(){let V=this.bb.__offset(this.bb_pos,170);return V?this.bb.readFloat64(this.bb_pos+V):0}CTHR_NDOT(){let V=this.bb.__offset(this.bb_pos,172);return V?this.bb.readFloat64(this.bb_pos+V):0}CTHR_DRG(){let V=this.bb.__offset(this.bb_pos,174);return V?this.bb.readFloat64(this.bb_pos+V):0}CTHR_SRP(){let V=this.bb.__offset(this.bb_pos,176);return V?this.bb.readFloat64(this.bb_pos+V):0}CTHR_THR(){let V=this.bb.__offset(this.bb_pos,178);return V?this.bb.readFloat64(this.bb_pos+V):0}static startCDMObject(V){V.startObject(88)}static addComment(V,l){V.addFieldOffset(0,l,0)}static addObject(V,l){V.addFieldInt8(1,l,0)}static addObjectDesignator(V,l){V.addFieldOffset(2,l,0)}static addCatalogName(V,l){V.addFieldOffset(3,l,0)}static addObjectName(V,l){V.addFieldOffset(4,l,0)}static addInternationalDesignator(V,l){V.addFieldOffset(5,l,0)}static addObjectType(V,l){V.addFieldInt8(6,l,0)}static addOperatorContactPosition(V,l){V.addFieldOffset(7,l,0)}static addOperatorOrganization(V,l){V.addFieldOffset(8,l,0)}static addEphemerisName(V,l){V.addFieldOffset(9,l,0)}static addCovarianceMethod(V,l){V.addFieldInt8(10,l,0)}static addManeuverable(V,l){V.addFieldInt8(11,l,0)}static addOrbitCenter(V,l){V.addFieldOffset(12,l,0)}static addRefFrame(V,l){V.addFieldInt8(13,l,0)}static addGravityModel(V,l){V.addFieldOffset(14,l,0)}static addAtmosphericModel(V,l){V.addFieldOffset(15,l,0)}static addNBodyPerturbations(V,l){V.addFieldOffset(16,l,0)}static addSolarRadPressure(V,l){V.addFieldInt8(17,+l,0)}static addEarthTides(V,l){V.addFieldInt8(18,+l,0)}static addIntrackThrust(V,l){V.addFieldInt8(19,+l,0)}static addTimeLastobStart(V,l){V.addFieldOffset(20,l,0)}static addTimeLastobEnd(V,l){V.addFieldOffset(21,l,0)}static addRecommendedOdSpan(V,l){V.addFieldFloat64(22,l,0)}static addActualOdSpan(V,l){V.addFieldFloat64(23,l,0)}static addObsAvailable(V,l){V.addFieldInt32(24,l,0)}static addObsUsed(V,l){V.addFieldInt32(25,l,0)}static addTracksAvailable(V,l){V.addFieldInt32(26,l,0)}static addTracksUsed(V,l){V.addFieldInt32(27,l,0)}static addResidualsAccepted(V,l){V.addFieldFloat64(28,l,0)}static addWeightedRms(V,l){V.addFieldFloat64(29,l,0)}static addAreaPc(V,l){V.addFieldFloat64(30,l,0)}static addAreaDrg(V,l){V.addFieldFloat64(31,l,0)}static addAreaSrp(V,l){V.addFieldFloat64(32,l,0)}static addMass(V,l){V.addFieldFloat64(33,l,0)}static addCrAreaOverMass(V,l){V.addFieldFloat64(34,l,0)}static addThrustAcceleration(V,l){V.addFieldFloat64(35,l,0)}static addSedr(V,l){V.addFieldFloat64(36,l,0)}static addX(V,l){V.addFieldFloat64(37,l,0)}static addY(V,l){V.addFieldFloat64(38,l,0)}static addZ(V,l){V.addFieldFloat64(39,l,0)}static addXDot(V,l){V.addFieldFloat64(40,l,0)}static addYDot(V,l){V.addFieldFloat64(41,l,0)}static addZDot(V,l){V.addFieldFloat64(42,l,0)}static addCrR(V,l){V.addFieldFloat64(43,l,0)}static addCtR(V,l){V.addFieldFloat64(44,l,0)}static addCtT(V,l){V.addFieldFloat64(45,l,0)}static addCnR(V,l){V.addFieldFloat64(46,l,0)}static addCnT(V,l){V.addFieldFloat64(47,l,0)}static addCnN(V,l){V.addFieldFloat64(48,l,0)}static addCrdotR(V,l){V.addFieldFloat64(49,l,0)}static addCrdotT(V,l){V.addFieldFloat64(50,l,0)}static addCrdotN(V,l){V.addFieldFloat64(51,l,0)}static addCrdotRdot(V,l){V.addFieldFloat64(52,l,0)}static addCtdotR(V,l){V.addFieldFloat64(53,l,0)}static addCtdotT(V,l){V.addFieldFloat64(54,l,0)}static addCtdotN(V,l){V.addFieldFloat64(55,l,0)}static addCtdotRdot(V,l){V.addFieldFloat64(56,l,0)}static addCtdotTdot(V,l){V.addFieldFloat64(57,l,0)}static addCndotR(V,l){V.addFieldFloat64(58,l,0)}static addCndotT(V,l){V.addFieldFloat64(59,l,0)}static addCndotN(V,l){V.addFieldFloat64(60,l,0)}static addCndotRdot(V,l){V.addFieldFloat64(61,l,0)}static addCndotTdot(V,l){V.addFieldFloat64(62,l,0)}static addCndotNdot(V,l){V.addFieldFloat64(63,l,0)}static addCdrgR(V,l){V.addFieldFloat64(64,l,0)}static addCdrgT(V,l){V.addFieldFloat64(65,l,0)}static addCdrgN(V,l){V.addFieldFloat64(66,l,0)}static addCdrgRdot(V,l){V.addFieldFloat64(67,l,0)}static addCdrgTdot(V,l){V.addFieldFloat64(68,l,0)}static addCdrgNdot(V,l){V.addFieldFloat64(69,l,0)}static addCdrgDrg(V,l){V.addFieldFloat64(70,l,0)}static addCsrpR(V,l){V.addFieldFloat64(71,l,0)}static addCsrpT(V,l){V.addFieldFloat64(72,l,0)}static addCsrpN(V,l){V.addFieldFloat64(73,l,0)}static addCsrpRdot(V,l){V.addFieldFloat64(74,l,0)}static addCsrpTdot(V,l){V.addFieldFloat64(75,l,0)}static addCsrpNdot(V,l){V.addFieldFloat64(76,l,0)}static addCsrpDrg(V,l){V.addFieldFloat64(77,l,0)}static addCsrpSrp(V,l){V.addFieldFloat64(78,l,0)}static addCthrR(V,l){V.addFieldFloat64(79,l,0)}static addCthrT(V,l){V.addFieldFloat64(80,l,0)}static addCthrN(V,l){V.addFieldFloat64(81,l,0)}static addCthrRdot(V,l){V.addFieldFloat64(82,l,0)}static addCthrTdot(V,l){V.addFieldFloat64(83,l,0)}static addCthrNdot(V,l){V.addFieldFloat64(84,l,0)}static addCthrDrg(V,l){V.addFieldFloat64(85,l,0)}static addCthrSrp(V,l){V.addFieldFloat64(86,l,0)}static addCthrThr(V,l){V.addFieldFloat64(87,l,0)}static endCDMObject(V){return V.endObject()}static createCDMObject(V,l,Z,U,A,t,m,i,n,o,h,R,c,Q,T,S,p,b,E,D,_,Y,K,ZV,j,mV,BV,W,VV,GV,rV,FV,k,UV,HV,yV,xV,bV,LV,Cl,pl,Yl,Hl,yl,Ll,VZ,lZ,Kl,bl,ol,vl,Fl,N,d,B,f,O,$,L,EV,MV,jV,DV,zV,nW,yW,vW,AA,tA,pV,Xl,TZ,eA,fU,mA,iA,bU,uU,nA,aU,GW,SZ,JU,sW,CZ,GA,sA,aA,Qe){return WV.startCDMObject(V),WV.addComment(V,l),WV.addObject(V,Z),WV.addObjectDesignator(V,U),WV.addCatalogName(V,A),WV.addObjectName(V,t),WV.addInternationalDesignator(V,m),WV.addObjectType(V,i),WV.addOperatorContactPosition(V,n),WV.addOperatorOrganization(V,o),WV.addEphemerisName(V,h),WV.addCovarianceMethod(V,R),WV.addManeuverable(V,c),WV.addOrbitCenter(V,Q),WV.addRefFrame(V,T),WV.addGravityModel(V,S),WV.addAtmosphericModel(V,p),WV.addNBodyPerturbations(V,b),WV.addSolarRadPressure(V,E),WV.addEarthTides(V,D),WV.addIntrackThrust(V,_),WV.addTimeLastobStart(V,Y),WV.addTimeLastobEnd(V,K),WV.addRecommendedOdSpan(V,ZV),WV.addActualOdSpan(V,j),WV.addObsAvailable(V,mV),WV.addObsUsed(V,BV),WV.addTracksAvailable(V,W),WV.addTracksUsed(V,VV),WV.addResidualsAccepted(V,GV),WV.addWeightedRms(V,rV),WV.addAreaPc(V,FV),WV.addAreaDrg(V,k),WV.addAreaSrp(V,UV),WV.addMass(V,HV),WV.addCrAreaOverMass(V,yV),WV.addThrustAcceleration(V,xV),WV.addSedr(V,bV),WV.addX(V,LV),WV.addY(V,Cl),WV.addZ(V,pl),WV.addXDot(V,Yl),WV.addYDot(V,Hl),WV.addZDot(V,yl),WV.addCrR(V,Ll),WV.addCtR(V,VZ),WV.addCtT(V,lZ),WV.addCnR(V,Kl),WV.addCnT(V,bl),WV.addCnN(V,ol),WV.addCrdotR(V,vl),WV.addCrdotT(V,Fl),WV.addCrdotN(V,N),WV.addCrdotRdot(V,d),WV.addCtdotR(V,B),WV.addCtdotT(V,f),WV.addCtdotN(V,O),WV.addCtdotRdot(V,$),WV.addCtdotTdot(V,L),WV.addCndotR(V,EV),WV.addCndotT(V,MV),WV.addCndotN(V,jV),WV.addCndotRdot(V,DV),WV.addCndotTdot(V,zV),WV.addCndotNdot(V,nW),WV.addCdrgR(V,yW),WV.addCdrgT(V,vW),WV.addCdrgN(V,AA),WV.addCdrgRdot(V,tA),WV.addCdrgTdot(V,pV),WV.addCdrgNdot(V,Xl),WV.addCdrgDrg(V,TZ),WV.addCsrpR(V,eA),WV.addCsrpT(V,fU),WV.addCsrpN(V,mA),WV.addCsrpRdot(V,iA),WV.addCsrpTdot(V,bU),WV.addCsrpNdot(V,uU),WV.addCsrpDrg(V,nA),WV.addCsrpSrp(V,aU),WV.addCthrR(V,GW),WV.addCthrT(V,SZ),WV.addCthrN(V,JU),WV.addCthrRdot(V,sW),WV.addCthrTdot(V,CZ),WV.addCthrNdot(V,GA),WV.addCthrDrg(V,sA),WV.addCthrSrp(V,aA),WV.addCthrThr(V,Qe),WV.endCDMObject(V)}unpack(){return new pR(this.COMMENT(),this.OBJECT(),this.OBJECT_DESIGNATOR(),this.CATALOG_NAME(),this.OBJECT_NAME(),this.INTERNATIONAL_DESIGNATOR(),this.OBJECT_TYPE(),this.OPERATOR_CONTACT_POSITION(),this.OPERATOR_ORGANIZATION(),this.EPHEMERIS_NAME(),this.COVARIANCE_METHOD(),this.MANEUVERABLE(),this.ORBIT_CENTER(),this.REF_FRAME(),this.GRAVITY_MODEL(),this.ATMOSPHERIC_MODEL(),this.N_BODY_PERTURBATIONS(),this.SOLAR_RAD_PRESSURE(),this.EARTH_TIDES(),this.INTRACK_THRUST(),this.TIME_LASTOB_START(),this.TIME_LASTOB_END(),this.RECOMMENDED_OD_SPAN(),this.ACTUAL_OD_SPAN(),this.OBS_AVAILABLE(),this.OBS_USED(),this.TRACKS_AVAILABLE(),this.TRACKS_USED(),this.RESIDUALS_ACCEPTED(),this.WEIGHTED_RMS(),this.AREA_PC(),this.AREA_DRG(),this.AREA_SRP(),this.MASS(),this.CR_AREA_OVER_MASS(),this.THRUST_ACCELERATION(),this.SEDR(),this.X(),this.Y(),this.Z(),this.X_DOT(),this.Y_DOT(),this.Z_DOT(),this.CR_R(),this.CT_R(),this.CT_T(),this.CN_R(),this.CN_T(),this.CN_N(),this.CRDOT_R(),this.CRDOT_T(),this.CRDOT_N(),this.CRDOT_RDOT(),this.CTDOT_R(),this.CTDOT_T(),this.CTDOT_N(),this.CTDOT_RDOT(),this.CTDOT_TDOT(),this.CNDOT_R(),this.CNDOT_T(),this.CNDOT_N(),this.CNDOT_RDOT(),this.CNDOT_TDOT(),this.CNDOT_NDOT(),this.CDRG_R(),this.CDRG_T(),this.CDRG_N(),this.CDRG_RDOT(),this.CDRG_TDOT(),this.CDRG_NDOT(),this.CDRG_DRG(),this.CSRP_R(),this.CSRP_T(),this.CSRP_N(),this.CSRP_RDOT(),this.CSRP_TDOT(),this.CSRP_NDOT(),this.CSRP_DRG(),this.CSRP_SRP(),this.CTHR_R(),this.CTHR_T(),this.CTHR_N(),this.CTHR_RDOT(),this.CTHR_TDOT(),this.CTHR_NDOT(),this.CTHR_DRG(),this.CTHR_SRP(),this.CTHR_THR())}unpackTo(V){V.COMMENT=this.COMMENT(),V.OBJECT=this.OBJECT(),V.OBJECT_DESIGNATOR=this.OBJECT_DESIGNATOR(),V.CATALOG_NAME=this.CATALOG_NAME(),V.OBJECT_NAME=this.OBJECT_NAME(),V.INTERNATIONAL_DESIGNATOR=this.INTERNATIONAL_DESIGNATOR(),V.OBJECT_TYPE=this.OBJECT_TYPE(),V.OPERATOR_CONTACT_POSITION=this.OPERATOR_CONTACT_POSITION(),V.OPERATOR_ORGANIZATION=this.OPERATOR_ORGANIZATION(),V.EPHEMERIS_NAME=this.EPHEMERIS_NAME(),V.COVARIANCE_METHOD=this.COVARIANCE_METHOD(),V.MANEUVERABLE=this.MANEUVERABLE(),V.ORBIT_CENTER=this.ORBIT_CENTER(),V.REF_FRAME=this.REF_FRAME(),V.GRAVITY_MODEL=this.GRAVITY_MODEL(),V.ATMOSPHERIC_MODEL=this.ATMOSPHERIC_MODEL(),V.N_BODY_PERTURBATIONS=this.N_BODY_PERTURBATIONS(),V.SOLAR_RAD_PRESSURE=this.SOLAR_RAD_PRESSURE(),V.EARTH_TIDES=this.EARTH_TIDES(),V.INTRACK_THRUST=this.INTRACK_THRUST(),V.TIME_LASTOB_START=this.TIME_LASTOB_START(),V.TIME_LASTOB_END=this.TIME_LASTOB_END(),V.RECOMMENDED_OD_SPAN=this.RECOMMENDED_OD_SPAN(),V.ACTUAL_OD_SPAN=this.ACTUAL_OD_SPAN(),V.OBS_AVAILABLE=this.OBS_AVAILABLE(),V.OBS_USED=this.OBS_USED(),V.TRACKS_AVAILABLE=this.TRACKS_AVAILABLE(),V.TRACKS_USED=this.TRACKS_USED(),V.RESIDUALS_ACCEPTED=this.RESIDUALS_ACCEPTED(),V.WEIGHTED_RMS=this.WEIGHTED_RMS(),V.AREA_PC=this.AREA_PC(),V.AREA_DRG=this.AREA_DRG(),V.AREA_SRP=this.AREA_SRP(),V.MASS=this.MASS(),V.CR_AREA_OVER_MASS=this.CR_AREA_OVER_MASS(),V.THRUST_ACCELERATION=this.THRUST_ACCELERATION(),V.SEDR=this.SEDR(),V.X=this.X(),V.Y=this.Y(),V.Z=this.Z(),V.X_DOT=this.X_DOT(),V.Y_DOT=this.Y_DOT(),V.Z_DOT=this.Z_DOT(),V.CR_R=this.CR_R(),V.CT_R=this.CT_R(),V.CT_T=this.CT_T(),V.CN_R=this.CN_R(),V.CN_T=this.CN_T(),V.CN_N=this.CN_N(),V.CRDOT_R=this.CRDOT_R(),V.CRDOT_T=this.CRDOT_T(),V.CRDOT_N=this.CRDOT_N(),V.CRDOT_RDOT=this.CRDOT_RDOT(),V.CTDOT_R=this.CTDOT_R(),V.CTDOT_T=this.CTDOT_T(),V.CTDOT_N=this.CTDOT_N(),V.CTDOT_RDOT=this.CTDOT_RDOT(),V.CTDOT_TDOT=this.CTDOT_TDOT(),V.CNDOT_R=this.CNDOT_R(),V.CNDOT_T=this.CNDOT_T(),V.CNDOT_N=this.CNDOT_N(),V.CNDOT_RDOT=this.CNDOT_RDOT(),V.CNDOT_TDOT=this.CNDOT_TDOT(),V.CNDOT_NDOT=this.CNDOT_NDOT(),V.CDRG_R=this.CDRG_R(),V.CDRG_T=this.CDRG_T(),V.CDRG_N=this.CDRG_N(),V.CDRG_RDOT=this.CDRG_RDOT(),V.CDRG_TDOT=this.CDRG_TDOT(),V.CDRG_NDOT=this.CDRG_NDOT(),V.CDRG_DRG=this.CDRG_DRG(),V.CSRP_R=this.CSRP_R(),V.CSRP_T=this.CSRP_T(),V.CSRP_N=this.CSRP_N(),V.CSRP_RDOT=this.CSRP_RDOT(),V.CSRP_TDOT=this.CSRP_TDOT(),V.CSRP_NDOT=this.CSRP_NDOT(),V.CSRP_DRG=this.CSRP_DRG(),V.CSRP_SRP=this.CSRP_SRP(),V.CTHR_R=this.CTHR_R(),V.CTHR_T=this.CTHR_T(),V.CTHR_N=this.CTHR_N(),V.CTHR_RDOT=this.CTHR_RDOT(),V.CTHR_TDOT=this.CTHR_TDOT(),V.CTHR_NDOT=this.CTHR_NDOT(),V.CTHR_DRG=this.CTHR_DRG(),V.CTHR_SRP=this.CTHR_SRP(),V.CTHR_THR=this.CTHR_THR()}},pR=class{constructor(V=null,l=0,Z=null,U=null,A=null,t=null,m=0,i=null,n=null,o=null,h=0,R=0,c=null,Q=0,T=null,S=null,p=null,b=!1,E=!1,D=!1,_=null,Y=null,K=0,ZV=0,j=0,mV=0,BV=0,W=0,VV=0,GV=0,rV=0,FV=0,k=0,UV=0,HV=0,yV=0,xV=0,bV=0,LV=0,Cl=0,pl=0,Yl=0,Hl=0,yl=0,Ll=0,VZ=0,lZ=0,Kl=0,bl=0,ol=0,vl=0,Fl=0,N=0,d=0,B=0,f=0,O=0,$=0,L=0,EV=0,MV=0,jV=0,DV=0,zV=0,nW=0,yW=0,vW=0,AA=0,tA=0,pV=0,Xl=0,TZ=0,eA=0,fU=0,mA=0,iA=0,bU=0,uU=0,nA=0,aU=0,GW=0,SZ=0,JU=0,sW=0,CZ=0,GA=0,sA=0,aA=0){this.COMMENT=V,this.OBJECT=l,this.OBJECT_DESIGNATOR=Z,this.CATALOG_NAME=U,this.OBJECT_NAME=A,this.INTERNATIONAL_DESIGNATOR=t,this.OBJECT_TYPE=m,this.OPERATOR_CONTACT_POSITION=i,this.OPERATOR_ORGANIZATION=n,this.EPHEMERIS_NAME=o,this.COVARIANCE_METHOD=h,this.MANEUVERABLE=R,this.ORBIT_CENTER=c,this.REF_FRAME=Q,this.GRAVITY_MODEL=T,this.ATMOSPHERIC_MODEL=S,this.N_BODY_PERTURBATIONS=p,this.SOLAR_RAD_PRESSURE=b,this.EARTH_TIDES=E,this.INTRACK_THRUST=D,this.TIME_LASTOB_START=_,this.TIME_LASTOB_END=Y,this.RECOMMENDED_OD_SPAN=K,this.ACTUAL_OD_SPAN=ZV,this.OBS_AVAILABLE=j,this.OBS_USED=mV,this.TRACKS_AVAILABLE=BV,this.TRACKS_USED=W,this.RESIDUALS_ACCEPTED=VV,this.WEIGHTED_RMS=GV,this.AREA_PC=rV,this.AREA_DRG=FV,this.AREA_SRP=k,this.MASS=UV,this.CR_AREA_OVER_MASS=HV,this.THRUST_ACCELERATION=yV,this.SEDR=xV,this.X=bV,this.Y=LV,this.Z=Cl,this.X_DOT=pl,this.Y_DOT=Yl,this.Z_DOT=Hl,this.CR_R=yl,this.CT_R=Ll,this.CT_T=VZ,this.CN_R=lZ,this.CN_T=Kl,this.CN_N=bl,this.CRDOT_R=ol,this.CRDOT_T=vl,this.CRDOT_N=Fl,this.CRDOT_RDOT=N,this.CTDOT_R=d,this.CTDOT_T=B,this.CTDOT_N=f,this.CTDOT_RDOT=O,this.CTDOT_TDOT=$,this.CNDOT_R=L,this.CNDOT_T=EV,this.CNDOT_N=MV,this.CNDOT_RDOT=jV,this.CNDOT_TDOT=DV,this.CNDOT_NDOT=zV,this.CDRG_R=nW,this.CDRG_T=yW,this.CDRG_N=vW,this.CDRG_RDOT=AA,this.CDRG_TDOT=tA,this.CDRG_NDOT=pV,this.CDRG_DRG=Xl,this.CSRP_R=TZ,this.CSRP_T=eA,this.CSRP_N=fU,this.CSRP_RDOT=mA,this.CSRP_TDOT=iA,this.CSRP_NDOT=bU,this.CSRP_DRG=uU,this.CSRP_SRP=nA,this.CTHR_R=aU,this.CTHR_T=GW,this.CTHR_N=SZ,this.CTHR_RDOT=JU,this.CTHR_TDOT=sW,this.CTHR_NDOT=CZ,this.CTHR_DRG=GA,this.CTHR_SRP=sA,this.CTHR_THR=aA}pack(V){let l=this.COMMENT!==null?V.createString(this.COMMENT):0,Z=this.OBJECT_DESIGNATOR!==null?V.createString(this.OBJECT_DESIGNATOR):0,U=this.CATALOG_NAME!==null?V.createString(this.CATALOG_NAME):0,A=this.OBJECT_NAME!==null?V.createString(this.OBJECT_NAME):0,t=this.INTERNATIONAL_DESIGNATOR!==null?V.createString(this.INTERNATIONAL_DESIGNATOR):0,m=this.OPERATOR_CONTACT_POSITION!==null?V.createString(this.OPERATOR_CONTACT_POSITION):0,i=this.OPERATOR_ORGANIZATION!==null?V.createString(this.OPERATOR_ORGANIZATION):0,n=this.EPHEMERIS_NAME!==null?V.createString(this.EPHEMERIS_NAME):0,o=this.ORBIT_CENTER!==null?V.createString(this.ORBIT_CENTER):0,h=this.GRAVITY_MODEL!==null?V.createString(this.GRAVITY_MODEL):0,R=this.ATMOSPHERIC_MODEL!==null?V.createString(this.ATMOSPHERIC_MODEL):0,c=this.N_BODY_PERTURBATIONS!==null?V.createString(this.N_BODY_PERTURBATIONS):0,Q=this.TIME_LASTOB_START!==null?V.createString(this.TIME_LASTOB_START):0,T=this.TIME_LASTOB_END!==null?V.createString(this.TIME_LASTOB_END):0;return WV.createCDMObject(V,l,this.OBJECT,Z,U,A,t,this.OBJECT_TYPE,m,i,n,this.COVARIANCE_METHOD,this.MANEUVERABLE,o,this.REF_FRAME,h,R,c,this.SOLAR_RAD_PRESSURE,this.EARTH_TIDES,this.INTRACK_THRUST,Q,T,this.RECOMMENDED_OD_SPAN,this.ACTUAL_OD_SPAN,this.OBS_AVAILABLE,this.OBS_USED,this.TRACKS_AVAILABLE,this.TRACKS_USED,this.RESIDUALS_ACCEPTED,this.WEIGHTED_RMS,this.AREA_PC,this.AREA_DRG,this.AREA_SRP,this.MASS,this.CR_AREA_OVER_MASS,this.THRUST_ACCELERATION,this.SEDR,this.X,this.Y,this.Z,this.X_DOT,this.Y_DOT,this.Z_DOT,this.CR_R,this.CT_R,this.CT_T,this.CN_R,this.CN_T,this.CN_N,this.CRDOT_R,this.CRDOT_T,this.CRDOT_N,this.CRDOT_RDOT,this.CTDOT_R,this.CTDOT_T,this.CTDOT_N,this.CTDOT_RDOT,this.CTDOT_TDOT,this.CNDOT_R,this.CNDOT_T,this.CNDOT_N,this.CNDOT_RDOT,this.CNDOT_TDOT,this.CNDOT_NDOT,this.CDRG_R,this.CDRG_T,this.CDRG_N,this.CDRG_RDOT,this.CDRG_TDOT,this.CDRG_NDOT,this.CDRG_DRG,this.CSRP_R,this.CSRP_T,this.CSRP_N,this.CSRP_RDOT,this.CSRP_TDOT,this.CSRP_NDOT,this.CSRP_DRG,this.CSRP_SRP,this.CTHR_R,this.CTHR_T,this.CTHR_N,this.CTHR_RDOT,this.CTHR_TDOT,this.CTHR_NDOT,this.CTHR_DRG,this.CTHR_SRP,this.CTHR_THR)}},XR=(V=>(V[V.RTN=0]="RTN",V[V.TVN=1]="TVN",V))(XR||{}),fR=(V=>(V[V.ELLIPSOID=0]="ELLIPSOID",V[V.BOX=1]="BOX",V))(fR||{}),PV=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsCDM(V,l){return(l||new PV).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsCDM(V,l){return V.setPosition(V.position()+Bl),(l||new PV).__init(V.readInt32(V.position())+V.position(),V)}static bufferHasIdentifier(V){return V.__has_identifier("$CDM")}CCSDS_CDM_VERS(){let V=this.bb.__offset(this.bb_pos,4);return V?this.bb.readFloat64(this.bb_pos+V):0}CREATION_DATE(V){let l=this.bb.__offset(this.bb_pos,6);return l?this.bb.__string(this.bb_pos+l,V):null}ORIGINATOR(V){let l=this.bb.__offset(this.bb_pos,8);return l?this.bb.__string(this.bb_pos+l,V):null}MESSAGE_FOR(V){let l=this.bb.__offset(this.bb_pos,10);return l?this.bb.__string(this.bb_pos+l,V):null}MESSAGE_ID(V){let l=this.bb.__offset(this.bb_pos,12);return l?this.bb.__string(this.bb_pos+l,V):null}TCA(V){let l=this.bb.__offset(this.bb_pos,14);return l?this.bb.__string(this.bb_pos+l,V):null}MISS_DISTANCE(){let V=this.bb.__offset(this.bb_pos,16);return V?this.bb.readFloat64(this.bb_pos+V):0}RELATIVE_SPEED(){let V=this.bb.__offset(this.bb_pos,18);return V?this.bb.readFloat64(this.bb_pos+V):0}RELATIVE_POSITION_R(){let V=this.bb.__offset(this.bb_pos,20);return V?this.bb.readFloat64(this.bb_pos+V):0}RELATIVE_POSITION_T(){let V=this.bb.__offset(this.bb_pos,22);return V?this.bb.readFloat64(this.bb_pos+V):0}RELATIVE_POSITION_N(){let V=this.bb.__offset(this.bb_pos,24);return V?this.bb.readFloat64(this.bb_pos+V):0}RELATIVE_VELOCITY_R(){let V=this.bb.__offset(this.bb_pos,26);return V?this.bb.readFloat64(this.bb_pos+V):0}RELATIVE_VELOCITY_T(){let V=this.bb.__offset(this.bb_pos,28);return V?this.bb.readFloat64(this.bb_pos+V):0}RELATIVE_VELOCITY_N(){let V=this.bb.__offset(this.bb_pos,30);return V?this.bb.readFloat64(this.bb_pos+V):0}START_SCREEN_PERIOD(V){let l=this.bb.__offset(this.bb_pos,32);return l?this.bb.__string(this.bb_pos+l,V):null}STOP_SCREEN_PERIOD(V){let l=this.bb.__offset(this.bb_pos,34);return l?this.bb.__string(this.bb_pos+l,V):null}SCREEN_VOLUME_FRAME(){let V=this.bb.__offset(this.bb_pos,36);return V?this.bb.readInt8(this.bb_pos+V):0}SCREEN_VOLUME_SHAPE(){let V=this.bb.__offset(this.bb_pos,38);return V?this.bb.readInt8(this.bb_pos+V):0}SCREEN_VOLUME_X(){let V=this.bb.__offset(this.bb_pos,40);return V?this.bb.readFloat64(this.bb_pos+V):0}SCREEN_VOLUME_Y(){let V=this.bb.__offset(this.bb_pos,42);return V?this.bb.readFloat64(this.bb_pos+V):0}SCREEN_VOLUME_Z(){let V=this.bb.__offset(this.bb_pos,44);return V?this.bb.readFloat64(this.bb_pos+V):0}SCREEN_ENTRY_TIME(V){let l=this.bb.__offset(this.bb_pos,46);return l?this.bb.__string(this.bb_pos+l,V):null}SCREEN_EXIT_TIME(V){let l=this.bb.__offset(this.bb_pos,48);return l?this.bb.__string(this.bb_pos+l,V):null}COLLISION_PROBABILITY(){let V=this.bb.__offset(this.bb_pos,50);return V?this.bb.readFloat64(this.bb_pos+V):0}COLLISION_PROBABILITY_METHOD(V){let l=this.bb.__offset(this.bb_pos,52);return l?this.bb.__string(this.bb_pos+l,V):null}OBJECT1(V){let l=this.bb.__offset(this.bb_pos,54);return l?(V||new WV).__init(this.bb.__indirect(this.bb_pos+l),this.bb):null}OBJECT2(V){let l=this.bb.__offset(this.bb_pos,56);return l?(V||new WV).__init(this.bb.__indirect(this.bb_pos+l),this.bb):null}static startCDM(V){V.startObject(27)}static addCcsdsCdmVers(V,l){V.addFieldFloat64(0,l,0)}static addCreationDate(V,l){V.addFieldOffset(1,l,0)}static addOriginator(V,l){V.addFieldOffset(2,l,0)}static addMessageFor(V,l){V.addFieldOffset(3,l,0)}static addMessageId(V,l){V.addFieldOffset(4,l,0)}static addTca(V,l){V.addFieldOffset(5,l,0)}static addMissDistance(V,l){V.addFieldFloat64(6,l,0)}static addRelativeSpeed(V,l){V.addFieldFloat64(7,l,0)}static addRelativePositionR(V,l){V.addFieldFloat64(8,l,0)}static addRelativePositionT(V,l){V.addFieldFloat64(9,l,0)}static addRelativePositionN(V,l){V.addFieldFloat64(10,l,0)}static addRelativeVelocityR(V,l){V.addFieldFloat64(11,l,0)}static addRelativeVelocityT(V,l){V.addFieldFloat64(12,l,0)}static addRelativeVelocityN(V,l){V.addFieldFloat64(13,l,0)}static addStartScreenPeriod(V,l){V.addFieldOffset(14,l,0)}static addStopScreenPeriod(V,l){V.addFieldOffset(15,l,0)}static addScreenVolumeFrame(V,l){V.addFieldInt8(16,l,0)}static addScreenVolumeShape(V,l){V.addFieldInt8(17,l,0)}static addScreenVolumeX(V,l){V.addFieldFloat64(18,l,0)}static addScreenVolumeY(V,l){V.addFieldFloat64(19,l,0)}static addScreenVolumeZ(V,l){V.addFieldFloat64(20,l,0)}static addScreenEntryTime(V,l){V.addFieldOffset(21,l,0)}static addScreenExitTime(V,l){V.addFieldOffset(22,l,0)}static addCollisionProbability(V,l){V.addFieldFloat64(23,l,0)}static addCollisionProbabilityMethod(V,l){V.addFieldOffset(24,l,0)}static addObject1(V,l){V.addFieldOffset(25,l,0)}static addObject2(V,l){V.addFieldOffset(26,l,0)}static endCDM(V){return V.endObject()}static finishCDMBuffer(V,l){V.finish(l,"$CDM")}static finishSizePrefixedCDMBuffer(V,l){V.finish(l,"$CDM",!0)}unpack(){return new bR(this.CCSDS_CDM_VERS(),this.CREATION_DATE(),this.ORIGINATOR(),this.MESSAGE_FOR(),this.MESSAGE_ID(),this.TCA(),this.MISS_DISTANCE(),this.RELATIVE_SPEED(),this.RELATIVE_POSITION_R(),this.RELATIVE_POSITION_T(),this.RELATIVE_POSITION_N(),this.RELATIVE_VELOCITY_R(),this.RELATIVE_VELOCITY_T(),this.RELATIVE_VELOCITY_N(),this.START_SCREEN_PERIOD(),this.STOP_SCREEN_PERIOD(),this.SCREEN_VOLUME_FRAME(),this.SCREEN_VOLUME_SHAPE(),this.SCREEN_VOLUME_X(),this.SCREEN_VOLUME_Y(),this.SCREEN_VOLUME_Z(),this.SCREEN_ENTRY_TIME(),this.SCREEN_EXIT_TIME(),this.COLLISION_PROBABILITY(),this.COLLISION_PROBABILITY_METHOD(),this.OBJECT1()!==null?this.OBJECT1().unpack():null,this.OBJECT2()!==null?this.OBJECT2().unpack():null)}unpackTo(V){V.CCSDS_CDM_VERS=this.CCSDS_CDM_VERS(),V.CREATION_DATE=this.CREATION_DATE(),V.ORIGINATOR=this.ORIGINATOR(),V.MESSAGE_FOR=this.MESSAGE_FOR(),V.MESSAGE_ID=this.MESSAGE_ID(),V.TCA=this.TCA(),V.MISS_DISTANCE=this.MISS_DISTANCE(),V.RELATIVE_SPEED=this.RELATIVE_SPEED(),V.RELATIVE_POSITION_R=this.RELATIVE_POSITION_R(),V.RELATIVE_POSITION_T=this.RELATIVE_POSITION_T(),V.RELATIVE_POSITION_N=this.RELATIVE_POSITION_N(),V.RELATIVE_VELOCITY_R=this.RELATIVE_VELOCITY_R(),V.RELATIVE_VELOCITY_T=this.RELATIVE_VELOCITY_T(),V.RELATIVE_VELOCITY_N=this.RELATIVE_VELOCITY_N(),V.START_SCREEN_PERIOD=this.START_SCREEN_PERIOD(),V.STOP_SCREEN_PERIOD=this.STOP_SCREEN_PERIOD(),V.SCREEN_VOLUME_FRAME=this.SCREEN_VOLUME_FRAME(),V.SCREEN_VOLUME_SHAPE=this.SCREEN_VOLUME_SHAPE(),V.SCREEN_VOLUME_X=this.SCREEN_VOLUME_X(),V.SCREEN_VOLUME_Y=this.SCREEN_VOLUME_Y(),V.SCREEN_VOLUME_Z=this.SCREEN_VOLUME_Z(),V.SCREEN_ENTRY_TIME=this.SCREEN_ENTRY_TIME(),V.SCREEN_EXIT_TIME=this.SCREEN_EXIT_TIME(),V.COLLISION_PROBABILITY=this.COLLISION_PROBABILITY(),V.COLLISION_PROBABILITY_METHOD=this.COLLISION_PROBABILITY_METHOD(),V.OBJECT1=this.OBJECT1()!==null?this.OBJECT1().unpack():null,V.OBJECT2=this.OBJECT2()!==null?this.OBJECT2().unpack():null}},bR=class{constructor(V=0,l=null,Z=null,U=null,A=null,t=null,m=0,i=0,n=0,o=0,h=0,R=0,c=0,Q=0,T=null,S=null,p=0,b=0,E=0,D=0,_=0,Y=null,K=null,ZV=0,j=null,mV=null,BV=null){this.CCSDS_CDM_VERS=V,this.CREATION_DATE=l,this.ORIGINATOR=Z,this.MESSAGE_FOR=U,this.MESSAGE_ID=A,this.TCA=t,this.MISS_DISTANCE=m,this.RELATIVE_SPEED=i,this.RELATIVE_POSITION_R=n,this.RELATIVE_POSITION_T=o,this.RELATIVE_POSITION_N=h,this.RELATIVE_VELOCITY_R=R,this.RELATIVE_VELOCITY_T=c,this.RELATIVE_VELOCITY_N=Q,this.START_SCREEN_PERIOD=T,this.STOP_SCREEN_PERIOD=S,this.SCREEN_VOLUME_FRAME=p,this.SCREEN_VOLUME_SHAPE=b,this.SCREEN_VOLUME_X=E,this.SCREEN_VOLUME_Y=D,this.SCREEN_VOLUME_Z=_,this.SCREEN_ENTRY_TIME=Y,this.SCREEN_EXIT_TIME=K,this.COLLISION_PROBABILITY=ZV,this.COLLISION_PROBABILITY_METHOD=j,this.OBJECT1=mV,this.OBJECT2=BV}pack(V){let l=this.CREATION_DATE!==null?V.createString(this.CREATION_DATE):0,Z=this.ORIGINATOR!==null?V.createString(this.ORIGINATOR):0,U=this.MESSAGE_FOR!==null?V.createString(this.MESSAGE_FOR):0,A=this.MESSAGE_ID!==null?V.createString(this.MESSAGE_ID):0,t=this.TCA!==null?V.createString(this.TCA):0,m=this.START_SCREEN_PERIOD!==null?V.createString(this.START_SCREEN_PERIOD):0,i=this.STOP_SCREEN_PERIOD!==null?V.createString(this.STOP_SCREEN_PERIOD):0,n=this.SCREEN_ENTRY_TIME!==null?V.createString(this.SCREEN_ENTRY_TIME):0,o=this.SCREEN_EXIT_TIME!==null?V.createString(this.SCREEN_EXIT_TIME):0,h=this.COLLISION_PROBABILITY_METHOD!==null?V.createString(this.COLLISION_PROBABILITY_METHOD):0,R=this.OBJECT1!==null?this.OBJECT1.pack(V):0,c=this.OBJECT2!==null?this.OBJECT2.pack(V):0;return PV.startCDM(V),PV.addCcsdsCdmVers(V,this.CCSDS_CDM_VERS),PV.addCreationDate(V,l),PV.addOriginator(V,Z),PV.addMessageFor(V,U),PV.addMessageId(V,A),PV.addTca(V,t),PV.addMissDistance(V,this.MISS_DISTANCE),PV.addRelativeSpeed(V,this.RELATIVE_SPEED),PV.addRelativePositionR(V,this.RELATIVE_POSITION_R),PV.addRelativePositionT(V,this.RELATIVE_POSITION_T),PV.addRelativePositionN(V,this.RELATIVE_POSITION_N),PV.addRelativeVelocityR(V,this.RELATIVE_VELOCITY_R),PV.addRelativeVelocityT(V,this.RELATIVE_VELOCITY_T),PV.addRelativeVelocityN(V,this.RELATIVE_VELOCITY_N),PV.addStartScreenPeriod(V,m),PV.addStopScreenPeriod(V,i),PV.addScreenVolumeFrame(V,this.SCREEN_VOLUME_FRAME),PV.addScreenVolumeShape(V,this.SCREEN_VOLUME_SHAPE),PV.addScreenVolumeX(V,this.SCREEN_VOLUME_X),PV.addScreenVolumeY(V,this.SCREEN_VOLUME_Y),PV.addScreenVolumeZ(V,this.SCREEN_VOLUME_Z),PV.addScreenEntryTime(V,n),PV.addScreenExitTime(V,o),PV.addCollisionProbability(V,this.COLLISION_PROBABILITY),PV.addCollisionProbabilityMethod(V,h),PV.addObject1(V,R),PV.addObject2(V,c),PV.endCDM(V)}},AU=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsCDMCOLLECTION(V,l){return(l||new AU).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsCDMCOLLECTION(V,l){return V.setPosition(V.position()+Bl),(l||new AU).__init(V.readInt32(V.position())+V.position(),V)}RECORDS(V,l){let Z=this.bb.__offset(this.bb_pos,4);return Z?(l||new PV).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+Z)+V*4),this.bb):null}recordsLength(){let V=this.bb.__offset(this.bb_pos,4);return V?this.bb.__vector_len(this.bb_pos+V):0}static startCDMCOLLECTION(V){V.startObject(1)}static addRecords(V,l){V.addFieldOffset(0,l,0)}static createRecordsVector(V,l){V.startVector(4,l.length,4);for(let Z=l.length-1;Z>=0;Z--)V.addOffset(l[Z]);return V.endVector()}static startRecordsVector(V,l){V.startVector(4,l,4)}static endCDMCOLLECTION(V){return V.endObject()}static createCDMCOLLECTION(V,l){return AU.startCDMCOLLECTION(V),AU.addRecords(V,l),AU.endCDMCOLLECTION(V)}unpack(){return new uR(this.bb.createObjList(this.RECORDS.bind(this),this.recordsLength()))}unpackTo(V){V.RECORDS=this.bb.createObjList(this.RECORDS.bind(this),this.recordsLength())}},uR=class{constructor(V=[]){this.RECORDS=V}pack(V){let l=AU.createRecordsVector(V,V.createObjectOffsetList(this.RECORDS));return AU.createCDMCOLLECTION(V,l)}},Lc={};GU(Lc,{OPM:()=>TV,OPMCOLLECTION:()=>tU,OPMCOLLECTIONT:()=>OR,OPMT:()=>_R,manCovRefFrame:()=>JR,maneuverParameters:()=>cZ,maneuverParametersT:()=>xR,referenceFrame:()=>DR,timeSystem:()=>MR});var JR=(V=>(V[V.RSW=0]="RSW",V[V.RTN=1]="RTN",V[V.TNW=2]="TNW",V))(JR||{}),cZ=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsmaneuverParameters(V,l){return(l||new cZ).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsmaneuverParameters(V,l){return V.setPosition(V.position()+Bl),(l||new cZ).__init(V.readInt32(V.position())+V.position(),V)}MAN_EPOCH_IGNITION(V){let l=this.bb.__offset(this.bb_pos,4);return l?this.bb.__string(this.bb_pos+l,V):null}MAN_DURATION(){let V=this.bb.__offset(this.bb_pos,6);return V?this.bb.readFloat64(this.bb_pos+V):0}MAN_DELTA_MASS(){let V=this.bb.__offset(this.bb_pos,8);return V?this.bb.readFloat64(this.bb_pos+V):0}MAN_REF_FRAME(){let V=this.bb.__offset(this.bb_pos,10);return V?this.bb.readInt8(this.bb_pos+V):0}MAN_DV_1(){let V=this.bb.__offset(this.bb_pos,12);return V?this.bb.readFloat64(this.bb_pos+V):0}MAN_DV_2(){let V=this.bb.__offset(this.bb_pos,14);return V?this.bb.readFloat64(this.bb_pos+V):0}MAN_DV_3(){let V=this.bb.__offset(this.bb_pos,16);return V?this.bb.readFloat64(this.bb_pos+V):0}static startmaneuverParameters(V){V.startObject(7)}static addManEpochIgnition(V,l){V.addFieldOffset(0,l,0)}static addManDuration(V,l){V.addFieldFloat64(1,l,0)}static addManDeltaMass(V,l){V.addFieldFloat64(2,l,0)}static addManRefFrame(V,l){V.addFieldInt8(3,l,0)}static addManDv1(V,l){V.addFieldFloat64(4,l,0)}static addManDv2(V,l){V.addFieldFloat64(5,l,0)}static addManDv3(V,l){V.addFieldFloat64(6,l,0)}static endmaneuverParameters(V){return V.endObject()}static createmaneuverParameters(V,l,Z,U,A,t,m,i){return cZ.startmaneuverParameters(V),cZ.addManEpochIgnition(V,l),cZ.addManDuration(V,Z),cZ.addManDeltaMass(V,U),cZ.addManRefFrame(V,A),cZ.addManDv1(V,t),cZ.addManDv2(V,m),cZ.addManDv3(V,i),cZ.endmaneuverParameters(V)}unpack(){return new xR(this.MAN_EPOCH_IGNITION(),this.MAN_DURATION(),this.MAN_DELTA_MASS(),this.MAN_REF_FRAME(),this.MAN_DV_1(),this.MAN_DV_2(),this.MAN_DV_3())}unpackTo(V){V.MAN_EPOCH_IGNITION=this.MAN_EPOCH_IGNITION(),V.MAN_DURATION=this.MAN_DURATION(),V.MAN_DELTA_MASS=this.MAN_DELTA_MASS(),V.MAN_REF_FRAME=this.MAN_REF_FRAME(),V.MAN_DV_1=this.MAN_DV_1(),V.MAN_DV_2=this.MAN_DV_2(),V.MAN_DV_3=this.MAN_DV_3()}},xR=class{constructor(V=null,l=0,Z=0,U=0,A=0,t=0,m=0){this.MAN_EPOCH_IGNITION=V,this.MAN_DURATION=l,this.MAN_DELTA_MASS=Z,this.MAN_REF_FRAME=U,this.MAN_DV_1=A,this.MAN_DV_2=t,this.MAN_DV_3=m}pack(V){let l=this.MAN_EPOCH_IGNITION!==null?V.createString(this.MAN_EPOCH_IGNITION):0;return cZ.createmaneuverParameters(V,l,this.MAN_DURATION,this.MAN_DELTA_MASS,this.MAN_REF_FRAME,this.MAN_DV_1,this.MAN_DV_2,this.MAN_DV_3)}},DR=(V=>(V[V.EME2000=0]="EME2000",V[V.GCRF=1]="GCRF",V[V.GRC=2]="GRC",V[V.ICRF=3]="ICRF",V[V.ITRF2000=4]="ITRF2000",V[V.ITRF93=5]="ITRF93",V[V.ITRF97=6]="ITRF97",V[V.MCI=7]="MCI",V[V.TDR=8]="TDR",V[V.TEME=9]="TEME",V[V.TOD=10]="TOD",V))(DR||{}),MR=(V=>(V[V.GMST=0]="GMST",V[V.GPS=1]="GPS",V[V.MET=2]="MET",V[V.MRT=3]="MRT",V[V.SCLK=4]="SCLK",V[V.TAI=5]="TAI",V[V.TCB=6]="TCB",V[V.TDB=7]="TDB",V[V.TCG=8]="TCG",V[V.TT=9]="TT",V[V.UT1=10]="UT1",V[V.UTC=11]="UTC",V))(MR||{}),TV=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsOPM(V,l){return(l||new TV).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsOPM(V,l){return V.setPosition(V.position()+Bl),(l||new TV).__init(V.readInt32(V.position())+V.position(),V)}static bufferHasIdentifier(V){return V.__has_identifier("$OPM")}CCSDS_OPM_VERS(){let V=this.bb.__offset(this.bb_pos,4);return V?this.bb.readFloat64(this.bb_pos+V):0}CREATION_DATE(V){let l=this.bb.__offset(this.bb_pos,6);return l?this.bb.__string(this.bb_pos+l,V):null}ORIGINATOR(V){let l=this.bb.__offset(this.bb_pos,8);return l?this.bb.__string(this.bb_pos+l,V):null}OBJECT_NAME(V){let l=this.bb.__offset(this.bb_pos,10);return l?this.bb.__string(this.bb_pos+l,V):null}OBJECT_ID(V){let l=this.bb.__offset(this.bb_pos,12);return l?this.bb.__string(this.bb_pos+l,V):null}CENTER_NAME(V){let l=this.bb.__offset(this.bb_pos,14);return l?this.bb.__string(this.bb_pos+l,V):null}REF_FRAME(){let V=this.bb.__offset(this.bb_pos,16);return V?this.bb.readInt8(this.bb_pos+V):0}REF_FRAME_EPOCH(V){let l=this.bb.__offset(this.bb_pos,18);return l?this.bb.__string(this.bb_pos+l,V):null}TIME_SYSTEM(){let V=this.bb.__offset(this.bb_pos,20);return V?this.bb.readInt8(this.bb_pos+V):0}COMMENT(V){let l=this.bb.__offset(this.bb_pos,22);return l?this.bb.__string(this.bb_pos+l,V):null}EPOCH(V){let l=this.bb.__offset(this.bb_pos,24);return l?this.bb.__string(this.bb_pos+l,V):null}X(){let V=this.bb.__offset(this.bb_pos,26);return V?this.bb.readFloat64(this.bb_pos+V):0}Y(){let V=this.bb.__offset(this.bb_pos,28);return V?this.bb.readFloat64(this.bb_pos+V):0}Z(){let V=this.bb.__offset(this.bb_pos,30);return V?this.bb.readFloat64(this.bb_pos+V):0}X_DOT(){let V=this.bb.__offset(this.bb_pos,32);return V?this.bb.readFloat64(this.bb_pos+V):0}Y_DOT(){let V=this.bb.__offset(this.bb_pos,34);return V?this.bb.readFloat64(this.bb_pos+V):0}Z_DOT(){let V=this.bb.__offset(this.bb_pos,36);return V?this.bb.readFloat64(this.bb_pos+V):0}SEMI_MAJOR_AXIS(){let V=this.bb.__offset(this.bb_pos,38);return V?this.bb.readFloat64(this.bb_pos+V):0}ECCENTRICITY(){let V=this.bb.__offset(this.bb_pos,40);return V?this.bb.readFloat64(this.bb_pos+V):0}INCLINATION(){let V=this.bb.__offset(this.bb_pos,42);return V?this.bb.readFloat64(this.bb_pos+V):0}RA_OF_ASC_NODE(){let V=this.bb.__offset(this.bb_pos,44);return V?this.bb.readFloat64(this.bb_pos+V):0}ARG_OF_PERICENTER(){let V=this.bb.__offset(this.bb_pos,46);return V?this.bb.readFloat64(this.bb_pos+V):0}TRUE_ANOMALY(){let V=this.bb.__offset(this.bb_pos,48);return V?this.bb.readFloat64(this.bb_pos+V):0}MEAN_ANOMALY(){let V=this.bb.__offset(this.bb_pos,50);return V?this.bb.readFloat64(this.bb_pos+V):0}GM(){let V=this.bb.__offset(this.bb_pos,52);return V?this.bb.readFloat64(this.bb_pos+V):0}MASS(){let V=this.bb.__offset(this.bb_pos,54);return V?this.bb.readFloat64(this.bb_pos+V):0}SOLAR_RAD_AREA(){let V=this.bb.__offset(this.bb_pos,56);return V?this.bb.readFloat64(this.bb_pos+V):0}SOLAR_RAD_COEFF(){let V=this.bb.__offset(this.bb_pos,58);return V?this.bb.readFloat64(this.bb_pos+V):0}DRAG_AREA(){let V=this.bb.__offset(this.bb_pos,60);return V?this.bb.readFloat64(this.bb_pos+V):0}DRAG_COEFF(){let V=this.bb.__offset(this.bb_pos,62);return V?this.bb.readFloat64(this.bb_pos+V):0}COV_REF_FRAME(){let V=this.bb.__offset(this.bb_pos,64);return V?this.bb.readInt8(this.bb_pos+V):0}CX_X(){let V=this.bb.__offset(this.bb_pos,66);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_X(){let V=this.bb.__offset(this.bb_pos,68);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_Y(){let V=this.bb.__offset(this.bb_pos,70);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_X(){let V=this.bb.__offset(this.bb_pos,72);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_Y(){let V=this.bb.__offset(this.bb_pos,74);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_Z(){let V=this.bb.__offset(this.bb_pos,76);return V?this.bb.readFloat64(this.bb_pos+V):0}CX_DOT_X(){let V=this.bb.__offset(this.bb_pos,78);return V?this.bb.readFloat64(this.bb_pos+V):0}CX_DOT_Y(){let V=this.bb.__offset(this.bb_pos,80);return V?this.bb.readFloat64(this.bb_pos+V):0}CX_DOT_Z(){let V=this.bb.__offset(this.bb_pos,82);return V?this.bb.readFloat64(this.bb_pos+V):0}CX_DOT_X_DOT(){let V=this.bb.__offset(this.bb_pos,84);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_DOT_X(){let V=this.bb.__offset(this.bb_pos,86);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_DOT_Y(){let V=this.bb.__offset(this.bb_pos,88);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_DOT_Z(){let V=this.bb.__offset(this.bb_pos,90);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_DOT_X_DOT(){let V=this.bb.__offset(this.bb_pos,92);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_DOT_Y_DOT(){let V=this.bb.__offset(this.bb_pos,94);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_DOT_X(){let V=this.bb.__offset(this.bb_pos,96);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_DOT_Y(){let V=this.bb.__offset(this.bb_pos,98);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_DOT_Z(){let V=this.bb.__offset(this.bb_pos,100);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_DOT_X_DOT(){let V=this.bb.__offset(this.bb_pos,102);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_DOT_Y_DOT(){let V=this.bb.__offset(this.bb_pos,104);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_DOT_Z_DOT(){let V=this.bb.__offset(this.bb_pos,106);return V?this.bb.readFloat64(this.bb_pos+V):0}MANEUVERS(V,l){let Z=this.bb.__offset(this.bb_pos,108);return Z?(l||new cZ).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+Z)+V*4),this.bb):null}maneuversLength(){let V=this.bb.__offset(this.bb_pos,108);return V?this.bb.__vector_len(this.bb_pos+V):0}USER_DEFINED_BIP_0044_TYPE(){let V=this.bb.__offset(this.bb_pos,110);return V?this.bb.readUint32(this.bb_pos+V):0}USER_DEFINED_OBJECT_DESIGNATOR(V){let l=this.bb.__offset(this.bb_pos,112);return l?this.bb.__string(this.bb_pos+l,V):null}USER_DEFINED_EARTH_MODEL(V){let l=this.bb.__offset(this.bb_pos,114);return l?this.bb.__string(this.bb_pos+l,V):null}USER_DEFINED_EPOCH_TIMESTAMP(){let V=this.bb.__offset(this.bb_pos,116);return V?this.bb.readFloat64(this.bb_pos+V):0}USER_DEFINED_EPOCH_MICROSECONDS(){let V=this.bb.__offset(this.bb_pos,118);return V?this.bb.readFloat64(this.bb_pos+V):0}static startOPM(V){V.startObject(58)}static addCcsdsOpmVers(V,l){V.addFieldFloat64(0,l,0)}static addCreationDate(V,l){V.addFieldOffset(1,l,0)}static addOriginator(V,l){V.addFieldOffset(2,l,0)}static addObjectName(V,l){V.addFieldOffset(3,l,0)}static addObjectId(V,l){V.addFieldOffset(4,l,0)}static addCenterName(V,l){V.addFieldOffset(5,l,0)}static addRefFrame(V,l){V.addFieldInt8(6,l,0)}static addRefFrameEpoch(V,l){V.addFieldOffset(7,l,0)}static addTimeSystem(V,l){V.addFieldInt8(8,l,0)}static addComment(V,l){V.addFieldOffset(9,l,0)}static addEpoch(V,l){V.addFieldOffset(10,l,0)}static addX(V,l){V.addFieldFloat64(11,l,0)}static addY(V,l){V.addFieldFloat64(12,l,0)}static addZ(V,l){V.addFieldFloat64(13,l,0)}static addXDot(V,l){V.addFieldFloat64(14,l,0)}static addYDot(V,l){V.addFieldFloat64(15,l,0)}static addZDot(V,l){V.addFieldFloat64(16,l,0)}static addSemiMajorAxis(V,l){V.addFieldFloat64(17,l,0)}static addEccentricity(V,l){V.addFieldFloat64(18,l,0)}static addInclination(V,l){V.addFieldFloat64(19,l,0)}static addRaOfAscNode(V,l){V.addFieldFloat64(20,l,0)}static addArgOfPericenter(V,l){V.addFieldFloat64(21,l,0)}static addTrueAnomaly(V,l){V.addFieldFloat64(22,l,0)}static addMeanAnomaly(V,l){V.addFieldFloat64(23,l,0)}static addGm(V,l){V.addFieldFloat64(24,l,0)}static addMass(V,l){V.addFieldFloat64(25,l,0)}static addSolarRadArea(V,l){V.addFieldFloat64(26,l,0)}static addSolarRadCoeff(V,l){V.addFieldFloat64(27,l,0)}static addDragArea(V,l){V.addFieldFloat64(28,l,0)}static addDragCoeff(V,l){V.addFieldFloat64(29,l,0)}static addCovRefFrame(V,l){V.addFieldInt8(30,l,0)}static addCxX(V,l){V.addFieldFloat64(31,l,0)}static addCyX(V,l){V.addFieldFloat64(32,l,0)}static addCyY(V,l){V.addFieldFloat64(33,l,0)}static addCzX(V,l){V.addFieldFloat64(34,l,0)}static addCzY(V,l){V.addFieldFloat64(35,l,0)}static addCzZ(V,l){V.addFieldFloat64(36,l,0)}static addCxDotX(V,l){V.addFieldFloat64(37,l,0)}static addCxDotY(V,l){V.addFieldFloat64(38,l,0)}static addCxDotZ(V,l){V.addFieldFloat64(39,l,0)}static addCxDotXDot(V,l){V.addFieldFloat64(40,l,0)}static addCyDotX(V,l){V.addFieldFloat64(41,l,0)}static addCyDotY(V,l){V.addFieldFloat64(42,l,0)}static addCyDotZ(V,l){V.addFieldFloat64(43,l,0)}static addCyDotXDot(V,l){V.addFieldFloat64(44,l,0)}static addCyDotYDot(V,l){V.addFieldFloat64(45,l,0)}static addCzDotX(V,l){V.addFieldFloat64(46,l,0)}static addCzDotY(V,l){V.addFieldFloat64(47,l,0)}static addCzDotZ(V,l){V.addFieldFloat64(48,l,0)}static addCzDotXDot(V,l){V.addFieldFloat64(49,l,0)}static addCzDotYDot(V,l){V.addFieldFloat64(50,l,0)}static addCzDotZDot(V,l){V.addFieldFloat64(51,l,0)}static addManeuvers(V,l){V.addFieldOffset(52,l,0)}static createManeuversVector(V,l){V.startVector(4,l.length,4);for(let Z=l.length-1;Z>=0;Z--)V.addOffset(l[Z]);return V.endVector()}static startManeuversVector(V,l){V.startVector(4,l,4)}static addUserDefinedBip0044Type(V,l){V.addFieldInt32(53,l,0)}static addUserDefinedObjectDesignator(V,l){V.addFieldOffset(54,l,0)}static addUserDefinedEarthModel(V,l){V.addFieldOffset(55,l,0)}static addUserDefinedEpochTimestamp(V,l){V.addFieldFloat64(56,l,0)}static addUserDefinedEpochMicroseconds(V,l){V.addFieldFloat64(57,l,0)}static endOPM(V){return V.endObject()}static finishOPMBuffer(V,l){V.finish(l,"$OPM")}static finishSizePrefixedOPMBuffer(V,l){V.finish(l,"$OPM",!0)}static createOPM(V,l,Z,U,A,t,m,i,n,o,h,R,c,Q,T,S,p,b,E,D,_,Y,K,ZV,j,mV,BV,W,VV,GV,rV,FV,k,UV,HV,yV,xV,bV,LV,Cl,pl,Yl,Hl,yl,Ll,VZ,lZ,Kl,bl,ol,vl,Fl,N,d,B,f,O,$,L){return TV.startOPM(V),TV.addCcsdsOpmVers(V,l),TV.addCreationDate(V,Z),TV.addOriginator(V,U),TV.addObjectName(V,A),TV.addObjectId(V,t),TV.addCenterName(V,m),TV.addRefFrame(V,i),TV.addRefFrameEpoch(V,n),TV.addTimeSystem(V,o),TV.addComment(V,h),TV.addEpoch(V,R),TV.addX(V,c),TV.addY(V,Q),TV.addZ(V,T),TV.addXDot(V,S),TV.addYDot(V,p),TV.addZDot(V,b),TV.addSemiMajorAxis(V,E),TV.addEccentricity(V,D),TV.addInclination(V,_),TV.addRaOfAscNode(V,Y),TV.addArgOfPericenter(V,K),TV.addTrueAnomaly(V,ZV),TV.addMeanAnomaly(V,j),TV.addGm(V,mV),TV.addMass(V,BV),TV.addSolarRadArea(V,W),TV.addSolarRadCoeff(V,VV),TV.addDragArea(V,GV),TV.addDragCoeff(V,rV),TV.addCovRefFrame(V,FV),TV.addCxX(V,k),TV.addCyX(V,UV),TV.addCyY(V,HV),TV.addCzX(V,yV),TV.addCzY(V,xV),TV.addCzZ(V,bV),TV.addCxDotX(V,LV),TV.addCxDotY(V,Cl),TV.addCxDotZ(V,pl),TV.addCxDotXDot(V,Yl),TV.addCyDotX(V,Hl),TV.addCyDotY(V,yl),TV.addCyDotZ(V,Ll),TV.addCyDotXDot(V,VZ),TV.addCyDotYDot(V,lZ),TV.addCzDotX(V,Kl),TV.addCzDotY(V,bl),TV.addCzDotZ(V,ol),TV.addCzDotXDot(V,vl),TV.addCzDotYDot(V,Fl),TV.addCzDotZDot(V,N),TV.addManeuvers(V,d),TV.addUserDefinedBip0044Type(V,B),TV.addUserDefinedObjectDesignator(V,f),TV.addUserDefinedEarthModel(V,O),TV.addUserDefinedEpochTimestamp(V,$),TV.addUserDefinedEpochMicroseconds(V,L),TV.endOPM(V)}unpack(){return new _R(this.CCSDS_OPM_VERS(),this.CREATION_DATE(),this.ORIGINATOR(),this.OBJECT_NAME(),this.OBJECT_ID(),this.CENTER_NAME(),this.REF_FRAME(),this.REF_FRAME_EPOCH(),this.TIME_SYSTEM(),this.COMMENT(),this.EPOCH(),this.X(),this.Y(),this.Z(),this.X_DOT(),this.Y_DOT(),this.Z_DOT(),this.SEMI_MAJOR_AXIS(),this.ECCENTRICITY(),this.INCLINATION(),this.RA_OF_ASC_NODE(),this.ARG_OF_PERICENTER(),this.TRUE_ANOMALY(),this.MEAN_ANOMALY(),this.GM(),this.MASS(),this.SOLAR_RAD_AREA(),this.SOLAR_RAD_COEFF(),this.DRAG_AREA(),this.DRAG_COEFF(),this.COV_REF_FRAME(),this.CX_X(),this.CY_X(),this.CY_Y(),this.CZ_X(),this.CZ_Y(),this.CZ_Z(),this.CX_DOT_X(),this.CX_DOT_Y(),this.CX_DOT_Z(),this.CX_DOT_X_DOT(),this.CY_DOT_X(),this.CY_DOT_Y(),this.CY_DOT_Z(),this.CY_DOT_X_DOT(),this.CY_DOT_Y_DOT(),this.CZ_DOT_X(),this.CZ_DOT_Y(),this.CZ_DOT_Z(),this.CZ_DOT_X_DOT(),this.CZ_DOT_Y_DOT(),this.CZ_DOT_Z_DOT(),this.bb.createObjList(this.MANEUVERS.bind(this),this.maneuversLength()),this.USER_DEFINED_BIP_0044_TYPE(),this.USER_DEFINED_OBJECT_DESIGNATOR(),this.USER_DEFINED_EARTH_MODEL(),this.USER_DEFINED_EPOCH_TIMESTAMP(),this.USER_DEFINED_EPOCH_MICROSECONDS())}unpackTo(V){V.CCSDS_OPM_VERS=this.CCSDS_OPM_VERS(),V.CREATION_DATE=this.CREATION_DATE(),V.ORIGINATOR=this.ORIGINATOR(),V.OBJECT_NAME=this.OBJECT_NAME(),V.OBJECT_ID=this.OBJECT_ID(),V.CENTER_NAME=this.CENTER_NAME(),V.REF_FRAME=this.REF_FRAME(),V.REF_FRAME_EPOCH=this.REF_FRAME_EPOCH(),V.TIME_SYSTEM=this.TIME_SYSTEM(),V.COMMENT=this.COMMENT(),V.EPOCH=this.EPOCH(),V.X=this.X(),V.Y=this.Y(),V.Z=this.Z(),V.X_DOT=this.X_DOT(),V.Y_DOT=this.Y_DOT(),V.Z_DOT=this.Z_DOT(),V.SEMI_MAJOR_AXIS=this.SEMI_MAJOR_AXIS(),V.ECCENTRICITY=this.ECCENTRICITY(),V.INCLINATION=this.INCLINATION(),V.RA_OF_ASC_NODE=this.RA_OF_ASC_NODE(),V.ARG_OF_PERICENTER=this.ARG_OF_PERICENTER(),V.TRUE_ANOMALY=this.TRUE_ANOMALY(),V.MEAN_ANOMALY=this.MEAN_ANOMALY(),V.GM=this.GM(),V.MASS=this.MASS(),V.SOLAR_RAD_AREA=this.SOLAR_RAD_AREA(),V.SOLAR_RAD_COEFF=this.SOLAR_RAD_COEFF(),V.DRAG_AREA=this.DRAG_AREA(),V.DRAG_COEFF=this.DRAG_COEFF(),V.COV_REF_FRAME=this.COV_REF_FRAME(),V.CX_X=this.CX_X(),V.CY_X=this.CY_X(),V.CY_Y=this.CY_Y(),V.CZ_X=this.CZ_X(),V.CZ_Y=this.CZ_Y(),V.CZ_Z=this.CZ_Z(),V.CX_DOT_X=this.CX_DOT_X(),V.CX_DOT_Y=this.CX_DOT_Y(),V.CX_DOT_Z=this.CX_DOT_Z(),V.CX_DOT_X_DOT=this.CX_DOT_X_DOT(),V.CY_DOT_X=this.CY_DOT_X(),V.CY_DOT_Y=this.CY_DOT_Y(),V.CY_DOT_Z=this.CY_DOT_Z(),V.CY_DOT_X_DOT=this.CY_DOT_X_DOT(),V.CY_DOT_Y_DOT=this.CY_DOT_Y_DOT(),V.CZ_DOT_X=this.CZ_DOT_X(),V.CZ_DOT_Y=this.CZ_DOT_Y(),V.CZ_DOT_Z=this.CZ_DOT_Z(),V.CZ_DOT_X_DOT=this.CZ_DOT_X_DOT(),V.CZ_DOT_Y_DOT=this.CZ_DOT_Y_DOT(),V.CZ_DOT_Z_DOT=this.CZ_DOT_Z_DOT(),V.MANEUVERS=this.bb.createObjList(this.MANEUVERS.bind(this),this.maneuversLength()),V.USER_DEFINED_BIP_0044_TYPE=this.USER_DEFINED_BIP_0044_TYPE(),V.USER_DEFINED_OBJECT_DESIGNATOR=this.USER_DEFINED_OBJECT_DESIGNATOR(),V.USER_DEFINED_EARTH_MODEL=this.USER_DEFINED_EARTH_MODEL(),V.USER_DEFINED_EPOCH_TIMESTAMP=this.USER_DEFINED_EPOCH_TIMESTAMP(),V.USER_DEFINED_EPOCH_MICROSECONDS=this.USER_DEFINED_EPOCH_MICROSECONDS()}},_R=class{constructor(V=0,l=null,Z=null,U=null,A=null,t=null,m=0,i=null,n=0,o=null,h=null,R=0,c=0,Q=0,T=0,S=0,p=0,b=0,E=0,D=0,_=0,Y=0,K=0,ZV=0,j=0,mV=0,BV=0,W=0,VV=0,GV=0,rV=0,FV=0,k=0,UV=0,HV=0,yV=0,xV=0,bV=0,LV=0,Cl=0,pl=0,Yl=0,Hl=0,yl=0,Ll=0,VZ=0,lZ=0,Kl=0,bl=0,ol=0,vl=0,Fl=0,N=[],d=0,B=null,f=null,O=0,$=0){this.CCSDS_OPM_VERS=V,this.CREATION_DATE=l,this.ORIGINATOR=Z,this.OBJECT_NAME=U,this.OBJECT_ID=A,this.CENTER_NAME=t,this.REF_FRAME=m,this.REF_FRAME_EPOCH=i,this.TIME_SYSTEM=n,this.COMMENT=o,this.EPOCH=h,this.X=R,this.Y=c,this.Z=Q,this.X_DOT=T,this.Y_DOT=S,this.Z_DOT=p,this.SEMI_MAJOR_AXIS=b,this.ECCENTRICITY=E,this.INCLINATION=D,this.RA_OF_ASC_NODE=_,this.ARG_OF_PERICENTER=Y,this.TRUE_ANOMALY=K,this.MEAN_ANOMALY=ZV,this.GM=j,this.MASS=mV,this.SOLAR_RAD_AREA=BV,this.SOLAR_RAD_COEFF=W,this.DRAG_AREA=VV,this.DRAG_COEFF=GV,this.COV_REF_FRAME=rV,this.CX_X=FV,this.CY_X=k,this.CY_Y=UV,this.CZ_X=HV,this.CZ_Y=yV,this.CZ_Z=xV,this.CX_DOT_X=bV,this.CX_DOT_Y=LV,this.CX_DOT_Z=Cl,this.CX_DOT_X_DOT=pl,this.CY_DOT_X=Yl,this.CY_DOT_Y=Hl,this.CY_DOT_Z=yl,this.CY_DOT_X_DOT=Ll,this.CY_DOT_Y_DOT=VZ,this.CZ_DOT_X=lZ,this.CZ_DOT_Y=Kl,this.CZ_DOT_Z=bl,this.CZ_DOT_X_DOT=ol,this.CZ_DOT_Y_DOT=vl,this.CZ_DOT_Z_DOT=Fl,this.MANEUVERS=N,this.USER_DEFINED_BIP_0044_TYPE=d,this.USER_DEFINED_OBJECT_DESIGNATOR=B,this.USER_DEFINED_EARTH_MODEL=f,this.USER_DEFINED_EPOCH_TIMESTAMP=O,this.USER_DEFINED_EPOCH_MICROSECONDS=$}pack(V){let l=this.CREATION_DATE!==null?V.createString(this.CREATION_DATE):0,Z=this.ORIGINATOR!==null?V.createString(this.ORIGINATOR):0,U=this.OBJECT_NAME!==null?V.createString(this.OBJECT_NAME):0,A=this.OBJECT_ID!==null?V.createString(this.OBJECT_ID):0,t=this.CENTER_NAME!==null?V.createString(this.CENTER_NAME):0,m=this.REF_FRAME_EPOCH!==null?V.createString(this.REF_FRAME_EPOCH):0,i=this.COMMENT!==null?V.createString(this.COMMENT):0,n=this.EPOCH!==null?V.createString(this.EPOCH):0,o=TV.createManeuversVector(V,V.createObjectOffsetList(this.MANEUVERS)),h=this.USER_DEFINED_OBJECT_DESIGNATOR!==null?V.createString(this.USER_DEFINED_OBJECT_DESIGNATOR):0,R=this.USER_DEFINED_EARTH_MODEL!==null?V.createString(this.USER_DEFINED_EARTH_MODEL):0;return TV.createOPM(V,this.CCSDS_OPM_VERS,l,Z,U,A,t,this.REF_FRAME,m,this.TIME_SYSTEM,i,n,this.X,this.Y,this.Z,this.X_DOT,this.Y_DOT,this.Z_DOT,this.SEMI_MAJOR_AXIS,this.ECCENTRICITY,this.INCLINATION,this.RA_OF_ASC_NODE,this.ARG_OF_PERICENTER,this.TRUE_ANOMALY,this.MEAN_ANOMALY,this.GM,this.MASS,this.SOLAR_RAD_AREA,this.SOLAR_RAD_COEFF,this.DRAG_AREA,this.DRAG_COEFF,this.COV_REF_FRAME,this.CX_X,this.CY_X,this.CY_Y,this.CZ_X,this.CZ_Y,this.CZ_Z,this.CX_DOT_X,this.CX_DOT_Y,this.CX_DOT_Z,this.CX_DOT_X_DOT,this.CY_DOT_X,this.CY_DOT_Y,this.CY_DOT_Z,this.CY_DOT_X_DOT,this.CY_DOT_Y_DOT,this.CZ_DOT_X,this.CZ_DOT_Y,this.CZ_DOT_Z,this.CZ_DOT_X_DOT,this.CZ_DOT_Y_DOT,this.CZ_DOT_Z_DOT,o,this.USER_DEFINED_BIP_0044_TYPE,h,R,this.USER_DEFINED_EPOCH_TIMESTAMP,this.USER_DEFINED_EPOCH_MICROSECONDS)}},tU=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsOPMCOLLECTION(V,l){return(l||new tU).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsOPMCOLLECTION(V,l){return V.setPosition(V.position()+Bl),(l||new tU).__init(V.readInt32(V.position())+V.position(),V)}RECORDS(V,l){let Z=this.bb.__offset(this.bb_pos,4);return Z?(l||new TV).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+Z)+V*4),this.bb):null}recordsLength(){let V=this.bb.__offset(this.bb_pos,4);return V?this.bb.__vector_len(this.bb_pos+V):0}static startOPMCOLLECTION(V){V.startObject(1)}static addRecords(V,l){V.addFieldOffset(0,l,0)}static createRecordsVector(V,l){V.startVector(4,l.length,4);for(let Z=l.length-1;Z>=0;Z--)V.addOffset(l[Z]);return V.endVector()}static startRecordsVector(V,l){V.startVector(4,l,4)}static endOPMCOLLECTION(V){return V.endObject()}static createOPMCOLLECTION(V,l){return tU.startOPMCOLLECTION(V),tU.addRecords(V,l),tU.endOPMCOLLECTION(V)}unpack(){return new OR(this.bb.createObjList(this.RECORDS.bind(this),this.recordsLength()))}unpackTo(V){V.RECORDS=this.bb.createObjList(this.RECORDS.bind(this),this.recordsLength())}},OR=class{constructor(V=[]){this.RECORDS=V}pack(V){let l=tU.createRecordsVector(V,V.createObjectOffsetList(this.RECORDS));return tU.createOPMCOLLECTION(V,l)}},Kc={};GU(Kc,{OEM:()=>LZ,OEMCOLLECTION:()=>eU,OEMCOLLECTIONT:()=>LR,OEMT:()=>HR,covarianceMatrixLine:()=>ll,covarianceMatrixLineT:()=>YR,ephemerisDataBlock:()=>Sl,ephemerisDataBlockT:()=>kR,ephemerisDataLine:()=>nZ,ephemerisDataLineT:()=>yR,manCovRefFrame:()=>wR,referenceFrame:()=>vR,timeSystem:()=>zR});var wR=(V=>(V[V.RSW=0]="RSW",V[V.RTN=1]="RTN",V[V.TNW=2]="TNW",V))(wR||{}),ll=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAscovarianceMatrixLine(V,l){return(l||new ll).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAscovarianceMatrixLine(V,l){return V.setPosition(V.position()+Bl),(l||new ll).__init(V.readInt32(V.position())+V.position(),V)}EPOCH(V){let l=this.bb.__offset(this.bb_pos,4);return l?this.bb.__string(this.bb_pos+l,V):null}COV_REF_FRAME(){let V=this.bb.__offset(this.bb_pos,6);return V?this.bb.readInt8(this.bb_pos+V):0}CX_X(){let V=this.bb.__offset(this.bb_pos,8);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_X(){let V=this.bb.__offset(this.bb_pos,10);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_Y(){let V=this.bb.__offset(this.bb_pos,12);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_X(){let V=this.bb.__offset(this.bb_pos,14);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_Y(){let V=this.bb.__offset(this.bb_pos,16);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_Z(){let V=this.bb.__offset(this.bb_pos,18);return V?this.bb.readFloat64(this.bb_pos+V):0}CX_DOT_X(){let V=this.bb.__offset(this.bb_pos,20);return V?this.bb.readFloat64(this.bb_pos+V):0}CX_DOT_Y(){let V=this.bb.__offset(this.bb_pos,22);return V?this.bb.readFloat64(this.bb_pos+V):0}CX_DOT_Z(){let V=this.bb.__offset(this.bb_pos,24);return V?this.bb.readFloat64(this.bb_pos+V):0}CX_DOT_X_DOT(){let V=this.bb.__offset(this.bb_pos,26);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_DOT_X(){let V=this.bb.__offset(this.bb_pos,28);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_DOT_Y(){let V=this.bb.__offset(this.bb_pos,30);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_DOT_Z(){let V=this.bb.__offset(this.bb_pos,32);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_DOT_X_DOT(){let V=this.bb.__offset(this.bb_pos,34);return V?this.bb.readFloat64(this.bb_pos+V):0}CY_DOT_Y_DOT(){let V=this.bb.__offset(this.bb_pos,36);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_DOT_X(){let V=this.bb.__offset(this.bb_pos,38);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_DOT_Y(){let V=this.bb.__offset(this.bb_pos,40);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_DOT_Z(){let V=this.bb.__offset(this.bb_pos,42);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_DOT_X_DOT(){let V=this.bb.__offset(this.bb_pos,44);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_DOT_Y_DOT(){let V=this.bb.__offset(this.bb_pos,46);return V?this.bb.readFloat64(this.bb_pos+V):0}CZ_DOT_Z_DOT(){let V=this.bb.__offset(this.bb_pos,48);return V?this.bb.readFloat64(this.bb_pos+V):0}static startcovarianceMatrixLine(V){V.startObject(23)}static addEpoch(V,l){V.addFieldOffset(0,l,0)}static addCovRefFrame(V,l){V.addFieldInt8(1,l,0)}static addCxX(V,l){V.addFieldFloat64(2,l,0)}static addCyX(V,l){V.addFieldFloat64(3,l,0)}static addCyY(V,l){V.addFieldFloat64(4,l,0)}static addCzX(V,l){V.addFieldFloat64(5,l,0)}static addCzY(V,l){V.addFieldFloat64(6,l,0)}static addCzZ(V,l){V.addFieldFloat64(7,l,0)}static addCxDotX(V,l){V.addFieldFloat64(8,l,0)}static addCxDotY(V,l){V.addFieldFloat64(9,l,0)}static addCxDotZ(V,l){V.addFieldFloat64(10,l,0)}static addCxDotXDot(V,l){V.addFieldFloat64(11,l,0)}static addCyDotX(V,l){V.addFieldFloat64(12,l,0)}static addCyDotY(V,l){V.addFieldFloat64(13,l,0)}static addCyDotZ(V,l){V.addFieldFloat64(14,l,0)}static addCyDotXDot(V,l){V.addFieldFloat64(15,l,0)}static addCyDotYDot(V,l){V.addFieldFloat64(16,l,0)}static addCzDotX(V,l){V.addFieldFloat64(17,l,0)}static addCzDotY(V,l){V.addFieldFloat64(18,l,0)}static addCzDotZ(V,l){V.addFieldFloat64(19,l,0)}static addCzDotXDot(V,l){V.addFieldFloat64(20,l,0)}static addCzDotYDot(V,l){V.addFieldFloat64(21,l,0)}static addCzDotZDot(V,l){V.addFieldFloat64(22,l,0)}static endcovarianceMatrixLine(V){return V.endObject()}static createcovarianceMatrixLine(V,l,Z,U,A,t,m,i,n,o,h,R,c,Q,T,S,p,b,E,D,_,Y,K,ZV){return ll.startcovarianceMatrixLine(V),ll.addEpoch(V,l),ll.addCovRefFrame(V,Z),ll.addCxX(V,U),ll.addCyX(V,A),ll.addCyY(V,t),ll.addCzX(V,m),ll.addCzY(V,i),ll.addCzZ(V,n),ll.addCxDotX(V,o),ll.addCxDotY(V,h),ll.addCxDotZ(V,R),ll.addCxDotXDot(V,c),ll.addCyDotX(V,Q),ll.addCyDotY(V,T),ll.addCyDotZ(V,S),ll.addCyDotXDot(V,p),ll.addCyDotYDot(V,b),ll.addCzDotX(V,E),ll.addCzDotY(V,D),ll.addCzDotZ(V,_),ll.addCzDotXDot(V,Y),ll.addCzDotYDot(V,K),ll.addCzDotZDot(V,ZV),ll.endcovarianceMatrixLine(V)}unpack(){return new YR(this.EPOCH(),this.COV_REF_FRAME(),this.CX_X(),this.CY_X(),this.CY_Y(),this.CZ_X(),this.CZ_Y(),this.CZ_Z(),this.CX_DOT_X(),this.CX_DOT_Y(),this.CX_DOT_Z(),this.CX_DOT_X_DOT(),this.CY_DOT_X(),this.CY_DOT_Y(),this.CY_DOT_Z(),this.CY_DOT_X_DOT(),this.CY_DOT_Y_DOT(),this.CZ_DOT_X(),this.CZ_DOT_Y(),this.CZ_DOT_Z(),this.CZ_DOT_X_DOT(),this.CZ_DOT_Y_DOT(),this.CZ_DOT_Z_DOT())}unpackTo(V){V.EPOCH=this.EPOCH(),V.COV_REF_FRAME=this.COV_REF_FRAME(),V.CX_X=this.CX_X(),V.CY_X=this.CY_X(),V.CY_Y=this.CY_Y(),V.CZ_X=this.CZ_X(),V.CZ_Y=this.CZ_Y(),V.CZ_Z=this.CZ_Z(),V.CX_DOT_X=this.CX_DOT_X(),V.CX_DOT_Y=this.CX_DOT_Y(),V.CX_DOT_Z=this.CX_DOT_Z(),V.CX_DOT_X_DOT=this.CX_DOT_X_DOT(),V.CY_DOT_X=this.CY_DOT_X(),V.CY_DOT_Y=this.CY_DOT_Y(),V.CY_DOT_Z=this.CY_DOT_Z(),V.CY_DOT_X_DOT=this.CY_DOT_X_DOT(),V.CY_DOT_Y_DOT=this.CY_DOT_Y_DOT(),V.CZ_DOT_X=this.CZ_DOT_X(),V.CZ_DOT_Y=this.CZ_DOT_Y(),V.CZ_DOT_Z=this.CZ_DOT_Z(),V.CZ_DOT_X_DOT=this.CZ_DOT_X_DOT(),V.CZ_DOT_Y_DOT=this.CZ_DOT_Y_DOT(),V.CZ_DOT_Z_DOT=this.CZ_DOT_Z_DOT()}},YR=class{constructor(V=null,l=0,Z=0,U=0,A=0,t=0,m=0,i=0,n=0,o=0,h=0,R=0,c=0,Q=0,T=0,S=0,p=0,b=0,E=0,D=0,_=0,Y=0,K=0){this.EPOCH=V,this.COV_REF_FRAME=l,this.CX_X=Z,this.CY_X=U,this.CY_Y=A,this.CZ_X=t,this.CZ_Y=m,this.CZ_Z=i,this.CX_DOT_X=n,this.CX_DOT_Y=o,this.CX_DOT_Z=h,this.CX_DOT_X_DOT=R,this.CY_DOT_X=c,this.CY_DOT_Y=Q,this.CY_DOT_Z=T,this.CY_DOT_X_DOT=S,this.CY_DOT_Y_DOT=p,this.CZ_DOT_X=b,this.CZ_DOT_Y=E,this.CZ_DOT_Z=D,this.CZ_DOT_X_DOT=_,this.CZ_DOT_Y_DOT=Y,this.CZ_DOT_Z_DOT=K}pack(V){let l=this.EPOCH!==null?V.createString(this.EPOCH):0;return ll.createcovarianceMatrixLine(V,l,this.COV_REF_FRAME,this.CX_X,this.CY_X,this.CY_Y,this.CZ_X,this.CZ_Y,this.CZ_Z,this.CX_DOT_X,this.CX_DOT_Y,this.CX_DOT_Z,this.CX_DOT_X_DOT,this.CY_DOT_X,this.CY_DOT_Y,this.CY_DOT_Z,this.CY_DOT_X_DOT,this.CY_DOT_Y_DOT,this.CZ_DOT_X,this.CZ_DOT_Y,this.CZ_DOT_Z,this.CZ_DOT_X_DOT,this.CZ_DOT_Y_DOT,this.CZ_DOT_Z_DOT)}},nZ=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsephemerisDataLine(V,l){return(l||new nZ).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsephemerisDataLine(V,l){return V.setPosition(V.position()+Bl),(l||new nZ).__init(V.readInt32(V.position())+V.position(),V)}EPOCH(V){let l=this.bb.__offset(this.bb_pos,4);return l?this.bb.__string(this.bb_pos+l,V):null}X(){let V=this.bb.__offset(this.bb_pos,6);return V?this.bb.readFloat64(this.bb_pos+V):0}Y(){let V=this.bb.__offset(this.bb_pos,8);return V?this.bb.readFloat64(this.bb_pos+V):0}Z(){let V=this.bb.__offset(this.bb_pos,10);return V?this.bb.readFloat64(this.bb_pos+V):0}X_DOT(){let V=this.bb.__offset(this.bb_pos,12);return V?this.bb.readFloat64(this.bb_pos+V):0}Y_DOT(){let V=this.bb.__offset(this.bb_pos,14);return V?this.bb.readFloat64(this.bb_pos+V):0}Z_DOT(){let V=this.bb.__offset(this.bb_pos,16);return V?this.bb.readFloat64(this.bb_pos+V):0}X_DDOT(){let V=this.bb.__offset(this.bb_pos,18);return V?this.bb.readFloat64(this.bb_pos+V):0}Y_DDOT(){let V=this.bb.__offset(this.bb_pos,20);return V?this.bb.readFloat64(this.bb_pos+V):0}Z_DDOT(){let V=this.bb.__offset(this.bb_pos,22);return V?this.bb.readFloat64(this.bb_pos+V):0}static startephemerisDataLine(V){V.startObject(10)}static addEpoch(V,l){V.addFieldOffset(0,l,0)}static addX(V,l){V.addFieldFloat64(1,l,0)}static addY(V,l){V.addFieldFloat64(2,l,0)}static addZ(V,l){V.addFieldFloat64(3,l,0)}static addXDot(V,l){V.addFieldFloat64(4,l,0)}static addYDot(V,l){V.addFieldFloat64(5,l,0)}static addZDot(V,l){V.addFieldFloat64(6,l,0)}static addXDdot(V,l){V.addFieldFloat64(7,l,0)}static addYDdot(V,l){V.addFieldFloat64(8,l,0)}static addZDdot(V,l){V.addFieldFloat64(9,l,0)}static endephemerisDataLine(V){return V.endObject()}static createephemerisDataLine(V,l,Z,U,A,t,m,i,n,o,h){return nZ.startephemerisDataLine(V),nZ.addEpoch(V,l),nZ.addX(V,Z),nZ.addY(V,U),nZ.addZ(V,A),nZ.addXDot(V,t),nZ.addYDot(V,m),nZ.addZDot(V,i),nZ.addXDdot(V,n),nZ.addYDdot(V,o),nZ.addZDdot(V,h),nZ.endephemerisDataLine(V)}unpack(){return new yR(this.EPOCH(),this.X(),this.Y(),this.Z(),this.X_DOT(),this.Y_DOT(),this.Z_DOT(),this.X_DDOT(),this.Y_DDOT(),this.Z_DDOT())}unpackTo(V){V.EPOCH=this.EPOCH(),V.X=this.X(),V.Y=this.Y(),V.Z=this.Z(),V.X_DOT=this.X_DOT(),V.Y_DOT=this.Y_DOT(),V.Z_DOT=this.Z_DOT(),V.X_DDOT=this.X_DDOT(),V.Y_DDOT=this.Y_DDOT(),V.Z_DDOT=this.Z_DDOT()}},yR=class{constructor(V=null,l=0,Z=0,U=0,A=0,t=0,m=0,i=0,n=0,o=0){this.EPOCH=V,this.X=l,this.Y=Z,this.Z=U,this.X_DOT=A,this.Y_DOT=t,this.Z_DOT=m,this.X_DDOT=i,this.Y_DDOT=n,this.Z_DDOT=o}pack(V){let l=this.EPOCH!==null?V.createString(this.EPOCH):0;return nZ.createephemerisDataLine(V,l,this.X,this.Y,this.Z,this.X_DOT,this.Y_DOT,this.Z_DOT,this.X_DDOT,this.Y_DDOT,this.Z_DDOT)}},vR=(V=>(V[V.EME2000=0]="EME2000",V[V.GCRF=1]="GCRF",V[V.GRC=2]="GRC",V[V.ICRF=3]="ICRF",V[V.ITRF2000=4]="ITRF2000",V[V.ITRF93=5]="ITRF93",V[V.ITRF97=6]="ITRF97",V[V.MCI=7]="MCI",V[V.TDR=8]="TDR",V[V.TEME=9]="TEME",V[V.TOD=10]="TOD",V))(vR||{}),zR=(V=>(V[V.GMST=0]="GMST",V[V.GPS=1]="GPS",V[V.MET=2]="MET",V[V.MRT=3]="MRT",V[V.SCLK=4]="SCLK",V[V.TAI=5]="TAI",V[V.TCB=6]="TCB",V[V.TDB=7]="TDB",V[V.TCG=8]="TCG",V[V.TT=9]="TT",V[V.UT1=10]="UT1",V[V.UTC=11]="UTC",V))(zR||{}),Sl=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsephemerisDataBlock(V,l){return(l||new Sl).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsephemerisDataBlock(V,l){return V.setPosition(V.position()+Bl),(l||new Sl).__init(V.readInt32(V.position())+V.position(),V)}COMMENT(V){let l=this.bb.__offset(this.bb_pos,4);return l?this.bb.__string(this.bb_pos+l,V):null}OBJECT_NAME(V){let l=this.bb.__offset(this.bb_pos,6);return l?this.bb.__string(this.bb_pos+l,V):null}OBJECT_ID(V){let l=this.bb.__offset(this.bb_pos,8);return l?this.bb.__string(this.bb_pos+l,V):null}CENTER_NAME(V){let l=this.bb.__offset(this.bb_pos,10);return l?this.bb.__string(this.bb_pos+l,V):null}REF_FRAME(){let V=this.bb.__offset(this.bb_pos,12);return V?this.bb.readInt8(this.bb_pos+V):0}REF_FRAME_EPOCH(V){let l=this.bb.__offset(this.bb_pos,14);return l?this.bb.__string(this.bb_pos+l,V):null}TIME_SYSTEM(){let V=this.bb.__offset(this.bb_pos,16);return V?this.bb.readInt8(this.bb_pos+V):0}START_TIME(V){let l=this.bb.__offset(this.bb_pos,18);return l?this.bb.__string(this.bb_pos+l,V):null}USEABLE_START_TIME(V){let l=this.bb.__offset(this.bb_pos,20);return l?this.bb.__string(this.bb_pos+l,V):null}USEABLE_STOP_TIME(V){let l=this.bb.__offset(this.bb_pos,22);return l?this.bb.__string(this.bb_pos+l,V):null}STOP_TIME(V){let l=this.bb.__offset(this.bb_pos,24);return l?this.bb.__string(this.bb_pos+l,V):null}INTERPOLATION(V){let l=this.bb.__offset(this.bb_pos,26);return l?this.bb.__string(this.bb_pos+l,V):null}INTERPOLATION_DEGREE(){let V=this.bb.__offset(this.bb_pos,28);return V?this.bb.readUint32(this.bb_pos+V):0}EPHEMERIS_DATA_LINES(V,l){let Z=this.bb.__offset(this.bb_pos,30);return Z?(l||new nZ).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+Z)+V*4),this.bb):null}ephemerisDataLinesLength(){let V=this.bb.__offset(this.bb_pos,30);return V?this.bb.__vector_len(this.bb_pos+V):0}COVARIANCE_MATRIX_LINES(V,l){let Z=this.bb.__offset(this.bb_pos,32);return Z?(l||new ll).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+Z)+V*4),this.bb):null}covarianceMatrixLinesLength(){let V=this.bb.__offset(this.bb_pos,32);return V?this.bb.__vector_len(this.bb_pos+V):0}static startephemerisDataBlock(V){V.startObject(15)}static addComment(V,l){V.addFieldOffset(0,l,0)}static addObjectName(V,l){V.addFieldOffset(1,l,0)}static addObjectId(V,l){V.addFieldOffset(2,l,0)}static addCenterName(V,l){V.addFieldOffset(3,l,0)}static addRefFrame(V,l){V.addFieldInt8(4,l,0)}static addRefFrameEpoch(V,l){V.addFieldOffset(5,l,0)}static addTimeSystem(V,l){V.addFieldInt8(6,l,0)}static addStartTime(V,l){V.addFieldOffset(7,l,0)}static addUseableStartTime(V,l){V.addFieldOffset(8,l,0)}static addUseableStopTime(V,l){V.addFieldOffset(9,l,0)}static addStopTime(V,l){V.addFieldOffset(10,l,0)}static addInterpolation(V,l){V.addFieldOffset(11,l,0)}static addInterpolationDegree(V,l){V.addFieldInt32(12,l,0)}static addEphemerisDataLines(V,l){V.addFieldOffset(13,l,0)}static createEphemerisDataLinesVector(V,l){V.startVector(4,l.length,4);for(let Z=l.length-1;Z>=0;Z--)V.addOffset(l[Z]);return V.endVector()}static startEphemerisDataLinesVector(V,l){V.startVector(4,l,4)}static addCovarianceMatrixLines(V,l){V.addFieldOffset(14,l,0)}static createCovarianceMatrixLinesVector(V,l){V.startVector(4,l.length,4);for(let Z=l.length-1;Z>=0;Z--)V.addOffset(l[Z]);return V.endVector()}static startCovarianceMatrixLinesVector(V,l){V.startVector(4,l,4)}static endephemerisDataBlock(V){return V.endObject()}static createephemerisDataBlock(V,l,Z,U,A,t,m,i,n,o,h,R,c,Q,T,S){return Sl.startephemerisDataBlock(V),Sl.addComment(V,l),Sl.addObjectName(V,Z),Sl.addObjectId(V,U),Sl.addCenterName(V,A),Sl.addRefFrame(V,t),Sl.addRefFrameEpoch(V,m),Sl.addTimeSystem(V,i),Sl.addStartTime(V,n),Sl.addUseableStartTime(V,o),Sl.addUseableStopTime(V,h),Sl.addStopTime(V,R),Sl.addInterpolation(V,c),Sl.addInterpolationDegree(V,Q),Sl.addEphemerisDataLines(V,T),Sl.addCovarianceMatrixLines(V,S),Sl.endephemerisDataBlock(V)}unpack(){return new kR(this.COMMENT(),this.OBJECT_NAME(),this.OBJECT_ID(),this.CENTER_NAME(),this.REF_FRAME(),this.REF_FRAME_EPOCH(),this.TIME_SYSTEM(),this.START_TIME(),this.USEABLE_START_TIME(),this.USEABLE_STOP_TIME(),this.STOP_TIME(),this.INTERPOLATION(),this.INTERPOLATION_DEGREE(),this.bb.createObjList(this.EPHEMERIS_DATA_LINES.bind(this),this.ephemerisDataLinesLength()),this.bb.createObjList(this.COVARIANCE_MATRIX_LINES.bind(this),this.covarianceMatrixLinesLength()))}unpackTo(V){V.COMMENT=this.COMMENT(),V.OBJECT_NAME=this.OBJECT_NAME(),V.OBJECT_ID=this.OBJECT_ID(),V.CENTER_NAME=this.CENTER_NAME(),V.REF_FRAME=this.REF_FRAME(),V.REF_FRAME_EPOCH=this.REF_FRAME_EPOCH(),V.TIME_SYSTEM=this.TIME_SYSTEM(),V.START_TIME=this.START_TIME(),V.USEABLE_START_TIME=this.USEABLE_START_TIME(),V.USEABLE_STOP_TIME=this.USEABLE_STOP_TIME(),V.STOP_TIME=this.STOP_TIME(),V.INTERPOLATION=this.INTERPOLATION(),V.INTERPOLATION_DEGREE=this.INTERPOLATION_DEGREE(),V.EPHEMERIS_DATA_LINES=this.bb.createObjList(this.EPHEMERIS_DATA_LINES.bind(this),this.ephemerisDataLinesLength()),V.COVARIANCE_MATRIX_LINES=this.bb.createObjList(this.COVARIANCE_MATRIX_LINES.bind(this),this.covarianceMatrixLinesLength())}},kR=class{constructor(V=null,l=null,Z=null,U=null,A=0,t=null,m=0,i=null,n=null,o=null,h=null,R=null,c=0,Q=[],T=[]){this.COMMENT=V,this.OBJECT_NAME=l,this.OBJECT_ID=Z,this.CENTER_NAME=U,this.REF_FRAME=A,this.REF_FRAME_EPOCH=t,this.TIME_SYSTEM=m,this.START_TIME=i,this.USEABLE_START_TIME=n,this.USEABLE_STOP_TIME=o,this.STOP_TIME=h,this.INTERPOLATION=R,this.INTERPOLATION_DEGREE=c,this.EPHEMERIS_DATA_LINES=Q,this.COVARIANCE_MATRIX_LINES=T}pack(V){let l=this.COMMENT!==null?V.createString(this.COMMENT):0,Z=this.OBJECT_NAME!==null?V.createString(this.OBJECT_NAME):0,U=this.OBJECT_ID!==null?V.createString(this.OBJECT_ID):0,A=this.CENTER_NAME!==null?V.createString(this.CENTER_NAME):0,t=this.REF_FRAME_EPOCH!==null?V.createString(this.REF_FRAME_EPOCH):0,m=this.START_TIME!==null?V.createString(this.START_TIME):0,i=this.USEABLE_START_TIME!==null?V.createString(this.USEABLE_START_TIME):0,n=this.USEABLE_STOP_TIME!==null?V.createString(this.USEABLE_STOP_TIME):0,o=this.STOP_TIME!==null?V.createString(this.STOP_TIME):0,h=this.INTERPOLATION!==null?V.createString(this.INTERPOLATION):0,R=Sl.createEphemerisDataLinesVector(V,V.createObjectOffsetList(this.EPHEMERIS_DATA_LINES)),c=Sl.createCovarianceMatrixLinesVector(V,V.createObjectOffsetList(this.COVARIANCE_MATRIX_LINES));return Sl.createephemerisDataBlock(V,l,Z,U,A,this.REF_FRAME,t,this.TIME_SYSTEM,m,i,n,o,h,this.INTERPOLATION_DEGREE,R,c)}},LZ=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsOEM(V,l){return(l||new LZ).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsOEM(V,l){return V.setPosition(V.position()+Bl),(l||new LZ).__init(V.readInt32(V.position())+V.position(),V)}static bufferHasIdentifier(V){return V.__has_identifier("$OEM")}CCSDS_OEM_VERS(){let V=this.bb.__offset(this.bb_pos,4);return V?this.bb.readFloat64(this.bb_pos+V):0}CREATION_DATE(V){let l=this.bb.__offset(this.bb_pos,6);return l?this.bb.__string(this.bb_pos+l,V):null}ORIGINATOR(V){let l=this.bb.__offset(this.bb_pos,8);return l?this.bb.__string(this.bb_pos+l,V):null}EPHEMERIS_DATA_BLOCK(V,l){let Z=this.bb.__offset(this.bb_pos,10);return Z?(l||new Sl).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+Z)+V*4),this.bb):null}ephemerisDataBlockLength(){let V=this.bb.__offset(this.bb_pos,10);return V?this.bb.__vector_len(this.bb_pos+V):0}static startOEM(V){V.startObject(4)}static addCcsdsOemVers(V,l){V.addFieldFloat64(0,l,0)}static addCreationDate(V,l){V.addFieldOffset(1,l,0)}static addOriginator(V,l){V.addFieldOffset(2,l,0)}static addEphemerisDataBlock(V,l){V.addFieldOffset(3,l,0)}static createEphemerisDataBlockVector(V,l){V.startVector(4,l.length,4);for(let Z=l.length-1;Z>=0;Z--)V.addOffset(l[Z]);return V.endVector()}static startEphemerisDataBlockVector(V,l){V.startVector(4,l,4)}static endOEM(V){return V.endObject()}static finishOEMBuffer(V,l){V.finish(l,"$OEM")}static finishSizePrefixedOEMBuffer(V,l){V.finish(l,"$OEM",!0)}static createOEM(V,l,Z,U,A){return LZ.startOEM(V),LZ.addCcsdsOemVers(V,l),LZ.addCreationDate(V,Z),LZ.addOriginator(V,U),LZ.addEphemerisDataBlock(V,A),LZ.endOEM(V)}unpack(){return new HR(this.CCSDS_OEM_VERS(),this.CREATION_DATE(),this.ORIGINATOR(),this.bb.createObjList(this.EPHEMERIS_DATA_BLOCK.bind(this),this.ephemerisDataBlockLength()))}unpackTo(V){V.CCSDS_OEM_VERS=this.CCSDS_OEM_VERS(),V.CREATION_DATE=this.CREATION_DATE(),V.ORIGINATOR=this.ORIGINATOR(),V.EPHEMERIS_DATA_BLOCK=this.bb.createObjList(this.EPHEMERIS_DATA_BLOCK.bind(this),this.ephemerisDataBlockLength())}},HR=class{constructor(V=0,l=null,Z=null,U=[]){this.CCSDS_OEM_VERS=V,this.CREATION_DATE=l,this.ORIGINATOR=Z,this.EPHEMERIS_DATA_BLOCK=U}pack(V){let l=this.CREATION_DATE!==null?V.createString(this.CREATION_DATE):0,Z=this.ORIGINATOR!==null?V.createString(this.ORIGINATOR):0,U=LZ.createEphemerisDataBlockVector(V,V.createObjectOffsetList(this.EPHEMERIS_DATA_BLOCK));return LZ.createOEM(V,this.CCSDS_OEM_VERS,l,Z,U)}},eU=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsOEMCOLLECTION(V,l){return(l||new eU).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsOEMCOLLECTION(V,l){return V.setPosition(V.position()+Bl),(l||new eU).__init(V.readInt32(V.position())+V.position(),V)}RECORDS(V,l){let Z=this.bb.__offset(this.bb_pos,4);return Z?(l||new LZ).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+Z)+V*4),this.bb):null}recordsLength(){let V=this.bb.__offset(this.bb_pos,4);return V?this.bb.__vector_len(this.bb_pos+V):0}static startOEMCOLLECTION(V){V.startObject(1)}static addRecords(V,l){V.addFieldOffset(0,l,0)}static createRecordsVector(V,l){V.startVector(4,l.length,4);for(let Z=l.length-1;Z>=0;Z--)V.addOffset(l[Z]);return V.endVector()}static startRecordsVector(V,l){V.startVector(4,l,4)}static endOEMCOLLECTION(V){return V.endObject()}static createOEMCOLLECTION(V,l){return eU.startOEMCOLLECTION(V),eU.addRecords(V,l),eU.endOEMCOLLECTION(V)}unpack(){return new LR(this.bb.createObjList(this.RECORDS.bind(this),this.recordsLength()))}unpackTo(V){V.RECORDS=this.bb.createObjList(this.RECORDS.bind(this),this.recordsLength())}},LR=class{constructor(V=[]){this.RECORDS=V}pack(V){let l=eU.createRecordsVector(V,V.createObjectOffsetList(this.RECORDS));return eU.createOEMCOLLECTION(V,l)}},Pc={};GU(Pc,{MPE:()=>hZ,MPECOLLECTION:()=>fZ,MPECOLLECTIONT:()=>$R,MPET:()=>KR,meanElementTheory:()=>PR,referenceFrame:()=>jR,timeSystem:()=>qR});var hZ=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsMPE(V,l){return(l||new hZ).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsMPE(V,l){return V.setPosition(V.position()+Bl),(l||new hZ).__init(V.readInt32(V.position())+V.position(),V)}static bufferHasIdentifier(V){return V.__has_identifier("$MPE")}ENTITY_ID(V){let l=this.bb.__offset(this.bb_pos,4);return l?this.bb.__string(this.bb_pos+l,V):null}EPOCH(){let V=this.bb.__offset(this.bb_pos,6);return V?this.bb.readFloat64(this.bb_pos+V):0}MEAN_MOTION(){let V=this.bb.__offset(this.bb_pos,8);return V?this.bb.readFloat64(this.bb_pos+V):0}ECCENTRICITY(){let V=this.bb.__offset(this.bb_pos,10);return V?this.bb.readFloat64(this.bb_pos+V):0}INCLINATION(){let V=this.bb.__offset(this.bb_pos,12);return V?this.bb.readFloat64(this.bb_pos+V):0}RA_OF_ASC_NODE(){let V=this.bb.__offset(this.bb_pos,14);return V?this.bb.readFloat64(this.bb_pos+V):0}ARG_OF_PERICENTER(){let V=this.bb.__offset(this.bb_pos,16);return V?this.bb.readFloat64(this.bb_pos+V):0}MEAN_ANOMALY(){let V=this.bb.__offset(this.bb_pos,18);return V?this.bb.readFloat64(this.bb_pos+V):0}BSTAR(){let V=this.bb.__offset(this.bb_pos,20);return V?this.bb.readFloat64(this.bb_pos+V):0}static startMPE(V){V.startObject(9)}static addEntityId(V,l){V.addFieldOffset(0,l,0)}static addEpoch(V,l){V.addFieldFloat64(1,l,0)}static addMeanMotion(V,l){V.addFieldFloat64(2,l,0)}static addEccentricity(V,l){V.addFieldFloat64(3,l,0)}static addInclination(V,l){V.addFieldFloat64(4,l,0)}static addRaOfAscNode(V,l){V.addFieldFloat64(5,l,0)}static addArgOfPericenter(V,l){V.addFieldFloat64(6,l,0)}static addMeanAnomaly(V,l){V.addFieldFloat64(7,l,0)}static addBstar(V,l){V.addFieldFloat64(8,l,0)}static endMPE(V){return V.endObject()}static finishMPEBuffer(V,l){V.finish(l,"$MPE")}static finishSizePrefixedMPEBuffer(V,l){V.finish(l,"$MPE",!0)}static createMPE(V,l,Z,U,A,t,m,i,n,o){return hZ.startMPE(V),hZ.addEntityId(V,l),hZ.addEpoch(V,Z),hZ.addMeanMotion(V,U),hZ.addEccentricity(V,A),hZ.addInclination(V,t),hZ.addRaOfAscNode(V,m),hZ.addArgOfPericenter(V,i),hZ.addMeanAnomaly(V,n),hZ.addBstar(V,o),hZ.endMPE(V)}unpack(){return new KR(this.ENTITY_ID(),this.EPOCH(),this.MEAN_MOTION(),this.ECCENTRICITY(),this.INCLINATION(),this.RA_OF_ASC_NODE(),this.ARG_OF_PERICENTER(),this.MEAN_ANOMALY(),this.BSTAR())}unpackTo(V){V.ENTITY_ID=this.ENTITY_ID(),V.EPOCH=this.EPOCH(),V.MEAN_MOTION=this.MEAN_MOTION(),V.ECCENTRICITY=this.ECCENTRICITY(),V.INCLINATION=this.INCLINATION(),V.RA_OF_ASC_NODE=this.RA_OF_ASC_NODE(),V.ARG_OF_PERICENTER=this.ARG_OF_PERICENTER(),V.MEAN_ANOMALY=this.MEAN_ANOMALY(),V.BSTAR=this.BSTAR()}},KR=class{constructor(V=null,l=0,Z=0,U=0,A=0,t=0,m=0,i=0,n=0){this.ENTITY_ID=V,this.EPOCH=l,this.MEAN_MOTION=Z,this.ECCENTRICITY=U,this.INCLINATION=A,this.RA_OF_ASC_NODE=t,this.ARG_OF_PERICENTER=m,this.MEAN_ANOMALY=i,this.BSTAR=n}pack(V){let l=this.ENTITY_ID!==null?V.createString(this.ENTITY_ID):0;return hZ.createMPE(V,l,this.EPOCH,this.MEAN_MOTION,this.ECCENTRICITY,this.INCLINATION,this.RA_OF_ASC_NODE,this.ARG_OF_PERICENTER,this.MEAN_ANOMALY,this.BSTAR)}},PR=(V=>(V[V.SGP4=0]="SGP4",V[V.DSST=1]="DSST",V[V.USM=2]="USM",V))(PR||{}),jR=(V=>(V[V.EME2000=0]="EME2000",V[V.GCRF=1]="GCRF",V[V.GRC=2]="GRC",V[V.ICRF=3]="ICRF",V[V.ITRF2000=4]="ITRF2000",V[V.ITRF93=5]="ITRF93",V[V.ITRF97=6]="ITRF97",V[V.MCI=7]="MCI",V[V.TDR=8]="TDR",V[V.TEME=9]="TEME",V[V.TOD=10]="TOD",V))(jR||{}),qR=(V=>(V[V.GMST=0]="GMST",V[V.GPS=1]="GPS",V[V.MET=2]="MET",V[V.MRT=3]="MRT",V[V.SCLK=4]="SCLK",V[V.TAI=5]="TAI",V[V.TCB=6]="TCB",V[V.TDB=7]="TDB",V[V.TCG=8]="TCG",V[V.TT=9]="TT",V[V.UT1=10]="UT1",V[V.UTC=11]="UTC",V))(qR||{}),fZ=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsMPECOLLECTION(V,l){return(l||new fZ).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsMPECOLLECTION(V,l){return V.setPosition(V.position()+Bl),(l||new fZ).__init(V.readInt32(V.position())+V.position(),V)}CLASSIFICATION_TYPE(V){let l=this.bb.__offset(this.bb_pos,4);return l?this.bb.__string(this.bb_pos+l,V):null}REF_FRAME(){let V=this.bb.__offset(this.bb_pos,6);return V?this.bb.readInt8(this.bb_pos+V):9}REF_FRAME_EPOCH(){let V=this.bb.__offset(this.bb_pos,8);return V?this.bb.readFloat64(this.bb_pos+V):0}TIME_SYSTEM(){let V=this.bb.__offset(this.bb_pos,10);return V?this.bb.readInt8(this.bb_pos+V):11}MEAN_ELEMENT_THEORY(){let V=this.bb.__offset(this.bb_pos,12);return V?this.bb.readInt8(this.bb_pos+V):0}RECORDS(V,l){let Z=this.bb.__offset(this.bb_pos,14);return Z?(l||new hZ).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+Z)+V*4),this.bb):null}recordsLength(){let V=this.bb.__offset(this.bb_pos,14);return V?this.bb.__vector_len(this.bb_pos+V):0}static startMPECOLLECTION(V){V.startObject(6)}static addClassificationType(V,l){V.addFieldOffset(0,l,0)}static addRefFrame(V,l){V.addFieldInt8(1,l,9)}static addRefFrameEpoch(V,l){V.addFieldFloat64(2,l,0)}static addTimeSystem(V,l){V.addFieldInt8(3,l,11)}static addMeanElementTheory(V,l){V.addFieldInt8(4,l,0)}static addRecords(V,l){V.addFieldOffset(5,l,0)}static createRecordsVector(V,l){V.startVector(4,l.length,4);for(let Z=l.length-1;Z>=0;Z--)V.addOffset(l[Z]);return V.endVector()}static startRecordsVector(V,l){V.startVector(4,l,4)}static endMPECOLLECTION(V){return V.endObject()}static createMPECOLLECTION(V,l,Z,U,A,t,m){return fZ.startMPECOLLECTION(V),fZ.addClassificationType(V,l),fZ.addRefFrame(V,Z),fZ.addRefFrameEpoch(V,U),fZ.addTimeSystem(V,A),fZ.addMeanElementTheory(V,t),fZ.addRecords(V,m),fZ.endMPECOLLECTION(V)}unpack(){return new $R(this.CLASSIFICATION_TYPE(),this.REF_FRAME(),this.REF_FRAME_EPOCH(),this.TIME_SYSTEM(),this.MEAN_ELEMENT_THEORY(),this.bb.createObjList(this.RECORDS.bind(this),this.recordsLength()))}unpackTo(V){V.CLASSIFICATION_TYPE=this.CLASSIFICATION_TYPE(),V.REF_FRAME=this.REF_FRAME(),V.REF_FRAME_EPOCH=this.REF_FRAME_EPOCH(),V.TIME_SYSTEM=this.TIME_SYSTEM(),V.MEAN_ELEMENT_THEORY=this.MEAN_ELEMENT_THEORY(),V.RECORDS=this.bb.createObjList(this.RECORDS.bind(this),this.recordsLength())}},$R=class{constructor(V=null,l=9,Z=0,U=11,A=0,t=[]){this.CLASSIFICATION_TYPE=V,this.REF_FRAME=l,this.REF_FRAME_EPOCH=Z,this.TIME_SYSTEM=U,this.MEAN_ELEMENT_THEORY=A,this.RECORDS=t}pack(V){let l=this.CLASSIFICATION_TYPE!==null?V.createString(this.CLASSIFICATION_TYPE):0,Z=fZ.createRecordsVector(V,V.createObjectOffsetList(this.RECORDS));return fZ.createMPECOLLECTION(V,l,this.REF_FRAME,this.REF_FRAME_EPOCH,this.TIME_SYSTEM,this.MEAN_ELEMENT_THEORY,Z)}},jc={};GU(jc,{ContactPoint:()=>wl,ContactPointT:()=>V2,CryptoKey:()=>bZ,CryptoKeyT:()=>l2,Occupation:()=>mU,OccupationT:()=>Z2,Organization:()=>wW,OrganizationT:()=>W2,UPM:()=>rl,UPMCOLLECTION:()=>iU,UPMCOLLECTIONT:()=>A2,UPMT:()=>U2});var wl=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsContactPoint(V,l){return(l||new wl).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsContactPoint(V,l){return V.setPosition(V.position()+Bl),(l||new wl).__init(V.readInt32(V.position())+V.position(),V)}NAME(V){let l=this.bb.__offset(this.bb_pos,4);return l?this.bb.__string(this.bb_pos+l,V):null}CONTACT_TYPE(V){let l=this.bb.__offset(this.bb_pos,6);return l?this.bb.__string(this.bb_pos+l,V):null}EMAIL(V){let l=this.bb.__offset(this.bb_pos,8);return l?this.bb.__string(this.bb_pos+l,V):null}TELEPHONE(V){let l=this.bb.__offset(this.bb_pos,10);return l?this.bb.__string(this.bb_pos+l,V):null}CONTACT_OPTION(V){let l=this.bb.__offset(this.bb_pos,12);return l?this.bb.__string(this.bb_pos+l,V):null}AREA_SERVED(V){let l=this.bb.__offset(this.bb_pos,14);return l?this.bb.__string(this.bb_pos+l,V):null}AVAILABLE_LANGUAGE(V){let l=this.bb.__offset(this.bb_pos,16);return l?this.bb.__string(this.bb_pos+l,V):null}ADDRESS_COUNTRY(V){let l=this.bb.__offset(this.bb_pos,18);return l?this.bb.__string(this.bb_pos+l,V):null}ADDRESS_REGION(V){let l=this.bb.__offset(this.bb_pos,20);return l?this.bb.__string(this.bb_pos+l,V):null}ADDRESS_LOCALITY(V){let l=this.bb.__offset(this.bb_pos,22);return l?this.bb.__string(this.bb_pos+l,V):null}POSTAL_CODE(V){let l=this.bb.__offset(this.bb_pos,24);return l?this.bb.__string(this.bb_pos+l,V):null}STREET_ADDRESS(V){let l=this.bb.__offset(this.bb_pos,26);return l?this.bb.__string(this.bb_pos+l,V):null}POST_OFFICE_BOX_NUMBER(V){let l=this.bb.__offset(this.bb_pos,28);return l?this.bb.__string(this.bb_pos+l,V):null}static startContactPoint(V){V.startObject(13)}static addName(V,l){V.addFieldOffset(0,l,0)}static addContactType(V,l){V.addFieldOffset(1,l,0)}static addEmail(V,l){V.addFieldOffset(2,l,0)}static addTelephone(V,l){V.addFieldOffset(3,l,0)}static addContactOption(V,l){V.addFieldOffset(4,l,0)}static addAreaServed(V,l){V.addFieldOffset(5,l,0)}static addAvailableLanguage(V,l){V.addFieldOffset(6,l,0)}static addAddressCountry(V,l){V.addFieldOffset(7,l,0)}static addAddressRegion(V,l){V.addFieldOffset(8,l,0)}static addAddressLocality(V,l){V.addFieldOffset(9,l,0)}static addPostalCode(V,l){V.addFieldOffset(10,l,0)}static addStreetAddress(V,l){V.addFieldOffset(11,l,0)}static addPostOfficeBoxNumber(V,l){V.addFieldOffset(12,l,0)}static endContactPoint(V){return V.endObject()}static createContactPoint(V,l,Z,U,A,t,m,i,n,o,h,R,c,Q){return wl.startContactPoint(V),wl.addName(V,l),wl.addContactType(V,Z),wl.addEmail(V,U),wl.addTelephone(V,A),wl.addContactOption(V,t),wl.addAreaServed(V,m),wl.addAvailableLanguage(V,i),wl.addAddressCountry(V,n),wl.addAddressRegion(V,o),wl.addAddressLocality(V,h),wl.addPostalCode(V,R),wl.addStreetAddress(V,c),wl.addPostOfficeBoxNumber(V,Q),wl.endContactPoint(V)}unpack(){return new V2(this.NAME(),this.CONTACT_TYPE(),this.EMAIL(),this.TELEPHONE(),this.CONTACT_OPTION(),this.AREA_SERVED(),this.AVAILABLE_LANGUAGE(),this.ADDRESS_COUNTRY(),this.ADDRESS_REGION(),this.ADDRESS_LOCALITY(),this.POSTAL_CODE(),this.STREET_ADDRESS(),this.POST_OFFICE_BOX_NUMBER())}unpackTo(V){V.NAME=this.NAME(),V.CONTACT_TYPE=this.CONTACT_TYPE(),V.EMAIL=this.EMAIL(),V.TELEPHONE=this.TELEPHONE(),V.CONTACT_OPTION=this.CONTACT_OPTION(),V.AREA_SERVED=this.AREA_SERVED(),V.AVAILABLE_LANGUAGE=this.AVAILABLE_LANGUAGE(),V.ADDRESS_COUNTRY=this.ADDRESS_COUNTRY(),V.ADDRESS_REGION=this.ADDRESS_REGION(),V.ADDRESS_LOCALITY=this.ADDRESS_LOCALITY(),V.POSTAL_CODE=this.POSTAL_CODE(),V.STREET_ADDRESS=this.STREET_ADDRESS(),V.POST_OFFICE_BOX_NUMBER=this.POST_OFFICE_BOX_NUMBER()}},V2=class{constructor(V=null,l=null,Z=null,U=null,A=null,t=null,m=null,i=null,n=null,o=null,h=null,R=null,c=null){this.NAME=V,this.CONTACT_TYPE=l,this.EMAIL=Z,this.TELEPHONE=U,this.CONTACT_OPTION=A,this.AREA_SERVED=t,this.AVAILABLE_LANGUAGE=m,this.ADDRESS_COUNTRY=i,this.ADDRESS_REGION=n,this.ADDRESS_LOCALITY=o,this.POSTAL_CODE=h,this.STREET_ADDRESS=R,this.POST_OFFICE_BOX_NUMBER=c}pack(V){let l=this.NAME!==null?V.createString(this.NAME):0,Z=this.CONTACT_TYPE!==null?V.createString(this.CONTACT_TYPE):0,U=this.EMAIL!==null?V.createString(this.EMAIL):0,A=this.TELEPHONE!==null?V.createString(this.TELEPHONE):0,t=this.CONTACT_OPTION!==null?V.createString(this.CONTACT_OPTION):0,m=this.AREA_SERVED!==null?V.createString(this.AREA_SERVED):0,i=this.AVAILABLE_LANGUAGE!==null?V.createString(this.AVAILABLE_LANGUAGE):0,n=this.ADDRESS_COUNTRY!==null?V.createString(this.ADDRESS_COUNTRY):0,o=this.ADDRESS_REGION!==null?V.createString(this.ADDRESS_REGION):0,h=this.ADDRESS_LOCALITY!==null?V.createString(this.ADDRESS_LOCALITY):0,R=this.POSTAL_CODE!==null?V.createString(this.POSTAL_CODE):0,c=this.STREET_ADDRESS!==null?V.createString(this.STREET_ADDRESS):0,Q=this.POST_OFFICE_BOX_NUMBER!==null?V.createString(this.POST_OFFICE_BOX_NUMBER):0;return wl.createContactPoint(V,l,Z,U,A,t,m,i,n,o,h,R,c,Q)}},bZ=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsCryptoKey(V,l){return(l||new bZ).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsCryptoKey(V,l){return V.setPosition(V.position()+Bl),(l||new bZ).__init(V.readInt32(V.position())+V.position(),V)}PUBLIC_KEY(V){let l=this.bb.__offset(this.bb_pos,4);return l?this.bb.__string(this.bb_pos+l,V):null}XPUB(V){let l=this.bb.__offset(this.bb_pos,6);return l?this.bb.__string(this.bb_pos+l,V):null}PRIVATE_KEY(V){let l=this.bb.__offset(this.bb_pos,8);return l?this.bb.__string(this.bb_pos+l,V):null}XPRIV(V){let l=this.bb.__offset(this.bb_pos,10);return l?this.bb.__string(this.bb_pos+l,V):null}KEY_ADDRESS(V){let l=this.bb.__offset(this.bb_pos,12);return l?this.bb.__string(this.bb_pos+l,V):null}ADDRESS_TYPE(){let V=this.bb.__offset(this.bb_pos,14);return V?this.bb.readInt32(this.bb_pos+V):0}static startCryptoKey(V){V.startObject(6)}static addPublicKey(V,l){V.addFieldOffset(0,l,0)}static addXpub(V,l){V.addFieldOffset(1,l,0)}static addPrivateKey(V,l){V.addFieldOffset(2,l,0)}static addXpriv(V,l){V.addFieldOffset(3,l,0)}static addKeyAddress(V,l){V.addFieldOffset(4,l,0)}static addAddressType(V,l){V.addFieldInt32(5,l,0)}static endCryptoKey(V){return V.endObject()}static createCryptoKey(V,l,Z,U,A,t,m){return bZ.startCryptoKey(V),bZ.addPublicKey(V,l),bZ.addXpub(V,Z),bZ.addPrivateKey(V,U),bZ.addXpriv(V,A),bZ.addKeyAddress(V,t),bZ.addAddressType(V,m),bZ.endCryptoKey(V)}unpack(){return new l2(this.PUBLIC_KEY(),this.XPUB(),this.PRIVATE_KEY(),this.XPRIV(),this.KEY_ADDRESS(),this.ADDRESS_TYPE())}unpackTo(V){V.PUBLIC_KEY=this.PUBLIC_KEY(),V.XPUB=this.XPUB(),V.PRIVATE_KEY=this.PRIVATE_KEY(),V.XPRIV=this.XPRIV(),V.KEY_ADDRESS=this.KEY_ADDRESS(),V.ADDRESS_TYPE=this.ADDRESS_TYPE()}},l2=class{constructor(V=null,l=null,Z=null,U=null,A=null,t=0){this.PUBLIC_KEY=V,this.XPUB=l,this.PRIVATE_KEY=Z,this.XPRIV=U,this.KEY_ADDRESS=A,this.ADDRESS_TYPE=t}pack(V){let l=this.PUBLIC_KEY!==null?V.createString(this.PUBLIC_KEY):0,Z=this.XPUB!==null?V.createString(this.XPUB):0,U=this.PRIVATE_KEY!==null?V.createString(this.PRIVATE_KEY):0,A=this.XPRIV!==null?V.createString(this.XPRIV):0,t=this.KEY_ADDRESS!==null?V.createString(this.KEY_ADDRESS):0;return bZ.createCryptoKey(V,l,Z,U,A,t,this.ADDRESS_TYPE)}},mU=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsOccupation(V,l){return(l||new mU).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsOccupation(V,l){return V.setPosition(V.position()+Bl),(l||new mU).__init(V.readInt32(V.position())+V.position(),V)}NAME(V){let l=this.bb.__offset(this.bb_pos,4);return l?this.bb.__string(this.bb_pos+l,V):null}static startOccupation(V){V.startObject(1)}static addName(V,l){V.addFieldOffset(0,l,0)}static endOccupation(V){return V.endObject()}static createOccupation(V,l){return mU.startOccupation(V),mU.addName(V,l),mU.endOccupation(V)}unpack(){return new Z2(this.NAME())}unpackTo(V){V.NAME=this.NAME()}},Z2=class{constructor(V=null){this.NAME=V}pack(V){let l=this.NAME!==null?V.createString(this.NAME):0;return mU.createOccupation(V,l)}},wW=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsOrganization(V,l){return(l||new wW).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsOrganization(V,l){return V.setPosition(V.position()+Bl),(l||new wW).__init(V.readInt32(V.position())+V.position(),V)}NAME(V){let l=this.bb.__offset(this.bb_pos,4);return l?this.bb.__string(this.bb_pos+l,V):null}LEGAL_NAME(V){let l=this.bb.__offset(this.bb_pos,6);return l?this.bb.__string(this.bb_pos+l,V):null}static startOrganization(V){V.startObject(2)}static addName(V,l){V.addFieldOffset(0,l,0)}static addLegalName(V,l){V.addFieldOffset(1,l,0)}static endOrganization(V){return V.endObject()}static createOrganization(V,l,Z){return wW.startOrganization(V),wW.addName(V,l),wW.addLegalName(V,Z),wW.endOrganization(V)}unpack(){return new W2(this.NAME(),this.LEGAL_NAME())}unpackTo(V){V.NAME=this.NAME(),V.LEGAL_NAME=this.LEGAL_NAME()}},W2=class{constructor(V=null,l=null){this.NAME=V,this.LEGAL_NAME=l}pack(V){let l=this.NAME!==null?V.createString(this.NAME):0,Z=this.LEGAL_NAME!==null?V.createString(this.LEGAL_NAME):0;return wW.createOrganization(V,l,Z)}},rl=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsUPM(V,l){return(l||new rl).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsUPM(V,l){return V.setPosition(V.position()+Bl),(l||new rl).__init(V.readInt32(V.position())+V.position(),V)}static bufferHasIdentifier(V){return V.__has_identifier("$UPM")}NAME(V){let l=this.bb.__offset(this.bb_pos,4);return l?this.bb.__string(this.bb_pos+l,V):null}ALTERNATE_NAME(V){let l=this.bb.__offset(this.bb_pos,6);return l?this.bb.__string(this.bb_pos+l,V):null}DESCRIPTION(V){let l=this.bb.__offset(this.bb_pos,8);return l?this.bb.__string(this.bb_pos+l,V):null}IMAGE(V){let l=this.bb.__offset(this.bb_pos,10);return l?this.bb.__string(this.bb_pos+l,V):null}SAME_AS(V){let l=this.bb.__offset(this.bb_pos,12);return l?this.bb.__string(this.bb_pos+l,V):null}URL(V){let l=this.bb.__offset(this.bb_pos,14);return l?this.bb.__string(this.bb_pos+l,V):null}TELEPHONE(V){let l=this.bb.__offset(this.bb_pos,16);return l?this.bb.__string(this.bb_pos+l,V):null}EMAIL(V){let l=this.bb.__offset(this.bb_pos,18);return l?this.bb.__string(this.bb_pos+l,V):null}KEY(V,l){let Z=this.bb.__offset(this.bb_pos,20);return Z?(l||new bZ).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+Z)+V*4),this.bb):null}keyLength(){let V=this.bb.__offset(this.bb_pos,20);return V?this.bb.__vector_len(this.bb_pos+V):0}CONTACT_POINT(V,l){let Z=this.bb.__offset(this.bb_pos,22);return Z?(l||new wl).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+Z)+V*4),this.bb):null}contactPointLength(){let V=this.bb.__offset(this.bb_pos,22);return V?this.bb.__vector_len(this.bb_pos+V):0}ADDRESS(V){let l=this.bb.__offset(this.bb_pos,24);return l?(V||new wl).__init(this.bb.__indirect(this.bb_pos+l),this.bb):null}JOB_TITLE(V){let l=this.bb.__offset(this.bb_pos,26);return l?this.bb.__string(this.bb_pos+l,V):null}AFFILIATION(V){let l=this.bb.__offset(this.bb_pos,28);return l?(V||new wW).__init(this.bb.__indirect(this.bb_pos+l),this.bb):null}HAS_OCCUPATION(V){let l=this.bb.__offset(this.bb_pos,30);return l?(V||new mU).__init(this.bb.__indirect(this.bb_pos+l),this.bb):null}FAMILY_NAME(V){let l=this.bb.__offset(this.bb_pos,32);return l?this.bb.__string(this.bb_pos+l,V):null}GIVEN_NAME(V){let l=this.bb.__offset(this.bb_pos,34);return l?this.bb.__string(this.bb_pos+l,V):null}ADDITIONAL_NAME(V){let l=this.bb.__offset(this.bb_pos,36);return l?this.bb.__string(this.bb_pos+l,V):null}HONORIFIC_PREFIX(V){let l=this.bb.__offset(this.bb_pos,38);return l?this.bb.__string(this.bb_pos+l,V):null}HONORIFIC_SUFFIX(V){let l=this.bb.__offset(this.bb_pos,40);return l?this.bb.__string(this.bb_pos+l,V):null}static startUPM(V){V.startObject(19)}static addName(V,l){V.addFieldOffset(0,l,0)}static addAlternateName(V,l){V.addFieldOffset(1,l,0)}static addDescription(V,l){V.addFieldOffset(2,l,0)}static addImage(V,l){V.addFieldOffset(3,l,0)}static addSameAs(V,l){V.addFieldOffset(4,l,0)}static addUrl(V,l){V.addFieldOffset(5,l,0)}static addTelephone(V,l){V.addFieldOffset(6,l,0)}static addEmail(V,l){V.addFieldOffset(7,l,0)}static addKey(V,l){V.addFieldOffset(8,l,0)}static createKeyVector(V,l){V.startVector(4,l.length,4);for(let Z=l.length-1;Z>=0;Z--)V.addOffset(l[Z]);return V.endVector()}static startKeyVector(V,l){V.startVector(4,l,4)}static addContactPoint(V,l){V.addFieldOffset(9,l,0)}static createContactPointVector(V,l){V.startVector(4,l.length,4);for(let Z=l.length-1;Z>=0;Z--)V.addOffset(l[Z]);return V.endVector()}static startContactPointVector(V,l){V.startVector(4,l,4)}static addAddress(V,l){V.addFieldOffset(10,l,0)}static addJobTitle(V,l){V.addFieldOffset(11,l,0)}static addAffiliation(V,l){V.addFieldOffset(12,l,0)}static addHasOccupation(V,l){V.addFieldOffset(13,l,0)}static addFamilyName(V,l){V.addFieldOffset(14,l,0)}static addGivenName(V,l){V.addFieldOffset(15,l,0)}static addAdditionalName(V,l){V.addFieldOffset(16,l,0)}static addHonorificPrefix(V,l){V.addFieldOffset(17,l,0)}static addHonorificSuffix(V,l){V.addFieldOffset(18,l,0)}static endUPM(V){return V.endObject()}static finishUPMBuffer(V,l){V.finish(l,"$UPM")}static finishSizePrefixedUPMBuffer(V,l){V.finish(l,"$UPM",!0)}unpack(){return new U2(this.NAME(),this.ALTERNATE_NAME(),this.DESCRIPTION(),this.IMAGE(),this.SAME_AS(),this.URL(),this.TELEPHONE(),this.EMAIL(),this.bb.createObjList(this.KEY.bind(this),this.keyLength()),this.bb.createObjList(this.CONTACT_POINT.bind(this),this.contactPointLength()),this.ADDRESS()!==null?this.ADDRESS().unpack():null,this.JOB_TITLE(),this.AFFILIATION()!==null?this.AFFILIATION().unpack():null,this.HAS_OCCUPATION()!==null?this.HAS_OCCUPATION().unpack():null,this.FAMILY_NAME(),this.GIVEN_NAME(),this.ADDITIONAL_NAME(),this.HONORIFIC_PREFIX(),this.HONORIFIC_SUFFIX())}unpackTo(V){V.NAME=this.NAME(),V.ALTERNATE_NAME=this.ALTERNATE_NAME(),V.DESCRIPTION=this.DESCRIPTION(),V.IMAGE=this.IMAGE(),V.SAME_AS=this.SAME_AS(),V.URL=this.URL(),V.TELEPHONE=this.TELEPHONE(),V.EMAIL=this.EMAIL(),V.KEY=this.bb.createObjList(this.KEY.bind(this),this.keyLength()),V.CONTACT_POINT=this.bb.createObjList(this.CONTACT_POINT.bind(this),this.contactPointLength()),V.ADDRESS=this.ADDRESS()!==null?this.ADDRESS().unpack():null,V.JOB_TITLE=this.JOB_TITLE(),V.AFFILIATION=this.AFFILIATION()!==null?this.AFFILIATION().unpack():null,V.HAS_OCCUPATION=this.HAS_OCCUPATION()!==null?this.HAS_OCCUPATION().unpack():null,V.FAMILY_NAME=this.FAMILY_NAME(),V.GIVEN_NAME=this.GIVEN_NAME(),V.ADDITIONAL_NAME=this.ADDITIONAL_NAME(),V.HONORIFIC_PREFIX=this.HONORIFIC_PREFIX(),V.HONORIFIC_SUFFIX=this.HONORIFIC_SUFFIX()}},U2=class{constructor(V=null,l=null,Z=null,U=null,A=null,t=null,m=null,i=null,n=[],o=[],h=null,R=null,c=null,Q=null,T=null,S=null,p=null,b=null,E=null){this.NAME=V,this.ALTERNATE_NAME=l,this.DESCRIPTION=Z,this.IMAGE=U,this.SAME_AS=A,this.URL=t,this.TELEPHONE=m,this.EMAIL=i,this.KEY=n,this.CONTACT_POINT=o,this.ADDRESS=h,this.JOB_TITLE=R,this.AFFILIATION=c,this.HAS_OCCUPATION=Q,this.FAMILY_NAME=T,this.GIVEN_NAME=S,this.ADDITIONAL_NAME=p,this.HONORIFIC_PREFIX=b,this.HONORIFIC_SUFFIX=E}pack(V){let l=this.NAME!==null?V.createString(this.NAME):0,Z=this.ALTERNATE_NAME!==null?V.createString(this.ALTERNATE_NAME):0,U=this.DESCRIPTION!==null?V.createString(this.DESCRIPTION):0,A=this.IMAGE!==null?V.createString(this.IMAGE):0,t=this.SAME_AS!==null?V.createString(this.SAME_AS):0,m=this.URL!==null?V.createString(this.URL):0,i=this.TELEPHONE!==null?V.createString(this.TELEPHONE):0,n=this.EMAIL!==null?V.createString(this.EMAIL):0,o=rl.createKeyVector(V,V.createObjectOffsetList(this.KEY)),h=rl.createContactPointVector(V,V.createObjectOffsetList(this.CONTACT_POINT)),R=this.ADDRESS!==null?this.ADDRESS.pack(V):0,c=this.JOB_TITLE!==null?V.createString(this.JOB_TITLE):0,Q=this.AFFILIATION!==null?this.AFFILIATION.pack(V):0,T=this.HAS_OCCUPATION!==null?this.HAS_OCCUPATION.pack(V):0,S=this.FAMILY_NAME!==null?V.createString(this.FAMILY_NAME):0,p=this.GIVEN_NAME!==null?V.createString(this.GIVEN_NAME):0,b=this.ADDITIONAL_NAME!==null?V.createString(this.ADDITIONAL_NAME):0,E=this.HONORIFIC_PREFIX!==null?V.createString(this.HONORIFIC_PREFIX):0,D=this.HONORIFIC_SUFFIX!==null?V.createString(this.HONORIFIC_SUFFIX):0;return rl.startUPM(V),rl.addName(V,l),rl.addAlternateName(V,Z),rl.addDescription(V,U),rl.addImage(V,A),rl.addSameAs(V,t),rl.addUrl(V,m),rl.addTelephone(V,i),rl.addEmail(V,n),rl.addKey(V,o),rl.addContactPoint(V,h),rl.addAddress(V,R),rl.addJobTitle(V,c),rl.addAffiliation(V,Q),rl.addHasOccupation(V,T),rl.addFamilyName(V,S),rl.addGivenName(V,p),rl.addAdditionalName(V,b),rl.addHonorificPrefix(V,E),rl.addHonorificSuffix(V,D),rl.endUPM(V)}},iU=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsUPMCOLLECTION(V,l){return(l||new iU).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsUPMCOLLECTION(V,l){return V.setPosition(V.position()+Bl),(l||new iU).__init(V.readInt32(V.position())+V.position(),V)}RECORDS(V,l){let Z=this.bb.__offset(this.bb_pos,4);return Z?(l||new rl).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+Z)+V*4),this.bb):null}recordsLength(){let V=this.bb.__offset(this.bb_pos,4);return V?this.bb.__vector_len(this.bb_pos+V):0}static startUPMCOLLECTION(V){V.startObject(1)}static addRecords(V,l){V.addFieldOffset(0,l,0)}static createRecordsVector(V,l){V.startVector(4,l.length,4);for(let Z=l.length-1;Z>=0;Z--)V.addOffset(l[Z]);return V.endVector()}static startRecordsVector(V,l){V.startVector(4,l,4)}static endUPMCOLLECTION(V){return V.endObject()}static createUPMCOLLECTION(V,l){return iU.startUPMCOLLECTION(V),iU.addRecords(V,l),iU.endUPMCOLLECTION(V)}unpack(){return new A2(this.bb.createObjList(this.RECORDS.bind(this),this.recordsLength()))}unpackTo(V){V.RECORDS=this.bb.createObjList(this.RECORDS.bind(this),this.recordsLength())}},A2=class{constructor(V=[]){this.RECORDS=V}pack(V){let l=iU.createRecordsVector(V,V.createObjectOffsetList(this.RECORDS));return iU.createUPMCOLLECTION(V,l)}},qc={};GU(qc,{CSM:()=>tZ,CSMCOLLECTION:()=>nU,CSMCOLLECTIONT:()=>e2,CSMT:()=>t2});var tZ=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsCSM(V,l){return(l||new tZ).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsCSM(V,l){return V.setPosition(V.position()+Bl),(l||new tZ).__init(V.readInt32(V.position())+V.position(),V)}static bufferHasIdentifier(V){return V.__has_identifier("$CSM")}NORAD_CAT_ID_1(){let V=this.bb.__offset(this.bb_pos,4);return V?this.bb.readUint32(this.bb_pos+V):0}OBJECT_NAME_1(V){let l=this.bb.__offset(this.bb_pos,6);return l?this.bb.__string(this.bb_pos+l,V):null}DSE_1(){let V=this.bb.__offset(this.bb_pos,8);return V?this.bb.readFloat64(this.bb_pos+V):0}NORAD_CAT_ID_2(){let V=this.bb.__offset(this.bb_pos,10);return V?this.bb.readUint32(this.bb_pos+V):0}OBJECT_NAME_2(V){let l=this.bb.__offset(this.bb_pos,12);return l?this.bb.__string(this.bb_pos+l,V):null}DSE_2(){let V=this.bb.__offset(this.bb_pos,14);return V?this.bb.readFloat64(this.bb_pos+V):0}TCA(){let V=this.bb.__offset(this.bb_pos,16);return V?this.bb.readFloat64(this.bb_pos+V):0}TCA_RANGE(){let V=this.bb.__offset(this.bb_pos,18);return V?this.bb.readFloat64(this.bb_pos+V):0}TCA_RELATIVE_SPEED(){let V=this.bb.__offset(this.bb_pos,20);return V?this.bb.readFloat64(this.bb_pos+V):0}MAX_PROB(){let V=this.bb.__offset(this.bb_pos,22);return V?this.bb.readFloat64(this.bb_pos+V):0}DILUTION(){let V=this.bb.__offset(this.bb_pos,24);return V?this.bb.readFloat64(this.bb_pos+V):0}static startCSM(V){V.startObject(11)}static addNoradCatId1(V,l){V.addFieldInt32(0,l,0)}static addObjectName1(V,l){V.addFieldOffset(1,l,0)}static addDse1(V,l){V.addFieldFloat64(2,l,0)}static addNoradCatId2(V,l){V.addFieldInt32(3,l,0)}static addObjectName2(V,l){V.addFieldOffset(4,l,0)}static addDse2(V,l){V.addFieldFloat64(5,l,0)}static addTca(V,l){V.addFieldFloat64(6,l,0)}static addTcaRange(V,l){V.addFieldFloat64(7,l,0)}static addTcaRelativeSpeed(V,l){V.addFieldFloat64(8,l,0)}static addMaxProb(V,l){V.addFieldFloat64(9,l,0)}static addDilution(V,l){V.addFieldFloat64(10,l,0)}static endCSM(V){return V.endObject()}static finishCSMBuffer(V,l){V.finish(l,"$CSM")}static finishSizePrefixedCSMBuffer(V,l){V.finish(l,"$CSM",!0)}static createCSM(V,l,Z,U,A,t,m,i,n,o,h,R){return tZ.startCSM(V),tZ.addNoradCatId1(V,l),tZ.addObjectName1(V,Z),tZ.addDse1(V,U),tZ.addNoradCatId2(V,A),tZ.addObjectName2(V,t),tZ.addDse2(V,m),tZ.addTca(V,i),tZ.addTcaRange(V,n),tZ.addTcaRelativeSpeed(V,o),tZ.addMaxProb(V,h),tZ.addDilution(V,R),tZ.endCSM(V)}unpack(){return new t2(this.NORAD_CAT_ID_1(),this.OBJECT_NAME_1(),this.DSE_1(),this.NORAD_CAT_ID_2(),this.OBJECT_NAME_2(),this.DSE_2(),this.TCA(),this.TCA_RANGE(),this.TCA_RELATIVE_SPEED(),this.MAX_PROB(),this.DILUTION())}unpackTo(V){V.NORAD_CAT_ID_1=this.NORAD_CAT_ID_1(),V.OBJECT_NAME_1=this.OBJECT_NAME_1(),V.DSE_1=this.DSE_1(),V.NORAD_CAT_ID_2=this.NORAD_CAT_ID_2(),V.OBJECT_NAME_2=this.OBJECT_NAME_2(),V.DSE_2=this.DSE_2(),V.TCA=this.TCA(),V.TCA_RANGE=this.TCA_RANGE(),V.TCA_RELATIVE_SPEED=this.TCA_RELATIVE_SPEED(),V.MAX_PROB=this.MAX_PROB(),V.DILUTION=this.DILUTION()}},t2=class{constructor(V=0,l=null,Z=0,U=0,A=null,t=0,m=0,i=0,n=0,o=0,h=0){this.NORAD_CAT_ID_1=V,this.OBJECT_NAME_1=l,this.DSE_1=Z,this.NORAD_CAT_ID_2=U,this.OBJECT_NAME_2=A,this.DSE_2=t,this.TCA=m,this.TCA_RANGE=i,this.TCA_RELATIVE_SPEED=n,this.MAX_PROB=o,this.DILUTION=h}pack(V){let l=this.OBJECT_NAME_1!==null?V.createString(this.OBJECT_NAME_1):0,Z=this.OBJECT_NAME_2!==null?V.createString(this.OBJECT_NAME_2):0;return tZ.createCSM(V,this.NORAD_CAT_ID_1,l,this.DSE_1,this.NORAD_CAT_ID_2,Z,this.DSE_2,this.TCA,this.TCA_RANGE,this.TCA_RELATIVE_SPEED,this.MAX_PROB,this.DILUTION)}},nU=class{constructor(){this.bb=null,this.bb_pos=0}__init(V,l){return this.bb_pos=V,this.bb=l,this}static getRootAsCSMCOLLECTION(V,l){return(l||new nU).__init(V.readInt32(V.position())+V.position(),V)}static getSizePrefixedRootAsCSMCOLLECTION(V,l){return V.setPosition(V.position()+Bl),(l||new nU).__init(V.readInt32(V.position())+V.position(),V)}RECORDS(V,l){let Z=this.bb.__offset(this.bb_pos,4);return Z?(l||new tZ).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+Z)+V*4),this.bb):null}recordsLength(){let V=this.bb.__offset(this.bb_pos,4);return V?this.bb.__vector_len(this.bb_pos+V):0}static startCSMCOLLECTION(V){V.startObject(1)}static addRecords(V,l){V.addFieldOffset(0,l,0)}static createRecordsVector(V,l){V.startVector(4,l.length,4);for(let Z=l.length-1;Z>=0;Z--)V.addOffset(l[Z]);return V.endVector()}static startRecordsVector(V,l){V.startVector(4,l,4)}static endCSMCOLLECTION(V){return V.endObject()}static createCSMCOLLECTION(V,l){return nU.startCSMCOLLECTION(V),nU.addRecords(V,l),nU.endCSMCOLLECTION(V)}unpack(){return new e2(this.bb.createObjList(this.RECORDS.bind(this),this.recordsLength()))}unpackTo(V){V.RECORDS=this.bb.createObjList(this.RECORDS.bind(this),this.recordsLength())}},e2=class{constructor(V=[]){this.RECORDS=V}pack(V){let l=nU.createRecordsVector(V,V.createObjectOffsetList(this.RECORDS));return nU.createCSMCOLLECTION(V,l)}};var $m=(V,l,Z)=>{V=new Uint8Array(V);let U=new Z[`${l}COLLECTIONT`];return Z[`${l}COLLECTION`][`getRootAs${l}COLLECTION`](new nR(V)).unpackTo(U),U};/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`),"captureStackTrace"in Error&&Error.captureStackTrace(g.leakWarning,ii),Se.register(G,g,G)}return G},Ai=G=>Se.unregister(G),RA(e))};function f2(){if(this.$$.ptr||ce(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var e=RA(Object.create(Object.getPrototypeOf(this),{$$:{value:c2(this.$$)}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e}function b2(){this.$$.ptr||ce(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&vV("Object already scheduled for deletion"),Ai(this),ti(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function u2(){return!this.$$.ptr}function J2(){return this.$$.ptr||ce(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&vV("Object already scheduled for deletion"),rA.push(this),rA.length===1&&oA&&oA(Ce),this.$$.deleteScheduled=!0,this}function x2(){zW.prototype.isAliasOf=I2,zW.prototype.clone=f2,zW.prototype.delete=b2,zW.prototype.isDeleted=u2,zW.prototype.deleteLater=J2}function zW(){}var D2=48,M2=57;function ge(e){if(e===void 0)return"_unknown";e=e.replace(/[^a-zA-Z0-9_]/g,"$");var G=e.charCodeAt(0);return G>=D2&&G<=M2?`_${e}`:e}function Ne(e,G){return e=ge(e),{[e]:function(){return G.apply(this,arguments)}}[e]}function ni(e,G,r){if(e[G].overloadTable===void 0){var F=e[G];e[G]=function(){return e[G].overloadTable.hasOwnProperty(arguments.length)||vV(`Function '${r}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e[G].overloadTable})!`),e[G].overloadTable[arguments.length].apply(this,arguments)},e[G].overloadTable=[],e[G].overloadTable[F.argCount]=F}}function _2(e,G,r){Z.hasOwnProperty(e)?((r===void 0||Z[e].overloadTable!==void 0&&Z[e].overloadTable[r]!==void 0)&&vV(`Cannot register public name '${e}' twice`),ni(Z,e,e),Z.hasOwnProperty(r)&&vV(`Cannot register multiple overloads of a function with the same number of arguments (${r})!`),Z[e].overloadTable[r]=G):(Z[e]=G,r!==void 0&&(Z[e].numArguments=r))}function O2(e,G,r,F,g,u,x,M){this.name=e,this.constructor=G,this.instancePrototype=r,this.rawDestructor=F,this.baseClass=g,this.getActualType=u,this.upcast=x,this.downcast=M,this.pureVirtualFunctions=[]}function Tt(e,G,r){for(;G!==r;)G.upcast||vV(`Expected null or instance of ${r.name}, got an instance of ${G.name}`),e=G.upcast(e),G=G.baseClass;return e}function w2(e,G){if(G===null)return this.isReference&&vV(`null is not a valid ${this.name}`),0;G.$$||vV(`Cannot pass "${MU(G)}" as a ${this.name}`),G.$$.ptr||vV(`Cannot pass deleted object as a pointer of type ${this.name}`);var r=G.$$.ptrType.registeredClass,F=Tt(G.$$.ptr,r,this.registeredClass);return F}function Y2(e,G){var r;if(G===null)return this.isReference&&vV(`null is not a valid ${this.name}`),this.isSmartPointer?(r=this.rawConstructor(),e!==null&&e.push(this.rawDestructor,r),r):0;G.$$||vV(`Cannot pass "${MU(G)}" as a ${this.name}`),G.$$.ptr||vV(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&G.$$.ptrType.isConst&&vV(`Cannot convert argument of type ${G.$$.smartPtrType?G.$$.smartPtrType.name:G.$$.ptrType.name} to parameter type ${this.name}`);var F=G.$$.ptrType.registeredClass;if(r=Tt(G.$$.ptr,F,this.registeredClass),this.isSmartPointer)switch(G.$$.smartPtr===void 0&&vV("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:G.$$.smartPtrType===this?r=G.$$.smartPtr:vV(`Cannot convert argument of type ${G.$$.smartPtrType?G.$$.smartPtrType.name:G.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:r=G.$$.smartPtr;break;case 2:if(G.$$.smartPtrType===this)r=G.$$.smartPtr;else{var g=G.clone();r=this.rawShare(r,KZ.toHandle(function(){g.delete()})),e!==null&&e.push(this.rawDestructor,r)}break;default:vV("Unsupporting sharing policy")}return r}function y2(e,G){if(G===null)return this.isReference&&vV(`null is not a valid ${this.name}`),0;G.$$||vV(`Cannot pass "${MU(G)}" as a ${this.name}`),G.$$.ptr||vV(`Cannot pass deleted object as a pointer of type ${this.name}`),G.$$.ptrType.isConst&&vV(`Cannot convert argument of type ${G.$$.ptrType.name} to parameter type ${this.name}`);var r=G.$$.ptrType.registeredClass,F=Tt(G.$$.ptr,r,this.registeredClass);return F}function Bt(e){return this.fromWireType(k[e>>2])}function v2(e){return this.rawGetPointee&&(e=this.rawGetPointee(e)),e}function z2(e){this.rawDestructor&&this.rawDestructor(e)}function k2(e){e!==null&&e.delete()}function H2(){QW.prototype.getPointee=v2,QW.prototype.destructor=z2,QW.prototype.argPackAdvance=8,QW.prototype.readValueFromPointer=Bt,QW.prototype.deleteObject=k2,QW.prototype.fromWireType=ii}function QW(e,G,r,F,g,u,x,M,y,P,AV){this.name=e,this.registeredClass=G,this.isReference=r,this.isConst=F,this.isSmartPointer=g,this.pointeeType=u,this.sharingPolicy=x,this.rawGetPointee=M,this.rawConstructor=y,this.rawShare=P,this.rawDestructor=AV,!g&&G.baseClass===void 0?F?(this.toWireType=w2,this.destructorFunction=null):(this.toWireType=y2,this.destructorFunction=null):this.toWireType=Y2}function L2(e,G,r){Z.hasOwnProperty(e)||Rt("Replacing nonexistant public symbol"),Z[e].overloadTable!==void 0&&r!==void 0?Z[e].overloadTable[r]=G:(Z[e]=G,Z[e].argCount=r)}var K2=(e,G,r)=>{W("dynCall_"+e in Z,`bad function pointer type - dynCall function not found for sig '${e}'`),r&&r.length?W(r.length===e.substring(1).replace(/j/g,"--").length):W(e.length==1);var F=Z["dynCall_"+e];return r&&r.length?F.apply(null,[G].concat(r)):F.call(null,G)},Ft=[],Ee=e=>{var G=Ft[e];return G||(e>=Ft.length&&(Ft.length=e+1),Ft[e]=G=bV.get(e)),W(bV.get(e)==G,"JavaScript-side Wasm function table mirror is out of date!"),G},P2=(e,G,r)=>{if(e.includes("j"))return K2(e,G,r);W(Ee(G),`missing table entry in dynCall: ${G}`);var F=Ee(G).apply(null,r);return F},j2=(e,G)=>{W(e.includes("j")||e.includes("p"),"getDynCaller should only be called with i64 sigs");var r=[];return function(){return r.length=0,Object.assign(r,arguments),P2(e,G,r)}};function kW(e,G){e=BZ(e);function r(){return e.includes("j")?j2(e,G):Ee(G)}var F=r();return typeof F!="function"&&vV(`unknown function pointer with signature ${e}: ${G}`),F}function q2(e,G){var r=Ne(G,function(F){this.name=G,this.message=F;var g=new Error(F).stack;g!==void 0&&(this.stack=this.toString()+`
`+g.replace(/^Error(:[^\n]*)?\n/,""))});return r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},r}var Gi=void 0;function si(e){var G=QT(e),r=BZ(G);return cW(G),r}function dA(e,G){var r=[],F={};function g(u){if(!F[u]&&!rU[u]){if(ht[u]){ht[u].forEach(g);return}r.push(u),F[u]=!0}}throw G.forEach(g),new Gi(`${e}: `+r.map(si).join([", "]))}function $2(e,G,r,F,g,u,x,M,y,P,AV,sV,tV){AV=BZ(AV),u=kW(g,u),M&&(M=kW(x,M)),P&&(P=kW(y,P)),tV=kW(sV,tV);var eV=ge(AV);_2(eV,function(){dA(`Cannot construct ${AV} due to unbound types`,[F])}),oU([e,G,r],F?[F]:[],function(hV){hV=hV[0];var JV,Wl;F?(JV=hV.registeredClass,Wl=JV.instancePrototype):Wl=zW.prototype;var ml=Ne(eV,function(){if(Object.getPrototypeOf(this)!==lV)throw new DU("Use 'new' to construct "+AV);if(oV.constructor_body===void 0)throw new DU(AV+" has no accessible constructor");var fl=oV.constructor_body[arguments.length];if(fl===void 0)throw new DU(`Tried to invoke ctor of ${AV} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(oV.constructor_body).toString()}) parameters instead!`);return fl.apply(this,arguments)}),lV=Object.create(Wl,{constructor:{value:ml}});ml.prototype=lV;var oV=new O2(AV,ml,lV,tV,JV,u,M,P);oV.baseClass&&(oV.baseClass.__derivedClasses===void 0&&(oV.baseClass.__derivedClasses=[]),oV.baseClass.__derivedClasses.push(oV));var zl=new QW(AV,oV,!0,!1,!1),il=new QW(AV+"*",oV,!1,!1,!1),FZ=new QW(AV+" const*",oV,!1,!0,!1);return mi[e]={pointerType:il,constPointerType:FZ},L2(eV,ml),[zl,il,FZ]})}function ai(e,G){for(var r=[],F=0;F<e;F++)r.push(UV[G+F*4>>2]);return r}function pe(e){for(;e.length;){var G=e.pop(),r=e.pop();r(G)}}function Vd(e,G){if(!(e instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof e} which is not a function`);var r=Ne(e.name||"unknownFunctionName",function(){});r.prototype=e.prototype;var F=new r,g=e.apply(F,G);return g instanceof Object?g:F}function ri(e,G,r,F,g,u){var x=G.length;x<2&&vV("argTypes array size mismatch! Must at least get return value and 'this' types!"),W(!u,"Async bindings are only supported with JSPI.");for(var M=G[1]!==null&&r!==null,y=!1,P=1;P<G.length;++P)if(G[P]!==null&&G[P].destructorFunction===void 0){y=!0;break}for(var AV=G[0].name!=="void",sV="",tV="",P=0;P<x-2;++P)sV+=(P!==0?", ":"")+"arg"+P,tV+=(P!==0?", ":"")+"arg"+P+"Wired";var eV=`
        return function ${ge(e)}(${sV}) {
        if (arguments.length !== ${x-2}) {
          throwBindingError('function ${e} called with ${arguments.length} arguments, expected ${x-2} args!');
        }`;y&&(eV+=`var destructors = [];
`);var hV=y?"destructors":"null",JV=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],Wl=[vV,F,g,pe,G[0],G[1]];M&&(eV+="var thisWired = classParam.toWireType("+hV+`, this);
`);for(var P=0;P<x-2;++P)eV+="var arg"+P+"Wired = argType"+P+".toWireType("+hV+", arg"+P+"); // "+G[P+2].name+`
`,JV.push("argType"+P),Wl.push(G[P+2]);if(M&&(tV="thisWired"+(tV.length>0?", ":"")+tV),eV+=(AV||u?"var rv = ":"")+"invoker(fn"+(tV.length>0?", ":"")+tV+`);
`,y)eV+=`runDestructors(destructors);
`;else for(var P=M?1:2;P<G.length;++P){var ml=P===1?"thisWired":"arg"+(P-2)+"Wired";G[P].destructorFunction!==null&&(eV+=ml+"_dtor("+ml+"); // "+G[P].name+`
`,JV.push(ml+"_dtor"),Wl.push(G[P].destructorFunction))}return AV&&(eV+=`var ret = retType.fromWireType(rv);
return ret;
`),eV+=`}
`,JV.push(eV),Vd(Function,JV).apply(null,Wl)}function ld(e,G,r,F,g,u){W(G>0);var x=ai(G,r);g=kW(F,g),oU([],[e],function(M){M=M[0];var y=`constructor ${M.name}`;if(M.registeredClass.constructor_body===void 0&&(M.registeredClass.constructor_body=[]),M.registeredClass.constructor_body[G-1]!==void 0)throw new DU(`Cannot register multiple constructors with identical number of parameters (${G-1}) for class '${M.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return M.registeredClass.constructor_body[G-1]=()=>{dA(`Cannot construct ${M.name} due to unbound types`,x)},oU([],x,function(P){return P.splice(1,0,null),M.registeredClass.constructor_body[G-1]=ri(y,P,null,g,u),[]}),[]})}function Zd(e,G,r,F,g,u,x,M,y){var P=ai(r,F);G=BZ(G),u=kW(g,u),oU([],[e],function(AV){AV=AV[0];var sV=`${AV.name}.${G}`;G.startsWith("@@")&&(G=Symbol[G.substring(2)]),M&&AV.registeredClass.pureVirtualFunctions.push(G);function tV(){dA(`Cannot call ${sV} due to unbound types`,P)}var eV=AV.registeredClass.instancePrototype,hV=eV[G];return hV===void 0||hV.overloadTable===void 0&&hV.className!==AV.name&&hV.argCount===r-2?(tV.argCount=r-2,tV.className=AV.name,eV[G]=tV):(ni(eV,G,sV),eV[G].overloadTable[r-2]=tV),oU([],P,function(JV){var Wl=ri(sV,JV,AV,u,x,y);return eV[G].overloadTable===void 0?(Wl.argCount=r-2,eV[G]=Wl):eV[G].overloadTable[r-2]=Wl,[]}),[]})}function oi(e,G,r){return e instanceof Object||vV(`${r} with invalid "this": ${e}`),e instanceof G.registeredClass.constructor||vV(`${r} incompatible with "this" of type ${e.constructor.name}`),e.$$.ptr||vV(`cannot call emscripten binding method ${r} on deleted object`),Tt(e.$$.ptr,e.$$.ptrType.registeredClass,G.registeredClass)}function Wd(e,G,r,F,g,u,x,M,y,P){G=BZ(G),g=kW(F,g),oU([],[e],function(AV){AV=AV[0];var sV=`${AV.name}.${G}`,tV={get(){dA(`Cannot access ${sV} due to unbound types`,[r,x])},enumerable:!0,configurable:!0};return y?tV.set=()=>{dA(`Cannot access ${sV} due to unbound types`,[r,x])}:tV.set=eV=>{vV(sV+" is a read-only property")},Object.defineProperty(AV.registeredClass.instancePrototype,G,tV),oU([],y?[r,x]:[r],function(eV){var hV=eV[0],JV={get(){var ml=oi(this,AV,sV+" getter");return hV.fromWireType(g(u,ml))},enumerable:!0};if(y){y=kW(M,y);var Wl=eV[1];JV.set=function(ml){var lV=oi(this,AV,sV+" setter"),oV=[];y(P,lV,Wl.toWireType(oV,ml)),pe(oV)}}return Object.defineProperty(AV.registeredClass.instancePrototype,G,JV),[]}),[]})}function Ud(){Object.assign(hi.prototype,{get(e){return W(this.allocated[e]!==void 0,`invalid handle: ${e}`),this.allocated[e]},has(e){return this.allocated[e]!==void 0},allocate(e){var G=this.freelist.pop()||this.allocated.length;return this.allocated[G]=e,G},free(e){W(this.allocated[e]!==void 0),this.allocated[e]=void 0,this.freelist.push(e)}})}function hi(){this.allocated=[void 0],this.freelist=[]}var uZ=new hi;function Xe(e){e>=uZ.reserved&&--uZ.get(e).refcount===0&&uZ.free(e)}function Ad(){for(var e=0,G=uZ.reserved;G<uZ.allocated.length;++G)uZ.allocated[G]!==void 0&&++e;return e}function td(){uZ.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),uZ.reserved=uZ.allocated.length,Z.count_emval_handles=Ad}var KZ={toValue:e=>(e||vV("Cannot use deleted val. handle = "+e),uZ.get(e).value),toHandle:e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return uZ.allocate({refcount:1,value:e})}}};function ed(e,G){G=BZ(G),FW(e,{name:G,fromWireType:function(r){var F=KZ.toValue(r);return Xe(r),F},toWireType:function(r,F){return KZ.toHandle(F)},argPackAdvance:8,readValueFromPointer:Bt,destructorFunction:null})}function MU(e){if(e===null)return"null";var G=typeof e;return G==="object"||G==="array"||G==="function"?e.toString():""+e}function md(e,G){switch(G){case 2:return function(r){return this.fromWireType(HV[r>>2])};case 3:return function(r){return this.fromWireType(yV[r>>3])};default:throw new TypeError("Unknown float type: "+e)}}function id(e,G,r){var F=Ie(r);G=BZ(G),FW(e,{name:G,fromWireType:function(g){return g},toWireType:function(g,u){if(typeof u!="number"&&typeof u!="boolean")throw new TypeError(`Cannot convert ${MU(u)} to ${this.name}`);return u},argPackAdvance:8,readValueFromPointer:md(G,F),destructorFunction:null})}function nd(e,G,r){switch(G){case 0:return r?function(g){return VV[g]}:function(g){return GV[g]};case 1:return r?function(g){return rV[g>>1]}:function(g){return FV[g>>1]};case 2:return r?function(g){return k[g>>2]}:function(g){return UV[g>>2]};default:throw new TypeError("Unknown integer type: "+e)}}function Gd(e,G,r,F,g){G=BZ(G),g===-1&&(g=4294967295);var u=Ie(r),x=sV=>sV;if(F===0){var M=32-8*r;x=sV=>sV<<M>>>M}var y=G.includes("unsigned"),P=(sV,tV)=>{if(typeof sV!="number"&&typeof sV!="boolean")throw new TypeError(`Cannot convert "${MU(sV)}" to ${tV}`);if(sV<F||sV>g)throw new TypeError(`Passing a number "${MU(sV)}" from JS side to C/C++ side to an argument of type "${G}", which is outside the valid range [${F}, ${g}]!`)},AV;y?AV=function(sV,tV){return P(tV,this.name),tV>>>0}:AV=function(sV,tV){return P(tV,this.name),tV},FW(e,{name:G,fromWireType:x,toWireType:AV,argPackAdvance:8,readValueFromPointer:nd(G,u,F!==0),destructorFunction:null})}function sd(e,G,r){var F=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],g=F[G];function u(x){x=x>>2;var M=UV,y=M[x],P=M[x+1];return new g(M.buffer,P,y)}r=BZ(r),FW(e,{name:r,fromWireType:u,argPackAdvance:8,readValueFromPointer:u},{ignoreDuplicateRegistrations:!0})}var fe=(e,G,r,F)=>{if(W(typeof e=="string"),!(F>0))return 0;for(var g=r,u=r+F-1,x=0;x<e.length;++x){var M=e.charCodeAt(x);if(M>=55296&&M<=57343){var y=e.charCodeAt(++x);M=65536+((M&1023)<<10)|y&1023}if(M<=127){if(r>=u)break;G[r++]=M}else if(M<=2047){if(r+1>=u)break;G[r++]=192|M>>6,G[r++]=128|M&63}else if(M<=65535){if(r+2>=u)break;G[r++]=224|M>>12,G[r++]=128|M>>6&63,G[r++]=128|M&63}else{if(r+3>=u)break;M>1114111&&SZ("Invalid Unicode code point "+GW(M)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),G[r++]=240|M>>18,G[r++]=128|M>>12&63,G[r++]=128|M>>6&63,G[r++]=128|M&63}}return G[r]=0,r-g},Qt=(e,G,r)=>(W(typeof r=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),fe(e,GV,G,r)),_U=e=>{for(var G=0,r=0;r<e.length;++r){var F=e.charCodeAt(r);F<=127?G++:F<=2047?G+=2:F>=55296&&F<=57343?(G+=4,++r):G+=3}return G};function ad(e,G){G=BZ(G);var r=G==="std::string";FW(e,{name:G,fromWireType:function(F){var g=UV[F>>2],u=F+4,x;if(r)for(var M=u,y=0;y<=g;++y){var P=u+y;if(y==g||GV[P]==0){var AV=P-M,sV=CZ(M,AV);x===void 0?x=sV:(x+=String.fromCharCode(0),x+=sV),M=P+1}}else{for(var tV=new Array(g),y=0;y<g;++y)tV[y]=String.fromCharCode(GV[u+y]);x=tV.join("")}return cW(F),x},toWireType:function(F,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var u,x=typeof g=="string";x||g instanceof Uint8Array||g instanceof Uint8ClampedArray||g instanceof Int8Array||vV("Cannot pass non-string to std::string"),r&&x?u=_U(g):u=g.length;var M=gt(4+u+1),y=M+4;if(UV[M>>2]=u,r&&x)Qt(g,y,u+1);else if(x)for(var P=0;P<u;++P){var AV=g.charCodeAt(P);AV>255&&(cW(y),vV("String has UTF-16 code units that do not fit in 8 bits")),GV[y+P]=AV}else for(var P=0;P<u;++P)GV[y+P]=g[P];return F!==null&&F.push(cW,M),M},argPackAdvance:8,readValueFromPointer:Bt,destructorFunction:function(F){cW(F)}})}var Ri=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,rd=(e,G)=>{W(e%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var r=e,F=r>>1,g=F+G/2;!(F>=g)&&FV[F];)++F;if(r=F<<1,r-e>32&&Ri)return Ri.decode(GV.subarray(e,r));for(var u="",x=0;!(x>=G/2);++x){var M=rV[e+x*2>>1];if(M==0)break;u+=String.fromCharCode(M)}return u},od=(e,G,r)=>{if(W(G%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),W(typeof r=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),r===void 0&&(r=2147483647),r<2)return 0;r-=2;for(var F=G,g=r<e.length*2?r/2:e.length,u=0;u<g;++u){var x=e.charCodeAt(u);rV[G>>1]=x,G+=2}return rV[G>>1]=0,G-F},hd=e=>e.length*2,Rd=(e,G)=>{W(e%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var r=0,F="";!(r>=G/4);){var g=k[e+r*4>>2];if(g==0)break;if(++r,g>=65536){var u=g-65536;F+=String.fromCharCode(55296|u>>10,56320|u&1023)}else F+=String.fromCharCode(g)}return F},dd=(e,G,r)=>{if(W(G%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),W(typeof r=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),r===void 0&&(r=2147483647),r<4)return 0;for(var F=G,g=F+r-4,u=0;u<e.length;++u){var x=e.charCodeAt(u);if(x>=55296&&x<=57343){var M=e.charCodeAt(++u);x=65536+((x&1023)<<10)|M&1023}if(k[G>>2]=x,G+=4,G+4>g)break}return k[G>>2]=0,G-F},Td=e=>{for(var G=0,r=0;r<e.length;++r){var F=e.charCodeAt(r);F>=55296&&F<=57343&&++r,G+=4}return G},Bd=function(e,G,r){r=BZ(r);var F,g,u,x,M;G===2?(F=rd,g=od,x=hd,u=()=>FV,M=1):G===4&&(F=Rd,g=dd,x=Td,u=()=>UV,M=2),FW(e,{name:r,fromWireType:function(y){for(var P=UV[y>>2],AV=u(),sV,tV=y+4,eV=0;eV<=P;++eV){var hV=y+4+eV*G;if(eV==P||AV[hV>>M]==0){var JV=hV-tV,Wl=F(tV,JV);sV===void 0?sV=Wl:(sV+=String.fromCharCode(0),sV+=Wl),tV=hV+G}}return cW(y),sV},toWireType:function(y,P){typeof P!="string"&&vV(`Cannot pass non-string to C++ string type ${r}`);var AV=x(P),sV=gt(4+AV+G);return UV[sV>>2]=AV>>M,g(P,sV+4,AV+G),y!==null&&y.push(cW,sV),sV},argPackAdvance:8,readValueFromPointer:Bt,destructorFunction:function(y){cW(y)}})};function Fd(e,G){G=BZ(G),FW(e,{isVoid:!0,name:G,argPackAdvance:0,fromWireType:function(){},toWireType:function(r,F){}})}var Qd=!0,Id=()=>Qd;function di(e,G){var r=rU[e];return r===void 0&&vV(G+" has unknown type "+si(e)),r}function cd(e,G,r){e=KZ.toValue(e),G=di(G,"emval::as");var F=[],g=KZ.toHandle(F);return UV[r>>2]=g,G.toWireType(F,e)}function Sd(e,G){return e=KZ.toValue(e),G=KZ.toValue(G),KZ.toHandle(e[G])}function Cd(e){e>4&&(uZ.get(e).refcount+=1)}var gd={};function Nd(e){var G=gd[e];return G===void 0?BZ(e):G}function Ed(e){return KZ.toHandle(Nd(e))}function pd(e){var G=KZ.toValue(e);pe(G),Xe(e)}function Xd(e,G){e=di(e,"_emval_take_value");var r=e.readValueFromPointer(G);return KZ.toHandle(r)}function Ti(e,G){return W(e==e>>>0||e==(e|0)),W(G===(G|0)),G+2097152>>>0<4194305-!!e?(e>>>0)+G*4294967296:NaN}function fd(e,G,r){var F=Ti(e,G),g=new Date(F*1e3);k[r>>2]=g.getUTCSeconds(),k[r+4>>2]=g.getUTCMinutes(),k[r+8>>2]=g.getUTCHours(),k[r+12>>2]=g.getUTCDate(),k[r+16>>2]=g.getUTCMonth(),k[r+20>>2]=g.getUTCFullYear()-1900,k[r+24>>2]=g.getUTCDay();var u=Date.UTC(g.getUTCFullYear(),0,1,0,0,0,0),x=(g.getTime()-u)/(1e3*60*60*24)|0;k[r+28>>2]=x}var TA=e=>e%4===0&&(e%100!==0||e%400===0),bd=[0,31,60,91,121,152,182,213,244,274,305,335],ud=[0,31,59,90,120,151,181,212,243,273,304,334],Jd=e=>{var G=TA(e.getFullYear()),r=G?bd:ud,F=r[e.getMonth()]+e.getDate()-1;return F},xd=function(e){var G=(()=>{var r=new Date(k[e+20>>2]+1900,k[e+16>>2],k[e+12>>2],k[e+8>>2],k[e+4>>2],k[e>>2],0),F=k[e+32>>2],g=r.getTimezoneOffset(),u=new Date(r.getFullYear(),0,1),x=new Date(r.getFullYear(),6,1).getTimezoneOffset(),M=u.getTimezoneOffset(),y=Math.min(M,x);if(F<0)k[e+32>>2]=+(x!=M&&y==g);else if(F>0!=(y==g)){var P=Math.max(M,x),AV=F>0?y:P;r.setTime(r.getTime()+(AV-g)*6e4)}k[e+24>>2]=r.getDay();var sV=Jd(r)|0;return k[e+28>>2]=sV,k[e>>2]=r.getSeconds(),k[e+4>>2]=r.getMinutes(),k[e+8>>2]=r.getHours(),k[e+12>>2]=r.getDate(),k[e+16>>2]=r.getMonth(),k[e+20>>2]=r.getYear(),r.getTime()/1e3})();return IT((pV=G,+Math.abs(pV)>=1?pV>0?+Math.floor(pV/4294967296)>>>0:~~+Math.ceil((pV-+(~~pV>>>0))/4294967296)>>>0:0)),G>>>0},Bi=e=>{var G=_U(e)+1,r=gt(G);return r&&Qt(e,r,G),r},Dd=(e,G,r)=>{var F=new Date().getFullYear(),g=new Date(F,0,1),u=new Date(F,6,1),x=g.getTimezoneOffset(),M=u.getTimezoneOffset(),y=Math.max(x,M);UV[e>>2]=y*60,k[G>>2]=+(x!=M);function P(hV){var JV=hV.toTimeString().match(/\(([A-Za-z ]+)\)$/);return JV?JV[1]:"GMT"}var AV=P(g),sV=P(u),tV=Bi(AV),eV=Bi(sV);M<x?(UV[r>>2]=tV,UV[r+4>>2]=eV):(UV[r>>2]=eV,UV[r+4>>2]=tV)},Md=()=>{L("native code called abort()")},It=[],_d=(e,G)=>{W(Array.isArray(It)),W(G%16==0),It.length=0;var r;for(G>>=2;r=GV[e++];){var F=String.fromCharCode(r),g=["d","f","i"];W(g.includes(F),`Invalid character ${r}("${F}") in readEmAsmArgs! Use only [${g}], and do not specify "v" for void return argument.`),G+=r!=105&G,It.push(r==105?k[G]:yV[G++>>1]),++G}return It},Od=(e,G,r)=>{var F=_d(G,r);return uU.hasOwnProperty(e)||L(`No EM_ASM constant found at address ${e}`),uU[e].apply(null,F)},wd=(e,G,r)=>Od(e,G,r);function Yd(){return Date.now()}var Fi;Fi=()=>performance.now();var yd=(e,G,r)=>GV.copyWithin(e,G,G+r),vd=()=>2147483648,zd=e=>{var G=ZV.buffer,r=e-G.byteLength+65535>>>16;try{return ZV.grow(r),xV(),1}catch(F){_(`growMemory: Attempted to grow heap from ${G.byteLength} bytes to ${e} bytes, but got error: ${F}`)}},kd=e=>{var G=GV.length;e>>>=0,W(e>G);var r=vd();if(e>r)return _(`Cannot enlarge memory, asked to go up to ${e} bytes, but the limit is ${r} bytes!`),!1;for(var F=(y,P)=>y+(P-y%P)%P,g=1;g<=4;g*=2){var u=G*(1+.2/g);u=Math.min(u,e+100663296);var x=Math.min(r,F(Math.max(e,u),65536)),M=zd(x);if(M)return!0}return _(`Failed to grow the heap from ${G} bytes to ${x} bytes, not enough memory!`),!1},Qi=e=>{var G=(globalThis.eval["\u2003"]=globalThis.eval)(CZ(e));if(G==null)return 0;G+="";var r=Qi,F=_U(G);return(!r.bufferSize||r.bufferSize<F+1)&&(r.bufferSize&&cW(r.buffer),r.bufferSize=F+1,r.buffer=gt(r.bufferSize)),Qt(G,r.buffer,r.bufferSize),r.buffer},be={},Hd=()=>i||"./this.program",BA=()=>{if(!BA.strings){var e=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",G={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:e,_:Hd()};for(var r in be)be[r]===void 0?delete G[r]:G[r]=be[r];var F=[];for(var r in G)F.push(`${r}=${G[r]}`);BA.strings=F}return BA.strings},Ld=(e,G)=>{for(var r=0;r<e.length;++r)W(e.charCodeAt(r)===(e.charCodeAt(r)&255)),VV[G++>>0]=e.charCodeAt(r);VV[G>>0]=0},Zl={isAbs:e=>e.charAt(0)==="/",splitPath:e=>{var G=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return G.exec(e).slice(1)},normalizeArray:(e,G)=>{for(var r=0,F=e.length-1;F>=0;F--){var g=e[F];g==="."?e.splice(F,1):g===".."?(e.splice(F,1),r++):r&&(e.splice(F,1),r--)}if(G)for(;r;r--)e.unshift("..");return e},normalize:e=>{var G=Zl.isAbs(e),r=e.substr(-1)==="/";return e=Zl.normalizeArray(e.split("/").filter(F=>!!F),!G).join("/"),!e&&!G&&(e="."),e&&r&&(e+="/"),(G?"/":"")+e},dirname:e=>{var G=Zl.splitPath(e),r=G[0],F=G[1];return!r&&!F?".":(F&&(F=F.substr(0,F.length-1)),r+F)},basename:e=>{if(e==="/")return"/";e=Zl.normalize(e),e=e.replace(/\/$/,"");var G=e.lastIndexOf("/");return G===-1?e:e.substr(G+1)},join:function(){var e=Array.prototype.slice.call(arguments);return Zl.normalize(e.join("/"))},join2:(e,G)=>Zl.normalize(e+"/"+G)},Kd=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return e=>crypto.getRandomValues(e);L("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };")},Ii=e=>(Ii=Kd())(e),IW={resolve:function(){for(var e="",G=!1,r=arguments.length-1;r>=-1&&!G;r--){var F=r>=0?arguments[r]:C.cwd();if(typeof F!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!F)return"";e=F+"/"+e,G=Zl.isAbs(F)}return e=Zl.normalizeArray(e.split("/").filter(g=>!!g),!G).join("/"),(G?"/":"")+e||"."},relative:(e,G)=>{e=IW.resolve(e).substr(1),G=IW.resolve(G).substr(1);function r(P){for(var AV=0;AV<P.length&&P[AV]==="";AV++);for(var sV=P.length-1;sV>=0&&P[sV]==="";sV--);return AV>sV?[]:P.slice(AV,sV-AV+1)}for(var F=r(e.split("/")),g=r(G.split("/")),u=Math.min(F.length,g.length),x=u,M=0;M<u;M++)if(F[M]!==g[M]){x=M;break}for(var y=[],M=x;M<F.length;M++)y.push("..");return y=y.concat(g.slice(x)),y.join("/")}},ue=[];function ct(e,G,r){var F=r>0?r:_U(e)+1,g=new Array(F),u=fe(e,g,0,g.length);return G&&(g.length=u),g}var Pd=()=>{if(!ue.length){var e=null;if(typeof window<"u"&&typeof window.prompt=="function"?(e=window.prompt("Input: "),e!==null&&(e+=`
`)):typeof readline=="function"&&(e=readline(),e!==null&&(e+=`
`)),!e)return null;ue=ct(e,!0)}return ue.shift()},HW={ttys:[],init:function(){},shutdown:function(){},register:function(e,G){HW.ttys[e]={input:[],output:[],ops:G},C.registerDevice(e,HW.stream_ops)},stream_ops:{open:function(e){var G=HW.ttys[e.node.rdev];if(!G)throw new C.ErrnoError(43);e.tty=G,e.seekable=!1},close:function(e){e.tty.ops.fsync(e.tty)},fsync:function(e){e.tty.ops.fsync(e.tty)},read:function(e,G,r,F,g){if(!e.tty||!e.tty.ops.get_char)throw new C.ErrnoError(60);for(var u=0,x=0;x<F;x++){var M;try{M=e.tty.ops.get_char(e.tty)}catch{throw new C.ErrnoError(29)}if(M===void 0&&u===0)throw new C.ErrnoError(6);if(M==null)break;u++,G[r+x]=M}return u&&(e.node.timestamp=Date.now()),u},write:function(e,G,r,F,g){if(!e.tty||!e.tty.ops.put_char)throw new C.ErrnoError(60);try{for(var u=0;u<F;u++)e.tty.ops.put_char(e.tty,G[r+u])}catch{throw new C.ErrnoError(29)}return F&&(e.node.timestamp=Date.now()),u}},default_tty_ops:{get_char:function(e){return Pd()},put_char:function(e,G){G===null||G===10?(D(sW(e.output,0)),e.output=[]):G!=0&&e.output.push(G)},fsync:function(e){e.output&&e.output.length>0&&(D(sW(e.output,0)),e.output=[])},ioctl_tcgets:function(e){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets:function(e,G,r){return 0},ioctl_tiocgwinsz:function(e){return[24,80]}},default_tty1_ops:{put_char:function(e,G){G===null||G===10?(_(sW(e.output,0)),e.output=[]):G!=0&&e.output.push(G)},fsync:function(e){e.output&&e.output.length>0&&(_(sW(e.output,0)),e.output=[])}}},ci=e=>{L("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},uV={ops_table:null,mount(e){return uV.createNode(null,"/",16895,0)},createNode(e,G,r,F){if(C.isBlkdev(r)||C.isFIFO(r))throw new C.ErrnoError(63);uV.ops_table||(uV.ops_table={dir:{node:{getattr:uV.node_ops.getattr,setattr:uV.node_ops.setattr,lookup:uV.node_ops.lookup,mknod:uV.node_ops.mknod,rename:uV.node_ops.rename,unlink:uV.node_ops.unlink,rmdir:uV.node_ops.rmdir,readdir:uV.node_ops.readdir,symlink:uV.node_ops.symlink},stream:{llseek:uV.stream_ops.llseek}},file:{node:{getattr:uV.node_ops.getattr,setattr:uV.node_ops.setattr},stream:{llseek:uV.stream_ops.llseek,read:uV.stream_ops.read,write:uV.stream_ops.write,allocate:uV.stream_ops.allocate,mmap:uV.stream_ops.mmap,msync:uV.stream_ops.msync}},link:{node:{getattr:uV.node_ops.getattr,setattr:uV.node_ops.setattr,readlink:uV.node_ops.readlink},stream:{}},chrdev:{node:{getattr:uV.node_ops.getattr,setattr:uV.node_ops.setattr},stream:C.chrdev_stream_ops}});var g=C.createNode(e,G,r,F);return C.isDir(g.mode)?(g.node_ops=uV.ops_table.dir.node,g.stream_ops=uV.ops_table.dir.stream,g.contents={}):C.isFile(g.mode)?(g.node_ops=uV.ops_table.file.node,g.stream_ops=uV.ops_table.file.stream,g.usedBytes=0,g.contents=null):C.isLink(g.mode)?(g.node_ops=uV.ops_table.link.node,g.stream_ops=uV.ops_table.link.stream):C.isChrdev(g.mode)&&(g.node_ops=uV.ops_table.chrdev.node,g.stream_ops=uV.ops_table.chrdev.stream),g.timestamp=Date.now(),e&&(e.contents[G]=g,e.timestamp=g.timestamp),g},getFileDataAsTypedArray(e){return e.contents?e.contents.subarray?e.contents.subarray(0,e.usedBytes):new Uint8Array(e.contents):new Uint8Array(0)},expandFileStorage(e,G){var r=e.contents?e.contents.length:0;if(!(r>=G)){var F=1024*1024;G=Math.max(G,r*(r<F?2:1.125)>>>0),r!=0&&(G=Math.max(G,256));var g=e.contents;e.contents=new Uint8Array(G),e.usedBytes>0&&e.contents.set(g.subarray(0,e.usedBytes),0)}},resizeFileStorage(e,G){if(e.usedBytes!=G)if(G==0)e.contents=null,e.usedBytes=0;else{var r=e.contents;e.contents=new Uint8Array(G),r&&e.contents.set(r.subarray(0,Math.min(G,e.usedBytes))),e.usedBytes=G}},node_ops:{getattr(e){var G={};return G.dev=C.isChrdev(e.mode)?e.id:1,G.ino=e.id,G.mode=e.mode,G.nlink=1,G.uid=0,G.gid=0,G.rdev=e.rdev,C.isDir(e.mode)?G.size=4096:C.isFile(e.mode)?G.size=e.usedBytes:C.isLink(e.mode)?G.size=e.link.length:G.size=0,G.atime=new Date(e.timestamp),G.mtime=new Date(e.timestamp),G.ctime=new Date(e.timestamp),G.blksize=4096,G.blocks=Math.ceil(G.size/G.blksize),G},setattr(e,G){G.mode!==void 0&&(e.mode=G.mode),G.timestamp!==void 0&&(e.timestamp=G.timestamp),G.size!==void 0&&uV.resizeFileStorage(e,G.size)},lookup(e,G){throw C.genericErrors[44]},mknod(e,G,r,F){return uV.createNode(e,G,r,F)},rename(e,G,r){if(C.isDir(e.mode)){var F;try{F=C.lookupNode(G,r)}catch{}if(F)for(var g in F.contents)throw new C.ErrnoError(55)}delete e.parent.contents[e.name],e.parent.timestamp=Date.now(),e.name=r,G.contents[r]=e,G.timestamp=e.parent.timestamp,e.parent=G},unlink(e,G){delete e.contents[G],e.timestamp=Date.now()},rmdir(e,G){var r=C.lookupNode(e,G);for(var F in r.contents)throw new C.ErrnoError(55);delete e.contents[G],e.timestamp=Date.now()},readdir(e){var G=[".",".."];for(var r in e.contents)e.contents.hasOwnProperty(r)&&G.push(r);return G},symlink(e,G,r){var F=uV.createNode(e,G,41471,0);return F.link=r,F},readlink(e){if(!C.isLink(e.mode))throw new C.ErrnoError(28);return e.link}},stream_ops:{read(e,G,r,F,g){var u=e.node.contents;if(g>=e.node.usedBytes)return 0;var x=Math.min(e.node.usedBytes-g,F);if(W(x>=0),x>8&&u.subarray)G.set(u.subarray(g,g+x),r);else for(var M=0;M<x;M++)G[r+M]=u[g+M];return x},write(e,G,r,F,g,u){if(W(!(G instanceof ArrayBuffer)),G.buffer===VV.buffer&&(u=!1),!F)return 0;var x=e.node;if(x.timestamp=Date.now(),G.subarray&&(!x.contents||x.contents.subarray)){if(u)return W(g===0,"canOwn must imply no weird position inside the file"),x.contents=G.subarray(r,r+F),x.usedBytes=F,F;if(x.usedBytes===0&&g===0)return x.contents=G.slice(r,r+F),x.usedBytes=F,F;if(g+F<=x.usedBytes)return x.contents.set(G.subarray(r,r+F),g),F}if(uV.expandFileStorage(x,g+F),x.contents.subarray&&G.subarray)x.contents.set(G.subarray(r,r+F),g);else for(var M=0;M<F;M++)x.contents[g+M]=G[r+M];return x.usedBytes=Math.max(x.usedBytes,g+F),F},llseek(e,G,r){var F=G;if(r===1?F+=e.position:r===2&&C.isFile(e.node.mode)&&(F+=e.node.usedBytes),F<0)throw new C.ErrnoError(28);return F},allocate(e,G,r){uV.expandFileStorage(e.node,G+r),e.node.usedBytes=Math.max(e.node.usedBytes,G+r)},mmap(e,G,r,F,g){if(!C.isFile(e.node.mode))throw new C.ErrnoError(43);var u,x,M=e.node.contents;if(!(g&2)&&M.buffer===VV.buffer)x=!1,u=M.byteOffset;else{if((r>0||r+G<M.length)&&(M.subarray?M=M.subarray(r,r+G):M=Array.prototype.slice.call(M,r,r+G)),x=!0,u=ci(G),!u)throw new C.ErrnoError(48);VV.set(M,u)}return{ptr:u,allocated:x}},msync(e,G,r,F,g){return uV.stream_ops.write(e,G,0,F,r,!1),0}}},jd=(e,G,r,F)=>{var g=F?"":f(`al ${e}`);p(e,u=>{W(u,`Loading data file "${e}" failed (no arrayBuffer).`),G(new Uint8Array(u)),g&&$(g)},u=>{if(r)r();else throw`Loading data file "${e}" failed.`}),g&&O(g)},qd=Z.preloadPlugins||[];function $d(e,G,r,F){typeof Browser<"u"&&Browser.init();var g=!1;return qd.forEach(function(u){g||u.canHandle(G)&&(u.handle(e,G,r,F),g=!0)}),g}function VT(e,G,r,F,g,u,x,M,y,P){var AV=G?IW.resolve(Zl.join2(e,G)):e,sV=f(`cp ${AV}`);function tV(eV){function hV(JV){P&&P(),M||C.createDataFile(e,G,JV,F,g,y),u&&u(),$(sV)}$d(eV,AV,hV,()=>{x&&x(),$(sV)})||hV(eV)}O(sV),typeof r=="string"?jd(r,eV=>tV(eV),x):tV(r)}function lT(e){var G={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},r=G[e];if(typeof r>"u")throw new Error(`Unknown file open mode: ${e}`);return r}function Je(e,G){var r=0;return e&&(r|=365),G&&(r|=146),r}var ZT={0:"Success",1:"Arg list too long",2:"Permission denied",3:"Address already in use",4:"Address not available",5:"Address family not supported by protocol family",6:"No more processes",7:"Socket already connected",8:"Bad file number",9:"Trying to read unreadable message",10:"Mount device busy",11:"Operation canceled",12:"No children",13:"Connection aborted",14:"Connection refused",15:"Connection reset by peer",16:"File locking deadlock error",17:"Destination address required",18:"Math arg out of domain of func",19:"Quota exceeded",20:"File exists",21:"Bad address",22:"File too large",23:"Host is unreachable",24:"Identifier removed",25:"Illegal byte sequence",26:"Connection already in progress",27:"Interrupted system call",28:"Invalid argument",29:"I/O error",30:"Socket is already connected",31:"Is a directory",32:"Too many symbolic links",33:"Too many open files",34:"Too many links",35:"Message too long",36:"Multihop attempted",37:"File or path name too long",38:"Network interface is not configured",39:"Connection reset by network",40:"Network is unreachable",41:"Too many open files in system",42:"No buffer space available",43:"No such device",44:"No such file or directory",45:"Exec format error",46:"No record locks available",47:"The link has been severed",48:"Not enough core",49:"No message of desired type",50:"Protocol not available",51:"No space left on device",52:"Function not implemented",53:"Socket is not connected",54:"Not a directory",55:"Directory not empty",56:"State not recoverable",57:"Socket operation on non-socket",59:"Not a typewriter",60:"No such device or address",61:"Value too large for defined data type",62:"Previous owner died",63:"Not super-user",64:"Broken pipe",65:"Protocol error",66:"Unknown protocol",67:"Protocol wrong type for socket",68:"Math result not representable",69:"Read only file system",70:"Illegal seek",71:"No such process",72:"Stale file handle",73:"Connection timed out",74:"Text file busy",75:"Cross-device link",100:"Device not a stream",101:"Bad font file fmt",102:"Invalid slot",103:"Invalid request code",104:"No anode",105:"Block device required",106:"Channel number out of range",107:"Level 3 halted",108:"Level 3 reset",109:"Link number out of range",110:"Protocol driver not attached",111:"No CSI structure available",112:"Level 2 halted",113:"Invalid exchange",114:"Invalid request descriptor",115:"Exchange full",116:"No data (for no delay io)",117:"Timer expired",118:"Out of streams resources",119:"Machine is not on the network",120:"Package not installed",121:"The object is remote",122:"Advertise error",123:"Srmount error",124:"Communication error on send",125:"Cross mount point (not really error)",126:"Given log. name not unique",127:"f.d. invalid for this operation",128:"Remote address changed",129:"Can   access a needed shared lib",130:"Accessing a corrupted shared lib",131:".lib section in a.out corrupted",132:"Attempting to link in too many libs",133:"Attempting to exec a shared library",135:"Streams pipe error",136:"Too many users",137:"Socket type not supported",138:"Not supported",139:"Protocol family not supported",140:"Can't send after socket shutdown",141:"Too many references",142:"Host is down",148:"No medium (in tape drive)",156:"Level 2 not synchronized"},xe={};function WT(e){return SZ("warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling"),e}function UT(e){var G=/\b_Z[\w\d_]+/g;return e.replace(G,function(r){var F=WT(r);return r===F?r:F+" ["+r+"]"})}var C={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:(e,G={})=>{if(e=IW.resolve(e),!e)return{path:"",node:null};var r={follow_mount:!0,recurse_count:0};if(G=Object.assign(r,G),G.recurse_count>8)throw new C.ErrnoError(32);for(var F=e.split("/").filter(sV=>!!sV),g=C.root,u="/",x=0;x<F.length;x++){var M=x===F.length-1;if(M&&G.parent)break;if(g=C.lookupNode(g,F[x]),u=Zl.join2(u,F[x]),C.isMountpoint(g)&&(!M||M&&G.follow_mount)&&(g=g.mounted.root),!M||G.follow)for(var y=0;C.isLink(g.mode);){var P=C.readlink(u);u=IW.resolve(Zl.dirname(u),P);var AV=C.lookupPath(u,{recurse_count:G.recurse_count+1});if(g=AV.node,y++>40)throw new C.ErrnoError(32)}}return{path:u,node:g}},getPath:e=>{for(var G;;){if(C.isRoot(e)){var r=e.mount.mountpoint;return G?r[r.length-1]!=="/"?`${r}/${G}`:r+G:r}G=G?`${e.name}/${G}`:e.name,e=e.parent}},hashName:(e,G)=>{for(var r=0,F=0;F<G.length;F++)r=(r<<5)-r+G.charCodeAt(F)|0;return(e+r>>>0)%C.nameTable.length},hashAddNode:e=>{var G=C.hashName(e.parent.id,e.name);e.name_next=C.nameTable[G],C.nameTable[G]=e},hashRemoveNode:e=>{var G=C.hashName(e.parent.id,e.name);if(C.nameTable[G]===e)C.nameTable[G]=e.name_next;else for(var r=C.nameTable[G];r;){if(r.name_next===e){r.name_next=e.name_next;break}r=r.name_next}},lookupNode:(e,G)=>{var r=C.mayLookup(e);if(r)throw new C.ErrnoError(r,e);for(var F=C.hashName(e.id,G),g=C.nameTable[F];g;g=g.name_next){var u=g.name;if(g.parent.id===e.id&&u===G)return g}return C.lookup(e,G)},createNode:(e,G,r,F)=>{W(typeof e=="object");var g=new C.FSNode(e,G,r,F);return C.hashAddNode(g),g},destroyNode:e=>{C.hashRemoveNode(e)},isRoot:e=>e===e.parent,isMountpoint:e=>!!e.mounted,isFile:e=>(e&61440)===32768,isDir:e=>(e&61440)===16384,isLink:e=>(e&61440)===40960,isChrdev:e=>(e&61440)===8192,isBlkdev:e=>(e&61440)===24576,isFIFO:e=>(e&61440)===4096,isSocket:e=>(e&49152)===49152,flagsToPermissionString:e=>{var G=["r","w","rw"][e&3];return e&512&&(G+="w"),G},nodePermissions:(e,G)=>C.ignorePermissions?0:G.includes("r")&&!(e.mode&292)||G.includes("w")&&!(e.mode&146)||G.includes("x")&&!(e.mode&73)?2:0,mayLookup:e=>{var G=C.nodePermissions(e,"x");return G||(e.node_ops.lookup?0:2)},mayCreate:(e,G)=>{try{var r=C.lookupNode(e,G);return 20}catch{}return C.nodePermissions(e,"wx")},mayDelete:(e,G,r)=>{var F;try{F=C.lookupNode(e,G)}catch(u){return u.errno}var g=C.nodePermissions(e,"wx");if(g)return g;if(r){if(!C.isDir(F.mode))return 54;if(C.isRoot(F)||C.getPath(F)===C.cwd())return 10}else if(C.isDir(F.mode))return 31;return 0},mayOpen:(e,G)=>e?C.isLink(e.mode)?32:C.isDir(e.mode)&&(C.flagsToPermissionString(G)!=="r"||G&512)?31:C.nodePermissions(e,C.flagsToPermissionString(G)):44,MAX_OPEN_FDS:4096,nextfd:()=>{for(var e=0;e<=C.MAX_OPEN_FDS;e++)if(!C.streams[e])return e;throw new C.ErrnoError(33)},getStreamChecked:e=>{var G=C.getStream(e);if(!G)throw new C.ErrnoError(8);return G},getStream:e=>C.streams[e],createStream:(e,G=-1)=>(C.FSStream||(C.FSStream=function(){this.shared={}},C.FSStream.prototype={},Object.defineProperties(C.FSStream.prototype,{object:{get(){return this.node},set(r){this.node=r}},isRead:{get(){return(this.flags&2097155)!==1}},isWrite:{get(){return(this.flags&2097155)!==0}},isAppend:{get(){return this.flags&1024}},flags:{get(){return this.shared.flags},set(r){this.shared.flags=r}},position:{get(){return this.shared.position},set(r){this.shared.position=r}}})),e=Object.assign(new C.FSStream,e),G==-1&&(G=C.nextfd()),e.fd=G,C.streams[G]=e,e),closeStream:e=>{C.streams[e]=null},chrdev_stream_ops:{open:e=>{var G=C.getDevice(e.node.rdev);e.stream_ops=G.stream_ops,e.stream_ops.open&&e.stream_ops.open(e)},llseek:()=>{throw new C.ErrnoError(70)}},major:e=>e>>8,minor:e=>e&255,makedev:(e,G)=>e<<8|G,registerDevice:(e,G)=>{C.devices[e]={stream_ops:G}},getDevice:e=>C.devices[e],getMounts:e=>{for(var G=[],r=[e];r.length;){var F=r.pop();G.push(F),r.push.apply(r,F.mounts)}return G},syncfs:(e,G)=>{typeof e=="function"&&(G=e,e=!1),C.syncFSRequests++,C.syncFSRequests>1&&_(`warning: ${C.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var r=C.getMounts(C.root.mount),F=0;function g(x){return W(C.syncFSRequests>0),C.syncFSRequests--,G(x)}function u(x){if(x)return u.errored?void 0:(u.errored=!0,g(x));++F>=r.length&&g(null)}r.forEach(x=>{if(!x.type.syncfs)return u(null);x.type.syncfs(x,e,u)})},mount:(e,G,r)=>{if(typeof e=="string")throw e;var F=r==="/",g=!r,u;if(F&&C.root)throw new C.ErrnoError(10);if(!F&&!g){var x=C.lookupPath(r,{follow_mount:!1});if(r=x.path,u=x.node,C.isMountpoint(u))throw new C.ErrnoError(10);if(!C.isDir(u.mode))throw new C.ErrnoError(54)}var M={type:e,opts:G,mountpoint:r,mounts:[]},y=e.mount(M);return y.mount=M,M.root=y,F?C.root=y:u&&(u.mounted=M,u.mount&&u.mount.mounts.push(M)),y},unmount:e=>{var G=C.lookupPath(e,{follow_mount:!1});if(!C.isMountpoint(G.node))throw new C.ErrnoError(28);var r=G.node,F=r.mounted,g=C.getMounts(F);Object.keys(C.nameTable).forEach(x=>{for(var M=C.nameTable[x];M;){var y=M.name_next;g.includes(M.mount)&&C.destroyNode(M),M=y}}),r.mounted=null;var u=r.mount.mounts.indexOf(F);W(u!==-1),r.mount.mounts.splice(u,1)},lookup:(e,G)=>e.node_ops.lookup(e,G),mknod:(e,G,r)=>{var F=C.lookupPath(e,{parent:!0}),g=F.node,u=Zl.basename(e);if(!u||u==="."||u==="..")throw new C.ErrnoError(28);var x=C.mayCreate(g,u);if(x)throw new C.ErrnoError(x);if(!g.node_ops.mknod)throw new C.ErrnoError(63);return g.node_ops.mknod(g,u,G,r)},create:(e,G)=>(G=G!==void 0?G:438,G&=4095,G|=32768,C.mknod(e,G,0)),mkdir:(e,G)=>(G=G!==void 0?G:511,G&=1023,G|=16384,C.mknod(e,G,0)),mkdirTree:(e,G)=>{for(var r=e.split("/"),F="",g=0;g<r.length;++g)if(r[g]){F+="/"+r[g];try{C.mkdir(F,G)}catch(u){if(u.errno!=20)throw u}}},mkdev:(e,G,r)=>(typeof r>"u"&&(r=G,G=438),G|=8192,C.mknod(e,G,r)),symlink:(e,G)=>{if(!IW.resolve(e))throw new C.ErrnoError(44);var r=C.lookupPath(G,{parent:!0}),F=r.node;if(!F)throw new C.ErrnoError(44);var g=Zl.basename(G),u=C.mayCreate(F,g);if(u)throw new C.ErrnoError(u);if(!F.node_ops.symlink)throw new C.ErrnoError(63);return F.node_ops.symlink(F,g,e)},rename:(e,G)=>{var r=Zl.dirname(e),F=Zl.dirname(G),g=Zl.basename(e),u=Zl.basename(G),x,M,y;if(x=C.lookupPath(e,{parent:!0}),M=x.node,x=C.lookupPath(G,{parent:!0}),y=x.node,!M||!y)throw new C.ErrnoError(44);if(M.mount!==y.mount)throw new C.ErrnoError(75);var P=C.lookupNode(M,g),AV=IW.relative(e,F);if(AV.charAt(0)!==".")throw new C.ErrnoError(28);if(AV=IW.relative(G,r),AV.charAt(0)!==".")throw new C.ErrnoError(55);var sV;try{sV=C.lookupNode(y,u)}catch{}if(P!==sV){var tV=C.isDir(P.mode),eV=C.mayDelete(M,g,tV);if(eV)throw new C.ErrnoError(eV);if(eV=sV?C.mayDelete(y,u,tV):C.mayCreate(y,u),eV)throw new C.ErrnoError(eV);if(!M.node_ops.rename)throw new C.ErrnoError(63);if(C.isMountpoint(P)||sV&&C.isMountpoint(sV))throw new C.ErrnoError(10);if(y!==M&&(eV=C.nodePermissions(M,"w"),eV))throw new C.ErrnoError(eV);C.hashRemoveNode(P);try{M.node_ops.rename(P,y,u)}catch(hV){throw hV}finally{C.hashAddNode(P)}}},rmdir:e=>{var G=C.lookupPath(e,{parent:!0}),r=G.node,F=Zl.basename(e),g=C.lookupNode(r,F),u=C.mayDelete(r,F,!0);if(u)throw new C.ErrnoError(u);if(!r.node_ops.rmdir)throw new C.ErrnoError(63);if(C.isMountpoint(g))throw new C.ErrnoError(10);r.node_ops.rmdir(r,F),C.destroyNode(g)},readdir:e=>{var G=C.lookupPath(e,{follow:!0}),r=G.node;if(!r.node_ops.readdir)throw new C.ErrnoError(54);return r.node_ops.readdir(r)},unlink:e=>{var G=C.lookupPath(e,{parent:!0}),r=G.node;if(!r)throw new C.ErrnoError(44);var F=Zl.basename(e),g=C.lookupNode(r,F),u=C.mayDelete(r,F,!1);if(u)throw new C.ErrnoError(u);if(!r.node_ops.unlink)throw new C.ErrnoError(63);if(C.isMountpoint(g))throw new C.ErrnoError(10);r.node_ops.unlink(r,F),C.destroyNode(g)},readlink:e=>{var G=C.lookupPath(e),r=G.node;if(!r)throw new C.ErrnoError(44);if(!r.node_ops.readlink)throw new C.ErrnoError(28);return IW.resolve(C.getPath(r.parent),r.node_ops.readlink(r))},stat:(e,G)=>{var r=C.lookupPath(e,{follow:!G}),F=r.node;if(!F)throw new C.ErrnoError(44);if(!F.node_ops.getattr)throw new C.ErrnoError(63);return F.node_ops.getattr(F)},lstat:e=>C.stat(e,!0),chmod:(e,G,r)=>{var F;if(typeof e=="string"){var g=C.lookupPath(e,{follow:!r});F=g.node}else F=e;if(!F.node_ops.setattr)throw new C.ErrnoError(63);F.node_ops.setattr(F,{mode:G&4095|F.mode&-4096,timestamp:Date.now()})},lchmod:(e,G)=>{C.chmod(e,G,!0)},fchmod:(e,G)=>{var r=C.getStreamChecked(e);C.chmod(r.node,G)},chown:(e,G,r,F)=>{var g;if(typeof e=="string"){var u=C.lookupPath(e,{follow:!F});g=u.node}else g=e;if(!g.node_ops.setattr)throw new C.ErrnoError(63);g.node_ops.setattr(g,{timestamp:Date.now()})},lchown:(e,G,r)=>{C.chown(e,G,r,!0)},fchown:(e,G,r)=>{var F=C.getStreamChecked(e);C.chown(F.node,G,r)},truncate:(e,G)=>{if(G<0)throw new C.ErrnoError(28);var r;if(typeof e=="string"){var F=C.lookupPath(e,{follow:!0});r=F.node}else r=e;if(!r.node_ops.setattr)throw new C.ErrnoError(63);if(C.isDir(r.mode))throw new C.ErrnoError(31);if(!C.isFile(r.mode))throw new C.ErrnoError(28);var g=C.nodePermissions(r,"w");if(g)throw new C.ErrnoError(g);r.node_ops.setattr(r,{size:G,timestamp:Date.now()})},ftruncate:(e,G)=>{var r=C.getStreamChecked(e);if(!(r.flags&2097155))throw new C.ErrnoError(28);C.truncate(r.node,G)},utime:(e,G,r)=>{var F=C.lookupPath(e,{follow:!0}),g=F.node;g.node_ops.setattr(g,{timestamp:Math.max(G,r)})},open:(e,G,r)=>{if(e==="")throw new C.ErrnoError(44);G=typeof G=="string"?lT(G):G,r=typeof r>"u"?438:r,G&64?r=r&4095|32768:r=0;var F;if(typeof e=="object")F=e;else{e=Zl.normalize(e);try{var g=C.lookupPath(e,{follow:!(G&131072)});F=g.node}catch{}}var u=!1;if(G&64)if(F){if(G&128)throw new C.ErrnoError(20)}else F=C.mknod(e,r,0),u=!0;if(!F)throw new C.ErrnoError(44);if(C.isChrdev(F.mode)&&(G&=-513),G&65536&&!C.isDir(F.mode))throw new C.ErrnoError(54);if(!u){var x=C.mayOpen(F,G);if(x)throw new C.ErrnoError(x)}G&512&&!u&&C.truncate(F,0),G&=-131713;var M=C.createStream({node:F,path:C.getPath(F),flags:G,seekable:!0,position:0,stream_ops:F.stream_ops,ungotten:[],error:!1});return M.stream_ops.open&&M.stream_ops.open(M),Z.logReadFiles&&!(G&1)&&(C.readFiles||(C.readFiles={}),e in C.readFiles||(C.readFiles[e]=1)),M},close:e=>{if(C.isClosed(e))throw new C.ErrnoError(8);e.getdents&&(e.getdents=null);try{e.stream_ops.close&&e.stream_ops.close(e)}catch(G){throw G}finally{C.closeStream(e.fd)}e.fd=null},isClosed:e=>e.fd===null,llseek:(e,G,r)=>{if(C.isClosed(e))throw new C.ErrnoError(8);if(!e.seekable||!e.stream_ops.llseek)throw new C.ErrnoError(70);if(r!=0&&r!=1&&r!=2)throw new C.ErrnoError(28);return e.position=e.stream_ops.llseek(e,G,r),e.ungotten=[],e.position},read:(e,G,r,F,g)=>{if(W(r>=0),F<0||g<0)throw new C.ErrnoError(28);if(C.isClosed(e))throw new C.ErrnoError(8);if((e.flags&2097155)===1)throw new C.ErrnoError(8);if(C.isDir(e.node.mode))throw new C.ErrnoError(31);if(!e.stream_ops.read)throw new C.ErrnoError(28);var u=typeof g<"u";if(!u)g=e.position;else if(!e.seekable)throw new C.ErrnoError(70);var x=e.stream_ops.read(e,G,r,F,g);return u||(e.position+=x),x},write:(e,G,r,F,g,u)=>{if(W(r>=0),F<0||g<0)throw new C.ErrnoError(28);if(C.isClosed(e))throw new C.ErrnoError(8);if(!(e.flags&2097155))throw new C.ErrnoError(8);if(C.isDir(e.node.mode))throw new C.ErrnoError(31);if(!e.stream_ops.write)throw new C.ErrnoError(28);e.seekable&&e.flags&1024&&C.llseek(e,0,2);var x=typeof g<"u";if(!x)g=e.position;else if(!e.seekable)throw new C.ErrnoError(70);var M=e.stream_ops.write(e,G,r,F,g,u);return x||(e.position+=M),M},allocate:(e,G,r)=>{if(C.isClosed(e))throw new C.ErrnoError(8);if(G<0||r<=0)throw new C.ErrnoError(28);if(!(e.flags&2097155))throw new C.ErrnoError(8);if(!C.isFile(e.node.mode)&&!C.isDir(e.node.mode))throw new C.ErrnoError(43);if(!e.stream_ops.allocate)throw new C.ErrnoError(138);e.stream_ops.allocate(e,G,r)},mmap:(e,G,r,F,g)=>{if(F&2&&!(g&2)&&(e.flags&2097155)!==2)throw new C.ErrnoError(2);if((e.flags&2097155)===1)throw new C.ErrnoError(2);if(!e.stream_ops.mmap)throw new C.ErrnoError(43);return e.stream_ops.mmap(e,G,r,F,g)},msync:(e,G,r,F,g)=>(W(r>=0),e.stream_ops.msync?e.stream_ops.msync(e,G,r,F,g):0),munmap:e=>0,ioctl:(e,G,r)=>{if(!e.stream_ops.ioctl)throw new C.ErrnoError(59);return e.stream_ops.ioctl(e,G,r)},readFile:(e,G={})=>{if(G.flags=G.flags||0,G.encoding=G.encoding||"binary",G.encoding!=="utf8"&&G.encoding!=="binary")throw new Error(`Invalid encoding type "${G.encoding}"`);var r,F=C.open(e,G.flags),g=C.stat(e),u=g.size,x=new Uint8Array(u);return C.read(F,x,0,u,0),G.encoding==="utf8"?r=sW(x,0):G.encoding==="binary"&&(r=x),C.close(F),r},writeFile:(e,G,r={})=>{r.flags=r.flags||577;var F=C.open(e,r.flags,r.mode);if(typeof G=="string"){var g=new Uint8Array(_U(G)+1),u=fe(G,g,0,g.length);C.write(F,g,0,u,void 0,r.canOwn)}else if(ArrayBuffer.isView(G))C.write(F,G,0,G.byteLength,void 0,r.canOwn);else throw new Error("Unsupported data type");C.close(F)},cwd:()=>C.currentPath,chdir:e=>{var G=C.lookupPath(e,{follow:!0});if(G.node===null)throw new C.ErrnoError(44);if(!C.isDir(G.node.mode))throw new C.ErrnoError(54);var r=C.nodePermissions(G.node,"x");if(r)throw new C.ErrnoError(r);C.currentPath=G.path},createDefaultDirectories:()=>{C.mkdir("/tmp"),C.mkdir("/home"),C.mkdir("/home/web_user")},createDefaultDevices:()=>{C.mkdir("/dev"),C.registerDevice(C.makedev(1,3),{read:()=>0,write:(F,g,u,x,M)=>x}),C.mkdev("/dev/null",C.makedev(1,3)),HW.register(C.makedev(5,0),HW.default_tty_ops),HW.register(C.makedev(6,0),HW.default_tty1_ops),C.mkdev("/dev/tty",C.makedev(5,0)),C.mkdev("/dev/tty1",C.makedev(6,0));var e=new Uint8Array(1024),G=0,r=()=>(G===0&&(G=Ii(e).byteLength),e[--G]);C.createDevice("/dev","random",r),C.createDevice("/dev","urandom",r),C.mkdir("/dev/shm"),C.mkdir("/dev/shm/tmp")},createSpecialDirectories:()=>{C.mkdir("/proc");var e=C.mkdir("/proc/self");C.mkdir("/proc/self/fd"),C.mount({mount:()=>{var G=C.createNode(e,"fd",16895,73);return G.node_ops={lookup:(r,F)=>{var g=+F,u=C.getStreamChecked(g),x={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>u.path}};return x.parent=x,x}},G}},{},"/proc/self/fd")},createStandardStreams:()=>{Z.stdin?C.createDevice("/dev","stdin",Z.stdin):C.symlink("/dev/tty","/dev/stdin"),Z.stdout?C.createDevice("/dev","stdout",null,Z.stdout):C.symlink("/dev/tty","/dev/stdout"),Z.stderr?C.createDevice("/dev","stderr",null,Z.stderr):C.symlink("/dev/tty1","/dev/stderr");var e=C.open("/dev/stdin",0),G=C.open("/dev/stdout",1),r=C.open("/dev/stderr",1);W(e.fd===0,`invalid handle for stdin (${e.fd})`),W(G.fd===1,`invalid handle for stdout (${G.fd})`),W(r.fd===2,`invalid handle for stderr (${r.fd})`)},ensureErrnoError:()=>{C.ErrnoError||(C.ErrnoError=function(G,r){this.name="ErrnoError",this.node=r,this.setErrno=function(F){this.errno=F;for(var g in xe)if(xe[g]===F){this.code=g;break}},this.setErrno(G),this.message=ZT[G],this.stack&&(Object.defineProperty(this,"stack",{value:new Error().stack,writable:!0}),this.stack=UT(this.stack))},C.ErrnoError.prototype=new Error,C.ErrnoError.prototype.constructor=C.ErrnoError,[44].forEach(e=>{C.genericErrors[e]=new C.ErrnoError(e),C.genericErrors[e].stack="<generic error, no stack>"}))},staticInit:()=>{C.ensureErrnoError(),C.nameTable=new Array(4096),C.mount(uV,{},"/"),C.createDefaultDirectories(),C.createDefaultDevices(),C.createSpecialDirectories(),C.filesystems={MEMFS:uV}},init:(e,G,r)=>{W(!C.init.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),C.init.initialized=!0,C.ensureErrnoError(),Z.stdin=e||Z.stdin,Z.stdout=G||Z.stdout,Z.stderr=r||Z.stderr,C.createStandardStreams()},quit:()=>{C.init.initialized=!1,FT(0);for(var e=0;e<C.streams.length;e++){var G=C.streams[e];G&&C.close(G)}},findObject:(e,G)=>{var r=C.analyzePath(e,G);return r.exists?r.object:null},analyzePath:(e,G)=>{try{var r=C.lookupPath(e,{follow:!G});e=r.path}catch{}var F={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var r=C.lookupPath(e,{parent:!0});F.parentExists=!0,F.parentPath=r.path,F.parentObject=r.node,F.name=Zl.basename(e),r=C.lookupPath(e,{follow:!G}),F.exists=!0,F.path=r.path,F.object=r.node,F.name=r.node.name,F.isRoot=r.path==="/"}catch(g){F.error=g.errno}return F},createPath:(e,G,r,F)=>{e=typeof e=="string"?e:C.getPath(e);for(var g=G.split("/").reverse();g.length;){var u=g.pop();if(u){var x=Zl.join2(e,u);try{C.mkdir(x)}catch{}e=x}}return x},createFile:(e,G,r,F,g)=>{var u=Zl.join2(typeof e=="string"?e:C.getPath(e),G),x=Je(F,g);return C.create(u,x)},createDataFile:(e,G,r,F,g,u)=>{var x=G;e&&(e=typeof e=="string"?e:C.getPath(e),x=G?Zl.join2(e,G):e);var M=Je(F,g),y=C.create(x,M);if(r){if(typeof r=="string"){for(var P=new Array(r.length),AV=0,sV=r.length;AV<sV;++AV)P[AV]=r.charCodeAt(AV);r=P}C.chmod(y,M|146);var tV=C.open(y,577);C.write(tV,r,0,r.length,0,u),C.close(tV),C.chmod(y,M)}return y},createDevice:(e,G,r,F)=>{var g=Zl.join2(typeof e=="string"?e:C.getPath(e),G),u=Je(!!r,!!F);C.createDevice.major||(C.createDevice.major=64);var x=C.makedev(C.createDevice.major++,0);return C.registerDevice(x,{open:M=>{M.seekable=!1},close:M=>{F&&F.buffer&&F.buffer.length&&F(10)},read:(M,y,P,AV,sV)=>{for(var tV=0,eV=0;eV<AV;eV++){var hV;try{hV=r()}catch{throw new C.ErrnoError(29)}if(hV===void 0&&tV===0)throw new C.ErrnoError(6);if(hV==null)break;tV++,y[P+eV]=hV}return tV&&(M.node.timestamp=Date.now()),tV},write:(M,y,P,AV,sV)=>{for(var tV=0;tV<AV;tV++)try{F(y[P+tV])}catch{throw new C.ErrnoError(29)}return AV&&(M.node.timestamp=Date.now()),tV}}),C.mkdev(g,u,x)},forceLoadFile:e=>{if(e.isDevice||e.isFolder||e.link||e.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(S)try{e.contents=ct(S(e.url),!0),e.usedBytes=e.contents.length}catch{throw new C.ErrnoError(29)}else throw new Error("Cannot load without read() or XMLHttpRequest.")},createLazyFile:(e,G,r,F,g)=>{function u(){this.lengthKnown=!1,this.chunks=[]}if(u.prototype.get=function(eV){if(!(eV>this.length-1||eV<0)){var hV=eV%this.chunkSize,JV=eV/this.chunkSize|0;return this.getter(JV)[hV]}},u.prototype.setDataGetter=function(eV){this.getter=eV},u.prototype.cacheLength=function(){var eV=new XMLHttpRequest;if(eV.open("HEAD",r,!1),eV.send(null),!(eV.status>=200&&eV.status<300||eV.status===304))throw new Error("Couldn't load "+r+". Status: "+eV.status);var hV=Number(eV.getResponseHeader("Content-length")),JV,Wl=(JV=eV.getResponseHeader("Accept-Ranges"))&&JV==="bytes",ml=(JV=eV.getResponseHeader("Content-Encoding"))&&JV==="gzip",lV=1024*1024;Wl||(lV=hV);var oV=(il,FZ)=>{if(il>FZ)throw new Error("invalid range ("+il+", "+FZ+") or no bytes requested!");if(FZ>hV-1)throw new Error("only "+hV+" bytes available! programmer error!");var fl=new XMLHttpRequest;if(fl.open("GET",r,!1),hV!==lV&&fl.setRequestHeader("Range","bytes="+il+"-"+FZ),fl.responseType="arraybuffer",fl.overrideMimeType&&fl.overrideMimeType("text/plain; charset=x-user-defined"),fl.send(null),!(fl.status>=200&&fl.status<300||fl.status===304))throw new Error("Couldn't load "+r+". Status: "+fl.status);return fl.response!==void 0?new Uint8Array(fl.response||[]):ct(fl.responseText||"",!0)},zl=this;zl.setDataGetter(il=>{var FZ=il*lV,fl=(il+1)*lV-1;if(fl=Math.min(fl,hV-1),typeof zl.chunks[il]>"u"&&(zl.chunks[il]=oV(FZ,fl)),typeof zl.chunks[il]>"u")throw new Error("doXHR failed!");return zl.chunks[il]}),(ml||!hV)&&(lV=hV=1,hV=this.getter(0).length,lV=hV,D("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=hV,this._chunkSize=lV,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){if(!h)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var x=new u;Object.defineProperties(x,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var M={isDevice:!1,contents:x}}else var M={isDevice:!1,url:r};var y=C.createFile(e,G,M,F,g);M.contents?y.contents=M.contents:M.url&&(y.contents=null,y.url=M.url),Object.defineProperties(y,{usedBytes:{get:function(){return this.contents.length}}});var P={},AV=Object.keys(y.stream_ops);AV.forEach(tV=>{var eV=y.stream_ops[tV];P[tV]=function(){return C.forceLoadFile(y),eV.apply(null,arguments)}});function sV(tV,eV,hV,JV,Wl){var ml=tV.node.contents;if(Wl>=ml.length)return 0;var lV=Math.min(ml.length-Wl,JV);if(W(lV>=0),ml.slice)for(var oV=0;oV<lV;oV++)eV[hV+oV]=ml[Wl+oV];else for(var oV=0;oV<lV;oV++)eV[hV+oV]=ml.get(Wl+oV);return lV}return P.read=(tV,eV,hV,JV,Wl)=>(C.forceLoadFile(y),sV(tV,eV,hV,JV,Wl)),P.mmap=(tV,eV,hV,JV,Wl)=>{C.forceLoadFile(y);var ml=ci(eV);if(!ml)throw new C.ErrnoError(48);return sV(tV,VV,ml,eV,hV),{ptr:ml,allocated:!0}},y.stream_ops=P,y},absolutePath:()=>{L("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder:()=>{L("FS.createFolder has been removed; use FS.mkdir instead")},createLink:()=>{L("FS.createLink has been removed; use FS.symlink instead")},joinPath:()=>{L("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc:()=>{L("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath:()=>{L("FS.standardizePath has been removed; use PATH.normalize instead")}},LW={DEFAULT_POLLMASK:5,calculateAt:function(e,G,r){if(Zl.isAbs(G))return G;var F;if(e===-100)F=C.cwd();else{var g=LW.getStreamFromFD(e);F=g.path}if(G.length==0){if(!r)throw new C.ErrnoError(44);return F}return Zl.join2(F,G)},doStat:function(e,G,r){try{var F=e(G)}catch(M){if(M&&M.node&&Zl.normalize(G)!==Zl.normalize(C.getPath(M.node)))return-54;throw M}k[r>>2]=F.dev,k[r+4>>2]=F.mode,UV[r+8>>2]=F.nlink,k[r+12>>2]=F.uid,k[r+16>>2]=F.gid,k[r+20>>2]=F.rdev,Xl=[F.size>>>0,(pV=F.size,+Math.abs(pV)>=1?pV>0?+Math.floor(pV/4294967296)>>>0:~~+Math.ceil((pV-+(~~pV>>>0))/4294967296)>>>0:0)],k[r+24>>2]=Xl[0],k[r+28>>2]=Xl[1],k[r+32>>2]=4096,k[r+36>>2]=F.blocks;var g=F.atime.getTime(),u=F.mtime.getTime(),x=F.ctime.getTime();return Xl=[Math.floor(g/1e3)>>>0,(pV=Math.floor(g/1e3),+Math.abs(pV)>=1?pV>0?+Math.floor(pV/4294967296)>>>0:~~+Math.ceil((pV-+(~~pV>>>0))/4294967296)>>>0:0)],k[r+40>>2]=Xl[0],k[r+44>>2]=Xl[1],UV[r+48>>2]=g%1e3*1e3,Xl=[Math.floor(u/1e3)>>>0,(pV=Math.floor(u/1e3),+Math.abs(pV)>=1?pV>0?+Math.floor(pV/4294967296)>>>0:~~+Math.ceil((pV-+(~~pV>>>0))/4294967296)>>>0:0)],k[r+56>>2]=Xl[0],k[r+60>>2]=Xl[1],UV[r+64>>2]=u%1e3*1e3,Xl=[Math.floor(x/1e3)>>>0,(pV=Math.floor(x/1e3),+Math.abs(pV)>=1?pV>0?+Math.floor(pV/4294967296)>>>0:~~+Math.ceil((pV-+(~~pV>>>0))/4294967296)>>>0:0)],k[r+72>>2]=Xl[0],k[r+76>>2]=Xl[1],UV[r+80>>2]=x%1e3*1e3,Xl=[F.ino>>>0,(pV=F.ino,+Math.abs(pV)>=1?pV>0?+Math.floor(pV/4294967296)>>>0:~~+Math.ceil((pV-+(~~pV>>>0))/4294967296)>>>0:0)],k[r+88>>2]=Xl[0],k[r+92>>2]=Xl[1],0},doMsync:function(e,G,r,F,g){if(!C.isFile(G.node.mode))throw new C.ErrnoError(43);if(F&2)return 0;var u=GV.slice(e,e+r);C.msync(G,u,g,r,F)},varargs:void 0,get(){W(LW.varargs!=null),LW.varargs+=4;var e=k[LW.varargs-4>>2];return e},getStr(e){var G=CZ(e);return G},getStreamFromFD:function(e){var G=C.getStreamChecked(e);return G}},AT=(e,G)=>{var r=0;return BA().forEach(function(F,g){var u=G+r;UV[e+g*4>>2]=u,Ld(F,u),r+=F.length+1}),0},tT=(e,G)=>{var r=BA();UV[e>>2]=r.length;var F=0;return r.forEach(function(g){F+=g.length+1}),UV[G>>2]=F,0};function eT(e){try{var G=LW.getStreamFromFD(e);return C.close(G),0}catch(r){if(typeof C>"u"||r.name!=="ErrnoError")throw r;return r.errno}}var mT=(e,G,r,F)=>{for(var g=0,u=0;u<r;u++){var x=UV[G>>2],M=UV[G+4>>2];G+=8;var y=C.read(e,VV,x,M,F);if(y<0)return-1;if(g+=y,y<M)break;typeof F<"u"&&(F+=y)}return g};function iT(e,G,r,F){try{var g=LW.getStreamFromFD(e),u=mT(g,G,r);return UV[F>>2]=u,0}catch(x){if(typeof C>"u"||x.name!=="ErrnoError")throw x;return x.errno}}function nT(e,G,r,F,g){var u=Ti(G,r);try{if(isNaN(u))return 61;var x=LW.getStreamFromFD(e);return C.llseek(x,u,F),Xl=[x.position>>>0,(pV=x.position,+Math.abs(pV)>=1?pV>0?+Math.floor(pV/4294967296)>>>0:~~+Math.ceil((pV-+(~~pV>>>0))/4294967296)>>>0:0)],k[g>>2]=Xl[0],k[g+4>>2]=Xl[1],x.getdents&&u===0&&F===0&&(x.getdents=null),0}catch(M){if(typeof C>"u"||M.name!=="ErrnoError")throw M;return M.errno}}var GT=(e,G,r,F)=>{for(var g=0,u=0;u<r;u++){var x=UV[G>>2],M=UV[G+4>>2];G+=8;var y=C.write(e,VV,x,M,F);if(y<0)return-1;g+=y,typeof F<"u"&&(F+=y)}return g};function sT(e,G,r,F){try{var g=LW.getStreamFromFD(e),u=GT(g,G,r);return UV[F>>2]=u,0}catch(x){if(typeof C>"u"||x.name!=="ErrnoError")throw x;return x.errno}}var aT=(e,G)=>{for(var r=0,F=0;F<=G;r+=e[F++]);return r},Si=[31,29,31,30,31,30,31,31,30,31,30,31],Ci=[31,28,31,30,31,30,31,31,30,31,30,31],rT=(e,G)=>{for(var r=new Date(e.getTime());G>0;){var F=TA(r.getFullYear()),g=r.getMonth(),u=(F?Si:Ci)[g];if(G>u-r.getDate())G-=u-r.getDate()+1,r.setDate(1),g<11?r.setMonth(g+1):(r.setMonth(0),r.setFullYear(r.getFullYear()+1));else return r.setDate(r.getDate()+G),r}return r},gi=(e,G)=>{W(e.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),VV.set(e,G)},oT=(e,G,r,F)=>{var g=k[F+40>>2],u={tm_sec:k[F>>2],tm_min:k[F+4>>2],tm_hour:k[F+8>>2],tm_mday:k[F+12>>2],tm_mon:k[F+16>>2],tm_year:k[F+20>>2],tm_wday:k[F+24>>2],tm_yday:k[F+28>>2],tm_isdst:k[F+32>>2],tm_gmtoff:k[F+36>>2],tm_zone:g?CZ(g):""},x=CZ(r),M={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var y in M)x=x.replace(new RegExp(y,"g"),M[y]);var P=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],AV=["January","February","March","April","May","June","July","August","September","October","November","December"];function sV(lV,oV,zl){for(var il=typeof lV=="number"?lV.toString():lV||"";il.length<oV;)il=zl[0]+il;return il}function tV(lV,oV){return sV(lV,oV,"0")}function eV(lV,oV){function zl(FZ){return FZ<0?-1:FZ>0?1:0}var il;return(il=zl(lV.getFullYear()-oV.getFullYear()))===0&&(il=zl(lV.getMonth()-oV.getMonth()))===0&&(il=zl(lV.getDate()-oV.getDate())),il}function hV(lV){switch(lV.getDay()){case 0:return new Date(lV.getFullYear()-1,11,29);case 1:return lV;case 2:return new Date(lV.getFullYear(),0,3);case 3:return new Date(lV.getFullYear(),0,2);case 4:return new Date(lV.getFullYear(),0,1);case 5:return new Date(lV.getFullYear()-1,11,31);case 6:return new Date(lV.getFullYear()-1,11,30)}}function JV(lV){var oV=rT(new Date(lV.tm_year+1900,0,1),lV.tm_yday),zl=new Date(oV.getFullYear(),0,4),il=new Date(oV.getFullYear()+1,0,4),FZ=hV(zl),fl=hV(il);return eV(FZ,oV)<=0?eV(fl,oV)<=0?oV.getFullYear()+1:oV.getFullYear():oV.getFullYear()-1}var Wl={"%a":lV=>P[lV.tm_wday].substring(0,3),"%A":lV=>P[lV.tm_wday],"%b":lV=>AV[lV.tm_mon].substring(0,3),"%B":lV=>AV[lV.tm_mon],"%C":lV=>{var oV=lV.tm_year+1900;return tV(oV/100|0,2)},"%d":lV=>tV(lV.tm_mday,2),"%e":lV=>sV(lV.tm_mday,2," "),"%g":lV=>JV(lV).toString().substring(2),"%G":lV=>JV(lV),"%H":lV=>tV(lV.tm_hour,2),"%I":lV=>{var oV=lV.tm_hour;return oV==0?oV=12:oV>12&&(oV-=12),tV(oV,2)},"%j":lV=>tV(lV.tm_mday+aT(TA(lV.tm_year+1900)?Si:Ci,lV.tm_mon-1),3),"%m":lV=>tV(lV.tm_mon+1,2),"%M":lV=>tV(lV.tm_min,2),"%n":()=>`
`,"%p":lV=>lV.tm_hour>=0&&lV.tm_hour<12?"AM":"PM","%S":lV=>tV(lV.tm_sec,2),"%t":()=>"	","%u":lV=>lV.tm_wday||7,"%U":lV=>{var oV=lV.tm_yday+7-lV.tm_wday;return tV(Math.floor(oV/7),2)},"%V":lV=>{var oV=Math.floor((lV.tm_yday+7-(lV.tm_wday+6)%7)/7);if((lV.tm_wday+371-lV.tm_yday-2)%7<=2&&oV++,oV){if(oV==53){var il=(lV.tm_wday+371-lV.tm_yday)%7;il!=4&&(il!=3||!TA(lV.tm_year))&&(oV=1)}}else{oV=52;var zl=(lV.tm_wday+7-lV.tm_yday-1)%7;(zl==4||zl==5&&TA(lV.tm_year%400-1))&&oV++}return tV(oV,2)},"%w":lV=>lV.tm_wday,"%W":lV=>{var oV=lV.tm_yday+7-(lV.tm_wday+6)%7;return tV(Math.floor(oV/7),2)},"%y":lV=>(lV.tm_year+1900).toString().substring(2),"%Y":lV=>lV.tm_year+1900,"%z":lV=>{var oV=lV.tm_gmtoff,zl=oV>=0;return oV=Math.abs(oV)/60,oV=oV/60*100+oV%60,(zl?"+":"-")+("0000"+oV).slice(-4)},"%Z":lV=>lV.tm_zone,"%%":()=>"%"};x=x.replace(/%%/g,"\0\0");for(var y in Wl)x.includes(y)&&(x=x.replace(new RegExp(y,"g"),Wl[y](u)));x=x.replace(/\0\0/g,"%");var ml=ct(x,!1);return ml.length>G?0:(gi(ml,e),ml.length-1)},hT=(e,G,r,F,g)=>oT(e,G,r,F);function RT(e){var G=Z["_"+e];return W(G,"Cannot call unknown function "+e+", make sure it is exported"),G}var dT=e=>{var G=_U(e)+1,r=fi(G);return Qt(e,r,G),r},Ni=function(e,G,r,F,g){var u={string:hV=>{var JV=0;return hV!=null&&hV!==0&&(JV=dT(hV)),JV},array:hV=>{var JV=fi(hV.length);return gi(hV,JV),JV}};function x(hV){return G==="string"?CZ(hV):G==="boolean"?!!hV:hV}var M=RT(e),y=[],P=0;if(W(G!=="array",'Return type should not be "array".'),F)for(var AV=0;AV<F.length;AV++){var sV=u[r[AV]];sV?(P===0&&(P=CT()),y[AV]=sV(F[AV])):y[AV]=F[AV]}var tV=M.apply(null,y);function eV(hV){return P!==0&&gT(P),x(hV)}return tV=eV(tV),tV};function TT(e,G,r,F){return function(){return Ni(e,G,r,arguments,F)}}B2(),DU=Z.BindingError=class extends Error{constructor(G){super(G),this.name="BindingError"}},Ui=Z.InternalError=class extends Error{constructor(G){super(G),this.name="InternalError"}},x2(),E2(),H2(),Gi=Z.UnboundTypeError=q2(Error,"UnboundTypeError"),Ud(),td();var Ei=function(e,G,r,F){e||(e=this),this.parent=e,this.mount=e.mount,this.mounted=null,this.id=C.nextInode++,this.name=G,this.mode=r,this.node_ops={},this.stream_ops={},this.rdev=F},St=365,Ct=146;Object.defineProperties(Ei.prototype,{read:{get:function(){return(this.mode&St)===St},set:function(e){e?this.mode|=St:this.mode&=~St}},write:{get:function(){return(this.mode&Ct)===Ct},set:function(e){e?this.mode|=Ct:this.mode&=~Ct}},isFolder:{get:function(){return C.isDir(this.mode)}},isDevice:{get:function(){return C.isChrdev(this.mode)}}}),C.FSNode=Ei,C.createPreloadedFile=VT,C.staticInit(),xe={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135};function BT(){eA("fetchSettings")}var pi={__assert_fail:GA,__cxa_throw:d2,_embind_register_bigint:T2,_embind_register_bool:Q2,_embind_register_class:$2,_embind_register_class_constructor:ld,_embind_register_class_function:Zd,_embind_register_class_property:Wd,_embind_register_emval:ed,_embind_register_float:id,_embind_register_integer:Gd,_embind_register_memory_view:sd,_embind_register_std_string:ad,_embind_register_std_wstring:Bd,_embind_register_void:Fd,_emscripten_get_now_is_monotonic:Id,_emval_as:cd,_emval_decref:Xe,_emval_get_property:Sd,_emval_incref:Cd,_emval_new_cstring:Ed,_emval_run_destructors:pd,_emval_take_value:Xd,_gmtime_js:fd,_mktime_js:xd,_tzset_js:Dd,abort:Md,emscripten_asm_const_int:wd,emscripten_date_now:Yd,emscripten_get_now:Fi,emscripten_memcpy_big:yd,emscripten_resize_heap:kd,emscripten_run_script_string:Qi,environ_get:AT,environ_sizes_get:tT,fd_close:eT,fd_read:iT,fd_seek:nT,fd_write:sT,strftime_l:hT},tS=tA(),eS=DV("__wasm_call_ctors"),gt=Z._malloc=DV("malloc"),cW=Z._free=DV("free"),mS=Z._inflateEllipsoid=DV("inflateEllipsoid"),iS=Z._getCoveragePositions=DV("getCoveragePositions"),FT=Z._fflush=DV("fflush"),QT=DV("__getTypeName"),nS=Z.__embind_initialize_bindings=DV("_embind_initialize_bindings"),GS=DV("__errno_location"),IT=DV("setTempRet0"),Xi=()=>(Xi=j.emscripten_stack_init)(),cT=()=>(cT=j.emscripten_stack_get_free)(),ST=()=>(ST=j.emscripten_stack_get_base)(),De=()=>(De=j.emscripten_stack_get_end)(),CT=DV("stackSave"),gT=DV("stackRestore"),fi=DV("stackAlloc"),NT=()=>(NT=j.emscripten_stack_get_current)(),sS=DV("__cxa_increment_exception_refcount"),ET=DV("__cxa_is_pointer_type"),aS=Z.dynCall_jiji=DV("dynCall_jiji"),rS=Z.dynCall_iiiiij=DV("dynCall_iiiiij"),oS=Z.dynCall_iiiiijj=DV("dynCall_iiiiijj"),hS=Z.dynCall_iiiiiijj=DV("dynCall_iiiiiijj"),RS=Z.dynCall_viijii=DV("dynCall_viijii");function pT(e){try{for(var G=atob(e),r=new Uint8Array(G.length),F=0;F<G.length;++F)r[F]=G.charCodeAt(F);return r}catch{throw new Error("Converting base64 string to bytes failed.")}}function XT(e){if(MV(e))return pT(e.slice(EV.length))}Z.ccall=Ni,Z.cwrap=TT;var fT=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertU32PairToI53","exitJS","setErrNo","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","getHostByName","getCallstack","emscriptenLog","convertPCtoSourceLocation","runMainThreadEmAsm","jstoi_q","jstoi_s","listenOnce","autoResumeAudioContext","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","safeSetTimeout","asmjsMangle","getNativeTypeSize","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","AsciiToString","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","findCanvasEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","stackTrace","checkWasiClock","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","createDyncallWrapper","setImmediateWrapped","clearImmediateWrapped","polyfillSetImmediate","getPromise","makePromise","idsToPromises","makePromiseCallback","findMatchingCatch","setMainLoop","getSocketFromFD","getSocketAddress","_setNetworkCallback","heapObjectForWebGLType","heapAccessShiftForWebGLHeap","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","__glGenObject","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","SDL_unicode","SDL_ttfContext","SDL_audio","GLFW_Window","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","registerInheritedInstance","unregisterInheritedInstance","enumReadValueFromPointer","craftEmvalAllocator","emval_get_global","emval_lookupTypes","emval_allocateDestructors","emval_addMethodCaller"];fT.forEach(iA);var bT=["run","addOnPreRun","addOnInit","addOnPreMain","addOnExit","addOnPostRun","addRunDependency","removeRunDependency","FS_createFolder","FS_createPath","FS_createDataFile","FS_createLazyFile","FS_createLink","FS_createDevice","FS_unlink","out","err","callMain","abort","keepRuntimeAlive","wasmMemory","wasmTable","wasmExports","stackAlloc","stackSave","stackRestore","getTempRet0","setTempRet0","writeStackCookie","checkStackCookie","intArrayFromBase64","tryParseAsDataURI","convertI32PairToI53Checked","ptrToString","zeroMemory","getHeapMax","growMemory","ENV","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","arraySum","addDays","ERRNO_CODES","ERRNO_MESSAGES","DNS","Protocols","Sockets","initRandomFill","randomFill","timers","warnOnce","UNWIND_CACHE","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","dynCallLegacy","getDynCaller","dynCall","asyncLoad","alignMemory","mmapAlloc","handleAllocatorInit","HandleAllocator","getCFunc","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","stringToAscii","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToNewUTF8","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","currentFullscreenStrategy","restoreOldWindowedStyle","demangle","demangleAll","ExitStatus","getEnvStrings","doReadv","doWritev","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","Browser","wget","SYSCALLS","preloadPlugins","FS_createPreloadedFile","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS","MEMFS","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","emscripten_webgl_power_preferences","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","GLFW","allocateUTF8","allocateUTF8OnStack","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","embind_charCodes","embind_init_charCodes","readLatin1String","getTypeName","heap32VectorToArray","requireRegisteredType","UnboundTypeError","PureVirtualError","init_embind","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","extendError","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","registeredPointers","registerType","getShiftFromSize","integerReadValueFromPointer","floatReadValueFromPointer","simpleReadValueFromPointer","runDestructors","newFunc","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_getPointee","RegisteredPointer_destructor","RegisteredPointer_deleteObject","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","ClassHandle_isAliasOf","throwInstanceAlreadyDeleted","ClassHandle_clone","ClassHandle_delete","deletionQueue","ClassHandle_isDeleted","ClassHandle_deleteLater","flushPendingDeletes","delayFunction","setDelayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_handles","emval_symbols","init_emval","count_emval_handles","getStringOrSymbol","Emval","emval_newers","emval_methodCallers","emval_registeredMethods"];bT.forEach(bU);var Nt;d=function e(){Nt||bi(),Nt||(d=e)};function uT(){Xi(),LV()}function bi(){if(Fl>0||(uT(),VZ(),Fl>0))return;function e(){Nt||(Nt=!0,Z.calledRun=!0,!mV&&(lZ(),U(Z),Z.onRuntimeInitialized&&Z.onRuntimeInitialized(),W(!Z._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),Kl()))}Z.setStatus?(Z.setStatus("Running..."),setTimeout(function(){setTimeout(function(){Z.setStatus("")},1),e()},1)):e(),Cl()}if(Z.preInit)for(typeof Z.preInit=="function"&&(Z.preInit=[Z.preInit]);Z.preInit.length>0;)Z.preInit.pop()();return bi(),l.ready}})(),Te=$c;globalThis.Buffer=globalThis.Buffer||{};var m2=(Te.hasOwnProperty("then")?Te:Promise.resolve(Te())).then(V=>{let l={find_nearby_indices:{rval:"boolean",params:["number","number"]},getCoveragePositions:{rval:null,params:["number","number","number","number","number"]},inflateEllipsoid:{rval:null,params:["number"]}},Z={wasm:V};return Object.keys(l).forEach(U=>{Z[U]=l[U].params?V.cwrap(U,l[U].rval,l[U].params):V.cwrap(U,l[U].rval)}),Z});var wV={LEO:"Low Earth Orbit",MEO:"Medium Earth Orbit",HEO:"High Earth Orbit",GEO:"Geostationary Orbit",IGO:"Inclined Geosynchronous Orbit",EGO:"Extended Geostationary Orbit",GEOIADC:"IADC GEO Protected Region",GEOSYNC:"Geosynchronous Orbit",SUNSYNC:"Sun Synchronous Orbit",SEMISYNC:"Semi Synchronous Orbit",POLAR:"POLAR Orbit",UNKNOWN:"UNKNOWN"},Vi=86164.0905;function i2(V){let l=[],Z=V.properties.CAT.getValue(),U=V.properties.OMM.getValue(),A=U.SEMI_MAJOR_AXIS;if(Z.PERIOD<128*60&&U.ECCENTRICITY<.25&&l.push(wV.LEO),A>36e3){let t=QV.now(),m=QV.addMinutes(t,1440,new QV),i=10,n=1/0,o=-1/0;for(let h=t;QV.lessThan(h,m);h=QV.addMinutes(h,i,new QV)){let R=V.position.getValue(h),{latitude:c}=Ul.fromCartesian(R,Et.WGS84)||{latitude:0},Q=NV.toDegrees(c);n=Math.min(n,Q),o=Math.max(o,Q)}Z.PERIOD>Vi-60&&Z.PERIOD<Vi+60&&(U.INCLINATION<1?l.push(wV.GEO):l.push(wV.GEOSYNC)),U.INCLINATION>=25&&U.INCLINATION<=180&&A>=37948&&A<=46380&&U.ECCENTRICITY<=.25&&l.push(wV.IGO),U.INCLINATION>=0&&U.INCLINATION<=25&&A>=37948&&A<=46380&&U.ECCENTRICITY<=.25&&l.push(wV.EGO),n>=-15&&o<=15&&Z.PERIGEE>=35586&&Z.PERIGEE<=35986&&l.push(wV.GEOIADC)}return Z.PERIGEE>=2e3&&Z.PERIGEE<35700?l.push(wV.MEO):Z.PERIGEE>35786&&l.push(wV.HEO),U.INCLINATION>97&&U.INCLINATION<99&&l.push(wV.SUNSYNC),Math.abs(Z.PERIOD-.5*Vi)<1&&l.push(wV.SEMISYNC),U.INCLINATION>=80&&U.INCLINATION<=100&&l.push(wV.POLAR),l.length===0&&l.push(wV.UNKNOWN),l}function sU(){I.throwInstantiationError()}Object.defineProperties(sU.prototype,{credits:{get:I.throwInstantiationError},waterMask:{get:I.throwInstantiationError}});sU.prototype.interpolateHeight=I.throwInstantiationError;sU.prototype.isChildAvailable=I.throwInstantiationError;sU.prototype.createMesh=I.throwInstantiationError;sU.prototype.upsample=I.throwInstantiationError;sU.prototype.wasCreatedByUpsampling=I.throwInstantiationError;sU.maximumAsynchronousTasks=5;var n2=sU;function VS(V,l,Z,U,A,t,m,i,n,o,h,R,c,Q,T,S){this.center=V,this.vertices=l,this.stride=a(o,6),this.indices=Z,this.indexCountWithoutSkirts=U,this.vertexCountWithoutSkirts=A,this.minimumHeight=t,this.maximumHeight=m,this.boundingSphere3D=i,this.occludeePointInScaledSpace=n,this.orientedBoundingBox=h,this.encoding=R,this.westIndicesSouthToNorth=c,this.southIndicesEastToWest=Q,this.eastIndicesNorthToSouth=T,this.northIndicesWestToEast=S}var li=VS;function YW(V){if(!s(V)||!s(V.buffer))throw new I("options.buffer is required.");if(!s(V.width))throw new I("options.width is required.");if(!s(V.height))throw new I("options.height is required.");this._buffer=V.buffer,this._width=V.width,this._height=V.height,this._childTileMask=a(V.childTileMask,15),this._encoding=a(V.encoding,Jt.NONE);let l=ye.DEFAULT_STRUCTURE,Z=V.structure;s(Z)?Z!==l&&(Z.heightScale=a(Z.heightScale,l.heightScale),Z.heightOffset=a(Z.heightOffset,l.heightOffset),Z.elementsPerHeight=a(Z.elementsPerHeight,l.elementsPerHeight),Z.stride=a(Z.stride,l.stride),Z.elementMultiplier=a(Z.elementMultiplier,l.elementMultiplier),Z.isBigEndian=a(Z.isBigEndian,l.isBigEndian)):Z=l,this._structure=Z,this._createdByUpsampling=a(V.createdByUpsampling,!1),this._waterMask=V.waterMask,this._skirtHeight=void 0,this._bufferType=this._encoding===Jt.LERC?Float32Array:this._buffer.constructor,this._mesh=void 0}Object.defineProperties(YW.prototype,{credits:{get:function(){}},waterMask:{get:function(){return this._waterMask}},childTileMask:{get:function(){return this._childTileMask}}});var G2="createVerticesFromHeightmap",lS=new $W(G2),ZS=new $W(G2,n2.maximumAsynchronousTasks);YW.prototype.createMesh=function(V){V=a(V,a.EMPTY_OBJECT),v.typeOf.object("options.tilingScheme",V.tilingScheme),v.typeOf.number("options.x",V.x),v.typeOf.number("options.y",V.y),v.typeOf.number("options.level",V.level);let l=V.tilingScheme,Z=V.x,U=V.y,A=V.level,t=a(V.exaggeration,1),m=a(V.exaggerationRelativeHeight,0),i=a(V.throttle,!0),n=l.ellipsoid,o=l.tileXYToNativeRectangle(Z,U,A),h=l.tileXYToRectangle(Z,U,A),R=n.cartographicToCartesian(SW.center(h)),c=this._structure,T=gW.getEstimatedLevelZeroGeometricErrorForAHeightmap(n,this._width,l.getNumberOfXTilesAtLevel(0))/(1<<A);this._skirtHeight=Math.min(T*4,1e3);let p=(i?ZS:lS).scheduleTask({heightmap:this._buffer,structure:c,includeWebMercatorT:!0,width:this._width,height:this._height,nativeRectangle:o,rectangle:h,relativeToCenter:R,ellipsoid:n,skirtHeight:this._skirtHeight,isGeographic:l.projection instanceof _e,exaggeration:t,exaggerationRelativeHeight:m,encoding:this._encoding});if(!s(p))return;let b=this;return Promise.resolve(p).then(function(E){let D;b._skirtHeight>0?D=gW.getRegularGridAndSkirtIndicesAndEdgeIndices(E.gridWidth,E.gridHeight):D=gW.getRegularGridIndicesAndEdgeIndices(E.gridWidth,E.gridHeight);let _=E.gridWidth*E.gridHeight;return b._mesh=new li(R,new Float32Array(E.vertices),D.indices,D.indexCountWithoutSkirts,_,E.minimumHeight,E.maximumHeight,gV.clone(E.boundingSphere3D),w.clone(E.occludeePointInScaledSpace),E.numberOfAttributes,bt.clone(E.orientedBoundingBox),Ki.clone(E.encoding),D.westIndicesSouthToNorth,D.southIndicesEastToWest,D.eastIndicesNorthToSouth,D.northIndicesWestToEast),b._buffer=void 0,b._mesh})};YW.prototype._createMeshSync=function(V){v.typeOf.object("options.tilingScheme",V.tilingScheme),v.typeOf.number("options.x",V.x),v.typeOf.number("options.y",V.y),v.typeOf.number("options.level",V.level);let l=V.tilingScheme,Z=V.x,U=V.y,A=V.level,t=a(V.exaggeration,1),m=a(V.exaggerationRelativeHeight,0),i=l.ellipsoid,n=l.tileXYToNativeRectangle(Z,U,A),o=l.tileXYToRectangle(Z,U,A),h=i.cartographicToCartesian(SW.center(o)),R=this._structure,Q=gW.getEstimatedLevelZeroGeometricErrorForAHeightmap(i,this._width,l.getNumberOfXTilesAtLevel(0))/(1<<A);this._skirtHeight=Math.min(Q*4,1e3);let T=ye.computeVertices({heightmap:this._buffer,structure:R,includeWebMercatorT:!0,width:this._width,height:this._height,nativeRectangle:n,rectangle:o,relativeToCenter:h,ellipsoid:i,skirtHeight:this._skirtHeight,isGeographic:l.projection instanceof _e,exaggeration:t,exaggerationRelativeHeight:m});this._buffer=void 0;let S;this._skirtHeight>0?S=gW.getRegularGridAndSkirtIndicesAndEdgeIndices(this._width,this._height):S=gW.getRegularGridIndicesAndEdgeIndices(this._width,this._height);let p=T.gridWidth*T.gridHeight;return this._mesh=new li(h,T.vertices,S.indices,S.indexCountWithoutSkirts,p,T.minimumHeight,T.maximumHeight,T.boundingSphere3D,T.occludeePointInScaledSpace,T.encoding.stride,T.orientedBoundingBox,T.encoding,S.westIndicesSouthToNorth,S.southIndicesEastToWest,S.eastIndicesNorthToSouth,S.northIndicesWestToEast),this._mesh};YW.prototype.interpolateHeight=function(V,l,Z){let U=this._width,A=this._height,t=this._structure,m=t.stride,i=t.elementsPerHeight,n=t.elementMultiplier,o=t.isBigEndian,h=t.heightOffset,R=t.heightScale,c=s(this._mesh),Q=this._encoding===Jt.LERC;if(!c&&Q)return;let S;if(c){let p=this._mesh.vertices,b=this._mesh.encoding;S=s2(p,b,h,R,V,U,A,l,Z)}else S=WS(this._buffer,i,n,m,o,V,U,A,l,Z),S=S*R+h;return S};YW.prototype.upsample=function(V,l,Z,U,A,t,m){if(!s(V))throw new I("tilingScheme is required.");if(!s(l))throw new I("thisX is required.");if(!s(Z))throw new I("thisY is required.");if(!s(U))throw new I("thisLevel is required.");if(!s(A))throw new I("descendantX is required.");if(!s(t))throw new I("descendantY is required.");if(!s(m))throw new I("descendantLevel is required.");if(m-U>1)throw new I("Upsampling through more than one level at a time is not currently supported.");let n=this._mesh;if(!s(n))return;let o=this._width,h=this._height,R=this._structure,c=R.stride,Q=new this._bufferType(o*h*c),T=n.vertices,S=n.encoding,p=V.tileXYToRectangle(l,Z,U),b=V.tileXYToRectangle(A,t,m),E=R.heightOffset,D=R.heightScale,_=R.elementsPerHeight,Y=R.elementMultiplier,K=R.isBigEndian,ZV=Math.pow(Y,_-1);for(let j=0;j<h;++j){let mV=NV.lerp(b.north,b.south,j/(h-1));for(let BV=0;BV<o;++BV){let W=NV.lerp(b.west,b.east,BV/(o-1)),VV=s2(T,S,E,D,p,o,h,W,mV);VV=VV<R.lowestEncodedHeight?R.lowestEncodedHeight:VV,VV=VV>R.highestEncodedHeight?R.highestEncodedHeight:VV,US(Q,_,Y,ZV,c,K,j*o+BV,VV)}}return Promise.resolve(new YW({buffer:Q,width:o,height:h,childTileMask:0,structure:this._structure,createdByUpsampling:!0}))};YW.prototype.isChildAvailable=function(V,l,Z,U){if(!s(V))throw new I("thisX is required.");if(!s(l))throw new I("thisY is required.");if(!s(Z))throw new I("childX is required.");if(!s(U))throw new I("childY is required.");let A=2;return Z!==V*2&&++A,U!==l*2&&(A-=2),(this._childTileMask&1<<A)!==0};YW.prototype.wasCreatedByUpsampling=function(){return this._createdByUpsampling};function WS(V,l,Z,U,A,t,m,i,n,o){let h=(n-t.west)*(m-1)/(t.east-t.west),R=(o-t.south)*(i-1)/(t.north-t.south),c=h|0,Q=c+1;Q>=m&&(Q=m-1,c=m-2);let T=R|0,S=T+1;S>=i&&(S=i-1,T=i-2);let p=h-c,b=R-T;T=i-1-T,S=i-1-S;let E=Be(V,l,Z,U,A,T*m+c),D=Be(V,l,Z,U,A,T*m+Q),_=Be(V,l,Z,U,A,S*m+c),Y=Be(V,l,Z,U,A,S*m+Q);return a2(p,b,E,D,_,Y)}function s2(V,l,Z,U,A,t,m,i,n){let o=(i-A.west)*(t-1)/(A.east-A.west),h=(n-A.south)*(m-1)/(A.north-A.south),R=o|0,c=R+1;c>=t&&(c=t-1,R=t-2);let Q=h|0,T=Q+1;T>=m&&(T=m-1,Q=m-2);let S=o-R,p=h-Q;Q=m-1-Q,T=m-1-T;let b=(l.decodeHeight(V,Q*t+R)-Z)/U,E=(l.decodeHeight(V,Q*t+c)-Z)/U,D=(l.decodeHeight(V,T*t+R)-Z)/U,_=(l.decodeHeight(V,T*t+c)-Z)/U;return a2(S,p,b,E,D,_)}function a2(V,l,Z,U,A,t){return l<V?Z+V*(U-Z)+l*(t-U):Z+V*(t-A)+l*(A-Z)}function Be(V,l,Z,U,A,t){t*=U;let m=0,i;if(A)for(i=0;i<l;++i)m=m*Z+V[t+i];else for(i=l-1;i>=0;--i)m=m*Z+V[t+i];return m}function US(V,l,Z,U,A,t,m,i){m*=A;let n;if(t)for(n=0;n<l-1;++n)V[m+n]=i/U|0,i-=V[m+n]*U,U/=Z;else for(n=l-1;n>0;--n)V[m+n]=i/U|0,i-=V[m+n]*U,U/=Z;V[m+n]=i}var r2=YW;function WA(V){V=a(V,a.EMPTY_OBJECT),this._tilingScheme=V.tilingScheme,s(this._tilingScheme)||(this._tilingScheme=new vi({ellipsoid:a(V.ellipsoid,Et.WGS84)})),this._levelZeroMaximumGeometricError=gW.getEstimatedLevelZeroGeometricErrorForAHeightmap(this._tilingScheme.ellipsoid,64,this._tilingScheme.getNumberOfXTilesAtLevel(0)),this._errorEvent=new dV}Object.defineProperties(WA.prototype,{errorEvent:{get:function(){return this._errorEvent}},credit:{get:function(){}},tilingScheme:{get:function(){return this._tilingScheme}},hasWaterMask:{get:function(){return!1}},hasVertexNormals:{get:function(){return!1}},availability:{get:function(){}}});WA.prototype.requestTileGeometry=function(V,l,Z,U){return Promise.resolve(new r2({buffer:new Uint8Array(16*16),width:16,height:16}))};WA.prototype.getLevelMaximumGeometricError=function(V){return this._levelZeroMaximumGeometricError/(1<<V)};WA.prototype.getTileDataAvailable=function(V,l,Z){};WA.prototype.loadTileDataAvailability=function(V,l,Z){};var o2=WA;function UA(V,l){this._callback=void 0,this._isConstant=void 0,this._definitionChanged=new dV,this.setCallback(V,l)}Object.defineProperties(UA.prototype,{isConstant:{get:function(){return this._isConstant}},definitionChanged:{get:function(){return this._definitionChanged}}});UA.prototype.getValue=function(V,l){return this._callback(V,l)};UA.prototype.setCallback=function(V,l){if(!s(V))throw new I("callback is required.");if(!s(l))throw new I("isConstant is required.");let Z=this._callback!==V||this._isConstant!==l;this._callback=V,this._isConstant=l,Z&&this._definitionChanged.raiseEvent(this)};UA.prototype.equals=function(V){return this===V||V instanceof UA&&this._callback===V._callback&&this._isConstant===V._isConstant};var h2=UA;var Zi=class extends nt{constructor(l){if(!(l.sdc instanceof nt)||!l.sdc._wasmModule)throw new I("Invalid SpaceCatalogDataSource");super(`${l.sdc.name}_coverageGroup`),this.objectList=[],this.sdc=l.sdc,this.sdc.entities.collectionChanged.addEventListener((Z,U,A,t)=>{for(let m=0;m<A.length;m++)~this.objectList.indexOf(A[m])&&this.remove(A[m]);for(let m=0;m<U.length;m++)!~this.objectList.indexOf(U[m])&&U[m]._coverageShowing&&this.push(U[m])}),this.coverageType=l.coverageType||0,this.color=l.color||z.fromRandom({alpha:.3}),this.groundCoverageOnly=l.groundCoverageOnly||!1,this.angle=l.angle,this.lastIntersectionTime=null,this.cachedPositions=[],this.wasmModule=this.sdc._wasmModule,this.samples=l.samples||10,this.scene=l.viewer,this.ecefPointer=this.wasmModule.wasm._malloc(24),this.ecefPoints=new Float64Array(this.wasmModule.wasm.HEAP8.buffer,this.ecefPointer,3),this.positions=new Float64Array(this.wasmModule.wasm.HEAP8.buffer,this.posArrayPointer,this._size),this.result=new w,this.ph=new ut,this.c3array=[]}get samples(){return this._samples}set samples(l){this._samples=l,this._size=6*this._samples,this._bytesSize=this._size*8,this.posArrayPointer&&this.wasmModule.wasm._free(this.posArrayPointer),this.posArrayPointer=this.wasmModule.wasm._malloc(this._bytesSize),this.positions=new Float64Array(this.wasmModule.wasm.HEAP8.buffer,this.posArrayPointer,this._size)}createGeometry(){let l="noclick:CoverageEntity";if(this.ph.satpos=[],!this.entities.getById(l)){let Z=this.entities.add({id:l,polygon:{hierarchy:new h2(U=>{this.ph.positionsArray=[],this.ph.positions=[];for(let A=0;A<this.objectList.length;++A)if(this.objectList[A].show){if(this.c3array=[],this.result=this.objectList[A].position.getValue(U,this.result,!1),this.modelMatrix=this.objectList[A].computeModelMatrix(U),w.pack(this.result,this.ecefPoints),this.wasmModule.getCoveragePositions(this.ecefPointer,this.coverageType,this.angle,this.samples,this.posArrayPointer),this.positions.length%3===0){let t=w.unpackArray(this.positions,this.c3array);if(this.viewer?.scene&&!(this.viewer.scene.terrainProvider instanceof o2)&&this.samples>36){let m=new Date().getTime(),i=this.viewer.clock.currentTime;if((!this.lastClockTime||!QV.equals(i,this.lastClockTime))&&(!this.lastIntersectionTime||m-this.lastIntersectionTime>1e3)){this.lastIntersectionTime=m,this.lastClockTime=i.clone(),this.lastClockTime=m.clone(),this.cachedPositions=[];for(let n=0;n<t.length;n++)try{let o=new ki(this.result,w.subtract(t[n],this.result,new w)),h=this.viewer.scene.globe.pick(o,this.viewer.scene);s(h)&&(t[n]=h),this.cachedPositions.push(t[n])}catch(o){console.log(o)}}else t=this.cachedPositions}this.ph.positionsArray[A]=t}else continue;this.groundCoverageOnly||(this.ph.satpos[A]=w.clone(this.result))}return this.ph},!1),perPositionHeight:!0,material:this.color},properties:{unselectable:!0}});Object.defineProperties(Z,{show:{get:()=>!0,set:()=>{}}})}}getById(l){return this.objectList.filter(Z=>Z.id===l)}push(l){this.objectList.filter(Z=>Z.id===l.id).length||(this.objectList.push(l),this.createGeometry())}remove(l){this.objectList=this.objectList.filter(Z=>Z.id!==l.id),Object.defineProperties(l,{show:{configurable:!0,get:()=>l._show,set:Z=>{l._show=Z}}}),this.createGeometry()}},R2=Zi;var Fe=class extends nt{constructor(l={name=jl(),referenceFrame=ul.FIXED,calcVelocity=!1,entityDefault={},scene=void 0}={}){super(l.name),l.scene||console.warn('The parameter "scene" is required.'),this.options=l,this._wasmModule=null,this._registered=!1,this._viewer=l.viewer,this._scene=l.scene,this._entityCollection.referenceFrame=l.referenceFrame||this._viewer?.referenceFrame||ul.FIXED,this._entityCollection.calcVelocity=l.calcVelocity||!1;let Z=(U,A,t,m)=>{t.filter(i=>i.properties?.pointer).forEach(i=>{this._wasmModule.removeEntity(i.properties.pointer)}),this._entityCollection.referenceFrame=this._scene.referenceFrame||this._entityCollection.referenceFrame};this._entityCollection.collectionChanged.addEventListener(Z,this),this._orbits={[wV.LEO]:[],[wV.MEO]:[],[wV.HEO]:[],[wV.GEO]:[],[wV.IGO]:[],[wV.EGO]:[],[wV.GEOIADC]:[],[wV.GEOSYNC]:[],[wV.SUNSYNC]:[],[wV.SEMISYNC]:[],[wV.POLAR]:[],[wV.UNKNOWN]:[]}}onAdd(l){~l.getByName(this._coverageGroup.name).length&&l.add(this._coverageGroup)}onRemove(l){l.getByName(this._coverageGroup.name).length&&l.remove(this._coverageGroup)}async load(l){return await this.loadOMM(l,"tle")}loadOMM(l,Z,U=!1){if(!l)throw new I('The parameter "omm" is required.');if(!Z)throw new I('The parameter "satcat" is required.');return new Promise(async A=>{let t=await m2;this._wasmModule=t,this._coverageGroup=this._coverageGroup||new R2({samples:72,sdc:this,coverageType:1,angle:90,groundCoverageOnly:!1,color:z.LIMEGREEN.withAlpha(.5),viewer:this._viewer}),this.entities.suspendEvents();let{wasm:m}=t,{SatelliteCatalog:i}=m;this._wasmSatelliteCatalog=new i(this.name);let n=[];l instanceof ArrayBuffer||l instanceof Uint8Array?(l instanceof ArrayBuffer&&(l=new Uint8Array(l)),n=$m(l,"OMM",de).RECORDS):l instanceof de.OMMCOLLECTIONT&&(n=l.RECORDS);let o=[];if(Z instanceof ArrayBuffer||l instanceof Uint8Array){Z instanceof ArrayBuffer&&(Z=new Uint8Array(Z));let h=await $m(Z,"CAT",qm).RECORDS;for(let R=0;R<h.length;R++)o[h[R].NORAD_CAT_ID]=h[R]}for(let h=0;h<n.length;h++){let R,c=n[h],Q=U?U(c,o[c.NORAD_CAT_ID]):c.NORAD_CAT_ID;if(R=this.entities.getById(Q))R.loadOMM(c);else{let T={id:Q,properties:{CAT:o[c.NORAD_CAT_ID],OMM:c},point:{pixelSize:1},label:{show:!1,text:`${c.NORAD_CAT_ID.toString().padStart(5,0)}`,font:"1rem Helvetica",showBackground:!0,horizontalOrigin:eZ.LEFT,backgroundColor:new z(.1,.1,.1,.9),pixelOffset:new w(10,0),scaleByDistance:new _V(150,1.5,13e7,0),pixelOffsetScaleByDistance:new _V(150,3,15e6,.5)}};for(let S in this.options.entityDefault)this.options.entityDefault[S]&&(T[S]=Object.assign({},T[S]||{},this.options.entityDefault[S]));if(T&&t&&c)try{let S=new he(T,t,this._wasmSatelliteCatalog,c);R=this.entities.add(S,h)}catch(S){globalThis.error||(console.log(S),globalThis.error=S)}}}this.entities._suspendCount&&this.entities.resumeEvents(),this.entities.referenceFrame=this._scene.referenceFrame,A(this)})}getEntitiesByOrbitType(l){return this._orbits[l]}categorizeSatellites(){for(let l in wV)this._orbits[l]&&(this._orbits[l]=[]);for(let l=0;l<this.entities.values.length;l++){let Z=this.entities.values[l],U=i2(Z);for(let A in U)if(U[A]){let t=U[A];t===wV.LEO?this.LEO.push(Z):t===wV.MEO?this.MEO.push(Z):t===wV.HEO?this.HEO.push(Z):t===wV.GEO?this.GEO.push(Z):t===wV.IGO?this.IGO.push(Z):t===wV.EGO?this.EGO.push(Z):t===wV.GEOIADC?this.GEOIADC.push(Z):t===wV.GEOSYNC?this.GEOSYNC.push(Z):t===wV.SUNSYNC?this.SUNSYNC.push(Z):t===wV.SEMISYNC?this.SEMISYNC.push(Z):t===wV.POLAR?this.POLAR.push(Z):t===wV.UNKNOWN&&this.UNKNOWN.push(Z)}}}};async function AS(V){let{transferEntities:l,screeningObjectIds:Z}=V,U=[],{OMM:A,CAT:t}=l,m=new Fe({name:"workerCatalog"});await m.loadOMM(A,t);let i=m._wasmSatelliteCatalog.conjunctionAssessment(V.start,V.stop,V.step,V.radius,Z);for(let n=0;n<i.size();n++){let o=i.get(n);U.push({primary:o.primary.catalogNumber,secondary:o.secondary.catalogNumber,TCA:o.TCA,distance:o.distance})}return U}var WH=xi(AS);export{WH as default};