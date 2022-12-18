import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${theme.sizes.full};
    width: ${theme.sizes.full};
  `}
`;

export { Container };
