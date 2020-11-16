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
        <Route path="/home/clan" exact component={CreateClan} />
        <Route path="/clan/hello" component={ClanList} />
        <Route path="/clan/logout" component={Logout} />
      </Switch>
    </div>
  );
};

export default Home;
