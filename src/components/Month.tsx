import styled from '@emotion/styled';

const MonthContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  text-align: center;
`;

const Month = () => {
  const date: Date = new Date();
  const currentMonth: string = date.toLocaleString('default', {
    month: 'long',
  });
  const currentYear: number = date.getFullYear();

  return (
    <MonthContainer>
      <span>
        {currentMonth} {currentYear}
      </span>
    </MonthContainer>
  );
};

export default Month;
