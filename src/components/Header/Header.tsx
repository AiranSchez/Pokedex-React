import * as React from 'react';
import './Header.scss';
import logo from '../../logo.svg';

export const Header: React.FC<{}> = () => (
  <div className="Header">
      <div className="Navbar">
          <div className="NavbarLink">Pokemon data</div>
          <div className="NavbarLink">Game mechanics</div>
          <div className="NavbarLink">Pokemon games</div>
      </div>
  </div>
);

Header.displayName = 'Header';
