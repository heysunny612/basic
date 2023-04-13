/* 객체 : 복합적인 데이터를 담을 수 있음.
* { key: value } 이 value에는 원시타입뿐만 아니라, 또 다른 객체도 담을 수 있음
* 연관있는 데이터를 보관할 수 있는 큰 object 
*/

let appleName = 'apple';
let appleColor = 'red';
let appleDisplay = '빨간사과';

let orangeName = 'orange';
let orangeColor = 'orange';
let orangeDisplay = '주황색오랜지';

//연관된 것들을 한꺼번에 모을 수 있음
let apple = {
  name: 'apple',
  color: 'red',
  display:'빨간사과',
}

console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

console.log('--------------------------------------');

let orange = {
  name: '오랜지',
  color: 'orange',
  display: '주황색오랜지'
}
console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.display);
