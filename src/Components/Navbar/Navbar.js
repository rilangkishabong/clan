import React, { useState } from "react";
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
import { SideBarWithRouter } from "./TemporaryDrawer";

export const Navbar = ({ history, ...rest }) => {
  const classes = useStyles();
  console.log(rest);
  const [opened, setOpened] = useState(false);

  const handleDrawerToggle = () => {
    setOpened(!opened);
  };

  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Clan-Relations
          </Typography>
          <div className={classes.grow} />

          <Tooltip title="Add a Clan">
            <IconButton
              color="inherit"
              onClick={() => history.push("/clan/create")}
              variant="outlined"
            >
              <AddClanIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="logout">
            <IconButton
              color="inherit"
              onClick={() => {
                localStorage.removeItem("token");
                history.push("/signin");
              }}
            >
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <SideBarWithRouter
        opened={opened}
        toggleDrawer={handleDrawerToggle}
        history={history}
        {...rest}
      />
    </div>
  );
};
