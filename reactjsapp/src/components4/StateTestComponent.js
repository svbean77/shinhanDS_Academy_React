// 버튼 클릭 시 숫자가 증가, 감소: react가 변수 값의 상태를 관리하고 값이 바뀌면 UI를 다시 그리고 싶다~!
import Button from "react-bootstrap/Button";
import "components1/boardStyle.css";
import React, { useCallback, useRef, useState } from "react";

const initMember = [
  {
    memberid: 1,
    membername: "홍길동1",
    email: "hongGD1@gmail.com",
    active: true,
  },
  {
    memberid: 2,
    membername: "홍길동2",
    email: "hongGD2@gmail.com",
    active: true,
  },
  {
    memberid: 3,
    membername: "홍길동3",
    email: "hongGD3@gmail.com",
    active: false,
  },
];

function StateTestComponent(props) {
  const [count, setCount] = useState(0);
  const [member, setMember] = useState({}); // 멤버 한 명 (object)
  const [memberList, setMemberList] = useState(initMember); // 모든 멤버 (array)
  const nextMemberId = useRef(4);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const handleDecrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  // 등록, 수정, 삭제, 목록보기
  const handleChange = (event) => {
    // 계속 event.target.Xxx로 쓰기 불편하니 사용할 값들을 추출
    const { name, checked, value } = event.target;
    setMember({
      // 전개연산자(...): 다른 속성이 추가될 떄 기존 속성을 유지하기 위해 사용
      ...member,
      [name]: name === "active" ? checked : value,
    });
  };
  const handleMemberAdd = () => {
    const newMember = { ...member, memberid: nextMemberId.current };
    // setXxx끼리는 비동기 -> setMember를 여기서 진행되면 member가 먼저 만들어지는지, memberList가 먼저 만들어지는지 모름 -> 동기 방법을 사용하자
    setMemberList([...memberList, newMember]);
    nextMemberId.current += 1;
  };
  // member 삭제: memberList에서 mid가 같지 않은 것만 남기기
  const handleDelete = (mid) => {
    setMemberList(memberList.filter((mem) => mem.memberid !== mid));
  };
  // member의 active를 토글
  const handleToggle = useCallback(
    (mid) => {
      setMemberList(
        memberList.map((mem) =>
          mem.memberid === mid ? { ...mem, active: !mem.active } : mem
        )
      );
    },
    [memberList]
  );

  return (
    <div>
      <MyCounter
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <hr />
      <CreateMember
        handleChange={handleChange}
        handleMemberAdd={handleMemberAdd}
      />
      <hr />
      <MemberList
        memberList={memberList}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    </div>
  );
}

function MyCounter({ count, handleIncrement, handleDecrement }) {
  return (
    <>
      <p>내 카운트: {count}</p>
      <Button onClick={handleIncrement}>증가</Button>
      <Button onClick={handleDecrement}>감소</Button>
    </>
  );
}

function CreateMember({ handleChange, handleMemberAdd }) {
  return (
    <div>
      이름:
      <input onChange={handleChange} name="membername" />
      이메일:
      <input onChange={handleChange} name="email" />
      활성O/X:
      <input name="active" type="checkbox" onChange={handleChange} />
      <Button variant="outline-success" onClick={handleMemberAdd}>
        멤버추가
      </Button>
    </div>
  );
}

const MemberList = ({ memberList, handleDelete, handleToggle }) => {
  return (
    <div>
      <table className="tbl_style">
        <thead>
          <tr>
            <th>멤버번호</th>
            <th>이름</th>
            <th>이메일</th>
            <th>활성</th>
            <th>삭제/토글</th>
          </tr>
        </thead>
        <tbody>
          {memberList.map((item, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? "evenStyle" : "oddStyle"}>
              <td>{item.memberid}</td>
              <td>{item.membername}</td>
              <td>{item.email}</td>
              <td style={{ color: item.active ? "blue" : "red" }}>
                {item.active ? item.active.toString() : false.toString()}
              </td>
              <td>
                <Button
                  onClick={() => handleDelete(item.memberid)}
                  variant="outline-danger"
                >
                  삭제
                </Button>
                <Button
                  onClick={() => handleToggle(item.memberid)}
                  variant="outline-info"
                >
                  활성토글
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StateTestComponent;
