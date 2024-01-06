import styled from "styled-components"

export const RandomNewStyled = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  margin-top: 20px;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgb(0 0 0 /0.1),
      rgb(0 0 0 /0.5),
      rgb(0 0 0 /0.5),
      rgb(0 0 0 / 0.9)
    );
    backdrop-filter: blur(1.5px);
    z-index: 1;
  }

  a {
    color: var(--clr-primary-100);
  }
  @media (min-width: 768px) {
    height: 70vh;
  }
`

export const RandomNewImgStyled = styled.img`
  border-radius: var(--radius);
`

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
    color: var(--textColorRandomNews);
    margin-inline: auto;
    font-size: clamp(30px, 2vw, 60px);
    text-wrap: balance;
  }
`
