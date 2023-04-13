const textObj = new String('Hello World');
const text = 'Hello World!';
console.log(textObj);
console.log(text);
console.log(text.length);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log('----------------------------------');

console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log('----------------------------------');

// 특정글자가 몇번째 인덱스인지
console.log(text.indexOf('l')); //가장 처음에 나온 글자의 인덱스만 반환
console.log(text.lastIndexOf('l')); //뒤에 인덱스부터 찾고 싶다면

console.log('----------------------------------');

//특정한 문자열이 포함되어있는지
console.log(text.includes('tx'));
console.log(text.includes('h')); //대소문자를 구분함

console.log('----------------------------------');

//특정한 문자열로 시작하는지 안하는지
console.log(text.startsWith('H'));
console.log(text.startsWith('h'));

//특정한 문자열로 끝나는건지 아닌지
console.log(text.endsWith('h'));
console.log(text.endsWith('!'));

console.log('----------------------------------');

//텍스트를 전부다 대문자로 변경
console.log(text.toUpperCase());
//소문자로 변경
console.log(text.toLowerCase());

console.log('----------------------------------');

//특정한 위치의 글자를 가져올 수 있음 substring(startNum, deleteNum)
console.log(text.substring(0, 2));

console.log('----------------------------------');

//문자열 삭제
console.log(text.slice(6));
console.log(text.slice(-6));

console.log('----------------------------------');

//문자열의 공백삭제
const space = '               space        ';
console.log(space);
console.log(space.trim());

//문자열 끊어주기
//★알고리즘에서 정말 많이사용
const longText = 'Get to the, ponit';
console.log(longText.split(' ')); // 배열로 반환 해줌
console.log(longText.split(', ', 2)); // 끊어진 것 중 두덩어리 반환
