//구조 분해 할당 Desturcturing Assignment

//배열의 값을 의미있는 변수에 할당하기
const fruits = ['사과', '키위', '딸기', '바나나'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2, 8];
const [y, x, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

//함수의 값을 의미있는 변수에 할당하기
function createEmoji() {
  return ['apple', '사과'];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

//객체의 값을 의미있는 변수에 할당하기
const ellie = { name: 'Ellie', age: 20, job: 'engineer' };

function display({ name, age, job }) {
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}
display(ellie);

const { name, age, job: occupation, pet = '강아지' } = ellie;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);
