// 정직원과 파트타임 직원을 나태낼 수 있는 클래스를 만들어보자
// 직원들의 정보: 이름. 부서이름(정직원/파트타임), 한달 근무시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10,000원
// 파트타임 직원은 시간당 8,000원

class Employee {
  constructor(name, departmentName, workingHours, salary) {
    this.name = name;
    this.departmentName = departmentName;
    this.workingHours = workingHours;
    this.salary = salary;
  }
  calculateSalary = () => {
    const price = this.workingHours * this.salary;
    console.log(
      `${this.name}은 ${this.departmentName}이고, 한달 일한 시간은 ${this.workingHours}시간 입니다. 당신의 월급은:` +
        price.toLocaleString() +
        `입니다`
    );
  };
}

class Partimer extends Employee {
  static PAY_RATE = 8000;
  constructor(name, departmentName, workingHours, salary) {
    super(name, departmentName, workingHours, Partimer.PAY_RATE);
  }
}
class fullTimer extends Employee {
  static PAY_RATE = 10000;
  constructor(name, departmentName, workingHours, salary) {
    super(name, departmentName, workingHours, fullTimer.PAY_RATE);
  }
}
const sunny = new Partimer('황수연', '파트타임', 40);
sunny.calculateSalary();

const elile = new fullTimer('김지수', '정직원', 40);
elile.calculateSalary();
