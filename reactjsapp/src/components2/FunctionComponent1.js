import React from "react";

var score1 = 100;
var score2 = 200;

// 화살표형으로 작성 가능!
const FunctionComp1 = (args) => {
  // return 내부는 JSX 문법 -> XML이기 때문에 규격을 지켜야 함
  // 1. root는 반드시 하나여야 함
  // 2. 여는 태그와 닫는 태그가 있어야 함
  // 3. 계층 구조를 가져야 함 (열고 닫는 태그가 어긋나서는 안됨: 순서가 맞아야 함)

  // 조건부 연선 A && B: A가 참이면 B를 수행, A가 거짓이면 B를 수행하지 않음
  return (
    <div>
      <h1 style={{ color: args.color }}>FunctionComp1</h1>
      <p>title: {args.title}</p>
      <p>content: {args.content}</p>
      <p>price: {args.price}</p>
      <p>children(태그 사이의 내용): {args.children}</p>
      <ul>
        {args.subject &&
          args.subject.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
};

// 비구조화 할당
function FunctionComp2({ title, content, price, children, subject, color }) {
  return (
    <div>
      <h1 style={{ color }}>FunctionComp2</h1>
      <p>title: {title}</p>
      <p>content: {content}</p>
      <p>price: {price}</p>
      <p>children: {children}</p>
      <ul>
        {subject && subject.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}

export { score1, score2, FunctionComp1, FunctionComp2 as default };
