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
            {/*<svg >*/}
            {/*    <path  d="m0.44718-2.4212c0.54842 35.903 296.43 3.4982 296.98 27.854 0.54842 24.356 1.081-27.674 1.081-27.674z" fill="#f55"/>*/}
            {/*</svg>*/}
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
