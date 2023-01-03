"use strict";

setTimeout(() => {
  console.log("Hello!");
  // setTimeout(() => {
  //   console.log("Hello again!");
  // }, 1_000);
}, 1_000);

//! Promises / Async/Await
// Bspl.:

const sayHello = async () => {
  await sleep(1_000);
  console.log("Hello!");
};

const main = async () => {
  await sayHello();
};
// new: Top Level Await erlaubt einmal:
await main();

// andere (noch übliche) Variante:
main().catch((ex) => {
  // ....
});
