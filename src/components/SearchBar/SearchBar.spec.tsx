import * as React from 'react';
import {render, RenderResult, screen} from '@testing-library/react';
import {SearchBar} from './';
import {BrowserRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import {Body} from '../Body';

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
    render(
        <BrowserRouter>
          <Body/>
        </BrowserRouter>,
    );
    const inputButton = screen.getByPlaceholderText('Pikachu, Bulbasaur...');
    // @ts-ignore
    expect(inputButton.value).toBe('');
    userEvent.type(inputButton, 'Gyarados');
    // @ts-ignore
    expect(inputButton.value).toBe('Gyarados');
  });
});
