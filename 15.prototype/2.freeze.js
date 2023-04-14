// 동결! Object.freeze (꽁꽁얼린다) 추가X , 삭제X, 쓰기X, 속성 재정의 X
// (단, 얕은 꽁꽁 얼림!)
const ellie = { name: '엘리' };
const dog = { name: '와우', emoji: '강아지', owner: ellie };

Object.freeze(dog);
//dog['name'] = '멍멍';
dog.name = '멍멍';
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);

ellie.name = '수연'; // 얕은 복사로 참조가 되어있기떄문에, 변경됨
console.log(dog);

// 밀봉! Object.seal 값의 수정 O , 추가 X , 삭제 X , 속석 재정의 X
const cat = { ...dog };
//Object.assign(cat, dog);
Object.seal(cat);
console.log(cat);
cat.name = '냐옹';
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(dog));

//확장 금지 preventExtensions 추가 X
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐응';
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);
