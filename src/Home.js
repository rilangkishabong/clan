import React from "react";
import { Route, Switch } from "react-router-dom";
import { CreateClan } from "./Components/clan/CreateClan";
import { Logout } from "./Components/Logout";
import { ClanList } from "./Components/clan/ClanList";

export const Home = ({ history }) => {
  return (
    <div>
      <Switch>
        <Route path="/clan" exact component={CreateClan} />
        <Route path="/clan/hello" component={ClanList} />
        <Route path="/clan/logout" component={Logout} />
      </Switch>
    </div>
  );
};

export default Home;
