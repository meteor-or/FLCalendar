import { useState } from "react";

function General() {
  const matching = {
    title: "매칭조건",
    level: "잡 레벨 30",
    particaint: "1 - 4 명",
    grandcompany: "아무 총사령부 입사",
  };
  return <div className="matchTable"></div>;
  const [CommonRule, setCommonRule] = useState([
    {
      title: "조합",
      desc: "탱 1 힐 2 딜 5가 이상적입니다.",
    },
    {
      title: "대화",
      desc: "말하기/떠들기/외치기는 같은 부대에 소속된 플레이어끼리만 사용할 수 있습니다.",
    },
    {
      title: "탈것 ",
      desc: "탈것 탑승 중에 공격을 받은 경우 반드시 과중력 상태가 되기 때문에 탑승 시에는 주위를 경계할 필요가 있습니다.",
    },
    {
      title: "사망시",
      desc: "사망 시 5초 뒤에 본진에서 되살아 납니다. 본진에 있는 동안 '무적' 상태가 계속 부여됩니다.  이 상태는 본진을 나간 후 10초 동안 지속됩니다..",
    },
    {
      title: "아이템",
      desc: "전장에서는 아이템을 사용할 수 없습니다.",
    },
    {
      title: "데존",
      desc: " 데존을 사용하면 본진으로 귀환합니다. 재사용 시간은 없으나 공격을 받으면 캐스팅이 중단됩니다.",
    },
  ]);

  const [AdvancedRule, setAdvancedRule] = useState([
    {
      title: "아드레날린",
      desc: "아드레날린 = 개인 리미트브레이크, 아끼지 말고 자주 쓰도록 합시다. 전투 중 순위에 따라 축적량이 보정됩니다. ",
    },
    {
      title: "배틀 하이",
      desc: "배틀 하이는 플레이어를 죽이거나 도움을 줬을 때 상승하는 게이지로 힐량과 딜량을 늘려줍니다. 최대 레벨은 100이며 20이 증가할 때마다 효과가 등가합니다. 사망시 게이지가 절반으로 떨어집니다.",
    },
    {
      title: "플레이어 아이콘",
      desc: "전투 상태인 경우 맵에 플레이어 아이콘이 표시 됩니다.",
    },
    {
      title: "데미지 보정",
      desc: "전장에서는 직업에 따라 주는 피해량과 받는 피해량이 보정됩니다.",
    },
  ]);
}

export default General;
