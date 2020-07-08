import * as React from 'react';
import {useEffect, useState} from 'react';
import './Body.scss';
import {SearchBar} from '../SearchBar';
import {PokemonTable} from '../PokemonTable';
import axios from 'axios';

export const Body: React.FC<{}> = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };
    const [pokemonTable, setPokemonTable] = useState([{}]);

    useEffect(() => {
        try {
            axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
                .then((response) => {
                        response.data.results.map((pokemon: any) => {
                            axios.get(pokemon.url)
                                .then((response2) => {
                                        setPokemonTable(prevState => [...prevState, {
                                            name: response2.data.name,
                                            height: response2.data.height,
                                            id: response2.data.id,
                                            sprite: response2.data.sprites.front_default
                                        }]);
                                    }
                                );
                        });
                    }
                );

        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className="Content">
            <SearchBar searchTerm={searchTerm} onInputChange={onInputChange}/>
            <PokemonTable/>
            {pokemonTable.map((pokemon:any)=> <div> <img src={pokemon.sprite}/> {pokemon.name} {pokemon.height} {pokemon.id} </div>)}
        </div>
    );
};

Body.displayName = 'Body';
