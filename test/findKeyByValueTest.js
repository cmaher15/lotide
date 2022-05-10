const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns 'comedy' for tv show 'Arrested Development", () => {
    const input = { sci_fi: "The X-Files", comedy: "Arrested Development", drama: "Severance" };
    const request = "Arrested Development";
    const expected = "comedy";
    assert.strictEqual(findKeyByValue(input, request), expected);
  });
  it("returns 'five' for amount of 'apples'", () => {
    const input = { one: "Banana", five: "Apples", seven: "Pineapples" };
    const request = "Apples";
    const expected = "five";
    assert.strictEqual(findKeyByValue(input, request), expected);
  });
  it("returns 'dog' for amount of 'best pet'", () => {
    const input = { okay: "cats", cooler: "reptiles", best: "dogs" };
    const request = "dogs";
    const expected = "best";
    assert.strictEqual(findKeyByValue(input, request), expected);
  });
  it("returns 'Alt-J' for alt-rock band", () => {
    const input = { alt_rock: 'Alt-J', folk: 'Greg Brown', rock: 'Barnes Courtney' };
    const request = "Alt-J";
    const expected = "alt_rock";
    assert.strictEqual(findKeyByValue(input, request), expected);
  });
});


