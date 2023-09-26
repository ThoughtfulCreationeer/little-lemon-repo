import React from "react";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import App from './App';


// Test that the app renders the home page by default
test('Renders the home page by default', () => {
  render(
    // Use MemoryRouter as a means to simulate the url
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      {/* Render the app component using the simulated router Memo */}
      <App />
    </MemoryRouter>
  );
  //Assertion that the rendered homepage is present with its header
  const HomePage = screen.getByRole('heading', { name: 'Little Lemon', level: 1  });
  expect(HomePage).toBeInTheDocument();
});


// Test that the app renders the home page by default
test('Renders the home page by default', () => {
  render(
    // Use MemoryRouter as a means to simulate the url
    <MemoryRouter initialEntries={['/Menu']} initialIndex={0}>
      {/* Render the app component using the simulated router Memo */}
      <App />
    </MemoryRouter>
  );
  //Assertion that the rendered homepage is present with its header
  const MenuPage = screen.getByRole('heading', { name: 'Menu' });
  expect(MenuPage).toBeInTheDocument();
});



// // Test that the app renders the reservations page when the url is changed
test('Renders the reservation page properly', () => {
  render(
    <MemoryRouter initialEntries={['/Reservations']} initialIndex={0}>
      <App />
    </MemoryRouter>
  );
//   //Assertion that the rendered reservation page is present with its header
const reservationPage = screen.getByRole('heading', { name: 'Reservations' });
expect(reservationPage).toBeInTheDocument();
});

// Test that the app renders the about page by default
test('Renders the about page by default', () => {
  render(
    // Use MemoryRouter as a means to simulate the url
    <MemoryRouter initialEntries={['/About']} initialIndex={0}>
      {/* Render the app component using the simulated router Memo */}
      <App />
    </MemoryRouter>
  );
  //Assertion that the rendered About page is present with its header
  const AboutPage = screen.getByRole('heading', { name: 'About us' });
  expect(AboutPage).toBeInTheDocument();
});

