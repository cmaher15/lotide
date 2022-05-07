const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log((`Assertion Passed 🙂🙂: ${array1} === ${array2}`));
  } else {
    console.log(`Assertion Failed 👎👎: ${array1} !== ${array2}`);
  }
};

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let isIncluded = itemsToRemove.includes(source[i]);
    if (!isIncluded) {
      result.push(source[i]);
    }
  }
  return result;
};
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

assertArraysEqual(without([1,2,3,4,5,6], [5,6]), [1,2,3,4]);
assertArraysEqual(without(['hello', 'how', 'are', 'you'], ['hello']), ['how', 'are', 'you']);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = {
  eqArrays,
  assertArraysEqual,
  without
  }