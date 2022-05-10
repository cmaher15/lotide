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


module.exports = middle;