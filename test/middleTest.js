const assert = require('chai').assert;
const middle = require("../middle");


describe("middle", () => {
  it("returns 2,3 for [0,1,2,3,4, 5]", () => {
    assert.deepEqual(middle([0, 2, 2, 3, 4, 5]), [2, 3]);
  });
  it("returns 'Ceilidhe' for ['Lyle', 'Ceilidhe', 'Aubree']", () => {
    assert.deepEqual(middle(['Lyle', 'Ceilidhe', 'Aubree']), ['Ceilidhe']);
  });
  it("returns an empty array for [5,6]", () => {
    assert.deepEqual(middle([5, 6]), []);
  });
  it("returns '5' for [1, 2, 'Lyle', 'lighthouse', 5, 7, 9, 'labs', 56", () => {
    assert.deepEqual(middle([1, 2, 'Lyle', 'lighthouse', 5, 7, 9, 'labs', 56]), [5]);
  });
});


