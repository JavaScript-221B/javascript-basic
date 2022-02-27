/*
14. 배열(Array)

  순서가 있는 리스트

  let students = ['철수', '영희', ... ,'영수'];
  index는 0부터 시작
  students[0]으로 접근, 수정 가능

  배열 특징
  숫자, 객체, 함수 등도 포함 가능
  .length 배열 길이
  push() : 배열 끝에 추가
  pop() : 배열 끝 요소 제거
  shift, unshift : 배열 앞에 제거/추가

  반복문 for
  반복문 for ... of




*/

let days = ['mon', 'tue', 'wed'];
console.log(days[1]);  // tue
days[1] = '화';
console.log(days[1]);  // 화

console.log(days.length); // 3
days.push('thu');
console.log(days);  // ['mon', '화', 'wed', 'thu']

days.unshift('sun');  // ['sun', 'mon', '화', 'wed', 'thu']

for(let i=0; i< days.length; i++){
  console.log(days[i]);
}

for(let day of days){
  console.log(day);
}
