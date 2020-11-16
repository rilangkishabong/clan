import { createMuiTheme } from "@material-ui/core/styles";
import { common, orange, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[200],
    },
    secondary: {
      main: red[600],
      contrastText: common.white,
    },
  },
});

export default theme;
