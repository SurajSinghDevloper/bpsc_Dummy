import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./Actions/SignIn";
import PrivateRoute from "./Hoc/PrivateRoute";
import './App.css'
import Registration from "./Components/Registration";
import ContactUs from "./Components/ContactUs";
import Dashboard from "./Components/Dashboard/Dashboard";

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
        <Route path='/registration' component={Registration}/>
        <Route path='/contact' component={ContactUs}/>
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