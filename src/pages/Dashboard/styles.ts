import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  @media (max-width: 800px) {
    flex-wrap: wrap-reverse;
    padding: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  margin-left: 10px;
  height: 10px;
  width: 200px;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;
