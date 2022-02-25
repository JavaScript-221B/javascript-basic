/*
10. 함수(function)의 기초

  반복되는 기능들을 함수로 정의하고 재사용
  유지 보수 쉬움.

  function sayHello(name){
    console.log(`Hello, ${name}`);
  }

  * 전역 변수 (global variables)와 지역 변수 (local variables)
    - 지역 변수는 외부에서 접근 불가
    - 함수 내부에서 전역 변수와 같은 이름의 지역 변수를 선언할 수 있고, 영향을 주지 않음
    - 지역 변수를 먼저 참조하게 됨.

  * 매개변수 입력을 받지 않았을 때 사용할 default 값을 줄 수 있음.

  * return으로 값 반환
    - return문이 없는 함수 또는 return; 인 함수는 undefined 반환

  함수 정의 유의사항
  * 한 번에 한 작업에 집중해서 선언
  * 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍

*/

function showError(){
  alert('에러 발생. 다시 시도 부탁')
}

showError();

function sayHello(name){
  let msg = 'Hello'
  if (name){
    msg += `, ${name}`;
  }
  console.log(msg);
}

sayHello('Mike');
sayHello('Tom');
sayHello('Jane');
sayHello();  // 'Hello'

//////////////////////////////////////////////

let msg = 'welcome';
console.log(msg);     // 'welcome'

function sayHello(name){
  let msg = 'Hello';
  console.log(msg + ' ' + name);  // 'Hello Mike'
}

sayHello('Mike');
console.log(msg)  // 'welcome'

//////////////////////////////////////////

function sayHello(name){
  let newName = name || 'friend';
  let msg = `Hello, ${newName}`;
  console.log(msg);
}

sayHello();  // 'Hello, friend';
sayHello('Jane');  // 'Hello, Jane'

//////////////////////////////////////////

function sayHello(name = 'friend'){
  let msg = `Hello, ${name}`;
  console.log(msg);
}

sayHello();  // 'Hello, friend';
sayHello('Jane');  // 'Hello, Jane'

////////////////////////////////////////

function add(num1, num2){
  return num1 + num2;
}

const result = add(1, 2);
console.log(result)  // 3;