import * as React from 'react';
import {useEffect, useState} from 'react';
import './styles.scss';
import {ContentDetail} from '../../components/ContentDetail';
import {useParams} from 'react-router-dom';
import '../../assets/Pokeball/pokeball-style.css';
import {Pokemon} from './types';
import Client from '../../utils/axios';

interface PokeProps {
    searchTerm: string;
}

export const PokemonDetails: React.FC<PokeProps> = () => {
    const {PokemonURL: urlParam} = useParams();
    const [flag, setFlag] = useState(false);
    const [newPokemon, setNewPokemon] = useState<Pokemon>();

    useEffect(() => {
        setFlag(true);
        const client = new Client();
        const info = client.getPokemonDataFromUrlWithParams(urlParam);
        info.then((response) => {
            setNewPokemon((prevState) => ({
                ...prevState,
                name: response.data.name,
                sprites: response.data.sprites,
                stats: response.data.stats,
            }));
            setFlag(false);
        });
    }, [urlParam]);

    return (
        <div className="PokemonDetails">
            {flag ? (
                <div className="pokeball">
                    <div className="pokeball__button"/>
                </div>
            ) : newPokemon !== undefined ? (
                <ContentDetail pokemon={newPokemon}/>
            ) : (
                <div>me mori</div>
            )}
        </div>
    );
};

PokemonDetails.displayName = 'PokemonDetails';
