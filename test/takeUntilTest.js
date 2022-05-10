const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("will only return [1, 2, 5, 7, 2] when given the array [1, 2, 5, 7, 2, -1, 2, 4, 5] and told to take until the number is < 0", () => {
    const input = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const request = x => x < 0;
    const expected = [1, 2, 5, 7, 2];
    assert.deepEqual(takeUntil(input, request), expected);
  });
});



