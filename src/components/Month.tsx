import styled from '@emotion/styled';

const MonthContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  text-align: center;
`;

const Month = () => {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  return (
    <MonthContainer>
      <span>{currentMonth}</span>
    </MonthContainer>
  );
};

export default Month;
