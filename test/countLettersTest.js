const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns 4 when counting the i in 'Mississippi'", () => {
    const input = "Mississippi";
    const expectedOutput = 4;
    assert.deepEqual(countLetters(input).i, expectedOutput);
  });
  it("returns 4 when counting the h in 'Lighthouse in the house'", () => {
    const input = "Lighthouse in the house";
    const expectedOutput = 4;
    assert.deepEqual(countLetters(input).h, expectedOutput);
  });
  it("returns 2 when counting the b in 'bottles of beer on the wall'", () => {
    const input = "bottles of beer on the wall";
    const expectedOutput = 2;
    assert.deepEqual(countLetters(input).b, expectedOutput);
  });
  it("returns 1 when counting the C in 'Cactus'", () => {
    const input = "Cactus";
    const expectedOutput = 1;
    assert.deepEqual(countLetters(input).C, expectedOutput);
  });
});




