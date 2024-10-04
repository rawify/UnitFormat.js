
const unitFormat = require('unitformat');
const assert = require('assert');

const tests = [{
  param: [0.15, "m", "cm"],
  res: "15cm"
}, {
  param: [1, "m", "d"],
  res: "1m"
}, {
  param: [.2, "m", "d"],
  res: "2dm"
}, {
  param: [1300, "m", "kMmc"],
  res: "1.3km"
}, {
  param: [2191, "Hz", "kMGT"],
  res: "2.191kHz"
}, {
  param: [4191333, "Hz", "kMGT"],
  res: "4.191MHz"
}, {
  param: [4191333, "Hz", "kGT"],
  res: "4191.333kHz"
}, {
  param: [0.111, "g", "m"],
  res: "111mg"
}, {
  param: [1024, "B", null, 2],
  res: "1kB"
}, {
  param: [1000],
  res: "1k"
}, {
  param: [5e-6, "g", "μm"],
  res: "5μg"
}];

describe('Unit Format', function () {

  tests.forEach(test => {
    it('should pass ' + test.param[0] + test.param[1], function () {
      assert.equal(unitFormat.apply(null, test.param), test.res);
    });
  });
});
