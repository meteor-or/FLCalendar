import { useStaet } from "react";
import { Link } from "react-router-dom";
import "./Navigator.css";

function Navigator() {
  // const [activeNav, setActiveNav] = useStaet(1);

  return (
    <div className="gnb">
      <nav className="nav">
        <Link className="nav_item clicked" to="/">
          달력
        </Link>
        <Link className="nav_item" to="/general">
          공통규칙
        </Link>
        <Link className="nav_item" to="/frontline">
          전장규칙
        </Link>
      </nav>
    </div>
  );
}

export default Navigator;
