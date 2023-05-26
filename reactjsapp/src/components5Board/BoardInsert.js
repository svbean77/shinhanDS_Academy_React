import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BoardInsert(props) {
  const [board, setBoard] = useState({});
  const navi = useNavigate();

  const handleChange = (event) => {
    setBoard({ ...board, [event.target.name]: event.target.value });
  };
  const handleInsert = () => {
    axios({
      method: "post",
      url: "/rest/webboard/register.do",
      data: board,
    })
      .then((response) => {
        console.log(response.data);
        navi("/board/list");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <p style={{ textAlign: "center" }}>🐣게시글 등록🐣</p>
      <div className="panel-body">
        <form method="post">
          <div className="form-group">
            <label>Title</label>{" "}
            <input
              className="form-control"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea
              className="form-control"
              rows="3"
              name="content"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Writer</label>{" "}
            <input
              className="form-control"
              name="writer"
              onChange={handleChange}
            />
          </div>
          <Button
            variant="outline-primary"
            type="button"
            className="btn btn-default"
            onClick={handleInsert}
          >
            입력
          </Button>
          <Button
            variant="outline-danger"
            type="reset"
            className="btn btn_primary"
          >
            리셋
          </Button>
        </form>
      </div>
    </div>
  );
}

export default BoardInsert;
