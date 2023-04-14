function loop() {
  const array = [];
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop(); //array ['console.log(0)','console.log(1)','console.log(2)','console.log(3)','console.log(4)']
array.forEach((value) => value());
