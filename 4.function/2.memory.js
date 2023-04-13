function add(a, b) {
  console.log(a);
  console.log(b);
  return a + b;
}
const sum = add;

console.log(sum(1)); //하나만 전달하거나, 인자값을 전달하지 않으면 undefined+undefind = NaN;
console.log(add(1, 2));
