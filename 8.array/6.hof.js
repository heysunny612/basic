//퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
//단, 주어진 배열을 수정하지 않도록!
//input :['바나나','딸기','포도','딸기']
//output : :['바나나','키위','포도','키위']

function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}

const array = ['바나나', '딸기', '포도', '딸기'];
const result2 = replace(array, '딸기', '키위');
const result3 = replace(array, '포도', '키위');
console.log(result2);
console.log(result3);

//forEach : 배열을 빙글빙글 돌면서 원하는 것을 할때
array.forEach(function (value, index, array) {
  // 값(value), 인덱스(index), 배열전체(array)
  console.log('--------------------------------------------');
  console.log(value);
  console.log(index);
  console.log(array);
});

array.forEach((value) => console.log(value));

console.log('--------------------------------------------');

//조건에 맞는(콜백함수) 아이템을 찾을때 사용
// find: 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: '우유', price: 2 };
const item2 = { name: '쿠키', price: 3 };
const item3 = { name: '삼각김밥', price: 1 };
const products = [item1, item2, item3, item2];

let result = products.find((value) => value.name === '쿠키');
console.log(result);

//findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => value.name === '쿠키');
console.log(result);

//some : 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === '삼각김밥');
console.log(result);

//every: 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === '삼각김밥');
console.log(result);

//filter : 조건에 맞는 모든 아이템들을 새로운 배열로!
result = products.filter((item) => item.name === '쿠키');
console.log(result);

console.clear();

//Map : 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성! 정말정말 유용!!!
const nums = [1, 2, 3, 4, 5];

result = nums.map((item) => item * 2);
console.log(result);

result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

//Flatmap :

result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].map((text) => text.split(''));
console.log(result);

result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);

// sort : 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경

const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10, 24];
numbers.sort();
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers);

//reduce 배열의 요소들을 접어서 접어서 값을 하나로!
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(result);
