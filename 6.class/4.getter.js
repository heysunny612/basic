//접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName} 입니다 `;
  }
  set fullName(value) {
    console.log(value);
  }
}

const sunny = new Student('황', '수연');
console.log(sunny.firstName);
console.log(sunny.fullName);
sunny.fullName = '김철수';
