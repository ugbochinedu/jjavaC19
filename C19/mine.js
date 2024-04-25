// // let prompt = require('prompt-sync')();

// let number = 7;

// let result = (number > 2) ? "true":  "false";
// console.log(result)

// const date = new Date();
// console.log(date)

// // const marketSearch = function(price){
// //     const item = function(count, name){
// //         let itemPrice = count * price;
// //         // console.log(`${name}: ${itemPrice}`)
// //         return `${name}: ${itemPrice}`;
// //     }
// //     console.log(item(2, "pepper"))
// //     console.log(item(3, "orange"))
// //     console.log(item(5, "salt"))
// // }

// // marketSearch(200)

// // function multiply(x) {
// //     function number(a){
// //         return a * x;
// //     }
// //     return number;
// // }
// // const answer = multiply(2)
// // console.log(answer(3))
// // console.log(multiply(2)(4))

// function higherOrderFunction(callback) {
//   console.log("Executing the higher-order function");
//   callback();
// }

// function callbackFunction() {
//   console.log("Executing the callback function");
// }

// higherOrderFunction(callbackFunction);

// function solve(multiply, ...arg){
//     return arg.map((num) => multiply * num);
// }

// console.log(solve(2, 1, 2, 3, 4, 5));

// function greeting(greet) {
//   return function person(name) {
//     return name + " " + greet;
//   };
// }

// console.log(greeting("goodmorning")("chinedu"));

// function exampleFunction() {
//   if (true) {
//     let blockScopedVariable = "I am block scoped";
//     console.log(blockScopedVariable)
//   }

//   console.log(blockScopedVariable); // ReferenceError: blockScopedVariable is not defined
// }

// exampleFunction()

// let animal = {
//   type : "unknown",
//   sound: function() {
//     console.log("The " + this.type + " makes a sound")
//   }
// };

// let cat = Object.create(animal);
// cat.type = "cat";
// cat.sound();

// let cat = {};
// cat.__proto__ = animal;
// cat.type = "cat";
// cat.sound();

// chicle = {
//   type : "unknown",
//   describe: function() {
//     console.log("This vehicle is a " + this.type)
//   }
// };

// let benz = Object.create(vechicle);
// benz.type = "benz";
// benz.describe();

// let benz = {};
// Object.setPrototypeOf(benz,vechicle)
// benz.type="benz";
// console.log(benz)








// let dog = {};
// Object.setPrototypeOf(dog,animal);
// dog.type = "dog";
// dog.color = "black";
// dog.sound()
// console.log(dog)


let animal = {
  type : "unknown",
  sound : function () {
    console.log("The " + this.type + " makes a sound")
  }
};

let cat = Object.create(animal);
cat.type = "cat";
cat.sound();

let dog = {};
Object.setPrototypeOf(dog, animal);
dog.type = "dog";
dog.sound();

let tiger = {};
tiger.__proto__ = animal;
tiger.type = "tiger";
console.log(tiger);



function Person(name , age) {
  this.name = name;
  this.age = age;

  this.sayHello = function(){
    console.log(this.name + " just said hello")
  }
};

let personOne = new Person("chinedu", 12);
personOne.sayHello();



class Human {
  constructor(name, age){
    this.name = name;
    this.age =  age;
  }

  sayHello(){
    console.log(this.name + " said good morning")
  };

  static greet(){
    console.log("goodMorning")
  };
}

let humanOne = new Human("chi", 23);
console.log(humanOne);
humanOne.age = 30;
humanOne.name = "ucha";
console.log(humanOne);
humanOne.sayHello();
Human.greet()

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.species = 'Human';

var person1 = new Person('John', 30);
var person2 = new Person('Alice', 25);

console.log(person1.species); 
console.log(person2.species); 



function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  };
}

var person1 = new Person('John', 30);
var person2 = new Person('Alice', 25);

person1.greet(); 
person2.greet(); 

