import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/task";

const App = () => {
  return (
    <div className="container">
      <Header title="Hello Task Tracker" />
      <Tasks />
    </div>
  );
};

export default App;
