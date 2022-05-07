const {assertArraysEqual} = require('../assertArraysEqual')
describe('ArraysEqual', function() {
  it('should return the appropriate assertion based on the input', function() {
    assertArraysEqual([1,2,3], [1,2,3])
  });
});

