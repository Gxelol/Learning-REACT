import React from 'react';

import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        I will do my Login
        <p>hello my world!</p>
      </Title>
      <Paragraph>Hey, could you style me?</Paragraph>
    </Container>
  );
}
