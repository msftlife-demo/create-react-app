import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Hello Girls In Tech link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello Girls In Tech!/i);
  expect(linkElement).toBeInTheDocument();
});
