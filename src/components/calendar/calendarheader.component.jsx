import React from "react";
import * as FaIcons from "react-icons/fa";

const CalenderHeader = ({ value, setValue }) => {
  const prevMonth = () => {
    return value.clone().subtract(1, "month");
  };

  const nextMonth = () => {
    return value.clone().add(1, "month");
  };
  const currentMonth = () => {
    return value.format("MMMM");
  };

  const currentYear = () => {
    return value.format("YYYY");
  };
  const thisMonth = () => {
    return value.isSame(new Date(), "month");
  };

  return (
    <div className="header">
      <div
        className={thisMonth() ? "disable previous" : "previous"}
        onClick={() => !thisMonth() && setValue(prevMonth())}
      >
        <FaIcons.FaLessThan />
      </div>
      <div className="current">
        {currentMonth()} {currentYear()}
        <div className="changeMonth">
          <span>Month</span>
        </div>
      </div>
      <div className="next" onClick={() => setValue(nextMonth())}>
        <FaIcons.FaGreaterThan />
      </div>
    </div>
  );
};

export default CalenderHeader;
