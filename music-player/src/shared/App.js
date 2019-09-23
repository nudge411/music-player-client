import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Album, AlbumList } from "../pages";
import TopNavi from "../component/TopNavi";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <TopNavi />
        <Route exact path="/" component={Album} />
        <Switch>
          <Route exact path="/album/:id" component={AlbumList} />
        </Switch>
      </div>
    );
  }
}

export default App;
