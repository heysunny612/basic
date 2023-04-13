// 함수 선언문 function name(){}
// 함수 표현식 const name = function(){} (문중에서, 값으로 평가될 수 있는 값이 표현식)
// 함수표현식이 가능한 이유는, 함수는 객체이기때문에 다른 변수에 할당하거나, 재할당이 가능함

let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => {}
add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

add = (a, b) => a + b; // 코드 안에서 특별한 일을 하지 않고, 어떤 값을 바로 리턴하는 함수라면 가로{}, return 생략가능
console.log(add(4, 5));

// 생성자 함수 const object = new Function(); 뒤 객체편에서 다루기로...

console.log('---------------------------------');

// 함수를 정의하고, 그 함수를 바로 실행하고 싶을때 사용하는 함수
// IIFE (Immediately-Invoked Function Expressions)
// 웹페이지가 만들어지면서 즉각적으로 실행하고싶을때 사용 되나, 많이는 사용되지 않는 함수 
(function run() {
  console.log('런 이모지');
})();
