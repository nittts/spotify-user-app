import styled, { css } from "styled-components";

const Container = styled.div`
  width: 96%;
  height: 92%;
  padding: 2%;

  h1 {
    height: 5%;
    color: #fff;
  }

  > div {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 95%;
    width: 100%;
    padding: 0% 5%;

    > div {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      height: 50%;
    }

    gap: 5%;
    overflow-x: scroll;

    span {
      margin-top: 15%;
      color: #fff;
    }
  }

  @media (max-width: 900px) {
    overflow-y: scroll;
    height: 100vh;

    div {
      flex-flow: column nowrap;
      align-items: center;
      justify-content: flex-start;
      height: auto;
    }

    h1 {
      text-align: center;
      margin-bottom: 5%;
    }
  }
`;

const TopImage = styled.div<{ src: string }>`
  ${({ theme, src }) => {
    return css`
      height: ${theme.sizes["sm"]};
      width: ${theme.sizes["2xs"]};
      min-height: ${theme.sizes["xs"]};
      min-width: ${theme.sizes["3xs"]};
      box-shadow: 0.5em 0.5em 0em ${theme.colors.gray_1}, 1em 1em 0em ${theme.colors.dark_2},
        1.5em 1.5em 0em ${theme.colors.accent};
      background-image: url(${src});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      ::after {
        display: block;
        box-shadow: inset 0 0 6em rgba(0, 0, 0, 0.7);
        content: " ";
        width: 100%;
        height: 100%;
      }

      :hover {
        border: 0.5em solid ${theme.colors.accent};
        cursor: pointer;

        ::after {
          display: block;
          box-shadow: none;
          content: " ";
          background-color: black;
          opacity: 0.6;
          width: 100%;
          height: 100%;
        }
      }

      @media (max-width: 900px) {
        width: 50vw;
        height: auto;
      }
    `;
  }}
`;

export { Container, TopImage };
