/* return
 * 함수를 호출 했을때, 호출 한 사람에게 함수안에서 처리한 특정한 값을 반환하기위해 return이라는 값을 씀
 */

function add(a, b) {
  return a + b;
  //return을 명시적으로 작성하지않으면, 자바스크립트 엔진이 undefined를 반환함
}

const result = add(1, 2);
console.log(result);

// 특정한일을 수행하고 아무것도 반환하지 않는 함수라면, return 생략할 수 있음
// return 을 함수 중간에 하게되면 함수가 종료됨
// 사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함! 
function print(num) {
  if (num < 0) {
    return undefined; // ★ 함수를 종료. retrun undefined의 약자임 
  }
  console.log(num);
}
print(-1);
print(12);
