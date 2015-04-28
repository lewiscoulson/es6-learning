"use strict";
var assert = require("chai").assert;
describe('Let', function() {
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
  it('shoudl be able to set read only variable', function() {
    var MAX_SIZE = 10;
    assert.equal(10, MAX_SIZE);
  });
});
