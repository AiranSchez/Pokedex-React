import * as React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {ContentDetail} from './';
import {Pokemon} from '../../pages/PokemonDetails/types';

describe('ContentDetail', () => {
    it('should display the name of the Pokemon', () => {
        const pokemon: Pokemon = {
            stats: [],
            name: 'Ditto',
            sprites: {
                front_default: '',
            }
        };
        const renderResult: RenderResult = render(
            <ContentDetail pokemon={pokemon}/>,
        );
        expect(renderResult.queryByText('Nombre: Ditto')).toBeTruthy();
        expect(renderResult.queryByText('Nombre: Pikachu')).toBeFalsy();
    });
});