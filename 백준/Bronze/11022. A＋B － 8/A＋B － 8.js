const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
    let arr = input[i].split(' ').map(Number);
    let answer = arr[0] + arr[1];
    console.log(`Case #${i}: ${arr[0]} + ${arr[1]} = ${answer}`);
}