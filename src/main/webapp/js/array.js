/**
* forEach, map, filter, reduce <- 배열에서만 사용 가능함
* document.querySelectorAll()
*/

members.forEach((elem, idx, ary) => {// 화살표 함수 사용
	if (idx % 2 == 0) {// 0으로 시작이라, 홀수 구하기
		console.log(elem);
	}

});

let sum = 0;

var evenSum = (elem, idx, ary) => {
	if (elem % 2 == 0) {
		sum += elem;
	}
	if (idx == ary.length - 1) {
		console.log(`짝수 합계는: ${sum}`);
	}
}

var oddSum = (elem, idx, ary) => {
	if (idx % 2 == 0) {
		sum += elem;
	}
	if (idx == ary.length - 1) {
		console.log(`홀수 합계는: ${sum}`);
	}
}

var totalSum = (elem, idx, ary) => {
	sum += elem;
	if (idx == ary.length - 1) {
		console.log(`전체 합계는: ${sum}`);
	}
}

[12, 34, 83, 22, 59, 77].forEach(evenSum);