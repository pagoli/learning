// let age: number = 20;

// if (age < 50)
//   age += 10;

// console.log(age)

let sales: number = 123_456_789;
let course: string = "TS";
let is_published: boolean = true;
let level; // => any (should be avoided)

// function render(document: any) {
//   console.log(document);
// }

// $ ARRAYS:

let numbers: number[] = [1, 2, 3, 4, 5];

// IntelliSense
// numbers.forEach(n => n.toExponential )

// $ TUPLE
// $ => fixed length array, where each element has a particular type
let user: [number, string] = [1, "Mosh"];

// $ ENUM
// $ => list of related contents;
// JS: let mySize = Size.Medium;
enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize); // JS: let mySize = Size.Medium;

// => to show difference in transpiling to JS when "const enum" is used. // Output with value
// JS: let mySizeConst = 2;
const enum SizeConst {
  Small = 1,
  Medium,
  Large,
}

let mySizeConst: SizeConst = SizeConst.Medium;
console.log(mySizeConst); // JS: let mySizeConst = 2;

// void is used, if there is no return value;
function calculateTax(income: number, taxYear = 2022): number {
  // let x;
  if (taxYear < 2022) return income * 1.2;
  return income * 1.5;
}

// $ useful complier settings:
// ! "noImplicitReturns": true; we get more precise error message, i.e.
// => "Not all code paths return a value."

// ! "noUnusedLocals": true
// => shows unused values;

console.log(calculateTax(10_000, 2022));
