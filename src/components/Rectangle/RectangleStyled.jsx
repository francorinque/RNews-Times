import styled from "styled-components"

export const RectangleStyled = styled.span`
  position: relative;
  display: inline-block;

  &::after {
    z-index: -1;
    content: "";
    width: 50%;
    height: 40%;
    background-color: var(--bgColorMenu);
    position: absolute;
    opacity: 80%;
    right: 0;
    top: 35px;
  }
`
