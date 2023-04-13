//삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인경우 : 거짓인 경우

let fruit = 'apple';

if (fruit === 'apple') {
  console.log(':난 사과야');
} else {
  console.log(':넌뭐니?');
}

fruit === 'apple' ? console.log(':난 사과야') : console.log(':넌뭐니?');

let emoji = fruit === 'apple' ? '난 사과야' : '넌뭐니?';

console.log(emoji);
