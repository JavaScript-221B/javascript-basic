/*
08. 반복문(for, while, do while)

  반복문:
  동일한 작업을 여러번 반복


  for 문
    for(let i = 0; i < 10; i++){
      // 반복할 코드
    }

  while 문
    let i = 0;
    while (i < 10) {
      // 반복할 코드
      i++;
    }

  do...while 문
    let i = 0;
    do{
      // 반복할 코드
      i++;
    } while(i < 10)
  일단 코드를 한번 실행하게 되는 것이 while문과의 차이

  break : 멈추고 빠져나옴
  continue : 멈추고 다음 반복으로 진행

  명확한 횟수가 정해져있으면 for문, 그렇지 않으면 while문
*/
for(let i = 0; i < 10; i++){
  console.log(i);
}

let i = 0;
while(i<10){
  console.log(i);
  i++;
}

while(true){  // 무한 반복
  let answer = confirm('계속?');
  if(!answer){
    break;
  }
}

// 짝수만 출력
for(let i = 0; i < 10; i++){
  if(i%2){
    continue;
  }
  console.log(i);
}