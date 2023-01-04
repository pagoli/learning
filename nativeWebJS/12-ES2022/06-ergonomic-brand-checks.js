"use strict";
//$ Ergonomic brand checks

class Foo {
  #privateField;

  // Funktion zum Überprüfen, ob ein bestimmtes Feld in einem Objekt enthalten ist:
  static hasPrivateField(obj) {
    #privateField in obj;
  }
}

const foo = new Foo();
const bar = {};

Foo.hasPrivateField(foo); // true
Foo.hasPrivateField(bar); // false
