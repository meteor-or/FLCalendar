import React from "react";
import "./FLcard.css";
import Slider from "react-slick";

function FLcard(props) {
  let settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="frontline">
      <div className="sliderWrap">
        <Slider {...settings}>
          {props.data.map((data) => (
            <div className="frontlineItem">
              <div className="frontline__imgBox">
                <img src={data.img} alt={data.title}></img>
              </div>
              <div className="frontline__infoBox">
                <h2 className="infoBox__title">{data.title}</h2>
                <div className="InfoBox__score">
                  <h3 className="heading">
                    <span>점수</span>
                  </h3>
                  <ul className="scoreList">
                    <li className="scoreItem">
                      <div className="score__title">목표</div>
                      <div className="score__desc">{data.goalScore}점</div>
                    </li>
                    <li className="scoreItem">
                      <div className="score__title">킬</div>
                      <div className="score__desc">{data.killScore}점</div>
                    </li>
                    <li className="scoreItem">
                      <div className="score__title">거점</div>
                      <div className="score__desc">{data.baseScore}</div>
                    </li>
                    <li className="scoreItem">
                      <div className="score__title">노드</div>
                      <div className="score__desc">{data.nodeScore}</div>
                    </li>
                  </ul>
                </div>
                <div className="InfoBox_pattern">
                  <h3 className="heading">
                    <span>패턴</span>
                  </h3>
                  <div className="descOfPattern">{data.pattern1}</div>
                  <div className="descOfPattern">{data.pattern2}</div>
                </div>
                {/* <div className="moreInfoWrap"></div> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default FLcard;
