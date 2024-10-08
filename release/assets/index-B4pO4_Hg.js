var Uh=Object.defineProperty;var Oh=(s,t,e)=>t in s?Uh(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var be=(s,t,e)=>(Oh(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ca="162",on={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ln={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fh=0,Da=1,kh=2,Nl=1,Bh=2,gi=3,vi=0,Oe=1,si=2,Ni=0,In=1,Na=2,Ua=3,Oa=4,zh=5,Ki=100,Hh=101,Gh=102,Fa=103,ka=104,Vh=200,Wh=201,Xh=202,jh=203,Zr=204,$r=205,Yh=206,qh=207,Kh=208,Zh=209,$h=210,Qh=211,Jh=212,tc=213,ec=214,ic=0,nc=1,sc=2,js=3,rc=4,ac=5,oc=6,lc=7,ua=0,hc=1,cc=2,Ui=0,uc=1,dc=2,fc=3,pc=4,mc=5,gc=6,_c=7,Ba="attached",xc="detached",Ul=300,Un=301,On=302,Qr=303,Jr=304,Js=306,Fn=1e3,Xe=1001,Ys=1002,ye=1003,ta=1004,wn=1005,Le=1006,Ws=1007,_i=1008,Oi=1009,vc=1010,yc=1011,da=1012,Ol=1013,Ii=1014,$e=1015,as=1016,Fl=1017,kl=1018,tn=1020,Mc=1021,je=1023,bc=1024,Sc=1025,en=1026,kn=1027,Bl=1028,zl=1029,Ec=1030,Hl=1031,Gl=1033,lr=33776,hr=33777,cr=33778,ur=33779,za=35840,Ha=35841,Ga=35842,Va=35843,Vl=36196,Wa=37492,Xa=37496,ja=37808,Ya=37809,qa=37810,Ka=37811,Za=37812,$a=37813,Qa=37814,Ja=37815,to=37816,eo=37817,io=37818,no=37819,so=37820,ro=37821,dr=36492,ao=36494,oo=36495,Tc=36283,lo=36284,ho=36285,co=36286,os=2300,Bn=2301,fr=2302,uo=2400,fo=2401,po=2402,wc=2500,Ac=0,Wl=1,ea=2,Rc=3200,Cc=3201,fa=0,Lc=1,Pi="",De="srgb",Ee="srgb-linear",pa="display-p3",tr="display-p3-linear",qs="linear",ae="srgb",Ks="rec709",Zs="p3",hn=7680,mo=519,Pc=512,Ic=513,Dc=514,Xl=515,Nc=516,Uc=517,Oc=518,Fc=519,ia=35044,go="300 es",na=1035,xi=2e3,$s=2001;class an{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _o=1234567;const ns=Math.PI/180,zn=180/Math.PI;function Je(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ae[s&255]+Ae[s>>8&255]+Ae[s>>16&255]+Ae[s>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]).toLowerCase()}function Se(s,t,e){return Math.max(t,Math.min(e,s))}function ma(s,t){return(s%t+t)%t}function kc(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function Bc(s,t,e){return s!==t?(e-s)/(t-s):0}function ss(s,t,e){return(1-e)*s+e*t}function zc(s,t,e,i){return ss(s,t,1-Math.exp(-e*i))}function Hc(s,t=1){return t-Math.abs(ma(s,t*2)-t)}function Gc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Vc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Wc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Xc(s,t){return s+Math.random()*(t-s)}function jc(s){return s*(.5-Math.random())}function Yc(s){s!==void 0&&(_o=s);let t=_o+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qc(s){return s*ns}function Kc(s){return s*zn}function sa(s){return(s&s-1)===0&&s!==0}function Zc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Qs(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $c(s,t,e,i,n){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),h=r((t+i)/2),c=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),m=r((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":s.set(o*c,l*u,l*d,o*h);break;case"YZY":s.set(l*d,o*c,l*u,o*h);break;case"ZXZ":s.set(l*u,l*d,o*c,o*h);break;case"XZX":s.set(o*c,l*g,l*m,o*h);break;case"YXY":s.set(l*m,o*c,l*g,o*h);break;case"ZYZ":s.set(l*g,l*m,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Qe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function te(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const jl={DEG2RAD:ns,RAD2DEG:zn,generateUUID:Je,clamp:Se,euclideanModulo:ma,mapLinear:kc,inverseLerp:Bc,lerp:ss,damp:zc,pingpong:Hc,smoothstep:Gc,smootherstep:Vc,randInt:Wc,randFloat:Xc,randFloatSpread:jc,seededRandom:Yc,degToRad:qc,radToDeg:Kc,isPowerOfTwo:sa,ceilPowerOfTwo:Zc,floorPowerOfTwo:Qs,setQuaternionFromProperEuler:$c,normalize:te,denormalize:Qe};class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,i,n,r,a,o,l,h){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,h)}set(t,e,i,n,r,a,o,l,h){const c=this.elements;return c[0]=t,c[1]=n,c[2]=o,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],m=i[5],g=i[8],_=n[0],p=n[3],f=n[6],b=n[1],y=n[4],E=n[7],P=n[2],C=n[5],A=n[8];return r[0]=a*_+o*b+l*P,r[3]=a*p+o*y+l*C,r[6]=a*f+o*E+l*A,r[1]=h*_+c*b+u*P,r[4]=h*p+c*y+u*C,r[7]=h*f+c*E+u*A,r[2]=d*_+m*b+g*P,r[5]=d*p+m*y+g*C,r[8]=d*f+m*E+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return e*a*c-e*o*h-i*r*c+i*o*l+n*r*h-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*a-o*h,d=o*l-c*r,m=h*r-a*l,g=e*u+i*d+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(n*h-c*i)*_,t[2]=(o*i-n*a)*_,t[3]=d*_,t[4]=(c*e-n*l)*_,t[5]=(n*r-o*e)*_,t[6]=m*_,t[7]=(i*l-h*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*o)+a+t,-n*h,n*l,-n*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(pr.makeScale(t,e)),this}rotate(t){return this.premultiply(pr.makeRotation(-t)),this}translate(t,e){return this.premultiply(pr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const pr=new Vt;function Yl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ls(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qc(){const s=ls("canvas");return s.style.display="block",s}const xo={};function ql(s){s in xo||(xo[s]=!0,console.warn(s))}const vo=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yo=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gs={[Ee]:{transfer:qs,primaries:Ks,toReference:s=>s,fromReference:s=>s},[De]:{transfer:ae,primaries:Ks,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[tr]:{transfer:qs,primaries:Zs,toReference:s=>s.applyMatrix3(yo),fromReference:s=>s.applyMatrix3(vo)},[pa]:{transfer:ae,primaries:Zs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(yo),fromReference:s=>s.applyMatrix3(vo).convertLinearToSRGB()}},Jc=new Set([Ee,tr]),Qt={enabled:!0,_workingColorSpace:Ee,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Jc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=gs[t].toReference,n=gs[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return gs[s].primaries},getTransfer:function(s){return s===Pi?qs:gs[s].transfer}};function Dn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let cn;class Kl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cn===void 0&&(cn=ls("canvas")),cn.width=t.width,cn.height=t.height;const i=cn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=cn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ls("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Dn(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Dn(e[i]/255)*255):e[i]=Dn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tu=0;class Zl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Je(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(gr(n[a].image)):r.push(gr(n[a]))}else r=gr(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function gr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Kl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eu=0;class Me extends an{constructor(t=Me.DEFAULT_IMAGE,e=Me.DEFAULT_MAPPING,i=Xe,n=Xe,r=Le,a=_i,o=je,l=Oi,h=Me.DEFAULT_ANISOTROPY,c=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Je(),this.name="",this.source=new Zl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ul)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fn:t.x=t.x-Math.floor(t.x);break;case Xe:t.x=t.x<0?0:1;break;case Ys:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fn:t.y=t.y-Math.floor(t.y);break;case Xe:t.y=t.y<0?0:1;break;case Ys:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Me.DEFAULT_IMAGE=null;Me.DEFAULT_MAPPING=Ul;Me.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,i=0,n=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(h+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(h+1)/2,E=(m+1)/2,P=(f+1)/2,C=(c+d)/4,A=(u+_)/4,k=(g+p)/4;return y>E&&y>P?y<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(y),n=C/i,r=A/i):E>P?E<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(E),i=C/n,r=k/n):P<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(P),i=A/r,n=k/r),this.set(i,n,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-c)*(d-c));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-_)/b,this.z=(d-c)/b,this.w=Math.acos((h+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iu extends an{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const r=new Me(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Zl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends iu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class $l extends Me{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ye,this.minFilter=ye,this.wrapR=Xe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nu extends Me{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ye,this.minFilter=ye,this.wrapR=Xe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],h=i[n+1],c=i[n+2],u=i[n+3];const d=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||h!==m||c!==g){let p=1-o;const f=l*d+h*m+c*g+u*_,b=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const P=Math.sqrt(y),C=Math.atan2(P,f*b);p=Math.sin(p*C)/P,o=Math.sin(o*C)/P}const E=o*b;if(l=l*p+d*E,h=h*p+m*E,c=c*p+g*E,u=u*p+_*E,p===1-o){const P=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=P,h*=P,c*=P,u*=P}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],l=i[n+1],h=i[n+2],c=i[n+3],u=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+c*u+l*m-h*d,t[e+1]=l*g+c*d+h*u-o*m,t[e+2]=h*g+c*m+o*d-l*u,t[e+3]=c*g-o*u-l*d-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(n/2),u=o(r/2),d=l(i/2),m=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=d*c*u+h*m*g,this._y=h*m*u-d*c*g,this._z=h*c*g+d*m*u,this._w=h*c*u-d*m*g;break;case"YXZ":this._x=d*c*u+h*m*g,this._y=h*m*u-d*c*g,this._z=h*c*g-d*m*u,this._w=h*c*u+d*m*g;break;case"ZXY":this._x=d*c*u-h*m*g,this._y=h*m*u+d*c*g,this._z=h*c*g+d*m*u,this._w=h*c*u-d*m*g;break;case"ZYX":this._x=d*c*u-h*m*g,this._y=h*m*u+d*c*g,this._z=h*c*g-d*m*u,this._w=h*c*u+d*m*g;break;case"YZX":this._x=d*c*u+h*m*g,this._y=h*m*u+d*c*g,this._z=h*c*g-d*m*u,this._w=h*c*u-d*m*g;break;case"XZY":this._x=d*c*u-h*m*g,this._y=h*m*u-d*c*g,this._z=h*c*g+d*m*u,this._w=h*c*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=i+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(r-h)*m,this._z=(a-n)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(c-l)/m,this._x=.25*m,this._y=(n+a)/m,this._z=(r+h)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(r-h)/m,this._x=(n+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(a-n)/m,this._x=(r+h)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+a*o+n*h-r*l,this._y=n*c+a*l+r*o-i*h,this._z=r*c+a*h+i*l-n*o,this._w=a*c-i*o-n*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+n*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*n+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,o),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*n-o*i),c=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+l*h+a*u-o*c,this.y=i+l*c+o*h-r*u,this.z=n+l*u+r*c-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _r.copy(this).projectOnVector(t),this.sub(_r)}reflect(t){return this.sub(_r.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _r=new I,Mo=new ai;class yi{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qe):qe.fromBufferAttribute(r,a),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_s.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_s.copy(i.boundingBox)),_s.applyMatrix4(t.matrixWorld),this.union(_s)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Kn),xs.subVectors(this.max,Kn),un.subVectors(t.a,Kn),dn.subVectors(t.b,Kn),fn.subVectors(t.c,Kn),bi.subVectors(dn,un),Si.subVectors(fn,dn),Hi.subVectors(un,fn);let e=[0,-bi.z,bi.y,0,-Si.z,Si.y,0,-Hi.z,Hi.y,bi.z,0,-bi.x,Si.z,0,-Si.x,Hi.z,0,-Hi.x,-bi.y,bi.x,0,-Si.y,Si.x,0,-Hi.y,Hi.x,0];return!xr(e,un,dn,fn,xs)||(e=[1,0,0,0,1,0,0,0,1],!xr(e,un,dn,fn,xs))?!1:(vs.crossVectors(bi,Si),e=[vs.x,vs.y,vs.z],xr(e,un,dn,fn,xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ci=[new I,new I,new I,new I,new I,new I,new I,new I],qe=new I,_s=new yi,un=new I,dn=new I,fn=new I,bi=new I,Si=new I,Hi=new I,Kn=new I,xs=new I,vs=new I,Gi=new I;function xr(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Gi.fromArray(s,r);const o=n.x*Math.abs(Gi.x)+n.y*Math.abs(Gi.y)+n.z*Math.abs(Gi.z),l=t.dot(Gi),h=e.dot(Gi),c=i.dot(Gi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const su=new yi,Zn=new I,vr=new I;class oi{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):su.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zn.subVectors(t,this.center);const e=Zn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Zn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zn.copy(t.center).add(vr)),this.expandByPoint(Zn.copy(t.center).sub(vr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new I,yr=new I,ys=new I,Ei=new I,Mr=new I,Ms=new I,br=new I;class hs{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){yr.copy(t).add(e).multiplyScalar(.5),ys.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(yr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ys),o=Ei.dot(this.direction),l=-Ei.dot(ys),h=Ei.lengthSq(),c=Math.abs(1-a*a);let u,d,m,g;if(c>0)if(u=a*l-o,d=a*o-l,g=r*c,u>=0)if(d>=-g)if(d<=g){const _=1/c;u*=_,d*=_,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+h}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+h;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+h):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+h):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+h);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(yr).addScaledVector(ys,d),m}intersectSphere(t,e){ui.subVectors(t.center,this.origin);const i=ui.dot(this.direction),n=ui.dot(ui)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,n=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,n=(t.min.x-d.x)*h),c>=0?(r=(t.min.y-d.y)*c,a=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,a=(t.min.y-d.y)*c),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,i,n,r){Mr.subVectors(e,t),Ms.subVectors(i,t),br.crossVectors(Mr,Ms);let a=this.direction.dot(br),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,t);const l=o*this.direction.dot(Ms.crossVectors(Ei,Ms));if(l<0)return null;const h=o*this.direction.dot(Mr.cross(Ei));if(h<0||l+h>a)return null;const c=-o*Ei.dot(br);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(t,e,i,n,r,a,o,l,h,c,u,d,m,g,_,p){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,h,c,u,d,m,g,_,p)}set(t,e,i,n,r,a,o,l,h,c,u,d,m,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=n,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=h,f[6]=c,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/pn.setFromMatrixColumn(t,0).length(),r=1/pn.setFromMatrixColumn(t,1).length(),a=1/pn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*c,m=a*u,g=o*c,_=o*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=m+g*h,e[5]=d-_*h,e[9]=-o*l,e[2]=_-d*h,e[6]=g+m*h,e[10]=a*l}else if(t.order==="YXZ"){const d=l*c,m=l*u,g=h*c,_=h*u;e[0]=d+_*o,e[4]=g*o-m,e[8]=a*h,e[1]=a*u,e[5]=a*c,e[9]=-o,e[2]=m*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*c,m=l*u,g=h*c,_=h*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*c,e[9]=_-d*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*c,m=a*u,g=o*c,_=o*u;e[0]=l*c,e[4]=g*h-m,e[8]=d*h+_,e[1]=l*u,e[5]=_*h+d,e[9]=m*h-g,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*h,g=o*l,_=o*h;e[0]=l*c,e[4]=_-d*u,e[8]=g*u+m,e[1]=u,e[5]=a*c,e[9]=-o*c,e[2]=-h*c,e[6]=m*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,m=a*h,g=o*l,_=o*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+_,e[5]=a*c,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*c,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ru,t,au)}lookAt(t,e,i){const n=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Ti.crossVectors(i,ke),Ti.lengthSq()===0&&(Math.abs(i.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Ti.crossVectors(i,ke)),Ti.normalize(),bs.crossVectors(ke,Ti),n[0]=Ti.x,n[4]=bs.x,n[8]=ke.x,n[1]=Ti.y,n[5]=bs.y,n[9]=ke.y,n[2]=Ti.z,n[6]=bs.z,n[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],m=i[13],g=i[2],_=i[6],p=i[10],f=i[14],b=i[3],y=i[7],E=i[11],P=i[15],C=n[0],A=n[4],k=n[8],tt=n[12],v=n[1],R=n[5],at=n[9],it=n[13],D=n[2],j=n[6],W=n[10],$=n[14],X=n[3],K=n[7],Q=n[11],lt=n[15];return r[0]=a*C+o*v+l*D+h*X,r[4]=a*A+o*R+l*j+h*K,r[8]=a*k+o*at+l*W+h*Q,r[12]=a*tt+o*it+l*$+h*lt,r[1]=c*C+u*v+d*D+m*X,r[5]=c*A+u*R+d*j+m*K,r[9]=c*k+u*at+d*W+m*Q,r[13]=c*tt+u*it+d*$+m*lt,r[2]=g*C+_*v+p*D+f*X,r[6]=g*A+_*R+p*j+f*K,r[10]=g*k+_*at+p*W+f*Q,r[14]=g*tt+_*it+p*$+f*lt,r[3]=b*C+y*v+E*D+P*X,r[7]=b*A+y*R+E*j+P*K,r[11]=b*k+y*at+E*W+P*Q,r[15]=b*tt+y*it+E*$+P*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],m=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+r*l*u-n*h*u-r*o*d+i*h*d+n*o*m-i*l*m)+_*(+e*l*m-e*h*d+r*a*d-n*a*m+n*h*c-r*l*c)+p*(+e*h*u-e*o*m-r*a*u+i*a*m+r*o*c-i*h*c)+f*(-n*o*c-e*l*u+e*o*d+n*a*u-i*a*d+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],m=t[11],g=t[12],_=t[13],p=t[14],f=t[15],b=u*p*h-_*d*h+_*l*m-o*p*m-u*l*f+o*d*f,y=g*d*h-c*p*h-g*l*m+a*p*m+c*l*f-a*d*f,E=c*_*h-g*u*h+g*o*m-a*_*m-c*o*f+a*u*f,P=g*u*l-c*_*l-g*o*d+a*_*d+c*o*p-a*u*p,C=e*b+i*y+n*E+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=b*A,t[1]=(_*d*r-u*p*r-_*n*m+i*p*m+u*n*f-i*d*f)*A,t[2]=(o*p*r-_*l*r+_*n*h-i*p*h-o*n*f+i*l*f)*A,t[3]=(u*l*r-o*d*r-u*n*h+i*d*h+o*n*m-i*l*m)*A,t[4]=y*A,t[5]=(c*p*r-g*d*r+g*n*m-e*p*m-c*n*f+e*d*f)*A,t[6]=(g*l*r-a*p*r-g*n*h+e*p*h+a*n*f-e*l*f)*A,t[7]=(a*d*r-c*l*r+c*n*h-e*d*h-a*n*m+e*l*m)*A,t[8]=E*A,t[9]=(g*u*r-c*_*r-g*i*m+e*_*m+c*i*f-e*u*f)*A,t[10]=(a*_*r-g*o*r+g*i*h-e*_*h-a*i*f+e*o*f)*A,t[11]=(c*o*r-a*u*r-c*i*h+e*u*h+a*i*m-e*o*m)*A,t[12]=P*A,t[13]=(c*_*n-g*u*n+g*i*d-e*_*d-c*i*p+e*u*p)*A,t[14]=(g*o*n-a*_*n-g*i*l+e*_*l+a*i*p-e*o*p)*A,t[15]=(a*u*n-c*o*n+c*i*l-e*u*l-a*i*d+e*o*d)*A,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,h=r*a,c=r*o;return this.set(h*a+i,h*o-n*l,h*l+n*o,0,h*o+n*l,c*o+i,c*l-n*a,0,h*l-n*o,c*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,c=a+a,u=o+o,d=r*h,m=r*c,g=r*u,_=a*c,p=a*u,f=o*u,b=l*h,y=l*c,E=l*u,P=i.x,C=i.y,A=i.z;return n[0]=(1-(_+f))*P,n[1]=(m+E)*P,n[2]=(g-y)*P,n[3]=0,n[4]=(m-E)*C,n[5]=(1-(d+f))*C,n[6]=(p+b)*C,n[7]=0,n[8]=(g+y)*A,n[9]=(p-b)*A,n[10]=(1-(d+_))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=pn.set(n[0],n[1],n[2]).length();const a=pn.set(n[4],n[5],n[6]).length(),o=pn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],Ke.copy(this);const h=1/r,c=1/a,u=1/o;return Ke.elements[0]*=h,Ke.elements[1]*=h,Ke.elements[2]*=h,Ke.elements[4]*=c,Ke.elements[5]*=c,Ke.elements[6]*=c,Ke.elements[8]*=u,Ke.elements[9]*=u,Ke.elements[10]*=u,e.setFromRotationMatrix(Ke),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=xi){const l=this.elements,h=2*r/(e-t),c=2*r/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n);let m,g;if(o===xi)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===$s)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=xi){const l=this.elements,h=1/(e-t),c=1/(i-n),u=1/(a-r),d=(e+t)*h,m=(i+n)*c;let g,_;if(o===xi)g=(a+r)*u,_=-2*u;else if(o===$s)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const pn=new I,Ke=new Wt,ru=new I(0,0,0),au=new I(1,1,1),Ti=new I,bs=new I,ke=new I,bo=new Wt,So=new ai;class ii{constructor(t=0,e=0,i=0,n=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],h=n[5],c=n[9],u=n[2],d=n[6],m=n[10];switch(e){case"XYZ":this._y=Math.asin(Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return bo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return So.setFromEuler(this),this.setFromQuaternion(So,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class Ql{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ou=0;const Eo=new I,mn=new ai,di=new Wt,Ss=new I,$n=new I,lu=new I,hu=new ai,To=new I(1,0,0),wo=new I(0,1,0),Ao=new I(0,0,1),cu={type:"added"},uu={type:"removed"},Sr={type:"childadded",child:null},Er={type:"childremoved",child:null};class le extends an{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Je(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=le.DEFAULT_UP.clone();const t=new I,e=new ii,i=new ai,n=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Vt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mn.setFromAxisAngle(t,e),this.quaternion.multiply(mn),this}rotateOnWorldAxis(t,e){return mn.setFromAxisAngle(t,e),this.quaternion.premultiply(mn),this}rotateX(t){return this.rotateOnAxis(To,t)}rotateY(t){return this.rotateOnAxis(wo,t)}rotateZ(t){return this.rotateOnAxis(Ao,t)}translateOnAxis(t,e){return Eo.copy(t).applyQuaternion(this.quaternion),this.position.add(Eo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(To,t)}translateY(t){return this.translateOnAxis(wo,t)}translateZ(t){return this.translateOnAxis(Ao,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ss.copy(t):Ss.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),$n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt($n,Ss,this.up):di.lookAt(Ss,$n,this.up),this.quaternion.setFromRotationMatrix(di),n&&(di.extractRotation(n.matrixWorld),mn.setFromRotationMatrix(di),this.quaternion.premultiply(mn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(cu),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uu),Er.child=t,this.dispatchEvent(Er),Er.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($n,t,lu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($n,hu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++){const o=n[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),h=a(t.textures),c=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}le.DEFAULT_UP=new I(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ze=new I,fi=new I,Tr=new I,pi=new I,gn=new I,_n=new I,Ro=new I,wr=new I,Ar=new I,Rr=new I;class ri{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ze.subVectors(t,e),n.cross(Ze);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Ze.subVectors(n,e),fi.subVectors(i,e),Tr.subVectors(t,e);const a=Ze.dot(Ze),o=Ze.dot(fi),l=Ze.dot(Tr),h=fi.dot(fi),c=fi.dot(Tr),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(h*l-o*c)*d,g=(a*c-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(o,pi.z),l)}static isFrontFacing(t,e,i,n){return Ze.subVectors(i,e),fi.subVectors(t,e),Ze.cross(fi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Ze.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ri.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return ri.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;gn.subVectors(n,i),_n.subVectors(r,i),wr.subVectors(t,i);const l=gn.dot(wr),h=_n.dot(wr);if(l<=0&&h<=0)return e.copy(i);Ar.subVectors(t,n);const c=gn.dot(Ar),u=_n.dot(Ar);if(c>=0&&u<=c)return e.copy(n);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),e.copy(i).addScaledVector(gn,a);Rr.subVectors(t,r);const m=gn.dot(Rr),g=_n.dot(Rr);if(g>=0&&m<=g)return e.copy(r);const _=m*h-l*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(i).addScaledVector(_n,o);const p=c*g-m*u;if(p<=0&&u-c>=0&&m-g>=0)return Ro.subVectors(r,n),o=(u-c)/(u-c+(m-g)),e.copy(n).addScaledVector(Ro,o);const f=1/(p+_+d);return a=_*f,o=d*f,e.copy(i).addScaledVector(gn,a).addScaledVector(_n,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Cr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}let Mt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Qt.workingColorSpace){if(t=ma(t,1),e=Se(e,0,1),i=Se(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Cr(a,r,t+1/3),this.g=Cr(a,r,t),this.b=Cr(a,r,t-1/3)}return Qt.toWorkingColorSpace(this,n),this}setStyle(t,e=De){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const i=Jl[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return Qt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Se(Re.r*255,0,255))*65536+Math.round(Se(Re.g*255,0,255))*256+Math.round(Se(Re.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Re.copy(this),e);const i=Re.r,n=Re.g,r=Re.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,h;const c=(o+a)/2;if(o===a)l=0,h=0;else{const u=a-o;switch(h=c<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=De){Qt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,i=Re.g,n=Re.b;return t!==De?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(Es);const i=ss(wi.h,Es.h,e),n=ss(wi.s,Es.s,e),r=ss(wi.l,Es.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Re=new Mt;Mt.NAMES=Jl;let du=0;class ti extends an{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Je(),this.name="",this.type="Material",this.blending=In,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zr,this.blendDst=$r,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hn,this.stencilZFail=hn,this.stencilZPass=hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==In&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zr&&(i.blendSrc=this.blendSrc),this.blendDst!==$r&&(i.blendDst=this.blendDst),this.blendEquation!==Ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class $i extends ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new I,Ts=new At;class Ue{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ia,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$e,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ql("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ts.fromBufferAttribute(this,e),Ts.applyMatrix3(t),this.setXY(e,Ts.x,Ts.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Qe(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=te(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qe(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qe(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qe(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qe(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),i=te(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),i=te(i,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),i=te(i,this.array),n=te(n,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ia&&(t.usage=this.usage),t}}class th extends Ue{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class eh extends Ue{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class He extends Ue{constructor(t,e,i){super(new Float32Array(t),e,i)}}let fu=0;const Ve=new Wt,Lr=new le,xn=new I,Be=new yi,Qn=new yi,ve=new I;class Ye extends an{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Je(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yl(t)?eh:th)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Vt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,i){return Ve.makeTranslation(t,e,i),this.applyMatrix4(Ve),this}scale(t,e,i){return Ve.makeScale(t,e,i),this.applyMatrix4(Ve),this}lookAt(t){return Lr.lookAt(t),Lr.updateMatrix(),this.applyMatrix4(Lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xn).negate(),this.translate(xn.x,xn.y,xn.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new He(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Qn.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Be.min,Qn.min),Be.expandByPoint(ve),ve.addVectors(Be.max,Qn.max),Be.expandByPoint(ve)):(Be.expandByPoint(Qn.min),Be.expandByPoint(Qn.max))}Be.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)ve.fromBufferAttribute(o,h),l&&(xn.fromBufferAttribute(t,h),ve.add(xn)),n=Math.max(n,i.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let k=0;k<i.count;k++)o[k]=new I,l[k]=new I;const h=new I,c=new I,u=new I,d=new At,m=new At,g=new At,_=new I,p=new I;function f(k,tt,v){h.fromBufferAttribute(i,k),c.fromBufferAttribute(i,tt),u.fromBufferAttribute(i,v),d.fromBufferAttribute(r,k),m.fromBufferAttribute(r,tt),g.fromBufferAttribute(r,v),c.sub(h),u.sub(h),m.sub(d),g.sub(d);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(R),p.copy(u).multiplyScalar(m.x).addScaledVector(c,-g.x).multiplyScalar(R),o[k].add(_),o[tt].add(_),o[v].add(_),l[k].add(p),l[tt].add(p),l[v].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let k=0,tt=b.length;k<tt;++k){const v=b[k],R=v.start,at=v.count;for(let it=R,D=R+at;it<D;it+=3)f(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const y=new I,E=new I,P=new I,C=new I;function A(k){P.fromBufferAttribute(n,k),C.copy(P);const tt=o[k];y.copy(tt),y.sub(P.multiplyScalar(P.dot(tt))).normalize(),E.crossVectors(C,tt);const R=E.dot(l[k])<0?-1:1;a.setXYZW(k,y.x,y.y,y.z,R)}for(let k=0,tt=b.length;k<tt;++k){const v=b[k],R=v.start,at=v.count;for(let it=R,D=R+at;it<D;it+=3)A(t.getX(it+0)),A(t.getX(it+1)),A(t.getX(it+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const n=new I,r=new I,a=new I,o=new I,l=new I,h=new I,c=new I,u=new I;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),c.subVectors(a,r),u.subVectors(n,r),c.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,p),o.add(c),l.add(c),h.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,h.x,h.y,h.z)}else for(let d=0,m=e.count;d<m;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),c.subVectors(a,r),u.subVectors(n,r),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){const h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*c;for(let f=0;f<c;f++)d[g++]=h[m++]}return new Ue(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ye,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],h=t(l,i);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let c=0,u=h.length;c<u;c++){const d=h[c],m=t(d,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const h=i[l];t.data.attributes[l]=h.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const m=h[u];c.push(m.toJSON(t.data))}c.length>0&&(n[l]=c,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const h in n){const c=n[h];this.setAttribute(h,c.clone(e))}const r=t.morphAttributes;for(const h in r){const c=[],u=r[h];for(let d=0,m=u.length;d<m;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,c=a.length;h<c;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Co=new Wt,Vi=new hs,ws=new oi,Lo=new I,vn=new I,yn=new I,Mn=new I,Pr=new I,As=new I,Rs=new At,Cs=new At,Ls=new At,Po=new I,Io=new I,Do=new I,Ps=new I,Is=new I;class ze extends le{constructor(t=new Ye,e=new $i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){As.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=o[l],u=r[l];c!==0&&(Pr.fromBufferAttribute(u,t),a?As.addScaledVector(Pr,c):As.addScaledVector(Pr.sub(e),c))}e.add(As)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere),ws.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(ws.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(ws,Lo)===null||Vi.origin.distanceToSquared(Lo)>(t.far-t.near)**2))&&(Co.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(Co),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,P=y;E<P;E+=3){const C=o.getX(E),A=o.getX(E+1),k=o.getX(E+2);n=Ds(this,f,t,i,h,c,u,C,A,k),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const b=o.getX(p),y=o.getX(p+1),E=o.getX(p+2);n=Ds(this,a,t,i,h,c,u,b,y,E),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],b=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,P=y;E<P;E+=3){const C=E,A=E+1,k=E+2;n=Ds(this,f,t,i,h,c,u,C,A,k),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const b=p,y=p+1,E=p+2;n=Ds(this,a,t,i,h,c,u,b,y,E),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}}function pu(s,t,e,i,n,r,a,o){let l;if(t.side===Oe?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===vi,o),l===null)return null;Is.copy(o),Is.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Is);return h<e.near||h>e.far?null:{distance:h,point:Is.clone(),object:s}}function Ds(s,t,e,i,n,r,a,o,l,h){s.getVertexPosition(o,vn),s.getVertexPosition(l,yn),s.getVertexPosition(h,Mn);const c=pu(s,t,e,i,vn,yn,Mn,Ps);if(c){n&&(Rs.fromBufferAttribute(n,o),Cs.fromBufferAttribute(n,l),Ls.fromBufferAttribute(n,h),c.uv=ri.getInterpolation(Ps,vn,yn,Mn,Rs,Cs,Ls,new At)),r&&(Rs.fromBufferAttribute(r,o),Cs.fromBufferAttribute(r,l),Ls.fromBufferAttribute(r,h),c.uv1=ri.getInterpolation(Ps,vn,yn,Mn,Rs,Cs,Ls,new At)),a&&(Po.fromBufferAttribute(a,o),Io.fromBufferAttribute(a,l),Do.fromBufferAttribute(a,h),c.normal=ri.getInterpolation(Ps,vn,yn,Mn,Po,Io,Do,new I),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a:o,b:l,c:h,normal:new I,materialIndex:0};ri.getNormal(vn,yn,Mn,u.normal),c.face=u}return c}class cs extends Ye{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],c=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new He(h,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(u,2));function g(_,p,f,b,y,E,P,C,A,k,tt){const v=E/A,R=P/k,at=E/2,it=P/2,D=C/2,j=A+1,W=k+1;let $=0,X=0;const K=new I;for(let Q=0;Q<W;Q++){const lt=Q*R-it;for(let mt=0;mt<j;mt++){const It=mt*v-at;K[_]=It*b,K[p]=lt*y,K[f]=D,h.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[f]=C>0?1:-1,c.push(K.x,K.y,K.z),u.push(mt/A),u.push(1-Q/k),$+=1}}for(let Q=0;Q<k;Q++)for(let lt=0;lt<A;lt++){const mt=d+lt+j*Q,It=d+lt+j*(Q+1),G=d+(lt+1)+j*(Q+1),nt=d+(lt+1)+j*Q;l.push(mt,It,nt),l.push(It,G,nt),X+=6}o.addGroup(m,X,tt),m+=X,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ie(s){const t={};for(let e=0;e<s.length;e++){const i=Hn(s[e]);for(const n in i)t[n]=i[n]}return t}function mu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ih(s){return s.getRenderTarget()===null?s.outputColorSpace:Qt.workingColorSpace}const gu={clone:Hn,merge:Ie};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hn(t.uniforms),this.uniformsGroups=mu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class nh extends le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=xi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new I,No=new At,Uo=new At;class Ne extends nh{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zn*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zn*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,No,Uo),e.subVectors(Uo,No)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ns*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/h,n*=a.width/l,i*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const bn=-90,Sn=1;class vu extends le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Ne(bn,Sn,t,e);n.layers=this.layers,this.add(n);const r=new Ne(bn,Sn,t,e);r.layers=this.layers,this.add(r);const a=new Ne(bn,Sn,t,e);a.layers=this.layers,this.add(a);const o=new Ne(bn,Sn,t,e);o.layers=this.layers,this.add(o);const l=new Ne(bn,Sn,t,e);l.layers=this.layers,this.add(l);const h=new Ne(bn,Sn,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(const h of e)this.remove(h);if(t===xi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$s)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,h),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,c),t.setRenderTarget(u,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class sh extends Me{constructor(t,e,i,n,r,a,o,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:Un,super(t,e,i,n,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yu extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new sh(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Le}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new cs(5,5,5),r=new Fi({name:"CubemapFromEquirect",uniforms:Hn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Oe,blending:Ni});r.uniforms.tEquirect.value=e;const a=new ze(n,r),o=e.minFilter;return e.minFilter===_i&&(e.minFilter=Le),new vu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}const Ir=new I,Mu=new I,bu=new Vt;class Ci{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Ir.subVectors(i,e).cross(Mu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ir),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||bu.getNormalMatrix(t),n=this.coplanarPoint(Ir).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new oi,Ns=new I;class ga{constructor(t=new Ci,e=new Ci,i=new Ci,n=new Ci,r=new Ci,a=new Ci){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=xi){const i=this.planes,n=t.elements,r=n[0],a=n[1],o=n[2],l=n[3],h=n[4],c=n[5],u=n[6],d=n[7],m=n[8],g=n[9],_=n[10],p=n[11],f=n[12],b=n[13],y=n[14],E=n[15];if(i[0].setComponents(l-r,d-h,p-m,E-f).normalize(),i[1].setComponents(l+r,d+h,p+m,E+f).normalize(),i[2].setComponents(l+a,d+c,p+g,E+b).normalize(),i[3].setComponents(l-a,d-c,p-g,E-b).normalize(),i[4].setComponents(l-o,d-u,p-_,E-y).normalize(),e===xi)i[5].setComponents(l+o,d+u,p+_,E+y).normalize();else if(e===$s)i[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Ns.x=n.normal.x>0?t.max.x:t.min.x,Ns.y=n.normal.y>0?t.max.y:t.min.y,Ns.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rh(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Su(s,t){const e=t.isWebGL2,i=new WeakMap;function n(h,c){const u=h.array,d=h.usage,m=u.byteLength,g=s.createBuffer();s.bindBuffer(c,g),s.bufferData(c,u,d),h.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:h.version,size:m}}function r(h,c,u){const d=c.array,m=c._updateRange,g=c.updateRanges;if(s.bindBuffer(u,h),m.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const f=g[_];e?s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const c=i.get(h);c&&(s.deleteBuffer(c.buffer),i.delete(h))}function l(h,c){if(h.isGLBufferAttribute){const d=i.get(h);(!d||d.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const u=i.get(h);if(u===void 0)i.set(h,n(h,c));else if(u.version<h.version){if(u.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,h,c),u.version=h.version}}return{get:a,remove:o,update:l}}class er extends Ye{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),h=o+1,c=l+1,u=t/o,d=e/l,m=[],g=[],_=[],p=[];for(let f=0;f<c;f++){const b=f*d-a;for(let y=0;y<h;y++){const E=y*u-r;g.push(E,-b,0),_.push(0,0,1),p.push(y/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){const y=b+h*f,E=b+h*(f+1),P=b+1+h*(f+1),C=b+1+h*f;m.push(y,E,C),m.push(E,P,C)}this.setIndex(m),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(_,3)),this.setAttribute("uv",new He(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.width,t.height,t.widthSegments,t.heightSegments)}}var Eu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Au=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ru=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Du=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Nu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ou=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ku=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ku=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$u=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,td="gl_FragColor = linearToOutputTexel( gl_FragColor );",ed=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,id=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ud=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_d=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ed=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Td=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$d=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ef=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,af=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,of=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,lf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,df=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ff=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_f=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ef=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,If=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Df=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Of=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ep=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,np=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:Eu,alphahash_pars_fragment:Tu,alphamap_fragment:wu,alphamap_pars_fragment:Au,alphatest_fragment:Ru,alphatest_pars_fragment:Cu,aomap_fragment:Lu,aomap_pars_fragment:Pu,batching_pars_vertex:Iu,batching_vertex:Du,begin_vertex:Nu,beginnormal_vertex:Uu,bsdfs:Ou,iridescence_fragment:Fu,bumpmap_pars_fragment:ku,clipping_planes_fragment:Bu,clipping_planes_pars_fragment:zu,clipping_planes_pars_vertex:Hu,clipping_planes_vertex:Gu,color_fragment:Vu,color_pars_fragment:Wu,color_pars_vertex:Xu,color_vertex:ju,common:Yu,cube_uv_reflection_fragment:qu,defaultnormal_vertex:Ku,displacementmap_pars_vertex:Zu,displacementmap_vertex:$u,emissivemap_fragment:Qu,emissivemap_pars_fragment:Ju,colorspace_fragment:td,colorspace_pars_fragment:ed,envmap_fragment:id,envmap_common_pars_fragment:nd,envmap_pars_fragment:sd,envmap_pars_vertex:rd,envmap_physical_pars_fragment:_d,envmap_vertex:ad,fog_vertex:od,fog_pars_vertex:ld,fog_fragment:hd,fog_pars_fragment:cd,gradientmap_pars_fragment:ud,lightmap_fragment:dd,lightmap_pars_fragment:fd,lights_lambert_fragment:pd,lights_lambert_pars_fragment:md,lights_pars_begin:gd,lights_toon_fragment:xd,lights_toon_pars_fragment:vd,lights_phong_fragment:yd,lights_phong_pars_fragment:Md,lights_physical_fragment:bd,lights_physical_pars_fragment:Sd,lights_fragment_begin:Ed,lights_fragment_maps:Td,lights_fragment_end:wd,logdepthbuf_fragment:Ad,logdepthbuf_pars_fragment:Rd,logdepthbuf_pars_vertex:Cd,logdepthbuf_vertex:Ld,map_fragment:Pd,map_pars_fragment:Id,map_particle_fragment:Dd,map_particle_pars_fragment:Nd,metalnessmap_fragment:Ud,metalnessmap_pars_fragment:Od,morphinstance_vertex:Fd,morphcolor_vertex:kd,morphnormal_vertex:Bd,morphtarget_pars_vertex:zd,morphtarget_vertex:Hd,normal_fragment_begin:Gd,normal_fragment_maps:Vd,normal_pars_fragment:Wd,normal_pars_vertex:Xd,normal_vertex:jd,normalmap_pars_fragment:Yd,clearcoat_normal_fragment_begin:qd,clearcoat_normal_fragment_maps:Kd,clearcoat_pars_fragment:Zd,iridescence_pars_fragment:$d,opaque_fragment:Qd,packing:Jd,premultiplied_alpha_fragment:tf,project_vertex:ef,dithering_fragment:nf,dithering_pars_fragment:sf,roughnessmap_fragment:rf,roughnessmap_pars_fragment:af,shadowmap_pars_fragment:of,shadowmap_pars_vertex:lf,shadowmap_vertex:hf,shadowmask_pars_fragment:cf,skinbase_vertex:uf,skinning_pars_vertex:df,skinning_vertex:ff,skinnormal_vertex:pf,specularmap_fragment:mf,specularmap_pars_fragment:gf,tonemapping_fragment:_f,tonemapping_pars_fragment:xf,transmission_fragment:vf,transmission_pars_fragment:yf,uv_pars_fragment:Mf,uv_pars_vertex:bf,uv_vertex:Sf,worldpos_vertex:Ef,background_vert:Tf,background_frag:wf,backgroundCube_vert:Af,backgroundCube_frag:Rf,cube_vert:Cf,cube_frag:Lf,depth_vert:Pf,depth_frag:If,distanceRGBA_vert:Df,distanceRGBA_frag:Nf,equirect_vert:Uf,equirect_frag:Of,linedashed_vert:Ff,linedashed_frag:kf,meshbasic_vert:Bf,meshbasic_frag:zf,meshlambert_vert:Hf,meshlambert_frag:Gf,meshmatcap_vert:Vf,meshmatcap_frag:Wf,meshnormal_vert:Xf,meshnormal_frag:jf,meshphong_vert:Yf,meshphong_frag:qf,meshphysical_vert:Kf,meshphysical_frag:Zf,meshtoon_vert:$f,meshtoon_frag:Qf,points_vert:Jf,points_frag:tp,shadow_vert:ep,shadow_frag:ip,sprite_vert:np,sprite_frag:sp},ct={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},ni={basic:{uniforms:Ie([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ie([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ie([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ie([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ie([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ie([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ie([ct.points,ct.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ie([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ie([ct.common,ct.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ie([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ie([ct.sprite,ct.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ie([ct.common,ct.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ie([ct.lights,ct.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};ni.physical={uniforms:Ie([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Us={r:0,b:0,g:0},Xi=new ii,rp=new Wt;function ap(s,t,e,i,n,r,a){const o=new Mt(0);let l=r===!0?0:1,h,c,u=null,d=0,m=null;function g(p,f){let b=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?e:t).get(y)),y===null?_(o,l):y&&y.isColor&&(_(y,1),b=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||b)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Js)?(c===void 0&&(c=new ze(new cs(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Hn(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Xi.copy(f.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rp.makeRotationFromEuler(Xi)),c.material.toneMapped=Qt.getTransfer(y.colorSpace)!==ae,(u!==y||d!==y.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,m=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new ze(new er(2,2),new Fi({name:"BackgroundMaterial",uniforms:Hn(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(y.colorSpace)!==ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null))}function _(p,f){p.getRGB(Us,ih(s)),i.buffers.color.setClear(Us.r,Us.g,Us.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function op(s,t,e,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=p(null);let h=l,c=!1;function u(D,j,W,$,X){let K=!1;if(a){const Q=_($,W,j);h!==Q&&(h=Q,m(h.object)),K=f(D,$,W,X),K&&b(D,$,W,X)}else{const Q=j.wireframe===!0;(h.geometry!==$.id||h.program!==W.id||h.wireframe!==Q)&&(h.geometry=$.id,h.program=W.id,h.wireframe=Q,K=!0)}X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(K||c)&&(c=!1,k(D,j,W,$),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function d(){return i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(D){return i.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,j,W){const $=W.wireframe===!0;let X=o[D.id];X===void 0&&(X={},o[D.id]=X);let K=X[j.id];K===void 0&&(K={},X[j.id]=K);let Q=K[$];return Q===void 0&&(Q=p(d()),K[$]=Q),Q}function p(D){const j=[],W=[],$=[];for(let X=0;X<n;X++)j[X]=0,W[X]=0,$[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:W,attributeDivisors:$,object:D,attributes:{},index:null}}function f(D,j,W,$){const X=h.attributes,K=j.attributes;let Q=0;const lt=W.getAttributes();for(const mt in lt)if(lt[mt].location>=0){const G=X[mt];let nt=K[mt];if(nt===void 0&&(mt==="instanceMatrix"&&D.instanceMatrix&&(nt=D.instanceMatrix),mt==="instanceColor"&&D.instanceColor&&(nt=D.instanceColor)),G===void 0||G.attribute!==nt||nt&&G.data!==nt.data)return!0;Q++}return h.attributesNum!==Q||h.index!==$}function b(D,j,W,$){const X={},K=j.attributes;let Q=0;const lt=W.getAttributes();for(const mt in lt)if(lt[mt].location>=0){let G=K[mt];G===void 0&&(mt==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),mt==="instanceColor"&&D.instanceColor&&(G=D.instanceColor));const nt={};nt.attribute=G,G&&G.data&&(nt.data=G.data),X[mt]=nt,Q++}h.attributes=X,h.attributesNum=Q,h.index=$}function y(){const D=h.newAttributes;for(let j=0,W=D.length;j<W;j++)D[j]=0}function E(D){P(D,0)}function P(D,j){const W=h.newAttributes,$=h.enabledAttributes,X=h.attributeDivisors;W[D]=1,$[D]===0&&(s.enableVertexAttribArray(D),$[D]=1),X[D]!==j&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,j),X[D]=j)}function C(){const D=h.newAttributes,j=h.enabledAttributes;for(let W=0,$=j.length;W<$;W++)j[W]!==D[W]&&(s.disableVertexAttribArray(W),j[W]=0)}function A(D,j,W,$,X,K,Q){Q===!0?s.vertexAttribIPointer(D,j,W,X,K):s.vertexAttribPointer(D,j,W,$,X,K)}function k(D,j,W,$){if(i.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const X=$.attributes,K=W.getAttributes(),Q=j.defaultAttributeValues;for(const lt in K){const mt=K[lt];if(mt.location>=0){let It=X[lt];if(It===void 0&&(lt==="instanceMatrix"&&D.instanceMatrix&&(It=D.instanceMatrix),lt==="instanceColor"&&D.instanceColor&&(It=D.instanceColor)),It!==void 0){const G=It.normalized,nt=It.itemSize,pt=e.get(It);if(pt===void 0)continue;const Lt=pt.buffer,bt=pt.type,gt=pt.bytesPerElement,Zt=i.isWebGL2===!0&&(bt===s.INT||bt===s.UNSIGNED_INT||It.gpuType===Ol);if(It.isInterleavedBufferAttribute){const Ct=It.data,U=Ct.stride,me=It.offset;if(Ct.isInstancedInterleavedBuffer){for(let Et=0;Et<mt.locationSize;Et++)P(mt.location+Et,Ct.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let Et=0;Et<mt.locationSize;Et++)E(mt.location+Et);s.bindBuffer(s.ARRAY_BUFFER,Lt);for(let Et=0;Et<mt.locationSize;Et++)A(mt.location+Et,nt/mt.locationSize,bt,G,U*gt,(me+nt/mt.locationSize*Et)*gt,Zt)}else{if(It.isInstancedBufferAttribute){for(let Ct=0;Ct<mt.locationSize;Ct++)P(mt.location+Ct,It.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let Ct=0;Ct<mt.locationSize;Ct++)E(mt.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,Lt);for(let Ct=0;Ct<mt.locationSize;Ct++)A(mt.location+Ct,nt/mt.locationSize,bt,G,nt*gt,nt/mt.locationSize*Ct*gt,Zt)}}else if(Q!==void 0){const G=Q[lt];if(G!==void 0)switch(G.length){case 2:s.vertexAttrib2fv(mt.location,G);break;case 3:s.vertexAttrib3fv(mt.location,G);break;case 4:s.vertexAttrib4fv(mt.location,G);break;default:s.vertexAttrib1fv(mt.location,G)}}}}C()}function tt(){at();for(const D in o){const j=o[D];for(const W in j){const $=j[W];for(const X in $)g($[X].object),delete $[X];delete j[W]}delete o[D]}}function v(D){if(o[D.id]===void 0)return;const j=o[D.id];for(const W in j){const $=j[W];for(const X in $)g($[X].object),delete $[X];delete j[W]}delete o[D.id]}function R(D){for(const j in o){const W=o[j];if(W[D.id]===void 0)continue;const $=W[D.id];for(const X in $)g($[X].object),delete $[X];delete W[D.id]}}function at(){it(),c=!0,h!==l&&(h=l,m(h.object))}function it(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:at,resetDefaultState:it,dispose:tt,releaseStatesOfGeometry:v,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:E,disableUnusedAttributes:C}}function lp(s,t,e,i){const n=i.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),e.update(u,r,1)}function l(c,u,d){if(d===0)return;let m,g;if(n)m=s,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,c,u,d),e.update(u,r,d)}function h(c,u,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(c[g],u[g]);else{m.multiDrawArraysWEBGL(r,c,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=h}function hp(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const h=a||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,E=a||t.has("OES_texture_float"),P=y&&E,C=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:n,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:b,vertexTextures:y,floatFragmentTextures:E,floatVertexTextures:P,maxSamples:C}}function cp(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new Ci,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||i!==0||n;return n=d,i=u.length,m},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=s.get(u);if(!n||g===null||g.length===0||r&&!p)r?c(null):h();else{const b=r?0:i,y=b*4;let E=f.clippingState||null;l.value=E,E=c(g,d,y,m);for(let P=0;P!==y;++P)E[P]=e[P];f.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,d,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,E=m;y!==_;++y,E+=4)a.copy(u[y]).applyMatrix4(b,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function up(s){let t=new WeakMap;function e(a,o){return o===Qr?a.mapping=Un:o===Jr&&(a.mapping=On),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qr||o===Jr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new yu(l.height);return h.fromEquirectangularTexture(s,a),t.set(a,h),a.addEventListener("dispose",n),e(h.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class _a extends nh{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const An=4,Oo=[.125,.215,.35,.446,.526,.582],Zi=20,Dr=new _a,Fo=new Mt;let Nr=null,Ur=0,Or=0;const qi=(1+Math.sqrt(5))/2,En=1/qi,ko=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,qi,En),new I(0,qi,-En),new I(En,0,qi),new I(-En,0,qi),new I(qi,En,0),new I(-qi,En,0)];class Bo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Nr=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ho(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nr,Ur,Or),t.scissorTest=!1,Os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Un||t.mapping===On?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nr=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:as,format:je,colorSpace:Ee,depthBuffer:!1},n=zo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zo(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dp(r)),this._blurMaterial=fp(r,t,e)}return n}_compileMaterial(t){const e=new ze(this._lodPlanes[0],t);this._renderer.compile(e,Dr)}_sceneToCubeUV(t,e,i,n){const o=new Ne(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(Fo),c.toneMapping=Ui,c.autoClear=!1;const m=new $i({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new ze(new cs,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Fo),_=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(o.up.set(0,l[f],0),o.lookAt(h[f],0,0)):b===1?(o.up.set(0,0,l[f]),o.lookAt(0,h[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,h[f]));const y=this._cubeSize;Os(n,b*y,f>2?y:0,y,y),c.setRenderTarget(n),_&&c.render(g,o),c.render(t,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=u,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Un||t.mapping===On;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Go()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ho());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new ze(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Os(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Dr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=ko[(n-1)%ko.length];this._blur(t,n-1,n,r,a)}e.autoClear=i}_blur(t,e,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new ze(this._lodPlanes[n],h),d=h.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Zi-1),_=r/g,p=isFinite(r)?1+Math.floor(c*_):Zi;p>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Zi}`);const f=[];let b=0;for(let A=0;A<Zi;++A){const k=A/_,tt=Math.exp(-k*k/2);f.push(tt),A===0?b+=tt:A<p&&(b+=2*tt)}for(let A=0;A<f.length;A++)f[A]=f[A]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const E=this._sizeLods[n],P=3*E*(n>y-An?n-y+An:0),C=4*(this._cubeSize-E);Os(e,P,C,3*E,2*E),l.setRenderTarget(e),l.render(u,Dr)}}function dp(s){const t=[],e=[],i=[];let n=s;const r=s-An+1+Oo.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);e.push(o);let l=1/o;a>s-An?l=Oo[a-s+An-1]:a===0&&(l=0),i.push(l);const h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],m=6,g=6,_=3,p=2,f=1,b=new Float32Array(_*g*m),y=new Float32Array(p*g*m),E=new Float32Array(f*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,k=C>2?0:-1,tt=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];b.set(tt,_*g*C),y.set(d,p*g*C);const v=[C,C,C,C,C,C];E.set(v,f*g*C)}const P=new Ye;P.setAttribute("position",new Ue(b,_)),P.setAttribute("uv",new Ue(y,p)),P.setAttribute("faceIndex",new Ue(E,f)),t.push(P),n>An&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function zo(s,t,e){const i=new sn(s,t,e);return i.texture.mapping=Js,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Os(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function fp(s,t,e){const i=new Float32Array(Zi),n=new I(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Ho(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Go(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function xa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pp(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,h=l===Qr||l===Jr,c=l===Un||l===On;if(h||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Bo(s)),u=h?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(h&&u&&u.height>0||c&&u&&n(u)){e===null&&(e=new Bo(s));const d=h?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function n(o){let l=0;const h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function mp(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function gp(s,t,e,i){const n={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}d.removeEventListener("dispose",a),delete n[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],s.ARRAY_BUFFER)}}function h(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let y=0,E=b.length;y<E;y+=3){const P=b[y+0],C=b[y+1],A=b[y+2];d.push(P,C,C,A,A,P)}}else if(g!==void 0){const b=g.array;_=g.version;for(let y=0,E=b.length/3-1;y<E;y+=3){const P=y+0,C=y+1,A=y+2;d.push(P,C,C,A,A,P)}}else return;const p=new(Yl(d)?eh:th)(d,1);p.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,p)}function c(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function _p(s,t,e,i){const n=i.isWebGL2;let r;function a(m){r=m}let o,l;function h(m){o=m.type,l=m.bytesPerElement}function c(m,g){s.drawElements(r,g,o,m*l),e.update(g,r,1)}function u(m,g,_){if(_===0)return;let p,f;if(n)p=s,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,o,m*l,_),e.update(g,r,_)}function d(m,g,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,_);let f=0;for(let b=0;b<_;b++)f+=g[b];e.update(f,r,1)}}this.setMode=a,this.setIndex=h,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function xp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function vp(s,t){return s[0]-t[0]}function yp(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Mp(s,t,e){const i={},n=new Float32Array(8),r=new WeakMap,a=new ne,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function l(h,c,u){const d=h.morphTargetInfluences;if(t.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(c);if(p===void 0||p.count!==_){let it=function(){R.dispose(),r.delete(c),c.removeEventListener("dispose",it)};var m=it;p!==void 0&&p.texture.dispose();const f=c.morphAttributes.position!==void 0,b=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],P=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let A=0;f===!0&&(A=1),b===!0&&(A=2),y===!0&&(A=3);let k=c.attributes.position.count*A,tt=1;k>t.maxTextureSize&&(tt=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const v=new Float32Array(k*tt*4*_),R=new $l(v,k,tt,_);R.type=$e,R.needsUpdate=!0;const at=A*4;for(let D=0;D<_;D++){const j=E[D],W=P[D],$=C[D],X=k*tt*4*D;for(let K=0;K<j.count;K++){const Q=K*at;f===!0&&(a.fromBufferAttribute(j,K),v[X+Q+0]=a.x,v[X+Q+1]=a.y,v[X+Q+2]=a.z,v[X+Q+3]=0),b===!0&&(a.fromBufferAttribute(W,K),v[X+Q+4]=a.x,v[X+Q+5]=a.y,v[X+Q+6]=a.z,v[X+Q+7]=0),y===!0&&(a.fromBufferAttribute($,K),v[X+Q+8]=a.x,v[X+Q+9]=a.y,v[X+Q+10]=a.z,v[X+Q+11]=$.itemSize===4?a.w:1)}}p={count:_,texture:R,size:new At(k,tt)},r.set(c,p),c.addEventListener("dispose",it)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",h.morphTexture,e);else{let f=0;for(let y=0;y<d.length;y++)f+=d[y];const b=c.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",b),u.getUniforms().setValue(s,"morphTargetInfluences",d)}u.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=i[c.id];if(_===void 0||_.length!==g){_=[];for(let E=0;E<g;E++)_[E]=[E,0];i[c.id]=_}for(let E=0;E<g;E++){const P=_[E];P[0]=E,P[1]=d[E]}_.sort(yp);for(let E=0;E<8;E++)E<g&&_[E][1]?(o[E][0]=_[E][0],o[E][1]=_[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(vp);const p=c.morphAttributes.position,f=c.morphAttributes.normal;let b=0;for(let E=0;E<8;E++){const P=o[E],C=P[0],A=P[1];C!==Number.MAX_SAFE_INTEGER&&A?(p&&c.getAttribute("morphTarget"+E)!==p[C]&&c.setAttribute("morphTarget"+E,p[C]),f&&c.getAttribute("morphNormal"+E)!==f[C]&&c.setAttribute("morphNormal"+E,f[C]),n[E]=A,b+=A):(p&&c.hasAttribute("morphTarget"+E)===!0&&c.deleteAttribute("morphTarget"+E),f&&c.hasAttribute("morphNormal"+E)===!0&&c.deleteAttribute("morphNormal"+E),n[E]=0)}const y=c.morphTargetsRelative?1:1-b;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function bp(s,t,e,i){let n=new WeakMap;function r(l){const h=i.render.frame,c=l.geometry,u=t.get(l,c);if(n.get(u)!==h&&(t.update(u),n.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==h&&(d.update(),n.set(d,h))}return u}function a(){n=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}class ah extends Me{constructor(t,e,i,n,r,a,o,l,h,c){if(c=c!==void 0?c:en,c!==en&&c!==kn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===en&&(i=Ii),i===void 0&&c===kn&&(i=tn),super(null,n,r,a,o,l,c,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ye,this.minFilter=l!==void 0?l:ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const oh=new Me,lh=new ah(1,1);lh.compareFunction=Xl;const hh=new $l,ch=new nu,uh=new sh,Vo=[],Wo=[],Xo=new Float32Array(16),jo=new Float32Array(9),Yo=new Float32Array(4);function Wn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=Vo[n];if(r===void 0&&(r=new Float32Array(n),Vo[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ge(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function _e(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function ir(s,t){let e=Wo[t];e===void 0&&(e=new Int32Array(t),Wo[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Sp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2fv(this.addr,t),_e(e,t)}}function Tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;s.uniform3fv(this.addr,t),_e(e,t)}}function wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4fv(this.addr,t),_e(e,t)}}function Ap(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;Yo.set(i),s.uniformMatrix2fv(this.addr,!1,Yo),_e(e,i)}}function Rp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;jo.set(i),s.uniformMatrix3fv(this.addr,!1,jo),_e(e,i)}}function Cp(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,i))return;Xo.set(i),s.uniformMatrix4fv(this.addr,!1,Xo),_e(e,i)}}function Lp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Pp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2iv(this.addr,t),_e(e,t)}}function Ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3iv(this.addr,t),_e(e,t)}}function Dp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4iv(this.addr,t),_e(e,t)}}function Np(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2uiv(this.addr,t),_e(e,t)}}function Op(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3uiv(this.addr,t),_e(e,t)}}function Fp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4uiv(this.addr,t),_e(e,t)}}function kp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);const r=this.type===s.SAMPLER_2D_SHADOW?lh:oh;e.setTexture2D(t||r,n)}function Bp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||ch,n)}function zp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||uh,n)}function Hp(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||hh,n)}function Gp(s){switch(s){case 5126:return Sp;case 35664:return Ep;case 35665:return Tp;case 35666:return wp;case 35674:return Ap;case 35675:return Rp;case 35676:return Cp;case 5124:case 35670:return Lp;case 35667:case 35671:return Pp;case 35668:case 35672:return Ip;case 35669:case 35673:return Dp;case 5125:return Np;case 36294:return Up;case 36295:return Op;case 36296:return Fp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Hp}}function Vp(s,t){s.uniform1fv(this.addr,t)}function Wp(s,t){const e=Wn(t,this.size,2);s.uniform2fv(this.addr,e)}function Xp(s,t){const e=Wn(t,this.size,3);s.uniform3fv(this.addr,e)}function jp(s,t){const e=Wn(t,this.size,4);s.uniform4fv(this.addr,e)}function Yp(s,t){const e=Wn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function qp(s,t){const e=Wn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Kp(s,t){const e=Wn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Zp(s,t){s.uniform1iv(this.addr,t)}function $p(s,t){s.uniform2iv(this.addr,t)}function Qp(s,t){s.uniform3iv(this.addr,t)}function Jp(s,t){s.uniform4iv(this.addr,t)}function tm(s,t){s.uniform1uiv(this.addr,t)}function em(s,t){s.uniform2uiv(this.addr,t)}function im(s,t){s.uniform3uiv(this.addr,t)}function nm(s,t){s.uniform4uiv(this.addr,t)}function sm(s,t,e){const i=this.cache,n=t.length,r=ir(e,n);ge(i,r)||(s.uniform1iv(this.addr,r),_e(i,r));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||oh,r[a])}function rm(s,t,e){const i=this.cache,n=t.length,r=ir(e,n);ge(i,r)||(s.uniform1iv(this.addr,r),_e(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||ch,r[a])}function am(s,t,e){const i=this.cache,n=t.length,r=ir(e,n);ge(i,r)||(s.uniform1iv(this.addr,r),_e(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||uh,r[a])}function om(s,t,e){const i=this.cache,n=t.length,r=ir(e,n);ge(i,r)||(s.uniform1iv(this.addr,r),_e(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||hh,r[a])}function lm(s){switch(s){case 5126:return Vp;case 35664:return Wp;case 35665:return Xp;case 35666:return jp;case 35674:return Yp;case 35675:return qp;case 35676:return Kp;case 5124:case 35670:return Zp;case 35667:case 35671:return $p;case 35668:case 35672:return Qp;case 35669:case 35673:return Jp;case 5125:return tm;case 36294:return em;case 36295:return im;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return om}}class hm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Gp(e.type)}}class cm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lm(e.type)}}class um{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const Fr=/(\w+)(\])?(\[|\.)?/g;function qo(s,t){s.seq.push(t),s.map[t.id]=t}function dm(s,t,e){const i=s.name,n=i.length;for(Fr.lastIndex=0;;){const r=Fr.exec(i),a=Fr.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===n){qo(e,h===void 0?new hm(o,s,t):new cm(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new um(o),qo(e,u)),e=u}}}class Xs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),a=t.getUniformLocation(e,r.name);dm(r,a,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function Ko(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const fm=37297;let pm=0;function mm(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function gm(s){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(s);let i;switch(t===e?i="":t===Zs&&e===Ks?i="LinearDisplayP3ToLinearSRGB":t===Ks&&e===Zs&&(i="LinearSRGBToLinearDisplayP3"),s){case Ee:case tr:return[i,"LinearTransferOETF"];case De:case pa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Zo(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+mm(s.getShaderSource(t),a)}else return n}function _m(s,t){const e=gm(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function xm(s,t){let e;switch(t){case uc:e="Linear";break;case dc:e="Reinhard";break;case fc:e="OptimizedCineon";break;case pc:e="ACESFilmic";break;case gc:e="AgX";break;case _c:e="Neutral";break;case mc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function vm(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rn).join(`
`)}function ym(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rn).join(`
`)}function Mm(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function bm(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Rn(s){return s!==""}function $o(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ra(s){return s.replace(Sm,Tm)}const Em=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Tm(s,t){let e=Gt[t];if(e===void 0){const i=Em.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ra(e)}const wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jo(s){return s.replace(wm,Am)}function Am(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function tl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(t+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Nl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Bh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gi&&(t="SHADOWMAP_TYPE_VSM"),t}function Cm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Un:case On:t="ENVMAP_TYPE_CUBE";break;case Js:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case On:t="ENVMAP_MODE_REFRACTION";break}return t}function Pm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ua:t="ENVMAP_BLENDING_MULTIPLY";break;case hc:t="ENVMAP_BLENDING_MIX";break;case cc:t="ENVMAP_BLENDING_ADD";break}return t}function Im(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Dm(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Rm(e),h=Cm(e),c=Lm(e),u=Pm(e),d=Im(e),m=e.isWebGL2?"":vm(e),g=ym(e),_=Mm(r),p=n.createProgram();let f,b,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rn).join(`
`),f.length>0&&(f+=`
`),b=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rn).join(`
`),b.length>0&&(b+=`
`)):(f=[tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rn).join(`
`),b=[m,tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ui?"#define TONE_MAPPING":"",e.toneMapping!==Ui?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Ui?xm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,_m("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rn).join(`
`)),a=ra(a),a=$o(a,e),a=Qo(a,e),o=ra(o),o=$o(o,e),o=Qo(o,e),a=Jo(a),o=Jo(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,b=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===go?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const E=y+f+a,P=y+b+o,C=Ko(n,n.VERTEX_SHADER,E),A=Ko(n,n.FRAGMENT_SHADER,P);n.attachShader(p,C),n.attachShader(p,A),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function k(at){if(s.debug.checkShaderErrors){const it=n.getProgramInfoLog(p).trim(),D=n.getShaderInfoLog(C).trim(),j=n.getShaderInfoLog(A).trim();let W=!0,$=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,C,A);else{const X=Zo(n,C,"vertex"),K=Zo(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+at.name+`
Material Type: `+at.type+`

Program Info Log: `+it+`
`+X+`
`+K)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(D===""||j==="")&&($=!1);$&&(at.diagnostics={runnable:W,programLog:it,vertexShader:{log:D,prefix:f},fragmentShader:{log:j,prefix:b}})}n.deleteShader(C),n.deleteShader(A),tt=new Xs(n,p),v=bm(n,p)}let tt;this.getUniforms=function(){return tt===void 0&&k(this),tt};let v;this.getAttributes=function(){return v===void 0&&k(this),v};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=n.getProgramParameter(p,fm)),R},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pm++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=A,this}let Nm=0;class Um{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Om(t),e.set(t,i)),i}}class Om{constructor(t){this.id=Nm++,this.code=t,this.usedTimes=0}}function Fm(s,t,e,i,n,r,a){const o=new Ql,l=new Um,h=new Set,c=[],u=n.isWebGL2,d=n.logarithmicDepthBuffer,m=n.vertexTextures;let g=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return h.add(v),v===0?"uv":`uv${v}`}function f(v,R,at,it,D){const j=it.fog,W=D.geometry,$=v.isMeshStandardMaterial?it.environment:null,X=(v.isMeshStandardMaterial?e:t).get(v.envMap||$),K=X&&X.mapping===Js?X.image.height:null,Q=_[v.type];v.precision!==null&&(g=n.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,mt=lt!==void 0?lt.length:0;let It=0;W.morphAttributes.position!==void 0&&(It=1),W.morphAttributes.normal!==void 0&&(It=2),W.morphAttributes.color!==void 0&&(It=3);let G,nt,pt,Lt;if(Q){const Jt=ni[Q];G=Jt.vertexShader,nt=Jt.fragmentShader}else G=v.vertexShader,nt=v.fragmentShader,l.update(v),pt=l.getVertexShaderID(v),Lt=l.getFragmentShaderID(v);const bt=s.getRenderTarget(),gt=D.isInstancedMesh===!0,Zt=D.isBatchedMesh===!0,Ct=!!v.map,U=!!v.matcap,me=!!X,Et=!!v.aoMap,Ft=!!v.lightMap,Tt=!!v.bumpMap,qt=!!v.normalMap,kt=!!v.displacementMap,zt=!!v.emissiveMap,se=!!v.metalnessMap,T=!!v.roughnessMap,x=v.anisotropy>0,V=v.clearcoat>0,Y=v.iridescence>0,st=v.sheen>0,J=v.transmission>0,Dt=x&&!!v.anisotropyMap,wt=V&&!!v.clearcoatMap,ht=V&&!!v.clearcoatNormalMap,ut=V&&!!v.clearcoatRoughnessMap,Nt=Y&&!!v.iridescenceMap,ot=Y&&!!v.iridescenceThicknessMap,ce=st&&!!v.sheenColorMap,Xt=st&&!!v.sheenRoughnessMap,St=!!v.specularMap,_t=!!v.specularColorMap,vt=!!v.specularIntensityMap,w=J&&!!v.transmissionMap,q=J&&!!v.thicknessMap,xt=!!v.gradientMap,L=!!v.alphaMap,rt=v.alphaTest>0,O=!!v.alphaHash,et=!!v.extensions;let dt=Ui;v.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(dt=s.toneMapping);const Yt={isWebGL2:u,shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:G,fragmentShader:nt,defines:v.defines,customVertexShaderID:pt,customFragmentShaderID:Lt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Zt,instancing:gt,instancingColor:gt&&D.instanceColor!==null,instancingMorph:gt&&D.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:bt===null?s.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Ee,alphaToCoverage:!!v.alphaToCoverage,map:Ct,matcap:U,envMap:me,envMapMode:me&&X.mapping,envMapCubeUVHeight:K,aoMap:Et,lightMap:Ft,bumpMap:Tt,normalMap:qt,displacementMap:m&&kt,emissiveMap:zt,normalMapObjectSpace:qt&&v.normalMapType===Lc,normalMapTangentSpace:qt&&v.normalMapType===fa,metalnessMap:se,roughnessMap:T,anisotropy:x,anisotropyMap:Dt,clearcoat:V,clearcoatMap:wt,clearcoatNormalMap:ht,clearcoatRoughnessMap:ut,iridescence:Y,iridescenceMap:Nt,iridescenceThicknessMap:ot,sheen:st,sheenColorMap:ce,sheenRoughnessMap:Xt,specularMap:St,specularColorMap:_t,specularIntensityMap:vt,transmission:J,transmissionMap:w,thicknessMap:q,gradientMap:xt,opaque:v.transparent===!1&&v.blending===In&&v.alphaToCoverage===!1,alphaMap:L,alphaTest:rt,alphaHash:O,combine:v.combine,mapUv:Ct&&p(v.map.channel),aoMapUv:Et&&p(v.aoMap.channel),lightMapUv:Ft&&p(v.lightMap.channel),bumpMapUv:Tt&&p(v.bumpMap.channel),normalMapUv:qt&&p(v.normalMap.channel),displacementMapUv:kt&&p(v.displacementMap.channel),emissiveMapUv:zt&&p(v.emissiveMap.channel),metalnessMapUv:se&&p(v.metalnessMap.channel),roughnessMapUv:T&&p(v.roughnessMap.channel),anisotropyMapUv:Dt&&p(v.anisotropyMap.channel),clearcoatMapUv:wt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ht&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&p(v.sheenRoughnessMap.channel),specularMapUv:St&&p(v.specularMap.channel),specularColorMapUv:_t&&p(v.specularColorMap.channel),specularIntensityMapUv:vt&&p(v.specularIntensityMap.channel),transmissionMapUv:w&&p(v.transmissionMap.channel),thicknessMapUv:q&&p(v.thicknessMap.channel),alphaMapUv:L&&p(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(qt||x),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!W.attributes.uv&&(Ct||L),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:It,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&at.length>0,shadowMapType:s.shadowMap.type,toneMapping:dt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ct&&v.map.isVideoTexture===!0&&Qt.getTransfer(v.map.colorSpace)===ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===si,flipSided:v.side===Oe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:et&&v.extensions.derivatives===!0,extensionFragDepth:et&&v.extensions.fragDepth===!0,extensionDrawBuffers:et&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:et&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:et&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:et&&v.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Yt.vertexUv1s=h.has(1),Yt.vertexUv2s=h.has(2),Yt.vertexUv3s=h.has(3),h.clear(),Yt}function b(v){const R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(const at in v.defines)R.push(at),R.push(v.defines[at]);return v.isRawShaderMaterial===!1&&(y(R,v),E(R,v),R.push(s.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function y(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function E(v,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.instancingMorph&&o.enable(4),R.matcap&&o.enable(5),R.envMap&&o.enable(6),R.normalMapObjectSpace&&o.enable(7),R.normalMapTangentSpace&&o.enable(8),R.clearcoat&&o.enable(9),R.iridescence&&o.enable(10),R.alphaTest&&o.enable(11),R.vertexColors&&o.enable(12),R.vertexAlphas&&o.enable(13),R.vertexUv1s&&o.enable(14),R.vertexUv2s&&o.enable(15),R.vertexUv3s&&o.enable(16),R.vertexTangents&&o.enable(17),R.anisotropy&&o.enable(18),R.alphaHash&&o.enable(19),R.batching&&o.enable(20),v.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.alphaToCoverage&&o.enable(20),v.push(o.mask)}function P(v){const R=_[v.type];let at;if(R){const it=ni[R];at=gu.clone(it.uniforms)}else at=v.uniforms;return at}function C(v,R){let at;for(let it=0,D=c.length;it<D;it++){const j=c[it];if(j.cacheKey===R){at=j,++at.usedTimes;break}}return at===void 0&&(at=new Dm(s,R,v,r),c.push(at)),at}function A(v){if(--v.usedTimes===0){const R=c.indexOf(v);c[R]=c[c.length-1],c.pop(),v.destroy()}}function k(v){l.remove(v)}function tt(){l.dispose()}return{getParameters:f,getProgramCacheKey:b,getUniforms:P,acquireProgram:C,releaseProgram:A,releaseShaderCache:k,programs:c,dispose:tt}}function km(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function i(r,a,o){s.get(r)[a]=o}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function Bm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function el(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function il(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,m,g,_,p){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),t++,f}function o(u,d,m,g,_,p){const f=a(u,d,m,g,_,p);m.transmission>0?i.push(f):m.transparent===!0?n.push(f):e.push(f)}function l(u,d,m,g,_,p){const f=a(u,d,m,g,_,p);m.transmission>0?i.unshift(f):m.transparent===!0?n.unshift(f):e.unshift(f)}function h(u,d){e.length>1&&e.sort(u||Bm),i.length>1&&i.sort(d||el),n.length>1&&n.sort(d||el)}function c(){for(let u=t,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:c,sort:h}}function zm(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new il,s.set(i,[a])):n>=r.length?(a=new il,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Hm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Mt};break;case"SpotLight":e={position:new I,direction:new I,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Gm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Vm=0;function Wm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Xm(s,t){const e=new Hm,i=Gm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const r=new I,a=new Wt,o=new Wt;function l(c,u){let d=0,m=0,g=0;for(let at=0;at<9;at++)n.probe[at].set(0,0,0);let _=0,p=0,f=0,b=0,y=0,E=0,P=0,C=0,A=0,k=0,tt=0;c.sort(Wm);const v=u===!0?Math.PI:1;for(let at=0,it=c.length;at<it;at++){const D=c[at],j=D.color,W=D.intensity,$=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=j.r*W*v,m+=j.g*W*v,g+=j.b*W*v;else if(D.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(D.sh.coefficients[K],W);tt++}else if(D.isDirectionalLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*v),D.castShadow){const Q=D.shadow,lt=i.get(D);lt.shadowBias=Q.bias,lt.shadowNormalBias=Q.normalBias,lt.shadowRadius=Q.radius,lt.shadowMapSize=Q.mapSize,n.directionalShadow[_]=lt,n.directionalShadowMap[_]=X,n.directionalShadowMatrix[_]=D.shadow.matrix,E++}n.directional[_]=K,_++}else if(D.isSpotLight){const K=e.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(j).multiplyScalar(W*v),K.distance=$,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,n.spot[f]=K;const Q=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,Q.updateMatrices(D),D.castShadow&&k++),n.spotLightMatrix[f]=Q.matrix,D.castShadow){const lt=i.get(D);lt.shadowBias=Q.bias,lt.shadowNormalBias=Q.normalBias,lt.shadowRadius=Q.radius,lt.shadowMapSize=Q.mapSize,n.spotShadow[f]=lt,n.spotShadowMap[f]=X,C++}f++}else if(D.isRectAreaLight){const K=e.get(D);K.color.copy(j).multiplyScalar(W),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),n.rectArea[b]=K,b++}else if(D.isPointLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*v),K.distance=D.distance,K.decay=D.decay,D.castShadow){const Q=D.shadow,lt=i.get(D);lt.shadowBias=Q.bias,lt.shadowNormalBias=Q.normalBias,lt.shadowRadius=Q.radius,lt.shadowMapSize=Q.mapSize,lt.shadowCameraNear=Q.camera.near,lt.shadowCameraFar=Q.camera.far,n.pointShadow[p]=lt,n.pointShadowMap[p]=X,n.pointShadowMatrix[p]=D.shadow.matrix,P++}n.point[p]=K,p++}else if(D.isHemisphereLight){const K=e.get(D);K.skyColor.copy(D.color).multiplyScalar(W*v),K.groundColor.copy(D.groundColor).multiplyScalar(W*v),n.hemi[y]=K,y++}}b>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=g;const R=n.hash;(R.directionalLength!==_||R.pointLength!==p||R.spotLength!==f||R.rectAreaLength!==b||R.hemiLength!==y||R.numDirectionalShadows!==E||R.numPointShadows!==P||R.numSpotShadows!==C||R.numSpotMaps!==A||R.numLightProbes!==tt)&&(n.directional.length=_,n.spot.length=f,n.rectArea.length=b,n.point.length=p,n.hemi.length=y,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=C+A-k,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=tt,R.directionalLength=_,R.pointLength=p,R.spotLength=f,R.rectAreaLength=b,R.hemiLength=y,R.numDirectionalShadows=E,R.numPointShadows=P,R.numSpotShadows=C,R.numSpotMaps=A,R.numLightProbes=tt,n.version=Vm++)}function h(c,u){let d=0,m=0,g=0,_=0,p=0;const f=u.matrixWorldInverse;for(let b=0,y=c.length;b<y;b++){const E=c[b];if(E.isDirectionalLight){const P=n.directional[d];P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),d++}else if(E.isSpotLight){const P=n.spot[g];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),g++}else if(E.isRectAreaLight){const P=n.rectArea[_];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(f),o.identity(),a.copy(E.matrixWorld),a.premultiply(f),o.extractRotation(a),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const P=n.point[m];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(f),m++}else if(E.isHemisphereLight){const P=n.hemi[p];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(f),p++}}}return{setup:l,setupView:h,state:n}}function nl(s,t){const e=new Xm(s,t),i=[],n=[];function r(){i.length=0,n.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function l(u){e.setup(i,u)}function h(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o}}function jm(s,t){let e=new WeakMap;function i(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new nl(s,t),e.set(r,[l])):a>=o.length?(l=new nl(s,t),o.push(l)):l=o[a],l}function n(){e=new WeakMap}return{get:i,dispose:n}}class Ym extends ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qm extends ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Km=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $m(s,t,e){let i=new ga;const n=new At,r=new At,a=new ne,o=new Ym({depthPacking:Cc}),l=new qm,h={},c=e.maxTextureSize,u={[vi]:Oe,[Oe]:vi,[si]:si},d=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:Km,fragmentShader:Zm}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ye;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ze(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl;let f=this.type;this.render=function(C,A,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const tt=s.getRenderTarget(),v=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),at=s.state;at.setBlending(Ni),at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const it=f!==gi&&this.type===gi,D=f===gi&&this.type!==gi;for(let j=0,W=C.length;j<W;j++){const $=C[j],X=$.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);const K=X.getFrameExtents();if(n.multiply(K),r.copy(X.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(r.x=Math.floor(c/K.x),n.x=r.x*K.x,X.mapSize.x=r.x),n.y>c&&(r.y=Math.floor(c/K.y),n.y=r.y*K.y,X.mapSize.y=r.y)),X.map===null||it===!0||D===!0){const lt=this.type!==gi?{minFilter:ye,magFilter:ye}:{};X.map!==null&&X.map.dispose(),X.map=new sn(n.x,n.y,lt),X.map.texture.name=$.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const Q=X.getViewportCount();for(let lt=0;lt<Q;lt++){const mt=X.getViewport(lt);a.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),at.viewport(a),X.updateMatrices($,lt),i=X.getFrustum(),E(A,k,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===gi&&b(X,k),X.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(tt,v,R)};function b(C,A){const k=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new sn(n.x,n.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(A,null,k,d,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(A,null,k,m,_,null)}function y(C,A,k,tt){let v=null;const R=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)v=R;else if(v=k.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const at=v.uuid,it=A.uuid;let D=h[at];D===void 0&&(D={},h[at]=D);let j=D[it];j===void 0&&(j=v.clone(),D[it]=j,A.addEventListener("dispose",P)),v=j}if(v.visible=A.visible,v.wireframe=A.wireframe,tt===gi?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,k.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const at=s.properties.get(v);at.light=k}return v}function E(C,A,k,tt,v){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===gi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);const it=t.update(C),D=C.material;if(Array.isArray(D)){const j=it.groups;for(let W=0,$=j.length;W<$;W++){const X=j[W],K=D[X.materialIndex];if(K&&K.visible){const Q=y(C,K,tt,v);C.onBeforeShadow(s,C,A,k,it,Q,X),s.renderBufferDirect(k,null,it,Q,C,X),C.onAfterShadow(s,C,A,k,it,Q,X)}}}else if(D.visible){const j=y(C,D,tt,v);C.onBeforeShadow(s,C,A,k,it,j,null),s.renderBufferDirect(k,null,it,j,C,null),C.onAfterShadow(s,C,A,k,it,j,null)}}const at=C.children;for(let it=0,D=at.length;it<D;it++)E(at[it],A,k,tt,v)}function P(C){C.target.removeEventListener("dispose",P);for(const k in h){const tt=h[k],v=C.target.uuid;v in tt&&(tt[v].dispose(),delete tt[v])}}}function Qm(s,t,e){const i=e.isWebGL2;function n(){let L=!1;const rt=new ne;let O=null;const et=new ne(0,0,0,0);return{setMask:function(dt){O!==dt&&!L&&(s.colorMask(dt,dt,dt,dt),O=dt)},setLocked:function(dt){L=dt},setClear:function(dt,Yt,Jt,ie,ue){ue===!0&&(dt*=ie,Yt*=ie,Jt*=ie),rt.set(dt,Yt,Jt,ie),et.equals(rt)===!1&&(s.clearColor(dt,Yt,Jt,ie),et.copy(rt))},reset:function(){L=!1,O=null,et.set(-1,0,0,0)}}}function r(){let L=!1,rt=null,O=null,et=null;return{setTest:function(dt){dt?gt(s.DEPTH_TEST):Zt(s.DEPTH_TEST)},setMask:function(dt){rt!==dt&&!L&&(s.depthMask(dt),rt=dt)},setFunc:function(dt){if(O!==dt){switch(dt){case ic:s.depthFunc(s.NEVER);break;case nc:s.depthFunc(s.ALWAYS);break;case sc:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case rc:s.depthFunc(s.EQUAL);break;case ac:s.depthFunc(s.GEQUAL);break;case oc:s.depthFunc(s.GREATER);break;case lc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}O=dt}},setLocked:function(dt){L=dt},setClear:function(dt){et!==dt&&(s.clearDepth(dt),et=dt)},reset:function(){L=!1,rt=null,O=null,et=null}}}function a(){let L=!1,rt=null,O=null,et=null,dt=null,Yt=null,Jt=null,ie=null,ue=null;return{setTest:function($t){L||($t?gt(s.STENCIL_TEST):Zt(s.STENCIL_TEST))},setMask:function($t){rt!==$t&&!L&&(s.stencilMask($t),rt=$t)},setFunc:function($t,re,Te){(O!==$t||et!==re||dt!==Te)&&(s.stencilFunc($t,re,Te),O=$t,et=re,dt=Te)},setOp:function($t,re,Te){(Yt!==$t||Jt!==re||ie!==Te)&&(s.stencilOp($t,re,Te),Yt=$t,Jt=re,ie=Te)},setLocked:function($t){L=$t},setClear:function($t){ue!==$t&&(s.clearStencil($t),ue=$t)},reset:function(){L=!1,rt=null,O=null,et=null,dt=null,Yt=null,Jt=null,ie=null,ue=null}}}const o=new n,l=new r,h=new a,c=new WeakMap,u=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,f=!1,b=null,y=null,E=null,P=null,C=null,A=null,k=null,tt=new Mt(0,0,0),v=0,R=!1,at=null,it=null,D=null,j=null,W=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),X=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),X=K>=2);let lt=null,mt={};const It=s.getParameter(s.SCISSOR_BOX),G=s.getParameter(s.VIEWPORT),nt=new ne().fromArray(It),pt=new ne().fromArray(G);function Lt(L,rt,O,et){const dt=new Uint8Array(4),Yt=s.createTexture();s.bindTexture(L,Yt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Jt=0;Jt<O;Jt++)i&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(rt,0,s.RGBA,1,1,et,0,s.RGBA,s.UNSIGNED_BYTE,dt):s.texImage2D(rt+Jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,dt);return Yt}const bt={};bt[s.TEXTURE_2D]=Lt(s.TEXTURE_2D,s.TEXTURE_2D,1),bt[s.TEXTURE_CUBE_MAP]=Lt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(bt[s.TEXTURE_2D_ARRAY]=Lt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),bt[s.TEXTURE_3D]=Lt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),h.setClear(0),gt(s.DEPTH_TEST),l.setFunc(js),kt(!1),zt(Da),gt(s.CULL_FACE),Tt(Ni);function gt(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function Zt(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function Ct(L,rt){return m[L]!==rt?(s.bindFramebuffer(L,rt),m[L]=rt,i&&(L===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=rt),L===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=rt)),!0):!1}function U(L,rt){let O=_,et=!1;if(L){O=g.get(rt),O===void 0&&(O=[],g.set(rt,O));const dt=L.textures;if(O.length!==dt.length||O[0]!==s.COLOR_ATTACHMENT0){for(let Yt=0,Jt=dt.length;Yt<Jt;Yt++)O[Yt]=s.COLOR_ATTACHMENT0+Yt;O.length=dt.length,et=!0}}else O[0]!==s.BACK&&(O[0]=s.BACK,et=!0);if(et)if(e.isWebGL2)s.drawBuffers(O);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(O);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function me(L){return p!==L?(s.useProgram(L),p=L,!0):!1}const Et={[Ki]:s.FUNC_ADD,[Hh]:s.FUNC_SUBTRACT,[Gh]:s.FUNC_REVERSE_SUBTRACT};if(i)Et[Fa]=s.MIN,Et[ka]=s.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(Et[Fa]=L.MIN_EXT,Et[ka]=L.MAX_EXT)}const Ft={[Vh]:s.ZERO,[Wh]:s.ONE,[Xh]:s.SRC_COLOR,[Zr]:s.SRC_ALPHA,[$h]:s.SRC_ALPHA_SATURATE,[Kh]:s.DST_COLOR,[Yh]:s.DST_ALPHA,[jh]:s.ONE_MINUS_SRC_COLOR,[$r]:s.ONE_MINUS_SRC_ALPHA,[Zh]:s.ONE_MINUS_DST_COLOR,[qh]:s.ONE_MINUS_DST_ALPHA,[Qh]:s.CONSTANT_COLOR,[Jh]:s.ONE_MINUS_CONSTANT_COLOR,[tc]:s.CONSTANT_ALPHA,[ec]:s.ONE_MINUS_CONSTANT_ALPHA};function Tt(L,rt,O,et,dt,Yt,Jt,ie,ue,$t){if(L===Ni){f===!0&&(Zt(s.BLEND),f=!1);return}if(f===!1&&(gt(s.BLEND),f=!0),L!==zh){if(L!==b||$t!==R){if((y!==Ki||C!==Ki)&&(s.blendEquation(s.FUNC_ADD),y=Ki,C=Ki),$t)switch(L){case In:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Na:s.blendFunc(s.ONE,s.ONE);break;case Ua:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case In:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Na:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ua:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,P=null,A=null,k=null,tt.set(0,0,0),v=0,b=L,R=$t}return}dt=dt||rt,Yt=Yt||O,Jt=Jt||et,(rt!==y||dt!==C)&&(s.blendEquationSeparate(Et[rt],Et[dt]),y=rt,C=dt),(O!==E||et!==P||Yt!==A||Jt!==k)&&(s.blendFuncSeparate(Ft[O],Ft[et],Ft[Yt],Ft[Jt]),E=O,P=et,A=Yt,k=Jt),(ie.equals(tt)===!1||ue!==v)&&(s.blendColor(ie.r,ie.g,ie.b,ue),tt.copy(ie),v=ue),b=L,R=!1}function qt(L,rt){L.side===si?Zt(s.CULL_FACE):gt(s.CULL_FACE);let O=L.side===Oe;rt&&(O=!O),kt(O),L.blending===In&&L.transparent===!1?Tt(Ni):Tt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const et=L.stencilWrite;h.setTest(et),et&&(h.setMask(L.stencilWriteMask),h.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),h.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),T(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):Zt(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(L){at!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),at=L)}function zt(L){L!==Fh?(gt(s.CULL_FACE),L!==it&&(L===Da?s.cullFace(s.BACK):L===kh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Zt(s.CULL_FACE),it=L}function se(L){L!==D&&(X&&s.lineWidth(L),D=L)}function T(L,rt,O){L?(gt(s.POLYGON_OFFSET_FILL),(j!==rt||W!==O)&&(s.polygonOffset(rt,O),j=rt,W=O)):Zt(s.POLYGON_OFFSET_FILL)}function x(L){L?gt(s.SCISSOR_TEST):Zt(s.SCISSOR_TEST)}function V(L){L===void 0&&(L=s.TEXTURE0+$-1),lt!==L&&(s.activeTexture(L),lt=L)}function Y(L,rt,O){O===void 0&&(lt===null?O=s.TEXTURE0+$-1:O=lt);let et=mt[O];et===void 0&&(et={type:void 0,texture:void 0},mt[O]=et),(et.type!==L||et.texture!==rt)&&(lt!==O&&(s.activeTexture(O),lt=O),s.bindTexture(L,rt||bt[L]),et.type=L,et.texture=rt)}function st(){const L=mt[lt];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xt(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(L){nt.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),nt.copy(L))}function vt(L){pt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),pt.copy(L))}function w(L,rt){let O=u.get(rt);O===void 0&&(O=new WeakMap,u.set(rt,O));let et=O.get(L);et===void 0&&(et=s.getUniformBlockIndex(rt,L.name),O.set(L,et))}function q(L,rt){const et=u.get(rt).get(L);c.get(rt)!==et&&(s.uniformBlockBinding(rt,et,L.__bindingPointIndex),c.set(rt,et))}function xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},lt=null,mt={},m={},g=new WeakMap,_=[],p=null,f=!1,b=null,y=null,E=null,P=null,C=null,A=null,k=null,tt=new Mt(0,0,0),v=0,R=!1,at=null,it=null,D=null,j=null,W=null,nt.set(0,0,s.canvas.width,s.canvas.height),pt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),h.reset()}return{buffers:{color:o,depth:l,stencil:h},enable:gt,disable:Zt,bindFramebuffer:Ct,drawBuffers:U,useProgram:me,setBlending:Tt,setMaterial:qt,setFlipSided:kt,setCullFace:zt,setLineWidth:se,setPolygonOffset:T,setScissorTest:x,activeTexture:V,bindTexture:Y,unbindTexture:st,compressedTexImage2D:J,compressedTexImage3D:Dt,texImage2D:Xt,texImage3D:St,updateUBOMapping:w,uniformBlockBinding:q,texStorage2D:ot,texStorage3D:ce,texSubImage2D:wt,texSubImage3D:ht,compressedTexSubImage2D:ut,compressedTexSubImage3D:Nt,scissor:_t,viewport:vt,reset:xt}}function Jm(s,t,e,i,n,r,a){const o=n.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,u=new WeakMap;let d;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,x){return g?new OffscreenCanvas(T,x):ls("canvas")}function p(T,x,V,Y){let st=1;const J=se(T);if((J.width>Y||J.height>Y)&&(st=Y/Math.max(J.width,J.height)),st<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Dt=x?Qs:Math.floor,wt=Dt(st*J.width),ht=Dt(st*J.height);d===void 0&&(d=_(wt,ht));const ut=V?_(wt,ht):d;return ut.width=wt,ut.height=ht,ut.getContext("2d").drawImage(T,0,0,wt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+wt+"x"+ht+")."),ut}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function f(T){const x=se(T);return sa(x.width)&&sa(x.height)}function b(T){return o?!1:T.wrapS!==Xe||T.wrapT!==Xe||T.minFilter!==ye&&T.minFilter!==Le}function y(T,x){return T.generateMipmaps&&x&&T.minFilter!==ye&&T.minFilter!==Le}function E(T){s.generateMipmap(T)}function P(T,x,V,Y,st=!1){if(o===!1)return x;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=x;if(x===s.RED&&(V===s.FLOAT&&(J=s.R32F),V===s.HALF_FLOAT&&(J=s.R16F),V===s.UNSIGNED_BYTE&&(J=s.R8)),x===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.R8UI),V===s.UNSIGNED_SHORT&&(J=s.R16UI),V===s.UNSIGNED_INT&&(J=s.R32UI),V===s.BYTE&&(J=s.R8I),V===s.SHORT&&(J=s.R16I),V===s.INT&&(J=s.R32I)),x===s.RG&&(V===s.FLOAT&&(J=s.RG32F),V===s.HALF_FLOAT&&(J=s.RG16F),V===s.UNSIGNED_BYTE&&(J=s.RG8)),x===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RG8UI),V===s.UNSIGNED_SHORT&&(J=s.RG16UI),V===s.UNSIGNED_INT&&(J=s.RG32UI),V===s.BYTE&&(J=s.RG8I),V===s.SHORT&&(J=s.RG16I),V===s.INT&&(J=s.RG32I)),x===s.RGBA){const Dt=st?qs:Qt.getTransfer(Y);V===s.FLOAT&&(J=s.RGBA32F),V===s.HALF_FLOAT&&(J=s.RGBA16F),V===s.UNSIGNED_BYTE&&(J=Dt===ae?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function C(T,x,V){return y(T,V)===!0||T.isFramebufferTexture&&T.minFilter!==ye&&T.minFilter!==Le?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){return T===ye||T===ta||T===wn?s.NEAREST:s.LINEAR}function k(T){const x=T.target;x.removeEventListener("dispose",k),v(x),x.isVideoTexture&&u.delete(x)}function tt(T){const x=T.target;x.removeEventListener("dispose",tt),at(x)}function v(T){const x=i.get(T);if(x.__webglInit===void 0)return;const V=T.source,Y=m.get(V);if(Y){const st=Y[x.__cacheKey];st.usedTimes--,st.usedTimes===0&&R(T),Object.keys(Y).length===0&&m.delete(V)}i.remove(T)}function R(T){const x=i.get(T);s.deleteTexture(x.__webglTexture);const V=T.source,Y=m.get(V);delete Y[x.__cacheKey],a.memory.textures--}function at(T){const x=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let st=0;st<x.__webglFramebuffer[Y].length;st++)s.deleteFramebuffer(x.__webglFramebuffer[Y][st]);else s.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)s.deleteFramebuffer(x.__webglFramebuffer[Y]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const V=T.textures;for(let Y=0,st=V.length;Y<st;Y++){const J=i.get(V[Y]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(V[Y])}i.remove(T)}let it=0;function D(){it=0}function j(){const T=it;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),it+=1,T}function W(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function $(T,x){const V=i.get(T);if(T.isVideoTexture&&kt(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(V,T,x);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+x)}function X(T,x){const V=i.get(T);if(T.version>0&&V.__version!==T.version){pt(V,T,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+x)}function K(T,x){const V=i.get(T);if(T.version>0&&V.__version!==T.version){pt(V,T,x);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+x)}function Q(T,x){const V=i.get(T);if(T.version>0&&V.__version!==T.version){Lt(V,T,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+x)}const lt={[Fn]:s.REPEAT,[Xe]:s.CLAMP_TO_EDGE,[Ys]:s.MIRRORED_REPEAT},mt={[ye]:s.NEAREST,[ta]:s.NEAREST_MIPMAP_NEAREST,[wn]:s.NEAREST_MIPMAP_LINEAR,[Le]:s.LINEAR,[Ws]:s.LINEAR_MIPMAP_NEAREST,[_i]:s.LINEAR_MIPMAP_LINEAR},It={[Pc]:s.NEVER,[Fc]:s.ALWAYS,[Ic]:s.LESS,[Xl]:s.LEQUAL,[Dc]:s.EQUAL,[Oc]:s.GEQUAL,[Nc]:s.GREATER,[Uc]:s.NOTEQUAL};function G(T,x,V){if(x.type===$e&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Le||x.magFilter===Ws||x.magFilter===wn||x.magFilter===_i||x.minFilter===Le||x.minFilter===Ws||x.minFilter===wn||x.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),V?(s.texParameteri(T,s.TEXTURE_WRAP_S,lt[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,lt[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,lt[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,mt[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,mt[x.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(x.wrapS!==Xe||x.wrapT!==Xe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,A(x.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==ye&&x.minFilter!==Le&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,It[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ye||x.minFilter!==wn&&x.minFilter!==_i||x.type===$e&&t.has("OES_texture_float_linear")===!1||o===!1&&x.type===as&&t.has("OES_texture_half_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function nt(T,x){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",k));const Y=x.source;let st=m.get(Y);st===void 0&&(st={},m.set(Y,st));const J=W(x);if(J!==T.__cacheKey){st[J]===void 0&&(st[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),st[J].usedTimes++;const Dt=st[T.__cacheKey];Dt!==void 0&&(st[T.__cacheKey].usedTimes--,Dt.usedTimes===0&&R(x)),T.__cacheKey=J,T.__webglTexture=st[J].texture}return V}function pt(T,x,V){let Y=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=s.TEXTURE_3D);const st=nt(T,x),J=x.source;e.bindTexture(Y,T.__webglTexture,s.TEXTURE0+V);const Dt=i.get(J);if(J.version!==Dt.__version||st===!0){e.activeTexture(s.TEXTURE0+V);const wt=Qt.getPrimaries(Qt.workingColorSpace),ht=x.colorSpace===Pi?null:Qt.getPrimaries(x.colorSpace),ut=x.colorSpace===Pi||wt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Nt=b(x)&&f(x.image)===!1;let ot=p(x.image,Nt,!1,n.maxTextureSize);ot=zt(x,ot);const ce=f(ot)||o,Xt=r.convert(x.format,x.colorSpace);let St=r.convert(x.type),_t=P(x.internalFormat,Xt,St,x.colorSpace,x.isVideoTexture);G(Y,x,ce);let vt;const w=x.mipmaps,q=o&&x.isVideoTexture!==!0&&_t!==Vl,xt=Dt.__version===void 0||st===!0,L=J.dataReady,rt=C(x,ot,ce);if(x.isDepthTexture)_t=s.DEPTH_COMPONENT,o?x.type===$e?_t=s.DEPTH_COMPONENT32F:x.type===Ii?_t=s.DEPTH_COMPONENT24:x.type===tn?_t=s.DEPTH24_STENCIL8:_t=s.DEPTH_COMPONENT16:x.type===$e&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===en&&_t===s.DEPTH_COMPONENT&&x.type!==da&&x.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Ii,St=r.convert(x.type)),x.format===kn&&_t===s.DEPTH_COMPONENT&&(_t=s.DEPTH_STENCIL,x.type!==tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=tn,St=r.convert(x.type))),xt&&(q?e.texStorage2D(s.TEXTURE_2D,1,_t,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,_t,ot.width,ot.height,0,Xt,St,null));else if(x.isDataTexture)if(w.length>0&&ce){q&&xt&&e.texStorage2D(s.TEXTURE_2D,rt,_t,w[0].width,w[0].height);for(let O=0,et=w.length;O<et;O++)vt=w[O],q?L&&e.texSubImage2D(s.TEXTURE_2D,O,0,0,vt.width,vt.height,Xt,St,vt.data):e.texImage2D(s.TEXTURE_2D,O,_t,vt.width,vt.height,0,Xt,St,vt.data);x.generateMipmaps=!1}else q?(xt&&e.texStorage2D(s.TEXTURE_2D,rt,_t,ot.width,ot.height),L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot.width,ot.height,Xt,St,ot.data)):e.texImage2D(s.TEXTURE_2D,0,_t,ot.width,ot.height,0,Xt,St,ot.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){q&&xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,rt,_t,w[0].width,w[0].height,ot.depth);for(let O=0,et=w.length;O<et;O++)vt=w[O],x.format!==je?Xt!==null?q?L&&e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,O,0,0,0,vt.width,vt.height,ot.depth,Xt,vt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,O,_t,vt.width,vt.height,ot.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?L&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,O,0,0,0,vt.width,vt.height,ot.depth,Xt,St,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,O,_t,vt.width,vt.height,ot.depth,0,Xt,St,vt.data)}else{q&&xt&&e.texStorage2D(s.TEXTURE_2D,rt,_t,w[0].width,w[0].height);for(let O=0,et=w.length;O<et;O++)vt=w[O],x.format!==je?Xt!==null?q?L&&e.compressedTexSubImage2D(s.TEXTURE_2D,O,0,0,vt.width,vt.height,Xt,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,O,_t,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?L&&e.texSubImage2D(s.TEXTURE_2D,O,0,0,vt.width,vt.height,Xt,St,vt.data):e.texImage2D(s.TEXTURE_2D,O,_t,vt.width,vt.height,0,Xt,St,vt.data)}else if(x.isDataArrayTexture)q?(xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,rt,_t,ot.width,ot.height,ot.depth),L&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Xt,St,ot.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,_t,ot.width,ot.height,ot.depth,0,Xt,St,ot.data);else if(x.isData3DTexture)q?(xt&&e.texStorage3D(s.TEXTURE_3D,rt,_t,ot.width,ot.height,ot.depth),L&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Xt,St,ot.data)):e.texImage3D(s.TEXTURE_3D,0,_t,ot.width,ot.height,ot.depth,0,Xt,St,ot.data);else if(x.isFramebufferTexture){if(xt)if(q)e.texStorage2D(s.TEXTURE_2D,rt,_t,ot.width,ot.height);else{let O=ot.width,et=ot.height;for(let dt=0;dt<rt;dt++)e.texImage2D(s.TEXTURE_2D,dt,_t,O,et,0,Xt,St,null),O>>=1,et>>=1}}else if(w.length>0&&ce){if(q&&xt){const O=se(w[0]);e.texStorage2D(s.TEXTURE_2D,rt,_t,O.width,O.height)}for(let O=0,et=w.length;O<et;O++)vt=w[O],q?L&&e.texSubImage2D(s.TEXTURE_2D,O,0,0,Xt,St,vt):e.texImage2D(s.TEXTURE_2D,O,_t,Xt,St,vt);x.generateMipmaps=!1}else if(q){if(xt){const O=se(ot);e.texStorage2D(s.TEXTURE_2D,rt,_t,O.width,O.height)}L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Xt,St,ot)}else e.texImage2D(s.TEXTURE_2D,0,_t,Xt,St,ot);y(x,ce)&&E(Y),Dt.__version=J.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Lt(T,x,V){if(x.image.length!==6)return;const Y=nt(T,x),st=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+V);const J=i.get(st);if(st.version!==J.__version||Y===!0){e.activeTexture(s.TEXTURE0+V);const Dt=Qt.getPrimaries(Qt.workingColorSpace),wt=x.colorSpace===Pi?null:Qt.getPrimaries(x.colorSpace),ht=x.colorSpace===Pi||Dt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const ut=x.isCompressedTexture||x.image[0].isCompressedTexture,Nt=x.image[0]&&x.image[0].isDataTexture,ot=[];for(let O=0;O<6;O++)!ut&&!Nt?ot[O]=p(x.image[O],!1,!0,n.maxCubemapSize):ot[O]=Nt?x.image[O].image:x.image[O],ot[O]=zt(x,ot[O]);const ce=ot[0],Xt=f(ce)||o,St=r.convert(x.format,x.colorSpace),_t=r.convert(x.type),vt=P(x.internalFormat,St,_t,x.colorSpace),w=o&&x.isVideoTexture!==!0,q=J.__version===void 0||Y===!0,xt=st.dataReady;let L=C(x,ce,Xt);G(s.TEXTURE_CUBE_MAP,x,Xt);let rt;if(ut){w&&q&&e.texStorage2D(s.TEXTURE_CUBE_MAP,L,vt,ce.width,ce.height);for(let O=0;O<6;O++){rt=ot[O].mipmaps;for(let et=0;et<rt.length;et++){const dt=rt[et];x.format!==je?St!==null?w?xt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,et,0,0,dt.width,dt.height,St,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,et,vt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,et,0,0,dt.width,dt.height,St,_t,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,et,vt,dt.width,dt.height,0,St,_t,dt.data)}}}else{if(rt=x.mipmaps,w&&q){rt.length>0&&L++;const O=se(ot[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,L,vt,O.width,O.height)}for(let O=0;O<6;O++)if(Nt){w?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,ot[O].width,ot[O].height,St,_t,ot[O].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,vt,ot[O].width,ot[O].height,0,St,_t,ot[O].data);for(let et=0;et<rt.length;et++){const Yt=rt[et].image[O].image;w?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,et+1,0,0,Yt.width,Yt.height,St,_t,Yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,et+1,vt,Yt.width,Yt.height,0,St,_t,Yt.data)}}else{w?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,St,_t,ot[O]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,vt,St,_t,ot[O]);for(let et=0;et<rt.length;et++){const dt=rt[et];w?xt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,et+1,0,0,St,_t,dt.image[O]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,et+1,vt,St,_t,dt.image[O])}}}y(x,Xt)&&E(s.TEXTURE_CUBE_MAP),J.__version=st.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function bt(T,x,V,Y,st,J){const Dt=r.convert(V.format,V.colorSpace),wt=r.convert(V.type),ht=P(V.internalFormat,Dt,wt,V.colorSpace);if(!i.get(x).__hasExternalTextures){const Nt=Math.max(1,x.width>>J),ot=Math.max(1,x.height>>J);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,J,ht,Nt,ot,x.depth,0,Dt,wt,null):e.texImage2D(st,J,ht,Nt,ot,0,Dt,wt,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),qt(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,st,i.get(V).__webglTexture,0,Tt(x)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,st,i.get(V).__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(T,x,V){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let Y=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(V||qt(x)){const st=x.depthTexture;st&&st.isDepthTexture&&(st.type===$e?Y=s.DEPTH_COMPONENT32F:st.type===Ii&&(Y=s.DEPTH_COMPONENT24));const J=Tt(x);qt(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,Y,x.width,x.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,J,Y,x.width,x.height)}else s.renderbufferStorage(s.RENDERBUFFER,Y,x.width,x.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const Y=Tt(x);V&&qt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Y,s.DEPTH24_STENCIL8,x.width,x.height):qt(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Y,s.DEPTH24_STENCIL8,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{const Y=x.textures;for(let st=0;st<Y.length;st++){const J=Y[st],Dt=r.convert(J.format,J.colorSpace),wt=r.convert(J.type),ht=P(J.internalFormat,Dt,wt,J.colorSpace),ut=Tt(x);V&&qt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,ht,x.width,x.height):qt(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,ht,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ht,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Zt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const Y=i.get(x.depthTexture).__webglTexture,st=Tt(x);if(x.depthTexture.format===en)qt(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0);else if(x.depthTexture.format===kn)qt(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ct(T){const x=i.get(T),V=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Zt(x.__webglFramebuffer,T)}else if(V){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]=s.createRenderbuffer(),gt(x.__webglDepthbuffer[Y],T,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),gt(x.__webglDepthbuffer,T,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function U(T,x,V){const Y=i.get(T);x!==void 0&&bt(Y.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Ct(T)}function me(T){const x=T.texture,V=i.get(T),Y=i.get(x);T.addEventListener("dispose",tt);const st=T.textures,J=T.isWebGLCubeRenderTarget===!0,Dt=st.length>1,wt=f(T)||o;if(Dt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=x.version,a.memory.textures++),J){V.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(o&&x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[ht]=[];for(let ut=0;ut<x.mipmaps.length;ut++)V.__webglFramebuffer[ht][ut]=s.createFramebuffer()}else V.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)V.__webglFramebuffer[ht]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Dt)if(n.drawBuffers)for(let ht=0,ut=st.length;ht<ut;ht++){const Nt=i.get(st[ht]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=s.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&qt(T)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ht=0;ht<st.length;ht++){const ut=st[ht];V.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[ht]);const Nt=r.convert(ut.format,ut.colorSpace),ot=r.convert(ut.type),ce=P(ut.internalFormat,Nt,ot,ut.colorSpace,T.isXRRenderTarget===!0),Xt=Tt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,ce,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,V.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),gt(V.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),G(s.TEXTURE_CUBE_MAP,x,wt);for(let ht=0;ht<6;ht++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)bt(V.__webglFramebuffer[ht][ut],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ut);else bt(V.__webglFramebuffer[ht],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);y(x,wt)&&E(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let ht=0,ut=st.length;ht<ut;ht++){const Nt=st[ht],ot=i.get(Nt);e.bindTexture(s.TEXTURE_2D,ot.__webglTexture),G(s.TEXTURE_2D,Nt,wt),bt(V.__webglFramebuffer,T,Nt,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),y(Nt,wt)&&E(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?ht=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,Y.__webglTexture),G(ht,x,wt),o&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)bt(V.__webglFramebuffer[ut],T,x,s.COLOR_ATTACHMENT0,ht,ut);else bt(V.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,ht,0);y(x,wt)&&E(ht),e.unbindTexture()}T.depthBuffer&&Ct(T)}function Et(T){const x=f(T)||o,V=T.textures;for(let Y=0,st=V.length;Y<st;Y++){const J=V[Y];if(y(J,x)){const Dt=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,wt=i.get(J).__webglTexture;e.bindTexture(Dt,wt),E(Dt),e.unbindTexture()}}}function Ft(T){if(o&&T.samples>0&&qt(T)===!1){const x=T.textures,V=T.width,Y=T.height;let st=s.COLOR_BUFFER_BIT;const J=[],Dt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=i.get(T),ht=x.length>1;if(ht)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){J.push(s.COLOR_ATTACHMENT0+ut),T.depthBuffer&&J.push(Dt);const Nt=wt.__ignoreDepthValues!==void 0?wt.__ignoreDepthValues:!1;if(Nt===!1&&(T.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),ht&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[ut]),Nt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Dt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Dt])),ht){const ot=i.get(x[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ot,0)}s.blitFramebuffer(0,0,V,Y,0,0,V,Y,st,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,J)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,wt.__webglColorRenderbuffer[ut]);const Nt=i.get(x[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,Nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}}function Tt(T){return Math.min(n.maxSamples,T.samples)}function qt(T){const x=i.get(T);return o&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function kt(T){const x=a.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function zt(T,x){const V=T.colorSpace,Y=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===na||V!==Ee&&V!==Pi&&(Qt.getTransfer(V)===ae?o===!1?t.has("EXT_sRGB")===!0&&Y===je?(T.format=na,T.minFilter=Le,T.generateMipmaps=!1):x=Kl.sRGBToLinear(x):(Y!==je||st!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function se(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=D,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=U,this.setupRenderTarget=me,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=qt}function tg(s,t,e){const i=e.isWebGL2;function n(r,a=Pi){let o;const l=Qt.getTransfer(a);if(r===Oi)return s.UNSIGNED_BYTE;if(r===Fl)return s.UNSIGNED_SHORT_4_4_4_4;if(r===kl)return s.UNSIGNED_SHORT_5_5_5_1;if(r===vc)return s.BYTE;if(r===yc)return s.SHORT;if(r===da)return s.UNSIGNED_SHORT;if(r===Ol)return s.INT;if(r===Ii)return s.UNSIGNED_INT;if(r===$e)return s.FLOAT;if(r===as)return i?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Mc)return s.ALPHA;if(r===je)return s.RGBA;if(r===bc)return s.LUMINANCE;if(r===Sc)return s.LUMINANCE_ALPHA;if(r===en)return s.DEPTH_COMPONENT;if(r===kn)return s.DEPTH_STENCIL;if(r===na)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Bl)return s.RED;if(r===zl)return s.RED_INTEGER;if(r===Ec)return s.RG;if(r===Hl)return s.RG_INTEGER;if(r===Gl)return s.RGBA_INTEGER;if(r===lr||r===hr||r===cr||r===ur)if(l===ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===lr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===hr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===cr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ur)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===lr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===hr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ur)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===za||r===Ha||r===Ga||r===Va)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===za)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ha)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ga)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Va)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vl)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Wa||r===Xa)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Wa)return l===ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Xa)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ja||r===Ya||r===qa||r===Ka||r===Za||r===$a||r===Qa||r===Ja||r===to||r===eo||r===io||r===no||r===so||r===ro)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ja)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ya)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qa)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ka)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Za)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$a)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qa)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ja)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===to)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===eo)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===io)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===no)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===so)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ro)return l===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===dr||r===ao||r===oo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===dr)return l===ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ao)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===oo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Tc||r===lo||r===ho||r===co)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===dr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===lo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ho)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===co)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===tn?i?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:n}}class eg extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}let Qi=class extends le{constructor(){super(),this.isGroup=!0,this.type="Group"}};const ig={type:"move"};class kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),f=this._getHandJoint(h,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),m=.02,g=.005;h.inputState.pinching&&d>m+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=m-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ig)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Qi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new Me,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}render(t,e){if(this.texture!==null){if(this.mesh===null){const i=e.cameras[0].viewport,n=new Fi({extensions:{fragDepth:!0},vertexShader:ng,fragmentShader:sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ze(new er(20,20),n)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class ag extends an{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,u=null,d=null,m=null,g=null;const _=new rg,p=e.getContextAttributes();let f=null,b=null;const y=[],E=[],P=new At;let C=null;const A=new Ne;A.layers.enable(1),A.viewport=new ne;const k=new Ne;k.layers.enable(2),k.viewport=new ne;const tt=[A,k],v=new eg;v.layers.enable(1),v.layers.enable(2);let R=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let nt=y[G];return nt===void 0&&(nt=new kr,y[G]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(G){let nt=y[G];return nt===void 0&&(nt=new kr,y[G]=nt),nt.getGripSpace()},this.getHand=function(G){let nt=y[G];return nt===void 0&&(nt=new kr,y[G]=nt),nt.getHandSpace()};function it(G){const nt=E.indexOf(G.inputSource);if(nt===-1)return;const pt=y[nt];pt!==void 0&&(pt.update(G.inputSource,G.frame,h||a),pt.dispatchEvent({type:G.type,data:G.inputSource}))}function D(){n.removeEventListener("select",it),n.removeEventListener("selectstart",it),n.removeEventListener("selectend",it),n.removeEventListener("squeeze",it),n.removeEventListener("squeezestart",it),n.removeEventListener("squeezeend",it),n.removeEventListener("end",D),n.removeEventListener("inputsourceschange",j);for(let G=0;G<y.length;G++){const nt=E[G];nt!==null&&(E[G]=null,y[G].disconnect(nt))}R=null,at=null,_.reset(),t.setRenderTarget(f),m=null,d=null,u=null,n=null,b=null,It.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(G){h=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(G){if(n=G,n!==null){if(f=t.getRenderTarget(),n.addEventListener("select",it),n.addEventListener("selectstart",it),n.addEventListener("selectend",it),n.addEventListener("squeeze",it),n.addEventListener("squeezestart",it),n.addEventListener("squeezeend",it),n.addEventListener("end",D),n.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const nt={antialias:n.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(n,e,nt),n.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new sn(m.framebufferWidth,m.framebufferHeight,{format:je,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let nt=null,pt=null,Lt=null;p.depth&&(Lt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=p.stencil?kn:en,pt=p.stencil?tn:Ii);const bt={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:r};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(bt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new sn(d.textureWidth,d.textureHeight,{format:je,type:Oi,depthTexture:new ah(d.textureWidth,d.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});const gt=t.properties.get(b);gt.__ignoreDepthValues=d.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await n.requestReferenceSpace(o),It.setContext(n),It.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function j(G){for(let nt=0;nt<G.removed.length;nt++){const pt=G.removed[nt],Lt=E.indexOf(pt);Lt>=0&&(E[Lt]=null,y[Lt].disconnect(pt))}for(let nt=0;nt<G.added.length;nt++){const pt=G.added[nt];let Lt=E.indexOf(pt);if(Lt===-1){for(let gt=0;gt<y.length;gt++)if(gt>=E.length){E.push(pt),Lt=gt;break}else if(E[gt]===null){E[gt]=pt,Lt=gt;break}if(Lt===-1)break}const bt=y[Lt];bt&&bt.connect(pt)}}const W=new I,$=new I;function X(G,nt,pt){W.setFromMatrixPosition(nt.matrixWorld),$.setFromMatrixPosition(pt.matrixWorld);const Lt=W.distanceTo($),bt=nt.projectionMatrix.elements,gt=pt.projectionMatrix.elements,Zt=bt[14]/(bt[10]-1),Ct=bt[14]/(bt[10]+1),U=(bt[9]+1)/bt[5],me=(bt[9]-1)/bt[5],Et=(bt[8]-1)/bt[0],Ft=(gt[8]+1)/gt[0],Tt=Zt*Et,qt=Zt*Ft,kt=Lt/(-Et+Ft),zt=kt*-Et;nt.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(zt),G.translateZ(kt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const se=Zt+kt,T=Ct+kt,x=Tt-zt,V=qt+(Lt-zt),Y=U*Ct/T*se,st=me*Ct/T*se;G.projectionMatrix.makePerspective(x,V,Y,st,se,T),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function K(G,nt){nt===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(nt.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(n===null)return;_.texture!==null&&(G.near=_.depthNear,G.far=_.depthFar),v.near=k.near=A.near=G.near,v.far=k.far=A.far=G.far,(R!==v.near||at!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,at=v.far,A.near=R,A.far=at,k.near=R,k.far=at,A.updateProjectionMatrix(),k.updateProjectionMatrix(),G.updateProjectionMatrix());const nt=G.parent,pt=v.cameras;K(v,nt);for(let Lt=0;Lt<pt.length;Lt++)K(pt[Lt],nt);pt.length===2?X(v,A,k):v.projectionMatrix.copy(A.projectionMatrix),Q(G,v,nt)};function Q(G,nt,pt){pt===null?G.matrix.copy(nt.matrixWorld):(G.matrix.copy(pt.matrixWorld),G.matrix.invert(),G.matrix.multiply(nt.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(nt.projectionMatrix),G.projectionMatrixInverse.copy(nt.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=zn*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null};let lt=null;function mt(G,nt){if(c=nt.getViewerPose(h||a),g=nt,c!==null){const pt=c.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let Lt=!1;pt.length!==v.cameras.length&&(v.cameras.length=0,Lt=!0);for(let gt=0;gt<pt.length;gt++){const Zt=pt[gt];let Ct=null;if(m!==null)Ct=m.getViewport(Zt);else{const me=u.getViewSubImage(d,Zt);Ct=me.viewport,gt===0&&(t.setRenderTargetTextures(b,me.colorTexture,d.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(b))}let U=tt[gt];U===void 0&&(U=new Ne,U.layers.enable(gt),U.viewport=new ne,tt[gt]=U),U.matrix.fromArray(Zt.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Zt.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),gt===0&&(v.matrix.copy(U.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Lt===!0&&v.cameras.push(U)}const bt=n.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const gt=u.getDepthInformation(pt[0]);gt&&gt.isValid&&gt.texture&&_.init(t,gt,n.renderState)}}for(let pt=0;pt<y.length;pt++){const Lt=E[pt],bt=y[pt];Lt!==null&&bt!==void 0&&bt.update(Lt,nt,h||a)}_.render(t,v),lt&&lt(G,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}const It=new rh;It.setAnimationLoop(mt),this.setAnimationLoop=function(G){lt=G},this.dispose=function(){}}}const ji=new ii,og=new Wt;function lg(s,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,ih(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,b,y,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),c(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,b,y):f.isSpriteMaterial?h(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Oe&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Oe&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const b=t.get(f),y=b.envMap,E=b.envMapRotation;if(y&&(p.envMap.value=y,ji.copy(E),ji.x*=-1,ji.y*=-1,ji.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),p.envMapRotation.value.setFromMatrix4(og.makeRotationFromEuler(ji)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const P=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*P,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,b,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=y*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,b){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Oe&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const b=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function hg(s,t,e,i){let n={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,y){const E=y.program;i.uniformBlockBinding(b,E)}function h(b,y){let E=n[b.id];E===void 0&&(g(b),E=c(b),n[b.id]=E,b.addEventListener("dispose",p));const P=y.program;i.updateUBOMapping(b,P);const C=t.render.frame;r[b.id]!==C&&(d(b),r[b.id]=C)}function c(b){const y=u();b.__bindingPointIndex=y;const E=s.createBuffer(),P=b.__size,C=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,P,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,E),E}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const y=n[b.id],E=b.uniforms,P=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let C=0,A=E.length;C<A;C++){const k=Array.isArray(E[C])?E[C]:[E[C]];for(let tt=0,v=k.length;tt<v;tt++){const R=k[tt];if(m(R,C,tt,P)===!0){const at=R.__offset,it=Array.isArray(R.value)?R.value:[R.value];let D=0;for(let j=0;j<it.length;j++){const W=it[j],$=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,at+D,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,at,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(b,y,E,P){const C=b.value,A=y+"_"+E;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const k=P[A];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return P[A]=C,!0}else if(k.equals(C)===!1)return k.copy(C),!0}return!1}function g(b){const y=b.uniforms;let E=0;const P=16;for(let A=0,k=y.length;A<k;A++){const tt=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,R=tt.length;v<R;v++){const at=tt[v],it=Array.isArray(at.value)?at.value:[at.value];for(let D=0,j=it.length;D<j;D++){const W=it[D],$=_(W),X=E%P;X!==0&&P-X<$.boundary&&(E+=P-X),at.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=E,E+=$.storage}}}const C=E%P;return C>0&&(E+=P-C),b.__size=E,b.__cache={},this}function _(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){const y=b.target;y.removeEventListener("dispose",p);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(n[y.id]),delete n[y.id],delete r[y.id]}function f(){for(const b in n)s.deleteBuffer(n[b]);a=[],n={},r={}}return{bind:l,update:h,dispose:f}}class dh{constructor(t={}){const{canvas:e=Qc(),context:i=null,depth:n=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this._useLegacyLights=!1,this.toneMapping=Ui,this.toneMappingExposure=1;const y=this;let E=!1,P=0,C=0,A=null,k=-1,tt=null;const v=new ne,R=new ne;let at=null;const it=new Mt(0);let D=0,j=e.width,W=e.height,$=1,X=null,K=null;const Q=new ne(0,0,j,W),lt=new ne(0,0,j,W);let mt=!1;const It=new ga;let G=!1,nt=!1,pt=null;const Lt=new Wt,bt=new At,gt=new I,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ct(){return A===null?$:1}let U=i;function me(M,N){for(let B=0;B<M.length;B++){const z=M[B],F=e.getContext(z,N);if(F!==null)return F}return null}try{const M={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ca}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",rt,!1),U===null){const N=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&N.shift(),U=me(N,M),U===null)throw me(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Et,Ft,Tt,qt,kt,zt,se,T,x,V,Y,st,J,Dt,wt,ht,ut,Nt,ot,ce,Xt,St,_t,vt;function w(){Et=new mp(U),Ft=new hp(U,Et,t),Et.init(Ft),St=new tg(U,Et,Ft),Tt=new Qm(U,Et,Ft),qt=new xp(U),kt=new km,zt=new Jm(U,Et,Tt,kt,Ft,St,qt),se=new up(y),T=new pp(y),x=new Su(U,Ft),_t=new op(U,Et,x,Ft),V=new gp(U,x,qt,_t),Y=new bp(U,V,x,qt),ot=new Mp(U,Ft,zt),ht=new cp(kt),st=new Fm(y,se,T,Et,Ft,_t,ht),J=new lg(y,kt),Dt=new zm,wt=new jm(Et,Ft),Nt=new ap(y,se,T,Tt,Y,d,l),ut=new $m(y,Y,Ft),vt=new hg(U,qt,Ft,Tt),ce=new lp(U,Et,qt,Ft),Xt=new _p(U,Et,qt,Ft),qt.programs=st.programs,y.capabilities=Ft,y.extensions=Et,y.properties=kt,y.renderLists=Dt,y.shadowMap=ut,y.state=Tt,y.info=qt}w();const q=new ag(y,U);this.xr=q,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=Et.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Et.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(j,W,!1))},this.getSize=function(M){return M.set(j,W)},this.setSize=function(M,N,B=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,W=N,e.width=Math.floor(M*$),e.height=Math.floor(N*$),B===!0&&(e.style.width=M+"px",e.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(j*$,W*$).floor()},this.setDrawingBufferSize=function(M,N,B){j=M,W=N,$=B,e.width=Math.floor(M*B),e.height=Math.floor(N*B),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(v)},this.getViewport=function(M){return M.copy(Q)},this.setViewport=function(M,N,B,z){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,N,B,z),Tt.viewport(v.copy(Q).multiplyScalar($).round())},this.getScissor=function(M){return M.copy(lt)},this.setScissor=function(M,N,B,z){M.isVector4?lt.set(M.x,M.y,M.z,M.w):lt.set(M,N,B,z),Tt.scissor(R.copy(lt).multiplyScalar($).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(M){Tt.setScissorTest(mt=M)},this.setOpaqueSort=function(M){X=M},this.setTransparentSort=function(M){K=M},this.getClearColor=function(M){return M.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(M=!0,N=!0,B=!0){let z=0;if(M){let F=!1;if(A!==null){const ft=A.texture.format;F=ft===Gl||ft===Hl||ft===zl}if(F){const ft=A.texture.type,yt=ft===Oi||ft===Ii||ft===da||ft===tn||ft===Fl||ft===kl,Rt=Nt.getClearColor(),Pt=Nt.getClearAlpha(),jt=Rt.r,Ot=Rt.g,Bt=Rt.b;yt?(m[0]=jt,m[1]=Ot,m[2]=Bt,m[3]=Pt,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=jt,g[1]=Ot,g[2]=Bt,g[3]=Pt,U.clearBufferiv(U.COLOR,0,g))}else z|=U.COLOR_BUFFER_BIT}N&&(z|=U.DEPTH_BUFFER_BIT),B&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),Dt.dispose(),wt.dispose(),kt.dispose(),se.dispose(),T.dispose(),Y.dispose(),_t.dispose(),vt.dispose(),st.dispose(),q.dispose(),q.removeEventListener("sessionstart",ue),q.removeEventListener("sessionend",$t),pt&&(pt.dispose(),pt=null),re.stop()};function xt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=qt.autoReset,N=ut.enabled,B=ut.autoUpdate,z=ut.needsUpdate,F=ut.type;w(),qt.autoReset=M,ut.enabled=N,ut.autoUpdate=B,ut.needsUpdate=z,ut.type=F}function rt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function O(M){const N=M.target;N.removeEventListener("dispose",O),et(N)}function et(M){dt(M),kt.remove(M)}function dt(M){const N=kt.get(M).programs;N!==void 0&&(N.forEach(function(B){st.releaseProgram(B)}),M.isShaderMaterial&&st.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,B,z,F,ft){N===null&&(N=Zt);const yt=F.isMesh&&F.matrixWorld.determinant()<0,Rt=Ph(M,N,B,z,F);Tt.setMaterial(z,yt);let Pt=B.index,jt=1;if(z.wireframe===!0){if(Pt=V.getWireframeAttribute(B),Pt===void 0)return;jt=2}const Ot=B.drawRange,Bt=B.attributes.position;let de=Ot.start*jt,Fe=(Ot.start+Ot.count)*jt;ft!==null&&(de=Math.max(de,ft.start*jt),Fe=Math.min(Fe,(ft.start+ft.count)*jt)),Pt!==null?(de=Math.max(de,0),Fe=Math.min(Fe,Pt.count)):Bt!=null&&(de=Math.max(de,0),Fe=Math.min(Fe,Bt.count));const xe=Fe-de;if(xe<0||xe===1/0)return;_t.setup(F,z,Rt,B,Pt);let hi,he=ce;if(Pt!==null&&(hi=x.get(Pt),he=Xt,he.setIndex(hi)),F.isMesh)z.wireframe===!0?(Tt.setLineWidth(z.wireframeLinewidth*Ct()),he.setMode(U.LINES)):he.setMode(U.TRIANGLES);else if(F.isLine){let Ht=z.linewidth;Ht===void 0&&(Ht=1),Tt.setLineWidth(Ht*Ct()),F.isLineSegments?he.setMode(U.LINES):F.isLineLoop?he.setMode(U.LINE_LOOP):he.setMode(U.LINE_STRIP)}else F.isPoints?he.setMode(U.POINTS):F.isSprite&&he.setMode(U.TRIANGLES);if(F.isBatchedMesh)he.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)he.renderInstances(de,xe,F.count);else if(B.isInstancedBufferGeometry){const Ht=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,sr=Math.min(B.instanceCount,Ht);he.renderInstances(de,xe,sr)}else he.render(de,xe)};function Yt(M,N,B){M.transparent===!0&&M.side===si&&M.forceSinglePass===!1?(M.side=Oe,M.needsUpdate=!0,ms(M,N,B),M.side=vi,M.needsUpdate=!0,ms(M,N,B),M.side=si):ms(M,N,B)}this.compile=function(M,N,B=null){B===null&&(B=M),p=wt.get(B),p.init(),b.push(p),B.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),M!==B&&M.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(y._useLegacyLights);const z=new Set;return M.traverse(function(F){const ft=F.material;if(ft)if(Array.isArray(ft))for(let yt=0;yt<ft.length;yt++){const Rt=ft[yt];Yt(Rt,B,F),z.add(Rt)}else Yt(ft,B,F),z.add(ft)}),b.pop(),p=null,z},this.compileAsync=function(M,N,B=null){const z=this.compile(M,N,B);return new Promise(F=>{function ft(){if(z.forEach(function(yt){kt.get(yt).currentProgram.isReady()&&z.delete(yt)}),z.size===0){F(M);return}setTimeout(ft,10)}Et.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Jt=null;function ie(M){Jt&&Jt(M)}function ue(){re.stop()}function $t(){re.start()}const re=new rh;re.setAnimationLoop(ie),typeof self<"u"&&re.setContext(self),this.setAnimationLoop=function(M){Jt=M,q.setAnimationLoop(M),M===null?re.stop():re.start()},q.addEventListener("sessionstart",ue),q.addEventListener("sessionend",$t),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,N,A),p=wt.get(M,b.length),p.init(),b.push(p),Lt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),It.setFromProjectionMatrix(Lt),nt=this.localClippingEnabled,G=ht.init(this.clippingPlanes,nt),_=Dt.get(M,f.length),_.init(),f.push(_),Te(M,N,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(X,K),this.info.render.frame++,G===!0&&ht.beginShadows();const B=p.state.shadowsArray;if(ut.render(B,M,N),G===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1)&&Nt.render(_,M),p.setupLights(y._useLegacyLights),N.isArrayCamera){const z=N.cameras;for(let F=0,ft=z.length;F<ft;F++){const yt=z[F];ki(_,M,yt,yt.viewport)}}else ki(_,M,N);A!==null&&(zt.updateMultisampleRenderTarget(A),zt.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(y,M,N),_t.resetDefaultState(),k=-1,tt=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Te(M,N,B,z){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||It.intersectsSprite(M)){z&&gt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Lt);const yt=Y.update(M),Rt=M.material;Rt.visible&&_.push(M,yt,Rt,B,gt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||It.intersectsObject(M))){const yt=Y.update(M),Rt=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),gt.copy(M.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),gt.copy(yt.boundingSphere.center)),gt.applyMatrix4(M.matrixWorld).applyMatrix4(Lt)),Array.isArray(Rt)){const Pt=yt.groups;for(let jt=0,Ot=Pt.length;jt<Ot;jt++){const Bt=Pt[jt],de=Rt[Bt.materialIndex];de&&de.visible&&_.push(M,yt,de,B,gt.z,Bt)}}else Rt.visible&&_.push(M,yt,Rt,B,gt.z,null)}}const ft=M.children;for(let yt=0,Rt=ft.length;yt<Rt;yt++)Te(ft[yt],N,B,z)}function ki(M,N,B,z){const F=M.opaque,ft=M.transmissive,yt=M.transparent;p.setupLightsView(B),G===!0&&ht.setGlobalState(y.clippingPlanes,B),ft.length>0&&fs(F,ft,N,B),z&&Tt.viewport(v.copy(z)),F.length>0&&ps(F,N,B),ft.length>0&&ps(ft,N,B),yt.length>0&&ps(yt,N,B),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function fs(M,N,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const ft=Ft.isWebGL2;pt===null&&(pt=new sn(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")?as:Oi,minFilter:_i,samples:ft?4:0})),y.getDrawingBufferSize(bt),ft?pt.setSize(bt.x,bt.y):pt.setSize(Qs(bt.x),Qs(bt.y));const yt=y.getRenderTarget();y.setRenderTarget(pt),y.getClearColor(it),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),y.clear();const Rt=y.toneMapping;y.toneMapping=Ui,ps(M,B,z),zt.updateMultisampleRenderTarget(pt),zt.updateRenderTargetMipmap(pt);let Pt=!1;for(let jt=0,Ot=N.length;jt<Ot;jt++){const Bt=N[jt],de=Bt.object,Fe=Bt.geometry,xe=Bt.material,hi=Bt.group;if(xe.side===si&&de.layers.test(z.layers)){const he=xe.side;xe.side=Oe,xe.needsUpdate=!0,Ra(de,B,z,Fe,xe,hi),xe.side=he,xe.needsUpdate=!0,Pt=!0}}Pt===!0&&(zt.updateMultisampleRenderTarget(pt),zt.updateRenderTargetMipmap(pt)),y.setRenderTarget(yt),y.setClearColor(it,D),y.toneMapping=Rt}function ps(M,N,B){const z=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ft=M.length;F<ft;F++){const yt=M[F],Rt=yt.object,Pt=yt.geometry,jt=z===null?yt.material:z,Ot=yt.group;Rt.layers.test(B.layers)&&Ra(Rt,N,B,Pt,jt,Ot)}}function Ra(M,N,B,z,F,ft){M.onBeforeRender(y,N,B,z,F,ft),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(y,N,B,z,M,ft),F.transparent===!0&&F.side===si&&F.forceSinglePass===!1?(F.side=Oe,F.needsUpdate=!0,y.renderBufferDirect(B,N,z,F,M,ft),F.side=vi,F.needsUpdate=!0,y.renderBufferDirect(B,N,z,F,M,ft),F.side=si):y.renderBufferDirect(B,N,z,F,M,ft),M.onAfterRender(y,N,B,z,F,ft)}function ms(M,N,B){N.isScene!==!0&&(N=Zt);const z=kt.get(M),F=p.state.lights,ft=p.state.shadowsArray,yt=F.state.version,Rt=st.getParameters(M,F.state,ft,N,B),Pt=st.getProgramCacheKey(Rt);let jt=z.programs;z.environment=M.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(M.isMeshStandardMaterial?T:se).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,jt===void 0&&(M.addEventListener("dispose",O),jt=new Map,z.programs=jt);let Ot=jt.get(Pt);if(Ot!==void 0){if(z.currentProgram===Ot&&z.lightsStateVersion===yt)return La(M,Rt),Ot}else Rt.uniforms=st.getUniforms(M),M.onBuild(B,Rt,y),M.onBeforeCompile(Rt,y),Ot=st.acquireProgram(Rt,Pt),jt.set(Pt,Ot),z.uniforms=Rt.uniforms;const Bt=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Bt.clippingPlanes=ht.uniform),La(M,Rt),z.needsLights=Dh(M),z.lightsStateVersion=yt,z.needsLights&&(Bt.ambientLightColor.value=F.state.ambient,Bt.lightProbe.value=F.state.probe,Bt.directionalLights.value=F.state.directional,Bt.directionalLightShadows.value=F.state.directionalShadow,Bt.spotLights.value=F.state.spot,Bt.spotLightShadows.value=F.state.spotShadow,Bt.rectAreaLights.value=F.state.rectArea,Bt.ltc_1.value=F.state.rectAreaLTC1,Bt.ltc_2.value=F.state.rectAreaLTC2,Bt.pointLights.value=F.state.point,Bt.pointLightShadows.value=F.state.pointShadow,Bt.hemisphereLights.value=F.state.hemi,Bt.directionalShadowMap.value=F.state.directionalShadowMap,Bt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Bt.spotShadowMap.value=F.state.spotShadowMap,Bt.spotLightMatrix.value=F.state.spotLightMatrix,Bt.spotLightMap.value=F.state.spotLightMap,Bt.pointShadowMap.value=F.state.pointShadowMap,Bt.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Ot,z.uniformsList=null,Ot}function Ca(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Xs.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function La(M,N){const B=kt.get(M);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Ph(M,N,B,z,F){N.isScene!==!0&&(N=Zt),zt.resetTextureUnits();const ft=N.fog,yt=z.isMeshStandardMaterial?N.environment:null,Rt=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ee,Pt=(z.isMeshStandardMaterial?T:se).get(z.envMap||yt),jt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ot=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Bt=!!B.morphAttributes.position,de=!!B.morphAttributes.normal,Fe=!!B.morphAttributes.color;let xe=Ui;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(xe=y.toneMapping);const hi=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,he=hi!==void 0?hi.length:0,Ht=kt.get(z),sr=p.state.lights;if(G===!0&&(nt===!0||M!==tt)){const Ge=M===tt&&z.id===k;ht.setState(z,M,Ge)}let oe=!1;z.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==sr.state.version||Ht.outputColorSpace!==Rt||F.isBatchedMesh&&Ht.batching===!1||!F.isBatchedMesh&&Ht.batching===!0||F.isInstancedMesh&&Ht.instancing===!1||!F.isInstancedMesh&&Ht.instancing===!0||F.isSkinnedMesh&&Ht.skinning===!1||!F.isSkinnedMesh&&Ht.skinning===!0||F.isInstancedMesh&&Ht.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ht.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ht.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ht.instancingMorph===!1&&F.morphTexture!==null||Ht.envMap!==Pt||z.fog===!0&&Ht.fog!==ft||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==ht.numPlanes||Ht.numIntersection!==ht.numIntersection)||Ht.vertexAlphas!==jt||Ht.vertexTangents!==Ot||Ht.morphTargets!==Bt||Ht.morphNormals!==de||Ht.morphColors!==Fe||Ht.toneMapping!==xe||Ft.isWebGL2===!0&&Ht.morphTargetsCount!==he)&&(oe=!0):(oe=!0,Ht.__version=z.version);let Bi=Ht.currentProgram;oe===!0&&(Bi=ms(z,N,F));let Pa=!1,qn=!1,rr=!1;const we=Bi.getUniforms(),zi=Ht.uniforms;if(Tt.useProgram(Bi.program)&&(Pa=!0,qn=!0,rr=!0),z.id!==k&&(k=z.id,qn=!0),Pa||tt!==M){we.setValue(U,"projectionMatrix",M.projectionMatrix),we.setValue(U,"viewMatrix",M.matrixWorldInverse);const Ge=we.map.cameraPosition;Ge!==void 0&&Ge.setValue(U,gt.setFromMatrixPosition(M.matrixWorld)),Ft.logarithmicDepthBuffer&&we.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&we.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),tt!==M&&(tt=M,qn=!0,rr=!0)}if(F.isSkinnedMesh){we.setOptional(U,F,"bindMatrix"),we.setOptional(U,F,"bindMatrixInverse");const Ge=F.skeleton;Ge&&(Ft.floatVertexTextures?(Ge.boneTexture===null&&Ge.computeBoneTexture(),we.setValue(U,"boneTexture",Ge.boneTexture,zt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(we.setOptional(U,F,"batchingTexture"),we.setValue(U,"batchingTexture",F._matricesTexture,zt));const ar=B.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0&&Ft.isWebGL2===!0)&&ot.update(F,B,Bi),(qn||Ht.receiveShadow!==F.receiveShadow)&&(Ht.receiveShadow=F.receiveShadow,we.setValue(U,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(zi.envMap.value=Pt,zi.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),qn&&(we.setValue(U,"toneMappingExposure",y.toneMappingExposure),Ht.needsLights&&Ih(zi,rr),ft&&z.fog===!0&&J.refreshFogUniforms(zi,ft),J.refreshMaterialUniforms(zi,z,$,W,pt),Xs.upload(U,Ca(Ht),zi,zt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Xs.upload(U,Ca(Ht),zi,zt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&we.setValue(U,"center",F.center),we.setValue(U,"modelViewMatrix",F.modelViewMatrix),we.setValue(U,"normalMatrix",F.normalMatrix),we.setValue(U,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ge=z.uniformsGroups;for(let or=0,Nh=Ge.length;or<Nh;or++)if(Ft.isWebGL2){const Ia=Ge[or];vt.update(Ia,Bi),vt.bind(Ia,Bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bi}function Ih(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Dh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,N,B){kt.get(M.texture).__webglTexture=N,kt.get(M.depthTexture).__webglTexture=B;const z=kt.get(M);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,N){const B=kt.get(M);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,B=0){A=M,P=N,C=B;let z=!0,F=null,ft=!1,yt=!1;if(M){const Pt=kt.get(M);Pt.__useDefaultFramebuffer!==void 0?(Tt.bindFramebuffer(U.FRAMEBUFFER,null),z=!1):Pt.__webglFramebuffer===void 0?zt.setupRenderTarget(M):Pt.__hasExternalTextures&&zt.rebindTextures(M,kt.get(M.texture).__webglTexture,kt.get(M.depthTexture).__webglTexture);const jt=M.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(yt=!0);const Ot=kt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ot[N])?F=Ot[N][B]:F=Ot[N],ft=!0):Ft.isWebGL2&&M.samples>0&&zt.useMultisampledRTT(M)===!1?F=kt.get(M).__webglMultisampledFramebuffer:Array.isArray(Ot)?F=Ot[B]:F=Ot,v.copy(M.viewport),R.copy(M.scissor),at=M.scissorTest}else v.copy(Q).multiplyScalar($).floor(),R.copy(lt).multiplyScalar($).floor(),at=mt;if(Tt.bindFramebuffer(U.FRAMEBUFFER,F)&&Ft.drawBuffers&&z&&Tt.drawBuffers(M,F),Tt.viewport(v),Tt.scissor(R),Tt.setScissorTest(at),ft){const Pt=kt.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,Pt.__webglTexture,B)}else if(yt){const Pt=kt.get(M.texture),jt=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.__webglTexture,B||0,jt)}k=-1},this.readRenderTargetPixels=function(M,N,B,z,F,ft,yt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=kt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){Tt.bindFramebuffer(U.FRAMEBUFFER,Rt);try{const Pt=M.texture,jt=Pt.format,Ot=Pt.type;if(jt!==je&&St.convert(jt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Bt=Ot===as&&(Et.has("EXT_color_buffer_half_float")||Ft.isWebGL2&&Et.has("EXT_color_buffer_float"));if(Ot!==Oi&&St.convert(Ot)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ot===$e&&(Ft.isWebGL2||Et.has("OES_texture_float")||Et.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-z&&B>=0&&B<=M.height-F&&U.readPixels(N,B,z,F,St.convert(jt),St.convert(Ot),ft)}finally{const Pt=A!==null?kt.get(A).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(M,N,B=0){const z=Math.pow(2,-B),F=Math.floor(N.image.width*z),ft=Math.floor(N.image.height*z);zt.setTexture2D(N,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,M.x,M.y,F,ft),Tt.unbindTexture()},this.copyTextureToTexture=function(M,N,B,z=0){const F=N.image.width,ft=N.image.height,yt=St.convert(B.format),Rt=St.convert(B.type);zt.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment),N.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,M.x,M.y,F,ft,yt,Rt,N.image.data):N.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,M.x,M.y,N.mipmaps[0].width,N.mipmaps[0].height,yt,N.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,z,M.x,M.y,yt,Rt,N.image),z===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(M,N,B,z,F=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ft=Math.round(M.max.x-M.min.x),yt=Math.round(M.max.y-M.min.y),Rt=M.max.z-M.min.z+1,Pt=St.convert(z.format),jt=St.convert(z.type);let Ot;if(z.isData3DTexture)zt.setTexture3D(z,0),Ot=U.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)zt.setTexture2DArray(z,0),Ot=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const Bt=U.getParameter(U.UNPACK_ROW_LENGTH),de=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Fe=U.getParameter(U.UNPACK_SKIP_PIXELS),xe=U.getParameter(U.UNPACK_SKIP_ROWS),hi=U.getParameter(U.UNPACK_SKIP_IMAGES),he=B.isCompressedTexture?B.mipmaps[F]:B.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,he.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,he.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,M.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,M.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,M.min.z),B.isDataTexture||B.isData3DTexture?U.texSubImage3D(Ot,F,N.x,N.y,N.z,ft,yt,Rt,Pt,jt,he.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(Ot,F,N.x,N.y,N.z,ft,yt,Rt,Pt,he.data):U.texSubImage3D(Ot,F,N.x,N.y,N.z,ft,yt,Rt,Pt,jt,he),U.pixelStorei(U.UNPACK_ROW_LENGTH,Bt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,de),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Fe),U.pixelStorei(U.UNPACK_SKIP_ROWS,xe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,hi),F===0&&z.generateMipmaps&&U.generateMipmap(Ot),Tt.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?zt.setTextureCube(M,0):M.isData3DTexture?zt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?zt.setTexture2DArray(M,0):zt.setTexture2D(M,0),Tt.unbindTexture()},this.resetState=function(){P=0,C=0,A=null,Tt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===pa?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===tr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class cg extends dh{}cg.prototype.isWebGL1Renderer=!0;class ug extends le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class dg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ia,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Je()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ql("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pe=new I;class va{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Qe(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=te(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qe(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qe(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qe(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qe(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),i=te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),i=te(i,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),i=te(i,this.array),n=te(n,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new va(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const sl=new I,rl=new ne,al=new ne,fg=new I,ol=new Wt,Fs=new I,Br=new oi,ll=new Wt,zr=new hs;class pg extends ze{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ba,this.bindMatrix=new Wt,this.bindMatrixInverse=new Wt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new yi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Fs),this.boundingBox.expandByPoint(Fs)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Fs),this.boundingSphere.expandByPoint(Fs)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(n),t.ray.intersectsSphere(Br)!==!1&&(ll.copy(n).invert(),zr.copy(t.ray).applyMatrix4(ll),!(this.boundingBox!==null&&zr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,zr)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ne,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Ba?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xc?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,n=this.geometry;rl.fromBufferAttribute(n.attributes.skinIndex,t),al.fromBufferAttribute(n.attributes.skinWeight,t),sl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=al.getComponent(r);if(a!==0){const o=rl.getComponent(r);ol.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(fg.copy(sl).applyMatrix4(ol),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class fh extends le{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ph extends Me{constructor(t=null,e=1,i=1,n,r,a,o,l,h=ye,c=ye,u,d){super(null,a,o,l,h,c,n,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hl=new Wt,mg=new Wt;class ya{constructor(t=[],e=[]){this.uuid=Je(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Wt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new Wt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:mg;hl.multiplyMatrices(o,e[r]),hl.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new ya(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new ph(e,t,t,je,$e);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){const r=t.bones[i];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new fh),this.bones.push(a),this.boneInverses.push(new Wt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let n=0,r=e.length;n<r;n++){const a=e[n];t.bones.push(a.uuid);const o=i[n];t.boneInverses.push(o.toArray())}return t}}class aa extends Ue{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Tn=new Wt,cl=new Wt,ks=[],ul=new yi,gg=new Wt,Jn=new ze,ts=new oi;class _g extends ze{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new aa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,gg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Tn),ul.copy(t.boundingBox).applyMatrix4(Tn),this.boundingBox.union(ul)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Tn),ts.copy(t.boundingSphere).applyMatrix4(Tn),this.boundingSphere.union(ts)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(Jn.geometry=this.geometry,Jn.material=this.material,Jn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ts.copy(this.boundingSphere),ts.applyMatrix4(i),t.ray.intersectsSphere(ts)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Tn),cl.multiplyMatrices(i,Tn),Jn.matrixWorld=cl,Jn.raycast(t,ks);for(let a=0,o=ks.length;a<o;a++){const l=ks[a];l.instanceId=r,l.object=this,e.push(l)}ks.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new aa(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new ph(new Float32Array(n*this.count),n,this.count,Bl,$e));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<i.length;h++)a+=i[h];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const dl=new I,fl=new I,pl=new Wt,Hr=new hs,Bs=new oi;class Ma extends le{constructor(t=new Ye,e=new nr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)dl.fromBufferAttribute(e,n-1),fl.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=dl.distanceTo(fl);t.setAttribute("lineDistance",new He(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(n),Bs.radius+=r,t.ray.intersectsSphere(Bs)===!1)return;pl.copy(n).invert(),Hr.copy(t.ray).applyMatrix4(pl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=new I,c=new I,u=new I,d=new I,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const f=Math.max(0,a.start),b=Math.min(g.count,a.start+a.count);for(let y=f,E=b-1;y<E;y+=m){const P=g.getX(y),C=g.getX(y+1);if(h.fromBufferAttribute(p,P),c.fromBufferAttribute(p,C),Hr.distanceSqToSegment(h,c,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const k=t.ray.origin.distanceTo(d);k<t.near||k>t.far||e.push({distance:k,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),b=Math.min(p.count,a.start+a.count);for(let y=f,E=b-1;y<E;y+=m){if(h.fromBufferAttribute(p,y),c.fromBufferAttribute(p,y+1),Hr.distanceSqToSegment(h,c,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(d);C<t.near||C>t.far||e.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const ml=new I,gl=new I;class ba extends Ma{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)ml.fromBufferAttribute(e,n),gl.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+ml.distanceTo(gl);t.setAttribute("lineDistance",new He(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xg extends Ma{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class mh extends ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _l=new Wt,oa=new hs,zs=new oi,Hs=new I;class vg extends le{constructor(t=new Ye,e=new mh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(n),zs.radius+=r,t.ray.intersectsSphere(zs)===!1)return;_l.copy(n).invert(),oa.copy(t.ray).applyMatrix4(_l);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,u=i.attributes.position;if(h!==null){const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,_=m;g<_;g++){const p=h.getX(g);Hs.fromBufferAttribute(u,p),xl(Hs,p,l,n,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=d,_=m;g<_;g++)Hs.fromBufferAttribute(u,g),xl(Hs,g,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function xl(s,t,e,i,n,r,a){const o=oa.distanceSqToPoint(s);if(o<e){const l=new I;oa.closestPointToPoint(s,l),l.applyMatrix4(i);const h=n.ray.origin.distanceTo(l);if(h<n.near||h>n.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Sa extends ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mi extends Sa{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new At(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class yg extends ti{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Mt(16777215),this.specular=new Mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Gs(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Mg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function bg(s){function t(n,r){return s[n]-s[r]}const e=s.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function vl(s,t,e){const i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){const o=e[r]*t;for(let l=0;l!==t;++l)n[a++]=s[o+l]}return n}function gh(s,t,e,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(t.push(r.time),e.push(a)),r=s[n++];while(r!==void 0)}class us{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){const o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){const o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Sg extends us{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uo,endingEnd:uo}}intervalChanged_(t,e,i){const n=this.parameterPositions;let r=t-2,a=t+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case fo:r=t,o=2*e-i;break;case po:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case fo:a=t,l=2*i-e;break;case po:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}const h=(i-e)*.5,c=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(t,e,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-e)/(n-e),_=g*g,p=_*g,f=-d*p+2*d*_-d*g,b=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-m)*p+(1.5+m)*_+.5*g,E=m*p-m*_;for(let P=0;P!==o;++P)r[P]=f*a[c+P]+b*a[h+P]+y*a[l+P]+E*a[u+P];return r}}class Eg extends us{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=(i-e)/(n-e),u=1-c;for(let d=0;d!==o;++d)r[d]=a[h+d]*u+a[l+d]*c;return r}}class Tg extends us{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}}class li{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gs(e,this.TimeBufferType),this.values=Gs(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Gs(t.times,Array),values:Gs(t.values,Array)};const n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Tg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Eg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sg(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case os:e=this.InterpolantFactoryMethodDiscrete;break;case Bn:e=this.InterpolantFactoryMethodLinear;break;case fr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return os;case this.InterpolantFactoryMethodLinear:return Bn;case this.InterpolantFactoryMethodSmooth:return fr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){const i=this.times,n=i.length;let r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Mg(n))for(let o=0,l=n.length;o!==l;++o){const h=n[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===fr,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const h=t[o],c=t[o+1];if(h!==c&&(o!==1||h!==t[0]))if(n)l=!0;else{const u=o*i,d=u-i,m=u+i;for(let g=0;g!==i;++g){const _=e[u+g];if(_!==e[d+g]||_!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const u=o*i,d=a*i;for(let m=0;m!==i;++m)e[d+m]=e[u+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,h=0;h!==i;++h)e[l+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=Bn;class Xn extends li{}Xn.prototype.ValueTypeName="bool";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=os;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;class _h extends li{}_h.prototype.ValueTypeName="color";class Gn extends li{}Gn.prototype.ValueTypeName="number";class wg extends us{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e);let h=t*o;for(let c=h+o;h!==c;h+=4)ai.slerpFlat(r,0,a,h-o,a,h,l);return r}}class rn extends li{InterpolantFactoryMethodLinear(t){return new wg(this.times,this.values,this.getValueSize(),t)}}rn.prototype.ValueTypeName="quaternion";rn.prototype.DefaultInterpolation=Bn;rn.prototype.InterpolantFactoryMethodSmooth=void 0;class jn extends li{}jn.prototype.ValueTypeName="string";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=os;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;class Vn extends li{}Vn.prototype.ValueTypeName="vector";class Ag{constructor(t,e=-1,i,n=wc){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=Je(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,n=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(Cg(i[a]).scale(n));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=i.length;r!==a;++r)e.push(li.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(t,e,i,n){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],h=[];l.push((o+r-1)%r,o,(o+1)%r),h.push(0,1,0);const c=bg(l);l=vl(l,1,c),h=vl(h,1,c),!n&&l[0]===0&&(l.push(r),h.push(h[0])),a.push(new Gn(".morphTargetInfluences["+e[o].name+"]",l,h).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const h=t[o],c=h.name.match(r);if(c&&c.length>1){const u=c[1];let d=n[u];d||(n[u]=d=[]),d.push(h)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],e,i));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,m,g,_){if(m.length!==0){const p=[],f=[];gh(m,p,f,g),p.length!==0&&_.push(new u(d,p,f))}},n=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const h=t.hierarchy||[];for(let u=0;u<h.length;u++){const d=h[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)m[d[g].morphTargets[_]]=-1;for(const _ in m){const p=[],f=[];for(let b=0;b!==d[g].morphTargets.length;++b){const y=d[g];p.push(y.time),f.push(y.morphTarget===_?1:0)}n.push(new Gn(".morphTargetInfluence["+_+"]",p,f))}l=m.length*a}else{const m=".bones["+e[u].name+"]";i(Vn,m+".position",d,"pos",n),i(rn,m+".quaternion",d,"rot",n),i(Vn,m+".scale",d,"scl",n)}}return n.length===0?null:new this(r,l,n,o)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,n=t.length;i!==n;++i){const r=this.tracks[i];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Rg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gn;case"vector":case"vector2":case"vector3":case"vector4":return Vn;case"color":return _h;case"quaternion":return rn;case"bool":case"boolean":return Xn;case"string":return jn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Cg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Rg(s.type);if(s.times===void 0){const e=[],i=[];gh(s.keys,e,i,"value"),s.times=e,s.values=i}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Di={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class xh{constructor(t,e,i){const n=this;let r=!1,a=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){o++,r===!1&&n.onStart!==void 0&&n.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,n.onProgress!==void 0&&n.onProgress(c,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){const u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){const m=h[u],g=h[u+1];if(m.global&&(m.lastIndex=0),m.test(c))return g}return null}}}const Lg=new xh;class Yn{constructor(t){this.manager=t!==void 0?t:Lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Yn.DEFAULT_MATERIAL_NAME="__DEFAULT";const mi={};class Pg extends Error{constructor(t,e){super(t),this.response=e}}class vh extends Yn{constructor(t){super(t)}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Di.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(mi[t]!==void 0){mi[t].push({onLoad:e,onProgress:i,onError:n});return}mi[t]=[],mi[t].push({onLoad:e,onProgress:i,onError:n});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const c=mi[t],u=h.body.getReader(),d=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0;let _=0;const p=new ReadableStream({start(f){b();function b(){u.read().then(({done:y,value:E})=>{if(y)f.close();else{_+=E.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let C=0,A=c.length;C<A;C++){const k=c[C];k.onProgress&&k.onProgress(P)}f.enqueue(E),b()}})}}});return new Response(p)}else throw new Pg(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return h.json();default:if(o===void 0)return h.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return h.arrayBuffer().then(g=>m.decode(g))}}}).then(h=>{Di.add(t,h);const c=mi[t];delete mi[t];for(let u=0,d=c.length;u<d;u++){const m=c[u];m.onLoad&&m.onLoad(h)}}).catch(h=>{const c=mi[t];if(c===void 0)throw this.manager.itemError(t),h;delete mi[t];for(let u=0,d=c.length;u<d;u++){const m=c[u];m.onError&&m.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Ig extends Yn{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Di.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=ls("img");function l(){c(),Di.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(u){c(),n&&n(u),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class yh extends Yn{constructor(t){super(t)}load(t,e,i,n){const r=new Me,a=new Ig(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,n),r}}class ds extends le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Dg extends ds{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Gr=new Wt,yl=new I,Ml=new I;class Ea{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ga,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;yl.setFromMatrixPosition(t.matrixWorld),e.position.copy(yl),Ml.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ml),e.updateMatrixWorld(),Gr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ng extends Ea{constructor(){super(new Ne(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=zn*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||n!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ug extends ds{constructor(t,e,i=0,n=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ng}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const bl=new Wt,es=new I,Vr=new I;class Og extends Ea{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),es.setFromMatrixPosition(t.matrixWorld),i.position.copy(es),Vr.copy(i.position),Vr.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Vr),i.updateMatrixWorld(),n.makeTranslation(-es.x,-es.y,-es.z),bl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl)}}class Fg extends ds{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Og}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class kg extends Ea{constructor(){super(new _a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mh extends ds{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new kg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Bg extends ds{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class rs{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let i=0,n=t.length;i<n;i++)e+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class zg extends Yn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Di.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(h=>{e&&e(h),r.manager.itemEnd(t)}).catch(h=>{n&&n(h)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(t,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){return Di.add(t,h),e&&e(h),r.manager.itemEnd(t),h}).catch(function(h){n&&n(h),Di.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Di.add(t,l),r.manager.itemStart(t)}}const Ta="\\[\\]\\.:\\/",Hg=new RegExp("["+Ta+"]","g"),wa="[^"+Ta+"]",Gg="[^"+Ta.replace("\\.","")+"]",Vg=/((?:WC+[\/:])*)/.source.replace("WC",wa),Wg=/(WCOD+)?/.source.replace("WCOD",Gg),Xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wa),jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wa),Yg=new RegExp("^"+Vg+Wg+Xg+jg+"$"),qg=["material","materials","bones","map"];class Kg{constructor(t,e,i){const n=i||ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class ee{constructor(t,e,i){this.path=e,this.parsedPath=i||ee.parseTrackName(e),this.node=ee.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new ee.Composite(t,e,i):new ee(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hg,"")}static parseTrackName(t){const e=Yg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);qg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,n=e.propertyName;let r=e.propertyIndex;if(t||(t=ee.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}const a=t[n];if(a===void 0){const h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ee.Composite=Kg;ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ee.prototype.GetterByBindingType=[ee.prototype._getValue_direct,ee.prototype._getValue_array,ee.prototype._getValue_arrayElement,ee.prototype._getValue_toArray];ee.prototype.SetterByBindingTypeAndVersioning=[[ee.prototype._setValue_direct,ee.prototype._setValue_direct_setNeedsUpdate,ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_array,ee.prototype._setValue_array_setNeedsUpdate,ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_arrayElement,ee.prototype._setValue_arrayElement_setNeedsUpdate,ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_fromArray,ee.prototype._setValue_fromArray_setNeedsUpdate,ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Sl{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zg extends ba{constructor(t=10,e=10,i=4473924,n=8947848){i=new Mt(i),n=new Mt(n);const r=e/2,a=t/e,o=t/2,l=[],h=[];for(let d=0,m=0,g=-o;d<=e;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=d===r?i:n;_.toArray(h,m),m+=3,_.toArray(h,m),m+=3,_.toArray(h,m),m+=3,_.toArray(h,m),m+=3}const c=new Ye;c.setAttribute("position",new He(l,3)),c.setAttribute("color",new He(h,3));const u=new nr({vertexColors:!0,toneMapped:!1});super(c,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class $g extends ba{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new Ye;n.setAttribute("position",new He(e,3)),n.setAttribute("color",new He(i,3));const r=new nr({vertexColors:!0,toneMapped:!1});super(n,r),this.type="AxesHelper"}setColors(t,e,i){const n=new Mt,r=this.geometry.attributes.color.array;return n.set(t),n.toArray(r,0),n.toArray(r,3),n.set(e),n.toArray(r,6),n.toArray(r,9),n.set(i),n.toArray(r,12),n.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ca);const El={type:"change"},Wr={type:"start"},Tl={type:"end"},Vs=new hs,wl=new Ci,Qg=Math.cos(70*jl.DEG2RAD);class Jg extends an{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:on.ROTATE,MIDDLE:on.DOLLY,RIGHT:on.PAN},this.touches={ONE:ln.ROTATE,TWO:ln.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",wt),this._domElementKeyEvents=w},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",wt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(El),i.update(),r=n.NONE},this.update=function(){const w=new I,q=new ai().setFromUnitVectors(t.up,new I(0,1,0)),xt=q.clone().invert(),L=new I,rt=new ai,O=new I,et=2*Math.PI;return function(Yt=null){const Jt=i.object.position;w.copy(Jt).sub(i.target),w.applyQuaternion(q),o.setFromVector3(w),i.autoRotate&&r===n.NONE&&at(v(Yt)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ie=i.minAzimuthAngle,ue=i.maxAzimuthAngle;isFinite(ie)&&isFinite(ue)&&(ie<-Math.PI?ie+=et:ie>Math.PI&&(ie-=et),ue<-Math.PI?ue+=et:ue>Math.PI&&(ue-=et),ie<=ue?o.theta=Math.max(ie,Math.min(ue,o.theta)):o.theta=o.theta>(ie+ue)/2?Math.max(ie,o.theta):Math.min(ue,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let $t=!1;if(i.zoomToCursor&&C||i.object.isOrthographicCamera)o.radius=Q(o.radius);else{const re=o.radius;o.radius=Q(o.radius*h),$t=re!=o.radius}if(w.setFromSpherical(o),w.applyQuaternion(xt),Jt.copy(i.target).add(w),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),i.zoomToCursor&&C){let re=null;if(i.object.isPerspectiveCamera){const Te=w.length();re=Q(Te*h);const ki=Te-re;i.object.position.addScaledVector(E,ki),i.object.updateMatrixWorld(),$t=!!ki}else if(i.object.isOrthographicCamera){const Te=new I(P.x,P.y,0);Te.unproject(i.object);const ki=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),$t=ki!==i.object.zoom;const fs=new I(P.x,P.y,0);fs.unproject(i.object),i.object.position.sub(fs).add(Te),i.object.updateMatrixWorld(),re=w.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;re!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(re).add(i.object.position):(Vs.origin.copy(i.object.position),Vs.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Vs.direction))<Qg?t.lookAt(i.target):(wl.setFromNormalAndCoplanarPoint(i.object.up,i.target),Vs.intersectPlane(wl,i.target))))}else if(i.object.isOrthographicCamera){const re=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),re!==i.object.zoom&&(i.object.updateProjectionMatrix(),$t=!0)}return h=1,C=!1,$t||L.distanceToSquared(i.object.position)>a||8*(1-rt.dot(i.object.quaternion))>a||O.distanceToSquared(i.target)>a?(i.dispatchEvent(El),L.copy(i.object.position),rt.copy(i.object.quaternion),O.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Nt),i.domElement.removeEventListener("pointerdown",zt),i.domElement.removeEventListener("pointercancel",T),i.domElement.removeEventListener("wheel",Y),i.domElement.removeEventListener("pointermove",se),i.domElement.removeEventListener("pointerup",T),i.domElement.getRootNode().removeEventListener("keydown",J,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",wt),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=n.NONE;const a=1e-6,o=new Sl,l=new Sl;let h=1;const c=new I,u=new At,d=new At,m=new At,g=new At,_=new At,p=new At,f=new At,b=new At,y=new At,E=new I,P=new At;let C=!1;const A=[],k={};let tt=!1;function v(w){return w!==null?2*Math.PI/60*i.autoRotateSpeed*w:2*Math.PI/60/60*i.autoRotateSpeed}function R(w){const q=Math.abs(w*.01);return Math.pow(.95,i.zoomSpeed*q)}function at(w){l.theta-=w}function it(w){l.phi-=w}const D=function(){const w=new I;return function(xt,L){w.setFromMatrixColumn(L,0),w.multiplyScalar(-xt),c.add(w)}}(),j=function(){const w=new I;return function(xt,L){i.screenSpacePanning===!0?w.setFromMatrixColumn(L,1):(w.setFromMatrixColumn(L,0),w.crossVectors(i.object.up,w)),w.multiplyScalar(xt),c.add(w)}}(),W=function(){const w=new I;return function(xt,L){const rt=i.domElement;if(i.object.isPerspectiveCamera){const O=i.object.position;w.copy(O).sub(i.target);let et=w.length();et*=Math.tan(i.object.fov/2*Math.PI/180),D(2*xt*et/rt.clientHeight,i.object.matrix),j(2*L*et/rt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(D(xt*(i.object.right-i.object.left)/i.object.zoom/rt.clientWidth,i.object.matrix),j(L*(i.object.top-i.object.bottom)/i.object.zoom/rt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(w){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h/=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(w){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h*=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(w,q){if(!i.zoomToCursor)return;C=!0;const xt=i.domElement.getBoundingClientRect(),L=w-xt.left,rt=q-xt.top,O=xt.width,et=xt.height;P.x=L/O*2-1,P.y=-(rt/et)*2+1,E.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function Q(w){return Math.max(i.minDistance,Math.min(i.maxDistance,w))}function lt(w){u.set(w.clientX,w.clientY)}function mt(w){K(w.clientX,w.clientX),f.set(w.clientX,w.clientY)}function It(w){g.set(w.clientX,w.clientY)}function G(w){d.set(w.clientX,w.clientY),m.subVectors(d,u).multiplyScalar(i.rotateSpeed);const q=i.domElement;at(2*Math.PI*m.x/q.clientHeight),it(2*Math.PI*m.y/q.clientHeight),u.copy(d),i.update()}function nt(w){b.set(w.clientX,w.clientY),y.subVectors(b,f),y.y>0?$(R(y.y)):y.y<0&&X(R(y.y)),f.copy(b),i.update()}function pt(w){_.set(w.clientX,w.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),W(p.x,p.y),g.copy(_),i.update()}function Lt(w){K(w.clientX,w.clientY),w.deltaY<0?X(R(w.deltaY)):w.deltaY>0&&$(R(w.deltaY)),i.update()}function bt(w){let q=!1;switch(w.code){case i.keys.UP:w.ctrlKey||w.metaKey||w.shiftKey?it(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,i.keyPanSpeed),q=!0;break;case i.keys.BOTTOM:w.ctrlKey||w.metaKey||w.shiftKey?it(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,-i.keyPanSpeed),q=!0;break;case i.keys.LEFT:w.ctrlKey||w.metaKey||w.shiftKey?at(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(i.keyPanSpeed,0),q=!0;break;case i.keys.RIGHT:w.ctrlKey||w.metaKey||w.shiftKey?at(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(-i.keyPanSpeed,0),q=!0;break}q&&(w.preventDefault(),i.update())}function gt(w){if(A.length===1)u.set(w.pageX,w.pageY);else{const q=_t(w),xt=.5*(w.pageX+q.x),L=.5*(w.pageY+q.y);u.set(xt,L)}}function Zt(w){if(A.length===1)g.set(w.pageX,w.pageY);else{const q=_t(w),xt=.5*(w.pageX+q.x),L=.5*(w.pageY+q.y);g.set(xt,L)}}function Ct(w){const q=_t(w),xt=w.pageX-q.x,L=w.pageY-q.y,rt=Math.sqrt(xt*xt+L*L);f.set(0,rt)}function U(w){i.enableZoom&&Ct(w),i.enablePan&&Zt(w)}function me(w){i.enableZoom&&Ct(w),i.enableRotate&&gt(w)}function Et(w){if(A.length==1)d.set(w.pageX,w.pageY);else{const xt=_t(w),L=.5*(w.pageX+xt.x),rt=.5*(w.pageY+xt.y);d.set(L,rt)}m.subVectors(d,u).multiplyScalar(i.rotateSpeed);const q=i.domElement;at(2*Math.PI*m.x/q.clientHeight),it(2*Math.PI*m.y/q.clientHeight),u.copy(d)}function Ft(w){if(A.length===1)_.set(w.pageX,w.pageY);else{const q=_t(w),xt=.5*(w.pageX+q.x),L=.5*(w.pageY+q.y);_.set(xt,L)}p.subVectors(_,g).multiplyScalar(i.panSpeed),W(p.x,p.y),g.copy(_)}function Tt(w){const q=_t(w),xt=w.pageX-q.x,L=w.pageY-q.y,rt=Math.sqrt(xt*xt+L*L);b.set(0,rt),y.set(0,Math.pow(b.y/f.y,i.zoomSpeed)),$(y.y),f.copy(b);const O=(w.pageX+q.x)*.5,et=(w.pageY+q.y)*.5;K(O,et)}function qt(w){i.enableZoom&&Tt(w),i.enablePan&&Ft(w)}function kt(w){i.enableZoom&&Tt(w),i.enableRotate&&Et(w)}function zt(w){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(w.pointerId),i.domElement.addEventListener("pointermove",se),i.domElement.addEventListener("pointerup",T)),!Xt(w)&&(ot(w),w.pointerType==="touch"?ht(w):x(w)))}function se(w){i.enabled!==!1&&(w.pointerType==="touch"?ut(w):V(w))}function T(w){switch(ce(w),A.length){case 0:i.domElement.releasePointerCapture(w.pointerId),i.domElement.removeEventListener("pointermove",se),i.domElement.removeEventListener("pointerup",T),i.dispatchEvent(Tl),r=n.NONE;break;case 1:const q=A[0],xt=k[q];ht({pointerId:q,pageX:xt.x,pageY:xt.y});break}}function x(w){let q;switch(w.button){case 0:q=i.mouseButtons.LEFT;break;case 1:q=i.mouseButtons.MIDDLE;break;case 2:q=i.mouseButtons.RIGHT;break;default:q=-1}switch(q){case on.DOLLY:if(i.enableZoom===!1)return;mt(w),r=n.DOLLY;break;case on.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enablePan===!1)return;It(w),r=n.PAN}else{if(i.enableRotate===!1)return;lt(w),r=n.ROTATE}break;case on.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enableRotate===!1)return;lt(w),r=n.ROTATE}else{if(i.enablePan===!1)return;It(w),r=n.PAN}break;default:r=n.NONE}r!==n.NONE&&i.dispatchEvent(Wr)}function V(w){switch(r){case n.ROTATE:if(i.enableRotate===!1)return;G(w);break;case n.DOLLY:if(i.enableZoom===!1)return;nt(w);break;case n.PAN:if(i.enablePan===!1)return;pt(w);break}}function Y(w){i.enabled===!1||i.enableZoom===!1||r!==n.NONE||(w.preventDefault(),i.dispatchEvent(Wr),Lt(st(w)),i.dispatchEvent(Tl))}function st(w){const q=w.deltaMode,xt={clientX:w.clientX,clientY:w.clientY,deltaY:w.deltaY};switch(q){case 1:xt.deltaY*=16;break;case 2:xt.deltaY*=100;break}return w.ctrlKey&&!tt&&(xt.deltaY*=10),xt}function J(w){w.key==="Control"&&(tt=!0,i.domElement.getRootNode().addEventListener("keyup",Dt,{passive:!0,capture:!0}))}function Dt(w){w.key==="Control"&&(tt=!1,i.domElement.getRootNode().removeEventListener("keyup",Dt,{passive:!0,capture:!0}))}function wt(w){i.enabled===!1||i.enablePan===!1||bt(w)}function ht(w){switch(St(w),A.length){case 1:switch(i.touches.ONE){case ln.ROTATE:if(i.enableRotate===!1)return;gt(w),r=n.TOUCH_ROTATE;break;case ln.PAN:if(i.enablePan===!1)return;Zt(w),r=n.TOUCH_PAN;break;default:r=n.NONE}break;case 2:switch(i.touches.TWO){case ln.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;U(w),r=n.TOUCH_DOLLY_PAN;break;case ln.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;me(w),r=n.TOUCH_DOLLY_ROTATE;break;default:r=n.NONE}break;default:r=n.NONE}r!==n.NONE&&i.dispatchEvent(Wr)}function ut(w){switch(St(w),r){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;Et(w),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;Ft(w),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;qt(w),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;kt(w),i.update();break;default:r=n.NONE}}function Nt(w){i.enabled!==!1&&w.preventDefault()}function ot(w){A.push(w.pointerId)}function ce(w){delete k[w.pointerId];for(let q=0;q<A.length;q++)if(A[q]==w.pointerId){A.splice(q,1);return}}function Xt(w){for(let q=0;q<A.length;q++)if(A[q]==w.pointerId)return!0;return!1}function St(w){let q=k[w.pointerId];q===void 0&&(q=new At,k[w.pointerId]=q),q.set(w.pageX,w.pageY)}function _t(w){const q=w.pointerId===A[0]?A[1]:A[0];return k[q]}i.domElement.addEventListener("contextmenu",Nt),i.domElement.addEventListener("pointerdown",zt),i.domElement.addEventListener("pointercancel",T),i.domElement.addEventListener("wheel",Y,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",J,{passive:!0,capture:!0}),this.update()}}function Al(s,t){if(t===Ac)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===ea||t===Wl){let e=s.getIndex();if(e===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=e.count-2,n=[];if(t===ea)for(let a=1;a<=i;a++)n.push(e.getX(0)),n.push(e.getX(a)),n.push(e.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(e.getX(a)),n.push(e.getX(a+1)),n.push(e.getX(a+2))):(n.push(e.getX(a+2)),n.push(e.getX(a+1)),n.push(e.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class t0 extends Yn{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new r0(e)}),this.register(function(e){return new p0(e)}),this.register(function(e){return new m0(e)}),this.register(function(e){return new g0(e)}),this.register(function(e){return new o0(e)}),this.register(function(e){return new l0(e)}),this.register(function(e){return new h0(e)}),this.register(function(e){return new c0(e)}),this.register(function(e){return new s0(e)}),this.register(function(e){return new u0(e)}),this.register(function(e){return new a0(e)}),this.register(function(e){return new f0(e)}),this.register(function(e){return new d0(e)}),this.register(function(e){return new i0(e)}),this.register(function(e){return new _0(e)}),this.register(function(e){return new x0(e)})}load(t,e,i,n){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const h=rs.extractUrlBase(t);a=rs.resolveURL(h,this.path)}else a=rs.extractUrlBase(t);this.manager.itemStart(t);const o=function(h){n?n(h):console.error(h),r.manager.itemError(t),r.manager.itemEnd(t)},l=new vh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(h){try{r.parse(h,a,function(c){e(c),r.manager.itemEnd(t)},o)}catch(c){o(c)}},i,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,n){let r;const a={},o={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===bh){try{a[Kt.KHR_BINARY_GLTF]=new v0(t)}catch(u){n&&n(u);return}r=JSON.parse(a[Kt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new I0(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](h);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){const u=r.extensionsUsed[c],d=r.extensionsRequired||[];switch(u){case Kt.KHR_MATERIALS_UNLIT:a[u]=new n0;break;case Kt.KHR_DRACO_MESH_COMPRESSION:a[u]=new y0(r,this.dracoLoader);break;case Kt.KHR_TEXTURE_TRANSFORM:a[u]=new M0;break;case Kt.KHR_MESH_QUANTIZATION:a[u]=new b0;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}h.setExtensions(a),h.setPlugins(o),h.parse(i,n)}parseAsync(t,e){const i=this;return new Promise(function(n,r){i.parse(t,e,n,r)})}}function e0(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const Kt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class i0{constructor(t){this.parser=t,this.name=Kt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let i=0,n=e.length;i<n;i++){const r=e[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,i="light:"+t;let n=e.cache.get(i);if(n)return n;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let h;const c=new Mt(16777215);l.color!==void 0&&c.setRGB(l.color[0],l.color[1],l.color[2],Ee);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new Mh(c),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Fg(c),h.distance=u;break;case"spot":h=new Ug(c),h.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,Li(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=e.createUniqueName(l.name||"light_"+t),n=Promise.resolve(h),e.cache.add(i,n),n}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,i=this.parser,r=i.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(e.cache,o,l)})}}class n0{constructor(){this.name=Kt.KHR_MATERIALS_UNLIT}getMaterialType(){return $i}extendParams(t,e,i){const n=[];t.color=new Mt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],Ee),t.opacity=a[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(t,"map",r.baseColorTexture,De))}return Promise.all(n)}}class s0{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class r0{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new At(o,o)}return Promise.all(r)}}class a0{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class o0{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_SHEEN}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new Mt(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],Ee)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(e,"sheenColorMap",a.sheenColorTexture,De)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class l0{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class h0{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_VOLUME}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new Mt().setRGB(o[0],o[1],o[2],Ee),Promise.all(r)}}class c0{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_IOR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(t,e){const n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class u0{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new Mt().setRGB(o[0],o[1],o[2],Ee),a.specularColorTexture!==void 0&&r.push(i.assignTexture(e,"specularColorMap",a.specularColorTexture,De)),Promise.all(r)}}class d0{constructor(t){this.parser=t,this.name=Kt.EXT_MATERIALS_BUMP}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}}class f0{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Mi}extendMaterialParams(t,e){const i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class p0{constructor(t){this.parser=t,this.name=Kt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,i=e.json,n=i.textures[t];if(!n.extensions||!n.extensions[this.name])return null;const r=n.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}}class m0{constructor(t){this.parser=t,this.name=Kt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,i=this.parser,n=i.json,r=n.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const h=i.options.manager.getHandler(o.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(t,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class g0{constructor(t){this.parser=t,this.name=Kt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,i=this.parser,n=i.json,r=n.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const h=i.options.manager.getHandler(o.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(t,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class _0{constructor(t){this.name=Kt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=n.byteOffset||0,h=n.byteLength||0,c=n.count,u=n.byteStride,d=new Uint8Array(o,l,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(c,u,d,n.mode,n.filter).then(function(m){return m.buffer}):a.ready.then(function(){const m=new ArrayBuffer(c*u);return a.decodeGltfBuffer(new Uint8Array(m),c,u,d,n.mode,n.filter),m})})}else return null}}class x0{constructor(t){this.name=Kt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=e.meshes[i.mesh];for(const h of n.primitives)if(h.mode!==We.TRIANGLES&&h.mode!==We.TRIANGLE_STRIP&&h.mode!==We.TRIANGLE_FAN&&h.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const h in a)o.push(this.parser.getDependency("accessor",a[h]).then(c=>(l[h]=c,l[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(h=>{const c=h.pop(),u=c.isGroup?c.children:[c],d=h[0].count,m=[];for(const g of u){const _=new Wt,p=new I,f=new ai,b=new I(1,1,1),y=new _g(g.geometry,g.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,E),l.SCALE&&b.fromBufferAttribute(l.SCALE,E),y.setMatrixAt(E,_.compose(p,f,b));for(const E in l)if(E==="_COLOR_0"){const P=l[E];y.instanceColor=new aa(P.array,P.itemSize,P.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,l[E]);le.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),m.push(y)}return c.isGroup?(c.clear(),c.add(...m),c):m[0]}))}}const bh="glTF",is=12,Rl={JSON:1313821514,BIN:5130562};class v0{constructor(t){this.name=Kt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,is),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==bh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-is,r=new DataView(t,is);let a=0;for(;a<n;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Rl.JSON){const h=new Uint8Array(t,is+a,o);this.content=i.decode(h)}else if(l===Rl.BIN){const h=is+a;this.body=t.slice(h,h+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class y0{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Kt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const i=this.json,n=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},l={},h={};for(const c in a){const u=la[c]||c.toLowerCase();o[u]=a[c]}for(const c in t.attributes){const u=la[c]||c.toLowerCase();if(a[c]!==void 0){const d=i.accessors[t.attributes[c]],m=Nn[d.componentType];h[u]=m.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(c){return new Promise(function(u,d){n.decodeDracoFile(c,function(m){for(const g in m.attributes){const _=m.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}u(m)},o,h,Ee,d)})})}}class M0{constructor(){this.name=Kt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class b0{constructor(){this.name=Kt.KHR_MESH_QUANTIZATION}}class Sh extends us{constructor(t,e,i,n){super(t,e,i,n)}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n*3+n;for(let a=0;a!==n;a++)e[a]=i[r+a];return e}interpolate_(t,e,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,h=o*3,c=n-e,u=(i-e)/c,d=u*u,m=d*u,g=t*h,_=g-h,p=-2*m+3*d,f=m-d,b=1-p,y=f-d+u;for(let E=0;E!==o;E++){const P=a[_+E+o],C=a[_+E+l]*c,A=a[g+E+o],k=a[g+E]*c;r[E]=b*P+y*C+p*A+f*k}return r}}const S0=new ai;class E0 extends Sh{interpolate_(t,e,i,n){const r=super.interpolate_(t,e,i,n);return S0.fromArray(r).normalize().toArray(r),r}}const We={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Nn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cl={9728:ye,9729:Le,9984:ta,9985:Ws,9986:wn,9987:_i},Ll={33071:Xe,33648:Ys,10497:Fn},Xr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},la={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},T0={CUBICSPLINE:void 0,LINEAR:Bn,STEP:os},jr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function w0(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Sa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vi})),s.DefaultMaterial}function Yi(s,t,e){for(const i in e.extensions)s[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function Li(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function A0(s,t,e){let i=!1,n=!1,r=!1;for(let h=0,c=t.length;h<c;h++){const u=t[h];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let h=0,c=t.length;h<c;h++){const u=t[h];if(i){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(n){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(h){const c=h[0],u=h[1],d=h[2];return i&&(s.morphAttributes.position=c),n&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function R0(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let i=0,n=e.length;i<n;i++)s.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function C0(s){let t;const e=s.extensions&&s.extensions[Kt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Yr(e.attributes):t=s.indices+":"+Yr(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)t+=":"+Yr(s.targets[i]);return t}function Yr(s){let t="";const e=Object.keys(s).sort();for(let i=0,n=e.length;i<n;i++)t+=e[i]+":"+s[e[i]]+";";return t}function ha(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function L0(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const P0=new Wt;class I0{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new e0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,r=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&r<98?this.textureLoader=new yh(this.options.manager):this.textureLoader=new zg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return Yi(r,o,n),Li(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=e.length;n<r;n++){const a=e[n].joints;for(let o=0,l=a.length;o<l;o++)t[a[o]].isBone=!0}for(let n=0,r=t.length;n<r;n++){const a=t[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;const n=i.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[h,c]of a.children.entries())r(c,o.children[h])};return r(i,n),n.name+="_instance_"+t.uses[e]++,n}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){const n=t(e[i]);if(n)return n}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const i=[];for(let n=0;n<e.length;n++){const r=t(e[n]);r&&i.push(r)}return i}getDependency(t,e){const i=t+":"+e;let n=this.cache.get(i);if(!n){switch(t){case"scene":n=this.loadScene(e);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":n=this.loadAccessor(e);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":n=this.loadBuffer(e);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":n=this.loadSkin(e);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":n=this.loadCamera(e);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!n)throw new Error("Unknown type: "+t);break}this.cache.add(i,n)}return n}getDependencies(t){let e=this.cache.get(t);if(!e){const i=this,n=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(n.map(function(r,a){return i.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Kt.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(r,a){i.load(rs.resolveURL(e.uri,n.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){const n=e.byteLength||0,r=e.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(t){const e=this,i=this.json,n=this.json.accessors[t];if(n.bufferView===void 0&&n.sparse===void 0){const a=Xr[n.type],o=Nn[n.componentType],l=n.normalized===!0,h=new o(n.count*a);return Promise.resolve(new Ue(h,a,l))}const r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Xr[n.type],h=Nn[n.componentType],c=h.BYTES_PER_ELEMENT,u=c*l,d=n.byteOffset||0,m=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let _,p;if(m&&m!==u){const f=Math.floor(d/m),b="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+f+":"+n.count;let y=e.cache.get(b);y||(_=new h(o,f*m,n.count*m/c),y=new dg(_,m/c),e.cache.add(b,y)),p=new va(y,l,d%m/c,g)}else o===null?_=new h(n.count*l):_=new h(o,d,n.count*l),p=new Ue(_,l,g);if(n.sparse!==void 0){const f=Xr.SCALAR,b=Nn[n.sparse.indices.componentType],y=n.sparse.indices.byteOffset||0,E=n.sparse.values.byteOffset||0,P=new b(a[1],y,n.sparse.count*f),C=new h(a[2],E,n.sparse.count*l);o!==null&&(p=new Ue(p.array.slice(),p.itemSize,p.normalized));for(let A=0,k=P.length;A<k;A++){const tt=P[A];if(p.setX(tt,C[A*l]),l>=2&&p.setY(tt,C[A*l+1]),l>=3&&p.setZ(tt,C[A*l+2]),l>=4&&p.setW(tt,C[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(t){const e=this.json,i=this.options,r=e.textures[t].source,a=e.images[r];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,i){const n=this,r=this.json,a=r.textures[t],o=r.images[e],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(e,i).then(function(c){c.flipY=!1,c.name=a.name||o.name||"",c.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(c.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return c.magFilter=Cl[d.magFilter]||Le,c.minFilter=Cl[d.minFilter]||_i,c.wrapS=Ll[d.wrapS]||Fn,c.wrapT=Ll[d.wrapT]||Fn,n.associations.set(c,{textures:t}),c}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(t,e){const i=this,n=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const a=n.images[t],o=self.URL||self.webkitURL;let l=a.uri||"",h=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){h=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const c=Promise.resolve(l).then(function(u){return new Promise(function(d,m){let g=d;e.isImageBitmapLoader===!0&&(g=function(_){const p=new Me(_);p.needsUpdate=!0,d(p)}),e.load(rs.resolveURL(u,r.path),g,void 0,m)})}).then(function(u){return h===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||L0(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=c,c}assignTexture(t,e,i,n){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[Kt.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Kt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Kt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let i=t.material;const n=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new mh,ti.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(t.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new nr,ti.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||r||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}t.material=i}getMaterialType(){return Sa}loadMaterial(t){const e=this,i=this.json,n=this.extensions,r=i.materials[t];let a;const o={},l=r.extensions||{},h=[];if(l[Kt.KHR_MATERIALS_UNLIT]){const u=n[Kt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),h.push(u.extendParams(o,r,e))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Mt(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ee),o.opacity=d[3]}u.baseColorTexture!==void 0&&h.push(e.assignTexture(o,"map",u.baseColorTexture,De)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(h.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),h.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),h.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=si);const c=r.alphaMode||jr.OPAQUE;if(c===jr.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,c===jr.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==$i&&(h.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new At(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==$i&&(h.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==$i){const u=r.emissiveFactor;o.emissive=new Mt().setRGB(u[0],u[1],u[2],Ee)}return r.emissiveTexture!==void 0&&a!==$i&&h.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,De)),Promise.all(h).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Li(u,r),e.associations.set(u,{materials:t}),r.extensions&&Yi(n,u,r),u})}createUniqueName(t){const e=ee.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[Kt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(l){return Pl(l,o,e)})}const a=[];for(let o=0,l=t.length;o<l;o++){const h=t[o],c=C0(h),u=n[c];if(u)a.push(u.promise);else{let d;h.extensions&&h.extensions[Kt.KHR_DRACO_MESH_COMPRESSION]?d=r(h):d=Pl(new Ye,h,e),n[c]={primitive:h,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){const e=this,i=this.json,n=this.extensions,r=i.meshes[t],a=r.primitives,o=[];for(let l=0,h=a.length;l<h;l++){const c=a[l].material===void 0?w0(this.cache):this.getDependency("material",a[l].material);o.push(c)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(l){const h=l.slice(0,l.length-1),c=l[l.length-1],u=[];for(let m=0,g=c.length;m<g;m++){const _=c[m],p=a[m];let f;const b=h[m];if(p.mode===We.TRIANGLES||p.mode===We.TRIANGLE_STRIP||p.mode===We.TRIANGLE_FAN||p.mode===void 0)f=r.isSkinnedMesh===!0?new pg(_,b):new ze(_,b),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),p.mode===We.TRIANGLE_STRIP?f.geometry=Al(f.geometry,Wl):p.mode===We.TRIANGLE_FAN&&(f.geometry=Al(f.geometry,ea));else if(p.mode===We.LINES)f=new ba(_,b);else if(p.mode===We.LINE_STRIP)f=new Ma(_,b);else if(p.mode===We.LINE_LOOP)f=new xg(_,b);else if(p.mode===We.POINTS)f=new vg(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(f.geometry.morphAttributes).length>0&&R0(f,r),f.name=e.createUniqueName(r.name||"mesh_"+t),Li(f,r),p.extensions&&Yi(n,f,p),e.assignFinalMaterial(f),u.push(f)}for(let m=0,g=u.length;m<g;m++)e.associations.set(u[m],{meshes:t,primitives:m});if(u.length===1)return r.extensions&&Yi(n,u[0],r),u[0];const d=new Qi;r.extensions&&Yi(n,d,r),e.associations.set(d,{meshes:t});for(let m=0,g=u.length;m<g;m++)d.add(u[m]);return d})}loadCamera(t){let e;const i=this.json.cameras[t],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new Ne(jl.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(e=new _a(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),Li(e,i),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],i=[];for(let n=0,r=e.joints.length;n<r;n++)i.push(this._loadNodeShallow(e.joints[n]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const r=n.pop(),a=n,o=[],l=[];for(let h=0,c=a.length;h<c;h++){const u=a[h];if(u){o.push(u);const d=new Wt;r!==null&&d.fromArray(r.array,h*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[h])}return new ya(o,l)})}loadAnimation(t){const e=this.json,i=this,n=e.animations[t],r=n.name?n.name:"animation_"+t,a=[],o=[],l=[],h=[],c=[];for(let u=0,d=n.channels.length;u<d;u++){const m=n.channels[u],g=n.samplers[m.sampler],_=m.target,p=_.node,f=n.parameters!==void 0?n.parameters[g.input]:g.input,b=n.parameters!==void 0?n.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",b)),h.push(g),c.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(h),Promise.all(c)]).then(function(u){const d=u[0],m=u[1],g=u[2],_=u[3],p=u[4],f=[];for(let b=0,y=d.length;b<y;b++){const E=d[b],P=m[b],C=g[b],A=_[b],k=p[b];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const tt=i._createAnimationTracks(E,P,C,A,k);if(tt)for(let v=0;v<tt.length;v++)f.push(tt[v])}return new Ag(r,void 0,f)})}createNodeMesh(t){const e=this.json,i=this,n=e.nodes[t];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,h=n.weights.length;l<h;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(t){const e=this.json,i=this,n=e.nodes[t],r=i._loadNodeShallow(t),a=[],o=n.children||[];for(let h=0,c=o.length;h<c;h++)a.push(i.getDependency("node",o[h]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(a),l]).then(function(h){const c=h[0],u=h[1],d=h[2];d!==null&&c.traverse(function(m){m.isSkinnedMesh&&m.bind(d,P0)});for(let m=0,g=u.length;m<g;m++)c.add(u[m]);return c})}_loadNodeShallow(t){const e=this.json,i=this.extensions,n=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],a=r.name?n.createUniqueName(r.name):"",o=[],l=n._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(t)});return l&&o.push(l),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then(function(h){return n._getNodeRef(n.cameraCache,r.camera,h)})),n._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(t)}).forEach(function(h){o.push(h)}),this.nodeCache[t]=Promise.all(o).then(function(h){let c;if(r.isBone===!0?c=new fh:h.length>1?c=new Qi:h.length===1?c=h[0]:c=new le,c!==h[0])for(let u=0,d=h.length;u<d;u++)c.add(h[u]);if(r.name&&(c.userData.name=r.name,c.name=a),Li(c,r),r.extensions&&Yi(i,c,r),r.matrix!==void 0){const u=new Wt;u.fromArray(r.matrix),c.applyMatrix4(u)}else r.translation!==void 0&&c.position.fromArray(r.translation),r.rotation!==void 0&&c.quaternion.fromArray(r.rotation),r.scale!==void 0&&c.scale.fromArray(r.scale);return n.associations.has(c)||n.associations.set(c,{}),n.associations.get(c).nodes=t,c}),this.nodeCache[t]}loadScene(t){const e=this.extensions,i=this.json.scenes[t],n=this,r=new Qi;i.name&&(r.name=n.createUniqueName(i.name)),Li(r,i),i.extensions&&Yi(e,r,i);const a=i.nodes||[],o=[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let c=0,u=l.length;c<u;c++)r.add(l[c]);const h=c=>{const u=new Map;for(const[d,m]of n.associations)(d instanceof ti||d instanceof Me)&&u.set(d,m);return c.traverse(d=>{const m=n.associations.get(d);m!=null&&u.set(d,m)}),u};return n.associations=h(r),r})}_createAnimationTracks(t,e,i,n,r){const a=[],o=t.name?t.name:t.uuid,l=[];Ri[r.path]===Ri.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let h;switch(Ri[r.path]){case Ri.weights:h=Gn;break;case Ri.rotation:h=rn;break;case Ri.position:case Ri.scale:h=Vn;break;default:switch(i.itemSize){case 1:h=Gn;break;case 2:case 3:default:h=Vn;break}break}const c=n.interpolation!==void 0?T0[n.interpolation]:Bn,u=this._getArrayFromAccessor(i);for(let d=0,m=l.length;d<m;d++){const g=new h(l[d]+"."+Ri[r.path],e.array,u,c);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const i=ha(e.constructor),n=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)n[r]=e[r]*i;e=n}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){const n=this instanceof rn?E0:Sh;return new n(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function D0(s,t,e){const i=t.attributes,n=new yi;if(i.POSITION!==void 0){const o=e.json.accessors[i.POSITION],l=o.min,h=o.max;if(l!==void 0&&h!==void 0){if(n.set(new I(l[0],l[1],l[2]),new I(h[0],h[1],h[2])),o.normalized){const c=ha(Nn[o.componentType]);n.min.multiplyScalar(c),n.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const o=new I,l=new I;for(let h=0,c=r.length;h<c;h++){const u=r[h];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){const _=ha(Nn[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}s.boundingBox=n;const a=new oi;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=a}function Pl(s,t,e){const i=t.attributes,n=[];function r(a,o){return e.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in i){const o=la[a]||a.toLowerCase();o in s.attributes||n.push(r(i[a],o))}if(t.indices!==void 0&&!s.index){const a=e.getDependency("accessor",t.indices).then(function(o){s.setIndex(o)});n.push(a)}return Qt.workingColorSpace!==Ee&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qt.workingColorSpace}" not supported.`),Li(s,t),D0(s,t,e),Promise.all(n).then(function(){return t.targets!==void 0?A0(s,t.targets,e):s})}var N0=`vec3 transformed = vec3(position);\r
vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;\r
vModelPos = transformed;`,U0=`#ifdef USE_MAP

	float th=levelCurveThickness*0.5;\r
	float r=th*0.5;\r
	\r
	
	float c = mod(vModelPos.y,levelCurveRange)/levelCurveRange;\r
	
	c = ( smoothstep(r,0.0,c)+smoothstep(1.0-th,1.0-th+r,c)) ;\r
	\r
	vec4 bandsColor = vec4(c,c,c,1.0);\r
	
	
	
	

	\r

	float a=smoothstep(-40.0,5.0,vModelPos.y);

	vec3 surfaceColor=mix(topColor,bottomColor,a);\r
	diffuseColor= vec4(surfaceColor,1.0)+bandsColor*levelCurveIntensity;

#endif`;class Eh{constructor(){be(this,"_listeners");this._listeners=Object.create(null)}addEventListener(t,e,i=0){if(this._listeners||(this._listeners=Object.create(null)),!(t in this._listeners))this._listeners[t]=[{handler:e,priority:i}];else{var n=this._listeners[t];n.some(r=>r.handler===e)||(n.push({handler:e,priority:i}),n.sort((r,a)=>a.priority-r.priority))}}removeEventListener(t,e){if(this._listeners&&t in this._listeners){var i=this._listeners[t],n=i.findIndex(r=>r.handler===e);n>=0&&(i.length==1?delete this._listeners[t]:i.splice(n,1))}}dispatchEvent(t){if(!this._listeners)return!0;var e=t.type;if(e in this._listeners)for(var i=this._listeners[e].slice(),n=0;n<i.length;n++){var{handler:r}=i[n];if(r.call(this,t)===!1)break}}}const Th={ON_SCENE_LOADED:"ON_SCENE_LOADED"};class O0 extends Eh{constructor(e){super();be(this,"terreno");be(this,"agua");be(this,"terrainMode",1);be(this,"texturesLibrary",{tierra:"maps/tierra.jpg"});this.scene=e;const i=new Mh(16777215,4);i.position.set(-1,1,0),e.add(i),new Bg(6710886);const n=new Dg(13421823,16750916,1);e.add(n);const r=new Zg(2e3,10);r.position.y=-50,e.add(r);const a=new $g(3);e.add(a),this.loadTextures()}loadTextures(){const e=new xh;e.onLoad=()=>{console.log("Texturas Cargadas",this.texturesLibrary),this.loadModels()};for(let i in this.texturesLibrary){const r=new yh(e).load(this.texturesLibrary[i]);this.texturesLibrary[i]=r,console.log(r)}}loadModels(){new t0().load("models/terreno.glb",i=>{this.onModelLoaded(i)})}overloadTerrainMaterial(){const e=new yg({});e.color=new Mt(16777215),e.map=this.texturesLibrary.tierra,e.userData.levelCurveRange={value:1},e.userData.levelCurveIntensity={value:.5},e.userData.levelCurveThickness={value:.05},e.userData.topColor={value:new Mt(10027008)},e.userData.bottomColor={value:new Mt(39168)},e.onBeforeCompile=i=>{i.uniforms.levelCurveRange=e.userData.levelCurveRange,i.uniforms.levelCurveThickness=e.userData.levelCurveThickness,i.uniforms.levelCurveIntensity=e.userData.levelCurveIntensity,i.uniforms.topColor=e.userData.topColor,i.uniforms.bottomColor=e.userData.bottomColor,i.uniforms.mixFactor=e.userData.mixFactor,i.uniforms.lowLevel=e.userData.lowLevel,i.uniforms.highLevel=e.userData.highLevel,i.vertexShader=`
				varying vec3 vWorldPos;
				varying vec3 vModelPos;
			`+i.vertexShader;let n=`
				varying vec3 vWorldPos;
				varying vec3 vModelPos;
				uniform float levelCurveRange;

				uniform float levelCurveThickness;

				uniform float levelCurveIntensity;


				uniform vec3 topColor;

				uniform vec3 bottomColor;


				uniform float mixFactor;

				uniform float lowLevel;

				uniform float highLevel;
`;i.fragmentShader=n+i.fragmentShader,i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",N0),i.fragmentShader=i.fragmentShader.replace("#include <map_fragment>",U0)},this.terreno.material=e}onModelLoaded(e){e.scene.traverse(n=>{n.name==="area"&&(this.area=n),n.name==="agua"&&(this.agua=n),n.name==="terreno"&&(this.terreno=n)});let i=this.agua.material;i.transparent=!0,i.opacity=.5,i.shininess=100,i.color=new Mt(255),this.scene.add(this.area),this.overloadTerrainMaterial(),this.dispatchEvent({type:Th.ON_SCENE_LOADED})}set verticalScale(e){this.area.scale.y=e}set waterLevel(e){this.agua.position.y=e}set curveThickness(e){this.terreno.material.uniforms.levelCurveThickness.value=e}set terrainMode(e){this.terrainMode=e}get terrainMode(){return this.terrainMode}set aguaVisible(e){this.agua&&(this.agua.visible=e)}get aguaVisible(){return this.agua?this.agua.visible:!1}animate(){}}const S={ui:[],dom:null,ID:null,lock:!1,wlock:!1,current:-1,needReZone:!0,needResize:!1,forceZone:!1,isEventsInit:!1,isLeave:!1,addDOMEventListeners:!0,downTime:0,prevTime:0,prevDefault:["contextmenu"],pointerEvent:["pointerdown","pointermove","pointerup"],eventOut:["pointercancel","pointerout","pointerleave"],xmlserializer:null,tmpTime:null,tmpImage:null,oldCursor:"auto",input:null,parent:null,firstImput:!0,hiddenImput:null,hiddenSizer:null,hasFocus:!1,startInput:!1,inputRange:[0,0],cursorId:0,str:"",pos:0,startX:-1,moveX:-1,debugInput:!1,isLoop:!1,listens:[],e:{type:null,clientX:0,clientY:0,keyCode:NaN,key:null,delta:0},isMobile:!1,now:null,needsUpdate:!1,getTime:function(){return self.performance&&self.performance.now?self.performance.now.bind(performance):Date.now},add:function(s){S.ui.push(s),S.getZone(s),S.isEventsInit||S.initEvents()},testMobile:function(){let s=navigator.userAgent;return!!(s.match(/Android/i)||s.match(/webOS/i)||s.match(/iPhone/i)||s.match(/iPad/i)||s.match(/iPod/i)||s.match(/BlackBerry/i)||s.match(/Windows Phone/i))},remove:function(s){let t=S.ui.indexOf(s);t!==-1&&(S.removeListen(s),S.ui.splice(t,1)),S.ui.length===0&&S.removeEvents()},initEvents:function(){if(S.isEventsInit)return;let s=document.body;S.isMobile=S.testMobile(),S.now=S.getTime(),S.isMobile?s.style.touchAction="none":s.addEventListener("wheel",S,{passive:!1}),console.log("R.addDOMEventListeners "+S.addDOMEventListeners),S.addDOMEventListeners&&(s.addEventListener("pointercancel",S),s.addEventListener("pointerleave",S),s.addEventListener("pointermove",S),s.addEventListener("pointerdown",S),s.addEventListener("pointerup",S),s.addEventListener("keydown",S,!1),s.addEventListener("keyup",S,!1)),window.addEventListener("resize",S.resize,!1),S.isEventsInit=!0,S.dom=s},removeEvents:function(){if(!S.isEventsInit)return;let s=document.body;S.isMobile||s.removeEventListener("wheel",S),S.addDOMEventListeners&&(s.removeEventListener("pointercancel",S),s.removeEventListener("pointerleave",S),s.removeEventListener("pointermove",S),s.removeEventListener("pointerdown",S),s.removeEventListener("pointerup",S),s.removeEventListener("keydown",S),s.removeEventListener("keyup",S)),window.removeEventListener("resize",S.resize),S.isEventsInit=!1},resize:function(){let s=S.ui.length,t;for(;s--;)t=S.ui[s],t.isGui&&!t.isCanvasOnly&&t.autoResize&&t.calc();S.needReZone=!0,S.needResize=!1},out:function(){console.log("im am out"),S.clearOldID()},in:function(){console.log("im am in")},fakeUp:function(){this.handleEvent({type:"pointerup"})},handleEvent:function(s){S.prevDefault.indexOf(s.type)!==-1&&s.preventDefault(),S.needResize&&S.resize(),S.findZone(S.forceZone);let t=S.e,e=!1;s.type==="keydown"&&S.keydown(s),s.type==="keyup"&&S.keyup(s),s.type==="wheel"?t.delta=s.deltaY>0?1:-1:t.delta=0;let i=s.pointerType;if(t.clientX=(i==="touch"?s.pageX:s.clientX)||0,t.clientY=(i==="touch"?s.pageY:s.clientY)||0,t.type=s.type,S.eventOut.indexOf(s.type)!==-1&&(e=!0,t.type="mouseup"),s.type==="pointerleave"&&(S.isLeave=!0),s.type==="pointerdown"&&(t.type="mousedown"),s.type==="pointerup"&&(t.type="mouseup"),s.type==="pointermove"&&(S.isLeave&&(S.isLeave=!1,S.resize()),t.type="mousemove"),t.type==="mousedown"){if(S.downTime=S.now(),S.downTime-S.prevTime<200)return S.selectAll(),!1;S.prevTime=S.downTime,S.forceZone=!1}t.type==="mousedown"&&S.clearInput(),t.type==="mousedown"&&(S.lock=!0),t.type==="mouseup"&&(S.lock=!1),S.isMobile&&t.type==="mousedown"&&S.findID(t),t.type==="mousemove"&&!S.lock&&S.findID(t),S.ID!==null&&(S.ID.isCanvasOnly&&(t.clientX=S.ID.mouse.x,t.clientY=S.ID.mouse.y),S.ID.handleEvent(t)),S.isMobile&&t.type==="mouseup"&&S.clearOldID(),e&&S.clearOldID()},findID:function(s){let t=S.ui.length,e=-1,i,n,r;for(;t--;)if(i=S.ui[t],i.isCanvasOnly?(n=i.mouse.x,r=i.mouse.y):(n=s.clientX,r=s.clientY),S.onZone(i,n,r)){e=t,e!==S.current&&(S.clearOldID(),S.current=e,S.ID=i);break}e===-1&&S.clearOldID()},clearOldID:function(){S.ID&&(S.current=-1,S.ID.reset(),S.ID=null,S.cursor())},calcUis:(s,t,e,i=!1)=>{let n=s.length,r,a=0,o=0,l,h,c=0;for(;n--;)r=s[o],o++,!i&&r.isGroup&&r.calcUis(),h=r.margin,r.zone.w=r.w,r.zone.h=r.h+h,r.autoWidth?(a=0,r.zone.x=t.x+r.dx,r.zone.y=e,e+=r.h+h,c+=r.h+h):(a===0&&(c+=r.h+h),r.zone.x=t.x+a,r.zone.y=e,l=S.getWidth(r),l?r.zone.w=r.w=l:r.fw&&(r.zone.w=r.w=r.fw),a+=r.zone.w,a>=t.w&&(e+=r.h+h,a=0));return c},findTarget:function(s,t){let e=s.length;for(;e--;)if(S.onZone(s[e],t.clientX,t.clientY))return e;return-1},findZone:function(s){if(!(!S.needReZone&&!s)){for(var t=S.ui.length,e;t--;)e=S.ui[t],S.getZone(e),e.isGui&&e.calcUis();S.needReZone=!1}},onZone:function(s,t,e){if(t===void 0||e===void 0)return!1;let i=s.zone,n=t-i.x,r=e-i.y,a=n>=0&&r>=0&&n<=i.w&&r<=i.h;return a?s.local.set(n,r):s.local.neg(),a},getWidth:function(s){return s.getDom().clientWidth},getZone:function(s){if(s.isCanvasOnly)return;let t=s.getDom().getBoundingClientRect();s.zone={x:t.left,y:t.top,w:t.width,h:t.height}},cursor:function(s){s=s||"auto",s!==S.oldCursor&&(document.body.style.cursor=s,S.oldCursor=s)},toCanvas:function(s,t,e,i){if(S.xmlserializer||(S.xmlserializer=new XMLSerializer),i&&S.tmpTime!==null&&(clearTimeout(S.tmpTime),S.tmpTime=null),S.tmpTime!==null)return;S.lock&&(S.tmpTime=setTimeout(function(){S.tmpTime=null},10));let n=!1;(t!==s.canvas.width||e!==s.canvas.height)&&(n=!0),S.tmpImage===null&&(S.tmpImage=new Image);let r=S.tmpImage,a=S.xmlserializer.serializeToString(s.content),o='<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+e+'"><foreignObject style="pointer-events: none; left:0;" width="100%" height="100%">'+a+"</foreignObject></svg>";r.onload=function(){let l=s.canvas.getContext("2d");n?(s.canvas.width=t,s.canvas.height=e):l.clearRect(0,0,t,e),l.drawImage(this,0,0),s.onDraw()},r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(o),r.crossOrigin="",S.needsUpdate=!1},setHidden:function(){S.hiddenImput===null&&(S.hiddenImput=document.createElement("input"),S.hiddenImput.type="text",S.hiddenSizer=document.createElement("div"),document.body.appendChild(S.hiddenImput),document.body.appendChild(S.hiddenSizer));let s=S.debugInput?"":"opacity:0; zIndex:0;",t=S.parent.css.txtselect+"padding:0; width:auto; height:auto; left:10px; top:auto; color:#FFF; background:#000;"+s;S.hiddenImput.style.cssText=t+"bottom:10px;"+(S.debugInput?"":"transform:scale(0);"),S.hiddenSizer.style.cssText=t+"bottom:40px;",S.hiddenImput.style.width=S.input.clientWidth+"px",S.hiddenImput.value=S.str,S.hiddenSizer.innerHTML=S.str,S.hasFocus=!0},clearHidden:function(s){S.hiddenImput!==null&&(S.hasFocus=!1)},clickPos:function(s){let t=S.str.length,e=0,i=0;for(;t--&&(e+=S.textWidth(S.str[i]),!(e>=s));)i++;return i},upInput:function(s,t){if(S.parent===null)return!1;let e=!1;if(t){let i=S.clickPos(s);S.moveX=i,S.startX===-1?(S.startX=i,S.cursorId=i,S.inputRange=[S.startX,S.startX]):S.moveX!==S.startX&&(S.startX>S.moveX?S.inputRange=[S.moveX,S.startX]:S.inputRange=[S.startX,S.moveX]),e=!0}else S.startX!==-1&&(S.hasFocus=!0,S.hiddenImput.focus(),S.hiddenImput.selectionStart=S.inputRange[0],S.hiddenImput.selectionEnd=S.inputRange[1],S.startX=-1,e=!0);return e&&S.selectParent(),e},selectAll:function(){S.parent&&(S.str=S.input.textContent,S.inputRange=[0,S.str.length],S.hasFocus=!0,S.hiddenImput.focus(),S.hiddenImput.selectionStart=S.inputRange[0],S.hiddenImput.selectionEnd=S.inputRange[1],S.cursorId=S.inputRange[1],S.selectParent())},selectParent:function(){var s=S.textWidth(S.str.substring(0,S.cursorId)),t=S.textWidth(S.str.substring(0,S.inputRange[0])),e=S.textWidth(S.str.substring(S.inputRange[0],S.inputRange[1]));S.parent.select(s,t,e,S.hiddenSizer.innerHTML)},textWidth:function(s){return S.hiddenSizer===null?0:(s=s.replace(/ /g,"&nbsp;"),S.hiddenSizer.innerHTML=s,S.hiddenSizer.clientWidth)},clearInput:function(){S.parent!==null&&(S.firstImput||S.parent.validate(!0),S.clearHidden(),S.parent.unselect(),S.input.style.background=S.parent.colors.back,S.input.style.borderColor=S.parent.colors.border,S.parent.isEdit=!1,S.input=null,S.parent=null,S.str="",S.firstImput=!0)},setInput:function(s,t){S.clearInput(),S.input=s,S.parent=t,S.input.style.background=S.parent.colors.backoff,S.input.style.borderColor=S.parent.colors.select,S.str=S.input.textContent,S.setHidden()},keydown:function(s){if(S.parent===null)return;let t=s.which;s.shiftKey,S.firstImput=!1,S.hasFocus&&(window.focus(),S.hiddenImput.focus()),S.parent.isEdit=!0,t===13?S.clearInput():S.input.isNum?s.keyCode>47&&s.keyCode<58||s.keyCode>95&&s.keyCode<106||s.keyCode===190||s.keyCode===110||s.keyCode===8||s.keyCode===109?S.hiddenImput.readOnly=!1:S.hiddenImput.readOnly=!0:S.hiddenImput.readOnly=!1},keyup:function(s){S.parent!==null&&(S.str=S.hiddenImput.value,S.parent.allEqual?S.parent.sameStr(S.str):S.input.textContent=S.str,S.cursorId=S.hiddenImput.selectionStart,S.inputRange=[S.hiddenImput.selectionStart,S.hiddenImput.selectionEnd],S.selectParent(),S.parent.validate())},loop:function(){S.isLoop&&requestAnimationFrame(S.loop),S.needsUpdate=S.update(),S.ui[0]&&S.ui[0].draw()},update:function(){let s=S.listens.length,t=!1;for(;s--;)S.listens[s].listening()&&(t=!0);return t},removeListen:function(s){let t=S.listens.indexOf(s);t!==-1&&S.listens.splice(t,1),S.listens.length===0&&(S.isLoop=!1)},addListen:function(s){return S.listens.indexOf(s)!==-1?!1:(S.listens.push(s),S.isLoop||(S.isLoop=!0,S.loop()),!0)}},Ut=S,H={transition:.2,frag:document.createDocumentFragment(),colorRing:null,joystick_0:null,joystick_1:null,circular:null,knob:null,pad2d:null,svgns:"http://www.w3.org/2000/svg",links:"http://www.w3.org/1999/xlink",htmls:"http://www.w3.org/1999/xhtml",DOM_SIZE:["height","width","top","left","bottom","right","margin-left","margin-right","margin-top","margin-bottom"],SVG_TYPE_D:["pattern","defs","transform","stop","animate","radialGradient","linearGradient","animateMotion","use","filter","feColorMatrix"],SVG_TYPE_G:["svg","rect","circle","path","polygon","text","g","line","foreignObject"],PI:Math.PI,TwoPI:Math.PI*2,pi90:Math.PI*.5,pi60:Math.PI/3,torad:Math.PI/180,todeg:180/Math.PI,clamp:(s,t,e)=>(s=s<t?t:s,s=s>e?e:s,s),isDivid:s=>s*.5===Math.floor(s*.5),size:{w:240,h:20,p:30,s:8},defineColor:(s,t=H.colors)=>{let e={...t},i=["fontFamily","fontWeight","fontShadow","fontSize"],n=!1;s.font&&(s.fontFamily=s.font),s.shadow&&(s.fontShadow=s.shadow),s.weight&&(s.fontWeight=s.weight),s.fontColor&&(s.text=s.fontColor),s.color&&(s.text=s.color),s.text&&(e.text=s.text,!s.fontColor&&!s.color&&(e.title=H.ColorLuma(s.text,-.25),e.titleoff=H.ColorLuma(s.text,-.5)),e.textOver=H.ColorLuma(s.text,.25),e.textSelect=H.ColorLuma(s.text,.5)),s.button&&(e.button=s.button,e.border=H.ColorLuma(s.button,.1),e.overoff=H.ColorLuma(s.button,.2)),s.select&&(e.select=s.select,e.over=H.ColorLuma(s.select,-.1)),s.itemBg&&(s.back=s.itemBg),s.back&&(e.back=s.back,e.backoff=H.ColorLuma(s.back,-.1)),s.fontSelect&&(e.textSelect=s.fontSelect),s.groupBorder&&(e.gborder=s.groupBorder),s.bgOver&&(e.backgroundOver=s.bgOver);for(let r in e)s[r]!==void 0&&(e[r]=s[r]);for(let r in s)i.indexOf(r)!==-1&&(n=!0);return n&&H.defineText(e),e},colors:{sx:4,sy:2,radius:2,showOver:1,content:"none",background:"rgba(50,50,50,0.15)",backgroundOver:"rgba(50,50,50,0.3)",title:"#CCC",titleoff:"#BBB",text:"#DDD",textOver:"#EEE",textSelect:"#FFF",back:"rgba(0,0,0,0.2)",backoff:"rgba(0,0,0,0.3)",border:"#4c4c4c",borderSize:1,gborder:"none",groups:"none",button:"#3c3c3c",overoff:"#5c5c5c",over:"#024699",select:"#308AFF",action:"#FF3300",fontFamily:"Consolas, monospace",fontWeight:"normal",fontShadow:"none",fontSize:12,joyOver:"rgba(48,138,255,0.25)",joyOut:"rgba(100,100,100,0.5)",joySelect:"#308AFF",hide:"rgba(0,0,0,0)"},css:{basic:"position:absolute; pointer-events:none; box-sizing:border-box; margin:0; padding:0; overflow:hidden; -o-user-select:none; -ms-user-select:none; -khtml-user-select:none; -webkit-user-select:none; -moz-user-select:none;",button:"display:flex; align-items:center; justify-content:center; text-align:center;",middle:"display:flex; align-items:center; justify-content:left; text-align:left; flex-direction: row-reverse;"},svgs:{g1:"M 6 4 L 0 4 0 6 6 6 6 4 M 6 0 L 0 0 0 2 6 2 6 0 Z",g2:"M 6 0 L 4 0 4 6 6 6 6 0 M 2 0 L 0 0 0 6 2 6 2 0 Z",group:"M 7 7 L 7 8 8 8 8 7 7 7 M 5 7 L 5 8 6 8 6 7 5 7 M 3 7 L 3 8 4 8 4 7 3 7 M 7 5 L 7 6 8 6 8 5 7 5 M 6 6 L 6 5 5 5 5 6 6 6 M 7 3 L 7 4 8 4 8 3 7 3 M 6 4 L 6 3 5 3 5 4 6 4 M 3 5 L 3 6 4 6 4 5 3 5 M 3 3 L 3 4 4 4 4 3 3 3 Z",arrow:"M 3 8 L 8 5 3 2 3 8 Z",arrowDown:"M 5 8 L 8 3 2 3 5 8 Z",arrowUp:"M 5 2 L 2 7 8 7 5 2 Z",solid:"M 13 10 L 13 1 4 1 1 4 1 13 10 13 13 10 M 11 3 L 11 9 9 11 3 11 3 5 5 3 11 3 Z",body:"M 13 10 L 13 1 4 1 1 4 1 13 10 13 13 10 M 11 3 L 11 9 9 11 3 11 3 5 5 3 11 3 M 5 4 L 4 5 4 10 9 10 10 9 10 4 5 4 Z",vehicle:"M 13 6 L 11 1 3 1 1 6 1 13 3 13 3 11 11 11 11 13 13 13 13 6 M 2.4 6 L 4 2 10 2 11.6 6 2.4 6 M 12 8 L 12 10 10 10 10 8 12 8 M 4 8 L 4 10 2 10 2 8 4 8 Z",articulation:"M 13 9 L 12 9 9 2 9 1 5 1 5 2 2 9 1 9 1 13 5 13 5 9 4 9 6 5 8 5 10 9 9 9 9 13 13 13 13 9 Z",character:"M 13 4 L 12 3 9 4 5 4 2 3 1 4 5 6 5 8 4 13 6 13 7 9 8 13 10 13 9 8 9 6 13 4 M 6 1 L 6 3 8 3 8 1 6 1 Z",terrain:"M 13 8 L 12 7 Q 9.06 -3.67 5.95 4.85 4.04 3.27 2 7 L 1 8 7 13 13 8 M 3 8 Q 3.78 5.420 5.4 6.6 5.20 7.25 5 8 L 7 8 Q 8.39 -0.16 11 8 L 7 11 3 8 Z",joint:"M 7.7 7.7 Q 8 7.45 8 7 8 6.6 7.7 6.3 7.45 6 7 6 6.6 6 6.3 6.3 6 6.6 6 7 6 7.45 6.3 7.7 6.6 8 7 8 7.45 8 7.7 7.7 M 3.35 8.65 L 1 11 3 13 5.35 10.65 Q 6.1 11 7 11 8.28 11 9.25 10.25 L 7.8 8.8 Q 7.45 9 7 9 6.15 9 5.55 8.4 5 7.85 5 7 5 6.54 5.15 6.15 L 3.7 4.7 Q 3 5.712 3 7 3 7.9 3.35 8.65 M 10.25 9.25 Q 11 8.28 11 7 11 6.1 10.65 5.35 L 13 3 11 1 8.65 3.35 Q 7.9 3 7 3 5.7 3 4.7 3.7 L 6.15 5.15 Q 6.54 5 7 5 7.85 5 8.4 5.55 9 6.15 9 7 9 7.45 8.8 7.8 L 10.25 9.25 Z",ray:"M 9 11 L 5 11 5 12 9 12 9 11 M 12 5 L 11 5 11 9 12 9 12 5 M 11.5 10 Q 10.9 10 10.45 10.45 10 10.9 10 11.5 10 12.2 10.45 12.55 10.9 13 11.5 13 12.2 13 12.55 12.55 13 12.2 13 11.5 13 10.9 12.55 10.45 12.2 10 11.5 10 M 9 10 L 10 9 2 1 1 2 9 10 Z",collision:"M 11 12 L 13 10 10 7 13 4 11 2 7.5 5.5 9 7 7.5 8.5 11 12 M 3 2 L 1 4 4 7 1 10 3 12 8 7 3 2 Z",map:"M 13 1 L 1 1 1 13 13 13 13 1 M 12 2 L 12 7 7 7 7 12 2 12 2 7 7 7 7 2 12 2 Z",material:"M 13 1 L 1 1 1 13 13 13 13 1 M 12 2 L 12 7 7 7 7 12 2 12 2 7 7 7 7 2 12 2 Z",texture:"M 13 4 L 13 1 1 1 1 4 5 4 5 13 9 13 9 4 13 4 Z",object:"M 10 1 L 7 4 4 1 1 1 1 13 4 13 4 5 7 8 10 5 10 13 13 13 13 1 10 1 Z",none:"M 9 5 L 5 5 5 9 9 9 9 5 Z",cursor:"M 4 7 L 1 10 1 12 2 13 4 13 7 10 9 14 14 0 0 5 4 7 Z",load:"M 13 8 L 11.5 6.5 9 9 9 3 5 3 5 9 2.5 6.5 1 8 7 14 13 8 M 9 2 L 9 0 5 0 5 2 9 2 Z",save:"M 9 12 L 5 12 5 14 9 14 9 12 M 11.5 7.5 L 13 6 7 0 1 6 2.5 7.5 5 5 5 11 9 11 9 5 11.5 7.5 Z",extern:"M 14 14 L 14 0 0 0 0 14 14 14 M 12 6 L 12 12 2 12 2 6 12 6 M 12 2 L 12 4 2 4 2 2 12 2 Z"},rezone(){Ut.needReZone=!0},getImput:function(){return!!Ut.input},setStyle:function(s){for(var t in s)H.colors[t]&&(H.colors[t]=s[t]);H.setText()},defineText:function(s){H.setText(s.fontSize,s.text,s.fontFamily,s.fontShadow,s.fontWeight)},setText:function(s,t,e,i,n){let r=H.colors;e===void 0&&(e=r.fontFamily),s===void 0&&(s=r.fontSize),i===void 0&&(i=r.fontShadow),n===void 0&&(n=r.fontWeight),t===void 0&&(t=r.text),isNaN(s)?s.search("em")===-1&&(s+="px"):s+="px",H.css.txt=H.css.basic+H.css.middle+" font-family:"+e+"; font-weight:"+n+"; font-size:"+s+"; color:"+r.text+"; padding:0px 8px; left:0; top:2px; height:16px; width:100px; overflow:hidden; white-space: nowrap; letter-spacing: normal;",i!=="none"&&(H.css.txt+=" text-shadow: 1px 1px 1px "+i+";"),H.css.txtselect=H.css.txt+"padding:0px 4px; border:1px dashed "+r.border+";",H.css.item=H.css.txt+"padding:0px 4px; position:relative; margin-bottom:1px; "},cloneCss:function(){return{...H.css}},clone:function(s){return s.cloneNode(!0)},setSvg:function(s,t,e,i,n){i===-1?s.setAttributeNS(null,t,e):n!==void 0?s.childNodes[i||0].childNodes[n||0].setAttributeNS(null,t,e):s.childNodes[i||0].setAttributeNS(null,t,e)},setCss:function(s,t){for(let e in t)H.DOM_SIZE.indexOf(e)!==-1?s.style[e]=t[e]+"px":s.style[e]=t[e]},set:function(s,t){for(let e in t)e==="txt"&&(s.textContent=t[e]),e==="link"?s.setAttributeNS(H.links,"xlink:href",t[e]):s.setAttributeNS(null,e,t[e])},get:function(s,t){if(t===void 0)return s;if(isNaN(t)){if(t instanceof Array){if(t.length===2)return s.childNodes[t[0]].childNodes[t[1]];if(t.length===3)return s.childNodes[t[0]].childNodes[t[1]].childNodes[t[2]]}}else return s.childNodes[t]},dom:function(s,t,e,i,n){return s=s||"div",H.SVG_TYPE_D.indexOf(s)!==-1||H.SVG_TYPE_G.indexOf(s)!==-1?s==="svg"?(i=document.createElementNS(H.svgns,"svg"),H.set(i,e)):(i===void 0&&(i=document.createElementNS(H.svgns,"svg")),H.addAttributes(i,s,e,n)):i===void 0?i=document.createElementNS(H.htmls,s):i=i.appendChild(document.createElementNS(H.htmls,s)),t&&(i.style.cssText=t),n===void 0?i:i.childNodes[n||0]},addAttributes:function(s,t,e,i){let n=document.createElementNS(H.svgns,t);return H.set(n,e),H.get(s,i).appendChild(n),H.SVG_TYPE_G.indexOf(t)!==-1&&(n.style.pointerEvents="none"),n},clear:function(s){for(H.purge(s);s.firstChild;)s.firstChild.firstChild&&H.clear(s.firstChild),s.removeChild(s.firstChild)},purge:function(s){let t=s.attributes,e,i;if(t)for(e=t.length;e--;)i=t[e].name,typeof s[i]=="function"&&(s[i]=null);if(t=s.childNodes,t)for(e=t.length;e--;)H.purge(s.childNodes[e])},addSVGGlowEffect:function(){if(document.getElementById("UILGlow")!==null)return;let s=H.initUILEffects(),t=H.addAttributes(s,"filter",{id:"UILGlow",x:"-20%",y:"-20%",width:"140%",height:"140%"});H.addAttributes(t,"feGaussianBlur",{in:"SourceGraphic",stdDeviation:"3",result:"uilBlur"});let e=H.addAttributes(t,"feMerge",{});for(let i=0;i<=3;i++)H.addAttributes(e,"feMergeNode",{in:"uilBlur"});H.addAttributes(e,"feMergeNode",{in:"SourceGraphic"})},initUILEffects:function(){let s=document.getElementById("UILSVGEffects");return s===null&&(s=H.dom("svg",void 0,{id:"UILSVGEffects",width:"0",height:"0"}),document.body.appendChild(s)),s},ColorLuma:function(s,t){s==="n"&&(s="#000"),s=String(s).replace(/[^0-9a-f]/gi,""),s.length<6&&(s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2]),t=t||0;let e="#",i,n;for(n=0;n<3;n++)i=parseInt(s.substr(n*2,2),16),i=Math.round(Math.min(Math.max(0,i+i*t),255)).toString(16),e+=("00"+i).substr(i.length);return e},findDeepInver:function(s){return s[0]*.3+s[1]*.59+s[2]*.11<=.6},lerpColor:function(s,t,e){let i={};for(let n=0;n<3;n++)i[n]=s[n]+(t[n]-s[n])*e;return i},hexToHtml:function(s){return s=s===void 0?0:s,"#"+("000000"+s.toString(16)).substr(-6)},htmlToHex:function(s){return s.toUpperCase().replace("#","0x")},u255:function(s,t){return parseInt(s.substring(t,t+2),16)/255},u16:function(s,t){return parseInt(s.substring(t,t+1),16)/15},unpack:function(s){if(s.length==7)return[H.u255(s,1),H.u255(s,3),H.u255(s,5)];if(s.length==4)return[H.u16(s,1),H.u16(s,2),H.u16(s,3)]},p255:function(s){let t=Math.round(s*255).toString(16);return t.length<2&&(t="0"+t),t},pack:function(s){return"#"+H.p255(s[0])+H.p255(s[1])+H.p255(s[2])},htmlRgb:function(s){return"rgb("+Math.round(s[0]*255)+","+Math.round(s[1]*255)+","+Math.round(s[2]*255)+")"},pad:function(s){return s.length==1&&(s="0"+s),s},rgbToHex:function(s){let t=Math.round(s[0]*255).toString(16),e=Math.round(s[1]*255).toString(16),i=Math.round(s[2]*255).toString(16);return"#"+H.pad(t)+H.pad(e)+H.pad(i)},hueToRgb:function(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s},rgbToHsl:function(s){let t=s[0],e=s[1],i=s[2],n=Math.min(t,e,i),r=Math.max(t,e,i),a=r-n,o=0,l=0,h=(n+r)/2;return h>0&&h<1&&(l=a/(h<.5?2*h:2-2*h)),a>0&&(r==t&&r!=e&&(o+=(e-i)/a),r==e&&r!=i&&(o+=2+(i-t)/a),r==i&&r!=t&&(o+=4+(t-e)/a),o/=6),[o,l,h]},hslToRgb:function(s){let t,e,i=s[0],n=s[1],r=s[2];return n===0?[r,r,r]:(e=r<=.5?r*(n+1):r+n-r*n,t=r*2-e,[H.hueToRgb(t,e,i+.33333),H.hueToRgb(t,e,i),H.hueToRgb(t,e,i-.33333)])},makeGradiant:function(s,t,e,i){H.dom(s,null,t,e,0);let n=e.childNodes[0].childNodes.length-1,r;for(let a=0;a<i.length;a++)r=i[a],H.dom("stop",null,{offset:r[0]+"%","stop-color":r[1],"stop-opacity":r[2]},e,[0,n])},makePad:function(s){let t=256,e=H.dom("svg",H.css.basic+"position:relative;",{viewBox:"0 0 "+t+" "+t,width:t,height:t,preserveAspectRatio:"none"}),i=200,n=(t-i)*.5,r=20;Z.dom("rect","",{x:n,y:n,width:i,height:i,fill:H.colors.back},e),Z.dom("rect","",{x:n+r*.5,y:n+r*.5,width:i-r,height:i-r,fill:H.colors.button},e),Z.dom("line","",{x1:n+r*.5,y1:t*.5,x2:n+(i-r*.5),y2:t*.5,stroke:H.colors.back,"stroke-width":2},e),Z.dom("line","",{x1:t*.5,x2:t*.5,y1:n+r*.5,y2:n+(i-r*.5),stroke:H.colors.back,"stroke-width":2},e),Z.dom("circle","",{cx:t*.5,cy:t*.5,r:5,stroke:H.colors.text,"stroke-width":5,fill:"none"},e),H.pad2d=e},makeKnob:function(s){let t=128,e=34,i=H.dom("svg",H.css.basic+"position:relative;",{viewBox:"0 0 "+t+" "+t,width:t,height:t,preserveAspectRatio:"none"});H.dom("circle","",{cx:64,cy:64,r:e,fill:H.colors.button,stroke:"rgba(0,0,0,0.3)","stroke-width":8},i),H.dom("path","",{d:"",stroke:H.colors.text,"stroke-width":4,fill:"none","stroke-linecap":"round"},i),H.dom("circle","",{cx:64,cy:64,r:e+7,stroke:"rgba(0,0,0,0.1)","stroke-width":7,fill:"none"},i),H.dom("path","",{d:"",stroke:"rgba(255,255,255,0.3)","stroke-width":2,fill:"none","stroke-linecap":"round","stroke-opacity":.5},i),H.knob=i},makeCircular:function(s){let t=128,e=40,i=H.dom("svg",H.css.basic+"position:relative;",{viewBox:"0 0 "+t+" "+t,width:t,height:t,preserveAspectRatio:"none"});H.dom("circle","",{cx:64,cy:64,r:e,stroke:"rgba(0,0,0,0.1)","stroke-width":10,fill:"none"},i),H.dom("path","",{d:"",stroke:H.colors.text,"stroke-width":7,fill:"none","stroke-linecap":"butt"},i),H.circular=i},makeJoystick:function(s){let t=128,e,i=Math.floor((t-30)*.5),n=Math.floor(i*.6),r=H.dom("svg",H.css.basic+"position:relative;",{viewBox:"0 0 "+t+" "+t,width:t,height:t,preserveAspectRatio:"none"});if(H.dom("defs",null,{},r),H.dom("g",null,{},r),s===0){e=[[40,"rgb(0,0,0)",.3],[80,"rgb(0,0,0)",0],[90,"rgb(50,50,50)",.4],[100,"rgb(50,50,50)",0]],H.makeGradiant("radialGradient",{id:"grad",cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%"},r,e),e=[[60,"rgb(0,0,0)",.5],[100,"rgb(0,0,0)",0]],H.makeGradiant("radialGradient",{id:"gradS",cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%"},r,e);let a=["rgb(40,40,40)","rgb(48,48,48)","rgb(30,30,30)"],o=["rgb(1,90,197)","rgb(3,95,207)","rgb(0,65,167)"];e=[[30,a[0],1],[60,a[1],1],[80,a[1],1],[100,a[2],1]],H.makeGradiant("radialGradient",{id:"gradIn",cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%"},r,e),e=[[30,o[0],1],[60,o[1],1],[80,o[1],1],[100,o[2],1]],H.makeGradiant("radialGradient",{id:"gradIn2",cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%"},r,e),H.dom("circle","",{cx:64,cy:64,r:i,fill:"url(#grad)"},r),H.dom("circle","",{cx:69,cy:74,r:n+10,fill:"url(#gradS)"},r),H.dom("circle","",{cx:64,cy:64,r:n,fill:"url(#gradIn)"},r),H.joystick_0=r}else e=[[69,"rgb(0,0,0)",0],[70,"rgb(0,0,0)",.3],[100,"rgb(0,0,0)",0]],H.makeGradiant("radialGradient",{id:"gradX",cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%"},r,e),H.dom("circle","",{cx:64,cy:64,r:i,fill:"none",stroke:"rgba(100,100,100,0.25)","stroke-width":"4"},r),H.dom("circle","",{cx:64,cy:64,r:n+14,fill:"url(#gradX)"},r),H.dom("circle","",{cx:64,cy:64,r:n,fill:"none",stroke:"rgb(100,100,100)","stroke-width":"4"},r),H.joystick_1=r},makeColorRing:function(){let s=256,t=H.dom("svg",H.css.basic+"position:relative;",{viewBox:"0 0 "+s+" "+s,width:s,height:s,preserveAspectRatio:"none"});H.dom("defs",null,{},t),H.dom("g",null,{},t);let e=30,i=(s-e)*.5,n=s*.5,r=24,a=8/i/r*Math.PI,o=0,l,h,c,u,d,m,g,_,p,f=[];for(m=0;m<=r;++m){if(c=m/r,u=c*H.TwoPI,l=(o+u)*.5,h=1/Math.cos((u-o)*.5),d=[Math.sin(o),-Math.cos(o),Math.sin(l)*h,-Math.cos(l)*h,Math.sin(u),-Math.cos(u)],f[1]=H.rgbToHex(H.hslToRgb([c,1,.5])),m>0){for(g=6;g--;)d[g]=(d[g]*i+n).toFixed(2);_=" M"+d[0]+" "+d[1]+" Q"+d[2]+" "+d[3]+" "+d[4]+" "+d[5],p=[[0,f[0],1],[100,f[1],1]],H.makeGradiant("linearGradient",{id:"G"+m,x1:d[0],y1:d[1],x2:d[4],y2:d[5],gradientUnits:"userSpaceOnUse"},t,p),H.dom("path","",{d:_,"stroke-width":e,stroke:"url(#G"+m+")","stroke-linecap":"butt"},t,1)}o=u-a,f[0]=f[1]}let b=84.9;p=[[0,"#FFFFFF",1],[50,"#FFFFFF",0],[50,"#000000",0],[100,"#000000",1]],H.makeGradiant("linearGradient",{id:"GL0",x1:0,y1:n-b,x2:0,y2:n+b,gradientUnits:"userSpaceOnUse"},t,p),p=[[0,"#7f7f7f",1],[50,"#7f7f7f",.5],[100,"#7f7f7f",0]],H.makeGradiant("linearGradient",{id:"GL1",x1:n-49.05,y1:0,x2:n+98,y2:0,gradientUnits:"userSpaceOnUse"},t,p),H.dom("g",null,{"transform-origin":"128px 128px",transform:"rotate(0)"},t),H.dom("polygon","",{points:"78.95 43.1 78.95 212.85 226 128",fill:"red"},t,2),H.dom("polygon","",{points:"78.95 43.1 78.95 212.85 226 128",fill:"url(#GL1)","stroke-width":1,stroke:"url(#GL1)"},t,2),H.dom("polygon","",{points:"78.95 43.1 78.95 212.85 226 128",fill:"url(#GL0)","stroke-width":1,stroke:"url(#GL0)"},t,2),H.dom("path","",{d:"M 255.75 136.5 Q 256 132.3 256 128 256 123.7 255.75 119.5 L 241 128 255.75 136.5 Z",fill:"none","stroke-width":2,stroke:"#000"},t,2),H.dom("circle","",{cx:128,cy:128,r:6,"stroke-width":2,stroke:"#000",fill:"none"},t),H.colorRing=t},icon:function(s,t,e){e=e||40;let n=["<svg xmlns='"+H.svgns+"' version='1.1' xmlns:xlink='"+H.htmls+"' style='pointer-events:none;' preserveAspectRatio='xMinYMax meet' x='0px' y='0px' width='"+e+"px' height='"+e+"px' viewBox='"+"0 0 256 256"+"'><g>"];switch(s){case"logo":n[1]="<path id='logoin' fill='"+t+"' stroke='none' d='"+H.logoFill_d+"'/>";break;case"donate":n[1]="<path id='logoin' fill='"+t+"' stroke='none' d='"+H.logo_donate+"'/>";break;case"neo":n[1]="<path id='logoin' fill='"+t+"' stroke='none' d='"+H.logo_neo+"'/>";break;case"phy":n[1]="<path id='logoin' stroke='"+t+"' stroke-width='49' stroke-linejoin='round' stroke-linecap='butt' fill='none' d='"+H.logo_phy+"'/>";break;case"config":n[1]="<path id='logoin' stroke='"+t+"' stroke-width='49' stroke-linejoin='round' stroke-linecap='butt' fill='none' d='"+H.logo_config+"'/>";break;case"github":n[1]="<path id='logoin' fill='"+t+"' stroke='none' d='"+H.logo_github+"'/>";break;case"save":n[1]="<path stroke='"+t+"' stroke-width='4' stroke-linejoin='round' stroke-linecap='round' fill='none' d='M 26.125 17 L 20 22.95 14.05 17 M 20 9.95 L 20 22.95'/><path stroke='"+t,n[1]+="' stroke-width='2.5' stroke-linejoin='round' stroke-linecap='round' fill='none' d='M 32.6 23 L 32.6 25.5 Q 32.6 28.5 29.6 28.5 L 10.6 28.5 Q 7.6 28.5 7.6 25.5 L 7.6 23'/>";break}return n[2]="</g></svg>",n.join(`
`)},logoFill_d:`
    M 171 150.75 L 171 33.25 155.5 33.25 155.5 150.75 Q 155.5 162.2 147.45 170.2 139.45 178.25 128 178.25 116.6 178.25 108.55 170.2 100.5 162.2 100.5 150.75 
    L 100.5 33.25 85 33.25 85 150.75 Q 85 168.65 97.55 181.15 110.15 193.75 128 193.75 145.9 193.75 158.4 181.15 171 168.65 171 150.75 
    M 200 33.25 L 184 33.25 184 150.8 Q 184 174.1 167.6 190.4 151.3 206.8 128 206.8 104.75 206.8 88.3 190.4 72 174.1 72 150.8 L 72 33.25 56 33.25 56 150.75 
    Q 56 180.55 77.05 201.6 98.2 222.75 128 222.75 157.8 222.75 178.9 201.6 200 180.55 200 150.75 L 200 33.25 Z
    `,logo_github:`
    M 180.5 70 Q 186.3 82.4 181.55 96.55 196.5 111.5 189.7 140.65 183.65 168.35 146 172.7 152.5 178.7 152.55 185.9 L 152.55 218.15 Q 152.84 224.56 159.15 223.3 
    159.21 223.3 159.25 223.3 181.14 216.25 198.7 198.7 228 169.4 228 128 228 86.6 198.7 57.3 169.4 28 128 28 86.6 28 57.3 57.3 28 86.6 28 128 28 169.4 57.3 198.7 74.85 
    216.25 96.75 223.3 96.78 223.3 96.8 223.3 103.16 224.54 103.45 218.15 L 103.45 200 Q 82.97 203.1 75.1 196.35 69.85 191.65 68.4 185.45 64.27 177.055 59.4 174.15 49.20 
    166.87 60.8 167.8 69.85 169.61 75.7 180 81.13 188.09 90 188.55 98.18 188.86 103.45 185.9 103.49 178.67 110 172.7 72.33 168.33 66.3 140.65 59.48 111.49 74.45 96.55 69.7 
    82.41 75.5 70 84.87 68.74 103.15 80 115.125 76.635 128 76.85 140.85 76.65 152.85 80 171.1 68.75 180.5 70 Z
    `,logo_neo:`
    M 219 52 L 206 52 206 166 Q 206 183.4 193.75 195.65 181.4 208 164 208 146.6 208 134.35 195.65 122 183.4 122 166 L 122 90 Q 122 77.6 113.15 68.85 104.4 60 92 60 79.55 
    60 70.75 68.85 62 77.6 62 90 L 62 204 75 204 75 90 Q 75 83 79.95 78 84.95 73 92 73 99 73 104 78 109 83 109 90 L 109 166 Q 109 188.8 125.15 204.85 141.2 221 164 221 
    186.75 221 202.95 204.85 219 188.8 219 166 L 219 52 M 194 52 L 181 52 181 166 Q 181 173 176.05 178 171.05 183 164 183 157 183 152 178 147 173 147 166 L 147 90 Q 147 
    67.2 130.85 51.15 114.8 35 92 35 69.25 35 53.05 51.15 37 67.2 37 90 L 37 204 50 204 50 90 Q 50 72.6 62.25 60.35 74.6 48 92 48 109.4 48 121.65 60.35 134 72.6 134 90 L 
    134 166 Q 134 178.4 142.85 187.15 151.6 196 164 196 176.45 196 185.25 187.15 194 178.4 194 166 L 194 52 Z
    `,logo_phy:`
    M 103.55 37.95 L 127.95 37.95 Q 162.35 37.95 186.5 55 210.9 72.35 210.9 96.5 210.9 120.65 186.5 137.7 162.35 155 127.95 155 L 127.95 237.95 M 127.95 155 
    Q 93.55 155 69.15 137.7 45 120.65 45 96.5 45 72.35 69.15 55 70.9 53.8 72.85 52.85 M 127.95 155 L 127.95 37.95
    `,logo_config:`
    M 204.35 51.65 L 173.25 82.75 Q 192 101.5 192 128 L 236 128 M 192 128 Q 192 154.55 173.25 173.25 L 204.4 204.4 M 51.65 51.65 L 82.75 82.75 Q 101.5 64 128 64 
    L 128 20 M 51.6 204.4 L 82.75 173.25 Q 64 154.55 64 128 L 20 128 M 128 236 L 128 192 Q 101.5 192 82.75 173.25 M 64 128 Q 64 101.5 82.75 82.75 M 173.25 173.25 
    Q 154.55 192 128 192 M 128 64 Q 154.55 64 173.25 82.75
    `,logo_donate:`
    M 171.3 80.3 Q 179.5 62.15 171.3 45.8 164.1 32.5 141.35 30.1 L 94.35 30.1 Q 89.35 30.4 88.3 35.15 L 70.5 148.05 Q 70.2 152.5 73.7 152.6 L 100.95 152.6 107 111.6 Q 108.75 
    106.55 112.6 106.45 130.45 108.05 145.3 103.9 163.35 98.75 171.3 80.3 M 179.8 71.5 Q 178.6 79.75 174.9 87.85 168.45 102.9 151.9 109.15 140.65 113.95 117.55 113 113.15 
    112.75 111 117.45 L 102.7 169.95 Q 102.45 173.8 105.5 173.85 L 128.95 173.85 Q 132.2 174.2 133.35 169.65 L 138.3 139.95 Q 139.75 135.6 143.1 135.5 146.6 135.75 150.6 135.65 
    154.55 135.5 157.35 135.1 160.15 134.7 166.75 132.35 181.35 127.4 187.9 111.2 194.25 95.75 189.5 81.95 186.75 74.85 179.8 71.5 M 103.5 209.9 Q 103.5 202.85 99.7 198.85 95.95 
    194.75 89.4 194.75 82.8 194.75 79.05 198.85 75.3 202.9 75.3 209.9 75.3 216.85 79.05 220.95 82.8 225.05 89.4 225.05 95.95 225.05 99.7 221 103.5 216.95 103.5 209.9 M 95.45 205.5 
    Q 95.95 207.3 95.95 209.9 95.95 212.65 95.45 214.35 94.95 216 94 217.3 93.1 218.45 91.9 219 90.7 219.55 89.4 219.55 88.15 219.55 86.95 219.05 85.75 218.55 84.8 217.3 83.9 216.15 
    83.4 214.35 82.85 212.6 82.85 209.9 82.85 207.3 83.4 205.45 83.95 203.55 84.85 202.45 85.9 201.2 86.95 200.75 88.05 200.25 89.4 200.25 90.7 200.25 91.85 200.8 93.05 201.3 94 202.5 
    94.9 203.65 95.45 205.5 M 153.3 195.35 L 145.3 195.35 135.5 224.45 142.8 224.45 144.6 218.5 153.75 218.5 155.6 224.45 163.1 224.45 153.3 195.35 M 152.15 213.25 L 146.25 213.25 
    149.2 203.65 152.15 213.25 M 116.75 195.35 L 107.8 195.35 107.8 224.45 114.5 224.45 114.5 204.2 125.7 224.45 132.75 224.45 132.75 195.35 126.05 195.35 126.05 212.05 116.75 195.35 M 
    66.5 197.65 Q 64.15 196.15 61.45 195.75 58.8 195.35 55.75 195.35 L 46.7 195.35 46.7 224.45 55.8 224.45 Q 58.8 224.45 61.5 224.05 64.15 223.6 66.4 222.15 69.15 220.45 70.9 217.2 
    72.7 214 72.7 209.95 72.7 205.7 71 202.6 69.35 199.5 66.5 197.65 M 64.2 205 Q 65.2 207 65.2 209.9 65.2 212.75 64.25 214.75 63.3 216.75 61.5 217.85 60 218.85 58.3 218.9 56.6 219 
    54.15 219 L 54 219 54 200.8 54.15 200.8 Q 56.4 200.8 58.05 200.9 59.7 200.95 61.15 201.75 63.2 202.95 64.2 205 M 210.2 195.35 L 190.5 195.35 190.5 224.45 210.2 224.45 210.2 218.9 
    197.75 218.9 197.75 211.55 209.2 211.55 209.2 206 197.75 206 197.75 200.9 210.2 200.9 210.2 195.35 M 187.5 195.35 L 163 195.35 163 200.9 171.6 200.9 171.6 224.45 178.9 224.45 178.9 
    200.9 187.5 200.9 187.5 195.35 Z
    `};H.setText();const Z=H;class Cn{static autoTypes(t){let e=[];switch(t){case"svg":e=[{accept:{"image/svg+xml":".svg"}}];break;case"wav":e=[{accept:{"audio/wav":".wav"}}];break;case"mp3":e=[{accept:{"audio/mpeg":".mp3"}}];break;case"mp4":e=[{accept:{"video/mp4":".mp4"}}];break;case"bin":case"hex":e=[{description:"Binary Files",accept:{"application/octet-stream":[".bin",".hex"]}}];break;case"text":e=[{description:"Text Files",accept:{"text/plain":[".txt",".text"],"text/html":[".html",".htm"]}}];break;case"json":e=[{description:"JSON Files",accept:{"application/json":[".json"]}}];break;case"js":e=[{description:"JavaScript Files",accept:{"text/javascript":[".js"]}}];break;case"image":e=[{description:"Images",accept:{"image/*":[".png",".gif",".jpeg",".jpg"]}}];break;case"icon":e=[{description:"Icons",accept:{"image/x-ico":[".ico"]}}];break;case"lut":e=[{description:"Lut",accept:{"text/plain":[".cube",".3dl"]}}];break}return e}static async load(t={}){typeof window.showOpenFilePicker!="function"&&(window.showOpenFilePicker=Cn.showOpenFilePickerPolyfill);try{let e=t.type||"";const i={excludeAcceptAllOption:!!e,multiple:!1};i.types=Cn.autoTypes(e);const r=await(await window.showOpenFilePicker(i))[0].getFile();if(!r)return null;let a=r.name,o=a.substring(a.lastIndexOf(".")+1,a.length);const l=["png","jpg","jpeg","mp4","webm","ogg","mp3"],h=["sea","z","hex","bvh","BVH","glb","gltf"],c=new FileReader;l.indexOf(o)!==-1?c.readAsDataURL(r):h.indexOf(o)!==-1?c.readAsArrayBuffer(r):c.readAsText(r),c.onload=function(u){let d=u.target.result;switch(e){case"image":let m=new Image;m.onload=function(){t.callback&&t.callback(m,a,o)},m.src=d;break;case"json":t.callback&&t.callback(JSON.parse(d),a,o);break;default:t.callback&&t.callback(d,a,o);break}}}catch(e){console.log(e),t.always&&t.callback&&t.callback(null)}}static showOpenFilePickerPolyfill(t){return new Promise(e=>{const i=document.createElement("input");i.type="file",i.multiple=t.multiple,i.accept=t.types.map(n=>n.accept).flatMap(n=>Object.keys(n).flatMap(r=>n[r])).join(","),i.addEventListener("change",()=>{e([...i.files].map(n=>({getFile:async()=>new Promise(r=>{r(n)})})))}),i.click()})}static async save(t={}){let e=!1;typeof window.showSaveFilePicker!="function"&&(window.showSaveFilePicker=Cn.showSaveFilePickerPolyfill,e=!0);try{let i=t.type||"";const n={suggestedName:t.name||"hello",data:t.data||""};n.types=Cn.autoTypes(i),n.finalType=Object.keys(n.types[0].accept)[0],n.suggestedName+=n.types[0].accept[n.finalType][0];const r=await window.showSaveFilePicker(n);if(e)return;const a=await r.createWritable();let o=new Blob([n.data],{type:n.finalType});await a.write(o),await a.close()}catch(i){console.log(i)}}static showSaveFilePickerPolyfill(t){return new Promise(e=>{const i=document.createElement("a");i.download=t.suggestedName||"my-file.txt";let n=new Blob([t.data],{type:t.finalType});i.href=URL.createObjectURL(n),i.addEventListener("click",()=>{e(setTimeout(()=>URL.revokeObjectURL(i.href),1e3))}),i.click()})}static async getFolder(){try{const t=await window.showDirectoryPicker(),e=[];for await(const i of t.values()){const n=await i.getFile();e.push(n)}return console.log(e),e}catch(t){console.log(t)}}}class ei{constructor(t=0,e=0){this.x=t,this.y=e}set(t,e){return this.x=t,this.y=e,this}divide(t){return this.x/=t.x,this.y/=t.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divideScalar(t){return this.multiplyScalar(1/t)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}angle(){var t=Math.atan2(this.y,this.x);return t<0&&(t+=2*Math.PI),t}addScalar(t){return this.x+=t,this.y+=t,this}negate(){return this.x*=-1,this.y*=-1,this}neg(){return this.x=-1,this.y=-1,this}isZero(){return this.x===0&&this.y===0}copy(t){return this.x=t.x,this.y=t.y,this}equals(t){return t.x===this.x&&t.y===this.y}nearEquals(t,e){return t.x.toFixed(e)===this.x.toFixed(e)&&t.y.toFixed(e)===this.y.toFixed(e)}lerp(t,e){return t===null?(this.x-=this.x*e,this.y-=this.y*e):(this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e),this}}class pe{constructor(t={}){this.lock=t.lock||!1,this.neverlock=!1,this.isSpace=t.isSpace||!1,this.main=t.main||null,this.isUI=t.isUI||!1,this.group=t.group||null,this.isListen=!1,this.top=0,this.ytop=0,this.dx=t.dx||0,this.isSelectable=t.selectable!==void 0?t.selectable:!1,this.unselectable=t.unselect!==void 0?t.unselect:this.isSelectable,this.ontop=t.ontop?t.ontop:!1,this.css=this.main?this.main.css:Z.css,this.colors=Z.defineColor(t,this.main?this.group?this.group.colors:this.main.colors:Z.colors),this.overEffect=this.colors.showOver,this.svgs=Z.svgs,this.zone={x:0,y:0,w:0,h:0,d:0},this.local=new ei().neg(),this.isCanvasOnly=!1,this.isSelect=!1,this.p=t.p!==void 0?t.p:Z.size.p,this.w=this.isUI?this.main.size.w:Z.size.w,t.w!==void 0&&(this.w=t.w),this.h=this.isUI?this.main.size.h:Z.size.h,t.h!==void 0&&(this.h=t.h),this.isSpace?this.lock=!0:this.h=this.h<11?11:this.h,this.fw=t.fw||0,this.autoWidth=t.auto||!0,this.isOpen=!1,this.radius=t.radius||this.colors.radius,this.transition=t.transition||Z.transition,this.isNumber=!1,this.noNeg=t.noNeg||!1,this.allEqual=t.allEqual||!1,this.mono=!1,this.isEdit=!1,this.simple=t.simple||!1,this.simple&&(this.sa=0),this.setSize(this.w),t.sa!==void 0&&(this.sa=t.sa),t.sb!==void 0&&(this.sb=t.sb),this.simple&&(this.sb=this.w-this.sa),this.sc=t.sc===void 0?47:t.sc,this.objectLink=null,this.isSend=!1,this.objectKey=null,this.txt=t.name||"",this.name=t.rename||this.txt,this.target=t.target||null,this.callback=t.callback===void 0?null:t.callback,this.endCallback=null,this.openCallback=t.openCallback===void 0?null:t.openCallback,this.closeCallback=t.closeCallback===void 0?null:t.closeCallback,this.callback===null&&this.isUI&&this.main.callback!==null&&(this.callback=this.group?this.group.callback:this.main.callback),this.c=[],this.s=[],this.useFlex=this.isUI?this.main.useFlex:!1;let e=this.useFlex?"display:flex; justify-content:center; align-items:center; text-align:center; flex: 1 100%;":"float:left;";this.c[0]=Z.dom("div",this.css.basic+e+"position:relative; height:20px;"),this.s[0]=this.c[0].style,this.margin=this.colors.sy,this.mtop=0;let i=Z.isDivid(this.margin);if(this.isUI&&this.margin&&(this.s[0].boxSizing="content-box",i?(this.mtop=this.margin*.5,this.s[0].borderTop=this.mtop+"px solid transparent",this.s[0].borderBottom=this.mtop+"px solid transparent"):this.s[0].borderBottom=this.margin+"px solid transparent"),this.simple||(this.c[1]=Z.dom("div",this.css.txt+this.css.middle),this.s[1]=this.c[1].style,this.c[1].textContent=this.name,this.s[1].color=this.lock?this.colors.titleoff:this.colors.title),t.pos){this.s[0].position="absolute";for(let n in t.pos)this.s[0][n]=t.pos[n];this.mono=!0}t.css&&(this.s[0].cssText=t.css)}init(){this.ytop=this.top+this.mtop,this.zone.h=this.h+this.margin,this.zone.w=this.w;let t=this.s,e=this.c;t[0].height=this.h+"px",this.isUI&&(t[0].background=this.colors.background),!this.autoWidth&&this.useFlex?(t[0].flex="1 0 auto",t[0].minWidth=this.minw+"px",t[0].textAlign="center"):this.isUI&&(t[0].width="100%"),e[1]!==void 0&&this.autoWidth&&(t[1]=e[1].style,t[1].top="1px",t[1].height=this.h-2+"px");let i=Z.frag;for(let r=1,a=e.length;r!==a;r++)e[r]!==void 0&&(i.appendChild(e[r]),t[r]=e[r].style);let n=this.target!==null?this.target:this.isUI?this.main.inner:document.body;this.ontop?n.insertAdjacentElement("afterbegin",e[0]):n.appendChild(e[0]),e[0].appendChild(i),this.rSize(),this.isUI||(this.c[0].style.pointerEvents="auto",Ut.add(this))}addTransition(){this.baseH&&this.transition&&this.isUI&&(this.c[0].style.transition="height "+this.transition+"s ease-out")}dom(t,e,i,n,r){return Z.dom(t,e,i,n,r)}setSvg(t,e,i,n,r){Z.setSvg(t,e,i,n,r)}setCss(t,e){Z.setCss(t,e)}clamp(t,e,i){return Z.clamp(t,e,i)}getColorRing(){return Z.colorRing||Z.makeColorRing(),Z.clone(Z.colorRing)}getJoystick(t){return Z["joystick_"+t]||Z.makeJoystick(t),Z.clone(Z["joystick_"+t])}getCircular(t){return Z.circular||Z.makeCircular(t),Z.clone(Z.circular)}getKnob(t){return Z.knob||Z.makeKnob(t),Z.clone(Z.knob)}getPad2d(t){return Z.pad2d||Z.makePad(t),Z.clone(Z.pad2d)}cursor(t){Ut.cursor(t)}update(){}reset(){}content(){return this.c[0]}getDom(){return this.c[0]}uiout(){this.lock||this.overEffect&&this.s&&(this.s[0].background=this.colors.background)}uiover(){this.lock||this.overEffect&&this.s&&(this.s[0].background=this.colors.backgroundOver)}rename(t){this.c[1]!==void 0&&(this.c[1].textContent=t)}listen(){return this.isListen=Ut.addListen(this),this}listening(){return this.objectLink===null||this.isSend||this.isEdit?void 0:this.setValue(this.objectLink[this.objectKey])}setValue(t){const e=this.value;this.isNumber?this.value=this.numValue(t):this.value=t,this.update();let i=!1;return e!==this.value&&(i=!0),i}onChange(t){if(!this.isSpace)return this.callback=t||null,this}onFinishChange(t){if(!this.isSpace)return this.callback=null,this.endCallback=t,this}onOpen(t){return this.openCallback=t,this}onClose(t){return this.closeCallback=t,this}send(t){t=t||this.value,t instanceof Array&&t.length===1&&(t=t[0]),this.isSend=!0,this.objectLink!==null&&(this.objectLink[this.objectKey]=t),this.callback&&this.callback(t,this.objectKey),this.isSend=!1}sendEnd(t){t=t||this.value,t instanceof Array&&t.length===1&&(t=t[0]),this.endCallback&&this.endCallback(t),this.objectLink!==null&&(this.objectLink[this.objectKey]=t)}dispose(){this.isListen&&Ut.removeListen(this),Z.clear(this.c[0]),this.target!==null?this.group!==null?this.group.clearOne(this):this.target.removeChild(this.c[0]):this.isUI?this.main.clearOne(this):document.body.removeChild(this.c[0]),this.isUI||Ut.remove(this),this.c=null,this.s=null,this.callback=null,this.target=null,this.isListen=!1}clear(){}getWidth(){let t=Ut.getWidth(this);t&&(this.w=t)}setSize(t){if(this.autoWidth)if(this.w=t,this.simple)this.sb=this.w-this.sa;else{let e=this.w*(this.p/100);this.sa=Math.floor(e+8),this.sb=Math.floor(this.w-e-16)}}rSize(){this.autoWidth&&(this.isUI||(this.s[0].width=this.w+"px"),this.simple||(this.s[1].width=this.sa+"px"))}setTypeNumber(t){this.isNumber=!0,this.value=0,t.value!==void 0&&(typeof t.value=="string"?this.value=t.value*1:this.value=t.value),this.min=t.min===void 0?-1/0:t.min,this.max=t.max===void 0?1/0:t.max,this.precision=t.precision===void 0?2:t.precision;let e;switch(this.precision){case 0:e=1;break;case 1:e=.1;break;case 2:e=.01;break;case 3:e=.001;break;case 4:e=1e-4;break;case 5:e=1e-5;break;case 6:e=1e-6;break}this.step=t.step===void 0?e:t.step,this.range=this.max-this.min,this.value=this.numValue(this.value)}numValue(t){return this.noNeg&&(t=Math.abs(t)),Math.min(this.max,Math.max(this.min,t)).toFixed(this.precision)*1}handleEvent(t){if(!this.lock)return this.neverlock&&(Ut.lock=!1),this[t.type]?this[t.type](t):console.error(t.type,"this type of event no existe !")}wheel(t){return!1}mousedown(t){return!1}mousemove(t){return!1}mouseup(t){return!1}keydown(t){return!1}keyup(t){return!1}setReferency(t,e){this.objectLink=t,this.objectKey=e}display(t=!1){this.s[0].visibility=t?"visible":"hidden"}open(){this.isOpen||(this.isOpen=!0,Ut.needResize=!0,this.openCallback&&this.openCallback())}close(){this.isOpen&&(this.isOpen=!1,Ut.needResize=!0,this.closeCallback&&this.closeCallback())}needZone(){Ut.needReZone=!0}rezone(){Ut.needReZone=!0}select(){}unselect(){}setInput(t){Ut.setInput(t,this)}upInput(t,e){return Ut.upInput(t,e)}selected(t){this.isSelect=t||!1}}class F0 extends pe{constructor(t={}){super(t),this.value=t.value||!1,this.model=t.mode!==void 0?t.mode:0,this.onName=t.rename||this.txt,t.onName&&(t.onname=t.onName),t.onname&&(this.onName=t.onname),this.inh=t.inh||Math.floor(this.h*.8),this.inw=t.inw||36;let e=this.colors;if(this.model===0){let i=Math.floor(this.h*.5)-(this.inh-2)*.5;this.c[2]=this.dom("div",this.css.basic+"background:"+e.inputBg+"; height:"+(this.inh-2)+"px; width:"+this.inw+"px; top:"+i+"px; border-radius:10px; border:2px solid "+e.back),this.c[3]=this.dom("div",this.css.basic+"height:"+(this.inh-6)+"px; width:16px; top:"+(i+2)+"px; border-radius:10px; background:"+e.button+";")}else this.p=0,this.c[1]!==void 0&&(this.c[1].textContent=""),this.c[2]=this.dom("div",this.css.txt+this.css.button+"top:1px; background:"+e.button+"; height:"+(this.h-2)+"px; border:"+e.borderSize+"px solid "+e.border+"; border-radius:"+this.radius+"px;");this.stat=-1,this.init(),this.update()}mousedown(t){return this.value=!this.value,this.update(!0),this.mousemove(t)}mousemove(t){return this.cursor("pointer"),this.mode(!0)}reset(){return this.cursor(),this.mode()}mode(t){let e=!1,i=this.colors,n=this.s,r,a=this.value;if(t?r=a?4:3:r=a?2:1,this.stat!==r){if(this.stat=r,this.model!==0){switch(r){case 1:n[2].color=i.text,n[2].background=i.button;break;case 2:n[2].color=i.textSelect,n[2].background=i.select;break;case 3:n[2].color=i.textOver,n[2].background=i.overoff;break;case 4:n[2].color=i.textOver,n[2].background=i.over;break}this.c[2].innerHTML=a?this.onName:this.name}else{switch(r){case 1:n[2].background=n[2].borderColor=i.backoff,n[3].background=i.button;break;case 2:n[2].background=n[2].borderColor=i.back,n[3].background=i.textOver;break;case 3:n[2].background=n[2].borderColor=i.back,n[3].background=i.overoff;break;case 4:n[2].background=n[2].borderColor=i.backoff,n[3].background=i.textSelect;break}n[3].marginLeft=a?"17px":"2px",this.c[1].textContent=a?this.onName:this.name}e=!0}return e}update(t){this.mode(),t&&this.send()}rSize(){super.rSize();let t=this.s,e=this.w-10-this.inw;this.model===0?(t[2].left=e+"px",t[3].left=e+"px"):(t[2].left=this.sa+"px",t[2].width=this.sb+"px")}}class wh extends pe{constructor(t={}){super(t),this.value="",t.value!==void 0&&(this.value=t.value),this.values=t.value||this.txt,t.values&&(this.values=t.values),!t.values&&!t.value&&(this.txt=""),this.onName=t.onName||null,this.on=!1,this.bw=t.forceWidth||0,t.bw&&(this.bw=t.bw),this.space=t.space||3,typeof this.values=="string"&&(this.values=[this.values]),this.isDown=!1,this.neverlock=!0,this.res=0,this.lng=this.values.length,this.tmp=[],this.stat=[];let e,i=this.colors;for(let n=0;n<this.lng;n++)e=!1,this.values[n]===this.value&&this.isSelectable&&(e=!0),this.c[n+2]=this.dom("div",this.css.txt+this.css.button+"top:1px; height:"+(this.h-2)+"px; border:"+i.borderSize+"px solid "+i.border+"; border-radius:"+this.radius+"px;"),this.c[n+2].style.background=e?i.select:i.button,this.c[n+2].style.color=e?i.textSelect:i.text,this.c[n+2].innerHTML=this.values[n],this.stat[n]=e?3:1;this.txt===""&&(this.p=0),(!t.value&&!t.values||this.p===0)&&this.c[1]!==void 0&&(this.c[1].textContent=""),this.init()}onOff(){this.on=!this.on,this.label(this.on?this.onName:this.value)}testZone(t){let e=this.local;if(e.x===-1&&e.y===-1)return-1;let i=this.lng,n=this.tmp;for(;i--;)if(e.x>n[i][0]&&e.x<n[i][2])return i;return-1}mouseup(t){return this.isDown?(this.isDown=!1,this.res!==-1&&(this.value===this.values[this.res]&&this.unselectable?this.value="":this.value=this.values[this.res],this.onName!==null&&this.onOff(),this.send()),this.mousemove(t)):!1}mousedown(t){return this.isDown?!1:(this.isDown=!0,this.mousemove(t))}mousemove(t){let e=!1;return this.res=this.testZone(t),this.res!==-1?(this.cursor("pointer"),e=this.modes(this.isDown?3:2,this.res)):e=this.reset(),e}modes(t=1,e=-1){let i=this.lng,n,r,a=!1;for(;i--;)r=t,n=this.isSelectable?this.values[i]===this.value:!1,i===e?n&&r===2&&(r=3):(r=1,n&&(r=4)),a=this.mode(r,i);return a}mode(t,e){let i=!1,n=this.colors,r=this.s,a=e+2;if(this.stat[e]!==t){switch(this.stat[e]=t,t){case 1:r[a].color=n.text,r[a].background=n.button;break;case 2:r[a].color=n.textOver,r[a].background=n.overoff;break;case 3:r[a].color=n.textOver,r[a].background=n.over;break;case 4:r[a].color=n.textSelect,r[a].background=n.select;break}i=!0}return i}reset(){return this.res=-1,this.cursor(),this.modes()}label(t,e){e=e||2,this.c[e].textContent=t}switchValues(t,e){this.c[t+2].innerHTML=this.values[t]=e}icon(t,e=0,i=2){return this.s[i].padding=e+"px 0px",this.c[i].innerHTML=t,this}rSize(){super.rSize();let t=this.s,e=this.sb,i=this.sa,n=this.lng,r=this.colors.sx,a=(e-r*(n-1))/n;for(this.bw&&(a=this.bw<a?this.bw:a,i=(this.w-(a*n+r*(n-1)))*.5);n--;)this.tmp[n]=[i+a*n+r*n,a],this.tmp[n][2]=this.tmp[n][0]+this.tmp[n][1],t[n+2].left=this.tmp[n][0]+"px",t[n+2].width=this.tmp[n][1]+"px"}}class k0 extends pe{constructor(t={}){super(t),this.isCyclic=t.cyclic||!1,this.model=t.stype||0,t.mode!==void 0&&(this.model=t.mode),this.autoWidth=!1,this.minw=this.w,this.diam=t.diam||this.w,this.setTypeNumber(t),this.twoPi=Z.TwoPI,this.pi90=Z.pi90,this.offset=new ei,this.h=t.h||this.w+10,this.c[0].style.width=this.w+"px",this.c[0].style.display="block",this.c[1]!==void 0&&(this.c[1].style.width="100%",this.c[1].style.justifyContent="center",this.top=10,this.h+=10),this.percent=0,this.cmode=0;let e=this.colors;this.c[2]=this.dom("div",this.css.txt+"justify-content:center; top:"+(this.h-20)+"px; width:100%; color:"+e.text),this.c[3]=this.getCircular(),this.setSvg(this.c[3],"stroke",e.back,0),this.setSvg(this.c[3],"d",this.makePath(),1),this.setSvg(this.c[3],"stroke",e.text,1),this.setSvg(this.c[3],"viewBox","0 0 "+this.diam+" "+this.diam),this.setCss(this.c[3],{width:this.diam,height:this.diam,left:0,top:this.top}),this.init(),this.update()}mode(t){if(this.cmode===t)return!1;let e=this.colors,i;switch(t){case 0:this.s[2].color=e.text,this.setSvg(this.c[3],"stroke",e.back,0),i=this.model>0?Z.pack(Z.lerpColor(Z.unpack(Z.ColorLuma(e.text,-.75)),Z.unpack(e.text),this.percent)):e.text,this.setSvg(this.c[3],"stroke",i,1);break;case 1:this.s[2].color=e.textOver,this.setSvg(this.c[3],"stroke",e.backoff,0),i=this.model>0?Z.pack(Z.lerpColor(Z.unpack(Z.ColorLuma(e.text,-.75)),Z.unpack(e.text),this.percent)):e.textOver,this.setSvg(this.c[3],"stroke",i,1);break}return this.cmode=t,!0}reset(){this.isDown=!1}testZone(t){let e=this.local;return e.x===-1&&e.y===-1?"":e.y<=this.c[1].offsetHeight?"title":e.y>this.h-this.c[2].offsetHeight?"text":"circular"}mouseup(t){return this.isDown=!1,this.sendEnd(),this.mode(0)}mousedown(t){return this.isDown=!0,this.old=this.value,this.oldr=null,this.mousemove(t),this.mode(1)}mousemove(t){if(!this.isDown)return;let e=this.offset;if(e.x=this.w*.5-(t.clientX-this.zone.x),e.y=this.diam*.5-(t.clientY-this.zone.y-this.ytop),this.r=e.angle()-this.pi90,this.r=(this.r%this.twoPi+this.twoPi)%this.twoPi,this.oldr!==null){let a=this.r-this.oldr;this.r=Math.abs(a)>Math.PI?this.oldr:this.r,a>6&&(this.r=0),a<-6&&(this.r=this.twoPi)}let i=1/this.twoPi,n=this.r*i,r=this.range*n+this.min-this.old;(r>=this.step||r<=this.step)&&(r=~~(r/this.step),this.value=this.numValue(this.old+r*this.step),this.update(!0),this.old=this.value,this.oldr=this.r)}wheel(t){if(this.testZone(t)==="circular"){let i=this.value-this.step*t.delta;return i>this.max?i=this.isCyclic?this.min:this.max:i<this.min&&(i=this.isCyclic?this.max:this.min),this.setValue(i),this.old=i,this.update(!0),!0}return!1}makePath(){let t=40,e=24,i=this.percent*this.twoPi-.001,n=t+t*Math.sin(i)+e,r=t-t*Math.cos(i)+e,a=i>Math.PI?1:0;return"M "+(t+e)+","+e+" A "+t+","+t+" 0 "+a+" 1 "+n+","+r}update(t){if(this.c[2].textContent=this.value,this.percent=(this.value-this.min)/this.range,this.setSvg(this.c[3],"d",this.makePath(),1),this.model>0){let e=this.colors,i=Z.pack(Z.lerpColor(Z.unpack(Z.ColorLuma(e.text,-.75)),Z.unpack(e.text),this.percent));this.setSvg(this.c[3],"stroke",i,1)}t&&this.send()}}class B0 extends pe{constructor(t={}){super(t),this.ctype=t.ctype||"hex",this.wfixe=256,this.cw=this.sb>256?256:this.sb,t.cw!=null&&(this.cw=t.cw),this.side=t.side||"down",this.up=this.side==="down"?0:1,this.baseH=this.h,this.offset=new ei,this.decal=new ei,this.pp=new ei;let e=this.colors;this.c[2]=this.dom("div",`${this.css.txt} ${this.css.middle} top:1px; height:${this.h-2}px; border-radius:${this.radius}px; text-shadow:none; border:${e.borderSize}px solid ${e.border};`),this.c[0].style.display="block",this.c[3]=this.getColorRing(),this.c[3].style.visibility="hidden",this.hsl=null,this.value="#ffffff",t.value!==void 0&&(t.value instanceof Array?this.value=Z.rgbToHex(t.value):isNaN(t.value)?this.value=t.value:this.value=Z.hexToHtml(t.value)),this.bcolor=null,this.isDown=!1,this.fistDown=!1,this.notext=t.notext||!1,this.tr=98,this.tsl=Math.sqrt(3)*this.tr,this.hue=0,this.d=256,this.init(),this.setColor(this.value),t.open!==void 0&&this.open()}testZone(t,e){let i=this.local;if(i.x===-1&&i.y===-1)return"";if(this.up&&this.isOpen)return i.y>this.wfixe?"title":"color";if(i.y<this.baseH+2)return"title";if(this.isOpen)return"color"}mouseup(t){this.isDown=!1,this.d=256}mousedown(t){let e=this.testZone(t.clientX,t.clientY);if(e==="title")return this.isOpen?this.close():this.open(),!0;e==="color"&&(this.isDown=!0,this.fistDown=!0,this.mousemove(t))}mousemove(t){let e=this.testZone(t.clientX,t.clientY),i,n,r,a,o,l,h,c,u,d=Z;if(e==="title"&&this.cursor("pointer"),e==="color"&&(i=this.offset,i.x=t.clientX-(this.zone.x+this.decal.x+this.mid),i.y=t.clientY-(this.zone.y+this.decal.y+this.mid)-this.ytop,n=i.length()*this.ratio,u=i.angle(),u<0&&(u+=2*d.PI),n<128?this.cursor("crosshair"):this.isDown||this.cursor(),this.isDown&&(this.fistDown&&(this.d=n,this.fistDown=!1),this.d<128)))if(this.d>this.tr)r=(u+d.pi90)/d.TwoPI,this.hue=(r+1)%1,this.setHSL([(r+1)%1,this.hsl[1],this.hsl[2]]);else{h=i.x*this.ratio,c=i.y*this.ratio;let m=this.hue*d.TwoPI+d.PI;m<0&&(m+=2*d.PI),l=Math.atan2(-c,h),l<0&&(l+=2*d.PI);let g=(l+d.pi90+d.TwoPI+m)%d.TwoPI,_=g%(2/3*d.PI)-d.pi60,p=.5*this.tr,f=Math.tan(_)*p,b=Math.sqrt(h*h+c*c),y=Math.sqrt(p*p+f*f);if(b>y){let P=Math.tan(_)*b,C=Math.atan(P/y);C>d.pi60?C=d.pi60:C<-d.pi60&&(C=-d.pi60),l+=C-_,g=(l+d.pi90+d.TwoPI+m)%d.TwoPI,_=g%(2/3*d.PI)-d.pi60,f=Math.tan(_)*p,b=y=Math.sqrt(p*p+f*f)}o=Math.sin(g)*b/this.tsl+.5;let E=1-Math.abs(o-.5)*2;a=(Math.cos(g)*b+this.tr/2)/(1.5*this.tr)/E,a=d.clamp(a,0,1),this.setHSL([this.hsl[0],a,o])}}setHeight(){this.h=this.isOpen?this.wfixe+this.baseH+5:this.baseH,this.s[0].height=this.h+"px",this.zone.h=this.h}parentHeight(t){this.group!==null?this.group.calc(t):this.isUI&&this.main.calc(t)}open(){super.open(),this.setHeight(),this.up&&(this.zone.y-=this.wfixe+5);let t=this.h-this.baseH;this.s[3].visibility="visible",this.parentHeight(t)}close(){super.close(),this.up&&(this.zone.y+=this.wfixe+5);let t=this.h-this.baseH;this.setHeight(),this.s[3].visibility="hidden",this.parentHeight(-t)}update(t){let e=Z.rgbToHex(Z.hslToRgb([this.hsl[0],1,.5]));this.moveMarkers(),this.value=this.bcolor,this.setSvg(this.c[3],"fill",e,2,0),this.s[2].background=this.bcolor,this.notext||(this.c[2].textContent=Z.htmlToHex(this.bcolor)),this.invert=Z.findDeepInver(this.rgb),this.s[2].color=this.invert?"#fff":"#000",t&&(this.ctype==="array"&&this.send(this.rgb),this.ctype==="rgb"&&this.send(Z.htmlRgb(this.rgb)),this.ctype==="hex"&&this.send(Z.htmlToHex(this.value)),this.ctype==="html"&&this.send())}setValue(t){t instanceof Array?this.value=Z.rgbToHex(t):isNaN(t)?this.value=t:this.value=Z.hexToHtml(t),this.setColor(this.value),this.update()}setColor(t){let e=Z.unpack(t);return this.bcolor!==t&&e&&(this.bcolor=t,this.rgb=e,this.hsl=Z.rgbToHsl(this.rgb),this.hue=this.hsl[0],this.update()),this}setHSL(t){return this.hsl=t,this.rgb=Z.hslToRgb(t),this.bcolor=Z.rgbToHex(this.rgb),this.update(!0),this}moveMarkers(){let t=this.pp,e=Z;this.invert;let i=this.hsl[0]*e.TwoPI,n=2/3*e.PI,r=this.tr,a=this.hsl[0],o=this.hsl[1],l=this.hsl[2],h=(i-e.pi90)*e.todeg;a=-i+e.pi90;let c=Math.cos(a)*r,u=-Math.sin(a)*r,d=Math.cos(a-n)*r,m=-Math.sin(a-n)*r,g=Math.cos(a+n)*r,_=-Math.sin(a+n)*r,p=(d+g)/2,f=(m+_)/2;i=(1-2*Math.abs(l-.5))*o;let b=d+(g-d)*l+(c-p)*i,y=m+(_-m)*l+(u-f)*i;t.set(b,y).addScalar(128),this.setSvg(this.c[3],"transform","rotate("+h+" )",2),this.setSvg(this.c[3],"cx",t.x,3),this.setSvg(this.c[3],"cy",t.y,3),this.setSvg(this.c[3],"stroke",this.invert?"#fff":"#000",2,3),this.setSvg(this.c[3],"stroke",this.invert?"#fff":"#000",3),this.setSvg(this.c[3],"fill",this.bcolor,3)}rSize(){super.rSize();let t=this.s;t[2].width=this.sb+"px",t[2].left=this.sa+"px",this.cw=this.sb>256?256:this.sb,this.rSizeColor(this.cw),this.decal.x=Math.floor((this.w-this.wfixe)*.5)}rSizeColor(t){if(t===this.wfixe)return;this.wfixe=t;let e=this.s;this.decal.y=this.side==="up"?2:this.baseH+2,this.mid=Math.floor(this.wfixe*.5),this.setSvg(this.c[3],"viewBox","0 0 "+this.wfixe+" "+this.wfixe),e[3].width=this.wfixe+"px",e[3].height=this.wfixe+"px",e[3].top=this.decal.y+"px",this.ratio=256/this.wfixe,this.square=1/(60*(this.wfixe/256)),this.setHeight()}}class z0 extends pe{constructor(t={}){super(t),this.round=Math.round,this.baseH=this.h,this.hplus=t.hplus||50,this.res=t.res||40,this.l=1,this.precision=t.precision||0,this.custom=t.custom||!1,this.names=t.names||["FPS","MS"];let e=t.cc||["220,220,220","255,255,0"];this.adding=t.adding||!1,this.range=t.range||[165,100,100],this.alpha=t.alpha||.25,this.values=[],this.points=[],this.textDisplay=[],this.custom||(this.now=Ut.getTime(),this.startTime=0,this.prevTime=0,this.frames=0,this.ms=0,this.fps=0,this.mem=0,this.mm=0,this.isMem=!!(self.performance&&self.performance.memory),this.isMem&&(this.names.push("MEM"),e.push("0,255,255")),this.txt=t.name||"Fps");let i=Math.floor(this.h*.5)-3;const n=this.colors;this.c[1].textContent=this.txt,this.c[0].style.cursor="pointer",this.c[0].style.pointerEvents="auto";let r="display:none; left:10px; top:"+this.h+"px; height:"+(this.hplus-8)+"px; box-sizing:border-box; background: rgba(0, 0, 0, 0.2); border:1px solid "+n.border+";";this.radius!==0&&(r+="border-radius:"+this.radius+"px;"),this.c[2]=this.dom("path",this.css.basic+r,{}),this.c[2].setAttribute("viewBox","0 0 "+this.res+" 50"),this.c[2].setAttribute("height","100%"),this.c[2].setAttribute("width","100%"),this.c[2].setAttribute("preserveAspectRatio","none"),this.c[3]=this.dom("path",this.css.basic+"position:absolute; width:6px; height:6px; left:0; top:"+i+"px;",{d:this.svgs.g1,fill:n.text,stroke:"none"}),this.c[4]=this.dom("div",this.css.txt+"position:absolute; left:10px; top:"+(this.h+2)+"px; display:none; width:100%; text-align:center;"),t.bottomLine&&(this.c[4]=this.dom("div",this.css.basic+"width:100%; bottom:0px; height:1px; background: rgba(255, 255, 255, 0.2);")),this.isShow=!1;let a=this.s;a[1].lineHeight=this.h-4,a[1].color=n.text,this.radius!==0&&(a[0].borderRadius=this.radius+"px"),this.colors.gborder!=="none"&&(a[0].border="1px solid "+n.gborder);let o=0;for(o=0;o<this.names.length;o++){let l=[],h=this.res+1;for(;h--;)l.push(50);this.range[o]=1/this.range[o]*49,this.points.push(l),this.values.push(0),this.textDisplay.push("<span style='color:rgb("+e[o]+")'> "+this.names[o]+" ")}for(o=this.names.length;o--;)this.dom("path",null,{fill:"rgba("+e[o]+","+this.alpha+")","stroke-width":1,stroke:"rgba("+e[o]+",1)","vector-effect":"non-scaling-stroke"},this.c[2]);this.init()}mousedown(t){this.isShow?this.close():this.open()}tick(t){this.values=t,this.isShow&&(this.drawGraph(),this.upText())}makePath(t){let e="";e+="M -1 50";for(let i=0;i<this.res+1;i++)e+=" L "+i+" "+t[i];return e+=" L "+(this.res+1)+" 50",e}upText(t){let e=t||this.values,i="";for(let n=0,r=this.names.length;n<r;n++)i+=this.textDisplay[n]+e[n].toFixed(this.precision)+"</span>";this.c[4].innerHTML=i}drawGraph(){let t=this.c[2],e=this.names.length,i,n=0,r=0;for(;e--;)this.adding?i=(this.values[r]+n)*this.range[r]:i=this.values[r]*this.range[r],this.points[r].shift(),this.points[r].push(50-i),this.setSvg(t,"d",this.makePath(this.points[r]),e+1),n+=this.values[r],r++}open(){super.open(),this.h=this.hplus+this.baseH,this.setSvg(this.c[3],"d",this.svgs.g2),this.group!==null?this.group.calc(this.hplus):this.isUI&&this.main.calc(this.hplus),this.s[0].height=this.h+"px",this.s[2].display="block",this.s[4].display="block",this.isShow=!0,this.custom||Ut.addListen(this)}close(){super.close(),this.h=this.baseH,this.setSvg(this.c[3],"d",this.svgs.g1),this.group!==null?this.group.calc(-this.hplus):this.isUI&&this.main.calc(-this.hplus),this.s[0].height=this.h+"px",this.s[2].display="none",this.s[4].display="none",this.isShow=!1,this.custom||Ut.removeListen(this),this.c[4].innerHTML=""}begin(){this.startTime=this.now()}end(){let t=this.now();if(this.ms=t-this.startTime,this.frames++,t>this.prevTime+1e3&&(this.fps=this.round(this.frames*1e3/(t-this.prevTime)),this.prevTime=t,this.frames=0,this.isMem)){let e=performance.memory.usedJSHeapSize,i=performance.memory.jsHeapSizeLimit;this.mem=this.round(e*954e-9),this.mm=e/i}return this.values=[this.fps,this.ms,this.mm],this.drawGraph(),this.upText([this.fps,this.ms,this.mem]),t}listening(){this.custom||(this.startTime=this.end())}rSize(){let t=this.s,e=this.w;t[3].left=this.sa+this.sb-6+"px",t[0].width=e+"px",t[1].width=e+"px",t[2].left="10px",t[2].width=e-20+"px",t[4].width=e-20+"px"}}class H0 extends pe{constructor(t={}){super(t),this.value=t.value!==void 0?t.value:[0,0,0],this.lng=this.value.length,this.precision=t.precision!==void 0?t.precision:2,this.multiplicator=t.multiplicator||1,this.neg=t.neg||!1,this.line=t.line!==void 0?t.line:!0,this.autoWidth=t.autoWidth!==void 0?t.autoWidth:!0,this.isNumber=!1,this.isDown=!1,this.h=t.h||138,this.rh=this.h-10,this.top=0,this.c[0].style.width=this.w+"px",this.c[1]!==void 0&&(this.c[1].style.width=this.w+"px",this.autoWidth||(this.c[1].style.width="100%",this.c[1].style.justifyContent="center"),this.top=10,this.h+=10),this.gh=this.rh-28,this.gw=this.w-28,this.c[2]=this.dom("div",this.css.txt+"display:block; text-align:center; padding:0px 0px; top:"+(this.h-20)+"px; left:14px; width:"+this.gw+"px;  color:"+this.colors.text),this.c[2].innerHTML=this.valueToHtml();let e=this.dom("svg",this.css.basic,{viewBox:"0 0 "+this.w+" "+this.rh,width:this.w,height:this.rh,preserveAspectRatio:"none"});this.setCss(e,{width:this.w,height:this.rh,left:0,top:this.top}),this.dom("path","",{d:"",stroke:this.colors.text,"stroke-width":2,fill:"none","stroke-linecap":"butt"},e),this.dom("rect","",{x:10,y:10,width:this.gw+8,height:this.gh+8,stroke:"rgba(0,0,0,0.3)","stroke-width":1,fill:"none"},e),this.iw=(this.gw-4*(this.lng-1))/this.lng;let i=[];this.cMode=[],this.v=[];for(let n=0;n<this.lng;n++)i[n]=[14+n*this.iw+n*4,this.iw],i[n][2]=i[n][0]+i[n][1],this.cMode[n]=0,this.neg?this.v[n]=(1+this.value[n]/this.multiplicator)*.5:this.v[n]=this.value[n]/this.multiplicator,this.dom("rect","",{x:i[n][0],y:14,width:i[n][1],height:1,fill:this.colors.text,"fill-opacity":.3},e);this.tmp=i,this.c[3]=e,this.init(),this.c[1]!==void 0&&(this.c[1].style.top="0px",this.c[1].style.height="20px",this.s[1].lineHeight="15px"),this.update(!1)}setValue(t){this.value=t,this.lng=this.value.length;for(var e=0;e<this.lng;e++)this.neg?this.v[e]=(1+t[e]/this.multiplicator)*.5:this.v[e]=t[e]/this.multiplicator;this.update()}valueToHtml(){let t=this.lng,e=0,i='<table style="width:100%;"><tr>',r="width:"+100/this.lng+"%;";for(;t--;)e===this.lng-1?i+="<td style="+r+">"+this.value[e]+"</td></tr></table>":i+="<td style="+r+">"+this.value[e]+"</td>",e++;return i}updateSVG(){this.line&&this.setSvg(this.c[3],"d",this.makePath(),0);for(let t=0;t<this.lng;t++)this.setSvg(this.c[3],"height",this.v[t]*this.gh,t+2),this.setSvg(this.c[3],"y",14+(this.gh-this.v[t]*this.gh),t+2),this.neg?this.value[t]=((this.v[t]*2-1)*this.multiplicator).toFixed(this.precision)*1:this.value[t]=(this.v[t]*this.multiplicator).toFixed(this.precision)*1;this.c[2].innerHTML=this.valueToHtml()}testZone(t){let e=this.local;if(e.x===-1&&e.y===-1)return"";let i=this.lng,n=this.tmp;if(e.y>this.top&&e.y<this.h-20){for(;i--;)if(e.x>n[i][0]&&e.x<n[i][2])return i}return""}mode(t,e){if(t===this.cMode[e])return!1;let i;switch(t){case 0:i=.3;break;case 1:i=.6;break;case 2:i=1;break}return this.reset(),this.setSvg(this.c[3],"fill-opacity",i,e+2),this.cMode[e]=t,!0}reset(){let t=!1,e=this.lng;for(;e--;)this.cMode[e]!==0&&(this.cMode[e]=0,this.setSvg(this.c[3],"fill-opacity",.3,e+2),t=!0);return t}mouseup(t){if(this.isDown=!1,this.current!==-1)return this.reset()}mousedown(t){return this.isDown=!0,this.mousemove(t)}mousemove(t){let e=!1,i=this.testZone(t);return i===""?e=this.reset():(e=this.mode(this.isDown?2:1,i),this.isDown&&(this.v[i]=this.clamp(1-(t.clientY-this.zone.y-this.ytop-10)/this.gh,0,1),this.update(!0))),e}update(t){this.updateSVG(),t&&this.send()}makePath(){let t="",e,i,n,r,a,o;for(let l=0;l<this.lng;l++)e=14+(this.gh-this.v[l]*this.gh),i=14+l*this.iw+l*4,r=i+this.iw*.5,n=i+this.iw,l===0?t+="M "+i+" "+e+" T "+r+" "+e:t+=" C "+a+" "+o+","+i+" "+e+","+r+" "+e,l===this.lng-1&&(t+=" T "+n+" "+e),a=n,o=e;return t}rSize(){super.rSize();let t=this.s;this.c[1]!==void 0&&(t[1].width=this.w+"px"),t[3].width=this.w+"px";let e=this.w-28,i=(e-4*(this.lng-1))/this.lng,n=[];t[2].width=e+"px";for(let r=0;r<this.lng;r++)n[r]=[14+r*i+r*4,i],n[r][2]=n[r][0]+n[r][1];this.tmp=n}}class Ah extends pe{constructor(t={}){t.isSpace=!0,t.margin=0,t.h||(t.h=10),super(t),this.init()}}class G0 extends pe{constructor(t={}){super(t),this.isGroup=!0,this.ADD=t.add,this.autoHeight=!0,this.uis=[],this.current=-1,this.proto=null,this.isEmpty=!0,this.decal=t.group?8:0,this.baseH=this.h,this.spaceY=new Ah({h:this.margin});let e=Math.floor(this.h*.5)-3;const i=this.colors;this.useFlex=!0;let n=this.useFlex?"display:flex; flex-flow: row wrap;":"";this.c[2]=this.dom("div",this.css.basic+n+"width:100%; left:0;  overflow:hidden; top:"+this.h+"px"),this.c[3]=this.dom("path",this.css.basic+"position:absolute; width:6px; height:6px; left:0; top:"+e+"px;",{d:this.svgs.g1,fill:i.text,stroke:"none"});let r=this.mtop===0?this.margin:this.mtop;this.c[4]=this.dom("div",this.css.basic+"width:100%; left:0; height:"+(r+1)+"px; top:"+(this.h-1)+"px; background:none;"),this.s,this.c[1].name="group",this.init(),this.setBG(t.bg),t.open&&this.open()}setBG(t){const e=this.colors,i=this.s;t!==void 0&&(e.groups=t),e.groups==="none"&&(e.groups=e.background),e.background="none",i[0].background="none",i[1].background=e.groups,i[2].background=e.groups,e.gborder!=="none"&&(i[1].border=e.borderSize+"px solid "+e.gborder),this.radius!==0&&(i[1].borderRadius=this.radius+"px",i[2].borderRadius=this.radius+"px")}testZone(t){let e=this.local;if(e.x===-1&&e.y===-1)return"";let i="";return e.y<this.baseH+this.margin?i="title":this.isOpen&&(i="content"),i}clearTarget(){return this.current===-1?!1:(this.proto.s&&(this.proto.uiout(),this.proto.reset()),this.proto=null,this.current=-1,this.cursor(),!0)}reset(){this.clearTarget()}handleEvent(t){let e=t.type,i=!1,n=!1,r=this.testZone(t);if(r){switch(r){case"content":Ut.isMobile&&e==="mousedown"&&this.getNext(t,i),this.proto&&(n=this.proto.handleEvent(t)),Ut.lock||this.getNext(t,i);break;case"title":this.cursor("pointer"),e==="mousedown"&&(this.isOpen?this.close():this.open());break}return this.isDown&&(i=!0),n&&(i=!0),i}}getNext(t,e){let i=Ut.findTarget(this.uis,t);i!==this.current&&(this.clearTarget(),this.current=i),i!==-1&&(this.proto=this.uis[this.current],this.proto.uiover())}add(){let t=arguments;typeof t[1]=="object"?(t[1].isUI=this.isUI,t[1].target=this.c[2],t[1].main=this.main,t[1].group=this):typeof arguments[1]=="string"&&(t[2]===void 0?[].push.call(t,{isUI:!0,target:this.c[2],main:this.main}):(t[2].isUI=!0,t[2].target=this.c[2],t[2].main=this.main,t[2].group=this));let e=this.ADD.apply(this,t);return e.isGroup&&(e.dx=8),Ut.forceZone=!0,this.uis.push(e),this.isEmpty=!1,e}remove(t){t.dispose&&t.dispose()}dispose(){this.clear(),this.isUI&&this.main.calc(),super.dispose()}clear(){this.empty()}empty(){this.close();let t=this.uis.length,e;for(;t--;)e=this.uis.pop(),this.c[2].removeChild(e.c[0]),e.clear(!0);this.isEmpty=!0,this.h=this.baseH}clearOne(t){let e=this.uis.indexOf(t);e!==-1&&(this.calc(-(this.uis[e].h+this.margin)),this.c[2].removeChild(this.uis[e].c[0]),this.uis.splice(e,1),this.uis.length===0&&(this.isEmpty=!0,this.close()))}open(){super.open(),this.setSvg(this.c[3],"d",this.svgs.g2),this.rSizeContent();const t=this.s,e=this.colors;t[2].top=this.h+this.mtop+"px",t[4].background=e.groups,this.radius&&(t[1].borderRadius="0px",t[2].borderRadius="0px",t[1].borderTopLeftRadius=this.radius+"px",t[1].borderTopRightRadius=this.radius+"px",t[2].borderBottomLeftRadius=this.radius+"px",t[2].borderBottomRightRadius=this.radius+"px"),e.gborder!=="none"&&(t[4].borderLeft=e.borderSize+"px solid "+e.gborder,t[4].borderRight=e.borderSize+"px solid "+e.gborder,t[2].border=e.borderSize+"px solid "+e.gborder,t[2].borderTop="none",t[1].borderBottom=e.borderSize+"px solid rgba(0,0,0,0)"),this.parentHeight()}close(){super.close(),this.setSvg(this.c[3],"d",this.svgs.g1),this.h=this.baseH;const t=this.s,e=this.colors;t[0].height=this.h+"px",t[2].top=this.h+this.mtop+"px",t[4].background="none",e.gborder!=="none"&&(t[4].border="none",t[2].border="none",t[1].border=e.borderSize+"px solid "+e.gborder),this.radius&&(t[1].borderRadius=this.radius+"px"),this.parentHeight()}calcUis(){!this.isOpen||this.isEmpty?this.h=this.baseH:this.h=Ut.calcUis([...this.uis,this.spaceY],this.zone,this.zone.y+this.baseH+this.margin,!0)+this.baseH,this.s[0].height=this.h+"px",this.s[2].height=this.h-this.baseH+"px"}parentHeight(t){this.group!==null?this.group.calc(t):this.isUI&&this.main.calc(t)}calc(t){this.isOpen&&(this.isUI?this.main.calc():this.calcUis(),this.s[0].height=this.h+"px",this.s[2].height=this.h+"px")}rSizeContent(){let t=this.uis.length;for(;t--;)this.uis[t].setSize(this.w),this.uis[t].rSize()}rSize(){super.rSize();let t=this.s;this.w=this.w-this.decal,t[3].left=this.sa+this.sb-6+"px",t[1].width=this.w+"px",t[2].width=this.w+"px",t[1].left=this.decal+"px",t[2].left=this.decal+"px",this.isOpen&&this.rSizeContent()}}class V0 extends pe{constructor(t={}){super(t),this.autoWidth=!1,this.value=[0,0],this.minw=this.w,this.diam=t.diam||this.w,this.joyType="analogique",this.model=t.mode!==void 0?t.mode:0,this.precision=t.precision||2,this.multiplicator=t.multiplicator||1,this.pos=new ei,this.tmp=new ei,this.interval=null,this.c[0].style.display="block",this.haveText=t.text!==void 0?t.text:!0,this.distance=this.diam*.5*.25,this.h=t.h||this.w+(this.haveText?10:0),this.c[0].style.width=this.w+"px",this.c[1]!==void 0&&(this.c[1].style.width="100%",this.c[1].style.justifyContent="center",this.top=10,this.h+=10);let e=this.colors;this.c[2]=this.dom("div",this.css.txt+"justify-content:center; top:"+(this.h-20)+"px; width:100%; color:"+e.text),this.c[2].textContent=this.haveText?this.value:"",this.c[3]=this.getJoystick(this.model),this.setSvg(this.c[3],"viewBox","0 0 "+this.diam+" "+this.diam),this.setCss(this.c[3],{width:this.diam,height:this.diam,left:0,top:this.top}),this.mode(0),this.ratio=128/this.w,this.init(),this.update(!1)}mode(t){let e=this.colors;switch(t){case 0:this.model===0?(this.setSvg(this.c[3],"fill","url(#gradIn)",4),this.setSvg(this.c[3],"stroke","#000",4)):(this.setSvg(this.c[3],"stroke",e.joyOut,2),this.setSvg(this.c[3],"stroke",e.joyOut,4),this.setSvg(this.c[3],"fill","none",4));break;case 1:this.model===0?(this.setSvg(this.c[3],"fill","url(#gradIn2)",4),this.setSvg(this.c[3],"stroke","rgba(0,0,0,0)",4)):(this.setSvg(this.c[3],"stroke",e.joyOver,2),this.setSvg(this.c[3],"stroke",e.joySelect,4),this.setSvg(this.c[3],"fill",e.joyOver,4));break}}addInterval(){this.interval!==null&&this.stopInterval(),!this.pos.isZero()&&(this.interval=setInterval((function(){this.update()}).bind(this),10))}stopInterval(){this.interval!==null&&(clearInterval(this.interval),this.interval=null)}reset(){this.addInterval(),this.mode(0)}mouseup(t){this.addInterval(),this.isDown=!1}mousedown(t){this.isDown=!0,this.mousemove(t),this.mode(2)}mousemove(t){if(this.mode(1),!this.isDown)return;if(this.tmp.x=this.w*.5-(t.clientX-this.zone.x),this.tmp.y=this.diam*.5-(t.clientY-this.zone.y-this.ytop),this.tmp.length()>this.distance){let i=Math.atan2(this.tmp.x,this.tmp.y);this.tmp.x=Math.sin(i)*this.distance,this.tmp.y=Math.cos(i)*this.distance}this.pos.copy(this.tmp).divideScalar(this.distance).negate(),this.update()}setValue(t){t===void 0&&(t=[0,0]),this.pos.set(t[0]||0,t[1]||0),this.updateSVG()}update(t){t===void 0&&(t=!0),this.interval!==null&&(this.isDown||(this.pos.lerp(null,.3),this.pos.x=Math.abs(this.pos.x)<.01?0:this.pos.x,this.pos.y=Math.abs(this.pos.y)<.01?0:this.pos.y,this.isUI&&this.main.isCanvas&&this.main.draw())),this.updateSVG(),t&&this.send(),this.pos.isZero()&&this.stopInterval()}updateSVG(){let t=this.diam*.5- -this.pos.x*this.distance,e=this.diam*.5- -this.pos.y*this.distance;if(this.model===0){let i=t+this.pos.x*5+5,n=e+this.pos.y*5+10;this.setSvg(this.c[3],"cx",i*this.ratio,3),this.setSvg(this.c[3],"cy",n*this.ratio,3)}else this.setSvg(this.c[3],"cx",t*this.ratio,3),this.setSvg(this.c[3],"cy",e*this.ratio,3);this.setSvg(this.c[3],"cx",t*this.ratio,4),this.setSvg(this.c[3],"cy",e*this.ratio,4),this.value[0]=(this.pos.x*this.multiplicator).toFixed(this.precision)*1,this.value[1]=(this.pos.y*this.multiplicator).toFixed(this.precision)*1,this.haveText&&(this.c[2].textContent=this.value)}clear(){this.stopInterval(),super.clear()}}class W0 extends pe{constructor(t={}){super(t),this.isCyclic=t.cyclic||!1,this.model=t.stype||0,t.mode!==void 0&&(this.model=t.mode),this.autoWidth=!1,this.setTypeNumber(t),this.minw=this.w,this.diam=t.diam||this.w,this.mPI=Math.PI*.8,this.toDeg=180/Math.PI,this.cirRange=this.mPI*2,this.offset=new ei,this.h=t.h||this.w+10,this.c[0].style.width=this.w+"px",this.c[0].style.display="block",this.c[1]!==void 0&&(this.c[1].style.width="100%",this.c[1].style.justifyContent="center",this.top=10,this.h+=10),this.percent=0,this.cmode=0;let e=this.colors;this.c[2]=this.dom("div",this.css.txt+"justify-content:center; top:"+(this.h-20)+"px; width:100%; color:"+e.text),this.c[3]=this.getKnob(),this.setSvg(this.c[3],"fill",e.button,0),this.setSvg(this.c[3],"stroke",e.text,1),this.setSvg(this.c[3],"stroke",e.text,3),this.setSvg(this.c[3],"d",this.makeGrad(),3),this.setSvg(this.c[3],"viewBox","0 0 "+this.diam+" "+this.diam),this.setCss(this.c[3],{width:this.diam,height:this.diam,left:0,top:this.top}),this.model>0&&(Z.dom("path","",{d:"",stroke:e.text,"stroke-width":2,fill:"none","stroke-linecap":"round"},this.c[3]),this.model==2&&(Z.addSVGGlowEffect(),this.setSvg(this.c[3],"style",'filter: url("#UILGlow");',4))),this.r=0,this.init(),this.update()}mode(t){let e=this.colors;if(this.cmode===t)return!1;switch(t){case 0:this.s[2].color=e.text,this.setSvg(this.c[3],"fill",e.button,0),this.setSvg(this.c[3],"stroke",e.text,1);break;case 1:this.s[2].color=e.textOver,this.setSvg(this.c[3],"fill",e.select,0),this.setSvg(this.c[3],"stroke",e.textOver,1);break}return this.cmode=t,!0}testZone(t){let e=this.local;return e.x===-1&&e.y===-1?"":e.y<=this.c[1].offsetHeight?"title":e.y>this.h-this.c[2].offsetHeight?"text":"knob"}mouseup(t){return this.isDown=!1,this.sendEnd(),this.mode(0)}mousedown(t){return this.isDown=!0,this.old=this.value,this.oldr=null,this.mousemove(t),this.mode(1)}mousemove(t){if(!this.isDown)return;let e=this.offset;e.x=this.w*.5-(t.clientX-this.zone.x),e.y=this.diam*.5-(t.clientY-this.zone.y-this.ytop),this.r=-Math.atan2(e.x,e.y),this.oldr!==null&&(this.r=Math.abs(this.r-this.oldr)>Math.PI?this.oldr:this.r),this.r=this.r>this.mPI?this.mPI:this.r,this.r=this.r<-this.mPI?-this.mPI:this.r;let i=1/this.cirRange,n=(this.r+this.mPI)*i,r=this.range*n+this.min-this.old;(r>=this.step||r<=this.step)&&(r=Math.floor(r/this.step),this.value=this.numValue(this.old+r*this.step),this.update(!0),this.old=this.value,this.oldr=this.r)}wheel(t){if(this.testZone(t)==="knob"){let i=this.value-this.step*t.delta;return i>this.max?i=this.isCyclic?this.min:this.max:i<this.min&&(i=this.isCyclic?this.max:this.min),this.setValue(i),this.old=i,this.update(!0),!0}return!1}makeGrad(){let t="",e,i,n,r,a,o,l,h=64,c=Math.PI+this.mPI,u=Math.PI-this.mPI;this.step>5?(i=this.range/this.step,e=(c-u)/i):(e=(c-u)/h*2,i=h*.5);for(let d=0;d<=i;++d)n=c-e*d,r=h+Math.sin(n)*(h-20),a=h+Math.cos(n)*(h-20),o=h+Math.sin(n)*(h-24),l=h+Math.cos(n)*(h-24),t+="M"+r+" "+a+" L"+o+" "+l+" ";return t}update(t){this.c[2].textContent=this.value,this.percent=(this.value-this.min)/this.range;let e=Math.PI+this.mPI,i=this.percent*this.cirRange-this.mPI,n=Math.sin(i),r=Math.cos(i),a=25*n+64,o=-(25*r)+64,l=20*n+64,h=-(20*r)+64;if(this.setSvg(this.c[3],"d","M "+a+" "+o+" L "+l+" "+h,1),this.model>0){let c=36*Math.sin(e)+64,u=36*Math.cos(e)+64,d=36*n+64,m=-36*r+64,g=i<=Math.PI-this.mPI?0:1;this.setSvg(this.c[3],"d","M "+c+","+u+" A 36,36 1 "+g+" 1 "+d+","+m,4);let _=Z.pack(Z.lerpColor(Z.unpack(Z.ColorLuma(this.colors.text,-.75)),Z.unpack(this.colors.text),this.percent));this.setSvg(this.c[3],"stroke",_,4)}t&&this.send()}}class X0 extends pe{constructor(t={}){super(t),this.hideCurrent=!1,this.path=t.path||"",this.format=t.format||"",this.isWithImage=this.path!=="",this.preLoadComplete=!1,this.tmpImage={},this.tmpUrl=[],this.m=t.m!==void 0?t.m:5;let e=t.align||"left",i=t.scrollSize||10;this.ss=i+1,this.sMode=0,this.tMode=0,this.listOnly=t.listOnly||!1,this.staticTop=t.staticTop||!1,this.isSelectable=this.listOnly,t.select!==void 0&&(t.selectable=t.select),t.selectable!==void 0&&(this.isSelectable=t.selectable),this.txt===""&&(this.p=0);let n=Math.floor(this.h*.5)-3,r=this.colors;if(this.c[2]=this.dom("div",this.css.basic+"top:0; display:none; border-radius:"+this.radius+"px;"),this.c[3]=this.dom("div",this.css.item+"padding:0px "+this.m+"px; margin-bottom:0px; position:absolute; justify-content:"+e+"; text-align:"+e+"; line-height:"+(this.h-4)+"px; top:1px; background:"+r.button+"; height:"+(this.h-2)+"px; border:1px solid "+r.border+"; border-radius:"+this.radius+"px;"),this.c[4]=this.dom("path",this.css.basic+"position:absolute; width:6px; height:6px; top:"+n+"px;",{d:this.svgs.g1,fill:r.text,stroke:"none"}),this.scrollerBack=this.dom("div",this.css.basic+"right:0px; width:"+i+"px; background:"+r.back+"; display:none;"),this.scroller=this.dom("div",this.css.basic+"right:"+(i-i*.25)*.5+"px; width:"+i*.25+"px; background:"+r.text+"; display:none; "),this.c[3].style.color=r.text,this.list=[],this.refObject=null,t.list){if(t.list instanceof Array)this.list=t.list;else if(t.list instanceof Object){this.refObject=t.list;for(let a in this.refObject)this.list.push(a)}}this.items=[],this.prevName="",this.tmpId=0,this.baseH=this.h,this.itemHeight=t.itemHeight||this.h,this.full=t.full||!1,this.py=0,this.ww=this.sb,this.scroll=!1,this.isDown=!1,this.current=null,this.side=t.side||"down",this.up=this.side==="down"?0:1,this.up?(this.c[2].style.top="auto",this.c[3].style.top="auto",this.c[4].style.top="auto",this.c[2].style.bottom=this.h-2+"px",this.c[3].style.bottom="1px",this.c[4].style.bottom=n+"px"):this.c[2].style.top=this.baseH+"px",this.listIn=this.dom("div",this.css.basic+"left:0; top:0; width:100%; background:none;"),this.listIn.name="list",this.topList=0,this.c[2].appendChild(this.listIn),this.c[2].appendChild(this.scrollerBack),this.c[2].appendChild(this.scroller),t.value!==void 0?isNaN(t.value)?this.value=t.value:this.value=this.list[t.value]:this.value=this.list[0],this.isOpenOnStart=t.open||!1,this.listOnly&&(this.baseH=5,this.c[3].style.display="none",this.c[4].style.display="none",this.c[2].style.top=this.baseH+"px",this.isOpenOnStart=!0),this.miniCanvas=t.miniCanvas||!1,this.canvasBg=t.canvasBg||"rgba(0,0,0,0)",this.imageSize=t.imageSize||[20,20],this.drag=t.drag||!1,this.dragout=t.dragout||!1,this.dragstart=t.dragstart||null,this.dragend=t.dragend||null,this.setList(this.list),this.init(),this.isWithImage&&this.preloadImage(),this.isOpenOnStart&&this.open(!0),this.baseH+=this.mtop}preloadImage(){this.preLoadComplete=!1,this.tmpImage={};for(let t=0;t<this.list.length;t++)this.tmpUrl.push(this.list[t]);this.loadOne()}nextImg(){this.c!==null&&(this.tmpUrl.shift(),this.tmpUrl.length===0?(this.preLoadComplete=!0,this.addImages()):this.loadOne())}loadOne(){let t=this,e=this.tmpUrl[0],i=document.createElement("img");i.style.cssText="position:absolute; width:"+t.imageSize[0]+"px; height:"+t.imageSize[1]+"px",i.setAttribute("src",this.path+e+this.format),i.addEventListener("load",function(){t.imageSize[2]=i.width,t.imageSize[3]=i.height,t.tmpImage[e]=i,t.nextImg()})}testZone(t){let e=this.local;if(e.x===-1&&e.y===-1)return"";if(this.up&&this.isOpen){if(e.y>this.h-this.baseH)return"title";if(this.scroll&&e.x>this.sa+this.sb-this.ss)return"scroll";if(e.x>this.sa)return this.testItems(e.y-this.baseH)}else{if(e.y<this.baseH+2)return"title";if(this.isOpen){if(this.scroll&&e.x>this.sa+this.sb-this.ss)return"scroll";if(e.x>this.sa)return this.testItems(e.y-this.baseH)}}return""}testItems(t){let e="",i=this.items,n=i.length,r,a,o;for(;n--;)if(r=i[n],a=r.posy+this.topList,o=r.posy+this.itemHeight+1+this.topList,t>=a&&t<=o)return e="item"+n,this.modeItem(0),this.current=r,this.modeItem(1),e;return e}modeItem(t){if(!this.current)return;this.current.select&&t===0&&(t=2);let e=this.colors;switch(t){case 0:this.current.style.background=e.back,this.current.style.color=e.text;break;case 1:this.current.style.background=e.over,this.current.style.color=e.textOver;break;case 2:this.current.style.background=e.select,this.current.style.color=e.textSelect;break}}unSelected(){this.current&&(this.modeItem(0),this.current=null)}selected(){this.current&&(this.resetItems(),this.modeItem(2),this.current.select=!0)}resetItems(){let t=this.items.length;for(;t--;)this.items[t].select=!1,this.items[t].style.background=this.colors.back,this.items[t].style.color=this.colors.text}hideActive(){this.hideCurrent&&(this.current&&(this.tmpId=this.current.id),this.resetHide())}resetHide(){console.log(this.tmpId);let t=this.items.length;for(;t--;)t===this.tmpId?(this.items[t].style.height="0px",this.items[t].posy=-1):(this.items[t].style.height=this.itemHeight+"px",this.items[t].posy=(this.itemHeight+1)*(t-1))}mouseup(t){this.isDown=!1}mousedown(t){let e=this.testZone(t);return e?(e==="scroll"?(this.isDown=!0,this.mousemove(t)):e==="title"?(this.modeTitle(2),this.listOnly||(this.hideActive(),this.isOpen?this.close():this.open())):this.current&&(this.value=this.list[this.current.id],this.isSelectable&&this.selected(),this.send(this.value),this.listOnly||(this.close(),this.setTopItem())),!0):!1}mousemove(t){let e=!1,i=this.testZone(t);if(!i)return e;if(i==="title")this.unSelected(),this.modeTitle(1),this.cursor("pointer");else if(i==="scroll"){if(this.cursor("s-resize"),this.modeScroll(1),this.isDown){this.modeScroll(2);let n=this.zone.y+this.baseH-2;this.update(t.clientY-n-this.sh*.5)}}else this.modeTitle(0),this.modeScroll(0),this.cursor("pointer");return i!==this.prevName&&(e=!0),this.prevName=i,e}wheel(t){return this.testZone(t)==="title"?!1:(this.py+=t.delta*10,this.update(this.py),!0)}reset(){this.prevName="",this.unSelected(),this.modeTitle(0),this.modeScroll(0)}modeScroll(t){if(t===this.sMode)return;let e=this.scroller.style,i=this.colors;switch(t){case 0:e.background=i.text;break;case 1:e.background=i.select;break;case 2:e.background=i.select;break}this.sMode=t}modeTitle(t){if(t===this.tMode)return;let e=this.s,i=this.colors;switch(t){case 0:e[3].color=i.text,e[3].background=i.button;break;case 1:e[3].color=i.textOver,e[3].background=i.overoff;break;case 2:e[3].color=i.textSelect,e[3].background=i.overoff;break}this.tMode=t}clearList(){for(;this.listIn.children.length;)this.listIn.removeChild(this.listIn.lastChild);this.items=[]}setList(t){this.clearList(),this.list=t,this.length=this.list.length;let e=this.hideCurrent?this.length-1:this.length;this.maxItem=this.full?e:5,this.maxItem=e<this.maxItem?e:this.maxItem,this.maxHeight=this.maxItem*(this.itemHeight+1)+2,this.max=e*(this.itemHeight+1)+2,this.ratio=this.maxHeight/this.max,this.sh=this.maxHeight*this.ratio,this.range=this.maxHeight-this.sh,this.c[2].style.height=this.maxHeight+"px",this.scrollerBack.style.height=this.maxHeight+"px",this.scroller.style.height=this.sh+"px",this.max>this.maxHeight&&(this.ww=this.sb-this.ss,this.scroll=!0),this.miniCanvas&&(this.tmpCanvas=document.createElement("canvas"),this.tmpCanvas.width=this.imageSize[0],this.tmpCanvas.height=this.imageSize[1],this.tmpCtx=this.tmpCanvas.getContext("2d"),this.tmpCtx.fillStyle=this.canvasBg,this.tmpCtx.fillRect(0,0,this.imageSize[0],this.imageSize[1]));let i,n;for(let r=0;r<this.length;r++){if(n=this.list[r],i=this.dom("div",this.css.item+"padding:0px "+(this.m+1)+"px; width:"+this.ww+"px; height:"+this.itemHeight+"px; line-height:"+(this.itemHeight-2)+"px; color:"+this.colors.text+"; background:"+this.colors.back+";"),i.name="item"+r,i.id=r,i.select=!1,i.posy=(this.itemHeight+1)*r,this.listIn.appendChild(i),this.items.push(i),n===this.value&&(this.current=i),this.isWithImage||(i.textContent=n),this.miniCanvas){let a=new Image;a.src=this.tmpCanvas.toDataURL(),a.style.cssText="margin-right:4px;",i.appendChild(a),this.tmpImage[n]=a}this.dragout&&(i.img=this.tmpImage[n],i.style.pointerEvents="auto",i.draggable="true",i.addEventListener("dragstart",this.dragstart||function(){}),i.addEventListener("drag",this.drag||function(){}),i.addEventListener("dragleave",function(){Ut.fakeUp()}),i.addEventListener("dragend",this.dragend||(function(){}).bind(this)))}this.setTopItem(),this.isSelectable&&this.selected()}drawImage(t,e,i,n,r,a){this.tmpCtx.clearRect(0,0,this.imageSize[0],this.imageSize[1]),this.tmpCtx.drawImage(e,i,n,r,a,0,0,this.imageSize[0],this.imageSize[1]),this.tmpImage[t].src=this.tmpCanvas.toDataURL()}addImages(){let t=this.list.length;for(let e=0;e<t;e++)this.items[e].appendChild(this.tmpImage[this.list[e]]);this.setTopItem()}setValue(t){isNaN(t)?this.value=t:this.value=this.list[t],this.setTopItem()}setTopItem(){if(!this.staticTop){if(this.isWithImage){if(!this.preLoadComplete)return;this.c[3].children.length||(this.canvas=document.createElement("canvas"),this.canvas.width=this.imageSize[0],this.canvas.height=this.imageSize[1],this.canvas.style.cssText="margin-right:4px;",this.ctx=this.canvas.getContext("2d"),this.c[3].style.textAlign="left",this.c[3].style.justifyContent="left",this.c[3].appendChild(this.canvas)),this.tmpImage[this.value],this.ctx.drawImage(this.tmpImage[this.value],0,0,this.imageSize[2],this.imageSize[3],0,0,this.imageSize[0],this.imageSize[1])}else this.c[3].textContent=this.value;this.miniCanvas&&(this.c[3].children.length||(this.canvas=document.createElement("canvas"),this.canvas.width=this.imageSize[0],this.canvas.height=this.imageSize[1],this.canvas.style.cssText="margin-right:4px;",this.ctx=this.canvas.getContext("2d"),this.c[3].style.textAlign="left",this.c[3].style.justifyContent="left",this.c[3].appendChild(this.canvas)),this.ctx.drawImage(this.tmpImage[this.value],0,0))}}update(t){this.scroll&&(t=t<0?0:t,t=t>this.range?this.range:t,this.topList=-Math.floor(t/this.ratio),this.listIn.style.top=this.topList+"px",this.scroller.style.top=Math.floor(t)+"px",this.py=t)}parentHeight(t){this.group!==null?this.group.calc(t):this.isUI&&this.main.calc(t)}open(t){super.open(),this.update(0),this.h=this.maxHeight+this.baseH+5,this.scroll?(this.scroller.style.display="block",this.scrollerBack.style.display="block"):(this.topList=0,this.h=this.baseH+5+this.max,this.scroller.style.display="none",this.scrollerBack.style.display="none"),this.s[0].height=this.h+"px",this.s[2].display="block",this.up?(this.zone.y-=this.h-(this.baseH-10),this.setSvg(this.c[4],"d",this.svgs.g1)):this.setSvg(this.c[4],"d",this.svgs.g2),this.rSizeContent();let e=this.h-this.baseH;this.zone.h=this.h,t||this.parentHeight(e)}close(){super.close(),this.up&&(this.zone.y+=this.h-(this.baseH-10));let t=this.h-this.baseH;this.h=this.baseH,this.s[0].height=this.h+"px",this.s[2].display="none",this.setSvg(this.c[4],"d",this.svgs.g1),this.zone.h=this.h,this.parentHeight(-t)}text(t){this.c[3].textContent=t}rSizeContent(){let t=this.length;for(;t--;)this.listIn.children[t].style.width=this.ww+"px"}rSize(){super.rSize();let t=this.s,e=this.sb,i=this.sa;t[2]!==void 0&&(t[2].width=e+"px",t[2].left=i+"px",t[3].width=e+"px",t[3].left=i+"px",t[4].left=i+e-15+"px",this.ww=e,this.max>this.maxHeight&&(this.ww=e-this.ss),this.isOpen&&this.rSizeContent())}}class j0 extends pe{constructor(t={}){super(t),this.setTypeNumber(t),this.allway=t.allway||!1,this.isDown=!1,this.value=[0],this.multy=1,this.invmulty=1,this.isSingle=!0,this.isAngle=!1,this.isVector=!1,t.isAngle&&(this.isAngle=!0,this.multy=Z.torad,this.invmulty=Z.todeg),this.isDrag=t.drag||!1,t.value!==void 0&&(isNaN(t.value)?t.value instanceof Array?(this.value=t.value,this.isSingle=!1):t.value instanceof Object&&(this.value=[],t.value.x!==void 0&&(this.value[0]=t.value.x),t.value.y!==void 0&&(this.value[1]=t.value.y),t.value.z!==void 0&&(this.value[2]=t.value.z),t.value.w!==void 0&&(this.value[3]=t.value.w),this.isSingle=!1,this.isVector=!0):this.value=[t.value]),this.lng=this.value.length,this.tmp=[],this.current=-1,this.prev={x:0,y:0,d:0,v:0};let e=this.colors;this.c[2]=this.dom("div",this.css.basic+" background:"+e.select+"; top:4px; width:0px; height:"+(this.h-8)+"px;"),this.cMode=[];let i=this.lng;for(;i--;)this.isAngle&&(this.value[i]=(this.value[i]*180/Math.PI).toFixed(this.precision)),this.c[3+i]=this.dom("div",this.css.txtselect+"top:1px; height:"+(this.h-2)+"px; color:"+e.text+"; background:"+e.back+"; borderColor:"+e.border+"; border-radius:"+this.radius+"px;"),t.center&&(this.c[2+i].style.textAlign="center"),this.c[3+i].textContent=this.value[i],this.c[3+i].style.color=this.colors.text,this.c[3+i].isNum=!0,this.cMode[i]=0;this.selectId=3+this.lng,this.c[this.selectId]=this.dom("div",this.css.txtselect+"position:absolute; top:2px; height:"+(this.h-4)+"px; padding:0px 0px; width:0px; color:"+e.textSelect+"; background:"+e.select+"; border:none; border-radius:0px;"),this.cursorId=4+this.lng,this.c[this.cursorId]=this.dom("div",this.css.basic+"top:2px; height:"+(this.h-4)+"px; width:0px; background:"+e.text+";"),this.init()}testZone(t){let e=this.local;if(e.x===-1&&e.y===-1)return"";let i=this.lng,n=this.tmp;for(;i--;)if(e.x>n[i][0]&&e.x<n[i][2])return i;return""}mousedown(t){let e=this.testZone(t);return this.isDown?!1:(this.isDown=!0,e!==""&&(this.current=e,this.prev={x:t.clientX,y:t.clientY,d:0,v:this.isSingle?parseFloat(this.value):parseFloat(this.value[this.current])},this.setInput(this.c[3+this.current])),this.mousemove(t))}mouseup(t){return this.isDown?(this.isDown=!1,this.prev={x:0,y:0,d:0,v:0},this.mousemove(t)):!1}mousemove(t){let e=!1,i=0;if(this.testZone(t)===""?this.cursor():this.isDrag?this.cursor(this.current!==-1?"move":"pointer"):this.cursor("text"),this.isDrag){if(this.current!==-1){this.prev.d+=t.clientX-this.prev.x-(t.clientY-this.prev.y);let r=this.prev.v+this.prev.d*this.step;this.value[this.current]=this.numValue(r),this.c[3+this.current].textContent=this.value[this.current],this.validate(),this.prev.x=t.clientX,this.prev.y=t.clientY,e=!0}}else return this.isDown&&(i=t.clientX-this.zone.x-3),this.current!==-1&&(i-=this.tmp[this.current][0]),this.upInput(i,this.isDown);return e}reset(){return!1}setValue(t){this.isVector?(t.x!==void 0&&(this.value[0]=t.x),t.y!==void 0&&(this.value[1]=t.y),t.z!==void 0&&(this.value[2]=t.z),t.w!==void 0&&(this.value[3]=t.w)):this.value=this.isSingle?[t]:t,this.update()}sameStr(t){let e=this.value.length;for(;e--;)this.c[3+e].textContent=t}update(t){let e=this.value.length;for(;e--;)this.value[e]=this.numValue(this.value[e]*this.invmulty),this.c[3+e].textContent=this.value[e];t&&this.send()}send(t){t=t||this.value,this.isSend=!0,this.objectLink!==null&&(this.isVector?this.objectLink[this.objectKey].fromArray(t):this.objectLink[this.objectKey]=t),this.callback&&this.callback(t,this.objectKey),this.isSend=!1}select(t,e,i,n){let r=this.s,a=this.current!==-1?this.tmp[this.current][0]+5:0;r[this.cursorId].width="1px",r[this.cursorId].left=a+t+"px",r[this.selectId].left=a+e+"px",r[this.selectId].width=i+"px",this.c[this.selectId].innerHTML=n}unselect(){let t=this.s;t&&(this.c[this.selectId].innerHTML="",t[this.selectId].width="0px",t[this.cursorId].width="0px")}validate(t){let e=[],i=this.lng;for(this.allway&&(t=!0);i--;){if(isNaN(this.c[3+i].textContent))this.c[3+i].textContent=this.value[i];else{let n=this.numValue(this.c[3+i].textContent);this.c[3+i].textContent=n,this.value[i]=n}e[i]=this.value[i]*this.multy}t&&this.send(this.isSingle?e[0]:e)}rSize(){super.rSize();let t=this.colors.sx,e=t*(this.lng-1),i=(this.sb-e)/this.lng,n=this.s,r=this.lng;for(;r--;)this.tmp[r]=[this.sa+i*r+t*r,i],this.tmp[r][2]=this.tmp[r][0]+this.tmp[r][1],n[3+r].left=this.tmp[r][0]+"px",n[3+r].width=this.tmp[r][1]+"px"}}class Y0 extends pe{constructor(t={}){super(t),this.setTypeNumber(t),this.model=t.stype||0,t.mode!==void 0&&(this.model=t.mode),this.isDown=!1,this.isOver=!1,this.allway=t.allway||!1,this.isDeg=t.isDeg||!1,this.isCyclic=t.cyclic||!1,this.firstImput=!1;let e=this.colors;if(this.c[2]=this.dom("div",this.css.txtselect+"border:none; background:none; width:47px; color:"+e.text+";"),this.c[3]=this.dom("div",this.css.basic+" top:0; height:"+this.h+"px;"),this.c[4]=this.dom("div",this.css.basic+"background:"+e.back+"; top:2px; height:"+(this.h-4)+"px;"),this.c[5]=this.dom("div",this.css.basic+"left:4px; top:5px; height:"+(this.h-10)+"px; background:"+e.text+";"),this.c[2].isNum=!0,this.c[2].style.height=this.h-2+"px",this.c[2].style.lineHeight=this.h-10+"px",this.model!==0){let i=4,n=4,r=8,a=this.h-6,o=16;this.model===2&&(i=0,n=2,r=4,o=2,a=(this.h-6)*.5),this.model===3&&(this.c[5].style.visible="none"),this.c[4].style.borderRadius=i+"px",this.c[4].style.height=r+"px",this.c[4].style.top=this.h*.5-n+"px",this.c[5].style.borderRadius=i*.5+"px",this.c[5].style.height=n+"px",this.c[5].style.top=this.h*.5-n*.5+"px",this.c[6]=this.dom("div",this.css.basic+"border-radius:"+o+"px; margin-left:"+-a*.5+"px; background:"+e.text+"; left:4px; top:3px; height:"+(this.h-6)+"px; width:"+a+"px;")}this.init()}testZone(t){let e=this.local;return e.x===-1&&e.y===-1?"":e.x>=this.txl?"text":e.x>=this.sa?"scroll":""}mouseup(t){this.isDown&&(this.isDown=!1)}mousedown(t){let e=this.testZone(t);return e?(e==="scroll"&&(this.isDown=!0,this.old=this.value,this.mousemove(t)),!0):!1}mousemove(t){let e=!1;if(this.testZone(t)==="scroll"?(this.mode(1),this.cursor("w-resize")):this.cursor(),this.isDown){let n=(t.clientX-(this.zone.x+this.sa)-3)/this.ww*this.range+this.min-this.old;(n>=this.step||n<=this.step)&&(n=Math.floor(n/this.step),this.value=this.numValue(this.old+n*this.step),this.update(!0),this.old=this.value),e=!0}return e}wheel(t){if(this.testZone(t)==="scroll"){let i=this.value-this.step*t.delta;return i>this.max?i=this.isCyclic?this.min:this.max:i<this.min&&(i=this.isCyclic?this.max:this.min),this.setValue(i),this.old=i,this.update(!0),!0}return!1}validate(){let t=this.c[2].textContent;isNaN(t)?this.c[2].textContent=this.value+(this.isDeg?"°":""):(this.value=this.numValue(t),this.update(!0))}reset(){this.isDown=!1,this.mode(0)}mode(t){let e=this.s,i=this.colors;switch(t){case 0:e[2].color=i.text,e[4].background=i.back,e[5].background=i.text,this.model!==0&&(e[6].background=i.text);break;case 1:e[2].color=i.textOver,e[4].background=i.back,e[5].background=i.textOver,this.model!==0&&(e[6].background=i.textOver);break}}update(t){let e=Math.floor(this.ww*((this.value-this.min)/this.range));this.model!==3&&(this.s[5].width=e+"px"),this.s[6]&&(this.s[6].left=this.sa+e+3+"px"),this.c[2].textContent=this.value+(this.isDeg?"°":""),t&&this.send()}rSize(){super.rSize();let t=this.sb-this.sc;this.ww=t-6;let e=this.sc;(this.isUI||!this.simple)&&(e=this.sc+10),this.txl=this.w-e+2;let i=this.s;i[2].width=this.sc-6+"px",i[2].left=this.txl+4+"px",i[3].left=this.sa+"px",i[3].width=t+"px",i[4].left=this.sa+"px",i[4].width=t+"px",i[5].left=this.sa+3+"px",this.update()}}class q0 extends pe{constructor(t={}){super(t),this.cmode=0,this.value=t.value!==void 0?t.value:"",this.placeHolder=t.placeHolder||"",this.allway=t.allway||!1,this.editable=t.edit!==void 0?t.edit:!0,this.isDown=!1;let e=this.colors;this.c[2]=this.dom("div",this.css.txtselect+"top:1px; height:"+(this.h-2)+"px; color:"+e.text+"; background:"+e.back+"; borderColor:"+e.border+"; border-radius:"+this.radius+"px;"),this.c[2].textContent=this.value,this.c[3]=this.dom("div",this.css.txtselect+"position:absolute; top:2px; height:"+(this.h-4)+"px; padding:0px 0px; width:0px; color:"+e.textSelect+"; background:"+e.select+"; border:none; border-radius:0px;"),this.c[4]=this.dom("div",this.css.basic+"top:2px; height:"+(this.h-4)+"px; width:0px; background:"+e.text+";"),this.c[5]=this.dom("div",this.css.txtselect+"top:1px; height:"+(this.h-2)+"px; border:none; justify-content: center; font-style: italic; color:"+e.border+";"),this.value===""&&(this.c[5].textContent=this.placeHolder),this.init()}testZone(t){let e=this.local;return e.x===-1&&e.y===-1?"":e.x>=this.sa?"text":""}mouseup(t){if(this.editable)return this.isDown?(this.isDown=!1,this.mousemove(t)):!1}mousedown(t){if(!this.editable)return;let e=this.testZone(t);return this.isDown?!1:(this.isDown=!0,e==="text"&&this.setInput(this.c[2]),this.mousemove(t))}mousemove(t){if(!this.editable)return;let e=this.testZone(t),i=0;return e==="text"?this.cursor("text"):this.cursor(),this.isDown&&(i=t.clientX-this.zone.x),this.upInput(i-this.sa-3,this.isDown)}update(){this.c[2].textContent=this.value}reset(){this.cursor()}select(t,e,i,n){let r=this.s,a=this.sa+5;r[4].width="1px",r[4].left=a+e+"px",r[3].left=a+e+"px",r[3].width=i+"px",this.c[3].innerHTML=n}unselect(){let t=this.s;t&&(t[3].width="0px",this.c[3].innerHTML="t",t[4].width="0px")}validate(t){this.allway&&(t=!0),this.value=this.c[2].textContent,this.value!==""?this.c[5].textContent="":this.c[5].textContent=this.placeHolder,t&&this.send()}rSize(){super.rSize();let t=this.s;t[2].left=this.sa+"px",t[2].width=this.sb+"px",t[5].left=this.sa+"px",t[5].width=this.sb+"px"}}class K0 extends pe{constructor(t={}){super(t);let e=t.prefix||"";this.c[2]=this.dom("div",this.css.txt+"justify-content:right; width:60px; line-height:"+(this.h-8)+"px; color:"+this.colors.text),this.h===31&&(this.s[0].height=this.h+"px",this.s[1].top="8px",this.c[2].style.top="8px");let i=this.s;i[1].justifyContent=t.align||"left",i[1].fontWeight=t.fontWeight||"bold",this.c[1].textContent=this.txt.substring(0,1).toUpperCase()+this.txt.substring(1).replace("-"," "),this.c[2].textContent=e,this.init()}text(t){this.c[1].textContent=t}text2(t){this.c[2].textContent=t}rSize(){super.rSize(),this.s[1].width=this.w+"px",this.s[2].left=this.w+"px"}setColor(t){this.s[1].color=t,this.s[2].color=t}}class Z0 extends pe{constructor(t={}){super(t),this.value=t.value||"",this.isDown=!1,this.onActif=t.onActif||function(){};const e=this.colors;this.c[2]=this.dom("div",this.css.txt+this.css.button+" top:1px; background:"+e.button+"; height:"+(this.h-2)+"px; border:"+e.buttonBorder+"; border-radius:15px; width:30px; left:10px;"),this.c[3]=this.dom("div",this.css.txtselect+"height:"+(this.h-4)+"px; background:"+e.inputBg+"; borderColor:"+e.inputBorder+"; border-radius:"+this.radius+"px;"),this.c[3].textContent=this.value;let i=Math.floor(this.h*.5)-7;this.c[4]=this.dom("path",this.css.basic+"position:absolute; width:14px; height:14px; left:5px; top:"+i+"px;",{d:this.svgs.cursor,fill:e.text,stroke:"none"}),this.stat=1,this.isActif=!1,this.init()}testZone(t){let e=this.local;return e.x===-1&&e.y===-1?"":e.x>this.sa&&e.x<this.sa+30?"over":"0"}mouseup(t){return this.isDown?(this.isDown=!1,this.mousemove(t)):!1}mousedown(t){return this.testZone(t)?(this.isDown=!0,this.mousemove(t)):!1}mousemove(t){let e=!1;return this.testZone(t)==="over"?(this.cursor("pointer"),e=this.mode(this.isDown?3:2)):e=this.reset(),e}apply(t){t=t||"",t!==this.value&&(this.value=t,this.c[3].textContent=this.value,this.send()),this.mode(1)}update(){this.mode(3)}mode(t){let e=!1,i=this.colors;if(this.stat!==t){switch(t===1&&(this.isActif=!1),t===3&&(this.isActif?this.isActif=!1:(this.isActif=!0,t=4,this.onActif(this))),t===2&&this.isActif&&(t=4),this.stat=t,t){case 1:this.s[2].color=i.text,this.s[2].background=i.button;break;case 2:this.s[2].color=i.textOver,this.s[2].background=i.overoff;break;case 3:this.s[2].color=i.textOver,this.s[2].background=i.action;break;case 4:this.s[2].color=i.textSelect,this.s[2].background=i.action;break}e=!0}return e}reset(){return this.cursor(),this.mode(this.isActif?4:1)}text(t){this.c[3].textContent=t}rSize(){super.rSize();let t=this.s;t[2].left=this.sa+"px",t[3].left=this.sa+40+"px",t[3].width=this.sb-40+"px",t[4].left=this.sa+8+"px"}}class $0 extends pe{constructor(t={}){super(t),this.value=t.value||"",this.refTexture=t.texture||null,this.img=null,this.isDown=!1,this.neverlock=!0;const e=this.colors;this.c[2]=this.dom("div",this.css.txt+this.css.button+" top:1px; background:"+e.button+"; height:"+(this.h-2)+"px; border:"+e.buttonBorder+"; border-radius:15px; width:30px; left:10px;"),this.c[3]=this.dom("div",this.css.txtselect+"height:"+(this.h-4)+"px; background:"+e.inputBg+"; borderColor:"+e.inputBorder+"; border-radius:"+this.radius+"px;"),this.c[3].textContent=this.value;let i=Math.floor(this.h*.5)-7;this.c[4]=this.dom("path",this.css.basic+"position:absolute; width:14px; height:14px; left:5px; top:"+i+"px;",{d:this.svgs.load,fill:e.text,stroke:"none"}),this.stat=1,this.init()}testZone(t){let e=this.local;return e.x===-1&&e.y===-1?"":e.x>this.sa&&e.x<this.sa+30?"over":"0"}mouseup(t){return this.isDown?(this.isDown=!1,this.mousemove(t)):!1}mousedown(t){let e=this.testZone(t);return e?(e==="over"&&(this.isDown=!0,Cn.load({callback:this.changeBitmap.bind(this)})),this.mousemove(t)):!1}mousemove(t){let e=!1;return this.testZone(t)==="over"?(this.cursor("pointer"),e=this.mode(this.isDown?3:2)):e=this.reset(),e}changeBitmap(t,e){t?(this.img=t,this.apply(e)):(this.img=null,this.apply("null"))}apply(t){t=t||"",t!==this.value&&(this.value=t,this.c[3].textContent=this.value,this.img!==null&&(this.objectLink!==null&&(this.objectLink[this.val]=t),this.callback&&this.callback(this.value,this.img,this.name))),this.mode(1)}update(){this.mode(3)}mode(t){let e=!1,i=this.colors;if(this.stat!==t){switch(this.stat=t,t){case 1:this.s[2].color=i.text,this.s[2].background=i.button;break;case 2:this.s[2].color=i.textOver,this.s[2].background=i.overoff;break;case 3:this.s[2].color=i.textOver,this.s[2].background=i.over;break;case 4:this.s[2].color=i.textSelect,this.s[2].background=i.select;break}e=!0}return e}reset(){return this.cursor(),this.mode(this.isActif?4:1)}text(t){this.c[3].textContent=t}rSize(){super.rSize();let t=this.s;t[2].left=this.sa+"px",t[3].left=this.sa+40+"px",t[3].width=this.sb-40+"px",t[4].left=this.sa+8+"px"}}class Q0 extends wh{constructor(t={}){t.selectable===void 0&&(t.selectable=!0),super(t)}}class J0 extends pe{constructor(t={}){super(t),this.p=100,this.value=this.txt,this.status=1,this.itype=t.itype||"none",this.val=this.itype,this.graph=this.svgs[this.itype];let e=Math.floor(this.h*.5)-7;this.c[2]=this.dom("path",this.css.basic+"position:absolute; width:14px; height:14px; left:5px; top:"+e+"px;",{d:this.graph,fill:this.colors.text,stroke:"none"}),this.s[1].marginLeft="20px",this.init()}mousemove(t){this.cursor("pointer")}mousedown(t){return this.isUI&&this.main.resetItem(),this.selected(!0),this.send(),!0}uiout(){this.isSelect?this.mode(3):this.mode(1)}uiover(){this.isSelect?this.mode(4):this.mode(2)}update(){}mode(t){let e=!1;if(this.status!==t){this.status=t;let i=this.s,n=this.colors;switch(t){case 1:this.status=1,i[1].color=n.text,i[0].background="none";break;case 2:this.status=2,i[1].color=n.textOver,i[0].background=n.back;break;case 3:this.status=3,i[1].color=n.textSelect,i[0].background=n.select;break;case 4:this.status=4,i[1].color=n.textOver,i[0].background=n.over;break}e=!0}return e}reset(){this.cursor()}selected(t){this.isSelect&&this.mode(1),this.isSelect=t||!1,this.isSelect&&this.mode(3)}}class t_ extends pe{constructor(t={}){if(super(t),this.values=[],t.values){if(t.values instanceof Array)this.values=t.values;else if(t.values instanceof String)this.values=[t.values];else if(t.values instanceof Object){this.refObject=t.values;for(let l in this.refObject)this.values.push(l)}}this.lng=this.values.length,this.value=t.value||null;let e=this.colors;this.isSelectable=t.selectable||!1,this.spaces=t.spaces||[e.sx,e.sy],this.bsize=t.bsize||[90,this.h],this.bsizeMax=this.bsize[0],this.tmp=[],this.stat=[],this.grid=[2,Math.round(this.lng*.5)],this.h=this.grid[1]*this.bsize[1]+this.grid[1]*this.spaces[1],this.c[1].textContent="",this.c[2]=this.dom("table",this.css.basic+"width:100%; border-spacing: "+(this.spaces[0]-2)+"px "+this.spaces[1]+"px; border:none;");let i=0,n,r,a,o;this.res=-1,this.isDown=!1,this.neverlock=!0,this.buttons=[],this.stat=[],this.tmpX=[],this.tmpY=[];for(let l=0;l<this.grid[1];l++){a=this.c[2].insertRow(),a.style.cssText="pointer-events:none;";for(let h=0;h<this.grid[0];h++)r=a.insertCell(),r.style.cssText="pointer-events:none;",this.values[i]?(o=!1,this.values[i]===this.value&&this.isSelectable&&(o=!0),n=document.createElement("div"),n.style.cssText=this.css.txt+this.css.button+"position:static; top:1px; width:"+this.bsize[0]+"px; height:"+(this.bsize[1]-2)+"px; border:"+e.borderSize+"px solid "+e.border+"; left:auto; right:auto; border-radius:"+this.radius+"px;",n.style.background=o?e.select:e.button,n.style.color=o?e.textSelect:e.text,n.innerHTML=this.values[i],r.appendChild(n),this.buttons.push(n),this.stat.push(1)):(n=document.createElement("div"),n.style.cssText=this.css.txt+"position:static; width:"+this.bsize[0]+"px; height:"+this.bsize[1]+"px; text-align:center; left:auto; right:auto; background:none;",r.appendChild(n)),h===0?n.style.cssText+="float:right;":n.style.cssText+="float:left;",i++}this.s[0].border="none",this.init()}testZone(t){let e=this.local;if(e.x===-1&&e.y===-1)return-1;e.y+=this.mtop;let i=this.tmpX,n=this.tmpY,r=-1,a=-1,o=-1,l=this.grid[0];for(;l--;)e.x>i[l][0]&&e.x<i[l][1]&&(a=l);for(l=this.grid[1];l--;)e.y>n[l][0]&&e.y<n[l][1]&&(o=l);return a!==-1&&o!==-1&&(r=a+o*2,r>this.lng-1&&(r=-1)),r}mouseup(t){return this.isDown?(this.isDown=!1,this.res!==-1&&(this.value=this.values[this.res],this.send()),this.mousemove(t)):!1}mousedown(t){return this.isDown?!1:(this.isDown=!0,this.mousemove(t))}mousemove(t){let e=!1;return this.res=this.testZone(t),this.res!==-1?(this.cursor("pointer"),e=this.modes(this.isDown?3:2,this.res)):e=this.reset(),e}modes(t=1,e=-1){let i=this.lng,n,r,a=!1;for(;i--;)r=t,n=this.isSelectable?this.values[i]===this.value:!1,i===e?n&&r===2&&(r=3):(r=1,n&&(r=4)),this.mode(r,i)&&(a=!0);return a}mode(t,e){let i=!1,n=this.colors,r=this.buttons,a=e;if(this.stat[e]!==t){switch(this.stat[e]=t,t){case 1:r[a].style.color=n.text,r[a].style.background=n.button;break;case 2:r[a].style.color=n.textOver,r[a].style.background=n.overoff;break;case 3:r[a].style.color=n.textOver,r[a].style.background=n.over;break;case 4:r[a].style.color=n.textSelect,r[a].style.background=n.select;break}i=!0}return i}reset(){return this.res=-1,this.cursor(),this.modes()}label(t,e){this.buttons[e].textContent=t}icon(t,e,i){this.buttons[i].style.padding=(e||0)+"px 0px",this.buttons[i].innerHTML=t}testW(){let t=this.spaces[0]*3+this.bsizeMax*2,e=!1;if(t>this.w?(this.bsize[0]=(this.w-this.spaces[0]*3)*.5,e=!0):this.bsize[0]!==this.bsizeMax&&(this.bsize[0]=this.bsizeMax,e=!0),!e)return;let i=this.buttons.length;for(;i--;)this.buttons[i].style.width=this.bsize[0]+"px"}rSize(){super.rSize(),this.testW();let t;this.tmpX=[],this.tmpY=[];for(let e=0;e<this.grid[0];e++)e===0?(t=this.w*.5-this.spaces[0]*.5,this.tmpX.push([t-this.bsize[0],t])):(t=this.w*.5+this.spaces[0]*.5,this.tmpX.push([t,t+this.bsize[0]]));t=this.spaces[1];for(let e=0;e<this.grid[1];e++)this.tmpY.push([t,t+this.bsize[1]]),t+=this.bsize[1]+this.spaces[1]}}class e_ extends pe{constructor(t={}){super(t),this.autoWidth=!1,this.minw=this.w,this.diam=t.diam||this.w,this.pos=new ei(0,0),this.maxPos=90,this.model=t.stype||0,t.mode!==void 0&&(this.model=t.mode),this.min=t.min===void 0?-1:t.min,this.max=t.max===void 0?1:t.max,this.range=(this.max-this.min)*.5,this.cmode=0,this.c[0].style.display="block",this.precision=t.precision===void 0?2:t.precision,this.value=Array.isArray(t.value)&&t.value.length==2?t.value:[0,0],this.h=t.h||this.w+10,this.c[0].style.width=this.w+"px",this.c[1]!==void 0&&(this.c[1].style.width="100%",this.c[1].style.justifyContent="center",this.top=10,this.h+=10);let e=this.colors;this.c[2]=this.dom("div",this.css.txt+"justify-content:center; top:"+(this.h-20)+"px; width:100%; color:"+e.text),this.c[2].textContent=this.value;let i=this.getPad2d();this.setSvg(i,"fill",e.back,0),this.setSvg(i,"fill",e.button,1),this.setSvg(i,"stroke",e.back,2),this.setSvg(i,"stroke",e.back,3),this.setSvg(i,"stroke",e.text,4),this.setSvg(i,"viewBox","0 0 "+this.diam+" "+this.diam),this.setCss(i,{width:this.diam,height:this.diam,left:0,top:this.top}),this.c[3]=i,this.init(),this.setValue()}testZone(t){let e=this.local;return e.x===-1&&e.y===-1?"":e.y<=this.c[1].offsetHeight?"title":e.y>this.h-this.c[2].offsetHeight?"text":"pad"}mouseup(t){return this.isDown=!1,this.mode(0)}mousedown(t){if(this.testZone(t)==="pad")return this.isDown=!0,this.mousemove(t),this.mode(1)}mousemove(t){if(!this.isDown)return;let e=this.w*.5-(t.clientX-this.zone.x),i=this.diam*.5-(t.clientY-this.zone.y-this.ytop),n=256/this.diam;e=-(e*n),i=-(i*n),e=Z.clamp(e,-this.maxPos,this.maxPos),i=Z.clamp(i,-this.maxPos,this.maxPos),this.setPos([e,i]),this.update(!0)}mode(t){if(this.cmode===t)return!1;let e=this.colors;switch(t){case 0:this.s[2].color=e.text,this.setSvg(this.c[3],"fill",e.back,0),this.setSvg(this.c[3],"fill",e.button,1),this.setSvg(this.c[3],"stroke",e.back,2),this.setSvg(this.c[3],"stroke",e.back,3),this.setSvg(this.c[3],"stroke",e.text,4);break;case 1:this.s[2].color=e.textSelect,this.setSvg(this.c[3],"fill",e.backoff,0),this.setSvg(this.c[3],"fill",e.overoff,1),this.setSvg(this.c[3],"stroke",e.backoff,2),this.setSvg(this.c[3],"stroke",e.backoff,3),this.setSvg(this.c[3],"stroke",e.textSelect,4);break}return this.cmode=t,!0}update(t){this.c[2].textContent=this.value,this.updateSVG(),t&&this.send()}updateSVG(){this.model==1&&(this.setSvg(this.c[3],"y1",this.pos.y,2),this.setSvg(this.c[3],"y2",this.pos.y,2),this.setSvg(this.c[3],"x1",this.pos.x,3),this.setSvg(this.c[3],"x2",this.pos.x,3)),this.setSvg(this.c[3],"cx",this.pos.x,4),this.setSvg(this.c[3],"cy",this.pos.y,4)}setPos(t){this.pos.set(t[0]+128,t[1]+128);let e=1/this.maxPos;this.value[0]=(t[0]*e*this.range).toFixed(this.precision),this.value[1]=(t[1]*e*this.range).toFixed(this.precision)}setValue(t,e=!1){t===void 0&&(t=this.value),this.value[0]=Math.min(this.max,Math.max(this.min,t[0])).toFixed(this.precision)*1,this.value[1]=Math.min(this.max,Math.max(this.min,t[1])).toFixed(this.precision)*1,this.pos.set(this.value[0]/this.range*this.maxPos+128,this.value[1]/this.range*this.maxPos+128),this.update(e)}}const Rh=function(){let s=arguments,t,e,i=!1,n=null;typeof s[0]=="string"?(t=s[0],e=s[1]||{}):typeof s[0]=="object"&&(i=!0,s[2]===void 0&&[].push.call(s,{}),t=s[2].type?s[2].type:i_(s[0][s[1]],s[2]),e=s[2],e.name=s[1],e.hasOwnProperty("displayName")&&(e.name=e.displayName),t==="list"&&!e.list?e.list=s[0][s[1]]:e.value=s[0][s[1]]);let r=t.toLowerCase();switch(r==="group"&&(e.add=Rh),r){case"bool":case"boolean":n=new F0(e);break;case"button":n=new wh(e);break;case"circular":n=new k0(e);break;case"color":n=new B0(e);break;case"fps":n=new z0(e);break;case"graph":n=new H0(e);break;case"group":n=new G0(e);break;case"joystick":n=new V0(e);break;case"knob":n=new W0(e);break;case"list":n=new X0(e);break;case"numeric":case"number":n=new j0(e);break;case"slide":n=new Y0(e);break;case"textInput":case"string":n=new q0(e);break;case"title":case"text":n=new K0(e);break;case"select":n=new Z0(e);break;case"bitmap":n=new $0(e);break;case"selector":n=new Q0(e);break;case"empty":case"space":n=new Ah(e);break;case"item":n=new J0(e);break;case"grid":n=new t_(e);break;case"pad2d":case"pad":n=new e_(e);break}if(n!==null)return Ut.needResize=!0,i&&n.setReferency(s[0],s[1]),n},i_=function(s,t){let e="slide";return typeof s=="boolean"?e="bool":typeof s=="string"?s.substring(0,1)==="#"?e="color":e="string":typeof s=="number"?t.ctype?e="color":e="slide":typeof s=="array"&&s instanceof Array?typeof s[0]=="number"?e="number":typeof s[0]=="string"&&(e="list"):typeof s=="object"&&s instanceof Object&&(s.x!==void 0?e="number":e="list"),e};class n_{constructor(t={}){this.isGui=!0,this.name="gui",this.canvas=null,this.screen=null,this.plane=t.plane||null,t.config&&(t.colors=t.config),t.colors?this.setConfig(t.colors):this.colors=Z.defineColor(t),this.css=Z.cloneCss(),this.isReset=!0,this.tmpAdd=null,this.isCanvas=t.isCanvas||!1,this.isCanvasOnly=!1,Ut.addDOMEventListeners=t.hasOwnProperty("addDOMEventListeners")?t.addDOMEventListeners:!0,this.callback=t.callback===void 0?null:t.callback,this.forceHeight=t.maxHeight||0,this.lockHeight=t.lockHeight||!1,this.isItemMode=t.itemMode!==void 0?t.itemMode:!1,this.cn="",this.size=Z.size,t.p!==void 0&&(this.size.p=t.p),t.w!==void 0&&(this.size.w=t.w),t.h!==void 0&&(this.size.h=t.h),t.s!==void 0&&(this.size.s=t.s),this.size.h=this.size.h<11?11:this.size.h,this.local=new ei().neg(),this.zone={x:0,y:0,w:this.size.w,h:0},this.mouse=new ei().neg(),this.h=0,this.sw=0,this.margin=this.colors.sy,this.marginDiv=Z.isDivid(this.margin),this.isWithClose=t.close!==void 0?t.close:!0,this.bh=this.isWithClose?this.size.h:0,this.autoResize=t.autoResize===void 0?!0:t.autoResize,this.isCenter=t.center||!1,this.cssGui=t.css!==void 0?t.css:this.isCenter?"":"right:10px;",this.isOpen=t.open!==void 0?t.open:!0,this.isDown=!1,this.isScroll=!1,this.uis=[],this.current=-1,this.proto=null,this.isEmpty=!0,this.decal=0,this.ratio=1,this.oy=0,this.isNewTarget=!1;let e=this.colors;this.content=Z.dom("div",this.css.basic+" width:0px; height:auto; top:0px; background:"+e.content+"; "+this.cssGui),this.innerContent=Z.dom("div",this.css.basic+"width:100%; top:0; left:0; height:auto; overflow:hidden;"),this.content.appendChild(this.innerContent),this.useFlex=!0;let i=this.useFlex?"display:flex; flex-flow: row wrap;":"";this.inner=Z.dom("div",this.css.basic+i+"width:100%; left:0; "),this.innerContent.appendChild(this.inner),this.scrollBG=Z.dom("div",this.css.basic+"right:0; top:0; width:"+(this.size.s-1)+"px; height:10px; display:none; background:"+e.background+";"),this.content.appendChild(this.scrollBG),this.scroll=Z.dom("div",this.css.basic+"background:"+e.button+"; right:2px; top:0; width:"+(this.size.s-4)+"px; height:10px;"),this.scrollBG.appendChild(this.scroll),this.bottomText=t.bottomText||["open","close"];let n=e.radius;this.bottom=Z.dom("div",this.css.txt+"width:100%; top:auto; bottom:0; left:0; border-bottom-right-radius:"+n+"px; border-bottom-left-radius:"+n+"px; justify-content:center; height:"+this.bh+"px; line-height:"+(this.bh-5)+"px; color:"+e.text+";"),this.content.appendChild(this.bottom),this.bottom.textContent=this.isOpen?this.bottomText[1]:this.bottomText[0],this.bottom.style.background=e.background,this.parent=t.parent!==void 0?t.parent:null,this.parent=t.target!==void 0?t.target:this.parent,this.parent===null&&!this.isCanvas&&(this.parent=document.body),this.parent!==null&&this.parent.appendChild(this.content),this.isCanvas&&this.parent===null&&(this.isCanvasOnly=!0),this.isCanvasOnly?(this.content.style.left="0px",this.content.style.right="auto",t.transition=0):this.content.style.pointerEvents="auto",this.transition=t.transition!==void 0?t.transition:Z.transition,this.transition&&setTimeout(this.addTransition.bind(this),1e3),this.setWidth(),this.isCanvas&&this.makeCanvas(),Ut.add(this)}triggerMouseDown(t,e){Ut.handleEvent({type:"pointerdown",clientX:t,clientY:e,delta:0,key:null,keyCode:NaN})}triggerMouseMove(){Ut.handleEvent({type:"pointermove",clientX:-1,clientY:-1,delta:0,key:null,keyCode:NaN})}triggerMouseUp(t,e){Ut.handleEvent({type:"pointerup",clientX:t,clientY:e,delta:0,key:null,keyCode:NaN})}setTop(t,e){this.content.style.top=t+"px",e!==void 0&&(this.forceHeight=e),this.calc(),Ut.needReZone=!0}addTransition(){this.transition&&!this.isCanvas&&(this.innerContent.style.transition="height "+this.transition+"s ease-out",this.content.style.transition="height "+this.transition+"s ease-out",this.bottom.style.transition="top "+this.transition+"s ease-out");let t=this.uis.length;for(;t--;)this.uis[t].addTransition()}onDraw(){}makeCanvas(){this.canvas=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),this.canvas.width=this.zone.w,this.canvas.height=this.forceHeight?this.forceHeight:this.zone.h}draw(t){if(this.canvas===null)return;let e=this.zone.w,i=this.forceHeight?this.forceHeight:this.zone.h;Ut.toCanvas(this,e,i,t)}getDom(){return this.content}noMouse(){this.mouse.neg()}setMouse(t,e=!0){e?this.mouse.set(Math.round(t.x*this.canvas.width),this.canvas.height-Math.round(t.y*this.canvas.height)):this.mouse.set(Math.round(t.x*this.canvas.width),Math.round(t.y*this.canvas.height))}setConfig(t){Z.setText(),this.colors=Z.defineColor(t)}setColors(t){for(let e in t)this.colors[e]&&(this.colors[e]=t[e])}setText(t,e,i,n){Z.setText(t,e,i,n)}hide(t){this.content.style.visibility=t?"hidden":"visible"}display(t=!1){this.content.style.visibility=t?"visible":"hidden"}onChange(t){return this.callback=t||null,this}mode(t){let e=!1,i=this.colors;if(t!==this.cn){switch(this.cn=t,t){case"def":Ut.cursor(),this.scroll.style.background=i.button,this.bottom.style.background=i.background,this.bottom.style.color=i.text;break;case"scrollOver":Ut.cursor("ns-resize"),this.scroll.style.background=i.select;break;case"scrollDown":this.scroll.style.background=i.select;break;case"bottomOver":Ut.cursor("pointer"),this.bottom.style.background=i.backgroundOver,this.bottom.style.color=i.textOver;break}e=!0}return e}clearTarget(){return this.current===-1?!1:(this.proto.s&&(this.proto.uiout(),this.proto.reset()),this.proto=null,this.current=-1,Ut.cursor(),!0)}testZone(t){let e=this.local;if(e.x===-1&&e.y===-1)return"";this.isReset=!1;let i="",n=this.isScroll?this.zone.w-this.size.s:this.zone.w;return e.y>this.zone.h-this.bh&&e.y<this.zone.h?i="bottom":i=e.x>n?"scroll":"content",i}handleEvent(t){let e=t.type,i=!1,n=!1,r=this.testZone(t);if(e==="mouseup"&&this.isDown&&(this.isDown=!1),e==="mousedown"&&!this.isDown&&(this.isDown=!0),this.isDown&&this.isNewTarget&&(Ut.clearInput(),this.isNewTarget=!1),!!r){switch(r){case"content":t.clientY=this.isScroll?t.clientY+this.decal:t.clientY,Ut.isMobile&&e==="mousedown"&&this.getNext(t,i),this.proto&&(n=this.proto.handleEvent(t)),e==="mousemove"&&(i=this.mode("def")),e==="wheel"&&!n&&this.isScroll&&(i=this.onWheel(t)),Ut.lock||this.getNext(t,i);break;case"bottom":this.clearTarget(),e==="mousemove"&&(i=this.mode("bottomOver")),e==="mousedown"&&(this.isOpen=!this.isOpen,this.bottom.textContent=this.isOpen?this.bottomText[1]:this.bottomText[0],this.calc(),this.mode("def"),i=!0);break;case"scroll":this.clearTarget(),e==="mousemove"&&(i=this.mode("scrollOver")),e==="mousedown"&&(i=this.mode("scrollDown")),e==="wheel"&&(i=this.onWheel(t)),this.isDown&&this.update(t.clientY-this.zone.y-this.sh*.5);break}this.isDown&&(i=!0),n&&(i=!0),e==="keyup"&&(i=!0),e==="keydown"&&(i=!0),i&&this.draw()}}getNext(t,e){let i=Ut.findTarget(this.uis,t);i!==this.current&&(this.clearTarget(),this.current=i,this.isNewTarget=!0),i!==-1&&(this.proto=this.uis[this.current],this.proto.uiover())}onWheel(t){return this.oy+=20*t.delta,this.update(this.oy),!0}reset(t){if(this.isReset)return;this.mouse.neg(),this.isDown=!1;let e=this.mode("def"),i=this.clearTarget();(e||i)&&this.draw(!0),this.isReset=!0}add(){let t=arguments,e=!1;typeof t[1]=="object"?(t[1].isUI=!0,t[1].main=this,e=t[1].ontop?t[1].ontop:!1):typeof t[1]=="string"&&(t[2]===void 0?[].push.call(t,{isUI:!0,main:this}):(t[2].isUI=!0,t[2].main=this,e=t[2].ontop?t[2].ontop:!1));let i=Rh.apply(this,t);if(i!==null)return e?this.uis.unshift(i):this.uis.push(i),this.calc(),this.isEmpty=!1,i}remove(t){t.dispose&&t.dispose()}clearOne(t){let e=this.uis.indexOf(t);e!==-1&&(this.inner.removeChild(this.uis[e].c[0]),this.uis.splice(e,1),this.calc())}empty(){let t=this.uis.length,e;for(;t--;)e=this.uis.pop(),this.inner.removeChild(e.c[0]),e.dispose();this.uis=[],this.isEmpty=!0,this.calc()}clear(){this.empty()}clear2(){setTimeout(this.empty.bind(this),0)}dispose(){this.clear(),this.parent!==null&&this.parent.removeChild(this.content),Ut.remove(this)}resetItem(){if(!this.isItemMode)return;let t=this.uis.length;for(;t--;)this.uis[t].selected()}setItem(t){if(!this.isItemMode)return;if(t=t||"",this.resetItem(),!t){this.update(0);return}let e=this.uis.length;for(;e--;)this.uis[e].value===t&&(this.uis[e].selected(!0),this.isScroll&&this.update(e*(this.uis[e].h+this.margin)*this.ratio))}upScroll(t){this.sw=t?this.size.s:0,this.oy=t?this.oy:0,this.scrollBG.style.display=t?"block":"none",t&&(this.total=this.h,this.maxView=this.maxHeight,this.ratio=this.maxView/this.total,this.sh=this.maxView*this.ratio,this.range=this.maxView-this.sh,this.oy=Z.clamp(this.oy,0,this.range),this.scrollBG.style.height=this.maxView+"px",this.scroll.style.height=this.sh+"px"),this.setItemWidth(this.zone.w-this.sw),this.update(this.oy)}update(t){t=Z.clamp(t,0,this.range),this.decal=Math.floor(t/this.ratio),this.inner.style.top=-this.decal+"px",this.scroll.style.top=Math.floor(t)+"px",this.oy=t}calcUis(){return Ut.calcUis(this.uis,this.zone,this.zone.y)}calc(){clearTimeout(this.tmp),this.tmp=setTimeout(this.setHeight.bind(this),10)}setHeight(){if(this.tmp&&clearTimeout(this.tmp),this.zone.h=this.bh,this.isScroll=!1,this.isOpen){this.h=this.calcUis();let t=this.forceHeight?this.forceHeight+this.zone.y:window.innerHeight;this.maxHeight=t-this.zone.y-this.bh,this.h-this.maxHeight>1?(this.isScroll=!0,this.zone.h=this.maxHeight+this.bh):this.zone.h=this.h+this.bh}this.upScroll(this.isScroll),this.innerContent.style.height=this.zone.h-this.bh+"px",this.content.style.height=this.zone.h+"px",this.bottom.style.top=this.zone.h-this.bh+"px",this.forceHeight&&this.lockHeight&&(this.content.style.height=this.forceHeight+"px"),this.isCanvas&&this.draw(!0)}rezone(){Ut.needReZone=!0}setWidth(t){t&&(this.zone.w=t),this.zone.w=Math.floor(this.zone.w),this.content.style.width=this.zone.w+"px",this.isCenter&&(this.content.style.marginLeft=-Math.floor(this.zone.w*.5)+"px"),this.setItemWidth(this.zone.w-this.sw)}setItemWidth(t){let e=this.uis.length;for(;e--;)this.uis[e].setSize(t),this.uis[e].rSize()}}const Ch={ON_INIT_COMPLETE:"ON_INIT_COMPLETE"};class s_ extends Eh{constructor(){super();be(this,"csvFile","data/series.csv");be(this,"series");be(this,"sceneManager");be(this,"display");be(this,"_currentSerie",0);be(this,"currentFrame",0);be(this,"isPlaying",!1);be(this,"timer");be(this,"_currentFPS",1);be(this,"seriesNames",["Original + HAT","Original + HAT + ODT max","Original"])}async init(e,i){this.sceneManager=e,this.display=i;const o=(await(await fetch(this.csvFile)).text()).trim().split(`
`).map(l=>{const[h,c,u,d]=l.split(";");return[h,parseFloat(c.replace(",",".")),parseFloat(u.replace(",",".")),parseFloat(d.replace(",","."))]});console.log("AnimationManager initialized"),this.series=o,this.dispatchEvent({type:Ch.ON_INIT_COMPLETE,data:o})}set currentSerie(e){console.log("Current Serie:",e),this._currentSerie=Math.max(0,Math.min(e,2)),this.gotoFrame(this.currentFrame)}get currentSerie(){return this._currentSerie}gotoFrame(e){this.currentFrame=e,this.sceneManager.waterLevel=this.series[this.currentFrame][1+this._currentSerie],this.display.setText("Serie:"+this.seriesNames[this._currentSerie]+" - Time:"+this.series[this.currentFrame][0])}gotoPreviousFrame(){this.currentFrame>0&&(this.currentFrame--,this.gotoFrame(this.currentFrame))}gotoNextFrame(e){this.currentFrame<this.series.length-1?(this.currentFrame++,this.gotoFrame(this.currentFrame)):e&&this.gotoFirstFrame()}gotoFirstFrame(){this.currentFrame=0,this.gotoFrame(this.currentFrame)}gotoLastFrame(){this.currentFrame=this.series.length-1,this.gotoFrame(this.currentFrame)}playAnimation(){console.log("playAnimation"),clearInterval(this.timer),this.timer=setInterval(()=>{this.gotoNextFrame(!0)},1e3/this._currentFPS),this.isPlaying=!0}pauseAnimation(){clearInterval(this.timer),this.isPlaying=!1}togglePlay(){this.isPlaying?this.pauseAnimation():this.playAnimation()}set frame(e){this.gotoFrame(e)}get frame(){return this.currentFrame}set fps(e){this._currentFPS=parseInt(e),this.isPlaying&&this.playAnimation()}get fps(){return this._currentFPS}getTotalFrames(){return this.series.length-1}}class r_{constructor(){be(this,"div");this.div=document.createElement("div"),this.div.id="display",this.div.innerHTML=`
      <div id="footer">
        <p></p>
      </div>
      `,document.body.appendChild(this.div)}setText(t){this.div.querySelector("p").innerHTML=t}}let Aa,Ji,Ln,Pn,nn,qr,Il,Ce,Kr={fpsItem:3};function a_(){Pn=document.getElementById("container3D"),Ln=new dh({logarithmicDepthBuffer:!0}),Ln.setClearColor(new Mt("#999999")),Aa=new ug,Pn.appendChild(Ln.domElement),Ji=new Ne(35,window.innerWidth/window.innerHeight,.1,1e4),Ji.position.set(1800,1e3,0),Ji.lookAt(0,0,0),new Jg(Ji,Ln.domElement),window.addEventListener("resize",Dl),Dl()}function Dl(){Ji.aspect=Pn.offsetWidth/Pn.offsetHeight,Ji.updateProjectionMatrix(),Ln.setSize(Pn.offsetWidth,Pn.offsetHeight)}function Lh(){requestAnimationFrame(Lh),nn.animate(),Ln.render(Aa,Ji)}function o_(){Il=new r_,Ce=new s_,Ce.addEventListener(Ch.ON_INIT_COMPLETE,()=>{h_()}),nn=new O0(Aa),nn.addEventListener(Th.ON_SCENE_LOADED,()=>{Ce.init(nn,Il)})}function l_(){const s=document.getElementById("dummy");qr=new n_({w:128*4,addDOMEventListeners:!0,parent:s});let t=qr.add("group",{name:"Terreno",bg:"#446666"});t.open(),t.add(nn,"verticalScale",{type:"slide",displayName:"escala vertical",min:1,max:10,step:1,value:2});let e=qr.add("group",{name:"Agua",bg:"#664466"});e.open(),e.add(nn,"waterLevel",{type:"slide",displayName:"nivel del agua",min:-40,max:20,step:.01,value:2}),e.add(Ce,"currentSerie",{type:"list",displayName:"Serie",list:["Original+HAT","Original+HAT+ODT","Original"]}).onChange(n=>{switch(n){case"Original+HAT":Ce.currentSerie=0;break;case"Original+HAT+ODT":Ce.currentSerie=1;break;case"Original":Ce.currentSerie=2;break}}),e.add(Ce,"frame",{type:"slide",displayName:"frame",min:0,max:Ce.getTotalFrames(),step:1,value:0}).listen(),e.add("button",{name:"control",value:["|<","<","play/pause",">",">|"],callback:n=>{switch(n){case"|<":Ce.gotoFirstFrame();break;case"<":Ce.gotoPreviousFrame();break;case"play/pause":Ce.togglePlay();break;case">":Ce.gotoNextFrame();break;case">|":Ce.gotoLastFrame();break}}});const i=["1","2","5","10","20","30"];Kr.fpsItem=3,Ce.fps=i[Kr.fpsItem],e.add(Kr,"fpsItem",{type:"list",displayName:"Cuadros/segundo",list:i}).onChange(n=>{Ce.fps=parseInt(n)}),e.add(nn,"aguaVisible",{type:"boolean",displayName:"Mostrar agua"})}function h_(){l_(),Lh()}a_();o_();
