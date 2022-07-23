const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const num = Number(input);
let result = 0;

for (let i = 1; i < num + 1; i++) {
  result += i;
}

console.log(result);
