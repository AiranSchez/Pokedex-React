import * as React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { HamburguerMenu} from './';
import userEvent from '@testing-library/user-event';

describe('HamburguerMenu', () => {
  it('should display the default message', () => {
    const fn = jest.fn();
    render(
      <HamburguerMenu/>,
    );
    userEvent.click(screen.getByLabelText('HamburguerMenu'));
    expect(screen.getByLabelText('HamburguerMenu')).toHaveBeenCalledTimes(1);
  });
});