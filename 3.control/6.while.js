// while (조건){}
// 조건이 false가 될떄까지 {} 코드를 반복 실행

let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log('아직살아있다');
  if (i === 5) {
    break;
  } // 여기까지만 쓰면 무한루프....
  i++; // 이거 꼭 써줘야함...
}

//do while

do {
  //일단 먼저 실행하고 나서 조건을 검사함.
  console.log('do-while 아직살아있다!');
} while (isActive);
{
}
