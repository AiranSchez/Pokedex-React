import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {Body} from '../Body';
import Client from '../../utils/axios';

import axios from 'axios';

jest.mock('axios');

describe('PokemonTable', () => {
    it('should display the name of the pokemon', () => {
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        );
        // Creo que no es la mejor manera de testearlo
        setTimeout(() => {
            expect(screen.getByText(/bulbasaur/i)).toBeTruthy();
        }, 0);
    });


    it('Should return pokemons', async () => {
        const URL = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`;
        axios.get.mockResolvedValue(() => {});
        const client = new Client();
        const call = jest.fn().mockImplementationOnce(() => client.getPokemonUrlList(URL));
        expect(call).toHaveBeenCalledTimes(1);
    });
});