import * as React from 'react';
import {fireEvent, render, RenderResult, screen} from '@testing-library/react';
import { SearchBar } from './';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

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

    let irrelevantText = 'pikachu';

    function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
      irrelevantText = e.target.value;
    }

    render(
        <BrowserRouter>
          <SearchBar searchTerm={irrelevantText} onInputChange={handleChange}/>
        </BrowserRouter>,
    );
    const inputButton = screen.getByPlaceholderText('Pikachu, Bulbasaur...');
    // @ts-ignore
    expect(inputButton.value).toBe('pikachu');
    userEvent.type(inputButton, 'Gyarados');
    // @ts-ignore
    expect(inputButton.value).toBe('Gyarados');
  });
});
