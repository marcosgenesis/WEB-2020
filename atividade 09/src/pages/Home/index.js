import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="links">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/inserir" className="link">
        inserir
      </Link>
      <Link to="/listar" className="link">
        Listar
      </Link>
    </div>
  );
}

export default Home;
