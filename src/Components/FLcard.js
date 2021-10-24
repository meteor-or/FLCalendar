import React from "react";
import "./FLcard.css";

function FLcard(props) {
  return (
    <div className="frontline">
      {props.data.map((data) => (
        <>
          <div className="frontlineItem">
            <div className="imgBox">
              <img src={data.img} alt={data.title}></img>
            </div>
            <div className="infoBox">
              <h2 className="forntlinetitle">{data.title}</h2>
              <div className="scoreInfo">
                <h3 className="heading">
                  <span>점수</span>
                </h3>
                <ul className="forntlineInfo">
                  <li>
                    <div className="titleOfScore">목표</div>
                    <div className="descOfScore">{data.goalScore}점</div>
                  </li>
                  <li>
                    <div className="titleOfScore">킬</div>
                    <div className="descOfScore">{data.killScore}점</div>
                  </li>
                  <li>
                    <div className="titleOfScore">거점</div>
                    <div className="descOfScore">{data.baseScore}</div>
                  </li>
                  <li>
                    <div className="titleOfScore">노드</div>
                    <div className="descOfScore">{data.nodeScore}</div>
                  </li>
                </ul>
              </div>
              <div className="patternInfo">
                <h3 className="heading">
                  <span>패턴</span>
                </h3>
                <div className="descOfPattern">{data.pattern1}</div>
                <div className="descOfPattern">{data.pattern2}</div>
              </div>
              {/* <div className="moreInfoWrap"></div> */}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
export default FLcard;
