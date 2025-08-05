/*
ajax.js // Asynchronous Javascript And Xml
		   비동기 방식의    자바스크립트   와   XML 
*/

// 동기방식
console.log('1');//얘가 끝나야
console.log('2');//얘가 시작되고 얘가 끝나야
console.log('3');//얘가 시작됨(동기방식)


// 비동기방식, 코드를 읽는 순서는 같으나 타이머가 끝나야 실행되기 때문에 출력 순서가 다름
// 사용방식에 따라서 동기방식은 순차적으로 수행되고 얘네는 동시에 수행되기 때문에 수행이 더 빠름
setTimeout(function() {
	console.log('4');	
}, 1000)

setTimeout(function() {
	console.log('5');	
}, 2000)

setTimeout(function() {
	console.log('6');	
}, 500)

const xhtp = new XMLHttpRequest();// 대표적인 비동기방식, 요즘방식은 ajax2로