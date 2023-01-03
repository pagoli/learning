"use strict";
// named capture group
// REGEX

const ratio = "3/7";

//const result = /^(\d+)\/(\d+)$/u.exec(ratio); // [ '3/7', '3', '7', index: 0, input: '3/7', groups: undefined ]
// const result = /^(?<numerator>\d+)\/(?<denominator>\d+)$/u.exec(ratio);
/* 
[
  '3/7',
  '3',
  '7',
  index: 0,
  input: '3/7',
  groups: [Object: null prototype] { numerator: '3', denominator: '7' }
]
*/
// console.log(result);
const { numerator, denominator } =
  /^(?<numerator>\d+)\/(?<denominator>\d+)$/u.exec(ratio).groups;
console.log({ numerator, denominator }); // { numerator: '3', denominator: '7' }
