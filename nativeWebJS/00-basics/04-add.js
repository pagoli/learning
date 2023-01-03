"use strict";

//  Parameter => left, right
const add = function (left, right = 0) {
  // mit optionalem Wert;
  // const add = function (left, right, ...numbers) {  // ... rest parameter

  return left + right;
  // return left + (right || 0); => wäre auch möglich bei nur einem Argument i.e. sum(23)
};

// Arguments => 1-...
// const sum = add(23, 42);
const sum = add(23, 42, 7, 5);
console.log(sum);

// Anmerkungen:
// Anzahl der Parameter muss nicht mit der Anzahl der Argumenten übereinstimmen.
