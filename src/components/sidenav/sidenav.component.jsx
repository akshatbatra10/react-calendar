import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidenavData";
import "./sidenav.styles.scss";

const SideNavbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-header">
        <Link to="#">
          <span>Raahee</span>
        </Link>
      </div>
      <ul className="nav-items">
        {SidebarData.map((item, index) => {
          return (
            <li className={item.cName} key={item.id}>
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
