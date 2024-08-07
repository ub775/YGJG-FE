import "./App.css";
import Calendar from "./component/Calendar/Calendar";
import Header2 from "./component/Header/Header2/Header2";

function App() {
  return (
    <div className="App">
      <Header2 text="팀 경기 일정" line={true} />
      <Calendar />
    </div>
  );
}

export default App;
