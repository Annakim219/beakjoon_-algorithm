const fs = require('fs');

let answer = 0;

const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(el => answer += Math.pow(Number(el), 2));

answer = answer % 10;

console.log(answer)
