import styled from 'styled-components';
import { shade } from 'polished';

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 5px 5px 5px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: auto;

  img {
    padding: 10px;
    width: 138px;
    height: 150px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    border: 0;
    background: #f77f00;
    color: #fbfbfb;
    padding: 10px;
    margin-top: 10px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#f77f00')};
    }
  }
`;
