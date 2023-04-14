//유트브 1. CallBack

'use strict';

console.log('1');
console.log('2');
console.log('3');

//Synchronous callback

function printImmediately(print) {
  print();
}

printImmediately(() => {
  console.log('Hello');
});

//Asynchronous callback
function printWidthDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWidthDelay(() => {
  console.log('async callback');
}, 2000);

//콜백지옥 체험

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      //로그인하는데 2초정도 걸린다고 가정해보자
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    });
  }
  getRoles(id, onSuccess, onError) {
    setTimeout(() => {
      if (id === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
  id,
  password,
  (userId) => {
    userStorage.getRoles(
      userId,
      (userInfo) => {
        console.log(`Hello ${userInfo.name}, you have a ${userInfo.role} role`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
