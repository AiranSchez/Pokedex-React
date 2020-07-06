import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { SearchBar} from './';

describe('SearchBar', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <SearchBar/>,
    );
    expect(renderResult.queryByText('Hello from SearchBar!')).toBeTruthy();
  });
});