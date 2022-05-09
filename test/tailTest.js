const assertEqual = require('../assertEqual');
const { tail } = require('../tail');

console.log(tail([2, 4, 6, 8, 9, 10]));
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3);