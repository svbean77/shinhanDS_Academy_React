import React from "react";
import FunctionComp2, {
  score1,
  score2,
  FunctionComp1,
} from "components2/FunctionComponent1";
import { ClassComp1, ClassComp2 } from "components2/ClassComponent1";
import PropTypes from "prop-types";

function App3(props) {
  console.log(score1 + score2);
  const arr = ["HTML", "CSS", "JavaScript", "ReactJS"];
  return (
    <div>
      <p>score1: {score1}</p>
      <p>score2: {score2}</p>
      <FunctionComp1
        title="제목이당"
        content="내용이양"
        price={100}
        subject={arr}
        color="LightCoral"
      >
        {" "}
        AA
      </FunctionComp1>
      <FunctionComp2
        title="B제목이야"
        content="B내용이당"
        price={90}
        subject={arr}
        color="DarkTurquoise"
      >
        {" "}
        BB
      </FunctionComp2>
      <hr />

      <ClassComp1
        title="class1"
        content="class 내용이양"
        price={100}
        subject={arr}
        color="DarkSeaGreen"
      >
        {" "}
        Class1 사이 내용이야
      </ClassComp1>
      <ClassComp2
        title="class2"
        content="class 2의 내용이양"
        price={77}
        subject={arr}
        color="PeachPuff"
      >
        {" "}
        class2 사이~~
      </ClassComp2>
      <hr></hr>

      <FunctionComp2>속성 할당을 안한다면??!! - Function</FunctionComp2>
      <ClassComp1>속성 할당을 안한다면??!! - Class1</ClassComp1>
      <ClassComp2>속성 할당을 안한다면??!! - Class2</ClassComp2>
    </div>
  );
}

// default parameter 설정
FunctionComp2.defaultProps = {
  title: "제목없음",
  price: 777,
  color: "PowderBlue",
};
ClassComp1.defaultProps = {
  content: "빈 내용",
  price: 100,
  color: "MediumPurple",
};
// props type 설정
FunctionComp1.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  price: PropTypes.number,
};

export default App3;
