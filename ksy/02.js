const name = "Mike"; //문자형 String
const age = 30;

const name1 = "Mike"
const name2 = 'Mike'
const name3 = `Mike`

const message = "I'm a boy.";
const messgae2 = 'I\'m a boy.';
const message3 = `My name is ${name}`;
const message4 = `나는 ${30 + 1}살 입니다.`;


const age = 30; //숫자형 Number
const PI = 3.14;

const x = 1 / 0;
console.log(x) //Infinity

const y = name / 2;
console.log(y) //NaN(Not a Number)


//Boolean
const a = true; //참
const b = false; //거짓

console.log(name == 'Mike') //true
console.log(age > 40) //false


//null과 undefined
let age;
console.log(age) //undefined

let user = null;


//typeof 연산자
const name = "Mike";

console.log(typeof 3); //"number"
console.log(typeof name); //"string"
console.log(typeof true); //"boolean"
console.log(typeof "xxx"); //"string"
console.log(typeof null); //"object"
console.log(typeof undefined); //"undefined"


const name = "Mike";
const a = "나는 ";
const b = "입니다.";

console.log(a + name + b); //"나는 Mike 입니다."

const age = 30; //number
console.log(a + age + "살" + b) //"나는 30살 입니다."