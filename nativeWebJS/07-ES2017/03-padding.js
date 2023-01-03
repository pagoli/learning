"use strict";

const values = ["Golo", "Roden", "43"];

for (const value of values) {
  // alle Werte müssen ein String sein für padStart
  console.log(value.padStart(15));
}

for (const value of values) {
  // alle Werte müssen ein String sein für padStart
  console.log(value.padEnd(15, "."));
}
