import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #fff;
    margin: 0 1rem 0 0;
    font-weight: bold;
  }
`;
