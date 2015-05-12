"use strict";
var assert = require("chai").assert;
describe('let', function() {
  it('should be able to use block scope', function() {
    function doWork(flag) {
      if (flag) {
        var x = 3;
        return x;
      }
    }
    var result = doWork(true);
    assert.equal(3, result);
  });
});
describe('const', function() {
  it('should be able to set read only variable', function() {
    var MAX_SIZE = 10;
    assert.equal(10, MAX_SIZE);
  });
});
describe('destructuring', function() {
  it('should be able to swap variable values', function() {
    var $__0,
        $__1,
        $__2;
    var x = 3;
    var y = 4;
    assert.equal(3, x);
    assert.equal(4, y);
    ($__0 = [y, x], x = ($__1 = $__0[$traceurRuntime.toProperty(Symbol.iterator)](), ($__2 = $__1.next()).done ? void 0 : $__2.value), y = ($__2 = $__1.next()).done ? void 0 : $__2.value, $__0);
    assert.equal(3, y);
    assert.equal(4, x);
  });
});
describe('default parameters', function() {
  it('should be able to set default parameter', function() {
    function doWork() {
      var name = arguments[0] !== (void 0) ? arguments[0] : 'lewis';
      return name;
    }
    var result = doWork();
    assert.equal('lewis', result);
    result = doWork('john');
    assert.equal('john', result);
  });
});
describe('arrows', function() {
  it('should be able to use arrows instead of functions', function() {
    var numbers = [1, 2, 3],
        modified_numbers = [];
    function doWork() {
      modified_numbers = numbers.map((function(n) {
        return n + 1;
      }));
    }
    assert.equal(1, numbers[0]);
    assert.equal(2, numbers[1]);
    assert.equal(3, numbers[2]);
    doWork();
    assert.equal(2, modified_numbers[0]);
    assert.equal(3, modified_numbers[1]);
    assert.equal(4, modified_numbers[2]);
  });
});
