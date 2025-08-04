/**
 * basic.js
 */
console.log("basic");

var name = 'Hong'; // 초기화
var name = 'Park'; // var의 장점이자 단점, 자유로우나 문제생기기 쉬움
console.log(name);

let name1 = 'Kim'; // let은 변수 선언할때 변수명을 한번만 선언 가능, 변수값은 변동 가능
const age = 20; // const는 변수명도 변수값도 수정 불가(상수: 변하지 않는 값)


const obj = new Object(); // Object 타입의 객체
obj.name = 'Hong'; // 키 와 벨류 형식으로 담음
obj.age = '20'; // set 과 비슷한듯
obj.info = function () {
	console.log('이름은 ' + obj.name +' 나이는 ' + obj.age + '세 입니다.')
}
obj.info() // info 실행

console.log('나이는 ' + obj.age); // 이 두개는 같은 기능
console.log('이름은 ' + obj['name']); // 이 두개는 같은 기능

obj.hobbies = ['독서', '수영', '라이딩']; // 배열식
obj.pets = [{name: '야옹이', age: 2}, {name: '멍멍이', age: 3}]; // 배열식(객체 담기)

console.log('첫번째 취미: ' + obj.hobbies[0]); // 위 아래는 같은기능
console.log('두번째 취미: ' + obj['hobbies'][1]); // 위 아래는 같은기능
console.log(`세번째 취미: ${obj['hobbies'][2]}`); // 위 아래는 같은기능

obj.pets[0].name = '고양이'; // 배열식(객체 담기) 새로 대입
console.log(obj.pets[1].name); // 배열식(객체 담기) 출력

console.log(this); // this와 window.document는 같다
console.dir(window.document); // 객체 안에 속성을 불러올때 . 을 쓴다

window.alert('윈도우 객체의 alert함수'); // 창 띄워주는 alert 함수