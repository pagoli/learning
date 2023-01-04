"use strict";

const ex = throw new Error("something happened");

ex.message; // => "something happened"
ex.stack; // => Stack trace (welche Funkionen waren aktiv, Aufrufreihenfolge)
ex.code; // => i.e. "ENOENT" -> Error no Entry

// throw ex;

// Aufruf einer "vereinheitlichten Exception" mit genauerem Fehlercode mit Ursache;
// => i.e. "Datenbankverbindung konnte nicht hergestellt werden."
// inner exceptiones (error wrapping):

// ---- new:

try {
  //...
} catch (ex) {
  throw new Error("Database connection failed.", { cause: ex });
}

ex.cause; // => ex

throw ex;
