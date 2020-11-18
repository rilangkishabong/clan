import React from "react";
import { withRouter } from "react-router-dom";
import { Home as HomeIcon } from "@material-ui/icons";
import PeopleIcon from "@material-ui/icons/People";
import {
  Drawer,
  ListItem,
  Typography,
  List,
  Box,
  Divider,
  ListItemIcon,
} from "@material-ui/core";

const TemporaryDrawer = ({ opened, toggleDrawer, history }) => {
  return (
    <Drawer anchor="left" open={opened} onClose={toggleDrawer}>
      <List>
        <ListItem>
          <Box>
            <Typography variant="h4">Clan-Relations</Typography>
          </Box>
        </ListItem>

        <Divider />
        <ListItem>
          <ListItemIcon
            onClick={() => {
              toggleDrawer();
              history.push("/");
            }}
          >
            <HomeIcon />
            <Typography> Home</Typography>
          </ListItemIcon>
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemIcon
            onClick={() => {
              toggleDrawer();
              history.push("/clan/list");
            }}
          >
            <PeopleIcon />
            <Typography> Show Clans</Typography>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export const SideBarWithRouter = TemporaryDrawer;
