import React, { useEffect, useState } from "react";

export const MyTimer = () => {
  const [currentTime, setCurrentTime] = useState("00:00:00");

  // 내부 함수(함수 안에 존재하는 함수), 익명 함수, 화살표 함수
  const now = () => {
    const date = new Date();
    const h = String(date.getHours()).padStart(2, "0"); // 한 자리면 앞에 0 채우기
    const m = String(date.getMinutes()).padStart(2, "0");
    const s = String(date.getSeconds()).padStart(2, "0");
    setCurrentTime(`${h}:${m}:${s}`);
    console.log("타이머실행");
  };
  useEffect(() => {
    const timer = setTimeout(now, 1000); // 1초 후 1회 발생
    return () => {
      // 제거가 되면 타이머 제거
      console.log("*** useEffect의 cleanup 연습! 지나간다~~ ***");
      clearTimeout(timer);
    };
  }, [currentTime]); // []: 의존함수, 최초 mount 시 수행 + currentTime 변경 시 수행
  return (
    <div>
      <p>{currentTime}</p>
    </div>
  );
};
