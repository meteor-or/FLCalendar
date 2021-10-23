import React from "react";
import { Link } from "react-router-dom";
import "./Navigator.css";

function Navigator() {
  let button = document.getElementsByClassName("button");

  function handleClick(event) {
    if (event.target.classList[0] === "clicked") {
      event.target.classList.remove("clicked");
    } else {
      for (var i = 0; i < button.length; i++) {
        button[i].classList.remove("clicked");
      }
      event.target.classList.add("clicked");
    }
  }

  function init() {
    for (var i = 0; i < button.length; i++) {
      button[i].addEventListener("click", handleClick);
    }
  }

  init();
  return (
    <div className="gnb">
      <nav>
        <Link className="button" to="/">
          달력
        </Link>
        <Link className="button" to="/general">
          공통규칙
        </Link>
        <Link className="button" to="/frontline">
          전장규칙
        </Link>
        <Link className="button" to="/macro">
          매크로
        </Link>
      </nav>
    </div>
  );
}

export default Navigator;
