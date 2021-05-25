const BuildCalendar = (value) => {
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");
  const day = startDay.clone().subtract(1, "day");
  // const currentMonth = value.clone.startOf("month");
  const calendar = [];
  while (day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
      // .map((day) => {
      //   return EntryData.map((item) =>
      //     item.data === day ? (
      //       <div style={{ backgroundColor: item.color }}></div>
      //     ) : (
      //       ""
      //     )
      //   );
      // })
    );
  }
  return calendar;
};

export default BuildCalendar;
