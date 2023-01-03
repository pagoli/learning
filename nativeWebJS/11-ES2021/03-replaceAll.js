"use strict";

const name = "Golo Roden";

console.log(name.replace("o", "0")); // G0lo Roden; ersetzt nur das erste;
// NEU:
console.log(name.replaceAll("o", "0")); // G0l0 R0den
