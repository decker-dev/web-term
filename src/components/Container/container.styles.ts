import styled from 'styled-components';

const Container = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  display: grid;
  padding: 2rem;
  grid-template-columns: auto 1fr;
  p {
    margin: 0;
  }
  input {
    border: none;
    outline: none;
    font-size: 1.1rem;
    background: #fbf1c9;
    :hover {
      cursor: default;
    }
  }
`;
export default Container;
