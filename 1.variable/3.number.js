/* 데이터 타입
* 원시 (primitive) number / string / boolean / null / undefined / Symbol
  단일 데이터 

* 객체 (object) object - array / function 등 원시타입이 아닌 모든 것 
  복합 데이터

*/

let integer = 123; // 정수
let negative = -123; // 음수
let double = 1.23; //실수

console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011; //2진수
let octal = 0o173; //8진수
let hex = 0x7b // 16진수
console.log(binary); 
console.log(octal); 
console.log(hex);

console.log(0/123); // 0
console.log(123/0); //Infinity
console.log(123/-0); // -Infinty
console.log(123 / 'text'); //NaN (Not a Number)

let bigInt = 1234567897464231545645641231548564212315456452n;
console.log(bigInt);








