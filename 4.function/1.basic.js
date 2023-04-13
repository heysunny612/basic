/* 함수 Function
 *  : 특정한 일을 수행하는 코드의 집합
 * 재사용 가능, 높은 가독성, 유지보수성
 */

//사용예제 1
function sum(a, b) {
  //const result = num1 + num2; 함수안에서 결과값을 console.log로 보고 싶다면, 이렇게 변수에 값을 할당해야하지만, 그게 아니라면 사용할 필요없음
  console.log('function');
  return a + b; //함수에서 값을 외부로 반환할때는 return이라는 키워드를 사용해야함
}

const result = sum(3, 2); // 함수를 호출하면 결과값이 리턴이 됨으로, 변수에 반환하는 값을 할당하면 값을 볼수있음
console.log(result);

//사용예제 2
let lastName1 = '황';
let firstName1 = '수연';
let fullName1 = `${lastName1} ${firstName1} 안녕하세용`;
console.log(fullName1);

let lastName2 = '박';
let firstName2 = '철수';
let fullName2 = `${lastName2} ${firstName2} 안녕하세용`;
console.log(fullName2);

let lastName3 = '김';
let firstName3 = '지수';
let fullName3 = `${lastName3} ${firstName3} 안녕하세용 `;
console.log(fullName3);

console.log('-----------------------------------------');

function fullName(firstName, lastName) {
  return `${firstName} ${lastName} 안녕하세용 `;
}
let name1 = fullName('황', '수연');
console.log(name1);
let name2 = fullName('박', '철수');
console.log(name2);
let name3 = fullName('김', '지수');
console.log(name3);
