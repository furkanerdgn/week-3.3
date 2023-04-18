import Header from './Header';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

it('renders the title', () => {
    render(<Header />);
    const titleElement = screen.getByText("Emoji Search");
    expect(titleElement).toBeInTheDocument();
  });
