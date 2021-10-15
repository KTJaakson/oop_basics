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

*/

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