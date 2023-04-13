/*콜백:내가 나중에 호줄해 줄께~
***일급객체 first-class object
* 일반 객체처럼 모든 연산이 가능한 것
* -함수의 매개변수로 전달
* -함수의 반환값
* -할당 명령문
* -동일 비교대상

***일급함수 first-class function
* "함수가" 일반 객체처럼 모든 연산이 가능한 것
* -함수의 매개변수로 전달
* -함수의 반환값
* -할당 명령문 -> 함수표현식이 가능한 이유!!!! const name = function(){}
* -동일 비교대상

***고차함수 Higher-order function
* 인자로 함수를 받거나(콜백함수)
* 함수를 반환하는 함수를 고차함수
*/

//콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

//전달된 action은 콜백함수이다.
//전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
//함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
//그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨
function calculator(a, b, action) {
  // 외부로 부터 주어지는 함수를 콜백함수라고함
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
  //return result;
}

calculator(-1, -1, multiply);
calculator(4, 5, add);
