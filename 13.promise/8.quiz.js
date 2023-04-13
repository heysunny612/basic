function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 계란`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 후라이`);
}

function getChicken() {
  return Promise.resolve(`사료 => 치킨`);
}

async function makeFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = '닭';
  }
  const egg = await fetchEgg(chicken);
  const data = await fryEgg(egg);
  return console.log(data);
}

// function makeFriedEgg() {
//   return getChicken() //
// .catch(() => '닭')
// .then(fetchEgg)
// .then(fryEgg)
// .then(console.log);
// }


makeFriedEgg() //
  .then(console.log);
