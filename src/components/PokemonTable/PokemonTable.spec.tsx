import * as React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {PokemonTable} from './';
import {BrowserRouter} from 'react-router-dom';

describe('PokemonTable', () => {
    it('should display the name of the pokemon', () => {
        const PokemonTableExample: PokemonTable = [{
            sprite: '',
            name: 'bulbasaur',
            height: 1,
            id: 1
        }];
        const renderResult: RenderResult = render(
            <BrowserRouter>
                <PokemonTable flag={true} pokemonTable={PokemonTableExample}/>,
            </BrowserRouter>
        );
        expect(renderResult.queryByText(/bulbasaur/i)).toBeTruthy();
    });
});