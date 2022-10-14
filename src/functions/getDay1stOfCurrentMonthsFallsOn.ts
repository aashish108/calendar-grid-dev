const whatDay1stFallsOn = (date: Date): number =>
  new (Date as any)(date.setDate(1)).getDay() + 1;

export default whatDay1stFallsOn;
