// console.log(globalThis);
// console.log(this);
// console.log(NaN);
// console.log(Infinity);
// console.log(NaN);
// console.log(undefined);

eval('const num =2; console.log(num)');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.43')); // 숫자로변환
console.log(parseInt('12.43')); // 문자->숫자->정수로 변환

//URL (URI, Uniform Resource Identifier 하위개념) //어떤 리소스를 나타낼 수 있는 단하나의 고유한 주소나 id
// 아스키 문자로만 구성되어야함
// 한글이나 특수문자는 이스케이프(정해진 다른문자로 변환해줘야함) 처리를 해줘야함

const URL = 'http://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
