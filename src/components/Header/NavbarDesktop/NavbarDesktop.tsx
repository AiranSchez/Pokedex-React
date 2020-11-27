import * as React from 'react';
import './NavbarDesktop.scss';
import {Link} from 'react-router-dom';
import {ROUTE} from '../../../routes/routes';

interface NavbarDesktopProps {
    show?: boolean;
    onClick?: () => void;
}
export const NavbarDesktop: React.FC<NavbarDesktopProps> = ({show, onClick}) => (
  <div className={!show ? 'NavbarDesktop' : 'NavbarModalShow'} onClick={onClick}>
      <div className="NavbarLink">
          <Link to={ROUTE.Home}>
              Home
          </Link>
      </div>
      <div className="NavbarLink">
          <Link to={ROUTE.PokemonList}>
              Pokemon List
          </Link>
      </div>
  </div>
);

NavbarDesktop.displayName = 'NavbarDesktop';
