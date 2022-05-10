const countLetters = function(allLetters) {
  const output = {};
  const newLetters = allLetters.split(" ").join("");
  for (const letters of newLetters) {
    if (output[letters]) {
      output[letters] += 1;
    } else {
      output[letters] = 1;
    }
  }
  return output;
};

module.exports = countLetters