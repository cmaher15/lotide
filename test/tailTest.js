const assert = require('chai').assert;
const tail = require('../tail');

describe("tail", () => {
  it("returns 1,2,3,4 for [0,1,2,3,4]", () => {
    assert.deepEqual(tail([0, 1, 2, 3, 4]), [1, 2, 3, 4]);
  });
  it("returns 'my name is Ceilidhe' for ['Hello', 'my', 'name', 'is', 'Ceilidhe']", () => {
    assert.deepEqual(tail(['Hello', 'my', 'name', 'is', 'Ceilidhe']), ['my', 'name', 'is', 'Ceilidhe']);
  });
  it("returns 6 for [5,6]", () => {
    assert.deepEqual(tail([5, 6]), [6]);
  });
  it("returns '1, 2, 'Lighthouse', 'Labs' for ['Hello', 1, 2, 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", 1, 2, "Lighthouse", "Labs"]), [1, 2, "Lighthouse", "Labs"]);
  });
});

