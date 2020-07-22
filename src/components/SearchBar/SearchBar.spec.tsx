import * as React from 'react';
import {render, RenderResult, screen} from '@testing-library/react';
import {SearchBar} from './';
import {BrowserRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import {Body} from '../Body';
import '@testing-library/jest-dom/extend-expect';

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
    expect(inputButton).toBe('');
    userEvent.type(inputButton, 'Gyarados');
    expect(inputButton).toHaveValue('Gyarados');
  });
});
