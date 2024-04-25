// console.log(calc(3)(2));

// function calc(x) {
//   function secondNumber(a) {
//     return a * x;
//   }
//   return secondNumber;
// }

// const calc = (x) => {
//     function secondNumber(a) {
//       return a * x;
//     }
//     return secondNumber;
// };

// let result = calc("3");
// console.log(result("2"));
// console.log(calc("3")("2"));


// function higherOrderFunction(lowerFunction) {
//     console.log("higher function")
//     lowerFunction();
// }



// higherOrderFunction(() => {
//     console.log("lower function")
// });

// function greetings(greet) {
//     return function person(name) {
//         return `Hello, ${name}. ${greet}`;
//     }
// }

// console.log(greetings("Good morning!")("John")); 

let arr = [1,3,4,5,6];
arr.shift();
console.log(arr);

let array = [
  ["car", 1500],
  ["cap", 2500],
  ["cat", 3500],
];
console.log(array[0][0]);