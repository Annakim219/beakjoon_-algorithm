const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const strAlphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabet = strAlphabet.split('');

const arrResult = [];

for (let i = 0; i < alphabet.length; i++){
    arrResult.push(input.indexOf(alphabet[i]));
}

const result = arrResult.join(' ');
console.log(result);