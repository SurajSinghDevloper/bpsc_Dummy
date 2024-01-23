import React, { useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Components/Home";
import Registration from "./Components/Registration";
import ContactUs from "./Components/ContactUs";
import PrivateRoute from "./Configuration/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import NotFoundPage from "./NotFoundPage";
import "react-toastify/dist/ReactToastify.css";
import { MyContext } from "./ContextApis/MyContext";
import { ToastContainer } from "react-toastify";

function App() {
  const { isAuthenticated, setIsAuthenticated } = useContext(MyContext);
  useEffect(() => {
    const JSONToken = localStorage.getItem("token");
    const userJSON = localStorage.getItem("user");
    setIsAuthenticated(!!(JSONToken && userJSON));
  }, [setIsAuthenticated]);

  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          {isAuthenticated ? <Dashboard /> : <Home />}
        </Route>
        <Route path="/registration" component={Registration} />
        <Route path="/contact" component={ContactUs} />
        <PrivateRoute
          path="/dashboard"
          component={Dashboard}
          isAuthenticated={isAuthenticated}
        />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;
