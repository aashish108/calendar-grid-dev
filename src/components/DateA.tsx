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
      width: 50%;
    }
  }
`;

interface IDate {
  currentDate: number;
  firstDay: number;
}

const DateA = ({ currentDate, firstDay }: IDate) => {
  let daysArray = [];
  for (let i = 0; i <= 30; i++) {
    daysArray[i] = <>{i + 1}</>;
  }

  return (
    <DatesContainer firstDay={firstDay}>
      {daysArray.map((day, key) => (
        <span
          key={key}
          className={key === currentDate - 1 ? 'selected' : 'notSelected'}
        >
          {day}
        </span>
      ))}
    </DatesContainer>
  );
};

export default DateA;
