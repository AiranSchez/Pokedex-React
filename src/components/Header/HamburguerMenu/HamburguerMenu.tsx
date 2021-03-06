import * as React from 'react';
import './HamburguerMenu.scss';

interface NabBarMobilProps {
    onClick?: () => void;
    show?: boolean;
}

export const HamburguerMenu: React.FC<NabBarMobilProps> = ({onClick, show}) => (
    <div className="HamburguerMenu">
        {
            !show ?
                <div className={'container'} aria-label="HamburguerMenu" onClick={onClick}>
                    <span/>
                    <span/>
                    <span/>
                </div>:
                <div className={'CloseModal'} onClick={onClick}>X</div>
        }
    </div>
);

HamburguerMenu.displayName = 'HamburguerMenu';
