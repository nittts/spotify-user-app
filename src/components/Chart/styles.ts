import styled, { css } from "styled-components";

interface IBarprops {
  size: number;
  color: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;

  background-size: 40px 40px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);

  border: 0.1em solid rgba(255, 255, 255, 0.5);

  > div {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 2% 0.5%;
    width: auto;
    height: 100%;

    color: #fff;

    @media (max-width: 900px) {
      font-size: calc(0.4em + 0.1vw);
    }
  }
`;

const Bar = styled.div<IBarprops>`
  ${({ theme, size, color }) => {
    return css`
      z-index: 10;
      position: relative;
      color: ${color.substring(0, color.lastIndexOf(",")) + ",1)"};
      background-color: ${color.substring(0, color.lastIndexOf(",")) + ",0.3)"};

      width: 60%;
      height: ${size * 100 - 10}%;
      border: 0.15em solid ${color.substring(0, color.lastIndexOf(",")) + ",1)"};

      :hover {
        background-color: ${color.substring(0, color.lastIndexOf(",")) + ",0.9)"};
      }

      ::after {
        display: block;
        content: "${size}";
        color: #fff;
        position: absolute;
        width: 100%;
        height: 100%;

        top: -1.1em;
      }
      @media (max-width: 900px) {
        font-size: 1.3em;
      }
    `;
  }}
`;

export { Container, Bar };
