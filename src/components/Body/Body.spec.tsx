import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Body } from './';
import { BrowserRouter } from 'react-router-dom';

describe('Content', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>,
    );
    expect(renderResult).toBeTruthy();
  });
});
