import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import Registration from './Components/Registration';
import ContactUs from './Components/ContactUs';
import PrivateRoute from './Configuration/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFoundPage from './NotFoundPage';
// import {  } from 'react-router-dom/cjs/react-router-dom';
import { MyContext } from './ContextApis/MyContext';

function App() {
  const {isAuthenticated, setIsAuthenticated} = useContext(MyContext)
  useEffect(() => {
    const JSONToken = localStorage.getItem('token');
    const userJSON = localStorage.getItem('user');
    setIsAuthenticated(!!(JSONToken && userJSON));
  }, [setIsAuthenticated]);
  
  return (
    <Router>
      <Switch>
        <Route exact path ={"/"}>

          {isAuthenticated ? <Dashboard /> : <Home />}
        </Route>
        <Route path='/registration' component={Registration} />
        <Route path='/contact' component={ContactUs} />
        <PrivateRoute
          path="/dashboard"
          component={Dashboard}
          isAuthenticated={isAuthenticated}
        />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
