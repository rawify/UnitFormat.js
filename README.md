# UnitFormat.js

[![NPM Package](https://img.shields.io/npm/v/unitformat.svg?style=flat)](https://npmjs.org/package/unitformat "View this project on npm")
[![Build Status](https://travis-ci.org/infusion/UnitFormat.js.svg?branch=master)](https://travis-ci.org/infusion/GPS.js)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

UnitFormat.js is a number formatter for human readable unit numbers, like 10km, 5GB, 17kHz, 220MW, ... with known metric prefixes.

Usage
===

The interface of UnitFormat.js is a single function that basically takes the number to be formatted and optionally the base unit, like "m" for meters:

```javascript
let a = unitFormat(1000, "m") // 1km
let b = unitFormat(20000, "Hz") // 20kHz
let c = unitFormat(1000) // 1k
let d = unitFormat(0.02, "m") // 2cm 
```

Installation
===
Installing UnitFormat.js is as easy as cloning this repo or use the following command:

```
npm install unitformat
```


Available Parameters
===

The whole package consists of a single function `unitFormat` with the following signature

```js
unitFormat(num, baseUnit="", prefixes="kMGTPE", base=10)
```

- *num*: the number to be formatted
- *baseUnit*: the base unit, like meters, Hertz, Joule, ...
- *prefixes*: which prefixes should be used
- *base*: The number base, default is 10, but 2 is also possible for bytes

Prefixes
===

The prefix parameter is a string list of single-character metric prefixes, like `kMGTPE`. For base 10 the following prefixes can be used:

- `E`: Exa
- `P`: Peta
- `T`: Tera
- `G`: Giga
- `M`: Mega
- `k`: Kilo
- `h`: Hecto
- `d`: Deci
- `c`: Centi
- `m`: Milli
- `u`: Micro
- `n`: Nano
- `p`: Pico
- `f`: Femto
- `a`: Atto

And for base 2 the following prefixes are possible:

- `k`: Kilo
- `M`: Mega
- `G`: Giga
- `T`: Tera
- `P`: Peta
- `E`: Exa


Using UnitFormat.js with the browser
===


```html
<script src="unitformat.js"></script>
<script>
  var x = unitFormat(100);
</script>
```

Testing
===
If you plan to enhance the library, make sure you add test cases and all the previous tests are passing. You can test the library with

```
npm test
```

Copyright and licensing
===
Copyright (c) 2016, [Robert Eisele](https://www.xarg.org/)
Dual licensed under the MIT or GPL Version 2 licenses.
