/**
* 
*/

fetch('js/MOCK_DATA.json')// Promise 객체, fetch에 문제가 없을 시 then, 문제가 있을시 catch
	.then(function(result) {
		console.log(result);// 성공 시 응답정보(body)
		return result.json();// 위 응답정보를 js객체 타입으로 뽑아라, Promise 객체임
	})
	.then(function(suresult) {// 위 리턴도 Promise 객체니까 then 사용 가능
		console.log(suresult);
		suresult.forEach(function(elem) {
			let tr = document.createElement('tr');
			['id', 'first_name', 'last_name', 'salary'].forEach(function(field) {// td를 만
				let td = document.createElement('td');// 들기위한 forEach
				td.innerText = elem[field];// 이부분 공부
				tr.appendChild(td);
			})
			let td = document.createElement('td');// td태그를 만든다
			let btn = document.createElement('button');//버튼 태그를 만든다
			btn.innerText = '삭제';// 삭제 버튼에 나타날 글
			td.appendChild(btn);// td안에 btn을 넣는다
			tr.appendChild(td);// tr안에 td를 넣는다

			document.querySelector('#show tbody').appendChild(tr);
		})
	})
	.catch(function(err) {
		console.log(err);
	})