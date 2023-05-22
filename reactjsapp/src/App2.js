import React from "react";
import { Header, HeaderF1 } from "./components1/MyHeader";
import {
  MyNavigation,
  myscore,
  MyNavigation2,
} from "./components1/MyNavigation";
import MySection, { MySection2 } from "./components1/MySection";

function App2(props) {
  console.log("myscore: " + myscore);
  var subject = "ReactJS 배우기!";
  var subject2 = ""; // null, false, undefined를 랜더링하면 아무것도 나타나지 않음!

  console.log(true && "hello"); // hello
  console.log(false && "hello"); // false
  console.log("hello" && "bye"); // bye
  console.log(null && "hello"); // null
  console.log(undefined && "hello"); // undefined
  console.log("" && "hello"); // ''
  console.log(0 && "hello"); // 0
  console.log(1 && "hello"); // hello
  const score = 777;

  return (
    // sbj $$ "문자"
    // 1. sbj이 있음 -> &&는 둘 다 참이어야 하기 때문에 뒤의 결과 참이면 뒤의 결과가 출력됨
    // 2. sbj이 없음 -> 뒤의 결과를 봐도 어차피 false이기 때문에 결과 X

    <div>
      {/* 3항 연산자 */}
      <p>
        {score >= 100 ? (
          <strong>{score}Good~~~</strong>
        ) : (
          <i>{score} 노력!!!</i>
        )}
      </p>
      {/* 조건부 렌더링 */}
      <p>{score >= 100 && <strong>{score}Good~~~</strong>}</p>
      <p>내 점수는 {myscore}점!</p>
      <p>{subject ? subject : null}</p>
      <p>{subject2 ? subject : null}</p>
      <p>{subject && "뭐가 나올까~"}</p>
      <p>{subject2 && "뭐가 나올까~"}</p>
      <Header />
      <HeaderF1 />
      <MyNavigation />
      <MyNavigation2 />
      <MySection />
      <MySection2 />
    </div>
  );
}

export default App2;

/*
방법 1. export function aa() {} -> 사용하는 쪽에서 import { 누구 사용할지 } from 경로 설정 필요
방법 2. export default function aa() {}
방법 3. function aa() {} export { aa } -> 사용하는 쪽에서 import { 누구 사용할지 } from 경로 설정 필요
방법 4. function aa() {} export default aa
*/
