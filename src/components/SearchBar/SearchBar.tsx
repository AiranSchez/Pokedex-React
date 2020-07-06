import * as React from 'react';
import './SearchBar.scss';
import {Link} from 'react-router-dom';

interface SearchBarProps {
    searchTerm: string;
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => string | void;
    onClick?: any;
    // pokemontypes: any;
}

export const SearchBar: React.FC<SearchBarProps> = ({searchTerm, onInputChange, onClick, /*pokemonTypes*/}) => {
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
                <Link to="/PokemonDetails">
                    <button type="submit" onClick={onClick}>Search</button>
                </Link>
            </form>
        </div>
    );
};

SearchBar.displayName = 'SearchBar';
