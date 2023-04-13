class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자');
  }
  sleep() {
    console.log('자자');
  }
}

class Tiger extends Animal {}
class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자');
  }
  // 오버라이딩 : 부모가 가지고있는 함수를 덮어씌운다
  eat() {
    super.eat();
    console.log('강아지가 먹는다');
  }
}

const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.eat();
tiger.sleep();

const dog = new Dog('흰둥이', '수연이');
console.log(dog);
dog.eat();
dog.sleep();
dog.play();
