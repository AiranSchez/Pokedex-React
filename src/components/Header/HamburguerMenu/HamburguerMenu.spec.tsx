import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { HamburguerMenu} from './';

describe('HamburguerMenu', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <HamburguerMenu/>,
    );
    expect(renderResult.queryByText('Hello from HamburguerMenu!')).toBeTruthy();
  });
});