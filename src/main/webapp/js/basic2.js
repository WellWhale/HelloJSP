/**
 * 
 */
//const fruits = new Array(); 아래와 같다
//const fruits = []; 위 와 같다
const fruits = ['apple', 'banana', 'cherry'];
fruits[3] = 'orange'// 배열 내용 변경(JS에선 가능)

fruits.push('melon');// 배열에 추가(마지막에)
fruits.unshift('mango');// 배열에 추가(첫번째에)
fruits.pop();// 배열 삭제(마지막꺼)
fruits.shift();// 배열 삭제(첫번째꺼)

for (let fruit of fruits) {// for of 문
	console.log(fruit);// 순서대로 과일 이름이 나옴
}

// 객체를 담는 배열
const members = [{id:'user01', name:'Hong', point:100}];// 초기화
members.push({id:'user02', name:'Park', point:120});// 배열에 추가(마지막에)
members.push({id:'user03', name:'Kim', point:90});// 배열에 추가(마지막에)

for(let i = 0; i < members.length; i++) {// for of 써도 되는데 그냥 해봄
	if (members[i].point >= 100)
	console.log(`아이디: ${members[i].id} 이름: ${members[i].name} 포인트: ${members[i].point}`);
}



//members.forEach(function (a,b,c){
//	console.log(a,b,c);
//}); 아래와 같다

// 반복문 for Each 함수(배열에만 사용 가능하다)
// elem(a)는 각 배열 객체에 들어있는 값, idx(b)는 몇번째 방인지, ary(c)는 원본배열 자체
// forEach <- 배열 객체가 가진 반복 메서드(배열의 각 요소마다 한번씩 주어진 콜백 함수를 실행함)
//members.forEach(function (elem,idx,ary){// function 이 들어간다
//	if(elem.point >= 100)
//	console.log(`아이디: ${elem.id} 이름: ${elem.name} 포인트: ${elem.point}`);
//});



// 화면에 배열의 갯수만큼 회원정보를 출력해주는 함수
function showList() {
	members.forEach(function (elem,idx,ary){
		let str = `<li>아이디: ${elem.id}, 이름: ${elem.name}, 포인트: ${elem.point}</li>`;
		document.querySelector('#list').innerHTML += str;// js.jsp ul 안쪽에 str을 넣겠다
	});
}

//function showList() { 위와 같다
//	members.forEach((elem,idx,ary) => {
//		let str = `<li>아이디: ${elem.id}, 이름: ${elem.name}, 포인트: ${elem.point}</li>`;
//		document.querySelector('#list').innerHTML += str;// js.jsp ul 안쪽에 str을 넣겠다
//	});
//}

// 위 함수 호출
showList();// 위에 넣었던 user1~3 의 정보를 미리 출력



// js.jsp 에서 아이디가 addBtn인 애를 데려와서 이벤트 걸어줌(클릭 이벤트)
document.querySelector('#addBtn').addEventListener('click', function() {// 클릭하면 함수실행
	let id = document.querySelector('#mid').value;// js.jsp 에서 아이디가 mname인 애의
	let name = document.querySelector('#mname').value;// value(input이라)를 가져오겠다
	let point = document.querySelector('#point').value;// input에 쓴 내용을 가져온다는 의미
	
	if(id == '') {// 써야되는 칸이 비었을때 적으라고 알려주고, 리턴(함수종료) 시킴
		alert('ID를 입력해주세요.');
		return;
	} else if(name == '') {
		alert('Name을 입력해주세요.');
		return;
	} else if(point == '') {
		alert('Point를 입력해주세요.');
		return;
	}
	
	document.querySelector('#list').innerHTML = '';// 값을 초기화
	
	members.push({id: id, name: name, point: point});// 한번에 하나의 추가만 이루어 지니까 반복문 아니어도 된다

	showList();// 추가된 정보를 넣어서 출력

	document.querySelector('#mid').value = '';// input상자 내용 초기화
	document.querySelector('#mname').value = '';// input상자 내용 초기화
	document.querySelector('#point').value = '';// input상자 내용 초기화
})