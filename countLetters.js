const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed 🙂🙂: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 👎👎: ${actual} !== ${expected}`);
  }
};

const countLetters = function(allLetters) {
  const output = {};
  const newLetters = allLetters.split(" ").join("");
  for (const letters of newLetters) {
    if (output[letters]) {
      output[letters] += 1;
    } else {
      output[letters] = 1;
    }
  }
  return output;
};

console.log(countLetters("ceilidhe"));
console.log(countLetters("LHL"));
console.log(countLetters("lighthouse in the house"));

//ASSERT ARRAY TEST NEEDED
const result1 = countLetters("ceilidhe");
const result2 = countLetters("Lighthouse in the house");
assertEqual(result1.e, 2);
assertEqual(result2.h, 4);

module.exports = {
  assertEqual,
  countLetters
  }