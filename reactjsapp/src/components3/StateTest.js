import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Button from "react-bootstrap/Button";
import "components1/boardStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";

function StateTest() {
  var a = 100;
  var b = 200;

  // 상태값이 변경되면 UI가 바뀐다! (자동으로 UI rendering)
  // 초기 count 값 = 0, 값 변경은 setCount() 이용
  const [count, setCount] = useState(0);
  const [myName, setMyName] = useState("홍길동");
  const [myAge, setMyAge] = useState(20);
  // useRef()
  // 1. 특정 DOM 선택을 위해 사용
  const nameRef = useRef();
  const ageRef = useRef();
  // 2. 변수 관리
  // 변수 선언 1: rerendering 되면 다시 3이라는 값이 들어감 -> userid 값이 변경되지 않음
  var userid1 = 3;
  // 변수 선언 2(userRef 사용)
  var userid2 = useRef(3);

  // useRef() 예제 2: member를 넣는데 mid는 자동 증가
  const nextMid = useRef(3);
  const initMember = [
    { mid: 1, mname: "홍길동", email: "hong@email.com", active: true },
    { mid: 2, mname: "김철수", email: "kim@email.com", active: false },
  ];
  const [member, setMember] = useState({});
  const [memberList, setMemberList] = useState(initMember);

  // useCallback 예제
  // 성능향상을 위해 함수를 rendering 시마다 재정의 할 필요는 없음! 특정 값 변경 시에만 다시 실행
  // count가 변경되었을 때만 실행하자!
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleDecrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const handleChange = (e) => {
    if (e.target.name === "mname") {
      setMyName(e.target.value);
    } else if (e.target.name === "age") {
      setMyAge(e.target.value);
    }
  };

  const handleNameMove = () => {
    nameRef.current.focus();
  };
  const handleAgeMove = () => {
    ageRef.current.focus();
  };

  const handleUserIdIncrement = () => {
    userid1 += 1; // rendering 시 초기화 됨 -> rendering 후 다시 3으로 돌아감
    userid2.current += 1; // rendering 시 초기화되지 않음 -> 다음 값으로 증가

    console.log("userid1: " + userid1 + ", userid2: " + userid2.current);
  };

  const handleChange2 = (e) => {
    var value = e.target.name !== "active" ? e.target.value : e.target.checked;
    setMember({ ...member, [e.target.name]: value });
  };
  const handleAdd = (e) => {
    setMember({ ...member, mid: nextMid.current }); // setter는 비동기로 동작 -> setMember를 먼저 할지, setMemberList를 먼저 할지 몰라!
    // var tempMember = { ...member, mid: nextMid.current }; // 변수 사용은 동기 -> tempMember가 만들어진 후 setMemberList가 수행
    setMemberList([...memberList, member]);
    nextMid.current += 1;
  };

  // useMemo: 연산된 값을 저장해 재사용 -> 오래 걸리는 작업을 매번 하지 말자
  const longTimeFunction = (su) => {
    console.log(su + " 받아서 계산중..");
    for (let i = 1; i <= 100000000; i++) {
      su += i;
    }
    return su;
  };
  // count가 변경되지 않는다면 계산 결과는 같기 때문에 재계산이 불필요함 -> 계산된 결과를 기억하고 싶다!  (useMemo 사용)
  // [의존배열]에 등록된 변수 변경 시에만 재계산 수행한다
  var calc = useMemo(() => longTimeFunction(count), [count]);

  // life cycle
  // []: 의존배열
  useEffect(() => {
    console.log("1. StateTest 컴포넌트 load(mount) 시 1회 실행");
  }, []);
  useEffect(() => {
    console.log(
      "2. 1번 + rendering 시 매번 실행 (a, b는 상태값 변화가 아니기 때문에 상관 X rendering이 아님)"
    );
  });
  useEffect(() => {
    console.log("3. 1번 + count 변경 시 실행");
  }, [count]);
  useEffect(() => {
    console.log("4. 3번 + myName 변경 시 실행");
  }, [count, myName]);

  useEffect(() => {
    console.log("handleIncrement가 변경되었다!");
  }, [handleIncrement]);

  // return 안의 코드: JSX(JavaScript XML) -> React 문법
  // babel에 의해 컴파일 된다! (원래 바벨은 JS -> JS 컴파일, 얘는 JSX -> JS이기 때문에 var output = "<div></div>" 이런 식으로 컴파일 해줄 것!)
  // 컴파일된 결과를 render 함수에 넣어줄 것 (render(output), class형 컴포넌트는 애초에 render 함수가 존재)
  // root가 하나, 계층 구조를 지켜야 함! (마지막에 열린 태그부터 닫기) 닫는 태그 필수
  //
  return (
    <>
      <div>
        <div>
          <p>
            <span id="aa">a: {a}</span>--<span id="bb">b: {b}</span>--
            <span>count: {count}</span>--<span>myName: {myName}</span>
          </p>
          <button
            onClick={function () {
              a = a + 1;
            }}
          >
            a값 증가
          </button>
          <button
            onClick={() => {
              b = b + 1;
              document.getElementById("bb").innerHTML = "b: " + b;
            }}
          >
            b값 증가
          </button>
          <p>
            ** a: 그냥 변수의 값을 변경시킨다고 화면의 값이 바뀌지는 않아 **
            <br />
            ** b: JS같은 방식은 react에서 사용하는 것이 좋지 않아! **
          </p>
          <button onClick={handleIncrement}>count 증가</button>
          <button onClick={handleDecrement}>count 감소</button>
        </div>
        <hr />
        <div>
          이름:
          <input
            ref={nameRef}
            onChange={handleChange}
            value={myName}
            name="mname"
          />
          나이:
          <input
            ref={ageRef}
            onChange={handleChange}
            value={myAge}
            name="age"
          />
          <button onClick={handleNameMove}>이름 focus</button>
          <button onClick={handleAgeMove}>나이 focus</button>
        </div>
        <hr />
        <div>
          <p>useRef를 공부해보자</p>
          <button onClick={handleUserIdIncrement}>번호증가</button>
        </div>
        <hr />
        <div>
          이름:
          <input onChange={handleChange2} name="mname" />
          이메일:
          <input onChange={handleChange2} name="email" />
          활성O/X:
          <input name="active" type="checkbox" onChange={handleChange2} />
          <Button variant="outline-success" onClick={handleAdd}>
            멤버추가
          </Button>
          <table className="tbl_style">
            <thead>
              <tr>
                <th>멤버번호</th>
                <th>이름</th>
                <th>이메일</th>
                <th>활성</th>
              </tr>
            </thead>
            <tbody>
              {memberList.map((item, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "evenStyle" : "oddStyle"}
                >
                  <td>{item.mid}</td>
                  <td>{item.mname}</td>
                  <td>{item.email}</td>
                  <td>
                    {item.active ? item.active.toString() : false.toString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr />
        <div>
          <p>
            오래 걸려 계산했다... {count}부터 더하기: {calc}
          </p>
        </div>
      </div>
    </>
  );
  // map 함수를 사용할 때
  // () => {return 작업;}: 내가 직접 return을 적어야 힘
  // () => 작업: 자동 return
  // () => (작업): 자동 return
}

export default StateTest;
