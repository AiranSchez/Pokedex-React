import * as React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { SearchBar } from './';
import { BrowserRouter } from 'react-router-dom';

describe('SearchBar', () => {
  it('check if button is rendered', () => {
    const irrelevantText = 'pikachu';
    const renderResult: RenderResult = render(
      <BrowserRouter>
        <SearchBar searchTerm={irrelevantText} />
      </BrowserRouter>,
    );
    expect(renderResult.queryByText('Search')).toBeTruthy();
  });

  it('check if input is rendered', () => {
    const irrelevantText = 'pikachu';
    const renderResult: RenderResult = render(
        <BrowserRouter>
          <SearchBar searchTerm={irrelevantText} />
        </BrowserRouter>,
    );
    expect(renderResult.queryByPlaceholderText('Pikachu, Bulbasaur...')).toBeTruthy();
  });

  it('check if input can be writted', () => {

    const irrelevantText = 'pikachu';
    const renderResult = render(
        <BrowserRouter>
          <SearchBar searchTerm={irrelevantText} />
        </BrowserRouter>,
    );
    // fireEvent.change(input, { target: { value: 'a' } });
    const input = renderResult.getByPlaceholderText('Pikachu, Bulbasaur...');
    expect(input.innerHTML).toBe('');
    fireEvent.change(renderResult.getByPlaceholderText('Pikachu, Bulbasaur...'), { target: { value: 'a' } });
    expect(renderResult.getByPlaceholderText('Pikachu, Bulbasaur...')).toBe('a');
  });

});
