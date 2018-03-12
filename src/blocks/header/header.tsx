import * as React from 'react';
import styled from 'styled-components';

import Logo from '../../components/logo';
import Plus from '../../components/icons/plus';

import { Link, NavLink } from 'react-router-dom';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <Logo />
        <NavLink className="header__link" to="/today">
          Сегодня
        </NavLink>
        <NavLink className="header__link" to="/everyday">
          Каждый день
        </NavLink>
        <NavLink className="header__link" to="/storybook">
          storybook
        </NavLink>
      </div>
    );
  }
}

export default Header;
