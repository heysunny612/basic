//Quiz

const prop = {
  name: 'button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ name, styles: { size, color } }) { //styles는 그 안에 프로퍼티를 구조분해할당 하기위해 사용되는것임. 변수가 아니기때문에, 구조분해할당 처럼 사용 안됨 
  //prop.styles.color 에 접근하는게 아닌 바로 color에 접근할 수 있도록
  console.log(name);
  //console.log(styles);
  console.log(size);
  console.log(color);
}

changeColor(prop);
