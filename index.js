// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).promotionRules=t()}(this,(function(){"use strict";function e(e){return Object.keys(Object(e))}var t=void 0!==Object.keys;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return r&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(e,t){return null!=e&&i.call(e,t)}var c="function"==typeof Symbol?Symbol.toStringTag:"";var l,f=n()?function(e){var t,r,n;if(null==e)return o.call(e);r=e[c],t=u(e,c);try{e[c]=void 0}catch(t){return o.call(e)}return n=o.call(e),t?e[c]=r:delete e[c],n}:function(e){return o.call(e)};function p(e){return"[object Arguments]"===f(e)}l=function(){return p(arguments)}();var a=l,m="function"==typeof Object.defineProperty?Object.defineProperty:null;var s,y=Object.defineProperty,b=Object.prototype,x=b.toString,v=b.__defineGetter__,g=b.__defineSetter__,d=b.__lookupGetter__,h=b.__lookupSetter__;s=function(){try{return m({},"x",{}),!0}catch(e){return!1}}()?y:function(e,t,r){var n,o,i,u;if("object"!=typeof e||null===e||"[object Array]"===x.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===x.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(d.call(e,t)||h.call(e,t)?(n=e.__proto__,e.__proto__=b,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&v&&v.call(e,t,r.get),u&&g&&g.call(e,t,r.set),e};var j=s;function w(e,t,r){j(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function _(e){return"string"==typeof e}var O=String.prototype.valueOf;var S=n();function E(e){return"object"==typeof e&&(e instanceof String||(S?function(e){try{return O.call(e),!0}catch(e){return!1}}(e):"[object String]"===f(e)))}function I(e){return _(e)||E(e)}function T(e){return"number"==typeof e}w(I,"isPrimitive",_),w(I,"isObject",E);var P=Number,A=P.prototype.toString;var N=n();function k(e){return"object"==typeof e&&(e instanceof P||(N?function(e){try{return A.call(e),!0}catch(e){return!1}}(e):"[object Number]"===f(e)))}function B(e){return T(e)||k(e)}function V(e){return e!=e}function F(e){return T(e)&&V(e)}function L(e){return k(e)&&V(e.valueOf())}function G(e){return F(e)||L(e)}w(B,"isPrimitive",T),w(B,"isObject",k),w(G,"isPrimitive",F),w(G,"isObject",L);var Y=Number.POSITIVE_INFINITY,C=P.NEGATIVE_INFINITY,M=Math.floor;function X(e){return M(e)===e}function H(e){return e<Y&&e>C&&X(e)}function R(e){return T(e)&&H(e)}function W(e){return k(e)&&H(e.valueOf())}function D(e){return R(e)||W(e)}w(D,"isPrimitive",R),w(D,"isObject",W);var U=Object.prototype.propertyIsEnumerable;var q=!U.call("beep","0");function z(e,t){var r;return null!=e&&(!(r=U.call(e,t))&&q&&I(e)?!F(t=+t)&&R(t)&&t>=0&&t<e.length:r)}var J=Array.isArray?Array.isArray:function(e){return"[object Array]"===f(e)};var K=a?p:function(e){return null!==e&&"object"==typeof e&&!J(e)&&"number"==typeof e.length&&X(e.length)&&e.length>=0&&e.length<=4294967295&&u(e,"callee")&&!z(e,"callee")},Q=Array.prototype.slice;function Z(e){return null!==e&&"object"==typeof e}w(Z,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!J(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(Z));var $=z((function(){}),"prototype"),ee=!z({toString:null},"toString");function te(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&X(e.length)&&e.length>=0&&e.length<=9007199254740991}function re(e,t,r){var n,o;if(!te(e)&&!_(e))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+e+"`.");if(0===(n=e.length))return-1;if(3===arguments.length){if(!R(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(G(t)){for(;o<n;o++)if(G(e[o]))return o}else for(;o<n;o++)if(e[o]===t)return o;return-1}var ne=/./;function oe(e){return"boolean"==typeof e}var ie=Boolean.prototype.toString;var ue=n();function ce(e){return"object"==typeof e&&(e instanceof Boolean||(ue?function(e){try{return ie.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===f(e)))}function le(e){return oe(e)||ce(e)}function fe(){return new Function("return this;")()}w(le,"isPrimitive",oe),w(le,"isObject",ce);var pe="object"==typeof self?self:null,ae="object"==typeof window?window:null,me="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},se="object"==typeof me?me:null;var ye=function(e){if(arguments.length){if(!oe(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return fe()}if(pe)return pe;if(ae)return ae;if(se)return se;throw new Error("unexpected error. Unable to resolve global object.")}(),be=ye.document&&ye.document.childNodes,xe=Int8Array;function ve(){return/^\s*function\s*([^(]*)/i}var ge=/^\s*function\s*([^(]*)/i;function de(e){var t,r,n,o;if(("Object"===(r=f(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=ge.exec(n.toString()))return t[1]}return Z(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}w(ve,"REGEXP",ge);var he="function"==typeof ne||"object"==typeof xe||"function"==typeof be?function(e){return de(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?de(e).toLowerCase():t};function je(e){return e.constructor&&e.constructor.prototype===e}var we=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],_e="undefined"==typeof window?void 0:window;var Oe=function(){var e;if("undefined"===he(_e))return!1;for(e in _e)try{-1===re(we,e)&&u(_e,e)&&null!==_e[e]&&"object"===he(_e[e])&&je(_e[e])}catch(e){return!0}return!1}(),Se="undefined"!=typeof window;var Ee,Ie=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ee=t?function(){return 2!==(e(arguments)||"").length}(1,2)?function(t){return K(t)?e(Q.call(t)):e(t)}:e:function(e){var t,r,n,o,i,c,l;if(o=[],K(e)){for(l=0;l<e.length;l++)o.push(l.toString());return o}if("string"==typeof e){if(e.length>0&&!u(e,"0"))for(l=0;l<e.length;l++)o.push(l.toString())}else{if(!1==(n="function"==typeof e)&&!Z(e))return o;r=$&&n}for(i in e)r&&"prototype"===i||!u(e,i)||o.push(String(i));if(ee)for(t=function(e){if(!1===Se&&!Oe)return je(e);try{return je(e)}catch(e){return!1}}(e),l=0;l<Ie.length;l++)c=Ie[l],t&&"constructor"===c||!u(e,c)||o.push(String(c));return o};var Te=Ee,Pe={float64:{complex64:"complex128",complex128:"complex128"},float32:{complex64:"complex64",complex128:"complex128"},int32:{complex64:"complex128",complex128:"complex128"},int16:{complex64:"complex64",complex128:"complex128"},int8:{complex64:"complex64",complex128:"complex128"},uint32:{complex64:"complex128",complex128:"complex128"},uint16:{complex64:"complex64",complex128:"complex128"},uint8:{complex64:"complex64",complex128:"complex128"},uint8c:{complex64:"complex64",complex128:"complex128"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128"}};function Ae(){var e,t,r,n,o,i,u,c,l;for(r={},t=(e=Te(Pe)).length,l=0;l<t;l++){for(o=e[l],u=Pe[o],n={},c=0;c<t;c++)n[i=e[c]]=u[i];r[o]=n}return r}return function(e,t){var r;return 0===arguments.length?Ae():u(Pe,e)&&u(r=Pe[e],t)?r[t]:null}}));
//# sourceMappingURL=index.js.map