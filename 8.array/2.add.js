const fruits = ['바나나', '사과', '포도', '복숭아'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  const result = fruits[i];
  console.log(result);
}

//추가, 삭제 => 좋지 않은 방식 사용 XXXXXXXXXXXXXXXXXXX
fruits[fruits.length] = '딸기'; //마지막에 추가하고 싶다면 차라리 이렇게 사용
fruits[7] = '자두'; //좋은 방법이아님
console.log(fruits);

delete fruits[1];
console.log(fruits); // 삭제되고도 <1 empty item>으로 그 자리가 텅텅 비어있는 상태로 남아있음......
