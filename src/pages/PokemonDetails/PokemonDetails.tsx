import * as React from 'react';
import './styles.scss';
import {ContentDetail} from '../../components/ContentDetail';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

interface PokeProps {
    SearchTerm: string;
}

export const PokemonDetails: React.FC<PokeProps> = ({SearchTerm}) => {
        const [ahahah, seahahah] = useState('');
        const {Poke: urlparams} = useParams();

        useEffect(() => {
            try {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${urlparams.toLowerCase()}`)
                    .then((response) =>{
                        console.log(urlparams);
                        seahahah(response.data);}
                        );
            } catch (error) {
                console.log(error);
            }
        }, [SearchTerm, urlparams]);

        return (
            <div className="PokemonDetails">
                {SearchTerm}
                <p>Nombre: { urlparams}</p>
                <ContentDetail pokemon={ahahah}/>
            </div>

        );
    }
;

PokemonDetails.displayName = 'PokemonDetails';
