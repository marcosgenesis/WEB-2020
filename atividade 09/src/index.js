import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Firebase from "./utils/Firebase";
import FirebaseContext from "./utils/FirebaseContext";
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
