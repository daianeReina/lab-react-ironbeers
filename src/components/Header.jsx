import React from "react";
import { Link } from "react-router-dom";
import APP_PATHS from "../app-paths";
import Home from "../pages/home";
import ROUTES from "../routes";

function Header() {
  return (
    <nav style={{ display: "flex", flexDirection: "column" }}>
      <Link to={APP_PATHS.HOME}>Home</Link>
    </nav>
  );
}

export default Header;
