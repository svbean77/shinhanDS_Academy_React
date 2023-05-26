import axios from "axios";
import React, { useEffect, useState } from "react";
import "components1/boardStyle.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import 사진1 from "images/fox1.jpg";

function BoardRetrieve(props) {
  const [boardList, setBoardList] = useState([]);
  // 로드됐을 때 딱 한 번만 리스트를 가져오고 싶다 -> useEffect 사용!!!
  useEffect(() => {
    axios({
      method: "get",
      url: "/rest/webboard/list.do", // SpringBoot의 요청 주소
    })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setBoardList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <p style={{ textAlign: "center" }}>🐣게시글 리스트🐣</p>
      <img src={사진1} alt="여우" width={200} />
      <table className="tbl_style">
        <thead>
          <tr>
            <th>bno</th>
            <th>title</th>
            <th>content</th>
            <th>writer</th>
            <th>regdate</th>
            <th>수정/삭제</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((board, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "evenStyle" : "oddStyle"}
            >
              <td>
                <Link to={`/board/detail/${board.bno}`}>{board.bno}</Link>
              </td>
              <td>{board.title}</td>
              <td>{board.content}</td>
              <td>{board.writer}</td>
              <td>{board.regdate}</td>
              <td>
                <Link to="/board/update" state={{ boardData: board }}>
                  <Button variant="outline-success">수정</Button>
                </Link>
                <Link to="/board/delete" state={{ boardid: board.bno }}>
                  <Button variant="outline-danger">삭제</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoardRetrieve;
