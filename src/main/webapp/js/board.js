/**
 * n번째 글에 대한 정보를 json 포맷으로 반환해주는 무언가 있어야함
 */

/*
// 페이지 로딩 시 바로 실행되는 위치
fetch('replyList.do?bno=' + bno)//bno 선언은 board.jsp에 했음
	.then(function(resolve) {
		return resolve.json();// fetch함수가 반환하는 결과값이 readableStream
	})
	.then(function(result) {
		console.log(result);
		result.forEach(function(elem) {
			let li = makeRow(elem);
			document.querySelector('div.content>ul').appendChild(li);
		})
	})
	.catch(function(err) {
		console.log(err);
	});
*/

/*
// 페이지 로딩 시 바로 실행되는 위치
svs.replyList(bno,//첫번째 파라미터
	function(result) {//두번째 파라미터
		console.log(result);
		result.forEach(function(elem) {
			let li = makeRow(elem);
			document.querySelector('div.content>ul').appendChild(li);
		})
	},
	function(err) {
		console.log(err);
	}
);
*/

let page = 1; // page 변경
// 페이지 로딩 시 바로 실행되는 위치
function showReplyList() {

	document.querySelectorAll('div.content>ul>li')//기존 목록을 지우고 새로 목록을 생성
		.forEach(function(elem, idx) {
			if (idx >= 2) {
				elem.remove();
			}
		});
		
	// 목록출력
	svc.replyList({ bno, page },//첫번째 파라미터
		result => {//두번째 파라미터
			result.forEach(function(elem) {
				let li = makeRow(elem);
				document.querySelector('div.content>ul').appendChild(li);
			})
		},
		err => console.log(err)
	);
}//end showReplyList
showReplyList();// 위에 기능을 function으로 만들었기때문에 한번 호출해줌



// 아래는 이벤트, 순서 상관 없음


// 댓글 등록
document.querySelector('#addReply').addEventListener('click', function(e) {
	// 글번호(bno), 내용(reply), 작성자(logId)
	let reply = document.querySelector('#reply').value;
	if (!bno || !reply || !logId) {
		alert('필수값을 입력하세요')
		return;
	}
	/*
	//     성공(then)에서 실행할 함수, 실패(catch)에서 실행할 함수
	// new Promise(function(){}, function(){})
	fetch('addReply.do?bno=' + bno + '&reply=' + reply + '&replyer=' + logId)
		.then(resolve => resolve.json())
		.then(result => {
			console.log(result);
			if (result.retCode == 'OK') {
				let r = result.retVal;
				let li = makeRow(r);
				document.querySelector('div.content>ul').appendChild(li);
			} else if (result.retCode == 'NG') {
				alert('처리중 예외발생');
			} else {
				alert('알수없는코드');
			}
		})
		.catch(err => console.error(err));
	*/
	svc.registerReply({ bno, reply, replyer: logId },// 첫번째
		result => {// 두번째
			console.log(result);
			if (result.retCode == 'OK') {
				let r = result.retVal;
				let li = makeRow(r);
				document.querySelector('div.content>ul').appendChild(li);
			} else if (result.retCode == 'NG') {
				alert('처리중 예외발생');
			} else {
				alert('알수없는코드');
			}
		},
		err => console.log(err)// 세번째
	);
});

// 페이징 링크에 클릭이벤트
document.querySelectorAll('div.footer>div.pagination>a')//footer a태그 선택
	.forEach(function(elem) {
		elem.addEventListener('click', function(e) {
			e.preventDefault();// a태그(클릭하는게 a태그니까)의 기본기능을 막겠다, 누르면 링크가 안되는거임
			page = e.target.innerText;// 누른 내용의 inner를 page로 저장

			showReplyList();//목록 그려주기

		})
	})


function makeRow(reply) {
	let li = document.createElement('li');
	['replyNo', 'reply', 'replyer'].forEach(function(elem) {
		let span = document.createElement('span');
		span.innerText = reply[elem];
		if (elem == 'reply') {
			span.setAttribute('class', 'col-sm-5');
		} else {
			span.setAttribute('class', 'col-sm-2');
		}
		li.appendChild(span);
	})// 반복
	// 삭제버튼
	let span = document.createElement('span');
	span.setAttribute('class', 'col-sm-2');
	let btn = document.createElement('button');

	btn.addEventListener('click', deleteRowFnc);// 핸들러는 () 생략 가능

	btn.innerText = '삭제';
	span.appendChild(btn);
	li.appendChild(span);

	return li;// 생성된 내용 반환
}

// 클릭 이벤트(삭제) 핸들러
function deleteRowFnc(e) {
	let rno = e.target.parentElement.parentElement.children[0].innerText;// 삭제하고싶은 글 번호
	if (!confirm(`${rno} 번 글을 삭제하겠습니까?`)) {// 삭제 안할거면
		alert('삭제 취소');
		return;
	}
	/*
		// fetch는 서버프로그램 호출임
		fetch('removeReply.do?rno=' + rno)
			.then(resolve => resolve.json())
			.then(result => {
				if (result.retCode == 'OK') {
					e.target.parentElement.parentElement.remove();
				} else if (result.retCode == 'NG') {
					alert('삭제실패');
				} else {
					alert('알 수 없는 오류')
				}
			})
	*/
	svc.removeReply(rno,
		result => {
			if (result.retCode == 'OK') {
				e.target.parentElement.parentElement.remove();
			} else if (result.retCode == 'NG') {
				alert('삭제실패');
			} else {
				alert('알 수 없는 오류')
			}
		},
		err => console.log(err)
	);
}