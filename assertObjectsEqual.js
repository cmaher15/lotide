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

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`Assertion passed 🙂🙂: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`Assertion Failed 👎👎: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const bc = { b: "4", c: "5", d: "6"};
const cd = { b: "4", c: "6", d: "5", e: "8"};
const xy = { x: "8", y: "y"};
const yz = { y: "9", z: "10"};
assertObjectsEqual(ab, ba);
assertObjectsEqual(bc, cd);
assertObjectsEqual(xy, yz);

