import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigator.css";

function Navigator() {
  const location = useLocation();
  const [activPage, setActivepage] = useState(location.pathname);

  useEffect(() => {
    setActivepage(location.pathname);
  }, [location]);
  return (
    <div className="gnb">
      <nav className="nav">
        <Link
          className={activPage === "/" ? "nav_item clicked" : "nav_item"}
          to="/"
        >
          달력
        </Link>
        <Link
          className={
            activPage === "/frontline" ? "nav_item clicked" : "nav_item"
          }
          to="/frontline"
        >
          전장규칙
        </Link>
        <Link
          className={activPage === "/general" ? "nav_item clicked" : "nav_item"}
          to="/general"
        >
          공통규칙
        </Link>
      </nav>
    </div>
  );
}

export default Navigator;
