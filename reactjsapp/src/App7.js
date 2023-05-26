import { CounterProvider } from "components4/CounterProvider";
import { CountLabel, NameChange, PlusButton } from "components4/ProviderTest";
import ReducerTestComponent from "components4/ReducerTestComponent";
import StateTestComponent from "components4/StateTestComponent";
import BoardHome from "components5Board/BoardHome";
import NotFountComponent from "components5Board/NotFountComponent";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App7(props) {
  return (
    <>
      {/* 이 방법은 Router를 이용! */}
      <BrowserRouter>
        <Routes>
          <Route path="/board/*" element={<BoardHome />}></Route>
          <Route path="/state" element={<StateTestComponent />}></Route>
          <Route path="/reduce" element={<ReducerTestComponent />}></Route>
          <Route
            path="/provider"
            element={
              <CounterProvider>
                <CountLabel />
                <PlusButton />
                <NameChange />
              </CounterProvider>
            }
          ></Route>
          <Route path="*" element={<NotFountComponent />}></Route>
        </Routes>
      </BrowserRouter>
      {/* 이 방법은 그냥 모든 컴포넌트를 넣었어! */}
      {/* <StateTestComponent />
      <hr />
      <ReducerTestComponent />
      <hr />
      <h1>global로 사용해보자</h1>
      <CounterProvider> */}
      {/* CounterProvider로 감싸져 있는 3개의 컴포넌트가 global로 state를 공유! */}
      {/* <CountLabel />
        <PlusButton />
        <NameChange />
      </CounterProvider> */}
    </>
  );
}

export default App7;
