import * as React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {NavbarDesktop} from './';
import {BrowserRouter} from 'react-router-dom';

describe('NavbarDesktop', () => {
    it('should display the default message', () => {
        const renderResult: RenderResult = render(
            <BrowserRouter>
                <NavbarDesktop/>
            </BrowserRouter>
        );
        expect(renderResult.queryByText(/Home/i)).toBeTruthy();
    });
});