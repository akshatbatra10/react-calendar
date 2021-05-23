import React, { useState, useEffect } from "react";

import TopNav from "../topnav/topnav.component";
import CalenderHeader from "./calendarheader.component";
import dayStyles, { beforeThisMonth } from "./styles";
import BuildCalendar from "./buildcalendar";

import "./calendar.styles.scss";

const CalendarComponent = ({ value, onChange }) => {
  const [calender, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(BuildCalendar(value));
  }, [value]);

  return (
    <div className="cal">
      <TopNav />
      <div className="calendar">
        <CalenderHeader value={value} setValue={onChange} />
        <div className="body">
          <div className="day-names">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <div className="week" key={d}>
                {d}
              </div>
            ))}
          </div>
          {calender.map((week, idx) => (
            <div key={idx}>
              {week.map((day) => (
                <div
                  className="day"
                  key={day._d}
                  onClick={() => !beforeThisMonth(day) && onChange(day)}
                >
                  <div className={dayStyles(day, value)}>{day.format("D")}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <span>add a new entry</span>
      </div>
    </div>
  );
};

export default CalendarComponent;
