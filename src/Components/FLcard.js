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
          <img
            src={props.data.img}
            alt={props.data.title}
            title="
          (c) 2010-2021 SQUARE ENIX Published In Korea by ACTOZ SOFT CO., LTD. "
          ></img>
        </div>
        <div className="frontline__infoBox">
          <div className="InfoBox__score">
            <h6 className="heading">
              <span>점수</span>
            </h6>
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
            <h6 className="pattern_title heading">
              <span>패턴</span>
            </h6>
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
                      <em>* 숫자는 얼음 개수입니다.</em>
                      <Table data={props.data.table} />
                      <br /> <strong> - 특수 패턴 - </strong>
                      <br /> 19:45 작은 얼음 모두 | 14:00, 12:00, 10:00, 8:00 큰
                      얼음 하나씩
                    </Modal.Body>{" "}
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        닫기
                      </Button>
                    </Modal.Footer>
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
