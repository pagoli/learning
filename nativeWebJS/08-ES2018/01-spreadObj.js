"use strict";

const person = {
  firstName: "Golo",
  lastName: "Rodem",
  age: 43,
};

// alt:
// const personInOneYear = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   age: 44,
// };

// ! neue Möglichkeit
// ... spread operator kann nun verwendet werden:
// shallow copy!

const personInOneYear = {
  ...person,
  age: 44,
};
