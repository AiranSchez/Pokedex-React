import * as React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {Header} from './index';
import {BrowserRouter} from 'react-router-dom';

describe('Header', () => {
    it('should display the default message', () => {
        const renderResult: RenderResult = render(
            <BrowserRouter>
                <Header/>,
            </BrowserRouter>
        );
        expect(renderResult.queryByText(/Home/i)).toBeTruthy();
    });
});