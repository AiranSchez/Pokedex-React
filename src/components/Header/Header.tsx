import * as React from 'react';
import {useState} from 'react';
import './Header.scss';
import {HamburguerMenu} from './HamburguerMenu';
import {NavbarDesktop} from './NavbarDesktop';

export const Header: React.FC<{}> = () => {
    const [showModal, setShowModal] = useState(false);

    function handleModal() {
        setShowModal(!showModal);
    }
    return (
        <div className="Header">
            <div className="Navbar">
                <HamburguerMenu onClick={handleModal} show={showModal} />
                <NavbarDesktop show={showModal} onClick={handleModal}/>
            </div>
        </div>
    );
};

Header.displayName = 'Header';
