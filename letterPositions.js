const letterPositions = function(allLetters) {
  const output = {};
  const string = allLetters.split(" ").join("");
  for (let i = 0; i < string.length; i++) {
    let key = string[i];
    let value = i;
    if (key in output) {
      value = output[key];
      value.push(i);
      output[key] = value;
    } else {
      output[string[i]] = [i];
    }
  }
  return output;
};



module.exports = letterPositions;
