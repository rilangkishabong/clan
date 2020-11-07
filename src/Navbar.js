import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./useStyles";
import {
  ExitToApp as LogoutIcon,
  AddCircle as AddClanIcon,
} from "@material-ui/icons";

export const Navbar = () => {
return (
<AppBar position="static" color="secondary">
  <Toolbar variant="dense">
    <IconButton edge="start" color="inherit">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" noWrap>
      Clan-Relations
    </Typography>
    <div className={classes.grow} />

    <Tooltip title="Add a Clan">
      <IconButton
        color="inherit"
        onClick={() => history.push("/clan")}
        variant="outlined"
      >
        <AddClanIcon />
      </IconButton>
    </Tooltip>

    <Button
      variant="text"
      color="inherit"
      onClick={() => history.push("/clan/hello")}
    >
      Show Clans
    </Button>

    <Tooltip title="logout">
      <IconButton color="inherit" onClick={() => history.push("/signin")}>
        <LogoutIcon />
      </IconButton>
    </Tooltip>
  </Toolbar>
</AppBar>;
}