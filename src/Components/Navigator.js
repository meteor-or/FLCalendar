import React from "react";
import { Link } from "react-router-dom";
import "./Navigator.css";

function Navigator() {
  return (
    <div className="gnb">
      <nav>
        <Link to="/">달력</Link>
        <Link to="/general">공통규칙</Link>
        <Link to="/frontline">전장규칙</Link>
        <Link to="/macro">매크로</Link>
      </nav>
    </div>
  );
}

export default Navigator;
