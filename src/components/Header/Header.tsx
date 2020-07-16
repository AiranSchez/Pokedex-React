import * as React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import {ROUTE} from '../../routes/routes';

export const Header: React.FC<{}> = () => (

        <div className="Header">
            <div className="Navbar">
                <div className="NavbarLink">
                    <Link to={ROUTE.Home}>
                        Home
                    </Link>
                </div>
                <div className="NavbarLink">
                    <Link to={ROUTE.ConstructionPage}>
                        Pokemon Games
                    </Link>
                </div>
                <div className="NavbarLink">
                    <Link to={ROUTE.ConstructionPage}>
                        Items
                    </Link>
                </div>
                <div className="NavbarLink">
                    <Link to={ROUTE.ConstructionPage}>
                        Pokemon List
                    </Link>
                </div>
                <div className="NavbarLink">
                    <Link to={ROUTE.ConstructionPage}>
                        Moves
                    </Link>
                </div>
                <div className="NavbarLink">
                    <Link to={ROUTE.ConstructionPage}>
                        Berries
                    </Link>
                </div>
            </div>
        </div>

);

Header.displayName = 'Header';
