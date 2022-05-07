const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed 🙂🙂: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed 👎👎: ${actual} !== ${expected}`);
  }
};

const findKey = function(objects, callback) {
  let object = Object.entries(objects);
  for (const [key, value] of object) {
    if (callback(value)) {
      return key;
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2));


//TEST CASES//

let stars = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);
let stars1 = "noma";

let pets = findKey({
  "Ralphy": { type: "cat" },
  "Badger": { type: "rat" },
  "Kevin": { type: "lizard" },
  "Charlie": { type: "dog" },
  "Ora": { type: "fish" },
  "Roger": { type: "raccoon" }
}, x => x.type === "raccoon");

let pets1 = "Roger";

let grades = findKey({
  "Samantha": { grade: 64 },
  "Artemis": { grade: 89 },
  "Lyle": { grade: 98 },
  "Kevin": { grade: 75 }
}, x => x.grade > 90);

let grades1 = "Kevin";


assertEqual(stars, stars1);
assertEqual(pets, pets1);
assertEqual(grades, grades1);

module.exports = {
  assertEqual,
  findKey
  }

