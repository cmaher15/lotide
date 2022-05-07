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


const foods = ["apple", "pretzel", "pear", "pineapple"];
const upperFoods = ['APPLE', 'PRETZEL', 'PEAR', 'PINEAPPLE'];
const pets = ['dog', 'cat', 'parrot'];
const morePets = ['cat', 'parrot'];

const map = function(array, callback) {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//Test Cases
assertArraysEqual(map(foods, food => food.toUpperCase()), upperFoods);

assertArraysEqual(map(pets, morePets => morePets.toUpperCase()), pets);

assertArraysEqual(map(foods, upperFoods => upperFoods.toLowerCase()), foods);

module.exports = {
  eqArrays,
  assertArraysEqual,
  map
  }
