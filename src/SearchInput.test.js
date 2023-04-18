import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import emojis from './emojiList.json';
import "@testing-library/jest-dom"

test('should render filtered emojis when search term is entered', () => {
  render(<App />);
  
  // Arama kutusunu seçin ve değerini ayarlayın
  const searchInput = screen.getByTestId('search-input');
  userEvent.type(searchInput, 'heart');

  // Filtrelenmiş emoji listesini kontrol edin
  const filteredEmojis = emojis.filter((emoji) =>
    emoji.title.toLowerCase().includes('Kissing')
  );
  filteredEmojis.forEach((emoji) => {
    expect(screen.getByText(emoji.title)).toBeInTheDocument();
  });
});
