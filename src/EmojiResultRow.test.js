import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import emojis from './emojiList.json';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { getByText } from '@testing-library/dom';

test('should render the emoji list on app load', () => {
  render(<App />);
  
  // ilk açılışta bulunan emojilerin listelenmesi
  
  const first20Emojis = emojis.slice(0, 20);
  first20Emojis.forEach((emoji) => {
    expect(screen.getByText(emoji.title)).toBeInTheDocument();
  });
});
