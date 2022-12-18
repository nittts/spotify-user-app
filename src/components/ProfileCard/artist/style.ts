import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-flow: row nowrap;
      height: ${theme.sizes.max};
      background-color: ${theme.colors.dark_2};
      width: 100%;
      padding: 2%;
      margin: 1% 0;
      border-left: 0.5em solid ${theme.colors.accent};
      box-shadow: 1px 1px 4px 4px rgba(0, 0, 0, 0.25);

      :hover {
        cursor: pointer;
        filter: brightness(2);

        img {
          filter: blur(4px) brightness(0.8);
        }
      }

      img {
        width: calc(2em + 15vh);
        height: calc(2em + 15vh);
      }

      .card-info {
        box-sizing: border-box;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        justify-content: space-between;
        color: #fff;
        height: calc(2em + 15vh);
        width: 74%;
        margin-left: 1%;
        padding: 2%;

        > div {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          background-color: ${theme.colors.accent};
          width: 100%;
          padding: 0.2em 0;
        }
      }
      @media (max-width: 900px) {
        font-size: calc(0.5em + 1vw);

        p {
          height: auto;
          text-align: center;
          font-size: calc(0.5em + 1vw);
        }
      }
    `;
  }}
`;

const Title = styled.h2`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-flow: column nowrap;
      font-size: calc(1em + 2vh);

      span {
        font-size: calc(0.3em + 1vh);
        color: ${theme.colors.gray_1};
      }
    `;
  }}
`;

export { Title, Container };
