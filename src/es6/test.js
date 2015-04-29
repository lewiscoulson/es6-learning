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
  it('should be able to set read only variable', function() {
    const MAX_SIZE = 10;

    assert.equal(10, MAX_SIZE);
  })
})

describe('destructuring', function() {
  it('should be able to swap variable values', function() {
    var x = 3;
    var y = 4;

    assert.equal(3, x);
    assert.equal(4, y);

    [x, y] = [y, x];

    assert.equal(3, y);
    assert.equal(4, x);
  })
})

describe('default parameters', function() {
  it('should be able to set default parameter', function() {
    function doWork(name='lewis') {
      return name;
    }

    var result = doWork();

    assert.equal('lewis', result);

    result = doWork('john');

    assert.equal('john', result);
  })
})