//퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
//단, 주어진 배열을 수정하지 않도록!
//input :['바나나','딸기','포도','딸기']
//output : :['바나나','키위','포도','키위']
function replace(array, from, to) {
  return array.map((value) => (value === from ? to : value));
}

const array = ['바나나', '딸기', '포도', '딸기'];
const result = replace(array, '딸기', '키위');
console.log(result);

console.log('---------------------------------------');
console.clear;

//퀴즈2:
//배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기

const score = ['A', 'B', 'C', 'B', 'B', 'A'];
function countArrElement(array, item) {
  return array.filter((value) => value === item).length;
  // return array.reduce((count, value) => {
  //   if (value === item) {
  //     count++;
  //   }
  //   return count;
  // }, 0);
  // let counter = 0;
  // array.forEach((value) => (value === target ? counter++ : counter));
  // return counter;
}

console.log(countArrElement(score, 'A'));
console.log(countArrElement(score, 'B'));
console.log(countArrElement(score, 'C'));

//퀴즈3: 배열1, 배열2, 두개의 배열을 전달받아,
//배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환
//input :['바나나','키위','포도'] , ['바나나','딸기','포도','딸기']
//output :['바나나','포도']

const arr1 = ['바나나', '키위', '포도'];
const arr2 = ['바나나', '딸기', '포도', '딸기'];

function match(input, search) {
  return input.filter((value) => search.includes(value));
  // const result = [];

  // input.forEach((item, index) => {
  //   search.filter(() => {
  //     if (search.includes(input[index])) {
  //       result.push(input[index]);
  //     }
  //   });
  // });
  // return result;
}

console.log(match(arr1, arr2));

//filter : 조건에 맞는 모든 아이템들을 새로운 배열로!
// result = products.filter((item) => item.name === '쿠키');
// console.log(result);

// console.clear();

// //퀴즈4
// //5이상(보다큰) 숫자들의 평균
const nums = [3, 16, 5, 24, 5, 34, 21];

const result2 = nums //
  .filter((num) => num > 5) //[16,25,34,21]
  .reduce((avg, num, _, array) => avg + num / array.length, 0);

console.log(result2);
