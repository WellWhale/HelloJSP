/**
 * 
 */

//function sum(num1, num2){// 함수 선언식
//	let result = num1 + num2;
//	return result;
//}

let sum = (num1, num2) => {// 위와 같다
	return num1 + num2;
}

//let sum = (num1, num2) => num1 + num2; 위와 같다, 실행되는게 한 줄일때만 가능

console.log(sum(10, 12));

/**/
/**/
/**/
/**/

//let showInfo = function(result) {// 함수 표현식
//	console.log(result);
//}

let showInfo = (result) => {// 위와 같다
	console.log(result);
}

//let showInfo = (result) => console.log(result); 위와 같다, 실행되는게 한 줄일때만 가능

showInfo('Hello World');



