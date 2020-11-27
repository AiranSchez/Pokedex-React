import * as React from 'react';
import {Pokemon} from '../../pages/PokemonDetails/GenericInterfaces';

interface SectionProps {
    pokemonData: Pokemon;
}

export const Section: React.FC<SectionProps> = ({pokemonData}) => {
    return (
        <div>
            {pokemonData &&
                <p>{pokemonData.data.name}</p>
            }
        </div>
    );
};