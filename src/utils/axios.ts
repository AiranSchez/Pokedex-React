import axios from 'axios';
import {GenerationsProps, PokemonList} from '../pages/PokemonDetails/GenericInterfaces';


export default class Client {
   async getPokemonUrlList(generation: GenerationsProps){
        return await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${generation.limit}&offset=${generation.offset}`)
            .then(response => response.data.results
            .map((pokemon: PokemonList) => {return pokemon.url;}));
    }

    async getAllPokemonNames(){
        return Promise.resolve(await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=805&offset=0`)
            .then(response => response.data.results
                .map((pokemon: PokemonList) => {return pokemon.name;})));
    }

    async getPokemonDataFrom(url:string){
        return await axios.get(url);
    }

    async getPokemonDataFromUrlWithParams(param:string){
        return await axios.get(`https://pokeapi.co/api/v2/pokemon/${param.toLowerCase()}`);
    }

    async getPokemonTypes(){
        return await axios.get('https://pokeapi.co/api/v2/type').then(response => {return response.data.results;});
    }

    async getPokemonGenerations(){
       return await axios.get('https://pokeapi.co/api/v2/generation').then(response => {return response.data.results;});
    }

}