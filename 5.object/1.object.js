//Object literal {key:value}
//new Object();
//object.create();
//key - 문자, 숫자, 문자열, 심볼
//value - 원시값, 객체, (함수)

let apple = {
  name: 'apple',
  'hello-bye': '안녕',
  0: 1,
  ['hello-bye1']: '안녕', // 이렇게도 사용할 수 있다는 것을 보여줬으나, 특수한경우가 아니라면 카멜케이스를 사용하여 깔끔하게 만드는것이 좋음 
};

// 속성(value), 즉 데이터에 접근하기 위해서는
console.log(apple.name); //마침표 표기법 dot notation
console.log(apple['hello-bye1']); //대괄호 표기법 bracket notation 특수문자를 쓴 경우
console.log(apple['name']);

//속성추가
apple.emoji = '사과이모티콘';
console.log(apple.emoji);
console.log(apple['emoji']);
console.log(apple);

// 속성삭제
delete apple['emoji'];
console.log(apple);
