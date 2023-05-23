import MyBoard from "components2/BoardListComponent";
import { ClassLifeCycle } from "components2/ClassComponent1";
import FunctionComponentLifeCycle from "components2/FunctionComponentLifeCycle";
import { MyTimer } from "components2/MyTimer";
import React, { useState } from "react";

function App5(props) {
  const [showYN, setShowYN] = useState(true);
  return (
    <div>
      <MyBoard></MyBoard>

      <hr />
      <h1>Class 컴포넌트 라이프사이클 공부하자</h1>
      <ClassLifeCycle></ClassLifeCycle>

      <hr />
      <FunctionComponentLifeCycle></FunctionComponentLifeCycle>

      <hr />
      <h1>cleanup 연습해봅니다~</h1>

      {showYN && <MyTimer />}
      <button
        onClick={() => {
          setShowYN(!showYN);
        }}
      >
        타이머 시작/중지
      </button>
    </div>
  );
}

export default App5;
