// charCodeAt 은 문자열중 하나를 선택하여 아스키코드 번호로 변환해주는 함수

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

console.log(input.charCodeAt(0));