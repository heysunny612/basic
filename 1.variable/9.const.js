//let 은 재할당이 가능
let a = 1;
a = 2;

//const는 재할당이 불가능
//1.상수
//2.상수변수 또는 변수

const text = 'hello';
//text = 'hi'; 이렇게하면 오류남!

// 1. 상수를 사용할때는 항상 대문자로 만들어야하고 단어와 단어사이에는 _ 분리
const MAX_FRUITS = 5; // 절대 이값이 바뀔수없을때 사용

//2. 재할당 불가능한 상수변수 또는 변수
//재할당이 필요하지 않은 변수에 사용
const apple = {
  name: 'apple',
  color: 'red',
  dsiplay: '빨간사과',
};

console.log(apple);
apple.color = 'green';
apple.dsiplay = '그린애플';
console.log(apple);