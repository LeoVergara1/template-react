import 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bienvenido a la página de inicio/i);
  expect(linkElement).toBeInTheDocument();
});
