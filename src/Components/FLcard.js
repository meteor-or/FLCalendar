import { useState, useRef } from "react";
import Table from "./Table";
import "./FLcard.css";
import { Button, Tooltip, Modal, OverlayTrigger } from "react-bootstrap";

function FLcard(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="frontline">
      <div className="frontlineItem">
        <div className="frontline__imgBox">
          <h2 className="infoBox__title">{props.data.title}</h2>
          <img src={props.data.img} alt={props.data.title}></img>
        </div>
        <div className="frontline__infoBox">
          <div className="InfoBox__score">
            <h5 className="heading">
              <span>점수</span>
            </h5>
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
            <h5 className="pattern_title heading">
              <span>패턴</span>
            </h5>
            <div className="descOfPattern">{props.data.pattern1}</div>
            <div className="descOfPattern">
              {props.data.title == "영광의 평원(쇄빙전)" && (
                <>
                  <Button variant="secondary" onClick={handleShow}>
                    시간표 보기
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>얼음 등장 시간표</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Table data={props.data.table} />
                    </Modal.Body>
                  </Modal>
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
