import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import common from "@material-ui/core/colors/common";

const Context = createContext();
const { Provider } = Context;
const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
      contrastText: common.white,
    },
  },
  typography: {
    headline: {
      fontSize: "1rem",
    },
    subtitle1: {
      fontSize: "0.8125rem",
    },
    button: {
      fontWeight: 400,
      textTransform: "initial",
    },
    body1: {
      fontSize: "0.875rem",
    },
  },
  shape: {
    borderRadius: 4,
  },
});

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider>{children}</Provider>
    </ThemeProvider>
  );
};

export default AppProvider;
export const useAppState = () => useContext(Context);
