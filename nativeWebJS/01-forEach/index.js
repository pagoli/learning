"use strict";

// higher order functions:

// forEach
const primes = [2, 3, 5, 7, 11];

// fn is ein CALLBACK
const foreach = function (array, fn) {
  for (const item of array) {
    // callback:
    fn(item);
  }
};

// Diese foreach Funktion arbeitet synchron und lässt erst
// nachdem alle Schritte/Callbacks ausgeführt wurden, die nächste Funktion aus.
foreach(primes, (prime) => console.log(prime ** 2));

console.log("END");
