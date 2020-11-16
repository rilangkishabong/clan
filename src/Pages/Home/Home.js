import React from "react";
import { Route, Switch } from "react-router-dom";
import { Logout } from "../../Components/Logout";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ClanList } from "../clan/ClanList";
import { CreateClan } from "../clan/CreateClan";

export const Home = ({ history }) => {
  return (
    <div>
      <Navbar history={history} />
      <Switch>
        <Route path="/clan/create" exact component={CreateClan} />
        <Route path="/clan/list" component={ClanList} />
        <Route path="/logout" component={Logout} />
        <Route path="/clan/update"
      </Switch>
    </div>
  );
};

export default Home;
