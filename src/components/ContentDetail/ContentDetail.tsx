import * as React from 'react';
import './ContentDetail.scss';

interface ContentDetailProps {
    pokemon?: any;
}

export const ContentDetail: React.FC<ContentDetailProps> = ({pokemon}) => (
  <div className="ContentDetail">
      <div>
          {pokemon &&
            <img src={pokemon.sprites.front_default} alt="Hola"/>
          }
      </div>
      <div className="PokemonInfo">
            {pokemon &&
                pokemon.stats.map( (stat:any) => (
                <div className="PokemonStats">
                    <div>{stat.stat.name}</div>
                    <div>{stat.base_stat}</div>
                </div>
                ))}
      </div>
  </div>
);

ContentDetail.displayName = 'ContentDetail';
