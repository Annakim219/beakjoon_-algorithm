const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");



for (let i = 0; i < input.length; i++) {
    const newArr = input[i].split(' ').map(Number);
  if (newArr[1] !== undefined) {
    let answer = newArr[0] + newArr[1];
    console.log(answer);
  }
}
