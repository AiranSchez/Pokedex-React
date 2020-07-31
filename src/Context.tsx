import React, {createContext, useEffect, useState} from 'react';
import {getAllPokemonNames} from './domain/services/Pokemon';
import {Generations, GenerationsProps} from './pages/PokemonDetails/types';
import {getPokemonGenerations} from './domain/services/PokemonGenerations';

export interface ContextProps {
    // pokemonTable: PokemonTableProps[];
    pokemonTable: any;
    pokemonList: string[];
    generations: string[];
    setGenerations: (params: string[]) => void;
    theme: string;
    setTheme: (param: string) => void;
    setSelectedGeneration: (params: GenerationsProps) => void;
    selectedGeneration: GenerationsProps;
}

// @ts-ignore
export const Context = createContext<ContextProps>();

// @ts-ignore
export const Provider = ({children}) => {
    const [theme, setTheme] = useState('#EF5350');
    const [pokemonList, setPokemonList] = useState<string[]>([]);
    const [selectedGeneration, setSelectedGeneration] = useState<GenerationsProps>({
        limit: Generations.first.limit,
        offset: Generations.first.offset,
        name: Generations.first.name
    });

    useEffect(() => {
        setPokemonList(getAllPokemonNames);
    },[]);
    // useEffect(() => {
    //     switch (selectedGeneration.name) {
    //         case 'generation-i': setPokemonTable({...pokemonTable, firstgeneration: getPokemonByGeneration(selectedGeneration)}); break;
    //         case 'generation-ii': setPokemonTable({...pokemonTable, secondgeneration: getPokemonByGeneration(selectedGeneration)}); break;
    //         case 'generation-iii': setPokemonTable({...pokemonTable, thirdgeneration: getPokemonByGeneration(selectedGeneration)}); break;
    //         case 'generation-iv': setPokemonTable({...pokemonTable, fourthgeneration: getPokemonByGeneration(selectedGeneration)}); break;
    //         case 'generation-v': setPokemonTable({...pokemonTable, fifthgeneration: getPokemonByGeneration(selectedGeneration)}); break;
    //         case 'generation-vi': setPokemonTable({...pokemonTable, sixthgeneration: getPokemonByGeneration(selectedGeneration)}); break;
    //         case 'generation-vii': setPokemonTable({...pokemonTable, seventhgeneration: getPokemonByGeneration(selectedGeneration)}); break;
    //     }
    // },[selectedGeneration]);
    const value = {
        pokemonList,
        selectedGeneration,
        setSelectedGeneration: (params: GenerationsProps) => {
            setSelectedGeneration(params);
        },
        theme,
        setTheme: (param: string) => {
            switch (param) {
                case 'grass':
                    setTheme('#7c5');
                    break;
                case 'poison':
                    setTheme('#a59');
                    break;
                case 'fire':
                    setTheme('#f42');
                    break;
                case 'flying':
                    setTheme('#89f');
                    break;
                case 'normal':
                    setTheme('#dbdbdb');
                    break;
                case 'water':
                    setTheme('#39f');
                    break;
                case 'bug':
                    setTheme('#ab2');
                    break;
                case 'dark':
                    setTheme('#754');
                    break;
                case 'electric':
                    setTheme('#fc3');
                    break;
                case 'psychic':
                    setTheme('#f59');
                    break;
                case 'ground':
                    setTheme('#db5');
                    break;
                case 'rock':
                    setTheme('#ba6');
                    break;
                case 'fairy':
                    setTheme('#e9e');
                    break;
                case 'steel':
                    setTheme('#aab');
                    break;
                case 'fighting':
                    setTheme('#b54');
                    break;
                case 'ice':
                    setTheme('#6cf');
                    break;
                case 'ghost':
                    setTheme('#66b');
                    break;
                case 'dragon':
                    setTheme('#76e');
                    break;
            }
        },
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};
