const assertEqual = require("./assertEqual")

const tail = (array) => {
  let newArray = array.slice(1);
  return newArray;
};


module.exports = {
  assertEqual,
  tail
  }
