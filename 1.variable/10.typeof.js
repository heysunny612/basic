//typeof : 데이터 타입을 확인
// 값을 타입 문자열로 반환
// 다른 언어는 string variable = '문자'로 변수를 선언하고,
// 이렇게 정의된 변수는 컴파일 시간에 아 얘는 문자타입이다! 라고 "정적"으로 결정됨
// 한번 타입이 명시되어있으면, 다른타입의 데이터를 할당 할 수 없음

let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 122; // 할당된 값에 따라 타입이 결정됨! -> "동적"으로 결정
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = [];
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');