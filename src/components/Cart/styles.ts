import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContentProps {
  isEmpty: boolean;
}

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 100vh;
  width: 25%;
  overflow: auto;

  h2 {
    margin-top: 10px;
    text-align: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    border: 0;
    background: #d62828;
    color: #fbfbfb;
    padding: 10px;
    margin-top: 10px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#d62828')};
    }
  }

  @media (max-width: 800px) {
    display: flex;
    width: 100%;
    height: auto;
  }
`;

export const Content = styled.div<ContentProps>`
  flex-grow: 1;
  ${props =>
    props.isEmpty &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      color: #dad7d3;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;

        svg {
          margin-bottom: 5px;
        }
      }
    `}
`;

export const Products = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  border-bottom: 1px solid;
  border-color: rgb(190, 190, 190);
  padding: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const TotalCart = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 5px;
  margin-top: 20px;

  span {
    margin-left: 5px;
  }
`;

export const CartEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
