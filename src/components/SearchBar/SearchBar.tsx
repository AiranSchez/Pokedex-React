import * as React from 'react';
import './SearchBar.scss';

interface SearchBarProps {
    searchTerm: string;
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => string | void;
    // pokemontypes: any;
}

export const SearchBar: React.FC<SearchBarProps> = ({searchTerm, onInputChange, /*pokemonTypes*/}) => {
    return (
        <div className="SearchBar">
            <span>Search for Pokemons</span>
            <input
                type="search"
                placeholder="Pikachu, Bulbasaur..."
                value={searchTerm}
                onChange={onInputChange}
                required
            />

        </div>
    );
};

SearchBar.displayName = 'SearchBar';
