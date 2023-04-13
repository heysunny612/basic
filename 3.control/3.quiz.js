let num = 2;

// num의 숫자가 짝수이면 엄지척을
// 홀수라면 엄지꽝을 출력하도록
//if문
//ternary

if (num % 2 === 0) {
  console.log('엄지척');
} else {
  console.log('엄지꽝');
}

//num % 2 === 0 ? console.log('엄지척') : console.log('엄지꽝');
let emoji = num % 2 === 0 ? '엄지척' :'엄지꽝';
console.log(emoji);
