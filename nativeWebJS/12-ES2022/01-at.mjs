"use strict";

const primes = [2, 3, 5, 7, 11];

// alt:
primes[0]; // 2
// ...
primes[5]; // undefined

// neu: bei unbekannter Array-Länge kann at verwendet werden
// neu: NEGATIVE Werte möglich

primes.at(0); // 2
primes.at(1); // 3
primes.at(5); // undefined;

primes.at(-1); // 11
primes.at(-5); // 2
primes.at(-6); // undefined

"the native web".at(3);
