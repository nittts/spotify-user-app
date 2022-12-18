import styled, { css, keyframes } from "styled-components";

interface IMenuProps {
  active?: string;
}

const Container = styled.div`
  ${({ theme }) => css`
    background-color: rgb(4, 3, 6);
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    justify-content: space-between;
    height: 100vh;
    width: 10%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: 2s;
    z-index: 9999;

    > svg {
      box-sizing: border-box;
      color: ${theme.colors.accent};
      width: ${theme.sizes.full};
      height: calc(3em + 2vh);
      padding: 1em;

      :hover {
        cursor: pointer;
        filter: drop-shadow(0 0 10px ${theme.colors.accent});
      }
    }
  `}
`;

const Content = styled.div<IMenuProps>`
  ${({ theme, active }) => {
    return css`
      height: ${theme.sizes.half};
      width: ${theme.sizes.full};
      border-left: 0.4rem solid transparent;
      font-size: calc(0.3em + 1vw);

      .active {
        background: ${theme.colors.dark_1};
        color: #fff;
        border-left: 0.5rem solid ${theme.colors.accent};
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

        span {
          color: #fff;
        }

        :hover {
          filter: brightness(2);
        }
      }

      > div {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        color: ${theme.colors.gray_1};
        height: ${theme.sizes.oneFifth};
        width: ${theme.sizes.full};
        gap: 5%;

        :hover {
          color: #fff;
          cursor: pointer;
          span {
            color: #fff;
          }
        }

        svg {
          font-size: calc(1em + 1vh);
        }

        span {
          color: ${theme.colors.gray_1};
          text-decoration: none;
        }
      }
    `;
  }};
`;

export { Container, Content };
