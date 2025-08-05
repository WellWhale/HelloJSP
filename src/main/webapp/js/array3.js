/*
* reduce도 반복문
*/

let numAry = [10, 15, 20, 25, 30];// [10, 15, 20, 25, 30].reduce 가능
let result = numAry.reduce((acc, elem, idx, ary) => {// acc -> 누적값( 한번 전 elem값이 담김 )
	console.log(`${acc}, ${elem}`);
	return acc + elem;// 왜 값이 100인지 아래 설명
}, 0);// 초기값은 acc에 사용되는 애임
console.log(result);

// 얘도 반복문이기 때문에 끝방까지 감, 첫번째 순번에서 "초기0 elem10= 10"
// 두번째 순번에서 "초기10 elem15 = 25"
// 세번째 순번에서 "초기25 elem20 = 45" 이대로 쭉 가면 100




//let numAry2 = [10, 15, 34, 77, 20, 25, 30];// [10, 15, 20, 25, 30].reduce 가능
//let result2 = numAry2.reduce((acc, elem, idx, ary) => {// acc -> 누적값( 한번 전 elem값이 담김 )
//	console.log(`${acc}, ${elem}`);
//	return acc > elem ? acc : elem;// 제일 큰 수를 걸러서 리턴
//}, 0);// 초기값은 acc에 사용되는 애임
//console.log(result2);



// score가 80점 이상인 사람만 새로운 배열에 담기
let students2 = [
	{ name: '홍길동', score: 80 },
	{ name: '김민규', score: 85 },
	{ name: '박흥부', score: 88 },
	{ name: '김길동', score: 76 }
]

/*
let result3 = students2.reduce(function(acc, elem) {
	if (elem.score >= 80) {
		acc.push(elem.name)
	}
	return acc;
}, []);
console.log(result3);
*/



/*
// 최고 점수자 이름과 점수 출력되게 하기
let result3 = students2.reduce(function(acc, elem) {
	if (acc.score < elem.score) {
		acc = elem;
	}
	return acc;
}, students2[0]);
console.log(`최고 점수자는 ${result3.name} 입니다, ${result3.score}점 입니다`);
*/


let result3 = students2.reduce(function(acc, elem) {
	let tr = document.createElement('tr');
	for (let prop in elem) {
		let td = document.createElement('td');
		td.innerText = elem[prop];
		tr.appendChild(td);
	}
	acc.appendChild(tr);
	
	return acc;
}, document.querySelector('#item tbody'));


/*필터필터필터
let newAry2 = [];
students2.filter(function(elem) {
	elem.score >= 80;
}).forEach(function(elem) {
	newAry2.push(elem);
})

console.log(newAry2);
*/



let numAry2 = [10, 15, 34, 77, 20, 25, 30];// [10, 15, 20, 25, 30].reduce 가능
let result2 = numAry2.reduce((acc, elem, idx, ary) => {// acc -> 누적값( 한번 전 elem값이 담김 )
	// acc 는 배열[]
	if (elem % 2 == 0) {
		acc.push(elem);
	}
	return acc;// acc는 리턴이 꼭 필요함
}, []);// 초기값은 acc에 사용되는 애임
console.log(result2);