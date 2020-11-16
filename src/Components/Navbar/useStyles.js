const { makeStyles } = require("@material-ui/core");

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
  cover: {
    minHeight: 100,
  },
  root: {
    minHeight: 150,
  },
});
