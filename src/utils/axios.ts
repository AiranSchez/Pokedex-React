import axios from 'axios';
import {PokemonList} from '../pages/PokemonDetails/types';

interface ClientUrls {
    url1: string;
}
export default class Client implements ClientUrls{
    url1: string = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
    async getInfo (url:string) {
        return await axios.get(url);
    }

    async getPokemonUrlList(){
        return await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
            .then(response => response.data.results
            .map((pokemon: PokemonList) => {return pokemon.url;}));
    }

    async getPokemonDataFrom(url:string){
        return await axios.get(url);
    }
}