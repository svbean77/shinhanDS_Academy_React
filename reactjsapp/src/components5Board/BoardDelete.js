import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BoardDelete(props) {
  const location = useLocation();
  const bno = location.state.boardid;
  const navi = useNavigate();

  useEffect(() => {
    axios({
      method: "delete",
      url: `/rest/webboard/delete.do/${bno}`,
    })
      .then((response) => {
        console.log(response);
        alert(response.data);

        // 삭제 후 다시 조회 페이지로 이동하기: useNavigate 사용
        navi("/board/list");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <p style={{ textAlign: "center" }}>🐣게시글 삭제🐣</p>
    </div>
  );
}

export default BoardDelete;
