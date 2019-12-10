import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "../pages/index";
import About from "../pages/about";
import NotFound from "../pages/notFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
