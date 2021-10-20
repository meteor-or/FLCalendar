import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Frontline from "./Components/Frontline";
import "./App.css";
import Home from "./routes/Home";
import Navigator from "./Components/Navigator";
import Header from "./Components/header";

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <div className="main-section">
          <Navigator />
          <Route path="/" exact={true} component={Home} />
          <Route path="/frontline" component={Frontline} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
