import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AuthorizedRoute } from "./Auth/Auth";
import Home from "./Pages/Home/Home";
import SignIn from "./Auth/SignIn";
import { SignUp } from "./Auth/SignUp";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Provider/Theme";
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
