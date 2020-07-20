import * as React from 'react';
import {useState} from 'react';
import './Header.scss';
import {HamburguerMenu} from './HamburguerMenu';
import {NavbarDesktop} from './NavbarDesktop';
import useWindowSize from '../../utils/hooks/useWindowSize';

export const Header: React.FC<{}> = () => {
    const [showModal, setShowModal] = useState(false);

    function handleModal() {
        setShowModal(!showModal);
    }
    const size = useWindowSize();
    return (
        <div className="Header">
            <div className="Navbar">
                {
                    // @ts-ignore
                    size.width < 576 ? <NavbarDesktop show={showModal} onClick={handleModal}/> : <NavbarDesktop show={showModal}/>
                }
                <HamburguerMenu onClick={handleModal} show={showModal} />
            </div>
        </div>
    );
};

Header.displayName = 'Header';
