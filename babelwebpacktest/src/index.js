const arr = Array.from("HELLO");
arr.map((ch)=>console.log(ch)); // 향상된 버전: 화살표 함수를 지원하지 않는 버전도 있음
const myname="jin";
const age=25
const person = {newname:myname, age}; // 향상된 버전: 변수명이 같다면 한 번만 적어도 됨! age:age가 아니고!
const {newname} = person; // 향상된 버전: 중괄호를 쓰면 person이라는 객체에서 newname을 추출!

import hello2 from "./hello";
var str = hello2();
console.log(str);

var testNode = document.createTextNode("웹팩 연습");
document.body.appendChild(testNode);