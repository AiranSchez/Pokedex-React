import * as React from 'react';
import './ContentDetail.scss';
import { Pokemon } from '../../pages/PokemonDetails/types';

interface ContentDetailProps {
    pokemon: Pokemon;
}

export const ContentDetail: React.FC<ContentDetailProps> = ({ pokemon }) => {
  return (
    <div className="ContentDetail">
      <p>Nombre: {pokemon.name}</p>
      <div>
        <img src={pokemon.sprites.front_default} alt="Hola" />
      </div>
      {
        <div className="PokemonInfo">
          {pokemon.stats.map((stat: any) => (
            <div className="PokemonStats">
              <div>{stat.stat.name}</div>
              <div>{stat.base_stat}</div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

ContentDetail.displayName = 'ContentDetail';
