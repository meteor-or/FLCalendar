import { useState } from "react";
import Table from "../Components/Table";
import "./General.css";

function General() {
  const [generalRule, setgeneralRule] = useState({
    Time: 20,
    매칭조건: {
      table: {
        header: [
          { title: "레벨제한", colspan: "" },
          { title: "직업제한", colspan: "" },
          { title: "파티참가인원", colspan: "" },
          { title: "총사령부", colspan: "" },
        ],
        contents: ["잡 레벨 30", "없음", "1~4명", "총사령부 입사"],
      },
    },
    기본규칙: [
      {
        title: "조합",
        desc: "한 파티당 탱커 1명 힐러 2명 딜러 5명이 이상적입니다.",
      },
      {
        title: "대화",
        desc: "말하기/떠들기/외치기는 같은 부대에 소속된 플레이어끼리만 사용할 수 있습니다.",
      },
      {
        title: "탈것",
        desc: "탈것 탑승 중에 공격을 받은 경우 반드시 과중력 상태가 됩니다. 탈것 탑승 시에는 주위를 경계할 필요가 있습니다.",
      },
      {
        title: "사망",
        desc: "사망 시 5초 뒤에 본진에서 되살아 납니다. 본진에 있는 동안 '무적' 상태가 계속 부여됩니다. 이 상태는 부활 지점을 나간 후 10초 동안 지속됩니다.",
      },
      { title: "아이템", desc: "전장에서는 아이템을 사용할 수 없습니다." },
      {
        title: "데존",
        desc: "데존을 사용하면 본진으로 귀환합니다. 재사용 시간은 없으나 공격을 받으면 캐스팅이 중단됩니다.",
      },
      {
        title: "거점",
        desc: "거점 안에 머물면 거점을 '점령'할 수 있습니다. 거점 안의 인원이 늘수록 점령 속도가 증가합니다. 4명 일시 최대 속도가 됩니다. 적군의 거점 해제시 10점, 빈 거점을 점령시 10점을 얻습니다.",
      },
    ],
    특수규칙: [
      {
        title: "아드레날린",
        desc: "개인 리미트브레이크입니다. 전투 중 순위에 따라 축적량이 보정됩니다.",
        table: {
          header: [
            { title: "등수", colspan: "" },
            { title: "아드레날린 보너스", colspan: "" },
          ],
          contents: [
            ["1", "없음"],
            ["2", "1.25배 빨리 참"],
            ["3", "1.5배 빨리 참"],
          ],
        },
      },
      {
        title: "투쟁심",
        desc: "투쟁심는 플레이어를 죽이거나 도움을 줬을 때 상승하는 게이지로 힐량과 딜량을 늘려줍니다. 최대 레벨은 100이며 20이 증가할 때마다 효과가 증가합니다. 사망시 수치가 절반으로 떨어집니다.",
        table: {
          header: [
            { title: "상태", colspan: "" },
            { title: "수치", colspan: "" },
            { title: "효과", colspan: "" },
          ],
          contents: [
            ["투쟁심 I", "20 ~ 39", "주는 데미지와 힐량이 10% 증가합니다."],
            ["투쟁심 II", "40 ~ 59", "주는 데미지와 힐량이 20% 증가합니다."],
            ["투쟁심 III", "60 ~ 79", "주는 데미지와 힐량이 30% 증가합니다."],
            ["투쟁심 IV", "80 ~ 99", "주는 데미지와 힐량이 40% 증가합니다."],
            ["투쟁심 V", "100", "주는 데미지와 힐량이 50% 증가합니다."],
          ],
        },
      },
      {
        title: "플레이어아이콘",
        desc: "전투 상태인 경우 맵에 플레이어 아이콘이 표시 됩니다.",
      },
      {
        title: "데미지보정",
        desc: "전장에서는 직업에 따라 주는 피해량과 받는 피해량이 보정됩니다.",
        table: {
          header: [
            { title: "직업", colspan: "" },
            { title: "주는 데미지", colspan: "" },
            { title: "받는 데미지", colspan: "" },
          ],
          contents: [
            ["나이트", "+10%", "-30%"],
            ["전사", "+10%", "-30%"],
            ["암흑기사", "+10%", "-30%"],
            ["건브레이커", "+10%", "-30%"],
            ["몽크", "+10%", "-30%"],
            ["용기사", "+10%", "-25%"],
            ["닌자", "+10%", "-25%"],
            ["사무라이", "+10%", "-30%"],
            ["음유시인", "", ""],
            ["기공사", "", ""],
            ["무도가", "", ""],
            ["흑마도사", "", ""],
            ["소환사", "", ""],
            ["적마도사", "", "-20%"],
            ["백마도사", "", ""],
            ["학자", "", ""],
            ["점성술사", "", ""],
          ],
        },
      },
    ],
  });

  return (
    <ul className="general_page">
      <li className="매칭조건">
        <h2 className="heading">
          <span>매칭조건</span>
        </h2>
        <div className="contents">
          <Table data={generalRule.매칭조건.table} />
        </div>
      </li>
      <li className="기본규칙">
        <h2 className="heading">
          <span>기본규칙</span>
        </h2>
        <div className="contents">
          {generalRule.기본규칙.map((data) => (
            <div className="item">
              <h5>{data.title}</h5>
              <p>{data.desc}</p>
            </div>
          ))}
        </div>
      </li>
      <li className="특수규칙">
        <h2 className="heading">
          <span>특수규칙</span>
        </h2>
        <div className="contents">
          {generalRule.특수규칙.map((data) => (
            <div className="item">
              <h3>{data.title}</h3>
              <Table data={data.table} />
              <p>{data.desc}</p>
            </div>
          ))}
        </div>
      </li>
    </ul>
  );
}

export default General;
