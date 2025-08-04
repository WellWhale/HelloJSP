/**
 * mockaroo <- 구글링, JSON포멧 // 배열값을 생성할때 우용함
 */

const str = `[{"id":1,"first_name":"Ally","last_name":"Elvin","email":"aelvin0@ovh.net","gender":"Female","salary":8329},
{"id":2,"first_name":"Austen","last_name":"Penhaligon","email":"apenhaligon1@istockphoto.com","gender":"Male","salary":5747},
{"id":3,"first_name":"Sidnee","last_name":"McLellan","email":"smclellan2@sciencedaily.com","gender":"Male","salary":6906},
{"id":4,"first_name":"Dominga","last_name":"Berrycloth","email":"dberrycloth3@mysql.com","gender":"Female","salary":9630},
{"id":5,"first_name":"Terrence","last_name":"Gulley","email":"tgulley4@theatlantic.com","gender":"Male","salary":6905},
{"id":6,"first_name":"Sherman","last_name":"Quiddington","email":"squiddington5@histats.com","gender":"Male","salary":8260},
{"id":7,"first_name":"Katusha","last_name":"Watterson","email":"kwatterson6@nytimes.com","gender":"Female","salary":7271},
{"id":8,"first_name":"Ellissa","last_name":"Smithers","email":"esmithers7@liveinternet.ru","gender":"Female","salary":6010},
{"id":9,"first_name":"Nert","last_name":"Seatter","email":"nseatter8@miitbeian.gov.cn","gender":"Female","salary":7483},
{"id":10,"first_name":"Alisha","last_name":"Capeling","email":"acapeling9@technorati.com","gender":"Female","salary":6143},
{"id":11,"first_name":"Corliss","last_name":"O'Clery","email":"coclerya@youtu.be","gender":"Female","salary":7670},
{"id":12,"first_name":"Cally","last_name":"Sainsbury-Brown","email":"csainsburybrownb@nba.com","gender":"Non-binary","salary":7252},
{"id":13,"first_name":"Elbertina","last_name":"Westoff","email":"ewestoffc@sbwire.com","gender":"Female","salary":9221},
{"id":14,"first_name":"Zenia","last_name":"Drinkhall","email":"zdrinkhalld@toplist.cz","gender":"Female","salary":9048},
{"id":15,"first_name":"Leda","last_name":"Le Guin","email":"lleguine@slate.com","gender":"Female","salary":7482}]`;
// json문자열(객체)


let members = JSON.parse(str);// json문자열(객체)을 js의 객체로 변경시킬 수 있는 방법
// JSON.parse() => 객체
// JSON 규칙을 어긋나면 파싱이 안됨

console.log(str);
console.log(members);

console.log(members[0].id);
console.log(members[1].last_name);




let students = [{name:'Hong',age:20}, {name:'Choi',age:21}];
// JS객체를 JSON.stringify() 시키면 JSON문자열이 된다
let json = JSON.stringify(students);
console.log(json);// 즉 배열을 맨 위 문자열로 만들어버림(JSON 문자열)




// 반복문(forEach)를 사용하여 성별이 Female이고 급여가 6,000이상인 사람을 출력
members.forEach(function(elem){
	if(elem.gender == 'Female' && elem.salary >= 6000) {
		console.log(`${elem.first_name} ${elem.last_name}`);
	}
});