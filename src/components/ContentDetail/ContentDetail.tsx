import * as React from 'react';
import './ContentDetail.scss';
import {Pokemon} from '../../pages/PokemonDetails/GenericInterfaces';

interface ContentDetailProps {
    pokemon: Pokemon;
}

export const ContentDetail: React.FC<ContentDetailProps> = ({pokemon}) => {
    return (
        <div className="ContentDetail">
            <div className="PokemonInfo">
                <h1>Pokédex data</h1>
                <div className={'PokemonImage'}>
                    <img src={pokemon.data.sprites.front_default} alt="Imagen del pokemon"/>
                </div>
                <div>
                    <p>National Nº: {pokemon.data.id}</p>
                    <p>Type: {
                        <div>
                            {pokemon.data.types.map((type: any) => (
                                <div className="PokemonStats">
                                    <div>{type.type.name}</div>
                                </div>
                            ))}
                        </div>
                    }</p>
                    <p>Species: {pokemon.data.species.name}</p>
                    <p>Height: {pokemon.data.height}</p>
                    <p>Weight: {pokemon.data.weight}</p>
                    <p>Abilities:
                        {
                            <div>
                                {pokemon.data.abilities.map((ability: any) => (
                                    <div>{ability.is_hidden ? ability.ability.name + ' (Hidden ability)' : ability.ability.name}</div>
                                ))}
                            </div>
                        }
                    </p>
                </div>
                {
                    <div className="PokemonInfo">
                        {pokemon.data.stats.map((stat: any) => (
                            <div className="PokemonStats">
                                <div>{stat.stat.name}</div>
                                <div>{stat.base_stat}</div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
};

ContentDetail.displayName = 'ContentDetail';
