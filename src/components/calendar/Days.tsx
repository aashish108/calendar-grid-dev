import styled from '@emotion/styled';

const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  grid-gap: 10px 0;
`;

const Day = styled.div``;

const Days = () => {
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return (
    <DaysContainer>
      {days.map((day, key) => (
        <Day key={key}>{day}</Day>
      ))}
    </DaysContainer>
  );
};

export default Days;
