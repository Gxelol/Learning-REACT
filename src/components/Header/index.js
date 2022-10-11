import React from 'react';
import { FaSignInAlt, FaUserAlt, FaHome } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <p>
        <FaHome size="2.4rem" />
      </p>
      <p>
        <FaUserAlt size="2rem" />
      </p>
      <p>
        <FaSignInAlt size="2.4rem" />
      </p>
    </Nav>
  );
}
