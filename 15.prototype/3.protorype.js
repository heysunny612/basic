// class Dogs {
//   constructor(name, emoji) {
//     this.name = name;
//     this.emoji = emoji;
//   }
// }
// const mongchi = new Dogs('뭉치

// const dog1 = { name: '뭉치', emoji: '강아지' };
// const dog2 = { name: '코코', emoji: '강아지' };

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // 인스턴스 레벨의 함수, 강아지를 100개를 만들면 동일한 함수인데 100개 출력 메모리낭비 낭비
  // this.printName = () => {
  //   console.log(`${this.name} ${this.emoji}`);
  // };
}
//프로토타입 레벨의 함수
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

const dog1 = new Dog('뭉치', '강아지');
const dog2 = new Dog('코코', '강아지');

console.log(dog1, dog2);
dog1.printName(); // prototype에 가지고 있기때문에 사용은 가능하다
dog2.printName();

//오버라이딩
//인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면 (오버라이팅 하면)
//프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다 (섀도잉됨)
dog1.printName = function () {
  console.log('안녕!');
};
dog1.printName();

//정적 레벨
Dog.hello = () => {
  console.log('hello');
};
Dog.hello();
