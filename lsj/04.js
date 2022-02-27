/*
  04. 형변환

  String() : 문자형으로 변환
  Number() : 숫자형으로 변환
  Boolean() : 불린형으로 변환

  형변환이 필요한 이유
  자료형이 서로 다른 경우 예상치 못한 결과가 나올 수 있음

  prompt 입력 => 문자형
              => "90" + "80" = "9080"
              => "9080" / 2 = 4540

  "6" / "2" = 3, 자동 형변환, 편리해보이지만 의도치 않은 에러 발생
  => 명시적 형변환의 필요성

  Boolean : 숫자 0, 빈 문자열, null, undefined, NaN은 false, 이외는 모두 true

  주의사항

  Number(null)  => 0
  Number(undefined)  => NaN

  Boolean(0)  => false
  Boolean('0') => true

  Boolean('') => false
  Boolean(' ') => true

*/

const mathScore = prompt('수학 몇 점?');
const engScore = prompt('영어 몇 점?');

const result = (mathScore + engScore) / 2;

console.log(result);

console.log(
  String(3),
  String(true),
  String(false),
  String(null),
  String(undefined),
)

console.log(
  Number("1234"),      // 1234
  Number("1234asdf"),  // NaN
  Number("true"),      // 1
  Number("false"),     // 0
)

console.log(       // true
  Boolean(1),
  Boolean("123"),
  Boolean(123),
)

console.log(        // false
  Boolean(0),
  Boolean(''),
  Boolean(null),
  Boolean(undefined),
  Boolean(NaN),
)

