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
}

export const Body: React.FC<{}> = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [pokemonTable, setPokemonTable] = useState<PokemonTableProps[]>([]);
    const [flag, setFlag] = useState(false);
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // function apiCall() {
    //     axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`).then((response) => {
    //         response.data.results.map((pokemon: any) => {
    //             axios.get(pokemon.url).then((response2) => {
    //                 setPokemonTable((prevState) => [
    //                     ...prevState,
    //                     {
    //                         sprite: response2.data.sprites.front_default,
    //                         name: response2.data.name,
    //                         height: response2.data.height,
    //                         id: response2.data.id,
    //                     },
    //                 ]);
    //                 setFlag(true);
    //             });
    //         });
    //     });
    // }
    //
    function apiCall() {
        const client = new Client();
        // client.getInfo('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0').then((response) => response.data.results.map((pokemon: PokemonList) => {
        //     const pokemonInfo = client.getInfo(pokemon.url);
        //     pokemonInfo.then((secondResponse) => {
        //         setPokemonTable((prevState) => [
        //             ...prevState,
        //             {
        //                 sprite: secondResponse.data.sprites.front_default,
        //                 name: secondResponse.data.name,
        //                 height: secondResponse.data.height,
        //                 id: secondResponse.data.id,
        //             },
        //         ]);
        //         setFlag(true);
        //     });
        // }));

        client.getPokemonUrlList()
            .then(urls => urls.map((url: string) => client.getPokemonDataFrom(url)
                .then(pokemon => {
                    setPokemonTable((prevState) => [
                        ...prevState,
                        {
                            sprite: pokemon.data.sprites.front_default,
                            name: pokemon.data.name,
                            height: pokemon.data.height,
                            id: pokemon.data.id,
                        },
                    ]);
                    setFlag(true);
                })));
    }

    useEffect(() => {
        apiCall();
    }, []);
//
    return (
        <div className="Content">
            <SearchBar searchTerm={searchTerm} onInputChange={onInputChange}/>
            <PokemonTable flag={flag} pokemonTable={pokemonTable}/>
        </div>
    );
};

Body.displayName = 'Body';
