import Client from '../../utils/axios';
import {GenerationsInterface} from '../../components/Body/Body';

export const getPokemonGenerations = () => {
    const client = new Client();
    const array:any= [];
    client.getPokemonGenerations()
        .then(generationsObject => {
            generationsObject.forEach((generation: string) => array.push(generation));
        });
    return array;
};


