const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr1 = input[0].split(' ').map(Number);
const arr2 = input[1].split(' ').map(Number);

const resultArr = [];

for (let i = 0; i < arr2.length; i++) {
    if (arr1[1] > arr2[i]) {
        resultArr.push(arr2[i]);
    }
}

const result = resultArr.join(' ');
console.log(result);