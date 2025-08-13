# UnitFormat.js

[![NPM Package](https://img.shields.io/npm/v/unitformat.svg?style=flat)](https://npmjs.org/package/unitformat "View this project on npm")
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

UnitFormat.js is a number formatter for human readable unit numbers, like 10km, 5GB, 17kHz, 220MW, ... with known metric suffixes.

## Installation

You can install `UnitFormat.js` via npm:

```bash
npm install unitformat
```

Or with yarn:

```bash
yarn add unitformat
```

Alternatively, download or clone the repository:

```bash
git clone https://github.com/rawify/UnitFormat.js
```

## Usage

Include the `unitformat.min.js` file in your project:

```html
<script src="path/to/unitformat.min.js"></script>
<script>
  var x = UnitFormat(10000);
</script>
```

Or in a Node.js project:

```javascript
const unitFormat = require('unitformat');
```

or

```javascript
import unitFormat from 'unitformat';
```


The interface of UnitFormat.js is a single function that basically takes the number to be formatted and optionally the base unit, like "m" for meters:

```javascript
let a = UnitFormat(1000, "m") // 1km
let b = UnitFormat(20000, "Hz") // 20kHz
let c = UnitFormat(1000) // 1k
let d = UnitFormat(0.02, "m") // 2cm
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

## Copyright and Licensing

Copyright (c) 2025, [Robert Eisele](https://raw.org/)
Licensed under the MIT license.
