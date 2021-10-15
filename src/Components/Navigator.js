import React from "react";
import { Link } from "react-router-dom";

function Navigator() {
  return (
    <nav>
      <Link to="/">달력</Link>
      <Link to="/frontline">전장 가이드</Link>
      <Link to="/job">직업 가이드</Link>
    </nav>
  );
}

export default Navigator;
