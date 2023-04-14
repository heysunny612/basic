//5. 똥-> 예쁘게예쁘게
//콜백지옥 체험

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //로그인하는데 2초정도 걸린다고 가정해보자
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      });
    });
  }

  getRoles(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 'ellie') {
          resolve({ name: 'ellie', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
  .loginUser(id, password) //
  .then(userStorage.getRoles)
  .then((userRole) => console.log(userRole))
  .catch(console.log);
