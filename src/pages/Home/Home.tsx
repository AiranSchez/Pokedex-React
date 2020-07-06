import * as React from 'react';
import './styles.scss';
import {Body} from '../../components/Body';


export const Home: React.FC<{}> = () => {
    return (
        <div className={'Home'}>
            <Body/>
        </div>
    );
};

