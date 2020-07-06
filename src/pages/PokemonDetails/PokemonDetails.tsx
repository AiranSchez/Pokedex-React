import * as React from 'react';
import './styles.scss';
import {ContentDetail} from '../../components/ContentDetail';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import '../../assets/Pokeball/pokeball-style.css';

interface PokeProps {
    searchTerm: string;
}

export const PokemonDetails: React.FC<PokeProps> = () => {
        const [pokemon, setPokemon] = useState('');
        const {PokemonURL: urlParam} = useParams();
        const [flag, setFlag] = useState(false);

        useEffect(() => {
            try {
                setFlag(true);
                axios.get(`https://pokeapi.co/api/v2/pokemon/${urlParam.toLowerCase()}`)
                    .then((response) => {
                            setPokemon(response.data);
                            setFlag(false);
                        }
                    );

            } catch (error) {
                console.log(error);
            }
        }, [urlParam]);

        return <div className="PokemonDetails">
            {flag ?
                <div className="pokeball">
                    <div className="pokeball__button"/>
                </div>
                : <ContentDetail pokemon={pokemon}/>}
        </div>;
    }
;

PokemonDetails.displayName = 'PokemonDetails';
