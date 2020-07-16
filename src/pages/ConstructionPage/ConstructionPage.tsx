import * as React from 'react';
import GIF from '../../assets/tenor.gif';

export const ConstructionPage: React.FC<{}> = () => {
    return (
        <div className={'Home'}>
            <img src={GIF} alt="Gif Pikachu construyendo"/>
        </div>
    );
};