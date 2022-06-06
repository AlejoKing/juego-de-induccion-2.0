import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={require("./robot.png")} alt="Logo" className="robot" />
      <div className="container">
        <img src={require("./its.png")} alt="Logo" />
        <input type="email" placeholder="e-mail" />
        <input type="password" placeholder="password" />
        <button>Send</button>
      </div>
    </div>
  );
}

export default App;
