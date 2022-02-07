<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Promotion Rules

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the complex number [data type][@stdlib/complex/dtypes] with the smallest size and closest "kind" to which data types can be **safely** cast.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/complex-promotion-rules
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var promotionRules = require( '@stdlib/complex-promotion-rules' );
```

#### promotionRules( \[dtype1, dtype2] )

If provided data types, returns the complex number [data type][@stdlib/complex/dtypes] with the smallest size and closest "kind" to which data types can be **safely** cast.

```javascript
var out = promotionRules( 'complex128', 'complex64' );
// returns 'complex128'
```

If not provided data types, the function returns a promotion table.

```javascript
var out = promotionRules();
// returns {...}

var c128 = out[ 'complex128' ];
// returns {...}

var rule = c128[ 'uint32' ];
// returns 'complex128'
```

If provided an unrecognized or unsupported `dtype`, the function returns `null`.

```javascript
var out = promotionRules( 'foo', 'complex128' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If a [data type][@stdlib/complex/dtypes] to which data types can be safely cast does **not** exist (or is not supported), the function returns `-1`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/complex-dtypes' );
var promotionRules = require( '@stdlib/complex-promotion-rules' );

var DTYPES;
var dt1;
var dt2;
var dt;
var i;
var j;

// Get the list of supported data types:
DTYPES = dtypes();

// Print the promotion rule for each pair of data types...
for ( i = 0; i < DTYPES.length; i++ ) {
    dt1 = DTYPES[ i ];
    for ( j = 0; j < DTYPES.length; j++ ) {
        dt2 = DTYPES[ j ];
        dt = promotionRules( dt1, dt2 );
        console.log( '(%s, %s) => %s', dt1, dt2, dt );
    }
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/complex-promotion-rules.svg
[npm-url]: https://npmjs.org/package/@stdlib/complex-promotion-rules

[test-image]: https://github.com/stdlib-js/complex-promotion-rules/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/complex-promotion-rules/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/complex-promotion-rules/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/complex-promotion-rules?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/complex-promotion-rules.svg
[dependencies-url]: https://david-dm.org/stdlib-js/complex-promotion-rules/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/complex-promotion-rules/tree/deno
[umd-url]: https://github.com/stdlib-js/complex-promotion-rules/tree/umd
[esm-url]: https://github.com/stdlib-js/complex-promotion-rules/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/complex-promotion-rules/main/LICENSE

[@stdlib/complex/dtypes]: https://github.com/stdlib-js/complex-dtypes

</section>

<!-- /.links -->
