"use strict";

console.log("Start");

// setTimeout arbeitet asynchron;
// wird aufgerufen, aber läuft unter der Haube weiter
setTimeout(() => {
  console.log("HELLO!");
}, 1_000); // führe es frühestens nach x-Zeit aus!

console.log("Ende");

//! JavaScript ist "Single-threaded"
//  => in Bezug auf den user: Ja.
//  allerdings können in der Runtime mehrere Threads laufen;

// Main Funktion blockiert den thread:
for (let i = 0; i < 1_000_000_000; i++) {
  // intentionally do nothing
}

//! => Funktionen werden niemals unterbrochen ... !
