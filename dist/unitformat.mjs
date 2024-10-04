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

function UnitFormat(num, baseUnit, suffixes, base) {

  if (baseUnit === undefined || baseUnit === null) {
    baseUnit = "";
  }

  if (suffixes === undefined || suffixes === null) {
    suffixes = "kMGTPE";
  }

  if (base === undefined || base === null) {
    base = 10;
  } else if (units[base] === undefined) {
    throw new Error("Not supported base " + base);
  }

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
  return Number(bestScore.toFixed(3)) + bestSuffix + baseUnit;
}
export {
  UnitFormat as default
};
