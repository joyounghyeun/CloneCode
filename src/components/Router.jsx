import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/home";

function Router() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      <Switch>
        {isLogin ? (
          <>
            <Route path="/">
              <Home />
            </Route>
          </>
        ) : (
          <Route path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
}

export default Router;
