const findKey = function(objects, callback) {
  let object = Object.entries(objects);
  for (const [key, value] of object) {
    if (callback(value)) {
      return key;
    }
  }
};


module.exports = findKey;
