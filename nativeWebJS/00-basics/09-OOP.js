"use strict";
// "Klassen":

//! altes JS:
const Dog = function (name) {
  this.name = name;
  this.bark = function () {
    console.log("wau wau!");
  };
};

const dog = new Dog("Alice"); // "new" sorgt dafür, dass ein neues Objekt erstellt wird.
// Funktionen können mit dem New Operator aufgerufen werden

//! neu: ECMA2015 "class"

class Dog2 {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log("wau wau!");
  }
}

console.log(typeof Dog2); // => FUNCTION
