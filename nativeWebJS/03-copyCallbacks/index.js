"use strict";
//! CALLBACK basierter Code => Lange Version;

const fs = require("fs");

const readInput = function (fileName, callback) {
  // fs.readFile ist async, deshalb muss auch readInput async sein
  fs.readFile(fileName, { encoding: "utf8" }, (err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
};

const writeOutput = function (fileName, data, callback) {
  fs.writeFile(fileName, data, { encode: "utf8" }, (data, err) => {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
};

const copy = function (source, target, callback) {
  readInput(source, function (err, data) {
    if (err) {
      return callback(err);
    }
    writeOutput(target, data, (err) => {
      if (err) return callback(err);
      callback(null);
    });
  });
};

copy("input.txt", "output.txt", (err) => {
  if (err) console.log("Failed to copy.");
  console.log("Copied successfully.");
});
