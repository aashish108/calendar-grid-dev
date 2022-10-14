export const getSelectedDate = (date: Date): number => date.getDate();

export const whatDay1stFallsOn = (date: Date): number =>
  new (Date as any)(date.setDate(1)).getDay() + 1;

export const daysInThisMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

export const monthAsString = (date: Date): string => {
  return date.toLocaleString('default', {
    month: 'long',
  });
};
export const year = (date: Date): number => date.getFullYear();
