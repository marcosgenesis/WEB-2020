import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import InsertPage from "./pages/InsertPage";
import ListPage from "./pages/ListPage";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/inserir" exact component={InsertPage} />
      <Route path="/listar" exact component={ListPage} />
    </Switch>
  );
}

export default Routes;
