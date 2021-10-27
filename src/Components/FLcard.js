import { useState, useRef } from "react";
import "./FLcard.css";
import { Button, Overlay, Tooltip, OverlayTrigger } from "react-bootstrap";

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
            <div className="descOfPattern">
              {props.data.pattern1}
              {/* {["top"].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      Tooltip on <strong>{placement}</strong>.
                    </Tooltip>
                  }
                >
                  <Button variant="secondary">?</Button>
                </OverlayTrigger>
              ))} */}
            </div>
            <div className="descOfPattern">{props.data.pattern2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FLcard;
