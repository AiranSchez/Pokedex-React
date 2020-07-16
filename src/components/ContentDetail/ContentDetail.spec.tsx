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
        // const client = new Client();
        // client.getPokemonDataFrom('https://pokeapi.co/api/v2/pokemon/ditto').then(response => ({...pokemon, name: response.data.name,}));
        const renderResult: RenderResult = render(
            <ContentDetail pokemon={pokemon}/>,
        );
        // expect(pokemon).toBe('Hola');
        expect(renderResult.queryByText(/Ditto/i)).toBeTruthy();
        expect(renderResult.queryByText(/Pikachu/i)).toBeFalsy();
    });
    it('should display the image of the Pokemon', () => {
        const pokemon: Pokemon = {
            stats: [],
            name: 'Ditto',
            sprites: {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
            }
        };
        const renderResult: RenderResult = render(
            <ContentDetail pokemon={pokemon}/>,
        );
        expect(renderResult.getByAltText(/Imagen del pokemon/i));
    });
});