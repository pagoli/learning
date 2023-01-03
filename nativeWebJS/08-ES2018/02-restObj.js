"use strict";

const person = {
  firstName: "Golo",
  lastName: "Roden",
  age: 43,
};

// const { age } = person;
// console.log(age);

const { age, ...names } = person;
console.log(names); // {firstName: "Golo", lastName: "Roden"}
console.log(age); // 43
