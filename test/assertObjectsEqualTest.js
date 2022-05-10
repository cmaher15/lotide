const assertObjectsEqual = require('../assertObjectsEqual');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const bc = { b: "4", c: "5", d: "6" };
const cd = { b: "4", c: "6", d: "5", e: "8" };
const xy = { x: "8", y: "y" };
const yz = { y: "9", z: "10" };

assertObjectsEqual(ab, ba);
assertObjectsEqual(bc, cd);
assertObjectsEqual(xy, yz);