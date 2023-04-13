//원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a;
b = 2;
console.log(a);
console.log(b);

// 객체타입은 참조값 (메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
  // ex) 메모리주소 0x1234
  name: '사과',
};
let orange = apple; // ex) 메모리주소 0x1234  결국은 동일한 곳을 가르키고 있기때문에, 한 곳에서 변경해도 전부변경됨 
orange.name = '오렌지';

console.log(apple);
console.log(orange);
