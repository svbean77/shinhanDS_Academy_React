// webboard 여러 건 table로 보여주기
import React from "react";
import "components1/boardStyle.css";

function WebBoardList(props) {
  const arr = [
    { bno: 11, title: "제목1", contents: "내용1", writer: "user1" },
    { bno: 12, title: "제목2", contents: "내용2", writer: "user2" },
    { bno: 13, title: "제목3", contents: "내용3", writer: "user3" },
    { bno: 14, title: "제목4", contents: "내용4", writer: "user4" },
    { bno: 15, title: "제목5", contents: "내용5", writer: "user5" },
  ];

  const arrRow = arr.map((item, index) => (
    <tr key={index} className={index % 2 === 0 ? "evenStyle" : "oddStyle"}>
      {Object.keys(item).map((data, idx) => (
        <td key={idx}>{item[data]}</td>
      ))}
    </tr>
  ));
  return (
    <div>
      <table className="tbl_style">
        <thead>
          <tr>
            <th>bno</th>
            <th>title</th>
            <th>contents</th>
            <th>writer</th>
          </tr>
        </thead>
        <tbody>{arrRow}</tbody>
      </table>
    </div>
  );
}

export default WebBoardList;
