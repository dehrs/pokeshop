import React from 'react';

import logo from '../../assets/logo.png';
import { NavBar } from './styles';

const Header: React.FC = () => (
  <NavBar>
    <img src={logo} alt="PokéShop" />
  </NavBar>
);

export default Header;
