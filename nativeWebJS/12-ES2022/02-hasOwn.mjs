"use strict";

const obj = { value: 23 };
// const obj = { value: 23, hasOwnProperty: 44 };
// => obj.hasOwnProperty würde nicht mehr funktionieren.
// Empfehlung war: Object.prototype.hasOwnProperty.call()

"value" in obj; // true
"toString" in obj; // true
console.log("toString" in obj); // true

// hasOwnProperty
obj.hasOwnProperty("value"); // true;
obj.hasOwnProperty("toString"); // true;

Object.prototype.hasOwnProperty.call(obj, "value"); // true
Object.prototype.hasOwnProperty.call(obj, "toString"); // false

//! neu:
console.log(Object.hasOwn(obj, "value")); // true
console.log(Object.hasOwn(obj, "toString")); // true
