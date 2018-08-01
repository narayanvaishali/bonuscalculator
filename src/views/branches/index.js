import React from "react";
import { Route, Switch } from "react-router-dom";

//Components
import BranchList from "./branch-list";
import AddBranch from "./add-branch";

const BranchIndex = () => {
  return (
    <div>
      <Switch>
        <Route path="/branches" component={BranchList} />
      </Switch>

      <Switch>
        <Route exact path="/branches/add" component={AddBranch} />
      </Switch>
    </div>
  );
};

export default BranchIndex;
