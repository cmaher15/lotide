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


// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };
// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);