//데이터타입과 관련된 내장객체들
//래퍼 객체 (Wrapper Object)
//원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다
const number = 123; //number 원시타입
//쩜을 찍어 특정한 함수를 호출하는 순간, number의 원시타입을 감싸고 있는 Number라는 클래스의 "객체"로 감싸진다.
console.log(number.toString());
console.log(number); // 다시 원시타입

const text = 'text';
console.log(text);
console.log(text.length);
console.log(text.trim());
