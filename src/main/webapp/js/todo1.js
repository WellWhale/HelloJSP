/**
 * 
 */

const students = [];

document.querySelector('#addList').addEventListener('click', function() {
	let name = document.querySelector('#std_name').value;
	let score = document.querySelector('#std_score').value;
	
	if(name == '') {// 써야되는 칸이 비었을때 적으라고 알려주고, 리턴(함수종료) 시킴
		alert('이름을 입력해주세요.');
		return;
	} else if(score == '') {
		alert('점수를 입력해주세요.');
		return;
	}
	
	students.push({test_name: name, test_score: score});
	
	document.querySelector('#tlist').innerHTML = '';
	
	document.querySelector('#std_name').value = '';
	document.querySelector('#std_score').value = '';
	
	showList();
});


function showList() {
	students.forEach((elem) => {
		let str = `<tr><td>${elem.test_name}</td><td>${elem.test_score}</td></tr>`;
		document.querySelector('#tlist').innerHTML += str;
	});
}