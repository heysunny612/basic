// Bubbling up, Propagating 버블버블 업  전파된다!!

function a() {
  throw new Error('error!');
}

function b() {
  a();
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Catched!');
} finally {
}
console.log('done');
