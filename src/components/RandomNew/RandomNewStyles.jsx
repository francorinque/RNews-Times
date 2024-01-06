import styled from "styled-components"

export const RandomNewStyled = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  margin-top: 20px;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgb(0 0 0 /0.1),
      rgb(0 0 0 /0.5),
      rgb(0 0 0 /0.6),
      rgb(0 0 0 / 0.9)
    );
    backdrop-filter: blur(1.3px);
    z-index: 1;
  }

  @media (min-width: 768px) {
    height: 70vh;
  }
`

export const WrapperLoader = styled.div`
  min-height: 50vh;
  display: grid;
  place-content: center;
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
  color: var(--textColorRandomNews);

  h4 {
    max-width: 500px;
    margin-inline: auto;
    font-size: clamp(30px, 2vw, 60px);
    text-wrap: balance;
  }

  span {
    opacity: 60%;
  }
`
