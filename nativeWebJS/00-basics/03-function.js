"use strict";
// JS scanned beim Öffnen der Datei auf function statements;
// deshalb kann das function statement auch erst nach dem Aufrufen der Funktion stehen;

//! Function statement
function add(left, right) {
  return left + right;
}

const sum = add(23, 42);
console.log(sum);

// -------------------------------------------------------------

//! Function expression
//! sum2 kann nicht voher aufgerufen werden, da function expression
// const sum2 = add2(23, 42);
// console.log(sum2);

const add2 = function (left, right) {
  return left + right;
};

const sum2 = add2(23, 42);
console.log(sum2);
