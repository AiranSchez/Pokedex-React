import Client from '../../utils/axios';
import {GenerationsProps, Pokemon} from '../../pages/PokemonDetails/GenericInterfaces';
import {PokemonTable} from '../../components/PokemonTable';

export const getAllPokemonNames = async () : Promise<string[]>=> {
    const client = new Client();
    const names = await client.getAllPokemonNames();
    return names.map((name: string) => name);
};

export const getPokemonByGeneration = async (generation: GenerationsProps): Promise<PokemonTable[]> => {
    const client = new Client();
    const urls = await client.getPokemonUrlList(generation);
    const pokemonsDetails: Pokemon[] = await Promise.all(urls.map((url: string) => client.getPokemonDataFrom(url)));

    return pokemonsDetails.map((pokemon: Pokemon): PokemonTable => ({
            // @ts-ignore
            sprite: pokemon.data.sprites.front_default,
            name: pokemon.data.name,
            height: pokemon.data.height,
            id: pokemon.data.id,
            types: pokemon.data.types
    }));
};