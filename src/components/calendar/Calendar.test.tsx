import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calendar from './Calendar';

test('the correct date is selected', async () => {
  render(<Calendar rawDate='2022-10-30' />);
  expect(screen.getByTestId('selectedDate')).toHaveTextContent('30');
});

test('the correct date is selected again', async () => {
  render(<Calendar rawDate='2022-9-10' />);
  expect(screen.getByTestId('selectedDate')).toHaveTextContent('10');
});

test('the correct month/year is shown', async () => {
  render(<Calendar rawDate='2022-9-10' />);
  expect(screen.getByTestId('monthContainer')).toHaveTextContent(
    'September 2022'
  );
});

test('the correct month/year is shown again', async () => {
  render(<Calendar rawDate='2020-5-10' />);
  expect(screen.getByTestId('monthContainer')).toHaveTextContent('May 2020');
});
