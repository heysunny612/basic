// 산술연산자 (Arithmetic operators)
// + 더하기
// - 빼기
// * 곱하기
// / 나누기
// % 나머지값  나누고난 나머지 값
// ** 지수 (거듭제곱)

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2); //es7에 추가됨
console.log(Math.pow(5, 2)); // 거듭제곱이 추가되기 전까지 사용함

// + 연산자 주의점!
let text = '두개의' + '문자를';
console.log(text);
text = '1' + 1; // 숫자와 문자열을 더하면 문자열로 변환됨 (변수와 변수를 더했는데, 다른값이 나올수있음을 유념)
console.log(text);
console.log(typeof text);
