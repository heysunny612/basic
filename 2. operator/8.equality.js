//동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2');
console.log(2 === '2'); // 이것을 쓰는게 좋음
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);
console.log('==========================================');

const obj1 = {
  name: 'suyeon',
};

const obj2 = {
  name: 'suyeon',
};

console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

console.log('==========================================');
let obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 === obj2);