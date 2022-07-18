const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

const a = Number(input.shift());
const b = Number(input.shift());
let result = '';

if (a > b) {
    result = '>';
} else if (a < b) {
    result = '<'
} else {
    result = '=='
}

console.log(result);