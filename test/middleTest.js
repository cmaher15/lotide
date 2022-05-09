const assertArraysEqual = require("../assertArraysEqual")
const middle = require("../middle")


assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([4,5,6,7,8,9]), [6,7]);
