import fs from "fs";
// util um callback-basierte Funktion in Promise zu konvertieren;
import util from "util";

const readInput = util.promisify(fs.readFile);

// ! nicht mehr benötigt wg promisify
// const readInput = function (fileName) {
//   // Promise "Versprechen", dass Daten noch kommen
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, { encoding: "utf8" }, (err, data) => {
//       if (err) return reject(err);
//       resolve(data);
//     });
//   });
// };

const writeOutput = util.promisify(fs.writeFile);

// const writeOutput = function (fileName, data) {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(fileName, data, { encode: "utf8" }, (err) => {
//       if (err) return reject(err);
//       resolve();
//     });
//   });
// };

//? Shorter mit Async:
const copy = async function (source, target) {
  try {
    const data = await readInput(source);
    await writeOutput(target, data);
  } catch (err) {
    throw err;
  }
};

// für ECMA2022 kann async() entfernt werden und
// await auf oberster Ebene verwerndet werden
// (async () => {
//   try {
//     await copy("input.txt", "output.txt");
//     console.log("Copied successfully.");
//   } catch (err) {
//     console.log("Failed to copy", err);
//   }
// })();
//immediate evoke function expression ()

// ECMA2022 TOP-LEVEL-AWAIT
// in node mit ESM module nur möglich

try {
  await copy("input.txt", "output.txt");
  console.log("Copied successfully.");
} catch (err) {
  console.log("Failed to copy", err);
}
