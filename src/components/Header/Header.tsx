import * as React from 'react';
import {useContext, useState} from 'react';
import './Header.scss';
import {HamburguerMenu} from './HamburguerMenu';
import {NavbarDesktop} from './NavbarDesktop';
import useWindowSize from '../../utils/hooks/useWindowSize';
import {Context, ContextProps} from '../../Context';

export const Header: React.FC<{}> = () => {
    const [showModal, setShowModal] = useState(false);

    function handleModal() {
        setShowModal(!showModal);
    }

    const size = useWindowSize();
    const context = useContext<ContextProps>(Context);
    return (
        <div className="Header" style={{backgroundColor: `${context.theme}`}}>
                <div className="Navbar">
                    {
                        // @ts-ignore
                        size.width < 576 ? <NavbarDesktop show={showModal} onClick={handleModal}/> :
                            <NavbarDesktop show={showModal}/>
                    }
                    <HamburguerMenu onClick={handleModal} show={showModal}/>
                </div>
        </div>
    );
};

Header.displayName = 'Header';
