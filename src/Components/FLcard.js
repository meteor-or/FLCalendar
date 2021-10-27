import { useState, useRef } from "react";
import "./FLcard.css";
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";

function FLcard(props) {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div className="frontline">
      <div className="frontlineItem">
        <div className="frontline__imgBox">
          <img src={props.data.img} alt={props.data.title}></img>
        </div>
        <div className="frontline__infoBox">
          <h2 className="infoBox__title">{props.data.title}</h2>
          <div className="InfoBox__score">
            <h4 className="heading">
              <span>점수</span>
            </h4>
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
            <h4 className="pattern_title heading">
              <span>패턴</span>
            </h4>
            <div className="descOfPattern">{props.data.pattern1}</div>
            <div className="descOfPattern">
              {props.data.title == "영광의 평원(쇄빙전)" && (
                <>
                  {["top"].map((placement) => (
                    <OverlayTrigger
                      key={placement}
                      placement={placement}
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          ┏ 　I　II　III　 ┳ TIME ┳ I　 II　 III　IV ┓
                          <br />
                          ┃ 　　　　　　┃19 : 45┃ 1　 6　 1　6 ┃ <br />
                          ┃ 　1　1　1　 ┃19 : 00┃ 1　 1　 1　　┃
                          <br />
                          ┃ 　　　　　　┃18 : 00┃ 1　 1　 1　　┃
                          <br />
                          ┃ 　　　　　　┃17 : 00┃ 1　 1　 1　　┃
                          <br />
                          ┃ 　1 　　　　┃16 : 00┃ 1　 1　 4　4 ┃
                          <br />
                          ┃ 　　 1　2 　┃15 : 00┃ 1　 1　 　 　┃
                          <br />
                          ┃ 　　　　　　┃14 : 00┃ 1　 1　 　 　┃
                          <br />
                          ┃ 　　　　　　┃13 : 00┃ 1　 1　 　 　┃
                          <br />
                          ┃ 　1 　　　　┃12 : 00┃ 1　 1　 4　4 ┃
                          <br />
                          ┃ 　　　　　　┃11 : 00┃ 1　 1　 　 　┃
                          <br />
                          ┃ 　　 2　1 　┃10 : 00┃ 1　 1　 　 　┃
                          <br />
                          ┃ 　　　　　　┃09 : 00┃ 1　 1　 　 　┃
                          <br />
                          ┃ 　1 　　　　┃08 : 00┃ 6　 1　 6　4 ┃
                          <br />┗ 　<em>큰 얼음</em> 　┻ ━━━ ┻　{" "}
                          <em>작은얼음</em>
                          　┛
                        </Tooltip>
                      }
                    >
                      <Button variant="secondary">시간표 보기</Button>
                    </OverlayTrigger>
                  ))}
                </>
              )}
              {props.data.pattern2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FLcard;
