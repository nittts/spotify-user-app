import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;

  @media (max-width: 900px) {
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: column-reverse;
    height: 100vh;
    width: 100vw;
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
  overflow-y: scroll;

  h2 {
    font-size: calc(1em + 2vh);
    color: #fff;
  }

  .list-header {
    width: 100%;
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: flex-end;
    font-weight: lighter;
    gap: 2%;
    margin-bottom: 1%;

    h6 {
      border-bottom: 0.1em solid transparent;

      :hover {
        cursor: pointer;
        border-color: #fff;
      }
    }

    @media (max-width: 900px) {
      align-items: center;
    }
  }

  .curTrack {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 55%;
    gap: 1%;

    > div {
      width: 45%;

      span {
        color: #fff;
      }
    }

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
        }
      }
    }
    @media (max-width: 900px) {
      align-items: flex-end;
      margin-bottom: 10%;
    }
  }

  .trackInfo {
    width: 100%;
    margin-top: 2%;
    height: 38%;
  }

  @media (max-width: 900px) {
    justify-content: flex-start;
    align-items: center;

    width: 93%;
  }
`;

const TopImage = styled.div<{ src: string }>`
  ${({ theme, src }) => {
    return css`
      position: relative;
      height: ${theme.sizes.half};
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

      svg {
        position: absolute;
        top: 40%;
        left: 35%;
        font-size: 5em;

        display: none;
      }

      :hover {
        border: 0.5em solid ${theme.colors.accent};

        svg {
          display: block;
          z-index: 1000;
          cursor: pointer;
        }

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
        width: 100%;
        height: 20vh;

        min-width: 10%;
        min-height: 10%;

        svg {
          top: 25%;
          left: 40%;
          width: 25%;
        }

        ::after {
          width: 100%;
          height: 100%;

          min-width: 10%;
          min-height: 10%;
        }
      }
    `;
  }}
`;

export { Container, Content, TopImage };
