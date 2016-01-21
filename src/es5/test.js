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
    var $__3,
        $__4,
        $__5;
    var x = 3;
    var y = 4;
    assert.equal(3, x);
    assert.equal(4, y);
    ($__3 = [y, x], x = ($__4 = $__3[$traceurRuntime.toProperty(Symbol.iterator)](), ($__5 = $__4.next()).done ? void 0 : $__5.value), y = ($__5 = $__4.next()).done ? void 0 : $__5.value, $__3);
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
  it('should be able to use rest parameter', function() {
    function doWork(name) {
      for (var numbers = [],
          $__2 = 1; $__2 < arguments.length; $__2++)
        numbers[$__2 - 1] = arguments[$__2];
      var result = 0;
      numbers.forEach(function(n) {
        result += n;
      });
      return result;
    }
    var result = doWork('lewis', 1, 2, 3);
    assert.equal(6, result);
  });
});
describe('spread', function() {
  it('should be able to spread an array across parameters', function() {
    function doWork(x, y, z) {
      return x + y + z;
    }
    var result = doWork.apply((void 0), $traceurRuntime.spread([1, 2, 3]));
    assert.equal(6, result);
    var a = [3, 4, 5];
    var b = $traceurRuntime.spread([1, 2], a);
    assert.deepEqual([1, 2, 3, 4, 5], b);
  });
});
describe('templates', function() {
  it('should be able to use templates using variables', function() {
    var n = 'lewis';
    function doWork() {
      return ("my name is " + n);
    }
    var result = doWork();
    assert.equal('my name is lewis', result);
  });
});
describe('arrows', function() {
  it('should be able to use arrows instead of functions', function() {
    var $__0 = this;
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
    var add = function(x, y) {
      return x + y;
    };
    assert.equal(3, add(1, 2));
    var addNew = (function(x, y) {
      return x + y;
    });
    var square = (function(x) {
      return x * x;
    });
    var returnNumber = (function() {
      return 5;
    });
    var addNewMultiline = (function(x, y) {
      var temp = x + y;
      return temp;
    });
    assert.equal(3, addNew(1, 2));
    this.name = 'lewis';
    var tryIt = (function() {
      return $__0.name;
    });
    assert.equal('lewis', tryIt());
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
