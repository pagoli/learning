"use strict";

// alles Zahlen sind generell "Number" und wird in JS
// als 64-bit-Fließkommazahl verarbeitet
// kennt keine Ganzzahlarhythmethik

// bigInt erlaubt abbilden größerer Zahlen

const hugeNumber =
  BigInt(3742978078317489743827894372893074287348790753453435434345348241879);
const alternative = 37429780783174897438278943728930742873487907341879n;

const result = hugeNumber + alternative;
// const result = hugeNumber + 23; => geht nicht; Convert! also entweder BigInt(23) oder 23n
//! BigInt hat keine normale Division, nur mit Modulo noch möglich;

console.log(result, typeof result);
