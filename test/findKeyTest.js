const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("returns 'Lyle' when finding the grade higher than 90%", () => {
    const input = {
      "Samantha": { grade: 64 },
      "Artemis": { grade: 89 },
      "Lyle": { grade: 98 },
      "Kevin": { grade: 75 }
    };
    const request = x => x.grade > 90;
    const expected = "Lyle";
    assert.strictEqual(findKey(input, request), expected);
  });
});

