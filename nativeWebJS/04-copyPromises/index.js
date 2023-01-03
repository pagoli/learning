"use strict";
//! CALLBACK basierter Code => Lange Version;
const fs = require("fs");

const readInput = function (fileName) {
  // Promise "Versprechen", dass Daten noch kommen
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, { encoding: "utf8" }, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

// const copy = function (source, target) {
//   return new Promise((resolve, reject) => {
//     const readInputPromise = readInput(source);
//     readInputPromise
//       .then((data) => {
//         const writeOutputPromise = writeOutput(target, data);
//         writeOutputPromise
//           .then(() => {
//             resolve();
//           })
//           .catch((err) => reject(err));
//       })
//       .catch((err) => reject(err));
//   });
// };

// const copyPromise = copy("input.txt", "output.txt");
// copyPromise
//   .then(() => {
//     console.log("Copied successfully.");
//   })
//   .catch(console.log("Failed to copy"));

//? Shorter 1:
const copy = function (source, target) {
  return new Promise((resolve, reject) =>
    readInput(source)
      .then((data) => writeOutput(target, data))
      .then(() => resolve())
  ).catch((err) => reject(err));
};

copy("input.txt", "output.txt")
  .then(() => console.log("Copied successfully."))
  .catch(() => console.log("Failed to copy"));
