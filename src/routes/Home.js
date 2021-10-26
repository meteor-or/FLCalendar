import React from "react";
import CalendarPart from "../Components/calendar.js";
import FLcard from "../Components/FLcard.js";
import "./Home.css";

const testdata = {
  title: "외곽 유격지대(제압전)",
  img: "http://image.ff14.co.kr/html2/guide/img/pvpguide/sub4_img13.jpg",
  goalScore: "1600",
  killScore: "5",
  baseScore:
    "1개 - 1점 | 2개 - 2점 | 3개 - 4점 | 4개 - 8점 | 5개 - 16점 | 6개 -32점",
  nodeScore: "큰 요격기 - 300점 | 작은 요격기 - 25점",
  pattern1: "큰 요격기 - 10분 고정",
};
function A(params) {
  let test = document.querySelectorAll(".rbc-event-content");
  console.log(test);

  return (
    <div className="calendar_page">
      <CalendarPart />
    </div>
  );
}

export default A;
