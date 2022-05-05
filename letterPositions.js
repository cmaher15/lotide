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

const letterPositions = function(allLetters) {
  const output = {};
  const string = allLetters.split(" ").join("");
  for (let i = 0; i < string.length; i++) {
    let key = string[i];
    let value = i;
    if (key in output) {
      value = output[key];
      value.push(i);
      output[key] = value;
    } else {
      output[string[i]] = [i];
    }
  }
  return output;
};

console.log(letterPositions("ceilidhe"));
console.log(letterPositions("hello how are"));


assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("ceilidhe").e, [1,7]);
assertArraysEqual(letterPositions("ceilidhe").l, [3]);