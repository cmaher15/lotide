const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  if (key1.length !== key2.length) {
    return false;
  } else {
    for (const key of key1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key])) {
          return true;
        }
        return false;
      }

      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion passed 🙂🙂: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 👎👎: ${actual} !== ${expected}`);
  }
  console.log(`Example label : ${inspect(actual)}`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const bc = { b: "4", c: "5", d: "6"};
const cd = { b: "4", c: "6", d: "5", e: "8"};
assertObjectsEqual(eqObjects(ab, ba), true);
assertObjectsEqual(eqObjects(bc, cd), true);