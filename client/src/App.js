import React from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Alert from "./components/Alert/Alert";
import Profile from "./components/Profile/Profile";
import Posts from "./components/Posts/Posts";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="l-grid">
      <Header />
      <Alert />
      <Navigation />
      <main className="l-main-content">
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/posts" component={Posts} />
      </main>
    </div>
  );
};

export default App;
