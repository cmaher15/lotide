const takeUntil = function(array, callback) {
  let newArray = [];
  for (let item of array) {
    if (callback(item)) {
      return newArray;
    }
    newArray.push(item);
  }
  return newArray;
};



module.exports = takeUntil;


