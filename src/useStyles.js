const { makeStyles } = require("@material-ui/core");
const { common, red, yellow, blue } = require("@material-ui/core/colors");

export const useStyles = makeStyles({
  background: {
    backgroundColor: "#ffe103",
    minHeight: "100vh",
    display: "flex",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/static/bg.svg"})`,
  },
  grow: {
    flexGrow: 1,
  },
});
