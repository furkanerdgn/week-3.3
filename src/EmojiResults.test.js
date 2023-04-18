import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import emojis from "./emojiList.json";

test('clicking an emoji copies it to clipboard', () => {
    render(<App />);
    const emoji = document.querySelector(`[data-clipboard-text="${emojis[0].symbol}"]`);
    
    document.execCommand = jest.fn();
  
    fireEvent.click(emoji);
  
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });
  


