import React, { useState } from "react";
import FLcard from "../Components/FLcard";
import "./Forntline.css";
import Slider from "react-slick";

function Frontline() {
  let settings = {
    dots: true,
    fade: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          fade: true,
          dots: true,
        },
      },
    ],
  };
  const [frontlines, setfrontlines] = useState([
    {
      title: "외곽 유격지대(제압전)",
      img: "http://image.ff14.co.kr/html2/guide/img/pvpguide/sub4_img13.jpg",
      goalScore: "1600",
      killScore: "5",
      baseScore:
        "1개 - 1점 | 2개 - 2점 | 3개 - 4점 | 4개 - 8점 | 5개 - 16점 | 6개 -32점",
      nodeScore: "큰 요격기 - 300점 | 작은 요격기 - 25점",
      pattern1: "큰 요격기 - 10분 고정",
    },
    {
      title: "봉인된 바위섬(쟁탈전)",
      img: "http://image.ff14.co.kr/html2/guide/img/pvpguide/sub4_img10.jpg",
      goalScore: "800",
      killScore: "5",
      baseScore: "없음",
      nodeScore: "S급 - 160점 | A급 - 120점 | B급 - 80점",
      pattern1: "남은 시간 10분 이전에 노드 4개, 이후에 노드 3개 등장합니다.",
    },
    {
      title: "영광의 평원(쇄빙전)",
      img: "http://image.ff14.co.kr/html2/guide/img/pvpguide/sub4_img4.jpg",
      goalScore: "1600",
      killScore: "+10 -5",
      baseScore: "1개 - 1점 | 2개 - 2점 | 3개 - 4점 ",
      nodeScore: "큰 얼음 - 300점 | 작은 얼음 - 70점",
      pattern1:
        "큰 얼음 패턴 2개, 작은 얼음 패턴 4개, 특수 패턴 1개가 있습니다.",
    },
    {
      title: "온살 하카이르(계절의 합전)",
      img: "http://image.ff14.co.kr/html2/guide/img/pvpguide/sub4_img16.jpg",
      goalScore: "1600",
      killScore: "8",
      baseScore: "없음",
      nodeScore: "S급 - 200점 | A급 - 100점 | B급 - 50점",
      pattern1:
        "중앙에 가까울 수록, 시간이 경과할 수록 높은 등급의 노드가 뜰 확률 증가합니다.",
      pattern2: "남은 시간 10분 이전에 노드 4개, 이후에 노드 3개 등장합니다.",
    },
  ]);

  return (
    <div className="forntline_page">
      <div className="sliderWrap">
        <Slider {...settings}>
          {frontlines.map((a, i) => {
            return <FLcard data={frontlines[i]} i={i} key={i} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Frontline;
