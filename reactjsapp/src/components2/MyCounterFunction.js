import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function MyCounterFunction(props) {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("function 컴포넌트~");

  const handleClick = (event) => {
    var btnContent = event.target.innerHTML;

    if (btnContent === "증가") {
      setCount(count + 1);
      setMessage("카운트를 증가시킨다~");
    } else {
      setCount(count - 1);
      setMessage("카운트를 감소시킨다~");
    }
  };

  return (
    <div>
      <h1>count: {count}</h1>
      <p>{message}</p>
      <Button variant="success" onClick={handleClick}>
        증가
      </Button>
      <Button variant="warning" onClick={handleClick}>
        감소
      </Button>
      <br />

      <Button
        variant="outline-success"
        onClick={() => {
          setCount(count + 1);
          setMessage("증가!");
        }}
      >
        증가
      </Button>
      <Button
        variant="outline-danger"
        onClick={() => {
          setCount(count - 1);
          setMessage("감소!");
        }}
      >
        감소
      </Button>
    </div>
  );
}

export default MyCounterFunction;
