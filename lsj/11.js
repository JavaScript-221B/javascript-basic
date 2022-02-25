/*
11. 함수 표현식, 화살표 함수(arrow function)

  함수 표현식
  let sayHello = function(){
    console.log('Hello');
  }

  함수 선언문: 어디서든 호출 가능, 호이스팅
  함수 표현식 : 코드에 도달하면 생성

  화살표 함수(arrow function)
  let add = (num1, num2) => num1 + num2;

  
*/

// 함수 표현식
showError();  // ReferenceError
let showError = function(){
  console.log('error')
}


// 함수 선언문
showError();  // 'error'
function showError(){
  console.log('error')
}

// 화살표 함수
let showError = () => {
  console.log('error');
}

const sayHello = (name) => {
  const msg = `Hello, ${name}`;
  console.log(msg)
}

const add = (num1, num2) => num1 + num2;