//스코프 Scope : 변수를 참조할 수 있는(접근할 수 있는) 유효한 범위 또는 식별자(변수,함수,클래스이름) 가 유효한 범위
// 선언된 위치에따라 유효범위가 결정됨
// { 블럭안의 변수는 블록안에서만 유효 }
// 이름 충돌 방지
// 블럭이 끝나는 순간 변수는 메모리에서 제거됨 (메모리 절약)
// 코드블럭 : { } , if(){} ,for() {} ,function(){} ....

//블럭 외부에서는 블럭 내부의 변수를 참조 할 수 없다
{
  const a = 'a';
  console.log(a);
}
//console.log(a);
const b = 'b';

// 함수 외부에서는 함수 내부의 변수를 참조할 수 없다
function print(text) {
  const message = text || 'Hello World';
  console.log(message);
}
//console.log(message);

//함수 외부에서는 함수의 매겨변수를 참조 할 수 없다
function sum(a, b) {
  console.log(a, b);
}
//console.log(a, b);
