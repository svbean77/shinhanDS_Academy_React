import React from "react";

function MySection(props) {
  console.log("MySection.js의 사용자 정의 section component를 지나간다~!");
  return (
    // div로 넣기 싫다면 비어 있는 태그(=Fragment)를 사용해도 됨!
    <>
      <section>
        <article>
          <h1>React 학습</h1>
          <p>Props</p>
          <p>state</p>
          <p>Component</p>
        </article>
      </section>
      <hr />
    </>
  );
}

function MySection2() {
  return (
    <div>
      <p>MySection2 컴포넌트다</p>
    </div>
  );
}

// export default MySection;
// 하나의 component에만 default 가능
export { MySection2, MySection as default };
