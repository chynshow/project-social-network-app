import React from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Alert from "./components/Alert/Alert";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="l-grid">
      <Header />
      <Alert />
      <Navigation />
      <main className="l-main-content">
        <Profile />
      </main>
    </div>
  );
};

export default App;
