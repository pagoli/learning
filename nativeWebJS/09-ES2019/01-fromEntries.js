"use strict";

const person = {
  firstName: "Golo",
  lastName: "Roden",
  age: 43,
};

const temp = Object.entries(person);
console.log(temp); // [ [ 'firstName', 'Golo' ], [ 'lastName', 'Roden' ],[ 'age', 43 ] ]

// weil temp ein Array ist, könnte ich mappen, da kvp;
// Könnte direkt in ein key/value destructured werden

const temp2 = temp.map(([key, value]) => {
  // ...
  return [key.toUpperCase(), value];
});

//! fromEntries wandelt Object.entries wieder in obj um.
const person2 = Object.fromEntries(temp);
console.log(person2); // { firstName: 'Golo', lastName: 'Roden', age: 43 }

const person3 = Object.fromEntries(temp2);
console.log(person3); // { FIRSTNAME: 'Golo', LASTNAME: 'Roden', AGE: 43 }

// SHORTEST VERSION:
const person4 = Object.fromEntries(
  Object.entries(person).map(([key, value]) => [key.toUpperCase(), value])
);
console.log(person4); // { FIRSTNAME: 'Golo', LASTNAME: 'Roden', AGE: 43 }
