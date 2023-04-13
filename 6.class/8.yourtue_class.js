'use strict';
// class : template
// object :instance of a class
//JavaScript classes
// -introduced in ES6
// -syntactical sugar over prototype-based inheritance

class Person {
  constructor(firstName, lastName, age) {
    //fields
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  //get이라는 키워드를 이용해서 값을 return 하고
  get age() {
    return this._age;
  }

  //set이라는 키워드로 값을 설정 할 수 있음
  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative!');
    // }
    this._age = value < 0 ? (value = 0) : value;
  }
  //methods
  speak() {
    console.log(`${this.firstName} ${this.lastName}:hello! 나이:${this.age}`);
  }
}

const suyeon = new Person('수연', '황', '-1');
suyeon.speak();

//class 자판기 밴딩머신
//커피갯수: 15
//코인넣는다()
//커피뽑는다()
//커피에 갯수가 마이너스가 될수있어? -> 없지? 그래서 게터랑 세터를 쓴느거야 사용자가 멍청하게 마이너스를 넣으면 안되거든
//사용자가 마이너스라고 설정해도 우리는 세터에서 0으로 만들어주는거지
//근데 다른사람이 이 커피갯수를 정하는게 좋을까 안좋을까?
//당연히 다른사람이 자판기의 커피갯수를 수정하는건 안좋죠...
//그치? 그러니까 이 커피갯수를 private 하게 만드는거야!! 이게 바로 인 캡슐레이션이지

