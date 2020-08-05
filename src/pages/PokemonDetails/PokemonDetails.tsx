import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import './styles.scss';
import {ContentDetail} from '../../components/ContentDetail';
import {useParams} from 'react-router-dom';
import '../../assets/Pokeball/pokeball-style.css';
import {Pokemon} from './GenericInterfaces';
import Client from '../../utils/axios';
import {Context} from '../../Context';

interface PokeProps {
    searchTerm: string;
}

export const PokemonDetails: React.FC<PokeProps> = () => {
    const {PokemonURL: urlParam} = useParams();
    const [flag, setFlag] = useState(false);
    const [newPokemon, setNewPokemon] = useState<Pokemon>();
    const context:any = useContext(Context);
    useEffect(() => {
        setFlag(true);
        const client = new Client();
        const info = client.getPokemonDataFromUrlWithParams(urlParam);
        info.then((response) => {
            setNewPokemon((prevState) => ({
                    ...prevState, data: response.data
                }
            ));
            setFlag(false);
        });
    }, [urlParam]);
    context.setTheme(newPokemon?.data.types[0].type.name);
    return (
        <div className="PokemonDetails">
            {console.log(newPokemon?.data.types[0].type.name)}
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
