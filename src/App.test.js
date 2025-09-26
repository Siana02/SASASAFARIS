import { render, screen } from '@testing-library/react';
import App from './App';

// TODO: Add more comprehensive tests for each component
// TODO: Test component interactions and state changes
// TODO: Add tests for responsive design and accessibility

test('renders SASA SAFARIS header', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading', { name: /SASA SAFARIS/i, level: 1 });
  expect(headerElement).toBeInTheDocument();
});

test('renders hero section', () => {
  render(<App />);
  const heroElement = screen.getByText(/Discover Amazing Safari Adventures/i);
  expect(heroElement).toBeInTheDocument();
});

test('renders packages section', () => {
  render(<App />);
  const packagesElement = screen.getByRole('heading', { name: /Our Safari Packages/i, level: 2 });
  expect(packagesElement).toBeInTheDocument();
});

test('renders offers section', () => {
  render(<App />);
  const offersElement = screen.getByRole('heading', { name: /Special Offers/i, level: 2 });
  expect(offersElement).toBeInTheDocument();
});

test('renders about section', () => {
  render(<App />);
  const aboutElement = screen.getByRole('heading', { name: /About SASA Safaris/i, level: 2 });
  expect(aboutElement).toBeInTheDocument();
});
