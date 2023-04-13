const x = 0;
const y = 0;
const coordinate = { x: x, y: y }; // 키값과 벨류값이 같을때
const coordinate2 = { x, y }; //생략가능

console.log(coordinate);

function makeObj(name, age) {
  return {
    name, // name: name
    age, // age :age 
  };
}

console.log(makeObj('수연', '20'));
