import React from 'react';
import { FaSignInAlt, FaUserAlt, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const clickedButton = useSelector((state) => state.clickedButton);

  return (
    <Nav>
      <Link to="/">
        <FaHome size="2.4rem" />
      </Link>
      <Link to="/">
        <FaUserAlt size="2rem" />
      </Link>
      <Link to="/">
        <FaSignInAlt size="2.4rem" />
      </Link>
      {clickedButton ? 'clicked' : 'nothing'}
    </Nav>
  );
}
