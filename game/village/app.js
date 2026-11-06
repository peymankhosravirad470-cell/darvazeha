var FW="187";var OW=0,BZ=1,DW=2;var c7=1,a6=2,D7=3,R7=0,U9=1,aJ=2,S8=0,n7=1,LZ=2,kZ=3,zZ=4,RW=5;var M7=100,MW=101,VW=102,BW=103,LW=104,kW=200,zW=201,AW=202,CW=203,_W=204,PW=205,IW=206,TW=207,wW=208,SW=209,jW=210,vW=211,yW=212,fW=213,hW=214,bW=0,xW=1,gW=2,AZ=3,pW=4,mW=5,lW=6,uW=7,dW=0,cW=1,nW=2,v9=0,CZ=1,_Z=2,PZ=3,IZ=4,TZ=5,wZ=6,SZ=7;var s7=301,V7=302,r6=303,t6=304,sW=1000,e6=1001,iW=1002,U8=1003,oW=1004;var i7=1005;var V9=1006,JQ=1007;var N8=1008;var T9=1009,aW=1010,rW=1011,o7=1012,jZ=1013,G8=1014,o9=1015,y9=1016,vZ=1017,yZ=1018,j8=1020,tW=35902,eW=35899,JX=1021,QX=1022,a9=1023,B7=1026,q8=1027,ZX=1028,fZ=1029,v8=1030,hZ=1031;var bZ=1033,QQ=33776,ZQ=33777,KQ=33778,$Q=33779,xZ=35840,gZ=35841,pZ=35842,mZ=35843,lZ=36196,uZ=37492,dZ=37496,cZ=37488,nZ=37489,WQ=37490,sZ=37491,iZ=37808,oZ=37809,aZ=37810,rZ=37811,tZ=37812,eZ=37813,JK=37814,QK=37815,ZK=37816,KK=37817,$K=37818,WK=37819,XK=37820,YK=37821,HK=36492,UK=36494,NK=36495,GK=36283,qK=36284,XQ=36285,EK=36286;var FK=0,KX=1,y8="",B9="srgb",OK="srgb-linear",DK="linear",AJ="srgb";var $X=512,WX=513,XX=514,RK=515,YX=516,HX=517,MK=518,VK=519;var BK="300 es",LK=2000;function KH(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function $H(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function E7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function UX(){let J=E7("canvas");return J.style.display="block",J}var S$={},F7=null;function p7(...J){let Q="THREE."+J.shift();if(F7)F7("log",Q,...J);else console.log(Q,...J)}function NX(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let Z=J[1];if(Z&&Z.isStackTrace)J[0]+=" "+Z.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function n0(...J){J=NX(J);let Q="THREE."+J.shift();if(F7)F7("warn",Q,...J);else{let Z=J[0];if(Z&&Z.isStackTrace)console.warn(Z.getError(Q));else console.warn(Q,...J)}}function c0(...J){J=NX(J);let Q="THREE."+J.shift();if(F7)F7("error",Q,...J);else{let Z=J[0];if(Z&&Z.isStackTrace)console.error(Z.getError(Q));else console.error(Q,...J)}}function b7(...J){let Q=J.join(" ");if(Q in S$)return;S$[Q]=!0,n0(...J)}function GX(J,Q,Z){return new Promise(function(K,$){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:$();break;case J.TIMEOUT_EXPIRED:setTimeout(W,Z);break;default:K()}}setTimeout(W,Z)})}var qX={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class r9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let Z=this._listeners;if(Z[J]===void 0)Z[J]=[];if(Z[J].indexOf(Q)===-1)Z[J].push(Q)}hasEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return!1;return Z[J]!==void 0&&Z[J].indexOf(Q)!==-1}removeEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return;let K=Z[J];if(K!==void 0){let $=K.indexOf(Q);if($!==-1)K.splice($,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J.type];if(Z!==void 0){J.target=this;let K=Z.slice(0);for(let $=0,W=K.length;$<W;$++)K[$].call(this,J);J.target=null}}}var J9=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var dQ=Math.PI/180,s6=180/Math.PI;function E8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,K=Math.random()*4294967295|0;return(J9[J&255]+J9[J>>8&255]+J9[J>>16&255]+J9[J>>24&255]+"-"+J9[Q&255]+J9[Q>>8&255]+"-"+J9[Q>>16&15|64]+J9[Q>>24&255]+"-"+J9[Z&63|128]+J9[Z>>8&255]+"-"+J9[Z>>16&255]+J9[Z>>24&255]+J9[K&255]+J9[K>>8&255]+J9[K>>16&255]+J9[K>>24&255]).toLowerCase()}function ZJ(J,Q,Z){return Math.max(Q,Math.min(Z,J))}function WH(J,Q){return(J%Q+Q)%Q}function cQ(J,Q,Z){return(1-Z)*J+Z*Q}function EX(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function YQ(J){switch(J.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function FX(J,Q){if(Q.constructor===Float32Array)return J;let Z=YQ(Q);if(Z===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(J/Z,-1)}function OX(J,Q){if(Q.constructor===Float32Array)return J;let Z=YQ(Q);if(Z===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(J*Z)}class Z0{static{this.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,Z=this.y,K=J.elements;return this.x=K[0]*Q+K[3]*Z+K[6],this.y=K[1]*Q+K[4]*Z+K[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=ZJ(this.x,J.x,Q.x),this.y=ZJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=ZJ(this.x,J,Q),this.y=ZJ(this.y,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(ZJ(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(ZJ(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y;return Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let Z=Math.cos(Q),K=Math.sin(Q),$=this.x-J.x,W=this.y-J.y;return this.x=$*Z-W*K+J.x,this.y=$*K+W*Z+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class t9{constructor(J=0,Q=0,Z=0,K=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=Z,this._w=K}static slerpFlat(J,Q,Z,K,$,W,X){let Y=Z[K+0],H=Z[K+1],U=Z[K+2],N=Z[K+3],q=$[W+0],G=$[W+1],F=$[W+2],R=$[W+3];if(N!==R||Y!==q||H!==G||U!==F){let A=Y*q+H*G+U*F+N*R;if(A<0)q=-q,G=-G,F=-F,R=-R,A=-A;let O=1-X;if(A<0.9995){let E=Math.acos(A),k=Math.sin(E);O=Math.sin(O*E)/k,X=Math.sin(X*E)/k,Y=Y*O+q*X,H=H*O+G*X,U=U*O+F*X,N=N*O+R*X}else{Y=Y*O+q*X,H=H*O+G*X,U=U*O+F*X,N=N*O+R*X;let E=1/Math.sqrt(Y*Y+H*H+U*U+N*N);Y*=E,H*=E,U*=E,N*=E}}J[Q]=Y,J[Q+1]=H,J[Q+2]=U,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,Z,K,$,W){let X=Z[K],Y=Z[K+1],H=Z[K+2],U=Z[K+3],N=$[W],q=$[W+1],G=$[W+2],F=$[W+3];return J[Q]=X*F+U*N+Y*G-H*q,J[Q+1]=Y*F+U*q+H*N-X*G,J[Q+2]=H*F+U*G+X*q-Y*N,J[Q+3]=U*F-X*N-Y*q-H*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,Z,K){return this._x=J,this._y=Q,this._z=Z,this._w=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:Z,_y:K,_z:$,_order:W}=J,X=Math.cos,Y=Math.sin,H=X(Z/2),U=X(K/2),N=X($/2),q=Y(Z/2),G=Y(K/2),F=Y($/2);switch(W){case"XYZ":this._x=q*U*N+H*G*F,this._y=H*G*N-q*U*F,this._z=H*U*F+q*G*N,this._w=H*U*N-q*G*F;break;case"YXZ":this._x=q*U*N+H*G*F,this._y=H*G*N-q*U*F,this._z=H*U*F-q*G*N,this._w=H*U*N+q*G*F;break;case"ZXY":this._x=q*U*N-H*G*F,this._y=H*G*N+q*U*F,this._z=H*U*F+q*G*N,this._w=H*U*N-q*G*F;break;case"ZYX":this._x=q*U*N-H*G*F,this._y=H*G*N+q*U*F,this._z=H*U*F-q*G*N,this._w=H*U*N+q*G*F;break;case"YZX":this._x=q*U*N+H*G*F,this._y=H*G*N+q*U*F,this._z=H*U*F-q*G*N,this._w=H*U*N-q*G*F;break;case"XZY":this._x=q*U*N-H*G*F,this._y=H*G*N-q*U*F,this._z=H*U*F+q*G*N,this._w=H*U*N+q*G*F;break;default:n0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let Z=Q/2,K=Math.sin(Z);return this._x=J.x*K,this._y=J.y*K,this._z=J.z*K,this._w=Math.cos(Z),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,Z=Q[0],K=Q[4],$=Q[8],W=Q[1],X=Q[5],Y=Q[9],H=Q[2],U=Q[6],N=Q[10],q=Z+X+N;if(q>0){let G=0.5/Math.sqrt(q+1);this._w=0.25/G,this._x=(U-Y)*G,this._y=($-H)*G,this._z=(W-K)*G}else if(Z>X&&Z>N){let G=2*Math.sqrt(1+Z-X-N);this._w=(U-Y)/G,this._x=0.25*G,this._y=(K+W)/G,this._z=($+H)/G}else if(X>N){let G=2*Math.sqrt(1+X-Z-N);this._w=($-H)/G,this._x=(K+W)/G,this._y=0.25*G,this._z=(Y+U)/G}else{let G=2*Math.sqrt(1+N-Z-X);this._w=(W-K)/G,this._x=($+H)/G,this._y=(Y+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let Z=J.dot(Q)+1;if(Z<0.00000001)if(Z=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Z;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Z;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=Z;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(ZJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let Z=this.angleTo(J);if(Z===0)return this;let K=Math.min(1,Q/Z);return this.slerp(J,K),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:Z,_y:K,_z:$,_w:W}=J,X=Q._x,Y=Q._y,H=Q._z,U=Q._w;return this._x=Z*U+W*X+K*H-$*Y,this._y=K*U+W*Y+$*X-Z*H,this._z=$*U+W*H+Z*Y-K*X,this._w=W*U-Z*X-K*Y-$*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:Z,_y:K,_z:$,_w:W}=J,X=this.dot(J);if(X<0)Z=-Z,K=-K,$=-$,W=-W,X=-X;let Y=1-Q;if(X<0.9995){let H=Math.acos(X),U=Math.sin(H);Y=Math.sin(Y*H)/U,Q=Math.sin(Q*H)/U,this._x=this._x*Y+Z*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+$*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+Z*Q,this._y=this._y*Y+K*Q,this._z=this._z*Y+$*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,Z){return this.copy(J).slerp(Q,Z)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),Z=Math.random(),K=Math.sqrt(1-Z),$=Math.sqrt(Z);return this.set(K*Math.sin(J),K*Math.cos(J),$*Math.sin(Q),$*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class v{static{this.prototype.isVector3=!0}constructor(J=0,Q=0,Z=0){this.x=J,this.y=Q,this.z=Z}set(J,Q,Z){if(Z===void 0)Z=this.z;return this.x=J,this.y=Q,this.z=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(j$.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(j$.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements;return this.x=$[0]*Q+$[3]*Z+$[6]*K,this.y=$[1]*Q+$[4]*Z+$[7]*K,this.z=$[2]*Q+$[5]*Z+$[8]*K,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements,W=1/($[3]*Q+$[7]*Z+$[11]*K+$[15]);return this.x=($[0]*Q+$[4]*Z+$[8]*K+$[12])*W,this.y=($[1]*Q+$[5]*Z+$[9]*K+$[13])*W,this.z=($[2]*Q+$[6]*Z+$[10]*K+$[14])*W,this}applyQuaternion(J){let Q=this.x,Z=this.y,K=this.z,$=J.x,W=J.y,X=J.z,Y=J.w,H=2*(W*K-X*Z),U=2*(X*Q-$*K),N=2*($*Z-W*Q);return this.x=Q+Y*H+W*N-X*U,this.y=Z+Y*U+X*H-$*N,this.z=K+Y*N+$*U-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements;return this.x=$[0]*Q+$[4]*Z+$[8]*K,this.y=$[1]*Q+$[5]*Z+$[9]*K,this.z=$[2]*Q+$[6]*Z+$[10]*K,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=ZJ(this.x,J.x,Q.x),this.y=ZJ(this.y,J.y,Q.y),this.z=ZJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=ZJ(this.x,J,Q),this.y=ZJ(this.y,J,Q),this.z=ZJ(this.z,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(ZJ(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:Z,y:K,z:$}=J,W=Q.x,X=Q.y,Y=Q.z;return this.x=K*Y-$*X,this.y=$*W-Z*Y,this.z=Z*X-K*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let Z=J.dot(this)/Q;return this.copy(J).multiplyScalar(Z)}projectOnPlane(J){return nQ.copy(this).projectOnVector(J),this.sub(nQ)}reflect(J){return this.sub(nQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(ZJ(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y,K=this.z-J.z;return Q*Q+Z*Z+K*K}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,Z){let K=Math.sin(Q)*J;return this.x=K*Math.sin(Z),this.y=Math.cos(Q)*J,this.z=K*Math.cos(Z),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,Z){return this.x=J*Math.sin(Q),this.y=Z,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),Z=this.setFromMatrixColumn(J,1).length(),K=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=Z,this.z=K,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,Z=Math.sqrt(1-Q*Q);return this.x=Z*Math.cos(J),this.y=Q,this.z=Z*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var nQ=new v,j$=new t9;class i0{static{this.prototype.isMatrix3=!0}constructor(J,Q,Z,K,$,W,X,Y,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,Z,K,$,W,X,Y,H)}set(J,Q,Z,K,$,W,X,Y,H){let U=this.elements;return U[0]=J,U[1]=K,U[2]=X,U[3]=Q,U[4]=$,U[5]=Y,U[6]=Z,U[7]=W,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],this}extractBasis(J,Q,Z){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),Z.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,K=Q.elements,$=this.elements,W=Z[0],X=Z[3],Y=Z[6],H=Z[1],U=Z[4],N=Z[7],q=Z[2],G=Z[5],F=Z[8],R=K[0],A=K[3],O=K[6],E=K[1],k=K[4],z=K[7],B=K[2],C=K[5],P=K[8];return $[0]=W*R+X*E+Y*B,$[3]=W*A+X*k+Y*C,$[6]=W*O+X*z+Y*P,$[1]=H*R+U*E+N*B,$[4]=H*A+U*k+N*C,$[7]=H*O+U*z+N*P,$[2]=q*R+G*E+F*B,$[5]=q*A+G*k+F*C,$[8]=q*O+G*z+F*P,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8];return Q*W*U-Q*X*H-Z*$*U+Z*X*Y+K*$*H-K*W*Y}invert(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],N=U*W-X*H,q=X*Y-U*$,G=H*$-W*Y,F=Q*N+Z*q+K*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/F;return J[0]=N*R,J[1]=(K*H-U*Z)*R,J[2]=(X*Z-K*W)*R,J[3]=q*R,J[4]=(U*Q-K*Y)*R,J[5]=(K*$-X*Q)*R,J[6]=G*R,J[7]=(Z*Y-H*Q)*R,J[8]=(W*Q-Z*$)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,Z,K,$,W,X){let Y=Math.cos($),H=Math.sin($);return this.set(Z*Y,Z*H,-Z*(Y*W+H*X)+W+J,-K*H,K*Y,-K*(-H*W+Y*X)+X+Q,0,0,1),this}scale(J,Q){return b7("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sQ.makeScale(J,Q)),this}rotate(J){return b7("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sQ.makeRotation(-J)),this}translate(J,Q){return b7("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,Z,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,Z=J.elements;for(let K=0;K<9;K++)if(Q[K]!==Z[K])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<9;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var sQ=new i0,v$=new i0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),y$=new i0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function XH(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function($,W,X){if(this.enabled===!1||W===X||!W||!X)return $;if(this.spaces[W].transfer==="srgb")$.r=s9($.r),$.g=s9($.g),$.b=s9($.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)$.applyMatrix3(this.spaces[W].toXYZ),$.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")$.r=q7($.r),$.g=q7($.g),$.b=q7($.b);return $},workingToColorSpace:function($,W){return this.convert($,this.workingColorSpace,W)},colorSpaceToWorking:function($,W){return this.convert($,W,this.workingColorSpace)},getPrimaries:function($){return this.spaces[$].primaries},getTransfer:function($){if($==="")return"linear";return this.spaces[$].transfer},getToneMappingMode:function($){return this.spaces[$].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function($,W=this.workingColorSpace){return $.fromArray(this.spaces[W].luminanceCoefficients)},define:function($){Object.assign(this.spaces,$)},_getMatrix:function($,W,X){return $.copy(this.spaces[X].fromXYZ).multiply(this.spaces[W].toXYZ)},_getDrawingBufferColorSpace:function($){return this.spaces[$].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function($=this.workingColorSpace){return this.spaces[$].workingColorSpaceConfig.unpackColorSpace}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],Z=[0.2126,0.7152,0.0722],K=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:K,transfer:"linear",toXYZ:v$,fromXYZ:y$,luminanceCoefficients:Z,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:K,transfer:"srgb",toXYZ:v$,fromXYZ:y$,luminanceCoefficients:Z,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var WJ=XH();function s9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function q7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var s8;class kK{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let Z;if(J instanceof HTMLCanvasElement)Z=J;else{if(s8===void 0)s8=E7("canvas");s8.width=J.width,s8.height=J.height;let K=s8.getContext("2d");if(J instanceof ImageData)K.putImageData(J,0,0);else K.drawImage(J,0,0,J.width,J.height);Z=s8}return Z.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=E7("canvas");Q.width=J.width,Q.height=J.height;let Z=Q.getContext("2d");Z.drawImage(J,0,0,J.width,J.height);let K=Z.getImageData(0,0,J.width,J.height),$=K.data;for(let W=0;W<$.length;W++)$[W]=s9($[W]/255)*255;return Z.putImageData(K,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let Z=0;Z<Q.length;Z++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[Z]=Math.floor(s9(Q[Z]/255)*255);else Q[Z]=s9(Q[Z]);return{data:Q,width:J.width,height:J.height}}else return n0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var YH=0;class a7{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:YH++}),this.uuid=E8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width||0,Q.height||0,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Z={uuid:this.uuid,url:""},K=this.data;if(K!==null){let $;if(Array.isArray(K)){$=[];for(let W=0,X=K.length;W<X;W++)if(K[W].isDataTexture)$.push(iQ(K[W].image));else $.push(iQ(K[W]))}else $=iQ(K);Z.url=$}if(!Q)J.images[this.uuid]=Z;return Z}}function iQ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return kK.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return n0("Texture: Unable to serialize Texture."),{}}var HH=0,oQ=new v;class nJ extends r9{constructor(J=nJ.DEFAULT_IMAGE,Q=nJ.DEFAULT_MAPPING,Z=1001,K=1001,$=1006,W=1008,X=1023,Y=1009,H=nJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:HH++}),this.uuid=E8(),this.name="",this.source=new a7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=Z,this.wrapT=K,this.magFilter=$,this.minFilter=W,this.anisotropy=H,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new Z0(0,0),this.repeat=new Z0(1,1),this.center=new Z0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new i0,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(oQ).x}get height(){return this.source.getSize(oQ).y}get depth(){return this.source.getSize(oQ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.mipmapsAutoUpdate=J.mipmapsAutoUpdate,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isPMREMTexture=J.isPMREMTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let Z=J[Q];if(Z===void 0){n0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){n0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(K&&Z&&(K.isVector2&&Z.isVector2))K.copy(Z);else if(K&&Z&&(K.isVector3&&Z.isVector3))K.copy(Z);else if(K&&Z&&(K.isMatrix3&&Z.isMatrix3))K.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Z={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(!Q)J.textures[this.uuid]=Z;return Z}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}nJ.DEFAULT_IMAGE=null;nJ.DEFAULT_MAPPING=300;nJ.DEFAULT_ANISOTROPY=1;class jJ{static{this.prototype.isVector4=!0}constructor(J=0,Q=0,Z=0,K=1){this.x=J,this.y=Q,this.z=Z,this.w=K}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,Z,K){return this.x=J,this.y=Q,this.z=Z,this.w=K,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,Z=this.y,K=this.z,$=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*Z+W[8]*K+W[12]*$,this.y=W[1]*Q+W[5]*Z+W[9]*K+W[13]*$,this.z=W[2]*Q+W[6]*Z+W[10]*K+W[14]*$,this.w=W[3]*Q+W[7]*Z+W[11]*K+W[15]*$,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,Z,K,$,W=0.01,X=0.1,Y=J.elements,H=Y[0],U=Y[4],N=Y[8],q=Y[1],G=Y[5],F=Y[9],R=Y[2],A=Y[6],O=Y[10];if(Math.abs(U-q)<0.01&&Math.abs(N-R)<0.01&&Math.abs(F-A)<0.01){if(Math.abs(U+q)<0.1&&Math.abs(N+R)<0.1&&Math.abs(F+A)<0.1&&Math.abs(H+G+O-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let k=(H+1)/2,z=(G+1)/2,B=(O+1)/2,C=(U+q)/4,P=(N+R)/4,D=(F+A)/4;if(k>z&&k>B)if(k<0.01)Z=0,K=0.707106781,$=0.707106781;else Z=Math.sqrt(k),K=C/Z,$=P/Z;else if(z>B)if(z<0.01)Z=0.707106781,K=0,$=0.707106781;else K=Math.sqrt(z),Z=C/K,$=D/K;else if(B<0.01)Z=0.707106781,K=0.707106781,$=0;else $=Math.sqrt(B),Z=P/$,K=D/$;return this.set(Z,K,$,Q),this}let E=Math.sqrt((A-F)*(A-F)+(N-R)*(N-R)+(q-U)*(q-U));if(Math.abs(E)<0.001)E=1;return this.x=(A-F)/E,this.y=(N-R)/E,this.z=(q-U)/E,this.w=Math.acos((H+G+O-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=ZJ(this.x,J.x,Q.x),this.y=ZJ(this.y,J.y,Q.y),this.z=ZJ(this.z,J.z,Q.z),this.w=ZJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=ZJ(this.x,J,Q),this.y=ZJ(this.y,J,Q),this.z=ZJ(this.z,J,Q),this.w=ZJ(this.w,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(ZJ(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this.w=J.w+(Q.w-J.w)*Z,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zK extends r9{constructor(J=1,Q=1,Z={}){super();Z=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},Z),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=Z.depth,this.scissor=new jJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new jJ(0,0,J,Q),this.textures=[];let K=Z.count;for(let $=0;$<K;$++)this.textures[$]=new nJ({width:J,height:Q,depth:Z.depth}),this.textures[$].isRenderTargetTexture=!0,this.textures[$].renderTarget=this;this._setTextureOptions(Z),this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,this.resolveColorBuffer=Z.resolveColorBuffer,this.resolveDepthBuffer=Z.resolveDepthBuffer,this.resolveStencilBuffer=Z.resolveStencilBuffer,this.storeMultisampledColorBuffer=Z.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=Z.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=Z.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=Z.depthTexture,this.samples=Z.samples,this.multiview=Z.multiview,this.useArrayDepthTexture=Z.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.mipmapsAutoUpdate!==void 0)Q.mipmapsAutoUpdate=J.mipmapsAutoUpdate;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let Z=0;Z<this.textures.length;Z++)this.textures[Z].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,Z=1){if(this.width!==J||this.height!==Q||this.depth!==Z){this.width=J,this.height=Q,this.depth=Z;for(let K=0,$=this.textures.length;K<$;K++)if(this.textures[K].image.width=J,this.textures[K].image.height=Q,this.textures[K].image.depth=Z,this.textures[K].isData3DTexture!==!0)this.textures[K].isArrayTexture=this.textures[K].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,Z=J.textures.length;Q<Z;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let K=Object.assign({},J.textures[Q].image);this.textures[Q].source=new a7(K)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;else this.depthTexture=null;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class L9 extends zK{constructor(J=1,Q=1,Z={}){super(J,Q,Z);this.isWebGLRenderTarget=!0}}class HQ extends nJ{constructor(J=null,Q=1,Z=1,K=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:Z,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class AK extends nJ{constructor(J=null,Q=1,Z=1,K=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:Z,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class UJ{static{this.prototype.isMatrix4=!0}constructor(J,Q,Z,K,$,W,X,Y,H,U,N,q,G,F,R,A){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,Z,K,$,W,X,Y,H,U,N,q,G,F,R,A)}set(J,Q,Z,K,$,W,X,Y,H,U,N,q,G,F,R,A){let O=this.elements;return O[0]=J,O[4]=Q,O[8]=Z,O[12]=K,O[1]=$,O[5]=W,O[9]=X,O[13]=Y,O[2]=H,O[6]=U,O[10]=N,O[14]=q,O[3]=G,O[7]=F,O[11]=R,O[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new UJ().fromArray(this.elements)}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],Q[9]=Z[9],Q[10]=Z[10],Q[11]=Z[11],Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],Q[15]=Z[15],this}copyPosition(J){let Q=this.elements,Z=J.elements;return Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,Z){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),Z.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),Z.setFromMatrixColumn(this,2),this}makeBasis(J,Q,Z){return this.set(J.x,Q.x,Z.x,0,J.y,Q.y,Z.y,0,J.z,Q.z,Z.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,Z=J.elements,K=1/i8.setFromMatrixColumn(J,0).length(),$=1/i8.setFromMatrixColumn(J,1).length(),W=1/i8.setFromMatrixColumn(J,2).length();return Q[0]=Z[0]*K,Q[1]=Z[1]*K,Q[2]=Z[2]*K,Q[3]=0,Q[4]=Z[4]*$,Q[5]=Z[5]*$,Q[6]=Z[6]*$,Q[7]=0,Q[8]=Z[8]*W,Q[9]=Z[9]*W,Q[10]=Z[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,Z=J.x,K=J.y,$=J.z,W=Math.cos(Z),X=Math.sin(Z),Y=Math.cos(K),H=Math.sin(K),U=Math.cos($),N=Math.sin($);if(J.order==="XYZ"){let q=W*U,G=W*N,F=X*U,R=X*N;Q[0]=Y*U,Q[4]=-Y*N,Q[8]=H,Q[1]=G+F*H,Q[5]=q-R*H,Q[9]=-X*Y,Q[2]=R-q*H,Q[6]=F+G*H,Q[10]=W*Y}else if(J.order==="YXZ"){let q=Y*U,G=Y*N,F=H*U,R=H*N;Q[0]=q+R*X,Q[4]=F*X-G,Q[8]=W*H,Q[1]=W*N,Q[5]=W*U,Q[9]=-X,Q[2]=G*X-F,Q[6]=R+q*X,Q[10]=W*Y}else if(J.order==="ZXY"){let q=Y*U,G=Y*N,F=H*U,R=H*N;Q[0]=q-R*X,Q[4]=-W*N,Q[8]=F+G*X,Q[1]=G+F*X,Q[5]=W*U,Q[9]=R-q*X,Q[2]=-W*H,Q[6]=X,Q[10]=W*Y}else if(J.order==="ZYX"){let q=W*U,G=W*N,F=X*U,R=X*N;Q[0]=Y*U,Q[4]=F*H-G,Q[8]=q*H+R,Q[1]=Y*N,Q[5]=R*H+q,Q[9]=G*H-F,Q[2]=-H,Q[6]=X*Y,Q[10]=W*Y}else if(J.order==="YZX"){let q=W*Y,G=W*H,F=X*Y,R=X*H;Q[0]=Y*U,Q[4]=R-q*N,Q[8]=F*N+G,Q[1]=N,Q[5]=W*U,Q[9]=-X*U,Q[2]=-H*U,Q[6]=G*N+F,Q[10]=q-R*N}else if(J.order==="XZY"){let q=W*Y,G=W*H,F=X*Y,R=X*H;Q[0]=Y*U,Q[4]=-N,Q[8]=H*U,Q[1]=q*N+R,Q[5]=W*U,Q[9]=G*N-F,Q[2]=F*N-G,Q[6]=X*U,Q[10]=R*N+q}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(UH,J,NH)}lookAt(J,Q,Z){let K=this.elements;if(q9.subVectors(J,Q),q9.lengthSq()===0)q9.z=1;if(q9.normalize(),$8.crossVectors(Z,q9),$8.lengthSq()===0){if(Math.abs(Z.z)===1)q9.x+=0.0001;else q9.z+=0.0001;q9.normalize(),$8.crossVectors(Z,q9)}return $8.normalize(),B6.crossVectors(q9,$8),K[0]=$8.x,K[4]=B6.x,K[8]=q9.x,K[1]=$8.y,K[5]=B6.y,K[9]=q9.y,K[2]=$8.z,K[6]=B6.z,K[10]=q9.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,K=Q.elements,$=this.elements,W=Z[0],X=Z[4],Y=Z[8],H=Z[12],U=Z[1],N=Z[5],q=Z[9],G=Z[13],F=Z[2],R=Z[6],A=Z[10],O=Z[14],E=Z[3],k=Z[7],z=Z[11],B=Z[15],C=K[0],P=K[4],D=K[8],V=K[12],I=K[1],f=K[5],S=K[9],p=K[13],t=K[2],T=K[6],c=K[10],n=K[14],x=K[3],X0=K[7],u=K[11],r=K[15];return $[0]=W*C+X*I+Y*t+H*x,$[4]=W*P+X*f+Y*T+H*X0,$[8]=W*D+X*S+Y*c+H*u,$[12]=W*V+X*p+Y*n+H*r,$[1]=U*C+N*I+q*t+G*x,$[5]=U*P+N*f+q*T+G*X0,$[9]=U*D+N*S+q*c+G*u,$[13]=U*V+N*p+q*n+G*r,$[2]=F*C+R*I+A*t+O*x,$[6]=F*P+R*f+A*T+O*X0,$[10]=F*D+R*S+A*c+O*u,$[14]=F*V+R*p+A*n+O*r,$[3]=E*C+k*I+z*t+B*x,$[7]=E*P+k*f+z*T+B*X0,$[11]=E*D+k*S+z*c+B*u,$[15]=E*V+k*p+z*n+B*r,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[4],K=J[8],$=J[12],W=J[1],X=J[5],Y=J[9],H=J[13],U=J[2],N=J[6],q=J[10],G=J[14],F=J[3],R=J[7],A=J[11],O=J[15],E=Y*G-H*q,k=X*G-H*N,z=X*q-Y*N,B=W*G-H*U,C=W*q-Y*U,P=W*N-X*U;return Q*(R*E-A*k+O*z)-Z*(F*E-A*B+O*C)+K*(F*k-R*B+O*P)-$*(F*z-R*C+A*P)}determinantAffine(){let J=this.elements,Q=J[0],Z=J[4],K=J[8],$=J[1],W=J[5],X=J[9],Y=J[2],H=J[6],U=J[10];return Q*(W*U-X*H)-Z*($*U-X*Y)+K*($*H-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,Z){let K=this.elements;if(J.isVector3)K[12]=J.x,K[13]=J.y,K[14]=J.z;else K[12]=J,K[13]=Q,K[14]=Z;return this}invert(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],N=J[9],q=J[10],G=J[11],F=J[12],R=J[13],A=J[14],O=J[15],E=Q*X-Z*W,k=Q*Y-K*W,z=Q*H-$*W,B=Z*Y-K*X,C=Z*H-$*X,P=K*H-$*Y,D=U*R-N*F,V=U*A-q*F,I=U*O-G*F,f=N*A-q*R,S=N*O-G*R,p=q*O-G*A,t=E*p-k*S+z*f+B*I-C*V+P*D;if(t===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/t;return J[0]=(X*p-Y*S+H*f)*T,J[1]=(K*S-Z*p-$*f)*T,J[2]=(R*P-A*C+O*B)*T,J[3]=(q*C-N*P-G*B)*T,J[4]=(Y*I-W*p-H*V)*T,J[5]=(Q*p-K*I+$*V)*T,J[6]=(A*z-F*P-O*k)*T,J[7]=(U*P-q*z+G*k)*T,J[8]=(W*S-X*I+H*D)*T,J[9]=(Z*I-Q*S-$*D)*T,J[10]=(F*C-R*z+O*E)*T,J[11]=(N*z-U*C-G*E)*T,J[12]=(X*V-W*f-Y*D)*T,J[13]=(Q*f-Z*V+K*D)*T,J[14]=(R*k-F*B-A*E)*T,J[15]=(U*B-N*k+q*E)*T,this}scale(J){let Q=this.elements,Z=J.x,K=J.y,$=J.z;return Q[0]*=Z,Q[4]*=K,Q[8]*=$,Q[1]*=Z,Q[5]*=K,Q[9]*=$,Q[2]*=Z,Q[6]*=K,Q[10]*=$,Q[3]*=Z,Q[7]*=K,Q[11]*=$,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Z=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],K=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,Z,K))}makeTranslation(J,Q,Z){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,Z,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(1,0,0,0,0,Q,-Z,0,0,Z,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,0,Z,0,0,1,0,0,-Z,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,0,Z,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let Z=Math.cos(Q),K=Math.sin(Q),$=1-Z,W=J.x,X=J.y,Y=J.z,H=$*W,U=$*X;return this.set(H*W+Z,H*X-K*Y,H*Y+K*X,0,H*X+K*Y,U*X+Z,U*Y-K*W,0,H*Y-K*X,U*Y+K*W,$*Y*Y+Z,0,0,0,0,1),this}makeScale(J,Q,Z){return this.set(J,0,0,0,0,Q,0,0,0,0,Z,0,0,0,0,1),this}makeShear(J,Q,Z,K,$,W){return this.set(1,Z,$,0,J,1,W,0,Q,K,1,0,0,0,0,1),this}compose(J,Q,Z){let K=this.elements,$=Q._x,W=Q._y,X=Q._z,Y=Q._w,H=$+$,U=W+W,N=X+X,q=$*H,G=$*U,F=$*N,R=W*U,A=W*N,O=X*N,E=Y*H,k=Y*U,z=Y*N,B=Z.x,C=Z.y,P=Z.z;return K[0]=(1-(R+O))*B,K[1]=(G+z)*B,K[2]=(F-k)*B,K[3]=0,K[4]=(G-z)*C,K[5]=(1-(q+O))*C,K[6]=(A+E)*C,K[7]=0,K[8]=(F+k)*P,K[9]=(A-E)*P,K[10]=(1-(q+R))*P,K[11]=0,K[12]=J.x,K[13]=J.y,K[14]=J.z,K[15]=1,this}decompose(J,Q,Z){let K=this.elements;J.x=K[12],J.y=K[13],J.z=K[14];let $=this.determinantAffine();if($===0)return Z.set(1,1,1),Q.identity(),this;let W=i8.set(K[0],K[1],K[2]).length(),X=i8.set(K[4],K[5],K[6]).length(),Y=i8.set(K[8],K[9],K[10]).length();if($<0)W=-W;C9.copy(this);let H=1/W,U=1/X,N=1/Y;return C9.elements[0]*=H,C9.elements[1]*=H,C9.elements[2]*=H,C9.elements[4]*=U,C9.elements[5]*=U,C9.elements[6]*=U,C9.elements[8]*=N,C9.elements[9]*=N,C9.elements[10]*=N,Q.setFromRotationMatrix(C9),Z.x=W,Z.y=X,Z.z=Y,this}makePerspective(J,Q,Z,K,$,W,X=2000,Y=!1){let H=this.elements,U=2*$/(Q-J),N=2*$/(Z-K),q=(Q+J)/(Q-J),G=(Z+K)/(Z-K),F,R;if(Y)F=$/(W-$),R=W*$/(W-$);else if(X===2000)F=-(W+$)/(W-$),R=-2*W*$/(W-$);else if(X===2001)F=-W/(W-$),R=-W*$/(W-$);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=q,H[12]=0,H[1]=0,H[5]=N,H[9]=G,H[13]=0,H[2]=0,H[6]=0,H[10]=F,H[14]=R,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,Z,K,$,W,X=2000,Y=!1){let H=this.elements,U=2/(Q-J),N=2/(Z-K),q=-(Q+J)/(Q-J),G=-(Z+K)/(Z-K),F,R;if(Y)F=1/(W-$),R=W/(W-$);else if(X===2000)F=-2/(W-$),R=-(W+$)/(W-$);else if(X===2001)F=-1/(W-$),R=-$/(W-$);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=0,H[12]=q,H[1]=0,H[5]=N,H[9]=0,H[13]=G,H[2]=0,H[6]=0,H[10]=F,H[14]=R,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,Z=J.elements;for(let K=0;K<16;K++)if(Q[K]!==Z[K])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<16;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J[Q+9]=Z[9],J[Q+10]=Z[10],J[Q+11]=Z[11],J[Q+12]=Z[12],J[Q+13]=Z[13],J[Q+14]=Z[14],J[Q+15]=Z[15],J}}var i8=new v,C9=new UJ,UH=new v(0,0,0),NH=new v(1,1,1),$8=new v,B6=new v,q9=new v,f$=new UJ,h$=new t9;class i9{constructor(J=0,Q=0,Z=0,K=i9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=Z,this._order=K}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,Z,K=this._order){return this._x=J,this._y=Q,this._z=Z,this._order=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,Z=!0){let K=J.elements,$=K[0],W=K[4],X=K[8],Y=K[1],H=K[5],U=K[9],N=K[2],q=K[6],G=K[10];switch(Q){case"XYZ":if(this._y=Math.asin(ZJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-W,$);else this._x=Math.atan2(q,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-ZJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(X,G),this._z=Math.atan2(Y,H);else this._y=Math.atan2(-N,$),this._z=0;break;case"ZXY":if(this._x=Math.asin(ZJ(q,-1,1)),Math.abs(q)<0.9999999)this._y=Math.atan2(-N,G),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(Y,$);break;case"ZYX":if(this._y=Math.asin(-ZJ(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(q,G),this._z=Math.atan2(Y,$);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(ZJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-N,$);else this._x=0,this._y=Math.atan2(X,G);break;case"XZY":if(this._z=Math.asin(-ZJ(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(q,H),this._y=Math.atan2(X,$);else this._x=Math.atan2(-U,G),this._y=0;break;default:n0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,Z===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,Z){return f$.makeRotationFromQuaternion(J),this.setFromRotationMatrix(f$,Q,Z)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return h$.setFromEuler(this),this.setFromQuaternion(h$,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}i9.DEFAULT_ORDER="XYZ";class r7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var GH=0,b$=new v,o8=new t9,l9=new UJ,L6=new v,P7=new v,qH=new v,EH=new t9,x$=new v(1,0,0),g$=new v(0,1,0),p$=new v(0,0,1),m$={type:"added"},FH={type:"removed"},a8={type:"childadded",child:null},aQ={type:"childremoved",child:null};class pJ extends r9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:GH++}),this.uuid=E8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pJ.DEFAULT_UP.clone();let J=new v,Q=new i9,Z=new t9,K=new v(1,1,1);function $(){Z.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion(Z,void 0,!1)}Q._onChange($),Z._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:Z},scale:{configurable:!0,enumerable:!0,value:K},modelViewMatrix:{value:new UJ},normalMatrix:{value:new i0}}),this.matrix=new UJ,this.matrixWorld=new UJ,this.matrixAutoUpdate=pJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new r7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return o8.setFromAxisAngle(J,Q),this.quaternion.multiply(o8),this}rotateOnWorldAxis(J,Q){return o8.setFromAxisAngle(J,Q),this.quaternion.premultiply(o8),this}rotateX(J){return this.rotateOnAxis(x$,J)}rotateY(J){return this.rotateOnAxis(g$,J)}rotateZ(J){return this.rotateOnAxis(p$,J)}translateOnAxis(J,Q){return b$.copy(J).applyQuaternion(this.quaternion),this.position.add(b$.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(x$,J)}translateY(J){return this.translateOnAxis(g$,J)}translateZ(J){return this.translateOnAxis(p$,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(l9.copy(this.matrixWorld).invert())}lookAt(J,Q,Z){if(J.isVector3)L6.copy(J);else L6.set(J,Q,Z);let K=this.parent;if(this.updateWorldMatrix(!0,!1),P7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)l9.lookAt(P7,L6,this.up);else l9.lookAt(L6,P7,this.up);if(this.quaternion.setFromRotationMatrix(l9),K)l9.extractRotation(K.matrixWorld),o8.setFromRotationMatrix(l9),this.quaternion.premultiply(o8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return c0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(m$),a8.child=J,this.dispatchEvent(a8),a8.child=null;else c0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.remove(arguments[Z]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(FH),aQ.child=J,this.dispatchEvent(aQ),aQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),l9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),l9.multiply(J.parent.matrixWorld);return J.applyMatrix4(l9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(m$),a8.child=J,this.dispatchEvent(a8),a8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let Z=0,K=this.children.length;Z<K;Z++){let W=this.children[Z].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,Z=[]){if(this[J]===Q)Z.push(this);let K=this.children;for(let $=0,W=K.length;$<W;$++)K[$].getObjectsByProperty(J,Q,Z);return Z}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(P7,J,qH),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(P7,EH,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(J){J(this);let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:Z,z:K}=J,$=this.matrix.elements;$[12]+=Q-$[0]*Q-$[4]*Z-$[8]*K,$[13]+=Z-$[1]*Q-$[5]*Z-$[9]*K,$[14]+=K-$[2]*Q-$[6]*Z-$[10]*K}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].updateMatrixWorld(J)}updateWorldMatrix(J,Q,Z=!1){let K=this.parent;if(J===!0&&K!==null)K.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||Z){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,Z=!0}if(Q===!0){let $=this.children;for(let W=0,X=$.length;W<X;W++)$[W].updateWorldMatrix(!1,!0,Z)}}toJSON(J){let Q=J===void 0||typeof J==="string",Z={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Z.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let K={};if(K.uuid=this.uuid,K.type=this.type,K.name=this.name,K.castShadow=this.castShadow,K.receiveShadow=this.receiveShadow,K.visible=this.visible,K.frustumCulled=this.frustumCulled,K.renderOrder=this.renderOrder,K.static=this.static,K.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)K.userData=this.userData;if(K.layers=this.layers.mask,K.matrix=this.matrix.toArray(),K.up=this.up.toArray(),this.pivot!==null)K.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)K.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)K.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(K.type="InstancedMesh",K.count=this.count,K.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)K.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(K.type="BatchedMesh",K.perObjectFrustumCulled=this.perObjectFrustumCulled,K.sortObjects=this.sortObjects,K.drawRanges=this._drawRanges,K.reservedRanges=this._reservedRanges,K.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),K.instanceInfo=this._instanceInfo.map((X)=>({...X})),K.availableInstanceIds=this._availableInstanceIds.slice(),K.availableGeometryIds=this._availableGeometryIds.slice(),K.nextIndexStart=this._nextIndexStart,K.nextVertexStart=this._nextVertexStart,K.geometryCount=this._geometryCount,K.maxInstanceCount=this._maxInstanceCount,K.maxVertexCount=this._maxVertexCount,K.maxIndexCount=this._maxIndexCount,K.geometryInitialized=this._geometryInitialized,K.matricesTexture=this._matricesTexture.toJSON(J),K.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)K.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)K.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)K.boundingBox=this.boundingBox.toJSON()}function $(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)K.background=this.background.toJSON();else if(this.background.isTexture)K.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)K.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){K.geometry=$(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let H=0,U=Y.length;H<U;H++){let N=Y[H];$(J.shapes,N)}else $(J.shapes,Y)}}if(this.isSkinnedMesh){if(K.bindMode=this.bindMode,K.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)$(J.skeletons,this.skeleton),K.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,H=this.material.length;Y<H;Y++)X.push($(J.materials,this.material[Y]));K.material=X}else K.material=$(J.materials,this.material);if(this.children.length>0){K.children=[];for(let X=0;X<this.children.length;X++)K.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){K.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];K.animations.push($(J.animations,Y))}}if(Q){let X=W(J.geometries),Y=W(J.materials),H=W(J.textures),U=W(J.images),N=W(J.shapes),q=W(J.skeletons),G=W(J.animations),F=W(J.nodes);if(X.length>0)Z.geometries=X;if(Y.length>0)Z.materials=Y;if(H.length>0)Z.textures=H;if(U.length>0)Z.images=U;if(N.length>0)Z.shapes=N;if(q.length>0)Z.skeletons=q;if(G.length>0)Z.animations=G;if(F.length>0)Z.nodes=F}return Z.object=K,Z;function W(X){let Y=[];for(let H in X){let U=X[H];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let Z=0;Z<J.children.length;Z++){let K=J.children[Z];this.add(K.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}pJ.DEFAULT_UP=new v(0,1,0);pJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;pJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class v0 extends pJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var OH={type:"move"};class t7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new v0,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new v0,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new v0,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let Z of J.hand.values())this._getHandJoint(Q,Z)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,Z){let K=null,$=null,W=null,X=this._targetRay,Y=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let R of J.hand.values()){let A=Q.getJointPose(R,Z),O=this._getHandJoint(H,R);if(A!==null)O.matrix.fromArray(A.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.matrixWorldNeedsUpdate=!0,O.jointRadius=A.radius;O.visible=A!==null}let U=H.joints["index-finger-tip"],N=H.joints["thumb-tip"],q=U.position.distanceTo(N.position),G=0.02,F=0.005;if(H.inputState.pinching&&q>G+F)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&q<=G-F)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if($=Q.getPose(J.gripSpace,Z),$!==null){if(Y.matrix.fromArray($.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldNeedsUpdate=!0,$.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy($.linearVelocity);else Y.hasLinearVelocity=!1;if($.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy($.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(K=Q.getPose(J.targetRaySpace,Z),K===null&&$!==null)K=$;if(K!==null){if(X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.matrixWorldNeedsUpdate=!0,K.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(K.linearVelocity);else X.hasLinearVelocity=!1;if(K.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(K.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(OH)}}}if(X!==null)X.visible=K!==null;if(Y!==null)Y.visible=$!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let Z=new v0;Z.matrixAutoUpdate=!1,Z.visible=!1,J.joints[Q.jointName]=Z,J.add(Z)}return J.joints[Q.jointName]}}var DX={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},W8={h:0,s:0,l:0},k6={h:0,s:0,l:0};function rQ(J,Q,Z){if(Z<0)Z+=1;if(Z>1)Z-=1;if(Z<0.16666666666666666)return J+(Q-J)*6*Z;if(Z<0.5)return Q;if(Z<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-Z);return J}class y0{constructor(J,Q,Z){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,Z)}set(J,Q,Z){if(Q===void 0&&Z===void 0){let K=J;if(K&&K.isColor)this.copy(K);else if(typeof K==="number")this.setHex(K);else if(typeof K==="string")this.setStyle(K)}else this.setRGB(J,Q,Z);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,WJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,Z,K=WJ.workingColorSpace){return this.r=J,this.g=Q,this.b=Z,WJ.colorSpaceToWorking(this,K),this}setHSL(J,Q,Z,K=WJ.workingColorSpace){if(J=WH(J,1),Q=ZJ(Q,0,1),Z=ZJ(Z,0,1),Q===0)this.r=this.g=this.b=Z;else{let $=Z<=0.5?Z*(1+Q):Z+Q-Z*Q,W=2*Z-$;this.r=rQ(W,$,J+0.3333333333333333),this.g=rQ(W,$,J),this.b=rQ(W,$,J-0.3333333333333333)}return WJ.colorSpaceToWorking(this,K),this}setStyle(J,Q="srgb"){function Z($){if($===void 0)return;if(parseFloat($)<1)n0("Color: Alpha component of "+J+" will be ignored.")}let K;if(K=/^(\w+)\(([^\)]*)\)/.exec(J)){let $,W=K[1],X=K[2];switch(W){case"rgb":case"rgba":if($=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(X))return Z($[4]),this.setRGB(Math.min(255,parseInt($[1],10))/255,Math.min(255,parseInt($[2],10))/255,Math.min(255,parseInt($[3],10))/255,Q);if($=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(X))return Z($[4]),this.setRGB(Math.min(100,parseFloat($[1]))/100,Math.min(100,parseFloat($[2]))/100,Math.min(100,parseFloat($[3]))/100,Q);break;case"hsl":case"hsla":if($=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(X))return Z($[4]),this.setHSL(parseFloat($[1])/360,parseFloat($[2])/100,parseFloat($[3])/100,Q);break;default:n0("Color: Unknown color model "+J)}}else if(K=/^\#([A-Fa-f\d]+)$/.exec(J)){let $=K[1],W=$.length;if(W===3)return this.setRGB(parseInt($.charAt(0),16)/15,parseInt($.charAt(1),16)/15,parseInt($.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt($,16),Q);else n0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let Z=DX[J.toLowerCase()];if(Z!==void 0)this.setHex(Z,Q);else n0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=s9(J.r),this.g=s9(J.g),this.b=s9(J.b),this}copyLinearToSRGB(J){return this.r=q7(J.r),this.g=q7(J.g),this.b=q7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return WJ.workingToColorSpace(Q9.copy(this),J),Math.round(ZJ(Q9.r*255,0,255))*65536+Math.round(ZJ(Q9.g*255,0,255))*256+Math.round(ZJ(Q9.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=WJ.workingColorSpace){WJ.workingToColorSpace(Q9.copy(this),Q);let{r:Z,g:K,b:$}=Q9,W=Math.max(Z,K,$),X=Math.min(Z,K,$),Y,H,U=(X+W)/2;if(X===W)Y=0,H=0;else{let N=W-X;switch(H=U<=0.5?N/(W+X):N/(2-W-X),W){case Z:Y=(K-$)/N+(K<$?6:0);break;case K:Y=($-Z)/N+2;break;case $:Y=(Z-K)/N+4;break}Y/=6}return J.h=Y,J.s=H,J.l=U,J}getRGB(J,Q=WJ.workingColorSpace){return WJ.workingToColorSpace(Q9.copy(this),Q),J.r=Q9.r,J.g=Q9.g,J.b=Q9.b,J}getStyle(J="srgb"){WJ.workingToColorSpace(Q9.copy(this),J);let{r:Q,g:Z,b:K}=Q9;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${Z.toFixed(3)} ${K.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round(Z*255)},${Math.round(K*255)})`}offsetHSL(J,Q,Z){return this.getHSL(W8),this.setHSL(W8.h+J,W8.s+Q,W8.l+Z)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,Z){return this.r=J.r+(Q.r-J.r)*Z,this.g=J.g+(Q.g-J.g)*Z,this.b=J.b+(Q.b-J.b)*Z,this}lerpHSL(J,Q){this.getHSL(W8),J.getHSL(k6);let Z=cQ(W8.h,k6.h,Q),K=cQ(W8.s,k6.s,Q),$=cQ(W8.l,k6.l,Q);return this.setHSL(Z,K,$),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,Z=this.g,K=this.b,$=J.elements;return this.r=$[0]*Q+$[3]*Z+$[6]*K,this.g=$[1]*Q+$[4]*Z+$[7]*K,this.b=$[2]*Q+$[5]*Z+$[8]*K,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Q9=new y0;y0.NAMES=DX;class e7{constructor(J,Q=1,Z=1000){this.isFog=!0,this.name="",this.color=new y0(J),this.near=Q,this.far=Z}clone(){return new e7(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class UQ extends pJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new i9,this.environmentIntensity=1,this.environmentRotation=new i9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){return super.copy(J,Q),this.background=J.background!==null?J.background.clone():null,this.environment=J.environment!==null?J.environment.clone():null,this.fog=J.fog!==null?J.fog.clone():null,this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),this.overrideMaterial=J.overrideMaterial!==null?J.overrideMaterial.clone():null,this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var _9=new v,u9=new v,tQ=new v,d9=new v,r8=new v,t8=new v,l$=new v,eQ=new v,JZ=new v,QZ=new v,ZZ=new jJ,KZ=new jJ,$Z=new jJ;class F9{constructor(J=new v,Q=new v,Z=new v){this.a=J,this.b=Q,this.c=Z}static getNormal(J,Q,Z,K){K.subVectors(Z,Q),_9.subVectors(J,Q),K.cross(_9);let $=K.lengthSq();if($>0)return K.multiplyScalar(1/Math.sqrt($));return K.set(0,0,0)}static getBarycoord(J,Q,Z,K,$){_9.subVectors(K,Q),u9.subVectors(Z,Q),tQ.subVectors(J,Q);let W=_9.dot(_9),X=_9.dot(u9),Y=_9.dot(tQ),H=u9.dot(u9),U=u9.dot(tQ),N=W*H-X*X;if(N===0)return $.set(0,0,0),null;let q=1/N,G=(H*Y-X*U)*q,F=(W*U-X*Y)*q;return $.set(1-G-F,F,G)}static containsPoint(J,Q,Z,K){if(this.getBarycoord(J,Q,Z,K,d9)===null)return!1;return d9.x>=0&&d9.y>=0&&d9.x+d9.y<=1}static getInterpolation(J,Q,Z,K,$,W,X,Y){if(this.getBarycoord(J,Q,Z,K,d9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector($,d9.x),Y.addScaledVector(W,d9.y),Y.addScaledVector(X,d9.z),Y}static getInterpolatedAttribute(J,Q,Z,K,$,W){return ZZ.setScalar(0),KZ.setScalar(0),$Z.setScalar(0),ZZ.fromBufferAttribute(J,Q),KZ.fromBufferAttribute(J,Z),$Z.fromBufferAttribute(J,K),W.setScalar(0),W.addScaledVector(ZZ,$.x),W.addScaledVector(KZ,$.y),W.addScaledVector($Z,$.z),W}static isFrontFacing(J,Q,Z,K){return _9.subVectors(Z,Q),u9.subVectors(J,Q),_9.cross(u9).dot(K)<0}set(J,Q,Z){return this.a.copy(J),this.b.copy(Q),this.c.copy(Z),this}setFromPointsAndIndices(J,Q,Z,K){return this.a.copy(J[Q]),this.b.copy(J[Z]),this.c.copy(J[K]),this}setFromAttributeAndIndices(J,Q,Z,K){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,Z),this.c.fromBufferAttribute(J,K),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return _9.subVectors(this.c,this.b),u9.subVectors(this.a,this.b),_9.cross(u9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return F9.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return F9.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,Z,K,$){return F9.getInterpolation(J,this.a,this.b,this.c,Q,Z,K,$)}containsPoint(J){return F9.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return F9.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let Z=this.a,K=this.b,$=this.c,W,X;r8.subVectors(K,Z),t8.subVectors($,Z),eQ.subVectors(J,Z);let Y=r8.dot(eQ),H=t8.dot(eQ);if(Y<=0&&H<=0)return Q.copy(Z);JZ.subVectors(J,K);let U=r8.dot(JZ),N=t8.dot(JZ);if(U>=0&&N<=U)return Q.copy(K);let q=Y*N-U*H;if(q<=0&&Y>=0&&U<=0&&Y-U>0)return W=Y/(Y-U),Q.copy(Z).addScaledVector(r8,W);QZ.subVectors(J,$);let G=r8.dot(QZ),F=t8.dot(QZ);if(F>=0&&G<=F)return Q.copy($);let R=G*H-Y*F;if(R<=0&&H>=0&&F<=0)return X=H/(H-F),Q.copy(Z).addScaledVector(t8,X);let A=U*F-G*N;if(A<=0&&N-U>=0&&G-F>=0)return l$.subVectors($,K),X=(N-U)/(N-U+(G-F)),Q.copy(K).addScaledVector(l$,X);let O=1/(A+R+q);return W=R*O,X=q*O,Q.copy(Z).addScaledVector(r8,W).addScaledVector(t8,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class e9{constructor(J=new v(1/0,1/0,1/0),Q=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q+=3)this.expandByPoint(P9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,Z=J.count;Q<Z;Q++)this.expandByPoint(P9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let Z=P9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let Z=J.geometry;if(Z!==void 0){let $=Z.getAttribute("position");if(Q===!0&&$!==void 0&&J.isInstancedMesh!==!0&&J.isBatchedMesh!==!0)for(let W=0,X=$.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,P9);else P9.fromBufferAttribute($,W);P9.applyMatrix4(J.matrixWorld),this.expandByPoint(P9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();z6.copy(J.boundingBox)}else{if(Z.boundingBox===null)Z.computeBoundingBox();z6.copy(Z.boundingBox)}z6.applyMatrix4(J.matrixWorld),this.union(z6)}}let K=J.children;for(let $=0,W=K.length;$<W;$++)this.expandByObject(K[$],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,P9),P9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,Z;if(J.normal.x>0)Q=J.normal.x*this.min.x,Z=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,Z=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,Z+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,Z+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,Z+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,Z+=J.normal.z*this.min.z;return Q<=-J.constant&&Z>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(I7),A6.subVectors(this.max,I7),e8.subVectors(J.a,I7),J7.subVectors(J.b,I7),Q7.subVectors(J.c,I7),X8.subVectors(J7,e8),Y8.subVectors(Q7,J7),A8.subVectors(e8,Q7);let Q=[0,-X8.z,X8.y,0,-Y8.z,Y8.y,0,-A8.z,A8.y,X8.z,0,-X8.x,Y8.z,0,-Y8.x,A8.z,0,-A8.x,-X8.y,X8.x,0,-Y8.y,Y8.x,0,-A8.y,A8.x,0];if(!WZ(Q,e8,J7,Q7,A6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!WZ(Q,e8,J7,Q7,A6))return!1;return C6.crossVectors(X8,Y8),Q=[C6.x,C6.y,C6.z],WZ(Q,e8,J7,Q7,A6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,P9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(P9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return c9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),c9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),c9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),c9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),c9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),c9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),c9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),c9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(c9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var c9=[new v,new v,new v,new v,new v,new v,new v,new v],P9=new v,z6=new e9,e8=new v,J7=new v,Q7=new v,X8=new v,Y8=new v,A8=new v,I7=new v,A6=new v,C6=new v,C8=new v;function WZ(J,Q,Z,K,$){for(let W=0,X=J.length-3;W<=X;W+=3){C8.fromArray(J,W);let Y=$.x*Math.abs(C8.x)+$.y*Math.abs(C8.y)+$.z*Math.abs(C8.z),H=Q.dot(C8),U=Z.dot(C8),N=K.dot(C8);if(Math.max(-Math.max(H,U,N),Math.min(H,U,N))>Y)return!1}return!0}var hJ=new v,_6=new Z0,DH=0;class I9 extends r9{constructor(J,Q,Z=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DH++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=Z,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=J!==void 0?YQ(J):void 0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this._normalizationScale=J._normalizationScale,this}copyAt(J,Q,Z){J*=this.itemSize,Z*=Q.itemSize;for(let K=0,$=this.itemSize;K<$;K++)this.array[J+K]=Q.array[Z+K];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,Z=this.count;Q<Z;Q++)_6.fromBufferAttribute(this,Q),_6.applyMatrix3(J),this.setXY(Q,_6.x,_6.y);else if(this.itemSize===3)for(let Q=0,Z=this.count;Q<Z;Q++)hJ.fromBufferAttribute(this,Q),hJ.applyMatrix3(J),this.setXYZ(Q,hJ.x,hJ.y,hJ.z);return this}applyMatrix4(J){for(let Q=0,Z=this.count;Q<Z;Q++)hJ.fromBufferAttribute(this,Q),hJ.applyMatrix4(J),this.setXYZ(Q,hJ.x,hJ.y,hJ.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)hJ.fromBufferAttribute(this,Q),hJ.applyNormalMatrix(J),this.setXYZ(Q,hJ.x,hJ.y,hJ.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)hJ.fromBufferAttribute(this,Q),hJ.transformDirection(J),this.setXYZ(Q,hJ.x,hJ.y,hJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let Z=this.array[J*this.itemSize+Q];if(this.normalized)Z=this._denormalize(Z);return Z}setComponent(J,Q,Z){if(this.normalized)Z=this._normalize(Z);return this.array[J*this.itemSize+Q]=Z,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=this._denormalize(Q);return Q}setX(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=this._denormalize(Q);return Q}setY(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=this._denormalize(Q);return Q}setZ(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=this._denormalize(Q);return Q}setW(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,Z){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),Z=this._normalize(Z);return this.array[J+0]=Q,this.array[J+1]=Z,this}setXYZ(J,Q,Z,K){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),Z=this._normalize(Z),K=this._normalize(K);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=K,this}setXYZW(J,Q,Z,K,$){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),Z=this._normalize(Z),K=this._normalize(K),$=this._normalize($);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=K,this.array[J+3]=$,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.max(J/Q,-1):FX(J,this.array)}_normalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.round(J*Q):OX(J,this.array)}}class NQ extends I9{constructor(J,Q,Z){super(new Uint16Array(J),Q,Z)}}class GQ extends I9{constructor(J,Q,Z){super(new Uint32Array(J),Q,Z)}}class OJ extends I9{constructor(J,Q,Z){super(new Float32Array(J),Q,Z)}}var RH=new e9,T7=new v,XZ=new v;class f8{constructor(J=new v,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let Z=this.center;if(Q!==void 0)Z.copy(Q);else RH.setFromPoints(J).getCenter(Z);let K=0;for(let $=0,W=J.length;$<W;$++)K=Math.max(K,Z.distanceToSquared(J[$]));return this.radius=Math.sqrt(K),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let Z=this.center.distanceToSquared(J);if(Q.copy(J),Z>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;T7.subVectors(J,this.center);let Q=T7.lengthSq();if(Q>this.radius*this.radius){let Z=Math.sqrt(Q),K=(Z-this.radius)*0.5;this.center.addScaledVector(T7,K/Z),this.radius+=K}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else XZ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(T7.copy(J.center).add(XZ)),this.expandByPoint(T7.copy(J.center).sub(XZ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var MH=0,D9=new UJ,YZ=new pJ,Z7=new v,E9=new e9,w7=new e9,cJ=new v;class Z9 extends r9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MH++}),this.uuid=E8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((KH(J))?GQ:NQ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,Z=0){this.groups.push({start:J,count:Q,materialIndex:Z})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let Z=this.attributes.normal;if(Z!==void 0){let $=new i0().getNormalMatrix(J);Z.applyNormalMatrix($),Z.needsUpdate=!0}let K=this.attributes.tangent;if(K!==void 0)K.transformDirection(J),K.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return D9.makeRotationFromQuaternion(J),this.applyMatrix4(D9),this}rotateX(J){return D9.makeRotationX(J),this.applyMatrix4(D9),this}rotateY(J){return D9.makeRotationY(J),this.applyMatrix4(D9),this}rotateZ(J){return D9.makeRotationZ(J),this.applyMatrix4(D9),this}translate(J,Q,Z){return D9.makeTranslation(J,Q,Z),this.applyMatrix4(D9),this}scale(J,Q,Z){return D9.makeScale(J,Q,Z),this.applyMatrix4(D9),this}lookAt(J){return YZ.lookAt(J),YZ.updateMatrix(),this.applyMatrix4(YZ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Z7).negate(),this.translate(Z7.x,Z7.y,Z7.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let Z=[];for(let K=0,$=J.length;K<$;K++){let W=J[K];Z.push(W.x,W.y,W.z||0)}this.setAttribute("position",new OJ(Z,3))}else{let Z=Math.min(J.length,Q.count);for(let K=0;K<Z;K++){let $=J[K];Q.setXYZ(K,$.x,$.y,$.z||0)}if(J.length>Q.count)n0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new e9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){c0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let Z=0,K=Q.length;Z<K;Z++){let $=Q[Z];if(E9.setFromBufferAttribute($),this.morphTargetsRelative)cJ.addVectors(this.boundingBox.min,E9.min),this.boundingBox.expandByPoint(cJ),cJ.addVectors(this.boundingBox.max,E9.max),this.boundingBox.expandByPoint(cJ);else this.boundingBox.expandByPoint(E9.min),this.boundingBox.expandByPoint(E9.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))c0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new f8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){c0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(J){let Z=this.boundingSphere.center;if(E9.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let X=Q[$];if(w7.setFromBufferAttribute(X),this.morphTargetsRelative)cJ.addVectors(E9.min,w7.min),E9.expandByPoint(cJ),cJ.addVectors(E9.max,w7.max),E9.expandByPoint(cJ);else E9.expandByPoint(w7.min),E9.expandByPoint(w7.max)}E9.getCenter(Z);let K=0;for(let $=0,W=J.count;$<W;$++)cJ.fromBufferAttribute(J,$),K=Math.max(K,Z.distanceToSquared(cJ));if(Q)for(let $=0,W=Q.length;$<W;$++){let X=Q[$],Y=this.morphTargetsRelative;for(let H=0,U=X.count;H<U;H++){if(cJ.fromBufferAttribute(X,H),Y)Z7.fromBufferAttribute(J,H),cJ.add(Z7);K=Math.max(K,Z.distanceToSquared(cJ))}}if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))c0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){c0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Z,normal:K,uv:$}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==Z.count)W=new I9(new Float32Array(4*Z.count),4),this.setAttribute("tangent",W);let X=[],Y=[],H=new Uint8Array(Z.count);for(let V=0;V<Z.count;V++)X[V]=new v,Y[V]=new v;let U=new v,N=new v,q=new v,G=new Z0,F=new Z0,R=new Z0,A=new v,O=new v;function E(V,I,f){H[V]=H[I]=H[f]=1,U.fromBufferAttribute(Z,V),N.fromBufferAttribute(Z,I),q.fromBufferAttribute(Z,f),G.fromBufferAttribute($,V),F.fromBufferAttribute($,I),R.fromBufferAttribute($,f),N.sub(U),q.sub(U),F.sub(G),R.sub(G);let S=1/(F.x*R.y-R.x*F.y);if(!isFinite(S))return;A.copy(N).multiplyScalar(R.y).addScaledVector(q,-F.y).multiplyScalar(S),O.copy(q).multiplyScalar(F.x).addScaledVector(N,-R.x).multiplyScalar(S),X[V].add(A),X[I].add(A),X[f].add(A),Y[V].add(O),Y[I].add(O),Y[f].add(O)}let k=this.groups;if(k.length===0)k=[{start:0,count:J.count}];for(let V=0,I=k.length;V<I;++V){let f=k[V],S=f.start,p=f.count;for(let t=S,T=S+p;t<T;t+=3)E(J.getX(t+0),J.getX(t+1),J.getX(t+2))}let z=new v,B=new v,C=new v,P=new v;function D(V){C.fromBufferAttribute(K,V),P.copy(C);let I=X[V];z.copy(I),z.sub(C.multiplyScalar(C.dot(I))).normalize(),B.crossVectors(P,I);let S=B.dot(Y[V])<0?-1:1;W.setXYZW(V,z.x,z.y,z.z,S)}for(let V=0,I=Z.count;V<I;++V)if(H[V])D(V);this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let Z=this.getAttribute("normal");if(Z===void 0||Z.count!==Q.count)Z=new I9(new Float32Array(Q.count*3),3),this.setAttribute("normal",Z);else for(let q=0,G=Z.count;q<G;q++)Z.setXYZ(q,0,0,0);let K=new v,$=new v,W=new v,X=new v,Y=new v,H=new v,U=new v,N=new v;if(J)for(let q=0,G=J.count;q<G;q+=3){let F=J.getX(q+0),R=J.getX(q+1),A=J.getX(q+2);K.fromBufferAttribute(Q,F),$.fromBufferAttribute(Q,R),W.fromBufferAttribute(Q,A),U.subVectors(W,$),N.subVectors(K,$),U.cross(N),X.fromBufferAttribute(Z,F),Y.fromBufferAttribute(Z,R),H.fromBufferAttribute(Z,A),X.add(U),Y.add(U),H.add(U),Z.setXYZ(F,X.x,X.y,X.z),Z.setXYZ(R,Y.x,Y.y,Y.z),Z.setXYZ(A,H.x,H.y,H.z)}else for(let q=0,G=Q.count;q<G;q+=3)K.fromBufferAttribute(Q,q+0),$.fromBufferAttribute(Q,q+1),W.fromBufferAttribute(Q,q+2),U.subVectors(W,$),N.subVectors(K,$),U.cross(N),Z.setXYZ(q+0,U.x,U.y,U.z),Z.setXYZ(q+1,U.x,U.y,U.z),Z.setXYZ(q+2,U.x,U.y,U.z);this.normalizeNormals(),Z.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,Z=J.count;Q<Z;Q++)cJ.fromBufferAttribute(J,Q),cJ.normalize(),J.setXYZ(Q,cJ.x,cJ.y,cJ.z)}toNonIndexed(){function J(X,Y){let{array:H,itemSize:U,normalized:N}=X,q=new H.constructor(Y.length*U),G=0,F=0;for(let R=0,A=Y.length;R<A;R++){if(X.isInterleavedBufferAttribute)G=Y[R]*X.data.stride+X.offset;else G=Y[R]*U;for(let O=0;O<U;O++)q[F++]=H[G++]}return new I9(q,U,N)}if(this.index===null)return n0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new Z9,Z=this.index.array,K=this.attributes;for(let X in K){let Y=K[X],H=J(Y,Z);Q.setAttribute(X,H)}let $=this.morphAttributes;for(let X in $){let Y=[],H=$[X];for(let U=0,N=H.length;U<N;U++){let q=H[U],G=J(q,Z);Y.push(G)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let H=W[X];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let H in Y)if(Y[H]!==void 0)J[H]=Y[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let Z=this.attributes;for(let Y in Z){let H=Z[Y];J.data.attributes[Y]=H.toJSON(J.data)}let K={},$=!1;for(let Y in this.morphAttributes){let H=this.morphAttributes[Y],U=[];for(let N=0,q=H.length;N<q;N++){let G=H[N];U.push(G.toJSON(J.data))}if(U.length>0)K[Y]=U,$=!0}if($)J.data.morphAttributes=K,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let Z=J.index;if(Z!==null)this.setIndex(Z.clone());let K=J.attributes;for(let H in K){let U=K[H];this.setAttribute(H,U.clone(Q))}let $=J.morphAttributes;for(let H in $){let U=[],N=$[H];for(let q=0,G=N.length;q<G;q++)U.push(N[q].clone(Q));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,U=W.length;H<U;H++){let N=W[H];this.addGroup(N.start,N.count,N.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class CK{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=E8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,Z){J*=this.stride,Z*=Q.stride;for(let K=0,$=this.stride;K<$;K++)this.array[J+K]=Q.array[Z+K];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};let Q=u$(this.array);if(J.arrayBuffers[Q]===void 0)J.arrayBuffers[Q]=this.array.slice(0).buffer;let Z=new this.array.constructor(J.arrayBuffers[Q]),K=new this.constructor(Z,this.stride);return K.setUsage(this.usage),K}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};let Q=u$(this.array);if(J.arrayBuffers[Q]===void 0)J.arrayBuffers[Q]=Array.from(new Uint32Array(this.array.slice(0).buffer));let Z={uuid:this.uuid,buffer:Q,type:this.array.constructor.name,stride:this.stride};return Z.usage=this.usage,Z}}function u$(J){if(J.buffer._uuid===void 0)J.buffer._uuid=E8();if(J.byteOffset===0&&J.byteLength===J.buffer.byteLength)return J.buffer._uuid;return J.buffer._uuid+":"+J.byteOffset+":"+J.byteLength}var X9=new v;class m7{constructor(J,Q,Z,K=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=Z,this.normalized=K,this._normalizationScale=J!==void 0?YQ(J.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,Z=this.data.count;Q<Z;Q++)X9.fromBufferAttribute(this,Q),X9.applyMatrix4(J),this.setXYZ(Q,X9.x,X9.y,X9.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)X9.fromBufferAttribute(this,Q),X9.applyNormalMatrix(J),this.setXYZ(Q,X9.x,X9.y,X9.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)X9.fromBufferAttribute(this,Q),X9.transformDirection(J),this.setXYZ(Q,X9.x,X9.y,X9.z);return this}getComponent(J,Q){let Z=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)Z=this._denormalize(Z);return Z}setComponent(J,Q,Z){if(this.normalized)Z=this._normalize(Z);return this.data.array[J*this.data.stride+this.offset+Q]=Z,this}setX(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=this._denormalize(Q);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=this._denormalize(Q);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=this._denormalize(Q);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=this._denormalize(Q);return Q}setXY(J,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),Z=this._normalize(Z);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this}setXYZ(J,Q,Z,K){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),Z=this._normalize(Z),K=this._normalize(K);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=K,this}setXYZW(J,Q,Z,K,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),Z=this._normalize(Z),K=this._normalize(K),$=this._normalize($);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=K,this.data.array[J+3]=$,this}clone(J){if(J===void 0){p7("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let K=Z*this.data.stride+this.offset;for(let $=0;$<this.itemSize;$++)Q.push(this.data.array[K+$])}return new I9(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new m7(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){p7("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let K=Z*this.data.stride+this.offset;for(let $=0;$<this.itemSize;$++)Q.push(this.data.array[K+$])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.max(J/Q,-1):FX(J,this.data.array)}_normalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.round(J*Q):OX(J,this.data.array)}}var HZ=new v,VH=new v,BH=new i0;class R9{constructor(J=new v(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,Z,K){return this.normal.set(J,Q,Z),this.constant=K,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,Z){let K=HZ.subVectors(Z,Q).cross(VH.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(K,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,Z=!0){let K=J.delta(HZ),$=this.normal.dot(K);if($===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/$;if(Z===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(K,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),Z=this.distanceToPoint(J.end);return Q<0&&Z>0||Z<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let Z=Q||BH.getNormalMatrix(J),K=this.coplanarPoint(HZ).applyMatrix4(J),$=this.normal.applyMatrix3(Z).normalize();return this.constant=-K.dot($),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var LH=0;class F8 extends r9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:LH++}),this.uuid=E8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new y0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let Z=J[Q];if(Z===void 0){n0(`Material: parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){n0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(K&&K.isColor)K.set(Z);else if(K&&K.isVector2&&(Z&&Z.isVector2)||K&&K.isEuler&&(Z&&Z.isEuler)||K&&K.isVector3&&(Z&&Z.isVector3))K.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let Z={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,Z.blending=this.blending,Z.side=this.side,Z.shadowSide=this.shadowSide,Z.vertexColors=this.vertexColors,Z.opacity=this.opacity,Z.transparent=this.transparent,Z.blendSrc=this.blendSrc,Z.blendDst=this.blendDst,Z.blendEquation=this.blendEquation,Z.blendSrcAlpha=this.blendSrcAlpha,Z.blendDstAlpha=this.blendDstAlpha,Z.blendEquationAlpha=this.blendEquationAlpha,Z.blendColor=this.blendColor.getHex(),Z.blendAlpha=this.blendAlpha,Z.depthFunc=this.depthFunc,Z.depthTest=this.depthTest,Z.depthWrite=this.depthWrite,Z.colorWrite=this.colorWrite,Z.clipIntersection=this.clipIntersection,Z.clipShadows=this.clipShadows,Z.stencilWriteMask=this.stencilWriteMask,Z.stencilFunc=this.stencilFunc,Z.stencilRef=this.stencilRef,Z.stencilFuncMask=this.stencilFuncMask,Z.stencilFail=this.stencilFail,Z.stencilZFail=this.stencilZFail,Z.stencilZPass=this.stencilZPass,Z.stencilWrite=this.stencilWrite,Z.polygonOffset=this.polygonOffset,Z.polygonOffsetFactor=this.polygonOffsetFactor,Z.polygonOffsetUnits=this.polygonOffsetUnits,Z.dithering=this.dithering,Z.alphaTest=this.alphaTest,Z.alphaHash=this.alphaHash,Z.alphaToCoverage=this.alphaToCoverage,Z.premultipliedAlpha=this.premultipliedAlpha,Z.forceSinglePass=this.forceSinglePass,Z.allowOverride=this.allowOverride,Z.visible=this.visible,Z.toneMapped=this.toneMapped,Z.name=this.name,this.color&&this.color.isColor)Z.color=this.color.getHex();if(this.roughness!==void 0)Z.roughness=this.roughness;if(this.metalness!==void 0)Z.metalness=this.metalness;if(this.sheen!==void 0)Z.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Z.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Z.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Z.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)Z.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Z.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Z.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Z.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Z.shininess=this.shininess;if(this.clearcoat!==void 0)Z.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Z.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)Z.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)Z.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(J).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Z.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Z.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Z.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Z.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Z.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Z.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)Z.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)Z.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)Z.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Z.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)Z.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)Z.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Z.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Z.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Z.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Z.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Z.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Z.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Z.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Z.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Z.lightMap=this.lightMap.toJSON(J).uuid,Z.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Z.aoMap=this.aoMap.toJSON(J).uuid,Z.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Z.bumpMap=this.bumpMap.toJSON(J).uuid,Z.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Z.normalMap=this.normalMap.toJSON(J).uuid,Z.normalMapType=this.normalMapType,Z.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Z.displacementMap=this.displacementMap.toJSON(J).uuid,Z.displacementScale=this.displacementScale,Z.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Z.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Z.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Z.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Z.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Z.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Z.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Z.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Z.combine=this.combine}if(this.envMapRotation!==void 0)Z.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Z.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Z.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Z.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Z.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Z.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Z.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Z.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Z.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)Z.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Z.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Z.size=this.size;if(this.sizeAttenuation!==void 0)Z.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)Z.clippingPlanes=this.clippingPlanes.map(($)=>$.toJSON());if(this.rotation!==void 0)Z.rotation=this.rotation;if(this.depthPacking!==void 0)Z.depthPacking=this.depthPacking;if(this.linewidth!==void 0)Z.linewidth=this.linewidth;if(this.linecap!==void 0)Z.linecap=this.linecap;if(this.linejoin!==void 0)Z.linejoin=this.linejoin;if(this.dashSize!==void 0)Z.dashSize=this.dashSize;if(this.gapSize!==void 0)Z.gapSize=this.gapSize;if(this.scale!==void 0)Z.scale=this.scale;if(this.wireframe!==void 0)Z.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)Z.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)Z.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)Z.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)Z.flatShading=this.flatShading;if(this.fog!==void 0)Z.fog=this.fog;if(Object.keys(this.userData).length>0)Z.userData=this.userData;function K($){let W=[];for(let X in $){let Y=$[X];delete Y.metadata,W.push(Y)}return W}if(Q){let $=K(J.textures),W=K(J.images);if($.length>0)Z.textures=$;if(W.length>0)Z.images=W}return Z}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new y0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.diffuseRoughness!==void 0)this.diffuseRoughness=J.diffuseRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessMinimum;if(J.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=J.iridescenceThicknessMaximum;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=J.iridescenceThicknessRange[1];if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map((Z)=>new R9().fromJSON(Z));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let Z=J.normalScale;if(Array.isArray(Z)===!1)Z=[Z,Z];this.normalScale=new Z0().fromArray(Z)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new Z0().fromArray(J.clearcoatNormalScale);if(J.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=Q[J.diffuseRoughnessMap]||null;if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,Z=null;if(Q!==null){let K=Q.length;Z=Array(K);for(let $=0;$!==K;++$)Z[$]=Q[$].clone()}return this.clippingPlanes=Z,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class h8 extends F8{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new y0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var K7,S7=new v,$7=new v,W7=new v,X7=new Z0,j7=new Z0,RX=new UJ,P6=new v,v7=new v,I6=new v,d$=new Z0,UZ=new Z0,c$=new Z0;class L7 extends pJ{constructor(J=new h8){super();if(this.isSprite=!0,this.type="Sprite",K7===void 0){K7=new Z9;let Q=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),Z=new CK(Q,5);K7.setIndex([0,1,2,0,2,3]),K7.setAttribute("position",new m7(Z,3,0,!1)),K7.setAttribute("uv",new m7(Z,2,3,!1))}this.geometry=K7,this.material=J,this.center=new Z0(0.5,0.5),this.count=1}intersectsFrustum(J){return J.intersectsSprite(this)}raycast(J,Q){if(J.camera===null)c0('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if($7.setFromMatrixScale(this.matrixWorld),RX.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),W7.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)$7.multiplyScalar(-W7.z);let Z=this.material.rotation,K,$;if(Z!==0)$=Math.cos(Z),K=Math.sin(Z);let W=this.center;T6(P6.set(-0.5,-0.5,0),W7,W,$7,K,$),T6(v7.set(0.5,-0.5,0),W7,W,$7,K,$),T6(I6.set(0.5,0.5,0),W7,W,$7,K,$),d$.set(0,0),UZ.set(1,0),c$.set(1,1);let X=J.ray.intersectTriangle(P6,v7,I6,!1,S7);if(X===null){if(T6(v7.set(-0.5,0.5,0),W7,W,$7,K,$),UZ.set(0,1),X=J.ray.intersectTriangle(P6,I6,v7,!1,S7),X===null)return}let Y=J.ray.origin.distanceTo(S7);if(Y<J.near||Y>J.far)return;Q.push({distance:Y,point:S7.clone(),uv:F9.getInterpolation(S7,P6,v7,I6,d$,UZ,c$,new Z0),face:null,object:this})}copy(J,Q){if(super.copy(J,Q),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}toJSON(J){let Q=super.toJSON(J);return Q.object.center=this.center.toArray(),Q}}function T6(J,Q,Z,K,$,W){if(X7.subVectors(J,Z).addScalar(0.5).multiply(K),$!==void 0)j7.x=W*X7.x-$*X7.y,j7.y=$*X7.x+W*X7.y;else j7.copy(X7);J.copy(Q),J.x+=j7.x,J.y+=j7.y,J.applyMatrix4(RX)}var n9=new v,NZ=new v,w6=new v,S6=new v;class qQ{constructor(J=new v,Q=new v(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,n9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let Z=Q.dot(this.direction);if(Z<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,Z)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=n9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return n9.copy(this.origin).addScaledVector(this.direction,Q),n9.distanceToSquared(J)}distanceSqToSegment(J,Q,Z,K){NZ.copy(J).add(Q).multiplyScalar(0.5),w6.copy(Q).sub(J).normalize(),S6.copy(this.origin).sub(NZ);let $=J.distanceTo(Q)*0.5,W=-this.direction.dot(w6),X=S6.dot(this.direction),Y=-S6.dot(w6),H=S6.lengthSq(),U=Math.abs(1-W*W),N,q,G,F;if(U>0)if(N=W*Y-X,q=W*X-Y,F=$*U,N>=0)if(q>=-F)if(q<=F){let R=1/U;N*=R,q*=R,G=N*(N+W*q+2*X)+q*(W*N+q+2*Y)+H}else q=$,N=Math.max(0,-(W*q+X)),G=-N*N+q*(q+2*Y)+H;else q=-$,N=Math.max(0,-(W*q+X)),G=-N*N+q*(q+2*Y)+H;else if(q<=-F)N=Math.max(0,-(-W*$+X)),q=N>0?-$:Math.min(Math.max(-$,-Y),$),G=-N*N+q*(q+2*Y)+H;else if(q<=F)N=0,q=Math.min(Math.max(-$,-Y),$),G=q*(q+2*Y)+H;else N=Math.max(0,-(W*$+X)),q=N>0?$:Math.min(Math.max(-$,-Y),$),G=-N*N+q*(q+2*Y)+H;else q=W>0?-$:$,N=Math.max(0,-(W*q+X)),G=-N*N+q*(q+2*Y)+H;if(Z)Z.copy(this.origin).addScaledVector(this.direction,N);if(K)K.copy(NZ).addScaledVector(w6,q);return G}intersectSphere(J,Q){if(J.radius<0)return null;n9.subVectors(J.center,this.origin);let Z=n9.dot(this.direction),K=n9.dot(n9)-Z*Z,$=J.radius*J.radius;if(K>$)return null;let W=Math.sqrt($-K),X=Z-W,Y=Z+W;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Z=-(this.origin.dot(J.normal)+J.constant)/Q;return Z>=0?Z:null}intersectPlane(J,Q){let Z=this.distanceToPlane(J);if(Z===null)return null;return this.at(Z,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let Z,K,$,W,X,Y,H=1/this.direction.x,U=1/this.direction.y,N=1/this.direction.z,q=this.origin;if(H>=0)Z=(J.min.x-q.x)*H,K=(J.max.x-q.x)*H;else Z=(J.max.x-q.x)*H,K=(J.min.x-q.x)*H;if(U>=0)$=(J.min.y-q.y)*U,W=(J.max.y-q.y)*U;else $=(J.max.y-q.y)*U,W=(J.min.y-q.y)*U;if(Z>W||$>K)return null;if($>Z||isNaN(Z))Z=$;if(W<K||isNaN(K))K=W;if(N>=0)X=(J.min.z-q.z)*N,Y=(J.max.z-q.z)*N;else X=(J.max.z-q.z)*N,Y=(J.min.z-q.z)*N;if(Z>Y||X>K)return null;if(X>Z||Z!==Z)Z=X;if(Y<K||K!==K)K=Y;if(K<0)return null;return this.at(Z>=0?Z:K,Q)}intersectsBox(J){return this.intersectBox(J,n9)!==null}intersectTriangle(J,Q,Z,K,$){let W=this.origin,X=this.direction,Y=X.x,H=X.y,U=X.z,N=J.x-W.x,q=J.y-W.y,G=J.z-W.z,F=Q.x-W.x,R=Q.y-W.y,A=Q.z-W.z,O=Z.x-W.x,E=Z.y-W.y,k=Z.z-W.z,z=Math.abs(Y),B=Math.abs(H),C=Math.abs(U),P,D,V,I,f,S,p,t,T,c,n,x;if(z>=B&&z>=C)if(V=Y,S=N,T=F,x=O,Y>=0)P=H,D=U,I=q,f=G,p=R,t=A,c=E,n=k;else P=U,D=H,I=G,f=q,p=A,t=R,c=k,n=E;else if(B>=C)if(V=H,S=q,T=R,x=E,H>=0)P=U,D=Y,I=G,f=N,p=A,t=F,c=k,n=O;else P=Y,D=U,I=N,f=G,p=F,t=A,c=O,n=k;else if(V=U,S=G,T=A,x=k,U>=0)P=Y,D=H,I=N,f=q,p=F,t=R,c=O,n=E;else P=H,D=Y,I=q,f=N,p=R,t=F,c=E,n=O;if(V===0)return null;let X0=P/V,u=D/V,r=1/V,K0=I-X0*S,A0=f-u*S,i=p-X0*T,$0=t-u*T,_0=c-X0*x,b0=n-u*x,x0=_0*$0-b0*i,k0=K0*b0-A0*_0,YJ=i*A0-$0*K0;if(K){if(x0<0||k0<0||YJ<0)return null}else if((x0<0||k0<0||YJ<0)&&(x0>0||k0>0||YJ>0))return null;let t0=x0+k0+YJ;if(t0===0)return null;let d0=r*(x0*S+k0*T+YJ*x);if(t0>0?d0<0:d0>0)return null;return this.at(d0/t0,$)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class b8 extends F8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new y0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new i9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var n$=new UJ,_8=new qQ,j6=new f8,s$=new v,v6=new v,y6=new v,f6=new v,GZ=new v,h6=new v,i$=new v,b6=new v;class CJ extends pJ{constructor(J=new Z9,Q=new b8){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let K=Q[Z[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let $=0,W=K.length;$<W;$++){let X=K[$].name||String($);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=$}}}}getVertexPosition(J,Q){let Z=this.geometry,K=Z.attributes.position,$=Z.morphAttributes.position,W=Z.morphTargetsRelative;Q.fromBufferAttribute(K,J);let X=this.morphTargetInfluences;if($&&X){h6.set(0,0,0);for(let Y=0,H=$.length;Y<H;Y++){let U=X[Y],N=$[Y];if(U===0)continue;if(GZ.fromBufferAttribute(N,J),W)h6.addScaledVector(GZ,U);else h6.addScaledVector(GZ.sub(Q),U)}Q.add(h6)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let Z=this.geometry,K=this.material,$=this.matrixWorld;if(K===void 0)return;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(j6.copy(Z.boundingSphere),j6.applyMatrix4($),_8.copy(J.ray).recast(J.near),j6.containsPoint(_8.origin)===!1){if(_8.intersectSphere(j6,s$)===null)return;if(_8.origin.distanceToSquared(s$)>(J.far-J.near)**2)return}if(n$.copy($).invert(),_8.copy(J.ray).applyMatrix4(n$),Z.boundingBox!==null){if(_8.intersectsBox(Z.boundingBox)===!1)return}this._computeIntersections(J,Q,_8)}_computeIntersections(J,Q,Z){let K,$=this.geometry,W=this.material,X=$.index,Y=$.attributes.position,H=$.attributes.uv,U=$.attributes.uv1,N=$.attributes.normal,q=$.groups,G=$.drawRange;if(X!==null)if(Array.isArray(W))for(let F=0,R=q.length;F<R;F++){let A=q[F],O=W[A.materialIndex],E=Math.max(A.start,G.start),k=Math.min(X.count,Math.min(A.start+A.count,G.start+G.count));for(let z=E,B=k;z<B;z+=3){let C=X.getX(z),P=X.getX(z+1),D=X.getX(z+2);if(K=x6(this,O,J,Z,H,U,N,C,P,D),K)K.faceIndex=Math.floor(z/3),K.face.materialIndex=A.materialIndex,Q.push(K)}}else{let F=Math.max(0,G.start),R=Math.min(X.count,G.start+G.count);for(let A=F,O=R;A<O;A+=3){let E=X.getX(A),k=X.getX(A+1),z=X.getX(A+2);if(K=x6(this,W,J,Z,H,U,N,E,k,z),K)K.faceIndex=Math.floor(A/3),Q.push(K)}}else if(Y!==void 0)if(Array.isArray(W))for(let F=0,R=q.length;F<R;F++){let A=q[F],O=W[A.materialIndex],E=Math.max(A.start,G.start),k=Math.min(Y.count,Math.min(A.start+A.count,G.start+G.count));for(let z=E,B=k;z<B;z+=3){let C=z,P=z+1,D=z+2;if(K=x6(this,O,J,Z,H,U,N,C,P,D),K)K.faceIndex=Math.floor(z/3),K.face.materialIndex=A.materialIndex,Q.push(K)}}else{let F=Math.max(0,G.start),R=Math.min(Y.count,G.start+G.count);for(let A=F,O=R;A<O;A+=3){let E=A,k=A+1,z=A+2;if(K=x6(this,W,J,Z,H,U,N,E,k,z),K)K.faceIndex=Math.floor(A/3),Q.push(K)}}}}function kH(J,Q,Z,K,$,W,X,Y){let H;if(Q.side===1)H=K.intersectTriangle(X,W,$,!0,Y);else H=K.intersectTriangle($,W,X,Q.side===0,Y);if(H===null)return null;b6.copy(Y),b6.applyMatrix4(J.matrixWorld);let U=Z.ray.origin.distanceTo(b6);if(U<Z.near||U>Z.far)return null;return{distance:U,point:b6.clone(),object:J}}function x6(J,Q,Z,K,$,W,X,Y,H,U){J.getVertexPosition(Y,v6),J.getVertexPosition(H,y6),J.getVertexPosition(U,f6);let N=kH(J,Q,Z,K,v6,y6,f6,i$);if(N){let q=new v;if(F9.getBarycoord(i$,v6,y6,f6,q),$)N.uv=F9.getInterpolatedAttribute($,Y,H,U,q,new Z0);if(W)N.uv1=F9.getInterpolatedAttribute(W,Y,H,U,q,new Z0);if(X){if(N.normal=F9.getInterpolatedAttribute(X,Y,H,U,q,new v),N.normal.dot(K.direction)>0)N.normal.multiplyScalar(-1)}let G={a:Y,b:H,c:U,normal:new v,materialIndex:0};F9.getNormal(v6,y6,f6,G.normal),N.face=G,N.barycoord=q}return N}class EQ extends nJ{constructor(J=null,Q=1,Z=1,K,$,W,X,Y,H=1003,U=1003,N,q){super(null,W,X,Y,H,U,K,$,N,q);this.isDataTexture=!0,this.image={data:J,width:Q,height:Z},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class i6 extends I9{constructor(J,Q,Z,K=1){super(J,Q,Z);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=K}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var Y7=new UJ,o$=new UJ,g6=[],a$=new e9,zH=new UJ,y7=new CJ,f7=new f8;class FQ extends CJ{constructor(J,Q,Z){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new i6(new Float32Array(Z*16),16),this.instanceColor=null,this.morphTexture=null,this.count=Z,this.boundingBox=null,this.boundingSphere=null;for(let K=0;K<Z;K++)this.setMatrixAt(K,zH)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new e9;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let Z=0;Z<Q;Z++)this.getMatrixAt(Z,Y7),a$.copy(J.boundingBox).applyMatrix4(Y7),this.boundingBox.union(a$)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new f8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let Z=0;Z<Q;Z++)this.getMatrixAt(Z,Y7),f7.copy(J.boundingSphere).applyMatrix4(Y7),this.boundingSphere.union(f7)}copy(J,Q){return super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),this.morphTexture=J.morphTexture!==null?J.morphTexture.clone():null,this.instanceColor=J.instanceColor!==null?J.instanceColor.clone():null,this.count=J.count,this.boundingBox=J.boundingBox!==null?J.boundingBox.clone():null,this.boundingSphere=J.boundingSphere!==null?J.boundingSphere.clone():null,this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let Z=Q.morphTargetInfluences,K=this.morphTexture.source.data.data,$=Z.length+1,W=J*$+1;for(let X=0;X<Z.length;X++)Z[X]=K[W+X]}raycast(J,Q){let Z=this.matrixWorld,K=this.count;if(y7.geometry=this.geometry,y7.material=this.material,y7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(f7.copy(this.boundingSphere),f7.applyMatrix4(Z),J.ray.intersectsSphere(f7)===!1)return;for(let $=0;$<K;$++){this.getMatrixAt($,Y7),o$.multiplyMatrices(Z,Y7),y7.matrixWorld=o$,y7.raycast(J,g6);for(let W=0,X=g6.length;W<X;W++){let Y=g6[W];Y.instanceId=$,Y.object=this,Q.push(Y)}g6.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new i6(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let Z=Q.morphTargetInfluences,K=Z.length+1;if(this.morphTexture===null)this.morphTexture=new EQ(new Float32Array(K*this.count),K,this.count,1028,1015);let $=this.morphTexture.source.data.data,W=0;for(let H=0;H<Z.length;H++)W+=Z[H];let X=this.geometry.morphTargetsRelative?1:1-W,Y=K*J;return $[Y]=X,$.set(Z,Y+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var P8=new f8,AH=new Z0(0.5,0.5),p6=new v;class T8{constructor(J=new R9,Q=new R9,Z=new R9,K=new R9,$=new R9,W=new R9){this.planes=[J,Q,Z,K,$,W]}set(J,Q,Z,K,$,W){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy(Z),X[3].copy(K),X[4].copy($),X[5].copy(W),this}copy(J){let Q=this.planes;for(let Z=0;Z<6;Z++)Q[Z].copy(J.planes[Z]);return this}setFromProjectionMatrix(J,Q=2000,Z=!1){let K=this.planes,$=J.elements,W=$[0],X=$[1],Y=$[2],H=$[3],U=$[4],N=$[5],q=$[6],G=$[7],F=$[8],R=$[9],A=$[10],O=$[11],E=$[12],k=$[13],z=$[14],B=$[15];if(K[0].setComponents(H-W,G-U,O-F,B-E).normalize(),K[1].setComponents(H+W,G+U,O+F,B+E).normalize(),K[2].setComponents(H+X,G+N,O+R,B+k).normalize(),K[3].setComponents(H-X,G-N,O-R,B-k).normalize(),Z)K[4].setComponents(Y,q,A,z).normalize(),K[5].setComponents(H-Y,G-q,O-A,B-z).normalize();else if(K[4].setComponents(H-Y,G-q,O-A,B-z).normalize(),Q===2000)K[5].setComponents(H+Y,G+q,O+A,B+z).normalize();else if(Q===2001)K[5].setComponents(Y,q,A,z).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();P8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();P8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(P8)}intersectsSprite(J){P8.center.set(0,0,0);let Q=AH.distanceTo(J.center);return P8.radius=0.7071067811865476+Q,P8.applyMatrix4(J.matrixWorld),this.intersectsSphere(P8)}intersectsSphere(J){let Q=this.planes,Z=J.center,K=-J.radius;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(Z)<K)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let Z=0;Z<6;Z++){let K=Q[Z];if(p6.x=K.normal.x>0?J.max.x:J.min.x,p6.y=K.normal.y>0?J.max.y:J.min.y,p6.z=K.normal.z>0?J.max.z:J.min.z,K.distanceToPoint(p6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var r$=new UJ;class OQ{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(J){let Q=J.cameras,Z=this._frustums;for(let K=0;K<Q.length;K++){let $=Q[K];if(r$.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Z[K]===void 0)Z[K]=new T8;Z[K].setFromProjectionMatrix(r$,$.coordinateSystem,$.reversedDepth)}return this._count=Q.length,this}getFrustum(J){return this._frustums[J]}intersectsObject(J){let Q=this._frustums;for(let Z=0;Z<this._count;Z++)if(Q[Z].intersectsObject(J))return!0;return!1}intersectsSprite(J){let Q=this._frustums;for(let Z=0;Z<this._count;Z++)if(Q[Z].intersectsSprite(J))return!0;return!1}intersectsSphere(J){let Q=this._frustums;for(let Z=0;Z<this._count;Z++)if(Q[Z].intersectsSphere(J))return!0;return!1}intersectsBox(J){let Q=this._frustums;for(let Z=0;Z<this._count;Z++)if(Q[Z].intersectsBox(J))return!0;return!1}containsPoint(J){let Q=this._frustums;for(let Z=0;Z<this._count;Z++)if(Q[Z].containsPoint(J))return!0;return!1}copy(J){this.coordinateSystem=J.coordinateSystem;let Q=this._frustums,Z=J._frustums;for(let K=0;K<J._count;K++){if(Q[K]===void 0)Q[K]=new T8;Q[K].copy(Z[K])}return this._count=J._count,this}clone(){return new OQ().copy(this)}}class DQ extends nJ{constructor(J=[],Q=301,Z,K,$,W,X,Y,H,U){super(J,Q,Z,K,$,W,X,Y,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class O8 extends nJ{constructor(J,Q,Z,K,$,W,X,Y,H){super(J,Q,Z,K,$,W,X,Y,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class D8 extends nJ{constructor(J,Q,Z=1014,K,$,W,X=1003,Y=1003,H,U=1026,N=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let q={width:J,height:Q,depth:N};super(q,K,$,W,X,Y,U,Z,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new a7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class RQ extends D8{constructor(J,Q=1014,Z=301,K,$,W=1003,X=1003,Y,H=1026){let U={width:J,height:J,depth:1},N=[U,U,U,U,U,U];super(J,J,Q,Z,K,$,W,X,Y,H);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class MQ extends nJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class Y9 extends Z9{constructor(J=1,Q=1,Z=1,K=1,$=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:Z,widthSegments:K,heightSegments:$,depthSegments:W};let X=this;K=Math.floor(K),$=Math.floor($),W=Math.floor(W);let Y=[],H=[],U=[],N=[],q=0,G=0;F("z","y","x",-1,-1,Z,Q,J,W,$,0),F("z","y","x",1,-1,Z,Q,-J,W,$,1),F("x","z","y",1,1,J,Z,Q,K,W,2),F("x","z","y",1,-1,J,Z,-Q,K,W,3),F("x","y","z",1,-1,J,Q,Z,K,$,4),F("x","y","z",-1,-1,J,Q,-Z,K,$,5),this.setIndex(Y),this.setAttribute("position",new OJ(H,3)),this.setAttribute("normal",new OJ(U,3)),this.setAttribute("uv",new OJ(N,2));function F(R,A,O,E,k,z,B,C,P,D,V){let I=z/P,f=B/D,S=z/2,p=B/2,t=C/2,T=P+1,c=D+1,n=0,x=0,X0=new v;for(let u=0;u<c;u++){let r=u*f-p;for(let K0=0;K0<T;K0++){let A0=K0*I-S;X0[R]=A0*E,X0[A]=r*k,X0[O]=t,H.push(X0.x,X0.y,X0.z),X0[R]=0,X0[A]=0,X0[O]=C>0?1:-1,U.push(X0.x,X0.y,X0.z),N.push(K0/P),N.push(1-u/D),n+=1}}for(let u=0;u<D;u++)for(let r=0;r<P;r++){let K0=q+r+T*u,A0=q+r+T*(u+1),i=q+(r+1)+T*(u+1),$0=q+(r+1)+T*u;Y.push(K0,A0,$0),Y.push(A0,i,$0),x+=6}X.addGroup(G,x,V),G+=x,q+=n}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new Y9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class x8 extends Z9{constructor(J=1,Q=32,Z=0,K=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:Z,thetaLength:K},Q=Math.max(3,Q);let $=[],W=[],X=[],Y=[],H=new v,U=new Z0;W.push(0,0,0),X.push(0,0,1),Y.push(0.5,0.5);for(let N=0,q=3;N<=Q;N++,q+=3){let G=Z+N/Q*K;H.x=J*Math.cos(G),H.y=J*Math.sin(G),W.push(H.x,H.y,H.z),X.push(0,0,1),U.x=(W[q]/J+1)/2,U.y=(W[q+1]/J+1)/2,Y.push(U.x,U.y)}for(let N=1;N<=Q;N++)$.push(N,N+1,0);this.setIndex($),this.setAttribute("position",new OJ(W,3)),this.setAttribute("normal",new OJ(X,3)),this.setAttribute("uv",new OJ(Y,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new x8(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class f9 extends Z9{constructor(J=1,Q=1,Z=1,K=32,$=1,W=!1,X=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:Z,radialSegments:K,heightSegments:$,openEnded:W,thetaStart:X,thetaLength:Y};let H=this;K=Math.floor(K),$=Math.floor($);let U=[],N=[],q=[],G=[],F=0,R=[],A=Z/2,O=0;if(E(),W===!1){if(J>0)k(!0);if(Q>0)k(!1)}this.setIndex(U),this.setAttribute("position",new OJ(N,3)),this.setAttribute("normal",new OJ(q,3)),this.setAttribute("uv",new OJ(G,2));function E(){let z=new v,B=new v,C=0,P=(Q-J)/Z;for(let D=0;D<=$;D++){let V=[],I=D/$,f=I*(Q-J)+J;for(let S=0;S<=K;S++){let p=S/K,t=p*Y+X,T=Math.sin(t),c=Math.cos(t);B.x=f*T,B.y=-I*Z+A,B.z=f*c,N.push(B.x,B.y,B.z),z.set(T,P,c).normalize(),q.push(z.x,z.y,z.z),G.push(p,1-I),V.push(F++)}R.push(V)}for(let D=0;D<K;D++)for(let V=0;V<$;V++){let I=R[V][D],f=R[V+1][D],S=R[V+1][D+1],p=R[V][D+1];if(J>0||V!==0)U.push(I,f,p),C+=3;if(Q>0||V!==$-1)U.push(f,S,p),C+=3}H.addGroup(O,C,0),O+=C}function k(z){let B=F,C=new Z0,P=new v,D=0,V=z===!0?J:Q,I=z===!0?1:-1;for(let S=1;S<=K;S++)N.push(0,A*I,0),q.push(0,I,0),G.push(0.5,0.5),F++;let f=F;for(let S=0;S<=K;S++){let t=S/K*Y+X,T=Math.cos(t),c=Math.sin(t);P.x=V*c,P.y=A*I,P.z=V*T,N.push(P.x,P.y,P.z),q.push(0,I,0),C.x=T*0.5+0.5,C.y=c*0.5*I+0.5,G.push(C.x,C.y),F++}for(let S=0;S<K;S++){let p=B+S,t=f+S;if(z===!0)U.push(t,t+1,p);else U.push(t+1,t,p);D+=3}H.addGroup(O,D,z===!0?1:2),O+=D}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new f9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class w9 extends f9{constructor(J=1,Q=1,Z=32,K=1,$=!1,W=0,X=Math.PI*2){super(0,J,Q,Z,K,$,W,X);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:Z,heightSegments:K,openEnded:$,thetaStart:W,thetaLength:X}}static fromJSON(J){return new w9(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class J6 extends Z9{constructor(J=[],Q=[],Z=1,K=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:Z,detail:K};let $=[],W=[];if(X(K),H(Z),U(),this.setAttribute("position",new OJ($,3)),this.setAttribute("normal",new OJ($.slice(),3)),this.setAttribute("uv",new OJ(W,2)),K===0)this.computeVertexNormals();else this.normalizeNormals();function X(E){let k=new v,z=new v,B=new v;for(let C=0;C<Q.length;C+=3)G(Q[C+0],k),G(Q[C+1],z),G(Q[C+2],B),Y(k,z,B,E)}function Y(E,k,z,B){let C=B+1,P=[];for(let D=0;D<=C;D++){P[D]=[];let V=E.clone().lerp(z,D/C),I=k.clone().lerp(z,D/C),f=C-D;for(let S=0;S<=f;S++)if(S===0&&D===C)P[D][S]=V;else P[D][S]=V.clone().lerp(I,S/f)}for(let D=0;D<C;D++)for(let V=0;V<2*(C-D)-1;V++){let I=Math.floor(V/2);if(V%2===0)q(P[D][I+1]),q(P[D+1][I]),q(P[D][I]);else q(P[D][I+1]),q(P[D+1][I+1]),q(P[D+1][I])}}function H(E){let k=new v;for(let z=0;z<$.length;z+=3)k.x=$[z+0],k.y=$[z+1],k.z=$[z+2],k.normalize().multiplyScalar(E),$[z+0]=k.x,$[z+1]=k.y,$[z+2]=k.z}function U(){let E=new v;for(let k=0;k<$.length;k+=3){E.x=$[k+0],E.y=$[k+1],E.z=$[k+2];let z=A(E)/2/Math.PI+0.5,B=O(E)/Math.PI+0.5;W.push(z,1-B)}F(),N()}function N(){for(let E=0;E<W.length;E+=6){let k=W[E+0],z=W[E+2],B=W[E+4],C=Math.max(k,z,B),P=Math.min(k,z,B);if(C>0.9&&P<0.1){if(k<0.2)W[E+0]+=1;if(z<0.2)W[E+2]+=1;if(B<0.2)W[E+4]+=1}}}function q(E){$.push(E.x,E.y,E.z)}function G(E,k){let z=E*3;k.x=J[z+0],k.y=J[z+1],k.z=J[z+2]}function F(){let E=new v,k=new v,z=new v,B=new v,C=new Z0,P=new Z0,D=new Z0;for(let V=0,I=0;V<$.length;V+=9,I+=6){E.set($[V+0],$[V+1],$[V+2]),k.set($[V+3],$[V+4],$[V+5]),z.set($[V+6],$[V+7],$[V+8]),C.set(W[I+0],W[I+1]),P.set(W[I+2],W[I+3]),D.set(W[I+4],W[I+5]),B.copy(E).add(k).add(z).divideScalar(3);let f=A(B);R(C,I+0,E,f),R(P,I+2,k,f),R(D,I+4,z,f)}}function R(E,k,z,B){if(B<0&&E.x===1)W[k]=E.x-1;if(z.x===0&&z.z===0)W[k]=B/2/Math.PI+0.5}function A(E){return Math.atan2(E.z,-E.x)}function O(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new J6(J.vertices,J.indices,J.radius,J.detail)}}class g8 extends J6{constructor(J=1,Q=0){let Z=(1+Math.sqrt(5))/2,K=1/Z,$=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-K,-Z,0,-K,Z,0,K,-Z,0,K,Z,-K,-Z,0,-K,Z,0,K,-Z,0,K,Z,0,-Z,0,-K,Z,0,-K,-Z,0,K,Z,0,K],W=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super($,W,J,Q);this.type="DodecahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new g8(J.radius,J.detail)}}class k9{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){n0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let Z=this.getUtoTmapping(J);return this.getPoint(Z,Q)}getPoints(J=5){let Q=[];for(let Z=0;Z<=J;Z++)Q.push(this.getPoint(Z/J));return Q}getSpacedPoints(J=5){let Q=[];for(let Z=0;Z<=J;Z++)Q.push(this.getPointAt(Z/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],Z,K=this.getPoint(0),$=0;Q.push(0);for(let W=1;W<=J;W++)Z=this.getPoint(W/J),$+=Z.distanceTo(K),Q.push($),K=Z;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let Z=this.getLengths(),K=0,$=Z.length,W;if(Q)W=Q;else W=J*Z[$-1];let X=0,Y=$-1,H;while(X<=Y)if(K=Math.floor(X+(Y-X)/2),H=Z[K]-W,H<0)X=K+1;else if(H>0)Y=K-1;else{Y=K;break}if(K=Y,Z[K]===W)return K/($-1);let U=Z[K],q=Z[K+1]-U,G=(W-U)/q;return(K+G)/($-1)}getTangent(J,Q){let K=J-0.0001,$=J+0.0001;if(K<0)K=0;if($>1)$=1;let W=this.getPoint(K),X=this.getPoint($),Y=Q||(W.isVector2?new Z0:new v);return Y.copy(X).sub(W).normalize(),Y}getTangentAt(J,Q){let Z=this.getUtoTmapping(J);return this.getTangent(Z,Q)}computeFrenetFrames(J,Q=!1){let Z=new v,K=[],$=[],W=[],X=new v,Y=new UJ;for(let G=0;G<=J;G++){let F=G/J;K[G]=this.getTangentAt(F,new v)}$[0]=new v,W[0]=new v;let H=Number.MAX_VALUE,U=Math.abs(K[0].x),N=Math.abs(K[0].y),q=Math.abs(K[0].z);if(U<=H)H=U,Z.set(1,0,0);if(N<=H)H=N,Z.set(0,1,0);if(q<=H)Z.set(0,0,1);X.crossVectors(K[0],Z).normalize(),$[0].crossVectors(K[0],X),W[0].crossVectors(K[0],$[0]);for(let G=1;G<=J;G++){if($[G]=$[G-1].clone(),W[G]=W[G-1].clone(),X.crossVectors(K[G-1],K[G]),X.length()>Number.EPSILON){X.normalize();let F=Math.acos(ZJ(K[G-1].dot(K[G]),-1,1));$[G].applyMatrix4(Y.makeRotationAxis(X,F))}W[G].crossVectors(K[G],$[G])}if(Q===!0){let G=Math.acos(ZJ($[0].dot($[J]),-1,1));if(G/=J,K[0].dot(X.crossVectors($[0],$[J]))>0)G=-G;for(let F=1;F<=J;F++)$[F].applyMatrix4(Y.makeRotationAxis(K[F],G*F)),W[F].crossVectors(K[F],$[F])}return{tangents:K,normals:$,binormals:W}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this.cacheArcLengths=null,this}}class Q6 extends k9{constructor(J=0,Q=0,Z=1,K=1,$=0,W=Math.PI*2,X=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=Z,this.yRadius=K,this.aStartAngle=$,this.aEndAngle=W,this.aClockwise=X,this.aRotation=Y}getPoint(J,Q=new Z0){let Z=Q,K=Math.PI*2,$=this.aEndAngle-this.aStartAngle,W=Math.abs($)<Number.EPSILON;while($<0)$+=K;while($>K)$-=K;if($<Number.EPSILON)if(W)$=0;else $=K;if(this.aClockwise===!0&&!W)if($===K)$=-K;else $=$-K;let X=this.aStartAngle+J*$,Y=this.aX+this.xRadius*Math.cos(X),H=this.aY+this.yRadius*Math.sin(X);if(this.aRotation!==0){let U=Math.cos(this.aRotation),N=Math.sin(this.aRotation),q=Y-this.aX,G=H-this.aY;Y=q*U-G*N+this.aX,H=q*N+G*U+this.aY}return Z.set(Y,H)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class _K extends Q6{constructor(J,Q,Z,K,$,W){super(J,Q,Z,Z,K,$,W);this.isArcCurve=!0,this.type="ArcCurve"}}function PK(){let J=0,Q=0,Z=0,K=0;function $(W,X,Y,H){J=W,Q=Y,Z=-3*W+3*X-2*Y-H,K=2*W-2*X+Y+H}return{initCatmullRom:function(W,X,Y,H,U){$(X,Y,U*(Y-W),U*(H-X))},initNonuniformCatmullRom:function(W,X,Y,H,U,N,q){let G=(X-W)/U-(Y-W)/(U+N)+(Y-X)/N,F=(Y-X)/N-(H-X)/(N+q)+(H-Y)/q;G*=N,F*=N,$(X,Y,G,F)},calc:function(W){let X=W*W,Y=X*W;return J+Q*W+Z*X+K*Y}}}var t$=new v,e$=new v,qZ=new PK,EZ=new PK,FZ=new PK;class IK extends k9{constructor(J=[],Q=!1,Z="centripetal",K=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=Z,this.tension=K}getPoint(J,Q=new v){let Z=Q,K=this.points,$=K.length,W=($-(this.closed?0:1))*J,X=Math.floor(W),Y=W-X;if(this.closed)X+=X>0?0:(Math.floor(Math.abs(X)/$)+1)*$;else if(Y===0&&X===$-1)X=$-2,Y=1;let H,U;if(this.closed||X>0)H=K[(X-1)%$];else e$.subVectors(K[0],K[1]).add(K[0]),H=e$;let N=K[X%$],q=K[(X+1)%$];if(this.closed||X+2<$)U=K[(X+2)%$];else t$.subVectors(K[$-1],K[$-2]).add(K[$-1]),U=t$;if(this.curveType==="centripetal"||this.curveType==="chordal"){let G=this.curveType==="chordal"?0.5:0.25,F=Math.pow(H.distanceToSquared(N),G),R=Math.pow(N.distanceToSquared(q),G),A=Math.pow(q.distanceToSquared(U),G);if(R<0.0001)R=1;if(F<0.0001)F=R;if(A<0.0001)A=R;qZ.initNonuniformCatmullRom(H.x,N.x,q.x,U.x,F,R,A),EZ.initNonuniformCatmullRom(H.y,N.y,q.y,U.y,F,R,A),FZ.initNonuniformCatmullRom(H.z,N.z,q.z,U.z,F,R,A)}else if(this.curveType==="catmullrom")qZ.initCatmullRom(H.x,N.x,q.x,U.x,this.tension),EZ.initCatmullRom(H.y,N.y,q.y,U.y,this.tension),FZ.initCatmullRom(H.z,N.z,q.z,U.z,this.tension);return Z.set(qZ.calc(Y),EZ.calc(Y),FZ.calc(Y)),Z}copy(J){super.copy(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let K=J.points[Q];this.points.push(K.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,Z=this.points.length;Q<Z;Q++){let K=this.points[Q];J.points.push(K.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let K=J.points[Q];this.points.push(new v().fromArray(K))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function JW(J,Q,Z,K,$){let W=(K-Q)*0.5,X=($-Z)*0.5,Y=J*J,H=J*Y;return(2*Z-2*K+W+X)*H+(-3*Z+3*K-2*W-X)*Y+W*J+Z}function CH(J,Q){let Z=1-J;return Z*Z*Q}function _H(J,Q){return 2*(1-J)*J*Q}function PH(J,Q){return J*J*Q}function x7(J,Q,Z,K){return CH(J,Q)+_H(J,Z)+PH(J,K)}function IH(J,Q){let Z=1-J;return Z*Z*Z*Q}function TH(J,Q){let Z=1-J;return 3*Z*Z*J*Q}function wH(J,Q){return 3*(1-J)*J*J*Q}function SH(J,Q){return J*J*J*Q}function g7(J,Q,Z,K,$){return IH(J,Q)+TH(J,Z)+wH(J,K)+SH(J,$)}class VQ extends k9{constructor(J=new Z0,Q=new Z0,Z=new Z0,K=new Z0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=Z,this.v3=K}getPoint(J,Q=new Z0){let Z=Q,K=this.v0,$=this.v1,W=this.v2,X=this.v3;return Z.set(g7(J,K.x,$.x,W.x,X.x),g7(J,K.y,$.y,W.y,X.y)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class TK extends k9{constructor(J=new v,Q=new v,Z=new v,K=new v){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=Z,this.v3=K}getPoint(J,Q=new v){let Z=Q,K=this.v0,$=this.v1,W=this.v2,X=this.v3;return Z.set(g7(J,K.x,$.x,W.x,X.x),g7(J,K.y,$.y,W.y,X.y),g7(J,K.z,$.z,W.z,X.z)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class BQ extends k9{constructor(J=new Z0,Q=new Z0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new Z0){let Z=Q;if(J===1)Z.copy(this.v2);else Z.copy(this.v2).sub(this.v1),Z.multiplyScalar(J).add(this.v1);return Z}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new Z0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class wK extends k9{constructor(J=new v,Q=new v){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new v){let Z=Q;if(J===1)Z.copy(this.v2);else Z.copy(this.v2).sub(this.v1),Z.multiplyScalar(J).add(this.v1);return Z}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new v){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class LQ extends k9{constructor(J=new Z0,Q=new Z0,Z=new Z0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=Z}getPoint(J,Q=new Z0){let Z=Q,K=this.v0,$=this.v1,W=this.v2;return Z.set(x7(J,K.x,$.x,W.x),x7(J,K.y,$.y,W.y)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class SK extends k9{constructor(J=new v,Q=new v,Z=new v){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=Z}getPoint(J,Q=new v){let Z=Q,K=this.v0,$=this.v1,W=this.v2;return Z.set(x7(J,K.x,$.x,W.x),x7(J,K.y,$.y,W.y),x7(J,K.z,$.z,W.z)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class kQ extends k9{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new Z0){let Z=Q,K=this.points,$=(K.length-1)*J,W=Math.floor($),X=$-W,Y=K[W===0?W:W-1],H=K[W],U=K[W>K.length-2?K.length-1:W+1],N=K[W>K.length-3?K.length-1:W+2];return Z.set(JW(X,Y.x,H.x,U.x,N.x),JW(X,Y.y,H.y,U.y,N.y)),Z}copy(J){super.copy(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let K=J.points[Q];this.points.push(K.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,Z=this.points.length;Q<Z;Q++){let K=this.points[Q];J.points.push(K.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let K=J.points[Q];this.points.push(new Z0().fromArray(K))}return this}}var DZ=Object.freeze({__proto__:null,ArcCurve:_K,CatmullRomCurve3:IK,CubicBezierCurve:VQ,CubicBezierCurve3:TK,EllipseCurve:Q6,LineCurve:BQ,LineCurve3:wK,QuadraticBezierCurve:LQ,QuadraticBezierCurve3:SK,SplineCurve:kQ});class jK extends k9{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let Z=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new DZ[Z](Q,J))}return this}getPoint(J,Q){let Z=J*this.getLength(),K=this.getCurveLengths(),$=0;while($<K.length){if(K[$]>=Z){let W=K[$]-Z,X=this.curves[$],Y=X.getLength(),H=Y===0?0:1-W/Y;return X.getPointAt(H,Q)}$++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let Z=0,K=this.curves.length;Z<K;Z++)Q+=this.curves[Z].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let Z=0;Z<=J;Z++)Q.push(this.getPoint(Z/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],Z;for(let K=0,$=this.curves;K<$.length;K++){let W=$[K],X=W.isEllipseCurve?J*2:W.isLineCurve||W.isLineCurve3?1:W.isSplineCurve?J*W.points.length:J,Y=W.getPoints(X);for(let H=0;H<Y.length;H++){let U=Y[H];if(Z&&Z.equals(U))continue;Q.push(U),Z=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,Z=J.curves.length;Q<Z;Q++){let K=J.curves[Q];this.curves.push(K.clone())}return this.autoClose=J.autoClose,this.cacheLengths=null,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,Z=this.curves.length;Q<Z;Q++){let K=this.curves[Q];J.curves.push(K.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,Z=J.curves.length;Q<Z;Q++){let K=J.curves[Q];this.curves.push(new DZ[K.type]().fromJSON(K))}return this.cacheLengths=null,this}}class o6 extends jK{constructor(J){super();if(this.type="Path",this.currentPoint=new Z0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,Z=J.length;Q<Z;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let Z=new BQ(this.currentPoint.clone(),new Z0(J,Q));return this.curves.push(Z),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,Z,K){let $=new LQ(this.currentPoint.clone(),new Z0(J,Q),new Z0(Z,K));return this.curves.push($),this.currentPoint.set(Z,K),this}bezierCurveTo(J,Q,Z,K,$,W){let X=new VQ(this.currentPoint.clone(),new Z0(J,Q),new Z0(Z,K),new Z0($,W));return this.curves.push(X),this.currentPoint.set($,W),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),Z=new kQ(Q);return this.curves.push(Z),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,Z,K,$,W){let X=this.currentPoint.x,Y=this.currentPoint.y;return this.absarc(J+X,Q+Y,Z,K,$,W),this}absarc(J,Q,Z,K,$,W){return this.absellipse(J,Q,Z,Z,K,$,W),this}ellipse(J,Q,Z,K,$,W,X,Y){let H=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+H,Q+U,Z,K,$,W,X,Y),this}absellipse(J,Q,Z,K,$,W,X,Y){let H=new Q6(J,Q,Z,K,$,W,X,Y);if(this.curves.length>0){let N=H.getPoint(0);if(!N.equals(this.currentPoint))this.lineTo(N.x,N.y)}this.curves.push(H);let U=H.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class Z6 extends o6{constructor(J){super(J);this.uuid=E8(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let Z=0,K=this.holes.length;Z<K;Z++)Q[Z]=this.holes[Z].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,Z=J.holes.length;Q<Z;Q++){let K=J.holes[Q];this.holes.push(K.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,Z=this.holes.length;Q<Z;Q++){let K=this.holes[Q];J.holes.push(K.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,Z=J.holes.length;Q<Z;Q++){let K=J.holes[Q];this.holes.push(new o6().fromJSON(K))}return this}}function jH(J,Q,Z=2){let K=Q&&Q.length,$=K?Q[0]*Z:J.length,W=MX(J,0,$,Z,!0),X=[];if(!W||W.next===W.prev)return X;let Y,H,U;if(K)W=bH(J,Q,W,Z);if(J.length>80*Z){Y=J[0],H=J[1];let N=Y,q=H;for(let G=Z;G<$;G+=Z){let F=J[G],R=J[G+1];if(F<Y)Y=F;if(R<H)H=R;if(F>N)N=F;if(R>q)q=R}U=Math.max(N-Y,q-H),U=U!==0?32767/U:0}return l7(W,X,Z,Y,H,U,0),X}function MX(J,Q,Z,K,$){let W;if($===iH(J,Q,Z,K)>0)for(let X=Q;X<Z;X+=K)W=QW(X/K|0,J[X],J[X+1],W);else for(let X=Z-K;X>=Q;X-=K)W=QW(X/K|0,J[X],J[X+1],W);if(W&&O7(W,W.next))d7(W),W=W.next;return W}function w8(J,Q){if(!J)return J;if(!Q)Q=J;let Z=J,K;do if(K=!1,!Z.steiner&&(O7(Z,Z.next)||SJ(Z.prev,Z,Z.next)===0)){if(d7(Z),Z=Q=Z.prev,Z===Z.next)break;K=!0}else Z=Z.next;while(K||Z!==Q);return Q}function l7(J,Q,Z,K,$,W,X){if(!J)return;if(!X&&W)lH(J,K,$,W);let Y=J;while(J.prev!==J.next){let{prev:H,next:U}=J;if(W?yH(J,K,$,W):vH(J)){Q.push(H.i,J.i,U.i),d7(J),J=U.next,Y=U.next;continue}if(J=U,J===Y){if(!X)l7(w8(J),Q,Z,K,$,W,1);else if(X===1)J=fH(w8(J),Q),l7(J,Q,Z,K,$,W,2);else if(X===2)hH(J,Q,Z,K,$,W);break}}}function vH(J){let Q=J.prev,Z=J,K=J.next;if(SJ(Q,Z,K)>=0)return!1;let $=Q.x,W=Z.x,X=K.x,Y=Q.y,H=Z.y,U=K.y,N=Math.min($,W,X),q=Math.min(Y,H,U),G=Math.max($,W,X),F=Math.max(Y,H,U),R=K.next;while(R!==Q){if(R.x>=N&&R.x<=G&&R.y>=q&&R.y<=F&&h7($,Y,W,H,X,U,R.x,R.y)&&SJ(R.prev,R,R.next)>=0)return!1;R=R.next}return!0}function yH(J,Q,Z,K){let $=J.prev,W=J,X=J.next;if(SJ($,W,X)>=0)return!1;let Y=$.x,H=W.x,U=X.x,N=$.y,q=W.y,G=X.y,F=Math.min(Y,H,U),R=Math.min(N,q,G),A=Math.max(Y,H,U),O=Math.max(N,q,G),E=RZ(F,R,Q,Z,K),k=RZ(A,O,Q,Z,K),z=J.prevZ,B=J.nextZ;while(z&&z.z>=E&&B&&B.z<=k){if(z.x>=F&&z.x<=A&&z.y>=R&&z.y<=O&&z!==$&&z!==X&&h7(Y,N,H,q,U,G,z.x,z.y)&&SJ(z.prev,z,z.next)>=0)return!1;if(z=z.prevZ,B.x>=F&&B.x<=A&&B.y>=R&&B.y<=O&&B!==$&&B!==X&&h7(Y,N,H,q,U,G,B.x,B.y)&&SJ(B.prev,B,B.next)>=0)return!1;B=B.nextZ}while(z&&z.z>=E){if(z.x>=F&&z.x<=A&&z.y>=R&&z.y<=O&&z!==$&&z!==X&&h7(Y,N,H,q,U,G,z.x,z.y)&&SJ(z.prev,z,z.next)>=0)return!1;z=z.prevZ}while(B&&B.z<=k){if(B.x>=F&&B.x<=A&&B.y>=R&&B.y<=O&&B!==$&&B!==X&&h7(Y,N,H,q,U,G,B.x,B.y)&&SJ(B.prev,B,B.next)>=0)return!1;B=B.nextZ}return!0}function fH(J,Q){let Z=J;do{let K=Z.prev,$=Z.next.next;if(!O7(K,$)&&BX(K,Z,Z.next,$)&&u7(K,$)&&u7($,K))Q.push(K.i,Z.i,$.i),d7(Z),d7(Z.next),Z=J=$;Z=Z.next}while(Z!==J);return w8(Z)}function hH(J,Q,Z,K,$,W){let X=J;do{let Y=X.next.next;while(Y!==X.prev){if(X.i!==Y.i&&cH(X,Y)){let H=LX(X,Y);X=w8(X,X.next),H=w8(H,H.next),l7(X,Q,Z,K,$,W,0),l7(H,Q,Z,K,$,W,0);return}Y=Y.next}X=X.next}while(X!==J)}function bH(J,Q,Z,K){let $=[];for(let W=0,X=Q.length;W<X;W++){let Y=Q[W]*K,H=W<X-1?Q[W+1]*K:J.length,U=MX(J,Y,H,K,!1);if(U===U.next)U.steiner=!0;$.push(dH(U))}$.sort(xH);for(let W=0;W<$.length;W++)Z=gH($[W],Z);return Z}function xH(J,Q){let Z=J.x-Q.x;if(Z===0){if(Z=J.y-Q.y,Z===0){let K=(J.next.y-J.y)/(J.next.x-J.x),$=(Q.next.y-Q.y)/(Q.next.x-Q.x);Z=K-$}}return Z}function gH(J,Q){let Z=pH(J,Q);if(!Z)return Q;let K=LX(Z,J);return w8(K,K.next),w8(Z,Z.next)}function pH(J,Q){let Z=Q,K=J.x,$=J.y,W=-1/0,X;if(O7(J,Z))return Z;do{if(O7(J,Z.next))return Z.next;else if($<=Z.y&&$>=Z.next.y&&Z.next.y!==Z.y){let q=Z.x+($-Z.y)*(Z.next.x-Z.x)/(Z.next.y-Z.y);if(q<=K&&q>W){if(W=q,X=Z.x<Z.next.x?Z:Z.next,q===K)return X}}Z=Z.next}while(Z!==Q);if(!X)return null;let Y=X,H=X.x,U=X.y,N=1/0;Z=X;do{if(K>=Z.x&&Z.x>=H&&K!==Z.x&&VX($<U?K:W,$,H,U,$<U?W:K,$,Z.x,Z.y)){let q=Math.abs($-Z.y)/(K-Z.x);if(u7(Z,J)&&(q<N||q===N&&(Z.x>X.x||Z.x===X.x&&mH(X,Z))))X=Z,N=q}Z=Z.next}while(Z!==Y);return X}function mH(J,Q){return SJ(J.prev,J,Q.prev)<0&&SJ(Q.next,J,J.next)<0}function lH(J,Q,Z,K){let $=J;do{if($.z===0)$.z=RZ($.x,$.y,Q,Z,K);$.prevZ=$.prev,$.nextZ=$.next,$=$.next}while($!==J);$.prevZ.nextZ=null,$.prevZ=null,uH($)}function uH(J){let Q,Z=1;do{let K=J,$;J=null;let W=null;Q=0;while(K){Q++;let X=K,Y=0;for(let U=0;U<Z;U++)if(Y++,X=X.nextZ,!X)break;let H=Z;while(Y>0||H>0&&X){if(Y!==0&&(H===0||!X||K.z<=X.z))$=K,K=K.nextZ,Y--;else $=X,X=X.nextZ,H--;if(W)W.nextZ=$;else J=$;$.prevZ=W,W=$}K=X}W.nextZ=null,Z*=2}while(Q>1);return J}function RZ(J,Q,Z,K,$){return J=(J-Z)*$|0,Q=(Q-K)*$|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function dH(J){let Q=J,Z=J;do{if(Q.x<Z.x||Q.x===Z.x&&Q.y<Z.y)Z=Q;Q=Q.next}while(Q!==J);return Z}function VX(J,Q,Z,K,$,W,X,Y){return($-X)*(Q-Y)>=(J-X)*(W-Y)&&(J-X)*(K-Y)>=(Z-X)*(Q-Y)&&(Z-X)*(W-Y)>=($-X)*(K-Y)}function h7(J,Q,Z,K,$,W,X,Y){return!(J===X&&Q===Y)&&VX(J,Q,Z,K,$,W,X,Y)}function cH(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!nH(J,Q)&&(u7(J,Q)&&u7(Q,J)&&sH(J,Q)&&(SJ(J.prev,J,Q.prev)||SJ(J,Q.prev,Q))||O7(J,Q)&&SJ(J.prev,J,J.next)>0&&SJ(Q.prev,Q,Q.next)>0)}function SJ(J,Q,Z){return(Q.y-J.y)*(Z.x-Q.x)-(Q.x-J.x)*(Z.y-Q.y)}function O7(J,Q){return J.x===Q.x&&J.y===Q.y}function BX(J,Q,Z,K){let $=l6(SJ(J,Q,Z)),W=l6(SJ(J,Q,K)),X=l6(SJ(Z,K,J)),Y=l6(SJ(Z,K,Q));if($!==W&&X!==Y)return!0;if($===0&&m6(J,Z,Q))return!0;if(W===0&&m6(J,K,Q))return!0;if(X===0&&m6(Z,J,K))return!0;if(Y===0&&m6(Z,Q,K))return!0;return!1}function m6(J,Q,Z){return Q.x<=Math.max(J.x,Z.x)&&Q.x>=Math.min(J.x,Z.x)&&Q.y<=Math.max(J.y,Z.y)&&Q.y>=Math.min(J.y,Z.y)}function l6(J){return J>0?1:J<0?-1:0}function nH(J,Q){let Z=J;do{if(Z.i!==J.i&&Z.next.i!==J.i&&Z.i!==Q.i&&Z.next.i!==Q.i&&BX(Z,Z.next,J,Q))return!0;Z=Z.next}while(Z!==J);return!1}function u7(J,Q){return SJ(J.prev,J,J.next)<0?SJ(J,Q,J.next)>=0&&SJ(J,J.prev,Q)>=0:SJ(J,Q,J.prev)<0||SJ(J,J.next,Q)<0}function sH(J,Q){let Z=J,K=!1,$=(J.x+Q.x)/2,W=(J.y+Q.y)/2;do{if(Z.y>W!==Z.next.y>W&&Z.next.y!==Z.y&&$<(Z.next.x-Z.x)*(W-Z.y)/(Z.next.y-Z.y)+Z.x)K=!K;Z=Z.next}while(Z!==J);return K}function LX(J,Q){let Z=MZ(J.i,J.x,J.y),K=MZ(Q.i,Q.x,Q.y),$=J.next,W=Q.prev;return J.next=Q,Q.prev=J,Z.next=$,$.prev=Z,K.next=Z,Z.prev=K,W.next=K,K.prev=W,K}function QW(J,Q,Z,K){let $=MZ(J,Q,Z);if(!K)$.prev=$,$.next=$;else $.next=K.next,$.prev=K,K.next.prev=$,K.next=$;return $}function d7(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function MZ(J,Q,Z){return{i:J,x:Q,y:Z,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function iH(J,Q,Z,K){let $=0;for(let W=Q,X=Z-K;W<Z;W+=K)$+=(J[X]-J[W])*(J[W+1]+J[X+1]),X=W;return $}class kX{static triangulate(J,Q,Z=2){return jH(J,Q,Z)}}class I8{static area(J){let Q=J.length,Z=0;for(let K=Q-1,$=0;$<Q;K=$++)Z+=J[K].x*J[$].y-J[$].x*J[K].y;return Z*0.5}static isClockWise(J){return I8.area(J)<0}static triangulateShape(J,Q){let Z=[],K=[],$=[];ZW(J),KW(Z,J);let W=J.length;Q.forEach(ZW);for(let Y=0;Y<Q.length;Y++)K.push(W),W+=Q[Y].length,KW(Z,Q[Y]);let X=kX.triangulate(Z,K);for(let Y=0;Y<X.length;Y+=3)$.push(X.slice(Y,Y+3));return $}}function ZW(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function KW(J,Q){for(let Z=0;Z<Q.length;Z++)J.push(Q[Z].x),J.push(Q[Z].y)}class K6 extends Z9{constructor(J=new Z6([new Z0(0.5,0.5),new Z0(-0.5,0.5),new Z0(-0.5,-0.5),new Z0(0.5,-0.5)]),Q={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:J,options:Q},J=Array.isArray(J)?J:[J];let Z=this,K=[],$=[];for(let X=0,Y=J.length;X<Y;X++){let H=J[X];W(H)}this.setAttribute("position",new OJ(K,3)),this.setAttribute("uv",new OJ($,2)),this.computeVertexNormals();function W(X){let Y=[],H=Q.curveSegments!==void 0?Q.curveSegments:12,U=Q.steps!==void 0?Q.steps:1,N=Q.depth!==void 0?Q.depth:1,q=Q.bevelEnabled!==void 0?Q.bevelEnabled:!0,G=Q.bevelThickness!==void 0?Q.bevelThickness:0.2,F=Q.bevelSize!==void 0?Q.bevelSize:G-0.1,R=Q.bevelOffset!==void 0?Q.bevelOffset:0,A=Q.bevelSegments!==void 0?Q.bevelSegments:3,O=Q.extrudePath,E=Q.UVGenerator!==void 0?Q.UVGenerator:oH,k,z=!1,B,C,P,D;if(O){k=O.getSpacedPoints(U),z=!0,q=!1;let e=O.isCatmullRomCurve3?O.closed:!1;B=O.computeFrenetFrames(U,e),C=new v,P=new v,D=new v}if(!q)A=0,G=0,F=0,R=0;let V=X.extractPoints(H),I=V.shape,f=V.holes;if(!I8.isClockWise(I)){I=I.reverse();for(let e=0,Y0=f.length;e<Y0;e++){let N0=f[e];if(I8.isClockWise(N0))f[e]=N0.reverse()}}function p(e){let C0=e[0];for(let z0=1;z0<=e.length;z0++){let m0=z0%e.length,f0=e[m0],JJ=f0.x-C0.x,QJ=f0.y-C0.y,EJ=JJ*JJ+QJ*QJ,y=Math.max(Math.abs(f0.x),Math.abs(f0.y),Math.abs(C0.x),Math.abs(C0.y)),xJ=0.000000000000000000010000000000000001*y*y;if(EJ<=xJ){e.splice(m0,1),z0--;continue}C0=f0}}p(I),f.forEach(p);let t=f.length,T=I;for(let e=0;e<t;e++){let Y0=f[e];I=I.concat(Y0)}function c(e,Y0,N0){if(!Y0)c0("ExtrudeGeometry: vec does not exist");return e.clone().addScaledVector(Y0,N0)}let n=I.length;function x(e,Y0,N0){let C0,z0,m0,f0=e.x-Y0.x,JJ=e.y-Y0.y,QJ=N0.x-e.x,EJ=N0.y-e.y,y=f0*f0+JJ*JJ,xJ=f0*EJ-JJ*QJ;if(Math.abs(xJ)>Number.EPSILON){let a0=Math.sqrt(y),yJ=Math.sqrt(QJ*QJ+EJ*EJ),D0=Y0.x-JJ/a0,RJ=Y0.y+f0/a0,u0=N0.x-EJ/yJ,s0=N0.y+QJ/yJ,gJ=((u0-D0)*EJ-(s0-RJ)*QJ)/(f0*EJ-JJ*QJ);C0=D0+f0*gJ-e.x,z0=RJ+JJ*gJ-e.y;let _=C0*C0+z0*z0;if(_<=2)return new Z0(C0,z0);else m0=Math.sqrt(_/2)}else{let a0=!1;if(f0>Number.EPSILON){if(QJ>Number.EPSILON)a0=!0}else if(f0<-Number.EPSILON){if(QJ<-Number.EPSILON)a0=!0}else if(Math.sign(JJ)===Math.sign(EJ))a0=!0;if(a0)C0=-JJ,z0=f0,m0=Math.sqrt(y);else C0=f0,z0=JJ,m0=Math.sqrt(y/2)}return new Z0(C0/m0,z0/m0)}let X0=[];for(let e=0,Y0=T.length,N0=Y0-1,C0=e+1;e<Y0;e++,N0++,C0++){if(N0===Y0)N0=0;if(C0===Y0)C0=0;X0[e]=x(T[e],T[N0],T[C0])}let u=[],r,K0=X0.concat();for(let e=0,Y0=t;e<Y0;e++){let N0=f[e];r=[];for(let C0=0,z0=N0.length,m0=z0-1,f0=C0+1;C0<z0;C0++,m0++,f0++){if(m0===z0)m0=0;if(f0===z0)f0=0;r[C0]=x(N0[C0],N0[m0],N0[f0])}u.push(r),K0=K0.concat(r)}let A0;if(A===0)A0=I8.triangulateShape(T,f);else{let e=[],Y0=[];for(let N0=0;N0<A;N0++){let C0=N0/A,z0=G*Math.cos(C0*Math.PI/2),m0=F*Math.sin(C0*Math.PI/2)+R;for(let f0=0,JJ=T.length;f0<JJ;f0++){let QJ=c(T[f0],X0[f0],m0);if(k0(QJ.x,QJ.y,-z0),C0===0)e.push(QJ)}for(let f0=0,JJ=t;f0<JJ;f0++){let QJ=f[f0];r=u[f0];let EJ=[];for(let y=0,xJ=QJ.length;y<xJ;y++){let a0=c(QJ[y],r[y],m0);if(k0(a0.x,a0.y,-z0),C0===0)EJ.push(a0)}if(C0===0)Y0.push(EJ)}}A0=I8.triangulateShape(e,Y0)}let i=A0.length,$0=F+R;for(let e=0;e<n;e++){let Y0=q?c(I[e],K0[e],$0):I[e];if(!z)k0(Y0.x,Y0.y,0);else P.copy(B.normals[0]).multiplyScalar(Y0.x),C.copy(B.binormals[0]).multiplyScalar(Y0.y),D.copy(k[0]).add(P).add(C),k0(D.x,D.y,D.z)}for(let e=1;e<=U;e++)for(let Y0=0;Y0<n;Y0++){let N0=q?c(I[Y0],K0[Y0],$0):I[Y0];if(!z)k0(N0.x,N0.y,N/U*e);else P.copy(B.normals[e]).multiplyScalar(N0.x),C.copy(B.binormals[e]).multiplyScalar(N0.y),D.copy(k[e]).add(P).add(C),k0(D.x,D.y,D.z)}for(let e=A-1;e>=0;e--){let Y0=e/A,N0=G*Math.cos(Y0*Math.PI/2),C0=F*Math.sin(Y0*Math.PI/2)+R;for(let z0=0,m0=T.length;z0<m0;z0++){let f0=c(T[z0],X0[z0],C0);k0(f0.x,f0.y,N+N0)}for(let z0=0,m0=f.length;z0<m0;z0++){let f0=f[z0];r=u[z0];for(let JJ=0,QJ=f0.length;JJ<QJ;JJ++){let EJ=c(f0[JJ],r[JJ],C0);if(!z)k0(EJ.x,EJ.y,N+N0);else k0(EJ.x,EJ.y+k[U-1].y,k[U-1].x+N0)}}}_0(),b0();function _0(){let e=K.length/3;if(q){let Y0=0,N0=n*Y0;for(let C0=0;C0<i;C0++){let z0=A0[C0];YJ(z0[2]+N0,z0[1]+N0,z0[0]+N0)}Y0=U+A*2,N0=n*Y0;for(let C0=0;C0<i;C0++){let z0=A0[C0];YJ(z0[0]+N0,z0[1]+N0,z0[2]+N0)}}else{for(let Y0=0;Y0<i;Y0++){let N0=A0[Y0];YJ(N0[2],N0[1],N0[0])}for(let Y0=0;Y0<i;Y0++){let N0=A0[Y0];YJ(N0[0]+n*U,N0[1]+n*U,N0[2]+n*U)}}Z.addGroup(e,K.length/3-e,0)}function b0(){let e=K.length/3,Y0=0;x0(T,Y0),Y0+=T.length;for(let N0=0,C0=f.length;N0<C0;N0++){let z0=f[N0];x0(z0,Y0),Y0+=z0.length}Z.addGroup(e,K.length/3-e,1)}function x0(e,Y0){let N0=e.length;while(--N0>=0){let C0=N0,z0=N0-1;if(z0<0)z0=e.length-1;for(let m0=0,f0=U+A*2;m0<f0;m0++){let JJ=n*m0,QJ=n*(m0+1),EJ=Y0+C0+JJ,y=Y0+z0+JJ,xJ=Y0+z0+QJ,a0=Y0+C0+QJ;t0(EJ,y,xJ,a0)}}}function k0(e,Y0,N0){Y.push(e),Y.push(Y0),Y.push(N0)}function YJ(e,Y0,N0){d0(e),d0(Y0),d0(N0);let C0=K.length/3,z0=E.generateTopUV(Z,K,C0-3,C0-2,C0-1);XJ(z0[0]),XJ(z0[1]),XJ(z0[2])}function t0(e,Y0,N0,C0){d0(e),d0(Y0),d0(C0),d0(Y0),d0(N0),d0(C0);let z0=K.length/3,m0=E.generateSideWallUV(Z,K,z0-6,z0-3,z0-2,z0-1);XJ(m0[0]),XJ(m0[1]),XJ(m0[3]),XJ(m0[1]),XJ(m0[2]),XJ(m0[3])}function d0(e){K.push(Y[e*3+0]),K.push(Y[e*3+1]),K.push(Y[e*3+2])}function XJ(e){$.push(e.x),$.push(e.y)}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes,Z=this.parameters.options;return aH(Q,Z,J)}static fromJSON(J,Q){let Z=[];for(let $=0,W=J.shapes.length;$<W;$++){let X=Q[J.shapes[$]];Z.push(X)}let K=J.options.extrudePath;if(K!==void 0)J.options.extrudePath=new DZ[K.type]().fromJSON(K);return new K6(Z,J.options)}}var oH={generateTopUV:function(J,Q,Z,K,$){let W=Q[Z*3],X=Q[Z*3+1],Y=Q[K*3],H=Q[K*3+1],U=Q[$*3],N=Q[$*3+1];return[new Z0(W,X),new Z0(Y,H),new Z0(U,N)]},generateSideWallUV:function(J,Q,Z,K,$,W){let X=Q[Z*3],Y=Q[Z*3+1],H=Q[Z*3+2],U=Q[K*3],N=Q[K*3+1],q=Q[K*3+2],G=Q[$*3],F=Q[$*3+1],R=Q[$*3+2],A=Q[W*3],O=Q[W*3+1],E=Q[W*3+2];if(Math.abs(Y-N)<Math.abs(X-U))return[new Z0(X,1-H),new Z0(U,1-q),new Z0(G,1-R),new Z0(A,1-E)];else return[new Z0(Y,1-H),new Z0(N,1-q),new Z0(F,1-R),new Z0(O,1-E)]}};function aH(J,Q,Z){if(Z.shapes=[],Array.isArray(J))for(let K=0,$=J.length;K<$;K++){let W=J[K];Z.shapes.push(W.uuid)}else Z.shapes.push(J.uuid);if(Z.options=Object.assign({},Q),Q.extrudePath!==void 0)Z.options.extrudePath=Q.extrudePath.toJSON();return Z}class $6 extends J6{constructor(J=1,Q=0){let Z=(1+Math.sqrt(5))/2,K=[-1,Z,0,1,Z,0,-1,-Z,0,1,-Z,0,0,-1,Z,0,1,Z,0,-1,-Z,0,1,-Z,Z,0,-1,Z,0,1,-Z,0,-1,-Z,0,1],$=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(K,$,J,Q);this.type="IcosahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new $6(J.radius,J.detail)}}class h9 extends Z9{constructor(J=1,Q=1,Z=1,K=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:Z,heightSegments:K};let $=J/2,W=Q/2,X=Math.floor(Z),Y=Math.floor(K),H=X+1,U=Y+1,N=J/X,q=Q/Y,G=[],F=[],R=[],A=[];for(let O=0;O<U;O++){let E=O*q-W;for(let k=0;k<H;k++){let z=k*N-$;F.push(z,-E,0),R.push(0,0,1),A.push(k/X),A.push(1-O/Y)}}for(let O=0;O<Y;O++)for(let E=0;E<X;E++){let k=E+H*O,z=E+H*(O+1),B=E+1+H*(O+1),C=E+1+H*O;G.push(k,z,C),G.push(z,B,C)}this.setIndex(G),this.setAttribute("position",new OJ(F,3)),this.setAttribute("normal",new OJ(R,3)),this.setAttribute("uv",new OJ(A,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new h9(J.width,J.height,J.widthSegments,J.heightSegments)}}class p8 extends Z9{constructor(J=0.5,Q=1,Z=32,K=1,$=0,W=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:J,outerRadius:Q,thetaSegments:Z,phiSegments:K,thetaStart:$,thetaLength:W},Z=Math.max(3,Z),K=Math.max(1,K);let X=[],Y=[],H=[],U=[],N=J,q=(Q-J)/K,G=new v,F=new Z0;for(let R=0;R<=K;R++){for(let A=0;A<=Z;A++){let O=$+A/Z*W;G.x=N*Math.cos(O),G.y=N*Math.sin(O),Y.push(G.x,G.y,G.z),H.push(0,0,1),F.x=(G.x/Q+1)/2,F.y=(G.y/Q+1)/2,U.push(F.x,F.y)}N+=q}for(let R=0;R<K;R++){let A=R*(Z+1);for(let O=0;O<Z;O++){let E=O+A,k=E,z=E+Z+1,B=E+Z+2,C=E+1;X.push(k,z,C),X.push(z,B,C)}}this.setIndex(X),this.setAttribute("position",new OJ(Y,3)),this.setAttribute("normal",new OJ(H,3)),this.setAttribute("uv",new OJ(U,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new p8(J.innerRadius,J.outerRadius,J.thetaSegments,J.phiSegments,J.thetaStart,J.thetaLength)}}class VJ extends Z9{constructor(J=1,Q=32,Z=16,K=0,$=Math.PI*2,W=0,X=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:Z,phiStart:K,phiLength:$,thetaStart:W,thetaLength:X},Q=Math.max(3,Math.floor(Q)),Z=Math.max(2,Math.floor(Z));let Y=Math.min(W+X,Math.PI),H=0,U=[],N=new v,q=new v,G=[],F=[],R=[],A=[];for(let O=0;O<=Z;O++){let E=[],k=O/Z,z=W+k*X,B=J*Math.cos(z),C=Math.sqrt(J*J-B*B),P=0;if(O===0&&W===0)P=0.5/Q;else if(O===Z&&Y===Math.PI)P=-0.5/Q;for(let D=0;D<=Q;D++){let V=D/Q,I=K+V*$;N.x=-C*Math.cos(I),N.y=B,N.z=C*Math.sin(I),F.push(N.x,N.y,N.z),q.copy(N).normalize(),R.push(q.x,q.y,q.z),A.push(V+P,1-k),E.push(H++)}U.push(E)}for(let O=0;O<Z;O++)for(let E=0;E<Q;E++){let k=U[O][E+1],z=U[O][E],B=U[O+1][E],C=U[O+1][E+1];if(O!==0||W>0)G.push(k,z,C);if(O!==Z-1||Y<Math.PI)G.push(z,B,C)}this.setIndex(G),this.setAttribute("position",new OJ(F,3)),this.setAttribute("normal",new OJ(R,3)),this.setAttribute("uv",new OJ(A,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new VJ(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class W6 extends Z9{constructor(J=1,Q=0.4,Z=12,K=48,$=Math.PI*2,W=0,X=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:Z,tubularSegments:K,arc:$,thetaStart:W,thetaLength:X},Z=Math.floor(Z),K=Math.floor(K);let Y=[],H=[],U=[],N=[],q=new v,G=new v,F=new v;for(let R=0;R<=Z;R++){let A=W+R/Z*X;for(let O=0;O<=K;O++){let E=O/K*$;G.x=(J+Q*Math.cos(A))*Math.cos(E),G.y=(J+Q*Math.cos(A))*Math.sin(E),G.z=Q*Math.sin(A),H.push(G.x,G.y,G.z),q.x=J*Math.cos(E),q.y=J*Math.sin(E),F.subVectors(G,q).normalize(),U.push(F.x,F.y,F.z),N.push(O/K),N.push(R/Z)}}for(let R=1;R<=Z;R++)for(let A=1;A<=K;A++){let O=(K+1)*R+A-1,E=(K+1)*(R-1)+A-1,k=(K+1)*(R-1)+A,z=(K+1)*R+A;Y.push(O,E,z),Y.push(E,k,z)}this.setIndex(Y),this.setAttribute("position",new OJ(H,3)),this.setAttribute("normal",new OJ(U,3)),this.setAttribute("uv",new OJ(N,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new W6(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}function m8(J){let Q={};for(let Z in J){Q[Z]={};for(let K in J[Z]){let $=J[Z][K];if($W($))if($.isRenderTargetTexture)n0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[Z][K]=null;else Q[Z][K]=$.clone();else if(Array.isArray($))if($W($[0])){let W=[];for(let X=0,Y=$.length;X<Y;X++)W[X]=$[X].clone();Q[Z][K]=W}else Q[Z][K]=$.slice();else Q[Z][K]=$}}return Q}function K9(J){let Q={};for(let Z=0;Z<J.length;Z++){let K=m8(J[Z]);for(let $ in K)Q[$]=K[$]}return Q}function $W(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function rH(J){let Q=[];for(let Z=0;Z<J.length;Z++)Q.push(J[Z].clone());return Q}function vK(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return WJ.workingColorSpace}var zX={clone:m8,merge:K9},tH=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eH=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class J8 extends F8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tH,this.fragmentShader=eH,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=m8(J.uniforms),this.uniformsGroups=rH(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let K in this.uniforms){let W=this.uniforms[K].value;if(W&&W.isTexture)Q.uniforms[K]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[K]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[K]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[K]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[K]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[K]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[K]={type:"m4",value:W.toArray()};else Q.uniforms[K]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let Z={};for(let K in this.extensions)if(this.extensions[K]===!0)Z[K]=!0;if(Object.keys(Z).length>0)Q.extensions=Z;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let Z in J.uniforms){let K=J.uniforms[Z];switch(this.uniforms[Z]={},K.type){case"t":this.uniforms[Z].value=Q[K.value]||null;break;case"c":this.uniforms[Z].value=new y0().setHex(K.value);break;case"v2":this.uniforms[Z].value=new Z0().fromArray(K.value);break;case"v3":this.uniforms[Z].value=new v().fromArray(K.value);break;case"v4":this.uniforms[Z].value=new jJ().fromArray(K.value);break;case"m3":this.uniforms[Z].value=new i0().fromArray(K.value);break;case"m4":this.uniforms[Z].value=new UJ().fromArray(K.value);break;default:this.uniforms[Z].value=K.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let Z in J.extensions)this.extensions[Z]=J.extensions[Z];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class yK extends J8{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class TJ extends F8{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new y0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new y0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Z0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new i9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class fK extends F8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class hK extends F8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function H7(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function u6(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}class l8{constructor(J,Q,Z,K){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=K!==void 0?K:new Q.constructor(Z),this.sampleValues=Q,this.valueSize=Z,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,Z=this._cachedIndex,K=Q[Z],$=Q[Z-1];Z:{J:{let W;Q:{K:if(!(J<K)){for(let X=Z+2;;){if(K===void 0){if(J<$)break K;return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}if(Z===X)break;if($=K,K=Q[++Z],J<K)break J}W=Q.length;break Q}if(!(J>=$)){let X=Q[1];if(J<X)Z=2,$=X;for(let Y=Z-2;;){if($===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===Y)break;if(K=$,$=Q[--Z-1],J>=$)break J}W=Z,Z=0;break Q}break Z}while(Z<W){let X=Z+W>>>1;if(J<Q[X])W=X;else Z=X+1}if(K=Q[Z],$=Q[Z-1],$===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(K===void 0)return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}this._cachedIndex=Z,this.intervalChanged_(Z,$,K)}return this.interpolate_(Z,$,J,K)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,Z=this.sampleValues,K=this.valueSize,$=J*K;for(let W=0;W!==K;++W)Q[W]=Z[$+W];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class bK extends l8{constructor(J,Q,Z,K){super(J,Q,Z,K);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,Z){let K=this.parameterPositions,$=J-2,W=J+1,X=K[$],Y=K[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:$=J,X=2*Q-Z;break;case 2402:$=K.length-2,X=Q+K[$]-K[$+1];break;default:$=J,X=Z}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*Z-Q;break;case 2402:W=1,Y=Z+K[1]-K[0];break;default:W=J-1,Y=Q}let H=(Z-Q)*0.5,U=this.valueSize;this._weightPrev=H/(Q-X),this._weightNext=H/(Y-Z),this._offsetPrev=$*U,this._offsetNext=W*U}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this._offsetPrev,N=this._offsetNext,q=this._weightPrev,G=this._weightNext,F=(Z-Q)/(K-Q),R=F*F,A=R*F,O=-q*A+2*q*R-q*F,E=(1+q)*A+(-1.5-2*q)*R+(-0.5+q)*F+1,k=(-1-G)*A+(1.5+G)*R+0.5*F,z=G*A-G*R;for(let B=0;B!==X;++B)$[B]=O*W[U+B]+E*W[H+B]+k*W[Y+B]+z*W[N+B];return $}}class xK extends l8{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=(Z-Q)/(K-Q),N=1-U;for(let q=0;q!==X;++q)$[q]=W[H+q]*N+W[Y+q]*U;return $}}class gK extends l8{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J){return this.copySampleValue_(J-1)}}class pK extends l8{interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this.inTangents,N=this.outTangents;if(!U||!N){let F=(Z-Q)/(K-Q),R=1-F;for(let A=0;A!==X;++A)$[A]=W[H+A]*R+W[Y+A]*F;return $}let q=X*2,G=J-1;for(let F=0;F!==X;++F){let R=W[H+F],A=W[Y+F],O=G*q+F*2,E=N[O],k=N[O+1],z=J*q+F*2,B=U[z],C=U[z+1],P=QU(Z,Q,E,B,K);$[F]=AX(P,R,k,C,A)}return $}}function AX(J,Q,Z,K,$){let W=1-J;return W*W*W*Q+3*W*W*J*Z+3*W*J*J*K+J*J*J*$}function JU(J,Q,Z,K,$){let W=1-J;return 3*W*W*(Z-Q)+6*W*J*(K-Z)+3*J*J*($-K)}function QU(J,Q,Z,K,$){let W=(J-Q)/($-Q);for(let X=0;X<8;X++){let Y=AX(W,Q,Z,K,$)-J;if(Math.abs(Y)<0.0000000001)break;let H=JU(W,Q,Z,K,$);if(Math.abs(H)<0.0000000001)break;W=Math.max(0,Math.min(1,W-Y/H))}return W}class z9{constructor(J,Q,Z,K){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=H7(Q,this.TimeBufferType),this.values=H7(Z,this.ValueBufferType),this.setInterpolation(K||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,Z;if(Q.toJSON!==this.toJSON)Z=Q.toJSON(J);else{Z={name:J.name,times:H7(J.times,Array),values:H7(J.values,Array)};let K=J.getInterpolation();if(K!==J.DefaultInterpolation)Z.interpolation=K;if(u6(J.settings))Z.settings={inTangents:H7(J.settings.inTangents,Array),outTangents:H7(J.settings.outTangents,Array)}}return Z.type=J.ValueTypeName,Z}InterpolantFactoryMethodDiscrete(J){return new gK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new xK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new bK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new pK(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let Z="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Z);return n0("KeyframeTrack:",Z),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]+=J;if(u6(this.settings))WW(this.settings.inTangents,J),WW(this.settings.outTangents,J)}return this}scale(J){if(J!==1){let Q=this.times;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]*=J;if(u6(this.settings))XW(this.settings.inTangents,J),XW(this.settings.outTangents,J)}return this}trim(J,Q){let Z=this.times,K=Z.length,$=0,W=K-1;while($!==K&&Z[$]<J)++$;while(W!==-1&&Z[W]>Q)--W;if(++W,$!==0||W!==K){if($>=W)W=Math.max(W,1),$=W-1;let X=this.getValueSize();this.times=Z.slice($,W),this.values=this.values.slice($*X,W*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)c0("KeyframeTrack: Invalid value size in track.",this),J=!1;let Z=this.times,K=this.values,$=Z.length;if($===0)c0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==$;X++){let Y=Z[X];if(typeof Y==="number"&&isNaN(Y)){c0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){c0("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(K!==void 0){if($H(K))for(let X=0,Y=K.length;X!==Y;++X){let H=K[X];if(isNaN(H)){c0("KeyframeTrack: Value is not a valid number.",this,X,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),Z=this.getValueSize(),K=this.getInterpolation()===2302,$=J.length-1,W=1;for(let X=1;X<$;++X){let Y=!1,H=J[X],U=J[X+1];if(H!==U&&(X!==1||H!==J[0]))if(!K){let N=X*Z,q=N-Z,G=N+Z;for(let F=0;F!==Z;++F){let R=Q[N+F];if(R!==Q[q+F]||R!==Q[G+F]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let N=X*Z,q=W*Z;for(let G=0;G!==Z;++G)Q[q+G]=Q[N+G]}++W}}if($>0){J[W]=J[$];for(let X=$*Z,Y=W*Z,H=0;H!==Z;++H)Q[Y+H]=Q[X+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*Z);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),K=new this.constructor(this.name,J,Q);if(K.createInterpolant=this.createInterpolant,u6(this.settings))K.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return K}}function WW(J,Q){for(let Z=0,K=J.length;Z!==K;Z+=2)J[Z]+=Q}function XW(J,Q){for(let Z=0,K=J.length;Z!==K;Z+=2)J[Z]*=Q}z9.prototype.ValueTypeName="";z9.prototype.TimeBufferType=Float32Array;z9.prototype.ValueBufferType=Float32Array;z9.prototype.DefaultInterpolation=2301;class u8 extends z9{constructor(J,Q,Z){super(J,Q,Z)}}u8.prototype.ValueTypeName="bool";u8.prototype.ValueBufferType=Array;u8.prototype.DefaultInterpolation=2300;u8.prototype.InterpolantFactoryMethodLinear=void 0;u8.prototype.InterpolantFactoryMethodSmooth=void 0;class mK extends z9{constructor(J,Q,Z,K){super(J,Q,Z,K)}}mK.prototype.ValueTypeName="color";class lK extends z9{constructor(J,Q,Z,K){super(J,Q,Z,K)}}lK.prototype.ValueTypeName="number";class uK extends l8{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=(Z-Q)/(K-Q),H=J*X;for(let U=H+X;H!==U;H+=4)t9.slerpFlat($,0,W,H-X,W,H,Y);return $}}class zQ extends z9{constructor(J,Q,Z,K){super(J,Q,Z,K)}InterpolantFactoryMethodLinear(J){return new uK(this.times,this.values,this.getValueSize(),J)}}zQ.prototype.ValueTypeName="quaternion";zQ.prototype.InterpolantFactoryMethodSmooth=void 0;class d8 extends z9{constructor(J,Q,Z){super(J,Q,Z)}}d8.prototype.ValueTypeName="string";d8.prototype.ValueBufferType=Array;d8.prototype.DefaultInterpolation=2300;d8.prototype.InterpolantFactoryMethodLinear=void 0;d8.prototype.InterpolantFactoryMethodSmooth=void 0;class dK extends z9{constructor(J,Q,Z,K){super(J,Q,Z,K)}}dK.prototype.ValueTypeName="vector";var n6={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(YW(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(YW(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function YW(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class cK{constructor(J,Q,Z){let K=this,$=!1,W=0,X=0,Y=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=Z,this._abortController=null,this.itemStart=function(U){if(X++,$===!1){if(K.onStart!==void 0)K.onStart(U,W,X)}$=!0},this.itemEnd=function(U){if(W++,K.onProgress!==void 0)K.onProgress(U,W,X);if(W===X){if($=!1,K.onLoad!==void 0)K.onLoad()}},this.itemError=function(U){if(K.onError!==void 0)K.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,N){return H.push(U,N),this},this.removeHandler=function(U){let N=H.indexOf(U);if(N!==-1)H.splice(N,2);return this},this.getHandler=function(U){for(let N=0,q=H.length;N<q;N+=2){let G=H[N],F=H[N+1];if(G.global)G.lastIndex=0;if(G.test(U))return F}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var CX=new cK;class X6{constructor(J){if(this.manager=J!==void 0?J:CX,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let Z=this;return new Promise(function(K,$){Z.load(J,K,Q,$)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}setPriority(J){return this.priority=J,this}setCache(J){return this.cache=J,this}abort(){return this}}X6.DEFAULT_MATERIAL_NAME="__DEFAULT";var U7=new WeakMap;class nK extends X6{constructor(J){super(J)}load(J,Q,Z,K){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let $=this,W=n6.get(`image:${J}`);if(W!==void 0){if(W.complete===!0)$.manager.itemStart(J),setTimeout(function(){if(Q)Q(W);$.manager.itemEnd(J)},0);else{let N=U7.get(W);if(N===void 0)N=[],U7.set(W,N);N.push({onLoad:Q,onError:K})}return W}let X=E7("img");function Y(){if(U(),Q)Q(this);let N=U7.get(this)||[];for(let q=0;q<N.length;q++){let G=N[q];if(G.onLoad)G.onLoad(this)}U7.delete(this),$.manager.itemEnd(J)}function H(N){if(U(),K)K(N);n6.remove(`image:${J}`);let q=U7.get(this)||[];for(let G=0;G<q.length;G++){let F=q[G];if(F.onError)F.onError(N)}U7.delete(this),$.manager.itemError(J),$.manager.itemEnd(J)}function U(){X.removeEventListener("load",Y,!1),X.removeEventListener("error",H,!1)}if(X.addEventListener("load",Y,!1),X.addEventListener("error",H,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)X.crossOrigin=this.crossOrigin}return n6.add(`image:${J}`,X),$.manager.itemStart(J),X.fetchPriority=this.priority,X.src=J,X}}class AQ extends X6{constructor(J){super(J)}load(J,Q,Z,K){let $=new nJ,W=new nK(this.manager);return W.setPriority(this.priority),W.setCache(this.cache),W.setCrossOrigin(this.crossOrigin),W.setPath(this.path),W.load(J,function(X){if($.image=X,$.needsUpdate=!0,Q!==void 0)Q($)},Z,K),$}}class Y6 extends pJ{static registerNode(J){this.prototype._lightNode=J}constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new y0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class CQ extends Y6{constructor(J,Q,Z){super(J,Z);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new y0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var OZ=new UJ,HW=new v,UW=new v;class sK{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new UJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new T8,this._frameExtents=new Z0(1,1),this._viewportCount=1,this._viewports=[new jJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;HW.setFromMatrixPosition(J.matrixWorld),Q.position.copy(HW),UW.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(UW),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,Z,K){OZ.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Z.setFromProjectionMatrix(OZ,J.coordinateSystem,J.reversedDepth);let $=this._frameExtents,W=K?K.z/$.x:1,X=K?K.w/$.y:1,Y=K?K.x/$.x:0,H=K?K.y/$.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*W,0,0,0.5*W+Y,0,0.5*X,0,0.5*X+H,0,0,1,0,0,0,0,1);else Q.set(0.5*W,0,0,0.5*W+Y,0,0.5*X,0,0.5*X+H,0,0,0.5,0.5,0,0,0,1);Q.multiply(OZ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.mapType=J.mapType,this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.mapType=this.mapType,J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var d6=new v,c6=new t9,j9=new v;class _Q extends pJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new UJ,this.projectionMatrix=new UJ,this.projectionMatrixInverse=new UJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(d6,c6,j9),j9.x===1&&j9.y===1&&j9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(d6,c6,j9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,Z=!1){if(super.updateWorldMatrix(J,Q,Z),this.matrixWorld.decompose(d6,c6,j9),j9.x===1&&j9.y===1&&j9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(d6,c6,j9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var H8=new v,NW=new Z0,GW=new Z0;class M9 extends _Q{constructor(J=50,Q=1,Z=0.1,K=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Z,this.far=K,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=s6*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(dQ*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return s6*2*Math.atan(Math.tan(dQ*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,Z){H8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(H8.x,H8.y).multiplyScalar(-J/H8.z),H8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(H8.x,H8.y).multiplyScalar(-J/H8.z)}getViewSize(J,Q){return this.getViewBounds(J,NW,GW),Q.subVectors(GW,NW)}setViewOffset(J,Q,Z,K,$,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=K,this.view.width=$,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(dQ*0.5*this.fov)/this.zoom,Z=2*Q,K=this.aspect*Z,$=-0.5*K,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:H}=W;$+=W.offsetX*K/Y,Q-=W.offsetY*Z/H,K*=W.width/Y,Z*=W.height/H}let X=this.filmOffset;if(X!==0)$+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective($,$+K,Q,Q-Z,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class k7 extends _Q{constructor(J=-1,Q=1,Z=1,K=-1,$=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=Z,this.bottom=K,this.near=$,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,Z,K,$,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=K,this.view.width=$,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),Z=(this.right+this.left)/2,K=(this.top+this.bottom)/2,$=Z-J,W=Z+J,X=K+Q,Y=K-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;$+=H*this.view.offsetX,W=$+H*this.view.width,X-=U*this.view.offsetY,Y=X-U*this.view.height}this.projectionMatrix.makeOrthographic($,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class _X extends sK{constructor(){super(new k7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class PQ extends Y6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pJ.DEFAULT_UP),this.updateMatrix(),this.target=new pJ,this.shadow=new _X}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class IQ extends Y6{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}var N7=-90,G7=1;class H6 extends pJ{constructor(J,Q,Z){super();this.type="CubeCamera",this.renderTarget=Z,this.coordinateSystem=null,this.activeMipmapLevel=0;let K=new M9(N7,G7,J,Q);K.layers=this.layers,this.add(K);let $=new M9(N7,G7,J,Q);$.layers=this.layers,this.add($);let W=new M9(N7,G7,J,Q);W.layers=this.layers,this.add(W);let X=new M9(N7,G7,J,Q);X.layers=this.layers,this.add(X);let Y=new M9(N7,G7,J,Q);Y.layers=this.layers,this.add(Y);let H=new M9(N7,G7,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[Z,K,$,W,X,Y]=Q;for(let H of Q)this.remove(H);if(J===2000)Z.up.set(0,1,0),Z.lookAt(1,0,0),K.up.set(0,1,0),K.lookAt(-1,0,0),$.up.set(0,0,-1),$.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)Z.up.set(0,-1,0),Z.lookAt(-1,0,0),K.up.set(0,-1,0),K.lookAt(1,0,0),$.up.set(0,0,1),$.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Z,activeMipmapLevel:K}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[$,W,X,Y,H,U]=this.children,N=J.getRenderTarget(),q=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let R=Z.texture.mipmapsAutoUpdate;Z.texture.mipmapsAutoUpdate=!1;let A=!1;if(J.isWebGLRenderer===!0)A=J.state.buffers.depth.getReversed();else A=J.reversedDepthBuffer;if(J.setRenderTarget(Z,0,K),A&&J.autoClear===!1)J.clearDepth();if(J.render(Q,$),J.setRenderTarget(Z,1,K),A&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget(Z,2,K),A&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget(Z,3,K),A&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget(Z,4,K),A&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),Z.texture.mipmapsAutoUpdate=R,J.setRenderTarget(Z,5,K),A&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(N,q,G),J.xr.enabled=F,Z.texture.needsPMREMUpdate=!0}}class iK extends M9{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J,this.perCameraFrustumCulled=!1}}var oK="\\[\\]\\.:\\/",ZU=new RegExp("["+oK+"]","g"),aK="[^"+oK+"]",KU="[^"+oK.replace("\\.","")+"]",$U=/((?:WC+[\/:])*)/.source.replace("WC",aK),WU=/(WCOD+)?/.source.replace("WCOD",KU),XU=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",aK),YU=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",aK),HU=new RegExp("^"+$U+WU+XU+YU+"$"),UU=["material","materials","bones","map"];class PX{constructor(J,Q,Z){let K=Z||MJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,K)}getValue(J,Q){this.bind();let Z=this._targetGroup.nCachedObjects_,K=this._bindings[Z];if(K!==void 0)K.getValue(J,Q)}setValue(J,Q){let Z=this._bindings;for(let K=this._targetGroup.nCachedObjects_,$=Z.length;K!==$;++K)Z[K].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].unbind()}}class MJ{constructor(J,Q,Z){this.path=Q,this.parsedPath=Z||MJ.parseTrackName(Q),this.node=MJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,Z){if(!(J&&J.isAnimationObjectGroup))return new MJ(J,Q,Z);else return new MJ.Composite(J,Q,Z)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(ZU,"")}static parseTrackName(J){let Q=HU.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let Z={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},K=Z.nodeName&&Z.nodeName.lastIndexOf(".");if(K!==void 0&&K!==-1){let $=Z.nodeName.substring(K+1);if(UU.indexOf($)!==-1)Z.nodeName=Z.nodeName.substring(0,K),Z.objectName=$}if(Z.propertyName===null||Z.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return Z}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let Z=J.skeleton.getBoneByName(Q);if(Z!==void 0)return Z}if(J.children){let Z=function($){for(let W=0;W<$.length;W++){let X=$[W];if(X.name===Q||X.uuid===Q)return X;let Y=Z(X.children);if(Y)return Y}return null},K=Z(J.children);if(K)return K}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)J[Q++]=Z[K]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,Z=Q.objectName,K=Q.propertyName,$=Q.propertyIndex;if(!J)J=MJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){n0("PropertyBinding: No target node found for track: "+this.path+".");return}if(Z){let H=Q.objectIndex;switch(Z){case"materials":if(!J.material){c0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){c0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){c0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){c0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){c0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Z]===void 0){c0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Z]}if(H!==void 0){if(J[H]===void 0){c0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[K];if(W===void 0){let H=Q.nodeName;c0("PropertyBinding: Trying to update property for track: "+H+"."+K+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if($!==void 0){if(K==="morphTargetInfluences"){if(!J.geometry){c0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){c0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[$]!==void 0)$=J.morphTargetDictionary[$]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=$}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=K;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}MJ.Composite=PX;MJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};MJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};MJ.prototype.GetterByBindingType=[MJ.prototype._getValue_direct,MJ.prototype._getValue_array,MJ.prototype._getValue_arrayElement,MJ.prototype._getValue_toArray];MJ.prototype.SetterByBindingTypeAndVersioning=[[MJ.prototype._setValue_direct,MJ.prototype._setValue_direct_setNeedsUpdate,MJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[MJ.prototype._setValue_array,MJ.prototype._setValue_array_setNeedsUpdate,MJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[MJ.prototype._setValue_arrayElement,MJ.prototype._setValue_arrayElement_setNeedsUpdate,MJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[MJ.prototype._setValue_fromArray,MJ.prototype._setValue_fromArray_setNeedsUpdate,MJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DE=new Float32Array(1);var qW=new UJ;class TQ{constructor(J,Q,Z=0,K=1/0){this.ray=new qQ(J,Q),this.near=Z,this.far=K,this.camera=null,this.layers=new r7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,Q.projectionMatrix.elements[14]).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else c0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return qW.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qW),this}intersectObject(J,Q=!0,Z=[]){return VZ(J,this,Z,Q),Z.sort(EW),Z}intersectObjects(J,Q=!0,Z=[]){for(let K=0,$=J.length;K<$;K++)VZ(J[K],this,Z,Q);return Z.sort(EW),Z}}function EW(J,Q){return J.distance-Q.distance}function VZ(J,Q,Z,K){let $=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,Z)===!1)$=!1}if($===!0&&K===!0){let W=J.children;for(let X=0,Y=W.length;X<Y;X++)VZ(W[X],Q,Z,!0)}}class IX{static{this.prototype.isMatrix2=!0}constructor(J,Q,Z,K){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,Z,K)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let Z=0;Z<4;Z++)this.elements[Z]=J[Z+Q];return this}set(J,Q,Z,K){let $=this.elements;return $[0]=J,$[2]=Q,$[1]=Z,$[3]=K,this}}function rK(J,Q,Z,K){let $=NU(K);switch(Z){case 1021:return J*Q;case 1028:return J*Q/$.components*$.byteLength;case 1029:return J*Q/$.components*$.byteLength;case 1030:return J*Q*2/$.components*$.byteLength;case 1031:return J*Q*2/$.components*$.byteLength;case 1022:return J*Q*3/$.components*$.byteLength;case 1023:return J*Q*4/$.components*$.byteLength;case 1033:return J*Q*4/$.components*$.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${Z} format.`)}function NU(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)n0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function aX(){let J=null,Q=!1,Z=null,K=null;function $(W,X){K=J.requestAnimationFrame($),Z(W,X)}return{start:function(){if(Q===!0)return;if(Z===null)return;if(J===null)return;K=J.requestAnimationFrame($),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(K);Q=!1},setAnimationLoop:function(W){Z=W},setContext:function(W){J=W}}}function GU(J){let Q=new WeakMap;function Z(Y,H){let{array:U,usage:N}=Y,q=U.byteLength,G=J.createBuffer();J.bindBuffer(H,G),J.bufferData(H,U,N),Y.onUploadCallback();let F;if(U instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)F=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)F=J.SHORT;else if(U instanceof Uint32Array)F=J.UNSIGNED_INT;else if(U instanceof Int32Array)F=J.INT;else if(U instanceof Int8Array)F=J.BYTE;else if(U instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:F,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:q}}function K(Y,H,U){let{array:N,updateRanges:q}=H;if(J.bindBuffer(U,Y),q.length===0)J.bufferSubData(U,0,N);else{q.sort((F,R)=>F.start-R.start);let G=0;for(let F=1;F<q.length;F++){let R=q[G],A=q[F];if(A.start<=R.start+R.count+1)R.count=Math.max(R.count,A.start+A.count-R.start);else++G,q[G]=A}q.length=G+1;for(let F=0,R=q.length;F<R;F++){let A=q[F];J.bufferSubData(U,A.start*N.BYTES_PER_ELEMENT,N,A.start,A.count)}H.clearUpdateRanges()}H.onUploadCallback()}function $(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let H=Q.get(Y);if(H)J.deleteBuffer(H.buffer),Q.delete(Y)}function X(Y,H){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let N=Q.get(Y);if(!N||N.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,Z(Y,H));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");K(U.buffer,Y,H),U.version=Y.version}}return{get:$,remove:W,update:X}}var qU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EU=`#ifdef USE_ALPHAHASH
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
#endif`,FU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MU=`#ifdef USE_AOMAP
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
#endif`,VU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BU=`#ifdef USE_BATCHING
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
#endif`,LU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AU=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CU=`#ifdef USE_IRIDESCENCE
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
#endif`,_U=`#ifdef USE_BUMPMAP
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
#endif`,PU=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fU=`#define PI 3.141592653589793
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
} // validated`,hU=`vec3 transformedNormal = objectNormal;
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
#endif`,bU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mU="gl_FragColor = linearToOutputTexel( gl_FragColor );",lU=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uU=`#ifdef USE_ENVMAP
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
#endif`,dU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,cU=`#ifdef USE_ENVMAP
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
#endif`,nU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sU=`#ifdef USE_ENVMAP
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
#endif`,iU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tU=`#ifdef USE_GRADIENTMAP
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
}`,eU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J5=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z5=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,K5=`#ifdef USE_ENVMAP
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
#endif`,$5=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X5=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H5=`PhysicalMaterial material;
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
#endif`,U5=`uniform sampler2D dfgLUT;
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
}`,N5=`
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
#endif`,G5=`#if defined( RE_IndirectDiffuse )
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
#endif`,q5=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E5=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,F5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D5=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R5=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M5=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V5=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B5=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,L5=`#if defined( USE_POINTS_UV )
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
#endif`,k5=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z5=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A5=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C5=`#if defined( USE_MORPHCOLORS )
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
#endif`,_5=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P5=`#ifdef USE_MORPHTARGETS
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
#endif`,T5=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w5=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v5=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,y5=`#ifdef USE_NORMALMAP
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
#endif`,f5=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h5=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b5=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x5=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g5=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p5=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,m5=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l5=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u5=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d5=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c5=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n5=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o5=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a5=`float getShadowMask() {
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
}`,r5=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t5=`#ifdef USE_SKINNING
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
#endif`,e5=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JN=`#ifdef USE_SKINNING
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
#endif`,QN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$N=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,WN=`#ifdef USE_TRANSMISSION
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
#endif`,XN=`#ifdef USE_TRANSMISSION
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
#endif`,YN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,GN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qN=`uniform sampler2D t2D;
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
}`,EN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FN=`uniform float backgroundBlurriness;
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
}`,ON=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RN=`#include <common>
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
}`,MN=`#if DEPTH_PACKING == 3200
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
}`,VN=`#define DISTANCE
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
}`,BN=`#define DISTANCE
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
}`,LN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zN=`uniform float scale;
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
}`,AN=`uniform vec3 diffuse;
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
}`,CN=`#include <common>
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
}`,_N=`uniform vec3 diffuse;
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
}`,PN=`#define LAMBERT
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
}`,IN=`#define LAMBERT
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
}`,TN=`#define MATCAP
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
}`,wN=`#define MATCAP
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
}`,SN=`#define NORMAL
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
}`,jN=`#define NORMAL
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
}`,vN=`#define PHONG
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
}`,yN=`#define PHONG
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
}`,fN=`#define STANDARD
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
}`,hN=`#define STANDARD
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
}`,bN=`#define TOON
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
}`,xN=`#define TOON
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
}`,gN=`uniform float size;
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
}`,pN=`uniform vec3 diffuse;
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
}`,mN=`#include <common>
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
}`,lN=`uniform vec3 color;
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
}`,uN=`uniform float rotation;
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
}`,dN=`uniform vec3 diffuse;
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
}`,e0={alphahash_fragment:qU,alphahash_pars_fragment:EU,alphamap_fragment:FU,alphamap_pars_fragment:OU,alphatest_fragment:DU,alphatest_pars_fragment:RU,aomap_fragment:MU,aomap_pars_fragment:VU,batching_pars_vertex:BU,batching_vertex:LU,begin_vertex:kU,beginnormal_vertex:zU,bsdfs:AU,iridescence_fragment:CU,bumpmap_pars_fragment:_U,clipping_planes_fragment:PU,clipping_planes_pars_fragment:IU,clipping_planes_pars_vertex:TU,clipping_planes_vertex:wU,color_fragment:SU,color_pars_fragment:jU,color_pars_vertex:vU,color_vertex:yU,common:fU,defaultnormal_vertex:hU,displacementmap_pars_vertex:bU,displacementmap_vertex:xU,emissivemap_fragment:gU,emissivemap_pars_fragment:pU,colorspace_fragment:mU,colorspace_pars_fragment:lU,envmap_fragment:uU,envmap_common_pars_fragment:dU,envmap_pars_fragment:cU,envmap_pars_vertex:nU,envmap_physical_pars_fragment:K5,envmap_vertex:sU,fog_vertex:iU,fog_pars_vertex:oU,fog_fragment:aU,fog_pars_fragment:rU,gradientmap_pars_fragment:tU,lightmap_pars_fragment:eU,lights_lambert_fragment:J5,lights_lambert_pars_fragment:Q5,lights_pars_begin:Z5,lights_toon_fragment:$5,lights_toon_pars_fragment:W5,lights_phong_fragment:X5,lights_phong_pars_fragment:Y5,lights_physical_fragment:H5,lights_physical_pars_fragment:U5,lights_fragment_begin:N5,lights_fragment_maps:G5,lights_fragment_end:q5,lightprobes_pars_fragment:E5,logdepthbuf_fragment:F5,logdepthbuf_pars_fragment:O5,logdepthbuf_pars_vertex:D5,logdepthbuf_vertex:R5,map_fragment:M5,map_pars_fragment:V5,map_particle_fragment:B5,map_particle_pars_fragment:L5,metalnessmap_fragment:k5,metalnessmap_pars_fragment:z5,morphinstance_vertex:A5,morphcolor_vertex:C5,morphnormal_vertex:_5,morphtarget_pars_vertex:P5,morphtarget_vertex:I5,normal_fragment_begin:T5,normal_fragment_maps:w5,normal_pars_fragment:S5,normal_pars_vertex:j5,normal_vertex:v5,normalmap_pars_fragment:y5,clearcoat_normal_fragment_begin:f5,clearcoat_normal_fragment_maps:h5,clearcoat_pars_fragment:b5,iridescence_pars_fragment:x5,opaque_fragment:g5,packing:p5,premultiplied_alpha_fragment:m5,project_vertex:l5,dithering_fragment:u5,dithering_pars_fragment:d5,roughnessmap_fragment:c5,roughnessmap_pars_fragment:n5,shadowmap_pars_fragment:s5,shadowmap_pars_vertex:i5,shadowmap_vertex:o5,shadowmask_pars_fragment:a5,skinbase_vertex:r5,skinning_pars_vertex:t5,skinning_vertex:e5,skinnormal_vertex:JN,specularmap_fragment:QN,specularmap_pars_fragment:ZN,tonemapping_fragment:KN,tonemapping_pars_fragment:$N,transmission_fragment:WN,transmission_pars_fragment:XN,uv_pars_fragment:YN,uv_pars_vertex:HN,uv_vertex:UN,worldpos_vertex:NN,background_vert:GN,background_frag:qN,backgroundCube_vert:EN,backgroundCube_frag:FN,cube_vert:ON,cube_frag:DN,depth_vert:RN,depth_frag:MN,distance_vert:VN,distance_frag:BN,equirect_vert:LN,equirect_frag:kN,linedashed_vert:zN,linedashed_frag:AN,meshbasic_vert:CN,meshbasic_frag:_N,meshlambert_vert:PN,meshlambert_frag:IN,meshmatcap_vert:TN,meshmatcap_frag:wN,meshnormal_vert:SN,meshnormal_frag:jN,meshphong_vert:vN,meshphong_frag:yN,meshphysical_vert:fN,meshphysical_frag:hN,meshtoon_vert:bN,meshtoon_frag:xN,points_vert:gN,points_frag:pN,shadow_vert:mN,shadow_frag:lN,sprite_vert:uN,sprite_frag:dN},M0={common:{diffuse:{value:new y0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new i0},alphaMap:{value:null},alphaMapTransform:{value:new i0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new i0}},envmap:{envMap:{value:null},envMapRotation:{value:new i0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new i0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new i0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new i0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new i0},normalScale:{value:new Z0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new i0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new i0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new i0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new i0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new y0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new y0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new i0},alphaTest:{value:0},uvTransform:{value:new i0}},sprite:{diffuse:{value:new y0(16777215)},opacity:{value:1},center:{value:new Z0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new i0},alphaMap:{value:null},alphaMapTransform:{value:new i0},alphaTest:{value:0}}},x9={basic:{uniforms:K9([M0.common,M0.specularmap,M0.envmap,M0.aomap,M0.lightmap,M0.fog]),vertexShader:e0.meshbasic_vert,fragmentShader:e0.meshbasic_frag},lambert:{uniforms:K9([M0.common,M0.specularmap,M0.envmap,M0.aomap,M0.lightmap,M0.emissivemap,M0.bumpmap,M0.normalmap,M0.displacementmap,M0.fog,M0.lights,{emissive:{value:new y0(0)},envMapIntensity:{value:1}}]),vertexShader:e0.meshlambert_vert,fragmentShader:e0.meshlambert_frag},phong:{uniforms:K9([M0.common,M0.specularmap,M0.envmap,M0.aomap,M0.lightmap,M0.emissivemap,M0.bumpmap,M0.normalmap,M0.displacementmap,M0.fog,M0.lights,{emissive:{value:new y0(0)},specular:{value:new y0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:e0.meshphong_vert,fragmentShader:e0.meshphong_frag},standard:{uniforms:K9([M0.common,M0.envmap,M0.aomap,M0.lightmap,M0.emissivemap,M0.bumpmap,M0.normalmap,M0.displacementmap,M0.roughnessmap,M0.metalnessmap,M0.fog,M0.lights,{emissive:{value:new y0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:e0.meshphysical_vert,fragmentShader:e0.meshphysical_frag},toon:{uniforms:K9([M0.common,M0.aomap,M0.lightmap,M0.emissivemap,M0.bumpmap,M0.normalmap,M0.displacementmap,M0.gradientmap,M0.fog,M0.lights,{emissive:{value:new y0(0)}}]),vertexShader:e0.meshtoon_vert,fragmentShader:e0.meshtoon_frag},matcap:{uniforms:K9([M0.common,M0.bumpmap,M0.normalmap,M0.displacementmap,M0.fog,{matcap:{value:null}}]),vertexShader:e0.meshmatcap_vert,fragmentShader:e0.meshmatcap_frag},points:{uniforms:K9([M0.points,M0.fog]),vertexShader:e0.points_vert,fragmentShader:e0.points_frag},dashed:{uniforms:K9([M0.common,M0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:e0.linedashed_vert,fragmentShader:e0.linedashed_frag},depth:{uniforms:K9([M0.common,M0.displacementmap]),vertexShader:e0.depth_vert,fragmentShader:e0.depth_frag},normal:{uniforms:K9([M0.common,M0.bumpmap,M0.normalmap,M0.displacementmap,{opacity:{value:1}}]),vertexShader:e0.meshnormal_vert,fragmentShader:e0.meshnormal_frag},sprite:{uniforms:K9([M0.sprite,M0.fog]),vertexShader:e0.sprite_vert,fragmentShader:e0.sprite_frag},background:{uniforms:{uvTransform:{value:new i0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:e0.background_vert,fragmentShader:e0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new i0}},vertexShader:e0.backgroundCube_vert,fragmentShader:e0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:e0.cube_vert,fragmentShader:e0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:e0.equirect_vert,fragmentShader:e0.equirect_frag},distance:{uniforms:K9([M0.common,M0.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:e0.distance_vert,fragmentShader:e0.distance_frag},shadow:{uniforms:K9([M0.lights,M0.fog,{color:{value:new y0(0)},opacity:{value:1}}]),vertexShader:e0.shadow_vert,fragmentShader:e0.shadow_frag}};x9.physical={uniforms:K9([x9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new i0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new i0},clearcoatNormalScale:{value:new Z0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new i0},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new i0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new i0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new i0},sheen:{value:0},sheenColor:{value:new y0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new i0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new i0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new i0},transmissionSamplerSize:{value:new Z0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new i0},attenuationDistance:{value:0},attenuationColor:{value:new y0(0)},specularColor:{value:new y0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new i0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new i0},anisotropyVector:{value:new Z0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new i0}}]),vertexShader:e0.meshphysical_vert,fragmentShader:e0.meshphysical_frag};var wQ={r:0,b:0,g:0},cN=new UJ,rX=new i0;rX.set(-1,0,0,0,1,0,0,0,1);function nN(J,Q,Z,K,$,W){let X=new y0(0),Y=$===!0?0:1,H,U,N=null,q=0,G=null;function F(k){let z=k.isScene===!0?k.background:null;if(z&&z.isTexture){let B=k.backgroundBlurriness>0;z=Q.get(z,B)}return z}function R(k){let z=!1,B=F(k);if(B===null)O(X,Y);else if(B&&B.isColor)O(B,1),z=!0;let C=J.xr.getEnvironmentBlendMode();if(C==="additive")Z.buffers.color.setClear(0,0,0,1,W);else if(C==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||z)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function A(k,z){let B=F(z);if(B&&B.isCubeTexture){if(U===void 0)U=new CJ(new Y9(1,1,1),new J8({name:"BackgroundCubeMaterial",uniforms:m8(x9.backgroundCube.uniforms),vertexShader:x9.backgroundCube.vertexShader,fragmentShader:x9.backgroundCube.fragmentShader,side:U9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(C,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),K.update(U);if(U.material.uniforms.envMap.value=B,U.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(cN.makeRotationFromEuler(z.backgroundRotation)).transpose(),B.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(rX);if(U.material.toneMapped=WJ.getTransfer(B.colorSpace)!==AJ,N!==B||q!==B.version||G!==J.toneMapping)U.material.needsUpdate=!0,N=B,q=B.version,G=J.toneMapping;U.layers.enableAll(),k.unshift(U,U.geometry,U.material,0,0,null)}else if(B&&B.isTexture){if(H===void 0)H=new CJ(new h9(2,2),new J8({name:"BackgroundMaterial",uniforms:m8(x9.background.uniforms),vertexShader:x9.background.vertexShader,fragmentShader:x9.background.fragmentShader,side:R7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),K.update(H);if(H.material.uniforms.t2D.value=B,H.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,H.material.toneMapped=WJ.getTransfer(B.colorSpace)!==AJ,B.matrixAutoUpdate===!0)B.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(B.matrix),N!==B||q!==B.version||G!==J.toneMapping)H.material.needsUpdate=!0,N=B,q=B.version,G=J.toneMapping;H.layers.enableAll(),k.unshift(H,H.geometry,H.material,0,0,null)}}function O(k,z){k.getRGB(wQ,vK(J)),Z.buffers.color.setClear(wQ.r,wQ.g,wQ.b,z,W)}function E(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return X},setClearColor:function(k,z=1){X.set(k),Y=z,O(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(k){Y=k,O(X,Y)},render:R,addToRenderList:A,dispose:E}}function sN(J,Q){let Z=J.getParameter(J.MAX_VERTEX_ATTRIBS),K={},$=G(null),W=$,X=!1;function Y(S,p,t,T,c){let n=!1,x=q(S,T,t,p);if(W!==x)W=x,U(W.object);if(n=F(S,T,t,c),n)R(S,T,t,c);if(c!==null)Q.update(c,J.ELEMENT_ARRAY_BUFFER);if(n||X){if(X=!1,B(S,p,t,T),c!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(c).buffer)}}function H(){return J.createVertexArray()}function U(S){return J.bindVertexArray(S)}function N(S){return J.deleteVertexArray(S)}function q(S,p,t,T){let c=T.wireframe===!0,n=K[p.id];if(n===void 0)n={},K[p.id]=n;let x=S.isInstancedMesh===!0?S.id:0,X0=n[x];if(X0===void 0)X0={},n[x]=X0;let u=X0[t.id];if(u===void 0)u={},X0[t.id]=u;let r=u[c];if(r===void 0)r=G(H()),u[c]=r;return r}function G(S){let p=[],t=[],T=[];for(let c=0;c<Z;c++)p[c]=0,t[c]=0,T[c]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:p,enabledAttributes:t,attributeDivisors:T,object:S,attributes:{},index:null}}function F(S,p,t,T){let c=W.attributes,n=p.attributes,x=0,X0=t.getAttributes();for(let u in X0)if(X0[u].location>=0){let K0=c[u],A0=n[u];if(A0===void 0){if(u==="instanceMatrix"&&S.instanceMatrix)A0=S.instanceMatrix;if(u==="instanceColor"&&S.instanceColor)A0=S.instanceColor}if(K0===void 0)return!0;if(K0.attribute!==A0)return!0;if(A0&&K0.data!==A0.data)return!0;x++}if(W.attributesNum!==x)return!0;if(W.index!==T)return!0;return!1}function R(S,p,t,T){let c={},n=p.attributes,x=0,X0=t.getAttributes();for(let u in X0)if(X0[u].location>=0){let K0=n[u];if(K0===void 0){if(u==="instanceMatrix"&&S.instanceMatrix)K0=S.instanceMatrix;if(u==="instanceColor"&&S.instanceColor)K0=S.instanceColor}let A0={};if(A0.attribute=K0,K0&&K0.data)A0.data=K0.data;c[u]=A0,x++}W.attributes=c,W.attributesNum=x,W.index=T}function A(){let S=W.newAttributes;for(let p=0,t=S.length;p<t;p++)S[p]=0}function O(S){E(S,0)}function E(S,p){let{newAttributes:t,enabledAttributes:T,attributeDivisors:c}=W;if(t[S]=1,T[S]===0)J.enableVertexAttribArray(S),T[S]=1;if(c[S]!==p)J.vertexAttribDivisor(S,p),c[S]=p}function k(){let{newAttributes:S,enabledAttributes:p}=W;for(let t=0,T=p.length;t<T;t++)if(p[t]!==S[t])J.disableVertexAttribArray(t),p[t]=0}function z(S,p,t,T,c,n,x){if(x===!0)J.vertexAttribIPointer(S,p,t,c,n);else J.vertexAttribPointer(S,p,t,T,c,n)}function B(S,p,t,T){A();let c=T.attributes,n=t.getAttributes(),x=p.defaultAttributeValues;for(let X0 in n){let u=n[X0];if(u.location>=0){let r=c[X0];if(r===void 0){if(X0==="instanceMatrix"&&S.instanceMatrix)r=S.instanceMatrix;if(X0==="instanceColor"&&S.instanceColor)r=S.instanceColor}if(r!==void 0){let{normalized:K0,itemSize:A0}=r,i=Q.get(r);if(i===void 0)continue;let{buffer:$0,type:_0,bytesPerElement:b0}=i,x0=_0===J.INT||_0===J.UNSIGNED_INT||r.gpuType===jZ;if(r.isInterleavedBufferAttribute){let k0=r.data,YJ=k0.isInterleavedBuffer===!0?k0.stride:k0.itemSize,t0=r.offset;if(k0.isInstancedInterleavedBuffer||k0.isInstancedBufferAttribute){for(let d0=0;d0<u.locationSize;d0++)E(u.location+d0,k0.meshPerAttribute);if(S.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=k0.meshPerAttribute*k0.count}else for(let d0=0;d0<u.locationSize;d0++)O(u.location+d0);J.bindBuffer(J.ARRAY_BUFFER,$0);for(let d0=0;d0<u.locationSize;d0++)z(u.location+d0,A0/u.locationSize,_0,K0,YJ*b0,(t0+A0/u.locationSize*d0)*b0,x0)}else{if(r.isInstancedBufferAttribute){for(let k0=0;k0<u.locationSize;k0++)E(u.location+k0,r.meshPerAttribute);if(S.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=r.meshPerAttribute*r.count}else for(let k0=0;k0<u.locationSize;k0++)O(u.location+k0);J.bindBuffer(J.ARRAY_BUFFER,$0);for(let k0=0;k0<u.locationSize;k0++)z(u.location+k0,A0/u.locationSize,_0,K0,A0*b0,A0/u.locationSize*k0*b0,x0)}}else if(x!==void 0){let K0=x[X0];if(K0!==void 0)switch(K0.length){case 2:J.vertexAttrib2fv(u.location,K0);break;case 3:J.vertexAttrib3fv(u.location,K0);break;case 4:J.vertexAttrib4fv(u.location,K0);break;default:J.vertexAttrib1fv(u.location,K0)}}}}k()}function C(){I();for(let S in K){let p=K[S];for(let t in p){let T=p[t];for(let c in T){let n=T[c];for(let x in n)N(n[x].object),delete n[x];delete T[c]}}delete K[S]}}function P(S){if(K[S.id]===void 0)return;let p=K[S.id];for(let t in p){let T=p[t];for(let c in T){let n=T[c];for(let x in n)N(n[x].object),delete n[x];delete T[c]}}delete K[S.id]}function D(S){for(let p in K){let t=K[p];for(let T in t){let c=t[T];if(c[S.id]===void 0)continue;let n=c[S.id];for(let x in n)N(n[x].object),delete n[x];delete c[S.id]}}}function V(S){for(let p in K){let t=K[p],T=S.isInstancedMesh===!0?S.id:0,c=t[T];if(c===void 0)continue;for(let n in c){let x=c[n];for(let X0 in x)N(x[X0].object),delete x[X0];delete c[n]}if(delete t[T],Object.keys(t).length===0)delete K[p]}}function I(){if(f(),X=!0,W===$)return;W=$,U(W.object)}function f(){$.geometry=null,$.program=null,$.wireframe=!1}return{setup:Y,reset:I,resetDefaultState:f,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfObject:V,releaseStatesOfProgram:D,initAttributes:A,enableAttribute:O,disableUnusedAttributes:k}}function iN(J,Q,Z){let K;function $(H){K=H}function W(H,U){J.drawArrays(K,H,U),Z.update(U,K,1)}function X(H,U,N){if(N===0)return;J.drawArraysInstanced(K,H,U,N),Z.update(U,K,N)}function Y(H,U,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(K,H,0,U,0,N);let G=0;for(let F=0;F<N;F++)G+=U[F];Z.update(G,K,1)}this.setMode=$,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function oN(J,Q,Z,K){let $;function W(){if($!==void 0)return $;if(Q.has("EXT_texture_filter_anisotropic")===!0){let D=Q.get("EXT_texture_filter_anisotropic");$=J.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else $=0;return $}function X(D){if(D!==a9&&K.convert(D)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(D){let V=D===y9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(D!==T9&&D!==o9&&!V&&K.convert(D)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function H(D){if(D==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";D="mediump"}if(D==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=Z.precision!==void 0?Z.precision:"highp",N=H(U);if(N!==U)n0("WebGLRenderer:",U,"not supported, using",N,"instead."),U=N;let q=Z.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),G=Z.logarithmicDepthBuffer===!0&&q===!1;if(Z.reversedDepthBuffer===!0&&q===!1)n0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(Z.logarithmicDepthBuffer===!0&&q===!0)n0("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),E=J.getParameter(J.MAX_VERTEX_ATTRIBS),k=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),z=J.getParameter(J.MAX_VARYING_VECTORS),B=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),C=J.getParameter(J.MAX_SAMPLES),P=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:X,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:G,reversedDepthBuffer:q,maxTextures:F,maxVertexTextures:R,maxTextureSize:A,maxCubemapSize:O,maxAttributes:E,maxVertexUniforms:k,maxVaryings:z,maxFragmentUniforms:B,maxSamples:C,samples:P}}function aN(J){let Q=this,Z=null,K=0,$=!1,W=!1,X=new R9,Y=new i0,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(q,G){let F=q.length!==0||G||K!==0||$;return $=G,K=q.length,F},this.beginShadows=function(){W=!0,N(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(q,G){Z=N(q,G,0)},this.setState=function(q,G,F){let{clippingPlanes:R,clipIntersection:A,clipShadows:O}=q,E=J.get(q);if(!$||R===null||R.length===0||W&&!O)if(W)N(null);else U();else{let k=W?0:K,z=k*4,B=E.clippingState||null;H.value=B,B=N(R,G,z,F);for(let C=0;C!==z;++C)B[C]=Z[C];E.clippingState=B,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=k}};function U(){if(H.value!==Z)H.value=Z,H.needsUpdate=K>0;Q.numPlanes=K,Q.numIntersection=0}function N(q,G,F,R){let A=q!==null?q.length:0,O=null;if(A!==0){if(O=H.value,R!==!0||O===null){let E=F+A*4,k=G.matrixWorldInverse;if(Y.getNormalMatrix(k),O===null||O.length<E)O=new Float32Array(E);for(let z=0,B=F;z!==A;++z,B+=4)X.copy(q[z]).applyMatrix4(k,Y),X.normal.toArray(O,B),O[B+3]=X.constant}H.value=O,H.needsUpdate=!0}return Q.numPlanes=A,Q.numIntersection=0,O}}class vQ extends L9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let Z={width:J,height:J,depth:1},K=[Z,Z,Z,Z,Z,Z];this.texture=new DQ(K),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let Z={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},K=new Y9(5,5,5),$=new J8({name:"CubemapFromEquirect",uniforms:m8(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,side:U9,blending:S8});$.uniforms.tEquirect.value=Q;let W=new CJ(K,$),X=Q.minFilter;if(Q.minFilter===N8)Q.minFilter=V9;return new H6(1,10,this).update(J,W),Q.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,Z=!0,K=!0){let $=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,Z,K);J.setRenderTarget($)}}var TX=256,rN=3,tN=20,tX=256,eX=16,eN=3,JG=new v,QG=new y0;class jQ{constructor(J){this._renderer=J,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new H6(1,10,null),this._boxMesh=new CJ(new Y9(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(J,Q=0,Z=0.1,K=100,$={}){let{size:W=256,position:X=JG}=$,Y=this._renderer;this._setSize(W);let H=this._allocateTarget(),U=this._getSourceTarget(!0);if(Q>0)U.texture.mipmapsAutoUpdate=!1;let{autoClear:N,autoClearColor:q,autoClearDepth:G,autoClearStencil:F}=Y,R=J.background;if(Y.autoClear=!0,Y.autoClearColor=!0,Y.autoClearDepth=!0,Y.autoClearStencil=!0,R===null)J.background=Y.getClearColor(QG);let A=new H6(Z,K,U);if(A.position.copy(X),A.update(Y,J),Y.autoClear=N,Y.autoClearColor=q,Y.autoClearDepth=G,Y.autoClearStencil=F,J.background=R,Q>0)U.texture.mipmapsAutoUpdate=!0,this._blur(H,Q);return this._applyPMREM(H),H}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=jX(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=SX(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(J,Q){return Q>0?1-Math.sqrt(1-J/Q):0}_setSize(J){this._cubeSize=Math.max(TX,EX(J))}_fromTexture(J,Q){if(J.mapping===s7||J.mapping===V7)this._setSize(J.image.length===0?TX:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);let Z=Q||this._allocateTarget();return this._textureToCubemap(J),this._applyPMREM(Z),Z}_allocateTarget(){let J=this._cubeSize,Q=wX(J,!1,!1),Z=Math.log2(J)-rN;for(let K=0;K<=Z;K++)Q.texture.mipmaps.push({width:J>>K,height:J>>K});return Q.texture.name="PMREM",Q.texture.isPMREMTexture=!0,Q}_getSourceTarget(J=!1){let Q=this._cubeSize,Z=this._sourceTarget;if(Z===null||Z.width!==Q||J&&Z.depthBuffer===!1){if(Z!==null)Z.dispose();this._sourceTarget=wX(Q,!0,J)}return this._sourceTarget}_compileMaterial(J){this._boxMesh.material=J,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(J,Q,Z){let K=this._boxMesh,$=this._cubeCamera;K.material=Z,$.renderTarget=J,$.activeMipmapLevel=Q;let W=J.width>>Q;J.viewport.set(0,0,W,W),$.update(this._renderer,K),J.viewport.set(0,0,J.width,J.height)}_textureToCubemap(J){let Q;if(J.mapping===s7||J.mapping===V7){if(this._cubemapMaterial===null)this._cubemapMaterial=jX();Q=this._cubemapMaterial,Q.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=SX();Q=this._equirectMaterial}Q.uniforms.envMap.value=J,this._renderCube(this._getSourceTarget(),0,Q)}_applyPMREM(J){if(this._ggxMaterial===null)this._ggxMaterial=ZG(),this._integrationMaterial=KG();let Q=this._cubeSize,Z=J.texture.mipmaps.length-1,K=this._ggxMaterial.uniforms;K.envMap.value=this._sourceTarget.texture;let $=this._integrationMaterial.uniforms;$.envMap.value=this._sourceTarget.texture,$.sourceLod.value=Math.log2(Q/eX);for(let W=0;W<=Z;W++){let X=jQ.lodToRoughness(W,Z);if(W>Z-eN)$.roughness.value=X,this._renderCube(J,W,this._integrationMaterial);else{let Y=X>0?Math.log2(Q)+0.5*Math.log2(6/(tX*Math.pow(X,4)))+0.5:0;K.roughness.value=X,K.lodBias.value=Y,this._renderCube(J,W,this._ggxMaterial)}}}_blur(J,Q){if(this._blurMaterial===null)this._blurMaterial=$G();let Z=this._blurMaterial,K=Z.uniforms,$=this._sourceTarget;K.sigma.value=Math.min(Q,Math.PI)/Math.SQRT2,K.envMap.value=$.texture,this._renderCube(J,0,Z),K.envMap.value=J.texture,this._renderCube($,0,Z)}}function wX(J,Q,Z){return new vQ(J,{minFilter:N8,generateMipmaps:Q,type:y9,colorSpace:OK,depthBuffer:Z})}function q6(J,Q,Z){return new J8({name:J,uniforms:Q,vertexShader:e0.cube_vert,fragmentShader:Z,side:U9,blending:S8,depthTest:!1,depthWrite:!1})}function ZG(){return q6("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${tX}u

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
	`)}function KG(){return q6("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:eX}},`

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
	`)}function $G(){return q6("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${tN}
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
	`)}function SX(){return q6("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function jX(){return q6("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function WG(J){let Q=new WeakMap,Z=new WeakMap,K=null;function $(G,F=!1){if(G===null||G===void 0)return null;if(F)return X(G);return W(G)}function W(G){if(G&&G.isTexture){let F=G.mapping;if(F===r6||F===t6)if(Q.has(G)){let R=Q.get(G).texture;return Y(R,G.mapping)}else{let R=G.image;if(R&&R.height>0){let A=new vQ(R.height);return A.fromEquirectangularTexture(J,G),Q.set(G,A),G.addEventListener("dispose",U),Y(A.texture,G.mapping)}else return null}}return G}function X(G){if(G&&G.isTexture&&G.isPMREMTexture!==!0){let F=G.mapping,R=F===r6||F===t6,A=F===s7||F===V7;if(R||A){let O=Z.get(G),E=O!==void 0?O.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==E){if(K===null)K=new jQ(J);return O=R?K.fromEquirectangular(G,O):K.fromCubemap(G,O),O.texture.pmremVersion=G.pmremVersion,Z.set(G,O),O.texture}else if(O!==void 0)return O.texture;else{let k=G.image;if(R&&k&&k.height>0||A&&k&&H(k)){if(K===null)K=new jQ(J);return O=R?K.fromEquirectangular(G):K.fromCubemap(G),O.texture.pmremVersion=G.pmremVersion,Z.set(G,O),G.addEventListener("dispose",N),O.texture}else return null}}}return G}function Y(G,F){if(F===r6)G.mapping=s7;else if(F===t6)G.mapping=V7;return G}function H(G){let F=0,R=6;for(let A=0;A<R;A++)if(G[A]!==void 0)F++;return F===R}function U(G){let F=G.target;F.removeEventListener("dispose",U);let R=Q.get(F);if(R!==void 0)Q.delete(F),R.dispose()}function N(G){let F=G.target;F.removeEventListener("dispose",N);let R=Z.get(F);if(R!==void 0)Z.delete(F),R.dispose()}function q(){if(Q=new WeakMap,Z=new WeakMap,K!==null)K.dispose(),K=null}return{get:$,dispose:q}}function XG(J){let Q={};function Z(K){if(Q[K]!==void 0)return Q[K];let $=J.getExtension(K);return Q[K]=$,$}return{has:function(K){return Z(K)!==null},init:function(){Z("EXT_color_buffer_float"),Z("WEBGL_clip_cull_distance"),Z("OES_texture_float_linear"),Z("EXT_color_buffer_half_float"),Z("WEBGL_multisampled_render_to_texture"),Z("WEBGL_render_shared_exponent")},get:function(K){let $=Z(K);if($===null)b7("WebGLRenderer: "+K+" extension not supported.");return $}}}function YG(J,Q,Z,K){let $={},W=new WeakMap,X=new FinalizationRegistry((R)=>delete $[R]);function Y(R){H(R.target)}function H(R){if(R.index!==null)Q.remove(R.index);for(let O in R.attributes)Q.remove(R.attributes[O]);R.removeEventListener("dispose",Y),delete $[R.id],X.unregister(R);let A=W.get(R);if(A)Q.remove(A),W.delete(R);if(K.releaseStatesOfGeometry(R),R.isInstancedBufferGeometry===!0)delete R._maxInstanceCount;Z.memory.geometries--}function U(R,A){if($[A.id]!==void 0)return A;return A.addEventListener("dispose",Y),$[A.id]=new WeakRef(A),X.register(A,A.id,A),Z.memory.geometries++,A}function N(R){let A=R.attributes;for(let O in A)Q.update(A[O],J.ARRAY_BUFFER)}function q(R){let A=R.index,O=R.attributes.position,E=0;if(O===void 0)return;let k=A!==null?A.array.length:O.array.length/3-1,B=new(O.count>=65535?GQ:NQ)(Math.ceil(k/3)*6,1),C=B.array;if(A!==null){let D=A.array;E=A.version;for(let V=0,I=0;V<k;V+=3){let f=D[V+0],S=D[V+1],p=D[V+2];C[I++]=f,C[I++]=S,C[I++]=S,C[I++]=p,C[I++]=p,C[I++]=f}}else{E=O.version;for(let D=0,V=0;D<k;D+=3){let I=D+0,f=D+1,S=D+2;C[V++]=I,C[V++]=f,C[V++]=f,C[V++]=S,C[V++]=S,C[V++]=I}}B.version=E;let P=W.get(R);if(P)Q.remove(P);W.set(R,B)}function G(R){let A=W.get(R);if(A){let O=R.index;if(O!==null){if(A.version<O.version)q(R)}}else q(R);return W.get(R)}function F(){for(let R in $){let A=$[R].deref();if(A!==void 0)H(A)}}return{get:U,update:N,getWireframeAttribute:G,dispose:F}}function HG(J,Q,Z){let K;function $(q){K=q}let W,X;function Y(q){W=q.type,X=q.bytesPerElement}function H(q,G){J.drawElements(K,G,W,q*X),Z.update(G,K,1)}function U(q,G,F){if(F===0)return;J.drawElementsInstanced(K,G,W,q*X,F),Z.update(G,K,F)}function N(q,G,F){if(F===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(K,G,0,W,q,0,F);let A=0;for(let O=0;O<F;O++)A+=G[O];Z.update(A,K,1)}this.setMode=$,this.setIndex=Y,this.render=H,this.renderInstances=U,this.renderMultiDraw=N}function UG(J){let Q={geometries:0,textures:0},Z={frame:0,calls:0,triangles:0,points:0,lines:0};function K(W,X,Y){switch(Z.calls++,X){case J.TRIANGLES:Z.triangles+=Y*(W/3);break;case J.LINES:Z.lines+=Y*(W/2);break;case J.LINE_STRIP:Z.lines+=Y*(W-1);break;case J.LINE_LOOP:Z.lines+=Y*W;break;case J.POINTS:Z.points+=Y*W;break;default:c0("WebGLInfo: Unknown draw mode:",X);break}}function $(){Z.calls=0,Z.triangles=0,Z.points=0,Z.lines=0}return{memory:Q,render:Z,programs:null,autoReset:!0,reset:$,update:K}}function NG(J,Q,Z){let K=new WeakMap,$=new jJ;function W(X,Y,H){let U=X.morphTargetInfluences,N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,q=N!==void 0?N.length:0,G=K.get(Y);if(G===void 0||G.count!==q){let I=function(){D.dispose(),K.delete(Y),Y.removeEventListener("dispose",I)};if(G!==void 0)G.texture.dispose();let F=Y.morphAttributes.position!==void 0,R=Y.morphAttributes.normal!==void 0,A=Y.morphAttributes.color!==void 0,O=Y.morphAttributes.position||[],E=Y.morphAttributes.normal||[],k=Y.morphAttributes.color||[],z=0;if(F===!0)z=1;if(R===!0)z=2;if(A===!0)z=3;let B=Y.attributes.position.count*z,C=1;if(B>Q.maxTextureSize)C=Math.ceil(B/Q.maxTextureSize),B=Q.maxTextureSize;let P=new Float32Array(B*C*4*q),D=new HQ(P,B,C,q);D.type=o9,D.needsUpdate=!0;let V=z*4;for(let f=0;f<q;f++){let S=O[f],p=E[f],t=k[f],T=B*C*4*f;for(let c=0;c<S.count;c++){let n=c*V;if(F===!0)$.fromBufferAttribute(S,c),P[T+n+0]=$.x,P[T+n+1]=$.y,P[T+n+2]=$.z,P[T+n+3]=0;if(R===!0)$.fromBufferAttribute(p,c),P[T+n+4]=$.x,P[T+n+5]=$.y,P[T+n+6]=$.z,P[T+n+7]=0;if(A===!0)$.fromBufferAttribute(t,c),P[T+n+8]=$.x,P[T+n+9]=$.y,P[T+n+10]=$.z,P[T+n+11]=t.itemSize===4?$.w:1}}G={count:q,texture:D,size:new Z0(B,C)},K.set(Y,G),Y.addEventListener("dispose",I)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",X.morphTexture,Z);else{let F=0;for(let A=0;A<U.length;A++)F+=U[A];let R=Y.morphTargetsRelative?1:1-F;H.getUniforms().setValue(J,"morphTargetBaseInfluence",R),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",G.texture,Z),H.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:W}}function GG(J,Q,Z,K,$){let W=new WeakMap;function X(U){let N=$.render.frame,q=U.geometry,G=Q.get(U,q);if(W.get(G)!==N)Q.update(G),W.set(G,N);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(W.get(U)!==N){if(Z.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)Z.update(U.instanceColor,J.ARRAY_BUFFER);W.set(U,N)}}if(U.isSkinnedMesh){let F=U.skeleton;if(W.get(F)!==N)F.update(),W.set(F,N)}return G}function Y(){W=new WeakMap}function H(U){let N=U.target;if(N.removeEventListener("dispose",H),K.releaseStatesOfObject(N),Z.remove(N.instanceMatrix),N.instanceColor!==null)Z.remove(N.instanceColor)}return{update:X,dispose:Y}}var qG={[CZ]:"LINEAR_TONE_MAPPING",[_Z]:"REINHARD_TONE_MAPPING",[PZ]:"CINEON_TONE_MAPPING",[IZ]:"ACES_FILMIC_TONE_MAPPING",[wZ]:"AGX_TONE_MAPPING",[SZ]:"NEUTRAL_TONE_MAPPING",[TZ]:"CUSTOM_TONE_MAPPING"};function EG(J,Q,Z,K,$,W){let X=new L9(Q,Z,{type:J,depthBuffer:$,stencilBuffer:W,samples:K?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,H=null,U=null,N=new Z9;N.setAttribute("position",new OJ([-1,3,0,-1,-1,0,3,-1,0],3)),N.setAttribute("uv",new OJ([0,2,0,0,2,0],2));let q=new yK({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),G=new CJ(N,q),F=new k7(-1,1,1,-1,0,1),R=null,A=null,O=!1,E,k=null,z=[],B=!1;this.setSize=function(C,P){if(X.setSize(C,P),Y!==null)Y.setSize(C,P);if(H!==null)H.setSize(C,P);for(let D=0;D<z.length;D++){let V=z[D];if(V.setSize)V.setSize(C,P)}},this.setEffects=function(C){z=C,B=z.length>0&&z[0].isRenderPass===!0;let{width:P,height:D}=X;if(z.length>0&&Y===null)Y=new L9(P,D,{type:y9,depthBuffer:!1,stencilBuffer:!1}),H=new L9(P,D,{type:y9,depthBuffer:!1,stencilBuffer:!1});let V=$===!0&&z.some((I)=>I.needsDepthTexture===!0);if(V!==(X.depthTexture!==null)){if(V===!0&&U===null){if(U=new D8(P,D),W===!0)U.format=q8,U.type=j8}X.dispose(),X.depthTexture=V?U:null,X.resolveDepthBuffer=V,X.storeMultisampledDepthBuffer=V}for(let I=0;I<z.length;I++){let f=z[I];if(f.setSize)f.setSize(P,D);if(V&&f.needsDepthTexture===!0&&f.setDepthTexture)f.setDepthTexture(U)}},this.begin=function(C,P){if(O)return!1;if(C.toneMapping===v9&&z.length===0)return!1;if(k=P,P!==null){let{width:D,height:V}=P;if(X.width!==D||X.height!==V)this.setSize(D,V)}if(B===!1)C.setRenderTarget(X);return E=C.toneMapping,C.toneMapping=v9,!0},this.hasRenderPass=function(){return B},this.end=function(C,P){C.toneMapping=E,O=!0;let D=X,V=Y;for(let I=0;I<z.length;I++){let f=z[I];if(f.enabled===!1)continue;if(f.render(C,V,D,P),f.needsSwap!==!1)D=V,V=V===Y?H:Y}if(R!==C.outputColorSpace||A!==C.toneMapping){if(R=C.outputColorSpace,A=C.toneMapping,q.defines={},WJ.getTransfer(R)===AJ)q.defines.SRGB_TRANSFER="";let I=qG[A];if(I)q.defines[I]="";q.needsUpdate=!0}q.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(k),C.render(G,F),k=null,O=!1},this.isCompositing=function(){return O},this.dispose=function(){if(X.dispose(),Y!==null)Y.dispose();if(H!==null)H.dispose();N.dispose(),q.dispose()}}var JY=new nJ,QY=new D8(1,1),ZY=new RQ(1),KY=new HQ,$Y=new AK,WY=new DQ,vX=[],yX=[],fX=new Float32Array(16),hX=new Float32Array(9),bX=new Float32Array(4);function z7(J,Q,Z){let K=J[0];if(K<=0||K>0)return J;let $=Q*Z,W=vX[$];if(W===void 0)W=new Float32Array($),vX[$]=W;if(Q!==0){K.toArray(W,0);for(let X=1,Y=0;X!==Q;++X)Y+=Z,J[X].toArray(W,Y)}return W}function mJ(J,Q){if(J.length!==Q.length)return!1;for(let Z=0,K=J.length;Z<K;Z++)if(J[Z]!==Q[Z])return!1;return!0}function lJ(J,Q){for(let Z=0,K=Q.length;Z<K;Z++)J[Z]=Q[Z]}function yQ(J,Q){let Z=yX[Q];if(Z===void 0)Z=new Int32Array(Q),yX[Q]=Z;for(let K=0;K!==Q;++K)Z[K]=J.allocateTextureUnit();return Z}function FG(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1f(this.addr,Q),Z[0]=Q}function OG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(mJ(Z,Q))return;J.uniform2fv(this.addr,Q),lJ(Z,Q)}}function DG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else if(Q.r!==void 0){if(Z[0]!==Q.r||Z[1]!==Q.g||Z[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),Z[0]=Q.r,Z[1]=Q.g,Z[2]=Q.b}else{if(mJ(Z,Q))return;J.uniform3fv(this.addr,Q),lJ(Z,Q)}}function RG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(mJ(Z,Q))return;J.uniform4fv(this.addr,Q),lJ(Z,Q)}}function MG(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(mJ(Z,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),lJ(Z,Q)}else{if(mJ(Z,K))return;bX.set(K),J.uniformMatrix2fv(this.addr,!1,bX),lJ(Z,K)}}function VG(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(mJ(Z,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),lJ(Z,Q)}else{if(mJ(Z,K))return;hX.set(K),J.uniformMatrix3fv(this.addr,!1,hX),lJ(Z,K)}}function BG(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(mJ(Z,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),lJ(Z,Q)}else{if(mJ(Z,K))return;fX.set(K),J.uniformMatrix4fv(this.addr,!1,fX),lJ(Z,K)}}function LG(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1i(this.addr,Q),Z[0]=Q}function kG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(mJ(Z,Q))return;J.uniform2iv(this.addr,Q),lJ(Z,Q)}}function zG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(mJ(Z,Q))return;J.uniform3iv(this.addr,Q),lJ(Z,Q)}}function AG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(mJ(Z,Q))return;J.uniform4iv(this.addr,Q),lJ(Z,Q)}}function CG(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1ui(this.addr,Q),Z[0]=Q}function _G(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(mJ(Z,Q))return;J.uniform2uiv(this.addr,Q),lJ(Z,Q)}}function PG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(mJ(Z,Q))return;J.uniform3uiv(this.addr,Q),lJ(Z,Q)}}function IG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(mJ(Z,Q))return;J.uniform4uiv(this.addr,Q),lJ(Z,Q)}}function fQ(J){if(J.version===0)J.compareFunction=VK,J.needsUpdate=!0;return J}function TG(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;let W;if(this.type===J.SAMPLER_2D_SHADOW)W=fQ(QY);else W=JY;Z.setTexture2D(Q||W,$)}function wG(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTexture3D(Q||$Y,$)}function SG(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;let W;if(this.type===J.SAMPLER_CUBE_SHADOW)W=fQ(ZY);else W=WY;Z.setTextureCube(Q||W,$)}function jG(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTexture2DArray(Q||KY,$)}function vG(J){switch(J){case 5126:return FG;case 35664:return OG;case 35665:return DG;case 35666:return RG;case 35674:return MG;case 35675:return VG;case 35676:return BG;case 5124:case 35670:return LG;case 35667:case 35671:return kG;case 35668:case 35672:return zG;case 35669:case 35673:return AG;case 5125:return CG;case 36294:return _G;case 36295:return PG;case 36296:return IG;case 35678:case 36198:case 36298:case 36306:case 35682:return TG;case 35679:case 36299:case 36307:return wG;case 35680:case 36300:case 36308:case 36293:return SG;case 36289:case 36303:case 36311:case 36292:return jG}}function yG(J,Q){J.uniform1fv(this.addr,Q)}function fG(J,Q){let Z=z7(Q,this.size,2);J.uniform2fv(this.addr,Z)}function hG(J,Q){let Z=z7(Q,this.size,3);J.uniform3fv(this.addr,Z)}function bG(J,Q){let Z=z7(Q,this.size,4);J.uniform4fv(this.addr,Z)}function xG(J,Q){let Z=z7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,Z)}function gG(J,Q){let Z=z7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,Z)}function pG(J,Q){let Z=z7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,Z)}function mG(J,Q){J.uniform1iv(this.addr,Q)}function lG(J,Q){J.uniform2iv(this.addr,Q)}function uG(J,Q){J.uniform3iv(this.addr,Q)}function dG(J,Q){J.uniform4iv(this.addr,Q)}function cG(J,Q){J.uniform1uiv(this.addr,Q)}function nG(J,Q){J.uniform2uiv(this.addr,Q)}function sG(J,Q){J.uniform3uiv(this.addr,Q)}function iG(J,Q){J.uniform4uiv(this.addr,Q)}function oG(J,Q,Z){let K=this.cache,$=Q.length,W=yQ(Z,$);if(!mJ(K,W))J.uniform1iv(this.addr,W),lJ(K,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=fQ(QY);else X=JY;for(let Y=0;Y!==$;++Y)Z.setTexture2D(Q[Y]||X,W[Y])}function aG(J,Q,Z){let K=this.cache,$=Q.length,W=yQ(Z,$);if(!mJ(K,W))J.uniform1iv(this.addr,W),lJ(K,W);for(let X=0;X!==$;++X)Z.setTexture3D(Q[X]||$Y,W[X])}function rG(J,Q,Z){let K=this.cache,$=Q.length,W=yQ(Z,$);if(!mJ(K,W))J.uniform1iv(this.addr,W),lJ(K,W);let X;if(this.type===J.SAMPLER_CUBE_SHADOW)X=fQ(ZY);else X=WY;for(let Y=0;Y!==$;++Y)Z.setTextureCube(Q[Y]||X,W[Y])}function tG(J,Q,Z){let K=this.cache,$=Q.length,W=yQ(Z,$);if(!mJ(K,W))J.uniform1iv(this.addr,W),lJ(K,W);for(let X=0;X!==$;++X)Z.setTexture2DArray(Q[X]||KY,W[X])}function eG(J){switch(J){case 5126:return yG;case 35664:return fG;case 35665:return hG;case 35666:return bG;case 35674:return xG;case 35675:return gG;case 35676:return pG;case 5124:case 35670:return mG;case 35667:case 35671:return lG;case 35668:case 35672:return uG;case 35669:case 35673:return dG;case 5125:return cG;case 36294:return nG;case 36295:return sG;case 36296:return iG;case 35678:case 36198:case 36298:case 36306:case 35682:return oG;case 35679:case 36299:case 36307:return aG;case 35680:case 36300:case 36308:case 36293:return rG;case 36289:case 36303:case 36311:case 36292:return tG}}class XY{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.setValue=vG(Q.type)}}class YY{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=eG(Q.type)}}class HY{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,Z){let K=this.seq;for(let $=0,W=K.length;$!==W;++$){let X=K[$];X.setValue(J,Q[X.id],Z)}}}var tK=/(\w+)(\])?(\[|\.)?/g;function xX(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function Jq(J,Q,Z){let K=J.name,$=K.length;tK.lastIndex=0;while(!0){let W=tK.exec(K),X=tK.lastIndex,Y=W[1],H=W[2]==="]",U=W[3];if(H)Y=Y|0;if(U===void 0||U==="["&&X+2===$){xX(Z,U===void 0?new XY(Y,J,Q):new YY(Y,J,Q));break}else{let q=Z.map[Y];if(q===void 0)q=new HY(Y),xX(Z,q);Z=q}}}class G6{constructor(J,Q){this.seq=[],this.map={};let Z=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<Z;++W){let X=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,X.name);Jq(X,Y,this)}let K=[],$=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)K.push(W);else $.push(W);if(K.length>0)this.seq=K.concat($)}setValue(J,Q,Z,K){let $=this.map[Q];if($!==void 0)$.setValue(J,Z,K)}setOptional(J,Q,Z){let K=Q[Z];if(K!==void 0)this.setValue(J,Z,K)}static upload(J,Q,Z,K){for(let $=0,W=Q.length;$!==W;++$){let X=Q[$],Y=Z[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,K)}}static seqWithValue(J,Q){let Z=[];for(let K=0,$=J.length;K!==$;++K){let W=J[K];if(W.id in Q)Z.push(W)}return Z}}function gX(J,Q,Z){let K=J.createShader(Q);return J.shaderSource(K,Z),J.compileShader(K),K}var Qq=37297,Zq=0;function Kq(J,Q){let Z=J.split(`
`),K=[],$=Math.max(Q-6,0),W=Math.min(Q+6,Z.length);for(let X=$;X<W;X++){let Y=X+1;K.push(`${Y===Q?">":" "} ${Y}: ${Z[X]}`)}return K.join(`
`)}var pX=new i0;function $q(J){WJ._getMatrix(pX,WJ.workingColorSpace,J);let Q=`mat3( ${pX.elements.map((Z)=>Z.toFixed(4))} )`;switch(WJ.getTransfer(J)){case DK:return[Q,"LinearTransferOETF"];case AJ:return[Q,"sRGBTransferOETF"];default:return n0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function mX(J,Q,Z){let K=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(K&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return Z.toUpperCase()+`

`+W+`

`+Kq(J.getShaderSource(Q),Y)}else return W}function Wq(J,Q){let Z=$q(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${Z[1]}( vec4( ${Z[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Xq={[CZ]:"Linear",[_Z]:"Reinhard",[PZ]:"Cineon",[IZ]:"ACESFilmic",[wZ]:"AgX",[SZ]:"Neutral",[TZ]:"Custom"};function Yq(J,Q){let Z=Xq[Q];if(Z===void 0)return n0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+Z+"ToneMapping( color ); }"}var SQ=new v;function Hq(){WJ.getLuminanceCoefficients(SQ);let J=SQ.x.toFixed(4),Q=SQ.y.toFixed(4),Z=SQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${Z} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Uq(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(N6).join(`
`)}function Nq(J){let Q=[];for(let Z in J){let K=J[Z];if(K===!1)continue;Q.push("#define "+Z+" "+K)}return Q.join(`
`)}function Gq(J,Q){let Z={},K=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let $=0;$<K;$++){let W=J.getActiveAttrib(Q,$),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;Z[X]={type:W.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return Z}function N6(J){return J!==""}function lX(J,Q){let Z=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Z).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,Q.numLightProbeGrids)}function uX(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var qq=/^[ \t]*#include +<([\w\d./]+)>/gm;function J$(J){return J.replace(qq,Eq)}function Eq(J,Q){let Z=e0[Q];if(Z===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">");return J$(Z)}var Fq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dX(J){return J.replace(Fq,Oq)}function Oq(J,Q,Z,K){let $="";for(let W=parseInt(Q);W<parseInt(Z);W++)$+=K.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return $}function cX(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var Dq={[c7]:"SHADOWMAP_TYPE_PCF",[D7]:"SHADOWMAP_TYPE_VSM"};function Rq(J){return Dq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Mq={[V7]:"ENVMAP_MODE_REFRACTION"};function Vq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Mq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bq={[dW]:"ENVMAP_BLENDING_MULTIPLY",[cW]:"ENVMAP_BLENDING_MIX",[nW]:"ENVMAP_BLENDING_ADD"};function Lq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return Bq[J.combine]||"ENVMAP_BLENDING_NONE"}function kq(J,Q,Z,K){let $=J.getContext(),W=Z.defines,X=Z.vertexShader,Y=Z.fragmentShader,H=Rq(Z),U=Z.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",N=Vq(Z),q=Lq(Z),G=Uq(Z),F=Nq(W),R=$.createProgram(),A,O,E=Z.glslVersion?"#version "+Z.glslVersion+`
`:"";if(Z.isRawShaderMaterial){if(A=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,F].filter(N6).join(`
`),A.length>0)A+=`
`;if(O=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,F].filter(N6).join(`
`),O.length>0)O+=`
`}else A=[cX(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,F,Z.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Z.batching?"#define USE_BATCHING":"",Z.batchingColor?"#define USE_BATCHING_COLOR":"",Z.instancing?"#define USE_INSTANCING":"",Z.instancingColor?"#define USE_INSTANCING_COLOR":"",Z.instancingMorph?"#define USE_INSTANCING_MORPH":"",Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.map?"#define USE_MAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+N:"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.displacementMap?"#define USE_DISPLACEMENTMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.mapUv?"#define MAP_UV "+Z.mapUv:"",Z.alphaMapUv?"#define ALPHAMAP_UV "+Z.alphaMapUv:"",Z.lightMapUv?"#define LIGHTMAP_UV "+Z.lightMapUv:"",Z.aoMapUv?"#define AOMAP_UV "+Z.aoMapUv:"",Z.emissiveMapUv?"#define EMISSIVEMAP_UV "+Z.emissiveMapUv:"",Z.bumpMapUv?"#define BUMPMAP_UV "+Z.bumpMapUv:"",Z.normalMapUv?"#define NORMALMAP_UV "+Z.normalMapUv:"",Z.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Z.displacementMapUv:"",Z.metalnessMapUv?"#define METALNESSMAP_UV "+Z.metalnessMapUv:"",Z.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Z.roughnessMapUv:"",Z.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Z.anisotropyMapUv:"",Z.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Z.clearcoatMapUv:"",Z.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Z.clearcoatNormalMapUv:"",Z.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Z.clearcoatRoughnessMapUv:"",Z.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+Z.diffuseRoughnessMapUv:"",Z.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Z.iridescenceMapUv:"",Z.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Z.iridescenceThicknessMapUv:"",Z.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Z.sheenColorMapUv:"",Z.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Z.sheenRoughnessMapUv:"",Z.specularMapUv?"#define SPECULARMAP_UV "+Z.specularMapUv:"",Z.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Z.specularColorMapUv:"",Z.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Z.specularIntensityMapUv:"",Z.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Z.transmissionMapUv:"",Z.thicknessMapUv?"#define THICKNESSMAP_UV "+Z.thicknessMapUv:"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexNormals?"#define HAS_NORMAL":"",Z.vertexColors?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.flatShading?"#define FLAT_SHADED":"",Z.skinning?"#define USE_SKINNING":"",Z.morphTargets?"#define USE_MORPHTARGETS":"",Z.morphNormals&&Z.flatShading===!1?"#define USE_MORPHNORMALS":"",Z.morphColors?"#define USE_MORPHCOLORS":"",Z.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Z.morphTextureStride:"",Z.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Z.morphTargetsCount:"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+H:"",Z.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(N6).join(`
`),O=[cX(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,F,Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Z.map?"#define USE_MAP":"",Z.matcap?"#define USE_MATCAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+U:"",Z.envMap?"#define "+N:"",Z.envMap?"#define "+q:"",Z.envMapPMREM?"#define ENVMAP_MAX_LOD "+Z.envMapMaxLod+".0":"",Z.envMapPMREM?"#define ENVMAP_SIZE "+Z.envMapSize+".0":"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoat?"#define USE_CLEARCOAT":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",Z.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",Z.dispersion?"#define USE_DISPERSION":"",Z.retroreflection?"#define USE_RETROREFLECTION":"",Z.iridescence?"#define USE_IRIDESCENCE":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaTest?"#define USE_ALPHATEST":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.sheen?"#define USE_SHEEN":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors||Z.instancingColor?"#define USE_COLOR":"",Z.vertexAlphas||Z.batchingColor?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.gradientMap?"#define USE_GRADIENTMAP":"",Z.flatShading?"#define FLAT_SHADED":"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+H:"",Z.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Z.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Z.toneMapping!==v9?"#define TONE_MAPPING":"",Z.toneMapping!==v9?e0.tonemapping_pars_fragment:"",Z.toneMapping!==v9?Yq("toneMapping",Z.toneMapping):"",Z.dithering?"#define DITHERING":"",Z.opaque?"#define OPAQUE":"",e0.colorspace_pars_fragment,Wq("linearToOutputTexel",Z.outputColorSpace),Hq(),Z.useDepthPacking?"#define DEPTH_PACKING "+Z.depthPacking:"",`
`].filter(N6).join(`
`);if(X=J$(X),X=lX(X,Z),X=uX(X,Z),Y=J$(Y),Y=lX(Y,Z),Y=uX(Y,Z),X=dX(X),Y=dX(Y),Z.isRawShaderMaterial!==!0)E=`#version 300 es
`,A=[G,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,O=["#define varying in",Z.glslVersion===BK?"":"layout(location = 0) out highp vec4 pc_fragColor;",Z.glslVersion===BK?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O;let k=E+A+X,z=E+O+Y,B=gX($,$.VERTEX_SHADER,k),C=gX($,$.FRAGMENT_SHADER,z);if($.attachShader(R,B),$.attachShader(R,C),Z.index0AttributeName!==void 0)$.bindAttribLocation(R,0,Z.index0AttributeName);else if(Z.hasPositionAttribute===!0)$.bindAttribLocation(R,0,"position");$.linkProgram(R);function P(f){if(J.debug.checkShaderErrors){let S=$.getProgramInfoLog(R)||"",p=$.getShaderInfoLog(B)||"",t=$.getShaderInfoLog(C)||"",T=S.trim(),c=p.trim(),n=t.trim(),x=!0,X0=!0;if($.getProgramParameter(R,$.LINK_STATUS)===!1)if(x=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError($,R,B,C);else{let u=mX($,B,"vertex"),r=mX($,C,"fragment");c0("WebGLProgram: Shader Error "+$.getError()+" - VALIDATE_STATUS "+$.getProgramParameter(R,$.VALIDATE_STATUS)+`

Material Name: `+f.name+`
Material Type: `+f.type+`

Program Info Log: `+T+`
`+u+`
`+r)}else if(T!=="")n0("WebGLProgram: Program Info Log:",T);else if(c===""||n==="")X0=!1;if(X0)f.diagnostics={runnable:x,programLog:T,vertexShader:{log:c,prefix:A},fragmentShader:{log:n,prefix:O}}}$.deleteShader(B),$.deleteShader(C),D=new G6($,R),V=Gq($,R)}let D;this.getUniforms=function(){if(D===void 0)P(this);return D};let V;this.getAttributes=function(){if(V===void 0)P(this);return V};let I=Z.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(I===!1)I=$.getProgramParameter(R,Qq);return I},this.destroy=function(){K.releaseStatesOfProgram(this),$.deleteProgram(R),this.program=void 0},this.type=Z.shaderType,this.name=Z.shaderName,this.id=Zq++,this.cacheKey=Q,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=C,this}var zq=0;class UY{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,Z){let K=this._getShaderCacheForMaterial(J);if(K.has(Q)===!1)K.add(Q),Q.usedTimes++;if(K.has(Z)===!1)K.add(Z),Z.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let Z of Q)if(Z.usedTimes--,Z.usedTimes===0)this.shaderCache.delete(Z.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,Z=Q.get(J);if(Z===void 0)Z=new Set,Q.set(J,Z);return Z}_getShaderStage(J){let Q=this.shaderCache,Z=Q.get(J);if(Z===void 0)Z=new NY(J),Q.set(J,Z);return Z}}class NY{constructor(J){this.id=zq++,this.code=J,this.usedTimes=0}}function Aq(J){return J===v8||J===WQ||J===XQ}function Cq(J,Q,Z,K,$,W){let X=new r7,Y=new UY,H=new Set,U=[],N=new Map,q=K.logarithmicDepthBuffer,G={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function F(D){if(H.add(D),D===0)return"uv";return`uv${D}`}function R(D,V,I,f,S,p){let t=f.fog,T=S.geometry,c=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?f.environment:null,n=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,x=Q.get(D.envMap||c,n),X0=G[D.type],u=K.precision;if(D.precision!==null){if(u=K.getMaxPrecision(D.precision),u!==D.precision)n0("WebGLProgram.getParameters:",D.precision,"not supported, using",u,"instead.")}let r=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,K0=r!==void 0?r.length:0,A0=0;if(T.morphAttributes.position!==void 0)A0=1;if(T.morphAttributes.normal!==void 0)A0=2;if(T.morphAttributes.color!==void 0)A0=3;let i,$0,_0,b0;if(X0){let B0=x9[X0];i=B0.vertexShader,$0=B0.fragmentShader}else{i=D.vertexShader,$0=D.fragmentShader;let B0=Y.getVertexShaderStage(D),LJ=Y.getFragmentShaderStage(D);Y.update(D,B0,LJ),_0=B0.id,b0=LJ.id}let x0=J.getRenderTarget(),k0=J.state.buffers.depth.getReversed(),YJ=S.isInstancedMesh===!0,t0=S.isBatchedMesh===!0,d0=!!D.map,XJ=!!D.matcap,e=!!x,Y0=e&&x.isPMREMTexture===!0,N0=!!D.aoMap,C0=!!D.lightMap,z0=!!D.bumpMap&&D.wireframe===!1,m0=!!D.normalMap,f0=!!D.displacementMap,JJ=!!D.emissiveMap,QJ=!!D.metalnessMap,EJ=!!D.roughnessMap,y=D.anisotropy>0,xJ=D.clearcoat>0,a0=D.diffuseRoughness>0,yJ=D.dispersion>0,D0=D.retroreflectivity>0,RJ=D.iridescence>0,u0=D.sheen>0,s0=D.transmission>0,gJ=y&&!!D.anisotropyMap,_=xJ&&!!D.clearcoatMap,M=xJ&&!!D.clearcoatNormalMap,h=xJ&&!!D.clearcoatRoughnessMap,Q0=a0&&!!D.diffuseRoughnessMap,J0=RJ&&!!D.iridescenceMap,U0=RJ&&!!D.iridescenceThicknessMap,E0=u0&&!!D.sheenColorMap,l=u0&&!!D.sheenRoughnessMap,o=!!D.specularMap,G0=!!D.specularColorMap,w=!!D.specularIntensityMap,s=s0&&!!D.transmissionMap,d=s0&&!!D.thicknessMap,W0=!!D.gradientMap,H0=!!D.alphaMap,O0=D.alphaTest>0,h0=!!D.alphaHash,j0=!!D.extensions,V0=v9;if(D.toneMapped){if(x0===null||x0.isXRRenderTarget===!0)V0=J.toneMapping}let g0=Y0?x.isCompressedCubeTexture?x.image[0].mipmaps:x.mipmaps:null,r0={shaderID:X0,shaderType:D.type,shaderName:D.name,vertexShader:i,fragmentShader:$0,defines:D.defines,customVertexShaderID:_0,customFragmentShaderID:b0,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:u,batching:t0,batchingColor:t0&&S._colorsTexture!==null,instancing:YJ,instancingColor:YJ&&S.instanceColor!==null,instancingMorph:YJ&&S.morphTexture!==null,outputColorSpace:x0===null?J.outputColorSpace:x0.isXRRenderTarget===!0?x0.texture.colorSpace:WJ.workingColorSpace,alphaToCoverage:!!D.alphaToCoverage,map:d0,matcap:XJ,envMap:e,envMapMode:e&&x.mapping,envMapPMREM:Y0,envMapMaxLod:Y0?g0.length-1:null,envMapSize:Y0?g0[0].width:null,aoMap:N0,lightMap:C0,bumpMap:z0,normalMap:m0,displacementMap:f0,emissiveMap:JJ,normalMapObjectSpace:m0&&D.normalMapType===KX,normalMapTangentSpace:m0&&D.normalMapType===FK,packedNormalMap:m0&&D.normalMapType===FK&&Aq(D.normalMap.format),metalnessMap:QJ,roughnessMap:EJ,anisotropy:y,anisotropyMap:gJ,clearcoat:xJ,clearcoatMap:_,clearcoatNormalMap:M,clearcoatRoughnessMap:h,diffuseRoughness:a0,diffuseRoughnessMap:Q0,dispersion:yJ,retroreflection:D0,iridescence:RJ,iridescenceMap:J0,iridescenceThicknessMap:U0,sheen:u0,sheenColorMap:E0,sheenRoughnessMap:l,specularMap:o,specularColorMap:G0,specularIntensityMap:w,transmission:s0,transmissionMap:s,thicknessMap:d,gradientMap:W0,opaque:D.transparent===!1&&D.blending===n7&&D.alphaToCoverage===!1,alphaMap:H0,alphaTest:O0,alphaHash:h0,combine:D.combine,mapUv:d0&&F(D.map.channel),aoMapUv:N0&&F(D.aoMap.channel),lightMapUv:C0&&F(D.lightMap.channel),bumpMapUv:z0&&F(D.bumpMap.channel),normalMapUv:m0&&F(D.normalMap.channel),displacementMapUv:f0&&F(D.displacementMap.channel),emissiveMapUv:JJ&&F(D.emissiveMap.channel),metalnessMapUv:QJ&&F(D.metalnessMap.channel),roughnessMapUv:EJ&&F(D.roughnessMap.channel),anisotropyMapUv:gJ&&F(D.anisotropyMap.channel),clearcoatMapUv:_&&F(D.clearcoatMap.channel),clearcoatNormalMapUv:M&&F(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:h&&F(D.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Q0&&F(D.diffuseRoughnessMap.channel),iridescenceMapUv:J0&&F(D.iridescenceMap.channel),iridescenceThicknessMapUv:U0&&F(D.iridescenceThicknessMap.channel),sheenColorMapUv:E0&&F(D.sheenColorMap.channel),sheenRoughnessMapUv:l&&F(D.sheenRoughnessMap.channel),specularMapUv:o&&F(D.specularMap.channel),specularColorMapUv:G0&&F(D.specularColorMap.channel),specularIntensityMapUv:w&&F(D.specularIntensityMap.channel),transmissionMapUv:s&&F(D.transmissionMap.channel),thicknessMapUv:d&&F(D.thicknessMap.channel),alphaMapUv:H0&&F(D.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(m0||y),vertexNormals:!!T.attributes.normal,vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!T.attributes.uv&&(d0||H0),fog:!!t,useFog:D.fog===!0,fogExp2:!!t&&t.isFogExp2,flatShading:D.wireframe===!1&&(D.flatShading===!0||T.attributes.normal===void 0&&m0===!1&&(D.isMeshLambertMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isMeshPhysicalMaterial)),sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:q,reversedDepthBuffer:k0,skinning:S.isSkinnedMesh===!0,hasPositionAttribute:T.attributes.position!==void 0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:K0,morphTextureStride:A0,numSunLights:V.sun.length,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numSunLightShadows:V.sunShadowMap.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numLightProbeGrids:p.filter((B0)=>B0.texture!==null).length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:D.dithering,shadowMapEnabled:J.shadowMap.enabled&&I.length>0,shadowMapType:J.shadowMap.type,toneMapping:V0,decodeVideoTexture:d0&&D.map.isVideoTexture===!0&&WJ.getTransfer(D.map.colorSpace)===AJ,decodeVideoTextureEmissive:JJ&&D.emissiveMap.isVideoTexture===!0&&WJ.getTransfer(D.emissiveMap.colorSpace)===AJ,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===aJ,flipSided:D.side===U9,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:j0&&D.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(j0&&D.extensions.multiDraw===!0||t0)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return r0.vertexUv1s=H.has(1),r0.vertexUv2s=H.has(2),r0.vertexUv3s=H.has(3),H.clear(),r0}function A(D){let V=[];if(D.shaderID)V.push(D.shaderID);else V.push(D.customVertexShaderID),V.push(D.customFragmentShaderID);if(D.defines!==void 0)for(let I in D.defines)V.push(I),V.push(D.defines[I]);if(D.isRawShaderMaterial===!1)O(V,D),E(V,D),V.push(J.outputColorSpace);return V.push(D.customProgramCacheKey),V.join()}function O(D,V){D.push(V.precision),D.push(V.outputColorSpace),D.push(V.envMapMode),D.push(V.envMapPMREM),D.push(V.envMapMaxLod),D.push(V.envMapSize),D.push(V.mapUv),D.push(V.alphaMapUv),D.push(V.lightMapUv),D.push(V.aoMapUv),D.push(V.bumpMapUv),D.push(V.normalMapUv),D.push(V.displacementMapUv),D.push(V.emissiveMapUv),D.push(V.metalnessMapUv),D.push(V.roughnessMapUv),D.push(V.anisotropyMapUv),D.push(V.clearcoatMapUv),D.push(V.clearcoatNormalMapUv),D.push(V.clearcoatRoughnessMapUv),D.push(V.diffuseRoughnessMapUv),D.push(V.iridescenceMapUv),D.push(V.iridescenceThicknessMapUv),D.push(V.sheenColorMapUv),D.push(V.sheenRoughnessMapUv),D.push(V.specularMapUv),D.push(V.specularColorMapUv),D.push(V.specularIntensityMapUv),D.push(V.transmissionMapUv),D.push(V.thicknessMapUv),D.push(V.combine),D.push(V.fogExp2),D.push(V.sizeAttenuation),D.push(V.morphTargetsCount),D.push(V.numSunLights),D.push(V.numDirLights),D.push(V.numPointLights),D.push(V.numSpotLights),D.push(V.numSpotLightMaps),D.push(V.numHemiLights),D.push(V.numRectAreaLights),D.push(V.numSunLightShadows),D.push(V.numDirLightShadows),D.push(V.numPointLightShadows),D.push(V.numSpotLightShadows),D.push(V.numSpotLightShadowsWithMaps),D.push(V.numLightProbes),D.push(V.numLightProbeGrids),D.push(V.shadowMapType),D.push(V.toneMapping),D.push(V.numClippingPlanes),D.push(V.numClipIntersection),D.push(V.depthPacking)}function E(D,V){if(X.disableAll(),V.instancing)X.enable(0);if(V.instancingColor)X.enable(1);if(V.instancingMorph)X.enable(2);if(V.matcap)X.enable(3);if(V.envMap)X.enable(4);if(V.normalMapObjectSpace)X.enable(5);if(V.normalMapTangentSpace)X.enable(6);if(V.clearcoat)X.enable(7);if(V.iridescence)X.enable(8);if(V.alphaTest)X.enable(9);if(V.vertexColors)X.enable(10);if(V.vertexAlphas)X.enable(11);if(V.vertexUv1s)X.enable(12);if(V.vertexUv2s)X.enable(13);if(V.vertexUv3s)X.enable(14);if(V.vertexTangents)X.enable(15);if(V.anisotropy)X.enable(16);if(V.alphaHash)X.enable(17);if(V.batching)X.enable(18);if(V.dispersion)X.enable(19);if(V.retroreflection)X.enable(24);if(V.diffuseRoughness)X.enable(25);if(V.batchingColor)X.enable(20);if(V.gradientMap)X.enable(21);if(V.packedNormalMap)X.enable(22);if(V.vertexNormals)X.enable(23);if(D.push(X.mask),X.disableAll(),V.fog)X.enable(0);if(V.useFog)X.enable(1);if(V.flatShading)X.enable(2);if(V.logarithmicDepthBuffer)X.enable(3);if(V.reversedDepthBuffer)X.enable(4);if(V.skinning)X.enable(5);if(V.morphTargets)X.enable(6);if(V.morphNormals)X.enable(7);if(V.morphColors)X.enable(8);if(V.premultipliedAlpha)X.enable(9);if(V.shadowMapEnabled)X.enable(10);if(V.doubleSided)X.enable(11);if(V.flipSided)X.enable(12);if(V.useDepthPacking)X.enable(13);if(V.dithering)X.enable(14);if(V.transmission)X.enable(15);if(V.sheen)X.enable(16);if(V.opaque)X.enable(17);if(V.pointsUvs)X.enable(18);if(V.decodeVideoTexture)X.enable(19);if(V.decodeVideoTextureEmissive)X.enable(20);if(V.alphaToCoverage)X.enable(21);if(V.numLightProbeGrids>0)X.enable(22);if(V.hasPositionAttribute)X.enable(23);D.push(X.mask)}function k(D){let V=G[D.type],I;if(V){let f=x9[V];I=zX.clone(f.uniforms)}else I=D.uniforms;return I}function z(D,V){let I=N.get(V);if(I!==void 0)++I.usedTimes;else I=new kq(J,V,D,$),U.push(I),N.set(V,I);return I}function B(D){if(--D.usedTimes===0){let V=U.indexOf(D);U[V]=U[U.length-1],U.pop(),N.delete(D.cacheKey),D.destroy()}}function C(D){Y.remove(D)}function P(){Y.dispose()}return{getParameters:R,getProgramCacheKey:A,getUniforms:k,acquireProgram:z,releaseProgram:B,releaseShaderCache:C,programs:U,dispose:P}}function _q(){let J=new WeakMap;function Q(X){return J.has(X)}function Z(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function K(X){J.delete(X)}function $(X,Y,H){J.get(X)[Y]=H}function W(){J=new WeakMap}return{has:Q,get:Z,remove:K,update:$,dispose:W}}function Pq(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function nX(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function sX(){let J=[],Q=0,Z=[],K=[],$=[];function W(){Q=0,Z.length=0,K.length=0,$.length=0}function X(G){let F=0;if(G.isInstancedMesh)F+=2;if(G.isSkinnedMesh)F+=1;return F}function Y(G,F,R,A,O,E){let k=J[Q];if(k===void 0)k={id:G.id,object:G,geometry:F,material:R,materialVariant:X(G),groupOrder:A,renderOrder:G.renderOrder,z:O,group:E},J[Q]=k;else k.id=G.id,k.object=G,k.geometry=F,k.material=R,k.materialVariant=X(G),k.groupOrder=A,k.renderOrder=G.renderOrder,k.z=O,k.group=E;return Q++,k}function H(G,F,R,A,O,E,k){if(k.reversedDepth===!0)O=-O;let z=Y(G,F,R,A,O,E);if(R.transmission>0)K.push(z);else if(R.transparent===!0)$.push(z);else Z.push(z)}function U(G,F,R,A,O,E){let k=Y(G,F,R,A,O,E);if(R.transmission>0)K.unshift(k);else if(R.transparent===!0)$.unshift(k);else Z.unshift(k)}function N(G,F){if(Z.length>1)Z.sort(G||Pq);if(K.length>1)K.sort(F||nX);if($.length>1)$.sort(F||nX)}function q(){for(let G=Q,F=J.length;G<F;G++){let R=J[G];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:Z,transmissive:K,transparent:$,init:W,push:H,unshift:U,finish:q,sort:N}}function Iq(){let J=new WeakMap;function Q(K,$){let W=J.get(K),X;if(W===void 0)X=new sX,J.set(K,[X]);else if($>=W.length)X=new sX,W.push(X);else X=W[$];return X}function Z(){J=new WeakMap}return{get:Q,dispose:Z}}function Tq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"SunLight":case"DirectionalLight":Z={direction:new v,color:new y0};break;case"SpotLight":Z={position:new v,direction:new v,color:new y0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Z={position:new v,color:new y0,distance:0,decay:0};break;case"HemisphereLight":Z={direction:new v,skyColor:new y0,groundColor:new y0};break;case"RectAreaLight":Z={color:new y0,position:new v,halfWidth:new v,halfHeight:new v};break}return J[Q.id]=Z,Z}}}function wq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"SunLight":case"DirectionalLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z0};break;case"SpotLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z0};break;case"PointLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=Z,Z}}}var Sq=0;function jq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function vq(J){let Q=new Tq,Z=wq(),K={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)K.probe.push(new v);let $=new v,W=new UJ,X=new UJ;function Y(U){let N=0,q=0,G=0;for(let p=0;p<9;p++)K.probe[p].set(0,0,0);let F=0,R=0,A=0,O=0,E=0,k=0,z=0,B=0,C=0,P=0,D=0,V=0,I=0,f=0;U.sort(jq);for(let p=0,t=U.length;p<t;p++){let T=U[p],c=T.color,n=T.intensity,x=T.distance,X0=null;if(T.shadow&&T.shadow.map)if(T.shadow.map.texture.format===v8)X0=T.shadow.map.texture;else X0=T.shadow.map.depthTexture||T.shadow.map.texture;if(T.isAmbientLight)N+=c.r*n,q+=c.g*n,G+=c.b*n;else if(T.isLightProbe){for(let u=0;u<9;u++)K.probe[u].addScaledVector(T.sh.coefficients[u],n);f++}else if(T.isSunLight){let u=Q.get(T);if(u.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let r=T.shadow,K0=Z.get(T);K0.shadowIntensity=r.intensity,K0.shadowBias=r.bias,K0.shadowNormalBias=r.normalBias,K0.shadowRadius=r.radius,K0.shadowMapSize.copy(r.mapSize).multiply(r.getFrameExtents()),K.sunShadow[R]=K0,K.sunShadowMap[R]=X0;let A0=r.getViewportCount();for(let i=0;i<A0;i++)K.sunShadowMatrix[A+i]=r.getMatrix(i),K.sunShadowCascade[A+i]=r._cascadeData[i];A+=A0,R++}K.sun[F]=u,F++}else if(T.isDirectionalLight){let u=Q.get(T);if(u.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let r=T.shadow,K0=Z.get(T);K0.shadowIntensity=r.intensity,K0.shadowBias=r.bias,K0.shadowNormalBias=r.normalBias,K0.shadowRadius=r.radius,K0.shadowMapSize=r.mapSize,K.directionalShadow[O]=K0,K.directionalShadowMap[O]=X0,K.directionalShadowMatrix[O]=T.shadow.matrix,C++}K.directional[O]=u,O++}else if(T.isSpotLight){let u=Q.get(T);u.position.setFromMatrixPosition(T.matrixWorld),u.color.copy(c).multiplyScalar(n),u.distance=x,u.coneCos=Math.cos(T.angle),u.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),u.decay=T.decay,K.spot[k]=u;let r=T.shadow;if(T.map){if(K.spotLightMap[V]=T.map,V++,r.updateMatrices(T),T.castShadow)I++}if(K.spotLightMatrix[k]=r.matrix,T.castShadow){let K0=Z.get(T);K0.shadowIntensity=r.intensity,K0.shadowBias=r.bias,K0.shadowNormalBias=r.normalBias,K0.shadowRadius=r.radius,K0.shadowMapSize=r.mapSize,K.spotShadow[k]=K0,K.spotShadowMap[k]=X0,D++}k++}else if(T.isRectAreaLight){let u=Q.get(T);u.color.copy(c).multiplyScalar(n),u.halfWidth.set(T.width*0.5,0,0),u.halfHeight.set(0,T.height*0.5,0),K.rectArea[z]=u,z++}else if(T.isPointLight){let u=Q.get(T);if(u.color.copy(T.color).multiplyScalar(T.intensity),u.distance=T.distance,u.decay=T.decay,T.castShadow){let r=T.shadow,K0=Z.get(T);K0.shadowIntensity=r.intensity,K0.shadowBias=r.bias,K0.shadowNormalBias=r.normalBias,K0.shadowRadius=r.radius,K0.shadowMapSize=r.mapSize,K0.shadowCameraNear=r.camera.near,K0.shadowCameraFar=r.camera.far,K.pointShadow[E]=K0,K.pointShadowMap[E]=X0,K.pointShadowMatrix[E]=T.shadow.matrix,P++}K.point[E]=u,E++}else if(T.isHemisphereLight){let u=Q.get(T);u.skyColor.copy(T.color).multiplyScalar(n),u.groundColor.copy(T.groundColor).multiplyScalar(n),K.hemi[B]=u,B++}}if(z>0)if(J.has("OES_texture_float_linear")===!0)K.rectAreaLTC1=M0.LTC_FLOAT_1,K.rectAreaLTC2=M0.LTC_FLOAT_2;else K.rectAreaLTC1=M0.LTC_HALF_1,K.rectAreaLTC2=M0.LTC_HALF_2;K.ambient[0]=N,K.ambient[1]=q,K.ambient[2]=G;let S=K.hash;if(S.sunLength!==F||S.directionalLength!==O||S.pointLength!==E||S.spotLength!==k||S.rectAreaLength!==z||S.hemiLength!==B||S.numSunShadows!==R||S.numDirectionalShadows!==C||S.numPointShadows!==P||S.numSpotShadows!==D||S.numSpotMaps!==V||S.numLightProbes!==f)K.sun.length=F,K.directional.length=O,K.spot.length=k,K.rectArea.length=z,K.point.length=E,K.hemi.length=B,K.sunShadow.length=R,K.sunShadowMap.length=R,K.sunShadowMatrix.length=A,K.sunShadowCascade.length=A,K.directionalShadow.length=C,K.directionalShadowMap.length=C,K.directionalShadowMatrix.length=C,K.pointShadow.length=P,K.pointShadowMap.length=P,K.pointShadowMatrix.length=P,K.spotShadow.length=D,K.spotShadowMap.length=D,K.spotLightMatrix.length=D+V-I,K.spotLightMap.length=V,K.numSpotLightShadowsWithMaps=I,K.numLightProbes=f,S.sunLength=F,S.directionalLength=O,S.pointLength=E,S.spotLength=k,S.rectAreaLength=z,S.hemiLength=B,S.numSunShadows=R,S.numDirectionalShadows=C,S.numPointShadows=P,S.numSpotShadows=D,S.numSpotMaps=V,S.numLightProbes=f,K.version=Sq++}function H(U,N){let q=0,G=0,F=0,R=0,A=0,O=0,E=N.matrixWorldInverse;for(let k=0,z=U.length;k<z;k++){let B=U[k];if(B.isSunLight){let C=K.sun[q];C.direction.setFromMatrixPosition(B.matrixWorld),C.direction.transformDirection(E),q++}else if(B.isDirectionalLight){let C=K.directional[G];C.direction.setFromMatrixPosition(B.matrixWorld),$.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub($),C.direction.transformDirection(E),G++}else if(B.isSpotLight){let C=K.spot[R];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(E),C.direction.setFromMatrixPosition(B.matrixWorld),$.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub($),C.direction.transformDirection(E),R++}else if(B.isRectAreaLight){let C=K.rectArea[A];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(E),X.identity(),W.copy(B.matrixWorld),W.premultiply(E),X.extractRotation(W),C.halfWidth.set(B.width*0.5,0,0),C.halfHeight.set(0,B.height*0.5,0),C.halfWidth.applyMatrix4(X),C.halfHeight.applyMatrix4(X),A++}else if(B.isPointLight){let C=K.point[F];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(E),F++}else if(B.isHemisphereLight){let C=K.hemi[O];C.direction.setFromMatrixPosition(B.matrixWorld),C.direction.transformDirection(E),O++}}}return{setup:Y,setupView:H,state:K}}function iX(J){let Q=new vq(J),Z=[],K=[],$=[];function W(q){N.camera=q,Z.length=0,K.length=0,$.length=0}function X(q){if(q.isLightProbeGrid)$.push(q);else Z.push(q)}function Y(q){K.push(q)}function H(){Q.setup(Z),$.sort((q,G)=>q.priority-G.priority||q.id-G.id)}function U(q){Q.setupView(Z,q)}let N={lightsArray:Z,shadowsArray:K,lightProbeGridArray:$,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:N,setupLights:H,setupLightsView:U,pushLight:X,pushShadow:Y}}function yq(J){let Q=new WeakMap;function Z($,W=0){let X=Q.get($),Y;if(X===void 0)Y=new iX(J),Q.set($,[Y]);else if(W>=X.length)Y=new iX(J),X.push(Y);else Y=X[W];return Y}function K(){Q=new WeakMap}return{get:Z,dispose:K}}var fq=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hq=`uniform sampler2D shadow_pass;
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
}`,bq=[new v(1,0,0),new v(-1,0,0),new v(0,1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1)],xq=[new v(0,-1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1),new v(0,-1,0),new v(0,-1,0)],oX=new UJ,U6=new v,eK=new v;function gq(J,Q,Z){let K=new T8,$=new Z0,W=new Z0,X=new jJ,Y=new fK,H=new hK,U={},N=Z.maxTextureSize,q={[R7]:U9,[U9]:R7,[aJ]:aJ},G=new J8({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z0},radius:{value:4}},vertexShader:fq,fragmentShader:hq}),F=G.clone();F.defines.HORIZONTAL_PASS=1;let R=new Z9;R.setAttribute("position",new I9(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let A=new CJ(R,G),O=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=c7;let E=this.type;this.render=function(P,D,V){if(O.enabled===!1)return;if(O.autoUpdate===!1&&O.needsUpdate===!1)return;if(P.length===0)return;if(this.type===a6)n0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=c7;let I=J.getRenderTarget(),f=J.getActiveCubeFace(),S=J.getActiveMipmapLevel(),p=J.state;if(p.setBlending(S8),p.buffers.depth.getReversed()===!0)p.buffers.color.setClear(0,0,0,0);else p.buffers.color.setClear(1,1,1,1);p.buffers.depth.setTest(!0),p.setScissorTest(!1);let t=E!==this.type;if(t)D.traverse(function(T){if(T.material)if(Array.isArray(T.material))T.material.forEach((c)=>c.needsUpdate=!0);else T.material.needsUpdate=!0});for(let T=0,c=P.length;T<c;T++){let n=P[T],x=n.shadow;if(x===void 0){n0("WebGLShadowMap:",n,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;$.copy(x.mapSize);let X0=x.getFrameExtents();if($.multiply(X0),W.copy(x.mapSize),$.x>N||$.y>N){if($.x>N)W.x=Math.floor(N/X0.x),$.x=W.x*X0.x,x.mapSize.x=W.x;if($.y>N)W.y=Math.floor(N/X0.y),$.y=W.y*X0.y,x.mapSize.y=W.y}let u=J.state.buffers.depth.getReversed();if(x.camera._reversedDepth=u,x.map===null||t===!0){if(x.map!==null){if(x.map.depthTexture!==null)x.map.depthTexture.dispose(),x.map.depthTexture=null;x.map.dispose()}if(this.type===D7){if(n.isPointLight){n0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}x.map=new L9($.x,$.y,{format:v8,type:y9,minFilter:V9,magFilter:V9,generateMipmaps:!1}),x.map.texture.name=n.name+".shadowMap",x.map.depthTexture=new D8($.x,$.y,o9),x.map.depthTexture.name=n.name+".shadowMapDepth",x.map.depthTexture.format=B7,x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=U8,x.map.depthTexture.magFilter=U8}else{if(n.isPointLight)x.map=new vQ($.x),x.map.depthTexture=new RQ($.x,G8);else x.map=new L9($.x,$.y),x.map.depthTexture=new D8($.x,$.y,G8);if(x.map.depthTexture.name=n.name+".shadowMap",x.map.depthTexture.format=B7,this.type===c7)x.map.depthTexture.compareFunction=u?MK:RK,x.map.depthTexture.minFilter=V9,x.map.depthTexture.magFilter=V9;else x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=U8,x.map.depthTexture.magFilter=U8}x.camera.updateProjectionMatrix()}if(x.map.isWebGLCubeRenderTarget!==!0&&(x.map.width!==$.x||x.map.height!==$.y))x.map.setSize($.x,$.y);let r=x.map.isWebGLCubeRenderTarget?6:x.getViewportCount();if(n.isPointLight!==!0)x.updateMatrices(n,V);let K0=(x.camera.layers.mask&4294967294)!==0?x.camera.layers:V.layers;for(let A0=0;A0<r;A0++){let i=x.getCamera(A0);if(n.isPointLight){let{camera:$0,matrix:_0}=x,b0=n.distance||$0.far;if(b0!==$0.far)$0.far=b0,$0.updateProjectionMatrix();U6.setFromMatrixPosition(n.matrixWorld),$0.position.copy(U6),eK.copy($0.position),eK.add(bq[A0]),$0.up.copy(xq[A0]),$0.lookAt(eK),$0.updateMatrixWorld(),_0.makeTranslation(-U6.x,-U6.y,-U6.z),oX.multiplyMatrices($0.projectionMatrix,$0.matrixWorldInverse),x._frustum.setFromProjectionMatrix(oX,$0.coordinateSystem,$0.reversedDepth)}if(x.map.isWebGLCubeRenderTarget)J.setRenderTarget(x.map,A0),J.clear();else{if(A0===0)J.setRenderTarget(x.map),J.clear();let $0=x.getViewport(A0);X.set(W.x*$0.x,W.y*$0.y,W.x*$0.z,W.y*$0.w),p.viewport(X)}K=x.getFrustum(A0),B(D,V,i,n,K0,this.type)}if(x.isPointLightShadow!==!0&&this.type===D7)k(x,V);x.needsUpdate=!1}E=this.type,O.needsUpdate=!1,J.setRenderTarget(I,f,S)};function k(P,D){let V=Q.update(A);if(G.defines.VSM_SAMPLES!==P.blurSamples)G.defines.VSM_SAMPLES=P.blurSamples,F.defines.VSM_SAMPLES=P.blurSamples,G.needsUpdate=!0,F.needsUpdate=!0;if(P.mapPass===null)P.mapPass=new L9($.x,$.y,{format:v8,type:y9});else if(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)P.mapPass.setSize(P.map.width,P.map.height);G.uniforms.shadow_pass.value=P.map.depthTexture,G.uniforms.resolution.value.set(P.map.width,P.map.height),G.uniforms.radius.value=P.radius,J.setRenderTarget(P.mapPass),J.clear(),J.renderBufferDirect(D,null,V,G,A,null),F.uniforms.shadow_pass.value=P.mapPass.texture,F.uniforms.resolution.value.set(P.map.width,P.map.height),F.uniforms.radius.value=P.radius,J.setRenderTarget(P.map),J.clear(),J.renderBufferDirect(D,null,V,F,A,null)}function z(P,D,V,I){let f=null,S=V.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(S!==void 0)f=S;else if(f=V.isPointLight===!0?H:Y,J.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let p=f.uuid,t=D.uuid,T=U[p];if(T===void 0)T={},U[p]=T;let c=T[t];if(c===void 0)c=f.clone(),T[t]=c,D.addEventListener("dispose",C);f=c}if(f.visible=D.visible,f.wireframe=D.wireframe,I===D7)f.side=D.shadowSide!==null?D.shadowSide:D.side;else f.side=D.shadowSide!==null?D.shadowSide:q[D.side];if(f.alphaMap=D.alphaMap,f.alphaTest=D.alphaToCoverage===!0?0.5:D.alphaTest,f.map=D.map,f.clipShadows=D.clipShadows,f.clippingPlanes=D.clippingPlanes,f.clipIntersection=D.clipIntersection,f.displacementMap=D.displacementMap,f.displacementScale=D.displacementScale,f.displacementBias=D.displacementBias,f.wireframeLinewidth=D.wireframeLinewidth,f.linewidth=D.linewidth,V.isPointLight===!0&&f.isMeshDistanceMaterial===!0){let p=J.properties.get(f);p.light=V}return f}function B(P,D,V,I,f,S){if(P.visible===!1)return;if(P.layers.test(f)&&(P.isMesh||P.isLine||P.isPoints)){if((P.castShadow||P.receiveShadow&&S===D7)&&(!P.frustumCulled||P.intersectsFrustum(K))){P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld);let T=Q.update(P),c=P.material;if(Array.isArray(c)){let n=T.groups;for(let x=0,X0=n.length;x<X0;x++){let u=n[x],r=c[u.materialIndex];if(r&&r.visible){let K0=z(P,r,I,S);P.onBeforeShadow(J,P,D,V,T,K0,u),J.renderBufferDirect(V,null,T,K0,P,u),P.onAfterShadow(J,P,D,V,T,K0,u)}}}else if(c.visible){let n=z(P,c,I,S);P.onBeforeShadow(J,P,D,V,T,n,null),J.renderBufferDirect(V,null,T,n,P,null),P.onAfterShadow(J,P,D,V,T,n,null)}}}let t=P.children;for(let T=0,c=t.length;T<c;T++)B(t[T],D,V,I,f,S)}function C(P){P.target.removeEventListener("dispose",C);for(let V in U){let I=U[V],f=P.target.uuid;if(f in I)I[f].dispose(),delete I[f]}}}function pq(J,Q){function Z(){let w=!1,s=new jJ,d=null,W0=new jJ(0,0,0,0);return{setMask:function(H0){if(d!==H0&&!w)J.colorMask(H0,H0,H0,H0),d=H0},setLocked:function(H0){w=H0},setClear:function(H0,O0,h0,j0,V0){if(V0===!0)H0*=j0,O0*=j0,h0*=j0;if(s.set(H0,O0,h0,j0),W0.equals(s)===!1)J.clearColor(H0,O0,h0,j0),W0.copy(s)},reset:function(){w=!1,d=null,W0.set(-1,0,0,0)}}}function K(){let w=!1,s=!1,d=null,W0=null,H0=null;return{setReversed:function(O0){if(s!==O0){let h0=Q.get("EXT_clip_control");if(O0)h0.clipControlEXT(h0.LOWER_LEFT_EXT,h0.ZERO_TO_ONE_EXT);else h0.clipControlEXT(h0.LOWER_LEFT_EXT,h0.NEGATIVE_ONE_TO_ONE_EXT);s=O0;let j0=H0;H0=null,this.setClear(j0)}},getReversed:function(){return s},setTest:function(O0){if(O0)k0(J.DEPTH_TEST);else YJ(J.DEPTH_TEST)},setMask:function(O0){if(d!==O0&&!w)J.depthMask(O0),d=O0},setFunc:function(O0){if(s)O0=qX[O0];if(W0!==O0){switch(O0){case bW:J.depthFunc(J.NEVER);break;case xW:J.depthFunc(J.ALWAYS);break;case gW:J.depthFunc(J.LESS);break;case AZ:J.depthFunc(J.LEQUAL);break;case pW:J.depthFunc(J.EQUAL);break;case mW:J.depthFunc(J.GEQUAL);break;case lW:J.depthFunc(J.GREATER);break;case uW:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}W0=O0}},setLocked:function(O0){w=O0},setClear:function(O0){if(H0!==O0){if(H0=O0,s)O0=1-O0;J.clearDepth(O0)}},reset:function(){w=!1,d=null,W0=null,H0=null,s=!1}}}function $(){let w=!1,s=null,d=null,W0=null,H0=null,O0=null,h0=null,j0=null,V0=null;return{setTest:function(g0){if(!w)if(g0)k0(J.STENCIL_TEST);else YJ(J.STENCIL_TEST)},setMask:function(g0){if(s!==g0&&!w)J.stencilMask(g0),s=g0},setFunc:function(g0,r0,B0){if(d!==g0||W0!==r0||H0!==B0)J.stencilFunc(g0,r0,B0),d=g0,W0=r0,H0=B0},setOp:function(g0,r0,B0){if(O0!==g0||h0!==r0||j0!==B0)J.stencilOp(g0,r0,B0),O0=g0,h0=r0,j0=B0},setLocked:function(g0){w=g0},setClear:function(g0){if(V0!==g0)J.clearStencil(g0),V0=g0},reset:function(){w=!1,s=null,d=null,W0=null,H0=null,O0=null,h0=null,j0=null,V0=null}}}let W=new Z,X=new K,Y=new $,H={},U=new WeakMap,N={},q={},G={},F=new WeakMap,R=[],A=null,O=!1,E=null,k=null,z=null,B=null,C=null,P=null,D=null,V=new y0(0,0,0),I=0,f=!1,S=null,p=null,t=null,T=null,c=null,n=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),x=!1,X0=0,u=J.getParameter(J.VERSION);if(u.indexOf("WebGL")!==-1)X0=parseFloat(/^WebGL (\d)/.exec(u)[1]),x=X0>=1;else if(u.indexOf("OpenGL ES")!==-1)X0=parseFloat(/^OpenGL ES (\d)/.exec(u)[1]),x=X0>=2;let r=null,K0={},A0=J.getParameter(J.SCISSOR_BOX),i=J.getParameter(J.VIEWPORT),$0=new jJ().fromArray(A0),_0=new jJ().fromArray(i);function b0(w,s,d,W0){let H0=new Uint8Array(4),O0=J.createTexture();J.bindTexture(w,O0),J.texParameteri(w,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(w,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let h0=0;h0<d;h0++)if(w===J.TEXTURE_3D||w===J.TEXTURE_2D_ARRAY)J.texImage3D(s,0,J.RGBA,1,1,W0,0,J.RGBA,J.UNSIGNED_BYTE,H0);else J.texImage2D(s+h0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,H0);return O0}let x0={};x0[J.TEXTURE_2D]=b0(J.TEXTURE_2D,J.TEXTURE_2D,1),x0[J.TEXTURE_CUBE_MAP]=b0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),x0[J.TEXTURE_2D_ARRAY]=b0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),x0[J.TEXTURE_3D]=b0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),k0(J.DEPTH_TEST),X.setFunc(AZ),z0(!1),m0(BZ),k0(J.CULL_FACE),N0(S8);function k0(w){if(N[w]!==!0)J.enable(w),N[w]=!0}function YJ(w){if(N[w]!==!1)J.disable(w),N[w]=!1}function t0(w,s){if(G[w]!==s){if(J.bindFramebuffer(w,s),G[w]=s,w===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=s;if(w===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=s;return!0}return!1}function d0(w,s){let d=R,W0=!1;if(w){if(d=F.get(s),d===void 0)d=[],F.set(s,d);let H0=w.textures;if(d.length!==H0.length||d[0]!==J.COLOR_ATTACHMENT0){for(let O0=0,h0=H0.length;O0<h0;O0++)d[O0]=J.COLOR_ATTACHMENT0+O0;d.length=H0.length,W0=!0}}else if(d[0]!==J.BACK)d[0]=J.BACK,W0=!0;if(W0)J.drawBuffers(d)}function XJ(w){if(A!==w)return J.useProgram(w),A=w,!0;return!1}let e={[M7]:J.FUNC_ADD,[MW]:J.FUNC_SUBTRACT,[VW]:J.FUNC_REVERSE_SUBTRACT};e[BW]=J.MIN,e[LW]=J.MAX;let Y0={[kW]:J.ZERO,[zW]:J.ONE,[AW]:J.SRC_COLOR,[_W]:J.SRC_ALPHA,[jW]:J.SRC_ALPHA_SATURATE,[wW]:J.DST_COLOR,[IW]:J.DST_ALPHA,[CW]:J.ONE_MINUS_SRC_COLOR,[PW]:J.ONE_MINUS_SRC_ALPHA,[SW]:J.ONE_MINUS_DST_COLOR,[TW]:J.ONE_MINUS_DST_ALPHA,[vW]:J.CONSTANT_COLOR,[yW]:J.ONE_MINUS_CONSTANT_COLOR,[fW]:J.CONSTANT_ALPHA,[hW]:J.ONE_MINUS_CONSTANT_ALPHA};function N0(w,s,d,W0,H0,O0,h0,j0,V0,g0){if(w===S8){if(O===!0)YJ(J.BLEND),O=!1;return}if(O===!1)k0(J.BLEND),O=!0;if(w!==RW){if(w!==E||g0!==f){if(k!==M7||C!==M7)J.blendEquation(J.FUNC_ADD),k=M7,C=M7;if(g0)switch(w){case n7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case LZ:J.blendFunc(J.ONE,J.ONE);break;case kZ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case zZ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:c0("WebGLState: Invalid blending: ",w);break}else switch(w){case n7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case LZ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case kZ:c0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zZ:c0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:c0("WebGLState: Invalid blending: ",w);break}z=null,B=null,P=null,D=null,V.set(0,0,0),I=0,E=w,f=g0}return}if(H0=H0||s,O0=O0||d,h0=h0||W0,s!==k||H0!==C)J.blendEquationSeparate(e[s],e[H0]),k=s,C=H0;if(d!==z||W0!==B||O0!==P||h0!==D)J.blendFuncSeparate(Y0[d],Y0[W0],Y0[O0],Y0[h0]),z=d,B=W0,P=O0,D=h0;if(j0.equals(V)===!1||V0!==I)J.blendColor(j0.r,j0.g,j0.b,V0),V.copy(j0),I=V0;E=w,f=!1}function C0(w,s){w.side===aJ?YJ(J.CULL_FACE):k0(J.CULL_FACE);let d=w.side===U9;if(s)d=!d;z0(d),w.blending===n7&&w.transparent===!1?N0(S8):N0(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),X.setFunc(w.depthFunc),X.setTest(w.depthTest),X.setMask(w.depthWrite),W.setMask(w.colorWrite);let W0=w.stencilWrite;if(Y.setTest(W0),W0)Y.setMask(w.stencilWriteMask),Y.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),Y.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass);JJ(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?k0(J.SAMPLE_ALPHA_TO_COVERAGE):YJ(J.SAMPLE_ALPHA_TO_COVERAGE)}function z0(w){if(S!==w){if(w)J.frontFace(J.CW);else J.frontFace(J.CCW);S=w}}function m0(w){if(w!==OW){if(k0(J.CULL_FACE),w!==p)if(w===BZ)J.cullFace(J.BACK);else if(w===DW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else YJ(J.CULL_FACE);p=w}function f0(w){if(w!==t){if(x)J.lineWidth(w);t=w}}function JJ(w,s,d){if(w){if(k0(J.POLYGON_OFFSET_FILL),T!==s||c!==d){if(T=s,c=d,X.getReversed())s=-s,d=-d;J.polygonOffset(s,d)}}else YJ(J.POLYGON_OFFSET_FILL)}function QJ(w){if(w)k0(J.SCISSOR_TEST);else YJ(J.SCISSOR_TEST)}function EJ(w){if(w===void 0)w=J.TEXTURE0+n-1;if(r!==w)J.activeTexture(w),r=w}function y(w,s,d){if(d===void 0)if(r===null)d=J.TEXTURE0+n-1;else d=r;let W0=K0[d];if(W0===void 0)W0={type:void 0,texture:void 0},K0[d]=W0;if(W0.type!==w||W0.texture!==s){if(r!==d)J.activeTexture(d),r=d;J.bindTexture(w,s||x0[w]),W0.type=w,W0.texture=s}}function xJ(){let w=K0[r];if(w!==void 0&&w.type!==void 0)J.bindTexture(w.type,null),w.type=void 0,w.texture=void 0}function a0(){try{J.compressedTexImage2D(...arguments)}catch(w){c0("WebGLState:",w)}}function yJ(){try{J.compressedTexImage3D(...arguments)}catch(w){c0("WebGLState:",w)}}function D0(){try{J.texSubImage2D(...arguments)}catch(w){c0("WebGLState:",w)}}function RJ(){try{J.texSubImage3D(...arguments)}catch(w){c0("WebGLState:",w)}}function u0(){try{J.compressedTexSubImage2D(...arguments)}catch(w){c0("WebGLState:",w)}}function s0(){try{J.compressedTexSubImage3D(...arguments)}catch(w){c0("WebGLState:",w)}}function gJ(){try{J.texStorage2D(...arguments)}catch(w){c0("WebGLState:",w)}}function _(){try{J.texStorage3D(...arguments)}catch(w){c0("WebGLState:",w)}}function M(){try{J.texImage2D(...arguments)}catch(w){c0("WebGLState:",w)}}function h(){try{J.texImage3D(...arguments)}catch(w){c0("WebGLState:",w)}}function Q0(w){if(q[w]!==void 0)return q[w];else return J.getParameter(w)}function J0(w,s){if(q[w]!==s)J.pixelStorei(w,s),q[w]=s}function U0(w){if($0.equals(w)===!1)J.scissor(w.x,w.y,w.z,w.w),$0.copy(w)}function E0(w){if(_0.equals(w)===!1)J.viewport(w.x,w.y,w.z,w.w),_0.copy(w)}function l(w,s){let d=U.get(s);if(d===void 0)d=new WeakMap,U.set(s,d);let W0=d.get(w);if(W0===void 0)W0=J.getUniformBlockIndex(s,w.name),J.uniformBlockBinding(s,W0,W0),d.set(w,W0)}function o(w,s,d){let H0=U.get(s).get(w);if(H[H0]!==d)J.bindBufferBase(J.UNIFORM_BUFFER,H0,d),H[H0]=d}function G0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},q={},r=null,K0={},G={},H={},F=new WeakMap,R=[],A=null,O=!1,E=null,k=null,z=null,B=null,C=null,P=null,D=null,V=new y0(0,0,0),I=0,f=!1,S=null,p=null,t=null,T=null,c=null,$0.set(0,0,J.canvas.width,J.canvas.height),_0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:k0,disable:YJ,bindFramebuffer:t0,drawBuffers:d0,useProgram:XJ,setBlending:N0,setMaterial:C0,setFlipSided:z0,setCullFace:m0,setLineWidth:f0,setPolygonOffset:JJ,setScissorTest:QJ,activeTexture:EJ,bindTexture:y,unbindTexture:xJ,compressedTexImage2D:a0,compressedTexImage3D:yJ,texImage2D:M,texImage3D:h,pixelStorei:J0,getParameter:Q0,updateUBOMapping:l,uniformBlockBinding:o,texStorage2D:gJ,texStorage3D:_,texSubImage2D:D0,texSubImage3D:RJ,compressedTexSubImage2D:u0,compressedTexSubImage3D:s0,scissor:U0,viewport:E0,reset:G0}}function mq(J,Q,Z,K,$,W,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new Z0,N=new WeakMap,q=new Set,G,F=new WeakMap,R=new Set,A=new FinalizationRegistry((_)=>R.delete(_)),O=!1;try{O=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(_){}function E(_,M){return O?new OffscreenCanvas(_,M):E7("canvas")}function k(_,M,h){let Q0=1,J0=gJ(_);if(J0.width>h||J0.height>h)Q0=h/Math.max(J0.width,J0.height);if(Q0<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let U0=Math.floor(Q0*J0.width),E0=Math.floor(Q0*J0.height);if(G===void 0)G=E(U0,E0);let l=M?E(U0,E0):G;return l.width=U0,l.height=E0,l.getContext("2d").drawImage(_,0,0,U0,E0),n0("WebGLRenderer: Texture has been resized from ("+J0.width+"x"+J0.height+") to ("+U0+"x"+E0+")."),l}else{if("data"in _)n0("WebGLRenderer: Image in DataTexture is too big ("+J0.width+"x"+J0.height+").");return _}return _}function z(_){return _.generateMipmaps}function B(_){J.generateMipmap(_)}function C(_){if(_.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(_.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function P(_,M,h,Q0,J0,U0=!1){if(_!==null){if(J[_]!==void 0)return J[_];n0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let E0;if(Q0){if(E0=Q.get("EXT_texture_norm16"),!E0)n0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let l=M;if(M===J.RED){if(h===J.FLOAT)l=J.R32F;if(h===J.HALF_FLOAT)l=J.R16F;if(h===J.UNSIGNED_BYTE)l=J.R8;if(h===J.UNSIGNED_SHORT&&E0)l=E0.R16_EXT;if(h===J.SHORT&&E0)l=E0.R16_SNORM_EXT}if(M===J.RED_INTEGER){if(h===J.UNSIGNED_BYTE)l=J.R8UI;if(h===J.UNSIGNED_SHORT)l=J.R16UI;if(h===J.UNSIGNED_INT)l=J.R32UI;if(h===J.BYTE)l=J.R8I;if(h===J.SHORT)l=J.R16I;if(h===J.INT)l=J.R32I}if(M===J.RG){if(h===J.FLOAT)l=J.RG32F;if(h===J.HALF_FLOAT)l=J.RG16F;if(h===J.UNSIGNED_BYTE)l=J.RG8;if(h===J.UNSIGNED_SHORT&&E0)l=E0.RG16_EXT;if(h===J.SHORT&&E0)l=E0.RG16_SNORM_EXT}if(M===J.RG_INTEGER){if(h===J.UNSIGNED_BYTE)l=J.RG8UI;if(h===J.UNSIGNED_SHORT)l=J.RG16UI;if(h===J.UNSIGNED_INT)l=J.RG32UI;if(h===J.BYTE)l=J.RG8I;if(h===J.SHORT)l=J.RG16I;if(h===J.INT)l=J.RG32I}if(M===J.RGB_INTEGER){if(h===J.UNSIGNED_BYTE)l=J.RGB8UI;if(h===J.UNSIGNED_SHORT)l=J.RGB16UI;if(h===J.UNSIGNED_INT)l=J.RGB32UI;if(h===J.BYTE)l=J.RGB8I;if(h===J.SHORT)l=J.RGB16I;if(h===J.INT)l=J.RGB32I}if(M===J.RGBA_INTEGER){if(h===J.UNSIGNED_BYTE)l=J.RGBA8UI;if(h===J.UNSIGNED_SHORT)l=J.RGBA16UI;if(h===J.UNSIGNED_INT)l=J.RGBA32UI;if(h===J.BYTE)l=J.RGBA8I;if(h===J.SHORT)l=J.RGBA16I;if(h===J.INT)l=J.RGBA32I}if(M===J.RGB){if(h===J.UNSIGNED_SHORT&&E0)l=E0.RGB16_EXT;if(h===J.SHORT&&E0)l=E0.RGB16_SNORM_EXT;if(h===J.UNSIGNED_INT_5_9_9_9_REV)l=J.RGB9_E5;if(h===J.UNSIGNED_INT_10F_11F_11F_REV)l=J.R11F_G11F_B10F}if(M===J.RGBA){let o=U0?DK:WJ.getTransfer(J0);if(h===J.FLOAT)l=J.RGBA32F;if(h===J.HALF_FLOAT)l=J.RGBA16F;if(h===J.UNSIGNED_BYTE)l=o===AJ?J.SRGB8_ALPHA8:J.RGBA8;if(h===J.UNSIGNED_SHORT&&E0)l=E0.RGBA16_EXT;if(h===J.SHORT&&E0)l=E0.RGBA16_SNORM_EXT;if(h===J.UNSIGNED_SHORT_4_4_4_4)l=J.RGBA4;if(h===J.UNSIGNED_SHORT_5_5_5_1)l=J.RGB5_A1}if(l===J.R16F||l===J.R32F||l===J.RG16F||l===J.RG32F||l===J.RGBA16F||l===J.RGBA32F)Q.get("EXT_color_buffer_float");return l}function D(_,M){let h;if(_){if(M===null||M===G8||M===j8)h=J.DEPTH24_STENCIL8;else if(M===o9)h=J.DEPTH32F_STENCIL8;else if(M===o7)h=J.DEPTH24_STENCIL8,n0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(M===null||M===G8||M===j8)h=J.DEPTH_COMPONENT24;else if(M===o9)h=J.DEPTH_COMPONENT32F;else if(M===o7)h=J.DEPTH_COMPONENT16;return h}function V(_,M){if(z(_)===!0||_.isFramebufferTexture&&_.minFilter!==U8&&_.minFilter!==V9)return Math.log2(Math.max(M.width,M.height))+1;else if(_.mipmaps.length>0)return _.mipmaps.length;else if(_.isCompressedTexture&&Array.isArray(_.image))return M.mipmaps.length;else return 1}function I(_){let M=new WeakRef(_);K.get(_).__ref=M,R.add(M),A.register(_,M,M)}function f(_){let M=K.get(_).__ref;if(M===void 0)return;R.delete(M),A.unregister(M)}function S(_){t(_.target)}function p(_){T(_.target)}function t(_){if(_.removeEventListener("dispose",S),f(_),n(_),_.isVideoTexture)N.delete(_);if(_.isHTMLTexture)q.delete(_)}function T(_){_.removeEventListener("dispose",p),f(_),X0(_)}function c(){for(let _ of R){let M=_.deref();if(M===void 0)continue;if(M.isRenderTarget===!0)T(M);else t(M)}R.clear(),q.clear()}function n(_){let M=K.get(_);if(M.__webglInit===void 0)return;let h=_.source,Q0=F.get(h);if(Q0){let J0=Q0[M.__cacheKey];if(J0.usedTimes--,J0.usedTimes===0)x(_);if(Object.keys(Q0).length===0)F.delete(h)}K.remove(_)}function x(_){let M=K.get(_);J.deleteTexture(M.__webglTexture);let h=_.source,Q0=F.get(h);delete Q0[M.__cacheKey],X.memory.textures--}function X0(_){let M=K.get(_);if(M.__depthDisposeCallback)M.__depthDisposeCallback();let h=_.depthTexture;if(h&&h.renderTarget===_)t(h);if(_.isWebGLCubeRenderTarget)for(let J0=0;J0<6;J0++){if(Array.isArray(M.__webglFramebuffer[J0]))for(let U0=0;U0<M.__webglFramebuffer[J0].length;U0++)J.deleteFramebuffer(M.__webglFramebuffer[J0][U0]);else J.deleteFramebuffer(M.__webglFramebuffer[J0]);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer[J0])}else{if(Array.isArray(M.__webglFramebuffer))for(let J0=0;J0<M.__webglFramebuffer.length;J0++)J.deleteFramebuffer(M.__webglFramebuffer[J0]);else J.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer);if(M.__webglMultisampledFramebuffer)J.deleteFramebuffer(M.__webglMultisampledFramebuffer);if(M.__webglColorRenderbuffer){for(let J0=0;J0<M.__webglColorRenderbuffer.length;J0++)if(M.__webglColorRenderbuffer[J0])J.deleteRenderbuffer(M.__webglColorRenderbuffer[J0])}if(M.__webglDepthRenderbuffer)J.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let Q0=_.textures;for(let J0=0,U0=Q0.length;J0<U0;J0++){let E0=K.get(Q0[J0]);if(E0.__webglTexture)J.deleteTexture(E0.__webglTexture),X.memory.textures--;K.remove(Q0[J0])}K.remove(_)}let u=0;function r(){u=0}function K0(){return u}function A0(_){u=_}function i(){let _=u;if(_>=$.maxTextures)n0("WebGLTextures: Trying to use "+(_+1)+" texture units while this GPU supports only "+$.maxTextures);return u+=1,_}function $0(_){let M=[];return M.push(_.wrapS),M.push(_.wrapT),M.push(_.wrapR||0),M.push(_.magFilter),M.push(_.minFilter),M.push(_.anisotropy),M.push(_.internalFormat),M.push(_.format),M.push(_.type),M.push(_.generateMipmaps),M.push(_.mipmapsAutoUpdate),M.push(_.premultiplyAlpha),M.push(_.flipY),M.push(_.unpackAlignment),M.push(_.colorSpace),M.join()}function _0(_,M){let h=K.get(_);if(_.isVideoTexture)u0(_);if(_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&h.__version!==_.version){let Q0=_.image;if(Q0===null)n0("WebGLRenderer: Texture marked for update but no image data found.");else if(Q0.complete===!1)n0("WebGLRenderer: Texture marked for update but image is incomplete");else{C0(h,_,M);return}}else if(_.isExternalTexture)h.__webglTexture=_.sourceTexture?_.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D,h.__webglTexture,J.TEXTURE0+M)}function b0(_,M){let h=K.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&h.__version!==_.version){C0(h,_,M);return}else if(_.isExternalTexture)h.__webglTexture=_.sourceTexture?_.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D_ARRAY,h.__webglTexture,J.TEXTURE0+M)}function x0(_,M){let h=K.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&h.__version!==_.version){C0(h,_,M);return}Z.bindTexture(J.TEXTURE_3D,h.__webglTexture,J.TEXTURE0+M)}function k0(_,M){let h=K.get(_);if(_.version>0&&h.__version!==_.version){z0(h,_,M);return}Z.bindTexture(J.TEXTURE_CUBE_MAP,h.__webglTexture,J.TEXTURE0+M)}let YJ={[sW]:J.REPEAT,[e6]:J.CLAMP_TO_EDGE,[iW]:J.MIRRORED_REPEAT},t0={[U8]:J.NEAREST,[oW]:J.NEAREST_MIPMAP_NEAREST,[i7]:J.NEAREST_MIPMAP_LINEAR,[V9]:J.LINEAR,[JQ]:J.LINEAR_MIPMAP_NEAREST,[N8]:J.LINEAR_MIPMAP_LINEAR},d0={[$X]:J.NEVER,[VK]:J.ALWAYS,[WX]:J.LESS,[RK]:J.LEQUAL,[XX]:J.EQUAL,[MK]:J.GEQUAL,[YX]:J.GREATER,[HX]:J.NOTEQUAL};function XJ(_,M){if(M.type===o9&&Q.has("OES_texture_float_linear")===!1&&(M.magFilter===V9||M.magFilter===JQ||M.magFilter===i7||M.magFilter===N8||M.minFilter===V9||M.minFilter===JQ||M.minFilter===i7||M.minFilter===N8))n0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(_,J.TEXTURE_WRAP_S,YJ[M.wrapS]),J.texParameteri(_,J.TEXTURE_WRAP_T,YJ[M.wrapT]),_===J.TEXTURE_3D||_===J.TEXTURE_2D_ARRAY)J.texParameteri(_,J.TEXTURE_WRAP_R,YJ[M.wrapR]);if(J.texParameteri(_,J.TEXTURE_MAG_FILTER,t0[M.magFilter]),J.texParameteri(_,J.TEXTURE_MIN_FILTER,t0[M.minFilter]),M.compareFunction)J.texParameteri(_,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(_,J.TEXTURE_COMPARE_FUNC,d0[M.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===U8)return;if(M.minFilter!==i7&&M.minFilter!==N8)return;if(M.type===o9&&Q.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||K.get(M).__currentAnisotropy){let h=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(_,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,$.getMaxAnisotropy())),K.get(M).__currentAnisotropy=M.anisotropy}}}function e(_,M){let h=!1;if(_.__webglInit===void 0)_.__webglInit=!0,M.addEventListener("dispose",S),I(M);let Q0=M.source,J0=F.get(Q0);if(J0===void 0)J0={},F.set(Q0,J0);let U0=$0(M);if(U0!==_.__cacheKey){if(J0[U0]===void 0)J0[U0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,h=!0;J0[U0].usedTimes++;let E0=J0[_.__cacheKey];if(E0!==void 0){if(J0[_.__cacheKey].usedTimes--,E0.usedTimes===0)x(M)}_.__cacheKey=U0,_.__webglTexture=J0[U0].texture}return h}function Y0(_,M,h){return Math.floor(Math.floor(_/h)/M)}function N0(_,M,h,Q0){let U0=_.updateRanges;if(U0.length===0)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,M.width,M.height,h,Q0,M.data);else{U0.sort((w,s)=>w.start-s.start);let E0=0;for(let w=1;w<U0.length;w++){let s=U0[E0],d=U0[w],W0=s.start+s.count,H0=Y0(d.start,M.width,4),O0=Y0(s.start,M.width,4);if(d.start<=W0+1&&H0===O0&&Y0(d.start+d.count-1,M.width,4)===H0)s.count=Math.max(s.count,d.start+d.count-s.start);else++E0,U0[E0]=d}U0.length=E0+1;let l=Z.getParameter(J.UNPACK_ROW_LENGTH),o=Z.getParameter(J.UNPACK_SKIP_PIXELS),G0=Z.getParameter(J.UNPACK_SKIP_ROWS);Z.pixelStorei(J.UNPACK_ROW_LENGTH,M.width);for(let w=0,s=U0.length;w<s;w++){let d=U0[w],W0=Math.floor(d.start/4),H0=Math.ceil(d.count/4),O0=W0%M.width,h0=Math.floor(W0/M.width),j0=H0,V0=1;Z.pixelStorei(J.UNPACK_SKIP_PIXELS,O0),Z.pixelStorei(J.UNPACK_SKIP_ROWS,h0),Z.texSubImage2D(J.TEXTURE_2D,0,O0,h0,j0,1,h,Q0,M.data)}_.clearUpdateRanges(),Z.pixelStorei(J.UNPACK_ROW_LENGTH,l),Z.pixelStorei(J.UNPACK_SKIP_PIXELS,o),Z.pixelStorei(J.UNPACK_SKIP_ROWS,G0)}}function C0(_,M,h){let Q0=J.TEXTURE_2D;if(M.isDataArrayTexture||M.isCompressedArrayTexture)Q0=J.TEXTURE_2D_ARRAY;if(M.isData3DTexture)Q0=J.TEXTURE_3D;let J0=e(_,M),U0=M.source;Z.bindTexture(Q0,_.__webglTexture,J.TEXTURE0+h);let E0=K.get(U0);if(U0.version!==E0.__version||J0===!0){if(Z.activeTexture(J.TEXTURE0+h),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let V0=WJ.getPrimaries(WJ.workingColorSpace),g0=M.colorSpace===y8?null:WJ.getPrimaries(M.colorSpace),r0=M.colorSpace===y8||V0===g0?J.NONE:J.BROWSER_DEFAULT_WEBGL;Z.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),Z.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),Z.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,r0)}Z.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment);let o=k(M.image,!1,$.maxTextureSize);o=s0(M,o);let G0=W.convert(M.format,M.colorSpace),w=W.convert(M.type),s=P(M.internalFormat,G0,w,M.normalized,M.colorSpace,M.isVideoTexture);XJ(Q0,M);let d,W0=M.mipmaps,H0=M.isVideoTexture!==!0,O0=E0.__version===void 0||J0===!0,h0=U0.dataReady,j0=V(M,o);if(M.isDepthTexture){if(s=D(M.format===q8,M.type),O0)if(H0)Z.texStorage2D(J.TEXTURE_2D,1,s,o.width,o.height);else Z.texImage2D(J.TEXTURE_2D,0,s,o.width,o.height,0,G0,w,null)}else if(M.isDataTexture)if(W0.length>0){if(H0&&O0)Z.texStorage2D(J.TEXTURE_2D,j0,s,W0[0].width,W0[0].height);for(let V0=0,g0=W0.length;V0<g0;V0++)if(d=W0[V0],H0){if(h0)Z.texSubImage2D(J.TEXTURE_2D,V0,0,0,d.width,d.height,G0,w,d.data)}else Z.texImage2D(J.TEXTURE_2D,V0,s,d.width,d.height,0,G0,w,d.data);M.generateMipmaps=!1}else if(H0){if(O0)Z.texStorage2D(J.TEXTURE_2D,j0,s,o.width,o.height);if(h0)N0(M,o,G0,w)}else Z.texImage2D(J.TEXTURE_2D,0,s,o.width,o.height,0,G0,w,o.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){if(H0&&O0)Z.texStorage3D(J.TEXTURE_2D_ARRAY,j0,s,W0[0].width,W0[0].height,o.depth);for(let V0=0,g0=W0.length;V0<g0;V0++)if(d=W0[V0],M.format!==a9)if(G0!==null)if(H0){if(h0)if(M.layerUpdates.size>0){let r0=rK(d.width,d.height,M.format,M.type);for(let B0 of M.layerUpdates){let LJ=d.data.subarray(B0*r0/d.data.BYTES_PER_ELEMENT,(B0+1)*r0/d.data.BYTES_PER_ELEMENT);Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,V0,0,0,B0,d.width,d.height,1,G0,LJ)}}else Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,V0,0,0,0,d.width,d.height,o.depth,G0,d.data)}else Z.compressedTexImage3D(J.TEXTURE_2D_ARRAY,V0,s,d.width,d.height,o.depth,0,d.data,0,0);else n0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(H0){if(h0)Z.texSubImage3D(J.TEXTURE_2D_ARRAY,V0,0,0,0,d.width,d.height,o.depth,G0,w,d.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,V0,s,d.width,d.height,o.depth,0,G0,w,d.data);if(M.layerUpdates.size>0)M.clearLayerUpdates()}else{if(H0&&O0)Z.texStorage2D(J.TEXTURE_2D,j0,s,W0[0].width,W0[0].height);for(let V0=0,g0=W0.length;V0<g0;V0++)if(d=W0[V0],M.format!==a9)if(G0!==null)if(H0){if(h0)Z.compressedTexSubImage2D(J.TEXTURE_2D,V0,0,0,d.width,d.height,G0,d.data)}else Z.compressedTexImage2D(J.TEXTURE_2D,V0,s,d.width,d.height,0,d.data);else n0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(H0){if(h0)Z.texSubImage2D(J.TEXTURE_2D,V0,0,0,d.width,d.height,G0,w,d.data)}else Z.texImage2D(J.TEXTURE_2D,V0,s,d.width,d.height,0,G0,w,d.data)}else if(M.isDataArrayTexture)if(H0){if(O0)Z.texStorage3D(J.TEXTURE_2D_ARRAY,j0,s,o.width,o.height,o.depth);if(h0)if(M.layerUpdates.size>0){let V0=rK(o.width,o.height,M.format,M.type);for(let g0 of M.layerUpdates){let r0=o.data.subarray(g0*V0/o.data.BYTES_PER_ELEMENT,(g0+1)*V0/o.data.BYTES_PER_ELEMENT);Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,g0,o.width,o.height,1,G0,w,r0)}M.clearLayerUpdates()}else Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,o.width,o.height,o.depth,G0,w,o.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,0,s,o.width,o.height,o.depth,0,G0,w,o.data);else if(M.isData3DTexture)if(H0){if(O0)Z.texStorage3D(J.TEXTURE_3D,j0,s,o.width,o.height,o.depth);if(h0)Z.texSubImage3D(J.TEXTURE_3D,0,0,0,0,o.width,o.height,o.depth,G0,w,o.data)}else Z.texImage3D(J.TEXTURE_3D,0,s,o.width,o.height,o.depth,0,G0,w,o.data);else if(M.isFramebufferTexture){if(O0)if(H0)Z.texStorage2D(J.TEXTURE_2D,j0,s,o.width,o.height);else{let{width:V0,height:g0}=o;for(let r0=0;r0<j0;r0++)Z.texImage2D(J.TEXTURE_2D,r0,s,V0,g0,0,G0,w,null),V0>>=1,g0>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in J){let V0=J.canvas;if(!V0.hasAttribute("layoutsubtree"))V0.setAttribute("layoutsubtree","true");if(o.parentNode!==V0){V0.appendChild(o),q.add(M),V0.onpaint=(g0)=>{let r0=g0.changedElements;for(let B0 of q)if(r0.includes(B0.image))B0.needsUpdate=!0},V0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,o);else{let{RGBA:r0,RGBA:B0,UNSIGNED_BYTE:LJ}=J;J.texElementImage2D(J.TEXTURE_2D,0,r0,B0,LJ,o)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(W0.length>0){if(H0&&O0){let V0=gJ(W0[0]);Z.texStorage2D(J.TEXTURE_2D,j0,s,V0.width,V0.height)}for(let V0=0,g0=W0.length;V0<g0;V0++)if(d=W0[V0],H0){if(h0)Z.texSubImage2D(J.TEXTURE_2D,V0,0,0,G0,w,d)}else Z.texImage2D(J.TEXTURE_2D,V0,s,G0,w,d);M.generateMipmaps=!1}else if(H0){if(O0){let V0=gJ(o);Z.texStorage2D(J.TEXTURE_2D,j0,s,V0.width,V0.height)}if(h0)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,G0,w,o)}else Z.texImage2D(J.TEXTURE_2D,0,s,G0,w,o);if(z(M)&&M.mipmapsAutoUpdate===!0)B(Q0);if(E0.__version=U0.version,M.onUpdate)M.onUpdate(M)}_.__version=M.version}function z0(_,M,h){if(M.image.length!==6)return;let Q0=e(_,M),J0=M.source;Z.bindTexture(J.TEXTURE_CUBE_MAP,_.__webglTexture,J.TEXTURE0+h);let U0=K.get(J0);if(J0.version!==U0.__version||Q0===!0){Z.activeTexture(J.TEXTURE0+h);let E0=WJ.getPrimaries(WJ.workingColorSpace),l=M.colorSpace===y8?null:WJ.getPrimaries(M.colorSpace),o=M.colorSpace===y8||E0===l?J.NONE:J.BROWSER_DEFAULT_WEBGL;Z.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),Z.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),Z.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment),Z.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,o);let G0=M.isCompressedTexture||M.image[0].isCompressedTexture,w=M.image[0]&&M.image[0].isDataTexture,s=[];for(let B0=0;B0<6;B0++){if(!G0&&!w)s[B0]=k(M.image[B0],!0,$.maxCubemapSize);else s[B0]=w?M.image[B0].image:M.image[B0];s[B0]=s0(M,s[B0])}let d=s[0],W0=W.convert(M.format,M.colorSpace),H0=W.convert(M.type),O0=P(M.internalFormat,W0,H0,M.normalized,M.colorSpace),h0=M.isVideoTexture!==!0,j0=U0.__version===void 0||Q0===!0,V0=J0.dataReady,g0=V(M,d);XJ(J.TEXTURE_CUBE_MAP,M);let r0;if(M.isDepthTexture){if(O0=D(M.format===q8,M.type),j0)if(h0)Z.texStorage2D(J.TEXTURE_CUBE_MAP,1,O0,d.width,d.height);else for(let B0=0;B0<6;B0++)Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+B0,0,O0,d.width,d.height,0,W0,H0,null)}else if(G0){if(h0&&j0)Z.texStorage2D(J.TEXTURE_CUBE_MAP,g0,O0,d.width,d.height);for(let B0=0;B0<6;B0++){r0=s[B0].mipmaps;for(let LJ=0;LJ<r0.length;LJ++){let uJ=r0[LJ];if(M.format!==a9)if(W0!==null)if(h0){if(V0)Z.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+B0,LJ,0,0,uJ.width,uJ.height,W0,uJ.data)}else Z.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+B0,LJ,O0,uJ.width,uJ.height,0,uJ.data);else n0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(h0){if(V0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+B0,LJ,0,0,uJ.width,uJ.height,W0,H0,uJ.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+B0,LJ,O0,uJ.width,uJ.height,0,W0,H0,uJ.data)}}}else{if(r0=M.mipmaps,h0&&j0){if(r0.length>0)g0++;let B0=gJ(s[0]);Z.texStorage2D(J.TEXTURE_CUBE_MAP,g0,O0,B0.width,B0.height)}for(let B0=0;B0<6;B0++)if(w){if(h0){if(V0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+B0,0,0,0,s[B0].width,s[B0].height,W0,H0,s[B0].data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+B0,0,O0,s[B0].width,s[B0].height,0,W0,H0,s[B0].data);for(let LJ=0;LJ<r0.length;LJ++){let p9=r0[LJ].image[B0].image;if(h0){if(V0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+B0,LJ+1,0,0,p9.width,p9.height,W0,H0,p9.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+B0,LJ+1,O0,p9.width,p9.height,0,W0,H0,p9.data)}}else{if(h0){if(V0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+B0,0,0,0,W0,H0,s[B0])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+B0,0,O0,W0,H0,s[B0]);for(let LJ=0;LJ<r0.length;LJ++){let uJ=r0[LJ];if(h0){if(V0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+B0,LJ+1,0,0,W0,H0,uJ.image[B0])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+B0,LJ+1,O0,W0,H0,uJ.image[B0])}}}if(z(M)&&M.mipmapsAutoUpdate===!0)B(J.TEXTURE_CUBE_MAP);if(U0.__version=J0.version,M.onUpdate)M.onUpdate(M)}_.__version=M.version}function m0(_,M,h,Q0,J0,U0){let E0=W.convert(h.format,h.colorSpace),l=W.convert(h.type),o=P(h.internalFormat,E0,l,h.normalized,h.colorSpace),G0=K.get(M),w=K.get(h);if(w.__renderTarget=M,!G0.__hasExternalTextures){let s=Math.max(1,M.width>>U0),d=Math.max(1,M.height>>U0);if(J0===J.TEXTURE_3D||J0===J.TEXTURE_2D_ARRAY)Z.texImage3D(J0,U0,o,s,d,M.depth,0,E0,l,null);else Z.texImage2D(J0,U0,o,s,d,0,E0,l,null)}if(Z.bindFramebuffer(J.FRAMEBUFFER,_),RJ(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,Q0,J0,w.__webglTexture,0,D0(M));else if(J0===J.TEXTURE_2D||J0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&J0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,Q0,J0,w.__webglTexture,U0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}function f0(_,M,h){if(J.bindRenderbuffer(J.RENDERBUFFER,_),M.depthBuffer){let Q0=M.depthTexture,J0=Q0&&Q0.isDepthTexture?Q0.type:null,U0=D(M.stencilBuffer,J0),E0=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(RJ(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,D0(M),U0,M.width,M.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,D0(M),U0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,U0,M.width,M.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,E0,J.RENDERBUFFER,_)}else{let Q0=M.textures;for(let J0=0;J0<Q0.length;J0++){let U0=Q0[J0],E0=W.convert(U0.format,U0.colorSpace),l=W.convert(U0.type),o=P(U0.internalFormat,E0,l,U0.normalized,U0.colorSpace);if(RJ(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,D0(M),o,M.width,M.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,D0(M),o,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,o,M.width,M.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function JJ(_,M,h){let Q0=M.isWebGLCubeRenderTarget===!0;if(Z.bindFramebuffer(J.FRAMEBUFFER,_),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J0=K.get(M.depthTexture);J0.__renderTarget=M;let U0=Q0?M.depthTexture.image[0]:M.depthTexture.image;if(!J0.__webglTexture||U0.width!==M.width||U0.height!==M.height)U0.width=M.width,U0.height=M.height,M.depthTexture.needsUpdate=!0;if(Q0)k0(M.depthTexture,0);else _0(M.depthTexture,0);let E0=J0.__webglTexture,l=D0(M),o=Q0?J.TEXTURE_CUBE_MAP_POSITIVE_X+h:J.TEXTURE_2D,G0=M.depthTexture.format===q8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(M.depthTexture.format===B7)if(RJ(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,G0,o,E0,0,l);else J.framebufferTexture2D(J.FRAMEBUFFER,G0,o,E0,0);else if(M.depthTexture.format===q8)if(RJ(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,G0,o,E0,0,l);else J.framebufferTexture2D(J.FRAMEBUFFER,G0,o,E0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function QJ(_){let M=K.get(_),h=_.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==_.depthTexture){let Q0=_.depthTexture;if(M.__depthDisposeCallback)M.__depthDisposeCallback();if(Q0){let J0=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q0.removeEventListener("dispose",J0)};Q0.addEventListener("dispose",J0),M.__depthDisposeCallback=J0}M.__boundDepthTexture=Q0}if(_.depthTexture&&!M.__autoAllocateDepthBuffer)if(h)for(let Q0=0;Q0<6;Q0++)JJ(M.__webglFramebuffer[Q0],_,Q0);else if(_.texture.mipmaps.length>0)JJ(M.__webglFramebuffer[0],_,0);else JJ(M.__webglFramebuffer,_,0);else if(h){M.__webglDepthbuffer=[];for(let Q0=0;Q0<6;Q0++)if(Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[Q0]),M.__webglDepthbuffer[Q0]===void 0)M.__webglDepthbuffer[Q0]=J.createRenderbuffer(),f0(M.__webglDepthbuffer[Q0],_,!1);else{let J0=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=M.__webglDepthbuffer[Q0];J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,J0,J.RENDERBUFFER,U0)}}else{if(_.texture.mipmaps.length>0)Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[0]);else Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer);if(M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=J.createRenderbuffer(),f0(M.__webglDepthbuffer,_,!1);else{let J0=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=M.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,J0,J.RENDERBUFFER,U0)}}Z.bindFramebuffer(J.FRAMEBUFFER,null)}function EJ(_,M,h){let Q0=K.get(_);if(M!==void 0)m0(Q0.__webglFramebuffer,_,_.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(h!==void 0)QJ(_)}function y(_){let M=_.texture,h=K.get(_),Q0=K.get(M);_.addEventListener("dispose",p),I(_);let J0=_.textures,U0=_.isWebGLCubeRenderTarget===!0,E0=J0.length>1;if(!E0){if(Q0.__webglTexture===void 0)Q0.__webglTexture=J.createTexture();Q0.__version=M.version,X.memory.textures++}if(U0){h.__webglFramebuffer=[];for(let l=0;l<6;l++)if(M.mipmaps.length>0){h.__webglFramebuffer[l]=[];for(let o=0;o<M.mipmaps.length;o++)h.__webglFramebuffer[l][o]=J.createFramebuffer()}else h.__webglFramebuffer[l]=J.createFramebuffer()}else{if(M.mipmaps.length>0){h.__webglFramebuffer=[];for(let l=0;l<M.mipmaps.length;l++)h.__webglFramebuffer[l]=J.createFramebuffer()}else h.__webglFramebuffer=J.createFramebuffer();if(E0)for(let l=0,o=J0.length;l<o;l++){let G0=K.get(J0[l]);if(G0.__webglTexture===void 0)G0.__webglTexture=J.createTexture(),X.memory.textures++}if(_.samples>0&&RJ(_)===!1){h.__webglMultisampledFramebuffer=J.createFramebuffer(),h.__webglColorRenderbuffer=[],Z.bindFramebuffer(J.FRAMEBUFFER,h.__webglMultisampledFramebuffer);for(let l=0;l<J0.length;l++){let o=J0[l];h.__webglColorRenderbuffer[l]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,h.__webglColorRenderbuffer[l]);let G0=W.convert(o.format,o.colorSpace),w=W.convert(o.type),s=P(o.internalFormat,G0,w,o.normalized,o.colorSpace,_.isXRRenderTarget===!0),d=D0(_);J.renderbufferStorageMultisample(J.RENDERBUFFER,d,s,_.width,_.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+l,J.RENDERBUFFER,h.__webglColorRenderbuffer[l])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),_.depthBuffer)h.__webglDepthRenderbuffer=J.createRenderbuffer(),f0(h.__webglDepthRenderbuffer,_,!0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}}if(U0){Z.bindTexture(J.TEXTURE_CUBE_MAP,Q0.__webglTexture),XJ(J.TEXTURE_CUBE_MAP,M);for(let l=0;l<6;l++)if(M.mipmaps.length>0)for(let o=0;o<M.mipmaps.length;o++)m0(h.__webglFramebuffer[l][o],_,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+l,o);else m0(h.__webglFramebuffer[l],_,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+l,0);if(z(M))B(J.TEXTURE_CUBE_MAP);else if(M.mipmaps.length>0)J.texParameteri(J.TEXTURE_CUBE_MAP,J.TEXTURE_MAX_LEVEL,M.mipmaps.length-1);Z.unbindTexture()}else if(E0){for(let l=0,o=J0.length;l<o;l++){let G0=J0[l],w=K.get(G0),s=J.TEXTURE_2D;if(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)s=_.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(s,w.__webglTexture),XJ(s,G0),m0(h.__webglFramebuffer,_,G0,J.COLOR_ATTACHMENT0+l,s,0),z(G0))B(s)}Z.unbindTexture()}else{let l=J.TEXTURE_2D;if(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)l=_.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(l,Q0.__webglTexture),XJ(l,M),M.mipmaps.length>0)for(let o=0;o<M.mipmaps.length;o++)m0(h.__webglFramebuffer[o],_,M,J.COLOR_ATTACHMENT0,l,o);else m0(h.__webglFramebuffer,_,M,J.COLOR_ATTACHMENT0,l,0);if(z(M))B(l);else if(M.mipmaps.length>0)J.texParameteri(l,J.TEXTURE_MAX_LEVEL,M.mipmaps.length-1);Z.unbindTexture()}if(_.depthBuffer)QJ(_)}function xJ(_){let M=_.textures;for(let h=0,Q0=M.length;h<Q0;h++){let J0=M[h];if(z(J0)&&J0.mipmapsAutoUpdate===!0){let U0=C(_),E0=K.get(J0).__webglTexture;Z.bindTexture(U0,E0),B(U0),Z.unbindTexture()}}}let a0=[];function yJ(_){if(_.samples>0){if(RJ(_)===!1){let{textures:M,width:h,height:Q0}=_,J0=J.COLOR_BUFFER_BIT,U0=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,E0=K.get(_),l=M.length>1;if(l)for(let G0=0;G0<M.length;G0++)Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+G0,J.RENDERBUFFER,null),Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+G0,J.TEXTURE_2D,null,0);if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,E0.__webglMultisampledFramebuffer),_.texture.mipmaps.length>0)Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglFramebuffer[0]);else Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglFramebuffer);for(let G0=0;G0<M.length;G0++){if(_.resolveDepthBuffer){if(_.depthBuffer)J0|=J.DEPTH_BUFFER_BIT;if(_.stencilBuffer&&_.resolveStencilBuffer)J0|=J.STENCIL_BUFFER_BIT}if(l){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,E0.__webglColorRenderbuffer[G0]);let w=K.get(M[G0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,w,0)}if(J.blitFramebuffer(0,0,h,Q0,0,0,h,Q0,J0,J.NEAREST),H===!0){if(a0.length=0,a0.push(J.COLOR_ATTACHMENT0+G0),_.depthBuffer&&_.storeMultisampledDepthBuffer===!1)a0.push(U0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,a0)}}if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,null),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),l)for(let G0=0;G0<M.length;G0++){Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+G0,J.RENDERBUFFER,E0.__webglColorRenderbuffer[G0]);let w=K.get(M[G0]).__webglTexture;Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+G0,J.TEXTURE_2D,w,0)}Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.storeMultisampledDepthBuffer===!1&&H){let M=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[M])}}}function D0(_){return Math.min($.maxSamples,_.samples)}function RJ(_){let M=K.get(_);return _.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function u0(_){let M=X.render.frame;if(N.get(_)!==M)N.set(_,M),_.update()}function s0(_,M){let{colorSpace:h,format:Q0,type:J0}=_;if(_.isCompressedTexture===!0||_.isVideoTexture===!0)return M;if(h!==OK&&h!==y8)if(WJ.getTransfer(h)===AJ){if(Q0!==a9||J0!==T9)n0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else c0("WebGLTextures: Unsupported texture color space:",h);return M}function gJ(_){if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement)U.width=_.naturalWidth||_.width,U.height=_.naturalHeight||_.height;else if(typeof VideoFrame<"u"&&_ instanceof VideoFrame)U.width=_.displayWidth,U.height=_.displayHeight;else U.width=_.width,U.height=_.height;return U}this.allocateTextureUnit=i,this.resetTextureUnits=r,this.getTextureUnits=K0,this.setTextureUnits=A0,this.setTexture2D=_0,this.setTexture2DArray=b0,this.setTexture3D=x0,this.setTextureCube=k0,this.rebindTextures=EJ,this.setupRenderTarget=y,this.updateRenderTargetMipmap=xJ,this.updateMultisampleRenderTarget=yJ,this.setupDepthRenderbuffer=QJ,this.setupFrameBufferTexture=m0,this.useMultisampledRTT=RJ,this.dispose=c}function lq(J,Q){function Z(K,$=y8){let W,X=WJ.getTransfer($);if(K===T9)return J.UNSIGNED_BYTE;if(K===vZ)return J.UNSIGNED_SHORT_4_4_4_4;if(K===yZ)return J.UNSIGNED_SHORT_5_5_5_1;if(K===tW)return J.UNSIGNED_INT_5_9_9_9_REV;if(K===eW)return J.UNSIGNED_INT_10F_11F_11F_REV;if(K===aW)return J.BYTE;if(K===rW)return J.SHORT;if(K===o7)return J.UNSIGNED_SHORT;if(K===jZ)return J.INT;if(K===G8)return J.UNSIGNED_INT;if(K===o9)return J.FLOAT;if(K===y9)return J.HALF_FLOAT;if(K===JX)return J.ALPHA;if(K===QX)return J.RGB;if(K===a9)return J.RGBA;if(K===B7)return J.DEPTH_COMPONENT;if(K===q8)return J.DEPTH_STENCIL;if(K===ZX)return J.RED;if(K===fZ)return J.RED_INTEGER;if(K===v8)return J.RG;if(K===hZ)return J.RG_INTEGER;if(K===bZ)return J.RGBA_INTEGER;if(K===QQ||K===ZQ||K===KQ||K===$Q)if(X===AJ)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(K===QQ)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(K===ZQ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(K===KQ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(K===$Q)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(K===QQ)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(K===ZQ)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(K===KQ)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(K===$Q)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(K===xZ||K===gZ||K===pZ||K===mZ)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(K===xZ)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(K===gZ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(K===pZ)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(K===mZ)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(K===lZ||K===uZ||K===dZ||K===cZ||K===nZ||K===WQ||K===sZ)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(K===lZ||K===uZ)return X===AJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(K===dZ)return X===AJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(K===cZ)return W.COMPRESSED_R11_EAC;if(K===nZ)return W.COMPRESSED_SIGNED_R11_EAC;if(K===WQ)return W.COMPRESSED_RG11_EAC;if(K===sZ)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(K===iZ||K===oZ||K===aZ||K===rZ||K===tZ||K===eZ||K===JK||K===QK||K===ZK||K===KK||K===$K||K===WK||K===XK||K===YK)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(K===iZ)return X===AJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(K===oZ)return X===AJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(K===aZ)return X===AJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(K===rZ)return X===AJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(K===tZ)return X===AJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(K===eZ)return X===AJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(K===JK)return X===AJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(K===QK)return X===AJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(K===ZK)return X===AJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(K===KK)return X===AJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(K===$K)return X===AJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(K===WK)return X===AJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(K===XK)return X===AJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(K===YK)return X===AJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(K===HK||K===UK||K===NK)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(K===HK)return X===AJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(K===UK)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(K===NK)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(K===GK||K===qK||K===XQ||K===EK)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(K===GK)return W.COMPRESSED_RED_RGTC1_EXT;if(K===qK)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(K===XQ)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(K===EK)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(K===j8)return J.UNSIGNED_INT_24_8;return J[K]!==void 0?J[K]:null}return{convert:Z}}var uq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dq=`
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

}`;class GY{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let Z=new MQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=Z}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,Z=new J8({vertexShader:uq,fragmentShader:dq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new CJ(new h9(20,20),Z)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qY extends r9{constructor(J,Q){super();let Z=this,K=null,$=1,W=null,X="local-floor",Y=1,H=null,U=null,N=null,q=null,G=null,F=null,R=typeof XRWebGLBinding<"u",A=new GY,O={},E=Q.getContextAttributes(),k=null,z=null,B=[],C=[],P=new Z0,D=null,V=null,I=new M9;I.viewport=new jJ;let f=new M9;f.viewport=new jJ;let S=[I,f],p=new iK,t=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(i){let $0=B[i];if($0===void 0)$0=new t7,B[i]=$0;return $0.getTargetRaySpace()},this.getControllerGrip=function(i){let $0=B[i];if($0===void 0)$0=new t7,B[i]=$0;return $0.getGripSpace()},this.getHand=function(i){let $0=B[i];if($0===void 0)$0=new t7,B[i]=$0;return $0.getHandSpace()};function c(i){let $0=C.indexOf(i.inputSource);if($0===-1)return;let _0=B[$0];if(_0!==void 0)_0.update(i.inputSource,i.frame,H||W),_0.dispatchEvent({type:i.type,data:i.inputSource})}function n(){K.removeEventListener("select",c),K.removeEventListener("selectstart",c),K.removeEventListener("selectend",c),K.removeEventListener("squeeze",c),K.removeEventListener("squeezestart",c),K.removeEventListener("squeezeend",c),K.removeEventListener("end",n),K.removeEventListener("inputsourceschange",x);for(let i=0;i<B.length;i++){let $0=C[i];if($0===null)continue;C[i]=null,B[i].disconnect($0)}t=null,T=null,A.reset();for(let i in O)delete O[i];if(J.setRenderTarget(k),G=null,q=null,N=null,K=null,z=null,A0.stop(),Z.isPresenting=!1,J.setPixelRatio(D),J.setSize(P.width,P.height,!1),V!==null){let i=V.camera;i.fov=V.fov,i.zoom=V.zoom,i.updateProjectionMatrix(),V=null}Z.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(i){if($=i,Z.isPresenting===!0)n0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(i){if(X=i,Z.isPresenting===!0)n0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function(i){H=i},this.getBaseLayer=function(){return q!==null?q:G},this.getBinding=function(){if(N===null&&R)N=new XRWebGLBinding(K,Q);return N},this.getFrame=function(){return F},this.getSession=function(){return K},this.setSession=async function(i){if(K=i,K!==null){if(k=J.getRenderTarget(),K.addEventListener("select",c),K.addEventListener("selectstart",c),K.addEventListener("selectend",c),K.addEventListener("squeeze",c),K.addEventListener("squeezestart",c),K.addEventListener("squeezeend",c),K.addEventListener("end",n),K.addEventListener("inputsourceschange",x),E.xrCompatible!==!0)await Q.makeXRCompatible();if(D=J.getPixelRatio(),J.getSize(P),!(R&&("createProjectionLayer"in XRWebGLBinding.prototype))){let _0={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:$};G=new XRWebGLLayer(K,Q,_0),K.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),z=new L9(G.framebufferWidth,G.framebufferHeight,{format:a9,type:T9,colorSpace:J.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let _0=null,b0=null,x0=null;if(E.depth)x0=E.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,_0=E.stencil?q8:B7,b0=E.stencil?j8:G8;let k0={colorFormat:Q.RGBA8,depthFormat:x0,scaleFactor:$};N=this.getBinding(),q=N.createProjectionLayer(k0),K.updateRenderState({layers:[q]}),J.setPixelRatio(1),J.setSize(q.textureWidth,q.textureHeight,!1),z=new L9(q.textureWidth,q.textureHeight,{format:a9,type:T9,depthTexture:new D8(q.textureWidth,q.textureHeight,b0,void 0,void 0,void 0,void 0,void 0,void 0,_0),stencilBuffer:E.stencil,colorSpace:J.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1,storeMultisampledDepthBuffer:q.ignoreDepthValues===!1,storeMultisampledStencilBuffer:q.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(Y),H=null,W=await K.requestReferenceSpace(X),A0.setContext(K),A0.start(),Z.isPresenting=!0,Z.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(K!==null)return K.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function x(i){for(let $0=0;$0<i.removed.length;$0++){let _0=i.removed[$0],b0=C.indexOf(_0);if(b0>=0)C[b0]=null,B[b0].disconnect(_0)}for(let $0=0;$0<i.added.length;$0++){let _0=i.added[$0],b0=C.indexOf(_0);if(b0===-1){for(let k0=0;k0<B.length;k0++)if(k0>=C.length){C.push(_0),b0=k0;break}else if(C[k0]===null){C[k0]=_0,b0=k0;break}if(b0===-1)break}let x0=B[b0];if(x0)x0.connect(_0)}}function X0(i,$0){if($0===null)i.matrixWorld.copy(i.matrix);else i.matrixWorld.multiplyMatrices($0.matrixWorld,i.matrix);i.matrixWorldInverse.copy(i.matrixWorld).invert()}this.updateCamera=function(i){if(K===null)return;let{near:$0,far:_0}=i;if(A.texture!==null){if(A.depthNear>0)$0=A.depthNear;if(A.depthFar>0)_0=A.depthFar}if(p.near=f.near=I.near=$0,p.far=f.far=I.far=_0,t!==p.near||T!==p.far)K.updateRenderState({depthNear:p.near,depthFar:p.far}),t=p.near,T=p.far;p.layers.mask=i.layers.mask|6,I.layers.mask=p.layers.mask&-5,f.layers.mask=p.layers.mask&-3;let b0=i.parent,x0=p.cameras;X0(p,b0);for(let k0=0;k0<x0.length;k0++)X0(x0[k0],b0);if(p.projectionMatrix.copy(I.projectionMatrix),p.projectionMatrixInverse.copy(I.projectionMatrixInverse),V===null&&i.isPerspectiveCamera)V={camera:i,fov:i.fov,zoom:i.zoom};u(i,p,b0)};function u(i,$0,_0){if(_0===null)i.matrix.copy($0.matrixWorld);else i.matrix.copy(_0.matrixWorld),i.matrix.invert(),i.matrix.multiply($0.matrixWorld);if(i.matrix.decompose(i.position,i.quaternion,i.scale),i.updateMatrixWorld(!0),i.projectionMatrix.copy($0.projectionMatrix),i.projectionMatrixInverse.copy($0.projectionMatrixInverse),i.isPerspectiveCamera)i.fov=s6*2*Math.atan(1/i.projectionMatrix.elements[5]),i.zoom=1}this.getCamera=function(){return p},this.getFoveation=function(){if(q===null&&G===null)return;return Y},this.setFoveation=function(i){if(Y=i,q!==null)q.fixedFoveation=i;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=i},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(p)},this.getCameraTexture=function(i){return O[i]};let r=null;function K0(i,$0){if(U=$0.getViewerPose(H||W),F=$0,U!==null){let _0=U.views;if(G!==null)J.setRenderTargetFramebuffer(z,G.framebuffer),J.setRenderTarget(z);let b0=!1;if(_0.length!==p.cameras.length)p.cameras.length=0,b0=!0;for(let t0=0;t0<_0.length;t0++){let d0=_0[t0],XJ=null;if(G!==null)XJ=G.getViewport(d0);else{let Y0=N.getViewSubImage(q,d0);if(XJ=Y0.viewport,t0===0)J.setRenderTargetTextures(z,Y0.colorTexture,Y0.depthStencilTexture),J.setRenderTarget(z)}let e=S[t0];if(e===void 0)e=new M9,e.layers.enable(t0),e.viewport=new jJ,S[t0]=e;if(e.matrix.fromArray(d0.transform.matrix),e.matrix.decompose(e.position,e.quaternion,e.scale),e.projectionMatrix.fromArray(d0.projectionMatrix),e.projectionMatrixInverse.copy(e.projectionMatrix).invert(),e.viewport.set(XJ.x,XJ.y,XJ.width,XJ.height),t0===0)p.matrix.copy(e.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale);if(b0===!0)p.cameras.push(e)}let x0=K.enabledFeatures;if(x0&&x0.includes("depth-sensing")&&K.depthUsage=="gpu-optimized"&&R){N=Z.getBinding();let t0=N.getDepthInformation(_0[0]);if(t0&&t0.isValid&&t0.texture)A.init(t0,K.renderState)}if(x0&&x0.includes("camera-access")&&R){J.state.unbindTexture(),N=Z.getBinding();for(let t0=0;t0<_0.length;t0++){let d0=_0[t0].camera;if(d0){let XJ=O[d0];if(!XJ)XJ=new MQ,O[d0]=XJ;let e=N.getCameraImage(d0);XJ.sourceTexture=e}}}}for(let _0=0;_0<B.length;_0++){let b0=C[_0],x0=B[_0];if(b0!==null&&x0!==void 0)x0.update(b0,$0,H||W)}if(r)r(i,$0);if($0.detectedPlanes)Z.dispatchEvent({type:"planesdetected",data:$0});F=null}let A0=new aX;A0.setAnimationLoop(K0),this.setAnimationLoop=function(i){r=i},this.dispose=function(){}}}var cq=new UJ,EY=new i0;EY.set(-1,0,0,0,1,0,0,0,1);function nq(J,Q){function Z(O,E){if(O.matrixAutoUpdate===!0)O.updateMatrix();E.value.copy(O.matrix)}function K(O,E){if(E.color.getRGB(O.fogColor.value,vK(J)),E.isFog)O.fogNear.value=E.near,O.fogFar.value=E.far;else if(E.isFogExp2)O.fogDensity.value=E.density}function $(O,E,k,z,B){if(E.isNodeMaterial)E.uniformsNeedUpdate=!1;else if(E.isMeshBasicMaterial)W(O,E);else if(E.isMeshLambertMaterial){if(W(O,E),E.envMap)O.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshToonMaterial)W(O,E),q(O,E);else if(E.isMeshPhongMaterial){if(W(O,E),N(O,E),E.envMap)O.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshStandardMaterial){if(W(O,E),G(O,E),E.isMeshPhysicalMaterial)F(O,E,B)}else if(E.isMeshMatcapMaterial)W(O,E),R(O,E);else if(E.isMeshDepthMaterial)W(O,E);else if(E.isMeshDistanceMaterial)W(O,E),A(O,E);else if(E.isMeshNormalMaterial)W(O,E);else if(E.isLineBasicMaterial){if(X(O,E),E.isLineDashedMaterial)Y(O,E)}else if(E.isPointsMaterial)H(O,E,k,z);else if(E.isSpriteMaterial)U(O,E);else if(E.isShadowMaterial)O.color.value.copy(E.color),O.opacity.value=E.opacity;else if(E.isShaderMaterial)E.uniformsNeedUpdate=!1}function W(O,E){if(O.opacity.value=E.opacity,E.color)O.diffuse.value.copy(E.color);if(E.emissive)O.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity);if(E.map)O.map.value=E.map,Z(E.map,O.mapTransform);if(E.alphaMap)O.alphaMap.value=E.alphaMap,Z(E.alphaMap,O.alphaMapTransform);if(E.bumpMap){if(O.bumpMap.value=E.bumpMap,Z(E.bumpMap,O.bumpMapTransform),O.bumpScale.value=E.bumpScale,E.side===U9)O.bumpScale.value*=-1}if(E.normalMap){if(O.normalMap.value=E.normalMap,Z(E.normalMap,O.normalMapTransform),O.normalScale.value.copy(E.normalScale),E.side===U9)O.normalScale.value.negate()}if(E.displacementMap)O.displacementMap.value=E.displacementMap,Z(E.displacementMap,O.displacementMapTransform),O.displacementScale.value=E.displacementScale,O.displacementBias.value=E.displacementBias;if(E.emissiveMap)O.emissiveMap.value=E.emissiveMap,Z(E.emissiveMap,O.emissiveMapTransform);if(E.specularMap)O.specularMap.value=E.specularMap,Z(E.specularMap,O.specularMapTransform);if(E.alphaTest>0)O.alphaTest.value=E.alphaTest;let k=Q.get(E),z=k.envMap,B=k.envMapRotation;if(z){if(O.envMap.value=z,O.envMapRotation.value.setFromMatrix4(cq.makeRotationFromEuler(B)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1)O.envMapRotation.value.premultiply(EY);O.reflectivity.value=E.reflectivity,O.ior.value=E.ior,O.refractionRatio.value=E.refractionRatio}if(E.lightMap)O.lightMap.value=E.lightMap,O.lightMapIntensity.value=E.lightMapIntensity,Z(E.lightMap,O.lightMapTransform);if(E.aoMap)O.aoMap.value=E.aoMap,O.aoMapIntensity.value=E.aoMapIntensity,Z(E.aoMap,O.aoMapTransform)}function X(O,E){if(O.diffuse.value.copy(E.color),O.opacity.value=E.opacity,E.map)O.map.value=E.map,Z(E.map,O.mapTransform)}function Y(O,E){O.dashSize.value=E.dashSize,O.totalSize.value=E.dashSize+E.gapSize,O.scale.value=E.scale}function H(O,E,k,z){if(O.diffuse.value.copy(E.color),O.opacity.value=E.opacity,O.size.value=E.size*k,O.scale.value=z*0.5,E.map)O.map.value=E.map,Z(E.map,O.uvTransform);if(E.alphaMap)O.alphaMap.value=E.alphaMap,Z(E.alphaMap,O.alphaMapTransform);if(E.alphaTest>0)O.alphaTest.value=E.alphaTest}function U(O,E){if(O.diffuse.value.copy(E.color),O.opacity.value=E.opacity,O.rotation.value=E.rotation,E.map)O.map.value=E.map,Z(E.map,O.mapTransform);if(E.alphaMap)O.alphaMap.value=E.alphaMap,Z(E.alphaMap,O.alphaMapTransform);if(E.alphaTest>0)O.alphaTest.value=E.alphaTest}function N(O,E){O.specular.value.copy(E.specular),O.shininess.value=Math.max(E.shininess,0.0001)}function q(O,E){if(E.gradientMap)O.gradientMap.value=E.gradientMap}function G(O,E){if(O.metalness.value=E.metalness,E.metalnessMap)O.metalnessMap.value=E.metalnessMap,Z(E.metalnessMap,O.metalnessMapTransform);if(O.roughness.value=E.roughness,E.roughnessMap)O.roughnessMap.value=E.roughnessMap,Z(E.roughnessMap,O.roughnessMapTransform);if(E.envMap)O.envMapIntensity.value=E.envMapIntensity}function F(O,E,k){if(O.ior.value=E.ior,E.diffuseRoughness>0){if(O.diffuseRoughness.value=E.diffuseRoughness,E.diffuseRoughnessMap)O.diffuseRoughnessMap.value=E.diffuseRoughnessMap,Z(E.diffuseRoughnessMap,O.diffuseRoughnessMapTransform)}if(E.sheen>0){if(O.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),O.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap)O.sheenColorMap.value=E.sheenColorMap,Z(E.sheenColorMap,O.sheenColorMapTransform);if(E.sheenRoughnessMap)O.sheenRoughnessMap.value=E.sheenRoughnessMap,Z(E.sheenRoughnessMap,O.sheenRoughnessMapTransform)}if(E.clearcoat>0){if(O.clearcoat.value=E.clearcoat,O.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap)O.clearcoatMap.value=E.clearcoatMap,Z(E.clearcoatMap,O.clearcoatMapTransform);if(E.clearcoatRoughnessMap)O.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,Z(E.clearcoatRoughnessMap,O.clearcoatRoughnessMapTransform);if(E.clearcoatNormalMap){if(O.clearcoatNormalMap.value=E.clearcoatNormalMap,Z(E.clearcoatNormalMap,O.clearcoatNormalMapTransform),O.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===U9)O.clearcoatNormalScale.value.negate()}}if(E.dispersion>0)O.dispersion.value=E.dispersion;if(E.retroreflectivity>0)O.retroreflectivity.value=E.retroreflectivity;if(E.iridescence>0){if(O.iridescence.value=E.iridescence,O.iridescenceIOR.value=E.iridescenceIOR,O.iridescenceThicknessMinimum.value=E.iridescenceThicknessMinimum,O.iridescenceThicknessMaximum.value=E.iridescenceThicknessMaximum,E.iridescenceMap)O.iridescenceMap.value=E.iridescenceMap,Z(E.iridescenceMap,O.iridescenceMapTransform);if(E.iridescenceThicknessMap)O.iridescenceThicknessMap.value=E.iridescenceThicknessMap,Z(E.iridescenceThicknessMap,O.iridescenceThicknessMapTransform)}if(E.transmission>0){if(O.transmission.value=E.transmission,O.transmissionSamplerMap.value=k.texture,O.transmissionSamplerSize.value.set(k.width,k.height),E.transmissionMap)O.transmissionMap.value=E.transmissionMap,Z(E.transmissionMap,O.transmissionMapTransform);if(O.thickness.value=E.thickness,E.thicknessMap)O.thicknessMap.value=E.thicknessMap,Z(E.thicknessMap,O.thicknessMapTransform);O.attenuationDistance.value=E.attenuationDistance,O.attenuationColor.value.copy(E.attenuationColor)}if(E.anisotropy>0){if(O.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap)O.anisotropyMap.value=E.anisotropyMap,Z(E.anisotropyMap,O.anisotropyMapTransform)}if(O.specularIntensity.value=E.specularIntensity,O.specularColor.value.copy(E.specularColor),E.specularColorMap)O.specularColorMap.value=E.specularColorMap,Z(E.specularColorMap,O.specularColorMapTransform);if(E.specularIntensityMap)O.specularIntensityMap.value=E.specularIntensityMap,Z(E.specularIntensityMap,O.specularIntensityMapTransform)}function R(O,E){if(E.matcap)O.matcap.value=E.matcap}function A(O,E){let k=Q.get(E).light;O.referencePosition.value.setFromMatrixPosition(k.matrixWorld),O.nearDistance.value=k.shadow.camera.near,O.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:K,refreshMaterialUniforms:$}}function sq(J,Q,Z,K){let $={},W={};function X(k,z){let B=z.program;K.uniformBlockBinding(k,B,$[k.id])}function Y(k,z){let B=$[k.id];if(B===void 0)R(k),B=H(k),$[k.id]=B,k.addEventListener("dispose",O);let C=z.program;K.updateUBOMapping(k,C);let P=Q.render.frame;if(W[k.id]!==P)U(k),W[k.id]=P}function H(k){let z=J.createBuffer(),B=k.__size,C=k.usage;return J.bindBuffer(J.UNIFORM_BUFFER,z),J.bufferData(J.UNIFORM_BUFFER,B,C),J.bindBuffer(J.UNIFORM_BUFFER,null),z}function U(k){let z=$[k.id],B=k.uniforms,C=k.__cache;J.bindBuffer(J.UNIFORM_BUFFER,z);for(let P=0,D=B.length;P<D;P++){let V=B[P];if(Array.isArray(V))for(let I=0,f=V.length;I<f;I++)N(V[I],P,I,C);else N(V,P,0,C)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function N(k,z,B,C){if(G(k,z,B,C)===!0){let{__offset:P,value:D}=k;if(Array.isArray(D)){let V=0;for(let I=0;I<D.length;I++){let f=D[I],S=A(f,!0);q(f,k.__data,V),V+=S.storage/Float32Array.BYTES_PER_ELEMENT}}else q(D,k.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,P,k.__data)}}function q(k,z,B){if(typeof k==="number"||typeof k==="boolean")z[B]=k;else if(k.isMatrix3)z[B]=k.elements[0],z[B+1]=k.elements[1],z[B+2]=k.elements[2],z[B+3]=0,z[B+4]=k.elements[3],z[B+5]=k.elements[4],z[B+6]=k.elements[5],z[B+7]=0,z[B+8]=k.elements[6],z[B+9]=k.elements[7],z[B+10]=k.elements[8],z[B+11]=0;else if(ArrayBuffer.isView(k))z.set(k.subarray(0,z.length-B),B);else k.toArray(z,B)}function G(k,z,B,C){let P=k.value,D=z+"_"+B;if(Array.isArray(P)){if(C[D]===void 0)C[D]=[];let V=C[D],I=!1;for(let f=0;f<P.length;f++)if(F(P[f],V,f)===!0)I=!0;return I}return F(P,C,D)}function F(k,z,B){if(z[B]===void 0){if(typeof k==="number"||typeof k==="boolean")z[B]=k;else if(ArrayBuffer.isView(k))z[B]=k.slice();else z[B]=k.clone();return!0}else{let C=z[B];if(typeof k==="number"||typeof k==="boolean"){if(C!==k)return z[B]=k,!0}else if(ArrayBuffer.isView(k))return!0;else if(C.equals(k)===!1)return C.copy(k),!0}return!1}function R(k){let z=k.uniforms,B=0,C=16;for(let D=0,V=z.length;D<V;D++){let I=Array.isArray(z[D])?z[D]:[z[D]];for(let f=0,S=I.length;f<S;f++){let p=I[f],t=Array.isArray(p.value)?p.value:[p.value],T=Array.isArray(z[D])||Array.isArray(p.value),c=B;for(let x=0,X0=t.length;x<X0;x++){let u=t[x],r=A(u,T),K0=B%C,A0=K0%r.boundary,i=K0+A0;if(B+=A0,i!==0&&C-i<r.storage)B+=C-i;if(x===0)c=B;B+=r.storage}let n=p.type==="int"?Int32Array:p.type==="uint"?Uint32Array:Float32Array;p.__data=new n((B-c)/Float32Array.BYTES_PER_ELEMENT),p.__offset=c}}let P=B%C;if(P>0)B+=C-P;return k.__size=B,k.__cache={},this}function A(k,z){let B={boundary:0,storage:0};if(typeof k==="number"||typeof k==="boolean")B.boundary=4,B.storage=4;else if(k.isVector2)B.boundary=8,B.storage=8;else if(k.isVector3||k.isColor)B.boundary=16,B.storage=12;else if(k.isVector4)B.boundary=16,B.storage=16;else if(k.isMatrix3)B.boundary=16,B.storage=48;else if(k.isMatrix4)B.boundary=16,B.storage=64;else if(k.isTexture)n0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(k))B.boundary=16,B.storage=k.byteLength;else n0("WebGLRenderer: Unsupported uniform value type.",k);if(z===!0)B.boundary=16,B.storage=Math.ceil(B.storage/16)*16;return B}function O(k){let z=k.target;z.removeEventListener("dispose",O),J.deleteBuffer($[z.id]),delete $[z.id],delete W[z.id]}function E(){for(let k in $)J.deleteBuffer($[k]);$={},W={}}return{bind:X,update:Y,dispose:E}}var iq=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),b9=null;function oq(){if(b9===null)b9=new EQ(iq,16,16,v8,y9),b9.name="DFG_LUT",b9.minFilter=V9,b9.magFilter=V9,b9.wrapS=e6,b9.wrapT=e6,b9.generateMipmaps=!1,b9.needsUpdate=!0;return b9}class Q${constructor(J={}){let{canvas:Q=UX(),context:Z=null,depth:K=!0,stencil:$=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:q=!1,outputBufferType:G=T9}=J;this.isWebGLRenderer=!0;let F;if(Z!==null){if(typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");F=Z.getContextAttributes().alpha}else F=W;let R=G,A=new Set([bZ,hZ,fZ]),O=new Set([T9,G8,o7,j8,vZ,yZ]),E=new Uint32Array(4),k=new Int32Array(4),z={textures:[],min:[],max:[],resolution:[]},B=null,C=null,P=[],D=[],V=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=v9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,f=!1,S=null,p=null,t=null,T=null;this._outputColorSpace=B9;let c=0,n=0,x=null,X0=-1,u=null,r=new jJ,K0=new jJ,A0=null,i=new y0(0),$0=0,_0=Q.width,b0=Q.height,x0=1,k0=null,YJ=null,t0=new jJ(0,0,_0,b0),d0=new jJ(0,0,_0,b0),XJ=!1,e=new T8,Y0=new OQ,N0=!1,C0=!1,z0=new UJ,m0=new v,f0=new jJ,JJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},QJ=!1;function EJ(){return x===null?x0:1}let y=Z;function xJ(L,j){return Q.getContext(L,j)}let a0,yJ,D0,RJ,u0,s0,gJ,_,M,h,Q0,J0,U0,E0,l,o,G0,w,s,d,W0,H0,O0;try{let L={alpha:!0,depth:K,stencil:$,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${FW}`);if(Q.addEventListener("webglcontextlost",V0,!1),Q.addEventListener("webglcontextrestored",g0,!1),Q.addEventListener("webglcontextcreationerror",r0,!1),y===null){if(y=xJ("webgl2",L),y===null)if(xJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}h0()}catch(L){throw Q.removeEventListener("webglcontextlost",V0,!1),Q.removeEventListener("webglcontextrestored",g0,!1),Q.removeEventListener("webglcontextcreationerror",r0,!1),c0("WebGLRenderer: "+L.message),L}function h0(){if(a0=new XG(y),a0.init(),W0=new lq(y,a0),yJ=new oN(y,a0,J,W0),D0=new pq(y,a0),yJ.reversedDepthBuffer&&q)D0.buffers.depth.setReversed(!0);p=y.createFramebuffer(),t=y.createFramebuffer(),T=y.createFramebuffer(),RJ=new UG(y),u0=new _q,s0=new mq(y,a0,D0,u0,yJ,W0,RJ),gJ=new WG(I),_=new GU(y),H0=new sN(y,_),M=new YG(y,_,RJ,H0),h=new GG(y,M,_,H0,RJ),w=new NG(y,yJ,s0),l=new aN(u0),Q0=new Cq(I,gJ,a0,yJ,H0,l),J0=new nq(I,u0),U0=new Iq,E0=new yq(a0),G0=new nN(I,gJ,D0,h,F,Y),o=new gq(I,h,yJ),O0=new sq(y,RJ,yJ,D0),s=new iN(y,a0,RJ),d=new HG(y,a0,RJ),RJ.programs=Q0.programs,I.capabilities=yJ,I.extensions=a0,I.properties=u0,I.renderLists=U0,I.shadowMap=o,I.state=D0,I.info=RJ}if(R!==T9)V=new EG(R,Q.width,Q.height,X,K,$);let j0=new qY(I,y);this.xr=j0,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){let L=a0.get("WEBGL_lose_context");if(L)L.loseContext()},this.forceContextRestore=function(){let L=a0.get("WEBGL_lose_context");if(L)L.restoreContext()},this.getPixelRatio=function(){return x0},this.setPixelRatio=function(L){if(L===void 0)return;x0=L,this.setSize(_0,b0,!1)},this.getSize=function(L){return L.set(_0,b0)},this.setSize=function(L,j,m=!0){if(j0.isPresenting){n0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(_0=L,b0=j,Q.width=Math.floor(L*x0),Q.height=Math.floor(j*x0),m===!0)Q.style.width=L+"px",Q.style.height=j+"px";if(V!==null)V.setSize(Q.width,Q.height);this.setViewport(0,0,L,j)},this.getDrawingBufferSize=function(L){return L.set(_0*x0,b0*x0).floor()},this.setDrawingBufferSize=function(L,j,m){_0=L,b0=j,x0=m,Q.width=Math.floor(L*m),Q.height=Math.floor(j*m),this.setViewport(0,0,L,j)},this.setEffects=function(L){if(R===T9){c0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let j=0;j<L.length;j++)if(L[j].isOutputPass===!0){n0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(r)},this.getViewport=function(L){return L.copy(t0)},this.setViewport=function(L,j,m,b){if(L.isVector4)t0.set(L.x,L.y,L.z,L.w);else t0.set(L,j,m,b);D0.viewport(r.copy(t0).multiplyScalar(EJ()).round())},this.getScissor=function(L){return L.copy(d0)},this.setScissor=function(L,j,m,b){if(L.isVector4)d0.set(L.x,L.y,L.z,L.w);else d0.set(L,j,m,b);D0.scissor(K0.copy(d0).multiplyScalar(EJ()).round())},this.getScissorTest=function(){return XJ},this.setScissorTest=function(L){D0.setScissorTest(XJ=L)},this.setOpaqueSort=function(L){k0=L},this.setTransparentSort=function(L){YJ=L},this.getClearColor=function(L){return L.copy(G0.getClearColor())},this.setClearColor=function(){G0.setClearColor(...arguments)},this.getClearAlpha=function(){return G0.getClearAlpha()},this.setClearAlpha=function(){G0.setClearAlpha(...arguments)},this.clear=function(L=!0,j=!0,m=!0){let b=0;if(L){let g=!1;if(x!==null){let F0=x.texture.format;g=A.has(F0)}if(g){let F0=x.texture.type,P0=O.has(F0),q0=G0.getClearColor(),L0=G0.getClearAlpha(),S0=q0.r,o0=q0.g,KJ=q0.b;if(P0)E[0]=S0,E[1]=o0,E[2]=KJ,E[3]=L0,y.clearBufferuiv(y.COLOR,0,E);else k[0]=S0,k[1]=o0,k[2]=KJ,k[3]=L0,y.clearBufferiv(y.COLOR,0,k)}else b|=y.COLOR_BUFFER_BIT}if(j)b|=y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(m)b|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(b!==0)y.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),S=L},this.dispose=function(){Q.removeEventListener("webglcontextlost",V0,!1),Q.removeEventListener("webglcontextrestored",g0,!1),Q.removeEventListener("webglcontextcreationerror",r0,!1),G0.dispose(),U0.dispose(),E0.dispose(),s0.dispose(),u0.dispose(),gJ.dispose(),h.dispose(),M.dispose(),H0.dispose(),O0.dispose(),Q0.dispose(),j0.dispose(),j0.removeEventListener("sessionstart",L$),j0.removeEventListener("sessionend",k$),L8.stop()};function V0(L){L.preventDefault(),p7("WebGLRenderer: Context Lost."),f=!0}function g0(){p7("WebGLRenderer: Context Restored."),f=!1;let L=RJ.autoReset,j=o.enabled,m=o.autoUpdate,b=o.needsUpdate,g=o.type;h0(),RJ.autoReset=L,o.enabled=j,o.autoUpdate=m,o.needsUpdate=b,o.type=g}function r0(L){c0("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function B0(L){let j=L.target;j.removeEventListener("dispose",B0),LJ(j)}function LJ(L){uJ(L),u0.remove(L)}function uJ(L){let j=u0.get(L).programs;if(j!==void 0){if(j.forEach(function(m){Q0.releaseProgram(m)}),L.isShaderMaterial)Q0.releaseShaderCache(L)}}this.renderBufferDirect=function(L,j,m,b,g,F0){if(j===null)j=JJ;let P0=g.isMesh&&g.matrixWorld.determinantAffine()<0,q0=JH(L,j,m,b,g);D0.setMaterial(b,P0);let L0=m.index,S0=1;if(b.wireframe===!0){if(L0=M.getWireframeAttribute(m),L0===void 0)return;S0=2}let o0=m.drawRange,KJ=m.attributes.position,I0=o0.start*S0,$J=(o0.start+o0.count)*S0;if(F0!==null)I0=Math.max(I0,F0.start*S0),$J=Math.min($J,(F0.start+F0.count)*S0);if(L0!==null)I0=Math.max(I0,0),$J=Math.min($J,L0.count);else if(KJ!==void 0&&KJ!==null)I0=Math.max(I0,0),$J=Math.min($J,KJ.count);let fJ=$J-I0;if(fJ<0||fJ===1/0)return;H0.setup(g,b,q0,m,L0);let PJ,zJ=s;if(L0!==null)PJ=_.get(L0),zJ=d,zJ.setIndex(PJ);if(g.isMesh)if(b.wireframe===!0)D0.setLineWidth(b.wireframeLinewidth*EJ()),zJ.setMode(y.LINES);else zJ.setMode(y.TRIANGLES);else if(g.isLine){let tJ=b.linewidth;if(tJ===void 0)tJ=1;if(D0.setLineWidth(tJ*EJ()),g.isLineSegments)zJ.setMode(y.LINES);else if(g.isLineLoop)zJ.setMode(y.LINE_LOOP);else zJ.setMode(y.LINE_STRIP)}else if(g.isPoints)zJ.setMode(y.POINTS);else if(g.isSprite)zJ.setMode(y.TRIANGLES);if(g.isBatchedMesh)if(!a0.get("WEBGL_multi_draw")){let{_multiDrawStarts:tJ,_multiDrawCounts:T0,_multiDrawCount:W9}=g,FJ=L0?_.get(L0).bytesPerElement:1,k8=u0.get(b).currentProgram.getUniforms();for(let eJ=0;eJ<W9;eJ++)k8.setValue(y,"_gl_DrawID",eJ),zJ.render(tJ[eJ]/FJ,T0[eJ])}else zJ.renderMultiDraw(g._multiDrawStarts,g._multiDrawCounts,g._multiDrawCount);else if(g.isInstancedMesh)zJ.renderInstances(I0,fJ,g.count);else if(m.isInstancedBufferGeometry){let tJ=m._maxInstanceCount!==void 0?m._maxInstanceCount:1/0,T0=Math.min(m.instanceCount,tJ);zJ.renderInstances(I0,fJ,T0)}else zJ.render(I0,fJ)};function p9(L,j,m,b){if(S!==null&&L.isNodeMaterial)S.setObject(b,L);if(N0===!0)l.setState(L,m,!1);if(L.transparent===!0&&L.side===aJ&&L.forceSinglePass===!1)L.side=U9,L.needsUpdate=!0,_7(L,j,b),L.side=R7,L.needsUpdate=!0,_7(L,j,b),L.side=aJ;else _7(L,j,b)}this.compile=function(L,j,m=null){if(m===null)m=L;if(S!==null)S.renderStart(L,j,m);if(C=E0.get(m),C.init(j),D.push(C),m.traverseVisible(function(g){if(g.isLight&&g.layers.test(j.layers)){if(C.pushLight(g),g.castShadow)C.pushShadow(g)}}),L!==m)L.traverseVisible(function(g){if(g.isLight&&g.layers.test(j.layers)){if(C.pushLight(g),g.castShadow)C.pushShadow(g)}});if(C.setupLights(),S!==null)S.updateLights(C.state.lightsArray);if(C0=this.localClippingEnabled,N0=l.init(this.clippingPlanes,C0),N0===!0)l.setGlobalState(this.clippingPlanes,j);if(S!==null)o.render(C.state.shadowsArray,m,j);let b=new Set;if(L.traverse(function(g){if(!(g.isMesh||g.isPoints||g.isLine||g.isSprite))return;let F0=g.material;if(F0)if(Array.isArray(F0))for(let P0=0;P0<F0.length;P0++){let q0=F0[P0];p9(q0,m,j,g),b.add(q0)}else p9(F0,m,j,g),b.add(F0)}),C=D.pop(),S!==null)S.renderEnd();return b},this.compileAsync=function(L,j,m=null){let b=this.compile(L,j,m);return new Promise((g)=>{function F0(){if(b.forEach(function(P0){let L0=u0.get(P0).currentProgram;if(L0===void 0||L0.isReady())b.delete(P0)}),b.size===0){g(L);return}setTimeout(F0,10)}if(a0.get("KHR_parallel_shader_compile")!==null)F0();else setTimeout(F0,10)})};let lQ=null;function tY(L){if(lQ)lQ(L)}function L$(){L8.stop()}function k$(){L8.start()}let L8=new aX;if(L8.setAnimationLoop(tY),typeof self<"u")L8.setContext(self);this.setAnimationLoop=function(L){lQ=L,j0.setAnimationLoop(L),L===null?L8.stop():L8.start()},j0.addEventListener("sessionstart",L$),j0.addEventListener("sessionend",k$),this.render=function(L,j){if(j!==void 0&&j.isCamera!==!0){c0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;if(S!==null)S.renderStart(L,j);let m=j0.enabled===!0&&j0.isPresenting===!0,b=V!==null&&(x===null||m)&&V.begin(I,x);if(L.matrixWorldAutoUpdate===!0)L.updateMatrixWorld();if(j.parent===null&&j.matrixWorldAutoUpdate===!0)j.updateMatrixWorld();if(j0.enabled===!0&&j0.isPresenting===!0&&(V===null||V.isCompositing()===!1)){if(j0.cameraAutoUpdate===!0)j0.updateCamera(j);j=j0.getCamera()}if(L.isScene===!0)L.onBeforeRender(I,L,j,x);if(C=E0.get(L,D.length),C.init(j),C.state.textureUnits=s0.getTextureUnits(),D.push(C),z0.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),j.isArrayCamera)Y0.setFromArrayCamera(j);else e.setFromProjectionMatrix(z0,LK,j.reversedDepth);if(C0=this.localClippingEnabled,N0=l.init(this.clippingPlanes,C0),B=U0.get(L,P.length),B.init(),P.push(B),this.info.render.frame++,j0.enabled===!0&&j0.isPresenting===!0){let P0=I.xr.getDepthSensingMesh();if(P0!==null)uQ(P0,j,-1/0,I.sortObjects)}if(uQ(L,j,0,I.sortObjects),B.finish(),S!==null)S.updateLights(C.state.lightsArray);if(I.sortObjects===!0)B.sort(k0,YJ);if(QJ=j0.enabled===!1||j0.isPresenting===!1||j0.hasDepthSensing()===!1,QJ)G0.addToRenderList(B,L);if(this.info.autoReset===!0)this.info.reset();if(N0===!0)l.beginShadows();let g=C.state.shadowsArray;if(o.render(g,L,j),N0===!0)l.endShadows();if((b&&V.hasRenderPass())===!1){let{opaque:P0,transmissive:q0}=B;if(C.setupLights(),j.isArrayCamera){let L0=j.cameras;if(q0.length>0)for(let S0=0,o0=L0.length;S0<o0;S0++){let KJ=L0[S0];A$(P0,q0,L,KJ)}if(QJ)G0.render(L);for(let S0=0,o0=L0.length;S0<o0;S0++){let KJ=L0[S0];z$(B,L,KJ,KJ.viewport)}}else{if(q0.length>0)A$(P0,q0,L,j);if(QJ)G0.render(L);z$(B,L,j)}}if(x!==null&&n===0)s0.updateMultisampleRenderTarget(x),s0.updateRenderTargetMipmap(x);if(b)V.end(I);if(L.isScene===!0)L.onAfterRender(I,L,j);if(H0.resetDefaultState(),X0=-1,u=null,D.pop(),D.length>0){if(C=D[D.length-1],s0.setTextureUnits(C.state.textureUnits),N0===!0)l.setGlobalState(I.clippingPlanes,C.state.camera)}else C=null;if(P.pop(),P.length>0)B=P[P.length-1];else B=null;if(S!==null)S.renderEnd()};function uQ(L,j,m,b){if(L.visible===!1)return;if(L.layers.test(j.layers)){if(L.isGroup)m=L.renderOrder;else if(L.isLOD){if(L.autoUpdate===!0)L.update(j)}else if(L.isLight){if(C.pushLight(L),L.castShadow)C.pushShadow(L)}else if(L.isSprite){let P0=j.isArrayCamera?Y0:e;if(!L.frustumCulled||L.intersectsFrustum(P0)){if(b)f0.setFromMatrixPosition(L.matrixWorld).applyMatrix4(z0);let q0=h.update(L),L0=L.material;if(L0.visible)B.push(L,q0,L0,m,f0.z,null,j)}}else if(L.isMesh||L.isLine||L.isPoints){let P0=j.isArrayCamera?Y0:e;if(!L.frustumCulled||L.intersectsFrustum(P0)){let q0=h.update(L),L0=L.material;if(b){if(L.boundingSphere!==void 0){if(L.boundingSphere===null)L.computeBoundingSphere();f0.copy(L.boundingSphere.center)}else{if(q0.boundingSphere===null)q0.computeBoundingSphere();f0.copy(q0.boundingSphere.center)}f0.applyMatrix4(L.matrixWorld).applyMatrix4(z0)}if(Array.isArray(L0)){let S0=q0.groups;for(let o0=0,KJ=S0.length;o0<KJ;o0++){let I0=S0[o0],$J=L0[I0.materialIndex];if($J&&$J.visible)B.push(L,q0,$J,m,f0.z,I0,j)}}else if(L0.visible)B.push(L,q0,L0,m,f0.z,null,j)}}}let F0=L.children;for(let P0=0,q0=F0.length;P0<q0;P0++)uQ(F0[P0],j,m,b)}function z$(L,j,m,b){let{opaque:g,transmissive:F0,transparent:P0}=L;if(C.setupLightsView(m),N0===!0)l.setGlobalState(I.clippingPlanes,m);if(b)D0.viewport(r.copy(b));if(g.length>0)M6(g,j,m);if(F0.length>0)M6(F0,j,m);if(P0.length>0)M6(P0,j,m);D0.buffers.depth.setTest(!0),D0.buffers.depth.setMask(!0),D0.buffers.color.setMask(!0),D0.setPolygonOffset(!1)}function A$(L,j,m,b){if((m.isScene===!0?m.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[b.id]===void 0){let I0=a0.has("EXT_color_buffer_half_float")||a0.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[b.id]=new L9(1,1,{generateMipmaps:!0,type:I0?y9:T9,minFilter:N8,samples:Math.max(4,yJ.samples),stencilBuffer:$,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:WJ.workingColorSpace})}let F0=C.state.transmissionRenderTarget[b.id],P0=b.viewport||r;F0.setSize(P0.z*I.transmissionResolutionScale,P0.w*I.transmissionResolutionScale);let q0=I.getRenderTarget(),L0=I.getActiveCubeFace(),S0=I.getActiveMipmapLevel();if(I.setRenderTarget(F0),I.getClearColor(i),$0=I.getClearAlpha(),$0<1)I.setClearColor(16777215,0.5);if(I.clear(),QJ)G0.render(m);let o0=I.toneMapping;I.toneMapping=v9;let KJ=b.viewport;if(b.viewport!==void 0)b.viewport=void 0;if(C.setupLightsView(b),N0===!0)l.setGlobalState(I.clippingPlanes,b);if(M6(L,m,b),s0.updateMultisampleRenderTarget(F0),s0.updateRenderTargetMipmap(F0),a0.has("WEBGL_multisampled_render_to_texture")===!1){let I0=!1;for(let $J=0,fJ=j.length;$J<fJ;$J++){let PJ=j[$J],{object:zJ,geometry:tJ,material:T0,group:W9}=PJ;if(T0.side===aJ&&zJ.layers.test(b.layers)){let FJ=T0.side;T0.side=U9,T0.needsUpdate=!0,C$(zJ,m,b,tJ,T0,W9),T0.side=FJ,T0.needsUpdate=!0,I0=!0}}if(I0===!0)s0.updateMultisampleRenderTarget(F0),s0.updateRenderTargetMipmap(F0)}if(I.setRenderTarget(q0,L0,S0),I.setClearColor(i,$0),KJ!==void 0)b.viewport=KJ;I.toneMapping=o0}function M6(L,j,m){let b=j.isScene===!0?j.overrideMaterial:null;for(let g=0,F0=L.length;g<F0;g++){let P0=L[g],{object:q0,geometry:L0,group:S0}=P0,o0=P0.material;if(o0.allowOverride===!0&&b!==null)o0=b;if(q0.layers.test(m.layers))C$(q0,j,m,L0,o0,S0)}}function C$(L,j,m,b,g,F0){if(S!==null&&g.isNodeMaterial)S.setObject(L,g);if(L.onBeforeRender(I,j,m,b,g,F0),L.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),g.onBeforeRender(I,j,m,b,L,F0),g.transparent===!0&&g.side===aJ&&g.forceSinglePass===!1)g.side=U9,g.needsUpdate=!0,I.renderBufferDirect(m,j,b,g,L,F0),g.side=R7,g.needsUpdate=!0,I.renderBufferDirect(m,j,b,g,L,F0),g.side=aJ;else I.renderBufferDirect(m,j,b,g,L,F0);L.onAfterRender(I,j,m,b,g,F0)}function _$(L){let j=0;for(let m of L)if(m.texture!==null)j++;return j}function _7(L,j,m){if(j.isScene!==!0)j=JJ;let b=u0.get(L),g=C.state.lights,F0=C.state.shadowsArray,P0=g.state.version,q0=Q0.getParameters(L,g.state,F0,j,m,C.state.lightProbeGridArray),L0=Q0.getProgramCacheKey(q0),S0=b.programs;b.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?j.environment:null,b.fog=j.fog;let o0=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;if(b.envMap=gJ.get(L.envMap||b.environment,o0),b.envMapRotation=b.environment!==null&&L.envMap===null?j.environmentRotation:L.envMapRotation,S0===void 0)L.addEventListener("dispose",B0),S0=new Map,b.programs=S0,b.programVariants=new Map;let KJ=S0.get(L0);if(KJ!==void 0){if(b.currentProgram===KJ&&b.lightsStateVersion===P0)return I$(L,q0),KJ}else{if(q0.uniforms=Q0.getUniforms(L),S!==null&&L.isNodeMaterial)S.build(L,m,q0);L.onBeforeCompile(q0,I),KJ=Q0.acquireProgram(q0,L0),S0.set(L0,KJ),b.uniforms=q0.uniforms}let I0=b.uniforms;if(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)I0.clippingPlanes=l.uniform;if(I$(L,q0),b.needsLights=ZH(L),b.lightsStateVersion=P0,b.needsLights)I0.ambientLightColor.value=g.state.ambient,I0.lightProbe.value=g.state.probe,I0.sunLights.value=g.state.sun,I0.sunLightShadows.value=g.state.sunShadow,I0.directionalLights.value=g.state.directional,I0.directionalLightShadows.value=g.state.directionalShadow,I0.spotLights.value=g.state.spot,I0.spotLightShadows.value=g.state.spotShadow,I0.rectAreaLights.value=g.state.rectArea,I0.ltc_1.value=g.state.rectAreaLTC1,I0.ltc_2.value=g.state.rectAreaLTC2,I0.pointLights.value=g.state.point,I0.pointLightShadows.value=g.state.pointShadow,I0.hemisphereLights.value=g.state.hemi,I0.sunShadowMatrix.value=g.state.sunShadowMatrix,I0.sunShadowCascade.value=g.state.sunShadowCascade,I0.directionalShadowMatrix.value=g.state.directionalShadowMatrix,I0.spotLightMatrix.value=g.state.spotLightMatrix,I0.spotLightMap.value=g.state.spotLightMap,I0.pointShadowMatrix.value=g.state.pointShadowMatrix;return b.numLightProbeGrids=_$(C.state.lightProbeGridArray),b.currentProgram=KJ,b.uniformsList=null,KJ}function eY(L,j,m,b,g){let F0=u0.get(L),P0=F0.currentProgram.id+","+b+","+g,q0=F0.programVariants.get(P0);if(q0===void 0)q0=_7(L,j,m),F0.programVariants.set(P0,q0);else F0.currentProgram=q0,F0.uniformsList=null,F0.outputColorSpace=b,F0.toneMapping=g;return q0}function P$(L){if(L.uniformsList===null){let j=L.currentProgram.getUniforms();L.uniformsList=G6.seqWithValue(j.seq,L.uniforms)}return L.uniformsList}function I$(L,j){let m=u0.get(L);m.outputColorSpace=j.outputColorSpace,m.batching=j.batching,m.batchingColor=j.batchingColor,m.instancing=j.instancing,m.instancingColor=j.instancingColor,m.instancingMorph=j.instancingMorph,m.skinning=j.skinning,m.morphTargets=j.morphTargets,m.morphNormals=j.morphNormals,m.morphColors=j.morphColors,m.morphTargetsCount=j.morphTargetsCount,m.numClippingPlanes=j.numClippingPlanes,m.numIntersection=j.numClipIntersection,m.vertexAlphas=j.vertexAlphas,m.vertexTangents=j.vertexTangents,m.toneMapping=j.toneMapping}function JH(L,j,m,b,g){if(j.isScene!==!0)j=JJ;s0.resetTextureUnits();let F0=j.fog,P0=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?j.environment:null,q0=x===null?I.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:WJ.workingColorSpace,L0=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,S0=gJ.get(b.envMap||P0,L0),o0=b.vertexColors===!0&&!!m.attributes.color&&m.attributes.color.itemSize===4,KJ=!!m.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),I0=!!m.morphAttributes.position,$J=!!m.morphAttributes.normal,fJ=!!m.morphAttributes.color,PJ=v9;if(b.toneMapped){if(x===null||x.isXRRenderTarget===!0)PJ=I.toneMapping}let zJ=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,tJ=zJ!==void 0?zJ.length:0,T0=u0.get(b),W9=C.state.lights;if(N0===!0){if(C0===!0||L!==u){let wJ=L===u&&b.id===X0;l.setState(b,L,wJ)}}let FJ=!1,k8=!1;if(b.version===T0.__version){if(T0.needsLights&&T0.lightsStateVersion!==W9.state.version)FJ=!0;else if(g.isBatchedMesh&&T0.batching===!1)FJ=!0;else if(!g.isBatchedMesh&&T0.batching===!0)FJ=!0;else if(g.isBatchedMesh&&T0.batchingColor===!0&&g._colorsTexture===null)FJ=!0;else if(g.isBatchedMesh&&T0.batchingColor===!1&&g._colorsTexture!==null)FJ=!0;else if(g.isInstancedMesh&&T0.instancing===!1)FJ=!0;else if(!g.isInstancedMesh&&T0.instancing===!0)FJ=!0;else if(g.isSkinnedMesh&&T0.skinning===!1)FJ=!0;else if(!g.isSkinnedMesh&&T0.skinning===!0)FJ=!0;else if(g.isInstancedMesh&&T0.instancingColor===!0&&g.instanceColor===null)FJ=!0;else if(g.isInstancedMesh&&T0.instancingColor===!1&&g.instanceColor!==null)FJ=!0;else if(g.isInstancedMesh&&T0.instancingMorph===!0&&g.morphTexture===null)FJ=!0;else if(g.isInstancedMesh&&T0.instancingMorph===!1&&g.morphTexture!==null)FJ=!0;else if(T0.envMap!==S0)FJ=!0;else if(b.fog===!0&&T0.fog!==F0)FJ=!0;else if(T0.numClippingPlanes!==void 0&&(T0.numClippingPlanes!==l.numPlanes||T0.numIntersection!==l.numIntersection))FJ=!0;else if(T0.vertexAlphas!==o0)FJ=!0;else if(T0.vertexTangents!==KJ)FJ=!0;else if(T0.morphTargets!==I0)FJ=!0;else if(T0.morphNormals!==$J)FJ=!0;else if(T0.morphColors!==fJ)FJ=!0;else if(T0.morphTargetsCount!==tJ)FJ=!0;else if(T0.numLightProbeGrids!==_$(C.state.lightProbeGridArray))FJ=!0;else if(T0.outputColorSpace!==q0||T0.toneMapping!==PJ)k8=!0}else FJ=!0,T0.__version=b.version;let eJ=T0.currentProgram;if(FJ===!0||k8===!0){if(eJ=k8===!0?eY(b,j,g,q0,PJ):_7(b,j,g),S&&b.isNodeMaterial)S.onUpdateProgram(b,eJ,T0)}let V6=!1,K8=!1,z8=!1,HJ=eJ.getUniforms(),oJ=T0.uniforms;if(D0.useProgram(eJ.program))V6=!0,K8=!0,z8=!0;if(b.id!==X0)X0=b.id,K8=!0;if(V6||u!==L){if(D0.buffers.depth.getReversed()&&L.reversedDepth!==!0)L._reversedDepth=!0,L.updateProjectionMatrix();HJ.setValue(y,"projectionMatrix",L.projectionMatrix),HJ.setValue(y,"viewMatrix",L.matrixWorldInverse);let dJ=HJ.map.cameraPosition;if(dJ!==void 0)dJ.setValue(y,m0.setFromMatrixPosition(L.matrixWorld));if(yJ.logarithmicDepthBuffer)HJ.setValue(y,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2));if(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)HJ.setValue(y,"isOrthographic",L.isOrthographicCamera===!0);if(u!==L)u=L,K8=!0,z8=!0}if(T0.needsLights){if(W9.state.sunShadowMap.length>0)HJ.setValue(y,"sunShadowMap",W9.state.sunShadowMap,s0);if(W9.state.directionalShadowMap.length>0)HJ.setValue(y,"directionalShadowMap",W9.state.directionalShadowMap,s0);if(W9.state.spotShadowMap.length>0)HJ.setValue(y,"spotShadowMap",W9.state.spotShadowMap,s0);if(W9.state.pointShadowMap.length>0)HJ.setValue(y,"pointShadowMap",W9.state.pointShadowMap,s0)}if(g.isSkinnedMesh){HJ.setOptional(y,g,"bindMatrix"),HJ.setOptional(y,g,"bindMatrixInverse");let wJ=g.skeleton;if(wJ){if(wJ.boneTexture===null)wJ.computeBoneTexture();HJ.setValue(y,"boneTexture",wJ.boneTexture,s0)}}if(g.isBatchedMesh){if(HJ.setOptional(y,g,"batchingTexture"),HJ.setValue(y,"batchingTexture",g._matricesTexture,s0),HJ.setOptional(y,g,"batchingIdTexture"),HJ.setValue(y,"batchingIdTexture",g._indirectTexture,s0),HJ.setOptional(y,g,"batchingColorTexture"),g._colorsTexture!==null)HJ.setValue(y,"batchingColorTexture",g._colorsTexture,s0)}let A9=m.morphAttributes;if(A9.position!==void 0||A9.normal!==void 0||A9.color!==void 0)w.update(g,m,eJ);if(K8||T0.receiveShadow!==g.receiveShadow)T0.receiveShadow=g.receiveShadow,HJ.setValue(y,"receiveShadow",g.receiveShadow);if((b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial)&&b.envMap===null&&j.environment!==null)oJ.envMapIntensity.value=j.environmentIntensity;if(oJ.dfgLUT!==void 0)oJ.dfgLUT.value=oq();if(K8){if(HJ.setValue(y,"toneMappingExposure",I.toneMappingExposure),T0.needsLights)QH(oJ,z8);if(F0&&b.fog===!0)J0.refreshFogUniforms(oJ,F0);if(J0.refreshMaterialUniforms(oJ,b,x0,b0,C.state.transmissionRenderTarget[L.id]),T0.needsLights&&T0.numLightProbeGrids>0){let wJ=z,dJ=0;for(let m9 of C.state.lightProbeGridArray){if(m9.texture===null)continue;wJ.textures[dJ]=m9.texture,wJ.min[dJ]=m9.boundingBox.min,wJ.max[dJ]=m9.boundingBox.max,wJ.resolution[dJ]=m9.resolution,dJ++}for(let m9 in wJ)wJ[m9].length=dJ;oJ.probesSH.value=wJ.textures,oJ.probesMin.value=wJ.min,oJ.probesMax.value=wJ.max,oJ.probesResolution.value=wJ.resolution}G6.upload(y,P$(T0),oJ,s0)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0)G6.upload(y,P$(T0),oJ,s0),b.uniformsNeedUpdate=!1;if(b.isSpriteMaterial)HJ.setValue(y,"center",g.center);if(HJ.setValue(y,"modelViewMatrix",g.modelViewMatrix),HJ.setValue(y,"normalMatrix",g.normalMatrix),HJ.setValue(y,"modelMatrix",g.matrixWorld),b.uniformsGroups!==void 0){let wJ=b.uniformsGroups;for(let dJ=0,m9=wJ.length;dJ<m9;dJ++){let w$=wJ[dJ];O0.update(w$,eJ),O0.bind(w$,eJ)}}return eJ}function QH(L,j){L.ambientLightColor.needsUpdate=j,L.lightProbe.needsUpdate=j,L.sunLights.needsUpdate=j,L.sunLightShadows.needsUpdate=j,L.directionalLights.needsUpdate=j,L.directionalLightShadows.needsUpdate=j,L.pointLights.needsUpdate=j,L.pointLightShadows.needsUpdate=j,L.spotLights.needsUpdate=j,L.spotLightShadows.needsUpdate=j,L.rectAreaLights.needsUpdate=j,L.hemisphereLights.needsUpdate=j}function ZH(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return c},this.getActiveMipmapLevel=function(){return n},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(L,j,m){let b=u0.get(L);if(b.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,b.__autoAllocateDepthBuffer===!1)b.__useRenderToTexture=!1;u0.get(L.texture).__webglTexture=j,u0.get(L.depthTexture).__webglTexture=b.__autoAllocateDepthBuffer?void 0:m,b.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,j){let m=u0.get(L);m.__webglFramebuffer=j,m.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(L,j=0,m=0){x=L,c=j,n=m;let b=null,g=!1,F0=!1;if(L){let q0=u0.get(L);if(q0.__useDefaultFramebuffer!==void 0){D0.bindFramebuffer(y.FRAMEBUFFER,q0.__webglFramebuffer),r.copy(L.viewport),K0.copy(L.scissor),A0=L.scissorTest,D0.viewport(r),D0.scissor(K0),D0.setScissorTest(A0),X0=-1;return}else if(q0.__webglFramebuffer===void 0)s0.setupRenderTarget(L);else if(q0.__hasExternalTextures)s0.rebindTextures(L,u0.get(L.texture).__webglTexture,u0.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let o0=L.depthTexture;if(q0.__boundDepthTexture!==o0){if(o0!==null&&u0.has(o0)&&(L.width!==o0.image.width||L.height!==o0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");s0.setupDepthRenderbuffer(L)}}let L0=L.texture;if(L0.isData3DTexture||L0.isDataArrayTexture||L0.isCompressedArrayTexture)F0=!0;let S0=u0.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget){if(Array.isArray(S0[j]))b=S0[j][m];else b=S0[j];g=!0}else if(L.samples>0&&s0.useMultisampledRTT(L)===!1)b=u0.get(L).__webglMultisampledFramebuffer;else if(Array.isArray(S0))b=S0[m];else b=S0;r.copy(L.viewport),K0.copy(L.scissor),A0=L.scissorTest}else r.copy(t0).multiplyScalar(x0).floor(),K0.copy(d0).multiplyScalar(x0).floor(),A0=XJ;if(m!==0)b=p;if(D0.bindFramebuffer(y.FRAMEBUFFER,b))D0.drawBuffers(L,b);if(D0.viewport(r),D0.scissor(K0),D0.setScissorTest(A0),g){let q0=u0.get(L.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+j,q0.__webglTexture,m)}else if(F0){let q0=j;for(let L0=0;L0<L.textures.length;L0++){let S0=u0.get(L.textures[L0]);y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0+L0,S0.__webglTexture,m,q0)}}else if(L!==null&&m!==0){let q0=u0.get(L.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,q0.__webglTexture,m)}X0=-1};function T$(L){let j=u0.get(L);if(j.__readFormat!==L.format||j.__readType!==L.type)j.__readFormat=L.format,j.__readType=L.type,j.__formatReadable=yJ.textureFormatReadable(L.format),j.__typeReadable=yJ.textureTypeReadable(L.type);return j}if(this.readRenderTargetPixels=function(L,j,m,b,g,F0,P0,q0=0){if(!(L&&L.isWebGLRenderTarget)){c0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let L0=u0.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&P0!==void 0){if(L0=L0[P0],Array.isArray(L0))L0=L0[0]}if(L0){D0.bindFramebuffer(y.FRAMEBUFFER,L0);try{let S0=L.textures[q0],o0=S0.format,KJ=S0.type;if(L.textures.length>1)y.readBuffer(y.COLOR_ATTACHMENT0+q0);let I0=T$(S0);if(I0.__formatReadable===!1){c0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(I0.__typeReadable===!1){c0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(j>=0&&j<=L.width-b&&(m>=0&&m<=L.height-g))y.readPixels(j,m,b,g,W0.convert(o0),W0.convert(KJ),F0)}finally{let S0=x!==null?u0.get(x).__webglFramebuffer:null;D0.bindFramebuffer(y.FRAMEBUFFER,S0)}}},this.readRenderTargetPixelsAsync=async function(L,j,m,b,g,F0,P0,q0=0){if(!(L&&L.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let L0=u0.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&P0!==void 0){if(L0=L0[P0],Array.isArray(L0))L0=L0[0]}if(L0)if(j>=0&&j<=L.width-b&&(m>=0&&m<=L.height-g)){D0.bindFramebuffer(y.FRAMEBUFFER,L0);let S0=L.textures[q0],o0=S0.format,KJ=S0.type;if(L.textures.length>1)y.readBuffer(y.COLOR_ATTACHMENT0+q0);let I0=T$(S0);if(I0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(I0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $J=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,$J),y.bufferData(y.PIXEL_PACK_BUFFER,F0.byteLength,y.STREAM_READ),y.readPixels(j,m,b,g,W0.convert(o0),W0.convert(KJ),0),y.bindBuffer(y.PIXEL_PACK_BUFFER,null);let fJ=x!==null?u0.get(x).__webglFramebuffer:null;D0.bindFramebuffer(y.FRAMEBUFFER,fJ);let PJ=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await GX(y,PJ,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,$J),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,F0),y.bindBuffer(y.PIXEL_PACK_BUFFER,null),y.deleteBuffer($J),y.deleteSync(PJ),F0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,j=null,m=0){let b=Math.pow(2,-m),g=Math.floor(L.image.width*b),F0=Math.floor(L.image.height*b),P0=j!==null?j.x:0,q0=j!==null?j.y:0;s0.setTexture2D(L,0),y.copyTexSubImage2D(y.TEXTURE_2D,m,0,0,P0,q0,g,F0),D0.unbindTexture()},this.copyTextureToTexture=function(L,j,m=null,b=null,g=0,F0=0){let P0,q0,L0,S0,o0,KJ,I0,$J,fJ,PJ=L.isCompressedTexture?L.mipmaps[F0]:L.image;if(m!==null)P0=m.max.x-m.min.x,q0=m.max.y-m.min.y,L0=m.isBox3?m.max.z-m.min.z:1,S0=m.min.x,o0=m.min.y,KJ=m.isBox3?m.min.z:0;else{let HJ=Math.pow(2,-g);if(P0=Math.floor(PJ.width*HJ),q0=Math.floor(PJ.height*HJ),L.isDataArrayTexture)L0=PJ.depth;else if(L.isData3DTexture)L0=Math.floor(PJ.depth*HJ);else L0=1;S0=0,o0=0,KJ=0}if(b!==null)I0=b.x,$J=b.y,fJ=b.z;else I0=0,$J=0,fJ=0;let zJ=W0.convert(j.format),tJ=W0.convert(j.type),T0;if(j.isData3DTexture)s0.setTexture3D(j,0),T0=y.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)s0.setTexture2DArray(j,0),T0=y.TEXTURE_2D_ARRAY;else s0.setTexture2D(j,0),T0=y.TEXTURE_2D;D0.activeTexture(y.TEXTURE0),D0.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,j.flipY),D0.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),D0.pixelStorei(y.UNPACK_ALIGNMENT,j.unpackAlignment);let W9=D0.getParameter(y.UNPACK_ROW_LENGTH),FJ=D0.getParameter(y.UNPACK_IMAGE_HEIGHT),k8=D0.getParameter(y.UNPACK_SKIP_PIXELS),eJ=D0.getParameter(y.UNPACK_SKIP_ROWS),V6=D0.getParameter(y.UNPACK_SKIP_IMAGES);D0.pixelStorei(y.UNPACK_ROW_LENGTH,PJ.width),D0.pixelStorei(y.UNPACK_IMAGE_HEIGHT,PJ.height),D0.pixelStorei(y.UNPACK_SKIP_PIXELS,S0),D0.pixelStorei(y.UNPACK_SKIP_ROWS,o0),D0.pixelStorei(y.UNPACK_SKIP_IMAGES,KJ);let K8=L.isDataArrayTexture||L.isData3DTexture,z8=j.isDataArrayTexture||j.isData3DTexture;if(L.isDepthTexture){let HJ=u0.get(L),oJ=u0.get(j),A9=u0.get(HJ.__renderTarget),wJ=u0.get(oJ.__renderTarget);D0.bindFramebuffer(y.READ_FRAMEBUFFER,A9.__webglFramebuffer),D0.bindFramebuffer(y.DRAW_FRAMEBUFFER,wJ.__webglFramebuffer);for(let dJ=0;dJ<L0;dJ++){if(K8)y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,u0.get(L).__webglTexture,g,KJ+dJ),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,u0.get(j).__webglTexture,F0,fJ+dJ);y.blitFramebuffer(S0,o0,S0+P0,o0+q0,I0,$J,I0+P0,$J+q0,y.DEPTH_BUFFER_BIT,y.NEAREST)}D0.bindFramebuffer(y.READ_FRAMEBUFFER,null),D0.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(g!==0||L.isRenderTargetTexture||u0.has(L)){let HJ=u0.get(L),oJ=u0.get(j);D0.bindFramebuffer(y.READ_FRAMEBUFFER,t),D0.bindFramebuffer(y.DRAW_FRAMEBUFFER,T);for(let A9=0;A9<L0;A9++){if(K8)y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,HJ.__webglTexture,g,KJ+A9);else y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,HJ.__webglTexture,g);if(z8)y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,oJ.__webglTexture,F0,fJ+A9);else y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,oJ.__webglTexture,F0);if(g!==0)y.blitFramebuffer(S0,o0,S0+P0,o0+q0,I0,$J,I0+P0,$J+q0,y.COLOR_BUFFER_BIT,y.NEAREST);else if(z8)y.copyTexSubImage3D(T0,F0,I0,$J,fJ+A9,S0,o0,P0,q0);else y.copyTexSubImage2D(T0,F0,I0,$J,S0,o0,P0,q0)}D0.bindFramebuffer(y.READ_FRAMEBUFFER,null),D0.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(z8)if(L.isDataTexture||L.isData3DTexture)y.texSubImage3D(T0,F0,I0,$J,fJ,P0,q0,L0,zJ,tJ,PJ.data);else if(j.isCompressedArrayTexture)y.compressedTexSubImage3D(T0,F0,I0,$J,fJ,P0,q0,L0,zJ,PJ.data);else y.texSubImage3D(T0,F0,I0,$J,fJ,P0,q0,L0,zJ,tJ,PJ);else if(L.isDataTexture)y.texSubImage2D(y.TEXTURE_2D,F0,I0,$J,P0,q0,zJ,tJ,PJ.data);else if(L.isCompressedTexture)y.compressedTexSubImage2D(y.TEXTURE_2D,F0,I0,$J,PJ.width,PJ.height,zJ,PJ.data);else y.texSubImage2D(y.TEXTURE_2D,F0,I0,$J,P0,q0,zJ,tJ,PJ);if(D0.pixelStorei(y.UNPACK_ROW_LENGTH,W9),D0.pixelStorei(y.UNPACK_IMAGE_HEIGHT,FJ),D0.pixelStorei(y.UNPACK_SKIP_PIXELS,k8),D0.pixelStorei(y.UNPACK_SKIP_ROWS,eJ),D0.pixelStorei(y.UNPACK_SKIP_IMAGES,V6),F0===0&&j.generateMipmaps===!0&&j.mipmapsAutoUpdate===!0)y.generateMipmap(T0);D0.unbindTexture()},this.initRenderTarget=function(L){if(u0.get(L).__webglFramebuffer===void 0)s0.setupRenderTarget(L)},this.initTexture=function(L){if(L.isCubeTexture)s0.setTextureCube(L,0);else if(L.isData3DTexture)s0.setTexture3D(L,0);else if(L.isDataArrayTexture||L.isCompressedArrayTexture)s0.setTexture2DArray(L,0);else s0.setTexture2D(L,0);D0.unbindTexture()},this.resetState=function(){c=0,n=0,x=null,D0.reset(),H0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return LK}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=WJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=WJ._getUnpackColorSpace()}}var IJ={keep:{type:"keep",fa:"قلعهٔ مرکزی",desc:"قلب دهکده؛ نشانهٔ اطاعت نگهبانان و تاج قلمرو توست.",size:[3,3],store:{wood:1500,stone:1500,iron:800,food:1500,coin:900},cost:(J)=>({wood:220*J,stone:260*J,coin:90*J}),timerMs:45000,maxLvl:9},house:{type:"house",fa:"خانهٔ ساکنان",desc:"ساکنان بی‌نام و نشانه نیستند؛ مالیات سکهٔ دهکده از این‌جاست.",size:[2,2],produce:{coin:240},pCap:600,cost:(J)=>({wood:90*J,stone:40*J,coin:25*J}),timerMs:20000,maxLvl:6},farm:{type:"farm",fa:"مزرعه",desc:"گندم و جو؛ سرباز گرسنه نمی‌جنگد و دهکده گرسنه نمی‌سازد.",size:[3,2],produce:{food:300},pCap:700,cost:(J)=>({wood:70*J,coin:30*J}),timerMs:15000,maxLvl:6},lumber:{type:"lumber",fa:"چوب‌بری",desc:"تبر بر تنهٔ جنگل؛ چوب، خونِ هر دیوار و بام است.",size:[2,2],produce:{wood:280},pCap:650,cost:(J)=>({coin:40*J,stone:20*J}),timerMs:15000,maxLvl:6},mine:{type:"mine",fa:"معدن",desc:"از دل سنگ، سنگِ بنا و آهنِ شمشیر بیرون می‌آید.",size:[2,2],produce:{stone:220,iron:90},pCap:600,cost:(J)=>({wood:110*J,coin:45*J}),timerMs:22000,maxLvl:6},storage:{type:"storage",fa:"انبار",desc:"هرچه دهکده می‌آفریند، در سقف انبار ماندگار می‌شود.",size:[2,2],store:{wood:1200,stone:1200,iron:600,food:1200,coin:700},cost:(J)=>({wood:130*J,stone:130*J,coin:35*J}),timerMs:25000,maxLvl:6},barracks:{type:"barracks",fa:"پادگان",desc:"آنجا که دهقان، سرباز می‌شود؛ شمشیر، کمان و نیزه از این دروازه بیرون می‌زنند.",size:[3,2],cost:(J)=>({wood:160*J,stone:120*J,iron:60*J,coin:50*J}),timerMs:30000,maxLvl:6},tower:{type:"tower",fa:"برج تیرانداز",desc:"چشمِ بیدار دهکده؛ تیراندازِ بر بام، پیش از هر تهدید می‌بیند.",size:[2,2],cost:(J)=>({wood:80*J,stone:150*J,iron:40*J}),timerMs:25000,maxLvl:6}},Z$={targon:{id:"targon",fa:"تارگون",primary:"#c8102e",accent:"#f5c542",wallCol:15260093,wallCol2:14272678,beamCol:7031340,roofCol:10762031,roofCol2:9186599,stoneCol:12102029,trimCol:5913892,bannerTex:"../gates/assets/flags/targon_cloth.webp",groundTint:"#7fae56",groundDark:"#6a9a47",pathCol:"#c9ab77",waterCol:"#3fa8d5",skyTop:"#ffd9a0",skyBot:"#ffefc9",fogCol:"#ffe3b3",fogNear:70,fogFar:230,sunCol:"#ffdfae",sunPos:[40,55,22],hemiSky:"#ffe9c4",hemiGround:"#7c9a5a",ambient:0.35,outerTint:"#88b05e"},dezhmaar:{id:"dezhmaar",fa:"دژمار",primary:"#1e3a6e",accent:"#7fb2ff",wallCol:10134708,wallCol2:9081766,beamCol:3949396,roofCol:2898518,roofCol2:2371658,stoneCol:8292248,trimCol:3028036,bannerTex:"../gates/assets/flags/dezhmaar_cloth.webp",groundTint:"#5e7d63",groundDark:"#4f6d55",pathCol:"#8f96a3",waterCol:"#3f7fb2",skyTop:"#8fa8c9",skyBot:"#c4d2e2",fogCol:"#b8c6d8",fogNear:55,fogFar:190,sunCol:"#dfe9f5",sunPos:[-35,50,30],hemiSky:"#cfdcee",hemiGround:"#5a6b5e",ambient:0.3,mist:!0,outerTint:"#66806b"}},K$={w:24,h:24,cell:2},NJ=K$.w,vJ=K$.h,GJ=K$.cell,Q8=NJ*GJ,bQ=vJ*GJ,sJ={x0:2,y0:2,x1:NJ-3,y1:vJ-3},rJ=(J)=>String(J).replace(/[0-9]/g,(Q)=>"۰۱۲۳۴۵۶۷۸۹"[+Q]),E6={wood:"چوب",stone:"سنگ",iron:"آهن",food:"غذا",coin:"سکهٔ دهکده"},FY={targon:{init:[[11,11,"keep"],[6,13,"house"],[15,8,"house"],[6,6,"farm"],[16,15,"lumber"],[17,6,"mine"],[9,16,"storage"],[13,5,"barracks"],[8,9,"tower"]],plots:[[9,7],[14,13],[7,16],[16,11],[10,4],[18,13]],decor:7},dezhmaar:{init:[[11,11,"keep"],[7,12,"house"],[14,8,"house"],[6,7,"farm"],[16,14,"lumber"],[18,6,"mine"],[10,16,"storage"],[13,4,"barracks"],[9,8,"tower"],[15,11,"tower"]],plots:[[8,6],[14,16],[6,14],[17,10],[11,18],[19,14]],decor:11}};var OY=(J)=>`lands.village.${J}`,DY=2,F6=()=>({wood:0,stone:0,iron:0,food:0,coin:0}),aq=0,rq=()=>`b${Date.now().toString(36)}${(aq++).toString(36)}`;function $$(J){let Q=F6();for(let Z of J.buildings){if(Z.doneAt)continue;let K=IJ[Z.type];if(!K.store)continue;Object.keys(K.store).forEach(($)=>{Q[$]+=(K.store[$]??0)*Z.lvl})}if(Q.wood<400)Q.wood=400;if(Q.stone<400)Q.stone=400;if(Q.iron<200)Q.iron=200;if(Q.food<400)Q.food=400;if(Q.coin<300)Q.coin=300;return Q}function xQ(J){let[Q,Z]=IJ[J.type].size;return{w:Q,d:Z}}function tq(J,Q,Z,K,$,W){if(Z<sJ.x0||K<sJ.y0||Z+$-1>sJ.x1||K+W-1>sJ.y1)return!0;for(let X of J.buildings){if(X.id===Q)continue;let Y=xQ(X);if(Z<X.x+Y.w&&X.x<Z+$&&K<X.y+Y.d&&X.y<K+W)return!0}return!1}function W$(J,Q){let Z=IJ[J.type],K=F6();if(!Z.produce||J.doneAt)return K;let $=Math.max(0,Math.min((Q-J.lastAt)/3600000,8));return Object.keys(Z.produce).forEach((W)=>{K[W]=Math.min(Z.pCap??500,(Z.produce[W]??0)*J.lvl*$)}),K}function X$(J,Q,Z){let K=J.buildings.find((Y)=>Y.id===Q);if(!K)return F6();let $=W$(K,Z),W=$$(J),X=F6();return Object.keys($).forEach((Y)=>{let H=Math.max(0,W[Y]-J.res[Y]),U=Math.min(H,Math.floor($[Y]));J.res[Y]+=U,J.totals[Y]+=U,X[Y]=U}),K.lastAt=Z,X}function O6(J,Q){let Z=!1;for(let K of J.buildings)if(K.doneAt&&K.doneAt<=Q)K.lvl=K.targetLvl??K.lvl,K.doneAt=0,K.lastAt=Q,Z=!0;return Z}function Y$(J,Q){return IJ[J].cost(Q)}function gQ(J,Q){return Object.keys(Q).every((Z)=>J.res[Z]>=(Q[Z]??0))}function RY(J,Q){if(!gQ(J,Q))return!1;return Object.keys(Q).forEach((Z)=>{J.res[Z]-=Q[Z]??0}),!0}function MY(J,Q,Z,K,$){let W=IJ[Q],[X,Y]=W.size;if(tq(J,null,Z,K,X,Y))return null;if(!RY(J,W.cost(1)))return null;let H={id:rq(),type:Q,lvl:0,targetLvl:1,x:Z,y:K,doneAt:$+W.timerMs,lastAt:$};return J.buildings.push(H),H}function H$(J,Q,Z){let K=J.buildings.find((W)=>W.id===Q);if(!K||K.doneAt)return!1;let $=IJ[K.type];if(K.lvl>=$.maxLvl)return!1;if(!RY(J,$.cost(K.lvl+1)))return!1;return K.targetLvl=K.lvl+1,K.doneAt=Z+$.timerMs,!0}function eq(J,Q){return{v:DY,realm:J,land:Q,createdAt:Date.now(),res:{wood:500,stone:420,iron:160,food:480,coin:260},buildings:[],totals:F6()}}function g9(J){try{localStorage.setItem(OY(J.realm),JSON.stringify(J))}catch{}}function VY(J,Q){try{let K=localStorage.getItem(OY(J));if(K){let $=JSON.parse(K);if($&&$.v===DY&&Array.isArray($.buildings)&&$.buildings.length)return O6($,Date.now()),{st:$,fresh:!1}}}catch{}return{st:eq(J,Q),fresh:!0}}var BY=[{id:"m1",fa:"۲۰۰ چوب برای اصطبل‌ها جمع کن",goal:200,key:"wood"},{id:"m2",fa:"۱۵۰ غذا از مزرعه‌ها برداشت کن",goal:150,key:"food"},{id:"m3",fa:"۶ سازه در دهکده برپا کن",goal:6,key:"buildings"}];function LY(J,Q){let Z=Q.key==="buildings"?J.buildings.length:J.totals[Q.key]+J.res[Q.key];return{cur:Z,done:Z>=Q.goal}}var _J=Math.PI,c8=(J)=>{let Q=J>>>0;return()=>{return Q=Q*1664525+1013904223>>>0,Q/4294967296}};function kY(J,Q){let Z=(K,$=0.85,W=0)=>new TJ({color:K,roughness:$,metalness:W});if(Q)Q.colorSpace=B9,Q.anisotropy=4;return{wall:Z(J.wallCol,0.9),wall2:Z(J.wallCol2,0.9),beam:Z(J.beamCol,0.85),roof:Z(J.roofCol,0.8),roof2:Z(J.roofCol2,0.8),stone:Z(J.stoneCol,0.95),stoneDark:Z(new y0(J.stoneCol).multiplyScalar(0.78).getHex(),0.95),wood:Z(9067059,0.85),woodDark:Z(6241570,0.85),trim:Z(J.trimCol,0.85),gold:Z(14263351,0.45,0.55),iron:Z(4869976,0.5,0.6),banner:Z(new y0(J.primary).getHex(),0.9),cloth:Z(15129026,0.95),foliage:Z(4160826,0.95),foliage2:Z(3105584,0.95),trunk:Z(7227947,0.9),crop:Z(14267982,0.95),skin:Z(14726284,0.8)}}function a(J,Q,Z=0,K=0,$=0){let W=new CJ(J,Q);return W.position.set(Z,K,$),W.castShadow=!0,W.receiveShadow=!0,W}var w0=(J,Q,Z)=>new Y9(J,Q,Z),BJ=(J,Q,Z,K=8)=>new f9(J,Q,Z,K),R8=(J,Q,Z=4)=>new w9(J,Q,Z);function A7(J,Q,Z,K=2){let $=new v0;$.add(a(w0(Q,Z,0.14),J.wall2,0,Z/2,0));let W=0.1;$.add(a(w0(Q,W,0.18),J.beam,0,Z-W/2,0)),$.add(a(w0(Q,W,0.18),J.beam,0,W/2,0));for(let X=0;X<K;X++){let Y=-Q/2+Q/(K-1||1)*X;$.add(a(w0(W,Z,0.18),J.beam,Y,Z/2,0))}return $}function C7(J,Q,Z,K,$){let W=new v0,X=Math.atan2(K,Z/2),Y=Math.hypot(K,Z/2)+0.12,H=w0(Q+0.3,0.1,Y),U=a(H,$??J.roof);U.position.set(0,K/2,Z/4),U.rotation.x=X;let N=a(H,$??J.roof);N.position.set(0,K/2,-Z/4),N.rotation.x=-X,W.add(U,N),W.add(a(w0(Q+0.34,0.14,0.16),J.trim,0,K+0.05,0));let q=new Z6([new Z0(-Z/2,0),new Z0(Z/2,0),new Z0(0,K)]),G=new K6(q,{depth:0.14,bevelEnabled:!1}),F=a(G,J.wall2);F.position.set(Q/2-0.02,0,-0.07),F.rotation.y=_J/2,F.castShadow=!0;let R=a(G,J.wall2);return R.position.set(-Q/2+0.02,0,-0.07),R.rotation.y=-_J/2,R.castShadow=!0,W.add(F,R),W}function D6(J,Q=0.5,Z=0.55){let K=new v0;K.add(a(w0(Q,Z,0.08),J.trim,0,Z/2,0));let $=new TJ({color:16771496,emissive:16762982,emissiveIntensity:0.55,roughness:0.6});return K.add(a(w0(Q-0.14,Z-0.16,0.05),$,0,Z/2,0.03)),K.add(a(w0(0.06,Z-0.16,0.06),J.trim,0,Z/2,0.05)),K.add(a(w0(Q-0.14,0.06,0.06),J.trim,0,Z/2,0.05)),K}function zY(J,Q=0.8,Z=1.25){let K=new v0;return K.add(a(w0(Q+0.16,Z+0.14,0.12),J.trim,0,Z/2,0)),K.add(a(w0(Q,Z,0.09),J.woodDark,0,Z/2,0.05)),K.add(a(new VJ(0.05,6,6),J.iron,Q/2-0.16,Z*0.55,0.11)),K}function U$(J,Q,Z,K=3.2,$=1.5){let W=new v0;W.add(a(BJ(0.05,0.07,K,6),J.woodDark,0,K/2,0)),W.add(a(new VJ(0.11,8,8),J.gold,0,K+0.06,0));let X=10,Y=6,H=new h9($,$*0.62,X,Y),U=Q?new TJ({map:Q,side:aJ,roughness:0.9,transparent:!0,alphaTest:0.35}):new TJ({color:new y0(Z).getHex(),side:aJ,roughness:0.9}),N=new CJ(H,U);N.position.set($/2+0.02,K-$*0.38,0),N.castShadow=!0,W.add(N);let q=H.attributes.position.array.slice();return{g:W,update:(F)=>{let R=H.attributes.position.array;for(let A=0;A<R.length;A+=3){let O=q[A],E=q[A+1],k=(O+$/2)/$;R[A+2]=Math.sin(F*2.2+k*4.4)*0.14*k+Math.sin(F*3.7+E*2.2)*0.05*k,R[A]=O+Math.sin(F*2.2+k*4.4)*0.05*k}H.attributes.position.needsUpdate=!0,H.computeVertexNormals()}}}function AY(J,Q,Z,K){let $=new v0,W=4.6,X=4.6;$.add(a(w0(5.3,0.5,5.3),J.stoneDark,0,0.25,0)),$.add(a(w0(4.6,2.5,4.6),J.stone,0,1.75,0));for(let[F,R]of[[1,1],[1,-1],[-1,1],[-1,-1]])for(let A=0;A<4;A++)$.add(a(w0(0.34,0.34,0.34),J.stoneDark,F*4.6/2-F*0.12,0.85+A*0.58,R*4.6/2-R*0.12));let Y=new v0;Y.add(a(w0(1.7,1.9,0.3),J.trim,0,0.95,0)),Y.add(a(new Y9(1.15,1.5,0.14),J.woodDark,0,0.75,0.1));for(let F=0;F<4;F++)Y.add(a(w0(0.12,1.5,0.18),J.iron,-0.4+F*0.27,0.75,0.14));Y.position.set(0,0.5,2.4),$.add(Y);let H=a(BJ(1.25,1.5,4.6,10),J.stone,0,2.8,0);$.add(H),$.add(a(BJ(1.5,1.5,0.35,10),J.stoneDark,0,5.15,0));let U=a(R8(1.62,1.7,8),K>=3?J.roof:J.roof2,0,6.15,0);$.add(U),$.add(a(new VJ(0.16,8,8),J.gold,0,7.08,0));for(let[F,R]of[[1,1],[-1,-1]]){let A=F*2.15,O=R*2.15;$.add(a(BJ(0.62,0.72,3.4,8),J.stone,A,2.2,O)),$.add(a(BJ(0.78,0.78,0.22,8),J.stoneDark,A,4.05,O)),$.add(a(R8(0.85,1,8),J.roof2,A,4.66,O)),$.add(a(new VJ(0.09,6,6),J.gold,A,5.22,O))}let N=D6(J);N.position.set(2.32,2.9,0),N.rotation.y=_J/2,$.add(N);let q=D6(J);q.position.set(0,4.6,2.32),$.add(q);let G=U$(J,Z,Q.primary,2.6,1.15);if(G.g.position.set(0,2.4,2.65),$.add(G.g),$.banner=G,K>=2){let F=U$(J,null,Q.accent,1.7,0.7);F.g.position.set(2.15,3.6,2.15),F.g.rotation.y=_J/4,$.add(F.g),$.banner2=F}return $}function CY(J,Q){let Z=new v0;Z.add(a(w0(3.1,0.35,2.7),J.stoneDark,0,0.17,0));let K=2.7,$=2.3,W=1.55,X=A7(J,K,W,3);X.position.set(0,0.35,$/2-0.07),Z.add(X);let Y=A7(J,K,W,3);Y.position.set(0,0.35,-$/2+0.07),Y.rotation.y=_J,Z.add(Y);let H=A7(J,$,W,2);H.position.set(-K/2+0.07,0.35,0),H.rotation.y=-_J/2,Z.add(H);let U=A7(J,$,W,2);U.position.set(K/2-0.07,0.35,0),U.rotation.y=_J/2,Z.add(U);let N=C7(J,K+0.25,$,1,J.roof);N.position.set(0,0.35+W,0),Z.add(N),Z.add(a(w0(0.4,1,0.4),J.stoneDark,K/2-0.5,0.35+W+0.75,-0.5));let q=zY(J);q.position.set(-0.6,0.35,$/2+0.02),Z.add(q);let G=D6(J);G.position.set(0.55,0.9,$/2+0.02),Z.add(G);let F=D6(J);F.position.set(K/2+0.02,0.9,0),F.rotation.y=_J/2,Z.add(F);for(let R=0;R<3;R++){let A=a(BJ(0.11,0.11,0.7,6),J.wood,-K/2-0.25,0.12+(R<2?0:0.22),-0.5+R%2*0.26);A.rotation.x=_J/2,Z.add(A)}return Z}function _Y(J,Q){let Z=new v0,K=4.8,$=3.2;Z.add(a(w0(4.8,0.18,3.2),new TJ({color:9071426,roughness:1}),0,0.09,0));let W=4,X=new w9(0.1,0.34,5),Y=W*9,H=new FQ(X,J.crop,Y);H.castShadow=!0;let U=new UJ,N=0,q=c8(77);for(let O=0;O<W;O++)for(let E=0;E<9;E++){let k=-1.9+E*0.475,z=-1.1500000000000001+O*(2.3000000000000003/(W-1));U.makeTranslation(k+(q()-0.5)*0.1,0.35,z+(q()-0.5)*0.08),H.setMatrixAt(N++,U)}Z.add(H);let G=(O,E)=>Z.add(a(w0(0.09,0.5,0.09),J.woodDark,O,0.43,E));for(let O=0;O<=8;O++){let E=-2.4+O*0.6;G(E,-1.7200000000000002),G(E,1.7200000000000002)}for(let O of[-1.7200000000000002,1.7200000000000002])Z.add(a(w0(4.8,0.06,0.05),J.woodDark,0,0.62,O)),Z.add(a(w0(4.8,0.06,0.05),J.woodDark,0,0.38,O));let F=new v0;F.add(a(BJ(0.05,0.06,1.1,5),J.woodDark,0,0.55,0)),F.add(a(w0(0.8,0.07,0.07),J.woodDark,0,0.85,0)),F.add(a(w0(0.34,0.4,0.2),J.cloth,0,0.72,0)),F.add(a(new VJ(0.14,7,7),new TJ({color:14202215,roughness:1}),0,1.08,0)),F.add(a(R8(0.3,0.14,8),J.crop,0,1.2,0)),F.position.set(1.9,0.1,-1.2000000000000002),Z.add(F);let R=new v0;R.add(a(w0(1.5,1,1.3),J.wall2,0,0.6,0));let A=C7(J,1.6,1.4,0.55,J.roof2);return A.position.set(0,1.1,0),R.add(A),R.add(a(w0(0.5,0.7,0.06),J.woodDark,0,0.45,0.66)),R.position.set(-1.5,0.15,2.35),Z.add(R),Z}function PY(J,Q){let Z=new v0;Z.add(a(w0(2.6,0.3,2.3),J.stoneDark,0,0.15,0));let K=A7(J,2.3,1.3,2);K.position.set(0,0.3,1.08),Z.add(K);let $=A7(J,2.3,1.3,2);$.position.set(0,0.3,-1.08),$.rotation.y=_J,Z.add($);let W=C7(J,2.7,2.4,0.8,J.roof2);W.position.set(0,1.6,0),Z.add(W);let X=BJ(0.16,0.16,1.5,7),Y=new v0;for(let G=0;G<3;G++)for(let F=0;F<3-G;F++){let R=a(X,J.wood,0,0.17+G*0.28,-0.3+F*0.32+G*0.16);R.rotation.z=_J/2,Y.add(R)}Y.position.set(2.2,0,0.6),Z.add(Y);let H=new v0;for(let G=0;G<2;G++){let F=a(X,J.wood,0,0.17,-0.15+G*0.34);F.rotation.z=_J/2,H.add(F)}H.position.set(-2,0,-0.7),Z.add(H),Z.add(a(BJ(0.3,0.34,0.5,8),J.woodDark,1,0.25,-1.3));let U=new v0;U.add(a(BJ(0.03,0.035,0.8,5),J.wood,0,0.4,0)),U.add(a(w0(0.3,0.18,0.05),J.iron,0.1,0.78,0)),U.position.set(1.32,0.45,-1.25),U.rotation.z=0.6,Z.add(U);let N=new v0;for(let G of[-0.4,0.4])N.add(a(w0(0.08,0.7,0.08),J.woodDark,-0.3,0.35,G)),N.add(a(w0(0.08,0.7,0.08),J.woodDark,0.3,0.35,G));N.add(a(w0(1,0.08,0.3),J.wood,0,0.72,0));let q=a(BJ(0.09,0.09,1.3,6),J.wood,0,0.82,0);return q.rotation.z=_J/2,N.add(q),N.position.set(-1.6,0,1),Z.add(N),Z}function IY(J,Q){let Z=new v0,K=c8(31);for(let Y=0;Y<9;Y++){let H=0.6+K()*0.7,U=a(new g8(H,0),Y%2?J.stone:J.stoneDark,(K()-0.5)*3.4,H*0.55,-0.6+(K()-0.5)*1.6);U.rotation.set(K()*_J,K()*_J,K()*_J),Z.add(U)}let $=new v0;for(let Y of[-0.55,0.55])$.add(a(w0(0.18,1.5,0.18),J.woodDark,Y,0.75,0));$.add(a(w0(1.5,0.18,0.22),J.woodDark,0,1.55,0)),$.add(a(w0(1.7,0.14,0.3),J.woodDark,0,1.78,0));let W=new TJ({color:1316380,roughness:1});$.add(a(w0(0.95,1.4,0.1),W,0,0.7,-0.02)),$.position.set(0,0.1,1.35),Z.add($);for(let Y of[-0.28,0.28])Z.add(a(w0(0.08,0.06,3.2),J.woodDark,Y,0.06,2.6));for(let Y=0;Y<5;Y++)Z.add(a(w0(0.75,0.05,0.09),J.wood,0,0.045,1.5+Y*0.55));let X=new v0;X.add(a(w0(0.75,0.4,0.55),J.woodDark,0,0.32,0)),X.add(a(new Y9(0.65,0.12,0.45),J.stoneDark,0,0.55,0));for(let[Y,H]of[[-0.3,-0.2],[0.3,-0.2],[-0.3,0.2],[0.3,0.2]]){let U=a(BJ(0.14,0.14,0.06,8),J.iron,Y,0.14,H);U.rotation.z=_J/2,X.add(U)}return X.position.set(0,0,3.4),Z.add(X),Z}function TY(J,Q){let Z=new v0,K=3.2,$=2.6,W=1.7;Z.add(a(w0(3.5,0.4,2.9),J.stoneDark,0,0.2,0)),Z.add(a(w0(3.2,1.7,2.6),J.wall,0,1.25,0));for(let U of[-1.5,1.5])Z.add(a(w0(0.16,1.7,0.16),J.beam,U,1.25,1.22)),Z.add(a(w0(0.16,1.7,0.16),J.beam,U,1.25,-1.22));let X=C7(J,3.5,2.6,0.95,J.roof);X.position.set(0,2.1,0),Z.add(X),Z.add(a(w0(1.3,1.4,0.12),J.woodDark,0,1.1,1.32)),Z.add(a(w0(1.44,0.1,0.16),J.trim,0,1.84,1.32)),Z.add(a(w0(0.5,0.45,0.1),J.trim,0,2.5,1.4000000000000001));let Y=new TJ({color:13350025,roughness:1});for(let U=0;U<3;U++){let N=a(new VJ(0.26,7,6),Y,2.0500000000000003+U%2*0.5,0.26+(U>=2?0.4:0),0.6+Math.floor(U/2)*0.5);N.scale.y=0.85,Z.add(N)}let H=(U,N)=>{let q=a(BJ(0.24,0.28,0.55,8),J.wood,U,0.47,N);Z.add(q),Z.add(a(BJ(0.29,0.29,0.06,8),J.iron,U,0.47,N))};return H(-2.0500000000000003,0.7),H(-2.1,-0.1),Z.add(a(w0(0.5,0.5,0.5),J.woodDark,2.1,0.45,-0.6)),Z}function wY(J,Q,Z){let K=new v0,$=3.9,W=2.8,X=1.8;K.add(a(w0(4.3,0.45,3.1999999999999997),J.stoneDark,0,0.22,0)),K.add(a(w0(3.9,1.8,2.8),J.wall,0,1.35,0));let Y=C7(J,4.2,2.8,1.05,J.roof2);Y.position.set(0,2.25,0),K.add(Y);for(let F of[-1,0,1]){let R=a(BJ(0.24,0.24,0.06,10),J.banner,F,1.6,1.45);R.rotation.x=_J/2,K.add(R),K.add(a(new VJ(0.06,6,6),J.gold,F,1.6,1.5))}let H=zY(J,0.9,1.4);H.position.set(-0.9,0.45,1.42),K.add(H);let U=D6(J);U.position.set(0.6,1.35,1.42),K.add(U);let N=new v0;N.add(a(w0(1.4,0.1,0.14),J.woodDark,0,0.9,0)),N.add(a(w0(1.4,0.1,0.14),J.woodDark,0,0.4,0));for(let[F,R]of[[-0.45,"sword"],[0,"spear"],[0.45,"sword"]]){let A=a(w0(0.07,0.75,0.03),J.iron,F,1.15,0);N.add(A),N.add(a(BJ(0.03,0.03,0.3,5),J.woodDark,F,0.62,0))}N.position.set(2.5,0,0.9),K.add(N);let q=new v0;q.add(a(BJ(0.07,0.09,1.3,5),J.woodDark,0,0.65,0)),q.add(a(w0(0.75,0.12,0.12),J.woodDark,0,1,0)),q.add(a(new VJ(0.17,7,7),J.cloth,0,1.32,0)),q.add(a(w0(0.4,0.3,0.24),J.cloth,0,0.85,0)),q.position.set(-2.4,0,1),K.add(q);let G=U$(J,Z,Q.primary,2.4,1);return G.g.position.set(1.75,0.45,-1.0999999999999999),K.add(G.g),K.banner=G,K}function SY(J,Q){let Z=new v0;Z.add(a(w0(2.5,0.5,2.5),J.stoneDark,0,0.25,0));let K=a(BJ(0.85,1.05,4.2,9),J.stone,0,2.6,0);Z.add(K),Z.add(a(BJ(1.25,1,0.5,9),J.stoneDark,0,4.85,0));for(let W=0;W<8;W++){let X=W/8*_J*2;Z.add(a(w0(0.22,0.3,0.22),J.stoneDark,Math.cos(X)*1.12,5.25,Math.sin(X)*1.12))}Z.add(a(BJ(1.28,1.28,0.16,9),J.wood,0,5.1,0));let $=a(R8(1.35,1.5,8),J.roof,0,5.95,0);Z.add($),Z.add(a(new VJ(0.11,7,7),J.gold,0,6.78,0));for(let[W,X]of[[0,3.1],[_J/2,2.4]]){let Y=a(w0(0.08,0.55,0.08),J.trim,0,X,1.02);Y.rotation.y=W,Z.add(Y)}return Z}function N$(J,Q){let Z=new v0,K=c8(Q),$=1.3+K()*0.5,W=a(BJ(0.14,0.22,$,7),J.trunk,0,$/2,0);W.rotation.z=(K()-0.5)*0.14,Z.add(W);let X=3+Math.floor(K()*2);for(let Y=0;Y<X;Y++){let H=0.75+K()*0.5,U=a(new $6(H,1),Y%2?J.foliage:J.foliage2,(K()-0.5)*1.1,$+0.35+K()*0.6,(K()-0.5)*1.1);Z.add(U)}return Z}function G$(J,Q){let Z=new v0,$=1.6+c8(Q)()*0.9;Z.add(a(BJ(0.1,0.16,$*0.45,6),J.trunk,0,$*0.22,0));let W=3;for(let X=0;X<W;X++){let Y=0.95-X*0.26,H=$*0.35+X*($*0.26);Z.add(a(R8(Y,$*0.45,7),X%2?J.foliage2:J.foliage,0,H,0))}return Z}function jY(J,Q){let Z=new v0,$=2+c8(Q)()*0.8;Z.add(a(BJ(0.07,0.11,0.5,5),J.trunk,0,0.25,0));let W=a(R8(0.42,$,7),J.foliage2,0,$/2+0.3,0);return W.scale.x=0.7,Z.add(W),Z}function q$(J,Q){let Z=new v0,K=c8(Q),$=0.35+K()*0.55,W=a(new g8($,0),J.stone,0,$*0.5,0);if(W.rotation.set(K()*_J,K()*_J,0),Z.add(W),K()>0.5){let X=a(new g8($*0.55,0),J.stoneDark,$*0.8,$*0.28,$*0.3);X.rotation.set(K()*_J,K()*_J,0),Z.add(X)}return Z}function vY(J,Q,Z=6){let K=new v0,$=c8(Q),W=[15230074,15913806,15263450,13201364];for(let X=0;X<Z;X++){let Y=($()-0.5)*2.2,H=($()-0.5)*2.2;K.add(a(BJ(0.015,0.02,0.18,4),J.foliage2,Y,0.09,H)),K.add(a(new VJ(0.05,5,4),new TJ({color:W[X%4],roughness:0.9}),Y,0.2,H))}return K}function yY(J,Q){let Z=new v0;Z.add(a(BJ(0.75,0.8,0.65,10),J.stone,0,0.32,0)),Z.add(a(BJ(0.6,0.6,0.1,10),new TJ({color:2573406,roughness:0.3}),0,0.62,0));for(let $ of[-0.6,0.6])Z.add(a(w0(0.12,1.1,0.12),J.woodDark,$,1.1,0));let K=C7(J,1.7,1.5,0.5,J.roof);return K.position.set(0,1.65,0),Z.add(K),Z.add(a(BJ(0.05,0.05,0.5,6),J.woodDark,0,1.25,0)),Z.add(a(w0(0.26,0.2,0.2),J.wood,0,1,0)),Z}function fY(J){let Q=new v0;Q.add(a(BJ(0.05,0.08,1.5,6),J.iron,0,0.75,0)),Q.add(a(w0(0.3,0.36,0.3),J.iron,0,1.6,0));let Z=new TJ({color:16767370,emissive:16758861,emissiveIntensity:0.9,roughness:0.5});return Q.add(a(new VJ(0.1,6,6),Z,0,1.6,0)),Q.add(a(R8(0.24,0.18,4),J.iron,0,1.86,0)),Q}function hY(J,Q){let Z=new v0,K=new CJ(new x8(Q,22),new TJ({color:4171989,roughness:0.15,metalness:0.1,transparent:!0,opacity:0.92}));K.rotation.x=-_J/2,K.position.y=0.03,K.receiveShadow=!0,Z.add(K);let $=a(BJ(Q+0.25,Q+0.4,0.08,22),J.stoneDark,0,0.01,0);Z.add($);for(let W=0;W<5;W++){let X=W/5*_J*2+0.4,Y=a(R8(0.05,0.55,4),J.foliage2,Math.cos(X)*(Q+0.2),0.3,Math.sin(X)*(Q+0.2));Z.add(Y)}return Z}function bY(J){let Q=new v0,Z=a(new w9(0.07,0.3,5),J.foliage2,0,0,0);Z.rotation.x=_J/2,Q.add(Z);let K=w0(0.4,0.02,0.12),$=a(K,J.foliage2,-0.2,0.02,0),W=a(K,J.foliage2,0.2,0.02,0);return Q.add($,W),{g:Q,update:(Y)=>{$.rotation.z=Math.sin(Y*9)*0.55,W.rotation.z=-Math.sin(Y*9)*0.55}}}var S9=Math.PI;function l0(J,Q,Z=0,K=0,$=0){let W=new CJ(J,Q);return W.position.set(Z,K,$),W.castShadow=!0,W.receiveShadow=!0,W}var $9=(J,Q,Z,K=7)=>new f9(J,Q,Z,K),M8=(J,Q,Z=6)=>new w9(J,Q,Z),H9=(J,Q,Z)=>new Y9(J,Q,Z),DJ=(J,Q=0.85,Z=0)=>new TJ({color:J,roughness:Q,emissive:Z?J:0,emissiveIntensity:Z});function E$(J,Q,Z=1){let K=new v0,$=(()=>{let D=Z>>>0;return()=>(D=D*1664525+1013904223>>>0)/4294967296})(),W=new y0(J.primary).offsetHSL(0,-0.08,Q==="villager"?0.16:0).getHex(),X=DJ(W,0.9),Y=DJ(Q==="guard"?3817544:7232063,0.95),H=DJ(14726284,0.8),U=DJ(7227947,0.85),N=DJ(10134189,0.45,0),q=DJ(14263351,0.4,0),G=0.5,F=(D)=>{let V=new v0;return V.position.set(D*0.11,0.5,0),V.add(l0($9(0.062,0.075,0.5,6),Y,0,-0.25,0)),V.add(l0(H9(0.13,0.09,0.2),U,0,-0.455,0.03)),V},R=F(-1),A=F(1);K.add(R,A);let O=new v0;O.position.y=0.5;let E=0.62;if(O.add(l0($9(0.21,0.16,E,8),X,0,E/2,0)),O.add(l0($9(0.175,0.175,0.09,8),U,0,0.1,0)),O.add(l0(H9(0.08,0.07,0.03),q,0,0.1,0.17)),Q==="guard"||Q==="swordsman")for(let D of[-1,1])O.add(l0(new VJ(0.1,7,6),N,D*0.2,E-0.03,0));if(Q==="archer"||Q==="villager"){let D=l0(H9(0.07,E*0.95,0.02),U,0.05,E/2,0.15);D.rotation.z=0.35,O.add(D)}let k=(D)=>{let V=new v0;return V.position.set(D*0.23,E-0.06,0),V.add(l0($9(0.05,0.062,0.52,6),X,0,-0.26,0)),V.add(l0(new VJ(0.055,6,6),H,0,-0.54,0)),V},z=k(-1),B=k(1);O.add(z,B);let C=new v0;C.position.y=E+0.02,C.add(l0(new VJ(0.16,9,8),H,0,0.17,0));for(let D of[-1,1])C.add(l0(new VJ(0.018,5,5),DJ(1908004,0.5),D*0.058,0.19,0.14)),C.add(l0(H9(0.045,0.012,0.01),DJ(3811866,0.9),D*0.058,0.225,0.152));if(C.add(l0(H9(0.05,0.03,0.02),H,0,0.14,0.16)),Q==="guard"||Q==="villager"||$()>0.5)C.add(l0(new VJ(0.09,7,6,0,S9*2,0,S9/2),DJ(5916210,0.95),0,0.08,0.06));if(Q==="swordsman"){let D=new v0;D.add(l0(new VJ(0.175,9,7,0,S9*2,0,S9/1.7),N,0,0.18,0)),D.add(l0(H9(0.03,0.12,0.02),N,0,0.2,0.16)),D.add(l0(M8(0.05,0.16,6),DJ(new y0(J.accent).getHex(),0.9),0,0.38,0)),C.add(D);let V=new v0;V.add(l0(H9(0.045,0.42,0.015),DJ(13094100,0.35),0,0.3,0)),V.add(l0(H9(0.14,0.035,0.035),q,0,0.08,0)),V.add(l0($9(0.022,0.022,0.12,5),U,0,0,0)),V.position.set(0,-0.54,0.06),V.rotation.x=-0.35,B.add(V);let I=l0($9(0.19,0.19,0.04,12),DJ(new y0(J.primary).getHex(),0.7),0.02,-0.45,0.08);I.rotation.x=S9/2,I.rotation.z=0,z.add(I),z.add(l0(new VJ(0.05,6,6),q,0.02,-0.45,0.1))}else if(Q==="archer"){C.add(l0(M8(0.19,0.3,8),DJ(4873530,0.95),0,0.26,0)),C.add(l0(H9(0.03,0.16,0.015),DJ(15262418,0.9),0.09,0.3,0.12));let D=new v0,V=l0(new W6(0.3,0.018,5,12,S9*1.15),U,0,0,0);V.rotation.z=S9*0.42,D.add(V),D.add(l0($9(0.006,0.006,0.56,4),DJ(14275261,0.9),0,0,0.12)),D.position.set(0.06,-0.5,0.1),D.rotation.z=-0.3,z.add(D);let I=l0($9(0.06,0.07,0.34,6),U,-0.12,0.4,-0.16);I.rotation.z=0.4,O.add(I);for(let f=0;f<3;f++)O.add(l0($9(0.008,0.008,0.2,4),DJ(14275261,0.9),-0.16+f*0.035,0.62,-0.2))}else if(Q==="spearman"){C.add(l0(new VJ(0.17,8,7,0,S9*2,0,S9/1.6),N,0,0.2,0));let D=new v0;D.add(l0($9(0.018,0.022,1.7,5),U,0,0.25,0)),D.add(l0(M8(0.05,0.2,6),DJ(13094100,0.35),0,1.18,0)),D.position.set(0,-0.5,0.04),B.add(D);let V=l0($9(0.13,0.13,0.035,10),DJ(9071426,0.8),0.02,-0.42,0.09);V.rotation.x=S9/2,z.add(V)}else if(Q==="guard"){C.add(l0(new VJ(0.18,9,7),N,0,0.18,0)),C.add(l0(H9(0.2,0.045,0.03),DJ(1316380,0.6),0,0.2,0.145)),C.add(l0(M8(0.06,0.2,6),DJ(new y0(J.primary).getHex(),0.9),0,0.42,0));let D=l0(H9(0.34,0.62,0.045),DJ(new y0(J.primary).getHex(),0.7),0.03,-0.4,0.1);z.add(D),z.add(l0(H9(0.1,0.14,0.02),q,0.03,-0.4,0.13));let V=new v0;V.add(l0($9(0.02,0.025,0.65,5),U,0,0.1,0)),V.add(l0(H9(0.16,0.2,0.03),DJ(13094100,0.35),0.09,0.36,0)),V.position.set(0,-0.52,0.05),B.add(V)}else if(Q==="villager"){C.add(l0($9(0.26,0.28,0.03,10),DJ(14268764,0.95),0,0.28,0)),C.add(l0(M8(0.17,0.14,9),DJ(14268764,0.95),0,0.34,0));let D=new v0;D.add(l0($9(0.016,0.02,0.9,5),U,0,0.2,0)),D.add(l0(H9(0.14,0.05,0.04),DJ(9080728,0.5),0.07,0.66,0)),D.position.set(0,-0.5,0.06),D.rotation.z=0.18,B.add(D)}K.add(O,C);let P=0.5+E+0.42;return{g:K,legL:R,legR:A,armL:z,armR:B,body:O,head:C,h:P}}function F$(J,Q,Z,K=1){let $=Q*7*K;if(Z){let W=Math.sin($)*0.62;J.legL.rotation.x=W,J.legR.rotation.x=-W,J.armL.rotation.x=-W*0.7,J.armR.rotation.x=W*0.7,J.body.position.y=0.5+Math.abs(Math.cos($))*0.035,J.body.rotation.z=Math.sin($)*0.03,J.head.rotation.z=Math.sin($)*0.02}else{let W=Math.sin(Q*1.8)*0.035;J.legL.rotation.x*=0.85,J.legR.rotation.x*=0.85,J.armL.rotation.x=W,J.armR.rotation.x=-W,J.body.position.y=0.5+Math.max(0,Math.sin(Q*1.8))*0.012,J.body.rotation.z=0}}function xY(){let J=new v0,Q=DJ(15789540,0.95),Z=l0(new VJ(0.13,8,7),Q,0,0.14,0);Z.scale.set(1,0.9,1.25),J.add(Z);let K=l0(new VJ(0.07,7,6),Q,0,0.28,0.12);J.add(K),J.add(l0(M8(0.03,0.06,5),DJ(15245628,0.8),0,0.28,0.2)),J.add(l0(H9(0.035,0.05,0.03),DJ(13911354,0.85),0,0.35,0.11));for(let X of[-1,1])J.add(l0($9(0.008,0.008,0.08,4),DJ(15245628,0.8),X*0.04,0.04,0));let $=l0(M8(0.05,0.12,5),DJ(14275261,0.95),0,0.18,-0.15);return $.rotation.x=-S9/2.4,J.add($),{g:J,update:(X)=>{J.rotation.y=Math.sin(X*0.4)*0.6,J.position.y=Math.abs(Math.sin(X*2.4))*0.02,K.rotation.x=Math.max(0,Math.sin(X*2.2))*0.5}}}function gY(){let J=new v0,Q=DJ(7234137,0.95),Z=l0(new VJ(0.1,7,6),Q,0,0.11,0);Z.scale.set(1,0.85,1.5),J.add(Z);let K=l0(new VJ(0.07,7,6),Q,0,0.19,0.13);J.add(K);for(let X of[-1,1])J.add(l0(M8(0.025,0.05,4),Q,X*0.035,0.26,0.12));let $=l0($9(0.015,0.02,0.24,5),Q,0,0.15,-0.17);return $.rotation.x=1.1,J.add($),{g:J,update:(X)=>{$.rotation.z=Math.sin(X*2.6)*0.35}}}var iJ=Math.PI,kJ=(J,Q)=>(J-Q/2+0.5)*GJ,pQ=(J,Q)=>Math.round(J/GJ+Q/2-0.5);function JE(J){let Q=new Set,Z=J.buildings.find((Y)=>Y.type==="keep");if(!Z)return Q;let K=Z.x+1,$=Z.y+3,W=(Y,H)=>H*NJ+Y,X=(Y,H,U,N)=>{let q=Y,G=H,F=()=>{if(Q.add(W(q,G)),q!==U)q+=Math.sign(U-q);else if(G!==N)G+=Math.sign(N-G)},R=NJ*vJ;while((q!==U||G!==N)&&R-- >0)F();Q.add(W(U,N))};for(let Y of J.buildings){if(Y.type==="keep")continue;let H=xQ(Y);X(K,$,Y.x+Math.floor(H.w/2),Y.y>$?Y.y-1:Y.y+H.d)}return Q}class D${renderer;scene=new UQ;cam;canvas;cfg;mats;prof;cb;st;azim=iJ/4;elev=0.9273;target=new v(0,0,0);view=30;viewMin=14;viewMax=46;camR=90;azimTarget=iJ/4;views=new Map;units=[];animals=[];birds=[];mists=[];roadSet=new Set;banners=[];selRing;ghost=null;ghostTile;moveId=null;buildType=null;ghostGX=0;ghostGY=0;ray=new TQ;ptrDown={x:0,y:0,t:0,moved:!1,id:-1};pinch={d0:0,view0:24,active:!1};pointers=new Map;selected=null;disposeFns=[];ro;raf=0;lastT=0;clock=0;constructor(J,Q,Z,K,$,W){this.canvas=J,this.st=Q,this.cfg=Z,this.prof=K,this.cb=W,this.bannerTexture=$,this.mats=kY(Z,$),this.renderer=new Q$({canvas:J,antialias:K.tier!=="low",powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,K.dpr)),this.renderer.outputColorSpace=B9,this.renderer.shadowMap.enabled=K.shadows>0,this.renderer.shadowMap.type=a6;let X=document.createElement("canvas");X.width=2,X.height=256;let Y=X.getContext("2d"),H=Y.createLinearGradient(0,0,0,256);H.addColorStop(0,Z.skyTop),H.addColorStop(1,Z.skyBot),Y.fillStyle=H,Y.fillRect(0,0,2,256);let U=new O8(X);U.colorSpace=B9,this.scene.background=U,this.scene.fog=new e7(Z.fogCol,Z.fogNear,Z.fogFar),this.cam=new k7(-10,10,10,-10,1,400);let N=new CQ(new y0(Z.hemiSky),new y0(Z.hemiGround),0.95);this.scene.add(N);let q=new PQ(new y0(Z.sunCol),1.6);if(q.position.set(...Z.sunPos),K.shadows>0){q.castShadow=!0,q.shadow.mapSize.set(K.shadows,K.shadows);let F=q.shadow.camera;F.left=-34,F.right=34,F.top=34,F.bottom=-34,F.far=160,q.shadow.bias=-0.0006}this.scene.add(q),this.scene.add(new IQ(16777215,Z.ambient)),this.roadSet=JE(Q),this.buildEnvironment(this.roadSet);let G=new p8(0.92,1.08,28);this.selRing=new CJ(G,new b8({color:new y0(Z.accent),transparent:!0,opacity:0.95,side:aJ})),this.selRing.rotation.x=-iJ/2,this.selRing.position.y=0.06,this.selRing.visible=!1,this.scene.add(this.selRing),this.ghostTile=new CJ(new h9(GJ,GJ),new b8({color:4513126,transparent:!0,opacity:0.35})),this.ghostTile.rotation.x=-iJ/2,this.ghostTile.visible=!1,this.scene.add(this.ghostTile),this.syncAll(),this.spawnLife(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(J.parentElement??J),this.resize(),this.bindInput(),this.lastT=performance.now(),this.raf=requestAnimationFrame(this.loop)}buildEnvironment(J){let Q=this.cfg,Z=1024,K=document.createElement("canvas");K.width=K.height=1024;let $=K.getContext("2d");$.fillStyle=Q.groundTint,$.fillRect(0,0,1024,1024);let W=this.st.createdAt%1e5>>>0,X=()=>(W=W*1664525+1013904223>>>0)/4294967296;for(let E=0;E<900;E++){$.fillStyle=X()>0.5?Q.groundDark:Q.groundTint,$.globalAlpha=0.12+X()*0.12;let k=8+X()*26;$.beginPath(),$.arc(X()*1024,X()*1024,k,0,iJ*2),$.fill()}$.globalAlpha=1;let Y=1024/NJ,H=[...J];$.fillStyle=Q.pathCol;for(let E of H){let k=E%NJ,z=Math.floor(E/NJ);$.globalAlpha=0.82,$.fillRect(k*Y-0.5,z*Y-0.5,Y+1,Y+1)}$.globalAlpha=0.22;for(let E=0;E<300&&H.length;E++){let k=H[E%H.length],z=k%NJ,B=Math.floor(k/NJ);$.fillStyle=E%2?"#4a3520":"#ffffff26",$.beginPath(),$.arc(z*Y+Math.random()*Y,B*Y+Math.random()*Y,1.4+Math.random()*2.4,0,iJ*2),$.fill()}$.globalAlpha=1;let U=new O8(K);U.colorSpace=B9,U.anisotropy=4;let N=new TJ({color:new y0(Q.stoneCol).multiplyScalar(0.72),roughness:1}),q=new TJ({map:U,roughness:1}),G=new CJ(lY(Q8+4,3,bQ+4),[N,N,q,N,N,N]);G.position.y=-1.5,G.receiveShadow=!0,this.scene.add(G);let F=new CJ(new x8(190,36),new TJ({color:new y0(Q.outerTint),roughness:1}));F.rotation.x=-iJ/2,F.position.y=-3.1,F.receiveShadow=!0,this.scene.add(F);for(let E=0;E<7;E++){let k=E/7*iJ*2+0.35,z=120+E%3*26,B=new CJ(new w9(22+E%4*9,34+E%3*18,6),new TJ({color:new y0(Q.stoneCol).lerp(new y0(Q.fogCol),0.45),roughness:1}));B.position.set(Math.cos(k)*z,11,Math.sin(k)*z),this.scene.add(B)}let R=this.prof.trees;for(let E=0;E<R;E++){let k=X()*iJ*2,z=Q8/2+6+X()*70,B=Math.cos(k)*z,C=Math.sin(k)*z,P=X(),D=P<0.45?N$(this.mats,E*13+1):P<0.8?G$(this.mats,E*7+3):jY(this.mats,E*5+2);D.position.set(B,-3.1,C),D.rotation.y=X()*iJ*2,this.scene.add(D)}for(let E=0;E<Math.floor(R/3);E++){let k=X()*iJ*2,z=Q8/2+5+X()*60,B=q$(this.mats,400+E*17);B.position.set(Math.cos(k)*z,-3.1,Math.sin(k)*z),this.scene.add(B)}for(let E=0;E<this.prof.props;E++){let k=X()*(NJ-2),z=X()*(vJ-2),B=k>=sJ.x0&&k<=sJ.x1+1&&z>=sJ.y0&&z<=sJ.y1+1,C=k<sJ.x0+0.9||k>sJ.x1+0.1||z<sJ.y0+0.9||z>sJ.y1+0.1;if(B&&!C)continue;let P=kJ(k,NJ),D=kJ(z,vJ),V=X(),I=V<0.4?N$(this.mats,900+E):V<0.6?q$(this.mats,950+E):V<0.85?vY(this.mats,980+E,5):G$(this.mats,700+E);I.position.set(P,0,D),this.scene.add(I)}let A=hY(this.mats,3.4);A.position.set(Q8/2-1.5,0.02,-bQ/2+5.5),this.scene.add(A);let O=this.st.buildings.find((E)=>E.type==="keep");if(O){let E=kJ(O.x+1,NJ),k=kJ(O.y+3,vJ);for(let B of[-3.4,3.4]){let C=fY(this.mats);C.position.set(E+B,0,k+1.2),this.scene.add(C)}let z=yY(this.mats,Q);z.position.set(E-6.5,0,k+4.5),this.scene.add(z)}if(Q.mist){let E=document.createElement("canvas");E.width=E.height=128;let k=E.getContext("2d"),z=k.createRadialGradient(64,64,6,64,64,62);z.addColorStop(0,"rgba(255,255,255,0.55)"),z.addColorStop(1,"rgba(255,255,255,0)"),k.fillStyle=z,k.fillRect(0,0,128,128);let B=new O8(E);for(let C=0;C<7;C++){let P=new L7(new h8({map:B,transparent:!0,opacity:0.16,depthWrite:!1}));P.scale.set(16,5,1),P.position.set((X()-0.5)*Q8,0.8+X()*1.4,(X()-0.5)*bQ),this.scene.add(P),this.mists.push(P)}}}makeBuildingGroup(J){let Q=this.cfg,Z,K=this.bannerTexture;switch(J.type){case"keep":Z=AY(this.mats,Q,K,J.lvl);break;case"house":Z=CY(this.mats,Q);break;case"farm":Z=_Y(this.mats,Q);break;case"lumber":Z=PY(this.mats,Q);break;case"mine":Z=IY(this.mats,Q);break;case"storage":Z=TY(this.mats,Q);break;case"barracks":Z=wY(this.mats,Q,K);break;case"tower":Z=SY(this.mats,Q);break;default:throw Error("unknown building type")}let $=IJ[J.type].size;return Z.scale.setScalar(1+(J.lvl-1)*0.045),Z.position.set(kJ(J.x,NJ)+($[0]-1)*GJ/2,0,kJ(J.y,vJ)+($[1]-1)*GJ/2),Z.rotation.y=0,Z.traverse((W)=>{W.userData.bid=J.id}),Z}bannerTexture=null;setBannerTexture(J){this.bannerTexture=J}makeScaffold(J,Q){let Z=new v0,K=this.mats.wood,$=1.6+Math.max(J,Q)*0.35;for(let[X,Y]of[[-1,-1],[1,-1],[-1,1],[1,1]])Z.add(O$(QE(0.06,0.07,$,5),K,X*J/2,$/2,Y*Q/2));for(let X=0;X<3;X++){let Y=O$(pY(J+0.2,0.07,0.07),K,0,$/3*(X+1),Q/2);Y.rotation.z=X%2?0.04:-0.04,Z.add(Y),Z.add(O$(pY(0.07,0.07,Q+0.2),K,J/2,$/3*(X+1),0))}let W=new CJ(new h9(J*0.9,$*0.55),new TJ({color:14207918,roughness:1,side:aJ}));return W.position.y=$*0.62,Z.add(W),Z}makeRing(){return new CJ(new p8(0.5,0.68,24,1,0,iJ*2),new b8({color:16765527,side:aJ,transparent:!0,opacity:0.95}))}makeSign(J){let Q=document.createElement("canvas");Q.width=96,Q.height=96;let Z=Q.getContext("2d"),K=(X)=>{Z.clearRect(0,0,96,96),Z.fillStyle="rgba(24,20,14,0.85)",Z.strokeStyle=this.cfg.accent,Z.lineWidth=5,ZE(Z,18,14,60,60,14),Z.fill(),Z.stroke(),Z.fillStyle="#ffe9b0",Z.font="bold 40px Vazirmatn, sans-serif",Z.textAlign="center",Z.textBaseline="middle",Z.fillText(rJ(X),48,47)};K(J);let $=new O8(Q);$.colorSpace=B9;let W=new L7(new h8({map:$,transparent:!0,depthWrite:!1}));return W.scale.set(0.85,0.85,1),W.userData.redraw=(X)=>{K(X),$.needsUpdate=!0},W}makeBubble(){let J=document.createElement("canvas");J.width=128,J.height=128;let Q=J.getContext("2d"),Z=(W)=>{Q.clearRect(0,0,128,128),Q.fillStyle="rgba(28,24,16,0.88)",Q.beginPath(),Q.arc(64,58,40,0,iJ*2),Q.fill(),Q.beginPath(),Q.moveTo(52,92),Q.lineTo(76,92),Q.lineTo(64,112),Q.closePath(),Q.fill();let X={wood:"#a8703d",stone:"#b3b8c2",iron:"#7e8ea6",food:"#e8c454",coin:"#f2c545"};Q.fillStyle=X[W]??"#f2c545",Q.beginPath(),Q.arc(64,58,20,0,iJ*2),Q.fill(),Q.fillStyle="#fff",Q.font="bold 34px Vazirmatn, sans-serif",Q.textAlign="center",Q.textBaseline="middle",Q.fillText("+",64,59)};Z("wood");let K=new O8(J);K.colorSpace=B9;let $=new L7(new h8({map:K,transparent:!0,depthWrite:!1}));return $.scale.set(1,1,1),$.visible=!1,$.userData.redraw=(W)=>{Z(W),K.needsUpdate=!0},$}syncAll(){let J=new Set;for(let Q of this.st.buildings){J.add(Q.id);let Z=this.views.get(Q.id);if(!Z){let K=this.makeBuildingGroup(Q);this.scene.add(K),Z={b:Q,group:K,banners:[]},this.views.set(Q.id,Z),this.collectBanners(K,Z)}this.refreshView(Z)}for(let[Q,Z]of[...this.views])if(!J.has(Q))this.scene.remove(Z.group),mQ(Z.group),this.views.delete(Q)}refreshBuilding(J){let Q=this.views.get(J);if(Q)this.refreshView(Q)}collectBanners(J,Q){J.traverse((Z)=>{let K=Z.banner;if(K)Q.banners.push(K),this.banners.push(K)})}refreshView(J){let Q=J.b,Z=Q.doneAt>0;if(J.group.visible=!Z,Z){if(!J.scaffold){let K=IJ[Q.type].size;J.scaffold=this.makeScaffold(K[0]*GJ*0.86,K[1]*GJ*0.86);let $=kJ(Q.x,NJ)+(K[0]-1)*GJ/2,W=kJ(Q.y,vJ)+(K[1]-1)*GJ/2;J.scaffold.position.set($,0,W),J.ring=this.makeRing(),J.ring.rotation.x=-iJ/2,J.ring.position.set($,0.09,W),this.scene.add(J.scaffold,J.ring)}if(J.sign)J.sign.visible=!1;if(J.bubble)J.bubble.visible=!1}else{if(J.scaffold)this.scene.remove(J.scaffold,J.ring),mQ(J.scaffold),J.scaffold=void 0,J.ring=void 0;if(!J.sign)J.sign=this.makeSign(Q.lvl),this.scene.add(J.sign),J.bubble=this.makeBubble(),this.scene.add(J.bubble);J.sign.userData.redraw(Q.lvl);let K=IJ[Q.type].size,$=kJ(Q.x,NJ)+(K[0]-1)*GJ/2,W=kJ(Q.y,vJ)+(K[1]-1)*GJ/2,X=Q.type==="keep"?7.6:Q.type==="tower"?7.1:3.4;J.sign.position.set($+K[0]*0.55,X*0.55+1.6,W),J.bubble.position.set($-K[0]*0.55,X*0.55+1.7,W)}}spawnLife(){["swordsman","swordsman","archer","spearman","guard"].forEach(($,W)=>{let X=E$(this.cfg,$,100+W*37);X.g.userData.noRay=!0;let Y=this.randRoad();this.scene.add(X.g),this.units.push({u:X,gx:Y[0],gy:Y[1],tx:Y[0],ty:Y[1],speed:0.75+W%3*0.16,t0:performance.now()})});for(let $=0;$<2;$++){let W=E$(this.cfg,"villager",300+$*53);W.g.userData.noRay=!0;let X=this.randRoad();this.scene.add(W.g),this.units.push({u:W,gx:X[0],gy:X[1],tx:X[0],ty:X[1],speed:0.6+$*0.1,t0:performance.now()})}let Q=this.st.buildings.filter(($)=>$.type==="farm"),Z=0;for(let $ of Q){let W=xQ($);for(let X=0;X<2;X++){let Y=xY(),H=kJ($.x,NJ)+2+X*1.1,U=kJ($.y,vJ)+W[1]*GJ+1.2+X*0.7;Y.g.position.set(H,0,U),this.scene.add(Y.g),this.animals.push({a:Y,ox:H,oz:U}),Z++}}let K=this.st.buildings.find(($)=>$.type==="keep");if(K&&Z>0){let $=gY();$.g.position.set(kJ(K.x+1,NJ)-2.6,0,kJ(K.y+3,vJ)+2.8),this.scene.add($.g),this.animals.push({a:$,ox:$.g.position.x,oz:$.g.position.z})}for(let $=0;$<3;$++){let W=bY(this.mats);this.scene.add(W.g),this.birds.push({g:W.g,update:W.update,r:14+$*5,a:$*2.1,h:9+$*2.2,s:0.24+$*0.05})}}randRoad(){let J=[...this.roadSet];if(!J.length)return[NJ/2,vJ/2];let Q=J[Math.floor(Math.random()*J.length)];return[Q%NJ,Math.floor(Q/NJ)]}stepUnits(J,Q){for(let Z of this.units){let K=Z.tx-Z.gx,$=Z.ty-Z.gy;if(Math.abs(K)<0.02&&Math.abs($)<0.02){if(F$(Z.u,Q,!1),Math.random()<J*0.5){let W=[];for(let[X,Y]of[[1,0],[-1,0],[0,1],[0,-1]])if(this.roadSet.has((Z.gy+Y)*NJ+Z.gx+X))W.push([Z.gx+X,Z.gy+Y]);if(W.length){let[X,Y]=W[Math.floor(Math.random()*W.length)];Z.tx=X,Z.ty=Y}}}else{let W=kJ(Z.gx,NJ),X=kJ(Z.gy,vJ),Y=kJ(Z.tx,NJ),H=kJ(Z.ty,vJ),U=Y-W,N=H-X,q=Math.hypot(U,N),G=Z.speed*GJ*J;if(q<=G)Z.gx=Z.tx,Z.gy=Z.ty;else Z.gx+=U/GJ*(G/GJ)/(q/GJ),Z.gy+=N/GJ*(G/GJ)/(q/GJ);Z.u.g.position.set(kJ(Z.gx,NJ),0,kJ(Z.gy,vJ)),Z.u.g.rotation.y=Math.atan2(U,N),F$(Z.u,Q,!0,Z.speed)}}for(let Z of this.units)Z.u.g.position.set(kJ(Z.gx,NJ),0,kJ(Z.gy,vJ));for(let Z of this.animals)Z.a.g.position.x=Z.ox+Math.sin(Q*0.5+Z.ox)*0.35,Z.a.g.position.z=Z.oz+Math.cos(Q*0.37+Z.oz)*0.35,Z.a.update(Q);for(let Z of this.birds)Z.a+=J*Z.s,Z.g.position.set(Math.cos(Z.a)*Z.r,Z.h+Math.sin(Q*0.7+Z.r)*0.6,Math.sin(Z.a)*Z.r),Z.g.rotation.y=-Z.a,Z.update(Q)}select(J){if(this.selected=J,!J){this.selRing.visible=!1;return}let Q=this.views.get(J);if(!Q)return;let Z=IJ[Q.b.type].size,K=kJ(Q.b.x,NJ)+(Z[0]-1)*GJ/2,$=kJ(Q.b.y,vJ)+(Z[1]-1)*GJ/2,W=Math.max(Z[0],Z[1])*GJ*0.62;this.selRing.scale.setScalar(W),this.selRing.position.set(K,0.06,$),this.selRing.visible=!0}enterMove(J,Q){if(this.moveId=J,this.buildType=Q,this.ghost)this.scene.remove(this.ghost),mQ(this.ghost),this.ghost=null;if(this.ghostTile.visible=!1,J){let Z=this.views.get(J);if(!Z)return;Z.group.visible=!1,this.ghost=this.makeBuildingGroup(Z.b),this.ghost.traverse((K)=>{let $=K;if($.isMesh){$.castShadow=!1;let W=$.material.clone();W.transparent=!0,W.opacity=0.55,$.material=W}}),this.scene.add(this.ghost)}else if(Q){let Z=IJ[Q].size;this.ghost=new v0;let K=new CJ(new Y9(Z[0]*GJ*0.8,0.6,Z[1]*GJ*0.8),new TJ({color:11184810,transparent:!0,opacity:0.4}));K.position.y=0.3,this.ghost.add(K),this.scene.add(this.ghost)}}updateGhost(J,Q){if(!this.ghost)return;let Z=this.moveId?IJ[this.views.get(this.moveId).b.type].size[0]:IJ[this.buildType].size[0],K=this.moveId?IJ[this.views.get(this.moveId).b.type].size[1]:IJ[this.buildType].size[1];this.ghostGX=J,this.ghostGY=Q;let $=kJ(J,NJ)+(Z-1)*GJ/2,W=kJ(Q,vJ)+(K-1)*GJ/2;this.ghost.position.set($,0,W),this.ghostTile.position.set($,0.05,W),this.ghostTile.scale.set(Z,K,1),this.ghostTile.visible=!0;let X=this.moveId?!mY(this.st,this.moveId,J,Q,Z,K):!mY(this.st,null,J,Q,Z,K);this.ghostTile.material.color.set(X?4513126:14500932),this.ghostFree=X}ghostFree=!1;confirmMove(){if(!this.moveId||!this.ghostFree)return!1;let J=this.st.buildings.find((K)=>K.id===this.moveId);if(!J)return!1;J.x=this.ghostGX,J.y=this.ghostGY;let Q=this.views.get(J.id),Z=IJ[J.type].size;return Q.group.position.set(kJ(J.x,NJ)+(Z[0]-1)*GJ/2,0,kJ(J.y,vJ)+(Z[1]-1)*GJ/2),Q.group.visible=J.doneAt<=0,this.exitMove(),this.select(J.id),!0}cancelMove(){if(this.moveId){let J=this.views.get(this.moveId);if(J)J.group.visible=J.b.doneAt<=0}this.exitMove()}exitMove(){if(this.ghost)this.scene.remove(this.ghost),mQ(this.ghost),this.ghost=null;this.ghostTile.visible=!1,this.moveId=null,this.buildType=null}resize(){let J=this.canvas.parentElement??this.canvas,Q=J.clientWidth||window.innerWidth,Z=J.clientHeight||window.innerHeight;this.renderer.setSize(Q,Z,!1);let K=Q/Z;this.cam.left=-this.view/2*K,this.cam.right=this.view/2*K,this.cam.top=this.view/2,this.cam.bottom=-this.view/2,this.cam.updateProjectionMatrix()}applyCamera(){this.azim+=(this.azimTarget-this.azim)*0.14;let J=Math.cos(this.elev),Q=Math.sin(this.elev),Z=new v(Math.cos(this.azim)*J,Q,Math.sin(this.azim)*J);this.cam.position.copy(this.target).add(Z.multiplyScalar(this.camR)),this.cam.lookAt(this.target);let K=(this.canvas.clientWidth||1)/(this.canvas.clientHeight||1);this.cam.left=-this.view/2*K,this.cam.right=this.view/2*K,this.cam.top=this.view/2,this.cam.bottom=-this.view/2,this.cam.updateProjectionMatrix()}rotate(J){this.azimTarget+=J*(iJ/2)}clampTarget(){let J=Q8/2-2;this.target.x=Math.max(-J,Math.min(J,this.target.x)),this.target.z=Math.max(-J,Math.min(J,this.target.z))}screenRay(J,Q){let Z=this.canvas.getBoundingClientRect(),K=new Z0((J-Z.left)/Z.width*2-1,-((Q-Z.top)/Z.height)*2+1);return this.ray.setFromCamera(K,this.cam),this.ray}pickBuilding(J,Q){let K=this.screenRay(J,Q).intersectObjects(this.scene.children,!0);for(let $ of K){let W=$.object,X=!1;while(W){if(W.isSprite||W.userData.noRay){X=!0;break}W=W.parent}if(X)continue;let Y=$.object,H=null;while(Y){if(Y.userData&&Y.userData.bid){H=Y.userData.bid;break}Y=Y.parent}if(H){let U=this.st.buildings.find((N)=>N.id===H);return U&&U.doneAt<=0?H:null}return null}return null}groundPoint(J,Q){let Z=this.screenRay(J,Q),K=new R9(new v(0,1,0),0),$=new v;return Z.ray.intersectPlane(K,$)?$:null}bindInput(){let J=this.canvas,Q=(W)=>{if(J.setPointerCapture(W.pointerId),this.pointers.set(W.pointerId,{x:W.clientX,y:W.clientY}),this.pointers.size===1)this.ptrDown={x:W.clientX,y:W.clientY,t:performance.now(),moved:!1,id:W.pointerId};else if(this.pointers.size===2){let[X,Y]=[...this.pointers.values()];this.pinch={d0:Math.hypot(X.x-Y.x,X.y-Y.y),view0:this.view,active:!0}}},Z=(W)=>{if(!this.pointers.has(W.pointerId))return;let X=this.pointers.get(W.pointerId),Y=W.clientX-X.x,H=W.clientY-X.y;if(this.pointers.set(W.pointerId,{x:W.clientX,y:W.clientY}),this.pointers.size===2&&this.pinch.active){let[U,N]=[...this.pointers.values()],q=Math.hypot(U.x-N.x,U.y-N.y);this.view=Math.max(this.viewMin,Math.min(this.viewMax,this.pinch.view0*(this.pinch.d0/Math.max(20,q)))),this.resize();return}if(this.moveId||this.buildType){let U=this.groundPoint(W.clientX,W.clientY);if(U)this.updateGhost(pQ(U.x,NJ),pQ(U.z,vJ));return}if(Math.abs(W.clientX-this.ptrDown.x)+Math.abs(W.clientY-this.ptrDown.y)>8)this.ptrDown.moved=!0;if(this.ptrDown.moved){let U=this.view/(this.canvas.clientHeight||1),N=new v(Math.sin(this.azim),0,-Math.cos(this.azim)),q=new v(Math.cos(this.azim),0,Math.sin(this.azim));this.target.addScaledVector(N,-Y*U),this.target.addScaledVector(q,H*U),this.clampTarget()}},K=(W)=>{if(this.pointers.delete(W.pointerId),this.pointers.size<2)this.pinch.active=!1;if(this.ptrDown.id!==W.pointerId)return;let X=performance.now()-this.ptrDown.t;if(!this.ptrDown.moved&&X<600){if(this.moveId||this.buildType){let U=this.groundPoint(W.clientX,W.clientY);if(U){if(this.updateGhost(pQ(U.x,NJ),pQ(U.z,vJ)),this.ghostFree){if(this.moveId)this.confirmMove(),this.cb.onToast("سازه جابه‌جا شد.");else if(this.buildType)this.cb.onToast("جای سازه تأیید شد — از پنل بساز.")}}return}let H=this.pickBuilding(W.clientX,W.clientY);if(H)this.select(H),this.cb.onSelect(H);else{this.select(null),this.cb.onSelect(null);let U=this.groundPoint(W.clientX,W.clientY);if(U){for(let[N,q]of this.views)if(q.bubble&&q.bubble.visible&&q.bubble.position.distanceTo(U)<1.4){this.cb.onCollect(N);break}}}}},$=(W)=>{W.preventDefault(),this.view=Math.max(this.viewMin,Math.min(this.viewMax,this.view*(W.deltaY>0?1.08:0.93))),this.resize()};J.addEventListener("pointerdown",Q),J.addEventListener("pointermove",Z),J.addEventListener("pointerup",K),J.addEventListener("pointercancel",K),J.addEventListener("wheel",$,{passive:!1}),this.disposeFns.push(()=>{J.removeEventListener("pointerdown",Q),J.removeEventListener("pointermove",Z),J.removeEventListener("pointerup",K),J.removeEventListener("pointercancel",K),J.removeEventListener("wheel",$)})}loop=(J)=>{this.raf=requestAnimationFrame(this.loop);let Q=Math.min(0.05,(J-this.lastT)/1000);this.lastT=J,this.clock+=Q;let Z=this.clock;this.applyCamera(),this.stepUnits(Q,Z);for(let K of this.banners)K.update(Z);for(let K of this.mists)if(K.position.x+=Q*0.5,K.position.x>Q8/2+8)K.position.x=-Q8/2-8;this.selRing.rotation.z+=Q*0.8;for(let[,K]of this.views){if(K.scaffold&&K.ring&&K.b.doneAt>0){let W=IJ[K.b.type].timerMs,X=Math.max(0,Math.min(1,1-(K.b.doneAt-J)/W)),Y=new p8(0.5,0.68,24,1,-iJ/2,iJ*2*Math.max(0.02,X));K.ring.geometry.dispose(),K.ring.geometry=Y}if(K.bubble){let $=KE(K.b,J),W=$.kind,X=$.amount>=8;if(K.bubble.visible=X,X&&K.bubble.userData.lastKind!==W)K.bubble.userData.redraw(W),K.bubble.userData.lastKind=W;if(X)K.bubble.position.y=(K.b.type==="keep"?4.4:K.b.type==="tower"?4.2:2.6)+Math.sin(Z*2+K.b.x)*0.12}}this.renderer.render(this.scene,this.cam)};dispose(){cancelAnimationFrame(this.raf),this.ro.disconnect();for(let J of this.disposeFns)J();this.scene.traverse((J)=>{let Q=J;if(Q.isMesh||J.isSprite){Q.geometry?.dispose?.();let Z=Q.material;if(Array.isArray(Z))Z.forEach((K)=>K.dispose());else Z?.dispose?.()}}),this.renderer.dispose()}}var lY=(J,Q,Z)=>new Y9(J,Q,Z),QE=(J,Q,Z,K=6)=>new f9(J,Q,Z,K),pY=lY;function O$(J,Q,Z,K,$){let W=new CJ(J,Q);return W.position.set(Z,K,$),W.castShadow=!0,W}function ZE(J,Q,Z,K,$,W){J.beginPath(),J.moveTo(Q+W,Z),J.arcTo(Q+K,Z,Q+K,Z+$,W),J.arcTo(Q+K,Z+$,Q,Z+$,W),J.arcTo(Q,Z+$,Q,Z,W),J.arcTo(Q,Z,Q+K,Z,W),J.closePath()}function mQ(J){J.traverse((Q)=>{let Z=Q;if(Z.isMesh){Z.geometry?.dispose?.();let K=Z.material;if(Array.isArray(K))K.forEach(($)=>$.dispose());else K?.dispose?.()}})}function KE(J,Q){let Z=IJ[J.type];if(!Z.produce||J.doneAt>0)return{kind:"",amount:0};let K=Math.max(0,Math.min((Q-J.lastAt)/3600000,8)),$="",W=0;for(let X of Object.keys(Z.produce)){let Y=Math.min(Z.pCap??500,(Z.produce[X]??0)*J.lvl*K);if(Y>W)W=Y,$=X}return{kind:$,amount:W}}function mY(J,Q,Z,K,$,W){if(Z<sJ.x0||K<sJ.y0||Z+$-1>sJ.x1||K+W-1>sJ.y1)return!0;for(let X of J.buildings){if(X.id===Q)continue;let[Y,H]=IJ[X.type].size;if(Z<X.x+Y&&X.x<Z+$&&K<X.y+H&&X.y<K+W)return!0}return!1}function uY(){if(typeof navigator>"u")return"mid";let J=navigator.hardwareConcurrency??4,Q=navigator.deviceMemory??4,Z=Math.min(window.screen.width,window.screen.height)<420,K=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);if(J>=8&&Q>=6&&!Z)return"high";if(J>=4&&Q>=3)return K?"mid":"high";return"low"}var $E={high:{tier:"high",dpr:2,clothSegments:[34,46],embers:170,worldShadowMap:1024,terrainSegments:110,treeCount:90,grassInstances:900,particles:260,anisotropy:4},mid:{tier:"mid",dpr:1.6,clothSegments:[24,32],embers:90,worldShadowMap:0,terrainSegments:80,treeCount:60,grassInstances:450,particles:150,anisotropy:2},low:{tier:"low",dpr:1.25,clothSegments:[16,22],embers:50,worldShadowMap:0,terrainSegments:56,treeCount:34,grassInstances:0,particles:80,anisotropy:1}};function dY(J){return $E[J]}var R0=(J,Q,Z,K)=>({id:J,fa:Q,desc:Z,theme:K}),R$=[{id:"targon",fa:"تارگون",en:"TARGON",color:"#c8102e",accent:"#f5c542",lore:"سرزمین اژدهای طلایی و تاج شکوه. پادشاهان تارگون از آتش کوره‌های سپیدار سر برآوردند و پرچم سرخ آنان بر بلندترین برج‌های سرزمین‌های هفتگانه در اهتزاز است.",motto:"از خاکستر، تاج",flagCloth:"./assets/flags/targon_cloth.webp",flagNormal:"./assets/flags/targon_normal.webp",art:"./assets/flags/targon_art.webp",wind:{strength:1,speed:1.9,gust:0.55},note:50,unlocked:!0,lands:[R0("t1","سپیده‌دم","جایی که نخستین نور خورشید بر دشت‌های تارگون می‌افتد؛ نقطه آغاز هر سفر.","dawn"),R0("t2","دهکده آذرین","دهکده‌ای برپا شده بر دل آتش خاموش؛ شومینه‌ها هرگز سرد نمی‌شوند.","emberVillage"),R0("t3","میدان هم‌پیمانان","میدان پیمان خاندان‌ها؛ صدای طبل بشارت هنوز در باد می‌پیچد.","alliesField"),R0("t4","بازار کهن","کهن‌ترین بازار سرزمین‌های هفتگانه؛ عطر ادویه و صدای سکه در کوچه‌ها جاری است.","oldBazaar"),R0("t5","دشت سبز","دشت بی‌پایان سبز، زادگاه اسبان آزاد و بادهای شاد.","greenPlain"),R0("t6","جنگل زمرد","جنگلی که نور در آن سبز می‌شود؛ رازهای کهن زیر خزه خفته‌اند.","emeraldForest"),R0("t7","رود روشن","رودی زلال که داستان‌های تارگون را به دریا می‌رساند؛ پل سنگی نگهبان آن است.","brightRiver"),R0("t8","کوهستان سنگ‌نگهبان","قله‌های سنگی که چون نگهبانان خاموش بر مرزها می‌ایستند.","guardianMountains"),R0("t9","دژ نگهبان","دژ نظامی تارگون؛ شعله‌های دیده‌بانی هرگز خاموش نمی‌شوند.","guardianKeep"),R0("t10","ویرانه‌های خاموش","ویرانه‌ای از روزگار پیشین؛ زمزمه‌هایش را تنها شب می‌شنوی.","silentRuins"),R0("t11","دروازه سرخ","دروازه باشکوه سرزمین اژدها؛ گذرگاه ستون‌های آتش و افتخار.","redGate")]},{id:"dezhmaar",fa:"دژمار",en:"DEZHMAAR",color:"#1e3a6e",accent:"#7fb2ff",lore:"دژ باستانی بر لبه مه. عقاب طلایی دژمار بر پرچم سرمه‌ای‌اش، قرن‌هاست خاموش مرزهای شب را پاس می‌دارد و رازهایش را با هیچ بادی در میان نمی‌گذارد.",motto:"دیوارِ خوابِ شب",flagCloth:"./assets/flags/dezhmaar_cloth.webp",flagNormal:"./assets/flags/dezhmaar_normal.webp",art:"./assets/flags/dezhmaar_art.webp",wind:{strength:1.25,speed:2.3,gust:0.8},note:45,unlocked:!0,lands:[R0("d1","دروازه مه‌گرفته","دروازه‌ای که تنها هنگام طلوع از میان مه پدیدار می‌شود.","mistGate"),R0("d2","دهکده سنگ‌سرد","خانه‌های سنگی با شومینه‌های کم‌سو؛ مهمان‌نوازی‌اش سخت ولی وفادار است.","coldStoneVillage"),R0("d3","پل زنجیری","پلی از زنجیر و چوب بر دره ابرها؛ هر تخته‌اش داستانی دارد.","chainBridge"),R0("d4","بازار سایه","بازاری در دل سنگ؛ چیزی که در روشنی یافت نمی‌شود، اینجاست.","shadowBazaar"),R0("d5","جنگل کاج سیاه","کاج‌هایی به بلندای برج؛ زیر تاجشان شب همیشه زودتر می‌رسد.","blackPineForest"),R0("d6","مرداب فانوس‌ها","فانوس‌های شناور مسیر را نشان می‌دهند؛ اگر به آن‌ها اعتماد کنی.","lanternMarsh"),R0("d7","رود تیره","رود عمیق و آرام که نام مسافرانش را نگه می‌دارد.","darkRiver"),R0("d8","کوهستان کلاغ","لانهٔ کلاغ‌های دژمار؛ چشم‌های سیاهشان همه‌چیز را دیده‌اند.","ravenMountains"),R0("d9","برج فالگیر","برجی که ستاره‌شناسان دژمار در آن سرنوشت را می‌خوانند.","seerTower"),R0("d10","ویرانه‌های دژمار","دژ کهنِ نیمه‌فروریخته؛ سنگ‌هایش هنوز هم سپر می‌شوند.","dezhmaarRuins"),R0("d11","دروازه شب","آخرین دروازه پیش از سرزمینِ بی‌ستاره؛ عبور از آن شجاعت می‌خواهد.","nightGate")]},{id:"argad",fa:"آرگاد",en:"ARGAD",color:"#1f6e43",accent:"#8fe3a1",lore:"درخت کهن و سنگِ مادر. آرگاد سرزمین درویشانِ تنومند و نگهبانان جنگل است؛ ریشه‌های درخت زندگی‌اش به اعماق زمین و خاطره‌ها گره خورده است.",motto:"ریشه، ستونِ آسمان",flagCloth:"./assets/flags/argad_cloth.webp",flagNormal:"./assets/flags/argad_normal.webp",art:"./assets/flags/argad_art.webp",wind:{strength:0.85,speed:1.6,gust:0.45},note:55,unlocked:!1,lands:[R0("a1","درختگاه سپیدار","دروازه جنگل آرگاد؛ شاخه‌های کهن بر مسافران طاق می‌سازند.","generic"),R0("a2","دهکده ریشه","خانه‌هایی در دل تنه درختان کهن؛ نور از شاخه‌ها می‌تراود.","generic"),R0("a3","چشمه زمرد","چشمه‌ای که آبش سبز است؛ نوشیدنش خاطره را زنده می‌کند.","generic"),R0("a4","سنگ‌چین کهن","دایره سنگ‌های ایستاده؛ تقویم کهن‌سالان آرگاد.","generic"),R0("a5","دشت گل‌ریز","دشتی زیر پایش گل و بر فرازش نوقا.","generic"),R0("a6","جنگل خزه","زمین نرم خزه؛ صدای پا در آن گم می‌شود.","generic"),R0("a7","رود شفاف","رودی به شفافی بلور؛ سنگ‌های کفش دیده می‌شوند.","generic"),R0("a8","کوهستان سرسبز","قله‌های پوشیده از جنگل؛ خانه عقاب‌های آرگاد.","generic"),R0("a9","پناهگاه نگهبان","دژ چوبی نگهبانان جنگل؛ آتشش هرگز بی‌مهمان نمی‌ماند.","generic"),R0("a10","وادی خاموشی","وادی‌ای که باد در آن آواز کهن می‌خواند.","generic"),R0("a11","دروازه سبز","دروازه درخت زندگی؛ گذرگاه پیمان‌بندان آرگاد.","generic")]},{id:"mardak",fa:"مرداک",en:"MARDAK",color:"#5b2a86",accent:"#c89bff",lore:"کلاغ تاج‌دار و بنفش شب. مرداک سرزمین جنگاوران سایه است؛ در شورایش، تاج تنها به شایستگی می‌رسد و پرچم بنفشش همیشه یک لبه در بادِ جنگ دارد.",motto:"تاجِ بالِ سیاه",flagCloth:"./assets/flags/mardak_cloth.webp",flagNormal:"./assets/flags/mardak_normal.webp",art:"./assets/flags/mardak_art.webp",wind:{strength:1.35,speed:2.45,gust:0.9},note:48,unlocked:!1,lands:[R0("m1","دروازه کلاغ","دروازه‌ای با نگین بنفش؛ کلاغ‌ها بر آن نوبت می‌دهند.","generic"),R0("m2","دهکده آذرخش","دهکده‌ای بر فراز تپه؛ آذرخش دوبار به برجش خورده است.","generic"),R0("m3","میدان زره","میدان تمرین جنگاوران؛ همیشه صدای سپر و شمشیر دارد.","generic"),R0("m4","بازار غنیمت","بازار بازرگانان مرداک؛ سکه‌هایش سرخ‌تر از جای دیگرند.","generic"),R0("m5","دشت خاکستر","دشت نبرد روزگار پیشین؛ علف از خاکستر زاده شده است.","generic"),R0("m6","جنگل کبود","درختانی با برگ بنفش‌فام؛ سایه‌ها اینجا سنگین‌ترند.","generic"),R0("m7","رود سپیدار","رودی سرد و تند؛ فقط پل‌های مرداک از آن می‌گذرند.","generic"),R0("m8","کوه کلاغ‌آشیان","قلعه سنگی بر قله؛ پادگان همیشگی پرندگان سیاه.","generic"),R0("m9","دژ تاج","تختگاه خاندان مرداک؛ تاج کلاغ بر دروازه‌اش نشسته است.","generic"),R0("m10","ویرانه جنگ","یادمان نبرد بزرگ؛ نام‌ها بر سنگ حک شده‌اند.","generic"),R0("m11","دروازه بنفش","دروازه شورای جنگ؛ از آن عبور کنند، دیگر عقب‌نشینی نیست.","generic")]},{id:"vergad",fa:"ورگاد",en:"VERGAD",color:"#1b4b9e",accent:"#ffd34d",lore:"ققنوس طلایی و آبی. ورگاد سرزمین رنسانس فانتزی است؛ هنر، موسیقی و شعله تجدید تولدش، هر صد سال برج‌هایش را نو می‌کند.",motto:"هر پایان، پرِ نو",flagCloth:"./assets/flags/vergad_cloth.webp",flagNormal:"./assets/flags/vergad_normal.webp",art:"./assets/flags/vergad_art.webp",wind:{strength:0.95,speed:2,gust:0.6},note:52,unlocked:!1,lands:[R0("v1","دروازه ققنوس","دروازه‌ای با الماس آبی؛ هنگام عبور، پر زرین می‌بخشد.","generic"),R0("v2","دهکده آواز","دهکده نوازندگان؛ هر خانه‌ای یک ساز است.","generic"),R0("v3","میدان جشن","میدان فواره‌ها و ریسمان‌های نور؛ جشن هرگز تمام نمی‌شود.","generic"),R0("v4","بازار شیشه‌گران","بازار شیشه‌های رنگین؛ نور در دست فروشندگان می‌رقصد.","generic"),R0("v5","دشت شکوفه","دشتی که همیشه بهاره است.","generic"),R0("v6","جنگل طلا","درختان با برگ زرین؛ باد، سکه پخش می‌کند.","generic"),R0("v7","رود بلور","رودی به رنگ آسمان ورگاد.","generic"),R0("v8","کوهستان پرنسا","قله‌های برفی برج‌های سفید؛ اقامتگاه شورای هنر.","generic"),R0("v9","دژ فانوس","دژ دریاچه؛ شب‌ها هزار فانوس بر پله‌هایش.","generic"),R0("v10","ویرانه اول","ویرانه نخستین آتش ورگاد؛ جایی که ققنوس زاده شد.","generic"),R0("v11","دروازه آبی","دروازه آبی و طلا؛ پیمان تجدید تولد.","generic")]},{id:"zardak",fa:"زرداک",en:"ZARDAK",color:"#d4a017",accent:"#3a6fd8",lore:"خورشید طلایی و تمدن کهن. زرداک سرزمین گنبدفیروزه‌ای و دانشنامه‌های ستاره است؛ خورشیدش هرگز غروب را باور نمی‌کند.",motto:"نور، میراثِ ما",flagCloth:"./assets/flags/zardak_cloth.webp",flagNormal:"./assets/flags/zardak_normal.webp",art:"./assets/flags/zardak_art.webp",wind:{strength:0.9,speed:1.75,gust:0.5},note:53,unlocked:!1,lands:[R0("z1","دروازه خورشید","دروازه‌ای با هاله طلایی؛ سنگ‌هایش گرم است.","generic"),R0("z2","دهکده کاهگل","خانه‌های گنبددار؛ خنکای خشت در گرمای روز.","generic"),R0("z3","میدان آفتاب","میدان ساعت آفتابی عظیم؛ ساعت شهر زرداک.","generic"),R0("z4","بازار ادویه","بازار زعفران و دارچین؛ رنگ‌ها به آسمان می‌ریزند.","generic"),R0("z5","دشت زرین","دشت گندم رسیده؛ باد موج می‌سازد.","generic"),R0("z6","جنگل سرو","سروهای استوار؛ نشان خاندان‌های زرداک.","generic"),R0("z7","رود فیروزه","رودی به رنگ گنبد مس؛ کاروان‌ها بر آن نوبت دارند.","generic"),R0("z8","کوهستان مفرغی","کانی‌های درخشان؛ کارگاه‌های آهنگری بر دامنه‌ها.","generic"),R0("z9","دژ خورشیدتاب","دژ گنبد طلایی؛ آرامگاه بنیان‌گذار زرداک.","generic"),R0("z10","ویرانه نجوم","رصدخانه کهن؛ خطوط سماق بر سنگش زنده‌اند.","generic"),R0("z11","دروازه زرین","دروازه تمدن کهن؛ کلیدش در نُه پرتو خورشید است.","generic")]},{id:"tarmad",fa:"تارماد",en:"TARMAD",color:"#6b21a8",accent:"#e9c46a",lore:"گوزن تاج‌دار و خاندان‌های قدرتمند. تارماد سرزمین شکارگاه‌های سرمه‌ای و پیمان‌های خونی است؛ شاخ‌های طلایی‌اش بر هر پرچم، ردّ یک پیمان است.",motto:"شاخِ پیمان",flagCloth:"./assets/flags/tarmad_cloth.webp",flagNormal:"./assets/flags/tarmad_normal.webp",art:"./assets/flags/tarmad_art.webp",wind:{strength:1.1,speed:2.1,gust:0.7},note:47,unlocked:!1,lands:[R0("r1","دروازه شاخ‌دار","دروازه‌ای با شاخ‌های طلایی متقاطع.","generic"),R0("r2","دهکده سواران","دهکده اسب‌داران تارماد؛ طبل شکار همیشه برپاست.","generic"),R0("r3","میدان پیمان","میدان سوگند خاندان‌ها؛ سنگ دایره‌ای پیمان.","generic"),R0("r4","بازار خز","بازار پوست و عاج؛ چانه‌زنی هنر تارمادی‌هاست.","generic"),R0("r5","دشت گوزن‌ها","دشت آزاد گوزن‌سانان؛ شکار در آن سوگند می‌خواهد.","generic"),R0("r6","جنگل سرمه‌ای","جنگل شب‌های تارماد؛ نوقای بنفش می‌درخشد.","generic"),R0("r7","رود شکارگاه","رود پرآب ماهی؛ جای پای گوزن بر گِلش.","generic"),R0("r8","کوهستان پیمان","قله‌ای که خاندان‌ها بر آن بیرق می‌نشانند.","generic"),R0("r9","دژ گوزن تاج‌دار","تختگاه فرمانروای تارماد؛ تالار شاخ‌ها.","generic"),R0("r10","ویرانه سوگند","جای نبرد خاندان‌ها؛ هنوز شب‌ها سکه‌ای در خاک می‌درخشد.","generic"),R0("r11","دروازه سرمه‌ای","دروازه شب‌های تارماد؛ عبور با سوگندِ گوزن.","generic")]}],JD=R$.reduce((J,Q)=>J+Q.lands.length,0);var p0=(J)=>{let Q=document.querySelector(J);if(!Q)throw Error("missing "+J);return Q},sY=new URLSearchParams(location.search),O9=sY.get("realm")??"targon";if(!Z$[O9])O9="targon";var B8=sY.get("land")??"t1",V8=Z$[O9],iY="lands.home";function WE(){try{let J=JSON.parse(localStorage.getItem(iY)||"null");if(J&&typeof J.r==="string"&&typeof J.l==="string")return J}catch{}return null}var M$=(J,Q)=>R$.find((Z)=>Z.id===J)?.lands.find((Z)=>Z.id===Q)?.fa??Q;function XE(){try{let J=localStorage.getItem("lands.quality");if(J==="high"||J==="mid"||J==="low")return J}catch{}return uY()}var Z8=XE(),YE=dY(Z8),HE={tier:Z8,dpr:YE.dpr,shadows:Z8==="high"?2048:Z8==="mid"?1024:0,trees:Z8==="high"?90:Z8==="mid"?55:30,props:Z8==="high"?26:Z8==="mid"?16:8},V$=VY(O9,B8),qJ=V$.st,oY=Date.now(),UE=O6(qJ,oY);if(V$.fresh){let J=FY[O9],Q=0;for(let[Z,K,$]of J.init)qJ.buildings.push({id:`i${Q++}`,type:$,lvl:1,targetLvl:1,x:Z,y:K,doneAt:0,lastAt:oY});g9(qJ)}var cY=0;function N9(J){let Q=p0("#toast");Q.textContent=J,Q.classList.add("on"),window.clearTimeout(cY),cY=window.setTimeout(()=>Q.classList.remove("on"),2600)}var NE=["wood","stone","iron","food","coin"],bJ,G9=null;function n8(){let J=$$(qJ);for(let Q of NE)p0(`#r-${Q}`).textContent=rJ(Math.floor(qJ.res[Q])),p0(`#c-${Q}`).textContent="/"+rJ(Math.floor(J[Q])),p0(`.res.r-${Q}`).classList.toggle("full",qJ.res[Q]>=J[Q]*0.98)}var aY=(J)=>Object.keys(J).map((Q)=>{let Z=J[Q]??0;return`<span class="c ${qJ.res[Q]<Z?"lack":""}">${E6[Q]}: ${rJ(Z)}</span>`}).join("");function GE(J){let Q=Math.max(0,Math.ceil(J/1000));return`${rJ(Math.floor(Q/60))}:${rJ(String(Q%60).padStart(2,"0"))}`}function R6(J){let Q=qJ.buildings.find((U)=>U.id===J);if(!Q)return;let Z=IJ[Q.type];G9=J,p0("#sel-name").textContent=Z.fa,p0("#sel-lvl").textContent=Q.doneAt>0?`سطح ${rJ(Q.targetLvl??Q.lvl)} در راه`:`سطح ${rJ(Q.lvl)}`,p0("#sel-sub").textContent=Q.doneAt>0?"در حال ساخت…":`${Z.size[0]}×${Z.size[1]} خانهٔ شبکه`,p0("#sel-desc").textContent=Z.desc;let K=p0("#sel-prod");if(Z.produce)K.innerHTML="<span>تولید در ساعت:</span>"+Object.keys(Z.produce).map((U)=>`<span>${E6[U]}: ${rJ(Math.round((Z.produce[U]??0)*Q.lvl))}</span>`).join("")+`<span>ظرفیت انبار سازه: ${rJ(Z.pCap??0)}</span>`;else if(Z.store)K.innerHTML="<span>افزودن سقف انبار در هر سطح:</span>"+Object.keys(Z.store).map((U)=>`<span>${E6[U]}: +${rJ(Z.store[U]??0)}</span>`).join("");else K.innerHTML="<span>سازهٔ دفاعی — برای نسخهٔ نبرد</span>";let $=p0("#btn-upgrade"),W=p0("#sel-cost"),X=p0("#sel-timer"),Y=p0("#btn-move"),H=p0("#btn-collect");if(Q.doneAt>0)$.disabled=!0,Y.disabled=!0,W.innerHTML="",X.textContent=`آماده‌سازی تا ${GE(Q.doneAt-Date.now())}`,H.style.display="none";else{if(Y.disabled=!1,X.textContent="",Q.lvl>=Z.maxLvl)$.disabled=!0,W.innerHTML='<span class="c">به بیشینهٔ سطح رسیده است</span>';else{let q=Y$(Q.type,Q.lvl+1);$.disabled=!gQ(qJ,q),W.innerHTML=`هزینهٔ ارتقا به سطح ${rJ(Q.lvl+1)}: `+aY(q)}let U=W$(Q,Date.now()),N=Object.keys(U).reduce((q,G)=>q+U[G],0);H.style.display=Z.produce&&N>=1?"flex":"none"}p0("#selpanel").classList.add("on")}function B$(){p0("#selpanel").classList.remove("on"),G9=null}var qE={onSelect:(J)=>{if(J)R6(J);else B$()},onCollect:(J)=>rY(J),onToast:N9};function rY(J){let Q=X$(qJ,J,Date.now());if(Object.keys(Q).reduce((K,$)=>K+Q[$],0)>0){let K=Object.keys(Q).filter(($)=>Q[$]>0).map(($)=>`${E6[$]} +${rJ(Math.floor(Q[$]))}`);if(N9(`برداشت شد: ${K.join(" · ")}`),g9(qJ),n8(),G9)R6(G9)}}var EE={house:"bi-house",farm:"bi-farm",lumber:"bi-lumber",mine:"bi-mine",storage:"bi-storage",barracks:"bi-barracks",tower:"bi-tower"};function FE(){let J=p0("#buildlist");J.innerHTML="",Object.keys(IJ).forEach((Q)=>{if(Q==="keep")return;let Z=IJ[Q],K=Y$(Q,1),$=gQ(qJ,K),W=document.createElement("div");W.className="buildele",W.innerHTML=`<div class="bic ${EE[Q]}"></div><div style="flex:1"><div class="bname">${Z.fa}</div><div class="bdesc">${Z.desc}</div><div class="costline" style="margin:4px 0 0">${aY(K)}</div></div><div style="font-size:11px;color:${$?"var(--ok)":"var(--bad)"}">${$?"آماده":"کمبود منبع"}</div>`,W.addEventListener("click",()=>{if(!$){N9("منابع کافی نیست.");return}p0("#buildmenu").classList.remove("on"),B$(),bJ.select(null),bJ.enterMove(null,Q),p0("#confirmhint").textContent=`جای ${Z.fa} را لمس کن`,p0("#confirmbar").classList.add("on")}),J.appendChild(W)}),p0("#buildmenu").classList.add("on")}function OE(){let J=p0("#missionlist");J.innerHTML="";for(let Q of BY){let{cur:Z,done:K}=LY(qJ,Q),$=Math.min(100,Math.round(Z/Q.goal*100)),W=document.createElement("div");W.className="mission",W.innerHTML=`<div class="mname">${Q.fa}</div><div class="mbar"><div style="width:${$}%"></div></div><div class="mmeta"><span>${rJ(Math.min(Z,Q.goal))} از ${rJ(Q.goal)}</span><span>${K?"انجام شد":$+"٪"}</span></div>`,J.appendChild(W)}}async function nY(){let J=WE();if(!J){try{localStorage.setItem(iY,JSON.stringify({r:O9,l:B8}))}catch{}J={r:O9,l:B8}}let Q=J.r===O9&&J.l===B8;p0("#boot-title").textContent=Q?`پایگاه خانگی تو — ${M$(O9,B8)} · ${V8.fa}`:`سفر در ${V8.fa} — ${M$(O9,B8)}`,p0("#realm-name").textContent=V8.fa,p0("#realmchip").textContent=Q?`سرزمین: ${V8.fa} · پایگاه خانگی تو`:`سرزمین: ${V8.fa} · سفر به ${M$(O9,B8)}`;let Z=await new Promise((H)=>{new AQ().load(V8.bannerTex,(U)=>{U.colorSpace=B9,H(U)},void 0,()=>H(null))}),K=document.createElement("canvas");if(p0("#stage").appendChild(K),bJ=new D$(K,qJ,V8,HE,Z,qE),UE)bJ.syncAll();n8(),p0("#btn-build").addEventListener("click",FE),p0("#btn-missions").addEventListener("click",()=>{OE(),p0("#missionsheet").classList.add("on")}),p0("#btn-settings").addEventListener("click",()=>p0("#settingsheet").classList.add("on")),p0("#btn-map").addEventListener("click",()=>{try{localStorage.setItem("lands.lastLand",JSON.stringify({r:O9,l:B8}))}catch{}location.href="/game/map/index.html"}),p0("#btn-alliance").addEventListener("click",()=>N9("اتحادها در نسخهٔ بعد می‌آیند — سپاه تو در حال شکل‌گرفتن است.")),p0("#btn-shop").addEventListener("click",()=>N9("فروشگاه رسمی فقط از طریق Backend فعال می‌شود؛ هیچ خرید مستقیمی وجود ندارد.")),p0("#btn-upgrade").addEventListener("click",()=>{if(!G9)return;let H=G9;if(H$(qJ,H,Date.now()))bJ.refreshBuilding(H),g9(qJ),n8(),R6(H),N9("ارتقا آغاز شد؛ تا پایان انتظار بکش.");else N9("منابع کافی نیست.")}),p0("#btn-move").addEventListener("click",()=>{if(!G9)return;let H=G9;B$(),bJ.enterMove(H,null),p0("#confirmhint").textContent="جای تازهٔ سازه را لمس کن",p0("#confirmbar").classList.add("on")}),p0("#btn-collect").addEventListener("click",()=>{if(G9)rY(G9)}),p0("#btn-rot-r").addEventListener("click",()=>bJ.rotate(1)),p0("#btn-rot-l").addEventListener("click",()=>bJ.rotate(-1)),p0("#btn-confirm").addEventListener("click",()=>{if(bJ.moveId)if(bJ.confirmMove())g9(qJ),N9("سازه جابه‌جا شد.");else N9("این‌جا جا نیست.");else if(bJ.buildType){let H=bJ.buildType;if(MY(qJ,H,bJ.ghostGX,bJ.ghostGY,Date.now()))bJ.syncAll(),g9(qJ),n8(),N9(`${IJ[H].fa} در حال ساخت است.`);else N9("منابع کافی یا جای مناسب نیست.")}p0("#confirmbar").classList.remove("on"),bJ.cancelMove()}),p0("#btn-cancel").addEventListener("click",()=>{p0("#confirmbar").classList.remove("on"),bJ.cancelMove()}),document.querySelectorAll("#settingsheet [data-q]").forEach((H)=>{H.addEventListener("click",()=>{let U=H.dataset.q;try{localStorage.setItem("lands.quality",U)}catch{}N9("کیفیت تغییر کرد — صفحه تازه‌سازی می‌شود."),setTimeout(()=>location.reload(),600)})});let $=!1;p0("#btn-reset").addEventListener("click",()=>{if(!$){$=!0,p0("#btn-reset").textContent="مطمئنی؟ دوباره بزن",setTimeout(()=>{$=!1,p0("#btn-reset").textContent="بازسازی دهکده"},2500);return}try{localStorage.removeItem(`lands.village.${O9}`)}catch{}location.reload()}),document.addEventListener("pointerdown",(H)=>{let U=H.target;for(let N of["#buildmenu","#missionsheet","#settingsheet"]){let q=p0(N);if(q.classList.contains("on")&&!q.contains(U)&&!(U.closest&&U.closest(".barbtn")))q.classList.remove("on")}}),fetch("/health",{cache:"no-store"}).then((H)=>H.ok?H.json():Promise.reject(H.status)).then((H)=>{p0("#serverdot").classList.toggle("on",!!(H&&(H.status==="ok"||H.database==="ok"))),p0("#serverdot").classList.toggle("off",!(H&&(H.status==="ok"||H.database==="ok")))}).catch(()=>{p0("#serverdot").classList.add("off")});let W=0,X=performance.now(),Y=(H)=>{if(W++,H-X>=1000)p0("#fps").textContent=`${W} fps`,W=0,X=H;requestAnimationFrame(Y)};requestAnimationFrame(Y),setInterval(()=>{let H=Date.now(),U=qJ.buildings.some((N)=>N.doneAt>0);if(O6(qJ,H)){if(bJ.syncAll(),N9("سازه‌ای آماده شد!"),G9)R6(G9)}if(U&&G9)R6(G9);n8()},1000),setInterval(()=>g9(qJ),5000),window.addEventListener("pagehide",()=>g9(qJ)),window.__VILLAGE={st:qJ,scene:bJ,addRes(H){Object.keys(H).forEach((U)=>{qJ.res[U]+=H[U]??0}),g9(qJ),n8()},forceFinish(H){let U=qJ.buildings.find((N)=>N.id===H);if(U)U.doneAt=1,O6(qJ,Date.now()),bJ.syncAll(),g9(qJ),n8()},upgrade(H){return H$(qJ,H,Date.now())},collect(H){return X$(qJ,H,Date.now())},buildings:()=>qJ.buildings.map((H)=>({id:H.id,type:H.type,lvl:H.lvl,x:H.x,y:H.y,doneAt:H.doneAt})),tier:Z8},setTimeout(()=>{if(p0("#boot").classList.add("off"),V$.fresh)N9(`دهکدهٔ ${V8.fa} از امروز مال توست — قلعه‌ات را آباد کن!`)},500)}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",nY);else nY();
