//mutable 변경할 수 있는 <-> immutable 변경할 수 없는
//Immutability (불변성)
//함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 안됨!!!!!
//상태 변경이 필요한 경우에는, 새로운 상태를 (오브젝트,값)을 만들어서 반환해야한다
//원시값 - 값에 의한 복사
//객체 - 참조에 의한 복사 (메모리 주소)

function display(num) {
  //let num = 4; num이 넘어올때 변수를 만들고, 인자로 받은 값으로 초기화함
  num = 5; // 함수내부에서 넘어온 인자 값을 변경함-> 출력 값 : 5 ( 지역변수 )
  console.log(num);
}

const value = 4;
display(4);
console.log(value); // 출력 -> 4  ( 전역변수 )

//심각한예제
function displayObj(obj) {
  //obj.name = 'suyeon'; //XXXXXXXXXXXXXXXXXXX 외부로 부터 주어진 인자(특히 오브젝트)를 내부에서 변경하지 않아야한다!!!!!!!!!!!!!!!!!!!!!
  console.log(obj);
}

function changeName(obj) {
  return { ...obj, name: 'Bob' };
}

const ellie = { name: 'ellie' };
displayObj(ellie);
console.log(ellie);

const result = changeName(ellie);
console.log(result);


//함수 외부로 부터 받아온 인자값을 절대 바꾸지말아라!!! 외부로 부터 받아온 인자값으로 지지고볶고 다하고, 새로운 값을 뱉어내는것이 함수이다!!!! 