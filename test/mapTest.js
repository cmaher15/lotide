const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("returns I LOVE FOOD when I love food is put in", () => {
    const input = ["I love food"];
    const request = input => input.toUpperCase();
    const expected = ["I LOVE FOOD"];
    assert.deepEqual(map(input, request), expected);
  });
});


