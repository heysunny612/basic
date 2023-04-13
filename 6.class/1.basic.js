//생성자 함수와 마찬가지로, 객체를 생성할 수 있는 템플릿 (붕어빵 틀이다!!!!)
//클래스를 사용해서 객체를 만들 수 있고, 그렇게 만들어진 객체를 인스턴스(Instance)라고 한다.

// 객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스

class Fruit {
  //생성자 : new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  //함수는 보통 constructor 밖에서 정의하며, function이라는 키워드 붙이지 않고, 바로 함수이름으로 작성
  display = () => {
    console.log(`${this.name} : ${this.emoji}`);
  };
}

// apple은 Fruit 클래스의 인스턴스이다
const apple = new Fruit('apple', '사과이모티콘');
// orange는 Fruit 클래스의 인스턴스이다
const orange = new Fruit('orange', '오렌이모티콘');

// onj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다. 
const obj = { name: 'ellie' };

console.log(apple);
apple.display();
console.log('------------------------------');
console.log(orange);
orange.display();
