/* 변수 규칙!
* 라틴문자(0-9, a-z, A-Z), _ 사용가능
* 대소문자를 구분함
* 추천: camelCase 단어 2개 이상일경우, 대문자로 구분
* 한국어 사용안됨
* 예약어 사용불가(if, for등)
* 숫자로 시작 불가
* 특수문자 사용 불가 (_,$ 제외)
* 이모지 사용 불가
* 여러개의 변수를 1,2,3 숫자로 구분X ->최대한 의미있게, 구체적인 이름으로 작성!
* 변수이름은 명사로 만듬
 */

let apple;
let redApple;

//나쁜예제 
let num = 20;
let audio1;
let audio2;

// 좋은 예제
let myAge = 20;
let backgroundAudio;
let windAudio;

// 꿀팁! 앞에 문자를 통일하면, 나중에 자동으로 불러올때, 편함
let audioBackground;
let audioWind;



