# UnitFormat.js

[![NPM Package](https://img.shields.io/npm/v/unitformat.svg?style=flat)](https://npmjs.org/package/unitformat "View this project on npm")
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

UnitFormat.js is a number formatter for human readable unit numbers, like 10km, 5GB, 17kHz, 220MW, ... with known metric suffixes.

## Usage


The interface of UnitFormat.js is a single function that basically takes the number to be formatted and optionally the base unit, like "m" for meters:

```javascript
let a = unitFormat(1000, "m") // 1km
let b = unitFormat(20000, "Hz") // 20kHz
let c = unitFormat(1000) // 1k
let d = unitFormat(0.02, "m") // 2cm 
```

## Installation

Installing UnitFormat.js is as easy as cloning this repo or use the following command:

```
npm install unitformat
```


## Available Parameters


The whole package consists of a single function `UnitFormat` with the following signature

```js
UnitFormat(num, baseUnit="", prefixes="kMGTPE", base=10)
```

- *num*: the number to be formatted
- *baseUnit*: the base unit, like meters, Hertz, Joule, ...
- *suffix*: which suffixes should be used
- *base*: The number base, default is 10, but 2 is also possible for bytes

## Suffixes


The suffix parameter is a string list of single-character metric prefixes, like `kMGTPE`. For base 10 the following prefixes can be used:

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


## Using UnitFormat.js with the browser


```html
<script src="unitformat.min.js"></script>
<script>
  var x = UnitFormat(10000);
</script>
```


## Coding Style

As every library I publish, UnitFormat.js is also built to be as small as possible after compressing it with Google Closure Compiler in advanced mode. Thus the coding style orientates a little on maxing-out the compression rate. Please make sure you keep this style if you plan to extend the library.

## Building the library

After cloning the Git repository run:

```
npm install
npm run build
```

## Run a test

Testing the source against the shipped test suite is as easy as

```
npm run test
```

## Copyright and licensing

Copyright (c) 2025, [Robert Eisele](https://raw.org/)
Licensed under the MIT license.
