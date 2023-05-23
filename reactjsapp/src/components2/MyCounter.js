import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class MyCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0, message: "class component 이용했어" };
  }

  handleClick = (event) => {
    var btnContent = event.target.innerHTML;

    if (btnContent === "증가") {
      this.setState({
        count: this.state.count + 1,
        message: "값을 증가시킨다",
      });
    } else {
      this.setState({
        count: this.state.count - 1,
        message: "값을 감소시킨다",
      });
    }
  };

  render() {
    return (
      <div>
        <h1>count: {this.state.count}</h1>
        <p>{this.state.message}</p>
        <Button variant="success" onClick={this.handleClick}>
          증가
        </Button>
        <Button variant="warning" onClick={this.handleClick}>
          감소
        </Button>
        <br />
        <Button
          variant="outline-success"
          onClick={(e) => {
            this.setState({
              count: this.state.count + 1,
              message: e.target.innerHTML,
            });
          }}
        >
          증가
        </Button>
        <Button
          variant="outline-danger"
          onClick={(e) => {
            this.setState({
              count: this.state.count - 1,
              message: e.target.innerHTML,
            });
          }}
        >
          감소
        </Button>
      </div>
    );
  }
}

export default MyCounter;
