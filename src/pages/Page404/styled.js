import styled from 'styled-components';

import { errorColor } from '../../config/colors';

export const Error = styled.h1`
  color: ${errorColor};
  font-size: 4rem;
  font-weight: bold;

  p {
    color: ${errorColor}
    font-style: italic;
    font-size: 2rem;
  }
`;
