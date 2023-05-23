import React, { useState } from "react";

function MyStyleChangeComp(props) {
  const [color, setColor] = useState("black");
  const [myStyle, setMyStyle] = useState({
    color: color,
    border: "2px solid black",
    backgroundColor: "HoneyDew",
    padding: "20px",
  });

  const handleColorChange = (event) => {
    var targetContent = event.target.innerHTML;
    // 어떻게 바꿀 때마다 내 값을 다 줘! 이전 값도 알 수 있어야지! -> MemberComponent.js 예제
    setMyStyle({
      color: targetContent,
      border: `1px solid ${targetContent}`,
      backgroundColor: "HoneyDew",
      padding: "20px",
    });
    setColor(targetContent);
  };

  return (
    <div>
      <h1 style={{ color }}>글자 색을 변경해봅시다~! 현재 색: {color}</h1>
      <h2 style={myStyle}>스타일을 변경해봅시다~!~</h2>
      <button onClick={handleColorChange}>Plum</button>
      <button onClick={handleColorChange}>Turquoise</button>
      <button onClick={handleColorChange}>MediumAquaMarine</button>
    </div>
  );
}

export default MyStyleChangeComp;
