// 반복되는 객체를 "생성자 함수"를 사용하여 만들면, 정해진 틀안에서 우리가 원하는 객체를 만들 수 있음

// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name} : 사과`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name} : 오렌지`);
//   },
// };

//생성자 함수 템플릿 (대문자로 시작)
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name} : ${this.emoji}`);
  };
  //return this; // 생략가능 (자동으로 return됨)
}

const apple = new Fruit('apple', '사과이모티콘');
const orange = new Fruit('orange', '오렌지이모티콘');

console.log(apple);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

console.log(orange);
orange.display();
