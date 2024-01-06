import { styled } from "styled-components"

export const LogoStyled = styled.div`
  font-size: ${({ size }) => `${size}px`};

  font-weight: var(--bold);

  a {
    color: inherit;
  }
`
