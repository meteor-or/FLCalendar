import React, { useState, useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Frontline from "./routes/Frontline";
import Home from "./routes/Home";
import General from "./routes/General";
import Navigator from "./Components/Navigator";
import Header from "./Components/header";

import "./App.css";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
function App() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  return (
    <div>
      {/* Destop */}
      <Desktop>
        <HashRouter>
          <header>
            <Header />
          </header>
          <main className="main">
            <aside>
              <Navigator />
            </aside>
            <div className="main_contents">
              <Route path="/" exact={true} component={Home} />
              <Route path="/frontline" component={Frontline} />
              <Route path="/general" component={General} />
            </div>
          </main>
        </HashRouter>
      </Desktop>

      {/* Tablet */}
      <Tablet>
        <HashRouter>
          <header>
            <Header />
          </header>
          <main className="main">
            <aside>
              <Navigator />
            </aside>
            <div className="main_contents">
              <Route path="/" exact={true} component={Home} />
              <Route path="/frontline" component={Frontline} />
              <Route path="/general" component={General} />
            </div>
          </main>
        </HashRouter>
      </Tablet>

      {/* Mobile */}

      <Mobile>
        <HashRouter>
          <header>
            <Header />
            <Navigator />
          </header>
          <main className="main">
            <Route path="/" exact={true} component={Home} />
            <Route path="/frontline" component={Frontline} />
            <Route path="/general" component={General} />
          </main>
        </HashRouter>
      </Mobile>
    </div>
  );
}

export default App;
