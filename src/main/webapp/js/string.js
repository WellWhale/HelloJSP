/**
 * 
 */

// 문자열 메서드(indexOf, substring, slice, split, toupperCase, toLowerCase, forEach)
// (trim, replace, includes, charAt) <- 외워두면 좋은것들, mdn pop 구글링해서 찾아보기


//1번)
let strAry = ["  Hello, Java                 "//
	, " HTML, CSS, JavaSCRIPT"//
	, "    Java Is complier     "//
	, "      Java and Javascript    "];
let filterWord = "Java";
//결과 => "Hello, ****"
//       "HTML, CSS, ****SCRIPT"
//       "**** IS COMPILER"
//       "**** AND ****SCRIPT"

strAry.forEach(function(elem){//반복문
	console.log(elem.trim().replace(filterWord, '****').toUpperCase());
	// toUpperCase가 맨 뒤로 가야 replace 내용도 Upper가 된다
	
	//console.log(elem.trim().replace(/java/ig, '****'));
	//이렇게 하면 출력 내용이 강제로 대문자로 다 바뀌는 현상이 사라진다
})




//2번)
let noAry = ["920304-1213421", "990508 2928123", "030702-4323123"]
//결과 => "920304-1213421"은 남자입니다.
//       "990508 2928123"은 여자입니다.
//       "030702-4323123"은 여자입니다.

//noAry.forEach(function(elem){
//	if(elem.slice(-7, -6) % 2 == 0) {
//		console.log(`${elem} => 여자입니다.`)
//	} else {
//		console.log(`${elem} => 남자입니다.`)
//	}
//})

noAry.forEach(function(elem){
	let gen = elem.slice(-7, -6);
	let gender = gen % 2 == 0 ? '여자' : '남자';

  console.log(`${elem}는 ${gender} 입니다.`);
});



let idx = "Hello, World".indexOf('W');// 이 문자열에서 W를 찾겠다, W는 몇번째 index값을 가지는지 알려줌
console.log(idx);// 출력, 찾는값이 없을경우 -1 반환
idx = "Hello, World".indexOf("Nice");// 이 문자열에서 Nice를 찾겠다
console.log(idx);// 출력, 찾는값이 없을경우 -1 반환
if(idx == -1) {// 찾는값이 없을경우 -1 이니까 이렇게 if문을 사용할 수 있다
	console.log("찾는 문자열이 없습니다.")
}





const names = ['홍길동', '홍길순', '김길동', '김민수'];
// 길동 이라는 이름이 총 몇명 있는지 반환하는 함수
function getKildong() {
	let cnt = 0;
	
	names.forEach(function(elem){
		if(elem.indexOf('길동') != -1) {
			cnt++;
		}
	})
	
	console.log(cnt);
}

getKildong();

// 성이 김씨인 사람을 찾겠다 하면, if(elem.indexOf('김') == 0) 하면 됨
// 이유는, indexOf가 '김'을 찾으면 0을 반환할거기 때문, 김은 첫번째 글자고 한글자라서 가능함
// indexOf가 뭘 반환하는지는 위에 써놨음





const obj = {
	name: '홍길동',// obj.name 으로 접근 가능
	age: 20,
	info: function() {// 메서드(이름 info)
		return `이름은 ${this.name} 나이는 ${this.age}`;// name이란 변수는 없음, this 필수
	}
}
console.log(obj.name);

// 원하는 기능을 프로토타입 하는거, js에서만 가능하다
Array.prototype.sum = function(num) {
	this.push(num);
}

const numbers = [1,2];
numbers.push(3);
numbers.sum(4);// 프로토타입 사용

console.log(numbers);