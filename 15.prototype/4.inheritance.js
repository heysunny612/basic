// 프로토타입을 베이스로한 객체지향 프로그래밍
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name}${this.emoji}`);
};

function Dog(name, emoji, owner) {
  //super();
  Animal.call(this, name, emoji);
  this.owner = owner;
}
//Dog.prototype = Object.create(Object.prototype); << 디폴특값
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.play = function () {
  console.log(`같이 놀자옹!`);
};

const dog1 = new Dog('꿀이', '강아지', '수연');
dog1.play();
dog1.printName();

function Tiger(name, emoji) {
  //super();
  Animal.call(this, name, emoji);
}
Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log('사냥하자!');
};
const tiger = new Tiger('어흥이', '사자');

tiger.printName();
tiger.hunt();
