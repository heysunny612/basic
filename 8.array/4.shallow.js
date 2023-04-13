//얕은 복사 Sallow Copy - 객체는 메모리 주소 전달
//자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐!
//Array.from, concat , slice, spread(...),Object.assign 새로운 오브젝트를 만드는것이 아닌 주소만 참조함, 그래서 이안에 있는 오브젝트의 값을 변경하면 전부다 변경됨!!!
//복습!! function(obj){ } 인자로 전달된 obj는 절대절대절대 수정하지 않는다!!!!!!!!!

const pizza = { name: '피자', price: 2 };
const ramen = { name: '라면', price: 3 };
const sushi = { name: '초밥', price: 1 };

const store1 = [pizza, ramen];
const store2 = Array.from(store1); // 복사

console.log('store1 :', store1);
console.log('store2 :', store2);

store2.push(sushi);
console.log('store1 :', store1);
console.log('store2 :', store2);

pizza.price = 4;
console.log('store1 :', store1);
console.log('store2 :', store2);
