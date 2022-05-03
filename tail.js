const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed 🙂🙂: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 👎👎: ${actual} !== ${expected}`);
  }
};

let tail = (array) => {
  let newArray = array.slice(1);
  return newArray;
};
console.log(tail([2,4,6,8,9,10]));

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
console.log(words);
assertEqual(words.length, 3);
