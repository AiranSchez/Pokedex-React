import * as React from 'react';
import './PokemonTable.scss';
import {Link} from 'react-router-dom';

export interface PokemonTableProps {
    isLoading: boolean;
    pokemonTable: PokemonTable;
    selectedType?: string;
}

export type PokemonTable = {
    sprite: string;
    name: string;
    height: number;
    id: number;
    types: {
        type: {
            name: string;
        }
    }
}[];
export const PokemonTable: React.FC<PokemonTableProps> = ({isLoading, pokemonTable, selectedType}) => {
    const pokemonTableContent = (pokemon: any) => {
        return(
            <div className={'Filas'}>
                <div>
                    <Link to={`/PokemonDetails/${pokemon.name}`}>
                        <img alt="imagen del pokemon" src={pokemon.sprite}/>
                    </Link>
                </div>
                <div>
                    <Link to={`/PokemonDetails/${pokemon.name}`}>{pokemon.name}</Link>
                </div>
                <div>
                    {pokemon.height/10}m
                </div>
                <div>
                    {pokemon.id}
                </div>
                <div className={'types'}>
                    <div className={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</div>
                    {pokemon.types[1] &&
                    <div className={pokemon.types[1].type.name}>
                        {pokemon.types[1].type.name}
                    </div>
                    }
                </div>
            </div>
        );
    };
    return (
        <div className="PokemonTable">
            {isLoading ? (
                <div className={'PokemonIndexTable'}>
                    <div className={'Filas'}>
                        <div>Pokemon</div>
                        <div>Nombre</div>
                        <div>Altura</div>
                        <div>Pokedex</div>
                        <div>Type</div>
                    </div>
                    {selectedType &&
                        pokemonTable.filter((pokemon:any) => selectedType.toLowerCase() === pokemon.types[0].type.name ).map((pokemon: any) => (
                            pokemonTableContent(pokemon)
                    ))
                    }
                    {selectedType === 'all' &&
                        pokemonTable.map((pokemon: any) => (
                            pokemonTableContent(pokemon)
                        ))
                    }
                </div>
            ) : (
                <div>Cargando...</div>
            )}
        </div>
    );
};
PokemonTable.displayName = 'PokemonTable';
