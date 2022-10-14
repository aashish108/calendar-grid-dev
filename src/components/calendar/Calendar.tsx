import styled from '@emotion/styled';

import Month from './Month';
import Days from './Days';
import DateA from './DateA';
import {
  getSelectedDate,
  daysInThisMonth,
  whatDay1stFallsOn,
  monthAsString,
  year,
} from '../../functions/dateUtils';

const Container = styled.div`
  width: 300px;
`;

interface ICalendar {
  rawDate: string;
}

const Calendar = ({ rawDate }: ICalendar) => {
  const date: Date = new (Date as any)(rawDate);

  return (
    <Container>
      <Month month={monthAsString(date)} year={year(date)} />
      <Days />
      <DateA
        selectedDate={getSelectedDate(date)}
        firstDay={whatDay1stFallsOn(date)}
        daysInTheCurrentMonth={daysInThisMonth(date)}
      />
    </Container>
  );
};

export default Calendar;
