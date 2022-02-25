/*
13. 객체(Object) - method, this

  method : 객체 프로퍼티로 할당된 함수
  const superman = {
    name: 'clark',
    age: 33,
    fly: function() {
      console.log('난다')
    }
  }

  superman.fly()  // 난다

  this 키워드
  메서드에서 객체에 접근할 땐 this 키워드 사용

  화살표 함수는 일반 함수와 달리 자신만의 this를 가지지않음.
  화살표 함수 내부에서 this를 사용하면, this는 외부에서 값을 가져옴. 전역 객체를 의미

  js에서 this는 복잡.


*/

const user = {
  name: 'Mike',
  sayHello: function() {
    console.log(`Hello, I'm ${this.name}`)
  }
}

//////////////////////////////////////////////

let boy = {
  name: 'Mike',
  showName: function() {
    console.log(boy.name);
  }
}
boy.showName();  // 'Mike'

let man = boy;
man.name = "Tom";
console.log(boy.name)  // 'Tom'
man.showName();  // 'Tom'

boy = null;
man.showName();   // TypeError

///////////////////////////////////////////

let boy = {
  name: 'Mike',
  showName: function() {
    console.log(this.name);
  }
}

let man = boy;
boy = null;
man.showName();  // 'Mike'

///////////////////////////////////////////

let boy = {
  name: 'Mike',
  sayThis: function() {
    console.log(this);
  }
}

boy.sayThis();  // {name: 'Mike', sayThis: ƒ}

////////////////////////////////////////////

let boy = {
  name: 'Mike',
  sayThis: () => {
    console.log(this);
  }
}

boy.sayThis();  // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

