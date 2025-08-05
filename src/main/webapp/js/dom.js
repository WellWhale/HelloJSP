/*
  <ul id="target">
    <li>apple</li>
    <li>banana</li>
  </ul>
  
  document Object Model
*/

let ul = document.createElement('ul');// ul태그를 만들겠다, 그걸 ul에 담겠다
ul.setAttribute('id', 'target');// ul의 id를 target으로 설정하겠다

let li = document.createElement('li');// li태그를 만들겠다, 그걸 li에 담겠다
li.innerText = 'apple';// li안에 apple이란 글자를 넣겠다
let li2 = document.createElement('li');// li2태그를 만들겠다, 그걸 li2에 담겠다
li2.innerText = 'banana';// li2안에 banana란 글자를 넣겠다

ul.appendChild(li);// ul안에 li를 child(자식)으로 넣겠다
ul.appendChild(li2);// ul안에 li2를 child(자식)으로 넣겠다

console.log(ul);// 출력(확인)

document.querySelector('#show').appendChild(ul);// div(show)안에 ul을 넣겠다