//접근제어자 - 켑슐화 (외부에서 수정할수 없도록 하는 느낌)
// private(#이라는 키워드를 붙이면됨), pubilc(기본), protected
class Fruit {
  #name;
  #emoji;
  #type = '과일';

  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name} : ${this.#emoji}`);
  };
}

const apple = new Fruit('사과', '사과이모지');
// apple.#name = '오렌지';
console.log(apple);
