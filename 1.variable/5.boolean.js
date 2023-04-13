// 불리언 타입
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);


console.log('----------------------------------');

// 활용 예
let isFree = true;
let isActivated = false;
let isEntrolled = true;
console.log(isFree);
console.log(isActivated);
console.log(isEntrolled);

console.log('----------------------------------');

//Falshy 거짓인 값 앞에! 한개를 붙이면 반대의 불리언 !! 두개를 붙이면 본래의 불리언
// 조건문을 배울때, 특정한 값이 조건문에 들어왔을때, true 인지 false인지를 구분할때 굉장히 중요함 
console.log(!!0); 
console.log(!!-0); 
console.log(!!''); 
console.log(!!null); 
console.log(!!undefined); 
console.log(!!NaN); 


//Truthy 참인 값
console.log(!!1); // 0은 false로 간주됨
console.log(!!-1); 
console.log(!!'비어있지 않은 문자열'); 
console.log(!!{}); 
console.log(!![]); 
console.log(!!Infinity); 


