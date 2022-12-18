import styled, { css, Keyframes, keyframes } from "styled-components";

const spin = keyframes`
     from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }

`;

const fadeIn = keyframes`
     from {
    opacity: 1;
  }

  to {
    opacity: 0.2;
  }

`;

const addMultiple = (ammount: number) => {
  let styles = "";

  for (let i = 1; i <= ammount; i++) {
    styles += `
        &:nth-child(${i}) {
            animation-duration: 2s;
            animation-timing-function: ease-in;
            animation-iteration-count: infinite;
            animation-delay: ${0.2 * i}s;
        }
        `;
  }
  return css`
    ${styles}
  `;
};

const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-flow: column nowrap;
      gap: 3%;
      align-items: center;
      justify-content: center;

      height: ${theme.sizes.container.md};
      width: ${theme.sizes.container.md};

      div + div {
        text-align: center;
        width: ${theme.sizes.quarter};
        height: 3%;
      }

      div > span {
        display: inline-block;
        border-radius: 9999px;
        margin-inline: 1rem;
        background-color: ${theme.colors.dark_2};
        width: 10%;
        height: 90%;
        animation-name: ${fadeIn};
        ${addMultiple(3)}
      }
    `;
  }};
`;

const LoadingCircle = styled.div`
  ${({ theme }) => {
    return css`
      height: ${theme.sizes.oneFifth};
      width: ${theme.sizes.oneFifth};
      background-color: transparent;
      border: 0.5em solid ${theme.colors.gray_2};
      border-bottom-color: ${theme.colors.accent};
      border-radius: 9999px;
      animation: ${spin} 0.5s linear infinite;
    `;
  }}
`;

export { Container, LoadingCircle };
