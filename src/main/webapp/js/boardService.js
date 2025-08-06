/**
* 
*/

const svc = {
	count: 20, // 속성(property)
	increaseCount: function() {// 메서드
		this.count++;
	},
	showCount() {// 얘도 메서드, 근데 위에 메서드랑 쓰는 방식이 좀 다름
		return this.count;
	},
	// 목록을 가지고오는 ajax 메서드를 여기다 만들거임
	replyList(param = {bno:1, page:1}, successCallback, errorCallback) {
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
	}
}