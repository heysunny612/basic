// static 정적 프로퍼티, 매서드

class Fruit {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 인스턴스의 메서드 (만들어진 오브젝트의 주어진 데이터에 접근해서 무언가를 출력해야함. 만들어진 인스턴트와 밀접하게 관련되어있음 )
  display = () => {
    console.log(`${this.name} : ${this.emoji}`);
  };

  //클래스 별로 공통적으로 사용할 수 있고, 만들어진 인스턴스의 데이터를 참조 하지 않는 경우, static으로 만들 수 있음
  //클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit('banana', '나는 바나나입니다.');
  }
}

const banana = Fruit.makeRandomFruit();
console.log(banana);

Math.pow();
Number.isFinite(1);
