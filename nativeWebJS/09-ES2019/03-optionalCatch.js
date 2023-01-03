"use strict";
try {
  //  ...
  throw new Error();
} catch (ex) {
  // "ex" => exception kann seit ES2019 weggelassen werden; also nur "catch {}"
  console.log("Es ist ein Fehler aufgetreten!");
}
