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

const middle = function(array) {
  if (array.length === 1 || array.length === 2) {
    return [];
  }
  let arrayMiddle1 = array[Math.floor((array.length) / 2)]; //odd
  let arrayMiddle2 = array[Math.floor((array.length - 1) / 2)]; //even
  if (array.length % 2 !== 0) {
    return [arrayMiddle1];
  } if (array.length % 2 === 0) {
    return [arrayMiddle2, arrayMiddle1];
  }
};


console.log(middle([1, 2, 4, 5, 6]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,6,5,8]));

assertArraysEqual(middle([1,2,3,4]), [2,3])
assertArraysEqual(middle([4,5,6,7,8,9]), [6,7])