/**
 * @license Unit Formatter v1.1.4 8/13/2025
 * https://github.com/rawify/UnitFormat.js
 *
 * Copyright (c) 2025, Robert Eisele (https://raw.org/)
 * Licensed under the MIT license.
 **/

var units = {
  '2': {
    'E': 60,
    'P': 50,
    'T': 40,
    'G': 30,
    'M': 20,
    'k': 10
  },
  '10': {
    'E': 18,
    'P': 15,
    'T': 12,
    'G': 9,
    'M': 6,
    'k': 3,
    'h': 2,
    'd': -1,
    'c': -2,
    'm': -3,
    'u': -6,
    'μ': -6,
    'n': -9,
    'p': -12,
    'f': -15,
    'a': -18
  }
};

function round3(x) {
  return Math.round(x * 1000) / 1000;
}

/**
 * Format a number with engineering prefixes.
 * @param {number} num
 * @param {string=} baseUnit   e.g. "B", "m", "" (default)
 * @param {string=} suffixes   allowed symbols in priority order (default "kMGTPE")
 * @param {number=} base       10 or 2 (default 10)
 * @returns {string}
 */
function UnitFormat(num, baseUnit, suffixes, base) {

  if (baseUnit == null) {
    baseUnit = "";
  }

  if (suffixes == null) {
    suffixes = "kMGTPE";
  }

  if (base == null) {
    base = 10;
  } else if (units[base] === undefined) {
    throw new Error("Not supported base " + base);
  }

  // Zero fast-path
  if (num === 0) return "0" + baseUnit;

  var sign = "";
  if (num < 0) { sign = "-"; num = -num; }

  var bestSuffix = "";
  var bestScore = num; // num / b^0
  for (var i = 0; i < suffixes.length; i++) {
    var t = suffixes[i];
    if (t in units[base]) {

      var f = num / Math.pow(base, units[base][t]);
      if (1 <= f && (f < bestScore || bestScore < 1)) {
        bestScore = f;
        bestSuffix = suffixes[i];
      }
    } else {
      throw new Error("Unknown unit " + t);
    }
  }
  return sign + round3(bestScore) + bestSuffix + baseUnit;
}
