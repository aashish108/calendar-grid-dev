import styled from '@emotion/styled';

import Month from './Month';
import Days from './Days';
import DateA from './DateA';

const Container = styled.div`
  width: 300px;
`;

const Calendar = () => {
  const date: Date = new (Date as any)();
  const d: number = date.getDate();
  const whatDay1stFallsOn: number =
    new (Date as any)(date.setDate(1)).getDay() + 1;
  console.log(whatDay1stFallsOn);

  return (
    <Container>
      <Month />
      <Days />
      <DateA currentDate={d} firstDay={whatDay1stFallsOn} />
    </Container>
  );
};

export default Calendar;
