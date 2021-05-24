import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidenavData";
import "./sidenav.styles.scss";

const SideNavbar = () => {
  const [active, setActive] = useState();
  const [counter, setCounter] = useState(0);
  return (
    <nav className="navbar-side">
      <div className="nav-header">
        <Link to="#">
          <span>Raahee</span>
        </Link>
      </div>
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
    </nav>
  );
};

export default SideNavbar;
