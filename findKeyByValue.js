const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed 🙂🙂: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 👎👎: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(objects, movie) {
  let object = Object.entries(objects);
  for (const [key, value] of object) {
    if (value === movie) {
      return (key);
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = {
  assertEqual,
  findKeyByValue
  }