import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="top-bar">
        <h1 className="logo">
          <Link to="/">오늘전장</Link>
        </h1>
      </div>
    </>
  );
}

export default Header;
