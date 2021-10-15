import React from "react";
import Calendarpart from "./Components/calendar";
import Frontline from "./Components/frontline";
import Header from "./Components/header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contents">
        <div className="yahoo"></div>
        <Calendarpart />
      </div>
    </div>
  );
}

export default App;
