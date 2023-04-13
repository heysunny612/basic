// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation

const obj1 = { name: '강아지' };
const obj2 = { name: '고양이', owner: '수연' };

if (obj1 && obj2) {
  console.log('둘다 ture!');
}

if (obj1 || obj2) {
  console.log('아무거나 하나가 true라면 ture!');
}

//단축평가
let result = obj1 && obj2; //obj2의 오브젝트가 출력  obj1이 이미 true라서 뒤에껀 확인할필요도 없음....그래서 그냥 뒤에것을 변수에 할당하는것임 (평가단축)
console.log(result);

result = obj1 || obj2; //true인것을 바로 할당
console.log(result);

// 활용예제
// 조건이 truthy일때 && 무언가를 해야 할 경우
//조건이 falsy일때 || 무언가를 해야 할 경우

//주인이있는 경우 새로운 주인으로
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없습니다');
  }
  animal.owner = '바 뀐 주 인 !';
}

//주인이 없는 경우 만들거임
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('이미 주인이 있습니다');
  }
  animal.owner = '새 로 운 주 인!';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1); //false
obj2.owner || makeNewOwner(obj2); //true
console.log(obj1);
console.log(obj2);

// null 또는 undefined 인 경우를 확인 할 때
let item = { price: 1 };
const price = item && item.price; // false 이므로 underfined를
console.log(price);

//기본값을 설정
//Default parameter 전달하지 않거나, undefined 설정
//||은 값이 falshy한 경우 설정(할당): 0,-0,null,undefined,''
function print(message) {
  const text = message || 'HELLO'; // 앞에것이 false라면 뒤에있는 true를 할당
  console.log(text);
}

print('안녕');
