"use strict";

//! Funktionale Programmierung:
// => "Wert mit anderem Datentyp"
//  kann deshalb wie andere Argumente weitergereicht werden
//  Funktion kann auch eine Funktion wieder zurückgeben:

const add5 = function (n) {
  return n + 5;
};

const add7 = function (n) {
  return n + 7;
};

const getAddX = function (x) {
  // => higher order function (die Function außenherum )
  return function (n) {
    // Innere Funktion is eine Closure; FunKtion im Context einer anderen Funktion;
    // closure kann auf alle lokalen Werte innerhalb der Funktion zugreifen.
    return n + x;
  };
};

const add6 = getAddX(6);
console.log(add6); // add6() is a returned function and can be used now
const sum = add6(7);
console.log(sum); // x=6; n=7; => 13

// --------------------------------------------------------------------
// Es können auch ganze Parameter als Funktionen übergeben werden:
const primes = [2, 3, 5, 7, 11];

const getDoubles = function (array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const double = 2 * item;
    result.push(double);
  }
  return result;
};

const doubledPrimes = getDoubles(primes);
console.log(doubledPrimes);

// Als generische / allgemein gültige Funktion:
const process = function (array, fn) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const double = fn(item);
    result.push(double);
  }
  return result;
};

const tripledPrimes = process(primes, function (item) {
  return item * 3;
});
console.log(tripledPrimes);

// ! PROCESS entspricht MAP also:
// hier als "Lambda Ausdruck" / Arrow function
const tripledPrimesMap = primes.map((item) => {
  return item * 3;
});
// const tripledPrimesMap = primes.map((item) =>  item * 3);
console.log(tripledPrimesMap);

//! CALLBACK =>
//! Wenn eine Funktion an eine andere Funktion übergeben wird als Parameter;
