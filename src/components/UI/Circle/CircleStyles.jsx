import { css, styled } from 'styled-components'

export const CircleStyled = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bgCircle};
  opacity: 30%;
  filter: blur(130px);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 90;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
    filter: blur(150px);
  }

  ${({ position }) =>
    position === 'bottomleft' &&
    css`
      top: unset;
      bottom: 0;
      left: 0;
    `}
`
