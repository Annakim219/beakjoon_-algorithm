const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const num = parseInt(input);

function fac(n) {
    if(n === 0) {
        return 1;
    }
    return n * fac(n-1)
}

console.log(fac(num));