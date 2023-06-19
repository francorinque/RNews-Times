import styled from "styled-components"

export const RandomNewStyled = styled.div`
  width: 100%;
  position: relative;
  height: 80vh;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: #000000a7;
    backdrop-filter: blur(1.5px);
    z-index: 1;
  }

  a {
    color: var(--clr-primary-100);
  }
`

export const RandomNewImgStyled = styled.img``

export const RandomNewTextsStyled = styled.div`
  position: absolute;
  width: 100%;
  inset: 0;
  display: grid;
  place-content: center;
  text-align: center;
  padding: 20px;
  z-index: 2;

  h4 {
    max-width: 500px;
    margin-inline: auto;
    font-size: clamp(20px, 2vw, 30px);
  }
`
