import * as React from 'react';
import { useEffect, useState } from 'react';
import './styles.scss';
import { ContentDetail } from '../../components/ContentDetail';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../assets/Pokeball/pokeball-style.css';
import { Pokemon } from './types';

interface PokeProps {
  searchTerm: string;
}

export const PokemonDetails: React.FC<PokeProps> = () => {
  const { PokemonURL: urlParam } = useParams();
  const [flag, setFlag] = useState(false);
  const [newPokemon, setNewPokemon] = useState<Pokemon>();

  useEffect(() => {
    try {
      setFlag(true);
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${urlParam.toLowerCase()}`)
        .then((response) => {
          setNewPokemon((prevState) => ({
            ...prevState,
            name: response.data.name,
            sprites: response.data.sprites,
            stats: response.data.stats,
          }));
          setFlag(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, [urlParam]);

  return (
    <div className="PokemonDetails">
      {flag ? (
        <div className="pokeball">
          <div className="pokeball__button" />
        </div>
      ) : newPokemon !== undefined ? (
        <ContentDetail pokemon={newPokemon} />
      ) : (
        <div>me mori</div>
      )}
    </div>
  );
};

PokemonDetails.displayName = 'PokemonDetails';
