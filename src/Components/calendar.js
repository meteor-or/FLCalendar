import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";
import CustomToolbar from "./customToolbar.js";

const localizer = momentLocalizer(moment);
let formats = {
  monthHeaderFormat: (date, culture, localizer) =>
    localizer.format(date, "yyyy[.]MM", culture),
  weekdayFormat: (date, culture, localizer) =>
    localizer.format(date, "ddd", culture),
};
function Calendarpart(params) {
  return (
    <div className="calendar">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        views={["month"]}
        events={events}
        formats={formats}
        components={{ toolbar: CustomToolbar }}
        style={{ height: "calc(100vh - 100px)", width: "100%" }}
        eventPropGetter={(event, start, end, isSelected) => {
          let newStyle = {
            backgroundColor: "lightgrey",
            color: "black",
            borderRadius: "10px",
            border: "none",
            borderRadius: "none",
          };

          if (event.onsal) {
            newStyle.backgroundColor = "#f6bf26";
          }
          if (event.secure) {
            newStyle.backgroundColor = "#7986cb";
          }
          if (event.sealRock) {
            newStyle.backgroundColor = "#e67c73";
          }
          if (event.shatter) {
            newStyle.backgroundColor = "#039be5";
          }

          return {
            className: "",
            style: newStyle,
          };
        }}
      />
    </div>
  );
}

export default Calendarpart;
