import * as React from 'react';
import './PokemonTable.scss';
import {Link} from 'react-router-dom';

interface PokemonTableProps {
    flag: boolean;
    pokemonTable: PokemonTable;
}

export type PokemonTable = {
    sprite: string;
    name: string;
    height: number;
    id: number;
}[];
export const PokemonTable: React.FC<PokemonTableProps> = ({flag, pokemonTable}) => {
    const compare = (a:any,b:any) => {
        const idA = a.id;
        const idB = b.id;
        let comparison = 0;
        if(idA > idB){
            comparison = 1;
        }
        else if(idA < idB){
            comparison = -1;
        }
        return comparison;
    };

    return (
        <div className="PokemonTable">
            {flag ? (
                <div className={'PokemonIndexTable'}>
                    <div className={'Filas'}>
                        <div>Pokemon</div>
                        <div>Nombre</div>
                        <div>Altura</div>
                        <div>Nº en pokedex</div>
                    </div>
                    {pokemonTable.sort(compare).map((pokemon: any) => (
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
                        </div>
                    ))}
                </div>
            ) : (
                <div>Cargando...</div>
            )}
        </div>
    );
};
PokemonTable.displayName = 'PokemonTable';
