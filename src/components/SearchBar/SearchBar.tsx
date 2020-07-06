import * as React from 'react';
import './SearchBar.scss';
import {useState} from 'react';

interface SearchBarProps {
    searchTerm: string;
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => string | void;
    onClick?: any;
}

export const SearchBar: React.FC<SearchBarProps> = ({searchTerm, onInputChange, onClick}) => {
    return(
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
                <button type="submit" onClick={onClick}>Search</button>
            </form>
        </div>
    );
};



SearchBar.displayName = 'SearchBar';
