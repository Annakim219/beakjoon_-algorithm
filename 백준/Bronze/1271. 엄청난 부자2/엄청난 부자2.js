const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split(" ")

let money = BigInt(input.shift());
let people = BigInt(input.shift());

console.log((money / people).toString());
console.log((money % people).toString());