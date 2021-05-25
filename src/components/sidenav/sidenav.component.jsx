import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidenavData";
import * as GiIcons from "react-icons/gi";
import * as ImIcons from "react-icons/im";
import "./sidenav.styles.scss";

const SideNavbar = () => {
  const [active, setActive] = useState();
  const [counter, setCounter] = useState(0);
  return (
    <nav className="navbar-side navbar-expand-lg">
      <div className="nav-header">
        <Link to="#">
          <span>Raahee</span>
          <div className="header">
            <ImIcons.ImHeart />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <GiIcons.GiHamburgerMenu />
        </button>
      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav-items">
          {SidebarData.map((item, idx) => {
            return (
              <li
                className={`${item.cName} 
              ${
                active === idx || (idx === 0 && counter === 0) ? "select" : ""
              }`}
                key={item.id}
                onClick={() => {
                  setActive(idx);
                  setCounter(counter + 1);
                }}
              >
                <Link to={item.path}>
                  {item.icon} <span> {item.title} </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default SideNavbar;
