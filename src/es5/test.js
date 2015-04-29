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
