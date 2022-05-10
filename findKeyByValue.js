const findKeyByValue = function(objects, movie) {
  let object = Object.entries(objects);
  for (const [key, value] of object) {
    if (value === movie) {
      return (key);
    }
  }
};



module.exports = findKeyByValue;
