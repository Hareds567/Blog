import React from "react";
//CSS
import "./Header.css";
//Library
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const goToHomePage = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("../", { replace: true });
  };
  return (
    <header className="Header" id="header">
      <span className="Header title" onClick={(e) => goToHomePage(e)}>
        Hareds' Blog
      </span>
    </header>
  );
};

export default Header;
