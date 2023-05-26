import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BoardMenu(props) {
  return (
    <div>
      <p style={{ textAlign: "center" }}>🐣게시글 메뉴🐣</p>
      <Link to="/board/list">
        <Button variant="outline-success">Board 조회</Button>
      </Link>
      <Link to="/board/insert">
        <Button variant="outline-danger">Board 입력</Button>
      </Link>
    </div>
  );
}

export default BoardMenu;
