import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components1/MyHeader";
import { MyNavigation } from "./components1/MyNavigation";
import MySection from "./components1/MySection";

function App() {
  return (
    // root는 하나만 있어야 함 -> div 밑에 다른 div가 존재하면 안됨
    <div className="App">
      <header className="App-header">
        <p>JSX(JavaScript XML): 지금은 JSX, 바벨이 JS로 만들어 줌!</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 배우기~~~~
        </a>
      </header>
      <Header></Header>
      <MyNavigation />
      <MyNavigation />
      <MySection />
    </div>
  );
}

export default App;
