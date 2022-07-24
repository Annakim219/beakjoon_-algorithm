const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    const arr = input[i].split(' ').map(Number);
    if((arr[0] + arr[1]) !== 0){
    let answer = arr[0] + arr[1];
    console.log(answer);
    }
}