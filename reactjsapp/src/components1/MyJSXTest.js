import React from "react";
import "components1/external.css";

function MyJSXTest(props) {
  const inlineStyle = {
    border: "3px dotted blue",
    color: "orange",
    fontSize: "30px",
  };
  const test1 = "react JSX 문법을 연습";
  const arr = [
    "Java",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "JSP/Servlet",
    "Spring",
  ];

  // key가 없다면 하나 삭제할 때 그 값을 찾을 때까지 처음부터 찾아야 함
  const arrList = arr.map((item, idx) => <li key={idx}>{item}</li>);

  return (
    <div>
      <h1 className="myStyle2">{test1}</h1>
      <p>방법 1. JS에서 변경 후 그대로 적용</p>
      <ul style={inlineStyle}>{arrList}</ul>
      <hr />
      <p>방법 2. JSX에서 직접 JS 코드 작성</p>
      <ul style={{ border: "3px dotted pink", color: "blue" }}>
        {arr.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyJSXTest;
