// 문자열 타입
let string = '안녕하세요';
string = `안녕!`;
console.log(string);

// 특수 문자 출력하는 법
string = '"안녕!"';
console.log(string);

//띄어쓰기 \n 탭 \t \u 특수문자 입력
string = '안녕!\n엘리야!\t\t내 이름은\\ \u09AC ';
console.log(string);

//템플릿 리터럴 (template Literal);
let id = '엘리';
let greetings = '"안녕!,' + id + '\n 즐거운하루보내세요"';
console.log(greetings);

//띄어쓰기도 적용됨
greetings = `"안녕!, ${id} 
즐거운하루 보내세요"`
console.log(greetings);
