import "./App.css";
import Login from "./screens/login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  /*return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}>

      </Route>
    </Routes>
    </BrowserRouter>
  );*/ return <Login></Login>;

}

export default App;
