import React, { useState } from "react";

function MemberComponent(props) {
  const [member, setMember] = useState({
    name: "홍길동",
    age: 20,
  });

  const handleNameChange = (e) => {
    setMember({ ...member, name: e.target.value });
  };
  const handleAgeChange = (e) => {
    setMember({ ...member, age: e.target.value });
  };

  const handleChange = (e) => {
    const changeValue = e.target.name;
    // 객체에 값을 넣을 때
    // 1. obj.name = "값"
    // 2. obj['name'] = "값" <- 이 방법을 사용했다고 생각하면 됨!
    /*
    var obj = {};
    var str = "myname";
    obj[str] = "홍길동";
    */
    setMember({ ...member, [changeValue]: e.target.value });
  };

  return (
    <div>
      <h1>
        이름은 {member.name}이고 나이는 {member.age}이다!
      </h1>
      <table>
        <tbody>
          <tr>
            <td>이름</td>
            <td>
              <input type="text" onChange={handleNameChange} />
            </td>
          </tr>
          <tr>
            <td>나이</td>
            <td>
              <input type="number" onChange={handleAgeChange} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>함수 하나로 묶었다!</td>
          </tr>
          <tr>
            <td>이름</td>
            <td>
              <input name="name" type="text" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>나이</td>
            <td>
              <input name="age" type="number" onChange={handleChange} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MemberComponent;
