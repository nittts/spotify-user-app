import { memo } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ theme }) => {
    return css`
      box-sizing: border-box;
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: flex-start;
      height: 100%;
      width: 100%;
      overflow-y: scroll;
      > header {
        position: relative;
        box-sizing: border-box;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 2%;
        height: auto;
        width: 100%;

        > button {
          background-color: transparent;
          position: absolute;
          top: 15%;
          right: 2%;
          color: #fff;
          border: 0.13em solid #fff;
          border-radius: 15px;
          padding: 0.5em 1.5em;
          text-transform: uppercase;
          font-weight: bold;
          transition: 0.5s all;

          :hover {
            background-color: #fff;
            color: #000;
          }
        }

        > .header-content {
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-between;
          padding: 2%;
          margin-left: 4%;
          width: 30%;
          height: ${theme.sizes["2xs"]};
          background-color: ${theme.colors.dark_2};
          box-shadow: 0.5em 0.5em 0em ${theme.colors.gray_2}, 1em 1em 0em ${theme.colors.gray_1},
            1.5em 1.5em 0em ${theme.colors.accent};

          h1 {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 3em;
            color: #fff;
            font-weight: bold;
            width: max-content;
            border-bottom: 0.1em solid transparent;

            svg {
              margin-left: 0.2em;
              font-size: 0.8em;
            }

            :hover {
              color: ${theme.colors.accent};
              border-bottom: 0.1em solid ${theme.colors.accent};
              cursor: pointer;
            }
          }

          span {
            color: ${theme.colors.gray_1};
          }

          > div + div {
            display: flex;
            justify-content: space-evenly;

            p {
              display: flex;
              align-items: center;
              flex-flow: column nowrap;
              justify-content: center;
              width: ${theme.sizes.quarter};
              color: ${theme.colors.gray_2};

              span {
                font-weight: bold;
                color: ${theme.colors.accent};
                font-size: 2em;
                margin-bottom: 1%;
              }

              :hover {
                filter: brightness(1.5);
              }
            }
          }
        }

        @media (max-width: 900px) {
          align-items: flex-start;
          justify-content: center;
          height: auto;
          flex-flow: column;

          button {
            top: 2%;
          }

          .header-content {
            width: 85%;
            margin: 15% 0%;
          }
        }
      }

      .loading-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
    `;
  }}
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
    `;
  }}
`;

const Content = memo(styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: space-evenly;
  box-sizing: border-box;
  width: 100%;
  margin-top: 6%;
  padding-top: 2%;
  height: 44%;
  box-shadow: inset 0px 0px 10px 10px rgba(0, 0, 0, 0.55);
  overflow-y: scroll;

  > div {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    width: 43%;

    > .title {
      display: flex;
      align-items: center;
      width: 105%;
      justify-content: space-between;

      > button {
        background-color: transparent;
        color: #fff;
        border: 0.13em solid #fff;
        border-radius: 15px;
        padding: 0.5em 1.5em;
        text-transform: uppercase;
        font-weight: bold;
        transition: 0.5s all;

        :hover {
          background-color: #fff;
          color: #000;
        }
      }
    }

    h1 {
      font-size: calc(1em + 2vh);
      color: #fff;
      text-align: center;
      margin-bottom: 0.1em;
    }
  }

  overflow-y: visible;

  @media (max-width: 900px) {
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: column;

    height: auto;
    > div {
      width: 90%;
    }
  }
`);

export { Container, TopImage, Content };
