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

console.log(assertArraysEqual([1,2,3,4], [3,5,6,7]));
console.log(assertArraysEqual([1,2,3,4], [1,3,4,5]));
console.log(assertArraysEqual([1,2,3,4], [1,2,3,4]));
console.log(assertArraysEqual(['hello', 'how', 'are'], ['you', 'are', 'how']));