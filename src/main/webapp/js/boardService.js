/**
* 
*/

class PageVO {// js에서 class 만드는법

	// 생성자
	constructor(currPage, totalCnt) {
		this.currPage = currPage;// currPage 필드 선언
		this.totalCnt = totalCnt;
		// start페이지, end페이지 계산
		this.end = Math.ceil(currPage / 10) * 10;// 3페이지 기준, 끝페이지가 10페이지
		this.start = this.end - 9;// 끝 페이지 기준, -9는 1페이지(시작)

		let realEnd = Math.ceil(totalCnt / 5);// 3p 가 끝페이지라 치면(아래쪽)
		this.end = this.end > realEnd ? realEnd : this.end;
		// 이전페이지, 다음페이지 계산
		this.prev = this.start > 1;
		this.next = this.end < realEnd;
	}
}



const svc = {
	count: 20, // 속성(property)
	increaseCount: function() {// 메서드
		this.count++;
	},
	showCount() {// 얘도 메서드, 근데 위에 메서드랑 쓰는 방식이 좀 다름
		return this.count;
	},
	// 목록을 가지고오는 ajax 메서드를 여기다 만들거임
	replyList(param = { bno: 1, page: 1 }, successCallback, errorCallback) {
		fetch('replyList.do?bno=' + param.bno + '&page=' + param.page)
			.then(resolve => resolve.json())
			.then(successCallback)
			.catch(errorCallback)
	},
	// 삭제 ajax 메서드
	removeReply(rno, successCallback, errorCallback) {
		fetch('removeReply.do?rno=' + rno)
			.then(resolve => resolve.json())
			.then(successCallback)
			.catch(errorCallback)
	},
	// 등록 ajax 메서드
	registerReply(param = { bno, reply, replyer }, successCallback, errorCallback) {
		fetch('addReply.do?bno=' + param.bno + '&reply=' + param.reply + '&replyer=' + param.replyer)
			.then(resolve => resolve.json())
			.then(successCallback)
			.catch(errorCallback)
	},
	// bno에 대한 전체 건수를 가져오는 ajax 메서드
	replyTotalCount(bno, successCallback, errorCallback) {
		fetch('totalReply.do?bno=' + bno)
			.then(resolve => resolve.json())
			.then(successCallback)
			.catch(errorCallback)
	}
}