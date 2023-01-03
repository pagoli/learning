/* MEMOIZATION */

//! Use cases:
//  - slow function with the same values over and over;
//  - when fetching from an API; prevents making  too many calls to the server;
//  - dynamic programming: => using recursive functions (i.e. Fibonacci)

// caching the value based on the input;
const prevValues = [];

//* inefficient, w/o prevValues:
// const square = (n) => {
//   let result = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       result += 1;
//     }
//   }
//   return result;
// };

// ! with prevValues;
// Memoization stores the previous values;
const square = (n) => {
  if (prevValues[n] != null) {
    return prevValues[n];
  }
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result += 1;
    }
  }
  // after each turn, the previous result is stored;
  prevValues[n] = result;
  return result;
};

console.log(square(30000));
// console.log(square(30000));
// console.log(square(30000));
// console.log(square(30000));
// console.log(square(30000));
// console.log(square(30000));
// console.log(square(30000));

// Recursive Functions:

//! w/o memoization
// const fib = (n) => {
//   if (n <= 2) {
//     return 1;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// };

const fib = (n, prevValues = []) => {
  if (prevValues[n] != null) {
    return prevValues[n];
  }
  let result;
  if (n <= 2) {
    result = 1;
  } else {
    result = fib(n - 1, prevValues) + fib(n - 2, prevValues);
  }
  prevValues[n] = result;
  return result;
};

console.log(fib(4));
console.log(fib(6));
console.log(fib(5));
console.log(fib(40));
