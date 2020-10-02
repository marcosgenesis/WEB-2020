import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="default">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
