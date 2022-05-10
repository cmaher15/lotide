const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [1,7] when 'e' in 'Ceilidhe' are counted", () => {
    const input = "Ceilidhe";
    const expectedOutput = [1, 7];
    assert.deepEqual(letterPositions(input).e, expectedOutput);
  });
  it("returns [1] when 'y' in 'Lyle' are counted", () => {
    const input = "Lyle";
    const expectedOutput = [1];
    assert.deepEqual(letterPositions(input).y, expectedOutput);
  });
  it("returns [1, 6] when 'a' in 'patioCat' are counted", () => {
    const input = "patioCat";
    const expectedOutput = [1, 6];
    assert.deepEqual(letterPositions(input).a, expectedOutput);
  });
  it("returns [1, 4, 7, 10] when the 'i' in 'Mississippi' are counted", () => {
    const input = "Mississippi";
    const expectedOutput = [1, 4, 7, 10];
    assert.deepEqual(letterPositions(input).i, expectedOutput);
  });
});




