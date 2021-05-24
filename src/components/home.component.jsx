import React, { useState } from "react";
import moment from "moment";

import SideNavbar from "./sidenav/sidenav.component";
import CalendarComponent from "./calendar/calendar.component";
import Community from "./community/community.component";

import "./home.styles.scss";

const HomePage = () => {
  moment.updateLocale("en", {
    week: {
      dow: 1,
    },
  });
  const [value, setValue] = useState(moment());
  return (
    <div className="main">
      <div className="nav">
        <SideNavbar />
      </div>
      <div className="calendarStyle">
        <CalendarComponent value={value} onChange={setValue} />
      </div>
      <div className="community">
        <Community />
      </div>
    </div>
  );
};

export default HomePage;
