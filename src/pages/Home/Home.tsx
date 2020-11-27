import * as React from 'react';
import {useEffect, useState} from 'react';
import './styles.scss';
import {getPokemonById} from '../../domain/services/Pokemon';
import {Pokemon} from '../PokemonDetails/GenericInterfaces';
import {PokemonList} from '../PokemonList/PokemonList';

export const Home: React.FC<{}> = () => {
    const [pokemon, setPokemon] = useState<Pokemon>({
        data: {
            abilities: [],
            base_experience: 0,
            forms: [],
            game_indices: [],
            height: 0,
            held_items: [],
            id: 0,
            is_default: false,
            location_area_encounters: '',
            moves: [],
            name: 'Venusaur',
            order: 0,
            species: {name:'',url:''},
            sprites: {
                back_default: '',
                back_female: '',
                back_shiny: '',
                back_shiny_female: '',
                front_default: '',
                front_female: '',
                front_shiny: '',
                front_shiny_female: ''
            },
            stats: [],
            types: [],
            weight: 0
        }
    });
    useEffect(() => {
        getPokemonById(3).then((response) => setPokemon(response));
    }, []);
    return (
        <div className={'Home'}>
            <PokemonList> </PokemonList>
        </div>
    );
};

