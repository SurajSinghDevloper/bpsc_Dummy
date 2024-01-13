import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Registration from './Components/Registration';
import ContactUs from './Components/ContactUs';
import PrivateRoute from './Configuration/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFoundPage from './NotFoundPage';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    const JSONToken = localStorage.getItem('token');
    const userJSON = localStorage.getItem('user');
    const isAuthenticated = JSONToken && userJSON;

    setIsAuthenticated(isAuthenticated);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
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
