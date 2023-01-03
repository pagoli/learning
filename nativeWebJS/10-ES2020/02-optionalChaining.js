"use strict";

const person = {
  firstName: "Golo",
  lastName: "Roden",
  age: 43,
};

console.log(person.firstName.toUpperCase());
// wenn Obj ein key fehlt, i.e. middleName:
// deshalb: mit Fragezeichen "Optional Chaining Operator"
console.log(person.middleName?.toUpperCase());
