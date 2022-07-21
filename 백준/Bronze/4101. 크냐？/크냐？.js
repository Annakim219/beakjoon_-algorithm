const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let i=0;

while(true){
    let num1 = Number(input[i].split(' ')[0]);
    let num2 = Number(input[i].split(' ')[1]);
    // 여기서 배열의 0번, 1번 인덱스를 가져온다.
    i++;
    if(num1 === 0 && num2 === 0){
        break;
        // [0, 0]이 나올 경우 break로 멈추게 된다.
    } else if(num1 > num2){
       console.log('Yes');
    } else{
       console.log('No');
    }
}