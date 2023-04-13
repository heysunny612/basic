const obj = {
  name: '수연',
  age: 20,
};

//코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때 -> 대괄호 표기법을 사용!할 수 있음
function getValue(obj, key) {
  return obj[key];
}

console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
  return (obj[key] = value);
}

console.log(addKey(obj, 'addSomething', 'someting'));
console.log(obj);

function deleteKey(obj, key) {
  return delete obj[key];
}
console.log(deleteKey(obj, 'addSomething'));
console.log(obj);
