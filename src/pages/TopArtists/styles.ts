import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;

  @media (max-width: 900px) {
    align-items: flex-start;
    justify-content: space-between;
    flex-flow: column-reverse;
    max-height: 100vh;
    overflow-y: scroll;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  width: 45%;
  padding: 2%;
  height: 100vh;
  overflow-y: auto;

  h2 {
    font-size: calc(1em + 2vh);
    color: #fff;
  }

  .curArtist {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;
    height: 95%;

    gap: 5%;

    > .stats {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      width: 100%;
      min-height: 23%;

      p {
        display: flex;
        flex-flow: column nowrap;
        width: 33%;
        color: #fff;
        font-size: calc(1em + 2vh);
        text-align: center;
        font-weight: lighter;

        span {
          font-weight: bold;
          color: ${({ theme }) => theme.colors.accent};
          white-space: nowrap;
          overflow: hidden !important;
          text-overflow: ellipsis;
        }
      }
    }

    @media (max-width: 900px) {
      width: 95%;
      height: 40vh;
      font-size: calc(0.1em + 1vw);
    }
  }
  @media (max-width: 900px) {
    height: 45vh;
    width: 95%;
    overflow-y: scroll;

    &:nth-of-type(2) {
      width: 100%;
      margin-top: 2vh;
      padding-top: 10vh;
      min-height: 60vh;
      height: 45vh;
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

export { Container, Content, TopImage };
