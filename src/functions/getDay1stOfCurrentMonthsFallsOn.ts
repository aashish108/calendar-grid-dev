const date: Date = new (Date as any)();
const whatDay1stFallsOn = (): number =>
  new (Date as any)(date.setDate(1)).getDay() + 1;

export default whatDay1stFallsOn;
