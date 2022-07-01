// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).promotionRules=t()}(this,(function(){"use strict";function e(e){var t=e.default;if("function"==typeof t){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var t=function(e){return Object.keys(Object(e))},r=t;var n=function(){return function(){return 2!==(r(arguments)||"").length}(1,2)},o=void 0!==Object.keys;var i=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var u=function(){return i&&"symbol"==typeof Symbol.toStringTag},c=Object.prototype.toString,l=c;var f=function(e){return l.call(e)},a=Object.prototype.hasOwnProperty;var p=function(e,t){return null!=e&&a.call(e,t)},m="function"==typeof Symbol?Symbol.toStringTag:"",v=p,s=m,y=c;var b=f,x=function(e){var t,r,n;if(null==e)return y.call(e);r=e[s],t=v(e,s);try{e[s]=void 0}catch(t){return y.call(e)}return n=y.call(e),t?e[s]=r:delete e[s],n},g=u()?x:b,d=g;var h,j=function(e){return"[object Arguments]"===d(e)},w=j;h=function(){return w(arguments)}();var _=h,O="function"==typeof Object.defineProperty?Object.defineProperty:null;var S=function(){try{return O({},"x",{}),!0}catch(e){return!1}},P=Object.defineProperty,E=Object.prototype,I=E.toString,T=E.__defineGetter__,A=E.__defineSetter__,k=E.__lookupGetter__,N=E.__lookupSetter__;var B=function(e,t,r){var n,o,i,u;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(k.call(e,t)||N.call(e,t)?(n=e.__proto__,e.__proto__=E,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&T&&T.call(e,t,r.get),u&&A&&A.call(e,t,r.set),e},V=P,F=B,G=S()?V:F;var L=function(e,t,r){G(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})},M=L;var X=function(e){return"string"==typeof e},Y=String.prototype.valueOf;var C=g,R=function(e){try{return Y.call(e),!0}catch(e){return!1}},D=u();var H=function(e){return"object"==typeof e&&(e instanceof String||(D?R(e):"[object String]"===C(e)))},W=X,z=H;var U=M,q=function(e){return W(e)||z(e)},J=H;U(q,"isPrimitive",X),U(q,"isObject",J);var K=q;var Q=function(e){return"number"==typeof e},Z=Number,$=Z.prototype.toString;var ee=g,te=Z,re=function(e){try{return $.call(e),!0}catch(e){return!1}},ne=u();var oe=function(e){return"object"==typeof e&&(e instanceof te||(ne?re(e):"[object Number]"===ee(e)))},ie=Q,ue=oe;var ce=M,le=function(e){return ie(e)||ue(e)},fe=oe;ce(le,"isPrimitive",Q),ce(le,"isObject",fe);var ae=le;var pe=function(e){return e!=e},me=ae.isPrimitive,ve=pe;var se=function(e){return me(e)&&ve(e)},ye=ae.isObject,be=pe;var xe=function(e){return ye(e)&&be(e.valueOf())},ge=se,de=xe;var he=M,je=function(e){return ge(e)||de(e)},we=xe;he(je,"isPrimitive",se),he(je,"isObject",we);var _e=je,Oe=Number.POSITIVE_INFINITY,Se=Z.NEGATIVE_INFINITY,Pe=Math.floor;var Ee=function(e){return Pe(e)===e},Ie=Oe,Te=Se,Ae=Ee;var ke=function(e){return e<Ie&&e>Te&&Ae(e)},Ne=ae.isPrimitive,Be=ke;var Ve=function(e){return Ne(e)&&Be(e)},Fe=ae.isObject,Ge=ke;var Le=function(e){return Fe(e)&&Ge(e.valueOf())},Me=Ve,Xe=Le;var Ye=M,Ce=function(e){return Me(e)||Xe(e)},Re=Le;Ye(Ce,"isPrimitive",Ve),Ye(Ce,"isObject",Re);var De,He=Ce,We=Object.prototype.propertyIsEnumerable;De=!We.call("beep","0");var ze=K,Ue=_e.isPrimitive,qe=He.isPrimitive,Je=We,Ke=De;var Qe=function(e,t){var r;return null!=e&&(!(r=Je.call(e,t))&&Ke&&ze(e)?!Ue(t=+t)&&qe(t)&&t>=0&&t<e.length:r)},Ze=Qe,$e=g;var et=Array.isArray?Array.isArray:function(e){return"[object Array]"===$e(e)},tt=p,rt=Ze,nt=et,ot=Ee;var it=_?j:function(e){return null!==e&&"object"==typeof e&&!nt(e)&&"number"==typeof e.length&&ot(e.length)&&e.length>=0&&e.length<=4294967295&&tt(e,"callee")&&!rt(e,"callee")},ut=it,ct=t,lt=Array.prototype.slice;var ft=function(e){return ut(e)?ct(lt.call(e)):ct(e)},at=et;var pt=function(e){return null!==e&&"object"==typeof e};M(pt,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!at(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(pt));var mt=pt;var vt=Ze((function(){}),"prototype"),st=!Ze({toString:null},"toString"),yt=Ee;var bt=_e,xt=function(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&yt(e.length)&&e.length>=0&&e.length<=9007199254740991},gt=K.isPrimitive,dt=He.isPrimitive;var ht=function(e,t,r){var n,o;if(!xt(e)&&!gt(e))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+e+"`.");if(0===(n=e.length))return-1;if(3===arguments.length){if(!dt(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(bt(t)){for(;o<n;o++)if(bt(e[o]))return o}else for(;o<n;o++)if(e[o]===t)return o;return-1},jt=ht,wt=/./;var _t=function(e){return"boolean"==typeof e},Ot=Boolean.prototype.toString;var St=g,Pt=function(e){try{return Ot.call(e),!0}catch(e){return!1}},Et=u();var It=function(e){return"object"==typeof e&&(e instanceof Boolean||(Et?Pt(e):"[object Boolean]"===St(e)))},Tt=_t,At=It;var kt=M,Nt=function(e){return Tt(e)||At(e)},Bt=It;kt(Nt,"isPrimitive",_t),kt(Nt,"isObject",Bt);var Vt=Nt;var Ft=function(){return new Function("return this;")()},Gt="object"==typeof self?self:null,Lt="object"==typeof window?window:null,Mt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Xt="object"==typeof Mt?Mt:null;module.exports=Xt;var Yt=Vt.isPrimitive,Ct=Ft,Rt=Gt,Dt=Lt,Ht=e(Object.freeze({__proto__:null}));var Wt=function(e){if(arguments.length){if(!Yt(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return Ct()}if(Rt)return Rt;if(Dt)return Dt;if(Ht)return Ht;throw new Error("unexpected error. Unable to resolve global object.")},zt=Wt(),Ut=zt.document&&zt.document.childNodes,qt=Int8Array,Jt=wt,Kt=Ut,Qt=qt;var Zt=function(){return"function"==typeof Jt||"object"==typeof Qt||"function"==typeof Kt};var $t=function(){return/^\s*function\s*([^(]*)/i},er=$t;M(er,"REGEXP",$t());var tr=mt;var rr=g,nr=er.REGEXP,or=function(e){return tr(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))};var ir=function(e){var t,r,n;if(("Object"===(r=rr(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=nr.exec(n.toString()))return t[1]}return or(e)?"Buffer":r},ur=ir;var cr=ir;var lr=function(e){var t;return null===e?"null":"object"===(t=typeof e)?ur(e).toLowerCase():t},fr=function(e){return cr(e).toLowerCase()},ar=Zt()?fr:lr;var pr,mr=function(e){return e.constructor&&e.constructor.prototype===e},vr="undefined"==typeof window?void 0:window,sr=p,yr=jt,br=ar,xr=mr,gr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],dr=vr;pr=function(){var e;if("undefined"===br(dr))return!1;for(e in dr)try{-1===yr(gr,e)&&sr(dr,e)&&null!==dr[e]&&"object"===br(dr[e])&&xr(dr[e])}catch(e){return!0}return!1}();var hr="undefined"!=typeof window,jr=pr,wr=mr,_r=hr;var Or=mt,Sr=p,Pr=it,Er=vt,Ir=st,Tr=function(e){if(!1===_r&&!jr)return wr(e);try{return wr(e)}catch(e){return!1}},Ar=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var kr=t,Nr=ft,Br=function(e){var t,r,n,o,i,u,c;if(o=[],Pr(e)){for(c=0;c<e.length;c++)o.push(c.toString());return o}if("string"==typeof e){if(e.length>0&&!Sr(e,"0"))for(c=0;c<e.length;c++)o.push(c.toString())}else{if(!1===(n="function"==typeof e)&&!Or(e))return o;r=Er&&n}for(i in e)r&&"prototype"===i||!Sr(e,i)||o.push(String(i));if(Ir)for(t=Tr(e),c=0;c<Ar.length;c++)u=Ar[c],t&&"constructor"===u||!Sr(e,u)||o.push(String(u));return o},Vr=o?n()?Nr:kr:Br,Fr={float64:{complex64:"complex128",complex128:"complex128"},float32:{complex64:"complex64",complex128:"complex128"},int32:{complex64:"complex128",complex128:"complex128"},int16:{complex64:"complex64",complex128:"complex128"},int8:{complex64:"complex64",complex128:"complex128"},uint32:{complex64:"complex128",complex128:"complex128"},uint16:{complex64:"complex64",complex128:"complex128"},uint8:{complex64:"complex64",complex128:"complex128"},uint8c:{complex64:"complex64",complex128:"complex128"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128"}};function Gr(){var e,t,r,n,o,i,u,c,l;for(r={},t=(e=Vr(Fr)).length,l=0;l<t;l++){for(o=e[l],u=Fr[o],n={},c=0;c<t;c++)n[i=e[c]]=u[i];r[o]=n}return r}return function(e,t){var r;return 0===arguments.length?Gr():p(Fr,e)&&p(r=Fr[e],t)?r[t]:null}}));
//# sourceMappingURL=browser.js.map
