/*Iterable 하다는건! 순회가 가능하다는 거지!
 * [Symbol.iterator]():Iteratior;
 * 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
 * 순회 가능한 객체이다 라는걸 알 수 있음
 * 순회가 가능하면 무엇을 할 수 있나? for..of, spread
 */

const array = [1, 2, 3, 4, 5, 6];
for (const item of array.entries()) {
  console.log(item);
}

//오브젝트는 for of가 아닌 for in 사용가능
const obj = { 0: 1, 1: 2 };
for (const item in obj) {
  console.log(item);
}

console.log(`----------------------------------------`);

const iterator = array.values();
console.log(iterator);

while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
