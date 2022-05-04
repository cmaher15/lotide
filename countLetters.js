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