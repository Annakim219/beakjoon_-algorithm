let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);
let result = '';
for (let i = 1; i <= num; i++) {
  result += `${i}\n`;
}

console.log(result);