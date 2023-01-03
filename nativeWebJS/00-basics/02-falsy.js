"use strict";
// ! FALSY VALUES:
// - false;
// - 0
// - ""
// - undefined
// - null

let x = false;

if (x) {
  console.log("I will never be run ... ");
}

let a = 23;
let b = 42;

let resultOr = a || b; // => 23, da nur 23 angeschaut wird bei ||
let resultAnd = a && b; // => 42,  bei && müssen beide Seiten true sein, weil auch die rechte Seite ausgewertet wird;
// => bei && wird immer der zweite Wert zugewiesen, solange der erste Wert truthy ist.

let c = 0;
let d = 42;

let resultOr2 = c || d; // => 42; (0 wird zuerst gelesen, ist aber false; danach wird 42 gelesen)
