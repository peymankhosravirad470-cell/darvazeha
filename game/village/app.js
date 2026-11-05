var NW="187";var GW=0,MZ=1,qW=2;var d7=1,i6=2,E7=3,F7=0,H9=1,oJ=2,P8=0,u7=1,VZ=2,BZ=3,LZ=4,EW=5;var O7=100,FW=101,OW=102,DW=103,RW=104,MW=200,VW=201,BW=202,LW=203,kW=204,zW=205,AW=206,CW=207,_W=208,PW=209,IW=210,TW=211,wW=212,SW=213,jW=214,vW=0,yW=1,fW=2,kZ=3,hW=4,bW=5,xW=6,gW=7,pW=0,lW=1,mW=2,S9=0,zZ=1,AZ=2,CZ=3,_Z=4,PZ=5,IZ=6,TZ=7;var c7=301,D7=302,o6=303,a6=304,dW=1000,r6=1001,uW=1002,X8=1003,cW=1004;var n7=1005;var R9=1006,t6=1007;var H8=1008;var P9=1009,nW=1010,sW=1011,s7=1012,wZ=1013,U8=1014,s9=1015,j9=1016,SZ=1017,jZ=1018,I8=1020,iW=35902,oW=35899,aW=1021,rW=1022,i9=1023,R7=1026,N8=1027,tW=1028,vZ=1029,T8=1030,yZ=1031;var fZ=1033,e6=33776,JQ=33777,QQ=33778,ZQ=33779,hZ=35840,bZ=35841,xZ=35842,gZ=35843,pZ=36196,lZ=37492,mZ=37496,dZ=37488,uZ=37489,KQ=37490,cZ=37491,nZ=37808,sZ=37809,iZ=37810,oZ=37811,aZ=37812,rZ=37813,tZ=37814,eZ=37815,JK=37816,QK=37817,ZK=37818,KK=37819,$K=37820,WK=37821,YK=36492,XK=36494,HK=36495,UK=36283,NK=36284,$Q=36285,GK=36286;var qK=0,eW=1,w8="",M9="srgb",EK="srgb-linear",FK="linear",zJ="srgb";var JY=512,QY=513,ZY=514,OK=515,KY=516,$Y=517,DK=518,RK=519;var MK="300 es",VK=2000;function eX(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function JH(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function N7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function WY(){let J=N7("canvas");return J.style.display="block",J}var P$={},G7=null;function x7(...J){let Q="THREE."+J.shift();if(G7)G7("log",Q,...J);else console.log(Q,...J)}function YY(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let Z=J[1];if(Z&&Z.isStackTrace)J[0]+=" "+Z.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function c0(...J){J=YY(J);let Q="THREE."+J.shift();if(G7)G7("warn",Q,...J);else{let Z=J[0];if(Z&&Z.isStackTrace)console.warn(Z.getError(Q));else console.warn(Q,...J)}}function u0(...J){J=YY(J);let Q="THREE."+J.shift();if(G7)G7("error",Q,...J);else{let Z=J[0];if(Z&&Z.isStackTrace)console.error(Z.getError(Q));else console.error(Q,...J)}}function f7(...J){let Q=J.join(" ");if(Q in P$)return;P$[Q]=!0,c0(...J)}function XY(J,Q,Z){return new Promise(function(K,$){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:$();break;case J.TIMEOUT_EXPIRED:setTimeout(W,Z);break;default:K()}}setTimeout(W,Z)})}var HY={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class o9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let Z=this._listeners;if(Z[J]===void 0)Z[J]=[];if(Z[J].indexOf(Q)===-1)Z[J].push(Q)}hasEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return!1;return Z[J]!==void 0&&Z[J].indexOf(Q)!==-1}removeEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return;let K=Z[J];if(K!==void 0){let $=K.indexOf(Q);if($!==-1)K.splice($,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J.type];if(Z!==void 0){J.target=this;let K=Z.slice(0);for(let $=0,W=K.length;$<W;$++)K[$].call(this,J);J.target=null}}}var eJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var mQ=Math.PI/180,c6=180/Math.PI;function G8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,K=Math.random()*4294967295|0;return(eJ[J&255]+eJ[J>>8&255]+eJ[J>>16&255]+eJ[J>>24&255]+"-"+eJ[Q&255]+eJ[Q>>8&255]+"-"+eJ[Q>>16&15|64]+eJ[Q>>24&255]+"-"+eJ[Z&63|128]+eJ[Z>>8&255]+"-"+eJ[Z>>16&255]+eJ[Z>>24&255]+eJ[K&255]+eJ[K>>8&255]+eJ[K>>16&255]+eJ[K>>24&255]).toLowerCase()}function QJ(J,Q,Z){return Math.max(Q,Math.min(Z,J))}function QH(J,Q){return(J%Q+Q)%Q}function dQ(J,Q,Z){return(1-Z)*J+Z*Q}function UY(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function WQ(J){switch(J.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function NY(J,Q){if(Q.constructor===Float32Array)return J;let Z=WQ(Q);if(Z===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(J/Z,-1)}function GY(J,Q){if(Q.constructor===Float32Array)return J;let Z=WQ(Q);if(Z===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(J*Z)}class Z0{static{this.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,Z=this.y,K=J.elements;return this.x=K[0]*Q+K[3]*Z+K[6],this.y=K[1]*Q+K[4]*Z+K[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=QJ(this.x,J.x,Q.x),this.y=QJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=QJ(this.x,J,Q),this.y=QJ(this.y,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(QJ(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(QJ(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y;return Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let Z=Math.cos(Q),K=Math.sin(Q),$=this.x-J.x,W=this.y-J.y;return this.x=$*Z-W*K+J.x,this.y=$*K+W*Z+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class a9{constructor(J=0,Q=0,Z=0,K=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=Z,this._w=K}static slerpFlat(J,Q,Z,K,$,W,Y){let X=Z[K+0],H=Z[K+1],U=Z[K+2],N=Z[K+3],q=$[W+0],G=$[W+1],F=$[W+2],R=$[W+3];if(N!==R||X!==q||H!==G||U!==F){let A=X*q+H*G+U*F+N*R;if(A<0)q=-q,G=-G,F=-F,R=-R,A=-A;let O=1-Y;if(A<0.9995){let E=Math.acos(A),k=Math.sin(E);O=Math.sin(O*E)/k,Y=Math.sin(Y*E)/k,X=X*O+q*Y,H=H*O+G*Y,U=U*O+F*Y,N=N*O+R*Y}else{X=X*O+q*Y,H=H*O+G*Y,U=U*O+F*Y,N=N*O+R*Y;let E=1/Math.sqrt(X*X+H*H+U*U+N*N);X*=E,H*=E,U*=E,N*=E}}J[Q]=X,J[Q+1]=H,J[Q+2]=U,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,Z,K,$,W){let Y=Z[K],X=Z[K+1],H=Z[K+2],U=Z[K+3],N=$[W],q=$[W+1],G=$[W+2],F=$[W+3];return J[Q]=Y*F+U*N+X*G-H*q,J[Q+1]=X*F+U*q+H*N-Y*G,J[Q+2]=H*F+U*G+Y*q-X*N,J[Q+3]=U*F-Y*N-X*q-H*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,Z,K){return this._x=J,this._y=Q,this._z=Z,this._w=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:Z,_y:K,_z:$,_order:W}=J,Y=Math.cos,X=Math.sin,H=Y(Z/2),U=Y(K/2),N=Y($/2),q=X(Z/2),G=X(K/2),F=X($/2);switch(W){case"XYZ":this._x=q*U*N+H*G*F,this._y=H*G*N-q*U*F,this._z=H*U*F+q*G*N,this._w=H*U*N-q*G*F;break;case"YXZ":this._x=q*U*N+H*G*F,this._y=H*G*N-q*U*F,this._z=H*U*F-q*G*N,this._w=H*U*N+q*G*F;break;case"ZXY":this._x=q*U*N-H*G*F,this._y=H*G*N+q*U*F,this._z=H*U*F+q*G*N,this._w=H*U*N-q*G*F;break;case"ZYX":this._x=q*U*N-H*G*F,this._y=H*G*N+q*U*F,this._z=H*U*F-q*G*N,this._w=H*U*N+q*G*F;break;case"YZX":this._x=q*U*N+H*G*F,this._y=H*G*N+q*U*F,this._z=H*U*F-q*G*N,this._w=H*U*N-q*G*F;break;case"XZY":this._x=q*U*N-H*G*F,this._y=H*G*N-q*U*F,this._z=H*U*F+q*G*N,this._w=H*U*N+q*G*F;break;default:c0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let Z=Q/2,K=Math.sin(Z);return this._x=J.x*K,this._y=J.y*K,this._z=J.z*K,this._w=Math.cos(Z),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,Z=Q[0],K=Q[4],$=Q[8],W=Q[1],Y=Q[5],X=Q[9],H=Q[2],U=Q[6],N=Q[10],q=Z+Y+N;if(q>0){let G=0.5/Math.sqrt(q+1);this._w=0.25/G,this._x=(U-X)*G,this._y=($-H)*G,this._z=(W-K)*G}else if(Z>Y&&Z>N){let G=2*Math.sqrt(1+Z-Y-N);this._w=(U-X)/G,this._x=0.25*G,this._y=(K+W)/G,this._z=($+H)/G}else if(Y>N){let G=2*Math.sqrt(1+Y-Z-N);this._w=($-H)/G,this._x=(K+W)/G,this._y=0.25*G,this._z=(X+U)/G}else{let G=2*Math.sqrt(1+N-Z-Y);this._w=(W-K)/G,this._x=($+H)/G,this._y=(X+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let Z=J.dot(Q)+1;if(Z<0.00000001)if(Z=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Z;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Z;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=Z;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(QJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let Z=this.angleTo(J);if(Z===0)return this;let K=Math.min(1,Q/Z);return this.slerp(J,K),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:Z,_y:K,_z:$,_w:W}=J,Y=Q._x,X=Q._y,H=Q._z,U=Q._w;return this._x=Z*U+W*Y+K*H-$*X,this._y=K*U+W*X+$*Y-Z*H,this._z=$*U+W*H+Z*X-K*Y,this._w=W*U-Z*Y-K*X-$*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:Z,_y:K,_z:$,_w:W}=J,Y=this.dot(J);if(Y<0)Z=-Z,K=-K,$=-$,W=-W,Y=-Y;let X=1-Q;if(Y<0.9995){let H=Math.acos(Y),U=Math.sin(H);X=Math.sin(X*H)/U,Q=Math.sin(Q*H)/U,this._x=this._x*X+Z*Q,this._y=this._y*X+K*Q,this._z=this._z*X+$*Q,this._w=this._w*X+W*Q,this._onChangeCallback()}else this._x=this._x*X+Z*Q,this._y=this._y*X+K*Q,this._z=this._z*X+$*Q,this._w=this._w*X+W*Q,this.normalize();return this}slerpQuaternions(J,Q,Z){return this.copy(J).slerp(Q,Z)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),Z=Math.random(),K=Math.sqrt(1-Z),$=Math.sqrt(Z);return this.set(K*Math.sin(J),K*Math.cos(J),$*Math.sin(Q),$*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class v{static{this.prototype.isVector3=!0}constructor(J=0,Q=0,Z=0){this.x=J,this.y=Q,this.z=Z}set(J,Q,Z){if(Z===void 0)Z=this.z;return this.x=J,this.y=Q,this.z=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(I$.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(I$.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements;return this.x=$[0]*Q+$[3]*Z+$[6]*K,this.y=$[1]*Q+$[4]*Z+$[7]*K,this.z=$[2]*Q+$[5]*Z+$[8]*K,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements,W=1/($[3]*Q+$[7]*Z+$[11]*K+$[15]);return this.x=($[0]*Q+$[4]*Z+$[8]*K+$[12])*W,this.y=($[1]*Q+$[5]*Z+$[9]*K+$[13])*W,this.z=($[2]*Q+$[6]*Z+$[10]*K+$[14])*W,this}applyQuaternion(J){let Q=this.x,Z=this.y,K=this.z,$=J.x,W=J.y,Y=J.z,X=J.w,H=2*(W*K-Y*Z),U=2*(Y*Q-$*K),N=2*($*Z-W*Q);return this.x=Q+X*H+W*N-Y*U,this.y=Z+X*U+Y*H-$*N,this.z=K+X*N+$*U-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,Z=this.y,K=this.z,$=J.elements;return this.x=$[0]*Q+$[4]*Z+$[8]*K,this.y=$[1]*Q+$[5]*Z+$[9]*K,this.z=$[2]*Q+$[6]*Z+$[10]*K,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=QJ(this.x,J.x,Q.x),this.y=QJ(this.y,J.y,Q.y),this.z=QJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=QJ(this.x,J,Q),this.y=QJ(this.y,J,Q),this.z=QJ(this.z,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(QJ(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:Z,y:K,z:$}=J,W=Q.x,Y=Q.y,X=Q.z;return this.x=K*X-$*Y,this.y=$*W-Z*X,this.z=Z*Y-K*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let Z=J.dot(this)/Q;return this.copy(J).multiplyScalar(Z)}projectOnPlane(J){return uQ.copy(this).projectOnVector(J),this.sub(uQ)}reflect(J){return this.sub(uQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(QJ(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y,K=this.z-J.z;return Q*Q+Z*Z+K*K}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,Z){let K=Math.sin(Q)*J;return this.x=K*Math.sin(Z),this.y=Math.cos(Q)*J,this.z=K*Math.cos(Z),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,Z){return this.x=J*Math.sin(Q),this.y=Z,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),Z=this.setFromMatrixColumn(J,1).length(),K=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=Z,this.z=K,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,Z=Math.sqrt(1-Q*Q);return this.x=Z*Math.cos(J),this.y=Q,this.z=Z*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var uQ=new v,I$=new a9;class s0{static{this.prototype.isMatrix3=!0}constructor(J,Q,Z,K,$,W,Y,X,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,Z,K,$,W,Y,X,H)}set(J,Q,Z,K,$,W,Y,X,H){let U=this.elements;return U[0]=J,U[1]=K,U[2]=Y,U[3]=Q,U[4]=$,U[5]=X,U[6]=Z,U[7]=W,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],this}extractBasis(J,Q,Z){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),Z.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,K=Q.elements,$=this.elements,W=Z[0],Y=Z[3],X=Z[6],H=Z[1],U=Z[4],N=Z[7],q=Z[2],G=Z[5],F=Z[8],R=K[0],A=K[3],O=K[6],E=K[1],k=K[4],z=K[7],B=K[2],C=K[5],P=K[8];return $[0]=W*R+Y*E+X*B,$[3]=W*A+Y*k+X*C,$[6]=W*O+Y*z+X*P,$[1]=H*R+U*E+N*B,$[4]=H*A+U*k+N*C,$[7]=H*O+U*z+N*P,$[2]=q*R+G*E+F*B,$[5]=q*A+G*k+F*C,$[8]=q*O+G*z+F*P,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8];return Q*W*U-Q*Y*H-Z*$*U+Z*Y*X+K*$*H-K*W*X}invert(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8],N=U*W-Y*H,q=Y*X-U*$,G=H*$-W*X,F=Q*N+Z*q+K*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/F;return J[0]=N*R,J[1]=(K*H-U*Z)*R,J[2]=(Y*Z-K*W)*R,J[3]=q*R,J[4]=(U*Q-K*X)*R,J[5]=(K*$-Y*Q)*R,J[6]=G*R,J[7]=(Z*X-H*Q)*R,J[8]=(W*Q-Z*$)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,Z,K,$,W,Y){let X=Math.cos($),H=Math.sin($);return this.set(Z*X,Z*H,-Z*(X*W+H*Y)+W+J,-K*H,K*X,-K*(-H*W+X*Y)+Y+Q,0,0,1),this}scale(J,Q){return f7("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cQ.makeScale(J,Q)),this}rotate(J){return f7("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cQ.makeRotation(-J)),this}translate(J,Q){return f7("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,Z,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,Z=J.elements;for(let K=0;K<9;K++)if(Q[K]!==Z[K])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<9;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var cQ=new s0,T$=new s0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),w$=new s0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function ZH(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function($,W,Y){if(this.enabled===!1||W===Y||!W||!Y)return $;if(this.spaces[W].transfer==="srgb")$.r=c9($.r),$.g=c9($.g),$.b=c9($.b);if(this.spaces[W].primaries!==this.spaces[Y].primaries)$.applyMatrix3(this.spaces[W].toXYZ),$.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")$.r=U7($.r),$.g=U7($.g),$.b=U7($.b);return $},workingToColorSpace:function($,W){return this.convert($,this.workingColorSpace,W)},colorSpaceToWorking:function($,W){return this.convert($,W,this.workingColorSpace)},getPrimaries:function($){return this.spaces[$].primaries},getTransfer:function($){if($==="")return"linear";return this.spaces[$].transfer},getToneMappingMode:function($){return this.spaces[$].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function($,W=this.workingColorSpace){return $.fromArray(this.spaces[W].luminanceCoefficients)},define:function($){Object.assign(this.spaces,$)},_getMatrix:function($,W,Y){return $.copy(this.spaces[Y].fromXYZ).multiply(this.spaces[W].toXYZ)},_getDrawingBufferColorSpace:function($){return this.spaces[$].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function($=this.workingColorSpace){return this.spaces[$].workingColorSpaceConfig.unpackColorSpace}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],Z=[0.2126,0.7152,0.0722],K=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:K,transfer:"linear",toXYZ:T$,fromXYZ:w$,luminanceCoefficients:Z,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:K,transfer:"srgb",toXYZ:T$,fromXYZ:w$,luminanceCoefficients:Z,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var $J=ZH();function c9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function U7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var u8;class BK{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let Z;if(J instanceof HTMLCanvasElement)Z=J;else{if(u8===void 0)u8=N7("canvas");u8.width=J.width,u8.height=J.height;let K=u8.getContext("2d");if(J instanceof ImageData)K.putImageData(J,0,0);else K.drawImage(J,0,0,J.width,J.height);Z=u8}return Z.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=N7("canvas");Q.width=J.width,Q.height=J.height;let Z=Q.getContext("2d");Z.drawImage(J,0,0,J.width,J.height);let K=Z.getImageData(0,0,J.width,J.height),$=K.data;for(let W=0;W<$.length;W++)$[W]=c9($[W]/255)*255;return Z.putImageData(K,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let Z=0;Z<Q.length;Z++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[Z]=Math.floor(c9(Q[Z]/255)*255);else Q[Z]=c9(Q[Z]);return{data:Q,width:J.width,height:J.height}}else return c0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var KH=0;class i7{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:KH++}),this.uuid=G8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width||0,Q.height||0,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Z={uuid:this.uuid,url:""},K=this.data;if(K!==null){let $;if(Array.isArray(K)){$=[];for(let W=0,Y=K.length;W<Y;W++)if(K[W].isDataTexture)$.push(nQ(K[W].image));else $.push(nQ(K[W]))}else $=nQ(K);Z.url=$}if(!Q)J.images[this.uuid]=Z;return Z}}function nQ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return BK.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return c0("Texture: Unable to serialize Texture."),{}}var $H=0,sQ=new v;class cJ extends o9{constructor(J=cJ.DEFAULT_IMAGE,Q=cJ.DEFAULT_MAPPING,Z=1001,K=1001,$=1006,W=1008,Y=1023,X=1009,H=cJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:$H++}),this.uuid=G8(),this.name="",this.source=new i7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=Z,this.wrapT=K,this.magFilter=$,this.minFilter=W,this.anisotropy=H,this.format=Y,this.internalFormat=null,this.type=X,this.offset=new Z0(0,0),this.repeat=new Z0(1,1),this.center=new Z0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new s0,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(sQ).x}get height(){return this.source.getSize(sQ).y}get depth(){return this.source.getSize(sQ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.mipmapsAutoUpdate=J.mipmapsAutoUpdate,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isPMREMTexture=J.isPMREMTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let Z=J[Q];if(Z===void 0){c0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){c0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(K&&Z&&(K.isVector2&&Z.isVector2))K.copy(Z);else if(K&&Z&&(K.isVector3&&Z.isVector3))K.copy(Z);else if(K&&Z&&(K.isMatrix3&&Z.isMatrix3))K.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Z={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(!Q)J.textures[this.uuid]=Z;return Z}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}cJ.DEFAULT_IMAGE=null;cJ.DEFAULT_MAPPING=300;cJ.DEFAULT_ANISOTROPY=1;class SJ{static{this.prototype.isVector4=!0}constructor(J=0,Q=0,Z=0,K=1){this.x=J,this.y=Q,this.z=Z,this.w=K}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,Z,K){return this.x=J,this.y=Q,this.z=Z,this.w=K,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,Z=this.y,K=this.z,$=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*Z+W[8]*K+W[12]*$,this.y=W[1]*Q+W[5]*Z+W[9]*K+W[13]*$,this.z=W[2]*Q+W[6]*Z+W[10]*K+W[14]*$,this.w=W[3]*Q+W[7]*Z+W[11]*K+W[15]*$,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,Z,K,$,W=0.01,Y=0.1,X=J.elements,H=X[0],U=X[4],N=X[8],q=X[1],G=X[5],F=X[9],R=X[2],A=X[6],O=X[10];if(Math.abs(U-q)<0.01&&Math.abs(N-R)<0.01&&Math.abs(F-A)<0.01){if(Math.abs(U+q)<0.1&&Math.abs(N+R)<0.1&&Math.abs(F+A)<0.1&&Math.abs(H+G+O-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let k=(H+1)/2,z=(G+1)/2,B=(O+1)/2,C=(U+q)/4,P=(N+R)/4,D=(F+A)/4;if(k>z&&k>B)if(k<0.01)Z=0,K=0.707106781,$=0.707106781;else Z=Math.sqrt(k),K=C/Z,$=P/Z;else if(z>B)if(z<0.01)Z=0.707106781,K=0,$=0.707106781;else K=Math.sqrt(z),Z=C/K,$=D/K;else if(B<0.01)Z=0.707106781,K=0.707106781,$=0;else $=Math.sqrt(B),Z=P/$,K=D/$;return this.set(Z,K,$,Q),this}let E=Math.sqrt((A-F)*(A-F)+(N-R)*(N-R)+(q-U)*(q-U));if(Math.abs(E)<0.001)E=1;return this.x=(A-F)/E,this.y=(N-R)/E,this.z=(q-U)/E,this.w=Math.acos((H+G+O-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=QJ(this.x,J.x,Q.x),this.y=QJ(this.y,J.y,Q.y),this.z=QJ(this.z,J.z,Q.z),this.w=QJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=QJ(this.x,J,Q),this.y=QJ(this.y,J,Q),this.z=QJ(this.z,J,Q),this.w=QJ(this.w,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(QJ(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this.w=J.w+(Q.w-J.w)*Z,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LK extends o9{constructor(J=1,Q=1,Z={}){super();Z=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},Z),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=Z.depth,this.scissor=new SJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new SJ(0,0,J,Q),this.textures=[];let K=Z.count;for(let $=0;$<K;$++)this.textures[$]=new cJ({width:J,height:Q,depth:Z.depth}),this.textures[$].isRenderTargetTexture=!0,this.textures[$].renderTarget=this;this._setTextureOptions(Z),this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,this.resolveColorBuffer=Z.resolveColorBuffer,this.resolveDepthBuffer=Z.resolveDepthBuffer,this.resolveStencilBuffer=Z.resolveStencilBuffer,this.storeMultisampledColorBuffer=Z.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=Z.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=Z.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=Z.depthTexture,this.samples=Z.samples,this.multiview=Z.multiview,this.useArrayDepthTexture=Z.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.mipmapsAutoUpdate!==void 0)Q.mipmapsAutoUpdate=J.mipmapsAutoUpdate;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let Z=0;Z<this.textures.length;Z++)this.textures[Z].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,Z=1){if(this.width!==J||this.height!==Q||this.depth!==Z){this.width=J,this.height=Q,this.depth=Z;for(let K=0,$=this.textures.length;K<$;K++)if(this.textures[K].image.width=J,this.textures[K].image.height=Q,this.textures[K].image.depth=Z,this.textures[K].isData3DTexture!==!0)this.textures[K].isArrayTexture=this.textures[K].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,Z=J.textures.length;Q<Z;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let K=Object.assign({},J.textures[Q].image);this.textures[Q].source=new i7(K)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;else this.depthTexture=null;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class V9 extends LK{constructor(J=1,Q=1,Z={}){super(J,Q,Z);this.isWebGLRenderTarget=!0}}class YQ extends cJ{constructor(J=null,Q=1,Z=1,K=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:Z,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class kK extends cJ{constructor(J=null,Q=1,Z=1,K=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:Z,depth:K},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class HJ{static{this.prototype.isMatrix4=!0}constructor(J,Q,Z,K,$,W,Y,X,H,U,N,q,G,F,R,A){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,Z,K,$,W,Y,X,H,U,N,q,G,F,R,A)}set(J,Q,Z,K,$,W,Y,X,H,U,N,q,G,F,R,A){let O=this.elements;return O[0]=J,O[4]=Q,O[8]=Z,O[12]=K,O[1]=$,O[5]=W,O[9]=Y,O[13]=X,O[2]=H,O[6]=U,O[10]=N,O[14]=q,O[3]=G,O[7]=F,O[11]=R,O[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new HJ().fromArray(this.elements)}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],Q[9]=Z[9],Q[10]=Z[10],Q[11]=Z[11],Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],Q[15]=Z[15],this}copyPosition(J){let Q=this.elements,Z=J.elements;return Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,Z){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),Z.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),Z.setFromMatrixColumn(this,2),this}makeBasis(J,Q,Z){return this.set(J.x,Q.x,Z.x,0,J.y,Q.y,Z.y,0,J.z,Q.z,Z.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,Z=J.elements,K=1/c8.setFromMatrixColumn(J,0).length(),$=1/c8.setFromMatrixColumn(J,1).length(),W=1/c8.setFromMatrixColumn(J,2).length();return Q[0]=Z[0]*K,Q[1]=Z[1]*K,Q[2]=Z[2]*K,Q[3]=0,Q[4]=Z[4]*$,Q[5]=Z[5]*$,Q[6]=Z[6]*$,Q[7]=0,Q[8]=Z[8]*W,Q[9]=Z[9]*W,Q[10]=Z[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,Z=J.x,K=J.y,$=J.z,W=Math.cos(Z),Y=Math.sin(Z),X=Math.cos(K),H=Math.sin(K),U=Math.cos($),N=Math.sin($);if(J.order==="XYZ"){let q=W*U,G=W*N,F=Y*U,R=Y*N;Q[0]=X*U,Q[4]=-X*N,Q[8]=H,Q[1]=G+F*H,Q[5]=q-R*H,Q[9]=-Y*X,Q[2]=R-q*H,Q[6]=F+G*H,Q[10]=W*X}else if(J.order==="YXZ"){let q=X*U,G=X*N,F=H*U,R=H*N;Q[0]=q+R*Y,Q[4]=F*Y-G,Q[8]=W*H,Q[1]=W*N,Q[5]=W*U,Q[9]=-Y,Q[2]=G*Y-F,Q[6]=R+q*Y,Q[10]=W*X}else if(J.order==="ZXY"){let q=X*U,G=X*N,F=H*U,R=H*N;Q[0]=q-R*Y,Q[4]=-W*N,Q[8]=F+G*Y,Q[1]=G+F*Y,Q[5]=W*U,Q[9]=R-q*Y,Q[2]=-W*H,Q[6]=Y,Q[10]=W*X}else if(J.order==="ZYX"){let q=W*U,G=W*N,F=Y*U,R=Y*N;Q[0]=X*U,Q[4]=F*H-G,Q[8]=q*H+R,Q[1]=X*N,Q[5]=R*H+q,Q[9]=G*H-F,Q[2]=-H,Q[6]=Y*X,Q[10]=W*X}else if(J.order==="YZX"){let q=W*X,G=W*H,F=Y*X,R=Y*H;Q[0]=X*U,Q[4]=R-q*N,Q[8]=F*N+G,Q[1]=N,Q[5]=W*U,Q[9]=-Y*U,Q[2]=-H*U,Q[6]=G*N+F,Q[10]=q-R*N}else if(J.order==="XZY"){let q=W*X,G=W*H,F=Y*X,R=Y*H;Q[0]=X*U,Q[4]=-N,Q[8]=H*U,Q[1]=q*N+R,Q[5]=W*U,Q[9]=G*N-F,Q[2]=F*N-G,Q[6]=Y*U,Q[10]=R*N+q}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(WH,J,YH)}lookAt(J,Q,Z){let K=this.elements;if(G9.subVectors(J,Q),G9.lengthSq()===0)G9.z=1;if(G9.normalize(),Z8.crossVectors(Z,G9),Z8.lengthSq()===0){if(Math.abs(Z.z)===1)G9.x+=0.0001;else G9.z+=0.0001;G9.normalize(),Z8.crossVectors(Z,G9)}return Z8.normalize(),M6.crossVectors(G9,Z8),K[0]=Z8.x,K[4]=M6.x,K[8]=G9.x,K[1]=Z8.y,K[5]=M6.y,K[9]=G9.y,K[2]=Z8.z,K[6]=M6.z,K[10]=G9.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,K=Q.elements,$=this.elements,W=Z[0],Y=Z[4],X=Z[8],H=Z[12],U=Z[1],N=Z[5],q=Z[9],G=Z[13],F=Z[2],R=Z[6],A=Z[10],O=Z[14],E=Z[3],k=Z[7],z=Z[11],B=Z[15],C=K[0],P=K[4],D=K[8],V=K[12],I=K[1],f=K[5],S=K[9],p=K[13],t=K[2],T=K[6],c=K[10],n=K[14],x=K[3],Y0=K[7],d=K[11],r=K[15];return $[0]=W*C+Y*I+X*t+H*x,$[4]=W*P+Y*f+X*T+H*Y0,$[8]=W*D+Y*S+X*c+H*d,$[12]=W*V+Y*p+X*n+H*r,$[1]=U*C+N*I+q*t+G*x,$[5]=U*P+N*f+q*T+G*Y0,$[9]=U*D+N*S+q*c+G*d,$[13]=U*V+N*p+q*n+G*r,$[2]=F*C+R*I+A*t+O*x,$[6]=F*P+R*f+A*T+O*Y0,$[10]=F*D+R*S+A*c+O*d,$[14]=F*V+R*p+A*n+O*r,$[3]=E*C+k*I+z*t+B*x,$[7]=E*P+k*f+z*T+B*Y0,$[11]=E*D+k*S+z*c+B*d,$[15]=E*V+k*p+z*n+B*r,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[4],K=J[8],$=J[12],W=J[1],Y=J[5],X=J[9],H=J[13],U=J[2],N=J[6],q=J[10],G=J[14],F=J[3],R=J[7],A=J[11],O=J[15],E=X*G-H*q,k=Y*G-H*N,z=Y*q-X*N,B=W*G-H*U,C=W*q-X*U,P=W*N-Y*U;return Q*(R*E-A*k+O*z)-Z*(F*E-A*B+O*C)+K*(F*k-R*B+O*P)-$*(F*z-R*C+A*P)}determinantAffine(){let J=this.elements,Q=J[0],Z=J[4],K=J[8],$=J[1],W=J[5],Y=J[9],X=J[2],H=J[6],U=J[10];return Q*(W*U-Y*H)-Z*($*U-Y*X)+K*($*H-W*X)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,Z){let K=this.elements;if(J.isVector3)K[12]=J.x,K[13]=J.y,K[14]=J.z;else K[12]=J,K[13]=Q,K[14]=Z;return this}invert(){let J=this.elements,Q=J[0],Z=J[1],K=J[2],$=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8],N=J[9],q=J[10],G=J[11],F=J[12],R=J[13],A=J[14],O=J[15],E=Q*Y-Z*W,k=Q*X-K*W,z=Q*H-$*W,B=Z*X-K*Y,C=Z*H-$*Y,P=K*H-$*X,D=U*R-N*F,V=U*A-q*F,I=U*O-G*F,f=N*A-q*R,S=N*O-G*R,p=q*O-G*A,t=E*p-k*S+z*f+B*I-C*V+P*D;if(t===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/t;return J[0]=(Y*p-X*S+H*f)*T,J[1]=(K*S-Z*p-$*f)*T,J[2]=(R*P-A*C+O*B)*T,J[3]=(q*C-N*P-G*B)*T,J[4]=(X*I-W*p-H*V)*T,J[5]=(Q*p-K*I+$*V)*T,J[6]=(A*z-F*P-O*k)*T,J[7]=(U*P-q*z+G*k)*T,J[8]=(W*S-Y*I+H*D)*T,J[9]=(Z*I-Q*S-$*D)*T,J[10]=(F*C-R*z+O*E)*T,J[11]=(N*z-U*C-G*E)*T,J[12]=(Y*V-W*f-X*D)*T,J[13]=(Q*f-Z*V+K*D)*T,J[14]=(R*k-F*B-A*E)*T,J[15]=(U*B-N*k+q*E)*T,this}scale(J){let Q=this.elements,Z=J.x,K=J.y,$=J.z;return Q[0]*=Z,Q[4]*=K,Q[8]*=$,Q[1]*=Z,Q[5]*=K,Q[9]*=$,Q[2]*=Z,Q[6]*=K,Q[10]*=$,Q[3]*=Z,Q[7]*=K,Q[11]*=$,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Z=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],K=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,Z,K))}makeTranslation(J,Q,Z){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,Z,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(1,0,0,0,0,Q,-Z,0,0,Z,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,0,Z,0,0,1,0,0,-Z,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,0,Z,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let Z=Math.cos(Q),K=Math.sin(Q),$=1-Z,W=J.x,Y=J.y,X=J.z,H=$*W,U=$*Y;return this.set(H*W+Z,H*Y-K*X,H*X+K*Y,0,H*Y+K*X,U*Y+Z,U*X-K*W,0,H*X-K*Y,U*X+K*W,$*X*X+Z,0,0,0,0,1),this}makeScale(J,Q,Z){return this.set(J,0,0,0,0,Q,0,0,0,0,Z,0,0,0,0,1),this}makeShear(J,Q,Z,K,$,W){return this.set(1,Z,$,0,J,1,W,0,Q,K,1,0,0,0,0,1),this}compose(J,Q,Z){let K=this.elements,$=Q._x,W=Q._y,Y=Q._z,X=Q._w,H=$+$,U=W+W,N=Y+Y,q=$*H,G=$*U,F=$*N,R=W*U,A=W*N,O=Y*N,E=X*H,k=X*U,z=X*N,B=Z.x,C=Z.y,P=Z.z;return K[0]=(1-(R+O))*B,K[1]=(G+z)*B,K[2]=(F-k)*B,K[3]=0,K[4]=(G-z)*C,K[5]=(1-(q+O))*C,K[6]=(A+E)*C,K[7]=0,K[8]=(F+k)*P,K[9]=(A-E)*P,K[10]=(1-(q+R))*P,K[11]=0,K[12]=J.x,K[13]=J.y,K[14]=J.z,K[15]=1,this}decompose(J,Q,Z){let K=this.elements;J.x=K[12],J.y=K[13],J.z=K[14];let $=this.determinantAffine();if($===0)return Z.set(1,1,1),Q.identity(),this;let W=c8.set(K[0],K[1],K[2]).length(),Y=c8.set(K[4],K[5],K[6]).length(),X=c8.set(K[8],K[9],K[10]).length();if($<0)W=-W;z9.copy(this);let H=1/W,U=1/Y,N=1/X;return z9.elements[0]*=H,z9.elements[1]*=H,z9.elements[2]*=H,z9.elements[4]*=U,z9.elements[5]*=U,z9.elements[6]*=U,z9.elements[8]*=N,z9.elements[9]*=N,z9.elements[10]*=N,Q.setFromRotationMatrix(z9),Z.x=W,Z.y=Y,Z.z=X,this}makePerspective(J,Q,Z,K,$,W,Y=2000,X=!1){let H=this.elements,U=2*$/(Q-J),N=2*$/(Z-K),q=(Q+J)/(Q-J),G=(Z+K)/(Z-K),F,R;if(X)F=$/(W-$),R=W*$/(W-$);else if(Y===2000)F=-(W+$)/(W-$),R=-2*W*$/(W-$);else if(Y===2001)F=-W/(W-$),R=-W*$/(W-$);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return H[0]=U,H[4]=0,H[8]=q,H[12]=0,H[1]=0,H[5]=N,H[9]=G,H[13]=0,H[2]=0,H[6]=0,H[10]=F,H[14]=R,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,Z,K,$,W,Y=2000,X=!1){let H=this.elements,U=2/(Q-J),N=2/(Z-K),q=-(Q+J)/(Q-J),G=-(Z+K)/(Z-K),F,R;if(X)F=1/(W-$),R=W/(W-$);else if(Y===2000)F=-2/(W-$),R=-(W+$)/(W-$);else if(Y===2001)F=-1/(W-$),R=-$/(W-$);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return H[0]=U,H[4]=0,H[8]=0,H[12]=q,H[1]=0,H[5]=N,H[9]=0,H[13]=G,H[2]=0,H[6]=0,H[10]=F,H[14]=R,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,Z=J.elements;for(let K=0;K<16;K++)if(Q[K]!==Z[K])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<16;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J[Q+9]=Z[9],J[Q+10]=Z[10],J[Q+11]=Z[11],J[Q+12]=Z[12],J[Q+13]=Z[13],J[Q+14]=Z[14],J[Q+15]=Z[15],J}}var c8=new v,z9=new HJ,WH=new v(0,0,0),YH=new v(1,1,1),Z8=new v,M6=new v,G9=new v,S$=new HJ,j$=new a9;class n9{constructor(J=0,Q=0,Z=0,K=n9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=Z,this._order=K}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,Z,K=this._order){return this._x=J,this._y=Q,this._z=Z,this._order=K,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,Z=!0){let K=J.elements,$=K[0],W=K[4],Y=K[8],X=K[1],H=K[5],U=K[9],N=K[2],q=K[6],G=K[10];switch(Q){case"XYZ":if(this._y=Math.asin(QJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-W,$);else this._x=Math.atan2(q,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-QJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(Y,G),this._z=Math.atan2(X,H);else this._y=Math.atan2(-N,$),this._z=0;break;case"ZXY":if(this._x=Math.asin(QJ(q,-1,1)),Math.abs(q)<0.9999999)this._y=Math.atan2(-N,G),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(X,$);break;case"ZYX":if(this._y=Math.asin(-QJ(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(q,G),this._z=Math.atan2(X,$);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(QJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-N,$);else this._x=0,this._y=Math.atan2(Y,G);break;case"XZY":if(this._z=Math.asin(-QJ(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(q,H),this._y=Math.atan2(Y,$);else this._x=Math.atan2(-U,G),this._y=0;break;default:c0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,Z===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,Z){return S$.makeRotationFromQuaternion(J),this.setFromRotationMatrix(S$,Q,Z)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return j$.setFromEuler(this),this.setFromQuaternion(j$,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}n9.DEFAULT_ORDER="XYZ";class o7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var XH=0,v$=new v,n8=new a9,p9=new HJ,V6=new v,C7=new v,HH=new v,UH=new a9,y$=new v(1,0,0),f$=new v(0,1,0),h$=new v(0,0,1),b$={type:"added"},NH={type:"removed"},s8={type:"childadded",child:null},iQ={type:"childremoved",child:null};class gJ extends o9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:XH++}),this.uuid=G8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gJ.DEFAULT_UP.clone();let J=new v,Q=new n9,Z=new a9,K=new v(1,1,1);function $(){Z.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion(Z,void 0,!1)}Q._onChange($),Z._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:Z},scale:{configurable:!0,enumerable:!0,value:K},modelViewMatrix:{value:new HJ},normalMatrix:{value:new s0}}),this.matrix=new HJ,this.matrixWorld=new HJ,this.matrixAutoUpdate=gJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return n8.setFromAxisAngle(J,Q),this.quaternion.multiply(n8),this}rotateOnWorldAxis(J,Q){return n8.setFromAxisAngle(J,Q),this.quaternion.premultiply(n8),this}rotateX(J){return this.rotateOnAxis(y$,J)}rotateY(J){return this.rotateOnAxis(f$,J)}rotateZ(J){return this.rotateOnAxis(h$,J)}translateOnAxis(J,Q){return v$.copy(J).applyQuaternion(this.quaternion),this.position.add(v$.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(y$,J)}translateY(J){return this.translateOnAxis(f$,J)}translateZ(J){return this.translateOnAxis(h$,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(p9.copy(this.matrixWorld).invert())}lookAt(J,Q,Z){if(J.isVector3)V6.copy(J);else V6.set(J,Q,Z);let K=this.parent;if(this.updateWorldMatrix(!0,!1),C7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)p9.lookAt(C7,V6,this.up);else p9.lookAt(V6,C7,this.up);if(this.quaternion.setFromRotationMatrix(p9),K)p9.extractRotation(K.matrixWorld),n8.setFromRotationMatrix(p9),this.quaternion.premultiply(n8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return u0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(b$),s8.child=J,this.dispatchEvent(s8),s8.child=null;else u0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.remove(arguments[Z]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(NH),iQ.child=J,this.dispatchEvent(iQ),iQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),p9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),p9.multiply(J.parent.matrixWorld);return J.applyMatrix4(p9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(b$),s8.child=J,this.dispatchEvent(s8),s8.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let Z=0,K=this.children.length;Z<K;Z++){let W=this.children[Z].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,Z=[]){if(this[J]===Q)Z.push(this);let K=this.children;for(let $=0,W=K.length;$<W;$++)K[$].getObjectsByProperty(J,Q,Z);return Z}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(C7,J,HH),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(C7,UH,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(J){J(this);let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:Z,z:K}=J,$=this.matrix.elements;$[12]+=Q-$[0]*Q-$[4]*Z-$[8]*K,$[13]+=Z-$[1]*Q-$[5]*Z-$[9]*K,$[14]+=K-$[2]*Q-$[6]*Z-$[10]*K}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let Z=0,K=Q.length;Z<K;Z++)Q[Z].updateMatrixWorld(J)}updateWorldMatrix(J,Q,Z=!1){let K=this.parent;if(J===!0&&K!==null)K.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||Z){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,Z=!0}if(Q===!0){let $=this.children;for(let W=0,Y=$.length;W<Y;W++)$[W].updateWorldMatrix(!1,!0,Z)}}toJSON(J){let Q=J===void 0||typeof J==="string",Z={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Z.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let K={};if(K.uuid=this.uuid,K.type=this.type,K.name=this.name,K.castShadow=this.castShadow,K.receiveShadow=this.receiveShadow,K.visible=this.visible,K.frustumCulled=this.frustumCulled,K.renderOrder=this.renderOrder,K.static=this.static,K.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)K.userData=this.userData;if(K.layers=this.layers.mask,K.matrix=this.matrix.toArray(),K.up=this.up.toArray(),this.pivot!==null)K.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)K.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)K.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(K.type="InstancedMesh",K.count=this.count,K.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)K.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(K.type="BatchedMesh",K.perObjectFrustumCulled=this.perObjectFrustumCulled,K.sortObjects=this.sortObjects,K.drawRanges=this._drawRanges,K.reservedRanges=this._reservedRanges,K.geometryInfo=this._geometryInfo.map((Y)=>({...Y,boundingBox:Y.boundingBox?Y.boundingBox.toJSON():void 0,boundingSphere:Y.boundingSphere?Y.boundingSphere.toJSON():void 0})),K.instanceInfo=this._instanceInfo.map((Y)=>({...Y})),K.availableInstanceIds=this._availableInstanceIds.slice(),K.availableGeometryIds=this._availableGeometryIds.slice(),K.nextIndexStart=this._nextIndexStart,K.nextVertexStart=this._nextVertexStart,K.geometryCount=this._geometryCount,K.maxInstanceCount=this._maxInstanceCount,K.maxVertexCount=this._maxVertexCount,K.maxIndexCount=this._maxIndexCount,K.geometryInitialized=this._geometryInitialized,K.matricesTexture=this._matricesTexture.toJSON(J),K.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)K.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)K.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)K.boundingBox=this.boundingBox.toJSON()}function $(Y,X){if(Y[X.uuid]===void 0)Y[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)K.background=this.background.toJSON();else if(this.background.isTexture)K.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)K.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){K.geometry=$(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let X=Y.shapes;if(Array.isArray(X))for(let H=0,U=X.length;H<U;H++){let N=X[H];$(J.shapes,N)}else $(J.shapes,X)}}if(this.isSkinnedMesh){if(K.bindMode=this.bindMode,K.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)$(J.skeletons,this.skeleton),K.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let X=0,H=this.material.length;X<H;X++)Y.push($(J.materials,this.material[X]));K.material=Y}else K.material=$(J.materials,this.material);if(this.children.length>0){K.children=[];for(let Y=0;Y<this.children.length;Y++)K.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){K.animations=[];for(let Y=0;Y<this.animations.length;Y++){let X=this.animations[Y];K.animations.push($(J.animations,X))}}if(Q){let Y=W(J.geometries),X=W(J.materials),H=W(J.textures),U=W(J.images),N=W(J.shapes),q=W(J.skeletons),G=W(J.animations),F=W(J.nodes);if(Y.length>0)Z.geometries=Y;if(X.length>0)Z.materials=X;if(H.length>0)Z.textures=H;if(U.length>0)Z.images=U;if(N.length>0)Z.shapes=N;if(q.length>0)Z.skeletons=q;if(G.length>0)Z.animations=G;if(F.length>0)Z.nodes=F}return Z.object=K,Z;function W(Y){let X=[];for(let H in Y){let U=Y[H];delete U.metadata,X.push(U)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let Z=0;Z<J.children.length;Z++){let K=J.children[Z];this.add(K.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}gJ.DEFAULT_UP=new v(0,1,0);gJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;gJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class j0 extends gJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var GH={type:"move"};class a7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new j0,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new j0,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new j0,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let Z of J.hand.values())this._getHandJoint(Q,Z)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,Z){let K=null,$=null,W=null,Y=this._targetRay,X=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let R of J.hand.values()){let A=Q.getJointPose(R,Z),O=this._getHandJoint(H,R);if(A!==null)O.matrix.fromArray(A.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.matrixWorldNeedsUpdate=!0,O.jointRadius=A.radius;O.visible=A!==null}let U=H.joints["index-finger-tip"],N=H.joints["thumb-tip"],q=U.position.distanceTo(N.position),G=0.02,F=0.005;if(H.inputState.pinching&&q>G+F)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&q<=G-F)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if($=Q.getPose(J.gripSpace,Z),$!==null){if(X.matrix.fromArray($.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.matrixWorldNeedsUpdate=!0,$.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy($.linearVelocity);else X.hasLinearVelocity=!1;if($.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy($.angularVelocity);else X.hasAngularVelocity=!1;if(X.eventsEnabled)X.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(Y!==null){if(K=Q.getPose(J.targetRaySpace,Z),K===null&&$!==null)K=$;if(K!==null){if(Y.matrix.fromArray(K.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldNeedsUpdate=!0,K.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(K.linearVelocity);else Y.hasLinearVelocity=!1;if(K.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(K.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(GH)}}}if(Y!==null)Y.visible=K!==null;if(X!==null)X.visible=$!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let Z=new j0;Z.matrixAutoUpdate=!1,Z.visible=!1,J.joints[Q.jointName]=Z,J.add(Z)}return J.joints[Q.jointName]}}var qY={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},K8={h:0,s:0,l:0},B6={h:0,s:0,l:0};function oQ(J,Q,Z){if(Z<0)Z+=1;if(Z>1)Z-=1;if(Z<0.16666666666666666)return J+(Q-J)*6*Z;if(Z<0.5)return Q;if(Z<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-Z);return J}class v0{constructor(J,Q,Z){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,Z)}set(J,Q,Z){if(Q===void 0&&Z===void 0){let K=J;if(K&&K.isColor)this.copy(K);else if(typeof K==="number")this.setHex(K);else if(typeof K==="string")this.setStyle(K)}else this.setRGB(J,Q,Z);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,$J.colorSpaceToWorking(this,Q),this}setRGB(J,Q,Z,K=$J.workingColorSpace){return this.r=J,this.g=Q,this.b=Z,$J.colorSpaceToWorking(this,K),this}setHSL(J,Q,Z,K=$J.workingColorSpace){if(J=QH(J,1),Q=QJ(Q,0,1),Z=QJ(Z,0,1),Q===0)this.r=this.g=this.b=Z;else{let $=Z<=0.5?Z*(1+Q):Z+Q-Z*Q,W=2*Z-$;this.r=oQ(W,$,J+0.3333333333333333),this.g=oQ(W,$,J),this.b=oQ(W,$,J-0.3333333333333333)}return $J.colorSpaceToWorking(this,K),this}setStyle(J,Q="srgb"){function Z($){if($===void 0)return;if(parseFloat($)<1)c0("Color: Alpha component of "+J+" will be ignored.")}let K;if(K=/^(\w+)\(([^\)]*)\)/.exec(J)){let $,W=K[1],Y=K[2];switch(W){case"rgb":case"rgba":if($=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(Y))return Z($[4]),this.setRGB(Math.min(255,parseInt($[1],10))/255,Math.min(255,parseInt($[2],10))/255,Math.min(255,parseInt($[3],10))/255,Q);if($=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(Y))return Z($[4]),this.setRGB(Math.min(100,parseFloat($[1]))/100,Math.min(100,parseFloat($[2]))/100,Math.min(100,parseFloat($[3]))/100,Q);break;case"hsl":case"hsla":if($=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(Y))return Z($[4]),this.setHSL(parseFloat($[1])/360,parseFloat($[2])/100,parseFloat($[3])/100,Q);break;default:c0("Color: Unknown color model "+J)}}else if(K=/^\#([A-Fa-f\d]+)$/.exec(J)){let $=K[1],W=$.length;if(W===3)return this.setRGB(parseInt($.charAt(0),16)/15,parseInt($.charAt(1),16)/15,parseInt($.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt($,16),Q);else c0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let Z=qY[J.toLowerCase()];if(Z!==void 0)this.setHex(Z,Q);else c0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=c9(J.r),this.g=c9(J.g),this.b=c9(J.b),this}copyLinearToSRGB(J){return this.r=U7(J.r),this.g=U7(J.g),this.b=U7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return $J.workingToColorSpace(J9.copy(this),J),Math.round(QJ(J9.r*255,0,255))*65536+Math.round(QJ(J9.g*255,0,255))*256+Math.round(QJ(J9.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=$J.workingColorSpace){$J.workingToColorSpace(J9.copy(this),Q);let{r:Z,g:K,b:$}=J9,W=Math.max(Z,K,$),Y=Math.min(Z,K,$),X,H,U=(Y+W)/2;if(Y===W)X=0,H=0;else{let N=W-Y;switch(H=U<=0.5?N/(W+Y):N/(2-W-Y),W){case Z:X=(K-$)/N+(K<$?6:0);break;case K:X=($-Z)/N+2;break;case $:X=(Z-K)/N+4;break}X/=6}return J.h=X,J.s=H,J.l=U,J}getRGB(J,Q=$J.workingColorSpace){return $J.workingToColorSpace(J9.copy(this),Q),J.r=J9.r,J.g=J9.g,J.b=J9.b,J}getStyle(J="srgb"){$J.workingToColorSpace(J9.copy(this),J);let{r:Q,g:Z,b:K}=J9;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${Z.toFixed(3)} ${K.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round(Z*255)},${Math.round(K*255)})`}offsetHSL(J,Q,Z){return this.getHSL(K8),this.setHSL(K8.h+J,K8.s+Q,K8.l+Z)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,Z){return this.r=J.r+(Q.r-J.r)*Z,this.g=J.g+(Q.g-J.g)*Z,this.b=J.b+(Q.b-J.b)*Z,this}lerpHSL(J,Q){this.getHSL(K8),J.getHSL(B6);let Z=dQ(K8.h,B6.h,Q),K=dQ(K8.s,B6.s,Q),$=dQ(K8.l,B6.l,Q);return this.setHSL(Z,K,$),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,Z=this.g,K=this.b,$=J.elements;return this.r=$[0]*Q+$[3]*Z+$[6]*K,this.g=$[1]*Q+$[4]*Z+$[7]*K,this.b=$[2]*Q+$[5]*Z+$[8]*K,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var J9=new v0;v0.NAMES=qY;class r7{constructor(J,Q=1,Z=1000){this.isFog=!0,this.name="",this.color=new v0(J),this.near=Q,this.far=Z}clone(){return new r7(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class XQ extends gJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new n9,this.environmentIntensity=1,this.environmentRotation=new n9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){return super.copy(J,Q),this.background=J.background!==null?J.background.clone():null,this.environment=J.environment!==null?J.environment.clone():null,this.fog=J.fog!==null?J.fog.clone():null,this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),this.overrideMaterial=J.overrideMaterial!==null?J.overrideMaterial.clone():null,this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var A9=new v,l9=new v,aQ=new v,m9=new v,i8=new v,o8=new v,x$=new v,rQ=new v,tQ=new v,eQ=new v,JZ=new SJ,QZ=new SJ,ZZ=new SJ;class E9{constructor(J=new v,Q=new v,Z=new v){this.a=J,this.b=Q,this.c=Z}static getNormal(J,Q,Z,K){K.subVectors(Z,Q),A9.subVectors(J,Q),K.cross(A9);let $=K.lengthSq();if($>0)return K.multiplyScalar(1/Math.sqrt($));return K.set(0,0,0)}static getBarycoord(J,Q,Z,K,$){A9.subVectors(K,Q),l9.subVectors(Z,Q),aQ.subVectors(J,Q);let W=A9.dot(A9),Y=A9.dot(l9),X=A9.dot(aQ),H=l9.dot(l9),U=l9.dot(aQ),N=W*H-Y*Y;if(N===0)return $.set(0,0,0),null;let q=1/N,G=(H*X-Y*U)*q,F=(W*U-Y*X)*q;return $.set(1-G-F,F,G)}static containsPoint(J,Q,Z,K){if(this.getBarycoord(J,Q,Z,K,m9)===null)return!1;return m9.x>=0&&m9.y>=0&&m9.x+m9.y<=1}static getInterpolation(J,Q,Z,K,$,W,Y,X){if(this.getBarycoord(J,Q,Z,K,m9)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector($,m9.x),X.addScaledVector(W,m9.y),X.addScaledVector(Y,m9.z),X}static getInterpolatedAttribute(J,Q,Z,K,$,W){return JZ.setScalar(0),QZ.setScalar(0),ZZ.setScalar(0),JZ.fromBufferAttribute(J,Q),QZ.fromBufferAttribute(J,Z),ZZ.fromBufferAttribute(J,K),W.setScalar(0),W.addScaledVector(JZ,$.x),W.addScaledVector(QZ,$.y),W.addScaledVector(ZZ,$.z),W}static isFrontFacing(J,Q,Z,K){return A9.subVectors(Z,Q),l9.subVectors(J,Q),A9.cross(l9).dot(K)<0}set(J,Q,Z){return this.a.copy(J),this.b.copy(Q),this.c.copy(Z),this}setFromPointsAndIndices(J,Q,Z,K){return this.a.copy(J[Q]),this.b.copy(J[Z]),this.c.copy(J[K]),this}setFromAttributeAndIndices(J,Q,Z,K){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,Z),this.c.fromBufferAttribute(J,K),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return A9.subVectors(this.c,this.b),l9.subVectors(this.a,this.b),A9.cross(l9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return E9.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return E9.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,Z,K,$){return E9.getInterpolation(J,this.a,this.b,this.c,Q,Z,K,$)}containsPoint(J){return E9.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return E9.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let Z=this.a,K=this.b,$=this.c,W,Y;i8.subVectors(K,Z),o8.subVectors($,Z),rQ.subVectors(J,Z);let X=i8.dot(rQ),H=o8.dot(rQ);if(X<=0&&H<=0)return Q.copy(Z);tQ.subVectors(J,K);let U=i8.dot(tQ),N=o8.dot(tQ);if(U>=0&&N<=U)return Q.copy(K);let q=X*N-U*H;if(q<=0&&X>=0&&U<=0&&X-U>0)return W=X/(X-U),Q.copy(Z).addScaledVector(i8,W);eQ.subVectors(J,$);let G=i8.dot(eQ),F=o8.dot(eQ);if(F>=0&&G<=F)return Q.copy($);let R=G*H-X*F;if(R<=0&&H>=0&&F<=0)return Y=H/(H-F),Q.copy(Z).addScaledVector(o8,Y);let A=U*F-G*N;if(A<=0&&N-U>=0&&G-F>=0)return x$.subVectors($,K),Y=(N-U)/(N-U+(G-F)),Q.copy(K).addScaledVector(x$,Y);let O=1/(A+R+q);return W=R*O,Y=q*O,Q.copy(Z).addScaledVector(i8,W).addScaledVector(o8,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class r9{constructor(J=new v(1/0,1/0,1/0),Q=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q+=3)this.expandByPoint(C9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,Z=J.count;Q<Z;Q++)this.expandByPoint(C9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let Z=C9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let Z=J.geometry;if(Z!==void 0){let $=Z.getAttribute("position");if(Q===!0&&$!==void 0&&J.isInstancedMesh!==!0&&J.isBatchedMesh!==!0)for(let W=0,Y=$.count;W<Y;W++){if(J.isMesh===!0)J.getVertexPosition(W,C9);else C9.fromBufferAttribute($,W);C9.applyMatrix4(J.matrixWorld),this.expandByPoint(C9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();L6.copy(J.boundingBox)}else{if(Z.boundingBox===null)Z.computeBoundingBox();L6.copy(Z.boundingBox)}L6.applyMatrix4(J.matrixWorld),this.union(L6)}}let K=J.children;for(let $=0,W=K.length;$<W;$++)this.expandByObject(K[$],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,C9),C9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,Z;if(J.normal.x>0)Q=J.normal.x*this.min.x,Z=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,Z=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,Z+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,Z+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,Z+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,Z+=J.normal.z*this.min.z;return Q<=-J.constant&&Z>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(_7),k6.subVectors(this.max,_7),a8.subVectors(J.a,_7),r8.subVectors(J.b,_7),t8.subVectors(J.c,_7),$8.subVectors(r8,a8),W8.subVectors(t8,r8),B8.subVectors(a8,t8);let Q=[0,-$8.z,$8.y,0,-W8.z,W8.y,0,-B8.z,B8.y,$8.z,0,-$8.x,W8.z,0,-W8.x,B8.z,0,-B8.x,-$8.y,$8.x,0,-W8.y,W8.x,0,-B8.y,B8.x,0];if(!KZ(Q,a8,r8,t8,k6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!KZ(Q,a8,r8,t8,k6))return!1;return z6.crossVectors($8,W8),Q=[z6.x,z6.y,z6.z],KZ(Q,a8,r8,t8,k6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,C9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(C9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return d9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),d9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),d9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),d9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),d9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),d9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),d9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),d9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(d9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var d9=[new v,new v,new v,new v,new v,new v,new v,new v],C9=new v,L6=new r9,a8=new v,r8=new v,t8=new v,$8=new v,W8=new v,B8=new v,_7=new v,k6=new v,z6=new v,L8=new v;function KZ(J,Q,Z,K,$){for(let W=0,Y=J.length-3;W<=Y;W+=3){L8.fromArray(J,W);let X=$.x*Math.abs(L8.x)+$.y*Math.abs(L8.y)+$.z*Math.abs(L8.z),H=Q.dot(L8),U=Z.dot(L8),N=K.dot(L8);if(Math.max(-Math.max(H,U,N),Math.min(H,U,N))>X)return!1}return!0}var fJ=new v,A6=new Z0,qH=0;class _9 extends o9{constructor(J,Q,Z=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qH++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=Z,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=J!==void 0?WQ(J):void 0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this._normalizationScale=J._normalizationScale,this}copyAt(J,Q,Z){J*=this.itemSize,Z*=Q.itemSize;for(let K=0,$=this.itemSize;K<$;K++)this.array[J+K]=Q.array[Z+K];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,Z=this.count;Q<Z;Q++)A6.fromBufferAttribute(this,Q),A6.applyMatrix3(J),this.setXY(Q,A6.x,A6.y);else if(this.itemSize===3)for(let Q=0,Z=this.count;Q<Z;Q++)fJ.fromBufferAttribute(this,Q),fJ.applyMatrix3(J),this.setXYZ(Q,fJ.x,fJ.y,fJ.z);return this}applyMatrix4(J){for(let Q=0,Z=this.count;Q<Z;Q++)fJ.fromBufferAttribute(this,Q),fJ.applyMatrix4(J),this.setXYZ(Q,fJ.x,fJ.y,fJ.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)fJ.fromBufferAttribute(this,Q),fJ.applyNormalMatrix(J),this.setXYZ(Q,fJ.x,fJ.y,fJ.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)fJ.fromBufferAttribute(this,Q),fJ.transformDirection(J),this.setXYZ(Q,fJ.x,fJ.y,fJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let Z=this.array[J*this.itemSize+Q];if(this.normalized)Z=this._denormalize(Z);return Z}setComponent(J,Q,Z){if(this.normalized)Z=this._normalize(Z);return this.array[J*this.itemSize+Q]=Z,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=this._denormalize(Q);return Q}setX(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=this._denormalize(Q);return Q}setY(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=this._denormalize(Q);return Q}setZ(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=this._denormalize(Q);return Q}setW(J,Q){if(this.normalized)Q=this._normalize(Q);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,Z){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),Z=this._normalize(Z);return this.array[J+0]=Q,this.array[J+1]=Z,this}setXYZ(J,Q,Z,K){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),Z=this._normalize(Z),K=this._normalize(K);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=K,this}setXYZW(J,Q,Z,K,$){if(J*=this.itemSize,this.normalized)Q=this._normalize(Q),Z=this._normalize(Z),K=this._normalize(K),$=this._normalize($);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=K,this.array[J+3]=$,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.max(J/Q,-1):NY(J,this.array)}_normalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.round(J*Q):GY(J,this.array)}}class HQ extends _9{constructor(J,Q,Z){super(new Uint16Array(J),Q,Z)}}class UQ extends _9{constructor(J,Q,Z){super(new Uint32Array(J),Q,Z)}}class FJ extends _9{constructor(J,Q,Z){super(new Float32Array(J),Q,Z)}}var EH=new r9,P7=new v,$Z=new v;class S8{constructor(J=new v,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let Z=this.center;if(Q!==void 0)Z.copy(Q);else EH.setFromPoints(J).getCenter(Z);let K=0;for(let $=0,W=J.length;$<W;$++)K=Math.max(K,Z.distanceToSquared(J[$]));return this.radius=Math.sqrt(K),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let Z=this.center.distanceToSquared(J);if(Q.copy(J),Z>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;P7.subVectors(J,this.center);let Q=P7.lengthSq();if(Q>this.radius*this.radius){let Z=Math.sqrt(Q),K=(Z-this.radius)*0.5;this.center.addScaledVector(P7,K/Z),this.radius+=K}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else $Z.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(P7.copy(J.center).add($Z)),this.expandByPoint(P7.copy(J.center).sub($Z));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var FH=0,F9=new HJ,WZ=new gJ,e8=new v,q9=new r9,I7=new r9,uJ=new v;class Q9 extends o9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FH++}),this.uuid=G8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((eX(J))?UQ:HQ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,Z=0){this.groups.push({start:J,count:Q,materialIndex:Z})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let Z=this.attributes.normal;if(Z!==void 0){let $=new s0().getNormalMatrix(J);Z.applyNormalMatrix($),Z.needsUpdate=!0}let K=this.attributes.tangent;if(K!==void 0)K.transformDirection(J),K.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return F9.makeRotationFromQuaternion(J),this.applyMatrix4(F9),this}rotateX(J){return F9.makeRotationX(J),this.applyMatrix4(F9),this}rotateY(J){return F9.makeRotationY(J),this.applyMatrix4(F9),this}rotateZ(J){return F9.makeRotationZ(J),this.applyMatrix4(F9),this}translate(J,Q,Z){return F9.makeTranslation(J,Q,Z),this.applyMatrix4(F9),this}scale(J,Q,Z){return F9.makeScale(J,Q,Z),this.applyMatrix4(F9),this}lookAt(J){return WZ.lookAt(J),WZ.updateMatrix(),this.applyMatrix4(WZ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(e8).negate(),this.translate(e8.x,e8.y,e8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let Z=[];for(let K=0,$=J.length;K<$;K++){let W=J[K];Z.push(W.x,W.y,W.z||0)}this.setAttribute("position",new FJ(Z,3))}else{let Z=Math.min(J.length,Q.count);for(let K=0;K<Z;K++){let $=J[K];Q.setXYZ(K,$.x,$.y,$.z||0)}if(J.length>Q.count)c0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new r9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){u0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let Z=0,K=Q.length;Z<K;Z++){let $=Q[Z];if(q9.setFromBufferAttribute($),this.morphTargetsRelative)uJ.addVectors(this.boundingBox.min,q9.min),this.boundingBox.expandByPoint(uJ),uJ.addVectors(this.boundingBox.max,q9.max),this.boundingBox.expandByPoint(uJ);else this.boundingBox.expandByPoint(q9.min),this.boundingBox.expandByPoint(q9.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))u0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new S8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){u0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(J){let Z=this.boundingSphere.center;if(q9.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let Y=Q[$];if(I7.setFromBufferAttribute(Y),this.morphTargetsRelative)uJ.addVectors(q9.min,I7.min),q9.expandByPoint(uJ),uJ.addVectors(q9.max,I7.max),q9.expandByPoint(uJ);else q9.expandByPoint(I7.min),q9.expandByPoint(I7.max)}q9.getCenter(Z);let K=0;for(let $=0,W=J.count;$<W;$++)uJ.fromBufferAttribute(J,$),K=Math.max(K,Z.distanceToSquared(uJ));if(Q)for(let $=0,W=Q.length;$<W;$++){let Y=Q[$],X=this.morphTargetsRelative;for(let H=0,U=Y.count;H<U;H++){if(uJ.fromBufferAttribute(Y,H),X)e8.fromBufferAttribute(J,H),uJ.add(e8);K=Math.max(K,Z.distanceToSquared(uJ))}}if(this.boundingSphere.radius=Math.sqrt(K),isNaN(this.boundingSphere.radius))u0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){u0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Z,normal:K,uv:$}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==Z.count)W=new _9(new Float32Array(4*Z.count),4),this.setAttribute("tangent",W);let Y=[],X=[],H=new Uint8Array(Z.count);for(let V=0;V<Z.count;V++)Y[V]=new v,X[V]=new v;let U=new v,N=new v,q=new v,G=new Z0,F=new Z0,R=new Z0,A=new v,O=new v;function E(V,I,f){H[V]=H[I]=H[f]=1,U.fromBufferAttribute(Z,V),N.fromBufferAttribute(Z,I),q.fromBufferAttribute(Z,f),G.fromBufferAttribute($,V),F.fromBufferAttribute($,I),R.fromBufferAttribute($,f),N.sub(U),q.sub(U),F.sub(G),R.sub(G);let S=1/(F.x*R.y-R.x*F.y);if(!isFinite(S))return;A.copy(N).multiplyScalar(R.y).addScaledVector(q,-F.y).multiplyScalar(S),O.copy(q).multiplyScalar(F.x).addScaledVector(N,-R.x).multiplyScalar(S),Y[V].add(A),Y[I].add(A),Y[f].add(A),X[V].add(O),X[I].add(O),X[f].add(O)}let k=this.groups;if(k.length===0)k=[{start:0,count:J.count}];for(let V=0,I=k.length;V<I;++V){let f=k[V],S=f.start,p=f.count;for(let t=S,T=S+p;t<T;t+=3)E(J.getX(t+0),J.getX(t+1),J.getX(t+2))}let z=new v,B=new v,C=new v,P=new v;function D(V){C.fromBufferAttribute(K,V),P.copy(C);let I=Y[V];z.copy(I),z.sub(C.multiplyScalar(C.dot(I))).normalize(),B.crossVectors(P,I);let S=B.dot(X[V])<0?-1:1;W.setXYZW(V,z.x,z.y,z.z,S)}for(let V=0,I=Z.count;V<I;++V)if(H[V])D(V);this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let Z=this.getAttribute("normal");if(Z===void 0||Z.count!==Q.count)Z=new _9(new Float32Array(Q.count*3),3),this.setAttribute("normal",Z);else for(let q=0,G=Z.count;q<G;q++)Z.setXYZ(q,0,0,0);let K=new v,$=new v,W=new v,Y=new v,X=new v,H=new v,U=new v,N=new v;if(J)for(let q=0,G=J.count;q<G;q+=3){let F=J.getX(q+0),R=J.getX(q+1),A=J.getX(q+2);K.fromBufferAttribute(Q,F),$.fromBufferAttribute(Q,R),W.fromBufferAttribute(Q,A),U.subVectors(W,$),N.subVectors(K,$),U.cross(N),Y.fromBufferAttribute(Z,F),X.fromBufferAttribute(Z,R),H.fromBufferAttribute(Z,A),Y.add(U),X.add(U),H.add(U),Z.setXYZ(F,Y.x,Y.y,Y.z),Z.setXYZ(R,X.x,X.y,X.z),Z.setXYZ(A,H.x,H.y,H.z)}else for(let q=0,G=Q.count;q<G;q+=3)K.fromBufferAttribute(Q,q+0),$.fromBufferAttribute(Q,q+1),W.fromBufferAttribute(Q,q+2),U.subVectors(W,$),N.subVectors(K,$),U.cross(N),Z.setXYZ(q+0,U.x,U.y,U.z),Z.setXYZ(q+1,U.x,U.y,U.z),Z.setXYZ(q+2,U.x,U.y,U.z);this.normalizeNormals(),Z.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,Z=J.count;Q<Z;Q++)uJ.fromBufferAttribute(J,Q),uJ.normalize(),J.setXYZ(Q,uJ.x,uJ.y,uJ.z)}toNonIndexed(){function J(Y,X){let{array:H,itemSize:U,normalized:N}=Y,q=new H.constructor(X.length*U),G=0,F=0;for(let R=0,A=X.length;R<A;R++){if(Y.isInterleavedBufferAttribute)G=X[R]*Y.data.stride+Y.offset;else G=X[R]*U;for(let O=0;O<U;O++)q[F++]=H[G++]}return new _9(q,U,N)}if(this.index===null)return c0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new Q9,Z=this.index.array,K=this.attributes;for(let Y in K){let X=K[Y],H=J(X,Z);Q.setAttribute(Y,H)}let $=this.morphAttributes;for(let Y in $){let X=[],H=$[Y];for(let U=0,N=H.length;U<N;U++){let q=H[U],G=J(q,Z);X.push(G)}Q.morphAttributes[Y]=X}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let Y=0,X=W.length;Y<X;Y++){let H=W[Y];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let X=this.parameters;for(let H in X)if(X[H]!==void 0)J[H]=X[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let Z=this.attributes;for(let X in Z){let H=Z[X];J.data.attributes[X]=H.toJSON(J.data)}let K={},$=!1;for(let X in this.morphAttributes){let H=this.morphAttributes[X],U=[];for(let N=0,q=H.length;N<q;N++){let G=H[N];U.push(G.toJSON(J.data))}if(U.length>0)K[X]=U,$=!0}if($)J.data.morphAttributes=K,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere=Y.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let Z=J.index;if(Z!==null)this.setIndex(Z.clone());let K=J.attributes;for(let H in K){let U=K[H];this.setAttribute(H,U.clone(Q))}let $=J.morphAttributes;for(let H in $){let U=[],N=$[H];for(let q=0,G=N.length;q<G;q++)U.push(N[q].clone(Q));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,U=W.length;H<U;H++){let N=W[H];this.addGroup(N.start,N.count,N.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zK{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=G8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,Z){J*=this.stride,Z*=Q.stride;for(let K=0,$=this.stride;K<$;K++)this.array[J+K]=Q.array[Z+K];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};let Q=g$(this.array);if(J.arrayBuffers[Q]===void 0)J.arrayBuffers[Q]=this.array.slice(0).buffer;let Z=new this.array.constructor(J.arrayBuffers[Q]),K=new this.constructor(Z,this.stride);return K.setUsage(this.usage),K}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};let Q=g$(this.array);if(J.arrayBuffers[Q]===void 0)J.arrayBuffers[Q]=Array.from(new Uint32Array(this.array.slice(0).buffer));let Z={uuid:this.uuid,buffer:Q,type:this.array.constructor.name,stride:this.stride};return Z.usage=this.usage,Z}}function g$(J){if(J.buffer._uuid===void 0)J.buffer._uuid=G8();if(J.byteOffset===0&&J.byteLength===J.buffer.byteLength)return J.buffer._uuid;return J.buffer._uuid+":"+J.byteOffset+":"+J.byteLength}var W9=new v;class g7{constructor(J,Q,Z,K=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=Z,this.normalized=K,this._normalizationScale=J!==void 0?WQ(J.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,Z=this.data.count;Q<Z;Q++)W9.fromBufferAttribute(this,Q),W9.applyMatrix4(J),this.setXYZ(Q,W9.x,W9.y,W9.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)W9.fromBufferAttribute(this,Q),W9.applyNormalMatrix(J),this.setXYZ(Q,W9.x,W9.y,W9.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)W9.fromBufferAttribute(this,Q),W9.transformDirection(J),this.setXYZ(Q,W9.x,W9.y,W9.z);return this}getComponent(J,Q){let Z=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)Z=this._denormalize(Z);return Z}setComponent(J,Q,Z){if(this.normalized)Z=this._normalize(Z);return this.data.array[J*this.data.stride+this.offset+Q]=Z,this}setX(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=this._normalize(Q);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=this._denormalize(Q);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=this._denormalize(Q);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=this._denormalize(Q);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=this._denormalize(Q);return Q}setXY(J,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),Z=this._normalize(Z);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this}setXYZ(J,Q,Z,K){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),Z=this._normalize(Z),K=this._normalize(K);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=K,this}setXYZW(J,Q,Z,K,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=this._normalize(Q),Z=this._normalize(Z),K=this._normalize(K),$=this._normalize($);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=K,this.data.array[J+3]=$,this}clone(J){if(J===void 0){x7("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let K=Z*this.data.stride+this.offset;for(let $=0;$<this.itemSize;$++)Q.push(this.data.array[K+$])}return new _9(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new g7(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){x7("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let K=Z*this.data.stride+this.offset;for(let $=0;$<this.itemSize;$++)Q.push(this.data.array[K+$])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.max(J/Q,-1):NY(J,this.data.array)}_normalize(J){let Q=this._normalizationScale;return Q!==void 0?Math.round(J*Q):GY(J,this.data.array)}}var YZ=new v,OH=new v,DH=new s0;class O9{constructor(J=new v(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,Z,K){return this.normal.set(J,Q,Z),this.constant=K,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,Z){let K=YZ.subVectors(Z,Q).cross(OH.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(K,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,Z=!0){let K=J.delta(YZ),$=this.normal.dot(K);if($===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/$;if(Z===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(K,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),Z=this.distanceToPoint(J.end);return Q<0&&Z>0||Z<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let Z=Q||DH.getNormalMatrix(J),K=this.coplanarPoint(YZ).applyMatrix4(J),$=this.normal.applyMatrix3(Z).normalize();return this.constant=-K.dot($),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var RH=0;class q8 extends o9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:RH++}),this.uuid=G8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new v0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let Z=J[Q];if(Z===void 0){c0(`Material: parameter '${Q}' has value of undefined.`);continue}let K=this[Q];if(K===void 0){c0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(K&&K.isColor)K.set(Z);else if(K&&K.isVector2&&(Z&&Z.isVector2)||K&&K.isEuler&&(Z&&Z.isEuler)||K&&K.isVector3&&(Z&&Z.isVector3))K.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let Z={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,Z.blending=this.blending,Z.side=this.side,Z.shadowSide=this.shadowSide,Z.vertexColors=this.vertexColors,Z.opacity=this.opacity,Z.transparent=this.transparent,Z.blendSrc=this.blendSrc,Z.blendDst=this.blendDst,Z.blendEquation=this.blendEquation,Z.blendSrcAlpha=this.blendSrcAlpha,Z.blendDstAlpha=this.blendDstAlpha,Z.blendEquationAlpha=this.blendEquationAlpha,Z.blendColor=this.blendColor.getHex(),Z.blendAlpha=this.blendAlpha,Z.depthFunc=this.depthFunc,Z.depthTest=this.depthTest,Z.depthWrite=this.depthWrite,Z.colorWrite=this.colorWrite,Z.clipIntersection=this.clipIntersection,Z.clipShadows=this.clipShadows,Z.stencilWriteMask=this.stencilWriteMask,Z.stencilFunc=this.stencilFunc,Z.stencilRef=this.stencilRef,Z.stencilFuncMask=this.stencilFuncMask,Z.stencilFail=this.stencilFail,Z.stencilZFail=this.stencilZFail,Z.stencilZPass=this.stencilZPass,Z.stencilWrite=this.stencilWrite,Z.polygonOffset=this.polygonOffset,Z.polygonOffsetFactor=this.polygonOffsetFactor,Z.polygonOffsetUnits=this.polygonOffsetUnits,Z.dithering=this.dithering,Z.alphaTest=this.alphaTest,Z.alphaHash=this.alphaHash,Z.alphaToCoverage=this.alphaToCoverage,Z.premultipliedAlpha=this.premultipliedAlpha,Z.forceSinglePass=this.forceSinglePass,Z.allowOverride=this.allowOverride,Z.visible=this.visible,Z.toneMapped=this.toneMapped,Z.name=this.name,this.color&&this.color.isColor)Z.color=this.color.getHex();if(this.roughness!==void 0)Z.roughness=this.roughness;if(this.metalness!==void 0)Z.metalness=this.metalness;if(this.sheen!==void 0)Z.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Z.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Z.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Z.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)Z.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Z.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Z.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Z.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Z.shininess=this.shininess;if(this.clearcoat!==void 0)Z.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Z.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)Z.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)Z.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(J).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Z.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Z.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Z.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Z.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Z.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Z.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)Z.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)Z.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)Z.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Z.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)Z.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)Z.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Z.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Z.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Z.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Z.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Z.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Z.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Z.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Z.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Z.lightMap=this.lightMap.toJSON(J).uuid,Z.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Z.aoMap=this.aoMap.toJSON(J).uuid,Z.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Z.bumpMap=this.bumpMap.toJSON(J).uuid,Z.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Z.normalMap=this.normalMap.toJSON(J).uuid,Z.normalMapType=this.normalMapType,Z.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Z.displacementMap=this.displacementMap.toJSON(J).uuid,Z.displacementScale=this.displacementScale,Z.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Z.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Z.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Z.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Z.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Z.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Z.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Z.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Z.combine=this.combine}if(this.envMapRotation!==void 0)Z.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Z.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Z.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Z.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Z.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Z.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Z.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Z.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Z.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)Z.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Z.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Z.size=this.size;if(this.sizeAttenuation!==void 0)Z.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)Z.clippingPlanes=this.clippingPlanes.map(($)=>$.toJSON());if(this.rotation!==void 0)Z.rotation=this.rotation;if(this.depthPacking!==void 0)Z.depthPacking=this.depthPacking;if(this.linewidth!==void 0)Z.linewidth=this.linewidth;if(this.linecap!==void 0)Z.linecap=this.linecap;if(this.linejoin!==void 0)Z.linejoin=this.linejoin;if(this.dashSize!==void 0)Z.dashSize=this.dashSize;if(this.gapSize!==void 0)Z.gapSize=this.gapSize;if(this.scale!==void 0)Z.scale=this.scale;if(this.wireframe!==void 0)Z.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)Z.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)Z.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)Z.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)Z.flatShading=this.flatShading;if(this.fog!==void 0)Z.fog=this.fog;if(Object.keys(this.userData).length>0)Z.userData=this.userData;function K($){let W=[];for(let Y in $){let X=$[Y];delete X.metadata,W.push(X)}return W}if(Q){let $=K(J.textures),W=K(J.images);if($.length>0)Z.textures=$;if(W.length>0)Z.images=W}return Z}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new v0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.diffuseRoughness!==void 0)this.diffuseRoughness=J.diffuseRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessMinimum;if(J.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=J.iridescenceThicknessMaximum;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=J.iridescenceThicknessRange[1];if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map((Z)=>new O9().fromJSON(Z));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let Z=J.normalScale;if(Array.isArray(Z)===!1)Z=[Z,Z];this.normalScale=new Z0().fromArray(Z)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new Z0().fromArray(J.clearcoatNormalScale);if(J.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=Q[J.diffuseRoughnessMap]||null;if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,Z=null;if(Q!==null){let K=Q.length;Z=Array(K);for(let $=0;$!==K;++$)Z[$]=Q[$].clone()}return this.clippingPlanes=Z,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class j8 extends q8{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new v0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var J7,T7=new v,Q7=new v,Z7=new v,K7=new Z0,w7=new Z0,EY=new HJ,C6=new v,S7=new v,_6=new v,p$=new Z0,XZ=new Z0,l$=new Z0;class M7 extends gJ{constructor(J=new j8){super();if(this.isSprite=!0,this.type="Sprite",J7===void 0){J7=new Q9;let Q=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),Z=new zK(Q,5);J7.setIndex([0,1,2,0,2,3]),J7.setAttribute("position",new g7(Z,3,0,!1)),J7.setAttribute("uv",new g7(Z,2,3,!1))}this.geometry=J7,this.material=J,this.center=new Z0(0.5,0.5),this.count=1}intersectsFrustum(J){return J.intersectsSprite(this)}raycast(J,Q){if(J.camera===null)u0('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(Q7.setFromMatrixScale(this.matrixWorld),EY.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),Z7.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)Q7.multiplyScalar(-Z7.z);let Z=this.material.rotation,K,$;if(Z!==0)$=Math.cos(Z),K=Math.sin(Z);let W=this.center;P6(C6.set(-0.5,-0.5,0),Z7,W,Q7,K,$),P6(S7.set(0.5,-0.5,0),Z7,W,Q7,K,$),P6(_6.set(0.5,0.5,0),Z7,W,Q7,K,$),p$.set(0,0),XZ.set(1,0),l$.set(1,1);let Y=J.ray.intersectTriangle(C6,S7,_6,!1,T7);if(Y===null){if(P6(S7.set(-0.5,0.5,0),Z7,W,Q7,K,$),XZ.set(0,1),Y=J.ray.intersectTriangle(C6,_6,S7,!1,T7),Y===null)return}let X=J.ray.origin.distanceTo(T7);if(X<J.near||X>J.far)return;Q.push({distance:X,point:T7.clone(),uv:E9.getInterpolation(T7,C6,S7,_6,p$,XZ,l$,new Z0),face:null,object:this})}copy(J,Q){if(super.copy(J,Q),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}toJSON(J){let Q=super.toJSON(J);return Q.object.center=this.center.toArray(),Q}}function P6(J,Q,Z,K,$,W){if(K7.subVectors(J,Z).addScalar(0.5).multiply(K),$!==void 0)w7.x=W*K7.x-$*K7.y,w7.y=$*K7.x+W*K7.y;else w7.copy(K7);J.copy(Q),J.x+=w7.x,J.y+=w7.y,J.applyMatrix4(EY)}var u9=new v,HZ=new v,I6=new v,T6=new v;class NQ{constructor(J=new v,Q=new v(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,u9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let Z=Q.dot(this.direction);if(Z<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,Z)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=u9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return u9.copy(this.origin).addScaledVector(this.direction,Q),u9.distanceToSquared(J)}distanceSqToSegment(J,Q,Z,K){HZ.copy(J).add(Q).multiplyScalar(0.5),I6.copy(Q).sub(J).normalize(),T6.copy(this.origin).sub(HZ);let $=J.distanceTo(Q)*0.5,W=-this.direction.dot(I6),Y=T6.dot(this.direction),X=-T6.dot(I6),H=T6.lengthSq(),U=Math.abs(1-W*W),N,q,G,F;if(U>0)if(N=W*X-Y,q=W*Y-X,F=$*U,N>=0)if(q>=-F)if(q<=F){let R=1/U;N*=R,q*=R,G=N*(N+W*q+2*Y)+q*(W*N+q+2*X)+H}else q=$,N=Math.max(0,-(W*q+Y)),G=-N*N+q*(q+2*X)+H;else q=-$,N=Math.max(0,-(W*q+Y)),G=-N*N+q*(q+2*X)+H;else if(q<=-F)N=Math.max(0,-(-W*$+Y)),q=N>0?-$:Math.min(Math.max(-$,-X),$),G=-N*N+q*(q+2*X)+H;else if(q<=F)N=0,q=Math.min(Math.max(-$,-X),$),G=q*(q+2*X)+H;else N=Math.max(0,-(W*$+Y)),q=N>0?$:Math.min(Math.max(-$,-X),$),G=-N*N+q*(q+2*X)+H;else q=W>0?-$:$,N=Math.max(0,-(W*q+Y)),G=-N*N+q*(q+2*X)+H;if(Z)Z.copy(this.origin).addScaledVector(this.direction,N);if(K)K.copy(HZ).addScaledVector(I6,q);return G}intersectSphere(J,Q){if(J.radius<0)return null;u9.subVectors(J.center,this.origin);let Z=u9.dot(this.direction),K=u9.dot(u9)-Z*Z,$=J.radius*J.radius;if(K>$)return null;let W=Math.sqrt($-K),Y=Z-W,X=Z+W;if(X<0)return null;if(Y<0)return this.at(X,Q);return this.at(Y,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Z=-(this.origin.dot(J.normal)+J.constant)/Q;return Z>=0?Z:null}intersectPlane(J,Q){let Z=this.distanceToPlane(J);if(Z===null)return null;return this.at(Z,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let Z,K,$,W,Y,X,H=1/this.direction.x,U=1/this.direction.y,N=1/this.direction.z,q=this.origin;if(H>=0)Z=(J.min.x-q.x)*H,K=(J.max.x-q.x)*H;else Z=(J.max.x-q.x)*H,K=(J.min.x-q.x)*H;if(U>=0)$=(J.min.y-q.y)*U,W=(J.max.y-q.y)*U;else $=(J.max.y-q.y)*U,W=(J.min.y-q.y)*U;if(Z>W||$>K)return null;if($>Z||isNaN(Z))Z=$;if(W<K||isNaN(K))K=W;if(N>=0)Y=(J.min.z-q.z)*N,X=(J.max.z-q.z)*N;else Y=(J.max.z-q.z)*N,X=(J.min.z-q.z)*N;if(Z>X||Y>K)return null;if(Y>Z||Z!==Z)Z=Y;if(X<K||K!==K)K=X;if(K<0)return null;return this.at(Z>=0?Z:K,Q)}intersectsBox(J){return this.intersectBox(J,u9)!==null}intersectTriangle(J,Q,Z,K,$){let W=this.origin,Y=this.direction,X=Y.x,H=Y.y,U=Y.z,N=J.x-W.x,q=J.y-W.y,G=J.z-W.z,F=Q.x-W.x,R=Q.y-W.y,A=Q.z-W.z,O=Z.x-W.x,E=Z.y-W.y,k=Z.z-W.z,z=Math.abs(X),B=Math.abs(H),C=Math.abs(U),P,D,V,I,f,S,p,t,T,c,n,x;if(z>=B&&z>=C)if(V=X,S=N,T=F,x=O,X>=0)P=H,D=U,I=q,f=G,p=R,t=A,c=E,n=k;else P=U,D=H,I=G,f=q,p=A,t=R,c=k,n=E;else if(B>=C)if(V=H,S=q,T=R,x=E,H>=0)P=U,D=X,I=G,f=N,p=A,t=F,c=k,n=O;else P=X,D=U,I=N,f=G,p=F,t=A,c=O,n=k;else if(V=U,S=G,T=A,x=k,U>=0)P=X,D=H,I=N,f=q,p=F,t=R,c=O,n=E;else P=H,D=X,I=q,f=N,p=R,t=F,c=E,n=O;if(V===0)return null;let Y0=P/V,d=D/V,r=1/V,K0=I-Y0*S,z0=f-d*S,i=p-Y0*T,$0=t-d*T,C0=c-Y0*x,h0=n-d*x,b0=C0*$0-h0*i,L0=K0*h0-z0*C0,YJ=i*z0-$0*K0;if(K){if(b0<0||L0<0||YJ<0)return null}else if((b0<0||L0<0||YJ<0)&&(b0>0||L0>0||YJ>0))return null;let r0=b0+L0+YJ;if(r0===0)return null;let d0=r*(b0*S+L0*T+YJ*x);if(r0>0?d0<0:d0>0)return null;return this.at(d0/r0,$)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class v8 extends q8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new v0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new n9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var m$=new HJ,k8=new NQ,w6=new S8,d$=new v,S6=new v,j6=new v,v6=new v,UZ=new v,y6=new v,u$=new v,f6=new v;class AJ extends gJ{constructor(J=new Q9,Q=new v8){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let K=Q[Z[0]];if(K!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let $=0,W=K.length;$<W;$++){let Y=K[$].name||String($);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=$}}}}getVertexPosition(J,Q){let Z=this.geometry,K=Z.attributes.position,$=Z.morphAttributes.position,W=Z.morphTargetsRelative;Q.fromBufferAttribute(K,J);let Y=this.morphTargetInfluences;if($&&Y){y6.set(0,0,0);for(let X=0,H=$.length;X<H;X++){let U=Y[X],N=$[X];if(U===0)continue;if(UZ.fromBufferAttribute(N,J),W)y6.addScaledVector(UZ,U);else y6.addScaledVector(UZ.sub(Q),U)}Q.add(y6)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let Z=this.geometry,K=this.material,$=this.matrixWorld;if(K===void 0)return;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(w6.copy(Z.boundingSphere),w6.applyMatrix4($),k8.copy(J.ray).recast(J.near),w6.containsPoint(k8.origin)===!1){if(k8.intersectSphere(w6,d$)===null)return;if(k8.origin.distanceToSquared(d$)>(J.far-J.near)**2)return}if(m$.copy($).invert(),k8.copy(J.ray).applyMatrix4(m$),Z.boundingBox!==null){if(k8.intersectsBox(Z.boundingBox)===!1)return}this._computeIntersections(J,Q,k8)}_computeIntersections(J,Q,Z){let K,$=this.geometry,W=this.material,Y=$.index,X=$.attributes.position,H=$.attributes.uv,U=$.attributes.uv1,N=$.attributes.normal,q=$.groups,G=$.drawRange;if(Y!==null)if(Array.isArray(W))for(let F=0,R=q.length;F<R;F++){let A=q[F],O=W[A.materialIndex],E=Math.max(A.start,G.start),k=Math.min(Y.count,Math.min(A.start+A.count,G.start+G.count));for(let z=E,B=k;z<B;z+=3){let C=Y.getX(z),P=Y.getX(z+1),D=Y.getX(z+2);if(K=h6(this,O,J,Z,H,U,N,C,P,D),K)K.faceIndex=Math.floor(z/3),K.face.materialIndex=A.materialIndex,Q.push(K)}}else{let F=Math.max(0,G.start),R=Math.min(Y.count,G.start+G.count);for(let A=F,O=R;A<O;A+=3){let E=Y.getX(A),k=Y.getX(A+1),z=Y.getX(A+2);if(K=h6(this,W,J,Z,H,U,N,E,k,z),K)K.faceIndex=Math.floor(A/3),Q.push(K)}}else if(X!==void 0)if(Array.isArray(W))for(let F=0,R=q.length;F<R;F++){let A=q[F],O=W[A.materialIndex],E=Math.max(A.start,G.start),k=Math.min(X.count,Math.min(A.start+A.count,G.start+G.count));for(let z=E,B=k;z<B;z+=3){let C=z,P=z+1,D=z+2;if(K=h6(this,O,J,Z,H,U,N,C,P,D),K)K.faceIndex=Math.floor(z/3),K.face.materialIndex=A.materialIndex,Q.push(K)}}else{let F=Math.max(0,G.start),R=Math.min(X.count,G.start+G.count);for(let A=F,O=R;A<O;A+=3){let E=A,k=A+1,z=A+2;if(K=h6(this,W,J,Z,H,U,N,E,k,z),K)K.faceIndex=Math.floor(A/3),Q.push(K)}}}}function MH(J,Q,Z,K,$,W,Y,X){let H;if(Q.side===1)H=K.intersectTriangle(Y,W,$,!0,X);else H=K.intersectTriangle($,W,Y,Q.side===0,X);if(H===null)return null;f6.copy(X),f6.applyMatrix4(J.matrixWorld);let U=Z.ray.origin.distanceTo(f6);if(U<Z.near||U>Z.far)return null;return{distance:U,point:f6.clone(),object:J}}function h6(J,Q,Z,K,$,W,Y,X,H,U){J.getVertexPosition(X,S6),J.getVertexPosition(H,j6),J.getVertexPosition(U,v6);let N=MH(J,Q,Z,K,S6,j6,v6,u$);if(N){let q=new v;if(E9.getBarycoord(u$,S6,j6,v6,q),$)N.uv=E9.getInterpolatedAttribute($,X,H,U,q,new Z0);if(W)N.uv1=E9.getInterpolatedAttribute(W,X,H,U,q,new Z0);if(Y){if(N.normal=E9.getInterpolatedAttribute(Y,X,H,U,q,new v),N.normal.dot(K.direction)>0)N.normal.multiplyScalar(-1)}let G={a:X,b:H,c:U,normal:new v,materialIndex:0};E9.getNormal(S6,j6,v6,G.normal),N.face=G,N.barycoord=q}return N}class GQ extends cJ{constructor(J=null,Q=1,Z=1,K,$,W,Y,X,H=1003,U=1003,N,q){super(null,W,Y,X,H,U,K,$,N,q);this.isDataTexture=!0,this.image={data:J,width:Q,height:Z},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class n6 extends _9{constructor(J,Q,Z,K=1){super(J,Q,Z);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=K}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var $7=new HJ,c$=new HJ,b6=[],n$=new r9,VH=new HJ,j7=new AJ,v7=new S8;class qQ extends AJ{constructor(J,Q,Z){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new n6(new Float32Array(Z*16),16),this.instanceColor=null,this.morphTexture=null,this.count=Z,this.boundingBox=null,this.boundingSphere=null;for(let K=0;K<Z;K++)this.setMatrixAt(K,VH)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new r9;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let Z=0;Z<Q;Z++)this.getMatrixAt(Z,$7),n$.copy(J.boundingBox).applyMatrix4($7),this.boundingBox.union(n$)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new S8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let Z=0;Z<Q;Z++)this.getMatrixAt(Z,$7),v7.copy(J.boundingSphere).applyMatrix4($7),this.boundingSphere.union(v7)}copy(J,Q){return super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),this.morphTexture=J.morphTexture!==null?J.morphTexture.clone():null,this.instanceColor=J.instanceColor!==null?J.instanceColor.clone():null,this.count=J.count,this.boundingBox=J.boundingBox!==null?J.boundingBox.clone():null,this.boundingSphere=J.boundingSphere!==null?J.boundingSphere.clone():null,this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let Z=Q.morphTargetInfluences,K=this.morphTexture.source.data.data,$=Z.length+1,W=J*$+1;for(let Y=0;Y<Z.length;Y++)Z[Y]=K[W+Y]}raycast(J,Q){let Z=this.matrixWorld,K=this.count;if(j7.geometry=this.geometry,j7.material=this.material,j7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(v7.copy(this.boundingSphere),v7.applyMatrix4(Z),J.ray.intersectsSphere(v7)===!1)return;for(let $=0;$<K;$++){this.getMatrixAt($,$7),c$.multiplyMatrices(Z,$7),j7.matrixWorld=c$,j7.raycast(J,b6);for(let W=0,Y=b6.length;W<Y;W++){let X=b6[W];X.instanceId=$,X.object=this,Q.push(X)}b6.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new n6(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let Z=Q.morphTargetInfluences,K=Z.length+1;if(this.morphTexture===null)this.morphTexture=new GQ(new Float32Array(K*this.count),K,this.count,1028,1015);let $=this.morphTexture.source.data.data,W=0;for(let H=0;H<Z.length;H++)W+=Z[H];let Y=this.geometry.morphTargetsRelative?1:1-W,X=K*J;return $[X]=Y,$.set(Z,X+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var z8=new S8,BH=new Z0(0.5,0.5),x6=new v;class C8{constructor(J=new O9,Q=new O9,Z=new O9,K=new O9,$=new O9,W=new O9){this.planes=[J,Q,Z,K,$,W]}set(J,Q,Z,K,$,W){let Y=this.planes;return Y[0].copy(J),Y[1].copy(Q),Y[2].copy(Z),Y[3].copy(K),Y[4].copy($),Y[5].copy(W),this}copy(J){let Q=this.planes;for(let Z=0;Z<6;Z++)Q[Z].copy(J.planes[Z]);return this}setFromProjectionMatrix(J,Q=2000,Z=!1){let K=this.planes,$=J.elements,W=$[0],Y=$[1],X=$[2],H=$[3],U=$[4],N=$[5],q=$[6],G=$[7],F=$[8],R=$[9],A=$[10],O=$[11],E=$[12],k=$[13],z=$[14],B=$[15];if(K[0].setComponents(H-W,G-U,O-F,B-E).normalize(),K[1].setComponents(H+W,G+U,O+F,B+E).normalize(),K[2].setComponents(H+Y,G+N,O+R,B+k).normalize(),K[3].setComponents(H-Y,G-N,O-R,B-k).normalize(),Z)K[4].setComponents(X,q,A,z).normalize(),K[5].setComponents(H-X,G-q,O-A,B-z).normalize();else if(K[4].setComponents(H-X,G-q,O-A,B-z).normalize(),Q===2000)K[5].setComponents(H+X,G+q,O+A,B+z).normalize();else if(Q===2001)K[5].setComponents(X,q,A,z).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();z8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();z8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(z8)}intersectsSprite(J){z8.center.set(0,0,0);let Q=BH.distanceTo(J.center);return z8.radius=0.7071067811865476+Q,z8.applyMatrix4(J.matrixWorld),this.intersectsSphere(z8)}intersectsSphere(J){let Q=this.planes,Z=J.center,K=-J.radius;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(Z)<K)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let Z=0;Z<6;Z++){let K=Q[Z];if(x6.x=K.normal.x>0?J.max.x:J.min.x,x6.y=K.normal.y>0?J.max.y:J.min.y,x6.z=K.normal.z>0?J.max.z:J.min.z,K.distanceToPoint(x6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var s$=new HJ;class EQ{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(J){let Q=J.cameras,Z=this._frustums;for(let K=0;K<Q.length;K++){let $=Q[K];if(s$.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Z[K]===void 0)Z[K]=new C8;Z[K].setFromProjectionMatrix(s$,$.coordinateSystem,$.reversedDepth)}return this._count=Q.length,this}getFrustum(J){return this._frustums[J]}intersectsObject(J){let Q=this._frustums;for(let Z=0;Z<this._count;Z++)if(Q[Z].intersectsObject(J))return!0;return!1}intersectsSprite(J){let Q=this._frustums;for(let Z=0;Z<this._count;Z++)if(Q[Z].intersectsSprite(J))return!0;return!1}intersectsSphere(J){let Q=this._frustums;for(let Z=0;Z<this._count;Z++)if(Q[Z].intersectsSphere(J))return!0;return!1}intersectsBox(J){let Q=this._frustums;for(let Z=0;Z<this._count;Z++)if(Q[Z].intersectsBox(J))return!0;return!1}containsPoint(J){let Q=this._frustums;for(let Z=0;Z<this._count;Z++)if(Q[Z].containsPoint(J))return!0;return!1}copy(J){this.coordinateSystem=J.coordinateSystem;let Q=this._frustums,Z=J._frustums;for(let K=0;K<J._count;K++){if(Q[K]===void 0)Q[K]=new C8;Q[K].copy(Z[K])}return this._count=J._count,this}clone(){return new EQ().copy(this)}}class FQ extends cJ{constructor(J=[],Q=301,Z,K,$,W,Y,X,H,U){super(J,Q,Z,K,$,W,Y,X,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class E8 extends cJ{constructor(J,Q,Z,K,$,W,Y,X,H){super(J,Q,Z,K,$,W,Y,X,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class F8 extends cJ{constructor(J,Q,Z=1014,K,$,W,Y=1003,X=1003,H,U=1026,N=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let q={width:J,height:Q,depth:N};super(q,K,$,W,Y,X,U,Z,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new i7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class OQ extends F8{constructor(J,Q=1014,Z=301,K,$,W=1003,Y=1003,X,H=1026){let U={width:J,height:J,depth:1},N=[U,U,U,U,U,U];super(J,J,Q,Z,K,$,W,Y,X,H);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class DQ extends cJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class Y9 extends Q9{constructor(J=1,Q=1,Z=1,K=1,$=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:Z,widthSegments:K,heightSegments:$,depthSegments:W};let Y=this;K=Math.floor(K),$=Math.floor($),W=Math.floor(W);let X=[],H=[],U=[],N=[],q=0,G=0;F("z","y","x",-1,-1,Z,Q,J,W,$,0),F("z","y","x",1,-1,Z,Q,-J,W,$,1),F("x","z","y",1,1,J,Z,Q,K,W,2),F("x","z","y",1,-1,J,Z,-Q,K,W,3),F("x","y","z",1,-1,J,Q,Z,K,$,4),F("x","y","z",-1,-1,J,Q,-Z,K,$,5),this.setIndex(X),this.setAttribute("position",new FJ(H,3)),this.setAttribute("normal",new FJ(U,3)),this.setAttribute("uv",new FJ(N,2));function F(R,A,O,E,k,z,B,C,P,D,V){let I=z/P,f=B/D,S=z/2,p=B/2,t=C/2,T=P+1,c=D+1,n=0,x=0,Y0=new v;for(let d=0;d<c;d++){let r=d*f-p;for(let K0=0;K0<T;K0++){let z0=K0*I-S;Y0[R]=z0*E,Y0[A]=r*k,Y0[O]=t,H.push(Y0.x,Y0.y,Y0.z),Y0[R]=0,Y0[A]=0,Y0[O]=C>0?1:-1,U.push(Y0.x,Y0.y,Y0.z),N.push(K0/P),N.push(1-d/D),n+=1}}for(let d=0;d<D;d++)for(let r=0;r<P;r++){let K0=q+r+T*d,z0=q+r+T*(d+1),i=q+(r+1)+T*(d+1),$0=q+(r+1)+T*d;X.push(K0,z0,$0),X.push(z0,i,$0),x+=6}Y.addGroup(G,x,V),G+=x,q+=n}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new Y9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class y8 extends Q9{constructor(J=1,Q=32,Z=0,K=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:Z,thetaLength:K},Q=Math.max(3,Q);let $=[],W=[],Y=[],X=[],H=new v,U=new Z0;W.push(0,0,0),Y.push(0,0,1),X.push(0.5,0.5);for(let N=0,q=3;N<=Q;N++,q+=3){let G=Z+N/Q*K;H.x=J*Math.cos(G),H.y=J*Math.sin(G),W.push(H.x,H.y,H.z),Y.push(0,0,1),U.x=(W[q]/J+1)/2,U.y=(W[q+1]/J+1)/2,X.push(U.x,U.y)}for(let N=1;N<=Q;N++)$.push(N,N+1,0);this.setIndex($),this.setAttribute("position",new FJ(W,3)),this.setAttribute("normal",new FJ(Y,3)),this.setAttribute("uv",new FJ(X,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new y8(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class v9 extends Q9{constructor(J=1,Q=1,Z=1,K=32,$=1,W=!1,Y=0,X=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:Z,radialSegments:K,heightSegments:$,openEnded:W,thetaStart:Y,thetaLength:X};let H=this;K=Math.floor(K),$=Math.floor($);let U=[],N=[],q=[],G=[],F=0,R=[],A=Z/2,O=0;if(E(),W===!1){if(J>0)k(!0);if(Q>0)k(!1)}this.setIndex(U),this.setAttribute("position",new FJ(N,3)),this.setAttribute("normal",new FJ(q,3)),this.setAttribute("uv",new FJ(G,2));function E(){let z=new v,B=new v,C=0,P=(Q-J)/Z;for(let D=0;D<=$;D++){let V=[],I=D/$,f=I*(Q-J)+J;for(let S=0;S<=K;S++){let p=S/K,t=p*X+Y,T=Math.sin(t),c=Math.cos(t);B.x=f*T,B.y=-I*Z+A,B.z=f*c,N.push(B.x,B.y,B.z),z.set(T,P,c).normalize(),q.push(z.x,z.y,z.z),G.push(p,1-I),V.push(F++)}R.push(V)}for(let D=0;D<K;D++)for(let V=0;V<$;V++){let I=R[V][D],f=R[V+1][D],S=R[V+1][D+1],p=R[V][D+1];if(J>0||V!==0)U.push(I,f,p),C+=3;if(Q>0||V!==$-1)U.push(f,S,p),C+=3}H.addGroup(O,C,0),O+=C}function k(z){let B=F,C=new Z0,P=new v,D=0,V=z===!0?J:Q,I=z===!0?1:-1;for(let S=1;S<=K;S++)N.push(0,A*I,0),q.push(0,I,0),G.push(0.5,0.5),F++;let f=F;for(let S=0;S<=K;S++){let t=S/K*X+Y,T=Math.cos(t),c=Math.sin(t);P.x=V*c,P.y=A*I,P.z=V*T,N.push(P.x,P.y,P.z),q.push(0,I,0),C.x=T*0.5+0.5,C.y=c*0.5*I+0.5,G.push(C.x,C.y),F++}for(let S=0;S<K;S++){let p=B+S,t=f+S;if(z===!0)U.push(t,t+1,p);else U.push(t+1,t,p);D+=3}H.addGroup(O,D,z===!0?1:2),O+=D}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new v9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class I9 extends v9{constructor(J=1,Q=1,Z=32,K=1,$=!1,W=0,Y=Math.PI*2){super(0,J,Q,Z,K,$,W,Y);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:Z,heightSegments:K,openEnded:$,thetaStart:W,thetaLength:Y}}static fromJSON(J){return new I9(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class t7 extends Q9{constructor(J=[],Q=[],Z=1,K=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:Z,detail:K};let $=[],W=[];if(Y(K),H(Z),U(),this.setAttribute("position",new FJ($,3)),this.setAttribute("normal",new FJ($.slice(),3)),this.setAttribute("uv",new FJ(W,2)),K===0)this.computeVertexNormals();else this.normalizeNormals();function Y(E){let k=new v,z=new v,B=new v;for(let C=0;C<Q.length;C+=3)G(Q[C+0],k),G(Q[C+1],z),G(Q[C+2],B),X(k,z,B,E)}function X(E,k,z,B){let C=B+1,P=[];for(let D=0;D<=C;D++){P[D]=[];let V=E.clone().lerp(z,D/C),I=k.clone().lerp(z,D/C),f=C-D;for(let S=0;S<=f;S++)if(S===0&&D===C)P[D][S]=V;else P[D][S]=V.clone().lerp(I,S/f)}for(let D=0;D<C;D++)for(let V=0;V<2*(C-D)-1;V++){let I=Math.floor(V/2);if(V%2===0)q(P[D][I+1]),q(P[D+1][I]),q(P[D][I]);else q(P[D][I+1]),q(P[D+1][I+1]),q(P[D+1][I])}}function H(E){let k=new v;for(let z=0;z<$.length;z+=3)k.x=$[z+0],k.y=$[z+1],k.z=$[z+2],k.normalize().multiplyScalar(E),$[z+0]=k.x,$[z+1]=k.y,$[z+2]=k.z}function U(){let E=new v;for(let k=0;k<$.length;k+=3){E.x=$[k+0],E.y=$[k+1],E.z=$[k+2];let z=A(E)/2/Math.PI+0.5,B=O(E)/Math.PI+0.5;W.push(z,1-B)}F(),N()}function N(){for(let E=0;E<W.length;E+=6){let k=W[E+0],z=W[E+2],B=W[E+4],C=Math.max(k,z,B),P=Math.min(k,z,B);if(C>0.9&&P<0.1){if(k<0.2)W[E+0]+=1;if(z<0.2)W[E+2]+=1;if(B<0.2)W[E+4]+=1}}}function q(E){$.push(E.x,E.y,E.z)}function G(E,k){let z=E*3;k.x=J[z+0],k.y=J[z+1],k.z=J[z+2]}function F(){let E=new v,k=new v,z=new v,B=new v,C=new Z0,P=new Z0,D=new Z0;for(let V=0,I=0;V<$.length;V+=9,I+=6){E.set($[V+0],$[V+1],$[V+2]),k.set($[V+3],$[V+4],$[V+5]),z.set($[V+6],$[V+7],$[V+8]),C.set(W[I+0],W[I+1]),P.set(W[I+2],W[I+3]),D.set(W[I+4],W[I+5]),B.copy(E).add(k).add(z).divideScalar(3);let f=A(B);R(C,I+0,E,f),R(P,I+2,k,f),R(D,I+4,z,f)}}function R(E,k,z,B){if(B<0&&E.x===1)W[k]=E.x-1;if(z.x===0&&z.z===0)W[k]=B/2/Math.PI+0.5}function A(E){return Math.atan2(E.z,-E.x)}function O(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new t7(J.vertices,J.indices,J.radius,J.detail)}}class f8 extends t7{constructor(J=1,Q=0){let Z=(1+Math.sqrt(5))/2,K=1/Z,$=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-K,-Z,0,-K,Z,0,K,-Z,0,K,Z,-K,-Z,0,-K,Z,0,K,-Z,0,K,Z,0,-Z,0,-K,Z,0,-K,-Z,0,K,Z,0,K],W=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super($,W,J,Q);this.type="DodecahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new f8(J.radius,J.detail)}}class B9{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){c0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let Z=this.getUtoTmapping(J);return this.getPoint(Z,Q)}getPoints(J=5){let Q=[];for(let Z=0;Z<=J;Z++)Q.push(this.getPoint(Z/J));return Q}getSpacedPoints(J=5){let Q=[];for(let Z=0;Z<=J;Z++)Q.push(this.getPointAt(Z/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],Z,K=this.getPoint(0),$=0;Q.push(0);for(let W=1;W<=J;W++)Z=this.getPoint(W/J),$+=Z.distanceTo(K),Q.push($),K=Z;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let Z=this.getLengths(),K=0,$=Z.length,W;if(Q)W=Q;else W=J*Z[$-1];let Y=0,X=$-1,H;while(Y<=X)if(K=Math.floor(Y+(X-Y)/2),H=Z[K]-W,H<0)Y=K+1;else if(H>0)X=K-1;else{X=K;break}if(K=X,Z[K]===W)return K/($-1);let U=Z[K],q=Z[K+1]-U,G=(W-U)/q;return(K+G)/($-1)}getTangent(J,Q){let K=J-0.0001,$=J+0.0001;if(K<0)K=0;if($>1)$=1;let W=this.getPoint(K),Y=this.getPoint($),X=Q||(W.isVector2?new Z0:new v);return X.copy(Y).sub(W).normalize(),X}getTangentAt(J,Q){let Z=this.getUtoTmapping(J);return this.getTangent(Z,Q)}computeFrenetFrames(J,Q=!1){let Z=new v,K=[],$=[],W=[],Y=new v,X=new HJ;for(let G=0;G<=J;G++){let F=G/J;K[G]=this.getTangentAt(F,new v)}$[0]=new v,W[0]=new v;let H=Number.MAX_VALUE,U=Math.abs(K[0].x),N=Math.abs(K[0].y),q=Math.abs(K[0].z);if(U<=H)H=U,Z.set(1,0,0);if(N<=H)H=N,Z.set(0,1,0);if(q<=H)Z.set(0,0,1);Y.crossVectors(K[0],Z).normalize(),$[0].crossVectors(K[0],Y),W[0].crossVectors(K[0],$[0]);for(let G=1;G<=J;G++){if($[G]=$[G-1].clone(),W[G]=W[G-1].clone(),Y.crossVectors(K[G-1],K[G]),Y.length()>Number.EPSILON){Y.normalize();let F=Math.acos(QJ(K[G-1].dot(K[G]),-1,1));$[G].applyMatrix4(X.makeRotationAxis(Y,F))}W[G].crossVectors(K[G],$[G])}if(Q===!0){let G=Math.acos(QJ($[0].dot($[J]),-1,1));if(G/=J,K[0].dot(Y.crossVectors($[0],$[J]))>0)G=-G;for(let F=1;F<=J;F++)$[F].applyMatrix4(X.makeRotationAxis(K[F],G*F)),W[F].crossVectors(K[F],$[F])}return{tangents:K,normals:$,binormals:W}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this.cacheArcLengths=null,this}}class e7 extends B9{constructor(J=0,Q=0,Z=1,K=1,$=0,W=Math.PI*2,Y=!1,X=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=Z,this.yRadius=K,this.aStartAngle=$,this.aEndAngle=W,this.aClockwise=Y,this.aRotation=X}getPoint(J,Q=new Z0){let Z=Q,K=Math.PI*2,$=this.aEndAngle-this.aStartAngle,W=Math.abs($)<Number.EPSILON;while($<0)$+=K;while($>K)$-=K;if($<Number.EPSILON)if(W)$=0;else $=K;if(this.aClockwise===!0&&!W)if($===K)$=-K;else $=$-K;let Y=this.aStartAngle+J*$,X=this.aX+this.xRadius*Math.cos(Y),H=this.aY+this.yRadius*Math.sin(Y);if(this.aRotation!==0){let U=Math.cos(this.aRotation),N=Math.sin(this.aRotation),q=X-this.aX,G=H-this.aY;X=q*U-G*N+this.aX,H=q*N+G*U+this.aY}return Z.set(X,H)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class AK extends e7{constructor(J,Q,Z,K,$,W){super(J,Q,Z,Z,K,$,W);this.isArcCurve=!0,this.type="ArcCurve"}}function CK(){let J=0,Q=0,Z=0,K=0;function $(W,Y,X,H){J=W,Q=X,Z=-3*W+3*Y-2*X-H,K=2*W-2*Y+X+H}return{initCatmullRom:function(W,Y,X,H,U){$(Y,X,U*(X-W),U*(H-Y))},initNonuniformCatmullRom:function(W,Y,X,H,U,N,q){let G=(Y-W)/U-(X-W)/(U+N)+(X-Y)/N,F=(X-Y)/N-(H-Y)/(N+q)+(H-X)/q;G*=N,F*=N,$(Y,X,G,F)},calc:function(W){let Y=W*W,X=Y*W;return J+Q*W+Z*Y+K*X}}}var i$=new v,o$=new v,NZ=new CK,GZ=new CK,qZ=new CK;class _K extends B9{constructor(J=[],Q=!1,Z="centripetal",K=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=Z,this.tension=K}getPoint(J,Q=new v){let Z=Q,K=this.points,$=K.length,W=($-(this.closed?0:1))*J,Y=Math.floor(W),X=W-Y;if(this.closed)Y+=Y>0?0:(Math.floor(Math.abs(Y)/$)+1)*$;else if(X===0&&Y===$-1)Y=$-2,X=1;let H,U;if(this.closed||Y>0)H=K[(Y-1)%$];else o$.subVectors(K[0],K[1]).add(K[0]),H=o$;let N=K[Y%$],q=K[(Y+1)%$];if(this.closed||Y+2<$)U=K[(Y+2)%$];else i$.subVectors(K[$-1],K[$-2]).add(K[$-1]),U=i$;if(this.curveType==="centripetal"||this.curveType==="chordal"){let G=this.curveType==="chordal"?0.5:0.25,F=Math.pow(H.distanceToSquared(N),G),R=Math.pow(N.distanceToSquared(q),G),A=Math.pow(q.distanceToSquared(U),G);if(R<0.0001)R=1;if(F<0.0001)F=R;if(A<0.0001)A=R;NZ.initNonuniformCatmullRom(H.x,N.x,q.x,U.x,F,R,A),GZ.initNonuniformCatmullRom(H.y,N.y,q.y,U.y,F,R,A),qZ.initNonuniformCatmullRom(H.z,N.z,q.z,U.z,F,R,A)}else if(this.curveType==="catmullrom")NZ.initCatmullRom(H.x,N.x,q.x,U.x,this.tension),GZ.initCatmullRom(H.y,N.y,q.y,U.y,this.tension),qZ.initCatmullRom(H.z,N.z,q.z,U.z,this.tension);return Z.set(NZ.calc(X),GZ.calc(X),qZ.calc(X)),Z}copy(J){super.copy(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let K=J.points[Q];this.points.push(K.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,Z=this.points.length;Q<Z;Q++){let K=this.points[Q];J.points.push(K.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let K=J.points[Q];this.points.push(new v().fromArray(K))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function a$(J,Q,Z,K,$){let W=(K-Q)*0.5,Y=($-Z)*0.5,X=J*J,H=J*X;return(2*Z-2*K+W+Y)*H+(-3*Z+3*K-2*W-Y)*X+W*J+Z}function LH(J,Q){let Z=1-J;return Z*Z*Q}function kH(J,Q){return 2*(1-J)*J*Q}function zH(J,Q){return J*J*Q}function h7(J,Q,Z,K){return LH(J,Q)+kH(J,Z)+zH(J,K)}function AH(J,Q){let Z=1-J;return Z*Z*Z*Q}function CH(J,Q){let Z=1-J;return 3*Z*Z*J*Q}function _H(J,Q){return 3*(1-J)*J*J*Q}function PH(J,Q){return J*J*J*Q}function b7(J,Q,Z,K,$){return AH(J,Q)+CH(J,Z)+_H(J,K)+PH(J,$)}class RQ extends B9{constructor(J=new Z0,Q=new Z0,Z=new Z0,K=new Z0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=Z,this.v3=K}getPoint(J,Q=new Z0){let Z=Q,K=this.v0,$=this.v1,W=this.v2,Y=this.v3;return Z.set(b7(J,K.x,$.x,W.x,Y.x),b7(J,K.y,$.y,W.y,Y.y)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class PK extends B9{constructor(J=new v,Q=new v,Z=new v,K=new v){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=Z,this.v3=K}getPoint(J,Q=new v){let Z=Q,K=this.v0,$=this.v1,W=this.v2,Y=this.v3;return Z.set(b7(J,K.x,$.x,W.x,Y.x),b7(J,K.y,$.y,W.y,Y.y),b7(J,K.z,$.z,W.z,Y.z)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class MQ extends B9{constructor(J=new Z0,Q=new Z0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new Z0){let Z=Q;if(J===1)Z.copy(this.v2);else Z.copy(this.v2).sub(this.v1),Z.multiplyScalar(J).add(this.v1);return Z}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new Z0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class IK extends B9{constructor(J=new v,Q=new v){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new v){let Z=Q;if(J===1)Z.copy(this.v2);else Z.copy(this.v2).sub(this.v1),Z.multiplyScalar(J).add(this.v1);return Z}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new v){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class VQ extends B9{constructor(J=new Z0,Q=new Z0,Z=new Z0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=Z}getPoint(J,Q=new Z0){let Z=Q,K=this.v0,$=this.v1,W=this.v2;return Z.set(h7(J,K.x,$.x,W.x),h7(J,K.y,$.y,W.y)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class TK extends B9{constructor(J=new v,Q=new v,Z=new v){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=Z}getPoint(J,Q=new v){let Z=Q,K=this.v0,$=this.v1,W=this.v2;return Z.set(h7(J,K.x,$.x,W.x),h7(J,K.y,$.y,W.y),h7(J,K.z,$.z,W.z)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class BQ extends B9{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new Z0){let Z=Q,K=this.points,$=(K.length-1)*J,W=Math.floor($),Y=$-W,X=K[W===0?W:W-1],H=K[W],U=K[W>K.length-2?K.length-1:W+1],N=K[W>K.length-3?K.length-1:W+2];return Z.set(a$(Y,X.x,H.x,U.x,N.x),a$(Y,X.y,H.y,U.y,N.y)),Z}copy(J){super.copy(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let K=J.points[Q];this.points.push(K.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,Z=this.points.length;Q<Z;Q++){let K=this.points[Q];J.points.push(K.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let K=J.points[Q];this.points.push(new Z0().fromArray(K))}return this}}var FZ=Object.freeze({__proto__:null,ArcCurve:AK,CatmullRomCurve3:_K,CubicBezierCurve:RQ,CubicBezierCurve3:PK,EllipseCurve:e7,LineCurve:MQ,LineCurve3:IK,QuadraticBezierCurve:VQ,QuadraticBezierCurve3:TK,SplineCurve:BQ});class wK extends B9{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let Z=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new FZ[Z](Q,J))}return this}getPoint(J,Q){let Z=J*this.getLength(),K=this.getCurveLengths(),$=0;while($<K.length){if(K[$]>=Z){let W=K[$]-Z,Y=this.curves[$],X=Y.getLength(),H=X===0?0:1-W/X;return Y.getPointAt(H,Q)}$++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let Z=0,K=this.curves.length;Z<K;Z++)Q+=this.curves[Z].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let Z=0;Z<=J;Z++)Q.push(this.getPoint(Z/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],Z;for(let K=0,$=this.curves;K<$.length;K++){let W=$[K],Y=W.isEllipseCurve?J*2:W.isLineCurve||W.isLineCurve3?1:W.isSplineCurve?J*W.points.length:J,X=W.getPoints(Y);for(let H=0;H<X.length;H++){let U=X[H];if(Z&&Z.equals(U))continue;Q.push(U),Z=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,Z=J.curves.length;Q<Z;Q++){let K=J.curves[Q];this.curves.push(K.clone())}return this.autoClose=J.autoClose,this.cacheLengths=null,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,Z=this.curves.length;Q<Z;Q++){let K=this.curves[Q];J.curves.push(K.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,Z=J.curves.length;Q<Z;Q++){let K=J.curves[Q];this.curves.push(new FZ[K.type]().fromJSON(K))}return this.cacheLengths=null,this}}class s6 extends wK{constructor(J){super();if(this.type="Path",this.currentPoint=new Z0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,Z=J.length;Q<Z;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let Z=new MQ(this.currentPoint.clone(),new Z0(J,Q));return this.curves.push(Z),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,Z,K){let $=new VQ(this.currentPoint.clone(),new Z0(J,Q),new Z0(Z,K));return this.curves.push($),this.currentPoint.set(Z,K),this}bezierCurveTo(J,Q,Z,K,$,W){let Y=new RQ(this.currentPoint.clone(),new Z0(J,Q),new Z0(Z,K),new Z0($,W));return this.curves.push(Y),this.currentPoint.set($,W),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),Z=new BQ(Q);return this.curves.push(Z),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,Z,K,$,W){let Y=this.currentPoint.x,X=this.currentPoint.y;return this.absarc(J+Y,Q+X,Z,K,$,W),this}absarc(J,Q,Z,K,$,W){return this.absellipse(J,Q,Z,Z,K,$,W),this}ellipse(J,Q,Z,K,$,W,Y,X){let H=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+H,Q+U,Z,K,$,W,Y,X),this}absellipse(J,Q,Z,K,$,W,Y,X){let H=new e7(J,Q,Z,K,$,W,Y,X);if(this.curves.length>0){let N=H.getPoint(0);if(!N.equals(this.currentPoint))this.lineTo(N.x,N.y)}this.curves.push(H);let U=H.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class J6 extends s6{constructor(J){super(J);this.uuid=G8(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let Z=0,K=this.holes.length;Z<K;Z++)Q[Z]=this.holes[Z].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,Z=J.holes.length;Q<Z;Q++){let K=J.holes[Q];this.holes.push(K.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,Z=this.holes.length;Q<Z;Q++){let K=this.holes[Q];J.holes.push(K.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,Z=J.holes.length;Q<Z;Q++){let K=J.holes[Q];this.holes.push(new s6().fromJSON(K))}return this}}function IH(J,Q,Z=2){let K=Q&&Q.length,$=K?Q[0]*Z:J.length,W=FY(J,0,$,Z,!0),Y=[];if(!W||W.next===W.prev)return Y;let X,H,U;if(K)W=vH(J,Q,W,Z);if(J.length>80*Z){X=J[0],H=J[1];let N=X,q=H;for(let G=Z;G<$;G+=Z){let F=J[G],R=J[G+1];if(F<X)X=F;if(R<H)H=R;if(F>N)N=F;if(R>q)q=R}U=Math.max(N-X,q-H),U=U!==0?32767/U:0}return p7(W,Y,Z,X,H,U,0),Y}function FY(J,Q,Z,K,$){let W;if($===uH(J,Q,Z,K)>0)for(let Y=Q;Y<Z;Y+=K)W=r$(Y/K|0,J[Y],J[Y+1],W);else for(let Y=Z-K;Y>=Q;Y-=K)W=r$(Y/K|0,J[Y],J[Y+1],W);if(W&&q7(W,W.next))m7(W),W=W.next;return W}function _8(J,Q){if(!J)return J;if(!Q)Q=J;let Z=J,K;do if(K=!1,!Z.steiner&&(q7(Z,Z.next)||wJ(Z.prev,Z,Z.next)===0)){if(m7(Z),Z=Q=Z.prev,Z===Z.next)break;K=!0}else Z=Z.next;while(K||Z!==Q);return Q}function p7(J,Q,Z,K,$,W,Y){if(!J)return;if(!Y&&W)xH(J,K,$,W);let X=J;while(J.prev!==J.next){let{prev:H,next:U}=J;if(W?wH(J,K,$,W):TH(J)){Q.push(H.i,J.i,U.i),m7(J),J=U.next,X=U.next;continue}if(J=U,J===X){if(!Y)p7(_8(J),Q,Z,K,$,W,1);else if(Y===1)J=SH(_8(J),Q),p7(J,Q,Z,K,$,W,2);else if(Y===2)jH(J,Q,Z,K,$,W);break}}}function TH(J){let Q=J.prev,Z=J,K=J.next;if(wJ(Q,Z,K)>=0)return!1;let $=Q.x,W=Z.x,Y=K.x,X=Q.y,H=Z.y,U=K.y,N=Math.min($,W,Y),q=Math.min(X,H,U),G=Math.max($,W,Y),F=Math.max(X,H,U),R=K.next;while(R!==Q){if(R.x>=N&&R.x<=G&&R.y>=q&&R.y<=F&&y7($,X,W,H,Y,U,R.x,R.y)&&wJ(R.prev,R,R.next)>=0)return!1;R=R.next}return!0}function wH(J,Q,Z,K){let $=J.prev,W=J,Y=J.next;if(wJ($,W,Y)>=0)return!1;let X=$.x,H=W.x,U=Y.x,N=$.y,q=W.y,G=Y.y,F=Math.min(X,H,U),R=Math.min(N,q,G),A=Math.max(X,H,U),O=Math.max(N,q,G),E=OZ(F,R,Q,Z,K),k=OZ(A,O,Q,Z,K),z=J.prevZ,B=J.nextZ;while(z&&z.z>=E&&B&&B.z<=k){if(z.x>=F&&z.x<=A&&z.y>=R&&z.y<=O&&z!==$&&z!==Y&&y7(X,N,H,q,U,G,z.x,z.y)&&wJ(z.prev,z,z.next)>=0)return!1;if(z=z.prevZ,B.x>=F&&B.x<=A&&B.y>=R&&B.y<=O&&B!==$&&B!==Y&&y7(X,N,H,q,U,G,B.x,B.y)&&wJ(B.prev,B,B.next)>=0)return!1;B=B.nextZ}while(z&&z.z>=E){if(z.x>=F&&z.x<=A&&z.y>=R&&z.y<=O&&z!==$&&z!==Y&&y7(X,N,H,q,U,G,z.x,z.y)&&wJ(z.prev,z,z.next)>=0)return!1;z=z.prevZ}while(B&&B.z<=k){if(B.x>=F&&B.x<=A&&B.y>=R&&B.y<=O&&B!==$&&B!==Y&&y7(X,N,H,q,U,G,B.x,B.y)&&wJ(B.prev,B,B.next)>=0)return!1;B=B.nextZ}return!0}function SH(J,Q){let Z=J;do{let K=Z.prev,$=Z.next.next;if(!q7(K,$)&&DY(K,Z,Z.next,$)&&l7(K,$)&&l7($,K))Q.push(K.i,Z.i,$.i),m7(Z),m7(Z.next),Z=J=$;Z=Z.next}while(Z!==J);return _8(Z)}function jH(J,Q,Z,K,$,W){let Y=J;do{let X=Y.next.next;while(X!==Y.prev){if(Y.i!==X.i&&lH(Y,X)){let H=RY(Y,X);Y=_8(Y,Y.next),H=_8(H,H.next),p7(Y,Q,Z,K,$,W,0),p7(H,Q,Z,K,$,W,0);return}X=X.next}Y=Y.next}while(Y!==J)}function vH(J,Q,Z,K){let $=[];for(let W=0,Y=Q.length;W<Y;W++){let X=Q[W]*K,H=W<Y-1?Q[W+1]*K:J.length,U=FY(J,X,H,K,!1);if(U===U.next)U.steiner=!0;$.push(pH(U))}$.sort(yH);for(let W=0;W<$.length;W++)Z=fH($[W],Z);return Z}function yH(J,Q){let Z=J.x-Q.x;if(Z===0){if(Z=J.y-Q.y,Z===0){let K=(J.next.y-J.y)/(J.next.x-J.x),$=(Q.next.y-Q.y)/(Q.next.x-Q.x);Z=K-$}}return Z}function fH(J,Q){let Z=hH(J,Q);if(!Z)return Q;let K=RY(Z,J);return _8(K,K.next),_8(Z,Z.next)}function hH(J,Q){let Z=Q,K=J.x,$=J.y,W=-1/0,Y;if(q7(J,Z))return Z;do{if(q7(J,Z.next))return Z.next;else if($<=Z.y&&$>=Z.next.y&&Z.next.y!==Z.y){let q=Z.x+($-Z.y)*(Z.next.x-Z.x)/(Z.next.y-Z.y);if(q<=K&&q>W){if(W=q,Y=Z.x<Z.next.x?Z:Z.next,q===K)return Y}}Z=Z.next}while(Z!==Q);if(!Y)return null;let X=Y,H=Y.x,U=Y.y,N=1/0;Z=Y;do{if(K>=Z.x&&Z.x>=H&&K!==Z.x&&OY($<U?K:W,$,H,U,$<U?W:K,$,Z.x,Z.y)){let q=Math.abs($-Z.y)/(K-Z.x);if(l7(Z,J)&&(q<N||q===N&&(Z.x>Y.x||Z.x===Y.x&&bH(Y,Z))))Y=Z,N=q}Z=Z.next}while(Z!==X);return Y}function bH(J,Q){return wJ(J.prev,J,Q.prev)<0&&wJ(Q.next,J,J.next)<0}function xH(J,Q,Z,K){let $=J;do{if($.z===0)$.z=OZ($.x,$.y,Q,Z,K);$.prevZ=$.prev,$.nextZ=$.next,$=$.next}while($!==J);$.prevZ.nextZ=null,$.prevZ=null,gH($)}function gH(J){let Q,Z=1;do{let K=J,$;J=null;let W=null;Q=0;while(K){Q++;let Y=K,X=0;for(let U=0;U<Z;U++)if(X++,Y=Y.nextZ,!Y)break;let H=Z;while(X>0||H>0&&Y){if(X!==0&&(H===0||!Y||K.z<=Y.z))$=K,K=K.nextZ,X--;else $=Y,Y=Y.nextZ,H--;if(W)W.nextZ=$;else J=$;$.prevZ=W,W=$}K=Y}W.nextZ=null,Z*=2}while(Q>1);return J}function OZ(J,Q,Z,K,$){return J=(J-Z)*$|0,Q=(Q-K)*$|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function pH(J){let Q=J,Z=J;do{if(Q.x<Z.x||Q.x===Z.x&&Q.y<Z.y)Z=Q;Q=Q.next}while(Q!==J);return Z}function OY(J,Q,Z,K,$,W,Y,X){return($-Y)*(Q-X)>=(J-Y)*(W-X)&&(J-Y)*(K-X)>=(Z-Y)*(Q-X)&&(Z-Y)*(W-X)>=($-Y)*(K-X)}function y7(J,Q,Z,K,$,W,Y,X){return!(J===Y&&Q===X)&&OY(J,Q,Z,K,$,W,Y,X)}function lH(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!mH(J,Q)&&(l7(J,Q)&&l7(Q,J)&&dH(J,Q)&&(wJ(J.prev,J,Q.prev)||wJ(J,Q.prev,Q))||q7(J,Q)&&wJ(J.prev,J,J.next)>0&&wJ(Q.prev,Q,Q.next)>0)}function wJ(J,Q,Z){return(Q.y-J.y)*(Z.x-Q.x)-(Q.x-J.x)*(Z.y-Q.y)}function q7(J,Q){return J.x===Q.x&&J.y===Q.y}function DY(J,Q,Z,K){let $=p6(wJ(J,Q,Z)),W=p6(wJ(J,Q,K)),Y=p6(wJ(Z,K,J)),X=p6(wJ(Z,K,Q));if($!==W&&Y!==X)return!0;if($===0&&g6(J,Z,Q))return!0;if(W===0&&g6(J,K,Q))return!0;if(Y===0&&g6(Z,J,K))return!0;if(X===0&&g6(Z,Q,K))return!0;return!1}function g6(J,Q,Z){return Q.x<=Math.max(J.x,Z.x)&&Q.x>=Math.min(J.x,Z.x)&&Q.y<=Math.max(J.y,Z.y)&&Q.y>=Math.min(J.y,Z.y)}function p6(J){return J>0?1:J<0?-1:0}function mH(J,Q){let Z=J;do{if(Z.i!==J.i&&Z.next.i!==J.i&&Z.i!==Q.i&&Z.next.i!==Q.i&&DY(Z,Z.next,J,Q))return!0;Z=Z.next}while(Z!==J);return!1}function l7(J,Q){return wJ(J.prev,J,J.next)<0?wJ(J,Q,J.next)>=0&&wJ(J,J.prev,Q)>=0:wJ(J,Q,J.prev)<0||wJ(J,J.next,Q)<0}function dH(J,Q){let Z=J,K=!1,$=(J.x+Q.x)/2,W=(J.y+Q.y)/2;do{if(Z.y>W!==Z.next.y>W&&Z.next.y!==Z.y&&$<(Z.next.x-Z.x)*(W-Z.y)/(Z.next.y-Z.y)+Z.x)K=!K;Z=Z.next}while(Z!==J);return K}function RY(J,Q){let Z=DZ(J.i,J.x,J.y),K=DZ(Q.i,Q.x,Q.y),$=J.next,W=Q.prev;return J.next=Q,Q.prev=J,Z.next=$,$.prev=Z,K.next=Z,Z.prev=K,W.next=K,K.prev=W,K}function r$(J,Q,Z,K){let $=DZ(J,Q,Z);if(!K)$.prev=$,$.next=$;else $.next=K.next,$.prev=K,K.next.prev=$,K.next=$;return $}function m7(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function DZ(J,Q,Z){return{i:J,x:Q,y:Z,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function uH(J,Q,Z,K){let $=0;for(let W=Q,Y=Z-K;W<Z;W+=K)$+=(J[Y]-J[W])*(J[W+1]+J[Y+1]),Y=W;return $}class MY{static triangulate(J,Q,Z=2){return IH(J,Q,Z)}}class A8{static area(J){let Q=J.length,Z=0;for(let K=Q-1,$=0;$<Q;K=$++)Z+=J[K].x*J[$].y-J[$].x*J[K].y;return Z*0.5}static isClockWise(J){return A8.area(J)<0}static triangulateShape(J,Q){let Z=[],K=[],$=[];t$(J),e$(Z,J);let W=J.length;Q.forEach(t$);for(let X=0;X<Q.length;X++)K.push(W),W+=Q[X].length,e$(Z,Q[X]);let Y=MY.triangulate(Z,K);for(let X=0;X<Y.length;X+=3)$.push(Y.slice(X,X+3));return $}}function t$(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function e$(J,Q){for(let Z=0;Z<Q.length;Z++)J.push(Q[Z].x),J.push(Q[Z].y)}class Q6 extends Q9{constructor(J=new J6([new Z0(0.5,0.5),new Z0(-0.5,0.5),new Z0(-0.5,-0.5),new Z0(0.5,-0.5)]),Q={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:J,options:Q},J=Array.isArray(J)?J:[J];let Z=this,K=[],$=[];for(let Y=0,X=J.length;Y<X;Y++){let H=J[Y];W(H)}this.setAttribute("position",new FJ(K,3)),this.setAttribute("uv",new FJ($,2)),this.computeVertexNormals();function W(Y){let X=[],H=Q.curveSegments!==void 0?Q.curveSegments:12,U=Q.steps!==void 0?Q.steps:1,N=Q.depth!==void 0?Q.depth:1,q=Q.bevelEnabled!==void 0?Q.bevelEnabled:!0,G=Q.bevelThickness!==void 0?Q.bevelThickness:0.2,F=Q.bevelSize!==void 0?Q.bevelSize:G-0.1,R=Q.bevelOffset!==void 0?Q.bevelOffset:0,A=Q.bevelSegments!==void 0?Q.bevelSegments:3,O=Q.extrudePath,E=Q.UVGenerator!==void 0?Q.UVGenerator:cH,k,z=!1,B,C,P,D;if(O){k=O.getSpacedPoints(U),z=!0,q=!1;let e=O.isCatmullRomCurve3?O.closed:!1;B=O.computeFrenetFrames(U,e),C=new v,P=new v,D=new v}if(!q)A=0,G=0,F=0,R=0;let V=Y.extractPoints(H),I=V.shape,f=V.holes;if(!A8.isClockWise(I)){I=I.reverse();for(let e=0,X0=f.length;e<X0;e++){let N0=f[e];if(A8.isClockWise(N0))f[e]=N0.reverse()}}function p(e){let A0=e[0];for(let k0=1;k0<=e.length;k0++){let p0=k0%e.length,y0=e[p0],e0=y0.x-A0.x,JJ=y0.y-A0.y,qJ=e0*e0+JJ*JJ,y=Math.max(Math.abs(y0.x),Math.abs(y0.y),Math.abs(A0.x),Math.abs(A0.y)),bJ=0.000000000000000000010000000000000001*y*y;if(qJ<=bJ){e.splice(p0,1),k0--;continue}A0=y0}}p(I),f.forEach(p);let t=f.length,T=I;for(let e=0;e<t;e++){let X0=f[e];I=I.concat(X0)}function c(e,X0,N0){if(!X0)u0("ExtrudeGeometry: vec does not exist");return e.clone().addScaledVector(X0,N0)}let n=I.length;function x(e,X0,N0){let A0,k0,p0,y0=e.x-X0.x,e0=e.y-X0.y,JJ=N0.x-e.x,qJ=N0.y-e.y,y=y0*y0+e0*e0,bJ=y0*qJ-e0*JJ;if(Math.abs(bJ)>Number.EPSILON){let o0=Math.sqrt(y),vJ=Math.sqrt(JJ*JJ+qJ*qJ),D0=X0.x-e0/o0,DJ=X0.y+y0/o0,m0=N0.x-qJ/vJ,n0=N0.y+JJ/vJ,xJ=((m0-D0)*qJ-(n0-DJ)*JJ)/(y0*qJ-e0*JJ);A0=D0+y0*xJ-e.x,k0=DJ+e0*xJ-e.y;let _=A0*A0+k0*k0;if(_<=2)return new Z0(A0,k0);else p0=Math.sqrt(_/2)}else{let o0=!1;if(y0>Number.EPSILON){if(JJ>Number.EPSILON)o0=!0}else if(y0<-Number.EPSILON){if(JJ<-Number.EPSILON)o0=!0}else if(Math.sign(e0)===Math.sign(qJ))o0=!0;if(o0)A0=-e0,k0=y0,p0=Math.sqrt(y);else A0=y0,k0=e0,p0=Math.sqrt(y/2)}return new Z0(A0/p0,k0/p0)}let Y0=[];for(let e=0,X0=T.length,N0=X0-1,A0=e+1;e<X0;e++,N0++,A0++){if(N0===X0)N0=0;if(A0===X0)A0=0;Y0[e]=x(T[e],T[N0],T[A0])}let d=[],r,K0=Y0.concat();for(let e=0,X0=t;e<X0;e++){let N0=f[e];r=[];for(let A0=0,k0=N0.length,p0=k0-1,y0=A0+1;A0<k0;A0++,p0++,y0++){if(p0===k0)p0=0;if(y0===k0)y0=0;r[A0]=x(N0[A0],N0[p0],N0[y0])}d.push(r),K0=K0.concat(r)}let z0;if(A===0)z0=A8.triangulateShape(T,f);else{let e=[],X0=[];for(let N0=0;N0<A;N0++){let A0=N0/A,k0=G*Math.cos(A0*Math.PI/2),p0=F*Math.sin(A0*Math.PI/2)+R;for(let y0=0,e0=T.length;y0<e0;y0++){let JJ=c(T[y0],Y0[y0],p0);if(L0(JJ.x,JJ.y,-k0),A0===0)e.push(JJ)}for(let y0=0,e0=t;y0<e0;y0++){let JJ=f[y0];r=d[y0];let qJ=[];for(let y=0,bJ=JJ.length;y<bJ;y++){let o0=c(JJ[y],r[y],p0);if(L0(o0.x,o0.y,-k0),A0===0)qJ.push(o0)}if(A0===0)X0.push(qJ)}}z0=A8.triangulateShape(e,X0)}let i=z0.length,$0=F+R;for(let e=0;e<n;e++){let X0=q?c(I[e],K0[e],$0):I[e];if(!z)L0(X0.x,X0.y,0);else P.copy(B.normals[0]).multiplyScalar(X0.x),C.copy(B.binormals[0]).multiplyScalar(X0.y),D.copy(k[0]).add(P).add(C),L0(D.x,D.y,D.z)}for(let e=1;e<=U;e++)for(let X0=0;X0<n;X0++){let N0=q?c(I[X0],K0[X0],$0):I[X0];if(!z)L0(N0.x,N0.y,N/U*e);else P.copy(B.normals[e]).multiplyScalar(N0.x),C.copy(B.binormals[e]).multiplyScalar(N0.y),D.copy(k[e]).add(P).add(C),L0(D.x,D.y,D.z)}for(let e=A-1;e>=0;e--){let X0=e/A,N0=G*Math.cos(X0*Math.PI/2),A0=F*Math.sin(X0*Math.PI/2)+R;for(let k0=0,p0=T.length;k0<p0;k0++){let y0=c(T[k0],Y0[k0],A0);L0(y0.x,y0.y,N+N0)}for(let k0=0,p0=f.length;k0<p0;k0++){let y0=f[k0];r=d[k0];for(let e0=0,JJ=y0.length;e0<JJ;e0++){let qJ=c(y0[e0],r[e0],A0);if(!z)L0(qJ.x,qJ.y,N+N0);else L0(qJ.x,qJ.y+k[U-1].y,k[U-1].x+N0)}}}C0(),h0();function C0(){let e=K.length/3;if(q){let X0=0,N0=n*X0;for(let A0=0;A0<i;A0++){let k0=z0[A0];YJ(k0[2]+N0,k0[1]+N0,k0[0]+N0)}X0=U+A*2,N0=n*X0;for(let A0=0;A0<i;A0++){let k0=z0[A0];YJ(k0[0]+N0,k0[1]+N0,k0[2]+N0)}}else{for(let X0=0;X0<i;X0++){let N0=z0[X0];YJ(N0[2],N0[1],N0[0])}for(let X0=0;X0<i;X0++){let N0=z0[X0];YJ(N0[0]+n*U,N0[1]+n*U,N0[2]+n*U)}}Z.addGroup(e,K.length/3-e,0)}function h0(){let e=K.length/3,X0=0;b0(T,X0),X0+=T.length;for(let N0=0,A0=f.length;N0<A0;N0++){let k0=f[N0];b0(k0,X0),X0+=k0.length}Z.addGroup(e,K.length/3-e,1)}function b0(e,X0){let N0=e.length;while(--N0>=0){let A0=N0,k0=N0-1;if(k0<0)k0=e.length-1;for(let p0=0,y0=U+A*2;p0<y0;p0++){let e0=n*p0,JJ=n*(p0+1),qJ=X0+A0+e0,y=X0+k0+e0,bJ=X0+k0+JJ,o0=X0+A0+JJ;r0(qJ,y,bJ,o0)}}}function L0(e,X0,N0){X.push(e),X.push(X0),X.push(N0)}function YJ(e,X0,N0){d0(e),d0(X0),d0(N0);let A0=K.length/3,k0=E.generateTopUV(Z,K,A0-3,A0-2,A0-1);WJ(k0[0]),WJ(k0[1]),WJ(k0[2])}function r0(e,X0,N0,A0){d0(e),d0(X0),d0(A0),d0(X0),d0(N0),d0(A0);let k0=K.length/3,p0=E.generateSideWallUV(Z,K,k0-6,k0-3,k0-2,k0-1);WJ(p0[0]),WJ(p0[1]),WJ(p0[3]),WJ(p0[1]),WJ(p0[2]),WJ(p0[3])}function d0(e){K.push(X[e*3+0]),K.push(X[e*3+1]),K.push(X[e*3+2])}function WJ(e){$.push(e.x),$.push(e.y)}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes,Z=this.parameters.options;return nH(Q,Z,J)}static fromJSON(J,Q){let Z=[];for(let $=0,W=J.shapes.length;$<W;$++){let Y=Q[J.shapes[$]];Z.push(Y)}let K=J.options.extrudePath;if(K!==void 0)J.options.extrudePath=new FZ[K.type]().fromJSON(K);return new Q6(Z,J.options)}}var cH={generateTopUV:function(J,Q,Z,K,$){let W=Q[Z*3],Y=Q[Z*3+1],X=Q[K*3],H=Q[K*3+1],U=Q[$*3],N=Q[$*3+1];return[new Z0(W,Y),new Z0(X,H),new Z0(U,N)]},generateSideWallUV:function(J,Q,Z,K,$,W){let Y=Q[Z*3],X=Q[Z*3+1],H=Q[Z*3+2],U=Q[K*3],N=Q[K*3+1],q=Q[K*3+2],G=Q[$*3],F=Q[$*3+1],R=Q[$*3+2],A=Q[W*3],O=Q[W*3+1],E=Q[W*3+2];if(Math.abs(X-N)<Math.abs(Y-U))return[new Z0(Y,1-H),new Z0(U,1-q),new Z0(G,1-R),new Z0(A,1-E)];else return[new Z0(X,1-H),new Z0(N,1-q),new Z0(F,1-R),new Z0(O,1-E)]}};function nH(J,Q,Z){if(Z.shapes=[],Array.isArray(J))for(let K=0,$=J.length;K<$;K++){let W=J[K];Z.shapes.push(W.uuid)}else Z.shapes.push(J.uuid);if(Z.options=Object.assign({},Q),Q.extrudePath!==void 0)Z.options.extrudePath=Q.extrudePath.toJSON();return Z}class Z6 extends t7{constructor(J=1,Q=0){let Z=(1+Math.sqrt(5))/2,K=[-1,Z,0,1,Z,0,-1,-Z,0,1,-Z,0,0,-1,Z,0,1,Z,0,-1,-Z,0,1,-Z,Z,0,-1,Z,0,1,-Z,0,-1,-Z,0,1],$=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(K,$,J,Q);this.type="IcosahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new Z6(J.radius,J.detail)}}class y9 extends Q9{constructor(J=1,Q=1,Z=1,K=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:Z,heightSegments:K};let $=J/2,W=Q/2,Y=Math.floor(Z),X=Math.floor(K),H=Y+1,U=X+1,N=J/Y,q=Q/X,G=[],F=[],R=[],A=[];for(let O=0;O<U;O++){let E=O*q-W;for(let k=0;k<H;k++){let z=k*N-$;F.push(z,-E,0),R.push(0,0,1),A.push(k/Y),A.push(1-O/X)}}for(let O=0;O<X;O++)for(let E=0;E<Y;E++){let k=E+H*O,z=E+H*(O+1),B=E+1+H*(O+1),C=E+1+H*O;G.push(k,z,C),G.push(z,B,C)}this.setIndex(G),this.setAttribute("position",new FJ(F,3)),this.setAttribute("normal",new FJ(R,3)),this.setAttribute("uv",new FJ(A,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new y9(J.width,J.height,J.widthSegments,J.heightSegments)}}class h8 extends Q9{constructor(J=0.5,Q=1,Z=32,K=1,$=0,W=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:J,outerRadius:Q,thetaSegments:Z,phiSegments:K,thetaStart:$,thetaLength:W},Z=Math.max(3,Z),K=Math.max(1,K);let Y=[],X=[],H=[],U=[],N=J,q=(Q-J)/K,G=new v,F=new Z0;for(let R=0;R<=K;R++){for(let A=0;A<=Z;A++){let O=$+A/Z*W;G.x=N*Math.cos(O),G.y=N*Math.sin(O),X.push(G.x,G.y,G.z),H.push(0,0,1),F.x=(G.x/Q+1)/2,F.y=(G.y/Q+1)/2,U.push(F.x,F.y)}N+=q}for(let R=0;R<K;R++){let A=R*(Z+1);for(let O=0;O<Z;O++){let E=O+A,k=E,z=E+Z+1,B=E+Z+2,C=E+1;Y.push(k,z,C),Y.push(z,B,C)}}this.setIndex(Y),this.setAttribute("position",new FJ(X,3)),this.setAttribute("normal",new FJ(H,3)),this.setAttribute("uv",new FJ(U,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new h8(J.innerRadius,J.outerRadius,J.thetaSegments,J.phiSegments,J.thetaStart,J.thetaLength)}}class MJ extends Q9{constructor(J=1,Q=32,Z=16,K=0,$=Math.PI*2,W=0,Y=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:Z,phiStart:K,phiLength:$,thetaStart:W,thetaLength:Y},Q=Math.max(3,Math.floor(Q)),Z=Math.max(2,Math.floor(Z));let X=Math.min(W+Y,Math.PI),H=0,U=[],N=new v,q=new v,G=[],F=[],R=[],A=[];for(let O=0;O<=Z;O++){let E=[],k=O/Z,z=W+k*Y,B=J*Math.cos(z),C=Math.sqrt(J*J-B*B),P=0;if(O===0&&W===0)P=0.5/Q;else if(O===Z&&X===Math.PI)P=-0.5/Q;for(let D=0;D<=Q;D++){let V=D/Q,I=K+V*$;N.x=-C*Math.cos(I),N.y=B,N.z=C*Math.sin(I),F.push(N.x,N.y,N.z),q.copy(N).normalize(),R.push(q.x,q.y,q.z),A.push(V+P,1-k),E.push(H++)}U.push(E)}for(let O=0;O<Z;O++)for(let E=0;E<Q;E++){let k=U[O][E+1],z=U[O][E],B=U[O+1][E],C=U[O+1][E+1];if(O!==0||W>0)G.push(k,z,C);if(O!==Z-1||X<Math.PI)G.push(z,B,C)}this.setIndex(G),this.setAttribute("position",new FJ(F,3)),this.setAttribute("normal",new FJ(R,3)),this.setAttribute("uv",new FJ(A,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new MJ(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class K6 extends Q9{constructor(J=1,Q=0.4,Z=12,K=48,$=Math.PI*2,W=0,Y=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:Z,tubularSegments:K,arc:$,thetaStart:W,thetaLength:Y},Z=Math.floor(Z),K=Math.floor(K);let X=[],H=[],U=[],N=[],q=new v,G=new v,F=new v;for(let R=0;R<=Z;R++){let A=W+R/Z*Y;for(let O=0;O<=K;O++){let E=O/K*$;G.x=(J+Q*Math.cos(A))*Math.cos(E),G.y=(J+Q*Math.cos(A))*Math.sin(E),G.z=Q*Math.sin(A),H.push(G.x,G.y,G.z),q.x=J*Math.cos(E),q.y=J*Math.sin(E),F.subVectors(G,q).normalize(),U.push(F.x,F.y,F.z),N.push(O/K),N.push(R/Z)}}for(let R=1;R<=Z;R++)for(let A=1;A<=K;A++){let O=(K+1)*R+A-1,E=(K+1)*(R-1)+A-1,k=(K+1)*(R-1)+A,z=(K+1)*R+A;X.push(O,E,z),X.push(E,k,z)}this.setIndex(X),this.setAttribute("position",new FJ(H,3)),this.setAttribute("normal",new FJ(U,3)),this.setAttribute("uv",new FJ(N,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new K6(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}function b8(J){let Q={};for(let Z in J){Q[Z]={};for(let K in J[Z]){let $=J[Z][K];if(JW($))if($.isRenderTargetTexture)c0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[Z][K]=null;else Q[Z][K]=$.clone();else if(Array.isArray($))if(JW($[0])){let W=[];for(let Y=0,X=$.length;Y<X;Y++)W[Y]=$[Y].clone();Q[Z][K]=W}else Q[Z][K]=$.slice();else Q[Z][K]=$}}return Q}function Z9(J){let Q={};for(let Z=0;Z<J.length;Z++){let K=b8(J[Z]);for(let $ in K)Q[$]=K[$]}return Q}function JW(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function sH(J){let Q=[];for(let Z=0;Z<J.length;Z++)Q.push(J[Z].clone());return Q}function SK(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return $J.workingColorSpace}var VY={clone:b8,merge:Z9},iH=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oH=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class t9 extends q8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iH,this.fragmentShader=oH,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=b8(J.uniforms),this.uniformsGroups=sH(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let K in this.uniforms){let W=this.uniforms[K].value;if(W&&W.isTexture)Q.uniforms[K]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[K]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[K]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[K]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[K]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[K]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[K]={type:"m4",value:W.toArray()};else Q.uniforms[K]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let Z={};for(let K in this.extensions)if(this.extensions[K]===!0)Z[K]=!0;if(Object.keys(Z).length>0)Q.extensions=Z;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let Z in J.uniforms){let K=J.uniforms[Z];switch(this.uniforms[Z]={},K.type){case"t":this.uniforms[Z].value=Q[K.value]||null;break;case"c":this.uniforms[Z].value=new v0().setHex(K.value);break;case"v2":this.uniforms[Z].value=new Z0().fromArray(K.value);break;case"v3":this.uniforms[Z].value=new v().fromArray(K.value);break;case"v4":this.uniforms[Z].value=new SJ().fromArray(K.value);break;case"m3":this.uniforms[Z].value=new s0().fromArray(K.value);break;case"m4":this.uniforms[Z].value=new HJ().fromArray(K.value);break;default:this.uniforms[Z].value=K.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let Z in J.extensions)this.extensions[Z]=J.extensions[Z];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class jK extends t9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class IJ extends q8{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new v0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new v0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Z0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new n9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class vK extends q8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class yK extends q8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function W7(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function l6(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}class x8{constructor(J,Q,Z,K){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=K!==void 0?K:new Q.constructor(Z),this.sampleValues=Q,this.valueSize=Z,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,Z=this._cachedIndex,K=Q[Z],$=Q[Z-1];Z:{J:{let W;Q:{K:if(!(J<K)){for(let Y=Z+2;;){if(K===void 0){if(J<$)break K;return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}if(Z===Y)break;if($=K,K=Q[++Z],J<K)break J}W=Q.length;break Q}if(!(J>=$)){let Y=Q[1];if(J<Y)Z=2,$=Y;for(let X=Z-2;;){if($===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===X)break;if(K=$,$=Q[--Z-1],J>=$)break J}W=Z,Z=0;break Q}break Z}while(Z<W){let Y=Z+W>>>1;if(J<Q[Y])W=Y;else Z=Y+1}if(K=Q[Z],$=Q[Z-1],$===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(K===void 0)return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}this._cachedIndex=Z,this.intervalChanged_(Z,$,K)}return this.interpolate_(Z,$,J,K)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,Z=this.sampleValues,K=this.valueSize,$=J*K;for(let W=0;W!==K;++W)Q[W]=Z[$+W];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class fK extends x8{constructor(J,Q,Z,K){super(J,Q,Z,K);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,Z){let K=this.parameterPositions,$=J-2,W=J+1,Y=K[$],X=K[W];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:$=J,Y=2*Q-Z;break;case 2402:$=K.length-2,Y=Q+K[$]-K[$+1];break;default:$=J,Y=Z}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,X=2*Z-Q;break;case 2402:W=1,X=Z+K[1]-K[0];break;default:W=J-1,X=Q}let H=(Z-Q)*0.5,U=this.valueSize;this._weightPrev=H/(Q-Y),this._weightNext=H/(X-Z),this._offsetPrev=$*U,this._offsetNext=W*U}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=this._offsetPrev,N=this._offsetNext,q=this._weightPrev,G=this._weightNext,F=(Z-Q)/(K-Q),R=F*F,A=R*F,O=-q*A+2*q*R-q*F,E=(1+q)*A+(-1.5-2*q)*R+(-0.5+q)*F+1,k=(-1-G)*A+(1.5+G)*R+0.5*F,z=G*A-G*R;for(let B=0;B!==Y;++B)$[B]=O*W[U+B]+E*W[H+B]+k*W[X+B]+z*W[N+B];return $}}class hK extends x8{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=(Z-Q)/(K-Q),N=1-U;for(let q=0;q!==Y;++q)$[q]=W[H+q]*N+W[X+q]*U;return $}}class bK extends x8{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J){return this.copySampleValue_(J-1)}}class xK extends x8{interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=this.inTangents,N=this.outTangents;if(!U||!N){let F=(Z-Q)/(K-Q),R=1-F;for(let A=0;A!==Y;++A)$[A]=W[H+A]*R+W[X+A]*F;return $}let q=Y*2,G=J-1;for(let F=0;F!==Y;++F){let R=W[H+F],A=W[X+F],O=G*q+F*2,E=N[O],k=N[O+1],z=J*q+F*2,B=U[z],C=U[z+1],P=rH(Z,Q,E,B,K);$[F]=BY(P,R,k,C,A)}return $}}function BY(J,Q,Z,K,$){let W=1-J;return W*W*W*Q+3*W*W*J*Z+3*W*J*J*K+J*J*J*$}function aH(J,Q,Z,K,$){let W=1-J;return 3*W*W*(Z-Q)+6*W*J*(K-Z)+3*J*J*($-K)}function rH(J,Q,Z,K,$){let W=(J-Q)/($-Q);for(let Y=0;Y<8;Y++){let X=BY(W,Q,Z,K,$)-J;if(Math.abs(X)<0.0000000001)break;let H=aH(W,Q,Z,K,$);if(Math.abs(H)<0.0000000001)break;W=Math.max(0,Math.min(1,W-X/H))}return W}class L9{constructor(J,Q,Z,K){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=W7(Q,this.TimeBufferType),this.values=W7(Z,this.ValueBufferType),this.setInterpolation(K||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,Z;if(Q.toJSON!==this.toJSON)Z=Q.toJSON(J);else{Z={name:J.name,times:W7(J.times,Array),values:W7(J.values,Array)};let K=J.getInterpolation();if(K!==J.DefaultInterpolation)Z.interpolation=K;if(l6(J.settings))Z.settings={inTangents:W7(J.settings.inTangents,Array),outTangents:W7(J.settings.outTangents,Array)}}return Z.type=J.ValueTypeName,Z}InterpolantFactoryMethodDiscrete(J){return new bK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new hK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new fK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new xK(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let Z="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Z);return c0("KeyframeTrack:",Z),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]+=J;if(l6(this.settings))QW(this.settings.inTangents,J),QW(this.settings.outTangents,J)}return this}scale(J){if(J!==1){let Q=this.times;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]*=J;if(l6(this.settings))ZW(this.settings.inTangents,J),ZW(this.settings.outTangents,J)}return this}trim(J,Q){let Z=this.times,K=Z.length,$=0,W=K-1;while($!==K&&Z[$]<J)++$;while(W!==-1&&Z[W]>Q)--W;if(++W,$!==0||W!==K){if($>=W)W=Math.max(W,1),$=W-1;let Y=this.getValueSize();this.times=Z.slice($,W),this.values=this.values.slice($*Y,W*Y)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)u0("KeyframeTrack: Invalid value size in track.",this),J=!1;let Z=this.times,K=this.values,$=Z.length;if($===0)u0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let Y=0;Y!==$;Y++){let X=Z[Y];if(typeof X==="number"&&isNaN(X)){u0("KeyframeTrack: Time is not a valid number.",this,Y,X),J=!1;break}if(W!==null&&W>X){u0("KeyframeTrack: Out of order keys.",this,Y,X,W),J=!1;break}W=X}if(K!==void 0){if(JH(K))for(let Y=0,X=K.length;Y!==X;++Y){let H=K[Y];if(isNaN(H)){u0("KeyframeTrack: Value is not a valid number.",this,Y,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),Z=this.getValueSize(),K=this.getInterpolation()===2302,$=J.length-1,W=1;for(let Y=1;Y<$;++Y){let X=!1,H=J[Y],U=J[Y+1];if(H!==U&&(Y!==1||H!==J[0]))if(!K){let N=Y*Z,q=N-Z,G=N+Z;for(let F=0;F!==Z;++F){let R=Q[N+F];if(R!==Q[q+F]||R!==Q[G+F]){X=!0;break}}}else X=!0;if(X){if(Y!==W){J[W]=J[Y];let N=Y*Z,q=W*Z;for(let G=0;G!==Z;++G)Q[q+G]=Q[N+G]}++W}}if($>0){J[W]=J[$];for(let Y=$*Z,X=W*Z,H=0;H!==Z;++H)Q[X+H]=Q[Y+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*Z);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),K=new this.constructor(this.name,J,Q);if(K.createInterpolant=this.createInterpolant,l6(this.settings))K.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return K}}function QW(J,Q){for(let Z=0,K=J.length;Z!==K;Z+=2)J[Z]+=Q}function ZW(J,Q){for(let Z=0,K=J.length;Z!==K;Z+=2)J[Z]*=Q}L9.prototype.ValueTypeName="";L9.prototype.TimeBufferType=Float32Array;L9.prototype.ValueBufferType=Float32Array;L9.prototype.DefaultInterpolation=2301;class g8 extends L9{constructor(J,Q,Z){super(J,Q,Z)}}g8.prototype.ValueTypeName="bool";g8.prototype.ValueBufferType=Array;g8.prototype.DefaultInterpolation=2300;g8.prototype.InterpolantFactoryMethodLinear=void 0;g8.prototype.InterpolantFactoryMethodSmooth=void 0;class gK extends L9{constructor(J,Q,Z,K){super(J,Q,Z,K)}}gK.prototype.ValueTypeName="color";class pK extends L9{constructor(J,Q,Z,K){super(J,Q,Z,K)}}pK.prototype.ValueTypeName="number";class lK extends x8{constructor(J,Q,Z,K){super(J,Q,Z,K)}interpolate_(J,Q,Z,K){let $=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=(Z-Q)/(K-Q),H=J*Y;for(let U=H+Y;H!==U;H+=4)a9.slerpFlat($,0,W,H-Y,W,H,X);return $}}class LQ extends L9{constructor(J,Q,Z,K){super(J,Q,Z,K)}InterpolantFactoryMethodLinear(J){return new lK(this.times,this.values,this.getValueSize(),J)}}LQ.prototype.ValueTypeName="quaternion";LQ.prototype.InterpolantFactoryMethodSmooth=void 0;class p8 extends L9{constructor(J,Q,Z){super(J,Q,Z)}}p8.prototype.ValueTypeName="string";p8.prototype.ValueBufferType=Array;p8.prototype.DefaultInterpolation=2300;p8.prototype.InterpolantFactoryMethodLinear=void 0;p8.prototype.InterpolantFactoryMethodSmooth=void 0;class mK extends L9{constructor(J,Q,Z,K){super(J,Q,Z,K)}}mK.prototype.ValueTypeName="vector";var u6={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(KW(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(KW(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function KW(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class dK{constructor(J,Q,Z){let K=this,$=!1,W=0,Y=0,X=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=Z,this._abortController=null,this.itemStart=function(U){if(Y++,$===!1){if(K.onStart!==void 0)K.onStart(U,W,Y)}$=!0},this.itemEnd=function(U){if(W++,K.onProgress!==void 0)K.onProgress(U,W,Y);if(W===Y){if($=!1,K.onLoad!==void 0)K.onLoad()}},this.itemError=function(U){if(K.onError!==void 0)K.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),X)return X(U);return U},this.setURLModifier=function(U){return X=U,this},this.addHandler=function(U,N){return H.push(U,N),this},this.removeHandler=function(U){let N=H.indexOf(U);if(N!==-1)H.splice(N,2);return this},this.getHandler=function(U){for(let N=0,q=H.length;N<q;N+=2){let G=H[N],F=H[N+1];if(G.global)G.lastIndex=0;if(G.test(U))return F}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var LY=new dK;class $6{constructor(J){if(this.manager=J!==void 0?J:LY,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let Z=this;return new Promise(function(K,$){Z.load(J,K,Q,$)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}setPriority(J){return this.priority=J,this}setCache(J){return this.cache=J,this}abort(){return this}}$6.DEFAULT_MATERIAL_NAME="__DEFAULT";var Y7=new WeakMap;class uK extends $6{constructor(J){super(J)}load(J,Q,Z,K){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let $=this,W=u6.get(`image:${J}`);if(W!==void 0){if(W.complete===!0)$.manager.itemStart(J),setTimeout(function(){if(Q)Q(W);$.manager.itemEnd(J)},0);else{let N=Y7.get(W);if(N===void 0)N=[],Y7.set(W,N);N.push({onLoad:Q,onError:K})}return W}let Y=N7("img");function X(){if(U(),Q)Q(this);let N=Y7.get(this)||[];for(let q=0;q<N.length;q++){let G=N[q];if(G.onLoad)G.onLoad(this)}Y7.delete(this),$.manager.itemEnd(J)}function H(N){if(U(),K)K(N);u6.remove(`image:${J}`);let q=Y7.get(this)||[];for(let G=0;G<q.length;G++){let F=q[G];if(F.onError)F.onError(N)}Y7.delete(this),$.manager.itemError(J),$.manager.itemEnd(J)}function U(){Y.removeEventListener("load",X,!1),Y.removeEventListener("error",H,!1)}if(Y.addEventListener("load",X,!1),Y.addEventListener("error",H,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)Y.crossOrigin=this.crossOrigin}return u6.add(`image:${J}`,Y),$.manager.itemStart(J),Y.fetchPriority=this.priority,Y.src=J,Y}}class kQ extends $6{constructor(J){super(J)}load(J,Q,Z,K){let $=new cJ,W=new uK(this.manager);return W.setPriority(this.priority),W.setCache(this.cache),W.setCrossOrigin(this.crossOrigin),W.setPath(this.path),W.load(J,function(Y){if($.image=Y,$.needsUpdate=!0,Q!==void 0)Q($)},Z,K),$}}class W6 extends gJ{static registerNode(J){this.prototype._lightNode=J}constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new v0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class zQ extends W6{constructor(J,Q,Z){super(J,Z);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new v0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var EZ=new HJ,$W=new v,WW=new v;class cK{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new HJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new C8,this._frameExtents=new Z0(1,1),this._viewportCount=1,this._viewports=[new SJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;$W.setFromMatrixPosition(J.matrixWorld),Q.position.copy($W),WW.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(WW),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,Z,K){EZ.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Z.setFromProjectionMatrix(EZ,J.coordinateSystem,J.reversedDepth);let $=this._frameExtents,W=K?K.z/$.x:1,Y=K?K.w/$.y:1,X=K?K.x/$.x:0,H=K?K.y/$.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*W,0,0,0.5*W+X,0,0.5*Y,0,0.5*Y+H,0,0,1,0,0,0,0,1);else Q.set(0.5*W,0,0,0.5*W+X,0,0.5*Y,0,0.5*Y+H,0,0,0.5,0.5,0,0,0,1);Q.multiply(EZ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.mapType=J.mapType,this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.mapType=this.mapType,J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var m6=new v,d6=new a9,w9=new v;class AQ extends gJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new HJ,this.projectionMatrix=new HJ,this.projectionMatrixInverse=new HJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(m6,d6,w9),w9.x===1&&w9.y===1&&w9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(m6,d6,w9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,Z=!1){if(super.updateWorldMatrix(J,Q,Z),this.matrixWorld.decompose(m6,d6,w9),w9.x===1&&w9.y===1&&w9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(m6,d6,w9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var Y8=new v,YW=new Z0,XW=new Z0;class D9 extends AQ{constructor(J=50,Q=1,Z=0.1,K=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Z,this.far=K,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=c6*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(mQ*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return c6*2*Math.atan(Math.tan(mQ*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,Z){Y8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(Y8.x,Y8.y).multiplyScalar(-J/Y8.z),Y8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(Y8.x,Y8.y).multiplyScalar(-J/Y8.z)}getViewSize(J,Q){return this.getViewBounds(J,YW,XW),Q.subVectors(XW,YW)}setViewOffset(J,Q,Z,K,$,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=K,this.view.width=$,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(mQ*0.5*this.fov)/this.zoom,Z=2*Q,K=this.aspect*Z,$=-0.5*K,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:H}=W;$+=W.offsetX*K/X,Q-=W.offsetY*Z/H,K*=W.width/X,Z*=W.height/H}let Y=this.filmOffset;if(Y!==0)$+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective($,$+K,Q,Q-Z,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class V7 extends AQ{constructor(J=-1,Q=1,Z=1,K=-1,$=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=Z,this.bottom=K,this.near=$,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,Z,K,$,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=K,this.view.width=$,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),Z=(this.right+this.left)/2,K=(this.top+this.bottom)/2,$=Z-J,W=Z+J,Y=K+Q,X=K-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;$+=H*this.view.offsetX,W=$+H*this.view.width,Y-=U*this.view.offsetY,X=Y-U*this.view.height}this.projectionMatrix.makeOrthographic($,W,Y,X,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class kY extends cK{constructor(){super(new V7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class CQ extends W6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gJ.DEFAULT_UP),this.updateMatrix(),this.target=new gJ,this.shadow=new kY}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class _Q extends W6{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}var X7=-90,H7=1;class Y6 extends gJ{constructor(J,Q,Z){super();this.type="CubeCamera",this.renderTarget=Z,this.coordinateSystem=null,this.activeMipmapLevel=0;let K=new D9(X7,H7,J,Q);K.layers=this.layers,this.add(K);let $=new D9(X7,H7,J,Q);$.layers=this.layers,this.add($);let W=new D9(X7,H7,J,Q);W.layers=this.layers,this.add(W);let Y=new D9(X7,H7,J,Q);Y.layers=this.layers,this.add(Y);let X=new D9(X7,H7,J,Q);X.layers=this.layers,this.add(X);let H=new D9(X7,H7,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[Z,K,$,W,Y,X]=Q;for(let H of Q)this.remove(H);if(J===2000)Z.up.set(0,1,0),Z.lookAt(1,0,0),K.up.set(0,1,0),K.lookAt(-1,0,0),$.up.set(0,0,-1),$.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)Z.up.set(0,-1,0),Z.lookAt(-1,0,0),K.up.set(0,-1,0),K.lookAt(1,0,0),$.up.set(0,0,1),$.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Z,activeMipmapLevel:K}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[$,W,Y,X,H,U]=this.children,N=J.getRenderTarget(),q=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let R=Z.texture.mipmapsAutoUpdate;Z.texture.mipmapsAutoUpdate=!1;let A=!1;if(J.isWebGLRenderer===!0)A=J.state.buffers.depth.getReversed();else A=J.reversedDepthBuffer;if(J.setRenderTarget(Z,0,K),A&&J.autoClear===!1)J.clearDepth();if(J.render(Q,$),J.setRenderTarget(Z,1,K),A&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget(Z,2,K),A&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget(Z,3,K),A&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget(Z,4,K),A&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),Z.texture.mipmapsAutoUpdate=R,J.setRenderTarget(Z,5,K),A&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(N,q,G),J.xr.enabled=F,Z.texture.needsPMREMUpdate=!0}}class nK extends D9{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J,this.perCameraFrustumCulled=!1}}var sK="\\[\\]\\.:\\/",tH=new RegExp("["+sK+"]","g"),iK="[^"+sK+"]",eH="[^"+sK.replace("\\.","")+"]",JU=/((?:WC+[\/:])*)/.source.replace("WC",iK),QU=/(WCOD+)?/.source.replace("WCOD",eH),ZU=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iK),KU=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iK),$U=new RegExp("^"+JU+QU+ZU+KU+"$"),WU=["material","materials","bones","map"];class zY{constructor(J,Q,Z){let K=Z||RJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,K)}getValue(J,Q){this.bind();let Z=this._targetGroup.nCachedObjects_,K=this._bindings[Z];if(K!==void 0)K.getValue(J,Q)}setValue(J,Q){let Z=this._bindings;for(let K=this._targetGroup.nCachedObjects_,$=Z.length;K!==$;++K)Z[K].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].unbind()}}class RJ{constructor(J,Q,Z){this.path=Q,this.parsedPath=Z||RJ.parseTrackName(Q),this.node=RJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,Z){if(!(J&&J.isAnimationObjectGroup))return new RJ(J,Q,Z);else return new RJ.Composite(J,Q,Z)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(tH,"")}static parseTrackName(J){let Q=$U.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let Z={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},K=Z.nodeName&&Z.nodeName.lastIndexOf(".");if(K!==void 0&&K!==-1){let $=Z.nodeName.substring(K+1);if(WU.indexOf($)!==-1)Z.nodeName=Z.nodeName.substring(0,K),Z.objectName=$}if(Z.propertyName===null||Z.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return Z}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let Z=J.skeleton.getBoneByName(Q);if(Z!==void 0)return Z}if(J.children){let Z=function($){for(let W=0;W<$.length;W++){let Y=$[W];if(Y.name===Q||Y.uuid===Q)return Y;let X=Z(Y.children);if(X)return X}return null},K=Z(J.children);if(K)return K}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)J[Q++]=Z[K]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let K=0,$=Z.length;K!==$;++K)Z[K]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,Z=Q.objectName,K=Q.propertyName,$=Q.propertyIndex;if(!J)J=RJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){c0("PropertyBinding: No target node found for track: "+this.path+".");return}if(Z){let H=Q.objectIndex;switch(Z){case"materials":if(!J.material){u0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){u0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){u0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){u0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){u0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Z]===void 0){u0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Z]}if(H!==void 0){if(J[H]===void 0){u0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[K];if(W===void 0){let H=Q.nodeName;u0("PropertyBinding: Trying to update property for track: "+H+"."+K+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if($!==void 0){if(K==="morphTargetInfluences"){if(!J.geometry){u0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){u0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[$]!==void 0)$=J.morphTargetDictionary[$]}X=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=$}else if(W.fromArray!==void 0&&W.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))X=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=K;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}RJ.Composite=zY;RJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};RJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};RJ.prototype.GetterByBindingType=[RJ.prototype._getValue_direct,RJ.prototype._getValue_array,RJ.prototype._getValue_arrayElement,RJ.prototype._getValue_toArray];RJ.prototype.SetterByBindingTypeAndVersioning=[[RJ.prototype._setValue_direct,RJ.prototype._setValue_direct_setNeedsUpdate,RJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[RJ.prototype._setValue_array,RJ.prototype._setValue_array_setNeedsUpdate,RJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[RJ.prototype._setValue_arrayElement,RJ.prototype._setValue_arrayElement_setNeedsUpdate,RJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[RJ.prototype._setValue_fromArray,RJ.prototype._setValue_fromArray_setNeedsUpdate,RJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var GE=new Float32Array(1);var HW=new HJ;class PQ{constructor(J,Q,Z=0,K=1/0){this.ray=new NQ(J,Q),this.near=Z,this.far=K,this.camera=null,this.layers=new o7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,Q.projectionMatrix.elements[14]).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else u0("Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return HW.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(HW),this}intersectObject(J,Q=!0,Z=[]){return RZ(J,this,Z,Q),Z.sort(UW),Z}intersectObjects(J,Q=!0,Z=[]){for(let K=0,$=J.length;K<$;K++)RZ(J[K],this,Z,Q);return Z.sort(UW),Z}}function UW(J,Q){return J.distance-Q.distance}function RZ(J,Q,Z,K){let $=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,Z)===!1)$=!1}if($===!0&&K===!0){let W=J.children;for(let Y=0,X=W.length;Y<X;Y++)RZ(W[Y],Q,Z,!0)}}class AY{static{this.prototype.isMatrix2=!0}constructor(J,Q,Z,K){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,Z,K)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let Z=0;Z<4;Z++)this.elements[Z]=J[Z+Q];return this}set(J,Q,Z,K){let $=this.elements;return $[0]=J,$[2]=Q,$[1]=Z,$[3]=K,this}}function oK(J,Q,Z,K){let $=YU(K);switch(Z){case 1021:return J*Q;case 1028:return J*Q/$.components*$.byteLength;case 1029:return J*Q/$.components*$.byteLength;case 1030:return J*Q*2/$.components*$.byteLength;case 1031:return J*Q*2/$.components*$.byteLength;case 1022:return J*Q*3/$.components*$.byteLength;case 1023:return J*Q*4/$.components*$.byteLength;case 1033:return J*Q*4/$.components*$.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${Z} format.`)}function YU(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)c0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function nY(){let J=null,Q=!1,Z=null,K=null;function $(W,Y){K=J.requestAnimationFrame($),Z(W,Y)}return{start:function(){if(Q===!0)return;if(Z===null)return;if(J===null)return;K=J.requestAnimationFrame($),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(K);Q=!1},setAnimationLoop:function(W){Z=W},setContext:function(W){J=W}}}function XU(J){let Q=new WeakMap;function Z(X,H){let{array:U,usage:N}=X,q=U.byteLength,G=J.createBuffer();J.bindBuffer(H,G),J.bufferData(H,U,N),X.onUploadCallback();let F;if(U instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)F=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(X.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)F=J.SHORT;else if(U instanceof Uint32Array)F=J.UNSIGNED_INT;else if(U instanceof Int32Array)F=J.INT;else if(U instanceof Int8Array)F=J.BYTE;else if(U instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:F,bytesPerElement:U.BYTES_PER_ELEMENT,version:X.version,size:q}}function K(X,H,U){let{array:N,updateRanges:q}=H;if(J.bindBuffer(U,X),q.length===0)J.bufferSubData(U,0,N);else{q.sort((F,R)=>F.start-R.start);let G=0;for(let F=1;F<q.length;F++){let R=q[G],A=q[F];if(A.start<=R.start+R.count+1)R.count=Math.max(R.count,A.start+A.count-R.start);else++G,q[G]=A}q.length=G+1;for(let F=0,R=q.length;F<R;F++){let A=q[F];J.bufferSubData(U,A.start*N.BYTES_PER_ELEMENT,N,A.start,A.count)}H.clearUpdateRanges()}H.onUploadCallback()}function $(X){if(X.isInterleavedBufferAttribute)X=X.data;return Q.get(X)}function W(X){if(X.isInterleavedBufferAttribute)X=X.data;let H=Q.get(X);if(H)J.deleteBuffer(H.buffer),Q.delete(X)}function Y(X,H){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let N=Q.get(X);if(!N||N.version<X.version)Q.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let U=Q.get(X);if(U===void 0)Q.set(X,Z(X,H));else if(U.version<X.version){if(U.size!==X.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");K(U.buffer,X,H),U.version=X.version}}return{get:$,remove:W,update:Y}}var HU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UU=`#ifdef USE_ALPHAHASH
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
#endif`,NU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FU=`#ifdef USE_AOMAP
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
#endif`,OU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DU=`#ifdef USE_BATCHING
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
#endif`,RU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BU=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LU=`#ifdef USE_IRIDESCENCE
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
#endif`,kU=`#ifdef USE_BUMPMAP
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
#endif`,zU=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_U=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,IU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,TU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wU=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,SU=`#define PI 3.141592653589793
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
} // validated`,jU=`vec3 transformedNormal = objectNormal;
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
#endif`,vU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bU="gl_FragColor = linearToOutputTexel( gl_FragColor );",xU=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gU=`#ifdef USE_ENVMAP
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
#endif`,pU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,lU=`#ifdef USE_ENVMAP
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
#endif`,mU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dU=`#ifdef USE_ENVMAP
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
#endif`,uU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iU=`#ifdef USE_GRADIENTMAP
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
}`,oU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tU=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,eU=`#ifdef USE_ENVMAP
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
#endif`,J5=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z5=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$5=`PhysicalMaterial material;
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
}`,Y5=`
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
#endif`,X5=`#if defined( RE_IndirectDiffuse )
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
#endif`,H5=`#if defined( RE_IndirectDiffuse )
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
#endif`,N5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q5=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E5=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F5=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O5=`#ifdef USE_MAP
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
#endif`,R5=`#if defined( USE_POINTS_UV )
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
#endif`,M5=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V5=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B5=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L5=`#if defined( USE_MORPHCOLORS )
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
#endif`,z5=`#ifdef USE_MORPHTARGETS
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
#endif`,A5=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C5=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_5=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,P5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T5=`#ifndef FLAT_SHADED
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
#endif`,S5=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j5=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v5=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y5=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f5=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h5=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,x5=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g5=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p5=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l5=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m5=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u5=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c5=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n5=`float getShadowMask() {
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
}`,s5=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i5=`#ifdef USE_SKINNING
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
#endif`,o5=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a5=`#ifdef USE_SKINNING
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
#endif`,r5=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t5=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JN=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QN=`#ifdef USE_TRANSMISSION
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
#endif`,ZN=`#ifdef USE_TRANSMISSION
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
#endif`,KN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$N=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,XN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HN=`uniform sampler2D t2D;
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
}`,UN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NN=`uniform float backgroundBlurriness;
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
}`,GN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EN=`#include <common>
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
}`,FN=`#if DEPTH_PACKING == 3200
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
}`,ON=`#define DISTANCE
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
}`,DN=`#define DISTANCE
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
}`,RN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VN=`uniform float scale;
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
}`,BN=`uniform vec3 diffuse;
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
}`,LN=`#include <common>
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
}`,kN=`uniform vec3 diffuse;
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
}`,zN=`#define LAMBERT
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
}`,AN=`#define LAMBERT
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
}`,CN=`#define MATCAP
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
}`,_N=`#define MATCAP
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
}`,PN=`#define NORMAL
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
}`,IN=`#define NORMAL
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
}`,TN=`#define PHONG
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
}`,wN=`#define PHONG
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
}`,SN=`#define STANDARD
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
}`,jN=`#define STANDARD
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
}`,vN=`#define TOON
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
}`,yN=`#define TOON
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
}`,fN=`uniform float size;
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
}`,hN=`uniform vec3 diffuse;
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
}`,bN=`#include <common>
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
}`,xN=`uniform vec3 color;
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
}`,gN=`uniform float rotation;
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
}`,pN=`uniform vec3 diffuse;
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
}`,t0={alphahash_fragment:HU,alphahash_pars_fragment:UU,alphamap_fragment:NU,alphamap_pars_fragment:GU,alphatest_fragment:qU,alphatest_pars_fragment:EU,aomap_fragment:FU,aomap_pars_fragment:OU,batching_pars_vertex:DU,batching_vertex:RU,begin_vertex:MU,beginnormal_vertex:VU,bsdfs:BU,iridescence_fragment:LU,bumpmap_pars_fragment:kU,clipping_planes_fragment:zU,clipping_planes_pars_fragment:AU,clipping_planes_pars_vertex:CU,clipping_planes_vertex:_U,color_fragment:PU,color_pars_fragment:IU,color_pars_vertex:TU,color_vertex:wU,common:SU,defaultnormal_vertex:jU,displacementmap_pars_vertex:vU,displacementmap_vertex:yU,emissivemap_fragment:fU,emissivemap_pars_fragment:hU,colorspace_fragment:bU,colorspace_pars_fragment:xU,envmap_fragment:gU,envmap_common_pars_fragment:pU,envmap_pars_fragment:lU,envmap_pars_vertex:mU,envmap_physical_pars_fragment:eU,envmap_vertex:dU,fog_vertex:uU,fog_pars_vertex:cU,fog_fragment:nU,fog_pars_fragment:sU,gradientmap_pars_fragment:iU,lightmap_pars_fragment:oU,lights_lambert_fragment:aU,lights_lambert_pars_fragment:rU,lights_pars_begin:tU,lights_toon_fragment:J5,lights_toon_pars_fragment:Q5,lights_phong_fragment:Z5,lights_phong_pars_fragment:K5,lights_physical_fragment:$5,lights_physical_pars_fragment:W5,lights_fragment_begin:Y5,lights_fragment_maps:X5,lights_fragment_end:H5,lightprobes_pars_fragment:U5,logdepthbuf_fragment:N5,logdepthbuf_pars_fragment:G5,logdepthbuf_pars_vertex:q5,logdepthbuf_vertex:E5,map_fragment:F5,map_pars_fragment:O5,map_particle_fragment:D5,map_particle_pars_fragment:R5,metalnessmap_fragment:M5,metalnessmap_pars_fragment:V5,morphinstance_vertex:B5,morphcolor_vertex:L5,morphnormal_vertex:k5,morphtarget_pars_vertex:z5,morphtarget_vertex:A5,normal_fragment_begin:C5,normal_fragment_maps:_5,normal_pars_fragment:P5,normal_pars_vertex:I5,normal_vertex:T5,normalmap_pars_fragment:w5,clearcoat_normal_fragment_begin:S5,clearcoat_normal_fragment_maps:j5,clearcoat_pars_fragment:v5,iridescence_pars_fragment:y5,opaque_fragment:f5,packing:h5,premultiplied_alpha_fragment:b5,project_vertex:x5,dithering_fragment:g5,dithering_pars_fragment:p5,roughnessmap_fragment:l5,roughnessmap_pars_fragment:m5,shadowmap_pars_fragment:d5,shadowmap_pars_vertex:u5,shadowmap_vertex:c5,shadowmask_pars_fragment:n5,skinbase_vertex:s5,skinning_pars_vertex:i5,skinning_vertex:o5,skinnormal_vertex:a5,specularmap_fragment:r5,specularmap_pars_fragment:t5,tonemapping_fragment:e5,tonemapping_pars_fragment:JN,transmission_fragment:QN,transmission_pars_fragment:ZN,uv_pars_fragment:KN,uv_pars_vertex:$N,uv_vertex:WN,worldpos_vertex:YN,background_vert:XN,background_frag:HN,backgroundCube_vert:UN,backgroundCube_frag:NN,cube_vert:GN,cube_frag:qN,depth_vert:EN,depth_frag:FN,distance_vert:ON,distance_frag:DN,equirect_vert:RN,equirect_frag:MN,linedashed_vert:VN,linedashed_frag:BN,meshbasic_vert:LN,meshbasic_frag:kN,meshlambert_vert:zN,meshlambert_frag:AN,meshmatcap_vert:CN,meshmatcap_frag:_N,meshnormal_vert:PN,meshnormal_frag:IN,meshphong_vert:TN,meshphong_frag:wN,meshphysical_vert:SN,meshphysical_frag:jN,meshtoon_vert:vN,meshtoon_frag:yN,points_vert:fN,points_frag:hN,shadow_vert:bN,shadow_frag:xN,sprite_vert:gN,sprite_frag:pN},R0={common:{diffuse:{value:new v0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new s0},alphaMap:{value:null},alphaMapTransform:{value:new s0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new s0}},envmap:{envMap:{value:null},envMapRotation:{value:new s0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new s0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new s0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new s0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new s0},normalScale:{value:new Z0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new s0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new s0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new s0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new s0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new v0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new v0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new s0},alphaTest:{value:0},uvTransform:{value:new s0}},sprite:{diffuse:{value:new v0(16777215)},opacity:{value:1},center:{value:new Z0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new s0},alphaMap:{value:null},alphaMapTransform:{value:new s0},alphaTest:{value:0}}},h9={basic:{uniforms:Z9([R0.common,R0.specularmap,R0.envmap,R0.aomap,R0.lightmap,R0.fog]),vertexShader:t0.meshbasic_vert,fragmentShader:t0.meshbasic_frag},lambert:{uniforms:Z9([R0.common,R0.specularmap,R0.envmap,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.fog,R0.lights,{emissive:{value:new v0(0)},envMapIntensity:{value:1}}]),vertexShader:t0.meshlambert_vert,fragmentShader:t0.meshlambert_frag},phong:{uniforms:Z9([R0.common,R0.specularmap,R0.envmap,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.fog,R0.lights,{emissive:{value:new v0(0)},specular:{value:new v0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:t0.meshphong_vert,fragmentShader:t0.meshphong_frag},standard:{uniforms:Z9([R0.common,R0.envmap,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.roughnessmap,R0.metalnessmap,R0.fog,R0.lights,{emissive:{value:new v0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:t0.meshphysical_vert,fragmentShader:t0.meshphysical_frag},toon:{uniforms:Z9([R0.common,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.gradientmap,R0.fog,R0.lights,{emissive:{value:new v0(0)}}]),vertexShader:t0.meshtoon_vert,fragmentShader:t0.meshtoon_frag},matcap:{uniforms:Z9([R0.common,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.fog,{matcap:{value:null}}]),vertexShader:t0.meshmatcap_vert,fragmentShader:t0.meshmatcap_frag},points:{uniforms:Z9([R0.points,R0.fog]),vertexShader:t0.points_vert,fragmentShader:t0.points_frag},dashed:{uniforms:Z9([R0.common,R0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:t0.linedashed_vert,fragmentShader:t0.linedashed_frag},depth:{uniforms:Z9([R0.common,R0.displacementmap]),vertexShader:t0.depth_vert,fragmentShader:t0.depth_frag},normal:{uniforms:Z9([R0.common,R0.bumpmap,R0.normalmap,R0.displacementmap,{opacity:{value:1}}]),vertexShader:t0.meshnormal_vert,fragmentShader:t0.meshnormal_frag},sprite:{uniforms:Z9([R0.sprite,R0.fog]),vertexShader:t0.sprite_vert,fragmentShader:t0.sprite_frag},background:{uniforms:{uvTransform:{value:new s0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:t0.background_vert,fragmentShader:t0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new s0}},vertexShader:t0.backgroundCube_vert,fragmentShader:t0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:t0.cube_vert,fragmentShader:t0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:t0.equirect_vert,fragmentShader:t0.equirect_frag},distance:{uniforms:Z9([R0.common,R0.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:t0.distance_vert,fragmentShader:t0.distance_frag},shadow:{uniforms:Z9([R0.lights,R0.fog,{color:{value:new v0(0)},opacity:{value:1}}]),vertexShader:t0.shadow_vert,fragmentShader:t0.shadow_frag}};h9.physical={uniforms:Z9([h9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new s0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new s0},clearcoatNormalScale:{value:new Z0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new s0},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new s0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new s0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new s0},sheen:{value:0},sheenColor:{value:new v0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new s0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new s0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new s0},transmissionSamplerSize:{value:new Z0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new s0},attenuationDistance:{value:0},attenuationColor:{value:new v0(0)},specularColor:{value:new v0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new s0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new s0},anisotropyVector:{value:new Z0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new s0}}]),vertexShader:t0.meshphysical_vert,fragmentShader:t0.meshphysical_frag};var IQ={r:0,b:0,g:0},lN=new HJ,sY=new s0;sY.set(-1,0,0,0,1,0,0,0,1);function mN(J,Q,Z,K,$,W){let Y=new v0(0),X=$===!0?0:1,H,U,N=null,q=0,G=null;function F(k){let z=k.isScene===!0?k.background:null;if(z&&z.isTexture){let B=k.backgroundBlurriness>0;z=Q.get(z,B)}return z}function R(k){let z=!1,B=F(k);if(B===null)O(Y,X);else if(B&&B.isColor)O(B,1),z=!0;let C=J.xr.getEnvironmentBlendMode();if(C==="additive")Z.buffers.color.setClear(0,0,0,1,W);else if(C==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||z)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function A(k,z){let B=F(z);if(B&&B.isCubeTexture){if(U===void 0)U=new AJ(new Y9(1,1,1),new t9({name:"BackgroundCubeMaterial",uniforms:b8(h9.backgroundCube.uniforms),vertexShader:h9.backgroundCube.vertexShader,fragmentShader:h9.backgroundCube.fragmentShader,side:H9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(C,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),K.update(U);if(U.material.uniforms.envMap.value=B,U.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(lN.makeRotationFromEuler(z.backgroundRotation)).transpose(),B.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(sY);if(U.material.toneMapped=$J.getTransfer(B.colorSpace)!==zJ,N!==B||q!==B.version||G!==J.toneMapping)U.material.needsUpdate=!0,N=B,q=B.version,G=J.toneMapping;U.layers.enableAll(),k.unshift(U,U.geometry,U.material,0,0,null)}else if(B&&B.isTexture){if(H===void 0)H=new AJ(new y9(2,2),new t9({name:"BackgroundMaterial",uniforms:b8(h9.background.uniforms),vertexShader:h9.background.vertexShader,fragmentShader:h9.background.fragmentShader,side:F7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),K.update(H);if(H.material.uniforms.t2D.value=B,H.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,H.material.toneMapped=$J.getTransfer(B.colorSpace)!==zJ,B.matrixAutoUpdate===!0)B.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(B.matrix),N!==B||q!==B.version||G!==J.toneMapping)H.material.needsUpdate=!0,N=B,q=B.version,G=J.toneMapping;H.layers.enableAll(),k.unshift(H,H.geometry,H.material,0,0,null)}}function O(k,z){k.getRGB(IQ,SK(J)),Z.buffers.color.setClear(IQ.r,IQ.g,IQ.b,z,W)}function E(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return Y},setClearColor:function(k,z=1){Y.set(k),X=z,O(Y,X)},getClearAlpha:function(){return X},setClearAlpha:function(k){X=k,O(Y,X)},render:R,addToRenderList:A,dispose:E}}function dN(J,Q){let Z=J.getParameter(J.MAX_VERTEX_ATTRIBS),K={},$=G(null),W=$,Y=!1;function X(S,p,t,T,c){let n=!1,x=q(S,T,t,p);if(W!==x)W=x,U(W.object);if(n=F(S,T,t,c),n)R(S,T,t,c);if(c!==null)Q.update(c,J.ELEMENT_ARRAY_BUFFER);if(n||Y){if(Y=!1,B(S,p,t,T),c!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(c).buffer)}}function H(){return J.createVertexArray()}function U(S){return J.bindVertexArray(S)}function N(S){return J.deleteVertexArray(S)}function q(S,p,t,T){let c=T.wireframe===!0,n=K[p.id];if(n===void 0)n={},K[p.id]=n;let x=S.isInstancedMesh===!0?S.id:0,Y0=n[x];if(Y0===void 0)Y0={},n[x]=Y0;let d=Y0[t.id];if(d===void 0)d={},Y0[t.id]=d;let r=d[c];if(r===void 0)r=G(H()),d[c]=r;return r}function G(S){let p=[],t=[],T=[];for(let c=0;c<Z;c++)p[c]=0,t[c]=0,T[c]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:p,enabledAttributes:t,attributeDivisors:T,object:S,attributes:{},index:null}}function F(S,p,t,T){let c=W.attributes,n=p.attributes,x=0,Y0=t.getAttributes();for(let d in Y0)if(Y0[d].location>=0){let K0=c[d],z0=n[d];if(z0===void 0){if(d==="instanceMatrix"&&S.instanceMatrix)z0=S.instanceMatrix;if(d==="instanceColor"&&S.instanceColor)z0=S.instanceColor}if(K0===void 0)return!0;if(K0.attribute!==z0)return!0;if(z0&&K0.data!==z0.data)return!0;x++}if(W.attributesNum!==x)return!0;if(W.index!==T)return!0;return!1}function R(S,p,t,T){let c={},n=p.attributes,x=0,Y0=t.getAttributes();for(let d in Y0)if(Y0[d].location>=0){let K0=n[d];if(K0===void 0){if(d==="instanceMatrix"&&S.instanceMatrix)K0=S.instanceMatrix;if(d==="instanceColor"&&S.instanceColor)K0=S.instanceColor}let z0={};if(z0.attribute=K0,K0&&K0.data)z0.data=K0.data;c[d]=z0,x++}W.attributes=c,W.attributesNum=x,W.index=T}function A(){let S=W.newAttributes;for(let p=0,t=S.length;p<t;p++)S[p]=0}function O(S){E(S,0)}function E(S,p){let{newAttributes:t,enabledAttributes:T,attributeDivisors:c}=W;if(t[S]=1,T[S]===0)J.enableVertexAttribArray(S),T[S]=1;if(c[S]!==p)J.vertexAttribDivisor(S,p),c[S]=p}function k(){let{newAttributes:S,enabledAttributes:p}=W;for(let t=0,T=p.length;t<T;t++)if(p[t]!==S[t])J.disableVertexAttribArray(t),p[t]=0}function z(S,p,t,T,c,n,x){if(x===!0)J.vertexAttribIPointer(S,p,t,c,n);else J.vertexAttribPointer(S,p,t,T,c,n)}function B(S,p,t,T){A();let c=T.attributes,n=t.getAttributes(),x=p.defaultAttributeValues;for(let Y0 in n){let d=n[Y0];if(d.location>=0){let r=c[Y0];if(r===void 0){if(Y0==="instanceMatrix"&&S.instanceMatrix)r=S.instanceMatrix;if(Y0==="instanceColor"&&S.instanceColor)r=S.instanceColor}if(r!==void 0){let{normalized:K0,itemSize:z0}=r,i=Q.get(r);if(i===void 0)continue;let{buffer:$0,type:C0,bytesPerElement:h0}=i,b0=C0===J.INT||C0===J.UNSIGNED_INT||r.gpuType===wZ;if(r.isInterleavedBufferAttribute){let L0=r.data,YJ=L0.isInterleavedBuffer===!0?L0.stride:L0.itemSize,r0=r.offset;if(L0.isInstancedInterleavedBuffer||L0.isInstancedBufferAttribute){for(let d0=0;d0<d.locationSize;d0++)E(d.location+d0,L0.meshPerAttribute);if(S.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=L0.meshPerAttribute*L0.count}else for(let d0=0;d0<d.locationSize;d0++)O(d.location+d0);J.bindBuffer(J.ARRAY_BUFFER,$0);for(let d0=0;d0<d.locationSize;d0++)z(d.location+d0,z0/d.locationSize,C0,K0,YJ*h0,(r0+z0/d.locationSize*d0)*h0,b0)}else{if(r.isInstancedBufferAttribute){for(let L0=0;L0<d.locationSize;L0++)E(d.location+L0,r.meshPerAttribute);if(S.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=r.meshPerAttribute*r.count}else for(let L0=0;L0<d.locationSize;L0++)O(d.location+L0);J.bindBuffer(J.ARRAY_BUFFER,$0);for(let L0=0;L0<d.locationSize;L0++)z(d.location+L0,z0/d.locationSize,C0,K0,z0*h0,z0/d.locationSize*L0*h0,b0)}}else if(x!==void 0){let K0=x[Y0];if(K0!==void 0)switch(K0.length){case 2:J.vertexAttrib2fv(d.location,K0);break;case 3:J.vertexAttrib3fv(d.location,K0);break;case 4:J.vertexAttrib4fv(d.location,K0);break;default:J.vertexAttrib1fv(d.location,K0)}}}}k()}function C(){I();for(let S in K){let p=K[S];for(let t in p){let T=p[t];for(let c in T){let n=T[c];for(let x in n)N(n[x].object),delete n[x];delete T[c]}}delete K[S]}}function P(S){if(K[S.id]===void 0)return;let p=K[S.id];for(let t in p){let T=p[t];for(let c in T){let n=T[c];for(let x in n)N(n[x].object),delete n[x];delete T[c]}}delete K[S.id]}function D(S){for(let p in K){let t=K[p];for(let T in t){let c=t[T];if(c[S.id]===void 0)continue;let n=c[S.id];for(let x in n)N(n[x].object),delete n[x];delete c[S.id]}}}function V(S){for(let p in K){let t=K[p],T=S.isInstancedMesh===!0?S.id:0,c=t[T];if(c===void 0)continue;for(let n in c){let x=c[n];for(let Y0 in x)N(x[Y0].object),delete x[Y0];delete c[n]}if(delete t[T],Object.keys(t).length===0)delete K[p]}}function I(){if(f(),Y=!0,W===$)return;W=$,U(W.object)}function f(){$.geometry=null,$.program=null,$.wireframe=!1}return{setup:X,reset:I,resetDefaultState:f,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfObject:V,releaseStatesOfProgram:D,initAttributes:A,enableAttribute:O,disableUnusedAttributes:k}}function uN(J,Q,Z){let K;function $(H){K=H}function W(H,U){J.drawArrays(K,H,U),Z.update(U,K,1)}function Y(H,U,N){if(N===0)return;J.drawArraysInstanced(K,H,U,N),Z.update(U,K,N)}function X(H,U,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(K,H,0,U,0,N);let G=0;for(let F=0;F<N;F++)G+=U[F];Z.update(G,K,1)}this.setMode=$,this.render=W,this.renderInstances=Y,this.renderMultiDraw=X}function cN(J,Q,Z,K){let $;function W(){if($!==void 0)return $;if(Q.has("EXT_texture_filter_anisotropic")===!0){let D=Q.get("EXT_texture_filter_anisotropic");$=J.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else $=0;return $}function Y(D){if(D!==i9&&K.convert(D)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(D){let V=D===j9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(D!==P9&&D!==s9&&!V&&K.convert(D)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function H(D){if(D==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";D="mediump"}if(D==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=Z.precision!==void 0?Z.precision:"highp",N=H(U);if(N!==U)c0("WebGLRenderer:",U,"not supported, using",N,"instead."),U=N;let q=Z.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),G=Z.logarithmicDepthBuffer===!0&&q===!1;if(Z.reversedDepthBuffer===!0&&q===!1)c0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(Z.logarithmicDepthBuffer===!0&&q===!0)c0("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),E=J.getParameter(J.MAX_VERTEX_ATTRIBS),k=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),z=J.getParameter(J.MAX_VARYING_VECTORS),B=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),C=J.getParameter(J.MAX_SAMPLES),P=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:Y,textureTypeReadable:X,precision:U,logarithmicDepthBuffer:G,reversedDepthBuffer:q,maxTextures:F,maxVertexTextures:R,maxTextureSize:A,maxCubemapSize:O,maxAttributes:E,maxVertexUniforms:k,maxVaryings:z,maxFragmentUniforms:B,maxSamples:C,samples:P}}function nN(J){let Q=this,Z=null,K=0,$=!1,W=!1,Y=new O9,X=new s0,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(q,G){let F=q.length!==0||G||K!==0||$;return $=G,K=q.length,F},this.beginShadows=function(){W=!0,N(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(q,G){Z=N(q,G,0)},this.setState=function(q,G,F){let{clippingPlanes:R,clipIntersection:A,clipShadows:O}=q,E=J.get(q);if(!$||R===null||R.length===0||W&&!O)if(W)N(null);else U();else{let k=W?0:K,z=k*4,B=E.clippingState||null;H.value=B,B=N(R,G,z,F);for(let C=0;C!==z;++C)B[C]=Z[C];E.clippingState=B,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=k}};function U(){if(H.value!==Z)H.value=Z,H.needsUpdate=K>0;Q.numPlanes=K,Q.numIntersection=0}function N(q,G,F,R){let A=q!==null?q.length:0,O=null;if(A!==0){if(O=H.value,R!==!0||O===null){let E=F+A*4,k=G.matrixWorldInverse;if(X.getNormalMatrix(k),O===null||O.length<E)O=new Float32Array(E);for(let z=0,B=F;z!==A;++z,B+=4)Y.copy(q[z]).applyMatrix4(k,X),Y.normal.toArray(O,B),O[B+3]=Y.constant}H.value=O,H.needsUpdate=!0}return Q.numPlanes=A,Q.numIntersection=0,O}}class SQ extends V9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let Z={width:J,height:J,depth:1},K=[Z,Z,Z,Z,Z,Z];this.texture=new FQ(K),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let Z={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},K=new Y9(5,5,5),$=new t9({name:"CubemapFromEquirect",uniforms:b8(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,side:H9,blending:P8});$.uniforms.tEquirect.value=Q;let W=new AJ(K,$),Y=Q.minFilter;if(Q.minFilter===H8)Q.minFilter=R9;return new Y6(1,10,this).update(J,W),Q.minFilter=Y,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,Z=!0,K=!0){let $=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,Z,K);J.setRenderTarget($)}}var CY=256,sN=3,iN=20,iY=256,oY=16,oN=3,aN=new v,rN=new v0;class wQ{constructor(J){this._renderer=J,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Y6(1,10,null),this._boxMesh=new AJ(new Y9(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(J,Q=0,Z=0.1,K=100,$={}){let{size:W=256,position:Y=aN}=$,X=this._renderer;this._setSize(W);let H=this._allocateTarget(),U=this._getSourceTarget(!0);if(Q>0)U.texture.mipmapsAutoUpdate=!1;let{autoClear:N,autoClearColor:q,autoClearDepth:G,autoClearStencil:F}=X,R=J.background;if(X.autoClear=!0,X.autoClearColor=!0,X.autoClearDepth=!0,X.autoClearStencil=!0,R===null)J.background=X.getClearColor(rN);let A=new Y6(Z,K,U);if(A.position.copy(Y),A.update(X,J),X.autoClear=N,X.autoClearColor=q,X.autoClearDepth=G,X.autoClearStencil=F,J.background=R,Q>0)U.texture.mipmapsAutoUpdate=!0,this._blur(H,Q);return this._applyPMREM(H),H}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=IY(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=PY(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(J,Q){return Q>0?1-Math.sqrt(1-J/Q):0}_setSize(J){this._cubeSize=Math.max(CY,UY(J))}_fromTexture(J,Q){if(J.mapping===c7||J.mapping===D7)this._setSize(J.image.length===0?CY:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);let Z=Q||this._allocateTarget();return this._textureToCubemap(J),this._applyPMREM(Z),Z}_allocateTarget(){let J=this._cubeSize,Q=_Y(J,!1,!1),Z=Math.log2(J)-sN;for(let K=0;K<=Z;K++)Q.texture.mipmaps.push({width:J>>K,height:J>>K});return Q.texture.name="PMREM",Q.texture.isPMREMTexture=!0,Q}_getSourceTarget(J=!1){let Q=this._cubeSize,Z=this._sourceTarget;if(Z===null||Z.width!==Q||J&&Z.depthBuffer===!1){if(Z!==null)Z.dispose();this._sourceTarget=_Y(Q,!0,J)}return this._sourceTarget}_compileMaterial(J){this._boxMesh.material=J,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(J,Q,Z){let K=this._boxMesh,$=this._cubeCamera;K.material=Z,$.renderTarget=J,$.activeMipmapLevel=Q;let W=J.width>>Q;J.viewport.set(0,0,W,W),$.update(this._renderer,K),J.viewport.set(0,0,J.width,J.height)}_textureToCubemap(J){let Q;if(J.mapping===c7||J.mapping===D7){if(this._cubemapMaterial===null)this._cubemapMaterial=IY();Q=this._cubemapMaterial,Q.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=PY();Q=this._equirectMaterial}Q.uniforms.envMap.value=J,this._renderCube(this._getSourceTarget(),0,Q)}_applyPMREM(J){if(this._ggxMaterial===null)this._ggxMaterial=tN(),this._integrationMaterial=eN();let Q=this._cubeSize,Z=J.texture.mipmaps.length-1,K=this._ggxMaterial.uniforms;K.envMap.value=this._sourceTarget.texture;let $=this._integrationMaterial.uniforms;$.envMap.value=this._sourceTarget.texture,$.sourceLod.value=Math.log2(Q/oY);for(let W=0;W<=Z;W++){let Y=wQ.lodToRoughness(W,Z);if(W>Z-oN)$.roughness.value=Y,this._renderCube(J,W,this._integrationMaterial);else{let X=Y>0?Math.log2(Q)+0.5*Math.log2(6/(iY*Math.pow(Y,4)))+0.5:0;K.roughness.value=Y,K.lodBias.value=X,this._renderCube(J,W,this._ggxMaterial)}}}_blur(J,Q){if(this._blurMaterial===null)this._blurMaterial=JG();let Z=this._blurMaterial,K=Z.uniforms,$=this._sourceTarget;K.sigma.value=Math.min(Q,Math.PI)/Math.SQRT2,K.envMap.value=$.texture,this._renderCube(J,0,Z),K.envMap.value=J.texture,this._renderCube($,0,Z)}}function _Y(J,Q,Z){return new SQ(J,{minFilter:H8,generateMipmaps:Q,type:j9,colorSpace:EK,depthBuffer:Z})}function N6(J,Q,Z){return new t9({name:J,uniforms:Q,vertexShader:t0.cube_vert,fragmentShader:Z,side:H9,blending:P8,depthTest:!1,depthWrite:!1})}function tN(){return N6("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${iY}u

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
	`)}function eN(){return N6("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:oY}},`

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
	`)}function JG(){return N6("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${iN}
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
	`)}function PY(){return N6("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function IY(){return N6("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function QG(J){let Q=new WeakMap,Z=new WeakMap,K=null;function $(G,F=!1){if(G===null||G===void 0)return null;if(F)return Y(G);return W(G)}function W(G){if(G&&G.isTexture){let F=G.mapping;if(F===o6||F===a6)if(Q.has(G)){let R=Q.get(G).texture;return X(R,G.mapping)}else{let R=G.image;if(R&&R.height>0){let A=new SQ(R.height);return A.fromEquirectangularTexture(J,G),Q.set(G,A),G.addEventListener("dispose",U),X(A.texture,G.mapping)}else return null}}return G}function Y(G){if(G&&G.isTexture&&G.isPMREMTexture!==!0){let F=G.mapping,R=F===o6||F===a6,A=F===c7||F===D7;if(R||A){let O=Z.get(G),E=O!==void 0?O.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==E){if(K===null)K=new wQ(J);return O=R?K.fromEquirectangular(G,O):K.fromCubemap(G,O),O.texture.pmremVersion=G.pmremVersion,Z.set(G,O),O.texture}else if(O!==void 0)return O.texture;else{let k=G.image;if(R&&k&&k.height>0||A&&k&&H(k)){if(K===null)K=new wQ(J);return O=R?K.fromEquirectangular(G):K.fromCubemap(G),O.texture.pmremVersion=G.pmremVersion,Z.set(G,O),G.addEventListener("dispose",N),O.texture}else return null}}}return G}function X(G,F){if(F===o6)G.mapping=c7;else if(F===a6)G.mapping=D7;return G}function H(G){let F=0,R=6;for(let A=0;A<R;A++)if(G[A]!==void 0)F++;return F===R}function U(G){let F=G.target;F.removeEventListener("dispose",U);let R=Q.get(F);if(R!==void 0)Q.delete(F),R.dispose()}function N(G){let F=G.target;F.removeEventListener("dispose",N);let R=Z.get(F);if(R!==void 0)Z.delete(F),R.dispose()}function q(){if(Q=new WeakMap,Z=new WeakMap,K!==null)K.dispose(),K=null}return{get:$,dispose:q}}function ZG(J){let Q={};function Z(K){if(Q[K]!==void 0)return Q[K];let $=J.getExtension(K);return Q[K]=$,$}return{has:function(K){return Z(K)!==null},init:function(){Z("EXT_color_buffer_float"),Z("WEBGL_clip_cull_distance"),Z("OES_texture_float_linear"),Z("EXT_color_buffer_half_float"),Z("WEBGL_multisampled_render_to_texture"),Z("WEBGL_render_shared_exponent")},get:function(K){let $=Z(K);if($===null)f7("WebGLRenderer: "+K+" extension not supported.");return $}}}function KG(J,Q,Z,K){let $={},W=new WeakMap,Y=new FinalizationRegistry((R)=>delete $[R]);function X(R){H(R.target)}function H(R){if(R.index!==null)Q.remove(R.index);for(let O in R.attributes)Q.remove(R.attributes[O]);R.removeEventListener("dispose",X),delete $[R.id],Y.unregister(R);let A=W.get(R);if(A)Q.remove(A),W.delete(R);if(K.releaseStatesOfGeometry(R),R.isInstancedBufferGeometry===!0)delete R._maxInstanceCount;Z.memory.geometries--}function U(R,A){if($[A.id]!==void 0)return A;return A.addEventListener("dispose",X),$[A.id]=new WeakRef(A),Y.register(A,A.id,A),Z.memory.geometries++,A}function N(R){let A=R.attributes;for(let O in A)Q.update(A[O],J.ARRAY_BUFFER)}function q(R){let A=R.index,O=R.attributes.position,E=0;if(O===void 0)return;let k=A!==null?A.array.length:O.array.length/3-1,B=new(O.count>=65535?UQ:HQ)(Math.ceil(k/3)*6,1),C=B.array;if(A!==null){let D=A.array;E=A.version;for(let V=0,I=0;V<k;V+=3){let f=D[V+0],S=D[V+1],p=D[V+2];C[I++]=f,C[I++]=S,C[I++]=S,C[I++]=p,C[I++]=p,C[I++]=f}}else{E=O.version;for(let D=0,V=0;D<k;D+=3){let I=D+0,f=D+1,S=D+2;C[V++]=I,C[V++]=f,C[V++]=f,C[V++]=S,C[V++]=S,C[V++]=I}}B.version=E;let P=W.get(R);if(P)Q.remove(P);W.set(R,B)}function G(R){let A=W.get(R);if(A){let O=R.index;if(O!==null){if(A.version<O.version)q(R)}}else q(R);return W.get(R)}function F(){for(let R in $){let A=$[R].deref();if(A!==void 0)H(A)}}return{get:U,update:N,getWireframeAttribute:G,dispose:F}}function $G(J,Q,Z){let K;function $(q){K=q}let W,Y;function X(q){W=q.type,Y=q.bytesPerElement}function H(q,G){J.drawElements(K,G,W,q*Y),Z.update(G,K,1)}function U(q,G,F){if(F===0)return;J.drawElementsInstanced(K,G,W,q*Y,F),Z.update(G,K,F)}function N(q,G,F){if(F===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(K,G,0,W,q,0,F);let A=0;for(let O=0;O<F;O++)A+=G[O];Z.update(A,K,1)}this.setMode=$,this.setIndex=X,this.render=H,this.renderInstances=U,this.renderMultiDraw=N}function WG(J){let Q={geometries:0,textures:0},Z={frame:0,calls:0,triangles:0,points:0,lines:0};function K(W,Y,X){switch(Z.calls++,Y){case J.TRIANGLES:Z.triangles+=X*(W/3);break;case J.LINES:Z.lines+=X*(W/2);break;case J.LINE_STRIP:Z.lines+=X*(W-1);break;case J.LINE_LOOP:Z.lines+=X*W;break;case J.POINTS:Z.points+=X*W;break;default:u0("WebGLInfo: Unknown draw mode:",Y);break}}function $(){Z.calls=0,Z.triangles=0,Z.points=0,Z.lines=0}return{memory:Q,render:Z,programs:null,autoReset:!0,reset:$,update:K}}function YG(J,Q,Z){let K=new WeakMap,$=new SJ;function W(Y,X,H){let U=Y.morphTargetInfluences,N=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,q=N!==void 0?N.length:0,G=K.get(X);if(G===void 0||G.count!==q){let I=function(){D.dispose(),K.delete(X),X.removeEventListener("dispose",I)};if(G!==void 0)G.texture.dispose();let F=X.morphAttributes.position!==void 0,R=X.morphAttributes.normal!==void 0,A=X.morphAttributes.color!==void 0,O=X.morphAttributes.position||[],E=X.morphAttributes.normal||[],k=X.morphAttributes.color||[],z=0;if(F===!0)z=1;if(R===!0)z=2;if(A===!0)z=3;let B=X.attributes.position.count*z,C=1;if(B>Q.maxTextureSize)C=Math.ceil(B/Q.maxTextureSize),B=Q.maxTextureSize;let P=new Float32Array(B*C*4*q),D=new YQ(P,B,C,q);D.type=s9,D.needsUpdate=!0;let V=z*4;for(let f=0;f<q;f++){let S=O[f],p=E[f],t=k[f],T=B*C*4*f;for(let c=0;c<S.count;c++){let n=c*V;if(F===!0)$.fromBufferAttribute(S,c),P[T+n+0]=$.x,P[T+n+1]=$.y,P[T+n+2]=$.z,P[T+n+3]=0;if(R===!0)$.fromBufferAttribute(p,c),P[T+n+4]=$.x,P[T+n+5]=$.y,P[T+n+6]=$.z,P[T+n+7]=0;if(A===!0)$.fromBufferAttribute(t,c),P[T+n+8]=$.x,P[T+n+9]=$.y,P[T+n+10]=$.z,P[T+n+11]=t.itemSize===4?$.w:1}}G={count:q,texture:D,size:new Z0(B,C)},K.set(X,G),X.addEventListener("dispose",I)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",Y.morphTexture,Z);else{let F=0;for(let A=0;A<U.length;A++)F+=U[A];let R=X.morphTargetsRelative?1:1-F;H.getUniforms().setValue(J,"morphTargetBaseInfluence",R),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",G.texture,Z),H.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:W}}function XG(J,Q,Z,K,$){let W=new WeakMap;function Y(U){let N=$.render.frame,q=U.geometry,G=Q.get(U,q);if(W.get(G)!==N)Q.update(G),W.set(G,N);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(W.get(U)!==N){if(Z.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)Z.update(U.instanceColor,J.ARRAY_BUFFER);W.set(U,N)}}if(U.isSkinnedMesh){let F=U.skeleton;if(W.get(F)!==N)F.update(),W.set(F,N)}return G}function X(){W=new WeakMap}function H(U){let N=U.target;if(N.removeEventListener("dispose",H),K.releaseStatesOfObject(N),Z.remove(N.instanceMatrix),N.instanceColor!==null)Z.remove(N.instanceColor)}return{update:Y,dispose:X}}var HG={[zZ]:"LINEAR_TONE_MAPPING",[AZ]:"REINHARD_TONE_MAPPING",[CZ]:"CINEON_TONE_MAPPING",[_Z]:"ACES_FILMIC_TONE_MAPPING",[IZ]:"AGX_TONE_MAPPING",[TZ]:"NEUTRAL_TONE_MAPPING",[PZ]:"CUSTOM_TONE_MAPPING"};function UG(J,Q,Z,K,$,W){let Y=new V9(Q,Z,{type:J,depthBuffer:$,stencilBuffer:W,samples:K?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),X=null,H=null,U=null,N=new Q9;N.setAttribute("position",new FJ([-1,3,0,-1,-1,0,3,-1,0],3)),N.setAttribute("uv",new FJ([0,2,0,0,2,0],2));let q=new jK({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),G=new AJ(N,q),F=new V7(-1,1,1,-1,0,1),R=null,A=null,O=!1,E,k=null,z=[],B=!1;this.setSize=function(C,P){if(Y.setSize(C,P),X!==null)X.setSize(C,P);if(H!==null)H.setSize(C,P);for(let D=0;D<z.length;D++){let V=z[D];if(V.setSize)V.setSize(C,P)}},this.setEffects=function(C){z=C,B=z.length>0&&z[0].isRenderPass===!0;let{width:P,height:D}=Y;if(z.length>0&&X===null)X=new V9(P,D,{type:j9,depthBuffer:!1,stencilBuffer:!1}),H=new V9(P,D,{type:j9,depthBuffer:!1,stencilBuffer:!1});let V=$===!0&&z.some((I)=>I.needsDepthTexture===!0);if(V!==(Y.depthTexture!==null)){if(V===!0&&U===null){if(U=new F8(P,D),W===!0)U.format=N8,U.type=I8}Y.dispose(),Y.depthTexture=V?U:null,Y.resolveDepthBuffer=V,Y.storeMultisampledDepthBuffer=V}for(let I=0;I<z.length;I++){let f=z[I];if(f.setSize)f.setSize(P,D);if(V&&f.needsDepthTexture===!0&&f.setDepthTexture)f.setDepthTexture(U)}},this.begin=function(C,P){if(O)return!1;if(C.toneMapping===S9&&z.length===0)return!1;if(k=P,P!==null){let{width:D,height:V}=P;if(Y.width!==D||Y.height!==V)this.setSize(D,V)}if(B===!1)C.setRenderTarget(Y);return E=C.toneMapping,C.toneMapping=S9,!0},this.hasRenderPass=function(){return B},this.end=function(C,P){C.toneMapping=E,O=!0;let D=Y,V=X;for(let I=0;I<z.length;I++){let f=z[I];if(f.enabled===!1)continue;if(f.render(C,V,D,P),f.needsSwap!==!1)D=V,V=V===X?H:X}if(R!==C.outputColorSpace||A!==C.toneMapping){if(R=C.outputColorSpace,A=C.toneMapping,q.defines={},$J.getTransfer(R)===zJ)q.defines.SRGB_TRANSFER="";let I=HG[A];if(I)q.defines[I]="";q.needsUpdate=!0}q.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(k),C.render(G,F),k=null,O=!1},this.isCompositing=function(){return O},this.dispose=function(){if(Y.dispose(),X!==null)X.dispose();if(H!==null)H.dispose();N.dispose(),q.dispose()}}var aY=new cJ,rY=new F8(1,1),tY=new OQ(1),eY=new YQ,JX=new kK,QX=new FQ,TY=[],wY=[],SY=new Float32Array(16),jY=new Float32Array(9),vY=new Float32Array(4);function B7(J,Q,Z){let K=J[0];if(K<=0||K>0)return J;let $=Q*Z,W=TY[$];if(W===void 0)W=new Float32Array($),TY[$]=W;if(Q!==0){K.toArray(W,0);for(let Y=1,X=0;Y!==Q;++Y)X+=Z,J[Y].toArray(W,X)}return W}function pJ(J,Q){if(J.length!==Q.length)return!1;for(let Z=0,K=J.length;Z<K;Z++)if(J[Z]!==Q[Z])return!1;return!0}function lJ(J,Q){for(let Z=0,K=Q.length;Z<K;Z++)J[Z]=Q[Z]}function jQ(J,Q){let Z=wY[Q];if(Z===void 0)Z=new Int32Array(Q),wY[Q]=Z;for(let K=0;K!==Q;++K)Z[K]=J.allocateTextureUnit();return Z}function NG(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1f(this.addr,Q),Z[0]=Q}function GG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(pJ(Z,Q))return;J.uniform2fv(this.addr,Q),lJ(Z,Q)}}function qG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else if(Q.r!==void 0){if(Z[0]!==Q.r||Z[1]!==Q.g||Z[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),Z[0]=Q.r,Z[1]=Q.g,Z[2]=Q.b}else{if(pJ(Z,Q))return;J.uniform3fv(this.addr,Q),lJ(Z,Q)}}function EG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(pJ(Z,Q))return;J.uniform4fv(this.addr,Q),lJ(Z,Q)}}function FG(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(pJ(Z,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),lJ(Z,Q)}else{if(pJ(Z,K))return;vY.set(K),J.uniformMatrix2fv(this.addr,!1,vY),lJ(Z,K)}}function OG(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(pJ(Z,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),lJ(Z,Q)}else{if(pJ(Z,K))return;jY.set(K),J.uniformMatrix3fv(this.addr,!1,jY),lJ(Z,K)}}function DG(J,Q){let Z=this.cache,K=Q.elements;if(K===void 0){if(pJ(Z,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),lJ(Z,Q)}else{if(pJ(Z,K))return;SY.set(K),J.uniformMatrix4fv(this.addr,!1,SY),lJ(Z,K)}}function RG(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1i(this.addr,Q),Z[0]=Q}function MG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(pJ(Z,Q))return;J.uniform2iv(this.addr,Q),lJ(Z,Q)}}function VG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(pJ(Z,Q))return;J.uniform3iv(this.addr,Q),lJ(Z,Q)}}function BG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(pJ(Z,Q))return;J.uniform4iv(this.addr,Q),lJ(Z,Q)}}function LG(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1ui(this.addr,Q),Z[0]=Q}function kG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(pJ(Z,Q))return;J.uniform2uiv(this.addr,Q),lJ(Z,Q)}}function zG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(pJ(Z,Q))return;J.uniform3uiv(this.addr,Q),lJ(Z,Q)}}function AG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(pJ(Z,Q))return;J.uniform4uiv(this.addr,Q),lJ(Z,Q)}}function vQ(J){if(J.version===0)J.compareFunction=RK,J.needsUpdate=!0;return J}function CG(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;let W;if(this.type===J.SAMPLER_2D_SHADOW)W=vQ(rY);else W=aY;Z.setTexture2D(Q||W,$)}function _G(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTexture3D(Q||JX,$)}function PG(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;let W;if(this.type===J.SAMPLER_CUBE_SHADOW)W=vQ(tY);else W=QX;Z.setTextureCube(Q||W,$)}function IG(J,Q,Z){let K=this.cache,$=Z.allocateTextureUnit();if(K[0]!==$)J.uniform1i(this.addr,$),K[0]=$;Z.setTexture2DArray(Q||eY,$)}function TG(J){switch(J){case 5126:return NG;case 35664:return GG;case 35665:return qG;case 35666:return EG;case 35674:return FG;case 35675:return OG;case 35676:return DG;case 5124:case 35670:return RG;case 35667:case 35671:return MG;case 35668:case 35672:return VG;case 35669:case 35673:return BG;case 5125:return LG;case 36294:return kG;case 36295:return zG;case 36296:return AG;case 35678:case 36198:case 36298:case 36306:case 35682:return CG;case 35679:case 36299:case 36307:return _G;case 35680:case 36300:case 36308:case 36293:return PG;case 36289:case 36303:case 36311:case 36292:return IG}}function wG(J,Q){J.uniform1fv(this.addr,Q)}function SG(J,Q){let Z=B7(Q,this.size,2);J.uniform2fv(this.addr,Z)}function jG(J,Q){let Z=B7(Q,this.size,3);J.uniform3fv(this.addr,Z)}function vG(J,Q){let Z=B7(Q,this.size,4);J.uniform4fv(this.addr,Z)}function yG(J,Q){let Z=B7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,Z)}function fG(J,Q){let Z=B7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,Z)}function hG(J,Q){let Z=B7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,Z)}function bG(J,Q){J.uniform1iv(this.addr,Q)}function xG(J,Q){J.uniform2iv(this.addr,Q)}function gG(J,Q){J.uniform3iv(this.addr,Q)}function pG(J,Q){J.uniform4iv(this.addr,Q)}function lG(J,Q){J.uniform1uiv(this.addr,Q)}function mG(J,Q){J.uniform2uiv(this.addr,Q)}function dG(J,Q){J.uniform3uiv(this.addr,Q)}function uG(J,Q){J.uniform4uiv(this.addr,Q)}function cG(J,Q,Z){let K=this.cache,$=Q.length,W=jQ(Z,$);if(!pJ(K,W))J.uniform1iv(this.addr,W),lJ(K,W);let Y;if(this.type===J.SAMPLER_2D_SHADOW)Y=vQ(rY);else Y=aY;for(let X=0;X!==$;++X)Z.setTexture2D(Q[X]||Y,W[X])}function nG(J,Q,Z){let K=this.cache,$=Q.length,W=jQ(Z,$);if(!pJ(K,W))J.uniform1iv(this.addr,W),lJ(K,W);for(let Y=0;Y!==$;++Y)Z.setTexture3D(Q[Y]||JX,W[Y])}function sG(J,Q,Z){let K=this.cache,$=Q.length,W=jQ(Z,$);if(!pJ(K,W))J.uniform1iv(this.addr,W),lJ(K,W);let Y;if(this.type===J.SAMPLER_CUBE_SHADOW)Y=vQ(tY);else Y=QX;for(let X=0;X!==$;++X)Z.setTextureCube(Q[X]||Y,W[X])}function iG(J,Q,Z){let K=this.cache,$=Q.length,W=jQ(Z,$);if(!pJ(K,W))J.uniform1iv(this.addr,W),lJ(K,W);for(let Y=0;Y!==$;++Y)Z.setTexture2DArray(Q[Y]||eY,W[Y])}function oG(J){switch(J){case 5126:return wG;case 35664:return SG;case 35665:return jG;case 35666:return vG;case 35674:return yG;case 35675:return fG;case 35676:return hG;case 5124:case 35670:return bG;case 35667:case 35671:return xG;case 35668:case 35672:return gG;case 35669:case 35673:return pG;case 5125:return lG;case 36294:return mG;case 36295:return dG;case 36296:return uG;case 35678:case 36198:case 36298:case 36306:case 35682:return cG;case 35679:case 36299:case 36307:return nG;case 35680:case 36300:case 36308:case 36293:return sG;case 36289:case 36303:case 36311:case 36292:return iG}}class ZX{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.setValue=TG(Q.type)}}class KX{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=oG(Q.type)}}class $X{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,Z){let K=this.seq;for(let $=0,W=K.length;$!==W;++$){let Y=K[$];Y.setValue(J,Q[Y.id],Z)}}}var aK=/(\w+)(\])?(\[|\.)?/g;function yY(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function aG(J,Q,Z){let K=J.name,$=K.length;aK.lastIndex=0;while(!0){let W=aK.exec(K),Y=aK.lastIndex,X=W[1],H=W[2]==="]",U=W[3];if(H)X=X|0;if(U===void 0||U==="["&&Y+2===$){yY(Z,U===void 0?new ZX(X,J,Q):new KX(X,J,Q));break}else{let q=Z.map[X];if(q===void 0)q=new $X(X),yY(Z,q);Z=q}}}class U6{constructor(J,Q){this.seq=[],this.map={};let Z=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<Z;++W){let Y=J.getActiveUniform(Q,W),X=J.getUniformLocation(Q,Y.name);aG(Y,X,this)}let K=[],$=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)K.push(W);else $.push(W);if(K.length>0)this.seq=K.concat($)}setValue(J,Q,Z,K){let $=this.map[Q];if($!==void 0)$.setValue(J,Z,K)}setOptional(J,Q,Z){let K=Q[Z];if(K!==void 0)this.setValue(J,Z,K)}static upload(J,Q,Z,K){for(let $=0,W=Q.length;$!==W;++$){let Y=Q[$],X=Z[Y.id];if(X.needsUpdate!==!1)Y.setValue(J,X.value,K)}}static seqWithValue(J,Q){let Z=[];for(let K=0,$=J.length;K!==$;++K){let W=J[K];if(W.id in Q)Z.push(W)}return Z}}function fY(J,Q,Z){let K=J.createShader(Q);return J.shaderSource(K,Z),J.compileShader(K),K}var rG=37297,tG=0;function eG(J,Q){let Z=J.split(`
`),K=[],$=Math.max(Q-6,0),W=Math.min(Q+6,Z.length);for(let Y=$;Y<W;Y++){let X=Y+1;K.push(`${X===Q?">":" "} ${X}: ${Z[Y]}`)}return K.join(`
`)}var hY=new s0;function Jq(J){$J._getMatrix(hY,$J.workingColorSpace,J);let Q=`mat3( ${hY.elements.map((Z)=>Z.toFixed(4))} )`;switch($J.getTransfer(J)){case FK:return[Q,"LinearTransferOETF"];case zJ:return[Q,"sRGBTransferOETF"];default:return c0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function bY(J,Q,Z){let K=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(K&&W==="")return"";let Y=/ERROR: 0:(\d+)/.exec(W);if(Y){let X=parseInt(Y[1]);return Z.toUpperCase()+`

`+W+`

`+eG(J.getShaderSource(Q),X)}else return W}function Qq(J,Q){let Z=Jq(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${Z[1]}( vec4( ${Z[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Zq={[zZ]:"Linear",[AZ]:"Reinhard",[CZ]:"Cineon",[_Z]:"ACESFilmic",[IZ]:"AgX",[TZ]:"Neutral",[PZ]:"Custom"};function Kq(J,Q){let Z=Zq[Q];if(Z===void 0)return c0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+Z+"ToneMapping( color ); }"}var TQ=new v;function $q(){$J.getLuminanceCoefficients(TQ);let J=TQ.x.toFixed(4),Q=TQ.y.toFixed(4),Z=TQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${Z} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Wq(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(H6).join(`
`)}function Yq(J){let Q=[];for(let Z in J){let K=J[Z];if(K===!1)continue;Q.push("#define "+Z+" "+K)}return Q.join(`
`)}function Xq(J,Q){let Z={},K=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let $=0;$<K;$++){let W=J.getActiveAttrib(Q,$),Y=W.name,X=1;if(W.type===J.FLOAT_MAT2)X=2;if(W.type===J.FLOAT_MAT3)X=3;if(W.type===J.FLOAT_MAT4)X=4;Z[Y]={type:W.type,location:J.getAttribLocation(Q,Y),locationSize:X}}return Z}function H6(J){return J!==""}function xY(J,Q){let Z=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Z).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,Q.numLightProbeGrids)}function gY(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var Hq=/^[ \t]*#include +<([\w\d./]+)>/gm;function tK(J){return J.replace(Hq,Uq)}function Uq(J,Q){let Z=t0[Q];if(Z===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">");return tK(Z)}var Nq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pY(J){return J.replace(Nq,Gq)}function Gq(J,Q,Z,K){let $="";for(let W=parseInt(Q);W<parseInt(Z);W++)$+=K.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return $}function lY(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var qq={[d7]:"SHADOWMAP_TYPE_PCF",[E7]:"SHADOWMAP_TYPE_VSM"};function Eq(J){return qq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fq={[D7]:"ENVMAP_MODE_REFRACTION"};function Oq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Fq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Dq={[pW]:"ENVMAP_BLENDING_MULTIPLY",[lW]:"ENVMAP_BLENDING_MIX",[mW]:"ENVMAP_BLENDING_ADD"};function Rq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return Dq[J.combine]||"ENVMAP_BLENDING_NONE"}function Mq(J,Q,Z,K){let $=J.getContext(),W=Z.defines,Y=Z.vertexShader,X=Z.fragmentShader,H=Eq(Z),U=Z.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",N=Oq(Z),q=Rq(Z),G=Wq(Z),F=Yq(W),R=$.createProgram(),A,O,E=Z.glslVersion?"#version "+Z.glslVersion+`
`:"";if(Z.isRawShaderMaterial){if(A=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,F].filter(H6).join(`
`),A.length>0)A+=`
`;if(O=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,F].filter(H6).join(`
`),O.length>0)O+=`
`}else A=[lY(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,F,Z.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Z.batching?"#define USE_BATCHING":"",Z.batchingColor?"#define USE_BATCHING_COLOR":"",Z.instancing?"#define USE_INSTANCING":"",Z.instancingColor?"#define USE_INSTANCING_COLOR":"",Z.instancingMorph?"#define USE_INSTANCING_MORPH":"",Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.map?"#define USE_MAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+N:"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.displacementMap?"#define USE_DISPLACEMENTMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.mapUv?"#define MAP_UV "+Z.mapUv:"",Z.alphaMapUv?"#define ALPHAMAP_UV "+Z.alphaMapUv:"",Z.lightMapUv?"#define LIGHTMAP_UV "+Z.lightMapUv:"",Z.aoMapUv?"#define AOMAP_UV "+Z.aoMapUv:"",Z.emissiveMapUv?"#define EMISSIVEMAP_UV "+Z.emissiveMapUv:"",Z.bumpMapUv?"#define BUMPMAP_UV "+Z.bumpMapUv:"",Z.normalMapUv?"#define NORMALMAP_UV "+Z.normalMapUv:"",Z.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Z.displacementMapUv:"",Z.metalnessMapUv?"#define METALNESSMAP_UV "+Z.metalnessMapUv:"",Z.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Z.roughnessMapUv:"",Z.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Z.anisotropyMapUv:"",Z.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Z.clearcoatMapUv:"",Z.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Z.clearcoatNormalMapUv:"",Z.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Z.clearcoatRoughnessMapUv:"",Z.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+Z.diffuseRoughnessMapUv:"",Z.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Z.iridescenceMapUv:"",Z.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Z.iridescenceThicknessMapUv:"",Z.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Z.sheenColorMapUv:"",Z.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Z.sheenRoughnessMapUv:"",Z.specularMapUv?"#define SPECULARMAP_UV "+Z.specularMapUv:"",Z.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Z.specularColorMapUv:"",Z.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Z.specularIntensityMapUv:"",Z.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Z.transmissionMapUv:"",Z.thicknessMapUv?"#define THICKNESSMAP_UV "+Z.thicknessMapUv:"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexNormals?"#define HAS_NORMAL":"",Z.vertexColors?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.flatShading?"#define FLAT_SHADED":"",Z.skinning?"#define USE_SKINNING":"",Z.morphTargets?"#define USE_MORPHTARGETS":"",Z.morphNormals&&Z.flatShading===!1?"#define USE_MORPHNORMALS":"",Z.morphColors?"#define USE_MORPHCOLORS":"",Z.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Z.morphTextureStride:"",Z.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Z.morphTargetsCount:"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+H:"",Z.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(H6).join(`
`),O=[lY(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,F,Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Z.map?"#define USE_MAP":"",Z.matcap?"#define USE_MATCAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+U:"",Z.envMap?"#define "+N:"",Z.envMap?"#define "+q:"",Z.envMapPMREM?"#define ENVMAP_MAX_LOD "+Z.envMapMaxLod+".0":"",Z.envMapPMREM?"#define ENVMAP_SIZE "+Z.envMapSize+".0":"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoat?"#define USE_CLEARCOAT":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",Z.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",Z.dispersion?"#define USE_DISPERSION":"",Z.retroreflection?"#define USE_RETROREFLECTION":"",Z.iridescence?"#define USE_IRIDESCENCE":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaTest?"#define USE_ALPHATEST":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.sheen?"#define USE_SHEEN":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors||Z.instancingColor?"#define USE_COLOR":"",Z.vertexAlphas||Z.batchingColor?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.gradientMap?"#define USE_GRADIENTMAP":"",Z.flatShading?"#define FLAT_SHADED":"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+H:"",Z.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Z.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Z.toneMapping!==S9?"#define TONE_MAPPING":"",Z.toneMapping!==S9?t0.tonemapping_pars_fragment:"",Z.toneMapping!==S9?Kq("toneMapping",Z.toneMapping):"",Z.dithering?"#define DITHERING":"",Z.opaque?"#define OPAQUE":"",t0.colorspace_pars_fragment,Qq("linearToOutputTexel",Z.outputColorSpace),$q(),Z.useDepthPacking?"#define DEPTH_PACKING "+Z.depthPacking:"",`
`].filter(H6).join(`
`);if(Y=tK(Y),Y=xY(Y,Z),Y=gY(Y,Z),X=tK(X),X=xY(X,Z),X=gY(X,Z),Y=pY(Y),X=pY(X),Z.isRawShaderMaterial!==!0)E=`#version 300 es
`,A=[G,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,O=["#define varying in",Z.glslVersion===MK?"":"layout(location = 0) out highp vec4 pc_fragColor;",Z.glslVersion===MK?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O;let k=E+A+Y,z=E+O+X,B=fY($,$.VERTEX_SHADER,k),C=fY($,$.FRAGMENT_SHADER,z);if($.attachShader(R,B),$.attachShader(R,C),Z.index0AttributeName!==void 0)$.bindAttribLocation(R,0,Z.index0AttributeName);else if(Z.hasPositionAttribute===!0)$.bindAttribLocation(R,0,"position");$.linkProgram(R);function P(f){if(J.debug.checkShaderErrors){let S=$.getProgramInfoLog(R)||"",p=$.getShaderInfoLog(B)||"",t=$.getShaderInfoLog(C)||"",T=S.trim(),c=p.trim(),n=t.trim(),x=!0,Y0=!0;if($.getProgramParameter(R,$.LINK_STATUS)===!1)if(x=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError($,R,B,C);else{let d=bY($,B,"vertex"),r=bY($,C,"fragment");u0("WebGLProgram: Shader Error "+$.getError()+" - VALIDATE_STATUS "+$.getProgramParameter(R,$.VALIDATE_STATUS)+`

Material Name: `+f.name+`
Material Type: `+f.type+`

Program Info Log: `+T+`
`+d+`
`+r)}else if(T!=="")c0("WebGLProgram: Program Info Log:",T);else if(c===""||n==="")Y0=!1;if(Y0)f.diagnostics={runnable:x,programLog:T,vertexShader:{log:c,prefix:A},fragmentShader:{log:n,prefix:O}}}$.deleteShader(B),$.deleteShader(C),D=new U6($,R),V=Xq($,R)}let D;this.getUniforms=function(){if(D===void 0)P(this);return D};let V;this.getAttributes=function(){if(V===void 0)P(this);return V};let I=Z.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(I===!1)I=$.getProgramParameter(R,rG);return I},this.destroy=function(){K.releaseStatesOfProgram(this),$.deleteProgram(R),this.program=void 0},this.type=Z.shaderType,this.name=Z.shaderName,this.id=tG++,this.cacheKey=Q,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=C,this}var Vq=0;class WX{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,Z){let K=this._getShaderCacheForMaterial(J);if(K.has(Q)===!1)K.add(Q),Q.usedTimes++;if(K.has(Z)===!1)K.add(Z),Z.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let Z of Q)if(Z.usedTimes--,Z.usedTimes===0)this.shaderCache.delete(Z.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,Z=Q.get(J);if(Z===void 0)Z=new Set,Q.set(J,Z);return Z}_getShaderStage(J){let Q=this.shaderCache,Z=Q.get(J);if(Z===void 0)Z=new YX(J),Q.set(J,Z);return Z}}class YX{constructor(J){this.id=Vq++,this.code=J,this.usedTimes=0}}function Bq(J){return J===T8||J===KQ||J===$Q}function Lq(J,Q,Z,K,$,W){let Y=new o7,X=new WX,H=new Set,U=[],N=new Map,q=K.logarithmicDepthBuffer,G={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function F(D){if(H.add(D),D===0)return"uv";return`uv${D}`}function R(D,V,I,f,S,p){let t=f.fog,T=S.geometry,c=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?f.environment:null,n=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,x=Q.get(D.envMap||c,n),Y0=G[D.type],d=K.precision;if(D.precision!==null){if(d=K.getMaxPrecision(D.precision),d!==D.precision)c0("WebGLProgram.getParameters:",D.precision,"not supported, using",d,"instead.")}let r=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,K0=r!==void 0?r.length:0,z0=0;if(T.morphAttributes.position!==void 0)z0=1;if(T.morphAttributes.normal!==void 0)z0=2;if(T.morphAttributes.color!==void 0)z0=3;let i,$0,C0,h0;if(Y0){let V0=h9[Y0];i=V0.vertexShader,$0=V0.fragmentShader}else{i=D.vertexShader,$0=D.fragmentShader;let V0=X.getVertexShaderStage(D),BJ=X.getFragmentShaderStage(D);X.update(D,V0,BJ),C0=V0.id,h0=BJ.id}let b0=J.getRenderTarget(),L0=J.state.buffers.depth.getReversed(),YJ=S.isInstancedMesh===!0,r0=S.isBatchedMesh===!0,d0=!!D.map,WJ=!!D.matcap,e=!!x,X0=e&&x.isPMREMTexture===!0,N0=!!D.aoMap,A0=!!D.lightMap,k0=!!D.bumpMap&&D.wireframe===!1,p0=!!D.normalMap,y0=!!D.displacementMap,e0=!!D.emissiveMap,JJ=!!D.metalnessMap,qJ=!!D.roughnessMap,y=D.anisotropy>0,bJ=D.clearcoat>0,o0=D.diffuseRoughness>0,vJ=D.dispersion>0,D0=D.retroreflectivity>0,DJ=D.iridescence>0,m0=D.sheen>0,n0=D.transmission>0,xJ=y&&!!D.anisotropyMap,_=bJ&&!!D.clearcoatMap,M=bJ&&!!D.clearcoatNormalMap,h=bJ&&!!D.clearcoatRoughnessMap,Q0=o0&&!!D.diffuseRoughnessMap,J0=DJ&&!!D.iridescenceMap,U0=DJ&&!!D.iridescenceThicknessMap,E0=m0&&!!D.sheenColorMap,m=m0&&!!D.sheenRoughnessMap,o=!!D.specularMap,G0=!!D.specularColorMap,w=!!D.specularIntensityMap,s=n0&&!!D.transmissionMap,u=n0&&!!D.thicknessMap,W0=!!D.gradientMap,H0=!!D.alphaMap,O0=D.alphaTest>0,f0=!!D.alphaHash,S0=!!D.extensions,M0=S9;if(D.toneMapped){if(b0===null||b0.isXRRenderTarget===!0)M0=J.toneMapping}let x0=X0?x.isCompressedCubeTexture?x.image[0].mipmaps:x.mipmaps:null,a0={shaderID:Y0,shaderType:D.type,shaderName:D.name,vertexShader:i,fragmentShader:$0,defines:D.defines,customVertexShaderID:C0,customFragmentShaderID:h0,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:d,batching:r0,batchingColor:r0&&S._colorsTexture!==null,instancing:YJ,instancingColor:YJ&&S.instanceColor!==null,instancingMorph:YJ&&S.morphTexture!==null,outputColorSpace:b0===null?J.outputColorSpace:b0.isXRRenderTarget===!0?b0.texture.colorSpace:$J.workingColorSpace,alphaToCoverage:!!D.alphaToCoverage,map:d0,matcap:WJ,envMap:e,envMapMode:e&&x.mapping,envMapPMREM:X0,envMapMaxLod:X0?x0.length-1:null,envMapSize:X0?x0[0].width:null,aoMap:N0,lightMap:A0,bumpMap:k0,normalMap:p0,displacementMap:y0,emissiveMap:e0,normalMapObjectSpace:p0&&D.normalMapType===eW,normalMapTangentSpace:p0&&D.normalMapType===qK,packedNormalMap:p0&&D.normalMapType===qK&&Bq(D.normalMap.format),metalnessMap:JJ,roughnessMap:qJ,anisotropy:y,anisotropyMap:xJ,clearcoat:bJ,clearcoatMap:_,clearcoatNormalMap:M,clearcoatRoughnessMap:h,diffuseRoughness:o0,diffuseRoughnessMap:Q0,dispersion:vJ,retroreflection:D0,iridescence:DJ,iridescenceMap:J0,iridescenceThicknessMap:U0,sheen:m0,sheenColorMap:E0,sheenRoughnessMap:m,specularMap:o,specularColorMap:G0,specularIntensityMap:w,transmission:n0,transmissionMap:s,thicknessMap:u,gradientMap:W0,opaque:D.transparent===!1&&D.blending===u7&&D.alphaToCoverage===!1,alphaMap:H0,alphaTest:O0,alphaHash:f0,combine:D.combine,mapUv:d0&&F(D.map.channel),aoMapUv:N0&&F(D.aoMap.channel),lightMapUv:A0&&F(D.lightMap.channel),bumpMapUv:k0&&F(D.bumpMap.channel),normalMapUv:p0&&F(D.normalMap.channel),displacementMapUv:y0&&F(D.displacementMap.channel),emissiveMapUv:e0&&F(D.emissiveMap.channel),metalnessMapUv:JJ&&F(D.metalnessMap.channel),roughnessMapUv:qJ&&F(D.roughnessMap.channel),anisotropyMapUv:xJ&&F(D.anisotropyMap.channel),clearcoatMapUv:_&&F(D.clearcoatMap.channel),clearcoatNormalMapUv:M&&F(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:h&&F(D.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Q0&&F(D.diffuseRoughnessMap.channel),iridescenceMapUv:J0&&F(D.iridescenceMap.channel),iridescenceThicknessMapUv:U0&&F(D.iridescenceThicknessMap.channel),sheenColorMapUv:E0&&F(D.sheenColorMap.channel),sheenRoughnessMapUv:m&&F(D.sheenRoughnessMap.channel),specularMapUv:o&&F(D.specularMap.channel),specularColorMapUv:G0&&F(D.specularColorMap.channel),specularIntensityMapUv:w&&F(D.specularIntensityMap.channel),transmissionMapUv:s&&F(D.transmissionMap.channel),thicknessMapUv:u&&F(D.thicknessMap.channel),alphaMapUv:H0&&F(D.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(p0||y),vertexNormals:!!T.attributes.normal,vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!T.attributes.uv&&(d0||H0),fog:!!t,useFog:D.fog===!0,fogExp2:!!t&&t.isFogExp2,flatShading:D.wireframe===!1&&(D.flatShading===!0||T.attributes.normal===void 0&&p0===!1&&(D.isMeshLambertMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isMeshPhysicalMaterial)),sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:q,reversedDepthBuffer:L0,skinning:S.isSkinnedMesh===!0,hasPositionAttribute:T.attributes.position!==void 0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:K0,morphTextureStride:z0,numSunLights:V.sun.length,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numSunLightShadows:V.sunShadowMap.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numLightProbeGrids:p.filter((V0)=>V0.texture!==null).length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:D.dithering,shadowMapEnabled:J.shadowMap.enabled&&I.length>0,shadowMapType:J.shadowMap.type,toneMapping:M0,decodeVideoTexture:d0&&D.map.isVideoTexture===!0&&$J.getTransfer(D.map.colorSpace)===zJ,decodeVideoTextureEmissive:e0&&D.emissiveMap.isVideoTexture===!0&&$J.getTransfer(D.emissiveMap.colorSpace)===zJ,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===oJ,flipSided:D.side===H9,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:S0&&D.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(S0&&D.extensions.multiDraw===!0||r0)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return a0.vertexUv1s=H.has(1),a0.vertexUv2s=H.has(2),a0.vertexUv3s=H.has(3),H.clear(),a0}function A(D){let V=[];if(D.shaderID)V.push(D.shaderID);else V.push(D.customVertexShaderID),V.push(D.customFragmentShaderID);if(D.defines!==void 0)for(let I in D.defines)V.push(I),V.push(D.defines[I]);if(D.isRawShaderMaterial===!1)O(V,D),E(V,D),V.push(J.outputColorSpace);return V.push(D.customProgramCacheKey),V.join()}function O(D,V){D.push(V.precision),D.push(V.outputColorSpace),D.push(V.envMapMode),D.push(V.envMapPMREM),D.push(V.envMapMaxLod),D.push(V.envMapSize),D.push(V.mapUv),D.push(V.alphaMapUv),D.push(V.lightMapUv),D.push(V.aoMapUv),D.push(V.bumpMapUv),D.push(V.normalMapUv),D.push(V.displacementMapUv),D.push(V.emissiveMapUv),D.push(V.metalnessMapUv),D.push(V.roughnessMapUv),D.push(V.anisotropyMapUv),D.push(V.clearcoatMapUv),D.push(V.clearcoatNormalMapUv),D.push(V.clearcoatRoughnessMapUv),D.push(V.diffuseRoughnessMapUv),D.push(V.iridescenceMapUv),D.push(V.iridescenceThicknessMapUv),D.push(V.sheenColorMapUv),D.push(V.sheenRoughnessMapUv),D.push(V.specularMapUv),D.push(V.specularColorMapUv),D.push(V.specularIntensityMapUv),D.push(V.transmissionMapUv),D.push(V.thicknessMapUv),D.push(V.combine),D.push(V.fogExp2),D.push(V.sizeAttenuation),D.push(V.morphTargetsCount),D.push(V.numSunLights),D.push(V.numDirLights),D.push(V.numPointLights),D.push(V.numSpotLights),D.push(V.numSpotLightMaps),D.push(V.numHemiLights),D.push(V.numRectAreaLights),D.push(V.numSunLightShadows),D.push(V.numDirLightShadows),D.push(V.numPointLightShadows),D.push(V.numSpotLightShadows),D.push(V.numSpotLightShadowsWithMaps),D.push(V.numLightProbes),D.push(V.numLightProbeGrids),D.push(V.shadowMapType),D.push(V.toneMapping),D.push(V.numClippingPlanes),D.push(V.numClipIntersection),D.push(V.depthPacking)}function E(D,V){if(Y.disableAll(),V.instancing)Y.enable(0);if(V.instancingColor)Y.enable(1);if(V.instancingMorph)Y.enable(2);if(V.matcap)Y.enable(3);if(V.envMap)Y.enable(4);if(V.normalMapObjectSpace)Y.enable(5);if(V.normalMapTangentSpace)Y.enable(6);if(V.clearcoat)Y.enable(7);if(V.iridescence)Y.enable(8);if(V.alphaTest)Y.enable(9);if(V.vertexColors)Y.enable(10);if(V.vertexAlphas)Y.enable(11);if(V.vertexUv1s)Y.enable(12);if(V.vertexUv2s)Y.enable(13);if(V.vertexUv3s)Y.enable(14);if(V.vertexTangents)Y.enable(15);if(V.anisotropy)Y.enable(16);if(V.alphaHash)Y.enable(17);if(V.batching)Y.enable(18);if(V.dispersion)Y.enable(19);if(V.retroreflection)Y.enable(24);if(V.diffuseRoughness)Y.enable(25);if(V.batchingColor)Y.enable(20);if(V.gradientMap)Y.enable(21);if(V.packedNormalMap)Y.enable(22);if(V.vertexNormals)Y.enable(23);if(D.push(Y.mask),Y.disableAll(),V.fog)Y.enable(0);if(V.useFog)Y.enable(1);if(V.flatShading)Y.enable(2);if(V.logarithmicDepthBuffer)Y.enable(3);if(V.reversedDepthBuffer)Y.enable(4);if(V.skinning)Y.enable(5);if(V.morphTargets)Y.enable(6);if(V.morphNormals)Y.enable(7);if(V.morphColors)Y.enable(8);if(V.premultipliedAlpha)Y.enable(9);if(V.shadowMapEnabled)Y.enable(10);if(V.doubleSided)Y.enable(11);if(V.flipSided)Y.enable(12);if(V.useDepthPacking)Y.enable(13);if(V.dithering)Y.enable(14);if(V.transmission)Y.enable(15);if(V.sheen)Y.enable(16);if(V.opaque)Y.enable(17);if(V.pointsUvs)Y.enable(18);if(V.decodeVideoTexture)Y.enable(19);if(V.decodeVideoTextureEmissive)Y.enable(20);if(V.alphaToCoverage)Y.enable(21);if(V.numLightProbeGrids>0)Y.enable(22);if(V.hasPositionAttribute)Y.enable(23);D.push(Y.mask)}function k(D){let V=G[D.type],I;if(V){let f=h9[V];I=VY.clone(f.uniforms)}else I=D.uniforms;return I}function z(D,V){let I=N.get(V);if(I!==void 0)++I.usedTimes;else I=new Mq(J,V,D,$),U.push(I),N.set(V,I);return I}function B(D){if(--D.usedTimes===0){let V=U.indexOf(D);U[V]=U[U.length-1],U.pop(),N.delete(D.cacheKey),D.destroy()}}function C(D){X.remove(D)}function P(){X.dispose()}return{getParameters:R,getProgramCacheKey:A,getUniforms:k,acquireProgram:z,releaseProgram:B,releaseShaderCache:C,programs:U,dispose:P}}function kq(){let J=new WeakMap;function Q(Y){return J.has(Y)}function Z(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function K(Y){J.delete(Y)}function $(Y,X,H){J.get(Y)[X]=H}function W(){J=new WeakMap}return{has:Q,get:Z,remove:K,update:$,dispose:W}}function zq(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function mY(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function dY(){let J=[],Q=0,Z=[],K=[],$=[];function W(){Q=0,Z.length=0,K.length=0,$.length=0}function Y(G){let F=0;if(G.isInstancedMesh)F+=2;if(G.isSkinnedMesh)F+=1;return F}function X(G,F,R,A,O,E){let k=J[Q];if(k===void 0)k={id:G.id,object:G,geometry:F,material:R,materialVariant:Y(G),groupOrder:A,renderOrder:G.renderOrder,z:O,group:E},J[Q]=k;else k.id=G.id,k.object=G,k.geometry=F,k.material=R,k.materialVariant=Y(G),k.groupOrder=A,k.renderOrder=G.renderOrder,k.z=O,k.group=E;return Q++,k}function H(G,F,R,A,O,E,k){if(k.reversedDepth===!0)O=-O;let z=X(G,F,R,A,O,E);if(R.transmission>0)K.push(z);else if(R.transparent===!0)$.push(z);else Z.push(z)}function U(G,F,R,A,O,E){let k=X(G,F,R,A,O,E);if(R.transmission>0)K.unshift(k);else if(R.transparent===!0)$.unshift(k);else Z.unshift(k)}function N(G,F){if(Z.length>1)Z.sort(G||zq);if(K.length>1)K.sort(F||mY);if($.length>1)$.sort(F||mY)}function q(){for(let G=Q,F=J.length;G<F;G++){let R=J[G];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:Z,transmissive:K,transparent:$,init:W,push:H,unshift:U,finish:q,sort:N}}function Aq(){let J=new WeakMap;function Q(K,$){let W=J.get(K),Y;if(W===void 0)Y=new dY,J.set(K,[Y]);else if($>=W.length)Y=new dY,W.push(Y);else Y=W[$];return Y}function Z(){J=new WeakMap}return{get:Q,dispose:Z}}function Cq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"SunLight":case"DirectionalLight":Z={direction:new v,color:new v0};break;case"SpotLight":Z={position:new v,direction:new v,color:new v0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Z={position:new v,color:new v0,distance:0,decay:0};break;case"HemisphereLight":Z={direction:new v,skyColor:new v0,groundColor:new v0};break;case"RectAreaLight":Z={color:new v0,position:new v,halfWidth:new v,halfHeight:new v};break}return J[Q.id]=Z,Z}}}function _q(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"SunLight":case"DirectionalLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z0};break;case"SpotLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z0};break;case"PointLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=Z,Z}}}var Pq=0;function Iq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function Tq(J){let Q=new Cq,Z=_q(),K={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)K.probe.push(new v);let $=new v,W=new HJ,Y=new HJ;function X(U){let N=0,q=0,G=0;for(let p=0;p<9;p++)K.probe[p].set(0,0,0);let F=0,R=0,A=0,O=0,E=0,k=0,z=0,B=0,C=0,P=0,D=0,V=0,I=0,f=0;U.sort(Iq);for(let p=0,t=U.length;p<t;p++){let T=U[p],c=T.color,n=T.intensity,x=T.distance,Y0=null;if(T.shadow&&T.shadow.map)if(T.shadow.map.texture.format===T8)Y0=T.shadow.map.texture;else Y0=T.shadow.map.depthTexture||T.shadow.map.texture;if(T.isAmbientLight)N+=c.r*n,q+=c.g*n,G+=c.b*n;else if(T.isLightProbe){for(let d=0;d<9;d++)K.probe[d].addScaledVector(T.sh.coefficients[d],n);f++}else if(T.isSunLight){let d=Q.get(T);if(d.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let r=T.shadow,K0=Z.get(T);K0.shadowIntensity=r.intensity,K0.shadowBias=r.bias,K0.shadowNormalBias=r.normalBias,K0.shadowRadius=r.radius,K0.shadowMapSize.copy(r.mapSize).multiply(r.getFrameExtents()),K.sunShadow[R]=K0,K.sunShadowMap[R]=Y0;let z0=r.getViewportCount();for(let i=0;i<z0;i++)K.sunShadowMatrix[A+i]=r.getMatrix(i),K.sunShadowCascade[A+i]=r._cascadeData[i];A+=z0,R++}K.sun[F]=d,F++}else if(T.isDirectionalLight){let d=Q.get(T);if(d.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let r=T.shadow,K0=Z.get(T);K0.shadowIntensity=r.intensity,K0.shadowBias=r.bias,K0.shadowNormalBias=r.normalBias,K0.shadowRadius=r.radius,K0.shadowMapSize=r.mapSize,K.directionalShadow[O]=K0,K.directionalShadowMap[O]=Y0,K.directionalShadowMatrix[O]=T.shadow.matrix,C++}K.directional[O]=d,O++}else if(T.isSpotLight){let d=Q.get(T);d.position.setFromMatrixPosition(T.matrixWorld),d.color.copy(c).multiplyScalar(n),d.distance=x,d.coneCos=Math.cos(T.angle),d.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),d.decay=T.decay,K.spot[k]=d;let r=T.shadow;if(T.map){if(K.spotLightMap[V]=T.map,V++,r.updateMatrices(T),T.castShadow)I++}if(K.spotLightMatrix[k]=r.matrix,T.castShadow){let K0=Z.get(T);K0.shadowIntensity=r.intensity,K0.shadowBias=r.bias,K0.shadowNormalBias=r.normalBias,K0.shadowRadius=r.radius,K0.shadowMapSize=r.mapSize,K.spotShadow[k]=K0,K.spotShadowMap[k]=Y0,D++}k++}else if(T.isRectAreaLight){let d=Q.get(T);d.color.copy(c).multiplyScalar(n),d.halfWidth.set(T.width*0.5,0,0),d.halfHeight.set(0,T.height*0.5,0),K.rectArea[z]=d,z++}else if(T.isPointLight){let d=Q.get(T);if(d.color.copy(T.color).multiplyScalar(T.intensity),d.distance=T.distance,d.decay=T.decay,T.castShadow){let r=T.shadow,K0=Z.get(T);K0.shadowIntensity=r.intensity,K0.shadowBias=r.bias,K0.shadowNormalBias=r.normalBias,K0.shadowRadius=r.radius,K0.shadowMapSize=r.mapSize,K0.shadowCameraNear=r.camera.near,K0.shadowCameraFar=r.camera.far,K.pointShadow[E]=K0,K.pointShadowMap[E]=Y0,K.pointShadowMatrix[E]=T.shadow.matrix,P++}K.point[E]=d,E++}else if(T.isHemisphereLight){let d=Q.get(T);d.skyColor.copy(T.color).multiplyScalar(n),d.groundColor.copy(T.groundColor).multiplyScalar(n),K.hemi[B]=d,B++}}if(z>0)if(J.has("OES_texture_float_linear")===!0)K.rectAreaLTC1=R0.LTC_FLOAT_1,K.rectAreaLTC2=R0.LTC_FLOAT_2;else K.rectAreaLTC1=R0.LTC_HALF_1,K.rectAreaLTC2=R0.LTC_HALF_2;K.ambient[0]=N,K.ambient[1]=q,K.ambient[2]=G;let S=K.hash;if(S.sunLength!==F||S.directionalLength!==O||S.pointLength!==E||S.spotLength!==k||S.rectAreaLength!==z||S.hemiLength!==B||S.numSunShadows!==R||S.numDirectionalShadows!==C||S.numPointShadows!==P||S.numSpotShadows!==D||S.numSpotMaps!==V||S.numLightProbes!==f)K.sun.length=F,K.directional.length=O,K.spot.length=k,K.rectArea.length=z,K.point.length=E,K.hemi.length=B,K.sunShadow.length=R,K.sunShadowMap.length=R,K.sunShadowMatrix.length=A,K.sunShadowCascade.length=A,K.directionalShadow.length=C,K.directionalShadowMap.length=C,K.directionalShadowMatrix.length=C,K.pointShadow.length=P,K.pointShadowMap.length=P,K.pointShadowMatrix.length=P,K.spotShadow.length=D,K.spotShadowMap.length=D,K.spotLightMatrix.length=D+V-I,K.spotLightMap.length=V,K.numSpotLightShadowsWithMaps=I,K.numLightProbes=f,S.sunLength=F,S.directionalLength=O,S.pointLength=E,S.spotLength=k,S.rectAreaLength=z,S.hemiLength=B,S.numSunShadows=R,S.numDirectionalShadows=C,S.numPointShadows=P,S.numSpotShadows=D,S.numSpotMaps=V,S.numLightProbes=f,K.version=Pq++}function H(U,N){let q=0,G=0,F=0,R=0,A=0,O=0,E=N.matrixWorldInverse;for(let k=0,z=U.length;k<z;k++){let B=U[k];if(B.isSunLight){let C=K.sun[q];C.direction.setFromMatrixPosition(B.matrixWorld),C.direction.transformDirection(E),q++}else if(B.isDirectionalLight){let C=K.directional[G];C.direction.setFromMatrixPosition(B.matrixWorld),$.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub($),C.direction.transformDirection(E),G++}else if(B.isSpotLight){let C=K.spot[R];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(E),C.direction.setFromMatrixPosition(B.matrixWorld),$.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub($),C.direction.transformDirection(E),R++}else if(B.isRectAreaLight){let C=K.rectArea[A];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(E),Y.identity(),W.copy(B.matrixWorld),W.premultiply(E),Y.extractRotation(W),C.halfWidth.set(B.width*0.5,0,0),C.halfHeight.set(0,B.height*0.5,0),C.halfWidth.applyMatrix4(Y),C.halfHeight.applyMatrix4(Y),A++}else if(B.isPointLight){let C=K.point[F];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(E),F++}else if(B.isHemisphereLight){let C=K.hemi[O];C.direction.setFromMatrixPosition(B.matrixWorld),C.direction.transformDirection(E),O++}}}return{setup:X,setupView:H,state:K}}function uY(J){let Q=new Tq(J),Z=[],K=[],$=[];function W(q){N.camera=q,Z.length=0,K.length=0,$.length=0}function Y(q){if(q.isLightProbeGrid)$.push(q);else Z.push(q)}function X(q){K.push(q)}function H(){Q.setup(Z),$.sort((q,G)=>q.priority-G.priority||q.id-G.id)}function U(q){Q.setupView(Z,q)}let N={lightsArray:Z,shadowsArray:K,lightProbeGridArray:$,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:N,setupLights:H,setupLightsView:U,pushLight:Y,pushShadow:X}}function wq(J){let Q=new WeakMap;function Z($,W=0){let Y=Q.get($),X;if(Y===void 0)X=new uY(J),Q.set($,[X]);else if(W>=Y.length)X=new uY(J),Y.push(X);else X=Y[W];return X}function K(){Q=new WeakMap}return{get:Z,dispose:K}}var Sq=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jq=`uniform sampler2D shadow_pass;
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
}`,vq=[new v(1,0,0),new v(-1,0,0),new v(0,1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1)],yq=[new v(0,-1,0),new v(0,-1,0),new v(0,0,1),new v(0,0,-1),new v(0,-1,0),new v(0,-1,0)],cY=new HJ,X6=new v,rK=new v;function fq(J,Q,Z){let K=new C8,$=new Z0,W=new Z0,Y=new SJ,X=new vK,H=new yK,U={},N=Z.maxTextureSize,q={[F7]:H9,[H9]:F7,[oJ]:oJ},G=new t9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z0},radius:{value:4}},vertexShader:Sq,fragmentShader:jq}),F=G.clone();F.defines.HORIZONTAL_PASS=1;let R=new Q9;R.setAttribute("position",new _9(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let A=new AJ(R,G),O=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=d7;let E=this.type;this.render=function(P,D,V){if(O.enabled===!1)return;if(O.autoUpdate===!1&&O.needsUpdate===!1)return;if(P.length===0)return;if(this.type===i6)c0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=d7;let I=J.getRenderTarget(),f=J.getActiveCubeFace(),S=J.getActiveMipmapLevel(),p=J.state;if(p.setBlending(P8),p.buffers.depth.getReversed()===!0)p.buffers.color.setClear(0,0,0,0);else p.buffers.color.setClear(1,1,1,1);p.buffers.depth.setTest(!0),p.setScissorTest(!1);let t=E!==this.type;if(t)D.traverse(function(T){if(T.material)if(Array.isArray(T.material))T.material.forEach((c)=>c.needsUpdate=!0);else T.material.needsUpdate=!0});for(let T=0,c=P.length;T<c;T++){let n=P[T],x=n.shadow;if(x===void 0){c0("WebGLShadowMap:",n,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;$.copy(x.mapSize);let Y0=x.getFrameExtents();if($.multiply(Y0),W.copy(x.mapSize),$.x>N||$.y>N){if($.x>N)W.x=Math.floor(N/Y0.x),$.x=W.x*Y0.x,x.mapSize.x=W.x;if($.y>N)W.y=Math.floor(N/Y0.y),$.y=W.y*Y0.y,x.mapSize.y=W.y}let d=J.state.buffers.depth.getReversed();if(x.camera._reversedDepth=d,x.map===null||t===!0){if(x.map!==null){if(x.map.depthTexture!==null)x.map.depthTexture.dispose(),x.map.depthTexture=null;x.map.dispose()}if(this.type===E7){if(n.isPointLight){c0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}x.map=new V9($.x,$.y,{format:T8,type:j9,minFilter:R9,magFilter:R9,generateMipmaps:!1}),x.map.texture.name=n.name+".shadowMap",x.map.depthTexture=new F8($.x,$.y,s9),x.map.depthTexture.name=n.name+".shadowMapDepth",x.map.depthTexture.format=R7,x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=X8,x.map.depthTexture.magFilter=X8}else{if(n.isPointLight)x.map=new SQ($.x),x.map.depthTexture=new OQ($.x,U8);else x.map=new V9($.x,$.y),x.map.depthTexture=new F8($.x,$.y,U8);if(x.map.depthTexture.name=n.name+".shadowMap",x.map.depthTexture.format=R7,this.type===d7)x.map.depthTexture.compareFunction=d?DK:OK,x.map.depthTexture.minFilter=R9,x.map.depthTexture.magFilter=R9;else x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=X8,x.map.depthTexture.magFilter=X8}x.camera.updateProjectionMatrix()}if(x.map.isWebGLCubeRenderTarget!==!0&&(x.map.width!==$.x||x.map.height!==$.y))x.map.setSize($.x,$.y);let r=x.map.isWebGLCubeRenderTarget?6:x.getViewportCount();if(n.isPointLight!==!0)x.updateMatrices(n,V);let K0=(x.camera.layers.mask&4294967294)!==0?x.camera.layers:V.layers;for(let z0=0;z0<r;z0++){let i=x.getCamera(z0);if(n.isPointLight){let{camera:$0,matrix:C0}=x,h0=n.distance||$0.far;if(h0!==$0.far)$0.far=h0,$0.updateProjectionMatrix();X6.setFromMatrixPosition(n.matrixWorld),$0.position.copy(X6),rK.copy($0.position),rK.add(vq[z0]),$0.up.copy(yq[z0]),$0.lookAt(rK),$0.updateMatrixWorld(),C0.makeTranslation(-X6.x,-X6.y,-X6.z),cY.multiplyMatrices($0.projectionMatrix,$0.matrixWorldInverse),x._frustum.setFromProjectionMatrix(cY,$0.coordinateSystem,$0.reversedDepth)}if(x.map.isWebGLCubeRenderTarget)J.setRenderTarget(x.map,z0),J.clear();else{if(z0===0)J.setRenderTarget(x.map),J.clear();let $0=x.getViewport(z0);Y.set(W.x*$0.x,W.y*$0.y,W.x*$0.z,W.y*$0.w),p.viewport(Y)}K=x.getFrustum(z0),B(D,V,i,n,K0,this.type)}if(x.isPointLightShadow!==!0&&this.type===E7)k(x,V);x.needsUpdate=!1}E=this.type,O.needsUpdate=!1,J.setRenderTarget(I,f,S)};function k(P,D){let V=Q.update(A);if(G.defines.VSM_SAMPLES!==P.blurSamples)G.defines.VSM_SAMPLES=P.blurSamples,F.defines.VSM_SAMPLES=P.blurSamples,G.needsUpdate=!0,F.needsUpdate=!0;if(P.mapPass===null)P.mapPass=new V9($.x,$.y,{format:T8,type:j9});else if(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)P.mapPass.setSize(P.map.width,P.map.height);G.uniforms.shadow_pass.value=P.map.depthTexture,G.uniforms.resolution.value.set(P.map.width,P.map.height),G.uniforms.radius.value=P.radius,J.setRenderTarget(P.mapPass),J.clear(),J.renderBufferDirect(D,null,V,G,A,null),F.uniforms.shadow_pass.value=P.mapPass.texture,F.uniforms.resolution.value.set(P.map.width,P.map.height),F.uniforms.radius.value=P.radius,J.setRenderTarget(P.map),J.clear(),J.renderBufferDirect(D,null,V,F,A,null)}function z(P,D,V,I){let f=null,S=V.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(S!==void 0)f=S;else if(f=V.isPointLight===!0?H:X,J.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let p=f.uuid,t=D.uuid,T=U[p];if(T===void 0)T={},U[p]=T;let c=T[t];if(c===void 0)c=f.clone(),T[t]=c,D.addEventListener("dispose",C);f=c}if(f.visible=D.visible,f.wireframe=D.wireframe,I===E7)f.side=D.shadowSide!==null?D.shadowSide:D.side;else f.side=D.shadowSide!==null?D.shadowSide:q[D.side];if(f.alphaMap=D.alphaMap,f.alphaTest=D.alphaToCoverage===!0?0.5:D.alphaTest,f.map=D.map,f.clipShadows=D.clipShadows,f.clippingPlanes=D.clippingPlanes,f.clipIntersection=D.clipIntersection,f.displacementMap=D.displacementMap,f.displacementScale=D.displacementScale,f.displacementBias=D.displacementBias,f.wireframeLinewidth=D.wireframeLinewidth,f.linewidth=D.linewidth,V.isPointLight===!0&&f.isMeshDistanceMaterial===!0){let p=J.properties.get(f);p.light=V}return f}function B(P,D,V,I,f,S){if(P.visible===!1)return;if(P.layers.test(f)&&(P.isMesh||P.isLine||P.isPoints)){if((P.castShadow||P.receiveShadow&&S===E7)&&(!P.frustumCulled||P.intersectsFrustum(K))){P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld);let T=Q.update(P),c=P.material;if(Array.isArray(c)){let n=T.groups;for(let x=0,Y0=n.length;x<Y0;x++){let d=n[x],r=c[d.materialIndex];if(r&&r.visible){let K0=z(P,r,I,S);P.onBeforeShadow(J,P,D,V,T,K0,d),J.renderBufferDirect(V,null,T,K0,P,d),P.onAfterShadow(J,P,D,V,T,K0,d)}}}else if(c.visible){let n=z(P,c,I,S);P.onBeforeShadow(J,P,D,V,T,n,null),J.renderBufferDirect(V,null,T,n,P,null),P.onAfterShadow(J,P,D,V,T,n,null)}}}let t=P.children;for(let T=0,c=t.length;T<c;T++)B(t[T],D,V,I,f,S)}function C(P){P.target.removeEventListener("dispose",C);for(let V in U){let I=U[V],f=P.target.uuid;if(f in I)I[f].dispose(),delete I[f]}}}function hq(J,Q){function Z(){let w=!1,s=new SJ,u=null,W0=new SJ(0,0,0,0);return{setMask:function(H0){if(u!==H0&&!w)J.colorMask(H0,H0,H0,H0),u=H0},setLocked:function(H0){w=H0},setClear:function(H0,O0,f0,S0,M0){if(M0===!0)H0*=S0,O0*=S0,f0*=S0;if(s.set(H0,O0,f0,S0),W0.equals(s)===!1)J.clearColor(H0,O0,f0,S0),W0.copy(s)},reset:function(){w=!1,u=null,W0.set(-1,0,0,0)}}}function K(){let w=!1,s=!1,u=null,W0=null,H0=null;return{setReversed:function(O0){if(s!==O0){let f0=Q.get("EXT_clip_control");if(O0)f0.clipControlEXT(f0.LOWER_LEFT_EXT,f0.ZERO_TO_ONE_EXT);else f0.clipControlEXT(f0.LOWER_LEFT_EXT,f0.NEGATIVE_ONE_TO_ONE_EXT);s=O0;let S0=H0;H0=null,this.setClear(S0)}},getReversed:function(){return s},setTest:function(O0){if(O0)L0(J.DEPTH_TEST);else YJ(J.DEPTH_TEST)},setMask:function(O0){if(u!==O0&&!w)J.depthMask(O0),u=O0},setFunc:function(O0){if(s)O0=HY[O0];if(W0!==O0){switch(O0){case vW:J.depthFunc(J.NEVER);break;case yW:J.depthFunc(J.ALWAYS);break;case fW:J.depthFunc(J.LESS);break;case kZ:J.depthFunc(J.LEQUAL);break;case hW:J.depthFunc(J.EQUAL);break;case bW:J.depthFunc(J.GEQUAL);break;case xW:J.depthFunc(J.GREATER);break;case gW:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}W0=O0}},setLocked:function(O0){w=O0},setClear:function(O0){if(H0!==O0){if(H0=O0,s)O0=1-O0;J.clearDepth(O0)}},reset:function(){w=!1,u=null,W0=null,H0=null,s=!1}}}function $(){let w=!1,s=null,u=null,W0=null,H0=null,O0=null,f0=null,S0=null,M0=null;return{setTest:function(x0){if(!w)if(x0)L0(J.STENCIL_TEST);else YJ(J.STENCIL_TEST)},setMask:function(x0){if(s!==x0&&!w)J.stencilMask(x0),s=x0},setFunc:function(x0,a0,V0){if(u!==x0||W0!==a0||H0!==V0)J.stencilFunc(x0,a0,V0),u=x0,W0=a0,H0=V0},setOp:function(x0,a0,V0){if(O0!==x0||f0!==a0||S0!==V0)J.stencilOp(x0,a0,V0),O0=x0,f0=a0,S0=V0},setLocked:function(x0){w=x0},setClear:function(x0){if(M0!==x0)J.clearStencil(x0),M0=x0},reset:function(){w=!1,s=null,u=null,W0=null,H0=null,O0=null,f0=null,S0=null,M0=null}}}let W=new Z,Y=new K,X=new $,H={},U=new WeakMap,N={},q={},G={},F=new WeakMap,R=[],A=null,O=!1,E=null,k=null,z=null,B=null,C=null,P=null,D=null,V=new v0(0,0,0),I=0,f=!1,S=null,p=null,t=null,T=null,c=null,n=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),x=!1,Y0=0,d=J.getParameter(J.VERSION);if(d.indexOf("WebGL")!==-1)Y0=parseFloat(/^WebGL (\d)/.exec(d)[1]),x=Y0>=1;else if(d.indexOf("OpenGL ES")!==-1)Y0=parseFloat(/^OpenGL ES (\d)/.exec(d)[1]),x=Y0>=2;let r=null,K0={},z0=J.getParameter(J.SCISSOR_BOX),i=J.getParameter(J.VIEWPORT),$0=new SJ().fromArray(z0),C0=new SJ().fromArray(i);function h0(w,s,u,W0){let H0=new Uint8Array(4),O0=J.createTexture();J.bindTexture(w,O0),J.texParameteri(w,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(w,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let f0=0;f0<u;f0++)if(w===J.TEXTURE_3D||w===J.TEXTURE_2D_ARRAY)J.texImage3D(s,0,J.RGBA,1,1,W0,0,J.RGBA,J.UNSIGNED_BYTE,H0);else J.texImage2D(s+f0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,H0);return O0}let b0={};b0[J.TEXTURE_2D]=h0(J.TEXTURE_2D,J.TEXTURE_2D,1),b0[J.TEXTURE_CUBE_MAP]=h0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),b0[J.TEXTURE_2D_ARRAY]=h0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),b0[J.TEXTURE_3D]=h0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),L0(J.DEPTH_TEST),Y.setFunc(kZ),k0(!1),p0(MZ),L0(J.CULL_FACE),N0(P8);function L0(w){if(N[w]!==!0)J.enable(w),N[w]=!0}function YJ(w){if(N[w]!==!1)J.disable(w),N[w]=!1}function r0(w,s){if(G[w]!==s){if(J.bindFramebuffer(w,s),G[w]=s,w===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=s;if(w===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=s;return!0}return!1}function d0(w,s){let u=R,W0=!1;if(w){if(u=F.get(s),u===void 0)u=[],F.set(s,u);let H0=w.textures;if(u.length!==H0.length||u[0]!==J.COLOR_ATTACHMENT0){for(let O0=0,f0=H0.length;O0<f0;O0++)u[O0]=J.COLOR_ATTACHMENT0+O0;u.length=H0.length,W0=!0}}else if(u[0]!==J.BACK)u[0]=J.BACK,W0=!0;if(W0)J.drawBuffers(u)}function WJ(w){if(A!==w)return J.useProgram(w),A=w,!0;return!1}let e={[O7]:J.FUNC_ADD,[FW]:J.FUNC_SUBTRACT,[OW]:J.FUNC_REVERSE_SUBTRACT};e[DW]=J.MIN,e[RW]=J.MAX;let X0={[MW]:J.ZERO,[VW]:J.ONE,[BW]:J.SRC_COLOR,[kW]:J.SRC_ALPHA,[IW]:J.SRC_ALPHA_SATURATE,[_W]:J.DST_COLOR,[AW]:J.DST_ALPHA,[LW]:J.ONE_MINUS_SRC_COLOR,[zW]:J.ONE_MINUS_SRC_ALPHA,[PW]:J.ONE_MINUS_DST_COLOR,[CW]:J.ONE_MINUS_DST_ALPHA,[TW]:J.CONSTANT_COLOR,[wW]:J.ONE_MINUS_CONSTANT_COLOR,[SW]:J.CONSTANT_ALPHA,[jW]:J.ONE_MINUS_CONSTANT_ALPHA};function N0(w,s,u,W0,H0,O0,f0,S0,M0,x0){if(w===P8){if(O===!0)YJ(J.BLEND),O=!1;return}if(O===!1)L0(J.BLEND),O=!0;if(w!==EW){if(w!==E||x0!==f){if(k!==O7||C!==O7)J.blendEquation(J.FUNC_ADD),k=O7,C=O7;if(x0)switch(w){case u7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case VZ:J.blendFunc(J.ONE,J.ONE);break;case BZ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case LZ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:u0("WebGLState: Invalid blending: ",w);break}else switch(w){case u7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case VZ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case BZ:u0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case LZ:u0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:u0("WebGLState: Invalid blending: ",w);break}z=null,B=null,P=null,D=null,V.set(0,0,0),I=0,E=w,f=x0}return}if(H0=H0||s,O0=O0||u,f0=f0||W0,s!==k||H0!==C)J.blendEquationSeparate(e[s],e[H0]),k=s,C=H0;if(u!==z||W0!==B||O0!==P||f0!==D)J.blendFuncSeparate(X0[u],X0[W0],X0[O0],X0[f0]),z=u,B=W0,P=O0,D=f0;if(S0.equals(V)===!1||M0!==I)J.blendColor(S0.r,S0.g,S0.b,M0),V.copy(S0),I=M0;E=w,f=!1}function A0(w,s){w.side===oJ?YJ(J.CULL_FACE):L0(J.CULL_FACE);let u=w.side===H9;if(s)u=!u;k0(u),w.blending===u7&&w.transparent===!1?N0(P8):N0(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),Y.setFunc(w.depthFunc),Y.setTest(w.depthTest),Y.setMask(w.depthWrite),W.setMask(w.colorWrite);let W0=w.stencilWrite;if(X.setTest(W0),W0)X.setMask(w.stencilWriteMask),X.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),X.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass);e0(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?L0(J.SAMPLE_ALPHA_TO_COVERAGE):YJ(J.SAMPLE_ALPHA_TO_COVERAGE)}function k0(w){if(S!==w){if(w)J.frontFace(J.CW);else J.frontFace(J.CCW);S=w}}function p0(w){if(w!==GW){if(L0(J.CULL_FACE),w!==p)if(w===MZ)J.cullFace(J.BACK);else if(w===qW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else YJ(J.CULL_FACE);p=w}function y0(w){if(w!==t){if(x)J.lineWidth(w);t=w}}function e0(w,s,u){if(w){if(L0(J.POLYGON_OFFSET_FILL),T!==s||c!==u){if(T=s,c=u,Y.getReversed())s=-s,u=-u;J.polygonOffset(s,u)}}else YJ(J.POLYGON_OFFSET_FILL)}function JJ(w){if(w)L0(J.SCISSOR_TEST);else YJ(J.SCISSOR_TEST)}function qJ(w){if(w===void 0)w=J.TEXTURE0+n-1;if(r!==w)J.activeTexture(w),r=w}function y(w,s,u){if(u===void 0)if(r===null)u=J.TEXTURE0+n-1;else u=r;let W0=K0[u];if(W0===void 0)W0={type:void 0,texture:void 0},K0[u]=W0;if(W0.type!==w||W0.texture!==s){if(r!==u)J.activeTexture(u),r=u;J.bindTexture(w,s||b0[w]),W0.type=w,W0.texture=s}}function bJ(){let w=K0[r];if(w!==void 0&&w.type!==void 0)J.bindTexture(w.type,null),w.type=void 0,w.texture=void 0}function o0(){try{J.compressedTexImage2D(...arguments)}catch(w){u0("WebGLState:",w)}}function vJ(){try{J.compressedTexImage3D(...arguments)}catch(w){u0("WebGLState:",w)}}function D0(){try{J.texSubImage2D(...arguments)}catch(w){u0("WebGLState:",w)}}function DJ(){try{J.texSubImage3D(...arguments)}catch(w){u0("WebGLState:",w)}}function m0(){try{J.compressedTexSubImage2D(...arguments)}catch(w){u0("WebGLState:",w)}}function n0(){try{J.compressedTexSubImage3D(...arguments)}catch(w){u0("WebGLState:",w)}}function xJ(){try{J.texStorage2D(...arguments)}catch(w){u0("WebGLState:",w)}}function _(){try{J.texStorage3D(...arguments)}catch(w){u0("WebGLState:",w)}}function M(){try{J.texImage2D(...arguments)}catch(w){u0("WebGLState:",w)}}function h(){try{J.texImage3D(...arguments)}catch(w){u0("WebGLState:",w)}}function Q0(w){if(q[w]!==void 0)return q[w];else return J.getParameter(w)}function J0(w,s){if(q[w]!==s)J.pixelStorei(w,s),q[w]=s}function U0(w){if($0.equals(w)===!1)J.scissor(w.x,w.y,w.z,w.w),$0.copy(w)}function E0(w){if(C0.equals(w)===!1)J.viewport(w.x,w.y,w.z,w.w),C0.copy(w)}function m(w,s){let u=U.get(s);if(u===void 0)u=new WeakMap,U.set(s,u);let W0=u.get(w);if(W0===void 0)W0=J.getUniformBlockIndex(s,w.name),J.uniformBlockBinding(s,W0,W0),u.set(w,W0)}function o(w,s,u){let H0=U.get(s).get(w);if(H[H0]!==u)J.bindBufferBase(J.UNIFORM_BUFFER,H0,u),H[H0]=u}function G0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},q={},r=null,K0={},G={},H={},F=new WeakMap,R=[],A=null,O=!1,E=null,k=null,z=null,B=null,C=null,P=null,D=null,V=new v0(0,0,0),I=0,f=!1,S=null,p=null,t=null,T=null,c=null,$0.set(0,0,J.canvas.width,J.canvas.height),C0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),Y.reset(),X.reset()}return{buffers:{color:W,depth:Y,stencil:X},enable:L0,disable:YJ,bindFramebuffer:r0,drawBuffers:d0,useProgram:WJ,setBlending:N0,setMaterial:A0,setFlipSided:k0,setCullFace:p0,setLineWidth:y0,setPolygonOffset:e0,setScissorTest:JJ,activeTexture:qJ,bindTexture:y,unbindTexture:bJ,compressedTexImage2D:o0,compressedTexImage3D:vJ,texImage2D:M,texImage3D:h,pixelStorei:J0,getParameter:Q0,updateUBOMapping:m,uniformBlockBinding:o,texStorage2D:xJ,texStorage3D:_,texSubImage2D:D0,texSubImage3D:DJ,compressedTexSubImage2D:m0,compressedTexSubImage3D:n0,scissor:U0,viewport:E0,reset:G0}}function bq(J,Q,Z,K,$,W,Y){let X=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new Z0,N=new WeakMap,q=new Set,G,F=new WeakMap,R=new Set,A=new FinalizationRegistry((_)=>R.delete(_)),O=!1;try{O=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(_){}function E(_,M){return O?new OffscreenCanvas(_,M):N7("canvas")}function k(_,M,h){let Q0=1,J0=xJ(_);if(J0.width>h||J0.height>h)Q0=h/Math.max(J0.width,J0.height);if(Q0<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){let U0=Math.floor(Q0*J0.width),E0=Math.floor(Q0*J0.height);if(G===void 0)G=E(U0,E0);let m=M?E(U0,E0):G;return m.width=U0,m.height=E0,m.getContext("2d").drawImage(_,0,0,U0,E0),c0("WebGLRenderer: Texture has been resized from ("+J0.width+"x"+J0.height+") to ("+U0+"x"+E0+")."),m}else{if("data"in _)c0("WebGLRenderer: Image in DataTexture is too big ("+J0.width+"x"+J0.height+").");return _}return _}function z(_){return _.generateMipmaps}function B(_){J.generateMipmap(_)}function C(_){if(_.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(_.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function P(_,M,h,Q0,J0,U0=!1){if(_!==null){if(J[_]!==void 0)return J[_];c0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let E0;if(Q0){if(E0=Q.get("EXT_texture_norm16"),!E0)c0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let m=M;if(M===J.RED){if(h===J.FLOAT)m=J.R32F;if(h===J.HALF_FLOAT)m=J.R16F;if(h===J.UNSIGNED_BYTE)m=J.R8;if(h===J.UNSIGNED_SHORT&&E0)m=E0.R16_EXT;if(h===J.SHORT&&E0)m=E0.R16_SNORM_EXT}if(M===J.RED_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.R8UI;if(h===J.UNSIGNED_SHORT)m=J.R16UI;if(h===J.UNSIGNED_INT)m=J.R32UI;if(h===J.BYTE)m=J.R8I;if(h===J.SHORT)m=J.R16I;if(h===J.INT)m=J.R32I}if(M===J.RG){if(h===J.FLOAT)m=J.RG32F;if(h===J.HALF_FLOAT)m=J.RG16F;if(h===J.UNSIGNED_BYTE)m=J.RG8;if(h===J.UNSIGNED_SHORT&&E0)m=E0.RG16_EXT;if(h===J.SHORT&&E0)m=E0.RG16_SNORM_EXT}if(M===J.RG_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.RG8UI;if(h===J.UNSIGNED_SHORT)m=J.RG16UI;if(h===J.UNSIGNED_INT)m=J.RG32UI;if(h===J.BYTE)m=J.RG8I;if(h===J.SHORT)m=J.RG16I;if(h===J.INT)m=J.RG32I}if(M===J.RGB_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.RGB8UI;if(h===J.UNSIGNED_SHORT)m=J.RGB16UI;if(h===J.UNSIGNED_INT)m=J.RGB32UI;if(h===J.BYTE)m=J.RGB8I;if(h===J.SHORT)m=J.RGB16I;if(h===J.INT)m=J.RGB32I}if(M===J.RGBA_INTEGER){if(h===J.UNSIGNED_BYTE)m=J.RGBA8UI;if(h===J.UNSIGNED_SHORT)m=J.RGBA16UI;if(h===J.UNSIGNED_INT)m=J.RGBA32UI;if(h===J.BYTE)m=J.RGBA8I;if(h===J.SHORT)m=J.RGBA16I;if(h===J.INT)m=J.RGBA32I}if(M===J.RGB){if(h===J.UNSIGNED_SHORT&&E0)m=E0.RGB16_EXT;if(h===J.SHORT&&E0)m=E0.RGB16_SNORM_EXT;if(h===J.UNSIGNED_INT_5_9_9_9_REV)m=J.RGB9_E5;if(h===J.UNSIGNED_INT_10F_11F_11F_REV)m=J.R11F_G11F_B10F}if(M===J.RGBA){let o=U0?FK:$J.getTransfer(J0);if(h===J.FLOAT)m=J.RGBA32F;if(h===J.HALF_FLOAT)m=J.RGBA16F;if(h===J.UNSIGNED_BYTE)m=o===zJ?J.SRGB8_ALPHA8:J.RGBA8;if(h===J.UNSIGNED_SHORT&&E0)m=E0.RGBA16_EXT;if(h===J.SHORT&&E0)m=E0.RGBA16_SNORM_EXT;if(h===J.UNSIGNED_SHORT_4_4_4_4)m=J.RGBA4;if(h===J.UNSIGNED_SHORT_5_5_5_1)m=J.RGB5_A1}if(m===J.R16F||m===J.R32F||m===J.RG16F||m===J.RG32F||m===J.RGBA16F||m===J.RGBA32F)Q.get("EXT_color_buffer_float");return m}function D(_,M){let h;if(_){if(M===null||M===U8||M===I8)h=J.DEPTH24_STENCIL8;else if(M===s9)h=J.DEPTH32F_STENCIL8;else if(M===s7)h=J.DEPTH24_STENCIL8,c0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(M===null||M===U8||M===I8)h=J.DEPTH_COMPONENT24;else if(M===s9)h=J.DEPTH_COMPONENT32F;else if(M===s7)h=J.DEPTH_COMPONENT16;return h}function V(_,M){if(z(_)===!0||_.isFramebufferTexture&&_.minFilter!==X8&&_.minFilter!==R9)return Math.log2(Math.max(M.width,M.height))+1;else if(_.mipmaps.length>0)return _.mipmaps.length;else if(_.isCompressedTexture&&Array.isArray(_.image))return M.mipmaps.length;else return 1}function I(_){let M=new WeakRef(_);K.get(_).__ref=M,R.add(M),A.register(_,M,M)}function f(_){let M=K.get(_).__ref;if(M===void 0)return;R.delete(M),A.unregister(M)}function S(_){t(_.target)}function p(_){T(_.target)}function t(_){if(_.removeEventListener("dispose",S),f(_),n(_),_.isVideoTexture)N.delete(_);if(_.isHTMLTexture)q.delete(_)}function T(_){_.removeEventListener("dispose",p),f(_),Y0(_)}function c(){for(let _ of R){let M=_.deref();if(M===void 0)continue;if(M.isRenderTarget===!0)T(M);else t(M)}R.clear(),q.clear()}function n(_){let M=K.get(_);if(M.__webglInit===void 0)return;let h=_.source,Q0=F.get(h);if(Q0){let J0=Q0[M.__cacheKey];if(J0.usedTimes--,J0.usedTimes===0)x(_);if(Object.keys(Q0).length===0)F.delete(h)}K.remove(_)}function x(_){let M=K.get(_);J.deleteTexture(M.__webglTexture);let h=_.source,Q0=F.get(h);delete Q0[M.__cacheKey],Y.memory.textures--}function Y0(_){let M=K.get(_);if(M.__depthDisposeCallback)M.__depthDisposeCallback();let h=_.depthTexture;if(h&&h.renderTarget===_)t(h);if(_.isWebGLCubeRenderTarget)for(let J0=0;J0<6;J0++){if(Array.isArray(M.__webglFramebuffer[J0]))for(let U0=0;U0<M.__webglFramebuffer[J0].length;U0++)J.deleteFramebuffer(M.__webglFramebuffer[J0][U0]);else J.deleteFramebuffer(M.__webglFramebuffer[J0]);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer[J0])}else{if(Array.isArray(M.__webglFramebuffer))for(let J0=0;J0<M.__webglFramebuffer.length;J0++)J.deleteFramebuffer(M.__webglFramebuffer[J0]);else J.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer);if(M.__webglMultisampledFramebuffer)J.deleteFramebuffer(M.__webglMultisampledFramebuffer);if(M.__webglColorRenderbuffer){for(let J0=0;J0<M.__webglColorRenderbuffer.length;J0++)if(M.__webglColorRenderbuffer[J0])J.deleteRenderbuffer(M.__webglColorRenderbuffer[J0])}if(M.__webglDepthRenderbuffer)J.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let Q0=_.textures;for(let J0=0,U0=Q0.length;J0<U0;J0++){let E0=K.get(Q0[J0]);if(E0.__webglTexture)J.deleteTexture(E0.__webglTexture),Y.memory.textures--;K.remove(Q0[J0])}K.remove(_)}let d=0;function r(){d=0}function K0(){return d}function z0(_){d=_}function i(){let _=d;if(_>=$.maxTextures)c0("WebGLTextures: Trying to use "+(_+1)+" texture units while this GPU supports only "+$.maxTextures);return d+=1,_}function $0(_){let M=[];return M.push(_.wrapS),M.push(_.wrapT),M.push(_.wrapR||0),M.push(_.magFilter),M.push(_.minFilter),M.push(_.anisotropy),M.push(_.internalFormat),M.push(_.format),M.push(_.type),M.push(_.generateMipmaps),M.push(_.mipmapsAutoUpdate),M.push(_.premultiplyAlpha),M.push(_.flipY),M.push(_.unpackAlignment),M.push(_.colorSpace),M.join()}function C0(_,M){let h=K.get(_);if(_.isVideoTexture)m0(_);if(_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&h.__version!==_.version){let Q0=_.image;if(Q0===null)c0("WebGLRenderer: Texture marked for update but no image data found.");else if(Q0.complete===!1)c0("WebGLRenderer: Texture marked for update but image is incomplete");else{A0(h,_,M);return}}else if(_.isExternalTexture)h.__webglTexture=_.sourceTexture?_.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D,h.__webglTexture,J.TEXTURE0+M)}function h0(_,M){let h=K.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&h.__version!==_.version){A0(h,_,M);return}else if(_.isExternalTexture)h.__webglTexture=_.sourceTexture?_.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D_ARRAY,h.__webglTexture,J.TEXTURE0+M)}function b0(_,M){let h=K.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&h.__version!==_.version){A0(h,_,M);return}Z.bindTexture(J.TEXTURE_3D,h.__webglTexture,J.TEXTURE0+M)}function L0(_,M){let h=K.get(_);if(_.version>0&&h.__version!==_.version){k0(h,_,M);return}Z.bindTexture(J.TEXTURE_CUBE_MAP,h.__webglTexture,J.TEXTURE0+M)}let YJ={[dW]:J.REPEAT,[r6]:J.CLAMP_TO_EDGE,[uW]:J.MIRRORED_REPEAT},r0={[X8]:J.NEAREST,[cW]:J.NEAREST_MIPMAP_NEAREST,[n7]:J.NEAREST_MIPMAP_LINEAR,[R9]:J.LINEAR,[t6]:J.LINEAR_MIPMAP_NEAREST,[H8]:J.LINEAR_MIPMAP_LINEAR},d0={[JY]:J.NEVER,[RK]:J.ALWAYS,[QY]:J.LESS,[OK]:J.LEQUAL,[ZY]:J.EQUAL,[DK]:J.GEQUAL,[KY]:J.GREATER,[$Y]:J.NOTEQUAL};function WJ(_,M){if(M.type===s9&&Q.has("OES_texture_float_linear")===!1&&(M.magFilter===R9||M.magFilter===t6||M.magFilter===n7||M.magFilter===H8||M.minFilter===R9||M.minFilter===t6||M.minFilter===n7||M.minFilter===H8))c0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(_,J.TEXTURE_WRAP_S,YJ[M.wrapS]),J.texParameteri(_,J.TEXTURE_WRAP_T,YJ[M.wrapT]),_===J.TEXTURE_3D||_===J.TEXTURE_2D_ARRAY)J.texParameteri(_,J.TEXTURE_WRAP_R,YJ[M.wrapR]);if(J.texParameteri(_,J.TEXTURE_MAG_FILTER,r0[M.magFilter]),J.texParameteri(_,J.TEXTURE_MIN_FILTER,r0[M.minFilter]),M.compareFunction)J.texParameteri(_,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(_,J.TEXTURE_COMPARE_FUNC,d0[M.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===X8)return;if(M.minFilter!==n7&&M.minFilter!==H8)return;if(M.type===s9&&Q.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||K.get(M).__currentAnisotropy){let h=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(_,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,$.getMaxAnisotropy())),K.get(M).__currentAnisotropy=M.anisotropy}}}function e(_,M){let h=!1;if(_.__webglInit===void 0)_.__webglInit=!0,M.addEventListener("dispose",S),I(M);let Q0=M.source,J0=F.get(Q0);if(J0===void 0)J0={},F.set(Q0,J0);let U0=$0(M);if(U0!==_.__cacheKey){if(J0[U0]===void 0)J0[U0]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,h=!0;J0[U0].usedTimes++;let E0=J0[_.__cacheKey];if(E0!==void 0){if(J0[_.__cacheKey].usedTimes--,E0.usedTimes===0)x(M)}_.__cacheKey=U0,_.__webglTexture=J0[U0].texture}return h}function X0(_,M,h){return Math.floor(Math.floor(_/h)/M)}function N0(_,M,h,Q0){let U0=_.updateRanges;if(U0.length===0)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,M.width,M.height,h,Q0,M.data);else{U0.sort((w,s)=>w.start-s.start);let E0=0;for(let w=1;w<U0.length;w++){let s=U0[E0],u=U0[w],W0=s.start+s.count,H0=X0(u.start,M.width,4),O0=X0(s.start,M.width,4);if(u.start<=W0+1&&H0===O0&&X0(u.start+u.count-1,M.width,4)===H0)s.count=Math.max(s.count,u.start+u.count-s.start);else++E0,U0[E0]=u}U0.length=E0+1;let m=Z.getParameter(J.UNPACK_ROW_LENGTH),o=Z.getParameter(J.UNPACK_SKIP_PIXELS),G0=Z.getParameter(J.UNPACK_SKIP_ROWS);Z.pixelStorei(J.UNPACK_ROW_LENGTH,M.width);for(let w=0,s=U0.length;w<s;w++){let u=U0[w],W0=Math.floor(u.start/4),H0=Math.ceil(u.count/4),O0=W0%M.width,f0=Math.floor(W0/M.width),S0=H0,M0=1;Z.pixelStorei(J.UNPACK_SKIP_PIXELS,O0),Z.pixelStorei(J.UNPACK_SKIP_ROWS,f0),Z.texSubImage2D(J.TEXTURE_2D,0,O0,f0,S0,1,h,Q0,M.data)}_.clearUpdateRanges(),Z.pixelStorei(J.UNPACK_ROW_LENGTH,m),Z.pixelStorei(J.UNPACK_SKIP_PIXELS,o),Z.pixelStorei(J.UNPACK_SKIP_ROWS,G0)}}function A0(_,M,h){let Q0=J.TEXTURE_2D;if(M.isDataArrayTexture||M.isCompressedArrayTexture)Q0=J.TEXTURE_2D_ARRAY;if(M.isData3DTexture)Q0=J.TEXTURE_3D;let J0=e(_,M),U0=M.source;Z.bindTexture(Q0,_.__webglTexture,J.TEXTURE0+h);let E0=K.get(U0);if(U0.version!==E0.__version||J0===!0){if(Z.activeTexture(J.TEXTURE0+h),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let M0=$J.getPrimaries($J.workingColorSpace),x0=M.colorSpace===w8?null:$J.getPrimaries(M.colorSpace),a0=M.colorSpace===w8||M0===x0?J.NONE:J.BROWSER_DEFAULT_WEBGL;Z.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),Z.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),Z.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,a0)}Z.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment);let o=k(M.image,!1,$.maxTextureSize);o=n0(M,o);let G0=W.convert(M.format,M.colorSpace),w=W.convert(M.type),s=P(M.internalFormat,G0,w,M.normalized,M.colorSpace,M.isVideoTexture);WJ(Q0,M);let u,W0=M.mipmaps,H0=M.isVideoTexture!==!0,O0=E0.__version===void 0||J0===!0,f0=U0.dataReady,S0=V(M,o);if(M.isDepthTexture){if(s=D(M.format===N8,M.type),O0)if(H0)Z.texStorage2D(J.TEXTURE_2D,1,s,o.width,o.height);else Z.texImage2D(J.TEXTURE_2D,0,s,o.width,o.height,0,G0,w,null)}else if(M.isDataTexture)if(W0.length>0){if(H0&&O0)Z.texStorage2D(J.TEXTURE_2D,S0,s,W0[0].width,W0[0].height);for(let M0=0,x0=W0.length;M0<x0;M0++)if(u=W0[M0],H0){if(f0)Z.texSubImage2D(J.TEXTURE_2D,M0,0,0,u.width,u.height,G0,w,u.data)}else Z.texImage2D(J.TEXTURE_2D,M0,s,u.width,u.height,0,G0,w,u.data);M.generateMipmaps=!1}else if(H0){if(O0)Z.texStorage2D(J.TEXTURE_2D,S0,s,o.width,o.height);if(f0)N0(M,o,G0,w)}else Z.texImage2D(J.TEXTURE_2D,0,s,o.width,o.height,0,G0,w,o.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){if(H0&&O0)Z.texStorage3D(J.TEXTURE_2D_ARRAY,S0,s,W0[0].width,W0[0].height,o.depth);for(let M0=0,x0=W0.length;M0<x0;M0++)if(u=W0[M0],M.format!==i9)if(G0!==null)if(H0){if(f0)if(M.layerUpdates.size>0){let a0=oK(u.width,u.height,M.format,M.type);for(let V0 of M.layerUpdates){let BJ=u.data.subarray(V0*a0/u.data.BYTES_PER_ELEMENT,(V0+1)*a0/u.data.BYTES_PER_ELEMENT);Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,M0,0,0,V0,u.width,u.height,1,G0,BJ)}}else Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,M0,0,0,0,u.width,u.height,o.depth,G0,u.data)}else Z.compressedTexImage3D(J.TEXTURE_2D_ARRAY,M0,s,u.width,u.height,o.depth,0,u.data,0,0);else c0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(H0){if(f0)Z.texSubImage3D(J.TEXTURE_2D_ARRAY,M0,0,0,0,u.width,u.height,o.depth,G0,w,u.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,M0,s,u.width,u.height,o.depth,0,G0,w,u.data);if(M.layerUpdates.size>0)M.clearLayerUpdates()}else{if(H0&&O0)Z.texStorage2D(J.TEXTURE_2D,S0,s,W0[0].width,W0[0].height);for(let M0=0,x0=W0.length;M0<x0;M0++)if(u=W0[M0],M.format!==i9)if(G0!==null)if(H0){if(f0)Z.compressedTexSubImage2D(J.TEXTURE_2D,M0,0,0,u.width,u.height,G0,u.data)}else Z.compressedTexImage2D(J.TEXTURE_2D,M0,s,u.width,u.height,0,u.data);else c0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(H0){if(f0)Z.texSubImage2D(J.TEXTURE_2D,M0,0,0,u.width,u.height,G0,w,u.data)}else Z.texImage2D(J.TEXTURE_2D,M0,s,u.width,u.height,0,G0,w,u.data)}else if(M.isDataArrayTexture)if(H0){if(O0)Z.texStorage3D(J.TEXTURE_2D_ARRAY,S0,s,o.width,o.height,o.depth);if(f0)if(M.layerUpdates.size>0){let M0=oK(o.width,o.height,M.format,M.type);for(let x0 of M.layerUpdates){let a0=o.data.subarray(x0*M0/o.data.BYTES_PER_ELEMENT,(x0+1)*M0/o.data.BYTES_PER_ELEMENT);Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,x0,o.width,o.height,1,G0,w,a0)}M.clearLayerUpdates()}else Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,o.width,o.height,o.depth,G0,w,o.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,0,s,o.width,o.height,o.depth,0,G0,w,o.data);else if(M.isData3DTexture)if(H0){if(O0)Z.texStorage3D(J.TEXTURE_3D,S0,s,o.width,o.height,o.depth);if(f0)Z.texSubImage3D(J.TEXTURE_3D,0,0,0,0,o.width,o.height,o.depth,G0,w,o.data)}else Z.texImage3D(J.TEXTURE_3D,0,s,o.width,o.height,o.depth,0,G0,w,o.data);else if(M.isFramebufferTexture){if(O0)if(H0)Z.texStorage2D(J.TEXTURE_2D,S0,s,o.width,o.height);else{let{width:M0,height:x0}=o;for(let a0=0;a0<S0;a0++)Z.texImage2D(J.TEXTURE_2D,a0,s,M0,x0,0,G0,w,null),M0>>=1,x0>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in J){let M0=J.canvas;if(!M0.hasAttribute("layoutsubtree"))M0.setAttribute("layoutsubtree","true");if(o.parentNode!==M0){M0.appendChild(o),q.add(M),M0.onpaint=(x0)=>{let a0=x0.changedElements;for(let V0 of q)if(a0.includes(V0.image))V0.needsUpdate=!0},M0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,o);else{let{RGBA:a0,RGBA:V0,UNSIGNED_BYTE:BJ}=J;J.texElementImage2D(J.TEXTURE_2D,0,a0,V0,BJ,o)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(W0.length>0){if(H0&&O0){let M0=xJ(W0[0]);Z.texStorage2D(J.TEXTURE_2D,S0,s,M0.width,M0.height)}for(let M0=0,x0=W0.length;M0<x0;M0++)if(u=W0[M0],H0){if(f0)Z.texSubImage2D(J.TEXTURE_2D,M0,0,0,G0,w,u)}else Z.texImage2D(J.TEXTURE_2D,M0,s,G0,w,u);M.generateMipmaps=!1}else if(H0){if(O0){let M0=xJ(o);Z.texStorage2D(J.TEXTURE_2D,S0,s,M0.width,M0.height)}if(f0)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,G0,w,o)}else Z.texImage2D(J.TEXTURE_2D,0,s,G0,w,o);if(z(M)&&M.mipmapsAutoUpdate===!0)B(Q0);if(E0.__version=U0.version,M.onUpdate)M.onUpdate(M)}_.__version=M.version}function k0(_,M,h){if(M.image.length!==6)return;let Q0=e(_,M),J0=M.source;Z.bindTexture(J.TEXTURE_CUBE_MAP,_.__webglTexture,J.TEXTURE0+h);let U0=K.get(J0);if(J0.version!==U0.__version||Q0===!0){Z.activeTexture(J.TEXTURE0+h);let E0=$J.getPrimaries($J.workingColorSpace),m=M.colorSpace===w8?null:$J.getPrimaries(M.colorSpace),o=M.colorSpace===w8||E0===m?J.NONE:J.BROWSER_DEFAULT_WEBGL;Z.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),Z.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),Z.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment),Z.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,o);let G0=M.isCompressedTexture||M.image[0].isCompressedTexture,w=M.image[0]&&M.image[0].isDataTexture,s=[];for(let V0=0;V0<6;V0++){if(!G0&&!w)s[V0]=k(M.image[V0],!0,$.maxCubemapSize);else s[V0]=w?M.image[V0].image:M.image[V0];s[V0]=n0(M,s[V0])}let u=s[0],W0=W.convert(M.format,M.colorSpace),H0=W.convert(M.type),O0=P(M.internalFormat,W0,H0,M.normalized,M.colorSpace),f0=M.isVideoTexture!==!0,S0=U0.__version===void 0||Q0===!0,M0=J0.dataReady,x0=V(M,u);WJ(J.TEXTURE_CUBE_MAP,M);let a0;if(M.isDepthTexture){if(O0=D(M.format===N8,M.type),S0)if(f0)Z.texStorage2D(J.TEXTURE_CUBE_MAP,1,O0,u.width,u.height);else for(let V0=0;V0<6;V0++)Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+V0,0,O0,u.width,u.height,0,W0,H0,null)}else if(G0){if(f0&&S0)Z.texStorage2D(J.TEXTURE_CUBE_MAP,x0,O0,u.width,u.height);for(let V0=0;V0<6;V0++){a0=s[V0].mipmaps;for(let BJ=0;BJ<a0.length;BJ++){let mJ=a0[BJ];if(M.format!==i9)if(W0!==null)if(f0){if(M0)Z.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+V0,BJ,0,0,mJ.width,mJ.height,W0,mJ.data)}else Z.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+V0,BJ,O0,mJ.width,mJ.height,0,mJ.data);else c0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(f0){if(M0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+V0,BJ,0,0,mJ.width,mJ.height,W0,H0,mJ.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+V0,BJ,O0,mJ.width,mJ.height,0,W0,H0,mJ.data)}}}else{if(a0=M.mipmaps,f0&&S0){if(a0.length>0)x0++;let V0=xJ(s[0]);Z.texStorage2D(J.TEXTURE_CUBE_MAP,x0,O0,V0.width,V0.height)}for(let V0=0;V0<6;V0++)if(w){if(f0){if(M0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+V0,0,0,0,s[V0].width,s[V0].height,W0,H0,s[V0].data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+V0,0,O0,s[V0].width,s[V0].height,0,W0,H0,s[V0].data);for(let BJ=0;BJ<a0.length;BJ++){let x9=a0[BJ].image[V0].image;if(f0){if(M0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+V0,BJ+1,0,0,x9.width,x9.height,W0,H0,x9.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+V0,BJ+1,O0,x9.width,x9.height,0,W0,H0,x9.data)}}else{if(f0){if(M0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+V0,0,0,0,W0,H0,s[V0])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+V0,0,O0,W0,H0,s[V0]);for(let BJ=0;BJ<a0.length;BJ++){let mJ=a0[BJ];if(f0){if(M0)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+V0,BJ+1,0,0,W0,H0,mJ.image[V0])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+V0,BJ+1,O0,W0,H0,mJ.image[V0])}}}if(z(M)&&M.mipmapsAutoUpdate===!0)B(J.TEXTURE_CUBE_MAP);if(U0.__version=J0.version,M.onUpdate)M.onUpdate(M)}_.__version=M.version}function p0(_,M,h,Q0,J0,U0){let E0=W.convert(h.format,h.colorSpace),m=W.convert(h.type),o=P(h.internalFormat,E0,m,h.normalized,h.colorSpace),G0=K.get(M),w=K.get(h);if(w.__renderTarget=M,!G0.__hasExternalTextures){let s=Math.max(1,M.width>>U0),u=Math.max(1,M.height>>U0);if(J0===J.TEXTURE_3D||J0===J.TEXTURE_2D_ARRAY)Z.texImage3D(J0,U0,o,s,u,M.depth,0,E0,m,null);else Z.texImage2D(J0,U0,o,s,u,0,E0,m,null)}if(Z.bindFramebuffer(J.FRAMEBUFFER,_),DJ(M))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,Q0,J0,w.__webglTexture,0,D0(M));else if(J0===J.TEXTURE_2D||J0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&J0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,Q0,J0,w.__webglTexture,U0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}function y0(_,M,h){if(J.bindRenderbuffer(J.RENDERBUFFER,_),M.depthBuffer){let Q0=M.depthTexture,J0=Q0&&Q0.isDepthTexture?Q0.type:null,U0=D(M.stencilBuffer,J0),E0=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(DJ(M))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,D0(M),U0,M.width,M.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,D0(M),U0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,U0,M.width,M.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,E0,J.RENDERBUFFER,_)}else{let Q0=M.textures;for(let J0=0;J0<Q0.length;J0++){let U0=Q0[J0],E0=W.convert(U0.format,U0.colorSpace),m=W.convert(U0.type),o=P(U0.internalFormat,E0,m,U0.normalized,U0.colorSpace);if(DJ(M))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,D0(M),o,M.width,M.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,D0(M),o,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,o,M.width,M.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function e0(_,M,h){let Q0=M.isWebGLCubeRenderTarget===!0;if(Z.bindFramebuffer(J.FRAMEBUFFER,_),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J0=K.get(M.depthTexture);J0.__renderTarget=M;let U0=Q0?M.depthTexture.image[0]:M.depthTexture.image;if(!J0.__webglTexture||U0.width!==M.width||U0.height!==M.height)U0.width=M.width,U0.height=M.height,M.depthTexture.needsUpdate=!0;if(Q0)L0(M.depthTexture,0);else C0(M.depthTexture,0);let E0=J0.__webglTexture,m=D0(M),o=Q0?J.TEXTURE_CUBE_MAP_POSITIVE_X+h:J.TEXTURE_2D,G0=M.depthTexture.format===N8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(M.depthTexture.format===R7)if(DJ(M))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,G0,o,E0,0,m);else J.framebufferTexture2D(J.FRAMEBUFFER,G0,o,E0,0);else if(M.depthTexture.format===N8)if(DJ(M))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,G0,o,E0,0,m);else J.framebufferTexture2D(J.FRAMEBUFFER,G0,o,E0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function JJ(_){let M=K.get(_),h=_.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==_.depthTexture){let Q0=_.depthTexture;if(M.__depthDisposeCallback)M.__depthDisposeCallback();if(Q0){let J0=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q0.removeEventListener("dispose",J0)};Q0.addEventListener("dispose",J0),M.__depthDisposeCallback=J0}M.__boundDepthTexture=Q0}if(_.depthTexture&&!M.__autoAllocateDepthBuffer)if(h)for(let Q0=0;Q0<6;Q0++)e0(M.__webglFramebuffer[Q0],_,Q0);else if(_.texture.mipmaps.length>0)e0(M.__webglFramebuffer[0],_,0);else e0(M.__webglFramebuffer,_,0);else if(h){M.__webglDepthbuffer=[];for(let Q0=0;Q0<6;Q0++)if(Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[Q0]),M.__webglDepthbuffer[Q0]===void 0)M.__webglDepthbuffer[Q0]=J.createRenderbuffer(),y0(M.__webglDepthbuffer[Q0],_,!1);else{let J0=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=M.__webglDepthbuffer[Q0];J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,J0,J.RENDERBUFFER,U0)}}else{if(_.texture.mipmaps.length>0)Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[0]);else Z.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer);if(M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=J.createRenderbuffer(),y0(M.__webglDepthbuffer,_,!1);else{let J0=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,U0=M.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,U0),J.framebufferRenderbuffer(J.FRAMEBUFFER,J0,J.RENDERBUFFER,U0)}}Z.bindFramebuffer(J.FRAMEBUFFER,null)}function qJ(_,M,h){let Q0=K.get(_);if(M!==void 0)p0(Q0.__webglFramebuffer,_,_.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(h!==void 0)JJ(_)}function y(_){let M=_.texture,h=K.get(_),Q0=K.get(M);_.addEventListener("dispose",p),I(_);let J0=_.textures,U0=_.isWebGLCubeRenderTarget===!0,E0=J0.length>1;if(!E0){if(Q0.__webglTexture===void 0)Q0.__webglTexture=J.createTexture();Q0.__version=M.version,Y.memory.textures++}if(U0){h.__webglFramebuffer=[];for(let m=0;m<6;m++)if(M.mipmaps.length>0){h.__webglFramebuffer[m]=[];for(let o=0;o<M.mipmaps.length;o++)h.__webglFramebuffer[m][o]=J.createFramebuffer()}else h.__webglFramebuffer[m]=J.createFramebuffer()}else{if(M.mipmaps.length>0){h.__webglFramebuffer=[];for(let m=0;m<M.mipmaps.length;m++)h.__webglFramebuffer[m]=J.createFramebuffer()}else h.__webglFramebuffer=J.createFramebuffer();if(E0)for(let m=0,o=J0.length;m<o;m++){let G0=K.get(J0[m]);if(G0.__webglTexture===void 0)G0.__webglTexture=J.createTexture(),Y.memory.textures++}if(_.samples>0&&DJ(_)===!1){h.__webglMultisampledFramebuffer=J.createFramebuffer(),h.__webglColorRenderbuffer=[],Z.bindFramebuffer(J.FRAMEBUFFER,h.__webglMultisampledFramebuffer);for(let m=0;m<J0.length;m++){let o=J0[m];h.__webglColorRenderbuffer[m]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,h.__webglColorRenderbuffer[m]);let G0=W.convert(o.format,o.colorSpace),w=W.convert(o.type),s=P(o.internalFormat,G0,w,o.normalized,o.colorSpace,_.isXRRenderTarget===!0),u=D0(_);J.renderbufferStorageMultisample(J.RENDERBUFFER,u,s,_.width,_.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+m,J.RENDERBUFFER,h.__webglColorRenderbuffer[m])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),_.depthBuffer)h.__webglDepthRenderbuffer=J.createRenderbuffer(),y0(h.__webglDepthRenderbuffer,_,!0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}}if(U0){Z.bindTexture(J.TEXTURE_CUBE_MAP,Q0.__webglTexture),WJ(J.TEXTURE_CUBE_MAP,M);for(let m=0;m<6;m++)if(M.mipmaps.length>0)for(let o=0;o<M.mipmaps.length;o++)p0(h.__webglFramebuffer[m][o],_,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+m,o);else p0(h.__webglFramebuffer[m],_,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+m,0);if(z(M))B(J.TEXTURE_CUBE_MAP);else if(M.mipmaps.length>0)J.texParameteri(J.TEXTURE_CUBE_MAP,J.TEXTURE_MAX_LEVEL,M.mipmaps.length-1);Z.unbindTexture()}else if(E0){for(let m=0,o=J0.length;m<o;m++){let G0=J0[m],w=K.get(G0),s=J.TEXTURE_2D;if(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)s=_.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(s,w.__webglTexture),WJ(s,G0),p0(h.__webglFramebuffer,_,G0,J.COLOR_ATTACHMENT0+m,s,0),z(G0))B(s)}Z.unbindTexture()}else{let m=J.TEXTURE_2D;if(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)m=_.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(m,Q0.__webglTexture),WJ(m,M),M.mipmaps.length>0)for(let o=0;o<M.mipmaps.length;o++)p0(h.__webglFramebuffer[o],_,M,J.COLOR_ATTACHMENT0,m,o);else p0(h.__webglFramebuffer,_,M,J.COLOR_ATTACHMENT0,m,0);if(z(M))B(m);else if(M.mipmaps.length>0)J.texParameteri(m,J.TEXTURE_MAX_LEVEL,M.mipmaps.length-1);Z.unbindTexture()}if(_.depthBuffer)JJ(_)}function bJ(_){let M=_.textures;for(let h=0,Q0=M.length;h<Q0;h++){let J0=M[h];if(z(J0)&&J0.mipmapsAutoUpdate===!0){let U0=C(_),E0=K.get(J0).__webglTexture;Z.bindTexture(U0,E0),B(U0),Z.unbindTexture()}}}let o0=[];function vJ(_){if(_.samples>0){if(DJ(_)===!1){let{textures:M,width:h,height:Q0}=_,J0=J.COLOR_BUFFER_BIT,U0=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,E0=K.get(_),m=M.length>1;if(m)for(let G0=0;G0<M.length;G0++)Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+G0,J.RENDERBUFFER,null),Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+G0,J.TEXTURE_2D,null,0);if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,E0.__webglMultisampledFramebuffer),_.texture.mipmaps.length>0)Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglFramebuffer[0]);else Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglFramebuffer);for(let G0=0;G0<M.length;G0++){if(_.resolveDepthBuffer){if(_.depthBuffer)J0|=J.DEPTH_BUFFER_BIT;if(_.stencilBuffer&&_.resolveStencilBuffer)J0|=J.STENCIL_BUFFER_BIT}if(m){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,E0.__webglColorRenderbuffer[G0]);let w=K.get(M[G0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,w,0)}if(J.blitFramebuffer(0,0,h,Q0,0,0,h,Q0,J0,J.NEAREST),H===!0){if(o0.length=0,o0.push(J.COLOR_ATTACHMENT0+G0),_.depthBuffer&&_.storeMultisampledDepthBuffer===!1)o0.push(U0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,o0)}}if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,null),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),m)for(let G0=0;G0<M.length;G0++){Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+G0,J.RENDERBUFFER,E0.__webglColorRenderbuffer[G0]);let w=K.get(M[G0]).__webglTexture;Z.bindFramebuffer(J.FRAMEBUFFER,E0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+G0,J.TEXTURE_2D,w,0)}Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.storeMultisampledDepthBuffer===!1&&H){let M=_.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[M])}}}function D0(_){return Math.min($.maxSamples,_.samples)}function DJ(_){let M=K.get(_);return _.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function m0(_){let M=Y.render.frame;if(N.get(_)!==M)N.set(_,M),_.update()}function n0(_,M){let{colorSpace:h,format:Q0,type:J0}=_;if(_.isCompressedTexture===!0||_.isVideoTexture===!0)return M;if(h!==EK&&h!==w8)if($J.getTransfer(h)===zJ){if(Q0!==i9||J0!==P9)c0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else u0("WebGLTextures: Unsupported texture color space:",h);return M}function xJ(_){if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement)U.width=_.naturalWidth||_.width,U.height=_.naturalHeight||_.height;else if(typeof VideoFrame<"u"&&_ instanceof VideoFrame)U.width=_.displayWidth,U.height=_.displayHeight;else U.width=_.width,U.height=_.height;return U}this.allocateTextureUnit=i,this.resetTextureUnits=r,this.getTextureUnits=K0,this.setTextureUnits=z0,this.setTexture2D=C0,this.setTexture2DArray=h0,this.setTexture3D=b0,this.setTextureCube=L0,this.rebindTextures=qJ,this.setupRenderTarget=y,this.updateRenderTargetMipmap=bJ,this.updateMultisampleRenderTarget=vJ,this.setupDepthRenderbuffer=JJ,this.setupFrameBufferTexture=p0,this.useMultisampledRTT=DJ,this.dispose=c}function xq(J,Q){function Z(K,$=w8){let W,Y=$J.getTransfer($);if(K===P9)return J.UNSIGNED_BYTE;if(K===SZ)return J.UNSIGNED_SHORT_4_4_4_4;if(K===jZ)return J.UNSIGNED_SHORT_5_5_5_1;if(K===iW)return J.UNSIGNED_INT_5_9_9_9_REV;if(K===oW)return J.UNSIGNED_INT_10F_11F_11F_REV;if(K===nW)return J.BYTE;if(K===sW)return J.SHORT;if(K===s7)return J.UNSIGNED_SHORT;if(K===wZ)return J.INT;if(K===U8)return J.UNSIGNED_INT;if(K===s9)return J.FLOAT;if(K===j9)return J.HALF_FLOAT;if(K===aW)return J.ALPHA;if(K===rW)return J.RGB;if(K===i9)return J.RGBA;if(K===R7)return J.DEPTH_COMPONENT;if(K===N8)return J.DEPTH_STENCIL;if(K===tW)return J.RED;if(K===vZ)return J.RED_INTEGER;if(K===T8)return J.RG;if(K===yZ)return J.RG_INTEGER;if(K===fZ)return J.RGBA_INTEGER;if(K===e6||K===JQ||K===QQ||K===ZQ)if(Y===zJ)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(K===e6)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(K===JQ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(K===QQ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(K===ZQ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(K===e6)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(K===JQ)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(K===QQ)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(K===ZQ)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(K===hZ||K===bZ||K===xZ||K===gZ)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(K===hZ)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(K===bZ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(K===xZ)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(K===gZ)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(K===pZ||K===lZ||K===mZ||K===dZ||K===uZ||K===KQ||K===cZ)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(K===pZ||K===lZ)return Y===zJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(K===mZ)return Y===zJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(K===dZ)return W.COMPRESSED_R11_EAC;if(K===uZ)return W.COMPRESSED_SIGNED_R11_EAC;if(K===KQ)return W.COMPRESSED_RG11_EAC;if(K===cZ)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(K===nZ||K===sZ||K===iZ||K===oZ||K===aZ||K===rZ||K===tZ||K===eZ||K===JK||K===QK||K===ZK||K===KK||K===$K||K===WK)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(K===nZ)return Y===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(K===sZ)return Y===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(K===iZ)return Y===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(K===oZ)return Y===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(K===aZ)return Y===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(K===rZ)return Y===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(K===tZ)return Y===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(K===eZ)return Y===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(K===JK)return Y===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(K===QK)return Y===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(K===ZK)return Y===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(K===KK)return Y===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(K===$K)return Y===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(K===WK)return Y===zJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(K===YK||K===XK||K===HK)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(K===YK)return Y===zJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(K===XK)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(K===HK)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(K===UK||K===NK||K===$Q||K===GK)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(K===UK)return W.COMPRESSED_RED_RGTC1_EXT;if(K===NK)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(K===$Q)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(K===GK)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(K===I8)return J.UNSIGNED_INT_24_8;return J[K]!==void 0?J[K]:null}return{convert:Z}}var gq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pq=`
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

}`;class XX{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let Z=new DQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=Z}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,Z=new t9({vertexShader:gq,fragmentShader:pq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new AJ(new y9(20,20),Z)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HX extends o9{constructor(J,Q){super();let Z=this,K=null,$=1,W=null,Y="local-floor",X=1,H=null,U=null,N=null,q=null,G=null,F=null,R=typeof XRWebGLBinding<"u",A=new XX,O={},E=Q.getContextAttributes(),k=null,z=null,B=[],C=[],P=new Z0,D=null,V=null,I=new D9;I.viewport=new SJ;let f=new D9;f.viewport=new SJ;let S=[I,f],p=new nK,t=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(i){let $0=B[i];if($0===void 0)$0=new a7,B[i]=$0;return $0.getTargetRaySpace()},this.getControllerGrip=function(i){let $0=B[i];if($0===void 0)$0=new a7,B[i]=$0;return $0.getGripSpace()},this.getHand=function(i){let $0=B[i];if($0===void 0)$0=new a7,B[i]=$0;return $0.getHandSpace()};function c(i){let $0=C.indexOf(i.inputSource);if($0===-1)return;let C0=B[$0];if(C0!==void 0)C0.update(i.inputSource,i.frame,H||W),C0.dispatchEvent({type:i.type,data:i.inputSource})}function n(){K.removeEventListener("select",c),K.removeEventListener("selectstart",c),K.removeEventListener("selectend",c),K.removeEventListener("squeeze",c),K.removeEventListener("squeezestart",c),K.removeEventListener("squeezeend",c),K.removeEventListener("end",n),K.removeEventListener("inputsourceschange",x);for(let i=0;i<B.length;i++){let $0=C[i];if($0===null)continue;C[i]=null,B[i].disconnect($0)}t=null,T=null,A.reset();for(let i in O)delete O[i];if(J.setRenderTarget(k),G=null,q=null,N=null,K=null,z=null,z0.stop(),Z.isPresenting=!1,J.setPixelRatio(D),J.setSize(P.width,P.height,!1),V!==null){let i=V.camera;i.fov=V.fov,i.zoom=V.zoom,i.updateProjectionMatrix(),V=null}Z.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(i){if($=i,Z.isPresenting===!0)c0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(i){if(Y=i,Z.isPresenting===!0)c0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function(i){H=i},this.getBaseLayer=function(){return q!==null?q:G},this.getBinding=function(){if(N===null&&R)N=new XRWebGLBinding(K,Q);return N},this.getFrame=function(){return F},this.getSession=function(){return K},this.setSession=async function(i){if(K=i,K!==null){if(k=J.getRenderTarget(),K.addEventListener("select",c),K.addEventListener("selectstart",c),K.addEventListener("selectend",c),K.addEventListener("squeeze",c),K.addEventListener("squeezestart",c),K.addEventListener("squeezeend",c),K.addEventListener("end",n),K.addEventListener("inputsourceschange",x),E.xrCompatible!==!0)await Q.makeXRCompatible();if(D=J.getPixelRatio(),J.getSize(P),!(R&&("createProjectionLayer"in XRWebGLBinding.prototype))){let C0={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:$};G=new XRWebGLLayer(K,Q,C0),K.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),z=new V9(G.framebufferWidth,G.framebufferHeight,{format:i9,type:P9,colorSpace:J.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let C0=null,h0=null,b0=null;if(E.depth)b0=E.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,C0=E.stencil?N8:R7,h0=E.stencil?I8:U8;let L0={colorFormat:Q.RGBA8,depthFormat:b0,scaleFactor:$};N=this.getBinding(),q=N.createProjectionLayer(L0),K.updateRenderState({layers:[q]}),J.setPixelRatio(1),J.setSize(q.textureWidth,q.textureHeight,!1),z=new V9(q.textureWidth,q.textureHeight,{format:i9,type:P9,depthTexture:new F8(q.textureWidth,q.textureHeight,h0,void 0,void 0,void 0,void 0,void 0,void 0,C0),stencilBuffer:E.stencil,colorSpace:J.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1,storeMultisampledDepthBuffer:q.ignoreDepthValues===!1,storeMultisampledStencilBuffer:q.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(X),H=null,W=await K.requestReferenceSpace(Y),z0.setContext(K),z0.start(),Z.isPresenting=!0,Z.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(K!==null)return K.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function x(i){for(let $0=0;$0<i.removed.length;$0++){let C0=i.removed[$0],h0=C.indexOf(C0);if(h0>=0)C[h0]=null,B[h0].disconnect(C0)}for(let $0=0;$0<i.added.length;$0++){let C0=i.added[$0],h0=C.indexOf(C0);if(h0===-1){for(let L0=0;L0<B.length;L0++)if(L0>=C.length){C.push(C0),h0=L0;break}else if(C[L0]===null){C[L0]=C0,h0=L0;break}if(h0===-1)break}let b0=B[h0];if(b0)b0.connect(C0)}}function Y0(i,$0){if($0===null)i.matrixWorld.copy(i.matrix);else i.matrixWorld.multiplyMatrices($0.matrixWorld,i.matrix);i.matrixWorldInverse.copy(i.matrixWorld).invert()}this.updateCamera=function(i){if(K===null)return;let{near:$0,far:C0}=i;if(A.texture!==null){if(A.depthNear>0)$0=A.depthNear;if(A.depthFar>0)C0=A.depthFar}if(p.near=f.near=I.near=$0,p.far=f.far=I.far=C0,t!==p.near||T!==p.far)K.updateRenderState({depthNear:p.near,depthFar:p.far}),t=p.near,T=p.far;p.layers.mask=i.layers.mask|6,I.layers.mask=p.layers.mask&-5,f.layers.mask=p.layers.mask&-3;let h0=i.parent,b0=p.cameras;Y0(p,h0);for(let L0=0;L0<b0.length;L0++)Y0(b0[L0],h0);if(p.projectionMatrix.copy(I.projectionMatrix),p.projectionMatrixInverse.copy(I.projectionMatrixInverse),V===null&&i.isPerspectiveCamera)V={camera:i,fov:i.fov,zoom:i.zoom};d(i,p,h0)};function d(i,$0,C0){if(C0===null)i.matrix.copy($0.matrixWorld);else i.matrix.copy(C0.matrixWorld),i.matrix.invert(),i.matrix.multiply($0.matrixWorld);if(i.matrix.decompose(i.position,i.quaternion,i.scale),i.updateMatrixWorld(!0),i.projectionMatrix.copy($0.projectionMatrix),i.projectionMatrixInverse.copy($0.projectionMatrixInverse),i.isPerspectiveCamera)i.fov=c6*2*Math.atan(1/i.projectionMatrix.elements[5]),i.zoom=1}this.getCamera=function(){return p},this.getFoveation=function(){if(q===null&&G===null)return;return X},this.setFoveation=function(i){if(X=i,q!==null)q.fixedFoveation=i;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=i},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(p)},this.getCameraTexture=function(i){return O[i]};let r=null;function K0(i,$0){if(U=$0.getViewerPose(H||W),F=$0,U!==null){let C0=U.views;if(G!==null)J.setRenderTargetFramebuffer(z,G.framebuffer),J.setRenderTarget(z);let h0=!1;if(C0.length!==p.cameras.length)p.cameras.length=0,h0=!0;for(let r0=0;r0<C0.length;r0++){let d0=C0[r0],WJ=null;if(G!==null)WJ=G.getViewport(d0);else{let X0=N.getViewSubImage(q,d0);if(WJ=X0.viewport,r0===0)J.setRenderTargetTextures(z,X0.colorTexture,X0.depthStencilTexture),J.setRenderTarget(z)}let e=S[r0];if(e===void 0)e=new D9,e.layers.enable(r0),e.viewport=new SJ,S[r0]=e;if(e.matrix.fromArray(d0.transform.matrix),e.matrix.decompose(e.position,e.quaternion,e.scale),e.projectionMatrix.fromArray(d0.projectionMatrix),e.projectionMatrixInverse.copy(e.projectionMatrix).invert(),e.viewport.set(WJ.x,WJ.y,WJ.width,WJ.height),r0===0)p.matrix.copy(e.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale);if(h0===!0)p.cameras.push(e)}let b0=K.enabledFeatures;if(b0&&b0.includes("depth-sensing")&&K.depthUsage=="gpu-optimized"&&R){N=Z.getBinding();let r0=N.getDepthInformation(C0[0]);if(r0&&r0.isValid&&r0.texture)A.init(r0,K.renderState)}if(b0&&b0.includes("camera-access")&&R){J.state.unbindTexture(),N=Z.getBinding();for(let r0=0;r0<C0.length;r0++){let d0=C0[r0].camera;if(d0){let WJ=O[d0];if(!WJ)WJ=new DQ,O[d0]=WJ;let e=N.getCameraImage(d0);WJ.sourceTexture=e}}}}for(let C0=0;C0<B.length;C0++){let h0=C[C0],b0=B[C0];if(h0!==null&&b0!==void 0)b0.update(h0,$0,H||W)}if(r)r(i,$0);if($0.detectedPlanes)Z.dispatchEvent({type:"planesdetected",data:$0});F=null}let z0=new nY;z0.setAnimationLoop(K0),this.setAnimationLoop=function(i){r=i},this.dispose=function(){}}}var lq=new HJ,UX=new s0;UX.set(-1,0,0,0,1,0,0,0,1);function mq(J,Q){function Z(O,E){if(O.matrixAutoUpdate===!0)O.updateMatrix();E.value.copy(O.matrix)}function K(O,E){if(E.color.getRGB(O.fogColor.value,SK(J)),E.isFog)O.fogNear.value=E.near,O.fogFar.value=E.far;else if(E.isFogExp2)O.fogDensity.value=E.density}function $(O,E,k,z,B){if(E.isNodeMaterial)E.uniformsNeedUpdate=!1;else if(E.isMeshBasicMaterial)W(O,E);else if(E.isMeshLambertMaterial){if(W(O,E),E.envMap)O.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshToonMaterial)W(O,E),q(O,E);else if(E.isMeshPhongMaterial){if(W(O,E),N(O,E),E.envMap)O.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshStandardMaterial){if(W(O,E),G(O,E),E.isMeshPhysicalMaterial)F(O,E,B)}else if(E.isMeshMatcapMaterial)W(O,E),R(O,E);else if(E.isMeshDepthMaterial)W(O,E);else if(E.isMeshDistanceMaterial)W(O,E),A(O,E);else if(E.isMeshNormalMaterial)W(O,E);else if(E.isLineBasicMaterial){if(Y(O,E),E.isLineDashedMaterial)X(O,E)}else if(E.isPointsMaterial)H(O,E,k,z);else if(E.isSpriteMaterial)U(O,E);else if(E.isShadowMaterial)O.color.value.copy(E.color),O.opacity.value=E.opacity;else if(E.isShaderMaterial)E.uniformsNeedUpdate=!1}function W(O,E){if(O.opacity.value=E.opacity,E.color)O.diffuse.value.copy(E.color);if(E.emissive)O.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity);if(E.map)O.map.value=E.map,Z(E.map,O.mapTransform);if(E.alphaMap)O.alphaMap.value=E.alphaMap,Z(E.alphaMap,O.alphaMapTransform);if(E.bumpMap){if(O.bumpMap.value=E.bumpMap,Z(E.bumpMap,O.bumpMapTransform),O.bumpScale.value=E.bumpScale,E.side===H9)O.bumpScale.value*=-1}if(E.normalMap){if(O.normalMap.value=E.normalMap,Z(E.normalMap,O.normalMapTransform),O.normalScale.value.copy(E.normalScale),E.side===H9)O.normalScale.value.negate()}if(E.displacementMap)O.displacementMap.value=E.displacementMap,Z(E.displacementMap,O.displacementMapTransform),O.displacementScale.value=E.displacementScale,O.displacementBias.value=E.displacementBias;if(E.emissiveMap)O.emissiveMap.value=E.emissiveMap,Z(E.emissiveMap,O.emissiveMapTransform);if(E.specularMap)O.specularMap.value=E.specularMap,Z(E.specularMap,O.specularMapTransform);if(E.alphaTest>0)O.alphaTest.value=E.alphaTest;let k=Q.get(E),z=k.envMap,B=k.envMapRotation;if(z){if(O.envMap.value=z,O.envMapRotation.value.setFromMatrix4(lq.makeRotationFromEuler(B)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1)O.envMapRotation.value.premultiply(UX);O.reflectivity.value=E.reflectivity,O.ior.value=E.ior,O.refractionRatio.value=E.refractionRatio}if(E.lightMap)O.lightMap.value=E.lightMap,O.lightMapIntensity.value=E.lightMapIntensity,Z(E.lightMap,O.lightMapTransform);if(E.aoMap)O.aoMap.value=E.aoMap,O.aoMapIntensity.value=E.aoMapIntensity,Z(E.aoMap,O.aoMapTransform)}function Y(O,E){if(O.diffuse.value.copy(E.color),O.opacity.value=E.opacity,E.map)O.map.value=E.map,Z(E.map,O.mapTransform)}function X(O,E){O.dashSize.value=E.dashSize,O.totalSize.value=E.dashSize+E.gapSize,O.scale.value=E.scale}function H(O,E,k,z){if(O.diffuse.value.copy(E.color),O.opacity.value=E.opacity,O.size.value=E.size*k,O.scale.value=z*0.5,E.map)O.map.value=E.map,Z(E.map,O.uvTransform);if(E.alphaMap)O.alphaMap.value=E.alphaMap,Z(E.alphaMap,O.alphaMapTransform);if(E.alphaTest>0)O.alphaTest.value=E.alphaTest}function U(O,E){if(O.diffuse.value.copy(E.color),O.opacity.value=E.opacity,O.rotation.value=E.rotation,E.map)O.map.value=E.map,Z(E.map,O.mapTransform);if(E.alphaMap)O.alphaMap.value=E.alphaMap,Z(E.alphaMap,O.alphaMapTransform);if(E.alphaTest>0)O.alphaTest.value=E.alphaTest}function N(O,E){O.specular.value.copy(E.specular),O.shininess.value=Math.max(E.shininess,0.0001)}function q(O,E){if(E.gradientMap)O.gradientMap.value=E.gradientMap}function G(O,E){if(O.metalness.value=E.metalness,E.metalnessMap)O.metalnessMap.value=E.metalnessMap,Z(E.metalnessMap,O.metalnessMapTransform);if(O.roughness.value=E.roughness,E.roughnessMap)O.roughnessMap.value=E.roughnessMap,Z(E.roughnessMap,O.roughnessMapTransform);if(E.envMap)O.envMapIntensity.value=E.envMapIntensity}function F(O,E,k){if(O.ior.value=E.ior,E.diffuseRoughness>0){if(O.diffuseRoughness.value=E.diffuseRoughness,E.diffuseRoughnessMap)O.diffuseRoughnessMap.value=E.diffuseRoughnessMap,Z(E.diffuseRoughnessMap,O.diffuseRoughnessMapTransform)}if(E.sheen>0){if(O.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),O.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap)O.sheenColorMap.value=E.sheenColorMap,Z(E.sheenColorMap,O.sheenColorMapTransform);if(E.sheenRoughnessMap)O.sheenRoughnessMap.value=E.sheenRoughnessMap,Z(E.sheenRoughnessMap,O.sheenRoughnessMapTransform)}if(E.clearcoat>0){if(O.clearcoat.value=E.clearcoat,O.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap)O.clearcoatMap.value=E.clearcoatMap,Z(E.clearcoatMap,O.clearcoatMapTransform);if(E.clearcoatRoughnessMap)O.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,Z(E.clearcoatRoughnessMap,O.clearcoatRoughnessMapTransform);if(E.clearcoatNormalMap){if(O.clearcoatNormalMap.value=E.clearcoatNormalMap,Z(E.clearcoatNormalMap,O.clearcoatNormalMapTransform),O.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===H9)O.clearcoatNormalScale.value.negate()}}if(E.dispersion>0)O.dispersion.value=E.dispersion;if(E.retroreflectivity>0)O.retroreflectivity.value=E.retroreflectivity;if(E.iridescence>0){if(O.iridescence.value=E.iridescence,O.iridescenceIOR.value=E.iridescenceIOR,O.iridescenceThicknessMinimum.value=E.iridescenceThicknessMinimum,O.iridescenceThicknessMaximum.value=E.iridescenceThicknessMaximum,E.iridescenceMap)O.iridescenceMap.value=E.iridescenceMap,Z(E.iridescenceMap,O.iridescenceMapTransform);if(E.iridescenceThicknessMap)O.iridescenceThicknessMap.value=E.iridescenceThicknessMap,Z(E.iridescenceThicknessMap,O.iridescenceThicknessMapTransform)}if(E.transmission>0){if(O.transmission.value=E.transmission,O.transmissionSamplerMap.value=k.texture,O.transmissionSamplerSize.value.set(k.width,k.height),E.transmissionMap)O.transmissionMap.value=E.transmissionMap,Z(E.transmissionMap,O.transmissionMapTransform);if(O.thickness.value=E.thickness,E.thicknessMap)O.thicknessMap.value=E.thicknessMap,Z(E.thicknessMap,O.thicknessMapTransform);O.attenuationDistance.value=E.attenuationDistance,O.attenuationColor.value.copy(E.attenuationColor)}if(E.anisotropy>0){if(O.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap)O.anisotropyMap.value=E.anisotropyMap,Z(E.anisotropyMap,O.anisotropyMapTransform)}if(O.specularIntensity.value=E.specularIntensity,O.specularColor.value.copy(E.specularColor),E.specularColorMap)O.specularColorMap.value=E.specularColorMap,Z(E.specularColorMap,O.specularColorMapTransform);if(E.specularIntensityMap)O.specularIntensityMap.value=E.specularIntensityMap,Z(E.specularIntensityMap,O.specularIntensityMapTransform)}function R(O,E){if(E.matcap)O.matcap.value=E.matcap}function A(O,E){let k=Q.get(E).light;O.referencePosition.value.setFromMatrixPosition(k.matrixWorld),O.nearDistance.value=k.shadow.camera.near,O.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:K,refreshMaterialUniforms:$}}function dq(J,Q,Z,K){let $={},W={};function Y(k,z){let B=z.program;K.uniformBlockBinding(k,B,$[k.id])}function X(k,z){let B=$[k.id];if(B===void 0)R(k),B=H(k),$[k.id]=B,k.addEventListener("dispose",O);let C=z.program;K.updateUBOMapping(k,C);let P=Q.render.frame;if(W[k.id]!==P)U(k),W[k.id]=P}function H(k){let z=J.createBuffer(),B=k.__size,C=k.usage;return J.bindBuffer(J.UNIFORM_BUFFER,z),J.bufferData(J.UNIFORM_BUFFER,B,C),J.bindBuffer(J.UNIFORM_BUFFER,null),z}function U(k){let z=$[k.id],B=k.uniforms,C=k.__cache;J.bindBuffer(J.UNIFORM_BUFFER,z);for(let P=0,D=B.length;P<D;P++){let V=B[P];if(Array.isArray(V))for(let I=0,f=V.length;I<f;I++)N(V[I],P,I,C);else N(V,P,0,C)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function N(k,z,B,C){if(G(k,z,B,C)===!0){let{__offset:P,value:D}=k;if(Array.isArray(D)){let V=0;for(let I=0;I<D.length;I++){let f=D[I],S=A(f,!0);q(f,k.__data,V),V+=S.storage/Float32Array.BYTES_PER_ELEMENT}}else q(D,k.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,P,k.__data)}}function q(k,z,B){if(typeof k==="number"||typeof k==="boolean")z[B]=k;else if(k.isMatrix3)z[B]=k.elements[0],z[B+1]=k.elements[1],z[B+2]=k.elements[2],z[B+3]=0,z[B+4]=k.elements[3],z[B+5]=k.elements[4],z[B+6]=k.elements[5],z[B+7]=0,z[B+8]=k.elements[6],z[B+9]=k.elements[7],z[B+10]=k.elements[8],z[B+11]=0;else if(ArrayBuffer.isView(k))z.set(k.subarray(0,z.length-B),B);else k.toArray(z,B)}function G(k,z,B,C){let P=k.value,D=z+"_"+B;if(Array.isArray(P)){if(C[D]===void 0)C[D]=[];let V=C[D],I=!1;for(let f=0;f<P.length;f++)if(F(P[f],V,f)===!0)I=!0;return I}return F(P,C,D)}function F(k,z,B){if(z[B]===void 0){if(typeof k==="number"||typeof k==="boolean")z[B]=k;else if(ArrayBuffer.isView(k))z[B]=k.slice();else z[B]=k.clone();return!0}else{let C=z[B];if(typeof k==="number"||typeof k==="boolean"){if(C!==k)return z[B]=k,!0}else if(ArrayBuffer.isView(k))return!0;else if(C.equals(k)===!1)return C.copy(k),!0}return!1}function R(k){let z=k.uniforms,B=0,C=16;for(let D=0,V=z.length;D<V;D++){let I=Array.isArray(z[D])?z[D]:[z[D]];for(let f=0,S=I.length;f<S;f++){let p=I[f],t=Array.isArray(p.value)?p.value:[p.value],T=Array.isArray(z[D])||Array.isArray(p.value),c=B;for(let x=0,Y0=t.length;x<Y0;x++){let d=t[x],r=A(d,T),K0=B%C,z0=K0%r.boundary,i=K0+z0;if(B+=z0,i!==0&&C-i<r.storage)B+=C-i;if(x===0)c=B;B+=r.storage}let n=p.type==="int"?Int32Array:p.type==="uint"?Uint32Array:Float32Array;p.__data=new n((B-c)/Float32Array.BYTES_PER_ELEMENT),p.__offset=c}}let P=B%C;if(P>0)B+=C-P;return k.__size=B,k.__cache={},this}function A(k,z){let B={boundary:0,storage:0};if(typeof k==="number"||typeof k==="boolean")B.boundary=4,B.storage=4;else if(k.isVector2)B.boundary=8,B.storage=8;else if(k.isVector3||k.isColor)B.boundary=16,B.storage=12;else if(k.isVector4)B.boundary=16,B.storage=16;else if(k.isMatrix3)B.boundary=16,B.storage=48;else if(k.isMatrix4)B.boundary=16,B.storage=64;else if(k.isTexture)c0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(k))B.boundary=16,B.storage=k.byteLength;else c0("WebGLRenderer: Unsupported uniform value type.",k);if(z===!0)B.boundary=16,B.storage=Math.ceil(B.storage/16)*16;return B}function O(k){let z=k.target;z.removeEventListener("dispose",O),J.deleteBuffer($[z.id]),delete $[z.id],delete W[z.id]}function E(){for(let k in $)J.deleteBuffer($[k]);$={},W={}}return{bind:Y,update:X,dispose:E}}var uq=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),f9=null;function cq(){if(f9===null)f9=new GQ(uq,16,16,T8,j9),f9.name="DFG_LUT",f9.minFilter=R9,f9.magFilter=R9,f9.wrapS=r6,f9.wrapT=r6,f9.generateMipmaps=!1,f9.needsUpdate=!0;return f9}class eK{constructor(J={}){let{canvas:Q=WY(),context:Z=null,depth:K=!0,stencil:$=!1,alpha:W=!1,antialias:Y=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:q=!1,outputBufferType:G=P9}=J;this.isWebGLRenderer=!0;let F;if(Z!==null){if(typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");F=Z.getContextAttributes().alpha}else F=W;let R=G,A=new Set([fZ,yZ,vZ]),O=new Set([P9,U8,s7,I8,SZ,jZ]),E=new Uint32Array(4),k=new Int32Array(4),z={textures:[],min:[],max:[],resolution:[]},B=null,C=null,P=[],D=[],V=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=S9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,f=!1,S=null,p=null,t=null,T=null;this._outputColorSpace=M9;let c=0,n=0,x=null,Y0=-1,d=null,r=new SJ,K0=new SJ,z0=null,i=new v0(0),$0=0,C0=Q.width,h0=Q.height,b0=1,L0=null,YJ=null,r0=new SJ(0,0,C0,h0),d0=new SJ(0,0,C0,h0),WJ=!1,e=new C8,X0=new EQ,N0=!1,A0=!1,k0=new HJ,p0=new v,y0=new SJ,e0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},JJ=!1;function qJ(){return x===null?b0:1}let y=Z;function bJ(L,j){return Q.getContext(L,j)}let o0,vJ,D0,DJ,m0,n0,xJ,_,M,h,Q0,J0,U0,E0,m,o,G0,w,s,u,W0,H0,O0;try{let L={alpha:!0,depth:K,stencil:$,antialias:Y,premultipliedAlpha:X,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${NW}`);if(Q.addEventListener("webglcontextlost",M0,!1),Q.addEventListener("webglcontextrestored",x0,!1),Q.addEventListener("webglcontextcreationerror",a0,!1),y===null){if(y=bJ("webgl2",L),y===null)if(bJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}f0()}catch(L){throw Q.removeEventListener("webglcontextlost",M0,!1),Q.removeEventListener("webglcontextrestored",x0,!1),Q.removeEventListener("webglcontextcreationerror",a0,!1),u0("WebGLRenderer: "+L.message),L}function f0(){if(o0=new ZG(y),o0.init(),W0=new xq(y,o0),vJ=new cN(y,o0,J,W0),D0=new hq(y,o0),vJ.reversedDepthBuffer&&q)D0.buffers.depth.setReversed(!0);p=y.createFramebuffer(),t=y.createFramebuffer(),T=y.createFramebuffer(),DJ=new WG(y),m0=new kq,n0=new bq(y,o0,D0,m0,vJ,W0,DJ),xJ=new QG(I),_=new XU(y),H0=new dN(y,_),M=new KG(y,_,DJ,H0),h=new XG(y,M,_,H0,DJ),w=new YG(y,vJ,n0),m=new nN(m0),Q0=new Lq(I,xJ,o0,vJ,H0,m),J0=new mq(I,m0),U0=new Aq,E0=new wq(o0),G0=new mN(I,xJ,D0,h,F,X),o=new fq(I,h,vJ),O0=new dq(y,DJ,vJ,D0),s=new uN(y,o0,DJ),u=new $G(y,o0,DJ),DJ.programs=Q0.programs,I.capabilities=vJ,I.extensions=o0,I.properties=m0,I.renderLists=U0,I.shadowMap=o,I.state=D0,I.info=DJ}if(R!==P9)V=new UG(R,Q.width,Q.height,Y,K,$);let S0=new HX(I,y);this.xr=S0,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){let L=o0.get("WEBGL_lose_context");if(L)L.loseContext()},this.forceContextRestore=function(){let L=o0.get("WEBGL_lose_context");if(L)L.restoreContext()},this.getPixelRatio=function(){return b0},this.setPixelRatio=function(L){if(L===void 0)return;b0=L,this.setSize(C0,h0,!1)},this.getSize=function(L){return L.set(C0,h0)},this.setSize=function(L,j,l=!0){if(S0.isPresenting){c0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(C0=L,h0=j,Q.width=Math.floor(L*b0),Q.height=Math.floor(j*b0),l===!0)Q.style.width=L+"px",Q.style.height=j+"px";if(V!==null)V.setSize(Q.width,Q.height);this.setViewport(0,0,L,j)},this.getDrawingBufferSize=function(L){return L.set(C0*b0,h0*b0).floor()},this.setDrawingBufferSize=function(L,j,l){C0=L,h0=j,b0=l,Q.width=Math.floor(L*l),Q.height=Math.floor(j*l),this.setViewport(0,0,L,j)},this.setEffects=function(L){if(R===P9){u0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let j=0;j<L.length;j++)if(L[j].isOutputPass===!0){c0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(r)},this.getViewport=function(L){return L.copy(r0)},this.setViewport=function(L,j,l,b){if(L.isVector4)r0.set(L.x,L.y,L.z,L.w);else r0.set(L,j,l,b);D0.viewport(r.copy(r0).multiplyScalar(qJ()).round())},this.getScissor=function(L){return L.copy(d0)},this.setScissor=function(L,j,l,b){if(L.isVector4)d0.set(L.x,L.y,L.z,L.w);else d0.set(L,j,l,b);D0.scissor(K0.copy(d0).multiplyScalar(qJ()).round())},this.getScissorTest=function(){return WJ},this.setScissorTest=function(L){D0.setScissorTest(WJ=L)},this.setOpaqueSort=function(L){L0=L},this.setTransparentSort=function(L){YJ=L},this.getClearColor=function(L){return L.copy(G0.getClearColor())},this.setClearColor=function(){G0.setClearColor(...arguments)},this.getClearAlpha=function(){return G0.getClearAlpha()},this.setClearAlpha=function(){G0.setClearAlpha(...arguments)},this.clear=function(L=!0,j=!0,l=!0){let b=0;if(L){let g=!1;if(x!==null){let F0=x.texture.format;g=A.has(F0)}if(g){let F0=x.texture.type,_0=O.has(F0),q0=G0.getClearColor(),B0=G0.getClearAlpha(),w0=q0.r,i0=q0.g,ZJ=q0.b;if(_0)E[0]=w0,E[1]=i0,E[2]=ZJ,E[3]=B0,y.clearBufferuiv(y.COLOR,0,E);else k[0]=w0,k[1]=i0,k[2]=ZJ,k[3]=B0,y.clearBufferiv(y.COLOR,0,k)}else b|=y.COLOR_BUFFER_BIT}if(j)b|=y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(l)b|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(b!==0)y.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),S=L},this.dispose=function(){Q.removeEventListener("webglcontextlost",M0,!1),Q.removeEventListener("webglcontextrestored",x0,!1),Q.removeEventListener("webglcontextcreationerror",a0,!1),G0.dispose(),U0.dispose(),E0.dispose(),n0.dispose(),m0.dispose(),xJ.dispose(),h.dispose(),M.dispose(),H0.dispose(),O0.dispose(),Q0.dispose(),S0.dispose(),S0.removeEventListener("sessionstart",R$),S0.removeEventListener("sessionend",M$),R8.stop()};function M0(L){L.preventDefault(),x7("WebGLRenderer: Context Lost."),f=!0}function x0(){x7("WebGLRenderer: Context Restored."),f=!1;let L=DJ.autoReset,j=o.enabled,l=o.autoUpdate,b=o.needsUpdate,g=o.type;f0(),DJ.autoReset=L,o.enabled=j,o.autoUpdate=l,o.needsUpdate=b,o.type=g}function a0(L){u0("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function V0(L){let j=L.target;j.removeEventListener("dispose",V0),BJ(j)}function BJ(L){mJ(L),m0.remove(L)}function mJ(L){let j=m0.get(L).programs;if(j!==void 0){if(j.forEach(function(l){Q0.releaseProgram(l)}),L.isShaderMaterial)Q0.releaseShaderCache(L)}}this.renderBufferDirect=function(L,j,l,b,g,F0){if(j===null)j=e0;let _0=g.isMesh&&g.matrixWorld.determinantAffine()<0,q0=aX(L,j,l,b,g);D0.setMaterial(b,_0);let B0=l.index,w0=1;if(b.wireframe===!0){if(B0=M.getWireframeAttribute(l),B0===void 0)return;w0=2}let i0=l.drawRange,ZJ=l.attributes.position,P0=i0.start*w0,KJ=(i0.start+i0.count)*w0;if(F0!==null)P0=Math.max(P0,F0.start*w0),KJ=Math.min(KJ,(F0.start+F0.count)*w0);if(B0!==null)P0=Math.max(P0,0),KJ=Math.min(KJ,B0.count);else if(ZJ!==void 0&&ZJ!==null)P0=Math.max(P0,0),KJ=Math.min(KJ,ZJ.count);let yJ=KJ-P0;if(yJ<0||yJ===1/0)return;H0.setup(g,b,q0,l,B0);let _J,kJ=s;if(B0!==null)_J=_.get(B0),kJ=u,kJ.setIndex(_J);if(g.isMesh)if(b.wireframe===!0)D0.setLineWidth(b.wireframeLinewidth*qJ()),kJ.setMode(y.LINES);else kJ.setMode(y.TRIANGLES);else if(g.isLine){let rJ=b.linewidth;if(rJ===void 0)rJ=1;if(D0.setLineWidth(rJ*qJ()),g.isLineSegments)kJ.setMode(y.LINES);else if(g.isLineLoop)kJ.setMode(y.LINE_LOOP);else kJ.setMode(y.LINE_STRIP)}else if(g.isPoints)kJ.setMode(y.POINTS);else if(g.isSprite)kJ.setMode(y.TRIANGLES);if(g.isBatchedMesh)if(!o0.get("WEBGL_multi_draw")){let{_multiDrawStarts:rJ,_multiDrawCounts:I0,_multiDrawCount:$9}=g,EJ=B0?_.get(B0).bytesPerElement:1,M8=m0.get(b).currentProgram.getUniforms();for(let tJ=0;tJ<$9;tJ++)M8.setValue(y,"_gl_DrawID",tJ),kJ.render(rJ[tJ]/EJ,I0[tJ])}else kJ.renderMultiDraw(g._multiDrawStarts,g._multiDrawCounts,g._multiDrawCount);else if(g.isInstancedMesh)kJ.renderInstances(P0,yJ,g.count);else if(l.isInstancedBufferGeometry){let rJ=l._maxInstanceCount!==void 0?l._maxInstanceCount:1/0,I0=Math.min(l.instanceCount,rJ);kJ.renderInstances(P0,yJ,I0)}else kJ.render(P0,yJ)};function x9(L,j,l,b){if(S!==null&&L.isNodeMaterial)S.setObject(b,L);if(N0===!0)m.setState(L,l,!1);if(L.transparent===!0&&L.side===oJ&&L.forceSinglePass===!1)L.side=H9,L.needsUpdate=!0,A7(L,j,b),L.side=F7,L.needsUpdate=!0,A7(L,j,b),L.side=oJ;else A7(L,j,b)}this.compile=function(L,j,l=null){if(l===null)l=L;if(S!==null)S.renderStart(L,j,l);if(C=E0.get(l),C.init(j),D.push(C),l.traverseVisible(function(g){if(g.isLight&&g.layers.test(j.layers)){if(C.pushLight(g),g.castShadow)C.pushShadow(g)}}),L!==l)L.traverseVisible(function(g){if(g.isLight&&g.layers.test(j.layers)){if(C.pushLight(g),g.castShadow)C.pushShadow(g)}});if(C.setupLights(),S!==null)S.updateLights(C.state.lightsArray);if(A0=this.localClippingEnabled,N0=m.init(this.clippingPlanes,A0),N0===!0)m.setGlobalState(this.clippingPlanes,j);if(S!==null)o.render(C.state.shadowsArray,l,j);let b=new Set;if(L.traverse(function(g){if(!(g.isMesh||g.isPoints||g.isLine||g.isSprite))return;let F0=g.material;if(F0)if(Array.isArray(F0))for(let _0=0;_0<F0.length;_0++){let q0=F0[_0];x9(q0,l,j,g),b.add(q0)}else x9(F0,l,j,g),b.add(F0)}),C=D.pop(),S!==null)S.renderEnd();return b},this.compileAsync=function(L,j,l=null){let b=this.compile(L,j,l);return new Promise((g)=>{function F0(){if(b.forEach(function(_0){let B0=m0.get(_0).currentProgram;if(B0===void 0||B0.isReady())b.delete(_0)}),b.size===0){g(L);return}setTimeout(F0,10)}if(o0.get("KHR_parallel_shader_compile")!==null)F0();else setTimeout(F0,10)})};let pQ=null;function iX(L){if(pQ)pQ(L)}function R$(){R8.stop()}function M$(){R8.start()}let R8=new nY;if(R8.setAnimationLoop(iX),typeof self<"u")R8.setContext(self);this.setAnimationLoop=function(L){pQ=L,S0.setAnimationLoop(L),L===null?R8.stop():R8.start()},S0.addEventListener("sessionstart",R$),S0.addEventListener("sessionend",M$),this.render=function(L,j){if(j!==void 0&&j.isCamera!==!0){u0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;if(S!==null)S.renderStart(L,j);let l=S0.enabled===!0&&S0.isPresenting===!0,b=V!==null&&(x===null||l)&&V.begin(I,x);if(L.matrixWorldAutoUpdate===!0)L.updateMatrixWorld();if(j.parent===null&&j.matrixWorldAutoUpdate===!0)j.updateMatrixWorld();if(S0.enabled===!0&&S0.isPresenting===!0&&(V===null||V.isCompositing()===!1)){if(S0.cameraAutoUpdate===!0)S0.updateCamera(j);j=S0.getCamera()}if(L.isScene===!0)L.onBeforeRender(I,L,j,x);if(C=E0.get(L,D.length),C.init(j),C.state.textureUnits=n0.getTextureUnits(),D.push(C),k0.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),j.isArrayCamera)X0.setFromArrayCamera(j);else e.setFromProjectionMatrix(k0,VK,j.reversedDepth);if(A0=this.localClippingEnabled,N0=m.init(this.clippingPlanes,A0),B=U0.get(L,P.length),B.init(),P.push(B),this.info.render.frame++,S0.enabled===!0&&S0.isPresenting===!0){let _0=I.xr.getDepthSensingMesh();if(_0!==null)lQ(_0,j,-1/0,I.sortObjects)}if(lQ(L,j,0,I.sortObjects),B.finish(),S!==null)S.updateLights(C.state.lightsArray);if(I.sortObjects===!0)B.sort(L0,YJ);if(JJ=S0.enabled===!1||S0.isPresenting===!1||S0.hasDepthSensing()===!1,JJ)G0.addToRenderList(B,L);if(this.info.autoReset===!0)this.info.reset();if(N0===!0)m.beginShadows();let g=C.state.shadowsArray;if(o.render(g,L,j),N0===!0)m.endShadows();if((b&&V.hasRenderPass())===!1){let{opaque:_0,transmissive:q0}=B;if(C.setupLights(),j.isArrayCamera){let B0=j.cameras;if(q0.length>0)for(let w0=0,i0=B0.length;w0<i0;w0++){let ZJ=B0[w0];B$(_0,q0,L,ZJ)}if(JJ)G0.render(L);for(let w0=0,i0=B0.length;w0<i0;w0++){let ZJ=B0[w0];V$(B,L,ZJ,ZJ.viewport)}}else{if(q0.length>0)B$(_0,q0,L,j);if(JJ)G0.render(L);V$(B,L,j)}}if(x!==null&&n===0)n0.updateMultisampleRenderTarget(x),n0.updateRenderTargetMipmap(x);if(b)V.end(I);if(L.isScene===!0)L.onAfterRender(I,L,j);if(H0.resetDefaultState(),Y0=-1,d=null,D.pop(),D.length>0){if(C=D[D.length-1],n0.setTextureUnits(C.state.textureUnits),N0===!0)m.setGlobalState(I.clippingPlanes,C.state.camera)}else C=null;if(P.pop(),P.length>0)B=P[P.length-1];else B=null;if(S!==null)S.renderEnd()};function lQ(L,j,l,b){if(L.visible===!1)return;if(L.layers.test(j.layers)){if(L.isGroup)l=L.renderOrder;else if(L.isLOD){if(L.autoUpdate===!0)L.update(j)}else if(L.isLight){if(C.pushLight(L),L.castShadow)C.pushShadow(L)}else if(L.isSprite){let _0=j.isArrayCamera?X0:e;if(!L.frustumCulled||L.intersectsFrustum(_0)){if(b)y0.setFromMatrixPosition(L.matrixWorld).applyMatrix4(k0);let q0=h.update(L),B0=L.material;if(B0.visible)B.push(L,q0,B0,l,y0.z,null,j)}}else if(L.isMesh||L.isLine||L.isPoints){let _0=j.isArrayCamera?X0:e;if(!L.frustumCulled||L.intersectsFrustum(_0)){let q0=h.update(L),B0=L.material;if(b){if(L.boundingSphere!==void 0){if(L.boundingSphere===null)L.computeBoundingSphere();y0.copy(L.boundingSphere.center)}else{if(q0.boundingSphere===null)q0.computeBoundingSphere();y0.copy(q0.boundingSphere.center)}y0.applyMatrix4(L.matrixWorld).applyMatrix4(k0)}if(Array.isArray(B0)){let w0=q0.groups;for(let i0=0,ZJ=w0.length;i0<ZJ;i0++){let P0=w0[i0],KJ=B0[P0.materialIndex];if(KJ&&KJ.visible)B.push(L,q0,KJ,l,y0.z,P0,j)}}else if(B0.visible)B.push(L,q0,B0,l,y0.z,null,j)}}}let F0=L.children;for(let _0=0,q0=F0.length;_0<q0;_0++)lQ(F0[_0],j,l,b)}function V$(L,j,l,b){let{opaque:g,transmissive:F0,transparent:_0}=L;if(C.setupLightsView(l),N0===!0)m.setGlobalState(I.clippingPlanes,l);if(b)D0.viewport(r.copy(b));if(g.length>0)D6(g,j,l);if(F0.length>0)D6(F0,j,l);if(_0.length>0)D6(_0,j,l);D0.buffers.depth.setTest(!0),D0.buffers.depth.setMask(!0),D0.buffers.color.setMask(!0),D0.setPolygonOffset(!1)}function B$(L,j,l,b){if((l.isScene===!0?l.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[b.id]===void 0){let P0=o0.has("EXT_color_buffer_half_float")||o0.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[b.id]=new V9(1,1,{generateMipmaps:!0,type:P0?j9:P9,minFilter:H8,samples:Math.max(4,vJ.samples),stencilBuffer:$,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$J.workingColorSpace})}let F0=C.state.transmissionRenderTarget[b.id],_0=b.viewport||r;F0.setSize(_0.z*I.transmissionResolutionScale,_0.w*I.transmissionResolutionScale);let q0=I.getRenderTarget(),B0=I.getActiveCubeFace(),w0=I.getActiveMipmapLevel();if(I.setRenderTarget(F0),I.getClearColor(i),$0=I.getClearAlpha(),$0<1)I.setClearColor(16777215,0.5);if(I.clear(),JJ)G0.render(l);let i0=I.toneMapping;I.toneMapping=S9;let ZJ=b.viewport;if(b.viewport!==void 0)b.viewport=void 0;if(C.setupLightsView(b),N0===!0)m.setGlobalState(I.clippingPlanes,b);if(D6(L,l,b),n0.updateMultisampleRenderTarget(F0),n0.updateRenderTargetMipmap(F0),o0.has("WEBGL_multisampled_render_to_texture")===!1){let P0=!1;for(let KJ=0,yJ=j.length;KJ<yJ;KJ++){let _J=j[KJ],{object:kJ,geometry:rJ,material:I0,group:$9}=_J;if(I0.side===oJ&&kJ.layers.test(b.layers)){let EJ=I0.side;I0.side=H9,I0.needsUpdate=!0,L$(kJ,l,b,rJ,I0,$9),I0.side=EJ,I0.needsUpdate=!0,P0=!0}}if(P0===!0)n0.updateMultisampleRenderTarget(F0),n0.updateRenderTargetMipmap(F0)}if(I.setRenderTarget(q0,B0,w0),I.setClearColor(i,$0),ZJ!==void 0)b.viewport=ZJ;I.toneMapping=i0}function D6(L,j,l){let b=j.isScene===!0?j.overrideMaterial:null;for(let g=0,F0=L.length;g<F0;g++){let _0=L[g],{object:q0,geometry:B0,group:w0}=_0,i0=_0.material;if(i0.allowOverride===!0&&b!==null)i0=b;if(q0.layers.test(l.layers))L$(q0,j,l,B0,i0,w0)}}function L$(L,j,l,b,g,F0){if(S!==null&&g.isNodeMaterial)S.setObject(L,g);if(L.onBeforeRender(I,j,l,b,g,F0),L.modelViewMatrix.multiplyMatrices(l.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),g.onBeforeRender(I,j,l,b,L,F0),g.transparent===!0&&g.side===oJ&&g.forceSinglePass===!1)g.side=H9,g.needsUpdate=!0,I.renderBufferDirect(l,j,b,g,L,F0),g.side=F7,g.needsUpdate=!0,I.renderBufferDirect(l,j,b,g,L,F0),g.side=oJ;else I.renderBufferDirect(l,j,b,g,L,F0);L.onAfterRender(I,j,l,b,g,F0)}function k$(L){let j=0;for(let l of L)if(l.texture!==null)j++;return j}function A7(L,j,l){if(j.isScene!==!0)j=e0;let b=m0.get(L),g=C.state.lights,F0=C.state.shadowsArray,_0=g.state.version,q0=Q0.getParameters(L,g.state,F0,j,l,C.state.lightProbeGridArray),B0=Q0.getProgramCacheKey(q0),w0=b.programs;b.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?j.environment:null,b.fog=j.fog;let i0=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;if(b.envMap=xJ.get(L.envMap||b.environment,i0),b.envMapRotation=b.environment!==null&&L.envMap===null?j.environmentRotation:L.envMapRotation,w0===void 0)L.addEventListener("dispose",V0),w0=new Map,b.programs=w0,b.programVariants=new Map;let ZJ=w0.get(B0);if(ZJ!==void 0){if(b.currentProgram===ZJ&&b.lightsStateVersion===_0)return A$(L,q0),ZJ}else{if(q0.uniforms=Q0.getUniforms(L),S!==null&&L.isNodeMaterial)S.build(L,l,q0);L.onBeforeCompile(q0,I),ZJ=Q0.acquireProgram(q0,B0),w0.set(B0,ZJ),b.uniforms=q0.uniforms}let P0=b.uniforms;if(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)P0.clippingPlanes=m.uniform;if(A$(L,q0),b.needsLights=tX(L),b.lightsStateVersion=_0,b.needsLights)P0.ambientLightColor.value=g.state.ambient,P0.lightProbe.value=g.state.probe,P0.sunLights.value=g.state.sun,P0.sunLightShadows.value=g.state.sunShadow,P0.directionalLights.value=g.state.directional,P0.directionalLightShadows.value=g.state.directionalShadow,P0.spotLights.value=g.state.spot,P0.spotLightShadows.value=g.state.spotShadow,P0.rectAreaLights.value=g.state.rectArea,P0.ltc_1.value=g.state.rectAreaLTC1,P0.ltc_2.value=g.state.rectAreaLTC2,P0.pointLights.value=g.state.point,P0.pointLightShadows.value=g.state.pointShadow,P0.hemisphereLights.value=g.state.hemi,P0.sunShadowMatrix.value=g.state.sunShadowMatrix,P0.sunShadowCascade.value=g.state.sunShadowCascade,P0.directionalShadowMatrix.value=g.state.directionalShadowMatrix,P0.spotLightMatrix.value=g.state.spotLightMatrix,P0.spotLightMap.value=g.state.spotLightMap,P0.pointShadowMatrix.value=g.state.pointShadowMatrix;return b.numLightProbeGrids=k$(C.state.lightProbeGridArray),b.currentProgram=ZJ,b.uniformsList=null,ZJ}function oX(L,j,l,b,g){let F0=m0.get(L),_0=F0.currentProgram.id+","+b+","+g,q0=F0.programVariants.get(_0);if(q0===void 0)q0=A7(L,j,l),F0.programVariants.set(_0,q0);else F0.currentProgram=q0,F0.uniformsList=null,F0.outputColorSpace=b,F0.toneMapping=g;return q0}function z$(L){if(L.uniformsList===null){let j=L.currentProgram.getUniforms();L.uniformsList=U6.seqWithValue(j.seq,L.uniforms)}return L.uniformsList}function A$(L,j){let l=m0.get(L);l.outputColorSpace=j.outputColorSpace,l.batching=j.batching,l.batchingColor=j.batchingColor,l.instancing=j.instancing,l.instancingColor=j.instancingColor,l.instancingMorph=j.instancingMorph,l.skinning=j.skinning,l.morphTargets=j.morphTargets,l.morphNormals=j.morphNormals,l.morphColors=j.morphColors,l.morphTargetsCount=j.morphTargetsCount,l.numClippingPlanes=j.numClippingPlanes,l.numIntersection=j.numClipIntersection,l.vertexAlphas=j.vertexAlphas,l.vertexTangents=j.vertexTangents,l.toneMapping=j.toneMapping}function aX(L,j,l,b,g){if(j.isScene!==!0)j=e0;n0.resetTextureUnits();let F0=j.fog,_0=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?j.environment:null,q0=x===null?I.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:$J.workingColorSpace,B0=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,w0=xJ.get(b.envMap||_0,B0),i0=b.vertexColors===!0&&!!l.attributes.color&&l.attributes.color.itemSize===4,ZJ=!!l.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),P0=!!l.morphAttributes.position,KJ=!!l.morphAttributes.normal,yJ=!!l.morphAttributes.color,_J=S9;if(b.toneMapped){if(x===null||x.isXRRenderTarget===!0)_J=I.toneMapping}let kJ=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,rJ=kJ!==void 0?kJ.length:0,I0=m0.get(b),$9=C.state.lights;if(N0===!0){if(A0===!0||L!==d){let TJ=L===d&&b.id===Y0;m.setState(b,L,TJ)}}let EJ=!1,M8=!1;if(b.version===I0.__version){if(I0.needsLights&&I0.lightsStateVersion!==$9.state.version)EJ=!0;else if(g.isBatchedMesh&&I0.batching===!1)EJ=!0;else if(!g.isBatchedMesh&&I0.batching===!0)EJ=!0;else if(g.isBatchedMesh&&I0.batchingColor===!0&&g._colorsTexture===null)EJ=!0;else if(g.isBatchedMesh&&I0.batchingColor===!1&&g._colorsTexture!==null)EJ=!0;else if(g.isInstancedMesh&&I0.instancing===!1)EJ=!0;else if(!g.isInstancedMesh&&I0.instancing===!0)EJ=!0;else if(g.isSkinnedMesh&&I0.skinning===!1)EJ=!0;else if(!g.isSkinnedMesh&&I0.skinning===!0)EJ=!0;else if(g.isInstancedMesh&&I0.instancingColor===!0&&g.instanceColor===null)EJ=!0;else if(g.isInstancedMesh&&I0.instancingColor===!1&&g.instanceColor!==null)EJ=!0;else if(g.isInstancedMesh&&I0.instancingMorph===!0&&g.morphTexture===null)EJ=!0;else if(g.isInstancedMesh&&I0.instancingMorph===!1&&g.morphTexture!==null)EJ=!0;else if(I0.envMap!==w0)EJ=!0;else if(b.fog===!0&&I0.fog!==F0)EJ=!0;else if(I0.numClippingPlanes!==void 0&&(I0.numClippingPlanes!==m.numPlanes||I0.numIntersection!==m.numIntersection))EJ=!0;else if(I0.vertexAlphas!==i0)EJ=!0;else if(I0.vertexTangents!==ZJ)EJ=!0;else if(I0.morphTargets!==P0)EJ=!0;else if(I0.morphNormals!==KJ)EJ=!0;else if(I0.morphColors!==yJ)EJ=!0;else if(I0.morphTargetsCount!==rJ)EJ=!0;else if(I0.numLightProbeGrids!==k$(C.state.lightProbeGridArray))EJ=!0;else if(I0.outputColorSpace!==q0||I0.toneMapping!==_J)M8=!0}else EJ=!0,I0.__version=b.version;let tJ=I0.currentProgram;if(EJ===!0||M8===!0){if(tJ=M8===!0?oX(b,j,g,q0,_J):A7(b,j,g),S&&b.isNodeMaterial)S.onUpdateProgram(b,tJ,I0)}let R6=!1,Q8=!1,V8=!1,XJ=tJ.getUniforms(),iJ=I0.uniforms;if(D0.useProgram(tJ.program))R6=!0,Q8=!0,V8=!0;if(b.id!==Y0)Y0=b.id,Q8=!0;if(R6||d!==L){if(D0.buffers.depth.getReversed()&&L.reversedDepth!==!0)L._reversedDepth=!0,L.updateProjectionMatrix();XJ.setValue(y,"projectionMatrix",L.projectionMatrix),XJ.setValue(y,"viewMatrix",L.matrixWorldInverse);let dJ=XJ.map.cameraPosition;if(dJ!==void 0)dJ.setValue(y,p0.setFromMatrixPosition(L.matrixWorld));if(vJ.logarithmicDepthBuffer)XJ.setValue(y,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2));if(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)XJ.setValue(y,"isOrthographic",L.isOrthographicCamera===!0);if(d!==L)d=L,Q8=!0,V8=!0}if(I0.needsLights){if($9.state.sunShadowMap.length>0)XJ.setValue(y,"sunShadowMap",$9.state.sunShadowMap,n0);if($9.state.directionalShadowMap.length>0)XJ.setValue(y,"directionalShadowMap",$9.state.directionalShadowMap,n0);if($9.state.spotShadowMap.length>0)XJ.setValue(y,"spotShadowMap",$9.state.spotShadowMap,n0);if($9.state.pointShadowMap.length>0)XJ.setValue(y,"pointShadowMap",$9.state.pointShadowMap,n0)}if(g.isSkinnedMesh){XJ.setOptional(y,g,"bindMatrix"),XJ.setOptional(y,g,"bindMatrixInverse");let TJ=g.skeleton;if(TJ){if(TJ.boneTexture===null)TJ.computeBoneTexture();XJ.setValue(y,"boneTexture",TJ.boneTexture,n0)}}if(g.isBatchedMesh){if(XJ.setOptional(y,g,"batchingTexture"),XJ.setValue(y,"batchingTexture",g._matricesTexture,n0),XJ.setOptional(y,g,"batchingIdTexture"),XJ.setValue(y,"batchingIdTexture",g._indirectTexture,n0),XJ.setOptional(y,g,"batchingColorTexture"),g._colorsTexture!==null)XJ.setValue(y,"batchingColorTexture",g._colorsTexture,n0)}let k9=l.morphAttributes;if(k9.position!==void 0||k9.normal!==void 0||k9.color!==void 0)w.update(g,l,tJ);if(Q8||I0.receiveShadow!==g.receiveShadow)I0.receiveShadow=g.receiveShadow,XJ.setValue(y,"receiveShadow",g.receiveShadow);if((b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial)&&b.envMap===null&&j.environment!==null)iJ.envMapIntensity.value=j.environmentIntensity;if(iJ.dfgLUT!==void 0)iJ.dfgLUT.value=cq();if(Q8){if(XJ.setValue(y,"toneMappingExposure",I.toneMappingExposure),I0.needsLights)rX(iJ,V8);if(F0&&b.fog===!0)J0.refreshFogUniforms(iJ,F0);if(J0.refreshMaterialUniforms(iJ,b,b0,h0,C.state.transmissionRenderTarget[L.id]),I0.needsLights&&I0.numLightProbeGrids>0){let TJ=z,dJ=0;for(let g9 of C.state.lightProbeGridArray){if(g9.texture===null)continue;TJ.textures[dJ]=g9.texture,TJ.min[dJ]=g9.boundingBox.min,TJ.max[dJ]=g9.boundingBox.max,TJ.resolution[dJ]=g9.resolution,dJ++}for(let g9 in TJ)TJ[g9].length=dJ;iJ.probesSH.value=TJ.textures,iJ.probesMin.value=TJ.min,iJ.probesMax.value=TJ.max,iJ.probesResolution.value=TJ.resolution}U6.upload(y,z$(I0),iJ,n0)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0)U6.upload(y,z$(I0),iJ,n0),b.uniformsNeedUpdate=!1;if(b.isSpriteMaterial)XJ.setValue(y,"center",g.center);if(XJ.setValue(y,"modelViewMatrix",g.modelViewMatrix),XJ.setValue(y,"normalMatrix",g.normalMatrix),XJ.setValue(y,"modelMatrix",g.matrixWorld),b.uniformsGroups!==void 0){let TJ=b.uniformsGroups;for(let dJ=0,g9=TJ.length;dJ<g9;dJ++){let _$=TJ[dJ];O0.update(_$,tJ),O0.bind(_$,tJ)}}return tJ}function rX(L,j){L.ambientLightColor.needsUpdate=j,L.lightProbe.needsUpdate=j,L.sunLights.needsUpdate=j,L.sunLightShadows.needsUpdate=j,L.directionalLights.needsUpdate=j,L.directionalLightShadows.needsUpdate=j,L.pointLights.needsUpdate=j,L.pointLightShadows.needsUpdate=j,L.spotLights.needsUpdate=j,L.spotLightShadows.needsUpdate=j,L.rectAreaLights.needsUpdate=j,L.hemisphereLights.needsUpdate=j}function tX(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return c},this.getActiveMipmapLevel=function(){return n},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(L,j,l){let b=m0.get(L);if(b.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,b.__autoAllocateDepthBuffer===!1)b.__useRenderToTexture=!1;m0.get(L.texture).__webglTexture=j,m0.get(L.depthTexture).__webglTexture=b.__autoAllocateDepthBuffer?void 0:l,b.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,j){let l=m0.get(L);l.__webglFramebuffer=j,l.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(L,j=0,l=0){x=L,c=j,n=l;let b=null,g=!1,F0=!1;if(L){let q0=m0.get(L);if(q0.__useDefaultFramebuffer!==void 0){D0.bindFramebuffer(y.FRAMEBUFFER,q0.__webglFramebuffer),r.copy(L.viewport),K0.copy(L.scissor),z0=L.scissorTest,D0.viewport(r),D0.scissor(K0),D0.setScissorTest(z0),Y0=-1;return}else if(q0.__webglFramebuffer===void 0)n0.setupRenderTarget(L);else if(q0.__hasExternalTextures)n0.rebindTextures(L,m0.get(L.texture).__webglTexture,m0.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let i0=L.depthTexture;if(q0.__boundDepthTexture!==i0){if(i0!==null&&m0.has(i0)&&(L.width!==i0.image.width||L.height!==i0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");n0.setupDepthRenderbuffer(L)}}let B0=L.texture;if(B0.isData3DTexture||B0.isDataArrayTexture||B0.isCompressedArrayTexture)F0=!0;let w0=m0.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget){if(Array.isArray(w0[j]))b=w0[j][l];else b=w0[j];g=!0}else if(L.samples>0&&n0.useMultisampledRTT(L)===!1)b=m0.get(L).__webglMultisampledFramebuffer;else if(Array.isArray(w0))b=w0[l];else b=w0;r.copy(L.viewport),K0.copy(L.scissor),z0=L.scissorTest}else r.copy(r0).multiplyScalar(b0).floor(),K0.copy(d0).multiplyScalar(b0).floor(),z0=WJ;if(l!==0)b=p;if(D0.bindFramebuffer(y.FRAMEBUFFER,b))D0.drawBuffers(L,b);if(D0.viewport(r),D0.scissor(K0),D0.setScissorTest(z0),g){let q0=m0.get(L.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+j,q0.__webglTexture,l)}else if(F0){let q0=j;for(let B0=0;B0<L.textures.length;B0++){let w0=m0.get(L.textures[B0]);y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0+B0,w0.__webglTexture,l,q0)}}else if(L!==null&&l!==0){let q0=m0.get(L.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,q0.__webglTexture,l)}Y0=-1};function C$(L){let j=m0.get(L);if(j.__readFormat!==L.format||j.__readType!==L.type)j.__readFormat=L.format,j.__readType=L.type,j.__formatReadable=vJ.textureFormatReadable(L.format),j.__typeReadable=vJ.textureTypeReadable(L.type);return j}if(this.readRenderTargetPixels=function(L,j,l,b,g,F0,_0,q0=0){if(!(L&&L.isWebGLRenderTarget)){u0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let B0=m0.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&_0!==void 0){if(B0=B0[_0],Array.isArray(B0))B0=B0[0]}if(B0){D0.bindFramebuffer(y.FRAMEBUFFER,B0);try{let w0=L.textures[q0],i0=w0.format,ZJ=w0.type;if(L.textures.length>1)y.readBuffer(y.COLOR_ATTACHMENT0+q0);let P0=C$(w0);if(P0.__formatReadable===!1){u0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(P0.__typeReadable===!1){u0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(j>=0&&j<=L.width-b&&(l>=0&&l<=L.height-g))y.readPixels(j,l,b,g,W0.convert(i0),W0.convert(ZJ),F0)}finally{let w0=x!==null?m0.get(x).__webglFramebuffer:null;D0.bindFramebuffer(y.FRAMEBUFFER,w0)}}},this.readRenderTargetPixelsAsync=async function(L,j,l,b,g,F0,_0,q0=0){if(!(L&&L.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let B0=m0.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&_0!==void 0){if(B0=B0[_0],Array.isArray(B0))B0=B0[0]}if(B0)if(j>=0&&j<=L.width-b&&(l>=0&&l<=L.height-g)){D0.bindFramebuffer(y.FRAMEBUFFER,B0);let w0=L.textures[q0],i0=w0.format,ZJ=w0.type;if(L.textures.length>1)y.readBuffer(y.COLOR_ATTACHMENT0+q0);let P0=C$(w0);if(P0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(P0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let KJ=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,KJ),y.bufferData(y.PIXEL_PACK_BUFFER,F0.byteLength,y.STREAM_READ),y.readPixels(j,l,b,g,W0.convert(i0),W0.convert(ZJ),0),y.bindBuffer(y.PIXEL_PACK_BUFFER,null);let yJ=x!==null?m0.get(x).__webglFramebuffer:null;D0.bindFramebuffer(y.FRAMEBUFFER,yJ);let _J=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await XY(y,_J,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,KJ),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,F0),y.bindBuffer(y.PIXEL_PACK_BUFFER,null),y.deleteBuffer(KJ),y.deleteSync(_J),F0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,j=null,l=0){let b=Math.pow(2,-l),g=Math.floor(L.image.width*b),F0=Math.floor(L.image.height*b),_0=j!==null?j.x:0,q0=j!==null?j.y:0;n0.setTexture2D(L,0),y.copyTexSubImage2D(y.TEXTURE_2D,l,0,0,_0,q0,g,F0),D0.unbindTexture()},this.copyTextureToTexture=function(L,j,l=null,b=null,g=0,F0=0){let _0,q0,B0,w0,i0,ZJ,P0,KJ,yJ,_J=L.isCompressedTexture?L.mipmaps[F0]:L.image;if(l!==null)_0=l.max.x-l.min.x,q0=l.max.y-l.min.y,B0=l.isBox3?l.max.z-l.min.z:1,w0=l.min.x,i0=l.min.y,ZJ=l.isBox3?l.min.z:0;else{let XJ=Math.pow(2,-g);if(_0=Math.floor(_J.width*XJ),q0=Math.floor(_J.height*XJ),L.isDataArrayTexture)B0=_J.depth;else if(L.isData3DTexture)B0=Math.floor(_J.depth*XJ);else B0=1;w0=0,i0=0,ZJ=0}if(b!==null)P0=b.x,KJ=b.y,yJ=b.z;else P0=0,KJ=0,yJ=0;let kJ=W0.convert(j.format),rJ=W0.convert(j.type),I0;if(j.isData3DTexture)n0.setTexture3D(j,0),I0=y.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)n0.setTexture2DArray(j,0),I0=y.TEXTURE_2D_ARRAY;else n0.setTexture2D(j,0),I0=y.TEXTURE_2D;D0.activeTexture(y.TEXTURE0),D0.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,j.flipY),D0.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),D0.pixelStorei(y.UNPACK_ALIGNMENT,j.unpackAlignment);let $9=D0.getParameter(y.UNPACK_ROW_LENGTH),EJ=D0.getParameter(y.UNPACK_IMAGE_HEIGHT),M8=D0.getParameter(y.UNPACK_SKIP_PIXELS),tJ=D0.getParameter(y.UNPACK_SKIP_ROWS),R6=D0.getParameter(y.UNPACK_SKIP_IMAGES);D0.pixelStorei(y.UNPACK_ROW_LENGTH,_J.width),D0.pixelStorei(y.UNPACK_IMAGE_HEIGHT,_J.height),D0.pixelStorei(y.UNPACK_SKIP_PIXELS,w0),D0.pixelStorei(y.UNPACK_SKIP_ROWS,i0),D0.pixelStorei(y.UNPACK_SKIP_IMAGES,ZJ);let Q8=L.isDataArrayTexture||L.isData3DTexture,V8=j.isDataArrayTexture||j.isData3DTexture;if(L.isDepthTexture){let XJ=m0.get(L),iJ=m0.get(j),k9=m0.get(XJ.__renderTarget),TJ=m0.get(iJ.__renderTarget);D0.bindFramebuffer(y.READ_FRAMEBUFFER,k9.__webglFramebuffer),D0.bindFramebuffer(y.DRAW_FRAMEBUFFER,TJ.__webglFramebuffer);for(let dJ=0;dJ<B0;dJ++){if(Q8)y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,m0.get(L).__webglTexture,g,ZJ+dJ),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,m0.get(j).__webglTexture,F0,yJ+dJ);y.blitFramebuffer(w0,i0,w0+_0,i0+q0,P0,KJ,P0+_0,KJ+q0,y.DEPTH_BUFFER_BIT,y.NEAREST)}D0.bindFramebuffer(y.READ_FRAMEBUFFER,null),D0.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(g!==0||L.isRenderTargetTexture||m0.has(L)){let XJ=m0.get(L),iJ=m0.get(j);D0.bindFramebuffer(y.READ_FRAMEBUFFER,t),D0.bindFramebuffer(y.DRAW_FRAMEBUFFER,T);for(let k9=0;k9<B0;k9++){if(Q8)y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,XJ.__webglTexture,g,ZJ+k9);else y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,XJ.__webglTexture,g);if(V8)y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,iJ.__webglTexture,F0,yJ+k9);else y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,iJ.__webglTexture,F0);if(g!==0)y.blitFramebuffer(w0,i0,w0+_0,i0+q0,P0,KJ,P0+_0,KJ+q0,y.COLOR_BUFFER_BIT,y.NEAREST);else if(V8)y.copyTexSubImage3D(I0,F0,P0,KJ,yJ+k9,w0,i0,_0,q0);else y.copyTexSubImage2D(I0,F0,P0,KJ,w0,i0,_0,q0)}D0.bindFramebuffer(y.READ_FRAMEBUFFER,null),D0.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(V8)if(L.isDataTexture||L.isData3DTexture)y.texSubImage3D(I0,F0,P0,KJ,yJ,_0,q0,B0,kJ,rJ,_J.data);else if(j.isCompressedArrayTexture)y.compressedTexSubImage3D(I0,F0,P0,KJ,yJ,_0,q0,B0,kJ,_J.data);else y.texSubImage3D(I0,F0,P0,KJ,yJ,_0,q0,B0,kJ,rJ,_J);else if(L.isDataTexture)y.texSubImage2D(y.TEXTURE_2D,F0,P0,KJ,_0,q0,kJ,rJ,_J.data);else if(L.isCompressedTexture)y.compressedTexSubImage2D(y.TEXTURE_2D,F0,P0,KJ,_J.width,_J.height,kJ,_J.data);else y.texSubImage2D(y.TEXTURE_2D,F0,P0,KJ,_0,q0,kJ,rJ,_J);if(D0.pixelStorei(y.UNPACK_ROW_LENGTH,$9),D0.pixelStorei(y.UNPACK_IMAGE_HEIGHT,EJ),D0.pixelStorei(y.UNPACK_SKIP_PIXELS,M8),D0.pixelStorei(y.UNPACK_SKIP_ROWS,tJ),D0.pixelStorei(y.UNPACK_SKIP_IMAGES,R6),F0===0&&j.generateMipmaps===!0&&j.mipmapsAutoUpdate===!0)y.generateMipmap(I0);D0.unbindTexture()},this.initRenderTarget=function(L){if(m0.get(L).__webglFramebuffer===void 0)n0.setupRenderTarget(L)},this.initTexture=function(L){if(L.isCubeTexture)n0.setTextureCube(L,0);else if(L.isData3DTexture)n0.setTexture3D(L,0);else if(L.isDataArrayTexture||L.isCompressedArrayTexture)n0.setTexture2DArray(L,0);else n0.setTexture2D(L,0);D0.unbindTexture()},this.resetState=function(){c=0,n=0,x=null,D0.reset(),H0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return VK}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=$J._getDrawingBufferColorSpace(J),Q.unpackColorSpace=$J._getUnpackColorSpace()}}var PJ={keep:{type:"keep",fa:"قلعهٔ مرکزی",desc:"قلب دهکده؛ نشانهٔ اطاعت نگهبانان و تاج قلمرو توست.",size:[3,3],store:{wood:1500,stone:1500,iron:800,food:1500,coin:900},cost:(J)=>({wood:220*J,stone:260*J,coin:90*J}),timerMs:45000,maxLvl:9},house:{type:"house",fa:"خانهٔ ساکنان",desc:"ساکنان بی‌نام و نشانه نیستند؛ مالیات سکهٔ دهکده از این‌جاست.",size:[2,2],produce:{coin:240},pCap:600,cost:(J)=>({wood:90*J,stone:40*J,coin:25*J}),timerMs:20000,maxLvl:6},farm:{type:"farm",fa:"مزرعه",desc:"گندم و جو؛ سرباز گرسنه نمی‌جنگد و دهکده گرسنه نمی‌سازد.",size:[3,2],produce:{food:300},pCap:700,cost:(J)=>({wood:70*J,coin:30*J}),timerMs:15000,maxLvl:6},lumber:{type:"lumber",fa:"چوب‌بری",desc:"تبر بر تنهٔ جنگل؛ چوب، خونِ هر دیوار و بام است.",size:[2,2],produce:{wood:280},pCap:650,cost:(J)=>({coin:40*J,stone:20*J}),timerMs:15000,maxLvl:6},mine:{type:"mine",fa:"معدن",desc:"از دل سنگ، سنگِ بنا و آهنِ شمشیر بیرون می‌آید.",size:[2,2],produce:{stone:220,iron:90},pCap:600,cost:(J)=>({wood:110*J,coin:45*J}),timerMs:22000,maxLvl:6},storage:{type:"storage",fa:"انبار",desc:"هرچه دهکده می‌آفریند، در سقف انبار ماندگار می‌شود.",size:[2,2],store:{wood:1200,stone:1200,iron:600,food:1200,coin:700},cost:(J)=>({wood:130*J,stone:130*J,coin:35*J}),timerMs:25000,maxLvl:6},barracks:{type:"barracks",fa:"پادگان",desc:"آنجا که دهقان، سرباز می‌شود؛ شمشیر، کمان و نیزه از این دروازه بیرون می‌زنند.",size:[3,2],cost:(J)=>({wood:160*J,stone:120*J,iron:60*J,coin:50*J}),timerMs:30000,maxLvl:6},tower:{type:"tower",fa:"برج تیرانداز",desc:"چشمِ بیدار دهکده؛ تیراندازِ بر بام، پیش از هر تهدید می‌بیند.",size:[2,2],cost:(J)=>({wood:80*J,stone:150*J,iron:40*J}),timerMs:25000,maxLvl:6}},J$={targon:{id:"targon",fa:"تارگون",primary:"#c8102e",accent:"#f5c542",wallCol:15260093,wallCol2:14272678,beamCol:7031340,roofCol:10762031,roofCol2:9186599,stoneCol:12102029,trimCol:5913892,bannerTex:"../gates/assets/flags/targon_cloth.webp",groundTint:"#7fae56",groundDark:"#6a9a47",pathCol:"#c9ab77",waterCol:"#3fa8d5",skyTop:"#ffd9a0",skyBot:"#ffefc9",fogCol:"#ffe3b3",fogNear:70,fogFar:230,sunCol:"#ffdfae",sunPos:[40,55,22],hemiSky:"#ffe9c4",hemiGround:"#7c9a5a",ambient:0.35,outerTint:"#88b05e"},dezhmaar:{id:"dezhmaar",fa:"دژمار",primary:"#1e3a6e",accent:"#7fb2ff",wallCol:10134708,wallCol2:9081766,beamCol:3949396,roofCol:2898518,roofCol2:2371658,stoneCol:8292248,trimCol:3028036,bannerTex:"../gates/assets/flags/dezhmaar_cloth.webp",groundTint:"#5e7d63",groundDark:"#4f6d55",pathCol:"#8f96a3",waterCol:"#3f7fb2",skyTop:"#8fa8c9",skyBot:"#c4d2e2",fogCol:"#b8c6d8",fogNear:55,fogFar:190,sunCol:"#dfe9f5",sunPos:[-35,50,30],hemiSky:"#cfdcee",hemiGround:"#5a6b5e",ambient:0.3,mist:!0,outerTint:"#66806b"}},Q$={w:24,h:24,cell:2},UJ=Q$.w,jJ=Q$.h,NJ=Q$.cell,e9=UJ*NJ,fQ=jJ*NJ,nJ={x0:2,y0:2,x1:UJ-3,y1:jJ-3},aJ=(J)=>String(J).replace(/[0-9]/g,(Q)=>"۰۱۲۳۴۵۶۷۸۹"[+Q]),G6={wood:"چوب",stone:"سنگ",iron:"آهن",food:"غذا",coin:"سکهٔ دهکده"},NX={targon:{init:[[11,11,"keep"],[6,13,"house"],[15,8,"house"],[6,6,"farm"],[16,15,"lumber"],[17,6,"mine"],[9,16,"storage"],[13,5,"barracks"],[8,9,"tower"]],plots:[[9,7],[14,13],[7,16],[16,11],[10,4],[18,13]],decor:7},dezhmaar:{init:[[11,11,"keep"],[7,12,"house"],[14,8,"house"],[6,7,"farm"],[16,14,"lumber"],[18,6,"mine"],[10,16,"storage"],[13,4,"barracks"],[9,8,"tower"],[15,11,"tower"]],plots:[[8,6],[14,16],[6,14],[17,10],[11,18],[19,14]],decor:11}};var GX=(J)=>`lands.village.${J}`,qX=2,q6=()=>({wood:0,stone:0,iron:0,food:0,coin:0}),nq=0,sq=()=>`b${Date.now().toString(36)}${(nq++).toString(36)}`;function Z$(J){let Q=q6();for(let Z of J.buildings){if(Z.doneAt)continue;let K=PJ[Z.type];if(!K.store)continue;Object.keys(K.store).forEach(($)=>{Q[$]+=(K.store[$]??0)*Z.lvl})}if(Q.wood<400)Q.wood=400;if(Q.stone<400)Q.stone=400;if(Q.iron<200)Q.iron=200;if(Q.food<400)Q.food=400;if(Q.coin<300)Q.coin=300;return Q}function hQ(J){let[Q,Z]=PJ[J.type].size;return{w:Q,d:Z}}function iq(J,Q,Z,K,$,W){if(Z<nJ.x0||K<nJ.y0||Z+$-1>nJ.x1||K+W-1>nJ.y1)return!0;for(let Y of J.buildings){if(Y.id===Q)continue;let X=hQ(Y);if(Z<Y.x+X.w&&Y.x<Z+$&&K<Y.y+X.d&&Y.y<K+W)return!0}return!1}function K$(J,Q){let Z=PJ[J.type],K=q6();if(!Z.produce||J.doneAt)return K;let $=Math.max(0,Math.min((Q-J.lastAt)/3600000,8));return Object.keys(Z.produce).forEach((W)=>{K[W]=Math.min(Z.pCap??500,(Z.produce[W]??0)*J.lvl*$)}),K}function $$(J,Q,Z){let K=J.buildings.find((X)=>X.id===Q);if(!K)return q6();let $=K$(K,Z),W=Z$(J),Y=q6();return Object.keys($).forEach((X)=>{let H=Math.max(0,W[X]-J.res[X]),U=Math.min(H,Math.floor($[X]));J.res[X]+=U,J.totals[X]+=U,Y[X]=U}),K.lastAt=Z,Y}function E6(J,Q){let Z=!1;for(let K of J.buildings)if(K.doneAt&&K.doneAt<=Q)K.lvl=K.targetLvl??K.lvl,K.doneAt=0,K.lastAt=Q,Z=!0;return Z}function W$(J,Q){return PJ[J].cost(Q)}function bQ(J,Q){return Object.keys(Q).every((Z)=>J.res[Z]>=(Q[Z]??0))}function EX(J,Q){if(!bQ(J,Q))return!1;return Object.keys(Q).forEach((Z)=>{J.res[Z]-=Q[Z]??0}),!0}function FX(J,Q,Z,K,$){let W=PJ[Q],[Y,X]=W.size;if(iq(J,null,Z,K,Y,X))return null;if(!EX(J,W.cost(1)))return null;let H={id:sq(),type:Q,lvl:0,targetLvl:1,x:Z,y:K,doneAt:$+W.timerMs,lastAt:$};return J.buildings.push(H),H}function Y$(J,Q,Z){let K=J.buildings.find((W)=>W.id===Q);if(!K||K.doneAt)return!1;let $=PJ[K.type];if(K.lvl>=$.maxLvl)return!1;if(!EX(J,$.cost(K.lvl+1)))return!1;return K.targetLvl=K.lvl+1,K.doneAt=Z+$.timerMs,!0}function oq(J,Q){return{v:qX,realm:J,land:Q,createdAt:Date.now(),res:{wood:500,stone:420,iron:160,food:480,coin:260},buildings:[],totals:q6()}}function b9(J){try{localStorage.setItem(GX(J.realm),JSON.stringify(J))}catch{}}function OX(J,Q){try{let K=localStorage.getItem(GX(J));if(K){let $=JSON.parse(K);if($&&$.v===qX&&Array.isArray($.buildings)&&$.buildings.length)return E6($,Date.now()),{st:$,fresh:!1}}}catch{}return{st:oq(J,Q),fresh:!0}}var DX=[{id:"m1",fa:"۲۰۰ چوب برای اصطبل‌ها جمع کن",goal:200,key:"wood"},{id:"m2",fa:"۱۵۰ غذا از مزرعه‌ها برداشت کن",goal:150,key:"food"},{id:"m3",fa:"۶ سازه در دهکده برپا کن",goal:6,key:"buildings"}];function RX(J,Q){let Z=Q.key==="buildings"?J.buildings.length:J.totals[Q.key]+J.res[Q.key];return{cur:Z,done:Z>=Q.goal}}var CJ=Math.PI,l8=(J)=>{let Q=J>>>0;return()=>{return Q=Q*1664525+1013904223>>>0,Q/4294967296}};function MX(J,Q){let Z=(K,$=0.85,W=0)=>new IJ({color:K,roughness:$,metalness:W});if(Q)Q.colorSpace=M9,Q.anisotropy=4;return{wall:Z(J.wallCol,0.9),wall2:Z(J.wallCol2,0.9),beam:Z(J.beamCol,0.85),roof:Z(J.roofCol,0.8),roof2:Z(J.roofCol2,0.8),stone:Z(J.stoneCol,0.95),stoneDark:Z(new v0(J.stoneCol).multiplyScalar(0.78).getHex(),0.95),wood:Z(9067059,0.85),woodDark:Z(6241570,0.85),trim:Z(J.trimCol,0.85),gold:Z(14263351,0.45,0.55),iron:Z(4869976,0.5,0.6),banner:Z(new v0(J.primary).getHex(),0.9),cloth:Z(15129026,0.95),foliage:Z(4160826,0.95),foliage2:Z(3105584,0.95),trunk:Z(7227947,0.9),crop:Z(14267982,0.95),skin:Z(14726284,0.8)}}function a(J,Q,Z=0,K=0,$=0){let W=new AJ(J,Q);return W.position.set(Z,K,$),W.castShadow=!0,W.receiveShadow=!0,W}var T0=(J,Q,Z)=>new Y9(J,Q,Z),VJ=(J,Q,Z,K=8)=>new v9(J,Q,Z,K),O8=(J,Q,Z=4)=>new I9(J,Q,Z);function L7(J,Q,Z,K=2){let $=new j0;$.add(a(T0(Q,Z,0.14),J.wall2,0,Z/2,0));let W=0.1;$.add(a(T0(Q,W,0.18),J.beam,0,Z-W/2,0)),$.add(a(T0(Q,W,0.18),J.beam,0,W/2,0));for(let Y=0;Y<K;Y++){let X=-Q/2+Q/(K-1||1)*Y;$.add(a(T0(W,Z,0.18),J.beam,X,Z/2,0))}return $}function k7(J,Q,Z,K,$){let W=new j0,Y=Math.atan2(K,Z/2),X=Math.hypot(K,Z/2)+0.12,H=T0(Q+0.3,0.1,X),U=a(H,$??J.roof);U.position.set(0,K/2,Z/4),U.rotation.x=Y;let N=a(H,$??J.roof);N.position.set(0,K/2,-Z/4),N.rotation.x=-Y,W.add(U,N),W.add(a(T0(Q+0.34,0.14,0.16),J.trim,0,K+0.05,0));let q=new J6([new Z0(-Z/2,0),new Z0(Z/2,0),new Z0(0,K)]),G=new Q6(q,{depth:0.14,bevelEnabled:!1}),F=a(G,J.wall2);F.position.set(Q/2-0.02,0,-0.07),F.rotation.y=CJ/2,F.castShadow=!0;let R=a(G,J.wall2);return R.position.set(-Q/2+0.02,0,-0.07),R.rotation.y=-CJ/2,R.castShadow=!0,W.add(F,R),W}function F6(J,Q=0.5,Z=0.55){let K=new j0;K.add(a(T0(Q,Z,0.08),J.trim,0,Z/2,0));let $=new IJ({color:16771496,emissive:16762982,emissiveIntensity:0.55,roughness:0.6});return K.add(a(T0(Q-0.14,Z-0.16,0.05),$,0,Z/2,0.03)),K.add(a(T0(0.06,Z-0.16,0.06),J.trim,0,Z/2,0.05)),K.add(a(T0(Q-0.14,0.06,0.06),J.trim,0,Z/2,0.05)),K}function VX(J,Q=0.8,Z=1.25){let K=new j0;return K.add(a(T0(Q+0.16,Z+0.14,0.12),J.trim,0,Z/2,0)),K.add(a(T0(Q,Z,0.09),J.woodDark,0,Z/2,0.05)),K.add(a(new MJ(0.05,6,6),J.iron,Q/2-0.16,Z*0.55,0.11)),K}function X$(J,Q,Z,K=3.2,$=1.5){let W=new j0;W.add(a(VJ(0.05,0.07,K,6),J.woodDark,0,K/2,0)),W.add(a(new MJ(0.11,8,8),J.gold,0,K+0.06,0));let Y=10,X=6,H=new y9($,$*0.62,Y,X),U=Q?new IJ({map:Q,side:oJ,roughness:0.9,transparent:!0,alphaTest:0.35}):new IJ({color:new v0(Z).getHex(),side:oJ,roughness:0.9}),N=new AJ(H,U);N.position.set($/2+0.02,K-$*0.38,0),N.castShadow=!0,W.add(N);let q=H.attributes.position.array.slice();return{g:W,update:(F)=>{let R=H.attributes.position.array;for(let A=0;A<R.length;A+=3){let O=q[A],E=q[A+1],k=(O+$/2)/$;R[A+2]=Math.sin(F*2.2+k*4.4)*0.14*k+Math.sin(F*3.7+E*2.2)*0.05*k,R[A]=O+Math.sin(F*2.2+k*4.4)*0.05*k}H.attributes.position.needsUpdate=!0,H.computeVertexNormals()}}}function BX(J,Q,Z,K){let $=new j0,W=4.6,Y=4.6;$.add(a(T0(5.3,0.5,5.3),J.stoneDark,0,0.25,0)),$.add(a(T0(4.6,2.5,4.6),J.stone,0,1.75,0));for(let[F,R]of[[1,1],[1,-1],[-1,1],[-1,-1]])for(let A=0;A<4;A++)$.add(a(T0(0.34,0.34,0.34),J.stoneDark,F*4.6/2-F*0.12,0.85+A*0.58,R*4.6/2-R*0.12));let X=new j0;X.add(a(T0(1.7,1.9,0.3),J.trim,0,0.95,0)),X.add(a(new Y9(1.15,1.5,0.14),J.woodDark,0,0.75,0.1));for(let F=0;F<4;F++)X.add(a(T0(0.12,1.5,0.18),J.iron,-0.4+F*0.27,0.75,0.14));X.position.set(0,0.5,2.4),$.add(X);let H=a(VJ(1.25,1.5,4.6,10),J.stone,0,2.8,0);$.add(H),$.add(a(VJ(1.5,1.5,0.35,10),J.stoneDark,0,5.15,0));let U=a(O8(1.62,1.7,8),K>=3?J.roof:J.roof2,0,6.15,0);$.add(U),$.add(a(new MJ(0.16,8,8),J.gold,0,7.08,0));for(let[F,R]of[[1,1],[-1,-1]]){let A=F*2.15,O=R*2.15;$.add(a(VJ(0.62,0.72,3.4,8),J.stone,A,2.2,O)),$.add(a(VJ(0.78,0.78,0.22,8),J.stoneDark,A,4.05,O)),$.add(a(O8(0.85,1,8),J.roof2,A,4.66,O)),$.add(a(new MJ(0.09,6,6),J.gold,A,5.22,O))}let N=F6(J);N.position.set(2.32,2.9,0),N.rotation.y=CJ/2,$.add(N);let q=F6(J);q.position.set(0,4.6,2.32),$.add(q);let G=X$(J,Z,Q.primary,2.6,1.15);if(G.g.position.set(0,2.4,2.65),$.add(G.g),$.banner=G,K>=2){let F=X$(J,null,Q.accent,1.7,0.7);F.g.position.set(2.15,3.6,2.15),F.g.rotation.y=CJ/4,$.add(F.g),$.banner2=F}return $}function LX(J,Q){let Z=new j0;Z.add(a(T0(3.1,0.35,2.7),J.stoneDark,0,0.17,0));let K=2.7,$=2.3,W=1.55,Y=L7(J,K,W,3);Y.position.set(0,0.35,$/2-0.07),Z.add(Y);let X=L7(J,K,W,3);X.position.set(0,0.35,-$/2+0.07),X.rotation.y=CJ,Z.add(X);let H=L7(J,$,W,2);H.position.set(-K/2+0.07,0.35,0),H.rotation.y=-CJ/2,Z.add(H);let U=L7(J,$,W,2);U.position.set(K/2-0.07,0.35,0),U.rotation.y=CJ/2,Z.add(U);let N=k7(J,K+0.25,$,1,J.roof);N.position.set(0,0.35+W,0),Z.add(N),Z.add(a(T0(0.4,1,0.4),J.stoneDark,K/2-0.5,0.35+W+0.75,-0.5));let q=VX(J);q.position.set(-0.6,0.35,$/2+0.02),Z.add(q);let G=F6(J);G.position.set(0.55,0.9,$/2+0.02),Z.add(G);let F=F6(J);F.position.set(K/2+0.02,0.9,0),F.rotation.y=CJ/2,Z.add(F);for(let R=0;R<3;R++){let A=a(VJ(0.11,0.11,0.7,6),J.wood,-K/2-0.25,0.12+(R<2?0:0.22),-0.5+R%2*0.26);A.rotation.x=CJ/2,Z.add(A)}return Z}function kX(J,Q){let Z=new j0,K=4.8,$=3.2;Z.add(a(T0(4.8,0.18,3.2),new IJ({color:9071426,roughness:1}),0,0.09,0));let W=4,Y=new I9(0.1,0.34,5),X=W*9,H=new qQ(Y,J.crop,X);H.castShadow=!0;let U=new HJ,N=0,q=l8(77);for(let O=0;O<W;O++)for(let E=0;E<9;E++){let k=-1.9+E*0.475,z=-1.1500000000000001+O*(2.3000000000000003/(W-1));U.makeTranslation(k+(q()-0.5)*0.1,0.35,z+(q()-0.5)*0.08),H.setMatrixAt(N++,U)}Z.add(H);let G=(O,E)=>Z.add(a(T0(0.09,0.5,0.09),J.woodDark,O,0.43,E));for(let O=0;O<=8;O++){let E=-2.4+O*0.6;G(E,-1.7200000000000002),G(E,1.7200000000000002)}for(let O of[-1.7200000000000002,1.7200000000000002])Z.add(a(T0(4.8,0.06,0.05),J.woodDark,0,0.62,O)),Z.add(a(T0(4.8,0.06,0.05),J.woodDark,0,0.38,O));let F=new j0;F.add(a(VJ(0.05,0.06,1.1,5),J.woodDark,0,0.55,0)),F.add(a(T0(0.8,0.07,0.07),J.woodDark,0,0.85,0)),F.add(a(T0(0.34,0.4,0.2),J.cloth,0,0.72,0)),F.add(a(new MJ(0.14,7,7),new IJ({color:14202215,roughness:1}),0,1.08,0)),F.add(a(O8(0.3,0.14,8),J.crop,0,1.2,0)),F.position.set(1.9,0.1,-1.2000000000000002),Z.add(F);let R=new j0;R.add(a(T0(1.5,1,1.3),J.wall2,0,0.6,0));let A=k7(J,1.6,1.4,0.55,J.roof2);return A.position.set(0,1.1,0),R.add(A),R.add(a(T0(0.5,0.7,0.06),J.woodDark,0,0.45,0.66)),R.position.set(-1.5,0.15,2.35),Z.add(R),Z}function zX(J,Q){let Z=new j0;Z.add(a(T0(2.6,0.3,2.3),J.stoneDark,0,0.15,0));let K=L7(J,2.3,1.3,2);K.position.set(0,0.3,1.08),Z.add(K);let $=L7(J,2.3,1.3,2);$.position.set(0,0.3,-1.08),$.rotation.y=CJ,Z.add($);let W=k7(J,2.7,2.4,0.8,J.roof2);W.position.set(0,1.6,0),Z.add(W);let Y=VJ(0.16,0.16,1.5,7),X=new j0;for(let G=0;G<3;G++)for(let F=0;F<3-G;F++){let R=a(Y,J.wood,0,0.17+G*0.28,-0.3+F*0.32+G*0.16);R.rotation.z=CJ/2,X.add(R)}X.position.set(2.2,0,0.6),Z.add(X);let H=new j0;for(let G=0;G<2;G++){let F=a(Y,J.wood,0,0.17,-0.15+G*0.34);F.rotation.z=CJ/2,H.add(F)}H.position.set(-2,0,-0.7),Z.add(H),Z.add(a(VJ(0.3,0.34,0.5,8),J.woodDark,1,0.25,-1.3));let U=new j0;U.add(a(VJ(0.03,0.035,0.8,5),J.wood,0,0.4,0)),U.add(a(T0(0.3,0.18,0.05),J.iron,0.1,0.78,0)),U.position.set(1.32,0.45,-1.25),U.rotation.z=0.6,Z.add(U);let N=new j0;for(let G of[-0.4,0.4])N.add(a(T0(0.08,0.7,0.08),J.woodDark,-0.3,0.35,G)),N.add(a(T0(0.08,0.7,0.08),J.woodDark,0.3,0.35,G));N.add(a(T0(1,0.08,0.3),J.wood,0,0.72,0));let q=a(VJ(0.09,0.09,1.3,6),J.wood,0,0.82,0);return q.rotation.z=CJ/2,N.add(q),N.position.set(-1.6,0,1),Z.add(N),Z}function AX(J,Q){let Z=new j0,K=l8(31);for(let X=0;X<9;X++){let H=0.6+K()*0.7,U=a(new f8(H,0),X%2?J.stone:J.stoneDark,(K()-0.5)*3.4,H*0.55,-0.6+(K()-0.5)*1.6);U.rotation.set(K()*CJ,K()*CJ,K()*CJ),Z.add(U)}let $=new j0;for(let X of[-0.55,0.55])$.add(a(T0(0.18,1.5,0.18),J.woodDark,X,0.75,0));$.add(a(T0(1.5,0.18,0.22),J.woodDark,0,1.55,0)),$.add(a(T0(1.7,0.14,0.3),J.woodDark,0,1.78,0));let W=new IJ({color:1316380,roughness:1});$.add(a(T0(0.95,1.4,0.1),W,0,0.7,-0.02)),$.position.set(0,0.1,1.35),Z.add($);for(let X of[-0.28,0.28])Z.add(a(T0(0.08,0.06,3.2),J.woodDark,X,0.06,2.6));for(let X=0;X<5;X++)Z.add(a(T0(0.75,0.05,0.09),J.wood,0,0.045,1.5+X*0.55));let Y=new j0;Y.add(a(T0(0.75,0.4,0.55),J.woodDark,0,0.32,0)),Y.add(a(new Y9(0.65,0.12,0.45),J.stoneDark,0,0.55,0));for(let[X,H]of[[-0.3,-0.2],[0.3,-0.2],[-0.3,0.2],[0.3,0.2]]){let U=a(VJ(0.14,0.14,0.06,8),J.iron,X,0.14,H);U.rotation.z=CJ/2,Y.add(U)}return Y.position.set(0,0,3.4),Z.add(Y),Z}function CX(J,Q){let Z=new j0,K=3.2,$=2.6,W=1.7;Z.add(a(T0(3.5,0.4,2.9),J.stoneDark,0,0.2,0)),Z.add(a(T0(3.2,1.7,2.6),J.wall,0,1.25,0));for(let U of[-1.5,1.5])Z.add(a(T0(0.16,1.7,0.16),J.beam,U,1.25,1.22)),Z.add(a(T0(0.16,1.7,0.16),J.beam,U,1.25,-1.22));let Y=k7(J,3.5,2.6,0.95,J.roof);Y.position.set(0,2.1,0),Z.add(Y),Z.add(a(T0(1.3,1.4,0.12),J.woodDark,0,1.1,1.32)),Z.add(a(T0(1.44,0.1,0.16),J.trim,0,1.84,1.32)),Z.add(a(T0(0.5,0.45,0.1),J.trim,0,2.5,1.4000000000000001));let X=new IJ({color:13350025,roughness:1});for(let U=0;U<3;U++){let N=a(new MJ(0.26,7,6),X,2.0500000000000003+U%2*0.5,0.26+(U>=2?0.4:0),0.6+Math.floor(U/2)*0.5);N.scale.y=0.85,Z.add(N)}let H=(U,N)=>{let q=a(VJ(0.24,0.28,0.55,8),J.wood,U,0.47,N);Z.add(q),Z.add(a(VJ(0.29,0.29,0.06,8),J.iron,U,0.47,N))};return H(-2.0500000000000003,0.7),H(-2.1,-0.1),Z.add(a(T0(0.5,0.5,0.5),J.woodDark,2.1,0.45,-0.6)),Z}function _X(J,Q,Z){let K=new j0,$=3.9,W=2.8,Y=1.8;K.add(a(T0(4.3,0.45,3.1999999999999997),J.stoneDark,0,0.22,0)),K.add(a(T0(3.9,1.8,2.8),J.wall,0,1.35,0));let X=k7(J,4.2,2.8,1.05,J.roof2);X.position.set(0,2.25,0),K.add(X);for(let F of[-1,0,1]){let R=a(VJ(0.24,0.24,0.06,10),J.banner,F,1.6,1.45);R.rotation.x=CJ/2,K.add(R),K.add(a(new MJ(0.06,6,6),J.gold,F,1.6,1.5))}let H=VX(J,0.9,1.4);H.position.set(-0.9,0.45,1.42),K.add(H);let U=F6(J);U.position.set(0.6,1.35,1.42),K.add(U);let N=new j0;N.add(a(T0(1.4,0.1,0.14),J.woodDark,0,0.9,0)),N.add(a(T0(1.4,0.1,0.14),J.woodDark,0,0.4,0));for(let[F,R]of[[-0.45,"sword"],[0,"spear"],[0.45,"sword"]]){let A=a(T0(0.07,0.75,0.03),J.iron,F,1.15,0);N.add(A),N.add(a(VJ(0.03,0.03,0.3,5),J.woodDark,F,0.62,0))}N.position.set(2.5,0,0.9),K.add(N);let q=new j0;q.add(a(VJ(0.07,0.09,1.3,5),J.woodDark,0,0.65,0)),q.add(a(T0(0.75,0.12,0.12),J.woodDark,0,1,0)),q.add(a(new MJ(0.17,7,7),J.cloth,0,1.32,0)),q.add(a(T0(0.4,0.3,0.24),J.cloth,0,0.85,0)),q.position.set(-2.4,0,1),K.add(q);let G=X$(J,Z,Q.primary,2.4,1);return G.g.position.set(1.75,0.45,-1.0999999999999999),K.add(G.g),K.banner=G,K}function PX(J,Q){let Z=new j0;Z.add(a(T0(2.5,0.5,2.5),J.stoneDark,0,0.25,0));let K=a(VJ(0.85,1.05,4.2,9),J.stone,0,2.6,0);Z.add(K),Z.add(a(VJ(1.25,1,0.5,9),J.stoneDark,0,4.85,0));for(let W=0;W<8;W++){let Y=W/8*CJ*2;Z.add(a(T0(0.22,0.3,0.22),J.stoneDark,Math.cos(Y)*1.12,5.25,Math.sin(Y)*1.12))}Z.add(a(VJ(1.28,1.28,0.16,9),J.wood,0,5.1,0));let $=a(O8(1.35,1.5,8),J.roof,0,5.95,0);Z.add($),Z.add(a(new MJ(0.11,7,7),J.gold,0,6.78,0));for(let[W,Y]of[[0,3.1],[CJ/2,2.4]]){let X=a(T0(0.08,0.55,0.08),J.trim,0,Y,1.02);X.rotation.y=W,Z.add(X)}return Z}function H$(J,Q){let Z=new j0,K=l8(Q),$=1.3+K()*0.5,W=a(VJ(0.14,0.22,$,7),J.trunk,0,$/2,0);W.rotation.z=(K()-0.5)*0.14,Z.add(W);let Y=3+Math.floor(K()*2);for(let X=0;X<Y;X++){let H=0.75+K()*0.5,U=a(new Z6(H,1),X%2?J.foliage:J.foliage2,(K()-0.5)*1.1,$+0.35+K()*0.6,(K()-0.5)*1.1);Z.add(U)}return Z}function U$(J,Q){let Z=new j0,$=1.6+l8(Q)()*0.9;Z.add(a(VJ(0.1,0.16,$*0.45,6),J.trunk,0,$*0.22,0));let W=3;for(let Y=0;Y<W;Y++){let X=0.95-Y*0.26,H=$*0.35+Y*($*0.26);Z.add(a(O8(X,$*0.45,7),Y%2?J.foliage2:J.foliage,0,H,0))}return Z}function IX(J,Q){let Z=new j0,$=2+l8(Q)()*0.8;Z.add(a(VJ(0.07,0.11,0.5,5),J.trunk,0,0.25,0));let W=a(O8(0.42,$,7),J.foliage2,0,$/2+0.3,0);return W.scale.x=0.7,Z.add(W),Z}function N$(J,Q){let Z=new j0,K=l8(Q),$=0.35+K()*0.55,W=a(new f8($,0),J.stone,0,$*0.5,0);if(W.rotation.set(K()*CJ,K()*CJ,0),Z.add(W),K()>0.5){let Y=a(new f8($*0.55,0),J.stoneDark,$*0.8,$*0.28,$*0.3);Y.rotation.set(K()*CJ,K()*CJ,0),Z.add(Y)}return Z}function TX(J,Q,Z=6){let K=new j0,$=l8(Q),W=[15230074,15913806,15263450,13201364];for(let Y=0;Y<Z;Y++){let X=($()-0.5)*2.2,H=($()-0.5)*2.2;K.add(a(VJ(0.015,0.02,0.18,4),J.foliage2,X,0.09,H)),K.add(a(new MJ(0.05,5,4),new IJ({color:W[Y%4],roughness:0.9}),X,0.2,H))}return K}function wX(J,Q){let Z=new j0;Z.add(a(VJ(0.75,0.8,0.65,10),J.stone,0,0.32,0)),Z.add(a(VJ(0.6,0.6,0.1,10),new IJ({color:2573406,roughness:0.3}),0,0.62,0));for(let $ of[-0.6,0.6])Z.add(a(T0(0.12,1.1,0.12),J.woodDark,$,1.1,0));let K=k7(J,1.7,1.5,0.5,J.roof);return K.position.set(0,1.65,0),Z.add(K),Z.add(a(VJ(0.05,0.05,0.5,6),J.woodDark,0,1.25,0)),Z.add(a(T0(0.26,0.2,0.2),J.wood,0,1,0)),Z}function SX(J){let Q=new j0;Q.add(a(VJ(0.05,0.08,1.5,6),J.iron,0,0.75,0)),Q.add(a(T0(0.3,0.36,0.3),J.iron,0,1.6,0));let Z=new IJ({color:16767370,emissive:16758861,emissiveIntensity:0.9,roughness:0.5});return Q.add(a(new MJ(0.1,6,6),Z,0,1.6,0)),Q.add(a(O8(0.24,0.18,4),J.iron,0,1.86,0)),Q}function jX(J,Q){let Z=new j0,K=new AJ(new y8(Q,22),new IJ({color:4171989,roughness:0.15,metalness:0.1,transparent:!0,opacity:0.92}));K.rotation.x=-CJ/2,K.position.y=0.03,K.receiveShadow=!0,Z.add(K);let $=a(VJ(Q+0.25,Q+0.4,0.08,22),J.stoneDark,0,0.01,0);Z.add($);for(let W=0;W<5;W++){let Y=W/5*CJ*2+0.4,X=a(O8(0.05,0.55,4),J.foliage2,Math.cos(Y)*(Q+0.2),0.3,Math.sin(Y)*(Q+0.2));Z.add(X)}return Z}function vX(J){let Q=new j0,Z=a(new I9(0.07,0.3,5),J.foliage2,0,0,0);Z.rotation.x=CJ/2,Q.add(Z);let K=T0(0.4,0.02,0.12),$=a(K,J.foliage2,-0.2,0.02,0),W=a(K,J.foliage2,0.2,0.02,0);return Q.add($,W),{g:Q,update:(X)=>{$.rotation.z=Math.sin(X*9)*0.55,W.rotation.z=-Math.sin(X*9)*0.55}}}var T9=Math.PI;function l0(J,Q,Z=0,K=0,$=0){let W=new AJ(J,Q);return W.position.set(Z,K,$),W.castShadow=!0,W.receiveShadow=!0,W}var K9=(J,Q,Z,K=7)=>new v9(J,Q,Z,K),D8=(J,Q,Z=6)=>new I9(J,Q,Z),X9=(J,Q,Z)=>new Y9(J,Q,Z),OJ=(J,Q=0.85,Z=0)=>new IJ({color:J,roughness:Q,emissive:Z?J:0,emissiveIntensity:Z});function G$(J,Q,Z=1){let K=new j0,$=(()=>{let D=Z>>>0;return()=>(D=D*1664525+1013904223>>>0)/4294967296})(),W=new v0(J.primary).offsetHSL(0,-0.08,Q==="villager"?0.16:0).getHex(),Y=OJ(W,0.9),X=OJ(Q==="guard"?3817544:7232063,0.95),H=OJ(14726284,0.8),U=OJ(7227947,0.85),N=OJ(10134189,0.45,0),q=OJ(14263351,0.4,0),G=0.5,F=(D)=>{let V=new j0;return V.position.set(D*0.11,0.5,0),V.add(l0(K9(0.062,0.075,0.5,6),X,0,-0.25,0)),V.add(l0(X9(0.13,0.09,0.2),U,0,-0.455,0.03)),V},R=F(-1),A=F(1);K.add(R,A);let O=new j0;O.position.y=0.5;let E=0.62;if(O.add(l0(K9(0.21,0.16,E,8),Y,0,E/2,0)),O.add(l0(K9(0.175,0.175,0.09,8),U,0,0.1,0)),O.add(l0(X9(0.08,0.07,0.03),q,0,0.1,0.17)),Q==="guard"||Q==="swordsman")for(let D of[-1,1])O.add(l0(new MJ(0.1,7,6),N,D*0.2,E-0.03,0));if(Q==="archer"||Q==="villager"){let D=l0(X9(0.07,E*0.95,0.02),U,0.05,E/2,0.15);D.rotation.z=0.35,O.add(D)}let k=(D)=>{let V=new j0;return V.position.set(D*0.23,E-0.06,0),V.add(l0(K9(0.05,0.062,0.52,6),Y,0,-0.26,0)),V.add(l0(new MJ(0.055,6,6),H,0,-0.54,0)),V},z=k(-1),B=k(1);O.add(z,B);let C=new j0;C.position.y=E+0.02,C.add(l0(new MJ(0.16,9,8),H,0,0.17,0));for(let D of[-1,1])C.add(l0(new MJ(0.018,5,5),OJ(1908004,0.5),D*0.058,0.19,0.14)),C.add(l0(X9(0.045,0.012,0.01),OJ(3811866,0.9),D*0.058,0.225,0.152));if(C.add(l0(X9(0.05,0.03,0.02),H,0,0.14,0.16)),Q==="guard"||Q==="villager"||$()>0.5)C.add(l0(new MJ(0.09,7,6,0,T9*2,0,T9/2),OJ(5916210,0.95),0,0.08,0.06));if(Q==="swordsman"){let D=new j0;D.add(l0(new MJ(0.175,9,7,0,T9*2,0,T9/1.7),N,0,0.18,0)),D.add(l0(X9(0.03,0.12,0.02),N,0,0.2,0.16)),D.add(l0(D8(0.05,0.16,6),OJ(new v0(J.accent).getHex(),0.9),0,0.38,0)),C.add(D);let V=new j0;V.add(l0(X9(0.045,0.42,0.015),OJ(13094100,0.35),0,0.3,0)),V.add(l0(X9(0.14,0.035,0.035),q,0,0.08,0)),V.add(l0(K9(0.022,0.022,0.12,5),U,0,0,0)),V.position.set(0,-0.54,0.06),V.rotation.x=-0.35,B.add(V);let I=l0(K9(0.19,0.19,0.04,12),OJ(new v0(J.primary).getHex(),0.7),0.02,-0.45,0.08);I.rotation.x=T9/2,I.rotation.z=0,z.add(I),z.add(l0(new MJ(0.05,6,6),q,0.02,-0.45,0.1))}else if(Q==="archer"){C.add(l0(D8(0.19,0.3,8),OJ(4873530,0.95),0,0.26,0)),C.add(l0(X9(0.03,0.16,0.015),OJ(15262418,0.9),0.09,0.3,0.12));let D=new j0,V=l0(new K6(0.3,0.018,5,12,T9*1.15),U,0,0,0);V.rotation.z=T9*0.42,D.add(V),D.add(l0(K9(0.006,0.006,0.56,4),OJ(14275261,0.9),0,0,0.12)),D.position.set(0.06,-0.5,0.1),D.rotation.z=-0.3,z.add(D);let I=l0(K9(0.06,0.07,0.34,6),U,-0.12,0.4,-0.16);I.rotation.z=0.4,O.add(I);for(let f=0;f<3;f++)O.add(l0(K9(0.008,0.008,0.2,4),OJ(14275261,0.9),-0.16+f*0.035,0.62,-0.2))}else if(Q==="spearman"){C.add(l0(new MJ(0.17,8,7,0,T9*2,0,T9/1.6),N,0,0.2,0));let D=new j0;D.add(l0(K9(0.018,0.022,1.7,5),U,0,0.25,0)),D.add(l0(D8(0.05,0.2,6),OJ(13094100,0.35),0,1.18,0)),D.position.set(0,-0.5,0.04),B.add(D);let V=l0(K9(0.13,0.13,0.035,10),OJ(9071426,0.8),0.02,-0.42,0.09);V.rotation.x=T9/2,z.add(V)}else if(Q==="guard"){C.add(l0(new MJ(0.18,9,7),N,0,0.18,0)),C.add(l0(X9(0.2,0.045,0.03),OJ(1316380,0.6),0,0.2,0.145)),C.add(l0(D8(0.06,0.2,6),OJ(new v0(J.primary).getHex(),0.9),0,0.42,0));let D=l0(X9(0.34,0.62,0.045),OJ(new v0(J.primary).getHex(),0.7),0.03,-0.4,0.1);z.add(D),z.add(l0(X9(0.1,0.14,0.02),q,0.03,-0.4,0.13));let V=new j0;V.add(l0(K9(0.02,0.025,0.65,5),U,0,0.1,0)),V.add(l0(X9(0.16,0.2,0.03),OJ(13094100,0.35),0.09,0.36,0)),V.position.set(0,-0.52,0.05),B.add(V)}else if(Q==="villager"){C.add(l0(K9(0.26,0.28,0.03,10),OJ(14268764,0.95),0,0.28,0)),C.add(l0(D8(0.17,0.14,9),OJ(14268764,0.95),0,0.34,0));let D=new j0;D.add(l0(K9(0.016,0.02,0.9,5),U,0,0.2,0)),D.add(l0(X9(0.14,0.05,0.04),OJ(9080728,0.5),0.07,0.66,0)),D.position.set(0,-0.5,0.06),D.rotation.z=0.18,B.add(D)}K.add(O,C);let P=0.5+E+0.42;return{g:K,legL:R,legR:A,armL:z,armR:B,body:O,head:C,h:P}}function q$(J,Q,Z,K=1){let $=Q*7*K;if(Z){let W=Math.sin($)*0.62;J.legL.rotation.x=W,J.legR.rotation.x=-W,J.armL.rotation.x=-W*0.7,J.armR.rotation.x=W*0.7,J.body.position.y=0.5+Math.abs(Math.cos($))*0.035,J.body.rotation.z=Math.sin($)*0.03,J.head.rotation.z=Math.sin($)*0.02}else{let W=Math.sin(Q*1.8)*0.035;J.legL.rotation.x*=0.85,J.legR.rotation.x*=0.85,J.armL.rotation.x=W,J.armR.rotation.x=-W,J.body.position.y=0.5+Math.max(0,Math.sin(Q*1.8))*0.012,J.body.rotation.z=0}}function yX(){let J=new j0,Q=OJ(15789540,0.95),Z=l0(new MJ(0.13,8,7),Q,0,0.14,0);Z.scale.set(1,0.9,1.25),J.add(Z);let K=l0(new MJ(0.07,7,6),Q,0,0.28,0.12);J.add(K),J.add(l0(D8(0.03,0.06,5),OJ(15245628,0.8),0,0.28,0.2)),J.add(l0(X9(0.035,0.05,0.03),OJ(13911354,0.85),0,0.35,0.11));for(let Y of[-1,1])J.add(l0(K9(0.008,0.008,0.08,4),OJ(15245628,0.8),Y*0.04,0.04,0));let $=l0(D8(0.05,0.12,5),OJ(14275261,0.95),0,0.18,-0.15);return $.rotation.x=-T9/2.4,J.add($),{g:J,update:(Y)=>{J.rotation.y=Math.sin(Y*0.4)*0.6,J.position.y=Math.abs(Math.sin(Y*2.4))*0.02,K.rotation.x=Math.max(0,Math.sin(Y*2.2))*0.5}}}function fX(){let J=new j0,Q=OJ(7234137,0.95),Z=l0(new MJ(0.1,7,6),Q,0,0.11,0);Z.scale.set(1,0.85,1.5),J.add(Z);let K=l0(new MJ(0.07,7,6),Q,0,0.19,0.13);J.add(K);for(let Y of[-1,1])J.add(l0(D8(0.025,0.05,4),Q,Y*0.035,0.26,0.12));let $=l0(K9(0.015,0.02,0.24,5),Q,0,0.15,-0.17);return $.rotation.x=1.1,J.add($),{g:J,update:(Y)=>{$.rotation.z=Math.sin(Y*2.6)*0.35}}}var sJ=Math.PI,LJ=(J,Q)=>(J-Q/2+0.5)*NJ,xQ=(J,Q)=>Math.round(J/NJ+Q/2-0.5);function aq(J){let Q=new Set,Z=J.buildings.find((X)=>X.type==="keep");if(!Z)return Q;let K=Z.x+1,$=Z.y+3,W=(X,H)=>H*UJ+X,Y=(X,H,U,N)=>{let q=X,G=H,F=()=>{if(Q.add(W(q,G)),q!==U)q+=Math.sign(U-q);else if(G!==N)G+=Math.sign(N-G)},R=UJ*jJ;while((q!==U||G!==N)&&R-- >0)F();Q.add(W(U,N))};for(let X of J.buildings){if(X.type==="keep")continue;let H=hQ(X);Y(K,$,X.x+Math.floor(H.w/2),X.y>$?X.y-1:X.y+H.d)}return Q}class F${renderer;scene=new XQ;cam;canvas;cfg;mats;prof;cb;st;azim=sJ/4;elev=0.9273;target=new v(0,0,0);view=30;viewMin=14;viewMax=46;camR=90;azimTarget=sJ/4;views=new Map;units=[];animals=[];birds=[];mists=[];roadSet=new Set;banners=[];selRing;ghost=null;ghostTile;moveId=null;buildType=null;ghostGX=0;ghostGY=0;ray=new PQ;ptrDown={x:0,y:0,t:0,moved:!1,id:-1};pinch={d0:0,view0:24,active:!1};pointers=new Map;selected=null;disposeFns=[];ro;raf=0;lastT=0;clock=0;constructor(J,Q,Z,K,$,W){this.canvas=J,this.st=Q,this.cfg=Z,this.prof=K,this.cb=W,this.bannerTexture=$,this.mats=MX(Z,$),this.renderer=new eK({canvas:J,antialias:K.tier!=="low",powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,K.dpr)),this.renderer.outputColorSpace=M9,this.renderer.shadowMap.enabled=K.shadows>0,this.renderer.shadowMap.type=i6;let Y=document.createElement("canvas");Y.width=2,Y.height=256;let X=Y.getContext("2d"),H=X.createLinearGradient(0,0,0,256);H.addColorStop(0,Z.skyTop),H.addColorStop(1,Z.skyBot),X.fillStyle=H,X.fillRect(0,0,2,256);let U=new E8(Y);U.colorSpace=M9,this.scene.background=U,this.scene.fog=new r7(Z.fogCol,Z.fogNear,Z.fogFar),this.cam=new V7(-10,10,10,-10,1,400);let N=new zQ(new v0(Z.hemiSky),new v0(Z.hemiGround),0.95);this.scene.add(N);let q=new CQ(new v0(Z.sunCol),1.6);if(q.position.set(...Z.sunPos),K.shadows>0){q.castShadow=!0,q.shadow.mapSize.set(K.shadows,K.shadows);let F=q.shadow.camera;F.left=-34,F.right=34,F.top=34,F.bottom=-34,F.far=160,q.shadow.bias=-0.0006}this.scene.add(q),this.scene.add(new _Q(16777215,Z.ambient)),this.roadSet=aq(Q),this.buildEnvironment(this.roadSet);let G=new h8(0.92,1.08,28);this.selRing=new AJ(G,new v8({color:new v0(Z.accent),transparent:!0,opacity:0.95,side:oJ})),this.selRing.rotation.x=-sJ/2,this.selRing.position.y=0.06,this.selRing.visible=!1,this.scene.add(this.selRing),this.ghostTile=new AJ(new y9(NJ,NJ),new v8({color:4513126,transparent:!0,opacity:0.35})),this.ghostTile.rotation.x=-sJ/2,this.ghostTile.visible=!1,this.scene.add(this.ghostTile),this.syncAll(),this.spawnLife(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(J.parentElement??J),this.resize(),this.bindInput(),this.lastT=performance.now(),this.raf=requestAnimationFrame(this.loop)}buildEnvironment(J){let Q=this.cfg,Z=1024,K=document.createElement("canvas");K.width=K.height=1024;let $=K.getContext("2d");$.fillStyle=Q.groundTint,$.fillRect(0,0,1024,1024);let W=this.st.createdAt%1e5>>>0,Y=()=>(W=W*1664525+1013904223>>>0)/4294967296;for(let E=0;E<900;E++){$.fillStyle=Y()>0.5?Q.groundDark:Q.groundTint,$.globalAlpha=0.12+Y()*0.12;let k=8+Y()*26;$.beginPath(),$.arc(Y()*1024,Y()*1024,k,0,sJ*2),$.fill()}$.globalAlpha=1;let X=1024/UJ,H=[...J];$.fillStyle=Q.pathCol;for(let E of H){let k=E%UJ,z=Math.floor(E/UJ);$.globalAlpha=0.82,$.fillRect(k*X-0.5,z*X-0.5,X+1,X+1)}$.globalAlpha=0.22;for(let E=0;E<300&&H.length;E++){let k=H[E%H.length],z=k%UJ,B=Math.floor(k/UJ);$.fillStyle=E%2?"#4a3520":"#ffffff26",$.beginPath(),$.arc(z*X+Math.random()*X,B*X+Math.random()*X,1.4+Math.random()*2.4,0,sJ*2),$.fill()}$.globalAlpha=1;let U=new E8(K);U.colorSpace=M9,U.anisotropy=4;let N=new IJ({color:new v0(Q.stoneCol).multiplyScalar(0.72),roughness:1}),q=new IJ({map:U,roughness:1}),G=new AJ(xX(e9+4,3,fQ+4),[N,N,q,N,N,N]);G.position.y=-1.5,G.receiveShadow=!0,this.scene.add(G);let F=new AJ(new y8(190,36),new IJ({color:new v0(Q.outerTint),roughness:1}));F.rotation.x=-sJ/2,F.position.y=-3.1,F.receiveShadow=!0,this.scene.add(F);for(let E=0;E<7;E++){let k=E/7*sJ*2+0.35,z=120+E%3*26,B=new AJ(new I9(22+E%4*9,34+E%3*18,6),new IJ({color:new v0(Q.stoneCol).lerp(new v0(Q.fogCol),0.45),roughness:1}));B.position.set(Math.cos(k)*z,11,Math.sin(k)*z),this.scene.add(B)}let R=this.prof.trees;for(let E=0;E<R;E++){let k=Y()*sJ*2,z=e9/2+6+Y()*70,B=Math.cos(k)*z,C=Math.sin(k)*z,P=Y(),D=P<0.45?H$(this.mats,E*13+1):P<0.8?U$(this.mats,E*7+3):IX(this.mats,E*5+2);D.position.set(B,-3.1,C),D.rotation.y=Y()*sJ*2,this.scene.add(D)}for(let E=0;E<Math.floor(R/3);E++){let k=Y()*sJ*2,z=e9/2+5+Y()*60,B=N$(this.mats,400+E*17);B.position.set(Math.cos(k)*z,-3.1,Math.sin(k)*z),this.scene.add(B)}for(let E=0;E<this.prof.props;E++){let k=Y()*(UJ-2),z=Y()*(jJ-2),B=k>=nJ.x0&&k<=nJ.x1+1&&z>=nJ.y0&&z<=nJ.y1+1,C=k<nJ.x0+0.9||k>nJ.x1+0.1||z<nJ.y0+0.9||z>nJ.y1+0.1;if(B&&!C)continue;let P=LJ(k,UJ),D=LJ(z,jJ),V=Y(),I=V<0.4?H$(this.mats,900+E):V<0.6?N$(this.mats,950+E):V<0.85?TX(this.mats,980+E,5):U$(this.mats,700+E);I.position.set(P,0,D),this.scene.add(I)}let A=jX(this.mats,3.4);A.position.set(e9/2-1.5,0.02,-fQ/2+5.5),this.scene.add(A);let O=this.st.buildings.find((E)=>E.type==="keep");if(O){let E=LJ(O.x+1,UJ),k=LJ(O.y+3,jJ);for(let B of[-3.4,3.4]){let C=SX(this.mats);C.position.set(E+B,0,k+1.2),this.scene.add(C)}let z=wX(this.mats,Q);z.position.set(E-6.5,0,k+4.5),this.scene.add(z)}if(Q.mist){let E=document.createElement("canvas");E.width=E.height=128;let k=E.getContext("2d"),z=k.createRadialGradient(64,64,6,64,64,62);z.addColorStop(0,"rgba(255,255,255,0.55)"),z.addColorStop(1,"rgba(255,255,255,0)"),k.fillStyle=z,k.fillRect(0,0,128,128);let B=new E8(E);for(let C=0;C<7;C++){let P=new M7(new j8({map:B,transparent:!0,opacity:0.16,depthWrite:!1}));P.scale.set(16,5,1),P.position.set((Y()-0.5)*e9,0.8+Y()*1.4,(Y()-0.5)*fQ),this.scene.add(P),this.mists.push(P)}}}makeBuildingGroup(J){let Q=this.cfg,Z,K=this.bannerTexture;switch(J.type){case"keep":Z=BX(this.mats,Q,K,J.lvl);break;case"house":Z=LX(this.mats,Q);break;case"farm":Z=kX(this.mats,Q);break;case"lumber":Z=zX(this.mats,Q);break;case"mine":Z=AX(this.mats,Q);break;case"storage":Z=CX(this.mats,Q);break;case"barracks":Z=_X(this.mats,Q,K);break;case"tower":Z=PX(this.mats,Q);break;default:throw Error("unknown building type")}let $=PJ[J.type].size;return Z.scale.setScalar(1+(J.lvl-1)*0.045),Z.position.set(LJ(J.x,UJ)+($[0]-1)*NJ/2,0,LJ(J.y,jJ)+($[1]-1)*NJ/2),Z.rotation.y=0,Z.traverse((W)=>{W.userData.bid=J.id}),Z}bannerTexture=null;setBannerTexture(J){this.bannerTexture=J}makeScaffold(J,Q){let Z=new j0,K=this.mats.wood,$=1.6+Math.max(J,Q)*0.35;for(let[Y,X]of[[-1,-1],[1,-1],[-1,1],[1,1]])Z.add(E$(rq(0.06,0.07,$,5),K,Y*J/2,$/2,X*Q/2));for(let Y=0;Y<3;Y++){let X=E$(hX(J+0.2,0.07,0.07),K,0,$/3*(Y+1),Q/2);X.rotation.z=Y%2?0.04:-0.04,Z.add(X),Z.add(E$(hX(0.07,0.07,Q+0.2),K,J/2,$/3*(Y+1),0))}let W=new AJ(new y9(J*0.9,$*0.55),new IJ({color:14207918,roughness:1,side:oJ}));return W.position.y=$*0.62,Z.add(W),Z}makeRing(){return new AJ(new h8(0.5,0.68,24,1,0,sJ*2),new v8({color:16765527,side:oJ,transparent:!0,opacity:0.95}))}makeSign(J){let Q=document.createElement("canvas");Q.width=96,Q.height=96;let Z=Q.getContext("2d"),K=(Y)=>{Z.clearRect(0,0,96,96),Z.fillStyle="rgba(24,20,14,0.85)",Z.strokeStyle=this.cfg.accent,Z.lineWidth=5,tq(Z,18,14,60,60,14),Z.fill(),Z.stroke(),Z.fillStyle="#ffe9b0",Z.font="bold 40px Vazirmatn, sans-serif",Z.textAlign="center",Z.textBaseline="middle",Z.fillText(aJ(Y),48,47)};K(J);let $=new E8(Q);$.colorSpace=M9;let W=new M7(new j8({map:$,transparent:!0,depthWrite:!1}));return W.scale.set(0.85,0.85,1),W.userData.redraw=(Y)=>{K(Y),$.needsUpdate=!0},W}makeBubble(){let J=document.createElement("canvas");J.width=128,J.height=128;let Q=J.getContext("2d"),Z=(W)=>{Q.clearRect(0,0,128,128),Q.fillStyle="rgba(28,24,16,0.88)",Q.beginPath(),Q.arc(64,58,40,0,sJ*2),Q.fill(),Q.beginPath(),Q.moveTo(52,92),Q.lineTo(76,92),Q.lineTo(64,112),Q.closePath(),Q.fill();let Y={wood:"#a8703d",stone:"#b3b8c2",iron:"#7e8ea6",food:"#e8c454",coin:"#f2c545"};Q.fillStyle=Y[W]??"#f2c545",Q.beginPath(),Q.arc(64,58,20,0,sJ*2),Q.fill(),Q.fillStyle="#fff",Q.font="bold 34px Vazirmatn, sans-serif",Q.textAlign="center",Q.textBaseline="middle",Q.fillText("+",64,59)};Z("wood");let K=new E8(J);K.colorSpace=M9;let $=new M7(new j8({map:K,transparent:!0,depthWrite:!1}));return $.scale.set(1,1,1),$.visible=!1,$.userData.redraw=(W)=>{Z(W),K.needsUpdate=!0},$}syncAll(){let J=new Set;for(let Q of this.st.buildings){J.add(Q.id);let Z=this.views.get(Q.id);if(!Z){let K=this.makeBuildingGroup(Q);this.scene.add(K),Z={b:Q,group:K,banners:[]},this.views.set(Q.id,Z),this.collectBanners(K,Z)}this.refreshView(Z)}for(let[Q,Z]of[...this.views])if(!J.has(Q))this.scene.remove(Z.group),gQ(Z.group),this.views.delete(Q)}refreshBuilding(J){let Q=this.views.get(J);if(Q)this.refreshView(Q)}collectBanners(J,Q){J.traverse((Z)=>{let K=Z.banner;if(K)Q.banners.push(K),this.banners.push(K)})}refreshView(J){let Q=J.b,Z=Q.doneAt>0;if(J.group.visible=!Z,Z){if(!J.scaffold){let K=PJ[Q.type].size;J.scaffold=this.makeScaffold(K[0]*NJ*0.86,K[1]*NJ*0.86);let $=LJ(Q.x,UJ)+(K[0]-1)*NJ/2,W=LJ(Q.y,jJ)+(K[1]-1)*NJ/2;J.scaffold.position.set($,0,W),J.ring=this.makeRing(),J.ring.rotation.x=-sJ/2,J.ring.position.set($,0.09,W),this.scene.add(J.scaffold,J.ring)}if(J.sign)J.sign.visible=!1;if(J.bubble)J.bubble.visible=!1}else{if(J.scaffold)this.scene.remove(J.scaffold,J.ring),gQ(J.scaffold),J.scaffold=void 0,J.ring=void 0;if(!J.sign)J.sign=this.makeSign(Q.lvl),this.scene.add(J.sign),J.bubble=this.makeBubble(),this.scene.add(J.bubble);J.sign.userData.redraw(Q.lvl);let K=PJ[Q.type].size,$=LJ(Q.x,UJ)+(K[0]-1)*NJ/2,W=LJ(Q.y,jJ)+(K[1]-1)*NJ/2,Y=Q.type==="keep"?7.6:Q.type==="tower"?7.1:3.4;J.sign.position.set($+K[0]*0.55,Y*0.55+1.6,W),J.bubble.position.set($-K[0]*0.55,Y*0.55+1.7,W)}}spawnLife(){["swordsman","swordsman","archer","spearman","guard"].forEach(($,W)=>{let Y=G$(this.cfg,$,100+W*37);Y.g.userData.noRay=!0;let X=this.randRoad();this.scene.add(Y.g),this.units.push({u:Y,gx:X[0],gy:X[1],tx:X[0],ty:X[1],speed:0.75+W%3*0.16,t0:performance.now()})});for(let $=0;$<2;$++){let W=G$(this.cfg,"villager",300+$*53);W.g.userData.noRay=!0;let Y=this.randRoad();this.scene.add(W.g),this.units.push({u:W,gx:Y[0],gy:Y[1],tx:Y[0],ty:Y[1],speed:0.6+$*0.1,t0:performance.now()})}let Q=this.st.buildings.filter(($)=>$.type==="farm"),Z=0;for(let $ of Q){let W=hQ($);for(let Y=0;Y<2;Y++){let X=yX(),H=LJ($.x,UJ)+2+Y*1.1,U=LJ($.y,jJ)+W[1]*NJ+1.2+Y*0.7;X.g.position.set(H,0,U),this.scene.add(X.g),this.animals.push({a:X,ox:H,oz:U}),Z++}}let K=this.st.buildings.find(($)=>$.type==="keep");if(K&&Z>0){let $=fX();$.g.position.set(LJ(K.x+1,UJ)-2.6,0,LJ(K.y+3,jJ)+2.8),this.scene.add($.g),this.animals.push({a:$,ox:$.g.position.x,oz:$.g.position.z})}for(let $=0;$<3;$++){let W=vX(this.mats);this.scene.add(W.g),this.birds.push({g:W.g,update:W.update,r:14+$*5,a:$*2.1,h:9+$*2.2,s:0.24+$*0.05})}}randRoad(){let J=[...this.roadSet];if(!J.length)return[UJ/2,jJ/2];let Q=J[Math.floor(Math.random()*J.length)];return[Q%UJ,Math.floor(Q/UJ)]}stepUnits(J,Q){for(let Z of this.units){let K=Z.tx-Z.gx,$=Z.ty-Z.gy;if(Math.abs(K)<0.02&&Math.abs($)<0.02){if(q$(Z.u,Q,!1),Math.random()<J*0.5){let W=[];for(let[Y,X]of[[1,0],[-1,0],[0,1],[0,-1]])if(this.roadSet.has((Z.gy+X)*UJ+Z.gx+Y))W.push([Z.gx+Y,Z.gy+X]);if(W.length){let[Y,X]=W[Math.floor(Math.random()*W.length)];Z.tx=Y,Z.ty=X}}}else{let W=LJ(Z.gx,UJ),Y=LJ(Z.gy,jJ),X=LJ(Z.tx,UJ),H=LJ(Z.ty,jJ),U=X-W,N=H-Y,q=Math.hypot(U,N),G=Z.speed*NJ*J;if(q<=G)Z.gx=Z.tx,Z.gy=Z.ty;else Z.gx+=U/NJ*(G/NJ)/(q/NJ),Z.gy+=N/NJ*(G/NJ)/(q/NJ);Z.u.g.position.set(LJ(Z.gx,UJ),0,LJ(Z.gy,jJ)),Z.u.g.rotation.y=Math.atan2(U,N),q$(Z.u,Q,!0,Z.speed)}}for(let Z of this.units)Z.u.g.position.set(LJ(Z.gx,UJ),0,LJ(Z.gy,jJ));for(let Z of this.animals)Z.a.g.position.x=Z.ox+Math.sin(Q*0.5+Z.ox)*0.35,Z.a.g.position.z=Z.oz+Math.cos(Q*0.37+Z.oz)*0.35,Z.a.update(Q);for(let Z of this.birds)Z.a+=J*Z.s,Z.g.position.set(Math.cos(Z.a)*Z.r,Z.h+Math.sin(Q*0.7+Z.r)*0.6,Math.sin(Z.a)*Z.r),Z.g.rotation.y=-Z.a,Z.update(Q)}select(J){if(this.selected=J,!J){this.selRing.visible=!1;return}let Q=this.views.get(J);if(!Q)return;let Z=PJ[Q.b.type].size,K=LJ(Q.b.x,UJ)+(Z[0]-1)*NJ/2,$=LJ(Q.b.y,jJ)+(Z[1]-1)*NJ/2,W=Math.max(Z[0],Z[1])*NJ*0.62;this.selRing.scale.setScalar(W),this.selRing.position.set(K,0.06,$),this.selRing.visible=!0}enterMove(J,Q){if(this.moveId=J,this.buildType=Q,this.ghost)this.scene.remove(this.ghost),gQ(this.ghost),this.ghost=null;if(this.ghostTile.visible=!1,J){let Z=this.views.get(J);if(!Z)return;Z.group.visible=!1,this.ghost=this.makeBuildingGroup(Z.b),this.ghost.traverse((K)=>{let $=K;if($.isMesh){$.castShadow=!1;let W=$.material.clone();W.transparent=!0,W.opacity=0.55,$.material=W}}),this.scene.add(this.ghost)}else if(Q){let Z=PJ[Q].size;this.ghost=new j0;let K=new AJ(new Y9(Z[0]*NJ*0.8,0.6,Z[1]*NJ*0.8),new IJ({color:11184810,transparent:!0,opacity:0.4}));K.position.y=0.3,this.ghost.add(K),this.scene.add(this.ghost)}}updateGhost(J,Q){if(!this.ghost)return;let Z=this.moveId?PJ[this.views.get(this.moveId).b.type].size[0]:PJ[this.buildType].size[0],K=this.moveId?PJ[this.views.get(this.moveId).b.type].size[1]:PJ[this.buildType].size[1];this.ghostGX=J,this.ghostGY=Q;let $=LJ(J,UJ)+(Z-1)*NJ/2,W=LJ(Q,jJ)+(K-1)*NJ/2;this.ghost.position.set($,0,W),this.ghostTile.position.set($,0.05,W),this.ghostTile.scale.set(Z,K,1),this.ghostTile.visible=!0;let Y=this.moveId?!bX(this.st,this.moveId,J,Q,Z,K):!bX(this.st,null,J,Q,Z,K);this.ghostTile.material.color.set(Y?4513126:14500932),this.ghostFree=Y}ghostFree=!1;confirmMove(){if(!this.moveId||!this.ghostFree)return!1;let J=this.st.buildings.find((K)=>K.id===this.moveId);if(!J)return!1;J.x=this.ghostGX,J.y=this.ghostGY;let Q=this.views.get(J.id),Z=PJ[J.type].size;return Q.group.position.set(LJ(J.x,UJ)+(Z[0]-1)*NJ/2,0,LJ(J.y,jJ)+(Z[1]-1)*NJ/2),Q.group.visible=J.doneAt<=0,this.exitMove(),this.select(J.id),!0}cancelMove(){if(this.moveId){let J=this.views.get(this.moveId);if(J)J.group.visible=J.b.doneAt<=0}this.exitMove()}exitMove(){if(this.ghost)this.scene.remove(this.ghost),gQ(this.ghost),this.ghost=null;this.ghostTile.visible=!1,this.moveId=null,this.buildType=null}resize(){let J=this.canvas.parentElement??this.canvas,Q=J.clientWidth||window.innerWidth,Z=J.clientHeight||window.innerHeight;this.renderer.setSize(Q,Z,!1);let K=Q/Z;this.cam.left=-this.view/2*K,this.cam.right=this.view/2*K,this.cam.top=this.view/2,this.cam.bottom=-this.view/2,this.cam.updateProjectionMatrix()}applyCamera(){this.azim+=(this.azimTarget-this.azim)*0.14;let J=Math.cos(this.elev),Q=Math.sin(this.elev),Z=new v(Math.cos(this.azim)*J,Q,Math.sin(this.azim)*J);this.cam.position.copy(this.target).add(Z.multiplyScalar(this.camR)),this.cam.lookAt(this.target);let K=(this.canvas.clientWidth||1)/(this.canvas.clientHeight||1);this.cam.left=-this.view/2*K,this.cam.right=this.view/2*K,this.cam.top=this.view/2,this.cam.bottom=-this.view/2,this.cam.updateProjectionMatrix()}rotate(J){this.azimTarget+=J*(sJ/2)}clampTarget(){let J=e9/2-2;this.target.x=Math.max(-J,Math.min(J,this.target.x)),this.target.z=Math.max(-J,Math.min(J,this.target.z))}screenRay(J,Q){let Z=this.canvas.getBoundingClientRect(),K=new Z0((J-Z.left)/Z.width*2-1,-((Q-Z.top)/Z.height)*2+1);return this.ray.setFromCamera(K,this.cam),this.ray}pickBuilding(J,Q){let K=this.screenRay(J,Q).intersectObjects(this.scene.children,!0);for(let $ of K){let W=$.object,Y=!1;while(W){if(W.isSprite||W.userData.noRay){Y=!0;break}W=W.parent}if(Y)continue;let X=$.object,H=null;while(X){if(X.userData&&X.userData.bid){H=X.userData.bid;break}X=X.parent}if(H){let U=this.st.buildings.find((N)=>N.id===H);return U&&U.doneAt<=0?H:null}return null}return null}groundPoint(J,Q){let Z=this.screenRay(J,Q),K=new O9(new v(0,1,0),0),$=new v;return Z.ray.intersectPlane(K,$)?$:null}bindInput(){let J=this.canvas,Q=(W)=>{if(J.setPointerCapture(W.pointerId),this.pointers.set(W.pointerId,{x:W.clientX,y:W.clientY}),this.pointers.size===1)this.ptrDown={x:W.clientX,y:W.clientY,t:performance.now(),moved:!1,id:W.pointerId};else if(this.pointers.size===2){let[Y,X]=[...this.pointers.values()];this.pinch={d0:Math.hypot(Y.x-X.x,Y.y-X.y),view0:this.view,active:!0}}},Z=(W)=>{if(!this.pointers.has(W.pointerId))return;let Y=this.pointers.get(W.pointerId),X=W.clientX-Y.x,H=W.clientY-Y.y;if(this.pointers.set(W.pointerId,{x:W.clientX,y:W.clientY}),this.pointers.size===2&&this.pinch.active){let[U,N]=[...this.pointers.values()],q=Math.hypot(U.x-N.x,U.y-N.y);this.view=Math.max(this.viewMin,Math.min(this.viewMax,this.pinch.view0*(this.pinch.d0/Math.max(20,q)))),this.resize();return}if(this.moveId||this.buildType){let U=this.groundPoint(W.clientX,W.clientY);if(U)this.updateGhost(xQ(U.x,UJ),xQ(U.z,jJ));return}if(Math.abs(W.clientX-this.ptrDown.x)+Math.abs(W.clientY-this.ptrDown.y)>8)this.ptrDown.moved=!0;if(this.ptrDown.moved){let U=this.view/(this.canvas.clientHeight||1),N=new v(Math.sin(this.azim),0,-Math.cos(this.azim)),q=new v(Math.cos(this.azim),0,Math.sin(this.azim));this.target.addScaledVector(N,-X*U),this.target.addScaledVector(q,H*U),this.clampTarget()}},K=(W)=>{if(this.pointers.delete(W.pointerId),this.pointers.size<2)this.pinch.active=!1;if(this.ptrDown.id!==W.pointerId)return;let Y=performance.now()-this.ptrDown.t;if(!this.ptrDown.moved&&Y<600){if(this.moveId||this.buildType){let U=this.groundPoint(W.clientX,W.clientY);if(U){if(this.updateGhost(xQ(U.x,UJ),xQ(U.z,jJ)),this.ghostFree){if(this.moveId)this.confirmMove(),this.cb.onToast("سازه جابه‌جا شد.");else if(this.buildType)this.cb.onToast("جای سازه تأیید شد — از پنل بساز.")}}return}let H=this.pickBuilding(W.clientX,W.clientY);if(H)this.select(H),this.cb.onSelect(H);else{this.select(null),this.cb.onSelect(null);let U=this.groundPoint(W.clientX,W.clientY);if(U){for(let[N,q]of this.views)if(q.bubble&&q.bubble.visible&&q.bubble.position.distanceTo(U)<1.4){this.cb.onCollect(N);break}}}}},$=(W)=>{W.preventDefault(),this.view=Math.max(this.viewMin,Math.min(this.viewMax,this.view*(W.deltaY>0?1.08:0.93))),this.resize()};J.addEventListener("pointerdown",Q),J.addEventListener("pointermove",Z),J.addEventListener("pointerup",K),J.addEventListener("pointercancel",K),J.addEventListener("wheel",$,{passive:!1}),this.disposeFns.push(()=>{J.removeEventListener("pointerdown",Q),J.removeEventListener("pointermove",Z),J.removeEventListener("pointerup",K),J.removeEventListener("pointercancel",K),J.removeEventListener("wheel",$)})}loop=(J)=>{this.raf=requestAnimationFrame(this.loop);let Q=Math.min(0.05,(J-this.lastT)/1000);this.lastT=J,this.clock+=Q;let Z=this.clock;this.applyCamera(),this.stepUnits(Q,Z);for(let K of this.banners)K.update(Z);for(let K of this.mists)if(K.position.x+=Q*0.5,K.position.x>e9/2+8)K.position.x=-e9/2-8;this.selRing.rotation.z+=Q*0.8;for(let[,K]of this.views){if(K.scaffold&&K.ring&&K.b.doneAt>0){let W=PJ[K.b.type].timerMs,Y=Math.max(0,Math.min(1,1-(K.b.doneAt-J)/W)),X=new h8(0.5,0.68,24,1,-sJ/2,sJ*2*Math.max(0.02,Y));K.ring.geometry.dispose(),K.ring.geometry=X}if(K.bubble){let $=eq(K.b,J),W=$.kind,Y=$.amount>=8;if(K.bubble.visible=Y,Y&&K.bubble.userData.lastKind!==W)K.bubble.userData.redraw(W),K.bubble.userData.lastKind=W;if(Y)K.bubble.position.y=(K.b.type==="keep"?4.4:K.b.type==="tower"?4.2:2.6)+Math.sin(Z*2+K.b.x)*0.12}}this.renderer.render(this.scene,this.cam)};dispose(){cancelAnimationFrame(this.raf),this.ro.disconnect();for(let J of this.disposeFns)J();this.scene.traverse((J)=>{let Q=J;if(Q.isMesh||J.isSprite){Q.geometry?.dispose?.();let Z=Q.material;if(Array.isArray(Z))Z.forEach((K)=>K.dispose());else Z?.dispose?.()}}),this.renderer.dispose()}}var xX=(J,Q,Z)=>new Y9(J,Q,Z),rq=(J,Q,Z,K=6)=>new v9(J,Q,Z,K),hX=xX;function E$(J,Q,Z,K,$){let W=new AJ(J,Q);return W.position.set(Z,K,$),W.castShadow=!0,W}function tq(J,Q,Z,K,$,W){J.beginPath(),J.moveTo(Q+W,Z),J.arcTo(Q+K,Z,Q+K,Z+$,W),J.arcTo(Q+K,Z+$,Q,Z+$,W),J.arcTo(Q,Z+$,Q,Z,W),J.arcTo(Q,Z,Q+K,Z,W),J.closePath()}function gQ(J){J.traverse((Q)=>{let Z=Q;if(Z.isMesh){Z.geometry?.dispose?.();let K=Z.material;if(Array.isArray(K))K.forEach(($)=>$.dispose());else K?.dispose?.()}})}function eq(J,Q){let Z=PJ[J.type];if(!Z.produce||J.doneAt>0)return{kind:"",amount:0};let K=Math.max(0,Math.min((Q-J.lastAt)/3600000,8)),$="",W=0;for(let Y of Object.keys(Z.produce)){let X=Math.min(Z.pCap??500,(Z.produce[Y]??0)*J.lvl*K);if(X>W)W=X,$=Y}return{kind:$,amount:W}}function bX(J,Q,Z,K,$,W){if(Z<nJ.x0||K<nJ.y0||Z+$-1>nJ.x1||K+W-1>nJ.y1)return!0;for(let Y of J.buildings){if(Y.id===Q)continue;let[X,H]=PJ[Y.type].size;if(Z<Y.x+X&&Y.x<Z+$&&K<Y.y+H&&Y.y<K+W)return!0}return!1}function gX(){if(typeof navigator>"u")return"mid";let J=navigator.hardwareConcurrency??4,Q=navigator.deviceMemory??4,Z=Math.min(window.screen.width,window.screen.height)<420,K=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);if(J>=8&&Q>=6&&!Z)return"high";if(J>=4&&Q>=3)return K?"mid":"high";return"low"}var JE={high:{tier:"high",dpr:2,clothSegments:[34,46],embers:170,worldShadowMap:1024,terrainSegments:110,treeCount:90,grassInstances:900,particles:260,anisotropy:4},mid:{tier:"mid",dpr:1.6,clothSegments:[24,32],embers:90,worldShadowMap:0,terrainSegments:80,treeCount:60,grassInstances:450,particles:150,anisotropy:2},low:{tier:"low",dpr:1.25,clothSegments:[16,22],embers:50,worldShadowMap:0,terrainSegments:56,treeCount:34,grassInstances:0,particles:80,anisotropy:1}};function pX(J){return JE[J]}var g0=(J)=>{let Q=document.querySelector(J);if(!Q)throw Error("missing "+J);return Q},dX=new URLSearchParams(location.search),d8=dX.get("realm")??"targon";if(!J$[d8])d8="targon";var uX=dX.get("land")??"t1",z7=J$[d8];function QE(){try{let J=localStorage.getItem("lands.quality");if(J==="high"||J==="mid"||J==="low")return J}catch{}return gX()}var J8=QE(),ZE=pX(J8),KE={tier:J8,dpr:ZE.dpr,shadows:J8==="high"?2048:J8==="mid"?1024:0,trees:J8==="high"?90:J8==="mid"?55:30,props:J8==="high"?26:J8==="mid"?16:8},O$=OX(d8,uX),GJ=O$.st,cX=Date.now(),$E=E6(GJ,cX);if(O$.fresh){let J=NX[d8],Q=0;for(let[Z,K,$]of J.init)GJ.buildings.push({id:`i${Q++}`,type:$,lvl:1,targetLvl:1,x:Z,y:K,doneAt:0,lastAt:cX});b9(GJ)}var lX=0;function U9(J){let Q=g0("#toast");Q.textContent=J,Q.classList.add("on"),window.clearTimeout(lX),lX=window.setTimeout(()=>Q.classList.remove("on"),2600)}var WE=["wood","stone","iron","food","coin"],hJ,N9=null;function m8(){let J=Z$(GJ);for(let Q of WE)g0(`#r-${Q}`).textContent=aJ(Math.floor(GJ.res[Q])),g0(`#c-${Q}`).textContent="/"+aJ(Math.floor(J[Q])),g0(`.res.r-${Q}`).classList.toggle("full",GJ.res[Q]>=J[Q]*0.98)}var nX=(J)=>Object.keys(J).map((Q)=>{let Z=J[Q]??0;return`<span class="c ${GJ.res[Q]<Z?"lack":""}">${G6[Q]}: ${aJ(Z)}</span>`}).join("");function YE(J){let Q=Math.max(0,Math.ceil(J/1000));return`${aJ(Math.floor(Q/60))}:${aJ(String(Q%60).padStart(2,"0"))}`}function O6(J){let Q=GJ.buildings.find((U)=>U.id===J);if(!Q)return;let Z=PJ[Q.type];N9=J,g0("#sel-name").textContent=Z.fa,g0("#sel-lvl").textContent=Q.doneAt>0?`سطح ${aJ(Q.targetLvl??Q.lvl)} در راه`:`سطح ${aJ(Q.lvl)}`,g0("#sel-sub").textContent=Q.doneAt>0?"در حال ساخت…":`${Z.size[0]}×${Z.size[1]} خانهٔ شبکه`,g0("#sel-desc").textContent=Z.desc;let K=g0("#sel-prod");if(Z.produce)K.innerHTML="<span>تولید در ساعت:</span>"+Object.keys(Z.produce).map((U)=>`<span>${G6[U]}: ${aJ(Math.round((Z.produce[U]??0)*Q.lvl))}</span>`).join("")+`<span>ظرفیت انبار سازه: ${aJ(Z.pCap??0)}</span>`;else if(Z.store)K.innerHTML="<span>افزودن سقف انبار در هر سطح:</span>"+Object.keys(Z.store).map((U)=>`<span>${G6[U]}: +${aJ(Z.store[U]??0)}</span>`).join("");else K.innerHTML="<span>سازهٔ دفاعی — برای نسخهٔ نبرد</span>";let $=g0("#btn-upgrade"),W=g0("#sel-cost"),Y=g0("#sel-timer"),X=g0("#btn-move"),H=g0("#btn-collect");if(Q.doneAt>0)$.disabled=!0,X.disabled=!0,W.innerHTML="",Y.textContent=`آماده‌سازی تا ${YE(Q.doneAt-Date.now())}`,H.style.display="none";else{if(X.disabled=!1,Y.textContent="",Q.lvl>=Z.maxLvl)$.disabled=!0,W.innerHTML='<span class="c">به بیشینهٔ سطح رسیده است</span>';else{let q=W$(Q.type,Q.lvl+1);$.disabled=!bQ(GJ,q),W.innerHTML=`هزینهٔ ارتقا به سطح ${aJ(Q.lvl+1)}: `+nX(q)}let U=K$(Q,Date.now()),N=Object.keys(U).reduce((q,G)=>q+U[G],0);H.style.display=Z.produce&&N>=1?"flex":"none"}g0("#selpanel").classList.add("on")}function D$(){g0("#selpanel").classList.remove("on"),N9=null}var XE={onSelect:(J)=>{if(J)O6(J);else D$()},onCollect:(J)=>sX(J),onToast:U9};function sX(J){let Q=$$(GJ,J,Date.now());if(Object.keys(Q).reduce((K,$)=>K+Q[$],0)>0){let K=Object.keys(Q).filter(($)=>Q[$]>0).map(($)=>`${G6[$]} +${aJ(Math.floor(Q[$]))}`);if(U9(`برداشت شد: ${K.join(" · ")}`),b9(GJ),m8(),N9)O6(N9)}}var HE={house:"bi-house",farm:"bi-farm",lumber:"bi-lumber",mine:"bi-mine",storage:"bi-storage",barracks:"bi-barracks",tower:"bi-tower"};function UE(){let J=g0("#buildlist");J.innerHTML="",Object.keys(PJ).forEach((Q)=>{if(Q==="keep")return;let Z=PJ[Q],K=W$(Q,1),$=bQ(GJ,K),W=document.createElement("div");W.className="buildele",W.innerHTML=`<div class="bic ${HE[Q]}"></div><div style="flex:1"><div class="bname">${Z.fa}</div><div class="bdesc">${Z.desc}</div><div class="costline" style="margin:4px 0 0">${nX(K)}</div></div><div style="font-size:11px;color:${$?"var(--ok)":"var(--bad)"}">${$?"آماده":"کمبود منبع"}</div>`,W.addEventListener("click",()=>{if(!$){U9("منابع کافی نیست.");return}g0("#buildmenu").classList.remove("on"),D$(),hJ.select(null),hJ.enterMove(null,Q),g0("#confirmhint").textContent=`جای ${Z.fa} را لمس کن`,g0("#confirmbar").classList.add("on")}),J.appendChild(W)}),g0("#buildmenu").classList.add("on")}function NE(){let J=g0("#missionlist");J.innerHTML="";for(let Q of DX){let{cur:Z,done:K}=RX(GJ,Q),$=Math.min(100,Math.round(Z/Q.goal*100)),W=document.createElement("div");W.className="mission",W.innerHTML=`<div class="mname">${Q.fa}</div><div class="mbar"><div style="width:${$}%"></div></div><div class="mmeta"><span>${aJ(Math.min(Z,Q.goal))} از ${aJ(Q.goal)}</span><span>${K?"انجام شد":$+"٪"}</span></div>`,J.appendChild(W)}}async function mX(){g0("#boot-title").textContent=`دهکدهٔ ${z7.fa}`,g0("#realm-name").textContent=z7.fa,g0("#realmchip").textContent=`سرزمین: ${z7.fa} · دهکدهٔ تو`;let J=await new Promise((Y)=>{new kQ().load(z7.bannerTex,(X)=>{X.colorSpace=M9,Y(X)},void 0,()=>Y(null))}),Q=document.createElement("canvas");if(g0("#stage").appendChild(Q),hJ=new F$(Q,GJ,z7,KE,J,XE),$E)hJ.syncAll();m8(),g0("#btn-build").addEventListener("click",UE),g0("#btn-missions").addEventListener("click",()=>{NE(),g0("#missionsheet").classList.add("on")}),g0("#btn-settings").addEventListener("click",()=>g0("#settingsheet").classList.add("on")),g0("#btn-map").addEventListener("click",()=>{try{localStorage.setItem("lands.lastLand",JSON.stringify({r:d8,l:uX}))}catch{}location.href="/game/map/index.html"}),g0("#btn-alliance").addEventListener("click",()=>U9("اتحادها در نسخهٔ بعد می‌آیند — سپاه تو در حال شکل‌گرفتن است.")),g0("#btn-shop").addEventListener("click",()=>U9("فروشگاه رسمی فقط از طریق Backend فعال می‌شود؛ هیچ خرید مستقیمی وجود ندارد.")),g0("#btn-upgrade").addEventListener("click",()=>{if(!N9)return;let Y=N9;if(Y$(GJ,Y,Date.now()))hJ.refreshBuilding(Y),b9(GJ),m8(),O6(Y),U9("ارتقا آغاز شد؛ تا پایان انتظار بکش.");else U9("منابع کافی نیست.")}),g0("#btn-move").addEventListener("click",()=>{if(!N9)return;let Y=N9;D$(),hJ.enterMove(Y,null),g0("#confirmhint").textContent="جای تازهٔ سازه را لمس کن",g0("#confirmbar").classList.add("on")}),g0("#btn-collect").addEventListener("click",()=>{if(N9)sX(N9)}),g0("#btn-rot-r").addEventListener("click",()=>hJ.rotate(1)),g0("#btn-rot-l").addEventListener("click",()=>hJ.rotate(-1)),g0("#btn-confirm").addEventListener("click",()=>{if(hJ.moveId)if(hJ.confirmMove())b9(GJ),U9("سازه جابه‌جا شد.");else U9("این‌جا جا نیست.");else if(hJ.buildType){let Y=hJ.buildType;if(FX(GJ,Y,hJ.ghostGX,hJ.ghostGY,Date.now()))hJ.syncAll(),b9(GJ),m8(),U9(`${PJ[Y].fa} در حال ساخت است.`);else U9("منابع کافی یا جای مناسب نیست.")}g0("#confirmbar").classList.remove("on"),hJ.cancelMove()}),g0("#btn-cancel").addEventListener("click",()=>{g0("#confirmbar").classList.remove("on"),hJ.cancelMove()}),document.querySelectorAll("#settingsheet [data-q]").forEach((Y)=>{Y.addEventListener("click",()=>{let X=Y.dataset.q;try{localStorage.setItem("lands.quality",X)}catch{}U9("کیفیت تغییر کرد — صفحه تازه‌سازی می‌شود."),setTimeout(()=>location.reload(),600)})});let Z=!1;g0("#btn-reset").addEventListener("click",()=>{if(!Z){Z=!0,g0("#btn-reset").textContent="مطمئنی؟ دوباره بزن",setTimeout(()=>{Z=!1,g0("#btn-reset").textContent="بازسازی دهکده"},2500);return}try{localStorage.removeItem(`lands.village.${d8}`)}catch{}location.reload()}),document.addEventListener("pointerdown",(Y)=>{let X=Y.target;for(let H of["#buildmenu","#missionsheet","#settingsheet"]){let U=g0(H);if(U.classList.contains("on")&&!U.contains(X)&&!(X.closest&&X.closest(".barbtn")))U.classList.remove("on")}}),fetch("/health",{cache:"no-store"}).then((Y)=>Y.ok?Y.json():Promise.reject(Y.status)).then((Y)=>{g0("#serverdot").classList.toggle("on",!!(Y&&(Y.status==="ok"||Y.database==="ok"))),g0("#serverdot").classList.toggle("off",!(Y&&(Y.status==="ok"||Y.database==="ok")))}).catch(()=>{g0("#serverdot").classList.add("off")});let K=0,$=performance.now(),W=(Y)=>{if(K++,Y-$>=1000)g0("#fps").textContent=`${K} fps`,K=0,$=Y;requestAnimationFrame(W)};requestAnimationFrame(W),setInterval(()=>{let Y=Date.now(),X=GJ.buildings.some((H)=>H.doneAt>0);if(E6(GJ,Y)){if(hJ.syncAll(),U9("سازه‌ای آماده شد!"),N9)O6(N9)}if(X&&N9)O6(N9);m8()},1000),setInterval(()=>b9(GJ),5000),window.addEventListener("pagehide",()=>b9(GJ)),window.__VILLAGE={st:GJ,scene:hJ,addRes(Y){Object.keys(Y).forEach((X)=>{GJ.res[X]+=Y[X]??0}),b9(GJ),m8()},forceFinish(Y){let X=GJ.buildings.find((H)=>H.id===Y);if(X)X.doneAt=1,E6(GJ,Date.now()),hJ.syncAll(),b9(GJ),m8()},upgrade(Y){return Y$(GJ,Y,Date.now())},collect(Y){return $$(GJ,Y,Date.now())},buildings:()=>GJ.buildings.map((Y)=>({id:Y.id,type:Y.type,lvl:Y.lvl,x:Y.x,y:Y.y,doneAt:Y.doneAt})),tier:J8},setTimeout(()=>{if(g0("#boot").classList.add("off"),O$.fresh)U9(`دهکدهٔ ${z7.fa} از امروز مال توست — قلعه‌ات را آباد کن!`)},500)}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mX);else mX();
