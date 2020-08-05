import Client from '../../utils/axios';
import {PokemonTypes} from '../../pages/PokemonDetails/GenericInterfaces';

export const getPokemonTypes = async (): Promise<string[]> => {
    const client = new Client();
    const types = await client.getPokemonTypes();
    return types.map((type: PokemonTypes): string => type.name.charAt(0).toUpperCase() + type.name.slice(1) );
};


    // const array:string[] = [];
    // client.getPokemonTypes()
    //     .then(types => {
    //         types.forEach((singleType: PokemonTypes) => array.push(singleType.name.charAt(0).toUpperCase() + singleType.name.slice(1))
    //         );});
    // return array;


