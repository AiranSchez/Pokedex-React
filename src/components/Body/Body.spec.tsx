import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Body} from './';

describe('Content', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <Body/>,
    );
    expect(renderResult.queryByText('Hello from Body!')).toBeTruthy();
  });
});