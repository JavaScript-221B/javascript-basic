/*
12. 객체(Object)

  const superman = {
    name: 'clark',
    age: 33,
  };

  키와 값으로 구성

  접근
  superman.name  // 'clark'
  superman['age']  // 33

  추가
  superman.gender = 'male';
  superman['hairColor'] = 'black';

  삭제
  delete superman.hairColor;

  단축 프로퍼티
  const name = 'clark';
  const age = 33;

  const superman = {
    name,
    age,
    gender: 'male',
  }
  
  프로퍼티 존재 여부 확인

  superman.birthDay  // undefined
  'birthDay' in superman  // false
  'age' in superman  // true

  for ... in 반복문으로 순회
  for(let key in superman){
    console.log(key);
    console.log(superman[key]);
  }

*/

const superman = {
  name: 'clark',
  age: 30,
}

console.log(superman.name)      // clark
console.log(superman['age'])    // 30
console.log(superman)           // {name: 'clark', age: 30}

superman.hairColor = 'black';
superman['hobby'] = 'football';

///////////////////////////////////////////////////////////////

function makeObject(name, age){
  return {
    name,
    age,
    hobby: 'football',
  }
}

const Mike = makeObject('Mike', 30);
console.log(Mike);                    // {name: 'Mike', age: 30, hobby: 'football'}

console.log('age' in Mike)            // true
console.log('birthday' in Mike)       // false

//////////////////////////////////////////////////////

function isAdult(user){
  if(user.age < 20){
    return false;
  }
  return true;
}

const Mike = {
  name: 'Mike',
  age: 30,
}

const Jane = {
  name: 'Jane',
}

console.log(isAdult(Mike))  // true
console.log(isAdult(Jane))  // true

////////////////////////////////////////

const Mike = {
  name: 'Mike',
  age: 30,
}

for(x in Mike){
  console.log(x);
  console.log(Mike[x])  
}