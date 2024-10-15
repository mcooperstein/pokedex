import { render, screen } from '@testing-library/react';
import App from './App';

test('renders randomize button', () => {
  render(<App />);
  const randomizeButton = screen.getByText(/choose/i);
  expect(randomizeButton).toBeInTheDocument();
  expect(randomizeButton).toHaveClass('randomize-button');
});
