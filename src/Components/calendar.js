import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/ko";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";
import CustomToolbar from "./CustomToolbar.js";

const localizer = momentLocalizer(moment);
let formats = {
  monthHeaderFormat: (date, culture, localizer) =>
    localizer.format(date, "yyyy[.]MM", culture),
};

function Calendarpart(params) {
  return (
    <div>
      <h1>이번 달 전장 일정은?</h1>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        views={["month"]}
        events={events}
        formats={formats}
        components={{ toolbar: CustomToolbar }}
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
    </div>
  );
}

export default Calendarpart;
