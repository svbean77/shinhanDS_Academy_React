import React from "react";

// 파일명과 컴포넌트 이름이 달라도 됨!
function Header(props) {
  console.log("MyHeader.js의 사용자 정의 header component를 지나간다~!");
  return (
    // 컴포넌트는 반드시 하나로 감싸야 함!
    <header>
      <h1>반갑습니다....</h1>
      <h2>React배우기전 선수지식은?</h2>
      <hr />
    </header>
  );
}

function HeaderF1() {
  return (
    <div>
      <p>MyHeader.js의 HeaderF1 함수이다!</p>
    </div>
  );
}

export { Header, HeaderF1 };
// export default Header; -> import 하는 쪽에서 {}를 설정하지 않아도 됨!
