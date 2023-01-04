"use strict";

// * Standard:
// class Foo {
//   constructor() {
//     this.bar = 23;
//   }
// }

class Foo {
  // offentliches Feld außerhalb des Konstructors;
  publicValue = 23;
  // # = private
  #privateValue = 42;

  static publicStaticValue = 23;
  static #privateStaticValue = 42;

  publicMethod() {}
  #privateMethod() {}

  constructor() {}

  // static initialisation blocks => statischer Konstruktor
  //  wird nur bei Erzeugung der Klasse (1mal!) ausgeführt; mehrere pro Klasse möglich:
  static {}
}
