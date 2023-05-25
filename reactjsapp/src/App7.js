import { CounterProvider } from "components4/CounterProvider";
import { CountLabel, NameChange, PlusButton } from "components4/ProviderTest";
import ReducerTestComponent from "components4/ReducerTestComponent";
import StateTestComponent from "components4/StateTestComponent";
import React from "react";

function App7(props) {
  return (
    <div>
      <StateTestComponent />
      <hr />
      <ReducerTestComponent />
      <hr />
      <h1>global로 사용해보자</h1>
      <CounterProvider>
        {/* CounterProvider로 감싸져 있는 3개의 컴포넌트가 global로 state를 공유! */}
        <CountLabel />
        <PlusButton />
        <NameChange />
      </CounterProvider>
    </div>
  );
}

export default App7;
