import React, { useEffect, useState } from "react";

function FunctionComponentLifeCycle(props) {
  const [fruit, setFruit] = useState("");
  const [board, setBoard] = useState("");

  console.log("************* 아무데나 쓰면 랜더링 될 때마다 실행 ************");

  useEffect(() => {
    console.log("function: 렌더링될 때마다 실행되는 함수!");
  });
  useEffect(() => {
    console.log("function: 의존 배열이 비어있다 -> *최초 1회*만 실행!");
  }, []);
  useEffect(() => {
    console.log(
      "function: 최초 mount 시 실행 + fruit가 변경될 때마다 실행되는 함수!"
    );
    return () => {
      console.log(
        "지워질 때(변경 시 새로 만들어 넣잖아!) 어떤 작업을 수행할 것인지 작성~! ex) clear"
      );
    };
  }, [fruit]);
  useEffect(() => {
    console.log("function: 최초 mount, fruit 변경, board 변경 시 실행");
  }, [fruit, board]);
  const handleChange = (e) => {
    setFruit(e.target.value);
  };
  const handleChange2 = (e) => {
    setBoard(e.target.value);
  };

  return (
    <div>
      <h1>Function 컴포넌트 라이프사이클 연습하기!!!!</h1>
      Fruit: <input onChange={handleChange} />
      Board: <input onChange={handleChange2} />
    </div>
  );
}

export default FunctionComponentLifeCycle;
