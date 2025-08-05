/**
* filter 배열 메서드
* 요소의 값이 true 일때 그 요소를 새로운 배열에 생성
*/

function makeRow(member) {// tr을 만들고 tr하위에 td 7개를 만들어주는 기능 (tr>td*7)

	let tr = document.createElement('tr');// tr태그를 만든다

	for (let prop in member) {// member가 가진 속성들을 하나하나 꺼내서 보여준다(for in)
		let td = document.createElement('td');// td태그를 만든다
		td.innerText = member[prop];// td의 내용은 member의 속성값이다
		tr.appendChild(td);// tr안에 td를 넣는다
	}//end forin
	let btn = document.createElement('button');//버튼 태그를 만든다
	let td = document.createElement('td');// td태그를 만든다

	btn.addEventListener('click', (e) => {// 버튼을 클릭하면 일어나는 이벤트, 화살표 함수로 썼음
		// 뭐든지 클릭하면 그 대상이 타겟이 된다
		let parent = e.target.parentElement.parentElement;
		let fn = parent.children[1].innerText;// 두번째 속성의 내용을 기억
		let ln = parent.children[2].innerText;// 세번째 속성의 내용을 기억

		if (confirm(`${fn} ${ln}을 삭제하시겠습니까?`)) {// 기억한 이름을 토대로 삭제여부
			e.target.parentElement.parentElement.remove();// 버튼의 상위요소 상위요소를 지우면 tr 삭제			
		}

	})

	btn.innerText = '삭제';// 삭제 버튼에 나타날 글
	td.appendChild(btn);// td안에 btn을 넣는다
	tr.appendChild(td);// tr안에 td를 넣는다

	return tr;// tr을 반환한다
}//end makeRow



// 급여가 7000 이상인 사람들만 모아서 목록을 새로 만든다 (filter 사용)
members//
	.filter(elem => // 하나뿐이라 괄호 생략 가능
		elem.salary >= 7000// 엄청 짧게 쓴거임
	).filter(elem => elem.gender == 'Female')// 성별 구분 필터도 추가
	.map(elem => {
		let { id, first_name, last_name, salary } = elem;// map -> 여러 속성중에 이 속성만 볼거다
		let obj = { id, first_name, last_name, salary };// 이런걸 mapping 이라고 함
		return obj;// id:id, salary:salary 는 id, salary로 써도 됨
	})
	.forEach(elem => // 위 자체가 새로운 배열이기 때문에 forEach 가능
		document.querySelector('#show tbody').appendChild(makeRow(elem))//만들어진 tr을 tbody에 넣겠다
	)







let result = [10, 20, 30, 40, 50].filter((elem, idx, ary) => {
	if (elem >= 30) {
		return true;// true 인 배열의 값을 result에 담는다, false는 안담음, 새로운 배열을 만들때 유용
	}
});

console.log(result);