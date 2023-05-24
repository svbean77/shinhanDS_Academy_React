import React from "react";

const Light = ({ room, on }) => {
  console.log(room, on);
  return <div>{on ? "💡" : "⬛"}</div>;
};
// 그냥 export로 사용하면 전원 하나를 건들 때마다 모든 전원이 출력됨: 다 다시 만들어버려
// export default Light;
// Light 컴포넌트를 저장했다가 Light가 변경되지 않았다면 다시 만들지 않음 -> 변경사항이 있는 전등만 다시 만들기
export default React.memo(Light);
