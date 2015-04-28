var assert = require("chai").assert

describe('let', function() {
  it('should be able to use block scope', function() {
    function doWork(flag) {
      if (flag) {
        let x = 3;
        return x;
      }
    }

    var result = doWork(true);
    assert.equal(3, result);
  })
})

describe('const', function() {
  it('shoudl be able to set read only variable', function() {
    const MAX_SIZE = 10;

    assert.equal(10, MAX_SIZE);
  })
})