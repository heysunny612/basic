// 주어진 숫자 만큼 0 부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate (max,action){}

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    // i=0,1,2,3,4
    action(i);
  }
}

function print(num) {
  console.log(num);
}
function printDouble(num) {
  console.log(num * 2);
}

iterate(4, (num) => console.log(num));
iterate(4, (num) => console.log(num * 2));

console.log('--------------------------------------');

//iterate(10, printDouble);

setTimeout(() => {
  console.log('3초뒤 이 함수가 실행될거에용');
}, 3000);
