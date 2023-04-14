class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName() {
    console.log(`이름: ${this.name} , 이모티콘: ${this.emoji}`);
  }
}

class Dog extends Animal {
  constructor(name, emoji, owner) {
    super(name, emoji);
    this.owner = owner;
  }
  play() {
    console.log(`같이 놀자몽!`);
  }
}
class Tiger extends Animal {
  hunt() {
    console.log('사냥하자!..토끼를...');
  }
}

const dog = new Dog('꿀이', '강아지', '수연');
console.log(dog);
dog.printName();
dog.play();

const tiger = new Tiger('어흥이', '사자');
console.log(tiger);
tiger.hunt();
tiger.printName();
