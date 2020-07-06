import * as React from 'react';
import './Body.scss';
import {SearchBar} from '../SearchBar';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {ContentDetail} from '../ContentDetail';

interface PokemonItems {
    name: string;
    items: string[];
    sprites: {
        front_default: string;
    };
    stats: any;
}

const initialState:PokemonItems = {
    name: '',
    sprites: {front_default: ''},
    items: [],
    stats: [],
};

export const Body: React.FC<{}> = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [pokemons, setPokemons] = useState<PokemonItems>(initialState);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };
    useEffect(() => {
        console.log(searchTerm);
    }, [searchTerm]);

    function apiCall() {
        try {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
                .then((response) => setPokemons(response.data));
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault();
        apiCall();
        console.log(pokemons);
    };
    return (
        <div className="Content">
            <SearchBar searchTerm={searchTerm} onInputChange={onInputChange}
                       onClick={(event: React.FormEvent<Element>) => handleClick(event)}/>
            {pokemons.name !== '' &&
            <ContentDetail pokemon={pokemons}/>
            }
        </div>
    );
};

Body.displayName = 'Body';
