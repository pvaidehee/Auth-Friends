import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link className="applogin" to="/login">Login</Link>
          <Link className="appfriends" to="/friendslist">Friends</Link>
        </nav>
        <Switch>
          <PrivateRoute exact path="/friendslist" component={FriendsList} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;