/*
03. 대화상자

alert   : 알려줌
prompt  : 입력 받음, 취소하면 null값, 두번째 인자로 default값 입력가능
confirm : 확인 받음, 확인 입력 시 true, 취소 입력 시 false. 사용자 입력을 다시 한번 확인할 때 유용

단점
1. 스크립트 일시 정지
2. 스타일링 불가능 => 모달로 대체 가능
*/

const name = prompt('이름을 입력하세요.');
alert("환영환영, " + name + "!");
alert(`환영합니다, ${name}님!`);

const date = prompt('예약일을 입력해주세요', '2022-02-');

const isAdult = confirm('성인입니까?');
console.log(isAdult)

