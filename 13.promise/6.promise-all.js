function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('바나나');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('사과');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

//바나나와 사과를 같이 가지고 와서 배열에다가 바나나랑 사과를 간직하고싶음

//이렇게 하면 4초가걸림
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => {
        return [banana, apple];
      })
  )
  .then(console.log);

//Promise.all 병렬적으로 한번에 모든 Promise들을 실행! 총 3초 후에 실행
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log('all', fruits));

//Promise.race 주어진 Promise중에 제일 빨리 수행된것이 이김!
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log('race', fruit));

//에러가 있는 프로미스를 같이 한꺼번에 불러온다면?
Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log);

//어떤것에서 에러가 났는지 확인 원한다면
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-settle-error', fruits))
  .catch(console.log);
