//Spread 연산자, 전개구문
//모든 Interable은 Spread 될 수 있다
//순회가 가능한 모든 것들은 촤르르를르르르륵 펼쳐 질 수 있다
//func(...iterable)
//[...iterable]
//{...obj}
//EcmaScript 2018

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(nums[0], nums[1], nums[2]));
console.log(add(...nums)); //배열 안에있는 숫자들이 하나씩 촤르르르르 펼쳐져서 자동으로 전달됨

//Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

//Array Concat (두개의 배열을 더할때)
const fruits1 = ['사과', '키위'];
const fruits2 = ['딸기', '바나나'];
let arr = fruits1.concat(fruits2);
console.log(arr);

arr = [...fruits1, '딸기', ...fruits2];
console.log(arr);

//Object
const sunny = { name: '수연', age: '35' };
const updated = {
  ...sunny,
  height: '187cm',
  weight: '71kg',
  job: 'Software Engineer',
};
console.log(sunny);
console.log(updated);

sunny.name = '써니';
console.log(sunny);
console.log(updated);
