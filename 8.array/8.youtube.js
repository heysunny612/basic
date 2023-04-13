console.log('1. =======================================');
// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  //console.log(fruits.toString()); 내 대답
  console.log(fruits.join('|')); // 기본 구분자는 콤마 toString과 다르게 구분자를 사용해서, 나눌수있음
}

console.log('2. =======================================');
// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  //console.log(new Array(fruits)); 내 대답
  console.log(fruits.split(' ,')); // 문자열을 구분 한 후, 분리된 각 문자열로 이루어진 배열을 반환한다
}

console.log('3. =======================================');
// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
  console.log(Array); //배열 자체를 변경
}

console.log('4. =======================================');
// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.slice(2));
  console.log(array.slice(2, 5));
  console.log(array.slice(-3));

  //start : 복사를 시작할 인덱스
  //end : 복사를 종료할 인덱스
}

console.log('5. =======================================');

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((value) => value.score === 90); // 화살표함수는 return이 내장 되어있어 생략가능
  console.log(result);
}

// Q6. make an array of enrolled students
{
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
}

// Q8. check if there is a student with the score lower than 50
{
}

// Q9. compute students' average score
{
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}
