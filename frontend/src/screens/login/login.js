import "./login.css";
import React, { useState } from "react";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const sAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: "<h2>try again</h2>",
    });
  };

  const request = async (url) => {
    try {
      const res = await fetch(url);
      const info = await res.json();

      console.log(info);
    } catch (e) {
      console.log(e);
      sAlert();
    }
  };

  return (
    <div className="App">
      <img src={require("./robot.png")} alt="Logo" className="robot" />
      <div className="container">
        <img src={require("./its.png")} alt="Logo" />
        <input
          type="email"
          placeholder="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button
          onClick={() => request("https://pokeapi.co/api/v2/pokemon/ditto")}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Login;
