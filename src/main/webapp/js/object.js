/**
 * 
 */
//console.log(members);// 만들어놨던 JSON을 이용한 15줄의 배열 출력
//console.log(members[0]);// 그 중 첫번째방 출력

for (let member of members) {//members의 배열을 member로 받아서 하나씩 처리

	//let member = members[0];// {id, fn, ln... 등등 속성이 존재}

	//let id = member.id;// member의 id값을 담음
	//let first_name = member.first_name;// member의 first_name값을 담음

	let { id, first_name, last_name, email } = member;//위 두줄처럼 해도 되지만 이렇게 펼쳐서 처리도 가능
	console.log(`${id}, ${first_name}, ${last_name}, ${email}`);// 확인

	let tr = document.createElement('tr');// tr태그를 만든다

	for (let prop in member) {// member가 가진 속성들을 하나하나 꺼내서 보여준다(for in)
		console.log(`속성: ${prop}, 값: ${member[prop]}`);
	
		if (prop == 'gender') {// 각 tr의 성별에 따라서 backgroundcoler를 입히는 부분
			if (member[prop] == 'Female') {
				tr.style.backgroundColor = 'pink';
			} else if (member[prop] == 'Male') {
				tr.style.backgroundColor = 'skyblue';
			}
		}

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

	document.querySelector('#show tbody').appendChild(tr);// dov(show)안에 있는 tbody에 tr을 넣겠다
}//end forof



//let sum = 0;// salary 내용들만 가지고 와서 계산하는 코드
//document.querySelectorAll('#show tbody tr td:nth-of-type(6)')//배열은 아닌데 배열처럼 처리 가능
//                          .forEach(elem => sum += parseInt(elem.innerText));
//console.log(`합계는 ${sum}`);


let sum = 0;// salary 내용들만 가지고 와서 계산하는 코드2
document.querySelectorAll('#show tbody tr')//배열은 아닌데 배열처럼 처리 가능
                          .forEach(elem => {let salary = elem.children[5].innerText;
							sum += parseInt(salary);
						  });
console.log(`합계는 ${sum}`);