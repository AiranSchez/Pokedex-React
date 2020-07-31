/* eslint-disable no-use-before-define */
import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import './SearchBar.scss';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Context, ContextProps} from '../../Context';

export const SearchBar: React.FC<{}> = () => {
    const [randomNumber, setRandomNumber] = useState(1);
    const [selected, setSelected] = useState('');
    const randomNumberGenerator = () => {
        setRandomNumber(Math.floor(Math.random() * 152));
    };
    const context = useContext<ContextProps>(Context);
    //
    useEffect(() => {
        randomNumberGenerator();
    }, []);
    return (
        <div className="SearchBar">
                <span>Search for Pokemons</span>
                <div className={'Content'}>
                    <Autocomplete
                        id="combo-box-demo"
                        options={context.pokemonList}
                        getOptionLabel={(option) => option}
                        onInputChange={(event, newInputValue) => {
                            setSelected(newInputValue);
                        }}
                        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                    />
                    {selected !== '' ? (
                            <button className={'SearchButton'}>
                                <Link to={`/PokemonDetails/${selected}`}>
                                    Search
                                </Link>
                            </button>
                        ) :
                        <button className={'SearchButton'}>
                            <Link to={`/PokemonDetails/${randomNumber}`}>
                                Search
                            </Link>
                        </button>
                    }
                </div>

        </div>
    );
};

SearchBar.displayName = 'SearchBar';
