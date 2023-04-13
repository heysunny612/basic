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
const result = replace(array, '딸기', '키위');
const result2 = replace(array, '포도', '키위');
console.log(result);
console.log(result2);

console.log('---------------------------------------');
// //퀴즈2:
// //배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기

const score = ['A', 'B', 'C', 'B', 'B', 'A'];

function countArrElement(array, target) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      counter++;
    }
  }
  return counter;
}
console.log(countArrElement(score, 'A'));
console.log(countArrElement(score, 'B'));
console.log(countArrElement(score, 'C'));

// //퀴즈3: 배열1, 배열2, 두개의 배열을 전달받아,
// //배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// //input :['바나나','키위','포도'] , ['바나나','딸기','포도','딸기']
// //output :['바나나','포도']

const arr1 = ['바나나', '키위', '포도'];
const arr2 = ['바나나', '딸기', '포도', '딸기'];

function match(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}

console.log(match(arr1, arr2));
