//fetch : 브라우저에서 제공하는 api
//fetch는 네트워크로 부터 특정한 리소스를 받아올 수있음 (서버있는 데이터, 이미지등의 리소스)
//fetch는 프로미스를 리턴하는데, 프로미스는 Response라는 "객체"를 리턴함
//우리가 무언가를 요청하면, 이 promise가 Response를 리턴하는구나...!
//response 안에는 데이터를 받아서 읽을 수 있는 body, ok 등등

fetch(
  'https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0'
)
  .then((response) => response.json())
  .then(console.log);
// json으로 변환하는데 시간이 걸리는구나 비동기로 해야겠구나!!

//respose.json() 이라는 함수는 response의 body안에 있는 json문자열을 자바스크립트에서 쓸 수 있는 객체로 변환해주는 함수임
//이름은 비록 json이라고 되어있지만, 사실 이 함수를 호출했을때의 결과는 json은 아니다 그것대신에, body에 있는 json을 parsing해서
//body에 있는 내용을 자바스크립트의 객체로 변환해주는 함수임
