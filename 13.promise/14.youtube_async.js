//async & await
// clear style of using promise :)

//1.async
// 함수 앞에 async라는 키워드를 붙여주면,
// new Promise를 리턴하지 않아도 자동적으로 함수 안에있는 코드블럭들이
// Promise로 변환됨
async function fetchUser() {
  //do network request in 100 secs...
  return 'ellie';
}
//const user = fetchUser();
//console.log(user);
fetchUser() //
  .then(console.log);

//2. await 기다려!!!

function delay(ms) {
  //정해진 시간이 지나면 resolve를 호출
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return '사과';
}
async function getBanana() {
  await delay(2000);
  return '바나나';
}

// function getBanana() {
//   return delay(3000).then(() => '바나나');
// }

//3.

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple}+${banana}`);
//   });
// }

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;

  return `${apple}+${banana}`;
}

pickFruits().then(console.log);

//3 useful Promise Apis
async function pickAllFruits() {
  const fruits = await Promise.all([getApple(), getBanana()]);
  return fruits.join('+');
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log());
