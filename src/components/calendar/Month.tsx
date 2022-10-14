import styled from '@emotion/styled';

const MonthContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  text-align: center;
`;

interface IMonth {
  month: string;
  year: number;
}

const Month = ({ month, year }: IMonth) => {
  return (
    <MonthContainer>
      <span>
        {month} {year}
      </span>
    </MonthContainer>
  );
};

export default Month;
