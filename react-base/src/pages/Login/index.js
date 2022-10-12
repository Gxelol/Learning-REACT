import React from 'react';
import { useDispatch } from 'react-redux';

import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: 'CLICKED_BUTTON',
    });
  }

  return (
    <Container>
      <Title isRed={false}>
        I will do my Login
        <p>hello my world!</p>
      </Title>
      <Paragraph>Hey, could you style me?</Paragraph>

      <button type="button" onClick={handleClick}>
        Send
      </button>
    </Container>
  );
}
