import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { NavbarDesktop} from './';

describe('NavbarDesktop', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <NavbarDesktop/>,
    );
    expect(renderResult.queryByText('Hello from NavbarDesktop!')).toBeTruthy();
  });
});