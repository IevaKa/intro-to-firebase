import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Authentification from "./Authentication";
import UserProfile from "./UserProfile";
import Posts from "./Posts";
import PostPage from "./PostPage";

class Application extends Component {
  render() {
    return (
      <main className="Application">
        <Link to="/">
          <h1>Think Piece</h1>
        </Link>

        <Authentification />
        <Switch>
          <Route exact path="/" component={Posts}></Route>
          <Route exact path="/profile" component={UserProfile}></Route>
          <Route exact path="/posts/:id" component={PostPage}></Route>
        </Switch>
      </main>
    );
  }
}

export default Application;
