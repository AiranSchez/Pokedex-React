import Client from '../../utils/axios';
import {GenerationsProps} from '../../pages/PokemonDetails/types';

export const getAllPokemonNames = () => {
    const client = new Client();
    const array: any = [];
    client.getAllPokemonNames()
        .then(pokemonName => {
            pokemonName.forEach((name: string) => array.push(name));
        });
    return array;
};

export const getPokemonByGeneration = (generation: GenerationsProps) => {
    const client = new Client();
    const array: string[] = [];
    client.getPokemonUrlList(generation)
        .then(urls => {
            return Promise.all(urls.map((url:string) => client.getPokemonDataFrom(url)))
                .then(pokemons => pokemons.forEach((pokemon:any) => array.push(pokemon.data)));});
    return array;
};

// export const getPokemonByGeneration = (generation: GenerationsProps) => {
//     const client = new Client();
//     const pokemonTable: any = [];
//     client.getPokemonUrlList(generation)
//         .then(urls => {
//             return Promise.all(urls.map((url: string) => client.getPokemonDataFrom(url)))
//                 .then(pokemons => {
//                     pokemons.forEach((pokemon: any) => {
//                         pokemonTable.push(
//                                 {
//                                     sprite: pokemon.data.sprites.front_default,
//                                     name: pokemon.data.name,
//                                     height: pokemon.data.height,
//                                     id: pokemon.data.id,
//                                     types: pokemon.data.types
//                                 });
//                     });
//                 });
//         });
//     return pokemonTable;
// };