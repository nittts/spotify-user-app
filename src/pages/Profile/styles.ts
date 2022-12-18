import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      min-height: 100vh;
      width: 100vw;
    `;
  }}
`;

const Content = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 90%;
    `;
  }}
`;
export { Container, Content };
