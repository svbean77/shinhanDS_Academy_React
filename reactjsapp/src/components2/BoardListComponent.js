import React, { useState } from "react";
import { Button, Table, InputGroup, Form, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const inputTitleWidth = { width: "5rem" };
function MyBoard(props) {
  // function component에서 상태값을 관리하고자 한다 -> component 내에서 변수의 값이 바뀌면 UI를 변경하고자 한다!!
  const [board, setBoard] = useState({
    bno: "",
    title: "",
    content: "",
    writer: "",
  });
  const [boardList, setBoardList] = useState([]);

  const inputChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };
  const add = (e) => {
    setBoardList([...boardList, board]);
  };
  const add2 = (e) => {
    var board = {};
    board.bno = document.querySelector("[name='bno']").value;
    board.title = document.querySelector("[name='title']").value;
    board.content = document.querySelector("[name='content']").value;
    board.writer = document.querySelector("[name='writer']").value;

    setBoardList([...boardList, board]);
  };

  return (
    <div>
      <h1>Board 입력!</h1>
      <table>
        <tbody>
          <tr>
            <th>bno</th>
            <td>
              <input type="number" name="bno2" />
            </td>
          </tr>
          <tr>
            <th>title</th>
            <td>
              <input type="text" name="title2" />
            </td>
          </tr>
          <tr>
            <th>content</th>
            <td>
              <input type="text" name="content2" />
            </td>
          </tr>
          <tr>
            <th>writer</th>
            <td>
              <input type="text" name="writer2" />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <button>작성하기</button>
            </td>
          </tr>
        </tfoot>
      </table>

      <hr />
      <h1>Board List</h1>
      <h1>ver. 한진오빠</h1>
      <div style={{ display: "flex" }}>
        <Stack className="col-md-1 mx-auto">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" style={inputTitleWidth}>
              bno
            </InputGroup.Text>
            <Form.Control
              placeholder="bno 입력해주세요"
              aria-label="bno"
              aria-describedby="basic-addon1"
              onChange={inputChange}
              name="bno"
              value={board.bno}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" style={inputTitleWidth}>
              title
            </InputGroup.Text>
            <Form.Control
              placeholder="title 입력해주세요"
              aria-label="title"
              aria-describedby="basic-addon1"
              onChange={inputChange}
              name="title"
              value={board.title}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" style={inputTitleWidth}>
              content
            </InputGroup.Text>
            <Form.Control
              placeholder="content 입력해주세요"
              aria-label="content"
              aria-describedby="basic-addon1"
              onChange={inputChange}
              name="content"
              value={board.content}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" style={inputTitleWidth}>
              writer
            </InputGroup.Text>
            <Form.Control
              placeholder="writer 입력해주세요"
              aria-label="writer"
              aria-describedby="basic-addon1"
              onChange={inputChange}
              name="writer"
              value={board.writer}
            />
          </InputGroup>
          <Button onClick={add}>등록</Button>
          <Button onClick={add2}>등록2</Button>
        </Stack>
        <div style={{ width: "70%", marginLeft: "30px" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>bno</th>
                <th>title</th>
                <th>content</th>
                <th>writer</th>
              </tr>
            </thead>
            <tbody>
              {boardList.length !== 0 &&
                boardList.map((dataEl, index) => (
                  <TableRowComponent
                    dataEl={dataEl}
                    index={index}
                  ></TableRowComponent>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

function TableRowComponent({ dataEl, index }) {
  console.log(dataEl);
  return (
    <tr key={index}>
      <TableColumnComponent data={dataEl.bno} />
      <TableColumnComponent data={dataEl.title} />
      <TableColumnComponent data={dataEl.content} />
      <TableColumnComponent data={dataEl.writer} />
    </tr>
  );
}

function TableColumnComponent({ data }) {
  return <td>{data}</td>;
}

export default MyBoard;
