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
    var $__1,
        $__2,
        $__3;
    var x = 3;
    var y = 4;
    assert.equal(3, x);
    assert.equal(4, y);
    ($__1 = [y, x], x = ($__2 = $__1[$traceurRuntime.toProperty(Symbol.iterator)](), ($__3 = $__2.next()).done ? void 0 : $__3.value), y = ($__3 = $__2.next()).done ? void 0 : $__3.value, $__1);
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
describe('classes', function() {
  it('should be able to create class', function() {
    var Animal = (function() {
      function Animal(options) {
        this.name = options.name;
      }
      return ($traceurRuntime.createClass)(Animal, {move: function() {
          return 'moving';
        }}, {});
    }());
    var bear = new Animal({name: 'bear'});
    assert.isObject(bear);
  });
  it('should be able to extend class', function() {
    var Animal = (function() {
      function Animal(options) {
        this.name = options.name;
      }
      return ($traceurRuntime.createClass)(Animal, {move: function() {
          return 'moving';
        }}, {});
    }());
    var Snake = (function($__super) {
      function Snake() {
        $traceurRuntime.superConstructor(Snake).call(this, {name: 'snake'});
      }
      return ($traceurRuntime.createClass)(Snake, {bite: function() {
          return 'biting';
        }}, {}, $__super);
    }(Animal));
    var snake = new Snake();
    assert.isObject(snake);
    var result = snake.bite();
    assert.equal('biting', result);
    result = snake.move();
    assert.equal('moving', result);
    result = snake.name;
    assert.equal('snake', result);
  });
});
