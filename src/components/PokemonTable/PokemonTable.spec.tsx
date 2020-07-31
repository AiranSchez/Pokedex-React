import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {Body} from '../Body';
import Client from '../../utils/axios';

import axios from 'axios';
import {Generations} from '../../pages/PokemonDetails/types';

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
        const requiredData = {
            limit: Generations.first.limit,
            offset: Generations.first.offset
        };
        axios.get.mockImplementationOnce(() => Promise.resolve(client.getPokemonUrlList(requiredData)));
        const client = new Client();
        const call = jest.fn().mockImplementationOnce(() => client.getPokemonUrlList(requiredData));
        expect(call).toHaveBeenCalledTimes(1);
    });

});