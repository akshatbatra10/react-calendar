import React from "react";

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
        {String.fromCharCode(171)}
      </div>
      <div className="current">
        {currentMonth()} {currentYear()}
      </div>
      <div className="next" onClick={() => setValue(nextMonth())}>
        {String.fromCharCode(187)}
      </div>
    </div>
  );
};

export default CalenderHeader;
