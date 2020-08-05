import * as React from 'react';
import './styles.scss';
import {SearchBar} from '../../components/SearchBar';

export const Home: React.FC<{}> = () => {
    return (
        <div className={'Home'}>
            <div className={'Introduction'}>
                <h3>Todo lo que deseas saber sobre los Pokémons y mucho más</h3>
            </div>
            <SearchBar/>
            <div className="Contenido">
                <h1>¿Quieres saber cómo funciona el mundo de los Pokémon?</h1>
                <p>Es muy sencillo</p>
                <h2>Tabla de tipos</h2>
                <h2>Generaciones</h2>
                <h2>Pokemons especiales</h2>
            </div>
        </div>
    );
};

