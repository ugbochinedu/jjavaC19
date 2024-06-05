// //arrow functions

// const print = (params) =>{
//     console.log(params);
//      console.log("I am higher function");

//     return lowerFunction = ()=> {
//        console.log("I am inner function");

//        const name = () => {
//          console.log("I am innerInner function");
//        }
//        name("pass-in something here");
//      }

//     //  lowerFunction();
// }

// let firstFunction = print("ugo");
// // let secondFunction = firstFunction();
// firstFunction()



// // function higherOrderFunction() {
    
// //     console.log("I am higher function");

// //     function lowerFunction() {
// //         console.log("I am inner function");

// //         function name(params) {
// //             console.log("I am innerInner function");
// //         }
// //         name("pass-in something here")
// //     }
    
// //     lowerFunction();
// // }

// // higherOrderFunction()

// let arrayOfNumbers = new Array(2);
// console.log(arrayOfNumbers.length);
// arrayOfNumbers[0] = 1;
// arrayOfNumbers[1] = 1;
// arrayOfNumbers[2] = 1;
// arrayOfNumbers[3] = 1;
// console.log(arrayOfNumbers);
// console.log(arrayOfNumbers.length)

// let arrOne = [1,2,3,4];
// let arrTwo = [2,3,4,6];
// let answer = arrOne.concat(arrTwo);

// console.log(answer)

// let numbers = [1, 2, 3, 4];
// let newArray = [];
// numbers.forEach((number) => {
//   console.log(number * 2);
//   newArray.push(number * 2);
// });

// console.log(newArray);
function reverseWord(params) {
  let newArray = [];
  for (let index = params.length - 1; index >= 0; index--) {
    newArray.push(params[index]);
  }
  console.log(newArray);
}

reverseWord("semicolon");


// function secondFunction(callBack) {
//     console.log("second function");
//     callBack();
// };

// secondFunction(() => {
//     console.log("first function");
// })

// test("add numbers", ()=>{

// })

