import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./Actions/SignIn";
import PrivateRoute from "./Hoc/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import './App.css'

const App = () => {
  const auth = useSelector((state) => {
    return state.auth;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate, dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute
          path="/dashboard"
          component={Dashboard}
          isAuthenticated={auth.authenticate}
        />
      </Switch>
    </Router>
  );
};

export default App;