import styled from '@emotion/styled';

import Month from './Month';
import Days from './Days';
import DateA from './DateA';
import whatDay1stFallsOn from '../../functions/getDay1stOfCurrentMonthsFallsOn';
import daysInThisMonth from '../../functions/daysInThisMonth';

const Container = styled.div`
  width: 300px;
`;

interface ICalendar {
  rawDate: string;
}

const Calendar = ({ rawDate }: ICalendar) => {
  const date: Date = new (Date as any)(rawDate);
  const selectedDate: number = date.getDate();

  const month: string = date.toLocaleString('default', {
    month: 'long',
  });
  const year: number = date.getFullYear();

  return (
    <Container>
      <Month month={month} year={year} />
      <Days />
      <DateA
        selectedDate={selectedDate}
        firstDay={whatDay1stFallsOn(date)}
        daysInTheCurrentMonth={daysInThisMonth(date)}
      />
    </Container>
  );
};

export default Calendar;
