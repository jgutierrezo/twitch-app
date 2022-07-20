import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamView from "./streams/StreamView";
import {
  LIST_STREAMS,
  CREATE_PATH,
  DELETE_PATH,
  EDIT_PATH,
  VIEW_PATH,
} from "../Paths";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <div>
          <Switch>
            <Route path={LIST_STREAMS} exact component={StreamList}></Route>
            <Route path={CREATE_PATH} exact component={StreamCreate}></Route>
            <Route path={DELETE_PATH} exact component={StreamDelete}></Route>
            <Route path={EDIT_PATH} exact component={StreamEdit}></Route>
            <Route path={VIEW_PATH} exact component={StreamView}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
