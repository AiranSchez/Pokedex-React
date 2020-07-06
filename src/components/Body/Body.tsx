import * as React from 'react';
import {useState} from 'react';
import './Body.scss';
import {SearchBar} from '../SearchBar';


export const Body: React.FC<{}> = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };
    return (
        <div className="Content">
            <SearchBar searchTerm={searchTerm} onInputChange={onInputChange}/>
        </div>
    );
};

Body.displayName = 'Body';
