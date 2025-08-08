let url = `https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=xxHWvsGta2v65JagvhT3Eqk3GLU%2FWOvrx7Dc02ASJjWxCYVb8mr8RvW6AL3MfE65aYgXLBBhF4zkder%2B1MWVRA%3D%3D`;



// 선택창 열면 기본옵션을 숨기는 기능 시작
const searchs = document.getElementById('search');

searchs.addEventListener('mousedown', function() {
	// 드롭다운 열리기 직전에 첫 번째 옵션 숨김
	searchs.options[0].style.display = 'none';
});

searchs.addEventListener('blur', function() {
	// 포커스가 빠져나가면 다시 보이게
	searchs.options[0].style.display = 'block';
});
//선택창 열면 기본옵션을 숨기는 기능 끝



// 검색 목록생성 시작
fetch(url)
	.then(resolve => resolve.json())
	.then(result => {
		const search = document.querySelector('#search');
		result.data.reduce((acc, elem) => {// 이 코드를 활용하면 중복값을 제거할 수 있다
			if (acc.indexOf(elem.sido) == -1) {
				acc.push(elem.sido);// ex) 서울특별시가 배열로 처음 담길거임, 그다음은 제주.. 그다음은 뭐...
			}
			return acc; // 다음바퀴가 돌기위해 acc를 리턴, 다음순번의 acc값으로 활용됨
		}, [])
			.forEach(elem => {
				// <option value="서울특별시">서울특별시</option> 이런거 만들어서 붙혀줄 예정
				let opt = document.createElement('option');
				opt.value = elem;
				opt.innerHTML = elem;
				search.appendChild(opt);
			})
	})
	.catch(err => console.error(err));
// 검색 목록 생성 끝



// 체인지 이벤트 관련 코드 시작
const search = document.getElementById('search');
const list = document.getElementById('list');

search.addEventListener('change', function(e) {
	const sido = e.target.value;                   // 선택한 값
	document.querySelector('#list').innerHTML = '';// 목록 비우기
	searchCenterList(sido);                        // 새로 불러오기 (이미 작성한 함수 재사용)
});
// 체인지 이벤트 관련 코드 끝



searchCenterList();// 초기화면

function searchCenterList(sido) {

	fetch(url)
		.then(resolve => resolve.json())
		.then(result => {
			// console.log(result.data[0]);
			result.data.forEach(function(elem) {
				// console.log(elem);// 확인용
				if (!sido || elem.sido === sido) {
					let tr = document.createElement('tr');
					tr.addEventListener('click', function (e) {
						window.open('daumapi.jsp?lat=' + elem.lat + '&lng=' + elem.lng);
					});
					['id', 'centerName', 'phoneNumber'].forEach(function(prop) {
						let td = document.createElement('td');
						td.innerText = elem[prop];
						tr.appendChild(td);
					})
					document.getElementById('list').appendChild(tr);
				}
			})
		})
		.catch(err => console.error(err));
}