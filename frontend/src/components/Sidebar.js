import React, { useState } from "react";
import "./Sidebar.Index.css"; // css de sidebar
import { Link } from "react-router-dom";
import Logo from "./its.png";

// <header className= {`header ${show ? 'space-toggle' : null}`}>   (funcion de desplazamiento)

const Sidebar = () => {
  const [show, setShow] = useState(false);
  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <div className=" header">
            <div className="div-logo">
              <img className="ima " src={require("./its.png")} alt="Logo" />
            </div>
            <div className="div-bars">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </header>

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav ">
          <div className=" nav-list">
            <Link to="/" className="nav-link active">
              <i class="fa-solid fa-house "></i>
              <span className="nav-link-name">Homepage</span>
            </Link>

            <div className="nav-list">
              <Link to="/administradores" className="nav-link">
                <i className="fa-solid fa-user "></i>
                <span className="nav-link-name">Administradores</span>
              </Link>

              <Link to="/tablero" className="nav-link">
                <i className="fa-solid fa-chess-board"></i>
                <span className="nav-link-name"> Tablero</span>
              </Link>

              <Link to="/instrucciones" className="nav-link">
                <i className="fa-solid fa-book "></i>
                <span className="nav-link-name"> Instrucciones</span>
              </Link>
            </div>
          </div>

          <Link to="/logout" className="nav-link">
            <i className="fa-solid fa-right-from-bracket"></i>
            <span className="nav-link-name"> Logout</span>
          </Link>
        </nav>
      </aside>
      <h1>Welcome!</h1>
    </main>
  );
};

export default Sidebar;