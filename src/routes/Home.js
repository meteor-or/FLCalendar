import React, { useState } from "react";
import CalendarPart from "../Components/calendar.js";
import "./Home.css";

function A(params) {
  return (
    <div className="calendar_page">
      <CalendarPart />
    </div>
  );
}

export default A;
