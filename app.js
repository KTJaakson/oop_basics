/*
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}

{
  name: 'Bob',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

{
  name: 'Sarah',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

let person1 = new Object({
  name: 'Chris',
  age: 38,
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
});

///////


//////


function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}

// Write your code below here
Shape.prototype.calcPerimeter = function() {
  console.log(this.sides * this.sideLength);
}


var square = new Shape('square', 4, 5);
square.calcPerimeter();

var triangle = new Shape('triangle', 3, 3);
triangle.calcPerimeter();

////////

class Shape extends Object {
  constructor(name, sides, sideLength){
    super();
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    console.log(this.sides * this.sideLength);
  }
}

let square = new Shape('Square', 4, 5);
square.calcPerimeter();

let triangle = new Shape('Triangle', 3, 3);
triangle.calcPerimeter();

*/

class Shape {
  constructor(name, sides, sideLength){
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    console.log(this.sides * this.sideLength);
  }
}

class Square extends Shape {
  constructor(name, sideLength) {
    super(name, 4, sideLength);
  }
  calcArea() {
    console.log(this.sideLength * this.sideLength);
  }
}

let square = new Square('newclassSquare', 5);
square.calcPerimeter();