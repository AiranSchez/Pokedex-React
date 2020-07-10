import * as React from 'react';
import { useEffect, useState } from 'react';
import './Body.scss';
import { SearchBar } from '../SearchBar';
import { PokemonTable } from '../PokemonTable';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  function apiCall() {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`).then((response) => {
      response.data.results.map((pokemon: any) => {
        axios.get(pokemon.url).then((response2) => {
          setPokemonTable((prevState) => [
            ...prevState,
            {
              sprite: response2.data.sprites.front_default,
              name: response2.data.name,
              height: response2.data.height,
              id: response2.data.id,
            },
          ]);
          setFlag(true);
        });
      });
    });
  }
  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="Content">
      <SearchBar searchTerm={searchTerm} onInputChange={onInputChange} />
      <PokemonTable />
      {flag ? (
        <table className={'PokemonIndexTable'}>
          <thead>
            <tr>
              <th>Pokemon</th>
              <th>Nombre</th>
              <th>Altura</th>
              <th>Nº en pokedex</th>
            </tr>
          </thead>
          {pokemonTable.map((pokemon: any) => (
            <tr>
              <td>
                <Link to={`/PokemonDetails/${pokemon.name}`}>
                  <img alt="imagen del pokemon" src={pokemon.sprite} />
                </Link>
              </td>
              <td>
                <Link to={`/PokemonDetails/${pokemon.name}`}>{pokemon.name}</Link>
              </td>
              <td>{pokemon.height}</td>
              <td>{pokemon.id}</td>
            </tr>
          ))}
        </table>
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
};

Body.displayName = 'Body';
