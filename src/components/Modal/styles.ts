import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: ${lighten(0.1, '#f77f00')};

  button {
    background: transparent;
    border: 0;
    margin: 5px;
  }
`;

export const ContentHeader = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #fff;
  width: 100%;
  height: 50%;

  strong {
    font-size: 30px;
    margin-bottom: 5px;
  }
`;
