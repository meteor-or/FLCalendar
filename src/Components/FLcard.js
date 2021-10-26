import React from "react";
import "./FLcard.css";
import Slider from "react-slick";

function FLcard(props) {
  return (
    <div className="frontline">
      <div className="frontlineItem">
        <div className="frontline__imgBox">
          <img src={props.data.img} alt={props.data.title}></img>
        </div>
        <div className="frontline__infoBox">
          <h2 className="infoBox__title">{props.data.title}</h2>
          <div className="InfoBox__score">
            <h3 className="heading">
              <span>점수</span>
            </h3>
            <ul className="scoreList">
              <li className="scoreItem">
                <div className="score__title">목표</div>
                <div className="score__desc">{props.data.goalScore}점</div>
              </li>
              <li className="scoreItem">
                <div className="score__title">킬</div>
                <div className="score__desc">{props.data.killScore}점</div>
              </li>
              <li className="scoreItem">
                <div className="score__title">거점</div>
                <div className="score__desc">{props.data.baseScore}</div>
              </li>
              <li className="scoreItem">
                <div className="score__title">노드</div>
                <div className="score__desc">{props.data.nodeScore}</div>
              </li>
            </ul>
          </div>
          <div className="InfoBox_pattern">
            <h3 className="heading">
              <span>패턴</span>
            </h3>
            <div className="descOfPattern">{props.data.pattern1}</div>
            <div className="descOfPattern">{props.data.pattern2}</div>
          </div>
          {/* <div className="moreInfoWrap"></div> */}
        </div>
      </div>
    </div>
  );
}
export default FLcard;
