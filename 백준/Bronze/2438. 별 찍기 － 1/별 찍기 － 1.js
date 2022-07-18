const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let star = '';

for (let i = 0; i < input; i++) {
    star = star + '*';
    console.log(star);        
}