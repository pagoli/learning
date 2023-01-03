"use strict";

const person = {
  firstName: "Golo",
  age: 43,
};

console.log(Object.entries(person)); // [["firstName", "Golo"], ["age", 43]];

//  for of loop:
// Auflisten aller key-value-pairs:

// for (const kvp of Object.entries(person)) {
for (const [key, value] of Object.entries(person)) {
  // const [key, value] = kvp

  // console.log(kvp[0], kvp[1]);
  console.log({ key, value });
}
