//호이스팅 Hoisting : 끌어올리다
//: 자바스크립트 엔진(번역기, Interpreter)이 코드를 실행하기 전,
//변수,함수,클래스의 선언문을 끌어 올리는 것을 말함
//변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮김

//함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
//함수의 선언문은 선언 이전에도 호출이 가능함
print();

function print() {
  console.log('Hello');
}

// 변수(let,const)와 클래스는 선언만 호이스팅이되고,
// 초기화는 안됨
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생

//console.log(hi);
// let hi -> 변수선언
// hi = 'hi' -> 초기화

let hi = 'hi';
let func1 = function () {}; // 함수표현식은 위에서 접근 불가

//const cat = new Cat();
class Cat {}

let x = 1;
{
  //let x;
  console.log(x);
  //let x = 2;
}
