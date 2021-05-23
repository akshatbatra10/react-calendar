import React from "react";

import { Link } from "react-router-dom";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import * as FcIcons from "react-icons/fc";

import "./topnav.styles.scss";

const TopNav = () => {
  return (
    <nav className="top-navbar">
      <div className="nav-title">
        <Link to="#">
          <span>Record Your Thoughts</span>
        </Link>
      </div>
      <ul className="topnav-item">
        <li>
          <Link to="#">
            <GiIcons.GiWallet />
          </Link>
        </li>
        <li>
          <Link to="#">
            <MdIcons.MdNotificationsActive />
          </Link>
        </li>
        <li>
          <Link to="#">
            <FcIcons.FcButtingIn />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
