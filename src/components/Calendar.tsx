import styled from '@emotion/styled';

import Month from './Month';
import Days from './Days';
import DateA from './DateA';
import whatDay1stFallsOn from '../functions/getDay1stOfCurrentMonthsFallsOn';
import daysInThisMonth from '../functions/daysInThisMonth';

const Container = styled.div`
  width: 300px;
`;

const Calendar = () => {
  const date: Date = new (Date as any)();
  const d: number = date.getDate();

  return (
    <Container>
      <Month />
      <Days />
      <DateA
        currentDate={d}
        firstDay={whatDay1stFallsOn()}
        daysInTheCurrentMonth={daysInThisMonth()}
      />
    </Container>
  );
};

export default Calendar;
