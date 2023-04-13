//옵셔널 체이닝 연산자 Oprional Chaining Operator
//ES11 (ECMAScript 2020)
//?.
//null 또는 undefined를 확인할때
let item = { price: 1 };
const price = item?.price; //아이템이 있니? 그럼 접근해 없니? 그럼 접근하지마
console.log(price);

let obj = { name: '강아지', owner: { name: '엘리' } };
function printName(obj) {
  //const ownerName = obj && obj.owner && obj.owner.name;
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}

printName();
