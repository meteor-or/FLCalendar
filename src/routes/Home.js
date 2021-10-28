import React, { useState, useEffect } from "react";
import CalendarPart from "../Components/calendar.js";
import { Spinner } from "react-bootstrap";
import "./Home.css";

function A(params) {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  return (
    <div className="calendar_page">
      {loading ? (
        <div className="spiner-justify-content">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <CalendarPart />
      )}
    </div>
  );
}

export default A;
