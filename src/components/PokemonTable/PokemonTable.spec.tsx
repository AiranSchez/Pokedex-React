import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { PokemonTable} from './';

describe('PokemonTable', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <PokemonTable/>,
    );
    expect(renderResult.queryByText('Hello from PokemonTable!')).toBeTruthy();
  });
});