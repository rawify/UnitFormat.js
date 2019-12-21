/**
 * @license UnitFormat v1.0.1 26/01/2016
 *
 * Copyright (c) 2016, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/

(function (root) {

  'use strict';

  var units = {
    2: {
      "E": 60,
      "P": 50,
      "T": 40,
      "G": 30,
      "M": 20,
      "k": 10
    },
    10: {
      "E": 18,
      "P": 15,
      "T": 12,
      "G": 9,
      "M": 6,
      "k": 3,
      "h": 2,
      "d": -1,
      "c": -2,
      "m": -3,
      "u": -6,
      "μ": -6,
      "n": -9,
      "p": -12,
      "f": -15,
      "a": -18
    }
  };

  function unitFormat(num, baseUnit, prefixes, base) {

    if (baseUnit === undefined || baseUnit === null) {
      baseUnit = "";
    }

    if (prefixes === undefined || prefixes === null) {
      prefixes = "kMGTPE";
    }

    if (base === undefined || base === null) {
      base = 10;
    } else if (units[base] === undefined) {
      throw new Error("Not supported base " + base);
    }

    var bestPrefix = "";
    var bestScore = num; // num / b^0
    for (var i = 0; i < prefixes.length; i++) {
      var t = prefixes[i];
      if (t in units[base]) {

        var f = num / Math.pow(base, units[base][t]);
        if (1 <= f && (f < bestScore || bestScore < 1)) {
          bestScore = f;
          bestPrefix = prefixes[i];
        }
      } else {
        throw new Error("Unknown unit " + t);
      }
    }
    return Number(bestScore.toFixed(3)) + bestPrefix + baseUnit;
  }

  if (typeof exports === 'object') {
    Object.defineProperty(exports, "__esModule", { 'value': true });
    unitFormat['default'] = unitFormat;
    unitFormat['unitFormat'] = unitFormat;
    module['exports'] = unitFormat;
  } else {
    root['unitFormat'] = unitFormat;
  }

})(this);
