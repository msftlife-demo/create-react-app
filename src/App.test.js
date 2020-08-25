import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Hello Girls in Tech link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello Girls in Tech/i);
  expect(linkElement).toBeInTheDocument();
});
