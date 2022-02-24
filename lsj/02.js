/*
02. 자료형

1. 문자형 String
"Mike", 'Mike', `Mike` 세가지 방법으로 선언

\ (백슬래쉬)로 이스케이프
``(백틱)은 문자열 사이에 변수를 넣고 싶을 때 ${}와 함께 사용
${} 안에는 표현식도 사용가능


2. 숫자형 Number

소수 표현 가능, 사칙연산 가능
+, -, *, /, %(나머지)

숫자를 0으로 나누면 Infinity
문자를 숫자로 나누면 NaN


3. Boolean

true와 false
==, > 등 비교 연산자


4. null 과 undefined

선언만 하고 할당하지 않으면 undefined 출력


5. typeof 연산자
타입을 반환



*/

const name1 = "Mike";
const name2 = 'Mike';
const name3 = `Mike`;

const message = "I'm a boy.";
const message2 = 'I\'m a boy.';
const message3 = `My name is ${name1}`;
const message4 = `나는 ${30 - 3}살 입니다.`;


const age = 30;
const PI = 3.14;

let age;
console.log(age)  // undefined

console.log(typeof(null));  //"object" 객체형, 하지만 null은 객체가 아님


// 문자형도 더하기 가능
const name = "Mike";

const a = "나는 ";
const b = " 입니다.";

console.log(a + name + b);  // "나는 Mike 입니다."

// 문자형과 숫자형도 더하기 가능, 문자형 반환
const age = 30;
console.log(a + age + "살" + b)  // "나는 30살 입니다."