function a() {
  for (let i = 0; i < 10000000000000000000; i++);
  //자바스크립트는 동기적으로 수행하기때문에, 이렇게 오래걸리는 작업을 하게되면, 밑에 코드에도 영향을 받음
  return 1;
  //return 1;
}
function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

const result = c();
console.log(result);
