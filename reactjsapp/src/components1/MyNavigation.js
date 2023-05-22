import React from "react";

// 함수에 바로 export 설정 가능
export function MyNavigation(props) {
  console.log("MyNavigation.js의 사용자 정의 nav component를 지나간다~!");
  return (
    <div>
      <nav>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}

export const myscore = 100;
export function MyNavigation2() {
  return (
    <div>
      <p>MyNavigation.js에 있는 MyNavigation2이다~~~!</p>
      <p>점수는 {myscore}점 입니다!</p>
    </div>
  );
}
