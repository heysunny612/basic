const dog = { name: '와우', emoji: '강아지' };
console.log(Object.keys(dog)); //Object.keys() => 모든 "키"들을 배열로 전달해줌
console.log(Object.values(dog)); //Object.keys() => 모든 "값"들을 배열로 전달해줌
console.log(Object.entries(dog)); //Object.keys() => 모든 "키: 값"들을 배열로 전달해줌

console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

//오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

const descriptor = Object.getOwnPropertyDescriptors(dog, 'name');
console.log(descriptor);

Object.defineProperty(dog, 'name', {
  value: '멍멍',
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(dog.name);
console.log(Object.keys(dog));
