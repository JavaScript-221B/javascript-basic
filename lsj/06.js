/*
06. 비교 연산자, 조건문(if, else)

비교 연산자

  < > <= >= == !=

  비교 연산자의 return은 항상 boolean

  일치 연산자를 쓰는 게 좋음.


조건문

  if문
  조건이 true일 때 실행

  else문 if문의 조건이 false일 때 실행

  else if도 있음.

*/

console.log(10 > 5);
console.log(10 == 5);  // 동등 연산자
console.log(10 != 5);

console.log(1 == '1'); // true
console.log(1 === '1'); // false, 일치 연산자

const age = 30;

if(age > 19){
  console.log('환영쓰');
} else if(age === 19) {
  console.log('수능 화이팅');
} else {
  console.log('안녕히 가세요.');
}