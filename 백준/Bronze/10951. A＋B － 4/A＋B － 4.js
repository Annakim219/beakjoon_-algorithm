const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    let arr = input[i].split(' ').map(Number);
    let answer = arr[0] + arr[1];
    console.log(answer);
}