"use strict";

// JAVA SCRIPT

//! Typen
//  => dynamisches Typsystem; Typen werden durch den WERT definiert, nicht durch die variable;

// Primitive
// number
let x = 42;
const pi = 3.1415;

//  string
let text = "Hello!";

// boolean
let isSunny = true; // or false;

// undefined => wert und type sind undefined
let y = undefined;
console.log(typeof undefined); // undefined

// null =>
let z = null;
console.log(typeof null); // wert vom typ "object"

// Wertetypen (Stack)   : number, boolean, undefined, null
// Referenztypen (Heap) : string (kein Wertetyp da immutable), Objects, Arrays

// Garbage Collection (automatische Speicherbereiningung):
//  => kümmert sich nur um den Heap

console.log(23 == 42); // false
console.log(typeof 23 == typeof 42); //true

console.log("Hallo Welt" == "Hallo Welt"); // true;

console.log(0 == "0"); // true; JS konvertiert 0 zu einem String (unsichtbar), deshalb true;

//  === Typsicherer Vergleich
console.log(0 === "0"); // false;
