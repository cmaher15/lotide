const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let isIncluded = itemsToRemove.includes(source[i]);
    if (!isIncluded) {
      result.push(source[i]);
    }
  }
  return result;
};

module.exports = without;