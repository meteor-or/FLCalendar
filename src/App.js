import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Frontline from "./routes/Frontline";
import Home from "./routes/Home";
import General from "./routes/General";
import Macro from "./routes/Macro";
import Navigator from "./Components/Navigator";
import Header from "./Components/header";

import "./App.css";

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <div className="main-section">
          <Navigator />
          <Route path="/" exact={true} component={Home} />
          <Route path="/frontline" component={Frontline} />
          <Route path="/general" component={General} />
          <Route path="/macro" component={Macro} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
