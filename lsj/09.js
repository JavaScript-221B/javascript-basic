/*
09. switch문

  case가 다양할 경우, if else 문보다 간단

  switch(평가){
    case A:
      // A일때 코드
    case B:
      // B일때 코드
    ...
  }

  break를 넣지 않으면 해당 case 이후 모든 코드 실행

  default : 어떤 case에 해당하지 않을 경우 실행
  
*/

// 사고 싶은 과일을 물어보고 가격 알려주기
let fruit = prompt('무슨 과일 사고 싶니');

switch(fruit){
  case '사과':
    console.log('100원');
    break;
  case '바나나':
    console.log('200원');
    break;
  case '키워':
    console.log('300원');
    break;
  case '멜론':
    console.log('500원');
    break;
  case '수박':
    console.log('500원');
    break;
  default :
  console.log('그런 과일 없습니다.')
}