import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Error } from './styled';

export default function Page404() {
  return (
    <Container>
      <Error>
        Page 404
        <p>This page does not exists.</p>
      </Error>
    </Container>
  );
}
