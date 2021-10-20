import React from "react";
import "./forntline.css";

const frontlines = [
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
    pattern1: "큰 얼음 패턴 2개, 작은 얼음 패턴 4개, 특수 패턴 1개가 있습니다.",
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
];

function Frontline() {
  return (
    <div className="frontline">
      {frontlines.map((data) => (
        <>
          <div className="frontlineItem">
            <div className="imgBox">
              <h2 className="forntlinetitle">{data.title}</h2>
              <img src={data.img} alt={data.title}></img>
              <p>여기다 뭔가 적었으면 좋겠다</p>
            </div>
            <div className="infoBox">
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
              <div className="moreInfoWrap">
                <a href="#" className="moreInfo">
                  더 자세히 보기→
                </a>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Frontline;
