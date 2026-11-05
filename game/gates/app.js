var XH="187";var GH=0,FZ=1,NH=2;var y7=1,EH=2,J7=3,Q7=0,f9=1,F9=2,R8=0,f7=1,BJ=2,DZ=3,OZ=4,qH=5;var Z7=100,FH=101,DH=102,OH=103,RH=104,MH=200,LH=201,VH=202,kH=203,BH=204,IH=205,zH=206,PH=207,_H=208,CH=209,AH=210,wH=211,TH=212,SH=213,jH=214,vH=0,yH=1,fH=2,RZ=3,bH=4,hH=5,xH=6,gH=7,pH=0,mH=1,lH=2,IJ=0,MZ=1,LZ=2,VZ=3,M8=4,kZ=5,BZ=6,IZ=7;var b7=301,K7=302,c6=303,n6=304,dH=1000,s6=1001,uH=1002,eJ=1003,cH=1004;var h7=1005;var $J=1006,i6=1007;var J8=1008;var RJ=1009,nH=1010,sH=1011,x7=1012,zZ=1013,Q8=1014,gJ=1015,zJ=1016,PZ=1017,_Z=1018,L8=1020,iH=35902,oH=35899,aH=1021,rH=1022,pJ=1023,W7=1026,Z8=1027,tH=1028,CZ=1029,V8=1030,AZ=1031;var wZ=1033,o6=33776,a6=33777,r6=33778,t6=33779,TZ=35840,SZ=35841,jZ=35842,vZ=35843,yZ=36196,fZ=37492,bZ=37496,hZ=37488,xZ=37489,e6=37490,gZ=37491,pZ=37808,mZ=37809,lZ=37810,dZ=37811,uZ=37812,cZ=37813,nZ=37814,sZ=37815,iZ=37816,oZ=37817,aZ=37818,rZ=37819,tZ=37820,eZ=37821,JK=36492,QK=36494,ZK=36495,KK=36283,WK=36284,JQ=36285,HK=36286;var $K=0,eH=1,k8="",YJ="srgb",YK="srgb-linear",UK="linear",U9="srgb";var J$=512,Q$=513,Z$=514,XK=515,K$=516,W$=517,GK=518,NK=519;var EK="300 es",qK=2000;function gY(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function pY(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function a8(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function H$(){let J=a8("canvas");return J.style.display="block",J}var BW={},r8=null;function w7(...J){let Q="THREE."+J.shift();if(r8)r8("log",Q,...J);else console.log(Q,...J)}function $$(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let Z=J[1];if(Z&&Z.isStackTrace)J[0]+=" "+Z.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function v0(...J){J=$$(J);let Q="THREE."+J.shift();if(r8)r8("warn",Q,...J);else{let Z=J[0];if(Z&&Z.isStackTrace)console.warn(Z.getError(Q));else console.warn(Q,...J)}}function b0(...J){J=$$(J);let Q="THREE."+J.shift();if(r8)r8("error",Q,...J);else{let Z=J[0];if(Z&&Z.isStackTrace)console.error(Z.getError(Q));else console.error(Q,...J)}}function z7(...J){let Q=J.join(" ");if(Q in BW)return;BW[Q]=!0,v0(...J)}function Y$(J,Q,Z){return new Promise(function(K,W){function H(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(H,Z);break;default:K()}}setTimeout(H,Z)})}var U$={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class mJ{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let Z=this._listeners;if(Z[J]===void 0)Z[J]=[];if(Z[J].indexOf(Q)===-1)Z[J].push(Q)}hasEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return!1;return Z[J]!==void 0&&Z[J].indexOf(Q)!==-1}removeEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return;let K=Z[J];if(K!==void 0){let W=K.indexOf(Q);if(W!==-1)K.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J.type];if(Z!==void 0){J.target=this;let K=Z.slice(0);for(let W=0,H=K.length;W<H;W++)K[W].call(this,J);J.target=null}}}var d9=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],IW=1234567,P7=Math.PI/180,t8=180/Math.PI;function lJ(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,K=Math.random()*4294967295|0;return(d9[J&255]+d9[J>>8&255]+d9[J>>16&255]+d9[J>>24&255]+"-"+d9[Q&255]+d9[Q>>8&255]+"-"+d9[Q>>16&15|64]+d9[Q>>24&255]+"-"+d9[Z&63|128]+d9[Z>>8&255]+"-"+d9[Z>>16&255]+d9[Z>>24&255]+d9[K&255]+d9[K>>8&255]+d9[K>>16&255]+d9[K>>24&255]).toLowerCase()}function s0(J,Q,Z){return Math.max(Q,Math.min(Z,J))}function FK(J,Q){return(J%Q+Q)%Q}function mY(J,Q,Z,K,W){return K+(J-Q)*(W-K)/(Z-Q)}function lY(J,Q,Z){if(J!==Q)return(Z-J)/(Q-J);else return 0}function _7(J,Q,Z){return(1-Z)*J+Z*Q}function dY(J,Q,Z,K){return _7(J,Q,1-Math.exp(-Z*K))}function uY(J,Q=1){return Q-Math.abs(FK(J,Q*2)-Q)}function cY(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*(3-2*J)}function nY(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*J*(J*(J*6-15)+10)}function sY(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function iY(J,Q){return J+Math.random()*(Q-J)}function oY(J){return J*(0.5-Math.random())}function aY(J){if(J!==void 0)IW=J;let Q=IW+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function rY(J){return J*P7}function tY(J){return J*t8}function eY(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function JU(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function DK(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function QU(J,Q,Z,K,W){let{cos:H,sin:$}=Math,Y=H(Z/2),U=$(Z/2),X=H((Q+K)/2),N=$((Q+K)/2),E=H((Q-K)/2),G=$((Q-K)/2),F=H((K-Q)/2),R=$((K-Q)/2);switch(W){case"XYX":J.set(Y*N,U*E,U*G,Y*X);break;case"YZY":J.set(U*G,Y*N,U*E,Y*X);break;case"ZXZ":J.set(U*E,U*G,Y*N,Y*X);break;case"XZX":J.set(Y*N,U*R,U*F,Y*X);break;case"YXY":J.set(U*F,Y*N,U*R,Y*X);break;case"ZYZ":J.set(U*R,U*F,Y*N,Y*X);break;default:v0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function QQ(J){switch(J.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function OK(J,Q){if(Q.constructor===Float32Array)return J;let Z=QQ(Q);if(Z===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(J/Z,-1)}function RK(J,Q){if(Q.constructor===Float32Array)return J;let Z=QQ(Q);if(Z===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(J*Z)}var PJ={DEG2RAD:P7,RAD2DEG:t8,generateUUID:lJ,clamp:s0,euclideanModulo:FK,mapLinear:mY,inverseLerp:lY,lerp:_7,damp:dY,pingpong:uY,smoothstep:cY,smootherstep:nY,randInt:sY,randFloat:iY,randFloatSpread:oY,seededRandom:aY,degToRad:rY,radToDeg:tY,isPowerOfTwo:eY,ceilPowerOfTwo:JU,floorPowerOfTwo:DK,setQuaternionFromProperEuler:QU,normalize:RK,denormalize:OK};class F0{static{this.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,Z=this.y,K=J.elements;return this.x=K[0]*Q+K[3]*Z+K[6],this.y=K[1]*Q+K[4]*Z+K[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=s0(this.x,J.x,Q.x),this.y=s0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=s0(this.x,J,Q),this.y=s0(this.y,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(s0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(s0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y;return Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let Z=Math.cos(Q),K=Math.sin(Q),W=this.x-J.x,H=this.y-J.y;return this.x=W*Z-H*K+J.x,this.y=W*K+H*Z+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class MJ{constructor(J=0,Q=0,Z=0,K=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=Z,this._w=K}static slerpFlat(J,Q,Z,K,W,H,$){let Y=Z[K+0],U=Z[K+1],X=Z[K+2],N=Z[K+3],E=W[H+0],G=W[H+1],F=W[H+2],R=W[H+3];if(N!==R||Y!==E||U!==G||X!==F){let B=Y*E+U*G+X*F+N*R;if(B<0)E=-E,G=-G,F=-F,R=-R,B=-B;let D=1-$;if(B<0.9995){let q=Math.acos(B),I=Math.sin(q);D=Math.sin(D*q)/I,$=Math.sin($*q)/I,Y=Y*D+E*$,U=U*D+G*$,X=X*D+F*$,N=N*D+R*$}else{Y=Y*D+E*$,U=U*D+G*$,X=X*D+F*$,N=N*D+R*$;let q=1/Math.sqrt(Y*Y+U*U+X*X+N*N);Y*=q,U*=q,X*=q,N*=q}}J[Q]=Y,J[Q+1]=U,J[Q+2]=X,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,Z,K,W,H){let $=Z[K],Y=Z[K+1],U=Z[K+2],X=Z[K+3],N=W[H],E=W[H+1],G=W[H+2],F=W[H+3];return J[Q]=$*F+X*N+Y*G-U*E,J[Q+1]=Y*F+X*E+U*N-$*G,J[Q+2]=U*F+X*G+$*E-Y*N,J[Q+3]=X*F-$*N-Y*E-U*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,Z,K){return this._x=J,this._y=Q,this._z=Z,this._w=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:Z,_y:K,_z:W,_order:H}=J,$=Math.cos,Y=Math.sin,U=$(Z/2),X=$(K/2),N=$(W/2),E=Y(Z/2),G=Y(K/2),F=Y(W/2);switch(H){case"XYZ":this._x=E*X*N+U*G*F,this._y=U*G*N-E*X*F,this._z=U*X*F+E*G*N,this._w=U*X*N-E*G*F;break;case"YXZ":this._x=E*X*N+U*G*F,this._y=U*G*N-E*X*F,this._z=U*X*F-E*G*N,this._w=U*X*N+E*G*F;break;case"ZXY":this._x=E*X*N-U*G*F,this._y=U*G*N+E*X*F,this._z=U*X*F+E*G*N,this._w=U*X*N-E*G*F;break;case"ZYX":this._x=E*X*N-U*G*F,this._y=U*G*N+E*X*F,this._z=U*X*F-E*G*N,this._w=U*X*N+E*G*F;break;case"YZX":this._x=E*X*N+U*G*F,this._y=U*G*N+E*X*F,this._z=U*X*F-E*G*N,this._w=U*X*N-E*G*F;break;case"XZY":this._x=E*X*N-U*G*F,this._y=U*G*N-E*X*F,this._z=U*X*F+E*G*N,this._w=U*X*N+E*G*F;break;default:v0("Quaternion: .setFromEuler() encountered an unknown order: "+H)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let Z=Q/2,K=Math.sin(Z);return this._x=J.x*K,this._y=J.y*K,this._z=J.z*K,this._w=Math.cos(Z),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,Z=Q[0],K=Q[4],W=Q[8],H=Q[1],$=Q[5],Y=Q[9],U=Q[2],X=Q[6],N=Q[10],E=Z+$+N;if(E>0){let G=0.5/Math.sqrt(E+1);this._w=0.25/G,this._x=(X-Y)*G,this._y=(W-U)*G,this._z=(H-K)*G}else if(Z>$&&Z>N){let G=2*Math.sqrt(1+Z-$-N);this._w=(X-Y)/G,this._x=0.25*G,this._y=(K+H)/G,this._z=(W+U)/G}else if($>N){let G=2*Math.sqrt(1+$-Z-N);this._w=(W-U)/G,this._x=(K+H)/G,this._y=0.25*G,this._z=(Y+X)/G}else{let G=2*Math.sqrt(1+N-Z-$);this._w=(H-K)/G,this._x=(W+U)/G,this._y=(Y+X)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let Z=J.dot(Q)+1;if(Z<0.00000001)if(Z=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Z;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Z;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=Z;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(s0(this.dot(J),-1,1)))}rotateTowards(J,Q){let Z=this.angleTo(J);if(Z===0)return this;let K=Math.min(1,Q/Z);return this.slerp(J,K),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:Z,_y:K,_z:W,_w:H}=J,$=Q._x,Y=Q._y,U=Q._z,X=Q._w;return this._x=Z*X+H*$+K*U-W*Y,this._y=K*X+H*Y+W*$-Z*U,this._z=W*X+H*U+Z*Y-K*$,this._w=H*X-Z*$-K*Y-W*U,this._onChangeCallback(),this}slerp(J,Q){let{_x:Z,_y:K,_z:W,_w:H}=J,$=this.dot(J);if($<0)Z=-Z,K=-K,W=-W,H=-H,$=-$;let Y=1-Q;if($<0.9995){let U=Math.acos($),X=Math.sin(U);Y=Math.sin(Y*U)/X,Q=Math.sin(Q*U)/X,this._x=this._x*Y+Z*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+H*Q,this._onChangeCallback()}else this._x=this._x*Y+Z*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+H*Q,this.normalize();return this}slerpQuaternions(J,Q,Z){return this.copy(J).slerp(Q,Z)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),Z=Math.random(),K=Math.sqrt(1-Z),W=Math.sqrt(Z);return this.set(K*Math.sin(J),K*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{static{this.prototype.isVector3=!0}constructor(J=0,Q=0,Z=0){this.x=J,this.y=Q,this.z=Z}set(J,Q,Z){if(Z===void 0)Z=this.z;return this.x=J,this.y=Q,this.z=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(zW.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(zW.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,Z=this.y,K=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*Z+W[6]*K,this.y=W[1]*Q+W[4]*Z+W[7]*K,this.z=W[2]*Q+W[5]*Z+W[8]*K,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,Z=this.y,K=this.z,W=J.elements,H=1/(W[3]*Q+W[7]*Z+W[11]*K+W[15]);return this.x=(W[0]*Q+W[4]*Z+W[8]*K+W[12])*H,this.y=(W[1]*Q+W[5]*Z+W[9]*K+W[13])*H,this.z=(W[2]*Q+W[6]*Z+W[10]*K+W[14])*H,this}applyQuaternion(J){let Q=this.x,Z=this.y,K=this.z,W=J.x,H=J.y,$=J.z,Y=J.w,U=2*(H*K-$*Z),X=2*($*Q-W*K),N=2*(W*Z-H*Q);return this.x=Q+Y*U+H*N-$*X,this.y=Z+Y*X+$*U-W*N,this.z=K+Y*N+W*X-H*U,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,Z=this.y,K=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*Z+W[8]*K,this.y=W[1]*Q+W[5]*Z+W[9]*K,this.z=W[2]*Q+W[6]*Z+W[10]*K,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=s0(this.x,J.x,Q.x),this.y=s0(this.y,J.y,Q.y),this.z=s0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=s0(this.x,J,Q),this.y=s0(this.y,J,Q),this.z=s0(this.z,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(s0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:Z,y:K,z:W}=J,H=Q.x,$=Q.y,Y=Q.z;return this.x=K*Y-W*$,this.y=W*H-Z*Y,this.z=Z*$-K*H,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let Z=J.dot(this)/Q;return this.copy(J).multiplyScalar(Z)}projectOnPlane(J){return pQ.copy(this).projectOnVector(J),this.sub(pQ)}reflect(J){return this.sub(pQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(s0(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y,K=this.z-J.z;return Q*Q+Z*Z+K*K}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,Z){let K=Math.sin(Q)*J;return this.x=K*Math.sin(Z),this.y=Math.cos(Q)*J,this.z=K*Math.cos(Z),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,Z){return this.x=J*Math.sin(Q),this.y=Z,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),Z=this.setFromMatrixColumn(J,1).length(),K=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=Z,this.z=K,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,Z=Math.sqrt(1-Q*Q);return this.x=Z*Math.cos(J),this.y=Q,this.z=Z*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var pQ=new S,zW=new MJ;class h0{static{this.prototype.isMatrix3=!0}constructor(J,Q,Z,K,W,H,$,Y,U){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,Z,K,W,H,$,Y,U)}set(J,Q,Z,K,W,H,$,Y,U){let X=this.elements;return X[0]=J,X[1]=K,X[2]=$,X[3]=Q,X[4]=W,X[5]=Y,X[6]=Z,X[7]=H,X[8]=U,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],this}extractBasis(J,Q,Z){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),Z.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,K=Q.elements,W=this.elements,H=Z[0],$=Z[3],Y=Z[6],U=Z[1],X=Z[4],N=Z[7],E=Z[2],G=Z[5],F=Z[8],R=K[0],B=K[3],D=K[6],q=K[1],I=K[4],z=K[7],V=K[2],_=K[5],C=K[8];return W[0]=H*R+$*q+Y*V,W[3]=H*B+$*I+Y*_,W[6]=H*D+$*z+Y*C,W[1]=U*R+X*q+N*V,W[4]=U*B+X*I+N*_,W[7]=U*D+X*z+N*C,W[2]=E*R+G*q+F*V,W[5]=E*B+G*I+F*_,W[8]=E*D+G*z+F*C,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],W=J[3],H=J[4],$=J[5],Y=J[6],U=J[7],X=J[8];return Q*H*X-Q*$*U-Z*W*X+Z*$*Y+K*W*U-K*H*Y}invert(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],W=J[3],H=J[4],$=J[5],Y=J[6],U=J[7],X=J[8],N=X*H-$*U,E=$*Y-X*W,G=U*W-H*Y,F=Q*N+Z*E+K*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/F;return J[0]=N*R,J[1]=(K*U-X*Z)*R,J[2]=($*Z-K*H)*R,J[3]=E*R,J[4]=(X*Q-K*Y)*R,J[5]=(K*W-$*Q)*R,J[6]=G*R,J[7]=(Z*Y-U*Q)*R,J[8]=(H*Q-Z*W)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,Z,K,W,H,$){let Y=Math.cos(W),U=Math.sin(W);return this.set(Z*Y,Z*U,-Z*(Y*H+U*$)+H+J,-K*U,K*Y,-K*(-U*H+Y*$)+$+Q,0,0,1),this}scale(J,Q){return z7("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mQ.makeScale(J,Q)),this}rotate(J){return z7("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mQ.makeRotation(-J)),this}translate(J,Q){return z7("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,Z,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,Z=J.elements;for(let K=0;K<9;K++)if(Q[K]!==Z[K])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<9;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var mQ=new h0,PW=new h0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),_W=new h0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function ZU(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,H,$){if(this.enabled===!1||H===$||!H||!$)return W;if(this.spaces[H].transfer==="srgb")W.r=hJ(W.r),W.g=hJ(W.g),W.b=hJ(W.b);if(this.spaces[H].primaries!==this.spaces[$].primaries)W.applyMatrix3(this.spaces[H].toXYZ),W.applyMatrix3(this.spaces[$].fromXYZ);if(this.spaces[$].transfer==="srgb")W.r=i8(W.r),W.g=i8(W.g),W.b=i8(W.b);return W},workingToColorSpace:function(W,H){return this.convert(W,this.workingColorSpace,H)},colorSpaceToWorking:function(W,H){return this.convert(W,H,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,H=this.workingColorSpace){return W.fromArray(this.spaces[H].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,H,$){return W.copy(this.spaces[$].fromXYZ).multiply(this.spaces[H].toXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],Z=[0.2126,0.7152,0.0722],K=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:K,transfer:"linear",toXYZ:PW,fromXYZ:_W,luminanceCoefficients:Z,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:K,transfer:"srgb",toXYZ:PW,fromXYZ:_W,luminanceCoefficients:Z,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var a0=ZU();function hJ(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function i8(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var w8;class MK{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let Z;if(J instanceof HTMLCanvasElement)Z=J;else{if(w8===void 0)w8=a8("canvas");w8.width=J.width,w8.height=J.height;let K=w8.getContext("2d");if(J instanceof ImageData)K.putImageData(J,0,0);else K.drawImage(J,0,0,J.width,J.height);Z=w8}return Z.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=a8("canvas");Q.width=J.width,Q.height=J.height;let Z=Q.getContext("2d");Z.drawImage(J,0,0,J.width,J.height);let K=Z.getImageData(0,0,J.width,J.height),W=K.data;for(let H=0;H<W.length;H++)W[H]=hJ(W[H]/255)*255;return Z.putImageData(K,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let Z=0;Z<Q.length;Z++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[Z]=Math.floor(hJ(Q[Z]/255)*255);else Q[Z]=hJ(Q[Z]);return{data:Q,width:J.width,height:J.height}}else return v0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var KU=0;class g7{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:KU++}),this.uuid=lJ(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width||0,Q.height||0,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Z={uuid:this.uuid,url:""},K=this.data;if(K!==null){let W;if(Array.isArray(K)){W=[];for(let H=0,$=K.length;H<$;H++)if(K[H].isDataTexture)W.push(lQ(K[H].image));else W.push(lQ(K[H]))}else W=lQ(K);Z.url=W}if(!Q)J.images[this.uuid]=Z;return Z}}function lQ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return MK.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return v0("Texture: Unable to serialize Texture."),{}}var WU=0,dQ=new S;class y9 extends mJ{constructor(J=y9.DEFAULT_IMAGE,Q=y9.DEFAULT_MAPPING,Z=1001,K=1001,W=1006,H=1008,$=1023,Y=1009,U=y9.DEFAULT_ANISOTROPY,X=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:WU++}),this.uuid=lJ(),this.name="",this.source=new g7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=Z,this.wrapT=K,this.magFilter=W,this.minFilter=H,this.anisotropy=U,this.format=$,this.internalFormat=null,this.type=Y,this.offset=new F0(0,0),this.repeat=new F0(1,1),this.center=new F0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new h0,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=X,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(dQ).x}get height(){return this.source.getSize(dQ).y}get depth(){return this.source.getSize(dQ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.mipmapsAutoUpdate=J.mipmapsAutoUpdate,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isPMREMTexture=J.isPMREMTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let Z=J[Q];if(Z===void 0){v0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){v0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(K&&Z&&(K.isVector2&&Z.isVector2))K.copy(Z);else if(K&&Z&&(K.isVector3&&Z.isVector3))K.copy(Z);else if(K&&Z&&(K.isMatrix3&&Z.isMatrix3))K.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Z={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(!Q)J.textures[this.uuid]=Z;return Z}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}y9.DEFAULT_IMAGE=null;y9.DEFAULT_MAPPING=300;y9.DEFAULT_ANISOTROPY=1;class M9{static{this.prototype.isVector4=!0}constructor(J=0,Q=0,Z=0,K=1){this.x=J,this.y=Q,this.z=Z,this.w=K}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,Z,K){return this.x=J,this.y=Q,this.z=Z,this.w=K,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,Z=this.y,K=this.z,W=this.w,H=J.elements;return this.x=H[0]*Q+H[4]*Z+H[8]*K+H[12]*W,this.y=H[1]*Q+H[5]*Z+H[9]*K+H[13]*W,this.z=H[2]*Q+H[6]*Z+H[10]*K+H[14]*W,this.w=H[3]*Q+H[7]*Z+H[11]*K+H[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,Z,K,W,H=0.01,$=0.1,Y=J.elements,U=Y[0],X=Y[4],N=Y[8],E=Y[1],G=Y[5],F=Y[9],R=Y[2],B=Y[6],D=Y[10];if(Math.abs(X-E)<0.01&&Math.abs(N-R)<0.01&&Math.abs(F-B)<0.01){if(Math.abs(X+E)<0.1&&Math.abs(N+R)<0.1&&Math.abs(F+B)<0.1&&Math.abs(U+G+D-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let I=(U+1)/2,z=(G+1)/2,V=(D+1)/2,_=(X+E)/4,C=(N+R)/4,O=(F+B)/4;if(I>z&&I>V)if(I<0.01)Z=0,K=0.707106781,W=0.707106781;else Z=Math.sqrt(I),K=_/Z,W=C/Z;else if(z>V)if(z<0.01)Z=0.707106781,K=0,W=0.707106781;else K=Math.sqrt(z),Z=_/K,W=O/K;else if(V<0.01)Z=0.707106781,K=0.707106781,W=0;else W=Math.sqrt(V),Z=C/W,K=O/W;return this.set(Z,K,W,Q),this}let q=Math.sqrt((B-F)*(B-F)+(N-R)*(N-R)+(E-X)*(E-X));if(Math.abs(q)<0.001)q=1;return this.x=(B-F)/q,this.y=(N-R)/q,this.z=(E-X)/q,this.w=Math.acos((U+G+D-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=s0(this.x,J.x,Q.x),this.y=s0(this.y,J.y,Q.y),this.z=s0(this.z,J.z,Q.z),this.w=s0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=s0(this.x,J,Q),this.y=s0(this.y,J,Q),this.z=s0(this.z,J,Q),this.w=s0(this.w,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(s0(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this.w=J.w+(Q.w-J.w)*Z,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LK extends mJ{constructor(J=1,Q=1,Z={}){super();Z=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},Z),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=Z.depth,this.scissor=new M9(0,0,J,Q),this.scissorTest=!1,this.viewport=new M9(0,0,J,Q),this.textures=[];let K=Z.count;for(let W=0;W<K;W++)this.textures[W]=new y9({width:J,height:Q,depth:Z.depth}),this.textures[W].isRenderTargetTexture=!0,this.textures[W].renderTarget=this;this._setTextureOptions(Z),this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,this.resolveColorBuffer=Z.resolveColorBuffer,this.resolveDepthBuffer=Z.resolveDepthBuffer,this.resolveStencilBuffer=Z.resolveStencilBuffer,this.storeMultisampledColorBuffer=Z.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=Z.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=Z.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=Z.depthTexture,this.samples=Z.samples,this.multiview=Z.multiview,this.useArrayDepthTexture=Z.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.mipmapsAutoUpdate!==void 0)Q.mipmapsAutoUpdate=J.mipmapsAutoUpdate;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let Z=0;Z<this.textures.length;Z++)this.textures[Z].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,Z=1){if(this.width!==J||this.height!==Q||this.depth!==Z){this.width=J,this.height=Q,this.depth=Z;for(let K=0,W=this.textures.length;K<W;K++)if(this.textures[K].image.width=J,this.textures[K].image.height=Q,this.textures[K].image.depth=Z,this.textures[K].isData3DTexture!==!0)this.textures[K].isArrayTexture=this.textures[K].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,Z=J.textures.length;Q<Z;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let K=Object.assign({},J.textures[Q].image);this.textures[Q].source=new g7(K)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;else this.depthTexture=null;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class UJ extends LK{constructor(J=1,Q=1,Z={}){super(J,Q,Z);this.isWebGLRenderTarget=!0}}class ZQ extends y9{constructor(J=null,Q=1,Z=1,K=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:Z,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class VK extends y9{constructor(J=null,Q=1,Z=1,K=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:Z,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class J9{static{this.prototype.isMatrix4=!0}constructor(J,Q,Z,K,W,H,$,Y,U,X,N,E,G,F,R,B){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,Z,K,W,H,$,Y,U,X,N,E,G,F,R,B)}set(J,Q,Z,K,W,H,$,Y,U,X,N,E,G,F,R,B){let D=this.elements;return D[0]=J,D[4]=Q,D[8]=Z,D[12]=K,D[1]=W,D[5]=H,D[9]=$,D[13]=Y,D[2]=U,D[6]=X,D[10]=N,D[14]=E,D[3]=G,D[7]=F,D[11]=R,D[15]=B,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new J9().fromArray(this.elements)}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],Q[9]=Z[9],Q[10]=Z[10],Q[11]=Z[11],Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],Q[15]=Z[15],this}copyPosition(J){let Q=this.elements,Z=J.elements;return Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,Z){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),Z.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),Z.setFromMatrixColumn(this,2),this}makeBasis(J,Q,Z){return this.set(J.x,Q.x,Z.x,0,J.y,Q.y,Z.y,0,J.z,Q.z,Z.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,Z=J.elements,K=1/T8.setFromMatrixColumn(J,0).length(),W=1/T8.setFromMatrixColumn(J,1).length(),H=1/T8.setFromMatrixColumn(J,2).length();return Q[0]=Z[0]*K,Q[1]=Z[1]*K,Q[2]=Z[2]*K,Q[3]=0,Q[4]=Z[4]*W,Q[5]=Z[5]*W,Q[6]=Z[6]*W,Q[7]=0,Q[8]=Z[8]*H,Q[9]=Z[9]*H,Q[10]=Z[10]*H,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,Z=J.x,K=J.y,W=J.z,H=Math.cos(Z),$=Math.sin(Z),Y=Math.cos(K),U=Math.sin(K),X=Math.cos(W),N=Math.sin(W);if(J.order==="XYZ"){let E=H*X,G=H*N,F=$*X,R=$*N;Q[0]=Y*X,Q[4]=-Y*N,Q[8]=U,Q[1]=G+F*U,Q[5]=E-R*U,Q[9]=-$*Y,Q[2]=R-E*U,Q[6]=F+G*U,Q[10]=H*Y}else if(J.order==="YXZ"){let E=Y*X,G=Y*N,F=U*X,R=U*N;Q[0]=E+R*$,Q[4]=F*$-G,Q[8]=H*U,Q[1]=H*N,Q[5]=H*X,Q[9]=-$,Q[2]=G*$-F,Q[6]=R+E*$,Q[10]=H*Y}else if(J.order==="ZXY"){let E=Y*X,G=Y*N,F=U*X,R=U*N;Q[0]=E-R*$,Q[4]=-H*N,Q[8]=F+G*$,Q[1]=G+F*$,Q[5]=H*X,Q[9]=R-E*$,Q[2]=-H*U,Q[6]=$,Q[10]=H*Y}else if(J.order==="ZYX"){let E=H*X,G=H*N,F=$*X,R=$*N;Q[0]=Y*X,Q[4]=F*U-G,Q[8]=E*U+R,Q[1]=Y*N,Q[5]=R*U+E,Q[9]=G*U-F,Q[2]=-U,Q[6]=$*Y,Q[10]=H*Y}else if(J.order==="YZX"){let E=H*Y,G=H*U,F=$*Y,R=$*U;Q[0]=Y*X,Q[4]=R-E*N,Q[8]=F*N+G,Q[1]=N,Q[5]=H*X,Q[9]=-$*X,Q[2]=-U*X,Q[6]=G*N+F,Q[10]=E-R*N}else if(J.order==="XZY"){let E=H*Y,G=H*U,F=$*Y,R=$*U;Q[0]=Y*X,Q[4]=-N,Q[8]=U*X,Q[1]=E*N+R,Q[5]=H*X,Q[9]=G*N-F,Q[2]=F*N-G,Q[6]=$*X,Q[10]=R*N+E}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(HU,J,$U)}lookAt(J,Q,Z){let K=this.elements;if(e9.subVectors(J,Q),e9.lengthSq()===0)e9.z=1;if(e9.normalize(),iJ.crossVectors(Z,e9),iJ.lengthSq()===0){if(Math.abs(Z.z)===1)e9.x+=0.0001;else e9.z+=0.0001;e9.normalize(),iJ.crossVectors(Z,e9)}return iJ.normalize(),F6.crossVectors(e9,iJ),K[0]=iJ.x,K[4]=F6.x,K[8]=e9.x,K[1]=iJ.y,K[5]=F6.y,K[9]=e9.y,K[2]=iJ.z,K[6]=F6.z,K[10]=e9.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,K=Q.elements,W=this.elements,H=Z[0],$=Z[4],Y=Z[8],U=Z[12],X=Z[1],N=Z[5],E=Z[9],G=Z[13],F=Z[2],R=Z[6],B=Z[10],D=Z[14],q=Z[3],I=Z[7],z=Z[11],V=Z[15],_=K[0],C=K[4],O=K[8],k=K[12],w=K[1],g=K[5],j=K[9],p=K[13],o=K[2],A=K[6],u=K[10],r=K[14],x=K[3],Y0=K[7],c=K[11],e=K[15];return W[0]=H*_+$*w+Y*o+U*x,W[4]=H*C+$*g+Y*A+U*Y0,W[8]=H*O+$*j+Y*u+U*c,W[12]=H*k+$*p+Y*r+U*e,W[1]=X*_+N*w+E*o+G*x,W[5]=X*C+N*g+E*A+G*Y0,W[9]=X*O+N*j+E*u+G*c,W[13]=X*k+N*p+E*r+G*e,W[2]=F*_+R*w+B*o+D*x,W[6]=F*C+R*g+B*A+D*Y0,W[10]=F*O+R*j+B*u+D*c,W[14]=F*k+R*p+B*r+D*e,W[3]=q*_+I*w+z*o+V*x,W[7]=q*C+I*g+z*A+V*Y0,W[11]=q*O+I*j+z*u+V*c,W[15]=q*k+I*p+z*r+V*e,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[4],K=J[8],W=J[12],H=J[1],$=J[5],Y=J[9],U=J[13],X=J[2],N=J[6],E=J[10],G=J[14],F=J[3],R=J[7],B=J[11],D=J[15],q=Y*G-U*E,I=$*G-U*N,z=$*E-Y*N,V=H*G-U*X,_=H*E-Y*X,C=H*N-$*X;return Q*(R*q-B*I+D*z)-Z*(F*q-B*V+D*_)+K*(F*I-R*V+D*C)-W*(F*z-R*_+B*C)}determinantAffine(){let J=this.elements,Q=J[0],Z=J[4],K=J[8],W=J[1],H=J[5],$=J[9],Y=J[2],U=J[6],X=J[10];return Q*(H*X-$*U)-Z*(W*X-$*Y)+K*(W*U-H*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,Z){let K=this.elements;if(J.isVector3)K[12]=J.x,K[13]=J.y,K[14]=J.z;else K[12]=J,K[13]=Q,K[14]=Z;return this}invert(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],W=J[3],H=J[4],$=J[5],Y=J[6],U=J[7],X=J[8],N=J[9],E=J[10],G=J[11],F=J[12],R=J[13],B=J[14],D=J[15],q=Q*$-Z*H,I=Q*Y-K*H,z=Q*U-W*H,V=Z*Y-K*$,_=Z*U-W*$,C=K*U-W*Y,O=X*R-N*F,k=X*B-E*F,w=X*D-G*F,g=N*B-E*R,j=N*D-G*R,p=E*D-G*B,o=q*p-I*j+z*g+V*w-_*k+C*O;if(o===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/o;return J[0]=($*p-Y*j+U*g)*A,J[1]=(K*j-Z*p-W*g)*A,J[2]=(R*C-B*_+D*V)*A,J[3]=(E*_-N*C-G*V)*A,J[4]=(Y*w-H*p-U*k)*A,J[5]=(Q*p-K*w+W*k)*A,J[6]=(B*z-F*C-D*I)*A,J[7]=(X*C-E*z+G*I)*A,J[8]=(H*j-$*w+U*O)*A,J[9]=(Z*w-Q*j-W*O)*A,J[10]=(F*_-R*z+D*q)*A,J[11]=(N*z-X*_-G*q)*A,J[12]=($*k-H*g-Y*O)*A,J[13]=(Q*g-Z*k+K*O)*A,J[14]=(R*I-F*V-B*q)*A,J[15]=(X*V-N*I+E*q)*A,this}scale(J){let Q=this.elements,Z=J.x,K=J.y,W=J.z;return Q[0]*=Z,Q[4]*=K,Q[8]*=W,Q[1]*=Z,Q[5]*=K,Q[9]*=W,Q[2]*=Z,Q[6]*=K,Q[10]*=W,Q[3]*=Z,Q[7]*=K,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Z=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],K=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,Z,K))}makeTranslation(J,Q,Z){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,Z,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(1,0,0,0,0,Q,-Z,0,0,Z,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,0,Z,0,0,1,0,0,-Z,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,0,Z,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let Z=Math.cos(Q),K=Math.sin(Q),W=1-Z,H=J.x,$=J.y,Y=J.z,U=W*H,X=W*$;return this.set(U*H+Z,U*$-K*Y,U*Y+K*$,0,U*$+K*Y,X*$+Z,X*Y-K*H,0,U*Y-K*$,X*Y+K*H,W*Y*Y+Z,0,0,0,0,1),this}makeScale(J,Q,Z){return this.set(J,0,0,0,0,Q,0,0,0,0,Z,0,0,0,0,1),this}makeShear(J,Q,Z,K,W,H){return this.set(1,Z,W,0,J,1,H,0,Q,K,1,0,0,0,0,1),this}compose(J,Q,Z){let K=this.elements,W=Q._x,H=Q._y,$=Q._z,Y=Q._w,U=W+W,X=H+H,N=$+$,E=W*U,G=W*X,F=W*N,R=H*X,B=H*N,D=$*N,q=Y*U,I=Y*X,z=Y*N,V=Z.x,_=Z.y,C=Z.z;return K[0]=(1-(R+D))*V,K[1]=(G+z)*V,K[2]=(F-I)*V,K[3]=0,K[4]=(G-z)*_,K[5]=(1-(E+D))*_,K[6]=(B+q)*_,K[7]=0,K[8]=(F+I)*C,K[9]=(B-q)*C,K[10]=(1-(E+R))*C,K[11]=0,K[12]=J.x,K[13]=J.y,K[14]=J.z,K[15]=1,this}decompose(J,Q,Z){let K=this.elements;J.x=K[12],J.y=K[13],J.z=K[14];let W=this.determinantAffine();if(W===0)return Z.set(1,1,1),Q.identity(),this;let H=T8.set(K[0],K[1],K[2]).length(),$=T8.set(K[4],K[5],K[6]).length(),Y=T8.set(K[8],K[9],K[10]).length();if(W<0)H=-H;FJ.copy(this);let U=1/H,X=1/$,N=1/Y;return FJ.elements[0]*=U,FJ.elements[1]*=U,FJ.elements[2]*=U,FJ.elements[4]*=X,FJ.elements[5]*=X,FJ.elements[6]*=X,FJ.elements[8]*=N,FJ.elements[9]*=N,FJ.elements[10]*=N,Q.setFromRotationMatrix(FJ),Z.x=H,Z.y=$,Z.z=Y,this}makePerspective(J,Q,Z,K,W,H,$=2000,Y=!1){let U=this.elements,X=2*W/(Q-J),N=2*W/(Z-K),E=(Q+J)/(Q-J),G=(Z+K)/(Z-K),F,R;if(Y)F=W/(H-W),R=H*W/(H-W);else if($===2000)F=-(H+W)/(H-W),R=-2*H*W/(H-W);else if($===2001)F=-H/(H-W),R=-H*W/(H-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+$);return U[0]=X,U[4]=0,U[8]=E,U[12]=0,U[1]=0,U[5]=N,U[9]=G,U[13]=0,U[2]=0,U[6]=0,U[10]=F,U[14]=R,U[3]=0,U[7]=0,U[11]=-1,U[15]=0,this}makeOrthographic(J,Q,Z,K,W,H,$=2000,Y=!1){let U=this.elements,X=2/(Q-J),N=2/(Z-K),E=-(Q+J)/(Q-J),G=-(Z+K)/(Z-K),F,R;if(Y)F=1/(H-W),R=H/(H-W);else if($===2000)F=-2/(H-W),R=-(H+W)/(H-W);else if($===2001)F=-1/(H-W),R=-W/(H-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+$);return U[0]=X,U[4]=0,U[8]=0,U[12]=E,U[1]=0,U[5]=N,U[9]=0,U[13]=G,U[2]=0,U[6]=0,U[10]=F,U[14]=R,U[3]=0,U[7]=0,U[11]=0,U[15]=1,this}equals(J){let Q=this.elements,Z=J.elements;for(let K=0;K<16;K++)if(Q[K]!==Z[K])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<16;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J[Q+9]=Z[9],J[Q+10]=Z[10],J[Q+11]=Z[11],J[Q+12]=Z[12],J[Q+13]=Z[13],J[Q+14]=Z[14],J[Q+15]=Z[15],J}}var T8=new S,FJ=new J9,HU=new S(0,0,0),$U=new S(1,1,1),iJ=new S,F6=new S,e9=new S,CW=new J9,AW=new MJ;class xJ{constructor(J=0,Q=0,Z=0,K=xJ.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=Z,this._order=K}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,Z,K=this._order){return this._x=J,this._y=Q,this._z=Z,this._order=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,Z=!0){let K=J.elements,W=K[0],H=K[4],$=K[8],Y=K[1],U=K[5],X=K[9],N=K[2],E=K[6],G=K[10];switch(Q){case"XYZ":if(this._y=Math.asin(s0($,-1,1)),Math.abs($)<0.9999999)this._x=Math.atan2(-X,G),this._z=Math.atan2(-H,W);else this._x=Math.atan2(E,U),this._z=0;break;case"YXZ":if(this._x=Math.asin(-s0(X,-1,1)),Math.abs(X)<0.9999999)this._y=Math.atan2($,G),this._z=Math.atan2(Y,U);else this._y=Math.atan2(-N,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(s0(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-N,G),this._z=Math.atan2(-H,U);else this._y=0,this._z=Math.atan2(Y,W);break;case"ZYX":if(this._y=Math.asin(-s0(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(E,G),this._z=Math.atan2(Y,W);else this._x=0,this._z=Math.atan2(-H,U);break;case"YZX":if(this._z=Math.asin(s0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-X,U),this._y=Math.atan2(-N,W);else this._x=0,this._y=Math.atan2($,G);break;case"XZY":if(this._z=Math.asin(-s0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(E,U),this._y=Math.atan2($,W);else this._x=Math.atan2(-X,G),this._y=0;break;default:v0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,Z===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,Z){return CW.makeRotationFromQuaternion(J),this.setFromRotationMatrix(CW,Q,Z)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return AW.setFromEuler(this),this.setFromQuaternion(AW,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xJ.DEFAULT_ORDER="XYZ";class p7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var YU=0,wW=new S,S8=new MJ,jJ=new J9,D6=new S,F7=new S,UU=new S,XU=new MJ,TW=new S(1,0,0),SW=new S(0,1,0),jW=new S(0,0,1),vW={type:"added"},GU={type:"removed"},j8={type:"childadded",child:null},uQ={type:"childremoved",child:null};class _9 extends mJ{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:YU++}),this.uuid=lJ(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_9.DEFAULT_UP.clone();let J=new S,Q=new xJ,Z=new MJ,K=new S(1,1,1);function W(){Z.setFromEuler(Q,!1)}function H(){Q.setFromQuaternion(Z,void 0,!1)}Q._onChange(W),Z._onChange(H),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:Z},scale:{configurable:!0,enumerable:!0,value:K},modelViewMatrix:{value:new J9},normalMatrix:{value:new h0}}),this.matrix=new J9,this.matrixWorld=new J9,this.matrixAutoUpdate=_9.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new p7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return S8.setFromAxisAngle(J,Q),this.quaternion.multiply(S8),this}rotateOnWorldAxis(J,Q){return S8.setFromAxisAngle(J,Q),this.quaternion.premultiply(S8),this}rotateX(J){return this.rotateOnAxis(TW,J)}rotateY(J){return this.rotateOnAxis(SW,J)}rotateZ(J){return this.rotateOnAxis(jW,J)}translateOnAxis(J,Q){return wW.copy(J).applyQuaternion(this.quaternion),this.position.add(wW.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(TW,J)}translateY(J){return this.translateOnAxis(SW,J)}translateZ(J){return this.translateOnAxis(jW,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(jJ.copy(this.matrixWorld).invert())}lookAt(J,Q,Z){if(J.isVector3)D6.copy(J);else D6.set(J,Q,Z);let K=this.parent;if(this.updateWorldMatrix(!0,!1),F7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)jJ.lookAt(F7,D6,this.up);else jJ.lookAt(D6,F7,this.up);if(this.quaternion.setFromRotationMatrix(jJ),K)jJ.extractRotation(K.matrixWorld),S8.setFromRotationMatrix(jJ),this.quaternion.premultiply(S8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return b0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(vW),j8.child=J,this.dispatchEvent(j8),j8.child=null;else b0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.remove(arguments[Z]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(GU),uQ.child=J,this.dispatchEvent(uQ),uQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),jJ.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),jJ.multiply(J.parent.matrixWorld);return J.applyMatrix4(jJ),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(vW),j8.child=J,this.dispatchEvent(j8),j8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let Z=0,K=this.children.length;Z<K;Z++){let H=this.children[Z].getObjectByProperty(J,Q);if(H!==void 0)return H}return}getObjectsByProperty(J,Q,Z=[]){if(this[J]===Q)Z.push(this);let K=this.children;for(let W=0,H=K.length;W<H;W++)K[W].getObjectsByProperty(J,Q,Z);return Z}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(F7,J,UU),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(F7,XU,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(J){J(this);let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:Z,z:K}=J,W=this.matrix.elements;W[12]+=Q-W[0]*Q-W[4]*Z-W[8]*K,W[13]+=Z-W[1]*Q-W[5]*Z-W[9]*K,W[14]+=K-W[2]*Q-W[6]*Z-W[10]*K}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].updateMatrixWorld(J)}updateWorldMatrix(J,Q,Z=!1){let K=this.parent;if(J===!0&&K!==null)K.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||Z){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,Z=!0}if(Q===!0){let W=this.children;for(let H=0,$=W.length;H<$;H++)W[H].updateWorldMatrix(!1,!0,Z)}}toJSON(J){let Q=J===void 0||typeof J==="string",Z={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Z.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let K={};if(K.uuid=this.uuid,K.type=this.type,K.name=this.name,K.castShadow=this.castShadow,K.receiveShadow=this.receiveShadow,K.visible=this.visible,K.frustumCulled=this.frustumCulled,K.renderOrder=this.renderOrder,K.static=this.static,K.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)K.userData=this.userData;if(K.layers=this.layers.mask,K.matrix=this.matrix.toArray(),K.up=this.up.toArray(),this.pivot!==null)K.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)K.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)K.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(K.type="InstancedMesh",K.count=this.count,K.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)K.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(K.type="BatchedMesh",K.perObjectFrustumCulled=this.perObjectFrustumCulled,K.sortObjects=this.sortObjects,K.drawRanges=this._drawRanges,K.reservedRanges=this._reservedRanges,K.geometryInfo=this._geometryInfo.map(($)=>({...$,boundingBox:$.boundingBox?$.boundingBox.toJSON():void 0,boundingSphere:$.boundingSphere?$.boundingSphere.toJSON():void 0})),K.instanceInfo=this._instanceInfo.map(($)=>({...$})),K.availableInstanceIds=this._availableInstanceIds.slice(),K.availableGeometryIds=this._availableGeometryIds.slice(),K.nextIndexStart=this._nextIndexStart,K.nextVertexStart=this._nextVertexStart,K.geometryCount=this._geometryCount,K.maxInstanceCount=this._maxInstanceCount,K.maxVertexCount=this._maxVertexCount,K.maxIndexCount=this._maxIndexCount,K.geometryInitialized=this._geometryInitialized,K.matricesTexture=this._matricesTexture.toJSON(J),K.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)K.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)K.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)K.boundingBox=this.boundingBox.toJSON()}function W($,Y){if($[Y.uuid]===void 0)$[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)K.background=this.background.toJSON();else if(this.background.isTexture)K.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)K.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){K.geometry=W(J.geometries,this.geometry);let $=this.geometry.parameters;if($!==void 0&&$.shapes!==void 0){let Y=$.shapes;if(Array.isArray(Y))for(let U=0,X=Y.length;U<X;U++){let N=Y[U];W(J.shapes,N)}else W(J.shapes,Y)}}if(this.isSkinnedMesh){if(K.bindMode=this.bindMode,K.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),K.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let $=[];for(let Y=0,U=this.material.length;Y<U;Y++)$.push(W(J.materials,this.material[Y]));K.material=$}else K.material=W(J.materials,this.material);if(this.children.length>0){K.children=[];for(let $=0;$<this.children.length;$++)K.children.push(this.children[$].toJSON(J).object)}if(this.animations.length>0){K.animations=[];for(let $=0;$<this.animations.length;$++){let Y=this.animations[$];K.animations.push(W(J.animations,Y))}}if(Q){let $=H(J.geometries),Y=H(J.materials),U=H(J.textures),X=H(J.images),N=H(J.shapes),E=H(J.skeletons),G=H(J.animations),F=H(J.nodes);if($.length>0)Z.geometries=$;if(Y.length>0)Z.materials=Y;if(U.length>0)Z.textures=U;if(X.length>0)Z.images=X;if(N.length>0)Z.shapes=N;if(E.length>0)Z.skeletons=E;if(G.length>0)Z.animations=G;if(F.length>0)Z.nodes=F}return Z.object=K,Z;function H($){let Y=[];for(let U in $){let X=$[U];delete X.metadata,Y.push(X)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let Z=0;Z<J.children.length;Z++){let K=J.children[Z];this.add(K.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}_9.DEFAULT_UP=new S(0,1,0);_9.DEFAULT_MATRIX_AUTO_UPDATE=!0;_9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class t0 extends _9{constructor(){super();this.isGroup=!0,this.type="Group"}}var NU={type:"move"};class m7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new t0,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new t0,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new t0,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let Z of J.hand.values())this._getHandJoint(Q,Z)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,Z){let K=null,W=null,H=null,$=this._targetRay,Y=this._grip,U=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(U&&J.hand){H=!0;for(let R of J.hand.values()){let B=Q.getJointPose(R,Z),D=this._getHandJoint(U,R);if(B!==null)D.matrix.fromArray(B.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.matrixWorldNeedsUpdate=!0,D.jointRadius=B.radius;D.visible=B!==null}let X=U.joints["index-finger-tip"],N=U.joints["thumb-tip"],E=X.position.distanceTo(N.position),G=0.02,F=0.005;if(U.inputState.pinching&&E>G+F)U.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!U.inputState.pinching&&E<=G-F)U.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,Z),W!==null){if(Y.matrix.fromArray(W.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldNeedsUpdate=!0,W.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(W.linearVelocity);else Y.hasLinearVelocity=!1;if(W.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(W.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if($!==null){if(K=Q.getPose(J.targetRaySpace,Z),K===null&&W!==null)K=W;if(K!==null){if($.matrix.fromArray(K.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.matrixWorldNeedsUpdate=!0,K.linearVelocity)$.hasLinearVelocity=!0,$.linearVelocity.copy(K.linearVelocity);else $.hasLinearVelocity=!1;if(K.angularVelocity)$.hasAngularVelocity=!0,$.angularVelocity.copy(K.angularVelocity);else $.hasAngularVelocity=!1;this.dispatchEvent(NU)}}}if($!==null)$.visible=K!==null;if(Y!==null)Y.visible=W!==null;if(U!==null)U.visible=H!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let Z=new t0;Z.matrixAutoUpdate=!1,Z.visible=!1,J.joints[Q.jointName]=Z,J.add(Z)}return J.joints[Q.jointName]}}var X$={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oJ={h:0,s:0,l:0},O6={h:0,s:0,l:0};function cQ(J,Q,Z){if(Z<0)Z+=1;if(Z>1)Z-=1;if(Z<0.16666666666666666)return J+(Q-J)*6*Z;if(Z<0.5)return Q;if(Z<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-Z);return J}class X0{constructor(J,Q,Z){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,Z)}set(J,Q,Z){if(Q===void 0&&Z===void 0){let K=J;if(K&&K.isColor)this.copy(K);else if(typeof K==="number")this.setHex(K);else if(typeof K==="string")this.setStyle(K)}else this.setRGB(J,Q,Z);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,a0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,Z,K=a0.workingColorSpace){return this.r=J,this.g=Q,this.b=Z,a0.colorSpaceToWorking(this,K),this}setHSL(J,Q,Z,K=a0.workingColorSpace){if(J=FK(J,1),Q=s0(Q,0,1),Z=s0(Z,0,1),Q===0)this.r=this.g=this.b=Z;else{let W=Z<=0.5?Z*(1+Q):Z+Q-Z*Q,H=2*Z-W;this.r=cQ(H,W,J+0.3333333333333333),this.g=cQ(H,W,J),this.b=cQ(H,W,J-0.3333333333333333)}return a0.colorSpaceToWorking(this,K),this}setStyle(J,Q="srgb"){function Z(W){if(W===void 0)return;if(parseFloat(W)<1)v0("Color: Alpha component of "+J+" will be ignored.")}let K;if(K=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,H=K[1],$=K[2];switch(H){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec($))return Z(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec($))return Z(W[4]),this.setRGB(Math.min(100,parseFloat(W[1]))/100,Math.min(100,parseFloat(W[2]))/100,Math.min(100,parseFloat(W[3]))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec($))return Z(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:v0("Color: Unknown color model "+J)}}else if(K=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=K[1],H=W.length;if(H===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(H===6)return this.setHex(parseInt(W,16),Q);else v0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let Z=X$[J.toLowerCase()];if(Z!==void 0)this.setHex(Z,Q);else v0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=hJ(J.r),this.g=hJ(J.g),this.b=hJ(J.b),this}copyLinearToSRGB(J){return this.r=i8(J.r),this.g=i8(J.g),this.b=i8(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return a0.workingToColorSpace(u9.copy(this),J),Math.round(s0(u9.r*255,0,255))*65536+Math.round(s0(u9.g*255,0,255))*256+Math.round(s0(u9.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=a0.workingColorSpace){a0.workingToColorSpace(u9.copy(this),Q);let{r:Z,g:K,b:W}=u9,H=Math.max(Z,K,W),$=Math.min(Z,K,W),Y,U,X=($+H)/2;if($===H)Y=0,U=0;else{let N=H-$;switch(U=X<=0.5?N/(H+$):N/(2-H-$),H){case Z:Y=(K-W)/N+(K<W?6:0);break;case K:Y=(W-Z)/N+2;break;case W:Y=(Z-K)/N+4;break}Y/=6}return J.h=Y,J.s=U,J.l=X,J}getRGB(J,Q=a0.workingColorSpace){return a0.workingToColorSpace(u9.copy(this),Q),J.r=u9.r,J.g=u9.g,J.b=u9.b,J}getStyle(J="srgb"){a0.workingToColorSpace(u9.copy(this),J);let{r:Q,g:Z,b:K}=u9;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${Z.toFixed(3)} ${K.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round(Z*255)},${Math.round(K*255)})`}offsetHSL(J,Q,Z){return this.getHSL(oJ),this.setHSL(oJ.h+J,oJ.s+Q,oJ.l+Z)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,Z){return this.r=J.r+(Q.r-J.r)*Z,this.g=J.g+(Q.g-J.g)*Z,this.b=J.b+(Q.b-J.b)*Z,this}lerpHSL(J,Q){this.getHSL(oJ),J.getHSL(O6);let Z=_7(oJ.h,O6.h,Q),K=_7(oJ.s,O6.s,Q),W=_7(oJ.l,O6.l,Q);return this.setHSL(Z,K,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,Z=this.g,K=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*Z+W[6]*K,this.g=W[1]*Q+W[4]*Z+W[7]*K,this.b=W[2]*Q+W[5]*Z+W[8]*K,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var u9=new X0;X0.NAMES=X$;class l7{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new X0(J),this.density=Q}clone(){return new l7(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class H7 extends _9{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xJ,this.environmentIntensity=1,this.environmentRotation=new xJ,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){return super.copy(J,Q),this.background=J.background!==null?J.background.clone():null,this.environment=J.environment!==null?J.environment.clone():null,this.fog=J.fog!==null?J.fog.clone():null,this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),this.overrideMaterial=J.overrideMaterial!==null?J.overrideMaterial.clone():null,this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var DJ=new S,vJ=new S,nQ=new S,yJ=new S,v8=new S,y8=new S,yW=new S,sQ=new S,iQ=new S,oQ=new S,aQ=new M9,rQ=new M9,tQ=new M9;class QJ{constructor(J=new S,Q=new S,Z=new S){this.a=J,this.b=Q,this.c=Z}static getNormal(J,Q,Z,K){K.subVectors(Z,Q),DJ.subVectors(J,Q),K.cross(DJ);let W=K.lengthSq();if(W>0)return K.multiplyScalar(1/Math.sqrt(W));return K.set(0,0,0)}static getBarycoord(J,Q,Z,K,W){DJ.subVectors(K,Q),vJ.subVectors(Z,Q),nQ.subVectors(J,Q);let H=DJ.dot(DJ),$=DJ.dot(vJ),Y=DJ.dot(nQ),U=vJ.dot(vJ),X=vJ.dot(nQ),N=H*U-$*$;if(N===0)return W.set(0,0,0),null;let E=1/N,G=(U*Y-$*X)*E,F=(H*X-$*Y)*E;return W.set(1-G-F,F,G)}static containsPoint(J,Q,Z,K){if(this.getBarycoord(J,Q,Z,K,yJ)===null)return!1;return yJ.x>=0&&yJ.y>=0&&yJ.x+yJ.y<=1}static getInterpolation(J,Q,Z,K,W,H,$,Y){if(this.getBarycoord(J,Q,Z,K,yJ)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(W,yJ.x),Y.addScaledVector(H,yJ.y),Y.addScaledVector($,yJ.z),Y}static getInterpolatedAttribute(J,Q,Z,K,W,H){return aQ.setScalar(0),rQ.setScalar(0),tQ.setScalar(0),aQ.fromBufferAttribute(J,Q),rQ.fromBufferAttribute(J,Z),tQ.fromBufferAttribute(J,K),H.setScalar(0),H.addScaledVector(aQ,W.x),H.addScaledVector(rQ,W.y),H.addScaledVector(tQ,W.z),H}static isFrontFacing(J,Q,Z,K){return DJ.subVectors(Z,Q),vJ.subVectors(J,Q),DJ.cross(vJ).dot(K)<0}set(J,Q,Z){return this.a.copy(J),this.b.copy(Q),this.c.copy(Z),this}setFromPointsAndIndices(J,Q,Z,K){return this.a.copy(J[Q]),this.b.copy(J[Z]),this.c.copy(J[K]),this}setFromAttributeAndIndices(J,Q,Z,K){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,Z),this.c.fromBufferAttribute(J,K),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return DJ.subVectors(this.c,this.b),vJ.subVectors(this.a,this.b),DJ.cross(vJ).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return QJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return QJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,Z,K,W){return QJ.getInterpolation(J,this.a,this.b,this.c,Q,Z,K,W)}containsPoint(J){return QJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return QJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let Z=this.a,K=this.b,W=this.c,H,$;v8.subVectors(K,Z),y8.subVectors(W,Z),sQ.subVectors(J,Z);let Y=v8.dot(sQ),U=y8.dot(sQ);if(Y<=0&&U<=0)return Q.copy(Z);iQ.subVectors(J,K);let X=v8.dot(iQ),N=y8.dot(iQ);if(X>=0&&N<=X)return Q.copy(K);let E=Y*N-X*U;if(E<=0&&Y>=0&&X<=0&&Y-X>0)return H=Y/(Y-X),Q.copy(Z).addScaledVector(v8,H);oQ.subVectors(J,W);let G=v8.dot(oQ),F=y8.dot(oQ);if(F>=0&&G<=F)return Q.copy(W);let R=G*U-Y*F;if(R<=0&&U>=0&&F<=0)return $=U/(U-F),Q.copy(Z).addScaledVector(y8,$);let B=X*F-G*N;if(B<=0&&N-X>=0&&G-F>=0)return yW.subVectors(W,K),$=(N-X)/(N-X+(G-F)),Q.copy(K).addScaledVector(yW,$);let D=1/(B+R+E);return H=R*D,$=E*D,Q.copy(Z).addScaledVector(v8,H).addScaledVector(y8,$)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class dJ{constructor(J=new S(1/0,1/0,1/0),Q=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q+=3)this.expandByPoint(OJ.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,Z=J.count;Q<Z;Q++)this.expandByPoint(OJ.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let Z=OJ.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let Z=J.geometry;if(Z!==void 0){let W=Z.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0&&J.isBatchedMesh!==!0)for(let H=0,$=W.count;H<$;H++){if(J.isMesh===!0)J.getVertexPosition(H,OJ);else OJ.fromBufferAttribute(W,H);OJ.applyMatrix4(J.matrixWorld),this.expandByPoint(OJ)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();R6.copy(J.boundingBox)}else{if(Z.boundingBox===null)Z.computeBoundingBox();R6.copy(Z.boundingBox)}R6.applyMatrix4(J.matrixWorld),this.union(R6)}}let K=J.children;for(let W=0,H=K.length;W<H;W++)this.expandByObject(K[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,OJ),OJ.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,Z;if(J.normal.x>0)Q=J.normal.x*this.min.x,Z=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,Z=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,Z+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,Z+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,Z+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,Z+=J.normal.z*this.min.z;return Q<=-J.constant&&Z>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(D7),M6.subVectors(this.max,D7),f8.subVectors(J.a,D7),b8.subVectors(J.b,D7),h8.subVectors(J.c,D7),aJ.subVectors(b8,f8),rJ.subVectors(h8,b8),N8.subVectors(f8,h8);let Q=[0,-aJ.z,aJ.y,0,-rJ.z,rJ.y,0,-N8.z,N8.y,aJ.z,0,-aJ.x,rJ.z,0,-rJ.x,N8.z,0,-N8.x,-aJ.y,aJ.x,0,-rJ.y,rJ.x,0,-N8.y,N8.x,0];if(!eQ(Q,f8,b8,h8,M6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!eQ(Q,f8,b8,h8,M6))return!1;return L6.crossVectors(aJ,rJ),Q=[L6.x,L6.y,L6.z],eQ(Q,f8,b8,h8,M6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,OJ).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(OJ).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return fJ[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),fJ[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),fJ[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),fJ[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),fJ[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),fJ[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),fJ[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),fJ[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(fJ),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var fJ=[new S,new S,new S,new S,new S,new S,new S,new S],OJ=new S,R6=new dJ,f8=new S,b8=new S,h8=new S,aJ=new S,rJ=new S,N8=new S,D7=new S,M6=new S,L6=new S,E8=new S;function eQ(J,Q,Z,K,W){for(let H=0,$=J.length-3;H<=$;H+=3){E8.fromArray(J,H);let Y=W.x*Math.abs(E8.x)+W.y*Math.abs(E8.y)+W.z*Math.abs(E8.z),U=Q.dot(E8),X=Z.dot(E8),N=K.dot(E8);if(Math.max(-Math.max(U,X,N),Math.min(U,X,N))>Y)return!1}return!0}var P9=new S,V6=new F0,EU=0;class x9 extends mJ{constructor(J,Q,Z=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:EU++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=Z,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=J!==void 0?QQ(J):void 0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this._normalizationScale=J._normalizationScale,this}copyAt(J,Q,Z){J*=this.itemSize,Z*=Q.itemSize;for(let K=0,W=this.itemSize;K<W;K++)this.array[J+K]=Q.array[Z+K];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,Z=this.count;Q<Z;Q++)V6.fromBufferAttribute(this,Q),V6.applyMatrix3(J),this.setXY(Q,V6.x,V6.y);else if(this.itemSize===3)for(let Q=0,Z=this.count;Q<Z;Q++)P9.fromBufferAttribute(this,Q),P9.applyMatrix3(J),this.setXYZ(Q,P9.x,P9.y,P9.z);return this}applyMatrix4(J){for(let Q=0,Z=this.count;Q<Z;Q++)P9.fromBufferAttribute(this,Q),P9.applyMatrix4(J),this.setXYZ(Q,P9.x,P9.y,P9.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)P9.fromBufferAttribute(this,Q),P9.applyNormalMatrix(J),this.setXYZ(Q,P9.x,P9.y,P9.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)P9.fromBufferAttribute(this,Q),P9.transformDirection(J),this.setXYZ(Q,P9.x,P9.y,P9.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let Z=this.array[J*this.itemSize+Q];if(this.normalized)Z=this._denormalize(Z);return Z}setComponent(J,Q,Z){if(this.normalized)Z=this._normalize(Z);return this.array[J*this.itemSize+Q]=Z,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=this._denormalize(Q);return Q}setX(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=this._denormalize(Q);return Q}setY(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=this._denormalize(Q);return Q}setZ(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=this._denormalize(Q);return Q}setW(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,Z){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),Z=this._normalize(Z);return this.array[J+0]=Q,this.array[J+1]=Z,this}setXYZ(J,Q,Z,K){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),Z=this._normalize(Z),K=this._normalize(K);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=K,this}setXYZW(J,Q,Z,K,W){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),Z=this._normalize(Z),K=this._normalize(K),W=this._normalize(W);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=K,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.max(J/Q,-1):OK(J,this.array)}_normalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.round(J*Q):RK(J,this.array)}}class KQ extends x9{constructor(J,Q,Z){super(new Uint16Array(J),Q,Z)}}class WQ extends x9{constructor(J,Q,Z){super(new Uint32Array(J),Q,Z)}}class W9 extends x9{constructor(J,Q,Z){super(new Float32Array(J),Q,Z)}}var qU=new dJ,O7=new S,JZ=new S;class K8{constructor(J=new S,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let Z=this.center;if(Q!==void 0)Z.copy(Q);else qU.setFromPoints(J).getCenter(Z);let K=0;for(let W=0,H=J.length;W<H;W++)K=Math.max(K,Z.distanceToSquared(J[W]));return this.radius=Math.sqrt(K),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let Z=this.center.distanceToSquared(J);if(Q.copy(J),Z>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;O7.subVectors(J,this.center);let Q=O7.lengthSq();if(Q>this.radius*this.radius){let Z=Math.sqrt(Q),K=(Z-this.radius)*0.5;this.center.addScaledVector(O7,K/Z),this.radius+=K}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else JZ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(O7.copy(J.center).add(JZ)),this.expandByPoint(O7.copy(J.center).sub(JZ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var FU=0,HJ=new J9,QZ=new _9,x8=new S,JJ=new dJ,R7=new dJ,v9=new S;class C9 extends mJ{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FU++}),this.uuid=lJ(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((gY(J))?WQ:KQ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,Z=0){this.groups.push({start:J,count:Q,materialIndex:Z})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let Z=this.attributes.normal;if(Z!==void 0){let W=new h0().getNormalMatrix(J);Z.applyNormalMatrix(W),Z.needsUpdate=!0}let K=this.attributes.tangent;if(K!==void 0)K.transformDirection(J),K.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return HJ.makeRotationFromQuaternion(J),this.applyMatrix4(HJ),this}rotateX(J){return HJ.makeRotationX(J),this.applyMatrix4(HJ),this}rotateY(J){return HJ.makeRotationY(J),this.applyMatrix4(HJ),this}rotateZ(J){return HJ.makeRotationZ(J),this.applyMatrix4(HJ),this}translate(J,Q,Z){return HJ.makeTranslation(J,Q,Z),this.applyMatrix4(HJ),this}scale(J,Q,Z){return HJ.makeScale(J,Q,Z),this.applyMatrix4(HJ),this}lookAt(J){return QZ.lookAt(J),QZ.updateMatrix(),this.applyMatrix4(QZ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(x8).negate(),this.translate(x8.x,x8.y,x8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let Z=[];for(let K=0,W=J.length;K<W;K++){let H=J[K];Z.push(H.x,H.y,H.z||0)}this.setAttribute("position",new W9(Z,3))}else{let Z=Math.min(J.length,Q.count);for(let K=0;K<Z;K++){let W=J[K];Q.setXYZ(K,W.x,W.y,W.z||0)}if(J.length>Q.count)v0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new dJ;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){b0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let Z=0,K=Q.length;Z<K;Z++){let W=Q[Z];if(JJ.setFromBufferAttribute(W),this.morphTargetsRelative)v9.addVectors(this.boundingBox.min,JJ.min),this.boundingBox.expandByPoint(v9),v9.addVectors(this.boundingBox.max,JJ.max),this.boundingBox.expandByPoint(v9);else this.boundingBox.expandByPoint(JJ.min),this.boundingBox.expandByPoint(JJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))b0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new K8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){b0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(J){let Z=this.boundingSphere.center;if(JJ.setFromBufferAttribute(J),Q)for(let W=0,H=Q.length;W<H;W++){let $=Q[W];if(R7.setFromBufferAttribute($),this.morphTargetsRelative)v9.addVectors(JJ.min,R7.min),JJ.expandByPoint(v9),v9.addVectors(JJ.max,R7.max),JJ.expandByPoint(v9);else JJ.expandByPoint(R7.min),JJ.expandByPoint(R7.max)}JJ.getCenter(Z);let K=0;for(let W=0,H=J.count;W<H;W++)v9.fromBufferAttribute(J,W),K=Math.max(K,Z.distanceToSquared(v9));if(Q)for(let W=0,H=Q.length;W<H;W++){let $=Q[W],Y=this.morphTargetsRelative;for(let U=0,X=$.count;U<X;U++){if(v9.fromBufferAttribute($,U),Y)x8.fromBufferAttribute(J,U),v9.add(x8);K=Math.max(K,Z.distanceToSquared(v9))}}if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))b0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){b0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Z,normal:K,uv:W}=Q,H=this.getAttribute("tangent");if(H===void 0||H.count!==Z.count)H=new x9(new Float32Array(4*Z.count),4),this.setAttribute("tangent",H);let $=[],Y=[],U=new Uint8Array(Z.count);for(let k=0;k<Z.count;k++)$[k]=new S,Y[k]=new S;let X=new S,N=new S,E=new S,G=new F0,F=new F0,R=new F0,B=new S,D=new S;function q(k,w,g){U[k]=U[w]=U[g]=1,X.fromBufferAttribute(Z,k),N.fromBufferAttribute(Z,w),E.fromBufferAttribute(Z,g),G.fromBufferAttribute(W,k),F.fromBufferAttribute(W,w),R.fromBufferAttribute(W,g),N.sub(X),E.sub(X),F.sub(G),R.sub(G);let j=1/(F.x*R.y-R.x*F.y);if(!isFinite(j))return;B.copy(N).multiplyScalar(R.y).addScaledVector(E,-F.y).multiplyScalar(j),D.copy(E).multiplyScalar(F.x).addScaledVector(N,-R.x).multiplyScalar(j),$[k].add(B),$[w].add(B),$[g].add(B),Y[k].add(D),Y[w].add(D),Y[g].add(D)}let I=this.groups;if(I.length===0)I=[{start:0,count:J.count}];for(let k=0,w=I.length;k<w;++k){let g=I[k],j=g.start,p=g.count;for(let o=j,A=j+p;o<A;o+=3)q(J.getX(o+0),J.getX(o+1),J.getX(o+2))}let z=new S,V=new S,_=new S,C=new S;function O(k){_.fromBufferAttribute(K,k),C.copy(_);let w=$[k];z.copy(w),z.sub(_.multiplyScalar(_.dot(w))).normalize(),V.crossVectors(C,w);let j=V.dot(Y[k])<0?-1:1;H.setXYZW(k,z.x,z.y,z.z,j)}for(let k=0,w=Z.count;k<w;++k)if(U[k])O(k);this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let Z=this.getAttribute("normal");if(Z===void 0||Z.count!==Q.count)Z=new x9(new Float32Array(Q.count*3),3),this.setAttribute("normal",Z);else for(let E=0,G=Z.count;E<G;E++)Z.setXYZ(E,0,0,0);let K=new S,W=new S,H=new S,$=new S,Y=new S,U=new S,X=new S,N=new S;if(J)for(let E=0,G=J.count;E<G;E+=3){let F=J.getX(E+0),R=J.getX(E+1),B=J.getX(E+2);K.fromBufferAttribute(Q,F),W.fromBufferAttribute(Q,R),H.fromBufferAttribute(Q,B),X.subVectors(H,W),N.subVectors(K,W),X.cross(N),$.fromBufferAttribute(Z,F),Y.fromBufferAttribute(Z,R),U.fromBufferAttribute(Z,B),$.add(X),Y.add(X),U.add(X),Z.setXYZ(F,$.x,$.y,$.z),Z.setXYZ(R,Y.x,Y.y,Y.z),Z.setXYZ(B,U.x,U.y,U.z)}else for(let E=0,G=Q.count;E<G;E+=3)K.fromBufferAttribute(Q,E+0),W.fromBufferAttribute(Q,E+1),H.fromBufferAttribute(Q,E+2),X.subVectors(H,W),N.subVectors(K,W),X.cross(N),Z.setXYZ(E+0,X.x,X.y,X.z),Z.setXYZ(E+1,X.x,X.y,X.z),Z.setXYZ(E+2,X.x,X.y,X.z);this.normalizeNormals(),Z.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,Z=J.count;Q<Z;Q++)v9.fromBufferAttribute(J,Q),v9.normalize(),J.setXYZ(Q,v9.x,v9.y,v9.z)}toNonIndexed(){function J($,Y){let{array:U,itemSize:X,normalized:N}=$,E=new U.constructor(Y.length*X),G=0,F=0;for(let R=0,B=Y.length;R<B;R++){if($.isInterleavedBufferAttribute)G=Y[R]*$.data.stride+$.offset;else G=Y[R]*X;for(let D=0;D<X;D++)E[F++]=U[G++]}return new x9(E,X,N)}if(this.index===null)return v0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new C9,Z=this.index.array,K=this.attributes;for(let $ in K){let Y=K[$],U=J(Y,Z);Q.setAttribute($,U)}let W=this.morphAttributes;for(let $ in W){let Y=[],U=W[$];for(let X=0,N=U.length;X<N;X++){let E=U[X],G=J(E,Z);Y.push(G)}Q.morphAttributes[$]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;for(let $=0,Y=H.length;$<Y;$++){let U=H[$];Q.addGroup(U.start,U.count,U.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let U in Y)if(Y[U]!==void 0)J[U]=Y[U];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let Z=this.attributes;for(let Y in Z){let U=Z[Y];J.data.attributes[Y]=U.toJSON(J.data)}let K={},W=!1;for(let Y in this.morphAttributes){let U=this.morphAttributes[Y],X=[];for(let N=0,E=U.length;N<E;N++){let G=U[N];X.push(G.toJSON(J.data))}if(X.length>0)K[Y]=X,W=!0}if(W)J.data.morphAttributes=K,J.data.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;if(H.length>0)J.data.groups=JSON.parse(JSON.stringify(H));let $=this.boundingSphere;if($!==null)J.data.boundingSphere=$.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let Z=J.index;if(Z!==null)this.setIndex(Z.clone());let K=J.attributes;for(let U in K){let X=K[U];this.setAttribute(U,X.clone(Q))}let W=J.morphAttributes;for(let U in W){let X=[],N=W[U];for(let E=0,G=N.length;E<G;E++)X.push(N[E].clone(Q));this.morphAttributes[U]=X}this.morphTargetsRelative=J.morphTargetsRelative;let H=J.groups;for(let U=0,X=H.length;U<X;U++){let N=H[U];this.addGroup(N.start,N.count,N.materialIndex)}let $=J.boundingBox;if($!==null)this.boundingBox=$.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kK{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=lJ()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,Z){J*=this.stride,Z*=Q.stride;for(let K=0,W=this.stride;K<W;K++)this.array[J+K]=Q.array[Z+K];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};let Q=fW(this.array);if(J.arrayBuffers[Q]===void 0)J.arrayBuffers[Q]=this.array.slice(0).buffer;let Z=new this.array.constructor(J.arrayBuffers[Q]),K=new this.constructor(Z,this.stride);return K.setUsage(this.usage),K}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};let Q=fW(this.array);if(J.arrayBuffers[Q]===void 0)J.arrayBuffers[Q]=Array.from(new Uint32Array(this.array.slice(0).buffer));let Z={uuid:this.uuid,buffer:Q,type:this.array.constructor.name,stride:this.stride};return Z.usage=this.usage,Z}}function fW(J){if(J.buffer._uuid===void 0)J.buffer._uuid=lJ();if(J.byteOffset===0&&J.byteLength===J.buffer.byteLength)return J.buffer._uuid;return J.buffer._uuid+":"+J.byteOffset+":"+J.byteLength}var i9=new S;class T7{constructor(J,Q,Z,K=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=Z,this.normalized=K,this._normalizationScale=J!==void 0?QQ(J.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,Z=this.data.count;Q<Z;Q++)i9.fromBufferAttribute(this,Q),i9.applyMatrix4(J),this.setXYZ(Q,i9.x,i9.y,i9.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)i9.fromBufferAttribute(this,Q),i9.applyNormalMatrix(J),this.setXYZ(Q,i9.x,i9.y,i9.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)i9.fromBufferAttribute(this,Q),i9.transformDirection(J),this.setXYZ(Q,i9.x,i9.y,i9.z);return this}getComponent(J,Q){let Z=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)Z=this._denormalize(Z);return Z}setComponent(J,Q,Z){if(this.normalized)Z=this._normalize(Z);return this.data.array[J*this.data.stride+this.offset+Q]=Z,this}setX(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=this._denormalize(Q);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=this._denormalize(Q);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=this._denormalize(Q);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=this._denormalize(Q);return Q}setXY(J,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),Z=this._normalize(Z);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this}setXYZ(J,Q,Z,K){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),Z=this._normalize(Z),K=this._normalize(K);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=K,this}setXYZW(J,Q,Z,K,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),Z=this._normalize(Z),K=this._normalize(K),W=this._normalize(W);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=K,this.data.array[J+3]=W,this}clone(J){if(J===void 0){w7("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let K=Z*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[K+W])}return new x9(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new T7(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){w7("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let K=Z*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[K+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.max(J/Q,-1):OK(J,this.data.array)}_normalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.round(J*Q):RK(J,this.data.array)}}var ZZ=new S,DU=new S,OU=new h0;class kJ{constructor(J=new S(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,Z,K){return this.normal.set(J,Q,Z),this.constant=K,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,Z){let K=ZZ.subVectors(Z,Q).cross(DU.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(K,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,Z=!0){let K=J.delta(ZZ),W=this.normal.dot(K);if(W===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let H=-(J.start.dot(this.normal)+this.constant)/W;if(Z===!0&&(H<0||H>1))return null;return Q.copy(J.start).addScaledVector(K,H)}intersectsLine(J){let Q=this.distanceToPoint(J.start),Z=this.distanceToPoint(J.end);return Q<0&&Z>0||Z<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let Z=Q||OU.getNormalMatrix(J),K=this.coplanarPoint(ZZ).applyMatrix4(J),W=this.normal.applyMatrix3(Z).normalize();return this.constant=-K.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var RU=0;class uJ extends mJ{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:RU++}),this.uuid=lJ(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new X0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let Z=J[Q];if(Z===void 0){v0(`Material: parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){v0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(K&&K.isColor)K.set(Z);else if(K&&K.isVector2&&(Z&&Z.isVector2)||K&&K.isEuler&&(Z&&Z.isEuler)||K&&K.isVector3&&(Z&&Z.isVector3))K.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let Z={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,Z.blending=this.blending,Z.side=this.side,Z.shadowSide=this.shadowSide,Z.vertexColors=this.vertexColors,Z.opacity=this.opacity,Z.transparent=this.transparent,Z.blendSrc=this.blendSrc,Z.blendDst=this.blendDst,Z.blendEquation=this.blendEquation,Z.blendSrcAlpha=this.blendSrcAlpha,Z.blendDstAlpha=this.blendDstAlpha,Z.blendEquationAlpha=this.blendEquationAlpha,Z.blendColor=this.blendColor.getHex(),Z.blendAlpha=this.blendAlpha,Z.depthFunc=this.depthFunc,Z.depthTest=this.depthTest,Z.depthWrite=this.depthWrite,Z.colorWrite=this.colorWrite,Z.clipIntersection=this.clipIntersection,Z.clipShadows=this.clipShadows,Z.stencilWriteMask=this.stencilWriteMask,Z.stencilFunc=this.stencilFunc,Z.stencilRef=this.stencilRef,Z.stencilFuncMask=this.stencilFuncMask,Z.stencilFail=this.stencilFail,Z.stencilZFail=this.stencilZFail,Z.stencilZPass=this.stencilZPass,Z.stencilWrite=this.stencilWrite,Z.polygonOffset=this.polygonOffset,Z.polygonOffsetFactor=this.polygonOffsetFactor,Z.polygonOffsetUnits=this.polygonOffsetUnits,Z.dithering=this.dithering,Z.alphaTest=this.alphaTest,Z.alphaHash=this.alphaHash,Z.alphaToCoverage=this.alphaToCoverage,Z.premultipliedAlpha=this.premultipliedAlpha,Z.forceSinglePass=this.forceSinglePass,Z.allowOverride=this.allowOverride,Z.visible=this.visible,Z.toneMapped=this.toneMapped,Z.name=this.name,this.color&&this.color.isColor)Z.color=this.color.getHex();if(this.roughness!==void 0)Z.roughness=this.roughness;if(this.metalness!==void 0)Z.metalness=this.metalness;if(this.sheen!==void 0)Z.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Z.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Z.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Z.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)Z.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Z.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Z.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Z.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Z.shininess=this.shininess;if(this.clearcoat!==void 0)Z.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Z.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)Z.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)Z.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(J).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Z.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Z.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Z.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Z.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Z.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Z.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)Z.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)Z.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)Z.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Z.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)Z.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)Z.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Z.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Z.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Z.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Z.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Z.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Z.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Z.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Z.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Z.lightMap=this.lightMap.toJSON(J).uuid,Z.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Z.aoMap=this.aoMap.toJSON(J).uuid,Z.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Z.bumpMap=this.bumpMap.toJSON(J).uuid,Z.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Z.normalMap=this.normalMap.toJSON(J).uuid,Z.normalMapType=this.normalMapType,Z.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Z.displacementMap=this.displacementMap.toJSON(J).uuid,Z.displacementScale=this.displacementScale,Z.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Z.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Z.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Z.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Z.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Z.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Z.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Z.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Z.combine=this.combine}if(this.envMapRotation!==void 0)Z.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Z.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Z.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Z.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Z.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Z.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Z.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Z.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Z.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)Z.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Z.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Z.size=this.size;if(this.sizeAttenuation!==void 0)Z.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)Z.clippingPlanes=this.clippingPlanes.map((W)=>W.toJSON());if(this.rotation!==void 0)Z.rotation=this.rotation;if(this.depthPacking!==void 0)Z.depthPacking=this.depthPacking;if(this.linewidth!==void 0)Z.linewidth=this.linewidth;if(this.linecap!==void 0)Z.linecap=this.linecap;if(this.linejoin!==void 0)Z.linejoin=this.linejoin;if(this.dashSize!==void 0)Z.dashSize=this.dashSize;if(this.gapSize!==void 0)Z.gapSize=this.gapSize;if(this.scale!==void 0)Z.scale=this.scale;if(this.wireframe!==void 0)Z.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)Z.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)Z.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)Z.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)Z.flatShading=this.flatShading;if(this.fog!==void 0)Z.fog=this.fog;if(Object.keys(this.userData).length>0)Z.userData=this.userData;function K(W){let H=[];for(let $ in W){let Y=W[$];delete Y.metadata,H.push(Y)}return H}if(Q){let W=K(J.textures),H=K(J.images);if(W.length>0)Z.textures=W;if(H.length>0)Z.images=H}return Z}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new X0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.diffuseRoughness!==void 0)this.diffuseRoughness=J.diffuseRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessMinimum;if(J.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=J.iridescenceThicknessMaximum;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=J.iridescenceThicknessRange[1];if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map((Z)=>new kJ().fromJSON(Z));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let Z=J.normalScale;if(Array.isArray(Z)===!1)Z=[Z,Z];this.normalScale=new F0().fromArray(Z)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new F0().fromArray(J.clearcoatNormalScale);if(J.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=Q[J.diffuseRoughnessMap]||null;if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,Z=null;if(Q!==null){let K=Q.length;Z=Array(K);for(let W=0;W!==K;++W)Z[W]=Q[W].clone()}return this.clippingPlanes=Z,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class _J extends uJ{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new X0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var g8,M7=new S,p8=new S,m8=new S,l8=new F0,L7=new F0,G$=new J9,k6=new S,V7=new S,B6=new S,bW=new F0,KZ=new F0,hW=new F0;class cJ extends _9{constructor(J=new _J){super();if(this.isSprite=!0,this.type="Sprite",g8===void 0){g8=new C9;let Q=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),Z=new kK(Q,5);g8.setIndex([0,1,2,0,2,3]),g8.setAttribute("position",new T7(Z,3,0,!1)),g8.setAttribute("uv",new T7(Z,2,3,!1))}this.geometry=g8,this.material=J,this.center=new F0(0.5,0.5),this.count=1}intersectsFrustum(J){return J.intersectsSprite(this)}raycast(J,Q){if(J.camera===null)b0('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(p8.setFromMatrixScale(this.matrixWorld),G$.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),m8.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)p8.multiplyScalar(-m8.z);let Z=this.material.rotation,K,W;if(Z!==0)W=Math.cos(Z),K=Math.sin(Z);let H=this.center;I6(k6.set(-0.5,-0.5,0),m8,H,p8,K,W),I6(V7.set(0.5,-0.5,0),m8,H,p8,K,W),I6(B6.set(0.5,0.5,0),m8,H,p8,K,W),bW.set(0,0),KZ.set(1,0),hW.set(1,1);let $=J.ray.intersectTriangle(k6,V7,B6,!1,M7);if($===null){if(I6(V7.set(-0.5,0.5,0),m8,H,p8,K,W),KZ.set(0,1),$=J.ray.intersectTriangle(k6,B6,V7,!1,M7),$===null)return}let Y=J.ray.origin.distanceTo(M7);if(Y<J.near||Y>J.far)return;Q.push({distance:Y,point:M7.clone(),uv:QJ.getInterpolation(M7,k6,V7,B6,bW,KZ,hW,new F0),face:null,object:this})}copy(J,Q){if(super.copy(J,Q),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}toJSON(J){let Q=super.toJSON(J);return Q.object.center=this.center.toArray(),Q}}function I6(J,Q,Z,K,W,H){if(l8.subVectors(J,Z).addScalar(0.5).multiply(K),W!==void 0)L7.x=H*l8.x-W*l8.y,L7.y=W*l8.x+H*l8.y;else L7.copy(l8);J.copy(Q),J.x+=L7.x,J.y+=L7.y,J.applyMatrix4(G$)}var bJ=new S,WZ=new S,z6=new S,P6=new S;class d7{constructor(J=new S,Q=new S(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,bJ)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let Z=Q.dot(this.direction);if(Z<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,Z)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=bJ.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return bJ.copy(this.origin).addScaledVector(this.direction,Q),bJ.distanceToSquared(J)}distanceSqToSegment(J,Q,Z,K){WZ.copy(J).add(Q).multiplyScalar(0.5),z6.copy(Q).sub(J).normalize(),P6.copy(this.origin).sub(WZ);let W=J.distanceTo(Q)*0.5,H=-this.direction.dot(z6),$=P6.dot(this.direction),Y=-P6.dot(z6),U=P6.lengthSq(),X=Math.abs(1-H*H),N,E,G,F;if(X>0)if(N=H*Y-$,E=H*$-Y,F=W*X,N>=0)if(E>=-F)if(E<=F){let R=1/X;N*=R,E*=R,G=N*(N+H*E+2*$)+E*(H*N+E+2*Y)+U}else E=W,N=Math.max(0,-(H*E+$)),G=-N*N+E*(E+2*Y)+U;else E=-W,N=Math.max(0,-(H*E+$)),G=-N*N+E*(E+2*Y)+U;else if(E<=-F)N=Math.max(0,-(-H*W+$)),E=N>0?-W:Math.min(Math.max(-W,-Y),W),G=-N*N+E*(E+2*Y)+U;else if(E<=F)N=0,E=Math.min(Math.max(-W,-Y),W),G=E*(E+2*Y)+U;else N=Math.max(0,-(H*W+$)),E=N>0?W:Math.min(Math.max(-W,-Y),W),G=-N*N+E*(E+2*Y)+U;else E=H>0?-W:W,N=Math.max(0,-(H*E+$)),G=-N*N+E*(E+2*Y)+U;if(Z)Z.copy(this.origin).addScaledVector(this.direction,N);if(K)K.copy(WZ).addScaledVector(z6,E);return G}intersectSphere(J,Q){if(J.radius<0)return null;bJ.subVectors(J.center,this.origin);let Z=bJ.dot(this.direction),K=bJ.dot(bJ)-Z*Z,W=J.radius*J.radius;if(K>W)return null;let H=Math.sqrt(W-K),$=Z-H,Y=Z+H;if(Y<0)return null;if($<0)return this.at(Y,Q);return this.at($,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Z=-(this.origin.dot(J.normal)+J.constant)/Q;return Z>=0?Z:null}intersectPlane(J,Q){let Z=this.distanceToPlane(J);if(Z===null)return null;return this.at(Z,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let Z,K,W,H,$,Y,U=1/this.direction.x,X=1/this.direction.y,N=1/this.direction.z,E=this.origin;if(U>=0)Z=(J.min.x-E.x)*U,K=(J.max.x-E.x)*U;else Z=(J.max.x-E.x)*U,K=(J.min.x-E.x)*U;if(X>=0)W=(J.min.y-E.y)*X,H=(J.max.y-E.y)*X;else W=(J.max.y-E.y)*X,H=(J.min.y-E.y)*X;if(Z>H||W>K)return null;if(W>Z||isNaN(Z))Z=W;if(H<K||isNaN(K))K=H;if(N>=0)$=(J.min.z-E.z)*N,Y=(J.max.z-E.z)*N;else $=(J.max.z-E.z)*N,Y=(J.min.z-E.z)*N;if(Z>Y||$>K)return null;if($>Z||Z!==Z)Z=$;if(Y<K||K!==K)K=Y;if(K<0)return null;return this.at(Z>=0?Z:K,Q)}intersectsBox(J){return this.intersectBox(J,bJ)!==null}intersectTriangle(J,Q,Z,K,W){let H=this.origin,$=this.direction,Y=$.x,U=$.y,X=$.z,N=J.x-H.x,E=J.y-H.y,G=J.z-H.z,F=Q.x-H.x,R=Q.y-H.y,B=Q.z-H.z,D=Z.x-H.x,q=Z.y-H.y,I=Z.z-H.z,z=Math.abs(Y),V=Math.abs(U),_=Math.abs(X),C,O,k,w,g,j,p,o,A,u,r,x;if(z>=V&&z>=_)if(k=Y,j=N,A=F,x=D,Y>=0)C=U,O=X,w=E,g=G,p=R,o=B,u=q,r=I;else C=X,O=U,w=G,g=E,p=B,o=R,u=I,r=q;else if(V>=_)if(k=U,j=E,A=R,x=q,U>=0)C=X,O=Y,w=G,g=N,p=B,o=F,u=I,r=D;else C=Y,O=X,w=N,g=G,p=F,o=B,u=D,r=I;else if(k=X,j=G,A=B,x=I,X>=0)C=Y,O=U,w=N,g=E,p=F,o=R,u=D,r=q;else C=U,O=Y,w=E,g=N,p=R,o=F,u=q,r=D;if(k===0)return null;let Y0=C/k,c=O/k,e=1/k,W0=w-Y0*j,C0=g-c*j,a=p-Y0*A,K0=o-c*A,z0=u-Y0*x,j0=r-c*x,y0=z0*K0-j0*a,P0=W0*j0-C0*z0,Z9=a*C0-K0*W0;if(K){if(y0<0||P0<0||Z9<0)return null}else if((y0<0||P0<0||Z9<0)&&(y0>0||P0>0||Z9>0))return null;let n0=y0+P0+Z9;if(n0===0)return null;let p0=e*(y0*j+P0*A+Z9*x);if(n0>0?p0<0:p0>0)return null;return this.at(p0/n0,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class BK extends uJ{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new X0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xJ,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var xW=new J9,q8=new d7,_6=new K8,gW=new S,C6=new S,A6=new S,w6=new S,HZ=new S,T6=new S,pW=new S,S6=new S;class Q0 extends _9{constructor(J=new C9,Q=new BK){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let K=Q[Z[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=K.length;W<H;W++){let $=K[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[$]=W}}}}getVertexPosition(J,Q){let Z=this.geometry,K=Z.attributes.position,W=Z.morphAttributes.position,H=Z.morphTargetsRelative;Q.fromBufferAttribute(K,J);let $=this.morphTargetInfluences;if(W&&$){T6.set(0,0,0);for(let Y=0,U=W.length;Y<U;Y++){let X=$[Y],N=W[Y];if(X===0)continue;if(HZ.fromBufferAttribute(N,J),H)T6.addScaledVector(HZ,X);else T6.addScaledVector(HZ.sub(Q),X)}Q.add(T6)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let Z=this.geometry,K=this.material,W=this.matrixWorld;if(K===void 0)return;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(_6.copy(Z.boundingSphere),_6.applyMatrix4(W),q8.copy(J.ray).recast(J.near),_6.containsPoint(q8.origin)===!1){if(q8.intersectSphere(_6,gW)===null)return;if(q8.origin.distanceToSquared(gW)>(J.far-J.near)**2)return}if(xW.copy(W).invert(),q8.copy(J.ray).applyMatrix4(xW),Z.boundingBox!==null){if(q8.intersectsBox(Z.boundingBox)===!1)return}this._computeIntersections(J,Q,q8)}_computeIntersections(J,Q,Z){let K,W=this.geometry,H=this.material,$=W.index,Y=W.attributes.position,U=W.attributes.uv,X=W.attributes.uv1,N=W.attributes.normal,E=W.groups,G=W.drawRange;if($!==null)if(Array.isArray(H))for(let F=0,R=E.length;F<R;F++){let B=E[F],D=H[B.materialIndex],q=Math.max(B.start,G.start),I=Math.min($.count,Math.min(B.start+B.count,G.start+G.count));for(let z=q,V=I;z<V;z+=3){let _=$.getX(z),C=$.getX(z+1),O=$.getX(z+2);if(K=j6(this,D,J,Z,U,X,N,_,C,O),K)K.faceIndex=Math.floor(z/3),K.face.materialIndex=B.materialIndex,Q.push(K)}}else{let F=Math.max(0,G.start),R=Math.min($.count,G.start+G.count);for(let B=F,D=R;B<D;B+=3){let q=$.getX(B),I=$.getX(B+1),z=$.getX(B+2);if(K=j6(this,H,J,Z,U,X,N,q,I,z),K)K.faceIndex=Math.floor(B/3),Q.push(K)}}else if(Y!==void 0)if(Array.isArray(H))for(let F=0,R=E.length;F<R;F++){let B=E[F],D=H[B.materialIndex],q=Math.max(B.start,G.start),I=Math.min(Y.count,Math.min(B.start+B.count,G.start+G.count));for(let z=q,V=I;z<V;z+=3){let _=z,C=z+1,O=z+2;if(K=j6(this,D,J,Z,U,X,N,_,C,O),K)K.faceIndex=Math.floor(z/3),K.face.materialIndex=B.materialIndex,Q.push(K)}}else{let F=Math.max(0,G.start),R=Math.min(Y.count,G.start+G.count);for(let B=F,D=R;B<D;B+=3){let q=B,I=B+1,z=B+2;if(K=j6(this,H,J,Z,U,X,N,q,I,z),K)K.faceIndex=Math.floor(B/3),Q.push(K)}}}}function MU(J,Q,Z,K,W,H,$,Y){let U;if(Q.side===1)U=K.intersectTriangle($,H,W,!0,Y);else U=K.intersectTriangle(W,H,$,Q.side===0,Y);if(U===null)return null;S6.copy(Y),S6.applyMatrix4(J.matrixWorld);let X=Z.ray.origin.distanceTo(S6);if(X<Z.near||X>Z.far)return null;return{distance:X,point:S6.clone(),object:J}}function j6(J,Q,Z,K,W,H,$,Y,U,X){J.getVertexPosition(Y,C6),J.getVertexPosition(U,A6),J.getVertexPosition(X,w6);let N=MU(J,Q,Z,K,C6,A6,w6,pW);if(N){let E=new S;if(QJ.getBarycoord(pW,C6,A6,w6,E),W)N.uv=QJ.getInterpolatedAttribute(W,Y,U,X,E,new F0);if(H)N.uv1=QJ.getInterpolatedAttribute(H,Y,U,X,E,new F0);if($){if(N.normal=QJ.getInterpolatedAttribute($,Y,U,X,E,new S),N.normal.dot(K.direction)>0)N.normal.multiplyScalar(-1)}let G={a:Y,b:U,c:X,normal:new S,materialIndex:0};QJ.getNormal(C6,A6,w6,G.normal),N.face=G,N.barycoord=E}return N}class HQ extends y9{constructor(J=null,Q=1,Z=1,K,W,H,$,Y,U=1003,X=1003,N,E){super(null,H,$,Y,U,X,K,W,N,E);this.isDataTexture=!0,this.image={data:J,width:Q,height:Z},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class d6 extends x9{constructor(J,Q,Z,K=1){super(J,Q,Z);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=K}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var d8=new J9,mW=new J9,v6=[],lW=new dJ,LU=new J9,k7=new Q0,B7=new K8;class $Q extends Q0{constructor(J,Q,Z){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new d6(new Float32Array(Z*16),16),this.instanceColor=null,this.morphTexture=null,this.count=Z,this.boundingBox=null,this.boundingSphere=null;for(let K=0;K<Z;K++)this.setMatrixAt(K,LU)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new dJ;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let Z=0;Z<Q;Z++)this.getMatrixAt(Z,d8),lW.copy(J.boundingBox).applyMatrix4(d8),this.boundingBox.union(lW)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new K8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let Z=0;Z<Q;Z++)this.getMatrixAt(Z,d8),B7.copy(J.boundingSphere).applyMatrix4(d8),this.boundingSphere.union(B7)}copy(J,Q){return super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),this.morphTexture=J.morphTexture!==null?J.morphTexture.clone():null,this.instanceColor=J.instanceColor!==null?J.instanceColor.clone():null,this.count=J.count,this.boundingBox=J.boundingBox!==null?J.boundingBox.clone():null,this.boundingSphere=J.boundingSphere!==null?J.boundingSphere.clone():null,this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let Z=Q.morphTargetInfluences,K=this.morphTexture.source.data.data,W=Z.length+1,H=J*W+1;for(let $=0;$<Z.length;$++)Z[$]=K[H+$]}raycast(J,Q){let Z=this.matrixWorld,K=this.count;if(k7.geometry=this.geometry,k7.material=this.material,k7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(B7.copy(this.boundingSphere),B7.applyMatrix4(Z),J.ray.intersectsSphere(B7)===!1)return;for(let W=0;W<K;W++){this.getMatrixAt(W,d8),mW.multiplyMatrices(Z,d8),k7.matrixWorld=mW,k7.raycast(J,v6);for(let H=0,$=v6.length;H<$;H++){let Y=v6[H];Y.instanceId=W,Y.object=this,Q.push(Y)}v6.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new d6(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let Z=Q.morphTargetInfluences,K=Z.length+1;if(this.morphTexture===null)this.morphTexture=new HQ(new Float32Array(K*this.count),K,this.count,1028,1015);let W=this.morphTexture.source.data.data,H=0;for(let U=0;U<Z.length;U++)H+=Z[U];let $=this.geometry.morphTargetsRelative?1:1-H,Y=K*J;return W[Y]=$,W.set(Z,Y+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var F8=new K8,VU=new F0(0.5,0.5),y6=new S;class D8{constructor(J=new kJ,Q=new kJ,Z=new kJ,K=new kJ,W=new kJ,H=new kJ){this.planes=[J,Q,Z,K,W,H]}set(J,Q,Z,K,W,H){let $=this.planes;return $[0].copy(J),$[1].copy(Q),$[2].copy(Z),$[3].copy(K),$[4].copy(W),$[5].copy(H),this}copy(J){let Q=this.planes;for(let Z=0;Z<6;Z++)Q[Z].copy(J.planes[Z]);return this}setFromProjectionMatrix(J,Q=2000,Z=!1){let K=this.planes,W=J.elements,H=W[0],$=W[1],Y=W[2],U=W[3],X=W[4],N=W[5],E=W[6],G=W[7],F=W[8],R=W[9],B=W[10],D=W[11],q=W[12],I=W[13],z=W[14],V=W[15];if(K[0].setComponents(U-H,G-X,D-F,V-q).normalize(),K[1].setComponents(U+H,G+X,D+F,V+q).normalize(),K[2].setComponents(U+$,G+N,D+R,V+I).normalize(),K[3].setComponents(U-$,G-N,D-R,V-I).normalize(),Z)K[4].setComponents(Y,E,B,z).normalize(),K[5].setComponents(U-Y,G-E,D-B,V-z).normalize();else if(K[4].setComponents(U-Y,G-E,D-B,V-z).normalize(),Q===2000)K[5].setComponents(U+Y,G+E,D+B,V+z).normalize();else if(Q===2001)K[5].setComponents(Y,E,B,z).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();F8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();F8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(F8)}intersectsSprite(J){F8.center.set(0,0,0);let Q=VU.distanceTo(J.center);return F8.radius=0.7071067811865476+Q,F8.applyMatrix4(J.matrixWorld),this.intersectsSphere(F8)}intersectsSphere(J){let Q=this.planes,Z=J.center,K=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint(Z)<K)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let Z=0;Z<6;Z++){let K=Q[Z];if(y6.x=K.normal.x>0?J.max.x:J.min.x,y6.y=K.normal.y>0?J.max.y:J.min.y,y6.z=K.normal.z>0?J.max.z:J.min.z,K.distanceToPoint(y6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var dW=new J9;class YQ{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(J){let Q=J.cameras,Z=this._frustums;for(let K=0;K<Q.length;K++){let W=Q[K];if(dW.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z[K]===void 0)Z[K]=new D8;Z[K].setFromProjectionMatrix(dW,W.coordinateSystem,W.reversedDepth)}return this._count=Q.length,this}getFrustum(J){return this._frustums[J]}intersectsObject(J){let Q=this._frustums;for(let Z=0;Z<this._count;Z++)if(Q[Z].intersectsObject(J))return!0;return!1}intersectsSprite(J){let Q=this._frustums;for(let Z=0;Z<this._count;Z++)if(Q[Z].intersectsSprite(J))return!0;return!1}intersectsSphere(J){let Q=this._frustums;for(let Z=0;Z<this._count;Z++)if(Q[Z].intersectsSphere(J))return!0;return!1}intersectsBox(J){let Q=this._frustums;for(let Z=0;Z<this._count;Z++)if(Q[Z].intersectsBox(J))return!0;return!1}containsPoint(J){let Q=this._frustums;for(let Z=0;Z<this._count;Z++)if(Q[Z].containsPoint(J))return!0;return!1}copy(J){this.coordinateSystem=J.coordinateSystem;let Q=this._frustums,Z=J._frustums;for(let K=0;K<J._count;K++){if(Q[K]===void 0)Q[K]=new D8;Q[K].copy(Z[K])}return this._count=J._count,this}clone(){return new YQ().copy(this)}}class u7 extends uJ{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new X0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var uW=new J9,GZ=new d7,f6=new K8,b6=new S;class $7 extends _9{constructor(J=new C9,Q=new u7){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let Z=this.geometry,K=this.matrixWorld,W=J.params.Points.threshold,H=Z.drawRange;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(f6.copy(Z.boundingSphere),f6.applyMatrix4(K),f6.radius+=W,J.ray.intersectsSphere(f6)===!1)return;uW.copy(K).invert(),GZ.copy(J.ray).applyMatrix4(uW);let $=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=$*$,U=Z.index,N=Z.attributes.position;if(U!==null){let E=Math.max(0,H.start),G=Math.min(U.count,H.start+H.count);for(let F=E,R=G;F<R;F++){let B=U.getX(F);b6.fromBufferAttribute(N,B),cW(b6,B,Y,K,J,Q,this)}}else{let E=Math.max(0,H.start),G=Math.min(N.count,H.start+H.count);for(let F=E,R=G;F<R;F++)b6.fromBufferAttribute(N,F),cW(b6,F,Y,K,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let K=Q[Z[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=K.length;W<H;W++){let $=K[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[$]=W}}}}}function cW(J,Q,Z,K,W,H,$){let Y=GZ.distanceSqToPoint(J);if(Y<Z){let U=new S;GZ.closestPointToPoint(J,U),U.applyMatrix4(K);let X=W.ray.origin.distanceTo(U);if(X<W.near||X>W.far)return;H.push({distance:X,distanceToRay:Math.sqrt(Y),point:U,index:Q,face:null,faceIndex:null,barycoord:null,object:$})}}class UQ extends y9{constructor(J=[],Q=301,Z,K,W,H,$,Y,U,X){super(J,Q,Z,K,W,H,$,Y,U,X);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class Y7 extends y9{constructor(J,Q,Z,K,W,H,$,Y,U){super(J,Q,Z,K,W,H,$,Y,U);this.isCanvasTexture=!0,this.needsUpdate=!0}}class W8 extends y9{constructor(J,Q,Z=1014,K,W,H,$=1003,Y=1003,U,X=1026,N=1){if(X!==1026&&X!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:J,height:Q,depth:N};super(E,K,W,H,$,Y,X,Z,U);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new g7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class XQ extends W8{constructor(J,Q=1014,Z=301,K,W,H=1003,$=1003,Y,U=1026){let X={width:J,height:J,depth:1},N=[X,X,X,X,X,X];super(J,J,Q,Z,K,W,H,$,Y,U);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class GQ extends y9{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class u0 extends C9{constructor(J=1,Q=1,Z=1,K=1,W=1,H=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:Z,widthSegments:K,heightSegments:W,depthSegments:H};let $=this;K=Math.floor(K),W=Math.floor(W),H=Math.floor(H);let Y=[],U=[],X=[],N=[],E=0,G=0;F("z","y","x",-1,-1,Z,Q,J,H,W,0),F("z","y","x",1,-1,Z,Q,-J,H,W,1),F("x","z","y",1,1,J,Z,Q,K,H,2),F("x","z","y",1,-1,J,Z,-Q,K,H,3),F("x","y","z",1,-1,J,Q,Z,K,W,4),F("x","y","z",-1,-1,J,Q,-Z,K,W,5),this.setIndex(Y),this.setAttribute("position",new W9(U,3)),this.setAttribute("normal",new W9(X,3)),this.setAttribute("uv",new W9(N,2));function F(R,B,D,q,I,z,V,_,C,O,k){let w=z/C,g=V/O,j=z/2,p=V/2,o=_/2,A=C+1,u=O+1,r=0,x=0,Y0=new S;for(let c=0;c<u;c++){let e=c*g-p;for(let W0=0;W0<A;W0++){let C0=W0*w-j;Y0[R]=C0*q,Y0[B]=e*I,Y0[D]=o,U.push(Y0.x,Y0.y,Y0.z),Y0[R]=0,Y0[B]=0,Y0[D]=_>0?1:-1,X.push(Y0.x,Y0.y,Y0.z),N.push(W0/C),N.push(1-c/O),r+=1}}for(let c=0;c<O;c++)for(let e=0;e<C;e++){let W0=E+e+A*c,C0=E+e+A*(c+1),a=E+(e+1)+A*(c+1),K0=E+(e+1)+A*c;Y.push(W0,C0,K0),Y.push(C0,a,K0),x+=6}$.addGroup(G,x,k),G+=x,E+=r}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new u0(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class H8 extends C9{constructor(J=1,Q=32,Z=0,K=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:Z,thetaLength:K},Q=Math.max(3,Q);let W=[],H=[],$=[],Y=[],U=new S,X=new F0;H.push(0,0,0),$.push(0,0,1),Y.push(0.5,0.5);for(let N=0,E=3;N<=Q;N++,E+=3){let G=Z+N/Q*K;U.x=J*Math.cos(G),U.y=J*Math.sin(G),H.push(U.x,U.y,U.z),$.push(0,0,1),X.x=(H[E]/J+1)/2,X.y=(H[E+1]/J+1)/2,Y.push(X.x,X.y)}for(let N=1;N<=Q;N++)W.push(N,N+1,0);this.setIndex(W),this.setAttribute("position",new W9(H,3)),this.setAttribute("normal",new W9($,3)),this.setAttribute("uv",new W9(Y,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new H8(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class L9 extends C9{constructor(J=1,Q=1,Z=1,K=32,W=1,H=!1,$=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:Z,radialSegments:K,heightSegments:W,openEnded:H,thetaStart:$,thetaLength:Y};let U=this;K=Math.floor(K),W=Math.floor(W);let X=[],N=[],E=[],G=[],F=0,R=[],B=Z/2,D=0;if(q(),H===!1){if(J>0)I(!0);if(Q>0)I(!1)}this.setIndex(X),this.setAttribute("position",new W9(N,3)),this.setAttribute("normal",new W9(E,3)),this.setAttribute("uv",new W9(G,2));function q(){let z=new S,V=new S,_=0,C=(Q-J)/Z;for(let O=0;O<=W;O++){let k=[],w=O/W,g=w*(Q-J)+J;for(let j=0;j<=K;j++){let p=j/K,o=p*Y+$,A=Math.sin(o),u=Math.cos(o);V.x=g*A,V.y=-w*Z+B,V.z=g*u,N.push(V.x,V.y,V.z),z.set(A,C,u).normalize(),E.push(z.x,z.y,z.z),G.push(p,1-w),k.push(F++)}R.push(k)}for(let O=0;O<K;O++)for(let k=0;k<W;k++){let w=R[k][O],g=R[k+1][O],j=R[k+1][O+1],p=R[k][O+1];if(J>0||k!==0)X.push(w,g,p),_+=3;if(Q>0||k!==W-1)X.push(g,j,p),_+=3}U.addGroup(D,_,0),D+=_}function I(z){let V=F,_=new F0,C=new S,O=0,k=z===!0?J:Q,w=z===!0?1:-1;for(let j=1;j<=K;j++)N.push(0,B*w,0),E.push(0,w,0),G.push(0.5,0.5),F++;let g=F;for(let j=0;j<=K;j++){let o=j/K*Y+$,A=Math.cos(o),u=Math.sin(o);C.x=k*u,C.y=B*w,C.z=k*A,N.push(C.x,C.y,C.z),E.push(0,w,0),_.x=A*0.5+0.5,_.y=u*0.5*w+0.5,G.push(_.x,_.y),F++}for(let j=0;j<K;j++){let p=V+j,o=g+j;if(z===!0)X.push(o,o+1,p);else X.push(o+1,o,p);O+=3}U.addGroup(D,O,z===!0?1:2),D+=O}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new L9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class ZJ extends L9{constructor(J=1,Q=1,Z=32,K=1,W=!1,H=0,$=Math.PI*2){super(0,J,Q,Z,K,W,H,$);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:H,thetaLength:$}}static fromJSON(J){return new ZJ(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class c7 extends C9{constructor(J=[],Q=[],Z=1,K=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:Z,detail:K};let W=[],H=[];if($(K),U(Z),X(),this.setAttribute("position",new W9(W,3)),this.setAttribute("normal",new W9(W.slice(),3)),this.setAttribute("uv",new W9(H,2)),K===0)this.computeVertexNormals();else this.normalizeNormals();function $(q){let I=new S,z=new S,V=new S;for(let _=0;_<Q.length;_+=3)G(Q[_+0],I),G(Q[_+1],z),G(Q[_+2],V),Y(I,z,V,q)}function Y(q,I,z,V){let _=V+1,C=[];for(let O=0;O<=_;O++){C[O]=[];let k=q.clone().lerp(z,O/_),w=I.clone().lerp(z,O/_),g=_-O;for(let j=0;j<=g;j++)if(j===0&&O===_)C[O][j]=k;else C[O][j]=k.clone().lerp(w,j/g)}for(let O=0;O<_;O++)for(let k=0;k<2*(_-O)-1;k++){let w=Math.floor(k/2);if(k%2===0)E(C[O][w+1]),E(C[O+1][w]),E(C[O][w]);else E(C[O][w+1]),E(C[O+1][w+1]),E(C[O+1][w])}}function U(q){let I=new S;for(let z=0;z<W.length;z+=3)I.x=W[z+0],I.y=W[z+1],I.z=W[z+2],I.normalize().multiplyScalar(q),W[z+0]=I.x,W[z+1]=I.y,W[z+2]=I.z}function X(){let q=new S;for(let I=0;I<W.length;I+=3){q.x=W[I+0],q.y=W[I+1],q.z=W[I+2];let z=B(q)/2/Math.PI+0.5,V=D(q)/Math.PI+0.5;H.push(z,1-V)}F(),N()}function N(){for(let q=0;q<H.length;q+=6){let I=H[q+0],z=H[q+2],V=H[q+4],_=Math.max(I,z,V),C=Math.min(I,z,V);if(_>0.9&&C<0.1){if(I<0.2)H[q+0]+=1;if(z<0.2)H[q+2]+=1;if(V<0.2)H[q+4]+=1}}}function E(q){W.push(q.x,q.y,q.z)}function G(q,I){let z=q*3;I.x=J[z+0],I.y=J[z+1],I.z=J[z+2]}function F(){let q=new S,I=new S,z=new S,V=new S,_=new F0,C=new F0,O=new F0;for(let k=0,w=0;k<W.length;k+=9,w+=6){q.set(W[k+0],W[k+1],W[k+2]),I.set(W[k+3],W[k+4],W[k+5]),z.set(W[k+6],W[k+7],W[k+8]),_.set(H[w+0],H[w+1]),C.set(H[w+2],H[w+3]),O.set(H[w+4],H[w+5]),V.copy(q).add(I).add(z).divideScalar(3);let g=B(V);R(_,w+0,q,g),R(C,w+2,I,g),R(O,w+4,z,g)}}function R(q,I,z,V){if(V<0&&q.x===1)H[I]=q.x-1;if(z.x===0&&z.z===0)H[I]=V/2/Math.PI+0.5}function B(q){return Math.atan2(q.z,-q.x)}function D(q){return Math.atan2(-q.y,Math.sqrt(q.x*q.x+q.z*q.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new c7(J.vertices,J.indices,J.radius,J.detail)}}class XJ{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){v0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let Z=this.getUtoTmapping(J);return this.getPoint(Z,Q)}getPoints(J=5){let Q=[];for(let Z=0;Z<=J;Z++)Q.push(this.getPoint(Z/J));return Q}getSpacedPoints(J=5){let Q=[];for(let Z=0;Z<=J;Z++)Q.push(this.getPointAt(Z/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],Z,K=this.getPoint(0),W=0;Q.push(0);for(let H=1;H<=J;H++)Z=this.getPoint(H/J),W+=Z.distanceTo(K),Q.push(W),K=Z;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let Z=this.getLengths(),K=0,W=Z.length,H;if(Q)H=Q;else H=J*Z[W-1];let $=0,Y=W-1,U;while($<=Y)if(K=Math.floor($+(Y-$)/2),U=Z[K]-H,U<0)$=K+1;else if(U>0)Y=K-1;else{Y=K;break}if(K=Y,Z[K]===H)return K/(W-1);let X=Z[K],E=Z[K+1]-X,G=(H-X)/E;return(K+G)/(W-1)}getTangent(J,Q){let K=J-0.0001,W=J+0.0001;if(K<0)K=0;if(W>1)W=1;let H=this.getPoint(K),$=this.getPoint(W),Y=Q||(H.isVector2?new F0:new S);return Y.copy($).sub(H).normalize(),Y}getTangentAt(J,Q){let Z=this.getUtoTmapping(J);return this.getTangent(Z,Q)}computeFrenetFrames(J,Q=!1){let Z=new S,K=[],W=[],H=[],$=new S,Y=new J9;for(let G=0;G<=J;G++){let F=G/J;K[G]=this.getTangentAt(F,new S)}W[0]=new S,H[0]=new S;let U=Number.MAX_VALUE,X=Math.abs(K[0].x),N=Math.abs(K[0].y),E=Math.abs(K[0].z);if(X<=U)U=X,Z.set(1,0,0);if(N<=U)U=N,Z.set(0,1,0);if(E<=U)Z.set(0,0,1);$.crossVectors(K[0],Z).normalize(),W[0].crossVectors(K[0],$),H[0].crossVectors(K[0],W[0]);for(let G=1;G<=J;G++){if(W[G]=W[G-1].clone(),H[G]=H[G-1].clone(),$.crossVectors(K[G-1],K[G]),$.length()>Number.EPSILON){$.normalize();let F=Math.acos(s0(K[G-1].dot(K[G]),-1,1));W[G].applyMatrix4(Y.makeRotationAxis($,F))}H[G].crossVectors(K[G],W[G])}if(Q===!0){let G=Math.acos(s0(W[0].dot(W[J]),-1,1));if(G/=J,K[0].dot($.crossVectors(W[0],W[J]))>0)G=-G;for(let F=1;F<=J;F++)W[F].applyMatrix4(Y.makeRotationAxis(K[F],G*F)),H[F].crossVectors(K[F],W[F])}return{tangents:K,normals:W,binormals:H}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this.cacheArcLengths=null,this}}class n7 extends XJ{constructor(J=0,Q=0,Z=1,K=1,W=0,H=Math.PI*2,$=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=Z,this.yRadius=K,this.aStartAngle=W,this.aEndAngle=H,this.aClockwise=$,this.aRotation=Y}getPoint(J,Q=new F0){let Z=Q,K=Math.PI*2,W=this.aEndAngle-this.aStartAngle,H=Math.abs(W)<Number.EPSILON;while(W<0)W+=K;while(W>K)W-=K;if(W<Number.EPSILON)if(H)W=0;else W=K;if(this.aClockwise===!0&&!H)if(W===K)W=-K;else W=W-K;let $=this.aStartAngle+J*W,Y=this.aX+this.xRadius*Math.cos($),U=this.aY+this.yRadius*Math.sin($);if(this.aRotation!==0){let X=Math.cos(this.aRotation),N=Math.sin(this.aRotation),E=Y-this.aX,G=U-this.aY;Y=E*X-G*N+this.aX,U=E*N+G*X+this.aY}return Z.set(Y,U)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class IK extends n7{constructor(J,Q,Z,K,W,H){super(J,Q,Z,Z,K,W,H);this.isArcCurve=!0,this.type="ArcCurve"}}function zK(){let J=0,Q=0,Z=0,K=0;function W(H,$,Y,U){J=H,Q=Y,Z=-3*H+3*$-2*Y-U,K=2*H-2*$+Y+U}return{initCatmullRom:function(H,$,Y,U,X){W($,Y,X*(Y-H),X*(U-$))},initNonuniformCatmullRom:function(H,$,Y,U,X,N,E){let G=($-H)/X-(Y-H)/(X+N)+(Y-$)/N,F=(Y-$)/N-(U-$)/(N+E)+(U-Y)/E;G*=N,F*=N,W($,Y,G,F)},calc:function(H){let $=H*H,Y=$*H;return J+Q*H+Z*$+K*Y}}}var nW=new S,sW=new S,$Z=new zK,YZ=new zK,UZ=new zK;class PK extends XJ{constructor(J=[],Q=!1,Z="centripetal",K=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=Z,this.tension=K}getPoint(J,Q=new S){let Z=Q,K=this.points,W=K.length,H=(W-(this.closed?0:1))*J,$=Math.floor(H),Y=H-$;if(this.closed)$+=$>0?0:(Math.floor(Math.abs($)/W)+1)*W;else if(Y===0&&$===W-1)$=W-2,Y=1;let U,X;if(this.closed||$>0)U=K[($-1)%W];else sW.subVectors(K[0],K[1]).add(K[0]),U=sW;let N=K[$%W],E=K[($+1)%W];if(this.closed||$+2<W)X=K[($+2)%W];else nW.subVectors(K[W-1],K[W-2]).add(K[W-1]),X=nW;if(this.curveType==="centripetal"||this.curveType==="chordal"){let G=this.curveType==="chordal"?0.5:0.25,F=Math.pow(U.distanceToSquared(N),G),R=Math.pow(N.distanceToSquared(E),G),B=Math.pow(E.distanceToSquared(X),G);if(R<0.0001)R=1;if(F<0.0001)F=R;if(B<0.0001)B=R;$Z.initNonuniformCatmullRom(U.x,N.x,E.x,X.x,F,R,B),YZ.initNonuniformCatmullRom(U.y,N.y,E.y,X.y,F,R,B),UZ.initNonuniformCatmullRom(U.z,N.z,E.z,X.z,F,R,B)}else if(this.curveType==="catmullrom")$Z.initCatmullRom(U.x,N.x,E.x,X.x,this.tension),YZ.initCatmullRom(U.y,N.y,E.y,X.y,this.tension),UZ.initCatmullRom(U.z,N.z,E.z,X.z,this.tension);return Z.set($Z.calc(Y),YZ.calc(Y),UZ.calc(Y)),Z}copy(J){super.copy(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let K=J.points[Q];this.points.push(K.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,Z=this.points.length;Q<Z;Q++){let K=this.points[Q];J.points.push(K.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let K=J.points[Q];this.points.push(new S().fromArray(K))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function iW(J,Q,Z,K,W){let H=(K-Q)*0.5,$=(W-Z)*0.5,Y=J*J,U=J*Y;return(2*Z-2*K+H+$)*U+(-3*Z+3*K-2*H-$)*Y+H*J+Z}function kU(J,Q){let Z=1-J;return Z*Z*Q}function BU(J,Q){return 2*(1-J)*J*Q}function IU(J,Q){return J*J*Q}function C7(J,Q,Z,K){return kU(J,Q)+BU(J,Z)+IU(J,K)}function zU(J,Q){let Z=1-J;return Z*Z*Z*Q}function PU(J,Q){let Z=1-J;return 3*Z*Z*J*Q}function _U(J,Q){return 3*(1-J)*J*J*Q}function CU(J,Q){return J*J*J*Q}function A7(J,Q,Z,K,W){return zU(J,Q)+PU(J,Z)+_U(J,K)+CU(J,W)}class NQ extends XJ{constructor(J=new F0,Q=new F0,Z=new F0,K=new F0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=Z,this.v3=K}getPoint(J,Q=new F0){let Z=Q,K=this.v0,W=this.v1,H=this.v2,$=this.v3;return Z.set(A7(J,K.x,W.x,H.x,$.x),A7(J,K.y,W.y,H.y,$.y)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class _K extends XJ{constructor(J=new S,Q=new S,Z=new S,K=new S){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=Z,this.v3=K}getPoint(J,Q=new S){let Z=Q,K=this.v0,W=this.v1,H=this.v2,$=this.v3;return Z.set(A7(J,K.x,W.x,H.x,$.x),A7(J,K.y,W.y,H.y,$.y),A7(J,K.z,W.z,H.z,$.z)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class EQ extends XJ{constructor(J=new F0,Q=new F0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new F0){let Z=Q;if(J===1)Z.copy(this.v2);else Z.copy(this.v2).sub(this.v1),Z.multiplyScalar(J).add(this.v1);return Z}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new F0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class CK extends XJ{constructor(J=new S,Q=new S){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new S){let Z=Q;if(J===1)Z.copy(this.v2);else Z.copy(this.v2).sub(this.v1),Z.multiplyScalar(J).add(this.v1);return Z}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new S){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class qQ extends XJ{constructor(J=new F0,Q=new F0,Z=new F0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=Z}getPoint(J,Q=new F0){let Z=Q,K=this.v0,W=this.v1,H=this.v2;return Z.set(C7(J,K.x,W.x,H.x),C7(J,K.y,W.y,H.y)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class AK extends XJ{constructor(J=new S,Q=new S,Z=new S){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=Z}getPoint(J,Q=new S){let Z=Q,K=this.v0,W=this.v1,H=this.v2;return Z.set(C7(J,K.x,W.x,H.x),C7(J,K.y,W.y,H.y),C7(J,K.z,W.z,H.z)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class FQ extends XJ{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new F0){let Z=Q,K=this.points,W=(K.length-1)*J,H=Math.floor(W),$=W-H,Y=K[H===0?H:H-1],U=K[H],X=K[H>K.length-2?K.length-1:H+1],N=K[H>K.length-3?K.length-1:H+2];return Z.set(iW($,Y.x,U.x,X.x,N.x),iW($,Y.y,U.y,X.y,N.y)),Z}copy(J){super.copy(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let K=J.points[Q];this.points.push(K.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,Z=this.points.length;Q<Z;Q++){let K=this.points[Q];J.points.push(K.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let K=J.points[Q];this.points.push(new F0().fromArray(K))}return this}}var oW=Object.freeze({__proto__:null,ArcCurve:IK,CatmullRomCurve3:PK,CubicBezierCurve:NQ,CubicBezierCurve3:_K,EllipseCurve:n7,LineCurve:EQ,LineCurve3:CK,QuadraticBezierCurve:qQ,QuadraticBezierCurve3:AK,SplineCurve:FQ});class wK extends XJ{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let Z=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oW[Z](Q,J))}return this}getPoint(J,Q){let Z=J*this.getLength(),K=this.getCurveLengths(),W=0;while(W<K.length){if(K[W]>=Z){let H=K[W]-Z,$=this.curves[W],Y=$.getLength(),U=Y===0?0:1-H/Y;return $.getPointAt(U,Q)}W++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let Z=0,K=this.curves.length;Z<K;Z++)Q+=this.curves[Z].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let Z=0;Z<=J;Z++)Q.push(this.getPoint(Z/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],Z;for(let K=0,W=this.curves;K<W.length;K++){let H=W[K],$=H.isEllipseCurve?J*2:H.isLineCurve||H.isLineCurve3?1:H.isSplineCurve?J*H.points.length:J,Y=H.getPoints($);for(let U=0;U<Y.length;U++){let X=Y[U];if(Z&&Z.equals(X))continue;Q.push(X),Z=X}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,Z=J.curves.length;Q<Z;Q++){let K=J.curves[Q];this.curves.push(K.clone())}return this.autoClose=J.autoClose,this.cacheLengths=null,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,Z=this.curves.length;Q<Z;Q++){let K=this.curves[Q];J.curves.push(K.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,Z=J.curves.length;Q<Z;Q++){let K=J.curves[Q];this.curves.push(new oW[K.type]().fromJSON(K))}return this.cacheLengths=null,this}}class u6 extends wK{constructor(J){super();if(this.type="Path",this.currentPoint=new F0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,Z=J.length;Q<Z;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let Z=new EQ(this.currentPoint.clone(),new F0(J,Q));return this.curves.push(Z),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,Z,K){let W=new qQ(this.currentPoint.clone(),new F0(J,Q),new F0(Z,K));return this.curves.push(W),this.currentPoint.set(Z,K),this}bezierCurveTo(J,Q,Z,K,W,H){let $=new NQ(this.currentPoint.clone(),new F0(J,Q),new F0(Z,K),new F0(W,H));return this.curves.push($),this.currentPoint.set(W,H),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),Z=new FQ(Q);return this.curves.push(Z),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,Z,K,W,H){let $=this.currentPoint.x,Y=this.currentPoint.y;return this.absarc(J+$,Q+Y,Z,K,W,H),this}absarc(J,Q,Z,K,W,H){return this.absellipse(J,Q,Z,Z,K,W,H),this}ellipse(J,Q,Z,K,W,H,$,Y){let U=this.currentPoint.x,X=this.currentPoint.y;return this.absellipse(J+U,Q+X,Z,K,W,H,$,Y),this}absellipse(J,Q,Z,K,W,H,$,Y){let U=new n7(J,Q,Z,K,W,H,$,Y);if(this.curves.length>0){let N=U.getPoint(0);if(!N.equals(this.currentPoint))this.lineTo(N.x,N.y)}this.curves.push(U);let X=U.getPoint(1);return this.currentPoint.copy(X),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class s7 extends u6{constructor(J){super(J);this.uuid=lJ(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let Z=0,K=this.holes.length;Z<K;Z++)Q[Z]=this.holes[Z].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,Z=J.holes.length;Q<Z;Q++){let K=J.holes[Q];this.holes.push(K.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,Z=this.holes.length;Q<Z;Q++){let K=this.holes[Q];J.holes.push(K.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,Z=J.holes.length;Q<Z;Q++){let K=J.holes[Q];this.holes.push(new u6().fromJSON(K))}return this}}function AU(J,Q,Z=2){let K=Q&&Q.length,W=K?Q[0]*Z:J.length,H=N$(J,0,W,Z,!0),$=[];if(!H||H.next===H.prev)return $;let Y,U,X;if(K)H=vU(J,Q,H,Z);if(J.length>80*Z){Y=J[0],U=J[1];let N=Y,E=U;for(let G=Z;G<W;G+=Z){let F=J[G],R=J[G+1];if(F<Y)Y=F;if(R<U)U=R;if(F>N)N=F;if(R>E)E=R}X=Math.max(N-Y,E-U),X=X!==0?32767/X:0}return S7(H,$,Z,Y,U,X,0),$}function N$(J,Q,Z,K,W){let H;if(W===uU(J,Q,Z,K)>0)for(let $=Q;$<Z;$+=K)H=aW($/K|0,J[$],J[$+1],H);else for(let $=Z-K;$>=Q;$-=K)H=aW($/K|0,J[$],J[$+1],H);if(H&&e8(H,H.next))v7(H),H=H.next;return H}function O8(J,Q){if(!J)return J;if(!Q)Q=J;let Z=J,K;do if(K=!1,!Z.steiner&&(e8(Z,Z.next)||R9(Z.prev,Z,Z.next)===0)){if(v7(Z),Z=Q=Z.prev,Z===Z.next)break;K=!0}else Z=Z.next;while(K||Z!==Q);return Q}function S7(J,Q,Z,K,W,H,$){if(!J)return;if(!$&&H)xU(J,K,W,H);let Y=J;while(J.prev!==J.next){let{prev:U,next:X}=J;if(H?TU(J,K,W,H):wU(J)){Q.push(U.i,J.i,X.i),v7(J),J=X.next,Y=X.next;continue}if(J=X,J===Y){if(!$)S7(O8(J),Q,Z,K,W,H,1);else if($===1)J=SU(O8(J),Q),S7(J,Q,Z,K,W,H,2);else if($===2)jU(J,Q,Z,K,W,H);break}}}function wU(J){let Q=J.prev,Z=J,K=J.next;if(R9(Q,Z,K)>=0)return!1;let W=Q.x,H=Z.x,$=K.x,Y=Q.y,U=Z.y,X=K.y,N=Math.min(W,H,$),E=Math.min(Y,U,X),G=Math.max(W,H,$),F=Math.max(Y,U,X),R=K.next;while(R!==Q){if(R.x>=N&&R.x<=G&&R.y>=E&&R.y<=F&&I7(W,Y,H,U,$,X,R.x,R.y)&&R9(R.prev,R,R.next)>=0)return!1;R=R.next}return!0}function TU(J,Q,Z,K){let W=J.prev,H=J,$=J.next;if(R9(W,H,$)>=0)return!1;let Y=W.x,U=H.x,X=$.x,N=W.y,E=H.y,G=$.y,F=Math.min(Y,U,X),R=Math.min(N,E,G),B=Math.max(Y,U,X),D=Math.max(N,E,G),q=NZ(F,R,Q,Z,K),I=NZ(B,D,Q,Z,K),z=J.prevZ,V=J.nextZ;while(z&&z.z>=q&&V&&V.z<=I){if(z.x>=F&&z.x<=B&&z.y>=R&&z.y<=D&&z!==W&&z!==$&&I7(Y,N,U,E,X,G,z.x,z.y)&&R9(z.prev,z,z.next)>=0)return!1;if(z=z.prevZ,V.x>=F&&V.x<=B&&V.y>=R&&V.y<=D&&V!==W&&V!==$&&I7(Y,N,U,E,X,G,V.x,V.y)&&R9(V.prev,V,V.next)>=0)return!1;V=V.nextZ}while(z&&z.z>=q){if(z.x>=F&&z.x<=B&&z.y>=R&&z.y<=D&&z!==W&&z!==$&&I7(Y,N,U,E,X,G,z.x,z.y)&&R9(z.prev,z,z.next)>=0)return!1;z=z.prevZ}while(V&&V.z<=I){if(V.x>=F&&V.x<=B&&V.y>=R&&V.y<=D&&V!==W&&V!==$&&I7(Y,N,U,E,X,G,V.x,V.y)&&R9(V.prev,V,V.next)>=0)return!1;V=V.nextZ}return!0}function SU(J,Q){let Z=J;do{let K=Z.prev,W=Z.next.next;if(!e8(K,W)&&q$(K,Z,Z.next,W)&&j7(K,W)&&j7(W,K))Q.push(K.i,Z.i,W.i),v7(Z),v7(Z.next),Z=J=W;Z=Z.next}while(Z!==J);return O8(Z)}function jU(J,Q,Z,K,W,H){let $=J;do{let Y=$.next.next;while(Y!==$.prev){if($.i!==Y.i&&mU($,Y)){let U=F$($,Y);$=O8($,$.next),U=O8(U,U.next),S7($,Q,Z,K,W,H,0),S7(U,Q,Z,K,W,H,0);return}Y=Y.next}$=$.next}while($!==J)}function vU(J,Q,Z,K){let W=[];for(let H=0,$=Q.length;H<$;H++){let Y=Q[H]*K,U=H<$-1?Q[H+1]*K:J.length,X=N$(J,Y,U,K,!1);if(X===X.next)X.steiner=!0;W.push(pU(X))}W.sort(yU);for(let H=0;H<W.length;H++)Z=fU(W[H],Z);return Z}function yU(J,Q){let Z=J.x-Q.x;if(Z===0){if(Z=J.y-Q.y,Z===0){let K=(J.next.y-J.y)/(J.next.x-J.x),W=(Q.next.y-Q.y)/(Q.next.x-Q.x);Z=K-W}}return Z}function fU(J,Q){let Z=bU(J,Q);if(!Z)return Q;let K=F$(Z,J);return O8(K,K.next),O8(Z,Z.next)}function bU(J,Q){let Z=Q,K=J.x,W=J.y,H=-1/0,$;if(e8(J,Z))return Z;do{if(e8(J,Z.next))return Z.next;else if(W<=Z.y&&W>=Z.next.y&&Z.next.y!==Z.y){let E=Z.x+(W-Z.y)*(Z.next.x-Z.x)/(Z.next.y-Z.y);if(E<=K&&E>H){if(H=E,$=Z.x<Z.next.x?Z:Z.next,E===K)return $}}Z=Z.next}while(Z!==Q);if(!$)return null;let Y=$,U=$.x,X=$.y,N=1/0;Z=$;do{if(K>=Z.x&&Z.x>=U&&K!==Z.x&&E$(W<X?K:H,W,U,X,W<X?H:K,W,Z.x,Z.y)){let E=Math.abs(W-Z.y)/(K-Z.x);if(j7(Z,J)&&(E<N||E===N&&(Z.x>$.x||Z.x===$.x&&hU($,Z))))$=Z,N=E}Z=Z.next}while(Z!==Y);return $}function hU(J,Q){return R9(J.prev,J,Q.prev)<0&&R9(Q.next,J,J.next)<0}function xU(J,Q,Z,K){let W=J;do{if(W.z===0)W.z=NZ(W.x,W.y,Q,Z,K);W.prevZ=W.prev,W.nextZ=W.next,W=W.next}while(W!==J);W.prevZ.nextZ=null,W.prevZ=null,gU(W)}function gU(J){let Q,Z=1;do{let K=J,W;J=null;let H=null;Q=0;while(K){Q++;let $=K,Y=0;for(let X=0;X<Z;X++)if(Y++,$=$.nextZ,!$)break;let U=Z;while(Y>0||U>0&&$){if(Y!==0&&(U===0||!$||K.z<=$.z))W=K,K=K.nextZ,Y--;else W=$,$=$.nextZ,U--;if(H)H.nextZ=W;else J=W;W.prevZ=H,H=W}K=$}H.nextZ=null,Z*=2}while(Q>1);return J}function NZ(J,Q,Z,K,W){return J=(J-Z)*W|0,Q=(Q-K)*W|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function pU(J){let Q=J,Z=J;do{if(Q.x<Z.x||Q.x===Z.x&&Q.y<Z.y)Z=Q;Q=Q.next}while(Q!==J);return Z}function E$(J,Q,Z,K,W,H,$,Y){return(W-$)*(Q-Y)>=(J-$)*(H-Y)&&(J-$)*(K-Y)>=(Z-$)*(Q-Y)&&(Z-$)*(H-Y)>=(W-$)*(K-Y)}function I7(J,Q,Z,K,W,H,$,Y){return!(J===$&&Q===Y)&&E$(J,Q,Z,K,W,H,$,Y)}function mU(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!lU(J,Q)&&(j7(J,Q)&&j7(Q,J)&&dU(J,Q)&&(R9(J.prev,J,Q.prev)||R9(J,Q.prev,Q))||e8(J,Q)&&R9(J.prev,J,J.next)>0&&R9(Q.prev,Q,Q.next)>0)}function R9(J,Q,Z){return(Q.y-J.y)*(Z.x-Q.x)-(Q.x-J.x)*(Z.y-Q.y)}function e8(J,Q){return J.x===Q.x&&J.y===Q.y}function q$(J,Q,Z,K){let W=x6(R9(J,Q,Z)),H=x6(R9(J,Q,K)),$=x6(R9(Z,K,J)),Y=x6(R9(Z,K,Q));if(W!==H&&$!==Y)return!0;if(W===0&&h6(J,Z,Q))return!0;if(H===0&&h6(J,K,Q))return!0;if($===0&&h6(Z,J,K))return!0;if(Y===0&&h6(Z,Q,K))return!0;return!1}function h6(J,Q,Z){return Q.x<=Math.max(J.x,Z.x)&&Q.x>=Math.min(J.x,Z.x)&&Q.y<=Math.max(J.y,Z.y)&&Q.y>=Math.min(J.y,Z.y)}function x6(J){return J>0?1:J<0?-1:0}function lU(J,Q){let Z=J;do{if(Z.i!==J.i&&Z.next.i!==J.i&&Z.i!==Q.i&&Z.next.i!==Q.i&&q$(Z,Z.next,J,Q))return!0;Z=Z.next}while(Z!==J);return!1}function j7(J,Q){return R9(J.prev,J,J.next)<0?R9(J,Q,J.next)>=0&&R9(J,J.prev,Q)>=0:R9(J,Q,J.prev)<0||R9(J,J.next,Q)<0}function dU(J,Q){let Z=J,K=!1,W=(J.x+Q.x)/2,H=(J.y+Q.y)/2;do{if(Z.y>H!==Z.next.y>H&&Z.next.y!==Z.y&&W<(Z.next.x-Z.x)*(H-Z.y)/(Z.next.y-Z.y)+Z.x)K=!K;Z=Z.next}while(Z!==J);return K}function F$(J,Q){let Z=EZ(J.i,J.x,J.y),K=EZ(Q.i,Q.x,Q.y),W=J.next,H=Q.prev;return J.next=Q,Q.prev=J,Z.next=W,W.prev=Z,K.next=Z,Z.prev=K,H.next=K,K.prev=H,K}function aW(J,Q,Z,K){let W=EZ(J,Q,Z);if(!K)W.prev=W,W.next=W;else W.next=K.next,W.prev=K,K.next.prev=W,K.next=W;return W}function v7(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function EZ(J,Q,Z){return{i:J,x:Q,y:Z,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function uU(J,Q,Z,K){let W=0;for(let H=Q,$=Z-K;H<Z;H+=K)W+=(J[$]-J[H])*(J[H+1]+J[$+1]),$=H;return W}class D${static triangulate(J,Q,Z=2){return AU(J,Q,Z)}}class o8{static area(J){let Q=J.length,Z=0;for(let K=Q-1,W=0;W<Q;K=W++)Z+=J[K].x*J[W].y-J[W].x*J[K].y;return Z*0.5}static isClockWise(J){return o8.area(J)<0}static triangulateShape(J,Q){let Z=[],K=[],W=[];rW(J),tW(Z,J);let H=J.length;Q.forEach(rW);for(let Y=0;Y<Q.length;Y++)K.push(H),H+=Q[Y].length,tW(Z,Q[Y]);let $=D$.triangulate(Z,K);for(let Y=0;Y<$.length;Y+=3)W.push($.slice(Y,Y+3));return W}}function rW(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function tW(J,Q){for(let Z=0;Z<Q.length;Z++)J.push(Q[Z].x),J.push(Q[Z].y)}class U7 extends c7{constructor(J=1,Q=0){let Z=(1+Math.sqrt(5))/2,K=[-1,Z,0,1,Z,0,-1,-Z,0,1,-Z,0,0,-1,Z,0,1,Z,0,-1,-Z,0,1,-Z,Z,0,-1,Z,0,1,-Z,0,-1,-Z,0,1],W=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(K,W,J,Q);this.type="IcosahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new U7(J.radius,J.detail)}}class i7 extends c7{constructor(J=1,Q=0){let Z=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],K=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(Z,K,J,Q);this.type="OctahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new i7(J.radius,J.detail)}}class c9 extends C9{constructor(J=1,Q=1,Z=1,K=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:Z,heightSegments:K};let W=J/2,H=Q/2,$=Math.floor(Z),Y=Math.floor(K),U=$+1,X=Y+1,N=J/$,E=Q/Y,G=[],F=[],R=[],B=[];for(let D=0;D<X;D++){let q=D*E-H;for(let I=0;I<U;I++){let z=I*N-W;F.push(z,-q,0),R.push(0,0,1),B.push(I/$),B.push(1-D/Y)}}for(let D=0;D<Y;D++)for(let q=0;q<$;q++){let I=q+U*D,z=q+U*(D+1),V=q+1+U*(D+1),_=q+1+U*D;G.push(I,z,_),G.push(z,V,_)}this.setIndex(G),this.setAttribute("position",new W9(F,3)),this.setAttribute("normal",new W9(R,3)),this.setAttribute("uv",new W9(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new c9(J.width,J.height,J.widthSegments,J.heightSegments)}}class o7 extends C9{constructor(J=new s7([new F0(0,0.5),new F0(-0.5,-0.5),new F0(0.5,-0.5)]),Q=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:Q};let Z=[],K=[],W=[],H=[],$=0,Y=0;if(Array.isArray(J)===!1)U(J);else for(let X=0;X<J.length;X++)U(J[X]),this.addGroup($,Y,X),$+=Y,Y=0;this.setIndex(Z),this.setAttribute("position",new W9(K,3)),this.setAttribute("normal",new W9(W,3)),this.setAttribute("uv",new W9(H,2));function U(X){let N=K.length/3,E=X.extractPoints(Q),G=E.shape,F=E.holes;if(o8.isClockWise(G)===!1)G=G.reverse();for(let B=0,D=F.length;B<D;B++){let q=F[B];if(o8.isClockWise(q)===!0)F[B]=q.reverse()}let R=o8.triangulateShape(G,F);for(let B=0,D=F.length;B<D;B++){let q=F[B];G=G.concat(q)}for(let B=0,D=G.length;B<D;B++){let q=G[B];K.push(q.x,q.y,0),W.push(0,0,1),H.push(q.x,q.y)}for(let B=0,D=R.length;B<D;B++){let q=R[B],I=q[0]+N,z=q[1]+N,V=q[2]+N;Z.push(I,z,V),Y+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes;return cU(Q,J)}static fromJSON(J,Q){let Z=[];for(let K=0,W=J.shapes.length;K<W;K++){let H=Q[J.shapes[K]];Z.push(H)}return new o7(Z,J.curveSegments)}}function cU(J,Q){if(Q.shapes=[],Array.isArray(J))for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];Q.shapes.push(W.uuid)}else Q.shapes.push(J.uuid);return Q}class LJ extends C9{constructor(J=1,Q=32,Z=16,K=0,W=Math.PI*2,H=0,$=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:Z,phiStart:K,phiLength:W,thetaStart:H,thetaLength:$},Q=Math.max(3,Math.floor(Q)),Z=Math.max(2,Math.floor(Z));let Y=Math.min(H+$,Math.PI),U=0,X=[],N=new S,E=new S,G=[],F=[],R=[],B=[];for(let D=0;D<=Z;D++){let q=[],I=D/Z,z=H+I*$,V=J*Math.cos(z),_=Math.sqrt(J*J-V*V),C=0;if(D===0&&H===0)C=0.5/Q;else if(D===Z&&Y===Math.PI)C=-0.5/Q;for(let O=0;O<=Q;O++){let k=O/Q,w=K+k*W;N.x=-_*Math.cos(w),N.y=V,N.z=_*Math.sin(w),F.push(N.x,N.y,N.z),E.copy(N).normalize(),R.push(E.x,E.y,E.z),B.push(k+C,1-I),q.push(U++)}X.push(q)}for(let D=0;D<Z;D++)for(let q=0;q<Q;q++){let I=X[D][q+1],z=X[D][q],V=X[D+1][q],_=X[D+1][q+1];if(D!==0||H>0)G.push(I,z,_);if(D!==Z-1||Y<Math.PI)G.push(z,V,_)}this.setIndex(G),this.setAttribute("position",new W9(F,3)),this.setAttribute("normal",new W9(R,3)),this.setAttribute("uv",new W9(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new LJ(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class a7 extends C9{constructor(J=1,Q=0.4,Z=12,K=48,W=Math.PI*2,H=0,$=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:Z,tubularSegments:K,arc:W,thetaStart:H,thetaLength:$},Z=Math.floor(Z),K=Math.floor(K);let Y=[],U=[],X=[],N=[],E=new S,G=new S,F=new S;for(let R=0;R<=Z;R++){let B=H+R/Z*$;for(let D=0;D<=K;D++){let q=D/K*W;G.x=(J+Q*Math.cos(B))*Math.cos(q),G.y=(J+Q*Math.cos(B))*Math.sin(q),G.z=Q*Math.sin(B),U.push(G.x,G.y,G.z),E.x=J*Math.cos(q),E.y=J*Math.sin(q),F.subVectors(G,E).normalize(),X.push(F.x,F.y,F.z),N.push(D/K),N.push(R/Z)}}for(let R=1;R<=Z;R++)for(let B=1;B<=K;B++){let D=(K+1)*R+B-1,q=(K+1)*(R-1)+B-1,I=(K+1)*(R-1)+B,z=(K+1)*R+B;Y.push(D,q,z),Y.push(q,I,z)}this.setIndex(Y),this.setAttribute("position",new W9(U,3)),this.setAttribute("normal",new W9(X,3)),this.setAttribute("uv",new W9(N,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new a7(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}function B8(J){let Q={};for(let Z in J){Q[Z]={};for(let K in J[Z]){let W=J[Z][K];if(eW(W))if(W.isRenderTargetTexture)v0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[Z][K]=null;else Q[Z][K]=W.clone();else if(Array.isArray(W))if(eW(W[0])){let H=[];for(let $=0,Y=W.length;$<Y;$++)H[$]=W[$].clone();Q[Z][K]=H}else Q[Z][K]=W.slice();else Q[Z][K]=W}}return Q}function n9(J){let Q={};for(let Z=0;Z<J.length;Z++){let K=B8(J[Z]);for(let W in K)Q[W]=K[W]}return Q}function eW(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function nU(J){let Q=[];for(let Z=0;Z<J.length;Z++)Q.push(J[Z].clone());return Q}function TK(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return a0.workingColorSpace}var O$={clone:B8,merge:n9},sU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class k9 extends uJ{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sU,this.fragmentShader=iU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=B8(J.uniforms),this.uniformsGroups=nU(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let K in this.uniforms){let H=this.uniforms[K].value;if(H&&H.isTexture)Q.uniforms[K]={type:"t",value:H.toJSON(J).uuid};else if(H&&H.isColor)Q.uniforms[K]={type:"c",value:H.getHex()};else if(H&&H.isVector2)Q.uniforms[K]={type:"v2",value:H.toArray()};else if(H&&H.isVector3)Q.uniforms[K]={type:"v3",value:H.toArray()};else if(H&&H.isVector4)Q.uniforms[K]={type:"v4",value:H.toArray()};else if(H&&H.isMatrix3)Q.uniforms[K]={type:"m3",value:H.toArray()};else if(H&&H.isMatrix4)Q.uniforms[K]={type:"m4",value:H.toArray()};else Q.uniforms[K]={value:H}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let Z={};for(let K in this.extensions)if(this.extensions[K]===!0)Z[K]=!0;if(Object.keys(Z).length>0)Q.extensions=Z;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let Z in J.uniforms){let K=J.uniforms[Z];switch(this.uniforms[Z]={},K.type){case"t":this.uniforms[Z].value=Q[K.value]||null;break;case"c":this.uniforms[Z].value=new X0().setHex(K.value);break;case"v2":this.uniforms[Z].value=new F0().fromArray(K.value);break;case"v3":this.uniforms[Z].value=new S().fromArray(K.value);break;case"v4":this.uniforms[Z].value=new M9().fromArray(K.value);break;case"m3":this.uniforms[Z].value=new h0().fromArray(K.value);break;case"m4":this.uniforms[Z].value=new J9().fromArray(K.value);break;default:this.uniforms[Z].value=K.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let Z in J.extensions)this.extensions[Z]=J.extensions[Z];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class SK extends k9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class l0 extends uJ{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new X0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new X0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new F0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xJ,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class jK extends uJ{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class vK extends uJ{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function u8(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function g6(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}class I8{constructor(J,Q,Z,K){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=K!==void 0?K:new Q.constructor(Z),this.sampleValues=Q,this.valueSize=Z,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,Z=this._cachedIndex,K=Q[Z],W=Q[Z-1];Z:{J:{let H;Q:{K:if(!(J<K)){for(let $=Z+2;;){if(K===void 0){if(J<W)break K;return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}if(Z===$)break;if(W=K,K=Q[++Z],J<K)break J}H=Q.length;break Q}if(!(J>=W)){let $=Q[1];if(J<$)Z=2,W=$;for(let Y=Z-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===Y)break;if(K=W,W=Q[--Z-1],J>=W)break J}H=Z,Z=0;break Q}break Z}while(Z<H){let $=Z+H>>>1;if(J<Q[$])H=$;else Z=$+1}if(K=Q[Z],W=Q[Z-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(K===void 0)return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}this._cachedIndex=Z,this.intervalChanged_(Z,W,K)}return this.interpolate_(Z,W,J,K)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,Z=this.sampleValues,K=this.valueSize,W=J*K;for(let H=0;H!==K;++H)Q[H]=Z[W+H];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class yK extends I8{constructor(J,Q,Z,K){super(J,Q,Z,K);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,Z){let K=this.parameterPositions,W=J-2,H=J+1,$=K[W],Y=K[H];if($===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,$=2*Q-Z;break;case 2402:W=K.length-2,$=Q+K[W]-K[W+1];break;default:W=J,$=Z}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:H=J,Y=2*Z-Q;break;case 2402:H=1,Y=Z+K[1]-K[0];break;default:H=J-1,Y=Q}let U=(Z-Q)*0.5,X=this.valueSize;this._weightPrev=U/(Q-$),this._weightNext=U/(Y-Z),this._offsetPrev=W*X,this._offsetNext=H*X}interpolate_(J,Q,Z,K){let W=this.resultBuffer,H=this.sampleValues,$=this.valueSize,Y=J*$,U=Y-$,X=this._offsetPrev,N=this._offsetNext,E=this._weightPrev,G=this._weightNext,F=(Z-Q)/(K-Q),R=F*F,B=R*F,D=-E*B+2*E*R-E*F,q=(1+E)*B+(-1.5-2*E)*R+(-0.5+E)*F+1,I=(-1-G)*B+(1.5+G)*R+0.5*F,z=G*B-G*R;for(let V=0;V!==$;++V)W[V]=D*H[X+V]+q*H[U+V]+I*H[Y+V]+z*H[N+V];return W}}class fK extends I8{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J,Q,Z,K){let W=this.resultBuffer,H=this.sampleValues,$=this.valueSize,Y=J*$,U=Y-$,X=(Z-Q)/(K-Q),N=1-X;for(let E=0;E!==$;++E)W[E]=H[U+E]*N+H[Y+E]*X;return W}}class bK extends I8{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J){return this.copySampleValue_(J-1)}}class hK extends I8{interpolate_(J,Q,Z,K){let W=this.resultBuffer,H=this.sampleValues,$=this.valueSize,Y=J*$,U=Y-$,X=this.inTangents,N=this.outTangents;if(!X||!N){let F=(Z-Q)/(K-Q),R=1-F;for(let B=0;B!==$;++B)W[B]=H[U+B]*R+H[Y+B]*F;return W}let E=$*2,G=J-1;for(let F=0;F!==$;++F){let R=H[U+F],B=H[Y+F],D=G*E+F*2,q=N[D],I=N[D+1],z=J*E+F*2,V=X[z],_=X[z+1],C=aU(Z,Q,q,V,K);W[F]=R$(C,R,I,_,B)}return W}}function R$(J,Q,Z,K,W){let H=1-J;return H*H*H*Q+3*H*H*J*Z+3*H*J*J*K+J*J*J*W}function oU(J,Q,Z,K,W){let H=1-J;return 3*H*H*(Z-Q)+6*H*J*(K-Z)+3*J*J*(W-K)}function aU(J,Q,Z,K,W){let H=(J-Q)/(W-Q);for(let $=0;$<8;$++){let Y=R$(H,Q,Z,K,W)-J;if(Math.abs(Y)<0.0000000001)break;let U=oU(H,Q,Z,K,W);if(Math.abs(U)<0.0000000001)break;H=Math.max(0,Math.min(1,H-Y/U))}return H}class GJ{constructor(J,Q,Z,K){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=u8(Q,this.TimeBufferType),this.values=u8(Z,this.ValueBufferType),this.setInterpolation(K||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,Z;if(Q.toJSON!==this.toJSON)Z=Q.toJSON(J);else{Z={name:J.name,times:u8(J.times,Array),values:u8(J.values,Array)};let K=J.getInterpolation();if(K!==J.DefaultInterpolation)Z.interpolation=K;if(g6(J.settings))Z.settings={inTangents:u8(J.settings.inTangents,Array),outTangents:u8(J.settings.outTangents,Array)}}return Z.type=J.ValueTypeName,Z}InterpolantFactoryMethodDiscrete(J){return new bK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new fK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new yK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new hK(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let Z="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Z);return v0("KeyframeTrack:",Z),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]+=J;if(g6(this.settings))JH(this.settings.inTangents,J),JH(this.settings.outTangents,J)}return this}scale(J){if(J!==1){let Q=this.times;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]*=J;if(g6(this.settings))QH(this.settings.inTangents,J),QH(this.settings.outTangents,J)}return this}trim(J,Q){let Z=this.times,K=Z.length,W=0,H=K-1;while(W!==K&&Z[W]<J)++W;while(H!==-1&&Z[H]>Q)--H;if(++H,W!==0||H!==K){if(W>=H)H=Math.max(H,1),W=H-1;let $=this.getValueSize();this.times=Z.slice(W,H),this.values=this.values.slice(W*$,H*$)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)b0("KeyframeTrack: Invalid value size in track.",this),J=!1;let Z=this.times,K=this.values,W=Z.length;if(W===0)b0("KeyframeTrack: Track is empty.",this),J=!1;let H=null;for(let $=0;$!==W;$++){let Y=Z[$];if(typeof Y==="number"&&isNaN(Y)){b0("KeyframeTrack: Time is not a valid number.",this,$,Y),J=!1;break}if(H!==null&&H>Y){b0("KeyframeTrack: Out of order keys.",this,$,Y,H),J=!1;break}H=Y}if(K!==void 0){if(pY(K))for(let $=0,Y=K.length;$!==Y;++$){let U=K[$];if(isNaN(U)){b0("KeyframeTrack: Value is not a valid number.",this,$,U),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),Z=this.getValueSize(),K=this.getInterpolation()===2302,W=J.length-1,H=1;for(let $=1;$<W;++$){let Y=!1,U=J[$],X=J[$+1];if(U!==X&&($!==1||U!==J[0]))if(!K){let N=$*Z,E=N-Z,G=N+Z;for(let F=0;F!==Z;++F){let R=Q[N+F];if(R!==Q[E+F]||R!==Q[G+F]){Y=!0;break}}}else Y=!0;if(Y){if($!==H){J[H]=J[$];let N=$*Z,E=H*Z;for(let G=0;G!==Z;++G)Q[E+G]=Q[N+G]}++H}}if(W>0){J[H]=J[W];for(let $=W*Z,Y=H*Z,U=0;U!==Z;++U)Q[Y+U]=Q[$+U];++H}if(H!==J.length)this.times=J.slice(0,H),this.values=Q.slice(0,H*Z);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),K=new this.constructor(this.name,J,Q);if(K.createInterpolant=this.createInterpolant,g6(this.settings))K.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return K}}function JH(J,Q){for(let Z=0,K=J.length;Z!==K;Z+=2)J[Z]+=Q}function QH(J,Q){for(let Z=0,K=J.length;Z!==K;Z+=2)J[Z]*=Q}GJ.prototype.ValueTypeName="";GJ.prototype.TimeBufferType=Float32Array;GJ.prototype.ValueBufferType=Float32Array;GJ.prototype.DefaultInterpolation=2301;class z8 extends GJ{constructor(J,Q,Z){super(J,Q,Z)}}z8.prototype.ValueTypeName="bool";z8.prototype.ValueBufferType=Array;z8.prototype.DefaultInterpolation=2300;z8.prototype.InterpolantFactoryMethodLinear=void 0;z8.prototype.InterpolantFactoryMethodSmooth=void 0;class xK extends GJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}}xK.prototype.ValueTypeName="color";class gK extends GJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}}gK.prototype.ValueTypeName="number";class pK extends I8{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J,Q,Z,K){let W=this.resultBuffer,H=this.sampleValues,$=this.valueSize,Y=(Z-Q)/(K-Q),U=J*$;for(let X=U+$;U!==X;U+=4)MJ.slerpFlat(W,0,H,U-$,H,U,Y);return W}}class DQ extends GJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}InterpolantFactoryMethodLinear(J){return new pK(this.times,this.values,this.getValueSize(),J)}}DQ.prototype.ValueTypeName="quaternion";DQ.prototype.InterpolantFactoryMethodSmooth=void 0;class P8 extends GJ{constructor(J,Q,Z){super(J,Q,Z)}}P8.prototype.ValueTypeName="string";P8.prototype.ValueBufferType=Array;P8.prototype.DefaultInterpolation=2300;P8.prototype.InterpolantFactoryMethodLinear=void 0;P8.prototype.InterpolantFactoryMethodSmooth=void 0;class mK extends GJ{constructor(J,Q,Z,K){super(J,Q,Z,K)}}mK.prototype.ValueTypeName="vector";var l6={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(ZH(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(ZH(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function ZH(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class lK{constructor(J,Q,Z){let K=this,W=!1,H=0,$=0,Y=void 0,U=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=Z,this._abortController=null,this.itemStart=function(X){if($++,W===!1){if(K.onStart!==void 0)K.onStart(X,H,$)}W=!0},this.itemEnd=function(X){if(H++,K.onProgress!==void 0)K.onProgress(X,H,$);if(H===$){if(W=!1,K.onLoad!==void 0)K.onLoad()}},this.itemError=function(X){if(K.onError!==void 0)K.onError(X)},this.resolveURL=function(X){if(X=X.normalize("NFC"),Y)return Y(X);return X},this.setURLModifier=function(X){return Y=X,this},this.addHandler=function(X,N){return U.push(X,N),this},this.removeHandler=function(X){let N=U.indexOf(X);if(N!==-1)U.splice(N,2);return this},this.getHandler=function(X){for(let N=0,E=U.length;N<E;N+=2){let G=U[N],F=U[N+1];if(G.global)G.lastIndex=0;if(G.test(X))return F}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var M$=new lK;class r7{constructor(J){if(this.manager=J!==void 0?J:M$,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let Z=this;return new Promise(function(K,W){Z.load(J,K,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}setPriority(J){return this.priority=J,this}setCache(J){return this.cache=J,this}abort(){return this}}r7.DEFAULT_MATERIAL_NAME="__DEFAULT";var c8=new WeakMap;class dK extends r7{constructor(J){super(J)}load(J,Q,Z,K){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,H=l6.get(`image:${J}`);if(H!==void 0){if(H.complete===!0)W.manager.itemStart(J),setTimeout(function(){if(Q)Q(H);W.manager.itemEnd(J)},0);else{let N=c8.get(H);if(N===void 0)N=[],c8.set(H,N);N.push({onLoad:Q,onError:K})}return H}let $=a8("img");function Y(){if(X(),Q)Q(this);let N=c8.get(this)||[];for(let E=0;E<N.length;E++){let G=N[E];if(G.onLoad)G.onLoad(this)}c8.delete(this),W.manager.itemEnd(J)}function U(N){if(X(),K)K(N);l6.remove(`image:${J}`);let E=c8.get(this)||[];for(let G=0;G<E.length;G++){let F=E[G];if(F.onError)F.onError(N)}c8.delete(this),W.manager.itemError(J),W.manager.itemEnd(J)}function X(){$.removeEventListener("load",Y,!1),$.removeEventListener("error",U,!1)}if($.addEventListener("load",Y,!1),$.addEventListener("error",U,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)$.crossOrigin=this.crossOrigin}return l6.add(`image:${J}`,$),W.manager.itemStart(J),$.fetchPriority=this.priority,$.src=J,$}}class OQ extends r7{constructor(J){super(J)}load(J,Q,Z,K){let W=new y9,H=new dK(this.manager);return H.setPriority(this.priority),H.setCache(this.cache),H.setCrossOrigin(this.crossOrigin),H.setPath(this.path),H.load(J,function($){if(W.image=$,W.needsUpdate=!0,Q!==void 0)Q(W)},Z,K),W}}class X7 extends _9{static registerNode(J){this.prototype._lightNode=J}constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new X0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class RQ extends X7{constructor(J,Q,Z){super(J,Z);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_9.DEFAULT_UP),this.updateMatrix(),this.groundColor=new X0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var XZ=new J9,KH=new S,WH=new S;class MQ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new F0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new J9,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new D8,this._frameExtents=new F0(1,1),this._viewportCount=1,this._viewports=[new M9(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;KH.setFromMatrixPosition(J.matrixWorld),Q.position.copy(KH),WH.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(WH),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,Z,K){XZ.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Z.setFromProjectionMatrix(XZ,J.coordinateSystem,J.reversedDepth);let W=this._frameExtents,H=K?K.z/W.x:1,$=K?K.w/W.y:1,Y=K?K.x/W.x:0,U=K?K.y/W.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*H,0,0,0.5*H+Y,0,0.5*$,0,0.5*$+U,0,0,1,0,0,0,0,1);else Q.set(0.5*H,0,0,0.5*H+Y,0,0.5*$,0,0.5*$+U,0,0,0.5,0.5,0,0,0,1);Q.multiply(XZ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.mapType=J.mapType,this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.mapType=this.mapType,J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var p6=new S,m6=new MJ,VJ=new S;class LQ extends _9{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new J9,this.projectionMatrix=new J9,this.projectionMatrixInverse=new J9,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(p6,m6,VJ),VJ.x===1&&VJ.y===1&&VJ.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(p6,m6,VJ.set(1,1,1)).invert()}updateWorldMatrix(J,Q,Z=!1){if(super.updateWorldMatrix(J,Q,Z),this.matrixWorld.decompose(p6,m6,VJ),VJ.x===1&&VJ.y===1&&VJ.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(p6,m6,VJ.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var tJ=new S,HH=new F0,$H=new F0;class h9 extends LQ{constructor(J=50,Q=1,Z=0.1,K=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Z,this.far=K,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=t8*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(P7*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return t8*2*Math.atan(Math.tan(P7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,Z){tJ.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(tJ.x,tJ.y).multiplyScalar(-J/tJ.z),tJ.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(tJ.x,tJ.y).multiplyScalar(-J/tJ.z)}getViewSize(J,Q){return this.getViewBounds(J,HH,$H),Q.subVectors($H,HH)}setViewOffset(J,Q,Z,K,W,H){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=K,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(P7*0.5*this.fov)/this.zoom,Z=2*Q,K=this.aspect*Z,W=-0.5*K,H=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:U}=H;W+=H.offsetX*K/Y,Q-=H.offsetY*Z/U,K*=H.width/Y,Z*=H.height/U}let $=this.filmOffset;if($!==0)W+=J*$/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+K,Q,Q-Z,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class L$ extends MQ{constructor(){super(new h9(90,1,0.5,500));this.isPointLightShadow=!0}}class VQ extends X7{constructor(J,Q,Z=0,K=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=Z,this.decay=K,this.shadow=new L$}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class kQ extends LQ{constructor(J=-1,Q=1,Z=1,K=-1,W=0.1,H=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=Z,this.bottom=K,this.near=W,this.far=H,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,Z,K,W,H){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=K,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),Z=(this.right+this.left)/2,K=(this.top+this.bottom)/2,W=Z-J,H=Z+J,$=K+Q,Y=K-Q;if(this.view!==null&&this.view.enabled){let U=(this.right-this.left)/this.view.fullWidth/this.zoom,X=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=U*this.view.offsetX,H=W+U*this.view.width,$-=X*this.view.offsetY,Y=$-X*this.view.height}this.projectionMatrix.makeOrthographic(W,H,$,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class V$ extends MQ{constructor(){super(new kQ(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class _8 extends X7{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_9.DEFAULT_UP),this.updateMatrix(),this.target=new _9,this.shadow=new V$}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class BQ extends X7{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}var n8=-90,s8=1;class t7 extends _9{constructor(J,Q,Z){super();this.type="CubeCamera",this.renderTarget=Z,this.coordinateSystem=null,this.activeMipmapLevel=0;let K=new h9(n8,s8,J,Q);K.layers=this.layers,this.add(K);let W=new h9(n8,s8,J,Q);W.layers=this.layers,this.add(W);let H=new h9(n8,s8,J,Q);H.layers=this.layers,this.add(H);let $=new h9(n8,s8,J,Q);$.layers=this.layers,this.add($);let Y=new h9(n8,s8,J,Q);Y.layers=this.layers,this.add(Y);let U=new h9(n8,s8,J,Q);U.layers=this.layers,this.add(U)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[Z,K,W,H,$,Y]=Q;for(let U of Q)this.remove(U);if(J===2000)Z.up.set(0,1,0),Z.lookAt(1,0,0),K.up.set(0,1,0),K.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),H.up.set(0,0,1),H.lookAt(0,-1,0),$.up.set(0,1,0),$.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)Z.up.set(0,-1,0),Z.lookAt(-1,0,0),K.up.set(0,-1,0),K.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),H.up.set(0,0,-1),H.lookAt(0,-1,0),$.up.set(0,-1,0),$.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let U of Q)this.add(U),U.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Z,activeMipmapLevel:K}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,H,$,Y,U,X]=this.children,N=J.getRenderTarget(),E=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let R=Z.texture.mipmapsAutoUpdate;Z.texture.mipmapsAutoUpdate=!1;let B=!1;if(J.isWebGLRenderer===!0)B=J.state.buffers.depth.getReversed();else B=J.reversedDepthBuffer;if(J.setRenderTarget(Z,0,K),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget(Z,1,K),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget(Z,2,K),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,$),J.setRenderTarget(Z,3,K),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget(Z,4,K),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,U),Z.texture.mipmapsAutoUpdate=R,J.setRenderTarget(Z,5,K),B&&J.autoClear===!1)J.clearDepth();J.render(Q,X),J.setRenderTarget(N,E,G),J.xr.enabled=F,Z.texture.needsPMREMUpdate=!0}}class uK extends h9{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J,this.perCameraFrustumCulled=!1}}var cK="\\[\\]\\.:\\/",rU=new RegExp("["+cK+"]","g"),nK="[^"+cK+"]",tU="[^"+cK.replace("\\.","")+"]",eU=/((?:WC+[\/:])*)/.source.replace("WC",nK),JX=/(WCOD+)?/.source.replace("WCOD",tU),QX=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nK),ZX=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nK),KX=new RegExp("^"+eU+JX+QX+ZX+"$"),WX=["material","materials","bones","map"];class k${constructor(J,Q,Z){let K=Z||K9.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,K)}getValue(J,Q){this.bind();let Z=this._targetGroup.nCachedObjects_,K=this._bindings[Z];if(K!==void 0)K.getValue(J,Q)}setValue(J,Q){let Z=this._bindings;for(let K=this._targetGroup.nCachedObjects_,W=Z.length;K!==W;++K)Z[K].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].unbind()}}class K9{constructor(J,Q,Z){this.path=Q,this.parsedPath=Z||K9.parseTrackName(Q),this.node=K9.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,Z){if(!(J&&J.isAnimationObjectGroup))return new K9(J,Q,Z);else return new K9.Composite(J,Q,Z)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(rU,"")}static parseTrackName(J){let Q=KX.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let Z={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},K=Z.nodeName&&Z.nodeName.lastIndexOf(".");if(K!==void 0&&K!==-1){let W=Z.nodeName.substring(K+1);if(WX.indexOf(W)!==-1)Z.nodeName=Z.nodeName.substring(0,K),Z.objectName=W}if(Z.propertyName===null||Z.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return Z}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let Z=J.skeleton.getBoneByName(Q);if(Z!==void 0)return Z}if(J.children){let Z=function(W){for(let H=0;H<W.length;H++){let $=W[H];if($.name===Q||$.uuid===Q)return $;let Y=Z($.children);if(Y)return Y}return null},K=Z(J.children);if(K)return K}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let Z=this.resolvedProperty;for(let K=0,W=Z.length;K!==W;++K)J[Q++]=Z[K]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let Z=this.resolvedProperty;for(let K=0,W=Z.length;K!==W;++K)Z[K]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let K=0,W=Z.length;K!==W;++K)Z[K]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let K=0,W=Z.length;K!==W;++K)Z[K]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,Z=Q.objectName,K=Q.propertyName,W=Q.propertyIndex;if(!J)J=K9.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){v0("PropertyBinding: No target node found for track: "+this.path+".");return}if(Z){let U=Q.objectIndex;switch(Z){case"materials":if(!J.material){b0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){b0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){b0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let X=0;X<J.length;X++)if(J[X].name===U){U=X;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){b0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){b0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Z]===void 0){b0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Z]}if(U!==void 0){if(J[U]===void 0){b0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[U]}}let H=J[K];if(H===void 0){let U=Q.nodeName;b0("PropertyBinding: Trying to update property for track: "+U+"."+K+" but it wasn't found.",J);return}let $=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)$=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)$=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(W!==void 0){if(K==="morphTargetInfluences"){if(!J.geometry){b0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){b0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}Y=this.BindingType.ArrayElement,this.resolvedProperty=H,this.propertyIndex=W}else if(H.fromArray!==void 0&&H.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=H;else if(Array.isArray(H))Y=this.BindingType.EntireArray,this.resolvedProperty=H;else this.propertyName=K;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][$]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}K9.Composite=k$;K9.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};K9.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};K9.prototype.GetterByBindingType=[K9.prototype._getValue_direct,K9.prototype._getValue_array,K9.prototype._getValue_arrayElement,K9.prototype._getValue_toArray];K9.prototype.SetterByBindingTypeAndVersioning=[[K9.prototype._setValue_direct,K9.prototype._setValue_direct_setNeedsUpdate,K9.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[K9.prototype._setValue_array,K9.prototype._setValue_array_setNeedsUpdate,K9.prototype._setValue_array_setMatrixWorldNeedsUpdate],[K9.prototype._setValue_arrayElement,K9.prototype._setValue_arrayElement_setNeedsUpdate,K9.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[K9.prototype._setValue_fromArray,K9.prototype._setValue_fromArray_setNeedsUpdate,K9.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $1=new Float32Array(1);var YH=new J9;class IQ{constructor(J,Q,Z=0,K=1/0){this.ray=new d7(J,Q),this.near=Z,this.far=K,this.camera=null,this.layers=new p7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,Q.projectionMatrix.elements[14]).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else b0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return YH.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(YH),this}intersectObject(J,Q=!0,Z=[]){return qZ(J,this,Z,Q),Z.sort(UH),Z}intersectObjects(J,Q=!0,Z=[]){for(let K=0,W=J.length;K<W;K++)qZ(J[K],this,Z,Q);return Z.sort(UH),Z}}function UH(J,Q){return J.distance-Q.distance}function qZ(J,Q,Z,K){let W=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,Z)===!1)W=!1}if(W===!0&&K===!0){let H=J.children;for(let $=0,Y=H.length;$<Y;$++)qZ(H[$],Q,Z,!0)}}class G7{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,v0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=performance.now();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}class B${static{this.prototype.isMatrix2=!0}constructor(J,Q,Z,K){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,Z,K)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let Z=0;Z<4;Z++)this.elements[Z]=J[Z+Q];return this}set(J,Q,Z,K){let W=this.elements;return W[0]=J,W[2]=Q,W[1]=Z,W[3]=K,this}}function sK(J,Q,Z,K){let W=HX(K);switch(Z){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${Z} format.`)}function HX(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)v0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function u$(){let J=null,Q=!1,Z=null,K=null;function W(H,$){K=J.requestAnimationFrame(W),Z(H,$)}return{start:function(){if(Q===!0)return;if(Z===null)return;if(J===null)return;K=J.requestAnimationFrame(W),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(K);Q=!1},setAnimationLoop:function(H){Z=H},setContext:function(H){J=H}}}function $X(J){let Q=new WeakMap;function Z(Y,U){let{array:X,usage:N}=Y,E=X.byteLength,G=J.createBuffer();J.bindBuffer(U,G),J.bufferData(U,X,N),Y.onUploadCallback();let F;if(X instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array<"u"&&X instanceof Float16Array)F=J.HALF_FLOAT;else if(X instanceof Uint16Array)if(Y.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(X instanceof Int16Array)F=J.SHORT;else if(X instanceof Uint32Array)F=J.UNSIGNED_INT;else if(X instanceof Int32Array)F=J.INT;else if(X instanceof Int8Array)F=J.BYTE;else if(X instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(X instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+X);return{buffer:G,type:F,bytesPerElement:X.BYTES_PER_ELEMENT,version:Y.version,size:E}}function K(Y,U,X){let{array:N,updateRanges:E}=U;if(J.bindBuffer(X,Y),E.length===0)J.bufferSubData(X,0,N);else{E.sort((F,R)=>F.start-R.start);let G=0;for(let F=1;F<E.length;F++){let R=E[G],B=E[F];if(B.start<=R.start+R.count+1)R.count=Math.max(R.count,B.start+B.count-R.start);else++G,E[G]=B}E.length=G+1;for(let F=0,R=E.length;F<R;F++){let B=E[F];J.bufferSubData(X,B.start*N.BYTES_PER_ELEMENT,N,B.start,B.count)}U.clearUpdateRanges()}U.onUploadCallback()}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function H(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let U=Q.get(Y);if(U)J.deleteBuffer(U.buffer),Q.delete(Y)}function $(Y,U){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let N=Q.get(Y);if(!N||N.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let X=Q.get(Y);if(X===void 0)Q.set(Y,Z(Y,U));else if(X.version<Y.version){if(X.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");K(X.buffer,Y,U),X.version=Y.version}}return{get:W,remove:H,update:$}}var YX=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UX=`#ifdef USE_ALPHAHASH
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
#endif`,XX=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GX=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NX=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EX=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qX=`#ifdef USE_AOMAP
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
#endif`,FX=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DX=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,OX=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RX=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MX=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LX=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,VX=`#ifdef USE_IRIDESCENCE
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
#endif`,kX=`#ifdef USE_BUMPMAP
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
#endif`,BX=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PX=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_X=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,CX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,AX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wX=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,TX=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,SX=`vec3 transformedNormal = objectNormal;
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
#endif`,jX=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vX=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yX=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fX=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bX="gl_FragColor = linearToOutputTexel( gl_FragColor );",hX=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xX=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gX=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,pX=`#ifdef USE_ENVMAP
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
#endif`,mX=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lX=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dX=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uX=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cX=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nX=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sX=`#ifdef USE_GRADIENTMAP
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
}`,iX=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oX=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rX=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,tX=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,eX=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q5=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K5=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,W5=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H5=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$5=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Y5=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U5=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,X5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N5=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E5=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q5=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F5=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D5=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O5=`#if defined( USE_POINTS_UV )
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
#endif`,R5=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M5=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L5=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V5=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k5=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B5=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,I5=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z5=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,P5=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A5=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,w5=`#ifdef USE_NORMALMAP
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
#endif`,T5=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S5=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j5=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v5=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y5=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f5=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,b5=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h5=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x5=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g5=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p5=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m5=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l5=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,d5=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u5=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,c5=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,n5=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s5=`#ifdef USE_SKINNING
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
#endif`,i5=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o5=`#ifdef USE_SKINNING
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
#endif`,a5=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r5=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e5=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,JG=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,QG=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ZG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,KG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,WG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,HG=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$G=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YG=`uniform sampler2D t2D;
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
}`,UG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XG=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NG=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EG=`#include <common>
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
}`,qG=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,FG=`#define DISTANCE
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
}`,DG=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,OG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RG=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MG=`uniform float scale;
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
}`,LG=`uniform vec3 diffuse;
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
}`,VG=`#include <common>
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
}`,kG=`uniform vec3 diffuse;
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
}`,BG=`#define LAMBERT
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
}`,IG=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,zG=`#define MATCAP
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
}`,PG=`#define MATCAP
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
}`,_G=`#define NORMAL
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
}`,CG=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AG=`#define PHONG
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
}`,wG=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,TG=`#define STANDARD
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
}`,SG=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,jG=`#define TOON
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
}`,vG=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,yG=`uniform float size;
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
}`,fG=`uniform vec3 diffuse;
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
}`,bG=`#include <common>
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
}`,hG=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,xG=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,gG=`uniform vec3 diffuse;
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
}`,c0={alphahash_fragment:YX,alphahash_pars_fragment:UX,alphamap_fragment:XX,alphamap_pars_fragment:GX,alphatest_fragment:NX,alphatest_pars_fragment:EX,aomap_fragment:qX,aomap_pars_fragment:FX,batching_pars_vertex:DX,batching_vertex:OX,begin_vertex:RX,beginnormal_vertex:MX,bsdfs:LX,iridescence_fragment:VX,bumpmap_pars_fragment:kX,clipping_planes_fragment:BX,clipping_planes_pars_fragment:IX,clipping_planes_pars_vertex:zX,clipping_planes_vertex:PX,color_fragment:_X,color_pars_fragment:CX,color_pars_vertex:AX,color_vertex:wX,common:TX,defaultnormal_vertex:SX,displacementmap_pars_vertex:jX,displacementmap_vertex:vX,emissivemap_fragment:yX,emissivemap_pars_fragment:fX,colorspace_fragment:bX,colorspace_pars_fragment:hX,envmap_fragment:xX,envmap_common_pars_fragment:gX,envmap_pars_fragment:pX,envmap_pars_vertex:mX,envmap_physical_pars_fragment:tX,envmap_vertex:lX,fog_vertex:dX,fog_pars_vertex:uX,fog_fragment:cX,fog_pars_fragment:nX,gradientmap_pars_fragment:sX,lightmap_pars_fragment:iX,lights_lambert_fragment:oX,lights_lambert_pars_fragment:aX,lights_pars_begin:rX,lights_toon_fragment:eX,lights_toon_pars_fragment:J5,lights_phong_fragment:Q5,lights_phong_pars_fragment:Z5,lights_physical_fragment:K5,lights_physical_pars_fragment:W5,lights_fragment_begin:H5,lights_fragment_maps:$5,lights_fragment_end:Y5,lightprobes_pars_fragment:U5,logdepthbuf_fragment:X5,logdepthbuf_pars_fragment:G5,logdepthbuf_pars_vertex:N5,logdepthbuf_vertex:E5,map_fragment:q5,map_pars_fragment:F5,map_particle_fragment:D5,map_particle_pars_fragment:O5,metalnessmap_fragment:R5,metalnessmap_pars_fragment:M5,morphinstance_vertex:L5,morphcolor_vertex:V5,morphnormal_vertex:k5,morphtarget_pars_vertex:B5,morphtarget_vertex:I5,normal_fragment_begin:z5,normal_fragment_maps:P5,normal_pars_fragment:_5,normal_pars_vertex:C5,normal_vertex:A5,normalmap_pars_fragment:w5,clearcoat_normal_fragment_begin:T5,clearcoat_normal_fragment_maps:S5,clearcoat_pars_fragment:j5,iridescence_pars_fragment:v5,opaque_fragment:y5,packing:f5,premultiplied_alpha_fragment:b5,project_vertex:h5,dithering_fragment:x5,dithering_pars_fragment:g5,roughnessmap_fragment:p5,roughnessmap_pars_fragment:m5,shadowmap_pars_fragment:l5,shadowmap_pars_vertex:d5,shadowmap_vertex:u5,shadowmask_pars_fragment:c5,skinbase_vertex:n5,skinning_pars_vertex:s5,skinning_vertex:i5,skinnormal_vertex:o5,specularmap_fragment:a5,specularmap_pars_fragment:r5,tonemapping_fragment:t5,tonemapping_pars_fragment:e5,transmission_fragment:JG,transmission_pars_fragment:QG,uv_pars_fragment:ZG,uv_pars_vertex:KG,uv_vertex:WG,worldpos_vertex:HG,background_vert:$G,background_frag:YG,backgroundCube_vert:UG,backgroundCube_frag:XG,cube_vert:GG,cube_frag:NG,depth_vert:EG,depth_frag:qG,distance_vert:FG,distance_frag:DG,equirect_vert:OG,equirect_frag:RG,linedashed_vert:MG,linedashed_frag:LG,meshbasic_vert:VG,meshbasic_frag:kG,meshlambert_vert:BG,meshlambert_frag:IG,meshmatcap_vert:zG,meshmatcap_frag:PG,meshnormal_vert:_G,meshnormal_frag:CG,meshphong_vert:AG,meshphong_frag:wG,meshphysical_vert:TG,meshphysical_frag:SG,meshtoon_vert:jG,meshtoon_frag:vG,points_vert:yG,points_frag:fG,shadow_vert:bG,shadow_frag:hG,sprite_vert:xG,sprite_frag:gG},R0={common:{diffuse:{value:new X0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new h0},alphaMap:{value:null},alphaMapTransform:{value:new h0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new h0}},envmap:{envMap:{value:null},envMapRotation:{value:new h0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new h0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new h0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new h0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new h0},normalScale:{value:new F0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new h0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new h0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new h0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new h0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new X0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new X0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new h0},alphaTest:{value:0},uvTransform:{value:new h0}},sprite:{diffuse:{value:new X0(16777215)},opacity:{value:1},center:{value:new F0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new h0},alphaMap:{value:null},alphaMapTransform:{value:new h0},alphaTest:{value:0}}},AJ={basic:{uniforms:n9([R0.common,R0.specularmap,R0.envmap,R0.aomap,R0.lightmap,R0.fog]),vertexShader:c0.meshbasic_vert,fragmentShader:c0.meshbasic_frag},lambert:{uniforms:n9([R0.common,R0.specularmap,R0.envmap,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.fog,R0.lights,{emissive:{value:new X0(0)},envMapIntensity:{value:1}}]),vertexShader:c0.meshlambert_vert,fragmentShader:c0.meshlambert_frag},phong:{uniforms:n9([R0.common,R0.specularmap,R0.envmap,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.fog,R0.lights,{emissive:{value:new X0(0)},specular:{value:new X0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:c0.meshphong_vert,fragmentShader:c0.meshphong_frag},standard:{uniforms:n9([R0.common,R0.envmap,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.roughnessmap,R0.metalnessmap,R0.fog,R0.lights,{emissive:{value:new X0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:c0.meshphysical_vert,fragmentShader:c0.meshphysical_frag},toon:{uniforms:n9([R0.common,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.gradientmap,R0.fog,R0.lights,{emissive:{value:new X0(0)}}]),vertexShader:c0.meshtoon_vert,fragmentShader:c0.meshtoon_frag},matcap:{uniforms:n9([R0.common,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.fog,{matcap:{value:null}}]),vertexShader:c0.meshmatcap_vert,fragmentShader:c0.meshmatcap_frag},points:{uniforms:n9([R0.points,R0.fog]),vertexShader:c0.points_vert,fragmentShader:c0.points_frag},dashed:{uniforms:n9([R0.common,R0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:c0.linedashed_vert,fragmentShader:c0.linedashed_frag},depth:{uniforms:n9([R0.common,R0.displacementmap]),vertexShader:c0.depth_vert,fragmentShader:c0.depth_frag},normal:{uniforms:n9([R0.common,R0.bumpmap,R0.normalmap,R0.displacementmap,{opacity:{value:1}}]),vertexShader:c0.meshnormal_vert,fragmentShader:c0.meshnormal_frag},sprite:{uniforms:n9([R0.sprite,R0.fog]),vertexShader:c0.sprite_vert,fragmentShader:c0.sprite_frag},background:{uniforms:{uvTransform:{value:new h0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:c0.background_vert,fragmentShader:c0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new h0}},vertexShader:c0.backgroundCube_vert,fragmentShader:c0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:c0.cube_vert,fragmentShader:c0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:c0.equirect_vert,fragmentShader:c0.equirect_frag},distance:{uniforms:n9([R0.common,R0.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:c0.distance_vert,fragmentShader:c0.distance_frag},shadow:{uniforms:n9([R0.lights,R0.fog,{color:{value:new X0(0)},opacity:{value:1}}]),vertexShader:c0.shadow_vert,fragmentShader:c0.shadow_frag}};AJ.physical={uniforms:n9([AJ.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new h0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new h0},clearcoatNormalScale:{value:new F0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new h0},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new h0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new h0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new h0},sheen:{value:0},sheenColor:{value:new X0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new h0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new h0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new h0},transmissionSamplerSize:{value:new F0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new h0},attenuationDistance:{value:0},attenuationColor:{value:new X0(0)},specularColor:{value:new X0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new h0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new h0},anisotropyVector:{value:new F0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new h0}}]),vertexShader:c0.meshphysical_vert,fragmentShader:c0.meshphysical_frag};var zQ={r:0,b:0,g:0},pG=new J9,c$=new h0;c$.set(-1,0,0,0,1,0,0,0,1);function mG(J,Q,Z,K,W,H){let $=new X0(0),Y=W===!0?0:1,U,X,N=null,E=0,G=null;function F(I){let z=I.isScene===!0?I.background:null;if(z&&z.isTexture){let V=I.backgroundBlurriness>0;z=Q.get(z,V)}return z}function R(I){let z=!1,V=F(I);if(V===null)D($,Y);else if(V&&V.isColor)D(V,1),z=!0;let _=J.xr.getEnvironmentBlendMode();if(_==="additive")Z.buffers.color.setClear(0,0,0,1,H);else if(_==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,H);if(J.autoClear||z)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function B(I,z){let V=F(z);if(V&&V.isCubeTexture){if(X===void 0)X=new Q0(new u0(1,1,1),new k9({name:"BackgroundCubeMaterial",uniforms:B8(AJ.backgroundCube.uniforms),vertexShader:AJ.backgroundCube.vertexShader,fragmentShader:AJ.backgroundCube.fragmentShader,side:f9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),X.geometry.deleteAttribute("uv"),X.onBeforeRender=function(_,C,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(X.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),K.update(X);if(X.material.uniforms.envMap.value=V,X.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,X.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,X.material.uniforms.backgroundRotation.value.setFromMatrix4(pG.makeRotationFromEuler(z.backgroundRotation)).transpose(),V.isRenderTargetTexture===!1)X.material.uniforms.backgroundRotation.value.premultiply(c$);if(X.material.toneMapped=a0.getTransfer(V.colorSpace)!==U9,N!==V||E!==V.version||G!==J.toneMapping)X.material.needsUpdate=!0,N=V,E=V.version,G=J.toneMapping;X.layers.enableAll(),I.unshift(X,X.geometry,X.material,0,0,null)}else if(V&&V.isTexture){if(U===void 0)U=new Q0(new c9(2,2),new k9({name:"BackgroundMaterial",uniforms:B8(AJ.background.uniforms),vertexShader:AJ.background.vertexShader,fragmentShader:AJ.background.fragmentShader,side:Q7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),K.update(U);if(U.material.uniforms.t2D.value=V,U.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,U.material.toneMapped=a0.getTransfer(V.colorSpace)!==U9,V.matrixAutoUpdate===!0)V.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(V.matrix),N!==V||E!==V.version||G!==J.toneMapping)U.material.needsUpdate=!0,N=V,E=V.version,G=J.toneMapping;U.layers.enableAll(),I.unshift(U,U.geometry,U.material,0,0,null)}}function D(I,z){I.getRGB(zQ,TK(J)),Z.buffers.color.setClear(zQ.r,zQ.g,zQ.b,z,H)}function q(){if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return $},setClearColor:function(I,z=1){$.set(I),Y=z,D($,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(I){Y=I,D($,Y)},render:R,addToRenderList:B,dispose:q}}function lG(J,Q){let Z=J.getParameter(J.MAX_VERTEX_ATTRIBS),K={},W=G(null),H=W,$=!1;function Y(j,p,o,A,u){let r=!1,x=E(j,A,o,p);if(H!==x)H=x,X(H.object);if(r=F(j,A,o,u),r)R(j,A,o,u);if(u!==null)Q.update(u,J.ELEMENT_ARRAY_BUFFER);if(r||$){if($=!1,V(j,p,o,A),u!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(u).buffer)}}function U(){return J.createVertexArray()}function X(j){return J.bindVertexArray(j)}function N(j){return J.deleteVertexArray(j)}function E(j,p,o,A){let u=A.wireframe===!0,r=K[p.id];if(r===void 0)r={},K[p.id]=r;let x=j.isInstancedMesh===!0?j.id:0,Y0=r[x];if(Y0===void 0)Y0={},r[x]=Y0;let c=Y0[o.id];if(c===void 0)c={},Y0[o.id]=c;let e=c[u];if(e===void 0)e=G(U()),c[u]=e;return e}function G(j){let p=[],o=[],A=[];for(let u=0;u<Z;u++)p[u]=0,o[u]=0,A[u]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:p,enabledAttributes:o,attributeDivisors:A,object:j,attributes:{},index:null}}function F(j,p,o,A){let u=H.attributes,r=p.attributes,x=0,Y0=o.getAttributes();for(let c in Y0)if(Y0[c].location>=0){let W0=u[c],C0=r[c];if(C0===void 0){if(c==="instanceMatrix"&&j.instanceMatrix)C0=j.instanceMatrix;if(c==="instanceColor"&&j.instanceColor)C0=j.instanceColor}if(W0===void 0)return!0;if(W0.attribute!==C0)return!0;if(C0&&W0.data!==C0.data)return!0;x++}if(H.attributesNum!==x)return!0;if(H.index!==A)return!0;return!1}function R(j,p,o,A){let u={},r=p.attributes,x=0,Y0=o.getAttributes();for(let c in Y0)if(Y0[c].location>=0){let W0=r[c];if(W0===void 0){if(c==="instanceMatrix"&&j.instanceMatrix)W0=j.instanceMatrix;if(c==="instanceColor"&&j.instanceColor)W0=j.instanceColor}let C0={};if(C0.attribute=W0,W0&&W0.data)C0.data=W0.data;u[c]=C0,x++}H.attributes=u,H.attributesNum=x,H.index=A}function B(){let j=H.newAttributes;for(let p=0,o=j.length;p<o;p++)j[p]=0}function D(j){q(j,0)}function q(j,p){let{newAttributes:o,enabledAttributes:A,attributeDivisors:u}=H;if(o[j]=1,A[j]===0)J.enableVertexAttribArray(j),A[j]=1;if(u[j]!==p)J.vertexAttribDivisor(j,p),u[j]=p}function I(){let{newAttributes:j,enabledAttributes:p}=H;for(let o=0,A=p.length;o<A;o++)if(p[o]!==j[o])J.disableVertexAttribArray(o),p[o]=0}function z(j,p,o,A,u,r,x){if(x===!0)J.vertexAttribIPointer(j,p,o,u,r);else J.vertexAttribPointer(j,p,o,A,u,r)}function V(j,p,o,A){B();let u=A.attributes,r=o.getAttributes(),x=p.defaultAttributeValues;for(let Y0 in r){let c=r[Y0];if(c.location>=0){let e=u[Y0];if(e===void 0){if(Y0==="instanceMatrix"&&j.instanceMatrix)e=j.instanceMatrix;if(Y0==="instanceColor"&&j.instanceColor)e=j.instanceColor}if(e!==void 0){let{normalized:W0,itemSize:C0}=e,a=Q.get(e);if(a===void 0)continue;let{buffer:K0,type:z0,bytesPerElement:j0}=a,y0=z0===J.INT||z0===J.UNSIGNED_INT||e.gpuType===zZ;if(e.isInterleavedBufferAttribute){let P0=e.data,Z9=P0.isInterleavedBuffer===!0?P0.stride:P0.itemSize,n0=e.offset;if(P0.isInstancedInterleavedBuffer||P0.isInstancedBufferAttribute){for(let p0=0;p0<c.locationSize;p0++)q(c.location+p0,P0.meshPerAttribute);if(j.isInstancedMesh!==!0&&A._maxInstanceCount===void 0)A._maxInstanceCount=P0.meshPerAttribute*P0.count}else for(let p0=0;p0<c.locationSize;p0++)D(c.location+p0);J.bindBuffer(J.ARRAY_BUFFER,K0);for(let p0=0;p0<c.locationSize;p0++)z(c.location+p0,C0/c.locationSize,z0,W0,Z9*j0,(n0+C0/c.locationSize*p0)*j0,y0)}else{if(e.isInstancedBufferAttribute){for(let P0=0;P0<c.locationSize;P0++)q(c.location+P0,e.meshPerAttribute);if(j.isInstancedMesh!==!0&&A._maxInstanceCount===void 0)A._maxInstanceCount=e.meshPerAttribute*e.count}else for(let P0=0;P0<c.locationSize;P0++)D(c.location+P0);J.bindBuffer(J.ARRAY_BUFFER,K0);for(let P0=0;P0<c.locationSize;P0++)z(c.location+P0,C0/c.locationSize,z0,W0,C0*j0,C0/c.locationSize*P0*j0,y0)}}else if(x!==void 0){let W0=x[Y0];if(W0!==void 0)switch(W0.length){case 2:J.vertexAttrib2fv(c.location,W0);break;case 3:J.vertexAttrib3fv(c.location,W0);break;case 4:J.vertexAttrib4fv(c.location,W0);break;default:J.vertexAttrib1fv(c.location,W0)}}}}I()}function _(){w();for(let j in K){let p=K[j];for(let o in p){let A=p[o];for(let u in A){let r=A[u];for(let x in r)N(r[x].object),delete r[x];delete A[u]}}delete K[j]}}function C(j){if(K[j.id]===void 0)return;let p=K[j.id];for(let o in p){let A=p[o];for(let u in A){let r=A[u];for(let x in r)N(r[x].object),delete r[x];delete A[u]}}delete K[j.id]}function O(j){for(let p in K){let o=K[p];for(let A in o){let u=o[A];if(u[j.id]===void 0)continue;let r=u[j.id];for(let x in r)N(r[x].object),delete r[x];delete u[j.id]}}}function k(j){for(let p in K){let o=K[p],A=j.isInstancedMesh===!0?j.id:0,u=o[A];if(u===void 0)continue;for(let r in u){let x=u[r];for(let Y0 in x)N(x[Y0].object),delete x[Y0];delete u[r]}if(delete o[A],Object.keys(o).length===0)delete K[p]}}function w(){if(g(),$=!0,H===W)return;H=W,X(H.object)}function g(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:Y,reset:w,resetDefaultState:g,dispose:_,releaseStatesOfGeometry:C,releaseStatesOfObject:k,releaseStatesOfProgram:O,initAttributes:B,enableAttribute:D,disableUnusedAttributes:I}}function dG(J,Q,Z){let K;function W(U){K=U}function H(U,X){J.drawArrays(K,U,X),Z.update(X,K,1)}function $(U,X,N){if(N===0)return;J.drawArraysInstanced(K,U,X,N),Z.update(X,K,N)}function Y(U,X,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(K,U,0,X,0,N);let G=0;for(let F=0;F<N;F++)G+=X[F];Z.update(G,K,1)}this.setMode=W,this.render=H,this.renderInstances=$,this.renderMultiDraw=Y}function uG(J,Q,Z,K){let W;function H(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let O=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function $(O){if(O!==pJ&&K.convert(O)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(O){let k=O===zJ&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(O!==RJ&&O!==gJ&&!k&&K.convert(O)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function U(O){if(O==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";O="mediump"}if(O==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let X=Z.precision!==void 0?Z.precision:"highp",N=U(X);if(N!==X)v0("WebGLRenderer:",X,"not supported, using",N,"instead."),X=N;let E=Z.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),G=Z.logarithmicDepthBuffer===!0&&E===!1;if(Z.reversedDepthBuffer===!0&&E===!1)v0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(Z.logarithmicDepthBuffer===!0&&E===!0)v0("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_TEXTURE_SIZE),D=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),q=J.getParameter(J.MAX_VERTEX_ATTRIBS),I=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),z=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),_=J.getParameter(J.MAX_SAMPLES),C=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:U,textureFormatReadable:$,textureTypeReadable:Y,precision:X,logarithmicDepthBuffer:G,reversedDepthBuffer:E,maxTextures:F,maxVertexTextures:R,maxTextureSize:B,maxCubemapSize:D,maxAttributes:q,maxVertexUniforms:I,maxVaryings:z,maxFragmentUniforms:V,maxSamples:_,samples:C}}function cG(J){let Q=this,Z=null,K=0,W=!1,H=!1,$=new kJ,Y=new h0,U={value:null,needsUpdate:!1};this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function(E,G){let F=E.length!==0||G||K!==0||W;return W=G,K=E.length,F},this.beginShadows=function(){H=!0,N(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(E,G){Z=N(E,G,0)},this.setState=function(E,G,F){let{clippingPlanes:R,clipIntersection:B,clipShadows:D}=E,q=J.get(E);if(!W||R===null||R.length===0||H&&!D)if(H)N(null);else X();else{let I=H?0:K,z=I*4,V=q.clippingState||null;U.value=V,V=N(R,G,z,F);for(let _=0;_!==z;++_)V[_]=Z[_];q.clippingState=V,this.numIntersection=B?this.numPlanes:0,this.numPlanes+=I}};function X(){if(U.value!==Z)U.value=Z,U.needsUpdate=K>0;Q.numPlanes=K,Q.numIntersection=0}function N(E,G,F,R){let B=E!==null?E.length:0,D=null;if(B!==0){if(D=U.value,R!==!0||D===null){let q=F+B*4,I=G.matrixWorldInverse;if(Y.getNormalMatrix(I),D===null||D.length<q)D=new Float32Array(q);for(let z=0,V=F;z!==B;++z,V+=4)$.copy(E[z]).applyMatrix4(I,Y),$.normal.toArray(D,V),D[V+3]=$.constant}U.value=D,U.needsUpdate=!0}return Q.numPlanes=B,Q.numIntersection=0,D}}class CQ extends UJ{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let Z={width:J,height:J,depth:1},K=[Z,Z,Z,Z,Z,Z];this.texture=new UQ(K),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let Z={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},K=new u0(5,5,5),W=new k9({name:"CubemapFromEquirect",uniforms:B8(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,side:f9,blending:R8});W.uniforms.tEquirect.value=Q;let H=new Q0(K,W),$=Q.minFilter;if(Q.minFilter===J8)Q.minFilter=$J;return new t7(1,10,this).update(J,H),Q.minFilter=$,H.geometry.dispose(),H.material.dispose(),this}clear(J,Q=!0,Z=!0,K=!0){let W=J.getRenderTarget();for(let H=0;H<6;H++)J.setRenderTarget(this,H),J.clear(Q,Z,K);J.setRenderTarget(W)}}var I$=256,nG=3,sG=20,n$=256,s$=16,iG=3,oG=new S,aG=new X0;class _Q{constructor(J){this._renderer=J,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new t7(1,10,null),this._boxMesh=new Q0(new u0(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(J,Q=0,Z=0.1,K=100,W={}){let{size:H=256,position:$=oG}=W,Y=this._renderer;this._setSize(H);let U=this._allocateTarget(),X=this._getSourceTarget(!0);if(Q>0)X.texture.mipmapsAutoUpdate=!1;let{autoClear:N,autoClearColor:E,autoClearDepth:G,autoClearStencil:F}=Y,R=J.background;if(Y.autoClear=!0,Y.autoClearColor=!0,Y.autoClearDepth=!0,Y.autoClearStencil=!0,R===null)J.background=Y.getClearColor(aG);let B=new t7(Z,K,X);if(B.position.copy($),B.update(Y,J),Y.autoClear=N,Y.autoClearColor=E,Y.autoClearDepth=G,Y.autoClearStencil=F,J.background=R,Q>0)X.texture.mipmapsAutoUpdate=!0,this._blur(U,Q);return this._applyPMREM(U),U}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=_$(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=P$(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(J,Q){return Q>0?1-Math.sqrt(1-J/Q):0}_setSize(J){this._cubeSize=Math.max(I$,DK(J))}_fromTexture(J,Q){if(J.mapping===b7||J.mapping===K7)this._setSize(J.image.length===0?I$:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);let Z=Q||this._allocateTarget();return this._textureToCubemap(J),this._applyPMREM(Z),Z}_allocateTarget(){let J=this._cubeSize,Q=z$(J,!1,!1),Z=Math.log2(J)-nG;for(let K=0;K<=Z;K++)Q.texture.mipmaps.push({width:J>>K,height:J>>K});return Q.texture.name="PMREM",Q.texture.isPMREMTexture=!0,Q}_getSourceTarget(J=!1){let Q=this._cubeSize,Z=this._sourceTarget;if(Z===null||Z.width!==Q||J&&Z.depthBuffer===!1){if(Z!==null)Z.dispose();this._sourceTarget=z$(Q,!0,J)}return this._sourceTarget}_compileMaterial(J){this._boxMesh.material=J,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(J,Q,Z){let K=this._boxMesh,W=this._cubeCamera;K.material=Z,W.renderTarget=J,W.activeMipmapLevel=Q;let H=J.width>>Q;J.viewport.set(0,0,H,H),W.update(this._renderer,K),J.viewport.set(0,0,J.width,J.height)}_textureToCubemap(J){let Q;if(J.mapping===b7||J.mapping===K7){if(this._cubemapMaterial===null)this._cubemapMaterial=_$();Q=this._cubemapMaterial,Q.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=P$();Q=this._equirectMaterial}Q.uniforms.envMap.value=J,this._renderCube(this._getSourceTarget(),0,Q)}_applyPMREM(J){if(this._ggxMaterial===null)this._ggxMaterial=rG(),this._integrationMaterial=tG();let Q=this._cubeSize,Z=J.texture.mipmaps.length-1,K=this._ggxMaterial.uniforms;K.envMap.value=this._sourceTarget.texture;let W=this._integrationMaterial.uniforms;W.envMap.value=this._sourceTarget.texture,W.sourceLod.value=Math.log2(Q/s$);for(let H=0;H<=Z;H++){let $=_Q.lodToRoughness(H,Z);if(H>Z-iG)W.roughness.value=$,this._renderCube(J,H,this._integrationMaterial);else{let Y=$>0?Math.log2(Q)+0.5*Math.log2(6/(n$*Math.pow($,4)))+0.5:0;K.roughness.value=$,K.lodBias.value=Y,this._renderCube(J,H,this._ggxMaterial)}}}_blur(J,Q){if(this._blurMaterial===null)this._blurMaterial=eG();let Z=this._blurMaterial,K=Z.uniforms,W=this._sourceTarget;K.sigma.value=Math.min(Q,Math.PI)/Math.SQRT2,K.envMap.value=W.texture,this._renderCube(J,0,Z),K.envMap.value=J.texture,this._renderCube(W,0,Z)}}function z$(J,Q,Z){return new CQ(J,{minFilter:J8,generateMipmaps:Q,type:zJ,colorSpace:YK,depthBuffer:Z})}function Z6(J,Q,Z){return new k9({name:J,uniforms:Q,vertexShader:c0.cube_vert,fragmentShader:Z,side:f9,blending:R8,depthTest:!1,depthWrite:!1})}function rG(){return Z6("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${n$}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function tG(){return Z6("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:s$}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function eG(){return Z6("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${sG}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function P$(){return Z6("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function _$(){return Z6("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function JN(J){let Q=new WeakMap,Z=new WeakMap,K=null;function W(G,F=!1){if(G===null||G===void 0)return null;if(F)return $(G);return H(G)}function H(G){if(G&&G.isTexture){let F=G.mapping;if(F===c6||F===n6)if(Q.has(G)){let R=Q.get(G).texture;return Y(R,G.mapping)}else{let R=G.image;if(R&&R.height>0){let B=new CQ(R.height);return B.fromEquirectangularTexture(J,G),Q.set(G,B),G.addEventListener("dispose",X),Y(B.texture,G.mapping)}else return null}}return G}function $(G){if(G&&G.isTexture&&G.isPMREMTexture!==!0){let F=G.mapping,R=F===c6||F===n6,B=F===b7||F===K7;if(R||B){let D=Z.get(G),q=D!==void 0?D.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==q){if(K===null)K=new _Q(J);return D=R?K.fromEquirectangular(G,D):K.fromCubemap(G,D),D.texture.pmremVersion=G.pmremVersion,Z.set(G,D),D.texture}else if(D!==void 0)return D.texture;else{let I=G.image;if(R&&I&&I.height>0||B&&I&&U(I)){if(K===null)K=new _Q(J);return D=R?K.fromEquirectangular(G):K.fromCubemap(G),D.texture.pmremVersion=G.pmremVersion,Z.set(G,D),G.addEventListener("dispose",N),D.texture}else return null}}}return G}function Y(G,F){if(F===c6)G.mapping=b7;else if(F===n6)G.mapping=K7;return G}function U(G){let F=0,R=6;for(let B=0;B<R;B++)if(G[B]!==void 0)F++;return F===R}function X(G){let F=G.target;F.removeEventListener("dispose",X);let R=Q.get(F);if(R!==void 0)Q.delete(F),R.dispose()}function N(G){let F=G.target;F.removeEventListener("dispose",N);let R=Z.get(F);if(R!==void 0)Z.delete(F),R.dispose()}function E(){if(Q=new WeakMap,Z=new WeakMap,K!==null)K.dispose(),K=null}return{get:W,dispose:E}}function QN(J){let Q={};function Z(K){if(Q[K]!==void 0)return Q[K];let W=J.getExtension(K);return Q[K]=W,W}return{has:function(K){return Z(K)!==null},init:function(){Z("EXT_color_buffer_float"),Z("WEBGL_clip_cull_distance"),Z("OES_texture_float_linear"),Z("EXT_color_buffer_half_float"),Z("WEBGL_multisampled_render_to_texture"),Z("WEBGL_render_shared_exponent")},get:function(K){let W=Z(K);if(W===null)z7("WebGLRenderer: "+K+" extension not supported.");return W}}}function ZN(J,Q,Z,K){let W={},H=new WeakMap,$=new FinalizationRegistry((R)=>delete W[R]);function Y(R){U(R.target)}function U(R){if(R.index!==null)Q.remove(R.index);for(let D in R.attributes)Q.remove(R.attributes[D]);R.removeEventListener("dispose",Y),delete W[R.id],$.unregister(R);let B=H.get(R);if(B)Q.remove(B),H.delete(R);if(K.releaseStatesOfGeometry(R),R.isInstancedBufferGeometry===!0)delete R._maxInstanceCount;Z.memory.geometries--}function X(R,B){if(W[B.id]!==void 0)return B;return B.addEventListener("dispose",Y),W[B.id]=new WeakRef(B),$.register(B,B.id,B),Z.memory.geometries++,B}function N(R){let B=R.attributes;for(let D in B)Q.update(B[D],J.ARRAY_BUFFER)}function E(R){let B=R.index,D=R.attributes.position,q=0;if(D===void 0)return;let I=B!==null?B.array.length:D.array.length/3-1,V=new(D.count>=65535?WQ:KQ)(Math.ceil(I/3)*6,1),_=V.array;if(B!==null){let O=B.array;q=B.version;for(let k=0,w=0;k<I;k+=3){let g=O[k+0],j=O[k+1],p=O[k+2];_[w++]=g,_[w++]=j,_[w++]=j,_[w++]=p,_[w++]=p,_[w++]=g}}else{q=D.version;for(let O=0,k=0;O<I;O+=3){let w=O+0,g=O+1,j=O+2;_[k++]=w,_[k++]=g,_[k++]=g,_[k++]=j,_[k++]=j,_[k++]=w}}V.version=q;let C=H.get(R);if(C)Q.remove(C);H.set(R,V)}function G(R){let B=H.get(R);if(B){let D=R.index;if(D!==null){if(B.version<D.version)E(R)}}else E(R);return H.get(R)}function F(){for(let R in W){let B=W[R].deref();if(B!==void 0)U(B)}}return{get:X,update:N,getWireframeAttribute:G,dispose:F}}function KN(J,Q,Z){let K;function W(E){K=E}let H,$;function Y(E){H=E.type,$=E.bytesPerElement}function U(E,G){J.drawElements(K,G,H,E*$),Z.update(G,K,1)}function X(E,G,F){if(F===0)return;J.drawElementsInstanced(K,G,H,E*$,F),Z.update(G,K,F)}function N(E,G,F){if(F===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(K,G,0,H,E,0,F);let B=0;for(let D=0;D<F;D++)B+=G[D];Z.update(B,K,1)}this.setMode=W,this.setIndex=Y,this.render=U,this.renderInstances=X,this.renderMultiDraw=N}function WN(J){let Q={geometries:0,textures:0},Z={frame:0,calls:0,triangles:0,points:0,lines:0};function K(H,$,Y){switch(Z.calls++,$){case J.TRIANGLES:Z.triangles+=Y*(H/3);break;case J.LINES:Z.lines+=Y*(H/2);break;case J.LINE_STRIP:Z.lines+=Y*(H-1);break;case J.LINE_LOOP:Z.lines+=Y*H;break;case J.POINTS:Z.points+=Y*H;break;default:b0("WebGLInfo: Unknown draw mode:",$);break}}function W(){Z.calls=0,Z.triangles=0,Z.points=0,Z.lines=0}return{memory:Q,render:Z,programs:null,autoReset:!0,reset:W,update:K}}function HN(J,Q,Z){let K=new WeakMap,W=new M9;function H($,Y,U){let X=$.morphTargetInfluences,N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,E=N!==void 0?N.length:0,G=K.get(Y);if(G===void 0||G.count!==E){let w=function(){O.dispose(),K.delete(Y),Y.removeEventListener("dispose",w)};if(G!==void 0)G.texture.dispose();let F=Y.morphAttributes.position!==void 0,R=Y.morphAttributes.normal!==void 0,B=Y.morphAttributes.color!==void 0,D=Y.morphAttributes.position||[],q=Y.morphAttributes.normal||[],I=Y.morphAttributes.color||[],z=0;if(F===!0)z=1;if(R===!0)z=2;if(B===!0)z=3;let V=Y.attributes.position.count*z,_=1;if(V>Q.maxTextureSize)_=Math.ceil(V/Q.maxTextureSize),V=Q.maxTextureSize;let C=new Float32Array(V*_*4*E),O=new ZQ(C,V,_,E);O.type=gJ,O.needsUpdate=!0;let k=z*4;for(let g=0;g<E;g++){let j=D[g],p=q[g],o=I[g],A=V*_*4*g;for(let u=0;u<j.count;u++){let r=u*k;if(F===!0)W.fromBufferAttribute(j,u),C[A+r+0]=W.x,C[A+r+1]=W.y,C[A+r+2]=W.z,C[A+r+3]=0;if(R===!0)W.fromBufferAttribute(p,u),C[A+r+4]=W.x,C[A+r+5]=W.y,C[A+r+6]=W.z,C[A+r+7]=0;if(B===!0)W.fromBufferAttribute(o,u),C[A+r+8]=W.x,C[A+r+9]=W.y,C[A+r+10]=W.z,C[A+r+11]=o.itemSize===4?W.w:1}}G={count:E,texture:O,size:new F0(V,_)},K.set(Y,G),Y.addEventListener("dispose",w)}if($.isInstancedMesh===!0&&$.morphTexture!==null)U.getUniforms().setValue(J,"morphTexture",$.morphTexture,Z);else{let F=0;for(let B=0;B<X.length;B++)F+=X[B];let R=Y.morphTargetsRelative?1:1-F;U.getUniforms().setValue(J,"morphTargetBaseInfluence",R),U.getUniforms().setValue(J,"morphTargetInfluences",X)}U.getUniforms().setValue(J,"morphTargetsTexture",G.texture,Z),U.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:H}}function $N(J,Q,Z,K,W){let H=new WeakMap;function $(X){let N=W.render.frame,E=X.geometry,G=Q.get(X,E);if(H.get(G)!==N)Q.update(G),H.set(G,N);if(X.isInstancedMesh){if(X.hasEventListener("dispose",U)===!1)X.addEventListener("dispose",U);if(H.get(X)!==N){if(Z.update(X.instanceMatrix,J.ARRAY_BUFFER),X.instanceColor!==null)Z.update(X.instanceColor,J.ARRAY_BUFFER);H.set(X,N)}}if(X.isSkinnedMesh){let F=X.skeleton;if(H.get(F)!==N)F.update(),H.set(F,N)}return G}function Y(){H=new WeakMap}function U(X){let N=X.target;if(N.removeEventListener("dispose",U),K.releaseStatesOfObject(N),Z.remove(N.instanceMatrix),N.instanceColor!==null)Z.remove(N.instanceColor)}return{update:$,dispose:Y}}var YN={[MZ]:"LINEAR_TONE_MAPPING",[LZ]:"REINHARD_TONE_MAPPING",[VZ]:"CINEON_TONE_MAPPING",[M8]:"ACES_FILMIC_TONE_MAPPING",[BZ]:"AGX_TONE_MAPPING",[IZ]:"NEUTRAL_TONE_MAPPING",[kZ]:"CUSTOM_TONE_MAPPING"};function UN(J,Q,Z,K,W,H){let $=new UJ(Q,Z,{type:J,depthBuffer:W,stencilBuffer:H,samples:K?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,U=null,X=null,N=new C9;N.setAttribute("position",new W9([-1,3,0,-1,-1,0,3,-1,0],3)),N.setAttribute("uv",new W9([0,2,0,0,2,0],2));let E=new SK({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),G=new Q0(N,E),F=new kQ(-1,1,1,-1,0,1),R=null,B=null,D=!1,q,I=null,z=[],V=!1;this.setSize=function(_,C){if($.setSize(_,C),Y!==null)Y.setSize(_,C);if(U!==null)U.setSize(_,C);for(let O=0;O<z.length;O++){let k=z[O];if(k.setSize)k.setSize(_,C)}},this.setEffects=function(_){z=_,V=z.length>0&&z[0].isRenderPass===!0;let{width:C,height:O}=$;if(z.length>0&&Y===null)Y=new UJ(C,O,{type:zJ,depthBuffer:!1,stencilBuffer:!1}),U=new UJ(C,O,{type:zJ,depthBuffer:!1,stencilBuffer:!1});let k=W===!0&&z.some((w)=>w.needsDepthTexture===!0);if(k!==($.depthTexture!==null)){if(k===!0&&X===null){if(X=new W8(C,O),H===!0)X.format=Z8,X.type=L8}$.dispose(),$.depthTexture=k?X:null,$.resolveDepthBuffer=k,$.storeMultisampledDepthBuffer=k}for(let w=0;w<z.length;w++){let g=z[w];if(g.setSize)g.setSize(C,O);if(k&&g.needsDepthTexture===!0&&g.setDepthTexture)g.setDepthTexture(X)}},this.begin=function(_,C){if(D)return!1;if(_.toneMapping===IJ&&z.length===0)return!1;if(I=C,C!==null){let{width:O,height:k}=C;if($.width!==O||$.height!==k)this.setSize(O,k)}if(V===!1)_.setRenderTarget($);return q=_.toneMapping,_.toneMapping=IJ,!0},this.hasRenderPass=function(){return V},this.end=function(_,C){_.toneMapping=q,D=!0;let O=$,k=Y;for(let w=0;w<z.length;w++){let g=z[w];if(g.enabled===!1)continue;if(g.render(_,k,O,C),g.needsSwap!==!1)O=k,k=k===Y?U:Y}if(R!==_.outputColorSpace||B!==_.toneMapping){if(R=_.outputColorSpace,B=_.toneMapping,E.defines={},a0.getTransfer(R)===U9)E.defines.SRGB_TRANSFER="";let w=YN[B];if(w)E.defines[w]="";E.needsUpdate=!0}E.uniforms.tDiffuse.value=O.texture,_.setRenderTarget(I),_.render(G,F),I=null,D=!1},this.isCompositing=function(){return D},this.dispose=function(){if($.dispose(),Y!==null)Y.dispose();if(U!==null)U.dispose();N.dispose(),E.dispose()}}var i$=new y9,o$=new W8(1,1),a$=new XQ(1),r$=new ZQ,t$=new VK,e$=new UQ,C$=[],A$=[],w$=new Float32Array(16),T$=new Float32Array(9),S$=new Float32Array(4);function N7(J,Q,Z){let K=J[0];if(K<=0||K>0)return J;let W=Q*Z,H=C$[W];if(H===void 0)H=new Float32Array(W),C$[W]=H;if(Q!==0){K.toArray(H,0);for(let $=1,Y=0;$!==Q;++$)Y+=Z,J[$].toArray(H,Y)}return H}function A9(J,Q){if(J.length!==Q.length)return!1;for(let Z=0,K=J.length;Z<K;Z++)if(J[Z]!==Q[Z])return!1;return!0}function w9(J,Q){for(let Z=0,K=Q.length;Z<K;Z++)J[Z]=Q[Z]}function AQ(J,Q){let Z=A$[Q];if(Z===void 0)Z=new Int32Array(Q),A$[Q]=Z;for(let K=0;K!==Q;++K)Z[K]=J.allocateTextureUnit();return Z}function XN(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1f(this.addr,Q),Z[0]=Q}function GN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(A9(Z,Q))return;J.uniform2fv(this.addr,Q),w9(Z,Q)}}function NN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else if(Q.r!==void 0){if(Z[0]!==Q.r||Z[1]!==Q.g||Z[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),Z[0]=Q.r,Z[1]=Q.g,Z[2]=Q.b}else{if(A9(Z,Q))return;J.uniform3fv(this.addr,Q),w9(Z,Q)}}function EN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(A9(Z,Q))return;J.uniform4fv(this.addr,Q),w9(Z,Q)}}function qN(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(A9(Z,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),w9(Z,Q)}else{if(A9(Z,K))return;S$.set(K),J.uniformMatrix2fv(this.addr,!1,S$),w9(Z,K)}}function FN(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(A9(Z,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),w9(Z,Q)}else{if(A9(Z,K))return;T$.set(K),J.uniformMatrix3fv(this.addr,!1,T$),w9(Z,K)}}function DN(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(A9(Z,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),w9(Z,Q)}else{if(A9(Z,K))return;w$.set(K),J.uniformMatrix4fv(this.addr,!1,w$),w9(Z,K)}}function ON(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1i(this.addr,Q),Z[0]=Q}function RN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(A9(Z,Q))return;J.uniform2iv(this.addr,Q),w9(Z,Q)}}function MN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(A9(Z,Q))return;J.uniform3iv(this.addr,Q),w9(Z,Q)}}function LN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(A9(Z,Q))return;J.uniform4iv(this.addr,Q),w9(Z,Q)}}function VN(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1ui(this.addr,Q),Z[0]=Q}function kN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(A9(Z,Q))return;J.uniform2uiv(this.addr,Q),w9(Z,Q)}}function BN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(A9(Z,Q))return;J.uniform3uiv(this.addr,Q),w9(Z,Q)}}function IN(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(A9(Z,Q))return;J.uniform4uiv(this.addr,Q),w9(Z,Q)}}function wQ(J){if(J.version===0)J.compareFunction=NK,J.needsUpdate=!0;return J}function zN(J,Q,Z){let K=this.cache,W=Z.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;let H;if(this.type===J.SAMPLER_2D_SHADOW)H=wQ(o$);else H=i$;Z.setTexture2D(Q||H,W)}function PN(J,Q,Z){let K=this.cache,W=Z.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;Z.setTexture3D(Q||t$,W)}function _N(J,Q,Z){let K=this.cache,W=Z.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;let H;if(this.type===J.SAMPLER_CUBE_SHADOW)H=wQ(a$);else H=e$;Z.setTextureCube(Q||H,W)}function CN(J,Q,Z){let K=this.cache,W=Z.allocateTextureUnit();if(K[0]!==W)J.uniform1i(this.addr,W),K[0]=W;Z.setTexture2DArray(Q||r$,W)}function AN(J){switch(J){case 5126:return XN;case 35664:return GN;case 35665:return NN;case 35666:return EN;case 35674:return qN;case 35675:return FN;case 35676:return DN;case 5124:case 35670:return ON;case 35667:case 35671:return RN;case 35668:case 35672:return MN;case 35669:case 35673:return LN;case 5125:return VN;case 36294:return kN;case 36295:return BN;case 36296:return IN;case 35678:case 36198:case 36298:case 36306:case 35682:return zN;case 35679:case 36299:case 36307:return PN;case 35680:case 36300:case 36308:case 36293:return _N;case 36289:case 36303:case 36311:case 36292:return CN}}function wN(J,Q){J.uniform1fv(this.addr,Q)}function TN(J,Q){let Z=N7(Q,this.size,2);J.uniform2fv(this.addr,Z)}function SN(J,Q){let Z=N7(Q,this.size,3);J.uniform3fv(this.addr,Z)}function jN(J,Q){let Z=N7(Q,this.size,4);J.uniform4fv(this.addr,Z)}function vN(J,Q){let Z=N7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,Z)}function yN(J,Q){let Z=N7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,Z)}function fN(J,Q){let Z=N7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,Z)}function bN(J,Q){J.uniform1iv(this.addr,Q)}function hN(J,Q){J.uniform2iv(this.addr,Q)}function xN(J,Q){J.uniform3iv(this.addr,Q)}function gN(J,Q){J.uniform4iv(this.addr,Q)}function pN(J,Q){J.uniform1uiv(this.addr,Q)}function mN(J,Q){J.uniform2uiv(this.addr,Q)}function lN(J,Q){J.uniform3uiv(this.addr,Q)}function dN(J,Q){J.uniform4uiv(this.addr,Q)}function uN(J,Q,Z){let K=this.cache,W=Q.length,H=AQ(Z,W);if(!A9(K,H))J.uniform1iv(this.addr,H),w9(K,H);let $;if(this.type===J.SAMPLER_2D_SHADOW)$=wQ(o$);else $=i$;for(let Y=0;Y!==W;++Y)Z.setTexture2D(Q[Y]||$,H[Y])}function cN(J,Q,Z){let K=this.cache,W=Q.length,H=AQ(Z,W);if(!A9(K,H))J.uniform1iv(this.addr,H),w9(K,H);for(let $=0;$!==W;++$)Z.setTexture3D(Q[$]||t$,H[$])}function nN(J,Q,Z){let K=this.cache,W=Q.length,H=AQ(Z,W);if(!A9(K,H))J.uniform1iv(this.addr,H),w9(K,H);let $;if(this.type===J.SAMPLER_CUBE_SHADOW)$=wQ(a$);else $=e$;for(let Y=0;Y!==W;++Y)Z.setTextureCube(Q[Y]||$,H[Y])}function sN(J,Q,Z){let K=this.cache,W=Q.length,H=AQ(Z,W);if(!A9(K,H))J.uniform1iv(this.addr,H),w9(K,H);for(let $=0;$!==W;++$)Z.setTexture2DArray(Q[$]||r$,H[$])}function iN(J){switch(J){case 5126:return wN;case 35664:return TN;case 35665:return SN;case 35666:return jN;case 35674:return vN;case 35675:return yN;case 35676:return fN;case 5124:case 35670:return bN;case 35667:case 35671:return hN;case 35668:case 35672:return xN;case 35669:case 35673:return gN;case 5125:return pN;case 36294:return mN;case 36295:return lN;case 36296:return dN;case 35678:case 36198:case 36298:case 36306:case 35682:return uN;case 35679:case 36299:case 36307:return cN;case 35680:case 36300:case 36308:case 36293:return nN;case 36289:case 36303:case 36311:case 36292:return sN}}class JY{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.setValue=AN(Q.type)}}class QY{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=iN(Q.type)}}class ZY{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,Z){let K=this.seq;for(let W=0,H=K.length;W!==H;++W){let $=K[W];$.setValue(J,Q[$.id],Z)}}}var iK=/(\w+)(\])?(\[|\.)?/g;function j$(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function oN(J,Q,Z){let K=J.name,W=K.length;iK.lastIndex=0;while(!0){let H=iK.exec(K),$=iK.lastIndex,Y=H[1],U=H[2]==="]",X=H[3];if(U)Y=Y|0;if(X===void 0||X==="["&&$+2===W){j$(Z,X===void 0?new JY(Y,J,Q):new QY(Y,J,Q));break}else{let E=Z.map[Y];if(E===void 0)E=new ZY(Y),j$(Z,E);Z=E}}}class Q6{constructor(J,Q){this.seq=[],this.map={};let Z=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let H=0;H<Z;++H){let $=J.getActiveUniform(Q,H),Y=J.getUniformLocation(Q,$.name);oN($,Y,this)}let K=[],W=[];for(let H of this.seq)if(H.type===J.SAMPLER_2D_SHADOW||H.type===J.SAMPLER_CUBE_SHADOW||H.type===J.SAMPLER_2D_ARRAY_SHADOW)K.push(H);else W.push(H);if(K.length>0)this.seq=K.concat(W)}setValue(J,Q,Z,K){let W=this.map[Q];if(W!==void 0)W.setValue(J,Z,K)}setOptional(J,Q,Z){let K=Q[Z];if(K!==void 0)this.setValue(J,Z,K)}static upload(J,Q,Z,K){for(let W=0,H=Q.length;W!==H;++W){let $=Q[W],Y=Z[$.id];if(Y.needsUpdate!==!1)$.setValue(J,Y.value,K)}}static seqWithValue(J,Q){let Z=[];for(let K=0,W=J.length;K!==W;++K){let H=J[K];if(H.id in Q)Z.push(H)}return Z}}function v$(J,Q,Z){let K=J.createShader(Q);return J.shaderSource(K,Z),J.compileShader(K),K}var aN=37297,rN=0;function tN(J,Q){let Z=J.split(`
`),K=[],W=Math.max(Q-6,0),H=Math.min(Q+6,Z.length);for(let $=W;$<H;$++){let Y=$+1;K.push(`${Y===Q?">":" "} ${Y}: ${Z[$]}`)}return K.join(`
`)}var y$=new h0;function eN(J){a0._getMatrix(y$,a0.workingColorSpace,J);let Q=`mat3( ${y$.elements.map((Z)=>Z.toFixed(4))} )`;switch(a0.getTransfer(J)){case UK:return[Q,"LinearTransferOETF"];case U9:return[Q,"sRGBTransferOETF"];default:return v0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function f$(J,Q,Z){let K=J.getShaderParameter(Q,J.COMPILE_STATUS),H=(J.getShaderInfoLog(Q)||"").trim();if(K&&H==="")return"";let $=/ERROR: 0:(\d+)/.exec(H);if($){let Y=parseInt($[1]);return Z.toUpperCase()+`

`+H+`

`+tN(J.getShaderSource(Q),Y)}else return H}function JE(J,Q){let Z=eN(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${Z[1]}( vec4( ${Z[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var QE={[MZ]:"Linear",[LZ]:"Reinhard",[VZ]:"Cineon",[M8]:"ACESFilmic",[BZ]:"AgX",[IZ]:"Neutral",[kZ]:"Custom"};function ZE(J,Q){let Z=QE[Q];if(Z===void 0)return v0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+Z+"ToneMapping( color ); }"}var PQ=new S;function KE(){a0.getLuminanceCoefficients(PQ);let J=PQ.x.toFixed(4),Q=PQ.y.toFixed(4),Z=PQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${Z} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function WE(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(J6).join(`
`)}function HE(J){let Q=[];for(let Z in J){let K=J[Z];if(K===!1)continue;Q.push("#define "+Z+" "+K)}return Q.join(`
`)}function $E(J,Q){let Z={},K=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<K;W++){let H=J.getActiveAttrib(Q,W),$=H.name,Y=1;if(H.type===J.FLOAT_MAT2)Y=2;if(H.type===J.FLOAT_MAT3)Y=3;if(H.type===J.FLOAT_MAT4)Y=4;Z[$]={type:H.type,location:J.getAttribLocation(Q,$),locationSize:Y}}return Z}function J6(J){return J!==""}function b$(J,Q){let Z=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Z).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,Q.numLightProbeGrids)}function h$(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var YE=/^[ \t]*#include +<([\w\d./]+)>/gm;function aK(J){return J.replace(YE,UE)}function UE(J,Q){let Z=c0[Q];if(Z===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">");return aK(Z)}var XE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function x$(J){return J.replace(XE,GE)}function GE(J,Q,Z,K){let W="";for(let H=parseInt(Q);H<parseInt(Z);H++)W+=K.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return W}function g$(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var NE={[y7]:"SHADOWMAP_TYPE_PCF",[J7]:"SHADOWMAP_TYPE_VSM"};function EE(J){return NE[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var qE={[K7]:"ENVMAP_MODE_REFRACTION"};function FE(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return qE[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var DE={[pH]:"ENVMAP_BLENDING_MULTIPLY",[mH]:"ENVMAP_BLENDING_MIX",[lH]:"ENVMAP_BLENDING_ADD"};function OE(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return DE[J.combine]||"ENVMAP_BLENDING_NONE"}function RE(J,Q,Z,K){let W=J.getContext(),H=Z.defines,$=Z.vertexShader,Y=Z.fragmentShader,U=EE(Z),X=Z.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",N=FE(Z),E=OE(Z),G=WE(Z),F=HE(H),R=W.createProgram(),B,D,q=Z.glslVersion?"#version "+Z.glslVersion+`
`:"";if(Z.isRawShaderMaterial){if(B=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,F].filter(J6).join(`
`),B.length>0)B+=`
`;if(D=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,F].filter(J6).join(`
`),D.length>0)D+=`
`}else B=[g$(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,F,Z.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Z.batching?"#define USE_BATCHING":"",Z.batchingColor?"#define USE_BATCHING_COLOR":"",Z.instancing?"#define USE_INSTANCING":"",Z.instancingColor?"#define USE_INSTANCING_COLOR":"",Z.instancingMorph?"#define USE_INSTANCING_MORPH":"",Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.map?"#define USE_MAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+N:"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.displacementMap?"#define USE_DISPLACEMENTMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.mapUv?"#define MAP_UV "+Z.mapUv:"",Z.alphaMapUv?"#define ALPHAMAP_UV "+Z.alphaMapUv:"",Z.lightMapUv?"#define LIGHTMAP_UV "+Z.lightMapUv:"",Z.aoMapUv?"#define AOMAP_UV "+Z.aoMapUv:"",Z.emissiveMapUv?"#define EMISSIVEMAP_UV "+Z.emissiveMapUv:"",Z.bumpMapUv?"#define BUMPMAP_UV "+Z.bumpMapUv:"",Z.normalMapUv?"#define NORMALMAP_UV "+Z.normalMapUv:"",Z.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Z.displacementMapUv:"",Z.metalnessMapUv?"#define METALNESSMAP_UV "+Z.metalnessMapUv:"",Z.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Z.roughnessMapUv:"",Z.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Z.anisotropyMapUv:"",Z.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Z.clearcoatMapUv:"",Z.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Z.clearcoatNormalMapUv:"",Z.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Z.clearcoatRoughnessMapUv:"",Z.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+Z.diffuseRoughnessMapUv:"",Z.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Z.iridescenceMapUv:"",Z.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Z.iridescenceThicknessMapUv:"",Z.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Z.sheenColorMapUv:"",Z.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Z.sheenRoughnessMapUv:"",Z.specularMapUv?"#define SPECULARMAP_UV "+Z.specularMapUv:"",Z.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Z.specularColorMapUv:"",Z.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Z.specularIntensityMapUv:"",Z.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Z.transmissionMapUv:"",Z.thicknessMapUv?"#define THICKNESSMAP_UV "+Z.thicknessMapUv:"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexNormals?"#define HAS_NORMAL":"",Z.vertexColors?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.flatShading?"#define FLAT_SHADED":"",Z.skinning?"#define USE_SKINNING":"",Z.morphTargets?"#define USE_MORPHTARGETS":"",Z.morphNormals&&Z.flatShading===!1?"#define USE_MORPHNORMALS":"",Z.morphColors?"#define USE_MORPHCOLORS":"",Z.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Z.morphTextureStride:"",Z.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Z.morphTargetsCount:"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+U:"",Z.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(J6).join(`
`),D=[g$(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,F,Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Z.map?"#define USE_MAP":"",Z.matcap?"#define USE_MATCAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+X:"",Z.envMap?"#define "+N:"",Z.envMap?"#define "+E:"",Z.envMapPMREM?"#define ENVMAP_MAX_LOD "+Z.envMapMaxLod+".0":"",Z.envMapPMREM?"#define ENVMAP_SIZE "+Z.envMapSize+".0":"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoat?"#define USE_CLEARCOAT":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",Z.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",Z.dispersion?"#define USE_DISPERSION":"",Z.retroreflection?"#define USE_RETROREFLECTION":"",Z.iridescence?"#define USE_IRIDESCENCE":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaTest?"#define USE_ALPHATEST":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.sheen?"#define USE_SHEEN":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors||Z.instancingColor?"#define USE_COLOR":"",Z.vertexAlphas||Z.batchingColor?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.gradientMap?"#define USE_GRADIENTMAP":"",Z.flatShading?"#define FLAT_SHADED":"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+U:"",Z.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Z.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Z.toneMapping!==IJ?"#define TONE_MAPPING":"",Z.toneMapping!==IJ?c0.tonemapping_pars_fragment:"",Z.toneMapping!==IJ?ZE("toneMapping",Z.toneMapping):"",Z.dithering?"#define DITHERING":"",Z.opaque?"#define OPAQUE":"",c0.colorspace_pars_fragment,JE("linearToOutputTexel",Z.outputColorSpace),KE(),Z.useDepthPacking?"#define DEPTH_PACKING "+Z.depthPacking:"",`
`].filter(J6).join(`
`);if($=aK($),$=b$($,Z),$=h$($,Z),Y=aK(Y),Y=b$(Y,Z),Y=h$(Y,Z),$=x$($),Y=x$(Y),Z.isRawShaderMaterial!==!0)q=`#version 300 es
`,B=[G,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+B,D=["#define varying in",Z.glslVersion===EK?"":"layout(location = 0) out highp vec4 pc_fragColor;",Z.glslVersion===EK?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D;let I=q+B+$,z=q+D+Y,V=v$(W,W.VERTEX_SHADER,I),_=v$(W,W.FRAGMENT_SHADER,z);if(W.attachShader(R,V),W.attachShader(R,_),Z.index0AttributeName!==void 0)W.bindAttribLocation(R,0,Z.index0AttributeName);else if(Z.hasPositionAttribute===!0)W.bindAttribLocation(R,0,"position");W.linkProgram(R);function C(g){if(J.debug.checkShaderErrors){let j=W.getProgramInfoLog(R)||"",p=W.getShaderInfoLog(V)||"",o=W.getShaderInfoLog(_)||"",A=j.trim(),u=p.trim(),r=o.trim(),x=!0,Y0=!0;if(W.getProgramParameter(R,W.LINK_STATUS)===!1)if(x=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,R,V,_);else{let c=f$(W,V,"vertex"),e=f$(W,_,"fragment");b0("WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(R,W.VALIDATE_STATUS)+`

Material Name: `+g.name+`
Material Type: `+g.type+`

Program Info Log: `+A+`
`+c+`
`+e)}else if(A!=="")v0("WebGLProgram: Program Info Log:",A);else if(u===""||r==="")Y0=!1;if(Y0)g.diagnostics={runnable:x,programLog:A,vertexShader:{log:u,prefix:B},fragmentShader:{log:r,prefix:D}}}W.deleteShader(V),W.deleteShader(_),O=new Q6(W,R),k=$E(W,R)}let O;this.getUniforms=function(){if(O===void 0)C(this);return O};let k;this.getAttributes=function(){if(k===void 0)C(this);return k};let w=Z.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(w===!1)w=W.getProgramParameter(R,aN);return w},this.destroy=function(){K.releaseStatesOfProgram(this),W.deleteProgram(R),this.program=void 0},this.type=Z.shaderType,this.name=Z.shaderName,this.id=rN++,this.cacheKey=Q,this.usedTimes=1,this.program=R,this.vertexShader=V,this.fragmentShader=_,this}var ME=0;class KY{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,Z){let K=this._getShaderCacheForMaterial(J);if(K.has(Q)===!1)K.add(Q),Q.usedTimes++;if(K.has(Z)===!1)K.add(Z),Z.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let Z of Q)if(Z.usedTimes--,Z.usedTimes===0)this.shaderCache.delete(Z.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,Z=Q.get(J);if(Z===void 0)Z=new Set,Q.set(J,Z);return Z}_getShaderStage(J){let Q=this.shaderCache,Z=Q.get(J);if(Z===void 0)Z=new WY(J),Q.set(J,Z);return Z}}class WY{constructor(J){this.id=ME++,this.code=J,this.usedTimes=0}}function LE(J){return J===V8||J===e6||J===JQ}function VE(J,Q,Z,K,W,H){let $=new p7,Y=new KY,U=new Set,X=[],N=new Map,E=K.logarithmicDepthBuffer,G={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function F(O){if(U.add(O),O===0)return"uv";return`uv${O}`}function R(O,k,w,g,j,p){let o=g.fog,A=j.geometry,u=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?g.environment:null,r=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,x=Q.get(O.envMap||u,r),Y0=G[O.type],c=K.precision;if(O.precision!==null){if(c=K.getMaxPrecision(O.precision),c!==O.precision)v0("WebGLProgram.getParameters:",O.precision,"not supported, using",c,"instead.")}let e=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,W0=e!==void 0?e.length:0,C0=0;if(A.morphAttributes.position!==void 0)C0=1;if(A.morphAttributes.normal!==void 0)C0=2;if(A.morphAttributes.color!==void 0)C0=3;let a,K0,z0,j0;if(Y0){let L0=AJ[Y0];a=L0.vertexShader,K0=L0.fragmentShader}else{a=O.vertexShader,K0=O.fragmentShader;let L0=Y.getVertexShaderStage(O),$9=Y.getFragmentShaderStage(O);Y.update(O,L0,$9),z0=L0.id,j0=$9.id}let y0=J.getRenderTarget(),P0=J.state.buffers.depth.getReversed(),Z9=j.isInstancedMesh===!0,n0=j.isBatchedMesh===!0,p0=!!O.map,q9=!!O.matcap,r0=!!x,V9=r0&&x.isPMREMTexture===!0,B9=!!O.aoMap,o9=!!O.lightMap,t9=!!O.bumpMap&&O.wireframe===!1,I9=!!O.normalMap,g9=!!O.displacementMap,a9=!!O.emissiveMap,r9=!!O.metalnessMap,NJ=!!O.roughnessMap,y=O.anisotropy>0,EJ=O.clearcoat>0,H9=O.diffuseRoughness>0,T9=O.dispersion>0,O0=O.retroreflectivity>0,X9=O.iridescence>0,f0=O.sheen>0,x0=O.transmission>0,p9=y&&!!O.anisotropyMap,P=EJ&&!!O.clearcoatMap,M=EJ&&!!O.clearcoatNormalMap,f=EJ&&!!O.clearcoatRoughnessMap,J0=H9&&!!O.diffuseRoughnessMap,t=X9&&!!O.iridescenceMap,$0=X9&&!!O.iridescenceThicknessMap,N0=f0&&!!O.sheenColorMap,l=f0&&!!O.sheenRoughnessMap,s=!!O.specularMap,U0=!!O.specularColorMap,T=!!O.specularIntensityMap,n=x0&&!!O.transmissionMap,d=x0&&!!O.thicknessMap,Z0=!!O.gradientMap,H0=!!O.alphaMap,q0=O.alphaTest>0,T0=!!O.alphaHash,w0=!!O.extensions,M0=IJ;if(O.toneMapped){if(y0===null||y0.isXRRenderTarget===!0)M0=J.toneMapping}let S0=V9?x.isCompressedCubeTexture?x.image[0].mipmaps:x.mipmaps:null,m0={shaderID:Y0,shaderType:O.type,shaderName:O.name,vertexShader:a,fragmentShader:K0,defines:O.defines,customVertexShaderID:z0,customFragmentShaderID:j0,isRawShaderMaterial:O.isRawShaderMaterial===!0,glslVersion:O.glslVersion,precision:c,batching:n0,batchingColor:n0&&j._colorsTexture!==null,instancing:Z9,instancingColor:Z9&&j.instanceColor!==null,instancingMorph:Z9&&j.morphTexture!==null,outputColorSpace:y0===null?J.outputColorSpace:y0.isXRRenderTarget===!0?y0.texture.colorSpace:a0.workingColorSpace,alphaToCoverage:!!O.alphaToCoverage,map:p0,matcap:q9,envMap:r0,envMapMode:r0&&x.mapping,envMapPMREM:V9,envMapMaxLod:V9?S0.length-1:null,envMapSize:V9?S0[0].width:null,aoMap:B9,lightMap:o9,bumpMap:t9,normalMap:I9,displacementMap:g9,emissiveMap:a9,normalMapObjectSpace:I9&&O.normalMapType===eH,normalMapTangentSpace:I9&&O.normalMapType===$K,packedNormalMap:I9&&O.normalMapType===$K&&LE(O.normalMap.format),metalnessMap:r9,roughnessMap:NJ,anisotropy:y,anisotropyMap:p9,clearcoat:EJ,clearcoatMap:P,clearcoatNormalMap:M,clearcoatRoughnessMap:f,diffuseRoughness:H9,diffuseRoughnessMap:J0,dispersion:T9,retroreflection:O0,iridescence:X9,iridescenceMap:t,iridescenceThicknessMap:$0,sheen:f0,sheenColorMap:N0,sheenRoughnessMap:l,specularMap:s,specularColorMap:U0,specularIntensityMap:T,transmission:x0,transmissionMap:n,thicknessMap:d,gradientMap:Z0,opaque:O.transparent===!1&&O.blending===f7&&O.alphaToCoverage===!1,alphaMap:H0,alphaTest:q0,alphaHash:T0,combine:O.combine,mapUv:p0&&F(O.map.channel),aoMapUv:B9&&F(O.aoMap.channel),lightMapUv:o9&&F(O.lightMap.channel),bumpMapUv:t9&&F(O.bumpMap.channel),normalMapUv:I9&&F(O.normalMap.channel),displacementMapUv:g9&&F(O.displacementMap.channel),emissiveMapUv:a9&&F(O.emissiveMap.channel),metalnessMapUv:r9&&F(O.metalnessMap.channel),roughnessMapUv:NJ&&F(O.roughnessMap.channel),anisotropyMapUv:p9&&F(O.anisotropyMap.channel),clearcoatMapUv:P&&F(O.clearcoatMap.channel),clearcoatNormalMapUv:M&&F(O.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:f&&F(O.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:J0&&F(O.diffuseRoughnessMap.channel),iridescenceMapUv:t&&F(O.iridescenceMap.channel),iridescenceThicknessMapUv:$0&&F(O.iridescenceThicknessMap.channel),sheenColorMapUv:N0&&F(O.sheenColorMap.channel),sheenRoughnessMapUv:l&&F(O.sheenRoughnessMap.channel),specularMapUv:s&&F(O.specularMap.channel),specularColorMapUv:U0&&F(O.specularColorMap.channel),specularIntensityMapUv:T&&F(O.specularIntensityMap.channel),transmissionMapUv:n&&F(O.transmissionMap.channel),thicknessMapUv:d&&F(O.thicknessMap.channel),alphaMapUv:H0&&F(O.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(I9||y),vertexNormals:!!A.attributes.normal,vertexColors:O.vertexColors,vertexAlphas:O.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!A.attributes.uv&&(p0||H0),fog:!!o,useFog:O.fog===!0,fogExp2:!!o&&o.isFogExp2,flatShading:O.wireframe===!1&&(O.flatShading===!0||A.attributes.normal===void 0&&I9===!1&&(O.isMeshLambertMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isMeshPhysicalMaterial)),sizeAttenuation:O.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:P0,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:W0,morphTextureStride:C0,numSunLights:k.sun.length,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numSunLightShadows:k.sunShadowMap.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numLightProbeGrids:p.filter((L0)=>L0.texture!==null).length,numClippingPlanes:H.numPlanes,numClipIntersection:H.numIntersection,dithering:O.dithering,shadowMapEnabled:J.shadowMap.enabled&&w.length>0,shadowMapType:J.shadowMap.type,toneMapping:M0,decodeVideoTexture:p0&&O.map.isVideoTexture===!0&&a0.getTransfer(O.map.colorSpace)===U9,decodeVideoTextureEmissive:a9&&O.emissiveMap.isVideoTexture===!0&&a0.getTransfer(O.emissiveMap.colorSpace)===U9,premultipliedAlpha:O.premultipliedAlpha,doubleSided:O.side===F9,flipSided:O.side===f9,useDepthPacking:O.depthPacking>=0,depthPacking:O.depthPacking||0,index0AttributeName:O.index0AttributeName,extensionClipCullDistance:w0&&O.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(w0&&O.extensions.multiDraw===!0||n0)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:O.customProgramCacheKey()};return m0.vertexUv1s=U.has(1),m0.vertexUv2s=U.has(2),m0.vertexUv3s=U.has(3),U.clear(),m0}function B(O){let k=[];if(O.shaderID)k.push(O.shaderID);else k.push(O.customVertexShaderID),k.push(O.customFragmentShaderID);if(O.defines!==void 0)for(let w in O.defines)k.push(w),k.push(O.defines[w]);if(O.isRawShaderMaterial===!1)D(k,O),q(k,O),k.push(J.outputColorSpace);return k.push(O.customProgramCacheKey),k.join()}function D(O,k){O.push(k.precision),O.push(k.outputColorSpace),O.push(k.envMapMode),O.push(k.envMapPMREM),O.push(k.envMapMaxLod),O.push(k.envMapSize),O.push(k.mapUv),O.push(k.alphaMapUv),O.push(k.lightMapUv),O.push(k.aoMapUv),O.push(k.bumpMapUv),O.push(k.normalMapUv),O.push(k.displacementMapUv),O.push(k.emissiveMapUv),O.push(k.metalnessMapUv),O.push(k.roughnessMapUv),O.push(k.anisotropyMapUv),O.push(k.clearcoatMapUv),O.push(k.clearcoatNormalMapUv),O.push(k.clearcoatRoughnessMapUv),O.push(k.diffuseRoughnessMapUv),O.push(k.iridescenceMapUv),O.push(k.iridescenceThicknessMapUv),O.push(k.sheenColorMapUv),O.push(k.sheenRoughnessMapUv),O.push(k.specularMapUv),O.push(k.specularColorMapUv),O.push(k.specularIntensityMapUv),O.push(k.transmissionMapUv),O.push(k.thicknessMapUv),O.push(k.combine),O.push(k.fogExp2),O.push(k.sizeAttenuation),O.push(k.morphTargetsCount),O.push(k.numSunLights),O.push(k.numDirLights),O.push(k.numPointLights),O.push(k.numSpotLights),O.push(k.numSpotLightMaps),O.push(k.numHemiLights),O.push(k.numRectAreaLights),O.push(k.numSunLightShadows),O.push(k.numDirLightShadows),O.push(k.numPointLightShadows),O.push(k.numSpotLightShadows),O.push(k.numSpotLightShadowsWithMaps),O.push(k.numLightProbes),O.push(k.numLightProbeGrids),O.push(k.shadowMapType),O.push(k.toneMapping),O.push(k.numClippingPlanes),O.push(k.numClipIntersection),O.push(k.depthPacking)}function q(O,k){if($.disableAll(),k.instancing)$.enable(0);if(k.instancingColor)$.enable(1);if(k.instancingMorph)$.enable(2);if(k.matcap)$.enable(3);if(k.envMap)$.enable(4);if(k.normalMapObjectSpace)$.enable(5);if(k.normalMapTangentSpace)$.enable(6);if(k.clearcoat)$.enable(7);if(k.iridescence)$.enable(8);if(k.alphaTest)$.enable(9);if(k.vertexColors)$.enable(10);if(k.vertexAlphas)$.enable(11);if(k.vertexUv1s)$.enable(12);if(k.vertexUv2s)$.enable(13);if(k.vertexUv3s)$.enable(14);if(k.vertexTangents)$.enable(15);if(k.anisotropy)$.enable(16);if(k.alphaHash)$.enable(17);if(k.batching)$.enable(18);if(k.dispersion)$.enable(19);if(k.retroreflection)$.enable(24);if(k.diffuseRoughness)$.enable(25);if(k.batchingColor)$.enable(20);if(k.gradientMap)$.enable(21);if(k.packedNormalMap)$.enable(22);if(k.vertexNormals)$.enable(23);if(O.push($.mask),$.disableAll(),k.fog)$.enable(0);if(k.useFog)$.enable(1);if(k.flatShading)$.enable(2);if(k.logarithmicDepthBuffer)$.enable(3);if(k.reversedDepthBuffer)$.enable(4);if(k.skinning)$.enable(5);if(k.morphTargets)$.enable(6);if(k.morphNormals)$.enable(7);if(k.morphColors)$.enable(8);if(k.premultipliedAlpha)$.enable(9);if(k.shadowMapEnabled)$.enable(10);if(k.doubleSided)$.enable(11);if(k.flipSided)$.enable(12);if(k.useDepthPacking)$.enable(13);if(k.dithering)$.enable(14);if(k.transmission)$.enable(15);if(k.sheen)$.enable(16);if(k.opaque)$.enable(17);if(k.pointsUvs)$.enable(18);if(k.decodeVideoTexture)$.enable(19);if(k.decodeVideoTextureEmissive)$.enable(20);if(k.alphaToCoverage)$.enable(21);if(k.numLightProbeGrids>0)$.enable(22);if(k.hasPositionAttribute)$.enable(23);O.push($.mask)}function I(O){let k=G[O.type],w;if(k){let g=AJ[k];w=O$.clone(g.uniforms)}else w=O.uniforms;return w}function z(O,k){let w=N.get(k);if(w!==void 0)++w.usedTimes;else w=new RE(J,k,O,W),X.push(w),N.set(k,w);return w}function V(O){if(--O.usedTimes===0){let k=X.indexOf(O);X[k]=X[X.length-1],X.pop(),N.delete(O.cacheKey),O.destroy()}}function _(O){Y.remove(O)}function C(){Y.dispose()}return{getParameters:R,getProgramCacheKey:B,getUniforms:I,acquireProgram:z,releaseProgram:V,releaseShaderCache:_,programs:X,dispose:C}}function kE(){let J=new WeakMap;function Q($){return J.has($)}function Z($){let Y=J.get($);if(Y===void 0)Y={},J.set($,Y);return Y}function K($){J.delete($)}function W($,Y,U){J.get($)[Y]=U}function H(){J=new WeakMap}return{has:Q,get:Z,remove:K,update:W,dispose:H}}function BE(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function p$(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function m$(){let J=[],Q=0,Z=[],K=[],W=[];function H(){Q=0,Z.length=0,K.length=0,W.length=0}function $(G){let F=0;if(G.isInstancedMesh)F+=2;if(G.isSkinnedMesh)F+=1;return F}function Y(G,F,R,B,D,q){let I=J[Q];if(I===void 0)I={id:G.id,object:G,geometry:F,material:R,materialVariant:$(G),groupOrder:B,renderOrder:G.renderOrder,z:D,group:q},J[Q]=I;else I.id=G.id,I.object=G,I.geometry=F,I.material=R,I.materialVariant=$(G),I.groupOrder=B,I.renderOrder=G.renderOrder,I.z=D,I.group=q;return Q++,I}function U(G,F,R,B,D,q,I){if(I.reversedDepth===!0)D=-D;let z=Y(G,F,R,B,D,q);if(R.transmission>0)K.push(z);else if(R.transparent===!0)W.push(z);else Z.push(z)}function X(G,F,R,B,D,q){let I=Y(G,F,R,B,D,q);if(R.transmission>0)K.unshift(I);else if(R.transparent===!0)W.unshift(I);else Z.unshift(I)}function N(G,F){if(Z.length>1)Z.sort(G||BE);if(K.length>1)K.sort(F||p$);if(W.length>1)W.sort(F||p$)}function E(){for(let G=Q,F=J.length;G<F;G++){let R=J[G];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:Z,transmissive:K,transparent:W,init:H,push:U,unshift:X,finish:E,sort:N}}function IE(){let J=new WeakMap;function Q(K,W){let H=J.get(K),$;if(H===void 0)$=new m$,J.set(K,[$]);else if(W>=H.length)$=new m$,H.push($);else $=H[W];return $}function Z(){J=new WeakMap}return{get:Q,dispose:Z}}function zE(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"SunLight":case"DirectionalLight":Z={direction:new S,color:new X0};break;case"SpotLight":Z={position:new S,direction:new S,color:new X0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Z={position:new S,color:new X0,distance:0,decay:0};break;case"HemisphereLight":Z={direction:new S,skyColor:new X0,groundColor:new X0};break;case"RectAreaLight":Z={color:new X0,position:new S,halfWidth:new S,halfHeight:new S};break}return J[Q.id]=Z,Z}}}function PE(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"SunLight":case"DirectionalLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new F0};break;case"SpotLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new F0};break;case"PointLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new F0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=Z,Z}}}var _E=0;function CE(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function AE(J){let Q=new zE,Z=PE(),K={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let X=0;X<9;X++)K.probe.push(new S);let W=new S,H=new J9,$=new J9;function Y(X){let N=0,E=0,G=0;for(let p=0;p<9;p++)K.probe[p].set(0,0,0);let F=0,R=0,B=0,D=0,q=0,I=0,z=0,V=0,_=0,C=0,O=0,k=0,w=0,g=0;X.sort(CE);for(let p=0,o=X.length;p<o;p++){let A=X[p],u=A.color,r=A.intensity,x=A.distance,Y0=null;if(A.shadow&&A.shadow.map)if(A.shadow.map.texture.format===V8)Y0=A.shadow.map.texture;else Y0=A.shadow.map.depthTexture||A.shadow.map.texture;if(A.isAmbientLight)N+=u.r*r,E+=u.g*r,G+=u.b*r;else if(A.isLightProbe){for(let c=0;c<9;c++)K.probe[c].addScaledVector(A.sh.coefficients[c],r);g++}else if(A.isSunLight){let c=Q.get(A);if(c.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let e=A.shadow,W0=Z.get(A);W0.shadowIntensity=e.intensity,W0.shadowBias=e.bias,W0.shadowNormalBias=e.normalBias,W0.shadowRadius=e.radius,W0.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),K.sunShadow[R]=W0,K.sunShadowMap[R]=Y0;let C0=e.getViewportCount();for(let a=0;a<C0;a++)K.sunShadowMatrix[B+a]=e.getMatrix(a),K.sunShadowCascade[B+a]=e._cascadeData[a];B+=C0,R++}K.sun[F]=c,F++}else if(A.isDirectionalLight){let c=Q.get(A);if(c.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let e=A.shadow,W0=Z.get(A);W0.shadowIntensity=e.intensity,W0.shadowBias=e.bias,W0.shadowNormalBias=e.normalBias,W0.shadowRadius=e.radius,W0.shadowMapSize=e.mapSize,K.directionalShadow[D]=W0,K.directionalShadowMap[D]=Y0,K.directionalShadowMatrix[D]=A.shadow.matrix,_++}K.directional[D]=c,D++}else if(A.isSpotLight){let c=Q.get(A);c.position.setFromMatrixPosition(A.matrixWorld),c.color.copy(u).multiplyScalar(r),c.distance=x,c.coneCos=Math.cos(A.angle),c.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),c.decay=A.decay,K.spot[I]=c;let e=A.shadow;if(A.map){if(K.spotLightMap[k]=A.map,k++,e.updateMatrices(A),A.castShadow)w++}if(K.spotLightMatrix[I]=e.matrix,A.castShadow){let W0=Z.get(A);W0.shadowIntensity=e.intensity,W0.shadowBias=e.bias,W0.shadowNormalBias=e.normalBias,W0.shadowRadius=e.radius,W0.shadowMapSize=e.mapSize,K.spotShadow[I]=W0,K.spotShadowMap[I]=Y0,O++}I++}else if(A.isRectAreaLight){let c=Q.get(A);c.color.copy(u).multiplyScalar(r),c.halfWidth.set(A.width*0.5,0,0),c.halfHeight.set(0,A.height*0.5,0),K.rectArea[z]=c,z++}else if(A.isPointLight){let c=Q.get(A);if(c.color.copy(A.color).multiplyScalar(A.intensity),c.distance=A.distance,c.decay=A.decay,A.castShadow){let e=A.shadow,W0=Z.get(A);W0.shadowIntensity=e.intensity,W0.shadowBias=e.bias,W0.shadowNormalBias=e.normalBias,W0.shadowRadius=e.radius,W0.shadowMapSize=e.mapSize,W0.shadowCameraNear=e.camera.near,W0.shadowCameraFar=e.camera.far,K.pointShadow[q]=W0,K.pointShadowMap[q]=Y0,K.pointShadowMatrix[q]=A.shadow.matrix,C++}K.point[q]=c,q++}else if(A.isHemisphereLight){let c=Q.get(A);c.skyColor.copy(A.color).multiplyScalar(r),c.groundColor.copy(A.groundColor).multiplyScalar(r),K.hemi[V]=c,V++}}if(z>0)if(J.has("OES_texture_float_linear")===!0)K.rectAreaLTC1=R0.LTC_FLOAT_1,K.rectAreaLTC2=R0.LTC_FLOAT_2;else K.rectAreaLTC1=R0.LTC_HALF_1,K.rectAreaLTC2=R0.LTC_HALF_2;K.ambient[0]=N,K.ambient[1]=E,K.ambient[2]=G;let j=K.hash;if(j.sunLength!==F||j.directionalLength!==D||j.pointLength!==q||j.spotLength!==I||j.rectAreaLength!==z||j.hemiLength!==V||j.numSunShadows!==R||j.numDirectionalShadows!==_||j.numPointShadows!==C||j.numSpotShadows!==O||j.numSpotMaps!==k||j.numLightProbes!==g)K.sun.length=F,K.directional.length=D,K.spot.length=I,K.rectArea.length=z,K.point.length=q,K.hemi.length=V,K.sunShadow.length=R,K.sunShadowMap.length=R,K.sunShadowMatrix.length=B,K.sunShadowCascade.length=B,K.directionalShadow.length=_,K.directionalShadowMap.length=_,K.directionalShadowMatrix.length=_,K.pointShadow.length=C,K.pointShadowMap.length=C,K.pointShadowMatrix.length=C,K.spotShadow.length=O,K.spotShadowMap.length=O,K.spotLightMatrix.length=O+k-w,K.spotLightMap.length=k,K.numSpotLightShadowsWithMaps=w,K.numLightProbes=g,j.sunLength=F,j.directionalLength=D,j.pointLength=q,j.spotLength=I,j.rectAreaLength=z,j.hemiLength=V,j.numSunShadows=R,j.numDirectionalShadows=_,j.numPointShadows=C,j.numSpotShadows=O,j.numSpotMaps=k,j.numLightProbes=g,K.version=_E++}function U(X,N){let E=0,G=0,F=0,R=0,B=0,D=0,q=N.matrixWorldInverse;for(let I=0,z=X.length;I<z;I++){let V=X[I];if(V.isSunLight){let _=K.sun[E];_.direction.setFromMatrixPosition(V.matrixWorld),_.direction.transformDirection(q),E++}else if(V.isDirectionalLight){let _=K.directional[G];_.direction.setFromMatrixPosition(V.matrixWorld),W.setFromMatrixPosition(V.target.matrixWorld),_.direction.sub(W),_.direction.transformDirection(q),G++}else if(V.isSpotLight){let _=K.spot[R];_.position.setFromMatrixPosition(V.matrixWorld),_.position.applyMatrix4(q),_.direction.setFromMatrixPosition(V.matrixWorld),W.setFromMatrixPosition(V.target.matrixWorld),_.direction.sub(W),_.direction.transformDirection(q),R++}else if(V.isRectAreaLight){let _=K.rectArea[B];_.position.setFromMatrixPosition(V.matrixWorld),_.position.applyMatrix4(q),$.identity(),H.copy(V.matrixWorld),H.premultiply(q),$.extractRotation(H),_.halfWidth.set(V.width*0.5,0,0),_.halfHeight.set(0,V.height*0.5,0),_.halfWidth.applyMatrix4($),_.halfHeight.applyMatrix4($),B++}else if(V.isPointLight){let _=K.point[F];_.position.setFromMatrixPosition(V.matrixWorld),_.position.applyMatrix4(q),F++}else if(V.isHemisphereLight){let _=K.hemi[D];_.direction.setFromMatrixPosition(V.matrixWorld),_.direction.transformDirection(q),D++}}}return{setup:Y,setupView:U,state:K}}function l$(J){let Q=new AE(J),Z=[],K=[],W=[];function H(E){N.camera=E,Z.length=0,K.length=0,W.length=0}function $(E){if(E.isLightProbeGrid)W.push(E);else Z.push(E)}function Y(E){K.push(E)}function U(){Q.setup(Z),W.sort((E,G)=>E.priority-G.priority||E.id-G.id)}function X(E){Q.setupView(Z,E)}let N={lightsArray:Z,shadowsArray:K,lightProbeGridArray:W,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:H,state:N,setupLights:U,setupLightsView:X,pushLight:$,pushShadow:Y}}function wE(J){let Q=new WeakMap;function Z(W,H=0){let $=Q.get(W),Y;if($===void 0)Y=new l$(J),Q.set(W,[Y]);else if(H>=$.length)Y=new l$(J),$.push(Y);else Y=$[H];return Y}function K(){Q=new WeakMap}return{get:Z,dispose:K}}var TE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jE=[new S(1,0,0),new S(-1,0,0),new S(0,1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1)],vE=[new S(0,-1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1),new S(0,-1,0),new S(0,-1,0)],d$=new J9,e7=new S,oK=new S;function yE(J,Q,Z){let K=new D8,W=new F0,H=new F0,$=new M9,Y=new jK,U=new vK,X={},N=Z.maxTextureSize,E={[Q7]:f9,[f9]:Q7,[F9]:F9},G=new k9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new F0},radius:{value:4}},vertexShader:TE,fragmentShader:SE}),F=G.clone();F.defines.HORIZONTAL_PASS=1;let R=new C9;R.setAttribute("position",new x9(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let B=new Q0(R,G),D=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y7;let q=this.type;this.render=function(C,O,k){if(D.enabled===!1)return;if(D.autoUpdate===!1&&D.needsUpdate===!1)return;if(C.length===0)return;if(this.type===EH)v0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=y7;let w=J.getRenderTarget(),g=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),p=J.state;if(p.setBlending(R8),p.buffers.depth.getReversed()===!0)p.buffers.color.setClear(0,0,0,0);else p.buffers.color.setClear(1,1,1,1);p.buffers.depth.setTest(!0),p.setScissorTest(!1);let o=q!==this.type;if(o)O.traverse(function(A){if(A.material)if(Array.isArray(A.material))A.material.forEach((u)=>u.needsUpdate=!0);else A.material.needsUpdate=!0});for(let A=0,u=C.length;A<u;A++){let r=C[A],x=r.shadow;if(x===void 0){v0("WebGLShadowMap:",r,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;W.copy(x.mapSize);let Y0=x.getFrameExtents();if(W.multiply(Y0),H.copy(x.mapSize),W.x>N||W.y>N){if(W.x>N)H.x=Math.floor(N/Y0.x),W.x=H.x*Y0.x,x.mapSize.x=H.x;if(W.y>N)H.y=Math.floor(N/Y0.y),W.y=H.y*Y0.y,x.mapSize.y=H.y}let c=J.state.buffers.depth.getReversed();if(x.camera._reversedDepth=c,x.map===null||o===!0){if(x.map!==null){if(x.map.depthTexture!==null)x.map.depthTexture.dispose(),x.map.depthTexture=null;x.map.dispose()}if(this.type===J7){if(r.isPointLight){v0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}x.map=new UJ(W.x,W.y,{format:V8,type:zJ,minFilter:$J,magFilter:$J,generateMipmaps:!1}),x.map.texture.name=r.name+".shadowMap",x.map.depthTexture=new W8(W.x,W.y,gJ),x.map.depthTexture.name=r.name+".shadowMapDepth",x.map.depthTexture.format=W7,x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=eJ,x.map.depthTexture.magFilter=eJ}else{if(r.isPointLight)x.map=new CQ(W.x),x.map.depthTexture=new XQ(W.x,Q8);else x.map=new UJ(W.x,W.y),x.map.depthTexture=new W8(W.x,W.y,Q8);if(x.map.depthTexture.name=r.name+".shadowMap",x.map.depthTexture.format=W7,this.type===y7)x.map.depthTexture.compareFunction=c?GK:XK,x.map.depthTexture.minFilter=$J,x.map.depthTexture.magFilter=$J;else x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=eJ,x.map.depthTexture.magFilter=eJ}x.camera.updateProjectionMatrix()}if(x.map.isWebGLCubeRenderTarget!==!0&&(x.map.width!==W.x||x.map.height!==W.y))x.map.setSize(W.x,W.y);let e=x.map.isWebGLCubeRenderTarget?6:x.getViewportCount();if(r.isPointLight!==!0)x.updateMatrices(r,k);let W0=(x.camera.layers.mask&4294967294)!==0?x.camera.layers:k.layers;for(let C0=0;C0<e;C0++){let a=x.getCamera(C0);if(r.isPointLight){let{camera:K0,matrix:z0}=x,j0=r.distance||K0.far;if(j0!==K0.far)K0.far=j0,K0.updateProjectionMatrix();e7.setFromMatrixPosition(r.matrixWorld),K0.position.copy(e7),oK.copy(K0.position),oK.add(jE[C0]),K0.up.copy(vE[C0]),K0.lookAt(oK),K0.updateMatrixWorld(),z0.makeTranslation(-e7.x,-e7.y,-e7.z),d$.multiplyMatrices(K0.projectionMatrix,K0.matrixWorldInverse),x._frustum.setFromProjectionMatrix(d$,K0.coordinateSystem,K0.reversedDepth)}if(x.map.isWebGLCubeRenderTarget)J.setRenderTarget(x.map,C0),J.clear();else{if(C0===0)J.setRenderTarget(x.map),J.clear();let K0=x.getViewport(C0);$.set(H.x*K0.x,H.y*K0.y,H.x*K0.z,H.y*K0.w),p.viewport($)}K=x.getFrustum(C0),V(O,k,a,r,W0,this.type)}if(x.isPointLightShadow!==!0&&this.type===J7)I(x,k);x.needsUpdate=!1}q=this.type,D.needsUpdate=!1,J.setRenderTarget(w,g,j)};function I(C,O){let k=Q.update(B);if(G.defines.VSM_SAMPLES!==C.blurSamples)G.defines.VSM_SAMPLES=C.blurSamples,F.defines.VSM_SAMPLES=C.blurSamples,G.needsUpdate=!0,F.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new UJ(W.x,W.y,{format:V8,type:zJ});else if(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)C.mapPass.setSize(C.map.width,C.map.height);G.uniforms.shadow_pass.value=C.map.depthTexture,G.uniforms.resolution.value.set(C.map.width,C.map.height),G.uniforms.radius.value=C.radius,J.setRenderTarget(C.mapPass),J.clear(),J.renderBufferDirect(O,null,k,G,B,null),F.uniforms.shadow_pass.value=C.mapPass.texture,F.uniforms.resolution.value.set(C.map.width,C.map.height),F.uniforms.radius.value=C.radius,J.setRenderTarget(C.map),J.clear(),J.renderBufferDirect(O,null,k,F,B,null)}function z(C,O,k,w){let g=null,j=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(j!==void 0)g=j;else if(g=k.isPointLight===!0?U:Y,J.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){let p=g.uuid,o=O.uuid,A=X[p];if(A===void 0)A={},X[p]=A;let u=A[o];if(u===void 0)u=g.clone(),A[o]=u,O.addEventListener("dispose",_);g=u}if(g.visible=O.visible,g.wireframe=O.wireframe,w===J7)g.side=O.shadowSide!==null?O.shadowSide:O.side;else g.side=O.shadowSide!==null?O.shadowSide:E[O.side];if(g.alphaMap=O.alphaMap,g.alphaTest=O.alphaToCoverage===!0?0.5:O.alphaTest,g.map=O.map,g.clipShadows=O.clipShadows,g.clippingPlanes=O.clippingPlanes,g.clipIntersection=O.clipIntersection,g.displacementMap=O.displacementMap,g.displacementScale=O.displacementScale,g.displacementBias=O.displacementBias,g.wireframeLinewidth=O.wireframeLinewidth,g.linewidth=O.linewidth,k.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let p=J.properties.get(g);p.light=k}return g}function V(C,O,k,w,g,j){if(C.visible===!1)return;if(C.layers.test(g)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&j===J7)&&(!C.frustumCulled||C.intersectsFrustum(K))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);let A=Q.update(C),u=C.material;if(Array.isArray(u)){let r=A.groups;for(let x=0,Y0=r.length;x<Y0;x++){let c=r[x],e=u[c.materialIndex];if(e&&e.visible){let W0=z(C,e,w,j);C.onBeforeShadow(J,C,O,k,A,W0,c),J.renderBufferDirect(k,null,A,W0,C,c),C.onAfterShadow(J,C,O,k,A,W0,c)}}}else if(u.visible){let r=z(C,u,w,j);C.onBeforeShadow(J,C,O,k,A,r,null),J.renderBufferDirect(k,null,A,r,C,null),C.onAfterShadow(J,C,O,k,A,r,null)}}}let o=C.children;for(let A=0,u=o.length;A<u;A++)V(o[A],O,k,w,g,j)}function _(C){C.target.removeEventListener("dispose",_);for(let k in X){let w=X[k],g=C.target.uuid;if(g in w)w[g].dispose(),delete w[g]}}}function fE(J,Q){function Z(){let T=!1,n=new M9,d=null,Z0=new M9(0,0,0,0);return{setMask:function(H0){if(d!==H0&&!T)J.colorMask(H0,H0,H0,H0),d=H0},setLocked:function(H0){T=H0},setClear:function(H0,q0,T0,w0,M0){if(M0===!0)H0*=w0,q0*=w0,T0*=w0;if(n.set(H0,q0,T0,w0),Z0.equals(n)===!1)J.clearColor(H0,q0,T0,w0),Z0.copy(n)},reset:function(){T=!1,d=null,Z0.set(-1,0,0,0)}}}function K(){let T=!1,n=!1,d=null,Z0=null,H0=null;return{setReversed:function(q0){if(n!==q0){let T0=Q.get("EXT_clip_control");if(q0)T0.clipControlEXT(T0.LOWER_LEFT_EXT,T0.ZERO_TO_ONE_EXT);else T0.clipControlEXT(T0.LOWER_LEFT_EXT,T0.NEGATIVE_ONE_TO_ONE_EXT);n=q0;let w0=H0;H0=null,this.setClear(w0)}},getReversed:function(){return n},setTest:function(q0){if(q0)P0(J.DEPTH_TEST);else Z9(J.DEPTH_TEST)},setMask:function(q0){if(d!==q0&&!T)J.depthMask(q0),d=q0},setFunc:function(q0){if(n)q0=U$[q0];if(Z0!==q0){switch(q0){case vH:J.depthFunc(J.NEVER);break;case yH:J.depthFunc(J.ALWAYS);break;case fH:J.depthFunc(J.LESS);break;case RZ:J.depthFunc(J.LEQUAL);break;case bH:J.depthFunc(J.EQUAL);break;case hH:J.depthFunc(J.GEQUAL);break;case xH:J.depthFunc(J.GREATER);break;case gH:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}Z0=q0}},setLocked:function(q0){T=q0},setClear:function(q0){if(H0!==q0){if(H0=q0,n)q0=1-q0;J.clearDepth(q0)}},reset:function(){T=!1,d=null,Z0=null,H0=null,n=!1}}}function W(){let T=!1,n=null,d=null,Z0=null,H0=null,q0=null,T0=null,w0=null,M0=null;return{setTest:function(S0){if(!T)if(S0)P0(J.STENCIL_TEST);else Z9(J.STENCIL_TEST)},setMask:function(S0){if(n!==S0&&!T)J.stencilMask(S0),n=S0},setFunc:function(S0,m0,L0){if(d!==S0||Z0!==m0||H0!==L0)J.stencilFunc(S0,m0,L0),d=S0,Z0=m0,H0=L0},setOp:function(S0,m0,L0){if(q0!==S0||T0!==m0||w0!==L0)J.stencilOp(S0,m0,L0),q0=S0,T0=m0,w0=L0},setLocked:function(S0){T=S0},setClear:function(S0){if(M0!==S0)J.clearStencil(S0),M0=S0},reset:function(){T=!1,n=null,d=null,Z0=null,H0=null,q0=null,T0=null,w0=null,M0=null}}}let H=new Z,$=new K,Y=new W,U={},X=new WeakMap,N={},E={},G={},F=new WeakMap,R=[],B=null,D=!1,q=null,I=null,z=null,V=null,_=null,C=null,O=null,k=new X0(0,0,0),w=0,g=!1,j=null,p=null,o=null,A=null,u=null,r=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),x=!1,Y0=0,c=J.getParameter(J.VERSION);if(c.indexOf("WebGL")!==-1)Y0=parseFloat(/^WebGL (\d)/.exec(c)[1]),x=Y0>=1;else if(c.indexOf("OpenGL ES")!==-1)Y0=parseFloat(/^OpenGL ES (\d)/.exec(c)[1]),x=Y0>=2;let e=null,W0={},C0=J.getParameter(J.SCISSOR_BOX),a=J.getParameter(J.VIEWPORT),K0=new M9().fromArray(C0),z0=new M9().fromArray(a);function j0(T,n,d,Z0){let H0=new Uint8Array(4),q0=J.createTexture();J.bindTexture(T,q0),J.texParameteri(T,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(T,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let T0=0;T0<d;T0++)if(T===J.TEXTURE_3D||T===J.TEXTURE_2D_ARRAY)J.texImage3D(n,0,J.RGBA,1,1,Z0,0,J.RGBA,J.UNSIGNED_BYTE,H0);else J.texImage2D(n+T0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,H0);return q0}let y0={};y0[J.TEXTURE_2D]=j0(J.TEXTURE_2D,J.TEXTURE_2D,1),y0[J.TEXTURE_CUBE_MAP]=j0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),y0[J.TEXTURE_2D_ARRAY]=j0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),y0[J.TEXTURE_3D]=j0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),H.setClear(0,0,0,1),$.setClear(1),Y.setClear(0),P0(J.DEPTH_TEST),$.setFunc(RZ),t9(!1),I9(FZ),P0(J.CULL_FACE),B9(R8);function P0(T){if(N[T]!==!0)J.enable(T),N[T]=!0}function Z9(T){if(N[T]!==!1)J.disable(T),N[T]=!1}function n0(T,n){if(G[T]!==n){if(J.bindFramebuffer(T,n),G[T]=n,T===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=n;if(T===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=n;return!0}return!1}function p0(T,n){let d=R,Z0=!1;if(T){if(d=F.get(n),d===void 0)d=[],F.set(n,d);let H0=T.textures;if(d.length!==H0.length||d[0]!==J.COLOR_ATTACHMENT0){for(let q0=0,T0=H0.length;q0<T0;q0++)d[q0]=J.COLOR_ATTACHMENT0+q0;d.length=H0.length,Z0=!0}}else if(d[0]!==J.BACK)d[0]=J.BACK,Z0=!0;if(Z0)J.drawBuffers(d)}function q9(T){if(B!==T)return J.useProgram(T),B=T,!0;return!1}let r0={[Z7]:J.FUNC_ADD,[FH]:J.FUNC_SUBTRACT,[DH]:J.FUNC_REVERSE_SUBTRACT};r0[OH]=J.MIN,r0[RH]=J.MAX;let V9={[MH]:J.ZERO,[LH]:J.ONE,[VH]:J.SRC_COLOR,[BH]:J.SRC_ALPHA,[AH]:J.SRC_ALPHA_SATURATE,[_H]:J.DST_COLOR,[zH]:J.DST_ALPHA,[kH]:J.ONE_MINUS_SRC_COLOR,[IH]:J.ONE_MINUS_SRC_ALPHA,[CH]:J.ONE_MINUS_DST_COLOR,[PH]:J.ONE_MINUS_DST_ALPHA,[wH]:J.CONSTANT_COLOR,[TH]:J.ONE_MINUS_CONSTANT_COLOR,[SH]:J.CONSTANT_ALPHA,[jH]:J.ONE_MINUS_CONSTANT_ALPHA};function B9(T,n,d,Z0,H0,q0,T0,w0,M0,S0){if(T===R8){if(D===!0)Z9(J.BLEND),D=!1;return}if(D===!1)P0(J.BLEND),D=!0;if(T!==qH){if(T!==q||S0!==g){if(I!==Z7||_!==Z7)J.blendEquation(J.FUNC_ADD),I=Z7,_=Z7;if(S0)switch(T){case f7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case BJ:J.blendFunc(J.ONE,J.ONE);break;case DZ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case OZ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:b0("WebGLState: Invalid blending: ",T);break}else switch(T){case f7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case BJ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case DZ:b0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case OZ:b0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:b0("WebGLState: Invalid blending: ",T);break}z=null,V=null,C=null,O=null,k.set(0,0,0),w=0,q=T,g=S0}return}if(H0=H0||n,q0=q0||d,T0=T0||Z0,n!==I||H0!==_)J.blendEquationSeparate(r0[n],r0[H0]),I=n,_=H0;if(d!==z||Z0!==V||q0!==C||T0!==O)J.blendFuncSeparate(V9[d],V9[Z0],V9[q0],V9[T0]),z=d,V=Z0,C=q0,O=T0;if(w0.equals(k)===!1||M0!==w)J.blendColor(w0.r,w0.g,w0.b,M0),k.copy(w0),w=M0;q=T,g=!1}function o9(T,n){T.side===F9?Z9(J.CULL_FACE):P0(J.CULL_FACE);let d=T.side===f9;if(n)d=!d;t9(d),T.blending===f7&&T.transparent===!1?B9(R8):B9(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),$.setFunc(T.depthFunc),$.setTest(T.depthTest),$.setMask(T.depthWrite),H.setMask(T.colorWrite);let Z0=T.stencilWrite;if(Y.setTest(Z0),Z0)Y.setMask(T.stencilWriteMask),Y.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),Y.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass);a9(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?P0(J.SAMPLE_ALPHA_TO_COVERAGE):Z9(J.SAMPLE_ALPHA_TO_COVERAGE)}function t9(T){if(j!==T){if(T)J.frontFace(J.CW);else J.frontFace(J.CCW);j=T}}function I9(T){if(T!==GH){if(P0(J.CULL_FACE),T!==p)if(T===FZ)J.cullFace(J.BACK);else if(T===NH)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else Z9(J.CULL_FACE);p=T}function g9(T){if(T!==o){if(x)J.lineWidth(T);o=T}}function a9(T,n,d){if(T){if(P0(J.POLYGON_OFFSET_FILL),A!==n||u!==d){if(A=n,u=d,$.getReversed())n=-n,d=-d;J.polygonOffset(n,d)}}else Z9(J.POLYGON_OFFSET_FILL)}function r9(T){if(T)P0(J.SCISSOR_TEST);else Z9(J.SCISSOR_TEST)}function NJ(T){if(T===void 0)T=J.TEXTURE0+r-1;if(e!==T)J.activeTexture(T),e=T}function y(T,n,d){if(d===void 0)if(e===null)d=J.TEXTURE0+r-1;else d=e;let Z0=W0[d];if(Z0===void 0)Z0={type:void 0,texture:void 0},W0[d]=Z0;if(Z0.type!==T||Z0.texture!==n){if(e!==d)J.activeTexture(d),e=d;J.bindTexture(T,n||y0[T]),Z0.type=T,Z0.texture=n}}function EJ(){let T=W0[e];if(T!==void 0&&T.type!==void 0)J.bindTexture(T.type,null),T.type=void 0,T.texture=void 0}function H9(){try{J.compressedTexImage2D(...arguments)}catch(T){b0("WebGLState:",T)}}function T9(){try{J.compressedTexImage3D(...arguments)}catch(T){b0("WebGLState:",T)}}function O0(){try{J.texSubImage2D(...arguments)}catch(T){b0("WebGLState:",T)}}function X9(){try{J.texSubImage3D(...arguments)}catch(T){b0("WebGLState:",T)}}function f0(){try{J.compressedTexSubImage2D(...arguments)}catch(T){b0("WebGLState:",T)}}function x0(){try{J.compressedTexSubImage3D(...arguments)}catch(T){b0("WebGLState:",T)}}function p9(){try{J.texStorage2D(...arguments)}catch(T){b0("WebGLState:",T)}}function P(){try{J.texStorage3D(...arguments)}catch(T){b0("WebGLState:",T)}}function M(){try{J.texImage2D(...arguments)}catch(T){b0("WebGLState:",T)}}function f(){try{J.texImage3D(...arguments)}catch(T){b0("WebGLState:",T)}}function J0(T){if(E[T]!==void 0)return E[T];else return J.getParameter(T)}function t(T,n){if(E[T]!==n)J.pixelStorei(T,n),E[T]=n}function $0(T){if(K0.equals(T)===!1)J.scissor(T.x,T.y,T.z,T.w),K0.copy(T)}function N0(T){if(z0.equals(T)===!1)J.viewport(T.x,T.y,T.z,T.w),z0.copy(T)}function l(T,n){let d=X.get(n);if(d===void 0)d=new WeakMap,X.set(n,d);let Z0=d.get(T);if(Z0===void 0)Z0=J.getUniformBlockIndex(n,T.name),J.uniformBlockBinding(n,Z0,Z0),d.set(T,Z0)}function s(T,n,d){let H0=X.get(n).get(T);if(U[H0]!==d)J.bindBufferBase(J.UNIFORM_BUFFER,H0,d),U[H0]=d}function U0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),$.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},E={},e=null,W0={},G={},U={},F=new WeakMap,R=[],B=null,D=!1,q=null,I=null,z=null,V=null,_=null,C=null,O=null,k=new X0(0,0,0),w=0,g=!1,j=null,p=null,o=null,A=null,u=null,K0.set(0,0,J.canvas.width,J.canvas.height),z0.set(0,0,J.canvas.width,J.canvas.height),H.reset(),$.reset(),Y.reset()}return{buffers:{color:H,depth:$,stencil:Y},enable:P0,disable:Z9,bindFramebuffer:n0,drawBuffers:p0,useProgram:q9,setBlending:B9,setMaterial:o9,setFlipSided:t9,setCullFace:I9,setLineWidth:g9,setPolygonOffset:a9,setScissorTest:r9,activeTexture:NJ,bindTexture:y,unbindTexture:EJ,compressedTexImage2D:H9,compressedTexImage3D:T9,texImage2D:M,texImage3D:f,pixelStorei:t,getParameter:J0,updateUBOMapping:l,uniformBlockBinding:s,texStorage2D:p9,texStorage3D:P,texSubImage2D:O0,texSubImage3D:X9,compressedTexSubImage2D:f0,compressedTexSubImage3D:x0,scissor:$0,viewport:N0,reset:U0}}function bE(J,Q,Z,K,W,H,$){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,U=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),X=new F0,N=new WeakMap,E=new Set,G,F=new WeakMap,R=new Set,B=new FinalizationRegistry((P)=>R.delete(P)),D=!1;try{D=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(P){}function q(P,M){return D?new OffscreenCanvas(P,M):a8("canvas")}function I(P,M,f){let J0=1,t=p9(P);if(t.width>f||t.height>f)J0=f/Math.max(t.width,t.height);if(J0<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let $0=Math.floor(J0*t.width),N0=Math.floor(J0*t.height);if(G===void 0)G=q($0,N0);let l=M?q($0,N0):G;return l.width=$0,l.height=N0,l.getContext("2d").drawImage(P,0,0,$0,N0),v0("WebGLRenderer: Texture has been resized from ("+t.width+"x"+t.height+") to ("+$0+"x"+N0+")."),l}else{if("data"in P)v0("WebGLRenderer: Image in DataTexture is too big ("+t.width+"x"+t.height+").");return P}return P}function z(P){return P.generateMipmaps}function V(P){J.generateMipmap(P)}function _(P){if(P.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(P.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function C(P,M,f,J0,t,$0=!1){if(P!==null){if(J[P]!==void 0)return J[P];v0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let N0;if(J0){if(N0=Q.get("EXT_texture_norm16"),!N0)v0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let l=M;if(M===J.RED){if(f===J.FLOAT)l=J.R32F;if(f===J.HALF_FLOAT)l=J.R16F;if(f===J.UNSIGNED_BYTE)l=J.R8;if(f===J.UNSIGNED_SHORT&&N0)l=N0.R16_EXT;if(f===J.SHORT&&N0)l=N0.R16_SNORM_EXT}if(M===J.RED_INTEGER){if(f===J.UNSIGNED_BYTE)l=J.R8UI;if(f===J.UNSIGNED_SHORT)l=J.R16UI;if(f===J.UNSIGNED_INT)l=J.R32UI;if(f===J.BYTE)l=J.R8I;if(f===J.SHORT)l=J.R16I;if(f===J.INT)l=J.R32I}if(M===J.RG){if(f===J.FLOAT)l=J.RG32F;if(f===J.HALF_FLOAT)l=J.RG16F;if(f===J.UNSIGNED_BYTE)l=J.RG8;if(f===J.UNSIGNED_SHORT&&N0)l=N0.RG16_EXT;if(f===J.SHORT&&N0)l=N0.RG16_SNORM_EXT}if(M===J.RG_INTEGER){if(f===J.UNSIGNED_BYTE)l=J.RG8UI;if(f===J.UNSIGNED_SHORT)l=J.RG16UI;if(f===J.UNSIGNED_INT)l=J.RG32UI;if(f===J.BYTE)l=J.RG8I;if(f===J.SHORT)l=J.RG16I;if(f===J.INT)l=J.RG32I}if(M===J.RGB_INTEGER){if(f===J.UNSIGNED_BYTE)l=J.RGB8UI;if(f===J.UNSIGNED_SHORT)l=J.RGB16UI;if(f===J.UNSIGNED_INT)l=J.RGB32UI;if(f===J.BYTE)l=J.RGB8I;if(f===J.SHORT)l=J.RGB16I;if(f===J.INT)l=J.RGB32I}if(M===J.RGBA_INTEGER){if(f===J.UNSIGNED_BYTE)l=J.RGBA8UI;if(f===J.UNSIGNED_SHORT)l=J.RGBA16UI;if(f===J.UNSIGNED_INT)l=J.RGBA32UI;if(f===J.BYTE)l=J.RGBA8I;if(f===J.SHORT)l=J.RGBA16I;if(f===J.INT)l=J.RGBA32I}if(M===J.RGB){if(f===J.UNSIGNED_SHORT&&N0)l=N0.RGB16_EXT;if(f===J.SHORT&&N0)l=N0.RGB16_SNORM_EXT;if(f===J.UNSIGNED_INT_5_9_9_9_REV)l=J.RGB9_E5;if(f===J.UNSIGNED_INT_10F_11F_11F_REV)l=J.R11F_G11F_B10F}if(M===J.RGBA){let s=$0?UK:a0.getTransfer(t);if(f===J.FLOAT)l=J.RGBA32F;if(f===J.HALF_FLOAT)l=J.RGBA16F;if(f===J.UNSIGNED_BYTE)l=s===U9?J.SRGB8_ALPHA8:J.RGBA8;if(f===J.UNSIGNED_SHORT&&N0)l=N0.RGBA16_EXT;if(f===J.SHORT&&N0)l=N0.RGBA16_SNORM_EXT;if(f===J.UNSIGNED_SHORT_4_4_4_4)l=J.RGBA4;if(f===J.UNSIGNED_SHORT_5_5_5_1)l=J.RGB5_A1}if(l===J.R16F||l===J.R32F||l===J.RG16F||l===J.RG32F||l===J.RGBA16F||l===J.RGBA32F)Q.get("EXT_color_buffer_float");return l}function O(P,M){let f;if(P){if(M===null||M===Q8||M===L8)f=J.DEPTH24_STENCIL8;else if(M===gJ)f=J.DEPTH32F_STENCIL8;else if(M===x7)f=J.DEPTH24_STENCIL8,v0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(M===null||M===Q8||M===L8)f=J.DEPTH_COMPONENT24;else if(M===gJ)f=J.DEPTH_COMPONENT32F;else if(M===x7)f=J.DEPTH_COMPONENT16;return f}function k(P,M){if(z(P)===!0||P.isFramebufferTexture&&P.minFilter!==eJ&&P.minFilter!==$J)return Math.log2(Math.max(M.width,M.height))+1;else if(P.mipmaps.length>0)return P.mipmaps.length;else if(P.isCompressedTexture&&Array.isArray(P.image))return M.mipmaps.length;else return 1}function w(P){let M=new WeakRef(P);K.get(P).__ref=M,R.add(M),B.register(P,M,M)}function g(P){let M=K.get(P).__ref;if(M===void 0)return;R.delete(M),B.unregister(M)}function j(P){o(P.target)}function p(P){A(P.target)}function o(P){if(P.removeEventListener("dispose",j),g(P),r(P),P.isVideoTexture)N.delete(P);if(P.isHTMLTexture)E.delete(P)}function A(P){P.removeEventListener("dispose",p),g(P),Y0(P)}function u(){for(let P of R){let M=P.deref();if(M===void 0)continue;if(M.isRenderTarget===!0)A(M);else o(M)}R.clear(),E.clear()}function r(P){let M=K.get(P);if(M.__webglInit===void 0)return;let f=P.source,J0=F.get(f);if(J0){let t=J0[M.__cacheKey];if(t.usedTimes--,t.usedTimes===0)x(P);if(Object.keys(J0).length===0)F.delete(f)}K.remove(P)}function x(P){let M=K.get(P);J.deleteTexture(M.__webglTexture);let f=P.source,J0=F.get(f);delete J0[M.__cacheKey],$.memory.textures--}function Y0(P){let M=K.get(P);if(M.__depthDisposeCallback)M.__depthDisposeCallback();let f=P.depthTexture;if(f&&f.renderTarget===P)o(f);if(P.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(M.__webglFramebuffer[t]))for(let $0=0;$0<M.__webglFramebuffer[t].length;$0++)J.deleteFramebuffer(M.__webglFramebuffer[t][$0]);else J.deleteFramebuffer(M.__webglFramebuffer[t]);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer[t])}else{if(Array.isArray(M.__webglFramebuffer))for(let t=0;t<M.__webglFramebuffer.length;t++)J.deleteFramebuffer(M.__webglFramebuffer[t]);else J.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer);if(M.__webglMultisampledFramebuffer)J.deleteFramebuffer(M.__webglMultisampledFramebuffer);if(M.__webglColorRenderbuffer){for(let t=0;t<M.__webglColorRenderbuffer.length;t++)if(M.__webglColorRenderbuffer[t])J.deleteRenderbuffer(M.__webglColorRenderbuffer[t])}if(M.__webglDepthRenderbuffer)J.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let J0=P.textures;for(let t=0,$0=J0.length;t<$0;t++){let N0=K.get(J0[t]);if(N0.__webglTexture)J.deleteTexture(N0.__webglTexture),$.memory.textures--;K.remove(J0[t])}K.remove(P)}let c=0;function e(){c=0}function W0(){return c}function C0(P){c=P}function a(){let P=c;if(P>=W.maxTextures)v0("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+W.maxTextures);return c+=1,P}function K0(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.mipmapsAutoUpdate),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function z0(P,M){let f=K.get(P);if(P.isVideoTexture)f0(P);if(P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&f.__version!==P.version){let J0=P.image;if(J0===null)v0("WebGLRenderer: Texture marked for update but no image data found.");else if(J0.complete===!1)v0("WebGLRenderer: Texture marked for update but image is incomplete");else{o9(f,P,M);return}}else if(P.isExternalTexture)f.__webglTexture=P.sourceTexture?P.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D,f.__webglTexture,J.TEXTURE0+M)}function j0(P,M){let f=K.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&f.__version!==P.version){o9(f,P,M);return}else if(P.isExternalTexture)f.__webglTexture=P.sourceTexture?P.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D_ARRAY,f.__webglTexture,J.TEXTURE0+M)}function y0(P,M){let f=K.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&f.__version!==P.version){o9(f,P,M);return}Z.bindTexture(J.TEXTURE_3D,f.__webglTexture,J.TEXTURE0+M)}function P0(P,M){let f=K.get(P);if(P.version>0&&f.__version!==P.version){t9(f,P,M);return}Z.bindTexture(J.TEXTURE_CUBE_MAP,f.__webglTexture,J.TEXTURE0+M)}let Z9={[dH]:J.REPEAT,[s6]:J.CLAMP_TO_EDGE,[uH]:J.MIRRORED_REPEAT},n0={[eJ]:J.NEAREST,[cH]:J.NEAREST_MIPMAP_NEAREST,[h7]:J.NEAREST_MIPMAP_LINEAR,[$J]:J.LINEAR,[i6]:J.LINEAR_MIPMAP_NEAREST,[J8]:J.LINEAR_MIPMAP_LINEAR},p0={[J$]:J.NEVER,[NK]:J.ALWAYS,[Q$]:J.LESS,[XK]:J.LEQUAL,[Z$]:J.EQUAL,[GK]:J.GEQUAL,[K$]:J.GREATER,[W$]:J.NOTEQUAL};function q9(P,M){if(M.type===gJ&&Q.has("OES_texture_float_linear")===!1&&(M.magFilter===$J||M.magFilter===i6||M.magFilter===h7||M.magFilter===J8||M.minFilter===$J||M.minFilter===i6||M.minFilter===h7||M.minFilter===J8))v0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(P,J.TEXTURE_WRAP_S,Z9[M.wrapS]),J.texParameteri(P,J.TEXTURE_WRAP_T,Z9[M.wrapT]),P===J.TEXTURE_3D||P===J.TEXTURE_2D_ARRAY)J.texParameteri(P,J.TEXTURE_WRAP_R,Z9[M.wrapR]);if(J.texParameteri(P,J.TEXTURE_MAG_FILTER,n0[M.magFilter]),J.texParameteri(P,J.TEXTURE_MIN_FILTER,n0[M.minFilter]),M.compareFunction)J.texParameteri(P,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(P,J.TEXTURE_COMPARE_FUNC,p0[M.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===eJ)return;if(M.minFilter!==h7&&M.minFilter!==J8)return;if(M.type===gJ&&Q.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||K.get(M).__currentAnisotropy){let f=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(P,f.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,W.getMaxAnisotropy())),K.get(M).__currentAnisotropy=M.anisotropy}}}function r0(P,M){let f=!1;if(P.__webglInit===void 0)P.__webglInit=!0,M.addEventListener("dispose",j),w(M);let J0=M.source,t=F.get(J0);if(t===void 0)t={},F.set(J0,t);let $0=K0(M);if($0!==P.__cacheKey){if(t[$0]===void 0)t[$0]={texture:J.createTexture(),usedTimes:0},$.memory.textures++,f=!0;t[$0].usedTimes++;let N0=t[P.__cacheKey];if(N0!==void 0){if(t[P.__cacheKey].usedTimes--,N0.usedTimes===0)x(M)}P.__cacheKey=$0,P.__webglTexture=t[$0].texture}return f}function V9(P,M,f){return Math.floor(Math.floor(P/f)/M)}function B9(P,M,f,J0){let $0=P.updateRanges;if($0.length===0)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,M.width,M.height,f,J0,M.data);else{$0.sort((T,n)=>T.start-n.start);let N0=0;for(let T=1;T<$0.length;T++){let n=$0[N0],d=$0[T],Z0=n.start+n.count,H0=V9(d.start,M.width,4),q0=V9(n.start,M.width,4);if(d.start<=Z0+1&&H0===q0&&V9(d.start+d.count-1,M.width,4)===H0)n.count=Math.max(n.count,d.start+d.count-n.start);else++N0,$0[N0]=d}$0.length=N0+1;let l=Z.getParameter(J.UNPACK_ROW_LENGTH),s=Z.getParameter(J.UNPACK_SKIP_PIXELS),U0=Z.getParameter(J.UNPACK_SKIP_ROWS);Z.pixelStorei(J.UNPACK_ROW_LENGTH,M.width);for(let T=0,n=$0.length;T<n;T++){let d=$0[T],Z0=Math.floor(d.start/4),H0=Math.ceil(d.count/4),q0=Z0%M.width,T0=Math.floor(Z0/M.width),w0=H0,M0=1;Z.pixelStorei(J.UNPACK_SKIP_PIXELS,q0),Z.pixelStorei(J.UNPACK_SKIP_ROWS,T0),Z.texSubImage2D(J.TEXTURE_2D,0,q0,T0,w0,1,f,J0,M.data)}P.clearUpdateRanges(),Z.pixelStorei(J.UNPACK_ROW_LENGTH,l),Z.pixelStorei(J.UNPACK_SKIP_PIXELS,s),Z.pixelStorei(J.UNPACK_SKIP_ROWS,U0)}}function o9(P,M,f){let J0=J.TEXTURE_2D;if(M.isDataArrayTexture||M.isCompressedArrayTexture)J0=J.TEXTURE_2D_ARRAY;if(M.isData3DTexture)J0=J.TEXTURE_3D;let t=r0(P,M),$0=M.source;Z.bindTexture(J0,P.__webglTexture,J.TEXTURE0+f);let N0=K.get($0);if($0.version!==N0.__version||t===!0){if(Z.activeTexture(J.TEXTURE0+f),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let M0=a0.getPrimaries(a0.workingColorSpace),S0=M.colorSpace===k8?null:a0.getPrimaries(M.colorSpace),m0=M.colorSpace===k8||M0===S0?J.NONE:J.BROWSER_DEFAULT_WEBGL;Z.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),Z.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),Z.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,m0)}Z.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment);let s=I(M.image,!1,W.maxTextureSize);s=x0(M,s);let U0=H.convert(M.format,M.colorSpace),T=H.convert(M.type),n=C(M.internalFormat,U0,T,M.normalized,M.colorSpace,M.isVideoTexture);q9(J0,M);let d,Z0=M.mipmaps,H0=M.isVideoTexture!==!0,q0=N0.__version===void 0||t===!0,T0=$0.dataReady,w0=k(M,s);if(M.isDepthTexture){if(n=O(M.format===Z8,M.type),q0)if(H0)Z.texStorage2D(J.TEXTURE_2D,1,n,s.width,s.height);else Z.texImage2D(J.TEXTURE_2D,0,n,s.width,s.height,0,U0,T,null)}else if(M.isDataTexture)if(Z0.length>0){if(H0&&q0)Z.texStorage2D(J.TEXTURE_2D,w0,n,Z0[0].width,Z0[0].height);for(let M0=0,S0=Z0.length;M0<S0;M0++)if(d=Z0[M0],H0){if(T0)Z.texSubImage2D(J.TEXTURE_2D,M0,0,0,d.width,d.height,U0,T,d.data)}else Z.texImage2D(J.TEXTURE_2D,M0,n,d.width,d.height,0,U0,T,d.data);M.generateMipmaps=!1}else if(H0){if(q0)Z.texStorage2D(J.TEXTURE_2D,w0,n,s.width,s.height);if(T0)B9(M,s,U0,T)}else Z.texImage2D(J.TEXTURE_2D,0,n,s.width,s.height,0,U0,T,s.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){if(H0&&q0)Z.texStorage3D(J.TEXTURE_2D_ARRAY,w0,n,Z0[0].width,Z0[0].height,s.depth);for(let M0=0,S0=Z0.length;M0<S0;M0++)if(d=Z0[M0],M.format!==pJ)if(U0!==null)if(H0){if(T0)if(M.layerUpdates.size>0){let m0=sK(d.width,d.height,M.format,M.type);for(let L0 of M.layerUpdates){let $9=d.data.subarray(L0*m0/d.data.BYTES_PER_ELEMENT,(L0+1)*m0/d.data.BYTES_PER_ELEMENT);Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,M0,0,0,L0,d.width,d.height,1,U0,$9)}}else Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,M0,0,0,0,d.width,d.height,s.depth,U0,d.data)}else Z.compressedTexImage3D(J.TEXTURE_2D_ARRAY,M0,n,d.width,d.height,s.depth,0,d.data,0,0);else v0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(H0){if(T0)Z.texSubImage3D(J.TEXTURE_2D_ARRAY,M0,0,0,0,d.width,d.height,s.depth,U0,T,d.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,M0,n,d.width,d.height,s.depth,0,U0,T,d.data);if(M.layerUpdates.size>0)M.clearLayerUpdates()}else{if(H0&&q0)Z.texStorage2D(J.TEXTURE_2D,w0,n,Z0[0].width,Z0[0].height);for(let M0=0,S0=Z0.length;M0<S0;M0++)if(d=Z0[M0],M.format!==pJ)if(U0!==null)if(H0){if(T0)Z.compressedTexSubImage2D(J.TEXTURE_2D,M0,0,0,d.width,d.height,U0,d.data)}else Z.compressedTexImage2D(J.TEXTURE_2D,M0,n,d.width,d.height,0,d.data);else v0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(H0){if(T0)Z.texSubImage2D(J.TEXTURE_2D,M0,0,0,d.width,d.height,U0,T,d.data)}else Z.texImage2D(J.TEXTURE_2D,M0,n,d.width,d.height,0,U0,T,d.data)}else if(M.isDataArrayTexture)if(H0){if(q0)Z.texStorage3D(J.TEXTURE_2D_ARRAY,w0,n,s.width,s.height,s.depth);if(T0)if(M.layerUpdates.size>0){let M0=sK(s.width,s.height,M.format,M.type);for(let S0 of M.layerUpdates){let m0=s.data.subarray(S0*M0/s.data.BYTES_PER_ELEMENT,(S0+1)*M0/s.data.BYTES_PER_ELEMENT);Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,S0,s.width,s.height,1,U0,T,m0)}M.clearLayerUpdates()}else Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,s.width,s.height,s.depth,U0,T,s.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,0,n,s.width,s.height,s.depth,0,U0,T,s.data);else if(M.isData3DTexture)if(H0){if(q0)Z.texStorage3D(J.TEXTURE_3D,w0,n,s.width,s.height,s.depth);if(T0)Z.texSubImage3D(J.TEXTURE_3D,0,0,0,0,s.width,s.height,s.depth,U0,T,s.data)}else Z.texImage3D(J.TEXTURE_3D,0,n,s.width,s.height,s.depth,0,U0,T,s.data);else if(M.isFramebufferTexture){if(q0)if(H0)Z.texStorage2D(J.TEXTURE_2D,w0,n,s.width,s.height);else{let{width:M0,height:S0}=s;for(let m0=0;m0<w0;m0++)Z.texImage2D(J.TEXTURE_2D,m0,n,M0,S0,0,U0,T,null),M0>>=1,S0>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in J){let M0=J.canvas;if(!M0.hasAttribute("layoutsubtree"))M0.setAttribute("layoutsubtree","true");if(s.parentNode!==M0){M0.appendChild(s),E.add(M),M0.onpaint=(S0)=>{let m0=S0.changedElements;for(let L0 of E)if(m0.includes(L0.image))L0.needsUpdate=!0},M0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,s);else{let{RGBA:m0,RGBA:L0,UNSIGNED_BYTE:$9}=J;J.texElementImage2D(J.TEXTURE_2D,0,m0,L0,$9,s)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(Z0.length>0){if(H0&&q0){let M0=p9(Z0[0]);Z.texStorage2D(J.TEXTURE_2D,w0,n,M0.width,M0.height)}for(let M0=0,S0=Z0.length;M0<S0;M0++)if(d=Z0[M0],H0){if(T0)Z.texSubImage2D(J.TEXTURE_2D,M0,0,0,U0,T,d)}else Z.texImage2D(J.TEXTURE_2D,M0,n,U0,T,d);M.generateMipmaps=!1}else if(H0){if(q0){let M0=p9(s);Z.texStorage2D(J.TEXTURE_2D,w0,n,M0.width,M0.height)}if(T0)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,U0,T,s)}else Z.texImage2D(J.TEXTURE_2D,0,n,U0,T,s);if(z(M)&&M.mipmapsAutoUpdate===!0)V(J0);if(N0.__version=$0.version,M.onUpdate)M.onUpdate(M)}P.__version=M.version}function t9(P,M,f){if(M.image.length!==6)return;let J0=r0(P,M),t=M.source;Z.bindTexture(J.TEXTURE_CUBE_MAP,P.__webglTexture,J.TEXTURE0+f);let $0=K.get(t);if(t.version!==$0.__version||J0===!0){Z.activeTexture(J.TEXTURE0+f);let N0=a0.getPrimaries(a0.workingColorSpace),l=M.colorSpace===k8?null:a0.getPrimaries(M.colorSpace),s=M.colorSpace===k8||N0===l?J.NONE:J.BROWSER_DEFAULT_WEBGL;Z.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),Z.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),Z.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment),Z.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let U0=M.isCompressedTexture||M.image[0].isCompressedTexture,T=M.image[0]&&M.image[0].isDataTexture,n=[];for(let L0=0;L0<6;L0++){if(!U0&&!T)n[L0]=I(M.image[L0],!0,W.maxCubemapSize);else n[L0]=T?M.image[L0].image:M.image[L0];n[L0]=x0(M,n[L0])}let d=n[0],Z0=H.convert(M.format,M.colorSpace),H0=H.convert(M.type),q0=C(M.internalFormat,Z0,H0,M.normalized,M.colorSpace),T0=M.isVideoTexture!==!0,w0=$0.__version===void 0||J0===!0,M0=t.dataReady,S0=k(M,d);q9(J.TEXTURE_CUBE_MAP,M);let m0;if(M.isDepthTexture){if(q0=O(M.format===Z8,M.type),w0)if(T0)Z.texStorage2D(J.TEXTURE_CUBE_MAP,1,q0,d.width,d.height);else for(let L0=0;L0<6;L0++)Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,0,q0,d.width,d.height,0,Z0,H0,null)}else if(U0){if(T0&&w0)Z.texStorage2D(J.TEXTURE_CUBE_MAP,S0,q0,d.width,d.height);for(let L0=0;L0<6;L0++){m0=n[L0].mipmaps;for(let $9=0;$9<m0.length;$9++){let S9=m0[$9];if(M.format!==pJ)if(Z0!==null)if(T0){if(M0)Z.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,$9,0,0,S9.width,S9.height,Z0,S9.data)}else Z.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,$9,q0,S9.width,S9.height,0,S9.data);else v0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(T0){if(M0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,$9,0,0,S9.width,S9.height,Z0,H0,S9.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,$9,q0,S9.width,S9.height,0,Z0,H0,S9.data)}}}else{if(m0=M.mipmaps,T0&&w0){if(m0.length>0)S0++;let L0=p9(n[0]);Z.texStorage2D(J.TEXTURE_CUBE_MAP,S0,q0,L0.width,L0.height)}for(let L0=0;L0<6;L0++)if(T){if(T0){if(M0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,0,0,0,n[L0].width,n[L0].height,Z0,H0,n[L0].data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,0,q0,n[L0].width,n[L0].height,0,Z0,H0,n[L0].data);for(let $9=0;$9<m0.length;$9++){let TJ=m0[$9].image[L0].image;if(T0){if(M0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,$9+1,0,0,TJ.width,TJ.height,Z0,H0,TJ.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,$9+1,q0,TJ.width,TJ.height,0,Z0,H0,TJ.data)}}else{if(T0){if(M0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,0,0,0,Z0,H0,n[L0])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,0,q0,Z0,H0,n[L0]);for(let $9=0;$9<m0.length;$9++){let S9=m0[$9];if(T0){if(M0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,$9+1,0,0,Z0,H0,S9.image[L0])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+L0,$9+1,q0,Z0,H0,S9.image[L0])}}}if(z(M)&&M.mipmapsAutoUpdate===!0)V(J.TEXTURE_CUBE_MAP);if($0.__version=t.version,M.onUpdate)M.onUpdate(M)}P.__version=M.version}function I9(P,M,f,J0,t,$0){let N0=H.convert(f.format,f.colorSpace),l=H.convert(f.type),s=C(f.internalFormat,N0,l,f.normalized,f.colorSpace),U0=K.get(M),T=K.get(f);if(T.__renderTarget=M,!U0.__hasExternalTextures){let n=Math.max(1,M.width>>$0),d=Math.max(1,M.height>>$0);if(t===J.TEXTURE_3D||t===J.TEXTURE_2D_ARRAY)Z.texImage3D(t,$0,s,n,d,M.depth,0,N0,l,null);else Z.texImage2D(t,$0,s,n,d,0,N0,l,null)}if(Z.bindFramebuffer(J.FRAMEBUFFER,P),X9(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J0,t,T.__webglTexture,0,O0(M));else if(t===J.TEXTURE_2D||t>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&t<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,J0,t,T.__webglTexture,$0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}function g9(P,M,f){if(J.bindRenderbuffer(J.RENDERBUFFER,P),M.depthBuffer){let J0=M.depthTexture,t=J0&&J0.isDepthTexture?J0.type:null,$0=O(M.stencilBuffer,t),N0=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(X9(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,O0(M),$0,M.width,M.height);else if(f)J.renderbufferStorageMultisample(J.RENDERBUFFER,O0(M),$0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,$0,M.width,M.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,N0,J.RENDERBUFFER,P)}else{let J0=M.textures;for(let t=0;t<J0.length;t++){let $0=J0[t],N0=H.convert($0.format,$0.colorSpace),l=H.convert($0.type),s=C($0.internalFormat,N0,l,$0.normalized,$0.colorSpace);if(X9(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,O0(M),s,M.width,M.height);else if(f)J.renderbufferStorageMultisample(J.RENDERBUFFER,O0(M),s,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,s,M.width,M.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function a9(P,M,f){let J0=M.isWebGLCubeRenderTarget===!0;if(Z.bindFramebuffer(J.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let t=K.get(M.depthTexture);t.__renderTarget=M;let $0=J0?M.depthTexture.image[0]:M.depthTexture.image;if(!t.__webglTexture||$0.width!==M.width||$0.height!==M.height)$0.width=M.width,$0.height=M.height,M.depthTexture.needsUpdate=!0;if(J0)P0(M.depthTexture,0);else z0(M.depthTexture,0);let N0=t.__webglTexture,l=O0(M),s=J0?J.TEXTURE_CUBE_MAP_POSITIVE_X+f:J.TEXTURE_2D,U0=M.depthTexture.format===Z8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(M.depthTexture.format===W7)if(X9(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,U0,s,N0,0,l);else J.framebufferTexture2D(J.FRAMEBUFFER,U0,s,N0,0);else if(M.depthTexture.format===Z8)if(X9(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,U0,s,N0,0,l);else J.framebufferTexture2D(J.FRAMEBUFFER,U0,s,N0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function r9(P){let M=K.get(P),f=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let J0=P.depthTexture;if(M.__depthDisposeCallback)M.__depthDisposeCallback();if(J0){let t=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J0.removeEventListener("dispose",t)};J0.addEventListener("dispose",t),M.__depthDisposeCallback=t}M.__boundDepthTexture=J0}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(f)for(let J0=0;J0<6;J0++)a9(M.__webglFramebuffer[J0],P,J0);else if(P.texture.mipmaps.length>0)a9(M.__webglFramebuffer[0],P,0);else a9(M.__webglFramebuffer,P,0);else if(f){M.__webglDepthbuffer=[];for(let J0=0;J0<6;J0++)if(Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[J0]),M.__webglDepthbuffer[J0]===void 0)M.__webglDepthbuffer[J0]=J.createRenderbuffer(),g9(M.__webglDepthbuffer[J0],P,!1);else{let t=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,$0=M.__webglDepthbuffer[J0];J.bindRenderbuffer(J.RENDERBUFFER,$0),J.framebufferRenderbuffer(J.FRAMEBUFFER,t,J.RENDERBUFFER,$0)}}else{if(P.texture.mipmaps.length>0)Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[0]);else Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer);if(M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=J.createRenderbuffer(),g9(M.__webglDepthbuffer,P,!1);else{let t=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,$0=M.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,$0),J.framebufferRenderbuffer(J.FRAMEBUFFER,t,J.RENDERBUFFER,$0)}}Z.bindFramebuffer(J.FRAMEBUFFER,null)}function NJ(P,M,f){let J0=K.get(P);if(M!==void 0)I9(J0.__webglFramebuffer,P,P.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(f!==void 0)r9(P)}function y(P){let M=P.texture,f=K.get(P),J0=K.get(M);P.addEventListener("dispose",p),w(P);let t=P.textures,$0=P.isWebGLCubeRenderTarget===!0,N0=t.length>1;if(!N0){if(J0.__webglTexture===void 0)J0.__webglTexture=J.createTexture();J0.__version=M.version,$.memory.textures++}if($0){f.__webglFramebuffer=[];for(let l=0;l<6;l++)if(M.mipmaps.length>0){f.__webglFramebuffer[l]=[];for(let s=0;s<M.mipmaps.length;s++)f.__webglFramebuffer[l][s]=J.createFramebuffer()}else f.__webglFramebuffer[l]=J.createFramebuffer()}else{if(M.mipmaps.length>0){f.__webglFramebuffer=[];for(let l=0;l<M.mipmaps.length;l++)f.__webglFramebuffer[l]=J.createFramebuffer()}else f.__webglFramebuffer=J.createFramebuffer();if(N0)for(let l=0,s=t.length;l<s;l++){let U0=K.get(t[l]);if(U0.__webglTexture===void 0)U0.__webglTexture=J.createTexture(),$.memory.textures++}if(P.samples>0&&X9(P)===!1){f.__webglMultisampledFramebuffer=J.createFramebuffer(),f.__webglColorRenderbuffer=[],Z.bindFramebuffer(J.FRAMEBUFFER,f.__webglMultisampledFramebuffer);for(let l=0;l<t.length;l++){let s=t[l];f.__webglColorRenderbuffer[l]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,f.__webglColorRenderbuffer[l]);let U0=H.convert(s.format,s.colorSpace),T=H.convert(s.type),n=C(s.internalFormat,U0,T,s.normalized,s.colorSpace,P.isXRRenderTarget===!0),d=O0(P);J.renderbufferStorageMultisample(J.RENDERBUFFER,d,n,P.width,P.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+l,J.RENDERBUFFER,f.__webglColorRenderbuffer[l])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),P.depthBuffer)f.__webglDepthRenderbuffer=J.createRenderbuffer(),g9(f.__webglDepthRenderbuffer,P,!0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}}if($0){Z.bindTexture(J.TEXTURE_CUBE_MAP,J0.__webglTexture),q9(J.TEXTURE_CUBE_MAP,M);for(let l=0;l<6;l++)if(M.mipmaps.length>0)for(let s=0;s<M.mipmaps.length;s++)I9(f.__webglFramebuffer[l][s],P,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+l,s);else I9(f.__webglFramebuffer[l],P,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+l,0);if(z(M))V(J.TEXTURE_CUBE_MAP);else if(M.mipmaps.length>0)J.texParameteri(J.TEXTURE_CUBE_MAP,J.TEXTURE_MAX_LEVEL,M.mipmaps.length-1);Z.unbindTexture()}else if(N0){for(let l=0,s=t.length;l<s;l++){let U0=t[l],T=K.get(U0),n=J.TEXTURE_2D;if(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)n=P.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(n,T.__webglTexture),q9(n,U0),I9(f.__webglFramebuffer,P,U0,J.COLOR_ATTACHMENT0+l,n,0),z(U0))V(n)}Z.unbindTexture()}else{let l=J.TEXTURE_2D;if(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)l=P.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(l,J0.__webglTexture),q9(l,M),M.mipmaps.length>0)for(let s=0;s<M.mipmaps.length;s++)I9(f.__webglFramebuffer[s],P,M,J.COLOR_ATTACHMENT0,l,s);else I9(f.__webglFramebuffer,P,M,J.COLOR_ATTACHMENT0,l,0);if(z(M))V(l);else if(M.mipmaps.length>0)J.texParameteri(l,J.TEXTURE_MAX_LEVEL,M.mipmaps.length-1);Z.unbindTexture()}if(P.depthBuffer)r9(P)}function EJ(P){let M=P.textures;for(let f=0,J0=M.length;f<J0;f++){let t=M[f];if(z(t)&&t.mipmapsAutoUpdate===!0){let $0=_(P),N0=K.get(t).__webglTexture;Z.bindTexture($0,N0),V($0),Z.unbindTexture()}}}let H9=[];function T9(P){if(P.samples>0){if(X9(P)===!1){let{textures:M,width:f,height:J0}=P,t=J.COLOR_BUFFER_BIT,$0=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,N0=K.get(P),l=M.length>1;if(l)for(let U0=0;U0<M.length;U0++)Z.bindFramebuffer(J.FRAMEBUFFER,N0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+U0,J.RENDERBUFFER,null),Z.bindFramebuffer(J.FRAMEBUFFER,N0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+U0,J.TEXTURE_2D,null,0);if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,N0.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0)Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,N0.__webglFramebuffer[0]);else Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,N0.__webglFramebuffer);for(let U0=0;U0<M.length;U0++){if(P.resolveDepthBuffer){if(P.depthBuffer)t|=J.DEPTH_BUFFER_BIT;if(P.stencilBuffer&&P.resolveStencilBuffer)t|=J.STENCIL_BUFFER_BIT}if(l){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,N0.__webglColorRenderbuffer[U0]);let T=K.get(M[U0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,T,0)}if(J.blitFramebuffer(0,0,f,J0,0,0,f,J0,t,J.NEAREST),U===!0){if(H9.length=0,H9.push(J.COLOR_ATTACHMENT0+U0),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1)H9.push($0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,H9)}}if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,null),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),l)for(let U0=0;U0<M.length;U0++){Z.bindFramebuffer(J.FRAMEBUFFER,N0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+U0,J.RENDERBUFFER,N0.__webglColorRenderbuffer[U0]);let T=K.get(M[U0]).__webglTexture;Z.bindFramebuffer(J.FRAMEBUFFER,N0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+U0,J.TEXTURE_2D,T,0)}Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,N0.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&U){let M=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[M])}}}function O0(P){return Math.min(W.maxSamples,P.samples)}function X9(P){let M=K.get(P);return P.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function f0(P){let M=$.render.frame;if(N.get(P)!==M)N.set(P,M),P.update()}function x0(P,M){let{colorSpace:f,format:J0,type:t}=P;if(P.isCompressedTexture===!0||P.isVideoTexture===!0)return M;if(f!==YK&&f!==k8)if(a0.getTransfer(f)===U9){if(J0!==pJ||t!==RJ)v0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else b0("WebGLTextures: Unsupported texture color space:",f);return M}function p9(P){if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement)X.width=P.naturalWidth||P.width,X.height=P.naturalHeight||P.height;else if(typeof VideoFrame<"u"&&P instanceof VideoFrame)X.width=P.displayWidth,X.height=P.displayHeight;else X.width=P.width,X.height=P.height;return X}this.allocateTextureUnit=a,this.resetTextureUnits=e,this.getTextureUnits=W0,this.setTextureUnits=C0,this.setTexture2D=z0,this.setTexture2DArray=j0,this.setTexture3D=y0,this.setTextureCube=P0,this.rebindTextures=NJ,this.setupRenderTarget=y,this.updateRenderTargetMipmap=EJ,this.updateMultisampleRenderTarget=T9,this.setupDepthRenderbuffer=r9,this.setupFrameBufferTexture=I9,this.useMultisampledRTT=X9,this.dispose=u}function hE(J,Q){function Z(K,W=k8){let H,$=a0.getTransfer(W);if(K===RJ)return J.UNSIGNED_BYTE;if(K===PZ)return J.UNSIGNED_SHORT_4_4_4_4;if(K===_Z)return J.UNSIGNED_SHORT_5_5_5_1;if(K===iH)return J.UNSIGNED_INT_5_9_9_9_REV;if(K===oH)return J.UNSIGNED_INT_10F_11F_11F_REV;if(K===nH)return J.BYTE;if(K===sH)return J.SHORT;if(K===x7)return J.UNSIGNED_SHORT;if(K===zZ)return J.INT;if(K===Q8)return J.UNSIGNED_INT;if(K===gJ)return J.FLOAT;if(K===zJ)return J.HALF_FLOAT;if(K===aH)return J.ALPHA;if(K===rH)return J.RGB;if(K===pJ)return J.RGBA;if(K===W7)return J.DEPTH_COMPONENT;if(K===Z8)return J.DEPTH_STENCIL;if(K===tH)return J.RED;if(K===CZ)return J.RED_INTEGER;if(K===V8)return J.RG;if(K===AZ)return J.RG_INTEGER;if(K===wZ)return J.RGBA_INTEGER;if(K===o6||K===a6||K===r6||K===t6)if($===U9)if(H=Q.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if(K===o6)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(K===a6)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(K===r6)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(K===t6)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=Q.get("WEBGL_compressed_texture_s3tc"),H!==null){if(K===o6)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if(K===a6)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(K===r6)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(K===t6)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(K===TZ||K===SZ||K===jZ||K===vZ)if(H=Q.get("WEBGL_compressed_texture_pvrtc"),H!==null){if(K===TZ)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(K===SZ)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(K===jZ)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(K===vZ)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(K===yZ||K===fZ||K===bZ||K===hZ||K===xZ||K===e6||K===gZ)if(H=Q.get("WEBGL_compressed_texture_etc"),H!==null){if(K===yZ||K===fZ)return $===U9?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if(K===bZ)return $===U9?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC;if(K===hZ)return H.COMPRESSED_R11_EAC;if(K===xZ)return H.COMPRESSED_SIGNED_R11_EAC;if(K===e6)return H.COMPRESSED_RG11_EAC;if(K===gZ)return H.COMPRESSED_SIGNED_RG11_EAC}else return null;if(K===pZ||K===mZ||K===lZ||K===dZ||K===uZ||K===cZ||K===nZ||K===sZ||K===iZ||K===oZ||K===aZ||K===rZ||K===tZ||K===eZ)if(H=Q.get("WEBGL_compressed_texture_astc"),H!==null){if(K===pZ)return $===U9?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if(K===mZ)return $===U9?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if(K===lZ)return $===U9?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if(K===dZ)return $===U9?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if(K===uZ)return $===U9?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if(K===cZ)return $===U9?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if(K===nZ)return $===U9?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if(K===sZ)return $===U9?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if(K===iZ)return $===U9?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if(K===oZ)return $===U9?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if(K===aZ)return $===U9?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if(K===rZ)return $===U9?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if(K===tZ)return $===U9?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if(K===eZ)return $===U9?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(K===JK||K===QK||K===ZK)if(H=Q.get("EXT_texture_compression_bptc"),H!==null){if(K===JK)return $===U9?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(K===QK)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(K===ZK)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(K===KK||K===WK||K===JQ||K===HK)if(H=Q.get("EXT_texture_compression_rgtc"),H!==null){if(K===KK)return H.COMPRESSED_RED_RGTC1_EXT;if(K===WK)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(K===JQ)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if(K===HK)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(K===L8)return J.UNSIGNED_INT_24_8;return J[K]!==void 0?J[K]:null}return{convert:Z}}var xE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HY{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let Z=new GQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=Z}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,Z=new k9({vertexShader:xE,fragmentShader:gE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new Q0(new c9(20,20),Z)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $Y extends mJ{constructor(J,Q){super();let Z=this,K=null,W=1,H=null,$="local-floor",Y=1,U=null,X=null,N=null,E=null,G=null,F=null,R=typeof XRWebGLBinding<"u",B=new HY,D={},q=Q.getContextAttributes(),I=null,z=null,V=[],_=[],C=new F0,O=null,k=null,w=new h9;w.viewport=new M9;let g=new h9;g.viewport=new M9;let j=[w,g],p=new uK,o=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(a){let K0=V[a];if(K0===void 0)K0=new m7,V[a]=K0;return K0.getTargetRaySpace()},this.getControllerGrip=function(a){let K0=V[a];if(K0===void 0)K0=new m7,V[a]=K0;return K0.getGripSpace()},this.getHand=function(a){let K0=V[a];if(K0===void 0)K0=new m7,V[a]=K0;return K0.getHandSpace()};function u(a){let K0=_.indexOf(a.inputSource);if(K0===-1)return;let z0=V[K0];if(z0!==void 0)z0.update(a.inputSource,a.frame,U||H),z0.dispatchEvent({type:a.type,data:a.inputSource})}function r(){K.removeEventListener("select",u),K.removeEventListener("selectstart",u),K.removeEventListener("selectend",u),K.removeEventListener("squeeze",u),K.removeEventListener("squeezestart",u),K.removeEventListener("squeezeend",u),K.removeEventListener("end",r),K.removeEventListener("inputsourceschange",x);for(let a=0;a<V.length;a++){let K0=_[a];if(K0===null)continue;_[a]=null,V[a].disconnect(K0)}o=null,A=null,B.reset();for(let a in D)delete D[a];if(J.setRenderTarget(I),G=null,E=null,N=null,K=null,z=null,C0.stop(),Z.isPresenting=!1,J.setPixelRatio(O),J.setSize(C.width,C.height,!1),k!==null){let a=k.camera;a.fov=k.fov,a.zoom=k.zoom,a.updateProjectionMatrix(),k=null}Z.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(a){if(W=a,Z.isPresenting===!0)v0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(a){if($=a,Z.isPresenting===!0)v0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return U||H},this.setReferenceSpace=function(a){U=a},this.getBaseLayer=function(){return E!==null?E:G},this.getBinding=function(){if(N===null&&R)N=new XRWebGLBinding(K,Q);return N},this.getFrame=function(){return F},this.getSession=function(){return K},this.setSession=async function(a){if(K=a,K!==null){if(I=J.getRenderTarget(),K.addEventListener("select",u),K.addEventListener("selectstart",u),K.addEventListener("selectend",u),K.addEventListener("squeeze",u),K.addEventListener("squeezestart",u),K.addEventListener("squeezeend",u),K.addEventListener("end",r),K.addEventListener("inputsourceschange",x),q.xrCompatible!==!0)await Q.makeXRCompatible();if(O=J.getPixelRatio(),J.getSize(C),!(R&&("createProjectionLayer"in XRWebGLBinding.prototype))){let z0={antialias:q.antialias,alpha:!0,depth:q.depth,stencil:q.stencil,framebufferScaleFactor:W};G=new XRWebGLLayer(K,Q,z0),K.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),z=new UJ(G.framebufferWidth,G.framebufferHeight,{format:pJ,type:RJ,colorSpace:J.outputColorSpace,stencilBuffer:q.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let z0=null,j0=null,y0=null;if(q.depth)y0=q.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,z0=q.stencil?Z8:W7,j0=q.stencil?L8:Q8;let P0={colorFormat:Q.RGBA8,depthFormat:y0,scaleFactor:W};N=this.getBinding(),E=N.createProjectionLayer(P0),K.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),z=new UJ(E.textureWidth,E.textureHeight,{format:pJ,type:RJ,depthTexture:new W8(E.textureWidth,E.textureHeight,j0,void 0,void 0,void 0,void 0,void 0,void 0,z0),stencilBuffer:q.stencil,colorSpace:J.outputColorSpace,samples:q.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(Y),U=null,H=await K.requestReferenceSpace($),C0.setContext(K),C0.start(),Z.isPresenting=!0,Z.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(K!==null)return K.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function x(a){for(let K0=0;K0<a.removed.length;K0++){let z0=a.removed[K0],j0=_.indexOf(z0);if(j0>=0)_[j0]=null,V[j0].disconnect(z0)}for(let K0=0;K0<a.added.length;K0++){let z0=a.added[K0],j0=_.indexOf(z0);if(j0===-1){for(let P0=0;P0<V.length;P0++)if(P0>=_.length){_.push(z0),j0=P0;break}else if(_[P0]===null){_[P0]=z0,j0=P0;break}if(j0===-1)break}let y0=V[j0];if(y0)y0.connect(z0)}}function Y0(a,K0){if(K0===null)a.matrixWorld.copy(a.matrix);else a.matrixWorld.multiplyMatrices(K0.matrixWorld,a.matrix);a.matrixWorldInverse.copy(a.matrixWorld).invert()}this.updateCamera=function(a){if(K===null)return;let{near:K0,far:z0}=a;if(B.texture!==null){if(B.depthNear>0)K0=B.depthNear;if(B.depthFar>0)z0=B.depthFar}if(p.near=g.near=w.near=K0,p.far=g.far=w.far=z0,o!==p.near||A!==p.far)K.updateRenderState({depthNear:p.near,depthFar:p.far}),o=p.near,A=p.far;p.layers.mask=a.layers.mask|6,w.layers.mask=p.layers.mask&-5,g.layers.mask=p.layers.mask&-3;let j0=a.parent,y0=p.cameras;Y0(p,j0);for(let P0=0;P0<y0.length;P0++)Y0(y0[P0],j0);if(p.projectionMatrix.copy(w.projectionMatrix),p.projectionMatrixInverse.copy(w.projectionMatrixInverse),k===null&&a.isPerspectiveCamera)k={camera:a,fov:a.fov,zoom:a.zoom};c(a,p,j0)};function c(a,K0,z0){if(z0===null)a.matrix.copy(K0.matrixWorld);else a.matrix.copy(z0.matrixWorld),a.matrix.invert(),a.matrix.multiply(K0.matrixWorld);if(a.matrix.decompose(a.position,a.quaternion,a.scale),a.updateMatrixWorld(!0),a.projectionMatrix.copy(K0.projectionMatrix),a.projectionMatrixInverse.copy(K0.projectionMatrixInverse),a.isPerspectiveCamera)a.fov=t8*2*Math.atan(1/a.projectionMatrix.elements[5]),a.zoom=1}this.getCamera=function(){return p},this.getFoveation=function(){if(E===null&&G===null)return;return Y},this.setFoveation=function(a){if(Y=a,E!==null)E.fixedFoveation=a;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=a},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(p)},this.getCameraTexture=function(a){return D[a]};let e=null;function W0(a,K0){if(X=K0.getViewerPose(U||H),F=K0,X!==null){let z0=X.views;if(G!==null)J.setRenderTargetFramebuffer(z,G.framebuffer),J.setRenderTarget(z);let j0=!1;if(z0.length!==p.cameras.length)p.cameras.length=0,j0=!0;for(let n0=0;n0<z0.length;n0++){let p0=z0[n0],q9=null;if(G!==null)q9=G.getViewport(p0);else{let V9=N.getViewSubImage(E,p0);if(q9=V9.viewport,n0===0)J.setRenderTargetTextures(z,V9.colorTexture,V9.depthStencilTexture),J.setRenderTarget(z)}let r0=j[n0];if(r0===void 0)r0=new h9,r0.layers.enable(n0),r0.viewport=new M9,j[n0]=r0;if(r0.matrix.fromArray(p0.transform.matrix),r0.matrix.decompose(r0.position,r0.quaternion,r0.scale),r0.projectionMatrix.fromArray(p0.projectionMatrix),r0.projectionMatrixInverse.copy(r0.projectionMatrix).invert(),r0.viewport.set(q9.x,q9.y,q9.width,q9.height),n0===0)p.matrix.copy(r0.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale);if(j0===!0)p.cameras.push(r0)}let y0=K.enabledFeatures;if(y0&&y0.includes("depth-sensing")&&K.depthUsage=="gpu-optimized"&&R){N=Z.getBinding();let n0=N.getDepthInformation(z0[0]);if(n0&&n0.isValid&&n0.texture)B.init(n0,K.renderState)}if(y0&&y0.includes("camera-access")&&R){J.state.unbindTexture(),N=Z.getBinding();for(let n0=0;n0<z0.length;n0++){let p0=z0[n0].camera;if(p0){let q9=D[p0];if(!q9)q9=new GQ,D[p0]=q9;let r0=N.getCameraImage(p0);q9.sourceTexture=r0}}}}for(let z0=0;z0<V.length;z0++){let j0=_[z0],y0=V[z0];if(j0!==null&&y0!==void 0)y0.update(j0,K0,U||H)}if(e)e(a,K0);if(K0.detectedPlanes)Z.dispatchEvent({type:"planesdetected",data:K0});F=null}let C0=new u$;C0.setAnimationLoop(W0),this.setAnimationLoop=function(a){e=a},this.dispose=function(){}}}var pE=new J9,YY=new h0;YY.set(-1,0,0,0,1,0,0,0,1);function mE(J,Q){function Z(D,q){if(D.matrixAutoUpdate===!0)D.updateMatrix();q.value.copy(D.matrix)}function K(D,q){if(q.color.getRGB(D.fogColor.value,TK(J)),q.isFog)D.fogNear.value=q.near,D.fogFar.value=q.far;else if(q.isFogExp2)D.fogDensity.value=q.density}function W(D,q,I,z,V){if(q.isNodeMaterial)q.uniformsNeedUpdate=!1;else if(q.isMeshBasicMaterial)H(D,q);else if(q.isMeshLambertMaterial){if(H(D,q),q.envMap)D.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshToonMaterial)H(D,q),E(D,q);else if(q.isMeshPhongMaterial){if(H(D,q),N(D,q),q.envMap)D.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshStandardMaterial){if(H(D,q),G(D,q),q.isMeshPhysicalMaterial)F(D,q,V)}else if(q.isMeshMatcapMaterial)H(D,q),R(D,q);else if(q.isMeshDepthMaterial)H(D,q);else if(q.isMeshDistanceMaterial)H(D,q),B(D,q);else if(q.isMeshNormalMaterial)H(D,q);else if(q.isLineBasicMaterial){if($(D,q),q.isLineDashedMaterial)Y(D,q)}else if(q.isPointsMaterial)U(D,q,I,z);else if(q.isSpriteMaterial)X(D,q);else if(q.isShadowMaterial)D.color.value.copy(q.color),D.opacity.value=q.opacity;else if(q.isShaderMaterial)q.uniformsNeedUpdate=!1}function H(D,q){if(D.opacity.value=q.opacity,q.color)D.diffuse.value.copy(q.color);if(q.emissive)D.emissive.value.copy(q.emissive).multiplyScalar(q.emissiveIntensity);if(q.map)D.map.value=q.map,Z(q.map,D.mapTransform);if(q.alphaMap)D.alphaMap.value=q.alphaMap,Z(q.alphaMap,D.alphaMapTransform);if(q.bumpMap){if(D.bumpMap.value=q.bumpMap,Z(q.bumpMap,D.bumpMapTransform),D.bumpScale.value=q.bumpScale,q.side===f9)D.bumpScale.value*=-1}if(q.normalMap){if(D.normalMap.value=q.normalMap,Z(q.normalMap,D.normalMapTransform),D.normalScale.value.copy(q.normalScale),q.side===f9)D.normalScale.value.negate()}if(q.displacementMap)D.displacementMap.value=q.displacementMap,Z(q.displacementMap,D.displacementMapTransform),D.displacementScale.value=q.displacementScale,D.displacementBias.value=q.displacementBias;if(q.emissiveMap)D.emissiveMap.value=q.emissiveMap,Z(q.emissiveMap,D.emissiveMapTransform);if(q.specularMap)D.specularMap.value=q.specularMap,Z(q.specularMap,D.specularMapTransform);if(q.alphaTest>0)D.alphaTest.value=q.alphaTest;let I=Q.get(q),z=I.envMap,V=I.envMapRotation;if(z){if(D.envMap.value=z,D.envMapRotation.value.setFromMatrix4(pE.makeRotationFromEuler(V)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1)D.envMapRotation.value.premultiply(YY);D.reflectivity.value=q.reflectivity,D.ior.value=q.ior,D.refractionRatio.value=q.refractionRatio}if(q.lightMap)D.lightMap.value=q.lightMap,D.lightMapIntensity.value=q.lightMapIntensity,Z(q.lightMap,D.lightMapTransform);if(q.aoMap)D.aoMap.value=q.aoMap,D.aoMapIntensity.value=q.aoMapIntensity,Z(q.aoMap,D.aoMapTransform)}function $(D,q){if(D.diffuse.value.copy(q.color),D.opacity.value=q.opacity,q.map)D.map.value=q.map,Z(q.map,D.mapTransform)}function Y(D,q){D.dashSize.value=q.dashSize,D.totalSize.value=q.dashSize+q.gapSize,D.scale.value=q.scale}function U(D,q,I,z){if(D.diffuse.value.copy(q.color),D.opacity.value=q.opacity,D.size.value=q.size*I,D.scale.value=z*0.5,q.map)D.map.value=q.map,Z(q.map,D.uvTransform);if(q.alphaMap)D.alphaMap.value=q.alphaMap,Z(q.alphaMap,D.alphaMapTransform);if(q.alphaTest>0)D.alphaTest.value=q.alphaTest}function X(D,q){if(D.diffuse.value.copy(q.color),D.opacity.value=q.opacity,D.rotation.value=q.rotation,q.map)D.map.value=q.map,Z(q.map,D.mapTransform);if(q.alphaMap)D.alphaMap.value=q.alphaMap,Z(q.alphaMap,D.alphaMapTransform);if(q.alphaTest>0)D.alphaTest.value=q.alphaTest}function N(D,q){D.specular.value.copy(q.specular),D.shininess.value=Math.max(q.shininess,0.0001)}function E(D,q){if(q.gradientMap)D.gradientMap.value=q.gradientMap}function G(D,q){if(D.metalness.value=q.metalness,q.metalnessMap)D.metalnessMap.value=q.metalnessMap,Z(q.metalnessMap,D.metalnessMapTransform);if(D.roughness.value=q.roughness,q.roughnessMap)D.roughnessMap.value=q.roughnessMap,Z(q.roughnessMap,D.roughnessMapTransform);if(q.envMap)D.envMapIntensity.value=q.envMapIntensity}function F(D,q,I){if(D.ior.value=q.ior,q.diffuseRoughness>0){if(D.diffuseRoughness.value=q.diffuseRoughness,q.diffuseRoughnessMap)D.diffuseRoughnessMap.value=q.diffuseRoughnessMap,Z(q.diffuseRoughnessMap,D.diffuseRoughnessMapTransform)}if(q.sheen>0){if(D.sheenColor.value.copy(q.sheenColor).multiplyScalar(q.sheen),D.sheenRoughness.value=q.sheenRoughness,q.sheenColorMap)D.sheenColorMap.value=q.sheenColorMap,Z(q.sheenColorMap,D.sheenColorMapTransform);if(q.sheenRoughnessMap)D.sheenRoughnessMap.value=q.sheenRoughnessMap,Z(q.sheenRoughnessMap,D.sheenRoughnessMapTransform)}if(q.clearcoat>0){if(D.clearcoat.value=q.clearcoat,D.clearcoatRoughness.value=q.clearcoatRoughness,q.clearcoatMap)D.clearcoatMap.value=q.clearcoatMap,Z(q.clearcoatMap,D.clearcoatMapTransform);if(q.clearcoatRoughnessMap)D.clearcoatRoughnessMap.value=q.clearcoatRoughnessMap,Z(q.clearcoatRoughnessMap,D.clearcoatRoughnessMapTransform);if(q.clearcoatNormalMap){if(D.clearcoatNormalMap.value=q.clearcoatNormalMap,Z(q.clearcoatNormalMap,D.clearcoatNormalMapTransform),D.clearcoatNormalScale.value.copy(q.clearcoatNormalScale),q.side===f9)D.clearcoatNormalScale.value.negate()}}if(q.dispersion>0)D.dispersion.value=q.dispersion;if(q.retroreflectivity>0)D.retroreflectivity.value=q.retroreflectivity;if(q.iridescence>0){if(D.iridescence.value=q.iridescence,D.iridescenceIOR.value=q.iridescenceIOR,D.iridescenceThicknessMinimum.value=q.iridescenceThicknessMinimum,D.iridescenceThicknessMaximum.value=q.iridescenceThicknessMaximum,q.iridescenceMap)D.iridescenceMap.value=q.iridescenceMap,Z(q.iridescenceMap,D.iridescenceMapTransform);if(q.iridescenceThicknessMap)D.iridescenceThicknessMap.value=q.iridescenceThicknessMap,Z(q.iridescenceThicknessMap,D.iridescenceThicknessMapTransform)}if(q.transmission>0){if(D.transmission.value=q.transmission,D.transmissionSamplerMap.value=I.texture,D.transmissionSamplerSize.value.set(I.width,I.height),q.transmissionMap)D.transmissionMap.value=q.transmissionMap,Z(q.transmissionMap,D.transmissionMapTransform);if(D.thickness.value=q.thickness,q.thicknessMap)D.thicknessMap.value=q.thicknessMap,Z(q.thicknessMap,D.thicknessMapTransform);D.attenuationDistance.value=q.attenuationDistance,D.attenuationColor.value.copy(q.attenuationColor)}if(q.anisotropy>0){if(D.anisotropyVector.value.set(q.anisotropy*Math.cos(q.anisotropyRotation),q.anisotropy*Math.sin(q.anisotropyRotation)),q.anisotropyMap)D.anisotropyMap.value=q.anisotropyMap,Z(q.anisotropyMap,D.anisotropyMapTransform)}if(D.specularIntensity.value=q.specularIntensity,D.specularColor.value.copy(q.specularColor),q.specularColorMap)D.specularColorMap.value=q.specularColorMap,Z(q.specularColorMap,D.specularColorMapTransform);if(q.specularIntensityMap)D.specularIntensityMap.value=q.specularIntensityMap,Z(q.specularIntensityMap,D.specularIntensityMapTransform)}function R(D,q){if(q.matcap)D.matcap.value=q.matcap}function B(D,q){let I=Q.get(q).light;D.referencePosition.value.setFromMatrixPosition(I.matrixWorld),D.nearDistance.value=I.shadow.camera.near,D.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:K,refreshMaterialUniforms:W}}function lE(J,Q,Z,K){let W={},H={};function $(I,z){let V=z.program;K.uniformBlockBinding(I,V,W[I.id])}function Y(I,z){let V=W[I.id];if(V===void 0)R(I),V=U(I),W[I.id]=V,I.addEventListener("dispose",D);let _=z.program;K.updateUBOMapping(I,_);let C=Q.render.frame;if(H[I.id]!==C)X(I),H[I.id]=C}function U(I){let z=J.createBuffer(),V=I.__size,_=I.usage;return J.bindBuffer(J.UNIFORM_BUFFER,z),J.bufferData(J.UNIFORM_BUFFER,V,_),J.bindBuffer(J.UNIFORM_BUFFER,null),z}function X(I){let z=W[I.id],V=I.uniforms,_=I.__cache;J.bindBuffer(J.UNIFORM_BUFFER,z);for(let C=0,O=V.length;C<O;C++){let k=V[C];if(Array.isArray(k))for(let w=0,g=k.length;w<g;w++)N(k[w],C,w,_);else N(k,C,0,_)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function N(I,z,V,_){if(G(I,z,V,_)===!0){let{__offset:C,value:O}=I;if(Array.isArray(O)){let k=0;for(let w=0;w<O.length;w++){let g=O[w],j=B(g,!0);E(g,I.__data,k),k+=j.storage/Float32Array.BYTES_PER_ELEMENT}}else E(O,I.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,C,I.__data)}}function E(I,z,V){if(typeof I==="number"||typeof I==="boolean")z[V]=I;else if(I.isMatrix3)z[V]=I.elements[0],z[V+1]=I.elements[1],z[V+2]=I.elements[2],z[V+3]=0,z[V+4]=I.elements[3],z[V+5]=I.elements[4],z[V+6]=I.elements[5],z[V+7]=0,z[V+8]=I.elements[6],z[V+9]=I.elements[7],z[V+10]=I.elements[8],z[V+11]=0;else if(ArrayBuffer.isView(I))z.set(I.subarray(0,z.length-V),V);else I.toArray(z,V)}function G(I,z,V,_){let C=I.value,O=z+"_"+V;if(Array.isArray(C)){if(_[O]===void 0)_[O]=[];let k=_[O],w=!1;for(let g=0;g<C.length;g++)if(F(C[g],k,g)===!0)w=!0;return w}return F(C,_,O)}function F(I,z,V){if(z[V]===void 0){if(typeof I==="number"||typeof I==="boolean")z[V]=I;else if(ArrayBuffer.isView(I))z[V]=I.slice();else z[V]=I.clone();return!0}else{let _=z[V];if(typeof I==="number"||typeof I==="boolean"){if(_!==I)return z[V]=I,!0}else if(ArrayBuffer.isView(I))return!0;else if(_.equals(I)===!1)return _.copy(I),!0}return!1}function R(I){let z=I.uniforms,V=0,_=16;for(let O=0,k=z.length;O<k;O++){let w=Array.isArray(z[O])?z[O]:[z[O]];for(let g=0,j=w.length;g<j;g++){let p=w[g],o=Array.isArray(p.value)?p.value:[p.value],A=Array.isArray(z[O])||Array.isArray(p.value),u=V;for(let x=0,Y0=o.length;x<Y0;x++){let c=o[x],e=B(c,A),W0=V%_,C0=W0%e.boundary,a=W0+C0;if(V+=C0,a!==0&&_-a<e.storage)V+=_-a;if(x===0)u=V;V+=e.storage}let r=p.type==="int"?Int32Array:p.type==="uint"?Uint32Array:Float32Array;p.__data=new r((V-u)/Float32Array.BYTES_PER_ELEMENT),p.__offset=u}}let C=V%_;if(C>0)V+=_-C;return I.__size=V,I.__cache={},this}function B(I,z){let V={boundary:0,storage:0};if(typeof I==="number"||typeof I==="boolean")V.boundary=4,V.storage=4;else if(I.isVector2)V.boundary=8,V.storage=8;else if(I.isVector3||I.isColor)V.boundary=16,V.storage=12;else if(I.isVector4)V.boundary=16,V.storage=16;else if(I.isMatrix3)V.boundary=16,V.storage=48;else if(I.isMatrix4)V.boundary=16,V.storage=64;else if(I.isTexture)v0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(I))V.boundary=16,V.storage=I.byteLength;else v0("WebGLRenderer: Unsupported uniform value type.",I);if(z===!0)V.boundary=16,V.storage=Math.ceil(V.storage/16)*16;return V}function D(I){let z=I.target;z.removeEventListener("dispose",D),J.deleteBuffer(W[z.id]),delete W[z.id],delete H[z.id]}function q(){for(let I in W)J.deleteBuffer(W[I]);W={},H={}}return{bind:$,update:Y,dispose:q}}var dE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),CJ=null;function uE(){if(CJ===null)CJ=new HQ(dE,16,16,V8,zJ),CJ.name="DFG_LUT",CJ.minFilter=$J,CJ.magFilter=$J,CJ.wrapS=s6,CJ.wrapT=s6,CJ.generateMipmaps=!1,CJ.needsUpdate=!0;return CJ}class K6{constructor(J={}){let{canvas:Q=H$(),context:Z=null,depth:K=!0,stencil:W=!1,alpha:H=!1,antialias:$=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:U=!1,powerPreference:X="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:E=!1,outputBufferType:G=RJ}=J;this.isWebGLRenderer=!0;let F;if(Z!==null){if(typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");F=Z.getContextAttributes().alpha}else F=H;let R=G,B=new Set([wZ,AZ,CZ]),D=new Set([RJ,Q8,x7,L8,PZ,_Z]),q=new Uint32Array(4),I=new Int32Array(4),z={textures:[],min:[],max:[],resolution:[]},V=null,_=null,C=[],O=[],k=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=IJ,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,g=!1,j=null,p=null,o=null,A=null;this._outputColorSpace=YJ;let u=0,r=0,x=null,Y0=-1,c=null,e=new M9,W0=new M9,C0=null,a=new X0(0),K0=0,z0=Q.width,j0=Q.height,y0=1,P0=null,Z9=null,n0=new M9(0,0,z0,j0),p0=new M9(0,0,z0,j0),q9=!1,r0=new D8,V9=new YQ,B9=!1,o9=!1,t9=new J9,I9=new S,g9=new M9,a9={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},r9=!1;function NJ(){return x===null?y0:1}let y=Z;function EJ(L,v){return Q.getContext(L,v)}let H9,T9,O0,X9,f0,x0,p9,P,M,f,J0,t,$0,N0,l,s,U0,T,n,d,Z0,H0,q0;try{let L={alpha:!0,depth:K,stencil:W,antialias:$,premultipliedAlpha:Y,preserveDrawingBuffer:U,powerPreference:X,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${XH}`);if(Q.addEventListener("webglcontextlost",M0,!1),Q.addEventListener("webglcontextrestored",S0,!1),Q.addEventListener("webglcontextcreationerror",m0,!1),y===null){if(y=EJ("webgl2",L),y===null)if(EJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}T0()}catch(L){throw Q.removeEventListener("webglcontextlost",M0,!1),Q.removeEventListener("webglcontextrestored",S0,!1),Q.removeEventListener("webglcontextcreationerror",m0,!1),b0("WebGLRenderer: "+L.message),L}function T0(){if(H9=new QN(y),H9.init(),Z0=new hE(y,H9),T9=new uG(y,H9,J,Z0),O0=new fE(y,H9),T9.reversedDepthBuffer&&E)O0.buffers.depth.setReversed(!0);p=y.createFramebuffer(),o=y.createFramebuffer(),A=y.createFramebuffer(),X9=new WN(y),f0=new kE,x0=new bE(y,H9,O0,f0,T9,Z0,X9),p9=new JN(w),P=new $X(y),H0=new lG(y,P),M=new ZN(y,P,X9,H0),f=new $N(y,M,P,H0,X9),T=new HN(y,T9,x0),l=new cG(f0),J0=new VE(w,p9,H9,T9,H0,l),t=new mE(w,f0),$0=new IE,N0=new wE(H9),U0=new mG(w,p9,O0,f,F,Y),s=new yE(w,f,T9),q0=new lE(y,X9,T9,O0),n=new dG(y,H9,X9),d=new KN(y,H9,X9),X9.programs=J0.programs,w.capabilities=T9,w.extensions=H9,w.properties=f0,w.renderLists=$0,w.shadowMap=s,w.state=O0,w.info=X9}if(R!==RJ)k=new UN(R,Q.width,Q.height,$,K,W);let w0=new $Y(w,y);this.xr=w0,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){let L=H9.get("WEBGL_lose_context");if(L)L.loseContext()},this.forceContextRestore=function(){let L=H9.get("WEBGL_lose_context");if(L)L.restoreContext()},this.getPixelRatio=function(){return y0},this.setPixelRatio=function(L){if(L===void 0)return;y0=L,this.setSize(z0,j0,!1)},this.getSize=function(L){return L.set(z0,j0)},this.setSize=function(L,v,m=!0){if(w0.isPresenting){v0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(z0=L,j0=v,Q.width=Math.floor(L*y0),Q.height=Math.floor(v*y0),m===!0)Q.style.width=L+"px",Q.style.height=v+"px";if(k!==null)k.setSize(Q.width,Q.height);this.setViewport(0,0,L,v)},this.getDrawingBufferSize=function(L){return L.set(z0*y0,j0*y0).floor()},this.setDrawingBufferSize=function(L,v,m){z0=L,j0=v,y0=m,Q.width=Math.floor(L*m),Q.height=Math.floor(v*m),this.setViewport(0,0,L,v)},this.setEffects=function(L){if(R===RJ){b0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let v=0;v<L.length;v++)if(L[v].isOutputPass===!0){v0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(e)},this.getViewport=function(L){return L.copy(n0)},this.setViewport=function(L,v,m,b){if(L.isVector4)n0.set(L.x,L.y,L.z,L.w);else n0.set(L,v,m,b);O0.viewport(e.copy(n0).multiplyScalar(NJ()).round())},this.getScissor=function(L){return L.copy(p0)},this.setScissor=function(L,v,m,b){if(L.isVector4)p0.set(L.x,L.y,L.z,L.w);else p0.set(L,v,m,b);O0.scissor(W0.copy(p0).multiplyScalar(NJ()).round())},this.getScissorTest=function(){return q9},this.setScissorTest=function(L){O0.setScissorTest(q9=L)},this.setOpaqueSort=function(L){P0=L},this.setTransparentSort=function(L){Z9=L},this.getClearColor=function(L){return L.copy(U0.getClearColor())},this.setClearColor=function(){U0.setClearColor(...arguments)},this.getClearAlpha=function(){return U0.getClearAlpha()},this.setClearAlpha=function(){U0.setClearAlpha(...arguments)},this.clear=function(L=!0,v=!0,m=!0){let b=0;if(L){let h=!1;if(x!==null){let E0=x.texture.format;h=B.has(E0)}if(h){let E0=x.texture.type,k0=D.has(E0),G0=U0.getClearColor(),V0=U0.getClearAlpha(),A0=G0.r,g0=G0.g,i0=G0.b;if(k0)q[0]=A0,q[1]=g0,q[2]=i0,q[3]=V0,y.clearBufferuiv(y.COLOR,0,q);else I[0]=A0,I[1]=g0,I[2]=i0,I[3]=V0,y.clearBufferiv(y.COLOR,0,I)}else b|=y.COLOR_BUFFER_BIT}if(v)b|=y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(m)b|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(b!==0)y.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),j=L},this.dispose=function(){Q.removeEventListener("webglcontextlost",M0,!1),Q.removeEventListener("webglcontextrestored",S0,!1),Q.removeEventListener("webglcontextcreationerror",m0,!1),U0.dispose(),$0.dispose(),N0.dispose(),x0.dispose(),f0.dispose(),p9.dispose(),f.dispose(),M.dispose(),H0.dispose(),q0.dispose(),J0.dispose(),w0.dispose(),w0.removeEventListener("sessionstart",EW),w0.removeEventListener("sessionend",qW),U8.stop()};function M0(L){L.preventDefault(),w7("WebGLRenderer: Context Lost."),g=!0}function S0(){w7("WebGLRenderer: Context Restored."),g=!1;let L=X9.autoReset,v=s.enabled,m=s.autoUpdate,b=s.needsUpdate,h=s.type;T0(),X9.autoReset=L,s.enabled=v,s.autoUpdate=m,s.needsUpdate=b,s.type=h}function m0(L){b0("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function L0(L){let v=L.target;v.removeEventListener("dispose",L0),$9(v)}function $9(L){S9(L),f0.remove(L)}function S9(L){let v=f0.get(L).programs;if(v!==void 0){if(v.forEach(function(m){J0.releaseProgram(m)}),L.isShaderMaterial)J0.releaseShaderCache(L)}}this.renderBufferDirect=function(L,v,m,b,h,E0){if(v===null)v=a9;let k0=h.isMesh&&h.matrixWorld.determinantAffine()<0,G0=bY(L,v,m,b,h);O0.setMaterial(b,k0);let V0=m.index,A0=1;if(b.wireframe===!0){if(V0=M.getWireframeAttribute(m),V0===void 0)return;A0=2}let g0=m.drawRange,i0=m.attributes.position,B0=g0.start*A0,o0=(g0.start+g0.count)*A0;if(E0!==null)B0=Math.max(B0,E0.start*A0),o0=Math.min(o0,(E0.start+E0.count)*A0);if(V0!==null)B0=Math.max(B0,0),o0=Math.min(o0,V0.count);else if(i0!==void 0&&i0!==null)B0=Math.max(B0,0),o0=Math.min(o0,i0.count);let z9=o0-B0;if(z9<0||z9===1/0)return;H0.setup(h,b,G0,m,V0);let G9,Y9=n;if(V0!==null)G9=P.get(V0),Y9=d,Y9.setIndex(G9);if(h.isMesh)if(b.wireframe===!0)O0.setLineWidth(b.wireframeLinewidth*NJ()),Y9.setMode(y.LINES);else Y9.setMode(y.TRIANGLES);else if(h.isLine){let m9=b.linewidth;if(m9===void 0)m9=1;if(O0.setLineWidth(m9*NJ()),h.isLineSegments)Y9.setMode(y.LINES);else if(h.isLineLoop)Y9.setMode(y.LINE_LOOP);else Y9.setMode(y.LINE_STRIP)}else if(h.isPoints)Y9.setMode(y.POINTS);else if(h.isSprite)Y9.setMode(y.TRIANGLES);if(h.isBatchedMesh)if(!H9.get("WEBGL_multi_draw")){let{_multiDrawStarts:m9,_multiDrawCounts:I0,_multiDrawCount:s9}=h,Q9=V0?P.get(V0).bytesPerElement:1,X8=f0.get(b).currentProgram.getUniforms();for(let l9=0;l9<s9;l9++)X8.setValue(y,"_gl_DrawID",l9),Y9.render(m9[l9]/Q9,I0[l9])}else Y9.renderMultiDraw(h._multiDrawStarts,h._multiDrawCounts,h._multiDrawCount);else if(h.isInstancedMesh)Y9.renderInstances(B0,z9,h.count);else if(m.isInstancedBufferGeometry){let m9=m._maxInstanceCount!==void 0?m._maxInstanceCount:1/0,I0=Math.min(m.instanceCount,m9);Y9.renderInstances(B0,z9,I0)}else Y9.render(B0,z9)};function TJ(L,v,m,b){if(j!==null&&L.isNodeMaterial)j.setObject(b,L);if(B9===!0)l.setState(L,m,!1);if(L.transparent===!0&&L.side===F9&&L.forceSinglePass===!1)L.side=f9,L.needsUpdate=!0,q7(L,v,b),L.side=Q7,L.needsUpdate=!0,q7(L,v,b),L.side=F9;else q7(L,v,b)}this.compile=function(L,v,m=null){if(m===null)m=L;if(j!==null)j.renderStart(L,v,m);if(_=N0.get(m),_.init(v),O.push(_),m.traverseVisible(function(h){if(h.isLight&&h.layers.test(v.layers)){if(_.pushLight(h),h.castShadow)_.pushShadow(h)}}),L!==m)L.traverseVisible(function(h){if(h.isLight&&h.layers.test(v.layers)){if(_.pushLight(h),h.castShadow)_.pushShadow(h)}});if(_.setupLights(),j!==null)j.updateLights(_.state.lightsArray);if(o9=this.localClippingEnabled,B9=l.init(this.clippingPlanes,o9),B9===!0)l.setGlobalState(this.clippingPlanes,v);if(j!==null)s.render(_.state.shadowsArray,m,v);let b=new Set;if(L.traverse(function(h){if(!(h.isMesh||h.isPoints||h.isLine||h.isSprite))return;let E0=h.material;if(E0)if(Array.isArray(E0))for(let k0=0;k0<E0.length;k0++){let G0=E0[k0];TJ(G0,m,v,h),b.add(G0)}else TJ(E0,m,v,h),b.add(E0)}),_=O.pop(),j!==null)j.renderEnd();return b},this.compileAsync=function(L,v,m=null){let b=this.compile(L,v,m);return new Promise((h)=>{function E0(){if(b.forEach(function(k0){let V0=f0.get(k0).currentProgram;if(V0===void 0||V0.isReady())b.delete(k0)}),b.size===0){h(L);return}setTimeout(E0,10)}if(H9.get("KHR_parallel_shader_compile")!==null)E0();else setTimeout(E0,10)})};let xQ=null;function yY(L){if(xQ)xQ(L)}function EW(){U8.stop()}function qW(){U8.start()}let U8=new u$;if(U8.setAnimationLoop(yY),typeof self<"u")U8.setContext(self);this.setAnimationLoop=function(L){xQ=L,w0.setAnimationLoop(L),L===null?U8.stop():U8.start()},w0.addEventListener("sessionstart",EW),w0.addEventListener("sessionend",qW),this.render=function(L,v){if(v!==void 0&&v.isCamera!==!0){b0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;if(j!==null)j.renderStart(L,v);let m=w0.enabled===!0&&w0.isPresenting===!0,b=k!==null&&(x===null||m)&&k.begin(w,x);if(L.matrixWorldAutoUpdate===!0)L.updateMatrixWorld();if(v.parent===null&&v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(w0.enabled===!0&&w0.isPresenting===!0&&(k===null||k.isCompositing()===!1)){if(w0.cameraAutoUpdate===!0)w0.updateCamera(v);v=w0.getCamera()}if(L.isScene===!0)L.onBeforeRender(w,L,v,x);if(_=N0.get(L,O.length),_.init(v),_.state.textureUnits=x0.getTextureUnits(),O.push(_),t9.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),v.isArrayCamera)V9.setFromArrayCamera(v);else r0.setFromProjectionMatrix(t9,qK,v.reversedDepth);if(o9=this.localClippingEnabled,B9=l.init(this.clippingPlanes,o9),V=$0.get(L,C.length),V.init(),C.push(V),this.info.render.frame++,w0.enabled===!0&&w0.isPresenting===!0){let k0=w.xr.getDepthSensingMesh();if(k0!==null)gQ(k0,v,-1/0,w.sortObjects)}if(gQ(L,v,0,w.sortObjects),V.finish(),j!==null)j.updateLights(_.state.lightsArray);if(w.sortObjects===!0)V.sort(P0,Z9);if(r9=w0.enabled===!1||w0.isPresenting===!1||w0.hasDepthSensing()===!1,r9)U0.addToRenderList(V,L);if(this.info.autoReset===!0)this.info.reset();if(B9===!0)l.beginShadows();let h=_.state.shadowsArray;if(s.render(h,L,v),B9===!0)l.endShadows();if((b&&k.hasRenderPass())===!1){let{opaque:k0,transmissive:G0}=V;if(_.setupLights(),v.isArrayCamera){let V0=v.cameras;if(G0.length>0)for(let A0=0,g0=V0.length;A0<g0;A0++){let i0=V0[A0];DW(k0,G0,L,i0)}if(r9)U0.render(L);for(let A0=0,g0=V0.length;A0<g0;A0++){let i0=V0[A0];FW(V,L,i0,i0.viewport)}}else{if(G0.length>0)DW(k0,G0,L,v);if(r9)U0.render(L);FW(V,L,v)}}if(x!==null&&r===0)x0.updateMultisampleRenderTarget(x),x0.updateRenderTargetMipmap(x);if(b)k.end(w);if(L.isScene===!0)L.onAfterRender(w,L,v);if(H0.resetDefaultState(),Y0=-1,c=null,O.pop(),O.length>0){if(_=O[O.length-1],x0.setTextureUnits(_.state.textureUnits),B9===!0)l.setGlobalState(w.clippingPlanes,_.state.camera)}else _=null;if(C.pop(),C.length>0)V=C[C.length-1];else V=null;if(j!==null)j.renderEnd()};function gQ(L,v,m,b){if(L.visible===!1)return;if(L.layers.test(v.layers)){if(L.isGroup)m=L.renderOrder;else if(L.isLOD){if(L.autoUpdate===!0)L.update(v)}else if(L.isLight){if(_.pushLight(L),L.castShadow)_.pushShadow(L)}else if(L.isSprite){let k0=v.isArrayCamera?V9:r0;if(!L.frustumCulled||L.intersectsFrustum(k0)){if(b)g9.setFromMatrixPosition(L.matrixWorld).applyMatrix4(t9);let G0=f.update(L),V0=L.material;if(V0.visible)V.push(L,G0,V0,m,g9.z,null,v)}}else if(L.isMesh||L.isLine||L.isPoints){let k0=v.isArrayCamera?V9:r0;if(!L.frustumCulled||L.intersectsFrustum(k0)){let G0=f.update(L),V0=L.material;if(b){if(L.boundingSphere!==void 0){if(L.boundingSphere===null)L.computeBoundingSphere();g9.copy(L.boundingSphere.center)}else{if(G0.boundingSphere===null)G0.computeBoundingSphere();g9.copy(G0.boundingSphere.center)}g9.applyMatrix4(L.matrixWorld).applyMatrix4(t9)}if(Array.isArray(V0)){let A0=G0.groups;for(let g0=0,i0=A0.length;g0<i0;g0++){let B0=A0[g0],o0=V0[B0.materialIndex];if(o0&&o0.visible)V.push(L,G0,o0,m,g9.z,B0,v)}}else if(V0.visible)V.push(L,G0,V0,m,g9.z,null,v)}}}let E0=L.children;for(let k0=0,G0=E0.length;k0<G0;k0++)gQ(E0[k0],v,m,b)}function FW(L,v,m,b){let{opaque:h,transmissive:E0,transparent:k0}=L;if(_.setupLightsView(m),B9===!0)l.setGlobalState(w.clippingPlanes,m);if(b)O0.viewport(e.copy(b));if(h.length>0)E6(h,v,m);if(E0.length>0)E6(E0,v,m);if(k0.length>0)E6(k0,v,m);O0.buffers.depth.setTest(!0),O0.buffers.depth.setMask(!0),O0.buffers.color.setMask(!0),O0.setPolygonOffset(!1)}function DW(L,v,m,b){if((m.isScene===!0?m.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[b.id]===void 0){let B0=H9.has("EXT_color_buffer_half_float")||H9.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[b.id]=new UJ(1,1,{generateMipmaps:!0,type:B0?zJ:RJ,minFilter:J8,samples:Math.max(4,T9.samples),stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:a0.workingColorSpace})}let E0=_.state.transmissionRenderTarget[b.id],k0=b.viewport||e;E0.setSize(k0.z*w.transmissionResolutionScale,k0.w*w.transmissionResolutionScale);let G0=w.getRenderTarget(),V0=w.getActiveCubeFace(),A0=w.getActiveMipmapLevel();if(w.setRenderTarget(E0),w.getClearColor(a),K0=w.getClearAlpha(),K0<1)w.setClearColor(16777215,0.5);if(w.clear(),r9)U0.render(m);let g0=w.toneMapping;w.toneMapping=IJ;let i0=b.viewport;if(b.viewport!==void 0)b.viewport=void 0;if(_.setupLightsView(b),B9===!0)l.setGlobalState(w.clippingPlanes,b);if(E6(L,m,b),x0.updateMultisampleRenderTarget(E0),x0.updateRenderTargetMipmap(E0),H9.has("WEBGL_multisampled_render_to_texture")===!1){let B0=!1;for(let o0=0,z9=v.length;o0<z9;o0++){let G9=v[o0],{object:Y9,geometry:m9,material:I0,group:s9}=G9;if(I0.side===F9&&Y9.layers.test(b.layers)){let Q9=I0.side;I0.side=f9,I0.needsUpdate=!0,OW(Y9,m,b,m9,I0,s9),I0.side=Q9,I0.needsUpdate=!0,B0=!0}}if(B0===!0)x0.updateMultisampleRenderTarget(E0),x0.updateRenderTargetMipmap(E0)}if(w.setRenderTarget(G0,V0,A0),w.setClearColor(a,K0),i0!==void 0)b.viewport=i0;w.toneMapping=g0}function E6(L,v,m){let b=v.isScene===!0?v.overrideMaterial:null;for(let h=0,E0=L.length;h<E0;h++){let k0=L[h],{object:G0,geometry:V0,group:A0}=k0,g0=k0.material;if(g0.allowOverride===!0&&b!==null)g0=b;if(G0.layers.test(m.layers))OW(G0,v,m,V0,g0,A0)}}function OW(L,v,m,b,h,E0){if(j!==null&&h.isNodeMaterial)j.setObject(L,h);if(L.onBeforeRender(w,v,m,b,h,E0),L.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),h.onBeforeRender(w,v,m,b,L,E0),h.transparent===!0&&h.side===F9&&h.forceSinglePass===!1)h.side=f9,h.needsUpdate=!0,w.renderBufferDirect(m,v,b,h,L,E0),h.side=Q7,h.needsUpdate=!0,w.renderBufferDirect(m,v,b,h,L,E0),h.side=F9;else w.renderBufferDirect(m,v,b,h,L,E0);L.onAfterRender(w,v,m,b,h,E0)}function RW(L){let v=0;for(let m of L)if(m.texture!==null)v++;return v}function q7(L,v,m){if(v.isScene!==!0)v=a9;let b=f0.get(L),h=_.state.lights,E0=_.state.shadowsArray,k0=h.state.version,G0=J0.getParameters(L,h.state,E0,v,m,_.state.lightProbeGridArray),V0=J0.getProgramCacheKey(G0),A0=b.programs;b.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?v.environment:null,b.fog=v.fog;let g0=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;if(b.envMap=p9.get(L.envMap||b.environment,g0),b.envMapRotation=b.environment!==null&&L.envMap===null?v.environmentRotation:L.envMapRotation,A0===void 0)L.addEventListener("dispose",L0),A0=new Map,b.programs=A0,b.programVariants=new Map;let i0=A0.get(V0);if(i0!==void 0){if(b.currentProgram===i0&&b.lightsStateVersion===k0)return LW(L,G0),i0}else{if(G0.uniforms=J0.getUniforms(L),j!==null&&L.isNodeMaterial)j.build(L,m,G0);L.onBeforeCompile(G0,w),i0=J0.acquireProgram(G0,V0),A0.set(V0,i0),b.uniforms=G0.uniforms}let B0=b.uniforms;if(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)B0.clippingPlanes=l.uniform;if(LW(L,G0),b.needsLights=xY(L),b.lightsStateVersion=k0,b.needsLights)B0.ambientLightColor.value=h.state.ambient,B0.lightProbe.value=h.state.probe,B0.sunLights.value=h.state.sun,B0.sunLightShadows.value=h.state.sunShadow,B0.directionalLights.value=h.state.directional,B0.directionalLightShadows.value=h.state.directionalShadow,B0.spotLights.value=h.state.spot,B0.spotLightShadows.value=h.state.spotShadow,B0.rectAreaLights.value=h.state.rectArea,B0.ltc_1.value=h.state.rectAreaLTC1,B0.ltc_2.value=h.state.rectAreaLTC2,B0.pointLights.value=h.state.point,B0.pointLightShadows.value=h.state.pointShadow,B0.hemisphereLights.value=h.state.hemi,B0.sunShadowMatrix.value=h.state.sunShadowMatrix,B0.sunShadowCascade.value=h.state.sunShadowCascade,B0.directionalShadowMatrix.value=h.state.directionalShadowMatrix,B0.spotLightMatrix.value=h.state.spotLightMatrix,B0.spotLightMap.value=h.state.spotLightMap,B0.pointShadowMatrix.value=h.state.pointShadowMatrix;return b.numLightProbeGrids=RW(_.state.lightProbeGridArray),b.currentProgram=i0,b.uniformsList=null,i0}function fY(L,v,m,b,h){let E0=f0.get(L),k0=E0.currentProgram.id+","+b+","+h,G0=E0.programVariants.get(k0);if(G0===void 0)G0=q7(L,v,m),E0.programVariants.set(k0,G0);else E0.currentProgram=G0,E0.uniformsList=null,E0.outputColorSpace=b,E0.toneMapping=h;return G0}function MW(L){if(L.uniformsList===null){let v=L.currentProgram.getUniforms();L.uniformsList=Q6.seqWithValue(v.seq,L.uniforms)}return L.uniformsList}function LW(L,v){let m=f0.get(L);m.outputColorSpace=v.outputColorSpace,m.batching=v.batching,m.batchingColor=v.batchingColor,m.instancing=v.instancing,m.instancingColor=v.instancingColor,m.instancingMorph=v.instancingMorph,m.skinning=v.skinning,m.morphTargets=v.morphTargets,m.morphNormals=v.morphNormals,m.morphColors=v.morphColors,m.morphTargetsCount=v.morphTargetsCount,m.numClippingPlanes=v.numClippingPlanes,m.numIntersection=v.numClipIntersection,m.vertexAlphas=v.vertexAlphas,m.vertexTangents=v.vertexTangents,m.toneMapping=v.toneMapping}function bY(L,v,m,b,h){if(v.isScene!==!0)v=a9;x0.resetTextureUnits();let E0=v.fog,k0=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?v.environment:null,G0=x===null?w.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:a0.workingColorSpace,V0=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,A0=p9.get(b.envMap||k0,V0),g0=b.vertexColors===!0&&!!m.attributes.color&&m.attributes.color.itemSize===4,i0=!!m.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),B0=!!m.morphAttributes.position,o0=!!m.morphAttributes.normal,z9=!!m.morphAttributes.color,G9=IJ;if(b.toneMapped){if(x===null||x.isXRRenderTarget===!0)G9=w.toneMapping}let Y9=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,m9=Y9!==void 0?Y9.length:0,I0=f0.get(b),s9=_.state.lights;if(B9===!0){if(o9===!0||L!==c){let O9=L===c&&b.id===Y0;l.setState(b,L,O9)}}let Q9=!1,X8=!1;if(b.version===I0.__version){if(I0.needsLights&&I0.lightsStateVersion!==s9.state.version)Q9=!0;else if(h.isBatchedMesh&&I0.batching===!1)Q9=!0;else if(!h.isBatchedMesh&&I0.batching===!0)Q9=!0;else if(h.isBatchedMesh&&I0.batchingColor===!0&&h._colorsTexture===null)Q9=!0;else if(h.isBatchedMesh&&I0.batchingColor===!1&&h._colorsTexture!==null)Q9=!0;else if(h.isInstancedMesh&&I0.instancing===!1)Q9=!0;else if(!h.isInstancedMesh&&I0.instancing===!0)Q9=!0;else if(h.isSkinnedMesh&&I0.skinning===!1)Q9=!0;else if(!h.isSkinnedMesh&&I0.skinning===!0)Q9=!0;else if(h.isInstancedMesh&&I0.instancingColor===!0&&h.instanceColor===null)Q9=!0;else if(h.isInstancedMesh&&I0.instancingColor===!1&&h.instanceColor!==null)Q9=!0;else if(h.isInstancedMesh&&I0.instancingMorph===!0&&h.morphTexture===null)Q9=!0;else if(h.isInstancedMesh&&I0.instancingMorph===!1&&h.morphTexture!==null)Q9=!0;else if(I0.envMap!==A0)Q9=!0;else if(b.fog===!0&&I0.fog!==E0)Q9=!0;else if(I0.numClippingPlanes!==void 0&&(I0.numClippingPlanes!==l.numPlanes||I0.numIntersection!==l.numIntersection))Q9=!0;else if(I0.vertexAlphas!==g0)Q9=!0;else if(I0.vertexTangents!==i0)Q9=!0;else if(I0.morphTargets!==B0)Q9=!0;else if(I0.morphNormals!==o0)Q9=!0;else if(I0.morphColors!==z9)Q9=!0;else if(I0.morphTargetsCount!==m9)Q9=!0;else if(I0.numLightProbeGrids!==RW(_.state.lightProbeGridArray))Q9=!0;else if(I0.outputColorSpace!==G0||I0.toneMapping!==G9)X8=!0}else Q9=!0,I0.__version=b.version;let l9=I0.currentProgram;if(Q9===!0||X8===!0){if(l9=X8===!0?fY(b,v,h,G0,G9):q7(b,v,h),j&&b.isNodeMaterial)j.onUpdateProgram(b,l9,I0)}let q6=!1,sJ=!1,G8=!1,e0=l9.getUniforms(),b9=I0.uniforms;if(O0.useProgram(l9.program))q6=!0,sJ=!0,G8=!0;if(b.id!==Y0)Y0=b.id,sJ=!0;if(q6||c!==L){if(O0.buffers.depth.getReversed()&&L.reversedDepth!==!0)L._reversedDepth=!0,L.updateProjectionMatrix();e0.setValue(y,"projectionMatrix",L.projectionMatrix),e0.setValue(y,"viewMatrix",L.matrixWorldInverse);let j9=e0.map.cameraPosition;if(j9!==void 0)j9.setValue(y,I9.setFromMatrixPosition(L.matrixWorld));if(T9.logarithmicDepthBuffer)e0.setValue(y,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2));if(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)e0.setValue(y,"isOrthographic",L.isOrthographicCamera===!0);if(c!==L)c=L,sJ=!0,G8=!0}if(I0.needsLights){if(s9.state.sunShadowMap.length>0)e0.setValue(y,"sunShadowMap",s9.state.sunShadowMap,x0);if(s9.state.directionalShadowMap.length>0)e0.setValue(y,"directionalShadowMap",s9.state.directionalShadowMap,x0);if(s9.state.spotShadowMap.length>0)e0.setValue(y,"spotShadowMap",s9.state.spotShadowMap,x0);if(s9.state.pointShadowMap.length>0)e0.setValue(y,"pointShadowMap",s9.state.pointShadowMap,x0)}if(h.isSkinnedMesh){e0.setOptional(y,h,"bindMatrix"),e0.setOptional(y,h,"bindMatrixInverse");let O9=h.skeleton;if(O9){if(O9.boneTexture===null)O9.computeBoneTexture();e0.setValue(y,"boneTexture",O9.boneTexture,x0)}}if(h.isBatchedMesh){if(e0.setOptional(y,h,"batchingTexture"),e0.setValue(y,"batchingTexture",h._matricesTexture,x0),e0.setOptional(y,h,"batchingIdTexture"),e0.setValue(y,"batchingIdTexture",h._indirectTexture,x0),e0.setOptional(y,h,"batchingColorTexture"),h._colorsTexture!==null)e0.setValue(y,"batchingColorTexture",h._colorsTexture,x0)}let qJ=m.morphAttributes;if(qJ.position!==void 0||qJ.normal!==void 0||qJ.color!==void 0)T.update(h,m,l9);if(sJ||I0.receiveShadow!==h.receiveShadow)I0.receiveShadow=h.receiveShadow,e0.setValue(y,"receiveShadow",h.receiveShadow);if((b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial)&&b.envMap===null&&v.environment!==null)b9.envMapIntensity.value=v.environmentIntensity;if(b9.dfgLUT!==void 0)b9.dfgLUT.value=uE();if(sJ){if(e0.setValue(y,"toneMappingExposure",w.toneMappingExposure),I0.needsLights)hY(b9,G8);if(E0&&b.fog===!0)t.refreshFogUniforms(b9,E0);if(t.refreshMaterialUniforms(b9,b,y0,j0,_.state.transmissionRenderTarget[L.id]),I0.needsLights&&I0.numLightProbeGrids>0){let O9=z,j9=0;for(let SJ of _.state.lightProbeGridArray){if(SJ.texture===null)continue;O9.textures[j9]=SJ.texture,O9.min[j9]=SJ.boundingBox.min,O9.max[j9]=SJ.boundingBox.max,O9.resolution[j9]=SJ.resolution,j9++}for(let SJ in O9)O9[SJ].length=j9;b9.probesSH.value=O9.textures,b9.probesMin.value=O9.min,b9.probesMax.value=O9.max,b9.probesResolution.value=O9.resolution}Q6.upload(y,MW(I0),b9,x0)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0)Q6.upload(y,MW(I0),b9,x0),b.uniformsNeedUpdate=!1;if(b.isSpriteMaterial)e0.setValue(y,"center",h.center);if(e0.setValue(y,"modelViewMatrix",h.modelViewMatrix),e0.setValue(y,"normalMatrix",h.normalMatrix),e0.setValue(y,"modelMatrix",h.matrixWorld),b.uniformsGroups!==void 0){let O9=b.uniformsGroups;for(let j9=0,SJ=O9.length;j9<SJ;j9++){let kW=O9[j9];q0.update(kW,l9),q0.bind(kW,l9)}}return l9}function hY(L,v){L.ambientLightColor.needsUpdate=v,L.lightProbe.needsUpdate=v,L.sunLights.needsUpdate=v,L.sunLightShadows.needsUpdate=v,L.directionalLights.needsUpdate=v,L.directionalLightShadows.needsUpdate=v,L.pointLights.needsUpdate=v,L.pointLightShadows.needsUpdate=v,L.spotLights.needsUpdate=v,L.spotLightShadows.needsUpdate=v,L.rectAreaLights.needsUpdate=v,L.hemisphereLights.needsUpdate=v}function xY(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return u},this.getActiveMipmapLevel=function(){return r},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(L,v,m){let b=f0.get(L);if(b.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,b.__autoAllocateDepthBuffer===!1)b.__useRenderToTexture=!1;f0.get(L.texture).__webglTexture=v,f0.get(L.depthTexture).__webglTexture=b.__autoAllocateDepthBuffer?void 0:m,b.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,v){let m=f0.get(L);m.__webglFramebuffer=v,m.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(L,v=0,m=0){x=L,u=v,r=m;let b=null,h=!1,E0=!1;if(L){let G0=f0.get(L);if(G0.__useDefaultFramebuffer!==void 0){O0.bindFramebuffer(y.FRAMEBUFFER,G0.__webglFramebuffer),e.copy(L.viewport),W0.copy(L.scissor),C0=L.scissorTest,O0.viewport(e),O0.scissor(W0),O0.setScissorTest(C0),Y0=-1;return}else if(G0.__webglFramebuffer===void 0)x0.setupRenderTarget(L);else if(G0.__hasExternalTextures)x0.rebindTextures(L,f0.get(L.texture).__webglTexture,f0.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let g0=L.depthTexture;if(G0.__boundDepthTexture!==g0){if(g0!==null&&f0.has(g0)&&(L.width!==g0.image.width||L.height!==g0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");x0.setupDepthRenderbuffer(L)}}let V0=L.texture;if(V0.isData3DTexture||V0.isDataArrayTexture||V0.isCompressedArrayTexture)E0=!0;let A0=f0.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget){if(Array.isArray(A0[v]))b=A0[v][m];else b=A0[v];h=!0}else if(L.samples>0&&x0.useMultisampledRTT(L)===!1)b=f0.get(L).__webglMultisampledFramebuffer;else if(Array.isArray(A0))b=A0[m];else b=A0;e.copy(L.viewport),W0.copy(L.scissor),C0=L.scissorTest}else e.copy(n0).multiplyScalar(y0).floor(),W0.copy(p0).multiplyScalar(y0).floor(),C0=q9;if(m!==0)b=p;if(O0.bindFramebuffer(y.FRAMEBUFFER,b))O0.drawBuffers(L,b);if(O0.viewport(e),O0.scissor(W0),O0.setScissorTest(C0),h){let G0=f0.get(L.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+v,G0.__webglTexture,m)}else if(E0){let G0=v;for(let V0=0;V0<L.textures.length;V0++){let A0=f0.get(L.textures[V0]);y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0+V0,A0.__webglTexture,m,G0)}}else if(L!==null&&m!==0){let G0=f0.get(L.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,G0.__webglTexture,m)}Y0=-1};function VW(L){let v=f0.get(L);if(v.__readFormat!==L.format||v.__readType!==L.type)v.__readFormat=L.format,v.__readType=L.type,v.__formatReadable=T9.textureFormatReadable(L.format),v.__typeReadable=T9.textureTypeReadable(L.type);return v}if(this.readRenderTargetPixels=function(L,v,m,b,h,E0,k0,G0=0){if(!(L&&L.isWebGLRenderTarget)){b0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let V0=f0.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&k0!==void 0){if(V0=V0[k0],Array.isArray(V0))V0=V0[0]}if(V0){O0.bindFramebuffer(y.FRAMEBUFFER,V0);try{let A0=L.textures[G0],g0=A0.format,i0=A0.type;if(L.textures.length>1)y.readBuffer(y.COLOR_ATTACHMENT0+G0);let B0=VW(A0);if(B0.__formatReadable===!1){b0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(B0.__typeReadable===!1){b0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(v>=0&&v<=L.width-b&&(m>=0&&m<=L.height-h))y.readPixels(v,m,b,h,Z0.convert(g0),Z0.convert(i0),E0)}finally{let A0=x!==null?f0.get(x).__webglFramebuffer:null;O0.bindFramebuffer(y.FRAMEBUFFER,A0)}}},this.readRenderTargetPixelsAsync=async function(L,v,m,b,h,E0,k0,G0=0){if(!(L&&L.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let V0=f0.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&k0!==void 0){if(V0=V0[k0],Array.isArray(V0))V0=V0[0]}if(V0)if(v>=0&&v<=L.width-b&&(m>=0&&m<=L.height-h)){O0.bindFramebuffer(y.FRAMEBUFFER,V0);let A0=L.textures[G0],g0=A0.format,i0=A0.type;if(L.textures.length>1)y.readBuffer(y.COLOR_ATTACHMENT0+G0);let B0=VW(A0);if(B0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(B0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let o0=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,o0),y.bufferData(y.PIXEL_PACK_BUFFER,E0.byteLength,y.STREAM_READ),y.readPixels(v,m,b,h,Z0.convert(g0),Z0.convert(i0),0),y.bindBuffer(y.PIXEL_PACK_BUFFER,null);let z9=x!==null?f0.get(x).__webglFramebuffer:null;O0.bindFramebuffer(y.FRAMEBUFFER,z9);let G9=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await Y$(y,G9,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,o0),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,E0),y.bindBuffer(y.PIXEL_PACK_BUFFER,null),y.deleteBuffer(o0),y.deleteSync(G9),E0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,v=null,m=0){let b=Math.pow(2,-m),h=Math.floor(L.image.width*b),E0=Math.floor(L.image.height*b),k0=v!==null?v.x:0,G0=v!==null?v.y:0;x0.setTexture2D(L,0),y.copyTexSubImage2D(y.TEXTURE_2D,m,0,0,k0,G0,h,E0),O0.unbindTexture()},this.copyTextureToTexture=function(L,v,m=null,b=null,h=0,E0=0){let k0,G0,V0,A0,g0,i0,B0,o0,z9,G9=L.isCompressedTexture?L.mipmaps[E0]:L.image;if(m!==null)k0=m.max.x-m.min.x,G0=m.max.y-m.min.y,V0=m.isBox3?m.max.z-m.min.z:1,A0=m.min.x,g0=m.min.y,i0=m.isBox3?m.min.z:0;else{let e0=Math.pow(2,-h);if(k0=Math.floor(G9.width*e0),G0=Math.floor(G9.height*e0),L.isDataArrayTexture)V0=G9.depth;else if(L.isData3DTexture)V0=Math.floor(G9.depth*e0);else V0=1;A0=0,g0=0,i0=0}if(b!==null)B0=b.x,o0=b.y,z9=b.z;else B0=0,o0=0,z9=0;let Y9=Z0.convert(v.format),m9=Z0.convert(v.type),I0;if(v.isData3DTexture)x0.setTexture3D(v,0),I0=y.TEXTURE_3D;else if(v.isDataArrayTexture||v.isCompressedArrayTexture)x0.setTexture2DArray(v,0),I0=y.TEXTURE_2D_ARRAY;else x0.setTexture2D(v,0),I0=y.TEXTURE_2D;O0.activeTexture(y.TEXTURE0),O0.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,v.flipY),O0.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),O0.pixelStorei(y.UNPACK_ALIGNMENT,v.unpackAlignment);let s9=O0.getParameter(y.UNPACK_ROW_LENGTH),Q9=O0.getParameter(y.UNPACK_IMAGE_HEIGHT),X8=O0.getParameter(y.UNPACK_SKIP_PIXELS),l9=O0.getParameter(y.UNPACK_SKIP_ROWS),q6=O0.getParameter(y.UNPACK_SKIP_IMAGES);O0.pixelStorei(y.UNPACK_ROW_LENGTH,G9.width),O0.pixelStorei(y.UNPACK_IMAGE_HEIGHT,G9.height),O0.pixelStorei(y.UNPACK_SKIP_PIXELS,A0),O0.pixelStorei(y.UNPACK_SKIP_ROWS,g0),O0.pixelStorei(y.UNPACK_SKIP_IMAGES,i0);let sJ=L.isDataArrayTexture||L.isData3DTexture,G8=v.isDataArrayTexture||v.isData3DTexture;if(L.isDepthTexture){let e0=f0.get(L),b9=f0.get(v),qJ=f0.get(e0.__renderTarget),O9=f0.get(b9.__renderTarget);O0.bindFramebuffer(y.READ_FRAMEBUFFER,qJ.__webglFramebuffer),O0.bindFramebuffer(y.DRAW_FRAMEBUFFER,O9.__webglFramebuffer);for(let j9=0;j9<V0;j9++){if(sJ)y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,f0.get(L).__webglTexture,h,i0+j9),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,f0.get(v).__webglTexture,E0,z9+j9);y.blitFramebuffer(A0,g0,A0+k0,g0+G0,B0,o0,B0+k0,o0+G0,y.DEPTH_BUFFER_BIT,y.NEAREST)}O0.bindFramebuffer(y.READ_FRAMEBUFFER,null),O0.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(h!==0||L.isRenderTargetTexture||f0.has(L)){let e0=f0.get(L),b9=f0.get(v);O0.bindFramebuffer(y.READ_FRAMEBUFFER,o),O0.bindFramebuffer(y.DRAW_FRAMEBUFFER,A);for(let qJ=0;qJ<V0;qJ++){if(sJ)y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,e0.__webglTexture,h,i0+qJ);else y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,e0.__webglTexture,h);if(G8)y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,b9.__webglTexture,E0,z9+qJ);else y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,b9.__webglTexture,E0);if(h!==0)y.blitFramebuffer(A0,g0,A0+k0,g0+G0,B0,o0,B0+k0,o0+G0,y.COLOR_BUFFER_BIT,y.NEAREST);else if(G8)y.copyTexSubImage3D(I0,E0,B0,o0,z9+qJ,A0,g0,k0,G0);else y.copyTexSubImage2D(I0,E0,B0,o0,A0,g0,k0,G0)}O0.bindFramebuffer(y.READ_FRAMEBUFFER,null),O0.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(G8)if(L.isDataTexture||L.isData3DTexture)y.texSubImage3D(I0,E0,B0,o0,z9,k0,G0,V0,Y9,m9,G9.data);else if(v.isCompressedArrayTexture)y.compressedTexSubImage3D(I0,E0,B0,o0,z9,k0,G0,V0,Y9,G9.data);else y.texSubImage3D(I0,E0,B0,o0,z9,k0,G0,V0,Y9,m9,G9);else if(L.isDataTexture)y.texSubImage2D(y.TEXTURE_2D,E0,B0,o0,k0,G0,Y9,m9,G9.data);else if(L.isCompressedTexture)y.compressedTexSubImage2D(y.TEXTURE_2D,E0,B0,o0,G9.width,G9.height,Y9,G9.data);else y.texSubImage2D(y.TEXTURE_2D,E0,B0,o0,k0,G0,Y9,m9,G9);if(O0.pixelStorei(y.UNPACK_ROW_LENGTH,s9),O0.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Q9),O0.pixelStorei(y.UNPACK_SKIP_PIXELS,X8),O0.pixelStorei(y.UNPACK_SKIP_ROWS,l9),O0.pixelStorei(y.UNPACK_SKIP_IMAGES,q6),E0===0&&v.generateMipmaps===!0&&v.mipmapsAutoUpdate===!0)y.generateMipmap(I0);O0.unbindTexture()},this.initRenderTarget=function(L){if(f0.get(L).__webglFramebuffer===void 0)x0.setupRenderTarget(L)},this.initTexture=function(L){if(L.isCubeTexture)x0.setTextureCube(L,0);else if(L.isData3DTexture)x0.setTexture3D(L,0);else if(L.isDataArrayTexture||L.isCompressedArrayTexture)x0.setTexture2DArray(L,0);else x0.setTexture2D(L,0);O0.unbindTexture()},this.resetState=function(){u=0,r=0,x=null,O0.reset(),H0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qK}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=a0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=a0._getUnpackColorSpace()}}var D0=(J,Q,Z,K)=>({id:J,fa:Q,desc:Z,theme:K}),D9=[{id:"targon",fa:"تارگون",en:"TARGON",color:"#c8102e",accent:"#f5c542",lore:"سرزمین اژدهای طلایی و تاج شکوه. پادشاهان تارگون از آتش کوره‌های سپیدار سر برآوردند و پرچم سرخ آنان بر بلندترین برج‌های سرزمین‌های هفتگانه در اهتزاز است.",motto:"از خاکستر، تاج",flagCloth:"./assets/flags/targon_cloth.webp",flagNormal:"./assets/flags/targon_normal.webp",art:"./assets/flags/targon_art.webp",wind:{strength:1,speed:1.9,gust:0.55},note:50,unlocked:!0,lands:[D0("t1","سپیده‌دم","جایی که نخستین نور خورشید بر دشت‌های تارگون می‌افتد؛ نقطه آغاز هر سفر.","dawn"),D0("t2","دهکده آذرین","دهکده‌ای برپا شده بر دل آتش خاموش؛ شومینه‌ها هرگز سرد نمی‌شوند.","emberVillage"),D0("t3","میدان هم‌پیمانان","میدان پیمان خاندان‌ها؛ صدای طبل بشارت هنوز در باد می‌پیچد.","alliesField"),D0("t4","بازار کهن","کهن‌ترین بازار سرزمین‌های هفتگانه؛ عطر ادویه و صدای سکه در کوچه‌ها جاری است.","oldBazaar"),D0("t5","دشت سبز","دشت بی‌پایان سبز، زادگاه اسبان آزاد و بادهای شاد.","greenPlain"),D0("t6","جنگل زمرد","جنگلی که نور در آن سبز می‌شود؛ رازهای کهن زیر خزه خفته‌اند.","emeraldForest"),D0("t7","رود روشن","رودی زلال که داستان‌های تارگون را به دریا می‌رساند؛ پل سنگی نگهبان آن است.","brightRiver"),D0("t8","کوهستان سنگ‌نگهبان","قله‌های سنگی که چون نگهبانان خاموش بر مرزها می‌ایستند.","guardianMountains"),D0("t9","دژ نگهبان","دژ نظامی تارگون؛ شعله‌های دیده‌بانی هرگز خاموش نمی‌شوند.","guardianKeep"),D0("t10","ویرانه‌های خاموش","ویرانه‌ای از روزگار پیشین؛ زمزمه‌هایش را تنها شب می‌شنوی.","silentRuins"),D0("t11","دروازه سرخ","دروازه باشکوه سرزمین اژدها؛ گذرگاه ستون‌های آتش و افتخار.","redGate")]},{id:"dezhmaar",fa:"دژمار",en:"DEZHMAAR",color:"#1e3a6e",accent:"#7fb2ff",lore:"دژ باستانی بر لبه مه. عقاب طلایی دژمار بر پرچم سرمه‌ای‌اش، قرن‌هاست خاموش مرزهای شب را پاس می‌دارد و رازهایش را با هیچ بادی در میان نمی‌گذارد.",motto:"دیوارِ خوابِ شب",flagCloth:"./assets/flags/dezhmaar_cloth.webp",flagNormal:"./assets/flags/dezhmaar_normal.webp",art:"./assets/flags/dezhmaar_art.webp",wind:{strength:1.25,speed:2.3,gust:0.8},note:45,unlocked:!0,lands:[D0("d1","دروازه مه‌گرفته","دروازه‌ای که تنها هنگام طلوع از میان مه پدیدار می‌شود.","mistGate"),D0("d2","دهکده سنگ‌سرد","خانه‌های سنگی با شومینه‌های کم‌سو؛ مهمان‌نوازی‌اش سخت ولی وفادار است.","coldStoneVillage"),D0("d3","پل زنجیری","پلی از زنجیر و چوب بر دره ابرها؛ هر تخته‌اش داستانی دارد.","chainBridge"),D0("d4","بازار سایه","بازاری در دل سنگ؛ چیزی که در روشنی یافت نمی‌شود، اینجاست.","shadowBazaar"),D0("d5","جنگل کاج سیاه","کاج‌هایی به بلندای برج؛ زیر تاجشان شب همیشه زودتر می‌رسد.","blackPineForest"),D0("d6","مرداب فانوس‌ها","فانوس‌های شناور مسیر را نشان می‌دهند؛ اگر به آن‌ها اعتماد کنی.","lanternMarsh"),D0("d7","رود تیره","رود عمیق و آرام که نام مسافرانش را نگه می‌دارد.","darkRiver"),D0("d8","کوهستان کلاغ","لانهٔ کلاغ‌های دژمار؛ چشم‌های سیاهشان همه‌چیز را دیده‌اند.","ravenMountains"),D0("d9","برج فالگیر","برجی که ستاره‌شناسان دژمار در آن سرنوشت را می‌خوانند.","seerTower"),D0("d10","ویرانه‌های دژمار","دژ کهنِ نیمه‌فروریخته؛ سنگ‌هایش هنوز هم سپر می‌شوند.","dezhmaarRuins"),D0("d11","دروازه شب","آخرین دروازه پیش از سرزمینِ بی‌ستاره؛ عبور از آن شجاعت می‌خواهد.","nightGate")]},{id:"argad",fa:"آرگاد",en:"ARGAD",color:"#1f6e43",accent:"#8fe3a1",lore:"درخت کهن و سنگِ مادر. آرگاد سرزمین درویشانِ تنومند و نگهبانان جنگل است؛ ریشه‌های درخت زندگی‌اش به اعماق زمین و خاطره‌ها گره خورده است.",motto:"ریشه، ستونِ آسمان",flagCloth:"./assets/flags/argad_cloth.webp",flagNormal:"./assets/flags/argad_normal.webp",art:"./assets/flags/argad_art.webp",wind:{strength:0.85,speed:1.6,gust:0.45},note:55,unlocked:!1,lands:[D0("a1","درختگاه سپیدار","دروازه جنگل آرگاد؛ شاخه‌های کهن بر مسافران طاق می‌سازند.","generic"),D0("a2","دهکده ریشه","خانه‌هایی در دل تنه درختان کهن؛ نور از شاخه‌ها می‌تراود.","generic"),D0("a3","چشمه زمرد","چشمه‌ای که آبش سبز است؛ نوشیدنش خاطره را زنده می‌کند.","generic"),D0("a4","سنگ‌چین کهن","دایره سنگ‌های ایستاده؛ تقویم کهن‌سالان آرگاد.","generic"),D0("a5","دشت گل‌ریز","دشتی زیر پایش گل و بر فرازش نوقا.","generic"),D0("a6","جنگل خزه","زمین نرم خزه؛ صدای پا در آن گم می‌شود.","generic"),D0("a7","رود شفاف","رودی به شفافی بلور؛ سنگ‌های کفش دیده می‌شوند.","generic"),D0("a8","کوهستان سرسبز","قله‌های پوشیده از جنگل؛ خانه عقاب‌های آرگاد.","generic"),D0("a9","پناهگاه نگهبان","دژ چوبی نگهبانان جنگل؛ آتشش هرگز بی‌مهمان نمی‌ماند.","generic"),D0("a10","وادی خاموشی","وادی‌ای که باد در آن آواز کهن می‌خواند.","generic"),D0("a11","دروازه سبز","دروازه درخت زندگی؛ گذرگاه پیمان‌بندان آرگاد.","generic")]},{id:"mardak",fa:"مرداک",en:"MARDAK",color:"#5b2a86",accent:"#c89bff",lore:"کلاغ تاج‌دار و بنفش شب. مرداک سرزمین جنگاوران سایه است؛ در شورایش، تاج تنها به شایستگی می‌رسد و پرچم بنفشش همیشه یک لبه در بادِ جنگ دارد.",motto:"تاجِ بالِ سیاه",flagCloth:"./assets/flags/mardak_cloth.webp",flagNormal:"./assets/flags/mardak_normal.webp",art:"./assets/flags/mardak_art.webp",wind:{strength:1.35,speed:2.45,gust:0.9},note:48,unlocked:!1,lands:[D0("m1","دروازه کلاغ","دروازه‌ای با نگین بنفش؛ کلاغ‌ها بر آن نوبت می‌دهند.","generic"),D0("m2","دهکده آذرخش","دهکده‌ای بر فراز تپه؛ آذرخش دوبار به برجش خورده است.","generic"),D0("m3","میدان زره","میدان تمرین جنگاوران؛ همیشه صدای سپر و شمشیر دارد.","generic"),D0("m4","بازار غنیمت","بازار بازرگانان مرداک؛ سکه‌هایش سرخ‌تر از جای دیگرند.","generic"),D0("m5","دشت خاکستر","دشت نبرد روزگار پیشین؛ علف از خاکستر زاده شده است.","generic"),D0("m6","جنگل کبود","درختانی با برگ بنفش‌فام؛ سایه‌ها اینجا سنگین‌ترند.","generic"),D0("m7","رود سپیدار","رودی سرد و تند؛ فقط پل‌های مرداک از آن می‌گذرند.","generic"),D0("m8","کوه کلاغ‌آشیان","قلعه سنگی بر قله؛ پادگان همیشگی پرندگان سیاه.","generic"),D0("m9","دژ تاج","تختگاه خاندان مرداک؛ تاج کلاغ بر دروازه‌اش نشسته است.","generic"),D0("m10","ویرانه جنگ","یادمان نبرد بزرگ؛ نام‌ها بر سنگ حک شده‌اند.","generic"),D0("m11","دروازه بنفش","دروازه شورای جنگ؛ از آن عبور کنند، دیگر عقب‌نشینی نیست.","generic")]},{id:"vergad",fa:"ورگاد",en:"VERGAD",color:"#1b4b9e",accent:"#ffd34d",lore:"ققنوس طلایی و آبی. ورگاد سرزمین رنسانس فانتزی است؛ هنر، موسیقی و شعله تجدید تولدش، هر صد سال برج‌هایش را نو می‌کند.",motto:"هر پایان، پرِ نو",flagCloth:"./assets/flags/vergad_cloth.webp",flagNormal:"./assets/flags/vergad_normal.webp",art:"./assets/flags/vergad_art.webp",wind:{strength:0.95,speed:2,gust:0.6},note:52,unlocked:!1,lands:[D0("v1","دروازه ققنوس","دروازه‌ای با الماس آبی؛ هنگام عبور، پر زرین می‌بخشد.","generic"),D0("v2","دهکده آواز","دهکده نوازندگان؛ هر خانه‌ای یک ساز است.","generic"),D0("v3","میدان جشن","میدان فواره‌ها و ریسمان‌های نور؛ جشن هرگز تمام نمی‌شود.","generic"),D0("v4","بازار شیشه‌گران","بازار شیشه‌های رنگین؛ نور در دست فروشندگان می‌رقصد.","generic"),D0("v5","دشت شکوفه","دشتی که همیشه بهاره است.","generic"),D0("v6","جنگل طلا","درختان با برگ زرین؛ باد، سکه پخش می‌کند.","generic"),D0("v7","رود بلور","رودی به رنگ آسمان ورگاد.","generic"),D0("v8","کوهستان پرنسا","قله‌های برفی برج‌های سفید؛ اقامتگاه شورای هنر.","generic"),D0("v9","دژ فانوس","دژ دریاچه؛ شب‌ها هزار فانوس بر پله‌هایش.","generic"),D0("v10","ویرانه اول","ویرانه نخستین آتش ورگاد؛ جایی که ققنوس زاده شد.","generic"),D0("v11","دروازه آبی","دروازه آبی و طلا؛ پیمان تجدید تولد.","generic")]},{id:"zardak",fa:"زرداک",en:"ZARDAK",color:"#d4a017",accent:"#3a6fd8",lore:"خورشید طلایی و تمدن کهن. زرداک سرزمین گنبدفیروزه‌ای و دانشنامه‌های ستاره است؛ خورشیدش هرگز غروب را باور نمی‌کند.",motto:"نور، میراثِ ما",flagCloth:"./assets/flags/zardak_cloth.webp",flagNormal:"./assets/flags/zardak_normal.webp",art:"./assets/flags/zardak_art.webp",wind:{strength:0.9,speed:1.75,gust:0.5},note:53,unlocked:!1,lands:[D0("z1","دروازه خورشید","دروازه‌ای با هاله طلایی؛ سنگ‌هایش گرم است.","generic"),D0("z2","دهکده کاهگل","خانه‌های گنبددار؛ خنکای خشت در گرمای روز.","generic"),D0("z3","میدان آفتاب","میدان ساعت آفتابی عظیم؛ ساعت شهر زرداک.","generic"),D0("z4","بازار ادویه","بازار زعفران و دارچین؛ رنگ‌ها به آسمان می‌ریزند.","generic"),D0("z5","دشت زرین","دشت گندم رسیده؛ باد موج می‌سازد.","generic"),D0("z6","جنگل سرو","سروهای استوار؛ نشان خاندان‌های زرداک.","generic"),D0("z7","رود فیروزه","رودی به رنگ گنبد مس؛ کاروان‌ها بر آن نوبت دارند.","generic"),D0("z8","کوهستان مفرغی","کانی‌های درخشان؛ کارگاه‌های آهنگری بر دامنه‌ها.","generic"),D0("z9","دژ خورشیدتاب","دژ گنبد طلایی؛ آرامگاه بنیان‌گذار زرداک.","generic"),D0("z10","ویرانه نجوم","رصدخانه کهن؛ خطوط سماق بر سنگش زنده‌اند.","generic"),D0("z11","دروازه زرین","دروازه تمدن کهن؛ کلیدش در نُه پرتو خورشید است.","generic")]},{id:"tarmad",fa:"تارماد",en:"TARMAD",color:"#6b21a8",accent:"#e9c46a",lore:"گوزن تاج‌دار و خاندان‌های قدرتمند. تارماد سرزمین شکارگاه‌های سرمه‌ای و پیمان‌های خونی است؛ شاخ‌های طلایی‌اش بر هر پرچم، ردّ یک پیمان است.",motto:"شاخِ پیمان",flagCloth:"./assets/flags/tarmad_cloth.webp",flagNormal:"./assets/flags/tarmad_normal.webp",art:"./assets/flags/tarmad_art.webp",wind:{strength:1.1,speed:2.1,gust:0.7},note:47,unlocked:!1,lands:[D0("r1","دروازه شاخ‌دار","دروازه‌ای با شاخ‌های طلایی متقاطع.","generic"),D0("r2","دهکده سواران","دهکده اسب‌داران تارماد؛ طبل شکار همیشه برپاست.","generic"),D0("r3","میدان پیمان","میدان سوگند خاندان‌ها؛ سنگ دایره‌ای پیمان.","generic"),D0("r4","بازار خز","بازار پوست و عاج؛ چانه‌زنی هنر تارمادی‌هاست.","generic"),D0("r5","دشت گوزن‌ها","دشت آزاد گوزن‌سانان؛ شکار در آن سوگند می‌خواهد.","generic"),D0("r6","جنگل سرمه‌ای","جنگل شب‌های تارماد؛ نوقای بنفش می‌درخشد.","generic"),D0("r7","رود شکارگاه","رود پرآب ماهی؛ جای پای گوزن بر گِلش.","generic"),D0("r8","کوهستان پیمان","قله‌ای که خاندان‌ها بر آن بیرق می‌نشانند.","generic"),D0("r9","دژ گوزن تاج‌دار","تختگاه فرمانروای تارماد؛ تالار شاخ‌ها.","generic"),D0("r10","ویرانه سوگند","جای نبرد خاندان‌ها؛ هنوز شب‌ها سکه‌ای در خاک می‌درخشد.","generic"),D0("r11","دروازه سرمه‌ای","دروازه شب‌های تارماد؛ عبور با سوگندِ گوزن.","generic")]}],OD=D9.reduce((J,Q)=>J+Q.lands.length,0),C8=(J)=>String(J).replace(/\d/g,(Q)=>"۰۱۲۳۴۵۶۷۸۹"[Number(Q)]);function UY(){if(typeof navigator>"u")return"mid";let J=navigator.hardwareConcurrency??4,Q=navigator.deviceMemory??4,Z=Math.min(window.screen.width,window.screen.height)<420,K=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);if(J>=8&&Q>=6&&!Z)return"high";if(J>=4&&Q>=3)return K?"mid":"high";return"low"}var cE={high:{tier:"high",dpr:2,clothSegments:[34,46],embers:170,worldShadowMap:1024,terrainSegments:110,treeCount:90,grassInstances:900,particles:260,anisotropy:4},mid:{tier:"mid",dpr:1.6,clothSegments:[24,32],embers:90,worldShadowMap:0,terrainSegments:80,treeCount:60,grassInstances:450,particles:150,anisotropy:2},low:{tier:"low",dpr:1.25,clothSegments:[16,22],embers:50,worldShadowMap:0,terrainSegments:56,treeCount:34,grassInstances:0,particles:80,anisotropy:1}};function rK(J){return cE[J]}var H6=(J)=>440*Math.pow(2,(J-69)/12);class XY{ctx=null;master;musicBus;sfxBus;ambBus;windGain;windFilter;noiseBuf;musicTimer=null;step=0;root=50;enabled=!1;started=!1;init(){if(this.ctx)return!0;try{let J=window.AudioContext||window.webkitAudioContext;this.ctx=new J;let Q=this.ctx;this.master=Q.createGain(),this.master.gain.value=0.9,this.master.connect(Q.destination),this.musicBus=Q.createGain(),this.musicBus.gain.value=0.55,this.musicBus.connect(this.master),this.sfxBus=Q.createGain(),this.sfxBus.gain.value=0.8,this.sfxBus.connect(this.master),this.ambBus=Q.createGain(),this.ambBus.gain.value=0.5,this.ambBus.connect(this.master);let Z=Q.sampleRate*2,K=Q.createBuffer(2,Z,Q.sampleRate);for(let W=0;W<2;W++){let H=K.getChannelData(W);for(let $=0;$<Z;$++)H[$]=Math.random()*2-1}return this.noiseBuf=K,this.enabled=!0,!0}catch{return!1}}resume(){if(this.ctx&&this.ctx.state==="suspended")this.ctx.resume()}setMuted(J){if(!this.ctx)return;this.master.gain.linearRampToValueAtTime(J?0:0.9,this.ctx.currentTime+0.3)}startWind(J=1){if(!this.ctx||!this.noiseBuf||this.windGain)return;let Q=this.ctx,Z=Q.createBufferSource();Z.buffer=this.noiseBuf,Z.loop=!0;let K=Q.createBiquadFilter();K.type="bandpass",K.frequency.value=420,K.Q.value=0.6;let W=Q.createGain();W.gain.value=0.05*J;let H=Q.createOscillator();H.frequency.value=0.11;let $=Q.createGain();$.gain.value=180,H.connect($),$.connect(K.frequency),H.start(),Z.connect(K),K.connect(W),W.connect(this.ambBus),Z.start(),this.windGain=W,this.windFilter=K}setWindIntensity(J){if(this.windGain&&this.ctx)this.windGain.gain.linearRampToValueAtTime(0.02+J*0.06,this.ctx.currentTime+0.8)}setKey(J){this.root=J}startMusic(){if(!this.ctx||this.musicTimer!==null)return;let J=0.86,Q=()=>{this.musicStep(this.step++)};Q(),this.musicTimer=window.setInterval(Q,J*1000)}stopMusic(){if(this.musicTimer!==null)window.clearInterval(this.musicTimer),this.musicTimer=null}musicStep(J){if(!this.ctx)return;let Z=this.ctx.currentTime,K=Math.floor(J/4)%4,W=[0,8,3,10],H=this.root+W[K]-12;if(J%4===0){let $=K===2?4:3,Y=[[H,0],[H+7,0],[H+12+$,0]];for(let[U,X]of Y)this.pad(H6(U),Z,3.6,0.05)}if(J%4===0||J%4===2)this.drum(Z,J%4===0?0.5:0.3);if(J%8===6)this.drum(Z,0.42,90);if(Math.random()<0.4){let $=[0,3,5,7,10,12,15],Y=H+24+$[Math.floor(Math.random()*$.length)];this.pluck(H6(Y),Z+Math.random()*0.4,0.05)}}pad(J,Q,Z,K){let W=this.ctx,H=W.createOscillator();H.type="sawtooth",H.frequency.value=J,H.detune.value=-6;let $=W.createOscillator();$.type="sawtooth",$.frequency.value=J,$.detune.value=7;let Y=W.createBiquadFilter();Y.type="lowpass",Y.frequency.value=900,Y.Q.value=0.4;let U=W.createGain();U.gain.setValueAtTime(0,Q),U.gain.linearRampToValueAtTime(K,Q+1.1),U.gain.linearRampToValueAtTime(0,Q+Z),H.connect(Y),$.connect(Y),Y.connect(U),U.connect(this.musicBus),H.start(Q),$.start(Q),H.stop(Q+Z+0.1),$.stop(Q+Z+0.1)}pluck(J,Q,Z){let K=this.ctx,W=K.createOscillator();W.type="triangle",W.frequency.value=J;let H=K.createGain();H.gain.setValueAtTime(0,Q),H.gain.linearRampToValueAtTime(Z,Q+0.012),H.gain.exponentialRampToValueAtTime(0.0001,Q+1.4),W.connect(H),H.connect(this.musicBus),W.start(Q),W.stop(Q+1.5)}drum(J,Q,Z=60){let K=this.ctx,W=K.createOscillator();W.type="sine",W.frequency.setValueAtTime(Z*2.4,J),W.frequency.exponentialRampToValueAtTime(Z,J+0.16);let H=K.createGain();if(H.gain.setValueAtTime(Q,J),H.gain.exponentialRampToValueAtTime(0.001,J+0.42),W.connect(H),H.connect(this.musicBus),W.start(J),W.stop(J+0.5),this.noiseBuf){let $=K.createBufferSource();$.buffer=this.noiseBuf;let Y=K.createBiquadFilter();Y.type="lowpass",Y.frequency.value=240;let U=K.createGain();U.gain.setValueAtTime(Q*0.7,J),U.gain.exponentialRampToValueAtTime(0.001,J+0.2),$.connect(Y),Y.connect(U),U.connect(this.musicBus),$.start(J),$.stop(J+0.25)}}env(J,Q,Z){let K=this.ctx,W=Z??K.currentTime,H=K.createGain();return H.gain.setValueAtTime(J,W),H.gain.exponentialRampToValueAtTime(0.0001,W+Q),H.connect(this.sfxBus),{g:H,t:W}}focusTick(){if(!this.ctx)return;let J=this.ctx,{g:Q,t:Z}=this.env(0.16,0.28),K=J.createOscillator();K.type="triangle",K.frequency.value=660;let W=J.createOscillator();W.type="sine",W.frequency.value=1320,K.connect(Q),W.connect(Q),K.start(Z),W.start(Z),K.stop(Z+0.3),W.stop(Z+0.3)}selectSting(J){if(!this.ctx)return;let Q=this.ctx,Z=Q.currentTime;this.drum(Z,0.55,52),[J,J+7,J+15,J+19].forEach((W,H)=>{let{g:$,t:Y}=this.env(0.14,1.6,Z+H*0.06);$.gain.setValueAtTime(0,Y),$.gain.linearRampToValueAtTime(0.14,Y+0.25),$.gain.exponentialRampToValueAtTime(0.0001,Y+1.6);let U=Q.createOscillator();U.type="sawtooth",U.frequency.value=H6(W);let X=Q.createBiquadFilter();X.type="lowpass",X.frequency.value=1400,U.connect(X),X.connect($),U.start(Y),U.stop(Y+1.7)});for(let W=0;W<6;W++){let{g:H,t:$}=this.env(0.05,0.9,Z+0.2+W*0.07),Y=Q.createOscillator();Y.type="sine",Y.frequency.value=H6(J+24+[0,3,7,12,15,19][W]),Y.connect(H),Y.start($),Y.stop($+1)}}gateOpen(){if(!this.ctx||!this.noiseBuf)return;let J=this.ctx,Q=J.currentTime,Z=J.createBufferSource();Z.buffer=this.noiseBuf;let K=J.createBiquadFilter();K.type="bandpass",K.Q.value=1.4,K.frequency.setValueAtTime(300,Q),K.frequency.exponentialRampToValueAtTime(2400,Q+1.2);let W=J.createGain();W.gain.setValueAtTime(0.0001,Q),W.gain.linearRampToValueAtTime(0.35,Q+0.7),W.gain.exponentialRampToValueAtTime(0.0001,Q+1.6),Z.connect(K),K.connect(W),W.connect(this.sfxBus),Z.start(Q),Z.stop(Q+1.7),this.drum(Q+0.9,0.5,48)}step(){if(!this.ctx||!this.noiseBuf)return;let J=this.ctx,{g:Q,t:Z}=this.env(0.045,0.09),K=J.createBufferSource();K.buffer=this.noiseBuf,K.playbackRate.value=0.7+Math.random()*0.5;let W=J.createBiquadFilter();W.type="lowpass",W.frequency.value=500,K.connect(W),W.connect(Q),K.start(Z),K.stop(Z+0.1)}collect(){if(!this.ctx)return;let J=this.ctx,Q=J.currentTime;[880,1320].forEach((Z,K)=>{let{g:W,t:H}=this.env(0.12,0.5,Q+K*0.08),$=J.createOscillator();$.type="sine",$.frequency.value=Z,$.connect(W),$.start(H),$.stop(H+0.6)})}chest(){if(!this.ctx)return;let J=this.ctx,Q=J.currentTime,{g:Z,t:K}=this.env(0.1,0.5),W=J.createOscillator();W.type="square",W.frequency.setValueAtTime(120,K),W.frequency.linearRampToValueAtTime(90,K+0.3),W.connect(Z),W.start(K),W.stop(K+0.5),this.collect()}questDone(){if(!this.ctx)return;let J=this.ctx,Q=J.currentTime;[0,4,7,12].forEach((Z,K)=>{let{g:W,t:H}=this.env(0.16,0.7,Q+K*0.13),$=J.createOscillator();$.type="triangle",$.frequency.value=H6(60+Z),$.connect(W),$.start(H),$.stop(H+0.8)}),this.drum(Q+0.55,0.4)}uiClick(){if(!this.ctx)return;let J=this.ctx,{g:Q,t:Z}=this.env(0.08,0.12),K=J.createOscillator();K.type="sine",K.frequency.value=520,K.connect(Q),K.start(Z),K.stop(Z+0.14)}}var N9=new XY;var TQ={status:"connecting",balance:null,fetchedAt:0,note:""},tK=new Set;function nE(){tK.forEach((J)=>J(TQ))}function $6(J){TQ={...TQ,...J},nE()}var E7={get(){return TQ},subscribe(J){return tK.add(J),()=>{tK.delete(J)}},async init(){let J=location.protocol==="http:"||location.protocol==="https:",Q="";try{let Z=window;try{Z.Bale?.WebApp?.ready?.()}catch{}try{Z.Bale?.WebApp?.expand?.()}catch{}Q=Z.Bale?.WebApp?.initData||""}catch{Q=""}try{if(!J){$6({status:"offline",note:"اجرای آفلاین/محلی — موجودی رسمی فقط داخل مینی‌اپ بله خوانده می‌شود."});return}if(!Q){$6({status:"offline",note:"دادهٔ ورود بله (initData) در دسترس نیست؛ موجودی رسمی فقط با ورود معتبر از داخل بله خوانده می‌شود."});return}$6({status:"connecting",note:""});let Z=await fetch("/api/v1/auth/bale",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({init_data:Q}),cache:"no-store"});if(!Z.ok)throw Error("auth "+Z.status);let K=(await Z.json()).access_token,W=await fetch("/api/v1/players/me",{headers:{Authorization:"Bearer "+K},cache:"no-store"});if(!W.ok)throw Error("me "+W.status);let H=await W.json(),$=Number(H&&H.player&&H.player.token_balance);if(!Number.isFinite($))throw Error("bad balance");$6({status:"online",balance:$,fetchedAt:Date.now(),note:"خوانده‌شده از Backend و دفترکل معتبر"})}catch{$6({status:"offline",note:"دریافت موجودی از سرور ناموفق بود؛ هیچ عددی به‌جای موجودی واقعی نمایش داده نمی‌شود."})}},refresh(){return E7.init()}};function GY(J,Q,Z){let K=!1,W=0,H=0,$=0,Y=52,U=(G,F)=>{Q.style.transform=`translate(calc(-50% + ${G}px), calc(-50% + ${F}px))`},X=(G)=>{K=!0,J.classList.add("active"),window.clearTimeout($),W=G.clientX,H=G.clientY,G.target?.setPointerCapture?.(G.pointerId)},N=(G)=>{if(!K)return;let F=G.clientX-W,R=G.clientY-H,B=Math.hypot(F,R);if(B>Y)F=F/B*Y,R=R/B*Y;U(F,R),Z(F/Y,-R/Y)},E=()=>{if(!K)return;K=!1,U(0,0),Z(0,0),$=window.setTimeout(()=>J.classList.remove("active"),600)};return J.addEventListener("pointerdown",X),J.addEventListener("pointermove",N),J.addEventListener("pointerup",E),J.addEventListener("pointercancel",E),{destroy(){window.clearTimeout($),J.removeEventListener("pointerdown",X),J.removeEventListener("pointermove",N),J.removeEventListener("pointerup",E),J.removeEventListener("pointercancel",E)}}}function SQ(J,Q,Z){let K={uMap:{value:J},uNormalMap:{value:Q},uTime:{value:0},uStrength:{value:Z.strength},uSpeed:{value:Z.speed},uGust:{value:Z.gust},uSeed:{value:Z.seed},uHighlight:{value:0},uDim:{value:1},uLightDir:{value:new S(-0.45,0.75,0.55).normalize()},uLightColor:{value:new X0(1,0.9,0.72)},uAmbTop:{value:new X0(0.88,0.86,0.9)},uAmbBot:{value:new X0(0.42,0.38,0.4)},uPointPos:{value:new S(0,4,9)},uPointColor:{value:new X0(1,0.8,0.45)},uPointIntensity:{value:0.9},uFogColor:{value:new X0(658710)},uFogDensity:{value:0.028}};return new k9({uniforms:K,transparent:!0,side:F9,depthWrite:!0,alphaTest:0,vertexShader:`
      uniform float uTime, uStrength, uSpeed, uGust, uSeed;
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vNrm;
      varying float vDimF;

      // wave displacement + analytic derivative
      vec3 wave(vec2 p, float t, out float dzdx, out float dzdy) {
        // p: x across width [-w/2..w/2], y height [-h/2..h/2], top y=+h/2 fixed
        float fall = clamp(0.5 - p.y / 3.1, 0.0, 1.0);       // 0 at pole edge
        float f = pow(fall, 1.45);
        float k1 = 2.4, k2 = 4.9, k3 = 7.3;
        float w = uSpeed;
        float ph = uSeed * 6.2831;
        float gust = sin(t * 0.35 + uSeed * 12.0) * 0.5 + sin(t * 0.13 + uSeed * 5.0) * 0.5;
        float S = uStrength * (1.0 + uGust * gust * 0.55);

        float a1 = sin(p.x * k1 + t * w * 1.9 + ph + p.y * 0.35);
        float a2 = sin(p.x * k2 - t * w * 2.6 + ph * 2.1 + p.y * 0.9);
        float a3 = sin(p.x * k3 + t * w * 3.7 + ph * 3.7);
        float z = S * f * (0.16 * a1 + 0.075 * a2 + 0.045 * a3);
        z += S * f * 0.09 * sin(t * w * 0.9 + ph + p.x * 1.4); // slow body sway

        // derivatives (for lighting)
        float da1 = cos(p.x * k1 + t * w * 1.9 + ph + p.y * 0.35);
        float da2 = cos(p.x * k2 - t * w * 2.6 + ph * 2.1 + p.y * 0.9);
        float da3 = cos(p.x * k3 + t * w * 3.7 + ph * 3.7);
        float dfdx = 0.0;
        // fall depends only on y; f on x constant → dz/dx:
        dzdx = S * f * (0.16 * a1 * k1 + 0.075 * a2 * k2 + 0.045 * a3 * k3)
             + S * f * 0.09 * 1.4 * cos(t * w * 0.9 + ph + p.x * 1.4);
        // dz/dy: product rule on f(y)
        float dfdy = -1.0 / 3.1 * 1.45 * pow(max(fall, 1e-4), 0.45);
        dzdy = S * dfdy * (0.16 * a1 + 0.075 * a2 + 0.045 * a3)
             + S * f * (0.16 * a1 * 0.35 + 0.075 * a2 * 0.9)
             + S * f * 0.09 * 0.0;
        // gentle x drift on free edge (flag tail slides in wind)
        float xDrift = S * f * f * 0.10 * sin(t * w * 1.3 + ph * 1.7);
        return vec3(xDrift, 0.0, z);
      }

      void main() {
        vUv = uv;
        vec3 p = position;
        float dzdx, dzdy;
        vec3 w = wave(p.xy, uTime, dzdx, dzdy);
        p += w;
        vec3 n = normalize(vec3(-dzdx * 2.2, -dzdy * 1.4, 1.0));
        vNrm = normalize(mat3(modelMatrix) * n);
        vec4 wp = modelMatrix * vec4(p, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform sampler2D uMap, uNormalMap;
      uniform float uHighlight, uDim, uPointIntensity, uFogDensity;
      uniform vec3 uLightDir, uLightColor, uAmbTop, uAmbBot;
      uniform vec3 uPointPos, uPointColor;
      uniform vec3 uFogColor;
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vNrm;

      void main() {
        vec4 tex = texture2D(uMap, vUv);
        if (tex.a < 0.06) discard;
        vec3 albedo = tex.rgb;

        // normal-map relief (object-space approximate; cloth is mostly vertical)
        vec3 nm = texture2D(uNormalMap, vUv).xyz * 2.0 - 1.0;
        vec3 N = normalize(vNrm + vec3(nm.x, nm.y, 0.0) * 0.35);
        if (!gl_FrontFacing) N = -N;

        vec3 V = normalize(cameraPosition - vWorldPos);
        vec3 L = normalize(uLightDir);

        // double-sided: light back faces softly
        float ndl = max(dot(N, L), 0.0);
        float back = gl_FrontFacing ? 1.0 : 0.55;

        vec3 amb = mix(uAmbBot, uAmbTop, clamp(N.y * 0.5 + 0.5, 0.0, 1.0));
        vec3 col = albedo * (amb + uLightColor * ndl * 0.5 * back);

        // realm point light (focus glow)
        vec3 Lp = uPointPos - vWorldPos;
        float d = length(Lp);
        float att = uPointIntensity * 6.0 / (1.0 + d * d * 0.09);
        col += albedo * uPointColor * max(dot(N, normalize(Lp)), 0.0) * att * 0.55;

        // golden rim / fresnel for cinematic edge
        float fres = pow(1.0 - max(dot(N, V), 0.0), 2.6);
        col += vec3(1.0, 0.82, 0.45) * fres * (0.16 + uHighlight * 0.55);

        // specular sheen on folds
        vec3 H = normalize(L + V);
        float spec = pow(max(dot(N, H), 0.0), 30.0) * 0.4 * back;
        col += uLightColor * spec;

        // focus/dim grading
        float luma = dot(col, vec3(0.299, 0.587, 0.114));
        col = mix(col, vec3(luma), (1.0 - uHighlight) * 0.14);
        col *= mix(0.72, 1.12, uHighlight) * uDim;

        // manual exp2 fog
        float fogDist = length(cameraPosition - vWorldPos);
        float f = 1.0 - exp(-uFogDensity * uFogDensity * fogDist * fogDist);
        col = mix(col, uFogColor, clamp(f, 0.0, 1.0));

        gl_FragColor = vec4(col, tex.a * 0.995);
      }
    `})}var sE=14264636;class eK{canvas;profile;renderer;scene=new H7;camera;clock=new G7;gates=[];raf=0;disposed=!1;embers;skyMat;groundMat;raycaster=new IQ;pointerDown={x:0,y:0,t:0,moved:!1};focus=0;focusAnim=0;camBase=new S(0,4.25,12.3);camTarget=new S(0,3.55,0);tier;labelContainer;labelEls=new Map;onLabels;onFocused;onEnterRequested;onSound;realmTint=new X0(1,0.85,0.5);tintColor=new X0(1,0.85,0.5);tmpV=new S;constructor(J,Q,Z){this.canvas=J;this.profile=Q;this.tier=Q.tier,this.renderer=new K6({canvas:J,antialias:Q.tier==="high",alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,Q.dpr)),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.renderer.outputColorSpace=YJ,this.renderer.toneMapping=M8,this.renderer.toneMappingExposure=1.12,this.camera=new h9(42.5,window.innerWidth/window.innerHeight,0.1,300),this.camera.position.copy(this.camBase),this.scene.fog=null,this.buildSky(),this.buildGround(),this.buildEmbers(),this.buildGates(Z),this.buildLights(),window.addEventListener("resize",this.onResize),J.addEventListener("pointerdown",this.onPointerDown),J.addEventListener("pointermove",this.onPointerMove),J.addEventListener("pointerup",this.onPointerUp),J.addEventListener("wheel",this.onWheel,{passive:!0})}setLabelContainer(J){this.labelContainer=J,J.innerHTML="",this.labelEls.clear();for(let Q of D9){let Z=document.createElement("div");Z.className="gate-label",Z.innerHTML=`
        <div class="gate-label-fa">${Q.fa}</div>
        <div class="gate-label-en">${Q.en}</div>
        <div class="gate-label-rule"></div>`,Z.style.pointerEvents="none",J.appendChild(Z),this.labelEls.set(Q.id,Z)}}setCallbacks(J){this.onFocused=J.onFocused,this.onEnterRequested=J.onEnterRequested,this.onSound=J.onSound,this.onLabels=J.onLabels}setFocus(J,Q=!1){let Z=D9.findIndex((W)=>W.id===J);if(Z<0||Z===this.focus)return;if(this.focus=Z,!Q)this.onSound?.("focus");this.onFocused?.(J),this.tintColor.set(D9[Z].color).lerp(new X0(1,0.9,0.6),0.45);let K=D9[Z].note}focusByOffset(J){let Q=(this.focus+J+D9.length)%D9.length;this.setFocus(D9[Q].id)}get focusedRealm(){return D9[this.focus]}start(){if(this.raf)return;this.clock.start();let J=()=>{if(this.disposed)return;this.raf=requestAnimationFrame(J),this.update(),this.renderer.render(this.scene,this.camera)};this.raf=requestAnimationFrame(J)}stop(){if(this.raf)cancelAnimationFrame(this.raf);this.raf=0}dispose(){this.disposed=!0,this.stop(),window.removeEventListener("resize",this.onResize),this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("pointermove",this.onPointerMove),this.canvas.removeEventListener("pointerup",this.onPointerUp),this.canvas.removeEventListener("wheel",this.onWheel),this.scene.traverse((J)=>{let Q=J;if(Q.geometry)Q.geometry.dispose();let Z=Q.material;if(Array.isArray(Z))Z.forEach((K)=>K.dispose());else if(Z)Z.dispose()}),this.renderer.dispose()}buildLights(){let J=new _8(16769712,2.2);J.position.set(-6,12,8),this.scene.add(J);let Q=new _8(5929215,0.8);Q.position.set(7,5,-6),this.scene.add(Q),this.scene.add(new BQ(4212838,1.1)),this.keyLight=J}keyLight;buildSky(){let J=new LJ(140,32,20);this.skyMat=new k9({side:f9,depthWrite:!1,uniforms:{uTop:{value:new X0(329487)},uHorizon:{value:new X0(2891830)},uGlow:{value:new X0(9067050)},uTint:{value:new X0(1,0.85,0.5)},uTime:{value:0}},vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform vec3 uTop, uHorizon, uGlow, uTint;
        uniform float uTime;
        varying vec3 vDir;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main() {
          float h = clamp(vDir.y, -0.2, 1.0);
          vec3 col = mix(uHorizon, uTop, smoothstep(0.0, 0.55, h));
          // horizon warm glow toward sunset side
          float glow = pow(max(0.0, 1.0 - abs(h) * 3.2), 2.2);
          float azimuth = 0.5 + 0.5 * atan(vDir.x, vDir.z) / 3.14159;
          col += uGlow * glow * (0.35 + 0.4 * azimuth);
          col = mix(col, col * uTint, 0.25);
          // faint stars high up
          vec2 sp = vDir.xz / max(vDir.y, 0.08) * 3.0;
          float st = step(0.997, hash(floor(sp * 40.0))) * smoothstep(0.25, 0.7, vDir.y);
          col += vec3(0.8, 0.85, 1.0) * st * (0.5 + 0.5 * sin(uTime * 1.5 + hash(floor(sp * 40.0)) * 30.0));
          gl_FragColor = vec4(col, 1.0);
        }`});let Q=new Q0(J,this.skyMat);this.scene.add(Q)}buildGround(){let J=new H8(70,72);this.groundMat=new k9({uniforms:{uTime:{value:0},uTint:{value:new X0(1,0.85,0.5)}},vertexShader:`
        varying vec2 vP;
        void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
        uniform float uTime; uniform vec3 uTint;
        varying vec2 vP;
        void main(){
          float r = length(vP);
          vec3 base = vec3(0.045, 0.05, 0.075);
          base *= smoothstep(70.0, 8.0, r) * 0.85 + 0.15;
          // royal rune rings
          float ring = smoothstep(0.012, 0.0, abs(r - 6.2) - 0.045);
          float ring2 = smoothstep(0.012, 0.0, abs(r - 10.8) - 0.07);
          float dash = 0.55 + 0.45 * sin(atan(vP.y, vP.x) * 36.0 + uTime * 0.15);
          float ring3 = smoothstep(0.01, 0.0, abs(r - 15.5) - 0.05) * step(0.35, dash);
          float glow = exp(-r * r * 0.012) * 0.5;
          vec3 gold = uTint * (ring * 0.5 + ring2 * 0.35 + ring3 * 0.3);
          vec3 col = base + gold + uTint * glow * 0.14;
          // distance fog to bg
          col = mix(col, vec3(0.028, 0.032, 0.055), smoothstep(14.0, 62.0, r));
          gl_FragColor = vec4(col, 1.0);
        }`});let Q=new Q0(J,this.groundMat);Q.rotation.x=-Math.PI/2,Q.position.y=0,this.scene.add(Q)}buildEmbers(){let J=this.profile.embers,Q=new Float32Array(J*3),Z=new Float32Array(J);for(let H=0;H<J;H++)Q[H*3]=(Math.random()-0.5)*46,Q[H*3+1]=Math.random()*14,Q[H*3+2]=(Math.random()-0.5)*40-2,Z[H]=Math.random()*100;let K=new C9;K.setAttribute("position",new x9(Q,3)),K.setAttribute("aSeed",new x9(Z,1));let W=new k9({transparent:!0,depthWrite:!1,blending:BJ,uniforms:{uTime:{value:0},uPixel:{value:this.renderer.getPixelRatio()}},vertexShader:`
        uniform float uTime, uPixel;
        attribute float aSeed;
        varying float vA;
        void main(){
          vec3 p = position;
          p.y = mod(p.y + uTime * (0.35 + fract(aSeed) * 0.5), 15.0);
          p.x += sin(uTime * (0.4 + fract(aSeed * 7.0) * 0.4) + aSeed) * 1.4;
          p.z += cos(uTime * 0.3 + aSeed * 3.0) * 1.1;
          vA = smoothstep(15.0, 12.5, p.y) * smoothstep(0.0, 1.5, p.y);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = (2.0 + fract(aSeed * 3.0) * 3.4) * uPixel * (10.0 / -mv.z) * 2.4;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying float vA;
        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          float a = smoothstep(0.5, 0.0, d) * vA;
          gl_FragColor = vec4(vec3(1.0, 0.62, 0.28) * a, a);
        }`});this.embers=new $7(K,W),this.scene.add(this.embers)}buildGates(J){let[Q,Z]=this.profile.clothSegments,K=9.2;D9.forEach((W,H)=>{let $=(H-3)*0.26,Y=Math.sin($)*9.2,U=-Math.cos($)*9.2+4.6,X=new t0;X.position.set(Y,0,U),X.rotation.y=-$*0.55,X.scale.setScalar(1.02);let N=new t0,E=new l0({color:sE,metalness:0.85,roughness:0.32,envMapIntensity:0.8}),G=new l0({color:3812380,metalness:0.6,roughness:0.5}),F=new Q0(new L9(0.055,0.07,5.4,12),E);F.position.y=3.2;let R=new Q0(new ZJ(0.13,0.62,10),E);R.position.y=6.2;let B=new Q0(new LJ(0.09,10,8),E);B.position.y=5.88;let D=new Q0(new L9(0.3,0.42,0.5,8),G);D.position.y=0.25;let q=new Q0(new L9(0.04,0.04,1.5,8),E);q.rotation.z=Math.PI/2,q.position.y=5.62;let I=new Q0(new ZJ(0.09,0.34,8),E);I.rotation.z=Math.PI/2,I.position.set(-0.85,5.62,0);let z=I.clone();if(z.rotation.z=-Math.PI/2,z.position.set(0.85,5.62,0),N.add(F,R,B,D,q,I,z),N.position.z=-0.85,this.profile.worldShadowMap>0)F.castShadow=!0;X.add(N);let V=J[W.id];V.cloth.colorSpace=YJ,V.cloth.anisotropy=this.profile.anisotropy;let _=3.05,C=V.cloth.image,O=C?.width&&C?.height?C.width/C.height:0.78,k=Math.min(3.15,_*O),w=new c9(k,_,Q,Z),g=SQ(V.cloth,V.normal,{strength:W.wind.strength,speed:W.wind.speed,gust:W.wind.gust,seed:(H*0.618+0.17)%1}),j=new Q0(w,g);j.position.set(0,5.62-_/2-0.05,0.1),X.add(j);let p=new k9({transparent:!0,depthWrite:!1,blending:BJ,side:F9,uniforms:{uColor:{value:new X0(W.color)},uA:{value:0},uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);} ",fragmentShader:`
          uniform vec3 uColor; uniform float uA, uTime;
          varying vec2 vUv;
          void main(){
            float x = smoothstep(0.0, 0.5, vUv.x) * smoothstep(1.0, 0.5, vUv.x);
            float y = pow(vUv.y, 1.6);
            float pulse = 0.85 + 0.15 * sin(uTime * 2.0 + vUv.y * 6.0);
            float a = x * y * 0.5 * uA * pulse;
            gl_FragColor = vec4(uColor * a + vec3(0.9,0.75,0.4) * a * 0.35, a);
          }`}),o=new Q0(new c9(2.6,8.5),p);o.position.set(0,3.6,-1.35),X.add(o);let A=iE(),u=new cJ(new _J({map:A,color:new X0(W.color),transparent:!0,opacity:0,blending:BJ,depthWrite:!1}));u.scale.set(4.6,4.6,1),u.position.set(0,3.9,-1),X.add(u),this.scene.add(X),this.gates.push({realm:W,group:X,cloth:j,mat:g,pole:N,beam:o,beamMat:p,glow:u,basePos:new S(Y,0,U)})})}onResize=()=>{let{innerWidth:J,innerHeight:Q}=window;this.camera.aspect=J/Q,this.camera.updateProjectionMatrix(),this.renderer.setSize(J,Q,!1)};ndc(J){let Q=this.canvas.getBoundingClientRect();return new F0((J.clientX-Q.left)/Q.width*2-1,-((J.clientY-Q.top)/Q.height)*2+1)}onPointerDown=(J)=>{this.pointerDown={x:J.clientX,y:J.clientY,t:performance.now(),moved:!1}};onPointerMove=(J)=>{if(!(J.buttons&1)&&J.pointerType==="mouse")return;let Q=J.clientX-this.pointerDown.x;if(Math.abs(Q)>34&&!this.pointerDown.moved)this.pointerDown.moved=!0,this.focusByOffset(Q<0?1:-1)};onPointerUp=(J)=>{let Q=performance.now()-this.pointerDown.t;if(this.pointerDown.moved||Q>900)return;let Z=this.ndc(J);this.raycaster.setFromCamera(Z,this.camera);let K=this.gates[this.focus],W=null,H=1/0;if(this.gates.forEach(($,Y)=>{let U=this.raycaster.intersectObjects([$.cloth,$.pole],!0);if(U.length>0){let X=U[0].distance,N=Y===this.focus?-0.4:0;if(X+N<H)H=X+N,W=Y}}),W!==null)if(W===this.focus){let $=this.gates[W].realm;this.onSound?.("sting"),this.onEnterRequested?.($.id)}else this.setFocus(this.gates[W].realm.id)};onWheel=(J)=>{if(Math.abs(J.deltaX)>Math.abs(J.deltaY))this.focusByOffset(J.deltaX>0?1:-1);else if(Math.abs(J.deltaY)>20)this.focusByOffset(J.deltaY>0?1:-1)};update(){let J=this.clock.getElapsedTime();this.focusAnim+=((this.focus===D9.findIndex((K)=>K.id===D9[this.focus].id)?1:1)-this.focusAnim)*0.08,this.focusAnim,this.realmTint.lerp(this.tintColor,0.035),this.gates.forEach((K,W)=>{let H=W===this.focus,$=((W-this.focus)%7+7+3)%7-3,Y=$*0.26,U=Math.sin(Y)*9.2,X=-Math.cos(Y)*9.2+4.6+Math.abs($)*0.9,N=-Y*0.55;K.group.position.x+=(U-K.group.position.x)*Math.min(1,0.06),K.group.position.z+=(X-K.group.position.z)*Math.min(1,0.06),K.group.rotation.y+=(N-K.group.rotation.y)*Math.min(1,0.06),K.mat.uniforms.uTime.value=J+W*1.7;let E=H?1:0,G=K.mat.uniforms.uHighlight;G.value+=(E-G.value)*0.07,K.mat.uniforms.uDim.value+=((H?1:0.78)-K.mat.uniforms.uDim.value)*0.06,K.mat.uniforms.uPointColor.value.set(this.realmTint),K.mat.uniforms.uPointIntensity.value=H?1.15:0.5,K.beamMat.uniforms.uA.value+=((H?1:0)-K.beamMat.uniforms.uA.value)*0.055,K.beamMat.uniforms.uTime.value=J,K.beamMat.uniforms.uColor.value.set(K.realm.color);let F=K.glow.material;F.opacity+=((H?0.34:0.08)-F.opacity)*0.06,F.color.set(K.realm.color);let R=H?1.14:0.88;K.group.scale.x+=(R-K.group.scale.x)*0.06,K.group.scale.y=K.group.scale.x,K.group.scale.z=K.group.scale.x,K.pole.rotation.z=Math.sin(J*0.4+W*1.3)*0.006*K.realm.wind.strength});let Q=new S(this.camBase.x+Math.sin(J*0.13)*0.45,this.camBase.y+Math.sin(J*0.1)*0.2,this.camBase.z);this.camera.position.lerp(Q,0.03);let Z=this.gates[this.focus].group.position.x;this.camTarget.lerp(new S(Z*0.35,3.55,-1.6),0.05),this.camera.lookAt(this.camTarget),this.camera.rotation.z=Math.sin(J*0.07)*0.006,this.skyMat.uniforms.uTime.value=J,this.skyMat.uniforms.uTint.value.set(this.realmTint),this.skyMat.uniforms.uHorizon.value.set(2891830).lerp(this.realmTint,0.28),this.skyMat.uniforms.uGlow.value.set(9067050).lerp(this.realmTint,0.3),this.groundMat.uniforms.uTime.value=J,this.groundMat.uniforms.uTint.value.set(this.realmTint),this.embers.material.uniforms.uTime.value=J,this.keyLight.color.set(16769712).lerp(this.realmTint,0.35),this.updateLabels()}updateLabels(){if(!this.labelContainer)return;let{innerWidth:J,innerHeight:Q}=window;this.gates.forEach((Z)=>{let K=this.labelEls.get(Z.realm.id);if(!K)return;this.tmpV.set(0,-1.78,0.15).applyMatrix4(Z.cloth.matrixWorld),this.tmpV.project(this.camera);let W=(this.tmpV.x*0.5+0.5)*J,H=(-this.tmpV.y*0.5+0.5)*Q,$=Z.realm.id===D9[this.focus].id,Y=this.tmpV.z<1&&W>-80&&W<J+80;K.style.transform=`translate(-50%,0) translate(${W}px, ${H}px) scale(${$?1.06:0.92})`,K.style.opacity=Y?$?"1":"0.62":"0",K.classList.toggle("focused",$)}),this.onLabels?.([]),this.onLabels}}function iE(){let J=document.createElement("canvas");J.width=J.height=128;let Q=J.getContext("2d"),Z=Q.createRadialGradient(64,64,0,64,64,64);Z.addColorStop(0,"rgba(255,255,255,0.9)"),Z.addColorStop(0.4,"rgba(255,255,255,0.28)"),Z.addColorStop(1,"rgba(255,255,255,0)"),Q.fillStyle=Z,Q.fillRect(0,0,128,128);let K=new Y7(J);return K.colorSpace=YJ,K}var d0={stone:new l0({color:9274743,roughness:0.92,metalness:0.02}),stoneDark:new l0({color:6051147,roughness:0.95}),wood:new l0({color:8016432,roughness:0.85}),woodDark:new l0({color:4993048,roughness:0.9}),plaster:new l0({color:14207400,roughness:0.9}),roofRed:new l0({color:9189930,roughness:0.8}),roofBlue:new l0({color:3034484,roughness:0.8}),gold:new l0({color:14264636,metalness:0.85,roughness:0.3}),iron:new l0({color:4868690,metalness:0.7,roughness:0.45}),leaf:new l0({color:4160820,roughness:0.95}),leafDark:new l0({color:2907432,roughness:0.95}),pine:new l0({color:2575914,roughness:0.95}),bark:new l0({color:6111782,roughness:0.95}),clothRed:new l0({color:10690598,roughness:0.85,side:F9}),clothGold:new l0({color:14264636,roughness:0.75,side:F9}),clothPurple:new l0({color:5974662,roughness:0.85,side:F9}),clothBlue:new l0({color:1981038,roughness:0.85,side:F9}),crystal:new l0({color:16751164,emissive:16738842,emissiveIntensity:1.6,roughness:0.25,metalness:0.1}),water:null};function NY(J){return new l0({color:new X0(J),roughness:0.85,side:F9})}function EY(J){let Q=new t0,Z=[],K=(E,G,F,R,B)=>{if(E.position.set(G,F,R),Q.add(E),B>0)Z.push({x:G,z:R,r:B});return E},W=new Q0(new u0(9,5,6.5),d0.stone);K(W,0,2.5,0,5.4);let H=new Q0(new ZJ(5.4,2.6,4),d0.roofBlue);H.rotation.y=Math.PI/4,K(H,0,6.3,0,0);let $=[[-4.2,-3],[4.2,-3],[-4.2,3],[4.2,3]];for(let[E,G]of $){let F=new Q0(new L9(1.15,1.3,7.2,10),d0.stone);K(F,E,3.6,G,1.5);let R=new Q0(new L9(1.35,1.35,0.7,10),d0.stoneDark);K(R,E,7.5,G,0);let B=new Q0(new ZJ(1.5,1.7,10),d0.roofBlue);K(B,E,8.6,G,0);let D=new Q0(new L9(0.03,0.03,1.6,6),d0.gold);K(D,E,10.2,G,0);let q=new Q0(new c9(1.05,0.62),J);q.position.set(E+0.55,10.55,G),Q.add(q)}let Y=new Q0(new u0(1.2,4.2,1.2),d0.stoneDark);K(Y,-1.5,2.1,3.35,0.9);let U=Y.clone();K(U,1.5,2.1,3.35,0.9);let X=new Q0(new L9(1.5,1.5,1.2,12,1,!1,0,Math.PI),d0.stoneDark);X.rotation.set(Math.PI/2,0,Math.PI),X.position.set(0,4.2,3.35),Q.add(X);let N=new Q0(new u0(2.4,3.2,0.15),d0.iron);return N.position.set(0,1.7,3.3),Q.add(N),{group:Q,colliders:Z}}function qY(J=0,Q){let Z=new t0,K=2.6+J%2*0.7,W=2.4,H=new Q0(new u0(K,2.2,2.4),d0.plaster);H.position.y=1.1;let $=new Q0(new u0(K+0.06,0.16,0.1),d0.woodDark);$.position.set(0,2.05,1.2);let Y=new Q0(new u0(0.14,2.2,0.1),d0.woodDark);Y.position.set(K/4,1.1,1.22);let U=new Q0(new ZJ(K*0.78,1.5,4),J%2?d0.roofBlue:d0.roofRed);U.rotation.y=Math.PI/4,U.position.y=2.95;let X=new Q0(new u0(0.7,1.35,0.08),d0.woodDark);X.position.set(0,0.68,1.23);let N=new Q0(new u0(0.5,0.5,0.06),new l0({color:16762982,emissive:16751146,emissiveIntensity:0.9,roughness:0.4}));N.position.set(-K/4,1.35,1.23);let E=new Q0(new u0(0.42,1.1,0.42),d0.stoneDark);if(E.position.set(K/3,3.3,-0.4),Z.add(H,$,Y,U,X,N,E),Q){let G=new Q0(new c9(0.66,0.4),Q);G.position.set(0,3.1,0.72),Z.add(G)}return{group:Z,collider:{x:0,z:0,r:Math.max(K,2.4)*0.62}}}function FY(J=10690598){let Q=new t0,Z=new Q0(new u0(2.3,0.9,1.1),d0.wood);Z.position.y=0.45;let K=new Q0(new L9(0.05,0.05,2.2,6),d0.woodDark);K.position.set(-1.05,1.1,0.45);let W=K.clone();W.position.x=1.05;let H=new Q0(new u0(2.6,0.06,1.5),new l0({color:J,roughness:0.8,side:F9}));H.position.y=2.2,H.rotation.x=-0.12;let $=new Q0(new LJ(0.16,8,6),new l0({color:12872234,roughness:0.6}));$.position.set(-0.5,1,0.1);let Y=$.clone();Y.position.x=-0.1;let U=$.clone();U.position.x=0.32;let X=new Q0(new L9(0.12,0.15,0.34,8),new l0({color:9067050,roughness:0.7}));return X.position.set(0.75,1.06,0),Q.add(Z,K,W,H,$,Y,U,X),{group:Q,collider:{x:0,z:0,r:1.35}}}function DY(){let J=new t0,Q=new Q0(new L9(0.95,1.05,0.85,12),d0.stone);Q.position.y=0.42;let Z=new Q0(new H8(0.82,12),new l0({color:1854062,roughness:0.15,metalness:0.4}));Z.rotation.x=-Math.PI/2,Z.position.y=0.72;let K=new Q0(new L9(0.06,0.06,1.7,6),d0.woodDark);K.position.set(-0.7,1.6,0);let W=K.clone();W.position.x=0.7;let H=new Q0(new ZJ(1.15,0.7,4),d0.roofRed);H.rotation.y=Math.PI/4,H.position.y=2.85;let $=new Q0(new L9(0.045,0.045,1.5,6),d0.wood);return $.rotation.z=Math.PI/2,$.position.y=2.35,J.add(Q,Z,K,W,H,$),{group:J,collider:{x:0,z:0,r:1.25}}}function jQ(J=1){let Q=new t0,Z=new Q0(new L9(0.16,0.26,1.7,7),d0.bark);Z.position.y=0.85,Q.add(Z);let K=new t0,W=[[0,2.15,0,1.05],[0.55,1.8,0.2,0.7],[-0.5,1.9,-0.15,0.75],[0.1,2.6,-0.2,0.65]];for(let[H,$,Y,U]of W){let X=new Q0(new U7(U,1),d0.leaf);X.position.set(H,$,Y),X.scale.y=0.82,K.add(X)}return Q.add(K),Q.scale.setScalar(J),{group:Q,collider:{x:0,z:0,r:0.42*J}}}function vQ(J=1){let Q=new t0,Z=new Q0(new L9(0.12,0.2,1.4,6),d0.bark);Z.position.y=0.7,Q.add(Z);for(let K=0;K<3;K++){let W=new Q0(new ZJ(1.05-K*0.28,1.15,8),d0.pine);W.position.y=1.55+K*0.75,Q.add(W)}return Q.scale.setScalar(J),{group:Q,collider:{x:0,z:0,r:0.4*J}}}function JW(J=1){let Q=new Q0(new U7(0.85,0),d0.stoneDark);return Q.scale.set(J*(0.8+Math.random()*0.5),J*(0.55+Math.random()*0.4),J*(0.8+Math.random()*0.5)),Q.rotation.y=Math.random()*Math.PI,Q.position.y=J*0.22,new t0().add(Q),{mesh:Q,collider:{x:0,z:0,r:J*0.85}}}function OY(J){let Q=new t0,Z=new Q0(new L9(0.05,0.07,2.1,6),d0.woodDark);Z.position.y=1.05;let K=new Q0(new L9(0.16,0.1,0.16,8),d0.iron);K.position.y=2.16,Q.add(Z,K);let W=new cJ(new _J({map:yQ(),color:16755004,transparent:!0,blending:BJ,depthWrite:!1}));W.position.y=2.5,W.scale.set(0.55,0.85,1),Q.add(W);let H=J?new VQ(16751164,0,9,2):void 0;if(H)H.position.y=2.5,Q.add(H);return{group:Q,light:H,flame:W,seed:Math.random()*100}}function RY(){let J=new t0,Q=new Q0(new u0(0.9,0.5,0.6),d0.woodDark);Q.position.y=0.25;let Z=new Q0(new u0(0.94,0.1,0.64),d0.gold);Z.position.y=0.32;let K=new Q0(new u0(0.9,0.28,0.6),d0.wood);K.position.y=0.64;let W=new Q0(new u0(0.14,0.16,0.05),d0.gold);return W.position.set(0,0.5,0.32),J.add(Q,Z,K,W),K.geometry.translate(0,0.14,0),K.position.y=0.5,{group:J,lid:K,collider:{x:0,z:0,r:0.8}}}function MY(){let J=new t0,Q=new Q0(new i7(0.22,0),d0.crystal);Q.position.y=0.9;let Z=new cJ(new _J({map:yQ(),color:16747050,transparent:!0,blending:BJ,opacity:0.6,depthWrite:!1}));return Z.position.y=0.9,Z.scale.set(1.4,1.4,1),J.add(Q,Z),{group:J,core:Q}}function QW(){let J=new t0,Q=new Q0(new a7(1.5,0.14,10,40),d0.gold);Q.position.y=1.9;let Z=new Q0(new H8(1.42,36),new k9({transparent:!0,side:F9,depthWrite:!1,uniforms:{uTime:{value:0},uColor:{value:new X0(9062930)}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:`
        uniform float uTime; uniform vec3 uColor; varying vec2 vUv;
        void main(){
          vec2 c = vUv - 0.5;
          float r = length(c) * 2.0;
          float a = atan(c.y, c.x);
          float swirl = sin(a * 3.0 - uTime * 2.2 + r * 9.0) * 0.5 + 0.5;
          float alpha = smoothstep(1.0, 0.25, r) * (0.35 + swirl * 0.45);
          vec3 col = uColor * (0.6 + swirl * 0.9) + vec3(1.0, 0.75, 0.35) * smoothstep(0.9, 0.0, r) * 0.5;
          gl_FragColor = vec4(col, alpha);
        }`}));Z.position.y=1.9;let K=new Q0(new u0(0.5,3.6,0.5),d0.stoneDark);K.position.set(-1.85,1.8,0);let W=K.clone();W.position.x=1.85;let H=new Q0(new u0(4.4,0.5,0.6),d0.stone);return H.position.y=3.7,J.add(Q,Z,K,W,H),{group:J,ring:Q,disc:Z}}function ZW(J){let Q=new t0,Z=new l0({color:14263162,roughness:0.8}),K=new l0({color:J.tunic,roughness:0.85}),W=new l0({color:J.trim??14264636,metalness:0.6,roughness:0.35}),H=new t0;H.position.y=0.62;let $=new t0;$.position.y=0;let Y=new Q0(new u0(0.44,0.52,0.26),K);Y.position.y=0.26;let U=new Q0(new u0(0.46,0.09,0.28),W);U.position.y=0.02,$.add(Y,U),H.add($);let X=new t0;X.position.y=0.62;let N=new Q0(new u0(0.26,0.28,0.24),Z);if(N.position.y=0.14,X.add(N),J.guard){let q=new Q0(new LJ(0.17,10,8,0,Math.PI*2,0,Math.PI/2),W);q.position.y=0.18,X.add(q)}else{let q=new Q0(new u0(0.27,0.1,0.25),new l0({color:3811866,roughness:0.9}));q.position.y=0.27,X.add(q)}$.add(X);let E=(q)=>{let I=new t0;I.position.set(q*0.29,0.46,0);let z=new Q0(new u0(0.11,0.34,0.12),K);z.position.y=-0.17;let V=new Q0(new u0(0.095,0.3,0.1),Z);return V.position.y=-0.46,I.add(z,V),I},G=E(-1),F=E(1);$.add(G,F);let R=(q)=>{let I=new t0;I.position.set(q*0.12,0.62,0);let z=new Q0(new u0(0.14,0.34,0.15),K);z.position.y=-0.17;let V=new Q0(new u0(0.12,0.3,0.13),new l0({color:4863264,roughness:0.9}));return V.position.y=-0.47,I.add(z,V),I},B=R(-1),D=R(1);if(Q.add(H,B,D),J.scale)Q.scale.setScalar(J.scale);return{group:Q,torso:$,head:X,armL:G,armR:F,legL:B,legR:D}}function LY(){let J=new t0,Q=new l0({color:10119738,roughness:0.9}),Z=new l0({color:6964514,roughness:0.9}),K=new Q0(new u0(0.9,0.44,0.4),Q);K.position.y=0.72;let W=new Q0(new u0(0.18,0.42,0.18),Q);W.position.set(0.42,1,0),W.rotation.z=-0.4;let H=new t0;H.position.set(0.56,1.22,0);let $=new Q0(new u0(0.3,0.2,0.18),Q),Y=new Q0(new L9(0.02,0.035,0.36,5),Z);Y.rotation.z=0.5,Y.position.set(0.02,0.18,0.07);let U=Y.clone();U.position.z=-0.07,H.add($,Y,U);let X=[];for(let[N,E]of[[0.32,0.14],[0.32,-0.14],[-0.32,0.14],[-0.32,-0.14]]){let G=new t0;G.position.set(N,0.5,E);let F=new Q0(new u0(0.09,0.5,0.09),Q);F.position.y=-0.25,G.add(F),X.push(G),J.add(G)}return J.add(K,W,H),{group:J,legs:X,head:H}}function VY(){let J=new t0,Q=new l0({color:2763316,roughness:0.8,side:F9}),Z=new Q0(new ZJ(0.09,0.4,5),Q);Z.rotation.x=Math.PI/2;let K=new Q0(new c9(0.5,0.16),Q);K.position.x=0.26;let W=K.clone();return W.position.x=-0.26,J.add(Z,K,W),{group:J,wings:[K,W]}}var Y6=null;function yQ(){if(Y6)return Y6;let J=document.createElement("canvas");J.width=J.height=64;let Q=J.getContext("2d"),Z=Q.createRadialGradient(32,32,2,32,32,30);return Z.addColorStop(0,"rgba(255,240,200,1)"),Z.addColorStop(0.35,"rgba(255,180,80,0.75)"),Z.addColorStop(0.7,"rgba(255,110,30,0.25)"),Z.addColorStop(1,"rgba(255,80,20,0)"),Q.fillStyle=Z,Q.fillRect(0,0,64,64),Y6=new Y7(J),Y6.colorSpace=YJ,Y6}var KW=-1.05,$8=(J)=>Math.sin(J*0.032)*13+7;function E9(J,Q){let Z=Math.sin(J*0.045)*Math.cos(Q*0.052)*1.1+Math.sin(J*0.11+3.1)*Math.cos(Q*0.093+1.7)*0.5+Math.sin((J+Q)*0.023+2)*1.6,K=Math.hypot(J,Q),W=PJ.smoothstep(K,8,26);Z*=W,Z+=PJ.smoothstep(K,58,92)*(Math.abs(Math.sin(J*0.08)*Math.cos(Q*0.07))*10+6);let H=Math.abs(J-$8(Q));if(H<6)Z-=Math.pow(1-H/6,1.5)*2.4;return Z}var kY={dawn:{trees:"oak",hasGate:!0,fog:2761784,skyTint:16767392,grass:1},emberVillage:{trees:"pine",hasBazaar:!1,fog:3350554,skyTint:16751184,grass:0.6},alliesField:{trees:"oak",hasBazaar:!0,fog:2633786,skyTint:16771248,grass:1},oldBazaar:{trees:"oak",hasBazaar:!0,fog:3155998,skyTint:16760944,grass:0.4},greenPlain:{trees:"oak",fog:2372906,skyTint:14221264,grass:1.2},emeraldForest:{trees:"mixed",fog:1849382,skyTint:11075528,grass:1.2},brightRiver:{trees:"mixed",fog:2242120,skyTint:12577023,grass:1},guardianMountains:{trees:"pine",fog:2764864,skyTint:13621503,grass:0.7},guardianKeep:{trees:"pine",hasKeep:!0,fog:2501690,skyTint:13621503,grass:0.7},silentRuins:{trees:"pine",hasRuins:!0,fog:2302004,skyTint:12103935,grass:0.5,night:!0},redGate:{trees:"oak",hasGate:!0,hasKeep:!0,fog:3676186,skyTint:16752752,grass:0.8},mistGate:{trees:"pine",hasGate:!0,fog:2436152,skyTint:11191528,grass:0.8},coldStoneVillage:{trees:"pine",fog:2369584,skyTint:12110048,grass:0.5},chainBridge:{trees:"pine",fog:2238516,skyTint:10138840,grass:0.5},shadowBazaar:{trees:"pine",hasBazaar:!0,fog:1974832,skyTint:8952008,grass:0.3},blackPineForest:{trees:"pine",fog:1449500,skyTint:7907464,grass:0.8},lanternMarsh:{trees:"pine",fog:1844262,skyTint:8964264,grass:0.6},darkRiver:{trees:"pine",fog:1843244,skyTint:8951992,grass:0.6},ravenMountains:{trees:"pine",fog:2105902,skyTint:9996480,grass:0.5},seerTower:{trees:"pine",hasRuins:!0,fog:1974320,skyTint:9998552,grass:0.5,night:!0},dezhmaarRuins:{trees:"pine",hasRuins:!0,fog:2237488,skyTint:10528976,grass:0.4},nightGate:{trees:"pine",hasGate:!0,fog:1447972,skyTint:8423616,grass:0.4,night:!0},generic:{trees:"mixed",fog:2633788,skyTint:13162751,grass:1}};class WW{canvas;realm;land;input;cb;renderer;scene=new H7;camera;clock=new G7;raf=0;disposed=!1;prof;theme;colliders=[];torches=[];chests=[];crystals=[];npcs=[];deers=[];birds=[];interactables=[];player;playerPos=new S(0,0,10);playerYaw=Math.PI;camYaw=Math.PI;walkPhase=0;stepTimer=0;near=null;sun;hemi;skyMat;waterMat;stars;clouds=[];fogColor=new X0(2633788);questCrystalCount=0;questActive=!1;bannerMats=[];constructor(J,Q,Z,K,W,H,$){this.canvas=J;this.realm=Z;this.land=K;this.input=W;this.cb=H;this.prof=Q,this.theme={trees:"mixed",hasBazaar:!1,hasKeep:!1,hasRuins:!1,hasGate:!1,fog:2633788,skyTint:13162751,grass:1,...kY[K.theme]??kY.generic},this.renderer=new K6({canvas:J,antialias:Q.tier==="high",powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,Q.dpr)),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.renderer.outputColorSpace=YJ,this.renderer.toneMapping=M8,this.renderer.toneMappingExposure=1.18,this.camera=new h9(50,window.innerWidth/window.innerHeight,0.1,400),this.camera.position.set(0,6,18),this.scene.fog=new l7(this.theme.fog,0.016),this.fogColor.set(this.theme.fog),this.buildSky(),this.buildLights(),this.buildTerrain(),this.buildWater(),this.buildVillage($),this.buildNature(),this.buildWildlife(),this.buildPlayer(),this.buildQuest(),window.addEventListener("resize",this.onResize),window.__world=this}buildSky(){let J=new LJ(180,24,16);this.skyMat=new k9({side:f9,depthWrite:!1,uniforms:{uTop:{value:new X0(1714770)},uHorizon:{value:new X0(6979752)},uGlow:{value:new X0(this.theme.skyTint)},uSunDir:{value:new S(0.4,0.8,0.3)},uNight:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        uniform vec3 uTop, uHorizon, uGlow, uSunDir; uniform float uNight;
        varying vec3 vDir;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
        void main(){
          float h = clamp(vDir.y, -0.15, 1.0);
          vec3 col = mix(uHorizon, uTop, smoothstep(0.0, 0.5, h));
          float sd = max(dot(normalize(vDir), normalize(uSunDir)), 0.0);
          col += uGlow * pow(sd, 5.0) * 0.5 * (1.0 - uNight);
          col += uGlow * pow(max(0.0, 1.0 - abs(h)*3.0), 2.0) * 0.22 * (1.0 - uNight * 0.6);
          vec2 sp = vDir.xz / max(vDir.y, 0.06) * 2.0;
          float st = step(0.9965, hash(floor(sp*50.0))) * smoothstep(0.18, 0.6, vDir.y);
          col += vec3(0.9,0.92,1.0) * st * uNight;
          gl_FragColor = vec4(col, 1.0);
        }`}),this.scene.add(new Q0(J,this.skyMat));let Q=this.prof.tier==="high"?300:140,Z=new Float32Array(Q*3);for(let H=0;H<Q;H++){let $=Math.random()*Math.PI*2,Y=Math.acos(Math.random()*0.8),U=170;Z[H*3]=170*Math.sin(Y)*Math.cos($),Z[H*3+1]=170*Math.cos(Y),Z[H*3+2]=170*Math.sin(Y)*Math.sin($)}let K=new C9;K.setAttribute("position",new x9(Z,3)),this.stars=new $7(K,new u7({color:13490431,size:1.4,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1})),this.scene.add(this.stars);let W=yQ();for(let H=0;H<5;H++){let $=new cJ(new _J({map:W,color:14214392,transparent:!0,opacity:0.22,depthWrite:!1}));$.scale.set(26+Math.random()*20,9+Math.random()*6,1),$.position.set((Math.random()-0.5)*160,30+Math.random()*14,(Math.random()-0.5)*160),this.clouds.push($),this.scene.add($)}}buildLights(){if(this.hemi=new RQ(12570879,3820074,0.75),this.scene.add(this.hemi),this.sun=new _8(16771264,2),this.sun.position.set(30,50,20),this.prof.worldShadowMap>0){this.sun.castShadow=!0,this.sun.shadow.mapSize.set(this.prof.worldShadowMap,this.prof.worldShadowMap);let J=this.sun.shadow.camera;J.left=-40,J.right=40,J.top=40,J.bottom=-40,J.far=140,this.sun.shadow.bias=-0.0008}this.scene.add(this.sun)}buildTerrain(){let Q=this.prof.terrainSegments,Z=new c9(190,190,Q,Q);Z.rotateX(-Math.PI/2);let K=Z.attributes.position,W=new Float32Array(K.count*3),H=new X0(4881466),$=new X0(6196288),Y=new X0(7232058),U=new X0(7828074);for(let E=0;E<K.count;E++){let G=K.getX(E),F=K.getZ(E),R=E9(G,F);K.setY(E,R);let B=Math.abs(G-$8(F)),D;if(B<5.4)D=Y.clone().lerp(U,PJ.clamp((5.4-B)/4,0,1));else if(R>5.5)D=U.clone().lerp(new X0(14212328),PJ.clamp((R-5.5)/8,0,0.8));else{let q=(Math.sin(G*0.8)+Math.cos(F*0.7))*0.5;D=H.clone().lerp($,q*0.5+0.5),D.lerp(Y,PJ.clamp(R*0.12,0,0.3))}W[E*3]=D.r,W[E*3+1]=D.g,W[E*3+2]=D.b}Z.setAttribute("color",new x9(W,3)),Z.computeVertexNormals();let X=new l0({vertexColors:!0,roughness:0.95,metalness:0}),N=new Q0(Z,X);N.receiveShadow=this.prof.worldShadowMap>0,this.scene.add(N)}buildWater(){let J=new s7,Q=-96,Z=96,K=[];for(let X=-96;X<=96;X+=6)K.push(new F0($8(X)-3.4,X));for(let X=96;X>=-96;X-=6)K.push(new F0($8(X)+3.4,X));J.moveTo(K[0].x,K[0].y);for(let X=1;X<K.length;X++)J.lineTo(K[X].x,K[X].y);let W=new o7(J,24);W.rotateX(-Math.PI/2),this.waterMat=new k9({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uDeep:{value:new X0(1327198)},uShallow:{value:new X0(3833512)},uNight:{value:0}},vertexShader:`
        uniform float uTime;
        varying vec2 vW; varying float vY;
        void main(){
          vec3 p = position;
          p.y += sin(p.x * 1.2 + uTime * 1.8) * 0.045 + cos(p.z * 1.6 + uTime * 2.3) * 0.04;
          vY = p.y; vW = p.xz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }`,fragmentShader:`
        uniform float uTime, uNight; uniform vec3 uDeep, uShallow;
        varying vec2 vW; varying float vY;
        void main(){
          float sp = sin(vW.x * 2.4 + uTime * 2.0) * cos(vW.y * 1.8 - uTime * 1.4);
          vec3 col = mix(uDeep, uShallow, 0.5 + sp * 0.3);
          col *= (1.0 - uNight * 0.55);
          float glint = pow(max(sp, 0.0), 6.0) * 0.7 * (1.0 - uNight * 0.5);
          col += vec3(1.0, 0.95, 0.8) * glint;
          gl_FragColor = vec4(col, 0.82);
        }`});let H=new Q0(W,this.waterMat);H.position.y=KW,this.scene.add(H);let $=4,Y=$8($),U=new t0;for(let X=-4;X<=4;X++){let N=new Q0(new u0(2.6,0.28,1.1),d0.stone),E=X/4;N.position.set(Y,KW+1.55-E*E*0.5,$+X*1.05),U.add(N)}for(let X of[-1,1]){let N=new Q0(new u0(0.18,0.5,9.4),d0.stoneDark);N.position.set(Y+X*1.3,KW+1.85,$),U.add(N)}this.scene.add(U)}addCol(J,Q,Z){this.colliders.push({x:J,z:Q,r:Z})}buildVillage(J){let Q=NY(this.realm.color),Z=J?SQ(J,J,{strength:0.5,speed:1.6,gust:0.4,seed:Math.random()}):null;if(Z)this.bannerMats.push(Z);let K=DY();K.group.position.set(0,E9(0,0),0),this.scene.add(K.group),this.addCol(0,0,1.6);let W=[[-4,-3],[4,-3],[-4,4],[4,4]];for(let[Y,U]of W){let X=OY(this.prof.tier!=="low");X.group.position.set(Y,E9(Y,U),U),this.torches.push(X),this.scene.add(X.group),this.addCol(Y,U,0.3)}let H=7;for(let Y=0;Y<H;Y++){let U=Y/H*Math.PI*2+0.35,X=15+Y%2*3.2,N=Math.cos(U)*X,E=Math.sin(U)*X,G=qY(Y,Q);if(G.group.position.set(N,E9(N,E),E),G.group.rotation.y=-U+Math.PI/2+(Math.random()-0.5)*0.3,this.prof.worldShadowMap>0)G.group.traverse((B)=>{if(B instanceof Q0)B.castShadow=!0});this.scene.add(G.group);let F=N+Math.sin(G.group.rotation.y)*0.5,R=E+Math.cos(G.group.rotation.y)*0.5;this.addCol(N,E,G.collider.r+0.4)}if(this.theme.hasBazaar){let Y=[10690598,3042984,13142570];for(let U=0;U<4;U++){let X=0.9+U*0.5,N=9.5,E=Math.cos(X)*9.5,G=Math.sin(X)*9.5,F=FY(Y[U%3]);F.group.position.set(E,E9(E,G),G),F.group.rotation.y=-X+Math.PI,this.scene.add(F.group),this.addCol(E,G,F.collider.r)}}if(this.theme.hasKeep){let Y=EY(Q),U=0,X=-30;if(Y.group.position.set(0,E9(0,-30)+0.4,-30),this.prof.worldShadowMap>0)Y.group.traverse((N)=>{if(N instanceof Q0)N.castShadow=!0});this.scene.add(Y.group);for(let N of Y.colliders)this.addCol(0+N.x,-30+N.z,N.r);if(Z)for(let N of[-4.2,4.2]){let E=new Q0(new c9(1.05,1.5),Z);E.position.set(0+N,E9(0,-30)+9.2,-26.9),E.rotation.y=Math.PI,this.scene.add(E)}}if(this.theme.hasRuins){for(let X=0;X<6;X++){let N=X*1.1,E=1+Math.random()*2.4,G=new Q0(new u0(2.2,E,0.7),d0.stoneDark);G.position.set(24+Math.cos(N)*5,E9(24,20)+E/2,20+Math.sin(N)*5),G.rotation.y=N+0.4,G.rotation.z=(Math.random()-0.5)*0.08,this.scene.add(G),this.addCol(G.position.x,G.position.z,1.3)}for(let X=0;X<4;X++){let N=JW(0.7+Math.random()*0.5);N.mesh.position.set(24+(Math.random()-0.5)*8,E9(24,20)+0.2,20+(Math.random()-0.5)*8),this.scene.add(N.mesh)}}if(this.theme.hasGate){let X=QW();X.group.position.set(0,E9(0,-52),-52),X.group.scale.setScalar(2.1),this.scene.add(X.group),this.addCol(-4,-52,1.2),this.addCol(4,-52,1.2)}let $=QW();$.group.position.set(0,E9(0,19),19),this.scene.add($.group),this.interactables.push({id:"portal",type:"portal",label:"بازگشت به سرزمین‌ها",pos:new S(0,E9(0,19),19)}),$.disc.material.uniforms.uColor.value.set(new X0(this.realm.color)),this.portalDisc=$.disc}portalDisc;buildNature(){let J=this.prof.treeCount,Q=this.theme.trees==="oak"?jQ:this.theme.trees==="pine"?vQ:i%2?jQ:vQ,Z=0,K=0;while(Z<J&&K++<J*8){let W=Math.random()*Math.PI*2,H=24+Math.random()*58,$=Math.cos(W)*H,Y=Math.sin(W)*H,U=E9($,Y);if(U>6||U<-0.4)continue;if(Math.abs($-$8(Y))<5.5)continue;let X=this.theme.trees==="mixed"?Z%2?jQ(0.9+Math.random()*0.5):vQ(0.9+Math.random()*0.5):Q(0.85+Math.random()*0.6);if(X.group.position.set($,U,Y),X.group.rotation.y=Math.random()*Math.PI*2,this.prof.worldShadowMap>0)X.group.traverse((N)=>{if(N instanceof Q0)N.castShadow=!0});this.scene.add(X.group),this.addCol($,Y,X.collider.r+0.25),Z++}for(let W=0;W<14;W++){let H=Math.random()*Math.PI*2,$=14+Math.random()*66,Y=Math.cos(H)*$,U=Math.sin(H)*$;if(E9(Y,U)>8)continue;let X=JW(0.5+Math.random()*1.1);X.mesh.position.set(Y,E9(Y,U),U),this.scene.add(X.mesh),this.addCol(Y,U,X.collider.r)}if(this.prof.grassInstances>0){let W=new c9(0.22,0.5);W.translate(0,0.25,0);let H=new l0({color:5605948,roughness:0.9,side:F9}),$=new $Q(W,H,this.prof.grassInstances),Y=new J9,U=new MJ;for(let X=0;X<this.prof.grassInstances;X++){let N=Math.random()*Math.PI*2,E=8+Math.random()*60,G=Math.cos(N)*E,F=Math.sin(N)*E,R=E9(G,F);if(R>5||R<0){X--;continue}U.setFromAxisAngle(new S(0,1,0),Math.random()*Math.PI),Y.compose(new S(G,R,F),U,new S(1,0.7+Math.random()*0.8,1)),$.setMatrixAt(X,Y)}this.scene.add($)}}buildWildlife(){let J=[{id:"quest",label:"نگهبان سرزمین",tunic:3493998,pos:[-3.2,-6.5],guard:!0},{id:"merchant",label:"بازرگان",tunic:8014490,pos:[4.5,-3.5]},{id:"villager",label:"اهالی دهکده",tunic:9071162,pos:[-5.5,2.5]}];for(let Q of J){let Z=ZW({tunic:Q.tunic,guard:Q.guard}),K=new S(Q.pos[0],E9(Q.pos[0],Q.pos[1]),Q.pos[1]);Z.group.position.copy(K),this.scene.add(Z.group),this.npcs.push({h:Z,anchor:K.clone(),wanderAngle:Math.random()*Math.PI*2,timer:Math.random()*4,pos:K.clone()}),this.interactables.push({id:Q.id,type:"npc",label:Q.label,pos:K.clone()})}for(let Q=0;Q<3;Q++){let Z=LY(),K=Math.random()*Math.PI*2,W=Math.cos(K)*34,H=Math.sin(K)*34;Z.group.position.set(W,E9(W,H),H),this.scene.add(Z.group),this.deers.push({d:Z,angle:Math.random()*Math.PI*2,timer:0,center:new S(W,0,H)})}for(let Q=0;Q<5;Q++){let Z=VY();this.scene.add(Z.group),this.birds.push({b:Z,r:26+Math.random()*30,h:16+Math.random()*10,speed:0.14+Math.random()*0.1,phase:Math.random()*Math.PI*2})}}buildPlayer(){if(this.player=ZW({tunic:new X0(this.realm.color).getHex(),trim:14264636}),this.playerPos.set(0,E9(0,12),12),this.player.group.position.copy(this.playerPos),this.prof.worldShadowMap>0)this.player.group.traverse((J)=>{if(J instanceof Q0)J.castShadow=!0});this.scene.add(this.player.group)}buildQuest(){[[-30,-18],[26,30],[18,-34]].forEach(([Q,Z],K)=>{let W=RY();W.group.position.set(Q,E9(Q,Z),Z),W.group.rotation.y=Math.random()*Math.PI*2,this.scene.add(W.group),this.addCol(Q,Z,W.collider.r),this.chests.push({id:`chest${K}`,group:W.group,lid:W.lid,opened:!1,anim:0}),this.interactables.push({id:`chest${K}`,type:"chest",label:"صندوق گنج",pos:new S(Q,0,Z)})}),this.spawnCrystals()}spawnCrystals(){for(let Z of this.crystals)this.scene.remove(Z.group);this.crystals=[],this.questCrystalCount=0;let J=0,Q=0;while(J<5&&Q++<200){let Z=Math.random()*Math.PI*2,K=20+Math.random()*44,W=Math.cos(Z)*K,H=Math.sin(Z)*K,$=E9(W,H);if($>5.5||$<-0.5)continue;if(Math.abs(W-$8(H))<5)continue;let Y=MY();Y.group.position.set(W,$,H),this.scene.add(Y.group),this.crystals.push({group:Y.group,taken:!1,seed:Math.random()*10}),J++}this.cb.onCrystalCollected(0,5)}onResize=()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight,!1)};start(){if(this.raf)return;this.clock.start();let J=()=>{if(this.disposed)return;this.raf=requestAnimationFrame(J);try{this.update(),this.renderer.render(this.scene,this.camera)}catch(Q){throw console.error("[WorldScene loop]",Q),Q}};this.raf=requestAnimationFrame(J)}stop(){if(this.raf)cancelAnimationFrame(this.raf);this.raf=0}dispose(){this.disposed=!0,this.stop(),window.removeEventListener("resize",this.onResize),this.scene.traverse((J)=>{let Q=J;if(Q.geometry)Q.geometry.dispose();let Z=Q.material;if(Array.isArray(Z))Z.forEach((K)=>K.dispose());else if(Z)Z.dispose()}),this.renderer.dispose()}nearestInteract(){let J=null,Q=3;for(let Z of this.interactables){if(Z.type==="chest"&&this.chests.find((W)=>W.id===Z.id)?.opened)continue;let K=Math.hypot(Z.pos.x-this.playerPos.x,Z.pos.z-this.playerPos.z);if(K<Q)Q=K,J={type:Z.type,id:Z.id,label:Z.label}}return J}interact(){let J=this.near;if(!J)return;if(J.type==="npc")N9.uiClick(),this.cb.onTalk(J.id);else if(J.type==="chest"){let Q=this.chests.find((Z)=>Z.id===J.id);if(!Q.opened){Q.opened=!0,N9.chest();let Z=5+Math.floor(Math.random()*11);this.cb.onChestOpened(J.id,Z)}}else if(J.type==="portal")N9.gateOpen(),this.cb.onExit()}update(){let J=Math.min(this.clock.getDelta(),0.05),Q=this.clock.getElapsedTime();this.updateDayNight(Q,J),this.updatePlayer(J),this.updateNpcs(J,Q),this.updateWildlife(J,Q),this.updateProps(J,Q);let Z=this.nearestInteract();if((Z?.id??null)!==(this.near?.id??null)||(Z?.type??null)!==(this.near?.type??null))this.near=Z,this.cb.onNear(Z)}updateDayNight(J,Q){let W=(J+95)%300/300*Math.PI*2-Math.PI/2,H=Math.sin(W),$=new S(Math.cos(W)*0.8,H,0.45).normalize();this.sun.position.copy($).multiplyScalar(70);let Y=PJ.clamp(H*2.2,0,1),U=PJ.clamp(1-Math.abs(H)*3.2,0,1),X=this.theme.night?Math.max(Y,0.72):0,N=this.theme.night?0.75:PJ.clamp(1-Y,0,1)*(H<0.1?1:0);this.sun.intensity=0.6+Y*4.2,this.sun.color.set(16771264).lerp(new X0(16742970),U*0.8),this.hemi.intensity=0.55+Y*1.9,this.hemi.color.set(3162218).lerp(new X0(12570879),Y);let E=new X0(395800).lerp(new X0(4156596),Y),G=new X0(1317420).lerp(new X0(11061480),Y);G.lerp(new X0(this.theme.skyTint),U*0.5),this.skyMat.uniforms.uTop.value.copy(E),this.skyMat.uniforms.uHorizon.value.copy(G),this.skyMat.uniforms.uSunDir.value.copy($),this.skyMat.uniforms.uNight.value=this.theme.night?0.7:N,this.stars.material.opacity=this.theme.night?0.9:N*0.9,this.waterMat.uniforms.uNight.value=this.theme.night?0.6:N;let F=new X0(this.theme.fog).lerp(new X0(9087176),Y*0.45),R=new X0(658970);this.scene.fog.color.copy(R.lerp(F,this.theme.night?0.3:Y)),this.renderer.setClearColor(this.scene.fog.color);let B=this.theme.night?1:1-Y;for(let D of this.torches){if(D.light)D.light.intensity=B*(7+Math.sin(J*9+D.seed)*1.4);let q=0.75+Math.sin(J*11+D.seed)*0.12;D.flame.scale.set(0.55*q,0.85*q,1),D.flame.material.opacity=0.25+B*0.75}for(let D of this.clouds){if(D.position.x+=Q*0.7,D.position.x>110)D.position.x=-110;D.material.opacity=0.1+Y*0.16}}updatePlayer(J){this.camYaw-=this.input.look.dx*0.0045,this.input.look.dx=0;let Q=this.input.move,Z=Math.min(Math.hypot(Q.x,Q.y),1),K=(this.input.run?6:3.3)*(Z>0.12?1:0);if(Z>0.12){let F=Math.atan2(Q.x,Q.y)+this.camYaw+Math.PI,R=this.playerPos.x+Math.sin(F)*K*Z*J,B=this.playerPos.z+Math.cos(F)*K*Z*J,D=R,q=B;for(let _ of this.colliders){let C=D-_.x,O=q-_.z,k=Math.hypot(C,O),w=_.r+0.35;if(k<w&&k>0.0001)D=_.x+C/k*w,q=_.z+O/k*w}let I=Math.hypot(D,q);if(I>86)D*=86/I,q*=86/I;let V=F+Math.PI-this.playerYaw;while(V>Math.PI)V-=Math.PI*2;while(V<-Math.PI)V+=Math.PI*2;if(this.playerYaw+=V*Math.min(1,J*10),this.playerPos.x=D,this.playerPos.z=q,this.walkPhase+=J*(this.input.run?11:6.5)*Z,this.stepTimer-=J,this.stepTimer<=0)N9.step(),this.stepTimer=this.input.run?0.28:0.42}else this.walkPhase+=J*1.2;this.playerPos.y=E9(this.playerPos.x,this.playerPos.z),this.player.group.position.copy(this.playerPos),this.player.group.rotation.y=this.playerYaw;let W=Math.sin(this.walkPhase),H=Math.cos(this.walkPhase*2),$=Z>0.12?this.input.run?0.85:0.6:0.12;this.player.legL.rotation.x=W*$,this.player.legR.rotation.x=-W*$,this.player.armL.rotation.x=-W*$*0.8,this.player.armR.rotation.x=W*$*0.8,this.player.torso.rotation.y=H*0.04*$,this.player.torso.position.y=Math.abs(W)*0.045*$;for(let G of this.crystals){if(G.taken)continue;if(Math.hypot(G.group.position.x-this.playerPos.x,G.group.position.z-this.playerPos.z)<1.7){if(G.taken=!0,G.group.visible=!1,this.questCrystalCount++,N9.collect(),this.cb.onCrystalCollected(this.questCrystalCount,5),this.questCrystalCount>=5&&!this.questActive)this.questActive=!0;if(this.questCrystalCount>=5)this.cb.onToast("همهٔ کریستال‌ها یافت شد! نزد نگهبان سرزمین بازگرد.")}}let Y=6.4,U=2.6,X=this.playerPos.x+Math.sin(this.camYaw)*Y,N=this.playerPos.z+Math.cos(this.camYaw)*Y,E=this.playerPos.y+U;this.camera.position.lerp(new S(X,E,N),Math.min(1,J*6)),this.camera.lookAt(this.playerPos.x,this.playerPos.y+1.5,this.playerPos.z)}updateNpcs(J,Q){for(let Z of this.npcs){if(Z.timer-=J,Z.timer<=0)Z.timer=2+Math.random()*4,Z.wanderAngle=Math.random()*Math.PI*2;let K=Math.sin(Q*0.5+Z.anchor.x)*0.5,W=Z.anchor.x+Math.cos(Z.wanderAngle)*1.3*(0.4+Math.abs(K)),H=Z.anchor.z+Math.sin(Z.wanderAngle)*1.3*(0.4+Math.abs(K));if(Z.pos.x+=(W-Z.pos.x)*Math.min(1,J*0.7),Z.pos.z+=(H-Z.pos.z)*Math.min(1,J*0.7),Z.pos.y=E9(Z.pos.x,Z.pos.z),Z.h.group.position.copy(Z.pos),Math.hypot(this.playerPos.x-Z.pos.x,this.playerPos.z-Z.pos.z)<5)Z.h.group.rotation.y=Math.atan2(this.playerPos.x-Z.pos.x,this.playerPos.z-Z.pos.z);else Z.h.group.rotation.y+=J*0.3;Z.h.torso.position.y=Math.sin(Q*1.8+Z.anchor.x)*0.02,Z.h.armL.rotation.x=Math.sin(Q*1.6+Z.anchor.z)*0.08,Z.h.armR.rotation.x=-Math.sin(Q*1.6+Z.anchor.x)*0.08}}updateWildlife(J,Q){for(let Z of this.birds){let K=Q*Z.speed+Z.phase;Z.b.group.position.set(Math.cos(K)*Z.r,Z.h+Math.sin(Q*0.7+Z.phase)*1.5,Math.sin(K)*Z.r),Z.b.group.rotation.y=-K+Math.PI/2;let W=Math.sin(Q*7+Z.phase)*0.55;Z.b.wings[0].rotation.y=W,Z.b.wings[1].rotation.y=-W}for(let Z of this.deers){if(Z.timer-=J,Z.timer<=0)Z.timer=3+Math.random()*5,Z.angle+=(Math.random()-0.5)*2.4;let K=1.1,W=Z.d.group.position.x+Math.sin(Z.angle)*K*J,H=Z.d.group.position.z+Math.cos(Z.angle)*K*J;if(E9(W,H)<5&&Math.abs(W-$8(H))>5.5)Z.d.group.position.set(W,E9(W,H),H);else Z.angle+=2.2;Z.d.group.rotation.y=Z.angle+Math.PI;let $=Math.sin(Q*6+Z.angle);Z.d.legs[0].rotation.x=$*0.5,Z.d.legs[1].rotation.x=-$*0.5,Z.d.legs[2].rotation.x=-$*0.5,Z.d.legs[3].rotation.x=$*0.5}}updateProps(J,Q){for(let Z of this.chests)if(Z.opened&&Z.anim<1)Z.anim=Math.min(1,Z.anim+J*2.2),Z.lid.rotation.x=-Z.anim*1.9;for(let Z of this.crystals){if(Z.taken)continue;Z.group.position.y=E9(Z.group.position.x,Z.group.position.z)+0.15+Math.sin(Q*2+Z.seed)*0.12,Z.group.rotation.y=Q*1.4+Z.seed}if(this.portalDisc)this.portalDisc.material.uniforms.uTime.value=Q;for(let Z of this.bannerMats)Z.uniforms.uTime.value=Q}completeQuest(){if(this.questCrystalCount>=5&&!this.questTurnedIn)return this.questTurnedIn=!0,N9.questDone(),this.cb.onQuestComplete(25),window.setTimeout(()=>{this.questTurnedIn=!1,this.questActive=!1,this.spawnCrystals()},2500),!0;return!1}questTurnedIn=!1}var _0=(J)=>{let Q=document.querySelector(J);if(!Q)throw Error("missing element: "+J);return Q},BY=D9.flatMap((J)=>[{key:J.id,url:J.flagCloth},{key:`${J.id}_n`,url:J.flagNormal}]),oE="title";var KJ=D9[0],AY=null,wY=null,X6=!1,YW="mid",TY=!1,bQ={},G6=null,N6=null,A8={move:{x:0,y:0},look:{dx:0},run:!1},WJ={got:0,total:5},IY=0,zY=0,PY=0,UW=null,U6=null,wJ=E7.get(),Y8={};function nJ(J){oE=J;for(let[Q,Z]of Object.entries(Y8))Z.classList.toggle("active",Q===J)}function fQ(J){let Q=_0("#toast");Q.textContent=J,Q.classList.add("on"),window.clearTimeout(IY),IY=window.setTimeout(()=>Q.classList.remove("on"),3400)}function aE(){let J=wJ.status==="online"?"":wJ.status==="connecting"?" connecting":" off",Q;if(wJ.status==="online")Q=`<span class="coin" aria-hidden="true"></span><span class="wt-num">${C8(wJ.balance??0)}</span>`;else if(wJ.status==="connecting")Q='<span class="dot-wait" aria-hidden="true"></span><span class="wt-txt">در حال اتصال…</span>';else Q='<span class="dot-off" aria-hidden="true"></span><span class="wt-txt">کیف پول: قطع</span>';return`<div class="wallet-chip${J}" title="${wJ.note||""}">${Q}</div>`}function hQ(J){wJ=J??E7.get();for(let Z of document.querySelectorAll(".wallet-slot"))Z.innerHTML=aE();let Q=_0("#title-wallet");if(wJ.status==="online")Q.innerHTML='<span class="coin" aria-hidden="true"></span> کیف پول متصل — موجودی رسمی از Backend';else if(wJ.status==="connecting")Q.innerHTML='<span class="dot-wait" aria-hidden="true"></span> در حال اتصال به سرور…';else Q.innerHTML='<span class="dot-off" aria-hidden="true"></span> اتصال به سرور برقرار نیست — موجودی نمایش داده نمی‌شود',Q.title=wJ.note||""}function GW(){try{let J=localStorage.getItem("lands.quality");if(J==="high"||J==="mid"||J==="low")return J}catch{}return UY()}function rE(){try{if(localStorage.getItem("lands.muted")==="1")X6=!0,N9.setMuted(!0),_0("#btn-mute").classList.add("muted");if(localStorage.getItem("lands.text")==="big")document.documentElement.classList.add("big-text")}catch{}}function tE(){_0("#btn-enter-game").addEventListener("click",()=>{N9.init(),N9.resume(),N9.startWind(1),N9.startMusic(),N9.uiClick(),nJ("loading"),eE()})}function eE(){let J=!1,Q=new OQ,Z=BY.length+D9.length,K=0,W=()=>{K++;let H=Math.round(K/Z*100);_0("#loading-fill").style.width=`${H}%`,_0("#loading-pct").textContent=C8(H)+"٪"};D9.forEach((H)=>{let $=new Image;$.onload=W,$.onerror=W,$.src=H.art}),Promise.all(BY.map(({key:H,url:$})=>new Promise((Y)=>{Q.load($,(U)=>{if(!J)U.colorSpace=YJ,bQ[H]=U;W(),Y()},void 0,()=>{W(),Y()})}))).then(()=>{if(J)return;YW=GW(),nJ("gates"),SY()}),window.addEventListener("gates-unload",()=>{J=!0},{once:!0})}function SY(){let J=_0("#gates-canvas"),Q=rK(GW()),Z={};for(let W of D9){let H=bQ[W.id],$=bQ[`${W.id}_n`];if(H&&$)Z[W.id]={cloth:H,normal:$}}let K=new eK(J,Q,Z);K.setLabelContainer(_0("#gate-labels")),K.setCallbacks({onFocused:(W)=>{let H=D9.find(($)=>$.id===W);KJ=H,_Y(),N9.setKey(H.note),N9.setWindIntensity(H.wind.strength)},onEnterRequested:(W)=>{let H=D9.find(($)=>$.id===W);jY(H)},onSound:(W)=>{if(W==="focus")N9.focusTick();else if(W==="sting")N9.selectSting(D9[0].note)}}),K.setFocus(D9[0].id,!0),K.start(),G6=K,window.clearTimeout(PY),PY=window.setTimeout(()=>{TY=!0,_0("#gates-enter").classList.add("in")},400),_Y()}function J1(){window.dispatchEvent(new Event("gates-unload")),G6?.dispose(),G6=null,_0("#gates-enter").classList.remove("in"),TY=!1}function _Y(){let J=_0("#realm-chip");J.style.borderColor=KJ.color,J.innerHTML=`<span class="realm-dot" style="background:${KJ.color};color:${KJ.color}"></span><b>${KJ.fa}</b><i>${KJ.motto}</i>`;let Q=_0("#gates-enter");Q.style.removeProperty("background"),Q.style.setProperty("--rg",KJ.color+"A6"),Q.querySelector(".enter-label").innerHTML=`<span class="enter-dot" style="background:${KJ.color};box-shadow:0 0 10px ${KJ.color}"></span>`+`ورود به ${KJ.fa}`}function Q1(){_0("#btn-mute").addEventListener("click",()=>{X6=!X6,N9.setMuted(X6),_0("#btn-mute").classList.toggle("muted",X6)}),_0("#arrow-right").addEventListener("click",()=>G6?.focusByOffset(1)),_0("#arrow-left").addEventListener("click",()=>G6?.focusByOffset(-1)),_0("#gates-enter").addEventListener("click",()=>{N9.selectSting(KJ.note),jY(KJ)})}function jY(J){AY=J,N9.gateOpen();let Q=_0("#intro-screen");Q.style.background=`radial-gradient(120% 90% at 50% 10%, ${J.color}44 0%, #05060c 62%)`,_0("#intro-art").style.backgroundImage=`url(${J.art})`,_0("#intro-kicker").style.color=J.accent,_0("#intro-kicker").textContent=`دروازهٔ ${J.fa} گشوده می‌شود`,_0("#intro-name").textContent=J.fa,_0("#intro-en").textContent=J.en,_0("#intro-lore").textContent=J.lore,nJ("intro"),window.clearTimeout(zY),zY=window.setTimeout(()=>{nJ("lands"),NW()},2400)}function NW(){let J=AY;_0("#lands-realm-name").textContent=J.fa,_0("#lands-realm-sub").textContent=`${J.en} · ${C8(J.lands.length)} سرزمین`,_0("#lands-hero").style.backgroundImage=`url(${J.art})`,hQ();let Q=_0("#lands-scroll");if(Q.innerHTML="",J.lands.forEach((Z,K)=>{let W=!J.unlocked,H=document.createElement("button");H.className=`land-card ${W?"locked":""}`,H.style.setProperty("--rc",J.color),H.style.setProperty("--ra",J.accent),H.innerHTML=`<div class="land-num">${C8(K+1)}</div><div class="land-body"><div class="land-name">${Z.fa}</div><div class="land-desc">${Z.desc}</div></div><div class="land-state">${W?'<span class="lock">قفل</span>':'<span class="go">ورود ←</span>'}</div>`,H.addEventListener("click",()=>{if(W){N9.uiClick(),fQ("این قلمرو هنوز دروازه‌اش بسته است — به‌زودی!");return}N9.gateOpen(),wY=Z,WJ={got:0,total:5},nJ("world"),K1()}),Q.appendChild(H)}),_0("#lands-locknote").style.display=J.unlocked?"none":"block",!J.unlocked)_0("#lands-locknote").textContent=`پرچم ${J.fa} باشکوه است، اما گذرش هنوز با پیمانِ نسخهٔ بعد گشوده می‌شود.`}function Z1(){_0("#btn-lands-back").addEventListener("click",()=>{N9.uiClick(),J1(),nJ("gates"),SY()})}function K1(){let J=KJ,Q=wY,Z=rK(GW());_0("#land-chip").innerHTML=`<span class="land-chip-realm" style="color:${J.accent}">${J.fa}</span>`+`<span class="land-chip-sep">·</span><span>${Q.fa}</span>`,hQ();try{localStorage.setItem("lands.lastLand",JSON.stringify({r:J.id,l:Q.id}))}catch{}try{document.body.classList.toggle("joy-right",localStorage.getItem("lands.joy")==="right")}catch{}let K=new WW(_0("#world-canvas"),Z,J,Q,A8,{onNear:(U)=>{let X=_0("#world-interact");if(U)X.style.display="flex",_0("#interact-label").textContent=U.label;else X.style.display="none"},onTalk:(U)=>{let X={quest:"نگهبان سرزمین",merchant:"بازرگان",villager:"اهالی دهکده"},N={quest:[`به ${Q.fa} خوش آمدی، مسافرِ ${J.fa}.`,"کریستال‌های شعله در سرزمین پراکنده شده‌اند؛ پنج کریستال بیاور تا برکتِ روز تجدید شود.","کارِ بزرگ از گام‌های کوچک ساخته می‌شود."],merchant:["وارد شو! هرچه از آتش و آهن و ادویه بخواهی همین‌جاست… فعلاً چشمک!","کریستال‌هایت را به نگهبان بده؛ بازارِ ما همیشه باز است."],villager:["امروز باد از سمت کوه می‌وزد؛ پرچم‌ها پرشورتر از همیشه‌اند.","اگر صندوقی در دشت‌ها دیدی، بدان که پادشاه راهش را عوض کرده است!"]},E=N[U]??N.villager,G=E[Math.floor(Math.random()*E.length)];W1(X[U]??"",G,U==="quest"&&WJ.got>=5)},onChestOpened:()=>{fQ("صندوق گنج باز شد! موجودی رسمی فقط از سرور به‌روز می‌شود.")},onCrystalCollected:(U,X)=>{WJ={got:U,total:X},HW()},onQuestComplete:()=>{WJ={got:0,total:5},HW(),fQ("مأموریت روزانه کامل شد! موجودی رسمی فقط از سرور به‌روز می‌شود.")},onExit:()=>{vY(),nJ("lands"),NW()},onToast:fQ},bQ[J.id]??null);K.start(),N6=K,N9.setWindIntensity(0.45),HW();let W=_0("#world-canvas"),H=(U)=>{U6=U.clientX},$=(U)=>{if(U6!==null)A8.look.dx+=U.clientX-U6,U6=U.clientX},Y=()=>{U6=null};W.addEventListener("pointerdown",H),W.addEventListener("pointermove",$),W.addEventListener("pointerup",Y),W.addEventListener("pointercancel",Y),XW=()=>{W.removeEventListener("pointerdown",H),W.removeEventListener("pointermove",$),W.removeEventListener("pointerup",Y),W.removeEventListener("pointercancel",Y)},UW=GY(_0("#joystick-zone"),_0("#joystick-knob"),(U,X)=>{A8.move.x=U,A8.move.y=X}),_0("#world-tier").textContent=YW==="high"?"کیفیت: بالا":YW==="mid"?"کیفیت: متعادل":"کیفیت: سبک"}var XW=null;function HW(){let J=_0("#quest-card"),Q=_0("#quest-card-done");if(WJ.got>0&&WJ.got<WJ.total)J.style.display="flex",Q.style.display="none",_0("#quest-progress").textContent=`کریستال‌های شعله: ${C8(WJ.got)} از ${C8(WJ.total)}`,J.querySelector(".quest-bar div").style.width=`${WJ.got/WJ.total*100}%`;else if(WJ.got>=WJ.total)J.style.display="none",Q.style.display="flex";else J.style.display="none",Q.style.display="none"}function W1(J,Q,Z){_0("#dialog-name").textContent=J,_0("#dialog-line").textContent=Q,_0("#btn-turnin").style.display=Z?"block":"none",_0("#dialog-backdrop").classList.add("on")}function $W(){_0("#dialog-backdrop").classList.remove("on")}function H1(){_0("#btn-world-back").addEventListener("click",()=>{N9.uiClick(),vY(),nJ("lands"),NW()}),_0("#btn-run").addEventListener("pointerdown",(J)=>{J.preventDefault(),A8.run=!A8.run,_0("#btn-run").classList.toggle("on",A8.run)}),_0("#world-interact").addEventListener("pointerdown",(J)=>{J.preventDefault(),N6?.interact()}),_0("#btn-turnin").addEventListener("click",()=>{N6?.completeQuest(),$W()}),_0("#dialog-close").addEventListener("click",$W),_0("#dialog-backdrop").addEventListener("click",(J)=>{if(J.target===_0("#dialog-backdrop"))$W()})}function vY(){UW?.destroy(),UW=null,XW?.(),XW=null,N6?.dispose(),N6=null,_0("#world-interact").style.display="none"}function CY(){Y8.title=_0("#title-screen"),Y8.loading=_0("#loading-screen"),Y8.gates=_0("#gates-screen"),Y8.intro=_0("#intro-screen"),Y8.lands=_0("#lands-screen"),Y8.world=_0("#world-screen");for(let[,J]of Object.entries(Y8))J.classList.remove("active");E7.subscribe(hQ),E7.init(),hQ(),rE(),tE(),Q1(),Z1(),H1(),nJ("title")}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",CY);else CY();window.__GATES_BUILD="2026-11-05-c";
