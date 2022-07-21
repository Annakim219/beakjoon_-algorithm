const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let answer = 0;

for (let i = 0; i < 5; i++) {
    answer += input[i]
}

console.log(answer);