var assert = require("chai").assert

// variables and parameters

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
  it('should be able to use default parameter', function() {
    function doWork(name='lewis') {
      return name;
    }

    var result = doWork();

    assert.equal('lewis', result);

    result = doWork('john');

    assert.equal('john', result);
  })
})

describe('rest parameters', function() {
  it('should be able to set rest parameter', function() {
    function doWork(name='lewis', ...numbers) {
      let max = numbers[0];

      return max + name;
    }

    var result = doWork('lewis', 1, 2, 3);

    assert.equal('1lewis', result);
  })
})

describe('template literals', function() {
  it('should be able to set template literals', function() {
    function doWork(name='lewis', age=27) {
      return `${name} is ${age} years old!`;
    }

    var result = doWork();

    assert.equal('lewis is 27 years old!', result);
  })
})





// functional programming

describe('arrows', function() {
  it('should be able to use arrows instead of functions', function() {
    var numbers = [1, 2, 3],
        modified_numbers = [];

    function doWork() {
      modified_numbers = numbers.map(n => n + 1);
    }

    assert.equal(1, numbers[0]);
    assert.equal(2, numbers[1]);
    assert.equal(3, numbers[2]);

    doWork();

    assert.equal(2, modified_numbers[0]);
    assert.equal(3, modified_numbers[1]);
    assert.equal(4, modified_numbers[2]);

    let add = function(x, y) {
      return x + y;
    }

    assert.equal(3, add(1, 2));

    let addNew = (x, y) => x + y;

    let square = x => x * x;

    let returnNumber = () => 5;

    let addNewMultiline = (x, y) => {
      let temp = x + y;
      return temp;
    };

    assert.equal(3, addNew(1, 2));


    // lexical scope - no need for self with arrow functions

    this.name = 'lewis';

    let tryIt = () => {
      return this.name;
    };

    assert.equal('lewis', tryIt());
  })
})


















// classes

describe('classes', function() {
  it('should be able to create class', function() {
    class Animal {
      constructor(options) {
        this.name = options.name;
      }

      move() {
        return 'moving';
      }
    }

    var bear = new Animal({
      name: 'bear'
    });

    assert.isObject(bear);
  })

  it('should be able to extend class', function() {

  })
})


