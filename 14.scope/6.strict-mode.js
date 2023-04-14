//엄격 모드 Strice mode
//리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임
'use strict';

//delete를 사용해서 키워드 삭제불가
var x = 1;
//delete x;

//키워드 생략 불가
function add(x) {
  var a = 2;
  //b = a + x;
  console.log(this); // undefied 출력
}
add(2);

const array = [1, 2, 3];
for (const num of array) {
  // num of array => var를 쓴것처럼 사용가능 하지만 use strice 모드에선 const num of array라고 꼭 num을 선언해줘야함
  console.log(num);
}
