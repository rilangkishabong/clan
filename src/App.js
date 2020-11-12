import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AuthorizedRoute } from "./Auth";
import Home from "./Home";
import SignIn from "./SignIn";
import { SignUp } from "./SignUp";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./AppProvider/Theme";
import { CssBaseline } from "@material-ui/core";

export const App = () => {
  return (
    <React.StrictMode>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <AuthorizedRoute path="/" component={Home} />
            <Redirect to="/signup" />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
};
