import React from "react";
import { Redirect, Route } from "react-router-dom";

export const AuthorizedRoute = ({ component, ...rest }) => {
  if (!localStorage.getItem("token")) {
    return <Redirect to="/signin" push />;
  }

  return <Route component={component} {...rest} />;
};
