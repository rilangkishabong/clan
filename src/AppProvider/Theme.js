import { createMuiTheme } from "@material-ui/core/styles";
import {
  purple,
  green,
  common,
  yellow,
  blue,
  orange,
} from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[200],
    },
    secondary: {
      main: yellow[900],
      contrastText: common.white,
    },
  },
});

export default theme;
