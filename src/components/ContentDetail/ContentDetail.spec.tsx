import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ContentDetail} from './';

describe('ContentDetail', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <ContentDetail/>,
    );
    expect(renderResult.queryByText('Hello from ContentDetail!')).toBeTruthy();
  });
});