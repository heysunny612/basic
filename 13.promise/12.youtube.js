'use strict';
//유트브 2.Promise
//Promise is a JavaScript Object for asynchronous operation.
//1.State (기능 수행중인지, 완료가 되었는지 실패했는지)
// State: pending -> fulfilled or rejected
//2.Producer와 Consumer의 차이점을 아는 것
//우리가 원하는 데이터를 제공하는 사람과 제공하는 데이터를 쓰는 사람의 차이점을 잘 알고있어야함

//1.Producer
// 새로운 프로미스가 만들어질때는 그 안에서 일어나는 콜백함수는 바로 실행됨
const promise = new Promise((resolve, reject) => {
  // 네트워크에서 데이터를 받아오거나
  // 파일에서 무언가 큰 데이터를 읽어오는 과정은 시간이 걸림
  // 그런것을 동기적으로 처리하게 되면, 다음라인 코드가 실행되지 않음
  // 그래서 시간이 많이 걸리는 일은 프로미스를 만들어서 비동기적으로 처리하는 것이 좋음
  console.log('doingSomething');
  // alert();
  // 프로미스를 만드는 순간, 우리가 전달한 콜백함수가 바로 실행됨!!
  // 이말인 즉슨, 만약 우리가 이 프로미스안에 네트워크 통신을 하는 코드를 작성했다면, 바로 네트워크 통신을 수행하게됨
  // 만약 네트워크 요청을 사용자가 요구했을때만 해야하는경우라면?
  // 예를 들어 사용자가 버튼 클릭했을때만 해야하는 경우라면?
  // 이렇게 하게되면 사용자가 요구하지도 않았는데 불필요한 네트워크 통신이 일어나게됨
  setTimeout(() => {
    //resolve('ellie'); // 성공적으로 무언가를 수행완료 했다면 resolve를 호출하면됨
    reject(new Error('no network'));
  }, 2000);
});

//2.Consumers: then, catch, finally
promise
  .then((value) => {
    // 여기서 전달되는 인자는 프로미스가 잘 수행이되어서 마지막으로 전달 받은 resovle 의 값임
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  }) //성공하든 실패하든 마지막에 호출됨
  .finally(console.log('finally'));

//3.Promise chaning

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber //
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

//4.오류처리를 잘하자

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000);
  });

const getEgg = (hen) =>
  new Promise((resovle, reject) => {
    setTimeout(() => reject(new Error(`${hen} => 달걀`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 후라이`));
  });

getHen() //
  .then(getEgg) // 계란을 받아올때 문제가 생긴다면
  .catch((error) => {
    return '빵';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);

//.then((hen) => getEgg(hen)) 받아오는 value를 다음 함수의 인자로 사용할 경우 생략가능

