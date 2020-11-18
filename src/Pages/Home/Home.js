import React from "react";
import { Route, Switch } from "react-router-dom";
import { Logout } from "../../Components/Logout";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ClanList } from "../clan/ClanList";
import { CreateClan } from "../clan/CreateClan";
import { UpdateClan } from "../clan/UpdateClan";

export const Home = (props) => {
  return (
    <div>
      <Navbar {...props} />
      <Switch>
        <Route path="/clan/create" exact component={CreateClan} />
        <Route path="/clan/list" component={ClanList} />
        <Route path="/logout" component={Logout} />
        <Route path="/clan/update/:id" component={UpdateClan} />
      </Switch>
    </div>
  );
};

export default Home;
