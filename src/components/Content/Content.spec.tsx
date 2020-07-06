import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Content} from './';

describe('Content', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <Content/>,
    );
    expect(renderResult.queryByText('Hello from Content!')).toBeTruthy();
  });
});