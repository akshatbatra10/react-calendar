function isSelected(day, value) {
  return value.isSame(day, "day");
}
export function beforeThisMonth(day) {
  return day.isBefore(new Date(), "month");
}
function isToday(day) {
  return day.isSame(new Date(), "day");
}
export default function dayStyles(day, value) {
  if (isSelected(day, value)) return "selected";
  if (beforeThisMonth(day)) return "before";
  if (isToday(day)) return "today";
}
