const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("returns 2 for when counting the name 'Ceilidhe' and 1 for counting name 'patioCat'", () => {
    const input = ['Ceilidhe', 'Lyle', 'Ceilidhe', 'Lola', 'patioCat'];
    const itemtoCount = {'Ceilidhe': true, 'Lyle': false, 'Lola': false, 'patioCat': true }
    const expectedOutput = {'Ceilidhe': 2, 'patioCat': 1}
    assert.deepEqual(countOnly(input, itemtoCount), expectedOutput);
  });
  it("returns 4 for when counting the name 'Dog'", () => {
    const input = ['Dog', 'Cat', 'Dog', 'Cat', 'Dog', 'Cat', 'Dog'];
    const itemtoCount = {'Dog': true, 'Cat': false }
    const expectedOutput = {'Dog': 4 }
    assert.deepEqual(countOnly(input, itemtoCount), expectedOutput)
  });
  it("returns 2 for when counting the name 'Charlie Chaplin' and 1 for counting name 'Marlene Dietrich'", () => {
    const input = ['Charlie Chaplin', 'Marlene Dietrich', 'Charlie Chaplin', 'Bette Davis'];
    const itemtoCount = {'Charlie Chaplin': true, 'Marlene Dietrich': true, 'Bette Davis': false }
    const expectedOutput = {'Charlie Chaplin': 2, 'Marlene Dietrich': 1}
    assert.deepEqual(countOnly(input, itemtoCount), expectedOutput);
  });  
  it("returns 3 for when counting the name 'Sean'", () => {
    const input = ['Shawn', 'Shawn', 'Sean', 'Shawn', 'Shane', 'Sean', 'Sean'];
    const itemtoCount = {'Sean': true, 'Shawn': false, 'Shane': false }
    const expectedOutput = {'Sean': 3}
    assert.deepEqual(countOnly(input, itemtoCount), expectedOutput);
  });
});  







// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

 
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);