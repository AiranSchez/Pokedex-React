import * as React from 'react';
import {useState} from 'react';
import './Body.scss';
import {SearchBar} from '../SearchBar';
import {Link} from 'react-router-dom';

export const Body: React.FC<{}> = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };
    return (
        <div className="Content">
            <SearchBar searchTerm={searchTerm} onInputChange={onInputChange}
            />
            <Link to={`/PokemonDetails/${searchTerm}`}>
                search
            </Link>
        </div>
    );
};

Body.displayName = 'Body';
