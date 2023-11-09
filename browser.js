// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e){return Object.keys(Object(e))}var r=void 0!==Object.keys,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString,i=Object.prototype.hasOwnProperty;function c(e,r){return null!=e&&i.call(e,r)}var a,l="function"==typeof Symbol?Symbol:void 0,u="function"==typeof l?l.toStringTag:"",f=n()?function(e){var r,t,n;if(null==e)return o.call(e);t=e[u],r=c(e,u);try{e[u]=void 0}catch(r){return o.call(e)}return n=o.call(e),r?e[u]=t:delete e[u],n}:function(e){return o.call(e)};function p(e){return"[object Arguments]"===f(e)}a=function(){return p(arguments)}();var s=a,g="function"==typeof Object.defineProperty?Object.defineProperty:null,m=Object.defineProperty;function d(e){return"number"==typeof e}function h(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function y(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+h(o):h(o)+e,n&&(e="-"+e)),e}var b=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function x(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!d(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=y(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=y(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===v.call(e.specifier)?v.call(t):b.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function w(e){return"string"==typeof e}var j=Math.abs,S=String.prototype.toLowerCase,E=String.prototype.toUpperCase,_=String.prototype.replace,O=/e\+(\d)$/,k=/e-(\d)$/,T=/^(\d+)$/,I=/^(\d+)e/,A=/\.0$/,V=/\.0*e/,P=/(\..*[^0])0*e/;function F(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!d(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":j(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=_.call(t,P,"$1e"),t=_.call(t,V,"e"),t=_.call(t,A,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=_.call(t,O,"e+0$1"),t=_.call(t,k,"e-0$1"),e.alternate&&(t=_.call(t,T,"$1."),t=_.call(t,I,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===E.call(e.specifier)?E.call(t):S.call(t)}function N(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function $(e,r,t){var n=r-e.length;return n<0?e:e=t?e+N(n):N(n)+e}var C=String.fromCharCode,B=isNaN,L=Array.isArray;function R(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function G(e){var r,t,n,o,i,c,a,l,u;if(!L(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",a=1,l=0;l<e.length;l++)if(w(n=e[l]))c+=n;else{if(r=void 0!==n.precision,!(n=R(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(a=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(o=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[a],10),a+=1,B(n.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[a],10),a+=1,B(n.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[a],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=x(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!B(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=B(i)?String(n.arg):C(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=F(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=y(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=$(n.arg,n.width,n.padRight)),c+=n.arg||"",a+=1}return c}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function X(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Z(e){var r,t,n,o;for(t=[],o=0,n=W.exec(e);n;)(r=e.slice(o,W.lastIndex-n[0].length)).length&&t.push(r),t.push(X(n)),o=W.lastIndex,n=W.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function M(e){return"string"==typeof e}function Y(e){var r,t,n;if(!M(e))throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Z(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return G.apply(null,t)}var U,H=Object.prototype,z=H.toString,D=H.__defineGetter__,q=H.__defineSetter__,J=H.__lookupGetter__,K=H.__lookupSetter__;U=function(){try{return g({},"x",{}),!0}catch(e){return!1}}()?m:function(e,r,t){var n,o,i,c;if("object"!=typeof e||null===e||"[object Array]"===z.call(e))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(J.call(e,r)||K.call(e,r)?(n=e.__proto__,e.__proto__=H,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,c="set"in t,o&&(i||c))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&D&&D.call(e,r,t.get),c&&q&&q.call(e,r,t.set),e};var Q=U;function ee(e,r,t){Q(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function re(e){return"string"==typeof e}var te=String.prototype.valueOf,ne=n();function oe(e){return"object"==typeof e&&(e instanceof String||(ne?function(e){try{return te.call(e),!0}catch(e){return!1}}(e):"[object String]"===f(e)))}function ie(e){return re(e)||oe(e)}function ce(e){return"number"==typeof e}ee(ie,"isPrimitive",re),ee(ie,"isObject",oe);var ae=Number,le=ae.prototype.toString,ue=n();function fe(e){return"object"==typeof e&&(e instanceof ae||(ue?function(e){try{return le.call(e),!0}catch(e){return!1}}(e):"[object Number]"===f(e)))}function pe(e){return ce(e)||fe(e)}function se(e){return e!=e}function ge(e){return ce(e)&&se(e)}function me(e){return fe(e)&&se(e.valueOf())}function de(e){return ge(e)||me(e)}ee(pe,"isPrimitive",ce),ee(pe,"isObject",fe),ee(de,"isPrimitive",ge),ee(de,"isObject",me);var he=Number.POSITIVE_INFINITY,ye=ae.NEGATIVE_INFINITY,be=Math.floor;function ve(e){return be(e)===e}function xe(e){return e<he&&e>ye&&ve(e)}function we(e){return ce(e)&&xe(e)}function je(e){return fe(e)&&xe(e.valueOf())}function Se(e){return we(e)||je(e)}ee(Se,"isPrimitive",we),ee(Se,"isObject",je);var Ee=Object.prototype.propertyIsEnumerable,_e=!Ee.call("beep","0");function Oe(e,r){var t;return null!=e&&(!(t=Ee.call(e,r))&&_e&&ie(e)?!ge(r=+r)&&we(r)&&r>=0&&r<e.length:t)}var ke=Array.isArray?Array.isArray:function(e){return"[object Array]"===f(e)},Te=s?p:function(e){return null!==e&&"object"==typeof e&&!ke(e)&&"number"==typeof e.length&&ve(e.length)&&e.length>=0&&e.length<=4294967295&&c(e,"callee")&&!Oe(e,"callee")},Ie=Array.prototype.slice;function Ae(e){return null!==e&&"object"==typeof e}ee(Ae,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ke(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ae));var Ve=Oe((function(){}),"prototype"),Pe=!Oe({toString:null},"toString");function Fe(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&ve(e.length)&&e.length>=0&&e.length<=9007199254740991}function Ne(e,r,t){var n,o;if(!Fe(e)&&!re(e))throw new TypeError(Y("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!we(t))throw new TypeError(Y("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(de(r)){for(;o<n;o++)if(de(e[o]))return o}else for(;o<n;o++)if(e[o]===r)return o;return-1}var $e=/./;function Ce(e){return"boolean"==typeof e}var Be=Boolean,Le=Boolean.prototype.toString,Re=n();function Ge(e){return"object"==typeof e&&(e instanceof Be||(Re?function(e){try{return Le.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===f(e)))}function We(e){return Ce(e)||Ge(e)}function Xe(){return new Function("return this;")()}ee(We,"isPrimitive",Ce),ee(We,"isObject",Ge);var Ze="object"==typeof self?self:null,Me="object"==typeof window?window:null,Ye="object"==typeof globalThis?globalThis:null,Ue=function(e){if(arguments.length){if(!Ce(e))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Xe()}if(Ye)return Ye;if(Ze)return Ze;if(Me)return Me;throw new Error("unexpected error. Unable to resolve global object.")}(),He=Ue.document&&Ue.document.childNodes,ze=Int8Array;function De(){return/^\s*function\s*([^(]*)/i}var qe=/^\s*function\s*([^(]*)/i;function Je(e){var r,t,n,o;if(("Object"===(t=f(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=qe.exec(n.toString()))return r[1]}return Ae(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}ee(De,"REGEXP",qe);var Ke="function"==typeof $e||"object"==typeof ze||"function"==typeof He?function(e){return Je(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Je(e).toLowerCase():r};function Qe(e){return e.constructor&&e.constructor.prototype===e}var er,rr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],tr="undefined"==typeof window?void 0:window,nr=function(){var e;if("undefined"===Ke(tr))return!1;for(e in tr)try{-1===Ne(rr,e)&&c(tr,e)&&null!==tr[e]&&"object"===Ke(tr[e])&&Qe(tr[e])}catch(e){return!0}return!1}(),or="undefined"!=typeof window,ir=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];er=r?function(){return 2!==(e(arguments)||"").length}(1,2)?function(r){return Te(r)?e(Ie.call(r)):e(r)}:e:function(e){var r,t,n,o,i,a,l;if(o=[],Te(e)){for(l=0;l<e.length;l++)o.push(l.toString());return o}if("string"==typeof e){if(e.length>0&&!c(e,"0"))for(l=0;l<e.length;l++)o.push(l.toString())}else{if(0==(n="function"==typeof e)&&!Ae(e))return o;t=Ve&&n}for(i in e)t&&"prototype"===i||!c(e,i)||o.push(String(i));if(Pe)for(r=function(e){if(!1===or&&!nr)return Qe(e);try{return Qe(e)}catch(e){return!1}}(e),l=0;l<ir.length;l++)a=ir[l],r&&"constructor"===a||!c(e,a)||o.push(String(a));return o};var cr=er,ar={float64:{complex64:"complex128",complex128:"complex128"},float32:{complex64:"complex64",complex128:"complex128"},int32:{complex64:"complex128",complex128:"complex128"},int16:{complex64:"complex64",complex128:"complex128"},int8:{complex64:"complex64",complex128:"complex128"},uint32:{complex64:"complex128",complex128:"complex128"},uint16:{complex64:"complex64",complex128:"complex128"},uint8:{complex64:"complex64",complex128:"complex128"},uint8c:{complex64:"complex64",complex128:"complex128"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128"}};function lr(){var e,r,t,n,o,i,c,a,l;for(t={},r=(e=cr(ar)).length,l=0;l<r;l++){for(o=e[l],c=ar[o],n={},a=0;a<r;a++)n[i=e[a]]=c[i];t[o]=n}return t}return function(e,r){var t;return 0===arguments.length?lr():c(ar,e)&&c(t=ar[e],r)?t[r]:null}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).promotionRules=r();
//# sourceMappingURL=browser.js.map