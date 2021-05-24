import React, { useState, useEffect } from "react";
import * as AiIcons from "react-icons/ai";

import TopNav from "../topnav/topnav.component";
import CalenderHeader from "./calendarheader.component";
import dayStyles, { beforeThisMonth } from "./styles";
import BuildCalendar from "./buildcalendar";
import CardComponent from "../card/card.components";
import { EntryData } from "../card/cardData";

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
              {week.map((day) => {
                return (
                  <div
                    className="day"
                    key={day._d}
                    onClick={() => !beforeThisMonth(day) && onChange(day)}
                  >
                    <div className={dayStyles(day, value)}>
                      {day.format("D")}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="mid">
        <span>Latest Entries</span>
        <div className="slider">
          <div className="slide-container">
            <div className="card-container-class">
              {EntryData.length ? (
                EntryData.filter((item, idx) => idx < 3).map((item) => {
                  return <CardComponent item={item} />;
                })
              ) : (
                <div className="message">No Entries</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <span>add a new entry</span>
        <AiIcons.AiOutlinePlus />
      </div>
    </div>
  );
};

export default CalendarComponent;
