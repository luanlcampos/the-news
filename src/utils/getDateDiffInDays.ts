import dayjs from "dayjs";

export const getDateDiffInDays: any = (date: string) => {
  const d1 = dayjs(date);
  const d2 = dayjs();
  const diffInHours = d2.diff(d1, "h");
  const diffInDays = d2.diff(d1, "d");

  if (diffInDays > 7) {
    return d1.format("MMM D, YYYY");
  } else if (diffInDays === 1) {
    return `${diffInDays} day ago`;
  } else if (diffInDays >= 1) {
    return `${diffInDays} day(s) ago`;
  } else if (diffInHours === 1) {
    return `${diffInHours} hour ago`;
  } else if (diffInHours >= 1) {
    return `${diffInHours} hours ago`;
  } else {
    return "Just now";
  }
};
