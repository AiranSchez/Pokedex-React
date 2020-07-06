import * as React from 'react';
import './styles.scss';
import {ContentDetail} from '../../components/ContentDetail';

export const PokemonDetails: React.FC<{}> = () => (
    <div className="PokemonDetails">
        <ContentDetail/>
    </div>
);

PokemonDetails.displayName = 'PokemonDetails';
