/*
07. 논리 연산자(AND, OR, NOT)

  || ( OR )
  && ( AND )
  !  ( NOT )

  OR는 첫번째 true를 발견 즉시 평가 멈춤
  AND는 첫번째 false를 발견 즉시 평가 멈춤

  코드 작성 시 평가 순서를 잘 작성해 빠른 판단이 가능하도록 최적화


  우선순위
  &&   >   ||

*/

const name = "Mike";
const age = 30;

if(name === 'Tom' || age > 19){
  console.log('통과');
}

if(name === 'Mike' && age > 19){
  console.log('통과');
} else {
  console.log('돌아가');
}

const age = prompt('나이가...?');
const isAdult = age > 19;

if(!isAdult){
  console.log('돌아가...');
}

const gender = 'F';
const name = 'Jane';
const isAdult = true;

if(gender === 'M' && (name === 'Mike' || isAdult)){   // 돌아가
// if(gender === 'M' && name === 'Mike' || isAdult){    // 통과
  console.log('통과');
} else {
  console.log('돌아가')
}