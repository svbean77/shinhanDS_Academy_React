import FunctionComponent2 from "components2/FunctionComponent2";
import MemberComponent from "components2/MemberComponent";
import MyCounter from "components2/MyCounter";
import MyCounterFunction from "components2/MyCounterFunction";
import MyStyleChangeComp from "components2/MyStyleChangeComp";
import React from "react";

function App4(props) {
  return (
    <div>
      <h1>Class</h1>
      <MyCounter></MyCounter>
      <hr />

      <h1>Function</h1>
      <MyCounterFunction></MyCounterFunction>

      <hr />
      <h1>버튼 누르면 색이 변경된다!!!!</h1>
      <MyStyleChangeComp></MyStyleChangeComp>

      <hr />
      <h1>Member 정보를 입력해보자</h1>
      <MemberComponent></MemberComponent>

      <hr />
      <FunctionComponent2></FunctionComponent2>
    </div>
  );
}

export default App4;
