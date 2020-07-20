import axios from 'axios';
import {PokemonList} from '../pages/PokemonDetails/types';

export default class Client {
   async getPokemonUrlList(offset:string){
        return await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=${offset}`)
            .then(response => response.data.results
            .map((pokemon: PokemonList) => {return pokemon.url;}));
    }

    async getPokemonDataFrom(url:string){
        return await axios.get(url);
    }

    async getPokemonTypes(){
        return await axios.get('https://pokeapi.co/api/v2/type').then(response => {return response.data.results;});
    }
}