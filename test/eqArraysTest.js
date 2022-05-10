const assert = require('chai').assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("returns true for [1,2,3], [1,2,3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("returns 'false' for [1, 2, 4, 5], [4, 5, 6, 7]", () => {
    assert.isFalse(eqArrays([1,2,4,5], [4,5,6,7]))
  });
  it("returns 'true' for ['Lighthouse', 'Labs'], ['Lighthouse', 'Labs']", () => {
    assert.isTrue(eqArrays(['Lighthouse', 'Labs'], ['Lighthouse', 'Labs']))
  });
  it("returns 'false' for ['Lighthouse', 'Labs'], ['lighthouse', 'labs']", () => {
    assert.isFalse(eqArrays(['Lighthouse', 'Labs'], ['lighthouse', 'labs']));
  });
});




// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
