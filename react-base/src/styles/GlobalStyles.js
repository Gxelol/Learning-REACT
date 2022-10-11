import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

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
  background: ${colors.primaryDarkColor};
  color: ${colors.primaryDarkColor};
}

html, body, #root {
  height: 100%;
}

button {
  cursor: pointer;
  background: ${colors.primaryColor};
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  color: #ffffff;
  font-weight: 700;
}

a {
  text-decoration: none;
  color: ${colors.primaryColor};
}

ul {
  list-style: none;
}

body .Toastify .Toastify_toast-container .Toastify-toast--success {
  background: ${colors.successColor};
}

body .Toastify .Toastify_toast-container .Toastify-toast--error {
  background: ${colors.errorColor};
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
