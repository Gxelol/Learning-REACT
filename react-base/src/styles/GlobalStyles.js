import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: sans-serif;
  background: ${primaryDarkColor};
  color: ${primaryDarkColor};
}

html, body, #root {
  height: 100%;
}

button {
  cursor: pointer;
  background: ${primaryColor};
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  color: #ffffff;
  font-weight: 700;
}

a {
  text-decoration: none;
  color: ${primaryColor};
}

ul {
  list-style: none;
}
`;

export const Container = styled.section`
  max-width: 36rem;
  background: #fff;
  margin: 3rem auto;
  padding: 3rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.1);
`;
