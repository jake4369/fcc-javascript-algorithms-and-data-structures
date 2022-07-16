// ========== Create a Basic JavaScript Object ==========

// let dog = {
//   name: "Spot",
//   numLegs: 4,
// };

// ========== Use Dot Notation to Access the Properties of an Object ==========

// let dog = {
//   name: "Spot",
//   numLegs: 4,
// };

// console.log(dog.name);
// console.log(dog.numLegs);

// ========== Create a method on an Object ==========

// let dog = {
//   name: "Spot",
//   numLegs: 4,
//   sayLegs: function () {
//     return "This dog has " + dog.numLegs + " legs.";
//   },
//   sayLegs() {
//     return `This dog has ${dog.numLegs} legs.`;
//   },
// };

// dog.sayLegs();

// ========== Make Code More Reusable with the this Keyword ==========

// let dog = {
//   name: "Spot",
//   numLegs: 4,
//   sayLegs() {
//     return `This dog has ${this.numLegs} legs.`;
//   },
// };

// dog.sayLegs();

// ========== Define a Constructor Function ==========

// function Dog() {
//   this.name = "Spot";
//   this.color = "brown";
//   this.numLegs = 4;
// }

// ========== Use a Constructor to Create Objects ==========

// function Dog() {
//   this.name = "Rupert";
//   this.color = "brown";
//   this.numLegs = 4;
// }

// const hound = new Dog();

// ========== Extend Constructors to Receive Arguments ==========

// function Dog(name, color) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = 4;
// }

// const terrier = new Dog("Rupert", "brown");

// ========== Verify an Object's Constructor with instanceof ==========

// function House(numBedrooms) {
//   this.numBedrooms = numBedrooms;
// }

// const myHouse = new House(4);

// console.log(myHouse instanceof House);

// ========== Understand Own Properties ==========

// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }

// let canary = new Bird("Tweety");
// let ownProps = [];

// for (let property in canary) {
//   if (canary.hasOwnProperty(property)) {
//     ownProps.push(property);
//   }
// }

// ========== Use Prototype Properties to Reduce Duplicate Code ==========

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.numLegs = 4;

// let beagle = new Dog("Snoopy");

// ========== Iterate Over All Properties ==========

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.numLegs = 4;

// let beagle = new Dog("Snoopy");

// let ownProps = [];
// let prototypeProps = [];

// for (let property in beagle) {
//   if (beagle.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   }
// }

// ========== Understanding the Constructor Property ==========

// function Dog(name) {
//   this.name = name;
// }

// function joinDogFraternity(candidate) {
//   return candidate.constructor === Dog;
// }

// ========== Change the Prototype to a New Object ==========

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype = {
//   numLegs: 4,
//   eat() {
//     console.log("nom nom nom");
//   },
//   describe() {
//     console.log(`My name is ${this.name}`);
//   },
// };

// const bulldog = new Dog("George");

// Iterate Over All Properties
// let ownProps = [];
// let prototypeProps = [];

// for (let property in bulldog) {
//   bulldog.hasOwnProperty(property)
//     ? ownProps.push(property)
//     : prototypeProps.push(property);
// }
// console.log(ownProps);
// console.log(prototypeProps);

// ========== Remember to Set the Constructor Property when Changing the Prototype ==========
function Dog(name) {
  this.name = name;
}

// Only change code below this line
// Dog.prototype = {
//   constuctor: Dog,
//   numLegs: 4,
//   eat() {
//     console.log("nom nom nom");
//   },
//   describe() {
//     console.log(`My name is ${this.name}`);
//   },
// };

// ========== Understand Where an Object’s Prototype Comes From ==========

// function Dog(name) {
//   this.name = name;
// }

// let beagle = new Dog("Snoopy");

// console.log(Dog.prototype.isPrototypeOf(beagle));

// ========== Understand the Prototype Chain ==========

// function Dog(name) {
//   this.name = name;
// }

// let beagle = new Dog("Snoopy");

// Dog.prototype.isPrototypeOf(beagle); // yields true

// Object.prototype.isPrototypeOf(Dog.prototype);

// ========== Use Inheritance So You Don't Repeat Yourself ==========

// function Cat(name) {
//   this.name = name;
// }

// Cat.prototype = {
//   constructor: Cat,
// };

// function Bear(name) {
//   this.name = name;
// }

// Bear.prototype = {
//   constructor: Bear,
// };

// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function () {
//     console.log("nom nom nom");
//   },
// };

// ========== Inherit Behaviors from a Supertype ==========

// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function () {
//     console.log("nom nom nom");
//   },
// };

// let duck = Object.create(Animal.prototype);
// let beagle = Object.create(Animal.prototype);

// ========== Set the Child's Prototype to an Instance of the Parent ==========

// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function () {
//     console.log("nom nom nom");
//   },
// };

// function Dog() {}

// Dog.prototype = Object.create(Animal.prototype);

// let beagle = new Dog();

// ========== Reset an Inherited Constructor Property ==========

function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Manually set the constructor Bird and Dog to the Bird and Dog object respectively
// Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog;

// let duck = new Bird();
// let beagle = new Dog();

// ========== Add Methods After Inheritance ==========

// function Animal() {}
// Animal.prototype.eat = function () {
//   console.log("nom nom nom");
// };

// function Dog() {}

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function () {
//   console.log("Woof!");
// };

// let beagle = new Dog();

// beagle.eat();
// beagle.bark();

// ========== Override Inherited Methods ==========

function Bird() {}

Bird.prototype.fly = function () {
  return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Override inherited fly method
Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird.";
};

let penguin = new Penguin();
console.log(penguin.fly());
