// 논리연산자 Logical operator
// && 그리고
// || 또는
// ! 부정 (단항연산에서 온것)
// !! 특정한 값을 불리언 값으로 변환 (단힝연산자 응용버전)

let num = 8;
if (num >= 0 || num > 20) {
  console.log('떰즈업');
}

if (num != 9) {
  console.log('떰즈업222');
}

console.log('=================================');

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('=================================');

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('=================================');

console.log(!'text');
console.log(!!'text');

