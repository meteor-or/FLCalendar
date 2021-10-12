import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/ko";
import events from "./events";

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          views={["month"]}
          events={events}
          style={{ height: "80vh" }}
          eventPropGetter={(event, start, end, isSelected) => {
            let newStyle = {
              backgroundColor: "lightgrey",
              color: "black",
              borderRadius: "10px",
              border: "none",
            };

            if (event.onsal) {
              newStyle.backgroundColor = "#FCFFA6";
            }
            if (event.secure) {
              newStyle.backgroundColor = "#C1FFD7";
            }
            if (event.sealRock) {
              newStyle.backgroundColor = "#FE8F8F";
            }
            if (event.shatter) {
              newStyle.backgroundColor = "#B5DEFF";
            }

            return {
              className: "",
              style: newStyle,
            };
          }}
        />
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
