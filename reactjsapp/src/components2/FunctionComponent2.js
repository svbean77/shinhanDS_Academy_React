import React, { useState } from "react";

function FunctionComponent2(props) {
  const [userName, setUserName] = useState("홍길동");
  const [message, setMessage] = useState("반가워~");

  // 배열 추가
  const [fruit, setFruit] = useState("");
  const [fruitList, setFruitList] = useState(["딸기", "키위", "복숭아"]);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleClear = (e) => {
    setUserName("");
    setMessage("");
  };
  // 배열 추가
  const handleFruitAdd = (e) => {
    setFruit(e.target.value);
  };
  const handleCartAppend = (e) => {
    setFruitList([...fruitList, fruit]);
    setFruit("");
  };

  return (
    <div>
      <h1>이름이 뭐예요? {userName}</h1>
      <p>{message}</p>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td>함수 하나로 묶었다!</td>
          </tr>
          <tr>
            <td>이름</td>
            <td>
              <input
                placeholder="이름 입력해줘"
                type="text"
                onChange={handleNameChange}
                value={userName}
              />
            </td>
          </tr>
          <tr>
            <td>나이</td>
            <td>
              <input
                placeholder="메시지 입력해줘"
                type="text"
                onChange={handleMessageChange}
                value={message}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button onClick={handleClear}>지우기</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h1>장바구니 목록! (배열을 추가해보자)</h1>
      <ul>
        {fruitList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <table>
        <tbody>
          <tr>
            <td>
              <input onChange={handleFruitAdd} />
            </td>

            <td>
              <button onClick={handleCartAppend}>장바구니 추가</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FunctionComponent2;
