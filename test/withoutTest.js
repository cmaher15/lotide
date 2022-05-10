const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns 'thank you very much' when 'thank you very much stranger' is entered", () => {
    const input = ['thank', 'you', 'very', 'much', 'stranger'];
    const request = ['stranger'];
    const expected = ['thank', 'you', 'very', 'much'];
    assert.deepEqual(without(input, request), expected);
  });
});

