import React, { useState } from "react";
import { createContext } from "react";
const CounterContext = createContext(); // context를 global로 만들겠다
const CounterProvider = (props) => {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [mystyle, setMystyle] = useState({
    border: "3px solid green",
    color: "black",
  });
  const plusCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <CounterContext.Provider
        value={{
          count, // JS 향상 문법: 변수명이 같다면 object 생성 시 값을 생략할 수 있음
          plusCount,
          minusCount,
          username,
          setUsername,
          mystyle,
          setMystyle,
        }}
      >
        {props.children}
      </CounterContext.Provider>
    </div>
  );
};
export { CounterContext, CounterProvider };
