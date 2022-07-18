const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().split("\n")

const a = BigInt(input.shift());
const b = BigInt(input.shift());

console.log((a + b).toString());
console.log((a - b).toString());
console.log((a * b).toString());