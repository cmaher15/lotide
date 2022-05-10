const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");


const eqObjects = function(object1, object2) {
  let firstKey = Object.keys(object1);
  let secondKey = Object.keys(object2);
  if (firstKey.length !== secondKey.length) {
    return false;
  } else {
    for (let key of firstKey) {
      if (object1[key] !== object2[key]) {
        return false;
      } else {
        for (let key of firstKey) {
          if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
            if (eqArrays(object1[key], object2[key])) {
              return true;
            }
          }
        }
      }
    }
  }
  return true;
};



module.exports = eqObjects;
