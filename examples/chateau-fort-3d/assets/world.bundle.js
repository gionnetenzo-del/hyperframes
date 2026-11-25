var __hfSeed=12345;function __hfRand(){__hfSeed=(__hfSeed*1664525+1013904223)>>>0;return __hfSeed/4294967296;}
(()=>{var ul=1;var dl=1,za=2;var fl=4;var pl="srgb";class Mi{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var _r=Math.PI/180,Kr=180/Math.PI;function Yi(){let t=__hfRand()*4294967295|0,e=__hfRand()*4294967295|0,n=__hfRand()*4294967295|0,i=__hfRand()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function ml(t,e){return(t%e+e)%e}function yr(t,e,n){return(1-n)*t+n*e}function is(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error("Invalid component type.")}}class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=__hfRand(),this.y=__hfRand(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xe{constructor(t,e,n,i,s,r,o,a,c){if(xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,o,a,c)}set(t,e,n,i,s,r,o,a,c){let l=this.elements;return l[0]=t,l[1]=i,l[2]=o,l[3]=e,l[4]=s,l[5]=a,l[6]=n,l[7]=r,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[3],a=n[6],c=n[1],l=n[4],h=n[7],u=n[2],d=n[5],p=n[8],g=i[0],y=i[3],f=i[6],m=i[1],w=i[4],_=i[7],C=i[2],D=i[5],I=i[8];return s[0]=r*g+o*m+a*C,s[3]=r*y+o*w+a*D,s[6]=r*f+o*_+a*I,s[1]=c*g+l*m+h*C,s[4]=c*y+l*w+h*D,s[7]=c*f+l*_+h*I,s[2]=u*g+d*m+p*C,s[5]=u*y+d*w+p*D,s[8]=u*f+d*_+p*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],c=t[7],l=t[8];return e*r*l-e*o*c-n*s*l+n*o*a+i*s*c-i*r*a}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],c=t[7],l=t[8],h=l*r-o*c,u=o*a-l*s,d=c*s-r*a,p=e*h+n*u+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return t[0]=h*g,t[1]=(i*c-l*n)*g,t[2]=(o*n-i*r)*g,t[3]=u*g,t[4]=(l*e-i*a)*g,t[5]=(i*s-o*e)*g,t[6]=d*g,t[7]=(n*a-c*e)*g,t[8]=(r*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,o){let a=Math.cos(s),c=Math.sin(s);return this.set(n*a,n*c,-n*(a*r+c*o)+r+t,-i*c,i*a,-i*(-c*r+a*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(vr.makeScale(t,e)),this}rotate(t){return this.premultiply(vr.makeRotation(-t)),this}translate(t,e){return this.premultiply(vr.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var vr=new xe;function Ga(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function tr(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function gl(){let t=tr("canvas");return t.style.display="block",t}var zo={};function us(t){if(t in zo)return;zo[t]=!0,console.warn(t)}function xl(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function _l(t){let e=t.elements;e[2]=0.5*e[2]+0.5*e[3],e[6]=0.5*e[6]+0.5*e[7],e[10]=0.5*e[10]+0.5*e[11],e[14]=0.5*e[14]+0.5*e[15]}function yl(t){let e=t.elements;if(e[11]===-1)e[10]=-e[10]-1,e[14]=-e[14];else e[10]=-e[10],e[14]=-e[14]+1}var we={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;if(this.spaces[e].transfer==="srgb")t.r=Jn(t.r),t.g=Jn(t.g),t.b=Jn(t.b);if(this.spaces[e].primaries!==this.spaces[n].primaries)t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ);if(this.spaces[n].transfer==="srgb")t.r=Xi(t.r),t.g=Xi(t.g),t.b=Xi(t.b);return t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){if(t==="")return"linear";return this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Jn(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function Xi(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var Go=[0.64,0.33,0.3,0.6,0.15,0.06],ko=[0.2126,0.7152,0.0722],Ho=[0.3127,0.329],Wo=new xe().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Vo=new xe().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);we.define({["srgb-linear"]:{primaries:Go,whitePoint:Ho,transfer:"linear",toXYZ:Wo,fromXYZ:Vo,luminanceCoefficients:ko,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Go,whitePoint:Ho,transfer:"srgb",toXYZ:Wo,fromXYZ:Vo,luminanceCoefficients:ko,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}});var Ci;class ka{static getDataURL(t){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{if(Ci===void 0)Ci=tr("canvas");Ci.width=t.width,Ci.height=t.height;let n=Ci.getContext("2d");if(t instanceof ImageData)n.putImageData(t,0,0);else n.drawImage(t,0,0,t.width,t.height);e=Ci}if(e.width>2048||e.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",0.6);else return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=tr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Jn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(Jn(e[n]/255)*255);else e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var vl=0;class so{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vl++}),this.uuid=Yi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)if(i[r].isDataTexture)s.push(Mr(i[r].image));else s.push(Mr(i[r]))}else s=Mr(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function Mr(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return ka.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var Ml=0;class on extends Mi{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,o=1023,a=1009,c=on.DEFAULT_ANISOTROPY,l=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Ml++}),this.uuid=Yi(),this.name="",this.source=new so(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=300;on.DEFAULT_ANISOTROPY=1;class Ge{constructor(t=0,e=0,n=0,i=1){Ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,o=0.1,a=t.elements,c=a[0],l=a[4],h=a[8],u=a[1],d=a[5],p=a[9],g=a[2],y=a[6],f=a[10];if(Math.abs(l-u)<0.01&&Math.abs(h-g)<0.01&&Math.abs(p-y)<0.01){if(Math.abs(l+u)<0.1&&Math.abs(h+g)<0.1&&Math.abs(p+y)<0.1&&Math.abs(c+d+f-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,_=(d+1)/2,C=(f+1)/2,D=(l+u)/4,I=(h+g)/4,R=(p+y)/4;if(w>_&&w>C)if(w<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(w),i=D/n,s=I/n;else if(_>C)if(_<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(_),n=D/i,s=R/i;else if(C<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(C),n=I/s,i=R/s;return this.set(n,i,s,e),this}let m=Math.sqrt((y-p)*(y-p)+(h-g)*(h-g)+(u-l)*(u-l));if(Math.abs(m)<0.001)m=1;return this.x=(y-p)/m,this.y=(h-g)/m,this.z=(u-l)/m,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=__hfRand(),this.y=__hfRand(),this.z=__hfRand(),this.w=__hfRand(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ha extends Mi{constructor(t=1,e=1,n={}){super();this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new on(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);if(this.texture.source=new so(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null)this.depthTexture=t.depthTexture.clone();return this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends Ha{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class ro extends on{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wa extends on{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ln{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,o){let a=n[i+0],c=n[i+1],l=n[i+2],h=n[i+3],u=s[r+0],d=s[r+1],p=s[r+2],g=s[r+3];if(o===0){t[e+0]=a,t[e+1]=c,t[e+2]=l,t[e+3]=h;return}if(o===1){t[e+0]=u,t[e+1]=d,t[e+2]=p,t[e+3]=g;return}if(h!==g||a!==u||c!==d||l!==p){let y=1-o,f=a*u+c*d+l*p+h*g,m=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){let C=Math.sqrt(w),D=Math.atan2(C,f*m);y=Math.sin(y*D)/C,o=Math.sin(o*D)/C}let _=o*m;if(a=a*y+u*_,c=c*y+d*_,l=l*y+p*_,h=h*y+g*_,y===1-o){let C=1/Math.sqrt(a*a+c*c+l*l+h*h);a*=C,c*=C,l*=C,h*=C}}t[e]=a,t[e+1]=c,t[e+2]=l,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,r){let o=n[i],a=n[i+1],c=n[i+2],l=n[i+3],h=s[r],u=s[r+1],d=s[r+2],p=s[r+3];return t[e]=o*p+l*h+a*d-c*u,t[e+1]=a*p+l*u+c*h-o*d,t[e+2]=c*p+l*d+o*u-a*h,t[e+3]=l*p-o*h-a*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:o,sin:a}=Math,c=o(n/2),l=o(i/2),h=o(s/2),u=a(n/2),d=a(i/2),p=a(s/2);switch(r){case"XYZ":this._x=u*l*h+c*d*p,this._y=c*d*h-u*l*p,this._z=c*l*p+u*d*h,this._w=c*l*h-u*d*p;break;case"YXZ":this._x=u*l*h+c*d*p,this._y=c*d*h-u*l*p,this._z=c*l*p-u*d*h,this._w=c*l*h+u*d*p;break;case"ZXY":this._x=u*l*h-c*d*p,this._y=c*d*h+u*l*p,this._z=c*l*p+u*d*h,this._w=c*l*h-u*d*p;break;case"ZYX":this._x=u*l*h-c*d*p,this._y=c*d*h+u*l*p,this._z=c*l*p-u*d*h,this._w=c*l*h+u*d*p;break;case"YZX":this._x=u*l*h+c*d*p,this._y=c*d*h+u*l*p,this._z=c*l*p-u*d*h,this._w=c*l*h-u*d*p;break;case"XZY":this._x=u*l*h-c*d*p,this._y=c*d*h-u*l*p,this._z=c*l*p+u*d*h,this._w=c*l*h+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10],u=n+o+h;if(u>0){let d=0.5/Math.sqrt(u+1);this._w=0.25/d,this._x=(l-a)*d,this._y=(s-c)*d,this._z=(r-i)*d}else if(n>o&&n>h){let d=2*Math.sqrt(1+n-o-h);this._w=(l-a)/d,this._x=0.25*d,this._y=(i+r)/d,this._z=(s+c)/d}else if(o>h){let d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+r)/d,this._y=0.25*d,this._z=(a+l)/d}else{let d=2*Math.sqrt(1+h-n-o);this._w=(r-i)/d,this._x=(s+c)/d,this._y=(a+l)/d,this._z=0.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<Number.EPSILON)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(rn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:o,_y:a,_z:c,_w:l}=e;return this._x=n*l+r*o+i*c-s*a,this._y=i*l+r*a+s*o-n*c,this._z=s*l+r*c+n*a-i*o,this._w=r*l-n*o-i*a-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,r=this._w,o=r*t._w+n*t._x+i*t._y+s*t._z;if(o<0)this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o;else this.copy(t);if(o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;let a=1-o*o;if(a<=Number.EPSILON){let d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(a),l=Math.atan2(c,o),h=Math.sin((1-e)*l)/c,u=Math.sin(e*l)/c;return this._w=r*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*__hfRand(),e=2*Math.PI*__hfRand(),n=__hfRand(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xo.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:o,w:a}=t,c=2*(r*i-o*n),l=2*(o*e-s*i),h=2*(s*n-r*e);return this.x=e+a*c+r*h-o*l,this.y=n+a*l+o*c-s*h,this.z=i+a*h+s*l-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:o,z:a}=e;return this.x=i*a-s*o,this.y=s*r-n*a,this.z=n*o-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sr.copy(this).projectOnVector(t),this.sub(Sr)}reflect(t){return this.sub(Sr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(rn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=__hfRand(),this.y=__hfRand(),this.z=__hfRand(),this}randomDirection(){let t=__hfRand()*Math.PI*2,e=__hfRand()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Sr=new O,Xo=new Ln;class ai{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++){if(t.isMesh===!0)t.getVertexPosition(r,An);else An.fromBufferAttribute(s,r);An.applyMatrix4(t.matrixWorld),this.expandByPoint(An)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();Ts.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();Ts.copy(n.boundingBox)}Ts.applyMatrix4(t.matrixWorld),this.union(Ts)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),As.subVectors(this.max,ss),Ii.subVectors(t.a,ss),Pi.subVectors(t.b,ss),Li.subVectors(t.c,ss),jn.subVectors(Pi,Ii),ti.subVectors(Li,Pi),di.subVectors(Ii,Li);let e=[0,-jn.z,jn.y,0,-ti.z,ti.y,0,-di.z,di.y,jn.z,0,-jn.x,ti.z,0,-ti.x,di.z,0,-di.x,-jn.y,jn.x,0,-ti.y,ti.x,0,-di.y,di.x,0];if(!wr(e,Ii,Pi,Li,As))return!1;if(e=[1,0,0,0,1,0,0,0,1],!wr(e,Ii,Pi,Li,As))return!1;return Rs.crossVectors(jn,ti),e=[Rs.x,Rs.y,Rs.z],wr(e,Ii,Pi,Li,As)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(An).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}var Vn=[new O,new O,new O,new O,new O,new O,new O,new O],An=new O,Ts=new ai,Ii=new O,Pi=new O,Li=new O,jn=new O,ti=new O,di=new O,ss=new O,As=new O,Rs=new O,fi=new O;function wr(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){fi.fromArray(t,r);let a=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),c=e.dot(fi),l=n.dot(fi),h=i.dot(fi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Sl=new ai,rs=new O,br=new O;class Si{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else Sl.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rs.subVectors(t,this.center);let e=rs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(rs,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rs.copy(t.center).add(br)),this.expandByPoint(rs.copy(t.center).sub(br));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}var Xn=new O,Er=new O,Cs=new O,ei=new O,Tr=new O,Is=new O,Ar=new O;class oo{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){Er.copy(t).add(e).multiplyScalar(0.5),Cs.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(Er);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(Cs),o=ei.dot(this.direction),a=-ei.dot(Cs),c=ei.lengthSq(),l=Math.abs(1-r*r),h,u,d,p;if(l>0)if(h=r*a-o,u=r*o-a,p=s*l,h>=0)if(u>=-p)if(u<=p){let g=1/l;h*=g,u*=g,d=h*(h+r*u+2*o)+u*(r*h+u+2*a)+c}else u=s,h=Math.max(0,-(r*u+o)),d=-h*h+u*(u+2*a)+c;else u=-s,h=Math.max(0,-(r*u+o)),d=-h*h+u*(u+2*a)+c;else if(u<=-p)h=Math.max(0,-(-r*s+o)),u=h>0?-s:Math.min(Math.max(-s,-a),s),d=-h*h+u*(u+2*a)+c;else if(u<=p)h=0,u=Math.min(Math.max(-s,-a),s),d=u*(u+2*a)+c;else h=Math.max(0,-(r*s+o)),u=h>0?s:Math.min(Math.max(-s,-a),s),d=-h*h+u*(u+2*a)+c;else u=r>0?-s:s,h=Math.max(0,-(r*u+o)),d=-h*h+u*(u+2*a)+c;if(n)n.copy(this.origin).addScaledVector(this.direction,h);if(i)i.copy(Er).addScaledVector(Cs,u);return d}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);let n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,a=n+r;if(a<0)return null;if(o<0)return this.at(a,e);return this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,o,a,c=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,u=this.origin;if(c>=0)n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c;else n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c;if(l>=0)s=(t.min.y-u.y)*l,r=(t.max.y-u.y)*l;else s=(t.max.y-u.y)*l,r=(t.min.y-u.y)*l;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(h>=0)o=(t.min.z-u.z)*h,a=(t.max.z-u.z)*h;else o=(t.max.z-u.z)*h,a=(t.min.z-u.z)*h;if(n>a||o>i)return null;if(o>n||n!==n)n=o;if(a<i||i!==i)i=a;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,i,s){Tr.subVectors(e,t),Is.subVectors(n,t),Ar.crossVectors(Tr,Is);let r=this.direction.dot(Ar),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ei.subVectors(this.origin,t);let a=o*this.direction.dot(Is.crossVectors(ei,Is));if(a<0)return null;let c=o*this.direction.dot(Tr.cross(ei));if(c<0)return null;if(a+c>r)return null;let l=-o*ei.dot(Ar);if(l<0)return null;return this.at(l/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,i,s,r,o,a,c,l,h,u,d,p,g,y){if(oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,o,a,c,l,h,u,d,p,g,y)}set(t,e,n,i,s,r,o,a,c,l,h,u,d,p,g,y){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=r,f[9]=o,f[13]=a,f[2]=c,f[6]=l,f[10]=h,f[14]=u,f[3]=d,f[7]=p,f[11]=g,f[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Di.setFromMatrixColumn(t,0).length(),s=1/Di.setFromMatrixColumn(t,1).length(),r=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),o=Math.sin(n),a=Math.cos(i),c=Math.sin(i),l=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let u=r*l,d=r*h,p=o*l,g=o*h;e[0]=a*l,e[4]=-a*h,e[8]=c,e[1]=d+p*c,e[5]=u-g*c,e[9]=-o*a,e[2]=g-u*c,e[6]=p+d*c,e[10]=r*a}else if(t.order==="YXZ"){let u=a*l,d=a*h,p=c*l,g=c*h;e[0]=u+g*o,e[4]=p*o-d,e[8]=r*c,e[1]=r*h,e[5]=r*l,e[9]=-o,e[2]=d*o-p,e[6]=g+u*o,e[10]=r*a}else if(t.order==="ZXY"){let u=a*l,d=a*h,p=c*l,g=c*h;e[0]=u-g*o,e[4]=-r*h,e[8]=p+d*o,e[1]=d+p*o,e[5]=r*l,e[9]=g-u*o,e[2]=-r*c,e[6]=o,e[10]=r*a}else if(t.order==="ZYX"){let u=r*l,d=r*h,p=o*l,g=o*h;e[0]=a*l,e[4]=p*c-d,e[8]=u*c+g,e[1]=a*h,e[5]=g*c+u,e[9]=d*c-p,e[2]=-c,e[6]=o*a,e[10]=r*a}else if(t.order==="YZX"){let u=r*a,d=r*c,p=o*a,g=o*c;e[0]=a*l,e[4]=g-u*h,e[8]=p*h+d,e[1]=h,e[5]=r*l,e[9]=-o*l,e[2]=-c*l,e[6]=d*h+p,e[10]=u-g*h}else if(t.order==="XZY"){let u=r*a,d=r*c,p=o*a,g=o*c;e[0]=a*l,e[4]=-h,e[8]=c*l,e[1]=u*h+g,e[5]=r*l,e[9]=d*h-p,e[2]=p*h-d,e[6]=o*l,e[10]=g*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wl,t,bl)}lookAt(t,e,n){let i=this.elements;if(xn.subVectors(t,e),xn.lengthSq()===0)xn.z=1;if(xn.normalize(),ni.crossVectors(n,xn),ni.lengthSq()===0){if(Math.abs(n.z)===1)xn.x+=0.0001;else xn.z+=0.0001;xn.normalize(),ni.crossVectors(n,xn)}return ni.normalize(),Ps.crossVectors(xn,ni),i[0]=ni.x,i[4]=Ps.x,i[8]=xn.x,i[1]=ni.y,i[5]=Ps.y,i[9]=xn.y,i[2]=ni.z,i[6]=Ps.z,i[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[4],a=n[8],c=n[12],l=n[1],h=n[5],u=n[9],d=n[13],p=n[2],g=n[6],y=n[10],f=n[14],m=n[3],w=n[7],_=n[11],C=n[15],D=i[0],I=i[4],R=i[8],z=i[12],M=i[1],v=i[5],F=i[9],W=i[13],J=i[2],et=i[6],X=i[10],V=i[14],nt=i[3],q=i[7],tt=i[11],lt=i[15];return s[0]=r*D+o*M+a*J+c*nt,s[4]=r*I+o*v+a*et+c*q,s[8]=r*R+o*F+a*X+c*tt,s[12]=r*z+o*W+a*V+c*lt,s[1]=l*D+h*M+u*J+d*nt,s[5]=l*I+h*v+u*et+d*q,s[9]=l*R+h*F+u*X+d*tt,s[13]=l*z+h*W+u*V+d*lt,s[2]=p*D+g*M+y*J+f*nt,s[6]=p*I+g*v+y*et+f*q,s[10]=p*R+g*F+y*X+f*tt,s[14]=p*z+g*W+y*V+f*lt,s[3]=m*D+w*M+_*J+C*nt,s[7]=m*I+w*v+_*et+C*q,s[11]=m*R+w*F+_*X+C*tt,s[15]=m*z+w*W+_*V+C*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],o=t[5],a=t[9],c=t[13],l=t[2],h=t[6],u=t[10],d=t[14],p=t[3],g=t[7],y=t[11],f=t[15];return p*(+s*a*h-i*c*h-s*o*u+n*c*u+i*o*d-n*a*d)+g*(+e*a*d-e*c*u+s*r*u-i*r*d+i*c*l-s*a*l)+y*(+e*c*h-e*o*d-s*r*h+n*r*d+s*o*l-n*c*l)+f*(-i*o*l-e*a*h+e*o*u+i*r*h-n*r*u+n*a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],c=t[7],l=t[8],h=t[9],u=t[10],d=t[11],p=t[12],g=t[13],y=t[14],f=t[15],m=h*y*c-g*u*c+g*a*d-o*y*d-h*a*f+o*u*f,w=p*u*c-l*y*c-p*a*d+r*y*d+l*a*f-r*u*f,_=l*g*c-p*h*c+p*o*d-r*g*d-l*o*f+r*h*f,C=p*h*a-l*g*a-p*o*u+r*g*u+l*o*y-r*h*y,D=e*m+n*w+i*_+s*C;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/D;return t[0]=m*I,t[1]=(g*u*s-h*y*s-g*i*d+n*y*d+h*i*f-n*u*f)*I,t[2]=(o*y*s-g*a*s+g*i*c-n*y*c-o*i*f+n*a*f)*I,t[3]=(h*a*s-o*u*s-h*i*c+n*u*c+o*i*d-n*a*d)*I,t[4]=w*I,t[5]=(l*y*s-p*u*s+p*i*d-e*y*d-l*i*f+e*u*f)*I,t[6]=(p*a*s-r*y*s-p*i*c+e*y*c+r*i*f-e*a*f)*I,t[7]=(r*u*s-l*a*s+l*i*c-e*u*c-r*i*d+e*a*d)*I,t[8]=_*I,t[9]=(p*h*s-l*g*s-p*n*d+e*g*d+l*n*f-e*h*f)*I,t[10]=(r*g*s-p*o*s+p*n*c-e*g*c-r*n*f+e*o*f)*I,t[11]=(l*o*s-r*h*s-l*n*c+e*h*c+r*n*d-e*o*d)*I,t[12]=C*I,t[13]=(l*g*i-p*h*i+p*n*u-e*g*u-l*n*y+e*h*y)*I,t[14]=(p*o*i-r*g*i-p*n*a+e*g*a+r*n*y-e*o*y)*I,t[15]=(r*h*i-l*o*i+l*n*a-e*h*a-r*n*u+e*o*u)*I,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:o,z:a}=t,c=s*r,l=s*o;return this.set(c*r+n,c*o-i*a,c*a+i*o,0,c*o+i*a,l*o+n,l*a-i*r,0,c*a-i*o,l*a+i*r,s*a*a+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:o,_w:a}=e,c=s+s,l=r+r,h=o+o,u=s*c,d=s*l,p=s*h,g=r*l,y=r*h,f=o*h,m=a*c,w=a*l,_=a*h,{x:C,y:D,z:I}=n;return i[0]=(1-(g+f))*C,i[1]=(d+_)*C,i[2]=(p-w)*C,i[3]=0,i[4]=(d-_)*D,i[5]=(1-(u+f))*D,i[6]=(y+m)*D,i[7]=0,i[8]=(p+w)*I,i[9]=(y-m)*I,i[10]=(1-(u+g))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Di.set(i[0],i[1],i[2]).length(),r=Di.set(i[4],i[5],i[6]).length(),o=Di.set(i[8],i[9],i[10]).length();if(this.determinant()<0)s=-s;t.x=i[12],t.y=i[13],t.z=i[14],Rn.copy(this);let c=1/s,l=1/r,h=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=l,Rn.elements[5]*=l,Rn.elements[6]*=l,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,e.setFromRotationMatrix(Rn),n.x=s,n.y=r,n.z=o,this}makePerspective(t,e,n,i,s,r,o=2000){let a=this.elements,c=2*s/(e-t),l=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d,p;if(o===2000)d=-(r+s)/(r-s),p=-2*r*s/(r-s);else if(o===2001)d=-r/(r-s),p=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,r,o=2000){let a=this.elements,c=1/(e-t),l=1/(n-i),h=1/(r-s),u=(e+t)*c,d=(n+i)*l,p,g;if(o===2000)p=(r+s)*h,g=-2*h;else if(o===2001)p=s*h,g=-1*h;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=g,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var Di=new O,Rn=new oe,wl=new O(0,0,0),bl=new O(1,1,1),ni=new O,Ps=new O,xn=new O,qo=new oe,Yo=new Ln;class Pn{constructor(t=0,e=0,n=0,i=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],o=i[8],a=i[1],c=i[5],l=i[9],h=i[2],u=i[6],d=i[10];switch(e){case"XYZ":if(this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-l,d),this._z=Math.atan2(-r,s);else this._x=Math.atan2(u,c),this._z=0;break;case"YXZ":if(this._x=Math.asin(-rn(l,-1,1)),Math.abs(l)<0.9999999)this._y=Math.atan2(o,d),this._z=Math.atan2(a,c);else this._y=Math.atan2(-h,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(rn(u,-1,1)),Math.abs(u)<0.9999999)this._y=Math.atan2(-h,d),this._z=Math.atan2(-r,c);else this._y=0,this._z=Math.atan2(a,s);break;case"ZYX":if(this._y=Math.asin(-rn(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(u,d),this._z=Math.atan2(a,s);else this._x=0,this._z=Math.atan2(-r,c);break;case"YZX":if(this._z=Math.asin(rn(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-l,c),this._y=Math.atan2(-h,s);else this._x=0,this._y=Math.atan2(o,d);break;case"XZY":if(this._z=Math.asin(-rn(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(u,c),this._y=Math.atan2(o,s);else this._x=Math.atan2(-l,d),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return qo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yo.setFromEuler(this),this.setFromQuaternion(Yo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class ao{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var El=0,Zo=new O,Ui=new Ln,qn=new oe,Ls=new O,os=new O,Tl=new O,Al=new Ln,Jo=new O(1,0,0),$o=new O(0,1,0),Ko=new O(0,0,1),Qo={type:"added"},Rl={type:"removed"},Ni={type:"childadded",child:null},Rr={type:"childremoved",child:null};class je extends Mi{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:El++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=je.DEFAULT_UP.clone();let t=new O,e=new Pn,n=new Ln,i=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new xe}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(Jo,t)}rotateY(t){return this.rotateOnAxis($o,t)}rotateZ(t){return this.rotateOnAxis(Ko,t)}translateOnAxis(t,e){return Zo.copy(t).applyQuaternion(this.quaternion),this.position.add(Zo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jo,t)}translateY(t){return this.translateOnAxis($o,t)}translateZ(t){return this.translateOnAxis(Ko,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)Ls.copy(t);else Ls.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)qn.lookAt(os,Ls,this.up);else qn.lookAt(Ls,os,this.up);if(this.quaternion.setFromRotationMatrix(qn),i)qn.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(qn),this.quaternion.premultiply(Ui.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qo),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rl),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld);return t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qo),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,Tl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Al,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null)n.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(e===!0){let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,this.name!=="")i.name=this.name;if(this.castShadow===!0)i.castShadow=!0;if(this.receiveShadow===!0)i.receiveShadow=!0;if(this.visible===!1)i.visible=!1;if(this.frustumCulled===!1)i.frustumCulled=!1;if(this.renderOrder!==0)i.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1)i.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((o)=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius};if(this.boundingBox!==null)i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}}function s(o,a){if(o[a.uuid]===void 0)o[a.uuid]=a.toJSON(t);return a.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){let h=a[c];s(t.shapes,h)}else s(t.shapes,a)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(s(t.materials,this.material[a]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];i.animations.push(s(t.animations,a))}}if(e){let o=r(t.geometries),a=r(t.materials),c=r(t.textures),l=r(t.images),h=r(t.shapes),u=r(t.skeletons),d=r(t.animations),p=r(t.nodes);if(o.length>0)n.geometries=o;if(a.length>0)n.materials=a;if(c.length>0)n.textures=c;if(l.length>0)n.images=l;if(h.length>0)n.shapes=h;if(u.length>0)n.skeletons=u;if(d.length>0)n.animations=d;if(p.length>0)n.nodes=p}return n.object=i,n;function r(o){let a=[];for(let c in o){let l=o[c];delete l.metadata,a.push(l)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}}je.DEFAULT_UP=new O(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cn=new O,Yn=new O,Cr=new O,Zn=new O,Fi=new O,Bi=new O,jo=new O,Ir=new O,Pr=new O,Lr=new O,Dr=new Ge,Ur=new Ge,Nr=new Ge;class In{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Cn.subVectors(t,e),i.cross(Cn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Cn.subVectors(i,e),Yn.subVectors(n,e),Cr.subVectors(t,e);let r=Cn.dot(Cn),o=Cn.dot(Yn),a=Cn.dot(Cr),c=Yn.dot(Yn),l=Yn.dot(Cr),h=r*c-o*o;if(h===0)return s.set(0,0,0),null;let u=1/h,d=(c*a-o*l)*u,p=(r*l-o*a)*u;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,Zn)===null)return!1;return Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,i,s,r,o,a){if(this.getBarycoord(t,e,n,i,Zn)===null){if(a.x=0,a.y=0,"z"in a)a.z=0;if("w"in a)a.w=0;return null}return a.setScalar(0),a.addScaledVector(s,Zn.x),a.addScaledVector(r,Zn.y),a.addScaledVector(o,Zn.z),a}static getInterpolatedAttribute(t,e,n,i,s,r){return Dr.setScalar(0),Ur.setScalar(0),Nr.setScalar(0),Dr.fromBufferAttribute(t,e),Ur.fromBufferAttribute(t,n),Nr.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Dr,s.x),r.addScaledVector(Ur,s.y),r.addScaledVector(Nr,s.z),r}static isFrontFacing(t,e,n,i){return Cn.subVectors(n,e),Yn.subVectors(t,e),Cn.cross(Yn).dot(i)<0?!0:!1}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Cn.cross(Yn).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return In.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return In.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return In.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return In.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return In.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,o;Fi.subVectors(i,n),Bi.subVectors(s,n),Ir.subVectors(t,n);let a=Fi.dot(Ir),c=Bi.dot(Ir);if(a<=0&&c<=0)return e.copy(n);Pr.subVectors(t,i);let l=Fi.dot(Pr),h=Bi.dot(Pr);if(l>=0&&h<=l)return e.copy(i);let u=a*h-l*c;if(u<=0&&a>=0&&l<=0)return r=a/(a-l),e.copy(n).addScaledVector(Fi,r);Lr.subVectors(t,s);let d=Fi.dot(Lr),p=Bi.dot(Lr);if(p>=0&&d<=p)return e.copy(s);let g=d*c-a*p;if(g<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(Bi,o);let y=l*p-d*h;if(y<=0&&h-l>=0&&d-p>=0)return jo.subVectors(s,i),o=(h-l)/(h-l+(d-p)),e.copy(i).addScaledVector(jo,o);let f=1/(y+g+u);return r=g*f,o=u*f,e.copy(n).addScaledVector(Fi,r).addScaledVector(Bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}var Va={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function Fr(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=we.workingColorSpace){if(t=ml(t,1),e=rn(e,0,1),n=rn(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Fr(r,s,t+0.3333333333333333),this.g=Fr(r,s,t),this.b=Fr(r,s,t-0.3333333333333333)}return we.toWorkingColorSpace(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=Va[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else console.warn("THREE.Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return we.fromWorkingColorSpace(sn.copy(this),t),Math.round(rn(sn.r*255,0,255))*65536+Math.round(rn(sn.g*255,0,255))*256+Math.round(rn(sn.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.fromWorkingColorSpace(sn.copy(this),e);let{r:n,g:i,b:s}=sn,r=Math.max(n,i,s),o=Math.min(n,i,s),a,c,l=(o+r)/2;if(o===r)a=0,c=0;else{let h=r-o;switch(c=l<=0.5?h/(r+o):h/(2-r-o),r){case n:a=(i-s)/h+(i<s?6:0);break;case i:a=(s-n)/h+2;break;case s:a=(n-i)/h+4;break}a/=6}return t.h=a,t.s=c,t.l=l,t}getRGB(t,e=we.workingColorSpace){return we.fromWorkingColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t="srgb"){we.fromWorkingColorSpace(sn.copy(this),t);let{r:e,g:n,b:i}=sn;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Ds);let n=yr(ii.h,Ds.h,e),i=yr(ii.s,Ds.s,e),s=yr(ii.l,Ds.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var sn=new Ht;Ht.NAMES=Va;var Cl=0;class ci extends Mi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cl++}),this.uuid=Yi(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!=="")n.name=this.name;if(this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.shadowSide!==null)n.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)n.blending=this.blending;if(this.side!==0)n.side=this.side;if(this.vertexColors===!0)n.vertexColors=!0;if(this.opacity<1)n.opacity=this.opacity;if(this.transparent===!0)n.transparent=!0;if(this.blendSrc!==204)n.blendSrc=this.blendSrc;if(this.blendDst!==205)n.blendDst=this.blendDst;if(this.blendEquation!==100)n.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)n.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)n.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)n.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)n.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)n.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)n.depthFunc=this.depthFunc;if(this.depthTest===!1)n.depthTest=this.depthTest;if(this.depthWrite===!1)n.depthWrite=this.depthWrite;if(this.colorWrite===!1)n.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)n.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)n.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)n.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)n.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)n.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)n.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)n.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)n.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)n.rotation=this.rotation;if(this.polygonOffset===!0)n.polygonOffset=!0;if(this.polygonOffsetFactor!==0)n.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)n.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)n.linewidth=this.linewidth;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.dithering===!0)n.dithering=!0;if(this.alphaTest>0)n.alphaTest=this.alphaTest;if(this.alphaHash===!0)n.alphaHash=!0;if(this.alphaToCoverage===!0)n.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)n.premultipliedAlpha=!0;if(this.forceSinglePass===!0)n.forceSinglePass=!0;if(this.wireframe===!0)n.wireframe=!0;if(this.wireframeLinewidth>1)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)n.flatShading=!0;if(this.visible===!1)n.visible=!1;if(this.toneMapped===!1)n.toneMapped=!1;if(this.fog===!1)n.fog=!1;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let o in s){let a=s[o];delete a.metadata,r.push(a)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class un extends ci{static get type(){return"MeshBasicMaterial"}constructor(t){super();this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var Ve=new O,Us=new Et;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Us.fromBufferAttribute(this,e),Us.applyMatrix3(t),this.setXY(e,Us.x,Us.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=is(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=pn(n,this.array);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=is(e,this.array);return e}setX(t,e){if(this.normalized)e=pn(e,this.array);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=is(e,this.array);return e}setY(t,e){if(this.normalized)e=pn(e,this.array);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=is(e,this.array);return e}setZ(t,e){if(this.normalized)e=pn(e,this.array);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=is(e,this.array);return e}setW(t,e){if(this.normalized)e=pn(e,this.array);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=pn(e,this.array),n=pn(n,this.array);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=pn(e,this.array),n=pn(n,this.array),i=pn(i,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=pn(e,this.array),n=pn(n,this.array),i=pn(i,this.array),s=pn(s,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")t.name=this.name;if(this.usage!==35044)t.usage=this.usage;return t}}class co extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class lo extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}var Il=0,Mn=new oe,Br=new je,Oi=new O,_n=new ai,as=new ai,Qe=new O;class Xe extends Mi{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((Ga(t))?lo:co)(t,1);else this.index=t;return this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new xe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return Br.lookAt(t),Br.updateMatrix(),this.applyMatrix4(Br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ve(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}if(t.length>e.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new ai;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(_n.setFromBufferAttribute(s),this.morphTargetsRelative)Qe.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Qe);else this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Si;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let o=e[s];if(as.setFromBufferAttribute(o),this.morphTargetsRelative)Qe.addVectors(_n.min,as.min),_n.expandByPoint(Qe),Qe.addVectors(_n.max,as.max),_n.expandByPoint(Qe);else _n.expandByPoint(as.min),_n.expandByPoint(as.max)}_n.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Qe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Qe));if(e)for(let s=0,r=e.length;s<r;s++){let o=e[s],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++){if(Qe.fromBufferAttribute(o,c),a)Oi.fromBufferAttribute(t,c),Qe.add(Oi);i=Math.max(i,n.distanceToSquared(Qe))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));let r=this.getAttribute("tangent"),o=[],a=[];for(let R=0;R<n.count;R++)o[R]=new O,a[R]=new O;let c=new O,l=new O,h=new O,u=new Et,d=new Et,p=new Et,g=new O,y=new O;function f(R,z,M){c.fromBufferAttribute(n,R),l.fromBufferAttribute(n,z),h.fromBufferAttribute(n,M),u.fromBufferAttribute(s,R),d.fromBufferAttribute(s,z),p.fromBufferAttribute(s,M),l.sub(c),h.sub(c),d.sub(u),p.sub(u);let v=1/(d.x*p.y-p.x*d.y);if(!isFinite(v))return;g.copy(l).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(v),y.copy(h).multiplyScalar(d.x).addScaledVector(l,-p.x).multiplyScalar(v),o[R].add(g),o[z].add(g),o[M].add(g),a[R].add(y),a[z].add(y),a[M].add(y)}let m=this.groups;if(m.length===0)m=[{start:0,count:t.count}];for(let R=0,z=m.length;R<z;++R){let M=m[R],{start:v,count:F}=M;for(let W=v,J=v+F;W<J;W+=3)f(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let w=new O,_=new O,C=new O,D=new O;function I(R){C.fromBufferAttribute(i,R),D.copy(C);let z=o[R];w.copy(z),w.sub(C.multiplyScalar(C.dot(z))).normalize(),_.crossVectors(D,z);let v=_.dot(a[R])<0?-1:1;r.setXYZW(R,w.x,w.y,w.z,v)}for(let R=0,z=m.length;R<z;++R){let M=m[R],{start:v,count:F}=M;for(let W=v,J=v+F;W<J;W+=3)I(t.getX(W+0)),I(t.getX(W+1)),I(t.getX(W+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new O,s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,h=new O;if(t)for(let u=0,d=t.count;u<d;u+=3){let p=t.getX(u+0),g=t.getX(u+1),y=t.getX(u+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),l.subVectors(r,s),h.subVectors(i,s),l.cross(h),o.fromBufferAttribute(n,p),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),o.add(l),a.add(l),c.add(l),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),l.subVectors(r,s),h.subVectors(i,s),l.cross(h),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,a){let{array:c,itemSize:l,normalized:h}=o,u=new c.constructor(a.length*l),d=0,p=0;for(let g=0,y=a.length;g<y;g++){if(o.isInterleavedBufferAttribute)d=a[g]*o.data.stride+o.offset;else d=a[g]*l;for(let f=0;f<l;f++)u[p++]=c[d++]}return new tn(u,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Xe,n=this.index.array,i=this.attributes;for(let o in i){let a=i[o],c=t(a,n);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let a=[],c=s[o];for(let l=0,h=c.length;l<h;l++){let u=c[l],d=t(u,n);a.push(d)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,a=r.length;o<a;o++){let c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!=="")t.name=this.name;if(Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0){let a=this.parameters;for(let c in a)if(a[c]!==void 0)t[c]=a[c];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let a in n){let c=n[a];t.data.attributes[a]=c.toJSON(t.data)}let i={},s=!1;for(let a in this.morphAttributes){let c=this.morphAttributes[a],l=[];for(let h=0,u=c.length;h<u;h++){let d=c[h];l.push(d.toJSON(t.data))}if(l.length>0)i[a]=l,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let o=this.boundingSphere;if(o!==null)t.data.boundingSphere={center:o.center.toArray(),radius:o.radius};return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let l=i[c];this.setAttribute(c,l.clone(e))}let s=t.morphAttributes;for(let c in s){let l=[],h=s[c];for(let u=0,d=h.length;u<d;u++)l.push(h[u].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,l=r.length;c<l;c++){let h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;if(o!==null)this.boundingBox=o.clone();let a=t.boundingSphere;if(a!==null)this.boundingSphere=a.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var ta=new oe,pi=new oo,Ns=new Si,ea=new O,Fs=new O,Bs=new O,Os=new O,Or=new O,zs=new O,na=new O,Gs=new O;class te extends je{constructor(t=new Xe,e=new un){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){zs.set(0,0,0);for(let a=0,c=s.length;a<c;a++){let l=o[a],h=s[a];if(l===0)continue;if(Or.fromBufferAttribute(h,t),r)zs.addScaledVector(Or,l);else zs.addScaledVector(Or.sub(e),l)}e.add(zs)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(Ns.copy(n.boundingSphere),Ns.applyMatrix4(s),pi.copy(t.ray).recast(t.near),Ns.containsPoint(pi.origin)===!1){if(pi.intersectSphere(Ns,ea)===null)return;if(pi.origin.distanceToSquared(ea)>(t.far-t.near)**2)return}if(ta.copy(s).invert(),pi.copy(t.ray).applyMatrix4(ta),n.boundingBox!==null){if(pi.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,pi)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,o=s.index,a=s.attributes.position,c=s.attributes.uv,l=s.attributes.uv1,h=s.attributes.normal,{groups:u,drawRange:d}=s;if(o!==null)if(Array.isArray(r))for(let p=0,g=u.length;p<g;p++){let y=u[p],f=r[y.materialIndex],m=Math.max(y.start,d.start),w=Math.min(o.count,Math.min(y.start+y.count,d.start+d.count));for(let _=m,C=w;_<C;_+=3){let D=o.getX(_),I=o.getX(_+1),R=o.getX(_+2);if(i=ks(this,f,t,n,c,l,h,D,I,R),i)i.faceIndex=Math.floor(_/3),i.face.materialIndex=y.materialIndex,e.push(i)}}else{let p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let y=p,f=g;y<f;y+=3){let m=o.getX(y),w=o.getX(y+1),_=o.getX(y+2);if(i=ks(this,r,t,n,c,l,h,m,w,_),i)i.faceIndex=Math.floor(y/3),e.push(i)}}else if(a!==void 0)if(Array.isArray(r))for(let p=0,g=u.length;p<g;p++){let y=u[p],f=r[y.materialIndex],m=Math.max(y.start,d.start),w=Math.min(a.count,Math.min(y.start+y.count,d.start+d.count));for(let _=m,C=w;_<C;_+=3){let D=_,I=_+1,R=_+2;if(i=ks(this,f,t,n,c,l,h,D,I,R),i)i.faceIndex=Math.floor(_/3),i.face.materialIndex=y.materialIndex,e.push(i)}}else{let p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let y=p,f=g;y<f;y+=3){let m=y,w=y+1,_=y+2;if(i=ks(this,r,t,n,c,l,h,m,w,_),i)i.faceIndex=Math.floor(y/3),e.push(i)}}}}function Pl(t,e,n,i,s,r,o,a){let c;if(e.side===1)c=i.intersectTriangle(o,r,s,!0,a);else c=i.intersectTriangle(s,r,o,e.side===0,a);if(c===null)return null;Gs.copy(a),Gs.applyMatrix4(t.matrixWorld);let l=n.ray.origin.distanceTo(Gs);if(l<n.near||l>n.far)return null;return{distance:l,point:Gs.clone(),object:t}}function ks(t,e,n,i,s,r,o,a,c,l){t.getVertexPosition(a,Fs),t.getVertexPosition(c,Bs),t.getVertexPosition(l,Os);let h=Pl(t,e,n,i,Fs,Bs,Os,na);if(h){let u=new O;if(In.getBarycoord(na,Fs,Bs,Os,u),s)h.uv=In.getInterpolatedAttribute(s,a,c,l,u,new Et);if(r)h.uv1=In.getInterpolatedAttribute(r,a,c,l,u,new Et);if(o){if(h.normal=In.getInterpolatedAttribute(o,a,c,l,u,new O),h.normal.dot(i.direction)>0)h.normal.multiplyScalar(-1)}let d={a,b:c,c:l,normal:new O,materialIndex:0};In.getNormal(Fs,Bs,Os,d.normal),h.face=d,h.barycoord=u}return h}class ot extends Xe{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let a=[],c=[],l=[],h=[],u=0,d=0;p("z","y","x",-1,-1,n,e,t,r,s,0),p("z","y","x",1,-1,n,e,-t,r,s,1),p("x","z","y",1,1,t,n,e,i,r,2),p("x","z","y",1,-1,t,n,-e,i,r,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(l,3)),this.setAttribute("uv",new ve(h,2));function p(g,y,f,m,w,_,C,D,I,R,z){let M=_/I,v=C/R,F=_/2,W=C/2,J=D/2,et=I+1,X=R+1,V=0,nt=0,q=new O;for(let tt=0;tt<X;tt++){let lt=tt*v-W;for(let Ct=0;Ct<et;Ct++){let Ot=Ct*M-F;q[g]=Ot*m,q[y]=lt*w,q[f]=J,c.push(q.x,q.y,q.z),q[g]=0,q[y]=0,q[f]=D>0?1:-1,l.push(q.x,q.y,q.z),h.push(Ct/I),h.push(1-tt/R),V+=1}}for(let tt=0;tt<R;tt++)for(let lt=0;lt<I;lt++){let Ct=u+lt+et*tt,Ot=u+lt+et*(tt+1),ct=u+(lt+1)+et*(tt+1),it=u+(lt+1)+et*tt;a.push(Ct,Ot,it),a.push(Ot,ct,it),nt+=6}o.addGroup(d,nt,z),d+=nt,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ot(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qi(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion))if(s.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))e[n][i]=s.slice();else e[n][i]=s}}return e}function hn(t){let e={};for(let n=0;n<t.length;n++){let i=qi(t[n]);for(let s in i)e[s]=i[s]}return e}function Ll(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Xa(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return we.workingColorSpace}var Dl={clone:qi,merge:hn},Ul=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends ci{static get type(){return"ShaderMaterial"}constructor(t){super();if(this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ul,this.fragmentShader=Nl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=Ll(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}}class ho extends je{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=2000}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var si=new O,ia=new Et,sa=new Et;class yn extends ho{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=Kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_r*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(_r*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,ia,sa),e.subVectors(sa,ia)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_r*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:a,fullHeight:c}=r;s+=r.offsetX*i/a,e-=r.offsetY*n/c,i*=r.width/a,n*=r.height/c}let o=this.filmOffset;if(o!==0)s+=t*o/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}var zi=-90,Gi=1;class qa extends je{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new yn(zi,Gi,t,e);i.layers=this.layers,this.add(i);let s=new yn(zi,Gi,t,e);s.layers=this.layers,this.add(s);let r=new yn(zi,Gi,t,e);r.layers=this.layers,this.add(r);let o=new yn(zi,Gi,t,e);o.layers=this.layers,this.add(o);let a=new yn(zi,Gi,t,e);a.layers=this.layers,this.add(a);let c=new yn(zi,Gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,o,a]=e;for(let c of e)this.remove(c);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,o,a,c,l]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,a),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,l),t.setRenderTarget(h,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class uo extends on{constructor(t,e,n,i,s,r,o,a,c,l){t=t!==void 0?t:[],e=e!==void 0?e:301;super(t,e,n,i,s,r,o,a,c,l);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ya extends oi{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new uo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ot(5,5,5),s=new kn({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=e;let r=new te(i,s),o=e.minFilter;if(e.minFilter===1008)e.minFilter=1006;return new qa(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}var zr=new O,Fl=new O,Bl=new xe;class ri{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=zr.subVectors(n,e).cross(Fl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(zr),i=this.normal.dot(n);if(i===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let s=-(t.start.dot(this.normal)+this.constant)/i;if(s<0||s>1)return null;return e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Bl.getNormalMatrix(t),i=this.coplanarPoint(zr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}var mi=new Si,Hs=new O;class sr{constructor(t=new ri,e=new ri,n=new ri,i=new ri,s=new ri,r=new ri){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000){let n=this.planes,i=t.elements,s=i[0],r=i[1],o=i[2],a=i[3],c=i[4],l=i[5],h=i[6],u=i[7],d=i[8],p=i[9],g=i[10],y=i[11],f=i[12],m=i[13],w=i[14],_=i[15];if(n[0].setComponents(a-s,u-c,y-d,_-f).normalize(),n[1].setComponents(a+s,u+c,y+d,_+f).normalize(),n[2].setComponents(a+r,u+l,y+p,_+m).normalize(),n[3].setComponents(a-r,u-l,y-p,_-m).normalize(),n[4].setComponents(a-o,u-h,y-g,_-w).normalize(),e===2000)n[5].setComponents(a+o,u+h,y+g,_+w).normalize();else if(e===2001)n[5].setComponents(o,h,g,w).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=0.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Hs.x=i.normal.x>0?t.max.x:t.min.x,Hs.y=i.normal.y>0?t.max.y:t.min.y,Hs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Za(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.hfNoFrameLoop(s)}return{start:function(){if(e===!0)return;if(n===null)return;i=t.hfNoFrameLoop(s),e=!0},stop:function(){t.hfNoFrameCancel(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Ol(t){let e=new WeakMap;function n(a,c){let{array:l,usage:h}=a,u=l.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=t.FLOAT;else if(l instanceof Uint16Array)if(a.isFloat16BufferAttribute)p=t.HALF_FLOAT;else p=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=t.SHORT;else if(l instanceof Uint32Array)p=t.UNSIGNED_INT;else if(l instanceof Int32Array)p=t.INT;else if(l instanceof Int8Array)p=t.BYTE;else if(l instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let{array:h,updateRanges:u}=c;if(t.bindBuffer(l,a),u.length===0)t.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],y=u[p];if(y.start<=g.start+g.count+1)g.count=Math.max(g.count,y.start+y.count-g.start);else++d,u[d]=y}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let y=u[p];t.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){if(a.isInterleavedBufferAttribute)a=a.data;return e.get(a)}function r(a){if(a.isInterleavedBufferAttribute)a=a.data;let c=e.get(a);if(c)t.deleteBuffer(c.buffer),e.delete(a)}function o(a,c){if(a.isInterleavedBufferAttribute)a=a.data;if(a.isGLBufferAttribute){let h=e.get(a);if(!h||h.version<a.version)e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,n(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Sn extends Xe{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,o=Math.floor(n),a=Math.floor(i),c=o+1,l=a+1,h=t/o,u=e/a,d=[],p=[],g=[],y=[];for(let f=0;f<l;f++){let m=f*u-r;for(let w=0;w<c;w++){let _=w*h-s;p.push(_,-m,0),g.push(0,0,1),y.push(w/o),y.push(1-f/a)}}for(let f=0;f<a;f++)for(let m=0;m<o;m++){let w=m+c*f,_=m+c*(f+1),C=m+1+c*(f+1),D=m+1+c*f;d.push(w,_,D),d.push(_,C,D)}this.setIndex(d),this.setAttribute("position",new ve(p,3)),this.setAttribute("normal",new ve(g,3)),this.setAttribute("uv",new ve(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.width,t.height,t.widthSegments,t.heightSegments)}}var zl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gl=`#ifdef USE_ALPHAHASH
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
#endif`,kl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xl=`#ifdef USE_AOMAP
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
#endif`,ql=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yl=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$l=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ql=`#ifdef USE_IRIDESCENCE
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
#endif`,jl=`#ifdef USE_BUMPMAP
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
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ch=`#define PI 3.141592653589793
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
} // validated`,lh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hh=`vec3 transformedNormal = objectNormal;
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
#endif`,uh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ph=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mh="gl_FragColor = linearToOutputTexel( gl_FragColor );",gh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xh=`#ifdef USE_ENVMAP
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
#endif`,_h=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yh=`#ifdef USE_ENVMAP
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
#endif`,vh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mh=`#ifdef USE_ENVMAP
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
#endif`,Sh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Th=`#ifdef USE_GRADIENTMAP
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
}`,Ah=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ih=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Ph=`#ifdef USE_ENVMAP
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
#endif`,Lh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fh=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Bh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Oh=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`;var zh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zh=`#if defined( USE_POINTS_UV )
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
#endif`,Jh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$h=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tu=`#ifdef USE_MORPHTARGETS
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
#endif`,eu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,su=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ru=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ou=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,au=`#ifdef USE_NORMALMAP
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
#endif`,cu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,du=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_u=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Mu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Su=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,bu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eu=`#ifdef USE_SKINNING
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
#endif`,Tu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Au=`#ifdef USE_SKINNING
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
#endif`,Ru=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lu=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Du=`#ifdef USE_TRANSMISSION
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
#endif`,Uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ou=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zu=`uniform sampler2D t2D;
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
}`,Gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ku=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vu=`#include <common>
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
}`,Xu=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qu=`#define DISTANCE
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
}`,Yu=`#define DISTANCE
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
}`,Zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ju=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$u=`uniform float scale;
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
}`,Ku=`uniform vec3 diffuse;
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
}`,Qu=`#include <common>
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
}`,ju=`uniform vec3 diffuse;
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
}`,td=`#define LAMBERT
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
}`,ed=`#define LAMBERT
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
}`,nd=`#define MATCAP
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
}`,id=`#define MATCAP
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
}`,sd=`#define NORMAL
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
}`,rd=`#define NORMAL
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
}`,od=`#define PHONG
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
}`,ad=`#define PHONG
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
}`,cd=`#define STANDARD
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
}`,ld=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,hd=`#define TOON
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
}`,ud=`#define TOON
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
}`,dd=`uniform float size;
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
}`,fd=`uniform vec3 diffuse;
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
}`,pd=`#include <common>
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
}`,md=`uniform vec3 color;
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
}`,gd=`uniform float rotation;
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
}`,xd=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:zl,alphahash_pars_fragment:Gl,alphamap_fragment:kl,alphamap_pars_fragment:Hl,alphatest_fragment:Wl,alphatest_pars_fragment:Vl,aomap_fragment:Xl,aomap_pars_fragment:ql,batching_pars_vertex:Yl,batching_vertex:Zl,begin_vertex:Jl,beginnormal_vertex:$l,bsdfs:Kl,iridescence_fragment:Ql,bumpmap_pars_fragment:jl,clipping_planes_fragment:th,clipping_planes_pars_fragment:eh,clipping_planes_pars_vertex:nh,clipping_planes_vertex:ih,color_fragment:sh,color_pars_fragment:rh,color_pars_vertex:oh,color_vertex:ah,common:ch,cube_uv_reflection_fragment:lh,defaultnormal_vertex:hh,displacementmap_pars_vertex:uh,displacementmap_vertex:dh,emissivemap_fragment:fh,emissivemap_pars_fragment:ph,colorspace_fragment:mh,colorspace_pars_fragment:gh,envmap_fragment:xh,envmap_common_pars_fragment:_h,envmap_pars_fragment:yh,envmap_pars_vertex:vh,envmap_physical_pars_fragment:Ph,envmap_vertex:Mh,fog_vertex:Sh,fog_pars_vertex:wh,fog_fragment:bh,fog_pars_fragment:Eh,gradientmap_pars_fragment:Th,lightmap_pars_fragment:Ah,lights_lambert_fragment:Rh,lights_lambert_pars_fragment:Ch,lights_pars_begin:Ih,lights_toon_fragment:Lh,lights_toon_pars_fragment:Dh,lights_phong_fragment:Uh,lights_phong_pars_fragment:Nh,lights_physical_fragment:Fh,lights_physical_pars_fragment:Bh,lights_fragment_begin:Oh,lights_fragment_maps:zh,lights_fragment_end:Gh,logdepthbuf_fragment:kh,logdepthbuf_pars_fragment:Hh,logdepthbuf_pars_vertex:Wh,logdepthbuf_vertex:Vh,map_fragment:Xh,map_pars_fragment:qh,map_particle_fragment:Yh,map_particle_pars_fragment:Zh,metalnessmap_fragment:Jh,metalnessmap_pars_fragment:$h,morphinstance_vertex:Kh,morphcolor_vertex:Qh,morphnormal_vertex:jh,morphtarget_pars_vertex:tu,morphtarget_vertex:eu,normal_fragment_begin:nu,normal_fragment_maps:iu,normal_pars_fragment:su,normal_pars_vertex:ru,normal_vertex:ou,normalmap_pars_fragment:au,clearcoat_normal_fragment_begin:cu,clearcoat_normal_fragment_maps:lu,clearcoat_pars_fragment:hu,iridescence_pars_fragment:uu,opaque_fragment:du,packing:fu,premultiplied_alpha_fragment:pu,project_vertex:mu,dithering_fragment:gu,dithering_pars_fragment:xu,roughnessmap_fragment:_u,roughnessmap_pars_fragment:yu,shadowmap_pars_fragment:vu,shadowmap_pars_vertex:Mu,shadowmap_vertex:Su,shadowmask_pars_fragment:wu,skinbase_vertex:bu,skinning_pars_vertex:Eu,skinning_vertex:Tu,skinnormal_vertex:Au,specularmap_fragment:Ru,specularmap_pars_fragment:Cu,tonemapping_fragment:Iu,tonemapping_pars_fragment:Pu,transmission_fragment:Lu,transmission_pars_fragment:Du,uv_pars_fragment:Uu,uv_pars_vertex:Nu,uv_vertex:Fu,worldpos_vertex:Bu,background_vert:Ou,background_frag:zu,backgroundCube_vert:Gu,backgroundCube_frag:ku,cube_vert:Hu,cube_frag:Wu,depth_vert:Vu,depth_frag:Xu,distanceRGBA_vert:qu,distanceRGBA_frag:Yu,equirect_vert:Zu,equirect_frag:Ju,linedashed_vert:$u,linedashed_frag:Ku,meshbasic_vert:Qu,meshbasic_frag:ju,meshlambert_vert:td,meshlambert_frag:ed,meshmatcap_vert:nd,meshmatcap_frag:id,meshnormal_vert:sd,meshnormal_frag:rd,meshphong_vert:od,meshphong_frag:ad,meshphysical_vert:cd,meshphysical_frag:ld,meshtoon_vert:hd,meshtoon_frag:ud,points_vert:dd,points_frag:fd,shadow_vert:pd,shadow_frag:md,sprite_vert:gd,sprite_frag:xd},Rt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Et(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Gn={basic:{uniforms:hn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:hn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:hn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:hn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:hn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:hn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:hn([Rt.points,Rt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:hn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:hn([Rt.common,Rt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:hn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:hn([Rt.sprite,Rt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:hn([Rt.common,Rt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:hn([Rt.lights,Rt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Gn.physical={uniforms:hn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};var Ws={r:0,b:0,g:0},gi=new Pn,_d=new oe;function yd(t,e,n,i,s,r,o){let a=new Ht(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(w){let _=w.isScene===!0?w.background:null;if(_&&_.isTexture)_=(w.backgroundBlurriness>0?n:e).get(_);return _}function y(w){let _=!1,C=g(w);if(C===null)m(a,c);else if(C&&C.isColor)m(C,1),_=!0;let D=t.xr.getEnvironmentBlendMode();if(D==="additive")i.buffers.color.setClear(0,0,0,1,o);else if(D==="alpha-blend")i.buffers.color.setClear(0,0,0,0,o);if(t.autoClear||_)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function f(w,_){let C=g(_);if(C&&(C.isCubeTexture||C.mapping===306)){if(h===void 0)h=new te(new ot(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:qi(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h);if(gi.copy(_.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1)gi.y*=-1,gi.z*=-1;if(h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_d.makeRotationFromEuler(gi)),h.material.toneMapped=we.getTransfer(C.colorSpace)!=="srgb",u!==C||d!==C.version||p!==t.toneMapping)h.material.needsUpdate=!0,u=C,d=C.version,p=t.toneMapping;h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)}else if(C&&C.isTexture){if(l===void 0)l=new te(new Sn(2,2),new kn({name:"BackgroundMaterial",uniforms:qi(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l);if(l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=we.getTransfer(C.colorSpace)!=="srgb",C.matrixAutoUpdate===!0)C.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(C.matrix),u!==C||d!==C.version||p!==t.toneMapping)l.material.needsUpdate=!0,u=C,d=C.version,p=t.toneMapping;l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)}}function m(w,_){w.getRGB(Ws,Xa(t)),i.buffers.color.setClear(Ws.r,Ws.g,Ws.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(w,_=1){a.set(w),c=_,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,m(a,c)},render:y,addToRenderList:f}}function vd(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(v,F,W,J,et){let X=!1,V=u(J,W,F);if(r!==V)r=V,l(r.object);if(X=p(v,J,W,et),X)g(v,J,W,et);if(et!==null)e.update(et,t.ELEMENT_ARRAY_BUFFER);if(X||o){if(o=!1,C(v,F,W,J),et!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(et).buffer)}}function c(){return t.createVertexArray()}function l(v){return t.bindVertexArray(v)}function h(v){return t.deleteVertexArray(v)}function u(v,F,W){let J=W.wireframe===!0,et=i[v.id];if(et===void 0)et={},i[v.id]=et;let X=et[F.id];if(X===void 0)X={},et[F.id]=X;let V=X[J];if(V===void 0)V=d(c()),X[J]=V;return V}function d(v){let F=[],W=[],J=[];for(let et=0;et<n;et++)F[et]=0,W[et]=0,J[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:J,object:v,attributes:{},index:null}}function p(v,F,W,J){let et=r.attributes,X=F.attributes,V=0,nt=W.getAttributes();for(let q in nt)if(nt[q].location>=0){let lt=et[q],Ct=X[q];if(Ct===void 0){if(q==="instanceMatrix"&&v.instanceMatrix)Ct=v.instanceMatrix;if(q==="instanceColor"&&v.instanceColor)Ct=v.instanceColor}if(lt===void 0)return!0;if(lt.attribute!==Ct)return!0;if(Ct&&lt.data!==Ct.data)return!0;V++}if(r.attributesNum!==V)return!0;if(r.index!==J)return!0;return!1}function g(v,F,W,J){let et={},X=F.attributes,V=0,nt=W.getAttributes();for(let q in nt)if(nt[q].location>=0){let lt=X[q];if(lt===void 0){if(q==="instanceMatrix"&&v.instanceMatrix)lt=v.instanceMatrix;if(q==="instanceColor"&&v.instanceColor)lt=v.instanceColor}let Ct={};if(Ct.attribute=lt,lt&&lt.data)Ct.data=lt.data;et[q]=Ct,V++}r.attributes=et,r.attributesNum=V,r.index=J}function y(){let v=r.newAttributes;for(let F=0,W=v.length;F<W;F++)v[F]=0}function f(v){m(v,0)}function m(v,F){let W=r.newAttributes,J=r.enabledAttributes,et=r.attributeDivisors;if(W[v]=1,J[v]===0)t.enableVertexAttribArray(v),J[v]=1;if(et[v]!==F)t.vertexAttribDivisor(v,F),et[v]=F}function w(){let v=r.newAttributes,F=r.enabledAttributes;for(let W=0,J=F.length;W<J;W++)if(F[W]!==v[W])t.disableVertexAttribArray(W),F[W]=0}function _(v,F,W,J,et,X,V){if(V===!0)t.vertexAttribIPointer(v,F,W,et,X);else t.vertexAttribPointer(v,F,W,J,et,X)}function C(v,F,W,J){y();let et=J.attributes,X=W.getAttributes(),V=F.defaultAttributeValues;for(let nt in X){let q=X[nt];if(q.location>=0){let tt=et[nt];if(tt===void 0){if(nt==="instanceMatrix"&&v.instanceMatrix)tt=v.instanceMatrix;if(nt==="instanceColor"&&v.instanceColor)tt=v.instanceColor}if(tt!==void 0){let lt=tt.normalized,Ct=tt.itemSize,Ot=e.get(tt);if(Ot===void 0)continue;let{buffer:ct,type:it,bytesPerElement:Gt}=Ot,Ft=it===t.INT||it===t.UNSIGNED_INT||tt.gpuType===1013;if(tt.isInterleavedBufferAttribute){let gt=tt.data,Kt=gt.stride,re=tt.offset;if(gt.isInstancedInterleavedBuffer){for(let jt=0;jt<q.locationSize;jt++)m(q.location+jt,gt.meshPerAttribute);if(v.isInstancedMesh!==!0&&J._maxInstanceCount===void 0)J._maxInstanceCount=gt.meshPerAttribute*gt.count}else for(let jt=0;jt<q.locationSize;jt++)f(q.location+jt);t.bindBuffer(t.ARRAY_BUFFER,ct);for(let jt=0;jt<q.locationSize;jt++)_(q.location+jt,Ct/q.locationSize,it,lt,Kt*Gt,(re+Ct/q.locationSize*jt)*Gt,Ft)}else{if(tt.isInstancedBufferAttribute){for(let gt=0;gt<q.locationSize;gt++)m(q.location+gt,tt.meshPerAttribute);if(v.isInstancedMesh!==!0&&J._maxInstanceCount===void 0)J._maxInstanceCount=tt.meshPerAttribute*tt.count}else for(let gt=0;gt<q.locationSize;gt++)f(q.location+gt);t.bindBuffer(t.ARRAY_BUFFER,ct);for(let gt=0;gt<q.locationSize;gt++)_(q.location+gt,Ct/q.locationSize,it,lt,Ct*Gt,Ct/q.locationSize*gt*Gt,Ft)}}else if(V!==void 0){let lt=V[nt];if(lt!==void 0)switch(lt.length){case 2:t.vertexAttrib2fv(q.location,lt);break;case 3:t.vertexAttrib3fv(q.location,lt);break;case 4:t.vertexAttrib4fv(q.location,lt);break;default:t.vertexAttrib1fv(q.location,lt)}}}}w()}function D(){z();for(let v in i){let F=i[v];for(let W in F){let J=F[W];for(let et in J)h(J[et].object),delete J[et];delete F[W]}delete i[v]}}function I(v){if(i[v.id]===void 0)return;let F=i[v.id];for(let W in F){let J=F[W];for(let et in J)h(J[et].object),delete J[et];delete F[W]}delete i[v.id]}function R(v){for(let F in i){let W=i[F];if(W[v.id]===void 0)continue;let J=W[v.id];for(let et in J)h(J[et].object),delete J[et];delete W[v.id]}}function z(){if(M(),o=!0,r===s)return;r=s,l(r.object)}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:f,disableUnusedAttributes:w}}function Md(t,e,n){let i;function s(l){i=l}function r(l,h){t.drawArrays(i,l,h),n.update(h,i,1)}function o(l,h,u){if(u===0)return;t.drawArraysInstanced(i,l,h,u),n.update(h,i,u)}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];n.update(p,i,1)}function c(l,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Sd(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){if(R!==1023&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function a(R){let z=R===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(R!==1009&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==1015&&!z)return!1;return!0}function c(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}if(R==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let l=n.precision!==void 0?n.precision:"highp",h=c(l);if(h!==l)console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h;let u=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),f=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),w=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),C=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,I=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:w,maxVaryings:_,maxFragmentUniforms:C,vertexTextures:D,maxSamples:I}}function wd(t){let e=this,n=null,i=0,s=!1,r=!1,o=new ri,a=new xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){n=h(u,d,0)},this.setState=function(u,d,p){let{clippingPlanes:g,clipIntersection:y,clipShadows:f}=u,m=t.get(u);if(!s||g===null||g.length===0||r&&!f)if(r)h(null);else l();else{let w=r?0:i,_=w*4,C=m.clippingState||null;c.value=C,C=h(g,d,_,p);for(let D=0;D!==_;++D)C[D]=n[D];m.clippingState=C,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){if(c.value!==n)c.value=n,c.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){let y=u!==null?u.length:0,f=null;if(y!==0){if(f=c.value,g!==!0||f===null){let m=p+y*4,w=d.matrixWorldInverse;if(a.getNormalMatrix(w),f===null||f.length<m)f=new Float32Array(m);for(let _=0,C=p;_!==y;++_,C+=4)o.copy(u[_]).applyMatrix4(w,a),o.normal.toArray(f,C),f[C+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,f}}function bd(t){let e=new WeakMap;function n(o,a){if(a===303)o.mapping=301;else if(a===304)o.mapping=302;return o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===303||a===304)if(e.has(o)){let c=e.get(o).texture;return n(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ya(c.height);return l.fromEquirectangularTexture(t,o),e.set(o,l),o.addEventListener("dispose",s),n(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);if(c!==void 0)e.delete(a),c.dispose()}function r(){e=new WeakMap}return{get:i,dispose:r}}class fo extends ho{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=l*this.view.offsetY,a=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}var Wi=4,ra=[0.125,0.215,0.35,0.446,0.526,0.582],yi=20,Gr=new fo,oa=new Ht,kr=null,Hr=0,Wr=0,Vr=!1,_i=(1+Math.sqrt(5))/2,ki=1/_i,aa=[new O(-_i,ki,0),new O(_i,ki,0),new O(-ki,0,_i),new O(ki,0,_i),new O(0,_i,-ki),new O(0,_i,ki),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Qr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=0.1,i=100){kr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();if(s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0)this._blur(s,0,0,e);return this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=ha(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=la(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kr,Hr,Wr),this._renderer.xr.enabled=Vr,t.scissorTest=!1,Vs(t,0,0,t.width,t.height)}_fromTexture(t,e){if(t.mapping===301||t.mapping===302)this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);kr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),Vr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},i=ca(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=ca(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ed(s)),this._blurMaterial=Td(s,t,e)}return i}_compileMaterial(t){let e=new te(this._lodPlanes[0],t);this._renderer.compile(e,Gr)}_sceneToCubeUV(t,e,n,i){let o=new yn(90,1,e,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,{autoClear:h,toneMapping:u}=l;l.getClearColor(oa),l.toneMapping=0,l.autoClear=!1;let d=new un({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),p=new te(new ot,d),g=!1,y=t.background;if(y){if(y.isColor)d.color.copy(y),t.background=null,g=!0}else d.color.copy(oa),g=!0;for(let f=0;f<6;f++){let m=f%3;if(m===0)o.up.set(0,a[f],0),o.lookAt(c[f],0,0);else if(m===1)o.up.set(0,0,a[f]),o.lookAt(0,c[f],0);else o.up.set(0,a[f],0),o.lookAt(0,0,c[f]);let w=this._cubeSize;if(Vs(i,m*w,f>2?w:0,w,w),l.setRenderTarget(i),g)l.render(p,o);l.render(t,o)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=u,l.autoClear=h,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===301||t.mapping===302;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=ha();this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=la();let s=i?this._cubemapMaterial:this._equirectMaterial,r=new te(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let a=this._cubeSize;Vs(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(r,Gr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=aa[(i-s-1)%aa.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,o){let a=this._renderer,c=this._blurMaterial;if(r!=="latitudinal"&&r!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let l=3,h=new te(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*yi-1),g=s/p,y=isFinite(s)?1+Math.floor(l*g):yi;if(y>yi)console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${yi}`);let f=[],m=0;for(let I=0;I<yi;++I){let R=I/g,z=Math.exp(-R*R/2);if(f.push(z),I===0)m+=z;else if(I<y)m+=2*z}for(let I=0;I<f.length;I++)f[I]=f[I]/m;if(u.envMap.value=t.texture,u.samples.value=y,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o)u.poleAxis.value=o;let{_lodMax:w}=this;u.dTheta.value=p,u.mipInt.value=w-n;let _=this._sizeLods[i],C=3*_*(i>w-Wi?i-w+Wi:0),D=4*(this._cubeSize-_);Vs(e,C,D,3*_,2*_),a.setRenderTarget(e),a.render(h,Gr)}}function Ed(t){let e=[],n=[],i=[],s=t,r=t-Wi+1+ra.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);n.push(a);let c=1/a;if(o>t-Wi)c=ra[o-t+Wi-1];else if(o===0)c=0;i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,f=2,m=1,w=new Float32Array(y*g*p),_=new Float32Array(f*g*p),C=new Float32Array(m*g*p);for(let I=0;I<p;I++){let R=I%3*2/3-1,z=I>2?0:-1,M=[R,z,0,R+0.6666666666666666,z,0,R+0.6666666666666666,z+1,0,R,z,0,R+0.6666666666666666,z+1,0,R,z+1,0];w.set(M,y*g*I),_.set(d,f*g*I);let v=[I,I,I,I,I,I];C.set(v,m*g*I)}let D=new Xe;if(D.setAttribute("position",new tn(w,y)),D.setAttribute("uv",new tn(_,f)),D.setAttribute("faceIndex",new tn(C,m)),e.push(D),s>Wi)s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ca(t,e,n){let i=new oi(t,e,n);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vs(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function Td(t,e,n){let i=new Float32Array(yi),s=new O(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:po(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function la(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:po(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ha(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function po(){return`

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
	`}function Ad(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===303||c===304,h=c===301||c===302;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d){if(n===null)n=new Qr(t);return u=l?n.fromEquirectangular(a,u):n.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture}else if(u!==void 0)return u.texture;else{let p=a.image;if(l&&p&&p.height>0||h&&p&&s(p)){if(n===null)n=new Qr(t);return u=l?n.fromEquirectangular(a):n.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)if(a[h]!==void 0)c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);if(l!==void 0)e.delete(c),l.dispose()}function o(){if(e=new WeakMap,n!==null)n.dispose(),n=null}return{get:i,dispose:o}}function Rd(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)us("THREE.WebGLRenderer: "+i+" extension not supported.");return s}}}function Cd(t,e,n,i){let s={},r=new WeakMap;function o(u){let d=u.target;if(d.index!==null)e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let f=0,m=y.length;f<m;f++)e.remove(y[f])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);if(p)e.remove(p),r.delete(d);if(i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0)delete d._maxInstanceCount;n.memory.geometries--}function a(u,d){if(s[d.id]===!0)return d;return d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++,d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],t.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let y=p[g];for(let f=0,m=y.length;f<m;f++)e.update(y[f],t.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let w=p.array;y=p.version;for(let _=0,C=w.length;_<C;_+=3){let D=w[_+0],I=w[_+1],R=w[_+2];d.push(D,I,I,R,R,D)}}else if(g!==void 0){let w=g.array;y=g.version;for(let _=0,C=w.length/3-1;_<C;_+=3){let D=_+0,I=_+1,R=_+2;d.push(D,I,I,R,R,D)}}else return;let f=new((Ga(d))?lo:co)(d,1);f.version=y;let m=r.get(u);if(m)e.remove(m);r.set(u,f)}function h(u){let d=r.get(u);if(d){let p=u.index;if(p!==null){if(d.version<p.version)l(u)}}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Id(t,e,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){t.drawElements(i,p,r,d*o),n.update(p,i,1)}function l(d,p,g){if(g===0)return;t.drawElementsInstanced(i,p,r,d*o,g),n.update(p,i,g)}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m];n.update(f,i,1)}function u(d,p,g,y){if(g===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)l(d[m]/o,p[m],y[m]);else{f.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,y,0,g);let m=0;for(let w=0;w<g;w++)m+=p[w]*y[w];n.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Pd(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Ld(t,e,n){let i=new WeakMap,s=new Ge;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};if(d!==void 0)d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],_=0;if(p===!0)_=1;if(g===!0)_=2;if(y===!0)_=3;let C=a.attributes.position.count*_,D=1;if(C>e.maxTextureSize)D=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize;let I=new Float32Array(C*D*4*u),R=new ro(I,C,D,u);R.type=1015,R.needsUpdate=!0;let z=_*4;for(let v=0;v<u;v++){let F=f[v],W=m[v],J=w[v],et=C*D*4*v;for(let X=0;X<F.count;X++){let V=X*z;if(p===!0)s.fromBufferAttribute(F,X),I[et+V+0]=s.x,I[et+V+1]=s.y,I[et+V+2]=s.z,I[et+V+3]=0;if(g===!0)s.fromBufferAttribute(W,X),I[et+V+4]=s.x,I[et+V+5]=s.y,I[et+V+6]=s.z,I[et+V+7]=0;if(y===!0)s.fromBufferAttribute(J,X),I[et+V+8]=s.x,I[et+V+9]=s.y,I[et+V+10]=s.z,I[et+V+11]=J.itemSize===4?s.w:1}}d={count:u,texture:R,size:new Et(C,D)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(t,"morphTargetBaseInfluence",g),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function Dd(t,e,n,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l)e.update(u),s.set(u,l);if(c.isInstancedMesh){if(c.hasEventListener("dispose",a)===!1)c.addEventListener("dispose",a);if(s.get(c)!==l){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);s.set(c,l)}}if(c.isSkinnedMesh){let d=c.skeleton;if(s.get(d)!==l)d.update(),s.set(d,l)}return u}function o(){s=new WeakMap}function a(c){let l=c.target;if(l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null)n.remove(l.instanceColor)}return{update:r,dispose:o}}class mo extends on{constructor(t,e,n,i,s,r,o,a,c,l=1026){if(l!==1026&&l!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(n===void 0&&l===1026)n=1014;if(n===void 0&&l===1027)n=1020;super(null,i,s,r,o,a,l,n,c);this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:1003,this.minFilter=a!==void 0?a:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);if(this.compareFunction!==null)e.compareFunction=this.compareFunction;return e}}var Ja=new on,ua=new mo(1,1),$a=new ro,Ka=new Wa,Qa=new uo,da=[],fa=[],pa=new Float32Array(16),ma=new Float32Array(9),ga=new Float32Array(4);function Zi(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=da[s];if(r===void 0)r=new Float32Array(s),da[s]=r;if(e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Ze(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Je(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function rr(t,e){let n=fa[e];if(n===void 0)n=new Int32Array(e),fa[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ud(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function Nd(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ze(n,e))return;t.uniform2fv(this.addr,e),Je(n,e)}}function Fd(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(Ze(n,e))return;t.uniform3fv(this.addr,e),Je(n,e)}}function Bd(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ze(n,e))return;t.uniform4fv(this.addr,e),Je(n,e)}}function Od(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ze(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Je(n,e)}else{if(Ze(n,i))return;ga.set(i),t.uniformMatrix2fv(this.addr,!1,ga),Je(n,i)}}function zd(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ze(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Je(n,e)}else{if(Ze(n,i))return;ma.set(i),t.uniformMatrix3fv(this.addr,!1,ma),Je(n,i)}}function Gd(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ze(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Je(n,e)}else{if(Ze(n,i))return;pa.set(i),t.uniformMatrix4fv(this.addr,!1,pa),Je(n,i)}}function kd(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function Hd(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ze(n,e))return;t.uniform2iv(this.addr,e),Je(n,e)}}function Wd(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ze(n,e))return;t.uniform3iv(this.addr,e),Je(n,e)}}function Vd(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ze(n,e))return;t.uniform4iv(this.addr,e),Je(n,e)}}function Xd(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function qd(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ze(n,e))return;t.uniform2uiv(this.addr,e),Je(n,e)}}function Yd(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ze(n,e))return;t.uniform3uiv(this.addr,e),Je(n,e)}}function Zd(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ze(n,e))return;t.uniform4uiv(this.addr,e),Je(n,e)}}function Jd(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)ua.compareFunction=515,r=ua;else r=Ja;n.setTexture2D(e||r,s)}function $d(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||Ka,s)}function Kd(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(e||Qa,s)}function Qd(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||$a,s)}function jd(t){switch(t){case 5126:return Ud;case 35664:return Nd;case 35665:return Fd;case 35666:return Bd;case 35674:return Od;case 35675:return zd;case 35676:return Gd;case 5124:case 35670:return kd;case 35667:case 35671:return Hd;case 35668:case 35672:return Wd;case 35669:case 35673:return Vd;case 5125:return Xd;case 36294:return qd;case 36295:return Yd;case 36296:return Zd;case 35678:case 36198:case 36298:case 36306:case 35682:return Jd;case 35679:case 36299:case 36307:return $d;case 35680:case 36300:case 36308:case 36293:return Kd;case 36289:case 36303:case 36311:case 36292:return Qd}}function tf(t,e){t.uniform1fv(this.addr,e)}function ef(t,e){let n=Zi(e,this.size,2);t.uniform2fv(this.addr,n)}function nf(t,e){let n=Zi(e,this.size,3);t.uniform3fv(this.addr,n)}function sf(t,e){let n=Zi(e,this.size,4);t.uniform4fv(this.addr,n)}function rf(t,e){let n=Zi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function of(t,e){let n=Zi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function af(t,e){let n=Zi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function cf(t,e){t.uniform1iv(this.addr,e)}function lf(t,e){t.uniform2iv(this.addr,e)}function hf(t,e){t.uniform3iv(this.addr,e)}function uf(t,e){t.uniform4iv(this.addr,e)}function df(t,e){t.uniform1uiv(this.addr,e)}function ff(t,e){t.uniform2uiv(this.addr,e)}function pf(t,e){t.uniform3uiv(this.addr,e)}function mf(t,e){t.uniform4uiv(this.addr,e)}function gf(t,e,n){let i=this.cache,s=e.length,r=rr(n,s);if(!Ze(i,r))t.uniform1iv(this.addr,r),Je(i,r);for(let o=0;o!==s;++o)n.setTexture2D(e[o]||Ja,r[o])}function xf(t,e,n){let i=this.cache,s=e.length,r=rr(n,s);if(!Ze(i,r))t.uniform1iv(this.addr,r),Je(i,r);for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Ka,r[o])}function _f(t,e,n){let i=this.cache,s=e.length,r=rr(n,s);if(!Ze(i,r))t.uniform1iv(this.addr,r),Je(i,r);for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Qa,r[o])}function yf(t,e,n){let i=this.cache,s=e.length,r=rr(n,s);if(!Ze(i,r))t.uniform1iv(this.addr,r),Je(i,r);for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||$a,r[o])}function vf(t){switch(t){case 5126:return tf;case 35664:return ef;case 35665:return nf;case 35666:return sf;case 35674:return rf;case 35675:return of;case 35676:return af;case 5124:case 35670:return cf;case 35667:case 35671:return lf;case 35668:case 35672:return hf;case 35669:case 35673:return uf;case 5125:return df;case 36294:return ff;case 36295:return pf;case 36296:return mf;case 35678:case 36198:case 36298:case 36306:case 35682:return gf;case 35679:case 36299:case 36307:return xf;case 35680:case 36300:case 36308:case 36293:return _f;case 36289:case 36303:case 36311:case 36292:return yf}}class ja{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jd(e.type)}}class tc{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vf(e.type)}}class ec{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(t,e[o.id],n)}}}var Xr=/(\w+)(\])?(\[|\.)?/g;function xa(t,e){t.seq.push(e),t.map[e.id]=e}function Mf(t,e,n){let i=t.name,s=i.length;Xr.lastIndex=0;while(!0){let r=Xr.exec(i),o=Xr.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c)a=a|0;if(l===void 0||l==="["&&o+2===s){xa(n,l===void 0?new ja(a,t,e):new tc(a,t,e));break}else{let u=n.map[a];if(u===void 0)u=new ec(a),xa(n,u);n=u}}}class fs{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);Mf(s,r,this)}}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let o=e[s],a=n[o.id];if(a.needsUpdate!==!1)o.setValue(t,a.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function _a(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Sf=37297,wf=0;function bf(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var ya=new xe;function Ef(t){we._getMatrix(ya,we.workingColorSpace,t);let e=`mat3( ${ya.elements.map((n)=>n.toFixed(4))} )`;switch(we.getTransfer(t)){case"linear":return[e,"LinearTransferOETF"];case"srgb":return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function va(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+bf(t.getShaderSource(e),o)}else return s}function Tf(t,e){let n=Ef(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Af(t,e){let n;switch(e){case 1:n="Linear";break;case 2:n="Reinhard";break;case 3:n="Cineon";break;case 4:n="ACESFilmic";break;case 6:n="AgX";break;case 7:n="Neutral";break;case 5:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Xs=new O;function Rf(){we.getLuminanceCoefficients(Xs);let t=Xs.x.toFixed(4),e=Xs.y.toFixed(4),n=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Cf(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function If(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function Pf(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),o=r.name,a=1;if(r.type===t.FLOAT_MAT2)a=2;if(r.type===t.FLOAT_MAT3)a=3;if(r.type===t.FLOAT_MAT4)a=4;n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ds(t){return t!==""}function Ma(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sa(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Lf=/^[ \t]*#include +<([\w\d./]+)>/gm;function jr(t){return t.replace(Lf,Uf)}var Df=new Map;function Uf(t,e){let n=_e[e];if(n===void 0){let i=Df.get(e);if(i!==void 0)n=_e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("Can not resolve #include <"+e+">")}return jr(n)}var Nf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wa(t){return t.replace(Nf,Ff)}function Ff(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ba(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;if(t.precision==="highp")e+=`
#define HIGH_PRECISION`;else if(t.precision==="mediump")e+=`
#define MEDIUM_PRECISION`;else if(t.precision==="lowp")e+=`
#define LOW_PRECISION`;return e}function Bf(t){let e="SHADOWMAP_TYPE_BASIC";if(t.shadowMapType===1)e="SHADOWMAP_TYPE_PCF";else if(t.shadowMapType===2)e="SHADOWMAP_TYPE_PCF_SOFT";else if(t.shadowMapType===3)e="SHADOWMAP_TYPE_VSM";return e}function Of(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zf(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function Gf(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function kf(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Hf(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:o,fragmentShader:a}=n,c=Bf(n),l=Of(n),h=zf(n),u=Gf(n),d=kf(n),p=Cf(n),g=If(r),y=s.createProgram(),f,m,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ds).join(`
`),f.length>0)f+=`
`;if(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ds).join(`
`),m.length>0)m+=`
`}else f=[ba(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),m=[ba(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?_e.tonemapping_pars_fragment:"",n.toneMapping!==0?Af("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,Tf("linearToOutputTexel",n.outputColorSpace),Rf(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ds).join(`
`);if(o=jr(o),o=Ma(o,n),o=Sa(o,n),a=jr(a),a=Ma(a,n),a=Sa(a,n),o=wa(o),a=wa(a),n.isRawShaderMaterial!==!0)w=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",n.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m;let _=w+f+o,C=w+m+a,D=_a(s,s.VERTEX_SHADER,_),I=_a(s,s.FRAGMENT_SHADER,C);if(s.attachShader(y,D),s.attachShader(y,I),n.index0AttributeName!==void 0)s.bindAttribLocation(y,0,n.index0AttributeName);else if(n.morphTargets===!0)s.bindAttribLocation(y,0,"position");s.linkProgram(y);function R(F){if(t.debug.checkShaderErrors){let W=s.getProgramInfoLog(y).trim(),J=s.getShaderInfoLog(D).trim(),et=s.getShaderInfoLog(I).trim(),X=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,y,D,I);else{let nt=va(s,D,"vertex"),q=va(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+W+`
`+nt+`
`+q)}else if(W!=="")console.warn("THREE.WebGLProgram: Program Info Log:",W);else if(J===""||et==="")V=!1;if(V)F.diagnostics={runnable:X,programLog:W,vertexShader:{log:J,prefix:f},fragmentShader:{log:et,prefix:m}}}s.deleteShader(D),s.deleteShader(I),z=new fs(s,y),M=Pf(s,y)}let z;this.getUniforms=function(){if(z===void 0)R(this);return z};let M;this.getAttributes=function(){if(M===void 0)R(this);return M};let v=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(v===!1)v=s.getProgramParameter(y,Sf);return v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wf++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=I,this}var Wf=0;class nc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let{vertexShader:e,fragmentShader:n}=t,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);if(r.has(i)===!1)r.add(i),i.usedTimes++;if(r.has(s)===!1)r.add(s),s.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new ic(t),e.set(t,n);return n}}class ic{constructor(t){this.id=Wf++,this.code=t,this.usedTimes=0}}function Vf(t,e,n,i,s,r,o){let a=new ao,c=new nc,l=new Set,h=[],{logarithmicDepthBuffer:u,vertexTextures:d,precision:p}=s,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){if(l.add(M),M===0)return"uv";return`uv${M}`}function f(M,v,F,W,J){let et=W.fog,X=J.geometry,V=M.isMeshStandardMaterial?W.environment:null,nt=(M.isMeshStandardMaterial?n:e).get(M.envMap||V),q=!!nt&&nt.mapping===306?nt.image.height:null,tt=g[M.type];if(M.precision!==null){if(p=s.getMaxPrecision(M.precision),p!==M.precision)console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead.")}let lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ct=lt!==void 0?lt.length:0,Ot=0;if(X.morphAttributes.position!==void 0)Ot=1;if(X.morphAttributes.normal!==void 0)Ot=2;if(X.morphAttributes.color!==void 0)Ot=3;let ct,it,Gt,Ft;if(tt){let St=Gn[tt];ct=St.vertexShader,it=St.fragmentShader}else ct=M.vertexShader,it=M.fragmentShader,c.update(M),Gt=c.getVertexShaderID(M),Ft=c.getFragmentShaderID(M);let gt=t.getRenderTarget(),Kt=t.state.buffers.depth.getReversed(),re=J.isInstancedMesh===!0,jt=J.isBatchedMesh===!0,ut=!!M.map,xt=!!M.matcap,N=!!nt,Bt=!!M.aoMap,_t=!!M.lightMap,It=!!M.bumpMap,ht=!!M.normalMap,Mt=!!M.displacementMap,wt=!!M.emissiveMap,zt=!!M.metalnessMap,U=!!M.roughnessMap,E=M.anisotropy>0,Y=M.clearcoat>0,at=M.dispersion>0,dt=M.iridescence>0,rt=M.sheen>0,Wt=M.transmission>0,yt=E&&!!M.anisotropyMap,Tt=Y&&!!M.clearcoatMap,ie=Y&&!!M.clearcoatNormalMap,ft=Y&&!!M.clearcoatRoughnessMap,Dt=dt&&!!M.iridescenceMap,de=dt&&!!M.iridescenceThicknessMap,ne=rt&&!!M.sheenColorMap,Ut=rt&&!!M.sheenRoughnessMap,ce=!!M.specularMap,A=!!M.specularColorMap,st=!!M.specularIntensityMap,S=Wt&&!!M.transmissionMap,x=Wt&&!!M.thicknessMap,T=!!M.gradientMap,P=!!M.alphaMap,L=M.alphaTest>0,B=!!M.alphaHash,j=!!M.extensions,pt=0;if(M.toneMapped){if(gt===null||gt.isXRRenderTarget===!0)pt=t.toneMapping}let At={shaderID:tt,shaderType:M.type,shaderName:M.name,vertexShader:ct,fragmentShader:it,defines:M.defines,customVertexShaderID:Gt,customFragmentShaderID:Ft,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:jt,batchingColor:jt&&J._colorsTexture!==null,instancing:re,instancingColor:re&&J.instanceColor!==null,instancingMorph:re&&J.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:gt===null?t.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:"srgb-linear",alphaToCoverage:!!M.alphaToCoverage,map:ut,matcap:xt,envMap:N,envMapMode:N&&nt.mapping,envMapCubeUVHeight:q,aoMap:Bt,lightMap:_t,bumpMap:It,normalMap:ht,displacementMap:d&&Mt,emissiveMap:wt,normalMapObjectSpace:ht&&M.normalMapType===1,normalMapTangentSpace:ht&&M.normalMapType===0,metalnessMap:zt,roughnessMap:U,anisotropy:E,anisotropyMap:yt,clearcoat:Y,clearcoatMap:Tt,clearcoatNormalMap:ie,clearcoatRoughnessMap:ft,dispersion:at,iridescence:dt,iridescenceMap:Dt,iridescenceThicknessMap:de,sheen:rt,sheenColorMap:ne,sheenRoughnessMap:Ut,specularMap:ce,specularColorMap:A,specularIntensityMap:st,transmission:Wt,transmissionMap:S,thicknessMap:x,gradientMap:T,opaque:M.transparent===!1&&M.blending===1&&M.alphaToCoverage===!1,alphaMap:P,alphaTest:L,alphaHash:B,combine:M.combine,mapUv:ut&&y(M.map.channel),aoMapUv:Bt&&y(M.aoMap.channel),lightMapUv:_t&&y(M.lightMap.channel),bumpMapUv:It&&y(M.bumpMap.channel),normalMapUv:ht&&y(M.normalMap.channel),displacementMapUv:Mt&&y(M.displacementMap.channel),emissiveMapUv:wt&&y(M.emissiveMap.channel),metalnessMapUv:zt&&y(M.metalnessMap.channel),roughnessMapUv:U&&y(M.roughnessMap.channel),anisotropyMapUv:yt&&y(M.anisotropyMap.channel),clearcoatMapUv:Tt&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:de&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&y(M.sheenRoughnessMap.channel),specularMapUv:ce&&y(M.specularMap.channel),specularColorMapUv:A&&y(M.specularColorMap.channel),specularIntensityMapUv:st&&y(M.specularIntensityMap.channel),transmissionMapUv:S&&y(M.transmissionMap.channel),thicknessMapUv:x&&y(M.thicknessMap.channel),alphaMapUv:P&&y(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ht||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!X.attributes.uv&&(ut||P),fog:!!et,useFog:M.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Kt,skinning:J.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Ot,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:pt,decodeVideoTexture:ut&&M.map.isVideoTexture===!0&&we.getTransfer(M.map.colorSpace)==="srgb",decodeVideoTextureEmissive:wt&&M.emissiveMap.isVideoTexture===!0&&we.getTransfer(M.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===2,flipSided:M.side===1,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:j&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(j&&M.extensions.multiDraw===!0||jt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function m(M){let v=[];if(M.shaderID)v.push(M.shaderID);else v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID);if(M.defines!==void 0)for(let F in M.defines)v.push(F),v.push(M.defines[F]);if(M.isRawShaderMaterial===!1)w(v,M),_(v,M),v.push(t.outputColorSpace);return v.push(M.customProgramCacheKey),v.join()}function w(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function _(M,v){if(a.disableAll(),v.supportsVertexTextures)a.enable(0);if(v.instancing)a.enable(1);if(v.instancingColor)a.enable(2);if(v.instancingMorph)a.enable(3);if(v.matcap)a.enable(4);if(v.envMap)a.enable(5);if(v.normalMapObjectSpace)a.enable(6);if(v.normalMapTangentSpace)a.enable(7);if(v.clearcoat)a.enable(8);if(v.iridescence)a.enable(9);if(v.alphaTest)a.enable(10);if(v.vertexColors)a.enable(11);if(v.vertexAlphas)a.enable(12);if(v.vertexUv1s)a.enable(13);if(v.vertexUv2s)a.enable(14);if(v.vertexUv3s)a.enable(15);if(v.vertexTangents)a.enable(16);if(v.anisotropy)a.enable(17);if(v.alphaHash)a.enable(18);if(v.batching)a.enable(19);if(v.dispersion)a.enable(20);if(v.batchingColor)a.enable(21);if(M.push(a.mask),a.disableAll(),v.fog)a.enable(0);if(v.useFog)a.enable(1);if(v.flatShading)a.enable(2);if(v.logarithmicDepthBuffer)a.enable(3);if(v.reverseDepthBuffer)a.enable(4);if(v.skinning)a.enable(5);if(v.morphTargets)a.enable(6);if(v.morphNormals)a.enable(7);if(v.morphColors)a.enable(8);if(v.premultipliedAlpha)a.enable(9);if(v.shadowMapEnabled)a.enable(10);if(v.doubleSided)a.enable(11);if(v.flipSided)a.enable(12);if(v.useDepthPacking)a.enable(13);if(v.dithering)a.enable(14);if(v.transmission)a.enable(15);if(v.sheen)a.enable(16);if(v.opaque)a.enable(17);if(v.pointsUvs)a.enable(18);if(v.decodeVideoTexture)a.enable(19);if(v.decodeVideoTextureEmissive)a.enable(20);if(v.alphaToCoverage)a.enable(21);M.push(a.mask)}function C(M){let v=g[M.type],F;if(v){let W=Gn[v];F=Dl.clone(W.uniforms)}else F=M.uniforms;return F}function D(M,v){let F;for(let W=0,J=h.length;W<J;W++){let et=h[W];if(et.cacheKey===v){F=et,++F.usedTimes;break}}if(F===void 0)F=new Hf(t,v,M,r),h.push(F);return F}function I(M){if(--M.usedTimes===0){let v=h.indexOf(M);h[v]=h[h.length-1],h.pop(),M.destroy()}}function R(M){c.remove(M)}function z(){c.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:C,acquireProgram:D,releaseProgram:I,releaseShaderCache:R,programs:h,dispose:z}}function Xf(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);if(a===void 0)a={},t.set(o,a);return a}function i(o){t.delete(o)}function s(o,a,c){t.get(o)[a]=c}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function qf(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function Ea(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function Ta(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(u,d,p,g,y,f){let m=t[e];if(m===void 0)m={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:f},t[e]=m;else m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=y,m.group=f;return e++,m}function a(u,d,p,g,y,f){let m=o(u,d,p,g,y,f);if(p.transmission>0)i.push(m);else if(p.transparent===!0)s.push(m);else n.push(m)}function c(u,d,p,g,y,f){let m=o(u,d,p,g,y,f);if(p.transmission>0)i.unshift(m);else if(p.transparent===!0)s.unshift(m);else n.unshift(m)}function l(u,d){if(n.length>1)n.sort(u||qf);if(i.length>1)i.sort(d||Ea);if(s.length>1)s.sort(d||Ea)}function h(){for(let u=e,d=t.length;u<d;u++){let p=t[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Yf(){let t=new WeakMap;function e(i,s){let r=t.get(i),o;if(r===void 0)o=new Ta,t.set(i,[o]);else if(s>=r.length)o=new Ta,r.push(o);else o=r[s];return o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Zf(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Ht};break;case"SpotLight":n={position:new O,direction:new O,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":n={color:new Ht,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function Jf(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var $f=0;function Kf(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Qf(t){let e=new Zf,n=Jf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let s=new O,r=new oe,o=new oe;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,y=0,f=0,m=0,w=0,_=0,C=0,D=0,I=0,R=0;l.sort(Kf);for(let M=0,v=l.length;M<v;M++){let F=l[M],{color:W,intensity:J,distance:et}=F,X=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=W.r*J,u+=W.g*J,d+=W.b*J;else if(F.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(F.sh.coefficients[V],J);R++}else if(F.isDirectionalLight){let V=e.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let nt=F.shadow,q=n.get(F);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=F.shadow.matrix,w++}i.directional[p]=V,p++}else if(F.isSpotLight){let V=e.get(F);V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy(W).multiplyScalar(J),V.distance=et,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,i.spot[y]=V;let nt=F.shadow;if(F.map){if(i.spotLightMap[D]=F.map,D++,nt.updateMatrices(F),F.castShadow)I++}if(i.spotLightMatrix[y]=nt.matrix,F.castShadow){let q=n.get(F);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,i.spotShadow[y]=q,i.spotShadowMap[y]=X,C++}y++}else if(F.isRectAreaLight){let V=e.get(F);V.color.copy(W).multiplyScalar(J),V.halfWidth.set(F.width*0.5,0,0),V.halfHeight.set(0,F.height*0.5,0),i.rectArea[f]=V,f++}else if(F.isPointLight){let V=e.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),V.distance=F.distance,V.decay=F.decay,F.castShadow){let nt=F.shadow,q=n.get(F);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,q.shadowCameraNear=nt.camera.near,q.shadowCameraFar=nt.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=F.shadow.matrix,_++}i.point[g]=V,g++}else if(F.isHemisphereLight){let V=e.get(F);V.skyColor.copy(F.color).multiplyScalar(J),V.groundColor.copy(F.groundColor).multiplyScalar(J),i.hemi[m]=V,m++}}if(f>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=Rt.LTC_FLOAT_1,i.rectAreaLTC2=Rt.LTC_FLOAT_2;else i.rectAreaLTC1=Rt.LTC_HALF_1,i.rectAreaLTC2=Rt.LTC_HALF_2;i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let z=i.hash;if(z.directionalLength!==p||z.pointLength!==g||z.spotLength!==y||z.rectAreaLength!==f||z.hemiLength!==m||z.numDirectionalShadows!==w||z.numPointShadows!==_||z.numSpotShadows!==C||z.numSpotMaps!==D||z.numLightProbes!==R)i.directional.length=p,i.spot.length=y,i.rectArea.length=f,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=C+D-I,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,z.directionalLength=p,z.pointLength=g,z.spotLength=y,z.rectAreaLength=f,z.hemiLength=m,z.numDirectionalShadows=w,z.numPointShadows=_,z.numSpotShadows=C,z.numSpotMaps=D,z.numLightProbes=R,i.version=$f++}function c(l,h){let u=0,d=0,p=0,g=0,y=0,f=h.matrixWorldInverse;for(let m=0,w=l.length;m<w;m++){let _=l[m];if(_.isDirectionalLight){let C=i.directional[u];C.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),u++}else if(_.isSpotLight){let C=i.spot[p];C.position.setFromMatrixPosition(_.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),p++}else if(_.isRectAreaLight){let C=i.rectArea[g];C.position.setFromMatrixPosition(_.matrixWorld),C.position.applyMatrix4(f),o.identity(),r.copy(_.matrixWorld),r.premultiply(f),o.extractRotation(r),C.halfWidth.set(_.width*0.5,0,0),C.halfHeight.set(0,_.height*0.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let C=i.point[d];C.position.setFromMatrixPosition(_.matrixWorld),C.position.applyMatrix4(f),d++}else if(_.isHemisphereLight){let C=i.hemi[y];C.direction.setFromMatrixPosition(_.matrixWorld),C.direction.transformDirection(f),y++}}}return{setup:a,setupView:c,state:i}}function Aa(t){let e=new Qf(t),n=[],i=[];function s(h){l.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function c(h){e.setupView(n,h)}let l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function jf(t){let e=new WeakMap;function n(s,r=0){let o=e.get(s),a;if(o===void 0)a=new Aa(t),e.set(s,[a]);else if(r>=o.length)a=new Aa(t),o.push(a);else a=o[r];return a}function i(){e=new WeakMap}return{get:n,dispose:i}}class sc extends ci{static get type(){return"MeshDepthMaterial"}constructor(t){super();this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rc extends ci{static get type(){return"MeshDistanceMaterial"}constructor(t){super();this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}var tp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ep=`uniform sampler2D shadow_pass;
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
}`;function np(t,e,n){let i=new sr,s=new Et,r=new Et,o=new Ge,a=new sc({depthPacking:3201}),c=new rc,l={},h=n.maxTextureSize,u={[0]:1,[1]:0,[2]:2},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:tp,fragmentShader:ep}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Xe;g.setAttribute("position",new tn(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let y=new te(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let m=this.type;this.render=function(I,R,z){if(f.enabled===!1)return;if(f.autoUpdate===!1&&f.needsUpdate===!1)return;if(I.length===0)return;let M=t.getRenderTarget(),v=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),W=t.state;W.setBlending(0),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let J=m!==3&&this.type===3,et=m===3&&this.type!==3;for(let X=0,V=I.length;X<V;X++){let nt=I[X],q=nt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let tt=q.getFrameExtents();if(s.multiply(tt),r.copy(q.mapSize),s.x>h||s.y>h){if(s.x>h)r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,q.mapSize.x=r.x;if(s.y>h)r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,q.mapSize.y=r.y}if(q.map===null||J===!0||et===!0){let Ct=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(q.map!==null)q.map.dispose();q.map=new oi(s.x,s.y,Ct),q.map.texture.name=nt.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();let lt=q.getViewportCount();for(let Ct=0;Ct<lt;Ct++){let Ot=q.getViewport(Ct);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),W.viewport(o),q.updateMatrices(nt,Ct),i=q.getFrustum(),C(R,z,q.camera,nt,this.type)}if(q.isPointLightShadow!==!0&&this.type===3)w(q,z);q.needsUpdate=!1}m=this.type,f.needsUpdate=!1,t.setRenderTarget(M,v,F)};function w(I,R){let z=e.update(y);if(d.defines.VSM_SAMPLES!==I.blurSamples)d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0;if(I.mapPass===null)I.mapPass=new oi(s.x,s.y);d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,t.setRenderTarget(I.mapPass),t.clear(),t.renderBufferDirect(R,null,z,d,y,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,t.setRenderTarget(I.map),t.clear(),t.renderBufferDirect(R,null,z,p,y,null)}function _(I,R,z,M){let v=null,F=z.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(F!==void 0)v=F;else if(v=z.isPointLight===!0?c:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let W=v.uuid,J=R.uuid,et=l[W];if(et===void 0)et={},l[W]=et;let X=et[J];if(X===void 0)X=v.clone(),et[J]=X,R.addEventListener("dispose",D);v=X}if(v.visible=R.visible,v.wireframe=R.wireframe,M===3)v.side=R.shadowSide!==null?R.shadowSide:R.side;else v.side=R.shadowSide!==null?R.shadowSide:u[R.side];if(v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,z.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let W=t.properties.get(v);W.light=z}return v}function C(I,R,z,M,v){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)){if((I.castShadow||I.receiveShadow&&v===3)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,I.matrixWorld);let J=e.update(I),et=I.material;if(Array.isArray(et)){let X=J.groups;for(let V=0,nt=X.length;V<nt;V++){let q=X[V],tt=et[q.materialIndex];if(tt&&tt.visible){let lt=_(I,tt,M,v);I.onBeforeShadow(t,I,R,z,J,lt,q),t.renderBufferDirect(z,null,J,lt,I,q),I.onAfterShadow(t,I,R,z,J,lt,q)}}}else if(et.visible){let X=_(I,et,M,v);I.onBeforeShadow(t,I,R,z,J,X,null),t.renderBufferDirect(z,null,J,X,I,null),I.onAfterShadow(t,I,R,z,J,X,null)}}}let W=I.children;for(let J=0,et=W.length;J<et;J++)C(W[J],R,z,M,v)}function D(I){I.target.removeEventListener("dispose",D);for(let z in l){let M=l[z],v=I.target.uuid;if(v in M)M[v].dispose(),delete M[v]}}}var ip={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};function sp(t,e){function n(){let S=!1,x=new Ge,T=null,P=new Ge(0,0,0,0);return{setMask:function(L){if(T!==L&&!S)t.colorMask(L,L,L,L),T=L},setLocked:function(L){S=L},setClear:function(L,B,j,pt,At){if(At===!0)L*=pt,B*=pt,j*=pt;if(x.set(L,B,j,pt),P.equals(x)===!1)t.clearColor(L,B,j,pt),P.copy(x)},reset:function(){S=!1,T=null,P.set(-1,0,0,0)}}}function i(){let S=!1,x=!1,T=null,P=null,L=null;return{setReversed:function(B){if(x!==B){let j=e.get("EXT_clip_control");if(x)j.clipControlEXT(j.LOWER_LEFT_EXT,j.ZERO_TO_ONE_EXT);else j.clipControlEXT(j.LOWER_LEFT_EXT,j.NEGATIVE_ONE_TO_ONE_EXT);let pt=L;L=null,this.setClear(pt)}x=B},getReversed:function(){return x},setTest:function(B){if(B)gt(t.DEPTH_TEST);else Kt(t.DEPTH_TEST)},setMask:function(B){if(T!==B&&!S)t.depthMask(B),T=B},setFunc:function(B){if(x)B=ip[B];if(P!==B){switch(B){case 0:t.depthFunc(t.NEVER);break;case 1:t.depthFunc(t.ALWAYS);break;case 2:t.depthFunc(t.LESS);break;case 3:t.depthFunc(t.LEQUAL);break;case 4:t.depthFunc(t.EQUAL);break;case 5:t.depthFunc(t.GEQUAL);break;case 6:t.depthFunc(t.GREATER);break;case 7:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}P=B}},setLocked:function(B){S=B},setClear:function(B){if(L!==B){if(x)B=1-B;t.clearDepth(B),L=B}},reset:function(){S=!1,T=null,P=null,L=null,x=!1}}}function s(){let S=!1,x=null,T=null,P=null,L=null,B=null,j=null,pt=null,At=null;return{setTest:function(St){if(!S)if(St)gt(t.STENCIL_TEST);else Kt(t.STENCIL_TEST)},setMask:function(St){if(x!==St&&!S)t.stencilMask(St),x=St},setFunc:function(St,ee,pe){if(T!==St||P!==ee||L!==pe)t.stencilFunc(St,ee,pe),T=St,P=ee,L=pe},setOp:function(St,ee,pe){if(B!==St||j!==ee||pt!==pe)t.stencilOp(St,ee,pe),B=St,j=ee,pt=pe},setLocked:function(St){S=St},setClear:function(St){if(At!==St)t.clearStencil(St),At=St},reset:function(){S=!1,x=null,T=null,P=null,L=null,B=null,j=null,pt=null,At=null}}}let r=new n,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,y=!1,f=null,m=null,w=null,_=null,C=null,D=null,I=null,R=new Ht(0,0,0),z=0,M=!1,v=null,F=null,W=null,J=null,et=null,X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,nt=0,q=t.getParameter(t.VERSION);if(q.indexOf("WebGL")!==-1)nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=nt>=1;else if(q.indexOf("OpenGL ES")!==-1)nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=nt>=2;let tt=null,lt={},Ct=t.getParameter(t.SCISSOR_BOX),Ot=t.getParameter(t.VIEWPORT),ct=new Ge().fromArray(Ct),it=new Ge().fromArray(Ot);function Gt(S,x,T,P){let L=new Uint8Array(4),B=t.createTexture();t.bindTexture(S,B),t.texParameteri(S,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(S,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let j=0;j<T;j++)if(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)t.texImage3D(x,0,t.RGBA,1,1,P,0,t.RGBA,t.UNSIGNED_BYTE,L);else t.texImage2D(x+j,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,L);return B}let Ft={};Ft[t.TEXTURE_2D]=Gt(t.TEXTURE_2D,t.TEXTURE_2D,1),Ft[t.TEXTURE_CUBE_MAP]=Gt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ft[t.TEXTURE_2D_ARRAY]=Gt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ft[t.TEXTURE_3D]=Gt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(t.DEPTH_TEST),o.setFunc(3),It(!1),ht(1),gt(t.CULL_FACE),Bt(0);function gt(S){if(h[S]!==!0)t.enable(S),h[S]=!0}function Kt(S){if(h[S]!==!1)t.disable(S),h[S]=!1}function re(S,x){if(u[S]!==x){if(t.bindFramebuffer(S,x),u[S]=x,S===t.DRAW_FRAMEBUFFER)u[t.FRAMEBUFFER]=x;if(S===t.FRAMEBUFFER)u[t.DRAW_FRAMEBUFFER]=x;return!0}return!1}function jt(S,x){let T=p,P=!1;if(S){if(T=d.get(x),T===void 0)T=[],d.set(x,T);let L=S.textures;if(T.length!==L.length||T[0]!==t.COLOR_ATTACHMENT0){for(let B=0,j=L.length;B<j;B++)T[B]=t.COLOR_ATTACHMENT0+B;T.length=L.length,P=!0}}else if(T[0]!==t.BACK)T[0]=t.BACK,P=!0;if(P)t.drawBuffers(T)}function ut(S){if(g!==S)return t.useProgram(S),g=S,!0;return!1}let xt={[100]:t.FUNC_ADD,[101]:t.FUNC_SUBTRACT,[102]:t.FUNC_REVERSE_SUBTRACT};xt[103]=t.MIN,xt[104]=t.MAX;let N={[200]:t.ZERO,[201]:t.ONE,[202]:t.SRC_COLOR,[204]:t.SRC_ALPHA,[210]:t.SRC_ALPHA_SATURATE,[208]:t.DST_COLOR,[206]:t.DST_ALPHA,[203]:t.ONE_MINUS_SRC_COLOR,[205]:t.ONE_MINUS_SRC_ALPHA,[209]:t.ONE_MINUS_DST_COLOR,[207]:t.ONE_MINUS_DST_ALPHA,[211]:t.CONSTANT_COLOR,[212]:t.ONE_MINUS_CONSTANT_COLOR,[213]:t.CONSTANT_ALPHA,[214]:t.ONE_MINUS_CONSTANT_ALPHA};function Bt(S,x,T,P,L,B,j,pt,At,St){if(S===0){if(y===!0)Kt(t.BLEND),y=!1;return}if(y===!1)gt(t.BLEND),y=!0;if(S!==5){if(S!==f||St!==M){if(m!==100||C!==100)t.blendEquation(t.FUNC_ADD),m=100,C=100;if(St)switch(S){case 1:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.ONE,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case 1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}w=null,_=null,D=null,I=null,R.set(0,0,0),z=0,f=S,M=St}return}if(L=L||x,B=B||T,j=j||P,x!==m||L!==C)t.blendEquationSeparate(xt[x],xt[L]),m=x,C=L;if(T!==w||P!==_||B!==D||j!==I)t.blendFuncSeparate(N[T],N[P],N[B],N[j]),w=T,_=P,D=B,I=j;if(pt.equals(R)===!1||At!==z)t.blendColor(pt.r,pt.g,pt.b,At),R.copy(pt),z=At;f=S,M=!1}function _t(S,x){S.side===2?Kt(t.CULL_FACE):gt(t.CULL_FACE);let T=S.side===1;if(x)T=!T;It(T),S.blending===1&&S.transparent===!1?Bt(0):Bt(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),o.setFunc(S.depthFunc),o.setTest(S.depthTest),o.setMask(S.depthWrite),r.setMask(S.colorWrite);let P=S.stencilWrite;if(a.setTest(P),P)a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass);wt(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?gt(t.SAMPLE_ALPHA_TO_COVERAGE):Kt(t.SAMPLE_ALPHA_TO_COVERAGE)}function It(S){if(v!==S){if(S)t.frontFace(t.CW);else t.frontFace(t.CCW);v=S}}function ht(S){if(S!==0){if(gt(t.CULL_FACE),S!==F)if(S===1)t.cullFace(t.BACK);else if(S===2)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else Kt(t.CULL_FACE);F=S}function Mt(S){if(S!==W){if(V)t.lineWidth(S);W=S}}function wt(S,x,T){if(S){if(gt(t.POLYGON_OFFSET_FILL),J!==x||et!==T)t.polygonOffset(x,T),J=x,et=T}else Kt(t.POLYGON_OFFSET_FILL)}function zt(S){if(S)gt(t.SCISSOR_TEST);else Kt(t.SCISSOR_TEST)}function U(S){if(S===void 0)S=t.TEXTURE0+X-1;if(tt!==S)t.activeTexture(S),tt=S}function E(S,x,T){if(T===void 0)if(tt===null)T=t.TEXTURE0+X-1;else T=tt;let P=lt[T];if(P===void 0)P={type:void 0,texture:void 0},lt[T]=P;if(P.type!==S||P.texture!==x){if(tt!==T)t.activeTexture(T),tt=T;t.bindTexture(S,x||Ft[S]),P.type=S,P.texture=x}}function Y(){let S=lt[tt];if(S!==void 0&&S.type!==void 0)t.bindTexture(S.type,null),S.type=void 0,S.texture=void 0}function at(){try{t.compressedTexImage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function dt(){try{t.compressedTexImage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function rt(){try{t.texSubImage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Wt(){try{t.texSubImage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function yt(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Tt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ie(){try{t.texStorage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ft(){try{t.texStorage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Dt(){try{t.texImage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function de(){try{t.texImage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ne(S){if(ct.equals(S)===!1)t.scissor(S.x,S.y,S.z,S.w),ct.copy(S)}function Ut(S){if(it.equals(S)===!1)t.viewport(S.x,S.y,S.z,S.w),it.copy(S)}function ce(S,x){let T=l.get(x);if(T===void 0)T=new WeakMap,l.set(x,T);let P=T.get(S);if(P===void 0)P=t.getUniformBlockIndex(x,S.name),T.set(S,P)}function A(S,x){let P=l.get(x).get(S);if(c.get(x)!==P)t.uniformBlockBinding(x,P,S.__bindingPointIndex),c.set(x,P)}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},tt=null,lt={},u={},d=new WeakMap,p=[],g=null,y=!1,f=null,m=null,w=null,_=null,C=null,D=null,I=null,R=new Ht(0,0,0),z=0,M=!1,v=null,F=null,W=null,J=null,et=null,ct.set(0,0,t.canvas.width,t.canvas.height),it.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:gt,disable:Kt,bindFramebuffer:re,drawBuffers:jt,useProgram:ut,setBlending:Bt,setMaterial:_t,setFlipSided:It,setCullFace:ht,setLineWidth:Mt,setPolygonOffset:wt,setScissorTest:zt,activeTexture:U,bindTexture:E,unbindTexture:Y,compressedTexImage2D:at,compressedTexImage3D:dt,texImage2D:Dt,texImage3D:de,updateUBOMapping:ce,uniformBlockBinding:A,texStorage2D:ie,texStorage3D:ft,texSubImage2D:rt,texSubImage3D:Wt,compressedTexSubImage2D:yt,compressedTexSubImage3D:Tt,scissor:ne,viewport:Ut,reset:st}}function Ra(t,e,n,i){let s=rp(i);switch(n){case 1021:return t*e;case 1024:return t*e;case 1025:return t*e*2;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function rp(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${t}.`)}function op(t,e,n,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Et,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(U){}function g(U,E){return p?new OffscreenCanvas(U,E):tr("canvas")}function y(U,E,Y){let at=1,dt=zt(U);if(dt.width>Y||dt.height>Y)at=Y/Math.max(dt.width,dt.height);if(at<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let rt=Math.floor(at*dt.width),Wt=Math.floor(at*dt.height);if(u===void 0)u=g(rt,Wt);let yt=E?g(rt,Wt):u;return yt.width=rt,yt.height=Wt,yt.getContext("2d").drawImage(U,0,0,rt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+rt+"x"+Wt+")."),yt}else{if("data"in U)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+").");return U}return U}function f(U){return U.generateMipmaps}function m(U){t.generateMipmap(U)}function w(U){if(U.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(U.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function _(U,E,Y,at,dt=!1){if(U!==null){if(t[U]!==void 0)return t[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let rt=E;if(E===t.RED){if(Y===t.FLOAT)rt=t.R32F;if(Y===t.HALF_FLOAT)rt=t.R16F;if(Y===t.UNSIGNED_BYTE)rt=t.R8}if(E===t.RED_INTEGER){if(Y===t.UNSIGNED_BYTE)rt=t.R8UI;if(Y===t.UNSIGNED_SHORT)rt=t.R16UI;if(Y===t.UNSIGNED_INT)rt=t.R32UI;if(Y===t.BYTE)rt=t.R8I;if(Y===t.SHORT)rt=t.R16I;if(Y===t.INT)rt=t.R32I}if(E===t.RG){if(Y===t.FLOAT)rt=t.RG32F;if(Y===t.HALF_FLOAT)rt=t.RG16F;if(Y===t.UNSIGNED_BYTE)rt=t.RG8}if(E===t.RG_INTEGER){if(Y===t.UNSIGNED_BYTE)rt=t.RG8UI;if(Y===t.UNSIGNED_SHORT)rt=t.RG16UI;if(Y===t.UNSIGNED_INT)rt=t.RG32UI;if(Y===t.BYTE)rt=t.RG8I;if(Y===t.SHORT)rt=t.RG16I;if(Y===t.INT)rt=t.RG32I}if(E===t.RGB_INTEGER){if(Y===t.UNSIGNED_BYTE)rt=t.RGB8UI;if(Y===t.UNSIGNED_SHORT)rt=t.RGB16UI;if(Y===t.UNSIGNED_INT)rt=t.RGB32UI;if(Y===t.BYTE)rt=t.RGB8I;if(Y===t.SHORT)rt=t.RGB16I;if(Y===t.INT)rt=t.RGB32I}if(E===t.RGBA_INTEGER){if(Y===t.UNSIGNED_BYTE)rt=t.RGBA8UI;if(Y===t.UNSIGNED_SHORT)rt=t.RGBA16UI;if(Y===t.UNSIGNED_INT)rt=t.RGBA32UI;if(Y===t.BYTE)rt=t.RGBA8I;if(Y===t.SHORT)rt=t.RGBA16I;if(Y===t.INT)rt=t.RGBA32I}if(E===t.RGB){if(Y===t.UNSIGNED_INT_5_9_9_9_REV)rt=t.RGB9_E5}if(E===t.RGBA){let Wt=dt?"linear":we.getTransfer(at);if(Y===t.FLOAT)rt=t.RGBA32F;if(Y===t.HALF_FLOAT)rt=t.RGBA16F;if(Y===t.UNSIGNED_BYTE)rt=Wt==="srgb"?t.SRGB8_ALPHA8:t.RGBA8;if(Y===t.UNSIGNED_SHORT_4_4_4_4)rt=t.RGBA4;if(Y===t.UNSIGNED_SHORT_5_5_5_1)rt=t.RGB5_A1}if(rt===t.R16F||rt===t.R32F||rt===t.RG16F||rt===t.RG32F||rt===t.RGBA16F||rt===t.RGBA32F)e.get("EXT_color_buffer_float");return rt}function C(U,E){let Y;if(U){if(E===null||E===1014||E===1020)Y=t.DEPTH24_STENCIL8;else if(E===1015)Y=t.DEPTH32F_STENCIL8;else if(E===1012)Y=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(E===null||E===1014||E===1020)Y=t.DEPTH_COMPONENT24;else if(E===1015)Y=t.DEPTH_COMPONENT32F;else if(E===1012)Y=t.DEPTH_COMPONENT16;return Y}function D(U,E){if(f(U)===!0||U.isFramebufferTexture&&U.minFilter!==1003&&U.minFilter!==1006)return Math.log2(Math.max(E.width,E.height))+1;else if(U.mipmaps!==void 0&&U.mipmaps.length>0)return U.mipmaps.length;else if(U.isCompressedTexture&&Array.isArray(U.image))return E.mipmaps.length;else return 1}function I(U){let E=U.target;if(E.removeEventListener("dispose",I),z(E),E.isVideoTexture)h.delete(E)}function R(U){let E=U.target;E.removeEventListener("dispose",R),v(E)}function z(U){let E=i.get(U);if(E.__webglInit===void 0)return;let Y=U.source,at=d.get(Y);if(at){let dt=at[E.__cacheKey];if(dt.usedTimes--,dt.usedTimes===0)M(U);if(Object.keys(at).length===0)d.delete(Y)}i.remove(U)}function M(U){let E=i.get(U);t.deleteTexture(E.__webglTexture);let Y=U.source,at=d.get(Y);delete at[E.__cacheKey],o.memory.textures--}function v(U){let E=i.get(U);if(U.depthTexture)U.depthTexture.dispose(),i.remove(U.depthTexture);if(U.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(E.__webglFramebuffer[at]))for(let dt=0;dt<E.__webglFramebuffer[at].length;dt++)t.deleteFramebuffer(E.__webglFramebuffer[at][dt]);else t.deleteFramebuffer(E.__webglFramebuffer[at]);if(E.__webglDepthbuffer)t.deleteRenderbuffer(E.__webglDepthbuffer[at])}else{if(Array.isArray(E.__webglFramebuffer))for(let at=0;at<E.__webglFramebuffer.length;at++)t.deleteFramebuffer(E.__webglFramebuffer[at]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer)t.deleteRenderbuffer(E.__webglDepthbuffer);if(E.__webglMultisampledFramebuffer)t.deleteFramebuffer(E.__webglMultisampledFramebuffer);if(E.__webglColorRenderbuffer){for(let at=0;at<E.__webglColorRenderbuffer.length;at++)if(E.__webglColorRenderbuffer[at])t.deleteRenderbuffer(E.__webglColorRenderbuffer[at])}if(E.__webglDepthRenderbuffer)t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let Y=U.textures;for(let at=0,dt=Y.length;at<dt;at++){let rt=i.get(Y[at]);if(rt.__webglTexture)t.deleteTexture(rt.__webglTexture),o.memory.textures--;i.remove(Y[at])}i.remove(U)}let F=0;function W(){F=0}function J(){let U=F;if(U>=s.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures);return F+=1,U}function et(U){let E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function X(U,E){let Y=i.get(U);if(U.isVideoTexture)Mt(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){let at=U.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(Y,U,E);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+E)}function V(U,E){let Y=i.get(U);if(U.version>0&&Y.__version!==U.version){it(Y,U,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+E)}function nt(U,E){let Y=i.get(U);if(U.version>0&&Y.__version!==U.version){it(Y,U,E);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+E)}function q(U,E){let Y=i.get(U);if(U.version>0&&Y.__version!==U.version){Gt(Y,U,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+E)}let tt={[1000]:t.REPEAT,[1001]:t.CLAMP_TO_EDGE,[1002]:t.MIRRORED_REPEAT},lt={[1003]:t.NEAREST,[1004]:t.NEAREST_MIPMAP_NEAREST,[1005]:t.NEAREST_MIPMAP_LINEAR,[1006]:t.LINEAR,[1007]:t.LINEAR_MIPMAP_NEAREST,[1008]:t.LINEAR_MIPMAP_LINEAR},Ct={[512]:t.NEVER,[519]:t.ALWAYS,[513]:t.LESS,[515]:t.LEQUAL,[514]:t.EQUAL,[518]:t.GEQUAL,[516]:t.GREATER,[517]:t.NOTEQUAL};function Ot(U,E){if(E.type===1015&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===1006||E.magFilter===1007||E.magFilter===1005||E.magFilter===1008||E.minFilter===1006||E.minFilter===1007||E.minFilter===1005||E.minFilter===1008))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(U,t.TEXTURE_WRAP_S,tt[E.wrapS]),t.texParameteri(U,t.TEXTURE_WRAP_T,tt[E.wrapT]),U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)t.texParameteri(U,t.TEXTURE_WRAP_R,tt[E.wrapR]);if(t.texParameteri(U,t.TEXTURE_MAG_FILTER,lt[E.magFilter]),t.texParameteri(U,t.TEXTURE_MIN_FILTER,lt[E.minFilter]),E.compareFunction)t.texParameteri(U,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(U,t.TEXTURE_COMPARE_FUNC,Ct[E.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===1003)return;if(E.minFilter!==1005&&E.minFilter!==1008)return;if(E.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");t.texParameterf(U,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ct(U,E){let Y=!1;if(U.__webglInit===void 0)U.__webglInit=!0,E.addEventListener("dispose",I);let at=E.source,dt=d.get(at);if(dt===void 0)dt={},d.set(at,dt);let rt=et(E);if(rt!==U.__cacheKey){if(dt[rt]===void 0)dt[rt]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Y=!0;dt[rt].usedTimes++;let Wt=dt[U.__cacheKey];if(Wt!==void 0){if(dt[U.__cacheKey].usedTimes--,Wt.usedTimes===0)M(E)}U.__cacheKey=rt,U.__webglTexture=dt[rt].texture}return Y}function it(U,E,Y){let at=t.TEXTURE_2D;if(E.isDataArrayTexture||E.isCompressedArrayTexture)at=t.TEXTURE_2D_ARRAY;if(E.isData3DTexture)at=t.TEXTURE_3D;let dt=ct(U,E),rt=E.source;n.bindTexture(at,U.__webglTexture,t.TEXTURE0+Y);let Wt=i.get(rt);if(rt.version!==Wt.__version||dt===!0){n.activeTexture(t.TEXTURE0+Y);let yt=we.getPrimaries(we.workingColorSpace),Tt=E.colorSpace===""?null:we.getPrimaries(E.colorSpace),ie=E.colorSpace===""||yt===Tt?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ft=y(E.image,!1,s.maxTextureSize);ft=wt(E,ft);let Dt=r.convert(E.format,E.colorSpace),de=r.convert(E.type),ne=_(E.internalFormat,Dt,de,E.colorSpace,E.isVideoTexture);Ot(at,E);let Ut,ce=E.mipmaps,A=E.isVideoTexture!==!0,st=Wt.__version===void 0||dt===!0,S=rt.dataReady,x=D(E,ft);if(E.isDepthTexture){if(ne=C(E.format===1027,E.type),st)if(A)n.texStorage2D(t.TEXTURE_2D,1,ne,ft.width,ft.height);else n.texImage2D(t.TEXTURE_2D,0,ne,ft.width,ft.height,0,Dt,de,null)}else if(E.isDataTexture)if(ce.length>0){if(A&&st)n.texStorage2D(t.TEXTURE_2D,x,ne,ce[0].width,ce[0].height);for(let T=0,P=ce.length;T<P;T++)if(Ut=ce[T],A){if(S)n.texSubImage2D(t.TEXTURE_2D,T,0,0,Ut.width,Ut.height,Dt,de,Ut.data)}else n.texImage2D(t.TEXTURE_2D,T,ne,Ut.width,Ut.height,0,Dt,de,Ut.data);E.generateMipmaps=!1}else if(A){if(st)n.texStorage2D(t.TEXTURE_2D,x,ne,ft.width,ft.height);if(S)n.texSubImage2D(t.TEXTURE_2D,0,0,0,ft.width,ft.height,Dt,de,ft.data)}else n.texImage2D(t.TEXTURE_2D,0,ne,ft.width,ft.height,0,Dt,de,ft.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){if(A&&st)n.texStorage3D(t.TEXTURE_2D_ARRAY,x,ne,ce[0].width,ce[0].height,ft.depth);for(let T=0,P=ce.length;T<P;T++)if(Ut=ce[T],E.format!==1023)if(Dt!==null)if(A){if(S)if(E.layerUpdates.size>0){let L=Ra(Ut.width,Ut.height,E.format,E.type);for(let B of E.layerUpdates){let j=Ut.data.subarray(B*L/Ut.data.BYTES_PER_ELEMENT,(B+1)*L/Ut.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,T,0,0,B,Ut.width,Ut.height,1,Dt,j)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,T,0,0,0,Ut.width,Ut.height,ft.depth,Dt,Ut.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,T,ne,Ut.width,Ut.height,ft.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(A){if(S)n.texSubImage3D(t.TEXTURE_2D_ARRAY,T,0,0,0,Ut.width,Ut.height,ft.depth,Dt,de,Ut.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,T,ne,Ut.width,Ut.height,ft.depth,0,Dt,de,Ut.data)}else{if(A&&st)n.texStorage2D(t.TEXTURE_2D,x,ne,ce[0].width,ce[0].height);for(let T=0,P=ce.length;T<P;T++)if(Ut=ce[T],E.format!==1023)if(Dt!==null)if(A){if(S)n.compressedTexSubImage2D(t.TEXTURE_2D,T,0,0,Ut.width,Ut.height,Dt,Ut.data)}else n.compressedTexImage2D(t.TEXTURE_2D,T,ne,Ut.width,Ut.height,0,Ut.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(A){if(S)n.texSubImage2D(t.TEXTURE_2D,T,0,0,Ut.width,Ut.height,Dt,de,Ut.data)}else n.texImage2D(t.TEXTURE_2D,T,ne,Ut.width,Ut.height,0,Dt,de,Ut.data)}else if(E.isDataArrayTexture)if(A){if(st)n.texStorage3D(t.TEXTURE_2D_ARRAY,x,ne,ft.width,ft.height,ft.depth);if(S)if(E.layerUpdates.size>0){let T=Ra(ft.width,ft.height,E.format,E.type);for(let P of E.layerUpdates){let L=ft.data.subarray(P*T/ft.data.BYTES_PER_ELEMENT,(P+1)*T/ft.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,P,ft.width,ft.height,1,Dt,de,L)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Dt,de,ft.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ne,ft.width,ft.height,ft.depth,0,Dt,de,ft.data);else if(E.isData3DTexture)if(A){if(st)n.texStorage3D(t.TEXTURE_3D,x,ne,ft.width,ft.height,ft.depth);if(S)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Dt,de,ft.data)}else n.texImage3D(t.TEXTURE_3D,0,ne,ft.width,ft.height,ft.depth,0,Dt,de,ft.data);else if(E.isFramebufferTexture){if(st)if(A)n.texStorage2D(t.TEXTURE_2D,x,ne,ft.width,ft.height);else{let T=ft.width,P=ft.height;for(let L=0;L<x;L++)n.texImage2D(t.TEXTURE_2D,L,ne,T,P,0,Dt,de,null),T>>=1,P>>=1}}else if(ce.length>0){if(A&&st){let T=zt(ce[0]);n.texStorage2D(t.TEXTURE_2D,x,ne,T.width,T.height)}for(let T=0,P=ce.length;T<P;T++)if(Ut=ce[T],A){if(S)n.texSubImage2D(t.TEXTURE_2D,T,0,0,Dt,de,Ut)}else n.texImage2D(t.TEXTURE_2D,T,ne,Dt,de,Ut);E.generateMipmaps=!1}else if(A){if(st){let T=zt(ft);n.texStorage2D(t.TEXTURE_2D,x,ne,T.width,T.height)}if(S)n.texSubImage2D(t.TEXTURE_2D,0,0,0,Dt,de,ft)}else n.texImage2D(t.TEXTURE_2D,0,ne,Dt,de,ft);if(f(E))m(at);if(Wt.__version=rt.version,E.onUpdate)E.onUpdate(E)}U.__version=E.version}function Gt(U,E,Y){if(E.image.length!==6)return;let at=ct(U,E),dt=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+Y);let rt=i.get(dt);if(dt.version!==rt.__version||at===!0){n.activeTexture(t.TEXTURE0+Y);let Wt=we.getPrimaries(we.workingColorSpace),yt=E.colorSpace===""?null:we.getPrimaries(E.colorSpace),Tt=E.colorSpace===""||Wt===yt?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let ie=E.isCompressedTexture||E.image[0].isCompressedTexture,ft=E.image[0]&&E.image[0].isDataTexture,Dt=[];for(let P=0;P<6;P++){if(!ie&&!ft)Dt[P]=y(E.image[P],!0,s.maxCubemapSize);else Dt[P]=ft?E.image[P].image:E.image[P];Dt[P]=wt(E,Dt[P])}let de=Dt[0],ne=r.convert(E.format,E.colorSpace),Ut=r.convert(E.type),ce=_(E.internalFormat,ne,Ut,E.colorSpace),A=E.isVideoTexture!==!0,st=rt.__version===void 0||at===!0,S=dt.dataReady,x=D(E,de);Ot(t.TEXTURE_CUBE_MAP,E);let T;if(ie){if(A&&st)n.texStorage2D(t.TEXTURE_CUBE_MAP,x,ce,de.width,de.height);for(let P=0;P<6;P++){T=Dt[P].mipmaps;for(let L=0;L<T.length;L++){let B=T[L];if(E.format!==1023)if(ne!==null)if(A){if(S)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,L,0,0,B.width,B.height,ne,B.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,L,ce,B.width,B.height,0,B.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(A){if(S)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,L,0,0,B.width,B.height,ne,Ut,B.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,L,ce,B.width,B.height,0,ne,Ut,B.data)}}}else{if(T=E.mipmaps,A&&st){if(T.length>0)x++;let P=zt(Dt[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,x,ce,P.width,P.height)}for(let P=0;P<6;P++)if(ft){if(A){if(S)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Dt[P].width,Dt[P].height,ne,Ut,Dt[P].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,ce,Dt[P].width,Dt[P].height,0,ne,Ut,Dt[P].data);for(let L=0;L<T.length;L++){let j=T[L].image[P].image;if(A){if(S)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,L+1,0,0,j.width,j.height,ne,Ut,j.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,L+1,ce,j.width,j.height,0,ne,Ut,j.data)}}else{if(A){if(S)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,ne,Ut,Dt[P])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,ce,ne,Ut,Dt[P]);for(let L=0;L<T.length;L++){let B=T[L];if(A){if(S)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,L+1,0,0,ne,Ut,B.image[P])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,L+1,ce,ne,Ut,B.image[P])}}}if(f(E))m(t.TEXTURE_CUBE_MAP);if(rt.__version=dt.version,E.onUpdate)E.onUpdate(E)}U.__version=E.version}function Ft(U,E,Y,at,dt,rt){let Wt=r.convert(Y.format,Y.colorSpace),yt=r.convert(Y.type),Tt=_(Y.internalFormat,Wt,yt,Y.colorSpace),ie=i.get(E),ft=i.get(Y);if(ft.__renderTarget=E,!ie.__hasExternalTextures){let Dt=Math.max(1,E.width>>rt),de=Math.max(1,E.height>>rt);if(dt===t.TEXTURE_3D||dt===t.TEXTURE_2D_ARRAY)n.texImage3D(dt,rt,Tt,Dt,de,E.depth,0,Wt,yt,null);else n.texImage2D(dt,rt,Tt,Dt,de,0,Wt,yt,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,U),ht(E))a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,at,dt,ft.__webglTexture,0,It(E));else if(dt===t.TEXTURE_2D||dt>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,at,dt,ft.__webglTexture,rt);n.bindFramebuffer(t.FRAMEBUFFER,null)}function gt(U,E,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,U),E.depthBuffer){let at=E.depthTexture,dt=at&&at.isDepthTexture?at.type:null,rt=C(E.stencilBuffer,dt),Wt=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,yt=It(E);if(ht(E))a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt,rt,E.width,E.height);else if(Y)t.renderbufferStorageMultisample(t.RENDERBUFFER,yt,rt,E.width,E.height);else t.renderbufferStorage(t.RENDERBUFFER,rt,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,Wt,t.RENDERBUFFER,U)}else{let at=E.textures;for(let dt=0;dt<at.length;dt++){let rt=at[dt],Wt=r.convert(rt.format,rt.colorSpace),yt=r.convert(rt.type),Tt=_(rt.internalFormat,Wt,yt,rt.colorSpace),ie=It(E);if(Y&&ht(E)===!1)t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,Tt,E.width,E.height);else if(ht(E))a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,Tt,E.width,E.height);else t.renderbufferStorage(t.RENDERBUFFER,Tt,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Kt(U,E){if(E&&E.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let at=i.get(E.depthTexture);if(at.__renderTarget=E,!at.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0;X(E.depthTexture,0);let dt=at.__webglTexture,rt=It(E);if(E.depthTexture.format===1026)if(ht(E))a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,dt,0,rt);else t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,dt,0);else if(E.depthTexture.format===1027)if(ht(E))a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,dt,0,rt);else t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,dt,0);else throw Error("Unknown depthTexture format")}function re(U){let E=i.get(U),Y=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){let at=U.depthTexture;if(E.__depthDisposeCallback)E.__depthDisposeCallback();if(at){let dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,at.removeEventListener("dispose",dt)};at.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=at}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw Error("target.depthTexture not supported in Cube render targets");Kt(E.__webglFramebuffer,U)}else if(Y){E.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[at]),E.__webglDepthbuffer[at]===void 0)E.__webglDepthbuffer[at]=t.createRenderbuffer(),gt(E.__webglDepthbuffer[at],U,!1);else{let dt=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,rt=E.__webglDepthbuffer[at];t.bindRenderbuffer(t.RENDERBUFFER,rt),t.framebufferRenderbuffer(t.FRAMEBUFFER,dt,t.RENDERBUFFER,rt)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),gt(E.__webglDepthbuffer,U,!1);else{let at=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,dt),t.framebufferRenderbuffer(t.FRAMEBUFFER,at,t.RENDERBUFFER,dt)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function jt(U,E,Y){let at=i.get(U);if(E!==void 0)Ft(at.__webglFramebuffer,U,U.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(Y!==void 0)re(U)}function ut(U){let E=U.texture,Y=i.get(U),at=i.get(E);U.addEventListener("dispose",R);let dt=U.textures,rt=U.isWebGLCubeRenderTarget===!0,Wt=dt.length>1;if(!Wt){if(at.__webglTexture===void 0)at.__webglTexture=t.createTexture();at.__version=E.version,o.memory.textures++}if(rt){Y.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[yt]=[];for(let Tt=0;Tt<E.mipmaps.length;Tt++)Y.__webglFramebuffer[yt][Tt]=t.createFramebuffer()}else Y.__webglFramebuffer[yt]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let yt=0;yt<E.mipmaps.length;yt++)Y.__webglFramebuffer[yt]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(Wt)for(let yt=0,Tt=dt.length;yt<Tt;yt++){let ie=i.get(dt[yt]);if(ie.__webglTexture===void 0)ie.__webglTexture=t.createTexture(),o.memory.textures++}if(U.samples>0&&ht(U)===!1){Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let yt=0;yt<dt.length;yt++){let Tt=dt[yt];Y.__webglColorRenderbuffer[yt]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[yt]);let ie=r.convert(Tt.format,Tt.colorSpace),ft=r.convert(Tt.type),Dt=_(Tt.internalFormat,ie,ft,Tt.colorSpace,U.isXRRenderTarget===!0),de=It(U);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,Dt,U.width,U.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+yt,t.RENDERBUFFER,Y.__webglColorRenderbuffer[yt])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),U.depthBuffer)Y.__webglDepthRenderbuffer=t.createRenderbuffer(),gt(Y.__webglDepthRenderbuffer,U,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(rt){n.bindTexture(t.TEXTURE_CUBE_MAP,at.__webglTexture),Ot(t.TEXTURE_CUBE_MAP,E);for(let yt=0;yt<6;yt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Tt=0;Tt<E.mipmaps.length;Tt++)Ft(Y.__webglFramebuffer[yt][Tt],U,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Tt);else Ft(Y.__webglFramebuffer[yt],U,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);if(f(E))m(t.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(Wt){for(let yt=0,Tt=dt.length;yt<Tt;yt++){let ie=dt[yt],ft=i.get(ie);if(n.bindTexture(t.TEXTURE_2D,ft.__webglTexture),Ot(t.TEXTURE_2D,ie),Ft(Y.__webglFramebuffer,U,ie,t.COLOR_ATTACHMENT0+yt,t.TEXTURE_2D,0),f(ie))m(t.TEXTURE_2D)}n.unbindTexture()}else{let yt=t.TEXTURE_2D;if(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)yt=U.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(yt,at.__webglTexture),Ot(yt,E),E.mipmaps&&E.mipmaps.length>0)for(let Tt=0;Tt<E.mipmaps.length;Tt++)Ft(Y.__webglFramebuffer[Tt],U,E,t.COLOR_ATTACHMENT0,yt,Tt);else Ft(Y.__webglFramebuffer,U,E,t.COLOR_ATTACHMENT0,yt,0);if(f(E))m(yt);n.unbindTexture()}if(U.depthBuffer)re(U)}function xt(U){let E=U.textures;for(let Y=0,at=E.length;Y<at;Y++){let dt=E[Y];if(f(dt)){let rt=w(U),Wt=i.get(dt).__webglTexture;n.bindTexture(rt,Wt),m(rt),n.unbindTexture()}}}let N=[],Bt=[];function _t(U){if(U.samples>0){if(ht(U)===!1){let{textures:E,width:Y,height:at}=U,dt=t.COLOR_BUFFER_BIT,rt=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Wt=i.get(U),yt=E.length>1;if(yt)for(let Tt=0;Tt<E.length;Tt++)n.bindFramebuffer(t.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Tt,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Wt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Tt,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let Tt=0;Tt<E.length;Tt++){if(U.resolveDepthBuffer){if(U.depthBuffer)dt|=t.DEPTH_BUFFER_BIT;if(U.stencilBuffer&&U.resolveStencilBuffer)dt|=t.STENCIL_BUFFER_BIT}if(yt){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Wt.__webglColorRenderbuffer[Tt]);let ie=i.get(E[Tt]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}if(t.blitFramebuffer(0,0,Y,at,0,0,Y,at,dt,t.NEAREST),c===!0){if(N.length=0,Bt.length=0,N.push(t.COLOR_ATTACHMENT0+Tt),U.depthBuffer&&U.resolveDepthBuffer===!1)N.push(rt),Bt.push(rt),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Bt);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,N)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),yt)for(let Tt=0;Tt<E.length;Tt++){n.bindFramebuffer(t.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Tt,t.RENDERBUFFER,Wt.__webglColorRenderbuffer[Tt]);let ie=i.get(E[Tt]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Wt.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Tt,t.TEXTURE_2D,ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){let E=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function It(U){return Math.min(s.maxSamples,U.samples)}function ht(U){let E=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Mt(U){let E=o.render.frame;if(h.get(U)!==E)h.set(U,E),U.update()}function wt(U,E){let{colorSpace:Y,format:at,type:dt}=U;if(U.isCompressedTexture===!0||U.isVideoTexture===!0)return E;if(Y!=="srgb-linear"&&Y!=="")if(we.getTransfer(Y)==="srgb"){if(at!==1023||dt!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",Y);return E}function zt(U){if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement)l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height;else if(typeof VideoFrame<"u"&&U instanceof VideoFrame)l.width=U.displayWidth,l.height=U.displayHeight;else l.width=U.width,l.height=U.height;return l}this.allocateTextureUnit=J,this.resetTextureUnits=W,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=nt,this.setTextureCube=q,this.rebindTextures=jt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=ht}function ap(t,e){function n(i,s=""){let r,o=we.getTransfer(s);if(i===1009)return t.UNSIGNED_BYTE;if(i===1017)return t.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return t.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===1010)return t.BYTE;if(i===1011)return t.SHORT;if(i===1012)return t.UNSIGNED_SHORT;if(i===1013)return t.INT;if(i===1014)return t.UNSIGNED_INT;if(i===1015)return t.FLOAT;if(i===1016)return t.HALF_FLOAT;if(i===1021)return t.ALPHA;if(i===1022)return t.RGB;if(i===1023)return t.RGBA;if(i===1024)return t.LUMINANCE;if(i===1025)return t.LUMINANCE_ALPHA;if(i===1026)return t.DEPTH_COMPONENT;if(i===1027)return t.DEPTH_STENCIL;if(i===1028)return t.RED;if(i===1029)return t.RED_INTEGER;if(i===1030)return t.RG;if(i===1031)return t.RG_INTEGER;if(i===1033)return t.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(o==="srgb")if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===36196||i===37492)return o==="srgb"?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===37496)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===37808)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return o==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===36492)return o==="srgb"?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===1020)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}class oc extends yn{constructor(t=[]){super();this.isArrayCamera=!0,this.cameras=t}}class Lt extends je{constructor(){super();this.isGroup=!0,this.type="Group"}}var cp={type:"move"};class js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,o=this._targetRay,a=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let g of t.hand.values()){let y=e.getJointPose(g,n),f=this._getHandJoint(c,g);if(y!==null)f.matrix.fromArray(y.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=y.radius;f.visible=y!==null}let l=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=l.position.distanceTo(h.position),d=0.02,p=0.005;if(c.inputState.pinching&&u>d+p)c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!c.inputState.pinching&&u<=d-p)c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(a!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity);else a.hasLinearVelocity=!1;if(s.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity);else a.hasAngularVelocity=!1}}if(o!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity);else o.hasLinearVelocity=!1;if(i.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(cp)}}}if(o!==null)o.visible=i!==null;if(a!==null)a.visible=s!==null;if(c!==null)c.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var lp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hp=`
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

}`;class ac{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new on,s=t.properties.get(i);if(s.__webglTexture=e.texture,e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new kn({vertexShader:lp,fragmentShader:hp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new Sn(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cc extends Mi{constructor(t,e){super();let n=this,i=null,s=1,r=null,o="local-floor",a=1,c=null,l=null,h=null,u=null,d=null,p=null,g=new ac,y=e.getContextAttributes(),f=null,m=null,w=[],_=[],C=new Et,D=null,I=new yn;I.viewport=new Ge;let R=new yn;R.viewport=new Ge;let z=[I,R],M=new oc,v=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let it=w[ct];if(it===void 0)it=new js,w[ct]=it;return it.getTargetRaySpace()},this.getControllerGrip=function(ct){let it=w[ct];if(it===void 0)it=new js,w[ct]=it;return it.getGripSpace()},this.getHand=function(ct){let it=w[ct];if(it===void 0)it=new js,w[ct]=it;return it.getHandSpace()};function W(ct){let it=_.indexOf(ct.inputSource);if(it===-1)return;let Gt=w[it];if(Gt!==void 0)Gt.update(ct.inputSource,ct.frame,c||r),Gt.dispatchEvent({type:ct.type,data:ct.inputSource})}function J(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",et);for(let ct=0;ct<w.length;ct++){let it=_[ct];if(it===null)continue;_[ct]=null,w[ct].disconnect(it)}v=null,F=null,g.reset(),t.setRenderTarget(f),d=null,u=null,h=null,i=null,m=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){if(s=ct,n.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){if(o=ct,n.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(ct){c=ct},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(ct){if(i=ct,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",J),i.addEventListener("inputsourceschange",et),y.xrCompatible!==!0)await e.makeXRCompatible();if(D=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){let it={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new oi(d.framebufferWidth,d.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let it=null,Gt=null,Ft=null;if(y.depth)Ft=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=y.stencil?1027:1026,Gt=y.stencil?1020:1014;let gt={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:s};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(gt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),m=new oi(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new mo(u.textureWidth,u.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(a),c=null,r=await i.requestReferenceSpace(o),Ot.setContext(i),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function et(ct){for(let it=0;it<ct.removed.length;it++){let Gt=ct.removed[it],Ft=_.indexOf(Gt);if(Ft>=0)_[Ft]=null,w[Ft].disconnect(Gt)}for(let it=0;it<ct.added.length;it++){let Gt=ct.added[it],Ft=_.indexOf(Gt);if(Ft===-1){for(let Kt=0;Kt<w.length;Kt++)if(Kt>=_.length){_.push(Gt),Ft=Kt;break}else if(_[Kt]===null){_[Kt]=Gt,Ft=Kt;break}if(Ft===-1)break}let gt=w[Ft];if(gt)gt.connect(Gt)}}let X=new O,V=new O;function nt(ct,it,Gt){X.setFromMatrixPosition(it.matrixWorld),V.setFromMatrixPosition(Gt.matrixWorld);let Ft=X.distanceTo(V),gt=it.projectionMatrix.elements,Kt=Gt.projectionMatrix.elements,re=gt[14]/(gt[10]-1),jt=gt[14]/(gt[10]+1),ut=(gt[9]+1)/gt[5],xt=(gt[9]-1)/gt[5],N=(gt[8]-1)/gt[0],Bt=(Kt[8]+1)/Kt[0],_t=re*N,It=re*Bt,ht=Ft/(-N+Bt),Mt=ht*-N;if(it.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(Mt),ct.translateZ(ht),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),gt[10]===-1)ct.projectionMatrix.copy(it.projectionMatrix),ct.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let wt=re+ht,zt=jt+ht,U=_t-Mt,E=It+(Ft-Mt),Y=ut*jt/zt*wt,at=xt*jt/zt*wt;ct.projectionMatrix.makePerspective(U,E,Y,at,wt,zt),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function q(ct,it){if(it===null)ct.matrixWorld.copy(ct.matrix);else ct.matrixWorld.multiplyMatrices(it.matrixWorld,ct.matrix);ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(i===null)return;let{near:it,far:Gt}=ct;if(g.texture!==null){if(g.depthNear>0)it=g.depthNear;if(g.depthFar>0)Gt=g.depthFar}if(M.near=R.near=I.near=it,M.far=R.far=I.far=Gt,v!==M.near||F!==M.far)i.updateRenderState({depthNear:M.near,depthFar:M.far}),v=M.near,F=M.far;I.layers.mask=ct.layers.mask|2,R.layers.mask=ct.layers.mask|4,M.layers.mask=I.layers.mask|R.layers.mask;let Ft=ct.parent,gt=M.cameras;q(M,Ft);for(let Kt=0;Kt<gt.length;Kt++)q(gt[Kt],Ft);if(gt.length===2)nt(M,I,R);else M.projectionMatrix.copy(I.projectionMatrix);tt(ct,M,Ft)};function tt(ct,it,Gt){if(Gt===null)ct.matrix.copy(it.matrixWorld);else ct.matrix.copy(Gt.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(it.matrixWorld);if(ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(it.projectionMatrix),ct.projectionMatrixInverse.copy(it.projectionMatrixInverse),ct.isPerspectiveCamera)ct.fov=Kr*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1}this.getCamera=function(){return M},this.getFoveation=function(){if(u===null&&d===null)return;return a},this.setFoveation=function(ct){if(a=ct,u!==null)u.fixedFoveation=ct;if(d!==null&&d.fixedFoveation!==void 0)d.fixedFoveation=ct},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let lt=null;function Ct(ct,it){if(l=it.getViewerPose(c||r),p=it,l!==null){let Gt=l.views;if(d!==null)t.setRenderTargetFramebuffer(m,d.framebuffer),t.setRenderTarget(m);let Ft=!1;if(Gt.length!==M.cameras.length)M.cameras.length=0,Ft=!0;for(let Kt=0;Kt<Gt.length;Kt++){let re=Gt[Kt],jt=null;if(d!==null)jt=d.getViewport(re);else{let xt=h.getViewSubImage(u,re);if(jt=xt.viewport,Kt===0)t.setRenderTargetTextures(m,xt.colorTexture,u.ignoreDepthValues?void 0:xt.depthStencilTexture),t.setRenderTarget(m)}let ut=z[Kt];if(ut===void 0)ut=new yn,ut.layers.enable(Kt),ut.viewport=new Ge,z[Kt]=ut;if(ut.matrix.fromArray(re.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(re.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(jt.x,jt.y,jt.width,jt.height),Kt===0)M.matrix.copy(ut.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale);if(Ft===!0)M.cameras.push(ut)}let gt=i.enabledFeatures;if(gt&&gt.includes("depth-sensing")){let Kt=h.getDepthInformation(Gt[0]);if(Kt&&Kt.isValid&&Kt.texture)g.init(t,Kt,i.renderState)}}for(let Gt=0;Gt<w.length;Gt++){let Ft=_[Gt],gt=w[Gt];if(Ft!==null&&gt!==void 0)gt.update(Ft,it,c||r)}if(lt)lt(ct,it);if(it.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:it});p=null}let Ot=new Za;Ot.setAnimationLoop(Ct),this.setAnimationLoop=function(ct){lt=ct},this.dispose=function(){}}}var xi=new Pn,up=new oe;function dp(t,e){function n(f,m){if(f.matrixAutoUpdate===!0)f.updateMatrix();m.value.copy(f.matrix)}function i(f,m){if(m.color.getRGB(f.fogColor.value,Xa(t)),m.isFog)f.fogNear.value=m.near,f.fogFar.value=m.far;else if(m.isFogExp2)f.fogDensity.value=m.density}function s(f,m,w,_,C){if(m.isMeshBasicMaterial)r(f,m);else if(m.isMeshLambertMaterial)r(f,m);else if(m.isMeshToonMaterial)r(f,m),u(f,m);else if(m.isMeshPhongMaterial)r(f,m),h(f,m);else if(m.isMeshStandardMaterial){if(r(f,m),d(f,m),m.isMeshPhysicalMaterial)p(f,m,C)}else if(m.isMeshMatcapMaterial)r(f,m),g(f,m);else if(m.isMeshDepthMaterial)r(f,m);else if(m.isMeshDistanceMaterial)r(f,m),y(f,m);else if(m.isMeshNormalMaterial)r(f,m);else if(m.isLineBasicMaterial){if(o(f,m),m.isLineDashedMaterial)a(f,m)}else if(m.isPointsMaterial)c(f,m,w,_);else if(m.isSpriteMaterial)l(f,m);else if(m.isShadowMaterial)f.color.value.copy(m.color),f.opacity.value=m.opacity;else if(m.isShaderMaterial)m.uniformsNeedUpdate=!1}function r(f,m){if(f.opacity.value=m.opacity,m.color)f.diffuse.value.copy(m.color);if(m.emissive)f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity);if(m.map)f.map.value=m.map,n(m.map,f.mapTransform);if(m.alphaMap)f.alphaMap.value=m.alphaMap,n(m.alphaMap,f.alphaMapTransform);if(m.bumpMap){if(f.bumpMap.value=m.bumpMap,n(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===1)f.bumpScale.value*=-1}if(m.normalMap){if(f.normalMap.value=m.normalMap,n(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===1)f.normalScale.value.negate()}if(m.displacementMap)f.displacementMap.value=m.displacementMap,n(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias;if(m.emissiveMap)f.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,f.emissiveMapTransform);if(m.specularMap)f.specularMap.value=m.specularMap,n(m.specularMap,f.specularMapTransform);if(m.alphaTest>0)f.alphaTest.value=m.alphaTest;let w=e.get(m),{envMap:_,envMapRotation:C}=w;if(_){if(f.envMap.value=_,xi.copy(C),xi.x*=-1,xi.y*=-1,xi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1)xi.y*=-1,xi.z*=-1;f.envMapRotation.value.setFromMatrix4(up.makeRotationFromEuler(xi)),f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio}if(m.lightMap)f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,f.lightMapTransform);if(m.aoMap)f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,f.aoMapTransform)}function o(f,m){if(f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map)f.map.value=m.map,n(m.map,f.mapTransform)}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function c(f,m,w,_){if(f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*w,f.scale.value=_*0.5,m.map)f.map.value=m.map,n(m.map,f.uvTransform);if(m.alphaMap)f.alphaMap.value=m.alphaMap,n(m.alphaMap,f.alphaMapTransform);if(m.alphaTest>0)f.alphaTest.value=m.alphaTest}function l(f,m){if(f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map)f.map.value=m.map,n(m.map,f.mapTransform);if(m.alphaMap)f.alphaMap.value=m.alphaMap,n(m.alphaMap,f.alphaMapTransform);if(m.alphaTest>0)f.alphaTest.value=m.alphaTest}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,0.0001)}function u(f,m){if(m.gradientMap)f.gradientMap.value=m.gradientMap}function d(f,m){if(f.metalness.value=m.metalness,m.metalnessMap)f.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,f.metalnessMapTransform);if(f.roughness.value=m.roughness,m.roughnessMap)f.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,f.roughnessMapTransform);if(m.envMap)f.envMapIntensity.value=m.envMapIntensity}function p(f,m,w){if(f.ior.value=m.ior,m.sheen>0){if(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap)f.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,f.sheenColorMapTransform);if(m.sheenRoughnessMap)f.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,f.sheenRoughnessMapTransform)}if(m.clearcoat>0){if(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap)f.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,f.clearcoatMapTransform);if(m.clearcoatRoughnessMap)f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform);if(m.clearcoatNormalMap){if(f.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===1)f.clearcoatNormalScale.value.negate()}}if(m.dispersion>0)f.dispersion.value=m.dispersion;if(m.iridescence>0){if(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap)f.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,f.iridescenceMapTransform);if(m.iridescenceThicknessMap)f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform)}if(m.transmission>0){if(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap)f.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,f.transmissionMapTransform);if(f.thickness.value=m.thickness,m.thicknessMap)f.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,f.thicknessMapTransform);f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)}if(m.anisotropy>0){if(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap)f.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,f.anisotropyMapTransform)}if(f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap)f.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,f.specularColorMapTransform);if(m.specularIntensityMap)f.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,f.specularIntensityMapTransform)}function g(f,m){if(m.matcap)f.matcap.value=m.matcap}function y(f,m){let w=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function fp(t,e,n,i){let s={},r={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,_){let C=_.program;i.uniformBlockBinding(w,C)}function l(w,_){let C=s[w.id];if(C===void 0)g(w),C=h(w),s[w.id]=C,w.addEventListener("dispose",f);let D=_.program;i.updateUBOMapping(w,D);let I=e.render.frame;if(r[w.id]!==I)d(w),r[w.id]=I}function h(w){let _=u();w.__bindingPointIndex=_;let C=t.createBuffer(),{__size:D,usage:I}=w;return t.bindBuffer(t.UNIFORM_BUFFER,C),t.bufferData(t.UNIFORM_BUFFER,D,I),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,C),C}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let _=s[w.id],{uniforms:C,__cache:D}=w;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let I=0,R=C.length;I<R;I++){let z=Array.isArray(C[I])?C[I]:[C[I]];for(let M=0,v=z.length;M<v;M++){let F=z[M];if(p(F,I,M,D)===!0){let W=F.__offset,J=Array.isArray(F.value)?F.value:[F.value],et=0;for(let X=0;X<J.length;X++){let V=J[X],nt=y(V);if(typeof V==="number"||typeof V==="boolean")F.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,W+et,F.__data);else if(V.isMatrix3)F.__data[0]=V.elements[0],F.__data[1]=V.elements[1],F.__data[2]=V.elements[2],F.__data[3]=0,F.__data[4]=V.elements[3],F.__data[5]=V.elements[4],F.__data[6]=V.elements[5],F.__data[7]=0,F.__data[8]=V.elements[6],F.__data[9]=V.elements[7],F.__data[10]=V.elements[8],F.__data[11]=0;else V.toArray(F.__data,et),et+=nt.storage/Float32Array.BYTES_PER_ELEMENT}t.bufferSubData(t.UNIFORM_BUFFER,W,F.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(w,_,C,D){let I=w.value,R=_+"_"+C;if(D[R]===void 0){if(typeof I==="number"||typeof I==="boolean")D[R]=I;else D[R]=I.clone();return!0}else{let z=D[R];if(typeof I==="number"||typeof I==="boolean"){if(z!==I)return D[R]=I,!0}else if(z.equals(I)===!1)return z.copy(I),!0}return!1}function g(w){let _=w.uniforms,C=0,D=16;for(let R=0,z=_.length;R<z;R++){let M=Array.isArray(_[R])?_[R]:[_[R]];for(let v=0,F=M.length;v<F;v++){let W=M[v],J=Array.isArray(W.value)?W.value:[W.value];for(let et=0,X=J.length;et<X;et++){let V=J[et],nt=y(V),q=C%D,tt=q%nt.boundary,lt=q+tt;if(C+=tt,lt!==0&&D-lt<nt.storage)C+=D-lt;W.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=C,C+=nt.storage}}}let I=C%D;if(I>0)C+=D-I;return w.__size=C,w.__cache={},this}function y(w){let _={boundary:0,storage:0};if(typeof w==="number"||typeof w==="boolean")_.boundary=4,_.storage=4;else if(w.isVector2)_.boundary=8,_.storage=8;else if(w.isVector3||w.isColor)_.boundary=16,_.storage=12;else if(w.isVector4)_.boundary=16,_.storage=16;else if(w.isMatrix3)_.boundary=48,_.storage=48;else if(w.isMatrix4)_.boundary=64,_.storage=64;else if(w.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w);return _}function f(w){let _=w.target;_.removeEventListener("dispose",f);let C=o.indexOf(_.__bindingPointIndex);o.splice(C,1),t.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let w in s)t.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class lc{constructor(t={}){let{canvas:e=gl(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;let p=new Uint32Array(4),g=new Int32Array(4),y=null,f=null,m=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this.toneMapping=0,this.toneMappingExposure=1;let _=this,C=!1,D=0,I=0,R=null,z=-1,M=null,v=new Ge,F=new Ge,W=null,J=new Ht(0),et=0,{width:X,height:V}=e,nt=1,q=null,tt=null,lt=new Ge(0,0,X,V),Ct=new Ge(0,0,X,V),Ot=!1,ct=new sr,it=!1,Gt=!1,Ft=new oe,gt=new oe,Kt=new O,re=new Ge,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function xt(){return R===null?nt:1}let N=n;function Bt(b,k){return e.getContext(b,k)}try{let b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in e)e.setAttribute("data-engine","three.js r170");if(e.addEventListener("webglcontextlost",T,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",L,!1),N===null){if(N=Bt("webgl2",b),N===null)if(Bt("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let _t,It,ht,Mt,wt,zt,U,E,Y,at,dt,rt,Wt,yt,Tt,ie,ft,Dt,de,ne,Ut,ce,A,st;function S(){if(_t=new Rd(N),_t.init(),ce=new ap(N,_t),It=new Sd(N,_t,t,ce),ht=new sp(N,_t),It.reverseDepthBuffer&&u)ht.buffers.depth.setReversed(!0);Mt=new Pd(N),wt=new Xf,zt=new op(N,_t,ht,wt,It,ce,Mt),U=new bd(_),E=new Ad(_),Y=new Ol(N),A=new vd(N,Y),at=new Cd(N,Y,Mt,A),dt=new Dd(N,at,Y,Mt),de=new Ld(N,It,zt),ie=new wd(wt),rt=new Vf(_,U,E,_t,It,A,ie),Wt=new dp(_,wt),yt=new Yf,Tt=new jf(_t),Dt=new yd(_,U,E,ht,dt,d,a),ft=new np(_,dt,It),st=new fp(N,Mt,It,ht),ne=new Md(N,_t,Mt),Ut=new Id(N,_t,Mt),Mt.programs=rt.programs,_.capabilities=It,_.extensions=_t,_.properties=wt,_.renderLists=yt,_.shadowMap=ft,_.state=ht,_.info=Mt}S();let x=new cc(_,N);this.xr=x,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=_t.get("WEBGL_lose_context");if(b)b.loseContext()},this.forceContextRestore=function(){let b=_t.get("WEBGL_lose_context");if(b)b.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(b){if(b===void 0)return;nt=b,this.setSize(X,V,!1)},this.getSize=function(b){return b.set(X,V)},this.setSize=function(b,k,K=!0){if(x.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(X=b,V=k,e.width=Math.floor(b*nt),e.height=Math.floor(k*nt),K===!0)e.style.width=b+"px",e.style.height=k+"px";this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(X*nt,V*nt).floor()},this.setDrawingBufferSize=function(b,k,K){X=b,V=k,nt=K,e.width=Math.floor(b*K),e.height=Math.floor(k*K),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(lt)},this.setViewport=function(b,k,K,Q){if(b.isVector4)lt.set(b.x,b.y,b.z,b.w);else lt.set(b,k,K,Q);ht.viewport(v.copy(lt).multiplyScalar(nt).round())},this.getScissor=function(b){return b.copy(Ct)},this.setScissor=function(b,k,K,Q){if(b.isVector4)Ct.set(b.x,b.y,b.z,b.w);else Ct.set(b,k,K,Q);ht.scissor(F.copy(Ct).multiplyScalar(nt).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(b){ht.setScissorTest(Ot=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){tt=b},this.getClearColor=function(b){return b.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(b=!0,k=!0,K=!0){let Q=0;if(b){let H=!1;if(R!==null){let vt=R.texture.format;H=vt===1033||vt===1031||vt===1029}if(H){let vt=R.texture.type,Nt=vt===1009||vt===1014||vt===1012||vt===1020||vt===1017||vt===1018,Yt=Dt.getClearColor(),Zt=Dt.getClearAlpha(),{r:le,g:ge,b:Jt}=Yt;if(Nt)p[0]=le,p[1]=ge,p[2]=Jt,p[3]=Zt,N.clearBufferuiv(N.COLOR,0,p);else g[0]=le,g[1]=ge,g[2]=Jt,g[3]=Zt,N.clearBufferiv(N.COLOR,0,g)}else Q|=N.COLOR_BUFFER_BIT}if(k)Q|=N.DEPTH_BUFFER_BIT;if(K)Q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);N.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",T,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",L,!1),yt.dispose(),Tt.dispose(),wt.dispose(),U.dispose(),E.dispose(),dt.dispose(),A.dispose(),st.dispose(),rt.dispose(),x.dispose(),x.removeEventListener("sessionstart",pe),x.removeEventListener("sessionend",Pt),Vt.stop()};function T(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let b=Mt.autoReset,k=ft.enabled,K=ft.autoUpdate,Q=ft.needsUpdate,H=ft.type;S(),Mt.autoReset=b,ft.enabled=k,ft.autoUpdate=K,ft.needsUpdate=Q,ft.type=H}function L(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function B(b){let k=b.target;k.removeEventListener("dispose",B),j(k)}function j(b){pt(b),wt.remove(b)}function pt(b){let k=wt.get(b).programs;if(k!==void 0){if(k.forEach(function(K){rt.releaseProgram(K)}),b.isShaderMaterial)rt.releaseShaderCache(b)}}this.renderBufferDirect=function(b,k,K,Q,H,vt){if(k===null)k=jt;let Nt=H.isMesh&&H.matrixWorld.determinant()<0,Yt=En(b,k,K,Q,H);ht.setMaterial(Q,Nt);let Zt=K.index,le=1;if(Q.wireframe===!0){if(Zt=at.getWireframeAttribute(K),Zt===void 0)return;le=2}let ge=K.drawRange,Jt=K.attributes.position,be=ge.start*le,Pe=(ge.start+ge.count)*le;if(vt!==null)be=Math.max(be,vt.start*le),Pe=Math.min(Pe,(vt.start+vt.count)*le);if(Zt!==null)be=Math.max(be,0),Pe=Math.min(Pe,Zt.count);else if(Jt!==void 0&&Jt!==null)be=Math.max(be,0),Pe=Math.min(Pe,Jt.count);let De=Pe-be;if(De<0||De===1/0)return;A.setup(H,Q,Yt,K,Zt);let fn,Ae=ne;if(Zt!==null)fn=Y.get(Zt),Ae=Ut,Ae.setIndex(fn);if(H.isMesh)if(Q.wireframe===!0)ht.setLineWidth(Q.wireframeLinewidth*xt()),Ae.setMode(N.LINES);else Ae.setMode(N.TRIANGLES);else if(H.isLine){let Qt=Q.linewidth;if(Qt===void 0)Qt=1;if(ht.setLineWidth(Qt*xt()),H.isLineSegments)Ae.setMode(N.LINES);else if(H.isLineLoop)Ae.setMode(N.LINE_LOOP);else Ae.setMode(N.LINE_STRIP)}else if(H.isPoints)Ae.setMode(N.POINTS);else if(H.isSprite)Ae.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ae.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(!_t.get("WEBGL_multi_draw")){let{_multiDrawStarts:Qt,_multiDrawCounts:Wn,_multiDrawCount:Re}=H,Tn=Zt?Y.get(Zt).bytesPerElement:1,Ri=wt.get(Q).currentProgram.getUniforms();for(let gn=0;gn<Re;gn++)Ri.setValue(N,"_gl_DrawID",gn),Ae.render(Qt[gn]/Tn,Wn[gn])}else Ae.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)Ae.renderInstances(be,De,H.count);else if(K.isInstancedBufferGeometry){let Qt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Wn=Math.min(K.instanceCount,Qt);Ae.renderInstances(be,De,Wn)}else Ae.render(be,De)};function At(b,k,K){if(b.transparent===!0&&b.side===2&&b.forceSinglePass===!1)b.side=1,b.needsUpdate=!0,Le(b,k,K),b.side=0,b.needsUpdate=!0,Le(b,k,K),b.side=2;else Le(b,k,K)}this.compile=function(b,k,K=null){if(K===null)K=b;if(f=Tt.get(K),f.init(k),w.push(f),K.traverseVisible(function(H){if(H.isLight&&H.layers.test(k.layers)){if(f.pushLight(H),H.castShadow)f.pushShadow(H)}}),b!==K)b.traverseVisible(function(H){if(H.isLight&&H.layers.test(k.layers)){if(f.pushLight(H),H.castShadow)f.pushShadow(H)}});f.setupLights();let Q=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let vt=H.material;if(vt)if(Array.isArray(vt))for(let Nt=0;Nt<vt.length;Nt++){let Yt=vt[Nt];At(Yt,K,H),Q.add(Yt)}else At(vt,K,H),Q.add(vt)}),w.pop(),f=null,Q},this.compileAsync=function(b,k,K=null){let Q=this.compile(b,k,K);return new Promise((H)=>{function vt(){if(Q.forEach(function(Nt){if(wt.get(Nt).currentProgram.isReady())Q.delete(Nt)}),Q.size===0){H(b);return}setTimeout(vt,10)}if(_t.get("KHR_parallel_shader_compile")!==null)vt();else setTimeout(vt,10)})};let St=null;function ee(b){if(St)St(b)}function pe(){Vt.stop()}function Pt(){Vt.start()}let Vt=new Za;if(Vt.setAnimationLoop(ee),typeof self<"u")Vt.setContext(self);this.setAnimationLoop=function(b){St=b,x.setAnimationLoop(b),b===null?Vt.stop():Vt.start()},x.addEventListener("sessionstart",pe),x.addEventListener("sessionend",Pt),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0)b.updateMatrixWorld();if(k.parent===null&&k.matrixWorldAutoUpdate===!0)k.updateMatrixWorld();if(x.enabled===!0&&x.isPresenting===!0){if(x.cameraAutoUpdate===!0)x.updateCamera(k);k=x.getCamera()}if(b.isScene===!0)b.onBeforeRender(_,b,k,R);if(f=Tt.get(b,w.length),f.init(k),w.push(f),gt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ct.setFromProjectionMatrix(gt),Gt=this.localClippingEnabled,it=ie.init(this.clippingPlanes,Gt),y=yt.get(b,m.length),y.init(),m.push(y),x.enabled===!0&&x.isPresenting===!0){let vt=_.xr.getDepthSensingMesh();if(vt!==null)bt(vt,k,-1/0,_.sortObjects)}if(bt(b,k,0,_.sortObjects),y.finish(),_.sortObjects===!0)y.sort(q,tt);if(ut=x.enabled===!1||x.isPresenting===!1||x.hasDepthSensing()===!1,ut)Dt.addToRenderList(y,b);if(this.info.render.frame++,it===!0)ie.beginShadows();let K=f.state.shadowsArray;if(ft.render(K,b,k),it===!0)ie.endShadows();if(this.info.autoReset===!0)this.info.reset();let Q=y.opaque,H=y.transmissive;if(f.setupLights(),k.isArrayCamera){let vt=k.cameras;if(H.length>0)for(let Nt=0,Yt=vt.length;Nt<Yt;Nt++){let Zt=vt[Nt];Te(Q,H,b,Zt)}if(ut)Dt.render(b);for(let Nt=0,Yt=vt.length;Nt<Yt;Nt++){let Zt=vt[Nt];Se(y,b,Zt,Zt.viewport)}}else{if(H.length>0)Te(Q,H,b,k);if(ut)Dt.render(b);Se(y,b,k)}if(R!==null)zt.updateMultisampleRenderTarget(R),zt.updateRenderTargetMipmap(R);if(b.isScene===!0)b.onAfterRender(_,b,k);if(A.resetDefaultState(),z=-1,M=null,w.pop(),w.length>0){if(f=w[w.length-1],it===!0)ie.setGlobalState(_.clippingPlanes,f.state.camera)}else f=null;if(m.pop(),m.length>0)y=m[m.length-1];else y=null};function bt(b,k,K,Q){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD){if(b.autoUpdate===!0)b.update(k)}else if(b.isLight){if(f.pushLight(b),b.castShadow)f.pushShadow(b)}else if(b.isSprite){if(!b.frustumCulled||ct.intersectsSprite(b)){if(Q)re.setFromMatrixPosition(b.matrixWorld).applyMatrix4(gt);let Nt=dt.update(b),Yt=b.material;if(Yt.visible)y.push(b,Nt,Yt,K,re.z,null)}}else if(b.isMesh||b.isLine||b.isPoints){if(!b.frustumCulled||ct.intersectsObject(b)){let Nt=dt.update(b),Yt=b.material;if(Q){if(b.boundingSphere!==void 0){if(b.boundingSphere===null)b.computeBoundingSphere();re.copy(b.boundingSphere.center)}else{if(Nt.boundingSphere===null)Nt.computeBoundingSphere();re.copy(Nt.boundingSphere.center)}re.applyMatrix4(b.matrixWorld).applyMatrix4(gt)}if(Array.isArray(Yt)){let Zt=Nt.groups;for(let le=0,ge=Zt.length;le<ge;le++){let Jt=Zt[le],be=Yt[Jt.materialIndex];if(be&&be.visible)y.push(b,Nt,be,K,re.z,Jt)}}else if(Yt.visible)y.push(b,Nt,Yt,K,re.z,null)}}}let vt=b.children;for(let Nt=0,Yt=vt.length;Nt<Yt;Nt++)bt(vt[Nt],k,K,Q)}function Se(b,k,K,Q){let{opaque:H,transmissive:vt,transparent:Nt}=b;if(f.setupLightsView(K),it===!0)ie.setGlobalState(_.clippingPlanes,K);if(Q)ht.viewport(v.copy(Q));if(H.length>0)ye(H,k,K);if(vt.length>0)ye(vt,k,K);if(Nt.length>0)ye(Nt,k,K);ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Te(b,k,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(f.state.transmissionRenderTarget[Q.id]===void 0)f.state.transmissionRenderTarget[Q.id]=new oi(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace});let vt=f.state.transmissionRenderTarget[Q.id],Nt=Q.viewport||v;vt.setSize(Nt.z,Nt.w);let Yt=_.getRenderTarget();if(_.setRenderTarget(vt),_.getClearColor(J),et=_.getClearAlpha(),et<1)_.setClearColor(16777215,0.5);if(_.clear(),ut)Dt.render(K);let Zt=_.toneMapping;_.toneMapping=0;let le=Q.viewport;if(Q.viewport!==void 0)Q.viewport=void 0;if(f.setupLightsView(Q),it===!0)ie.setGlobalState(_.clippingPlanes,Q);if(ye(b,K,Q),zt.updateMultisampleRenderTarget(vt),zt.updateRenderTargetMipmap(vt),_t.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let Jt=0,be=k.length;Jt<be;Jt++){let Pe=k[Jt],{object:De,geometry:fn,material:Ae,group:Qt}=Pe;if(Ae.side===2&&De.layers.test(Q.layers)){let Wn=Ae.side;Ae.side=1,Ae.needsUpdate=!0,Be(De,K,Q,fn,Ae,Qt),Ae.side=Wn,Ae.needsUpdate=!0,ge=!0}}if(ge===!0)zt.updateMultisampleRenderTarget(vt),zt.updateRenderTargetMipmap(vt)}if(_.setRenderTarget(Yt),_.setClearColor(J,et),le!==void 0)Q.viewport=le;_.toneMapping=Zt}function ye(b,k,K){let Q=k.isScene===!0?k.overrideMaterial:null;for(let H=0,vt=b.length;H<vt;H++){let Nt=b[H],{object:Yt,geometry:Zt}=Nt,le=Q===null?Nt.material:Q,ge=Nt.group;if(Yt.layers.test(K.layers))Be(Yt,k,K,Zt,le,ge)}}function Be(b,k,K,Q,H,vt){if(b.onBeforeRender(_,k,K,Q,H,vt),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(_,k,K,Q,b,vt),H.transparent===!0&&H.side===2&&H.forceSinglePass===!1)H.side=1,H.needsUpdate=!0,_.renderBufferDirect(K,k,Q,H,b,vt),H.side=0,H.needsUpdate=!0,_.renderBufferDirect(K,k,Q,H,b,vt),H.side=2;else _.renderBufferDirect(K,k,Q,H,b,vt);b.onAfterRender(_,k,K,Q,H,vt)}function Le(b,k,K){if(k.isScene!==!0)k=jt;let Q=wt.get(b),H=f.state.lights,vt=f.state.shadowsArray,Nt=H.state.version,Yt=rt.getParameters(b,H.state,vt,k,K),Zt=rt.getProgramCacheKey(Yt),le=Q.programs;if(Q.environment=b.isMeshStandardMaterial?k.environment:null,Q.fog=k.fog,Q.envMap=(b.isMeshStandardMaterial?E:U).get(b.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,le===void 0)b.addEventListener("dispose",B),le=new Map,Q.programs=le;let ge=le.get(Zt);if(ge!==void 0){if(Q.currentProgram===ge&&Q.lightsStateVersion===Nt)return en(b,Yt),ge}else Yt.uniforms=rt.getUniforms(b),b.onBeforeCompile(Yt,_),ge=rt.acquireProgram(Yt,Zt),le.set(Zt,ge),Q.uniforms=Yt.uniforms;let Jt=Q.uniforms;if(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)Jt.clippingPlanes=ie.uniform;if(en(b,Yt),Q.needsLights=me(b),Q.lightsStateVersion=Nt,Q.needsLights)Jt.ambientLightColor.value=H.state.ambient,Jt.lightProbe.value=H.state.probe,Jt.directionalLights.value=H.state.directional,Jt.directionalLightShadows.value=H.state.directionalShadow,Jt.spotLights.value=H.state.spot,Jt.spotLightShadows.value=H.state.spotShadow,Jt.rectAreaLights.value=H.state.rectArea,Jt.ltc_1.value=H.state.rectAreaLTC1,Jt.ltc_2.value=H.state.rectAreaLTC2,Jt.pointLights.value=H.state.point,Jt.pointLightShadows.value=H.state.pointShadow,Jt.hemisphereLights.value=H.state.hemi,Jt.directionalShadowMap.value=H.state.directionalShadowMap,Jt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Jt.spotShadowMap.value=H.state.spotShadowMap,Jt.spotLightMatrix.value=H.state.spotLightMatrix,Jt.spotLightMap.value=H.state.spotLightMap,Jt.pointShadowMap.value=H.state.pointShadowMap,Jt.pointShadowMatrix.value=H.state.pointShadowMatrix;return Q.currentProgram=ge,Q.uniformsList=null,ge}function ze(b){if(b.uniformsList===null){let k=b.currentProgram.getUniforms();b.uniformsList=fs.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function en(b,k){let K=wt.get(b);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function En(b,k,K,Q,H){if(k.isScene!==!0)k=jt;zt.resetTextureUnits();let vt=k.fog,Nt=Q.isMeshStandardMaterial?k.environment:null,Yt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:"srgb-linear",Zt=(Q.isMeshStandardMaterial?E:U).get(Q.envMap||Nt),le=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ge=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Jt=!!K.morphAttributes.position,be=!!K.morphAttributes.normal,Pe=!!K.morphAttributes.color,De=0;if(Q.toneMapped){if(R===null||R.isXRRenderTarget===!0)De=_.toneMapping}let fn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ae=fn!==void 0?fn.length:0,Qt=wt.get(Q),Wn=f.state.lights;if(it===!0){if(Gt===!0||b!==M){let vn=b===M&&Q.id===z;ie.setState(Q,b,vn)}}let Re=!1;if(Q.version===Qt.__version){if(Qt.needsLights&&Qt.lightsStateVersion!==Wn.state.version)Re=!0;else if(Qt.outputColorSpace!==Yt)Re=!0;else if(H.isBatchedMesh&&Qt.batching===!1)Re=!0;else if(!H.isBatchedMesh&&Qt.batching===!0)Re=!0;else if(H.isBatchedMesh&&Qt.batchingColor===!0&&H.colorTexture===null)Re=!0;else if(H.isBatchedMesh&&Qt.batchingColor===!1&&H.colorTexture!==null)Re=!0;else if(H.isInstancedMesh&&Qt.instancing===!1)Re=!0;else if(!H.isInstancedMesh&&Qt.instancing===!0)Re=!0;else if(H.isSkinnedMesh&&Qt.skinning===!1)Re=!0;else if(!H.isSkinnedMesh&&Qt.skinning===!0)Re=!0;else if(H.isInstancedMesh&&Qt.instancingColor===!0&&H.instanceColor===null)Re=!0;else if(H.isInstancedMesh&&Qt.instancingColor===!1&&H.instanceColor!==null)Re=!0;else if(H.isInstancedMesh&&Qt.instancingMorph===!0&&H.morphTexture===null)Re=!0;else if(H.isInstancedMesh&&Qt.instancingMorph===!1&&H.morphTexture!==null)Re=!0;else if(Qt.envMap!==Zt)Re=!0;else if(Q.fog===!0&&Qt.fog!==vt)Re=!0;else if(Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==ie.numPlanes||Qt.numIntersection!==ie.numIntersection))Re=!0;else if(Qt.vertexAlphas!==le)Re=!0;else if(Qt.vertexTangents!==ge)Re=!0;else if(Qt.morphTargets!==Jt)Re=!0;else if(Qt.morphNormals!==be)Re=!0;else if(Qt.morphColors!==Pe)Re=!0;else if(Qt.toneMapping!==De)Re=!0;else if(Qt.morphTargetsCount!==Ae)Re=!0}else Re=!0,Qt.__version=Q.version;let Tn=Qt.currentProgram;if(Re===!0)Tn=Le(Q,k,H);let Ri=!1,gn=!1,es=!1,Ue=Tn.getUniforms(),zn=Qt.uniforms;if(ht.useProgram(Tn.program))Ri=!0,gn=!0,es=!0;if(Q.id!==z)z=Q.id,gn=!0;if(Ri||M!==b){if(ht.buffers.depth.getReversed())Ft.copy(b.projectionMatrix),_l(Ft),yl(Ft),Ue.setValue(N,"projectionMatrix",Ft);else Ue.setValue(N,"projectionMatrix",b.projectionMatrix);Ue.setValue(N,"viewMatrix",b.matrixWorldInverse);let Kn=Ue.map.cameraPosition;if(Kn!==void 0)Kn.setValue(N,Kt.setFromMatrixPosition(b.matrixWorld));if(It.logarithmicDepthBuffer)Ue.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2));if(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)Ue.setValue(N,"isOrthographic",b.isOrthographicCamera===!0);if(M!==b)M=b,gn=!0,es=!0}if(H.isSkinnedMesh){Ue.setOptional(N,H,"bindMatrix"),Ue.setOptional(N,H,"bindMatrixInverse");let vn=H.skeleton;if(vn){if(vn.boneTexture===null)vn.computeBoneTexture();Ue.setValue(N,"boneTexture",vn.boneTexture,zt)}}if(H.isBatchedMesh){if(Ue.setOptional(N,H,"batchingTexture"),Ue.setValue(N,"batchingTexture",H._matricesTexture,zt),Ue.setOptional(N,H,"batchingIdTexture"),Ue.setValue(N,"batchingIdTexture",H._indirectTexture,zt),Ue.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null)Ue.setValue(N,"batchingColorTexture",H._colorsTexture,zt)}let ns=K.morphAttributes;if(ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)de.update(H,K,Tn);if(gn||Qt.receiveShadow!==H.receiveShadow)Qt.receiveShadow=H.receiveShadow,Ue.setValue(N,"receiveShadow",H.receiveShadow);if(Q.isMeshGouraudMaterial&&Q.envMap!==null)zn.envMap.value=Zt,zn.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1;if(Q.isMeshStandardMaterial&&Q.envMap===null&&k.environment!==null)zn.envMapIntensity.value=k.environmentIntensity;if(gn){if(Ue.setValue(N,"toneMappingExposure",_.toneMappingExposure),Qt.needsLights)ts(zn,es);if(vt&&Q.fog===!0)Wt.refreshFogUniforms(zn,vt);Wt.refreshMaterialUniforms(zn,Q,nt,V,f.state.transmissionRenderTarget[b.id]),fs.upload(N,ze(Qt),zn,zt)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0)fs.upload(N,ze(Qt),zn,zt),Q.uniformsNeedUpdate=!1;if(Q.isSpriteMaterial)Ue.setValue(N,"center",H.center);if(Ue.setValue(N,"modelViewMatrix",H.modelViewMatrix),Ue.setValue(N,"normalMatrix",H.normalMatrix),Ue.setValue(N,"modelMatrix",H.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let vn=Q.uniformsGroups;for(let Kn=0,Qn=vn.length;Kn<Qn;Kn++){let Oo=vn[Kn];st.update(Oo,Tn),st.bind(Oo,Tn)}}return Tn}function ts(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function me(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}if(this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,k,K){wt.get(b.texture).__webglTexture=k,wt.get(b.depthTexture).__webglTexture=K;let Q=wt.get(b);if(Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=K===void 0,!Q.__autoAllocateDepthBuffer){if(_t.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(b,k){let K=wt.get(b);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,K=0){R=b,D=k,I=K;let Q=!0,H=null,vt=!1,Nt=!1;if(b){let Zt=wt.get(b);if(Zt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(N.FRAMEBUFFER,null),Q=!1;else if(Zt.__webglFramebuffer===void 0)zt.setupRenderTarget(b);else if(Zt.__hasExternalTextures)zt.rebindTextures(b,wt.get(b.texture).__webglTexture,wt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Jt=b.depthTexture;if(Zt.__boundDepthTexture!==Jt){if(Jt!==null&&wt.has(Jt)&&(b.width!==Jt.image.width||b.height!==Jt.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(b)}}let le=b.texture;if(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)Nt=!0;let ge=wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget){if(Array.isArray(ge[k]))H=ge[k][K];else H=ge[k];vt=!0}else if(b.samples>0&&zt.useMultisampledRTT(b)===!1)H=wt.get(b).__webglMultisampledFramebuffer;else if(Array.isArray(ge))H=ge[K];else H=ge;v.copy(b.viewport),F.copy(b.scissor),W=b.scissorTest}else v.copy(lt).multiplyScalar(nt).floor(),F.copy(Ct).multiplyScalar(nt).floor(),W=Ot;if(ht.bindFramebuffer(N.FRAMEBUFFER,H)&&Q)ht.drawBuffers(b,H);if(ht.viewport(v),ht.scissor(F),ht.setScissorTest(W),vt){let Zt=wt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,Zt.__webglTexture,K)}else if(Nt){let Zt=wt.get(b.texture),le=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Zt.__webglTexture,K||0,le)}z=-1},this.readRenderTargetPixels=function(b,k,K,Q,H,vt,Nt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Nt!==void 0)Yt=Yt[Nt];if(Yt){ht.bindFramebuffer(N.FRAMEBUFFER,Yt);try{let Zt=b.texture,{format:le,type:ge}=Zt;if(!It.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(k>=0&&k<=b.width-Q&&(K>=0&&K<=b.height-H))N.readPixels(k,K,Q,H,ce.convert(le),ce.convert(ge),vt)}finally{let Zt=R!==null?wt.get(R).__webglFramebuffer:null;ht.bindFramebuffer(N.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(b,k,K,Q,H,vt,Nt){if(!(b&&b.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Nt!==void 0)Yt=Yt[Nt];if(Yt){let Zt=b.texture,{format:le,type:ge}=Zt;if(!It.textureFormatReadable(le))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(ge))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=b.width-Q&&(K>=0&&K<=b.height-H)){ht.bindFramebuffer(N.FRAMEBUFFER,Yt);let Jt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Jt),N.bufferData(N.PIXEL_PACK_BUFFER,vt.byteLength,N.STREAM_READ),N.readPixels(k,K,Q,H,ce.convert(le),ce.convert(ge),0);let be=R!==null?wt.get(R).__webglFramebuffer:null;ht.bindFramebuffer(N.FRAMEBUFFER,be);let Pe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await xl(N,Pe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Jt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,vt),N.deleteBuffer(Jt),N.deleteSync(Pe),vt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,k=null,K=0){if(b.isTexture!==!0)us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1];let Q=Math.pow(2,-K),H=Math.floor(b.image.width*Q),vt=Math.floor(b.image.height*Q),Nt=k!==null?k.x:0,Yt=k!==null?k.y:0;zt.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,Nt,Yt,H,vt),ht.unbindTexture()},this.copyTextureToTexture=function(b,k,K=null,Q=null,H=0){if(b.isTexture!==!0)us("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,b=arguments[1],k=arguments[2],H=arguments[3]||0,K=null;let vt,Nt,Yt,Zt,le,ge,Jt,be,Pe,De=b.isCompressedTexture?b.mipmaps[H]:b.image;if(K!==null)vt=K.max.x-K.min.x,Nt=K.max.y-K.min.y,Yt=K.isBox3?K.max.z-K.min.z:1,Zt=K.min.x,le=K.min.y,ge=K.isBox3?K.min.z:0;else vt=De.width,Nt=De.height,Yt=De.depth||1,Zt=0,le=0,ge=0;if(Q!==null)Jt=Q.x,be=Q.y,Pe=Q.z;else Jt=0,be=0,Pe=0;let fn=ce.convert(k.format),Ae=ce.convert(k.type),Qt;if(k.isData3DTexture)zt.setTexture3D(k,0),Qt=N.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)zt.setTexture2DArray(k,0),Qt=N.TEXTURE_2D_ARRAY;else zt.setTexture2D(k,0),Qt=N.TEXTURE_2D;N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);let Wn=N.getParameter(N.UNPACK_ROW_LENGTH),Re=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Tn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ri=N.getParameter(N.UNPACK_SKIP_ROWS),gn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,De.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,De.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Zt),N.pixelStorei(N.UNPACK_SKIP_ROWS,le),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ge);let es=b.isDataArrayTexture||b.isData3DTexture,Ue=k.isDataArrayTexture||k.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let zn=wt.get(b),ns=wt.get(k),vn=wt.get(zn.__renderTarget),Kn=wt.get(ns.__renderTarget);ht.bindFramebuffer(N.READ_FRAMEBUFFER,vn.__webglFramebuffer),ht.bindFramebuffer(N.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Qn=0;Qn<Yt;Qn++){if(es)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,wt.get(b).__webglTexture,H,ge+Qn);if(b.isDepthTexture){if(Ue)N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,wt.get(k).__webglTexture,H,Pe+Qn);N.blitFramebuffer(Zt,le,vt,Nt,Jt,be,vt,Nt,N.DEPTH_BUFFER_BIT,N.NEAREST)}else if(Ue)N.copyTexSubImage3D(Qt,H,Jt,be,Pe+Qn,Zt,le,vt,Nt);else N.copyTexSubImage2D(Qt,H,Jt,be,Pe+Qn,Zt,le,vt,Nt)}ht.bindFramebuffer(N.READ_FRAMEBUFFER,null),ht.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(Ue)if(b.isDataTexture||b.isData3DTexture)N.texSubImage3D(Qt,H,Jt,be,Pe,vt,Nt,Yt,fn,Ae,De.data);else if(k.isCompressedArrayTexture)N.compressedTexSubImage3D(Qt,H,Jt,be,Pe,vt,Nt,Yt,fn,De.data);else N.texSubImage3D(Qt,H,Jt,be,Pe,vt,Nt,Yt,fn,Ae,De);else if(b.isDataTexture)N.texSubImage2D(N.TEXTURE_2D,H,Jt,be,vt,Nt,fn,Ae,De.data);else if(b.isCompressedTexture)N.compressedTexSubImage2D(N.TEXTURE_2D,H,Jt,be,De.width,De.height,fn,De.data);else N.texSubImage2D(N.TEXTURE_2D,H,Jt,be,vt,Nt,fn,Ae,De);if(N.pixelStorei(N.UNPACK_ROW_LENGTH,Wn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Re),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Tn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ri),N.pixelStorei(N.UNPACK_SKIP_IMAGES,gn),H===0&&k.generateMipmaps)N.generateMipmap(Qt);ht.unbindTexture()},this.copyTextureToTexture3D=function(b,k,K=null,Q=null,H=0){if(b.isTexture!==!0)us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Q=arguments[1]||null,b=arguments[2],k=arguments[3],H=arguments[4]||0;return us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,k,K,Q,H)},this.initRenderTarget=function(b){if(wt.get(b).__webglFramebuffer===void 0)zt.setupRenderTarget(b)},this.initTexture=function(b){if(b.isCubeTexture)zt.setTextureCube(b,0);else if(b.isData3DTexture)zt.setTexture3D(b,0);else if(b.isDataArrayTexture||b.isCompressedArrayTexture)zt.setTexture2DArray(b,0);else zt.setTexture2D(b,0);ht.unbindTexture()},this.resetState=function(){D=0,I=0,R=null,ht.reset(),A.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}}class or{constructor(t,e=1,n=1000){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new or(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hc extends je{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){if(super.copy(t,e),t.background!==null)this.background=t.background.clone();if(t.environment!==null)this.environment=t.environment.clone();if(t.fog!==null)this.fog=t.fog.clone();if(this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null)this.overrideMaterial=t.overrideMaterial.clone();return this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)e.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)e.object.backgroundIntensity=this.backgroundIntensity;if(e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)e.object.environmentIntensity=this.environmentIntensity;return e.object.environmentRotation=this.environmentRotation.toArray(),e}}class uc extends on{constructor(t=null,e=1,n=1,i,s,r,o,a,c=1003,l=1003,h,u){super(null,r,o,a,c,l,i,s,h,u);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class er extends tn{constructor(t,e,n,i=1){super(t,e,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}var Hi=new oe,Ca=new oe,qs=[],Ia=new ai,pp=new oe,cs=new te,ls=new Si;class ke extends te{constructor(t,e,n){super(t,e);this.isInstancedMesh=!0,this.instanceMatrix=new er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,pp)}computeBoundingBox(){let t=this.geometry,e=this.count;if(this.boundingBox===null)this.boundingBox=new ai;if(t.boundingBox===null)t.computeBoundingBox();this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hi),Ia.copy(t.boundingBox).applyMatrix4(Hi),this.boundingBox.union(Ia)}computeBoundingSphere(){let t=this.geometry,e=this.count;if(this.boundingSphere===null)this.boundingSphere=new Si;if(t.boundingSphere===null)t.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hi),ls.copy(t.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(ls)}copy(t,e){if(super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null)this.morphTexture=t.morphTexture.clone();if(t.instanceColor!==null)this.instanceColor=t.instanceColor.clone();if(this.count=t.count,t.boundingBox!==null)this.boundingBox=t.boundingBox.clone();if(t.boundingSphere!==null)this.boundingSphere=t.boundingSphere.clone();return this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(ls.copy(this.boundingSphere),ls.applyMatrix4(n),t.ray.intersectsSphere(ls)===!1)return;for(let s=0;s<i;s++){this.getMatrixAt(s,Hi),Ca.multiplyMatrices(n,Hi),cs.matrixWorld=Ca,cs.raycast(t,qs);for(let r=0,o=qs.length;r<o;r++){let a=qs[r];a.instanceId=s,a.object=this,e.push(a)}qs.length=0}}setColorAt(t,e){if(this.instanceColor===null)this.instanceColor=new er(new Float32Array(this.instanceMatrix.count*3).fill(1),3);e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;if(this.morphTexture===null)this.morphTexture=new uc(new Float32Array(i*this.count),i,this.count,1028,1015);let s=this.morphTexture.source.data.data,r=0;for(let c=0;c<n.length;c++)r+=n[c];let o=this.geometry.morphTargetsRelative?1:1-r,a=i*t;s[a]=o,s.set(n,a+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null;return this}}class ar extends ci{static get type(){return"LineBasicMaterial"}constructor(t){super();this.isLineBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}var nr=new O,ir=new O,Pa=new oe,hs=new oo,Ys=new Si,qr=new O,La=new O;class dc extends je{constructor(t=new Xe,e=new ar){super();this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)nr.fromBufferAttribute(e,i-1),ir.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=nr.distanceTo(ir);t.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Ys.copy(n.boundingSphere),Ys.applyMatrix4(i),Ys.radius+=s,t.ray.intersectsSphere(Ys)===!1)return;Pa.copy(i).invert(),hs.copy(t.ray).applyMatrix4(Pa);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let g=d,y=p-1;g<y;g+=c){let f=l.getX(g),m=l.getX(g+1),w=Zs(this,t,hs,a,f,m);if(w)e.push(w)}if(this.isLineLoop){let g=l.getX(p-1),y=l.getX(d),f=Zs(this,t,hs,a,g,y);if(f)e.push(f)}}else{let d=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let g=d,y=p-1;g<y;g+=c){let f=Zs(this,t,hs,a,g,g+1);if(f)e.push(f)}if(this.isLineLoop){let g=Zs(this,t,hs,a,p-1,d);if(g)e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zs(t,e,n,i,s,r){let o=t.geometry.attributes.position;if(nr.fromBufferAttribute(o,s),ir.fromBufferAttribute(o,r),n.distanceSqToSegment(nr,ir,qr,La)>i)return;qr.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(qr);if(c<e.near||c>e.far)return;return{distance:c,point:La.clone().applyMatrix4(t.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:t}}class fc extends on{constructor(t,e,n,i,s,r,o,a,c){super(t,e,n,i,s,r,o,a,c);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,r;if(e)r=e;else r=t*n[s-1];let o=0,a=s-1,c;while(o<=a)if(i=Math.floor(o+(a-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,n[i]===r)return i/(s-1);let l=n[i],u=n[i+1]-l,d=(r-l)/u;return(i+d)/(s-1)}getTangent(t,e){let i=t-0.0001,s=t+0.0001;if(i<0)i=0;if(s>1)s=1;let r=this.getPoint(i),o=this.getPoint(s),a=e||(r.isVector2?new Et:new O);return a.copy(o).sub(r).normalize(),a}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new O,i=[],s=[],r=[],o=new O,a=new oe;for(let d=0;d<=t;d++){let p=d/t;i[d]=this.getTangentAt(p,new O)}s[0]=new O,r[0]=new O;let c=Number.MAX_VALUE,l=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);if(l<=c)c=l,n.set(1,0,0);if(h<=c)c=h,n.set(0,1,0);if(u<=c)n.set(0,0,1);o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(rn(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(a.makeRotationAxis(o,p))}r[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(rn(s[0].dot(s[t]),-1,1));if(d/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0)d=-d;for(let p=1;p<=t;p++)s[p].applyMatrix4(a.makeRotationAxis(i[p],d*p)),r[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class cr extends Dn{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,a=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=a}getPoint(t,e=new Et){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;while(s<0)s+=i;while(s>i)s-=i;if(s<Number.EPSILON)if(r)s=0;else s=i;if(this.aClockwise===!0&&!r)if(s===i)s=-i;else s=s-i;let o=this.aStartAngle+t*s,a=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let l=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=a-this.aX,d=c-this.aY;a=u*l-d*h+this.aX,c=u*h+d*l+this.aY}return n.set(a,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class pc extends cr{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r);this.isArcCurve=!0,this.type="ArcCurve"}}function go(){let t=0,e=0,n=0,i=0;function s(r,o,a,c){t=r,e=a,n=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return t+e*r+n*o+i*a}}}var Js=new O,Yr=new go,Zr=new go,Jr=new go;class mc extends Dn{constructor(t=[],e=!1,n="centripetal",i=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new O){let n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t,o=Math.floor(r),a=r-o;if(this.closed)o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s;else if(a===0&&o===s-1)o=s-2,a=1;let c,l;if(this.closed||o>0)c=i[(o-1)%s];else Js.subVectors(i[0],i[1]).add(i[0]),c=Js;let h=i[o%s],u=i[(o+1)%s];if(this.closed||o+2<s)l=i[(o+2)%s];else Js.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=Js;if(this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?0.5:0.25,p=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(l),d);if(g<0.0001)g=1;if(p<0.0001)p=g;if(y<0.0001)y=g;Yr.initNonuniformCatmullRom(c.x,h.x,u.x,l.x,p,g,y),Zr.initNonuniformCatmullRom(c.y,h.y,u.y,l.y,p,g,y),Jr.initNonuniformCatmullRom(c.z,h.z,u.z,l.z,p,g,y)}else if(this.curveType==="catmullrom")Yr.initCatmullRom(c.x,h.x,u.x,l.x,this.tension),Zr.initCatmullRom(c.y,h.y,u.y,l.y,this.tension),Jr.initCatmullRom(c.z,h.z,u.z,l.z,this.tension);return n.set(Yr.calc(a),Zr.calc(a),Jr.calc(a)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new O().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Da(t,e,n,i,s){let r=(i-e)*0.5,o=(s-n)*0.5,a=t*t,c=t*a;return(2*n-2*i+r+o)*c+(-3*n+3*i-2*r-o)*a+r*t+n}function mp(t,e){let n=1-t;return n*n*e}function gp(t,e){return 2*(1-t)*t*e}function xp(t,e){return t*t*e}function ps(t,e,n,i){return mp(t,e)+gp(t,n)+xp(t,i)}function _p(t,e){let n=1-t;return n*n*n*e}function yp(t,e){let n=1-t;return 3*n*n*t*e}function vp(t,e){return 3*(1-t)*t*t*e}function Mp(t,e){return t*t*t*e}function ms(t,e,n,i,s){return _p(t,e)+yp(t,n)+vp(t,i)+Mp(t,s)}class xo extends Dn{constructor(t=new Et,e=new Et,n=new Et,i=new Et){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Et){let n=e,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(ms(t,i.x,s.x,r.x,o.x),ms(t,i.y,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gc extends Dn{constructor(t=new O,e=new O,n=new O,i=new O){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new O){let n=e,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(ms(t,i.x,s.x,r.x,o.x),ms(t,i.y,s.y,r.y,o.y),ms(t,i.z,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _o extends Dn{constructor(t=new Et,e=new Et){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xc extends Dn{constructor(t=new O,e=new O){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yo extends Dn{constructor(t=new Et,e=new Et,n=new Et){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(ps(t,i.x,s.x,r.x),ps(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _c extends Dn{constructor(t=new O,e=new O,n=new O){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(ps(t,i.x,s.x,r.x),ps(t,i.y,s.y,r.y),ps(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vo extends Dn{constructor(t=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){let n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),o=s-r,a=i[r===0?r:r-1],c=i[r],l=i[r>i.length-2?i.length-1:r+1],h=i[r>i.length-3?i.length-1:r+2];return n.set(Da(o,a.x,c.x,l.x,h.x),Da(o,a.y,c.y,l.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Et().fromArray(i))}return this}}var to=Object.freeze({__proto__:null,ArcCurve:pc,CatmullRomCurve3:mc,CubicBezierCurve:xo,CubicBezierCurve3:gc,EllipseCurve:cr,LineCurve:_o,LineCurve3:xc,QuadraticBezierCurve:yo,QuadraticBezierCurve3:_c,SplineCurve:vo});class yc extends Dn{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new to[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;while(s<i.length){if(i[s]>=n){let r=i[s]-n,o=this.curves[s],a=o.getLength(),c=a===0?0:1-r/a;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));if(this.autoClose)e.push(e[0]);return e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,a=r.getPoints(o);for(let c=0;c<a.length;c++){let l=a[c];if(n&&n.equals(l))continue;e.push(l),n=l}}if(this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0]))e.push(e[0]);return e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new to[i.type]().fromJSON(i))}return this}}class eo extends yc{constructor(t){super();if(this.type="Path",this.currentPoint=new Et,t)this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new _o(this.currentPoint.clone(),new Et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new yo(this.currentPoint.clone(),new Et(t,e),new Et(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){let o=new xo(this.currentPoint.clone(),new Et(t,e),new Et(n,i),new Et(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new vo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(t+o,e+a,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,o,a){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+c,e+l,n,i,s,r,o,a),this}absellipse(t,e,n,i,s,r,o,a){let c=new cr(t,e,n,i,s,r,o,a);if(this.curves.length>0){let h=c.getPoint(0);if(!h.equals(this.currentPoint))this.lineTo(h.x,h.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class li extends Xe{constructor(t=1,e=32,n=0,i=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],r=[],o=[],a=[],c=new O,l=new Et;r.push(0,0,0),o.push(0,0,1),a.push(0.5,0.5);for(let h=0,u=3;h<=e;h++,u+=3){let d=n+h/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(r[u]/t+1)/2,l.y=(r[u+1]/t+1)/2,a.push(l.x,l.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ve(r,3)),this.setAttribute("normal",new ve(o,3)),this.setAttribute("uv",new ve(a,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ae extends Xe{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a};let c=this;i=Math.floor(i),s=Math.floor(s);let l=[],h=[],u=[],d=[],p=0,g=[],y=n/2,f=0;if(m(),r===!1){if(t>0)w(!0);if(e>0)w(!1)}this.setIndex(l),this.setAttribute("position",new ve(h,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(d,2));function m(){let _=new O,C=new O,D=0,I=(e-t)/n;for(let R=0;R<=s;R++){let z=[],M=R/s,v=M*(e-t)+t;for(let F=0;F<=i;F++){let W=F/i,J=W*a+o,et=Math.sin(J),X=Math.cos(J);C.x=v*et,C.y=-M*n+y,C.z=v*X,h.push(C.x,C.y,C.z),_.set(et,I,X).normalize(),u.push(_.x,_.y,_.z),d.push(W,1-M),z.push(p++)}g.push(z)}for(let R=0;R<i;R++)for(let z=0;z<s;z++){let M=g[z][R],v=g[z+1][R],F=g[z+1][R+1],W=g[z][R+1];if(t>0||z!==0)l.push(M,v,W),D+=3;if(e>0||z!==s-1)l.push(v,F,W),D+=3}c.addGroup(f,D,0),f+=D}function w(_){let C=p,D=new Et,I=new O,R=0,z=_===!0?t:e,M=_===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,y*M,0),u.push(0,M,0),d.push(0.5,0.5),p++;let v=p;for(let F=0;F<=i;F++){let J=F/i*a+o,et=Math.cos(J),X=Math.sin(J);I.x=z*X,I.y=y*M,I.z=z*et,h.push(I.x,I.y,I.z),u.push(0,M,0),D.x=et*0.5+0.5,D.y=X*0.5*M+0.5,d.push(D.x,D.y),p++}for(let F=0;F<i;F++){let W=C+F,J=v+F;if(_===!0)l.push(J,J+1,W);else l.push(J+1,J,W);R+=3}c.addGroup(f,R,_===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class dn extends ae{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,o=Math.PI*2){super(0,t,e,n,i,s,r,o);this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(t){return new dn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lr extends Xe{constructor(t=[],e=[],n=1,i=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],r=[];if(o(i),c(n),l(),this.setAttribute("position",new ve(s,3)),this.setAttribute("normal",new ve(s.slice(),3)),this.setAttribute("uv",new ve(r,2)),i===0)this.computeVertexNormals();else this.normalizeNormals();function o(m){let w=new O,_=new O,C=new O;for(let D=0;D<e.length;D+=3)d(e[D+0],w),d(e[D+1],_),d(e[D+2],C),a(w,_,C,m)}function a(m,w,_,C){let D=C+1,I=[];for(let R=0;R<=D;R++){I[R]=[];let z=m.clone().lerp(_,R/D),M=w.clone().lerp(_,R/D),v=D-R;for(let F=0;F<=v;F++)if(F===0&&R===D)I[R][F]=z;else I[R][F]=z.clone().lerp(M,F/v)}for(let R=0;R<D;R++)for(let z=0;z<2*(D-R)-1;z++){let M=Math.floor(z/2);if(z%2===0)u(I[R][M+1]),u(I[R+1][M]),u(I[R][M]);else u(I[R][M+1]),u(I[R+1][M+1]),u(I[R+1][M])}}function c(m){let w=new O;for(let _=0;_<s.length;_+=3)w.x=s[_+0],w.y=s[_+1],w.z=s[_+2],w.normalize().multiplyScalar(m),s[_+0]=w.x,s[_+1]=w.y,s[_+2]=w.z}function l(){let m=new O;for(let w=0;w<s.length;w+=3){m.x=s[w+0],m.y=s[w+1],m.z=s[w+2];let _=y(m)/2/Math.PI+0.5,C=f(m)/Math.PI+0.5;r.push(_,1-C)}p(),h()}function h(){for(let m=0;m<r.length;m+=6){let w=r[m+0],_=r[m+2],C=r[m+4],D=Math.max(w,_,C),I=Math.min(w,_,C);if(D>0.9&&I<0.1){if(w<0.2)r[m+0]+=1;if(_<0.2)r[m+2]+=1;if(C<0.2)r[m+4]+=1}}}function u(m){s.push(m.x,m.y,m.z)}function d(m,w){let _=m*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function p(){let m=new O,w=new O,_=new O,C=new O,D=new Et,I=new Et,R=new Et;for(let z=0,M=0;z<s.length;z+=9,M+=6){m.set(s[z+0],s[z+1],s[z+2]),w.set(s[z+3],s[z+4],s[z+5]),_.set(s[z+6],s[z+7],s[z+8]),D.set(r[M+0],r[M+1]),I.set(r[M+2],r[M+3]),R.set(r[M+4],r[M+5]),C.copy(m).add(w).add(_).divideScalar(3);let v=y(C);g(D,M+0,m,v),g(I,M+2,w,v),g(R,M+4,_,v)}}function g(m,w,_,C){if(C<0&&m.x===1)r[w]=m.x-1;if(_.x===0&&_.z===0)r[w]=C/2/Math.PI+0.5}function y(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.vertices,t.indices,t.radius,t.details)}}class hr extends lr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,e);this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hr(t.radius,t.detail)}}class ur extends eo{constructor(t){super(t);this.uuid=Yi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new eo().fromJSON(i))}return this}}var Sp={triangulate:function(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=vc(t,0,s,n,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(i)r=Ap(t,e,r,n);if(t.length>80*n){a=l=t[0],c=h=t[1];for(let g=n;g<s;g+=n){if(u=t[g],d=t[g+1],u<a)a=u;if(d<c)c=d;if(u>l)l=u;if(d>h)h=d}p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return xs(r,o,n,a,c,p,0),o}};function vc(t,e,n,i,s){let r,o;if(s===Op(t,e,n,i)>0)for(r=e;r<n;r+=i)o=Ua(r,t[r],t[r+1],o);else for(r=n-i;r>=e;r-=i)o=Ua(r,t[r],t[r+1],o);if(o&&dr(o,o.next))ys(o),o=o.next;return o}function vi(t,e){if(!t)return t;if(!e)e=t;let n=t,i;do if(i=!1,!n.steiner&&(dr(n,n.next)||Oe(n.prev,n,n.next)===0)){if(ys(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function xs(t,e,n,i,s,r,o){if(!t)return;if(!o&&r)Lp(t,i,s,r);let a=t,c,l;while(t.prev!==t.next){if(c=t.prev,l=t.next,r?bp(t,i,s,r):wp(t)){e.push(c.i/n|0),e.push(t.i/n|0),e.push(l.i/n|0),ys(t),t=l.next,a=l.next;continue}if(t=l,t===a){if(!o)xs(vi(t),e,n,i,s,r,1);else if(o===1)t=Ep(vi(t),e,n),xs(t,e,n,i,s,r,2);else if(o===2)Tp(t,e,n,i,s,r);break}}}function wp(t){let e=t.prev,n=t,i=t.next;if(Oe(e,n,i)>=0)return!1;let s=e.x,r=n.x,o=i.x,a=e.y,c=n.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l,g=i.next;while(g!==e){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Vi(s,a,r,c,o,l,g.x,g.y)&&Oe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bp(t,e,n,i){let s=t.prev,r=t,o=t.next;if(Oe(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,y=a>c?a>l?a:l:c>l?c:l,f=h>u?h>d?h:d:u>d?u:d,m=no(p,g,e,n,i),w=no(y,f,e,n,i),{prevZ:_,nextZ:C}=t;while(_&&_.z>=m&&C&&C.z<=w){if(_.x>=p&&_.x<=y&&_.y>=g&&_.y<=f&&_!==s&&_!==o&&Vi(a,h,c,u,l,d,_.x,_.y)&&Oe(_.prev,_,_.next)>=0)return!1;if(_=_.prevZ,C.x>=p&&C.x<=y&&C.y>=g&&C.y<=f&&C!==s&&C!==o&&Vi(a,h,c,u,l,d,C.x,C.y)&&Oe(C.prev,C,C.next)>=0)return!1;C=C.nextZ}while(_&&_.z>=m){if(_.x>=p&&_.x<=y&&_.y>=g&&_.y<=f&&_!==s&&_!==o&&Vi(a,h,c,u,l,d,_.x,_.y)&&Oe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}while(C&&C.z<=w){if(C.x>=p&&C.x<=y&&C.y>=g&&C.y<=f&&C!==s&&C!==o&&Vi(a,h,c,u,l,d,C.x,C.y)&&Oe(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function Ep(t,e,n){let i=t;do{let s=i.prev,r=i.next.next;if(!dr(s,r)&&Mc(s,i,i.next,r)&&_s(s,r)&&_s(r,s))e.push(s.i/n|0),e.push(i.i/n|0),e.push(r.i/n|0),ys(i),ys(i.next),i=t=r;i=i.next}while(i!==t);return vi(i)}function Tp(t,e,n,i,s,r){let o=t;do{let a=o.next.next;while(a!==o.prev){if(o.i!==a.i&&Np(o,a)){let c=Sc(o,a);o=vi(o,o.next),c=vi(c,c.next),xs(o,e,n,i,s,r,0),xs(c,e,n,i,s,r,0);return}a=a.next}o=o.next}while(o!==t)}function Ap(t,e,n,i){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++){if(a=e[r]*i,c=r<o-1?e[r+1]*i:t.length,l=vc(t,a,c,i,!1),l===l.next)l.steiner=!0;s.push(Up(l))}s.sort(Rp);for(r=0;r<s.length;r++)n=Cp(s[r],n);return n}function Rp(t,e){return t.x-e.x}function Cp(t,e){let n=Ip(t,e);if(!n)return e;let i=Sc(n,t);return vi(i,i.next),vi(n,n.next)}function Ip(t,e){let n=e,i=-1/0,s,{x:r,y:o}=t;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=r&&d>i){if(i=d,s=n.x<n.next.x?n:n.next,d===r)return s}}n=n.next}while(n!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;n=s;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Vi(o<l?r:i,o,c,l,o<l?i:r,o,n.x,n.y)){if(u=Math.abs(o-n.y)/(r-n.x),_s(n,t)&&(u<h||u===h&&(n.x>s.x||n.x===s.x&&Pp(s,n))))s=n,h=u}n=n.next}while(n!==a);return s}function Pp(t,e){return Oe(t.prev,t,e.prev)<0&&Oe(e.next,t,t.next)<0}function Lp(t,e,n,i){let s=t;do{if(s.z===0)s.z=no(s.x,s.y,e,n,i);s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,Dp(s)}function Dp(t){let e,n,i,s,r,o,a,c,l=1;do{n=t,t=null,r=null,o=0;while(n){o++,i=n,a=0;for(e=0;e<l;e++)if(a++,i=i.nextZ,!i)break;c=l;while(a>0||c>0&&i){if(a!==0&&(c===0||!i||n.z<=i.z))s=n,n=n.nextZ,a--;else s=i,i=i.nextZ,c--;if(r)r.nextZ=s;else t=s;s.prevZ=r,r=s}n=i}r.nextZ=null,l*=2}while(o>1);return t}function no(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Up(t){let e=t,n=t;do{if(e.x<n.x||e.x===n.x&&e.y<n.y)n=e;e=e.next}while(e!==t);return n}function Vi(t,e,n,i,s,r,o,a){return(s-o)*(e-a)>=(t-o)*(r-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(r-a)>=(s-o)*(i-a)}function Np(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Fp(t,e)&&(_s(t,e)&&_s(e,t)&&Bp(t,e)&&(Oe(t.prev,t,e.prev)||Oe(t,e.prev,e))||dr(t,e)&&Oe(t.prev,t,t.next)>0&&Oe(e.prev,e,e.next)>0)}function Oe(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function dr(t,e){return t.x===e.x&&t.y===e.y}function Mc(t,e,n,i){let s=Ks(Oe(t,e,n)),r=Ks(Oe(t,e,i)),o=Ks(Oe(n,i,t)),a=Ks(Oe(n,i,e));if(s!==r&&o!==a)return!0;if(s===0&&$s(t,n,e))return!0;if(r===0&&$s(t,i,e))return!0;if(o===0&&$s(n,t,i))return!0;if(a===0&&$s(n,e,i))return!0;return!1}function $s(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Ks(t){return t>0?1:t<0?-1:0}function Fp(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Mc(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function _s(t,e){return Oe(t.prev,t,t.next)<0?Oe(t,e,t.next)>=0&&Oe(t,t.prev,e)>=0:Oe(t,e,t.prev)<0||Oe(t,t.next,e)<0}function Bp(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do{if(n.y>r!==n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x)i=!i;n=n.next}while(n!==t);return i}function Sc(t,e){let n=new io(t.i,t.x,t.y),i=new io(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function Ua(t,e,n,i){let s=new io(t,e,n);if(!i)s.prev=s,s.next=s;else s.next=i.next,s.prev=i,i.next.prev=s,i.next=s;return s}function ys(t){if(t.next.prev=t.prev,t.prev.next=t.next,t.prevZ)t.prevZ.nextZ=t.nextZ;if(t.nextZ)t.nextZ.prevZ=t.prevZ}function io(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Op(t,e,n,i){let s=0;for(let r=e,o=n-i;r<n;r+=i)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s}class gs{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*0.5}static isClockWise(t){return gs.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Na(t),Fa(n,t);let r=t.length;e.forEach(Na);for(let a=0;a<e.length;a++)i.push(r),r+=e[a].length,Fa(n,e[a]);let o=Sp.triangulate(n,i);for(let a=0;a<o.length;a+=3)s.push(o.slice(a,a+3));return s}}function Na(t){let e=t.length;if(e>2&&t[e-1].equals(t[0]))t.pop()}function Fa(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class fr extends Xe{constructor(t=new ur([new Et(0.5,0.5),new Et(-0.5,0.5),new Et(-0.5,-0.5),new Et(0.5,-0.5)]),e={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let o=0,a=t.length;o<a;o++){let c=t[o];r(c)}this.setAttribute("position",new ve(i,3)),this.setAttribute("uv",new ve(s,2)),this.computeVertexNormals();function r(o){let a=[],c=e.curveSegments!==void 0?e.curveSegments:12,l=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:0.2,p=e.bevelSize!==void 0?e.bevelSize:d-0.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,y=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,m=e.UVGenerator!==void 0?e.UVGenerator:zp,w,_=!1,C,D,I,R;if(f)w=f.getSpacedPoints(l),_=!0,u=!1,C=f.computeFrenetFrames(l,!1),D=new O,I=new O,R=new O;if(!u)y=0,d=0,p=0,g=0;let z=o.extractPoints(c),{shape:M,holes:v}=z;if(!gs.isClockWise(M)){M=M.reverse();for(let ut=0,xt=v.length;ut<xt;ut++){let N=v[ut];if(gs.isClockWise(N))v[ut]=N.reverse()}}let W=gs.triangulateShape(M,v),J=M;for(let ut=0,xt=v.length;ut<xt;ut++){let N=v[ut];M=M.concat(N)}function et(ut,xt,N){if(!xt)console.error("THREE.ExtrudeGeometry: vec does not exist");return ut.clone().addScaledVector(xt,N)}let X=M.length,V=W.length;function nt(ut,xt,N){let Bt,_t,It,ht=ut.x-xt.x,Mt=ut.y-xt.y,wt=N.x-ut.x,zt=N.y-ut.y,U=ht*ht+Mt*Mt,E=ht*zt-Mt*wt;if(Math.abs(E)>Number.EPSILON){let Y=Math.sqrt(U),at=Math.sqrt(wt*wt+zt*zt),dt=xt.x-Mt/Y,rt=xt.y+ht/Y,Wt=N.x-zt/at,yt=N.y+wt/at,Tt=((Wt-dt)*zt-(yt-rt)*wt)/(ht*zt-Mt*wt);Bt=dt+ht*Tt-ut.x,_t=rt+Mt*Tt-ut.y;let ie=Bt*Bt+_t*_t;if(ie<=2)return new Et(Bt,_t);else It=Math.sqrt(ie/2)}else{let Y=!1;if(ht>Number.EPSILON){if(wt>Number.EPSILON)Y=!0}else if(ht<-Number.EPSILON){if(wt<-Number.EPSILON)Y=!0}else if(Math.sign(Mt)===Math.sign(zt))Y=!0;if(Y)Bt=-Mt,_t=ht,It=Math.sqrt(U);else Bt=ht,_t=Mt,It=Math.sqrt(U/2)}return new Et(Bt/It,_t/It)}let q=[];for(let ut=0,xt=J.length,N=xt-1,Bt=ut+1;ut<xt;ut++,N++,Bt++){if(N===xt)N=0;if(Bt===xt)Bt=0;q[ut]=nt(J[ut],J[N],J[Bt])}let tt=[],lt,Ct=q.concat();for(let ut=0,xt=v.length;ut<xt;ut++){let N=v[ut];lt=[];for(let Bt=0,_t=N.length,It=_t-1,ht=Bt+1;Bt<_t;Bt++,It++,ht++){if(It===_t)It=0;if(ht===_t)ht=0;lt[Bt]=nt(N[Bt],N[It],N[ht])}tt.push(lt),Ct=Ct.concat(lt)}for(let ut=0;ut<y;ut++){let xt=ut/y,N=d*Math.cos(xt*Math.PI/2),Bt=p*Math.sin(xt*Math.PI/2)+g;for(let _t=0,It=J.length;_t<It;_t++){let ht=et(J[_t],q[_t],Bt);Ft(ht.x,ht.y,-N)}for(let _t=0,It=v.length;_t<It;_t++){let ht=v[_t];lt=tt[_t];for(let Mt=0,wt=ht.length;Mt<wt;Mt++){let zt=et(ht[Mt],lt[Mt],Bt);Ft(zt.x,zt.y,-N)}}}let Ot=p+g;for(let ut=0;ut<X;ut++){let xt=u?et(M[ut],Ct[ut],Ot):M[ut];if(!_)Ft(xt.x,xt.y,0);else I.copy(C.normals[0]).multiplyScalar(xt.x),D.copy(C.binormals[0]).multiplyScalar(xt.y),R.copy(w[0]).add(I).add(D),Ft(R.x,R.y,R.z)}for(let ut=1;ut<=l;ut++)for(let xt=0;xt<X;xt++){let N=u?et(M[xt],Ct[xt],Ot):M[xt];if(!_)Ft(N.x,N.y,h/l*ut);else I.copy(C.normals[ut]).multiplyScalar(N.x),D.copy(C.binormals[ut]).multiplyScalar(N.y),R.copy(w[ut]).add(I).add(D),Ft(R.x,R.y,R.z)}for(let ut=y-1;ut>=0;ut--){let xt=ut/y,N=d*Math.cos(xt*Math.PI/2),Bt=p*Math.sin(xt*Math.PI/2)+g;for(let _t=0,It=J.length;_t<It;_t++){let ht=et(J[_t],q[_t],Bt);Ft(ht.x,ht.y,h+N)}for(let _t=0,It=v.length;_t<It;_t++){let ht=v[_t];lt=tt[_t];for(let Mt=0,wt=ht.length;Mt<wt;Mt++){let zt=et(ht[Mt],lt[Mt],Bt);if(!_)Ft(zt.x,zt.y,h+N);else Ft(zt.x,zt.y+w[l-1].y,w[l-1].x+N)}}}ct(),it();function ct(){let ut=i.length/3;if(u){let xt=0,N=X*xt;for(let Bt=0;Bt<V;Bt++){let _t=W[Bt];gt(_t[2]+N,_t[1]+N,_t[0]+N)}xt=l+y*2,N=X*xt;for(let Bt=0;Bt<V;Bt++){let _t=W[Bt];gt(_t[0]+N,_t[1]+N,_t[2]+N)}}else{for(let xt=0;xt<V;xt++){let N=W[xt];gt(N[2],N[1],N[0])}for(let xt=0;xt<V;xt++){let N=W[xt];gt(N[0]+X*l,N[1]+X*l,N[2]+X*l)}}n.addGroup(ut,i.length/3-ut,0)}function it(){let ut=i.length/3,xt=0;Gt(J,xt),xt+=J.length;for(let N=0,Bt=v.length;N<Bt;N++){let _t=v[N];Gt(_t,xt),xt+=_t.length}n.addGroup(ut,i.length/3-ut,1)}function Gt(ut,xt){let N=ut.length;while(--N>=0){let Bt=N,_t=N-1;if(_t<0)_t=ut.length-1;for(let It=0,ht=l+y*2;It<ht;It++){let Mt=X*It,wt=X*(It+1),zt=xt+Bt+Mt,U=xt+_t+Mt,E=xt+_t+wt,Y=xt+Bt+wt;Kt(zt,U,E,Y)}}}function Ft(ut,xt,N){a.push(ut),a.push(xt),a.push(N)}function gt(ut,xt,N){re(ut),re(xt),re(N);let Bt=i.length/3,_t=m.generateTopUV(n,i,Bt-3,Bt-2,Bt-1);jt(_t[0]),jt(_t[1]),jt(_t[2])}function Kt(ut,xt,N,Bt){re(ut),re(xt),re(Bt),re(xt),re(N),re(Bt);let _t=i.length/3,It=m.generateSideWallUV(n,i,_t-6,_t-3,_t-2,_t-1);jt(It[0]),jt(It[1]),jt(It[3]),jt(It[1]),jt(It[2]),jt(It[3])}function re(ut){i.push(a[ut*3+0]),i.push(a[ut*3+1]),i.push(a[ut*3+2])}function jt(ut){s.push(ut.x),s.push(ut.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Gp(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}let i=t.options.extrudePath;if(i!==void 0)t.options.extrudePath=new to[i.type]().fromJSON(i);return new fr(n,t.options)}}var zp={generateTopUV:function(t,e,n,i,s){let r=e[n*3],o=e[n*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new Et(r,o),new Et(a,c),new Et(l,h)]},generateSideWallUV:function(t,e,n,i,s,r){let o=e[n*3],a=e[n*3+1],c=e[n*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],y=e[r*3],f=e[r*3+1],m=e[r*3+2];if(Math.abs(a-h)<Math.abs(o-l))return[new Et(o,1-c),new Et(l,1-u),new Et(d,1-g),new Et(y,1-m)];else return[new Et(a,1-c),new Et(h,1-u),new Et(p,1-g),new Et(f,1-m)]}};function Gp(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);if(n.options=Object.assign({},e),e.extrudePath!==void 0)n.options.extrudePath=e.extrudePath.toJSON();return n}class Mo extends lr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e);this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Mo(t.radius,t.detail)}}class So extends Xe{constructor(t=0.5,e=1,n=32,i=1,s=0,r=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);let o=[],a=[],c=[],l=[],h=t,u=(e-t)/i,d=new O,p=new Et;for(let g=0;g<=i;g++){for(let y=0;y<=n;y++){let f=s+y/n*r;d.x=h*Math.cos(f),d.y=h*Math.sin(f),a.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,l.push(p.x,p.y)}h+=u}for(let g=0;g<i;g++){let y=g*(n+1);for(let f=0;f<n;f++){let m=f+y,w=m,_=m+n+1,C=m+n+2,D=m+1;o.push(w,_,D),o.push(_,C,D)}}this.setIndex(o),this.setAttribute("position",new ve(a,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new So(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Un extends Xe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let a=Math.min(r+o,Math.PI),c=0,l=[],h=new O,u=new O,d=[],p=[],g=[],y=[];for(let f=0;f<=n;f++){let m=[],w=f/n,_=0;if(f===0&&r===0)_=0.5/e;else if(f===n&&a===Math.PI)_=-0.5/e;for(let C=0;C<=e;C++){let D=C/e;h.x=-t*Math.cos(i+D*s)*Math.sin(r+w*o),h.y=t*Math.cos(r+w*o),h.z=t*Math.sin(i+D*s)*Math.sin(r+w*o),p.push(h.x,h.y,h.z),u.copy(h).normalize(),g.push(u.x,u.y,u.z),y.push(D+_,1-w),m.push(c++)}l.push(m)}for(let f=0;f<n;f++)for(let m=0;m<e;m++){let w=l[f][m+1],_=l[f][m],C=l[f+1][m],D=l[f+1][m+1];if(f!==0||r>0)d.push(w,_,D);if(f!==n-1||a<Math.PI)d.push(_,C,D)}this.setIndex(d),this.setAttribute("position",new ve(p,3)),this.setAttribute("normal",new ve(g,3)),this.setAttribute("uv",new ve(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pr extends Xe{constructor(t=1,e=0.4,n=12,i=48,s=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let r=[],o=[],a=[],c=[],l=new O,h=new O,u=new O;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){let g=p/i*s,y=d/n*Math.PI*2;h.x=(t+e*Math.cos(y))*Math.cos(g),h.y=(t+e*Math.cos(y))*Math.sin(g),h.z=e*Math.sin(y),o.push(h.x,h.y,h.z),l.x=t*Math.cos(g),l.y=t*Math.sin(g),u.subVectors(h,l).normalize(),a.push(u.x,u.y,u.z),c.push(p/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){let g=(i+1)*d+p-1,y=(i+1)*(d-1)+p-1,f=(i+1)*(d-1)+p,m=(i+1)*d+p;r.push(g,y,m),r.push(y,f,m)}this.setIndex(r),this.setAttribute("position",new ve(o,3)),this.setAttribute("normal",new ve(a,3)),this.setAttribute("uv",new ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class He extends ci{static get type(){return"MeshStandardMaterial"}constructor(t){super();this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vs extends ci{static get type(){return"MeshLambertMaterial"}constructor(t){super();this.isMeshLambertMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Qs(t,e,n){if(!t||!n&&t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function kp(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}class Ms{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let o=e[1];if(t<o)n=2,s=o;for(let a=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let o=n+r>>>1;if(t<e[o])r=o;else n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class wc extends Ms{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,o=i[s],a=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,o=2*e-n;break;case 2402:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,a=2*n-e;break;case 2402:r=1,a=n+i[1]-i[0];break;default:r=t-1,a=e}let c=(n-e)*0.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(a-n),this._offsetPrev=s*l,this._offsetNext=r*l}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),g=p*p,y=g*p,f=-u*y+2*u*g-u*p,m=(1+u)*y+(-1.5-2*u)*g+(-0.5+u)*p+1,w=(-1-d)*y+(1.5+d)*g+0.5*p,_=d*y-d*g;for(let C=0;C!==o;++C)s[C]=f*r[l+C]+m*r[c+C]+w*r[a+C]+_*r[h+C];return s}}class bc extends Ms{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=t*o,c=a-o,l=(n-e)/(i-e),h=1-l;for(let u=0;u!==o;++u)s[u]=r[c+u]*h+r[a+u]*l;return s}}class Ec extends Ms{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Hn{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qs(e,this.TimeBufferType),this.values=Qs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qs(t.times,Array),values:Qs(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let o=0;o!==s;o++){let a=n[o];if(typeof a==="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),t=!1;break}if(r!==null&&r>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,r),t=!1;break}r=a}if(i!==void 0){if(kp(i))for(let o=0,a=i.length;o!==a;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let o=1;o<s;++o){let a=!1,c=t[o],l=t[o+1];if(c!==l&&(o!==1||c!==t[0]))if(!i){let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let g=e[h+p];if(g!==e[u+p]||g!==e[d+p]){a=!0;break}}}else a=!0;if(a){if(o!==r){t[r]=t[o];let h=o*n,u=r*n;for(let d=0;d!==n;++d)e[u+d]=e[h+d]}++r}}if(s>0){t[r]=t[s];for(let o=s*n,a=r*n,c=0;c!==n;++c)e[a+c]=e[o+c];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=2301;class Ji extends Hn{constructor(t,e,n){super(t,e,n)}}Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=2300;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;class Tc extends Hn{}Tc.prototype.ValueTypeName="color";class Ac extends Hn{}Ac.prototype.ValueTypeName="number";class Rc extends Ms{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=(n-e)/(i-e),c=t*o;for(let l=c+o;c!==l;c+=4)Ln.slerpFlat(s,0,r,c-o,r,c,a);return s}}class wo extends Hn{InterpolantFactoryMethodLinear(t){return new Rc(this.times,this.values,this.getValueSize(),t)}}wo.prototype.ValueTypeName="quaternion";wo.prototype.InterpolantFactoryMethodSmooth=void 0;class $i extends Hn{constructor(t,e,n){super(t,e,n)}}$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=2300;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;class Cc extends Hn{}Cc.prototype.ValueTypeName="vector";class Ic{constructor(t,e,n){let i=this,s=!1,r=0,o=0,a=void 0,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){if(o++,s===!1){if(i.onStart!==void 0)i.onStart(l,r,o)}s=!0},this.itemEnd=function(l){if(r++,i.onProgress!==void 0)i.onProgress(l,r,o);if(r===o){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(l){if(i.onError!==void 0)i.onError(l)},this.resolveURL=function(l){if(a)return a(l);return l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,h){return c.push(l,h),this},this.removeHandler=function(l){let h=c.indexOf(l);if(h!==-1)c.splice(h,2);return this},this.getHandler=function(l){for(let h=0,u=c.length;h<u;h+=2){let d=c[h],p=c[h+1];if(d.global)d.lastIndex=0;if(d.test(l))return p}return null}}}var Hp=new Ic;class Pc{constructor(t){this.manager=t!==void 0?t:Hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Pc.DEFAULT_MATERIAL_NAME="__DEFAULT";class bo extends je{constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);if(e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0)e.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)e.object.distance=this.distance;if(this.angle!==void 0)e.object.angle=this.angle;if(this.decay!==void 0)e.object.decay=this.decay;if(this.penumbra!==void 0)e.object.penumbra=this.penumbra;if(this.shadow!==void 0)e.object.shadow=this.shadow.toJSON();if(this.target!==void 0)e.object.target=this.target.uuid;return e}}class Lc extends bo{constructor(t,e,n){super(t,n);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}var $r=new oe,Ba=new O,Oa=new O;class Dc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sr,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ba.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ba),Oa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oa),e.updateMatrixWorld(),$r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r),n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),n.multiply($r)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};if(this.intensity!==1)t.intensity=this.intensity;if(this.bias!==0)t.bias=this.bias;if(this.normalBias!==0)t.normalBias=this.normalBias;if(this.radius!==1)t.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)t.mapSize=this.mapSize.toArray();return t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Uc extends Dc{constructor(){super(new fo(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Eo extends bo{constructor(t,e){super(t,e);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.shadow=new Uc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}var To="\\[\\]\\.:\\/",Wp=new RegExp("["+To+"]","g"),Ao="[^"+To+"]",Vp="[^"+To.replace("\\.","")+"]",Xp=/((?:WC+[\/:])*)/.source.replace("WC",Ao),qp=/(WCOD+)?/.source.replace("WCOD",Vp),Yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ao),Zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ao),Jp=new RegExp("^"+Xp+qp+Yp+Zp+"$"),$p=["material","materials","bones","map"];class Nc{constructor(t,e,n){let i=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Ce{constructor(t,e,n){this.path=e,this.parsedPath=n||Ce.parseTrackName(e),this.node=Ce.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new Ce(t,e,n);else return new Ce.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wp,"")}static parseTrackName(t){let e=Jp.exec(t);if(e===null)throw Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if($p.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===e||o.uuid===e)return o;let a=n(o.children);if(a)return a}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=Ce.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===c){c=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[i];if(r===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;if(this.targetObject=t,t.needsUpdate!==void 0)o=this.Versioning.NeedsUpdate;else if(t.matrixWorldNeedsUpdate!==void 0)o=this.Versioning.MatrixWorldNeedsUpdate;let a=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}a=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)a=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))a=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ce.Composite=Nc;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lm=new Float32Array(1);if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="170";function Ro(t,e=!1){let n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),s=new Set(Object.keys(t[0].morphAttributes)),r={},o={},a=t[0].morphTargetsRelative,c=new Xe,l=0;for(let h=0;h<t.length;++h){let u=t[h],d=0;if(n!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;if(r[p]===void 0)r[p]=[];r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(o[p]===void 0)o[p]=[];o[p].push(u.morphAttributes[p])}if(e){let p;if(n)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(n){let h=0,u=[];for(let d=0;d<t.length;++d){let p=t[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=t[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Fc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let y=0;y<o[h].length;++y)p.push(o[h][y][d]);let g=Fc(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Fc(t){let e,n,i,s=-1,r=0;for(let l=0;l<t.length;++l){let h=t[l];if(e===void 0)e=h.array.constructor;if(e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0)n=h.itemSize;if(n!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0)i=h.normalized;if(i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1)s=h.gpuType;if(s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*n}let o=new e(r),a=new tn(o,n,i),c=0;for(let l=0;l<t.length;++l){let h=t[l];if(h.isInterleavedBufferAttribute){let u=c/n;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<n;g++){let y=h.getComponent(d,g);a.setComponent(d+u,g,y)}}else o.set(h.array,c);c+=h.count*n}if(s!==void 0)a.gpuType=s;return a}var he=(t,e=0,n=1)=>Math.min(n,Math.max(e,t)),$t=(t,e,n)=>t+(e-t)*n,Ee=(t,e,n)=>{let i=he((n-t)/(e-t));return i*i*(3-2*i)},Oc=(t)=>(t=he(t),t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2);var an=(t,e,n)=>he((t-e)/(n-e)),Xt=(t,e,n)=>Oc(an(t,e,n)),Nn=(t,e,n,i=0.4)=>Ee(e,e+i,t)*(1-Ee(n-i,n,t));function se(t){let e=Math.sin(t*127.1+311.7)*43758.5453123;return e-Math.floor(e)}function Ki(t){return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Io=typeof window<"u"&&window.CUES?window.CUES:{segs:{},scenes:{},words:{}};var qe=(t)=>{let e=Io.segs[t];return e?[e[0],e[0]+e[1]]:[0,0]},bi=(t)=>{let e=Io.scenes[t];return e?[e[0],e[0]+e[1]]:[0,0]},mt=(t,e,n=1)=>{let i=Io.words[t]||[],s=0;for(let[r,o]of i)if(r===e&&++s===n)return o;s=0;for(let[r,o]of i)if(r.startsWith(e)&&++s===n)return o;return qe(t)[0]},Co=new Map;function qt(t,e={}){let n=t+JSON.stringify(e);if(Co.has(n))return Co.get(n);let i=new He({color:t,roughness:0.9,metalness:0,...e});return Co.set(n,i),i}function Ie(t=12168856,e={}){let n=new He({color:t,roughness:0.92,metalness:0}),i=e.course??0.85,s=e.len??1.7,r=e.tint??0.2;return n.onBeforeCompile=(o)=>{o.uniforms.uDamp={value:0},n.userData.shader=o,o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP; varying vec3 vWN;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 vWP = (modelMatrix * vec4(transformed,1.0)).xyz;
#ifdef USE_INSTANCING
 vWP = (modelMatrix * instanceMatrix * vec4(transformed,1.0)).xyz;
#endif
 vWN = normalize(mat3(modelMatrix) * objectNormal);`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP; varying vec3 vWN;
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float n21(vec2 p){ vec2 i=floor(p); vec2 f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
{
  vec3 an = abs(vWN);
  float u;
  if (an.y > 0.8) { u = vWP.x + floor(vWP.z/${i.toFixed(3)})*0.5; }
  else if (an.x > an.z) { u = vWP.z; } else { u = vWP.x; }
  float vv = (an.y > 0.8) ? vWP.z : vWP.y;
  float row = floor(vv / ${i.toFixed(3)});
  float uu = u / ${s.toFixed(3)} + mod(row, 2.0) * 0.5 + h21(vec2(row, 3.0))*0.3;
  float col = floor(uu);
  vec2 f = vec2(fract(uu), fract(vv / ${i.toFixed(3)}));
  float edge = min(min(f.x, 1.0 - f.x) * ${s.toFixed(3)}, min(f.y, 1.0 - f.y) * ${i.toFixed(3)});
  float mortar = 1.0 - smoothstep(0.012, 0.035, edge);
  float bv = h21(vec2(col, row));
  float grain = n21(vWP.xy * 3.1 + vWP.zx * 2.3) * 0.5 + n21(vWP.xz * 9.0 + vWP.y) * 0.5;
  vec3 c = diffuseColor.rgb * (1.0 - ${r.toFixed(3)} + bv * ${(r*2).toFixed(3)});
  c *= 0.86 + grain * 0.24;
  c = mix(c, vec3(0.58, 0.55, 0.5) * diffuseColor.rgb * 1.1, 0.0);
  c = mix(c, c * 0.72, mortar);
  float weather = n21(vWP.xz * 0.15 + vWP.y * 0.08) ;
  c *= 0.9 + weather * 0.18;
  c *= mix(0.85, 1.0, smoothstep(0.0, 4.0, vWP.y - 13.0));
  diffuseColor.rgb = c;
}`)},n.customProgramCacheKey=()=>"stone"+i+s+r,n}function Ei(t=5199972){let e=new He({color:t,roughness:0.7,metalness:0.05});return e.onBeforeCompile=(n)=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 vWP = (modelMatrix * vec4(transformed,1.0)).xyz;
#ifdef USE_INSTANCING
 vWP = (modelMatrix * instanceMatrix * vec4(transformed,1.0)).xyz;
#endif`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP;
float rh(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }`).replace("#include <color_fragment>",`#include <color_fragment>
{ float row = floor(vWP.y / 0.32); float uu = (vWP.x + vWP.z) / 0.45 + mod(row,2.0)*0.5; float col=floor(uu);
  float fy = fract(vWP.y/0.32); float fx = fract(uu);
  float line = 1.0 - smoothstep(0.0, 0.12, fy) ; float vline = 1.0 - smoothstep(0.0,0.06,min(fx,1.0-fx));
  diffuseColor.rgb *= (0.82 + rh(vec2(col,row))*0.3) * (1.0 - 0.35*max(line, vline*0.6)); }`)},e.customProgramCacheKey=()=>"roof"+t,e}function Me(t=8017204){let e=new He({color:t,roughness:0.85});return e.onBeforeCompile=(n)=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vLP = position;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLP;`).replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb *= 0.82 + 0.18*sin((vLP.x+vLP.z)*28.0 + sin(vLP.y*3.0)*2.0);`)},e.customProgramCacheKey=()=>"wood"+t,e}function Ti(t=3104618){let e=new He({color:t,roughness:0.12,metalness:0.1,transparent:!0,opacity:0.92});return e.userData.uniforms={uTime:{value:0},uSky:{value:new Ht(12375270)}},e.onBeforeCompile=(n)=>{Object.assign(n.uniforms,e.userData.uniforms),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 vWP = (modelMatrix * vec4(transformed,1.0)).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP; uniform float uTime; uniform vec3 uSky;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
{ vec2 p = vWP.xz; float t = uTime;
  float dx = sin(p.x*0.35 + t*1.3)*0.06 + sin(p.x*1.1 + p.y*0.7 + t*2.1)*0.035 + sin(p.y*2.3 - t*2.9)*0.02;
  float dz = cos(p.y*0.4 - t*1.1)*0.06 + cos(p.x*0.9 - p.y*1.3 + t*1.7)*0.035;
  normal = normalize(normal + (viewMatrix * vec4(dx, 0.0, dz, 0.0)).xyz); }`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
{ vec3 V = normalize(cameraPosition - vWP); float fr = pow(1.0 - clamp(V.y, 0.0, 1.0), 3.0);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, uSky, clamp(fr*0.75, 0.0, 0.75)); }`)},e.customProgramCacheKey=()=>"water"+t,e}function fe(t){return t.computeBoundingBox(),t.translate(0,-t.boundingBox.min.y,0),t}function Z(t,e,n,i=!0){let s=new te(t,e);if(s.castShadow=i,s.receiveShadow=!0,n)n.add(s);return s}function hi(t,e,n,i=0.4){let s=t/2+i,r=e/2+i,o=new ur;o.moveTo(-s,0),o.lineTo(s,0),o.lineTo(0,n),o.lineTo(-s,0);let a=new fr(o,{depth:r*2,bevelEnabled:!1});return a.translate(0,0,-r),a.computeVertexNormals(),a}function zc(t){let e=t.index?t.toNonIndexed():t.clone();for(let n of Object.keys(e.attributes))if(!["position","normal","uv","color"].includes(n))e.deleteAttribute(n);if(!e.attributes.uv)e.setAttribute("uv",new ve(new Float32Array(e.attributes.position.count*2),2));if(!e.attributes.normal)e.computeVertexNormals();return e}function Fn(t,{cast:e=!0}={}){t.updateMatrixWorld(!0);let n=new oe().copy(t.matrixWorld).invert(),i=new Map,s=[];t.traverse((r)=>{if(!r.isMesh||r.isInstancedMesh||r===t)return;let o=r.material;if(Array.isArray(o))return;let a=zc(r.geometry);if(a.applyMatrix4(new oe().multiplyMatrices(n,r.matrixWorld)),!i.has(o))i.set(o,[]);i.get(o).push(a),s.push(r)});for(let r of s)r.parent.remove(r);for(let[r,o]of i){let a=Ro(o,!1);if(!a)continue;let c=new te(a,r);c.castShadow=e,c.receiveShadow=!0,t.add(c)}return t}var Kp=new He({vertexColors:!0,roughness:0.85,metalness:0});function Bc(t){t.updateMatrixWorld(!0);let e=new oe().copy(t.matrixWorld).invert(),n=[],i=[],s=(a)=>{for(let c of[...a.children]){if(c.userData&&c.userData.pivot)continue;if(c.isMesh&&!c.isInstancedMesh){let l=zc(c.geometry);l.applyMatrix4(new oe().multiplyMatrices(e,c.matrixWorld));let h=c.material&&c.material.color||new Ht(1,1,1),u=l.attributes.position.count,d=new Float32Array(u*3);for(let p=0;p<u;p++)d[p*3]=h.r,d[p*3+1]=h.g,d[p*3+2]=h.b;l.setAttribute("color",new tn(d,3)),n.push(l),i.push(c)}if(!c.isMesh)s(c)}};s(t);for(let a of i)a.parent.remove(a);if(!n.length)return null;let r=Ro(n,!1),o=new te(r,Kp);return o.castShadow=!0,o.receiveShadow=!1,t.add(o),o}function Qi(t,e){for(let n of e)n.userData.pivot=!0;t.userData.pivot=!0;for(let n of e)Bc(n);Bc(t)}var kt=14,Qp=-1.6,Ss=(t)=>205+38*Math.sin(t/140)+12*Math.sin(t/47);function Gc(t,e){return Math.sin(t*0.013+1.3)*Math.cos(e*0.011-0.4)*1.1+Math.sin(t*0.031+e*0.027)*0.45+Math.sin(t*0.071-e*0.053+2)*0.18}function kc(t,e){let s=Math.abs(t)-40,r=Math.abs(e)-40,o=Math.max(s,0),a=Math.max(r,0);return Math.hypot(o,a)+Math.min(Math.max(s,r),0)-8+4}var mr=3.9;function jp(t,e){let n=Math.atan2(t,e);if(n<0)n+=Math.PI*2;return n/(Math.PI*2)}function $e(t,e){let n=Math.hypot(t,e),i=1-Ee(74,178,n),s=kt*Math.pow(i,1.15);s+=Gc(t,e)*Ee(70,130,n)*1.4,s+=Math.sin(t*0.004+0.7)*Math.cos(e*0.005)*2*Ee(160,300,n);let r=Math.abs(t-Ss(e));s-=4.6*(1-Ee(13,34,r))*Ee(60,120,n);let o=Math.hypot(t+225,e+70);s+=16*(1-Ee(10,60,o));let a=Math.atan2(e,t),c=Ee(520,900,n);return s+=c*(70+45*Math.sin(a*5+1.2)+25*Math.sin(a*13+0.3)+12*Math.sin(a*29)),s}function Lo(t,e,n=0){let i=$e(t,e);if(n>0){let s=Math.abs(kc(t,e));if(s<mr+1.5){let r=jp(t,e),o=he((n-r)*8+(n>=1?1:0)),a=1-Ee(mr-1.6,mr+0.6,s);i-=5.5*a*he(o)}}return i}var wn=[[0,52],[4,80],[14,108],[30,136],[58,160],[96,172],[140,168],[178,150]],Bn=[[-200,-52],[-182,-36],[-160,-20],[-130,-6],[-104,12],[-84,34],[-68,56],[-46,70],[-22,78],[4,82]];function ji(t,e,n){let i=1e9;for(let s=0;s<n.length-1;s++){let[r,o]=n[s],[a,c]=n[s+1],l=a-r,h=c-o,u=he(((t-r)*l+(e-o)*h)/(l*l+h*h)),d=r+l*u-t,p=o+h*u-e;i=Math.min(i,Math.hypot(d,p))}return i}function Ai(t,e){let n=[],i=0;for(let r=0;r<t.length-1;r++){let o=Math.hypot(t[r+1][0]-t[r][0],t[r+1][1]-t[r][1]);n.push(o),i+=o}let s=he(e)*i;for(let r=0;r<n.length;r++){if(s<=n[r]||r===n.length-1){let o=he(s/n[r]),a=$t(t[r][0],t[r+1][0],o),c=$t(t[r][1],t[r+1][1],o);return{x:a,z:c,dir:Math.atan2(t[r+1][0]-t[r][0],t[r+1][1]-t[r][1]),len:i}}s-=n[r]}return{x:t[0][0],z:t[0][1],dir:0,len:i}}var Po=[];{let t=Ki(7);for(let e=0;e<26;e++){let n=80+t()*150,i=190+t()*150;if(Math.abs(n-Ss(i))<40)continue;Po.push({cx:n,cz:i,w:18+t()*26,d:14+t()*30,rot:t()*0.6-0.3,c:Math.floor(t()*4)})}for(let e=0;e<16;e++){let n=-60-t()*170,i=150+t()*140;Po.push({cx:n,cz:i,w:18+t()*26,d:14+t()*30,rot:t()*0.6-0.3,c:Math.floor(t()*4)})}}var tm=[[0.78,0.68,0.33],[0.48,0.58,0.22],[0.45,0.33,0.2],[0.62,0.66,0.3]];function Hc(t,e){for(let n of Po){let i=Math.cos(n.rot),s=Math.sin(n.rot),r=(t-n.cx)*i-(e-n.cz)*s,o=(t-n.cx)*s+(e-n.cz)*i;if(Math.abs(r)<n.w/2&&Math.abs(o)<n.d/2){let a=Math.sin(r*1.6)*0.04,c=tm[n.c];return[c[0]+a,c[1]+a,c[2]+a]}}return null}function em(t,e,n){let i=Math.hypot(t,e),s=Gc(t*2.3,e*2.1),r=[0.3+s*0.03,0.45+s*0.05,0.17];if(i<90)r=[0.36+s*0.02,0.48+s*0.03,0.2];let o=Math.abs(t-Ss(e));if(o<44){let h=1-Ee(16,44,o);r=[$t(r[0],0.33,h),$t(r[1],0.36,h),$t(r[2],0.2,h)]}if(o<18)r=[0.36,0.31,0.22];let a=Hc(t,e);if(a)r=a;if(Math.min(ji(t,e,wn),99)<3.2)r=[0.47,0.4,0.3];let l=Math.hypot(t+225,e+70);if(l<42){let h=1-Ee(20,42,l);r=[$t(r[0],0.6,h),$t(r[1],0.57,h),$t(r[2],0.5,h)]}if(n>40){let h=Ee(40,90,n);r=[$t(r[0],0.45,h),$t(r[1],0.46,h),$t(r[2],0.44,h)]}if(n>120){let h=Ee(120,150,n);r=[$t(r[0],0.93,h),$t(r[1],0.94,h),$t(r[2],0.96,h)]}return r}function nm(t){return 1500*(0.78*t*t*t+0.22*t)/1*Math.sign(1)}function Wc(t){let i=new Float32Array(328683),s=new Float32Array(328683),r=[];for(let f=0;f<=330;f++)r.push(nm(f/330*2-1));for(let f=0;f<=330;f++)for(let m=0;m<=330;m++){let w=f*331+m,_=r[m],C=r[f],D=$e(_,C);i[w*3]=_,i[w*3+1]=D,i[w*3+2]=C;let I=em(_,C,D);s[w*3]=I[0],s[w*3+1]=I[1],s[w*3+2]=I[2]}let o=[];for(let f=0;f<330;f++)for(let m=0;m<330;m++){let w=f*331+m,_=w+1,C=w+330+1,D=C+1;o.push(w,C,_,_,C,D)}let a=new Xe;a.setAttribute("position",new tn(i,3)),a.setAttribute("color",new tn(s,3)),a.setIndex(o),a.computeVertexNormals();let c=s.slice(),l=new vs({vertexColors:!0});l.onBeforeCompile=(f)=>{f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 vWP = (modelMatrix * vec4(transformed,1.0)).xyz;`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP;
float gh(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float gn(vec2 p){vec2 i=floor(p);vec2 f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(gh(i),gh(i+vec2(1,0)),f.x),mix(gh(i+vec2(0,1)),gh(i+vec2(1,1)),f.x),f.y);}`).replace("#include <color_fragment>",`#include <color_fragment>
 float gg = gn(vWP.xz*0.9)*0.5 + gn(vWP.xz*3.7)*0.3 + gn(vWP.xz*0.12)*0.6; diffuseColor.rgb *= 0.78 + gg*0.32;`)},l.customProgramCacheKey=()=>"terrain";let h=new te(a,l);h.receiveShadow=!0,t.add(h);let u=[];for(let f=0;f<109561;f++){let m=i[f*3],w=i[f*3+2];if(Math.abs(kc(m,w))<mr+2)u.push(f)}let d=-1;function p(f){let m=Math.round(f*400)/400;if(m===d)return;d=m;for(let w of u){let _=i[w*3],C=i[w*3+2],D=Lo(_,C,m),I=$e(_,C);i[w*3+1]=D;let R=he((I-D)/2);s[w*3]=$t(c[w*3],0.36,R),s[w*3+1]=$t(c[w*3+1],0.27,R),s[w*3+2]=$t(c[w*3+2],0.17,R)}a.attributes.position.needsUpdate=!0,a.attributes.color.needsUpdate=!0,a.computeVertexNormals()}let g=Ti(3497830),y=new te(new Sn(3000,3000).rotateX(-Math.PI/2),g);return y.position.y=Qp,y.receiveShadow=!0,t.add(y),{terrain:h,setMoat:p,water:y,waterMat:g}}function gr(t,e,n,i=0.12,s=$e){let r=[],o=220;for(let d=0;d<=220;d++)r.push(Ai(t,d/220));let a=[],c=[],l=[];for(let d=0;d<=220;d++){let p=r[d],g=Math.cos(p.dir),y=-Math.sin(p.dir);for(let f of[-1,1]){let m=p.x+g*f*e/2,w=p.z+y*f*e/2;a.push(m,s(m,w)+i,w),c.push((f+1)/2,d/220*p.len/e)}if(d<220){let f=d*2;l.push(f,f+2,f+1,f+1,f+2,f+3)}}let h=new Xe;h.setAttribute("position",new ve(a,3)),h.setAttribute("uv",new ve(c,2)),h.setIndex(l),h.computeVertexNormals();let u=new te(h,n);return u.receiveShadow=!0,u}function Vc(t){let e=Ki(42),n=new dn(2.6,8,7);n.translate(0,6.5,0);let i=new dn(2,6,7);i.translate(0,9.5,0);let s=new ae(0.3,0.45,3.2,5);s.translate(0,1.6,0);let r=new Mo(3.6,1);r.translate(0,6.2,0);let o=[],a=9000;for(let p=0;p<a&&o.length<2600;p++){let g=(e()*2-1)*650,y=(e()*2-1)*650;if(Math.hypot(g,y)<165)continue;if(Math.abs(g-Ss(y))<30)continue;if(ji(g,y,wn)<10||ji(g,y,Bn)<12)continue;if(Hc(g,y))continue;if(Math.hypot(g-150,y-150)<60)continue;if(Math.hypot(g-36,y-162)<30)continue;if(Math.hypot(g+225,y+70)<50)continue;if(Math.sin(g*0.012+0.5)*Math.cos(y*0.01+1.1)+Math.sin((g+y)*0.007)*0.6<-0.15&&e()>0.12)continue;let w=$e(g,y);if(w>70)continue;o.push([g,w,y,0.7+e()*0.7,e()<0.55?0:1,e()*6.28])}for(let p=0;p<140;p++){let g=e()*6.28,y=110+e()*50,f=Math.cos(g)*y,m=Math.sin(g)*y;if(ji(f,m,wn)<10||ji(f,m,Bn)<12)continue;if(Math.hypot(f-36,m-162)<30)continue;o.push([f,$e(f,m),m,0.6+e()*0.5,1,e()*6.28])}let c=new vs({color:16777215,flatShading:!0}),l=new vs({color:16777215,flatShading:!0}),h=new vs({color:4863012}),u=(p,g,y)=>{if(!y.length)return;let f=new ke(p,g,y.length),m=new oe,w=new Ln,_=new O,C=new O;y.forEach((D,I)=>{w.setFromAxisAngle(new O(0,1,0),D[5]),_.set(D[3],D[3]*(0.9+se(D[6])*0.3),D[3]),C.set(D[0],D[1]-0.3,D[2]),m.compose(C,w,_),f.setMatrixAt(I,m);let R=new Ht().setHSL(0.27+se(D[6]*3.1)*0.06,0.45,0.2+se(D[6]*7.7)*0.1);f.setColorAt(I,R)}),f.castShadow=!0,f.receiveShadow=!0,f.computeBoundingSphere(),t.add(f)};o.forEach((p,g)=>p.push(g));let d=new Map;for(let p of o){let g=Math.floor(p[0]/120)+","+Math.floor(p[2]/120);if(!d.has(g))d.set(g,[]);d.get(g).push(p)}for(let p of d.values()){let g=p.filter((f)=>f[4]===0),y=p.filter((f)=>f[4]===1);u(n,l,g),u(i,l,g),u(s,h,p),u(r,c,y)}return o}function Xc(t){let e=Ki(99),n=new Lt,i=fe(new ot(1,1,1)),s=hi(1,1,0.75,0.08),r=[];for(let w=0;w<34;w++){let _=e()*6.28,C=8+e()*42,D=150+Math.cos(_)*C,I=152+Math.sin(_)*C;if(Math.abs(D-Ss(I))<26)continue;if(ji(D,I,wn)<5)continue;r.push({x:D,z:I,w:5+e()*4,d:7+e()*5,h:3+e()*2.2,rot:Math.round(e()*4)*(Math.PI/2)+(e()-0.5)*0.3,thatch:e()<0.7})}let o=new ke(i,new He({color:16777215,roughness:0.95}),r.length),a=new ke(s,new He({color:16777215,roughness:0.9}),r.length),c=new oe,l=new Ln,h=new O,u=new O;r.forEach((w,_)=>{let C=$e(w.x,w.z)-0.4;l.setFromAxisAngle(new O(0,1,0),w.rot),u.set(w.x,C,w.z),h.set(w.w,w.h+0.4,w.d),c.compose(u,l,h),o.setMatrixAt(_,c),o.setColorAt(_,new Ht().setHSL(0.1,0.25,0.7+se(_)*0.12)),u.set(w.x,C+w.h+0.4,w.z),h.set(w.w*1.15,w.w*0.9,w.d*1.12),c.compose(u,l,h),a.setMatrixAt(_,c),a.setColorAt(_,w.thatch?new Ht(10124360).offsetHSL(0,0,se(_*2)*0.08-0.04):new Ht(9062962))});for(let w of[o,a])w.castShadow=w.receiveShadow=!0,n.add(w);let d=Ie(12761250),p=$e(165,128);Z(fe(new ot(9,8,20)),d,n).position.set(165,p-0.5,128),Z(hi(9,20,6),Ei(5791850),n).position.set(165,p+7.5,128),Z(fe(new ot(6,18,6)),d,n).position.set(165,p-0.5,116);let m=Z(fe(new dn(4.6,10,4)),Ei(5791850),n);return m.rotation.y=Math.PI/4,m.position.set(165,p+17.5,116),t.add(n),Fn(n),n}var qc=new O(0,1,0),ws=11,mn=3,Yc=18,On=5.6;function Zc(t){let e=new Lt;t.add(e);let n=Ie(12432028),i=Ie(10984840),s=Ie(10195583,{course:0.7,len:1.4}),r=Ei(5332073),o=Ei(9129270),a=Me(8017204),c=Me(5913893),l=new un({color:854793}),h={};function u(x,T,P,L,B,j={}){let pt=new Lt;pt.position.set(T,kt-0.6,P);let At=Z(L,B,pt);return e.add(pt),h[x]={group:pt,mesh:At,...j,details:[]},h[x]}let d=[["wN",0,-30,60,!0],["wE",30,0,60,!1],["wW",-30,0,60,!1],["wSW",-19.5,30,21,!0],["wSE",19.5,30,21,!0]],p=fe(new ot(1.35,1.3,0.75)),g=new ot(0.28,1.7,0.4),y=[];for(let[x,T,P,L,B]of d){let j=fe(B?new ot(L,ws+0.6,mn):new ot(mn,ws+0.6,L)),pt=u(x,T,P,j,n,{kind:"wall"}),At=B?0:Math.sign(T),St=B?Math.sign(P):0,ee=Z(fe(B?new ot(L,1.1,0.7):new ot(0.7,1.1,L)),n,null);ee.position.set(At*(mn/2-0.35),ws+0.6,St*(mn/2-0.35));let pe=Math.floor(L/2.6),Pt=new ke(p,n,pe),Vt=new oe;for(let Te=0;Te<pe;Te++){let ye=-L/2+1.3+Te*2.6+(L-pe*2.6)/2;Vt.makeRotationY(B?0:Math.PI/2),Vt.setPosition(B?ye:At*(mn/2-0.37),ws+1.7,B?St*(mn/2-0.37):ye),Pt.setMatrixAt(Te,Vt)}Pt.castShadow=Pt.receiveShadow=!0;let bt=new Lt;bt.add(ee,Pt),pt.group.add(bt),pt.crown=bt;let Se=new Lt;for(let Te=0;Te<Math.floor(L/9);Te++){let ye=-L/2+4.5+Te*9;for(let Be of[4.2,8]){if(Be===8&&Te%2)continue;let Le=new te(g,l);if(Le.position.set(B?ye:At*(mn/2),Be,B?St*(mn/2):ye),!B)Le.rotation.y=Math.PI/2;Se.add(Le)}}pt.group.add(Se),pt.slits=Se,y.push({name:x,cx:T,cz:P,len:L,ax:B,nx:At,nz:St})}let f=[["tNW",-30,-30],["tNE",30,-30],["tSW",-30,30],["tSE",30,30]],m=(x,T,P)=>{let L=new ke(p,n,P),B=new oe;for(let j=0;j<P;j++){let pt=j/P*Math.PI*2;B.makeRotationY(-pt+Math.PI/2),B.setPosition(Math.cos(pt)*(x-0.35),T,Math.sin(pt)*(x-0.35)),L.setMatrixAt(j,B)}return L.castShadow=!0,L},w=(x,T,P,L,B,j,pt)=>{let At=fe(new ae(L,L*1.1,B+0.6,32,1)),St=u(x,T,P,At,n,{kind:"tower"}),ee=new Lt,pe=Z(fe(new ae(L+0.15,L+0.15,1.1,32,1,!0)),n,ee);pe.position.y=B+0.6;let Pt=Z(fe(new ae(L+0.2,L-0.1,0.8,32)),i,ee);Pt.position.y=B-0.3,ee.add(m(L+0.15,B+1.7,Math.round(2*Math.PI*L/2.6))),St.group.add(ee),St.crown=ee;let Vt=new Lt,bt=Z(fe(new dn(L+1,j,32,1)),pt,Vt);bt.position.y=B+1.6;let Se=Z(new ae(0.06,0.06,2.2,5),qt(3815994,{metalness:0.6,roughness:0.4}),Vt);Se.position.y=B+1.6+j+1,St.group.add(Vt),St.roof=Vt;let Te=new Lt;for(let ye=0;ye<8;ye++){let Be=ye/8*Math.PI*2+0.2;for(let Le of[5,10.5]){if((ye+(Le>6?1:0))%2)continue;let ze=new te(g,l);ze.position.set(Math.cos(Be)*(L*1.05),Le,Math.sin(Be)*(L*1.05)),ze.rotation.y=-Be+Math.PI/2,Te.add(ze)}}return St.group.add(Te),St.slits=Te,St};for(let[x,T,P]of f)w(x,T,P,On,Yc,9,r);{let x=u("tSq",-31,0,fe(new ot(10,17.6,10)),n,{kind:"tower"}),T=new Lt,P=new ke(p,n,16),L=new oe,B=0;for(let St=0;St<4;St++)for(let ee=0;ee<4;ee++){let pe=-3.9+ee*2.6,Pt=St*Math.PI/2;L.makeRotationY(Pt);let Vt=pe,bt=4.62;L.setPosition(Math.cos(Pt)*Vt+Math.sin(Pt)*bt,18.7,-Math.sin(Pt)*Vt+Math.cos(Pt)*bt),P.setMatrixAt(B++,L)}P.castShadow=!0,T.add(P),x.group.add(T),x.crown=T;let j=new Lt,pt=Z(fe(new dn(7.9,7,4,1)),r,j);pt.rotation.y=Math.PI/4,pt.position.y=18.6,x.group.add(j),x.roof=j;let At=new Lt;for(let St of[5,11]){let ee=new te(g,l);ee.position.set(-5.05,St,0),ee.rotation.y=Math.PI/2,At.add(ee)}x.group.add(At),x.slits=At}let _=new Lt;_.position.set(0,kt-0.6,0),e.add(_);let C=[];{let T=Z(fe(new ot(4.5,14,10)),n,_);T.position.set(-4.25,0,32.5);let P=Z(fe(new ot(4.5,14,10)),n,_);P.position.set(4.25,0,32.5);let L=Z(fe(new ot(4,7.6,10)),n,_);L.position.set(0,6.4,32.5),Z(new ot(4,0.2,10),qt(5984581),_).position.set(0,0.6,32.5);let j=new Lt;for(let me=0;me<3;me++){let b=new te(new ot(0.9,0.05,0.9),l);b.position.set(0,6.37,30+me*2.4),j.add(b)}_.add(j);for(let me of[37.55,27.45]){let b=new te(new ae(2,2,0.12,20,1,!1,0,Math.PI),l);b.rotation.x=Math.PI/2,b.rotation.z=Math.PI/2,b.position.set(0,6.4,me),b.scale.set(1,1,0.55),_.add(b)}let pt=new Lt,At=new ke(p,n,5),St=new oe;for(let me=0;me<5;me++)St.makeTranslation(-5.2+me*2.6,14,37.2),At.setMatrixAt(me,St);pt.add(At),_.add(pt),C.push(T,P,L);let ee=fe(new ae(4.6,5,17.6,28)),pe=Z(ee,n,_);pe.position.set(-7.2,0,35),Z(ee,n,_).position.set(7.2,0,35);let Vt=m(4.75,18.7,11);Vt.position.set(-7.2,0,35);let bt=m(4.75,18.7,11);bt.position.set(7.2,0,35),pt.add(Vt,bt);let Se=new Lt,Te=[];for(let me of[-7.2,7.2]){let b=Z(fe(new dn(5.6,8,28)),r,Se);b.position.set(me,18.5,35),Te.push(b)}_.add(Se),h.gate={group:_,crown:pt,roof:Se,kind:"gate",details:[]},h.gate.holes=j,h.gate.cutSide=T,h.gate.cutParts=[T,pe,Vt,Te[0]];let ye=new Lt,Be=qt(3878953,{roughness:0.7,metalness:0.3});for(let me=0;me<6;me++){let b=new te(new ot(0.18,6.2,0.18),Be);b.position.set(-1.75+me*0.7,3.1,0),b.castShadow=!0,ye.add(b)}for(let me=0;me<7;me++){let b=new te(new ot(4,0.16,0.16),Be);b.position.set(0,0.4+me*0.9,0.05),ye.add(b)}for(let me=0;me<6;me++){let b=new te(new dn(0.12,0.45,4),Be);b.rotation.x=Math.PI,b.position.set(-1.75+me*0.7,-0.2,0),ye.add(b)}ye.position.set(0,0.7,35.6),_.add(ye),h.gate.portcullis=ye;let Le=[];for(let me of[-1,1]){let b=new Lt;b.position.set(me*2,0.7,33.4),Z(new ot(2,5.8,0.3),c,b).position.set(-me*1,2.9,0);for(let K=0;K<4;K++){let Q=new te(new ot(2.02,0.15,0.34),Be);Q.position.set(-me*1,0.8+K*1.4,0),b.add(Q)}_.add(b),Le.push(b)}let ze=Z(new ot(4.6,0.32,0.32),a,_);ze.position.set(0,3.2,33.1),h.gate.doors=Le,h.gate.bar=ze;let en=new Lt;en.position.set(0,0.75,37.7),Z(new ot(4.2,0.45,11),a,en).position.set(0,0,5.5);for(let me=0;me<4;me++)Z(new ot(4.25,0.08,0.25),c,en).position.set(0,0.25,1+me*3);_.add(en),h.gate.bridge=en;let ts=qt(2763306,{metalness:0.7,roughness:0.45});h.gate.chains=[-1,1].map((me)=>{let b=new te(new ae(0.07,0.07,1,5),ts);return _.add(b),{mesh:b,sgn:me}})}{let x=w("keep",13,-13,8,30,13,r);for(let L=0;L<6;L++){let B=L/6*Math.PI*2,j=new te(new ot(0.8,1.6,0.4),l);j.position.set(Math.cos(B)*8.45,20+L%2*4,Math.sin(B)*8.45),j.rotation.y=-B+Math.PI/2,x.slits.add(j)}let T=new te(new Sn(4,2.4,10,2),new He({color:2047882,side:za,roughness:0.8}));T.geometry.translate(2,0,0),T.position.set(0,45.6,0),x.roof.add(T),Z(new ae(0.08,0.08,4,5),qt(3815994),x.roof).position.set(0,45,0),x.flag=T,x.flagBase=T.geometry.attributes.position.array.slice()}let D=new te(new Sn(57,57).rotateX(-Math.PI/2),new He({color:9075294,roughness:1,transparent:!0,opacity:0}));D.position.set(0,kt+0.04,0),D.receiveShadow=!0,e.add(D);let I=new Lt;e.add(I);let R=(x,T,P,L,B,j,pt,At,St=0,ee=null)=>{let pe=new Lt;pe.position.set(T,kt-0.4,P),pe.rotation.y=St;let Pt=Z(fe(new ot(L,j+0.4,B)),pt,pe),Vt=Z(hi(B,L,ee??B*0.55,0.5),At,pe);return Vt.rotation.y=Math.PI/2,Vt.position.y=j+0.4,I.add(pe),h[x]={group:pe,body:Pt,roof:Vt,kind:"bld",details:[]},h[x]},z=qt(14273712),M=R("hall",-12,-24.2,28,8.5,9,n,r);for(let x=0;x<6;x++){let T=new te(new ot(1,2.2,0.3),l);T.position.set(-11+x*4.4,5.6,4.3),M.group.add(T)}let v=R("kitchen",-19,-9,9,7,5.5,i,o);Z(fe(new ot(1.4,4,1.4)),i,v.group).position.set(3,7,0),R("stables",24,6,6,20,4.2,a,o,0,2.2),R("granary",-23.5,14,7,15,6.2,z,r);for(let x=0;x<5;x++){let T=new te(new ot(0.25,6.4,0.2),c);T.position.set(3.55,3.2,-6+x*3),h.granary.group.add(T)}{let x=new Lt;x.position.set(-3,kt,8);let T=Z(new ae(1.4,1.5,1.1,20,1,!0),i,x);T.position.y=0.55;let P=new te(new li(1.3,20).rotateX(-Math.PI/2),l);P.position.y=0.2,x.add(P);for(let j of[-1.3,1.3])Z(new ot(0.22,3,0.22),a,x).position.set(j,1.5,0);let L=Z(new ae(0.15,0.15,2.8,8),a,x);L.rotation.z=Math.PI/2,L.position.y=2.2;let B=Z(hi(2.4,3.2,1,0.2),o,x);B.position.y=3,e.add(x),h.well={group:x,kind:"bld",details:[]}}{let x=new Lt,T=new ae(0.45,0.45,1.1,10),P=Me(7031340);for(let B=0;B<10;B++)Z(T,P,x).position.set(-18.5+B%5*1,kt+0.55,18+Math.floor(B/5)*1);let L=new Un(0.5,8,6);L.scale(1,0.7,0.8);for(let B=0;B<8;B++)Z(L,qt(13153418),x).position.set(-18.5+B%4*1,kt+0.35,9+Math.floor(B/4)*1.1);e.add(x),h.stores={group:x,kind:"bld",details:[]}}let W=Ti(3432554),J=new te(new Sn(100,100).rotateX(-Math.PI/2),W);J.position.y=kt-6,J.receiveShadow=!0,e.add(J);let et=[],X=(x,T,P,L,B=30)=>{for(let j=0;j<=B;j++)et.push(new O($t(x,P,j/B),kt+0.35,$t(T,L,j/B)))};X(-30,30,-30,-30),X(-30,-30,30,-30),X(30,-30,30,30),X(30,30,9,30,10),X(9,30,9,40,6),X(9,40,-9,40,6),X(-9,40,-9,30,6),X(-9,30,-30,30,10);let V=et.length-1,nt=new ke(new ot(1,0.12,0.22),new un({color:16182480}),V);{let x=new oe;for(let T=0;T<V;T++){let P=et[T],L=et[T+1],B=P.distanceTo(L);x.makeRotationY(-Math.atan2(L.z-P.z,L.x-P.x)),x.scale(new O(Math.max(B,0.01),1,1)),x.setPosition((P.x+L.x)/2,kt+0.3,(P.z+L.z)/2),nt.setMatrixAt(T,x)}}e.add(nt);let q=(()=>{let x=document.createElement("canvas");x.width=x.height=256;let T=x.getContext("2d"),P=T.createRadialGradient(128,128,40,128,128,128);return P.addColorStop(0,"rgba(255,255,255,1)"),P.addColorStop(0.75,"rgba(255,255,255,0.85)"),P.addColorStop(1,"rgba(255,255,255,0)"),T.fillStyle=P,T.fillRect(0,0,256,256),new fc(x)})(),tt=new te(new li(46,48).rotateX(-Math.PI/2),new He({color:9074262,roughness:1,transparent:!0,alphaMap:q,depthWrite:!1}));tt.position.set(0,kt+0.02,0),tt.scale.set(0.86,1,0.86),tt.receiveShadow=!0,e.add(tt);let lt=new un({color:11131125,transparent:!0,opacity:0.2,depthWrite:!1}),Ct=new ar({color:15267583,transparent:!0,opacity:0.5}),Ot=new Lt;for(let[x,T,P]of[[-30,-30,On],[30,-30,On],[-30,30,On],[30,30,On],[13,-13,8],[-7.2,35,4.6],[7.2,35,4.6],[-31,0,6]]){let L=[];for(let B=0;B<=40;B++)L.push(new O(x+Math.cos(B/40*6.283)*P,kt+0.35,T+Math.sin(B/40*6.283)*P));Ot.add(new dc(new Xe().setFromPoints(L),new ar({color:15984324})))}e.add(Ot);let ct=new ae(0.08,0.08,1.2,5);ct.translate(0,0.6,0);let it=new ke(ct,a,64);{let x=new oe,T=0;for(let P=0;P<et.length&&T<64;P+=2)x.makeTranslation(et[P].x,kt-0.2,et[P].z),it.setMatrixAt(T++,x);it.count=T}e.add(it);let Gt=qt(4075298),Ft=new Lt,gt=new Lt,Kt=[];for(let x of y){let T=new te(new ot(x.ax?x.len:mn+1.6,0.1,x.ax?mn+1.6:x.len),Gt);T.position.set(x.cx,kt+0.06,x.cz),Ft.add(T),Kt.push({mesh:T,w:x}),Z(fe(new ot(x.ax?x.len:mn+1.2,1.2,x.ax?mn+1.2:x.len)),s,gt).position.set(x.cx,kt-0.6,x.cz)}for(let[x,T,P]of[[-30,-30,On],[30,-30,On],[-30,30,On],[30,30,On],[13,-13,8],[-7.2,35,5],[7.2,35,5]]){let L=new te(new ae(P+0.8,P+0.8,0.1,28),Gt);L.position.set(x,kt+0.07,T),Ft.add(L),Kt.push({mesh:L,circle:!0}),Z(fe(new ae(P+0.6,P+0.6,1.2,28)),s,gt).position.set(x,kt-0.6,T)}{let x=new te(new ot(11,0.1,6.5),Gt);x.position.set(-31,kt+0.07,0),Ft.add(x),Kt.push({mesh:x}),Z(fe(new ot(11,1.2,11)),s,gt).position.set(-31,kt-0.6,0)}e.add(Ft,gt);let re=new dn(1.8,1.4,9);re.translate(0,0.5,0);let jt=new ke(re,qt(5915440),40);{let x=new oe;for(let T=0;T<40;T++){let P=T%4,L=-26+Math.floor(T/4)/9*52,B=34+se(T)*2,j=[[L,-B],[B,L],[L,B],[-B,L]][P];x.makeScale(1+se(T*3)*0.5,1+se(T*5)*0.4,1+se(T*3)*0.5),x.setPosition(j[0],kt-0.2,j[1]),jt.setMatrixAt(T,x)}}jt.castShadow=!0,e.add(jt);let ut=new ot(1.1,0.55,0.75),xt=260,N=new ke(ut,Ie(13024163),xt),Bt=[];{let x=new oe,T=[[-44,8],[-40,-18],[44,-14],[42,14],[-18,46],[20,50]];for(let P=0;P<xt;P++){let L=T[P%T.length],B=Math.floor(P/T.length),j=Math.floor(B/12),pt=B%12,At=L[0]+pt%4*1.2-1.8+j%2*0.3,St=L[1]+Math.floor(pt/4)*0.85-0.9;x.makeRotationY(j%2*0.05),x.setPosition(At,kt+0.28+j*0.56,St),Bt.push(x.clone()),N.setMatrixAt(P,x)}}N.castShadow=N.receiveShadow=!0,e.add(N);let _t=new ae(0.22,0.22,7,7);_t.rotateZ(Math.PI/2);let It=new ke(_t,Me(9069632),48);{let x=new oe;for(let T=0;T<48;T++){let P=Math.floor(T/24),L=T%24,B=Math.floor(L/6);if(x.makeRotationY(P?Math.PI/2:0),P)x.setPosition(-46+B*0.4,kt+0.25+B*0.42,-30+L%6*0.46);else x.setPosition(36+L%6*0,kt+0.25+B*0.42,46+L%6*0.46);It.setMatrixAt(T,x)}}It.castShadow=!0,e.add(It);let ht=new Lt;{Z(new ot(0.45,0.45,7),Me(11569754),ht).position.set(-43.5,kt+0.95,-29.5);for(let P of[-2.5,2.5])Z(new ot(1.2,0.75,0.25),Me(6965802),ht).position.set(-43.5,kt+0.37,-29.5+P);Z(new li(2.2,12).rotateX(-Math.PI/2),qt(14203014),ht,!1).position.set(-43.5,kt+0.04,-29.5)}e.add(ht);let Mt=new ae(0.09,0.09,1,5);Mt.translate(0,0.5,0);let wt=new ke(Mt,Me(10123858),1400),zt=new ot(1,0.08,0.9),U=new ke(zt,Me(11044442),500);wt.castShadow=U.castShadow=!0,e.add(wt,U);let E=new ke(new ot(1.15,0.6,0.9),Ie(13616299),400);E.castShadow=!0,e.add(E);let Y=Z(fe(new ot(3,9,3)),Ie(13221542),e);Y.position.set(-12,kt-0.4,-33);let at=new Lt;{let x=-12.5,T=9.5;for(let P=0;P<11;P++){let L=x+(se(P*9.1)-0.5)*1.6,B=T-0.75,j=Math.hypot(L-x,B-T),pt=new te(new ot(0.09,j+0.05,0.05),l);pt.position.set((x+L)/2,(T+B)/2,0),pt.rotation.z=Math.atan2(L-x,-(B-T))*-1,at.add(pt),x=L,T=B}at.position.set(0,kt-0.6,-31.53)}e.add(at);let dt=new te(new ot(1.6,2.6,0.2),l);dt.position.set(14,kt+0.7,-31.55),e.add(dt);let rt=Z(fe(new ot(1.7,2.7,0.3)),Ie(13813678),e);rt.position.set(14,kt-0.6,-31.6);let Wt=new te(new li(5,28).rotateX(-Math.PI/2),Ti(5008500));Wt.position.set(4,kt+0.08,2),e.add(Wt);let yt=new te(new ot(0.7,0.05,26),qt(7300696));yt.position.set(4,kt+0.09,16),e.add(yt);let Tt=new Lt;Z(new ot(0.5,0.5,1.6),i,Tt).position.set(0,0,0.8),Tt.position.set(33.95,kt+15.5,33.95),Tt.rotation.y=Math.PI/4,e.add(Tt);let ie=new ke(new Un(0.16,6,4),new He({color:10272976,roughness:0.1,transparent:!0,opacity:0.8}),40);e.add(ie);let ft=new oe,Dt=new Ln,de=new O,ne=new O,Ut=(x,T)=>{let P=Math.max(0.0001,T);if(x.group.visible=T>0.001,x.mesh)x.mesh.scale.y=P;if(x.crown)x.crown.visible=!1;if(x.slits)x.slits.visible=T>0.97};function ce(x,T){nt.visible=x.outline>0,nt.count=Math.floor(V*he(x.outline)),tt.visible=x.siteDirt>0.01,tt.material.opacity=he(x.siteDirt),Ot.visible=x.outline>0.98&&x.footing<0.5,it.visible=x.outline>0&&x.footing<0.9,it.count=Math.floor(30*he(x.outline*1.05)),Ft.visible=x.trench>0;for(let Pt of Kt)if(Pt.w){let Vt=Pt.w,bt=Vt.len*he(x.trench);Pt.mesh.scale.set(Vt.ax?Math.max(0.001,he(x.trench)):1,1,Vt.ax?1:Math.max(0.001,he(x.trench)))}else Pt.mesh.scale.setScalar(Math.max(0.001,he(x.trench*1.2)));jt.visible=x.trench>0.1&&x.moat<0.05,jt.count=Math.floor(40*he(x.trench)),gt.visible=x.footing>0,gt.children.forEach((Pt)=>Pt.scale.y=Math.max(0.001,x.footing));let P=x.walls;for(let Pt of y)Ut(h[Pt.name],P*(1-0.06*se(Pt.cx+Pt.cz))+(P>=1?0.06:0));for(let Pt of["tNW","tNE","tSW","tSE"])Ut(h[Pt],he(x.towers));Ut(h.tSq,he(x.towers)),Ut(h.keep,he(x.keep));for(let Pt of["wN","wE","wW","wSW","wSE","tNW","tNE","tSW","tSE","tSq","keep"]){let Vt=h[Pt];if(Vt.crown){let bt=Pt==="keep"?x.keep>=1:Pt[0]==="w"?x.walls>=1:x.towers>=1;Vt.crown.visible=bt&&x.crenels>0,Vt.crown.scale.y=Math.max(0.001,he(x.crenels))}if(Vt.roof)Vt.roof.visible=x.roofs>0&&(Pt==="keep"?x.keep>=1:x.towers>=1),Vt.roof.scale.setScalar(Math.max(0.001,he(x.roofs))),Vt.roof.position.y=0}let L=h.gate;_.visible=x.gate>0.001,_.scale.y=Math.max(0.001,x.gate),L.crown.visible=x.gate>=1&&x.crenels>0,L.roof.visible=x.gate>=1&&x.roofs>0,L.roof.scale.y=Math.max(0.001,he(x.roofs)),L.bridge.visible=x.gate>=1&&x.bridge>0,L.bridge.rotation.x=-x.bridgeUp*(Math.PI/2)*0.93,L.portcullis.visible=x.gate>=1&&x.bridge>0,L.portcullis.position.y=0.7+(1-x.portDown)*5.6,L.doors[0].rotation.y=-x.doorsOpen*1.45,L.doors[1].rotation.y=x.doorsOpen*1.45,L.doors.forEach((Pt)=>Pt.visible=x.gate>=1&&x.bridge>0),L.bar.visible=x.gate>=1&&x.doorsOpen<0.05&&x.bar>0,L.bar.position.y=3.2+(1-x.bar)*2.5;for(let Pt of L.cutParts)Pt.visible=!(x.gateCut>0.5);L.roof.visible=L.roof.visible,L.holes.visible=x.gate>=1;for(let Pt of L.chains){Pt.mesh.visible=L.bridge.visible;let Vt=L.bridge.rotation.x,bt=new O(Pt.sgn*1.9,0.75+Math.sin(-Vt)*10.5,37.7+Math.cos(Vt)*10.5),Se=new O(Pt.sgn*1.9,10.5,37.75),Te=Se.clone().add(bt).multiplyScalar(0.5);Pt.mesh.position.copy(Te);let ye=bt.clone().sub(Se);Pt.mesh.scale.set(1,ye.length(),1),Pt.mesh.quaternion.setFromUnitVectors(qc,ye.normalize())}D.material.opacity=he(x.yard),D.visible=x.yard>0.01,["hall","kitchen","stables","granary"].forEach((Pt,Vt)=>{let bt=he(x.buildings*1.6-Vt*0.2),Se=h[Pt];Se.group.visible=bt>0.001,Se.group.scale.y=Math.max(0.001,bt),Se.roof.visible=bt>=1}),h.well.group.visible=x.buildings>0.3||x.well>0,h.stores.group.visible=x.buildings>0.8,J.visible=x.water>0.001,J.position.y=kt-5.6+he(x.water)*3.9,W.userData.uniforms.uTime.value=T;let j=Math.floor(xt*he(x.stock));N.count=j,N.visible=j>0,It.visible=x.stock>0.05,It.count=x.stock>0.05?48:0,ht.visible=x.stock>0.05;let pt=0,At=0,St=0;if(x.scaffold>0){let Pt=(bt)=>{let Se=h[bt];return Se.group.visible?Se.mesh.scale.y*(ws+0.6)-0.6:0};for(let bt of y){let Se=Pt(bt.name);if(Se<0.3)continue;let Te=Se+1.6;for(let ye of[1,-1]){let Be=ye*(mn/2+1),Le=Math.floor(bt.len/3.2);for(let ze=0;ze<=Le;ze++){let en=-bt.len/2+1.5+ze*(bt.len-3)/Le,En=bt.cx+(bt.ax?en:bt.nx*Be),ts=bt.cz+(bt.ax?bt.nz*Be:en);for(let me of[0,1]){let b=En+(bt.ax?0:bt.nx*ye*me),k=ts+(bt.ax?bt.nz*ye*me:0);if(pt<1400)ft.makeScale(1,Te,1),ft.setPosition(b,kt-0.3,k),wt.setMatrixAt(pt++,ft)}if(ze<Le&&At<500){let me=Math.max(1.2,Se-0.2);ft.makeScale(bt.ax?(bt.len-3)/Le:1.2,1,bt.ax?1.2:(bt.len-3)/Le);let b=-bt.len/2+1.5+(ze+0.5)*(bt.len-3)/Le;ft.setPosition(bt.cx+(bt.ax?b:bt.nx*(Be+ye*0.5)),kt+me,bt.cz+(bt.ax?bt.nz*(Be+ye*0.5):b)),U.setMatrixAt(At++,ft)}}for(let ze=2.2;ze<Te-0.5;ze+=2.2){if(pt>=1400)break;let en=bt.len-2,En=bt.ax?new O(1,0,0):new O(0,0,1);Dt.setFromUnitVectors(qc,En),de.set(bt.cx+(bt.ax?0:bt.nx*Be)-En.x*en/2,kt+ze,bt.cz+(bt.ax?bt.nz*Be:0)-En.z*en/2),ne.set(1,en,1),ft.compose(de,Dt,ne),wt.setMatrixAt(pt++,ft)}}if(x.walls<1&&x.walls>0.05){let ye=(T*0.37+se(bt.cx*3+bt.cz))%1,Be=Math.floor(bt.len/1.25*ye);for(let Le=0;Le<Be&&St<400;Le++){let ze=-bt.len/2+0.62+Le*1.25;for(let en of[-1,1]){if(St>=400)break;ft.makeRotationY(bt.ax?0:Math.PI/2);let En=en*(mn/2-0.45);ft.setPosition(bt.cx+(bt.ax?ze:En),kt+Se+0.3,bt.cz+(bt.ax?En:ze)),E.setMatrixAt(St++,ft)}}}}let Vt=h.tNW.group.visible?h.tNW.mesh.scale.y*(Yc+0.6)-0.6:0;if(Vt>0.3&&x.towers<1)for(let[bt,Se]of[[-30,-30],[30,-30],[-30,30],[30,30]])for(let Te=0;Te<14;Te++){let ye=Te/14*Math.PI*2;if(pt>=1400)break;ft.makeScale(1,Vt+1.6,1),ft.setPosition(bt+Math.cos(ye)*(On+1.4),kt-0.3,Se+Math.sin(ye)*(On+1.4)),wt.setMatrixAt(pt++,ft)}}wt.count=pt,U.count=At,E.count=St,wt.instanceMatrix.needsUpdate=!0,U.instanceMatrix.needsUpdate=!0,E.instanceMatrix.needsUpdate=!0,wt.visible=pt>0,U.visible=At>0,E.visible=St>0,Y.visible=x.buttress>0.001,Y.scale.y=Math.max(0.001,x.buttress),at.visible=x.crack>0.01,at.children.forEach((Pt,Vt)=>Pt.visible=Vt<x.crack*at.children.length),dt.visible=x.walls>=1,rt.visible=x.postern>0.001,rt.scale.y=Math.max(0.001,x.postern),Wt.visible=x.puddle>0.01,Wt.scale.setScalar(Math.max(0.01,x.puddle)),Wt.material.userData.uniforms.uTime.value=T,yt.visible=x.rigole>0.01,yt.scale.z=Math.max(0.01,x.rigole),yt.position.z=3+13*x.rigole,Tt.visible=x.towers>=1,ie.visible=x.spout>0.01;for(let Pt=0;Pt<40;Pt++){let Vt=(T*1.4+Pt/40)%1,bt=35.6+Vt*3.2,Se=kt+15.5-Vt*Vt*15.2,Te=35.6+Vt*3.2;ft.makeScale(1,1.6,1),ft.setPosition(bt,Se,Te),ie.setMatrixAt(Pt,ft)}ie.instanceMatrix.needsUpdate=!0;let ee=h.keep,pe=ee.flag.geometry.attributes.position.array;for(let Pt=0;Pt<pe.length;Pt+=3){let Vt=ee.flagBase[Pt];pe[Pt+2]=Math.sin(Vt*1.6-T*5)*0.25*(Vt/4)}ee.flag.geometry.attributes.position.needsUpdate=!0}for(let x in h){let T=h[x];if(T.slits)Fn(T.slits,{cast:!1})}Fn(h.well.group),Fn(h.stores.group),Fn(ht);let A=[];for(let x of["wN","wE","wW","wSW","wSE","tNW","tNE","tSW","tSE","tSq","keep","gate"])h[x].group.traverse((T)=>{if(T.isMesh||T.isInstancedMesh)A.push({o:T,m:T.material})});let st=!1;function S(x,T){if(lt.opacity=0.32*T,x===st)return;st=x;for(let P of A)P.o.material=x?lt:P.m,P.o.castShadow=!x}return{root:e,elements:h,apply:ce,wallInfo:y,setGhost:S}}var Fe={};function sm(){if(Fe.leg)return Fe;return Fe.leg=new ot(0.17,0.82,0.2).translate(0,-0.41,0),Fe.arm=new ot(0.13,0.66,0.14).translate(0,-0.33,0),Fe.torso=new ae(0.21,0.27,0.66,8).translate(0,0.33,0),Fe.skirt=new ae(0.27,0.36,0.42,8).translate(0,-0.12,0),Fe.head=new Un(0.135,10,8),Fe.hood=new dn(0.17,0.3,8).translate(0,0.12,0),Fe.cap=new Un(0.15,10,6,0,Math.PI*2,0,Math.PI/2),Fe.helm=new dn(0.16,0.26,8).translate(0,0.1,0),Fe.hat=new ae(0.28,0.28,0.03,12),Fe.hatTop=new ae(0.13,0.15,0.16,10).translate(0,0.08,0),Fe.shield=new ot(0.5,0.65,0.06),Fe.handle=new ae(0.025,0.025,0.9,5).translate(0,0.45,0),Fe.hammerHead=new ot(0.1,0.1,0.24),Fe.pickHead=new ot(0.06,0.06,0.6),Fe.blade=new ot(0.22,0.28,0.03),Fe.spear=new ae(0.02,0.02,2.4,4).translate(0,0.4,0),Fe.bow=new pr(0.55,0.02,4,12,Math.PI),Fe.staff=new ae(0.03,0.03,1.9,5).translate(0,-0.55,0),Fe.basket=new ae(0.2,0.15,0.25,8),Fe.stone=new ot(0.45,0.28,0.32),Fe.sack=new Un(0.22,8,6).scale(1,1.3,0.8),Fe}var Jc=[14726287,13212274,14198915,12026717],$c={worker:[8219215,6969925,9075290,6056789,9202764,7232062,8025190],mason:[11049856,9406067,11774095],noble:[2772367],architect:[4927034],defender:[2969226,2835833],enemy:[9315360,8003099,9842730],villager:[10181180,7043642,9071242,10520656,5925498]};function Ke(t,e=0,n={}){let i=sm(),s=(v)=>se(e*13.7+v),r=$c[n.palette||(t==="soldier"?"defender":t)]||$c.worker,o=qt(r[Math.floor(s(1)*r.length)]),a=qt([4865843,3947062,5917242,4207656][Math.floor(s(2)*4)]),c=qt(Jc[Math.floor(s(3)*Jc.length)]),l=new Lt,h=new Lt;h.position.y=0.9,l.add(h);let u=new Lt,d=new Lt;u.position.set(-0.1,0,0),d.position.set(0.1,0,0),u.add(Z(i.leg,a)),d.add(Z(i.leg,a)),h.add(u,d);let p=new Lt;h.add(p),p.add(Z(i.torso,o));let g=Z(i.skirt,o);if(g.scale.y=t==="architect"||t==="noble"?2:1,t==="architect"||t==="noble")g.position.y=-0.3;h.add(g);let y=Z(i.head,c);y.position.y=0.82,p.add(y);let f;if(t==="soldier"||t==="enemy")f=Z(i.helm,qt(9080210,{metalness:0.6,roughness:0.4})),f.position.y=0.88;else if(t==="architect")f=Z(i.hatTop,qt(2760218)),f.position.y=0.9;else if(t==="noble")f=Z(i.cap,qt(1714768)),f.position.y=0.86;else if(s(4)<0.45)f=Z(i.hood,qt(r[Math.floor(s(5)*r.length)])),f.position.y=0.86;else if(s(4)<0.75)f=Z(i.cap,qt(14208176)),f.position.y=0.85;if(f)p.add(f);let m=new Lt,w=new Lt;m.position.set(-0.29,0.62,0),w.position.set(0.29,0.62,0),m.add(Z(i.arm,o)),w.add(Z(i.arm,o));let _=Z(i.head,c);_.scale.setScalar(0.45),_.position.y=-0.68,m.add(_);let C=_.clone();w.add(C),p.add(m,w);let D=new Lt;D.position.y=-0.68,w.add(D);let I=qt(7230006),R=qt(5593180,{metalness:0.5,roughness:0.5}),z=n.tool;if(z==="hammer"||z==="chisel"){let v=Z(i.handle,I,D);v.scale.y=0.45,v.rotation.x=Math.PI/2;let F=Z(i.hammerHead,R,D);F.position.z=0.38}else if(z==="pick"){let v=Z(i.handle,I,D);v.rotation.x=Math.PI/2,v.scale.y=1.1;let F=Z(i.pickHead,R,D);F.rotation.x=Math.PI/2,F.rotation.y=Math.PI/2,F.position.z=0.95,F.rotation.set(0,0,0),F.position.set(0,0,0.95),F.scale.set(1,1,1),F.rotation.x=0,F.geometry=i.pickHead,F.rotation.y=0,F.rotation.z=0,F.rotation.x=Math.PI/2}else if(z==="shovel"){let v=Z(i.handle,I,D);v.rotation.x=Math.PI/2,v.scale.y=1.3;let F=Z(i.blade,R,D);F.position.z=1.25,F.rotation.x=Math.PI/2.4}else if(z==="spear")Z(i.spear,I,D);else if(z==="bow"){let v=Z(i.bow,I,D);v.rotation.y=Math.PI/2,v.rotation.z=Math.PI/2}else if(z==="staff"){let v=Z(i.staff,I,D);v.position.y=0.5}else if(z==="stone")Z(i.stone,Ie(13024163),D).position.set(-0.29,0,0.2);else if(z==="sack")Z(i.sack,qt(13153418),D).position.set(-0.3,0.5,0.1);else if(z==="basket")Z(i.basket,qt(9071162),D).position.set(-0.29,0.05,0.25);else if(z==="bucket"){let v=Z(i.basket,Me(8017204),D);v.scale.set(0.9,1.1,0.9),v.position.set(0,-0.15,0)}if(t==="soldier"||t==="enemy"){let v=Z(i.shield,qt(t==="enemy"?5903634:13808202),null);if(v.position.set(-0.05,-0.35,0.12),m.add(v),t==="enemy"){let F=Z(new ot(0.12,0.5,0.065),qt(14271370),null);F.position.set(-0.05,-0.35,0.13),m.add(F)}}let M={body:h,torso:p,hipL:u,hipR:d,shL:m,shR:w,tool:D,kind:t,seed:e};return Qi(l,[h,p,u,d,m,w]),l.userData=M,l}function ue(t,e,n){let i=t.userData,s=Math.sin(n),r=Math.cos(n);switch(i.body.position.y=0.9,i.body.rotation.set(0,0,0),i.torso.rotation.set(0,0,0),i.hipL.rotation.set(0,0,0),i.hipR.rotation.set(0,0,0),i.shL.rotation.set(0,0,0.08),i.shR.rotation.set(0,0,-0.08),i.tool.rotation.set(0,0,0),e){case"walk":case"march":case"carry":case"push":{let o=e==="march"?0.55:0.45;if(i.hipL.rotation.x=s*o,i.hipR.rotation.x=-s*o,i.body.position.y=0.9+Math.abs(r)*0.04,e==="carry")i.shL.rotation.x=-1.1,i.shR.rotation.x=-1.1,i.shL.rotation.z=-0.25,i.shR.rotation.z=0.25;else if(e==="push")i.torso.rotation.x=0.35,i.shL.rotation.x=-1.4,i.shR.rotation.x=-1.4,i.hipL.rotation.x=s*0.6-0.2,i.hipR.rotation.x=-s*0.6-0.2;else if(e==="march")i.shR.rotation.x=-0.4,i.shL.rotation.x=-0.9;else i.shL.rotation.x=-s*0.5,i.shR.rotation.x=s*0.5;break}case"hammer":{let o=Math.pow(Math.max(0,s),0.6);i.torso.rotation.x=0.35,i.shR.rotation.x=-0.6-o*1.7,i.shL.rotation.x=-0.7,i.body.position.y=0.86;break}case"chisel":{let o=Math.pow(Math.max(0,s),0.6);i.torso.rotation.x=0.5,i.shR.rotation.x=-0.4-o*1.2,i.shL.rotation.x=-1,i.shL.rotation.z=-0.35;break}case"dig":{let o=(s+1)/2;i.torso.rotation.x=0.25+o*0.45,i.shR.rotation.x=-0.4-o*0.9,i.shL.rotation.x=-0.5-o*0.8,i.shL.rotation.z=-0.4,i.hipL.rotation.x=-0.3,i.hipR.rotation.x=0.2,i.body.position.y=0.84;break}case"pick":{let o=Math.pow(Math.max(0,s),0.7);i.torso.rotation.x=0.25+(1-o)*0.35,i.shR.rotation.x=-0.3-o*2.5,i.shL.rotation.x=-0.3-o*2.4,i.shL.rotation.z=-0.35;break}case"point":{i.shR.rotation.x=-1.5,i.shR.rotation.z=-0.25,i.shL.rotation.x=-0.15;break}case"pull":{i.torso.rotation.x=-0.2,i.shR.rotation.x=-1.9+s*0.4,i.shL.rotation.x=-1.9-s*0.4,i.hipL.rotation.x=0.3,i.hipR.rotation.x=-0.25;break}case"shoot":{i.shL.rotation.x=-1.5,i.shL.rotation.z=0.2,i.shR.rotation.x=-1.5,i.shR.rotation.z=-0.5-Math.max(0,s)*0.4,i.torso.rotation.y=0.3;break}case"tired":{i.torso.rotation.x=0.6,i.shL.rotation.x=-0.2,i.shR.rotation.x=-0.2,i.body.position.y=0.85+s*0.02;break}case"talk":{i.shR.rotation.x=-0.5-Math.max(0,s)*0.5,i.torso.rotation.y=s*0.1;break}default:i.shL.rotation.x=s*0.04,i.torso.rotation.y=Math.sin(n*0.3)*0.08}}function Do(t="horse",e=0){let n=(p)=>se(e*7.3+p),i=t==="ox"?[9071178,6965810,13154464][Math.floor(n(1)*3)]:[5913122,8016434,3811870,11575440][Math.floor(n(1)*4)],s=qt(i),r=new Lt,o=t==="ox"?1.15:1,a=Z(new ot(0.75*o,0.8*o,2*o),s,r);a.position.y=1.35;let c=Z(new ot(0.35,t==="ox"?0.5:0.95,0.45),s,r);c.position.set(0,t==="ox"?1.55:1.9,1.05),c.rotation.x=t==="ox"?0.2:-0.55;let l=Z(new ot(0.3,0.32,0.72),s,r);if(l.position.set(0,t==="ox"?1.45:2.25,t==="ox"?1.45:1.5),l.rotation.x=t==="ox"?0.6:0.5,t==="ox"){let p=Z(new ae(0.04,0.06,0.9,5),qt(15261896),r);p.rotation.z=Math.PI/2,p.position.set(0,1.7,1.35)}else{let p=Z(new ot(0.08,0.8,0.3),qt(2234384),r);p.position.set(0,2,0.92),p.rotation.x=-0.55}let h=Z(new ot(0.1,0.8,0.12),qt(2234384),r);h.position.set(0,1.25,-1.05),h.rotation.x=0.3;let u=[],d=new ot(0.16,1,0.18).translate(0,-0.5,0);for(let[p,g]of[[-0.25,0.8],[0.25,0.8],[-0.25,-0.8],[0.25,-0.8]]){let y=new Lt;y.position.set(p*o,1.05,g*o),Z(d,s,y),r.add(y),u.push(y)}return Qi(r,u),r.userData={legs:u,body:a},r}function bs(t,e,n=1){let i=t.userData.legs,s=Math.sin(e)*0.45*n;i[0].rotation.x=s,i[3].rotation.x=s,i[1].rotation.x=-s,i[2].rotation.x=-s}function Kc(t=0,e="stone"){let n=new Lt,i=Me(9069632),s=Z(new ot(1.7,0.18,3),i,n);s.position.y=1;for(let l of[-0.85,0.85])Z(new ot(0.08,0.45,3),i,n).position.set(l,1.3,0);let r=[];for(let l of[-0.55,0.55]){let h=Z(new ot(0.1,0.1,3),i,n);h.position.set(l,1.05,2.8),r.push(h)}let o=[],a=new ae(0.62,0.62,0.14,14);a.rotateZ(Math.PI/2);for(let l of[-1,1]){let h=new Lt;h.position.set(l,0.62,0),Z(a,Me(5913893),h);for(let u=0;u<3;u++){let d=Z(new ot(0.16,1.2,0.08),qt(4074008),h);d.rotation.x=u*Math.PI/3}n.add(h),o.push(h)}let c=new Lt;if(e==="stone"){let l=Ie(13024163);for(let u=0;u<4;u++)Z(new ot(0.75,0.5,1.1),l,c).position.set(u%2*0.78-0.39,1.35,Math.floor(u/2)*1.2-0.6);Z(new ot(0.75,0.5,1.1),l,c).position.set(0,1.85,0)}else if(e==="wood"){let l=new ae(0.2,0.2,3.2,7).rotateX(Math.PI/2);for(let h=0;h<6;h++)Z(l,Me(9069632),c).position.set(h%3*0.42-0.42,1.3+Math.floor(h/3)*0.38,0)}else if(e==="supplies"){let l=Me(7031340);for(let h=0;h<4;h++)Z(new ae(0.35,0.35,0.8,9),l,c).position.set(h%2*0.75-0.37,1.5,Math.floor(h/2)*0.9-0.45)}return n.add(c),Qi(n,o),n.userData={wheels:o,cargo:c},n}function Qc(){let t=new Lt,e=Me(9071172),n=Me(6177832);for(let u of[-1.2,1.2])Z(new ot(0.35,0.35,6),n,t).position.set(u,0.18,0),Z(new ot(0.3,4.2,0.3),e,t).position.set(u,2.3,0);let i=new Lt;i.position.set(0,2.6,0);for(let u of[-0.9,0.9]){let d=Z(new pr(2.3,0.1,6,28),e,i);d.rotation.y=Math.PI/2,d.position.x=u;for(let p=0;p<6;p++){let g=Z(new ot(0.1,4.6,0.12),n,i);g.position.x=u,g.rotation.x=p*Math.PI/6}}for(let u=0;u<18;u++){let d=u/18*Math.PI*2,p=Z(new ot(1.9,0.08,0.3),e,i);p.position.set(0,Math.sin(d)*2.25,Math.cos(d)*2.25),p.rotation.x=-d}let s=Z(new ae(0.15,0.15,2.8,8).rotateZ(Math.PI/2),n,i);t.add(i),Z(new ot(0.4,9,0.4),e,t).position.set(0,4.5,-1.2);let o=Z(new ot(0.3,0.3,7),e,t);o.position.set(0,8.6,1.6),o.rotation.x=-0.18;let a=Z(new ot(0.2,0.2,4),n,t);a.position.set(0,7,0.4),a.rotation.x=0.75;let c=Z(new ae(0.03,0.03,1,4).translate(0,-0.5,0),qt(14207136),t,!1);c.position.set(0,9.2,4.9);let l=Z(new ot(1.1,0.6,0.8),Ie(13616299),t),h=Ke("worker",77);return h.position.set(0,0.35,0),i.parent.add(h),c.userData.pivot=!0,l.userData.pivot=!0,Qi(t,[i]),t.userData={wheel:i,rope:c,load:l,walker:h},t.traverse((u)=>u.isMesh&&(u.castShadow=!0)),t}function Uo(t,e,n){let i=t.userData;i.wheel.rotation.x=-n*9;let s=$t(8.6,1.2,n);i.rope.scale.y=s,i.load.position.set(0,9.2-s-0.35,4.9),ue(i.walker,"walk",e*5),i.walker.position.set(0,0.35,0.2)}function jc(){let t=new Lt,e=Me(7229492);for(let c of[-1.2,1.2])for(let l of[-2.5,2.5])Z(new ot(0.25,2.6,0.25),e,t).position.set(c,1.3,l);let n=Z(new ot(3.2,0.2,6.2),Me(5914664),t);n.position.y=2.7;let i=Z(new ot(1.9,0.2,6.2),qt(7035450),t);i.position.set(-0.8,3.1,0),i.rotation.z=0.45;let s=i.clone();s.position.x=0.8,s.rotation.z=-0.45,t.add(s);let r=new Lt;r.position.set(0,1.4,0);let o=Z(new ae(0.3,0.3,7,10).rotateX(Math.PI/2),Me(8018490),r),a=Z(new ae(0.34,0.2,0.6,10).rotateX(Math.PI/2),qt(4540492,{metalness:0.5}),r);return a.position.z=3.7,t.add(r),Qi(t,[r]),t.userData={log:r},t}var Es=-2000,Ne=new O(0,Es,0),Ye=new O(600,Es,0),cn=new O(-600,Es,0),bn=new O(0,Es,600),ui=new O(0,Es,-600),No=new un({color:723207}),We=[-93,-31,31,93];function Fo(t,e,n){let i=Math.sin(e*0.21)*Math.cos(n*0.17)*0.4+Math.sin(e*0.53+n*0.41)*0.15;if(t===0)return 1.2+i*0.5;if(t===1){let r=Math.hypot(e+3,n+2),o=1.2+11*(1-Ee(9,22,r))+i*0.6,a=Math.abs(e-(17+Math.sin(n*0.12)*3));return o-=1.8*(1-Ee(2.5,6,a)),o}if(t===2){let r=Math.hypot(e,n);return 1.2+26*Math.pow(1-Ee(0,24,r),1.6)+Math.abs(Math.sin(e*0.4+n*0.3))*2.2*(1-Ee(5,22,r))+i}let s=Math.abs(e-Math.sin(n*0.14)*9);return 0.9-1.5*(1-Ee(3,7,s))+i*0.25+Math.sin(e*0.9+n*0.7)*0.12}function rm(t,e,n,i){if(t===2&&i>17)return[0.92,0.93,0.95];if(t===2&&i>7)return[0.47,0.46,0.43];if(t===3){if(Math.abs(e-Math.sin(n*0.14)*9)<12)return[0.35+Math.sin(e*2+n)*0.03,0.39,0.22]}if(t===0&&Math.abs(e)<20&&Math.abs(n)<20&&Math.floor((e+40)/9+Math.floor((n+40)/11))%3===0)return[0.72,0.64,0.33];return[0.32+Math.sin(e*0.3)*0.02,0.48,0.19]}function om(t){let e=new Lt,n=56,i=50,s=new Sn(50,50,56,56).rotateX(-Math.PI/2),r=s.attributes.position,o=[];for(let g=0;g<r.count;g++){let y=r.getX(g),f=r.getZ(g),m=Fo(t,y,f);r.setY(g,m),o.push(...rm(t,y,f,m))}s.setAttribute("color",new ve(o,3)),s.computeVertexNormals(),Z(s,new He({vertexColors:!0,roughness:0.95,flatShading:t===2}),e);let a=Z(new ot(50,7,50),qt(5915440),e);a.position.y=-3.4;let c=Z(new ot(50.02,2.5,50.02),qt(8018490),e);c.position.y=-1;let l=Z(new ot(50.04,2.2,50.04),qt(9077880),e);if(l.position.y=-5.8,t===1||t===3){let g=new te(new Sn(49.95,49.95).rotateX(-Math.PI/2),Ti(3959412));g.position.y=t===3?0.4:0.35,e.add(g),e.userData.water=g}let h=Ki(t*31+5),u=new dn(0.9,2.8,6).translate(0,1.8,0),d=qt(3103272,{flatShading:!0});for(let g=0;g<(t===2?26:34);g++){let y=(h()-0.5)*50*0.92,f=(h()-0.5)*50*0.92,m=Fo(t,y,f);if(t===2&&m>9)continue;if(t===1&&Math.hypot(y+3,f+2)<14)continue;if(t===0&&Math.abs(y)<20&&Math.abs(f)<20)continue;if(t===3&&Math.abs(y-Math.sin(f*0.14)*9)<8)continue;let w=Z(u,d,e);w.position.set(y,m-0.2,f),w.scale.setScalar(0.8+h()*0.6)}if(t===3){let g=new ae(0.03,0.05,1.2,3).translate(0,0.6,0),y=qt(8030778);for(let f=0;f<160;f++){let m=(h()-0.5)*50*0.95,w=Math.sin(m*0.14)*9+(h()-0.5)*18,_=Z(g,y,e,!1);_.position.set(w,0.2,m),_.rotation.z=(h()-0.5)*0.4}}if(t===0)for(let g=0;g<5;g++)Z(fe(new ot(2.2,1.6,3)),qt(14207144),e).position.set(12+g%3*3.4,1,-14+Math.floor(g/3)*4.5),Z(hi(2.2,3,1.3,0.15),qt(10124360),e).position.set(12+g%3*3.4,2.6,-14+Math.floor(g/3)*4.5);let p=e.userData.water;if(p)e.remove(p);if(Fn(e),p)e.add(p);return e}function tl(t){let e=new Lt;e.position.copy(Ne),t.add(e);let n=We.map((h,u)=>{let d=om(u);return d.position.x=h,e.add(d),d}),i=Z(new ot(260,2,90),Me(4862498),e);i.position.y=-8.2;let s=new So(26.3,27.6,4,1,Math.PI/4).rotateX(-Math.PI/2),r=We.map((h)=>{let u=new te(s,new un({color:14240314,transparent:!0,opacity:0}));return u.position.set(h,0.39999999999999947,0),u.position.y=-6.8,u.scale.set(1.36,1,1.36),e.add(u),u}),o=new Lt,a=Z(new ae(0.12,0.12,6,6),qt(3811866),o);a.position.y=3;let c=Z(new Sn(3,1.8),new He({color:2047882,side:za}),o);c.position.set(1.5,5.1,0),o.position.set(We[1]-3,Fo(1,-3,-2),-2),e.add(o);function l(h,u){r.forEach((d,p)=>{d.material.opacity=h.tileRing[p]||0,d.material.color.set(h.tileGood===p?6274890:14240314),d.visible=d.material.opacity>0.01}),o.visible=h.siteFlag>0,o.scale.setScalar(Math.max(0.001,h.siteFlag)),c.rotation.y=Math.sin(u*3)*0.2,n.forEach((d)=>d.userData.water&&(d.userData.water.material.userData.uniforms.uTime.value=u))}return{root:e,apply:l}}function el(t){let e=new Lt;e.position.copy(Ye),t.add(e);let n=14,i=[{name:"top",y0:-1.4,y1:0,color:4863268},{name:"clay",y0:-7.5,y1:-1.4,color:10519904},{name:"compact",y0:-12.5,y1:-7.5,color:9143410},{name:"aquifer",y0:-15.5,y1:-12.5,color:7307142},{name:"rock",y0:-20,y1:-15.5,color:7828332}],s=i.map((X)=>{let V=new He({color:X.color,roughness:1});return V.onBeforeCompile=(nt)=>{nt.vertexShader=nt.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLP2;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vLP2 = (modelMatrix*vec4(position,1.0)).xyz;`),nt.fragmentShader=nt.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLP2; float sh2(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}`).replace("#include <color_fragment>",`#include <color_fragment>
 { vec2 c = floor(vLP2.xy*vec2(3.0,4.0)+vLP2.z); float s = sh2(c); diffuseColor.rgb *= 0.85 + s*0.25; if (s>0.93) diffuseColor.rgb *= 0.6; }`)},V.customProgramCacheKey=()=>"soil"+X.color,V}),r=40,o=[];i.forEach((X,V)=>{for(let q of[-1,1]){let tt=Z(new ot(1,1,n),s[V],e);tt.userData={side:q,l:X},o.push(tt)}let nt=Z(new ot(1,1,n),s[V],e);nt.userData={side:0,l:X},o.push(nt)});let a=Z(new ot(r,0.25,n),qt(5143086),e);a.position.y=0.1;let c=new te(new Sn(1,1),qt(2826005));e.add(c);let l=Ie(10327168,{course:0.7,len:1.4}),h=new Lt,u=Z(fe(new ot(9,2.5,n-0.2)),l,h);u.position.y=-7.6;let d=Z(fe(new ot(7,2.5,n-0.2)),l,h);d.position.y=-5.1;let p=Z(fe(new ot(5.6,2.6,n-0.2)),l,h);p.position.y=-2.6,e.add(h);let g=Z(fe(new ot(5.4,0.8,n-0.2)),l,e),y=Ie(12432028),f=new Lt,m=Z(fe(new ot(4.6,9,n-1)),y,f);e.add(f);let w=new Lt;for(let X=0;X<3;X++){let V=-1.2+X*1.2,nt=8.5-X*1.5;for(let q=0;q<9;q++){let tt=V+(se(q*3.3+X)-0.5)*0.9,lt=nt-0.8,Ct=Math.hypot(tt-V,lt-nt),Ot=new te(new ot(0.07,Ct+0.04,0.04),No);Ot.position.set((V+tt)/2,(nt+lt)/2,(n-1)/2+0.02),Ot.rotation.z=-Math.atan2(tt-V,-(lt-nt)),Ot.userData.k=(X*9+q)/27,w.add(Ot),V=tt,nt=lt}}f.add(w);let _=[0,1,2].map((X)=>{let V=Ke("worker",200+X,{tool:X===1?"pick":"shovel"});return e.add(V),V}),C=new Lt;for(let X=0;X<5;X++){let V=new Lt,nt=Z(new ae(0.12,0.12,2,6),new un({color:15909198}),V,!1);nt.position.y=1.2;let q=Z(new dn(0.4,0.8,8),new un({color:15909198}),V,!1);q.rotation.x=Math.PI,V.position.set(-3.6+X*1.8,-9.8,n/2+0.3),C.add(V)}e.add(C);let D=new Lt,I=Ie(11050632,{course:0.4,len:0.7});for(let X of[-1.75,1.75])Z(fe(new ot(0.5,16.2,n-0.4)),I,D).position.set(X,-15.6,0);let R=Z(fe(new ae(2,2,1.1,20,1,!0)),I,D);R.position.y=0.2;let z=new te(new ot(3,2.4,n-0.6),new He({color:3894662,roughness:0.2,transparent:!0,opacity:0.85}));z.position.y=-14.6,D.add(z);for(let X of[-1.7,1.7])Z(new ot(0.25,3.2,0.25),Me(8017204),D).position.set(X,2.2,0);let M=Z(new ae(0.16,0.16,3.6,8).rotateZ(Math.PI/2),Me(5913893),D);M.position.y=3.4;let v=Z(new ae(0.03,0.03,1,4).translate(0,-0.5,0),qt(14207136),D,!1);v.position.y=3.4;let F=Z(new ae(0.35,0.28,0.55,10),Me(7031340),D);e.add(D);let W=Ke("villager",301,{tool:"none"});e.add(W);function J(X,V,nt,q,tt){let lt=Math.max(0.001,nt-V),Ct=Math.max(0.001,tt-q);X.scale.set(lt,Ct,1),X.position.set((V+nt)/2,(q+tt)/2,0),X.visible=nt-V>0.01&&tt-q>0.01}function et(X,V){let nt=X.soilMode,q=nt===2?1.5:4.5,tt=nt===1?X.digDepth:nt===2?16:0;for(let lt of o){let{side:Ct,l:Ot}=lt.userData;if(Ct===-1)J(lt,-r/2,-q,Ot.y0,Ot.y1);else if(Ct===1)J(lt,q,r/2,Ot.y0,Ot.y1);else J(lt,-q,q,Ot.y0,Math.min(Ot.y1,-tt))}if(c.visible=tt>0.05,c.scale.set(q*2,tt,1),c.position.set(0,-tt/2,-n/2+0.2),a.scale.x=1,h.visible=nt===1&&X.footing2>0,h.children.forEach((lt,Ct)=>{let Ot=he(X.footing2*3-Ct);lt.scale.y=Math.max(0.001,Ot),lt.visible=Ot>0.001}),g.visible=nt===0,g.position.y=-0.8-X.sink,f.visible=nt!==2&&X.soilWall>0,m.scale.y=Math.max(0.001,X.soilWall),nt===0)f.position.set(0,-X.sink,0),f.rotation.z=-X.sink*0.05;else f.position.set(0,0,0),f.rotation.z=0;if(w.children.forEach((lt)=>lt.visible=nt===0&&lt.userData.k<X.cracks),C.visible=X.loadArrows>0,C.children.forEach((lt,Ct)=>{lt.scale.setScalar(Math.max(0.001,X.loadArrows));let Ot=nt===1?1.25:0.75;lt.position.x=(-3.6+Ct*1.8)*Ot,lt.position.y=(nt===1?-9.4:-2.2-X.sink)-(V*1.5+Ct*0.2)%1*0.8}),_.forEach((lt,Ct)=>{lt.visible=nt===1&&X.diggers>0;let Ot=-Math.min(tt,7.5);lt.position.set(-2.4+Ct*2.4,Ot,2.5+Ct*0.8),lt.rotation.y=Ct===1?0.3:-0.4+Ct*0.4,ue(lt,Ct===1?"pick":"dig",V*4.5+Ct*1.7)}),D.visible=nt===2,W.visible=nt===2,nt===2){let lt=V*0.22%1,Ct=lt<0.5?lt*2:2-lt*2,Ot=$t(1.2,17.6,Ct);v.scale.y=Ot,F.position.set(0,3.4-Ot-0.2,0),M.rotation.x=-Ct*20,W.position.set(2.6,0.2,1.5),W.rotation.y=-Math.PI/2,ue(W,"pull",V*3)}}return{root:e,apply:et}}function nl(t){let e=new Lt;e.position.copy(cn),t.add(e);let n=Z(new ot(46,1.2,30),qt(6969920),e);n.position.y=-0.6;let i=Z(new ot(46,0.1,30),qt(5600314),e);i.position.y=0.02;let s=12,r=0.62,o=9,a=new Lt;e.add(a);let c=Ie(13156006,{course:10,len:10,tint:0.18}),l=qt(9406328),h=qt(9076848,{flatShading:!0}),u=qt(13616820),d=[],p=3.4;for(let R=0;R<s;R++){let z=-o/2-R%2*0.55,M=0;while(z<o/2){let F=1+se(R*17+M)*0.5,W=Math.max(z,-o/2),J=Math.min(z+F,o/2);for(let et of[-1,1]){let X=0.55+se(R*7+M*3+et)*0.25,V=Z(new ot(J-W-0.05,r-0.05,X),c,a);V.position.set((W+J)/2,R*r+r/2,et*(p/2-X/2)),V.userData={c:R,kind:"face",x:(W+J)/2},d.push(V)}z+=F,M++}let v=Z(new ot(o-0.02,r,p-1.5),u,a);v.position.set(0,R*r+r/2,0),v.userData={c:R,kind:"core"},d.push(v);for(let F=0;F<9;F++){let W=Z(new hr(0.22+se(R*31+F)*0.12,0),h,a);W.position.set(-o/2+0.3+se(R*13+F)*0.4*0+0.15,R*r+r/2+0.05,(se(R*11+F*5)-0.5)*(p-2)),W.position.x=-o/2+0.25,W.position.z=(se(R*11+F*5)-0.5)*(p-2),W.position.y=R*r+0.15+se(F*3+R)*0.35,W.rotation.set(se(F),se(F+1),se(F+2)),W.userData={c:R,kind:"rubble"},d.push(W)}}let g=new Lt;Z(fe(new ot(2.4,7.4,2.4)),Ie(13156006),g).position.set(2.4,0,-p/2-1.2),Z(fe(new ot(2.4,3.2,1.4)),Ie(13156006),g).position.set(2.4,0,-p/2-2.9),a.add(g);let y=new Lt;{let R=Z(new ot(0.08,0.08,p),new un({color:15909198}),y,!1);for(let z of[-1,1]){let M=Z(new ot(0.08,0.6,0.08),new un({color:15909198}),y,!1);M.position.z=z*p/2}y.position.set(-o/2-0.4,s*r+0.5,0)}a.add(y);let f=new Lt;e.add(f);let m=new Lt;m.position.set(0,0,0.6),f.add(m);let w=[],_=1.2;for(let R=0;R<s;R++)for(let z=0;z<6;z++){let M=o/6,v=Z(new ot(M-0.06,r-0.05,_),c,m);v.position.set(-o/2+M*(z+0.5),R*r+r/2,-_/2),v.userData={c:R,k:z,x0:v.position.x,y0:v.position.y},w.push(v)}let C=new Lt;for(let R=0;R<12;R++){let z=new te(new ot(0.09,r,0.04),No);z.position.set(-o/2+o/6*3,R*r+r/2,0.03),z.userData.k=R/12,C.add(z)}for(let R=0;R<6;R++){let z=new te(new ot(0.08,r*1.2,0.04),No);z.position.set(-o/2+o/6*1+0.2*R,4+R*0.5,0.03),z.rotation.z=0.5,z.userData.k=0.5+R/12,C.add(z)}m.add(C);let D=[0,1].map((R)=>{let z=Ke("mason",400+R,{tool:"hammer"});return e.add(z),z});function I(R,z){if(a.visible=R.wallMode===0,f.visible=R.wallMode===1,R.wallMode===0){let M=R.wallBuild*s;for(let F of d){let W=F.userData,J;if(W.kind==="face")J=he((M-W.c)*2);else J=he((M-W.c)*2-1);if(F.visible=J>0.01,W.kind==="face")F.scale.y=Math.max(0.01,J);if(W.kind==="rubble")F.scale.setScalar(Math.max(0.01,J));if(W.kind==="core")F.scale.y=Math.max(0.01,J)}g.visible=R.wbuttress>0,g.scale.y=Math.max(0.001,R.wbuttress),y.visible=R.wmarker>0,y.scale.z=Math.max(0.001,R.wmarker);let v=0;for(let F of d)if(F.userData.kind==="rubble")F.position.x=v%3===0?o/2-0.25:-o/2+0.6+v*0.97%(o-1.2),v++}else{m.rotation.x=-R.lean*0.14;for(let M of w){let v=M.userData;M.position.x=v.x0+(v.k>=3?1:-1)*R.lean*0.04*v.c,M.position.y=v.y0-(v.k>=3?R.lean*0.03*v.c:0)}C.children.forEach((M)=>M.visible=M.userData.k<R.wcracks)}D.forEach((M,v)=>{M.visible=R.wallMode===0&&R.wallBuild>0&&R.wallBuild<1;let F=Math.min(s,R.wallBuild*s)*r;M.position.set(-2+v*3.2,F,v?0.9:-0.6),M.rotation.y=v?-2.4:0.6,ue(M,"hammer",z*5+v*2)})}return{root:e,apply:I,T:p,LEN:o,H:s*r}}function il(t){let e=new Lt;e.position.copy(bn),t.add(e);let n=Ie(10129532),i=Z(new ot(18,0.4,12),qt(6969928),e);i.position.y=-0.2,Z(new ot(18,7,0.8),n,e).position.set(0,3.5,-6),Z(new ot(0.8,7,12),n,e).position.set(-9,3.5,0);for(let D=0;D<4;D++)Z(new ot(0.35,0.4,12),Me(5913893),e).position.set(-7+D*4.6,6.8,0);let o=new ae(0.55,0.55,1.3,12),a=Me(7031340),c=qt(3815994,{metalness:0.4}),l=[];for(let D=0;D<24;D++){let I=new Lt;Z(o,a,I);let R=Z(new ae(0.57,0.57,0.1,12),c,I);R.position.y=0.35;let z=R.clone();z.position.y=-0.35,I.add(z);let M=Math.floor(D/8),v=D%8;I.position.set(-7.6+v*1.2,0.65+(M===2?1.25:0),-4.6+(M===1?1.2:0)+(M===2?0.6:0)),e.add(I),l.push(I)}let h=new Un(0.55,9,7).scale(1,0.75,0.8),u=[];for(let D=0;D<30;D++){let I=Z(h,qt(13350538),e),R=Math.floor(D/10),z=D%10;I.position.set(-7.8+R*1+z%2*0.3,0.42+(z>=5?0.8:0),-1+z%5*1.05),I.rotation.y=se(D)*2,u.push(I)}Z(new ot(14,0.3,0.3),Me(5913893),e).position.set(2,5.2,-3);let p=[];for(let D=0;D<10;D++){let I=Z(new Un(0.35,8,6).scale(0.8,1.4,0.8),qt(D%2?9062970:11037258),e);I.position.set(-3.5+D*1.2,4.3,-3),p.push(I)}let g=Z(new ot(6,0.15,1.2),Me(8017204),e);g.position.set(5,2.2,-5.2);let y=g.clone();y.position.y=3.6,e.add(y);let f=[];for(let D=0;D<14;D++){let I=Z(new ae(0.22,0.28,0.6,8),qt(10115642),e);I.position.set(2.4+D%7*0.8,D<7?2.6:4,-5.2),f.push(I)}let m=Z(fe(new ot(0.8,7,12)),Ie(13156006),e);m.position.set(9,0,0);let w=Ke("villager",512,{tool:"sack"});e.add(w);let _=Ke("architect",513,{tool:"staff"});e.add(_);function C(D,I){let R=D.stores;l.forEach((M,v)=>M.visible=v<R*l.length),u.forEach((M,v)=>M.visible=v<R*u.length),p.forEach((M,v)=>{M.visible=v<R*p.length,M.rotation.z=Math.sin(I*1.3+v)*0.06}),f.forEach((M,v)=>M.visible=v<R*f.length),m.visible=D.cellarExt>0,m.scale.y=Math.max(0.001,D.cellarExt);let z=I*0.25%1;w.position.set($t(4,-4,z),0,2.4),w.rotation.y=-Math.PI/2,ue(w,"carry",I*6),_.position.set(3.5,0,0.6),_.rotation.y=-2.2,ue(_,"talk",I*2)}return{root:e,apply:C}}function sl(t){let e=new Lt;e.position.copy(ui),t.add(e);let n=Ie(12432028);for(let g of[-1,1])Z(fe(new ot(16,5,1.2)),n,e).position.set(0,-5,g*4.4);let i=Me(9069632),s=Me(3813926),r=Me(13146722),o=8.8,a=4.6,c=Math.hypot(o/2,a),l=Math.atan2(a,o/2),h,u;for(let g=0;g<6;g++){let y=-6.5+g*2.6;Z(new ot(0.35,0.4,o+0.6),i,e).position.set(y,0.2,0);for(let w of[-1,1]){let _=Z(new ot(0.3,0.35,c),g===3&&w===1?s:i,e);if(_.position.set(y,a/2+0.2,w*o/4),_.rotation.x=w*l,g===3&&w===1)h=_}Z(new ot(0.3,a,0.3),i,e).position.set(y,a/2+0.2,0)}for(let g of[-2.2,0,2.2])Z(new ot(15,0.25,0.25),i,e).position.set(0,g===0?a+0.4:a/2+0.55,g);u=Z(new ot(0.3,0.35,c),r,e),u.rotation.x=l;let d=[0,1].map((g)=>{let y=Ke("worker",600+g,{tool:"hammer"});return e.add(y),y});function p(g,y){let f=g.beamSwap,m=1.3000000000000007;h.visible=f<0.5,h.position.set(1.3000000000000007+he(f*2)*0,a/2+0.2+he(f*2)*3.5,o/4+he(f*2)*2),u.visible=f>=0.45;let w=he((f-0.5)*2);u.position.set(1.3000000000000007,a/2+0.2+(1-w)*3.5,o/4+(1-w)*2),d.forEach((_,C)=>{_.position.set(1.3000000000000007+(C?1.4:-1.4),0.4,1.2+C*1.6),_.rotation.y=C?-1.9:1.6,ue(_,f>0.55?"hammer":"pull",y*4.5+C)})}return{root:e,apply:p}}var G=(t,e,n)=>new O(t,e,n),ln=14;function xr(){return{outline:0,trench:0,footing:1,walls:1,towers:1,keep:1,gate:1,crenels:1,roofs:1,buildings:1,yard:1,well:1,stock:0,scaffold:0,moat:1,water:1,bridge:1,bridgeUp:0,portDown:0,doorsOpen:1,bar:0,gateCut:0,buttress:0,crack:0,postern:0,puddle:0,rigole:0,spout:0,roofHoles:0,paved:1,siege:0,siteDirt:0,ghost:0,tileRing:[0,0,0,0],tileGood:-1,siteFlag:0,soilMode:0,digDepth:0,footing2:0,sink:0,soilWall:1,cracks:0,loadArrows:0,diggers:0,wallMode:0,wallBuild:1,wbuttress:0,wmarker:0,lean:0,wcracks:0,stores:1,cellarExt:0,beamSwap:0,view:"world"}}function Bo(t,e){t.roofs=an(e,0.9,1),t.crenels=an(e,0.84,0.92),t.buildings=an(e,0.76,0.86),t.yard=t.buildings,t.well=e>0.8?1:0,t.keep=an(e,0.6,0.8),t.gate=an(e,0.52,0.74),t.towers=an(e,0.35,0.62),t.walls=an(e,0.25,0.55),t.water=an(e,0.2,0.3),t.moat=an(e,0.08,0.22),t.footing=an(e,0.02,0.1),t.bridge=t.gate>=1?1:0}function rl(){let t=xr();return Bo(t,0),t.paved=0,t}function ol(t){let e=xr(),n=(s)=>qe(s),i=(s)=>bi(s);if(t<i("s2")[0]){let s=1-Xt(t,n("s1c")[1]+0.3,i("s2")[0]-0.4);return Bo(e,s),e.paved=s>0.5?1:0,e}if(Bo(e,0),e.paved=0,t<i("s3")[0]){let s=e.tileRing;return s[0]=Nn(t,mt("s2c","plaine")-0.3,mt("s2c","un",2)-0.2),s[3]=Nn(t,mt("s2c","marécageux")-0.6,mt("s2c","site")-0.2),s[2]=Nn(t,mt("s2c","site")-0.2,n("s2c")[1]+1),s[1]=Ee(n("s2d")[0]+0.5,n("s2d")[0]+1.2,t),e.tileGood=1,e.siteFlag=Xt(t,n("s2d")[0]+1.2,n("s2d")[0]+2.5),e.view=t>=n("s2b")[0]+6.3&&t<mt("s2d","cette")?"tiles":"world",e}if(t<i("s4")[0]){if(e.ghost=Nn(t,n("s3a")[0]-0.2,mt("s3a","avec")+0.8,1),e.siteDirt=Xt(t,n("s3b")[0]-0.5,n("s3b")[1]),e.outline=Xt(t,mt("s3a","avec")-0.5,n("s3a")[1]+0.5),e.trench=Xt(t,n("s3b")[0]-0.2,n("s3b")[1]+1.5),e.footing=Xt(t,n("s3d")[1]-6,n("s3d")[1]+0.5),t>=n("s3c")[0]-0.4&&t<n("s3d")[1]-6){if(e.view="soil",t<n("s3d")[0]-0.3)e.soilMode=0,e.sink=Xt(t,mt("s3c","s’enfonce")-0.6,mt("s3c","fissure")+0.4)*1+Xt(t,mt("s3c","fissure"),n("s3c")[1]+2)*0.8,e.cracks=Xt(t,mt("s3c","fissure")-0.3,n("s3c")[1]+1.5),e.loadArrows=Xt(t,mt("s3c","poids")-0.8,mt("s3c","poids")+0.3);else if(e.soilMode=1,e.loadArrows=Nn(t,mt("s3d","répartir")-0.5,mt("s3d","difficile")+0.5,0.5),e.digDepth=1.4+Xt(t,mt("s3d","creuse")-0.6,mt("s3d","rocher")+0.8)*6.1,e.diggers=1,e.footing2=Xt(t,mt("s3d","élargit")-0.4,mt("s3d","mortier")+1.5),e.soilWall=Xt(t,mt("s3d","erreur")-0.5,mt("s3d","erreur")+2.5),t>mt("s3d","erreur")+2.5)e.loadArrows=Xt(t,mt("s3d","erreur")+2.2,mt("s3d","erreur")+3)}return e}if(e.footing=1,e.outline=0,e.trench=0,e.siteDirt=1-Xt(t,i("s7")[0],i("s7")[0]+3),t<i("s5")[0])return e.stock=Xt(t,i("s4")[0],n("s4d")[1])*0.9,e.paved=Xt(t,mt("s4d","empierre")-0.5,mt("s4d","empierre")+2.5),e.walls=Xt(t,n("s4d")[1]-2,i("s5")[0]+1)*0.05,e;if(e.paved=1,t<i("s6")[0]){let s=i("s5")[0],r=i("s6")[0],o=n("s5d")[0];if(e.stock=0.9-Xt(t,s,r)*0.6,e.scaffold=1,e.walls=0.05+Xt(t,s+0.5,o)*0.7+Xt(t,r-9,r-1.5)*0.25,e.towers=Xt(t,s+1.5,o)*0.72+Xt(t,r-9,r-1.5)*0.28,e.keep=Xt(t,s+3,o)*0.55+Xt(t,r-9,r-1)*0.25,e.gate=Xt(t,s+3,o)*0.45+Xt(t,r-9,r-1)*0.15,t>n("s5c")[0]-0.5&&t<n("s5d")[0])e.towers=Math.max(e.towers,0.95),e.crenels=0;if(e.crenels=0,e.roofs=0,e.buildings=0,e.yard=0,t>=n("s5d")[0]-0.4&&t<n("s5f")[1]-6)if(e.view="wall",t<n("s5e")[0]-0.4)e.wallMode=0,e.wallBuild=Xt(t,n("s5d")[0],mt("s5d","coupe")+0.5),e.wbuttress=0;else if(t<n("s5f")[0]-0.4)e.wallMode=1,e.wcracks=Xt(t,mt("s5e","fissures")-0.8,mt("s5e","mur",1)),e.lean=Xt(t,mt("s5e","pencher")-1.2,n("s5e")[1]+1.8);else e.wallMode=0,e.wallBuild=1,e.wmarker=Xt(t,mt("s5f","épais")-0.4,mt("s5f","épais")+0.6),e.wbuttress=Xt(t,mt("s5f","contreforts")-0.6,mt("s5f","contreforts")+1.4);return e}if(e.walls=1,e.towers=1,e.stock=0.3,t<i("s7")[0]){let s=i("s6")[0];return e.stock=0.3*(1-Xt(t,s,s+6)),e.keep=0.8+Xt(t,s,s+8)*0.2,e.gate=0.6+Xt(t,s,s+8)*0.15,e.crenels=Xt(t,s+1,s+7),e.roofs=0,e.buildings=0,e.yard=0,e.moat=Xt(t,n("s6a")[0]-0.5,n("s6a")[1]+0.5),e.water=Xt(t,mt("s6b","permet")-0.8,mt("s6b","permet")+5.5),e.bridge=0,e}if(e.crenels=1,e.moat=1,e.water=1,e.keep=1,e.gate=1,e.roofs=1,e.bridge=1,t<i("s8")[0]){if(e.gate=0.75+Xt(t,n("s7a")[0]-0.8,n("s7a")[1]+0.3)*0.25,e.roofs=Xt(t,n("s7a")[1],n("s7a")[1]+1.5),e.buildings=0,e.yard=0,e.bridge=1,t<n("s7c")[0]-0.5)e.doorsOpen=t>n("s7b")[0]-1?0:1,e.bar=t>n("s7b")[0]-1?1:0;let s="s7d";if(e.bridgeUp=Xt(t,mt(s,"pont-levis")-0.3,mt(s,"derrière")-0.2),e.portDown=Math.pow(an(t,mt(s,"tombe")-0.6,mt(s,"tombe")+0.05),2),e.doorsOpen=t>=n(s)[0]-0.3?1-Xt(t,mt(s,"vantaux")-0.4,mt(s,"bloqués")-0.1):e.doorsOpen,t>=n(s)[0]-0.3)e.bar=Xt(t,mt(s,"poutre")-0.6,mt(s,"poutre")+0.4);if(e.gateCut=t>=mt(s,"et",1)-0.4&&t<i("s8")[0]?1:0,t>mt(s,"assommoirs")-3.2&&t<i("s8")[0])e.gateCut=1;if(e.gateCut)e.bridgeUp=1,e.portDown=1;return e}if(e.bridgeUp=0,e.portDown=0,e.doorsOpen=1,e.buildings=1,e.yard=1,e.well=1,t<i("s9")[0]){if(e.buildings=Xt(t,i("s8")[0]-0.2,n("s8a")[0]+3),e.yard=e.buildings,e.siege=Xt(t,mt("s8b","encercle")-0.6,mt("s8b","encercle")+2.5)*(1-Ee(n("s8c")[0]-0.5,n("s8c")[0],t)),e.siege>0.5)e.bridgeUp=1,e.portDown=1,e.doorsOpen=0;if(t>=mt("s8c","géologie")-0.6&&t<mt("s8c","céréales")-1.2)e.view="soil",e.soilMode=2;if(t>=mt("s8c","céréales")-1.2)e.view="store",e.stores=0.35+Xt(t,mt("s8c","céréales")-1,n("s8c")[1])*0.65;return e}if(t<i("s10")[0]){if(e.roofHoles=1-Xt(t,mt("s9b","couvreurs")-0.2,n("s9b")[1]+0.5),t>=n("s9c")[0]-0.6&&t<n("s9d")[0]-0.6)e.view="roof",e.beamSwap=Xt(t,mt("s9c","charpentiers")-0.6,n("s9c")[1]);if(e.crack=t<n("s9d")[0]-1?0:Xt(t,n("s9d")[0]-1,mt("s9d","mur")+0.2)*(1-Xt(t,mt("s9d","rejointoient")-0.2,mt("s9d","rejointoient")+0.8)*0.7),e.buttress=Xt(t,mt("s9d","contrefort")-0.8,n("s9d")[1]+0.6),e.puddle=t<n("s9e")[0]-1?0:1-Xt(t,mt("s9e","rigoles")-0.2,mt("s9e","gargouilles")+0.3)*0.85,e.rigole=Xt(t,mt("s9e","rigoles")-0.6,mt("s9e","rigoles")+1.4),e.spout=t>mt("s9e","gargouilles")-1?1:0,t>=n("s9f")[0]-0.6&&t<mt("s9f","lorsqu’un")-0.4)e.view="store",e.stores=1,e.cellarExt=Xt(t,mt("s9f","agrandit")-0.6,mt("s9f","agrandit")+1.6);return e.postern=Xt(t,mt("s9f","mure")-0.6,mt("s9f","mure")+1.5),e}return e.buttress=1,e.postern=1,e.rigole=1,e}function al(t,e){let n={sunElev:38,sunAz:215,sunColor:new Ht(16773590),sunInt:2.6,hemiInt:0.85,skyTop:new Ht(6262726),skyHor:new Ht(13623530),fogNear:260,fogFar:1900,rain:0,studio:!1,sunset:0},i=(u)=>bi(u),s=1-Ee(i("s2")[0]-2,i("s2")[0]+2,t);if(s>0)n.sunElev=$t(n.sunElev,22,s),n.sunColor.lerp(new Ht(16767392),s),n.skyHor.lerp(new Ht(15785152),s*0.7);let r=Nn(t,qe("s4c")[0]-0.8,qe("s4c")[1]+1.2,0.8),o=Nn(t,qe("s9b")[0]-0.8,qe("s9b")[1]+0.3,0.6),a=Math.max(r,o,Nn(t,qe("s9a")[0],qe("s9b")[0],1.5)*0.6);if(a>0)n.rain=Math.max(r,o),n.sunInt=$t(n.sunInt,0.55,a),n.hemiInt=$t(n.hemiInt,1,a),n.skyTop.lerp(new Ht(5791850),a),n.skyHor.lerp(new Ht(9213082),a),n.fogNear=$t(n.fogNear,60,a),n.fogFar=$t(n.fogFar,700,a);let c=Nn(t,qe("s8b")[0]-0.5,qe("s8b")[1]+0.8,1);if(c>0)n.sunColor.lerp(new Ht(16763024),c*0.6),n.skyTop.lerp(new Ht(6975368),c*0.6),n.sunElev=$t(n.sunElev,20,c);let l=Ee(i("s10")[0]-1,i("s10")[0]+2,t);if(l>0)n.sunElev=$t(n.sunElev,24,l),n.sunColor.lerp(new Ht(16769200),l);let h=Ee(qe("s11b")[1]+3.5,qe("s11c")[1]+2,t);if(h>0)n.sunset=h,n.sunElev=$t(n.sunElev,5,h),n.sunAz=$t(n.sunAz,250,h),n.sunColor.lerp(new Ht(16751184),h),n.sunInt=$t(n.sunInt,2.2,h),n.hemiInt=$t(n.hemiInt,0.45,h),n.skyTop.lerp(new Ht(3096432),h),n.skyHor.lerp(new Ht(15764048),h);if(e!=="world")n.studio=!0,n.sunElev=40,n.sunAz=32,n.sunColor=new Ht(16773340),n.sunInt=2.8,n.hemiInt=0.9,n.rain=e==="roof"?0:0;return n}function am(t,e,n,i){return G(t.x+Math.cos(i)*e,n,t.z+Math.sin(i)*e)}function cl(){let t=(c)=>qe(c),e=(c)=>bi(c),n=[],i=(c,l,h,u,d,p=40,g=p,y="io")=>n.push({t0:c,p0:l,l0:h,p1:u,l1:d,fov0:p,fov1:g,e:y}),s=(c,l,h,u,d,p,g,y,f,m=40,w="io")=>n.push({t0:c,orbit:{c:l,r0:h,r1:u,y0:d,y1:p,a0:g,a1:y,look:f||l},fov0:m,fov1:m,e:w}),r=(c,l,h,u)=>G(c.x+l,c.y+h,c.z+u);i(0,G(-235,105,300),G(0,22,0),G(-140,74,182),G(0,20,0),38,38,"out"),s(t("s1a")[0],G(0,20,0),150,82,64,40,2.21,0.95,G(0,22,0),40,"io"),i(t("s1b")[0],G(-24,42,-98),G(0,20,-20),G(-4,34,8),G(0,16,60),44,44,"io"),i(t("s1c")[0],G(48,34,118),G(0,20,30),G(8,17.6,60),G(0,17.5,38),40,36,"io"),i(t("s1c")[1]+0.3,G(0,96,190),G(0,10,0),G(0,122,232),G(0,10,0),42,42,"io"),i(e("s2")[0],G(265,58,240),G(0,10,0),G(190,46,150),G(0,12,0),40,40,"io");let o=$e(33,158);i(t("s2b")[0],G(40.5,o+3,167),G(14,o+5,100),G(38.6,o+2.6,164),G(12,o+6,100),40,36,"io"),i(t("s2b")[0]+6.3,r(Ne,0,78,135),Ne,r(Ne,0,62,100),r(Ne,0,-2,0),42,42,"io"),i(mt("s2c","plaine")-0.4,r(Ne,We[0]+10,32,50),r(Ne,We[0],1,0),r(Ne,We[0]+2,26,40),r(Ne,We[0],1,0),40),i(mt("s2c","un",2)-0.2,r(Ne,We[3]-8,30,48),r(Ne,We[3],0,0),r(Ne,We[3]-2,22,38),r(Ne,We[3],0,0),40),i(mt("s2c","site")-0.2,r(Ne,We[2]+30,34,44),r(Ne,We[2],8,0),r(Ne,We[2]-20,30,46),r(Ne,We[2],8,0),40,40,"lin"),i(t("s2d")[0],r(Ne,We[1]+26,26,44),r(Ne,We[1],5,0),r(Ne,We[1]+8,18,32),r(Ne,We[1],6,0),40),i(mt("s2d","cette"),G(130,64,170),G(0,14,0),G(58,40,78),G(0,16,0),40),s(e("s3")[0],G(0,14,0),74,58,72,54,1.25,0.45,G(0,14,0),40),i(t("s3b")[0],G(-54,23,54),G(-30,14,30),G(-45,19.5,45),G(-30,14,30),40,38),i(t("s3c")[0]-0.4,r(Ye,9,4,40),r(Ye,0,-1,0),r(Ye,5,3,35),r(Ye,0,-1.5,0),40),i(t("s3d")[0]-0.3,r(Ye,-8,1.5,30),r(Ye,0,-2.5,0),r(Ye,6,-1.5,27),r(Ye,0,-5,0),42,40,"lin"),i(mt("s3d","erreur")-0.6,r(Ye,10,4,46),r(Ye,0,-2,0),r(Ye,7,3,42),r(Ye,0,-2,0),40),i(t("s3d")[1]-6,G(64,48,74),G(0,14,0),G(42,36,52),G(0,14,0),40),i(e("s4")[0],G(30,62,92),G(0,14,0),G(-60,72,60),G(-120,10,-40),40);let a=$e(-222,-66);return i(t("s4b")[0],G(-196,a+6,-40),G(-214,a+1,-58),G(-201,a+4.5,-45),G(-215,a+1,-59),42),i(mt("s4b","tailleurs")-0.3,G(-35,ln+3.2,17),G(-44,ln+1,8),G(-38,ln+2.6,13.5),G(-44,ln+1,8),38),i(mt("s4b","charpentiers")-0.3,G(-38,ln+3.4,-21),G(-46,ln+1,-30),G(-40,ln+2.6,-24.5),G(-46,ln+1,-30),38),n.push({t0:t("s4c")[0]-0.3,mud:!0,fov0:36,fov1:36,e:"io"}),i(t("s4d")[0],G(-142,20,30),G(-120,6,0),G(-104,17,60),G(-82,10,36),40,40,"io"),i(mt("s4d","stocke")-0.5,G(70,52,88),G(0,14,0),G(58,46,66),G(0,14,0),40),s(e("s5")[0],G(0,18,0),78,72,30,36,0.95,0.35,G(0,18,0),40),i(t("s5b")[0],G(52,23,10),G(34,21,-5),G(47,21,3),G(34,22,-5),42,40),i(t("s5c")[0],G(-72,30,-2),G(-31,22,-14),G(-64,27,-24),G(-31,22,-16),40),i(t("s5d")[0]-0.4,r(cn,17,8,11),r(cn,1.5,3.4,0),r(cn,13.5,6.8,8.5),r(cn,2,3.6,0),40),i(t("s5e")[0]-0.4,r(cn,-9,5.5,14),r(cn,0,3,0),r(cn,-6,4.5,12),r(cn,0,3,0),40),i(t("s5f")[0]-0.4,r(cn,16,8,9),r(cn,1,3.6,0),r(cn,13,8,-13),r(cn,1,3.4,-1),42,42,"lin"),i(t("s5f")[1]-6,G(84,62,-82),G(0,14,0),G(70,54,-60),G(0,16,0),40),i(e("s6")[0],G(40,115,95),G(0,10,0),G(28,102,72),G(0,10,0),40),i(t("s6b")[0],G(82,34,70),G(40,10,44),G(70,28,64),G(36,10,44),40),i(t("s6c")[0],G(16,19,128),G(0,20,40),G(10,17.5,104),G(0,20,40),40),i(t("s6d")[0],G(22,31,20),G(6,25,44),G(14,29.5,24),G(4,23,46),42),i(mt("s6d","depuis")-0.4,G(19,ln+13.4,27.2),G(6,ln+10,60),G(11,ln+13.2,27.4),G(0,ln+8,62),46),i(mt("s6d","archères")-0.6,G(-48,36,112),G(0,16,36),G(-30,32,96),G(0,16,36),40),i(e("s7")[0],G(26,22,88),G(0,18,36),G(15,20,72),G(0,18,36),40),i(t("s7b")[0],G(24,18,54),G(0,16,42),G(19,17,49),G(0,16,42),40),i(t("s7c")[0],G(-32,26,76),G(0,15,36),G(30,24,72),G(0,15,36),40,40,"lin"),i(t("s7d")[0],G(16,19,64),G(0,17,38),G(9,18,58),G(0,17,38),40),i(mt("s7d","vantaux")-0.8,G(0,17.5,16),G(0,16.5,34),G(0,17,21),G(0,16.5,34),46),i(mt("s7d","et",1)-0.4,G(-14,21.5,47),G(0,17,32),G(-11,20,44),G(0,17.5,32),44),i(e("s8")[0],G(-8,42,42),G(-5,14,-5),G(10,32,30),G(-6,14,-6),40),i(t("s8b")[0],G(0,120,190),G(0,5,0),G(0,135,160),G(0,5,0),42),i(mt("s8c","géologie")-0.6,r(Ye,10,1,38),r(Ye,0,-6.5,0),r(Ye,6,-2,32),r(Ye,0,-7.5,0),40),i(mt("s8c","céréales")-1.2,r(bn,8,6.5,13),r(bn,-2,2,-2),r(bn,4,5,9.5),r(bn,-2,2,-2),42),s(e("s9")[0],G(0,18,0),120,105,50,44,-0.6,-1.1,G(0,18,0),40),i(t("s9b")[0]-0.6,G(-2,31,-7),G(-12,24,-21),G(-5,29,-9.5),G(-12,24,-21),40),i(t("s9c")[0]-0.6,r(ui,11,7,13),r(ui,0,2,0),r(ui,8,5.5,10),r(ui,0,2.2,0),40),i(t("s9d")[0]-0.6,G(-6,21,-58),G(-12,18,-31),G(-9,19.5,-50),G(-12,18,-31),40),i(t("s9e")[0]-0.6,G(14,25,16),G(4,14,4),G(16,23,21),G(4,14,6),40),i(mt("s9e","gargouilles")-0.5,G(48,25,54),G(34,24,34),G(45,23,50),G(34,24,34),40),i(t("s9f")[0]-0.6,r(bn,11,6.5,12),r(bn,2,2,0),r(bn,8,5.5,10),r(bn,2,2,0),42),i(mt("s9f","lorsqu’un")-0.4,G(18,17.5,-44),G(14,15.5,-31),G(15,16.8,-40),G(14,15.5,-31),40),s(t("s9g")[0]-0.5,G(0,18,0),95,105,40,52,2.2,2.9,G(0,18,0),40),s(e("s10")[0],G(0,20,0),112,100,46,42,0.25,1.9,G(0,20,0),40,"lin"),i(e("s11")[0],G(-260,125,255),G(0,15,0),G(-150,80,175),G(0,16,0),40),i(mt("s11a","fallait")-0.4,G(64,13.6,44),G(-20,13,44),G(22,13.8,44.5),G(-20,13.5,44),44,44,"lin"),i(mt("s11a","fondations")-0.3,G(0,16.2,74),G(0,17,35),G(0,15.8,52),G(0,17,35),42),i(mt("s11a","transporter")-0.3,G(44,15.8,47),G(30,30,30),G(41,15.8,42),G(30,31,30),46),i(mt("s11a","construire",2)-0.3,G(-26,ln+12.6,29.3),G(10,ln+11.5,29.3),G(-14,ln+12.6,29.3),G(20,ln+11,29.3),48,48,"lin"),i(mt("s11a","anticiper")-0.3,G(-10,18,12),G(13,30,-13),G(-4,16.8,5),G(13,34,-13),44),i(t("s11b")[0],G(-4,20,-2),G(-18,17,-20),G(-9,19,3),G(-20,16,-18),42),i(mt("s11b","ces")-0.3,G(92,72,122),G(0,14,0),G(80,64,104),G(0,14,0),40),i(t("s11c")[0]-1.5,G(60,48,108),G(0,18,0),G(165,92,265),G(0,20,0),40,40,"io"),n.sort((c,l)=>c.t0-l.t0),n}var $n=null;function cm(t){if(!$n)$n=cl();let e=0;for(let n=0;n<$n.length;n++)if($n[n].t0<=t)e=n;return e}function ll(t,e){if(!$n)$n=cl();let n=cm(t),i=$n[n],s=n+1<$n.length?$n[n+1].t0:i.t0+30,r=an(t,i.t0,s),o=i.e==="lin"?r:i.e==="out"?1-Math.pow(1-r,2):r*r*(3-2*r)*0.75+r*0.25,a,c;if(i.orbit){let l=i.orbit;a=am(l.c,$t(l.r0,l.r1,o),$t(l.y0,l.y1,o),$t(l.a0,l.a1,o)),c=l.look.clone()}else if(i.mud)a=e.p0.clone().lerp(e.p1,o),c=e.l.clone();else a=i.p0.clone().lerp(i.p1,o),c=i.l0.clone().lerp(i.l1,o);return{p:a,l:c,fov:$t(i.fov0,i.fov1,o),shot:n,cutAt:i.t0,nextCut:s}}function hl(t,e){let n=new lc({antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(1),n.setSize(1600,900,!1),n.outputColorSpace=pl,n.toneMapping=fl,n.toneMappingExposure=1.05,n.shadowMap.enabled=!0,n.shadowMap.type=ul,n.domElement.style.width="100%",n.domElement.style.height="100%",t.appendChild(n.domElement);let i=new hc,s=new yn(40,1.7777777777777777,0.3,4200);i.fog=new or(13623530,260,1900);let r=new Lc(13624319,5919288,0.85);i.add(r);let o=new Eo(16773590,2.6);o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.bias=-0.0004,o.shadow.normalBias=0.6,i.add(o,o.target);let a=new Eo(10467544,0.35);i.add(a,a.target);let c={top:{value:new Ht},hor:{value:new Ht},sunDir:{value:new O},sunCol:{value:new Ht},sunset:{value:0}},l=new te(new Un(3800,32,16),new kn({side:dl,depthWrite:!1,fog:!1,uniforms:c,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 hor; uniform vec3 sunDir; uniform vec3 sunCol; uniform float sunset; varying vec3 vD;
        float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
        float n(vec2 p){vec2 i=floor(p);vec2 f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
        void main(){ float y = clamp(vD.y, -0.2, 1.0);
          vec3 c = mix(hor, top, pow(max(y,0.0), 0.55));
          float s = max(dot(normalize(vD), normalize(sunDir)), 0.0);
          c += sunCol * (pow(s, 600.0)*3.0 + pow(s, 12.0)*0.25*(0.4+sunset) + pow(s,3.0)*0.12*sunset);
          // soft clouds
          vec2 uv = vD.xz/(vD.y+0.25)*1.6;
          float cl = n(uv*1.3)*0.6 + n(uv*3.1)*0.3 + n(uv*7.0)*0.1;
          cl = smoothstep(0.55, 0.85, cl) * smoothstep(0.02, 0.25, vD.y);
          vec3 cc = mix(vec3(1.0), mix(vec3(1.0,0.75,0.55), vec3(1.0,0.6,0.45), sunset), sunset);
          c = mix(c, cc*mix(1.0,0.85,sunset), cl*0.55);
          if (vD.y < 0.0) c = hor;
          gl_FragColor = vec4(c, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}));l.frustumCulled=!1,i.add(l);let h=Wc(i);Vc(i),Xc(i);let u=Zc(i),d=qt(8021576,{roughness:1}),p=gr(wn,5.2,d,0.12);i.add(p);let g=new He({color:4863526,roughness:0.35,metalness:0.05}),y=Ie(10261892,{course:0.45,len:0.6,tint:0.25}),f=gr(Bn,5,g,0.1),m=gr(Bn,5,y,0.16);i.add(f,m);let w=0.42,_=Ai(Bn,w),C=new te(new li(6,24).rotateX(-Math.PI/2),new He({color:5914664,roughness:0.25,metalness:0.05}));C.scale.set(1,1,1.6),C.rotation.y=_.dir,C.position.set(_.x,$e(_.x,_.z)+0.22,_.z),i.add(C);let D=new Lt,I=Ie(13813936,{course:1.6,len:2.6,tint:0.12}),R=-222,z=-66,M=$e(R,z);for(let A=0;A<4;A++){let st=Z(fe(new ot(16,12-A*2.6,6)),I,D);st.position.set(R+A*2.6,M-6,z+A*2.6),st.rotation.y=-Math.PI/4}for(let A=0;A<18;A++){let st=Z(new ot(1.6,0.8,1),I,D);st.position.set(R+16+se(A)*10,0,z+16+se(A+9)*10),st.position.y=$e(st.position.x,st.position.z)+0.35,st.rotation.y=se(A*3)*3}i.add(D),Fn(D);let v=(A)=>M-6+12-A*2.6,F=tl(i),W=el(i),J=nl(i),et=il(i),X=sl(i),V=new te(new li(1400,48).rotateX(-Math.PI/2),new He({color:2762274,roughness:1}));V.position.set(0,Ne.y-22,0),V.receiveShadow=!0,i.add(V);let nt={},q=(A,st,S)=>{let x=[];for(let T=0;T<st;T++){let P=S(T);P.visible=!1,i.add(P),x.push(P)}nt[A]={arr:x,i:0}};q("worker",26,(A)=>Ke("worker",A,{tool:["pick","shovel","basket","hammer","stone"][A%5]})),q("digger",16,(A)=>Ke("worker",100+A,{tool:A%2?"pick":"shovel"})),q("mason",18,(A)=>Ke("mason",140+A,{tool:"hammer"})),q("carrier",10,(A)=>Ke("worker",170+A,{tool:A%2?"stone":"basket"})),q("soldier",18,(A)=>Ke("soldier",200+A,{tool:"bow"})),q("guard",6,(A)=>Ke("soldier",230+A,{tool:"spear"})),q("enemy",28,(A)=>Ke("enemy",260+A,{tool:"spear",palette:"enemy"})),q("villager",14,(A)=>Ke("villager",300+A,{tool:["sack","bucket","basket","none"][A%4]})),q("architect",1,()=>Ke("architect",1,{tool:"staff"})),q("noble",1,()=>Ke("noble",2,{})),q("horse",4,(A)=>Do("horse",A)),q("ox",6,(A)=>Do("ox",10+A)),q("cart",5,(A)=>Kc(A,["stone","stone","wood","stone","supplies"][A])),q("crane",2,()=>Qc()),q("ram",1,()=>jc());let tt=(A)=>{let st=nt[A],S=st.arr[st.i%st.arr.length];return st.i++,S.visible=!0,S},lt=()=>{for(let A in nt){nt[A].i=0;for(let st of nt[A].arr)st.visible=!1}},Ct=new O(0,1,0),Ot=0,ct=(A,st)=>Math.abs(A)<33&&Math.abs(st)<33?kt:Lo(A,st,Ot),it=(A,st,S,x,T)=>(A.position.set(st,T??ct(st,S),S),A.rotation.set(0,x,0),A),Gt=(A,st,S,x)=>Math.atan2(S-A,x-st),Ft=(A,st,S,x,T,P=6,L=0)=>{let B=Ai(st,S),j=Math.cos(B.dir),pt=-Math.sin(B.dir);return it(A,B.x+j*L,B.z+pt*L,B.dir),ue(A,x,T*P+se(A.userData.seed||1)*6),B},gt=(A,st,S,x="cart",T=1,P=!1)=>{let L=tt("cart"),B=tt("ox"),j=Ai(A,st),pt=Ai(A,Math.min(1,st+0.012)),At=P?j.dir+Math.PI:j.dir;it(L,j.x,j.z,At),L.userData.wheels.forEach((Pt)=>{Pt.rotation.set(S*2.2*T,0,0),Pt.position.y=0.62});let St=Math.sin(At),ee=Math.cos(At);it(B,j.x+St*4.6,j.z+ee*4.6,At),bs(B,S*4,T);let pe=tt("worker");return it(pe,j.x+St*4.2+Math.cos(At)*1.4,j.z+ee*4.2-Math.sin(At)*1.4,At),ue(pe,T?"walk":"idle",S*5),{c:L,ox:B,d:pe}},Kt=new dn(3.6,4.6,8);Kt.translate(0,2.3,0);let re=new ke(Kt,new He({color:16777215,roughness:0.9}),70);{let A=new oe;for(let st=0;st<70;st++){let S=st/70*Math.PI*2+se(st)*0.05,x=98+se(st*3)*34,T=Math.cos(S)*x,P=Math.sin(S)*x;A.makeScale(1,1,1),A.setPosition(T,$e(T,P)-0.2,P),re.setMatrixAt(st,A),re.setColorAt(st,new Ht(st%3===0?11024940:st%3===1?14208176:9055266))}}re.castShadow=!0,i.add(re);let jt=new ke(new Un(0.6,6,4),new un({color:16747056}),16);{let A=new oe;for(let st=0;st<16;st++){let S=st/16*Math.PI*2+0.1,x=92;A.makeTranslation(Math.cos(S)*92,$e(Math.cos(S)*92,Math.sin(S)*92)+0.4,Math.sin(S)*92),jt.setMatrixAt(st,A)}}i.add(jt);let ut=new ae(0.035,0.035,1.1,4),xt=new ke(ut,qt(2760728),80);i.add(xt);let N=new ke(new hr(0.35,0),Ie(11050632),6);i.add(N);let Bt=new Lt;{let A=Math.atan2(4.675,4.75);for(let st=0;st<5;st++){let S=new te(new ot(1.1,0.06,0.9),new un({color:1183242}));S.position.set(-19+st*3.1,kt+9+2+st%2*0.6,-19.45-(2+st%2*0.6)/Math.tan(A)-0.05),S.rotation.x=A,Bt.add(S)}}i.add(Bt);let _t=1800,It=new ke(new ot(0.018,0.9,0.018),new un({color:13161692,transparent:!0,opacity:0.45,fog:!1}),_t);It.frustumCulled=!1,i.add(It);let ht=(A)=>bi(A),Mt=(A)=>qe(A);function wt(A,st,S="S"){let x=he((A+0.5)/st);if(S==="S")return[x<0.5?$t(-27,-11,x*2):$t(11,27,(x-0.5)*2),kt+11,30,0];if(S==="E")return[30,kt+11,$t(-26,26,x),Math.PI/2];if(S==="W")return[-30,kt+11,$t(-26,26,x),-Math.PI/2];return[$t(-26,26,x),kt+11,-30,Math.PI]}function zt(A,st=8,S=8){for(let P=0;P<S;P++){let L=tt("guard"),B=["S","E","W","N"][P%4],j=(A*0.035+se(P*1.7))%1,pt=0.15+0.7*(0.5+0.5*Math.sin(j*Math.PI*2)),[At,St,ee,pe]=wt(pt*2-0.5,2,B),Pt=Math.cos(j*Math.PI*2)>0?1:-1;it(L,At,ee,pe+Math.PI/2*Pt,St),ue(L,"walk",A*4+P)}let x=[[-3,10.5,"pull"],[-1,6.3,"idle"],[-16,13,"carry"],[-10,2,"walk"],[12,8,"walk"],[-18,-4,"talk"],[20,15,"idle"],[4,20,"walk"],[-6,-12,"walk"],[8,-2,"talk"]];for(let P=0;P<st;P++){let L=tt("villager"),B=x[P%x.length],j=B[0],pt=B[1],At=se(P)*6;if(B[2]==="walk"||B[2]==="carry"){let ee=(A*0.05+se(P*2))%1*Math.PI*2;j+=Math.cos(ee)*5,pt+=Math.sin(ee)*5,At=-ee}it(L,j,pt,At),ue(L,B[2],A*5+P)}let T=tt("horse");it(T,24,2,Math.PI),bs(T,0,0)}function U(A,st){if(lt(),st.scaffold>0&&st.walls<1){let S=tt("crane");it(S,36.6,-6,-Math.PI/2,kt),Uo(S,A,A*0.12%1);let x=tt("crane");it(x,-6,-36.6,0,kt),Uo(x,A+3,(A*0.1+0.4)%1)}if(A<ht("s2")[0]){if(st.walls>=1)zt(A,8,8);for(let S=0;S<4;S++)Ft(tt("villager"),wn,(A*0.006+S*0.21)%1*0.9+0.05,"walk",A,5,S%2?1.2:-1.2);if(st.walls>=1)gt(wn,0.5-A*0.004%0.4,A,"cart",1,!0);return}if(A<ht("s3")[0]){if(A>=Mt("s2b")[0]-1&&A<Mt("s2b")[0]+6.3){let S=tt("horse"),x=33,T=158;it(S,33,158,Gt(33,158,0,0)),bs(S,A*2,0.1);let P=tt("noble");it(P,33,158,Gt(33,158,0,0),$e(33,158)+1.05),ue(P,"idle",A),P.userData.hipL.rotation.x=-1.2,P.userData.hipR.rotation.x=-1.2,P.userData.hipL.rotation.z=-0.5,P.userData.hipR.rotation.z=0.5;let L=tt("architect");it(L,30.4,157.2,Gt(33,158,0,0)),ue(L,A>Mt("s2b")[0]+2.5?"point":"idle",A*2)}return}if(A<ht("s4")[0]){if(A<Mt("s3b")[0]){let S=tt("architect");it(S,0,34,Math.PI),ue(S,"point",A);for(let x=0;x<6;x++){let T=tt("worker"),L=(st.outline*0.98+x*0.012)%1*240,B,j;if(L<60)[B,j]=[-30,30-L];else if(L<120)[B,j]=[-30+(L-60),-30];else if(L<180)[B,j]=[30,-30+(L-120)];else[B,j]=[30-(L-180),30];it(T,B+x%2*1.2,j+1.5,se(x)*6),ue(T,x%2?"hammer":"pull",A*5+x)}}else if(A<Mt("s3c")[0]){for(let S=0;S<16;S++){let x=tt("digger"),T=S<8,P=S%8/8,L=T?-30+(S%2?1:-1)*0.9:$t(-27,-10,P),B=T?$t(28,-4,P):30+(S%2?1:-1)*0.9;if(P>st.trench+0.1){x.visible=!1;continue}it(x,L,B,T?Math.PI/2*(S%2?-1:1):S%2?Math.PI:0,kt-0.35),ue(x,x.userData.tool&&S%2?"pick":"dig",A*4.5+S*1.3)}for(let S=0;S<5;S++){let x=tt("carrier"),T=(A*0.12+S*0.2)%1,P=T>0.5,L=-32-(P?1-T:T)*2*6,B=24-S*7;it(x,L,B,P?Math.PI/2:-Math.PI/2),ue(x,"carry",A*6+S)}}else if(st.view==="world")for(let S=0;S<10;S++){let x=tt("mason"),[T,,P,L]=wt(S%5,5,["S","W","N","E"][Math.floor(S/5)*2]);it(x,T,P+(Math.abs(P)>29?-2.2:0),L+Math.PI,kt+0.6*st.footing),ue(x,"hammer",A*5+S)}return}if(A<ht("s5")[0]){if(A<Mt("s4b")[0]){gt(Bn,0.6+(A-ht("s4")[0])*0.012,A),gt(Bn,0.3+(A-ht("s4")[0])*0.012,A);for(let S=0;S<6;S++){let x=tt("carrier"),T=(A*0.1+S*0.17)%1;it(x,-40+T*10*(S%2?1:-1),-10+S*6,S%2?Math.PI/2:-Math.PI/2),ue(x,"carry",A*6+S)}}if(A>=Mt("s4b")[0]-0.5&&A<mt("s4b","tailleurs")-0.3){for(let S=0;S<12;S++){let x=tt(S<8?"digger":"worker"),T=S%3,P=(Math.floor(S/3)-1.5)*2.6+S%3*0.7,L=R+(T+1)*2.6+1.6+P*0.707,B=z+(T+1)*2.6+1.6-P*0.707;it(x,L,B,-Math.PI*0.75,v(T+1)),ue(x,S%2?"pick":"hammer",A*4.2+S)}gt(Bn,0.04,A,"cart",0)}if(A>=mt("s4b","tailleurs")-0.5&&A<mt("s4b","charpentiers")-0.3)for(let S=0;S<5;S++){let x=tt("mason"),T=S/5*Math.PI*2;it(x,-44+Math.cos(T)*2.6,8+Math.sin(T)*2.2,Gt(Math.cos(T),Math.sin(T),0,0)),ue(x,"chisel",A*6+S)}if(A>=mt("s4b","charpentiers")-0.5&&A<Mt("s4c")[0]-0.3)for(let S=0;S<4;S++){let x=tt("worker"),T=S%2?1:-1;it(x,-43.5+T*1,-31.5+Math.floor(S/2)*3,T>0?-Math.PI/2:Math.PI/2),ue(x,"hammer",A*5+S)}if(A>=Mt("s4c")[0]-0.5&&A<Mt("s4d")[0]){let{c:S,ox:x,d:T}=gt(Bn,w,A,"cart",0.15);S.position.y-=0.55,S.rotation.z=0.12,S.rotation.x=-0.06;let P=S.userData.wheels[0];P.rotation.z=0.5,P.position.y=0.3,x.rotation.x=-0.08,bs(x,A*6,0.5),ue(T,"pull",A*4);let L=_.dir;for(let B=0;B<3;B++){let j=tt("worker"),pt=_.x-Math.sin(L)*2.6+Math.cos(L)*(B-1)*0.8,At=_.z-Math.cos(L)*2.6-Math.sin(L)*(B-1)*0.8;it(j,pt,At,L),j.position.y-=0.15,ue(j,B===2&&A>mt("s4c","bêtes")-0.5?"tired":"push",A*3+B)}}if(A>=Mt("s4d")[0]-0.3){for(let S=0;S<4;S++)gt(Bn,((A-Mt("s4d")[0])*0.014+S*0.24)%1,A);for(let S=0;S<8;S++){let x=tt("carrier"),T=(A*0.09+S*0.13)%1;it(x,-40-T*6,-16+S*4.5,-Math.PI/2),ue(x,"carry",A*6+S)}}return}if(A<ht("s6")[0]){if(st.view==="world"){let S=(T)=>u.elements[T].mesh.scale.y*11.6-0.6,x=["wN","wE","wW","wSW","wSE"];for(let T=0;T<16;T++){let P=tt("mason"),L=x[T%5],B=u.wallInfo.find((St)=>St.name===L),j=(T*0.37%1-0.5)*(B.len-6),pt=B.cx+(B.ax?j:0),At=B.cz+(B.ax?0:j);it(P,pt,At,B.ax?T%2?0:Math.PI:T%2?Math.PI/2:-Math.PI/2,kt+S(L)),ue(P,T%3===0?"carry":"hammer",A*5+T)}for(let T=0;T<6;T++){let P=tt("carrier"),L=(A*0.08+T*0.16)%1;it(P,42-L*6,-20+T*8,-Math.PI/2),ue(P,"carry",A*6+T)}}return}if(A<ht("s7")[0]){if(A<Mt("s6b")[0])for(let S=0;S<16;S++){let x=tt("digger"),T=S/16,P=T*Math.PI*2;if(T>st.moat+0.02||T<st.moat-0.35){x.visible=!1;continue}let L=44,B=Math.sin(P)*L*1.2,j=Math.cos(P)*L*1.2,pt=he(B,-44,44),At=he(j,-44,44);it(x,pt,At,P+Math.PI,kt-3.5),ue(x,S%2?"pick":"dig",A*4.5+S)}if(A>=Mt("s6c")[0]-0.5){let S=Xt(A,Mt("s6c")[0]-0.5,Mt("s6d")[0]+1);for(let x=0;x<24;x++){let T=tt("enemy"),P=Math.floor(x/6),L=x%6,B=$t(0.2,0.05,S)+P*0.016,j=Ai(wn,B),pt=(L-2.5)*1.6+P%2*0.4,At=Math.cos(j.dir),St=-Math.sin(j.dir);it(T,j.x+At*pt,j.z+St*pt,j.dir+Math.PI),ue(T,S<1?"march":"idle",A*5.5+P)}if(A>=Mt("s6d")[0]-0.5)for(let x=0;x<12;x++){let T=tt("soldier"),[P,L,B]=wt(x%6,6,"S");if(x>=6){let j=x%2?-30:30,pt=Math.PI/2+(x%3-1)*0.5;it(T,j+Math.cos(pt)*3.6,30+Math.sin(pt)*3.6,0,kt+18)}else it(T,P,B+0.4,0,L);ue(T,"shoot",A*3+x)}}return}if(A<ht("s8")[0]){if(A>=Mt("s7b")[0]-0.8&&A<Mt("s7c")[0]-0.5){let S=tt("ram"),x=Xt(A,Mt("s7b")[0]-0.8,Mt("s7b")[0]+2.5),T=$t(58,42.5,x);it(S,0,T,Math.PI,kt+0.6);let P=x>=1?Math.pow(Math.abs(Math.sin((A-Mt("s7b")[0])*2.4)),6):0;S.userData.log.position.z=-P*1.4-0.2+(x>=1?0:0);for(let L=0;L<6;L++){let B=tt("enemy");it(B,L%2?0.75:-0.75,T+1.2+Math.floor(L/2)*1.6,Math.PI,kt+0.6),ue(B,"push",A*4+L)}for(let L=0;L<14;L++){let B=tt("enemy");it(B,(L%7-3)*1.7,52+Math.floor(L/7)*2+L%2*0.5,Math.PI),ue(B,"idle",A+L)}for(let L=0;L<6;L++){let B=tt("soldier");it(B,(L-2.5)*1.6,37.1,0,kt+13.4),ue(B,"shoot",A*3+L)}}if(A>=Mt("s7c")[0]-0.5&&A<Mt("s7d")[0]-0.3){for(let x=0;x<8;x++){let T=tt("villager"),P=(A*0.045+x*0.125)%1,L=x%2===0,B=L?$t(66,18,P):$t(18,66,P);it(T,L?-0.9:0.9,B,L?Math.PI:0,B>37.7&&B<48.7?kt+0.4:void 0),ue(T,"walk",A*5+x)}let S=gt(wn,0.12-(A-Mt("s7c")[0])*0.006,A,"cart",1,!0);for(let x=0;x<2;x++){let T=tt("guard");it(T,x?2.4:-2.4,41,0),ue(T,"idle",A+x)}}if(A>=Mt("s7d")[0]-0.3)for(let S=0;S<4;S++){let x=tt("guard");it(x,(S-1.5)*1.6,30.5,0,kt+14.2),ue(x,"idle",A+S)}return}if(A<ht("s9")[0]){if(zt(A,st.siege>0.3?4:12,10),st.siege>0.01)for(let S=0;S<28;S++){let x=tt("enemy"),T=S/28*Math.PI*2+0.05,P=88-S%3*3,L=Math.cos(T)*P,B=Math.sin(T)*P;it(x,L,B,Gt(L,B,0,0)),ue(x,"idle",A+S)}return}if(A<ht("s10")[0]){if(zt(A,6,6),A>=Mt("s9b")[0]-1&&A<Mt("s9c")[0]){let S=Math.atan2(4.675,4.75);for(let x=0;x<2;x++){let T=tt("worker"),P=-17+x*6+(A-Mt("s9b")[0])*0.6;it(T,P,-22.2,Math.PI,kt+9+2.4),T.rotation.x=-S*0.6,ue(T,"hammer",A*5+x)}}if(A>=Mt("s9d")[0]-1&&A<Mt("s9e")[0])for(let S=0;S<3;S++){let x=tt("mason");it(x,-15.5+S*3.5,-35.5,0),ue(x,S===1?"carry":"hammer",A*5+S)}if(A>=Mt("s9e")[0]-1&&A<Mt("s9f")[0])for(let S=0;S<3;S++){let x=tt("digger");it(x,5.2,4+st.rigole*22-S*2.2,Math.PI),ue(x,"dig",A*4.5+S)}if(A>=mt("s9f","lorsqu’un")-1&&A<Mt("s9g")[0])for(let S=0;S<2;S++){let x=tt("mason");it(x,12.8+S*2.4,-33.6,Math.PI),ue(x,"hammer",A*5+S)}if(A>=Mt("s9g")[0]-1)for(let S=0;S<6;S++){let x=tt("mason"),[T,P,L,B]=wt(S,6,S%2?"E":"W");it(x,T,L,B+Math.PI,P),ue(x,"hammer",A*5+S)}return}zt(A,12,10);for(let S=0;S<6;S++)Ft(tt("villager"),wn,(A*0.005+S*0.16)%1*0.92+0.04,"walk",A,5,S%2?1.2:-1.2);gt(wn,0.55-A*0.004%0.45,A,"cart",1,!0)}let E={world:new O,D1:Ne,D2:Ye,D3:cn,D4:bn,D5:ui},Y=e?[...e.querySelectorAll("[data-at]")].map((A)=>{let[st,S,x]=A.dataset.at.split(",").map(Number),T=E[A.dataset.space||"world"]||E.world;return{el:A,inner:A.firstElementChild||A,p:new O(st,S,x).add(T),t0:+A.dataset.start,t1:+A.dataset.start+ +A.dataset.duration}}):[],at=new O;function dt(A){for(let st of Y){if(A<st.t0||A>=st.t1)continue;at.copy(st.p).project(s);let S=at.z<1&&Math.abs(at.x)<1.2&&Math.abs(at.y)<1.2,x=(at.x*0.5+0.5)*1920,T=(-at.y*0.5+0.5)*1080;st.el.style.transform=`translate(${x.toFixed(1)}px, ${T.toFixed(1)}px)`;let P=Ee(st.t0,st.t0+0.35,A)*(1-Ee(st.t1-0.35,st.t1,A));st.inner.style.opacity=S?P.toFixed(3):"0"}}let rt=new oe,Wt=new Ln,yt=new O;function Tt(A,st){if(Ot=A.moat,h.setMoat(A.moat),h.waterMat.userData.uniforms.uTime.value=st,u.apply(A,st),u.setGhost(A.ghost>0.01,A.ghost),A.ghost>0.01)u.apply(Object.assign({},A,{walls:1,towers:1,keep:1,gate:1,crenels:1,roofs:1,bridge:0}),st);F.apply(A,st),W.apply(A,st),J.apply(A,st),et.apply(A,st),X.apply(A,st),m.visible=A.paved>0.5,f.visible=!m.visible,C.visible=A.paved<0.5,re.visible=jt.visible=A.siege>0.01,Bt.visible=A.roofHoles>0.01&&A.buildings>=1,Bt.children.forEach((S,x)=>S.visible=x<A.roofHoles*5)}function ie(A,st,S,x){let T=A.sunElev*Math.PI/180,P=A.sunAz*Math.PI/180;yt.set(Math.sin(P)*Math.cos(T),Math.sin(T),Math.cos(P)*Math.cos(T)),o.color.copy(A.sunColor),o.intensity=A.sunInt,r.intensity=A.hemiInt,r.color.copy(A.skyTop).lerp(new Ht(16777215),0.45);let L=he(x*0.85,22,170);o.position.copy(S).addScaledVector(yt,400),o.target.position.copy(S);let B=o.shadow.camera;if(B.left=-L,B.right=L,B.top=L,B.bottom=-L,B.near=1,B.far=900,B.updateProjectionMatrix(),a.position.copy(S).add(new O(-yt.x,0.4,-yt.z).multiplyScalar(300)),a.target.position.copy(S),A.studio)i.background=new Ht(2499359),i.fog=null,l.visible=!1,V.visible=!0;else i.background=null,i.fog=i.fog||new or(13623530,260,1900),i.fog.color.copy(A.skyHor),i.fog.near=A.fogNear,i.fog.far=A.fogFar,l.visible=!0,V.visible=!1,l.position.copy(st),c.top.value.copy(A.skyTop),c.hor.value.copy(A.skyHor),c.sunDir.value.copy(yt),c.sunCol.value.copy(A.sunColor),c.sunset.value=A.sunset;if(h.waterMat.userData.uniforms.uSky.value.copy(A.skyHor),It.visible=A.rain>0.01,It.visible){It.material.opacity=0.45*A.rain;for(let j=0;j<_t;j++){let pt=(se(j*1.37)-0.5)*70,At=(se(j*2.11)-0.5)*70,St=Math.hypot(pt,At);if(St<7)pt*=7/Math.max(St,0.1),At*=7/Math.max(St,0.1);let ee=(ft*1.6+se(j*3.7))%1;rt.makeRotationZ(0.12),rt.setPosition(st.x+pt,st.y+24-ee*40,st.z+At),It.setMatrixAt(j,rt)}It.instanceMatrix.needsUpdate=!0}}let ft=0;function Dt(A,st){let S=0,x=qe("s6d")[0]-0.5,T=bi("s7")[0],P=qe("s7b")[0],L=qe("s7c")[0]-0.5;if(A>=x&&A<T||A>=P&&A<L)for(let pt=0;pt<80;pt++){let St=Math.floor((A+se(pt)*1.6)/1.6)*1.6-se(pt)*1.6,ee=(A-St)/1.6;if(ee<0||ee>1)continue;let pe=new O($t(-26,26,se(pt*3)),kt+12.6,31),Pt=new O((se(pt*5)-0.5)*16,ct(0,60)+0.5,52+se(pt*7)*14);if(pt%4===3)pe.copy(Pt),Pt.set($t(-24,24,se(pt*9)),kt+12,30.5);let Vt=pe.clone().lerp(Pt,ee);Vt.y+=Math.sin(ee*Math.PI)*9;let bt=pe.clone().lerp(Pt,Math.min(1,ee+0.02));bt.y+=Math.sin(Math.min(1,ee+0.02)*Math.PI)*9;let Se=bt.sub(Vt).normalize();Wt.setFromUnitVectors(new O(0,1,0),Se),rt.compose(Vt,Wt,new O(1,1,1)),xt.setMatrixAt(S++,rt)}xt.count=S,xt.visible=S>0,xt.instanceMatrix.needsUpdate=!0;let j=0;if(st.gateCut>0.5){let pt=mt("s7d","assommoirs")-0.2;for(let At=0;At<3;At++){let St=(A-pt-At*0.5)%1.5/0.9;if(A<pt||St<0||St>1)continue;rt.makeTranslation(0,kt+6-St*St*5.2,30+At*2.4),N.setMatrixAt(j++,rt)}}N.count=j,N.visible=j>0,N.instanceMatrix.needsUpdate=!0}let de=(()=>{let A=_.dir,st=$e(_.x,_.z);return{p0:new O(_.x+Math.cos(A)*15+Math.sin(A)*1,st+4.2,_.z-Math.sin(A)*15+Math.cos(A)*1),p1:new O(_.x+Math.cos(A)*12.5+Math.sin(A)*3.5,st+3.4,_.z-Math.sin(A)*12.5+Math.cos(A)*3.5),l:new O(_.x+Math.sin(A)*2,st+1.1,_.z+Math.cos(A)*2)}})(),ne=mt("s11b","ces")-0.3+4.2,Ut=qe("s11c")[0]-1.5;function ce(A,st){ft=A;let S=st||ol(A),x=ll(A,de);s.position.copy(x.p),s.lookAt(x.l),s.fov=x.fov,s.near=S.view==="world"?0.3:0.2,s.updateProjectionMatrix();let T=al(A,S.view),P=x.p.distanceTo(x.l);if(ie(T,x.p,x.l,P),!st&&A>=ne&&A<Ut){let B=Xt(A,ne,ne+1.2),j=Math.round($t(1600,800,B));n.setScissorTest(!0);let pt=rl();Tt(pt,A),U(A,pt),Dt(A,pt),n.setScissor(0,0,j,900),n.setViewport(0,0,1600,900),n.render(i,s);let At=xr();Tt(At,A),U(A,At),n.setScissor(j,0,1600-j,900),n.render(i,s),n.setScissorTest(!1)}else Tt(S,A),U(A,S),Dt(A,S),n.render(i,s);return dt(A),{shot:x.shot}}return{render:ce,camera:s,renderer:n}}window.CastleWorld={createWorld:hl};})();
