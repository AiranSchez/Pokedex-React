import Client from '../../utils/axios';
import {PokemonTypes} from '../../pages/PokemonDetails/types';

export const getPokemonTypes = () => {
    const client = new Client();
    const array:string[] = [];
    client.getPokemonTypes()
        .then(types => {
            types.forEach((singleType: PokemonTypes) => array.push(singleType.name.charAt(0).toUpperCase() + singleType.name.slice(1))
            );});
    return array;
};


