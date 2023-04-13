//boolean
const isTrue = new Boolean(true); //객체를 사용하면 메모리 소비가많아 되도록 사용 x
console.log(isTrue);

console.log(isTrue.valueOf());

/**Falsy !! if, 조건문, while 문등에서 굉장히 중요중요중요
 * 0 -0 '' null undefined NaN
 * trusy
 * 1 -1 '문자열' [] {}
 */
