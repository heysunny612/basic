// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 라는 객체에 저장됨
// 매개변수 기본값 Default Parametes a=1,b=1 처럼 값을 지정할 수 있고, 파라미터가 전달되지 않았을때 이 기본값이 출력됨.

function add(a = 1, b = 2) {
  // 누군가가 아무것도 전달하지 않으면, 기본값을 지정해 줄 수있음 인자가 전달되면, 이 기본값은 무시됨
  console.log(a);
  console.log(arguments[0]);
  console.log(b);
  console.log(arguments[1]);
  console.log('-------------------------------');
  console.log(arguments); // 함수는 객체이기때문에, 객체안에 유용한 properties인 argumets가 들어있음/ 이 argumets안에는 전달된 인자가 들어있음
  return a + b;
}
const result = add(); // undefined+ undefined =NaN
console.log(result);

console.log('-------------------------------');

const result2 = add(1, 2, 3); // 추가적으로 인자를 전달한다면, 그 값은 그냥 무시됨
console.log(result2);

console.log('-------------------------------');
// Rest 매개변수 Rest Prameters
function sum(a, b, ...numbers) {
  //얼마나 많은 갯수의 매개변수가 전달될지 모를때, 모든것들을 다 배열로 받고싶을 때 사용
  console.log(a);
  console.log(b);
  console.log(numbers);
  return a + b + numbers;
}
const result3 = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result3);
