import Client from '../../utils/axios';
import {GenerationsInterface} from '../../pages/PokemonDetails/GenericInterfaces';

export const getPokemonGenerations = async (): Promise<GenerationsInterface[]> => {
    const client = new Client();
    const generations = await client.getPokemonGenerations();
    return generations.map((generation: GenerationsInterface): GenerationsInterface => generation);
};


