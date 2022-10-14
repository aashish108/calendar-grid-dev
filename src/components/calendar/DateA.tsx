import styled from '@emotion/styled';

const DatesContainer = styled.div<{ firstDay: number }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  grid-gap: 10px 0;
  width: 100%;
  span {
    color: black;
    &: first-child {
      grid-column: ${(props) => props.firstDay};
    }
    &.selected {
      background-color: red;
      color: white;
      width: 20px;
      padding: 5px;
    }
  }
`;

interface IDate {
  selectedDate: number;
  firstDay: number;
  daysInTheCurrentMonth: number;
}

const DateA = ({ selectedDate, firstDay, daysInTheCurrentMonth }: IDate) => {
  let daysArray = [];
  for (let i = 0; i < daysInTheCurrentMonth; i++) {
    daysArray[i] = <>{i + 1}</>;
  }

  return (
    <DatesContainer firstDay={firstDay}>
      {daysArray.map((day, key) => (
        <span
          key={key}
          className={key === selectedDate - 1 ? 'selected' : ''}
          data-testid={key === selectedDate - 1 ? 'selectedDate' : ''}
        >
          {day}
        </span>
      ))}
    </DatesContainer>
  );
};

export default DateA;
