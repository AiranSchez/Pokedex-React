import * as React from 'react';
import {useEffect, useState} from 'react';
import './Body.scss';
import {SearchBar} from '../SearchBar';
import {PokemonTable} from '../PokemonTable';
import Client from '../../utils/axios';

interface PokemonTableProps {
    sprite: string;
    name: string;
    height: number;
    id: number;
    types:{
        type:{
            name: string;
        }
    };
}

interface PokemonTypes {
    name: string;
    url: string;
}

export const Body: React.FC<{}> = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [pokemonTable, setPokemonTable] = useState<PokemonTableProps[]>([]);
    const [flag, setFlag] = useState(false);
    const [type, setType] = useState<string[]>([]);
    const [selectedType, setSelectedType] = useState<string>('all');
    // const [pagination, setPagination] = useState<number>(0);
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    function apiCall(offset: string) {
        const client = new Client();
        client.getPokemonUrlList(offset)
            .then(urls => {
                return Promise.all(urls.map((url: string) => client.getPokemonDataFrom(url)))
                    .then(pokemons => {
                        pokemons.forEach((pokemon: any) => {
                            setPokemonTable((prevState) =>
                                [
                                    ...prevState,
                                    {
                                        sprite: pokemon.data.sprites.front_default,
                                        name: pokemon.data.name,
                                        height: pokemon.data.height,
                                        id: pokemon.data.id,
                                        types: pokemon.data.types
                                    }]);
                            setFlag(true);
                        });
                    });
            });
        client.getPokemonTypes().then(types => types.forEach((singleType: PokemonTypes) => setType((prevState => [...prevState, singleType.name.charAt(0).toUpperCase()+ singleType.name.slice(1)]))));
    }
    useEffect(() => {
        apiCall('0');
    }, []);
//
    const setPokemonType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(event.target.value);
    };

    // const nextPage = () => {
    //     setPokemonTable([]);
    //     setPagination(pagination + 10);
    //     apiCall(pagination.toString());
    // };
    // const prevPage = () => {
    //     setPokemonTable([]);
    //     setPagination(pagination - 10);
    //     apiCall(pagination.toString());
    // };

    return (
        <div className="Content">
            <SearchBar searchTerm={searchTerm} onInputChange={onInputChange}/>
            <select name="" id="" onChange={setPokemonType}>
                <option value="all">- Elige un tipo -</option>
                {
                    type.map((typeOfPokemon:string) => <option value={typeOfPokemon}>{typeOfPokemon}</option>)
                }
            </select>
            {selectedType &&
                <p>Has seleccionado: {selectedType} </p>}
            <PokemonTable flag={flag} pokemonTable={pokemonTable} selectedType={selectedType}/>
            {/*<button onClick={prevPage}>Atras</button>*/}
            {/*<button onClick={nextPage}>Siguiente</button>*/}
        </div>
    );
};

Body.displayName = 'Body';
