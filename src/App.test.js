import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SASA SAFARIS header', () => {
  render(<App />);
  // Be more specific and target the header div
  const headerElement = screen.getByRole('banner').querySelector('.header-title');
  expect(headerElement).toHaveTextContent(/SASA SAFARIS/i);
});

test('renders hero section', () => {
  render(<App />);
  // Check for the hero title element (text is now split into individual letters)
  const heroElement = screen.getByRole('heading', { level: 1 });
  expect(heroElement).toHaveClass('hero-title');
  expect(heroElement).toBeInTheDocument();
});

test('renders packages section', () => {
  render(<App />);
  // Check for the actual packages title
  const packagesElement = screen.getByText(/Safari & Beach Packages/i);
  expect(packagesElement).toBeInTheDocument();
});

test('renders offers section', () => {
  render(<App />);
  // Check for the actual offers title
  const offersElement = screen.getByText(/Best Offers This Month/i);
  expect(offersElement).toBeInTheDocument();
});

test('renders about section', () => {
  render(<App />);
  // Check for the actual about title
  const aboutElement = screen.getByText(/Your Safari, Made Simple/i);
  expect(aboutElement).toBeInTheDocument();
});
