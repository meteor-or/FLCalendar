import React from "react";
import { Link } from "react-router-dom";
import "./Navigator.css";

function Navigator() {
  return (
    <nav>
      <Link to="/">달력</Link>
      <Link to="/frontline">전장</Link>
      <Link to="/job">직업</Link>
      <Link to="/macro">매크로</Link>
    </nav>
  );
}

export default Navigator;
