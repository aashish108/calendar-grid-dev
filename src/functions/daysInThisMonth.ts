const daysInThisMonth = () => {
  const currentDate = new Date();
  return new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
};

export default daysInThisMonth;
