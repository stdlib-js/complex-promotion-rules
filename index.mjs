// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";var l=e,m=o,c={float64:{complex64:"complex128",complex128:"complex128"},float32:{complex64:"complex64",complex128:"complex128"},int32:{complex64:"complex128",complex128:"complex128"},int16:{complex64:"complex64",complex128:"complex128"},int8:{complex64:"complex64",complex128:"complex128"},uint32:{complex64:"complex128",complex128:"complex128"},uint16:{complex64:"complex64",complex128:"complex128"},uint8:{complex64:"complex64",complex128:"complex128"},uint8c:{complex64:"complex64",complex128:"complex128"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128"}};function p(){var e,o,m,p,x,t,n,i,r;for(m={},o=(e=l(c)).length,r=0;r<o;r++){for(x=e[r],n=c[x],p={},i=0;i<o;i++)p[t=e[i]]=n[t];m[x]=p}return m}var x=function(e,o){var l;return 0===arguments.length?p():m(c,e)&&m(l=c[e],o)?l[o]:null};export{x as default};
//# sourceMappingURL=index.mjs.map
