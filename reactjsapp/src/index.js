import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import App from "App6"; // 뒤에 확장자가 없으면 javascript
import reportWebVitals from "reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

// index.js에 여러 개의 컴포넌트가 랜더링되는 것은 좋은 방법이 아님 -> App에 넣기로
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
