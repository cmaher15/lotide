const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("eqObjects", () => {
  it("returns true for { a: '1', b: '2' }, { b: '2', a: '1' }; ", () => {
    assert.isTrue(eqObjects({ a: 1, b: 2 }, { b: 2, a: 1 }));
  });
  it("returns false for { a: '5', b: '6' }, { b: '7', a: '8' }; ", () => {
    assert.isFalse(eqObjects({ a: 5, b: 6 }, { b: 7, a: 8 }));
  });
  it("returns true for { a: '1', d: ['2', 3] }, { b: ['2', 3], c: '1' }; ", () => {
    assert.isTrue(eqObjects({ a: 1, d: ['2', 3] }, { d: ['2', 3], a: 1 }));
  });
  it("returns false for { a: '6', b: '3' }, { b: '3', d: '6' }; ", () => {
    assert.isFalse(eqObjects({ a: 6, b: 3 }, { b: 3, d: 6 }));
  });
});
