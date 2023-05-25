import Button from "react-bootstrap/Button";
import "components1/boardStyle.css";
import React, { useCallback, useReducer, useRef, useState } from "react";

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

// count
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
// Reducer로 상태를 관리하기 위해 member, memberList를 하나로 묶음
const initMember2 = {
  input: { membername: "", email: "", active: false },
  memberList: initMember,
};
// state: reducer가 관리하는 데이터
function reducer2(state, action) {
  switch (action.type1) {
    // 값이 입력되는 경우: onChange에서 호출
    case "CHANGE_INPUT":
      return {
        ...state,
        input: {
          ...state.input,
          [action.name]:
            action.name === "active" ? action.checked : action.value,
        },
      };
    // member가 추가되는 경우: add할 때 호출
    case "CREATE_MEMBER":
      return {
        // 값을 입력한 상태 까지는(state.input) mid가 없는 상태 (우리가 지금까지 계속 변경시킨 input)
        // action을 누를 때는 본 함수 호출 전 mid까지 넣어준 member가 들어오는 것
        input: initMember2.input,
        // 원래 배열에 합치기: concat 함수 사용
        // 이전에 우리가 쓴 방법: [...memberLust, action.member]
        memberList: state.memberList.concat(action.member),
      };
    // active 상태가 변경되는 경우
    case "TOGGLE_MEMBER":
      return {
        ...state,
        memberList: state.memberList.map((mem) =>
          mem.memberid === action.memberid
            ? { ...mem, active: !mem.active }
            : mem
        ),
      };
    // member를 삭제하는 경우
    case "REMOVE_MEMBER":
      return {
        ...state,
        memberList: state.memberList.filter(
          (mem) => mem.memberid !== action.memberid
        ),
      };
    default:
      return state;
  }
}

function ReducerTestComponent(props) {
  // reducer 이용한 상태 관리
  // 상태 관리 method: reducer, reducer2
  // 상태 관리 대상: count, state
  // -> state는 object 형태라서 가져오기 귀찮음 -> 구조적 코드를 통해 뽑아옴
  // 상태 관리 method 호출: dispatcher, dispatcher2
  // 상태 관리 대상의 초기값: 0, initMember2
  const [count, dispatcher] = useReducer(reducer, 0);
  // state: 현재 상태 -> 생김새는 initMember2처럼 생김
  const [state, dispatcher2] = useReducer(reducer2, initMember2);
  // state.어쩌고로 쓰기 귀찮으니까 값을 다 빼오자
  // state = {input: {membername: "", email: "", active: true}, memberList: [{}, {}, {}]}
  const { memberList } = state; // 배열
  const { membername, email, active } = state.input; // 문자열 -> 이 변수를 새로운 멤버를 만들 때 사용

  const nextMemberId = useRef(4);

  // DOM 접근을 위해 추가
  const emailRef = useRef();

  // count
  const handleIncrement = () => {
    // dispatcher로 보내주는 object의 값들이 전부 reducer 함수의 action으로 들어감
    // 내가 관리하는 값(count)이 reducer 함수의 state로 들어감 -> 여러 개의 상태를 관리한다면 state.Xxx로 작성
    dispatcher({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatcher({ type: "DECREMENT" });
  };

  // member
  const handleChange = (event) => {
    // 내가 보내주는 값들은 전부 action.Xxx로 사용하면 됨!
    // 1. input type="text": name, value
    // 2. input type="checkbox": name, checked, value
    const { name, checked, value } = event.target;
    console.log(name, checked, value);
    dispatcher2({
      type1: "CHANGE_INPUT",
      name: name,
      checked: checked,
      value: value,
    });
  };
  const handleMemberAdd = () => {
    if (membername === "" || email === "") return;
    const newMember = {
      memberid: nextMemberId.current,
      membername: membername,
      email: email,
      active: active,
    };
    dispatcher2({ type1: "CREATE_MEMBER", member: newMember });
    nextMemberId.current += 1;
    emailRef.current.value = "";
  };
  const handleToggle = (mid) => {
    dispatcher2({ type1: "TOGGLE_MEMBER", memberid: mid });
  };
  const handleDelete = (mid) => {
    dispatcher2({ type1: "REMOVE_MEMBER", memberid: mid });
  };

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
        membername={membername}
        active={active}
        emailRef={emailRef}
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

function CreateMember({
  handleChange,
  handleMemberAdd,
  membername,
  active,
  emailRef,
}) {
  // 멤버를 등록하면 input 창을 비우는 방법
  // 1. membername의 방식
  // reducer에서 add 시 initMember로 설정, 해당 값(빈 문자열)을 변수로 받아 value로 설정
  // 2. emailRef 방식
  // useRef를 이용해 DOM 객체 찾음, component에서 add 시 ref.current.value를 빈 문자열로 설정
  return (
    <div>
      이름:
      <input onChange={handleChange} name="membername" value={membername} />
      이메일:
      <input onChange={handleChange} name="email" ref={emailRef} />
      활성O/X:
      <input
        name="active"
        type="checkbox"
        onChange={handleChange}
        checked={active}
      />
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

export default ReducerTestComponent;
