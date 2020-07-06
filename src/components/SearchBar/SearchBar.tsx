import * as React from 'react';
import './SearchBar.scss';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';

interface SearchBarProps {
    searchTerm: string;
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => string | void;
    // pokemontypes: any;
}

export const SearchBar: React.FC<SearchBarProps> = ({searchTerm, onInputChange, /*pokemonTypes*/}) => {
    const [randomNumber, setRandomNumber] = useState(1);
    const randomNumberGenerator = () =>{
        setRandomNumber(Math.floor(Math.random() * 152));
    };
    useEffect(()=> {
        randomNumberGenerator();
    },[searchTerm]);
    return (
        <div className="SearchBar">
            <form>
                <span>Search for Pokemons</span>
                <input
                    type="search"
                    placeholder="Pikachu, Bulbasaur..."
                    value={searchTerm}
                    onChange={onInputChange}
                    required
                />
                {searchTerm !== '' &&
                <Link to={`/PokemonDetails/${searchTerm}`}>
                    <button>Search</button>
                </Link>
                }
                {searchTerm === '' &&
                <Link to={`/PokemonDetails/${randomNumber}`}>
                    <button>Search</button>
                </Link>
                }
            </form>
        </div>
    );
};

SearchBar.displayName = 'SearchBar';
