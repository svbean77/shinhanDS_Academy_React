import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function BoardDetail(props) {
  // 주소창으로 오는 parameter를 받아옴
  const { bno } = useParams();
  const [board, setBoard] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `/rest/webboard/view.do/${bno}`,
    })
      .then((response) => {
        console.log(response.data);
        setBoard(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <p style={{ textAlign: "center" }}>🐣게시글 상세🐣</p>
      <table className="tbl_style">
        <tbody>
          <tr>
            <td>bno</td>
            <td>
              <input defaultValue={board.bno} readOnly />
            </td>
          </tr>
          <tr>
            <td>title</td>
            <td>
              <input defaultValue={board.title} name="title" readOnly />
            </td>
          </tr>
          <tr>
            <td>content</td>
            <td>
              <input defaultValue={board.content} name="content" readOnly />
            </td>
          </tr>
          <tr>
            <td>writer</td>
            <td>
              <input defaultValue={board.writer} name="writer" readOnly />
            </td>
          </tr>
          <tr>
            <td>regdate</td>
            <td>
              <input defaultValue={board.regdate} readOnly />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <Link to="/board/list">
                <Button variant="outline-success">목록</Button>
              </Link>
            </td>
            <td>
              <Link to="/board/update" state={{ boardData: board }}>
                <Button variant="outline-success">수정</Button>
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default BoardDetail;
