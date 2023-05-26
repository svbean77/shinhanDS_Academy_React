import React from "react";
import { Route, Routes } from "react-router-dom";
import BoardMenu from "components5Board/BoardMenu";
import BoardRetrieve from "components5Board/BoardRetrieve";
import BoardDetail from "components5Board/BoardDetail";
import BoardUpdate from "components5Board/BoardUpdate";
import BoardInsert from "components5Board/BoardInsert";
import BoardDelete from "./BoardDelete";
import NotFountComponent from "./NotFountComponent";

function BoardHome(props) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>🏠BOARD HOME🏠</h1>

      <Routes>
        {/* /board/ 내부에서 각 주소를 자세히 정의 */}
        <Route path="/" element={<BoardMenu />}></Route>
        <Route path="/list" element={<BoardRetrieve />}></Route>
        <Route path="detail/:bno" element={<BoardDetail />}></Route>
        <Route path="update" element={<BoardUpdate />}></Route>
        <Route path="insert" element={<BoardInsert />}></Route>
        <Route path="delete" element={<BoardDelete />}></Route>
        <Route path="*" element={<NotFountComponent />}></Route>
      </Routes>
    </div>
  );
}

export default BoardHome;
