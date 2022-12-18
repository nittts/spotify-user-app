import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 90%;
  padding-top: 5%;
  overflow-y: scroll;
`;

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  padding-left: 1%;
  color: #fff;
  width: 90%;
  position: relative;

  > span {
    position: absolute;
    top: 20%;
    right: -3%;
    z-index: 10;
    color: ${({ theme }) => {
      return theme.colors.gray_2;
    }};
  }
  @media (max-width: 900px) {
    > span {
      top: 40%;
    }
    font-size: calc(0.5em + 0.1vw);
  }
`;

export { Container, Content };
