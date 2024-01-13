import React from "react";
import { Route, Link } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let token = localStorage.getItem("token"); 
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component {...props.children} />;
        } else {
          return <Link to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;