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

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

const myHouse = new House(4);

console.log(myHouse instanceof House);
