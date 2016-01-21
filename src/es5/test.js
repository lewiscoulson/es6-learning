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
    var $__4,
        $__5,
        $__6;
    var x = 3;
    var y = 4;
    assert.equal(3, x);
    assert.equal(4, y);
    ($__4 = [y, x], x = ($__5 = $__4[$traceurRuntime.toProperty(Symbol.iterator)](), ($__6 = $__5.next()).done ? void 0 : $__6.value), y = ($__6 = $__5.next()).done ? void 0 : $__6.value, $__4);
    assert.equal(3, y);
    assert.equal(4, x);
  });
});
describe('default parameters', function() {
  it('should be able to use default parameter', function() {
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
describe('rest parameters', function() {
  it('should be able to set rest parameter', function() {
    function doWork() {
      var name = arguments[0] !== (void 0) ? arguments[0] : 'lewis';
      for (var numbers = [],
          $__3 = 1; $__3 < arguments.length; $__3++)
        numbers[$__3 - 1] = arguments[$__3];
      var max = numbers[0];
      return max + name;
    }
    var result = doWork('lewis', 1, 2, 3);
    assert.equal('1lewis', result);
  });
});
describe('template literals', function() {
  it('should be able to set template literals', function() {
    function doWork() {
      var name = arguments[0] !== (void 0) ? arguments[0] : 'lewis';
      var age = arguments[1] !== (void 0) ? arguments[1] : 27;
      return (name + " is " + age + " years old!");
    }
    var result = doWork();
    assert.equal('lewis is 27 years old!', result);
  });
});
describe('arrows', function() {
  it('should be able to use arrows instead of functions', function() {
    var $__2 = this;
    var numbers = [1, 2, 3],
        modified_numbers = [];
    function doWork() {
      modified_numbers = numbers.map(function(n) {
        return n + 1;
      });
    }
    assert.equal(1, numbers[0]);
    assert.equal(2, numbers[1]);
    assert.equal(3, numbers[2]);
    doWork();
    assert.equal(2, modified_numbers[0]);
    assert.equal(3, modified_numbers[1]);
    assert.equal(4, modified_numbers[2]);
    var add = function(x, y) {
      return x + y;
    };
    assert.equal(3, add(1, 2));
    var addNew = function(x, y) {
      return x + y;
    };
    var square = function(x) {
      return x * x;
    };
    var returnNumber = function() {
      return 5;
    };
    var addNewMultiline = function(x, y) {
      var temp = x + y;
      return temp;
    };
    assert.equal(3, addNew(1, 2));
    this.name = 'lewis';
    var tryIt = function() {
      return $__2.name;
    };
    assert.equal('lewis', tryIt());
  });
});
describe('classes', function() {
  it('should be able to create class', function() {
    var Animal = function() {
      function Animal(options) {
        this.name = options.name;
      }
      return ($traceurRuntime.createClass)(Animal, {move: function() {
          return 'moving';
        }}, {});
    }();
    var bear = new Animal({name: 'bear'});
    assert.isObject(bear);
  });
  it('should be able to extend class', function() {});
});
