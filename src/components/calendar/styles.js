function isSelected(day, value) {
  return value.isSame(day, "day");
}
export function beforeThisMonth(day, month) {
  return day.isBefore(month, "month");
}
function isToday(day) {
  return day.isSame(new Date(), "day");
}
function AfterThisMonth(day, month) {
  return day.isAfter(month, "month");
}
export default function dayStyles(day, value) {
  const month = value.clone().startOf("month");
  if (isSelected(day, value)) return "selected";
  if (beforeThisMonth(day, month)) return "before";
  if (AfterThisMonth(day, month)) return "before";
  if (isToday(day)) return "today";
}
