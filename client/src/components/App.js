import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamView from "./streams/StreamView";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/create" exact component={StreamCreate}></Route>
          <Route path="/delete" exact component={StreamDelete}></Route>
          <Route path="/edit" exact component={StreamEdit}></Route>
          <Route path="/view" exact component={StreamView}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
