import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import ZoneZero from "./ZoneZero";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/zonezero" component={ZoneZero} />
      </Switch>
    </Router>
  );
};

export default App;
