import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function BoardUpdate(props) {
  const location = useLocation(); // state로 보낸 변수를 받음
  const [board, setBoard] = useState(location.state.boardData);
  const navi = useNavigate();

  const handleChange = (event) => {
    setBoard({ ...board, [event.target.name]: event.target.value });
  };
  const handleSave = () => {
    axios({
      method: "put",
      url: "/rest/webboard/modify.do",
      data: board,
    })
      .then((response) => {
        console.log(response);
        navi("/board/list");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(board);
  }, [board]);

  return (
    <div>
      <p style={{ textAlign: "center" }}>🐣게시글 수정🐣</p>
      <table className="tbl_style">
        <tbody>
          <tr>
            <td>bno</td>
            <td>
              <input value={board.bno} readOnly />
            </td>
          </tr>
          <tr>
            <td>title</td>
            <td>
              <input value={board.title} onChange={handleChange} name="title" />
            </td>
          </tr>
          <tr>
            <td>content</td>
            <td>
              <input
                value={board.content}
                onChange={handleChange}
                name="content"
              />
            </td>
          </tr>
          <tr>
            <td>writer</td>
            <td>
              <input
                value={board.writer}
                onChange={handleChange}
                name="writer"
              />
            </td>
          </tr>
          <tr>
            <td>regdate</td>
            <td>
              <input value={board.regdate} readOnly />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <Button variant="outline-success" onClick={handleSave}>
                저장
              </Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default BoardUpdate;
