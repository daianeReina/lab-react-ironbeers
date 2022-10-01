import React from "react";
import { Link, useLocation } from "react-router-dom";
import ROUTES from "../routes";

function Navbar() {
  const location = useLocation();
  console.log("LOCATION", location);
  return (
    <nav style={{ display: "flex", flexDirection: "column" }}>
      {ROUTES.filter((element) => {
        return location.pathname !== element.path;
      }).map((element) => {
        return (
          <Link key={element.path} to={element.path}>
            {element.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;
