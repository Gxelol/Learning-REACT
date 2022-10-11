import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => (props.isRed ? 'red' : 'blue')};

  p {
    color: purple;
    margin: 2rem;
    font-size: 2.5rem;
  }
`;

export const Paragraph = styled.p`
  color: red;
  font-size: 2rem;
  font-style: italic;
  margin: 1rem;
`;
