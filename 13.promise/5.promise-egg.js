function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 계란`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 후라이`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음'));
  //return Promise.resolve(`사료 => 치킨`);
}

getChicken() //
  .catch(() => '닭')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);

