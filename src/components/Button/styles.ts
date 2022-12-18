import styled, { css } from "styled-components";

const Container = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.accent};
    border: none;
    border-radius: 10px;
    padding: 1em 3em;
    color: #fff;
    font-weight: bold;
    font-size: 1em;

    :hover {
      filter: brightness(1.2);
    }

    :active {
      filter: brightness(0.9);
    }
  `}
`;

export { Container };
