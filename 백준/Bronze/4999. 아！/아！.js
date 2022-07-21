const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = input[0].split('a').length -1;
const standard = input[1].split('a').length -1;

if (count >= standard) {
    console.log('go')
} else {
    console.log('no')
}