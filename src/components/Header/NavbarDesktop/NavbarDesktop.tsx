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
);

NavbarDesktop.displayName = 'NavbarDesktop';
