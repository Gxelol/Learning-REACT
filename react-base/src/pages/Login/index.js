import React from 'react';
import { useDispatch } from 'react-redux';

import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clickButtonRequest());
  }

  return (
    <Container>
      <Title>
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
