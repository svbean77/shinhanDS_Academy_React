import React, { Component } from "react";

class ClassComp1 extends Component {
  // 생성자 함수가 들어 있음 -> class잖아
  // 생성자 정의는 필수가 아님!
  // 생성자를 정의했다면 반드시 부모의 생성자를 호출해야 함 (super)
  constructor(props) {
    super(props);
    console.log("ClassComp1의 생성자!");
  }
  render() {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>ClassComp1</h1>
        <p>title: {this.props.title}</p>
        <p>content: {this.props.content}</p>
        <p>price: {this.props.price}</p>
        <p>children: {this.props.children}</p>
        <ul>
          {this.props.subject &&
            this.props.subject.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

class ClassComp2 extends Component {
  // class에서도 default props 설정 가능
  static defaultProps = { content: "빈 내용22", price: 7, color: "Thistle" };
  render() {
    const { title, content, price, children, subject, color } = this.props;
    return (
      <div>
        <h1 style={{ color }}>ClassComp2</h1>
        <p>title: {title}</p>
        <p>content: {content}</p>
        <p>price: {price}</p>
        <p>children: {children}</p>
        <ul>
          {subject && subject.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

class ClassLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "초기값", buttonVisible: false };
  }
  componentDidMount() {
    console.log("생성됨: componentDidMount");
  }
  componentDidUpdate() {
    console.log("수정됨: componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("제거됨: componentWillUnmount");
  }

  reset = () => {
    this.setState({ title: "초기값", buttonVisible: false });
  };

  render() {
    console.log("부모가 rendering...");
    const { title, buttonVisible } = this.state;

    return (
      <>
        <div>
          <button
            onClick={() =>
              this.setState({ title: "바뀐 제목이다", buttonVisible: true })
            }
          >
            자식보이기
          </button>
          {buttonVisible && (
            <div>
              <ChildComponent title={title} />
              <button onClick={this.reset}> 다시 시작</button>
            </div>
          )}
        </div>
      </>
    );
  }
}

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "child초기값", buttonVisible: false };
  }
  componentDidMount() {
    console.log("child생성됨: componentDidMount");
  }
  componentDidUpdate() {
    console.log("child수정됨: componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("child제거됨: componentWillUnmount");
  }

  render() {
    console.log("자식이 rendering...");
    return (
      <div>
        <p>ChildComponent에서 부모가 보내준 속성 읽기: {this.props.title}</p>
      </div>
    );
  }
}

export { ClassComp1, ClassComp2, ClassLifeCycle, ChildComponent };
