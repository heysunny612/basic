//배열의 함수들
//배열 자체를 변경하는지, 새로운 배열을 반환하는지를 포인트를 두고 !!!!! 알아보기

const fruits = ['바나나', '사과', '레몬'];

//특정한 오브젝트가 배열인지 아닌지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

//특정한 아이템이 몇번째 배열의 인덱스로 있는지
console.log(fruits.indexOf('레몬'));

//배열안에 특정한 아이템이 있는지
console.log(fruits.includes('바나나'));



//추가 -제일 뒤
let length = fruits.push('복숭아'); //배열 자체를 수정(업데이트!)
console.log(fruits);
console.log(length); // 배열길이 반환

//추가 -제일 앞
length = fruits.unshift('자두'); //배열 자체를 수정(업데이트!)
console.log(fruits);
console.log(length); // 배열길이 반환

//제거 -제일 뒤
let lastItem = fruits.pop(); //배열 자체를 수정(업데이트!)
console.log(fruits);
console.log(lastItem); //제거된 아이템 반환

//제거 -제일 앞
lastItem = fruits.shift(); //배열 자체를 수정(업데이트!)
console.log(fruits);
console.log(lastItem); //제거된 아이템 반환

// 중간에 추가 또는 삭제 시작하는 인덱스, 몇개를 삭제할건지, 삭제하고나서 다시 추가할 아이템
lastItem = fruits.splice(1, 1); //배열 자체를 수정(업데이트!)
console.log(fruits);
console.log(lastItem); //제거된 아이템 반환

lastItem = fruits.splice(1, 1, '수박', '블루베리'); //배열 자체를 수정(업데이트!)
console.log(fruits);
console.log(lastItem); //제거된 아이템 반환

console.log('====================================================');

//잘라진 새로운 배열을 만듬
students = ['학생1', '학생2', '학생3', '학생4', '학생5'];
let newArr = students.slice(0, 2); //시작하는 인덱스 , 짜르는 갯수
console.log(newArr);
console.log(students);

newArr = students.slice(-1);
console.log(newArr);

//여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

console.log('====================================================');

//순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

console.log('====================================================');

//중첩 배열을 하나의 배열로 쫙 펴기
let arr = [1, 2, 3, [4, [5, 6]]];
console.log(arr);
console.log(arr.flat(2));

console.log('====================================================');

//특정한 값으로 배열을 채우기
arr = arr.flat(3);
arr.fill('바껴!', 3); //배열 자체를 수정(업데이트!)
console.log(arr);

console.log('====================================================');

//배열을 문자열로 합하기
let text = arr.join(' | ');
console.log(text);
