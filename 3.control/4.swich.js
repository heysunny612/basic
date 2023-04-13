// 조건문 Conditional Statement
// switch
// if else if else if else if ...else
// 정해진 범위 안의 값에 대해 특정한 일을 해야 하는 경우

let day = 11; // 0: 월요일 . 1:화요일...6:일요일
let dayName;

if (day === 0) {
  dayName = '월요일';
} else if (day === 1) {
  dayName = '화요일';
} else if (day === 2) {
  dayName = '수요일';
} else if (day === 3) {
  dayName = '목요일';
} else if (day === 4) {
  dayName = '금요일';
} else if (day === 5) {
  dayName = '토요일';
} else if (day === 6) {
  dayName = '일요일';
}

// 이걸 간편하게 바꿀 수 있음
switch (day) {
  case 0:
    dayName = '월요일';
    break; //  break를 걸어주지 않으면, 맨 마지막 값을 반환함
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;
  default:
    console.log('해당하는 요일이 없음!');
}

console.log(dayName);

//break를 사용하지 않는 경우

let condition = 'okay'; // okay,good ->좋음! , bad ->나쁨!
let text;
switch (condition) {
  case 'okay':
  case 'good':
    text = '좋음!';
    break;
  case 'bad':
    text = '나쁨!';
    break;
}

console.log(text);
